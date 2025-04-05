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
    "31rDAvErRrhLpakgwjYgv14o5mBxx3MFXz2aX8u9QoMDQCz3EacVDZpY2RQjVoYPfNwLHhdQxDPfLJPgcb3jwyvP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "318faZs1eEN2oq2d5d6SGFE5Wowp2KqnvqPXKWUPzzAvibvbbwTvFzEVSWftUVM5BedzJJZ6FNM6CbW4dUEZ4VHD",
  "key1": "Ee19iR2d4wgdzjzodt7yDdFUNkSWUhwrDF9PZeoPUvGLQRHyfGxiMBrWV57JFH2XLpjSKaQdvDrAK8wrMifyHFR",
  "key2": "6cvbf2mBQuZbenZDsU2HbeteMizAUynY9VA9G4v9kghXT8wkCnFSZsKZKvNjyF9EG6RMUVchEBLgDBisb8RCihn",
  "key3": "5TLD8Yp1D4NHABnSv9ReAQk8yjvF5oUVbUjArJxtYzzzZpQy4RabByVKwebXZTEmRQ8yd5E83PU8y9sBuhBBoAqG",
  "key4": "5JYyEMVFY6TJHitXwyC21YKz95aoHxH3ZPDqxkQXewkvUJoHDJJ4VWDENLjxSyDcTrwXKgcdNAkYcSk55v5NSrGt",
  "key5": "5gM5ZQ9kJugwKGPvtNhrYJRwzYowjMMi44xB7VMg5bnXMQLoPa9y3XCCBSWV6nF1SAXhTBuqacpEzU5ELbfX4Ae2",
  "key6": "53sVPvWVUQYbGdDMv9M5yA2e8H4BquDasBhKFrnNdYYcB8pHvxKaEusJgd4qWpQqvPcDb6mQcXK2BDPGTPe7XpAo",
  "key7": "66HUfc4WqPsmjQa5oMqC5nuY3oEvJSvejuBxQTvzfZtezGJF6FD8q9Y5yBtPvQxeYBJvGCN8ZTbRhH7eeRphx8bt",
  "key8": "69yo6RqJ16YL84ZfdAHXWwZHAijB5QPrA5UJGakcUzn7ZAnnwRxUb1Urz41tofWQ9nQB571ms7eqHTQrc4xtUfn",
  "key9": "2G96cqgBef9YEHKiQsUhZi4CF2vtz9eJJrcp68yRpPz6fXrg4FU5HMaU5KK5vN362nLdhuSid6HM9mx6jSidTvRk",
  "key10": "5Lr9YeHuMRV9TCbugy2AAC9eJSZgo4SiGfHSD1oeuHRTSa56SCQe7ipsRUWJGzfGWoFKRgZciTGVMUpaN1XS7a2k",
  "key11": "VLc39RR6sPN2xkTkooHdeTrEZTRPsPUtAk1jTNmY6113LUDvszbrWm4rbbw9CzKJkmUzmtvTiwzVmUsoxp55Wki",
  "key12": "4dpjVrfQx642WG5yWwyNxjJNyaWxBWahHijvNXqVNCci26eDrna7X1gC11S7KoXrkQ1weLZTLpvb7Eu6DYLeH9CH",
  "key13": "3EfhzJToQ4n5LtE7TyGUsU8kNaYGLXtcSgg1wazBJv4A5VhDnZvDdKrhh2LjNjrU2sf2z5pGYCUuwMpcU5eZNpMh",
  "key14": "2YWn6XKbj2frv53UKZeyGsQP6RohDDkRSTrrqP42MkfsARcbzJnRq7NzjB3JBfDYoWowUZyohPTKo7whRvHCKr3o",
  "key15": "31CsGw4T9KXvZB7jfiFVNavLcXmF6YmYeSc5DCsk2LLAgoroHaSoB5rEmWjy7hFdp5RkMKvpBTdS9spHyp5i8Dtw",
  "key16": "5dFLE7ye6butkPH2kNbyFKw9JAcgj7LP9zrLN3AhzNkYNf6CPwnTf52Cvmd93MbSQuNoTfn43AzgkPq1jXZadGh3",
  "key17": "5AnZueHQYAkKq6JWu2SjNQCWf79TTfx1iZRftdcdxAaXAVPRrDSqmnJWsfy9mjT6iJRCVhP8bXWatEZs6Xt4mQdK",
  "key18": "3HgyJ5AKoBeGiKh5e83Shev3zQA8ooiFXVLbUXMLSCRGPCEWdwXSdGTYnqh979sav7ScYPeTHBFbBfrpdYWWuoeC",
  "key19": "29aayueDW942E2nKuHPn5z8Z4kDEYnckC6mqBcU3SXhAsKd9uyigjFve5xsWeowD8DZpUJfWi1BpvdryE3VQaJLV",
  "key20": "5ZkJGEVJKiBXqQdUdhkHjg8EG5GETFpvCgrsmfHnjGJiVhGvLiPJmvqEWv5FTX5qrnDPgcUybATeyi6EcS9Fbpjv",
  "key21": "3qdnL6kyUcFJRuyNzuDqCnDgZ5vkrJTAGtkFB2YJvEv1ZzqEbSUxTTaKmo21u4qRPgEKZqEf82vjgD6mWEVYFTJv",
  "key22": "4bBJVaT1pVcqHN9wtCbTAkpfB1Bg4r7ck3GxBEL15iY6m1wkqoh7Js3gsQCwzKvtLPFBor4irTLBk8Ey7PPCLgVj",
  "key23": "21ro2xHbwrvXqYrkrepY1wvdmCNH6jP8irYgSSfkr9q1BdrVZduHibDp6PgmPSZSJvo6BAWjGhQkoW2879HnU3iW",
  "key24": "4YzESEjWeT6fqwL6vq4mMQbM9qAWxhPUDYP8CU8qMbzveY32dAccGEeZSyRo6VrqPhFPfgGyHhKtH12odUTLiLwX",
  "key25": "297WCqG2QqLQnkCTBp3Ndd7ZPthYkCwNccuUnHjtWT8GwCF4AY9DMenrDNfHkb99UwCFYguyKY1a3KqW3uoTXRPH",
  "key26": "3qQQnv2DQ4Pz6ED2t36MhMMwGadqZGWapD8EaNDUsGkSw3xtYZkq3VN4Aa8XxhaCMC9WZGKK2hQt63GzHBZwGY8S",
  "key27": "3bwHmYe4PhXQvVuZ4c5ooQzcEhiQCK7dGeVUBWyCWQaXebcDnzCzJb8JVRjh9npLB7QhZFgGgNzc7ebawL1NA5pc",
  "key28": "WS1FSDP8opLuaWiUh6Rp99X1KQbiqx6zuCSeQeZqEv33rg4Wp6KcCChBWisvoGnSDcsUXmhfbBQ6gub6DHCjiNJ",
  "key29": "2jodDApehAiWzhZ8sEYbHH8FuHiB8c2KEoJkNuByCsvkFNWLAKALCTAo557DANvVdxJ7yjp3dtpCfBjR13L7LsvK",
  "key30": "5tUtx5fPHNdXTfPqNhQ9ubhXnvwTj6zZKcApzxLLFNqi9JbyDzkcoEJGkrHRkwSphbe9AsXpDsBWJ6gTqZ4UHz2f",
  "key31": "hA3ipSaGenGoJ2sf3wuyarbVRdt5dsWYQX8zGVZGcCqSQRFpmNpzcUZqws8qvABfTV9vykzreMpQU7wRaRxjHXE",
  "key32": "3zX3u19obB9fzMZQTZMwG9pLjZpAZ5vAMcX1e5RnNeDG25M5c8JxRRe2dqPEH6U8MWwZxTizrHdgkSp9GwS9oBG9",
  "key33": "coACh9eDH5NCN8Do9DaBgT5pJBeBuB9FWmCtQyKqz69TSZ8mPHa3wALQkaqyHDodJVXWxkNFZDbRSTUTPHAJThj",
  "key34": "4sBXnsZSJbZfHJQBbXGmuEFhjo2xTn1p6ZujyKTTVPicYDeHnpN18xqDC4GQKqswG6YG2xjF4KaLkb8iebuaRMjA",
  "key35": "4Ehcw3eScZPX9zfPtqiofi1unH4UweH9h8DvdhcXt7AYfu8DLn62EqmRgN8TeP2dHALim32zMpMR2DWzw12p4e5s",
  "key36": "5fvhjckLf77GSdpdbc3e4msqoT1NQPk9P8GV1iZoaoGzSn878zR46fQAqGKzsDdEdrhtKWmF4QZzAi5BPoniBu7Y",
  "key37": "3B6XQ2YFRAWLNRSygEHyCtP9X127uJrWWpUzEfFwTAt7GQxANhMS4HD3iDqSA8Z9G3hj7vg4X116WBYBcSGExL2h",
  "key38": "5iJ7PMFcwPbAmJiqtpRn2jxmqEkb8GhrCc2e2ySMk2qwF7osLYBTr3wbYYipDmXgQtXXozyPk8wPV4cKdn212xkA",
  "key39": "mWEkvzrDMPnGxXhjwvoUH5PF69JbwB9ArSJrUVZRtJ99nPkB2EqsHn9wXdq3FEtgTMXc8R2RZqWA3JsZByHbVTX",
  "key40": "3oT79sK1ta4FVkGPrW4BoAUiztNSYRRyKcBmxokVDz58JaaAApBN4NQG2GbjckdEjDY6q5sL5jP12fondphVAhyt",
  "key41": "2BXvJ3S5FEiR7RSHcmKPziY3xp7wvdsJvLUKhYvJDAUwKc9xrsuXZoCw1KeTaFjMnoV12e3W1WzivLRo2E7dF68"
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
