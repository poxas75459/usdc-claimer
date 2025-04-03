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
    "tyaEwG9XtHETUoHnqJietRiJBXUgcuc946LQ2YQ2gjKZe5GjCUYc4GtCunzXo2iUqhhb3GNRCCmDrPwRuDnNPz7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Fw9Pt4p7pu7RiNjzbou7QiE7EHBmJJd5oxbKj1thZTqx5wB9FDBMgvYWYmuPXBgJfpB7U3cDcDoCpvL6cKjqEUX",
  "key1": "4m35ER96Te2GHBZ6jsidn5mJiYww5HNH9iJD9Lfza4KXSm7emwLbGeHwwDgLtv4nTfYsQ2LXpWgRLzEWSXMWknYb",
  "key2": "2MdGxiZj8NygwGXkX41rVMU5obHF8wtASH63fdyfyC2KSd47qHNNLNt14zESqNjmRQW9D8wa9741Y9VshsaqgPR1",
  "key3": "4XQtgiJwtjxbEv99VYtkn8qZjmDUswphZp6gnzbMEbknrKA4PVe2kHB2XtaDV6VzamE4sVZN9pF59CYHnp3Ux58N",
  "key4": "2icedAG3TAA2W7suvYtyxH2EWuZ1of2stKAGzCnDwvQE6BycNfQYk7LGPyTxsw8xyP654tYdJSdkMrY9YaY5tWxH",
  "key5": "3Nfwu2AbsxEMwHjijcKRLtxm4aQWTXsT6wmyyGy5eEdC3iuzMtrUb1ftRKRS9vedgF59x2mvi4DqcZ4uHcfrYX5h",
  "key6": "5PDXdeiR9LiAd51tZC1CqPbTKdsBE8Mg3dXV53yHo1q9qYru8a4uqqv6nH3xWwMGjLW9NogFQNY8Pp8L2j11yDyF",
  "key7": "4FneMREVg4zQwqu1Zij3SeWRKd1BEKHnE6AwEXExdUw9jLpMcc4bwCSCNC1ERU7KD7Q5Q8BWg2G1FGYwfkR6HsQA",
  "key8": "XsXw9bsASSupja76oKrW8yLaJqzuqh2UJFkt5yr1EDR38mVRiRvRu3U6qV6HV5YJpojXsT6HruJUsy3pH6ovFac",
  "key9": "4o5M3SksWMZj1Lg8b1ZqxAX9t888ws8FeKatS6QRYMmC41qpCjH7kCGLzDnEu5QAAihMAyABGAbzZodguJqoHVts",
  "key10": "2YbNZgm497i21r9zyBpYUaBoXSg8BciSWMRFW36JnnxdTKg13TCKwb6rhHxyDaicxtQGDjwShg1VBSXtpNWxLEEs",
  "key11": "3mfMF44DdBJFpBQDMTqN5tYWqboXJpVyBXva6KFQ5iCUTD63bDTjSif9MHxU77j89XP7HLN6CyfQeTvvPTaRiXdD",
  "key12": "4anZDATdUCc4g2WdiGdhKbUzWqCB1BcMg225AnK4fcZUiHhqissxcqn4NEsxaAczzqcNWqjG9eELbVELQHnfgjBz",
  "key13": "4hjDjKr4dbrkMfpxEVLvDdjDcnMqZk92CyLVDRYQftFYNUWjDGt1mdXLrSvNRqyikU2vANtnCgq2VuZRwBK2Kmt8",
  "key14": "64bp2QyzuqJ2A1wV1gt4chwXB8k9f25Nxnmo4hfHR4otZw2hbxH8BXdvXVi6apMm52S1SQ3KzPJNioRveCiN9Z43",
  "key15": "4pwn8xviuA923yxchXMapkv92qoPYSE6pF8VM2NhhoQy2Unhhoiwf2eFKeSEfVAY5LNMaGaJXsaViwuwJgqFAMkn",
  "key16": "2MdyawaADVHmyyPL1eFZKBUadAe1KeUut72b9sxkD2BHJRWEdFYHWcbrdBv5mdPKN76UsfMx3LS3U44mZceRu4gS",
  "key17": "gAVW6qyjH4cu7HeKYEXEPRQYZ4fakBeEvrwGZYsMCUGiu1obKA4BXBuktHn8YP1ku3JoryYnjnYGtC3sZEd5s4f",
  "key18": "2ABBjyMXLAWYBwqbm8uaW4hwrUTCMSsxcQa1GeLpWb93rBQLezjdwFUMMJrjz7EzKKi6VziHK92SuNkVWHi9Udrb",
  "key19": "3fs6edsQG7xvSygwRLke3aQiLHnZQiQmgsvncL4VJMGQLMWDTMQfy2Tpkued3eJaXdK5Txpiy34m3XpucLLQXZHX",
  "key20": "58Cq442nSoinFAzg2yPjZomXq4akQuZtadAQWGqyuUFQbsLdFuJcHXumnnDuvhheGQJ5T91R9ZUFXzneYFG2Ko6T",
  "key21": "39bWpnrmRG5fNxTvvgfqoEZmG9xBD2MJukMsq393eF78UtzJvUKt9Kxz7Rna8sDCWpVNsykbay7nk4BPxVJbcb4s",
  "key22": "532HLJjLn654U6Lk6jxALZowXXd6cnabAAAuMfp77kCfx664NqvNxK8m4HCFadHv5c3hedMvXbYyQzo4MmtemNsm",
  "key23": "563dg3gxiEkLSjFewJkwxshPRFNW9WsKCDzs4V4bbPmnrt4et92tj7PAqsdfYgaEbsRu21jRj1dMRUZtouyBWa84",
  "key24": "5pKdpXNR3WbidL7v4xNuYdG7C4AAMqB8vLaAg4FnY75FiT2gKdY8ihweezPBAGrkZDZYDYpZm2uRZ1KBhNLfW8vg",
  "key25": "MPELQEvpHXujsj7CxfrDu4uPENKXSeDur6WeqU3D266MJsV2H1o14R9swrdEskUPTyPTpApBzC7SEBpef92ZPeP",
  "key26": "N8qahWJbvNzMrkHhsDH9CQZQwECVG5PM1j1ewAzRn9hJoPiJ6dfKGLc9hyqMgGfTn1aYn7heYfEcBhCzoXP6uAe",
  "key27": "3YDHdj1fNs44UYct6Jx2g7YhDPu1c7WtnDw8zyKZWTEuAregGo8fXgWRiH4Ai4bHrUJe3CCTczKVHfuLZoHA64p",
  "key28": "ghLonEkE5zN5a1daKDdBfcbvExwGmLEgn8zbPeptMdW7JCjdJJJ4E9LJZskNJy61R7AU9uk8LS12G8RbLZtMGrq",
  "key29": "23M6umNJxa4d7DmKKFCncyLbKYR57ymuv3G6XES2kSrJiU2kXAhahQeJosC7wdFF5LGFq2uNoxUjcLyhxWKRodfq",
  "key30": "5TDzS6v4MijfPHXx9AQsg2tKAUmKE1kjxCteS2hXRazjaRvsYLZrH9rXae4SgrFwHShE46vp5AmC99SpmX41TfLh",
  "key31": "2xSSkQGPeCrmuKncnkGF3kGUAUFCEqCo9JurfDs8fv8Mvq53najkXJ86AKiH7sqTX13q5Ha5x3nsgNwmnkrYy4CY",
  "key32": "n9Q3ZgLx8oGgkuVdzFt5Ho61HYhCD9REh4Hc5sQcxHrVNG8HkZybhxjsJ7Phj6GH1PN2hAuPEHUV1VeGecS97T4",
  "key33": "4repnuz5WTRZ9RPGMVTv3d8YziqrdQ7iERQYqMnL61AZTye8WStZmwL7tYCGPXuQ6RJt8AXUKGziBHgznXAPyWKF",
  "key34": "3o4TNCo1jx5dQabZybQFEWqQuMujpnrQZRBmLq6RbwVK9BSQQPVjPhfQPKNpoDX8QhmG1nxdMJuewH1HoB6vEoCo",
  "key35": "bQY7e4A8g492j5EYMy49Wm73mxfDt1LXBT6AKmY9tH5v7VtPRsH7t6tdj6zCXUZChR3QwN9NjEfb8X5uJSBE2r5",
  "key36": "2BxPiEUYYUsoSeHz3uRPux2Tnh438SSYZ6JCi7kWPrHt5uzuZCm18GPAwUmsNKCARkQ5MQHx8T2hBNt6woqzh4FF",
  "key37": "4khKRhjAqNv99bCLBM6nGaNXmgVyHCXNzxs3RmTkTddqWv91i9gXQk4U4UGwfggyZajR6j7tHUbb7dtfb9x9LLr7",
  "key38": "5HbWvLkUJah7rbF7KGPB9i4g3M86ePeQFEKoXyhKvmTyaCtuwBc8dzjGXgtjRgpNyjqszyHf2QPb7Pb4VwdRya9N",
  "key39": "H11udXrBds4AAQ1f12EDmyBtpv5yEzmgZzM8sxNcMr2EH5RF8qetLMUgu3yVGHNXqMfjjpWBgbr4qkSUW9QFN4W",
  "key40": "4yARH4EB35iMFxyxAo766L7LtYJGFASRq84R8Sd1EbCzTfG8znr83JFXfErzb8rpgEyHK9gdW8aw8kjairGNiqEi",
  "key41": "4wG8GtNB7MaLphDkBmU13zWacrNiL348T4PQJxHrAaEyDMbQ3i4hS4P28ZiCENW2mTDfUuk9Qh56CStGuPSMZwYX",
  "key42": "4Nif9FkmhVoSoYpdjYUvXocYv1U9vK5HjJGDQFvsHHcsLyZKk7HWw7HvHTbUJKno6jnFi8gcWASjTFKaHQmdDjVd",
  "key43": "4HMfTkZ5prYn7syrm7rXWMfaNNKegRLQXYDX7Ra3briFCjS6PyTH9yJgBVvY2tdrPeqSNCTCnzz1KGowXJWU3SQd",
  "key44": "5DNwMKtCNaDnJqqjCRiTWx8BfJtXHRa4Zpwd9QudDa8uJY6aDNTMeVMvb1XqUzVYjcAjg6TVZmFYtkXGDr7Ec9L7",
  "key45": "666RbYiMor8NfKySRq8MgUjXwK1jAh37c4bya438eoejimQTBs5V341KexeaTahbRoPkThnV8LpPDRCdDhXr9fjo",
  "key46": "4MJVRvbgcmY2d1BX1ZcSM6RWBXXrHnysbcgtEJiAwfsk9zeAoN3tUQZasY4jji3bwArY94c9G6Hg1RTVBbid7Sw9",
  "key47": "3mAYny85tabefgiHR6EskPzUAYUWZ95bDABKWr64VsvNBGFTPVApeBzXUQDdR9JhvwFZFwj3zmVw5XrxLGJwkdTA",
  "key48": "2VE4LRm6HnWjwk7tiT9s8qG5iBFoLBMpf4FZFA1R7yz7PyVsvBshGmrypCCEAsLzbkxaLgSB7iYbEJtmGDENXNNm",
  "key49": "eRr2KQf9oEYLkXm9v4Szth4t3Fs5NBkYAopFegRbAApuvkm3popcPWwp2HpReB5tSdVeWNpAByLxJ8WG8PyUcEp"
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
