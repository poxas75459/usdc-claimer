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
    "5RGnJQupy6fFoR7cmKMXFKyRxCezxhrXGz5pjimwwBcNWZFBdtg8WLFgwzKDSZsyb36oewd3ch2w1hQ7t5Bsm5u2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "cka8z9ZVZyZKDyFzmXA8qq6Jd7ZFNLWmspQq3RzQeDJPRaiv2MRDZ8FeRQCc9SEg4zF8MZAsmqJP1uKbjGGMUrw",
  "key1": "545xLATvgjTFPE3HxqRtA16iogHsvn6gkrtHUzNNoimZfw3Mc4UkwtwtAz31xWAMAttKaRZfAGybr5URMPg5KcHa",
  "key2": "21YzBFMkw9FXkSMWZo8yDBEc92n2KXrFQnqUSKAq6ZtBr4YxXAczCE11dUZQ1DBHCwoKEpxfEUtG5NJmmRCkiZK4",
  "key3": "4Mom4dmr4UfcujpczLKQUEUtqe6t9pFL1WFedBvX5NDgRArt3SKjzNSnPqUvpAmu2jgRDmkKtAXgctS8rka6AjnM",
  "key4": "uK2Y6FGiK2A3t1P4j7QQ1sVDd54VnoZk1QHsxifxm3Vu5mz1pycU7xVYgBjictDNo1sAHTCSJk9QQouviDyFRX3",
  "key5": "2fRh7ToTxQeYgvwfKe6H8BFzkpvvUzFhD2ZokEukqYTVGX7nsnrz91KSsWa2Ru465U9PnRThW9LvkG69JsqeEWfB",
  "key6": "4fY3VzxrVgPGfhZxmzEZC8DBr82cn91SKuUCWGUAih7KEDncQLwKgCghgrK7u7X5n9N6ceSjotdgjGxjBUmyxPr2",
  "key7": "65QxBFgqDpvJCwSvXzLVG1xhsRTAaXcZGcEAxRZu5iEodwz826Qxz5pNUHcH8adK1Uh6CGDjvvpgEQqEnsSv36BG",
  "key8": "4bsvWzqAXqHCa8dDfjKzSLZXEoAEKYP8922J3u3QQ5n8VHEsmCeAXvv2G6hiVaRUnTVkWMckmvYuSTAK4LNQdpSY",
  "key9": "526nDnYMLfTL54EKLoubgmERyRzKYkPkvuMmKnoBZ7KHV9by8EGXo55ARxPqwyK3Efy9ZPAdPYLcWxderJjr3jB8",
  "key10": "4t9omC9xQY2C4tr4igqs5oX8chuyveFoZbezgr6LWGtMnS9g1VMfqwL149iQoHtxUpaNwL9jxV7BYkZw2j76LHgt",
  "key11": "4VbGjpUSK2KSX6qjeRpfFoPeSpNfcSca8FUin1fMX5noay7KAKqukRRXxYE4qYmf63SggJ2k4EyrgMsfHpoK9dQD",
  "key12": "4D1euwFpzkkcKKyDFPgQYUtwAXpE5PVrV8sSM8cGuLEGRX7CGfgNY9THY5aK1265sWsLki5zuvh84kVgtYZjWan6",
  "key13": "2jcxbmPqoyQwHD7op7wG7EYn3g4N6FNEJMdAB2Tc6YMz5jtV4r5n1eWGHRyEynEL3TStkoVpavCZTqYsr2kQuDYR",
  "key14": "2fa5oaHV9pMYhz4Zr8G5Y5HyVjtbRHDgGcwCTt6Gqy2xj8ACsDxpzBhdE7o3yPK4UAjc6tf2D2ziGJSErMMENwsf",
  "key15": "2MU5BAzkFo3gNCNaCJWn76R3wdpLWX8knYhx3TZrHM5Z8NdLJ4F8sSm2T4k7nYdABUTyKbQA2GKmyZAwKMrT8K5s",
  "key16": "MhyKMx6CBqHr9YuytMG9S2Wm8BYvuUJdhrJV3T5gXhRanpzUeP4cciNfT3nEHeXAg6YvCW1KmXkKwRQLCiD1rgr",
  "key17": "215zoQbuL5Y1ZnynjobkzrjBa1aVj8CoQ5t7YiyNWWZot7kWUoH3a7ik4QMeSW521ucXJPMJShLrQwPzmNZc3LyV",
  "key18": "45EjLuitLNxJW6omcVf9LziDyUz843YnC1Bkdm9xtc8fZGU4BpPp9k9zc9jGamWvpoYw5zayViVQt8zeqJ6g8Ct",
  "key19": "5MKo2wNtuhhZ71Dw1BnZX2drqqXhDPwFkcxHQ5WsisJpvfdvpo8cQXe9xq3u1gFmyQ8ChsHUgNfyieDwUQKJVNNn",
  "key20": "oaBGPG5YfTVyGuSxJrKcG5Eh8FWF4U6YAjRevaLwZ3zUWVPsTs2DK84KNw1TE9VB3jXf1bWQTJMCyyKbKy5Tc7e",
  "key21": "Sk53Mwxqae3enZupZ85N6uxqWcB638HDEzUTqhijha155gjzuV1BeupgWwCtmn8N7R2G3Ru3wqfHnzxiYxXpgCD",
  "key22": "64ApJFs93FuBJRXQhUKdLNZDTbtd3UqxE8B9j2pazS3LTxcGR6GiXcMypARE8BMoASwQAa5ozNqgo7u3ksBdsKiq",
  "key23": "3dFtDVB3metQXZinrzBDEYujT3267URuT9QnPKq4yvbwGJDyM94h9FD1MyWEDVeUeyKgrqRMP7nfqDhmo9d1UNiH",
  "key24": "53PwsnRcGjjvjCpSSbMBt9bQod5Xux8R4pBJZj8DzXk8eSmaenSAB6rCQu886TL3SjAScAqAMTsU4vb5FBsbK7oA",
  "key25": "2grAyG7fGBfPxzYAhV1Q984r9QLwLV9QivC9A7oaoyaK6wzRoS54xmEGC9Bn8DvZRTKKY5ZRkccYQNNwVD3FmuQF",
  "key26": "67dGTXLG8qUi1NWjWUkLn5eoLaz6y12AkCC6ErJToKDi6EEfno74s2eCqWDgYiiSDVPVf97XZ392uyBWETsvChRq",
  "key27": "32mtR5eBpAQRY6W4ywBGP4zUFzHUuNwUdooH6tfvPNv39RkYt4LTr8nzuNoE5S7i26S7mADju41ke2SnBfAtegmd",
  "key28": "3mKu2s3rH3NXChS7ht1SXZ2hZ6AbcFvMPEFQnyubgj8XecCzuryWwPA5xBBA84v3ZD8FZ6o2SnrJ4Dia69Hauufn",
  "key29": "4Jdm8MhUm1PEeydEjLhEUBHggNTbMnzYVGFr8jLAYpzZBtetB6SBXFB6hyc7omdn2Zab5b7UN6koJqcDic2yszk8",
  "key30": "aLPbaDWiFoCMrQCQCtBkwFgNAddHaPcWaYMitGDpFhhW6z72ZdSfsUN3AU9E43peTRhz5GV1DXPEnUn5oa56EkZ",
  "key31": "5HXM8herWsdmR6mZZEPo7zhutUQbJffXMMq1mGTxjsia6pypNBMwEowwKAz9E1S8BQmTo1jbbGcafNTr4ndkmrAt",
  "key32": "5RYL1ab6o7WUuuF8twbJEAWTFrqLi2JhLVBGLLtYGwsUoNRPnHCHRDn13pkTYwHf8znmJXiTGyfT6wQf5uGQXsdp"
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
