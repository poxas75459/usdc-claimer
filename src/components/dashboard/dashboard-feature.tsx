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
    "5G4HFaLtFPk4nP8x5B7fQDEpi4w7B4PHWpezRA1DpLS9XjodQGrwPz9gZXt74XPHwsr3PHaMZc8yyFuiNHYEcHaJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66qFPM9xt57CiiDvmEJsXBmjPQFSAJYYtQdMkD4f95BkPBAJXZFJjuC9ckWwPSsUhgM1z68Dy6c7CLXxJr5bmHvh",
  "key1": "4dJHxBVDrievdKi7Xyq6uzFZ9ApZ337sqhCQPM4kC3dvWwW3iGncFApPb2rWEef7LLcP1skWzVp1iiKRQh3UDwHk",
  "key2": "d8zrDVYMWKqArJJQhqsYb9aryEVeDzNwaek6W5RALCdL17DWFr9cbxbXcrYBHEeyNkWyVgogEf177o8PdWDDHJE",
  "key3": "46AMzcqGvLcUYx26JYouTdQjpevntBYhwD5Uic3DZ4sffEx8jvo4WEYpqKCyoKXgKQA4h5pLgDVNhm5EMRxTpP4T",
  "key4": "4kHSsgmVYfsfNWEfsMpQETmRz3t9tUxKz8KocE16tx7smbGoN23xSSfZG37gwt6YzzHAjK4QXgTw4V6bi54Kcc6r",
  "key5": "dunmBVTG6c83WcFYA1A8PxtYqgCiut1spvYbTRnCgyxRkn8Y4d1RayoCqZW7dRbFMoMYT2ziyDhuQWzzzgpBCbW",
  "key6": "3gMFSonMonj6Sn6WPbbw6WQpejg1sQG9E5mjWWY8LspMW3zwmamd8NTuzttnMMSpivmvkrJuAsNpoLhn2exksykH",
  "key7": "zR7Jyr3CnwziEaC7zkDvgTFzYNNMqV4PJ8muMnUsdhfrKLKm82Zf5ExmUsYytspmEoMutKZdLDcJruhVppp8d7r",
  "key8": "4dNkQ9EhABACErk6jRND9hJHBK5isgBGk4fMFPdtGPFU5TquoAD4vA5cvMEnJ8XpMm357VBSNr4kZZ1Tcx3e1x47",
  "key9": "4xYHkqbVvt7zD7gJyLsQxQ6tYoj7hSbYXuSnYAHE7LzkaoQJrb4AtYgHRjFL1pL21hrLt8ubHrTik11iLo9AgN49",
  "key10": "47KuqJiHdAQNxeWRbBd9sRrckLWjRwyVLSK9Kjk5G63hXwPmWfBUFNuxgHp5DPgzpJx9jergzVFnwmwowkrzk3yX",
  "key11": "5F9bhfiUWiX5YLv9Ew9MiiETirZd6EEmHcz6LoLqG7W3rBsTK4gNV7UkeA7XYSvJNtizgQjRo8L2d7bM4xjtvmBy",
  "key12": "56GWrBtHsWoa8AgXbGMAqdoL36MZjaB85x57wPqCMVX5JEFTtKsRL271Gs4Mg3YEv7G46w3bT6LbfLQFt936X7Te",
  "key13": "5gcVyr6WtehpgecJy5htbA7HXkdaagu3iSQa54QyQL5h7nMcLgajuAkz2Qzq94oxYQHWnYLbWdSs2UpQmjbrRUGv",
  "key14": "3MhyuiZPrersHyZqn4jat6HyxDafThsAJuen7cyoKmkgh5nQEBTaM7aCRn4gdbCUHqVM4RYmyqR5ZdxhW7B5DZD",
  "key15": "DMQM5NLv9Yfoju7EbMRu3pxhwrk1xntM6bayghEC1mNmqyv2XvpWtNwEZ6K6NpRdD2eeddonWLWiJDwWejCrqyY",
  "key16": "ysy9XFfCe6RFAHqskKfDKdpLmkXoHoFZ3PJGKaMoSy8qgg2THLSttVpgo1rZ7AhdYr6m2NNMsL6S2k76TUY7U3c",
  "key17": "shsHzRCtqy7QeDx3zjfydETLxD7dcDhT5hKQhPrXzt4Hdr2ctpUJ6wzAWUuxArkinKQ935ykeyDXKTYryzmUBkV",
  "key18": "3MhK9G7KCmc2vVSSA59J3ADexdfgKCuVGYNWRXfe9WrSJ9Q7PATiqnjgHqdrWEdLVHZe93hCPH2k92EWqecAvP5g",
  "key19": "2PryN5MFWbwep5CHLVu84UdyfP3CXtatjtaFkd3srDKhmHL1qzNG9vNCfev9qZZquNKd4FTgSudiMQHARoyfTePu",
  "key20": "3GXELvQwJSp1JVmyv5REAxtYuVDB8w1G6soKMDyP6mPb1FP6kJTKmrvWJaj2wzz1e8EFEVu2n5ypn4DcDbvAoE5p",
  "key21": "4x9uDqoN8X1cZeCPQAbgjMgbxyrG4xW7e2ScrLeFpuLj2Gf5hb9aNQ2LsDxZrPaQp3wkF8vb5YrHdQkHZazfGdu4",
  "key22": "sX1aBtRKuYiPtPQQojUaUvis3vsYGMjP1pmh1W5qKbC662xL2ZshNnmPh9FcQWMKpvNw2Q7Vv1Yp1Kcb1ESQAaS",
  "key23": "3Ccn6SDpUNDHUQuVZmQdxpXcS5grh4F7Hht73mhAgwvFgXzGubeF718ywMMEBwaWAimV7xQxNT5jNa5fPV1N9ToM",
  "key24": "39mBrFAtbSrPmgk4LisvWu2QhVCPs4FRBziJBt7knGnZFBDQPeu7MNhnTigrW14GSAcB47UAPehSemB8UeKvfxte",
  "key25": "4D4rbYcdcWhct8HmdBL3Yj3SNXJUrbDNXikC4dSYaLn5poApnQ18VNKjACN4sR72RKjPgFNWWYvvkzVgJbJg8bMg",
  "key26": "2pnpNrkWariyDX7yKBBXqGmP1c2b2Ui8DNP5vKCDYTPu5w4fLeGJXV8TotY6zqCDaSufKuyS3bH1z5464MSHoAae",
  "key27": "3LkCQq9oHbFcBBMELbXkATNYENMHm9qDkrq6p4adVy5bVask7iqAAJ4zrYD4BF2TYLw3PRGRVQAYovrVa1NZqHza",
  "key28": "5xnDwimgmHfqnWwhnrAMUD36J9QVXRCpcRndNvbp6nQWgZaiNDJ7GK2sdEmAWTA2Fgsd3Bvya3WDmWMj7p8A3Lxr",
  "key29": "5DkHEWPiBXnUV2Ps9Qhgk1CWc3zaaQwHDcipJhdBEp9RrumTBoPRnEgfPBjuNYP41JMVfXxSo7Dptj7ma7xegJXa",
  "key30": "2FcBecSuH1diqgxT6AZxJBPe8XnA5R1JuC4iVdpmg6hFkhMYKqWuemx2iz7zuDNsxDvtqnWLXfJfyi1QZsDMrVjA",
  "key31": "3bgeDR7XzuGcHAfpqXanZnbRJuqTzh4X7UBezmoLwUQDpNswSgBrGvsqYdWw1Xc9dR8CVGFcVz8onEr976g5oKfN",
  "key32": "3rhVt7SQ4GPur8GvM5r3gN5SEdfV2DsJ59pg3rAy6qB4Ppg92iuzxpQ1hDtbKLY7MuqGxdZ18uoHnPnWXnX6hEk9",
  "key33": "4KYozhT9aye1ogX8h1fE7QLMGHBkgeRexQwjLaA3AXBN4pu4Xjxs4nbuprkv8Eupfsu65TpJJdDuEWTQeJhmcbLe",
  "key34": "2unBjETq8HyYVDYCVdiMu9bjnvtvbg5pcRfQ3gGJcJ6qRXtn6wN5nWJUnt1GKDqbCnyhsA1xxszca53zpMGp8FJS",
  "key35": "4LsLN2nbuwziUpD2KPcrGQztWbh3XSLFvrXVBCyMWwXZRPNVQNqPUU6zesTJktD4uSLMgCsk7D4haWTSc1H23mC4",
  "key36": "4nDQqEqtym9rGoG2kNLfiLgmoTMo7NT3bMb8v1gF5FcdNUK3w6vQ4PSQb3s41nC2R8Cw7rdkqk29Lw1ms3Tp977b",
  "key37": "4a9eWkjC1pVVVBM6pyjxwFQ7NHGzHshs1huVFwA8b75zrq6cET4ScPSA3SVymgJdeTSpmrpC8jLsSwkxGJKzMFd",
  "key38": "2hgTq6jsJP6dBKnXpmhBtdrJsSpgVTKYpzqFKwjoCuf9sUMeaCdqWbz6Bn3bGD13fxnTJD6xLhHVE8ftXk7dW2L8",
  "key39": "2zkXC338nob9xQVYUf8QWmrmYHCySjrqCs9EXceiAXmjzGYwph9m1xp72mvpKoSBpKmj7tu6VBS7NdqKAbMATpeM",
  "key40": "2VGJz5n211LCHNbj5ggSSnDc1N7afTDgvBA3Aejh5TofvoXvDkRmgpmSj3votyPcGuxLxYnZNhwUj2YxAPdz4QQj"
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
