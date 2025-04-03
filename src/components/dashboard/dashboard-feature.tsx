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
    "3eKyAvxuBrWniu8jiDK3JkjgtDebLTwT9R6xCZvZMzsPPUMu4eBkieRSKjcKqtPbVbtRGrMz2Q9KaXaC8dqpPDjn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2fWxZDGmRrLFs3CjSGQg9pMyVnDCtzZeMmxWcCfkzigYHHf1E6xabZRiZrkuC75GX9b4y1AmccPsJF9NxNGFtqxr",
  "key1": "s6kBv6LkotXjaTq8KerCuFMc6yxA2U7qtyveiuYJkHodAHWGCP5DbdcShYSKkT9LFrKeuYsq5kqXJNjWkKCENo8",
  "key2": "4qeAD9K9duG7xzK2wG981eWZrhnLazHf3h1tAi2XSunvkw3kJhfLKXHC62KvzZk2HnLBDAVzU4nFsZGbMHzDYYKY",
  "key3": "F5ohjpq2Y6pewy3SWq2ZY8mwc5NqZ5W1mNjiTexG3HcXvSwwxB3Sutv5xrWYgFTjuPcWkWEhVXYbhFkViuFzwH4",
  "key4": "4Lv6LDppFJ6GBLfm2DhNxqdbrnS5TxXyScq4pnC3bMfyELHR9oH6TRn4y5QJ7gz9ajh4BKrmpAgvN9tQzPzn4KF6",
  "key5": "4f5gmeZDT32fygMbUwAa2xqmtvggH8ALtJ4QhV5dvHwjJJKTiF9Anbx86urtGdgwqsJ62WTTYykFvZnJ8QCX8gYk",
  "key6": "35PfmAttUAbhU73dPzYCbpfWEKoa8k2gFFwyck8oC1kwWMqpCkfxtnkA2UhWjA1c5JExUnvXxc3oWozUHEtXDQR6",
  "key7": "4grYqsH3sw1FmLHBhv9B1gFMwsYqs1LFPymkNMhW8uouaJiJre9ygiHwDaHgFmQvbEdUgaFvTkP9xLVXXdrZQjWj",
  "key8": "rmKKxHFGmYqEcKSdqsuPFiHGS2jFoYdkd7hhrzq4vhCQLcVdsLvGRLeSYnLk4skdiZLPsQYR1gw9G21nUPnvedd",
  "key9": "2F4eVPG3KMCwbN2uDfZYEokdbhvBp5gcYRDqMUyiTCkwpJrPXfKiBaMdQ1Y5wPSNsY2xwM4QnbirGW9bG9fdtqNf",
  "key10": "4aiUgRa1nQ3hcGfG83S1iEhy8EHw12p6L3g6QVEZhLyZgSFLuu7ny3i274AcBvaN2PT5Dc76jgyan3CYBQq35ARZ",
  "key11": "46wrHBU2mqUTn24WfKqWMYKWxEv47QUy4Ku6sWxoN412QiTY9cBYaQWNgpcuHCn3DtBNisHGUaSnUQLhTsBAFArg",
  "key12": "2RT9yCS9UV6xvtAxbmJJFEx1uBCHdS6UznTWMe1WAAQQjeMLARFvuPhcsH8s1RFxhw3kcDmZtQmkduD3h5NDzN8e",
  "key13": "2eBhpqsMD3AgX1Utesvv2Hu4PF79qQtewKjP5KJmL9Z8FK2WGPPvDhNGNoNqjxwEgTbNxuPWsX6y43ixRcQYfYEV",
  "key14": "42KagyU7AuN3w3rbdfjbyFTWRs7pgXvqJCZ1V5UHS2sWcqstuGsTm1PNdjmnjuLEUqoQ6LokbaUKGS91o4xBBmbi",
  "key15": "4AHfgkzM8GqkNW1j2UXrk5xkc2E1vKtTNuJKiPY6Cy9sjweEJ8N1LQYTpEVQkZqF8RxrkJ2hgsxKu7sDE8MmyXfD",
  "key16": "338PgVgMttv7UtcSLfZsjxeZyrc9oWCxSo8HFPznz7NAxQinHU4CJuhYyJcsnxqfE4kMbFD6nZqzE9qnvS1R7WTw",
  "key17": "2chrm8vnjswC4C6xdttT93GLYrjesn8G5Br3gq5AFwKpeTPGsvbneAEXwGUSU34h2E8NJYi1T2MTnFNPx6tnYmuE",
  "key18": "2u4TrxTYJ35HaQ6hCmoT5R1g4Uxc7DYgrqH4uHk9ywGJjiz5a66Q2de5kdAMJFLDL9ezwSQHrcPV8YuQBTHqRbqt",
  "key19": "FURfqHZxuqx3dYdyKETdwKArBixG21LwV1AE7iBhZ5bemsH8x3sJXLxtGgEMavCcmJUVCqZPw7UDoCg9eVkt9ev",
  "key20": "4TobL3mLgaLDe7yM18YCheFhUTgdk3FVkMNeU154rEYsaMeD9TMgNx4CBeMVZjxgQkd81YsHFvfMJytfdLkmVkzQ",
  "key21": "28Ex4xc4NqnfQeKkWPNMYnn4ekrCUW8wUymViRzYGRRwNGkyPUUp1TPLiLZMkTM4CbRku1gzRM3NDs4Cv6aLjF1L",
  "key22": "F95xugF84Z52iuXikbcPbuh8rxY86XE1sR7zwR23fVRBoWoH4LrayezX2PXTnbreRxcY6UjzjzTx9zYCCfvzmX5",
  "key23": "3ms1iQ5v9gZHeHokRPExkewZ9yTWAGY3VbhubWurDwjrqoMTR5ouCWVeXhb9uEtJa1GejbxYTaXnrZXzUrZWtDJN",
  "key24": "4aAumaYpsMmxeW4tQpnuA1JuYDrop3fh3Qp2bzbHckhj93V7LT7K5WmJuhaBH9kpnBsRnhwihzNgCpeM4XhoPtCf",
  "key25": "2dPzY4iT9kVp11hc3GwoWfxk7ATUm9HjRr4GUg6iNz2qdcd1QK5US6zA69S3WHEXpjFXXdHeczM6khiNf6MqAiKy",
  "key26": "23gUE7Q1AHGxESfkqH3WfZvRZvXPK2FWCXsKL6q4mYzWpLL8NMqnT21eGzBqW4NW1q58MFBzn3KjZxuiW3WYv6as",
  "key27": "5v3YY2CzSwLpECwCWsXpgwrr1GUJr7vFkyRkXSdzPVLAdzr25hMiFCFjXcoBPaL4tonfr6QYu7dEynst4hRqay58",
  "key28": "bmnx7D1VvusNjyPnYFjjVc6ameoDV4ho5YwbGPu2jgoURPRixabRvpaqEP7pCrRJ85XukzbKCAnEAJ2gsizPAaV",
  "key29": "2oo6EfsxPwttiKnxPLiBkSm3SV2DD579j5EQPxkvfFvAw4PnsnqmGrdDHgkzoRp1DDt6yCSDxEFRDVWnQaYbVh98",
  "key30": "4DH8HPnkUphsECXn2tP7CFLjNwyD4yeauxCnhjR4HWr3a1VvrbH7Uiozdob6L7SkkxfmPgZH2zeA24C5fTj5HC75"
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
