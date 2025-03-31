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
    "2SHR634DuwjQhLMRkfvCgLBbViskFmBTA58N8vk8unk4oYK4JZPVVhe6FsVt1fYPs1LQMGwDmkwLSunonbiS8qy8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3dMgeoda1ih7yD8gNWLwXvUcCZfHbUVvQ7Ybc9Pz7ySMso5VvmUjmc3fYe8yeA7KifTMefGxrsu37jmn97RfF22d",
  "key1": "MfQwsguyevNGJBby26Wh1RybkCwHBhXZ8z4dcgtfG58KRsQ44vwfX55BGYL5dji4Kq9HSVs3gsmqqUNLny6nsJm",
  "key2": "4MexTeybQXeX5HZLGJAS3v4d4WPj6topX5dzhWH1e93ohQCf2nc9xwN2AAWdPb68Xz1AECYb3Q5rb46cKNFPEVe8",
  "key3": "46AUYn59gBBwq4iWKEaKFm7RKYXNBqfNQTNbc9RaMw8riiLQf6YJbthoBxBdGztardXKtxiDxznEao9fPkdMzB7P",
  "key4": "4a2ii9ZcRbdQpUuaWSbH2hJn5HVfgoBsKqXQdkVW4SHZwaPmZhdqZSgjoVSrAqxfsWzn7B6juR7kEHhJy1JjdXd1",
  "key5": "4go9TodN72T2tqtZy8dsjMXsNTVDS2tnuBQgUrHjA2PRRPhWfYaQefWHCG9RVgvQtfZ5oj7K5iGaCPHtMU7eig7",
  "key6": "5MvRGDFHvPjxnbAWcvAvsa4hEPiGzQTpuX2xxFd7DhwoPmLSkNCRUe98GPqkKCSSeCCMYddRskYY13QU4rHYzn9q",
  "key7": "5nHXfBub2xBqhCheLb21zH8aCBhVdehQg8ehYwTvgUoE5u7iLjxr8KUDV34bNYj8j9DkqLYcEGeDmWLk824moqM5",
  "key8": "4QWjw8jUJXabiAFiysKTdApFpyHuL16DQSaYRWeqUWRKV4cVnf4wVHJpNuvmfyoAUuD2bn7ErvhCQATH5BvWfUud",
  "key9": "5H9yoAs9Lg2WATY58LQjjbLth6uzRqrRnaWmyD45pBjzi8smoKQoZbQe6CBjsxhg3GgpX7EsYAxPDbnQL1Abd2nv",
  "key10": "LELaiPGbsZwzwmYXnjJNQR92qZ7AEKsZerGADomQPdBEQMycpqaqassKsU4C5rDbCeZYcpPdLApcKcwTZSRA7k7",
  "key11": "5tEkzzX9W8uxGMgUnd5hLQjb1TRoRoapWTzLVcrPxR6ShZeFCwLYbpvkjqoDmeMPHQfw4HbJCUwFDgFjcdrBiyDy",
  "key12": "3ZGivjLghntoxzLZAUUNo6YPEdCWSSQnbeYVKo7M4GnDiSEY3tTU9AjtzskhSJx8g6HrgXuyahxHL8rsTs7QTzZQ",
  "key13": "LNdy2rmp5TPziw7hSxCT11Jo9KbCzoYCPM72tzaxR9Mv8rnKvMu7jzyzji7CXBsAUzgWrUp2AMkQxHLDAY5LGrS",
  "key14": "2umT8AEG9WCo7jhY19x4WL8SCTmMa4aRXuPzPgcrbCTimygXYdvMQQ9WA2PrCb6DYmWwdwQRdQRdw6ncLw9cZ7zB",
  "key15": "3qc74W1nqRWa8f3M57ds43khaVD6Yxx9HBAdxW6ePaK7aBJCuaRhCo1mzFkjz4bUyw4yEzKB1SB1ZUuhwWu1nTWz",
  "key16": "4fvhnY5kjzkuHzugnb3X8eurcGZysNUiHEKbXTU1GDrt5NCc3zXJogJU1iPPY2BpcoDYwbkbSyVpLwmfJiFX3wBB",
  "key17": "oJdUHiKzKLED8cbeZpd5GupjUgCZgz9NFSg4SPTzLrkTch4m6gQ7C3PjXQgxo1E3Y94rHaimHa3VahNxzSUN2He",
  "key18": "46TjzCDRziM9N6vSLwRDGzkWSmFcK31Y6Pbs72nn7V734p3HZ9qtZs82NBmHL5X7PoYcnJ8x6T7RnYbzimnm26zH",
  "key19": "3wyDtpT7JcacBb6JNUQUe1vo2DTzZxxdaM27sSGuHydYWhp4BFE3AVh6b2bq1JWX4gN6iMdRrF8LKq7qP5uMWMiH",
  "key20": "2iYM23Ywy8SUPp9YmenYq9B4Pjwt2iY1AF1HqYbvALhdaXwTk8bchUF3uMYSYksAfMH8ctBFNgkr18D9GjoNiPqT",
  "key21": "5YzQkW5cF7jnLAJxShBSGwrGHdAbWcmf9XrTtPy5d5TCjyw7vcCBYpqnyVr4NLGEi3wuNNy1i34f9v6wuEbddGtp",
  "key22": "4p759WG5M9vxc6CiDZWKmic63SH9eK6dtRLDu53tVmkQh5p2d2uT19qcn5iAV8iCLLd8peXVr6m5dffQwjSjT5UX",
  "key23": "3VpBbB8eRa7QTbEWqGno12UVxckyA9surPCdy9e87xchd5BaQFYVq7zrgKfcPTaHUt5ygSUNG52Q4G26QurqwjXv",
  "key24": "2ZoGqt9BimLaSYLAyX3Jeab3cQWEG7FnAcJ6hUj1WENuumb4a6St2H7sgpV6g6Qd6DtQrGYgLLmVEF1EBydeFTJ1",
  "key25": "U1QA4bzbLiskt9ZUCFzcA32r92zPK6sNXNhj4TraEuRLVUit7fss7PNj4GTNTnv6y5obBECUuTsgxBMbGzEQfC3",
  "key26": "2TKrYHXpn42RMCdET9KHfRfUu3hYadjgyQcKr3y53Ne4kNrfdUFHDsD2BuS6XEiUN1xoWs5jyzcnorcqvWCvmXtR",
  "key27": "3GYvH5y1f2CDZwgakZduSQco8k4tcQLkc469XXnGB6Z1LVZoHKP6JgYBrDbHWN4Si9LQQmZgkWRMT3eVK2asWZS1",
  "key28": "5awZ7KGB4FUPS7bT4r1N58YvkakAZTu5N6whXve8f1QEoF7z6sEwu2EHAiuPV2sC8KYQpsMoFQbEXiphTgQxe8bW",
  "key29": "52bKa3gvHisTApD2hCyEajZtR9n9HJ9dtpimbr6qJWXMv97XV6YfLdHTc3aZ5PPa7LZtJBxWSfiXVQZsfavSKLtU",
  "key30": "n9ph5PYqcVGJPM9dYDFzMnTnmRbudNFxvADvkDseVToD4AUpyYyNFdLzZjeWJFZ7k7vNvKjdjW7sw39zyZngvPN",
  "key31": "3jkMSysHApupeMNiprbZ3CbmzH6qUDEM9mnaMvjfU6BLsokk2qidWoJREGDghhefcFpszv8WPRt76Bz1fb4HUHWZ",
  "key32": "5i7HNRqNmgwyWqdeKWtjZSbVGXsFbC1ootdgziMhFob8KEydJVEwrcrcMrgNZqKC2uNgZvWSHJJJJya53nY26xjR",
  "key33": "4TEWFs37yh572wraUCRTVEvZS1G7QhdJYYRR1ZUEpWoXN1EBBMmJNwiFh7bDixhidhfiBKHYQDR694DzKNu4vC5J",
  "key34": "RXodC6Z5eK1NGFxndmwnHKQq24RGrfmaak546563LshT9tDTnCf7EX3eTyrUbNGZBerCH8jbWrNraeD5KFiExCT",
  "key35": "4Lyit3CUVo7H5ZCWPuLRBpYKpHkqwiqH1mHsDKbsceP1xwnSp9ngXy97gWWMsyrLzEQuWnWRk1D4PQ64SwXvgiNx",
  "key36": "4tmyVGR3SPrczAd9mNJGXAeCSr18UAHdEjMNA6HC9BprKVEeJDoq1VckxoiTT46TL7WHxFAbxBgQeqdUyW3x4KNX",
  "key37": "4BBirBDPSoo7jV9xhKZ8yb43N8BjfKB4K3RcTaVoKKehAxRBiWk2XSN1znCqqp9DbXJrf6kECjtY9jzQwWmPzMML",
  "key38": "2XaijRGEPJqSDuG3Z6jZVXs6LCeKMP2ZWyATBMyxzcFX3H2SPFX862Lg3Q5p2pexypZ9HQRbMLVhg6v1Y15JYc4x",
  "key39": "5JL6qvQiVEYUBvD8qJ9Y8kD4AuG4T18JhSqQvV67hV9cNcfybvtcifDpKUHA5WAWVYNiT82bFrtbqfKA86eiA3ho",
  "key40": "2Za46n1PTA5WMfDszLSZV3rDSXmXU4mJgnQ78HpujMgzhqg6Usc7B3sRPeWLaAZZwtTjDNrtNqUFKoiVvZf4fwmh",
  "key41": "4fYJ2NzLrBybaACPXzDXxruGbpRLxFAGWy5AN39v3t9Gr993PPZJ6DMQ8SdMzZ3M3gzsM2ATCAXJJPxHjK7PFCvP",
  "key42": "52FJX4312kKCKfVMt1m67P3aLn7uzzEPC4tJkSYVmJPwcTJLxMsi4XKfEdXoYTe6A97BVA4aUGhzY46tQEcF391J",
  "key43": "3zHscKuvRPqianWih6fDSnz95tcQf4YxSH1rhbhtKZTqK4FD8XDv83UUj9MZEgMRZz9eSDm14gbMqi8qJwk593MA",
  "key44": "5mwiyKEag6Crr5ucbWgbfZ4P8UNnKXCCjdwwKNsbBF9vXaseL3CpYRgpCePXL7NzCRPfuHBoZFEG581qEoKJNX32",
  "key45": "2wFCWai6yzXgovZfkKNAb2WcQkdhgn3nNf5Biw6Xmc3aN1Soyg7yKwn91rd73Dm4unTYGieAPch5BoeCjdKisbpU"
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
