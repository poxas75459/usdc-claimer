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
    "3PpLYJZQJeJVCbpKM6VPEu3Zo2VcUH8Jst8W8iBdHpPFTuVYhjcek7aMQzKQzth4XhK7ccVM7rTGxZMBs1QNoDWM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Coda4iLdn7JiQkJWgBCGesbKDjSPSSTmrHCpHDis5DUZbiP7aoRzxwdva6QNtdLxopezmjaKokRJWSrPP5SZXN5",
  "key1": "28akv6Uv7mGoKCPiYCPfpdmMYNWyGJkhEPkxeg5rJC27WQ7VxE1PgkSSNyYiVH26iiGmmg7ytUJM5x8WXbKpEuKh",
  "key2": "2g8cGY7tQkvy4YBA5FRJ3JCbaWncwp3RQk48yT3NPATWJTqJrRLHB8K6AUmHuxrX42YipJi7hd2d21KHtRiR3A6c",
  "key3": "2bhGUiqEQ6fJKbaM3P1nqJixf9wkXG3aMdKrkoJYfSAHZK7GPHvv5x7diXib7dHx4RxZVfEugQz6rYAyANuDXgeW",
  "key4": "3SEXeBbsPCXdKq9gEmhgPyyTDfgqGJTeu4qWqpn6iyS3hxygRGhfRE23Uk9ipw5bQ8RLutM7vj15UpaH8ftNHqFm",
  "key5": "4kZNXSfTScBBUcQw6C9dHA8vUr8ddJs9j8qqKLcXNKnQ9bC3hJQh7t4ifTLig4ezfX4EfTgZSZLnrFFWuUcXTJJP",
  "key6": "5DZYsqzMY5TMnpnrMH7KCg9Fpq3VGmYmh1nuz3arR8RtDEyJdL5MaMq2fQYZG1i7M7jPGZRuWeg8fqnThHneJ7ob",
  "key7": "YzeNWga5CDku4h4ipzNHW7Fv7zXLHP13KjY8SjjpKgzy4KLUMLacPHcNbJs1Dpg6zeyHG58GBgvD48BTJjFhwqg",
  "key8": "4A55ExpMo4qLg8ZdTdQuwzQ5Zi6xo9MJPmnBXu9FtqLNDzx5GcKZM13b1PuVNSojJ6N2HPUSVTYCksDWkJkdBWKf",
  "key9": "4oWf5eagtyyqMpuq7ad9cPDx8DQP4yiuGxVNejjbAupRaP4jt53sF2VHvrUgaVNJwg4LAXBkdTe85aP8X3X4ondo",
  "key10": "anV9Mqa7JYF59tcnFhwsVJCYubTrTu2FHmH8r8wzmkaS1YFvFXHr4qEF4em6bY6BHpKD1HrSPCkUqeNWYpivubj",
  "key11": "RHdo1pRfXcbGRe6psAQ4JSBD7fMHpWxcuUxu6LBfUM2eqsK6sbRmJwTa16tEJ5grrvuyJfwNEfSYRjwmQgD9NKW",
  "key12": "5v65roppAoNJsvTTCxZz7r1KkuPK7uWcDRHSB73vYDS2MU7axoX1wHCicN4aof9mvSB4gU8mV5AvKu5AxgKirGfp",
  "key13": "5CdMn9cS9mKnksGaS9K5qrqtnUjHcnD1hqBYef43ga2qHiimiYR3gJcTCyHVWTjTzTWR7TD9WKMzdNLHhqP6AuPv",
  "key14": "4yuQgrazkw6Qk1R2RkC4oJpsimp26rKHScMJxznuSKQdhuuEoB1PzPfb5zdUw9KET2WxQeCYJG7hoA8KLGU1G7PC",
  "key15": "iNKv8ReKwexp7CWwQaS9GEakdtJZxfboNFuYVsXLjH5iASt5XfHoThZazrZxLYYFuD5xuE7Yge1ybhpVMNUW8HD",
  "key16": "nLEaf19XJnS2Xwn7qtpCqn6tz8sKxkNLuLQaupFwZfDsDkXsmY7De73XiTyFckyewxTU2s8mjWCkgJBBhWbVmtR",
  "key17": "mAvv3uXv7wCA9qyrfcA6CzgMJaGZK3VZPhReTe2R78HXr8aLmWvBTL5odddYJaVk9ovY6RGN9JdpTZEKttnGgK4",
  "key18": "4FHJm8ZD1f1eKHCY3ocqpa3iWU3EPh3KXeSz2n7j1ZSQ5EoTrBbEyoszpXUTgV9atVx9X5CsgV9HF3Nfeqo1y18f",
  "key19": "2dd38UiPwzMecxxiqVFbXQ6nrqK68YZWA8ePn45NG5WzvCzD8aZFvmUH6w5LU9K243p69xSsovmdsmPBi9ABurEP",
  "key20": "3ak3p9yAMUX9QJQgHM7WV4NVTztRRNC6x8mB1nD8TAS1Fgbzwncfs3DtuM7b6DKeaikHoPv2kxHbsi5Q1qFuq1iT",
  "key21": "3U9f4bXF4PNmQJGZWaBRFCV5etfmJPBJT1AKgmx3JZBT7q1H8NdY1bmwC43EhTpUdTuGc38Xmjb8Ywfe9AqUzX5J",
  "key22": "owyee5Fkv3fpZJoTxuCBz1gxiBVL4EqAmoVxZqP1Vv9S7f89QirVZtB1UofVzwi2DtrRzBMiT8rfMgLhvp2Kwfz",
  "key23": "4Quj4sn48SWPVWrUniT4gLR3Vy1gc1f6KW7YC6RMYaYuofdgtctj1NCy1e587GFT7rRQ9DzAcL58YRSEUuLxEkCa",
  "key24": "5vcZtZvDJL5dXzrV8jG7uGBr3QRp5yZVETqPM3XZwEwVQn3cbJstTxKV4kSCfZxuSXAk4Ayym5kWPNjuZ9Lv4TW8",
  "key25": "QWpSG5Nr1FC624CkcWDM7TybGeNcY8MswF6qaDZuLW2KfbJSk47kywWL8PSjEmyYHEGwBLaL79n37eFwsD2ewL3",
  "key26": "3XmuaPCbSriiinQhrwc7tGsmHkunykZhX4dNDb3Jq5duNYPJAr1FHHv29ZPBGwm9B2BU4kAptyBMgT8SApNaAzSD",
  "key27": "5eYRd6yFDu6ZHRtzvD6QjtnD3CG4gC3eooa7gqTZ6KezJ35EzUMDAEbahdFCgKGmqMm7A4Gw8yivVaznnjahcdNR",
  "key28": "35nR2tW89z11dGTXGE5tbXB3cRmtEiQX1RFCEbGpGN7MsKMUTmFsihd3rnvNENZe5GW3GdQ7WxyNsTpVzjJVoh6n",
  "key29": "3W9bvdVkpF67oTUuvxsBoqkXKXzvZNAtj2jw3r6qqkVjG6AoVqufrCcfkVo5abKF2TRVNi6KAwU68Phi6WBkoPkX",
  "key30": "5g37sAVTv1JxxCiKECLbfwkUtNccbNheFh5eCQ8GhuWqKEai7Mpdkan3NW1wtdEFo9Mkx41fUpztaa5NfNRSMCqh",
  "key31": "4xr1c73FpFgoPm2k916gaKAMgxmcKLQBX35GPN8vqDrCeSgkfbkhTtVaJPaxXGeWWNevVukWNUjUxhtgbSgzuptb",
  "key32": "2aUFEgaqJGMSBDbNb96aPu5uCWaJYYWeShTVHbtheP9BjyzkNsasYj9FJ2pbTgr2RS4ZNv8vYD5kzxAL88UcBTWn",
  "key33": "3dgRAiY2PZuBu21CfKLg5GobsZJh8ZFDMceiShWiy7Fng2hKMzrp2aw3cxWa2iWoRChuS7XaMGpzTB1gsFvgmWow",
  "key34": "4NiYsSPU17rjUActxEQ7Sm6t2EUiyv2n1ZwyT8zoNYPi45gP9WM5GXBZ8MHx5VS7ux6LFE3n3GZwubM7aJqRo9ws"
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
