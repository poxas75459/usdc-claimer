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
    "225vMi3pXEfSL9uzt73PsSx5XF1iXsvbZSKniLcx1J5pZXeZwPYPiE1uz9aiu9MuucQMvmFpB5DJRBmuEQm6E4Ra"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29htt2D9Umqdzaraj3hecPvUidRJvZMK4GZJ3YrUikJdox9o7mw2fTm579r1aTpxs5ZHRSF5SrL33y6dCfvXbR3U",
  "key1": "5A4J4jS9YoJZpokdewSYmpC1Xvg5SZGPkt2jJrdjYjwfYJxWDo76xA98KoBBCNAM3xH5xPeahFs8BZaGnhL1KFZQ",
  "key2": "35KcGTvnDpn5xoPRmza9kmJxdhd6NqTLptYMCyRKtskUahReAcoons52DqkSPy4oYbmTkqE55MsL3F6pP8Y135kW",
  "key3": "G5jLEyUuAgMvJiSBjWEgxKXG4tAtocFJmQzvsdi4rVABipR8yHHK3ihKEDgXkuM8efNZUXn3HFchBozUPEYcrdd",
  "key4": "Wv4QC6gb89WduGUhqdQJk73yokT5fw2fGaJ1ZGoy4J8GwjKArjVUL3Q2CSfjNqkTQ1firdKzr5kR3cPnhX81krt",
  "key5": "Q3KkyyPJ4SwsJzvosXnCmgUN8H69VogX7nYkQyPTZtFcyNqGCdDeDjAaCAMdwtv1pR3vwmG2pXLkv5py1g55LAV",
  "key6": "Rj671ADUPoeyxv3FncNjy1puzi26YAYgYZVQESLyJB1mBrgecDw1YcQd9FT9dKrbZohpXjuvunmASxBTCkakh23",
  "key7": "2T5sR4PHyLYZ6m1QtyWz3NCA4hCAqoEFRjKJEwC7YbGchihvrffviZx7HFGnXBcE2qtAGySdAj395oYnyryQfQ9p",
  "key8": "d1mDJfZPCevxmTgGuXTsbQUFrVk15BGzDUntxkQAjPW9ZnrvXPhLaaFg2SwtZJ5G7KeSGekouYKEK4bQGZZE4SW",
  "key9": "2tGvKta4rpWPrKjwepXj61L6aeTbS6DpygHHtWe7nN9Xq6KtXpfjUDccL4Lk8BPVAsHW5ncb65qA3frffaL7r7mS",
  "key10": "yiamLzrzP29PXxNoigKAJTrxySNHePeutaw4gwWJxFhG2mcoy9mH1znRUbLCUdm6u3JCTfni77zpAYbnw7qoSga",
  "key11": "xAV4W2n9QbBb24njabo37vhNyUvDjE2H95q6JzJxAhMR9Kr1rEYwndPrHDFyRfFgx8MUxJqyuBA2vRVZqffrYnV",
  "key12": "5j5WU2oo2S45ZTvcujLhwg5uxLMqv295diPW1VWD18or4XMV2Mg5qefw1ahk5e1jRaMGvRDUxHriydtmYYqmnADK",
  "key13": "mKo36vAaNE34wQ8FB5NESZX52oCDU13T83mEGZNNK2Be66DPRwtydLvquu3NYbJ4PNRaT3stcutdVZ1MGWCpvV3",
  "key14": "5119Nke5D66zXfjqSd5GPAXLEmk59ZSUDHCpgesXQvoYCptXeLeHpuekbiE3qWBbKFcvZLCUuUEEj29i3Xy9f9en",
  "key15": "2qdTNRKtLBKD371dBdmXSueKoNUjjFgdvQYQtiN28PJ2aGddAu79A9bNyLdhuCy7jYcPgywwaK69LYN1kVWvVx38",
  "key16": "33Cs7irvUYWt7ymKdK5sPvd3h9kUoad4xy7M8cykFg2u7f6zQH87WG2nFaHctJU2urvH9Cmq9tpVSY8acuG5GQhv",
  "key17": "bWBryhENb6Yig1N2wBPUsJGCs1McWbcYVMsZiHntb9h5u9w8FTv7tZwwDmVuWZrpUtyM7jwcDMhpr7phJUBdFv4",
  "key18": "4TagdwUfPVDM1QknCxvxeFxL4uitCaDhwJgeM4HSh4jJdp6RkY1iLJgJ9sgVjM2MVxBdPbQaAHcm8UoFciEVvjjX",
  "key19": "46WZyvScjqgr2BwRuJy2KTuruWLUkjNFmZUhj7orWQUAm3sRaQEGruCFruBsbDXQ8SS9ND8S7QU1dmBNYg828qty",
  "key20": "2fekcbKUZDoj5SCWRyzSkmGuAix7VH2w4uvsJ3kjcuZf3KqjCeHNPAVNbXixGfHibMBj6B2AMxu5pw6fduNUqt8v",
  "key21": "3TFpRdjhoat3g1of6JsVL8kju6kc7hFg2WxK6SNXjfZha9hT1UrbQZws7tbhF2MZ5mQDu8HzqJat8Zf68iBqheVf",
  "key22": "39AewGQpqSbPHTZtHXt4D9J3pkXbokiU96nRPFswe4adQU8vkTBnsbV89VNSVukACAjgBXN2YrjFS64pLQZzkGpi",
  "key23": "33ruRhdmiiPit1GJ2zkLxaALEkKtXCgv1wmbKgcZ6bL6Sc9rDNbb8kzQu6EcjVjdaxG8s9XBa1BupKHS5AwATrLn",
  "key24": "4bsCAxBsf1hoYTFjD7R3ak2Cc78W2ALAAEhdaWFCMFCmdyDwGzxadZ7DDXgsTUA4Ak5gvj3oVHazJbA8zWDTiUH6",
  "key25": "3bQVFeVkvnCYTbPiwuxeGXUojczhAo711sLjF6ofmAZK5RA9qGGtHicB2f2VEYvNCRMWo2mCw48m5YUbWVxH8D9p",
  "key26": "5EoK14eyHJWGNr9kchKL8NBNDom1wvsgTsNAyG6MgUV7psCbSubrQb4aU3jEe2mcfCXLP4VaPG1D1s2CKrMxsNhH",
  "key27": "2QYFise5u5C7Lt16C6aF5eqDieyx1pGDps51RNkdAvxfdMxDfd26RtYDcRwn5ws6qt4dTeud3VfkFWCwkDATjDjg",
  "key28": "4dqoSDsRWE775RUifHYTb7NKLkmxxfeTUmqHCDittZxEHXat6xuJPDXvNg1jVPungM1XBurSx6rkdPuXXEvRcNLt",
  "key29": "4TuDadC8VAtwZK7bttn9YqboCJq1LrZCfLULFTjDWb6vLu2foF25sZoArnhc6jpC6jPgwXJamXAEroMt3iKW8dUv",
  "key30": "wCVATx88fKpJazcY1aDsQseUjgYXxHhwzQRd2zNASm3bRu46bcx4XA6QRQLXScJcJwpAwY36Eue5zffFvZvv8xf",
  "key31": "121vcgUnBii1KqLcKcgSdhUzstrxVCLihDnqdXKkRGNumhQRLer8pRLr221jvZE7e3p3UcBTgsKdvbzPS4QXarn7",
  "key32": "3T9dL1ajchYy6eiXsm2zBCxVGVv37DR47WYN6vq3XAVab2KJADpFduaeusCnMNc79Phmi4iiC5Xy2Z3gbq8kjN19",
  "key33": "3QHoayzb4UrkyLG1SgVKnayqfCEZMNGaVqv2ek7C6avQAR7DdBd2agGvXkSbg7THuuRRs39RfhtHD7MtjjhSVq5r",
  "key34": "58WGA4ncB6ANwqidLY8UU9uYcceyfv1Nar86CtAPx8UjPidDrAHNBTX9MJz7h6mMvEaAhVTTRGrb8ay9mWnunmGc",
  "key35": "498SrK5amLyzBBHkMExYdcGmxCFCSkPNY8t4fapCkx6KbEJk7jSypevYTrhD1aeVGMZ1RNxz6Kpj9n2RyRu7XQLg",
  "key36": "2RGTTMVTQRN5J7WQmy9QnmG9BY5xp8QFwejWGor6TL9yQXn8M46qjxcD1RbydSwXLKwwHLvfcwYdx54LTCxRFxax"
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
