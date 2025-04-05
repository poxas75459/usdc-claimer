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
    "2GssqPD5ZXMU5JqFVEo1mQfFyCWLQsoXyuyDWcnvEVTkSXbtxZwua7kwiFRH9BgThNrDz8dmQZNMDSVtWKgvkxkL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3MyV7J9iUBPmARSqADEkrmNVuDZ88TSpwvdf5JEW28YL2iPchWmZFVuPbCLpM6FgQgF7DCAj8UZYzNiQMpan3EZC",
  "key1": "54SGaYa99DsfEdUCeZJeE2n5KwfkGuV7EBxqRfyVvQUvNohrRqmuaoWqUELdBMEKu7TtWAAVmgS1dny7yMowvCx",
  "key2": "2bUXei6z8Y5xRjAgFjs8f4MaKg3TVZ3fv4FYx6QpDoJYqzxw8sSBY4eUTVxrSVV5p2rmQ1cL46CovvTXxjHgeSVJ",
  "key3": "2LCz2arRo32eE36tMpuRAa47nZJAcmga25v8HMitC39KqgoVWpgrhBMtJadhqtdh95sHxfsRidwk5HeMkGZToGi4",
  "key4": "Tjx9D4q5kBrNHSXacLWkcsx8sa4b7CEvVdw6HMsj7tCV8yaN3AFkumjauVJEG5Kp2JFVTdrCswoM3SGdCzR5bWz",
  "key5": "4RXxUtgfW1DjdGNgU3d7jYXTPLCcJDdjnWTepKm1vTZUNPviwuA33Po4Rz7zTaGXoWoXf8rpsFhDwHSbveAHJm3C",
  "key6": "3C6PPLZ7zbXEwoAQMY5gLHaQRs5BFVhcKFJ8E54NbAvTA3s4utKncjdWz18q8YJHnhndMiagGBShYvy3gBjtdT69",
  "key7": "4xFCsebVfJNpzr298cXHvghmMbyzCS8aDLU2SMZcbiv7qUdQ6denUZEyTwjmiBBbsTrspsmLyRtRn35dCEuoAGHk",
  "key8": "4R3Gq3UzyqfWkMKm5wtD82bzYZovWGwhi2Xd3eLAzFf7UnH11uXFi9jbARAvVXnpD2mkT5M4pw6SnGWachAJnPYZ",
  "key9": "5Mqtf9MPPosGeXPQFTudL77i2vidHPLU37UKFx3zSrwYm1WoCRrUrPGbKbhkNmi7k7V6wWy3Qza5uSQq7P5nHnWG",
  "key10": "L7g5y2zrnwaTrctFHi8FwXresREwCLBBV1sSmAztzCQjr79FLQLDfSZc4CRXwyJmiXwaKUvm1iGnPNPJnL8Sfka",
  "key11": "29Q9s6i4VJwASZrCe8MpBD2hLH4xKh9JKsdmHKcxQcRyC3FbQ6Qmu6WZyYbTtSD3RV7szmYgn2BTLoG8SxeMdu2R",
  "key12": "3MWbN7raV5BgzkvQvvJscw6xw3JvWXt1eeYEBku1zGG4xNzr9nmaRJ5wQ5ysoY4q2SsSSpFvsacGhARv42YeoJq1",
  "key13": "4gk4tkS6WqdtnfMvxz5VyqG5M69QJqpNq2QUbEwWW821a1ge1tnT23by6AMPqRwkAiVNPjCDHisdN6TyebbVhcr6",
  "key14": "5mqmAZpTUGamzTdcQnf31mVet75qFguw2mgBoyGVb85U4Hx1JQiLp8spkk4rWG3648mbG3Ty5t2zb7uCbFayJFbn",
  "key15": "5thUteUUerZYBQvsMYur3EbgaAVhss9amMh9Kh7Wd4GdWsfZhjEUXjaeP5hFExQCYSKLjjR4ZxfBaAjTvhqKRrEm",
  "key16": "2TSNFtvFdQANrpVCchUtZUvgpe5fJwCpSfLiLM5wEYAccanRaw8yxqJbN8ZVTrWRvrabjQv7qRs2WckwpKT7A9LZ",
  "key17": "24ud2skWhbfFwK2SCd6KaYxtoqgv65oVUn4ovP6ZD2FNp8HV6CyrMkBx5uaHfbuqwwbFfcNseVXncYhakx6odXWG",
  "key18": "2chE9cy5Eh9CLUPmHGzJPjysFub251oSk9e1fcTQn6Vi6La5uNd3uPSpTtRG3LuNu28cJFxcY2Ad1yvdM33K3XRU",
  "key19": "2wDNX7Y2tj19K5Z2jt5rtbZ4efxPwZdPK2TxhXZj8YEZjMtb3oeGnT7GxA8qj12ytPrkCn8c1urbYTCZprWXrSAi",
  "key20": "4kUvfKZGJz6WGTkLuVrDsfchB9E7Z8HszAKzV5iegWJKWGpuBjydumPE53LX6jMT8e3Fer79pHZFBSX1VovRPwaR",
  "key21": "2i7U6zLb1DNUHUd4dtCoKgKo4mkZn5bwrkKrdA9pn7cmDyQ2WVD7uFFT9QZzzEQJXK3QLDwBWbMSCRcBSDnG9Lbn",
  "key22": "3X9U7AmQGEZf3ZGhZS8Z2om6dV7fuSD59BmDnCs2rHoaBy9a5N2BQ59HYQ9Tvty7VNshJ7TK1RgSjHUbg4iwyE5H",
  "key23": "3fgobcsg3cjFJbjtSdWb3Ergq3JSQC8hjuJneBUi6ZS458surG2M5xh4TAj9aEn5BMK9UEswfJa6TJGkyYbDWUJe",
  "key24": "65ckAv17pYWayGay35LP4UFk16EYpCiP7t9RK4jhAEZqMXUH7F5kncX4G1AFEzmmwZzucqnxrV5FuAQbraKvRJpc"
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
