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
    "48jMX9nAT1NhFVz5TGMQNvHvEDoxaf9wgHnwXs5WDCZSodzfZqSoau35PwTbpHobKzgUoqkHeu9mS3Nztuem5rBs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2wzuaykCZND3Si8d5P6v3z3zxue55sdmMgkbyoJJ574j69TMt2es2TAnZQdui9Ear7udDLga6WgoURw3E6KrZLPw",
  "key1": "25kr4Ch13bPLdPvnHCjCDYQERGr6oac4RLkoWBzWuji4DTfTWEFZ4N9ottGf6LQibaVRQz1D8JRpHjwmYoS8QqSi",
  "key2": "3QnSfKefMJGMdKA677WTKwRaK6z1WSUggSSupYpMtoqK9KszMBo9uDSyNfVcSLNx9ox2S9SGN2XiQG5c62fCMefz",
  "key3": "3665NSMQdqogNfB6cbVNNt8NWCJX9ZuR5S8GBk7oYdFb1qfkvSMzG5MfC9KomXNjkPYpb4ycuy7HpbvkqmQrA7s",
  "key4": "43MPZdPWW6CFpridhC6LxQCqke4NhsQn4BtWYhq8hFh9e8jnkLKbYqYmSFoCZ5EaenrsBHMyCxGEKumoM4VF6oLj",
  "key5": "5hAFcB9jvpW8JXgfVG88c7J7eMpU3cwhxyQj5MwuTSe8tzuRAKMuSpKMdy7MkZAuHNCDR1ANFMybMKikjagTZKLy",
  "key6": "2R9MVgRufNB2npbbJHF2qL2XrmQi5ZKHNTaNDP9vGAVmogNVa3JjfsXK6qs4emgJkGVVeTmktiQZjEBu65d96ZSm",
  "key7": "3zoPhuzuLaUvT5RyWFmZ3rNrbVCPDWZbRk3PmosvhouBD993WNY8axHVZwAX52rp434dodDjo8uGPT6m3MiW3R2g",
  "key8": "2h5fz6gPcYEaed3EaT2qmcKUxqMuQHMxXpEmDmnjuJCCsHq8pfGxnX3rYsNJ39SoX5wcE62napk9qWVMrFYXegXh",
  "key9": "2GWLsjBcjnPaHTKPCZuBcwyifQA26PSTcVv2iyQhHE3TuCtWBtXgaxGkCcShv83ecXJbJhxSzw13dFCHFw7sGb13",
  "key10": "2snbzHmUBL62k281qm8Hcq531ECwJ9WmdZAQ3c3p5YCJAskmtciEGNj8h7XUidvjTiXBT8MB3R2xejPHQFFBx3LT",
  "key11": "415pfWaXh9PvpfBzMdCCnH7PZfSeUZLNGaUvheKY6iitBRhZ9zuohMQ8Ydv6yYS6oiPdWbPdPsyXVUbbYGXhdTDQ",
  "key12": "3gRK4VoZSRcwH85fpxcHyztuvvXA7EEUNmP8JoLT4FGSYnepi9uojehmeTioKSJuHuwiPiH9XBQhrSvqFNVdV6DV",
  "key13": "2qT2w5P97bE85PoDq5cR6Fx74dFnpNa4VZjzfoTi6tPY7M2E3vgbmNYv74nQLKctdFEnjKo8m7yBuCjonpWr6GJp",
  "key14": "4xTFr4AiXruzNe9bhZQQE6tLFdXU3aHrz9fK3SeMYJpVDManFsrttjXZkA7QgmUUtrMTe9CJSBq6zjqLKSMdbKM9",
  "key15": "3V6WVmoeLapSnDvd85GhLD1XoPcmS5eDCGkpKqFjJPmDJGqFxTkxVSSFrCfFGQ9FfeXV4Q4GAn8avQF7zKceHtRx",
  "key16": "5kzHrMhy4A76SaKq6wGfTjWJ4H9KZYJo3G1Bp8rERpWWJxdJqt7oE4iC93q6gwAK6wgJ5pLxPbASFVYvzF1ZGkfG",
  "key17": "34WTkebe9dbLCJbaAVwAzsGEuLVqdNkg3atMEwwtjfgPNVjTyQCcSoDACkEpWW9C4jFC2iKkrQnt2eXHBo2m4rv7",
  "key18": "4MrJD82Gv3Y8uB9cGHc8NT8F8Z9Si11h291iHDayPkKkUqZnSBivhj7SJNK1uH7pBF7ePNukEqEBpE1fxCzCy5dy",
  "key19": "35mngQqcEasMT8d7xxPPXdeVwg6WHt6y7iU8zspnhHqxJQd8sZ4WP91WTgsG2CZHFsPDmqXv3AXdY1aqxwPxkVhs",
  "key20": "5d1CEEt7NaN849eNZsbQsgsCU4Ztuth3YAnrYLY6yHXh9E1QFUwsCD5BwGifbTPZX7texecasPxayj1sLRWW9tYs",
  "key21": "41b2MiQsjER9KhCHXeb9xrj1vGxKfnwRRbfB69ztqLKAnGTNzZU4553Ash6bB3qx55Txmhph1PYxseGMurXDvmRi",
  "key22": "3PXAVxWo3NaH9ECHYWiee3swBy8NvAaav71PGKQ3r2amZnMVRuYHiHT1o9EcLKBXV5AGkVnq6Qy3qETxMRkcqFKb",
  "key23": "5JFuEZcg8vdsiGseRhSXDZaF7PPHVfEJKu4ADj2KXK1kzE5HKwZwYch2X4jUoMY4qrj9hUnaw7W8UDgPNQxFKuoW",
  "key24": "U2aCL15z3SCzjAhQnMAhgV2kpMVAkAQMd6yxegYbjHgz2cqRUm86xpKe2mV8BM3rP48sacVLvwSuZYU9nsJE9fv",
  "key25": "Mwv2MVYNsFCNZWVB3ZnM4EH4SrN2wvJj2exRWHvBEHk8CPjMKkXEQVRgaZPFKgPZZNobMtS8eyB4ytPA3EawshS",
  "key26": "4esKC9ukKQsFCJXfUU4Quxc6ExQQwQwAH32uaHnnG7g1RvpdMKS3fw3Kvht6qMGsGxoDzsjkAEBJxvqm5RhgeAe6",
  "key27": "51qg37vePj4dw2KcKQjwiEE6WoP6QUcgB2h4hL3mQ4oXXngXFgahPGGK8V7ysfWZRfsJZTZYxb6DjV6RjwGkjsD1",
  "key28": "54C1Z3vqmCFgA3QLf6X8vtN4jeYS86D9c1CCp5fKJMpBDQMuPauHfNAND64Cu4e61E6TNrryJkW55WzvfbSe4EZc",
  "key29": "478vUtzFJVZy4668Jn3L77ApmgA3GQmLpKhN9Ypnt9GF4h3bYmbVAvr2Qxc9ZLPn2aZU4VuKXyhTWjdH9YMVRKyj",
  "key30": "3PDAFZfmmxArvHwckZmQ3f5wwPUTzwxMDEYy7VtgGQpZHKWqM1JQRVdrGgQ7tLQWoMLZiu1VbJxye96qyrukcqzq",
  "key31": "2zJh3ipH7e1CBWe1J4UtNhGiF7exDZ4xoB4jGbKucSs1pM8Tiuq9CudQU54kyPbSXgQWHKNiKHUaXhJttVkqdADX",
  "key32": "26eWKoxi3CzUkCp3xetCN5mjBYCoG62c42z8iBqoNXwoqXbqDdArQNHxbP9WgHiifBm2aDAdT9SUz18EcEWQxmrj",
  "key33": "3oRdBEevcphyVM7NguCSYju4mBnKFePLsMX187BWEvfHnTVoHG2y9JXNgLeSFAJwT9t6HigUaP9tQ9sUaBkpPEzs"
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
