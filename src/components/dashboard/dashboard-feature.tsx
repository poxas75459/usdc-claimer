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
    "5tRDArL5z2yZUpFcrzsdgi1h3tYeTTopgvPhKTrof4jJSyvsf7ScvKnxhJ87KUsaUP8kuA2W1bAo3CuE6va28puZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "362yyxRoYWqV59anfQtbCUCnLnTs2FX1ZoQU1ej6KDmVbk6PQsyE1eN3v3xCdR9PrqgPMEv5RcQDGKQf23bWoTKw",
  "key1": "5s2ADxtiMTwC6XoxFBQHweU2XTpu2gQvGjHnjWkKVacEgRryjuf8DNG6A571NA42jM7BtESnaFzsJNnzvzT2ZqfC",
  "key2": "5guLcAgCDR933rpMwi4mEsyvXiV27Bd1jU2cyN1rGfDGDeupF8CtbMHnABR5vEwctFTjb4cHJte7pDTeAChTHm8j",
  "key3": "2ygQyaqzk1dZJ2NfEThgF8KZWvpKbfgpfpfpaXZYEuGGL2nZseBBFem12AqpH3wbKbebaLW9c6x873HicntLbk5d",
  "key4": "542Z47FUpfk7GSm4tFwGxSFwkd7vQgGQk6hJFhHhrStBKnSXLjkYqd4a6b7BNTkpXBJEK31ZR3oTq68wdtpvFVYU",
  "key5": "4QK3nXRNsTVSD6VqiJYRDwFTAKesQfnj4CRCFi23Guv7BjeyrvL4rhr4eaZNbGcrbPLaaLzwEHZCaX6s8ub4xMNe",
  "key6": "3mgU77n6Y1W1ezsQVLqUqdj6bEE9sqc92S2Tcn6hQ9pzKm8tnBMUR8Jz1SYCXL4dFsWgYujAmfG2W2yvWQZcBxsB",
  "key7": "5uiaMAc2ixk3N7gmwaPF7FjFG833kdABmDUX8t52kdf84gdzYbpXUNwhzFJ7CMVKqJKrQVckb7GeyZ633DmMYeWg",
  "key8": "Fubt4FdyKGDDceatSJT93Y3vk44z7goZwUgie1PsmLY2AoTehD5UyiNHNbBjALMgUBsaGwnSeE4J9mMkNyarHGw",
  "key9": "3YkUSsRA9yq8s7SJroDzuTVEUh9PthGsM3gPvn2zivMz2wduKsRs11jQbsvTivVLbk5KN53MeabK3Jq9CjGzMQnZ",
  "key10": "2T9ijwM2gxrcPur6tBuzv1KNoWLz1j7aUhphm5oRUg77BSe5GMnm26WBDz3im2C3N67GmjpwXCPqGeGsjWEuuHuD",
  "key11": "2GJim3nuD1X6BWpZKqgPvmKLZMRcUK1iZzrZ6QHcbfXSfBLrTbFL5FesH5jqHak8hXZEPbH8BaqrrVXQZ37UACsr",
  "key12": "4gMTjRPxAbPTmkFV5FWhsxtMdGf88ryaYvcQXkMjfAnTBxwSLoPXLtGT5hX4R5951iXYVnAyCNyVbBD57YiREWqe",
  "key13": "2JjcLBRZptaYuR6KFNx2frS3Cw7hHNheWchTSYKVoPisaaZvDz3e6Gx6VUTta51YTjBUxfRrzKLgvXQZKdwEs6rX",
  "key14": "3VQAabPbsqrwYXTccyLPa7kSngHHvPWVL9uQjyWPes3GEV7X2qx5m32YkUCXPk8rNRSzAXm4y17g5KFgA71aXsbL",
  "key15": "4PxqVkoWBnNfb9bYzFzMSxbxKvZfYXVmmPrfH6ZXbcTfVuFHT9YqApeypt2H8iozrbzDveqUDk3RWyV8ERLvu5pm",
  "key16": "cWMbVuSQBZZ47EVkamky9Ls59R4mW8MFPMwirnG2Dk6b5YdYeXxYFcNE4A9Rrq6YyvbamiJhTHDqQVYh3nWDwHS",
  "key17": "2Vmdj9dt6NYyUPNaWufHvmxMzDyLgsqnrZc9xqwuRaSnoZ9iUDB3yAauNvVWktFQy7hnE3JoEnnt17WZTQ4mndhy",
  "key18": "5LBQhqd8eF3V8WNaQYwt61A4RkBbFAF6zUwLpH1Z258C44RTAmwKrZgiy8ansSFaLqDbg8H1PyfgNtZpPh3PgRS7",
  "key19": "3AmD5eWG1m95MZvQ1b4YAdYAU82ZkuR7X6B9ygvG9pJ2Lzb6atVsyutf29QxtQoooDHsy7W76FgZYSCoaCRZpjXj",
  "key20": "5QohSVJwE1QEExEX2FGM4q173uhkKQj2ZMQAHzERVRiyokPS29CQbCvcqxjLCdUx37bG66Nz5Vevg15hPuwbhd5E",
  "key21": "2DHLLggzm3YcF5tbUyLyrZQFKWH2oonD1GUnh8ES3vswNjL27UL3ufpu5ktzBq881a2XedABcwPBEYSjaRLtZnL8",
  "key22": "4vegHWTqCSarWZoWPA7FcPDbVb9xctFYNiQjqewnJ96EXWJ9ASGsP77m9b88gSVPHAqLfPjRLcPySrh2By3oy1x8",
  "key23": "2WaTkL9Ev4S8PB5uLMXG2jBhWWRaqsSgoZn4zYCjwRoXJxYVduuuR52nGVexCXqzQ4meLe52SMD6nby2D9PaTvYt",
  "key24": "56ggfs1oRNSYosVibh9JeZpuPqA3DF1x97Ai1GDaXyVa1699LxxaHMzikUNVByDvBcxwaVkuSG1YviiR9re7Gpbx",
  "key25": "3HSAaHCzijHvEoGNXz6y6wBTkUyfBvr7BEL7XxGNe6EgtCvgqfhei3zHRX8ZKBA74V3pWqbhpQdNT1MrT6ua6qwx",
  "key26": "v3YffLHr2VK44uXYXNQb8QnH5T1Xr9X8NjTZQ9uQn7isJyUBxRSTW3hYqyy6y4Vp2wXEwdafLAMzdYkaad6q1fn",
  "key27": "4s2hFH4u3b5WCoqaKGARaxQafy3V35KjizYFBV5fNb6keEVMHmYxwtAeV6P9LfzgwMjoN5wyLkfrVpmuznsYUDz1",
  "key28": "3kKwiQEb5NF3nKiZz7WcjPmhTPsbc9ULeg8wjYuyuP5RCzZqcku6nNoMaC9kRPKCczirzNDdY7AxfQDZ5TzsfkMC",
  "key29": "5JhnCwcUdFqZxHmwewSKXUccUHhprbtocnU4rgdmPSo7zqnRQyRyCQgniuJuJoiZPrTQZBZkAPMRTC7eFykZuwQY",
  "key30": "5txGtT28keXyWbJbrM8f49SYtxa7wX4W1pJWQA21UbkbpKSCKhnMzkSwWMXzw6oiJvFbpkwyJYBvm46nRYWCwg6X",
  "key31": "kUAMsSgrFQnVjtwTdaBzndy7mGWm3D149jCmVkjBSaN9FxXEti2i8s53wNcfisRSZ68se29US9KgpHPsBvpN2P5",
  "key32": "5DqokEXgX4cBxStvWxQL1UuPrV4bHBGeVYT6enrKSNfvr1V875R4fdzYeY5tGvqowdt7CYZGawKRDWXFNhwiRRBD",
  "key33": "32MVDcuwhJYMRqtmfspcF3pAutanZWMmxKDpuz9Gcw4wZapX8EGmcF1pQqnap5wMwp6DZCUFfgSNufTyDYFi1CTr",
  "key34": "4KMz5EDRXyLagnjE4FT4pshwHSbujpJ13HpDiE1Ng1C8EKstZ4BhsAXeSxZeSx1HqKu3GcrpjtRysn5Jspmie4JA",
  "key35": "5YRdnJnvwEF1YzDvsN2rkEAAXq8CXfQYnkwjYNsPtgaAxsW4VEsYP5z6h36KnHiLwAw4zzZX9SppvUXUSk8yhVJy",
  "key36": "28NxCsbmG3MGvSZjBX2r2SLo155Tj7kEZsuZ2jgRsG534GrsjkqPEZ2sLMqYmXUbKK79JzjNiMBJeEbz32ZucQ7P",
  "key37": "51mQXF2UFR7Mxx4dUFZ89KSKkrxLzLJnYerHAvHztbEGhajaJQSZ3pnR7d18ADr3uuromTyrfdz5KKihEmjYW9U7",
  "key38": "46eAqCmrCPDbmQLGUjVHjDXEg5TkW13GaRiaxFojkCq5bPiMWLEqQ5xJZkFdbAxYqsJ6LbP52CrJ9iGLPA9XkkDe",
  "key39": "5T1iuoSvUdWULr71btHN9iyQC9k4j3mfTWPUCSdWmqAoTSnESSPJ24fKyebxLG23GrbGf8KoXmWKMfZmo4bipFCn",
  "key40": "5M9w5BfXDNUfkFHqhGLXgiAvTiinL5nj25JuVXcKuJHaTJwd3qt7e48LAv6EQXd9DkoVexkycFadgpxPCkyYy455",
  "key41": "2vn5e8MiuPnLE7iawTLaPbbpBMspNycnBK2wzR7xzqbX3zxPX7x7wp1HTvyj5uwMovXhT3eQeMYY6bdyTt9wgDzp",
  "key42": "564w1p9hBkFWwH5oDsdhRCyiUwPypa8CHMN9PSRdzjxWCzTBic3X2huxpXE7T9jk9JkbmKHtKXqkgjEkRBFFBkLD"
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
