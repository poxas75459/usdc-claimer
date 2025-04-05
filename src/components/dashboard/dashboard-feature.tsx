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
    "6kxPMnaDPa2wNgGrvXiL6aV6QqUzFX3ibsSUVPKVF7NGKDq6u2rKW49pf8a9FZcdvP2Mg7SkU1Z4224LPeNaZax"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22PVBnCqbfCZZ3xwWjqqYxDpujQhBpc4EssiBUTZKQNypGxGts4C4w6ajArEfjPk5Dv24wNichaP1sqd3bgrfaV4",
  "key1": "52gSdPvXVgL4GLFPk8CiKHWuZykcVz8TzWuyRhdPE9JDFCWVdeTuVi9vQMm2ExVuaCiBcm571gNKLy3AohTzfXNR",
  "key2": "TG6M9ZcPJStWngcPBbkkyjSdvXb6kmPt7UKkquCRwbtrRFeZmWE43KEnkfY1s5WDx5U8fpv65kJX6PpgvXDV5no",
  "key3": "4urhfxK2ZJ8Uy512vhik9BR5a2NYwap1Sn3WENm6zeerP4XwV39XNFhv76CU8sgQD43vZ6nRHDm2aPVnMwDxPBkg",
  "key4": "5EYVDV2sQEWLZSBbuYsf2ZYYiYKbqyyk8pXV7t72roirNoYCFkoRXKVX5uPjG61EEV8QBzAuHjToFznUQqfY9Svw",
  "key5": "3nymkPjjomew4uSfM66VNfhrgKs4WaMLmmpwA77S5anuevV4PFEJFiKHcj1sZS2MYXXD8eLoK49ffhbtzRRzhQvF",
  "key6": "2vjnCaYgjGmkmbjNN95exViZ7icVGmze5W35P14X1URS7RPrNTNJrf1k5aUxZNkNPYTfErTq1bf9FsBmiGVxMFBn",
  "key7": "6PpTt59vMLhUQV9iTSeBjxMUZNzdbgPjCBETfrhSZNfAxUg8MBeSB8TbFGF1VFPLLwpF1YqhF8ynSdcwYR6XzML",
  "key8": "2PMyNoXwt1SQu7e7PP6iizWVY2Ak4pniy7BF9KuZwRcHYzS4B7FDpqpTZzHUvbymGKdGNZZHwanV9y51ZJnJXajD",
  "key9": "68gJYvbmXDXyf62HuUNz2UjuM3tHRqt2fjDDuY9syhVhjwoqED9hXPhg6yK2qs7PVKP9sVppqA5gEnrc2QSm6xG",
  "key10": "47kdRZ6Dewz1wraNRCAxiK9SdWoDdbLxriqPZo8fhi2aH412PpM2jxuHEUtMPFrRihnTxqtcZvQzpcgrYHfv1MVa",
  "key11": "5azmxSVxPahc31yWKLgQKbPJswhNo2vXtaEdMujsupBjCt1KDKniwNgc8v2Kejc1SVrfTW7qEuBWJBB4dDzsCdTi",
  "key12": "5C3JxNfGDSgkbpekXssXAK3cvdpwM8rqbELUy6S5cDsSC89Ae5Ry3YzMuLkpshMir1b7FpofKGyA3i1Zw1EN59ef",
  "key13": "Xq3UMv9zsDV3G3zhSBSopdBY1ZcaZoSXsXrS8RhVNqXjMbsRvbw2g4jC1pXUp57aGYA6KUio5DwnRMxJpKx2fro",
  "key14": "2VgL7P9detBg85nL961zHJ6Q9UYnBS8HE6KKfhxN9eaas3M2rFRRKjBgqAKFhMVsQedFVow7REU8Z5Y98rcaRBuy",
  "key15": "2hBa1oskGLC9sZGdjCL3hejZ9CQHqH71sZxBCXB2fEWnqGHS5M3q1aCGc8mfgMqGmWthWdThEbxmTo6D2EhHbAUN",
  "key16": "i8gUhj33Cnt5UeqMPJYq5Doz6AzEXk32AHeEPHMZeYcqxegDUzM6Tn2mYmYS2LbjhzME7XQmbD2szAbWRMb1sAi",
  "key17": "4fRM8yvBCfiSSUXohAxuesSPnWvyJJR6iAbfRB1UuPYotSMuw7Fi8RRLzUhQueEC5FCqCsBtRzFYktgCasyvk7TL",
  "key18": "3ooRXBE46yqV3dfb8UbFBpJKH5HmdBnGq1jdgt8cnqdKW6roJi7jneVJz3prxzYzVQhJSGkVWMgRx27TdVLBttAr",
  "key19": "5NqT4WWRU4YkT24RvpxynHEmnXFmWnRdtK5rRjeAwHEbr5ZdUYKs34B6bJW9c8Bc9vgc5pJtUpaNgin5VqgWFyyd",
  "key20": "6XdrGWf9oCnSJf9mnRbJZeRECdi7LAEncDMnPy2NscsJXAbTJZ4DB3a7KWfbfkVHwunrsTJYX37r2tMhJTZxto7",
  "key21": "3mwCPWG4eEAFpej9WJ6tyMiugAU5NwgHgdAaxp7mZRZm48zKp6GpgwbChUoDWCJHADbP4goG1MRHcedob2ZYm4rc",
  "key22": "5esYyoUaiLC8Pt35FkmVtwXCjvoJvzXnsDipx7PqYndZiDj5DCHjzuCJSpji3vrBnTHMCUDxUmaxpwXMeZBKedgt",
  "key23": "4G4PnXVvrDCEHtCt9t3JBDQnQiPbAT6Br62AaTRv7F9PVSGMKX8coPy6ZX8ygXLAJoSZ44VJnZfREToZnxNXZ6yN",
  "key24": "9g8uuhW6XkxbMmPruqiSdveAFttNHJFeFcf46hTMG2udckCeGofJutpAcTgB5Eip4C4L7oVcAH9PuWC7y2xcwMD",
  "key25": "46MpNckJYdT5nPJ9URbrYaT8cS9e4oEk8e19rTRocS2TNXCNukoktnsu6FXcN6rXBDnSNCLojB7JvCbJTRMFaiow",
  "key26": "4paHGNmB1iMyPyvyT7WeXpdETMNneV6vB5uP6vna3QeLSqFS7djqozHnhdqYPxpuEurcPTshXWNQDUbkLjqXvBt5",
  "key27": "mnmwFGUKKeR6aaxhWqbeohUzkZHcBsZHhmajwCsxGwFaLY13CbJnC2yG3KWHpUa23tCYX3LnCKi9fus1VJ7zfpv",
  "key28": "mGX4UK7kJUAdeSw3RS4D8tWtbFxzMVP3cKforVWNzyD533sStehxxDGMxqsEHAEaiUGRC36zPprCfxFjkuh5cnd",
  "key29": "wcrizK8WuGxzDctuS172FwMptyX847kZEYDamDQiwvTGFuCTw8yoGYWmbD5F7R7LTYUWbYub18UHVs7nnVRhRmQ",
  "key30": "CDK4zRT36z1jEX8wBJv9sdMvQ2yfK8ycM1cYuBpYoXW1sMZoeMD6cC2nLnxYbrUmvTBXLsbcJtStDcKUD3h2RXy",
  "key31": "62k5ag9PANMZ9asyZ28mQGRh8agXqVcP3qKgwkumB7g4aGuQi4hmx8Y4XX4AB6UGQno8z4p8Uq1fsoH8pYCpqhSP",
  "key32": "3fjB9dnrc8gj3UaJpnDfnjdqYUznYUwZeyRQZvJYBAJMbAFpjqV6PCG3gnc9beaQHzAnc9hsZXT9TfWxjX938ugt",
  "key33": "5pQEz4zjK6Pj8aHbtqPC1kj5TFkC3ise3xpofhJcvU8bvrtqDcfCZjsSwJjfKeKt2nexEhnUfyfxT9XwYGi7zUFF",
  "key34": "3w1ncgApBJqikeyfVCS3oVD79orKzEAbcFaW6uMbWXDZT5FPmm5DaH9BggzcFJY8VWDqKXdih7RsTGcrx3tYZ7Ju",
  "key35": "tbKQFMEZniHwX3dieyDUfrQ5fZXuRrxGeiN5aEMPwWes4hJZ3puacrbnwBmztYwTCCD5Mv4e34v2JgabPYTJDpm",
  "key36": "5d9hXbAouLLZy1U2XeTbp7tobbeybAVn1vcaoF4v2RDTeSutcrAE4cHyGipMApNGT8VpUeKNRc7PVTx7AaAq4xs5",
  "key37": "3qqPywaeX6PArnPyZHwME83xUbtjENC8oTLisBqWYCM6FQ8gavAn5F2eqM7evSkYeGzGWbbkB4UovxgaM1ZiGR8S",
  "key38": "2VthzASoHXHaHAXeWPotkxtC7usuF4LuqXEEMrbR4CZqDKsMoiwBL5FsT8tSCvLrSDjG9JNG4XL2jHGR8wzstEPq",
  "key39": "3CPehKrUAixXRfQLq5VNe9RTY3MT2XS3g3bn3is68G5WKSZCGD8AdqZik5hnbHfZvJcxUqqv1StTfDQxL8sjffa",
  "key40": "4Scn4U7ojQxt61inWNi2VEb9fPkxK2VNxUuxqN6YMFs422auMSiccv4DQGwWtNosJfKKqTcfdKfcCcpqYJVt8KtJ",
  "key41": "5gYS4vi8cYnyA4v3pGW2FCYV9MHorhkFvouB31RHQZ6CCNUJFWNJiJp3hi9qyFvXAbEv9s7Ee49PtbHup8RtTBRx",
  "key42": "nqMxYmaoCxw4Ty8X4rcYoNcZ71rozhoYXPYCjgz3DcaEdzPkBp2Gv4ePJCJSWngg4qi5gTtAdbp1vWjucT1Sbww",
  "key43": "5pFqc3aZM8cpUbb9vfZEuQMxBUFUmmUhA3yZEbc5QUv1cn7LPdAuGuhpY1sFypB5yi2ZLzpFpL6dQRp6bqNSRk5C",
  "key44": "2m851b7ZY8vtHqePcQchV5xwtKYPDtFdWBZiL6UqZHG89EaWCXq2YrTMXYkTWkMwwbrVHN1ymKiKtoq34QDUJWFZ",
  "key45": "36D44JbaRtozvdAGQCeBGcMnBpqUgXBJDpGtyiMgfgnouAPSt1AysJCCzp7v816k49b2HVctpojJaijqFkmJ4RWh"
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
