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
    "2BVeh85qZWWV5iqiXiGALi5kKopRgofeM3hcSmt5z6k2oygYVFWr6gNAe1SS1w3QuaMa3DLdTkku6iU5obWZEVVs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "56WCuxnZx2E9EHBa4za5wEcLYJ1pZ1MeoBwL1FZRAS8ew1GXE1sGkeEkgroh9bwJ36RGJgVHa7ugsVzSo9c4TvrP",
  "key1": "5xF434d8Q9qhCa8tBAWzCEpfMb8Zqp9bixfkSfMmyTrQKFbXTkxnDE9ShFYTuDu97hYAGLUM1wzmU2jvgc9LYTeP",
  "key2": "47RFtMN8gLU9qbR5YHdHNHNaLUfmvCph3CSMxcYp5y1tr9hyJfKkE2ix6RpAcyPuAyQDuX9swp7gzJCszsoj6AMu",
  "key3": "ks8jsYHEjBJKAY1NTNwH86PjghHoEw7d6zpJMFt1rmsTDccdyAmxbfKmN4QzszVC8ErXQNwMf7RYtn74DSs9GUw",
  "key4": "SUtqydzwpKWdKZUTn1vsPpSt5yGNcZGd4LwMRJHARdQzDoaoxFGJUDmhzLRPRX5BQ79Ap7rTLoJrDsqMGGgKZ7y",
  "key5": "2dVSLn3ouDvPQixNXZexRnUDrJtTLBVzM9iJTwfJvEExnZpuUNN9T5NAtbZKc9fHXzxKMfvJu9wPtBmMzFi13JJZ",
  "key6": "2iNgWCkYSLQqo12tP2BGPYZ1yJKfeuXgfmLZ85eMczffDB74oNpbtbJa2Eaujj3tYSksMT5UaRfAqveeqNVkA5K8",
  "key7": "1tS85RKLPq7hbuMUePpCvKP6ZePkW5AGzkFtzpXdfra3kVi95WnSYgkfV9tMBaw9gwvQcYXmLpqtEut6K6yWPic",
  "key8": "5WmjSBxfvqfeEfVYLMHcxj3PDDnohQXeWejcQ2pm1VRsixXsCBk84GFknQvERhYRddqGGZZSZh39ggcYfyNTPR1U",
  "key9": "3N4JpQqFQTEgzQEkY2KwkiVf4toddseh1bxFNqSqhmNcLkRLNBEjNRBkhNDvSMiqZrztNZ1zK5M2z2sAgXntpRGL",
  "key10": "3yFfDHPBnmWgpfHZTi5oNR1ngq5AYyouu9tFJZGz6ddJBDPdDHgsYw5j69FwJ9PkmnhTbTyTg9GQpfyL6pdcbofR",
  "key11": "5so6qiWrr3kJ9A3gU1fDeKfaTgnANAgV3kHB6WjxYX2W7H3eszWAhmTzSZXMDWPRTNpouuLhxwD65md94iKkAp9R",
  "key12": "3EPUmjmYLSEBeffQRYiB2TSyYtSWPeNZx3bgSVuvokLYgt1rYZJBxLxcqSVDo9rpQWyPCQfiEBHACMYaTPFMmsu4",
  "key13": "8rhtZogCqxJcAVV5wwg4c13RwSm95hauGHU1yn6Y39KYFqYNaPqJdKj3DZQ6JH3FfD2mboSoBj34nZ6Kg3fwPs3",
  "key14": "3Jfh3cdeutiWhwaXBhgXTpLpx2aSAVMed8qA56geSe38UYth6oc8cwNhVHyM4NX4tZgJVQmzwrzH2fV8913PDtgw",
  "key15": "2d5yX3RMFvjsm87nuL4gF8pb7sv9azR1oZEsgEEb3AB7KfYEdc2j9hgss6vFWbML5sSfZB2QimucwfugxcYGZRMp",
  "key16": "2sMMka6dFppkHPXdw85VpY2RHemcwDwnGjXsrCFAK8q1W2q9PEVJz9vvpTE4vwAvKW7Hrn3iHggD9mTPoY8qWJ7b",
  "key17": "4QfVE1fWeKhCYrwRyeeY2aUzRaaMovrfAKnnwWUtRCioKcvLe4KZANYSUBnfhYmwxGPgEsXTBhZztZkMEdUC9zX9",
  "key18": "5RE6pBCpHuacctX9m31Em81s8mdcZNh8pbgH9YRUUQD3ky6xCxToAUR3jny5SPfub2mcjEbCQwqPPCUAZuHe6MRu",
  "key19": "5HrDx4CwTfkUAS8xivuHMmMqgbgE324T8i5pLgZkLBHDusDuLK5uUY766jYVnsdFrrqtyno1pBYrcLsPRpCkESNf",
  "key20": "2xwbKe2S9hEHoSEBbb2fAtHg5LvDD46bVVGMvBwaDh8ehrnzCCPdUFnr5AiYiZ3jQDL3FUDKqEjSxW7QsvfAsXWJ",
  "key21": "34EdjEVf9mDmtRUTdCK4ehFff2AmkF4zgwpeLZQePzVDrwggGt4nUA9CYd3U7miUxiLjJQFgNRi8im5HBnXMotjn",
  "key22": "fXdcd5nMrzx5m8ufuadwKvv9y5BK1pLDxMW3qK36JHCz5Qr8NWn79isWnipFcxNY5MHiecNmoimwRBFPGWbvDTQ",
  "key23": "yNh2hGXWi3UWjrGM8HmBLqZuAxAu9Jnb1Tk1M2eTurMJHU7mjeYNcUuVYvFCnTtW8zkq5kU41Gw198bvQgWv6Gw",
  "key24": "3EdiD7uw76G6d9bjP63DrCLguviXDp5V4BmnzbPMFK3Mhg96F6WKEor8gBvB5cH4FBpYnPiDTRvRwkCawAY6VQrv",
  "key25": "3ZFvSy9QuEewyjkr3CrQmqK6EtnQnxGcNSDVwckZSu8EnjsH1LLWu4uXqbpPEwrQuoaUN4YGGD3Xo3aoTg9m4x84",
  "key26": "5GG8bdFAaGexWUed95uhrp1khp2E4p8r58xEcbj9tY8RBjw3LS3VbzgNhFNFRMcAo6m8tHs2GQ76wk8Zry9AzSua",
  "key27": "4YF8cNnjP4CjCPozBuGoVxiLDuGgnKA17ZiNZnKQn76FCvVtbsVBTjHcLSXPc3HpsegE9eJNJB6pzaWvhxQvvx1i",
  "key28": "4yt1bcGw7GNUpuQ5Hh8fKjZHkppfuC3DgdnRp67VL76JyEHkCvubcYkzP7EDujtJpWyrG2THpsjXX7dbXtqNKPuy",
  "key29": "3T79Bqt4MfjK25579qWW92WY5ugEqJfknq4vpXegiFZ1DJh5wWKTgtAxQaHar9SnU9joy6hCt6x8RQ1FiLKta5H9",
  "key30": "4omqDqAAVDcPP6qcFMkxbpKV9kppXsbU2UDoQTVLM6mdGY56zz74Let5C45h4jYfnoLskj5oadjXiGU9S9rmzp2t",
  "key31": "2taDccU4ZJiYLLYF4Fn1LmExrumC6wjh8obc1hxfHC46K99R6sUB5eGDzBHknhGU2kb19n2SVboZBpoYhysqtjvs",
  "key32": "5dWeMPF1R7YHfuLJhx7KGaDneRFaijANhTiabRXi5rfbHkkcKYrex14aez58zBjUChMHSkaCA6cBLfVynArLSMDh",
  "key33": "4penykRzgCFRkrVo5iC3esehB6aJNzahGpWNS6ChbPvkFD5rsfwPSXs1FgiKuxF92BjuBnRBKfy9yDodEkpH5YiJ",
  "key34": "5icvpjTQ8foYD7tt4fWSdeMBjmB5XKXo1yhctcwRR4NPzSVujS5tFz8Z8vn6PXuLPrhLRsj865mbWMg8TVhpRST",
  "key35": "2aFb1P53wM3uvLjsMTM4tMsfsbHMQkQQhiJ8sp8yV6XHmhKJT9ouxwPkZHvskfGJYDDjaNaYJ9BpyKopcMkS7xup",
  "key36": "WcLKASBLQoNE53hNTR2i3H6bJEQ3t2h45VL4TSjUfkCeeKHFc2wzVYir2gfg1aoJEJ9vCa65NRxyidz4S3qk1YU",
  "key37": "4fznG1Y4fmb3ytUghaXgKb5CCeiJo6gzV9iz73pSJmPnUoq1MXdTF5WW69FRPMDS5GvaPMNQ6cXtYmQJBkxmobNP",
  "key38": "2BmvK98imKKXLNh2gnfaeEsgoY5snogQV6nc693MtWK9e2Nm4KFHumUxv3BXSCC2YR8HkJfUwtw98Bv9haUhRCps",
  "key39": "4xF3XPUHRmEQjczTdkMrNWtTyBmhvPdoSfyVd42n64cvMPYquTcevcaMK5FCpy3j9wzGqN6yPRT39tnjvv2eMc1G",
  "key40": "4Hgsizv491YaZxZrZPBQiVdHFDY3UheAu5m6LrpKj33Q2CvDrPSwmjxtCaxCpNV7rf6xerJvsGUcmzHgEipgbDgQ",
  "key41": "5L7cYAWtYtEJbBJfa8BTZvD8sLTVdrh2YWzeqjpMM5uryeKmyT4BKbChpQPjWgx55ooSua5xoc4tThHP5Zwo5XBH",
  "key42": "3ZCtfbj4Yw8ueoxKjygFhgoK1QX7tXVj8H3938X4bQrUGCpusSEJnyew2DPLkZUxgPiQEn9SrNSD8357wWsBLuYU",
  "key43": "3Rg2Jy7ZYmYqUY37RC4WcdGKazaqEiwd52PMbb6UeSxh9F7ABVtDfcitXuGxfrmQEh3sK6mwbBoBryQEni5oNXM1",
  "key44": "3UFyQSnuhUyVdVTQxZ4zdxi3EdE8uVjukkebnvPEKCXY7WiUuvTBDxdW2JtKwsLGKWGAHqD2kjPVwoNGaW69e383",
  "key45": "ZjnH9y6vZNfCpbeUjjqEfAG1HCwYMXmTPfx6pUQ6QwCtB75C2EFTNoL6HXpkMFAHspB6y1BGQp29EREfUvD4Grn",
  "key46": "eKNv9hjg4VtSUi3SjzJfHPqXnmUTWkcdzQ9wMpZfShGnNCywwwbe7A1m4XTzLWS9buP7cFEWNoVsBTTjswZyxwe",
  "key47": "2TTaiJiDDV9r2F4yF8AT2CMMfjuXxCuz99wT65EMe6SoEthg258KSJos44LUWq5fkmZJE7j2yoovn5vBLGAj96Wf",
  "key48": "5qA1iDbTBugPb1GQwduGfnFkXdtDkvbDzgah1vrwTsb6TN34YTYzmwekJ7xKpJ2pUC87eYqo2Ws6wFweigBysnuv"
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
