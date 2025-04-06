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
    "47cCYgAPzkfPgPJktEs8w3VPKH93u9yhPUVKiemvQKxq8Qj4Jvi4drqcoZmbMmWK2DekRmdaEXcDQx2ESv3p3yBF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "afs625kj4fMXTB2Rk54j4wUDgUC5GXxm5uhqv7i1MdarEPjAToAcXo8ioK8TqckZFiSA3Cey6GhKt87cufsXbeE",
  "key1": "2mzrtScoWZzmYLhpqceiUSgSVFCuFAffYTSJkrWKbYWM54xa2x2YgqFpGtEjoLtgDocTYAWNkjkc48MJtMCaFGqf",
  "key2": "4qvpnUurMyVCseVk3EFzX71cePYq7AdB1mrhuVjFhs8L7P9d5qJmBLDvbYLp5F4xQXKMFnhwEiKeZ4ZASSTvhLHk",
  "key3": "32zAb6wBYMucTAd4Gng3fGuwvFWdRKvLwbPQL4dUTu1fdrJD3LDHCMNwTqYqSMhNVxmgNU5wUrcsfmzdynrTUdxu",
  "key4": "3CxcxG1b438M6EqLb8pa24oZLQZ2gvTZxFWizGaQcuovwjVdbHLEEwNhkUgHTHHemp24tftPX4YCFzRGyzizmaEJ",
  "key5": "2ZCHSrTQj1aqJDf9ms8mBdrDqd51QgjsUaskz8w43XzyL6wkApnm3akz2gjBh5x8EGT4wFgynUSMF6HYFG6CrhD7",
  "key6": "5beea9yPCkQGuP2JBLAhoACG8rK4McVN12Z7rFdqyyJL29WHheudPrHMhtdiWpLAcfgSgiY2pjWSUCqiEQqzg73m",
  "key7": "59UxtAfWLLckbXTszCchaoCkCe3iTYshLXS5xPGbDqkD6ndtScSkvdoGDAUutSRKa85y2Y6jgWMWBHHRpd98JZzy",
  "key8": "5FwvfTD4z7HwPSVSpYRjouAiYcGFWngZNdrBdumm1y8vbDJNweWPUDb1vAVqzHZkgzXnqNgM4HkBEmCWwyA9MKeQ",
  "key9": "JKnXmxtgHG46NQ3ktgiXPzFDmChhTebzPWWtYozsV8t2TcaKFdbac1qdYNYGJ4vD2wowk78r9S3NANNQr4soLzE",
  "key10": "3X5zHAQMNJY7RbGcDgBtCru5PxcKu3kMRs5Su2zWtyShtAJAR435mdfihKPwrgcWfqsxLX4PYnuqqKq7YPAeGig9",
  "key11": "2zmoPuGkr45swnK3Sju7psk3U4hMPcAkskLYTCuZZrudiZ2Sa7tEfBmYXUwQZ5dbFWFv8Jcwa67U6uEcSGWpC2fE",
  "key12": "21XYVHCKwUUuhnEqu4Mx1kXaGDVjNj8gKqTaV7K9pzT1rd8tmtUA2caydrg2PZg6mSukpBxdC3R4YrqN3CTTVXrJ",
  "key13": "43MgNmVWUouXkAcrTDHgRWEc7MGiBNGM6oejf2aAbZHQw6xSK4nZqsKkkb4E4fsETErG6tBhxJ9Lqzk3FkKE9mH7",
  "key14": "38Kw8qysoKoSjGjdfnoNMYwMhVrfs82oHAxZUujiKWYvKKp5odWsj12UmRhGmatRoSukNRoAwvTKkgymiim9mKCP",
  "key15": "2aXBnWD5tHjFyHd1gjQETGc17qH143QhEAj93GphdmByiN1SjAGCwrL8T4M7dGyMJvDTDapnFS4v6JouRL8uPLSo",
  "key16": "2Tpo45Hy8jUjRkU8BZQE3vG5VRgs8YrScxZNttgv1eCFyd3UMnyy8LMA5MqRmvwU3Z5csqUEZ8rY9P8cF385Nngi",
  "key17": "2Q3tRZ22kWAMtWyvdBTfcNaceoenc9YRJvhkuSE34627mF5czkeqYuPzBVBq1ZZSS8NhX9TKmBCZMhapaD2erFK4",
  "key18": "2enBnk2jZ9q7YKkz7zTEBf19fXHdQ7ZhLUE6HALNKTWickc7mn5f4zeMbM1W63viMH7oJu3MXutuNAAuyc8i6sfb",
  "key19": "vTSxQqGK853wXikQsp4EddiKCWXBc4iafhZ1xYoeQusdqgY3BeFwUWNK7gtApr8thtiJnooPk3eYCz3htpYL8QY",
  "key20": "KV1rSKZMYk8gkPLeNq5UFdU2h4wd3v8xF2jzoTZkQsXg1akgjGy1aU7gv8oTXuWbDGTJn24YKByrMAFmcsM5R98",
  "key21": "2kdhBqcw4Wxej2kWA1eZd1JAwmQwcrWL55mnZ7e6AHYscVsvKXMmb5fdhTqhKdqR4Y3vqfYfDun8uSHF3eiLHPaY",
  "key22": "21EJG346jfpX2AaKEeyjKg4Trgd8YQKPY34vJTXfQc49pKq5XuVPdHRf6vboUj4rFLAAiSpKaJJoA8zz3kCUyb25",
  "key23": "3wDbz8WmK25nLkYmHHdeD2uVB6SwusXJqTGoY9fBkagbWYjHevKeDDUiy3h9BNXucig34hiX36Xq6R1nYqo1uUeU",
  "key24": "ZGqFoYC5k6UtkyfC2SuaFjndegn4QsTS1d65YWAWBHGFUZ7XS3ekduTUhbUHHQmbGJQZUTq4NMN31DQVqrQXcry",
  "key25": "4JQxXBCiTEytDyNcZrfAUYp1MuwZyyXzeFWkJhDbRHAmCtZEqQzAnEkfpk5QP8zFhu41vBqrW8cU4giJfrTMQkmo",
  "key26": "5t6cERXh4jQUq64meYcRJT17wQWAo3DjmHt85H7hwNuBD8DKRzyrcFuYDEQxAputiykSuA2zYY9Uh5j1iWqchHFE",
  "key27": "4TCcsJ3CJaPZBxAEmnpL4q84ZrTsy1fu5Te4Hrj2HeNn4iPSfJm6Y1RqTgFZ2LCLzCaBp7dJe3kLo57ytr6ncQ6U",
  "key28": "y76joNjQgmrNwsWWhmGrdFPTUc2nVuaU3qsoKnyoFPcKZe6k5cRiMhtu2nCB1Wz1HnBS2hXRCjna5NM2Dba2xrt",
  "key29": "oMqeVjZxFxJCQRHGZpKnedGPERpesvso4C7zwW8HjYNXYqY8nKytihaqxLPE9838cqC3bpGq1qKkdhmSuY4UhfF"
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
