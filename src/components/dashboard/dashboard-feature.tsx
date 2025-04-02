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
    "47V5CJRP9z9MZiTmgExTnRfwMZb9obQXsdNMYWw8NyaE6w9xhNW8eQ2gQfYdsGW4jw2dy54hR83KAdCTGjiwKJR3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5QVLxPPoGyJdXAtkewp4FNpMGo6TQj6D6tSPuj21jMZ2YMEMQ3NJ6Au12Q8hKptGsruWrxh48t8JY9MKgoFyeHv4",
  "key1": "bhD1EBCEBytW5RRaSoSdUWB2C3PZFQMK7VhtFLNawj4LXaKu9R4Zp3vcNLRzeTtEjqkpbywQVKNC3wh3gPNrZsg",
  "key2": "2V9Wc3uocVv1ENsMhiX4fBGy1XdNr5SB6NEmpvDnpA2948yf6T8UQ7qm5GMs3eLzLVLLM3CKJhfX742KVUm7wREF",
  "key3": "39tvcwUipxMG1RK2XrLWYh17FUBu7TkbgRSPVW6oqSfMUa6WjjbNRpgYtbTBQ9kXDf5geqsQk8PKjshiwKcbFduk",
  "key4": "2bVjShF8tFoU41ATNpNNKBBtpyh7s8wwVjMDZDMoxm8TYV3GrgqK3vuN39gM2C3yqzQ2bkrGnh5pydQDU8rpDyjm",
  "key5": "39Pj4p6AkTerc8UXRgSBvkReQ4Yuy6YhVD9oQELA2MSSmfrNjMj2mxvknBZFfbgVDSbBy2aGsxiRqVxRkqSYBrT4",
  "key6": "2R4wnd9f5TJRDisXTL5iDb2jqwikmpHwSKFZ2BsTufM3ybMtN5bG2UBcAsdfSQzE8TkHtRE737yridTW3nBTmY13",
  "key7": "5MpMMiwytW5S2ZDNB7CNCEN4cD4Mfoyyv2ArDTn5a1RmhbZkh1cTXZXVeGHn8kD8b2csgsdhe7FeB18okCANiUtc",
  "key8": "63Y8bKoz3gwmAZg18vg4BXqBHwiGvLHthpsN39nWRdPZwYuSYaFGtWpMZXeVNrMuGLUW6zip1jQ55t3cHJ5XiXDQ",
  "key9": "3GHLmMx24HwqZPce2LjNKXHTPx9qQoG4mCbNGXH89iabyf53ekbW2xoiWotjU4VLo2VaZUNesFJfTJAsPH9sZujH",
  "key10": "3wDvKVNvexc9CqykatKM7bbke4p6iMbRwV8ok7H1ws5smkwaMySMknWMQv1ebD2WoWNgYPeYykcBpvagRv2WHUoX",
  "key11": "4LqR5KV8psUBMi1GRSfkHvEEtyPg8gYbv2WKhUXdJjWGztrt8H6PbXcpqNg7YBw6MYVrzjzg1Xa45oxpfw6RBXeq",
  "key12": "nMkucaqqt8VdmCRThGncSB9Piy89afAxRroXXYhAkDhTgZnsMx1ezeVyCKt1bT9puV2s7fd41ufsYDq6tnSeB9u",
  "key13": "7qvYcTpiMLvoaUtvTKjVjSDFKyUKxvDjNeq8iawmQJiPSQKrJAbtLwmL9GoN2Hbd8G6LZZG2kFgdndTANABvWYs",
  "key14": "ukQJ4dL4VGWyhD4uaVFHzGHDeDXka1F4xvFe41zZTXV7wJTTmqVUaAJEycV3wfLKtbEkiCVaJRYjRDUdmiJEw3K",
  "key15": "47JtgxYkDiEXHqBCFC2ixNvMg6xpiwvtvxJsFo21SAkaiF1gfswu7FinxZ34j7eScNfneCtP5bxXnGRrHgz5aJza",
  "key16": "94g2rdZ31QasTfef61RdUVmJmRiPGgfdJAhaLPvuij6ubQuTxRZNoWPCyFSvUS1CEUimio7UdYrij67t85ZZu6u",
  "key17": "3a1vbNdArdPauhm8TEBQ2vd5HjWsrMKKbBq6d6ptLm2LqFjFhkbre2FCn8Wn5LuQquXNfsxfTge3oPhf2QqdnWLG",
  "key18": "2HX6C5uG6ZZ1d65qYijKVbSU5msdyZaqGcqMsAFZxTZkfWKmf4EbeMdUqx5B2kqx6wpABNwauVWj1ATVivd6k4bq",
  "key19": "DxMt5nSbJhbVR88xDADocP3RaWcqa12Dw2wA8rRZYvErNFwFWmHuCqdb9WKfVbC2BE3K5eBqavFk9Drg6tKYxhC",
  "key20": "QPQ3Cz1EBzpE9ezmFKWNiGxUbsjRqf68vSbnGR1xCbDqs2QPHH2K6K5CcxrgE64oKm7rrTtNXporzUVpJxSpR9g",
  "key21": "qn8GeZV7Soz7hUa8J2ABswpkbJ7PLYBn1FW9iLvxBo2Yo5EQURN1ZfRPXwHpdTNvCWBUUxJKQS1KPYwqmWG9cuK",
  "key22": "4sr1o4LQihncwYJwDCiEgbdDK8KJNuwKVdLYLZwpeaXwCvidE1VJg7YPdbyjEeViJzr6XkVt1g3FuqxJAMea8C94",
  "key23": "4k4WTuygHGXynCgKWNnKSZiN77vp6aZquKB8nuKLxK5jmAbVw6EYdSeRLjEjdLdT7xaXH25dqXG7MUZmkAewxuSF",
  "key24": "5TjLm7vtBtUyzsi3git9ko1xr1veoVyKnUAozeDVrjrZ9AVbeUQ51kBDgnUjnCjgppCxQsGZQSw5ravyEbwereNi",
  "key25": "4fxmVXtRDGBnXXvhS25FpRCnfPniVxk7dfQpaUfnX8nWrQ6AU6sdHw6xCQ2HyodxH8QVLgLtkq9ymF9ivmRpxJrL",
  "key26": "5xd9tHavyeabQmnT6oqeLyAjCj3UyxHVnZm3NerCrmwojJy2LQKbvGTBFinJFyAtHwvYLnZ8orTZj4tWpbuWkM9v",
  "key27": "2N25rY1CVJbdYzzzaGfeMpEs5XzGWyntgvaXsQhtFupBCiG7R3kRdFiSWQarGkNEtD9Lx1ZbVksdzkwYkDq8FPjW",
  "key28": "2gtnZXkqy47DuTFEiVKnakuA5ZQDWhjCDbT4V9H7c1yRkYydrHtG6LLyUXz4wv4r452JG2z5gC9aaZ6gnssoMy2u",
  "key29": "5kB66KnU3U4iVvivGKAknKtxL5LM5QY87SRypXwDiLd9c8xDcgVtQujpqjf88XemRXVRBj8aRuseRbGzjMPu3fjp",
  "key30": "4jJaG4eKBSDmA7hLHsySDVsqN39PZc56awr9xpGbJt6Hx5npGo518WmTcy1sYC3wfUcP9g1MtTm8MWt1swjRC4mh",
  "key31": "3FoWccwm5u5vyar738cGQ8McvgjHQsXFVaLhRe5mC791KcH7MPNKDgPL5xbA61MYJrGdfVdL72gwTvKRxvCozS98",
  "key32": "5NJoNNcsvezDQq37chCiwMSixgUR4yxvBdTSGSgmextqsm5VCZPCkpuxZC33vV6oxUegNjjCgM2PeTPZvLx8YEHS",
  "key33": "2NWt5vTKCeyuGoCQB9GwEPd4jEHBkBNnKzjNHCUbVdSRVsJ9uS62cH9qDEamzdYJ9TZz7BAv8q64QmpFVzjPk36d",
  "key34": "JuoPSpTWPsxMvu44ZtHyumu2qgtTEVBzWZCYLkE6wcpA6b5AFY6rBh6BjHL7ihg38WYEqzXzk288HpikLTThKE4",
  "key35": "2h49QoKrgUFLavNP6uGqw3jb3ckAjuSdck6baPczhCNmSZJq3cG6gVWfyYynxwJPtTjzd3ytaXLp8zUJZ84FHWTG",
  "key36": "3apgFR5LfqbteMZxKtArJNvRUQdWe14mAec1mUm6eawRUAAmosQMBt9tygdYbmQGvxATTBh4LiUGzBGBF3dD7JYP",
  "key37": "YGgBSyni72SSCEgRQGkHoTWxTXeEfUjGNhpJTyJUbZN3mbcFvbCHRJTw1cLo65o1HsJuUX5VoDp8AuK7dDeq1XT",
  "key38": "56qypKWA4mjb6NPV3u5jBHLNckoR1buWG1WFzTkpXN7WCBmpCFWEfLzfotNw5oKXrk8hg3YgSUntj2oHXKpp67XH",
  "key39": "3QNiJ16grpM2uPJMrJMZ58kZ1qkgyVxTeoLTZsjqyTz2KXPDenhTMpTpYg8aHGZoj2qT5x1NNQ7Ys9HXJcrtoYSR",
  "key40": "2Sf494ztM3MK7uxL8GeUYDB51vSXpNmqyNMNTbL5GwsBsSzdp7Db7h9dYF7q4hCKG39AB8RkSh1kGNyizHxZ2u9X"
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
