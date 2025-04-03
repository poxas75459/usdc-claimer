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
    "3agqmqDkkDkLHKfWZBuZfSYd9QV7YehCtctVkYF2x3gW1CoccDAhRP8sNT8ySxLKQceh2XyYq5orEGD9VgYwVZMm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Afef6r8rDNVZoEbe7hWwBVKrdUdcrmh9eaJUA7PP2wVkZz9ekpzTVQ7tqCysNgnrmvijs8R3K2yiQa3nHK8gssk",
  "key1": "G24UmTedx1bmdCHTA3PoBpuY7U4Qba1UJEgSFrzjRs8vuTWqET2WsT6PRQujDvxYVJf5RY8P3yUELBcpqfSXEnr",
  "key2": "3HyfobN6rhuEv7kavh5hRq8yd94WQ9cg6jrog7akH8uX3aaAx6SgtYraFDQMhFZVEEKG4bTL3y8bpzC5JtVqHDN7",
  "key3": "4Q7wwB3U1kPRHZfX9q2KUTqYxsy1as6KiLx3BWUsMJKSYyTjTdhfXarmh8oZzBGsC5T7WRA7qqka4Vs7wjqLYc3U",
  "key4": "2e6rM41Cw9vtNsy31YVSo3uCnhUJwxccZ3r3EyCeQsqTrhL5bW66h4TDPgCPh5cbsoxcB7yPP4BBvwrdaXpJw5LE",
  "key5": "3BHAt1VddwSTEpdhZQNN6mEuUNDGcN6T3WBKVAyBM8zmhk5byB5vf12opqnKUcLrhy56ATNXPFb66ppPRTy1imGA",
  "key6": "5kSf9fQk9ai55yZwSAmfexsczDQiYQKLUabC53vphJzExpWnYuVciS9khXbC9RSqvwxzGHCJE8N6A1wV94XJGMxq",
  "key7": "ZYt2f9rZmQKJm2aRhHQaeSpccuV4BpYZ9DSJU8dEkFXzK7GkPdHTxHh1ADBXRNdHc5RoYGWDLF3ib1uLY2sWyvh",
  "key8": "4B8NnZgvQ78xkHTQ2h52UvawzvYxEFu4jiSifQpSe7Mu1BBSgdtZcNZjEt6LCjJhKfaV2vwfDD1gGoUyDanqWwzC",
  "key9": "56H9mFNtDV3an784jt2voTmESTFzW1WyN4L9s9MHBafgU2ou5XZA6KJRxdQHM7NSBifMaPUpKSaowrQvrYxzpkqG",
  "key10": "33gTCpcBHdb7p5UdGyxbxQf32FAaPXFAFUqSLYRwomujvKkUuEr72qxskeZ1mkivw9uVhfC6sUHaBUNKSX6JEKHt",
  "key11": "3HvNydKEjrdEEtw65mAXSwiwP6yxe2xmdmB2Bh7gGBGSuaEATKM1SbLWsTrFxDeB532AyMBLau3vEMZXL7LL5yut",
  "key12": "4PY429MvdJuVwK1VGENDUMP1QoXDGHVBAPq2pKwhsxQNDGpgkt86fBSnYq5baP8vSTHpx4J5MBhnTwT5zASpjPyc",
  "key13": "5YBPwkryecPNAMkrsBfkap5VQkjPyU6wEHXDjudteUxQwLPSjjgtfmrJNgEapZtRkDFksCKV2otTZKnNWh2QA8E3",
  "key14": "3rqf4zPovYRu8MAT7Lvnqfw5ow3fxWzCRmjJNmLMZvV9dA7o9sMjCHGjgjrSt2Rh8E1KVqQBe2t4hx49tJb4hHgT",
  "key15": "Nc8MERMftuM2Weg8pTo69sTLB7uP1xKmgWaqYXz7iQzFxsdJos1LD4BpoxojWSFo6KumQ1Gy9Jcnw2WKtAgksGA",
  "key16": "5AZVPpKfWoqrkxBTjojjdA1BLm3ZrEGZwW4Qxe5S7Knf9MME2rpNRorybz6SpTShbaWp3y4aeF6JM9UmzBnJugPo",
  "key17": "4BpjUUaxKKDcm3pyi5Ri4zEf3deBacqkDiEEtwPVt7ycQqfzdiJvp2X9jCW82S1Z9QHU1muTSxMwpW3GppDfRiCW",
  "key18": "51RHKoarAaL1VYGUkcqVEHeWdzbKQtazX5r838aEUii8zCW52oGBrv8uQbT4fciEJkqe11MaCGeCCAMhHVMM2cwH",
  "key19": "3ejETczEyhzBmXik89XSDNsxJedsjJk3LWJc2jQyYkuDzP7jybs8rKFwo8JsKKnYFGcaavCgnFZw3PumD3xKN2ep",
  "key20": "4sbqCZo5xMmfBxaYyp6rPGD3f661Z1tLRezD3uRQkhzftrC2NiMckJEireA1xmSHbm1eBoRFZYZApZeQqtqQkKzv",
  "key21": "2HHB8rYjwPzQhpP6dYLq2T5vFvYTFcU77rsRurq1a9eR8gsz8k6j875PmvysHBnmyzsVx5xD3jbPyX6cgXy3LFFU",
  "key22": "5TJtptkVjXNwEw9xBKvxV7SVS8aR4FTC1hvx4J1ruL3MyAtH9emC4oFYnbBNA9YnRFJBD3Cm62Fx842dYDrEJ6R2",
  "key23": "3ZeDSnGonkDgku6RvNm3PzxsaS2stg4xPA5Da2WRKhoqx9QgKUct1cNmEgo28HEPF1sS4hrPy1Sip5aTAKcWUWvQ",
  "key24": "ukrb7F3QteSpg7VqrRJgMxXzEzB8qEUrziUWFaV3iZRwdteWeX6rSEPgmGiFcGbXKbb3i2qPj3rQ5gtxrdywy6s",
  "key25": "51R8aAkMEuQ7a3drabfRwNac5TQqyKkhqLzdaf44qHJKCsAPwudZoJYpR7CMXwjmi4SxmHw9p7TMLdoERLpTAJw4",
  "key26": "4cHuv3fANDmqfUYL3EGsJ4TCH4oVjjF1dGTu3pXFx8UCF9FUyg9A3U1NYXANuEwskSKEnUGpXy5oBEwmMxQdz1Vr",
  "key27": "5g2JWKfA4EAPbfHYpo4EuskZy7VkQ97uWKsjrHdtMeEBBkMrP1497jrxJZLRpXvxTJbazQJGFLS7XQawVaF1J7aK"
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
