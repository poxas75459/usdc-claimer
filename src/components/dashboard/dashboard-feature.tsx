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
    "4pdLEuMWruFw3Wo1VHXerbENa1GK5SSX75pNoYDL68CxtyoCK6Hf4X2ofFnrQ2RTParthGb32tTM8sSGRjme5Bqg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57mZABZ68dN2ZtGTbAz6nLr8sx8hci8Hsm1TQmZq3XLVMS4rWGpBymUxkq6SL6HXQeNzwdPZoCSDeDtLNmDfZfXi",
  "key1": "4rzjnC1RgbtmWYtxTsLJGRD8D4gubUyQUgDj1ZA7JDypc49xnevmQA1sdLVMdpa6mzmG2EXxB8ncXRaEd5Gu7nnu",
  "key2": "3NHjtqvNxqeJQoKK6d2MhaqKQyhTv83zLxGJRSce6iFjfj64XcEJxCGsuQwfFmJqoZu5dPtgG9KC7bSVz1CtwoiK",
  "key3": "5fEC8gsnyEJAxb6HVgpSmfuEtPTe4UoXPVK5rtLcDLjieoFPQWGg9rBJAPjEuewHw6mektvjhSYCtRRbjQbgiAmS",
  "key4": "Ggn4EUQBy4eoexuk4xFebfDirMjHHbbxY47CXZHKXj1d5zSTpxmTJsCNFKSAUbqUZbQEyfSd3uycmeJtG4zwN4e",
  "key5": "5RinsCJo2sNcP8SWMRm4QoVmjTMiqfjWAM7R4YSgNSv2K1Q4K3CcZkh3xqusBst9vLukKtJj3M8LVpfowr5xTrXt",
  "key6": "3TFnDD7mWudKmeCwTq9iDVmBT3jEg6KV8rmveELuqUYi2omQMmHLpyDcYX9n5iq4CGpCmwNNdi4qZxjyYp1AQQ8h",
  "key7": "3Kpm3ehaH124sPcC28VWnCb7Ya8zWDV7HEthXDfGu3mAZxXHdoL1HNrCZPqtnHp9qq7GdTMj4GY8uELCASbEspeL",
  "key8": "44eizQfkaQiHqAXNrSSpJ7n5a17Ke7rDxDWQPHZ2U7gnRUQn56CtZCnJhaJ4V6Hjbwoj6aXxhAf3rGtXGkUoDXqa",
  "key9": "3QEGkg2vjb9f6MK2UuctCM8BDQh9BgN1kwds93NPsa4ggAPQzzJBM9cC7xY9PLkJU72i6t6H7fVJT4uPizhNERfw",
  "key10": "3KRhtkaTNa5u2UXhBtZs39qaWyAeRGiYzTYxkNP8r7H8EaKaPbXCgbvU7tq3FYWYtouoc6UX9Sp2c6FaKA2kzbPa",
  "key11": "xiB3W7pA2EmveVSNoEtdst8s9eJt6BTE2U7cS2tadpcX2S6GqGwZmt3dtYL4trjb6PdwmNpjnLzdn2hLPwmCiL6",
  "key12": "5GdDtruCuzPF6hfbcbFZHCSv78gP3F9yvkxt8Ef1336EiDSLQhez2yydDWH8iUNMSF7kLHL9YKd4aWDYnYQ3SCpA",
  "key13": "4an9b7gMjrFU5Lut7ZqGTVDgzLs62zoHBQ1WLEwdWLiC5xFHp3qtwAB3rgB2oWh91xBF6KsKRWo2kvpvCHHmkpsB",
  "key14": "4cUm4bM3fx4U3NKeyoedkMFWsSo22aJFmrTqEyND9s5tgLKNwZtgsSGKVhbD73se8C7CWUuc9Hum7EXDXDpqhp3j",
  "key15": "iBUP4exnukkjbBWLbVnVadLU7AZTaYuLvYsVe9tVthsipFZHrcFNCDH7Gwtkcz94oNNHs64mQtKpkBp4gopRyyx",
  "key16": "rrgAcHj3KCeFMi7dtJmxqgXuHauBofMuRpvzwKoX7bsCv141MjwG9ekCP1Xk1wq3MGB91CpbaBoduiYud8fmdu1",
  "key17": "2dYCvJvc9hhMGDvckQ37BsDN4vg8PCsivwotkvZd4Rvi71kEsU6EM1ANRtW9KcYUJNWcs7kuscFAGxrnFvXfxi56",
  "key18": "4Q4gQURYQheT8L5U16RZdRJCrPLwBCvvgqoMhzKRi5Tn5e9dKEJrnqkND4miwDnTDTicY6xWXH4ZP1188ZSpKJqX",
  "key19": "46nfhdyyCdSDk7eyPEF3Jyb9yauGFVtAj4WL96GihZ1pJ7QwkRkdYTbqkgkcfE1jSjKfTcEw8QnqjMkGubooxudy",
  "key20": "dZppf4mYbDx5PEoFhuXaoAPdN16ZZPoTuU3X8MqoRre3J2R6vdMaxn7cGHm3LZPf2fLuYAaA9TZEZfx6S1eiYsK",
  "key21": "3ZMYkpzJ2UoYABBZWidonxwwBkpzqpWUvTg5PpvYLNZQ9WDDgeuJhiBawXvEwVNHYm8Be8L5is6a42HE1sxMsw65",
  "key22": "4fbMJKCM3EBG7obA4ffiGc9a7ZWqhevfVZKyCcdHCpbU2Dkgvf9AiCJhB4H8PV632u5zrZ15PcXZYcUDHXex4MHh",
  "key23": "3bzSgrrxTg2CiXad2CLuAZJYsdivPuBVbRySxoPYgbn7x2rQAKqTExYHRVuNH69qHcwpDV56MN9j12ax2TVYkbLH",
  "key24": "39h1tskLiYuuoXnagNd9MGbRimVkreZ22fGqy9kLQ6CCEPvMqcSV3d1jHLcC11rSBY1jZZvftf7skZF56uPNFfqP",
  "key25": "21Am6JweNkp4MkLnmoJ2Gn4qvHsNibmaUgp3oj18acXSbKAxuPVRzZx4tApows7vMR8wbRSbgtXj5YiZYV7oaDE8",
  "key26": "4okqxjEuLmvCdqLN1hncq59XuSRHvM2NQVqC9Je4Q8paR43hzScdXu5BERKGTSWS36dTArbVEB5e4KkimCQsKA1G"
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
