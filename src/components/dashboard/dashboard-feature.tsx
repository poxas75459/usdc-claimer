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
    "5DAWw9AS6u3aTaAhKcF2Wy23HkHxU577682jcXjQxuJs7L3J5ZQjPLwvpouRYLtQm6CU19kQDLy6yE2Vrze2eQMc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4umNnPhDhFUXqE4h9ArYTvniZmyyLQLKND7HAWBn6pAob3pD73e6S6w9v3YAyJm74hfrHyqfoxdsTCXKBvhSP1JY",
  "key1": "5ub13kGWqYPfYMN4wKp3dvqBTHLqbC4uqhcsgtiqfbqEvcUhUiwSLhGAXFC5rtLDQgkqgqmfFRSRmix2SPh2az4s",
  "key2": "4i2yc3ad3PpRV1uyMP7qUgop8NjfXLJdShFvcvzrekQ4Y7BPxKbJvCvTmumYhUdSsCiAYiX1rCsu8nyGsQHxeKrG",
  "key3": "2CUWwYDnaF7pjQpnoGyf9RNGCcxb3UFuxL7YsvMC91bbhzVXNo6dYoHgYZ9578RHhHwtG1ZkH5oEXBZhmjTg62Av",
  "key4": "4NSHK7xS3Q2cTSMvcyeh9dwnf7FXmPeXoQ613Q3R9Qky5D9RFHvKRtR4t5VFwbCUkURYt4JtL7jd89BpphJt2HPi",
  "key5": "392yvcTttKBS3of7yks6BZ4dgFRvz9fnwXyLNfvz3ipQJiuxYmTUnHYdNGHUi4BGFtMKdwe3M7EHwYWbXyWFF6Y5",
  "key6": "tuWhtcpEVFiK76YJxBZNra6KrR24oTrv9CjU3EcGnQeRQrfymCSz8R9diFavzFaMncEc3oZG2UKVDt8NivDzLoN",
  "key7": "mMtmAdC5GSu8DoeTfyjDbXbfGuT7iEQSNETYpCLdfC9wetPm4DRxdd7sBjbcrzFLkV17Sx8ea3inCqKvrEyxtuE",
  "key8": "35J1eV9HC3viACVGLpaxPmm2qEJZaR3iZrXm7wXKMWJNEzCFETqN7sXFuG5YdddoktxYhM7xMxqNYe8KhiFi2vEr",
  "key9": "4XcJjyzmmjdaKTHDshHNq12Hm3Hv6BghUr3oqvphV3b7p1LUrBrdkEyAX9RHkKxkHr3o5gzD1Si8yT8253NPXsTB",
  "key10": "yc8pRDzA74i8qGD8oKGWzBqdgcf4enatpBVcexrJzUDK25dFMtVncJvBMxaEXQEE7axLqsYjK3dKr5y3c5SojVd",
  "key11": "rBfE97p2iGvkM6vUaK64tUMFRfGTTuEKHcw2o5ynZzsaoqKa7k4famUJUB1BsQZp1TcuGCayK1GK9c9fRqfNkBc",
  "key12": "5NyWLM3hMHgCVLMQGyhzS19JzEFPE8V8UBaMxQWYrLNwC275xfFxwQMpqvvv6EJZzYHbE3Zmmw8cCWVMx6BbFmDW",
  "key13": "4YK7FNXWgSSvXMPYvmxDBmvmZUyLURhxGSNbhyXgWSMpyjfMYrKqYNQnYjoYSC5tyijJfoeMMXUJRKXZV1UvhAWh",
  "key14": "3r6qXw1GMyCVbyhndveQVcjYPj6DzSjq37j1K3nFvz519cyg2mbBDUa9fVpe73AKkV1bXiaVPMn76ZizxbJSPYBp",
  "key15": "2M2NWhyuirLjcWa3kPYCMT1JhkoFcDsvwtUokVN8n5aoPxUKDGjwc8tfjuypkPtGXbAJgPfVSDJWdgJAoiprS1dc",
  "key16": "3DF1ZoKXSo8Yp93FzU3RY1zT2naZmW3DyJDzKfTwCdmmYvQPvB9u9sbozigw1gssnebqYq9i4YvkQXTKvVKHnkm1",
  "key17": "4NK6r543nVkfZxH94LwfxgQFkag4UoTj3xDxRWNLkmCC8QusHcBc3g3U6DcTnu2XFzveDa6a9AGfy4djpYMWuUn8",
  "key18": "3F8gSxJAXqUDdfT6q9wMB8V4uWQWrG2483yG2HKzAapxQUjfSvGi19LS29LX7Jjkd16CMwzawxLGQtcVXUCKYjEp",
  "key19": "3qgvwjpjDwEvQn1cUa3Y5fyyxE38Ybxbb4KTzf4UFvLXnM7sXPc6PA7SXKvqmpNiLCH9TihyPyefns7QS7Q69Gni",
  "key20": "54bcv2qrNSvxwsjwkAgKrHZc3FnM3zPPYaScF5rvqC9KBPX2mpc5AHE8unDdC2X7Kk79LrA4e9kaHafWqZcs7VQ6",
  "key21": "2vzr17NyGN13CYF5jAqKn1b9t8U11bj56HgvjuXDNNBgGvGspGq3xhEMTeov96cTDzZjqd3vHDVRUG4oUuCArdEq",
  "key22": "3W3UDaDq8wZeuwzFjim7xsVFCSu3b2MXcGUAKkzEBoTHfMFri5qqBej2inNh1eLmpKP8yTwv8Jyca9GNYx2TPAGL",
  "key23": "4nDEh4oxfgDJYBTt5nPYAE89GiSja1uH9zpoQGmDH8dcaG7yGJG2ieda2fbgSzd3xaLdZ9eRh8ym2M9Q6eoFvdGJ",
  "key24": "5TfYAFdide8cTt7C4KSSdK7aoPsQG1ZjuZA1V7thHEAFFWkeGPVsCFyqPbPngQNiYGeS9zu6x1Ef5eCpwrX1XTm7",
  "key25": "36JoVUPScUBM8vuazDsdEnS4p5mBLS3c9KB6bDmSTYt9pgS5qxzNnxaYccEumKGe6dsbKcJBXSs5KnP4tYLWCJut",
  "key26": "4UPcK6ascwkqDXsknjwG1Gp1w5DwJBxJVJoxALe2Yyyum5q4NwHzjnuWsyXsGRaxnQHRoJ9sWBg94m1ns64LSvMH",
  "key27": "4tSKNtEsHcmz43q8FrLZ9nTVktq8uLp3BEG4BSAYcV9GTNH1xjz6v7khZPWszQcbKBxEcpqo3yfB49FJv4aM1Zpa",
  "key28": "5YuEqJvr3PMTp5vJ7qLmWSMEkHyPFZ4mDDv4Qz25eTTQLFzDRsWeo5wTGXHZ3RLifcwr4PH3LkfP62Lb3EFVSzP2",
  "key29": "bYtJNDmrjENeUo3z6b5UPrQyTKH4vbh8KMNGRbpMPRyQoXiyFCr7G9vQQypaeheZHeZcnbWTN3Xcd8eis3oUJUY",
  "key30": "4cLu7hUyDTUzwncS2DD8sbkPK7xqFn1P66JqYXvtvQt6EpkWV8m7DiqDAq6eZfCfthUfb84VYre5m7oqeTmz2pvq",
  "key31": "52D5PYijBvyJz9Zhkbq2dizqzjSpEQVDUE8SbL8KGvQrm2AYAKveXS7nQ2XCsYRwmFK2A5pGcXGkBWgCtLhs9ETj",
  "key32": "3nDwvJPGq16aZ1NpN7DyB5x9Tr9WLLMFCcnJh5MR8gif3UESBChLNLxTaUbKoRKfPSRGyLABTmNyoWgbsZVTvYkb",
  "key33": "YXPZeyoWzohAtQ4UyeJnXDLmdpdHB6iGY2nsbHpZiiiypwC6o4d1GA2vThCzGhbfSfbsQ6rNELui7EMghjKTBtu",
  "key34": "MyFYJarAS1jEsf9xkBiWr9scSCW4onn7BUK2Ctbwmb6MC1uK3zEGSwVX44PkZAd9WzTVpZfe7Y7zzN6pu4eEvj7",
  "key35": "51sSjKQfvvhoyryaZyegDVEJ17WH76cufCNt7wJezm1BrrUpuqxXdZ53HN1ZhqB6URfvspCjswtnJR4CiaaRyGbr",
  "key36": "yE4NHNYJ4CpiLX9b8wKNURNoy7eL2K62XAgN3fxysNfFSN69iroYT5G1VKQvYuNPp5SWqDbGEtFEwqmpMBJaCJg",
  "key37": "5AzPP6NKHYgKmtUNQeJhPvKeJiPLfYD9UZjiDQtcfH2iedBc4ecrUFHv4Le1LZJDqMBm8yjDoRLg9hMZew9377E7",
  "key38": "4qe2Sehwvuj4jqmiziHwLQMMbsGitvnDwKZavS5BYBQ5vZVH2tkizZRUFkLozSDw4dBv3gYnGWupsdnmzucQgCi9"
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
