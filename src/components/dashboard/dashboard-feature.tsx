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
    "NeJPAwhsuNq8GmVFVqn5idopAbPxsnPK9zgchHSgRinFTpgqfm5zRgnBCJ9hsWb5yPbzrPLzGbtuJrx5Bzc3oXi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3WSVvGqhcD8UBmpLaf2pM1pBAV36Uww9E2BMjTeQwcMpTJjeD6TXBtR1sFaYBiioYW6Nn6qcm7aMDCNas8yfqFjq",
  "key1": "cvDsSgJC1NrpLyXB6bJdHURfsaFqeJJ5JbzrgegH3eFQvrabFaukduaF4F7ZP3yhgwDMtA7xm6TvRDsoHcp9w25",
  "key2": "2cZ4QKfiAXPJVLC3VoUNaSyeT1apAuEa9KpkQnB7VexHGnQKwT1Tuw5p3RKxCGq2npiGqnWaxPHUzrHmfVBa7Lhf",
  "key3": "21QmkjEPCoYAjh7w4N7PdRzsGXQrnoVjjty9j3ogAVfuphPUv27zQgEVfWb2gJMGf5Jd4bFvmK48EE2mLQeQDQy8",
  "key4": "71ypkqt2mSCeTtE1F1dUXuDnBik9cEsrPYFgZedttpnQZUDBVmYy157GQDQCjqWGT6fD6NBaiJdToMhw8qp65CX",
  "key5": "62Dhh3xBH2KSSQMVUKDnxGBpNRPGMU5eukUkVuBCFmC7LkCWBSSApLZBau5KpRwDd4p442KBVtWAtMgd6obJRdaP",
  "key6": "5KsXRerVvhrNA4p8Cjd7DC2MtRwMTeVYnkYeDYHZtkJsfey99SzaewazHtY7tcN7ArBSePgYJuEdyJ1aBsMiKSqc",
  "key7": "4bSg6XrvVEmSE4XDdWXPw7gHzf5Sc7XYnSaGAxDdLg6ZPppYGxZZTQjvjC2JB8frrCNXWhR6Zdqe2AcgcuW1xbb5",
  "key8": "53RVXiSZmPhWwbfJehEfMMjkdUygMKh6w5Wh2rFg7XCwrbTxgmpsVwVKLmxPtT4Qv5LtxDRRbo7NBS318DvyMLys",
  "key9": "64XcqfvDi1TxRkanhm8cV1167JC8iPfLngGushZWU5hntywg9M9Wz66cqFWabmnbW4JPzhxEU4T6jCutvFa9gmu",
  "key10": "4NhxyZLSUN7b9i72Ahq1YjsgyfdWdWzmtJ3LzgJFFV56mKGXEgpzqahaEewkaPsd7wtGBNvAUpQTKTVZYkRCD6pg",
  "key11": "U96ogmdbjY9TogjXViD9P1bg7wAfpyYYuhi7fNjXn4ZvEYT7JwTcvh48tUEeMdt1wFm4Dbwe74QFKBRxghJkdUn",
  "key12": "3gBes5JejDHteMKA3MhfR71fMsmoDLKm43MipLjZ2pxTDoaeXrTpWwic5kLFbJZBCtT65Fri69eQ48BgPDjCV46S",
  "key13": "4tK1DdyazK58bnD83wRFbgfDVBLzfwHnmo3oWZ9dk81Usn49sVbM7uhxSn9csdg2UX2JjAtojhDNnxavPJCKGBiV",
  "key14": "easp4E737mHJ6scamEBe4Fh4Fc6mLB7BYG8r8qaPTRQQxhD6P3AwYa1nzGEDaySU3atZNRAHFxcE8DKRNaCHvkt",
  "key15": "4nGpXVdz2VHmsJu4AbTa1f7Jk1wME5cENHqHVzQ8GbSi9cUnSFLGVgHcpR5tW3w3Bda3HYJb82Z4ifp3Dq1N5Kd3",
  "key16": "49Q3bKmbiB5M6FG3UYobdKJGdvDCnH6XBUfWZKTo9GMDnHpJqd42XvMvD4ztZzYyhNHg16ZeT3vtuuHPjp5fdn6C",
  "key17": "57RxfHYvvM9SF3Jxe5oasZCawVUD6hw7mzdgop7YNkTXZNghHmRrpkum3EFA5JgXeFT2w587UgoLBs3nA6r6YhAL",
  "key18": "3eZVZVCne3sCNSxv1tChVz6Y51Kbi1spo7RXQFU7S5Pi5bBxLWemgkWcE3PbhLKD9kSUL6exC1YZh5FD2CSnECcy",
  "key19": "5xLXRkqQWQ5v2BaKRm1F1kqkrHFH3YNmVx8BsfGgCg3gp7WKTgwrZAJffZGJCXSwQReDAyiB5K3dP9aReb3a6N9b",
  "key20": "4hFvo795RZvv34gENhbBDXKyynY4nrkJqXzX55dYCErDNdAJaQCD49sWh6jVHCtQWNTtURhURtimLEzDjfLHT8Li",
  "key21": "5kRenDnMQxGHPva1MVkDZ8G8tVDBbqFf94CugSWDYA1Z1Y7j9KCe9ThGrgKG42GLdS6RAqBzvvVZ3uiBdGU1bK9C",
  "key22": "32Kh3ZBcSpXHJswRNqnKfToYumBscaf7Qe6mcjdYZYxGbGXXruc2gXSj934sLMWewe3TsDCysboQLJzvKKt9aSsN",
  "key23": "2ky13ywZWs1xSGsQa9cPqJwjQjU1XtSNqVoGmvctwZrtCsrh1BQtY9haEDECBgs5f5sw74MtNs7KihG4u97BWYuv",
  "key24": "5QaTDKsbNSGhYXHBKsytHrVnkBVf7RGwVoaCUWtquVTepxYRj6mBnw8C8cPUt66F4Y4ADEqrUbF579s2ZBWmYaET",
  "key25": "5xUtAxnpCuZsdudcPuijFqCpaBGDx5Y27WHGQ3uhcyC6Wu9wjGtJaEVRUhJxhw31yacPWWqdUB6cBMwDKXEibh8G"
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
