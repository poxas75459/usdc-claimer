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
    "Eechi3TEBC36L2mizQjekXmEP78ATs6LafKGufRGSGqjVSQF9hQCpHqXggnbjT42PXY2sSFgVwYmnFXMDFP7K5i"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3KgZBjTxn96UEjqcFDsHe65o5ABVnBzDuV6hxeYUeNGk6iG7hs64D5QijmP7d6Uu3UDoHwU3SKamc8m2BpNhVMxc",
  "key1": "54Age6Lh7NLUSQN7P9SMaU25SaNjHgmo1jF7oq9tMDe5MZC8g1oT3vYp9UBh9RAYpiQVrZJRqPL3Yai1KQfwCLp6",
  "key2": "2JkrtJjYSez9b5FE59Cd6qWJH6rs7xmakmsQGU27zYRceJE2btZv4tznRsDatNfmwkdXVL3zcSH8ZN5ysVdfKUUe",
  "key3": "4uW2rb7ZLCRx1a9b8bshnkog3G3PtcXfLw87M5c5uE2F42J6VDfbtEpJjGwkJhdWkD7e4frBdtpYgESwgFUCg4mo",
  "key4": "AyniqsEwKDYe1D93nT2iAiaDNjiTeHGE4jDEMmyN5YUEy6JoWPZ3BBVtwDpz62vAnTXhJXneCDypKTg3Q26DZkt",
  "key5": "2Fxc9nVkk2xyU7vihYnxCchbBHa1R1Sss7StUxGaEHJtEEXyfAZrVVarhFdfqRtggX2vbYbmyHzDvSCqaTs7CnSU",
  "key6": "4D1v7kRsxvEXJVhWP7isEPjCWNvfbKQoHqf2bykfhL59JfwfVhfKbG2NKRjq3zQw4sfB5LPYLnWZ2H2JpAGJ4Wg6",
  "key7": "2UNs915MSMaXxvmbBNEntAYVbfxUdWuMu5pwj6GBGNVUKkeiitdXDZVciBVEJGX4Ur3BewunQApswrKthz6p4Qop",
  "key8": "3UGradU5g8iqzZRbx4uzBXECiKRQoBWK9VCcZAug11r2xJU1eSEbZoJ8JNKTGXLwUak5bP5Gbdv7vR54q6JBCsmn",
  "key9": "4XWQt8eq29JuNbzoqRDUbveqadm47w1hgoUKPqUz92WxpQEEzKixDX7jpHg2bjfoynDnrCG94WPypGwAach2YzWq",
  "key10": "4bXUaMLoKzveoezAPoKxAAWWNeqvgLd8cA9KhrvsWPr8McCk7vyXjyyu124mV4sVtbXcXuJ4sXEZKHNvtZx29JAX",
  "key11": "XD1MjZraMV8mT6xuXCq3JJyKfiYBU2Qy2Kp1dGtZLiJxgGyTTSJXHKriKBMmAzbBGBdRxZhqGfYiTUverKbXQWd",
  "key12": "2fDUQAAvbHHmFaF4fgF2JgRZ5fApWxsifZZt4Adxq4otQHexuxMWRTWnHyFeYdiKZxx34SSwGbnxHAAhkPcYDszs",
  "key13": "2Sy1EjaBUWPjXra4h65xG2GsRE83TaqVSJd9pAU5YkVFi1ZJfihRjwA4icP5ZNbjoAPZ9GbLTyU7yUy6nNtnHGxm",
  "key14": "U6Fjpbq9hmRRrJgpahRCNGiaaRAPS8f23rE8BiRsVLYWLcZEWhoCL98tcd3Nepr91zTLvPAosPLTsVxtwfhT5cP",
  "key15": "5sHaFJMq67CkmMpCfpp8sxYEmZetyo6ci4oD9J6kXjPGd93YNLULvGfDzhMQJkNq7f8kjqjTS6nR2kRp6pZKkCss",
  "key16": "67DTSBCtjbwb1VXQpVR1e1DiXjWfrgbhQWvxhHDSKaNLRDsPwGVvPQUayoTNGywsS1rWtbPfGC1A3MpBz4AAPapc",
  "key17": "BqUt1aSH31eX8xSufwncBEte8gmPYn5JX5gE1hf5ceoMBcYjXNzKZ29FKi5SuL4CRTUuXWiib6w4JLTAUwXrH4E",
  "key18": "5McR1x4sdWqDUhfFGBfw2rTsEKbrszLxoheDgRX6PiCAMck62VZdpbfdzS4ayM5ZUwcrAMWABuzK5EJioFr3r4uF",
  "key19": "5BZH3PnKaBup7AjmNUGekBPX9Nqy7xfNt3uXz7wSQ9VNyDLw47juouHXxr9iXbHrc4E961SUQoUoU3FhYvwcSDDU",
  "key20": "Rb3FC8erjzdB4ZRHy8EE6fvajqrMQbzfEzvJnhx6t3XZhkjjDQfUHAVHgLi7ve2MGXZ7fe2hSGo5bfZWvGHskA8",
  "key21": "4pdsq61kyFzijsWSLXdQuQ3JiZhNheA1q6PTTa6V7SfNLiKQcXc7V3LgLERZ4vRWkXB6b6SByJJGKW6hL2Vg8p9P",
  "key22": "3j91PJLTwVnp9vQgJL2ymAaxvLvz2NVa3cb4JX7fjCVKHRYp8MToGF2zkwxaqwXT1um4aSi4FwpvHKwGqoo2dUrd",
  "key23": "3yqe9MWznp6nUrm5DwZdftmUNcdCrTZ6k1VqHxhs3feKAupxYmZwREWSr5w651QwVVKiXnrKhRzbxRNkZ94Nap3L",
  "key24": "4B4kscyP8mLZpw6H386yDxMi95R1Sx8mHYVjjNZr7MUhVbrLQMh3qEe6ojmbyFDcE82vrGJqUoFuCdNws4Gpm7EQ",
  "key25": "4z5RSVkdrj5zVDyGPf8WhXzxH16uapb5dFeKixfSQereuZFSWdY287mALZAfNagz2d8XDXe5rC53iywDbxLocEJW",
  "key26": "5zJXYcF8MUs9iSBt2rp9x9icASwUMmTj3dHcYCUYS3A8kSH5SHKYsgsSfrC1zvVUHxkMxCEa1MSaGonBSoYFixMq",
  "key27": "2pGDqSUH8FS5Vzva6GDJkZ7U9NLcafQpBgArZsLgCmaxjptAcXZPLF7E4UPEEYeKQXCYAddAHo68Ek62fnqLAsM7",
  "key28": "642w6UCKc1RJFn7GMSCbbahaezJcgMe6udfu1VqzC3QsGzTnqkdb3XVq6PoSyFga7J49VtNvsCjrhw1hLG84WVib"
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
