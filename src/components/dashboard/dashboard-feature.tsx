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
    "5xrReEZDKPZhZzv8rKgWhPvS3jpWkgwRSmTVAx3JfjhT51hrVNxbTgKVx6D5DsrFPpRzpJBVUCs17Jdx9xar4gEL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3G2GbLpqYBdvm1CzyNqdgw2t9X8PWiLsurPtWvXxm2bfY3RvYjLxj9qe7EBfxqu9iVFBfHZ8nsyGkdxLtHAT8qjk",
  "key1": "31pov6KmkieRQRh2HRZGcCLsq8RnrxDNLLBaGJPJkP4e7LxUgLMfpgv1Q5j8jzJsXKfazJNDaoz2c9SXcxYC5XuF",
  "key2": "3wgzGXzFhmQe8PrGo8she6BeRjEYua9AWFMSGxrUTGy27G8SNEyouyCprdKCt296apbdEd7GoiXEoEn2Cz9Q9AMS",
  "key3": "4C4HC8ioFFmkYBQhZs1HcHfiySGAgwjre8XbG9m17SEuXBqHPcddqxXQAiU7UCp7oL3X6zFHq7V1GFhD4qN8VDk6",
  "key4": "4p2WTn2iMdxVPhGjipV8b2qwZzbZQeGnrfp8Hz8W4aHX22XQR6JKDGKbrTrvwC7SuXUZBKBgM9dbT7Z49Xhzdrtz",
  "key5": "4d5wcRMH7eUYDmeHmnJGDq8CFBeWeueGCt1DvN4J7Ycc3PN5yF4vyrTTY1A9iAUCXZVezekpNmHrq4CUwWpsGFz3",
  "key6": "3AU3bgPfk9DVuW9y7kM26nvs67yKf4RSkkEEXdMdrdpgbHT5wMWf4Dn4PZZeYdzdqaKyoz8PskMcNnMxZneQfznu",
  "key7": "5Zv4Q8rGsZxyzXfNJrFmcEmrebUaEP8mA5VupwDq86wfK2Mze2tEWVKwVp7DVArLGkbqhos4CGM3jN2wXdramEb6",
  "key8": "2Bnw5DYSXHCzZhkBXqpcdhLuDtkrVBvujRDKpNzknUU59QAkpAMK58iC7tUii5PZ9M9VmHPB58cB2jaLrAUY2xJY",
  "key9": "2BYteFFCwLTwghjQzxfG9KVLZ3s9MqmLTK8SF6mNd5EwdM7fuCZtUU88SD3xSJjn8uMrV5egkKQ21MJPGgMuM9Yw",
  "key10": "oTT5Virgn1TwgXmyyCJ2cSL4rHugaPV9SPwXeLKD3Kykt2Jwv6awsUij4AegKxrvxNQdjuj7utxY8iVMMUqWAbC",
  "key11": "4xr38wtZPFUSW7YDXekZGCfaq56J2xxVYMBEBDRFpN7uFzCsXsXw57rjNkgRvzHyruuzmVTCwUP4EYJMrdRx488D",
  "key12": "5WTRSRPoWL7U4KGa7e3Ud8YZzbG4VPtZ8Fp3rWuHxppCzuxZDgnZzRgTaNv9RYnmFbjDXD4pcFrXe5umYLxdZ7dh",
  "key13": "5hYw4QZdyJbJn53Kq6D4kXxpi7ys84gewvqq9QgPPxQP77H9tAEK38YiD7ATFrRYjJ2pwB9qKrxiek5PEfyr4LN7",
  "key14": "6bzNF9yA817GkEtNjixRVgmQT8srjT1Fw9dFebsV4JbsB7oTq7w2L1y4wL3Nx4pFTZ9AaphUCw4Sxa648PCLF6z",
  "key15": "4CRgmdoVnBiau2N6NttKrhLgZuM2x2VqWwqBJk6V3t5ByMHoiPNyXhFwYZQRn6pG71u1aG7J2BQRes3pYkZPhfyr",
  "key16": "5D6sZEmF9AFTgebAxh88mVcUHQL49ucpKXmV21J9WMVHVAGyLX6cpVbKrQAhjYviVCxwXrMgkc9QRHP2ULbL35Wm",
  "key17": "3yu7fSiFH1xuMd642VftPQdRdvSSZxqAw3rFr7UEGq955X6yPQ3rsV7nRW41KXuins4QDkkXnPWjiQPrNSqM8RJk",
  "key18": "3fapTzyex1wP6FzpaGwfKx3FVZxGJxSrXFZVGKSrmLFrJGDzscEhyeXY7VZFJoYry9wpQ1ahH9gCUTBdCvrk5EfN",
  "key19": "4HNPM3yqHSTroezWLsnvKB5cuRv4WgHWVvy7HY8QGuqjYbubGajwxDVSARqJRG8SMAEsxnca517EwW5JsarCQN5U",
  "key20": "2aNtAJdHNpQDHitYNX81opeviAkeUbvPDGRWWCsg48hAaPYgTWP9TyG6iFDgKpWdS4XbzXEUn2tsg4FkJ4pChdMp",
  "key21": "3sFyBvhfFKbjBSZy6xFCA3X8PLRMAYWCXzzsPB8fcMHB87NuHuPHRtmrueL1sFZRi1h2w8QhHScJbjcCHNtGfGR",
  "key22": "3woxiz4Dww96ew85ghGG3uwbjBUimgwfgnXQzzP9RB1diAVuTrcuygvY7ruEtpx6NFpZaB8Jw1bfDvYXTuCXWcEa",
  "key23": "56WDfHFhH7XqdLR4abqm93zWsFie7hVsvpCKGsjTHNMLrH4m7TpAa6Kf3MgKEeCpeDSKPaG7h3UNaZyCmq3uLJP",
  "key24": "25Vc138JpVPPDLiPzuv4G46f2SnsAyhEoxvymhdgKbJNcG8EZ1dXsvA3Aw9w2AEYSMGsj37G8FukwfeFFkA4dnbk"
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
