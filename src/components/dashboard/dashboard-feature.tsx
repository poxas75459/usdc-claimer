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
    "m3LvzBKL2QiBPQXJXcNz8R6839pQ4xLrbr1dpvzkQ8dSxZzfGkMYMyXtPc4pFfxG5wzWxfdj3rTfDDi1aVSGB5t"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36pfCEgThbi9NkLSgpp7hHo6xeL271FfBG1iJCoMX2jDKLTVAVejZjCcg5saEJQfaaJedk3XdGcFW8LMVdVPiQwx",
  "key1": "4RPhJxEjHh2neH7yMvhkGktrHuVq2E1DTy5y7cqV6n8tpJBjYrqBWggi8zFfWzsNv45iZ75nf1B6qkCLJJEdr8Hu",
  "key2": "38vu6wpsvpjt1BgjjTQZqMH5DxpwnWQqe3XDWCUmErgT4Q3CcD5qU28kN5RBPYBDVEZqYNqesR2wxFq9AUjd3X8N",
  "key3": "4XXNSEyouGvSDPfu3icgnX3yDvS59EpXCuvsKvt8X4Lj6BXadK7wwGFQA2TdZ2eokB1VGyCWRVJNst26D6Frzg9q",
  "key4": "5kbqwEvamK2XJAETZouhyezi56tnANuoytGJhfBcsKKcd9JVDXPjAHJWdH6K4aX4oSYJZ5jNaLdtTN4uBq5Xkc1k",
  "key5": "34NfudNh7PjhkmcNd6GX3fPmjJuPniD8BYZEUEh9HuUGs31e9LuHxTFWvEBSWQPbWmBeu9WUTNToVqj3pFATmPLJ",
  "key6": "2rM8k82MADGG1ZNUcPtEJf9XdzcGhG4vGETqo4dXtX3oniMgMiU55fKGwE7Fg875ENdCjetQAWhbmGXDL8kuLLFM",
  "key7": "5LUkMbD1fbdDZZoL1zS5wjG6DUiWAVzgTr5rtTGuDFRwne5uQ58kkFW65gGztsbMApVtycwLATbfmbqCMkUPnrd8",
  "key8": "MzdKSJ2ur7gkg3BfMj9de8L6N5niGZRPdwY2KQ4bEQAGXofyk87qLrDVxdDVWYpZcKevYnaT3NeGTWAzp69siFe",
  "key9": "5BsQHuAjcuaquzqfu986NgP7PXhVRAkfAfVAgFuJ92EZjhd7Zy2LbN4byLSu1as3nWdP6MN55uSA8j3yFxzZYAmm",
  "key10": "2aaA8fuBtQ8468vERVcYMB5MBkAuJqbdL1ejDhnyuNRDgaawzy9JoTr55rnStjWWNwKf6KkxE61QcgMo7xkZ1NXN",
  "key11": "4Vt5BqAPWyu9cJd5ZAscBc8oMsWxsXztXp7CMuux5JxP4rFMjL8x7mwbD5on7z5XgXivpDYo6dNs67QwLtvZbGKh",
  "key12": "2wubydxZKFpfTrsGXAoRyzp8DpSyjB7rkdqd7Bg37rJRWRG3QmpAFun5b4MQqQb8c4WyRfu4fHbaGdahQTVYiBTp",
  "key13": "59f7kaJHqgE5aX28HCiu7FHAyNCR85QUUds1kJEFo56ZkZsV97JV5Vjtzzyywec896uGc1d6yLddhGeqwkmSP96g",
  "key14": "txaUBGjyuRVh26aWdsYRNLjLgCcDDsKmz55HApskFcHFrtsYH6aBD34b5hXjuEt322muAk7LuLaiEUvrLerTsWB",
  "key15": "dJHZuLPb1ePdhsfyb7RxA75z4PdJ6Bwe9G8qYUGNqyEF1nwvsuKmUYNz8rr93vJmgp6qmPvhgoNURivqMhhHPjS",
  "key16": "4aaJ2D1VgsvtFkkP98xu539FdkMnPizNUqqxKNASmJGP2kH997od9jEXaAyUZAViskjix9mUxD7oP1Hmty5QcPi",
  "key17": "5pYcrF9BoM6ckCMBY3ahT1BhCCoNugZJkgZe8wS7bfLoVbGjiNY9ETTu1bzKnE7KgTkdo2Dpk2dKqSabnYgbc6QW",
  "key18": "2mJ5pkwq8a8ShzDsZfCR9yD7B5i6oRn5iFLdX9uoHLnVEhcYfNqtQcGWDqtsBF1QyYh549SVJ956zKojBMaScQPU",
  "key19": "4GLiVZkaWSxjkWAeVF2rwRu8GmecikynExFiRZkduVD6sQ6uszhq5rjXA5pkURdTiNNc5rhWGTZzjmA6C1GURajk",
  "key20": "936UQnbZrmcbmXVwo53ZV4jxkf7v3VYbrNPgJ72RaNVa8PM38XAD12Z7B9CtH4w4PFGCSsR23n4gBUeeLLgK2mM",
  "key21": "2TZmoZzSJwnGcvfXatq4PtHUsHfnRczz5Uzd2dJHB7epqVrHeD11Ab7Ttmb1QAQ9e5vNezpVwpLXizBZmiaEo7jy",
  "key22": "4uKNmcQXoXzQcpgdwJUC1PigSWBnZBdMqGTu6VnP2w8eSXEkdtFozNfJAeTFwRySGPA1n1yRixFChRZhzMT8yC6Z",
  "key23": "d26ENdTxKU6XEjYrZyxNoegUmPP3hrEV7v4U2Z7c63ycZ4wTxcCYnBRFbjKEWUnob4F5KaAJ7j8WGsckD3qv3NR",
  "key24": "4WJo2rJPEC68PABGk4NYAhzbEtyexrEBmSzJd9wXEM4Q64RGMehKNorNPZmPtrPWQFJBXPRz1PckZSFVa7XS2hMS",
  "key25": "5Snt8h3vhdAfPzaxYeJ9UQFzPxAuvhpqN3vHTgFcPPctQ5Mf9vru7hjCuGjeDBwUQbFSGsrKhNu99gcN6S8G4jTF",
  "key26": "38s56dKpwd32eahKHGzpexSdVzvVCbm7ww1uLdsTnkc4SteNWGwRpi2FrqznujLYgAjgsgWhWWoqACUi4dFEmz4B",
  "key27": "2dWMJeDHEW14Cx767xMShfQLoZBQPxTDEUhudqmkiMaXn2vJjhT8mNVwfaSQJLKjcRyy4XPkb4WAc7rLECgMxxC5",
  "key28": "3TxHFjFzWK37KdBrn5ra8D9wT6oU63PP95qo2Lxd49a66xNe2jLH813AfSdXu53eZ16gdYKXSrUWHat122tMWF48",
  "key29": "aLFeBDbaZvh8oQFWvArMiNgxAJj7nzSLrBQxdk9No2J7GL9x5RajNoPGK4BF52VPBetMw54RbLUSZGQHZ67e2Z7",
  "key30": "4V7U49m7yqigzjPSBkF7YQqve9NF827XMuREPmDAiR52z9EfLAR1cWUrhXS9gv6aw3znQ1nybyjhALrkNGdzT3ke"
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
