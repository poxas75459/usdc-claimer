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
    "58TwhodY4mupnDwvY31tbgLxrDz7Cp6hrnRCGjx7pBgYAWHwc27SwTowb6vRdTyqQdkQuT7AqwycVA4LCfHG2JZX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3RnbBcydFQjHwpqLw23RApjkdu2b6QQNMzWGru2AMUKj7xzEZuqZzjJNYK6jBpvSDsvvmGMKVREZJPg6bxXdadQM",
  "key1": "3GXnAt9MZDRyvUeuSnwDxTdXrFG87B316uZRsdhrGcAxanfjMCntSL9WMW8ot3N6hiDcQPNqnoAgp6675kiv3Nfz",
  "key2": "3C6tmAv5yqm1HXVWaSKX4v628JZ6axFxkhjE4TbaRJFMaozbMhK3gpuBYumGhCHce1xxVwVZdyppn7eQpGmV551P",
  "key3": "GPEB1rvZzvcJLVJ8ywY84Nik9KfLvvSJHwN418oj5ZrQSG3hzFov3XrY5aLHaSuVNoCt5UxwBZZUjT2iZBXK3Sk",
  "key4": "3g8DwXohjNReSUutWJcLjKdFJGSY5YXn7DrUvGvFGwjdFzSuzaGMrZDQc6CWoT9ESauahmVkBB6AYLxyPvQRTa53",
  "key5": "4ds2F8ERUH1y4kAdJz55BH9frey4DGEnBk6LZE5bGiQsNyCmNdNEYshGuJTSC3rUHEPUVrodhMKmppyf84tV7BH8",
  "key6": "oDeHSW9DRHxHoajXGwUAbCXZDRxH7DTnThbcTdFMoezsL24WQTVA9Wv8h7Seii2GvaXyXqB8Utqhf8W5CsZWrFP",
  "key7": "5QCcGtwQEuSdF7KCeRERk7rBnBGXnQTtKwZEnfNSfAeA4V3f4Pg6y9ECUCcp82PzCh8AuhMLDSszevq2S246xtjB",
  "key8": "5xvWwe7uPSTJZk8H7FRdjhgdmu8UgeZvATe2Remr6Js3LhGBw5RjyjequLDK7Tc6EnGh68BTpMCHAZ2CjEBkE52K",
  "key9": "3mcS2JBhuqiaR52tKGVNok5Y4M353ZjRmqtPkjh8xBMMXDjieDHpQhYxJNEyLXBQCbKj3x3i6Vpz3vjPNQ3UgMXK",
  "key10": "5YeuqcJ1PvpqehHCvPpyz8rdoReXe9CK7Rn2LVcf23jNTyNWqU5XHJuYGeFSLzc9Xrx2asRm3LKP7rYhSWHqxkDG",
  "key11": "5XvjPVr3Uft9uathfE4C9eVjswn5LTcVE2qsEay4Kf5nSShiUco2FQPescnJwszhTpgUuQyDHuoPB5mygvqKd75Z",
  "key12": "2nRMrCyKW6jykBdCsFRz755r9K4DkJvLJM8pPMHE4ErQojs3Egv8k7nYXd3AAoSpRr8PLEnXFAegRP9HpFgNwkJi",
  "key13": "5XQtxiYf7MzVWVBe1NhoDMxipWzNTcVRR8kFyScAZi8q5yBZFqghoWrj9uiKbvEweLCegcv7H4EMhodmCJaAmVCm",
  "key14": "3so3mTLbqSyaqqpHfZujBL1eKVVqAmFEbfmhBk3uKDeDVzE8kMi9bqgQJ3tKqbHw1in5z8aEZKczimmb3qGpKVge",
  "key15": "3VXqw1nYvyt7sdEvRsd8wnFXc7WRX2ZtFcffZqvNE4B1dCzRza8BterWU488x8WiQbdk8dMQG4EwGngzpiFJkEYg",
  "key16": "1HW6Qx3XLPBWFzRb14cC1EN6b4iS1MyV766bLKu2CHXVT5U1oJrkjdLv4BJ2fpmQBioAueA7peaNcTsL7EbWaRJ",
  "key17": "49f1LBVmAJ91NVMAi89fYk8QpTuYzyKVdDLqkKNS2gK7Ykzhs7GKusxX8D5gPPmvDe4NXo3T1MDBg4Tvka2FyfeJ",
  "key18": "2KZ51i29eLutj8fE8XV8cyjuJxCnRQvjsSDfPtgSShmMoeMHJRQh7eBhFKouty5Nmc7fim8z3KFMgsuwUWTdMVWr",
  "key19": "2eDwzehGzFUwKUhj52QFegeftPx6FnghB65qz76ZRUEGM8EUuGknyLjZEQKi8xHZd7FciiTmRW5eyymaeDPiuNos",
  "key20": "2cxYscQK5SR1MwcS4LjXjh6dokoshxwr8XnMo3nML8WgGYNnvr9y1aWsy676Jazcn5gBK2Mm6tWjSFxkcgE1LWFr",
  "key21": "2hq87hjMNZC8NZTzXg3uCrqzb6sEgs27uJiLSUx4F3tdZHQzj3TNfXn7bAstonRxHPvwbP8beEXGdCkiEcn2bEQL",
  "key22": "4trV5AaczjSBTbfsBNMy3ULbrAgJiNsSRgf4N1Exmnb1KUeop8aSqasLvxfkybMykC46yw9rTGze7NnT6EMJuXQv",
  "key23": "2x1eqmaXjwyxBHXRX8PFSGiA6vMxQRnU1HYFVWfF9Rt14mG3SfxuvANAJ2P8brML23uhWgXNtQ3EcPpfBh3Ureor",
  "key24": "wzSfbcaQF5MQYDaWDwCFYpTK68r3LKfzyMq2599cYTCrqtQYu9mFZUWiueYvVEk4uKbSHymYnv9z5xeeFBRe7oP",
  "key25": "3SMzjvp73SCLN9UciNQhrBWY4tzAnVjJiWjUY4QDkWa1Dq73AjTwCcerPGappp8wfvvmm6F6YuSHGhrtohEy7nr5",
  "key26": "5kk34eqmaxZV5QscXkWGv8238WqQSv9SYF9th1UoTSKULowfABZgvWfht1Yr7EaSREtYSwsc9BbSGgWgNz6c65Uf",
  "key27": "jVJR4Tq4VdKwinrenXDMbmt4q8sfe8fZ7kA6VrDHNF5nT5U7oWuktKZL3jqCiwdre1JRC1o41CgDZ8ZjWVAbT6S",
  "key28": "2iurYihKXgt2yYYpsiCf4NBrZ4akhkQca4qAxVCV7LNbuLKtcjTaNEXsmtjp85TrtCEJp7mAV1Mv9Zy47zVYZ74P",
  "key29": "3pQRaMREJMqCuLuQbmv6ykYyULFRbhokW4VvWPUtgei47kHMeZKGfxbziBBZanCL7MTrpttxuwYXrPHZZviuEYno"
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
