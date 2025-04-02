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
    "64q4VCjg9Z12M26EaE3ViG7AE89zcgVLdvjPpohGvXRSkr4S78RWnykHjpiJt1jwPp1xogtZfGrSTm1R3s2iDLVs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "33cLP3zekAiFzHddWYQkPchJPQao9yqiGNueGq9WnWuueAfr35LHV593QbwtdSXuX9C1Zh1qSoN45rL8F78WgF1f",
  "key1": "2KCH5gPa9NXTGf56gy5coZiwNjrzDiLm5axZEbtveC9i3xkwYmJeVARkNqb7nB8FnSPEytaWEnryWYKgQtiAGKxE",
  "key2": "2P7M7XzUnMKYHZm5ug7QPaXrUBAw9B3PFmZrfmk8GdSq66A4GTNVjzkXsue4FiaFooz2tUVX6mBUQfoRCgHNUL6j",
  "key3": "2WDDykB12QKa25ZFT2JsnVsGkZWUKAKYFzVoXkK28izEnzxpEErUTK6ga9Mh3aa6rRZ3KoVrtUodQujZZTY7W5fM",
  "key4": "xSDAoNHWNmkyUsAo5H87uaVpGNTFZ8DWiFnQdyzP7DuyapENhg9wiJZ5MiHCmP5WQsYL4HSgk1mx2buGmQDaqzn",
  "key5": "4yBQJSsHH7qJqthJLHqJhcCdzGU4i6XqKnh4px8rnsXZWFDAj4PUnyHs6apVVLyuWodx6rC2NYFYxN5L6VhbhNUi",
  "key6": "41JcTWuVqay2xmP6FjzU667S1sLBwUWYWW4FMHmbhxhi1v8hKm8mnhJRQ1qHcdBGVCWfQhCNbhuyYNVT54rR2MFt",
  "key7": "4AHtCn2vJZWt5GrawcuqgWA9KmRtKapbJ5P1Uyg1DAa7ATtRc4RFYjpuF2jEqYvCqtL1tLRbYVeSvPRERjgSMtJh",
  "key8": "55E4siTjxU1kVhPniY9LiSLzUdr8R5DUvS2B7zYPzK6batHpWRHctY9jg9fdYhc6W335xARXz6B6GdcyYbo3pPPF",
  "key9": "553SvJdxqW9UE3Kq4ie6FzBxVJCu8w6AuWx2mNcU4ix3fNjSd8bkMmNP7qG883ffKUeZEjJNrjyoiGjxf8pSWcbV",
  "key10": "4xSS5EypvnBu73hazfiJnW14YUAAaaBBc9cuYL4jJz29q47e4WSwBWHfFNJbBvuJsjNt2ckHP42WmPJkB6LFqyV6",
  "key11": "21guQGW6LcCeiUPSQNaTdKGdZFrjrqA8C1RJtGzD78USLuuc3QVRfRhmQKYR8Hx5S6eLQJZAwRnQg55bBJMgJcku",
  "key12": "25vjrCDowruRoefr5qVvzCfn7jZTuefxF4Q6uLtkg7GShJryqt61GqHMFSz4MYVWuaQXDhZyG71CQqQAdM19VJ9h",
  "key13": "4EGryGxgTvX4y2hLfSbUMdzDJaJEfpg3hTJRWFeoZxhQTSiN8wism8TGBJYiMPP4fyKz3z5eZeyjujmGt2zT648o",
  "key14": "31EPyDgpghErxqBWNkn1nnh55Ec7ZJKvWTXmfEmFreWzZJXxVUfbqAMTKLtHUAdcKdkhJ6imDQkGSQsSAQeAL6fS",
  "key15": "4THdhveKKECa7sXw3gLk8C98jcz3efWxvakzsQSNZGWGz4zCh7DHntKsxCD72yKtMXjzrFiHZG4fLYqvbax9okvM",
  "key16": "4fUdBqGLkbTTuL8J34TFDgg2afAmkfjHuTRJ3BHvyffuPCmFJ3CEKgo6j3zL9D2fvKC6fz7y8WKG5a7FVtiCYqAy",
  "key17": "2s2kTQCuTPDSutgGwfN25ES5inHUQtHJv9Jv2n7Bpq1utyWxwwxkSrDA2ZLQXn2FXmHKfAoH1cggcbnBb4EXZ6Qq",
  "key18": "adGpF878sV8EgVn27VnzMX414Lv53Ny6bbATo5drFatXRB8MKxS8CEG3HDcpdHryWdcrYRj1E5qvHxfbY1FQxPe",
  "key19": "5Ryfe9r2E6QknQdantkZjtDNJ8J4hfbbSMTmokFB39h6aHamV99iPQTnfTKBEewBnJPd9V2mYLnZWmA1XCtjHnPN",
  "key20": "4zrP3RquD1bjgJvFMQefxCEskCXehLFzqvAfFxnKCnXATcizBmt4d83RKxUBhsdKByECtG6Lj4CUXNzSFesJHHpt",
  "key21": "3pSewWbp8MK2r11kxLZXPPEPT2TfeDVYQNBGvLitPczPBjrgZEga2fdG2TddybJZN3P3DSKjVv2VChpfVgwcgsVX",
  "key22": "3b1LErajPRKa14DNjGRfC2KdoQiEBFvzhaHm99nqxWebZa6J1CEjqbg67CZ3VWLx8uqLmpT5PkmXp7dzXKw4UnPc",
  "key23": "5vmtYdtKdgnF2Jb9r1XGuVfA274AkHFU8A23Z4GxnRGU8DdFwMEFGvxy3ui6Cdpj2ZtCirKF4gDugTaPSUXb7Rp9",
  "key24": "3qfAYyjrDiHkQmJ9VUbF9n964zfji1YL3t9yrvWvy4iYyo8NHQgKVpdRABanUAziZicj23Ch9B5AFjsFFVPmSrbb",
  "key25": "4LMnPF8wiRgw3EvuZ5gcUDCQ4Lj6uVdHMiHknk2ScmMphBTF2RYpS6kBAcTvYJj7pB6g5gBHhEwHFaShryPSttNB",
  "key26": "3MD4J9VYVisTNnppXnvHqYgkdj5MDuUgg9kx6pcwS2irUZWfPibJiYwertpNzCQe1cdhrqXTqQRN9dY1qeQVvG6E",
  "key27": "5U4WAAYSNzXUGKM8aU3CaCt6MR2eEScEJwqFWjnYyKXnUQEr8wdN5iMXFzEuRBuiqjTaQ8Z75UXLRwmXBjgEBnCq",
  "key28": "5hoE6f3aYnCtfo2p2HRFyyktPkF8L7mQKBrSWpiqGwtYudktmvY1BNYHARozHsURoL3cCgUa2D4QQSx8E6yUUXBd",
  "key29": "7Jjoy5D9CxkrKQ7Xaj3R3eNYsWNBTMbU2VF9PTCiQDrcNcQNCTZ1CfL1Uro6yzfYk5TC9JQfvcyeSbXySUUhDTP",
  "key30": "2FYHzJ4B6MYDnEC9WkUMiQApgHL1cs7b9QeRc4cNV7vvYMnY4cR6LeogyRio4mwt3QJq3EFftmiydYjMuKis8WCz",
  "key31": "2hnCEqvtEAWmV6CMQsTRxB9i7KoGxZSHcQHz35hfpuRQYF7xJSYaANnetnHoRuHwqeAmzCiZjb1SLj2So9Mgj1w7"
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
