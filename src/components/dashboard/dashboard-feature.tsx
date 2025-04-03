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
    "3EhN5s9Tvbp5Kqk6a5jNvNd4tyhwLGfx7K14JserPZo4uokBkzdD5ZMc5HQr7c1Zv3Vfg3rAupa6Q5cH4xJeeE8g"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5dDdMG7XM9DcuuKDqwLGG3fcAFzR3Bxec8Gym3zEMiG837dfxxwmTou2aA1GjPX8QFN8XRYktVC1LFyGNw19wQ3P",
  "key1": "2BK5zbkNrUNYgevZa9PKZnEwse5UZ4eiVJf6iRq9WRHShmVu5qBTzmKkXgfamkG2qmcWw7WPghdYmBLDuvKaiP4E",
  "key2": "2TByVYqdgrCqmqn73sUXjXrncyvJHjT2ZeLKMFoFncyt8S3Bg6V5YvkPaqwSVUzRbQRo6LWaF7X3BD66HfBLHsHq",
  "key3": "2Jx6A6zw4Cfj31c89e6c3HHBLX3GRHiqpnVSBqBuWBtGngKGJykd9EKpLJJBxoyK6EDU1fNKD72BJMwvE81JvEH7",
  "key4": "4HffqFQHeDWcuoKfvFcasujZu7CRiiuRR8JFCE4z9fZLx4hFd8iirKKUM5YHQ31Faz3ugYCZ1zMtkm3C3Ee16UTG",
  "key5": "4TdC3yx7cfHdgaQXcTpFScguiYaYNBSsCsAG87Hq9CTpetAwt71fpAnEEAYhxJoYhwB99sci51zJHm7JLHyL8itE",
  "key6": "4q9oeGZsJQNuyBQ5Wu8kb81QmQGW36jKQnw8Xodias89LCL3QAQ5HrsXhxpVLVNSx7toBFjoqgeZW3yDtPJY6LFc",
  "key7": "58JwJ5Jsy6dMWc8BnzQWVLjzFHrWj87fJduH8s6ybaKDQgbkcFHsoUxhGswfYtf3jo3DfgUuSoHd222zLtZRDQHA",
  "key8": "4bVQqpVmsNWJfHoTBgoXXr9mGx9MsnokH6W94Gzzz7vPR7DnvwSgfkGH2ApMgWGWypgytaevBPnVAAwqVod53MvH",
  "key9": "4HhhtJW232SECn1WdnyQ1UiEfcQHtZRM1CR4a5ZmQEewKpr4ZE1K5gvDvecx5KCfDZNrzGLgdXkFUXEMnbZgZUUk",
  "key10": "5gUc4Ak9nsh9yBANsR62BPnbLbCbfqkZiswCbpbCVTHghEJbCmpqPHS6exiCo1yHsc4A2ixmkXkTMYprNDepb5Tw",
  "key11": "2d17jwgvYmXcenmRoxki16gNLeJavx1JV6q6fueWgGRtJbP97geM8NCthe9Rb8kYCBoxiGkGajFfkpUvx9EBjR3b",
  "key12": "5H4KrgvwwBbh5y3YSwmh7isfXH8vGT423fFhonzSMYUyF1RzCyeEQvWCYLnACkXYz4he3JCUvJCBUnLVAUE5XvDp",
  "key13": "4EnBTowV9FsLSgdu6ocVHXnGMZV7FFecUE2k3bogBowQLmSymmvxisDnnLvUuWYphLiU4t22h76Tqa5qNN9WiviK",
  "key14": "5DB2dr8iGfCKxijdUBuSxaS858dEDCHoYAzZhzXLyanngLf3r1ioPUNBMeN5XL2f2893M4spJXWMuXJQdQqbxEWz",
  "key15": "5tHFuVph1TfTu3ADULzwAD926oCk2yndXLnX8iceAqE7QLAYDYsheaUSg2yXA5rCL7WfNCi1jWpsVjmzHSPmc9tb",
  "key16": "8dy4enJt1PbDut55nnUUfMBW6r1CA81KAdEZRevnwQCENjeNibVhCC1xqoWeNHuQrLsqViRmRjUFwBUo9d4Z43c",
  "key17": "2RiinUqXBQG7BpU4bBGN7rmg9h6mLixfYVmpPTdLQnnyA1hjG2uMjHhr4u7u7SQU79rbhLHrxpNt8xaVq6Dh75W9",
  "key18": "2BqdzyewVoBePK4hz3VVJYJiAcJKS2HkBSiEocEYpBJmvHRKnCbuPM9LzH9NztzjBiiWxZFoGK7F18Ky62ahQhuy",
  "key19": "hXLwDVUQqrgwDH6HMqwMzMtrmbCH9u8FzX4VTC71mquWW9eevHzDP8PF8rbdyctDc8XY3EGAy6ueoDf1gpwhvVP",
  "key20": "2CXSwKbPTgavKDpYJpguJ64KZ72R8GNmJ6Gsh3EZfwFUxUTjTzUN1HFdaztcXPWRjdNyS6TWCAQGeRpvHih2fuab",
  "key21": "2B2yAuhDXHJxJVqVvbmsHeUEX5CRVKBzEiKNnfKb9PLQff5MaVWZR9HLY65XTov7rNq4cKSusvbjpxcsvsKGByLE",
  "key22": "39Ka65Cs1LiTj37fft3WZRAPxGbd2DoV9jhqJu9CKWSFKyDtDepAbB3fW38AZ1B2kNQNsxVTZuY9UhK6A9yyuZxF",
  "key23": "2JZH6i76pLh5Nt968NDQZP14yja7EhQkqrvuAQ3Gpvrg7igNSeQb6E4nFaZKdoar6UzmsmSGcYbBKKKaxg1ccnPL",
  "key24": "5rW59ao46RvVKMRRyJLHXGHxzv8RB8PSBzzzLGYrWjDD2zEweiw6ojPJzVuWEvRewRCKTduZyZUhC1zydo2hqQer",
  "key25": "erqtEis9JAKZuUb1tVBir571ofU3XWFJSyFkB6hcg4z76TQiqhsBmuPihYFWz9RVhtAH9VPzndvLby4inTyZgVk",
  "key26": "2cGDhKSY2WE29fHVT2bJSF3e7XAwkKurAN1vQLDkKM1mkjcUw2LjzXzvJ3xiX93WrWQkRFnXZJef1VbWR25RkMQ5",
  "key27": "2zCGuVQLzYo91t5ueLHwdcDn9vDM1cqYjJypprMFB6R6rFpc1yc2g4PGofuffPyuPzUoqnq9dnDXMcnQcEWTAi3L",
  "key28": "4xgQ6EeuzAo84B1fQ23bZpkhcHoTsRTG8rjCi5LpgPUTKFSWuyQ1o6DjodbiLdwrqS18rChtb77p4X639XNMwkRc",
  "key29": "3PYwmj1CPtNnVYEkSJSxVEgNwkZX9nv4ZbnxJKfb7k6Hih3cBa5jb7fKnEZ4Kk17GfdxKK8XEBuF3Die5teftdF3",
  "key30": "2M3q9vYA8cFKcgw5AqMsTJqxkRmFAFc6PoBkKVqLFMfEe9gP6NqmAy2R4XRQawjDpBKaNeE9GPJh4B9DNW2XbYJa",
  "key31": "28S24QqBgQSBBRxkkDrFSH4XCiMwp1MLFJUs7bkz11bGwKUQWeKaZYvMMcNn1B1VqhU6sqZANd35R1oFzuhBfTXm",
  "key32": "2ottw2wTQ9HDJtDTTcgi1NStkuvwTeixsZwdAfWU5yArpMxETMq6LMQa1RVJaspuxisGGgRAkd5vHBvXFMAYm3C1",
  "key33": "4mPQBJJNec1DRHt6dLG4bDvzD7yJAHaxVKJ3QPgzK22CpiMfMcZPooKQiQqv2bVByvUVKTPane1i1QBRzzy7QB2D",
  "key34": "u3hgV2pxMhMPkW9cw69H4XsGKuR8xEf2iaSorEZrneN7Qn3T1wHEpdkwEEff8U22wQXjxtz5Zm65ftTj2TJF1m8",
  "key35": "ZSbMkqCZNEchciP6mYeqjt3bDSJmqqM4AvzbqXj5sREddP41x214n9DQNTFjkx4eXCouD3aYKnL9oUs6vfE483m",
  "key36": "5WssSajfDrPHFsZLF9CF6CWTqAncS5JgW6yEqHbTeKKZUswrTBSxffguXkEWoWAzMcZGcjCVSXjyXuYMVP6FuQjJ",
  "key37": "RDsPANtCQkUvEkvf8pSY9utYdPRRs7V4kurdmeJysyjB3J3C7KaPXJt23R317jXugpoy8YJ4CWiGPx19aKmdxco",
  "key38": "47DhUoYyUGYPLmGXFUf7Lsv4ip5XpD22kJK71KgJ7SFPeCh16gd9Wj9UYB2VtVfrF1EAowBMoUymZS9tP4TbDVjg",
  "key39": "2yKvYSjt95R9CfScS5v7gdU44EGEYM1hPDAdUoYC6NkW9UchWJmGUaTvcDbmiAG56Z1zfJZwYd7wtcaoCRjWfji4",
  "key40": "3rC3kJHAuaQUY3iwZBBHsZFc8VsE3act8m1VdkXF6ChRG221t7pMr9fz8vmd6XU6KnTmx34wosFirBQ1rbfJCQ7p",
  "key41": "2HjxatiBYjz4rfrKRZWVooo3Xj1SoMZRk13ap3xvSR5A1T8Cqoj26U3pSUGdcTEoa9sKd7bUiQJnY3Cbw2Z8Hjjj",
  "key42": "3MYtK6GPKMRqUow339kgJ7njB6LiozgVRUg93JiPD19Nsx4fYRD5RdHbgJcvFQ7vBnZpLE6MhqwLtDnmLZnqLEhB",
  "key43": "4WArajn6VxsNX9QCAhFsqJrPW7AGHK8NRgdq1PAsLbv8GQwz51u3JUvbXqBXCPWo9d3mraeoY9AnMngmCCvqY9ma",
  "key44": "32VsMvjQML4dwBchFNJJCk51Dkz7o41L9XpVWKkC9oRPRquYdQwnsQdNQnGgnZ7WJmAtLvE9WSeH5t66xrjs9bhp"
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
