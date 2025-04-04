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
    "2iRx3haG7yY3zVknpkCntyDxS5GGv5Z1RbB2NWwcgEccGTsgomHoHoBjUP1nVhosLti6xhKTVkfLEciSbtmKWdD4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4xDozpDU6BJBwMmnwmWVShaV85Je5f5yLseWRbUoS5HQfuo2JG5u9SxvUNZwFf2uYi1b3oQqCAVCJ74YiXHf7yE5",
  "key1": "3kjZt5XZt2yFxgNwY9FTZi37gbhsgziYUhuYhtrYozf4afEqUEfGMDmByVmvtZ4r5N8YxW1gbtdJ8rxkuERPq58u",
  "key2": "4hz6PMjzUT7e2vkcn1qXqoK4msn6fTuvdj25uajRK3VVDXUh8xPJN3YpgyfeH3nXzTTjnjBuVsWMKWtEqw2Giv88",
  "key3": "3r3F4NpUNoQYmr1KcvyLgy56QDyWcVZHdLmjk5DJF4r4Hs5kDX33DUNxC6eXDgAf1yui6DQuqfidaYYQxorCTQe7",
  "key4": "2zEkqGDwu6XEjs9hAuY2yn9U2c5RpjAEwSc2j1CwjEy2UsT8af2hjyrFjrdjDZ3mAQ49Ph61Y7keaJEdsX6oEfbg",
  "key5": "4H5kj6BvVwYLyB3eqJzmu4wdszucTziE96Ksau9WVxAh49WJzgvwnusf814JxAChcgBFHwcfyXAmVPkJrZUmijvn",
  "key6": "3gQS362YJ5sS2HuFmGuSm81QTQDH1kforgvS8tdCm1cByJQv7ouPKWCW9fqmJfWHZspUsDTsxFmTvcuecMQ2bjW1",
  "key7": "5h2vZywGps4NS3mtk2ibp8jFxGcAWiUaUtzXFR637JvgihyQMMcGnkoNehDuqHPRJX9LavCV6QibsehwiucmgLeV",
  "key8": "2vT62DArBcq7WqCPT9QH2H5hKaTrQQb25m9Zy8mrXgziv29uRux8d3SvdDgSqqNCJ9XK3GVHznMtCu1SNMgZY4MU",
  "key9": "3RsVWPjDniPJZj3rfyvyARtZnW4qHBcCN5UZQW4R7h8a796RzzL6jcyTqo2KSvd5ydtPaN9oZtyGCTiJ7QBbeQG4",
  "key10": "4RjMxE3hvuEMpu7cQH28M79R3HawfYXXsgvcioAEXgkBDGhm1Q7gZvWfBWiHui8N4daNufVysMczLGBFJNuxiRc6",
  "key11": "2Es4T1FDyRFfc98TVr11rG82maqbRRFPycoRKoW6KgiispHNQgnUb1UtSVzDwGaTifBtKBx9KSBvqVq7Dwv1ZyUH",
  "key12": "5SJmwMVAi83npGQ9VjtpZrKH59nyoA5oYp5ZLsgZRBRjuoavWATkNJQgPzSk2U6AY7XuUhGkf8RE3D8PyYxsBtkS",
  "key13": "3dBvQxsyS9asKuPGBPxQokeXAd9dsNY7kbaxAZdV8KNPSQGwxLMqwbt8ovn5Mf2hYN1uTNPmeBQqgh1Y95cVHeKx",
  "key14": "jpEd4p1UwBscQKuNWgmTujSMYFoMdYUd1LWXbNTNh8rfa6vzd2Cxfgcybs2cQG2rCjxAuMoQmQHCapbvAWGZdHs",
  "key15": "5RVGL8jrqG8N3hYdNvR6xCWCA89afbKJ7M7BbnHPGDP3oEskuSQNc4nPhMUWmYWRSP555xTxQhHLFtGiYgvZftqV",
  "key16": "3HVYJZ96zBxfz37H7RB5wWhL2Vaw6aYm5HN9Ad9wb7ryMHCeYkwVhHeZeBm8KZRSE1a9zrMNRH7FdEkeZ8ETUaPr",
  "key17": "3H1pYAu69kh4s2hE9fWYbpvMpBgF9TLiAUYPYQJnXYww5s4RWgpCuvbuj3vKWanDEpX4rBnVoHHYfFwdGVJpiY84",
  "key18": "5HqL9sREsueEwYVr8nhrwDCrq4yPMsuocC443yXzE16GTXzBsNuNgouT1mSEWxz8kLb9m1mS5iidb8qaV7RkJhmB",
  "key19": "65x5i6H59mWQeimGuPfzA82eJBMycKxquJmJ2mEqb5vgivQTYX1oxzE8fctTwH2TpVLyF35WZtknK99GTg1xMLH",
  "key20": "48tWvUXrh1gqTojJEGdCQ95GqmXQRPWQQQhYbPLFL8tRtQ5rrkjmmDedgFrHgp5oeE8TcwiW3m3VJPL9G46vMLE4",
  "key21": "5XFME89sYygN99e8yCMVNGB4xo2pQndzrsXkjZd5AzxrexVdRENTwSqzq5YGKuXTeEmYG5Qh9Z5BD6xEryfnsMjn",
  "key22": "Q6LePFQYtqwbHs1aefwZ7f2rSMNJGVU6wxGup7pXZKr7ocy5pAVsjDS1mWx4w1xUA4zpLePCiA2PxCZstTQd1Bu",
  "key23": "4LjDnAmbxGmsGPnub1KQ5hUV1bcCaiiKX4UbKTmLDpnd4zcGNMcapqQbn4gL99KP9K3rC2YphATQXkQCZVEeKJGh",
  "key24": "iGdr78cUitVheEh695c5FWJG5AFKaMM76ZSMR39F7m1KtGBXgcpw31Xv3yeK8q8pPyQ8F32Fht6rhttuHFzo5rV",
  "key25": "41jdLPMx9H5NskZeodQx4sKzeAMARiKxh2HtiW8EMint8xk5TgDHCQEprjuHxerWoioG3UcmK4BsUvAGJ2fhosPd",
  "key26": "4mcFeSSZHazWgVJACjGoKZyxhSahQwe1dZA22HVymLaJWwXoqp3S5KJUoYHe9YpSBUcSbh4Ncu4y1RrXADbJHuh3",
  "key27": "2RwMpE8vJ4JMUbFCYp6rwNnZTR9digssY6Z5nLaQxLUmTdQVV23fFhRRzasmTPmwzqYUXBHh6fKFfQiKeqTVW6X9",
  "key28": "4NbizHMwYwiaX7hghnvyecjQPGBDpPmXvsVRNsPZxrYQ82wExqFTLQBCodfoSzn3Q1DqsUZqawTqt7nJvpgbnZif"
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
