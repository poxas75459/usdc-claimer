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
    "DRRcU8jJGtRsNLW5nq4hApsqVe34jE4KgY1Nbv8DnXNesXT7KFytKWCcA58ttcowtum6QnHQW9Fsp5ULMZ9UcYN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "feX5hXXePqa6YeMUEZN1W525fTo25wELG9vdnNrHWSTw9qsUbBSrnrCXkLSzTBjK2131dtihu6KiRzpuX2dNT3X",
  "key1": "2R9Bv9rJjWuEuo4Rf5oARceACVfPSMuTB7i3r7pAfwwXs5qimbkzMGoCA1yWzQrbehqzCDVgeuZ9cVcLwL6bbqdz",
  "key2": "4zBaNUXMWnQrCAvwNK6FBt2MLNkbsSiSMcGT7Yj2cazQtuGRZhMQw7jEv6h3U6268SqzNN1dUxvWRqg8VbagFMkG",
  "key3": "4yy5pAhUfAHuFQ1YJB38565tHDvro8eUK8KoyB4FAVu3V5jyVsroiSFgGvUkwJXfyVQ7itfobBchrQ12UQ3Zaoea",
  "key4": "4tVeDTRtjeRLHehBEYervXgcSyhSknNRxdrQb52EhtL9KwJSMDMiE2T4kjLqjHSyWv8Xcjw3mjCxFsrraKbugfrZ",
  "key5": "g13zC2uxvWsoMrbfkQn8vjGUP33tEjhzUG9PvnfP9Pyj2sFi3yNQxm6fCMmF1FNMWzABC7rqkS1EcXDaUqv2Exy",
  "key6": "2GLipHZBPn8SnT4Xu58LGjE3hAa6cAysfDZ5dsC7BaDBBTeZMnhhV1taLHwR3xrdEWDH73K9KWwPZi2AgBRSvGbG",
  "key7": "4o5eFQU79fTn1aYpDqJtRxwm7fkz3GJhhckwn8W95Rr27ZC9eR577n2afZoujPSYb9uwecbYSP4PVQJyvPUGuMSU",
  "key8": "rpGVqY7Vx9NA8fHQGvGaZFELDDmdDeKnq97SAwbucj4topjK2fdjZT7jnR11iLd17MFXAVyzWwYoEXMZufDnVT8",
  "key9": "2Hg7bDwu2LVowPGSFrynt4fNpBvmS8CyiC5m2mqtKoBuPMjUoMB2aL1hdmxYLCZFZ9X5NqUPP451VFcgfUZEWQsq",
  "key10": "Z51NpkNnmmoYJBtVfko9L3btbp6c1UvhFtTXj9ivHnoLEDLKvWVVbPHk9D1sb5gf1jJoXL8TGMAfR3NPV3zR6ed",
  "key11": "eEWgaHLkBQYBScHPU7b9H1LJUhqu53gDK7ENxxphCv2xjkNVNZL1uk8Pqf8hVmUeBbDzvCAwKdy4Nzb8H9YyTiD",
  "key12": "4ySQMucuEZW8jRu5jJfoMpvz5ZYLSu3GTUEhAzaiJbm4nxkAYF5DgicWtoDqxVfVAXeS83dCF29JFEQQAnHekgx7",
  "key13": "ffYngjXNtFW1mpmeRza4Gq35bGFoftsLPfqpYdMCgRcSWjmmezaKTmBmP1M3J9GZhsGoCQwQaC55gM6qoVmzxyf",
  "key14": "297NxPuqFeP7qTCCBwZWGwcV3bcW2kYf2TZxjNtnjaUf1fSmdcXccwTsz91i7toVmEqqgUsnwjBCub1cXAvQVBi4",
  "key15": "3m7RiDTR3zxrRsjfzPQc6D81NLRR8LpPopCMZ1y43hSunTuq1TbzrjgsHtHDM9aJZ9nP4M6zHrHzMFXUDL1Mkzbr",
  "key16": "5XcN4tik3mYDMMe7BLWdhXkWvXeNYxzLT1x8FfQkoX2M5Cr3DT5HPQBzoi9CcdYR6zrKK9SJDSK6MRVLDSFyERNU",
  "key17": "3bhgyeYjBjgBTtKBTbynC7TcyFb8pWoMibsfVjZru4ZDK1MDWJP6f9Q6v5HM1hHDKLubTewdokzyeBPuuHK7VL4M",
  "key18": "2dM3kXKQGYs55UVdSsXSiyWsvV27Fq4x295sF5Vy3ZaFstEvhwWBGtV9cpqQeXq8DeAn3RHzDRpAGhZ1nfZCL3x7",
  "key19": "2qsK5kPWsjHKkd9xixQVwbCjy9EkGa4CsRAcV8hNwcrw11Lm9riXbuttDyFPFj34bZwBj2GMUewWVMSzaxS57A8c",
  "key20": "3FzZtK5x4TY66o3oibMsSB27fEuKQDAzAPVBo5ufBEbVk8VVZZ5cYxFyacpy6UdNEa1LYQtEmNjv463KaLhcVBtP",
  "key21": "5Qiiv3JNk2c4tjD6uAgbM6MQM2qEN1bDZmQeKwcnurAJkrCv2c2sLfFJZFJhRc7A7V64ofcqyAxZEu3Qbjt1ZX4s",
  "key22": "35C9ewm6cBtNFGaRtV4b5C188GjPKt2tpNRAqTXTZiXSf2Vm4apmk3rpagn5NVi1cxxjzM1pTV13gmypEBBLdqAM",
  "key23": "3ZfcJsbC9opGTLQ4n2YYD3oh8PwTpyuvctYqd9m39ZfuWa2HNehDTwVEGicgUBVoGjZ7fpNGbvieGKXdH3A2E83S",
  "key24": "61tbnuVWT9eUN7PYiH19zr2HA5xuVk1wEbcXUwtf87rs353rJCpDHamQ4k75GtEcikgSrxzrnPb2XMSV3usU63Hw",
  "key25": "5ALxiqTegWSsEHNFBhwB6P3nh3qEH89VYZMTjDVS8PHnB5E9qAkzvf3X9Rb3oGdjWbjNjAL2rguDkHNmLyB7ijiG",
  "key26": "Z3t2EpsL8c6Ak6p2LESDfybPzVfvoUrBrBRnmxSeo8ThZSBnthTHQs2Tuc5f1mA6duo2z71RhfmPucXnmM5tpnD",
  "key27": "4o9dhhrkNyFZ2o2jqYh6icDioMZnWAx5vqUSCS8wcVwD1bqjtTyMzKshgbCx5CY2MTaAoE9VykF7S3A3B1Uv28ar",
  "key28": "pWY3XJDTfdfsAu7HACTN1GPstbucNhxQvuMNB8x2bcWa4FrXgeSTS7A4ECf3vWmiFsfexTB2cewDGtAYk75YwEa",
  "key29": "3TyPfoF3iUMzLppRMAmHFQ8qoSsv3aGkM6CZaVtqzmxn7iTQcQyuWPLM3zRGPBffxL2XRjCDuEKGJYX57sJvUgdG"
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
