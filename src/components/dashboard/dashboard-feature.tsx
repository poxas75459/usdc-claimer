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
    "5dqgmpD1z5XaKdMvwEK6VMiYYq3Rq4fW6LH4uRhADECaCweNVM9sx5MTHRVgdiLrKHohtqCjQNkdUdrMre1kNPrL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "34cVU6kwsnXaeNUZBbHfmBZ36PNJdczxPbHPYZPEN1sgRhKTdBBuKLAHwVoFu41q2MP9MovmzAUojnFfnPPc2ia8",
  "key1": "2Jo1HZZPfc91gCPXntC56v3MjqsPRXtUWDWo8fC7MNXq2YR4RahRsUjM1irWpJk86fqTrq4GD94pfMvbrDzAvMJK",
  "key2": "5G4TsERKJ8DS8B4LcSefrB31AmCY5epAVLPV8MiEHp4mngvMRJS2f6ZqdJAaQXf2GGbZJF5DeVF1NrtSW7kCho8c",
  "key3": "EQU81F2v85qgKcU685brUB3EtkSSaPhh5mtjCJwc7RfF8riJLZ62o1uxdQ7aAq7YsofWN4MiWNBFroxom9UmJpq",
  "key4": "weAyQLT4eCqdsgZnfWWPZvqTrV1ppKJnU8zNqGcFGDaiFqEb7UYbsk4UfzUKTSGj7hxgMcj4ERjiiuVxn4C5PWm",
  "key5": "5qQEvnB237KnrdQAT5uCTdUKSpBWyVgXwEesz9bj9AFDxMeWr3hpWowsDC1qRUbq9kiV24GcfB9kthm6iscG1qLP",
  "key6": "26Asxz35nUosntRCq6PNkPcXKY7Qd7wRDXc31EFoj2sACTt2utYJKdR1Feec59zLmWm2oHUCVJaBb2QCoNGqwtH2",
  "key7": "5XtAmoLAzubL1xT9yfJqCYp4KxRsF9WQKVwR1BgVhpuF1UXdV52LsswTGRoFDkMtoQXNUky71fR2DYovyt3WH1Xr",
  "key8": "54EYEvVCppAegVtGM6BnsPE1SAf4iMBeyTTDacb4RZ8VQHpzwghk6ReHBBXCixqZHvPaBDBeRXkoyWHBV3cqbRvV",
  "key9": "tTAgFYee9mGEB6VTCKCPE2N6dKdf5pr4kf9A8zJYNawdWeNP1JPt67oiybv3RHSsKeZCFu3TRp45xM3NKz9HaMW",
  "key10": "k35fvTSqCNyNvU1p4nFutTbZPMDS5fZuF1tU6oN2bkX532p7o5xKT3jBkmMwg4PKnvQt9Cwsmx6ns4qVLfJsvWm",
  "key11": "4Aphe1V3fsmezmskwn5LTr6pTT6VYeJqu4DfNF4FvYDRAst7Fa6SVeYPVTakEh1pepdH6ryQNAsCG1JmehMJwssZ",
  "key12": "3qEYF7VZcHguSfUNnABbBZeuugqTd1WRRd9uwJTwtvFd5fWsMcRjdeJ3wwfZpDevr6peJBpTw5hmQk1VLRUhos6u",
  "key13": "3fuvEsv7yfhfxr7XaptK2YTtCHPYLjwGHkFq5WKgd3f8q8gsP3qFZ7pVkVqshkCpZLPQ8a1kzuwRLrXwob1nLi7G",
  "key14": "2nBSVmmSkZ2vDLMJKo3jALbGXYYUgEXvU8yQqGK8rdTHZBEHJcVBSp7jxbGuMZrFEfoorHzANdfzwXprf62ukvT5",
  "key15": "3i9LnQG8q5Qbcym1k9ZbzmCAn6C462FxEaAKpySjjSjuzn2GVGwgxzddDS5nLgspXReWHCSSz6eHX5fZTMT24zgd",
  "key16": "UfbSmiTDbmU9HC1je9Vh7TkDcKmUYmvgXohtANjEKdUQf185ECgp6ciCwQrbSQUsWx8FmsN2thc1C9SNC2f8ogw",
  "key17": "4QE4vjgUxKyLBBgHPVnLgXxD1Ev6mp9EcWkaLrU6sKuhRsmz8mqbGJewSUk4KTyZP727NgwZynL7B634cKMzw5D9",
  "key18": "4tQiV4xtC9Aw7U81m7uEzsmLYgjbeAovX3ReJdKM5KcXTjmg8aN7Pj2U9zihUPKFPT2XKds5ZRUATNVqAt5Wadoe",
  "key19": "5deEC7HbsJTDabFBpgyK9oh3rjCCRNiBWAEwAJmSAAN9PD1ZR4JDKUQC12SUd5pLB8WwpAv9GmKH71GV4SZapu63",
  "key20": "3EvATcR9Pw11SxeqMZHxtW6Gi5AtQcGXMRPsDMrw5qSvNF2yPXpdbTqR3bmQb4hC1SifWkdc2bQTSXF2fizk1JmP",
  "key21": "2RqoBr2mRitFcJqaGTvunAQzzJWYaBsFtmfWnFLvB97sSucSiJkxCAbabQTaFJPRwEhP5Sp5nbEg6VLWXiTWSRvd",
  "key22": "3XWB3bvcKaxXKBfcsC41zfzRA88uv7cs1zbC69RBiW5XZRHhCpHf1g8m2UAKAhhUoZhk4QtRLdyahYYfQxB2J8jA",
  "key23": "5JzXaxSqH6QcaNMtr68u954VRf1xwQRVpfvq9qDeSLMDgioXX9PXLPTanzEKpP7w21ffYP8WUuwCY6zoTSwWXJda",
  "key24": "5b6ssgM2wKjmaz1cVSvEFLNb3ndzaRNdbYaG2a7z75DiWH8m4Gg7t8mZZH53MwSenfuy2hwktdhpzVeTavB6eir9",
  "key25": "3WEJdcJutTpzZZshk5SKcNsqPJKXWSdtDZF47rfsdac13un8csTUGDnRMKF4YtZUchkERYKwsr84LG3jEQZp2Ubs",
  "key26": "5wKBapsnuW8y6fAGmwPfkFFgrTjsNGGNTbd484hUGbWcJnweSPQN5EC3Z7YLXY8RSRsf39UiPwz5veJniBTcuWbX",
  "key27": "3k6PwS55FJbVnD9hAmco2vZyUC89K6knP4xgcoxemNHEPD6kcrnk9vxftiRyWQsvK6Tv27bpePyaH9kn68rdJKZL",
  "key28": "5d6VtDvtLrgKmKWTSx3uNXF883mefGfHnZmXFYnPA3tvsNUKfgrxR6NunWk7jQVAYjPb2CSvFQdDnpBBW2Wm1Ekw",
  "key29": "4zr8mBcfpzuVZqTWuase6rXq2snPufFF957fnpTXm1DndnaqAodX7yQMwArW99a6Mz48qxGoavw9CjxpMuyoasMV",
  "key30": "4EVUU2aNhyAoqdfg87YTVLkEfuPbnqR21jGVkQcx9wTBY59svb5VUGH9FWfoPgDzRHDbRW3UDgMigJ5U7MfgXyPc",
  "key31": "N7Lu5fWcSBK9ga5SXDATEjDUhZCqhb96ff6mKLBaj8RzBELQs6EDENRffYhTnB2wZqCU5kp6ZVYWvb1jxGTcXAQ",
  "key32": "3GHrCo3LqwDenfDc5HHxfnNebmzv2id6kL7sAoNHncux3KdKM9MGEFvnnQyiUf4PpfQQ2FPAxEvGtudRsMG3Sb4K",
  "key33": "2AoWFQZ1E7LCmV4Rc9WnhUBCvHKZBKExKkXrcXJgVULBh39mLpy9dyGVDy8zaxTtgzNB9PctVTAp8zK2MDn7qDWB",
  "key34": "4XVPt7K9dTVsQ8addsVNKiQDDPGQS4F3oHwhhETwNBSiQRhER2U24kNVqjvmzW14xzGb5kBQ4WNgu2WrKZJpKhXP",
  "key35": "2atjLvHxASwAr3c6HnTNHAyqZkBMhPcdrK1ek2zQqL5UvfLLRYFcJwQRyucu3YuDKfrHbyCwf7qkEEwLtovMywzV",
  "key36": "47TpoLXBPdE6KewLpeJQ3AwZajk3BuVuuRVYsRrgoPC4j8udmXZXjSuz9e45fdY854qVWihRxbjPyaNP8dJDzDxz",
  "key37": "5oGpkuhy6QyYGVRbyokQytQU72SbZZe38SsxvGZm1Hg8VsDJjLnPB3pE6fPaQ9gsZr6KUccTNXsAYB2S7MEnKMnh"
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
