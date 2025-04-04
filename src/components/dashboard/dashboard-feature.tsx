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
    "fQu7zK4nGFhXpJSE5hyqi7p5F19gtwsYJxC6i3Vg8pTx9qBxxwkjtdJ5X1bsKS2ATPWaev48HkxeQqheBYWdVov"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5uvQtfTu9dLySPmMZe6mCUjngVqBR1X9GodSd4cfZRWykxWBP4GQPMub6q7CnRi5rWh6QsswXWt9YN9L8wgs3xMv",
  "key1": "5zcHsxKAJzxMQqf3Mhs2YMn9iVMzKWN5pPMsguLPeNkUTCvSgbKvWJF3DA8jg3KjQik6rjY7pXDfveaQdFFaqZg6",
  "key2": "UnToQkhVLRy1iMcVwhikmx9HK5MpQHzSwZebDNKKaqf2reFdhsDkmxZJAK1s9sTGH9NDQCqLYbHviHx2Wjk11ey",
  "key3": "2CG1wBjLyvMnfWWBGjc7gb6D4b4Qci3F4GFT1p3j26voBM4c6EcPKMeo9tEb3c8mhZrwUcnywUGMu1N6zpCrfhp2",
  "key4": "i1UGfEQY6TYmNnSBAtYC7T5ZXVtH8mDpwXduDY1YdPHpLiXzDgYxv2yeZFnTTwU9whR92uiZBjGhsn2LPPYXuUB",
  "key5": "3fM2Gq4Y6NRtuoXPc1fzLUHam9SphUbwgbEkFYJPCbJ3UdCsmfW8wdsUev6m1HK837zRgzVsCCgqaPnCY9fZMBJ6",
  "key6": "64at7n4vEbVHSFz65VgzZhYWLgXpAV1bCSckx3E6Cb8KhLkAui8RfzWhEDmpNMozFH5Bhq1VB977HzrMbvVoN45P",
  "key7": "9UAsgRVmNUa1ZCzDYBi2ZqCjy5FrSwg94bHS7tk5BcQd9HogBesk74tYB27PQRCrQvXbQaEdrdqybf8E6AZJSkV",
  "key8": "LFmkqC2CxFDei8bfnmikSTv6UwPm96dkrQh7zLustCFuFPrUwSdUh3uNEQjaZJ4XnJmitCgqX2tDgq2jBKPdS7R",
  "key9": "2Uzx1iczewb6S74k9yV9thrB5dhGDLxY5x62KorqaZYhXZGriwJSqVWS5x1VReApWFGALxNhE8gQooCjqNANyTen",
  "key10": "2gESVrdWTkAVkjcoWoxVHEHQ3QFG8XP9MB6aR9aVU9hJcR7kW9s7bBEVkSrqujtGVuGYD9hf2LgdAsWrWPShKbie",
  "key11": "47eopJW9LTLtUTm8hqTdav8VjtW8qwarbkxvKRUDsWvcRGNEYhdVNYEHfkaJkfs4bG1jCyyzYZHBgBcMGNWdCrNg",
  "key12": "2mU4Enq6Ne7CNby4oJuFEBi2oA9UWt9bfDhd5yxMW8egkj4u3dySHtMoVrKLMbaGTPnr4THnZdyp7U2STggtbypc",
  "key13": "HfqRxHwddM5r6uoNE64QpShQJBnyJ7oouZGD8VzKUrMc51Gv7GAWuEvUfoxVesUpg98VutXjZoeo4eiWZgCXuek",
  "key14": "2f7nJFveNMqipW8gwWshHi331onEnxdFNLqCt8aFSDebwS8Eo7uZT7mbTn8iDrKZJXidzJeUuUMEwKoAmcABSrhp",
  "key15": "3WGhc2Dw7XwCix4anV6UhThN4mDWE9R5SyTXEmSSArrBVLGnhrCb7K4ss3RP262xiQ7rqB8FjkngT2ohHGow6dpq",
  "key16": "EDTpdj6aaxqJgRYV6TfJPTLFvnwUcRSvxVUoj665Wpkhoz51M28SrE1v6o6za8HLhA2T6o97Qhxn5N6WnNL1B57",
  "key17": "469Gnb429hzfCZVyXxfW58qeLAR6eS3sMcJpJHvauCr5TNZD3ooQ6QiDG9tfXTtG8ifAKnpEzXtcBTvqx1Gpx9Js",
  "key18": "37p2PUh7WCFrAN3HoEXpicKJCsJhW1wRynyGbsiT586WdiquSKXJbtRGGuzA8Tez8McubJfmJcgRu7mj5RcYhnAQ",
  "key19": "2MBuPCeLK9nRFuWJmpMDobmi6Go6BroU7efSWGaQnGwuFJESm7ZAxyQuhGrWpWtqDZVH2ojaJTjQVdyKxs9FHkc3",
  "key20": "2pwQtYJGgWtPn9rnD1Lz3soeyEvrr2fNz8zj1wiDC8W9HULPPiPxtSpxCvyQ1KgDE9sqQirDoA7DBPzDHoKMhKUX",
  "key21": "3iMcDt2YJ9LQck7xn7tUThddD2ExFCAtA9NGwHkDGnAexWNHVjPN7fsQXCyq175PXxFkE54CsxNYUm51EE634cu8",
  "key22": "KySRQ1Vq5PTeGnPjgbjYhKiCqQSvhVy9RiRKK4gLXrcWwmxoxMcYUndd7R14mpkvyZobE5m81sVqBBEfw4Kq8RK",
  "key23": "5YU6xa6aLqjfCR8hvTzvkut58ZGyKSxD1xgigYq1HkaxCKurPMyhTvNs1bZqkSYKbgiB1Rjtj5w8oQquqsrWr5ny",
  "key24": "4rgzqj1NKvK3VQAJemQV3La6o5ybrVDwJsE48NEAdE9zYGCHQzMpRWixy2SKW2cQdhNEUuZGBjbb3eu1aBodmi5k",
  "key25": "4JerF9JtAwShqXMxpE7iR577WFq14n5fhQENqbvkxVmBtNtCrpvZyN4r498drCUUKJRkgkkXc4gheoVM18tnP7Z4",
  "key26": "3xbrHxAsfVdtALthRQvaCsLMytssuQgsPy7hSnSHCHJizFUJxYyUj5Zqx5zFfaT543T5RCdFaXqbg347WusfVXiS",
  "key27": "4Qw6EGv71YquUaaybr8aNXV32L2ie9ZtmFPZ7ADXDgmSRBGHvVc9aTTcjMcmpXLZxhPjizbHVeHbq5EKtY8SexPi",
  "key28": "3qaUSk4mied2Pz949poUbtoVCt5fPwBfx9D1ejipi5W8G1rQPdPTaiQ4hdRGppGnr25PoLGZMhB54YoKJGUU5PiC",
  "key29": "2zSBMn7Sy6GJedHQyvyhwVizjg13jyFtznC6cuh4qjHNN6Q8sJ9snS3JQRZzEp3bVja6xrAWAN9L319VkZHPR4gV",
  "key30": "2v6geb4eiyxGav3H56puf1C2uYsmArSCPgbNmFuqv16ueDKkFsCq6PmhnovZxTES18wdSr5Aes1h3vqHNWRYKJoa",
  "key31": "5c9bDZt3fyXdDMPcLJ81ZeKp351yn4kFdG5Kqs37zWhhA1sdaFbxWBj84s6CLr8KQp877SwJfw5gKtUFRatLjKUW"
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
