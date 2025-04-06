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
    "2nMSP5sUudCcEZLJRAQrDeV5pd22r5NM61nAFjaKqLdCrz7drcnzmG39BepuckP4cFA4yspYApG5UCQN2kWY5qYZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hsx1HEzfVwH9zrhxCedeo1qWku8niAQeiniu7H2zm88TiZzsmSanjQRp9uwGBVoLgV9QNC9v5siT2gR1qGmKeEX",
  "key1": "5bqa51wWsPV2mH1yc9vSZRwGMMtu2Pec5f2RzVogu5uYknoTgrvMRkRbi2eCQ2o4A8WqSrgxZ7fSJM14jVcCUFMZ",
  "key2": "3iSf6KA1ZapBeN2xy1GFm838qr911bvXeivcAGFSy7YDSqpTJdGNmR6wiCapVLoUWEbxeqBbN52Z4S7yGLSH5p6E",
  "key3": "5EUjVjVRRJVS3Z8oCVo8BfNbWWxBpR8diDwbXR8NKtDcgiT4PNk8gA8hRQqqfRyquUUTiYmRfbvx2UEZ7RVyHxNV",
  "key4": "51c6fcEv8NDQJSfDYffcTnineN2s1gR3M6zHrqQsp2cGNR6zZeY9FDRQgw5pbrbcmJcJqB9i6qxRnJ7oBMqXLS3C",
  "key5": "2pZm8Dv7bwpRXPStNP4fkM2BbW6fMyqiXyutgxrfLVgThkf87V1TeQZB3bdG3bWLsefTKrXXZ6mWT12dQauk4GPi",
  "key6": "23hrYYdn13J62wAGDe9Lq5ksQN96CWy4BjrhiVmNYB2cnEfQRCca2pcda22urEQk5Qdin5fEghAL2CYbFzCiTDRH",
  "key7": "4c6EsJiPwJeqQVMhW9m4Fq8e1CrviKQ8rWqvcP6vDFi9b6gc8PJQ7hP2GFjnSex6GjKJ3et7MP4SChFafx1QU1Qo",
  "key8": "3Ab2JpLwhHjV8eGeM6EJ7ZM58EgkpreKYaKveJ6uhezq1JEzTWrXy2EMUPP7xAreKsWWztZ6sFof5bncC4uetwMX",
  "key9": "2vyNSi7yRuMXL9dFJBTAVB1gjDJKSvVXZVCgEuSMMQ4PqHcnANghSRAXpr9hdrGx93qSHFo4D5hHNqxAE1DQN1Li",
  "key10": "4FvRsyZtFNydfqWynUE7Kh8mFf3mRiXYuskRjnxNUaXmhVVaia4cKQjvzSvfzGXxLmvSEHwBqyc9tz8KUrtHFqfH",
  "key11": "67Aes42KJ7jaHYGESPQLnsMq1Y7364pJCDJ5HFacoBZyBAN4sAQWq1j8TdnqrDpgkaKSq2k18jceU63sQoaoNFcY",
  "key12": "4yB3ttPbNr132TWTk249AUAxQHRKJn1d9U6owCjBtSpmF1UpeZUw3LRWHHxLpQo756ThRhQm2HiE5HqLDo8dPtga",
  "key13": "2GeHJagc3TWiL33xBJr5jgnzow8MhkhmVHbXvjL5npEaHR6drzyqc8RMyEw4HFKRjYe4Szrme1EgY9dYocxoRjT8",
  "key14": "5wKMFKFLKhpLu3jTA4WLbwAUC9jHc3iNLSk7e9CfX82LCfj5ByipQBHqtHgwwQV9WcdmbV6BZb7oe2AwDbpk9D6u",
  "key15": "2hgVcGCL43A7kPPbxKbW2w5GdjgxibdRrVNfHidrcTUmLoGSntG5XpgXyaXrhGotKCbY1oC6PpVmEE3ayeCotrbb",
  "key16": "2TTppy8ta1rkgSi9a8T88T1AXFg8QTtbww9BZK5MnsXPiB42zN9Ud92BSyQsFCvyf8NQWnixL1McXNN3Bc98ibfD",
  "key17": "2icCLNYBcqZX6vGGPxaFGmsAKKrdXDNy8anxESdDHdK68Nv7imrHxxfUENHDyrJKgV4TnGACMThCeVGGNyvTDspa",
  "key18": "59LkCCUoy89tHisdgeBYLjvpEPA4D1R63yFgMUyFDLNwyhfz3KCEfmukXtM5xGaJfiXm8ZNGFm2AJKGEZEaTrwyN",
  "key19": "47GcCYuVoDPJd9taNh7oqv8xVq1tfeE3Eh4HsuqXc1ZkGmsjdNWUjVryNCPewGqt3XAJnDG9UkdjtusFubMxwkoi",
  "key20": "3mxoVmbF3J6CBsUTV4GuA1288z1ww25fsfiHSHxtV3uLSkFBeX7A8dkmZrUawXNP4vcmGKtqrdg4bBGoxXvSwA4w",
  "key21": "4re3HwTmvWJh8TWsTvbAJzEvewHzr4eaqqHAqw4acHTJcXkjEhxpiAd8vH3Jzc91GqzcLz8fjYipZs4DpRSGd2kA",
  "key22": "3mHUcQqCwdnXXKJkx5bf5ZA4FmbfjgenNmpkdAoynEgQ6hRyoYY5cHYQfpVEpaQMFYApfBUdHuP3UaPvUVYebsP6",
  "key23": "4WJiUbqH3jW1FknitGgiYM2Y7G8QwyaipZEn1t4EYyz8cWEgwJM8w922La9BbR1M1bZcziYskgGETPQXR345Tw3x",
  "key24": "HorAaZAYo4Bvp4yGZQd9Sdh8JjqWfiWFHkUkGniBjcPHRtdoiFLgRBwzwTNGcfCdURdTezrSR9xnLYNUck8ttH2",
  "key25": "33jdvdETo5TbGzDKLFWy9Svuv3kJrdWbupTFmPTCDMJShdf7tZbdz1MbUxTjfYoK9oHrSSaatCE9AU9WiyVRTkZ5",
  "key26": "2mQNJvFBxZMLWY2MTm4BNXxaizhofgAM2Q1EDKYrzqjhJJBZKzmHZbPxhXNZMpYydZV2AEWFZJ1r5vjPebin1GWh",
  "key27": "3RurFkpXzVTyp4YPnw8koSmBLYDzawUWeHwgxTTDNdb1Y6LkfyfBzeEpCuvhVPtbz6FHWbQGdyNLPJqaD2XmUYyQ",
  "key28": "4n41PTWLU1oAtFN2d3dH8D5rg6Hy366y9beXtTScugjsdbmaa69YZBVzFkgqYLn36i2SaEPb28vSjc5X3CpU2RcB",
  "key29": "2bdi12NwKYmiiAbo1bvtA2CyzHj2Zykj6495M1B1aCs1WSsUP5hUEXKrwHZEVSTHdFXmLps9TQcGT6E8kxYwhKTx",
  "key30": "hazFPQ1HwpkpBvWs7VP5EWdXgA3PruK48TxyG6AZx9b78369mHymLpzrnJLvzxK4rVE4WQxxjAxZdG5KjEx2AU8",
  "key31": "5W8vv7nxj4pNVUd3dvsFqhXY4pyLWEnBvyYvz8m6S23XijgoGECNMhbbTxN3r1m3KYVaj8ST4DKn2gtAgndFdNWA",
  "key32": "4a6EbiiBjaeKFiUf6CBBLbn7Z1iy9oWv4kBkK9ZnMkrzNTCEURUzhcr3mWe1RpQMp5hCQnrUNY5QWxtLJKuR4jQj",
  "key33": "4d4zY1iPy6zHaFjcWX6QNN7L6wRt3GoQeA4AAJf9CELk9YmMVMXhMX9KeHFqAMfm6kAjbJs6tRNcHGadsmYZXhP",
  "key34": "4hzFmQX9heWnwL52XdanD7zyFHzSWiVrsamDvFKE2EMyzi6sXVSsNx3x6TjCM1E6o8CPU6iVDdpveuxGnAftRtZ9",
  "key35": "3x5Vx6zqrCqysNjhpofUWyzEWTcdafFELScrhNXSAZ8FiACNSXmYDLsVqrdJQmEGXyAQ2hV1LueoMEGiPM3T7DSt",
  "key36": "4GeQgCVE47DcgBbS4XxugyZ56nX7LpDTxJbT9PeHTiUMcTyGhFdRiUQxFP11Dwa8BNvGTQ4m7dEriWkAaWieebPt",
  "key37": "2DpJj68yYkqcPFLJYxVopvYpJXhmhzanh9q8ztkMYR5jZi7d4sXjZTysUXEJ5m6CbjBgneFjnqZ1QMKVwmnV4XgC",
  "key38": "2314siiTyyYVfkXbwNU3VdBPr8xsccc3H6wGyiANDcwzcXBtf6c3sraS4iySxNjR1bJGS96ZuBaSoifm9pLKUx1D",
  "key39": "4xEvrU5JpDHzw4XpWcLyAhctNnmFhERoBeyBQrEJQfW6UHfzJAHYbekTYF48pVQuMXFEAkVs3tfEuUDAsfB1mFr5",
  "key40": "2dkdcxG84qy3XWCZYKUEUadvWeRdgy7o8tFJVZxbiU3wqFg1nEGcxPvQ6RXLkjT4hzSBA3yEpaLuWFgR3ajtrATT",
  "key41": "5qVH3X6BDNfZQzVYdH9GJm268vnxZBJJvaVRYprP7EeiDGvbPVdzvEvT6b5KFYCw7o3ozxp32gSedA2j8sVP8rTQ",
  "key42": "41f5KsSwHAccT7ao9koBkbfegzhZRzU4qtCLzHrsu2YMiEVwg25R6g7kpgGgAbYc9gzuRFgSqHVzoF6iC3W6yHgX",
  "key43": "3EoTCKiyaJjfv9CSxyKPMfWdsyitDQd7XmHGSWXA9VdqEMoom9snKNLwT4CGyV7Hj17FsFa2EdDmyf8vRr9bhhdV",
  "key44": "5GWhassHaa3K8n3DzDH2bgoR6mmwQeXZyVSiPv8riereiHAr2nnuSAviujaQT95iGK1r6jY6NcsaL7Bycw2Jhm9z",
  "key45": "3Jn2LcEfAwHYtCwqaH1tr3WNQvS3x6gZvJWQ7UuSxvLrAty47UTsbZcBLp1ERBhhhBH3CByKHMtNyX2vLciPdcyy",
  "key46": "7EoiALxYo5Dh99QCrs3CojxaQnxerUF4SqnFcygbf68CR196oKr5gULSrSR3NP9o9HQKvQqLp4Us7tJ2NnpxNbt",
  "key47": "2Ta23bhWYPsFx8EivLNwkdR32pJEyq8E53yVMZhVjFvfkWwJLrnpGK8pfMf8NwDaaVifXjSqbDx1KrSWBEGJaRPN",
  "key48": "3CmmFUVnjzD8fhCEYh7WMh4gpPB251TQkBPqTRHpWvWnbTXbbi2QWmgqmvE6FunTFqvaS98bnejYkwgu4fg6jmrb"
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
