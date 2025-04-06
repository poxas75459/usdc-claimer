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
    "3QHAiCRBDBm9h7T7PjUk5qrLEtz3wc93XYgV68VBiYT2FiU9PJ1VFJv9JTV1tdBnQnK7fx7x8NVHShKT74cKB7qj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25jdzNrLDRH99ckk8725cb1JefDa7AGAKMwTyScUfugD1cxdptaRFTYiobZmNt3gnen3jVqa3Ez4YDZry4vCmu1f",
  "key1": "4jtoEuu2gWwwNHrPAbCxdSgDMFKDMrssDJPUMFgE7AwKNZFVfpXAhVwJjLBs1AZNSnuNE7usQWf7S9HGqUNENUQE",
  "key2": "cUWKxdk7fTMgrGhtYaCxeTyrJ5xrFmuDAkpqHYuvEYBLFoptttjhNQ796XqShZxJPHTurhH6ea8U9YmJq8YZB25",
  "key3": "DyTREGXmtVxGK3URfDyzaF83D89VxF7vigiUzGgJDDvAdqdV9dSDVTrUvYmn4L4XAMEcwdM35KHyAGpLCNPjmLV",
  "key4": "FMNzdjQVAvGsNxsB3aQuJKsXExtvHtdfxhWks5St7ZCnd1z15S4yKrbiaYzzixe9zsXzSQ4VuxEvvQjL5zRHw1B",
  "key5": "jw4x3WuSydhRJMLEubmEWkhBETUWNVjjEFscef3ZtoP4ATM6fcKiXtG38ZrufDSvMLKpKHdAHNBfvX6qbNGCPUF",
  "key6": "2LNv9VTBV5udxq3ohVJXNr6PWU1R5Vj3bBVnm1CxyfkC9396yqHuJdNMcn7Vc3QhYh2ZZ5T3vYVpqSmofTxZcwSj",
  "key7": "4GAQnvNta8rVNkaN6f7FAnkVqwKvf1ng1ZoiUy9CmNRggKU9K3B4L3wzoEf68TiWG13M9e1AGQn8Povg47DU4E8y",
  "key8": "5VFWSqSnVCbGEPkD8c3x1PvN2vBB7KMhwLaJ3VJubRgYwF8LKzjf8RdxufPGFZqW7zoZTM4pNt5wcKxFu9FfgZZG",
  "key9": "M9BAqTCbUJVRfcg79R5wJitk2L71TaH6L8odCqvNCpq9BuZDVAgYB53G35824LP6XkxsvnMVccXwEaHX8yN78jm",
  "key10": "4XGegRbNNGKbmGKt347NpYkV4EuSidpYsPa1iLUx9mnAwxCEdwXWgBjYBdx7n33nsNihNnHFU2WXSZQUi5LduBAi",
  "key11": "5mPqpfvHP25QJSE8XDRoHnqA1fdrFaBy95kXKaXpiuzvCAyBiEBHwuyHUyJXmaKodmUsBjio7FpxjmpM17qMr7tH",
  "key12": "2suJPktUxA5RPuDxHC8WJG17cvx2knYDnaBnRHVj48tSxGja1mopKeqjeHpjW9CupSUZebad9msABG32o3wDAh4A",
  "key13": "37RTsDPNLL1rJVXs4oqNmzacdmvbh25w6X1ob5K73HviwdK4vLwg6NisChsgBxwg2dCEGSaXW3cKMa5JnwRfLfLV",
  "key14": "4PMZYvn9fn9Ma3Hj7jX6Uog39UGn1XUdn3UwgC1KHEDe24M7ru6DQTyAZfNH8jkVU7Q7Yh2YpTVxDoLBCkMcVdjx",
  "key15": "3bP4VkVt1cHfU2Lh1GE4ni2eWz5oAnoFcwHXCpxPZyphMCcMJpPX5W7nwsnSAD3dCRyZrqe8zvcCZdKci4NjPWBR",
  "key16": "2oq2vnxbUTNcfo4bY641aqeLmmCFAH2MwJAnQud9VvoA1hKvYpbFMoSrL469B7uWdead6iLH8SaNRDuGHtsogvBU",
  "key17": "5VZe5fR7NudG6ceiHgj6ttfWGy1LBGuFXdsL3VGWD242Jd7pjme6o4PugrUN7JZGAo3rvnwRymgctWqikXGhpYZB",
  "key18": "Nys3b3ijFsoBHGAnWFProJjdv4FPthfu88iXWqr918EFS2zRrZ7iZij4v8SNbMntnpqRsNTyotnu2tk9HTHyYKA",
  "key19": "5HJtobxhZGB5LN3YFiwM11MsfknfuRnw1EQo1qkRksTi9s7sAad94QB7uGhtHh3RcSt4CELbkuoFHt2PWCuMKitE",
  "key20": "32MbYWJtoeuDwX3acenb8u18wbYEK7zCPhTKymJSNUtjDze2XsbDBWogSAyRYzA8RfMBgB1HdgSg7qWbYEVixmDV",
  "key21": "2rDG8i5G8Hfi4vZku6wEGoiAeRXqDcaLBmEpcynvvWVyvngq9JytogbhcDmBfKn6BonoXCL2NpHFju1AxLAh8kPR",
  "key22": "2S2bY4shzwU4hJwwUhHj6VmF2y1x4JVwxRgVXw1NGyKKD8GkHgvW3SvTrjQ3yYHYSTDzFn1k15FkkpApZqyZGW23",
  "key23": "62pLWCaze1WysQBWTDds1GhLTganrn16GWvA2nTpx83uLqXLbz3aGEJZNdAJh1nvZD8nmtKUBjBeEaV6egf2NRiK",
  "key24": "3xZMX9miRy78kKY7mAzs7EomJv4MqKBfPEzMR2wCFkzYG2g6wzwgQ9zHWtHsygXvVDGjQJmKU6sm2CMGJ4TKrWX"
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
