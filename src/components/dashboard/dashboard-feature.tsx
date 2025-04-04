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
    "4wCNyxiczBLdx6iii2pT9rVhgCM7bypHpsszDdL9dGuXCyCSojzkAHZj8XQy3k8f3TT2rvGR7ZJa99kc5Nv9tUJe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3XQDvAKCeEC7XWnnrgB4A932k9t2FAxMWM33yr7P3KNqnvk7gptnuUmbK6kVWSeje5uQBMngjMY22HZe2R1GMUG1",
  "key1": "5J1DvbktMP7VHHWjqzuHsGTwoUGkMADGC8wJvoMURwHmeA2nqsukeNXTFp1Qx7o8jAqowrUHCzfwUM4bfKZeNJXx",
  "key2": "AkwpiCVjbCCgthPGPdtUtVvHwAqE31X1VMfk81KT6ycjD8CDAmoF3CQzxtHoWs9pU8tpCSHAbisF1oS1tALbiVq",
  "key3": "4RqkW7h61dSg7cTBEJ9vyJAVbunZotBtyFXp9dfZCNk69KLREmSpQBqB5nNwL5tWdWYnbR24wTftPs98NCGmHNvg",
  "key4": "3kJgBwPmmCBTWNP68Pp6Z4o2XakUVQCdrGxojW4kxBngTtnMA1a7yy19G37FJvwbyzqGGyu6tQsD1wu7EoUwmHG",
  "key5": "3KnhhRyGsPFNDUKmge7GnbBpj8UxcMFrVtVEW67r3UnsBaGPUNFBHGLR1bYGH33uRkkkTEGQa81ywS3oRqfWcveh",
  "key6": "4CJBy4wkV6hS2C3B4HziESR358r8vdcMBjwKzQHpyHHdMhJ7FnVW2YdbqpyRtLiSLCZreih53Ag4c8bAhynBV3ms",
  "key7": "4L5zQ1NGegzVqYewuhGLHfj5DDXnstu4DZMAgqvtnjbk77HrjWjhBPiKSktTZcZHAVChu9QJ21aFx9JchFkXMedA",
  "key8": "89T5eAMxRxKqy4MmpDLPTWmtm4QDNP2mYraQA5zNxhL698U5NZnpB2CWTpEiUjNLtdaLirUxZDSi8Pgh63YAans",
  "key9": "27UNo3XX8YpbxK3BCSr9ppj7D8W8CeVLPxvbphbCx1QZQqRH1xvX6dYch36dJkJtxybNqyuPrD4wMw9kYz3ujBEG",
  "key10": "mgGKb6h3BD9b6o826DwFf76tDpcpau7zKCibV3jDhD5TMyCRWfoYCGhUYnhhMdanm8vruHXUErFr38RjBPo2DyQ",
  "key11": "21myrfxz2uGiZqa4M29rhu75GAj1ssVnxwfPBpSRH8xMHWStAVHX94m3CUfnfAAXUeB417KxtDcEGLZkkWeo1m3A",
  "key12": "2rDReEbjwku4VL9TsT6PG2LUvWBRjKaS7GyScpYHACBBhHCKQuPRznyNaNXaUgZFzD99NB49GPDJZBFaMEyE2Uc9",
  "key13": "2yGZVEBgg6LpQaqV1PbctRJNXjPwA3cAJWfiu8p5fxeTf3RfLjjpkxh6Gv9gAMo5jWkcuNKKjwVK3gpsgTNGz1Qz",
  "key14": "5PLs2jNH1MP1ZEyZiwsJJJfVPNLj5qRrx5WbKK7vasa2iRCmsuVsZYFf4xoFhJ5Wq1uKxiaTYFHX5QPpUNxdT6Da",
  "key15": "5JyQeUttqqDUnvNECjZ64ViVn11gCUuu9ef7vU2ttgpjjWDHMEB5bP6UDYurcSFU9nJ6VGrDksdrvpCpgTv2Gd5J",
  "key16": "3VVdbYTaJs2EEWkKA4Rj4fV46dqKaaV1EGScBpZDfeitcW1gez5EumTnKoC9ti12FiynsxPyBQspdNQSFJfSuumc",
  "key17": "3CFT5DsgL959a2UyYx8sVpUGywtUXxSH34FvSTzim7h3aSMmidmctp8VeKD5vuECxQmM1DCYD6Hbc9uHMRZ3dLUj",
  "key18": "zjN4oaM1Zxudy3QxT3k7Da6EXLc3LSbSa67RtR8PcchYeqBac4rt9sDnsE43dtQ1MdvNg67HViPnB2e4KfhiS88",
  "key19": "gYtTnGxNzCri7hzKNaxLiSaxJEy229Lo5UX2yygrUfM2cpnCUySgWRyGLxhQzYi2xzcW3DseLTnqr9KT9VyGPVv",
  "key20": "zFGYcjkoUFBh9FgDrZ53yNkyhdS3vksLYN7QWummnLx2tMnrUdLwGVZGX1jYnF7spge15sFQ3FbPVXgzLo5VbzF",
  "key21": "3GkdKHJMiuQ4Mq5hGcRwKJw85Vcya2SZ98Agq61Bj5YoM87LyNRMKLtCSy6rskrJpQ6Khzu6DFubzFyDJF9axXez",
  "key22": "57hiK3DBv6zaiyJ1Y85PBUGMVjESEPzTCXZMaha2zPRgk5MqDFJVMuKaV2AGPE7yzJQb4AKGHQ8Qqct1xQdv4Z4B",
  "key23": "3zXsNb5duWyXLPwoNtaKKhiEDbA3PuD9P6NZoHiAsTi2Def3NrFDiY8A2GbXpJ5AXUF5VaWkdB9exJWaaaT3AhXR",
  "key24": "4s5CdVDX2WQZDnKsFjPA3mKB9Wsj4xKHLF6hRE19af6EAT9zuPJ7747PYnD9JLX9CriuVycYntRufXYsVXLhn6TD",
  "key25": "4edRokRaqWRpdFMjRiupfqzUCRS56NKDNxWJmB7VPxhT5yTe25bLpgejRM4NjUtNQKyMgsx56xdJ6Bxq9ksSmSej",
  "key26": "4CGd67ca7ubezBwjFToeK5B5ewB8ZLk78Moa2xkGnrutRThsnURu6LX1GX1TRhSZaYpFLMHCWGHyTUAgVeshdPwi",
  "key27": "5YA7VGpCZyT8pYyHqvayscxWJfNGmdh4SUMseuSEEJjiASvbYu4uB3jjui7fWmeqkCG8UaFfV4JWxUmCY6u4PQqm",
  "key28": "3zSvTzYtfU42134c5SGczc1nrCrsxmQ8VbVyDizYn2Ca6DwP6bBfGcxrZVuMvQYaxRGYPesW61hJqa6BMaDhQ9DN",
  "key29": "42ey4Z47WL1Aq7X46Kvgq2rcamb72WBbGC6aqrknp26rkrowBrQSd4aTK8TfmmrAkiJ55iZsoYe1x4FJzzPbUx76",
  "key30": "4LNJzJK1eCaxhbuwCvnnocpKzsZ3QoFwwQ4o353CBegAnELruBSiphv5ULhMeYBmu8eWN2K6heFf364QtPBiVXQa",
  "key31": "2HMQ1UgEQEtoDQeu9VFyqLqxgcgAbffr63SRLkFTbJJuHVfxNu1XyXZDb21mwFz3Rw2QSEmAt9vfEH4SKLdSANK5",
  "key32": "4bnJuyWe8U9cD8yoGuvXbSYwSCWbd9JSQWYXQ5e9NDSwoEyryg9M6yDaSjvGYZNbBmJb1Y8Tdwh9tg5KWfJHLK9e",
  "key33": "ZbCfawjwLwwCGryDeAmRvUgcAgFXzpmRzrh73FsDxAMy1uarDKxUiLrCAHdWokjBV1xdZc1ojhM3rxGrGwdtFnB",
  "key34": "NYeQWaNDFXKNpKksmP3qH4tMmtv7rFKqCuXQdxqZvHPLr6EYMANLQnLy1jwiFvHct4xP6YxkEHfrdQL6YhsSCh9",
  "key35": "5P1Ma5kn1wyEzArhhyhX6ecWDdeTx7rjYriDgFA87MomyAhe7cbGTfbQsAxUiLcmViwCds3FXZa2txP1sVQvUWcd",
  "key36": "GvSPQJRePbRBwNfREbFvNmoZnmEwfwR7vzHQkyC8deg2g8r2w82Q9f1kuiG3cz3LuUQgutTGhNbJJ5vxmv64WdF",
  "key37": "31rqadBk1vS5MSs9wNp9iDcHYREyr5HSNhftXjtgGHPguV8ZZHYBXLtrRgTzfBTTwmybPdJ4ypZV6SPUDcupt7s6",
  "key38": "5L3n4GHdNf82UpfT89uKAyLmPFgSSQ2GorgdmeQ5yrVbY1eUZtW1auvjqFCM6sHkpomobZBecsQyf1DMS4f28Nes",
  "key39": "3L6Lnph6LjEVUGbM5iVKf6aQiWHUm5Na2RsEeQKc2x6yiW9o4C2wSGwRchC7qeAv9dnFjHHHqgy4gDEkfzHnMEmc",
  "key40": "J4HSBLbkkdk9EuezXocZEGGio4GQueypjiTTp2wVFDK2YJ6fqcTphytngszCxrmx7CxAn45iw4KzorZnXRcna4K"
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
