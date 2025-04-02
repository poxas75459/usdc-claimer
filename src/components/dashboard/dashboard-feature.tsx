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
    "2uzQ889FSMjmxenbp5y19aCCQLEN6qrWk1nHxUwcwiejrhxnBp4UVK8xsGqByGyGsagZEbhVGo7wjDkWJjTKsdTL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5gskE8Q4pMRfvtzff4sEwBSz9tUGPqiwmYLL4DuXwuu6BrQpHCB3pAJVn4HsgZTBAmUkpbzDET4vyzBPvDkTcv8h",
  "key1": "2dC5UJNSsU5C5SUKQFYjLimsasH6iWJrY9io43QRVjyDYdqKyj6WmB58QK3YCUTrDoadozQXTnfSfBWmBuvTqqBn",
  "key2": "2VUH3DoB4KgSBP8EYKSmsWn6fYT5VqEpeWUjwsvv7ZBusRtzSBn9EovZ56krz1ZEYPrQHBPvZkF2FhR9mPVLNhis",
  "key3": "eUX85ng1oX3ae6KG2ji2WJs3szHdhi6m5CUpWNzErXR6MEuKqS4s1MCsRoHWrgHi2AVtVYVSkP7hU9zYGs81gbj",
  "key4": "yyKQiP8eFLAWUpHxTQ2YFQZZv8Qpdr2UkHuUJdbxEUYtBdxB7fziLpCNBExvHy57Y7pTLQMvUsRwETSYQvLj3rc",
  "key5": "4mB4x3GjnvEf9Y5vEYJiHP3Z8VLdiD4zJWJrc4Vo8zdsHoDNvVbEm9m4xprsxuJi7DnHH2dhk7hxr8mj4SDLZdnV",
  "key6": "2SABZkm4QZYSKud2pFbHVYLaxEdy3XGXaMC1ddTdK3txRi1MREfGd7Y5bKqD8RVjQMxgEiboniqcQ3KJqk86BX9P",
  "key7": "eihhkCu7XXSkK7MnwdXz2u5Hn25fHqytpC6tvGtS3XfDdefuttsWdbRNRqdhNAWCogVWq569GAUYzzNxx4xXwXX",
  "key8": "3zmaymrNR3UPorRyE33742Z3dxHKyrdCk7i53LFiwNx7BvdWaDhB3yJawq7NAX1DgPyBCSctmkXDjjUSieEY5qnu",
  "key9": "F3tJ9wUCSapRsko6myX6W3FFhQd82qnp5pqXdg62NxmeJWcUEXThTNxXuq5BwXXVjGGsHcVWBTVPqQ7ShFg8dtR",
  "key10": "2EcQvuBq5eQbr3scpx11M1qd36UwJnQjSmAiQoPrCKeaVApbzopAD7Hz8DJdXp2uMESbwvhUp53CgfHVcMtTYmCM",
  "key11": "5r2CCyajuajsQ2RVcqTKdUc9QRmEopj4rsuiP2iBNAEESPGnRQyvjYSumyHTZ9M9iURE1WKkGJ15tAxMSNXDLf8p",
  "key12": "4ABRrMkTCQrLchzV7eGd9hAVMFCk16CNPeJPPfVtD6T8ZXNFkRguY4ET2Mcdz6ELKQiFgwkpRmup4RohwZ682vUx",
  "key13": "64PaEaQ49dEZpEykBAhf7LqhdBoxoVcWzrXH7wcueX2yt6TByNHNFnse7jkQVaA8mBmqn9ejcDLP1gjHnzKV4hFU",
  "key14": "3RQ7abEK5jm4cRdD5kCLi9VxqsQhEvEYimyPmGKMGdTstqEEoB8QCgLmYzZxxfSyNyWkUV39CPaeZ8BvicYNaWv",
  "key15": "3NK1THX6exNZWpguWXwzFpGj6a83gJ6zmeKPsqSjqdYjEmLBssbAFC4LE4NSN9HbtoMo1JTnD9uYhMQTS9n1sswH",
  "key16": "5GFct5Refga915mFxS1c9z8BnZZ4RGxQogQWUCHTpQWWHXg7dcgNzFquXxrrh7zY1tSWq2xRappbuVv3qwsE42sb",
  "key17": "3vJBFuGykuRkgF3zfpRoCPuTuMeetVrFRq95E1k2S6hBs31SGqotsjkHuYRqG3QzFdjSEQ4GqGEryNmRym8RupbV",
  "key18": "25U7heNGhe54Fzyr2sfneXahFRi65PDzhiYtGcNCXJBTG71nS5hSiy19j9E731bQNYJoNt7rufjuGayxmpMVN2K7",
  "key19": "4wycgGUBMkRC8zLZKZzPsKoiUT1qqT6kfjYpytiz29KFdT4b2YyfvUn3MVSZhmoMRZ74F5Pxw86aYoFNFKR9Kpcm",
  "key20": "5fYWDsxozAP4ufCKrQdeXuFs2Ab3EV5wX76yhegA9JvR55Dny6qNRRFrhcFK8sffdD9HB2mWk3ED9R6UupLTYyHy",
  "key21": "4zHU6iYsGeSe1F7yMoPa5LhEXaffZvqEf1YrGN54Tdc9RMMzTgmk1BA6ZkZUXbRGiM2D9Q8aqLvNaeerCmyaGvuG",
  "key22": "59oFJYdRf7kujpEeHDNz4SQmJBrW8NcFPR6AQ9CuBKxKawM7fvUvicoAr2hpFPTcowZeV8xuCfPQ8jATjMLq1xyq",
  "key23": "34uwF8ZWMC5ZLLr3fAJmTythKuBaWTWUaRhPLbFLWKpWvNQhi76oZ92bm8s5DvqacSU3ayt6WiECcQui4Pg7TEeD",
  "key24": "5GzrVnkdyGHYFWQigWkZcHPXqWoEePMTa1yau4CCeABTPppABrHBwS6M8kowCbdcWHgtNQHagwbvHRswJ2dhDrt8",
  "key25": "5N3e8VBtJird6jvjjajPF1FRSe6L7Tf4HK7zAsHgyKJF7J9TAp4EL34Hqo3ZNzBDmVb8mKX7C656HGVT7FJvKj9",
  "key26": "3QidhFv8By7dGqodwKegn6o5QC48z1iXUWxJJmCPMsQyj5hypGrcgV1id9G6oo65a3kw7qPzwG1MKKAMpuDRK2mE",
  "key27": "2Q9hRmgiy521P2GNUvWASDrcBuR1Hv75jaWY6qLXroTWGxwDbsSanf7wX621GGoMdaTNho5xDeGT4AdZP2D6Pd3",
  "key28": "4CGMhJuF8RtLFqHDSuiZorgQsrDPrCWJ5fL2Mc5FXyEPQE6s3wCXczkmsG72vwhJvxi7kgsKgJ2ob9KkQvh4kfEQ",
  "key29": "iquS9DyGJEmuh8bNFZWf2FUZB85EgsJPKuZZ8J16WEstJk1BKzYnD8B7rTKAiDci4KA9SEoMuaQiRmz6aXMCKyB",
  "key30": "jsfgp1aStsRwWWYF9TGoaGGKL6vngXf5sMPtuYHWcVRtrh9yFne7b97Vb4pexkphRyVhuMceTXSr63uxaN7j9CZ",
  "key31": "37tncUN8H7FRbxdhgpoTDwp8FFo6PxLTjHKjcRoKAMm3TNWDfK6tgLdVc3nBxFotEdq4seTv7j6sShFhoVYYro1J",
  "key32": "4MJBG9gReonKq6gbneganjD5bLoMVbnWLyZ1uTneiAtaKnmFXeDBWL4ZF3XKGAFHi4exJFQkWRbKmvcH6z5UvkXr",
  "key33": "8quDmTL9KTBGg2Hj2XRpfYv3LaheNk72S3W4L1Nog3QBRyniicFnuRZ7tZeCq6wvvcyNPTzoj7ZD33UFaDK5jLb",
  "key34": "uiLJiEi8NioBmzpPzhxmifdKzKccmpRW65SVb7m4xkCYf5MmSu7sbS8qui2tA4jDHEvWgthACcHYANTYNXVMMYd",
  "key35": "3d2twyg8huUDa7JhhrtDCPvUfBjqZ6X1urBrScYwVrfNyCRncLG1KMUczGmt8sktGk3Uz6ZcqKmoqPHs3sYNvca7",
  "key36": "39hWMxCj9sndYUXNtjMHNe5Rg1YYVCsJvLr4iyZdTKiXAd9nhYg1aEuS2q6xQqVqoipnD4QMu214WLj84ULdxVCH",
  "key37": "2bTxaAnz7Ysj6vvwgJD6nEBqKK19TvJBK1sVe7ayadQYrEtDUJm9NpDg1iXWu2qtxWWZ8JbaNqRehpQLS8VTPosy",
  "key38": "3ks41KtQNYaef9nesTQ4u8y8TEFV8TTaktq3bUESkEAmHCo6pUNpkHGLhw7PhSQ7ZjdZvbyymi8PCkFvizhfZthk",
  "key39": "kmezge8d2UxwmoixNSzxaAQ7bv7m425Z5y9yN3RUTmhECMAekhotqzk4k2zqHCWPGvX4tui6Sr2HCQbwXGGZzQY",
  "key40": "5ZaK3fDMfeDTMVMWbsvNc6MfjxRBaHUuuQJvNp5YVCu2LNTt9zXiDjtQDzdGyJtSDP4AdGFKNcv4dZVNnzE8k6LH",
  "key41": "325zpPAPPjZWHoRY2DDT9yUGfP7XK41DP8h2eL37s3GUggSNNQDidhcttL5aYEEkUSvJtge7be4GBtu44pamYgEV",
  "key42": "3275PQ7RLmYUETCuNJWhwCK5dWSyEpN8jGq3YYEKQebYgZzQRm1Xi9rEiSaZJsCixwstPRFG9BMZbstY7qHZBm96",
  "key43": "27zV1gJkEzVdSyY5NCe1AWay283o9Thy5nBKC6DQMbUgEiz1Snj5o1D7WXw7dVGDnLd2qkA3ATsYLFDZ7TZohSyf"
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
