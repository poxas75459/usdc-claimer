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
    "5bdFZv7dCY5UVg5kAHBM1aXPohDWVKJMArHSV2qWKTMUx5NUS63qzGqGKTkFfdz5zeqC8qUSYXPVpjfrW6bmrM7d"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6Kww4yFYnEvKi4shi6PR1Mwvn4vYCSmZYZR2hv6f1CnfJwhwbjz3deq7KVXeYMQmp9AYRdLrbMa982DeSgnGy1G",
  "key1": "5kWRRLcbqT4S4kCX7ZhD8BCX59mzXKiCw1pwQKTZs2GGT44WmYHEDDEGa9CZVj3PBJenZQMDfZL6ikQvtmThVYqd",
  "key2": "3aQkz82KkddutDdwnV8tDGqqa8vzoCmd8mRH37wNgS5QgScTa2RY47JLET4PRmg4GJWyKcxTw69ACtYFR4gV2KLF",
  "key3": "4BWPayLfqV621wVqZigXbq74GDwykumFH36hbvTCZ7iWoca3wQZrihpZwfS9CNMbuuh6hMZv5v4FUdgLeWvayP4B",
  "key4": "3PLKGZ7q4Ga6oduj4iUVbUnYdgV5aqM7FdoebTpAi7gsHpVVphMyKtYgQwzoyEr57tqfasvKZwFXtTux6tbuYsNx",
  "key5": "4Q3bJuYExttSm3UZ5n15yPGsmza3DPV3aF8jvahCGs6X3S2TPang6saE6LE7Ah98AbT7QefnEhHWaU987qWkcy1F",
  "key6": "55LcB45nsQC6F8cDfErKJ6Ey8EVA8TtgCCRDREXXfo3jhxJDea8jBMU8is8jT3tieP9n3AS83K7PY9ZDfuKEp5py",
  "key7": "4eezbmtx6rXXArHZzg3TGny2NwgQr4G8TVbYpMbFTVr6iE9NTP54xLDyg2dpFfLJjbhipgAJznensr2PzEcZKMMC",
  "key8": "5VMtyPwcKR5Jttqf4g4LkRCwzjouZGnD4KZ3MRnbJ5GkQF3EZuqFvtD1QHZqcS6PLYKcQ9kgTEjBazUZHgoBqfR5",
  "key9": "DtUgbybxQuzVWU5y6WbFgvFkfjmrb7mkg8fEc7pSes1bHCMc3hTy7h2jMzC1fv6SctT54dpB5JRqMuiHSW3mFod",
  "key10": "cvRJfpLgnZxcLKnuMthCdhVwHxS85R96bcT6oyuV31VXfeShG2W8oabQzhKHDrWps3zrzY6UGnRnayexr8UCkoP",
  "key11": "4KdQeVwX7z7qVU1QPLS3aVWoMNfkUZubGkgTQgyf5yhvhUsje8dchD3gPPYxbPZtirnSJ29Tf6wjR5wx5j5LuM5f",
  "key12": "2kRBfmLNDqVQKbALTfcMT3x5e3nfHJfUfG5sYeGkciwcShWoNAviiX76hSU1eLCUEFTt2Yue59d15CzE7WWQhER2",
  "key13": "3SWrUZf6wYx45Lz3bNn31VLNb6FJBkp4WofuYy8bHC7XmXVqyGc4a21GRiYEGKvcQGXwkRrwE32Q9JdEChKoPZmc",
  "key14": "5Uz1zz5qePmz1JuU1PSkHmcnJvMyHbDyKoBxGqbHkYQbH1nrqCttx2X4DW5FX2AwDzaqFT4B99MwxYS5biwLsbgL",
  "key15": "5S2KKymH6dWdbPhPsFBvS6K8U9yMRs75nu1C1yaD962YAFk8EPe2YTAT394i6AzBVizyL7LS7kM5kkqYkMKd66j5",
  "key16": "2pY6T9UaZr3sewVDiT6MNtGP9FFrucYDbA3PRzRLnMSPzufj7XVpqRLGCrwJuwPucPfGioY84KEajMDWCA7esAPX",
  "key17": "4pFmcp7bJP57zAq9PWk1ihrgkMZswpz7eeDuDjrGjUFRNHUxcPnfkTHSsaaZ1kH2LfujGFuuzwWmV3PwmsufvoAn",
  "key18": "3JoKjgvRH9Wtb4m9ZYJV6XoTYk9wFKeH1MaFgJyfapo51Pnrgagtet1V7B86vNfCMVtvD1dZkELwCrnZk6L5nzUe",
  "key19": "5W2VfrGZdFCqH8Yw2Vf6qrBUi7mVYVs6ccC9rwKqD7e573rPyRKZVUUeJF4FyMVrveGCJDSiszEJk1zy1NA1AFTb",
  "key20": "2jYJkisZ1kUSwfyXrEJt2prfDBRxejYfGZ68JoYZe5Hep2t2UGyixnLcw3zGvNteyzDGdSFBVAP7hGmgXRSpcJtc",
  "key21": "2pLkE8ELhyEeF4rK2mJQxxXFHzK4Hgmt936pASJign4t3NwbV4D3ngeBMhx6gf6ArSLdWyBnafnkjRv3WuUMhm8a",
  "key22": "5jBDgfWpQQL77TJ6oAXiFfwCA4pf174UZp4pGGhCKGxXomjCdKTyBhbPZCkR3boMznrxjUcBQTy7S7k3FchjNZ1B",
  "key23": "3bdzsmqaScfTxoGVwqWyFv2g6xPaug2JCDnT3GrBcuj43sjYK4bNNWGxS9sqXz7aU1tb12wQ5rLei5ExCiQ5oqxW",
  "key24": "3T533TDeQ33BSYmv9eWzT7pTB53Ujd2VRiLqK6GjUkp7EjW5MrE8sRusb9RxwRfZZijQr9YntkbGSbSNm9fQ45Da",
  "key25": "3Kdy9tk8P77NEWa3fxGAMSKrCyHQuAPyLJuBiitpEynP34foqixBTR9ssnpni2xQLstJ7vfnmBnExXa2PtDMtQJ3",
  "key26": "57TXzMJbwxvqjjMBmw1K8wi5BkNHmBQ5zuEpcAME5ksL2wjwMLCPTJPK5xisaawfGUWdCGB9NyetM2h56uv4xsVM"
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
