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
    "4bX7jJeqNYu429QcVgkvXVib6rZCbFu7F2wJKNkQg3MNzBaturYvABn3gxT1WeYkYoTkyBgsdpUFHqoEVQzsphcp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9WzFwNJ64wYs8fJNgwE42WpH63LAd2hZisM2sGJA3gNPBugausCUBtsRJNwdNsEZdtSPggBuVQekNwxDY3zvCQh",
  "key1": "3BMbHTNdPYdN9eAL6M4SiBemNUq1fvrT5D3B8zsW3bUVxSka1kn7tJuZEn8ZU3YgvEar6ScTPocYnCZQmtV3F9au",
  "key2": "5bzQaJJ76hr12jmu369if4dgW3LMqWttanR4RPWcfzLjvxgoDdUJ665WApG2kjf9QhhiFrhNXHSnYx5d4cRvPLG4",
  "key3": "3tZy3d5RPG1S3G6hws1kD9WhmudxA61wDYX6ooYjMRrE2e7svdiQLPVZ5Lfg3irN9QVAS6Vf5bZUhQ11q5aCjq4V",
  "key4": "5kxRmf22UbD5NqddfnXAwKUMBmgdL5XrTjRRcsYRpWnUraEr73eH2iYPWCKTQbjqcutKkApM5reNVd1LA93haffR",
  "key5": "35nF7MDqDESkL8QUYcKUafoUypX6sXTf3jDA6rkHnHc8LVGjywgv23YpAHj1iJPVL6LEwMQq8KRwcehNUGyVP89Y",
  "key6": "3uzkcoYD2G7QJLzGLZnA1cmq7tHJKazgHTPEUh42sfFzx6jCGSHPEidwVLGDYN69uwbWGB5GmUzp6BCFreePwH97",
  "key7": "36MtaJoeTADX6bCLPivBpfsWrzsRsbU1X1pk3C395PJGkEGVBfood9qdYQbRRK6TS6WC4ZV2cTV6NMKjCZje5Hba",
  "key8": "9kV792GvXMfpCx9pzYmbQkS4bh2kKMx4qx9kyz8RqZWP5DKv9WvMnp9ZfP9DQeeQGv1FtscWaRAo75VYoBKHM4U",
  "key9": "2Dw9ecgxqCQ5nEA9qiUpriq7PqXgWdH4U43rto4T2Yn5W4zKfHQu3eDDKJPxxXwB9TZR4tRG1cS5cKC55FM8cthV",
  "key10": "2SAZt1RNPbEXZg7E6yfnHF4mEH4Lr7Y14fWX4EYQCX7qkTSLCgnN16koeXm2PjRSgYgTdCzRj94b2J9WCj4LcZtX",
  "key11": "rRrKZ9aRQv8EBTGNLm8a1qE93qVtfm6pqugRHkoHki17gK1hmyynf3pp2G4wyy6amZfyd8oZkCqu3UJBvRHPCty",
  "key12": "2rkTFXsQNWjPXfnEC81sXaj2mWdoCKqR1UaVccRsJdoPPdKASRJeSzru93BNxxFoJmyRUJyCZsEhN9AA9os7BABt",
  "key13": "3EP5AcdJfPzzY7MQr9mAhRn8Xsg13Wn2RxdUCy1gZjETZVZgi57Mvn3oJirVrvETPsQsxhv57MNTmcysYAupJBJp",
  "key14": "8azZsDsssvmv21P1hkHbMr5fSvXFMR82SwfKbsYpyHUsvXeFjzzy1my858UBihZ1M9tTxS9zx5cNEBAC54ahHfU",
  "key15": "4jYQ6GuaiUAFaZ2SbMv1bhmGEENP1a6VU9ApTeNdS9Xt4LqNoFfnWwRoz3XGfdVitHQcuxuNV3Gv7VQL4DQxstRX",
  "key16": "Mi3YDT98r4XoWvG3X9Nzw22VLohKZv6YoDC5DtGFrXTbByRXA86w5kYfEjKhM8AUmfGzVD3JTVhey2Uo4AigvJs",
  "key17": "rcYH6BysTeo4Mwt4bgUcgCofH3sUpeA9j8pLr3AxGvyYKyrYS3WBUGDBXyPaa1iAQP6VDmBSrtND6ro2cKmBhos",
  "key18": "3uhrfP18VdNq9ZMagF9vV3MmAzZrFDFiw6Y1teRfuxiJf22CUAt1HF5wMrBYQuj8azL4wEsPDs3Tw5h6eU3MCx15",
  "key19": "5yMNVPV3GuB3QhTeynYyZtEfLJ8nVMiqNFhXFszQ63iGPDrVqZabGmgsvP4pbGG3gjdi6wvrPcerUWjR9Knyb6GD",
  "key20": "4d9eypfoWYgH5gwG1emFcaJnsX2r4JW3L5mT1Tscczq2V6pNm5yvPp4RHuWn91rvPSWoTAm7de5jsys8BJXgVk3C",
  "key21": "5b3ssSf6ibqtbmiG2Lthbu2zRCm4E2dM3zXEJjxN64PrsYKgeaBKcDo7erNxvwyHKv867Tq7oARCZwt7zKRXfniZ",
  "key22": "LFU2WqeXtCF281LVwcf34mLT6oHFJa8tXSzE2yHsWDMPWuQptCvbFAmaLkcCBJmE8fhPbDrmB7ncPCnHX7e9BYx",
  "key23": "PGpSmE8CS2vMjzsB8VAukT4H6sKz9j16DnoLVp4dynJJbATsjV4jyTcz2SbojvnS2cWPsijBgtWqLQziPFQEBw3",
  "key24": "2NuYy8gEd2mb4qqmRyMYN1zkmMVvFdLmE3jWQVM97sn6UvmurHTTadAV2TtE9uNtfpHUxgzNMbPoHVNP8ovMKuvx",
  "key25": "hMLefBejURgHqL2bZoD7wi819tRXfhK8eMTYaBEbYaM4uaA8UAt5aseQE2zDDGLviWGnk8FEpTpw7UwCYE2k3mp",
  "key26": "5JExrqpYM43bn7QfxTqLk6sWkSR6qBELY5LanX4VpFmPVyHcv2T8qqAmaLndPmSFQaNi5mHuGcmJKAb8mfMpWCct",
  "key27": "2tSNxjoSAVPtsfTtHiMNTBkCGZVmhjMFERvxGZLN1y1Jt21PuHkXS4ge69MuYAWNZxQJgADeyn2hgpNwpfDACZeS",
  "key28": "5G8B7ougFMLkTMPhNfmSRMB8dQ4FDrVpwcXaiKgeBTVoVb18mktoqwXL4sD8Ahe2JdEyxkQtJfBjxyAP7py91jSD",
  "key29": "4GD68dzj7NndK8asUbLW3YMivRUM5uWffvmC3518whJjMkbK3QiFJr1NVSwqqmumZT6G828jyEV6nbYxvgmGrXcu",
  "key30": "2mm4yVmCwDXaSHUMBw7cKaESob9ZF49q1UsCjLshbSADtea3s526AtE1urhGU16L3dzsWN4myTVtcAo2GPTsTcYh",
  "key31": "4G3JBNgLoUizKSFqqm8SPEYqMf9oHzvcKDhiHnbw4rAF2jp3BtnXq2qaMri2n2rq1bbCy3aUWdvX5zZZYGM4jwF3",
  "key32": "5KZMnWg85qTJdMfifKQGAy3W2Ax796Q8u9v2rdwdEpzrg9JBu6G9o7fyFqfLQe8UAbQQ8wbTA7Umgvv9n9dqRT1g",
  "key33": "4WXD86qWyW6qsqpQbyvGHF2wYDcbYjggVusatp6U23wSnBL1YqLuMAvBzhE6ahqNGnFjtwZQq6F3uhsdkAnacNHd",
  "key34": "4EesKF2YSB8i2ePD9ABCCCZ79nwutvKhUL1qTumgRvzpaDLR1HwAFvkN7ZztyG2FMxAjfTRzoRoCnmzXp1Pfhv9K",
  "key35": "3capsWBJgTHAea2cyxYFCaDMZg3dZ7S7yrhUZa5JiAu4J1LYqsR48yWBqoaC98Lj2NQRtccw3A8XWmp7EEssnqdT",
  "key36": "ZMTYdy1euvVCHJYLLyuX1MGsH3AmkMsXhwHbTu7X6hv2vhZc57jAPJmg7xUp9eShoFrAF8dHhtexQF9nsCBnCm6",
  "key37": "2kd62SM9DLtU2vjs7mCydq9NeZUxrevnZq9if1JHdkif21Q4BCpQ1U41HuYiBndxuU7FXLwwkwEhBiRzgptLmD3p",
  "key38": "3YD6y5kbs4wRojZL8nYDpTg7YRoesCz8GtUZQZUWhyArNtm9Py7XmwNGn1eRQ9vty84F9TjLNswwZf7GAVx8Wyqd",
  "key39": "2Rjmu8B8WywiArLB3gsv4Kvpeos9QF1WvW3mXSnLoWmre4u2btRBYEHWJLmkvDBaPEhEjzSbFEryzVQPSwyC5QBU",
  "key40": "5q7DEo6i8rUFfh6bxdgrKxamfBKxCvdk7q3Rx9w2h6Hsc3GEksdSX77Pts4DoJjWPNdM7JeD5nU5RX5VzaNFpFrd",
  "key41": "2YsfEmkRjXDXDo2PkcpNL1rn8DLM4QcfSeL67ykErjH75Wkv13Fp6pE3s5V4qkGoQ7GcvPkvGfmsZ9bB9Q4i1BPA"
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
