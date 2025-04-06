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
    "4X73HjXo6KFGnx2v8uDioSCRcLQha5UEFPShLBWLL8f7zy6CNgvZ5Xq71rdywW71o1vXaxqziMsCtBY9KgscsABy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2YywUhM5Wq9qVZjkkdoM8ySfrdakCQc1XF9Weq9risAWjoRbqEdiZoBfya4V9YMxxNw9KVbYPZNfPzt734CHNA3F",
  "key1": "5vWt2Uh6Suz3AUZ1RoLTU3EP3eFm7QW2Rc9jFntRByMYiV4Q4mxJGKfRPdt9SNpY22X3dgfZzyJ9R615kBH8HW8U",
  "key2": "Gk2BkR2iv99qNHLc3yZQ3eaTaaAYZkmQgTSKnobpVZ6waPvtuzwxztkfLGUbgCnvmVrkZiUL3aAhVLptWxDr6Wx",
  "key3": "4GfMzMkaV1wxGetGDRAgc8K1yykCPHhGeygkbAzcLjYM4xNQJF9VJsJyomkstLLrugc21GZPieDrrsBTEgvhFdeP",
  "key4": "33fohMXUfGjzpDxoT12tqg3RBZMGTAMCik3PMCFqtjBwRK7Fo6vbXheZhPtJ1zmBBthoQyYUe2vPckgz8yCdh4u1",
  "key5": "Z1x7DnQWVQhSrkA5bWRxxuh2F6tR62QoYJsnRvcqLun5t5fUFFAsoYwAdRAQB59i6nnU954U1hzZNq96qUWGutr",
  "key6": "xgFCj3hoBWzK3acADsZL2tBsZ2GgpS94XxnXYr7jkKqJMz6vzJ41TxaM4QRKur984mmtRamAQKP81pZ3uYNETds",
  "key7": "4xmepK61ZbuTinCYaywdb8bipymZpkmuPdRUhtVvdrxt7WZfG5hcZYkRMNUvVMcf88ncwHyjeze1dst1wXBe5rH2",
  "key8": "Kw26Q6Mrzqtq4ip5vkEHh8UEK5ciAuY8o5JvKcLbEqe9et6KURkruzs8jMPSzGTqKHzE3gNw4uXsMV43x6kpqkK",
  "key9": "36yDiLVyNuFJR6NrCFxgcx98o1DNLRzKMo45Tbp3NjyE8CFfwWXsNA19NXqH3aZqZckTRXvz8JFyvzkn9bvS9Gdq",
  "key10": "TwqQeZ6Mv3dJr8tkvuHua4uFiaHxxgZFBQfb8Nm9roHcsBwWrkm9DGcMancwCZxzW2sj1yuKRSytEXX6SGSb2V5",
  "key11": "317t63eCFNeyaCjCn7FagKJh27YGfq6RBn5t8fAnX6MAHi9yfcM4kZFrWjA9mqYeEq6AE584LB3sNsrQFuMxFwTo",
  "key12": "4XUjPjYpFrQ8aRjg3GZMh17JHnaSPor9NH6q5LxeXojSVgD2CrCm32UjA9UxfVJqNrtQ9mdX7KqE9fephXBHWGMo",
  "key13": "5HZH5ge7FMbZ6QRv5S6gNDPHzLzHeSoYYa69iYEXxRVhe6bY2WUqwrvKtbMNXh9y8CNpsuDxAkeaeuqxhP5M7bmX",
  "key14": "4YPaFzUne57itffT51H5S7jz8kEZyrUC3FKVnAEKiYBZfvm26ac15cnvheCzpzER6ZMBjuREEwmSirTvpaDHnpvE",
  "key15": "2kaQKv9bkbJqD1Kv15yhDSFncGQVANqFBnRzc96QMGiCG9Ef4UfDXStPBChWrD3ghaxedBpHX9LdGRPTZMtF4E5S",
  "key16": "5tfeWLSTeknhBs3VozwdYtfysBiA22wcteEkbLHbNM6PGZxvEfo6TFzrtkbFraYMWfWpV17xdmU3SvThZ1yHLMME",
  "key17": "41RxX69RoaCq15AxJAB4up9kFjW6t3Jpcu7XeANpygo6XgugN7EQ79oJauHY6bY5tzfmowHFhzfkhrwM7eZW4nBN",
  "key18": "63k4wTMM4ntE726tg2L7EUz9REMZn8zcxZLG1RW6Ciw2v7ajE5LS6CJxgGqHV1cHPcjDnXwSM85ugdpAwmb2azPj",
  "key19": "578AScia3EpXV3MCfCdXbx2371gKeKDeHu7mnGkike1bNASWreBfLyGuQQCQLKjXd94ujLsHkHy69jJvce7d1Xe",
  "key20": "5BHRS9VN6K8LEZr7RXoWrX3cxtHpfo1EUefTZoQsXv7Tx1gh3ASdVEY5xQ54itVdBx2W7QucvJM6RW5qWS9qMW2j",
  "key21": "4S47377DtyCxJ6T9SPoLAEGnH6S2jpD3d89YDyTyZziDHhgfbRYKULz7LbAjLn2QovDr7jRi2B4HHGWMxSJg4byA",
  "key22": "22wU6aouffPkSqRpBGbwyEmXCzxSPADpaVamR4eht5BEvfyYSg9Kb328FMABXBJRwzAgLeXw3T8N4eZBq1PDh6mY",
  "key23": "2Xh5Td6FR5uM5JJsVEtmB83EaLaw7YGrcpXraHNSJSQHLqBHUQDPSJ45uDHbn6fZXeFVKaKBtfMBursK2QK27xJr",
  "key24": "2n7spLqxdTUGDHrGNs8ywq9m4n1Z6e8rrDrfnFzhyjB8DVpD4yqfsgL3AcwGHAFWp8DQadnsBgaQuiuzDcTroGSa",
  "key25": "4VZks3oFKkXVKeJCaTjPkrqEn5QaQqqYnLwRA8dLuWQU1PupTFchPXK3bGT8YDnG8igKXM3ocpFwSwT7hZFwW3pu",
  "key26": "2XUL5W15MnNMLuAu4bNag9AVAn9zKyMWFSmp4ET3iBttvqrJTBaUY6kgSC8RiKncLxg2wzhkbXAtQEZySaAEWnWM",
  "key27": "rfL6BTSHnSaTkhMjLB34HRmKgkry7kALpkaNK5wXSqyer1drBMjpcDT1LnRvbRwKiUMEGe8ZBjAxwtXFgnU2AoF",
  "key28": "5XjvG1YRwqWpe88ZdH5iJx76uUTcRWNxNycmzhvjGqpXghHZrqD1T9TgpRsVxoxRzL88UmvZq8xYeJYLcuJsLeTB",
  "key29": "3cShHxQQALy7aTA68jHuVQ7vRL9DTHEZCeprkCA4Z2JunkYNKbYnuGaKUumV3kpwE1MWWYnvRFKXyasCw7eCsMHe",
  "key30": "tNfhZ2NmeteWeZH1Ki1qtHXh3XuDEvGAoBbJzD1RWgw9ETtxw4ULKjXrZmp1uMLxsvgqxNyovnpsJfPwG461b3D",
  "key31": "4V6TsxM8zDyoHvwC2q9LVNoXP251ZekNNKVdZANSfPms92L1jzHSPn4Z9RgZuyBAeAgKzV9hPSmJ8apPZKzmZEjS",
  "key32": "4qnmWviTAncr4thqFYdvy8U4H4AiGfcePCnHG2kg4rVrHsmSaeX1cPy7n9xF2LYuKqyNytfXurTjKLrD2ZW7UNm2",
  "key33": "3ZMnARwKBnZF88GjZHhTjsbyqvNAZHfPUrBT57EF76DmxAn6q9ZMTgy9JRFBCsPioMGPjeGfRvcFkT4VYBMUPWFk",
  "key34": "4rhQrKrNdSEN7EBRqAeAzWy69J24kqm2tcYEZiHeDqzb4Q9yD91PnkJqZCvPsTACsJUJ41w9A9E5XgjG2ghP8UBv",
  "key35": "237p6tfs42FTAHQdoHf2bcV9B3CB1k8WJHv1pPi7BryKNUDT9R3NtHBjzQXPb5BgwBwXNyo82wwqjbAtWe4jPWcb",
  "key36": "3EfHL8UHoE1w4EH1HjMLAfNsWqGBYXhzr9aXxKuXwyeNrKhPB6YKMEmYrVYufRQZ1d5KBx9rCCDXHjFY6tiAgkA9",
  "key37": "jwgWzvsdS5GuVdW9X576WjmLFhMNPYaqMpv6cGzyGQtG9wKedMAHf7PPu9uws4G8qxBx5Bpp84kVrh6RmfANMSh",
  "key38": "579fbqKxfDBKwDVF1rEnAMTQEJ8MqevZG9ozPDx66bZsHo59KpuFRJw6w89Zh815FJ6rLAq4PpeGyRXGtMah9bw9",
  "key39": "iTSdnLNx5GVKecGsbaTfZ9Jo3mxugHavJhVVee8oWS47qPrdB2TXcNMiTLiHkMfXZeQmCxSVi2nTJpSUrHdU4SN",
  "key40": "QV5HefVMMP7M7DqNd8Rs5kPEzMfXvGuLmEpDjXfWLdLKecp5mDPfBAzrDeSo2mx8NRBFc4mD8Qqqa5YB5Yytikf",
  "key41": "579sa6yAMwdMz2a8LcWGCScczoeKAJF55mZUj8zrbac6ziaqVBUwZ5tXkBZrz4s3tXzzg8sPRwnmxAjse1po7nqt",
  "key42": "5H7A6i2QizoJGyxr4WZkaVnJz9PymV4d7JJYXcwMgH6fC1tRHTRyUgrZDYwuDrx9gaxH1XcobtwQQb9cf1taKe5y",
  "key43": "66vDsyG67FBFWfPuXF9gVDcAUBZeEjXyWY9vWBjyej6UeKB12ctVsz9wuG1WeLCPfAnRyie8S3DDky2jNxSpnK9V",
  "key44": "4hjxFAcR32CiTyqe17rQeMPXnjHaXqy4fV8LV4NpeWHfX2GybtNanq5ibUiCkcDFTnxmWUKJ9noS6nwGzGnnGtNr",
  "key45": "4KxTPhf1xLiS9qNFFSxFuF3MpqASfk7zsyKLPcA5t8eyShZsksceY1Y9fjgGx1NKWURaM11JeYv8qhBnHk3TNQ1R"
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
