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
    "3ocEivFAo25GbX1wn3eGz3mWvQZ7sMSAbB5ArDErWmb9RACLJScKV77oZhPm6qrBfH8xY34Q5NsCbgrSr4ssw4Lb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2a2JgcwVDLeBJZbnjxWPomH6HmR4DSvnsY1Uv3jWto4kWKZiNYPomJxKquJHSnV5uZFFKYv33YxtvcKFDskG2qJZ",
  "key1": "3Ujk3mefddNJ1mHFgASer3XrxtEKPg617vV673NGX2sW13UYYNYTrhxWxwQ6M8H8E3yGYxvW1AaAbSHbq9h3SDYA",
  "key2": "24uUbYuDhMe1RnHsKxvkh7EpXo5eoNn5VwXjR8Pzx1vGzcDc6NqUhnffvjSD4EUpzt5xyRpaZMfiK41z4EzmXUfn",
  "key3": "5F7Jt2G2MJdNC6tgJ57fJR7A63iDCBdEemN34fu7F7LEaM3HD9h5k3mDwSShuMJVAjbACfDVMSC4QUABpQAFchQn",
  "key4": "3ymdidAikf5uYfBGAptVA5DUr4vxWY7D7ySNn8iVQyDREng5UDqUJZ4NnFocvZPF3DYJCDrrKFxSLzZmj6qpHYPj",
  "key5": "2VYHtbDG3ezBnRNkyeS3XUKZDPib7ypNBsFufykBQdzgrrck4k2fxtCM2vaHETPcwCSXvwSzth1qWuxCBwYvZ1HX",
  "key6": "PtwujEV1shHYEqKXYjSRXPJxToDquBij4JtRyBjumqKB5spEwmyAYH48yLdq37Ntz53wvwyPggbd9wodcU174Hv",
  "key7": "4mQVQqFSZcBUCMbiJEQDPGthh9WY5vYDYsxqGWeAsGiPcHu7uEmA4zaC5pBXWLokNVtjx6p5qRdnKJQS5QGjvuM9",
  "key8": "4vvbdU2Sb5Y6wMxgn1JUrZwVaANqm57Cr7S632wQxthnqxS8Yh6L3EXH8cGUKMBHZbt38fMJJJ3F6MtzRD1aFveT",
  "key9": "63t564HcDtngPhVMx79z39MorT5yY48i6MwckK6dMFJs8dS1zLJsbRpjSZy8zX2iLzvPABH8KM4e3c3sQ1XGJ8oy",
  "key10": "37YBWcqJxFiyoXSkZAkxDzT5KZYikTH3bwfYabiPUD6SoDTigqh8gHxxwW6qRA9q8FihG33setkFjwqdEQFWyeP1",
  "key11": "27sQTKVkxfw2sJh6BV9P8Ltfjs7yTFpRvoxEYjFmXEkrYpAC1JifkQw1BNF9y1T23owRww972yZnkaxDQHUpmHzG",
  "key12": "3yjmsMUojM3frjhzHre1uakPQkWHLv6MNWpNn4uBM5KMpGvbZFLNzxQyatRrh4dHzCSKikkPaQ7exH9X1DFauX7G",
  "key13": "5nhPiAAauDjyh3Zo7A8tbHK9kt6kpbBZUNcgaqXhz46wnXZ72p3TRwM8vqYbjv188xe6hyHKKtVrCkAcvXJkEqQq",
  "key14": "4X9WrwbXhZ2ih3TQhd41TNpS6ZPwvFBx1vp6Y6sgvtrXBASyo7rGDHuo8K9sWTUHpEwNM8vBZE8YN1cHdYsWEMdU",
  "key15": "3gRzCtuWrLypi8VvMUQA4EjmxpQxgrJ8Ygjv5wZrdHEwYoBHaWE27kT19Azvfc4xsDURpcXJpVryU4LjkrLpXh3V",
  "key16": "3f8ky15K49Gj7wnkby6VdBhBQLxYBjTa8NoRCaJ445DxsVTXv1P5qw223r51qcrnXD3Tu4rVKmojNLGTs2EQKmZh",
  "key17": "4d7afX2BXS385Nfx7NLErkKGBuZFQxwKS35nJCqYteCMb5dwQPiKLRD3r73vTtPi6A9EQES1j8ysCNbBMwDjXu46",
  "key18": "2t1PysUeuq6VnkCdar4iGvpdzgnuCpTjy7tH4TvRyoiC6d6sbrJBoSsNkyoG6BpVH9FMZrnvGABEuFKJYpsumrET",
  "key19": "4aYQpsTDv8n29pK9aS8Nm7fkHGk6H4iTJJk3z3wJt3482gQMW63VqVyi2eVNuFTzJMScGoBZ5nwXoR6yKSBLMkie",
  "key20": "2nAGPN2TMsPrn5ZuMqBje9yUkoZ3KersoUbtEFa12LYFuyWuuUKXjo6JpTJh3VTB5wPpqu5Fpu2ZZ6KwcCm3EJw4",
  "key21": "YZEyfeWmu3xDDbHNMjjKqZyPvQURtKeATn1YDBTtAas2FBF3DGDdj8kBZZ6ooTpg84jBJRh8YPdQNr1WtXdLvuM",
  "key22": "5vQGgKCHTpgcq96MikRD5cThcGhPj6sSjxrTX6fRxStxVQ4JYQmBk8ud3DGTzbgW2aErUcxWGqmm6wDaJiNLDmsP",
  "key23": "4GyMAxvsKrVbxt5t7LYqEuR7vBeEH3nEJYmJVfAB91ie7DR17kyhEGMfJPA7vtqRdeccyvyMgE4hAySXKb3FhoNo",
  "key24": "5Q5aWRn67bJru7a2zo8sSCurPniaTqddUdhWvbz9vpL8WxXUD9YbykM6S1T7bmmGpvtnhj5NAusia4td1H76EqeF",
  "key25": "4Tjs6nMJwyvcKpiXcFbFz9aMm1rejhMDa3aGmRCBN5DvSXB3xgMZ2XnWcSCAE6hBd9teiJz3utzop25BJMPAQGkz",
  "key26": "4qFQXGLwPUsBFBs9mK6Sw6yVDMVJZu9zWPC5qmBYe8rhcHsirf3GVFi3C6G8ca4gBXVMdQiK2guW8j5umZ3TeUZF",
  "key27": "R4EZ3fsHitMy1h6XhNTSDAbzPra2t3tdk28Cpmgw8kyUQpv3zCJdu7w4orZpEtboPks3vSCkXCV4TzT3oqpmgvr",
  "key28": "aG6xQshcrWULVe4W5mBQC7mvpbhhwx5ZN4RdN68LAdLzuGjPtxbf1iV7X2xdUpv8aUoJDjpgkb9sT7Mv9JYsDDA",
  "key29": "4TKDwqWgvyBSYX9W2wouMeynMQqniXvHxZGXrjVa4i2YtAwHyMGkn1RACa8kgwmMTM2XjKYrpYHZKyq3h2WQhKW4"
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
