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
    "3DUYmbm6dYQwRFbujuu8QsPEK15oeX9XTgwz66bq9LPTFgPbh9AkeZksfJ9Sc4diaxa6rGCgZhWGUx5KgYC1JbZD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "44art1Zu9poicAnMQnB8NCkhXUgZ2Pvw8aRbM7KrJRCGqH8PjViSXuGJxBzzL3gd6WsK1mVxJ1yqFLzqZSPH5ADr",
  "key1": "ASptNsZgxDz7zktozYNnPWoC84eLijyCBzkVMr9K9i5Y7uGH6NCdtwQLDZtLdAnFjCWoxzbhPCAPVpmabwfbonu",
  "key2": "3NG9LLWFfZa4pAG8PGbzcp62JGe5gQmcu3wqoka5g1iGU9eHWX1RP4XH4i3uvdnoesFZtpJXrLsdrCbgEkCfGhNr",
  "key3": "3Sb8v9aTou6X7ngx9wW6Riky5rjx5aK5Ux8c3cYY8d8Cv56jU2HmTiWbkwYazp7uKbijdY9GuQNHioLwEU1J4VfC",
  "key4": "2iwP1cyDXJ6Yj4XGgwrLokizubZ7aA3rCRQVfqvi6TUHfFU9VD7CHERKSkU7wa4CzUi13bX1uPPFsSN4Ecg1h4R8",
  "key5": "CBmepWRcuKqbirWyFFixRjFdSiipc6H6RTeW6GLcAu1byU3AYvnSBDS5Hpb539Tn7xjZti9HANfLicBZWjnx6zi",
  "key6": "BWm7WyunoGkLWpfk3HzPet8vY2C9abBrtekKnvdy4VFcuGVgtaCF8xz57eTN6dSDJCduZQFApPk59FvYPxdYzuS",
  "key7": "64uz8vuiWxTX2YkuNWTw8VK64RKahDHchsv9GDDZNhAVJcscdRVjt6CAwDVBW6XuMoBFoBU7T45Tr1mxxLxii392",
  "key8": "2PrdacnqAkZPjVb7FcKmr19hQ5XWNrpm8kuenWGYQmEpiHzeZVDZ93GLmaTg5knAxctdxhyFGzj9PgGA8KYdR6Rw",
  "key9": "2ddozCHZMd8LWZXjKcPEebHws28CaHnd8f4bttLDPESAjda4RCoBnERE1WmSkXLGyhx4Wq3tRLqicpbyikkpT2Br",
  "key10": "2vLe7R4DYeToei6rqM2yWBftshrkRhNGcv9BUZ3wai7Aneosqx1Wn7m8EXqspyrjXNg7HgXmbVaA77hj88Us4PUe",
  "key11": "3Nyx67CTbGQi9X422a5rEDVMAryMQJtfTLtXWWAMYgxkztmtfGatenzt3FSD13zQV4iyTHQgsieaNTpsTrkn6E9H",
  "key12": "2RycgyqYCkCM8xnkrpa8rKJ8jEcwGemQk5ANB1qDJsGiqcMMvPNWRa24QdaschVFD8fGAnqNSrnWCeudywAmaA6F",
  "key13": "4s7uR4v9a22uKEeP58qUwTbuBJ7j6vAzvZDt3SjY49A4mnG9npphjsCnBddzaLMH5QKmto1RNMNe2zXBKyHaGFGS",
  "key14": "2281UC6p7tZNGmpEHxFMJjtJS9EoH2bnqWaXfnqNmND79P4G6c3QqLRaVQLN6JAWt7cPtqhCMmRY2pevNr6Q9QpP",
  "key15": "5eJ83cQLK3VZuX7JmUvRjPitupHLahwD4quBNiJEmaxk1cBSzfWZMxERctxfeRpQbsE16jREXkhYBwY5RfeiosGc",
  "key16": "31XgrAKi5npVtcP11rVsGUXq3hDTtVWriRghMjKqQzYN2tpKdzTnDboThqhStdtk63VsGH2ejN9EWHFEwAAFPRk8",
  "key17": "hezrXiMcPuWMdzToEctD2ghopWemAQaiKe6UkyFSYuwMduJKAQfnZsSWxTtfuidS2mwK5gF3HwcWgLWdjvFZCnj",
  "key18": "5HAHxTv8oENLcAvj5aZkXh4eVZGReK9nsMCUGCSSS7GwBYqfJ3hG5qsQJ68ta7jhJzhsKWrBLuE57r14oi5UwK22",
  "key19": "3dHKpdhJejoAUyv49xFSqJwXDab3odmWTCFydafeqwphtn2WuhksddBgqT38q8gCZN8Ls64ZTcy8UB4WHpwD6MQ9",
  "key20": "jcnnWBeYjJdpqDjJ9S6vdj7quapk2eTWurFrrAcevun6RGRKmG65V4mo4Emf6uqiUL1XxGZ3Sd7WXSqhcFSapBf",
  "key21": "3gUdVLpbYTEHoBdJ1vGdcAhuaKXNFmsRHx7kWTF4sLg5T6cUTRRDGR9bjEqnswyoDa6D9su9BWUWggjRchppDriP",
  "key22": "2NyDvymwFGGCvkTHZ9uoxzRy72QtRwGzqre4RMgEpR6fsiJzW95tRWT3x8MV6ff5YGbExdKQEAZxPzyJJEEtTjU9",
  "key23": "5mxbRh3qYgx1KrJnKFqyAHAYc4Rq9pJQHzbFFvQPKCSUYdUpQivSZ7z6smdbRyAJr872Y57t5zqLWqrd8tQxdkZf",
  "key24": "4NBKUKFTc2hmR1PmgrKHHwkiH28cbtFzgzevav6DkT7y41iPBZDZMQnvEq9eWgz2YXjNhwtBYw8qYoJnho1atydx",
  "key25": "3DGapS5rpPSekGpoPwNfngzUEdYjM6zGEqtu2qcJYakCRimKtKQaX3sEUp1TBRW6K7R8BDTs8fagY4r88jFumevd",
  "key26": "3MDGPBcHFo8tCZGMurp1MVaovcp3G3y6dYoUVG4VfXSTUAcnbt1V8wo67WGs8QgHWBAzNHQph7j5X1wc777xqisw",
  "key27": "3ZHYuFafMwMDMYDXuRdaRrRraUzorNBwQxyoMSCC6s8Td6FpXNZksue7JbG8Sw7Gdy3mPG5xGWxtHc4oiCL8v4mS",
  "key28": "3CQLkPrArSyniBfHU7W92uXBLgRKvVHd1pnAryNoCpHSWbrjBtcUkf1TPwuvWu46QAYyWgwFLwLck3iWMbbPes4B",
  "key29": "LbdrS1kVyKQyBk21oqJ3JQEtDnR1neA1ZHbwmw5Py8j5rKiMEezMgkwChNUBcscZPGC9J2xUepr1pDichc56B2S",
  "key30": "kRUhSX6fVfmBt4YiQCDy9fMzyboZz2C9aajG1eJjLsyFtR8VQiqRz7ByZ9fGRnH2wnB7N53mN5cAbS8tKZkLasx",
  "key31": "3V9JtU9NAwigQoqmJLW7ujrGXFA42UbdjF2Eix7SBN1UmXewfLT5mCmQuzsNjextHmpmELf7DfXkVXgf5i3stPFQ",
  "key32": "2216mbv7Y9Lk2KhkgEsmfdVpbo9aQeMEGsLonAV1UowwY7jdLQfXfoeiGBgEfes7st3YUcvKy4Yu6FrXdCCBXbUx",
  "key33": "38itoogPYWnDaL5fCpYpanB9fMGu8a65k2Dzv7a64NwSC9B7CgTBnWn4JSq77FFYYfTUs1ymRfGtrGVFbc4zTJqB",
  "key34": "4zQJiuMiQ1T754oNnKAZKSCQRd7fUBDyA9hFJCodkTZgmp5ikoE2bTVZv7BUjwagk8Wmjur6yUBY5VJuupX8ADkJ",
  "key35": "4ZbwZXsLJt7Dt6pzTyy8jMGYuZ8WJUdwwF6xtNau4kPWX496ZrcefnnHA6T3DnMbXzWX7v1mRGtTR9AKhJFX4a88",
  "key36": "49E5WNUhhoppjESUCijNLqMkihVMfccRtiu9GWwMHvjasstpB6s8hX1zVzVKF5Zp7RsJX7eCevKm9GFLPq6BFZj9",
  "key37": "58v5rz2Reeb5YdRgXapZxcrAskVXrqsoTH76j8iujvdcjLJm5Z69eicVtas8T8EMr5ZDPi7uUsRXwedxGFXucAHK",
  "key38": "3NamXdwciMUq6oxrQHHqTAyJGMUfj5uH9nb3FHatxPiGSvXKdqb7v1TCiYcEjgZ4TzRSryMihkS76zxrMA8UV5fQ",
  "key39": "5bNNHh2i6y2Mz4fiBAYaaAH3JPrXiPmYcnNzkRJ4XWxJrtHvyrH4t7EZZ56qEtHzXXd23nXmMSwz9m1TrJTedVZj",
  "key40": "4UKMsGwdkUhi68eg3ebi5Et4S3XWpf9o2c3ThVrKtBtrRPrj8QPeQ2rkmcnE8CqphnxpRFhN8MkXAP11DXmCSLZd",
  "key41": "8sjYmAutYGPwBoMaveEHQiFLX3n6a1dBYMPzpNaxCrJiTcsnpmtiPnkW3pEhbGUBpjTmLy3aJ4BpfDLNEQeucG8",
  "key42": "5qV7dbPWecfYuDZW2B5f4W4pW5wXd8kGFydef2885p2DbEZh6RNTMFWxu4YUXJQf5eHaFjAUh7Smr3nedEz91WZH",
  "key43": "3MyTzBsyKSYYzGhtoDdZwrg3wbJkAfjrUcCq3czw8PJkTm2qgaSbknKbszjrX9Vo3dfkwxcXs8dibbedLYRhyLbc"
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
