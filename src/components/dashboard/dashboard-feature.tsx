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
    "zJkAhAjFNUPvZYnbQ63mKq3HrWCZE6Rmjz4rpthooKzd31qSgw5PXgj2oRQ2cNxV8kn5jP712EsHJKd361KkcTj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2HyTB7szAL4WdZgoPWUUD88WDmSHo8fHnqgUNk74nh6dhmEotGMWon1mJSQQEZ4wWJ3M3vLbTF8FrRxp44hqyPqx",
  "key1": "3z4yU71BSdGrpyKZGcrWzmTCBc4nBQhZ7Z2USQAc6PBZkRa6eHGScxa6XCtfZyd9EXSr7nX5djmecw92tEw3sKCJ",
  "key2": "2yuyonmhtZfaSSAPwo4sVWw23Vsk2MHLofGutkmpyHxvWrkv7Fs7gxA18o4K2x6kR3z6vZejZA4txA9QZGyzYN6Z",
  "key3": "xLTnD951Z5CABR7geDmarsyYWZt1aQREqdwryMJrXRfcXxhphFk4gDQbTEQAgv3kfr8bFHfnWRVbJAdbx4MdzzW",
  "key4": "2coef9uqPsUxMah54AzKoxwyTSQZGxeqZLpTaRRHziVwbKemXHY1AtKiPLSMHDfdcoGXYG4Cz3dnyVm1frhzWoM8",
  "key5": "45vs32DTKBUpY93vZY2K7k4qVaQkvkJRbbEuqLNshRD3ymA4CSKbUnkx4bRhp6YLk8atbWNTnUUcepLitp1D6Lak",
  "key6": "4Dem9rVE3h8jJdpRpQH9YvGUCKjPevsSEcWT3v1UNTxh5ohWAE3hgWMgJRjiB8jAaiAZD46qqi7kQ3RefMTe2xjN",
  "key7": "3o3bW6gvwmgUV9FTNdf5vmSyQzwsVmpqbFGEM7wYByhwC5yNKWu5ge85GkgvPKQoVQ1U63qKQr2ytFT7fs2Ptdgz",
  "key8": "RU21rJWYjDCUMN6t8UsL3478c4Dy5HRt5PoZRk5hsU2UvaA4EqFGx4QvBs11L2TBNHHivJzDUz3G2Pu7ARJPqhU",
  "key9": "PSYzieXBTVKbNPBCecQWHWbrNPh1ovVRZ2ExLCavgrsd83mYp5BnC9TB5kVRU2kaEKCwFY6dy3nibd1rqEDE74n",
  "key10": "5mxXJ8Pj74bUfLwScTjfDhqEktwrMJP58tm7aWZz6Rk2b5fsMrWTzf2UqvgjQUfaZT9WM18UURUr8x1vLUGzUVTW",
  "key11": "5rfCGZ1ULZtg8kHiNTJNbjw3CbkdDC1jMXdVUBwmVEJYWGUDaakDoVNNEWUK2W7E7tHvhKZMmonECF947me5NJQj",
  "key12": "2AYjJt6udirsxH55WZBVgvn3SW8FNn7VgjYAt2KU8LbKxFAhLbcecuzHfC6ztpWNyV3fkm3WWwciv33cHdAj5wkp",
  "key13": "5sFgNFUUYVwEf1VR46YHJkJnkU98JR5PoesbxG2Yf2CgsMRhUTj1naQ3R9xRQnNdvGkYFkrL6sXjcTqYySVk94MJ",
  "key14": "5s3FZmE7kFDKDk9A4YHLRytnSx9nLASAALRQUVYVYPa1A46aydUwh37uVQkZVfBHq4fBGbN23kNPP7HkMcW8gf2F",
  "key15": "4ocC1eqK4SFj7pwH5WjUyhgk1pL9bptif3JDezN9RikiThXVBr8VMCxbKx2irgj9tn8b5FYjdyib7juz1c4EedXd",
  "key16": "4MzgapaCrYVTqBgnHAsaxoajHLAUmuc9dHtLSq2CzazeNXUR39CeLtfqGnKLYAR7sUuxafBUiwDjeAP7kTyWnecM",
  "key17": "t3dY3dACTS29149GK6PueSAXCvsrF9rTZaejcnj3mip4Z6xqozw11PWzCKNYWw47EfWgZeFBdLj2xWh84h8RG5s",
  "key18": "4C3otP773itnQLpuZHrG77R7zG5chzcWWeeBDu6qA5wsexyqP4avL7u8bzLXZegpLQQa2MubLfxtk8JGZyc9PZUJ",
  "key19": "64BgW3DiZsshd4FbeAF8uKtAQ8wAZ4n8fky9d22AQtQLptvcGq1fT6PmGdUSguuUSirY2bZRivaQxHQGDhNTcvot",
  "key20": "4p4zu3bJoduk5kTHBqAJtC1aKnBCy8yWcmM8KUW589HUcTakZ2EcvA4TAgWfMaoubMkcmLWi3nKRosYN4AediSXT",
  "key21": "4jdikZkP6Z56V2JHxCzBeJ1cp1MJJahyRNcmrkCo5gGY1L86x1w4k25DE2qoiLZhAJsKpsigMZ9iYjW3DeFRuENg",
  "key22": "21DsogkwwbGXC3SpbTuuWMkWT7vvaRXueL8SVBVSEX3vXjURkrzwv8VHPvML8KrgqYwzG8zxtejzXjCUndwGEViy",
  "key23": "2T32uceqBwEu5Q22nv32pYmZttKLRk4C3rgxzWfiiy5uniXnHNmtwavRox6xhuhmTPKh3Mgc2LMz1pwAB4FFbgNy",
  "key24": "5WMzdhPNrrRUdzhnUtcMuGS5FB4gV5DcdVsMxyJKPCSxthvDRcvQpmJ39WNiULehEsToWd1fJSq79Zc9arkNPA2R",
  "key25": "5DZ3mZS8XYXAiFzzZpsyJDVYERoZqMx364nFaSKABdma7SiFaxDkRwsvYbCs6Cknmyvjr9VstMWSTxTbpdU8eEmB",
  "key26": "49kqGUynhEatQb49orer5wYpTdjKvugFQiJMBew8QFZPe65DYka8r1PqY7r3vHgULa7Ps1XHw51BRfT7F9VuRgdd",
  "key27": "3uttS89RkFFpELGWj91ERXWQH1jibkHo58JjG16ar85a8brkBvetT4D1F29vu6HTZNJnnFP6xCb69bUWTs93AqFD"
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
