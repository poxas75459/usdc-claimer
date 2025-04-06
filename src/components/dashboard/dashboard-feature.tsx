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
    "CXVuc7XA14TnrdH4hqmiiaAVm3DKq2D6NMVPXJy49QFGSJzQoqkDgBoSMb2mH7wLt1ch9Keqf1jYqakKbDTErqv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Xt7Qb3Ny9Ei6GrUBpKu4QhehmA3HaXZaDg3GVZQ2FDQw9RLTzJA4ppntGGSeuNemKANNs8drCbQqXY4SV8f1txD",
  "key1": "4q167vZXVmZXQ2JhxYwLprDBHxHSGnAGW5PDfTyJ3jjS3DoVB5Hc1gVBPPMq7tFzEVqweLWJe8m2QVtoryV2YASs",
  "key2": "Jytyzxs5LJ9mN22Fxya8QJGXpLtKdAfi79PqRo7BvBge1HqyasAR9ac1rUr4b38M5UNFhAHywzMmAZMQSQtStX6",
  "key3": "2zAEP7sXKX5toKt35jiB7cFZnv4EcUWW5W6MjCNBWdxZTkggKraB7q5MfXhc9DowhyohKEbsfWjrcULSgLRdfLn4",
  "key4": "44wLypTUWaCfy9yG3j31XD7AyzgAi12aM1L2CT5T2a6ij8BuwfRPKMYzHyjU3RXtkHh7URFzCoDqfjdehUwH8ozE",
  "key5": "4prBUDe1LD4ekkoEPsUwknKC4xeJRSiiDRgr9LrWWYVF6Zgt7crzSKBAPtZEmfH9ZXABnaWQ3hHWd3owfF7AscN5",
  "key6": "3Twh9U4oGNJrULuCLkwj1nvg71UP8srGRLV55uKeSnBNXWpQyJQRmyzwaB4BSj8dSbNcCWXkqVdNWV3vu2zpN1BA",
  "key7": "5qvxJzzoYQ443Z27KugBgZE5q6oTzjm3kzpvJ19TqF6djTPWp7PdZr6SwjAqsXgZUT159AmmGBxMzwojV2FJTAiq",
  "key8": "MvhBL3hZMgRfSh8SCt6ooqT7j4mn4VgtT7JSYJhmkZVQMgNPCQBVtfUwxfg46kkHkmpyxjidE3NZBA2Nnknu9Le",
  "key9": "2AzE26Gk7VSSpP1EpGLh5nQq3Up2UL7b7fnm9wkYETmr6t43Em2ze6LWCpymT6JixTfJj13MHxrXuV5T63BmUmwt",
  "key10": "3F4doMBFihzQzT3Nj1d5XtDWsvPDhTdC9yPa9vBJnxXo3LGQMJYoQCXXx9ZaXbshPvNRJjrUq41oHKeoo1giox1W",
  "key11": "24trFF5q7sRAHLaLzfJ32JF8rhWxWvdL9MbbyLPcNcjfeDRXXYncn27MdD7ssadxgd9bbxqim32HAVobPHSYZba5",
  "key12": "3R23QavLifM9iQbpC8fT8LcHuEtGTDuvkxyj42n64xxKXeQh9HdXdzDfZArPCHRdSDnoUfm4T6xJ5nHuuADtRJEW",
  "key13": "4UthQr9x5P65gE4Ke1XzP198JaMbMHJ6QS5iZJaQCVEUtJVrLUKfBf3WrZtshQUhr2aA6Q8GfFdEo1qMo9hjxHnt",
  "key14": "4xBctULhtHSkKF78vfbdra6zQTcFTza8dYadqtENsMyj2atGre1wj9JwR8BCnJZoNSBvaksjFT1CmpFPFUttYqEa",
  "key15": "53Ck59ERG1e53UCy5S1ixDy6LfkkYrfsTbERz8KmdptsSiNtzooeGrvmwjkyH93iYoyRL2QLqYwKcSZyksBLQyLu",
  "key16": "3iihNn7f8tsvVPi1SmntHzrPg5oUQp4CVi5DjiVzNnwR1nU8kyUtbDaDtXdwL3wD852ZjkcLFAcufLLG6mPos28K",
  "key17": "2p2TMahwHF3TpqbSwmcqmvtv5w1vv4CfgRuAYZYdrvwqzkrmccHCHuzVP4CVe4MFka4rHRtVcEnz1WeWrjTDWYMc",
  "key18": "9SFEVFtnKo3qv7W9nnwtADKRhkLTKt81FaKuenna49Wzc3jjJoUXVLghsGu7hTpwZQJ6YffFRnymF9GGeFG16kS",
  "key19": "3QJLXsziaCJBv2EvVQZJVPw4e4eu9YbQDivyQTVpJ9mBenbw2CTa1twVL5xC5H4y18djBNbidBmssCmCwMFm6JKC",
  "key20": "5ocQUVuPvW3R1WCY7n77wPzDmuGpKfVFvwC5wgthA1BQGqKTJTaShYbX18PeQCoX3LHpWBAGkQy4AYKJmHfFaNTN",
  "key21": "4WDjpH7bXkc5tqsEtHmEYYdYFFSPgbTsDRegvkcNe9HukJaPkLH9jV3srRDM6ZyGYceSoD3aTuz8ACWHsruQCUh1",
  "key22": "5hkfCukMA1kNHFA9gXFefqNYHuq3s5Q6Yrh7XWPWJDBETrLYYDsQ5B5MLqTpJB7hAcX4ZQ43em16fCnVBRKFWh8u",
  "key23": "kcAjh3k2rCve7dQckwBir9xnYJHR8WyBjJHzPoFMHExQLkibwWikFoUhurR9CdVmPtfweQWM6J43GrxP7SeRNM6",
  "key24": "5TAhRg1M942Ek41UfZoJ3b2LJPpGuP4SWDo4xo5KBEeV2eZtvoCKbiYNddNesoVuFysnL51wX6njDW9Sy5jsG8rd",
  "key25": "oDd6LexMsfwQw6pm6BxDqvqCtPno8Lnr3FgW3KrAKD9CFXrEuSBNW5bYn2wR2PfUZcaZmq8Kw1Z7L2ocnkHMFao",
  "key26": "5B2W7ZKYZ2U5PU3uAfYtLL9Z6p9yj5JsRc3HxZEAXTeg6HRmQjPnWNP2vbJSjHWjaUWSSzQp9GeSVojCRHceoeHD",
  "key27": "4NsdQVN31r6gRBBMQeMDHRFRE4d1KyZGEXpz2xASf2mW8cUGmA33HzcXX9QtGfMUrBK1Eq8oZS8UPD2HAECEbxsi",
  "key28": "2XpHgew7pufcmRLaCP5Gc6fUPqCKwnQBnpyuRA5dUUGRN6JjzciNwGKHhvUTGx4ZsbViwR58ScquyXFS4EX8yArx",
  "key29": "2W3ZvaftjRr774amJQR2Mxp6CF7gKfPSM7x6hkrTNYzyxSXm7SkB66jWNTB1LNCSApCbztJpvXEwHJCvbDL2DJVv",
  "key30": "uun5NHWxfMczqzLpuDNsFPc8yxh1UGM1McESjwHzBvez8jx2dkkAauxJ1VNZ3246JYkPCKymZNp2kvM7tD5tVoB",
  "key31": "3wQHvteedwp7P7EkSSLqZfZ2AXh6sDJiVE9ADxNXEZzgAKYYo3uNKEhwajeeYEEY7iaidYZVWJEE9neXHxRtyUgt"
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
