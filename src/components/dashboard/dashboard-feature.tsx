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
    "4k5hniwFEekpPzNnaihHsxV9bAWn9aUiVWnBty1b61Z5wvPU5usFP8NfibYh5tAU2i9Am2AKz32cwYr7raBksaAU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "FcU2EahVneegD4jVCjf3k3HrZoUbfDgoAXQP33arr4WgCrB6UYx8CkTdTAQefTw41Nw42pKpMN8TAqqAgR25ds9",
  "key1": "39178T82JcAuYaoYiZavWeqZejY3ztcoHFaN1iTg8CUcoQtPtNSimhxsNdTwrNcSFRyJWDrPFbSjnPLvFaqDfxYr",
  "key2": "3bHM3PCX5s8dxGfuY2XDoFkDHJowLyGRayFxEaPvXdFftNMo2iqbYTATEw7mKDkhTc4ZzaS6QjUqYMqpht4vHTSE",
  "key3": "3eV8CKEyuHxTnrEdtrVVnXBQ1jsczkXzpqTq5W7svNXLp82yjCJn9uXXcU8t2A2yRXLLv3n7kiUNh7z2EEbzBAVz",
  "key4": "5bCAcLjFF97um9dtUJmb61bzVvP1YGin4TtmnLYwA2TYT7pwYZfvL1imPNn7PtLWU49t4Q5Aq4WeyDBHEgtiCFd2",
  "key5": "33EZ5xPXm2t3WrCq9tXtt7piqPk5D1GCXFVKeYWLPEQ7Xm6KUZE3ZoMmssb7LERLNcNHDNAiEGax6aKUnKgmwPdt",
  "key6": "47847ENgTz6oRxG8QNGYG3VTgN7AwwfiHrzw8wxZ8q4nv78ESAHpEnpxYdLp8Hqta9tPYtwWsL3ELtWRfdK1gp1a",
  "key7": "a8b5pi16WfDAtj2QWhX7UzdtgPnoDkR6nYz7H1GK3zXKCURiQW4PP8jp4xpi2KsDg9MeaEg7EZc44mRHDcuiodM",
  "key8": "5MS54szLGT1fZUzwPEKUS4g3ZoQ3MNhugqWaCaWPcfM2jFkG5PBe1vpP3mZEDdJCpxVyW1YX75AxpgHn77TfLi8v",
  "key9": "4wcyopaga4Hc3JwHSoWkaxsrU9yDymsbE5nm4jNSuQYWmFnuUsz5fi5Xp8yhZTQRepKMPGBfnrr766SabmBrq8aW",
  "key10": "2AwbVkS48bX3W7Za9Lwi8h4qMC86N86HFLrboBPrAM65vifdiWvqcSWsDD5NuRciCjfp7maEkn4NpARjD9NqWZX",
  "key11": "2DMnS5X9TqgQuFfGtdZtr55S2EX1JwVf5goMHuVbvxGb6rYru7honX2TihZhSAqSfidZLE1Q2TNHFgfHFv5ZRpWE",
  "key12": "5fYdfSGd8LMkzqiE87owFQvTgRJwjtSS5g3hJ4rDfBSFSXd9U5rU3JsXRJpgA8tBpjiaVgtWkWLB4nWHSdGTvgix",
  "key13": "2hbH1QR4edFNgPL7wYN1cbbygdT4QcqCqKVL5qmdVsWJCeHpD5xC5A9t5AZ1UFW3g8nRoz1dUt4PCKujAU7naSs2",
  "key14": "4KBMsenGBs11tNe9bV5R2GBazEouBesXTEQBqYD9kMG1NjDJ8rvUGe2gNk2tX86mhrwrabjhiajZTeH9MFw12fDL",
  "key15": "3QKgmfpE9FjYxWVWWnEnEVQfxmySFVeWdwjXiro4dDHpujCciCCGbDBvXUBf5ymnDhriYUKkRTRFVbG9Ab2WZza5",
  "key16": "41oYAZejQWg9Pp55RVeHJbdnQhKoPyAFSvKTohdFxSgU7wYGMGPaabMysoK68QwyL8xLSGExsrg1wS61GD71Ainu",
  "key17": "5vpYZFEjdYddfx8JZ3xn5jiHcXisuLw8qGsnYZRKVT8vkeeEDEAeLEBmeuce2Q5rsc8rnev9SvH2fPtnz88RJr94",
  "key18": "2VNiQLvstx8vYJHdJxdtc6Xu6NZUHYu35G7DQyvBFzgYfjMZ9avjYuE2BQfNPBxkaps5X9rC52bmHkytJ26cMrDd",
  "key19": "3rXct8cZnPDhTGieRHFGx42J5z4utN7FJxNT9Qhomv3VNGCrx5HMLETDTYqCKBrecvQTQ3rhKoBKUjDCgVYUUnSD",
  "key20": "4fk9sdBz4QKzqNNi6a96fxjax5raiuPWeCogVMik6tccYxKwBuRkzz72FJaX8abHnsC4BLPgkQDVnBSbqJVKyPtc",
  "key21": "pwQBCrk8XWDtiPJcSifW7djUma97d5CefNWEHZuRjhGqac9AVwQQaaKe5rkWnYvvmi3RePtfeCinvcPdAPCouRW",
  "key22": "4LUyjaHfa7xKTcXfZzJn3AdicFksziJctXkfagescAjZmzfPkdmYZ2jcdzb9NjSLp1AAg4vp55bpt6wR6Qgg8tjC",
  "key23": "2R1SrXihXGBhvjcvSNmWb4sysmDrn5dmgroNTwEPbizxH4z5s9UyWruLwKRkrA8kxcsjFKHB5oyBGUYCnEdUmsT7",
  "key24": "QAT1ZDBkTSnW84mbME6JU1yGr5fdTV7hGkrysv5ZYo4NoQfCz5xFhKiDPR8Nm6NNektzh5C4NfZTqg5dwdyAJGZ",
  "key25": "5UQtt8okhijiHt3JUwnp85ytDTumjxCKvi5gUPrsLTRAoWcn6HMZTZgEH3JebE2WWnXn4KqgoK7v88dhakx3VAQH",
  "key26": "RTTXnaNTX8aKGL6XopUjqsgBRC8HpGokT5bnHhqi8uCZS1wRY6BiJqdATSWRuTpoW9r2CpBuTw9zQ73m5wTMyNW",
  "key27": "3k3rsnLEnsUvchnr4pJJZpXwYCoUHkmMxWAkhUVAxUaVkXzWm8suTPACHRJtBF6aqPkRjBQ8MGc3vPXaafRCCVXN",
  "key28": "3665yN2RdzXktsFSQ2P7pb5MYgMfc4FjuuXyeojPouP3PuKRHtsNjbkZzR5yUXxGNusDRxMuPxPuXRNFGLJbbrYW",
  "key29": "fJ9KJqTBzqAKzbhCGXNrmrHKn5dB8Uf7c6V5aLbTi1iiNM9Wwsssqby2f5ncokFJYFu6KpitKm3sUrAoog1vmiQ",
  "key30": "mJde8xbZ7d9sZrQjBMfPBXAWoaRy6HUx57ZEMDCuj7v84tFuEin1VLAQNjZ9w4W9JrAna5FevsKZwKVSCGxxUq6",
  "key31": "5MHvpaB2PhP4syfps4QG7FeqRLYY3umGsLtkEXyk9Hw2Zq7pqoc2r4RyKzCkUAQ9tZVzPJZ9XDobp7HPQv33Aa3w",
  "key32": "S6VHLQAA4cxZSDCCukpgxqwcsUbEE3HPdFGzJGqx53XNN6v8JNbkhBKPZA9Khdum2NFByhTniGS45izwd18heDB",
  "key33": "3QnekfeqzibSTpsqR4soaRxbYGfmHGGpoWPKTYDxTCHCL1DKTPbMmfomSiDR9naZFMJAMcozkzPYyNsVoR9CXfcB",
  "key34": "5rEheKmQAKT5vUyi217DVb34N8v846r1pJw4yovdmHRD8UgMQS6x2McLr2EDo3s4U2G4yas9mqTCTjdboL5DhVte",
  "key35": "d847MJ5wQgZd9kXXFcTsU2o1mq3pcncVtHeA2KwtXCX1ikSgiWopQ55EULjH1X3DSZXmEFBUMc5kvS3MdpRpLeu",
  "key36": "2EaM4moZkSC4DJ83wD58NZm5ro6y4vhLd4ndVHbQ5dWFe6S8vzgfSwysm5Q7iRsEWXB1vU5VfjiA3LzRCERUYyR9",
  "key37": "5Jweb75JrMvGm9RE17A2dwSCFLRiiDepSRfbgihGeux74YSTPMBix4pczvaN1qNs8w4XkRayTjK6nquKm99HKpEj",
  "key38": "5E1izpspi4mcwQLiNkjCeFPmcCCmUxRc8xLDERK5APNaUERiao54LLaAVRHVEkNN9GDD7PtuhZfQ8WU9QYe7Qn94",
  "key39": "28a4gX9eNvBwEVCC2oE1wLj6g8D1gP3jzAA76QftoThiTVyFCtW9MWYLb6DwAnsAxkWjBCQtPCs5KSG1JpTWXV6s",
  "key40": "4zGwG9ioKE5fsw9DaGvKnFBhSUMdT8aTxUs6eU76sNGEbLi4nkw7izforW9J7TJWB6RYWoWBivhd8skgTzroyw3A"
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
