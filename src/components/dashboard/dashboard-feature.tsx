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
    "3i16ykqKvayKbxpg3jJ4QKn3RAxtw4j5hXzRQahyRUSK3KRZXLgeFdM5Fc6gp7LJnVaqtcccUfR2EaCwJmXTWbZU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Nvs4N79DSxn99qBZRyAbWWYApRHYM9261622yh9VWXAdNskF3QEYA2Wk2Cig3BmQMHFLRRJywwgCLwaFPEJnkvv",
  "key1": "3XFRRrdTxuJUS5JP87ef3x4sjuVopyFy4bXWCGp36Cfz23Y4BK7R5xN7PjaRcRRpgE2JKcrL1izGEE8AazNAtYFq",
  "key2": "pPGVdVkTznbeD1cHmFbZGgsWNNEk3X982gz7NdCjBY2RwxZDE7nWRY9oaUsvBXKQ3wVBqutfEodWweaccDZ1PcQ",
  "key3": "2j6su3VbTUW3onGjgxzvX4jkfJ2JFzEHRZiyDcQkc1yiStdqurkgcjxBGzMJQfCDkq9ivw7ee1HQPi1dRQDSYrxW",
  "key4": "5sFC65zxNCtDw7TXhHT6bsv2dAVt8qMR5k2k7iK9eVkUNxffnWYAi2eYEkFbNgq7qpGPJMKg3f3TMGXwjPwyRNL7",
  "key5": "uivhLtL3gDa8sg5v5uRQDxHpruT11NYvYMvx7imGPSEFpBgSk9xw2VLgGTsoK8vYnfjYoDMGP44eYmX8zoMWE2p",
  "key6": "MdRQtzagUY4hB6vwCGo76WGLgDDW9BfLn6H13gbovAMEXWTuGdv73juv8pRzWZCjMBdMCQLHQPWXPXoUTEwiW7S",
  "key7": "5nHH8isdxpzNGBEo238iv41p86DbP8Uwk9C2aoW6TFWLVYT2w1cnroFwFP9TaBY1dNz637ojd82P8DosTLeNxGcG",
  "key8": "2fp3ifY2HTUCKyXrABbiKwcL7ZQM7o6LtKV1KP1r8fkZoDz2ezhr33RMK8SW88eg8sPkRYXGHUfTTwXsMi4ZRq7Y",
  "key9": "4tvA1wBVG4fqqoBzhJnzSSrrYJs8ednmy3EQWJTCgEzUFNAkFd4XCCaGHB7hBj6U8Y5S9XBXUEafsetd8FTgLwws",
  "key10": "EAwkKfxjA18hpQFjo1ZMqyL1vEzrnF5MNwHYtHCFJiwwrvbYWAwG63hnmryxQjqDfYfE9EjaD3Ghxxyp5C2nmtq",
  "key11": "4LpZw2sgakEAt85P4Tp73GPC51UTYjiSV67pt77Rc3XZfyqby2xxuYGDaSraSt3zPxHie3TqJzqLDxmkCXJadoTq",
  "key12": "21RdHWvqp5UvGPa4vuLztDe2T5V1T85ZTdoYu14N5jV6Lk68gKK7nysdrke8MBozhe4Czb9S1JwogELtJ7ARX6A3",
  "key13": "59tVY2TSSQY7ZEpp9WPPkmDFT1poqV86GNxmoAMpNmwsZsiYevdjraReQ7Z8dujbkx6GML8QTRmHDDzqAsupchSn",
  "key14": "5Y1kc6qMNyPyXmrbwc8xtDzcdnL9Ek672DQZoFtM9E37MDzQGMmkKcW7LBPp1i21PQKGzx4GSmz2By9ZkgP1XjhJ",
  "key15": "553BfrpqJZtnjMRj6t58nm9GGiLB71FX5A4M3KCK6wVFz5cbJDsnav81zob1mLMNBwo4zvKDGavjHXTMF2wnAXdN",
  "key16": "3NNqDQJX28XaKy9b5AJvSfEbKK7fniZeL7FfuMNPNirpN3aQkr5wsaeBtPYS4jMWLzvRGyv2vtvF8mtWQUCDNNCg",
  "key17": "2Q26pYUVoLFJ1xurxnNn1naFpDwHCj4fQo1mF2tjFXatq5k197zwm84iY5svPvRSof1c9KTCeknSEK2wSYPn7CNv",
  "key18": "5MxxWaiXJUtiNScNbgnUPBjasc9aQkCmVbCHWXWqg8tUpRrVMCdQFkfMDVibHtHL628DgqU2hLCRfiF4WvC5CdYK",
  "key19": "Cn4PCaPJtAekgN9FRVkNkmnBKAiPWgW3899U8U1CE4AAHtargDH5q6uw76UcaQkaD9YEnwrrvBYsz3Dq5xFTky3",
  "key20": "W7wPMNkz8ZhSKAoy6Jp2f2jdim8HkFzTwmTR316nmENXsUV3qYv6FQSQDAwrWJr2Pk1cmxtWjmmHM6dacSs9R68",
  "key21": "29bRv3CQPcJnYQExuAepHPB2eaFwvep6B4hcuxoH8YeoEePqnwjs5zi4q7ckXQwo1ZxNBMK56fr5KvrPMXfawfN6",
  "key22": "vXM6iqKDtswGAFs36kPpJTJHxVuBZtSCboD83dF6kotnPbZiAL2k83xUJLYftAcJjvQpbHUSspWznM74G2PS2ST",
  "key23": "4DNbh2jTauYzX966PNgdxLPKvLQkNYF4L4YAMiQKVaSUHYCF6Nbnpve5nmCSLGkVADJytJvE119xurFtmt9SskFW",
  "key24": "4VXB1EfQ8vyvq4wumAuASwv1J8C1xSyZPxQ9e4aueEebq434CFLSS9zUkjnACePLQhQABa5YiBCHpss7LzVmZTvm",
  "key25": "3vnZdw6zWbS4Lf28R4VVGWGE3Xz2MMDpsMMkGNrARYPDnMqENb5SDBr3hYjpqxkkptuH7EwV1qEd5mvZvKstjNNX",
  "key26": "4V4a782mCjghxSyA8DCVgi3VCT3Q243vsXeq5q66mSpX79czmrh3VAdvVsMEnGYWpSQTRDW4UErENkvNnTwo2tdV",
  "key27": "4pefi2Znu2CrAZdn1DvuYMgpEp5XQWoMNXCQEsHJWqL6q8woJvrKgjsdJoD2bgVaziJTSPhTpw7UBWpJzc8Qzh1v",
  "key28": "2EUBpBFyfSvMuzVaDvSEsjWEzAK6yiEVoqbeVev36dyK69fSuqWrkXBh3xHy6ZcUuTuthFi8Hr15tWN1VQ8KSPC3",
  "key29": "5b41KyHy18jFFbtqmVKCMCrNKbKgBo35z4LF42opZxjE9me5jQTtbLExkUKWXKLRs7BoUbJMNVkkcvQQogW1N2u3",
  "key30": "39AawGVxxYPki1CS1j4CaK9ffu46s5uWSvFVNd5v1NgYjHZ1VwUYjzLzkCp1PiVYfA5yNtqS7tTSm1Q1FfmMQq6c",
  "key31": "v21fgZApVsc1kZCTP46GLFseC2KMYZYr6jbPvcuffN3XrrQvn4DQK9orMRSJEWoWPoLGsXYXacQkyckGzrEC4b1"
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
