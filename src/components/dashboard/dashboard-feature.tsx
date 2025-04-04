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
    "3gn1BFZ1j6FnG8PWBL9jU1CGvDMrCQu1BDajnbiRVf2aL932Do7CWapiZd1eirBJLPMNijM5SVhPae8znyKYZn1M"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3eEG9TKFtbXdTtSkayqpJD82sPvbw8dAbypzvQX3TmSFcyvmKs1XbFW5LC6vNAESYV1X2qRp6rEjNRfGpxvQtbNA",
  "key1": "499hHuXykLqdyZN9vYJfif5FpDTTWeE7gZDNfbGJv5qqQ6sNabvARi8SXf5RscuAdYmJeXH5fBnB6hD62XdYCmwF",
  "key2": "33XLhZZNioybQYpWi9iRLGTBNzPqMqdWWvEutewHhQtjcm6EgAPMeCQsPoGoQNw1QeqGnCLa1uZS2hsiinUxog8V",
  "key3": "51Pn8R2ABnrsat9CUDF2mtUKYZrGMpXZ1biDP9C8oa7BTKoF3njfUeujdiPmnFGn4EeZDATqNhrKNc6UzFKcC3DS",
  "key4": "25mkHtYLfCAuNQMn3SiF21uC9ngBzAu3e14cXeacrx6jWLFPXhtghTrn5dwNMTCqwTKYRCTpzCRMoH1KHa29fFi5",
  "key5": "3QVs9Y4AkXxYjnyWJEyHW8yFkH2hoep9iNHoV7Jmcg4Em5EbfiBZuE8TUPJyGNYrALw5b4r1qspLQgnWAUwvggVV",
  "key6": "6UbQxU31bxd3iz6bRjPUDwPUYdUbeCiJPUtUGnprPzDgTHoHV9J5ve6JgxY6KctK45AxhFa9d5mYDc5K2boJyeq",
  "key7": "5KF7psiJcCQjAV1zPrsqQmh3BybRNc4tbGkt3q8GcGcgHtDDANMm5cnED3HUKJuvcS7Xrqww5gsenXLWAJQXAjjH",
  "key8": "4TE1F6zQj62MMFQNGp5G7X9v6ndCYajEsoFm5kzBZBaC4u8ySdDTRHMoyv5MK7nxV37wvJw81q6kcBjdQqouGkHc",
  "key9": "63ZMDMFh3d4hjxzSh41Jo2dKaG1sNu5372PVErPi4urEq6U7c9XB4hGHDi9JmzKYcymywfyfk41autiyiRNgGc5L",
  "key10": "5j1uumPLDc8MsXP2wkD5eApJyGYxAz8L6nVjxQVRJF6vjkWsRPMw48qPpTgMRPKRxhZuNqxw7f1B7XfAe9u9YDoM",
  "key11": "2oGYAmiewhvh2BRMpetEBSQ1AeWUtR4JSZ2H6Ak6oLFRvipKjERP1SNU2kTAd4eGbckygmyqvkFV5GwaZxpaJ3vr",
  "key12": "5ok3fN8Djrpy8ywJbvuY3J4G4xFTw5zHaqn2JEhEZq4kaA8UjHxBvbwYbgVkk1LjkXPGHaEVGWC78RQk5qTqQtKK",
  "key13": "35LXtZs4tJrCptKVeAbREiRoLUrBfFdKxF1a5B56eAEzMjLJAdSShA3siWDk2VEH6uzXormqkbAXKzajS2Uo4xZQ",
  "key14": "5z2dTXj86s51N9gZ2exuqocvvXbmi1GzLpqjnf9HMqtUjRpoKg9rF6wL3xbpymayuW29V5Bu2gHpHGYjtXGVV28b",
  "key15": "27sAZ8YwhGJNuW2a1Sx4CBTYhzRoCksMwdgSg5pnb12TAMaBSp5FWkNsdpGGBSmXaJRbaK7ysh7dLverw6X4SSRX",
  "key16": "35m8onMbQ4kZiiLqPouADCtBURFi3cs7DftBupDtnEULgtBq9vgBS4zBGP9gCd3Pcg5mfUXV9oYBzfyPbrr9w8if",
  "key17": "5Vv2auCPaAMEA9faothrQzMxJuEfE35E8fhq7mpbwnsSzozvYoh3aJNjEPisfxaV25US6gYqwoQJ2JWn4HaFiB2X",
  "key18": "66ZtiwHJhMUQSD4LQzHJQzDVtmqWbUyUBaNR7x9EwE2gxrfCkkxMVkgxPw3RzhZSqPExhMQ3gT27D52HpviKsqR4",
  "key19": "m3qkcVWmh7qkXdqL8TYGY43GMAvN1qif3AMhuprQjK5krftwp7jwU9TBRSnwr7pvw2uc4fmFYNzuiP2fRXfngkw",
  "key20": "3Zp9g6dFa8g4YLK3ExpVyujpGTmoc4SDhcUeemTbbarkb1FHVL97Yf9zRVmk2QgLzB3C14YyABzNvo1fLTofkEMX",
  "key21": "EsF56GHrAK3HNzTibNAdcXDnk8EHjXiqqBahjh3Nw259yGmN9w4rfU9CqC9K18jZ8y24Q1vcCzqctt8Kvf3QCJd",
  "key22": "2wTBJYwQrjHMBaVhBr3ma43SHbT2WbuJA2qmpmjuX9NQLXEa4TjQkqNmkH1PZT1bi3ZLugrTLK67dbtCP5L6gHoq",
  "key23": "4W8HjkRKQW28tXRuFBZQgZtos1FNAAuFigAJj7MnAc51LGmTW8b6FHhWkfhF33JVfPwiJKn1tCJASCNYBLQGoLXo",
  "key24": "3jogdz4RD2f3D4JhAm4xycJvQXJTA7zuNTG7NHLLQAFmvAi2r3WnhHKCRu7Q3Vc4ktDUpTY6x58FQS7PDsZfd8Pr",
  "key25": "52y8ZrcHc8xSnaQA5dFS3ADenHFNButcg7wfkqqQJm1ND8iNdgzUKwCKMaU8yznsd5y6ytUgvyCMUHWEHCFhx9zs",
  "key26": "46Nw7dTUtTu864CjwXoPpp1Uo5rZViuCAczmh4JSGgtuu3FfbjSpMZt61sZmVvsmoEmUBgN4NSGDArJ1AbF3q7PW",
  "key27": "3pKNAAjVXX8E65iFAbhXhsMyWdh5JxnqLcKv6CtvVtXCLgUJvUqJ5wh1yocoZh2Xvjve8LhF6xQyc178bQZCXX5o",
  "key28": "YkgBstxEKJJcfE8nSaX7332ipXbQKDh8oMhimJ32P7nqLVz31Mx7ir47LKzwcDZ8uQwgvpVg92RGbK6EqzqWiwG",
  "key29": "3h4PVBF7sqKbCw1DWmQqvDiWVstX3pp4oPeWVSNfgW2LjtaQFHvGm14YRpZu57dqHExvWMWkrgazK85YrFHikzbo",
  "key30": "ScCxRkPvLYfYzAxHbAwDGqDrZvN8iSrB6j1e5iT7usM2RmXcdXeaKGDDdTFgWcsc5YmJ7t9qwiCQUYXPeHYtehC",
  "key31": "3d1ZKW8UXWpUzoYYg7cqpHtL1UM3oErjKQHSjP4DHGpFWBFMgMgdC6zmcQqw2P8zuX7KjjFvVCriSHwB2qFrwafq",
  "key32": "3SRxuSCwDDg85wGmGWXM1H7HmWQvzNqW8WXWuCExbqDMDxqtU2a4jKKVCieLon1as4fad5Rg332mdZXjTwNFh7Yz",
  "key33": "4KPmD2ETKUUYoYYkXYRud2Y9P8gSAwdyHP2ZXRU5gRSAFiHv3h5gmm5Kd6Fphm9Wng9WqwhR54PKTeh4VVvu4Drj",
  "key34": "A9CgUFgcwmmpwDJCdXz89Yi9xBmFJe91AyDuoTLRUtJ4djZQW6Q59XzpwYobPi4rgLdDu5wGMzJ4W1rtCdFm5Hg",
  "key35": "2fTkoaXSXj39Ffmfw9MWdesBDPuDPp2CHbGPBKNkwMaDHQxaJCbmZG4vSTcSJaA5e48sK2Ah4ah5nX4kRUrV44r4"
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
