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
    "2QLAVkKPA6uF9FPDbYsL4VsJ9BJ9QtJFza15seHxMH6gnUvWxXQxZ2gFjCDy8k7aGs56jYjtAJQrJduYPbtUXTVe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4NCvJfPDxNXeLZgCneHvioESfjo2QaeUbgpn9aZjaWZvBtTRkYvjGhsrUTmejLbHVLtodfJxQpYNmF7kAh3mNyRm",
  "key1": "4qs3W6JpQTF8CEh9ewzJ8sg7GYJEw3b7dyfzDdzf9V7ABwTh2JJaSH2MJy9hEXaJe7uxsSzunauYpxzs9Pa4gBfU",
  "key2": "31AAPYVB5ZmUE8XqxxuBKRgNGX8LxuT5BUCxhXDVgXLrdoTPAZADezLQCDqu23eY1wNtWqP2G19B9oy47LQSHnC7",
  "key3": "2fGTnQxS5GfZUQZGDDWDmUpwgFgvFkKN7KDJK15HPqpM4b8ZSF93j6SguoNQUWJYRdZQrA5uEwxbp8WE72uYJBiG",
  "key4": "61N1UUXCXAuzJA1gQhvuzcAC2Wnp5BLevgoQRZERitTtcRb9WdwyfpyeLA1FkVPY3HnxqAURvvfbrHJUt7QkUNS7",
  "key5": "vT1NKcWSCCJJEQNbPaVe8DoD83W8Wz3MRzMzDyunUGT1JMiQksuqWZza8cuQjcqveQ5FYazb5W4TcsgjEfYWT5E",
  "key6": "2HMQ6GPxxGBbdtN3kF8yj81ss65sfZKmZtAD4fo9epKfqe331wSwz54PkmirrjEp2rq6zGLqjRx6Zz4vAzKQD8fr",
  "key7": "TBMYNcHREzgnDDR2tsgQrc2y1Ve716FmwkphA4JqBevJuWFs8TLSSSLgTcBKMpzDH1E4nc3e1RbDnkcLVRfk2Xf",
  "key8": "3q2SnDCGfnLMRKMarjAkGsfxUmDBoJtddq6oEi7Bdaud6RkBorXkS5CdBX64h8qqYTXXm1xUjBnVdcE799dttb1p",
  "key9": "ngd5coi27ujCA6r5evn4iFbEKyqBpvPZuSzrNDdtx49Mvf3sjNdqjYsYADFNMsbmkxi3U6VF117uMMqY7Uj2D1R",
  "key10": "5rz6viiG7crPGkr5s8nHgDUhEabvgrNDXZXV4vVCuiBXJLexXC9BhLR1jTwUvP8PSDfcs5fnfwpXZBtKgLZLq9wt",
  "key11": "WEq94oMJMXCQvdBgCRK23p1xKAdHiGP6n9Hq5KbQeVdbuLvL6RWu6tUDHw42gB1wNKWX4uTgGKo8FonTq2F4F1P",
  "key12": "59ygJjUSMBjiSUBf3w6ZR2MdDFG5R5EjycAUHtf5iTb9XyVyHqDCupahbv7Joj1YQRhGRWA8yUiUmXb6aLah36yc",
  "key13": "4GGzs9LN9oQ1xBpGsazZ7SjtUsn8SWENWnDMBKaGgNkSJ6Z5bgLxKdwhQ8rAQDevKqq9GsCFPDL4h3zieAzG5xVe",
  "key14": "3y8vb7L2jvZgzh8TRA5tWSv3GEPvL7iutJnTJyBZVkbjSGtSGx5tHGxHXwWmqBNkmWoNJfqsXsJkWSJmRWvJq4aH",
  "key15": "4mkCNNHTGoBrx6jZAEyqmKCNLhi41YFzvaF9fgphfhroxhuDNw2RfVXPA5sjXLmFRBD2ifNMcS1j29xhFyYPfTMs",
  "key16": "5xGnHvRKnDeTfBQnQRFqssogWLu98f78VZfAxScUDnnP9nnEUADsMMGxoSGunUWM7WhbDFx7mEGSc8yJEUQbv1bp",
  "key17": "5pC8dmmV8hP11XcrcipFtqtjxQT6qV2ZQhQBYXe63CVa3848YiF3CMnsYeU5cuN9kXeGqJaiiaHnPsqdModnxeiV",
  "key18": "45E4oxhYbyC1Z8R45qtfrDC3Pgtbyv46pwinxDKmqSapHZjNTaYmjvoPAnJUYpE6H1KtQhgZ6Rdkao3gBnEPvbUj",
  "key19": "2nKMEgpV5inPCUeZe1texkYPfQRq8yKuVLPR6iJLh8DHPkeYx4RaMBK5164xcUPaEnhTGaKNVeGZwD1S9d4oR3tK",
  "key20": "bjNV1AJZhs47UJr92Xkq6xUuuUTeiUTNFMG5ipBJyyKsLaCC4G3caqp1smA73jkrpjNaiyyw7G5v9LxzfzghsqB",
  "key21": "wJXe3sUAFsgdWuvtX6wDfSSmKa99tVLaYMUH9LUd1Kd5N2YVprj53rytxK6tkjo358Bm1o5E7B9g7cDPTBP5mu7",
  "key22": "zriRzE9cXj8ngu71PPDUpfWDthw2k5CsWqjHFK2Am9V52m2kY3iJudMV7824VyHQnoP9xRu9SLZfQhGSkgPuYww",
  "key23": "2mRUUYWMkRau8dTziVVXX4AihrNByiqJa6BYmGXAXP426jwzNgpu1VF8x5pXdpAdWmT52yxaHvd8yysJaC7bova3",
  "key24": "pRSAkT91Z86XZ1m1xK5KsaZAR5dqRsirD217dRQC2KHgtDtX42CdW76wYZpfkoChbnzny7VVobKJDR7cL6EFpUv",
  "key25": "5umnZdW8d6WChMv7otmixhbAS9vAuD6p5tvFTxGTig9d8CBnsdJcL4DXUw8VZikxCFda9LP2Bq4Q16jio2qXXJZR",
  "key26": "3BjvoPcpXZq6d3MPnzqA5gDdnazVGE5m2HDfApAnzM5X32nnq8tzqVFhbQ3qziGr7ecLjNoCj2L1TrSXRESVHoTm"
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
