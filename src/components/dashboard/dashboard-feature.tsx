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
    "4wYcwmB5AaNnpRZwhpuJbJuwrTWrBBfYgYLb9d2jC2JCtzWXxfaGW3pTJkKmeXSDruutsmetpt6Gy259pa6jrkYR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3XWWB18AJ1Rrb2CcY3kAa6zCnwrfEDYvdRFPaRShaKyGNmLuMbinUJULGZxmF7MSaRmVkueXNbdShVvXvjHDMvPX",
  "key1": "64zWbJ4W3ukLquLm2WmDQwxWhLDUjssPJdKajQxCXkzmpkp424WxbBfT9e29vJ5UuSvyWosSBdVGBVP7E6ZJJMGW",
  "key2": "29GLvqFbnUe7ofG68Gugk8B8jRmUNeMpUFVfKWMhioJ8P1QTtUYDFTxJ8r3q1KGwNCFtF1aG64kNA7P6bBinjmPu",
  "key3": "35QMJWuZYeL78UW7ga4N6SiZGBvtPUJedaEEpayhQyS2pfxSxEVn227B9gTpUyFGVNiuEerDUVHMVh1JDoHuY3yZ",
  "key4": "46vr198KjuN5ZVHSAfMhS8UmBqT3bVnXCKTuXu3LPgvwGkCJTxgwnhpUUUAYp9GUR5Lb5sDgjjnYdbBs9NX6bZ5H",
  "key5": "BFT2H7vGZeBAznKHNBiBXvYsDGM86YvkGoATmujqZmrrqLC67azfoy2i1AAZtoTXZyPcVW1TYz3AfHBhr4AzaT9",
  "key6": "DFLAm8fbuvfxk8UpfgeoKUGmRRmxY94K3kQb3rhA6ygjQLGpbDDDe7xQWz8xYENhdGS7GbcRPnkWzyHz9gnZz59",
  "key7": "5Y2uYkFCPhxLM3r362DTGc1spwcuDL74gW3EtiAXBMy4jwcXnXcPyoQCNp1MkZuGsv5ZbLdshWys1uiUkKoU7Fom",
  "key8": "547HGMuPnB4QxneJukJutduqiueBm7VB9CVvS5PrdTxX663svYRDA4WQbhHaicsgnVDKmLUYcY2H61crFG2zGkzY",
  "key9": "miGb55cRWiDsF7aiXbF7shRmwqnUKebQc5fCaFaRVExyLNj2tMZewDTGN7LX45Phc3tJphRYN6dwEuWNLYni35i",
  "key10": "5Mb17jYH9z2x4Y1UE4BCt3aHzGidw5GpUSynY5Sxdgm4GPREtjGdhKTMPJ9SjzhQPZkkR99eG4Js3VjynGWJU7qt",
  "key11": "sbn2x6ujWwuv1LRcihUa9GtHQxhs6LGvsuEejVjSGqtBpVfmhCceCmfWxCJTwx2LxaCfJxy4jJPeEFPWgJ4SNYK",
  "key12": "uYnq2GpLBdvr2BRZZLQiCftQkwpu97HprsJWahGXv7pmqrb41FJNHHuPUgbpmH7eAJyL5MSF4PCXDT4tsXu2aoj",
  "key13": "CfTYXEyp1eAbKWDfRJDRvrrvVvu24ejBbPAKW9Rn3yrMxSvnQijvasp4d2SqhgAbQ88mxyrqnr7jKXLjtQQwA5r",
  "key14": "56JCSzPPxcimvKr9CDLGkvF9D57fxjGQZyXh8FgDnSdN2Ly1jB9DQwbSpwUnBW635ojUB3ScjddqUNiNMCGHnsp8",
  "key15": "62t3cPHZsqPtKYFnWsgyUW58468ZyoFjwReq8ULj5vBXiEh7QxXZCLb5xfWqWM8LCBuU7cWM61HKEhb8Ck57SFV",
  "key16": "kmecKfWknmZQgu4aCQppMxxT49PhpnNfumfC6Uknwp6B1Y7jy2QePtBQXk6gE42iaSi7zfzLRsQt735m7aamFCa",
  "key17": "5gE93Z9KpgSi3sAzgcDmgC7HnWAt6iLjJhVqcXd8L2Wp5zussqYSeenWEXpRL47qsMB6xzhJGGAFkhY6YhJwtVSv",
  "key18": "41kweAYfKnBjy8cYGVx6EeipksXRLKV8oXoMbTSbUmkSTGNJdLPEV2ewh1ToU9BB2mCoT1qcNFFsNuc53ihf4X8y",
  "key19": "4DDSwpurvqheVzSHEKQhCJt7LXBbQnJ2iWuGEeDxEvcqu4jT4cZKiqPSG4fsN5ifybdhPfUWW4VhGuo4XeX2guyU",
  "key20": "4x58nmzprJwdY8aUFmscTYzSWN68avRjXBbwqy3gDcJ8tvw7ABfvWBtDWajUoVaKFDiTfcsnHiSGRfobpgqTTAR9",
  "key21": "cs2o3j6spUGEGo2ateJXyC98AxecCtTEoDMRoPLAhmKBGsV22etD41huhb74FAfzxSW3tpvCaL1gtfmBWCW442i",
  "key22": "3UvmPZUKNzKSTJTCYpXwEowkQmCET3TDrH4FiJYLf1ZauQ9GDLN8geTHUASBb1h1JqKadT4JVhZrECT9yRCBbJTe",
  "key23": "4rffJcVGuYkuQg3kjX3tH87kpVP5HrXNqB2aidvTfJJwoCVY6CperiMYEc1o2pLN3CbPTH7kasChEhqupCGr6hVG",
  "key24": "5iSrY3FovDkoEvcYsp8TCpDewJpUJ1FJHo1Z23ej9dWTDpiQnDc8WgFPQBNnsX4vi2h6wmnM3bYz6CjbifGCrGTA",
  "key25": "9pR2icPXW38EKXJFMAGbHbF7ufWToC8RzRXcZWU2Z4iJM6GtGAp8HBZ891wR1fAafhF4M6Qp7iczNx1Kr2JMBm1",
  "key26": "2siB38saa4F1baBERDsYd8PdQa2zyFRw6Exu1o24rDw7CyToKPBihsDpLFcb7HiXFjuqisYavQUhLNxGK4RPx8Hd",
  "key27": "3zhSufMCQc23fCR37vjvm1H4FUiyTnTDENmzbq4t1cjo1aWYYUsgHLM4pPBB6oBWpN6omzJGbJ4vynJ1Rctwdsmk",
  "key28": "5uT3AZxpo2GYHagMUovwdauCFHgiFzaPyFcdyWPsb2GUf9uR1jgXEECArvYtMiZygQUaqZxxf7jAnZtc71yz2D6J",
  "key29": "63xGBTmgAscs6RMdE8Cwc29AJ1goHxzkEhNA4z3k7x69LZhDrCsy1UczucUi6bVneCt1Cx5FGbcdKgb4icFyunq2",
  "key30": "3QgFuZmZpy2XmEdHT9duTBj8cFZkj3uEL8WHsDeaVTFHZWm16gvK7jbf2kUpsKAexqKPLPTbkUPmsxTQY4DqBBfF",
  "key31": "2JrMb159NxnaggdpJZ2m47GFTeUMRFBZYvEdV7qNC7aDqGCDEQiGpDVN9N4zpqQKMKscpsP9V4vUkeCpPaBNCjrg",
  "key32": "595JeGqrnnQbR1YMcRxaARyD4ssj72hd93wVUDCxbYK3oo4FXpi6RE5Xaf2iW3B6Qokx42RHTcP5GLc5RTcGoGev"
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
