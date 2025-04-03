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
    "q1isC62C5qL5214iiC2SpxPMeHpkYDojSCezADZjUqiD2jJg62U9Rnm7minPXJjnQAGeepfPd2v5AiNyc9JSCYD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3AjJ61BXTrY78CHVeFcmTM9rNTxRuLD8qWvhf4Kxk82zvhiQ3aRdH36H1waoXuF2NsByPLajHzx3uigqcge9rHCh",
  "key1": "tLNPHXDRR4QkntKDiAZGMio3qswpCJmtuvVGMm8UrVevRStSe7behpbpvsrXVMhWsB4bvs9tu34k1X1GaaP7HF9",
  "key2": "4bR8jENF11ULezn4o6q37mgdnfhvNZoGqc3pjoWfNQTmWn48WtnFetg7fGbWMVigTiE6JCKN5w9LDVb1mjWZgBK5",
  "key3": "y4TwuuLziKdfi2fn5V5WQt6dRPALi7YNF9Wp7WQodpV5rjZoY8wgjfBz4C4JS2nwWsqNAegZJNFDY3AxxvSCPMq",
  "key4": "7ijx6M6mV4EWdqsZApoTxWAxQgA9JdZUdzoHAiqx5k1uGkR6W9gE3T7P578JNohPT6tuB1usEHSGfosL8JcW3Zp",
  "key5": "3Hv2AHkXH9KMELUsRWQxuPKwyAX1D2KJ9thAuF9u7iBvFjsKRXRJJTF3u7bL3GR5Mirwg5TyJSzs7Qkbk5KRMxQg",
  "key6": "3xXBEthLYeBbF2Vde4Gt1dayj6oAkbRVLnBj3URRTbQA3AiiPXT64U55cLpngEfD7Ha7ogKyjYtPsMxTbhVtzVg1",
  "key7": "2TdigzBa64csHPyVgvce7MZErwhYRufrfF7o53NVrgPRfHMGU5ytSHVRSSLdn8unDNnA4LAjYsR1Y2LkFyeggsgD",
  "key8": "23moGSr16T143gUjJVKCRicLw2Y33rwVEFdRGXp6mPcicepbcamcCi8msC79vYM7kQeQ5aCRN9fXd9aAei3pDtUN",
  "key9": "3U3au7ZXfbh8m2ponapMn71rPXnsfaJohZrGs5NwSXa9Zz2dZ8Ctz2sAvL2KneZDn4wj9kKkyhWANB4dbVEM7dg9",
  "key10": "2RQVwLKc8TCUsCt61okSaj5682wqmjhJbBFrbGnPBrYnEUx65pEU1ycUqwafhYAWkdPFbFRbmxhJwcm8chcKzQ5L",
  "key11": "4rG9YjPpQbhASkZQx3urMfmb3BuvBudqTzTnutpNJpyw5nSowGP7ztFVzuNgjrbGgMQQn4CNEerg8PENDN3uaTf8",
  "key12": "3esjH3HohFBdf5ufty5pNZaEypUt6rJG6MFSgkyP3GvosUCZjhTMoQz8eHfGZ8YQPmiCyUaQurff458P6fqyZAZj",
  "key13": "24h6Gat34wcJysYduUrHFKLxZKhta3EPf5d86BCW6T3AZXHBysWGGJFgGD9LWcdSMfjaY4tJQxrBrYTbNphAohVL",
  "key14": "5VXMoudG8Rkhpv2QoAAWmfFSPbpteHa3WrkNJtP4uTQnXnN9KifY5kZ4mgn4kd7r5QAfG2DwThy6RVaHnJshVdBL",
  "key15": "2YB75oMDuiazpZyNYaeLBtNL9SvbHN6RCrU6F1gW53K8BnnhLApHxnheybUswZRr1yRda1Y2CuqwmQ1Wo4QYqv6h",
  "key16": "2hjKpfGdxvqjDTzhu2n1LUryFKhSacVfPaBSpPXHx3Gsjz366eEtXak2UwAt4PDQtvc5wSJBTDr7qsvk8GG7xMiz",
  "key17": "4kgpThuaoJvaG9Pod8qcA4HXVKauGGHqWjFKqgK6hwZcFNstfjtQFv7XwfQhh9CxYewBZ7KSwLcgYvSEamNWRB3V",
  "key18": "3d9vHMuVWmyboSLwxAFPzoGsHMQaKfCo3YgFgq8iDK8iLpdVpoFgeWcoSJZivcLspv57Q8VtAUMj51fz9XQ3jBYY",
  "key19": "35dV35YNv3tiseEVSviW7qhKc8uNp8BYJNz9pD2xc2UM4xgoVp3RETw45dyyhwWW9YDJEqfFKL2VrCUtKjJHL4GG",
  "key20": "3hj6s9QcMxzG2G4HCbvbH27rtf9TrzduCzkwpRgVVm18ui8fejEyWptu9iGyVrv2GCTmJhGJftM6SPrqq6yurjHi",
  "key21": "3H8X8Thf9f5vPjht4nSYXT9WZQMtKQBAcWbg72YVRKV8By7NtpUeQ4FW7AFVirMDyMXHMHPSU81NHC6kBrwHwLET",
  "key22": "4ZrRZsyoyGKhtetesCdCeYfYdzJojuPksdGqQYdJyN6MrFCeX2pJPp2BVkkUkzzuv3YxyNvE2mvpHxsn9LH7PMuM",
  "key23": "3EW2dao8WAajXU45fQ9PaUYeEcQCPxuV3JQFAGYaZpxSpNHQRPRmjtx8FCTJr2sbu6BHxnjS6PE7z8fotnR4n2hq",
  "key24": "45RARBp5wWpZ18Xc8PUxvxjKMnzYRjccCn6jMwQWTAo3BSQEyScDGTUnvHAMPK6Euro63uuALCN1N1EFpq9EGZ4a",
  "key25": "2s4q59FjVLydfBkit9vFbH1dM4GLcUkXaDXs9ZkKVgxZERWnzfBwwa9on97C3cMToADPtJasRUtRm9Fix7EMkKrt",
  "key26": "49zMzuuXMbguQNGaMsnCAz6ZwV5gZBvTR9zS2ztGG9pDCz156y1NihYm7XrGVeySQv8V97v6ycvgw8v24R4mom57",
  "key27": "2CNWV5As916qd5qJWKdZX2C5LQwYBM5BmtJjCX8Na33pb4ooDg9DRDLpF6gULuDLxNuR8WH8bm6Jf6wanwEN9TCk",
  "key28": "2fCPunubMiqrMw1GnqmQsSZ3TVoh33PmBnwEynRGqKTdzACUVkqvvXtfeW83uCqBtPHkMq5HnZz9UnaL98fa7Sx8",
  "key29": "3P3avSsF6enddgBDhBmwM5soN8p4s5CAN3Sm54F5QtMQ4CB8yVReVNsjmbPukBRdbytjew99c9B6TJWJHGMiGm8L"
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
