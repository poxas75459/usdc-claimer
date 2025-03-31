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
    "zLkSFSXZqrEkiqdJqsczboeGBNzrBgHWt2scCkW4jirjXUDcwzh7f1GazLCsmsE116M6yn4FMzTMoMaotZxXpui"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "a8k9Q53ZbuBdnV9WyitnioycsNDkXT8pZxGdqhsQKDmuMBR4CWmg7A8fkVHP4NkEKdWdR8478DMnYxKeRHtZiym",
  "key1": "3E8rFcdG2YGQ9W9jq7ukz6ToUhWpSkECHxVpMpiVNBsiCWGb6Pe1AuRLvTYQ3hWskA45eayv7JKX3mRjsthPhwrr",
  "key2": "23h5bqSJd6zhodjdtfabi7cKcD4jpH8zH5GY8QgdcemzaEyBEX22SJrz7wJGyLQrwceNrfF8NKnmZuDj3LbPuMGY",
  "key3": "STaPWbJuqvGkyuLLyp1vGLYW5kgK9nX7ypV4XycJkFS4FkfQ4KXi93cpWhU5GJzvixhaTkzxLanmPebBMdEbcPN",
  "key4": "2UDZivVNQSP1MQLWwxyNbgzxTPAyCpuRX5X7x3Qwdn1LmNvWyih7ZBWGDSJD8UvBtdirejESDyqKHEkv5dH7Tg2C",
  "key5": "464BubQfwVwT9x8VVb3eb7rMECBMLaGuVQssHhSUrnx8jzMi35QaNpqGDJW1dyf253u5wCBvf3WBrXTEQwkvKYS8",
  "key6": "4Z1wFQAw6zF6uo6qnzsPZdLiwJNh75xDpMArZqD5m4uXy7L3d6FPj6Mz74qdcrgpkrSFZorNBG25kUCbRTy1pUxW",
  "key7": "62Lb7je6J7wzdrzcFJm9WJBpza1Q8rfvpoiRgaPpjwoPdRNTJ7SCu6ohmVz6Q3zjNHzBBzQ9VnYMrN59xn5iQNvN",
  "key8": "2Bv8hyGcm7VacVUjPFaLSoLGUFACcBjJP2y3JdHde4VPUU6ZndZTfao4LGX3q6MpQsprEtNxd2ScZFtYpYVXZjXs",
  "key9": "3MHvBPRLdnpWPb149xEXC32WvzJ5RKsWdBUuz7tzJUPQwcKxNDm1yJmqUnz35w3SRya6FsnXVPywEoeZYwbDpbP2",
  "key10": "2gPq91xh6MqffaxW5ea41Q9yrKXM31Q1SavRJKL9x27CQU7sosNsSRE3QBSGHGjpMgBdH9yZg8JCm6FkbNg8UrsX",
  "key11": "2zHEXsDgrG5UkwqaD2qJAHgtQkmN5Ei13BYdg87nrcVk7TH1D1paZcrv7hAbCBsT7833iwCyVFVrGgUEUQF9osBD",
  "key12": "4LWaojsRE3keCqwLjyRm3kkcUdzyxHduQ7vSxpHQVFotKscKxFbTgFHpQmqSKeV8SmLMEvtgwPxxkMxs2WqQ8LBj",
  "key13": "8H1pFYcDQoCS8eq6vsz4978dRH1nRwiZnh8zg8a3z6aAp6BvvUHpsAmsgFyXobGuiYPq1VmnChfXBityU47mj4Q",
  "key14": "5xaQbUJqmcgczP6Wz3jEyDKRZTjBMLQDHnCPsPfzk53RbWLHqtJvcQFRNJg3n8QCDa6kvtwwf2kidiTdknM7ZgoN",
  "key15": "3NVqYX8T24u3DQeJ1RCTp2ZSeSWRMS9aTa2tcpiegvGtxzma7ZPFRdb9Dc8JrDR9nYMek6ubqmPUXS9RKoXDRtT4",
  "key16": "3mVW2NqK4oazShn4fQtwuArCy7oTaRZwi6W6CbbcQMfeWWAQ7xE8QwKuSeZnX6cPUPZmLRb8Dfa8utjcMqzWck6k",
  "key17": "2f7bTjzpuAiTBz5heH9dWNScga6hjyE5QqScV3VHTURSXPSH6X6cDiKt1TRNMr7YNPXvsyqDaUtBUC13RnwSC4dS",
  "key18": "5jPU6dNSdKo8PcZvxSnuwvBNPkvwRjnMi8cxUGLkEVZ6CxURNkL4ge8ztJ3kVDoFikqdwAhZ4Y9vozzgvC5PWzAn",
  "key19": "3F1xs9WdbnHtstwE7Q4qBGeqve8wKCwsAa3NeWtEeFjUDKCr3E7r4P14nAmY22CWCBGtWAGtuyLgGcDRVF115Na7",
  "key20": "i6wEG6K6yavMUhgeyjiJxrJQEwsUY1i3MbgfD8gnchEVBZSqt9yb79MmxuAe71FFJjdXVV68o6k6p8VAZ1QdLV9",
  "key21": "3TuFaVU3JCVevqR86SJmFgxyaY5e7od1cVVaxXibR9jo6rgYRaQqQ7P3d8zctpR9DAAy7Tn2KsbYwegHQGTYkY1",
  "key22": "5eu7E5PmoRVMHXUmywcHApGoSAoC8ii96yMKvy4UFZE4pWMoWnp5uevSGhFpRTckeD1GPfGHC2kEKgb77t9DsSye",
  "key23": "5xWbSNjyNZRbtjQBo7LuxQ2BVq3dw3wKw1HFsbpi1Z4KHSUmxppkqWW3t3L9xZN6UK2ePGqA1YjWKQHAVXhwBccK",
  "key24": "4LNJFYd8cwSJokSNUAgZ2oTZcT9mSGjtt68PHtVrqj9HEnG721adb3GE7fX7LjWg45yjMyHH2DrTqmHNr6DYhx7W",
  "key25": "5iu87oPDnme1gggE19uF1hJCAr1q6u5DRS9D2dsd4esWCEs5whzUngczrSrpyZTaoLSHgGSuKdAikXMQv1nnTu99",
  "key26": "4U5AURuag2rEymyQXYvU2NNRaYkrJGyXcr47EFeKHGkG63SwJaaA73d14VFgVzpZ4DgA1neW5PaQiEYFf8M6jfY6",
  "key27": "4kUNVq2Y9ohr1qe5e5qx7gfu3MB578vQLrewLwiRpiZxFQNe462LedMHanPCHLFTPct6mmTAHwMAwxPUgr7b7sFk",
  "key28": "NmXYZjmdqo2DuAtU5maAVRUVRMHfifZGapdxYkqUgJy6ThYFj3mB5ZoNCPTSW2GfvhLTXdGjXYkxETa5dn2hBJ8",
  "key29": "AKUW9gCkKwZFH4r1qJapGnQPF4AiUvybp1MG4VTUS7RBGhCnpwbQVCyfdQNX6h9K4RtjNKj7stMkuYiwUa3kq3M",
  "key30": "2mttSEb4AvBtNFXR4eoNSKYTuEBEktyGpvw5tvhosPfuBmRByUU5CmcWinmCagYrh8ywy8MUAqTGigaR9MVMzDKk",
  "key31": "5zGySUsacUm6vZpBqGe2kfQCDxEhxghLU49KSXDQQ5e6jy6XNoijeBRQEim3yijpybGZoKaRcd6M5pNiirNZ48KH"
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
