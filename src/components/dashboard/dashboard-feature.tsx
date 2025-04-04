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
    "4twnXQHiLaAwhj44VzVyVNGMRXtrUxjiiu6Ybt9M2bDcydosbztzZABtcB5kCdDLri4sCH7ZHpt9pJLsgVMu1Y5e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4V5StQzqstcjyFh8EyUHGoUZ1QCxsVBS2CfxpHMaKp5CgNghFCkVN4nvmf2XL3YyM8C32B4uPpSSvD7ZUBxTRRfs",
  "key1": "5ddverB3p3r1hzi5bsCEmS7XFaNokzp5EQq43EYiojnois5vMsVgy8Nvby2D1VNhscRcvGq4KUaGKWWFg7pH6u9i",
  "key2": "4Qc5wDH7ixBus1rok9EgrrnwWMafN6DznCtAMkDd2uAJcNhQRmWxXb2S8D6FaNnd9HzVg94HZdBaQ4f7hHqP9iUt",
  "key3": "3RNanjzC8oiDwuvsvMEQpRS4xVFCjuzCU3zyA5T6fBc7i8SE6x4Nthg6Uh67zKQEc5niBm9QiHL4KmH5LcnSBURc",
  "key4": "2Qw8gemiSo3vhTxysPBXj1EeZmU4HRzDpuzRgnaDY39oWucWhmrYnoHidgkZpzeztoot7F1ZDzgFfapuurFR5WXh",
  "key5": "2QTBjE4ZmN7GvcV4WSGCADAGzLAK5frcZJMxUpZvKr9GU78aGMJdmkPJEPB93FV3rMaFjQ2hvc97ephubYHJM9Hb",
  "key6": "4m6Xy8yXFJEU8kTkx9JG1qnzUAS3FUZxGnY2n1TgphbVzMLgcEP6YcoiqAnPuqZjsKCZ7vjVBfQkKYpmJxunKo4t",
  "key7": "4Gr2JjBcFHDkmjnfGaemnoLQc6QeiDnwg5rspgRd5fyo1bjBzGk7q45NyMKuxrFehhzg24C8rwWecuPHECPGTRnM",
  "key8": "25gLqaGA1uSwS7V6LF3WKZuEaJEiN3Nu1vmWSAchptUvQ11GbE8JAWEftDTDiKoYkgRQd34jpQZBdfYdUzgcC5Po",
  "key9": "4vRxnSxgvu4vJZmGsfGLHRfXKUuCGCAb2VCHd3ha5cPtSd2qbmCRqwgLAiYwr3S94kLGvZXnQN7iTyGeK84ZGjeJ",
  "key10": "7wfq9ULe4fZEUBfG9UeMxjBpFDyoEKXifnyZNySWgfdgRJHZR2X4kBMmgMDVgaX1bTKZgbXYC1UQdFcs1nXyaer",
  "key11": "4uzKxcgoZRUjp1vYHDca982tjiEPm9mCe7zydokmc79pZ9kF2yCwLKt1Snicph3ErojJ9Ximqn2tMxxLwCK9NSg5",
  "key12": "3x3AegDJVd3cCEf3NcU7JPT9HAPxTt84JtyFaKm86FCevAY8cEGFHjJZTzAhg4LS63keFYpxgdKCDoBYDCtpvq28",
  "key13": "45t2QNXx4H9yRC2DzCNKjP73QbTSzt3dB8FwDYUEA5V8RxghhjBZXDL93aySK2cXsKTH8wuJYAw5U5nscuv7BHgX",
  "key14": "ZsS7WhxhT5m6CMEj6RQn8kR7NkjH3bN8jwVzqxtws1CSABJZZ7ng31oek2aAWhYzvPGKEydj5vachaUhW1ujSKh",
  "key15": "xicSbE2ubwk4FJaFYCEugh2f9WZRpGHQER9Hjr7u8Kzbf9WZgF2msNBGvvNkYVGQ7DyuXdqikGvkr9iYrtaonQ6",
  "key16": "2RHku9rsCFVrRWEYpx6iaoVxVDETyWQkmUMpvqR3ECZSbaCaNjUPvtVng15eF9vGZcvR4STAS55PVwP9AC4tWovK",
  "key17": "4h5mognLmbLQfCruzvrzTpust7pYbb8qTX12PMnyAH61VXyWdJkxxnWY1Rh6fF8hpzsBLxXoqBKeCpoFMvU3Ssu4",
  "key18": "2MR1GREhEkyHkyMf6ovxHnoLdk7gPbZwjzidFP92hvjLTS7n79s1S1suJQcYxkDAxMi6xdr264Pn8xXvdUu3oXFN",
  "key19": "2EcrxZc7k2aRfE2knFUNxTefrAmKo4h9GwqSJ3vvMRs2boPxfJkqjvNBVhV4FT2KJ4teNJaiJNeU7nYFRSQ85ZDT",
  "key20": "4GkEJUkC3ruAoo9Xe7HsmQWDqqRoVk9PEE7yPaftWMiTL9LmMr6sgWdCibfb1Qq2jQrqdzEMn72ZVyrrrBpYX26G",
  "key21": "Uvc7PaJxuGLZjohssDevy2hGMbTs7nYp2XWJtsFrzbwZgBHN4dBBHDfjoAxmmbsJ3DHuGhtCgZXRHfUUjPNkDu1",
  "key22": "2voXdqN8wceNe3hDg23prTLbGt2sJLaEPVqq67SKkTEeS8m5dzXFFmty1eU7C74trNrCPZQ6LvLF8Jnstd6hhA2j",
  "key23": "3uWTwKSXEXuCg5Gn9zHeKVorsSMuzmEaf2UpY1LGxpApRJM7YoF5Bzzfjz6ToFGP2zLDYpHLzLao3bLkZzppcasY",
  "key24": "5mXtdchDh41jnn4ebiz14et2bQYRsbLAUd8T1g6VL9D4drgyTv3zBRerZYSmcomwBPNNjRShw4pLY8ChcQnF2Ko1",
  "key25": "33BR2X9ete58U6yezdGrdBnUf3rixbogZ7YCUGQkvWjfB2WkxWJBtJMxAP9zv5SLr9suU5KEuwjxogVRtDUHaSgp"
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
