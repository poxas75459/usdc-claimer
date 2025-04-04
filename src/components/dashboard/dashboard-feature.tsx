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
    "2vGPckZTkAjjAhXnPccqbA3C1HtAW6zRfY5cGT1A9bkN1E7xNAFzTADLvtBtQgFv5H99K8ZENjYxSD5aJVgf9BXu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2o7kZ9xvLvHnzJKF6RTmH81PJS1nCZRVejCEMD3AGM8LFL7JNtST7DHyYt2bJKCFutXJXYPKijDncUkMipL1Vihi",
  "key1": "PibhVMZ8UtrU7caeFvcpnmq7vLeQAQhEy6n6t9rfevYUFHHUe1uDnyRUSNSk9Qh94hxirCQdryDYx42D2HRyp2m",
  "key2": "2CgvVRBPSMHfDvLedmsMBLYuHxLyU7ehzJMHaZtrKCUstREZUhtEEWKHN44ggad3skFisRu4HNsJrsXAjWMmQ55q",
  "key3": "2mQrstgYhEgWRD1W6YgCgbVkMUouu5Ng4KE82TsS8uaUtWp8eoDE83Bjx3EMqNdazaHrMUECTJj8rKREvHD7XPT1",
  "key4": "BzUYTpiWvKq1rdf6bkToDUdCiNF6Xozii6LxSPSpDdMWm7MUPVnbADPheF7NrdA2ZvTP4xnEp83EHDBw4Z5MzZw",
  "key5": "3A3kXsy2EQmPfptTCTZaVF4vrhZ4gMXEq8zKy2ttZTT1adRfkDYpsCRgSwasnDvA7AbGxtFZtDP21F82Kab7Fa5U",
  "key6": "4UrRKVmhuTGgXMLyqBxghwL2AucA7LUMNNAL5v3UWEydLU4hdLQiijxJa2GNdzjuqwDaR8C5PRoihXzTYu8Gkv4w",
  "key7": "4CZXdCaPYyBNVNnJUqVc634t8nbfPSkPh1jx71M6KBUJsq2uD7b87bgj4nD3qXbmZ1ATtyZjEFFwp1nKFEdGjq6S",
  "key8": "5CqnKHXGeXHFRTb4pRRhwJWtJLANKnZ7NNjyLCCuUZBA7MTZge1DUxZicCQpwwwmeDtonmc2qLfi1oQCXkwA3UV7",
  "key9": "4j3H7MTC6wNCEH3ZCtUDsprdS5UdsSZR1z1Nxeb7uvJtC4A4qkh63oky3m6GpJE3kQjAAUrQ4w7NxigKaUhTY1gA",
  "key10": "26F63Tp71woh2yZV4UgY5DZ13uyY7nyPRELJS7k5y2WWSnjETzxu7TrXn4WPpnKzioWkVS6dPG7y9djvWc2ZwNjs",
  "key11": "3DYcUMXz1kEPaKXDzQ3RB2FdT5BikTCirzJydXu95FFn6q649wbGJCCuD7aWryUbtkeGdCr1NWkBBLtHuWYaDYMR",
  "key12": "4uWrwhJZESibafAHA4HdSKZdmhk7uLCdPZHrXWyX9RYgvPid9TrtyXBUbv7o2pVNk7C5RSWQMo3pLdxqTazvJNNf",
  "key13": "DdDMkedPBWhFbp2tGPwvDhDenm6gvjvo1u1LmEtfyYTo2vs5JS3WmJchhZx2Q7M6tQbZDim7EGuB9DAQ7njgFcJ",
  "key14": "5f5VZKzB9StuuQ6MLreMQ4qQw3Nf7gKLr6rePUAfRUB7SSN57GYEu94je41Ad9bJWBAkNpC2EE4arSoR4GTKzmBf",
  "key15": "BWGHrPrbGYtkFaZqTSTmDhZ3yPL6jpxUXyjtDfUZihtio5DvMGg7AVRV6NSTZYPqas2LS7a12sCR2iuDPzts2EL",
  "key16": "4dvgLhiXc61BQx3oh9QdqUrfKA5ZiJwunUEm42Q6z6i67NxQu2jPmBBqcx7qbe7eyE3yd8U6Pb71vwSnwmiZ1ke4",
  "key17": "2PWoQTaHGdRHvVE9KHkDjnjWTKo4rkTeW27LLik3oqe5vfXVY9qKrJG5yqctm91DW8uv47yTWXywpeFbwCCRKDLT",
  "key18": "4perivXbhQfadFuhwzXsBib8Yu4mZ2687sNDvzxvFpTRTohyf9ehXsxB4kJo8SvRJTpBJuBNwa5nJBW4KhgJC8vu",
  "key19": "gZJCRxn7oje7zFyhTGmxHPucGx6NWxCca5PSHWkmaVsQ1j64bNiMpADyirBo4tPL9oKP8VLppzJAGLmXWcTd8cp",
  "key20": "3a9UYXUMpvZHk9BzW6eEEZzDj6WrRjcZjMaDkq3QMPnNGWZKqmQS5Zm5qptGZccxNoCPw5Px1fr2bQco2fAKM2Ju",
  "key21": "EGGx18hcRjogXRzxCJAHSmeWH9sgo4BR4PHrH3sDdQnLaYBe9GG8iv3xaGyB1zQAFKnJbEN2FiJTprFY6e7qdzi",
  "key22": "H7UTyfYLpQQRBumvMfz1ya1gD9F3fA6VxT7rnjoHkABcbN27ebKWW4Av4ytz2S8nJQmrDktuSHNxi1LKLqRBVjs",
  "key23": "3SF8JmTYQy4XtLRdQgEq2RovyNf6AVeZPtDTigkzPpnYAHngxw82sU67h96VyPoqxYSZpkB6wjKqEi5Q5SJsVGHA",
  "key24": "4XTfc1d5Fy14iZMkh5X6XPuJyMepbNmfnbYWRwdkeg5updUA4vue5SJ9259KhAScc7Z7i4UavUPaKktnaTxfDmM3",
  "key25": "56qvyvhaqocxLvaftxUE4q8WLegDxuurUD1628TJKgRqXeb1Jg8L3oftX71D58xoQyGSeCJkjz25oCX9NAEa1urj",
  "key26": "3ZycKjSnbhd8rTHqf24GrqQZQHHV9mCCimHP9xfAeRX6WZoQkXWgco8eWJmLvbooxSEhE4EPFg3Rq6oCBGAsPVmA",
  "key27": "5mNXDyRNXDYzD3E9ffjDVMY9acvgatijfCvSVhD15xRxiZeZLiTNXha4psKFHsoBcKckMH3Z4iRXHiSnCyAcyG8z",
  "key28": "44wXPF7FKacTA22mnRaPQJUwWiYN6FWv9XDCX8CwP3UcaYaB9hf8LvyWMMJ5fXxcBEXJmFzTUmJu7JhssFiPxbeg",
  "key29": "3T4WqayYviARbZCsBs8DcTauvqQ6VMd6KbonLLKfxKuLUkyEZWLrQmnRADDP4EK3ZWTJ1RydzML2sD9qZtamPMbo",
  "key30": "2FHJCA89fL8uQ3rQeYHP3MvvxV4wJLeM9bBi7bxxuWg7up9cbejxCqTEr5Z3vXKEA7C75beid7HrrvuviPh4CH3U",
  "key31": "jPw1U2DyQdJ6dm2umPVfVc49ZGZxstCx5rASiZuugHAS4dURN7GQdv7dFan8hCmZxfhiqUkj8rxZXP4tviKbx53"
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
