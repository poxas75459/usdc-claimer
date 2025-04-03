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
    "2X5xWtTFto2BJpPavcVNZnkZ2FA6q5aeWDPLYqbfBGmnMSyW2r8j5cF9qDTJX1p3gJ2Ypjf4fHs4CHtmsJbE55Rr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "53otweg8i7TfXEUW3zCxoTRn2vTECp6DmCycsvXK9MoewZirzDJnrwnbjn7YD8HwtDMVBr2dYMZzJu9rzfqPKuMc",
  "key1": "3mApFr4mRb6tCzJbPW2s3mPkss7kJwxnnV8CuGhS3zVFaLqeh1LNfQtMJc1LuK41StJGL1xjw5rQm4WNF96cHZ83",
  "key2": "4kWFTHoSjYFujBQdH5mzFpk86DudNToRoxFVHXwwto6qHyLLYF7WBCCULj9LwDBpswFmS6TRwYKrBL3A9gPs2BZM",
  "key3": "27fJyrcqZGpEXK4dU6TqWN61Ext478LeAoqte1mvdTGdAtaHqJiQLov8RK4owkTehwXsUTxFennTX7Jc1WE1nHsG",
  "key4": "5xJeqSABHeuhp9g4q7fuXeNKkishkpY1PcTRjRnrfsVyBsvvgRFMZJbiTNX8qNpA6nX79SL9kNZbxzEucRoTkzQt",
  "key5": "kRY1JpzafYtq2tVwuVGYYdnvYV84Dd261nyyHrwize9aSC8d19EzFt9znYbfmKuGZ7FHZuZUvBiT6gk12N6EkpZ",
  "key6": "42aoE7VUeCqS1QvVtizeESscXneg7dPqq39bTNHizdQah1bcBSnJywa7wrb9sJqQApBKyCZj9nNXJxDakiwSUm6m",
  "key7": "LLj6Add3BnnobjtVKVfxBsnnnTxSMc9jShr9JB3ggjajbrZb4oeAEzzhUibAjv9UuAwmNJ7CUVvY3zTSrnvKu16",
  "key8": "2qd8t49erqn4Wh597iPAmqyhrrY3r4ZYwK3vjQLExD7qgBGKpxZqCc2uPpk12JkCmmW3RMivcn9HohjU4FV6gy4W",
  "key9": "YghfaijinUbp77FhzesmJTkCxWGpftbJE5JQJ9wQXaYcASxdjx8sQcfXk4uK2EemHjbp8muW6vRyMaV4TYPF4Xw",
  "key10": "3S5WTQ4RMR8fqdnZdwehd9xcBCM3FC66TAAQZtDLNrT1yc6R5uyMhcZpiwSikMMMP7aqNMnHQW2aT84787NvaVwV",
  "key11": "45EqcZHh1NDDeDP8VXyp2xER3QncPJyjopYc5cA59pq92n9sKC9naMBAB2rhFwg1bKkvvM8WFyqAY3NJY1Mr9FvR",
  "key12": "52r5BdstG3873P4MWyvRJJy6KLGHNyP4f5TEXfJ8YVH2VRjDXcbt1oLFtWNzYxqhJiWkDaxfr94xgLJhyCqB9BrF",
  "key13": "36MuNNJgFKG3JEjeG5W8RJt62UXFL9hyW2iM7SupUUcyu98yUu7PsY5viKaEtJQUt8ebqM4uHFhRxSVgbvkEPooZ",
  "key14": "3P6jJW1wqrLydDLDTXhVVdx92h25AfgNYS1nT6acG1Ru6rtdgHqsknRkKrxBRCewsMmDq665Pa85c8CinJRgt3TY",
  "key15": "2dPkXwsYJDwYgxASZbTNcpp4ywbKiBc4YYWEMMVd6XE9QMaf8y1vYpM8euZswtW5E7NFXmBrFXQtAXvWjmEcUvvg",
  "key16": "5dy1f55B4nc7bZi3f4Ln1bLeio4DsFCRhr8iKUoNHwtXqtzqWBppqasG26km4MF1wDYDhe7rZacD8vfXe3ip3PHU",
  "key17": "2sm2UQWWxixeccGyqcGw3URfYBU4mM89ZRjPDMtKc5LdDSYLFsFYfG8jk5KNEPPbk2gfZ4a9CYHzpBJqPcdNqJ6Y",
  "key18": "24aHe5xq2BeZEU1mpNtp5oDSZ4p8MnrWJDiWwbfPMgvyVsXPwcW138UK2V44iwiP7qC2DLrmF8sRL943qLtZh5G2",
  "key19": "Pf3NJG9HxJPtRbxLNBgPCYRAgErKkocuXB3ow1QkHxCfKMxyKkoAj3ZQixrWVZC5LYCeNPmMWysFgXPDMJ8KpSK",
  "key20": "5eG4tHKNLe4iQnTQHHTqCdT1e5bCYPytggs5RB1EeJvwky13cFQCWoqSkgrHDcL38gqeQVMErzayDiCj8nDwoh9B",
  "key21": "4K1JrT3hgEyafrUwB299siyitV64kr4QfGhj2qMyuEw2zsT8xgerbmn9dnJEdsSTFeyMknYQuzRSqWuPLEi1czGn",
  "key22": "3oeKvWxvMzkfpV9timK9Qi5VbDvy3cWwN5ZiAzdKLmsYUfi7k1nVZhvz74tnUdP7zhv3YUeuFgRpwwSuFYJMsKPn",
  "key23": "2gerSZDVPit2xKPupwtG9DMSZasFyn2fZmPFGYNnPvGTukh2m3MwP6ZAe9sG4Hc7tJs5Fo7xWpG4RriURRa2k7pZ",
  "key24": "4kdDhyo3MauZRBkRQSFAL1ddNYrNoaYZ4tKzoNjDBJnpuJaqXvQHiAWy9ooFZVh4s1HqhsTFVxAe3SkUsC2Hj7Fc",
  "key25": "Bvm1Ak7eAifjMSCDFmh4JQVaP9BDcGoaNA9P8ANvackWdUvwMW2Y9hfDe47sZLDqTpA2GQ4s5vQRN3WALGkzXCA",
  "key26": "5AJNaQwVuCX3qgUdnW2Tufi1B1DwpAN8QpW8e2VNRHRmT1xoZyvGGGvF2c1Mgs3ycBgPGGZTVZ3oGu3PAYKcKY5w",
  "key27": "3YzSQdo6RqSio7TNfEnhm9JAp41AU9YBKYBVY3bLVxBKvVX5dbwpQFA7P8tLptspzMsZqDfQUnQoU9jPw79ePX9E",
  "key28": "aZYPa2TuPU46vipx8k3XjvnfZ8Wchcns32ixFmsD9BkoRyvZ6rHgJVk9iaPLxHwD2bZ8Za9G2ixB8NQtdi65Q6A",
  "key29": "VvSyk3hD5bxwArK4F8B1Sfef1zVyukCoNJyhuHjFC2GT7jnMkKHC7HeFFvRCU29L5YnoXmVixX4zPXUgnC1Ji7o",
  "key30": "32VLhrMsEwAH2RrpC7dHpgpe3aitaZJ2fA886w4r9Yre5xfpQC72VqqyvqdsN4enQ3BPc52mUH8yEtRyH75BQ329",
  "key31": "4eyfuWmQWGTjwMNHyWskFjc3bHGZr5HZzNN54aP1zgYQ64cnDHDhJ7ZPZS5K1njNbx1hhoxg8Bs7AhyYJaaN5c4t",
  "key32": "5jDeePze1f8g8baTURmnJSxbiTxZ1NCGzpdnZSm9oH1ZaPZjXdfBKqv1P7FCB3PsMWe2WEU5UyM8VLYMRr5z1HDz",
  "key33": "4p1gKWnsQY5xfaq1GPc4HKbbWnye1nMnx4yHFjscn1aFkaUutwH1Sf1XT5Adde2QZ7ft5nMYYc3jHcLutJVf4vXn",
  "key34": "2e6FXD7qKDnzoXMYmhS863YpzommcM9htgKq6JWwvwwxCAMDrNUR74ErX17vApZ87k5paDfAw7QUgusboyAygF9M",
  "key35": "31of3iXKeLJBznWiYqNhFcT4YcGWqAfbYzhUazaf4NqeeVcJk3CkTrHSNpAHdpNkQ2pCaT4tmqPs5qmGGZDCqemK",
  "key36": "5TPVSkZPKbRpehCFRaXVvbVpo7SbwzkbqHvzGB2LEwthyrybCio52tGhpzTjieNeeKa2W5bpbVYyAVEBVaJRhVT1",
  "key37": "5L7Cmu3eVccrhZnR1AzNZwkqpXHshMaJYCDvPKsqa52659kdNi3Zm1ZuvwaBffeSbX787R8ZsUmJvE22adCLzsX9",
  "key38": "5GMAHaJFFhvFmjuQHBYTRBFCx4rR7R3yoRqF7TLpTDD4ojcib15b316FMWAEwob9bYdiD81BSJf14ookEJ12oVew",
  "key39": "3yabEMb2vKVE5QrMtpxhkQpqWKdikNUTT5Mc81CPtM7jKJgWndvMQLAZ6MpFcAWAC5YSnLjpaFudqcnAgQJZ21K9",
  "key40": "45sGKTdfCbVvHxUsScT5DgvuERPwagqmQd4z7Bf9FFv5JXmDq4XvGLoH7FUK2EEAsXF8VrnB4EN1c89U9vP8j2oQ",
  "key41": "2F8u4jdqHaNYojjiyhAefzWh94yD2UFWXfgtpYuRZJsER5qxik6CEbRgKy2LrZixtLrRgayyCRhHUx41zCnswy6Y",
  "key42": "2KANcYffBVFEkANYyriwnxu1r8MrUJ1aXKrNr6jeY7cYbRnghExU1hdvAZW9MF7ofruEqpiobxvDqcFBqY1mb2pX",
  "key43": "5Fm2LV8ghYAV73e5wboAGAJJfqrWQjvE6d3TvhRftvNuWS9V2CuQjZ2J1BjvZatwC61NSEzd7LguMeKaXVbSpYf3",
  "key44": "5n9S1MLTfRfcRsfJsMJy8TmpzhNofvXjVgfksuzQVpjdE72mThHEf5mt5WqRyMUYhHM8uR2GynkhQoGe4HCKYAca",
  "key45": "31aAWKgjJoVWGvg58e13qBEKB8MmyFtXpUbTyynCVyzg3JKZi5QHUTHR2mfNdaFeNU78r9bfMV6KyVDPybqkcaXC",
  "key46": "2x8BmBATrZMKsoHPjM4znhQUjQqi31BTgo2t4GYUvCWvk1q2fZcy5MhZ1wwMu5NmZ84KqtaiKFp91jShmVB9NMeg"
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
