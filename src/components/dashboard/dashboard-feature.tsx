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
    "38N4ewpEM5CiH54S6CsuqqkuWuLixoXbFsjMaFgstCkZnA55xedv9Q8VzbdNykjFeaZ9dBwRokJ1eCxs877YVFc7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "42XFFDbiZ9HMCpJuWjKzZ6mZqtiKk1xjQaLBY8aTrAAiiiWcVdofy6KFxUYP9HC116hnSVKPqZn6uQ2TrCprtrLT",
  "key1": "2aon3mt6B46Jey6a352N423Fj3b62WCh4vekCBnckqDdQWq8fArAQUTZtk9XGZMrq6KyVYjGCQkLxEanaERHQsEc",
  "key2": "4omwH6F3qhhHnEW3XSh6Fdkv1PRT7Gc9Es7TZYfyb3YXhXmPXAAdNp9Hia9EY2FjGCpjauiCVyJ3xxHdftz4KrUz",
  "key3": "5sg714Vme5Z2uLa2xdqaQaEQnT64NasTdekU6yoVEzr77q4vqxDhkZPSgL4kLmpr4gBiYhdBMB25VkikuMcHXeb6",
  "key4": "4kxG6A8WSvMcrJWzam7M3ZH7QGZy7DdHTfvt5CGg1cMYskVKiEkgdt8Rbh2komEh1sE78FeHfo6tfBYRkioCsPYk",
  "key5": "UjNk7HtJMFCttkhzorExYhZuQscdbxcuSngg8qxGoHsY5i5MPARJVrPnyPv289yR2Mnh9hLTt8CgRvT1H5sTrSu",
  "key6": "2wCkxRZ13ZP5xFoKXjgwwwMDxWp9bFQ9WASYDv1Gm8N5JM5xYecBRGDyVia6vzmwvJv24m3XbkdkMWSRFq2LTuPk",
  "key7": "2i4XGb9wRAWyV7FQo7KRrjrpbCu9P9pm4jent1fLyjfJowD1HpBfUgXoNwEzozV6wqEEpURYic86YHpbAoUrTVLV",
  "key8": "3NgN9GDyY32PuAd6mfEtZxkTCiGYr6cg2EBqv2jUyGNCqwKaQE47dP9S34tYzefitjH8rQzQ1JVuierA9ea9ofwL",
  "key9": "5fXJJVc7QTiXmUaEp3Vmspz7ykX9wzbMo6vnRe7H8MyZqbwvwFKCPg5cSTvsDAEtyNZg9xSkpWrydtXCTeR87kPM",
  "key10": "5CrcjXHZs9vJcD8ZyQM9g6Bv2uu2tnKSFqqowMWjMoHbMCJ2t7Jty1oHepHmcMdxx7eiP47cqdzSX77jw3PdjEpX",
  "key11": "4UP4D1Hm4zfbJUVADppk6nhQQaNwfXxmrX21SGmsHWHRcp6Hp4kGXwVRuWun1mS6vAFGJpD6av4QcrTwqGrPV9bp",
  "key12": "3rmWaimJg7JDWY6Qr3kWZDwjmzKwUCEFotQedKaQL8mTsqeVLHWbVyPndc47LNzZFDGnBCzcfHwL5JjYLGNJD6jZ",
  "key13": "3GRfmCPKDBi5s7DaLmVdNVw1ADBxALaoQdAWc7GeZX5GrcL3cZS7MPCY6VwvwcbWD5gxc8mHt5uBMkNfHndNDW5T",
  "key14": "4WmSTyYQjJhfe2jzXLULTftJeBndvCFAmgusF8c9oDNdMfMpG8uGgKR9bjaoAtVVHGVUBWexLzGB5j9XVYLQirqb",
  "key15": "4RJCTTLdgiuAQVGWqb3YvpxvNYyjBVEHFXzB9wHCVHw2y1LMzrGo8YKWDqBDjaeaQCf3k82bSdYKG9qTgCNrbBLC",
  "key16": "5ssYHy9Epz8WBAWvDQbcFxUcUQFPCGSCPLm47Rpb7VzLNLUD2tvTUVRCqDyA7T5pZHWSsbhsDpu5Z1PQKHquD2Ep",
  "key17": "5TjXUXh5tstPmCABnSXvC7Vxz8DneTbfPJrPZArazp1hDzAKqWfti9eNkmj7dyPHihoxv5UUHfTcy5dFfMa72GVG",
  "key18": "4WW4TXeroxeEBiPgxfKmrZ5rJaEtYNU3oR7hbXnYvTRQLpHCjFFc7KwgPzmqvYfxMr4jZrJa9xFCdCk3c2XsxSeE",
  "key19": "5zL3gK8wADUQDDLbeze4aNhqm2XtCt5ZJVqzax4aGhdcmZQ3PfCW9abUiwUhe3mNnjBG8qxJUckJB6jbcyqUGSPt",
  "key20": "9BJNqdVXrZ2voQwaV2jyV3vHitUKUKyEGm6d7fo9xCzP3fjCR7ceGJKMsaHCtaSp6bqxKz2bRswACJMT1WQrUpN",
  "key21": "2mDmejzvq7niQZJADHseq6rhcDajMDt5cBrweLF66ATAbvZm8wi1BGHGEodgwLmLAZYA6Ls7XVsQAFJvXfrhb8ht",
  "key22": "5bm9h1UwaNHKBTwFoFrqRa85pzKh7sVVunJThC5Ggcc4Zv4NNRwJpjHGaxSHcbqszYeyWdDnukWMJZBfptMWcoPY",
  "key23": "4itANThNCGZuBYJZCRp37NKgzLNP6hAGEHLZPgQ8DxZLJAbKzTg3tDa4eRGm7HuxYQdj9ZtfgKr3EnrRnzMJj7hc",
  "key24": "5ukykWUF1snemDTxXXM4SgkG7n77RCSj4C6ctD35PkGFyUXbXg8aqtE4K8mjG6P23x9ybCbqmRTDPtM2tnwFVZMF",
  "key25": "2VwC2t6yDVxUd6mPkG8HCTFhv5Du1q8Cu7jBaw5BESFHm8kUnJcQ3YL89KXWNU6gxqpxnjULihSKyi2fNVE2nSeu",
  "key26": "3ntu1xSYRQ2n2rkNwNfSNAPi6bjXgbFiYk1PaYBwSK8Q7NpCSfbA7hnnWnEEfbK4HdxzeQQNGn6XuNgkyGzvbwZM",
  "key27": "4WdqqD4AZwDm9W3GB8ACGMCQVXCFu8TfhjPbuhL9nchHrwgYsom8GVX3ZvBdZh4TBjTYBfuaA125u6yeRq73Nwky",
  "key28": "2DVjT7GicGpGooFEY7MSRhGccNBtWXRZ3ruFGZK24v6BtSJwjv4rrAEKFCjptpvHSVXS8p5UrNSSiWW7Ne4Upj9r",
  "key29": "57TRYcTfy8GNHAt1KEFZPAsypMc8M8AMcaGHP8aRdcqMZpgZJbwShch3c35VjRqXTkAXnoqezcfD9HzSMoZ5eLs9",
  "key30": "2MnD5vCkDmvQSF8vrCtjYk6eG6MKZg1VazPhMoQpuvs6AcRDG6Nn5CfNBwCUkp76BKybNdbQ4G8ve9LmkfemcaF7",
  "key31": "5rTQCgUV7UQiQk5dxykQAM9A3pgvAQhTTHxUbku3MmmHNaHo6yULDKLuc9u2vVsk84VrTnUrnTJiWvArPB69WWXt",
  "key32": "464EDYWjYte8XB3ZecUW9cCRJX6xh7wjobJjEsY9ChHhGACidoYgyFfxAaweBEcVRQJM2h4JCagZfuPrmqbkSgFZ",
  "key33": "3GnX5gjZMxdyR4gu4x465na5DuXyDsYaBe6Lv4jLXoQLpTgHC84jbPDtdvCE891NvAw68ya81nKKkGA4cfhovCDN",
  "key34": "2FLjBCRMesfQdaneS9CnzWUjnzPEpUAfpDk45RHpdYQhVMJ3Ls8go6pHxzSCMtFpiq7CcBD3VNbWtYWcaY8WZthx",
  "key35": "426hBWTdnDoCAMeXXL59wnnRnmLr9XMJ9t9NjEcuU1pSDgWc4GDUakEgBYafPC5PM1c98frXennHh91rBbkya7xV",
  "key36": "5ZxSq3Z4eLEUGoh7hFDYz1CAbNZJXBoo779GABb2W2xTSznptEBTDbZojw5qW96gkSC7qZ8GBv2FGU9arQCg54zX",
  "key37": "4XGssZFUCgJhkkWyJppxFA3JuSZTg2fZtL3Jr9Cx9HPsWTkru3C3e8G51H6BfEJNxS2kVHJc5AErBKoo6CJ62nQU",
  "key38": "3puGQcMCVCPHHxWCTJBkRWK9xZ8cpGJDsz6wKi2Ghnf3KBT4nesWRvHkfnkZ18BjGYDs7sieUaMneDLpSxKuFc8W",
  "key39": "3ntsDSQYq7j9YrozrXJ6NjuJZQUFv7MAwhU9ytSerVWXv2jtLQCWxfGCMaLB9Q18CHW19e7ND6LNWpfND1Krfmmw",
  "key40": "EKzBz765ZvWtUDA3tkUzp3SU6av99KuuHE4UEDgFS5UdS6UsnaTWFQimP4coucahPSzbYgggZcyHXWS9ZGGkPqr",
  "key41": "2BpqpverPsc3PdWhiLndB6uBGVdtGj4ypT5uciKFZxQaYh7DPWEYXeptraB8htfuJTCPnBVsXPpqqtHeFZNrSgBb",
  "key42": "65rgXuLpS4mRRB8dD6uNfRs34EXRwa9oj7ZKLueg4WmucWQCKFMoHQDisTRTdJKTBDePcQ4eQps5p1jDk3AeXSY",
  "key43": "4DuRFrdi9eDXsH5DVoaYrBosrxkhr3GqcCtwxacc1Tti2TRpwgPzTDJv6RuhSeipXfoQoHZkTRbS9yjjYE7uP1GS",
  "key44": "5YMrWGPin4mJJV5CbMHyYka7isVxWhw9uEZCSY2GX34eb4TJ3UcsSTkKyF48XF5x97WupQbHAUGL6mBu97wx3ziN",
  "key45": "FZmvDy3qs52hfx67SLLL8fjBLwD86YrEMxuiomAnbzL4JHBSurwd7fav3swB3dpAGEyvrbhvU9FKQduQh1dWp2z"
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
