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
    "4xxEFAxGN2VXKGAY2sDFgb7pVQTabHnS1DoJYxARpyUpGQSrxsgNxxQkyuLQKwScvtaYg3t8SQTmBwsRQiPRw7VC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "37ykLPdEfZFfTUatpGx7JQx6Z58YAZLcFgh6Yj4jjAcPmCT4xufqhU9NP5SNuUD6oEX89JJ8GYHaisBxLTMkxJ9Y",
  "key1": "dd6DbyxDHoRG7VuyXV4Dpv3u8a3P7qU1YJF8DmsWee9nNN4gWVRaMFCLTAVn6BUuwBx3NsJKkbdETXRZ9L1d8ZD",
  "key2": "5j5UnYkEQKbijuE9VF4tdyToAcTLxFN7x5xLVu2tSZ4taYT8PGdiKUmqvEKxrL3xnWTDUQvNGinFBeSmdu6b6gFq",
  "key3": "VpwWsZEtpQ72oSdz7uBzuZYbX2riWhHhi1zVdtZ8X2RhsiYxdMGowng3XPQj4kkYAJx3tfGVnX4sATeffPTV8wT",
  "key4": "5tN9duJF3qByfUHJ9QTh6EnztkpRFHeAJcTmDrbH2c11HMKBQvLzjTQi23h9pVCmuXEpX1CDqMta6DjKVPTUzmbe",
  "key5": "3huhJE7xFRKePVBEV67XdEEtBgB5eSP5Fn98CZXrcmSGwVpTMAfQ3jUJ3jmaWRCw4NNZFUNRJpaisEfc1DbcuM6N",
  "key6": "59TP8Ff9nQkfwj2ToofDiqorFMMQxywzMbjz8iVSnUvzoyhMKhAYGAnUJh86nAitjVZJHpGToUyvHrcWJSbBRsqL",
  "key7": "4NFm584rq3TrVwFMS2KtBEJK1UNwwGiquTm31bctr1sVFwUJxbJc3kEv4hEuNi4u45WpBdJCxtHStdsnKe2JinyM",
  "key8": "5PWt2Y42ccYw3fMtpHaYvs9gpcLYrgbL2ECC5eavpmd9GPZnNuAUMQdCQ7R4rFbqYC31LEHqs7kqXRukdWxtQEe6",
  "key9": "3FjZRQS8L6ZTxbfyHpznRk5TBnoVPsEdEJ8u4paYz5ufGvFtvCXKiSR2BmFZ1YgC69sSzVYWDMjtLAmfT4kkkmhQ",
  "key10": "2BHaAt5J5rY85RrHe32nBqb1fKF17c9orfbtB15QtJPNvPxDXbt5QUBRmMsHSXrD43Kh5CJytj8oUZ1SMJdxpyw6",
  "key11": "2upSKxwtogyULZS7N38DFJ1rkGbursFn1WkLP19oWkYy8SpZDh7w4PoefgBhxbsFY2ejJMkYykGRYACbVvE7EDyQ",
  "key12": "2tJYJyLKsRgW2npc38268uSkMb7QNkp9p34gfrjtjSgNkDym8orVwQuHji4HGW6VdbFuqwyKFgo3piYmntvGwtux",
  "key13": "KShLxLF4kAiTGyNTMLPU5P6Rtrn8qaefSfRiD8nFsEi7Ze1WbGUMpnJ8rJaGkYySD6FPNFpSXFcqxsuy9Pv2nXp",
  "key14": "4ft7qG2vPkZHKxefhFbqxq3h1A3XprF8v3mm2AEmvTjHbo2gbbjSsNhJtYKKWkKZ4qExrGdJWr6DnwXVsHXVJWSX",
  "key15": "wYCDYWfQodyQN2Q6wBaDY5ZfoizgU6mjVyXwwUkoTXaJswJVTKyPUEUCfF3uZQQ9EA2yyVhKyrFn9btQXYV1vwC",
  "key16": "YdWXcrWdyB2WJK4qBk86FTdz2wTCtFJfLZeEnncekRSoM5gtfzxcQmFNZn1aiMPKFRXL5TYc9PxqV8cefixKUHz",
  "key17": "5uSmEP3wUgtenLew5bf2reTZt5M1SvDJxY7Y9Li1GuTwVmeJn1zPKoNF3n55cLMunfv9rgzhD789G6NViYKWqfGD",
  "key18": "e5HQY1XY9dsQ1rG1QeshQaRPUL85EDwyx7GZiPtpT35XXCCtrNrRP31bnmW8s5uGUAas2vyKcPtrmWEUxrVJa5y",
  "key19": "46KiyFmRZXbn3t8Su41mFyygXad2DH3PCS3RJwHRYefAL8bYXJBmttHQy9pCHoo9kKuGHBDtC4hNrjzZyEMxogJ2",
  "key20": "581fRQmH6oLw2y1qmhiauUdNTGitCDrHtFHhMAZduZfcoZj5Ev8zVwC4aaZRfvpyPGp1T9M95XhFePik5FeirokX",
  "key21": "5j29T3NFjseqF5CbxP3Wd2aD6e1hvYqGvdyrNr1G7AAArwZg2b8Kz4AwWwpjwEfoqdvknCwKVWT4NKwcozdxugDh",
  "key22": "5TA7SLHZbdEBABu2Tg7V4Sd5wNYTrYKR7xXcb5SekyqtdcHzvDZ4nvKv4Cc5tbypZ4y5VdKUYXj3XB3qsLrBM9s4",
  "key23": "3NZjzPAwfaiB6PFrmzMqQvoFNyg6xorMsMyZyXguNnNccDMNtpMCzkJRBRwU1b88juKzRvVUA1jrquoWk6sWy93G",
  "key24": "5xBMej3CZh5ZhL6aTzhpNZoYujKh693gMai2jNCMwgpghGLFVHnPP7DkbzD2o92zX1BTe5m3mx5qhfWKSg8BCTz6",
  "key25": "61EjGbBHQuk56VK4EB6YqWyZJymtbeSgqZFXGw77mRKdJj6VhEem3mA49gdpZekbbRgBFrF5nBWKBtNfkHUJ4i1e",
  "key26": "51ftHPKWPnqrk2s4cNCoC6TTCSt5GLe2H37m4z2ebZN9osV23qgqBaSFKjJXNQRLA8BTbvsJEvp5iuzXS3xvP9eq",
  "key27": "3bxYP5WtHxxpFha7P9JERWzrHPQJkLXHLD1UctAUJySEWhKavFnMD8tacYksrLAv84gjwvZc8dqrMzFbc1NTC857",
  "key28": "3sw3PQgMgyaFPt1H44xLgvpSS26iaMG6wmNj3r81NwKP5XE3utz1ZkxXKkhkn69P9SR7Yho4K5sxr1FVsj4Z62Sn",
  "key29": "61FVa8x8SA5Cd6hBdEE2WagHbefYBdUqMCFzqRY4ebhK4NZNCYVsT9CgihbcAksB2SeAxTTRonFSbxqZfjGysf6Z",
  "key30": "2SEtBQH4wj6gS7WhubGP3Wpz8kEX3SzwYvHLPNnuX6yu7UkXQnmtiSwMkzRTiaXprLw9sivXp2MUN7A2j77JCu4N",
  "key31": "AEFWwhWscthbi39PaZmB26hL3dUbqdgiqbZkyepJj6euDTU4N7dKyXbggN4mLUmbcFU3qzUSgDZeKHarcUF5v1G",
  "key32": "u27P2GRVeZFCxGZ5Q52C6RxkoK3jnoLkLwkZ4SaP6ZpZuDCuXuahnvg4decQbFoeS1Yqyjo7Q5WE3JNFD2mKGbQ",
  "key33": "2euz4tQZ71dKUFq6wqHinPpYGi1keTbzAv81mP2UZgQAAPstyxbkauasQw1uT1CvRKbtUS9of7ifUFM5nsmwGH12",
  "key34": "24x5A5WMNTALMGhp8fBQJT7q8rBzFKmEpnLwW4hEGMTc5oFKPqgKJRfB7HgbVJ8tAYG8ZRfAqiLZ2EiWjVZgxpSM",
  "key35": "2zj2M1c4MsXovxkEvgF6q4Zze3xbESRC76U26RUzMDBpNoyf9J8rLMrDq7u5FTrGh9y9XQjr745eADG2hJeUhHKW",
  "key36": "4erA3KQjW9r7wWEhJDpojRomdMtzETsAybvFRK5wAevbz1FbnHioEAVc5iMdAAunMwyUYhQ2LyyayAjb86BAyyQs"
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
