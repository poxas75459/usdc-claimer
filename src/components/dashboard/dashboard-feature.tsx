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
    "3rA6dbRtJECsA8f92mrvGdKNdvJqipR95usv84oA8aZ9poB5uE8KG6Bompk8BLhqAVaqXGrkoKNpUL8ukPQNBrUg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2XDCc5KebhKVxeLqFdN8Ja6V8V7LedHyB1b5xVFK4UBSbZdZ7hBqTwLq4TSx57ppBuKpD2iUSDZBEBVK78dsRpvc",
  "key1": "5BfKK3Gph113uVZ8Q2rjSNkRs4wiVTxXeW473uBZEtk8Yfv8qGwWRXv3vNzYr4psxc9iUpKWkoYJJ4dzRPS1UHqq",
  "key2": "5FEg4FDyS7xhCsXNBUw8QbhfiFbc8K9QFGJEJb6Q8jMdSAjcVaKWvX7zM7RvDZdWKHjehsaTxnqY5ZBD3AWwisxF",
  "key3": "4PzKHTZyjcUQSQ5YcyURnfC4utLH9QCm4nVrEFvQBdhq4GRRNxsRavi4BK4QYZGqNs3JyQA2F4bwcWMEiiW8orsR",
  "key4": "41nbaZ6Vubw3F9PqE3kKRQx9CKEwUtkmQEXTgcFnXqsVsdRECt4TYqU5LaPUL7zTJUxHU7QSgznM6omKJFfu69kx",
  "key5": "3Fu3Rjc4PtqewHo4tc1U1BPLqEwXxAnG8aJu577P3PsxmpvDtsfUbdyqgwq4VfV6ahNDqm8EGwNyowvWrEFfE3W1",
  "key6": "3BDynwz82Jg4jMGC2JWYhY6xPkm94JFPpNnC3z1jEjVLB74FEg6WG1SvAtXmcjuUp2nft8YhcYPaJN4aXf8M8Vrx",
  "key7": "2CVgZToU7BNArpPknJ8PPGVnohefoMPL1Xkmdim2DoiHeivoHNo8VGDqJYCuB6zJ2Qitr8x5f6RdjnqYGLPDbCTR",
  "key8": "5kVXDX9sy1jjgjoDea8Bi8mGDN5W4qckHgKFmMgEwqkYML4w6kM22mcHgphGS63W4A3GPU7WJ53wuFNcCyye8ZAc",
  "key9": "3qTmB1t1dM8GPMYSQZY6fQjCvZRq2MGFD3oMuZqY5tNvQsQyY3Yavk6SZwsVWHjt3viCeqdQtq6pMKVtQgngQJK4",
  "key10": "3fdTjadiMRkTxftXBwefFo4aEYq2aPRUNrX3N5TdhMrKarGYr9Pgc29v9TTgUxjyepTcHEos7sM9N7Dc89fEDrsK",
  "key11": "3cvCPer4RMPqeXPBkyww5rqUR9msbkLdXzZrZ4YRzwadCteFxq4KNiBLhyeNaz4v1X1rYcm95SkNJqoay7yjQ7s7",
  "key12": "5hRsHU77pPA94widnBzRciPWyhHJBiVM7zAR1R3F6t83ppzRhX38YhLvAy8amzu4WQtNrRhMjmY2xfeM9TQV5wK2",
  "key13": "3sSGYmmfcViFxv5NQmQNe9kidvYzeNYKXRaTiYKXZ9xXgbLmHBHSDFUg4fmRMafNrrPEvgedKnzqZiziq23EAgi",
  "key14": "41ztYSwsjPuAUrEKuQHyZndbYqMSAvALZ6Y15FuN4HFWtmRCwQpLVEWrnAnRRhrWYEYrJdSRaFPkm8pMvfr56qdc",
  "key15": "5g1f9McAqW66YZLxAWkMB7AermEFXVEsoADfcRN4xtj3yPwxFbjVoCfUmGZM2ErWXTnd7ZQKEVjdt19x7FRd44US",
  "key16": "4EqM4X1hvmprLprp7ERd23VDWpa3aA5xxAfZTmr59wRDMs2PeTSdQu6g6b7sDWLt5T6uZRmCHxYBhynn8FBBxjLv",
  "key17": "5EvyotB86g3Z9GrUHSVHzgHCeZUKA6hkz36cfpK8htnWEhTZtfQmpNdS8WrFAvsGNeqbdAXDXMoY7Nr9k7BPJALB",
  "key18": "298PCogm5qCTwneZmwsYHwLWosNCwbVYnwRYQ8db2UiE4dYBx3moZS5HvP7XXRGFUkAnxz4nXfUvy3xKzSQZdwqX",
  "key19": "4BM49TSNs9cLZsY3uKJWPUGwHxZcQnFn8L8tP7T4c3BbQYE4YrNAnVmPe2kYHYd7NTCaS784dpQ31vXFcNRvxsuA",
  "key20": "3L6xEeGBXKhw5JbjSaaVUMR5E1C4r7cbBPCWLtKxWPWYKN1pYNZX6RQx7MFkBfuNYV9sJTW8KAasLJtDwBKk76Aq",
  "key21": "5pAWXj71goZ1HJkhWm4nU2etrWPWd12BC4PvZ2s4tu3ztEMPTgLYUXigPiTJUk1uMzm4RqLc8MM9T4VjAAzUxXvW",
  "key22": "esLuCUSwU44pMeWLQHmWVgCLuJsQEaBZjcJdgV2AzAWxt7PCJvXMp79QPXtxNNeUY1BGR45qNyeHTLaMPxdeKiq",
  "key23": "4ztGStRmKer5eeNsiCG86oHR3xx756CLoRFmURxCQrgjanL2urDB52st2ZuXX3c7FQdSnaSw1g7u6EY79ncGBzf1",
  "key24": "3vyNKKrT2Ly9VMn1FDkrWR548SHD4j8wAAQwynF15Eh7Pte8jeaXdPcKKRGamg2tafDyTJiCPhhiSk3kjCAyyLWZ"
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
