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
    "2LXdZ3QNtujjYTmm3RzZed6kCadB7FYkpsWmA7dzUGdDLcM9Xzjcf8uS4K9UfFDVgvHoKScyqKWdf4p6Npssg776"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5JHHoQdigVYe3oFJWNEyWcadFoM8UZbjRbLtdH3D7p991oJ7w5qvRysQW4YqyAx6W3cncZjuPas8ApMs3maeXVuD",
  "key1": "3P6ig1VM1rUz3MiZApYhpej2PaQC3sEym2URZ4gUpMAcLN1wkASet4SqcUuaBibsg8ofcaVRUnhM5R7F1zmwomMP",
  "key2": "2xajd1zwzAL8mMkyTGtRTwwqcN1JonTnixaHhPbqL2trYfB3qN3pGvqNGHjXyrkVqf6PPcPfBX6E3UKwnnn6CsjX",
  "key3": "3G7uCxqbJNTWuybh4RAqFKHWVPcVTwJmxTYtdLNcEcPkWfkJwTegdL5Z111DNVH6bV1m7qbCoVRqztuD4Z3RTrWy",
  "key4": "HdXnzzZWxZQg9zgbLMLdk4GwME8PZh8fhJQoSARZg7NX4kQguH1M8JMtv4eGc2DL8YzdzkerDr3pkcWQYLfjGs6",
  "key5": "2esYWktT4yqPKn5cxmzqZFidt3Z28ZAMUHuxJm191jgfGmoNbqMwzuNjvpnLzFpyqrMF4wHW3QcyzZ3Lrz3yQ8ag",
  "key6": "G7NW2hghFUDL717fCt6kYwJfN3s3X6U1X8Uu95rW9bCMmJo7NCGFv5rZkG3Qg6pjB5diY4T5VzdbsEPtUowKhc3",
  "key7": "2umxERUux8bzqnr638WQmg9yydib3vArtHoJn8GPcYdivKigJcE7TvmqAbYUzS7aUsDrrEA3iW1k755ETBnChuij",
  "key8": "2hpxKpGvzvUArMNuib15r5cJiFx8oR6QhHfW1ja8CB8bm3H8zWw9RQ9RvTF9WbfpU4w9psqZAmaLHNETgL8WQVEQ",
  "key9": "2eD9HPomwSinoqKDC77XTwwtjFS8d9c8PdeWvjCCup6T6dDiXJc8JmhkDjth5nvM9H3P2hXWwP5ttF3BvwFZmJqD",
  "key10": "TFd866oszJbYJX6ZJYdFLNJJG2Qk43y3x6X9wVqY2rNPK1a8K8Cbrx9CCuwUTy1Lz21N5pVds5zYvCYYapQHF35",
  "key11": "2yHWuhh3ZxkU1KsiLuzbZ7PWmUoBCzEoKBsNFpAGc3jP2udcgj3g7M1JhvUcumJfghuQugxU1bGoRTHKnXHLTkJh",
  "key12": "5p9zewkt3ujPYGD5FMSqPXG4xH4BuiYj3Ts4qqz9XE28RQkaH7kEEKD5n7HW7CoKWAdUB7DinXkvRGP9TfcHkLEc",
  "key13": "3q28aGV6Fg2YBG1oLbejmawDrCSDEhc6F44dmqMb7TmAYum4LwmXeK9segX7A8abE7JG6iWbA7Xffn49AKZDenMf",
  "key14": "2vPEqc6XNj6gz8jw7bUzfeEwQXZiqehmWUq3PHNYa2oPf6mWgmm4pz7uvXdSABDsxQ3W1re1mtcXFMZqizrZtALo",
  "key15": "F9MsECXBgBMizkpmdrHfCchJ8WK7s9dNiVndsGu4Y7eWCZ1DKfW2ZUiMg7yUkAkSXsmdQDZNbifm3eZdJaFjtLp",
  "key16": "6T2Dsa6nNSvaU5K4xfjq8kDYUKt7neKxJ2bd6yUDi4t6DU9yAddv4dHXRwQtY26mrULmaBDGMFvnw1tCCQjUXtm",
  "key17": "3vatJ33xKB7o6sqsbSui1tv4FAW3AGQXCX1kkmyGSxArtzFrvtiPrCoL6Fjc2wx29BXNRd4JwUphCKqjwg2asa4t",
  "key18": "NbBQFW7ANbfGETUcRGA2FpWwesp3L6Fs93eLm1gnDeCfW2tQr2zAMnQfQ7PwT4kEDqvtxAWrCuydthE2TNrQ5vU",
  "key19": "4Ejpu3WTPSwXnkX9JFGUMM7kV2SmmcNP853T2KnxvLtFUvk13HeXXx1aQaWx4XuW3Kp8RHNFdxwVLqKAzbj8KaWb",
  "key20": "3vN6PYPvqTXc5sXPj2v4Z6FKEAiSePiXTo3gViFCWvFJwGu8RXKzEMJRo4yJ9hyurJa7qfi64NuC7iFwNDwejG2G",
  "key21": "4TR5Kjbz3tZ2X6ugMxkWv4eBmCpe4B4USqUtM9PPR1WrKf2kpd6KkskWxZSXxAyBPaush8KBc4AM61QCatND5dBe",
  "key22": "r1UxhWKaHYp8L5NnuYtfdgLaBUvqbvD9qe1TBMW6snrzMaGZs5QJgPvapkLVVZjESdgmKF5otJRkoKGYTpq2y9d",
  "key23": "5agGu6cDWaYjXK2mFSetYUpoLxtkYwvMT5wpwhgR3KP4USWxdGCrekVdFZvYRwe8oiwbTXqTPm8CZac9jGQWxXMW",
  "key24": "4EctUQfTUPsaB8Vhg7LFHE7Bm361DzspB3JUzqsbfu6Z1WuAscvco4inbFMoyScPBJ8UCuRxEabqyZdSX1xzR2gM",
  "key25": "4dCKvTBV28z3RLyq6Am72CV9coj2vv75UK1JaAbiCVdMf1gtk9CpgZHB8djEMsYr7W4znJuthZvV2T29xhfX2tcp"
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
