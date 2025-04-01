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
    "4WSvWBVPkbsKqzJLsbN6oU9cbz4NqhTRYhuEPJzjyD2dfirKmkLkYopvEMhspdQDokAGn8hBGAhwz26kTBUYrdsb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "23uK9bWPMxqDiHHUd2J9HfjcXm5USc7v3wGAA1vprTijxRmKH1oJu8RKfL4HsHrvxZhNEFKZhRqJtX9dCfNDLwYP",
  "key1": "5zumwsHdScDDuc6E9Qejesv6sYVFSTi3eakjoSNFi5XKuj8Ebexx7MihWooPov6W9fH4KyYs7gZnVvFyS9Gz1x1F",
  "key2": "3wmwa1bzBJYRFoYez4R1KKQYqrR73PEdoRjJcVSokUsArHaCr1XiVkJyQvAK1pyQkfE3Ji9Buo5WeNecjASqWbrX",
  "key3": "2x54G2z38sxxFaoPHR443oqwV96BArSBcFjfQUFmpvgJks5Px7gLMzuKZZUAXmhnEnSHWLNmUFVBQCQof9m88Ct",
  "key4": "4JY5o9cqeBdFk4kgM6FdfJPSWnA3ZKzhhLomaBVohsmT5Aa7yuHk6a8mfcZuiZhL1PWwyTT6ek9fB7vXLD8v1jVv",
  "key5": "2qRLRaWMDffqPSww2JZEfnZbXQdDXPVbzDCZyxJirhQtygNWRhZ6Ajy4YUfb3dHD9nmLXwKXWA3prAkTAHV65Z7e",
  "key6": "WFwRyju1PhEXgXKgEeyiWRzrKaNZsq2YaP1ycVKpP8LQb5WiMurJzYiuDebD2UAt6y5pqHMbczHfR1U7eRDbgAC",
  "key7": "4quo2j7GoeJDN2gD1k3mZqbGfGKoRTwd8fQBYyUiP5zSAGVxhpSgo7yRDJbXfJ4oyanooHsL8HddFWS5pitoMBp4",
  "key8": "2UAFw6P6nGCHxtNGLnHw83AKYsWwz9e3f9UvFEHcQ7nezHcavgBCQWQ1FWsc8DycFthMeWJbjXYUufpSNgLDzkkE",
  "key9": "2FmCyp7KRMREUoccDqyhwdqwS2TZWUwmzSG7CYw8jwpaK8AdFUqk2Db7NtDAXAiPnpBuyPtd6EeTDG6XZh81gGhV",
  "key10": "3JunCFkWe2SLMEcQPehDcqTAJoTrphjJoeB251ZJc6ia2GHDRFbJRWsEZnxEMrrf2WGVLhzLuYzi7aCc2vQSTwxZ",
  "key11": "5i1K8raVvR1TtUPawBjmaHiYSCQzkNRBUtZQ1DmQh4yHqygXLAHcZKiFiQwa6TkbeHxRRy9vNmxRpyFhmd6YaQaE",
  "key12": "55zqJkDu8jj6swCgH9dJiC2WnFBawBV7SvN6XAdsDG5y3BFR4xYNuJqokvvGiqquvK3NKatcmgo9Kp3LuaBzvoX8",
  "key13": "3pTjKjQGP3MbstatnWh9pT2X1XBWkuqbMNtL5tKAxdUE9rcAdiEQxvLBiovPyYv5hyCvJoi8ouQX7NpE9hdqsif1",
  "key14": "3jRzxwGWS8gfzuMsVL63Xrhstnzay8UVXHQ3KzhPkHPU2a4EbLiqyx4Ng47qmzhEUgmM3uqs1ttHG9g8y4JjPHSW",
  "key15": "5xeLfWGsveLkeeWN2HyQUtXGAG3vLScYbcXAEspTEWoPs2QeYbunBhp3cSihnhy9dDmHYNLjs3y6oYRYUMZ7vjxh",
  "key16": "JZBNnmpi7Ey51gH9VZWiD2ataThjE4SJ4TK57dckTvhr4dcGreC5JXqKs8hBVz4vwUa9gFYPqPEqf4UJSQgfDyw",
  "key17": "5BqZxNPiMsfrkXxpTsaC2k5Mbss7fLYMMpHJLHwTPrkPfogM5igRE2x5mMETs7BGikzpHHGacBnEevPi99GEb4GM",
  "key18": "5UxfoCAY75Xsnz6f8txityrBr5toqoZJ2HcT7VFCA1VjU8SE4V6z1pQn1vHcJYYkWd4tS9pNBj9FYfFtpH3Ja2jk",
  "key19": "4UckfM4XeeE7B1vKiBc3AwNa5QWG7zWF87yGbraZUKDn9cZc3MnRecrpaemp4oQRSAdHzfrTbXkG84r9gf7Ft27H",
  "key20": "2P3u8CqpXz3pMNLruV2qJZ2h916k8nSgaG4HBQBHT7uvhbe1fbyadeA3L8PV9uJw5WYpxtYKLdwq7DDq4Lap92zP",
  "key21": "2u3A4qtSwSFV9rwVyPi8mdFvHKno8xjgZeR3UY63MFBbcVVVKVsEScWhAjZxyCty6n1y7VMaRxLgtxQGgcSdXyDD",
  "key22": "4YRkD4QTvMyCgE53ARZtzvZqYv3FxvGwLte3n6eTiwCUreG8fgL6yX2gDaVJm4ADfNj1FkxsfGXBmT4HYWYYiU1D",
  "key23": "5tCr6sSWTRGmsCTkSx4bHzHiLoXJVmr4DQ3ndhKksy5mggznBsiFefADoJXAB1vq2eTkUKHEXTVEgiEUaEzcauEn",
  "key24": "P1T9QhZo7aw48EbYj9qKSVEQvsvLhtXq2RmCD2SthCy4hVpjzNj9aREFJWfh5NU3aXS9Dghaf3viSZcNW7G68nb",
  "key25": "4YrSuuPbgi1N48nQkTkpKwLBFoHJKnWH34TFN7v9SQMVihZHv2h6X8HApUqcJvgZ76ZNfQ93ZNCVuSMqB15Xgjj3",
  "key26": "2ixvE7nqXe8Kh2kusNwRVfPPxk2aZR1H3hwS5yuAoomm2U3eU9NrsQCPvQaGTQgN7agk8PgTxAQm5MowrZJ3C9zZ",
  "key27": "4L2H1aZyphdTbC6igtCMfsFcXkGGD3HgQ1pL2ZZzgMT4ptkca1csNcTwq1E3VDcdehg4bjpLxfHKyMsMuo7oAuHW",
  "key28": "4HD3k3mTDvmxbwSXxHuFsHsjHwZK2DdMQGLSb3P8ETGHcf3oi7WgG5nBXpQ1mcSFc93pMBwa6FFZ3RvC6D1Qidos",
  "key29": "3i58EvvftVtGtpaoBzzMN3RS9Fs66tjfC2waUJGHnRWjwdokeHK7NaEtLA1udL2oyKhzViAnit2CuzRr4oRHTxn"
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
