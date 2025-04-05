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
    "2Gy41ecR8Q3tLgWXy5Ued7V1XvoaQfANHR3BtnPuDD9SMPYJNyzY8pw6iPvTYmvJEqEXv5rh3TcEzwTA7LAxq3ZR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2aWDufNtcRxqmXTWESuUswSw79g3KKA5u7Xpc99U8fQZ1xxotS29XREDz2bQadspNCWJfB9U6YYaRj8G2thd4pWv",
  "key1": "3j3BpKskmG6XpHmmdgWss5S835hLG3VrBVKGrasuxLdSmJ3WJfznhSj1PKuzUFxsQnY8E4JbtweNfPCHysAKACve",
  "key2": "4KHpXkEvyPuf5a9AMrCTXfoFm2oGfRjxtKfdVqLrj5pXgqdZgULW1HLEp9Fs8hM6hnVaWfRFr1AjegPr33WThXwJ",
  "key3": "35EDwAXdmstY7FTEdj23MTyuQ4HW6W8Cx3hmzgrePtWHfCAeR2FB3D1DGqV4M9EQLVN15qKWNyhqKsQRd1uE9Mtr",
  "key4": "2No5erTqm6sUBjA1sq5ryWHEjW42QAHE3SSR8d6n6cH2ZbnRrev2unQhRhcvCV4SwdHFsoqx9RtvUcYxxsRnoLTq",
  "key5": "62Uh5ensYrzgDvYPm8FPBuQFzr37FL447kGLnvDUtGeb3uzw5tmgMvfTb15eRLBxk4dU4gd38fJbvpczwBAM7bn5",
  "key6": "3jQCHEgyJJedbu1Fq1M3RhHPSB5fKehYt9PKxETMLPzLYYj9azpuPYE2LgXLzdU5chSygjY9sXxkazVPo2JNjDga",
  "key7": "67eN78efURdH7tx3Z6MRgmP5kPTy9cEHpB91EYbtYeimH7YmUz2TMbxmmDRMtnX7SuH6pcQVNj719Yb4jj6RW9Ei",
  "key8": "22YzNVxTmkbQPLQ7nCG51Y3jr8oMczCsjq3PqYH5VFx17g32bVWA4ybEB4gV2pSpB7o1ssy8T3o3NFfj4CooCxtn",
  "key9": "4wJPn6By6K8HiyPSu5qUQuM1qQkMowfBW8bvb5Z4EjhDc3Y3nmU7SPx3E4bRP7TmxjjmixgzSceAWMUrCUaKUjQg",
  "key10": "3jZJJyhfQNWUCaaiZbmMvn6rpsdTsGwswMzYsKgU8AxBRRb3dR7VXPcWXKcHM6sGmnPBmjBCqJ7NoJFhNP7ZY5c",
  "key11": "H51F4bxTdmtXrFc2FUCz61WuJpoEKt5ckQuobUeoAKpENsWLcCs6JFY4TMPTYyx7WPnpgssqVtqaaAiiWng32WK",
  "key12": "5oyLGPnRmgJaVtXkzThwoVKiwQfi9eDe6pshrGjz6C9TtZETfYJcrS5rXAU9BFqdREwLGzyDBrLNCogEseqRBbS4",
  "key13": "48BEmS2G9ZnL7gjzn8v8Uw7hkgMbpqaqHHN7hZoW3XkEA2793AYAJvuwd8cMc3Vqd24Yq7D7Y5edakyKqz5aTz6k",
  "key14": "mGU93DHfKgruR4FvNgUxKJKNTVBCQpbf5cgJSvJhVFDrm9KYGZ8quwoLbGf3pK6bwP7cBdsp3B23pRRNmnnUmnt",
  "key15": "65cE2K8QRwbGjDwkX6y3psHBNQG79zJg7GSW7G98pGUnbZhyZNKtZvT4YAU3AXtvFgwBvpL5qAm7stfjxYBQMCRv",
  "key16": "N1pANWAfNUj1FygEQoWEM8AYKmyZ9BJPVQAG1VZtJv5g3XUpQMbiw6iDDG39Gx51KBfg7GUowrth97qcR8LJ6wt",
  "key17": "3MgroGHLWBKJvDQvYnLzkqjw2GMHJzNPJ2jk476Uvb5du3UuEYr3Rt6Zaz2LxEw3PW5uS5EpRo6LntCewrgWKhkB",
  "key18": "9geyfoyQXegNN6T41JYHNNGnjLaND2HheAs14y5qS9qkYqBf68VNZoexfPh8JC5u3E3AFto94JaGAmobYeuEgtV",
  "key19": "5i2s3PFs9oXqwYpGx5ccxXwMsSPF6cY3DiEcHoG5PU6kLSsUA9LwH6zWmzPKR9c6fLDngyUrNK5eS3z1xhhJnVub",
  "key20": "52Mzzadsw7b5cpqZVHTvMbjgx6UZkKi52JifGWvb9Q7251mF8uWoxAbmTbdVg2RYDWmX7wpTWoyj9rAKNfkGNa84",
  "key21": "2HY3U5g2VrVGnBSucgcukdUyLVdhgnZLD4qQy3P2FK1YdK33CPMDLCJqFfEDUMejVr2xwBtjriA4ffcrtAKHzErp",
  "key22": "5CQjFZJpqe96YZfzvtAqfbfGpa4XqspZmi8Sg7hScuW2cXk4px1mi2ybiSbaScwch9U1t1pt5QmcLPBwZ4dFvAA3",
  "key23": "3bjr6RXjE4YffZYoGoRsC2fGtMk91cnQD8qsVYadLkwhghMbFY8YUho2SaWtYoPZwL3t2AonkQAWesBo8cmoyjWW",
  "key24": "UUX7Cu2vqU1iS6Lh6ph6eTeM13cdMFx2NxzAvGCjap8LKkMD8pK9zLMomVz5p6XFM3AWU5FH6wjTn8oYEvtxvtt",
  "key25": "4Sj7G73s3rC5dwn2BiLWFzuQ4jXUzZxhLSGaM7htAeTZYNtT3F4byopwwV2t28rfHjpEcXHmAfvxxzitcx4CLTGn",
  "key26": "F7CwjKkdz8mrdNDgdCjRnUEVNbi1k57JDzwEMhHTzbrFF9WwDkVewvvRb3ar7EUA4cgKZ8Hce1u8iyWJnBr3cGF",
  "key27": "2wfiShGpT6WbZTeipdVRywK1gfvqcTKg2pvu1rXo4oJDDKc9iNgRepR2b6sEsJvZvrdbULLXaR4E8DwwQcbpdSrK",
  "key28": "4msNR73R7tTwDSYcoiHKAsydgJjXpS34QHtX5gFMXcoizUC9thNQNQVNLb6o8yacYkfqE9mnvvTsnyqRmp212j5r",
  "key29": "4n7P2sE9vtpZBUMC27UgejNSQYMauCSinHr2jgh4xYnQkBkpLT8rA8ebEdk3t7NZyX4BqJZfdbzPrxtTunWqpq9c",
  "key30": "CyMGS8iZiDAxbaacSfnY5vo6mZDSdMSeRdwyir86tcm8t8DC3VN5L2jzAD3LcshjzF8DDq4aF98iWqJtjXAgW4R",
  "key31": "aPXyU2q1CdSU2LCRRBaar5hDXkBEXUszs6QND8VTm9P1Mv5A7BvGW3C1CCC5d8xywp1RjEXhU94i5pLJegGxJCE"
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
