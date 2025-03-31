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
    "4t8LvFoRmG4VXEVFQZCHxhBaYxcgUrvmM5ts89t8j94btwUcZjtU792Nic21rJjCwMA23oS7AiQWRJMbN4nEeYpe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "dL5Agd133NBLiMyYQNsg1cM23QjZZo9pZs2dQqCFtLfWZky4jq2jDbrgqwMxFs54i1XqxuY8Le6GAdyW9pZwMuW",
  "key1": "39WXzUp5XvPFsirA4SmqUran9hBjPiCZqGNSHuGG4fXbsQ5ibntYebcr7qC2NZBofAHs7UYhnuyViYeZKASY6xhN",
  "key2": "aW6oeQVNDn7edngbV4Sj7PZgbFLcwY779bHBPSNE78X211DJoaqxWgibKxs3KnaFPSohsDNBFyezMyAqN6gAyfT",
  "key3": "z32xTnEpHk4BsMKhrhEXz6tNBCKH396hd3UW8wNLoRjfn6mjsgZ91YLuvQnnGvmXaPWzq5ybRE38eCkTucsNpcR",
  "key4": "8V182fneVgprknCxQQsix2xb9YwP5J21oNHJTiw8bAjGrFaLX13CSXmubBoEhHXWMiKn7Mm6pw135qa8NbgpHh7",
  "key5": "3Qb2dUi3jwQUt57PS2TwtAN2oBGguqdaMt9N15JTqbwiVKQeNxJBMkbDTuS6dLcSvCUop5jrR2fzTzu922SZjPku",
  "key6": "2tcdBeWsKjuSZsMML2onvD7kKnUikHcWUL3KQzL7n2u55mFoNrPJbRaPxbSFjAU7hrZJM9W1GAGE26ytJ1VV2PaL",
  "key7": "2Ss5k2Rudfy2JyNLCGocwRGfCaqNvZ9WDwywtXgE9JNrTNzxL7CvKPzZLxqVS2k7pk29aZeAZy1UE8gcgX8s9LS1",
  "key8": "2C8PjW8DCDC9d6xexDzPwzQGb2EE2uXGy1PwVXiKSRrhYnkH9FHEBvB1H4BynJ1m4T96izDgWy4tEGNT9AgCotJi",
  "key9": "5jjWpdQYPgnZQtQf2bj1e1BGyvL2snGbV8q5u8rm1VLNekJ778WPrW2bk9iK3ky8C6P8RvsZXzU4v8zjpXbnYG2P",
  "key10": "5Sj3tVPdtHsEMSSNj3gU2mSHYrUkcYNq8WNU6Egu6V5KtdKRVsdWjc2y5o5rDpJifdS3uZRW3n66SVDZYPakcYXs",
  "key11": "4tRySQy3ZTsbRnYvKUzNFUQSDxarrY9fpuz3vZNQxhhCGPnpMSZUM1s3hyKjrQwu2f31R9Hn51R59J2Kp9LjnXV",
  "key12": "3kCmqSmV82BiicDydPcqYT5ziojNZ2FxhHeJz8FgemGPcigcgL1QLenYjKc2DxcXBWpHSWAtT3qZQEVwpiNZwBHn",
  "key13": "xHD2JQDMERnQdfcKp689Z6Feockq9WA2G795FHysnJ1xjWxT3JygaForp2sNgWQXpCmpSdQVD8JeE4gVz8rZ3EK",
  "key14": "4X33jAqCE4jFFa2Y2Rr3aXQZuXhtCWpewm6je4ycKMWmEpGhv1mqrQsq56vA5jDnTT7Z9vCVKB6ZEtzAx3Z6uk9X",
  "key15": "ANxVxSSim62DrHcnUuwesNZ7snYbYtJJ3z646B7Cqm5jDPBzF8Z997juFj2dMWdwD9wMJtDzAXXW5dndLojtCRx",
  "key16": "3Gd3vuKcbmtgss62rizTP5zRTahVAyebn9Wu56tw8NbvyiKKHTYpU8KrUHLQpkHG6jwNyKichb7JSWi4GC99hB2",
  "key17": "3nJyUJ9EzWgdwAt6wMNMgN1tMeZcsEzz2E24ffAyW63BstHATbvWsVEBFhTYS8Dj5yvjpnKfGh72uMWkLP67tQPz",
  "key18": "298fZ5Phv2BHXJumr5vXNakDEckoXvA8SjDJMmmwdZ6aB8VP9iN43DJ7wJUujGmNomeXshpoA7AzV6fD9X4xFKt9",
  "key19": "5J9nq3fVQfMxtFjgpUqNd4AoUsoBFpTAciyc7XUHzxvPmiv64RtQN8NT9L11bFXjFwc66a99EVCd6Nm6GtS8FAz3",
  "key20": "5VFVXFMKq2gXZATfrgW6njfRKFRuwQ5rndiiqtaLRmjpcjpXAmdqR9x5xdQnWQTS7MvXkmoh3fhb27oDEkqe14DX",
  "key21": "KhBtRrcCyuNe17vt5BftQj7S1cFbD4FEjGNd3bUf89yE3f3pkETTkQ27XQnqRrEjBSANXqYJmqvgcS7dpL3C5x2",
  "key22": "5anMoztYbbWJ4NF4NpMRVcUeB55xohJg41j5SADaBgZsEcs4VU2WAWX1z1XY17yxmvvhMWfFGu9YYQHtiEMVEZPv",
  "key23": "2crHNKEGiCF25n8PfGmGHV5gVUoFV6wzQdUDP5qWHwU5JtTwVMvgH926EuGivHGWR2c6YvNGGv1NojjPFUu3ysyh",
  "key24": "3Rp8JZH5a34RheeAqmZuHvkcHq9kpNYeLkHfDRYrqYpf6NjjA5e65LwkhRAKsAXS38Fvo9MUXzk5xVf64WddDHJZ",
  "key25": "5sGGqtCdT4sa2ECyqyJp1rjX55hismbBWXBgev14HqQ534V87B9vJVdGntX9uQAwsXfs2p3Fb4UStncXZHaUe7kf",
  "key26": "5aRz6GZQrSWTFbiViQN3CFda7rvUWQEtvxoNnVoBHKYHeFSrqC7CiF75nUV5yodnsUppxZJ8peGABZRoS51pbkgF",
  "key27": "4WZ36Mz3ZU3VVxRtroa2u6ckqZW3CKuZtpEPJ3mGb3qR9sMYCGGJ6CMijJnkXCMvCBW5Wf6JsZUZFgMRJ9Tqokf4",
  "key28": "48q7AcZM31vrJjRwBdf6ZuUBMdfQR8jyUVEvunkRXpCoZWgJd9AgJ2qmwZ8VVqMhnAh9LgZJuN5pZm7crs2VWWhN",
  "key29": "5F3Ur8XrjH8Kqr3Jd1hSJKHi9BDo6k3ZT4LqJ2Uhye9xRVqrY5vim8r8aZ9Z5CZFk6rmFe1iaSZpj7vTP6iz1H1i",
  "key30": "2nptWxQxDpkQ1ThTtAGVG8mP5XfW7DwThqYf65acVCpqKdzmywFCJBYz3o7VLiezPTf9YUg4kQKaJaMoeZRmh9VZ",
  "key31": "xFGeiNHDxdwS3kbmPPyh6iyAiattVs3roLT4NZZ8WY4kwYfBrfh6S4r2giwGCxFd2973B2m8SwGdf2PBNGDGfTg",
  "key32": "3sub3GuZqRPLHRvkTn3jPbisTL3bHX5NfvU99tEBkB7B1bnp6YTjg1AxXYrpsVTzgjYEqZN3GXjU88ZN8seEjUbo",
  "key33": "2t9VpcD6XTJUUREf2eerHqN9EXPhsfVHxvCCAMwdQF3rQsv7VYCZQdqZ5WKHxMuZfQVHrBozT4J7Gseya7zctVpt",
  "key34": "CoY43i5jaFT3hB6qdF7dL1nR1HZt2W2kkbhN78y8WyN6ciRw4CWrZbE1z3BKDc9YfL9o2jJkLFEMDAbryYwEzSQ",
  "key35": "37CrzPxvEpUgz4vxmxuYTduJc8k96yCV7d7UJZCQ88P1aRHsUgSVSLsJjTrNFDtQP72QK6Hchj35athoG87xoYXA",
  "key36": "ZWLXPPgEPaYSdMfNWuJzR66qFE8ZDVFSLVuQyfE5jvxJcpe6pqjah6Am1LhpbGRp7VQPJXdDzxDzh3iz3CeZWJF",
  "key37": "qUuifrPYnXpNKu74CxfY3kmW3ALQzTaDkydPJfQZHAxqyqG1KLVj4Sk1UxJEtQRQehVnojpSYu5Ug763vzrwDZ6"
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
