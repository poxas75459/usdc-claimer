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
    "ypkUXxTeRU3WDgW9ZPHjuuUmspeHJdUbskDiAbGmVpEsFE4nNHPZFCCiWJJnvYFyduUT8XygHVbbMTxj4vM6Wps"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3AFsuXA6AmrJ8Jk7pP2LRezKtp8kDcPpkvHdaXwYRmpQeEVK3boVYbEMcK8RvzcTM24afLDBQXT4QQRwUYUmRTxz",
  "key1": "58bKsGuZjdYnyTjHEcL4Lv8HzC8WAtJvBDruDZtCjcEjUvg1999Ebhn7zcqJxavgoVasHBkDXfEuVWgbh1PnAmUt",
  "key2": "3L8FksWsCwW1eh9YxpViAGmz9wCB6uxyeS44zRZXpqTnhz95JX5i5X4osPFCHEy4wDVBah71FPsoTbkDC4UD2KFK",
  "key3": "5kEkFjeUjgVGsXNc1A5CAGdAAhusuAzkcaYrDUarEvtCaz2PqGMi3pGzF3eBA2SH1Js9dqDvAhEsJBS47ffXMs3g",
  "key4": "2tBC5DBC2RfDjkJspGFDFNk6wkH9Ed2m3KobEsj8AgG96wyJAYjwfwA3y8BLMKKpgf77BHrmnCbUFzJxJChf7SRA",
  "key5": "37xhYLQqXQoH77evqxjXEwjLhzb7aVYzattKo1BjY4gnz64CGj6iFPe5nnPfXkL1QVPxBnJSJaSRRActNnbq2hP8",
  "key6": "26aHY6o4UjJzreyJWTzzuW2QkjtLRcqxgR57UbicHZaf6o7nFMVaoMXthMyhGnTBNU96CtggjAgjNaKewixnmSNe",
  "key7": "45p9Frxrzun9DjnyrB5RCXBNYPPtfiYgVsE8yzFX3WyY4WfpjQbva2BJxMNgGgn5PAXqZsxk1L6Zm4iReuZp3dWs",
  "key8": "5UbsRV7Hbov6c8Yxj8uUMjXM69regPPRiWEKHxZwvrv6STC35nLCuVWwfbQosnEkustYjFjtd65uFi9qVDFQNuDK",
  "key9": "2EbWgHpUCHSPtbQVFaQ3R7pLdj5rCCHPUCBXBAaWBgsuX4aeCqzVkJwTRDjzupnwiqp2RtemF3t3Nju6sbAYE58n",
  "key10": "3dHA8bTgb5cZToPto74jnR4ncSUcndTc6Cq38npavZ8aEvUabZUeXBNLN3VrRkwgwFuej22MJYjB5mvzhELGD3tc",
  "key11": "gXqW1TAXdqKWRAtUM1wUrztgcaucUppoLwBoM8Wqspc1UwqCuSBHmaHaUgKZucrHb9DwnWGszLi2ZXMsaN85PKJ",
  "key12": "3imnnu7K3LPbpj61AXHYSrcS9hHL1tBAG3Md8HybTpjC6b3HaZjHvev6Xg8eUsM78jGBZFtuFDRsk5tK8q7Mt1ej",
  "key13": "4pJD9nTqZVZgX7HjVQCDoyNWFjP8LP8kkCf5ehrLdCBFeov35k7YxpCWSxUnWKjV29TFFkPKeCz4c11gMUpRpaUk",
  "key14": "5NkRiA9CzgoStNYr97KHMLZvbyEhQFcEFZxc7voT2LcH7RawxzspLQhsiUSiQnwc9yCzW3xkyhkdtkeXHpTc4z3D",
  "key15": "5RWnU1RkfthbFwAXJrHS6q47HLV3GxGtNUasnddmrZoU9vaptMJk3syNrnnUep4PTSg7wxd5ej7cF4ewGz1rWH4d",
  "key16": "4VUivZwjA2Nmmkj5pNDEGQhkjJSsVqxjYJtNgMU46RtUZgFevgRx38eJLuBN3x7mKmMiUs5mPcjNRjNx1BBXnAYG",
  "key17": "MNbMANBEdhLGZ75YhxmDrVrWjDmzYLWM3P86FHGhXQXsxesS6Wy6mz3D1Qn8Cq7yi2W9wR2uV1fknYMNqMt3b7s",
  "key18": "3M7HkUJ4Dws6B155761Jsb2Wu63XXiNxjypY1oSuAbgt98buRCRkqs62RJGxqkrHCoF1akp2a3G9KKajFAJSVP3S",
  "key19": "4sbYXp9E2tzWKUXTVdnDBMso7gFhv5bfaoEKwZWyRcXFDjkVV7216KptbH9ovXmq87LfA16yGAR5kWKCWFDkAKHM",
  "key20": "Hqj8kZ951WD59QQk8bUiTABwoFnpYRMhbz6vk9xai1VEX7T9UW6Nw1zyd7wetCvf9UyawjiN5uqkvfdxNnq87PZ",
  "key21": "5oCkrSjXoQoQu6t2uU1Ht4jdjq1pTAP1Yuz46SVgw1yttuTH3Q5XPuUb5kGn8frVAHW4BuR7jSqdHYyNAmd6Pbte",
  "key22": "5Xr9ENFjaR1KyQqPnGmu7qc5BRuonnrELkLrGadWSpTJavpKxwiLDCkPa9A5TsMNUXBAtKh61YBZuvzjAbmg8oUT",
  "key23": "5arEiEMfmT3EHmEJUcGhWhFkgMmBedPN85soyGfucW65P1HBwdNBHzcicQbjFgcVV1xZWijpsmm1SpxEktrFQ89Z",
  "key24": "2qLLJesGPjwGx4x1QmF4fX7q94iz4uJSw37Tu8Vj1NErAVEHFbTGq7WQsXvUxBL9uLHUWFeTXASW3cjMDAM2UTgN",
  "key25": "5gxwKaQRwLkDkW2Vj4AwrsaRPQevD6c5o3ZVb4phKbg3ftq3NCXVWunHHvsK6brwDnN54r28yAF6iwySEWYJt8dP",
  "key26": "MDdw2hfR9vKPzqUJo9NsPCvmwaAJBLaZ2kuJh8WWHaSnEiLvvuSDaDRpTZoxoCZw4mN2ej45XAzqhZtTi3eLbZW",
  "key27": "4mYdgMAYjButeL3L2hkiotif1Kchmh4Gd4KDDp1oms8YGBm1GsEZkCMNGJv9M1Gkfsny3KfS8AjRkkrLRPMET6FN",
  "key28": "64hqgvBTHTiDiBHdngoK2bpqLHHjS3Q4gsB9VY41xnVkvQvmCPrNYXbyDREiQSEnnTo2aqBVXDTRDaoV9t2gkuvF",
  "key29": "5rnHTTPr18GVo3FUxqHk5MkMkHDsMtNmDhj9FeqSLL2TZPSGj67aJZXKZP3CUU6dT3W8vYU5BZFvFpLUgErU4fnW",
  "key30": "2Dz88Ex7MbTuFucbCoG21hVyqKzXMuBieysUc3Nw7zhf7sjfGVPkf6EnWDMVkFfx2zLxqh3zvfLKkDLZzR9uThND",
  "key31": "3aJX31xZou2rUMW3VHfWYp7QqojtKfGCuJF3ZRXbTNiuQRMTVvU5jQkPgs8FtYr6gq86f8YPnm945PiCnqr77fvW",
  "key32": "32mfX4ZBibU9ZkDx174fGxiQJGqzYXvRtRQNJHxHt5Wn8HUdSKTfvS3WEQKeBuqYX9EqRWtt74jKLV41dFBMTEuu",
  "key33": "47DY446jjurfEV99DrTncHomi9gTHgZLb9rdfWH8VSMazYnmLuyHQnk7EvWUHX9aV8PBFp5Mdx1buLL1NEx1weS3",
  "key34": "3JNoYX4emSFTbFAWHSRSLvKwSv1nVAHorWjVkSjG6sbUSQZwyGYLCxxjs3tLnJ7mqTMGaTNQAH8HWYsxUJnnjT7U",
  "key35": "4p4uqDNuhgLTJ9EKZLCDqth5foVsLFHPE5N18SRpk33toicDP5aEHDh5aaPdmZjdf8dMEshDwwqd2tUWjqz36Sdk",
  "key36": "4S7foQdSxfB2tmkordnfS3CW4wXsELULfSQ6Snq16Wk3zaXiPNrFmeSCfnDVDWGrFGRBpzuGrniAs3NRjgWvD3U8"
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
