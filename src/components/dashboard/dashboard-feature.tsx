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
    "2EnwSCEHoViF2imqF7QiNUwceMXAdvN9t5M6SVHtL1YcAgTjhaNLhX6d5RsqyZvhRCoC4oWM8JFNp6LkpGhdFnYY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4tsfgFuudVvCUp186yNuqX7vqjMwv9rHtdXEixvxRA4exL7JVGLBSMCvHXJHvCGvMxC5A855JX2Gc1gPAEAVfkyJ",
  "key1": "2Rh4xGbbVAJLogR1qxmyFhcwcxu9qFJbk34JqThTmba35aAggMrtKnxVxB7Yry4ha6bY62Q6MNRaJf3xNF3mfVFr",
  "key2": "4ULYmvcAKrTQ3CZTiab8FZJdBuwArNPURKH46jLYeaAHTyt7jx4LoDZpe1xeMhDfi55edaf3opYfKdRJZKyAJesK",
  "key3": "NQY6bUV9eDQo6WhygD9yc9Kfq2UBA7E3X52CzG4x4Dy9v9SGFRiLHT7tn7ibSDo9ziuh4KhbMeWXbRzdwzAcMck",
  "key4": "qfLrkGqnrSiNbK8avvQ3RbRNFigVWyJq13f6GF7KyNx6jq37VmYrPZNmSHko89Pj5jHQNsq4o5nEmrsp6nqbmuD",
  "key5": "4tAFYqPVicAxerogSumpAKDqhSFUtfJQnEckGnAWBgyLtVvpH62y8zQmxkuYaoxPkr2Z3syqfnDFTKXtoZRHfLLW",
  "key6": "4rSdQbQFHgUCX8u57ouXSs4Znuf89F75THdbbrhZZVvfcdvHByMxNYjxkRzGh2ztJoCkKcDP1qS6uTUyXq36A1qM",
  "key7": "4rgyokcUr5ETkDy75DuRyriaCoxg32hPtUcqrm4L8bsuHDfzZe28feU4Kq4u6PRJjeEY9ZUi66LUPSgFfUM5Jcrt",
  "key8": "4vb9J79hn6DXHxDddbJNEPbrXSGLa8wA16Y6AQe8cQwCyMVqDUjbEJ3KTQBSp1gb3drHDbwU6NW9WAsx9Miehiek",
  "key9": "2jdnfNwSA13CwescgNUBpEY1tTXiiee5UiNxFa2nWPKtYRi8VoULsVbNL4CV6E3Xp1uVPvmS2tmHg2EAPm3bdJhH",
  "key10": "2g2nadgkMBD8pbftzJQsEK6VoiDeudDLP7ozwr1XLaNJqSd36TNf6tMfmmsqT1pedgohkEUZfDUTwfhFtL5LozUq",
  "key11": "5dChknnkDeFFqJhQvFaYR1DJB3NJKDtU5Yg9XEfoQxbRzDsCwBurETwMUJQejYnA5C9aoiL6xcJbJt5kS8rEa5Kt",
  "key12": "2jXPYhyZ7TBHVg1HhnATNPEpBMvp5anJ38jr3ZEwQbwRcEzKJb3a5N5aCXN6L8XvEwP1Pjdf6ejWYS3Q4kArwPDQ",
  "key13": "4HVDDwqvddFkZktELNsrv1fAfmJxyjk7HS5Q4NrQMiNcj3TAsPR9u6vbHwPJ5S8GMrwbQ1D4DGhag8xcLQgduwUv",
  "key14": "4E3TX6xqFBWw1gP691UTZBJbHw4JBiTvSPrDhAujRbgaK1ZfAk3pKhpbYiE1ov69D5FBsFGz1M28wk8T7Adu48GV",
  "key15": "3HvHjcov4rDQVidUrPmgcTnRZF2TSfzjTToJGJjYFE5VUcJvxVsuCEr4x4QfwLKwUddydWkkPzSJvnT6kLCHZGfU",
  "key16": "BNzqQFpKGrNzJH8HejVNnAGMmNBruvcU7CMYsgt1cJF8hFkrmK9uZgRjGssSCMfdFwG6aaHwwJUgVaQjbuPtN3j",
  "key17": "5u4fwpnEytAE7tk8XctyvqsSNtGvFFRzuNJRinvVyPQZQrX9F75yL5jDPMSizpvJw2JksLQnGbHjB9vizTGfLyXg",
  "key18": "yQSr3oz4WBhXoVSzSBfD6fnfU8DG59yczG49oEVDrstN4osGfbUg9zZPqZqZpYa5VV2dT68ZBrYttxLSkfLjTzW",
  "key19": "53ZRQL9HsbPW8hmc33EKB84nxGaXA6dPbWWA46rYsM6oqNyf7saLk7Gy4MvTj6CTwC33a5KHDazB6nLfhSDWEKbE",
  "key20": "3jEomm8HsHcpvApAM6sWvYVcE4H9oPQvzmtGh5oKXUnLkhTdrwKcwHuRetFotfrVMYkZ9YMsfficBxT5zL5FNevV",
  "key21": "27kgD2pxL4h5AfqNCXFSpP9s9CGY2oV7FjVtAxaYrAQivHsjhj8QhAaGkKZCDtbmwVZNEFiffM2afnSTfmYyL1eN",
  "key22": "3UWFvErYuxZdMkh3du3yc3fiErAb5Nvue5w59QWBXEtMUqUjx8fKjUvsD8HSwjZnvuDLtNKy8Pz1tP9yd6qKZWmU",
  "key23": "28ckj3ebioRuAn7DPLGMfuAfNbFRLT8PX5ZCTTs6F4AH73KpF9or2MWKGsmWUHPxjA1mt7Hhn3p46Dfa28WWFmBL",
  "key24": "27ypwfiNsMRhDwfXg8XcRtQU47uJn6KJYLw5xjtgpNokGLKJLvCYnwjT4LwwbtbQYac3LAyZwPDikNNxTEdaZ2tF",
  "key25": "3CP62PXZDbjPKRSd6CpYKgiocrcVpWxGPYqCcXAc7aCueHszm6jBLJHFhZEb2ApSjTWLXxcrvWYmKAUBnbbdKhmx",
  "key26": "AFTfuknM8Z21uyFvnknHJCkL5bW1kTVRRVrBRPemjTZZv8dk6iiHYxyHD5wWw1LmC9rc8Utq9SBmeEunsg2YKdJ",
  "key27": "4zrRZd94Mfr9hwzqcydBpV5wH2yFHK82szzKHpwbbCSSsfmxc7z42T3La9YtbxqHzDvbSJAX8cRVKS6BXCYww5BG",
  "key28": "2WuDpR9bm1wJ1Qw3rgcaJg7QWmwQXFbuRvikk7ijjKgZYtMqCExJNaosr1khiy7sz95buJuZkbmmodxUEukxetEX",
  "key29": "4Hm3WU4g5ikBjP2yvoUMU1QkLtu72N48dxEdQ8YA4SD8173PSgfvwfjeMAp4F6zNiAuQGtnDswh88ERZMgnuyRFm",
  "key30": "2jPSpSCDVbLM5N188pJEmjaU7it4PFPafQ4AAsRKQTiWYCYXdhjR4vYbuiWn7BiVazRrM9LieC35wFFGDAxmPDrF",
  "key31": "2fXQEU69cDyWZnYeNQLmuSBze8eAgJLxE81qrN755V1gE8a6CT2Q9mAF8mwf14bfcdxUEbqc88ZFiiXr8qVwAWN1",
  "key32": "4KeqmHRhUWMYYQMEaFWL3CrNtSvDFaEpBzdFmi4fFFbSV1uEiQCYFqGvoaphAfPfpxYabHkZgrmmiZTsSg4mMzt9",
  "key33": "58jZ5tYbwtYPyS1joL63PG2oPCnkfsqwKnwq6dfh8n8tbnybPr9AVGRabFJ2MSfCn89XGYcA76DPkA6TnNNkPE7Y",
  "key34": "5sm6Mz2coWm2Gm7Ch5fTBZnFmMXnB8nwgRF8iqKMmrH6MmVqD9mgjdnmkPHCM7AfRTCQW93QCitEY4xthAcovgrP",
  "key35": "wfse6SwtVLxSTgduyts5QQ1PP4eHXd3KrsgvDpC6kohhDZSTdGcYZp3NNeHQG288Gh8NTuRi6hSmGEfTVQhoDyp"
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
