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
    "5EeaYq9N6cSUheUmT1NNjgZVHvwgK8kQ3jMidfkrVdrj6DoGC6U4RBqoGrZ4ihVmrB927LHCjiBgjqpLHTzTZL5F"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4nBFBQkQzNSsezynkFGg9d1doFRuXiAkSftc7JY1fGe6ZBUrqihDMQm89RCuNQ45NtJF9aCDSZRMvfjaxtYdTWDR",
  "key1": "26DrqkZRyHFmRTWBpn73ZcsyJMNM1sTFNTfCkzcLNV5QdWK4ZQuHeYTYe8Jf8h5CNkVhBj7tE3ZP4qkGgJi6fM8s",
  "key2": "4rRXAWEk9JyWibeA2rUKtXrbRQztQTdkKE15HRgiEy6s4ypVCaB2ZTpKci8ZNnHkbGvbLbWLAtPCH4qPjqPyjp49",
  "key3": "27dzepYf64xavwnBV75D9CfAvhEPxv9uoVjFxGYL6QhDbwYoSxvVeekTARjf1kbLEFWZqPQ7k5YKP6z1FmdU7QLM",
  "key4": "FEVGhaDVf2DQfPp48EBn2ALbCM6fjBTxBokzDt4tidaQtnXAoGivaEiADmk7eQez8RoDfDt3B6CDtGE5KtwgSQD",
  "key5": "4Fyqif2vGaiBibDLbRYFZghqpFNbqed1GDuc6apcLS3Es7B58vtAUsFzGdsnwhmxjFLGgj6PKMi787Z427siDPmX",
  "key6": "4iqeTFj7FNAsCZ9xLUfpvECARpATYrjiv4ktSX5RMj7qhCiuuBF56dBHVoZDHr9Sc63RfGh7MTywJMQupWSgsqnu",
  "key7": "4Y7AA1qLGGR3Boy7tph7Vz4XtavEaPUHjppaCXttoTMJB5iiJD6Eu31XZraRAtebXtZ2jyZf2fvjabgMDXQ9Bcy4",
  "key8": "3ktkkkJfUAj11wqeBGANjmY5L6T4ib4imNaWg2bjJLP7wszanJXwG2UEutpcqkMDPqJThZx9f6wNypk6MidGVRpu",
  "key9": "5Jv5eKNQaYf6rpYioejcLSiZUqNg4ByoVFBPC1J9FRcu9tmr6HWXvjJvjsq2jif27GA89BsVCReNJNCELFj8fp1v",
  "key10": "4q822Prf4Syk1Ab3cxpfUkqt2DBdVrWngvMKrVVZ4NQe91xjeV9EqbyCB2TKsXG8Ry5Mx7VmzMPb2X2Fso2kiuLg",
  "key11": "2vKVMivd6shteJFUfYj65yu7BaPHSoNzJbkY5Ca3Zi9zPY9Ze22amqAoSKzRj5uuPBusRqkWJaRiKt7VMYRwaMjC",
  "key12": "sEd5GC2uJxgR3J94jdi55qGmrvrRDSSLCzYBvGV7JAxq4g5TEnkcJ2dFSYDTELwpTv1JRkufacCjSxy6Fgeq3Z8",
  "key13": "59RRzNTvTAHkrnLBeLcF51vNNoNT6uPpTnzU6PA1BMjU4oraw1kFzJGHBcMNfZycfXAR4ifXYetbhS9LeBz91tnu",
  "key14": "4pmYUeogRxGyfN6ggSE1EHLPhugttktxM689nGRCR67ALRN4cMTq3V5Dox3yyfoUdSejDu2zvwZedfBkuPpoREce",
  "key15": "3Vger4eZAf6EZNvSnp9imgKavP4kqMMmxjA5t4iTd37Z2MigkDonnzpiecTLfrLSTeVX47FMDhkuM8MKgeFp4KUu",
  "key16": "5516NZhbc2sjyZ6JrE9aWvCNC9fhufNNYzt8VATtqhmmyQYKdS11yrcDuSszHnotGHqrRUwDSDft74V2GhUE2wXT",
  "key17": "3HP88To2iktZrRTs5QxEFH3r7FRmbAxw6xcjN8hHXwA789eHi8gKB773qvcATNU1yjfkXLtuSLt7xwWBKqwfinHn",
  "key18": "5SxQEMR8QKzeHoGUdAVhFnBmViXxuE3w1uXCwRbFTWycVHvTnGSkG6kzST8ogLUB1WwuekeW5BVCCVuMenKTcy6o",
  "key19": "66wHT8vmQkmTDZv42URhhKgPKU1ZN1MkmvWALovPhBzHaH7QvyKZPcqaQ4dPsFLnAF2CDicTYo6zTkfJkDTKDoNZ",
  "key20": "jVGY8zzXxUiUghaAiDZnDcBkUq99qp1iYsMo54vphxKgWEhSNFwaBDp24Gi36FaZweofALp8qr2EceaG9mnnXMF",
  "key21": "3EqiBjN66FNiYUheasVSJHP2QfUJbupaKh2GMXbrMCSUudqDBJ3NoCJUogrumd7NE4dfe534DtbXCt1nFjjAAdXF",
  "key22": "5gjTdSKmwR2zFL3aHn6mnU3sGzxYZnx5ZRfAC4uVBeYPavoABnexPgejX2KtUdADiwbDUkuzreTi63DJf1MfQHic",
  "key23": "rb7Z877AX4yX2ii5YQgSp5PSVPVgHu5WrGCbdqnYG1ZDbi59NET5mYYXDzJZ3pzhYFNraEio3SB8ERC6e9mZ6J3",
  "key24": "552wZrMTwdjUzT85DoyqP6hVGdj9mrfrHSDG41pLRFTntY5zm5g5m84pcydePstu5uXpT1YrksJeeWRFAd8h75Ys",
  "key25": "3c4n56qQ8MNPedw9upBaoie6EhhV357SmhbKJUyECbUtGgm84gtaRfMrMYuahV3Dobymfysxs9YGWZxm2TB1bevm"
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
