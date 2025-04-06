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
    "ZrC6iwU8tUV7aHxP49AHi9ormUzUtph5cdzxzbMrdPyGEAu7ceopyDyUU7TGPH21187M26jnGqN26vJAhhaG2di"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "aAQWQsTEayV8pcE4Q9Sns7mNN1y3QHrYx32jQFVVm4NVpYmjgScxn6wMoAAXuvj7g1zML7Q81CqF5beZaVA4XA3",
  "key1": "P6Yofs4rP55v5Pcc8duiCmqyW9hycvoxWHYMBEuxoejE8q9yPWovEHJK9vQRUuXZ85jotvJAETHGSs7Ga6SP6AA",
  "key2": "2RYb39KEfJB31UGxVZFJzLw1bReWv8r9ciH1DwP91xYLVycnNHj36nYXSvENUtLZ7eFgoV67HVZHYEVisn6EvXko",
  "key3": "2y9tGmtVpWXvagkfT1d7a7ro4UPo2dqRpuno2b5ZKYGpRyPuCfDN6Uho7NjVbMZWgNvYiCRAZdgbZX8FVh8hb8Hc",
  "key4": "5pXG33jWSosjFVY6kPctrdi2yooBDa5pSuod2AcZrJyFVPg42XAfxPggk9WYDVPJMnEiZ9xA2kmYxnTLLKETRT8C",
  "key5": "5VGCUSjHgwGomMnL47NrYeYMj671Km9n2F1T2tS23HzgZBgHzJaMAJkqdCMqczg9tktQxHoGm5MpbTDop5JqcbQ9",
  "key6": "5nSTyYHkxKCwnJGRvL1fVdwNw7YsdFZUeyr4juh34Z1E5DdbNuSnxneezVENF2N3WoxVAEY2w9p61bhXiQcm7QnG",
  "key7": "62Ka8D2oXUeXQkniwt5Vst5K2eMo9Qf9j5xAesDoYEmm7ywE22ytdaTTEXPcVWwE7P8T6APmFGunzAeEqTomib4J",
  "key8": "4A1xUE4HKYtFa9L615jUa3qAFMWQ4GLrysquFLssskNvGSvknxdAKj8GBkgy1smeWEZPiLnBkDtQoeRHwzgGfv2c",
  "key9": "2GC3YBzgPpbM12iy3Fh8tHijjmdebN3T5XbbtMrTkM5eiyStoGWdPc2vu9E3zht9TZ7Zx7LsEA2GAd9FGKcKCLy",
  "key10": "3vVB8RuhfCCKRDy3upQRfx41knjKqor9b9KyphqoZgvC3hMXd2XvozN6LQCfFAWWfbr9aaxfCPvAiYGA8yRBy8PG",
  "key11": "2jDPH4aYhp8jNAUpENn2vxUMKC7EAUQa7aw1gc79gQEdhfNs9iN6RCRKM8m4uRVCeMsTzNRySrWagjgcVWCUx9iR",
  "key12": "3arMRCFvsV1YoMBLtz6S3qeavd9Z7G2dsJC43aMqksZDVnSTA4YUtKmMnupbPB1qeKaC2D2gT7jR9JPS4MQEtai",
  "key13": "3pRN47cpESsF7LZKRZMEgauo9Nnc44kJmGBoZbpE3DDxVg2vMgF9AneUKFRrRv8jZujd26DVTFbp2kvwvjBJxpgp",
  "key14": "535qbTuuwuuZCzVaeE3T5Q5FBQfWRqQA73Q8EAMPwg6zogvv2pYQnfZSMw55nqD3s8NUhyLZK1qmwDVGwWpygtDa",
  "key15": "2Jrc42woRcyCBawKu7jddqyaafpxko7UBrps65SwW14QxLwfr6W8MPU5gnesg7KYes6SekrZdRza9AY3KQdEkmAP",
  "key16": "uczwjFbRnATENxvJ9ii54fA8pirRVan2pQ2EgQEqtsKe1MH2yhTtzudUejQU84trY87vKxqTkCsqC2VB7wEs96s",
  "key17": "Rkcwz2ABy5UP9sysmWEDvrAXcajtighksAEWbaVkwpp26gMEYSFzGKcWJqTega1H6GM4gLpPS8aJQPrQuXQLUd6",
  "key18": "4GeViTkuvW8JQfbzjZLEohLVdconod7BbnrgycxuhHfZJb8XmakTBH79svQ4E1pwRZo9rDziTpoHzuTNgECkJDD2",
  "key19": "495HacDimvCz5pgiGjZDo1KSdwfgreaBiBG3CjRo2WQGy94JZdPN7t2BmVRyohffPDNRgCy6gGeVxhXqreBjHzD7",
  "key20": "5MweAQEKHTNMkA72ayJ3wfBTLUBDR3e1fzvVT4psKsoufTsoZRJ1NaRWwgCNed3YY8unXtJCsYh2fe9gPgRANpcZ",
  "key21": "2Bddo8gBhVKgvNs8P4U1ajkyvdva28n4Z3v9BLQ3NKKz5BgEP34rXMb8dZdWNPGjYFez94fhmGTKPDaTCk5rxF1",
  "key22": "FLpnApBDD9tx4pECd4KWGrr6QhBkk9yR9GaQFpPAvXgAmPUZJMNru6qCs9cPdG9Lm4ccbLs1auBLNRUn6ywD3cL",
  "key23": "3nzPonQLrstxEoCMEfjwFbfM6UM68ryJoN9nDznZfkAHs57aPvg4ayEXiKHo4LHgJbGGZZUYSepa4SKQyLhMQW3R",
  "key24": "5wzWYxpPexuioPqUsqZrhr3zPNPMW1jwQxN6BfvhMB1UeyiNY9GXNbj8v2en8A6fGzusX1G8eCsVNyNn43eHbrqo",
  "key25": "eJ17NLcQSJ4gU8A9UUaeJabPi9Jdfe9bYPpYiAh9KyGPk3QXya82MGcStdQmtViwaQCxXG8oYmRfPhtkRk1Boq3",
  "key26": "4yErbw1CtVDPuhoJviPeaNfe4WfJBEX7qRzcoSYw3GFTHmMReRDh77mUt1dYRog9ptdciQsHiL7NBNKfgo86UyFk",
  "key27": "625bmyb7SeappnfZXTpT5gm1aTe2HJHRSVbsV7hhnPdGSr3GXj3U9J9i7dM67c51EXWcjHL8r3dWd6hUXTj4DcX2",
  "key28": "2kDCyjcUZnAksq9JjU42U3JzR6Mheq8mJEYcb374ZZTGrxARwZLKBNbBN6k7aP9SrG4d6jgvj4NTB4cwofzfUjB2",
  "key29": "LAyCdRXn6YmDc8L39VVQm9S5ihv5WiVaxZW8Tgyu1oZeZ7FDmFpUwyiiTuCD2ndzPUhUS2cjUsQSCn4cRaHr3LD",
  "key30": "3rDBVVrYJEg7zS6GMRbFSk3oHJdEpSNEcL68HKbr4XxgKJZFvx8DMRF7wdwaVK2upaAy9xmndtBFNa3p1PZhBCPo",
  "key31": "teHnCeqANP2NPBKMCRvWsMzYeDs9e8TZeXdAvQLPtUirvsPJLSfE3iGaFwVu9prE4Pi19B7XdtLdbfd7a5abZJ1",
  "key32": "4AGCNiVpZTmL5HuiMGQHb3JSeBjZFbH9tPqppivAWbrpkHHTUniEjJKUQ6SWmsnUyGt2bBzNvofiCtoSEZ2rsGzF",
  "key33": "4uHY92KoVHFFHQaY8fSUHEHo752CSw71nKCUe5NMqQeLrAJ4xpD3rvDeqKNsSFty7DPtnhEBMC2zZviPYVXJh4ET",
  "key34": "QRT57aJYJ24dmRmv1Txu6ojBqjy8W7r8X96RtEMBsj3CzBTivZgaQ1W7wkbZXAEetdUCB5zp3Sh39T9y247regz",
  "key35": "4EHbpLUVN9tMPymurh3MR7Cpa8Mx7dCzQ9cmtiJjkSyxaGq9LjDTnKLfKd3nJnoGQTSW1gRYA83fZvQPeCTpYH9a",
  "key36": "5TneffCLNGxx6xk2cDbbgiGechNWQyaUu65zxU6qAkhu9jyvaUbchvjT5RT421o8gDzu8jjiCpAsuPEEuehT7XJi",
  "key37": "59dHT6St9pA7BXq2AamogsjJ9RdToLVEK6nfaYAsxuU5bmm7H7Nw7EEnGHnpHZKz57TejZf24iBRMuuZZBY21JpW",
  "key38": "5wpBWWHH1KB76SrN1ej1tzThNd3ocTWLaoenNxDQVFVwdaYMkYf3Q31a2s7pu8VMWgSkYvdSUj5HMCFATS692XPy",
  "key39": "3wiXExiiGk8TG84bMXtkAtyCyufcTULjU8oftqHwXmNgThJLt4QdHUT5zDtDENkdiC9dCUgMQdrP71Sv1DXSNYsB",
  "key40": "tPyp62JjifHYs5UeQ6df8gAbS7Tr7VoZSREFpK4A6X13VLhGFcVbzYmKWzXnSvSQCLwt94nm5wMGdSDAsPHo4yd",
  "key41": "53hXEZjNa5vz1QfuQBC2RrxfpMRMR4MQUsLiYoRpZLT9QKhi6YxTjEnTHitkkFUd1vVKkiJP9y7eXQ2Uwbumc4Qn",
  "key42": "2iQke2JtmLBtXDhGGn1pNoshU6Fojn277XzqdLEAdMfTMANssKHpqLZMCkVQN9GxJ8CrjsAz5BN7sSRMqwUrgTvG",
  "key43": "5N5FHGYMXiZrVM5qgRqppneRzkCPbwqJPLWh7RAG7HVbs2Gm7tbsMhnLRHQXtHWE8UDbm2psJFLT8LVDkBHUq3Wy"
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
