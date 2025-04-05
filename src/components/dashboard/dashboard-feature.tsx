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
    "4iEpzfrTAHaHbR7Twyw5xCixjNeyb6dWMhXEynRHZB3zvPkYeZAfZDYNiiiizJAu8AN72VdMLEjwTkC3oHXpLutf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5hRhQr6VvNE7PMXum1e7K7ZesuzNE62kpY5uGdYuqUwMBiZ7k6x6XN7e7ZmCAKsATKMMNkHxbiEGxjvUocb6dvrd",
  "key1": "kyGJZBm4ejqPvCHiYR51Sp7sExA59TCGbVoc4rWcWrgWom6tsJ9R7PMD2ifJwUqfPS4VCKoB4aqkU5cbMvWhYiR",
  "key2": "4rCt1wqW84mkiHSSQPRUKEV74VmiJVsFhmhrJAQRVu8ci7YF6f7gK91ZCVsADrWVc66FYae3q6xsqQnCuR5PEi2b",
  "key3": "4SfpsdSQ8hv8GkZShYzh1imyJYMuBw2a8issc1j9kbCopWw98UZWWy9EpsqYJhHFwwqHt8LMcfHUtdauR9MqWYNd",
  "key4": "AqxbGH7yLj9mZs637jzBiQydK6BJ7Mq4p15xQxhUoAd7U4CADtHqFFVt3Gd7PZNLsMmAVMJX3F42xCrYbArZNcg",
  "key5": "3jxnJ6ARFpUGPK7n3EjZdeWavT6S6kqCu9Monmfzv6eFTEPivspKXm78fWW4NWvHPhPoTeMajP3xsMAZ77x9TxBF",
  "key6": "2iu4yeg3oxAsRfhEu9bckpkUwn9WQHHjqYfHdKNJzAG9ydgj9ScSp987mCAmKhWCsdRaBVjhwFJWgtfAbvJVUzpB",
  "key7": "5qnhiEewiHH6tTm8iq2ABQ9yHLxUUHtThQ2xUqHCi2Fx5DJMuH6BX2HyT7ABxAy4T2btmNyi13LxhFtav2CsnQEh",
  "key8": "5RZ4pbwjB7KXAYEohfGpZF99giPkoiKj9qLXEL8GdJppeu3hDf5qxHuLq2mR7N4APPyocFNGP8N5hTxAih9tn9AF",
  "key9": "2QDAL9g56tjPsEs2myewym9zwXii9TB3bVDvGxASowZM3gP9x8hGEvn93jHqbuc1v6vuAkjNwCyBeafH18HiN73t",
  "key10": "kHUhK5WrdsuzkKUb6TvyajNgscZWtcfc8DDPi23xnB8bseu5bZWUoAwgpeTosGTVyAMKHGbBnC1krF8PGPaQQ9n",
  "key11": "Mhx7HohhvJjdvSRy2iVbCX2DxV9fLk6NeVCfhajkSUMDLn4kjwgEtiugyhNWob8nyTyk2YsvXvnfqE9BXjR4DxW",
  "key12": "24wKQv9LWriWAq8YbK7g8PqyyZkyJsa3RXe7b3dTrprTkcJvW8a3MfVAQW1iD8fVkMd78T3ov5AXnS4NgMiWTauk",
  "key13": "3sFcztDg5fNtE91EhU5vFLF6nkSmidoJvH2Lbem8qiPkSebAamVLDC1tCohy8hjuLAbmanQqz7pMsM1sJTXoLFde",
  "key14": "4fJgjurTFpDk14vqb1jEFe8JUecdwpkrEkxU9Mv986ND3xZsicJ7UcCA6w53eEqXLNUKQZJR5iVxuer55Z7nJ2g5",
  "key15": "2aF1WGaJa2soC934YUQ3u3TKussdJt9yCwBwwPrs85PcJQq8FDsgjz2iKcmZM8wXC5ZSfRt2LLeSeseWdV3dEhmc",
  "key16": "z3v3LFMHjus3oTqA2qmtsyHVPoJABjQa3ACKUSG4oE4tQ1iKTpotLCcTbwMRboThxpDfFFAmhDY6Udz18XmTyZd",
  "key17": "3G5zySGpRKiMZRMUxGef9Q8EErMe7yyyVbVS93YWSBDfRfvrR5Yps44ZSdCy8vHHTF6sVru17SRDz3abGJaKJHrC",
  "key18": "4jQnfoLjQbjfcxtQh8cjvvC1pbiqJeaaUX6NcVjeQ54D9PhrZQcLrFXsP5ZbT5PE6p7oohikTAdJhBKmr87pQGhK",
  "key19": "3UEbrEU2MybvFBHpxURrSy4skkmUXDLmdWt9SN71HdsQKZKvYTzjKLmpgW39DKQJsZvXN9oA6TX6z9HAM4ijJsGM",
  "key20": "47Eowukz2V9RrWCxESCBRg8PutKXEV9MgbzDX64NVLzPGMjqGNLJGKqvyKyoFhwFtbZUfidFDm2W45qHKcuv96Za",
  "key21": "2duXEHGVe3ewBWmgqXbJSTcHvRPTwB3jZRCv2FvKzGdjpUASf8vGErYR5xjYx74QVrEfLznnXMbdAKS7umckCBSn",
  "key22": "33xfoHBwgHb8QQahkxtWpPgtjG4JU74HfVnwBtwuoM2TNguEZfn4FwiBLLhr1ZkbqyoYnodhv2o9uLvR8d4dikmq",
  "key23": "5nF6BYaNRtpctcNSbikWmMTjEULhgJoJhWxeYdxsCCAo6Ke6ZyfF96fL7dtfXn76DeWjbxGZVh51y8C3kb2n6Ld9",
  "key24": "3B48tdiWW427Uu1CrYvP7MdWJXicXYpQ2dSXkiHNEv1wZjsHR1jPp9m6tH8n2JeXzXCbuR4yH5zzqkFwehcGJUq3",
  "key25": "2DSLVRYvW34GA5GBBvtfXigXNAeH4zBiSBMqLx4wA2EcNDE4y41yJKVFHY8MY4v8nJ7p822CfXrdXNUbG76wSgV4",
  "key26": "41Sjymp2is35bXSo3E9jfewTuYEBVGeRrwDC7hu63WjWqTGiqBnZnZj881iRQMjH4WS4WM1RN2Z2kARGqJKt1hnG",
  "key27": "3b1PrDQkWxyqgJTkCPM2TPQn23UmU7DsBKhbuG8dXxkZ6Bu7gSUEqmPSDp9xhZvBKhZZF2SnS9u4zw8J1wZpmcfv",
  "key28": "4NPPbp9LcrB6kRV9kWSm8XMzaAnCrE5MqcVRLNSptSs2k1hEMDQCZxPudLYZgeNk9parQasNyy2wK6XDUYPqffuz",
  "key29": "3JtVBh7ejoxsSreBoieWar4w4isJrWAtPuDEMk4CcK3vAJcDRQ1Vfcj7RYdRaQNnzXTUXM8WERvQ2BYaTZe1CZeh",
  "key30": "4pnhkEnTgRn5dAyLLtT9Mk4MBJcE46ey2x9zCRTg2Sjj7Kx3gabxXDV3s7GdzryHSs2kerKbYKxVLUyjdPKHmzcx",
  "key31": "7t9DZuXEGkGPqQRKTt371MYmjy9jnR1naHWTCY3JmGUYjbRq3AgKcJ5sjpBeGPpYc7Utu6XVWtxUecfvoMc44Sm"
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
