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
    "5mWDwUY2SFwSq1zCCPsbewdztNeUkYZ3QRQdeMwheHUJfyPGDVHcXCQHDEDAvxtUw9FFpwBFpB7BQWsee8ZaabY5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3EsFV31hZhkz52QWyiedHn7Y52Gpu3VTJs6vdygQKNbeaSn31mBkjZVwuQA533aMiVcxsPMHsWNAsq576RiAfd6n",
  "key1": "2aC5JUaHm6y6DnGHksQFgpMXmP1nj2ujGvWE8SbmLtUNu337E6PQdNVGdQXKjdnzq4CJoR278U9rX7N2tetBjDRL",
  "key2": "2Ayzuu12SfNksJsdG36qqEd4YRqizsJf7He9BAybikbvJh1pesmc1QDuNHe6y1fg4ovb152C8F7qNj9jBTDCaQeF",
  "key3": "5hD3xbLaZheauqBSct4rAmDgpjeyUkDj4zzM1UwB2x47Yb6yDq9tdF1A3tP4w6pC7A8dVLvUZy9yBLDb4pDYrxi6",
  "key4": "3JWjHGxRMg2sod1zkBvgr6KvcN9z7nKRuv9Sa7suCLPvfjRkLifWUsdRUBwRQCUaujguCaRt9D19wBSHn4F4k7ch",
  "key5": "eqzEDY5Gm3PA4fCwJHzoHxgjYawvLygUJHTbtgCaxmV9vbifoGxG6BSwbGzbPbtUXtBnCz2krB86TmYDKjJb1DB",
  "key6": "4uHZbhZK57fuqbtUUaGeGCN9cUcYJADKipczPEmi825rZBzeTnnEvjQRBGWmKccq6D7kiXDDS3zJpRpYe2e7uhpb",
  "key7": "5PvkzaehU2nDKoT2a3XdPxYRLBPdLcBoY7efusj7W57K5CbqJZp98PBXmJAsbU589NcRunwTLNjYnB19yf2auAqa",
  "key8": "3Ehnbfnf943SqMsjgnQnWosRycWArW8xNnYujh1Sjq4mTqdEz6FW4AYKnRUshmfadehCLcdCbURiwNXq6U59q618",
  "key9": "4nLVGwKweQ3ki4EEyQj5nFZzQyw8RAtCxgZ8EeedbGxCxtMHLDPimr1qbFLsTNK4mehKhw3rQjnxTZsDdN4SvkPC",
  "key10": "39m2wRNqz9gLmEnTfQ4EZSZhiBuuKbc9PjZy95tv9MreUHy9trzGFtc6jpr118HkTuCgvYjUVPsiywksJpqtkdAr",
  "key11": "u7n4fef94NwwJqnJ45Li6wU8BQuZYp1sYFxtAquFWcFu69TkCfX97AAriN2BEoaxzTwjqxHwhQ8YZGU6TGyrYRA",
  "key12": "4o76SLTG5kufG9r3aPGbqnEeUPttoJreLvUBUMAfEyBMsLJeiVb39KiwcHcwkjCWjQy1pvWoF9843CMWeZUB7kY8",
  "key13": "yyhoyRMhZnCNwKSwEXrN5ZEGYHdQWZhRFaqZvwriHeN7JKbNNW4uXZfTPY6Q23M7QxWQheupraQCAVaPi9cLDk2",
  "key14": "4Pk58jWDwoNaw9dPEKCvjidSgKA2uiHQH88as6y66tUFnjRX5LFU1XxWgFVg5V5YTatVHRtkuxXeKBVwyQtZjFew",
  "key15": "4bQoLtYHL8fuxPBqaLh4PyoYEzrmuWjVdExRA5TLb6Qv5YXcnh6SL2mgJdpzoHGzWodPLVTta9dqsKaAbxYUiRJQ",
  "key16": "2v9mAFbBJy4xNQZSZPHgt76pqUxSePznPpkrnu6p3nb5gHXgWy3HCSkAEHDSPUn8CQUD865txsXAHZANjUAtjKAV",
  "key17": "4fgJVf4SofH86TftytPPXzjtX5Nn3Ddqgfy25TGcvcgTb5VcSMvdokq46rCDMPfD9RzAaMLFxrYAj34tFcfndXrK",
  "key18": "3XUYyyvtjQK6crb1eAG6Vo4cjCZxWWQ1BoL88qp5wFKvyYLCSveywBn7jP3Bji3FFe5LqCihBPVR7fBVb9MCbtmb",
  "key19": "45PB8URNNA818WZB2jsUkXJ3usYJZWDpHxSCkL7vMSMfDbHJjAGjK6zrc7Rp3PiE6Qs3htDVw3r7svWEhYePEL5h",
  "key20": "3gf9pbFDYWYeJoQsbhHoijfohZTfxaHqHoGyR8iK5KiB9QPzc5FjV4BM287eCYbTdEBZk5PpfHYPFHN9RfXakmhV",
  "key21": "2MLYKhMbdkDvn6Zp3XpNxRbpvriggEMmRA7i4qbofjPTmVnGudj7BgbL5CSU7P4ZVy8EunGFdAkyWSo3qEaDKZvb",
  "key22": "4Q7xMYmjkpAHQugHJcbfRjzgqPy6PuQbXVibxMTdjFogYS6hggR4JxvB6ofEv2knEC1aoZUsQg2v2QeUTf2mARqJ",
  "key23": "5c4yaX6dYcvun2QUmZovVth4p1BjL47n2EK1N88Qr1c9UEdLQnGQnYgfwRQWk7eqxkTKqmKHprC1scvdKKzK21yH",
  "key24": "3XLGzZ4U2LWpxotFkeUV2hgEasDfrh2Fhagr9qDoCGY1K1uCMj4TkZ9Gq2EALx41VXuzDQRWHfvaM7iBUJQkZeZK",
  "key25": "ApLANKQ3bVoG9CmuGp8pmWcTe3dqgCcm9dZC4ghbPvHy6G9iPHo2JzyCBGmZBW28rCALmRwfBWFBMZRkC4MNTQC",
  "key26": "2vY9Mp6QAUjK6s7WiXZS3U5mFQG6DoyYbqRSaWpztSo5pG6bGt3Z6pvD66XWL6DKsiLw2M3FAPafqpNsfVyfB8C4",
  "key27": "vwhr3VGGXMU2tUo43DxDox4wNxz5wqayNGmgx8j6Yx7FdhxxGDAtkWUHqB3WFYfMvHEMWVGQ7jo7ADJBM9MTNAd"
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
