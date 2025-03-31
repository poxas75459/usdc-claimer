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
    "3swzKYp8tDhDJ3etm29H6DTYw5vatzYstt8a6CqXVGS7W34vWypCcVXyVkMdDdtFVZVqtcVeyzKRgjgRf98uBN3P"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5zi5Wm2xtz1kdQu3iFqkTCBSX8PzEKqv3mpi2X2DdeggXmWrS8gZzTsSqZaepv85R1yzy4zycFu8Xz2yFrjKQzfx",
  "key1": "7dtLuvfiTJH5uM8uNVvYdebNcUX5i6yZe3uPRr6fJYKLoo6F117rqV5Lu2H2d4cHDCbzfxv8JRGZFYXenExMGZR",
  "key2": "w2w2q4mgBR1w9Ge6qYpGCj7vs8pZ5yzxUbHptsJaVmnWpLZ3TF6mcGY9Cm3iunLN3dJe3uwwFao896ncYVAaCDd",
  "key3": "4zu7eUbP9QQqMGZv7SSmY7Md4K6xKyRNf9oaPpxryo1JGKVy9XvxS9uQjgjEg3VqvbinwGn33ZzroHt5z26YSQ67",
  "key4": "3QHTwqi1FGgNmevPHxvjD2KFWpBvRL9wELarpWAUNN7EH2CmAxhRMDDD6sf25e5Jw3y3ETuDAGSfsmpAE28ik2ZL",
  "key5": "4BYWG2PnU9Ent2D9UKZfgfxyi9GyDMd9Vdf67a1nnzcQP5c8e94ejZ1UhGFawxxxqgHY3LpYewcn3iCmXBsbjmvY",
  "key6": "3JsLL3DQVBFGz5DcXGrdN7fvUasgCoBdkAdUNX9V5ETcCz8NdyvAkGXT5vuEkFsobZhVEdsxycJPZxmEpF3DCdWx",
  "key7": "2bFaQhS6ybcM5i97iesdC4wonKZbugJ85BczZrN4wnoazksFWcCQo5P1eT4ehFFYxhc4UXi7XyesCKtKBuz5UVLC",
  "key8": "2u2NQBc3zrhDfzVSpqHNM84bjZSnzPkWigk6XGgxVPNX8V3rHucreGAbJzwqc6XnKxjmYTTfQF4ZiD3p9AHSoWh",
  "key9": "4gocoiQggtmi3neYME8GYaN7UnHiuP62npCJoBi1E3JaBxGp5Mz1GJURU1uaoy4KrjNQAeo81TVjGbGaFmbBUtwt",
  "key10": "VY9yaFRwQCR2eBRbd2dPvB52ogm92wT2b3S4Lwj8PVhpSUkRQtW1bPYcdVkJW58ZUmyzmJkY331eUerffpZZz9x",
  "key11": "3epnmzjqBzcNZdpMfAJnwbRiT9HxAy3ScWB18MQ4fqb2BdgfWvqvhVqyrJrxtZ3754ih728J8hnk1ZuwS88UCz2w",
  "key12": "xnuFk5EoJsGzVdqWfhyRyUZxxRjA1KX1VTFKEXS3J681aNJmjbUmAbf2Rws6BueZKMXzDq5mG7NyRyaduMqy1nU",
  "key13": "538nN67M7gavsL1AxjoQubGzJc2qwN2seciMFyqd59LhxCgQgQ2UkC6o65cF3Q2hoKp8cApG3k98G9S3NMiP5kek",
  "key14": "5MQuEXi7qw9CojK8nuJC2nSjGANfSodq5F5ATmCX48wHTpPz6RDh99ez83KxdYnV1gRjaWWuzAi9rf6B6Qb3ZFPz",
  "key15": "4KCPX756ZK8kUU3DcoJHfXi1E9FbrzSkJSXUvRkvTWiwKsdW914R1PNMLQRnj5wr7TSBFHgEJVrsmYxkTA4dik9g",
  "key16": "3BqEfjjmMiFHStBfTsX1KRKSmDuJoLK1zPE5MnfBWyhTao49J9YEEtdEP1pG36hK6YXWZQwsN1cFoT8Ra266tTHx",
  "key17": "4Y45JaRrFsZoGUJNuQN1wH5NgZXP8yz6n3wcosKaUqT8HTi3L6zZiLh3jvmJKoQs8DwbvE6QoRTLbzeUBzhPNG1G",
  "key18": "33Wf8wWFpSkB4rtqsYW4Bm9SDTB3wiMtrQcXJ5g7enRw5c8vP6d9HQNtoAqxL4ViFWcgeYNNeVWiZ9pEwWyoBxZP",
  "key19": "mgtbwqt212Lp72KbremvKBJo99pZ19D7aNjSxRKHsGxRPT3G7iPYPxe2ZBf4vzc6UTbtiUpzGqx34TYQuWHMy48",
  "key20": "3MEPDzZC3CLbVXFuhhwG96SrwZuYWek3DqtQZEVSEp7AHJB6JN8g6wEWDbhWqsry436jmsbL23SFn6hjY6xgx5aC",
  "key21": "2Q71YH4o3TULY3Rt5BNdZUrC5XK4uZFvWxop8mmTCwv6kKvwvVQBGNY5qnSod7LUd8rEAd6gKipqc7a7JAhaq8Xp",
  "key22": "2foSxtehHNcie2hRw16pEMznd9dJwwy33TDzmeaRGttFFujKdNLY4QYD4Yip53Fb4T8doLaAoc63bKhQohXrpifr",
  "key23": "5VRrx9G9zNRtPW7F4au35hNa8UTPd8CTp1ivKzXHE1xs5dvhnMCXVtKKoyzDiJaXB4pp29dU81wmR4CRBNr5xuGo",
  "key24": "2HzeSBLqxfgw4wbc2aCxqkzQpeyMH5kcyjZVFnbBsSL4CfQtJ63CazL64rcTtpVq2sdZ3bPijVHrqEzcUHMD8ZA1",
  "key25": "2R6XtnXKgqgfFRyLiWLqbrGsCU8BD13WmsGHGSi2P3mtZcpFAFE2t4AnmVbkEbZ5EXDyj6gSAXx36eoRCHqfWLTT",
  "key26": "2yeiEPyUWRtQm1FuEbureB82rVNVkARNVFqqFUeFbGm1V5v4k4f17B7tTECossLVz2PPAGfYZDDQLN5yfUjieo82",
  "key27": "2mYwge5s1y6ZgRgcx4s15u1Q553EMhMuXmYWj8Y22Eu2RZwrytRN8apFZ1Jk9wa8fPxvnvueyGNyNJVt9PLyx5d9",
  "key28": "58C4nMp8qp7ELt27SghexkfCxZpyFTX7xhgPmzQadr4D7yijPUUmkymRcTzzRN9pb9TLFEPuTe4jFh8kKSVFo51y",
  "key29": "4eZ5R4yRoL8L9Z1PXQ7nZZvYyQ28LoPMrfYmQJBJHSUqXZXGJX2woxzd5XiqFdoPmetRDUfcj4efUCQf7FH1FP7S",
  "key30": "5P7AYPgSHrmW3A6T4prVw5r95WM81trhPTWxPbY9WakWXBK9zirZCkkuue5rRgDKbxuXxFQTKyWKSb2eroCj1KW8",
  "key31": "3277be7bHg6K6Z4Xs6q2CbHgce4mFFFBgCC12yV3kVcx8iF9Cyrb6PqvBKF8Z3BR699qr9RGai3kDrgDM3KgaVpa",
  "key32": "qdBngLiqTNBMkuwgTZmVEBa1wpzpkgd4wCfLwfY53A9XzmBXi63pAvpo2LmrRYDiZU85EqE4uhiu3291s8kUehk",
  "key33": "2euuNABEp36iNFUbkCnYabpH6QpCXPXjudaMZkqiWrPetn3JHNWNQxwZdvYLP3Ufewtm5cFo33izpFDPrPRssbSR",
  "key34": "3pPEt6wJxbQ1x7Y3QhDNMnjSpQ4ADqDscntnawdScV4Xvi5bYrQLQGorxqxckfK927KwJ7uowxnjwZX1mxhFz4Bw",
  "key35": "2T5zY5ECuZJVepn2aPcwk7DGB6asSdS7y61iEH9W1xQaPTZpdgmCpMqUHTUxQWkyQj2pqH2f54ogd1EzbcwX3p3C"
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
