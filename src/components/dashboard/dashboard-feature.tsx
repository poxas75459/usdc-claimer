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
    "3vYXwqGoXgUbAUGc6gHFyRxnXksFW7ru546HATRtCtVhsXHyvwENjsrQ4TQWVRPvdTfeE8LHUjGhWNjrYTYxLN7a"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xrTwfkPTcM7NnSgzQs7gf5SvzejsjpsrUp33S2w77EhUEa7s9N2HP1ranVLx7XV1wRB8D1KnwzTQKJ9KcDhr6Bh",
  "key1": "p4veztwa4nL6ne3VU2V2pJN3sY1AvisS2Y4Wpm31rKneVVWHpbJB4s6r2K8sybvYx6KnaD6UceyVnUeQiEaschL",
  "key2": "23sUJhE4efRRza2SWpMPUJY4nXS5bXNQHZi2nkiEn1otXh9jrh7jHZNC1k5DKXX4fWdeURoRXWEQZDPRnNJCnPAK",
  "key3": "2fd8CXjNQpMXV9bCaZfQBvS1oKHCTRXoa4UvqPDib8FRM1351jkCyvb5mKucMy33ihszP9i94gqWWKyC5mVHKcUu",
  "key4": "3WVFyMpBB512Z7cmsqHCEM1vcgEebT7JNDidCSit5Nc7EMV4nF7CbCDffPVZ8eGTkqJPiMYocaCXoGuLgA4b8pdD",
  "key5": "Zw1P7KdHsvfenqdVTdMMXSUx45pkojs5DbeZEGJ7NxAy748fEXoW39Vrw2HWaTS4e3AwF5miW2VT2A8tVQNXrZv",
  "key6": "3EvfRN3wmGgeUK5W8atPbkfCN9AmSfwKfj8EikzcTzpnGbkMUqc2ShJXBzLSs9eD5HQZk9aSw13sBhkkvDFd1HbG",
  "key7": "2wLmotCWz5KEJkMYvdHkDv4VRssFx2eNYV7kvdh8VaiVZDHkb93xJxFt7CZAF8pKwqRVGPGhouweg46qmMYquxiF",
  "key8": "Mg4LPW1d2seSqBbaZEt3GmyvriqLCdkcahoDRTdq29gDU91feSwPPcDL1QUBrTp6uxLFzurRhoP4738A3riMjUb",
  "key9": "5JpdaBA5Lud1qMMEWaiNjsDaqz4gpEzNbfV3QE6rKarkCNeZ15wk3MmbRaiebvU7DuEVDLdcDsxm8ybPXSvupfV4",
  "key10": "2y5PYki8HJwDN46BNCGxVJeZSNAeeab6bcxGHpNYJ8uaCmtvJfAd5G4ZY3yyk8Uo9UnBbhpYTYwgzHhGFRDLsUUm",
  "key11": "3F9xToujFB8CBDtqAhqYAQst2V4s3eT92MigquWWpxkiqzSFQPLHrvPQLDCdqNqN2WSHMzhAVNbnZmRFrCmWu4qM",
  "key12": "4hDD4LwA5UW7Kn6DVqjnWjJYwvbAdrDk5TNsPWBuEmFxfmXLLHijGwcbYLbvETYCiswP9nnASLspPQJM2eR6VzdP",
  "key13": "41EqTnSmSzv7HGZSUAYguYwPj7syZBzRSLdonr8Qfu3khatXcUdG28zZjoZU2cLi1syq2XFS3mrBnGCy1Z4i9vQE",
  "key14": "3uTKgxgYpRYBGtDuGyEgjBLZtSSbnUWyHM7TguVEi6FSSF1WTWEkVLw6mExTN2vF8BhiTbiuhfYzFNUnqJkEL3za",
  "key15": "41HfNA6rKufqmXjD9xtwaktHNwxGqbEezs8q9Gvnv1Co1M2JJx7nFmZkz3tyV8K3ctLSY8LMrLKvqy39chiUYsEJ",
  "key16": "47GcB7giTwgExgZn2aGnmCYydn8qW6tHPCWcLZevBS7yVsLq4ShrzZccth85k3VMhgTAiqn9dqJTJLY3Mb8hhPCk",
  "key17": "4LtS6BHMosL4EumvzWADr3QHzfZJntk9QzwapRZ1fvvxToi7qun2uF3NX74EXKQhFZJuvB1pZcEeShMKhp5UgcXf",
  "key18": "5uYZcHhWL31RsW5JFk5uhL9fkQJPkx7ytgJoXvkzxU3EXgnHfEREmjWTCBHJnZzgb2cG3EzfjH8TwjgrvFfiCK7g",
  "key19": "4vB2Dyk4UsqGikfxrpvmEva9QPiHWYPRkhhnN3NkyEduwrmYfCVUBEcbdA6ccSer9Tge5641hokAFm2rRf8tAk9B",
  "key20": "36NLzRtQGhpSaVx3zs3jCgVC2QaVrBHSVyU1Tf8CZFPF6ocQNcN7uT9hZr4Z8UrtF1deAJPVEdEpVR2LbBxFTvYk",
  "key21": "3FMfxxGaFuSc6hBTqA2VXkdjZPeurdooLgGep3f4DuwZY87cebJCye1qcDFXXKjWayNDJ5ZBxcDchN2wikn9onvd",
  "key22": "nGeNRMNcWm5vtfRj83KwoDxzu9LqwVi2VpjSYJMbpeBRL7Bz8LQ5hDDJCUiQYRamcNH4rPJ2rveczFBPJM376nr",
  "key23": "5tcWELo4AFTbhXD8VPkBFe687yv9VD2YmP63hv2SDup1hBztyHtobSkx8PAq3q1JsHN9U2Mx7twuNudLD1U8mJ7Q",
  "key24": "5WNAod9aNbfqsZ1piR8woDwp9uTbYTze1hUSLo1fkyWQdUVyh4icGVTWCFApmMieq1Jyt3fJuVHDaoaeSSvVKnAN",
  "key25": "5Gdp8Zwcto9uwkrgEBU9tXrRM6xSQ3d9hq9CbvaHjmcudgqki1iLsFWrp2JtVVkDhtnTck7AFAnVd4YmuSCVkwyF",
  "key26": "3MwVRNDeoGnSrML5xjBcwUtKHVkxCBnScevdzE3HJNne7iCrYGJAjTiriZ8gBHfTra2XkCK2NLDzAjAB5VLDzqyV",
  "key27": "3YRfKPqBZBsMCQmsSA8yNojLwaV3BE5HGJ6MePtrCh7fqZ2iDKLzsApPwWkureX5zdC9uS2V6wQnZMJn7BxG9tX4",
  "key28": "5qhkFzXJqo3iKQzUtrbGoecRFVSAnX1kgoRSEUQMokFHB7Gbig6z7d23YBnZ9RQgNxAG6Qh58zbuKd4ZAv2kVKHQ"
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
