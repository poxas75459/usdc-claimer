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
    "2QmqnH51Kpt7HkwyGRL6oZr5LN1579M56APos3wKxeXREzAbpdPdYx7Cqo5o871Wgcy2jN1mJZvjWfN8EuELxAEm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2CtyZAUWYwKFPU1tm7dTVb7DCTZ7AtY7Xx5DCMCnviyvZNibMfWXrx4E9XYjh2F4iVb1M2tuQTfYYrfZ8pSG4LDR",
  "key1": "24xnBW8FKYwb4vR1zX3uLjadWVbgJvM6kQZC1kC97z2PZPhdDYTjWkGHYQHvPBTHWgfbN2VBPTveUKKU5X3XzfRa",
  "key2": "4MVXnbNbA87XMaYcusNw2i3vGUHuwGarDsRpxt1Jzv9YpjjuZgFrbxykCDwBsd6K6HnZvRyBXSFY2nxBnMgi8qwe",
  "key3": "4m83iXJc3R9u4yiAfdgcVhdtishSzAsHYpd745HrUz6FVfx6MgL8EuiYpAbD4iQPBbMrZJptozZBGHScwrgzndW6",
  "key4": "38aVhSU8JCBQASKZti9mdGgGGVeijZpi6Pycew2akiL72W5qU8ESa9QRrxMmu6xNajVBCkFzr2nLsMU4XGheKmWE",
  "key5": "xajxgvWcCFEuFXtH6NDqdX5oDDtwJvghQcZzdRU2LngAzjLuXrQiM7m9uKdrF1R3Ecre8gRD8joX9R7FbeLjxMg",
  "key6": "5k9AuLB4tYye376ZwLbuLAaUwVs32Lj26XVQEjLazE6X7DL7cnxDVz6Ym7kLHDz7ggZZGeVgK5zuKXbignbRgnex",
  "key7": "3uiYna8Lk5Kub5DZgn5NNDgJo6FhVx2jJkEjhgPcVTfaxFdr7mYoZTkDtNp4MznUdisr1fLBUjQpftcjEAmoNR4T",
  "key8": "2bSvzDm16QSDEN5B4tugUmRkk6h118qRJYL8gk8No2KjfFsGjS5ENZbQooiLNarduq4wZfUn8N1RSqSdLMsBmhM8",
  "key9": "5mpSBbnti5aK9ZQBPpYAAhQ5WcDrcvJZdLqwjZvy3c6PmFbNznUQ7iC5GYHpWPwxSXod6J4GEyB31cQCVDoobVnr",
  "key10": "3j68aFD1kxFZin4MzEa8kXpiDykhm8AGC6iUByGadXcvvk3dc8CjndDNWdhLfYpFQa1KesbpHEEJzbsytGeyjxN1",
  "key11": "3cc1gHPqiQt4EgYe4YN1k6B19tYup7rzUT3ka68GFQ6zCYsoGot4FFzjYHHaacJCZ92GbW1Tn4sAurs7eQjowWyC",
  "key12": "2PcDH94KS6TebBafkT9UPGJoesfCqJQaq2fuH6TqxzHeSeTuRARyBzeikK53RxzUVvt6VFtwKwkS1dm1VqLYSPnz",
  "key13": "5DgFdXhwzQLEEgZzr58xHy19ttxATQTFfJZ9jrkbRHLLB27pA92Bg7t3geZRx1NEu7E58zZhENUXod7wBQMMAQbM",
  "key14": "3noJvHk7PRDpafceGt3MDAzv6WxaXmovHrEKmPTNttNiFT6CyAKw6vJq2iBQKSL1RYivNtF2eFKKERLe2D6VKRvd",
  "key15": "3sD15ApqSHcuD8adkWuxpvGWmiNfTRMAAmkyXxApPHpwqbyfxN3gXshYnhrVki2wn1g8jaF6CiRhgC9LKFAqpdWQ",
  "key16": "2utMAfAY5CK5FJWeHUgBS7uedo34qGpGBqHwGhRTmGA7GjuRsGvH6JnMqgcbugoUWaV12yTsddrG9wd1btJyKwAN",
  "key17": "3Z34gsZb8gYGmpcoappmroxMKFno4nJFMdyE6n4tJSbmtx8byDckCBuenZH5VRymh37QwVYPaYWt9WT2roQTpAWF",
  "key18": "CjiPW3BmPRCkeBXTGbAPuf4YA5kSoxivD5fEJEqnM8e9QXgJKPERPai5eEhoE2msDghjrT2dvEbfG37E7ynhxuX",
  "key19": "4cGtktemeeGaSUtuN4BztXb3oK4Du4mt23gf2umP8kNVab4iH5DhyXu8JcybwTGC9C5YV6kJVHMigaBghTDYoNyZ",
  "key20": "4Jq2kSCVbi6ywTwyKnCKiXHkEuZWztE16aLh7US31TuF1Yb7zL1uNwLpi5EUbXac1WCUwhv2pdAgvTrR2myMJxWF",
  "key21": "3iVS6tho3aVce9e4PrnXmWxjF7oPhNyZEqCWmgr25LzURebESiQWMM4pmiCxiYz814QD9p592SN9SsuLFtuNeCvA",
  "key22": "4YmCdVUUray5pL1k7UmoWfKXvxy1RG7QccqoE9PakyiByUYZaguNrhqSobyFtnHKHHE4EHRi1uRYxf55bgzYGs7y",
  "key23": "31aJHxANgE5UCegGkrrbKKkwhF1wC3EPDQvoR4oxx2JNanUXY924DPNPjCqNZ3bYzUxxCHjjZrCDDNdjVz4vpEyn",
  "key24": "2kSZTDMzQAVzc4vvkwhw3yH6QqgY53EboxZG1PDroLLmAkzwfbd3cXBTEe8ekYtJM8hpvNaZUXF4LM1rRyzy9hgW",
  "key25": "3ftrSQAVVkrUMgWfdcuhjqSDgguBBjVWxqGVq6AtiJ8v58bZU5fmq3XXeMZZU6puevnBn9p4jkJMR44pzVLwjcAi",
  "key26": "3LegEQgCEfe88bLMT2ozWuD9skfX71BLzEXnrM4m9RJrwrqh9EW5CHhQTRj4NTyqq2sAnSjpZ4LYVJrrPvt7iWpF",
  "key27": "3eEuPw9NxVWAkdjHe65uWXzHapGb6LKAZtMBQyPnxdgvGoYXY6mnbfG5Zc7N73vdCvwtc6PowAxXfo1c4dVWtkwo",
  "key28": "4vZ5HxAhkPU3impRQKm1SrL2Lu8dfkq5Mzayxy6NvYdpiKzfkbiztDJQ2YtMJL6PmJZ6Esj16Cxtcd3zMdFz9e5m",
  "key29": "3NPQ4eqNMLRKWZ1BZ22WoGigRa5SGwEjJFEn78BhVqZv4QsQmmnSgz5544MspW1A6sNunu9HgbTvay6JPkj3Yno3",
  "key30": "3h2AvzNNKtUqjzpBfs82BqmXRs8v7mK6xZ1eNria6aJQBcv5f6eFfcjXjMsAdyuYAWjzeiV375f9zUzkYz6zyyoN",
  "key31": "4b4nm4Veh3Lb97e7h8U6SwDD8Zh3Y28DJQvE1UEGNJGrnCN48MRvomsdoE22UkCGZSK475UfucYD6728ejJPXiEd"
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
