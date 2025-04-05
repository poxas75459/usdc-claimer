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
    "5NLseJZ9vipEuw2TT1FpALzNg9Ju1dwH3ipxakUieMz9tce4vihbP2Wm5hLs7Uo5XUGhCTwmYX2d8RxuU3GZQjhE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3q7ShTSKkTAtKk9k7ocPFQYCmxAqQwZRTXFg3jHbQQqN4JFoLCZ1L9n8pZx5C1ivCpYtdQ3oWkg3AeCgnhEbKqqz",
  "key1": "5UosJA2zZztYjDaGWW6o1Fbq6MZyHZgpaSM9Kc86RLQvsnigQZ5UkTbLzyaNRCT6WzmTDU8UXzA8MbdaP59JiLDJ",
  "key2": "4Mi1t2USNB1C3JGE92zLhZ1zYw9kaFv26sQFDQu5HnGAHS3uDbgs85MB5nKbhzDxJQUynbHEgdrohBjhz2Nh4zF8",
  "key3": "5BvbfGqKEBiDug2GPLnW4dSU2i7HXhcd6cVAf4m4VT2ZsvYM5F3oocPi2okXn7hNZv8JBraMDtS3B8bSspR1yxBN",
  "key4": "5yKzDxmABcVReqhWyX9FphNsEH17xSG2Yry2vdyF2ydiZ9YA1nmvw4y3rtqZSnrzrS2jD4Re9UyJMz9ZW6VnAZR6",
  "key5": "5Rft9fGFPWxqZPCdmNWFaSmxmwScBtr2DhN6aotSTYczRe5xsyQGnDWUMSPU5Skfj6efdisYtMWkmo5e52ZZBvne",
  "key6": "2D2CUpAHvp8Bve6HHb5RTExwzFbK6LfbtvNNjQP1JPnwBa2Pg1BXBBDUsqeFZCtpsmGxHaxU5FjSPkEDBCjH9Cq2",
  "key7": "5gJJzrVGgKujPrTVuSJv8GfLdnhtJbkWDstDPWPuDCKyZv7cSueJVi1fpbu8eZtWj4aXP4iU54u19nk4RDNbbs67",
  "key8": "2UZY5EzYvP5gjG6NJ1u3kBJCKmgdDJmdowP2edCkWrkAH46dU5SFZFV7KXJGVEWKJ6m3eF2b8LmDkNpedPBmgbP1",
  "key9": "2qViU3iUPmNygAb8sDr1ukBkdZTVApva57e2Ca4gBEcZKANSmLWBqU5VHQvTVphfucEWBFLYRE3iEUfDAR31EA41",
  "key10": "4xv6q1buMTiKSdJVjC2zLhWRAg3tsB997hiM2e4zuzNuyS3iAaBhFgcbZ3mnjTquxeM5117yAAqwa5ZsZqbjHYGJ",
  "key11": "4RfvdwfWmRssxVfSoTQKuM2e34E9dKUFN6CeW2sW8UrGPFGLCXgAzqP4g3x2rTJV79pfzssnrdZL2w9DAVRHNhuk",
  "key12": "3C2mZ9kn5VpVMabvCks4X6eCHX8hcs4Eh6bMCyGX8xCD1jbqGqixZ4o3raP11trGvqNZpa9gAQJpHEwkWvtL43CY",
  "key13": "5nDyvPofs1ECsBLCv2UZJWUT2hpaWQnXa1qQy3YEaKts2p1UWwijK4kfXtAMKyX1jso83dAsjZc4ByVn9RzLeggL",
  "key14": "2JPEfmgVp5Fg3eyZgnSaobpxELN6yFinUNdoQ8rQEECZbqWeP16bRqjxZ8Tm61wnjvoXpHwkWbRGCaDefDhDzYJB",
  "key15": "28mpAPyYmDsLkMPoJ8UsaUtrKnBUcaVjup4CUdTWTqQDfA8TC5ruBNt2EDux5yz3QigHUqQ9w94VEJmTahqi3ikb",
  "key16": "5U9J5tN2tyyNahj9XLcUD2c6kCdg3MqBzqc6nAZF6X5QhWYrtiTFrXLhsLvvjgTGdg9aMBY4kT1ABs42FkR7bzu8",
  "key17": "49pAQAsRciWPwsZ6jxJHnWStBhHD4Q7gm3TeqBhuwCPfJAGGcHuZrH8fgLKCbkBgQQKFfovgZz4iw1ntbBT3KDB1",
  "key18": "48tmbm2Lm8UkX3qbd24hwhpAzWoHh78Qos6KD5YgsrgMW6CK97uZX58v6J3PRczD6NPtvepBPU5FExDmyHdKbc5K",
  "key19": "52ARqdBFCfG1PAXSPin2Lz1RPja97FF34Q5RjQCeLJ83PDfbWHA5AykJprN4A38UMg5o7Y7WVEaVGrGWv9VRq1Di",
  "key20": "2BNUF93eHyrvAfC73v7HcSRie41QGK6eZhg8rLWQP8Y8FNZVrvti73z9p27huWf1VE9e5H59Ya8icDxrd1MmhZBh",
  "key21": "3R6hE22JiZfFS4z4CutchZetSjwGQjjf1BjcTUyjZUknkj9QufN9sdruiV4bdmdvfN6G3pDXLi2Zb7JdedXS5meD",
  "key22": "6bhJ51WBixYiUnyoXegWz4zUcgrTc2QVuoFFfeuY1YdUWXSV9bYrBufXSEhpEkp82e2trE7HDCsGv7S2C7WTs43",
  "key23": "29NVXZXeNJRcryNUGfCrpR2kPiYveT4sMVc1aqo8EH78q5kXmJbc8sw8jJK7pMsHyxpH42FMob3vE8p8UHVTf5No",
  "key24": "52P56DPKpWK5KuSEhNaWJp5PJok5fZRLG8rqL9AyfsH1hpLb2K6dSkoVAmch3gbMmateKLqsbxargnBo5ZxdFDHH",
  "key25": "4AcEUGGzSN2DoKhPpTNbQUUeCw6JYtmFYTfnsZAEcSXQX8AMXEJtvMNfiPNVCUps4q7qhGGwfEc4zh7tRDJNJvYN",
  "key26": "454j2n2Ud2bg4tH2fV17UWLzGov2LdQ4ZKkXhvKTrEmf8vUJPLZh2zojdk27R5iwKT3iYRwZTRMWXiqmeapCHpH4",
  "key27": "4C13qrUpBowKmPJTJR1iobub9NEU1bzCPpfd1aojW32h7Ax8mzfGs1WkEP5VCA6aSrVFBzAKwGQc6v7Sw68rGNzY",
  "key28": "2FguAfKTsFotaPBptqwQ68s2hy56eWRKveLhGkfQF1YN2YwY2qKAAjbZqBNUzR5AkjVsRNAdjKCHkk9rCZz98cgx",
  "key29": "45Jrpt4b2pYUnVZ6EQJaD6CqRgXtfE2oSjbHozMvYSGU8DQ3E2Br92VBrVBbranbPMGxiB63SYzToJsNeyARyd61",
  "key30": "58uT1aPUVm4AFMz6zYYRJcYxoy5xwduSLNAFAWLvmAvZxuN2mF6MGEjTkPgRtrvpW35apVZBD8gHTV3Nbu7YZSuG",
  "key31": "4W2bpYdMazr3aKELNojxckrjtaere6XTAWVbmGd28i9K9RnG4yMYa7xpkmUvF9riqSZUHiwNyYFNDANMUjS593gr",
  "key32": "4a3xZrQ3QghH1acYzQYzQswnkttKfr3tXryTuVaMR93kcWXSjB6HeaV9rEH3k7LSXArYDT2kmzhEnPY3PdFrvFKg",
  "key33": "chtLwQNMv4hfhb7R1K88cef5D9CvpTJV7Axu96ATCqbKMYS1miNvDVdjM1oS9nysefemjqH6cNjMjXtRAPWVGA1",
  "key34": "pEJKFrZgtTfBBMpNTH3D6kkqpoqouR7sYDBdsdmSerPvjvHsxSMLq5RHsLodD4SZfrmMY8FnBBKuJaD8ZgR3nsN",
  "key35": "2qxZdxqnDWoN57oDKgD7YV9vuZBswZmw1krPwFm4eE9doJA3TedHGKPxMqPaqy4LaRj2PxCByAH5Bjg5313RceWL",
  "key36": "2rzEf2tsEYkqnrWjuohKGaKdrYqtt7ufjJYdiCAnC6iwXcvu49edyLtC5SZEQZiojGWFK1f7YrNpdC46bJqaAXnd"
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
