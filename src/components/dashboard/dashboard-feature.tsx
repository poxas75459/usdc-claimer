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
    "3MwQbFHhWxJEafc2ctMYizRJd2oLpEWciHwnWRJdyG2CetvJKAHXi463fBe9QSRvxd7bGAfiPUfCMZCaU5xyvA2e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3fBChh1nG3g4zTiuAP7pXftr2Vi7KdHMsRJXtw6y9ysmQnbsg5YvZacjFSrJ8d5tr6dkFm9xATvPaaAHSwvn6Vkv",
  "key1": "MFsm3cfR18BsSfbTFT8u7HyhNyR5pDD9mTrKDDt5DhY2FQPFkZKXoq1kYjvj1eUxmxNz9Y9RUrkTaELbTefrKSu",
  "key2": "2MrJzHqcKb3mZfRGu1WwF9koVaQhDToaey1bwm8tjpSJo6VaKGreWSrzpoXjnpjhETQcKwsWo9pv2TF2S6rcrh2h",
  "key3": "4v2yBGVnJPN8tPCD5iGpbwLLBmb2XvEEgw4zwXmHizLEFu2rD7fYw4HRro8ivpXDtfrNKmp2y1QGh6yHUGSTxsZt",
  "key4": "5GarYLMXrkAu7xXMX3ERgUtHxXHJvNWvsrymZR7vA8H8dELg7P8KJtecvuBWSRvEupFwGAzJvNke9yQnL8csXQLK",
  "key5": "2P7PBvFzSxuwzYQWPM2MHH1mXYQ5SSJmGo1GTYWSHoutvdovfyEhTapQoyj8TpeNqFnZ7ZQBsTRYnvrb4xwWsMDx",
  "key6": "2pr7NM2G32JFhYUMjghk31LGpmb3Qu59gosZAViUALJkkpsDrphJQXGgjM91EdzF4xaVpXLo56FrwMRTeL4g95VP",
  "key7": "3jcZwHjRjRNxgRZnptztYUA2ZUqmvDC1ocBuYKKBh5vqvfEu6Xt9i2UB3EWhQ4GN7qXLtQrCKCE9kncLS2irvdru",
  "key8": "5QSbjB7jSRNse9k6NrLGtdNh7qkVtArn3fremLkWRoQnbhJNbanxCrhvTutj8g1XkrW5GxCCdAWDyE5L9a1BnLEq",
  "key9": "5kcGFyrNFeg24oa6dGV4UaBimVGHF8SyrUKPJsjESSZwwh7THMoUW1AUJvon3StAjjPxKz34avVhvw5eGejJXXeo",
  "key10": "Wy7EXCmLdH7Nr1XBGLszZfEWHzGnxkpANFkQp4MvUJGKMFcMtqR72sgC5myBSDAhe9m6rdkVBY7M94AnPeV2zy7",
  "key11": "U9pFGKu5Ju1k2ZjLozRMA9qUTNM1QELUUKehVTjYXD5EyBu5xQVAkNh8A25e1SCmufFA5FtDBayWy8MjBJdHPvg",
  "key12": "5qpie3VAfbxc6uZnaBVYEi54Ek9RFzeYeB52oKDL6b7YeaSV3xV8VzHLzEdu9uo567x1qjM8FzfvULeeecoScSyJ",
  "key13": "2GL5VZPvfBJNK9Md2k6JqNNVuhTQTiPz9Vnu6yHMvis2PPT6ZP1Cds6akZzEXKHzLQAYc2N3mPNwsoThJzp788AP",
  "key14": "3i3Q6FVUgAMjvzmSL3t82KSoJCzG8GRrf8QMuYuSeppsTf4bLo457CDiGqeizpB64rey4Jyw7AWTvqckBKqFySVx",
  "key15": "4K4Wm7ieUv8p6nt7rdqdYZMwzsbDu7CuEegCt4uURrJ6iYcrJJ2fRKTyNgQrDCeGdHyX3ipXyrGHjzqVuGs4fx79",
  "key16": "4vwKuvQ2USEV99qVTfizmbjjDTVRVzLzd9fgq2XiUcGavK77gSVsL9qLoCFXg6ucKugASyT5HtLSzELEafSmx6SZ",
  "key17": "227eyctZHcgWqeAL6nLyPTRN3NLgZYfXmgVeKiVG1nE2UgQVTXWW5MVVXF6irEnjLKpRjmE2nebjSYcgrtNY2RF2",
  "key18": "sDrFRU5uXz61qGtszbeK6AMpktePuGEbFRpfE8PpGaDRULmVHnwS62d5zUm3eLaDibtKcQTMe6Bs27HBi32RHf6",
  "key19": "5LxdMpCwcofkJTeraNnPrZrmaV3QiDw5brC5PLkqQAdEVppCo5Fc6KdZcGXrkN2JYT1aSivL3HGXuejtWXYZ3pHP",
  "key20": "2DCQR6ZuTi1RNxbA6yoHhD6W9eSCdiP9qK4AnUWn3T12z342hAvAB3ZWd24ToWwa78f57c8pzeoZ1kbn3isyen3X",
  "key21": "3RmNkceu1hWEDZHmuf3a7cP4teQfPDAy9XK1AKX9FVpspC5rd89cwqA2hymiKLQLR9TuvS7G5pU8WZR6pb5LF8a7",
  "key22": "GDiNduCs43ptzET8H74UA2GXSTkQijKEqZ7NeEh1YicMLJKYZ42LQGnyMEj2EssGihyRohtwjkL6RfGdF9tVc3j",
  "key23": "44HuSXkELZHqZSybfLZHYFxkyS1Z7NV6xjPafw2UrmYU3TP4nnxEY6PBSooqwffxYprGy8K3G3LPVJoZpsZDia4J",
  "key24": "4qxrcW5JQagMLBFXdZq3y5UruoL51yRvP2aHA8GTuSAtGdXwnFaoJYNiPVq42LHwWVBk8U2j3iZChsjXFNFrxkTE",
  "key25": "3g6QYrBfUnLKcbRMpXtfytPv8ydWHK2Mq1KUKwoyYFjpbxG4JFHaMFGZoTLWJvxPSFrn5ADXfRaMrXmxnwJj6aS5",
  "key26": "3q7Z1Ko5zgkpd9uqsumjF9JCMsMqvuqTcmK8oXp5FkuwBxHFPkRvQ7ArPrJ3fY4KGyLPB34MQc8kPzPAoS9rgbhQ",
  "key27": "64oNco1j8un8hjX3tYuErfF2VNkTdFpxsPtEX6xBZgBDsCB3XAh45aRBWFWK64n4JbfyADMvjChSvdPcca4HxjYr",
  "key28": "3PVtFRSmQZtFCxQmD1DBqnUafk2UFXb69sJofd3qcpV4HwMg9cmHoGBaRMNprHHb2YyMtVmwcfjV6qodPeX43tBB",
  "key29": "5SNwEpurQ4v8dkHEmCUDn4ziGMB6zSqYnYdSrsWvdWpiaJt1qHMsysfR2Q7TAVZqMQ3fFQMRzDjW1JZ1MGfB7zTN",
  "key30": "MLyPDdZdjeCCJLQPVNyESPVn5MmMatPKpCdN96wM9UD5iLtPTmcGHtNGbsxvzVDCMQsJJr6PGu9QiLt65Edj3J5",
  "key31": "2cB77jnPghsiCCUjKbeAo2bBsjM1NvPP7AKh7ZjTtjS49Q7u75j76G31d4YNFi3BjGWG1J3QsJbDzgAsvJ7WngKz",
  "key32": "4JLRSw1rsfqVfmaCie2veofpbaXQ8f15s1MYzDPsLofv4cKjdZSLEnSAC23RGZQr6iGPrS2Uyzr66TXkeNj5fFmg",
  "key33": "3VhFfyGMtjRor6Q2tKQkD6oQLqBXQGP9PyZg6Ldt4eNauMBMq9vBYRvppr62q6Kryf5HAp3FvceWrew1te6ovAJg",
  "key34": "4fG2YgM35yWEbNP6Zybvh1i3Q5A4RwCeCBipbDjhR2PieGKERSwdubcen8dUKDjZuART5QqUydfqcbjnuk9Xmzdk",
  "key35": "273PWDLmHumaokq8vnNg9xZUMs2VuF2TcPUxte87bCAzSSTHwDzK8Bsk4MBdJVapvYouvMdUrHVLbWRHPSKqKUCq"
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
