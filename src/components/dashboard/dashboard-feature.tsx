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
    "Lx6HJcL8QU3DaiVDkDV2NKxtCNY52B9mk8CZERnF23MkWFPrN7aZeRNfvfXoeuqWrdQYEeHYY4QT31YE9J1JUj1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24kfcjBwjBzgzBGwKs8vrDftZzBWazo7AjKN5shiyjNJxEBXfur4vWFKNNnAnnSjt4LV73LJW5pGywxBFSr9GZuH",
  "key1": "VmWJNoeukgCDMsxns3R84pCCZ3GCfetu7fQ6CyXzPXD4R8qD14gmK6DAR5YH95BeYtH8aq8K8ghPz48jLMMEfbD",
  "key2": "2mEK69ViukPonALqgiRbvMFQXsWADLd2r7mZeVCAdiWF3XtYJmyUUZC1iD77BA45xMWeN7GJsXTtV5NGir2sZ3uJ",
  "key3": "2cdDiKEpYN4dhfd3ZPmF8NNKLWK9eKz3rcFjkdAkLtymMYwbUxf8Fz42sig72tabCoz98bWo2yXtFvE9ATkfuVNp",
  "key4": "3wQzWZoSSMUybUPnWx5e7Nbjg9EBW3rReTyRVqTyLgGP8sGY5mSqEkVdGq2FX4ygWJbzs4evkdRHwRtGG2p6KL4U",
  "key5": "51eJBdXQ1WkUDY5a8VrwbsLZn26m5kQrC1jgEETvfcMycsLUEYJK3nLiMf2gQC4ob6V5Z8CoVQZmbPpepuKuzuHG",
  "key6": "2cibpZyRwyp1H2NcQyBoz72Lrrddq3FnuUUeJWLNmYYysMGLjzmA7AzPmoV58dTZzYdHhKfwoQweXAfEhj1tAxLn",
  "key7": "5j5diEN9BZwiCtYRptn7pyZ35TQq6M4C16bMd6fJyhm5kG7cxJUSzKQgokfaJrApi2GVUJG5154WHQ6RMf4qGEXf",
  "key8": "4Wd2eRAteX4tE3kbYvgydzp3jvHffcyhoLsx2Ld96FqfZi5Z5BsnsM82JZ5PtRXVCLKv4zsPDCYmv4vZMu24rgLz",
  "key9": "fzxYgsSihQoqULCBVXXyFNRiAcg7WVm8W6kike8NxNagqQmXBHx58LYXoSbB2debEBa3cJoey9L9vQrkrmuAurm",
  "key10": "2gb8W13EaRuzxgUznpKrSDJGMi15DpiXDX4ECYU8n1obv12WPdJbuNCX3hYAbMPRpPe6Ej3k2CATSQLeAqUaCm6X",
  "key11": "SDY2koJct4wYTJBTnVjDNshxoG7gxipLYzbgwkH1KFVtiJRvWDKBo1YKZFAzaNCP7a4vATVFtbVpVMYaqLYTVZX",
  "key12": "3y18HHRvYZC4z3sZGsQbXyY1sg8x8qMHA23xs9aT8zGnWCzBmxkjBqjePAaCkCBS4c7nPVBtkRW5UKsChkhL6qa7",
  "key13": "232YqLk6LKnyY8uiCNteSu5M7cYFQh2YJWc7xqv7XTGKyWDqtt9APbUjQXvZgsNpgm37MhvMT5BYT1wKX6dXL9s2",
  "key14": "5c5iEnWPX8CFh7sZ1RecczK3DMBqu4cbhuvAZQhT71Beq5Na6sYZTmBzsGEVYMUfsTzQtTXTLrs59pJGk5vFjR6a",
  "key15": "F5QWW5ajsZ7qHfpqp6vvSphkBUwfiBQg1N4fUJRwxYe5Z2X6tkVfeoNzoC1vdFwFLqN3KhVNtT1LERjuFf2Wn4n",
  "key16": "659PgfKkXXV4TgMWdDY6PcM9o8qr7eDVUtac8SWZVkdud5mtNbTSR5VhxCNwHNApk1ZAg7kdp2esXk3ZhUvtdm1T",
  "key17": "4q91gr92hwNtDf2y1DBoHVkVUk5u3zpxBsrZ2z1NuRVe4hpwybREjq5uXYsNPYUMaPeEaxoaE7KPYHyKY4ux8er1",
  "key18": "66YnqJkdGEi5MVgTs2cT5PXEVs8msnJzfBypADMRYbPqUQZSEMyKMnrFTr37XGgsU2q51CVQpjh2jcbyZ1hWj4XY",
  "key19": "4DCokiRmNmq5pQR9ZjjSpDGEo8iKVQxx2c6QY6uLcN735TT6A9m7xD5guHMRmnTLyMg5z1zvfF4YY15HWZaX43Pd",
  "key20": "oR7F2mzXMrjEmBDm14QBGBKrvkjgwU2DADHGwUVj5JgesjMWBvF4NHJVgRGAYVsMv5xxFkuUsdaiiS1AL34WHVA",
  "key21": "2S4X7EJXUucrJDbKwiX3BiUkywY4E3kreGQGhpxsGmU6pBjAKS7dFvugseB72s8mL82kv4UeBspgL9nJsUzHjxzq",
  "key22": "5qZhvc5EWbmnkmdHtnN9efTgoVBqjEqyn3r8gvMgp3wu7Zr48mZaSMRA46wEQXeZercnj9Ps8EaV4otE13e3CACw",
  "key23": "3spC6vvsLXArWKzqj5ewaoko1bSmXK8HgzoVyN9CF4FJKagcAdiumtEWWFJG8ADR7iUPHWDAHL8M58MRH4aUsUoF",
  "key24": "4B3ijv3PN7s8reoEXz9CvyH9anT1RvKp2vQuPo8zYoUfwYbSoP4mbY2JmiVbFXh42TQkXfw2c71zkF1X8aVaY8jL",
  "key25": "3Toj6cpJn6nnQ7NyPHr4P3BG3py15fiX8oitcVYhkFtSG5korGYk3zvNQ7ZPcKqgKGBu8QfFMArWp3wB6aQ9opsq",
  "key26": "41R7VA9uRiXar1gGcqnZHuxVmg2pwoRB5bQUnHasEPkhStPTAAy5HW2CeBu1imW72ZC6bJaG9F5PZauJMpUiH986",
  "key27": "a4QY4bvCWaHD7RbhnqsXcgT2ismbkLFECQXGCRZ8YmeJecdoR7ascLBGba7559vLKtwxro4JBTD3jXo3r2DyWu2",
  "key28": "vHTnPpWdvdfHbXBQWTFraED1QffThWr8Z8CqTDykNrpSwqSqLajzKcJKDq9FrwqdjKM4mbzpfC5gEej7ZuRecz7",
  "key29": "2mTipMjc81yt3Mx4gHVWMkgcNQGPV93KDCHaMYpPYn2DJkwUG33cRGKpxVWiKtXm8RXK1M7FhQTvpcRskSBBFbc2",
  "key30": "4UUV5K2iHe9LBwB3Ao7h7zBDi7q7pxbiky3qLeNR1kGKGg1M8L8JFZ5KwfqnEJden8Pq5Zg9MCjDGJkjovR3DDVz",
  "key31": "qUAD8h2v1FypKCfMJGDTukMWjv5sqYwuGPy1m83Kr1PXnFu7jQcKfdCxHTsvPU8Ka2WegiAezJthyFL5ro8iZBW",
  "key32": "3AkzgqvJK4LpYo7crATbbL2VyBAaLjMmgLuaMhYbmYG4Frr9ev7HYfNG9PD35gTjGBA3M7Gpatw7CT8RkyeDz3Wx",
  "key33": "3Ko4zzjZHvAJCas2HJjMDwHH5YERmysEHYP5nbS3xTkccLx6rQHvfogFqLkZzj1GMcnsiSJqyh7PXudz6RoR2SU9",
  "key34": "3nP8mXtvmCBUSh5V5UmjQPTCzFojz7sBynYMei81UCDzrpo4PZUP5upeg5PXfNpLDAMr1AsB8AcgKb3Xx8TfVCoJ",
  "key35": "FrhNV1cFVVbZiYwVRpn78pyjtA7KZUbGg1RHortAA3y65v6Mvy7BpfjAj5xsgPfKuZLWM1tLVZFmcEya1YN8Y24",
  "key36": "3q7MKbsXLSUbtCtndyBU1BR6ZiSpFu8MvFj7XXyoaJLhqg17qeTXJKM7k62xdMQ1oS8PpP3tQiQP1HTgPnPZmTCE",
  "key37": "2Xmar9pQ5aq6F26Z9wrfvQ3LByefUEJCTRxwvKnHKoY1TWfSxhk5opce9tzABNKkxTk5eZ9YscnB1wd9fvwGrfVt",
  "key38": "3A1kSvjQR43373nzQcDpQLBVCQeijURaHEnrtcE97KQpyj5aZ76vzLv7eXCUux6gTWBVuVkAoVDLCwMmhfwfCX7u",
  "key39": "65Av7AHfDY8YVKdv11cGyisnyuC2fbXaRQnx1QJi5uKExpyCXSA1hnmBsDpi7ED57hJWwVDmTFDpey36MfiVzDm8",
  "key40": "3VorwBZkTcx2jEM78jYbq5WNWtUbqY7hMYyKLqmBPa4hbosgHfze4uTeF4p3qE3JgJxJxgorFhGkbfCae3CdLfQ5",
  "key41": "Y6uLn1AYy3tXJWr9FT1S8XXwijqs8DFC4Nir6ZAnm5vJmJagLMDMrWtGNzz7urATL5JkocfTnu21P5eu35Wqk1G"
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
