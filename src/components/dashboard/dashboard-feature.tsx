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
    "zoXxvspw1i53hKFmDbaxLxbYqG8D8sHS498nMYStet56vSvEwQxzJKXq7KqsgaHGPh31wYYa2Sc33M4YZECXaPW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4cGfGfM1hJC1g21Z44p4hstQg6SVfTzsAtTFzQ5rQKrC4YQw2JNig8jLzSbNN4cqabEuHXjvEMwd96csKn3N3Lty",
  "key1": "47rTtKB4xp3DnMrKfYXsu332CgafPgWHBmSUjmEKmo3MDMrwH1dd78nCCbk4kLndc3uLXojDghftdWxJQLj4yJCz",
  "key2": "nSgxov9yLQhHAWPW4R5E83SLWsinW8nUFqsTRVJPrLPKuQtTy3X6FHvy2M3Gvhgsc6uuLjyrVtxQ7nivDa4Bgt2",
  "key3": "3dqCYc5MhG1Kj7bhAoLFydzRodggfdVXcTnBPp3gufQ5aKtm5YLKj9ZSf2jGBepjcEP9h1CJ5PVTD4rqPkXTj1xa",
  "key4": "5DxeZT9dbwCPo5t2UehsHpLTZh8WXDhFaDxYwZBvbyCPsPVmAh2WfL8fDdTpYHvWBjb48CzbcsLaKxCHWLTBFSBC",
  "key5": "3JvF8SxrK1Fs17CxKbo1yhB3f2fuTiiDvaecHyqsp6jWioK8JGeTmm8xJS5ysnjS2ZfmCX4Mo7PYKoK5jMozu6F8",
  "key6": "4JMtHsTPKmUGgVfcVb5U758unyLhgviZ57NGgRveSxUFbyzz6xSYAqG9XQcFdX8hV5jatwWk6mYFk5Mpu7fYKUrn",
  "key7": "X5TS7D5JUh676WDHxWvQ45LjMQonipXnxdRiE7ASHkbDwwTjiUX1qcAhgP1BqiYvfaPUy48jS43MYWwGKXj9G1f",
  "key8": "3i5fPSJtj4yFFq2BY8FCibBrEnaXGCW4gqCBo7YKe9aME2YHo5y9GuLnuQ9ZxNmF2Y7HnspMcATwqbtxBbNKHNG4",
  "key9": "2ZFyUZwZNC15X5q2sfJkuef2RVk4eZvm2izv6qonSnxiERZqFeKQFybLtRZmGz4kwTxKdh5cmtGNBkNsihWTVcHN",
  "key10": "3CPLTHLyZ8c8wSeqc8YaixbP5puN4k8KZm1uQBx4D6kSaKVg7nz8YWBPrqs3umPoRhYGaNoeaVnK9eGz7mzdnVa8",
  "key11": "2a7YzQFXNYP4sqANaRa5urjcBUprRWBGyTUrk7vJgSBDU38HHJzNuZCawEvgvXvzpZhLUUsDbz84QtnekFaZ4gmd",
  "key12": "4cvwafBds9MSbULQ7M1h2YGnQuZQgSnEytvGKRVeMTPwNzJ1Qe9qBtfDVbEfLmLAid1ckiC6obthNv36vNPpneRX",
  "key13": "55UCgv3m2op6CbfGb9gpdsymvHMnn1bZxNewFirA5biRrkfcMhgLw6R4rTTw9vZJNDnyiH19nzaLLQ3yAg5NuapY",
  "key14": "4vZcY6XJFB7SWygFX7oTigMKMf6vyRknrmgbERF4G9zLvgcxZ9KqMNUh2FJRzHuX8qTaXqt1mwzsdrEXroS3D9LT",
  "key15": "64vVZ99WDoVSMSBRhKdCTrdZWduPY1ut7euKmphrqQt85ff192Vx3wswF5rYYUagcyvkdPqx8jcbQ6iAJ8Mpmocd",
  "key16": "3s8Knp7vK22UUYhow4MckhL82nRVAbnB6LHuK1FohuTdtLhaPsvqLsTPhZUC2gRmkbkri6cBvzrK2jThzhF3rNo",
  "key17": "rTBLbHuJKVaHFMdjzF7zcWmbxnYu1cM6jt8661kXgsbZ5gWk5CX77kdWwDqPVva7Q1UnEXLeJ37ES74XhR7NvtV",
  "key18": "3n3YWxeyphyggvzpw67qFAbQEEiphkrz1QqV9J8ZdTZfsETigPyU1iaQtSyBCEtfjdkCqX3dWF5dvK4y3LAACu35",
  "key19": "2dTc8VqYADgT1gu9GLWf9XqZJpxYhsB4zBZkGocewymPLxHwvWkjUkruPEaYqUwmf2cekdtuggHuWhRwtgvYjdZ6",
  "key20": "hRtidDbcMAbtCQ48dnhCDw4NzFYA2S17vxkogDjvz4pytpfeTtSKgQtbpYxjPDBGeThSyEwCZDpZ9fxteuvopDx",
  "key21": "2YHuFEyhsyJh8M86G9XrkGJD8g5VUXb5qm2mADedzKECYVxfZgEshD6rXwJU7647czx153RaYREX3YpRJy5yFLhE",
  "key22": "5FZhxiyhEFsV3giMFEJU9J9qnWB5RW8uL6V1iTmUwbC7YKPsTqZRRVhnSUPJhYvxBtsnhDotZPXadcKALfMnXGPA",
  "key23": "5i2ZAN1jCQYpCRnRBAz6kULQjXtKQU6uUrV1S34hhjCitRZEBKyH6MyNfNgjZMDUkFbnHU9raJkCwieBzS6BQyKV",
  "key24": "4wrRiwRXhgGMnjTXnD5fPubHDbHr3m3Hg2hwz4o1c5bq11zeHPPdu9LMJB4fL9Bvj2biakUKUji37sdBuBczyd1A",
  "key25": "LUemYrfUtHhwVFKcWBbY5bNLMZDwBBuc2WatcCeXipzpvNsJwLUiZrMVN2QeMSUbRCo8CNZAgr3YZ6knMNJzLYw",
  "key26": "2zjx3RoYpougyCHtPAtc3q4H8vM8qAk61h4HYtCYjpR3CMQr283xJ3594N9CLCYQHiT7t3jfX28nCvS5tDVGgCCS",
  "key27": "4wG1YvHJrDo8ok9meDtqoaumFTbZCJBgmCpqV7KY8KjLBy5m6Aum1kzeb6fKLjtWJrnYKBLCUDjd4Q4RsLgp2ZEE",
  "key28": "5DcZoimRs2L2BMSzpWGJV3ZZ4VBp166rCkGCS87mEtvjEG1RfyTLYeUWGHyqQtbpGzPSTeikztpvHtmDy2K4pDy",
  "key29": "5DE6H3TGLrnA3NBdmCTfDkEnTqZm1veqyEW2xmuZMqgBYUU8E6zvWdeaRJtsN5fgz9CZzHU87XSqEzoxJCZvyKkE",
  "key30": "sxKiwTzLbbYTrrJdrnPSF9Mw2eUCctGvJsvpz2s5ewK7s7Szev5dGknU9zvNzDCjZeDDGLVgut52WTVpxqwU6Ym",
  "key31": "2Te7K8giujj2CiAFsVAL93zVN7Rm3rmWnbaNpCch9Vv14k6BqFj6o49tYimgc4xga7hwgYqYLP47juUcX9gu9r4o",
  "key32": "2tz265jP6exeYioB7ULCBgfdjpkZcRN8GRuzpGW4Cu8D6kw73PvPqTNRN6hQXPjnE5BDi4AgrXyFogXNJW8LXah",
  "key33": "o1C6NY3R6NoCbf6YoYZuRYrHX2jTCUCkvDExBbJQ7Aoo8vXMGPraY1dcgAsoadGzkpeZK5pAyZrBQCTiMc4hMM5",
  "key34": "23nXYbqEU1UMEFzVHpiQyH1htETDicHdC1vE87Bv96E5Q7Xnj5YBFDkuLyHewFbTjsuPc7khheZFRTrYNvpVFtLP",
  "key35": "5UZcTZnyqLGRRUgBKZgS44G7ET7vFL5Cpr7YG4wuszdUXFdLzk3xQRy7gz1NGi84rkThi5btk5J8XjxgwUN1EvAC",
  "key36": "31gDgxnYdWMRNzzu82ubWXXmmMKdeF7fdaKgCqC8dqdXvLowuMmDcwuoJvxgimoBJ1hxBMLBkk99LmpNkz8ouFX8",
  "key37": "58xeWyTEYXXDzefhJKxjz47hzAB4DnaE52aqHQrLL23QdfxCLUkJMjHzhdeUqP6f6Bo1N3D5xLFXDhmUVJzht6rT",
  "key38": "2newT9CxBNnWCW39JYqghcYgER1ruzKkdMdFi9WTzeZ63js28UahBtbH7aMawyzdxn9YYtX9xzWyndec8ytRvbaR",
  "key39": "nxLUmyADPZMBydGjoCMg6MCKvA5YrFRUxki8wSkbidpaP4erBoVk7DrzcXh4MP3wt23gsnEf1potJdZKKjSzwLy",
  "key40": "2xtRwiR49LD6MK5SXsi4c4Upuf1AG7WdWJJUaimzQGyoU8J92JWWqr6d7rqKnPGWanJ41B77xBTuw5Z4DXpxMhhm",
  "key41": "675QirS994wzxv4CRaNSiMsxF4GawHwmvo9sbERtjVmEC8gnYzShWWuttENFyep2tHwe7LuTQGxTZKFb19hnqSM5",
  "key42": "4esCjEoq4HnniNguJXRwmSn9yjZKeohicix8eGGPHWJR6acA1YQunPC3Pn6PxrmYUfWWfsRxavb4SqbBEFz4zapA",
  "key43": "rD9Ma8rxkGpXLUkSAA188xFQz8aXEqKLiSBJbyWq9YCkY376GCcKQ8Aicz6mGRTJoCY41Kc8W7iZ5E5soJ4Jzfv",
  "key44": "4dvJcVndeXHz46wB1yeoQ7cSji7hFoNfTEWpKjhFp3qAxBWMUX54ow3NZM6tTn9yExFCGmSRLnAmCFAGrLJWWuvf",
  "key45": "5movjBuvBHX7p1uDLHnMx2mtk5Dju4AmqzRtfyoYnPVuFNKt4PZb59pfphVuvtdJiaK68yEKgZ7FiVL5WNuk7B6R"
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
