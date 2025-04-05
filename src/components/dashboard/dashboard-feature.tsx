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
    "44mnWTBAeLvEqzmw4ua5zyYvqCMN8zQindUeeXsDyr3qSToR3ZYu3t5GcoVBMwiRj8mUS3NyFr1CfBmVaSrGqhtn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63755AnhXGnmGVSEZa2DQ8fV3xBijtSnJET62UNBqDngWqvcZHbR6FByRrGWXqAn2uR3ZgQcUiXwmNd6nrkSnqUX",
  "key1": "25gmLMfNjG5x4NC6QV6LREoGfR4S1p8m2webUHUtjqiS7u75GwqBxu8YcYdSxUGUngtNqTUewxyDp7mkjCCbqYHd",
  "key2": "4K92g7tvQKrMiA99EsDGjfADPJTUntALwY6zjnAESMj4BhjjRrCDvVHFawyAXJGLbMt7jEGYf6WGDDZVbBhyCcPp",
  "key3": "2JFgN2fMMsKw4MGcyuTWKuTGdisXKKoioQQ6jt2aSXNT1fHGt4D2LMqcMY9XhpyvWtZPMcSqdPVNYjMKvmRGNRkR",
  "key4": "3NdxAPVyMfC4UyH1pWk4aybAhyfVS88JKrEWcBScHVgbLVFTR4QfC8uATGWYXhP9ra5YvGpibdpBYfEF2MxWrDpT",
  "key5": "5zkTMxgEc2dhCemQTfq5vQjm2k8JqjYfcrfYmq1yYN1HoLgy86ZTDGvRRDKtoEbWs7TWNh6Fp91ABbWv7jhG5dxj",
  "key6": "3KLh4KVX1HWPH5E1NfPtQyz4vTxsRGyE72q1pahPUpByHqYobjAsT7sNjG3CWuyeENFPKGQ1bWm3BTHdx7ePhBoi",
  "key7": "4d8cUWt177vokwUvx2mXqvoksMvQUgqSL1gxMtqHh85iwFekWVVWUkHZf8LCMwDXeBtafEyD8aZ3ym7g3UHKu1Y9",
  "key8": "5TJ7zR7viSA4qiCwpKULd1DSLsb5kHAkUmtAep9zWgAfv8rNUGgJJ9L6ubMzy7oMahYnNHVUh9T9af5GfgjLEcnU",
  "key9": "4pdCGSm5SfTqDwNMx8ifWfmZ8KHiCKDjEKAZjU1zsPTyJqs3nGFa9ejk5X3AKK6WADyTXoVEYRhrQbSctBrnkdTM",
  "key10": "7HFWjwVvhxehUysHypda9Ms4cUDfZSWDRXgby3u8TRZxkrK85ZxQcy4d16SfTWFAvpQtJ4wkDnaDwSWcUw5DXZW",
  "key11": "2pzPcdLEiLWuKgbxL5zFtYZfC9qVFaBjhBFPbTS81zWbdWvxiDQVYFdiZgG3qqZ3idn4miCGM8sWAtMrRGaXcDa",
  "key12": "5xCUhqh7VHi3jq9QpbdGZnsNPwtXB8tP6EoTDATEqWZW2hs2Ciw94ig6LDNmqFXddTRCZDdRY5aa9Xeghs6sAkiK",
  "key13": "4ontKCw5sStQrAQJM16WfU4Q2eHbztZzFQVWGP17u3gDWK4nukvVo7Bmp6C2rZDHqd2ghNZoq6TYxhTSCHjba3R7",
  "key14": "f4KBMgbjCoAxrYHHRrb9dHY8QvqXnBwVMEXBB2RoHuAtBUM23GxTrfvzb6D9bEKP2MVYJqmbBZvrzeRLeXYETit",
  "key15": "oJAiSWzNXxWdkGM9j83uTr9QVW7bLekUesKCv2C8N4Ta5bdkvHWdZFtX6mdnwe7pCdzS66uQLrZRrhx8yz9frAn",
  "key16": "2aC5mkHzgPhandYLUyjBpFCMiLDqMUzUAUTuVKQMFfMGJXEybDzqyagVaGUhERqbrtCPfj4vppmiRTfMyu3r3J7z",
  "key17": "5eQFvbt94DWJLMLNzZQZxBU5awkyFo5FdhJW9FAyVbuNX4EKLNXmYAUkoz82RAtARiJw5wZCkA6pD5CEFhQZpWJS",
  "key18": "4Vm7nYSyVu8Q3L7WXsMGHmcj4zc8r75tatpAQtXxmdAdtAzs2CbLfBkAjSUZN6KSzfGRXYMEH2CWM7goXZnzqEUA",
  "key19": "3S85sCa6WFbRx2ne92mtDHoypAALDXYRp6Ch1T8Y9Q85uKm8UaPtKkTvTjuANotYqVxbeYoXvm8i27m8VVD6zdxF",
  "key20": "54ZfR3UajTUsdrBMksEXHpo3cGxEJf2VR7x82FtCjvfjNvtXs3ngvNSvf6FZteeqtkMERaLfhrvorz8mandBjXmF",
  "key21": "27wcVj2gaSQiAffcWtZzzazjJxL9eJdiAEi28eiTuL9duiTA2MyiKdLGXboY3B3xdxvfzsx4bMnXoeKf75P4AZ4r",
  "key22": "27gQTRmAXRRQuSHiGamMVyZwSM99dpCxM9dPaXh7WmCxQcMtU74BjYrdPYwzbrXKh1jLz48MCdWGFx9weWuNtzq9",
  "key23": "4eP2a3JbBRfZ9RhKzHN4EF5tViyxi4cD7WZ2SWg5XcVH6u7FJJoW7ht2v8eny9LALLK4uSjGUWNcWQSSawEhQPSd",
  "key24": "2oapYf5P6epxdU9b8MRVVADxNp2CK7Ls8aN3KpQBbFTQgmFp6hNgxDdKJhddaUBMBfmnZaHch6LqSQRBkJmz2b8Z",
  "key25": "62Kqbk8KnRf2fynQVLiSHzNdxP8WvdSfNwQJhPa59zk8P7XYNpa6pz7dZ2NkZNRVGUYeE2A6sJaBvFeAGYTvQeiK",
  "key26": "dy8gcY2vxSjiXSMHXMzFcVWgtxUizxQ3wpAfQCUhf7kWEC2LM6sJ5YfmujCQyZR58FawYdvn9W5CVkrVk3jUdy2",
  "key27": "34M5UpANLguVZs8cyQfBRwAhuPwtY6S7u3rRJDp4xm1PqNEGgHaXNNp9izgVrJaWCmqC7uFZVZuHsaS7RtY9woPq",
  "key28": "4texSAwrbGmFunsg7e4ZRJVf8DgTectKhD5o86R8KvtPCqaEhZzY6dMK4f9VDis13XE7mGUqXHWGM34GYhuj1zuQ",
  "key29": "2mXVavxWAbVwz2EMtbgcWhpAcHg3bPGtzTbM5RDuU3PYdeSRuLFj6Sg5sKcEGg72D42pRS1rtU4HaJ3DKfBQzzPw"
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
