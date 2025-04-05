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
    "62Jqkd3bEn1T8FJzMnsq7TZN9iMNgs6czwWFuKgXQxacnDi8PmVjWqzYaCf5ey1xJaTPdaUkwBEpa5pxBWTWAqnE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2HcrVcHTnPvrxoD1bEAhNbpokADCHEFtvwCgXb3VFj7qEgKLAjUY6XPYJVhNEDV9968jqbJtnfq4MzsZT8eDYNVX",
  "key1": "4TKeyP6m8UJcxJzaQQjTU7ZhFwYREP3ZKiYdjuBxfVym7BeLeF6yLxonZD9F8qX59VXXFu4U9U2StsGoc1vZqAtL",
  "key2": "FzhNssiejEaZXuchmkt97WuRp21a13Mxt2uTHeXyxMN9cMhyLPXMZ6qiWJ3Xo1K9ddnYoVoZMCJ7VPppR4asVAK",
  "key3": "4GsR1gTdUHu19LRs6irWgudrq3YxXfQd8nCM746FPj6gnE1fVRKdCtcoEkDyPuEFdej7Qn4UdogRXiSY7LcWqk1j",
  "key4": "2ep4XhikThS4PRaqMhgNCiDryjU1HyCBFbgbzCnL8BhU7hr3GK21vALbhMQWSTbSUfKukWDJmmgVrpxTHq1W8eaK",
  "key5": "5gNYERSom8CJLGpkScjjwbketSVmvRTZ9Pxp6oBVdBWhVR2hJBhYNrmZFYYMqTCWqygVVR6EnynUi9rPLA5CSQBu",
  "key6": "2K7PRzFuMjwbGUxNbLwDzwyapJAryibEWjMQERzFySgFDSex688opPYb34SRCHYXRePPPiLn7rRCtUYGpsW3s1AK",
  "key7": "48qiHTuNbQMQobBJnAhGx1MH1Vuu5zv9zsc7zM4LuZiVRyyDuJjgpyagZHhiZmRY75CBLpnaK4BHji7ya3nXSWea",
  "key8": "54jnjk1JoX6EoBMzJRo7xvPpZvzs7og18xcrJqFmNU2uHH59WSFXXJNZNjEsHo6uwmUqqKy5voR2RcFQD6HEAJUh",
  "key9": "2JSkBFWMyu91kTnwfSsBPcSCZ7pfVE8SKMVNegnh4wWCaPy9L3SCKsAjCAGKWfuGiZugf5d3p9nGeRd6277iS5Jd",
  "key10": "s3y8o3D4NDxuxtsKQM65isPQBW9eGU1cwzgeKcBGgZgLG5jhf3MnhRfBGviFLp3daroznZjJcabTtfdiyLiW3ei",
  "key11": "ZbigvvvffT7swtfKyohvEeN5XCBwjL82qWXFq3PH4wWGFBEYzrR4gLDNqSzhuqiaqLpnSrMFxF9Sox44VVXvz8k",
  "key12": "8tkXpNMRQNFg7ZZ5NKm4fNpEDFQvejJvnNL3wj3XhXhZxkr61Gyd25aT8XtYPrNWASr2LARXzMuhzrTPcyns9q4",
  "key13": "M4M5Q8ENZxcuUYYbgj9ZA9imjEFQjy1XKU1Ap6BKaFD5wNHcPCaycehaqXkzSRa5Wggy5vDUNXa5tJEvNotpUrL",
  "key14": "4rLVqwh9uDQEjjm1poGVDzaLAGn8pwd9uHJKBmUnzrww6WRPAL6MoUfAR9ePJrLjzBF9ctPEBe9XKYLz37Jn5Pf3",
  "key15": "2p2GHQxY1mjR6yq1cHvE58rvPBRoUiXuErqF5MVa4PoWtBBofDz1hL6Xnn2oWnCH4DNyjgmCXK7G2ARzjg5Qb38e",
  "key16": "4Fy9yA8VsYRgjo2bBr89VVvV3iYn2KTyHXzHAur8RYFkJTrqbEv1dbmDBsAfU5Peai5uEVUxZqik74rcXP18PTSy",
  "key17": "3WQ87oDSqMLtCMNXg8Zu3NWiECwdcRWVr5CyX3E9vRb6DvTtj17ZrotU3PtW9YJq4ECgapEyQe9wbBPBuQzeGBvi",
  "key18": "3iUgofDJFjYVsRqY99pwoNzjX3om2VUZ9svkKjBCTR3MKxjfD63EncRkUzP6tBBLUfegqRNugvEPZ3go4jG37cKC",
  "key19": "332DKBw52rmfZh2wgWyb6jyMtxdzETpEAcDp8XKuL5nZDdfR9RgFLB6UXBtb34WwB9iKvpiaU6GbQeReyUBzrK66",
  "key20": "52yzpUwGDeeqLJG7Z5oS9FPJzmFrY5U9PKEKQJAg5V3KsV7rDvNnAGZYv7DwY5MxfTbEbQGAV75egv5fCfGjs9e4",
  "key21": "67UfqydgvTxmSDWFmR51a4KdKPM3Atu3yPgB1w1uhoU92YfbwsKRrbuMwRGxwSEsRQXNZLWHPAGqJwSKH8AqZUUH",
  "key22": "3R4LzFJDiEf17iAxJUKsNkYYfYzMiLMLcH76bxmcvFtG2rwWeXmMsUR8qyrXhNNpYSSX9Riq8UQ8LBipztXAhVbR",
  "key23": "3Ak2UFtRGsubVAk3RDq3ws3hyhjokZZi5T3uQ6dXC7WcURAXVFTFSype6FXsHUYgv5SKokpgYCmUJHuU28qZJcV",
  "key24": "4WYhmu3ZL7jpTdebFn4myRe2v7Sf44BrUQbgj3oz1h84nWFWLT2huUKzJH51pN52cHGa5yHku9DRULLiYTcnsT81",
  "key25": "5PrzRSTGctwkjJxFF6Ak11tmasPFUSjnqihdtv6wbPdLj5m8yyXEej5BVfpiUNNLFBUZtrtgs87zuAnvUHrND6Bo",
  "key26": "3s14UxsdsE4xWUbk9pXkjHHvvzrktpkCt2fDr9Cc5bKvVYTNPNRfPqXavfWMteaXn97dG9d8hg7sFEYi4xifhZNN",
  "key27": "4CGsZZ7MFBavuEpdC5xA6QhAfgVnjVXgSX9vsCm4rXKubsyFjpfxnrxqEt5uWX6rS5kZbJfCoHy3UgUfmR2QyAbb",
  "key28": "8TgJGJxHf43b8bj2cTukgntWzbQV74H3WfttFZnR5gJNZLnumXoNFKhs5Fa49DVnY3CZbm5RtVXmchQen7EzaqX",
  "key29": "49PVrap9nvqbdF14RxxKBDct3u3t3jVYanHDPHNXzxyHxvhmy17fJe6QZ4kWiqcQysz7LL3fvCStc8MinYMJLytS",
  "key30": "4w9Sd9NaUEpy7xT5GD2e6rgFSNZMx3NnPw2WLhQQK7XyQ55aSSLNuuQWxSB4GU2to67Z8Qn3HXZBJ7K3SQ6wiKwV",
  "key31": "gZucLQyhzbAWCyzofWgUz8YGqsuNoZRQzX2kGfVBgb9YRf9hqrnZdaJHo1Erugmonn2c9BbLPZtVtbobxthnCck",
  "key32": "LdifS2c8ZTWhU7ucJtGrHrCYqkCcW3vhQxmpxZUbS1LtiE9SUDwxbs9xB8qEQV6H5K5x8UHVJzQkFzS2u4P9ahU",
  "key33": "4z6EtDRk48N89C5YJkE27cA91urEgf7ETmq4Rk6GHWcvab4onnrJrghvPotp7zM5kAnQenhF2XB9jngUUpG4v1EU",
  "key34": "3W44XNACCjZAQHjPXAMY6x2nBh9WBzjmGv3uuiCFj2wuq9CTtsJADPYsEGTWX3etMcQTFyYnfYv4CNmNb4qTFP4Z",
  "key35": "ghJ2Lz9WpckpmHtGUHTDttpYGw1ykWNUtRdhw3mSMhhkNRNkHC2gfKy1PHqjUVqGoTf9yPTMtCbVGbQCPLiM3TN",
  "key36": "47hDYmfcVNS6EJnTqN9yBxn26paFk8ynV9zns417uoZoHDa5D143EQtVAceSBhttszk84ik7PAwfGmt5S8QcbfX7",
  "key37": "jiB9ECTijHjkht3v8iXKRqbkL7RZRvRaE92dnGHWFcuGj19VDnjWbWpP2CAhEGypCWcVhud26KGCDJhJmF9Nqee",
  "key38": "48KGQ3DKNnZ8ZZAcf34ay4jBvmtYPLasiaHuJWXnepDRtFryqvApeLsdxp1HtPGDntzxMD99QqGKDYsJQi65uGVY",
  "key39": "5mPWE34mbA2oJ2jdRfDGpwUA31qmKFVjsYgKkAEGheVVLieUAbYRGf9qYaKhJcPLekApJaKDpeJT799TbT9Q3yqy",
  "key40": "4Mxa4es38azTVRyemxqntnyMfkX1oDpumCDGC2s3SjPufNFkJXbmi5FGRpNkANeD98UhayKjRVaw5iwYCTxueS5Z",
  "key41": "3KcyeCHbYHixjHQTVSALCf99aUeKqHoD5jzC5FZ6PAhVm5WrNeStrQ9HLB6fEbraQCqa9xFnUq1gSZeZzDzPttJz",
  "key42": "2MKMkZVSjf8Y2oCuTrjGzTTuhRrWPumDjc1g3zLRnZQRjuDW8qzJjxpW8Rj6C6eKZZuL6Ft6NQ1SAn3gFoe7mbeB",
  "key43": "LubRacgKvpbmga6FSKdKKgo1QYNhsXyVDgxTJh8g3nHdWH4r5JE5zELJvQPto17Ra5tJDx4ajCLdM13HENQzkV3",
  "key44": "GjL8dYRrSwP455iCScLkJyCxFSrLJQFa9pB6JdCXVqb2vDhKSPKmfZRXqs86uxxMUVx4J3YfcBZ5MMzLUVAcuSW",
  "key45": "5BD8irddtVeHuwJmeej4ts5LTU72TXHwSkv3ZRqxfrSZCBoYX3PWe9zmxwKELEkjjiTVQynou2tkJc8mUjmDh9YJ",
  "key46": "4i7WXX5oBbYHz8Ascyb6Q5QS9TktW23QGuoPKNScVsW6MF6iEoJH21b67bsrK7w2NtEkmijK8jMkn9uT8uFLBZun"
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
