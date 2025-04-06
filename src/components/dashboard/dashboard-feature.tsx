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
    "31STdZrsDR9kKRZ9rCigRmbZ7zyp7ktCPznncEmicvLmMbSxSjRW3wwVy6he3w3iGgz3Fv64xS8tJiMbYLWiV22X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3eYjj3g47PAUkequYUekmXuqY6RrrmtG4aTb9Xu5eMhiHNP2NAFWg2VPGaYmikwkGXRzq17rgMi2CHtZRD7oMDXt",
  "key1": "5STU3ZfNgkZGoHxpzHYrBobwq38iWZWv3kemRCYbhN6f57XGfmbtdFSUP8ref5uKoSTsDqCxus2vMxpxfJht94dz",
  "key2": "4f4QADhUPfdNo6LhkwGLWtGCe414Bk9ULFHZMxp1Ezt5wERzu3qqoVuQ9PxpPrVHXkiA15tUkycjTF3pauqNNyPA",
  "key3": "4CLVziqnrLypHqJzHjvybhTkKdLtqKoT6oDys5yMn7mYXe8gn5BMA3osRV3CsC6zVvwWM5t8tWh9Drkf8WMjWxBp",
  "key4": "2NrqgqyXgbnYsqpAiANEHHdMi1L84giAafpgXbnNYjvdp83wyJecF3gvXYGXZsZkuAPFhd38a7yEpthE5bn8FsDs",
  "key5": "3Wc9idzcfuLgimWU1KbzPESRDQxSHozLWN915JkTFLg1W7GSyzQ41kfo7wXNeemGt1J1ZKWmvBQmNiJ4LMoLMno6",
  "key6": "DpVhPdHNDAX9ubzArMa1WW1TukeY7KEzw7LcFD4oZsKE9i5uzF1c9Wyu6j8YG1a1h3gUjxKqeNkyD6iotkHHPyx",
  "key7": "3TfxdwUEwDJBmPiS6knK6EwP7AVGLAcgJjb6UHQgexGQ9uiAABwHQ1pcvLXxyU9qYPV7eeKBCDNgpzzf7q7jXf6a",
  "key8": "2UyDkwA12fmJfxms5zCLG8UDMfzpaqj9C72ircdJkri9pHYkvKQgn6jHytXGAcfPGnHM6aTLsr6Hvmj2y6BSxnhi",
  "key9": "5xM85DEJDfsMond7ybLqMWDPESKsvzDEME7KdfRsp16EsJg2XwmAbrqJZciAUUUrq5u6jFTVaREhWBAwsm6pv2o3",
  "key10": "2tvxiXAknW7BFKNQm41Cy6Jd6gp3PtVvSxoRU3ZKwHWeuFP1UC2MtzYdLSuKyYpvtoZZrArytaAmDkm9y3VrnvPv",
  "key11": "3BSCtA5EKf4Bw7KedktZ948S89ehw4kAGcGudwg7NHvmMfvndRb9qCHpFKj4VL5RGixSEprkfN682hcSt8Q9Rc3j",
  "key12": "2A2919k3CCAaVTza6nxPcmcGbDtkYDCY93F8Lv5Hp1ko5erkpvR18HWT8JXfCQRK2ZCVcybwWxNPdNxYbBVEkBf1",
  "key13": "46H7HUvA9DvoR1FWwEzwLqWSC3j91LBJWzvY7q26yLrMY5yFTNRgoeq2VEBJAMFK6aexbGfCYJ8PQHTFUPyFTcv5",
  "key14": "34i2da9QggFMmJrg54Jiumao8HygEvXPMTKzY92EHB8exHEWGuKtWxyycXowkFZBhqic4eAym8Wk6AKXVpCLXyrF",
  "key15": "uryV2HWMVvcwXhrY83n6aJWyWwEaKb4nYrRJaQco8dTnE3wrnwQ1439hXJurH9T3YwUexCRbLKN4crKccGnxF8X",
  "key16": "2fifha83JDJ8GFELK9r6zG7TgKXVMvBnGUZ8j91H1ARaoc1xyD86i1rwyiJRJbGrV6FbcDPWptQttaFVuQ2Zh7Mk",
  "key17": "42rTcKC7VWnrnJxLMZHA559RjuSze3pLzDRCeg8HwLhFAnCzC6GnFU6U3TdQEMvASAUCtdWqiWb6JWkM2bQDPRUL",
  "key18": "nQQD6pJoxkKfSEnHXakd5HYNJsVv64dCFQrjNepQbz5yxKea22nxEMYF3K6X7yBXZw73SrCgYFxz5evGxbmgzVT",
  "key19": "5JJznvEajsSPZwHo4vAUYL9huT7EAfvCAjBiB2TiT7nbtaQvH13T8Yh7A4jHUGsFumeig8EULJoqPgAiYorfWgHh",
  "key20": "5r9N6jSDJZuYH277rue4RcngSSjgfP48Mssh9E9Z1oA7fmiUkQCMRPUaRNgSxdvXkuB1uHa7yzWCC6JiGyrQr8ic",
  "key21": "5Yc1NAeg76L2EWR3DMys8avxnGvNVNjuBpkNsj6n9ZnFkH4aH9UjcxBhSVntjkrjTKjRMUtZfMa9XzovyEZiDNBp",
  "key22": "4fdmG2QkVmeRo8PSiRJPng5td1X6NFmVM7u5VouZbdLt9UrYhF1F9qwDw4sN6K5VFWdHk6RLuLHfeSnheX7QseNY",
  "key23": "2LtoZqALgZfWKB8h38T4aXnxT592PBVz6vdoF6EbjqV9FbySpXa8tXrPACgyqj6KhDSdC6Y1afg8XXsq5yAUDGre",
  "key24": "4RLzW4FhN3yRaSLk2D4SHD3M79kDcBYhQ1nLnRDDYbWSAWNJUcTNqwStXewL9xKChUKu6F7uEBHeecomn5yajTdn"
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
