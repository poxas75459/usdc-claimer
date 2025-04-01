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
    "2vZL8Fiw8seYxCe5rNwaGXNsW3bFkQd6iBm2ZgnRY1duB31h8REhD9SZpR65NuHBgmSeAEtmh31dYAHjFPAWW49Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ca7Y7pxTviXWSk4ezpkBWkdUfCi6y2ZKmzFeGdij4TPYKoQPZDrirY7EL9Nsqe6rhBN9Kzae69WWGzN6GEA3GY2",
  "key1": "hdJsuFdCwtXoEtYSnoXsQqJqdz5TDHgFjs3NUNgpyWnKdJ4s1LmZtVtRRbA7y1Taw9Hjkozq2WggwgA9X5Woo6w",
  "key2": "oBTwiXbDxG75vEpJrxuUqSXkqwQwmcXR8bV1E2xWLCjw5eBsza5zwD9mKSKgL1HzbncPax1DQc7V4jaZzYshbs3",
  "key3": "3FGqbuLm6qM9VCd4BqxY4nKer7k16suhMkKvUUNLJqLWG4EP2NQg6zJwZPpSCNmwRa9oyibca8fZi1gvJWGNZ1D3",
  "key4": "E5K3rdHkjQAiWNNMyKT1QTzDtUmrL439RBPPYp4qWcQQBe5t5kM9aUcrXPdxh7MCwseveZvRYUoYoizW9rfefV4",
  "key5": "3zFFbTRqaLJe8ezgDmFgvieAByPFWKeMboLdjAJeQJcJykbWEgrbDSoDbcCDq3Tt4zCFzsYcY1QjGf4RSc3d1gYx",
  "key6": "4YpcnxJGydK1qTqRNffX9hoyyxqYwjkLEtvJBmuzGUpR4DUUxXUs7mzsqrLANvXeMcNuJc17CQJgDQUS38iiDFAE",
  "key7": "48Sz5cho3gpyQbzepLAPZrJDBNVBVviEVjuGdM4NFsxdkS7gkut6RaWHDiRfbqqt9NPgH7nCzWd1WK2JV5zWu4e1",
  "key8": "2psFE2BkcNRmgauPRtgDsJeoH7VQo5x7c8tix8cBgfoRxYkemMXhde8Vj5RMnxBHBwo2zjWVBf1EG7D7EdhkoiYU",
  "key9": "3YU76afFXhbWBybJVDNrLNDNH4j2mLpTDKGDoLkhJYHNdLa4Bu5hsELnckCeHgnjvJYq7wcSFPr6TxG4xBZbwMgQ",
  "key10": "5Gwx9YaLUy39XG8pFZHz1t7gEDJvotFwT3naaCneqon9JYx8839KgJXVebRpfzKPFdMm3aRz31YcQ23eXbjV4biv",
  "key11": "2hUWQa5rXKVUubYTNYpbQskB1X7vH5YNDGM7wZQyi4w1z8wfS2eRpz6rzD887fUAxHJWBJp3fhqT9oxjpCCjsb3U",
  "key12": "27EZGpCEXsy5VSsPCqC3Jc4zgXn5D16TCWuGMouEoMpPi1jFAk5Jxx88fab8cQ4PJJract8YeGeHCn1fJtikW7yw",
  "key13": "3TD3eoR5fjPUqutg1N7ysRHdguEBnRRS2kmmvEBBys8oVezAZEWhAamaYuRVShtqFPsZmv7VruEdNjyiYbPDTFdR",
  "key14": "tMXqsQ12ifFvMKT5VDKAx83Uva3pgNWgLjohZUqHLLPyb1SL2UNbKFyfYXPi6eD6JQ8DEqsNqPDKkXZD6GkNifn",
  "key15": "324UNndPgYaESvjJwqhJHi8eXgo3LqWrhMe8JD9LKjGGDYEdLzvkbU5nwRPGuRKydoprqWpsHCEkU6euixN43aUf",
  "key16": "2bEjzqh7TbJdMSzKKveQtxS9hJDPdevYMKRRqb5FKYzmmF2qtaFPUpuKLKCvGEhZsRoU1PFyX6386sZ16sWGoQCM",
  "key17": "2cM3B9KTzztwt9T3AYL9dKXVrmMRa3pa5DrAHejKeRH7oTNrvagr8KvadS6dvHMT7Ye3E45NdAjDF6SaLG6ZKtvn",
  "key18": "3KHeyZ7nFXHzbPa8wRaFrkSRsg7HbfZuZiLxuCHJE6jUT8dhXkDB4QDUfbwE9sqt54ntcgFxjQjyaBwnruxqXCZq",
  "key19": "Ua2yc2Q3xGuB1qhTgbcCqNeMi1gRAjzzdLttBBBUEeq23ywDZiiobbDRcaxtng6QKcgGEpAfmpKjj2RYECtFNND",
  "key20": "2kVWc2iVreHEjMdBEjJCti95iZGNbDZATqKiWC7CtT3zmfZvVthMjSdH8esjb4PRZPBRwh6QTwGU8oNLFeFkeJqf",
  "key21": "7Dm5PjijBGxkbH4iaGDY2yEvVshKH8gRNZdKwFem7ALXBaX8wDpyKx19D5q1irJVgnFz3CvABpsTrMtPZArfoe6",
  "key22": "4E7osU1bDPZeGNzr3bi1BYrqfzePHy4Fy5wajWaxEymFC5cK4EDgFSm3Vo4dJd2k8EvsQ6yP2iBqukTmYTm3xyUK",
  "key23": "4kEL7bovYFyiZA9eegVzjT4S3pW3NeiMyrTdjcdFkXzVP6FCQvjYuD6S7mViQwszBq3zGXckqUBWF9CyWx3s24iC",
  "key24": "5Dy5Dq4c6Ee3SoD38cJ3Mkn8wTYFHuT8GD6etVcy6FgJTaPPT6tDVCEUyDtW7qcf8d8BzBoDyZneZoM8n7cq4B25",
  "key25": "JHz9tfesx6VYHFJpwhk3ApTGTzUpS7FFnkTh1xGU1HENvMXBvKmLoqE8nw6xfXqLA1xmQ4MMFVGpA3LnH6SMzHz",
  "key26": "49yKrzkyoSzK2DFCh4QuEqzMNEYfLKchZAaeMEdvYQ7yMcKjiRMFdq6BRB8ezGNkFTgvz6RjuMgqLte26Xvz2EBG",
  "key27": "3ivdZZd3dNXkFVWTybJL6cM1yzQwxbAuxJjiU6BbMVh3XaPeZ466WRY42fnfWNR5mkwhamz7ZQfKFNNaBAYbfvV7"
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
