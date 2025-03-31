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
    "42skCiVfhaBbJMGexq27j3hJspuaUkFCEwrUYc1MJxFNZefSmLuB3zJkR4MHmTqLNrVcXdN7mYeGXVBetRStULVP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5DP1Bp21HPuYeWXLndxyduxDWLXRp24VPiX4psuYdKLsbyPf1TNGQFHYBh6svP9zc7xdvrnXvMZjLPgs5mUzFktb",
  "key1": "2ReXtPYc8PRMoYRFrkoZLECLEhs34H12naYEcR7rDqMen4LNQgU4nWaEwndCkBRR1JPa9dWNU93jQ2K8jToYYcmo",
  "key2": "detHi26aWAESEyVafLxPqS9JPNUhj3g8dARQXAgVY9moLTcqmJDweUAVcCrgsnD3aGLsnDDAJUpAZPkwfVJcNNt",
  "key3": "3wdSgLD27W2yCdNKTxYWTP8oASsZLorZVWFn6TsfCWsZhG9b5JKBzyMx5wNiy13SBWyFVnjzaTU7wAkFvf97nKqg",
  "key4": "4P8oSiLEujx7BCLyiNEn4W7ZYUgCUm8GbgAgrxDKke1EHSq2SgbpnFJ73caetXXSwJgp3aQzbq7i8Lz6hoT1QCPB",
  "key5": "2MYWtB4ttdXy3acUPHMY8c4k69gTisTvyn33vytx5A4BPDfeWaPgpVaAzop8gfqUHYvZe7XafAA7ddab6bGCBETA",
  "key6": "2TpGn7mk7qrhXtKbyhuinSGaMQrV9bNKMiWoV1SB6LBrhwdeFAcSMaEE8GTxC8uKSLXGuFKKJK4rTQDE6qZgfayH",
  "key7": "hywSwHAcr6Xgf7SZtT17EjmRZ8tZGtwS2vEcv43UmgWiEHhKMk5YCtRToq7QCjQcnUTSNfmgcpAaXvutHtFg21w",
  "key8": "39W42MrXk2j4wDGAs5Aj61afUCR2igLQi6RFNQoovyVaahtEojgPSuzAkbLowZR7Ku9m2aKt7dLJjTGs7bYMN12J",
  "key9": "3REvBBqWrhkDU1JDWUVM9WkQ9w4Asw5i95zYEbunWDEj61DLUvWkLTzWJepKPbeF6aMegcK7vvgWZcCWbTfKD6DS",
  "key10": "3D1kPzMcmsSWqxgwqBxU1kCw1vy93WKqmUE2iF4S2BTxrYwmcCQd3V69JHUJ61hMLs6enSdMUTCAd7a6rUSc4UXf",
  "key11": "5Mh1tjBBZjWvjtbh97mL4VJhoHJH77VYk91QFbdVM2JGcLH23p8b14xNBGo8BWzvnQEcEQVXH7nfETsfE3C7U44j",
  "key12": "nYg3uX6wZmvUAmsBitvtbDUmV88nNAPMPdEZh46jkNzTdw84aDJfWmu7eWDVgH7oCRHD8qaNVsNYJE5TYUEoP4i",
  "key13": "3T6kRszeo984Wp9UPq3riSQSpdkxBPucYLSHftifBUWNQcecMfJvVu2snR9p58hYbthP4RY6nvnELGnPYvN1T1Ev",
  "key14": "2bjy5tHizmbx8shCFsxpxoyLshCqfySqy2WhQmRhngU9g5NqJvSvkjQrqXWHBNAbnmfWGhJWmmPnuW5EFZvdDiV3",
  "key15": "5XpgBAwVHc5MsHUBWskgLCyJcw2jhuC973Jv9ppVNXRPU3DmJhFJPWBjqMiBxnYktowhHsRRKcMe2L9TFfa3gNM6",
  "key16": "4TvRSgAzHYkP3LTVNQESTAV86h4R6aaUghqdDJfD6nS8QAFKkUXZiL5Hb9NujLuJhxEH66h3FNaX3rvs1BsQ9CPk",
  "key17": "wdbazNa5isRh76YrQ6UsEbmvmwNRMRC2k6YXW2WSfBW9P4MiwJ7nraZ2vxfY3shw29YCC89YCip6xS1HSWKhQJA",
  "key18": "JCjC7N5qDELhj22Vky8moKdm4fZdZumaKdgTPk7S82kuM9FqwMMnBX2GChTmrGsHqprqhnEkZtw2VEkYYoMWMFW",
  "key19": "2LpFbCmLTqrnu8TqCvNNuqGZpSBayQ9LVGAUyPMT2J65dcwrarCkq5KsxTyvx5nwCj1Dr7jXL66GymxPcFsiguA4",
  "key20": "3aW6nUwGuFR7qM5iyJjAKdT3GiZnxKnBiLZQvVrUWuwc8SWgeff34STvt7HfUG6BUV3CJQCoYxS7Jsa3jUV1u292",
  "key21": "2Mt9xmwcfCNJjwG46nS2oZuBtwRTxwc6Vi8Hdt2s5G3F47qR7aVPeZaNfjVXh3H4MJEwnWkSEqUAmq64fBUgFTdY",
  "key22": "T7rWAE8uvsdTqVkdqUzfLufaDDuASrGVu7ZL2h9qctPLXgnFQ9vfVJrW91xzzuoGkdJYJYe2oamwRu5cMVavP7h",
  "key23": "28w9bn2VN91Rtpend8tPFCHPszBFYsVrZ7CEXBtwW7PCNBacd4YXMHXAKKA4Fd1mtSrBWxURrPBr97sswYofEm9d",
  "key24": "2WdqEnrxEh3fLQUzjMbLw8pC6Ytfckr3oDwbNvS6bpCSL7mQDUJ95ChE9cTSb5cGY6pxsbocNbcAQkaHNerT5jGi",
  "key25": "BCihdarGCqoSEJsLS8r5xLgL31W2PLhcgiQaKx61zPPJwnHG9BN5DCnrjQnoUwZQSWrwJEVck2XNca4oSFwZrZR",
  "key26": "3DVjk6DrSdxbm7TNFBZbvW9a6jETaQovdCCanoUDtm4wFCyP4hQBpbvVYAkgB41312jnJKdE9UoUw9Vepsx1hksx",
  "key27": "3dSV1BNbrUk7tKRC7oxbTN3zKNBsEB8bgsdgirLoy6fsffWRAQN4bYqEsn8BynLcCL7vUd9npfq8EQyk6T6XrNp3",
  "key28": "32nV9wwjhxBWjcxEgVEADCBWNzj6VasxqdnLvVgDBEPxQ24CrqCcjGpC61nhiJyJeMeRqA3rkHmqmiZHE33QzjDX",
  "key29": "3A3s4Br7EiUKDWoxs9U4QQd2A4NKnwi1UUUGGH7Dpoq6onoqYkuULzVrjrebCQFPT2pam83xnv3LkpP1sU7SBfPJ",
  "key30": "4kWK6w6eXNsXAEerFYV3nWqCbHWv7FfzAA6CsRtjDHUA1tDfAigt7Uqwf4KFNAtnxSGSE32rbhwx9fthq93nQytd",
  "key31": "6yzqb75dWjXRLFXe8sFcTnFX9ufv8j3pT4wsyCNPpsb6WvhkSPZwnRw7gvbGBSpP1QMFxvnN9BQ8Bi5uAnATtCb",
  "key32": "e3hp6ADn4aaFmSo5Md2o9ujRnBhb3VefshSTGnMm9s3frXsFZxB7FEFqHFQQSPCLNGtKMxR42Q2wfMRthhfyx6a",
  "key33": "5ZgCB8Zeq4wrrBSPqthSJXkYGmT3A4CYL4XsViLrvtCHLeHdJumww47Y4zXXrSzBXMKaPs75HSrQEjCepPCSrQQ4",
  "key34": "mG6SCmZHCkGrwuupz3HhBmqiXLKLTmt5v2X1hB15CMTrcd1HcEJ8h2tWuaJxNL3qpSajqdQc6NzwfZa1DKSDJEJ",
  "key35": "45QiuXgbddczEMntKeh2o8HrdRa2mES43u1CEiaPyCpUAWxzHX277WVZHZt66UQpicAezznbksM6i2qhmh2m1agg",
  "key36": "65qnzieC45vTc4nFGLQ3u1oNeWjdu9jG4P8jotSdDmJ3xXyj52jATNYNU5UwU2BaouXJbi3FY7A4jaDCoXZKfNjJ",
  "key37": "2awa7UMi92cex6okuu77xUxZbKX5ffBuNb146xqYJcZfEM2wLZN9EjAi2235WdCWrHskTx6uQZTasemhL2nR5Sni",
  "key38": "2w61a5iLE7RywNUtMeyd7WLgZvECoubfzLof48wxVyDCPqmJrt8BppRS88RbWXDpZkqLTDe6vBGNDL3iUWVhVRCk",
  "key39": "46ggxmDP5nkaMvemkBVc1ev9mba3hyXKvKFuEx3hHNt9Dz9MyEtK8kkpdw3rxnQVWijyANzLSZieSQ2skWCNjZUJ",
  "key40": "4B8noS7vi5xeiooY9Nunv3eyQEdqVSnV1pRsiGmpr1atc74xaJJ5dX3JKHT36qKYRoAd8ADNaHcXSgM1Jgfx45Mw",
  "key41": "rbtnY9uiub7TpBxJM9bjTmykyXuxAzkVvY2RSDPEGrKhrMGiTNvnAaQJHcUPhdGXmc914HEiVWxFkmzSrZnDmLv",
  "key42": "49A1orTs6pwSnSSaSWggGDr72UtqjUjxQiZyHs4bexT8DmoTKiixXnyDg7HpNgPrd82xBgrTzQ4bL8BBWxeXMr5u",
  "key43": "4oVT7jnBvTu7BAuDP723NCxNnG5YL4z2ZEfyTFV7V1fTaEwEu86EoyjfBf25crPUaEXUqKJKfCmqPTfMrcHWbJLW",
  "key44": "3khkkFKHJrndY1Nu4MmZ4SnLtZ1zJw986mY4jL2kaZaHdQPJ2sihkRnm4YxCL9qxvxvKhWfhJxRDrXszzgWg9ZAB",
  "key45": "5jztFGj6SuWgpSzGnY4XFnouANxZjsJnhWEXgv8g3XrcSRbF2vAxYj37kweV9JSC4bbiNu8krNDWU41ZXqzNXVFT"
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
