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
    "Lmbf9DCPwVNDz3TuCxqWwyqzVeWB6MthYQZqbWPMwKFMWRhx3braKYyXJkcdXAeJYGxVbwLKenuY5nPdQrijMjU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5es2Zi4F1M5oMvfnWRdWnckjJTAP2ZZq5NA7wYPHHn83KBdTMuP9HkfUymmHZpYQLwUN2d3ZNUYGkkF1TX7BpuRu",
  "key1": "3PeQkcA7nL1gVA57D9MZFhP2J5uHtvDFP1wyRvD9YtSoJTfde7eVtAkHjQyP2q3GcrVbafu61NoadWhnQBha5FeU",
  "key2": "2S23eHBuCngqD7gwKF6fiXMyvrBPbfKuuYzRv4FJVNoSFu1srWg6cgBU6rPsLx8eYGHNxZ8E9EUYzrc8JKPWpGYj",
  "key3": "h4DcF8W34MH3ucByWJ4oBLTCpoNBurX4HvF4bBaPj4T9Es5krw6jHgnMZRfGETViAu4aBeLzDaqbfnAm2wgY2uJ",
  "key4": "39c4aK2LLkZSSQPSsoU8C54AZ6CSJFjgXrgrTVXH3gMQyScXGiaR8Up1if3iuRVqowhP1Q6VoVDHoigNHTubJAuC",
  "key5": "xJ79pxi5mnicVTcaCi49y7wpE9FVatFcsaMdimED174qHnCubcVMfeQy4njnpUvDvNCznTkd4fi9zpozMvgwgnb",
  "key6": "6BZypLNQcsQBM7Ek5fPNeZSYaYRbEnRhyd8t5TVxUQ2ctrQj5hZQdZ1HrHVXp1UVvUtN4sixuzDP7mXYrF7iWJt",
  "key7": "jWxHmcHed1yMDduFqjZp37F14KDY37MEEy4FjS2wZDhezSGC4wp2enZ1AwhKyTvupHuyaczVCMQhryqkhoC52KH",
  "key8": "2dSmnLX8oavrempYPd8bR2ZAPAiGMbe8PWXztVAn5NgwFhcUw5CTKLcS5zugevMUESv8wszxUpMpRaTkZXzTwzsJ",
  "key9": "2qLi7RmuGkXzM198T2CRx8FJFudTCcs7zzTdnuTXGM54rxZgkT6F3sH86vMRzuGt9i6ASzX449uANuLGLmSQydNJ",
  "key10": "5RMKdUi1fr783RtbrG6CpCmSgJCoKJ5siTTPW3Mw6mHRjhnYGGbcMNov8XCfMAsDUN3dUVVE3eHmoHcanwBhUn5r",
  "key11": "4AVPHSDWudVZGeyk8uPGXYj4QKgGkY4gtGU6ycfTKWidDx1A1RMfAgVGF3D6kqwkFUxBTxWfK6tpNMwgZGk4AN6r",
  "key12": "4Pr1bwWJG5v2BXYFiAeGLiz1NJQ4EDRBZWvwrQzawqEMqRDEDYKXLh8BBcNdgjmmjmRBncsTjgYkn9xhRqdb1Q8K",
  "key13": "5N2PST7graxduNAY89FaxMS4qxSbGYtchzq2bGnZKp871eUxZMdSraq5vy5wfu9sQERgysB4HizZHCUvzPtdPMtA",
  "key14": "58eDwNXvMsCkJxcD3cHmAfdiiAfA3Nw3BHZknt6TxsJ1bAYHh1Fj3Apr7KrTutX1ANsvAq6LBELyqfiiJoGLBsxq",
  "key15": "3ZYJHpBGcH8N7MogJhuqMMDAC1EbsfbwL7iJxFHvupeaWkKAwWdZtmLPTSt6z5Hgmcwh9F4Bj9RS565zLGeVsVzB",
  "key16": "58sGWvvACkCch6xeiXznhYkMjGW8mg9f4KBr2o8ouGKDzVdybJvuuHfhD1955u6hM3xR61DKjHJB15i96WJerSXp",
  "key17": "23oqhGYti8zWamJXuq7waEofJPgbRHSXYEZAnCStbjTCjonAKEk8CzW63n7em4AhqzRUYjrcingLou4GVAKmbtTW",
  "key18": "3PnQ7TVWdqFL9EbdXUSer7XyoqKowhdZtdDdwuhFgnteihSWjvysLaxZPbZz1oX39LLcsi8qABnL1GJVbjydbsHZ",
  "key19": "356AVriBmgRoQ6f4jNr8vxd8jiWNV3kkzExeYnU484NjuVUWHe1TCWczWV8oB2hypVx1A1iabK48ztGt6KFG1xkn",
  "key20": "23Gb9Z3jAPWFa1JPjka9ZbF5LSx8pssqYb1NsyZy9N8tRn7mo6XMCTpB6tcUZDcucF2dgdLTm3rMGnR7mfigQZ2Q",
  "key21": "392VAKFS7aLXpoPgqbAFghqeTzqkBVL2M7vxPAmYrZ4mJS71XB3gDYkktiU9MkGtfT5EsmTVYkwxdg42YwqRfhnw",
  "key22": "2s6Cvyv7jnm9CZZNQ9zdTNdaYjr6mnyamnBbU693uYSMtHvgfuU41hiksb4CESpsSMUR9R3NbQYWo9iDhGTdL74E",
  "key23": "NEDg7xkWfKLaQrdhm6T9mZojtaq4zziTZiHjJCXqarN5dSD96Quq44QweRxEtGR4tpK5CuDMQKCgQWjZDAbF7fW",
  "key24": "4vQqKwKL2QwTdwirHFcwvucQ38JTMbDxH7Hn4EZUfA92oDp7f7NAqAwyhyUWj4EBi31A1BMz9VH4DLQrbhFZ65md",
  "key25": "3ogvB8AEcfVG2337TjX6wRB5Gto79469Tt64AtVgsRo7M49ikwK5aB2JfkiSeUUzBj1q2h6XwXL9yBP7y3kaPhdp",
  "key26": "AtW58g42opyHQkjH6zti3gxe1HEYQZnCLAs3zaA7oJNGd1B7EsvYEuMw3JJ35pTySSoEbBfYgD8FBDEciA6miP2",
  "key27": "3TXogZoWX4QtSAMtTzTGd3idQMf2fvUyVG688KukefRG5eTTbG4zGowmuwTNefMYZPeCSfC9VUuEkR5XmiK3g8go",
  "key28": "3TioEAjqzzJVWMJ8irWVUKrcXp8EPqxHsJ7sRy4d7mYJRupNEwU1kYr1HSZFxS5R6nRqqqMWRAn7HqzDbT1kXCtY",
  "key29": "jYsJfeQzxWUzXbpn9sLrJ72RU1ooTG84C3MRxhG4TQ7QpffxGqmkkPnfjejHpfTMdGvJo4pxkUsASxRN2US8uaf",
  "key30": "2ECrt98jKyfDW74RXPY43dSTduukoxVMtQFmj7Y8SQZr1jzSjkTccQda2PJCg5jtPn5zxUD1XzDm7BvCkdi24Gbm",
  "key31": "eXKQAyhFLsGXnVDA4EqdVhG47aPsnihkY19q4un4xkZkYJtc8GxuHF1J34Fx9eFM2j5KtPXqctz34ZazJQLTMkL",
  "key32": "4ev6kaJbYCTevUHjbTZhNXsQCp8b2imY8SyAb9f5j2f7vJU3DXxXnVGNqmYiyEoYkd5yWZGftdNnCP5bLCQeQm2t",
  "key33": "4LPRAE5xKvYZQRWWnrDyBKX47Lq29qux9tknUsRXb5gmwbCqnjDuS2BghsU9XpUahkTDDpvqrLXLP52mu8pDXxiD",
  "key34": "4zyX9smoGGJmPiaG4wMCuWf64nxyidKenUZ4JF1JrLjxpxxM2caTGJ8zxqqoS8911LrpMEp6c4vhrmfYi3WaWmXa",
  "key35": "pxnG9akgj9hBZwLq6tMWaVqZWKqRN58oZvQNwSQ7eEkqHvLpaXBiQHCkKAQTDt5Tre8JSwyLtPecq4KsyJxXJ75",
  "key36": "2z5n95JrMDSoMKG6zZsLcLkXUgLDJWbtvePGhuhBMT9kEk7vYqJVPHMxr6u3QstYbGALu2d2dfKoDSBpKjo3Jidw",
  "key37": "BmR9jZFg9MP3S5MrMZtHQ7h5Kb3eWtmCeWEZ5vesNEiwXdMCW6dN3PEd5foBC4aPhU1eXUYdnLc2xdQjkqS4BVV",
  "key38": "5ipW9esvXYNh81RVDM5Kj7e3HLzzLwUfHsHf9Z6YvsiLGFc4fUuZxLTUtk5yxxVAof5ohD1Vz4V2zWnA24R4K4A5",
  "key39": "4YfY5tVqSsa9fibzb6B9ccWbSGN4b2BSP9M6A3PH3Nk1TG1HeVkLM9MXKjSGWDXxcgTwaKaE4bQLWhDAz4v1q8dZ",
  "key40": "42HaAxVRqPoaJ4C8kZxrkvU2iGRG89RqCqBGXwMXpXgzCsNqdqqNFxBcddFSJZmS82yYanRpDG1F4yz2wHWB9a7C",
  "key41": "5ZGV48ZyQJHz1XudZpbTvpgmucZ3UpR1YkXYBySJqtG8pHF8wCEabVCCU4rq7Ad8Xv1vM2c5GJ48NWrgiCsHFsk3",
  "key42": "3KRkmRTTJSqW9beMnMypQAJNN7JmV87NoSqTeCJkjNJ212dJzp8axe1JJ3WJanQbiYxLwzh982aGoQfuLMXoaqGx",
  "key43": "gkQqTrAv5ayp3ESdsuEExJAR1hUWEEExKXWKVscqVRfcN3vaQQfYwuXqMgxxMawPMLDrMBWf8DkHwfBHfWdc2vG"
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
