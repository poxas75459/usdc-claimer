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
    "4sm37T79sEQM2f7SU88LepPuSs22m79cJyxM5QHWP3wB7oUBEDtTQxRGqzvpB72UKXdYyCmXBLtp3ZLLyEZZsvfS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Q5jJfaDUc94oUZeR37wJQiwCSeXVrwuvrfm1iiWqg35BByGaHDx2hrZA9dh7oBMHRfEZNuCQF37kvsPfEk2FqFR",
  "key1": "5w1ewwTibCSNCvhcdusvx8X336q1MZCNUKrsKjRePfLa16UqjuKQMK6WsyWGJEX7R5xzBHcP6N2wfoiPeLerK1N5",
  "key2": "3wyfJ78bXY6aJtZYMUH3AK5Wt4DTcQs8SeYJNj175SzsDDrMZAaqzx9pamFTWRfYSWF3abXSJ4PA5biRB8xSvk6V",
  "key3": "2wi1Z1qrigj2LyPXNoESmTrSNYzdjK7e9eE8HbNPdcwGguoS2qNaemsSYrucBtVUkcWLsNsi9JwvdwjHxUFzsxJX",
  "key4": "5pWCwsbWWdopvEY7GH9C8zHzJ1aGhXQvgFDSwSESNmFRneyjr8XkcC1y3diBv7hJnFkSWRVWWQRsjkRYm46AoM3r",
  "key5": "2A4FmNNboqGFpwYvM1NUzbN8peXYmQfXRAKtYdnqJcZsmTE4x6ocRMZzycweQVctbdSkYuPdyMqtf219y4HBuUf2",
  "key6": "2SirXGnoR2G3urA3qnZN8N1y8h2ppr2ykQqNTMkNehPgZZwzEjYBup6K5wyz4LcKTW4v1FcGHeUs99vdDrzk4XgV",
  "key7": "39AMZvCYr1Td9UQpN2dYdi8U8x2FaY3NXyJ1zft5GwvgCT4FiGGeTVhorDuFNTBdzhSZf8Yxk8UhUwZXJWarShT2",
  "key8": "39ec1CczM6ssArEUJhYWFP9GuVfEajnvvji823q317QGowjCh8SiVoLgUNwXTSUaeWYq2XSP6LauB9m4Pv1B2XSk",
  "key9": "5Gu4snnezKWYZ96G68Hz7UmvuSg9GbRzxGNYsYeTYXeca3KmTCWRY8rom7GRVhmMyVANYeoBpP5A84GYa9iRc9yj",
  "key10": "4NHcNc3g1bwECs7GmaJg7zpjjUNoYp8Hx4mu3oxK5W9S6i2izABpK4UXqaD2ox8omnKfLdDrhC4p1JJeQeYwHZUS",
  "key11": "5kuGGW6Rgt5obTub2pqB18PTy6zH57hrFH6HDvaUK9FyAH6ts2xCrqFvu2yPGb8q3Rhn6KZ2gS1asvMcrvwa9yis",
  "key12": "JxEC2xPfjQNWfgMc5Nm2i5kdTEetAtRqWtJBbQfwLTQvpQCppzJTFeFS7kaLwvUedu5VGrLaFts648YDoptXD1A",
  "key13": "5cafFXPyKvwAw7RqRb66GjLfoUT3cbj9iPL99J8J3NCw4Qq76c7NE1xJtJVn4ZmERE4HLD48BkQvQ2FRKoKnGszZ",
  "key14": "dsSR5LTjtGd6MEtjPUaWuiLWgFnunwggJCBUdd3wdDbspjiwJYKKLJY9o3akuZTiJmfbGDSxZAdV8qpWvRPkpaQ",
  "key15": "xCcetEkDjRAA4EyQn69vyHFCB2eAUhTNSduRZ2KC5Spg4xAQ1GDyPx4cRRD3iAZuKkjSbRbB9RNshH5NeoJ9m3d",
  "key16": "5iUejc1uJ1Vns7hVUQYanCKxsL8dn3Sm5p7ovtbQRq1bg3pgrTY2tkvRFGVhgdq35HH5nqCBwJNmUBqrXEDCFkzW",
  "key17": "3aJTLk45ZpaHE83KkyMyoSpofEAh3euLs1UbLVJhK7UVirXBdEpKxKNrHDNSbnZoNZKHzvS18LNVwLy9mAekiBn7",
  "key18": "3a5KS7HRC1z1zYEx5dmumqVqpMThoSNpaWt2LXufRJbYtYvdko6ao8zXGckRq9vnagr19349tk7gunK8EVzjiQHs",
  "key19": "5UgS2cBq521ddR73uFrM9UVvY9xYuHbJ36TBrnWQyiXXou4RiGUozGePYrS1Th7Xc6cf7pQGpsKfP4pQuAkzDC2v",
  "key20": "psPXtazTPbySjZtVEtbJAr3z6a93efhvX2F9mHA8vKE2bUiNuMFvCtXqBCppzCcKcByt4raeBY2XRGw9coj1LYq",
  "key21": "546h6cTuYeVnZZ4HNBsWAs7YuM6CTzTvqAt83dFjW98Uakdm7iXnWxgnzdHvN8hrdNpLXpqLmXg2FMisVcCUUbvX",
  "key22": "2GZ4UvbixCcT3fmcsvqoEuWh97XTKzW5uuvBHtiAhRcaWR1v85TUN9RxPoA39mYxJvwMVQKhPb9YGyGYAGmUaBJ2",
  "key23": "3wcK3hQYyj1gpW3qr3b6dQzn8BUpZyyruXgt7eMyCFZD9YZMz8hWEn5md3uSMEiodoh1uRaDgiGLQ6J5ywjp2N18",
  "key24": "5tbDHCRtawFZboNxPH7StK1P4AATuso3RY7S4TVFBrwrfs3RtEJ8uiK3w48xUVJc4huCKyHziAFKHD2SJBnxn2kF",
  "key25": "2XgC16gaPafo5oQ3AVofenExkjstTu4bkRhWc4qLGq1Gc1oBfNYcbaSwZ9s79XnnVNynFeE2d4GH31mLRfcxsbTP",
  "key26": "3DQ5T3eakwmxsseD5ZA65tu4SikJyPwsmHDA9btX6zHwNz1GrwbiwYXgtE7JDvBToQtkTBBerrG6TeGZwk3tAB5e",
  "key27": "3PE6rCawwV7bNaw3CHJPwa3S362zvWYurjjbdUZZJQpXfdGDgk33c427WNQMDNkigKrgh1gdVaAmeiZByeuF3veQ"
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
