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
    "2sdHtB9uhDL6USGZPXFgZCu3WTFG2gBhdTk1G1MJUJS8PMV963tSbYZnkv96GWBdC4JwSB75HNyofMzyrjCA9hqG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Hi5RfCV6Z229ewh7HvojTj1jfNXVLAuu1qNjsv1RsMzg3E5dTvZZpteJF8yuRFuBk4NufP5yhUwq9gcwK9PcGFM",
  "key1": "6uxpeXvdpRdB8eBZdVjBMAmcmxH2aTKBU7hXbZCkEYMC2AfutStwdBKmP8garq6546guYVRCCPgcQn34Hy1HZVf",
  "key2": "PNH6CvgKmAczMP6g2D11boabirRebFHprxj4jiQ4nYk9o1owfZLe8ZnVPDaExDSJAcoqChjrASt1fVU7qcTt1oW",
  "key3": "2CALEU7XsW2sEiE8DFofj2HdqcfughK7MWnXpEwCiA8YA2J7M6Y4XzfALRyWj7BuzhGvUdmPA9okEccLL4m4T1Xp",
  "key4": "4TffJdH6HmU9baHuMw6pGLhQskecZxhwrTstTNskH2ouzJXZSHGTJVgQ4ThYSEvCUkkN5n8DqZPWkD6xBPDBTiBD",
  "key5": "2HeSmk96Y9o4qZVV3zKMzLmBpx7zXAEqRoJwpQKT3duFoiubToDpMDNwWYRJufJUsRfREQgZ9Lnt1XopjJujchMY",
  "key6": "4sy6Ph99WbAJwDkPdEbCK9atAww8eeMbndqjL9u94bzNS8bfbV7D75ZjTEoevrPhvduo8oCcL6t4cHvnXVpTim5P",
  "key7": "33iAENeH9dQPQFH2epq932vLM8TS8dz9JmptS1fXckdTPg87tE1QdtEqncbSjec1prkrznnJGUmuYdvnycnLXYAJ",
  "key8": "TEMCcPSs7sDWDCA3N6eF7DGuTkd46BHski1sRs4hVz7daSsEo7LYP4de9xPKMfessZqJBYGcpeMeYApaB1NGUDx",
  "key9": "49NCQsVWAj5an2hCHwXGrZTv2ifhSbmtTRgaMeshsf2N7WGbK92kAVUNXrHpEm3tbq72TgquUGaMoDJopD7gNfLh",
  "key10": "2S3RoJZ9ETBK34ginn9JiD7oHJ75VphJKFWYpQ4yK5wVGGDfJTL1R1YAwK8MCJ8HNyp3gbR6yQ6KdK2WxgtmHEMA",
  "key11": "cq48a6sUFbYttvWPjegYoeNQicLhP3jPEgxgz8iyy5qqnHAXer5KLNbjDdW9nFw1iHqc7zcKk51ahKXFBHusPfR",
  "key12": "4m1Z9kYvxLqiw2KP9HPQmBb1HTrDZD3HWPVXUGAr19vMwhBQzPfcqf8oNEgZH9kbEBeCtwivNn6Se7XSWfi3hAVk",
  "key13": "5HbFF87kGcRC7p99JqwWXLV8vxLkLPBpQf7KRvj8Fq9ATU61N9A5XW6a6LyMiYPRodjV49RyoZD5s3uMNhJbgQmL",
  "key14": "4LfdXqb7A9Z9gPAB1RNRGujj19qWxrbCM5wsiDuVYo2LuSyMksokRZuZhrqDis7rmCraFJsA2bGTSUG5QE8kSbxg",
  "key15": "mMyr5mo3dNmDjrAv9mxqZ6Scpp3dbpDJYCUYrXMaceVDALz9JTK4RtvoVEKTdn5WccPuEixNemLaJe8YkNXUFmL",
  "key16": "5CvbX47GrceaSu4RsiAYEQ5BKVc4qRLRUpCKfWJaxNuHry3TzRMtxoF2uYviqDaqnpRjQAjHWnJxVYTK96X1zUee",
  "key17": "t7NbXak1AjWMrSCADTYb4wcrhWi9aQ6CE2bPhbF4VbCaRhkpD7gKyLFWJYRPUEBnUjHD981k82zNHK514vVCiFE",
  "key18": "PtLWSabrMgp28fAF5F9t1pM9SagT8F7ZHm9oZcW3HqMYvY8QWVhdM5LaARZuGpCzotX26Euprk1cHK977TeWmQc",
  "key19": "v6TXPHURYGb5fmM1tvVSa1izCjFdTC56ztwjGtkUXKuAuZptgX4fpnrYCVYRUkUXRDVD8e7YmQ16BgqmugsD6NF",
  "key20": "2wFz6jaufUTQ8aTNjeiSKmBnGfJrHX4juHdBHKBHNETvUcHGk3WAnd2r9GtsZLzMcNpswFefKMQwSzuR2t9MzoN2",
  "key21": "pxw9BiYja6rSmQPAv4wLLN8EWuQ6Vh1ZZcgSsFoJ4LLYb8GkPbfQJ8uEjn3bNsWZYUMCDqSSCUyjcEPdYuzYzK5",
  "key22": "2VDB6717SgLwmyG9e8vF5g83CsJ9c2xJgNmhgQUEMYCZM4JLsykrWsDY3ts7SuynjzjAaU4B5WwgNh1yp6U539iE",
  "key23": "3DTX2jPNjydTcWDWsZwnHWtYUDFW25G7qW8AMBuN75WVsSWHAdQVzvWANnXrVnyDdmPG4Qu2kG7jJQF9iYXbPw6P",
  "key24": "41Yi3J5TynpMfPY2PjD3E1Eu6zycZW511ApZQV8YynzfnxZLcbtZcyQPvwFsaaoCRYecewERUgDE3wZQSyksKYkj",
  "key25": "5S6VUeG2eLb82ugZZJ7yVRocr4cCfZotQokXLWaup5MCYFmjgr2hGMS7H42yaseCbLgXjGnpE317Wjwe8NZJem5",
  "key26": "2fakUBfbFaQbcisxMUHkjgC5Kg3Wh8KYZpqP7KFKbkHxcmfKvXjphFMwkKz7ucUnGTL85F8LW3YZ1QnaAEgqxwiq",
  "key27": "3NVMWesGFPgjQiwq64MvrP3cDpVDNYyJh9jzThmeB1DgPNSc41f4hwLuM61KtgrrD87rA9GY4sAmJrippFgHFTac",
  "key28": "4HW2K9ijJZVEwf5Av2hXefAWTvGUMZa9WQ9bKnBVhzqLhJVVL78oGvWceNbU1bmudXSEReEvJZnUADaCvbaPUZhx",
  "key29": "43tGXfgKJt65MmebaeCW33uVLbqL2v6tEwqbq6zCNwiFFTLhadPXn6XtipGNHx13EeqSBTi9Fnf7FZmpahZhcP8g",
  "key30": "33NCtnSV3FJZCzZFi38NENBQRwrao3pxoFVghqJtomG3d3YXT7SLxiaMcRRY9TARUjYA3scYVLtzwqVKbeXgcN1g",
  "key31": "Fe4UoDC6N7rNqaRrwBEXQkj3qfdNXojnhVcxpgSrjJo6fePUsPnnPZnVgPBi3bsjEYjqnqUnXpUkGEEukYHSPri",
  "key32": "4MYMkCvK1mG4ppjNJFsUwRpB7wWXTfGDMHDrtdo34rAxBt4gqFwGi3UNcMViy4bzc878duVDLuWiyvd8s49HJinF",
  "key33": "2jNj1PjnssNMnKV2JpupGTwK4b8nyzL6m1YyBVh2LDYKaC5rfGJxkBSgZ57Up4vGiCxsBk8oAsLf9o14cFA95YRq",
  "key34": "2PAv7ZrBE6YEwkGuFexmw5i2Lv9C8mqsmtBzEj2CAsAhxvBikrhpkr9B3qaRnwa66JdcFMJ2pKCVcRfK3VBe16YP",
  "key35": "41yDELsskT7jsQrYLsaar4x5ukiDJU2JXCVEQQP5xXP31w2RN2x36LQEPQcTEV3e2AdiKc57m8WBDoN2YpkgwfTF",
  "key36": "5GchLrbPLpVKvrcutXTyXhceeF8FaT62JJ77pEpppuxPK12YKpMZd7Jyovi2LjftQU3or9KDV78UvsUH6MSwjBvD",
  "key37": "49t7pDNRFP3MgH6hhb5wPmZ3Svv9cvwuELA9qKArtfZqgL7uKovdLAjNUrtpQfv4oDpXsMAGd2TZBVu8aZDTQqpy",
  "key38": "3Cmag64JTQHWLACdtDuXhR47hUSoqJ9xNrbMa4DRSy6FdNwNMpQqsE6ZJtvXYyVnbm9JryetQuTunSMoC993zXPA",
  "key39": "5buMWQ5uHArizgRzTewRHERN8BJZZVNiPUUswqwuW7icjRafwFPobzevZv2d7CMjT3sVaainp1jpKcz5m1e1a41Q",
  "key40": "rggWbrLyQjVBhyaDHqR93yJo1kCk9Qtgd5Pzt2t6QzeDrD6T5fXPeRCZHo4ewYtnnuL2GLtkyC2oDfHhxpFE3Cd",
  "key41": "KC4goaiiTxV44xjNFRhPpYFQrpdBQhRySfHr7uHFEnwuqGNPQ3qqM34pn4U6UJuk9t7CMysmhi1W313Sb4j3X9z",
  "key42": "3Po6MkC49QHY3N1nXf1vYhKqRG84x7gLEFD6BBAFgmaYeCKLb1pXuXbLH3eXWuxBC9DoLYLaVCGJp2ojkKJVjvs3",
  "key43": "4LSGQvitUKEtW3bcnEuZwL6WoK3jMEU7U7EuaWoASCyFM41HWW9UxKbMdZ58EmSwqdQM4ME1TsV7osxTC9eLiLBH",
  "key44": "399kn1rxkreu1ZfgyeSD8XDTpSn7D5oMeN39JwUX9mmSLMdbrm7zr31xzeJCR5PtfwcwVCA9nGWsLjRxzHzWkjVn",
  "key45": "3USbkoyzvPBquAkZNrMmhUfNsFu4WvCN71jz93jtnLKRqynVZUaXFkUgb2qpGsu5eLfzdy9GPDMzNnYknaVzUKhz",
  "key46": "3TETgfLkF8A6RNxowcagMqBKmRD4jkZW5VmQsRbBDQ9REHiYyinePdikDr7F6t6srpjJnquAXHy4pmwZVeuutHH4",
  "key47": "5zLd8YH9djhUDp1FuiUMYeYkT9Jq38RAbX1gzwKNSRN4tquvj2qt1WW9jJfHP1Pv7vpT5msm3KKtuQhY2Dhgce7X",
  "key48": "2AS6i3WxsUVeZxRWFfMUWRJPRBp7uV9nBwYKxKtsXYAfsj6iTdM4vuiji1JC3EvTXg4yFLR7rAUC66PJaqpQCCYg",
  "key49": "5G4PLEwKepxhTuFJrSJjV9FgjoQ5S2AT4UqbVA6s2fhkkAefubWTgxTJ6EfuMcTMnG6uBnkScKPvykgqXRh4DUz4"
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
