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
    "4RZ8S1MTRsaRGuL2AFnGtobZzFpDAiZtjWA1Uk85GYEsQ3Ds4xqqzUtH1EdBKVHHTNfKtgtcf5k3mcXTFpj9RvHS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "42mtMs83WnR46TuB1Hg5VPYuGhfxjzLYKCRwcjiZHDW6b5Qiwz2UzED5mV2EFGvCdabZ2NJnXGz3J9VhsGJVaoqk",
  "key1": "4dRTwEYNPxNXDsVp5BbQfPnaAcqQE7H1qCqRLXxEK4Js6FbfZQuSWj1x4ViKfoCsPCYX99xr6UzyBMa1wZdoohiL",
  "key2": "4YkjSPmE6fPzruK6SK74223FVCRbBHYCyCQbcZdRbLZFtLCZHm2iL3SU5yZ4QHvVYnKmQyaY8bAVJdaT2tdihyCW",
  "key3": "5hHCdXNqwcbsJpbf3f1BrRsxDRcC4PJVwb24hZwtzWZx7CDETxa9DkX3N5wnFhem1SvkFiV292VxuE1coHNbXmTJ",
  "key4": "voDQMkbEqbRKfnU5oH8mmq7qqoW21ZhpfKM1Qu5YveCzbLNauY3vp5YMHYgZouPwgeZaRqU2tiHk3jUj6FZSAKn",
  "key5": "5aFCXsJk5RivaNDGJMwcPqjdg2HD36U3EzAmg9KBPDZTazxTzT6xhp7MGt6Lnrm9FNYMEDBSCg752R4cmTCYF5En",
  "key6": "5KstFQG4zsPyM2efJG7sqPfyo1D1WujUrenQ1vEzcFP1vwXMbZQwSTPeQ6Ef4CqSty3Q2h1Vm4VGCNvVYJFa3zX1",
  "key7": "x5DWHKe84boy5ABwAZjQwcWv4G7ys7Tst2vqjPku1PgrdHtweGyXbiBe8GLY4ajxjvqndb6JGHYryZBkaWWPjqo",
  "key8": "1NnP8cCguxETS69gipFGqxi1EjRahnYy1HXVgPbJn7Z1VtRMiQZcjKXQNA2qnJPL5kM8zhzcaZD1FKcErGdWfzk",
  "key9": "5XpGj4JtPNRvPDdYfDqPmryx1obAL4u1zjRhXz6nZQB8v6QYCxjoaWtAeLksFi2c9r3efiYnoZ9CK8peRTo3y9vQ",
  "key10": "5f6C8aShxLdK33A2AD1HpEy5FVanbRrRhDEPJrun7Krn6ko83qwVyjBugC75c9p6EPMcKfo4WJfNpdDDHngN7pK3",
  "key11": "5QA6oRcEH5w2rH4VZh5RV23pyBiFYcVZaiWFcgfqsUXuA2yBQ3dajUzije5ugmdSMp3zG5Yehibza34XXcFaoskz",
  "key12": "2Yv3eQBN47kjc6CcmrR7oj7qBMYG2mVMZp2AoZZoZxkHf7ZcqRLfcSrkpUH8hdsys8XVcmppf2GGoumqR4sFmPMV",
  "key13": "59fefAUmP1kVtjcwGCX7vz6PYDWYxrLogdhg8BKS8o3gGPG8KDRwnRymDHxpuLSZGozp12HxPbqX6GFugvLgoJ5D",
  "key14": "3hP8cVeJyyNGQyYMSi14sZL6ucUy8yTXN634ZsY5CgaRbBSs61NdRGaeu7euwMY7eCTbKQCyBnvNCSZNnmZLvnkS",
  "key15": "24oK7Uw4qRQYDNSqnNGsUx353VA94ULMxykJCV6S3Qi6v5sA73oYuqufggeL1xvb4ncoG5xRHNeZfy4dUhAfWmdJ",
  "key16": "2JpBYHSsi7kFebZ5AzYTHN9CMPpcmq2c3UrvtG1R6MrFtHSGt1UqB3Gq4CrxPUdrisDkJmWb4dnAaEK8EdFjJmRQ",
  "key17": "378zvWNGUbEmgxb8JRBBmoJkBKWX8HdDTL6QP3VVtrmw2cczXaYJk2uRbwbdzTV1aoTe6MGRX2w8LNXTQuTj4Gna",
  "key18": "5sTcEgjpfHGvk3784xHf3GNGeASFcUiwKo11c6R1ojp83vvBZFNjLTXtVJNu4QbrjuM33XFdARGFrnsFcHXB7PyJ",
  "key19": "LeCnRnHegSF6zyn8pyqk6vXPbUajbXqz7ptrw5Z67tZdvrhYM3UCHbDHrfTQ6uCxAf2t61cRaavweYXTrwCE1a7",
  "key20": "42oU1h2JEuFfkj92CjBJNZmYns2DiuBa76opgM64WRWEjYwyjjqhx8eFsTjJzKLFFJPAM2RZfRt6GWXUKypBWZ8B",
  "key21": "43iU8aRJRFvQLKQ4X2RurUgtMXCMuTk3WionY35msbZGrzxZaZToHWJRTbniRQ7kKH1Ggk3mV1cgWDFMJzgByay5",
  "key22": "5wAH3vhV6hsG9QvoXgY4Gkp2UMUAujBCsoJZLAGbLzuhuygHb6DtSkaSbBST5NPEoxDemgKgKdFqG8ahpSAxwLzK",
  "key23": "PYUGzePjadDTiR6QuzdVvP9qx4KeiS89jRqndh6vZBTp7R8XMsrhF62hVGs7fXrSZGxByYgTzZPsx3VNkjzyTVj",
  "key24": "3P3zXCNwWThDvZ6MyFjpQBLsG6ef34vtw8NAVcyRkFjhQAxETJdjmfdDWfNpoquAEiEeVxNFmkkxt94NWefoLEeW",
  "key25": "5fD5w5ik5LTrtbBbg571hqngBUrpSGabiNZ9F9AFwJEWT5KumzScNngDNjrriGe4gGxHgWmsE5bZNXghCehVa1xv",
  "key26": "4iExWbnXmXDWggyz1sz4BMcPAbKzg3xcnGJ2b4gFMWQmh9BqqsneQD7uaF17hAnZDKL6Hfh1NNqMxRtT15St5dKk",
  "key27": "3wXyCQfU4HFKpJXS7efmUxymMYGMM7YUj89ZvzWWAh2iJYPn9DUk4AKoRRGMfMcVrhJTC9ZrBjPw1vyWqGgRBHQ8",
  "key28": "2ArJ92drQmLznrGTnweFC47P3wZg9hcQ4Jgw26nyqvmoYpeV3Q2y21gPteQMuLCS1bP9Gob4Ztk9dtu6QVXUweF5",
  "key29": "35yLKhfeedKCJQ5LFWZ8h6YRgWYewEKApRPYuZ8a9gc4Sjh3X37cseufYmbFbqVZdX3bjCAcQNggKBWezmmE79Ww",
  "key30": "4oxUzcmRxDgaPthnFmMoWSjzdT4RevkjT9jVgo7WyNQWWBJKNPh1K1GgCSN4b4wpLH2ECZmYZQYAqyn7LryZqCA6",
  "key31": "4HZW7ErkFNQLSGyr4g23pJHXNVDpSBUXKxi2TadBRjgrh3NhPeDXsnxK9KxhC4Wj2BbTNf9LbunwmL4q52ba2Hfo",
  "key32": "3RSita3MMNid6P1fp7qQsKvk47kqkEPpCWgEgQzMWfiYnZZvVVwR2SjMkGMNgK2Egk4FWUWid9FWxcdphaiXc37N",
  "key33": "5ikFsNeQWFf5ECVGaCswzd8XLbCqPLDsRb8tbAmbgW28GWjMimzQZAs6NgBsqeCJ7Dz8wS9J7hRfdeBoQj5Yuffn",
  "key34": "2CfMyHwnj67vM77P3fuRANA6Gp68Qhopvy9fJBtpC3Bc42Eg3XRFov2gb7EhHsxTf6C9qoNiP8tEHwvdczh8oFD9",
  "key35": "2Yz4SxB6ZSXNEYWdVbqctwZYHSX2we45oFUwMgkGdt1ge7PydSvYZHhQZe1eYSMtK2GmN6uS5Ree2w9tGyXnvQ94"
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
