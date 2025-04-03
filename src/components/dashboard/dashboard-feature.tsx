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
    "2Ljdx5WpKfEwevbM17kMKJGyKt9UYzXvQdxPiy7iovzuJqSyqP7SpWgQkzDKrtLpEBzRrPV6PCPppNqaXzrPUA3r"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "k8LgcE7cjd1t9WxYhtGUcCf1hj1dN6bzowohiaqih6o45W1EwFsYzdiwXVkX7GaWMzbTM3SxmT7tkaLe46aCLWb",
  "key1": "5TcejaF94ytg7kWTfmFYrkwxU3NQRnrdL6H8t7R7gB1STRWGfomYUKdi6Y3yn8pERaoJyxKY1xntYfgE6zxL3wrw",
  "key2": "cYqz6KXBHwiES2wrSKKw7TLw2vmKJAfHmxJZDpDuk58EG59rYsdPvrd1AK1pdfkBsBuPXmEZh1vEprPecVAs6P2",
  "key3": "5F9Di4k2PXGiqT4bQawft7uPXiUbuxGteGnvKfPcvSGDbJfMBLSPn4UB5SX66w41VGnbPnEC8XpBEnpQmUFvrdVP",
  "key4": "2h42aPwjvRY1QArjRLgSTTcQFEzuu6HCkfzA1Vd55jZgaEPeqW9ptt2GMSuhqmT1xuooTRahsnmJuehZF48A4Bd7",
  "key5": "4uncBv6k2Sn55aGWsxAx6cpeyczpv2qNA61EYbACcTWn2wcsGyXS8r899byFCc1suV5m8YDUeMYhWbp3qbUuZNff",
  "key6": "2vaUQMbXja8Y49gr54iEsDJnnexKh8ev5ndB5Zy7yMAExJNaegY9xkgAeW6tCnAChCyEhfi1MqKwoXAGkV5LBGRN",
  "key7": "276xfXi1hTmNK5SoWSTCoLfQz4UXR3ff3tV9DGbcKFNti4q5T92UsqTzSh5auLo9eeGKSYfF4ekjtyEGShqfo3uR",
  "key8": "3ku3d3F8JWkvjA6cGwt2hG476BSQmQsx8a7UGf9bDN38qAk8hxpvExZqG49DjvfJ66mfPyQvPu6ks3uJcUdqyoxY",
  "key9": "5M8EaE9YJLak7yCMiHmPxFtiHbCrQdf5iBaJvUCAAJiyuJzMvJAY1PELKT4jYnmgGVrV8HP1K5BLi2MqQKMDZBno",
  "key10": "4R9R8dszidQzNuLxiB6gCygehidDsDC4YSp3q8ooeUTQXX87F58A4wWsQUXW4uvpyHUgXXB25QgRLKDBeRJSuJCZ",
  "key11": "29Km2s7mSv4uTVeRAurN6tAv8by8ACKdwZztVgsLWjcz5HyWzniRRAJTy5P74BxbP3Q6Pjqg29ALpY3EyJk1Rd9h",
  "key12": "36NEJfznDWxEVD7dfveYqcoNoW2WtDkZkg72xzPzmQvHBNJfs4JEiFe7UWc7g8si7t8hEmzQv5mZTDFX5Si1VYEm",
  "key13": "59mtABBPpRYkhfKaJ8pX1ExUTmeqk7pn41PHgDUYs7v4dQG4MMxffUitsr7mGuTBFhU3rBfrDZyw6hTiUaRt2Ays",
  "key14": "3aCdQhziujAYfCKXeHMAsTXwqkZgV7Mbn7D9cjMJjLRggpurXzEboWRQk7wcKBbwjw2JxZof6VjMVmjziy2cUPth",
  "key15": "4rStfPWD8Jfn9tRYPxePR8L2TU9jb65y1G8aVMQ7qFzQmb18xe2M9eQudAWtpggWeEjA5oFDAZzpdqN4FyZbVvRG",
  "key16": "3bxPtBRcjVLM22437Qspv1Z6yXZWVJWtUJXUVBi4Z22DbLnh4EyqYXW1j9GBU9N4Lara3vY2EQ4BJWt9Q3tP8GDa",
  "key17": "HSSeaKhffvHkwdjG7zLWfJBHV7fw6UExv9r15gwBycrtwPbStcxLLoLNvhBVRhyEoNTnivEUXrfv2o69PKvVjcm",
  "key18": "P4fPiwhfP3KDKhuvA8DHZ2qzaMQGGdmdcGWmDcMHriMkRuUkbbaat2oenitc6sah2gj2amxBGVaZaL362siVELX",
  "key19": "51tSog3PLw7Cd4rEnGMW8UGX76pYwf1tFEXg9Hkc9mjpRV85ApUMgeukzBy5K27WbaJ5k2ehtdx9g48dwQdrpFek",
  "key20": "3pfc7NG2P1ayv8Pu2B6HX4Pcb6oEbnZsS2PwKoFsba9tuKpEGUt2wBRkT8gBUmt1nLbBRbyZDDJp5mZeqgC4xcf9",
  "key21": "3mpz76PxmZHaVrv4uhg6mEpzfk2xcJiccQYhapPhDpuPZg1WC7FRwmV6yyBeoUMyP3RXmyoDJZv6qzK1NVLpNhnt",
  "key22": "o1qpVHH19r2XiwStESYGz2RWg2YPDyrrgZe6ezU2Z3e1vZy18DNEyTmEGcnYu3q2o9Boi9TiSPGkKEPmEXeS5fH",
  "key23": "5juXxdzhMXiqRLMDgWX3aCT1o7L6uGHt656i3fiJ8jKzDy8qfEiG2tHDGmm1Kq3yxjS7DitD4SXLngfQFL9jM8eh",
  "key24": "48HhSAqrmwadWRmjRNvJbbCbyJhAr6bDDbtgedeTDBS2gaNQR1zWVjq47fn22xVcRXo89EoHsjLUMCDY5JnUjP7q",
  "key25": "53QgRgw6UAQXYNF2znp99FME17nsHBQSeYe6eApJpZAzdSJcqvgLsR4ZdkJAEuDRL7ovonDLJXL915Tq1jSeBBir",
  "key26": "3BHYHeLHfn2dN3B4Wd3MGDfBc65GcEmFUKiUgqjWZHAmyPiCdFMKYrX4xbQKYFxfcrcrDQC6mhU8Nd2BcizL8kda",
  "key27": "3Sqx7zSDcLfPWZHx5FCetBxJG7EgwyQV6CfP1ZyT9JBBZjcPtqifMxbyzj3uBPERyYUr8xW4jk5YdCu7aoc4yM8K",
  "key28": "HHADNXy7ErooJjqhCS6QXoenXJuNCUtr5E8q8aUvTa56DTF8dK4UwB3gL1rFyFt9uSr95tRZ97QMETPNjKhuGBg",
  "key29": "5UjNpi5hRBoLvoFgYHmEEivPpteoaFAKrHfQRHWRHwBMuEfyqpctD2id9hZpZTouH9Z6obgNWJwX2uH6FabYwi4r",
  "key30": "5gmgV2X6syrhtZyjSYKcE8XFJXYAKyCXCfe9ohsJsm9tpBWc9y1xcJPWVyp6btCNCd6rE76SQEVsn8sLDrCVAkTT",
  "key31": "24a28xh4HHGkXiJdxsZLsuosqBKWEtj6fx6Y9nKncrMyMN2Tn8TM2EKzMXWFLRaHj8SDvA6r12o3PZJQSYEhmXLH",
  "key32": "3VqHQXD1juVR2BvxY1UWYbJKnSGzDv2fJ8qsNVGkwVkK8LMR5L2QNkGqrGSxv9kYBH26XXDrVyqqqQEP1GJpUfX1",
  "key33": "3EuL827pr1Xzb642nKBs7ws4YnnrmWabhXfwSvCKZKpyeknxixW9Q8yy5EtwcoJtGeUVEG7isX1SPWhAnpZbSNB8",
  "key34": "3T77CgLyUhCWD8YUZ5S6kSACPTVpW1uhAXKBQHu9TjB5TXSbFJJmQuziWwVEi1aZtLah8V1LuowvJwYos3r4J7XX",
  "key35": "3BKdCQH4M6LCWrsLg4mQhZUD7wwcQAmcY1qtxX1B6KKYgS3QGB9u18wJiB5p1npCQjyiSGN9YHKFLtrZWgNuMtqh",
  "key36": "4W9wtwyUvuemQj9DhG9TamFGbpjD9Gbdvxer1ZY4aBaaiWQGMiTqs5StxftWKropPwQSBMZPyJ4rhDpb8HNyH2WZ",
  "key37": "4Po3LVZnrEa68Us5Uam7ZN5iDG5ScCEX9GW3xFzgmFMQCAH7F1pFxkBwv31PJVJWBWMkuRhGPSfzZj858Vaucr6d",
  "key38": "5LQ2PdDhN5JJy7ptDHZHzm8smZtrzzURbf89xugHgoPSvM47Yzat3Gm4RFR24dmyjFa4z5QjfDwaYpvSFM1QmCAL",
  "key39": "4jKEFaN3UPNKjvN83QjRhvGoNckjCBqtmZ7wd6HRVStSPSE7Cum19Jcmd67J2efuwmGdqLcGfHwtHhFAM3CDmesH",
  "key40": "d4piLEyrrhom7cW77LQhhR2BWXYPQ1UHYDU4K8WG81dbRKfs8pmp1q9DuM1zhdzJ1gAcz4Z48GUyQUtf5cADip2",
  "key41": "2zAMKPnSZHDkgRQgVoYX7WxUgBiYgdKhtYaGEi97jAjFQPoxnxhq5g6xQiGNeUwn9xSfXkBuKt1ehscUAYdr3JZ",
  "key42": "3ea26Gnfs1x39vyRJzWsNmABGPG6hYdcR62FXUgPMhPLsGZAHimY3U4B3J8GoMumSY6PA7Qk8iaBNB1X4TN71y93",
  "key43": "29EU2fVAnXFfqhuC9oLbKsXkVHPCtia3o2MV5X9ZCu2UgAUE8oxYHZK38ZVntBsPRMCj1vBtXyPFzoopxeWfEmZf",
  "key44": "kgd3BoSpu4EBGwxpH9rZxf5dym3UzXRQYoKtPwafqddzigCVtPU3CJmQV493zWjs6uJwpbb2b1DSNoSqTJ23gBt"
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
