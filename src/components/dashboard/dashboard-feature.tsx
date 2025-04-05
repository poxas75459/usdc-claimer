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
    "5pbHppyBz8peCBUQku2xMBEDmkRgWjZWr2aVKMMCioidKDVpU41WBFPWd5eocpo25UWotNfToWcVWB8qVmXz9Xwm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5knChyq29hsV9wZ8oJbiNhqTZzQaXzqDQb99oH7ZxidY46qsEPegQriG5fv2wHZnfyqhDZCP4cPQ6b7KPLoT1FgZ",
  "key1": "brCtJuYgH86b8mdVeWPibhFvhupNRgww2ETLajh6dqypkuaR6JQn4Gn3RBFffahKiUDssK8V2KJkRnb41cRgviY",
  "key2": "4tuba8TffMGXsJ8PcrZD81BfqdAoyMS2hhXQV99SXycyCTvgfCsiVgEoADBcMQvyQYZto1Eb47psu8iH1DC64JnS",
  "key3": "3gFXZha3itRSuw6Z6aZbxX8a5CipHxadUqXT48w7nS6TYceKjmgYtTQhZ9NxZ6QU2GeZ49LhaYurcm6nPpCtgPeB",
  "key4": "5jmaAmGnWcrfDmuMW4PzxiBT1J2LT1VrwQ3d9msNN3THDvxcxU91j6KfAQruBgbCyf1ePAGR6ZzH7n5jv134JpLv",
  "key5": "32Njz8GatzdTCWw4a938gFA7KSXEWe4ZegZrWdPtSfXLPqeZC3yTZVLzzg7vcmmr79u4H8fsjscSuDZqofbQfCtH",
  "key6": "4F3TjMHzLAJZNZn21zpwfZ7XpQKfNuSQXi6Biuvvev45sptadYoMRnUWmaZ1PGbjjrKvhAr2M4ALyytfpPFJxf1h",
  "key7": "31eNoSLj5Fd9YAdiMbeDKFu25qU9ufS7t7Ru5pDdfU3V7eu9WSmAAFrafzjCcJmMMJFV2PeFK1jKvsarb94e68ak",
  "key8": "4r9JRufCJYz22Mw2CpHs4BjVEuxmjzQk3hLN2eDQ3RYdEM3CSyJxgPpVnbJWoJntMLGVbXjByuK1TSd7EUnxz5c5",
  "key9": "5s9ofijGkf57ReciR2RNRTWqqUtcFkaVuWMukkcpga5Kan4FSy9YucsGZvyxE5iMfUSfiM9u53TBbPfeZ34Ancw5",
  "key10": "A3RYmuJBEZ5ikkNriBeRzKwFqpELshgvHMPTQdNJGmmNR7q4yf7t2hqfz1GU126MzaqknL88BdHEhQce8sdmjfP",
  "key11": "tvvggBr7vdNxPV3qjMayNoyMnsFGt7uRFvf12hfRU3Pt7GhEvMD3DUVpQTJ5M1X3E1QjTxpQXM5kykurxhEtsUf",
  "key12": "2za3GJy3HNHtrTPAA2w6tRPSvQDJLBMFaRkM9SMB6icoauikyXeggAWZgGRp8aRBEfXJCmH3TRVHWtHovhiZactk",
  "key13": "CPLKJfER2z1y6tiwNhuYxhaeMoPZBRGmEUww5EnCCgZb54fPx8CsjUAb1PcQuJSpi2iKmj9eHgC5Mg6TEycXuvG",
  "key14": "3tD7bmnjjhj43po8w7i57TZCs5MHu8dacEyeE632pQRayn6BUdX9FDveCuUR1cfZSKNQW23sipGNwuFcNBgKQn2K",
  "key15": "Emk4MZouBxWEaR2c5YkoENevHVneEzdAmBvpJE9qUREvhSWy7fivnxrR1mzGYSyQsii6YHK171KUDHhbwVSvtn5",
  "key16": "LfEs1wSqiyPUDwMgoJoSkPN2a9TLsC3WhRfgKUrK9ppy35nZtTYxC6wQPE7wKcBXtuPBkUYLEEzdNy9LKvRy5JN",
  "key17": "4v1KRsXhaSg6bb4ATFW6rQWbAKB53B74Gpb2uDqwhhKfrJS8y2fJ2PeCanXoLgjdqiau8zwRkWwrYZ3Aa63cCh6L",
  "key18": "61Y4M2aiGqVBKyMDJHvvyFd9ZqMbi8B9XJPqz8Mhcyr6cYrjRXTGA9dvwFa5Y37RSpgcJJHkqD1D66Lvdh3LL7pz",
  "key19": "4SJNLLfgK85DwSVjk3Dz9aumBv3ELAoHsoCq3Z5goNoUCVzzkjJQtqBvLfwc1HzEn3DaF2C1XpH8w9StFjLKEfYY",
  "key20": "2oCzQ3WxGCqMvsHwPBXHKA7NrkrW8911HbwMpT1jb6aEuxYfwea6JN1JPU9oHjQVZ85ybzsg56AAHXZAkQGW2qg6",
  "key21": "2qceSNx8hcPgS6XCvGs8dWMvcSxoUD2RcoPeXo5fyp8PktSLyGyH3VWRbcF6YijnUmw6PoPPM2bjYdvK68VPHtzJ",
  "key22": "3NRZpHtgM1Hiivn42xiY1TcNkArQ8hsDi86JSeUMC93Nen42xqUkRRS3HuivRNKNKeq4CxMzYoPQwJFBGKgbm6jm",
  "key23": "24FAFWbbcTq3HU9Ewxvyx1eN3fo8CUeGZWnFSbTrA1LL6pF3k8bn8orzjsS4UfjvQiFcLFzoNZcYDqjd2YtXcC29",
  "key24": "679Q4ZEyimKi7GbYzonH8EymUhyAv99oM9C98YQkvD5dmUWwSGMLjEe1LyuZFbNcDX2bSkYbwHoVfexR8opK29bF",
  "key25": "fK1SvTaHfGkX3fanb4L9vK7H7nPjkSjAEuEV4ydbg7vyGvpFxjfcxsC3UZ2rb8THMWvrJ8emiudAbv4dB8HtfqP",
  "key26": "56yy8AGFn9VgiYpb1mhzg8NDU9nv1oZnEcLALAW3ttVZ2uf9YryyQ3NsHtVtjnM5tEsLgbDt5D5f3DuMmWfHSLM",
  "key27": "62cSpYtQW3xuvXvEHCG43dmS74YYeU3vuKWa8cUk5jjYopgHKjceBajWHFjz74eKNhm6QbhxutXLckbMSitmwzUo",
  "key28": "5P6ZLfGMRuUmfcjwGAgigwoYwUzEbmW7MfKLgDzihSVqosShbG6pyFfDdYrMmJ7Fp332Gr6nb1tSVhRVVJ9qJgoS",
  "key29": "2e86QRoLqTEJw9s4uMj7KsyZ6PfPTE2CFrzDhkuVgwA8EyffZZLaVoDSfNxroL75nyvf1tGaQxXSDzQmnJt8RgFN",
  "key30": "3jEUdf4GpL29V7YZYtWk5GaNmZ7NRxvi9rUMjNg5pb47KnqhADxzuYmipfVHjXYH2ncNWai3raBAu4bfnUZJ5RcP",
  "key31": "5r6PetcAWxhirJRVxuYQuRM3rrK92sGLoJKmcipgNiPnVjpocKPShTvU77Yfq8rgjKz2syjNqNXJuaLmGLseG6Uw",
  "key32": "3KN4irjRpyotGvwjKQvcMzbzoS8bsRub3f1SPp3uA78B1NMpzUAjYkYhE5exbhssg8xVQt25ADHaDTwUj42ZAYxA",
  "key33": "2Und84oRAXz3mDakNSPFsTVMAewwRCxsVQugr3zP2Evm41jUgrrchBp4BuPgxePfQP7QJ1RYi6rJMSDAyMK1Kuet"
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
