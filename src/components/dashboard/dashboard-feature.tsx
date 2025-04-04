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
    "5Ka8qsJ7KLae3y1bC9hei3TRz8wUFKUNYzKnDwRwdE77tKgNK1j293CrDhE4jKR2p5z5xsjaCX5RaBGhUCWdhndF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "23wpQJ7STjqPP2zWEQvHDUQPai5Ujtdm8EV7w4ZTjVEF1dBbnYTt3Yuy7xsyYdHbgcNCkzsR5bJCtFEMYBjcuySx",
  "key1": "2TAKD7TaQBLazX2VnxirNve6fH8FEAu86kLtXpKGBQNVk5jiAvgFnmZyePVeC9doJMPLuCt1HEpRwruma7T1jukH",
  "key2": "4kvVXPYRFS9TGz5KUjBtT8wRgZwQpSyiuEPj8VLMQiym7EN6PWjQ6Zr8jX1vSSDtkBktJR7SW3DJA3sy6nD3QVJ9",
  "key3": "5JVbkF37LugcNhgtNYESXYfAtEHGmR4yByxxzuVwpRQnVXvhWmKCzVUuqsHVwKQdJm9XrRxjQRM7n349H9g6NWFZ",
  "key4": "4BtMwWsDz3vAUQSpqSe1PFuCDF5LzL6E7u5mFgp5c6sGZnEPBPwzPMn7hr1GTXtYLSzWq8Qg8HAvPh18uiCVEr3L",
  "key5": "4RQyACm7BzHdFExmXKpisdWUznWkZHrLvrAC4tw5Q1XhKt543zEf96LayDC4wY4uKfTQqrMVekxEf7S18BoLK3JA",
  "key6": "AXSGeEao675iLZDSNjFCxxV4H7Nqgj6kK6TLaYBc8mXjCP5JRMb3foxb3oLimnkiX13NxRr8XUetQnLAafzQ4dy",
  "key7": "63qyt75MexBPaQcpXmfZKgx4kEiUQTjEWunDNKA8eQGXStAFxEcgtDGH5iku63CAnnKZb6dDWBuRqPBxUuNJ89uq",
  "key8": "4JFnudmyiD5VhMR19gxmUwdUy9fGbPHz5jpgy1eNWxUmVGV7gCV7cJNTgW97tr5cKHx2hM7i2Q5LvivtZnFtt4W3",
  "key9": "28b7Y5VaobSPwVou1BC6NY2b87amATmDMqbMuNH2cKrLGC6tY9okPEUJhbngt3CcBvNZLhbnskY9LSM795nzAe4s",
  "key10": "usABAqRMpu21Guagf1V4Lkwe8gxMhHKD3n9YoLgpPho1T19EsSiNiXwe3bz5Kc48wNMRdHJ6dgsDcwissqw5H78",
  "key11": "5cyAU88DpcR1ZhMoUX5KLwhF9kRdJGKaEJv7DHQkeba2fJRvC9w28uYzFNePkcmceG6w1yNJ74MGhyXvmdiNnZru",
  "key12": "55URizU8KVfyWZJB6fVnMyFhjmFgcX9W3VgocNuWwpCgKqnhto4hVC15cJM2RADy3XmKjJv6soHrsxZoKb5bU2ff",
  "key13": "3DZ8XejkB13HicnyDqKJxUUgrQfHuWTkxKU4fWXnJxxMvaQrkDHFmzCUvTQZwLp6tWgadc6kzQdZSPeq1ZvEazbY",
  "key14": "3yEk1YXULx6JLRniMnKZHNgL5mueBACNz1kguh4dZn8LiYtYVbf9t3EKuMyEP67egbiZ36XTYLGiptqMKN5eWuNh",
  "key15": "4kemwHacvaf9KciQDnRv6ExH4M3U5wBbaK9yVZ1DqNoWD6KXgPtiQ5xrpYD8Rj9zfpDhmSxHEkae63BjDukU2FJU",
  "key16": "3MVzoumn8G9UX2vK9djgsna9qS9YEXv51tuTjkrVqcRopuhVA72soKsTRSjj9QvsgKaAioNRvoDseFLuAhfvh9FP",
  "key17": "3m5vFCW5WgUZxTJGov3AHje2PFttVNv6wJQbC98WYZiELiEW5QP4mNpUgMayE6nCXaok7jKvD89E9tXDAictcH3B",
  "key18": "63DBHEXJhmW5M49VT95bDokgu4gTDj9n5SS1aicj2C4hqZ6f52wqtFZa8CfcK6k2jaiKahCfhfouonMgtnPNAqBz",
  "key19": "2apuZwnTSx48kgcVB7P7deqPEnro11DmPGGUBwk5NdAbiwnCMphgDxGcVU8ABctomYizX8g6QY6HCyYiWfbtcewE",
  "key20": "2dzcDoZe3YD8ruXCdNiRbuPuqaSHLefFNCuApTLP1Zaf6oaycyHHK2Qa8vuYUrfqSHh7rTtwRacEYSXXUBNWe7P5",
  "key21": "2W8uAgE4UEMgeMYaq8L7FYwJ6LJFj8bDmnXdtwbixVoAcnxhzGCd3FBFbzfgyHFDeYTWAgy55FahHjGK2VkcPeRg",
  "key22": "4uP5Z2Bp6mnZwyq5TQxAna11jLT2zhkSo6yfRizwyrbyYTFQLS5LeJmkCrkbNdZVBTm36Hn11ZiNTd1zanGNBtyD",
  "key23": "19erqVSsoqQUyrSbVuqzfqNvQY4gWePEG1xtxsUgZJXiTRtqPQvRkxZEZEF67eH4NJvo9DQXoM7P395Y95wsnJc",
  "key24": "2NJL9QSzJPT5nx9BDraTHo5SJMuoz7NHSkzA9rBnXoWqLs9KXujZ7aR2C6KrBUcit5UVWC82rf6inmipBybhgBdQ",
  "key25": "wikGTCqxGmhUiGy3QX5tA8HJa7hA2FwoDx1VJevjVHeLH7i7PJwdsfA9oTHqEGT5NR9jk8mvy2wXax5FvHD8Lfw",
  "key26": "4YUYW8XBZsZHXmbTHCWtzGQykGyZm6ihYkdGHo88pRZRNhPVwKDDGGDsvfBCrxpofKVpRxuALh62LYZX5nbFspCL",
  "key27": "2Tq5XE14KQVTVNwLpQUQMoz4g6M8PQhWZubVZPUiDtcduxN5F1AUQKScivQMuTTHbLCTVQkcpoB7xYJHWi9KShx2",
  "key28": "3b6AwavRF2oAtcYNaNPu7fSdQgQmeUURwyRLAK1vhXxLyDYoec9Fkk3tnCmiT8z8uJAmRgAwQuUzwTYZE8rfihFt",
  "key29": "2XVnjPBsk85u1xEuiPVRN6v51JJUjZKiPX4CgQfxwn5MAsyFH6ainoMCfMmaADbxfFuah4PG89JHszSZtvxPR6D8",
  "key30": "4y845gSUoLYCrEKGJZ56QfRHYR8CY63KcxRR2sTxUwJWDUXxQUFoinZpwmSNCy8ZJm2YZ51LHYo5B6Abn5HBNVwE",
  "key31": "3eu1fRv3ww3hgXwchWckNX3c6ZGQnSRNRwndqzWmN58XeLJtxtcCFg3cxrrmekLEKx73ZpSHzs5EqYa7ePVnvbF7",
  "key32": "2PR5ZuJRWzwXtVbDiums74rj6urDnbvGzXLFnp3XbShvHpyVVVp1qYhsUsKSUpuRoftxtb4xsY9cYKfFWC4ZR91H"
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
