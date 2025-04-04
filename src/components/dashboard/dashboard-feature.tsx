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
    "2KyXZFyvy2jB5djptnzB4b4kX1h4MW5kDuXQLHCsQnipp7zXP55t3H1RLpwwpUabR2UuyLLHx7DgQD1KYsVwSmRZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3AE9zCcHP8woKBHpHh7jX7crWkYyS5X1H5nznv1eHJaSa6tFXNEUcMZm3XDTJ7XRFaiLmxqyTzK9QGNTcbEJuH3b",
  "key1": "2dcjHmBqz6gETCKMaAQKs9SRhia31Cy8oRVzAY5JvyWyxbrGrAfqcfVufrouyLAQLZx9fc6aCWNgThD6jnVcf9TU",
  "key2": "2Q5NoNyumugjV9aKQCswRZEiEjeonr5cc5PCQEaYH47gwojdnpAgecjF49EvvSGmJ7KM2uzFLHwK2ythd3y1XxV3",
  "key3": "2A9LKB21tGDFoi7EnRpH1Cb8XP9LFCzKPUHUwJTvXKRNwRcWapuhYhEwtqsRxifsAQrJ4fsS2uNvSUwC5KjtkZTC",
  "key4": "3E3YvzHQzjqvTQ6vUeBXYL1ZPrm6P5EcCFHFzpDDxmS5hWnUBF9kGWdQ4AXB77UE2PkYk4aBRE9xDSAZJeKJ31GW",
  "key5": "4pVt2378pm76FnRTc6rMdmeopXc67dy5M2NC1yEjHec4w4gFcRMjnUpgzKF8YYUjXQdVPFg76BJCZJQ2f3Yk6wQs",
  "key6": "2yJ73GfWLjoVx9CazDhfRBw517mGN3QnvsLfTjZAZgraVLwc3HW4vwnRjUw8GFUA7mw35EzSzcvno1U2WwdoqhJR",
  "key7": "35nTXsNkG4BVf7iej2mpjjb3LoSGUP4bGN2W1ansVBmNeEtnNqsko6dMioopghZK82yTEYhDjnRxV9um914QaXWn",
  "key8": "KQsRu959vsLb9dDPBVM4v7Fda7s9KMSoWPEv2p1P5jbgqrrrshwrGywCkuaJPv2PA99kscvUqNcZFr6a4u9pnav",
  "key9": "4NPhRcc541A1iJBXhkPGBTNwvhWM4ouPnoHdeWr9LPg4rB8GS4jpFfw5vBAY9jYRK8mJxNVxMaJy6RRnaKuSjLkt",
  "key10": "2Mj4CkF2rYambJmWU76hvHmfDPZSNbTM9FPgygbUhK4ybed1aFYnRveYvN27q1dbKbHdSTgN1b99iZu7AuZt8HDK",
  "key11": "49wkaaQMwpH3NxDsnLXa8YmtePGfAyg7wkmRyKzVex6rWU1wQuzzb69e6edBmUSXwknmEnCpoA4jnJFWz2b6hqt9",
  "key12": "iyrcEDhdwfWKU8n1sDj888SxXyx85TitmcCikFoPz4KcuVkr58fd75PkPZ93RwEFJ5c8Qi8PbtZUFC7zKPYpyv4",
  "key13": "4zFpz527Qf7E92vgKi8MqVp872vmvAN8Y5Qs7tKhi7DDi8jnSrR2imh61xQwtFguAA2EYDcbgsAsHC7CA1m2nrNT",
  "key14": "wrxQe6iJs1uj4TQ99p7SqFuvKB6bU46sDfn2Z9qLkNhPuWPoCeA5jrfBVNYHRoEBA9EQUKNcSs55PQ6jWjZfNaY",
  "key15": "3C7sCFcFxy8yGb7PwqJMkHQhi9L4bdPfQUBBGuvAbiqjzSuHNd2MoPujKdmTur5YLapGWnmexkNciZD4PeEgDkvP",
  "key16": "DUWHq8G41ePGcC6VXnjvcdU34fzUEDBSqRdMkcAmZRJqcRCudrYHUiyxKhBBsjWiEuwxRH8EAnQa4TW8ivLn4Eu",
  "key17": "u4RQbTCgdAho67vyLXJ2hyYg5PS3XkVUdj7unAimwxjg27oHfveVvVFz3PTmQkf5NLDFWPQ7Df8wJYQ7XfYa3DY",
  "key18": "5vzbam1G4E7Hipo6wCNwYcumDcu4cx5vXg4byM7Uzc6kECZ3mbbGvJqw1KaHWuo4owgpAL3RZ9wtP1bNsfuzU3RT",
  "key19": "49CwFBssC8329cYp68LtNthSYhwD97kz8ZbiTEty62MnkmtFQEnGaP73YHDKrB8GSQeuiCcR38Ghz9N4wfFvhsxx",
  "key20": "3pae1zQaMWYxauQiMrQ6QyeUuDP6Z5CxGqLf2wi8AuQJsjJQjmYAiA8Hay6aaVEYS8YZmvCa1mCWcfn3kzz2QaoR",
  "key21": "3B9zmbWp3BAqwoDMfMkoeyTUqJoMmCpg4Ee6bTbMsHaEjxfnKpbqW9tZ9rrEHf9B5yX7CSsKxS7DJiUG3WZe2EZh",
  "key22": "5gzmUFekZJLnb2qQKg7yc1z3oPTDGzrPotQqoXc8KuUzAkM356ZjwNLL9UMVXSeLjW7SAJzcbKftm8EAedLg39XL",
  "key23": "CWGeGZHvi2mj4oreqXoKfYnXZFk6zdH87F7p8razHyNBiHxLiXmB5NrPV8ZgDPaNQDgC8DA4uepD49cGy5bv14n",
  "key24": "3so4dk9588zwXEnV26Cozsudc4wuvuZcSw3WRhGshsKPBhNejymzwB5zRfJZx2Z7huyhGQUzXww6Eoz3F6DLsBWa",
  "key25": "61FgE7e2pBHEL9sLHRMD5hb3GVKHxb4y6cwB1BS38afTCz8RXAUt32HkR6u5boKCpk6EiwARH5Tyde1zjJ5Nnppq",
  "key26": "wgSUKekF8fMCo1tfGh52ZEzQZ1YiDPFAijd3fCpjuyn78Dq5ZbWyw77JchAUTxSGDrkoT1gxQoeSzbjQgvaQueE",
  "key27": "4NtL82viin82z6JzVuruBdzbtBtfbS5shHoh9NQJjS2ZjRzjM1imTVHoEh1fErWdHQrjj3D3HDA5nWks9tk8tREG",
  "key28": "3HoQQZypKYSNY7pigBtp4uabHAif1bKx8EupUeSDgz1QXPcKwf2qdYdfPQFfo5jamFK7Jfe1veQ2Cf9dE6pDEsKf",
  "key29": "3g3TmgHQJPcTYrox7Q7DJEWKnieR2Z1ZThwXnEuon3jD3LTTb3v4wwUKYZGAcVunstkbWLdU3J3UUQ3jfjAv2vAW"
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
