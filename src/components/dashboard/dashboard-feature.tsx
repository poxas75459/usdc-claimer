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
    "3oWWcWi84UvYzQhZ3kbCVjdHFfnZswrvA9mHi3pQkKfTC4ZEb1ebQfL7DWspqAenWN75zQLtLeDUt7ABQobq4WTc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32j8U61WhgFjGGgMFSxY5Vkh4BB33T6dsV4g2r9TMuD3Mnnv8n8vBou8qck49LoGjLGqQzbUMjJjabmeAAughBDm",
  "key1": "24xQps2QMSdgsytkTGQn1xRqegBEgCU99yPdwV38kZK7FWaMjokqjxGFrQH1cVRWrpptjg1QxEZdXdfazyTuBBVg",
  "key2": "3z6vwThZm5ToL8rr1DdM6eyrHpjs7GYERiD8Y2fTvggs7EWg9KGD6Mfi1WDop2KhGXNG24QfcMb13eDyThsa67na",
  "key3": "RHVnoH2mZuL2o2RNmmS9rNHCLoKygfT8TiNB1sMfPyHS48iKXgKaESqFvoennHWAFgyw2TdC2hkBQf8w5T2Huy5",
  "key4": "3BDMWjR3NUyEc3cvHS9oY1HUwFXV7nTCaGAqWbdms5zHc9DwjXQKVsnvF8BFQD5hZL9ELb9gDstdKfphPThfjqSQ",
  "key5": "JZ9Gcr2TfK6AR9kvwCcswc4xN16tTrRPi1GyZ9JM8sAmKY7DbTuvFpxRQJj3Ra63htEkCnY9K42R4xqhRU7S6nf",
  "key6": "2KKker4eu8vNP21TbdnFaeG1LixaDReAm1EubXR2u8iA8W4ADjqAk1pWqVJrBdAzD8xNSzJCP4GP9R9EXyAmLM8o",
  "key7": "3UcPPVAxtL746Z5qAVvNu1f7VdHfPUW5Rgrrd6ZQ4xYiR7m8BBUnrqwgxXiGzp3VUXGk3s2LqERxaHjf5soohWjm",
  "key8": "31gnXH9hdeJ2fnp8kQmkZwmgyWsWXdxx2fxHpxMxMVqhtP3bYJ5JuwPuazpvt21VrieSdnQNZZAd7k8X17z66weG",
  "key9": "3FgmJ4HwtFChS6P2se8dSEXfhUdek7i1XnX1CzW9y1r7khJoWaRR2jeps6MWnwAXL2cRP2qy3bUtF7LVdxseT9pp",
  "key10": "5WaU5MrM3mit45PUfYBM912covdLZRx98BF5FsCUCvZ31a4A9rr7Rh6t46AKKxr8heKbHaZKckZ1eYyAmnLRNfej",
  "key11": "3omsqNSMurtdUrQWftrRVEKqGWQAuEGGJXL5mPXk64oi1qemLAaZDi7AYB8rb9oz9SbmBbCJxHNgSMd5mGsv4fjY",
  "key12": "2DkS9JrT5LqFCg9KsdosueZcPvHfs5nzzGEBGYZrwQaQyTVFhtH3jVEHy81xppE8dQ3fda83bAFvQeLZziR552Yq",
  "key13": "4HZmM8MJXUToUy9QWkfCjLN1f8pVEojZULYiefTpjGyAVuzZSSkeENfLqhHJihdB3Hw44iQMqHMrG31dz8ZHpbnU",
  "key14": "5ekVihsy4CbzC5waWDnhU5vfL2ZNS4omWETdew84iqvKYv9tQnRQdFShEzAHew4JXRY6kE4ZN1UKUsxMoGZk8jgb",
  "key15": "5cCbETNkYLrMEJBL9NMgDmqgXf6CcvNQnm2XS8iDPJvhLnsSUViAgkF3u4FXUgv2iHB7fdskRzt1GcxYy2NC3KfV",
  "key16": "2274GWzbKEmx1kmJNLQicLVW2UCHbMKpLFDJ8gax2fhpZvFnv7H8Jqq8MpnQKhevu8hg6QNaX3uhf6vgJFV3dupV",
  "key17": "46mZ2sMN5Qx2TP5jNvpAA7wvzB7nWy1iFu9kxr1ANqJko4gzDn2BwWPY17huNTcczXi3BnUzwaPSGaK6WbcsavWb",
  "key18": "4HnVXEVJXNmbNw1KmwGkTARhUG7Rfcpm1stVb5bxJDGJnDGmL9R5tHZUF1b6ZudqfAix1R25ddTwhoHLmf6cDbFk",
  "key19": "2oN3Pikn3C5wsAcaPFCR1MDuqg7kobXN5Z5NJEg96gsGzCfqM5Eaq33PFz6yKP9J7U1jwyVRnyjN7Qm8DPrTkBRH",
  "key20": "3eD6ySP79gFBEtFUJNHXBWq7Y3Bt4C1QEoj8knxRRMfxSXB2GiyqE7gP8W9GhhMe2itevURFQwaxRUKzXUx7FbtB",
  "key21": "5HFLdqqiMJjgc92C9fUnFAodp7Rk1eX9Uv3ssodu7WeZDXTZ6B8vHyR9njCSzEUhCQqAjN2zbPW8NkuEKXBoNs41",
  "key22": "2frBYZX4g56BkM75vicwUDsQknkXY2TZnkdL78WuiLzoYB7Lj2cmhV26wXzzEUqT142WSjeR5Ui72CBbDR83Gun9",
  "key23": "3a6pQSj7xHuuyfkgUKXyuLBp4AwjB3ooWV2uWf8FSBtVg7iMAwPdhDCQLbde3HdawSVv6KhDoVQUkz5j94vmVRRH",
  "key24": "namR5VmX3oYe3voe1LBWAJR6pZgY9xivRskwj4Cf8VZEqP1aCYJPCYpV5agBmzUsQ34Kzz1MkHoAvx88DLnHvHG",
  "key25": "4jCXqau6zNqRzBNqb96t7GFpS7eEUH5GHjquSTMekjAFUuwmMDcgamnPSwLiEbHNncCLMvmsi6v3k81rcikfWvQ2",
  "key26": "67Exuv7Xobfhs7MZuQqDC6jB7w8at1WcfAFqVMp8nBS87RSDmYGzcMY68UM1ZLTBfGp4YpL314qRV4sLfsDy7kiF",
  "key27": "2XbPjzdVzQHRLgJ8daC3upGC8V3XzimGxZdVpWfGFP36tNpiojUBFSviymEFeyjeen1mqiesSLXSyLQW3Z5VZ4cW",
  "key28": "2wyc5vB2vtFK2xF3YYtZe3gMF1wHVQZ6Y1d5XJ9fHjsm68fHVtVCorTPj4QStLXogPHN6QRpXroTmN1aZEg5nYVs",
  "key29": "KZw7B9a6qZNeb2W885YaF6rAtevyhrjXBaFR2KWEVybeUuZF12NcEa1pDqtKzgeE1V9RmZBZwTTjdfYC4yguFVp",
  "key30": "LvCjt5UVzivW42m6GagvXYernn9iins7fDQEFohk2xxvUtXdwHkDLEX4MFYYdvDX9NXn2DbHTuZMsBZ1vW8uAgV",
  "key31": "5qyvSN8CKu4SBH7TggSoqVKvvrUL4bWHJECnks4auJen9H2AEEwgXzUg9L4G6U7zxGvKb6vrDMTb5tSedXEFnJmi"
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
