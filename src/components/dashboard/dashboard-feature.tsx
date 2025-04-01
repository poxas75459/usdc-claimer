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
    "3PJjDL7yfo3RPauYeVAmnnSorw7PBer3S8S3uqCwwRS4jGawPSxujoaKq7L3gcMo7Sbz7DgTHtkY5M9pvqiVzC2R"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63MjJ3vubwtdeuVjGCTs8vAFUmdJL1WN2woadq5wz1xgPrbWneP18MXpKyco3M831DfV2ri3WYjGRxy8WDsWwbSH",
  "key1": "2Vvpj73chBmvT8yrnMbvS1uYDtqWi1hGsVAErEVWPDVvxaHR8czRYfq4TZKDNiWtdNSmmCRuC8rw7ZKrGFQsDxsi",
  "key2": "Ny5nmQWR18xzb5tnaWS2jiHrphSzsdBpopQuLSZX8uZinvYp3S7tWxQXWD4b5Vm1p6zS24sQtXZU4MeFMhmwY8F",
  "key3": "28wLzW6fPixqM98XBLoo6xPkx4FBxyyJRQAFu6XK4SZAPYfp3bM2JpWes5iM8GgzUsu6irQpwmikgrBxNuRWysse",
  "key4": "4KLzD9UXwE7UsRerjtYQts7DCxGNm1iRzz3sUqHsjfPNeehiW8aGGA1cP7LRPtXwRLUbmabQivZ5oTXKFMjV8Tku",
  "key5": "37JdonRzY37quvRJ6h9xPdhW3XdgDQCWZ7Maz32k3SaYCQXwaBN4uvaPKVJgWs1Ao3FP8tARzVmmkpRMirB9sVNV",
  "key6": "4SFUSWhmwjTiSXhntF6aoq6SaBg7BQH4guwG4oZ9Q7pbsDvtotkPao6gxYPGsdfZwXHYNEBEro3ydQTxXzFJnBJm",
  "key7": "2VqAEnUfmPP3rSecvSYnMSYa3AB7rbMDw73eiTPKYy36Vqhx5XcWwVTjGxFcuHXCLEqAcwxSaAHih11ysNH9G531",
  "key8": "Mt1k5tdAQkGU1Fz1pkif6yAHM1kn13L4a8LZTh7baxcHRWX6tCGMs23EM3mvJQPn9eVPdHYo6QoiEwahvzkagbN",
  "key9": "456MP2wcqZ4pM9oRMKzvzPXj5djKk2ptCuWEJS8Xqsa83xcXJ5G4iyKRdBNChHXNrRVMUV6HK2uWjqyxiiTQuKnD",
  "key10": "FFnoKZMYQcvmuuJRB7y3s9Mnu7eLrYBsEhybpgpTJT9uDaauVUCB6KAonGgearJQxm2phbSEG2TU27ffm4i4UZu",
  "key11": "57hXTaEtm4hDZ5jKh8rbwounL36YmRwxdaxb3nQZJX5Bs3AnfeGSjgj2Ntg46Vi91WghUfHqU2ymPkF7ZZoa2ckP",
  "key12": "34JYxwUfzcjP4c335V21f5XFxk3MfARxpjn5zzEJD9LEuBTLaN2wNN8rCmczTeMMQNtWbH4UhMQiV5CENZTXFNSc",
  "key13": "5VaF8q5QaSH41Y8VRFiZtP5qBpcbrj5wgG5VuqxLeBHYfaVDCpKKdg6X1hVeEYpCC2EXL8E1Uz7mzhUU1931BK3f",
  "key14": "2MaHbXpkNHRmpeYXHL2kmwYTtXGRp3MAcYqzzqTsz4sGih92WCtWViNgYUqMshMG58s9ZzkgKGKPby9RQZg8ciD3",
  "key15": "aSs5fxXYNLGX8LQhqHrKLgaDqnfiG4K2SgwaTTTFnbd6GcCF5cmkCCSy6pjcXJcRXbTN1PcYBMkFA5UT5hix2Dc",
  "key16": "43iFCb112iWVWiiBdoHkGXLcYzowRuhw8SzBkzZeTPT62LnokH6qB3i99FZM6abthu2pEiwgPQsHBvryrzctEvRS",
  "key17": "5HpDAkWAKg9pCAsNGguuJsUQAxqK3xbCtePY728vXCFcK52VEqVRN3vG2bN5pexGbCwmFYVe7gn7tgBcKfjwa8QP",
  "key18": "2EGnnou7QTcsiDAejhtfXJXNyKGDvtsPaGngoYJ43BrmsGWtgG9DDoiDS7ifUZWsBFbyaQM2AjygGwRZDtPp1fFM",
  "key19": "4fMgqcFRCjH2YTPbps15FfncpGqkVMvbqUn4z8xrfkEnYjVz2TBNfCH3ct5bCBmRX1jc7DMwEdR2x9L6AzEd4cMN",
  "key20": "2zryWD8vSPJau8RLsqXGHqYeHG6C4DWtSgG4kimbvWN7RGEvaUES1xCj32tJGU8CzMWAEVZP6MiFotPxejy5N7q2",
  "key21": "5PB6wgDtH7Ro5YSbi4imY2sm58V4rnC8qR7yrbXhykT9mWFGJMvVMKSG2USXxTFpWfR9jHTAZqGqxcE32iL6cy3K",
  "key22": "4gmbUm5pfMU5bc13xQmaxsxeHb8AT5LweDb477faA1bxESphEdXAmaaQzKcR26E266XHReh9SybT7YUbuA11pWjT",
  "key23": "iYPS43CgcxAFFmJZCjaSznbGzp99NCzLVt3SBeoqwvFu7m1XKpTbGDJEhwj7dRXaDKxb4LZWyMAxemmiPyZ9WoG",
  "key24": "4Hpw5zTb9X2u7WWsTt9zDbw2v7fQm8b88HBbcBgBc9uUFxAvWV4U8J4iYaLXgkpReVfbdcTPrcDTKFdZd9hfVACw",
  "key25": "5mb2pPmUbUaMvBhES7hb8bQfMR7tZhURrX2Htuf45LkFokG8buYEWd9ZXovSasTQEACDTen2qJWEaFTpzTW3TvFK",
  "key26": "57e31GZNqhFtL2JdfiybNigQxSmrRaUQagXJc8vqjJdwd7VXR7MbNNJGi7jMsxgoWHTder8JKxHzxunNZkMkhnWe",
  "key27": "323gCRouUcjbbFd8yXsRQyVw4vmo8vAN4zy61afvGpwccEF4LRFz55PCFk3SNCG14AoXeoadLhbo4vjNfWGusLAb",
  "key28": "3pkU3FLQ19DzHe48Jnrd5ubEwKiRA6CTpSe4yL6aa7EmRCym5GpYeu5ZEGMhYqQGxvwRNJrCAacyaCsb8gYXH4aa",
  "key29": "43Rb6KAv2wg7SahUeMmmXxtmKVUCj7inzLcFB41GDdppTVyeN17c5mRJuDZaaqX32bTCj9NEvi2v4WJ2DPD8ci7c",
  "key30": "3QZ9WDzrogQAAevvKbnPrnjcbQefjgFAEUL8NcVfFudB3oKnC66dDNv8KkcuJ7GzuSh3rp9szaVoNuJzxyKh7BCs",
  "key31": "3VRYeU9cHwJ8LxgQpejakYSX145ky8xqjBj7C7WEGY1jBGgppDtnQYfbrTUCCMVCQRR6hYW8YoFxSXNLhuFrtLyJ",
  "key32": "22Eft8sj7uWMLtk24GcNtNQ4LQF6fuw95KLekmwfzXg7bGPoUDtFGhtr5YXmjKXpU2df4phFAEDLkPrCyEoXSw6a",
  "key33": "5FPtDvEkCRTpVuNoGDYmQQ3jfd6wo2V57WpdFNMmxG3x7Ggu3y1c7tfjtxjqfbo7i5ffxg6GXBt3SKRBuU8rfyCH",
  "key34": "259RWehd4prgejYuRYkvmGMAhS5frT9e5mHVfuLU9w3cnMxKJbev6oHaeTfxsn3uykVsxqXxTDNDGWxJRg221zJf"
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
