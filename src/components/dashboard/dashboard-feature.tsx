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
    "d2pZ3DmGGZ9fwWjgp3yUQmb9yw29VrU6jDGVWBjSqMLzB4ohYfmq1veyhxUrE66iQf1PwZHkpDbr144VBeKkgsd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3YqJxaMZiPAJdD8RSCWX181KbRn5jHfQq5zikK3w1V6sqyRKZN1bT6cJUJdm8PV2TAjFBwpJocf5mwbqTfPtqv3x",
  "key1": "2wPMkpQXpx5TnUw3vdocbqootqinpFg8K2fxdeYeC4eFjAxzXDSFdek87rJxuw6gZWSgMYmKmddsfJ5Y9CXqfSRL",
  "key2": "2YuKRRwDdrV1ZWpMKACNdVKuaf6TKHvV1oXGVaK9uRJTWKE2UqoHsQFyAd8BxyQ7qUTnjnLbcL9CtwA5x2wPUjC5",
  "key3": "C5bAqeN8gumqcP5u82WVzwAq6qjEEDjm85sL1Bp4R9p1QK98wYbXC18nNCeFPF3sTFAwEjADNBqwYDs57nbPX4q",
  "key4": "owr1Pr4ctE3YzvHUqFRTwbY83imtm1pHZnRMChnzkLSrFyX3GmQk6gCgzFGZSyaGZ4LNvSvy4RdJkivRUJuZ4ic",
  "key5": "keULkxmvvJWwRGTJE4zxfFUQZNdQhMbTrcd9iYWj4vRaU1JZDJY2gRZ9aqXN61CMafmiw22PvLDmYjHncPT4Kwx",
  "key6": "3UStKC61s7vnbR1Dt7uDj7HHzsDVB71DiFKrpEvbqpUdxRJnzx6uaMcLfHRnpJmCCqKZRVdcpUSGsf7Tfv1oPRZV",
  "key7": "2DpFoVfRpG7iMKWWHvJ6TNSTiAjc1qgivvJ7iUbx8Aszt2ig5kDTkaaQXdTtnSbD39phvqBeZ34p7RcgDDLPfvbt",
  "key8": "5jR8fWEHEpwsDHC5iCgJjttoFgAmbvmqRibc1rm73W8GPjEVkiii6t1vkKQ5FKNxaqfKzXq6QRBHxLUHG8vipfsf",
  "key9": "4yDEVgsW3JfKGfmrftLE8U5WhdhfcgyMoTTVfWBDFmFP78aMK7usBPEL9NGqJfigjTj4JAhyNdh1txEms5FAMuJ6",
  "key10": "5VzeJvZU4b2ghhVV9GJi1VX5dabTxzfinNrkeYF6Xz2TpHAhHVLcTKFnfydH9NKNC4UGXBxTq82qYWSZkTsLvhcM",
  "key11": "4KMdnx1NVEkuG7oX1R58fLEEybGaLUn9j2Bs78JFoM8Y8xEub1P98RAdDdKLiKFSo515VXGfx8xeXoETyXrcehnx",
  "key12": "4Q1CH1YmpqsKDioEZgp1YFCiRL3LV6jvdJNnE5JkGJJza2NUZ17SAdkp7qfwVZvFKRi5fz29Gc4QkaJzbm1RSfwY",
  "key13": "2DSAykggm5HtpGyeFTLTto4kRwtsU8jqXbi9u7dWCx3mBidUSCigW5zqJTzAesUDpdtqp7vHboMLsUb7zP6JCGRA",
  "key14": "4byw8doNJMgnjA9rLNPwsDP2Esrqd7zzSJay3ZsbzW8U6A5hqqVta5DFFMFJP8MwEvWf5Wc16ixaQoNSrqADvjvo",
  "key15": "4YFwr9VhQhi8L8eFkWcdcgs4Beu7DY8jgTKNBnMUnebgoPX9kbXPZVXdZne1UTtBPmHQwG8a1s56ap5GE65yWMWn",
  "key16": "4ShtgT9VHprYc25onWfHT1i6tgM38Lk9Brr1f8k9R5ccDpK7N1yFsCErvpZYj1aXXYZJqkq4KispsBMujk4WmwW1",
  "key17": "48XqLtZDUJpCPtQ4KpyxstzNnnJFTgFbVP4XFiWqrUTixQGwDmj2SSNN7WWVJCdyGcr8sGMwX3ed5CYQWNFVM8aS",
  "key18": "5fv3C1CaayYwdcf2DUjScqN7Vfn2553jekP3uKzZGVbGa1Sp6F7zcLmdx38pmVFNSKFQWq7R4R2ZDPS7ezMKHkbc",
  "key19": "4mCt1wGnBTfToK1DTTKSnGfTfAkKh6WgorXESiKAQupJHCYYVVdXzhFQeHPC78KPXHPiL9yAUWt6NpYpsXDCuKTA",
  "key20": "3PFPzQkU1Epccz7tZuu6et3uykvF2jmmT8dKEKFQoRmyDnve3SWCMqBX3udArJZTxfmJgvJV5w7YoakRCC2BWt2U",
  "key21": "3ZQpxgL79dKm4gnnwraLQpuZ7AryAA4mx7v7dWEJrddK3fZDz6DZma64j7VkbyvN5mpmvJGoFkrqmLxo7CzSMjFr",
  "key22": "2afTiLtg3co5oGhXD3mrNGgzADTzqycgiEKsEw5CoumRVaE8PtmJXcApN6RrmBk5kZcevMVJ93LtKNqq19ewSe4x",
  "key23": "2E9VtWjdYM9vCMN93XPt3v2QDuazcmPuFSDYkZa1oQifRgGCLa8Se6Emtb2KJfCitDbjufW7CsMsSsDh4hzMeQhp",
  "key24": "4cxu2zYwKiQq56TizGLPL2xMqFtjf8d1J5v52M6BBL68ExnrjCwUstZz9Fx5BNcqR4rGNyofhHLEquYUdEPh3Nf9",
  "key25": "5h2XwBE7aMgGDPBy3ZetgbmpBsxk4zH5YUL9Tt2HkCavUUGm4Yp1VbLgama1RVJh5HBmQ8TKN5EfcVDzAkuPPryZ",
  "key26": "N4TciJ3KCSRJPicHsRYz1HipnPV6LTRWyxq3NggHcm2NASDbaqZDTSWGA7DZ8TrEAuRR7xNHJegNgKpx7oTgmBq",
  "key27": "647FkEjprrMjSkfMCENozzm8F7CSxWF7Ra1yffyf66AnqYKZXkrkrACnAn18u6U8k8hoxcjgqP4bsWVxUMkmtsUQ",
  "key28": "2XjjRnsRMC87e4U9DSd5ifFzqMdR3PSKK3db21mmasgu69tjxdefJsmC5hLp1Ha4GM9wvfqYybueRPUP2DniMKhJ",
  "key29": "2QvFAQCauJKn8kP15SE9RzeH87vqQdBHRC714EsJAwYEb8Fx3G6xzut4qWPFCX5HArKjGagKHUTPMmuzx1AqbZa4",
  "key30": "536sK2i4ydorC2AXqT4JDGwi4DsvjxBgDnRGFLtPTj8FtVgBvmKhsK9LpHD6DURiMvpMNuogGcHHFwbuVuWSGoSo"
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
