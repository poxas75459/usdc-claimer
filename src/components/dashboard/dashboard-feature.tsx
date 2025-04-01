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
    "3jt9oP3FSj4faEiNgECyzKcEDBxFT5Z6k5WpUqxMszyfu81UYWQGWfEuXSbZNLqE79r2xJUaxX1PhYbhFG1mEjfQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1zG7UjFPaGM6ZXPeR1D1xCvKuzNL2NaPDD5Q2ADRnMUfekf2n5bYQZL82hqthywHB6gyKJ8NqbzCqhUXh8Zf9ss",
  "key1": "4UusTAt1BJsGWPASGQRxDRa8rqBMaHoYXKPBVPbYhscRUq8h9481t4DS52cjHpChzoEvqzqVsnBRjb5npuoXjUZ",
  "key2": "5ZndPrs4nWPJAKwk157eRJghGVWF9xFghRTaVaw1odhJTAyH5nBBgV2dj5wvH8JWJcGcFM9FngCBgQFFz4kDvrvr",
  "key3": "4Q8VvRoa7M2H9KpUanCXktBWrjjF59wp8ud6QNQtooiQD4ggTJ9DEQaJRm9t4RHEh95qwXEDoJ9W9u59j7jU1pxw",
  "key4": "3amLYyCZktKiiynGsrXfeEtwVyTkr48ofDFRvFkC4dCv7ZqaL5dTNoKDtYyhzHV3sznFC1T7gR8yqVFTsmfaBrr4",
  "key5": "2VowtspFXAoQrPZRP1vh29pwbqGFNr9ux6VCEuxa7XDdD6xUZEjnGCxoxCYJATcMiFCEBrbj3UaPBQmum295MU4Y",
  "key6": "4EWowx5vjrsefFFDHqcfQ2rgrQWb3QxBnS6NJZrrc8jvi4fdDM375VpS8TtRc3k9MxLANuvHER5bfhHcn9Yrq3A5",
  "key7": "2sbHwfs9WC8aM4TpEjX4F4K6g1uFzCpdN1njf7XESj8U69Rnrgu98zrpDTEMQuf9JJm8Ddr9k85gywUnMg4dfZPJ",
  "key8": "TnWiuiaBRt7L1yszmNstwgog6rCwCfJ5dimFcuYUqqL1GqgGUWF9NvJdmRjZZoxKvj6tbpSb1tJdaibXD5N6U3X",
  "key9": "5d24V4JUp9iLduVgFVn6tdwak5iUr2RLpqkSEiK3sJQ9v3Du4MEpwsftmkkq6diZQEjyqLb4VgQWCcWimFGT7BvD",
  "key10": "5twgqRxAnbTqi85aDRy3dyrxFExsnM9J5k9WRQyzLMT8Fo4bhVoMcQGfi2KS9fsXFp7wtJTdrRMy6yt11V8aJwF1",
  "key11": "49R48xvUqGQcmCLM6jk1NDXoTJfWyrrpmGuZBcJGfFxwztWSR392MaYbuComaab7XZHNBucGSUM6oBme2KxDvYKN",
  "key12": "2euiz6yKRtSoseGGLQUbSP5xXgo2rRcV33CJG4TNHibP4Tb2kkB9wHeWVdBYG12GP4J5M73KT6h2TTE9gf5JfKkq",
  "key13": "2GuKv3t4SYys5x6A99avrUcY98ZYECuvRsMTtx6GzhbwWwVEXUQctH8g4Y1cy7R1FBx9ZPB85GH6Arn5Eu2yrqC2",
  "key14": "5mYzJW28Tpnz1Jrrr33HfVeywubZKLM8vk618WRsRUiUwJGjmL3bH6k7nEuQoVB1uc3NWhqRiQvVpAL1eAy37ZC8",
  "key15": "3TFkpasiwRid7QL8y5z61FZkJSjADtYz34UVNntC9cmichrwhXfxBig68JLdZ8pJ9f8oH6f7YG4LGPaMAEQr8oXH",
  "key16": "3z6Hzf97apCdNJbytKuSqAN75xESPqfZJHF1GEgoG2zHxup4PSdxCWJ6YHnSXiJrwwzo5x21dtss1mDNnd533MHA",
  "key17": "5bQvd8tmdBoHBzXXEMMuarscASvq4FPREAipKD4YcHFQu1DhMtXkEXs4RZFbGZwdJajvdmEhj4fqnAV7wz5FExUZ",
  "key18": "3tSXLxfKoG1fVvFHRmVwCtm1JugRoB5BUt465xdejS5iLf4F9Vgvpo8kfmYSp4XVu3YuZixrWkGRcMrvpRjhidBT",
  "key19": "4vztGFYx8Y1s3d8dBznPv6omViDMfZtwEs3iNniYr6ocCVpWXgcc7qve7T9Bc5qfZADa9Q94cwH5Wdd7G9fPiGVd",
  "key20": "55Lqz5TPYxtuJLTRHLRP9CzBwsLbjekhB8FnyF7vDK2kPYhx15oBCMgh39mRiwJ1orSBEcCHuMaHguK9zh9BAanM",
  "key21": "3XHktCtfEBr1snaDkpEFbsQ12xNsCJeDtW7A4RpqSWSqqRPNSwzgAHEGq2d9zxWe63vZHz1h4jqg7FULsKyEcJn1",
  "key22": "2kqWSTuUnF2zdEoQV6JPUzY9CbwPEEAFGjEBVSyikVHSj6zrFSqzdJ1JbfxTwQpExc9MBdy6X8JfgS2LZqvrkN4r",
  "key23": "2Sge7EQZKTNSAT3bzNPiAxgxADBqQSLJ1dsBQ1EKHg7hmbryiYaUefddWE8ooL8JnFwwYYbPvvf4RihDuDeLPe7r",
  "key24": "3EwmQ4qtJisHHttRjwWfnrkHQurAvdxYT8EiMkE89t3WuAze8ULGqp5u37sg5TnGRwtFReuKFER3fmqQ6ZSyebYu",
  "key25": "2PZreP5anddXbCQqCTLpjjKXoiSaML8u1b6tiSMMXfVs9kMt1seFTouYeLfFJdeB12yNFXdCEsT9FGRWSffv21ER",
  "key26": "4dwE5785oGhS9NQL5yP1ZjXep4NVCz7Jgq6MuBbsYkHapPmUGvi18SeJsu4C2yyvwRZ4rwiEFngzBJuwPexXMy5G",
  "key27": "4dsRSSdFwcVy8W3NPJkwTLwkG6wFMSJKjYrXMHhDBzfvf2vYvcVS4qNzsvw3QbR7SWpxoGytyH22GbRxxTW8ADXK",
  "key28": "5nsmkyjKhUcT2AATvWH4WDpD2EocKF1vtevBnogbWzDGcTnj353xT42B2veNnWZx5xAdWFeEyKs3Ykkhr25iR8kG",
  "key29": "2GCp21Dy88daC9s9yLQsj6USp7sTEb37kCKnVyFWTVeVpnxzGmuEupsSmVFB7Rikm3h4qHXyeTEuPJDdBcrs1usR",
  "key30": "5Vjr9kUnyJLQuCFqQLrDEZCjbCzYPXBBVpYLc6UFv5S292gCNrmAq7cHXo4XQUnCS1sNJYLF44dCt7t2RxoVSmAx",
  "key31": "2W4xzWg7uMWAsrqd9ipCebnPvkPRzS9c55drnkAqVrC1ey3DcEGc7mpPHbRFzofoe48MyMqx4fERRShjzaVstWBM",
  "key32": "3hYWvbHYLZksraGvyQ2FibefBrUgfSrShxU16px44smMLGmVfksC1vQT9oHQScrthnYbRwyGWJE372iEQPri6zyU",
  "key33": "54yxErdFYzX7NaFAtTZBACbUYmuwW8BfaSodJGHkwN6RpsRAynpqm26aRmszZeUNsYj3vz9EqVG4u3ijhbYF3Hdr",
  "key34": "yeH9Aae2H1w8Gbk2q9KvAKRYM6EqAKzotExXWwkCBUjcmfLXHJmPPBEnwgNrZZxtj7WuekEXbKBRfTS8cEXRTaN",
  "key35": "5XRX49hEv2UvuB7Ew7esyoHU7CqDHU2wXDfjdwU2qtDvop2BRt1aUfB2f9hD1wCRsBn1nfYNhVkUkwiEuJCM3Pbx"
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
