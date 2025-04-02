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
    "N6JFTkCHkcubSEZ61R2NbyN5UEhUVbUATGYvcWLj2afFDpTdt8UuGcSG2MG1C1rUPxrhpqBcXWpjzxHXWf79AAk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "48HwbyEH8rdSfYyDbynobC9oL7MUdoRhX4STro3souNHNfp9LoBUbdtGowW5hxmH6f3GVS22zcs6YmwNqqbyoKrx",
  "key1": "5EdrzThAMX2eWRMbWhpGdavRhCuiJ1gz1b22kLmrhcycdkDFWbQFGSHy8JZcNxyDYnseDPzy1ryd3cNSChmSuwmE",
  "key2": "hGnLSeeuTnuPPwXu8Fi4F9iUUhTjeSYDvpdMBFwP4wGSTT2Xhj68R64JjX289XK3pjaGHUyMad1Fpzkci4UViik",
  "key3": "5D6HRRnAyB8R2JB4T6nykvnuGVFDKHYGPiC7VUsmQSjsUGWphCZR7g1jo89EQsutZo7H7tuvgt7vp7mB8GvKYVQz",
  "key4": "53vBSxJWKWrpHBzwbHd7LhKYNYztjMbeGNT42LWcEZUDECis61jr9VEe8FcihgwJnDLpcaeHimH2JUD3ov9is9Uv",
  "key5": "4ih96CxTQQqb5BDT4dsiD3eoSyGt9DB6oeCWtrHdNQY7cz4ChzBKB1Tnvyp8M3iVcs23ypS4pATrHA6K5nEEvaKj",
  "key6": "3fx6JxWFa1LFELirHBuo4Eb7277PvBpCbH3MidxjYWXvFB9PFoFJXD1u6PJHPFzfevBQyPyKoXmQgGUcVoZoSRvg",
  "key7": "64HjasJDmeq5p2MkqGRK4nNxCKYMsHuWS7RiZCZR3gGw41p5MmhVATXx5k5uyQXjZwftUXX8p9KUjJaMhAro2L8w",
  "key8": "2nGbCZHY2tC637GARxqNSqeDK68J2sJexqU3m5zf74qbjYoVPo7FMYbVWyXzj3AkrVhsAghZnPJFfJvUrf5swGvZ",
  "key9": "2KmBEDxH5kTKnszUt8R6LBAL5V8kC162jPwWAmFokXiWFKZ4vQwTmNSBVxPerQfLyH9wuR2mRXCFZYEg9PrjBuJy",
  "key10": "5iU9hH9hQ1MUnU9ht61aD1Wt2BYJarQ28ndKnTyTvkEizMmM1kY6nbnzqiv6qK4oDpSYsk2vu37T999JvAVe9Qhy",
  "key11": "48HeRQxUGZYvD3F3F6MjzjtnDrHBxzMLqw56433qTX3m3MvhgcL8Nei5Kypzwg9fGzuuYhVQtARnqB87aZ54QeVw",
  "key12": "2NXDtR7x6mQ5cVyHF9kkdz4hCiDavSo1UYonhw8jLdCE7Jxtb7insHweY11t8EX5ocmP1E3xxUgJZt79ZFAEVUq",
  "key13": "5SkZRiRYhQcyJ851jUTGNkwJAz3qj2EjV5dYQg79sKfgRcypSR4xzvffQDD6nBLbTvhmquqqGatKKmZgMz5gYvkw",
  "key14": "obFHKxtyZuqoyUZoHgQebFGe3iRHpbT1R8UvnA4G2uMSXaAb3S3nXtF2Xfowsuw33ALatZJ6Rx5MjMDo1NA8UqC",
  "key15": "2jxtNakXe9rUKLD6f8XoG72ojZcAwaDmBJ4D7FpyjsfewZvNWsK4nrj2gAkGNUg9FMkbz3v7ak66iCTLaYFtpJcV",
  "key16": "5eiNy33zLqHKJyBMBxAuMnQPMvkkW3HjBEhe5dW6THqt2fPx5m1DoGm6VBCANUritZGVtqJbeZ2ebgCm47bZMuuc",
  "key17": "7TUgB13A3u6JBVnxJyLGodmwX8JSwPeEiCxhdj4CknweV5nG67BNj4BQA9AtEDmW8XGHmB5TCYKX9MtbUEts5r1",
  "key18": "4Rb9QWqSBEQNyoJmv9u5biys2gvqeCDDCw5WSnaUN7XRYKttzoZCc4Pi2tD87GkhCoHKCYiUq1uM7eiteAkc88fn",
  "key19": "4DAqhauXhZdgFXA8DDZf62JgezBFVoeC8V9Tusaw8D5qaJhsWaiVRB5KkM56NiRpHnne5o5tTQqKg94UbLkK7dgJ",
  "key20": "qiPkdPCs96gyfu527BGHxPsSiXqkyQ474tonaiAPJjonL6ML1rL5vPtb6wLXpaUig6ayKQ7wq52qQAyhUg2B73E",
  "key21": "9HuKy8U6wb6dJdzy8Sqmgiw8xYAHECfeGcCVaz13JBfKmiKo9rbYnn75mt1HiRsydvPiWYtQieYJhy3JLEQfhuN",
  "key22": "2jvQKNbPw2G6USndinstizUBVsxAw5zwndKr1uxNtKqXQtd1tm22W6DH16W2ShbaZXQnVpgBnJjQLtbfb7vVS16t",
  "key23": "2JFaHB1kLtuiUh7dZV6FQ5MYAZHgiQeYz24zsAGEFuVqP4XwSXwSTH8vJmyuS2kGWscbV1yJWKNQgfCAprfJrie1",
  "key24": "k66KkioBFbTz3oFs92jvyVxEL18hwF8NKyc76thEJhDr7Jtv6k4T3dcQPGQWTLQoqUaUCzABGvqKayBZxpLbF25",
  "key25": "4sxdsytxhr46yN9hfrbYesDM13J7XWWKvzherY26jAcXeC4QwrZJgLdLGyRMxrRRanMwxk8vaYGdbEvUc3CNdj85",
  "key26": "HcNo23fYr1w2TsLjewBtQvna1Nt7fPnqKMammpFj2NcBN1W197FfZQ3PEVNcHK1J2CGdcGJLTx4kqcfoC1vym5Z",
  "key27": "2fWX6FmE8ZwAUHMKY5q5aG5gd8ht6avodPFftbT8qPH6DsrNtEo2hVKCAKT6JwRsahWDfZUBsqZPnJ8RwZKSMxJq",
  "key28": "5aR7aBNTCrKmALBUmkQTcYyB6ffH6k4RqojpAJqsrM1Mh5KBsRpKwX7vkJSKmPfKaeKQQe6JR5DCPZVwo9pa9MKf",
  "key29": "2G6X9hNxfGhzjcSA9Yvd7UrJ8aQ6tY5poTde2NFUeKnMZz8U48EVm4oHLcuxXHx8Ur1nygcd1JF63HimCN4oaPQb",
  "key30": "3w58tZPPUP7oV7fr2HKwXSszqgyb2ksU2EPjKxd953SvS8JtSefHBHdSQcfayfuCeLMtQTMibk1wSwF39nkLsbsW",
  "key31": "5PdVBkwWhssFg2zNH58LYTT8vAhGqW9CPbqZDpuzjhogPkPo5qtVPdPFZTA3QV1u56dWVvn7rbbSSAmh3pxZEaGY",
  "key32": "3aQVejpCk4sXeBPCsQQeTEhJZnPoD8f4XH3hwEwqb6zEv2fqdYuysfLdkFjeNbcSnHj3E2WbVmKURPZa4c1n4p9F",
  "key33": "Afco45Ch1i8AmoHCiAuULNunRwh4nywQNdSYifWjDae521Xv96WYXRFQ6vK6BFvrfPvktH2hzFutjDFjZ8vLSoF"
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
