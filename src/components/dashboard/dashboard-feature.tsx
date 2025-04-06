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
    "4BWZbW6ytUH8EsWy3FvmnKBhTWe3VjzBCmxqooxsjjkZwhT7BHze2U3ZqMtnyEixJAcxwRNEmpyuLNnYbxo9WCvt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vvnMWRBxmZP1NXH4TGp6ns66fHF4UJfFRSzhAXhb9zaLtxCEJuUeynBPmyf9wRHMYPs8FiCV5g9ReeRReNxsZRG",
  "key1": "3b9ZbBKCxAWhGk9KGkER3B5ihNzsUadab5aJxTBS1fK9CnVMFsGESUDbvVwHQw3SgDehBXxj9GpYgvhNjJwquHEX",
  "key2": "3DcqgmjzwTkTK4soyXa1M8bwJLZLnCJnrMzDWuc5a18gojqesW4ie2F4D3iaMXEs3inhVTuwkA6sKYyZVFT5mqM1",
  "key3": "4ZoriSNqwoV3A4QseuFMxtCp4JfroUoZfp5qUDVYHMhpm2ftwQFG9hvG8YNdYnTeLHz2yzNhK9QEXscSicTiguXn",
  "key4": "4dQEy6jz4fXPKJE62mRmogLJFD5hvUBd2RZNRxT5XU4CZ3H6Yeeh28N1B6DHmNfHTQrGAH96jzhpgxU8uxKwHKbh",
  "key5": "4ZNZVYQf8PEf9zJrfeiBphKcfcKpbpxkyftAkMroBEymHRZPc346E4ik97ibLpNY6t9wsSLv7TZD2apVyaYsEmsG",
  "key6": "vtgYPhfFkpFcZxmTVD6Ai8ASKEdvHwjuzS9AaQf1LLCnibTUchEDLvbqtH9eFerkvwrJjvzdukkNPtnkMQpABVM",
  "key7": "4iAntEEqXSmTWnU6roCnJ51KGDMFA6RWt2j7EJKR5GwSdHx4HSzKmm1dGw8TJfcPCSRuZc5JQRBqygA49UVXp1G1",
  "key8": "3VtJhUVEuUGhaQyVmY6fLXp67wqJ9fesSoKWni5CQJWtTMAdVsmmdH4akJVHGdL6xqnRtkLn5S13dDeKTPDzLq7g",
  "key9": "L3BTkoisgfBt83MkkQ19tQvtZPuMWNte8kv6pQbpFfGvrAt8Wr4MvBit6NFMo4V5D3ZGnT9P3C1UMuD4vRsKKfe",
  "key10": "4vyvHmyri1w6AXw6mktjwYnCQwFPbz7iG9mKqMwdudJFwCvPVm8vK1Ue7AJsKZcw1mGkUoHF3SSKgQgytiPRqqnz",
  "key11": "4b2WS142pPiuqpoUgoLaxUekTP8hqx5VppYUY2JF1re78SCG3ELoRmMggJQ7aS2LxThQGvk4X9PgAn9kWUrDCS9m",
  "key12": "594HPc7kMT4Je44J9EhzYruMbz6LCuPwce1b7abRLujm89LWRfc71K1FDXCa15AwnKL1E3utF6hWNxPHAWBFY2uH",
  "key13": "61vZARKz1e3P96ZGgUYSZekdM8uhrz1U8RB1QvihTTLFBP6trtGuzw2vTmrCeMqtqLf38eioEA6j14BAjoeq4QCF",
  "key14": "2gEZWBqosB7FoCexwxntdsBeB3TnwLrSMwnFGuhKd4N281dgYxgk65Q69nY6MgVKkYfA3XdyCnZpXn7UCnALQQhW",
  "key15": "4vmZpdUCxjdy7BMYh6ArTEFofoH9cXzeteyuvRVufSqSDssNB6Z5nY2nt3ofuQEPbs1pPWSPgZyqA3WfbaHSq3vo",
  "key16": "4VpTJ2XWRfaDuQ5b5jZrq8714uVVdSUCFhZ8rQH1zbsgbKbCPgAcK3hF1TgWiB2wLqqrSzYD6GiUUoF7EAKHYDwB",
  "key17": "46H6zvvDXvJRg2V7rf9ePbpZ1nqnV16Z85eExdfe9QPa24bdvk85nKUkE9EmuhzxVqDRsDWdtumrLFM6xZgCKmq5",
  "key18": "4Z2cnoMowJH3puWfqwL1ArkDT2Xzeg6tPBwBYUgMtfYqF7R9YpZnSNmqjFaE3A8UJrXDeQR2Vz9LHxkKZgmSmxRP",
  "key19": "61nEosK97MxcE8Tcgp5WLWRHwH2zpBPdukq5KQ3dcaDWr6End8bxabnFvRNrw5xAiQ1Y1EaCCy4EFTxQaoDkDjfp",
  "key20": "smyBbwyaVTr3EjVZewPGF2FiZhmWPH3Xu3ewbG2fQPSetkDsKpr29KGc4CpRpxnmRQ9hk6vA8Yz3HnSBWbmWZf5",
  "key21": "5eMRykCHvPXjzWd4aVsqwqFfner4mKNgpJXFQZWdzGgRAJMn35TRJZgaFHXouCJCZxpvXuFuvnKUARHtcu3goRoR",
  "key22": "2QFw2g7xuNKhfNRPtC6hsDc1XkRDiCexETLcmc2ZD2hWk1rASu23HEr7NJGgCCDw6zeXtCGMqBWAYd5k5Qu8uEPn",
  "key23": "38xihbrDQoQudx4CistXXMRBptBr9rgAabE9LeX4T33i8Xjib1ujikvJLn4zXAJAu75RTw5BodMPbh3qNNGb5WKv",
  "key24": "5ZEbREeFHFK1PjB4m5qwEQjiPN1gXYndv6VmgMaUTKMN5knfkAmvdRY3eV6ZsgC1iEwDo3KnkW4m5YGtYxRDjPDy"
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
