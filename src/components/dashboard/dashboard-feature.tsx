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
    "62wRDAX47xLKFBrZjPgCT8hXgALn4dNTbPS9iNfmuqwP4AqjJEvzwCLUwPZtBVz7WVtMgVc5bDNmgVKTnf9Xik9C"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "GemKH5NyhNFCrS9V5v5Qvnfe39hfoWVDspcDKGGMW5FmSyJu1dd5PCDcKMHcsSWQpTVWJ4XC6sJJX1zTxvqVwJ9",
  "key1": "59hmN78xQvGohFh12fCZ2HezxaeBJkgocy4Z5okiS7w9dtr9PFFqHPepZFmhNhFniQwY2rg3HP4qET1ZaX2ZprSu",
  "key2": "3AePiP3nSVe6riBxWsyQm2btm8cqLsDQFarXyC6ihqB9mDcK75emmDsNE1u3dKYGkDg7AMimutQwEMEUnEcXKVR4",
  "key3": "5KD6aRmeoVksevM9vqcYZ54zio5dJoSRqpDMuyRgSn9VnZ2ysoV4B8ZW2rrerKg7TgLezzjkvmEUpnzxBxL3G9pC",
  "key4": "2o87zZ8Euze6CqE21fWLHiyDqZ9CyrWLc9GSHzN8cMV5VEhKeRR6JiSa9oSdF91nNrRR5sVYp1EHNzSuYo3hjsrW",
  "key5": "421zDMh2TdFWUvREP7KbEzuARQPJ5hxX6rP2Bn1dBT8QT3q4AG2Ccba6BzZWGWcLh6UrezonSPrGnT36FCfuVVWL",
  "key6": "5zMw8MfcQkg7ubL7rsHGMGDf521Um6UQ5q5GMDv6dXjQJqASjYLk2eJJGYMUahHDqDzHcCHLFNQqp6QsU3ykLJKV",
  "key7": "apewhGxh67eEhTTRDMa9bhvDNexXptAR6AwFVjzHUuQpostrz7t78Hvqw58MvtH1g2L1G6xWPm94PtVY4nN1Xm4",
  "key8": "4UggaGrUf1Sk3XAwvpFXqKHho4idJECeYvxndjrX8LZSw5Kw1gFCubKEiBQFr7caAsSHQ8wew3fcTSWfyC3qDbnY",
  "key9": "3JneC6gSZ1S9AJzwybz8y7uH6tmj3GdctJxAVrTVgfJPz4NSks9oNdUjEhxK8vxuQABx53qpSVmRixGFhfd3BVrY",
  "key10": "5MuQRksrz17PS8tWyUXpcAZwUEEujBy14N2ZY8pp2FmKs9S6rJNgarELnssqZ7vNNU2ADhLBqeTiKPye11UdL8oB",
  "key11": "5rZYLHun6DC5F9yqRbMbJ35HtLobcPJtPtF2779NiTCqE1Hfn82yyzgQZKjEASkApHHngYnVaStfMKZqUbczYLr9",
  "key12": "3AbgPa3D5Ny9g8hw989sqhmeiCnw74K32Vo6mUcwd9skx7gdUBFUtRu9syP4DQ52LaBSP2oaJ63Zn76VRi7dvCn9",
  "key13": "XwyKDfr4Yuuz6jZM1AttZJGK18nVDvQQeGFkLUCDKM8p5dzrC5iZB9YuGw1okNK9BsPCbJGLxye1PvsVE7ZyVQ1",
  "key14": "24WSMDhNR3m9nWXA947YLavr2MaeR1azUe9aoApRskgoxx2XGjJLfWWYZCeWjQWiEzpTyQoJaAMQ43dtpWDSKUzK",
  "key15": "5PEp2B1QV2Mp9fT2u8vxLDZ3ygSc59trL1UiqwV74tkmRvuiNQdmji6CVGUJxC4cmbD1USZYW7411op8GFsiiCVu",
  "key16": "2whrjthwQtdNmydZZxRApn995Q8C4fRpmqmCmQLRgMjeFJXNBBNh4htEZRo729CFjhWxn3HZdH4RAqoC3QCDAMEL",
  "key17": "5J54DYLLNKZfiKGKARiFfRPC79Phx6oyXtXkkn7vCmERaAsMTLj5hrnCbDajrEEnZPT2TkgJXQQVydKy4F5gptP8",
  "key18": "aKUcgooh4DNC3ZLSvKmjxKHwdU75XxNgcRMDZd8kE39suuD8w3YfHZYDX9E6WvfjbFmy8PT7qA7DKsbpTJfnSS5",
  "key19": "nQg2Rf1LkWTzkQCLQxsKz8YYgJkZQCkPLyt9W6g6fKhfogLbUU9AtbbzqwgPFKKNG2SguS4A5mQgj7THUcdcyoY",
  "key20": "3ebMcmhJCvW8vqFwUFipUCWi1aqZo9cBHK1jNM1bVKj27mcS3aj2Y7oSskYUe1DoXkXka4NumJDLMshJQmHyWfbr",
  "key21": "2CDQCtdbkA1kCRTZD11qqKGfVVkcQDKNJEuvFu725t8GpBQhZR6M9cu12AUgX9eHJVavr5GHq6G1ZuW7siUXhqS1",
  "key22": "5b4FuQduQopeGTBZ5h3VZaeHjbp8KhYWnWQ3HiQYHE2Ph9LSAUavWorvXTEGPkSRd1cEfQ4TVoddqpC7r6KV3cmm",
  "key23": "ue6WrGhmtUHW4u6sY5N6JNzKUKVHuq5det9RPNPWe1SsGyY5DvGSvENm2xR1Uvh6TNZoeKuqA6me3fQkjBq5gzz",
  "key24": "3kEkZFu3dsqNnzJrgiMuQ95E1nhmg33SWGx4jRamKD1mLymc5f5QH9JMk1M4NnFC2S2NLN3ALteZDUkN5EaMREox",
  "key25": "4rH7JUpTE5rvMiToLk6ZS1pJ6J1kCBsYqGbWBF3hvHxqGWRgb6Wv4VJ5s8hehHjaZeEpv5sJDbJikVWgB62LWfyy",
  "key26": "2PseECjaYE11qi7qYbu9o7j8CfmwV3Go4pYq4gYVZaP55yPmssUuGAtcMsfHnCzGTi7gStq3vjrpCSJnYZXndfx4",
  "key27": "5P4PALewahkwQwE13w742MAspgzjYauWzKFvQ7w7Qm1ZejVE1tgyzLfv3jgSNu9eAqRrjvdDm6EXb6ExDnHGfJ5F",
  "key28": "5zaR8S4GAuLQTVN9qCf2gSBiksMany8b69fLQHWV2me8bMugvkbSS6KoywV2UCtk2b7AhJrzofSwwQmf4Ujrr7LV",
  "key29": "4D8A19FXruyA5XxMc1zesbjcZHDwGT4bjV9tYxHfUiPAscFx5LKjhsKt8zvs5iCy7U2wgsDiTPu9X6NAqWPqSjyV",
  "key30": "5JHy8Mv3n1L1ngatB6U62AydnQcmKLNPguGauj6JagbnMgUgD1TUNfFqKaiKPoaLWj44pKVQdjeCaTPczcxfMcpk",
  "key31": "5DVDKB9DomEGmRDmueErvhKJBH9bhjcxq2Lxe4GUbKZGYjufj51JH519Gz76TnsRane35AskB1SZ2StZ5yonkcAs",
  "key32": "3vMvqgPixh7w5NkecDntAQiuVvz9KuXSC6EtAYc5k8gwVMBv3eo5tS9PQSXRt6RVStt9voTCvdZi6m1qTSv35PzY",
  "key33": "4XVUFQ3kqp84BALs35k12aVvMDjhZbqvuWWobrk7wxr3MWuMAHUyDxgqF9p93VLVgX9E7DjKLzLXPt3HqfmfxP7V",
  "key34": "4BJQPicQASs4TKDKPQmAysqScJwdaQL3pUN9QuLs9JxrR5E7D3RWzeyaFojzbHaFazQBfgeBchbhAKWn4iW6VmrX",
  "key35": "4ttBmnhNaS2omYZ7wFpdZkYwavXkmUDotY1oXKeLJX9ojpXKbuXtBCVH4MfidedQYGNiLqJrNZLdFEk1PKQQB8nx",
  "key36": "64iDXVjd7UpcLAXRMnghpCxiwEw31CPMRZARboZc1mtjY5xTRe1HGnRjaRjJMSukxNrKmePnbMAAjw7a8jmNhNyc",
  "key37": "9aKkBziKVcd61iFf5xFdDEJ2YaqLNqU4Y3gVxENMYDC99bLeVi8Dpzdypxp7HWqFbs3i7JNWSNaCTebQAX7Jz5M",
  "key38": "ZZ3ZzdV9FUzPzY4oQ6DPaotyfBVn8nc3URj4bh5Fkjj9hCPwviVWKpxAKegfEotQpmnAfkw4HzL11mTywo1yyXj",
  "key39": "2K59wHDibvvpcyKSPnrrFHjCmSqSVd722wKyioKZEzu7CM7ZPEk864oukjx8yypt9awP51FQj279H531TzaHQX9J",
  "key40": "2wmzGkDYxCUqVv8LzYBDaHiSUa7d9JbfQDKrvc1HJb7PVpaDBuJJKtpW3TEBgPuXU7LQVwG61EVCruYTQP4UuKkx"
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
