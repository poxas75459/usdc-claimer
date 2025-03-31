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
    "3Yw5YbdjxubG4ULony6xSLzTNw9DzVqrmCdRga1QVMkK3bKxC4X3sFh8oqYxpmdQnmn3CrEHKuD7xjVv4Pzos16C"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2nucrU9QJJx6xtYPioY2F3rr3M53LqQLMHfNhNNfa72T9p5XqHF6rYBo7TkZa44Gb26rmRfN2yjZmt4CWq6pkneS",
  "key1": "2r7MAzmGpFMatutvdYD3Vhz58MTK9FFBkctG3wfUVqPGaxs7SVcpM8oKANTvSVtZADq6SC59YW7hu8zFVTQqaUfc",
  "key2": "4qvTGdS7pjSzKFB7hGWE2DDCr3xVaruHBRB6sntGFKNQn4t4WxPdLALeSdyiWj5Mj5TA99cEDMtxsXL6ZBik1icq",
  "key3": "4LxBBtKxiePZu9Uq128LyCmxunFjrKytdYk1YySpSD88W2WgHYy7ZA5U74AbXMQCEnFrE2HFgc8brnErxrr8tmTD",
  "key4": "5pN215q8CSerhrmKBTiBTCpFZHza6R3LJjuPvMNdxrQXc7gTeudu46yJcVNsGKBuagThkXK9cgnbRFK8S68fb2fz",
  "key5": "2vgF5335NK7kmgMcgwXVtALNWSzdGpaZK4t9DLq1TM3umytHdnAf7cgLjKVpDLrqhFR5KKCZUE4KQpsiFdADG3jU",
  "key6": "41Yua7yap2MSwQ4gsAhMBLzgSjxUWpu7hL6sf1sdCRPFCQzaPjcPU1nm63ZSdU3UYc2AWJyKu8352ewuLGULnc5b",
  "key7": "g9tK3zoCPH8DNWRwrF5ZtirevesCVoW38gYKuoZKDoUBoXcDgs6Bbqrms2yNwkaAUn5Ruz3hEkWjLG5sw2Soe4N",
  "key8": "5Brq3YgpNmUDmYsu7GrbAZyaSgWrquZkDVeWakMWm4suz1wr8xA9xkvMNfy6Snf5oafQiCKJhfaVRvsbLXNZbfoB",
  "key9": "yF4LBjj9vaVy9wLFGT467KRQeW5svHYLQtiKyZTVcc1kHeqai2e7ZNfNByPWj14Qo59xXHQK26119MmJaSJAKaR",
  "key10": "5VRzyZgUV21jmB67dmRxuFn2dXqAaPD1KMXBynfAPZGYj4nLcPgd29tQPC9gsRVBnFUqV4eBAJY3wtcZhMwWhWi2",
  "key11": "2vB4iC8kYN3GtG3mpxibTcwNGxAcoDMPqH6Mdtz6P86cLXpFoUtWQAzAj4tEK2z9HNHKxoS252xpqGM1T85VTbxU",
  "key12": "4MwVqZBB5vTKi3PRD8hjiD33Z1AZFqnfkkHcJVEkpVGqJKzgsZ5UjnR4boCMfwHXYVvhJhpqet1PgN5wiFwHEGfG",
  "key13": "5zusszZysw49Vg4t2KRzoFCnGUw6E9w6VPRJ8CNG3BAXP8p6cHQ3THFMGdBWwG7CCDTDKahqkPCQNw9yRNhj7AJC",
  "key14": "4MxrTf33vvQLr4RSGf9Pb2adxqE5KR2bQEwhtmP6kmRHyjvkeSj31zrdJrGEp426ve19PYEPbr7Wi1DdpB9LgM7g",
  "key15": "58qPvVe34wmi81SiudzBQs77aWs6cCeBNU1hxniF62WWVdiPAgAkUn7o2hVN3YwxcDFTHzJZ5KuzQLHk8qykkV1j",
  "key16": "4rLLUJH33nYEskCJxvujV8WmB5C3Ah27rkCzsQPUcZXsoP9sVvtYzdTGFtvm91xYA7KukvVYjtdGBzKnybdRMNNa",
  "key17": "5Lcimw3G27qSfuCU1T65pXfWD8pyFuHBvBe25meK91eiKAGrwA2QmGVnPH77F8VdzA29qSy6pjPgsE29YAZphDQt",
  "key18": "gZAPSQQYxpq4JesapCVX194LQ9kcrAYXsyLSyYi1wtWDSZ54YY9oUZBaDo2uJztYJ3MgSA2YswxkuT3p9vaeR8c",
  "key19": "4nujurLeUK8MNcSk9qUGW99x9w13DUVshy9Vg3XrAdfoU5r2hpaqLxpB6rNTwyxgkoVw4c771W7jmkzMgDbcxzWG",
  "key20": "3ssbBBK1iMH8gpsYZc23BftbeTeHDxKG5Atc2duDpBnewU3SnLoZqMBJjfQd6yboCGAWjyHXwBAZ7RXz1i9jWypj",
  "key21": "58q9auJD7WSGkiY7ymgYQ3yiyMfWrcWbvvuLhLzajMEyCQNyNtMZ7cCdTAndd7uUBGi58jxve1tGxAhN3QjeSUDj",
  "key22": "YkA8eDk5jt5dVssqWJwfNag2GeTPPJ5wLgyzpoTXwXAXk1Ejjx3zuxQ2zgc4jsg59nd2FQRaBpvWq6AcJf6XV4v",
  "key23": "37zEAeZoJtjmLVWbzYMeL8pzePAmTUzL5CAzjWaAg1Yh4tstjpLdYjhon1HTcqEoSpkWmNv2m9sRbZTxqkgvbYbA",
  "key24": "4Hxs14uj6WDRJFx1oJJLhroe1UoyFjB645obk6ZteNeD2vzTYx8Renhfrvci1KiZ6887LcDF8ccPGuMkwihbKAA7",
  "key25": "t8eQaoKx7dPZQ1fRCaxMw2fJzkZ7LsaCRjo4Gdvki5fwXyEy1Jv8VLfCfy7XoHQF8DBXpkVDvWv46XDiorrn8cx",
  "key26": "2kd5tgNWKd6tKt3sdMhdhGwTt9jXEB1Q3v15ktxGEdWfitCzxgAEq9FqnGaCvaowkcAE5Y6acne3ZwPxmW3ZvtrM",
  "key27": "2hJAKAafu8AB3WjooCnSykCMxEfeUZPGsj9g4LwG38SVywP9E6AQ469FVt6dacBisVkeY4kgxJCsJ2HGTNhCXjKi",
  "key28": "CHFXQuPfYiHignPKFLKbo9VkEsMA1RpkNfgcuyQyNn7uSEcpA7MYHTBzN3MTqgskVqGcREjUxCPABz8tNG9S41K",
  "key29": "ja9fFFWUa3QzCigwtb7wRa21BkKYQHhV68HYnzchXkYS3PMG6oafcDLSHtMyBwruzoQ2GKhmp6XZFCBfiDmuhgg",
  "key30": "4WdXk3J9PhLSFJXhJMZZ6jTSst1L4jB8SfMTzziY5s3kyPwHzUhvAEXmhwsudqBeMHR6xPdnHdZNUKQ7Xw9kjG3w",
  "key31": "Vm98uc8gqVGDUDV6VBoXR4pnBpqLcyVPXY6Dd2cVjdkWXHaUtjc52qK1kBqeivpSPY1cFyLkGVtbnGYUFphYT3W",
  "key32": "5Y4nyYARkWMeonVCxfZZ6c1p8XRLA532g6NpBduBQx9uCTeHvhYTtUofacPg6hxxwKUXerUceQR6XQqtntwAt1yi",
  "key33": "21qHFkBunNEQaPFc66TA2PH47cKpHHVGwEjA8SuXmTxadgW5pTfccwP3n9hMkAs6RhHdG1GWRb6wXDFWDrqzWDL5",
  "key34": "3ataU4774HeWqdRw8pUKPQNyGoBH5gqr8D9U15QvQN82Kvd8jdZkq2SQkBVKsPdsRE9SEqAbWwX7XHJfeC3Q2FRs",
  "key35": "3mb69UX7KCevFtJB8if6gXjHvsJtjnuHKEbtZQPQasdSAUjDB4uoodr2o7DhPVHugJq5gxWSXgERPSh8UEFnCypV",
  "key36": "4i4fBAipudQfifCLDMALEdKvwXhHxNgPxMUrSftSi2eZXnTgtnKuSWp3dZuRWDu4NTjK3t1yFP3sWcp36NWZ71Ba",
  "key37": "Xdy2iCXF7kNS5vFrBHNjSVysdvujx7kM9VdAPPpSxnPvaZ9ni1Ttw6bVMnVdjrM9yHCPPX7r9hTCFvNDXLSisFr",
  "key38": "3uWryDpvkjWy71irtnHgPFT3sfQQehrDrA3fvU69tTMoqzccM1AMis54yEgBfPFccXyBkymchozP8RdUkdmZXEne"
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
