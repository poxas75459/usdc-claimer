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
    "Yn6bkKFRufC2p1BZMRddUfc6LEt6j6oHbqy7S7gLG3aKMhRKexTzEZU4HjmM7NubgvoTaHX68STd9kEpV1gojCH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3A1KXTGRzHzL21cCHvtPDkePsNNPwFczedEXbL2Cnd6AD5YEhcWxFLpwTQQ3GB3DUsu7QQoRGnbudARsiHzkYnCZ",
  "key1": "4PZKSTtQ9jvK7Y8vJnpjYoL6trAV8PJpGR2F88tpEgsJDfUAPp4G7sAMEm7ctxvySqAJb6aXzTb6j9DH1rfDhnKV",
  "key2": "2fYxVVXaDYedp8QCyZFfaKSYsT7v3U7vyBdJiUmotDH8X65qPAfUJoQ3VDB5ZSfdoDCJo7qTnRjcGSoXZnxEG5gV",
  "key3": "2zBmTKc1T86QPJJMsnqhbZhyhZuoF5yGUEp2wKNPRCbMaouweueeVLfnQK1QJKhueKXNssqRgzUSLk2uQEUerTn1",
  "key4": "4KmRdRPS8T1SnDVMmUdHzZtm8a1mmsCHce25hpod1YVDvuWnJo9oi1rbLA5QXQHjEenRzt1r5nSVAmm6JHxfdhem",
  "key5": "5KxTGonprZremQaZMDBfdhYEqLw5Nvw6u6ev1PmogzB3penButp5R8bh98dqFM5bx4wgTKAK6YB6BiqvKv5cgANt",
  "key6": "2Ue11bfQVifNeWrWMkbuumaqLHuKYsM4bJTgamufdqPvu6rZYXop3C5xga53aQGgRmiYg4Q6RuqujaFbHwdPBhpn",
  "key7": "5b52fxSHx4iGSc9FwMPtM1wFYjR5Wdfs91jiXtxTivWKd2ExfmggG27PAJJThVBngrFiFkTxAbetD94D6RB2skgV",
  "key8": "eJprZCT8f6bahnKMUa15RXsFUHbt8eekzSTGXDjkHwDeP73NwKW8P6n1GJ5WkRwzigBWribKWyVcuFKoAyuDjaf",
  "key9": "3p9tGto1e1AwkUs1W9eJVe3GGs2pdkHs15BzwwJqDSZWhRtb7KYJvtDkrXrihHwznkmTiXkhzTQuDGkP2qEgWRDc",
  "key10": "5ViKLPtk3e1shM87qwQLUAheqb4EQGQN4VJsnGNqPuUS1nxLVuCoJ8C8wuAfNfy1m7Tn7VRa2w6Ae6yB98jEfKzY",
  "key11": "3vQStzhrPwT2PUsjbuKUk6bF1A8Dc4TUvTM9XCFh7QzGHRVjXYnmfRRcaXkZTcUwnMtifbFohA6AHKQpapsRHNTq",
  "key12": "4a77yrAoWbbB3h7z3ELp71zDKHtNrNtqFsABpCFnVQgk8ftz6xPkB1LgKE4oR7CCSeRQi1upQsvnFwwdHKCnAiGB",
  "key13": "4gJ8Zp2h7iaYUWfj4yk1DPEk3rsaQckw4MFw7t2m9pf5HL1S2V4yRN3Hg6S9p8PYk7BaU9J4ADmuNQLuvgXoijvp",
  "key14": "3kNwJwqLG5f9mBVtSUwJMZHWCWdN3Bu3vhxdsBP7qWfVmnar5ToL6etzg2Hns2Ah32XzpbMN8o1W2R5rYYj4h17A",
  "key15": "954yuvEArPMKdgxr6FZsMK4iQ7EWrdmPjjM9EnWCB5EPwXmNKnc118LxkAiiJWFcBaZ2d3aBtzdnzW6tUgEELoM",
  "key16": "3PJeJmhULmrbmiaPmVbzXzSaqcRZo1y7cN2nQam2WefkdsikRPxrJU4ZecF93aCe6FUBqQva2VpM7rqiuy9kaVWG",
  "key17": "3ntCaFDrZz4ctaApcPL4ivxrpRwSvcJ5hZdmko8ySgPkvym88szGomYk9Zr9xKBtr9UHoiGtCzxj7umbzZ8Txgya",
  "key18": "48YX9juYtyS8CgFZNjvsCn9JJU9f87KAJHGj7CUe6TYWfwmq17fGPNiLduLLeM9vhdGDMwmmLSxMYioXJvLWNv1E",
  "key19": "4ZphSCG8zGxmn4v146oG9iwHkcYXRh5Qjf946BErjdyD6vGkGGGSSqEy3BqmWZiEp8ZmmvDAmT6Z6QpeazXmaFS3",
  "key20": "g8r1jSQPzSBSVMit36Twc2NkgKtPGU99XYVwYTye8CowPCyrwjfYhfYh71VZJvaLCRgeTiJMgjz2WCEhsYhMwzb",
  "key21": "4QEhf7UTzVtLvQifVmkWpTMVCLwB59WBWxVSiXZpBFxKph4TTx6CCu5gVHKZyawiJBi61dr3L2CTh8HHbBxtrPEu",
  "key22": "3FiBGQJxThb9mweif3rg2d4yGHNdddGFLoRiqLh41UL57PADL1n5qtaVBRV3YJd62BY7ehUDhJMp2sHvoLEETiJe",
  "key23": "4HePeu2tZmXj8DfCzBbmrLbN8eYrBRLF3SZegdW36B7GCojLzR4MwmaV1hEcXB5nHh9NEQqRtQKUAqH8W9oTKPGw",
  "key24": "3nL4Fz4sSSefZFiM8roVYuQs7DfLGtQWBFys7ZvyHz83XkfymqjXZmMHJ6GaDrbXRwJh78Ku7AAY57ErgZ1tDKKj",
  "key25": "3osnpDYhRWDmfmLo5TS5nLXzYffwqSDbpJPKD8KMBrwhp5jaXG12SMBQn689hj8gQtGWCY2KusmmrAENagaKSmR1",
  "key26": "5T8EndkvSPQSyRQgAtUVZcNSfBKZfHGdzUMCijtaADFdPoE8zC2Wj5uRkoqqUFD5VpckUFNNLjX4qp3M3sCtChFV",
  "key27": "YbduEYxNN287edvSTdp5XG7VUdyUdFfgL3x2QhuZbaGg6e4sfGeGYshhYMixneEGDNJtnaqdbxP9bArUqJcwFnW",
  "key28": "2ARUv3TeqzBfac8eqSrtgAo4e4fbxm7svWDfYaRcM5yvYGzhjQC9EPdAdAqTVQcdXgz6N4RNncvjDMbFyd2D3FLi",
  "key29": "2TYTN6qRsYoi15xo3BNxVT4fs8rpxDj2kvdzJZbHFwGn85Dc3XD7bgAUPTCfnkBPAUFBkrpE1K9uoWUMK6uCcsti",
  "key30": "3tgs9uc9da2gqeVxfkn7oobLiojQBLXKqQZ1ZBUgtk4wjmgq15rHGgsm3HxzymqS9XYq4D9CxDztHdmwbDA8fUrV",
  "key31": "2fAkhbhR3fXMvNkM2WDF43VLnxhae7tFjQyPKfiFZ4ibae4dgyjTRLsh7bC5zZVdEFDhUDTDmVuNXioYjHZo98ao",
  "key32": "iHPvCd46x2YVqvbGV6tEhMQ9Pf38GLbi1x3kaKZ166dxAkh7xtNWYrT2Jgq773aoK1aPWokYCWYDy9PF8Rz1W9v",
  "key33": "2VgYMtW4fM2Xdaz2uVqv46qdd3sCLEnQVa1FEttojNURJkMWPhSCU3jHhRiuuT4ZSeZtkCLFc431VS4xC1ZxxVwp",
  "key34": "5XxbhTuK2UpmmLpxdXj8G8i7qamjn9PVRh6zvuExJ39UHU7ZNr3jSwnrYrLXrEiAp4xdzioxnwTeyyqo5qp85MZ5",
  "key35": "gDhUmK5dSVmRKbR97VQJ3vKbCHkNJcgtBT1FC6SXFEwD3XH1njR1MZXwyQeqvS6aAGUrzgFfskuoAXeKfyTFsBY",
  "key36": "5Cjh4zdEmsnAuoMsq4XyBGejoAa71AJdEdXkrHrBuRujCoWK2ztCMmrvwmh5PoLSQZGBPHB46Gz85yvd8KDeBWec"
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
