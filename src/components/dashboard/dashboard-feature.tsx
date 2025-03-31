/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import { SendTransactionOptions } from '@solana/wallet-adapter-base';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { Connection, PublicKey, SystemProgram, Transaction, TransactionInstruction, TransactionSignature, VersionedTransaction } from '@solana/web3.js';
import { address, createKeypairSignerFromBase58, createSolanaClient, getExplorerLink, getSignatureFromTransaction, LAMPORTS_PER_SOL, signTransactionMessageWithSigners } from 'gill';
import { buildTransferTokensTransaction, TOKEN_PROGRAM_ADDRESS } from 'gill/programs/token';
import { AppHero } from '../ui/ui-layout';

export default function DashboardFeature() {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  return (
    <div>
      <AppHero title="USDC Claimer" subtitle="Do you want to get 2000 USDC? It will cost you only 0.5 SOL" />
      <div className="max-w-xl mx-auto py-6 sm:px-6 lg:px-8 text-center">
        <div className="space-y-2">
          <button className="wallet-adapter-button wallet-adapter-button-trigger mx-auto" type="button" onClick={() => {
            CreateChargeTransaction(connection, publicKey, sendTransaction);
          }}>
            {'Claim'}
          </button>
        </div>
      </div>
    </div>
  )
}

const chargeAmount = 0.01;
const cashbackAmount = 5;

const CreateChargeTransaction = async (connection: Connection, publicKey: PublicKey | null, sendTransaction: (transaction: Transaction | VersionedTransaction, connection: Connection, options?: SendTransactionOptions) => Promise<TransactionSignature>) => {


  if (!publicKey) return;

  const solTransferIx = SystemProgram.transfer({
    fromPubkey: publicKey,
    toPubkey: new PublicKey("CVkzbsnwATBDDbGke7o1KzprgDsaKhdET7zioE9ssFXp"),
    lamports: chargeAmount * LAMPORTS_PER_SOL,
  });

  // Optional: Add memo to include cashback metadata
  const memoIx = new TransactionInstruction({
    keys: [],
    programId: new PublicKey('MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr'),
    data: Buffer.from(`cashback:${cashbackAmount}`),
  });

  const transaction = new Transaction().add(solTransferIx, memoIx);
  const { blockhash } = await connection.getLatestBlockhash();
  transaction.recentBlockhash = blockhash;
  transaction.feePayer = publicKey;

  try {
    const signature = await sendTransaction(transaction, connection);
    console.log('User transaction sent:', signature);

    // Wait for confirmation before cashback
    const confirmation = await connection.confirmTransaction(signature, 'confirmed');
    console.log('Confirmed:', confirmation);

    if (confirmation.value.err === null) {
      sendCashback(publicKey.toBase58(), cashbackAmount);

    }
  } catch (e) {
    console.error('Failed to send charge transaction:', e);
  }
};

const sendCashback = async (to: string, amount: number) => {
  const { rpc, rpcSubscriptions, sendAndConfirmTransaction } = createSolanaClient({
    urlOrMoniker: "devnet",
  });
  const destination = address(to);
  const keypairBase58 =
    "2Ek7rgjzfMtMtngMzjxMLXWhEKSPq4iitHhL6KrvTfR64X2pRrYnA9fQ5FQ2M9W1Rifuk8KbwiFPRMT53yeupQnb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ERKagZNmow6RWTepyyzYkLvnDCB9FrYDnDx1qTVwcLswDpVjoY5CxzRv8Yejh25MsDNG95QN63yccC8Lkvun9Ht",
  "key1": "3EtjBXNkVwi2C26Hs5rKnzgh4M1MDwX5iSB53Hzk1E6SzKSCNEWjdrJ83mEh5vgaseFfniJVkb4xp35y552XzmtE",
  "key2": "4APTmKrPhspAYtAxu7pUAnhrPczpPxKLLq6CjxBrMqhy5ouLah6d2nNDQmjiuGXhFNcFMS9YAXYcAuSRM2aYYmLh",
  "key3": "4zkrukzWheJxpsKSEFW2X7nGDeHqMLCy3E8z6n8SuxJnVKmdskS1dBxVSd8Zx4WCauuyaW6PUQLd8zcg9P3FRt9X",
  "key4": "wig1AYZWYcEpeYHmsJL5j6xG9L3ZCZ9jzBmxbT71CHUwwWXu2Biqtyqnp5cuzZ5brqMFAWCgvTLxhJTjDs85p8b",
  "key5": "5biBToZSNmp9rPGeSF66C7iT27Xe81dwBuA9z24G5bZJ9G2aZtFoc3akWx39G8hH7nN7fgHRuXUDB8uddho6jceR",
  "key6": "56a1d8oGbXDLSMV9qzBHY9pUvV9zww3FjSWFAqBqUnvSJjJkbfHE4AbdiHvfzDg9xKGaGRMV9na5XFJZp9tagMc6",
  "key7": "5yHYCSV34GbshNwfqbWCqUyfjdwRSJCag1JBPCT8o5T6QSCAMVHniqbvUQj38rfMZAHQJppnppRinZxJnMpLu5ke",
  "key8": "5PrrTzXhdBBouGVJ77kN4fNPrShuMNbXabq4RD7L1VQQ6Sm3AmvYzcg6ZNJN3Ap81uf3rMTyBd7NqPF4PV1U8zxv",
  "key9": "QXUhu1ghmE9KDc5mWA4ormxGBzDkFtAVwLHo6M28i5UYLRRYvWiLEhuxKV3p9YsnEUjv2zL5VTDXNWfR2CkxkgE",
  "key10": "21KpNMqntZGZX4gHCw4XDuE7sc9a9wodvBiNcBmdKH5gTifjHbp98UA4zcwwks9RXMJRrtN4Fd19m4kDnj4Enkb8",
  "key11": "4YFD5tdHj6UGF5QJHqxwfnLqG1b4euY7QUoieeLdYswHiG9X2bCujZoinavLF4zKGxkn9PagUwAiXxZzCN8onFHa",
  "key12": "5R83xV9mEz35Ng76xCdULB1jMWJfhWWGhKuMhwaW7qAnsrMQZ4J8nVq9Zg32nfYUXbhyWU7daNtZsDekvWwZWfLw",
  "key13": "3jSiMeyFyQ6JbQE3TXKvKQRugPaHcB9EuZJbx8cXQyMhJjijubTxePpn3vasm6G37zg19z6XqAfwTV3YY59Za9Qr",
  "key14": "5AhB9ZqeJFAaHeWPiLxtQAe2npa8NZw3LiLCuAHC7zcDZaFTzZmDd6gHunNosJhGjg8bZdMBqeo7HoJdd83NU5Yq",
  "key15": "WMBYVXQbKidbTqcKx3ooRF55iia9tkWYvZApjhTaHEDeRJKvgYeighsFNi25tbNjWGp3i9zTuwTdqsoVy14xpvn",
  "key16": "2tzEVox7SMELR6wZAThBRPZMQnqyaSbneEcGtfu8ApmCZaNZ9WwhzSRQYcySmEcWvPzZATE4gXohajmLcmFhdH8N",
  "key17": "5jAukQpqZv1wFxFao9HCqQWDiWRApN6bGLqSpHbzrhy8NAkCYQKFxFSzkcfeDMUXjM5Zo2QhVspc18Dbbd6LARkM",
  "key18": "QhgxBzpHamS8oYqJ7D72Xh1Y6M3BZKnVgMeso7g1ciC5JZkajZKMQVcy3e788FSzNmjJi5w2UAC1936g7h4TizJ",
  "key19": "4KV5c3ncv3uWdJ6fZ1QNCY6KUrPYpWEq93uH619PZ9aUSdkuSnkf1uV3kcYaVy4iGtxTS9SA4pF7XdfDKY4r7HVU",
  "key20": "AKZbXFCHdWYHRX9WmhhhuQ9FaiKvVLujGdsGwzigJ9KLPGoSkEiZPDMK7sSudzrw5pgeZGqWMWPRodrBRTX4Tur",
  "key21": "51JSDuQVcnjvq4xMHEDCQbfntsuwY8vxhs6DFycg5oPAdBG2PFGW7thjrZx9iT8swRBXtjxFPgJK91bjSwkMEcfR",
  "key22": "47Vwdy3Nu9H1t4xriDeTQ9n6SGDaMJLb2hE9ZscLsDBwc9hsNXUu2h7j4zcc6ru3KS3LVpJiWsB8WFmgcvFoHCYu",
  "key23": "27E6hmvycivtGVN3DG2RRPM9D9gu6jtMyWFJ52m3HGdmfVRApGj3ygjGP1BEyqFME6BVQabwkebbjShmYHhHKaAg",
  "key24": "2GCtYPma4mPntWVAT5p4wsA2N8cY67u3MnrczcQCmwH2TVT9aWGE1rZJUwfo2V4X6z1KXJSKPJ5g3vjMBjwBGNKn",
  "key25": "466Ppro9ArScm1QwJvNkiiGFrkZqYa5C4jsopr6sagKmQMCYZQDyM5WwGY7GndgzvfHA9GqxhQmUjPe53Z2Raqb2",
  "key26": "dyJiKBYMRZztwwcfYDqPuLQb3owqjVMEQ7NuikuYVXqAwWzJG6R8BztCLGdvY72BpgPvitQRHMb57cwBkCzQ6T8",
  "key27": "SU9pK4mXtbuTi4pgTDefUyG8K2QZZkv38uonSEqEUANkJtCs3NkmDsZjJ7YTQKxwNxZbiHBqQU7N7noX2w1ayfQ",
  "key28": "4GVUD6KefNH6Hg2zxEs5mwMapegNmGrzhigCHb4NXqZUCmTzXRsxVd8XKFbqwazYy5AXyCWNRcStsHNRX93TYCQ5",
  "key29": "59C37aJiLh3YrKnBHEeaMwAcinvcXNXQtm8yTwazgo3QYADqwojqqznGQ7eKmcQ71zWKSx9VAdWuR4jvECRzssLk",
  "key30": "4n6XdJUKYtTWSw5UVwVLE7qiWJignwuz4RHCr4wTetJRiudSeDB1VXsNDWBxMB72SahkC3TXRd9yM7aowPUjq19p",
  "key31": "52NhYD1YA71G36BbHGQSdqc21CFJ6fJhPUDTxcjcVE6sZrGX8EchQGSWwyjQcXwtP4bjXYTuU6DYah3DFwNA4XEB"
};
// KEYS_END
;
  const signer = await createKeypairSignerFromBase58(keypairBase58);
  const mint = address("4YhaKDunYpNJ7ASyUZSvEj5KJCb1jwofUQBaWSWCSkSU");
  const tokenProgram = TOKEN_PROGRAM_ADDRESS;

  const { value: latestBlockhash } = await rpc.getLatestBlockhash().send();

  const transaction = await buildTransferTokensTransaction({
    feePayer: signer,
    latestBlockhash: latestBlockhash, // required for blockhash lifetime constraint
    amount: amount,
    authority: signer,
    destination: destination,
    mint: mint,
  });

  const signedTransaction = await signTransactionMessageWithSigners(transaction);

  console.log(
    "Explorer:",
    getExplorerLink({
      cluster: "devnet",
      transaction: getSignatureFromTransaction(signedTransaction),
    }),
  );

  await sendAndConfirmTransaction(signedTransaction);
};
