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
    "4vaKWyNe5aMN4FjXC8NkUEuxrET9KHiQofCN5K9njTfNWLW26tVQ7nfgkma1dT1VZvhLBzxV8EiKJXD3REhKhbQc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "uGUyvx4zCze6HcVTED1g8mJUezKGXjjCwc6vPFcPXFtfZ1diCDcv7z24bHyFSvjdxgnSWswkRvG3ZzFVCyDWxkh",
  "key1": "3hriuEd9Ngy87cpHRfXuXAH4xpafPnVZosUmr7uS8S7qvrftwLx7amZxFCsb96TXDQ7togRk6LWpi5xXCMAzoBKP",
  "key2": "4hdYE56oqGZ7yckniLxUSFxyPMrowBqsxZPkwDmUJeyhqoQ41PJSst5gwsxtvWtSFNNFAJ5Xnv19PboQvabEhKci",
  "key3": "4rNSjDvixqwefmpStgAk2huCWeiA8Z12ozefXS5mLDUEdJRcoqY44wo5Z23eonpdLGQwvfmkZr4GAgz4XuH9Z75N",
  "key4": "3Yvk7nFNrAFhhYr11gDHyvpAsiVWZnYmKgc32V99zmGxjgEWpxgvfRjFL2DDSYCfET4b5pjnB7FM2r7zqobmho8X",
  "key5": "3DNfU5vawMrZpGoVPuhVD35MVubwNsvd2e9h1UX7u93vn8kYPpwkpTqMd3y4eZbBGPANR4kZ5UWoAjkzALkWEbE5",
  "key6": "2sSQhgKhK6ZAiib1zvLtsJWqiQTirRGcF8wn6By1xUwTfw4gDaxUZzZaXjXHrLpRTZCogMt5CFd8AZZLK6zymLbG",
  "key7": "3be2fzwMeKryBmF2CEpypVpGow8tTreo2iBPFnaxHUYi1HNvxhJbdTkJS4oab5DASi9WH6U9k5oe5tqYvRbKmpRi",
  "key8": "5AHqgycdym5h1G2A9Fsp8yYybfx4JuuXjNTofVNYHKy4ZVKnbhy4LnvV2r9yy157jXv6iToCyC8Q9f7dcPzJPLXn",
  "key9": "3H32eSj5oRJBhEsmp9Ab3VQs9DBC11EF7uLuUehiErJwkmQyU8xPMwjyh9YXuvtdBkTas7nZg8KuJ1eBP6cKzrXP",
  "key10": "5cac2NvsQoa3htdVQHsQRUqZbQ6SoVpjQJ4p4fzp4GEDzhWa2nM8HWxpmxZdg7jm4wG7PwNA8a8oCXGqHZf8U3Ho",
  "key11": "2YvafWYHHfndVoZoZxoKuZAsDPJgQCEt16Ecmc7Qbn6cjBohpyWWfb9gqQyJqdf5N4ntx2K2fKPFb7SN1y34yNJK",
  "key12": "3dzKpAvcVSFohVCd62qyGyFinS3hxgkTs9fuo2QWEiVykpomyEax1wV7cBvFRS43fPQ7kB2J7iQCHMRRDKvEwFFi",
  "key13": "2TYFM6fPdnarwRjoBx6Qodwk1gJePnArrEdMxHocj8K4gKogRe8ENHUkHgdCUwqJugPWDhpRRZbgDddJWSGa1enQ",
  "key14": "xnLv2k58de8VfsiyUDEtjTc2F5c3JudG3m2iuYXakqaxC9eNJZZcJqeBphkbvoL3uTicfbs4KSHSPA9bf1B2YyX",
  "key15": "YTnchwYcRNqdYA7Gemcg5EUf1wusn3Q8eXQvZvkFybF7RSmT6pUSMsMaJ1DTPF8ip3K7MMkHNDZZVNka9oBTzxe",
  "key16": "2SYVoS4m9e1EJSnmmkq4QnUbp9t3mVvPHXKxmCF5xE9kQJZ1y6VfeA1Nqio8WFrWxS47KdkESu6cJ4513XeGUEAU",
  "key17": "5ZzcgmzRXaRYnXmgzfNpmymiiRQtV4k2Kmxsr5LhSrbB6EYJnqTJEECK1Xg89XcS6a9FWdQkxgUGeYeoskt5Do3N",
  "key18": "4tgg5Xe5fP7RsKU5suVjdTJtSJBnheCEPQaHjtxJj768sRDFMmdsMAq5UQoevVPtxdkeTFCbe2tBSkqLxuBxWeqD",
  "key19": "3owbfGDiWCg9gRmw5kW2KoCjmE2BXQhBpgoVTNmYDfKw9Xo5xeLabs7bt9pSbJV5ALyhgX4EQpcvoExwAsjiCPqQ",
  "key20": "5J9wWjZJRgaKeJspZdYBZUhvgQNBfqqgFiBmxM3ey35iBC6SsAhp2ZRtTJHfbxpvFDarL8gqk9gm2WzdytpPxtGM",
  "key21": "3ECVtiuLb3k74VVgQhEHsira5n3VdVffVCQKMHiwgdwVPSUBMXfrodsxaqP4E9UDNq4ovrS98ZBkdcgpMcxah8ng",
  "key22": "2F5XaPrrQr7gDHqkcc8emm8xxpFF5iaNdJ5hGeJjQ3zbgofY5VJcygtiLe8yFqDu9TUbn3uMDTEq7yXpp2r2rG6Y",
  "key23": "nkWeU5JGpW6haj8G4KMWUNQRMR7gGW9PLbVVFLy8r324BKEZvgQrrJv7KC9BUWNxNR2QmW3UBFJhE3j6BrVQVAR",
  "key24": "3n1ciBx77M21Z89bCSa9xJRY2mmi5n54f4W93HJofqft7Xx9YfeY6V7PjhMJzFYLZKy9HmvqQ6VVk3GX25YskjxU",
  "key25": "4ptyHQNuwpUzvZL2uJJRDGmAoCuV1AwRxHkPtK6k7qiYh4gRbrLHtaFZYhYiPEKJv4vSZMxmwnE9GrKT6zKBMbfC",
  "key26": "3xyozFqzewA1b8Qg7s8Kjv3XUfoisNxjXQ1oyRZS4spzxEqXbk2ctJQgaDhW2dLWmaodZ68YEC1EGkHDnCDFvqcU",
  "key27": "Nq1AXBBMJQyqBFmwkw69rjheGeBjNG1kA2MLuCLNd2hckCgebgErtAAjKHB2uK7HqRArWk53NUHeFdJU9e9oS8h",
  "key28": "bG58TVi3TnWsA1TBqHHtQKhgTtbRwvXzWUw9PQXVhzcdR254Lp8FpHAWWeiyfPHUxv5CkqgjMtnh8NvE9VWe94R",
  "key29": "vGMz6rzqW6C32YeVwhomp9wa4HfQncisyQ5KqZfSUg4fqfaP51sbaqXGQZd8naRf8jK6CWWb4jgerhNiCptcnCs",
  "key30": "2x2dgxvXTyc6cdH6Ym38BtH2t67pbo7yUUQ25Mk3A3PrT5JFKT8kcyzwvy9Q7iiWyrzajjLzeQJCKF88WhBSXdwV",
  "key31": "5ZsrSepFZ4mfveUNcy5ybZP6CcMoi8PQDYQvYukSV25xSMqY2B9WKYWiJmWLYyBwgi3WNSHYEESmQB4tHitdYrDX",
  "key32": "4jQhznbn5qJ6pFPXTKi3M7jZCPH2tTomc8ZpEsKomfBCQusn59iC6idLbRnEHE5jCazsoiETSg66sYjFagRmznKY",
  "key33": "JWGWVaDsHwCbEXEFtEcrWDG7Uu6W8D4TNPBP6wBnpKZZvmTs8dcL4G3XkE5Dvar1fWfecxZKU7VJsvZ2pML8VFE",
  "key34": "2R6WHbGmj8o7c3kChxZNUTvnzfLs7wBLrKdaRMDZnu4CwGBgmqHkCnf8yWwGCTTtmn4SZBKjx6SabWt9LuFoW4s9"
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
