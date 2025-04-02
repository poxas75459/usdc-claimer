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
    "wHC7Vq81PVnos7y3HqchmtH2gtW7Umh8j83exjCuNWPTnppJZN8Bhr3VdEBoybqF2At3eVBgzfovegnu5Y456CV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3aGYMWfs9uVzPQxqH33MSq3kaUHTeHUxfNQF5xEo25WqeZUABCKpWjVVegdtnNd1CMBxpvSmgJRe7NvFQjKgvHNr",
  "key1": "4ATsiupEUafxYtixrvSoHsyzewuhYu5f1UM8woPpR37ZFP16pLGAWfUHqrCk4sVpz1pYZ5t18vFMDCrniQoguroe",
  "key2": "89Fhug6u4tWkCwXGukmZKhX64BGWZfUPkmnmqVrLK16MJ2povk8RsmH99Yk3tBHBWBKvBhRgGwPVYdcBXrPxGbd",
  "key3": "8yBeiGLRmW1qcG5WH7qnpQp4HnGwAikxy9rPPDeGJPYc3uiVqYTtwDeoEJXgVyJXaz6ipZHAudrUqk41gTZbmr2",
  "key4": "38a9xsAoBJAdWy7fNnaRNiFH9ot6vAWKq9n9dQQAVSgvtzDzKzS4dz8wz79FoWcRnM9vDja3nutmL8F7rqEVm6YR",
  "key5": "2VWv4ZigGmmq8kfWHDgt6njiiwN1ctiCTbENoC17RJ6qmrNjmb2vvFYwEX8FkLvUJ9CCdzJ15e9H1PVU9Ujn4s5y",
  "key6": "5xGbsGHxcZF5Wa2kZiKBpmDQYM3MBx3L3krC7nXcvb3YpbYTDNURAn5xmRJQ5UQvrS5YHwUSvGNrubFi817His4n",
  "key7": "4Z7swcxSbp3TyN5SaUjwmY3gkrWRNqDBPNQpEbeYZqgwCEDWxznAL2byt3YaSvDsU3KEkya7E4WsVNuf1uBH8CYG",
  "key8": "2A1jGNoQpRwbKQmnmWq4wUXESmsx4RwWK5zMtJoTdg4b3oZHgfg2W8xTLJ6v4vHUiLujNbrSPNLHRfLWRaLaSF78",
  "key9": "49fjo9s1EccS1cWs9eD5zq6TbNrvMm8CjyqKC1JaN69CJQzMNNfWgojFw5PK94cVgajAJkXs3Mf9DyQusXzRFGNY",
  "key10": "3v4h1rqRK8K9K1pE3WV3UcXYpZDtuB1rE8xVmvFxVEQCsog1Jg6WQqnTRtCvyqWfBTQUqnEUYKSGiTg6YJXVFkiV",
  "key11": "374cUNqerEDAvGbdbKX27QLQiaY3kSz5C7YcN75ThXwNEKFN3QmhUdZfbPoUySVRvhJjoJ919ZN1M3AtXvvDCJ1C",
  "key12": "4Eocn3bzy9dDdSuhCCkhzJVF6LsyGQ4NWC4z1B8bR8gvKXfKsMMtZz6UKFekL1W6kyT41uRR9cjmG42ozcC63jyW",
  "key13": "5aqa31Kw6uYkXTzWAvcMViSHwYhc9TDcLDHcxHeiLd4NJmGPtaUexvRuJMMWZWN7t8xFSwZ6K9mmdPSC9BTUMnEK",
  "key14": "2f1ij9wpHRFzehbz4GZJS4gxtGuJxCARqoDMXU88fBUd3uZTZMDETy16WS9jQascMCEfodxpSMT36V3eQakwh14W",
  "key15": "4wtjrBAkudxH2Qd3zD9nQY25dYPQKgxA4to9Kc9p1dBSaxeB5GcWaUNPUSkSTREGYeb8YezQdSdipz6iJgSJkb8E",
  "key16": "2TdnTeiFRhgtjLGf4nUbZ4oLA68SCU2hvmgXqimgGHUbAtqt5fDdbHMWgBGddX9o89UTtyyN9DsriETUZVfbvmvr",
  "key17": "2sahhaTVHdRJzLajyZWUN9vTi2cpsznBkPmJHH5msJ6XkQ6pTuRZpyQgQgfsJBj9WX5L3mqqakeU92RyE57HwDYv",
  "key18": "56ZEQpU434uMTzVojBLKzo2Xg9GKDo3F2JXSkAjCbfWzGKGpY99h8XPUrdCu9xZkJHdhdoiGtUhD4f1RqhGE5psC",
  "key19": "5G5bqCw59ukEYr7vXKk2Mxu61jEabVJg3fngraoSBz7fGikfrwjsRV9XCiYcLjeDe2P95yWTirZAA5M9khdR2hj",
  "key20": "5EPBXefpcHeNV2f6d3uEW6AVfsA8y78p9UcU4sU6PAkXVZfz3Vgj6iUPnTNNdCyQDm9bKCTU5WnNdSRpcTjd2V6n",
  "key21": "4RXof582JPUUQr3nwudV43Xc6Q8gc1hqtHZbDZ44tCPk8agvn7gxz1sC3mdjqS5iKk7xxXBJqAcizRGGcxkuMH3Q",
  "key22": "4LisTWJ5rm63gzC4iaqvHUshynfBzk8FaPmu3jLzp8fYsNCvSLBLn74maEnyF7a21zkg1RqvGWzkHWppgEYe1qHT",
  "key23": "5fxGiXywY7D7J8muUuL9AGi8xP9MdGDGnpRRtryS4bR9wDmmTuQKGHkAkjfFQNa76aGgFEbnGT1xc5DrhwNBniAL",
  "key24": "4fNWRKYgfdXoJ2SUV4mwEVEvun3VoTLayPMyAX9WpWs35nNMBKvyprwLCEw9PW39MPSPcKXgcofyDbxfTBjaRuWu"
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
