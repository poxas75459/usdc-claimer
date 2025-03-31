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
    "9wsnXfnF79kTZ4tBRcZUAxyGm4u7V6Cx8ZkKFNMvv2Ruj9kqe1RHf9D8cSVacrhDn2yyFMKMa149LrF5W8FZP5Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5T7MvMFS3XyJ7p8rvUskbqHG3XxoLM9EcstV4EdP5Eie9m4eMt4es7QQ6fLEYGDt47ddXnKEBJDV8PYhEjGJU5x",
  "key1": "34cABN3WEKWZZPdxH2LUFfVMwFoxzJG57qeNypyxUerebx1YnmtnnjJuzDkGUHMHHcPqJJwBdCzrGGEueeQA6qAJ",
  "key2": "5L1djh75W69x8i19oi4UmKHb4RvJFXk4mz6ofWNDUUxg7DgbhBDdedReRzA4fVA5bL7fjKYym92rBLtB1YAm86Ar",
  "key3": "irEwqzfLk5xeoqdJfiHSQctHQ5RBRfxFqE1x5fAT2v2ELm9G1ATFyi3HWeWw9oH1Wn21APVHsabPu9AotzjE9wc",
  "key4": "3toYd3arWUMd1StKPDWDWKsBwzZYYcsYfo73ddbtZ3nXCPSU84VtiQM6n9ttv4HJkBMNTsa8L7czweyhHxzS1vrB",
  "key5": "59C6XLa2FFYKhvmZhSESZPbWCwNbfCBL6aLEq9Pqd6kTfL4f3uXGp3JYTS6Z7bbMxqt2dAQ9vCSaZMKHfiX2gM1N",
  "key6": "2i44HKxLrWaFryw1YD7kJRDPxeVfzKpEqE24ZyZEVPhcW3DbwHgPJBSHMQMte9sSD7PpaLTL8cDDGhupZrYsdD7n",
  "key7": "5WcpdqBZxtYUNTQpJzJBXf2EkXV4zTrHHhb61VDzyTPQc1P8CXB68pgQCAaLb9vMvu3U33hfrcN4qLdyKAdjun3n",
  "key8": "3k2PdFAbqJsPVcnEfPHkGv4v7uq2q97FWun6PrrWLgoe3965X7k1shF4bmJXwvCvjwH9UWLeCLLodxQf6rniBoAt",
  "key9": "3PMR7W9E259sjVKRsQC6tEpsjEFSZnsVkfGBM8NfHv5YD2YfokkyRfWZ4FwTAS7xpsvdX4N1AGmeV4qKQDJAqT1H",
  "key10": "3zpwjrnemvcriYSfRT9J6UMwkiE2vW2yM9c7DpyXkrtfJgDGT4YZoFchzVLwfkpJaarog2T7RKxum4ewE11cXmdU",
  "key11": "3RRHk6iYjsPrwnYLdNer6Lc5TZ3BgSaAqJEuGuymFgBb1gmjyqNAm2dwRABASSrywup4M83Lh8U9cjfiDVGNg88b",
  "key12": "5iHxv3DLj546nrwAKN3c5Pn82YiE3avkKfc7JHvBKnrPmXcYvZiribALUFr1VS1yZqoqgy2yDdFMUcrJfj24bBQK",
  "key13": "2TPUHt1r3FEAwaw4QkcZodeJSst57VVf4Dox4ctTnSwrZaph5dmmNuwL6w1bZWhJ4U8TVWHKmsgV8gFD8UjKrz2c",
  "key14": "MUh15vqsJo3BBbi4YteVCwBRHtoepcAQQUGpgqoM2MzqJXtvvoZ2H58RMXHKQoTFsVHvAEHauFWzpEAsgdTAzYv",
  "key15": "3H8bTUsEv7DFX48WHftFXuNimvHF7nM1s8sPVZi1xHjjzpC44EpmzBWwr4PJkBa2pthN1ZxacRou7RvVzB824nQK",
  "key16": "42npYLWNZZboRej1UrfsUigUzJA347mwM9mW1J4cDvQEhCcTf88gZ8jbt8SuZj4fmKMgmqogUxr4fXnBRnUZt4TN",
  "key17": "4PLcyYatY2YDRorDGs6EMrUDts6RxNnyHVR31eBzd9PhTVJRmPiWLSve6XV3bk3MthaSDYSDC8q5RPBXrBfiq7QL",
  "key18": "ho8fPJLPh3kBgqSFufxcFDZrT2BLiAYx71gFZJ9x5n3QWPbPrQ2WazkHsnRJHWBPoQfZgQCEe2atrzUNHEmvmJ4",
  "key19": "2NSPLZuVc2QDpcP4DnkbwTkFkjiMxFXNvpVxsVWgc8k5xTudHHdzywfx2EtXDr8nhauaC1iC7r7quNwNXHb2WFiu",
  "key20": "2Cx5oR1cDyPdUHao1cNqQsGGavVWAnyHT32zEy4GbukoRkXKN3jJt9MxLZpJFLaJBi86B1a1XUkaRURk1jxc1eCb",
  "key21": "zKCKRVfyoBiM9bL4qNhxAdYeNDhnZXxJ5CSZYn6hF8iTvob1y3hLwVJztW9C1hWHxhSswuBPqaTNGD2t3rsSh7x",
  "key22": "3Ffszqrcg7dFachM7C9yWJ8AsrwWLUQ6rFRZjpveHWAMG3UoNC8eH8zCpf3hqSgKcQr8Jn8LC5g6w4nwqs4kCLwz",
  "key23": "5bS9p876gdnJMiwfiZtpkmhcwfdwszLvwSoUbbZVsvbXhyouAH1Up1vcgXsed1fn1kMonV6DhSABQvDzpZqJThbT",
  "key24": "4qCvq1K4t4RaNMva86of7jxzarogzHgQeUuvjGAAxmVQDGT1QzmW9v5v3dGzPKYtGZ99jKHda1hNqwPsMxG6jDC7",
  "key25": "aJUJAAptJhmjymXfDJbhFMHxhfRZf9nBfPhfX7fihyyLNwotVxZQmW8MUzCqwbSg6hguWb79agdDZJScd6RVjpP",
  "key26": "2L1CpwGY5Cy6BzknUzckx5eKLH5Fpdsou58hopBMM9iTKH3s1gQkrBBkEyCN57rUGLwxn4FjvWDqucBAmCCX9TYF",
  "key27": "57NU8fhnpbpvmcrrCCAhCP8uR4moZoyHNte8zqmug4hHm6ghTtxqzwJBTfRgCzHp5htmgHKjpsGaUM8b2oXxayRL",
  "key28": "So8UsBcGMisbDw9mNT4XYQ62HVUs18hLzyTy5yubkH3fP7BQGMAR3JR41XuSMaJSvjgYhhuUFLBQCQ8sKhRUV1p",
  "key29": "2q2WHMFwVCLbKVmqcMMzJLQ7b2GdRpVMjxCzS3XfUKHMRr78gm9CVbreeNz5JfDxSqpRty3dkhkZVcArytrnfeJY",
  "key30": "4VNxHJeDBZw3saud17MUNAwgbV8U9rnrrc6HhC46LMckwLzWDgkKbmsCtyNdpSScqf7SWHFbyWP7HxMnfN6jpDHA"
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
