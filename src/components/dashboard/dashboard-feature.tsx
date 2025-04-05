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
    "Vgx4BiYVww2Bb7KcEz7aZyqagJjX8khp7wjtcUx5RidwbngwE6dyghx2ZYXQnZ4ssgBDKMZsmtrvCuL3bW5ouKo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3gCGuaeGgGP7HjTGjXaKUM6x1Uw8TcgfTeUYkZQTKLRie2zSE4WrfzrmCC3JDWmUvDJYXxiJPRSJMYpxwwHoNEro",
  "key1": "3Hd4yasqPRUd9iTr9vekXTtopWSUGjVeDFRmmbhjy7LbUaVDstZECUu4eEn8fYYmpXtBUgqtV5u9HdijuQ6VzubX",
  "key2": "4QwWATs9U82guw4X2XtHNSgDk7LBLpe9d595xU2g1iPxV5Hiqdm5H89UYfvyZ9MevroMoLwfrN1vgPnS7TcN1PMR",
  "key3": "5GhxfXNf42oK2k5TS9CiXPb2PXUJTo5xLTfUAwMQjMdDP2hF9m2b5FCEB7Lq2x8Faxkk5gZuii6wf9hap5bVrMGj",
  "key4": "GMhTNWqFsQaggdXhYTdCCcW54akdopSLjUbNmb6MpXb8Ji5DTLjHpPQNz3zzYX73MKNbDYYXDYEuV9AN28j3FYE",
  "key5": "2BS7hgENRtyEFvCcHLU9zoKGWAM5BuAp58YF7zbewubHjxgS5aMGCX13JXZam3iTLmiSWwmR48cgcEHHN1kKRmB5",
  "key6": "5tajpCdWHZwuxyPBqkPp8RvPV77WWGqKZ6mJwdNt2p3Qr8P2vDuvpPEKiAfW1LgudCfj8SLRGe488Z66Co43b65V",
  "key7": "3FyyPobtSbrbXveGFpqTxtNWRQTTeiEL5w8vSZBsf4bDFC5c3LjyFkZKcYQG8t63LhxXwmWjMHWfT7AxhN3rcdFa",
  "key8": "3tYyftEHKvDpqb1UjJXBBHjPTsdf1wC3kh52WTiYxsVpiUtKZuZZzNdZaNz6v2cBUUV98Pe8XBxzafnw7671VNtV",
  "key9": "5ZKEheorGZLWFXBkRobEdrHvQ9Xi9ESqnxJ4jM8a5SiP6RPbU2gXenURYeRxPZc94Qiv5MsVae2edwzgq6Gd7T8x",
  "key10": "Xnqv6fAYRftqbu4GiD8JRHucrPaXhF4a1iMzo9eAXQK9XKrCWtuqMSQdLmq4ZUxVUSA2f1samt56ejahn194hvQ",
  "key11": "38e4D57QUr8UDCLnXvTFitdn6ju4n4aKHCvypuAPogRTfB2xQfWrtmRNv69nVChJamSkUZfcArmtgQgBHiYxCuut",
  "key12": "5qNh21kK5JAUeNe9bhKHY8znF281mgrVoQVNVmbdEvXe2SXBejiUxPcfgEQrbXVkdKcHZoxD8i2jB6LssYN3mYUA",
  "key13": "3cpsZRrTpduUWBmRtgcEiFDWWPXx7WGcfPrQdct861p86FFBUdu1wnSbRkjXLUU2XQftPovcj6Dim9wz7xj3Y5Cp",
  "key14": "4iTEzEET22yMocJqW81eqBh6ekDmfT6Bw4koY3qKrqsrHVikwdPgPSgMPZ61oyKpnUBrgX7EhiHco2gFqmmSKbFs",
  "key15": "3JBjtDXkqd3NZZnWU9o39EirLWsVc7UtDvqFiTJN49BF2bgTmnsz51er8szV5biCP41ujbWFPapBgs444xhvZy2b",
  "key16": "2jj7iaqtSkHNvYmoDUzhZ11x589JAbwALed1WKGvo3KHig4xKqgTXySfXkEbm27g3xVHRX3zYHrTLEuuzjfmGAST",
  "key17": "4akBZJixHcSFKMB1HgePwzTaShNARFFQbByv1tXjGmdNrYLzP75wU5LkhQWWwymxVqP7U9gYnoEpRrbYNRhjweCL",
  "key18": "5B1bZRYvuq8KchPXRtAwCBKwYxcqg5ysqW2GnAdyXJNQKvdrpiwSNiPchHJjf9Msc14327bqz7Lk8Tjf1A3ShxwZ",
  "key19": "3YNZBzfdeDF5qgoxDPLAgS5fwfP6CJw5mudGNR1NgbjEDgaJM9R147SnD26hEM64yDvKavd6Lf4dBnyLWjB728ND",
  "key20": "4d1VHjYjv2rL615G7XeYFrqvt5dXEjYDi5u2jd9W7wy2pX3RcMokxqh28nh9LT1Hb1VD1mnDMagYyD25kUJrYszT",
  "key21": "xpjDVNvhHCKuSkJDYbHEMtPNvq5w9SzZkUEEamN7LGw1SgP3y1ZT8Eno6gV1n7xZJRT9185P4fAmHsRjHSCMoaa",
  "key22": "36DNspr9CcwZ2L3iQQiiyD5nmXFNs7xoqyfHjF6DjtkydhCnis7gkpuVHs35NbEKKrhAt2ywc1UNQia2GekXpYV",
  "key23": "4k7kVbCp7dYzJNUqT7hR4nqJ9iwECQzuraFL1MehB2CKpRQ4NtTKTL7n4KfiYUVnuB5LqUKeXdSbLf5vGp8K4huZ",
  "key24": "52qzfcDFBnqTwWv97jdHNevibTYy4WRgiuo2sorr3Ts5ZYzR1qhj6Z64sJjJEzuJcdvicj5s3jsPhggM2JA65sZB",
  "key25": "2t5oxJWg7D5sBLwviYEprQHp38KYiJwUn237HtTo5ujYairF3Tsa2PX38FWcd95BTQZiXKnL828siizyAXbMtM9F",
  "key26": "4dBqBM9HBKNP1gpCBJ5VaG1RpKwFW3hhTTk1CqLWLyXYAfDBErDX6P8Yp16CangVk7rPpk6jD2W9rj7XWwbfeAeW",
  "key27": "4ByejLLUFwKpRuGYwG73hECQZZPiS3sEqB7LQPSR52n41Q9cUQQyWmVyRtLUu2Cfu8B2x8VKAMSwhZcUAiv2ddgT",
  "key28": "hcK4GePLXq5u816LSHCMh7TWSqGntWXm6tkVphCSdd5aGLjWE8F3rbfXB1gGZgd9M22AoeGqLccRYUbeFTMSz6C"
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
