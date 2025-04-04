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
    "3bJML2WmipULorUP8jDdg19XiCmkm4d5EBKu1ULZSfpxTRu7s7EZfUZoN3bVs5HePBrtyT2s4QXKf6kt9gnzShz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2aXbdgq3xmqd6YEB9cZgevAhtXMKtik86u4wPwKdE7ai2xtEPKQeQmL8hBiGZN18ncwB2thC3vKf2Tv1SpmpkdvK",
  "key1": "pAzsVv2AtKvPSJCt2ZrPpJZR9BHAHo2Qr76LwAyHT6Z3YgW4hx5GsdNrLdkiy9oJveAxT4hTbfsntrY9PDidQEq",
  "key2": "3w6MWi12cGjyA5k3ZT77gZmW5eYGjwCjJNSiepz33Bria7LpHtoa3ko3sXVhrJMqDy32EJcHFDipmQb3xwnvUgqe",
  "key3": "3xNpt6a8hsp7q2CCrWfx3mfmGftd2BbNzCr6McFzhPvSeTkVAEBQDyHbMvLshBXwfjxWsXc9pBcbiN9FUTJgcdY4",
  "key4": "5TjSaYRiV4TVLKo1m5MVgm7pyFKgCANE1833EtVKtbsCts1DMmktDKaCcF12Cq9YaCYjf5PCa5zuLHTGaZ3LckES",
  "key5": "4V6AktzFocef8xZa6dGR5Xa7QBc8JSkgzdUKzKPVNqju1iBZz4FhWUvHj33KgnhQjq6RCKbL87Gu2dtx2cjQ6fE1",
  "key6": "5Zn1cZpHLJgS1QdfpbqFKdHtqmysjKwwFdzXnbj5RCVbs81nPUK8HpGcPVLJFwmfWP4wPj4MwBQ3mVwvfF6KNb5S",
  "key7": "HSc7Lrtgn4uf8ERFhjiV41w51j11wX8A3Toy9LwPGEzEWTiHFDU8W9Q78vpxa93kAUKup9K6NqM9DhAfzSuiJzT",
  "key8": "3Hn7QMiAXwWJPKYbJujDtu859ytvX5jCeaNzwfdk5LDwWSmAMMR8fRHcowaqkwwDkHrQZTdjbXpQGTg6jNRsGE4H",
  "key9": "31ogzgNvF7mMpdoE8WroD7bBWygTe6nyLkzjmGFHLoP7tSMRXagqmpnHrtp7NTrMjzV2ofb3UTefvZu3SFNi9WV",
  "key10": "2gPSfsy8auSj8xx7CKNgKfkZe8CPuwUJjkWds1u8zDe8RU3PGL5ZMwkSf1EWH4VN8rUjfFfGg87HFhKh7csCXp3b",
  "key11": "FogFBtALyESiAjcFyiwmUirVNTMg9RktGU1odm6Hzh3bYqVaegnSXUFjN7FngPHMhMgmo6JXe7tpRfrgfKf6yQH",
  "key12": "2fDXR2rpT9u9dtTLRNmwjd3cxi7aDm31Y3Krkrum3AXZ821wYGnrFC23ndmZJutqtM51rZgfBTtjj4K2PwEj4CgE",
  "key13": "4Cnu5JjrXLCcN3SHbgohBbYaHvHSU4Xha74ZhkgMDNAWPBkVwxjnoM1UHre8bW4KbeBeJrupyf5j4gfsX8b8g1Rx",
  "key14": "2PWEyh2dcykDhExLgz7DmSUahwDPELRomGtAneZz1e9bdFtvDd6Qag9NPFxvReDarXaZYmiqAymwqSaoQW9voKrD",
  "key15": "3EdvhQKfXAxmCDUpXm9mCorTyj1XUAxJc6Vn1ZKv4SF2fV3RXJRrfVGngy3sPzjfqNEcs9NrP58G5JpKYHmSbTcz",
  "key16": "4nGQF4F6x4ee6Bj8zeoeees2XfWtz7kRttNdQqDR7L5KUy9EopcyAdSf9S8PjMxYJDXxNX5aiWGSKrhJFh7BxdkQ",
  "key17": "vZaLCJoi5Fse68JBzPHu8FGHR8Zm7MyFN3QkmAKpqyxyiKAYqbhxzVvFJXyhHGxsQkWPXR1D7ZpjmKKTfDfVjce",
  "key18": "3Bf27tLZDNghkzmrEhgKhqyq1X1iM1AdqPuuuR5qxVkHvVWBVfCZsz8DJx556DYyHxUjvDkNAM4SYALwQidb6DPy",
  "key19": "2cakZto7bqRyQ5Q2TzBDSsFFzLPXinkDy1LDaJeCSVPfMAmJ2djpeyyYANCnr6F1nFs2hngGKebawSMPS4aempVS",
  "key20": "2cr1998uCaiZJEWrrxauneMWfJQU8ZFaQchrutf3etWHNCsxW8j5m3CRDcRsZWCqDrBqfhyCpoPK7jDzof2FBhHr",
  "key21": "WWw2Ynzxc4MEsiTwDCAFGY5W6kFLtE5NNNoLQ5aNbcQqSwtotevf8zSVKGKddEey3tpiDdnsxom2tNMbGCTFa9v",
  "key22": "4xeL8ER7UcNJLL7ovQRg7xtT1M3YtENntjjSV9vwBm16dBCubvwrPp2ReSgNQhGERNhMdnZAT3oQhjnH4JEvGdLC",
  "key23": "2rxiUe4Ndg43xNxH62qrPtYLydWjqL5QFkSW8AnP75zwyBDAdEnCgBtTbvQxkDzFrZiezfRxY2NR6ozwzpLHuG6m",
  "key24": "547txgbMEzCEuB1X9GTMAq7rEeKAKQaDtLGJwTVadwwj2bg9uYZsVP3YCc8JHJLgcEi3vLwsqEsthnwPfJ6bN1Yh",
  "key25": "2hYsLRr9zRHAEMBQVn4kVWecE4TcRbicUkiZGje5u3q63Bo7vUi7LsZEGrJc1bBDizVnxszEXh9Jiz3ytrAZ7Nme",
  "key26": "4fkGzdWiepR7epuH3kSphMqexC5xYUfSCcWisqCP4vQh4KpEErmBvw7bf2NkaPUYCuertFWT7V36b5RJWpUnPWD6",
  "key27": "2bdr6RjhE4uzgnazYxi6mTh87WMy7F6RY13E9zbD3Z6JywXgqKFk7jWrUXsPVxPxCBK3qLQt7WeYUkA7oQeRmUJy",
  "key28": "4AqHfoTAQzN9gBkqKydEhmXW5VH9LzvArCvTKX6xVPXs4MRyhTbAJaXzTUbxGkpzsQHueAGwpdv4c6g827dPeopW",
  "key29": "4Kb5rZzXiiBPaTFFeHFctbTuHDjfXuVGqVfha24Cth1TKPFU9mdbEoxCfK92jW8WZ6EMceHT19wE1LDwDmNZPqBb",
  "key30": "59qQmqTFZJkFESRMWHXTZr7G3qTpk7Kd5HPGGjpXqwcuYwKNgJUKEwapgiiuwTo9awY3gDGJ631g2o9Vm2mHsBAB",
  "key31": "3igtLUh7kE23HcKm1mVFQ28agHRBwVbMKCceQQbRAiBaM4iYfASnJf4HzYpr96jwcwoRPvbwNaMUUvFHo2MWoATc",
  "key32": "4KNBS5kTXqqufz9aoFo1JtkTXPBmi4vftC5XAcKshWCfRE55UpdtUJUPa3pU9scoHRhnopMBdWQWumMYRd25KcmU",
  "key33": "4c3wV2Kpiytwnic9o2iPCQRp2KcwKcVbSr8J5uDH1eP9EVAot6fw3bP9V1fDoazQCCfCcoEoeB7V8efSqVyc8qP7",
  "key34": "2Ui9g8qQDjaK9SMdaiZCJ1788Dh35X8Rri6of9zC1yK9TFLSnPKY9UoNT2daCWx2i1WFaPfMmzEQZLG7vGF9aPjX",
  "key35": "2M7JesMYYik9CWctuGcKD5jvgxTs7xkrxbunLizKMw7vuMhEaA2a4fceH5TqdEkv7bYHUa92LEevHmKFj8gn2wfP",
  "key36": "56CibPudq35E2y5aDsgW4pvsLLaKPGtBfXb5eCezuUT9QAC3iKx5f1FMDesAc4aDDMFY217yiZHsdPYLQFLLNAi4",
  "key37": "2FtPYJwZafhi3ezs6rHcjaU4DFoZ1GMCzKZRetAYxiuhzxHMEnEUyPeSaT1e6KTwQy1bT54pSBaMg7SUHBmogir2",
  "key38": "3HRGUTSuvcZ2Yxu61BgD63P3pigxgsdkrUStk3teRu5BFZiDAS1WCzw3DwB3mgwS8tu7QZSKyWwa9dyHVL71eF2t"
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
