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
    "2ngbTHY6SZySmz6w7Tq4RAoAqozDUsX5rvfVd1nqPKPKiV8bGZLAc2UkaERinATJtH39fXqRa3aB1BJrdjkEAzsZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ZdjQRWhiT6TtuyAsVviLSNABH9Nd5Qkkw7MG7YwbjMwNYdhsYUPYZY7pB5nmY6rYzr2ifrnW2TnKD7mU7mSXtLb",
  "key1": "58ZhyWfBj5nfHqCuiLzXWHNsKYkhvWLneqyF4LDsczHfCUGSsnVa9nsPTdEd9ZCeJFs4BChK68kcogSep6sKVeQy",
  "key2": "2mKscJSwcbXbkLMs2BDgfebxvAEycektsykS4A6co3dFQFvdsepvM14dvRPjewXf2yYs8JYXi7xyF5qFU6X2MKzJ",
  "key3": "tWZe7s2R68NJkWNDmACTX5vQSnfLbsrXFBfiLJ2hVihQoyicMkHxEX8nYAFyguyJE76nARYivcS8F9LYiyxKTDz",
  "key4": "4tW7MQMNqKqo2bJdBKuwJaM2w6YEDTHgLCG5R4C7tQCyEh4DvST2YuJgqLMaCA4qnxV8mEmNqe4dZnyVT4rqfWr8",
  "key5": "De2WTSt4ALGCrom28sSxCbCKwbMKas2MDYfmwKE4ThAPgwpFdBiJcrjjhPbfUCkUd6Bgwhjj9P2cKJv2TqBXyAS",
  "key6": "9NNYanhmjUewjhsQBkZvt3Tyc53SMcjADZsocFRY5vsZtQK1zMA8rccqeZYT5LC7c9cr321u7xBv8wZqNfbquDE",
  "key7": "WaYZTo19XwRvkKq1tcpxLPbXHMqEt3w7b77yrTC9jyodY7LLw771jf8rTio9n9bY5Qk3XZeVftVwXxp91p9smqs",
  "key8": "26TwnMLprXj4Lqa1KUfbQzZdzwSJpUY6Frj8BD1c1NGNDm71BYBngCrQJFCtW2amzJwvDGiNB5j4x2aeGPhvPJ95",
  "key9": "2jDmvcp8JbfGR6k2ursv8Bo94M8oYv6cuMHXKQTaA8XDKAXnEYFYJ1Tkw9ss7mgD7aCbUkYHYAFfUGZGT5L3AV94",
  "key10": "4w2x5BFctWDYSHLf7jgdKkg9Us2QeN1iu9yymZxuhsH3XFz2WwYEQG6E9L44pFPz566Qt2WkPZjc2NpY8zbjUoi",
  "key11": "4ncaCmnNSDYcHHa9YAQUbD9ww4YRvCuhC5FDGv93WH2JsMAsCZkdPEE41eb9Qu1e2aKgzBmjbFJscTx7McLLCKzJ",
  "key12": "5eFoSBuwdzAsmZiS1GRLwmKKZqNFvRkfYJ8Sh6p5DBUFFQRoM33kCfw3WEjw6juHCqxnw3zU4VGDXEAEsawC686i",
  "key13": "34HEwNNjvVURQ9KDXbAZdFjyhaFjpE6t3mNzbbR3rghS7543yEyZBXiJNKpucKEqrFhQ8aE4UmCmXsoCr1fTD4jQ",
  "key14": "4JBSLuQ5wwr5YVB13SR7Ne8FcTjMWiknzBTybHXKbo4QvNiNdmxcZd2edsydozLn581ZszsydFeDsvLjJK37Embu",
  "key15": "2kVWgN33Uyf5scAqQKbUC533aE5pSPWCbiSMddjF6NPjfFPDSFcdMwYPEVLHnN5oCebwGg6xN5W1NvXfNmuxGxdX",
  "key16": "5AYeZcEEkwUVRY2YLXh4ma2Hnxiu7fbfTgrMEXt7wmaFMXTvnFedMmr5c7Hpj11URFyQWxLc3kqAw7Gzz3MjqfCQ",
  "key17": "f4vHtRpqQNHY3wiA4ni26zNb328txFfxc7GC8FQ3xi7ju5rKDpXLMKvnSs41V765MjDHQgygrJXLBixxev1ttSd",
  "key18": "323AsN2AvHX9qewCtm3vhjQR3o1KM5dxGsB1z7jCWbyF3XS7jQTdGABfgP59r8LwfTVMxCaQKuu4xrNpqNpnaVxT",
  "key19": "4xLuU5McVo86LN3j1jc1Y5kK5PL4GqX6pawhTZG2UAKXGtTpewqDeGPwcz1ocSfk4CrBGB7RuTNecG7Exwyup99v",
  "key20": "5gDkasLkhzubcBLEPQju4sdpv3shZ3LRAKMoDJNB4HpNvbQDzuaPyi8EcBZ7U99RmpbjkKLxqTtJdzPppWUYNZVd",
  "key21": "5rmTMLtxYjvJgEhAEtuCaN1V2b1HUHKKWqZBwi8kYkUCRiLCSWhB47Vkv5NFfickdSg3jVNfdQ32FYSoqkTrmwE1",
  "key22": "4TijFpNTZ98TrWrCPWf5MXLAgb7xeVWg2foeVCQzJfev3TFv1BZzkEg2yAi5a7N9xcyrYeyvsDmfEkiPG8ng22jH",
  "key23": "Y58rfv6DhhYwwBNnyFFG2qCUZDZyFcnFGc3svcxWGzsyMCN9eBHqeEnQwuFgrdkKSg2Fq63UkzhFnmBiP14fd99",
  "key24": "4rcR2FxzjqFSzib6TNyqYQfxpVzR86LNXnR4ig234BxShf4BEz3zmiAV1Z6Zewnus1eiCbLkbzgMnfDVdMjTbzmL",
  "key25": "569jPivW2LP6hukQg6Jjc46C8rYq53W66kwR299uioiz88kAkXR4r7gAApDERv24LpptbxBf7B1GQgeghKQupFiW",
  "key26": "4eZhNAnz1p33NCyXcmbnAMi34cfJzDnjEBqyoQRyAAKgwmR44AWPTnexY3v8vRKhQvNn49AyQVDHXHuovrkDHS2c",
  "key27": "ce2sJ9vf1m4JrzLoGsR9FEk7GKZdYAWkAYTswLaWtqmzve8ghAr8udGqSSLeoWmbwWgV9XRSvEBnUsESpkECAHp",
  "key28": "42tZBtng5UafXrkVY2qRz3dQK8RM8f8n1Q8dA3xCYsy4erbNDkXdG6AMsAGGeupB4riw9yDdr3UMQq327Tfd1L9D",
  "key29": "4ZEF6erVtnHB19GzepdMVk2hQ9F25ds8cPEwoP38obWJPTKpwvCD3diauEc96PdwZceKPpLnjcwkZXgaZUrfdgrL",
  "key30": "5yoTnjoyaE6d51uaU4BwWkftstxLoHGgUdepomhYUWqadbg3doMjSPwqWfKdHcLRbaAXzFFRaKXjayk78wqVpaUc",
  "key31": "4wAqCtCGhcWuTf4phMsHFUdVrcGTqgrfatghUccMeRhZQwzefvuubT4XdAwSd2fbaGqwDrHiR84YcQWb4af9V43n",
  "key32": "24MQ5yBeooqGUWJ3AtNR87B3NXCbgDJvQU1nyQdtErGv1i1ZMNYRsc1XHePxeY8pSD34QGLyGo8M6rtpBryBGuLR",
  "key33": "4Z9KhAeb5KwXozTCdNJ6Tyjdft6pwUgwpP1xgvmLpKx2sT2NAhZaqssoN74if1CT5GJ6RBeSX4Mf5dPfRVs1N7z5",
  "key34": "5znGBoZ1bxLYAphN7ZtysRJqffgCmq3DkhaXbxi2bg3fKiCyK1NHyLX3ghnHcq8cE9gD9DJcaFGv5ftE4XYAYfZy"
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
