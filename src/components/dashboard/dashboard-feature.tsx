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
    "3wMYunoFcmxowHcGrpMjq2LrS4ugZ4LdZkeexj238A57U31B2MAjrFE3LfnC1SPCFf9TRyM7H7H2Pfq1hzU58RY9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4FcWUoJRr1Tbibt2iqc8ySPX3LF4BT8df5vq3HnxMHwwoxjABq5kSKaJK7uRHqwLXRe9fXKShwYicpxBBDmfYJro",
  "key1": "3V8rYpdJJtV6e8TbhfWadBCv8VpXJKSmtFETQrmQ19ui7iYkcxuNStwh4BFvtJmpoW1gCQAxzyDu7a6gXiho2tYC",
  "key2": "3G6DQmTUESkbHLMx5pzpBDNdrajiUUVhuZBqLbtQpDEN4EkLyuhgVZJrWP9kRJUqVQKubpBWLJTSQovEwpC7zVcS",
  "key3": "3FQF1ocM4YXZr4hVCviU3vxyUpGSKQKq29MH6T8LNaSPut6Eh4KngFKKtJFYFBspuYCtWBN5rfd6rAArXuSfeUPQ",
  "key4": "4VRJgifap7ED2crVU85jpeYuoaY3UWsBWWcyToXFu83kUYPSnvWnzSUEfBtJgXJfFjWDim7K6QZVLDWqoHm8o6Fx",
  "key5": "48VY8ncmeKoF9dL8CJitnYuaND8fT1MTj6B1pwRuwiQUgLJ14DpYgLVQzbAov7DoKgRGDVK2WyLE9ApVgy6SfXGC",
  "key6": "gHFkFf8tnrqcqCyxibCCerU1N2vfmNYkQLmnY2aCF4rK38ARD6DfMKqZgg3KECSX3We42TpZABcujT2xKwWPCnx",
  "key7": "2bwFsp8PGSnXRneYTnD5fMRULK5HdDrgyQ2iGNfGnwCMg5vUXGan3FYS3v1S85RpsDdCJUpiiSivJ32C6iB8zFxq",
  "key8": "huQyKMYuucxCXmBN3bfh8sVCsTf5fuZn6eSQzoYPpfxahtcd7iF7N4w5wEiKsyMHhk3kXZNmMxF8ges4XeJZM4t",
  "key9": "5ixP5EVsUdsEHSa1Cfd9xohxVW5avJpYpQ7CKPJH9SFhqL3sphsi681ytJ5FEVgdTRPo4hfWWv4ferXYmx245Kzd",
  "key10": "5Z8omcgdKKPydzQdctPz8mVksmRcUn9MibPpogUDyVDsSMs2r87kFQPdZKqjcELazLKLi67oAuy9tE5ipmuGdcFZ",
  "key11": "523HjD7YoULRzD7WgBzs7NxFBh24vt3gt6TEApRJY68QjgBAUSCMxxYh4HDeKqiWh9PXznkSZYhjhww7dwv4Q4m9",
  "key12": "633oTh8TX6i3S2YMCXb9sRFEyauyQfcGq4Hkf1XNSYBeZ7DJ8DfgFHXUYZrxraR2qeDfSdC3eiumwNu5Z7jJAJ1s",
  "key13": "2MNC8mACjHdKx6wpP8poGoVw4WKfMZ1jVzC7gjf1PhG3UtA5LSuQgrhgkFGqvLrNamwXwoTEdsJyR6cPSDP1PaNc",
  "key14": "33tYVoGFC13YYHyCXzhfodJs1PAkWHFTcVY87xCyVxbWZsTEm6h1dkf1ZHi2b775UjdwMsBrKAz2r3BB91CKGWT8",
  "key15": "4AstUTYMh3QbjF9Ukwj8NiERHKFiprmCLReCC58upSKtmtwAsW8VJL9jVqQVsdPJ1JfH3JtYC7qQ4ML9zviHSZNa",
  "key16": "RpEMiVmhAkmUZS9BdDSuLs2iNEHxse5Ya6x13dAuQax51sUqhC9c7xpThSX2CGLiJXt5kJQ3eTTbJMsgaeMBGw3",
  "key17": "3jEJWtJvhDEEBxEuBhjpxoasnAMVeUv84dh29LUhp7zDxxZSuoUuaHevYij3oZZy9UwHpA4EQyeeJ41DvV6BBiNi",
  "key18": "3kP9u3jqD2bUjqxNkLvSWTg6ocPfxQCGPKQebuHBEW38GqGHyUVbV7zdLzoKdtXgVFtoDtbyXu6amr1Aaea1K2i6",
  "key19": "4yvUiAN7Rghu1WRpmYGEAkdCuMvbB3AnAQ5btLqyn48JWVnAunvAj8LZe3kj3PEi3Vjxqxx7wivCsr4cdXLqYNrR",
  "key20": "4UqwJB9tHBoi8PjMjCumKXaCJAYdfSVZDNCMEsKh8k15GLYtuqz1XVDVkFVBJrtH2T7dDM1QXVBwpNR29W3xVqm6",
  "key21": "JxG7ai62EJ5VwJkaX7sSGXRpMQpNyQ1zKYnbH7qJSeHzWUW3YvoJZ8wMFAs2f8rn9iVEYxVd35FUBG7HpYGhD5g",
  "key22": "xHpfQS1cF99KrRiEXYhoFY22dK3fqXCeCpC7X87Xsb39QtPXydHf7Ra8sBkW88h7o4KVBS188rsmEKaTnYySyKi",
  "key23": "65JQGHJKAtg9NfC5eG2B7dbKBG3N1iDDYMkkjEXGEKwDje8AcQ4BF9uCcLiaVFr7oxXep57CigyCwQVZdQbMyPUx",
  "key24": "22nsuihmVSq5w2bpBaVn8SKxjMZ1cBcgUkgpsSHrU6hsykmhrsz6D4Y1KHEUmnhcEWRnCcRNMoF1dCTsmeJRStwF",
  "key25": "PTpfwXdBc7NuraebUnwTBVWbGSdkyWQ5o6sUhyMZzcfCnYAWNLxNeD76NV9May5pjHHHfM1gQgwyAmq8ZK3U7Vn",
  "key26": "2g436bA9MpLarfT1UYJ1kSLsn2TZzZ8NhW9TEHwtoH2UqCmyXZWjB9FecJWKzFVXimJrkvE4PN7Ww2uwRcY2oLNj",
  "key27": "259tDhvKgsS2dB5rgxqFmECychAS6mSAdAozkFzNrHYSoprVqhWHiegqJKYuQYsSg7whCa8rjUHdMoKLTXe93SMU",
  "key28": "5HuibzUMpv5ej6naD9hTwzBZuJbGKGU8HxtTZ2B4nu32KKcweBBWgL7cynk6qZtSRUQgK2yQpfpKGSsj2s2m1kuV",
  "key29": "4aZ5FSdjv1zeLNZHb3vfVDY4MEFQQ1k3jy2zXUg3HqChfsKrV7GyQgoFm2pqYBFsaTPuPsNbZGvuVUGuPzMcxAVd",
  "key30": "4UPEDzYTjsSXXkjdYz8Qnk2mMfjvP7SUBDvcAs8D3yXmeLSK7rcqZFRtLwK54eo3q77ky91uyUTyebFKqbYTHqfE",
  "key31": "5os4cFcDFwYcenZTuDX5QRggkF1CicbVivv5NBLrgWHpUyuAL1K8iZzKCe4mhXsEaPkUuB4jDKuNusSF5yWc1Uw9"
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
