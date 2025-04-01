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
    "2HfoWRdcmrnSF56E1WTMYDf6zXSwCooBffz7B2ygUXuzCAqvYQGBgHpsKWg1qQx8QNJEoD9ZwPD1HHHaVnRNjcxR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5jaYdSpkit2doynjB6RYHMPXp5HWcXipbQLnGE54hk7xQEDkNWLRibwvPSgDb7KqwgGAJ73Hn27xfqq7idWgsszk",
  "key1": "5v5GVcMoVxh3NxjNxHdomg88nTMG43d54YwqTh1QZx84WgEdJKSGrPH1S1b4k32uS3J6Mt5mCwNa12MXLGsrF3QP",
  "key2": "2w4iAWJJQQwN7adhkATx5wRj2R2nuKRS3Q8cR4bhbgUs2Spudr7PJAbgkvSGYWJSjqEcrqxvUi2xDhV1oLNedT9M",
  "key3": "29K17Ufuf5rMTJmkEkWVZTKPzG1FzPVDiNEn6E5fwB9NEKGp7GyVhTvMnjCmVz4gS3eY6A63E2WbEDN7MPv3sAPJ",
  "key4": "5ZhZYFgodfAbQdj8K1wKrnyd9PWdxHbMSVAsc2hyrPnFZZkZemTw81bksdbMJYgbU8BkpHuzc8xuwEDXa8sSiv2q",
  "key5": "3Xqe3JBwSZvTWeMNkCR9BqtKinh11UWkZh5ZrxcTn4XEmBcqj7xcpK3zGbsRnBgmeURd8aLpAHcwjdY19XgbZBdx",
  "key6": "6xLAyHaQc9hnJYsGtNPs7AeBGLH5XZdLYVUURceiFVUFLdMN9WUAUfV5eyngtTXMdWKyEPitLnCmFNBJZ17QQsc",
  "key7": "43JKLkPHzYUnng3baFo2xzrMaM24rbGa72LxbBEF7Dy1RKFgaRsamo2wy8FdXSdszuw8dGfHyQ1LbF3wE1kLDps4",
  "key8": "21mrLSTWqKkAmucghaxKeKynarHWDr3wLpqTZ4qrKHGYnpTVmSLSM9NfadwNJyiZ3rj2woYZr3KnaV4anWA2JKsU",
  "key9": "5L4k7utCfkjANAcEeac17vhNcNcL8ob4jhv4ENHWJ2ynyAFzpVGfGrzK5EMYA2idbyZR1EiixPfsVjEt4UoJa2yp",
  "key10": "n9ao2oKhVs7468jUWs1dNvj483GDqQj8Gp2yGusQszK5Ac5Zg3oEmG8tzSGaDzqrjDJVrUpPPPuhWLigYUtUPvH",
  "key11": "46432SRYQX4aywu6zzFLX734KuqBiYFxg7JGb1FpF2zVNzdtbh2aGXspXMNKuyebJVH9g7vPsyXZRNeLHqo4fCNB",
  "key12": "3Jh18L7aHG4FR41akmSCpqoyALA5qDFV2GHALhj266PahJEjatuU2QgCCRkhocAQSugBEDziZYJ4EPAFr5CWtYqx",
  "key13": "5M9NTJ5xop8y5s4i7pf6fKx6gcj7xtBWMGescZiLqVLnvxZT8K33DZCrsv1pfpgRrxFT7GUNqfv2Mi4M8NbcFhbk",
  "key14": "3RyK8LQbL6LprKYTQ1krx2pb63yXKK2SW74KXh7Btftg44Z52qygpAB1YLMXUjd1cX7hGwtN4aBuFWXWBn71bzCH",
  "key15": "26hFWi7Jba917oMgJ3gXNCTtBhZBxGaGznnjYJU2MVoAK3rogZS3vsH6tPvU3o6oDrrFVLapkpfFYwFdJwQquqgP",
  "key16": "3uFta5Ru4t9H9SJuUErpJsnfVVa8wogxPmN63o7ZCVicNrG5LaoxQ1F3XKMmxDEbD4RPqetsrAwm9fHXiLXZpyR8",
  "key17": "4Qku8ecJVotpPgzsE5oJEDtrpxWbg2syMo5zhJA5LRQEZEbpseAtCkRBVqnfbdLs2KRTXRPCJXKtazZLDrxQZKYE",
  "key18": "2qW6n83kQW78K6vzFyFdi5ayLWgZ6hNcSsZs4n5TcV17G4ohx6aRigYgXtXo1aPUBNFfPmw9QysZwNWsAGMDbXX5",
  "key19": "2VpFY4Ye9yFNfuZ7qjJVn3edGfDb4NLzEoymGZfXSe7vPugxX9fPXs7CYs6LQQJfDfSE8bc3q7tu6Ltk2vrmzG5K",
  "key20": "4B9pTwUeCksESjGpGL6jATDXJmSyjMeiHKzWZUA26Sf4TThDaRv23JVBV8uwXaKDXXE4fABuM6U8S1HbtagbgAHx",
  "key21": "vHpnG4FoKiccwigtJJ9cvMCZurDWAGMukepwihHbV6QDALqtjWEAW3WsRaoVqoovWa1PSL8gjaibNeyBqBQMwom",
  "key22": "5tRhUFz3YLhhkWfaV1qhPGib9sVu2LMYRaDS3eY1M29PMqoQQgie7AmFqfbVF3mVP8yDMs4uxzpZFfqff8nFKpV3",
  "key23": "2edGYLY3N8keUe7JaLz11FeroXs4PBj2Hpn8dH8bCUQJ5W7oMh92J9H2y7CxugPiJTwRiKv1eFwWWM9mrdt5DVh9",
  "key24": "2Ssre3YjhSENXHN16ddYFFTq8WMF27L8xEnqcrqLT5h2o7GKVZ2LdzXFZgTp6nTSLYxQLuwkM7RSoJjqnT78fU6z",
  "key25": "4SpNXegB9y7ePvziJXe8HZSGjZMzw1W7cg31v7qbTVAAjvvwyAcM5WK7KgAxKXqp5RUaixQVdjLfT72ajWGybw54",
  "key26": "3rYUrtBbfJmwS8kY2zKipyiLpHFSQqad1SHGXHknvNFQHcQKZxxhB3kyBcnMSsdCZH43ts9oHon3HuDwAtWNfDe4",
  "key27": "331fQzyxyEdnqmioK7t1VkkXkjVD3apPEYXzCQYp6zvNMKfy9CN2SgB1ms1a9AHmsA3NvZtoMYdyyfCq2GnMG6g3",
  "key28": "5MGACEBd3JYAU9BQKi7om9GDTgJQDhFWwoEeYwVnxEZttPiqZcG2eLrWAowQbp1jXTbKQBo8acfYKuj3RnzC2w1g"
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
