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
    "4czPn4DJPeE5RerVKYyQfDQbx7noDhztK8AUuQEByV4vBrowfVX4bLKpX93h1uc24kTtSmj5dT6A35BZ5NSTKcNH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3MFGLBfXRJTMTN34G3bvSWb2E8koE64aJgnWP5Kuu9boeMTikpm5RdiPR2TdA8T2vBFaCo2wu3yZqUnUZgL3eQcr",
  "key1": "4ctVfvE1ZS1EcVrbnKbAXuvt9Rw2iNjNjUfQPS9fS8yjEa95UyBSY7EDDP6m7x2FfRHEznCjAVjcxwes22R5kVY1",
  "key2": "2M4dKCkciLPi651qewFXFUyUbTj9QJ6McZpNnkfVDf4LgNYntqFPkH3nh9zvuvhTDZMzxavHaMSE3RVVcge6B5Wd",
  "key3": "3xBCp596KLQsbC6ANz33N6UuPFXdvM4cHWus2bkoncut1NyWV9ZsvmhcUbkDs1uLPvXdQMZH3xqqy1ikh35x8fqk",
  "key4": "45axEW9ZiU2gF1dFoG2QGBAPwgeaGtVjS7N3NYRFcu2ZLJ3jWDWWDSdYM3QtMAEaLQgSmevhFbJ3qTC95GVz689P",
  "key5": "g2ouhiK7zBk8y5gJjdZEbrS1wY8XsVaP5Hnp63VW8dmJxTitZvze5kapstLNEdvw1t5bDEjftgKKoXhN89rBHjz",
  "key6": "52cx6nuJQvy4rbDBRv33kQRsE6PgqrxgPEw5aNxA4xQJVEtq24Hhy2CoCCaEymq1g5xMvLEf3ieccBQrUaC73JR5",
  "key7": "yaX1z6qys5qxc2dXwZG9XmHux3pxiffuw6gEbQaqTC5fuKwKe7sgmyv8H5E5RXSZdUXJRAC8GuRkHCuM2kF47w9",
  "key8": "2dWXtjQEcBfjYJ3ih3Ks11vsNJKZjrp9Ue1NJozs26aaxinJxA3WbAAUEuhgXyADjmwCmtRuVZT9LU3G9bwM2Hcp",
  "key9": "3wzkCXhR8to7GjPHHv4S3DtVh6UrKrfasW6GribGEzHC2b6g79KvjmvUVpbMUCaBZHMtH3UCLBhiDqyf9hfhbgXW",
  "key10": "3hfi3gChwBXkZeiPT3XkgRMQSGT6r1EZK1aXTMLMqxKezASrjsM7yuNB43mG81PHtP12NeVUmf7McURBa5FFdnmC",
  "key11": "LE9WffgCzM4ubYtCmyEN6s9onqJbdo4twpYKJte2od8pY1LVEzcvUjXFCfH35SqcPNJikYrU888wQWcpzHqR27H",
  "key12": "21otqx1xphZw73TDH5oGRepqQJsLU2CYJMj4QKWwwyJpTQMRcmpWUvMBxa3osma2qdQXrUQAVv2tLTg2o8hXQJZH",
  "key13": "45bzoyWSdAAY6oWj6HWWtVSMm8sZ5WBkz9g8dP5swGpwb2f4uxqHHVK8JwaobULr3S8ZUC1fRNSi6NNRNBLtkJZp",
  "key14": "5UTxTpsYMzmxmWryNW9yNmAtwToQgdoWaJSTTAJYjuLzBecZTnY5Fa86UtDwgkq7juEUws3CLCsk5JxgcWAeJXEE",
  "key15": "zCy2VKDpUCYstkkb99PtSWSqtGQL788AsD2MbPg4yLVjLiLbAuRVatHh6toxyxMZwE3BUQri6fL5ahAkK1u3RLS",
  "key16": "38QoRD9nVVnyz9n4AqcWzy6FAstv2qxyTQzkJ7LpvQQwCksZF7PGcuoTDWqmEh6hDuaSNXD3Hita4iVeLpi2AQsS",
  "key17": "NZcxUvVSLRcPiVstaSZ5TP9xZrK4MKSMfqndHtd3NANDkegS7nh8rujpPYtd4joSEyskmUVU97ZdhSLhgFebD5K",
  "key18": "5SfkzfUadjyZj2Abg5qD2jNZJq5k63C6ksmhcpUk9FoiQ2ELbLysQa9HEwhx1rTJttW36saYsgi9xQdg82d1zAcK",
  "key19": "5pq9j5Rm9NBc3stH3v5oizgam7NjGKDhmHmXomcJChVJXtGJzK5Srcaj6QNg5kvC6o25CzpcYz9roqPkg6Rk3q7u",
  "key20": "2d9cPmkCHwYPB9E4UuzwwLX7naPcCFS2qqPo5yixkxLeRm46GLD2W8MsswEQUrFjvioX77bT6NDpD2jJmjqvGj3P",
  "key21": "4mbJg4DGx22kouMpp6V9qmCrDcoRFVMsUF4Afis3iVpzwAUMYcqCPXKapwacEvb3sbZFcL6gVdv5xq4KxUBXPmho",
  "key22": "63reCZn3HgJysdrxs1hvUsdn6SHMWkPKGBLjuaWSK5osbC3ZUceHrt1zpKvgtsmVpHsptEghYisG1qn3oY8kuxze",
  "key23": "3PqDDS4mydisrMWrPePeYa4x5yDKMfK7SXkU74WuVzubBajsX44iP8xudQi5k7sJACgA5asSmPKrkNmBaU6pPUTJ",
  "key24": "TBGbnaF4vbV2bPbYg5npaL6gC5DUFzB9QwagR6qHZdb4HS5w9zusxr2VWDr4ivaS17YyBmjAQqMh3wnPVyhMSSX",
  "key25": "bswYH1iuc1mHHktPxtU95xgtjWiRpGMQyLPHbncx4d6XJr75vsZFLMEUimAq37q6XTPJdaQoWWBLLAezAYAJMg6"
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
