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
    "652Wf5nH43dLUjKjqBVWNBBYhyJ3uJQM5fVcjDEBKbpYRwyaGavKnqsPqTw7MhgNJ9C5EzRJgLX9KbEea6z8JqVa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2a5CW4ywogDwn7JS5m3AApvxSvbJUAUivFSdDvAFhDzzqd5UUaMF2cknTrqigwMNR3jTnD5uBKAUXm9Rk36HSQCZ",
  "key1": "2Mvxc9AEP8GTv5CkxoBDzWjNYyKiK7yfPfdPEBpN111kuxi6YBehTsf15cQHGjrG43rbJYKVVZKbz4GbSMR1w9tE",
  "key2": "5JVumnV6LPbRTUMFVDtXFMDpLdJkDVjpE7qFp2xYv8rpxdtBnVCkNTgRzHCf8Q2nmComzz1XyNovgezc1ewTWkEN",
  "key3": "3B89BV94jdCEr8CHe9infjn1gzZqxvcVTWvqryPuKUhWW7k3paEJhbArg4LPULEf5aa29TzSitZh6qaRmo4rZbeq",
  "key4": "5shkVZwUBuu7zGnVj5pTZsrkLN9YUoo8ThtHA1JLQBFgZnG6p9LYhwfJEsw75Buh5qezazQ3B8gtzkBhbg78jH1y",
  "key5": "4QpQks1bwzrUxTMz2PWVx9uxtoZ7pQfwsUdYj2MYssFywtZ8gE7Sw1znu7H4WarKt8pCTVrE8QT2fp9mkws7oJEi",
  "key6": "4vJnvrfo7SSmCiTLUbHVmzC7qBt342htq7sNPAJsDPj8ybjjhWBLD4rMbDhrD5UNRRE6A6cub8K9gBYwDbZzJok2",
  "key7": "5DczxvfYEhkYh8nHzHdLFPHq3SXnDH9p1BsXP7VBapoKKkKVvbSVh3joupSE7w5tLHtzVDGrjjcvap73FekPFMxp",
  "key8": "8BdZV1J5CB5gBbJVpMzHuNxs7VBiUL82Zi7qVonpfxy3bZh7GyAwRnu6yZu7W9uppMaTLnoR8Vgnpj32MUfxhzQ",
  "key9": "cvymj3QSJsDvxJMbUc8McoiaSPpSxjcuznhGYnav5TdsD3Z1HL1YGiKf5WHHcjLeuU1B93gMrbVzRGW1dxZAhi3",
  "key10": "EL5cobDa13SDnNGg193nHvFDzuLdc1F27jbPtHUBuxXNnSCo81GicYmJqt7kDYMB3i3sGghuGXKxhW12WQfFpuC",
  "key11": "2253GHipuMfjBY3XDmfMML7q6SFBiqQbjMGRuF4sEEk4M1qMSAocFkf14SBpy2oh5KmXc97aA5XMMarvHnPqnEDH",
  "key12": "2oZUDLAekAb7MKoHoMWcuDsBtCwKHzy7EdpaJgmtSK6aJQ2SjxUFLRhPCTb91QTJwHdJQU8QatAPWX9rxRZ59gLV",
  "key13": "GLAqZ1Z3mMcXqgGvbu2aZPFQZnfyGdEG1ty82BiCjU5tTckTRHc4e15WZFVoo6kJgjwKk6X3B9FBHJMbeCAivq9",
  "key14": "3hp2H9saVRCmPNbUzKUgjuHt5hdH97Yh5FbABJqkCpqY33Q9eSnA1TGngzpMGTXs9HP5J9TYwk2GuqLKRhrudJyN",
  "key15": "2DoVwMpGMojupnUxwHLRtDEoLWYyiJ6HfwixiwkBgGV2XnffAS2KJVDomeMZR8fDrbhDYg3yKXWqio3sREQUPYzy",
  "key16": "3dfhcj1P1eVAtHcvc717kUByEdGBksshHV2pFFUvASdfhdnXYY2pmom7ny3TCU8qxcuJYfNESumTVmbH6Komg4EP",
  "key17": "5HCA5sEJBpetPwyWKkbq2HnpaZoqdp7kZvdU5NW3U25qBB1PgCryXGMDtuWGQ3eqzEKYB2FsA7KZt2XJqwvB4EAh",
  "key18": "4fYJZFJZMNZJwmMJowGZG34KZGQDrGCCv5zsxUgcDnSrx4AVir3UGzxBkqsLQf8c2sDbVKXdhmsHP5yQzazm1yKQ",
  "key19": "4orE7zCfTU1oQaxyyks31eHiJYtMD26pZ8VA3jbd1a4wF3NxCtdgswgwevcDvgrxUtHnVy9b6gcKrZRiMXuWMVUh",
  "key20": "2t8xq2r9yVbbt6DLkxbd2WBwUbv4rqhK1FHmCWmLVTmSLYvYsTz6fb2FU7Rg7TUyALg1EsWR8fc2PeRxoLF9FvJy",
  "key21": "3LLVoC2GUxawTTnfmCvqbvcvDwfWWH6QeUSm7G7JPZoPh7G6VhXmLUKEa7XDQYH2qVgFdxe8pFUs2u5ZynpBemuN",
  "key22": "42ie77yjkM6EQSsQamksYjFmUEKEjDQnrmW1KujJPPpYxGGisgDjUvp2oKrQD2i94Zyx9jJVy9Z3fugHMzhqMWeh",
  "key23": "4zSpj6jnEuj6XCuyVREQztAqmGqvBLphG9sf5b2PHKCq9VmDp822G691ZFFBRFgvQPTkHsjZDE7Fhn9WQN8BqaJY",
  "key24": "3Mq6th3xTy8oZjyrAn8yue3nAiQXFyKVKj15EHJ6uBiXmci9KaCnxzy3AWTfp3mZvuXtuW6Fywx7b5Tt8TLsFzwy",
  "key25": "4hipzZgvFbEjYAqJVWpiUtbtkY1sJeBh9hUjCw1r48TVdRFGDzL978nsHsVqZ3F8A6Tf6YVGd3JdJM3RZqxomJF7",
  "key26": "3LHaCmzpyxjqnLLH9C5negLyz8CTSQVVmEgrqhbp1Go7tDHSaJymEeB2HCspcyr6RXJkFdr9pdFnFU6SwowkZUsZ",
  "key27": "5XRoRsU1BELNdSYc3Bf97dLrSn8TbD646RWBqFHbQD4mapxzVJJDcvRd72rD87Ur1Hv1JBBAZvKxqmeAV5Hvqawe",
  "key28": "4SoW5irm1NN3ScZVwppn143kWBxHDUW4ozLPLTNbxGfC32j5onx1GX2VcW9dPFjCGsCgd9zG59ts7E8ecHzQJDoN",
  "key29": "4gs34z2ZXMpnK2BMFP4Nt3gD7myNiPzj5ShE6TLBUTec262y4X8UuTrt2btrHYxD853uSgthpVdiRogQu4riixt8",
  "key30": "5YpFztygiuGJqYSvTej4zxK79SyeT8JaubsBvxjn23cx5YKYcRAnB9h3718i4jNYWa6M2QY6xewA8Atr2UpiQKG1",
  "key31": "2SQBfia4ccovvDWnUqcMD2sVFSzYJvui6fwZ8nhKoeT6EvE4R7taocKW22wq8Azj3RiQEuyBngbDDQgLE6EpX6tv",
  "key32": "4gzrD1gPUzbXVfJ1f1qEB3QvWaiufSW8q4PDNhqmmVJDheB4ynhDvkPHCf6iEcZMUNxESwaJiXwuBKHbMefdd5i6",
  "key33": "2p54DuRtSD4diEGQ4rEV5rYjjtytdAzgnaZhJkXtoFyzWhHzg2s1bpGz7D3W2KfsLRLBiUXVUYUL57bfAagj8c6S",
  "key34": "3MsJA4UTPUAM884AXcK1PKFjVjrrnkZYaQm3fXvrei9hezDJj3JtvqMumwifciwJHyfBTqA6Mjzf7Au84Wyiok9g"
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
