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
    "urAFNiiSH2DUzzKS5qWLDKU7FoggRTuv6A2KsRGY6Y88rA2duib5yepsjHLmRUBu9FxXK32MrRBnfiqLxw7d9gW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "EiTNj3mKm6Si5idAciSmKmVcLXqf1gY9ywDCQCL8SxQviTueXr9GhkdBbPFtMhz6NjU8ce8g22kau3cgRYnKF9s",
  "key1": "2qvDS2LPhnAR5qsD5XNSPJ5ziFg7DJBL7NK6Bzfb9AWCK8XRT5dUEcqYw9BRFaxBN6mwBrTX9tD5ukbQbz1uSthE",
  "key2": "5cYgLGPHAU4A99jQRURadtMNpNaMBYxuVLevT8g7M6fWGNXaFPHY8yxHRa8Gpz6KAqPumLCnYsLkhsudpGUwn2pS",
  "key3": "3FPMFvYuLjR2LoX5D4jXXuRF8Z4r6S7SJJixocYHFUvMBpEsumCuT6x8oUFWXuTCgQy74GJ3k94w9qcvKoqtzCyH",
  "key4": "5nvBXR1nkcEUJaqCgNnBCav5oV3dvWJ3rvvmMLGGjsUTzDUUgMwEafQijiBXcrh71BhwaftTCNpzkwpDmB9xKGKA",
  "key5": "65LAqC3UknepLjqcaVoYyVUpus6eZcyKVZCkZjfLuv1JrTf4FVfAGKZALq4sJTsHeLspyfKPr25NbkkaDmisnRTN",
  "key6": "61dq9ghDtdauHGvem7nRdQ49xhF9V7sgVpevz4SE5KtqWS72o9GiLwGvk1EL6p3rQz4TuPkLHSDMpZQrunc3mjSc",
  "key7": "2s5wNtpHTfnPZEZEZNT2FHivKDwohc3dZCumhEkBSQ2ntwUFsM342RmP4c66KUnykDfHMkMbNTSxvgC77PNQUs9e",
  "key8": "5ZsdpWrU3izZzJfiKxmo8Q7sdySAcMwmHdS8PJxA7J8Y4aRtEAgbG9NxMp8GhZ3H2QkMUXv1sZYH7DzGQJyXu4ov",
  "key9": "4tCyade7LpmXDQN4eVeFrtpAb4i1MHBB7iVZ6XQbuuCjwyJhbHwwBK98cTooe37NaD7CqwhfCuWHJNU7xjbd4abM",
  "key10": "4Af35xnTNmoPsViz46Ev7ENvv4Lfbebht9BJuGBBpzrtt4WynP9ySoztooJjHEMHXj7Rvn4YUEmwN1XDXu58wuDq",
  "key11": "5vgkGoFk2tXPhaAETam8qaSMvvZM3fZYdHerMcaepoWRL77vaoMBNUbhJ8ehg2qw6wNNLHgNroWDbxqaM9ipPCRd",
  "key12": "3fcorURPio55fAYF5v6JHkgmLsAhqCkU8hKuE15XSyZnoNR8CFNvLiRH3CkYVhRCxt241Bmhhv6j5Qnbc795ZFgo",
  "key13": "TSjHkFKHqYhEBGRX5G6mHH4hanywuA399vMt27W11sVVJVSRuQNDp1oC7apXpSv2HJNnWFgFNQenhPfG9n5uhFa",
  "key14": "RoGpFr9xMwevh9FRb8n1AALGprYqPQjwxFw2D7V3f2bimCWjG2TfnphAyvhx9C1KgvCCs9TptZnRa3uYDQUGC4R",
  "key15": "CrjVoASHN5UcPPrQYULQ64dnhiMcnVPuXRL25DxqiuozodpqG1SakuHNa5CHrhGFyyXJToh75z7wduTf2fXLHLt",
  "key16": "cNPNV6KMTuwkaGkqnNKBdixF4g3yDDUQLvcQutzWcsutibFHS2TfYcRsXjZaETDz4J6ayEMyFD61ypRm2kTtvu3",
  "key17": "R3fqxcsN6e42cjBAwoPuVxTCGiQeUXqcyt87UcB9ufaB813sVoWbj35WeWCo5xrHmhKVT2Jjjk6va1NbbcjF4DR",
  "key18": "dVVZWCXsArZAzh2HYqbcsG7a3x6Wk5pfHeGEXry6sYSs24CYMQSYFfgPo9HuG5h3bvgF2NsXzU7KA9DDYANqW21",
  "key19": "58vM2N1ukAs2a2yqq4soitQnGXetwEr4CJBr73UFtZFs92AZdqeVyEjFZk8DhCiDNvCMYX5XS6jkK7UJRqxZPejo",
  "key20": "SHBowup74iaq7UerpEe6eCc8HYPPfQncAXZvXWyMeabD4swQA7bwanSod6FcnDitJBr4hWTHVPESs49eyz3GUWm",
  "key21": "43N4chyG4bvL43PR3qdKwpr7qqo8YN2T9BSvtfYhMRtRcuuXPgjGgaxYZqzY8Z3ksVdQ91VUqFh5CZ27dfmzFSsF",
  "key22": "61WsXkx3ieKHLjuFFNsmBsBRgswFyTxFuMx95UxaKT5vkDTHqEgs8SsNr1REYqQxkiAyF6MJyfS7UNtGcCGtNzTT",
  "key23": "4HaMEtoemPmQsK8JBTKyjxvEFJ3gLxWKP1KVgPrTWAmyUcUJyTraS74KRfjny9fMJwyVn8XnA9HKwPiR3qjWbUYC",
  "key24": "35CNG28K9XkMtr1aX7xUYD4vi2X2ncc9JiDJbSFyqeiskkW7qXLSLxPbHPB9AivywciSdWwuVTeEek2xMSYxkoqt",
  "key25": "4gV4eTogp2A4KptidbWzMnbjRx16dsBzA82dxy9LJanN25VP1yD48rNJLEb9nziGoCgxdLPhdpiavo1KPHrHixdn"
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
