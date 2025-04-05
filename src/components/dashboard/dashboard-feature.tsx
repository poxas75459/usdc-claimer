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
    "44Sw2AD8Z7r8mheqSHuV5QgBhAVR9XN6Tp5FaGYsw4HcR6rNTbFs8X5xRPHSMowPULX1m2VKT5QewndgxugUpMeV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "cEZvjWNbMSaM88EUcmwv2cekouQ5qT2UUZokvpmvxQFdS3g7QsGvLJ4cuwV6tQU1oRCDHspSj76owYzeQVG7iSq",
  "key1": "5aYBs942PbmZpA69z62Ya2q6kuXpa344kNgaoFFt17EPgvnoxCqNqnSRKAvuwX6himu4ELW26X4UhRehSpSrbbz1",
  "key2": "2hhb6WsdiM1ERL5zfcjPaVDNehUDuHGJasQAuAnCSRs6UurRvjfnnKR52zyayruoxWMmWY2HRgYvvZvtNh5sUaaR",
  "key3": "LHZGErSg4CjcyZDjL7TDwBBRpFMrBQ6X1K2jmRgftLdyZrHtuCtKgbe6iJS1zBj2boScdxeoi3AAty7wYUm21rg",
  "key4": "3gFXdRRS1vDGuoqTf7SJVKvkMdiXmrNjX1Accn7jZaoXCKyFsnmGemjWNiq9i51XF8wxbpCoM7eykjLGi3upUuPG",
  "key5": "wDg3pXgtzPBs4ZJEQzC3Y4cq7HCtEPdWcLjCC1vTnhJSrfAKfemwmheNdCv9FP6DEZrKuZWKuFZFTzbdFEWr7mA",
  "key6": "4dMtQNxQJswsdVfuT7nTDsLNccs7wWorCsMbfeU2FnMkr1SgMa7wHwntk2uomnFg9dLVoaUEZ2uBXW8PULNzbvCd",
  "key7": "2AE3d8wCG5D23GVjZj5wdoaq7HZJnJ6EgKaktYyqkoSStaFm6gKydg9S7SpaKhrcTaPxzA53q3j9n1jjmrraa4wM",
  "key8": "SPZsVr6arSge1eGTNQnpmYc26621nYXwuNtPuKqNPiABY13Ke2twTNzLD32t3ksc62CrqrXuvFcUc6HC7ZuUPbE",
  "key9": "318hfLPHFxZ1HT3VDjXEV2sbtw97Uh7a5r4KaPxDgERYuMXDVZSuiyfr2brb32m5i6fidcrWzhmTzXZf9y9cSP3P",
  "key10": "3CsnaUWAKtFJBmmSouo4qsBVSLe6pBX2s11anHmSbiCaxMhjVZLf82TiGkeJR98E4qHDJAgzeyCr9yjJ9XjFXWbT",
  "key11": "37pWxoH1K8UaeQCqyCCNdtXFPfdCzREwnz6bfx4w23HV2HP7wWt9htd43LDk23soBhA4Yps237GHqipMcR8vXVQm",
  "key12": "3wpnFpeXPTeEBt75BE9TSgzDWXzpxej1ydP4zxTo3YdUW5h5dve2jB8B8k5bw4b5q8PkyUDvkBmH3HEcSCRCPhpg",
  "key13": "9am6XDgoyhR3iuzMQxv6DBkiBcJRcUudgEuiM4xRAoe1TpJUwDV8uHk4VQav1wA8RZwCVDi3u6zR7XduRvoAwEu",
  "key14": "4dJMJMiYVVrxm8545CSKr2mfiKzWe4rbyXC4PYQpkHZKHY3DbseqeV9F1HU2MqLFW1nCNsvsHJvHBn93bDtvNtim",
  "key15": "2UUbDGuLfPQHFCd6QnvdmUzzxqhCaWq3niCTd6Wpo6c5HJff7WwyFbdivKhHcGMw7C44E5ArAiC2JJMAtsWADsqG",
  "key16": "5dwAj3Bu9QS1bQuTSWyZAme5YbkCZNAFZkfT9hyJoL6SqyxLVRiPLTkQLb9i8zEEbBaQjkUvcjpFZBq4XeVjRwXb",
  "key17": "2CaPSV3tqMDYRBvK3ASk9w5x57ZENr4J7nEQbhBGAfjARfa8rZpESgybKdPtoDWqdo93FTnsbxZ7mRkntUcBqN49",
  "key18": "5eobLKhSJSv6cLeWr3rXgnkR1xqcMKUuh6UmdMLJtZgbNrmtH3aGLh8G9sHo7bPnDQUYhzso16SUnfW3MCh56aZe",
  "key19": "5qBDYCoQuxSm7aCm5kVQQ8UcWa3qKPMk9Az6WLLdDpJC2DMSGtAcNGVDPyTm4yquAiA1Pz9mQqgPEcFA8VRtrfbu",
  "key20": "38x6d3GD7e4JtamJmK5kLKo3DgoAMGNJTDBcWX73hawyJeG2gYd9pPGZJqp8hR16AHqb6RWE9h4KwwayDMJzFEZK",
  "key21": "4ugDSwBMtUHgKzqj5HRYZhAMHiQm6o6UtPeqnEqQUaN8CsmUpHKzGzJx1tJ8vqF2GWzpHdi5MVatSFUm9NYKE9kv",
  "key22": "5jM2og5DpVHqdd6vL7xuXxdbzV8YdpnjrtgNKQ9UqHzNbJZTBRQmefJDyvpVDmgdTPcCDUQbKoDtH3PrnusR37is",
  "key23": "5zViKdeZriV5pmjfAdmmomNjKrSi5GjpemiUzSyEcdVnoAwTwCUrPXYLyFfmkYW2cEwG234aUXRDW3M2ZSzuwdjA",
  "key24": "52P8MsnZaPZvXtYkwD9xR9sNUDabFTDg9ChLhcAFyBqUMsZBZuXNL9matqdxjB4MpqJBPTD55hp9QLEqxDLuCdML",
  "key25": "2JLnpNoFErt7vac5jTRH64WvZorHmGfenE88YkuyG96Mjqt67ZpAkc7dXPB5W1Ux1wZvM2nQnsmoZW6xaBX5TA1f",
  "key26": "2XPL9RQHWpfNXLeL2rViwWju1dnue79Zent5ZnyL9L8wRNjV9PP2tZn1nSgg9B24kxZaG3vQUKLa3vQxds5gBgXx",
  "key27": "2ki5AtPC7L9wK1uCSPGRt8VTHPHY8ePtxXJinsBnH5hgDax3wrMnrgoe1fTfKqrQWL9gqqzb3X5VQq9cc28bFbkN",
  "key28": "39q2UQGC3gRgtWnaGULikAaumryX4y3qriYZ5hshpUeYjRqJg1VgxZHKTzM1kbaknUxu3URornFhEHuwbG5kdLh8",
  "key29": "48VXWtYsx1xgshqmk7rK3CEmFzWtP1bJMeYKYK6FGSDSZCYb4CfKQWU8dzsaTjo8vWmV2LcM8LcfLmoggm3HQQg1",
  "key30": "2L2BBhvvW1MS2ZPFKwY1LZM9tbXUoaXay81qp7BASN7gqxBQze4jMKkMrAuTQn6EgQ2tP73gQWUH2V5gjcKKpasE",
  "key31": "yusNLMZrXz9QRTWccjguiAwPPcizkrTfM8AFV5EzeqgTMjGkjRTfLbet6wfooiKHJJEd7GtAKpdiuYLRWWVAAQf",
  "key32": "2HgnTyaAbvYfJ9ZDPbdyC7AAiCGF4xjbhERwbtc6bxXkbS9a7ciEsh3hv4CpXWvtzDzo5a4GNL1NRxKijZtWUkTo"
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
