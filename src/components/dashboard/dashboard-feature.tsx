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
    "3ioJ4ym7z2UHhiJpkZCrkBVXvefKyh2XM3augXX4a7u4Qb77K5YsfVhUaMQYDwDSJhPVpfZx7h4xDZdiPnXAH5pe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2H2ZB7UBWeKYD7f8dCcJDQJo46zW4PtzbixZ8j1zdvL8bFcLn7TURZ3p7oTieFZPAm9E9KHcycN6XSAePwRtTnos",
  "key1": "48F2d4w7sVhELzYsc5deXE8CiqjAtjzj5Wr3WRhj3LLm7h8ybfAgZtjMiShEWK9hiakSP6wLVAGyLMcy1RqN74VL",
  "key2": "3ratrR5nP9GkvRLcpi72bKmBzCNEP6bCEE8P6CrYf6j34RtjbmgaB46qSn492PUyqjkiAqLsvwMBaQDSCrCwf9Ei",
  "key3": "4YAPypiNigCCHYwm2bkJ5TkGCv5YVJ2jbRXjF8zfFoF7t7YA4zoLzKZtWKRzEXfQAWk2yzS891o5WgA7BNMxDHeu",
  "key4": "5g7hYhChz999eD1xjFboNkGPR55TWcQhk8a1j2BZZaetydWuYJDFX6ZoHxpibVWhosMiFSiG2j45vDwoyeNwdN2u",
  "key5": "3XofZo8XVLVTfiwZvRYFxkXXcCPMfNYBVEA4vVA5dxRbwgvYmh1FHbSDmLjnjwG2Ywpn5SodkVCRzgeYNF8ms3et",
  "key6": "4DFEPuSrEBFrzbP5aVUqFHbRge73VTcGqMyRVeXTuLoyLT2x2ZBZfaNU1nDVFSZUuQdnoyYzsW9Ftuf7KAQE2tmh",
  "key7": "5SRYbG2K9xLupoZ5RoBKmvJkVXTAtW6XHY4W65B6SjVayLYgcd7sZR4iWbDFS7uRhvEA4fJMWZB1qHYxTSTGU3Bs",
  "key8": "3eVVxJYC3jP7TeVrSZ8s1q7461hFuViDFUFNaZiQjAVFwmgGv2M26sPwgXxAHqXeNwywEf4itbVWUZ7CpqAfJJmB",
  "key9": "NECRhXKREe9gpqjBCm7PSLPtqUSj6WFfxhi9T9872WhvGcfSa8ad2gvyMZrQQkqs9ZUm5qzZMxi6VtS5FYuE43N",
  "key10": "3M7EkjAKRaCoQGqdeAHSniNG3VNVxa3pPJXY1QfMRgDFadZgrsVvZC2jGp2RpS7nfD2d7gS9EPCU2qpHF17WXcZ6",
  "key11": "5kpdEwdp9mDZbeXUSbws5rxFzh89bjVHJM38udxnQkspCwPq9exizQrowu9CftYT6qmaHFaqBJuBwf1331dTu29u",
  "key12": "2LEYo4gV8TpMUjxbVxPMYKGngu9YPyZMwEYJ4ENwjL9fYBLscForZZbv5qFoH5t7oiheqTcDh6UDHWj44JDb2zW",
  "key13": "2X2rmLUVD4RJtcBW9BCJRHwB72BeZe1WWYExADYwUqxp418yeSnCqhHttLojNCcZmBA7r7bhpT3xFf5AEgg1QnjP",
  "key14": "nnCQnNjCC9cpmTfYsaCZ91Lov8SbTpjAdju3jgiMXyLJwZvmy6nNLCSB3CC3xMRLG724QK8QmYBMstZsH9HdUaQ",
  "key15": "5riT425fDtkcSGPJBimZdUrsYVcTT1YMk57oDAzt7e3FAs9U3LMKyiS4mKjpKXiCKWh88NrRpQkfTViNNXsuhJhN",
  "key16": "2XoPhMLeFEbr8KtEh3SnY5hb7JNMhzEspSxiZwEofmw9GWUZyCw8sYHSHx1dCumP69aBJLBgsbQQCG4ms26BiqCi",
  "key17": "2PQkNPpHz8zNZFjBYk8L2b9CrKzBUwwALhz6eZjYsHjYoVV8RgpEt1ZVqxr3DJkJGJaRy9naoySc4E7jwnQDvFro",
  "key18": "4Xv5CWUZ8s9sSRfbNtyezwS5PWkLoMuvvCA7av136HSNt9qy8rAhTvVfg1rj27sABu3deveEQETRJbEjHd74gPyG",
  "key19": "4K2WkABaB241SZbafjx7XWLszbG3xuKqAFd7hMJzfhboiG7ZTSUbixbJiZZp5p74v7GmwHjxVTmPfjaod4huDE9e",
  "key20": "33Cj4dLFKWSVP7ZZ8iuhEHwV12cwqFxgoap18cmNMh6KDv2o6oxkDk7u5rnoWNwcSUAEUigjQRvrNuyrXLtmfN6b",
  "key21": "9yQsavs3NJkiKJhNVBGsHejDZ1vHVhDKoiHdC7Pb9Vo2mGCajX999dCw7z46oSYtbDWiT6MoYeNfNReZvbTyLuy",
  "key22": "3yhqxwB7tyPYbzKoaChc196Hcz5AUfzbqyHM6WNAmMfNTTEMBazCcn3LSZ1STwDgRCyPnoiho4RsD1Qrr1pJGN7w",
  "key23": "49JEv3tMcdrne45p3gpR63sYs2N8qgy8DsFKYPpRWvF6MdDDqcmdpzvdU23tyBocohpf6nks2yqYRahhoBXGq5Yx",
  "key24": "59QMY6Yb9VWgbutkaey3sXgbhiqm3Z4kgheGHEr7yzJHV7KRb46dRE5LJeZsEUCL77uA1cRi2A5feyLMfEZ3nUuQ",
  "key25": "3UQpFpjGEqCukCRqwVnmWuy6RpZYh1vp4UL511AhqpC2mtL92gNhNgkQku5RmufF4HjCUdVEayqSZZ1UAm2tWRXw",
  "key26": "2MPDN3DWScTXUwoJ8d481jaH6GyXQj3GzKf5QZpBzLXb34sRnkpBmueb5rywW5K9xhNXoAK4Ey867ALYtnSPjrfA",
  "key27": "Qma1K6aCLiTffLxBzZb7pBJWHPyWgJMGBTFNrSzh6twSX6of7eLRJVnS4mcrPApphWwurJoq8uzfBD39QR1EsEG",
  "key28": "5q4EebQocfixDeevEQQLqCEn8EQvmLR4BTPr2Rt83ya7dYT2p24WCZXeZxPmCLXHebsvWbH3YW2LUW4zFy2SATG6",
  "key29": "Ga9pdyGLWrNtf2HN4qzNhdwyNNq1W5b3qb7VZAt4P2fKFYxQ16eRo8HiC7HdBYj7W1XzgC3abJe6CmYn3pXwNTA",
  "key30": "2tpS41sggJxj6WcAT78vPr8mX1RDpfPFXqMiV7ASTBKnjB7KCU1PeVNhdvpvTamDk5mRxbteM8hxX5M8HGLTrRT3",
  "key31": "3AcrfkYSqkM6kaVZXUzk82zkPXSLshskwD3tTxfLhpof2Wox2zAJ39bZAL4HiSfZkxDPb7TVcqANYdZErrGykpxP",
  "key32": "2Ss4RSUWuahQrLuShfKNEuarbYZxbW8iJCLYEms4mjYBXQJc9XzGMxRRyNdZUdw3PMZs3VrmEvhMyMgfWZuChFk5",
  "key33": "43uJs2Bn6FrTcaCP8atG8Y849pcb5a3euDt5PbELZhtAL48JzekuhshyEDoFAMVYohm6TfLkfrrd13Gw4Ft25Qg7",
  "key34": "dCrvkN8z2htczXvDH8qkr1qJ8vQ682u3Qh5B4XL4L2tDwLiudMf2tYsEp3BYXzbVUS96GkpjA3oiye5wVgy3epF",
  "key35": "2Tj8j9AGmQei1zsS7orF9UFZd1a5yJGqR47pDV8RYGudDEyBnf1DnukCTc6QYXrz3oMD4SYxqkB9PFrvZn6h3Cqg",
  "key36": "4B9YepAe1r25b684y7J852kLi9C7AFaK9DQdM3ep6pxN1dL7PpnYBxMrdHwbVmXDcd7GK9y7X8cicGKZ7xjLzoqF",
  "key37": "HaysTj2LAXBfZPuQwm7uRCjgfRVTzzwRX9h6YAVpsFyc6YcjYFGK7hcvZAYbJBQUdYTjYtPeb5jMP2UgPgPsnXZ",
  "key38": "2x5zo9gA9sFcL1QDaDN8JKsPDEkQeSAQUrHZtwcWu6nWeqSadHARMBa7r5ywCYwRB6rDcaRU4ZdKfE9ytD8KYieQ",
  "key39": "EChPmtkXtp2xfEk4znDDgR3i7RjkK9eVWTL6t5cBTNUcHypkdEZuiTRiUP8Fk4ZmRHBY5cXPzsEfY5SFfMeEe6Y",
  "key40": "2bEDFx6zdgbKGyKniQmZPaac5ibe9h1eEcR8nSJh9UxvqJ3LGke465oh5wsWkE3NcSKksrh7Kzz4guuCkbp8cEXo"
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
