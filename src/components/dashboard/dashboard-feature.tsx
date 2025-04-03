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
    "49roYkoJwBhPsqx2N7h69hnmRqvf3YrScg3LCWPJwzTtSzx4mv5tWyVe544JobC7WszW8no4KvWnvfGxRtLxYM3U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5bGJU6BiNyMXHFmh65ot12DDqrwM1spRNXHzW9z83XGgwWngRsBHvJMgHYaU3mZrbg9jye3Gp3LWMR2b936Au8zP",
  "key1": "4TZxhBmy3q7KjTxhxBq9nydYr9q7EaMaiDBwjMeYVK7Q8du67Fma37UrHV6Rx5zz4hqsQbjosGy3ReAGrn9mvzNm",
  "key2": "2S9YJocjWuFaXcKnzc8TggWm5uLikvZj1ir5L9eQD76e48wRukaud3sDHi6A2c76Ye3KUGEkPcmtZ5qCnAQTrCDp",
  "key3": "2XU49bTYLw6jA5MHfviK8JiuUPqToxHRKVF259Yt24wvPeo4uzy5nYmsfTjWDP5zqcqW5A5r9RgDUtriov8cEPcB",
  "key4": "5XxFTDfgMcuyb3Z76MHaAV84Ye7YZG254onmQVsq6beq7f2UJKFQhBEFKtYiqEWWMwkMCVzF9mYFrDT6XNBJy4kp",
  "key5": "3VaVss8G7K34CEcpcREkX1rcUpEoCRy57sfRjZrWYzUPZ5RUJESWYJ2qwHfNqW4YixNhRVQWHiZMfDytffzB1p89",
  "key6": "4mhXMWZ3hoMbaFL9CGPt6Zm4ZqscFRzeSSFj3EUWknJ9MFw83aa5TXL8WeH3ELiNsCcopYcQDwL4Kwwec9NqXGcF",
  "key7": "2UH7LsX1XYmyBWv7UgNyYEMQz3oh1jU9BTmPb72gyXRzLuujTxbPPhMkgyKPWPgcPuLwhiRqwsMnGY6i7PcEJyZn",
  "key8": "Aq9vE6w38nU9AyJWJzewaRRbLd8fvxHpZw9KeM9qXshPkc36EDMmxzpnQmY7zi93gy5VxffLPgcMrdruur2V2vR",
  "key9": "ZNnKUsBNG3t8oCocG3m46mTH8w9mT4BP1hMdHaVrmjfUKTDPCDwJ1Fw8de7ELpWADCsMZCKkCADKC2EdN3P7Wcd",
  "key10": "3bjPWhe64deFSU6qRLN9Fxa5GBQjiefFwLFhZ6Z59y2XUdiMtzqfekddk4ffcnGQekqALS1hy4PD7wYDUkmmT8Ey",
  "key11": "3NtqmDyCZmdQsWnVhmvvgN2ZL7WM4Yk3ThZDV129UwB6dq8HJ5MyrNbLC2QUkcoCrCQjwG7bbX9y2iggFWmv1Tsk",
  "key12": "29qk8NzWmJUjRvCPXRNU5YjwaPo9bX6oiv1yzjgMcDRqS3MFpBrWUGYhBbYHnSgPPwGKPjCXZGnH3ZkgdqQHeHUC",
  "key13": "3MmPB9CRbhjWxdVAJSouzczd4qXCeWzRP9TEs3Qmk7esTUyYgWgYMjaR22aQYDGb499mzo86wUakrGNw6EmRhj13",
  "key14": "57yzsCkagSKMpFiG2BF1gV7gxuh1xcbdmCWuPfp5e4FhPyEydHQeJt9E8gpr9ByxnUsWLSVeAyDFfeGwRjib6cbZ",
  "key15": "RNQxacaFyAzXfES4gLuCozdgPH8CYHDHcp3vyTnmYRNGzaenofSCkHwgmhkfVFG35fQD6W7rMmu8SRTRW65EAfp",
  "key16": "4Pia9Sv2h3LtwSYvxqUQuTkrwaVJtvXM2MyuenBtxZ5f34jsMM12GRLixBp9J6X4UvgQWy1DSsSoVrDgBgTySzCk",
  "key17": "51ZYk89DztojHium5SHMFjsXbYQJVKUSLtLytWs9VC6zn7XAkuYTeSMzHnuPLFNxKhqxJTjiEHuQrJhaUnofwkQC",
  "key18": "4pFfVXv6QmxCweDgu3SbGi2XowYZJLjWNsLgQScL5eoe4fGsqPw6ni12zzVkceeXrJuPHWfyVzPkxPrdoGFdCo6d",
  "key19": "rmdevVVSmSFgCuyBKECfyfBNhB78Lj5uidgDp2xUoa3NDR9fEgVacqQr4Jhx4QEp46HAQy2UjU2qrsfFQrogwy6",
  "key20": "3fgMiyyTGCY9JjGXNK2zxs65fqtq43gyu6NLyVFECTfEYJHV9eoLxvp8Ss4K556NfYNFT58RhBsb28HzMjYxDXdK",
  "key21": "54ydsdPuMGvNR52VDWNNAUWRpiA5NR887c2ttbYUqgDawGMqvnNn1xTcYwGnqhh4yL3EMavjsSS7MMSRajjfBz4x",
  "key22": "3ncYDZZfRXt2AK8QsLiCdhAyMmxxLgH2XdJK7fpSjvfKG8TDwEdxEUkL3PUD1EyTL8v9uf5gXxqR4avZjcHhwWta",
  "key23": "HHi2siibmjgV6g6jTQ5gdr3uLuKE4ymF8GAQeDNuV9tBxRiEZb54Rwih7hH5vRLN4RNh8SdJaXWD5Ar6aDzDr2M",
  "key24": "3X3uAo2xu64CaCx4SBe4pUYJNTrHA9oK1weDpxti7jUAQcMW8B9aTm1aBzYSGxzZgdtYdKznq22ptoqnoU1pGQUG",
  "key25": "4cUZvweei84rLDegHMtWdtGzjn1jWHn5AAeaUzgqqfizoBv6RidRWCAemcPbwHGWUS6pjBrXwsm9MomE7qCcTR6z",
  "key26": "4gk6H7MGmRksLomcsdjSY6dfvBN18bEHohnApP7hJukSmmMHy25h2YmroQN5Q6GbyuFEkgH8A8LKmsgyAARnwHpS",
  "key27": "Nctz56n4Yp2j3PuDKmYEZCTPfpDX54boQgMp2uH66cbtYfoUBsCpQjaMJTcPvUQpvRBSdaYcQ59A5oHYvu12T1L",
  "key28": "5w7UtUAaa29qwBMMagE2Ry2WAuxqVBJouEg2K2YFT5pCocDyPZv5d2vcJi4MRqx4wD3kgBeFJx6q412r5FCeb45U",
  "key29": "21eFogYKMGhBzRhmRfSktprA1rkcQKcYweppE5nirDQ1U9xnHenVWmPYSCoK2QXFasSD5SnTrYY283Va3qsF7Rra",
  "key30": "2SW3oVvR9jrKXTzXobhLvSacTnm2cYG3VkVSTfD6BiEVUZTr5Pkew4nEkLpAGyXqvb1Z32rf1ZHbiRnX87XcwpBv",
  "key31": "3yXo8DBHgLAU3bmaRpqqG1NYAL7bfZKngnqmJAkoZr5RLXuNf47igwd7tKA9g846HL2H7PY3JRwusxaHwjspercT",
  "key32": "2n6wwZSatJE43JjhniN8krYioCcFgWL7FD47UFkmspMohkY7FL1hFz8sKM13JDC5WXVh4FL3WojCzZmj7F2HRKtD",
  "key33": "5jsJM19qUYoCEB8gBFJLxsSUX55o8gasZjAesP6LA4GphesCeEUM4ciT7LT8PD5Uos7W79wi4krFfQKszJzNdkbb",
  "key34": "2CsB44BgxKAWVCumbMz64EL7CceFJLGwz4TbHdfcPnSXEW9GznTFm8SnKmSBTezuWJ2GFxZRvesWnYXNgg7ynZ8E",
  "key35": "9ciThUgsmEnYgR1Aq346kNEKusrbB3V91gr1pN5nYBbYU11bvkc6DJxLPedPBSib7nNepQBUL5iTMoUrAaHdXXH",
  "key36": "2b1eqrbyjdJiSZrJWC59xhp2CXbkjg7NWHc4QKcCBYeSr8FGeaXqiCVQurtbGGAWUHubHUcupwXgB8vWND7sBQQL",
  "key37": "5DKJgKeR2i4B68452PdLAXohBUs7LyKjenC6YrHc7MjPN3qWDdwt7hAqjEu33ttnRHVh5bAZnF2unumEF3VkaWdj",
  "key38": "4j6pHRi5eKTcaK3NSAgnf8qrmkzJZe63qoR2FBc8RM1hsuFAH4pLfSuRPcWWGcVnnczGy6ittKfUbbrB1CgHabxV",
  "key39": "4LUsV72SwHnwoDoonD51rYt5XDA7nufZyJWB2x5BpKJBoqoS681ZbZDFbNRL9xFFoMExpWPHCDpSiDH9gyiEzknD",
  "key40": "5E1peDWUpVkQEjySVxLcjwj6mt9RQCfcuhcDSjkXfs6Te9rTjknZ2f7m3aQdjj9jdcNqZcpjpAWXZm4iQbZ6cKeJ",
  "key41": "2tuaJWCquTf6YDeqNsAnVyAiF7g5KnaG6gXorxNd42Ku4Toe6sLzsmkZTMfYB98PUUEQ8xavHG8JcBa71aeBfCuk",
  "key42": "4zzVJmtyrG7cmAMsBkFofy6ibcmWonskHj1gSccLAMVtWmP4gvqwceAiZjEXg4fgmMaumAU8eR7JjdZtxGZQYaCC",
  "key43": "5QtY1j19ExqUdjh3ahGhsu6vV1mwrzp1pXdJQG2CRWnu6Y5AexX8SJHW7eTEMobq9zaWZr1kfHkoNxWkyMYGsdvP",
  "key44": "2iH59WsGaDVE1o7Yf5s8xmQM6tkk5cAXWzXvh2f9XgcewP7V5vJrXLDPdJiFaajNKvggiWgnEQzp5GJqsiVeGKTH",
  "key45": "3VWCv3JNvuM5wGtkST6ZCEc2UzkvQT6REMnYRVsHvSBnQ8cNhJh2hxjVkWhFp3RRJEkgDrZdzqdg4Vk9CsMDsgHh"
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
