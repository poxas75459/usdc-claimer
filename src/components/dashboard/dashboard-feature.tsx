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
    "582wwBV61YStYVGtAkvnx2GCEVBHCQ8TRe6DporUnH9eSmVmTSHJTTeU9iqVZq7EqTiexBjL3hbEs11898RA9o38"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Z5rTEgHeziZ8W9MeU9ssezreZGoVKkV8YQZFnWYgqWtcWUM68QCxTGHd7HgMcWy7HCBAaHigjrkEGhhJupL7L8a",
  "key1": "5p6WQTuVStCtQ4GyGeqtJ2n6ejcykX26eDmyV6DgkkjKz3oUMwwuiEUnLxu6EMwQA99emfJcAdRkErhXhPE1rr4z",
  "key2": "5dtjzadafzqnB4QpezhZsKJFj1x9XbxsXRTiiDLo8EKS4LyuAvph256EeB8Ug7TcCcjk7r4FoEnzbTwqwapPnXCJ",
  "key3": "5QS8qFx7oeAxQqNDmMYAaE5n6tVScwRRRVjZbDDvpJz2Lm6TFaE7WDmeDvJ9UhABtC4WxbLCzMUQNRcv5viD4Uem",
  "key4": "8ZnffYC72jqNosea7cgZWkjJdFh3PYEoDdFDk7X3gBFmUkHHc2LDcFL9GAUHqcQPi6qJf1BGQM85tzcbGS8gaVp",
  "key5": "4AjBLDitRQ68CtLyaraHWepNyVi5Eq9e3gcjA2Nd3xokCPS4irqhmSZycqjeg19yXNTHhSzjFwtszSoUmQYQ3tVE",
  "key6": "2hEwoCqZ7K4og4o8r1icTYjJQtr4Wrojsvk4ZT68vYf5dS8sG9ChZpf8bFrucy7NyVYc1VZrKcX2WfgeAjUcFpfL",
  "key7": "5LHQt4DiiM8rgWUK1rFCdn9PQxGHVe1cbQKoTkH9SchdDjsmTYn72shvb395FFMNXhgSfB6eTzm3ngtapDZaVUQD",
  "key8": "5omo3UqnFo5qa33hSTw6EuG62sd5RXQCaiC5bnpn7eJcBGoGrs7A4MDaxiMreBxJq8WrYUV4M7RiopfpKZ4UyQ5Q",
  "key9": "3yb4GbzgP9eadqLFn5A4Uxhp7zz9fPLZXAACegXRm2G7GudC1UqFP5Rg4z74eTFndF8GQ4HP3T1epptsAivmSxkY",
  "key10": "4WzJSnk2nHSYZARyKWFzvFBT4WVRwQ17kEiQ5WWXe264TAEqZDxtZVM2nCWoAqrjbX3W2qdCLk7YkUdFNzUEoUhK",
  "key11": "4tVUYPgLYvyw6JM5tKZr4nYJGfPVU9PfUZrAJ6JHFDnpgnQQuBL524T6xEGseG3NcADHyZAX15Yw6rMSSAd8seKq",
  "key12": "SJMsiFHnKsTwXN14CWGYg8LjBDv2C2mVCxhkJffK1pw7YA7rWFufhadTVLdfT2wJMQvmmAME1yiYwCMaHbaNcvj",
  "key13": "3ijPYCwcewqW3ZJGL1tW5feJBcjV8tCCss5UxSsm31Kto75P6cTBywc1MHt84Fe8ev7zNVoXmYAgbUzTKgBLzxqC",
  "key14": "V9wr5EsoghkdmuDvrbhw2PX8mRrWUiDtM9pp1otAbKe8Uxk14AHWXQ3pTvGFJ5he373HkR9p6wVZvuiV73WPEtM",
  "key15": "5JimQ51a3Czd1ZpmAxf8p599NDnPsVSQx2AX44FR8KEtxBh3BcyLFCiJscKGvZYvSUh4eDQXf8Zmy2cUbTVq79ZJ",
  "key16": "55hncgHxdUbcXhy4G3e4Do11JKE8tNGuuhnq6dZiBqRcXDj6DY2FEieUwJ9c1twwKd79UHipeEDSog6HNpZw6wE2",
  "key17": "Kk2hi3e5LrXiWVktB7K167M3VD7vYtuAH1LDjYHwCwyrio2WUpCWiqm6zKXPJd8qCyqFYMpYnVjaXCrFVmnseVT",
  "key18": "2s6DX5aAvhU2ToLZa97rsYJiokBHczCPLvMaoi48kGN5UBxYPw3qpKc8Y5YUDV3MPpPSpe5JkfLiy3BbAPGC8b1P",
  "key19": "4feH9SFyyVjxdTfV2H7W7EHKPyRHBNLyLBM4knnRzJmmGnUmqKBEsp6ZAabSoXN5PEmMA75bRMmxmbfUANyeMgUd",
  "key20": "r1hYshVxjse9eQDPoEHZ4odyBV3SzovRQ89633mKsefPrMV6M9Ctq27q4vWzVk1pmxChJ7q2UtRZhMQ8RjD7XbF",
  "key21": "5PGV5sXkNzAM9jq7r6mcBDw6X723rkvifwmzeSRvXdXrQGzTGedSS5P6HbYQUTPcyKpR4bmTqSWfhepJNnhKX48D",
  "key22": "YxQSkGEd5i3zHn74yCXZBehNyue1ceGDkFXAhRAkmpsszqAHk94c2jpPFNKxSFNYiw9BGxPbZSsY5W614gqAZRc",
  "key23": "41HHf4vdqQvLhJxt9m1epPbqKBCb5NK1fnRfU4ckHfuVdFiTsRdyzsUCWSYpSBgeJ94jxZoui4eHkttWb976ghc1",
  "key24": "So8Lf3P6Ks7e7d8YTkjRkZAwxKAekzeVv4StjLFPUFJ97gv6pPms7wLyLzXLfo373BJPCnwu1AMf3xueGdYCDGB",
  "key25": "3RAJXQi3fc57WRjxZcdL3Zrsz5o1DF1C26ZcACH1RJL7RZ4UW54PjRAnRBJZmdDJUwVbNYr1aVF9s9Hi4uFe71pU",
  "key26": "47qoYxz5ff4UiQbkyYq9Ay6R6CzWaL9s9vaWYBMpvRuPHEciPWusBsv2xqE7s8L7iJQfdaNVMhPZHtD9exLYYDCt",
  "key27": "5f8oR4a7VVawDH2eehrJpY9A4CiMjCBjJPiPHUKe19edVbJAhMafyqFg5bN3ksBZLhZWc3eFrNN2vF63k6F2WeDa",
  "key28": "5qmUhk3ihSDLrimeKcMz1KEeRSfBh9pFWjk3Tr7eicKvoZKFJyCbeEmHUawViAuzy6g7W4vghWqt7E3FccwtgDSW",
  "key29": "3GfGYaVJx6VxHptTvVdHKUMLUMAtcmYx3by4QuNLAmEeLoHUPwLpk11DnhuRmyrW7V78EQm6tNcK1Z9XAF6CYGhy",
  "key30": "25xRXfnuhvMDCVcNzWs9DdZhaNVaLsgVJFwjNn9B4q8UCeMzX78DYwtqdJwJv63njfFFXS2NxSyLVYTooeAZthG9",
  "key31": "3oT6cbQR1hrYh8LcTCuVeqr1A1jYdFJU5v7YCnmdZxLoDbrCTRNSJQzGtapkbJQ6umspeqY9MMGWzQDHtmN6fbuq",
  "key32": "5HdP8ivgn5zMcRX6So55SwGid6MaBa9gpobmfVB2UXuGbidzjH66SVTs5ZLr7oRAw3EuVdhYQFsucvbDdEhyCa3o",
  "key33": "2m5ruRokUtNdw88AaWcEWFojJWenBMJSE9ETpXkHNpR5cbEAmJhRKryZzD4yAgiG4d6aT2q5fEaHVLZf6s4k2ini",
  "key34": "21fxUsNEeFJaG8zuoap7PfHtsbG8GUpbEY3vks6mRniFTxNNmjDGHwWQnLpNj55cGvqzrSy8Att2XFHRYHPHTDWN",
  "key35": "qobwyRo7DWFTrNpK9BmdcT3vb3EAyQFAGobqBmXmvWVcm9nf552SThv4bR3qssoNJw5jGVD4UQzyP8yvG9pUZs5",
  "key36": "2qzUxEq7fnZqhYQVbrnpmQrFjo3RRKwyq4BFpF8XEEdYWVLpJ2daEGFrQPJ5UNWTZHxwn2LCz2uytdvJ8TNj1EAP",
  "key37": "5bm1HPRCEGjtj5urH2RHZPkzzsCNPE8W8DRdJGAqLYgeHa7K4ffVUiwGdfbhykrdfd3Txe7qxnvkXft4ZxE75Jiv",
  "key38": "5obR2nrbC2UKoAX45sAWTykrrz2BAm3U5MHWSn2ykJzNxnb15gdPyAXPWhx2x33LyHwn9jbjyPUPE26MUtTdGkSZ",
  "key39": "rNoSm3f14oo3k3y5MDCmSnJusqeKBqYGYyiR1xDD9cBV4RRKmzpzna4Mr34VaEJRSpdRgBC9xotrqRRqeAzKeyV",
  "key40": "2aewm3UtSMDs2Lf6nfo9KE9MXkmYPLVjJB718u6LpzhdmcTkB6kCNhXxz4qfZqj4uqsNwgHZBsb94o7MpgvFgnzQ",
  "key41": "2mz3fSp3YKkAZNnXtw8eSLdVq5414QRaDErM1k7rwTqnU1vwpJcwxsjfYMfdtEjf6fVEHAKAC1tU2gLYR39wAa7d"
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
