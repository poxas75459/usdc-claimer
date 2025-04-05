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
    "8bR5VPopijFg5nZNuVanq3ZAfHNzkfrS1mgfC84VPchUCcmouYohx98aw6z4bFyznQCUQ8Yjm4xc9e6msTokt6j"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38YGMv6DN41F5mHqaRdCTThMX7c3VQELGVd48xUuBDn9wqtj56Yi8uUfS315kpeb7V34wjmUYw8nVYFHwYp9FsbZ",
  "key1": "3fFfpb15Zn6GqNzS2wW1R1rvfACu5tonZdw77Kdep9K6rh8Ndbqksu8w2874HTfcc65QQWKXENCBwBKPZQfEDG2V",
  "key2": "5Z32o2S8JkcfYR1Jif4gR9UVYg7AxvNDZgpN5Mu5CWeUDCmFYh94D6AiBLu4NESfVkbUHWY3uZjYEBATdWHKVJQV",
  "key3": "55W8U4RngiUYsxukAVBPwBNneMb5VNYswXN6M1rZ3C8tzuJTUww8X6yF7ArwLay6xsgAUY7PuJXJm9isSqHBokjx",
  "key4": "4tu4VjQPwUQEH6Sqm6wVZnNUcSg3Xa713VFtTT9onM1ZKaxJDBm1WnsRFTGdHXbNW6Guv4DYkmMPHT4qrjfawAXy",
  "key5": "664fKQvApcXFW2GxC4EHEfwjqD9JukH6oBn7GbBGgoY2kEA7wgm22C74PWSKDK8yjeHS94hmaLGePXgZ7YKkBhBL",
  "key6": "5YbU1TFW2VzTqw9o3W3uNxyyJr3RZhxLPou2GXzZ8821nXPd8DkeY7oPhhCJhg9KYqoknZ1aj7g13hKUqSd4BuqK",
  "key7": "5gX1x6uX5rMcaD3rermTvaFzzbcKsAZRz9wkwqEbFzipUmdJNjsnG4EsQqTzGmHYL3wzQHxYwyp9UkQkhZqhfsVi",
  "key8": "35C2Ei4JyutXA4KBXUShxEoeQpwEMb2zAqGu8KvayzJ4Ddvaavaut3nGqiNM4PCjoYaayo6vU1MNtVfeNzVCHxks",
  "key9": "24NcKLxrQEKjtZtBK8ML7SCzSGBJFTcsTmo9qUxWnY2kTa97tVt7NjkMynPuFgta9Rtb9nBmZqzZUua65Z3EW5pT",
  "key10": "C4izwSy6BpDP14u8H9DDZwSA3rUGtd9RcJTr24VN6qBNEBzhzNPv4CZbT42UsQbMA7xjax6oBr9AwevPo16NZzk",
  "key11": "29LgWXkUwDw7B77S61rBGHN7WVpsVPfue6tC5hVmTKMp8mGECSR3vV6xquKY3tkrgRQw5KWUyt3hmDtjMn9reXSU",
  "key12": "4pPUbbMi1G8bJEcAwXZLnsUdYptGgyreKc6MdwvZt3ryskmjMmk1U81BShfZV9o5LcC8xZyscUDQo46HgwFcBBAe",
  "key13": "zab3m8pHXhAtxewuvEw7rRek2R82h8Ln95iAAVUEvuBv5PWnSDzpVMaQcRfYvdiDwFEbsaFUm97auwevSjsUG2D",
  "key14": "5RZtAMnZs6SsgzdXkWHPqj9Z3hUpsPqjQHnfAuNxCbD5GK1gy29yYVw1dTGYa9q2VozSeAJVttK85asBMZf4FT35",
  "key15": "5TZirGTnPKLG7p5gEdshenQqRE3mFptKJLEzJMCdVnXizFoUB6P9aQ522MT7h8zixJgbCR9iNCZ9xziTXmUUz5dj",
  "key16": "3EFzyQSeZCRxA8dCa5nhJFbWvZ5CNGYXkLTwV5ifExVB3HmedqKSzkLT8BLWeTx1N6DokZ8r4tBVHvuFLh41yrRg",
  "key17": "52VN48HAmRZUuWcAJ1fXJoBSHF3dS8688kAUcASVPDX1iKX4kqUvWNgGW2ndQ8w9kFcA3GRSWWjNmBU3pUrNMRXS",
  "key18": "5BzoZVC7NvAUL2Q5MX1ZU53GMwKEygibUqspeH2so1NeWbyybE2d3UDwnXh1f89zN9TujG1E4u4ZzxgmUJoRTYpJ",
  "key19": "JzgcZAVv4fbFEjYXu5TUeDRu6oGbgSgqSrcZQWRXLVpvBR69Lu8kcZnTiu7Z2GLB4sB8ZsxJxJALcwYH7nmHDb5",
  "key20": "3NKcruxebpwFXUPssAgaJGjEaKMqegzt7pdiKPp7MFrbHRr3rJUZDXRgpXgbiDS7Cm7ELQ6S2Azm77MMcV5T8nuD",
  "key21": "32H1TJfWT1vMcuPJgYSYHhprPBd7bioyLQQDGuUjnyn7GbrXVwvcXQSeqDwPJRHbEKgA416p25jrzmj7qbCUKJva",
  "key22": "4ty5kXBdpgA1nJp93uX9NCRc4QnD7Zpze7U2rMQ7iBKuKZ4eWZ6ihyfoEr41mUcbpZQ6yBhaigGbF9epRHYbpfQS",
  "key23": "4uRYAp7E7usR7U5J6hGahQW35ZVe5SFDVQE6V7bGDpiR8Q3bDgCkZmR4SgbHDxRzLBMqR3abUjbUkcFw4SNAHdtP",
  "key24": "5U8xEZfv51mCNspLPm6EEWFAC7WjgdgYnYYLkqgPz4XCiTc92MbmKpkePjFCjWiPmVR2sKLiSLr4ce4sncTs3Job",
  "key25": "yPuLArYqSUgDiLerqyqmyTdXDQYTtLj2W2SMx7R1zWpYG7Z3Jy4oqeEUemFh9Ghd9AGcEbM6N3mVt1jW7rujAVc",
  "key26": "3mnfFfs5PaZvz4CVPSNnoKmHezU6w9ayHDweXWPPsQZBJxPz235HRbCkrAE7G3WmP9UEDZVC9bpNuzw5GpxcXVrP",
  "key27": "sVrkz1bPwPYwMpp1P11arb921En7oQmqa4Ycjpm9Hv5Hncg5xDE3tP3fRHTMmkSY2FBo8T2PNvusaXp3s7qpvK3",
  "key28": "51UsSp3Av53KNN7Udwp9QvibcPE1TLYb44SgMcNHXdaU7uo4RZ7ikMzBTxpLBNU3Jde5JXAgKc3eakS6ydde9R41",
  "key29": "3RanghUAgvZATfTgVLw4M1dvStPUBUEh8kgHzEmP2mBGX6ndKtwFoRA3NVveQHEcMiEZhUW3rNY7Px7XS4PEUwqH",
  "key30": "HV5z6FoJ4S5vtLzB7nTMqZnPzEWn4oAqcqZWRZgFyDLotxzVktNKyKUb4reAkTb4NGvuf7N2Wxa8HvCJZ3m8r3P",
  "key31": "3amwUf6eQygrdZvndVN9msXrKEufvb3KhDgr7byHmdASzsuUdBc94kauvz4rCHc27vAoVsu1Z8d6fSuGrQ4QyxUJ",
  "key32": "2GRAAngKP8efgHN2qr4wXBiJ3kx5hYptkw66arbPMoEtXyYa971pu9EwMSxbWNMknsjrwKcEpfDovYb5J6ectDeu",
  "key33": "62JHQeBLKkEvGkvHEYCWSBXz3kuGa9U2wGRMQiZmLZmF6BgKN8rhhPFo9TEXde7JumPADk8F5qrDvehcCquzn2fS",
  "key34": "4HitwH4Y9YMYDkMwkqMLxiTALrDNoUaF9ktvk8xfA6srWU3CnoYAqRcsrq495STS1JuPUQskAiywX5VPdJqKQJTn",
  "key35": "4oYAXGUCeWqWCiHM9B4why5iaqgejYDkbM76yPxJKEZAHghAapTWaQ829vc55XSqAEQnjHZbKJ5fDfpoDeaZAjo6",
  "key36": "2ZahwhaieFV5pohwi3ChvzNYKDSscPLYFbi35LVEFeSeHWnW9qFzvBL5huU9jfdBztu1ukvHcRsqArcqdGCaFd1x",
  "key37": "2NQMpKq8KJKzUyWyA4rtJLFHM2J1B2pC6UKDaBihanNp1HVoHsHsu9K5Hz2CL5LZ3tnnY2tRccmbX74FHUpjQ7Fb",
  "key38": "3bzbJ648uE2Zuu7yVRERgsKTiWi9WC6WwDmBvwE4KowuDomgEKaY24j5BEnt5Q5j9vQSyAzv8R5paHAPHrzkwKSd",
  "key39": "3uLQhsMQ8gLTu4FCGgvNCMLqbvE88HbT5tGQaFAtKE2GCqjUc1ZkymgKwBzAuqRhnA87PQHip9164CBdk5rdsH4Z",
  "key40": "3WydJVrKjo2vvBhRV2Vekpuiv8141daXjj8sRFEiVNoXp2jpFcSzLZtQw7Kfz6s2sB9UAcPEZ2XeVyU5KwJhmD3G",
  "key41": "4yrGNFKD497aqb8nuPDNBbgaVcbw3sjRAFNCNBhC1nzxVEesgFi9r6ytzNsNdzkpKLrd1xtTYASYdE5ceeBycbCv",
  "key42": "5oR2N7XkTgETy3aDFxau2j1wGyiASsjjEsCv5K7ARfisgqj8ydiz96kPvaktQbDjtuBct4hkJNZuXLzfxMMMN8mD",
  "key43": "28uhmgtKqX8Yhg6ohMqRGBYkPHWKzKVgeUM9KsrTC3WDU52CcgdopcA1T9Nvo1RBGau4h7SkmaHvPHUrm7NrnEAH"
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
