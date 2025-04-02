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
    "4mTmSZ3vznH3uaGRuJe2nAwtWsstCR2SLk7vCn5QAqaF4wLDrLc7QDECiuvAACPVX58yA9Jq1j8UN9nPtdLyKzrN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46yJCLRZQJKRe1MdD3A567upaPPH1SQvuRFW7t2WPbiqvXGhFBTFZxHJ36nsAo8pKm6XBx6RqNkp7Yzwtf1W5QSg",
  "key1": "2DUTWUDgQXh2APRDUHk72Xgd8eS2fBvuYs56PTA1hi3Gbk2PzkZB4jQNedri8NvAb84viinDrQ8GRCqHWAEuXbgv",
  "key2": "2d2JAi3QKKoYa3SEp5ZKDQhKTDaT9nSWD8wBhSAUTUnnHUHgs5o4CWN9bVjabC3oqoapPMh5jzARR61pxUQUvfes",
  "key3": "4mbxGsnzPX9f4JsGNgndfSEyaedTqLJ7GuKujGSSk7smT63mRSjbKmzagDbagz3Ns9Qv7cdAkU7UkBp3Fw6xKR8M",
  "key4": "33wr99rRFw62f9PB7vjQBAiuiGrMjyjpKUTjTznYZcxsLsGCYp2gXVQG4FuvFXrhGsgSup5rbP2qQH1sbSsmxh9n",
  "key5": "5kA3y12eNX9krFc9CQKS5zKQ4NScMYaxf8vchjvNAKWjFqURiiCz1cPHYbGSY3HNQZrPXTRUwbuYAQrafphwww24",
  "key6": "kx6gzYLYxGfJHNiw1pBG58iTrbp5zin4XEsJz39fVfJZFLZvxcyGBJmzByMhuSLDj8vTwLR155wHJaBQcvWVF6p",
  "key7": "65UYrdo5uU1RtQSPnaFDWMzXqksquQqhqtBMWqomSvPoGLcqZttZHin8XSCNjatTcsSL9SPrKSHC1Hk5F8on71vY",
  "key8": "5dDThwiVPQ2gyNKvJjyRMbvLYHperdnnEe2cxrZhtTJmwoCtMJAGNyMD6yTxFnWEq3jFNyUcbjZu5pvWt5icwVrV",
  "key9": "3DeWAB9TWVKLmuhSGY2DeY49KLT2t8HtHu3Ud91u6Qycr8ejVdR5LgSbXiYRQmubF4cuKtxWLNHvvWY5Th1kkHUk",
  "key10": "3HkWi4aPVNsx5VNtgEdJdLYgEY5gkPmY7LRpZWzpPkkjCSxqiqu6Jcq4yew6ih59WpGChGwiCHMuz8XwrRfBouZd",
  "key11": "5Vq8tsat51y2dtGexWLJG7qk3rZTbbmoUkzdv7LppEMuSDpySGPNW2Q2buV5xLYmrBFS3kA91N3QCN1VfgYzRTWg",
  "key12": "gVAFEBapnEXg2pD55isPRi8iN4va5KnhL4nRHBTSXQr8Ncc9xRZeYbz8JSiDnh54wT1MHNFzeddfY6PVtUi4Kyo",
  "key13": "4W8pLD2Y1Y7Vm6J2EgfH6WymcwPzjiLuYyw8QgJq6sutYBRRaYRgBz3cs7wVc99Dj6J8PDntsccCjTXu6LoCpoSt",
  "key14": "4bHwjrhyFeR3bBESEehisFF7JVQrERMPiySjn7iFyH67az3NHbeieqZQaTLiU5LH1sJey3UVyxV2vhX857RQq12k",
  "key15": "5dNKGfqHRcv8yPBcUDq1BLFPqWfPa2AkG5TTC7odF2wpE76gWu3PhMNDhwQu284P9dBBh912hDHJQoVqdLkJZPJS",
  "key16": "xvSQdMJwzoaEtAdTdGGC5nPpPkXkxnY88tArSMEYX4HnhLgYcoh7curnPtcWBAyU7uUg5CVwnqHBia1wQh4cLvM",
  "key17": "61ozFtVjCpJYz5jwU7Z5jddANfSWuUvsDCBDymCFh21LVnrsoRULuhvkrEXCdWyQ33LfHxBSh7FgZbDva8oB3ZJL",
  "key18": "2Nz1Kq2K13akahurPaRFKNeNiUkrUs2VFM8BtoBZyDh5tsX4jfjD5WzuDHFVSDqsZbaFrQZwhccyse4nW8t2oyXx",
  "key19": "33NM45iw6eGLqz4XxDWgmhnh1gf2Xt2oJXgCMB6DiFobRRS5m7YJu2yNaFeUG8eLJs8gTuePut6ugAC3Gg9n9G1r",
  "key20": "55bzjZa1dx6oK9co7bJ627mUENEgaoM6Ukio3KkvvjeP7TbBMQXarPtqBmdd8YKJDtsTNqQJiuZpGBoNRJYt8xqH",
  "key21": "3R4eKbUJPNCDL14jHHGAXzcSMFpuy5zuxuAki8uGyMnA2ub8Rn42UowqNJFrfxivoMQm8UWhoodcyuBzS569m2WD",
  "key22": "3hAzTh5m9jAroRzPXiAxPDrwtNAt2dcH8d2vrSBZ4pGncFtM7BQZYsLZSwWUS2jrVtkViLdTiQecPAaHsu3iwcf5",
  "key23": "3VzN7NNiyjmPMgtoT9H4FJf2DJqaHy1AfQz1PRLGzdSExfB1ajnbK5BSXkTwKEbcE1U43kKENxAe7z5wbWQMnG9K",
  "key24": "HVjMufHfjeXRNPyqGWACRzWrC4Bxts3U2gXkw9MjuGYFdXagM8s5Sd1vtM8V7Va6cMwSdTej5M2VtcEsxisBt9R",
  "key25": "5RwxCz5ZfUNYWMFppC8yiygZf9xriqXHTaz4zdAQgmZv2rc1dzr5F7Bm8xhvhiTLkUSszUPhrJ5BeSNTtNAjTayH",
  "key26": "63wB1GSFH5xSou2t5Cx2rcaHPSPQp1GEDDQAERnt513UCE6RZi6Yv8MCmfhhPcjYD5ZpjTCFdTjjK2Z66EYdcJZj",
  "key27": "2LnkU4SVvKAn8NkS2YxUBwQuw9snApR49Xx4gkzdAGq35QPvxaE3e4MkAeejQQGrVB8H5UU4DjV3XhTvo459uySh",
  "key28": "3oZ6GbKejQPQCaamR5oVSGArwhVajBxi7WtL6SRHrR8L6RKyWbEakUcLMa35np79tuccDzmyWtyaxFxxc4WeZ1Ad",
  "key29": "5YhbCdVYS9JWZ8fMMkBMuAxSMUZTDWpje2A1oKX3ZMHceHDRCggtS3UXvyDpcj4zmoPj8vJF3HDFTuXrc4renkuz",
  "key30": "5zusFkGnerZSYowYoammE9zhWL5Y8F2UcqqyQR4av16JK4aajtK9GF1ki8myQZm5RHoDAz2AUqvLzdWyK8fm5U17",
  "key31": "3GH8ZZJ3sy7ZYwS8CcgsAntKM4c9UuTgqLE7v1bfyyt1YBtUdz5zyZXSuQ6DgDWcF1ajxYWKEeUSbCUMRcL6rXZS",
  "key32": "1289ANrY7HtHvcm5FydtTqQdaQdXi4nEYF275efaQCtE41BxM29jCXn2BR2vmXfuhd2z22kyDgh1ysw7yYQXkCdP",
  "key33": "2p17LxEWWwKLUSt8ZC4HqL9g4jQCDU391FJqzNDcFjYrRm1j78eXjPcAVJBJXwSA6NLLaJYD8Yh665PaZz7zTJwP",
  "key34": "5MXbwNHynomaaSUtBwNAryjP3cr5tST3tWfmxeuj2Smcy7evLjJn3bTQk9WDh5dDroYrKbGG3Hq8A5jzmf7Dpfwt",
  "key35": "VSK6pGy5MpCetCoSbA3uvjGyEtDwqz3K7CV9nzLgXTgEfzAqR8fby8HxEPuARETDzigpTR2ZT84X6jPLnWULUR5",
  "key36": "gB8A6jRbbGxMCW4usVqhFrQaM9dYwQnpUhe1VXy9VLA5Ep9JSaMrVCqp5BRm67S9WAv6SMzsLcnnMbZ3YhG2tDe",
  "key37": "5uePHvADhipdNZDUZo9x3LdFLygehtx8nVo2bMgJHur7Wt9Fp977fwvdN5b2rdDavgKTNmdSbkBaDTYuszr9J23X",
  "key38": "2ima6vCgPfzPTubriwhKD6sAUMBKxMRvFSWfQ5RJfGjAoHmRTVMeV35nX4scGDJbr3ypm5PfRCPjiG1KF1f2G2ob"
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
