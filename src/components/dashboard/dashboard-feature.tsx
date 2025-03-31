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
    "xu5U9M4mzEDWmiPzkoS6zvXBM52MLigDwHocD6yD8GU7RZmXR4iU2BqMf9zqPkr3gGMGrPC1cBBkCCARHw5vsZW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Va9NVsFF8DYt9MGWUBNm1Xrw6PUSDBwgCSHR1766TUensxB72BmPtqWnsbsg7pZwEenCJiju4qHN1hPmAmSAyyh",
  "key1": "5rAairRbesf2cWG5QmxsKoaiaMCg1kLTUkaSqAtnvsY8gvgYD7HtutAA2TGQB8wHH9KJsz8XE3aCpzeh2DwQ6ZvD",
  "key2": "2f11WECTB2zTwUpDR47FA4Jc7WRXK1Acf2tWJ8a2N4zfjxCEzf3Gj626QLoAp4mukkTFRmtueEtjohu3t9XzMZYq",
  "key3": "Tetsu5nynDuct4LfcLaizRMSz4bycXJB1kYdyrB78wtepzq1hehrsJxmvPxD2nqviCVEL6ba9LBE8kd3HnUNuGr",
  "key4": "2UzQ4a8pbPi9r2yZUAuLFNYfzbZJ5mKFCXRVDLzFhgmnBEUm2saWypF1aC16rt1qDRQEuUpaNY6D8VopM58LHWpx",
  "key5": "5KBX7EtMpwTE28B4iPaJiqiZX9WkYnSLusxcsd7w7YmhBESzt71EEPM1yK6RCMRdkqJ6bwz5HreavyCQQxaocPb1",
  "key6": "ZPYG4aGS39S6PHkUubqYrtZSdHw3BGgjmSJLKcmpwt4pfJ7Wa1Pj7A5S7MQ1FfrMa2hYUsCMm1ZeC5GYiDPEGPS",
  "key7": "5af1PrHJA2RfMRsaSThAA4Nvq5o66GKewsyDNJJ3DLFME12SbB8ZCSX1DDDtErhS3wRMBu3SPk1u97yxgb82MHc7",
  "key8": "28Hz8Wjuocq2LjwP6kz88JTFdtVsT5NH6hcs9WxaM7SqWYQCe3HrdfN7GrXi8kYLaihkb7ZUstpTABoYnifJPuNw",
  "key9": "3wu6GzvgnTgrL855gknGCWBz8tkfi68VGY2VUFgPvHfsJZrFpnd6x2Nof7ncFNzEBbPF1VbDgCQuB429Ls1MVk55",
  "key10": "3ZtdiovTSn5ggA2NL4tC9LNXX7tVKLg8Ah2Q4rMi5vxZ6cy5CS53BL9BMibqZkACW9Eh7zWdgWYKXANFppZ5SHoL",
  "key11": "5cvJRFLHkjjwXGgPGZyj6riJpoCcaA213HmTSLaXREk7oRfVneKKx4o8NqAyxvoKnmpQLhtY156uMr6G8cRYMyQv",
  "key12": "XAPLdK2HfV3JZWhkMts4BR9DMrEbuivxUfTMr1CHPbeB8fssTpUW64RhpevqAwvBDf861vKu158sjUYod81UVuL",
  "key13": "3pGuvgv1bHkY9fkBPhonrgPtoEGWZ3XRqy45ZqYwfBWiT4EbydQnmkVnxCCjZ1rUA5f8P6pu8Lpzn8a6FX9qRT5s",
  "key14": "2BTCZ7aHy2rXUeAKB9GZHccuk9da5BQgPqHuD1NRqKhvUqMNVF5ELvsysb6FTXxx5fdMzPKYiiMyw71rNaHXsBmh",
  "key15": "39Uz6BR1skJKpMw4SVQD6Gt62DxtHWbxTFtbvpYxvYmLrrXQLL8zLD8ZiEA98muxarT87GojkLZSG5UJVcnXz2kz",
  "key16": "4mtvs7HGKTH282mZC1yWtcd6E6L4Wn9vtBQ8J5HT8Mg14nsatZbNpLT5qrknPpzKioYfW2PMzK7odr3R9ihQtMN3",
  "key17": "66ABXLZNJ3d27RKrxujzWJSzMoUGCSK412XYEpdx6tQnTeGRLnf8oAq8new8kkwLnTk9SrAQuKRWdd8SySuRBn4F",
  "key18": "4DwZ2cmnWEXfLsWwYGrJ9TYF9AJMJBaZJ1VNQAx1De3KFzCrvQqfz931NrvxHCwKxPPkmJM613okwGa825emrBT2",
  "key19": "w2w2AUfX19LCDdQ6WpPp4M2hB6uJ1cgY1tk2rYbSBXHZqFDwZPurXAZj64FYuhsG9vf416KFfGADK6fexYM3kCm",
  "key20": "39fkAL4h587XWRrH9MCAushfwJaHQfwRk3NpU8QycC4VAnSiiRSz7HoNaazJqAQFUQ5wRzNATFJtdSzdZ3y4iZWY",
  "key21": "5SAY4D5mmWzjzvpprLK7ev7xFwsvJM5CS7LYxF8DUZg77W6NSCWdh1172CNLxYdYo9WTb6NJNcu4hcFrFfbPdqjn",
  "key22": "3TWfzBbYLHL2xxTLidBbUiqgBiBiLCKVJyP3uXqu7r8P5Qh2oV92we7QEbAEAwnB69vrBcwBWw9EBk594L483VY5",
  "key23": "zewhFP1oacP8zaq24D1rQBCbpRZRndK3WotzvJdapWzfZNk9uSvng85qXYvritQ8BsAtwhypBfYwJyLBmGKPqkH",
  "key24": "3K2y3guqLg4Mx9dmmbjB2vPgJ6cHJCP38FZm2yPXRqDJug9cfRG4rJADwou8B7GN5WPD98Gg5T7Zrv84udkNUVNZ",
  "key25": "5Docm4fpuQ33xez2nTeaakSgBhcPLUz4SzpjAA4znVvjzU3bAAmV91a5YfVcwSKbEidU26csSnCRJTLUnHf6Hhoq",
  "key26": "2y8g46y9vThpijLKV3gBo6Z8DPTiJbVhN5Fd3tBDwK1aAgru7a3G4znKW4pBxgMTjRhQiLcXNqYGJLUnvzCeiuoj",
  "key27": "pJJTPrYouqfrYRhkv6oZtpmLtS9Ngg3hN9MmWq4uN5fUAArZmxNzPgWUQCScYLLVz3ny3RTwEnoANwZYiEm8yQ4"
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
