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
    "3zw83S194MqPruJXxofBkAY5dfkHbS1qL6m6ymfEZgJHT7fkjPjdWf5bBExBffvjzuFKVUa1jXdbXQ9DauLDRjxe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3eFJ9C6T1ythkJ7u6hPTXkHpSSLbxNpFbtqumbu6Nc3UXjnAMQsTDJPphTyVR7pr7WdpVf6QMFoR2tWvPvQF1bcc",
  "key1": "3JFaPhCytmBP9fhkwvMUx9mga32oEJm9MA1CEanok6HSuCcKN6F7uWAjDYfvBH76TTaSF8GXG29yTRHN9KW8GQYH",
  "key2": "396YCAiWR3vs9kmTf4jHoS7qhidoxRhKhtLpdt5JDjNXoHnNDeiL2KrnCHKDMYRe4p1PpVs6G9GA4YwT4LA8X4tu",
  "key3": "NTivnEFQuchzuYN3rEGpaEowQTz6QSTZoqARUk2EqsmAvePDemgt2uAb8yZGaS4yaCbn5rmyJGWnRtdprSvQsdj",
  "key4": "3WGbesXR1p9PB5vrsVXRqHoV1y3NT2wD7Ur4RhDvnx61jY24fY8nkZJrUEbTQzhHrBPJscbkVAdkrr76THQDDrWL",
  "key5": "36ywjdriHo4vAoWFoZshVBbZRtBXayxpArd53zzopPkYgMFvduztUdZnGdpTDS73dxqYfBPWzfa8XqcZcyEquTfK",
  "key6": "2u2vQQDmRjwbNfiqukCrC4yQuymFAu395xxEa1ecZwyYmxfY5SRTtpY12HGLRoFbwqTr423i18xxrsHtLoXp5ZU6",
  "key7": "35bu9hnTg4sax36iwQ9tbUcB5SyXjjh3oLKD3UCCkVFgAUzaDYHTGV3Fg3XaQm8PZLHNm3zHryEcXpQ9EUVVh54i",
  "key8": "2h6LjRc6ZK116Bs41JJR9vh8UUaQxiJ4TuSfhKmNWytejSzqMPXn5XpHkbCbqBepjgUrniU5U95g4o1rQeoWDs3a",
  "key9": "2XtgWttepio2ixjkiLUC3fHpsJih5ADQNqPPWnCgumVNitjTDtKKnAKPJ669fQnkzQ6E9dyJaeh6JAPDFX2HinGH",
  "key10": "3cNhZh8qWauKBJQrdUNoPBfJ6iXUtpQQAn1VHUBoDxS5B6v3DVZm1YkwNV7dtDxsi8W2Tjec6BB8Z1ffUp8UTZvv",
  "key11": "3CK4boxLKTyF3PCWpycjiC9aJZtzZxYvjqw49Jg5n8zNX3zyJLqGZyHmZZu1SVTgNPUuKiem54QHj7N35yGwmkP",
  "key12": "3ZG1EGJd5BLFrDhby6uYPKtAwYbkwY3b9z9tXGmF9wvdkXPdipBGrZZSFbQZfiNSFAiFXVaj4hpihZWtmTh6hngP",
  "key13": "2QtVMhT1JG1H9dsuYJKpmLfd7BgbdQTnuNKPNB64LcAigzhy6A9mRH72wxGHGJXEUZvTn26Jz1zK1NYFsESX7DUQ",
  "key14": "5W4yjW79JSXpjMgZG3cdayLqxVxdwTSpNZKanrLBcHQurVtgen8ciXFqjhFB2KAmWCNi5mZzXFk9R5nF3bQF1nCi",
  "key15": "3UKgmE1R3tC3bgBt8YK6HRx7QaesdpaUcGSyoEc1suu5569mfmM9hZ7377DRdBbd3rHZgX2nDYTaysPsvJNwHkav",
  "key16": "4EvYrHPGYCUZfJGc7fhZiFgQkzLDHLxVa1eMS17QbpxhDdC4VBfytNqmkxxxfjykEcL8uhbpqqjDdYZxdavTHBHx",
  "key17": "3gD3EHLKg2DbYSKGePVCXrvn3wCNnq73tYXBW9N9MfmhYTN45ggV2vTVFKgTTocpDkU8E8HUDVv5ZKJTLWfHXXha",
  "key18": "5UxHdJGfS6VmRZJWyMvD22H312rxPQiWYAtdx6vJYJvUUNh3eX1fy1AaCgqWMvGJWktv6J8BaPBGEDdj9NpJCukd",
  "key19": "4CJfQdpWkbLEVesZFSrKmjgB4eeQe9E26cN2DBejPQT4XPHosQ4P8WcQdsawprLAWvUaJx6jVGQQZLd2zqL4EbQi",
  "key20": "5jSPk1qaMW7t7zRM3zea4V7987WfobJBGbFUQEjdfNjXXBXLjbnWGXvyHUiyyJiAkF5HWRmV6NpNy35hEFzssnvn",
  "key21": "hX8VEdGBxs924GicdR7qjgpMKgXMWFgdrNpoU44PnJrbaAsyfdb2pS6Npwyr6t5HX1Gj8akcpC8mr42nvwEbqQE",
  "key22": "44DSwxwozFGDEwfR3MtnUfyPVvKRDrtCZFnpMe2GVuGtHt6xTkWsGESZfLhFEANpDZtudqN9thnEVf5s3p439erE",
  "key23": "c3ztdBLqCvviUemXRwdUFjZgGMgAMXvzPSDLXoU7pnaLZc4qoxaCfcRoBkedoiBucTagVku5igCf6YVLfgMUE3S",
  "key24": "66a5Ekn5Pj8ANAg2oxPKETU6tqNHznVafJQynFLcwhSu27tr6vU6aU21um5pLu7Mu4r3eEkouWeDEQC3WMJX6GYC"
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
