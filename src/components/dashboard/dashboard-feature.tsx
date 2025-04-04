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
    "57PYuauF8uDr4Za2NTEYaQYuzA9Q3dKyyD2MSvd7Jwyuu5r6m2uRs8nqSvzs2JBpGgt39GAuhBdQ2FUQMfSHMoDd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2KbAFoRzF3tbsoXKf2xHHqqqb5HUCN2KrUgjmLoyQZYyv3ANF2STtCbP8egTTKWnJxFiYppzb7ywbniLs2z8eKvg",
  "key1": "djutVkNhgYBgJXmPSTjUXummdnooUJRh7MdXw4fxsSz1fp5aE3R9AZTUQCZj4RG26NJo1xmpLsGaD5EEVE9HtJw",
  "key2": "3ipyrx3X4kVoprk6phBeeWohsfjHAKhThCHUkzTe8BLfBw2kzxNNcQDSwhks2ki3kPaLNUUPdnDQFVEQv2Dk1saX",
  "key3": "4Ad1neuN4yFRLKwsJaVTA3N2ZVLcUvRFsLpYh4zSM64YUPupUkLZaAN8NTVmJHBq2nLgszQPCn7Z5x3xVXGkYeDs",
  "key4": "2Hj1Tk3C2sagjpJ2hytWBjC1SbNTfP5npemFhVeRjrPqbTzFz4az9MrUDTV2JVjzTgtNt99jVBmNRyCNE52Fndzy",
  "key5": "276DDhauKYvJf6Ui3dZhqHwUgRoygyKnEMa3QtLtsi5dtbDXnh4Zc2JYbeKgNrUT633a35gNZPHCUH9qjA6mPZan",
  "key6": "335M5uca2avnhV2fNu721YqpqjAukU96nCuVLhpNNGK4MZ7DjT6MxR2nx8wKVWvzJ4VjmAWazcX3TfuFmF5wEo9p",
  "key7": "4pFev7W48PwtUERnyZyKCre5zKzFCePYNMD2rSWJcBR2v8dt7n5HtZmKgr3cnds47rveXmjeQo11oAuVJDWUChbx",
  "key8": "1c3KXCTjV8jon5ANTV1hatg2ND13qDkbJg2NUwY7DnSX8FxUmfa3sYP1utaamJGw8jx5VmgvSoFtehRBdcPwdSf",
  "key9": "4haASmUMp3jX8d97pYaNwz35tziuRPdNxXGLnR76kvKGH8G3XnMtXtXfWck3gFnvt1aVtfRW5zFXyz4Nxg6SNLud",
  "key10": "3m9gmj5H4p2jQ3NbjFzFVkcYf29WCV2vTWJrS3GhSKpGVtA7tKXs98qwVoMEYXYUZo7xSZBeK22saNaKb63NRuGo",
  "key11": "3MfZx3yXMp1K2wbQMgufSeZfaVcP5AB1KagjzBC79yhUsCZPnfUuTavfajexYNK3hhTBeYuFvmChbnGYsxHZpanT",
  "key12": "4tCXagf74DJQ61fj93tgEUwBPnUBFmXnQMCSyPWieUkze5TUbp1HbtsQQg12ERckgDXULYhUcz2dxwjFDdyKme8V",
  "key13": "3pFuVkpAYcnsBSeAJxkCBhtHxvtAZqkiLDSc9mxPmVSXpSV5p3DoXzCU83C4spZtaX7LQoJFo9B9xdzz478AC9nT",
  "key14": "4rKXc5V1VBX7QiBK1yRb9Lv7i2Vj5K8XwE8BmtYWc6ioLNQP5hzYSdrUnGh4Nr5rGT7e1RxVg31ZCmzA6woszwTm",
  "key15": "5zp3iCeoaeR9jp5AXXsSBzjURJ98XW3T9GGqLEhNN3FemSPGVMNofp8mx9X8yzEv185NF6oBoN59FCYfrTyUj14Z",
  "key16": "5e9iNQZYxk1V2zTH3rGXbHSkXEJJhbkyqSLBHCB7fmR4CCFhh5iRc8AfbhoLPzBoyEzstwzGg2tkAKnwdmTCrVSH",
  "key17": "4pgHo7bq7X3Cb2frKTtpjwRY1rkRYHVqmHDYRhfVASNk7GN6yFiifRcwnCo2eognnZFhH4aCebncTtBvsoSHF6oc",
  "key18": "5HhM1QF4Js4yTeXRuuEwJuEf419Ket19SQkqwCGUGsZyEd4DHYLGMv1xPVSXjuEpKkuYDNn2dVHyGKRcmBsGx1Qq",
  "key19": "3SHsQUaotR2mwm1VXV3yH3XQXoiDMsiF6mz35FBiW7DBhkEbTnSLVhhCrtRbhaXVXct9p2tAz9z9JFDii8NLi2Bk",
  "key20": "4uwS7SBqmT3k8qwqHGga2aoxJCRVfVdhXGFbqdSzpcjfVP7AzYeqY4e5W79i9WVBFzpB8t2xLQ2yBXY543zycPG6",
  "key21": "5UiubbLrnpCGaa2DrC2bY3garyaFP1Ch2nPQdFctEvY5LRzYyGP7xVBcvCYTsP3DYmTP2VV7PrhbU2jvhH3jhs4M",
  "key22": "312BDr3YViW82v7xDdv9d2wW3DRWuwg6wfcEkgQU9mpP4eKX2k88Fw1qaK8Qep6dHbBVfHYKxZANxEX53VB6vufN",
  "key23": "3yKpANToNPpKvWMrj3cHQTKSjCZT6pBbD3pvvJWHpnXpTiCYKZey3NvzygxmJxMe5mMTcKrDr5qvSeLtZZTKFPCk",
  "key24": "2Se5pxLX8CLonhRdcfqWKpQ126LW4MFFHi5MqH4vuL8twtaXdYwUVam5t75Q7TksCRSd9rSos38qAKSy9MwfWUrb",
  "key25": "5yScd1NwWjbMqnhWC2xtJrES8skTZVfVPpA4aKGBnUhCvU6EEwbFSBzUSTssDZpUyQkC68k3LrAtxav6bbCWVate",
  "key26": "5rbxwBadjNyKgb9TA2MVPBocDfreYK3TmR59FPWAWZLiUkx39vK6bMJPvVrx7Ee62RykhKVwbPQMGnQxvmpEkZcj",
  "key27": "3bXtvwQPvRdZXUtfMNbL4jVCDodRy9Efp8xxXgUnJcpSnWABrfKTJfNkUScwQZtw8WBCHQ7mCyRmpHM7Rp3ZnCo3",
  "key28": "5FTyqjdvCPGxG4oKZbWD3PcQPrtfNjLHrqdAKeKmiKfHjiZkX91YVUBk4pcJJefuw3eD9qcahvLBbxko9R3grVCH",
  "key29": "5z3NzmNa6qTZMX3xjEe5hmJzQyPkEoRCGTquYxWRbQhHfKMGN15xtLW8VUit2GkiUECSPCH2QJPg1WUTdQ4jnxY4",
  "key30": "5nniNqX62AfdB2xtdT9eGrwdyhfbYBpTzEMnCncuYNUhP5sbjBStSvREHTRXLCpobEiqoxvc4QwAaFN1ntp1Ykad",
  "key31": "5tfk3pxESKv5Vf5ThoCoqDj3Euqq36o69BWmLjgGnbsGwBDnxzEp1xx9TVFtjNAV2Bu4hUVQtQc9F8hFbBcxfPhX",
  "key32": "224xrdTFacwHnd5XugNDfQFUnTT27DTNtwWh8kP2fESHhwjxUTSdQCbu379ECZGT7M88H1R9xFJgH328KbZDoXrR",
  "key33": "KLN5frKPtV1Ueer9HbqopiBsfxaDoVV3YBLFkmycXXp13rLmL8whXjMAQbUEoJ8p2xCLCkY7T6eKV1Q7Y8nyR94",
  "key34": "2m1xf9JJjTtc84YV5aSCoDb5Eyw42nAV7arjzYdod9k3pUZbfiaHpaskg3x1v1fVBcTGoik46sxqsBzBQow4pyNx",
  "key35": "3yHQyi6dsHvpRJ1tE59pZn9FA82ChQUWwZMF8YtcdtvE9mj7gnHQcTXPrHy1qHNbXgkQDrKt8aZV1QnQEaTGyEbK",
  "key36": "2YX7YbfxBqqAsWoWMPR8Us2kHyJ7LVJkrKqKDzwUr71eZPASDupyTWvqtyL6wfBoUe4UA78Q6Pq39yd9xiXJuWfe",
  "key37": "5TeLJFtqvYajaT3F8Qxg7fyWM5TdGFMQZFTwJ2KWaiNtddeZSNfvtBLBjgoWjsRzTB4WzyjFDU2N2z2Pkyo8dhem",
  "key38": "cidv8sn2QTqJF26EqTgboMG4Un2zMGamLQzx7byYn3R3tLN2MEpH5B24fHEV4ZMJzqvbrthzwVmqPbpGtixdJQq",
  "key39": "4EzjVX6L5xej24EcscPLtdjVUYHEZagbrfH9yJcBDQXSotujae4XAKNzCp4xzVV6BFSDEa8pFYBs69BoLzfYRmp1",
  "key40": "36ibvHtrK2VTZNPbmgxLiYnz8Kjapac6sDCBvQHJ1jWNtUTBUHnnfSfSKF7YXmFJwyVuAHdLf83Emo4KSm1KYN2M"
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
