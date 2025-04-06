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
    "4itjC4WSnjqqhJ7CPTiAffdQDndUn1TerUbq6qPpUEGrPza6euSmhKKQtrw3DTrtcrYSArtdmE6ZjBhfcEBrvBbW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3CWBZPzzQzq3n1refmksSeoAC2P5VmSTp7Bxjnu5yYd2WyJYtTVR2tun1PLjY6SRMgz5hXVn9sG2gCGrwv157Cjq",
  "key1": "4TXwhoYNBT222hoAPwJ5veQQ2hzHe9EjxaYSDmaX2WFxPxMHg1ZgqKgsCGPuUG4RdgXF97x848b1GAqV21cE2rxQ",
  "key2": "4LA5YTGAMbVLrF5dB2uuVVMJdZvea7wL4Kb1Zpzz2uFnZCTq85zjUd4MgGjmT1Mc7WxCDKCWaJ5gZhzzCtjQJjqF",
  "key3": "3aftbnqC8Ko8cLg276aTgfFQeKWfNJPo3fbJbvZKoCEo64NPEaCwEBQDvidvLAQcdTEUwV5s3VSYpCPnThKxCEKr",
  "key4": "2RH861U4bwAkKYo1G2b8Bq8QtupUgWcfNdWvT7Q3JVAqpjBqceUKger8KfgneWzjhJd5TbfdvkMnGtoscCtZSkvY",
  "key5": "4znR2ak1zfytcKNY8nHpxXcTDfoa4cb7Y4wY5tDmwDihEGcYkkZcZ5Nph6dhnw8GSNiEXBPGHJzJJ41v9ZYte7Q1",
  "key6": "VzPvG8SKiuFvePhokJ9bwbnDb8r3VGMemJbZTKkGsxWXkSPbobCGgpiqxnubUoYooHW6nnkRPUo6cpLh6unqGLp",
  "key7": "4DPfZScP3q41UbWSqTTBjSniQdvojnfphRAEiwPPSTyv8S8LiqE7jmPnFMxFYEET7YuEHLvWdCRaFk2vFjXfLNjb",
  "key8": "4arjHHHNyvMdZE9dCFKpTwYKBNf4TjsX2erEhet4rPEX8WrVxFwMEvXzHoZD37HNCx5beyFBxZhY3erccRtwJf18",
  "key9": "4exBAicH9aEFUFjw4adUbo1vNCYA7QEthXG9r4Wx1uur3SJB8gvup6AGLvasjuT1vkH7To6uMMfPdnhCQS5Jbr79",
  "key10": "2VZZbn8LcvE4ZaGrNHGnjroVHeppwTz1QGWJ129fo1GfpMT7EYgzwALLJeSe4TgaYQSRad2PVGy9jLfXPhmJVrxp",
  "key11": "21e2oTvfNaoGvPCYbywJTaXDV6uebP86uGW9NffGBJ8h1vLcuBtW8r5bRx6iZddUvR61WwNYZ1PshvDbpxfYWAVC",
  "key12": "49iwhvzVyGzTS4aUQYCSp56zosw4w5eixPrscNFtb3ZVbMceofeuy6K3aFTVtN141Nm4UFEzX9tAwTQmHtAzzAUX",
  "key13": "3asvxShjGPqTTeJxwHQDauZMZi4aRueTN2oeGND1Aa1yv2K1n8SSc6cfcbkE3Br4H8CuwGGqqf6fAzC54Mws2uhP",
  "key14": "LWn9h1VfEYgFLRMaxbPkEbLGVzwb4N8TBdBgA18HgnQaeuaqa7mVB92HnKy1AQ1W3HNJ2UxBJht2b9PhUG3NBZd",
  "key15": "RxNmgJtYtv72F7c2g7S3LxzXh55cme1jQsU48ocDmYs2EC9iKnF7wWBQxpymdx95SpZT4GTSM8dLAw4rwGcVofK",
  "key16": "4ygGv92rXBmT3J49kdELpuZJe5HxgRteNHKAZQNWNW351fu1i9htdjftuDVKvx1jrvn7zk6awXfPT3CjktzqU3Dq",
  "key17": "25FFzjokC3ULQhH1rCczs4jL1pBJku5fFSgJfpPs58zwqtaJbN1LN4wyRT7eSpnyL2yAuPc8dUPngee8SU8pHGjx",
  "key18": "J6aUA6upmcC4yw6AJr2kHDtJ6Upit54YCJYRuGunQUvgcg8xLCsPtUjqAgHULoyJCvwKbCQQ8NMywDqBHzx9Ezm",
  "key19": "33tuTdCECKNJoahxGtSYiXTN7gMr6nUdJGnd6QqEbVKR73K7VLiBNnKK4AueCY2cWwe787W3ogeMPPR1W4Lo7GKb",
  "key20": "FhMwWRDkuZHCJHX3eNK4GPNZB988HqAeMJvBpHeN6gQo33K8XLxFw5tF59hFJ8LQLmC4R2ZE5GmiwpPacW4QoUQ",
  "key21": "cfBtyb5exu3p43JNM3iKY2fekEazchXrMk1S4V6t7Q3a3yLP56ZC5tV88GDKxBjhQDe1ZkRxzcbPrwDUqQUnCue",
  "key22": "5zgn5e7KQS7CXvxcBwXgf8g6RDo15HCdY9TGJ23fgkLzfgowRJNgaHxMWR9FmC4TUHeFR6ftsDsoRCEi425psJpd",
  "key23": "3LYGfQXTQWYbyuQai47B2G8AFMMCzdozJmuR3gYghH5z2s7nUFRsB6hcqH3jQJSgVAWs5W9XZkd4aq1cSETiiHQ2",
  "key24": "2Dibw4BXygEK6Aci1z4A5EdnbY8gorLhwjuRAc2aWHLX7ndBbm3SkQorX71AJFZM7jTK1HwuBh5n2UVyadUtBknZ"
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
