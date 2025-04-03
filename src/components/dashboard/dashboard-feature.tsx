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
    "iYfNLoHZf9rjheVj2coUE1eEJJbhtiaiPFeSBjVc7QH5kbFgzZqNqJY13z4MbAPNHq1qe6dmPPtiKuTgUxMhbGR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4bHby1Vn52t9TzKLAMaoi2LuYSKm2DrMRk3dU3t7onuT35HwXo9cbuCQMoF8ea4LeVVHnRM33fdyKzz9331VZYAw",
  "key1": "4VxLWcm9inLh33qJk8Ez2knRbXV2NuUTaRfvkcCCuYPfpc7HCgWrVR4xKAsx8XDZQXPoheoaHYmY28zhV7CeRtvJ",
  "key2": "UpgauwjywMaK5x2FqygHs6SLG3694p1L1K9dPxAKSsio8bDcKPYk6yDs2gcmv7RzBQGd48oTKLX5cSRNHT2ihPS",
  "key3": "yDzUMVQ6DAics4F6CDaUneFizBVsjGuY9LaBH8VLrjJQGEKB2e29zDp349ZqJGYcuTqAmpLXHuuoZRkSeWAN686",
  "key4": "5mJ3c4vto49rgfRXr8uVuwtr4jxtV7iX19Pds1MQEbKLX6i1TMvFADS8Bu2F5QXPC5EDJTYybmn7t6wydhkHEs5W",
  "key5": "2PR7zDsB2EkYKGY7zdBKomoM7tnXB7VaCuqtuxrMZqcBQqN5B6F5qvQfMC1Jyvmty1cBysgCrwE9Q4kWotVboQGP",
  "key6": "41DMPsFeeMhCPmiovx9ugt4n4ub6KVdPW4BzgQ9QBZbd9Qb3pipUJjfqDGF4edYgQs4z4Ax2kc9mT6ay9Vo315s2",
  "key7": "651JjniH6TsptwVAcP7vyxcUwNw6FsLU7rKFWsmLBQPyDa8JeDgVx4jUPkSoDWvppADEQL2YNFRQFir7uBEcDoN2",
  "key8": "4DXDe9tJwga3ELQXBnRz9qymv4fnqT3v7mo6PmQi9PaKTeZjZh76ShoRjL2SbpedKTEbp3vF7NmMVboypS9rxxii",
  "key9": "qX2ZXqmhMYV17fZ6UHX8MAiCaSCPjDbQ1cHbYPRTcYPpfciH3pBqLkW7Q6xJKQQxjgNr25o7UxHd9gci2eoi7LY",
  "key10": "2yEbrheg38yxMc1LWQExc3GWKRHGRCT4AurC6Jr9HwAM2HhGC67w9x8vf8FdzBzgiiTa9YmmHJ3DXSeS8KsKfFVN",
  "key11": "5zJAJqZt7x4HsjdYrUd93PJFey6wSfpZeC8p1geFHsTdXJ3axieyWYYEFjTTfhXr52wHt4kQjjuyXrPGkouaBSYp",
  "key12": "QtyHxCeXzVKRornaEMgLzfxtg64iKJyvWQK4JUUh1Bq3edy9u4mmY2vS5feuTC5UYh3bF6BtZNf6VEKaoMBMmQN",
  "key13": "2gGEW5yWKZikYS87SPozJTzUKoN5DqzYYv9DGMsmQ7ZwfB757b8BEzxHojrJ3C3EZ5dtWQGoQ8x86rA29JpLy53C",
  "key14": "4GmZpD7EWc7NCcKGorAhUFU9revamjXTM95QkWjfHs89Ub4tYygVF8MGFQieXUSeyphC4K2B4dEsAv66r5ZkCXBx",
  "key15": "67Hxp447DJyPDFqFvbW6Jzp6L5xHFohWxL55Si8mpj9r12v3xzrMXZKfnsVPbBNs2B6btt5CjVYBe5pLUQbKHaXw",
  "key16": "5Y4G7Luf3L1Dyh5XnDugmrfPh2tZLWKtyxcJvfdUrLkTAbGVJEVr71K7hTSASKMU1xpmWpr5ZgoMPw1R2j9EUcBc",
  "key17": "LAcy8ZJ23bzj8X49LvgydFxiQCZ4Yx82kZ2vRDWESwPiWdY7pAMA1ny3sicXKB4XLAVwLis7Qoj9k63xXpy8kEL",
  "key18": "5kHMAnsGWLEFmCNGjBnvduskhtNMqRskZKVa5BVkwQ4QvYj2Ua9CgFDKE8g3RxeumFk4SbZ4N22XF9nQNDafB4Wa",
  "key19": "28P55AuGFiHN6ux6NfPVJLu9Mi7xsC13jLkVseoNmxBMbKMgFf6X6PPri9dTox6DYPkuNmC8eBRkP4pbQuoXoCM6",
  "key20": "3rYFu21kVTpRTYQk3Ru9UzQmQ1Lfo8tMg3soRHbngjDTVv2FnzxHz2A8vwHG3xLkvyfU85XqLeyx6w5onWByVRvj",
  "key21": "5MDM4CvyMwZhHsQj431JzYwyLNTCe4k2qQ3kKH3XJQKNE6XYWeb3RZht4UuqJC84yDX3wQDDeUzEPhK6VyFi249D",
  "key22": "5eKq9jQEzLxgbZBNU2ADVHbwpx3vYkiKhVCMN1tehWWKgdvxFK4UVEePZmPiRZXQ6UYEaU4CBBSSfnjoYCtomb1i",
  "key23": "4JnqH3wr5x6C1vvoCD9oM7BR6R5sMPUmb2nVokLxWEhSfDpWp5sp93ZU6vXrNH1KC77xywrC9F5LtZf7a9iMoi5D",
  "key24": "5djBfyJLPXe6XQsjd5CqoWqVNeacygKK7527ggK35K63kGo6uWo8ei6uG6CcchW9FtrAYQHc8GrsCwxCJTZb8rDb",
  "key25": "45umKyytGbBbe9kd1ToUqu8MmFJVF7GD4vgrQQTuJeZC9fAuKxYCUPT5pqSXufTuvViFhbCGyBCUw9NQEdNfyoyv",
  "key26": "e3QU3Njuv3kh2XjW8CVz6fi2oiVcn9XBRTLTdaQheJAngz6mVAx5VATWSMxEz3ohgCnHiQgQT8GPnRgypp9UyfW",
  "key27": "5awzWxUs3hazMi3vHY91MRWz4n3BdSSyvbfCE18p8enT7wLgk4DnCiMFBkpw9iJeuMnceeuLWTFHLyE1fUVbqzKR",
  "key28": "5WNKjPrkQX8UGaz936N8GUoVwNhof7wBgNtMV7vWzA3ABRcJZaAomm8cB5Q1tthYoXexSiGvJRitL93ZLhAZob5t",
  "key29": "jy5GpgFbnoRN2BDNKytrksYx4sr1YWtiJLQ68EKStozzvXzFg9unFqMmR4LoJatficnPizcwG8Xv2g5BLCqtGbX",
  "key30": "ZmZcHc9iAf9eK85GK4FPigVQw2d7ywicbfiGhhRHuXALeoeNkGSeiMw33yYZ7MFv2224i1UuGTYeoQkJr9pevJb",
  "key31": "uHMrztUyTdMa7doop8z9rsR3d3UjwtzqyMCUhQmUMbccr73aje9PWukxux5ErxSqrceaBghYWnPK1Shuq28NAz4",
  "key32": "KHKW4qfA4u7NB97BsEkQQ63w6EhszCS2hFWzCwAQgrgRAs9nkWRWLLVs9mLBfH39BtiqEkXC19JVSAZXKbfkXum",
  "key33": "5fD8BxsgB5G6NCgNKyvYa9jUjw7CK3qrYmKyw7T7QaY1tajAN6ayMwDSD1RcYt3htLEV9nRLsQjoA6Z3Yspikrq3",
  "key34": "25sVx3DND61bHB4AxJ6Cg4kcQSycrGMjQC2JKwhZz8nXJsYYgt8kHdfQddKxYaabmu9ubGKsroogzANjRTkBdApH",
  "key35": "5kjeTtKngwubVoo3ukWNjzNEPhhdt9GD9pKtZCLCkZVF3mvRTWipAZhyHa5dG9qhFsFa36r6kNA5nMPUM6w5fPxb",
  "key36": "2gYq6NLKs4EJX8WoRi4Lw8jj6enKEDJ1UNLVi1s6ZKB3UfJDwTjmKiQk9wmpkLWtVneZv5Ek5s1riJSuav7ajcMW",
  "key37": "4CKkitBNccZ64VEvhM7h3NBYcExQ4jH32gbu8rwXQ6DexkXJC8Kx53KpRLQNpTPNRiBoGNU5DiwixR1gM4w5qLXq",
  "key38": "vzP3mgnL4sZjwxvqW7NDZB34bGchDKPeH7pUvqaMtde8ejNF2XXcUzsaWVJVpgqnVrQS1ooHBtPtPpyST7gjoHu",
  "key39": "LjWcsYLMR7fHmvTUuDhURCV5utigLaqcjYtR7uX4HAAZMrq9ijEU4yd3KURJcJrL5SiMhbtdwNExzzmCNGxDcnm",
  "key40": "4sYQSrffg1DEUz3gqY3FNZJZABuw3ejhxGPqW1WzzNUqEuBedjUN259HmN6Xrruo6XTwidic7K1YUrvRnde3EuK5",
  "key41": "3CQUtKTywZo8CCb3yiSJjdmPQc5v8BkRPz2hJio3cMWS3ptpK85dZHQqzy5H5uSo47XFfEhFQU5QHdVk53finLDq",
  "key42": "64CLxiWnSyaMbQjiJz26dKJcNgyqRYhuQ5mJb4NHF5mR2MemeEo4QHkBgAbH3tUrJh5xMJ7fThiqVVhJukoAc8V6",
  "key43": "5thq9SHUAuCcnU6XYCJUwHpt7GhQ6urE31ts4qavJ4sYQnnnAGbeuL9BDPWEJ3N9Qi7YoLufYTpYScENUv2whWNR",
  "key44": "4r5BQcawYrcLxyWsvWFTXDoiRfjapSJtrTdEpaJS9RggaV1gLkrLiRtsTFqY4r9Pq2vWm9dWWcntAmW8E7QKXznr",
  "key45": "3rFLUZB4bBFtUfvGLEj4NCG9njWrBSdZKWmFRHSgrRupg2UuN1ePTaRV4H9A9FXYKYx67a8pN4B3yHuUZyu9Aebp",
  "key46": "29PYxrrtBv98eNCa6B91q3seVKq4TizkTxEpE7kA8jtnMiCaazseGVrHWwHZn8AvJXQaFZ87XHrr2iToZqf4uNam",
  "key47": "qMeFCuHH9oZCLssranHpwRA1rLqmkWtXCH12Eub5CbR78u5tHKTEGCViz5ssTqX8a33jK2PxGxeCZiTjVwWG5ZB",
  "key48": "2NAcUvSXDV6s1GpWB4RACCczydAUrhSWqAyvBb4RxXpbq8cMk1s9SSMk7zv7prxAiui5nQiRmZfYdRWx9cCB4gav"
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
