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
    "35uKGXjyo3imKvHZpiAE57BN1VAAHMvSqihVM5gVU4QRb7kvZEKm7jw4nLnUdPNmHP1TKZ5ktcJ96Y4okSGkxmko"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7QazstvNXHY3EeEWWkkg5cmXP4m7oi6B8LDySqyx6sq8ZMm6NcxSH5u4RbYGWMFSsHHFTMRb6B84Dta6ZED1C9b",
  "key1": "T8mhoEcFU5DhRECQ9zL4aGDDTqJzbNnziBGTd9hxVynmhwsmmVctvb2gPLR7MHZxKVczfnKjsGdiKaSui428MLK",
  "key2": "3Bp3CGdsr6aGg71ZTMf2f6woKULSLy7JzZ8Kc5G549ruUk8p1BdcEyndZ7seEtQcWyvPAHUwJhRnRjHriY322APd",
  "key3": "3FxBRWz5cys5ZXHPQwUdpmL7Y1UPkSm9Jjuz9YdUZ3i88o9eHkrWNPPyCSTX9DhM5VNKacQLLYZrMX7tLUkm6NpN",
  "key4": "4NWXKiLmsMKdyifqgXx9wi91GdbckF2dcQiBuh72MQpvmzr7UvCLCZBo55pekwrCsxU417twFYGmZpdNrsCz2fGH",
  "key5": "3TGgbYB79D7gFWyARN6bmM4KScBGgLcoHw5kLqbfMXweiiRAmSYfSouwZpAYhCMJvJPkydpeKGk1kwLFJpHKFf9Z",
  "key6": "2U1ys2ZgiWZJHCKeuL473Y56W23hMNx1B4NGe2m7uGjhqvA5yJFWTmyUEQFuRnX8EStJnMfdkC6ojR7qKsSMkrCk",
  "key7": "54MAmv1sfevLi2iNi8F3WwQfoVvJnaXjLbfd3u5Lc1KQgNSVPWcjuzuDarAeg1Ek4WRnYQTrqrTyj1gZAyP39iN",
  "key8": "3jy3jYh3xrM9STAmByAMrKZk6Qvr6SQuN4pvuXaV8RZSYd7ghD4GbNuHdveoiYoZT3htC3zBDycsFMJcJWLLVndg",
  "key9": "5dkBcEbZvFHGRT3gD6JPU5TZ3v99VDajy2Uiz5oKY9Gm1nfhTHWuDJYw4itVx5syQ1mES7aPBCwEQXLgsHsLVjD1",
  "key10": "2afPTeV45RXGQv2oecFXkKcxsuPUzVvPcxTALu1dCZNscE5on5L3pHr5vQPX2ErPizCmuU7vWgRuSeSWXAfDB19v",
  "key11": "yNjVnuDanbtSFPybNY3HW378H61BTzcDgbWEcyXaWDvUUyWrHg4AaMuRrMDGMrDT89QcURMivGa3BLJtsV9k1QU",
  "key12": "ng71cszWvaVrApBHXUy8rv8xfBH12chg5LUwTryAsCkNbZD1YnnPaxdrMzCESVLx5ePC2ZgCiSGz9RYaTTNuUy8",
  "key13": "31XK1mzUNqixVffewQvesaHpxz7iprMJhYfuyaXt3EuuqWJQ7DYhX3os7j86STr99Ludk8weCjD1cen5Cvy7eiiJ",
  "key14": "4TYqaxavTWzQE7EgmgjhnG1LhQyTfoSgB4z3nZmLWc5Mww28UKK75eWTLhGKmUSJruciR6iTQY9s5JHY9iAskBqx",
  "key15": "2eG5vaTz2nsBR71SBMuEaRh5X6UBivgYpyxG1HL72KGinEnAWnFzLo6E7ni3dHLjmdmw787F3MXYwfp59vqTgrEP",
  "key16": "66Sd2eio6YGuVjLNB9r8fTm7XvD7bQfK1iwzc6ScRStHVPSYF7BB2qurpqcuPUxkdDCmF8ALjUZw8oZLmb61aiWU",
  "key17": "ap1TjzAh9E1zLmND9914J7M36vMi4TDcCh8XM7Vwy2MdkeopZ7Kt1JkV8R7eokEyNhb7wNvnEKrgjU1tgmWUaY1",
  "key18": "5Drjx9ZU85mdgXzqikB6rNyNfSqA7YQwgDohJK7SdUVE9ZVUikj1sUwFi9H8iBQwBktN59gUfAn6KEpXcSjDtZyU",
  "key19": "4Sw8hT4ZLgz9N2HueNzXyeEFfpofz7NtPiQ3xoJmHCv5iaHrMGCbTd7i78zDBNKkB428reFoBGmPHHujA7RDdPfT",
  "key20": "2BXZaeZZuSKQe6VgiDuzx66WeJtpaMDbue2FNzbMK83qhXyNr9vnev7ZW94ZA3D5jpcrWLD1XsQgBQHGXHK2GSVS",
  "key21": "5PJ3kXyRp2YJ4kENsmsqfaMkBVGegdxSNeycBk3UUb44zP5FN4ZFKTSD5W3oXvqVWwRvZ1a8zmTTRA313cwidCLR",
  "key22": "5vFpGktkc42djBCnbreNQvRX4AJgpxmaAZasQd1MopbuKnECTRCuE6GYwy67vnQJQcTye4XpYt2jjfmX7RWrwAGu",
  "key23": "3NVW1LgtzAD4hryP5E8GcsV3yZn4LKWFDBWK8TSjWWS2FpmZo43gZKWphQda7osDPQYShjGV4RhoJJdWGjwUg4vK",
  "key24": "tRBLVQMN8tPGRPya1drBVjtEvJvw3sb6RwhXhkYLb71Xd9GE7kjWCfSD5nqu3QWCCRyjtDVYWgQwv82yLopChQR",
  "key25": "2uLFJJChaQ3X7YDoWZ6SxHWQYxb4ih8RJDDFAVdxxqsuaUU8xCeCiM3jMkq5i3ZMLFhKaS4xVa8tNMQmzNfHYSEe",
  "key26": "5V5hXhCRgCSP5d6pgmFstrDbcYNg3C2HLdXwcxUVzzbFpz65pZ1yRdUzfTpCMgvXRdF2DSocYD8hHdopwF5hKTPc",
  "key27": "4sLPej5Cp5Vgq7AZREFCgSqGkqnmhE1Hv8CVQXcNULFRzp4MmSkShitzLaZ5JSbMAN2VmA7W3KC22kyNM6wpVXpu",
  "key28": "2vgeBzhURK54Yv8y2eN2XQRfrgkLSkMD3osrHWUxzLcoiaZDAmPuf447ALtNj21gaMktTo6ynYJJNXMsf8Lr9zNW"
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
