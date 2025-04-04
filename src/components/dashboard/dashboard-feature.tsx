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
    "3rXzzzhAzg49L9aXVHdDaj8EY2YuZpDUBfbKGEkGNKXDa7gjz6Z9agXYdqM5mNWUEWLZss6hifmQRUtetR1P5Jkq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5fCcQZj82EdAshok9dZi4xGtJ4sW9ykL2yr7FaULPuRj7guBmpE5mYxxVyoswYb3377GgV5W89AMLT8Ef2oadqaZ",
  "key1": "4XqrxoyXvn3FfXfQEaNrxXHwXhd642GWNG4Bm5k39TUbGUDz5vJDLFgp3PYMvB23An9geSBrt53v1oqn5onsSQyA",
  "key2": "53hbe5xtpVs4qN1Z5UUSjjfWkCJEjkX2wp9cwbVLVVVGG4gnZHpXJdZzew4tcnT9Y6BCbd6175aVay4QbwkEt4SS",
  "key3": "2koXR5JRbbtsHU2Aum8zD4xBau6DkVapPhj3Lujo1PYYMTgCpBm7dzxD96HpKgFoNuTHf7Em7whg5CyzAu7rYA1q",
  "key4": "5GrzSekhBEyw2QsxYzZPFENZvyCmLKhkrSqa8UYxgBAWZ1GY3BR1gFGpfpTsFxrUPcJ23ZDZvZdHL4jx7sWtSaEW",
  "key5": "3W77VwHGq2dx6Ly9v9zH6nvs5ZNHVX1YXphLs1AAjVgvK9XCKd2a9sSETqNq7n4kXt4ihFUySnRkyuckiWSvSLph",
  "key6": "26LvzGu7J1XJZfB2JqteLmq8SJRCAwh8eU7gUR9HPLVgu47HErf8GRPLmXjhYQGZ1iKM9CnKFZCaR51rHUa6ffPp",
  "key7": "3MYRwEycnPYzSZowo247MbTK2U2jhrSKvmgSiY84XeMQjs2CDATdGgTVUWZUXwnx7SemEJBcxeY3mkXBdtjRhnLw",
  "key8": "4sCNVdTZhc4k66QVx7dcmLegd2cGCN5jhvuoQBCr4JEdfiyrbDgUXcPn1Fkrsbqmzv8oG2jp5aruXtTrQaPKXQnA",
  "key9": "5kpVcJexfEH7ELo9QBdzvC42Hjc5RCPR57zvgMPMHvzX7xiQEbonA4xuHebBfSGEsbvbU8gumSGYMJ4hiETB7qP2",
  "key10": "58DqWFBg7gAXYCPU8dKZzXJnQUd4yyvvDuoKAnG3LvjmADgxksxncQck38LUHQruE1B1moRLXUx6ZETU1wkNU5C9",
  "key11": "5sNJZ3y6Wp7mk2AcJCvGGhQDX3PfscWANADfNNpi6942aJDcGsMqgbM7U4zJQk1AjVg2357hcUZNxeLKGBjP24RB",
  "key12": "3HyngRzQq6NYNFouiVDVBEqpwSeEn15CKbNXch1bZH1h44VmXNHwJvMZDVDs1jCwDWUG3vd6vPg9Xn6ukFLWGsWm",
  "key13": "3V5ZXhbhk1p83y8nT5aGZC2HChDfaEgGBEU7aQscfF2zfwbGoNm1ztfPfWrm1nxaVvSLVn6JrfK6mDRHAJ1vUyzi",
  "key14": "3XMxkKhjhCggfdx9uEKJzJDdWzGy4ba7YkKNBZ46wXdKqgjEytSVkVR6UNRshyg3fQrJ6kxRceZuWnXmqbpGR5yY",
  "key15": "4Yy2CGP5EVdhNCgoYwMZ26tfbGpVHoyBG2riTdk3WAPJCrnCUzzmwAy3qRMSwU7LGVVPy34NRuHCjx6dB2aTumD4",
  "key16": "57Tvq75r2U2rCYZVtCWgjWA1BpFX5wj1UGM9sX6SaG3azvn3mKhD6QoAcjKtQ1AY9NBbtKHj9NJ5oz9ugwJsFUSG",
  "key17": "5PgcUV4fynRP5mA3JnhD9oK5KKYMitFWneJ9X2RmWW2bfUgDNwvthNGgeArmm5fnEiiqARZvZovV4HmpXRG9Ct2B",
  "key18": "J8jZupk9CbTbSkBeCY6UXG26xf71q74zwAcmkxxWcFcnA4yz8d2ZUMNRqFU3fM6Cu9ExsMQpyLSqGiHUtx68SJ8",
  "key19": "5CMDixWF5kU9TMxfRf8qAamN6eoyAc8r7CSvnFCaDnPjZz1oUdjAs3JWtY5ufRoBrETzxHNZmvXjomZP2MXbvKfK",
  "key20": "njVX2SPAdi8a3qnL7DxBoCKN4TFMbZFs57VpDNhicbh7h8rHEvksAbXP165GcvMEmWnxqh2gVZVnrSH2BQEjBqR",
  "key21": "5wmaGSetTcjeZX2UmZDEY2XvJ9ER41unAMmrLDJGRKx9Lo3xqX6DGsUZgA1JKhC4ZJhNxeSnWD2qtDCCMSsk7xHC",
  "key22": "GUvxqWTwxnvja5peucbbmukXWkCoTwG5vKWvaVA5Nd8V9ApxbuZEcjpAkmhNydP6hGHtmucMyZZTm98ePQVUhy1",
  "key23": "3LX3WcSTaoy5iRuAN23d6Kv7fXc5C4JHe17n7Udhpfe6NGRph3Vek4KqiYU7396ExoR4WSihZBswhfHgQPxL4CPM",
  "key24": "4aK5Fh1hZe79oGyPooDW4GVJAPHDjtsgLy8gwQmERMYsU8uWwbxXZA6vwrDLd5EaiSregiLaRJDzngkLxrcoCDk4",
  "key25": "64aLyp5AjAbJVbqhWEDsRQdPyuymSe3dQmTEScBYLPPEV68qhwfQHQUkB7guvrhwJpwTzPcq6rwiAVXA17eA2zpg",
  "key26": "DRdXrzQQxeqKny95vY2hpQNhxxeQmMR75wB1HTU8cZvFUjNqMz1XxCwAJs5f3r7LsTTfedGVkZdMDffPJRqyoER",
  "key27": "o34Dai4YsEKepsSqsEfZ52A98LBfmLgCi9eqB4nBf8RA9wUHGpWRn3H34KirrzD1NFaHZeJirPEJ5T7cUGWjpJw",
  "key28": "2Aw7CwfSc8JDEdFxuWAi3GrBRSMHJHfPjGPtzTaytbsjXjUfe1j1yJWkC3ephHF5aEKYUyXcn3uvaMwCDYnDFawN",
  "key29": "4wiLLwg25VVVPvKKUauAF7MXLTx4yRnSGPa3RuDiWuwTAXsviJ336tj6fp8SgGd2hw3JRs7et8VgdeVGYeSVvwyF",
  "key30": "55vyZun9XEfPcvqVWWGaBiRvEPCWcRGX6oSCgacEjMrNKZgnRX6KHCeM4F6wHAHkaV9EssAYEVU7XqPQEXfnhQNE",
  "key31": "F4meaqD6DhskjA3mFd5mn9VLWhS1QymGYATqFs9P1TXCKTeqsYFsxjTFJWt34vWWyvYsq6QXep34BJsedYkY2Me",
  "key32": "2s4z6HFuJFJizRgU6c9NstjdPkPkFnCFyEjz2WVdgqGtpEwhwM3WVLCBf2gpoAQEi74q44dKoyX91PQurepqS5f1",
  "key33": "pju6QGAqazBCyD8LZV8tAbrL7VpCrMTKFtCnWk1awKgoLDfg7W8pAcuB7kJBExYVKAWbrBM9MMKZgWbZsiRfAM8",
  "key34": "5FiRE7u9G7VqPz9qFZHuW44j5MTmU22su454aptiC64qundyL6AdgXVKPJqMco2L3zc7aiqKo31kZDNG8CEHn1VK",
  "key35": "uHBz55rkKYKzdYv8itbcDrh1Jen3KsmSuJLwxUeYXsmVgX8YbKJCPPhTS3HYB9uVGvYHLE1kcs5nVS5yj9ncBUB",
  "key36": "3Wo3mhctB2JG8cL4gbhYxQhPYpmqL97aQzdaTLyakRWyiRZJHiQzDz3ooF7K39YV4AeebRAYkzjWWGsRrX3HQUTt",
  "key37": "3dwXXZHpqYScJymFUkq8U9cXMzsg47CcZKnRgZB4WqDMFiMehpjz59WjCkTDWgvtUHwpXaqErTDKZYdxYjVpFbe1",
  "key38": "5UeJtwgfWoMydsDzFJt3k5Z6RBjLaGfA3e5H3kncWwQYs6j6aQWnuWsGt5kUPoPajDfkf229g5FRncuwh7nNgKJK",
  "key39": "46aDEFRic1eLvjfmKSZLbomYaZ4KKYQ6EdwV1mUXqWVrPb9ZLbEfo6nZCRtqe2NXdHc62sLTsGzhXk7UnakA7xu3",
  "key40": "3hQLPknStnZaqcnCyPgNKJzzbdU8HC4WMQQ6qhH5niMKoKxE9LBgboAx5Cc88ESyWhvZnUyBTF38YekjdjxJQZFV",
  "key41": "26F4wG97w6JBBA4puXLqQYukRmwU2k4pni8UwncDLLXLrrrgrYdKNQRk8xmFzytTERPGDyd4rfBbZW2Dqn3jf1Jy",
  "key42": "29gbJd4X4mkXc3PGQhSh4WvVRTJC4qwBwTU7EtXUPRocRcve7Bm9WSgAeKtADEixcDaNmFicSrA251KSnKjEajKJ"
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
