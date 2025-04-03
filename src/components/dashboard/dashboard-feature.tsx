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
    "2Ap533rWYkUZJ3RkPLPVov4dsAkfHhEpm6gJLFRG5uRppVCeFFrTMxuXvkcpgrxhuHM67m625re18bx1tsYq1BpF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5MfvurrsFVWa4bR7NavcqU7YQtvtD1xxMkQzo5uk2gainQoneir28XQEjTN2vAhKPhgZeojguTziEth3bRtmDPkb",
  "key1": "2s3q75tM3qQX6eaks5W3V14uxeA8oZjzcAjAwJtvpiyRQxYeaHWreiW58zwyRET8LktfCEnFBrq3sLjqHZxeoBuS",
  "key2": "2TETrgVP2FUJKqdc3bUw7RDn7tjyAapwoKNiirNUoaZ6xqo5V5N6DPqSiQ1KUsTdBjUHfaPBxE7fAM6AzFDBcMyC",
  "key3": "5ffVheg3CnVk5GnT7RDEahfiiHf88UMqgRS2oE9X85F8AZ1Ci9PMX7ii2uJWGMUGddXEk1EUs7msv8Jm2GBjvsNL",
  "key4": "34hkSdPThJvLH31BGyrRhuBMHtkSX7mkMKvgxRwKxXnLrsTiFet5eaPVAtL5YqkDzzfvNXAu1cgJyQuFK2RaikRe",
  "key5": "5X7tGzHy5ma5qaaiWCx2NC4NojbjQ1uuRhP3rxqPs52v9UCUQPYii8N5utoi89ZsRTgjJZghzuZaPbBEDJQEbpmz",
  "key6": "3CsxAFKcMsib1SdTefKeWKnHdRLYx9mGChPtxby9Wu1ookVCDmaLEzUtPbCXYd5BAjEgZUFzQHwVgWfb6JuBeabr",
  "key7": "3ue5LFVho8sLpLXGhYK8g9p13xapyVAni7Qgx3vrayaMX4G7cUsS5t4o4zY1pKUPNwqYx3KeqRjDrrZShbqNMwSr",
  "key8": "3AvwCFpgnBDqPPjzRnuaTpmNTXRTKBaUQZRGSLZPyuwgt2RjUAaKvGVkh2LsqTSctXUA6YNPJzfK9V8N2zv755Zh",
  "key9": "xrjTNTpJrvxoge9UaCuwFTXFgKRqdeADvEZtsuG39SFjy4Jb6o3euGZ929E4CiRuvhrFguTaVhR4srnvejHYdQe",
  "key10": "4NEWMc111vdVTphf96RerwfnK8kQfU8hk2FK18Qie2sPgTczxgBmsPiDqXUN6vCthh3FfyZMerpQ8ioX6K16Sb8R",
  "key11": "3ZNVAzrGatanD5UyGcMjeLupGiKXpPK56UK21EFXsGnnRLREUpktAZMd7bCQD1Xy1hYsM81TaAJ7oCKiKmdMNPni",
  "key12": "ZBMLdXXqZzY9XE9AUuAX8EknzqxX5wRrmHxRDMTQhyPbJjj9JGFGKvGVm72EQ1gVEhbmzoak4KENr7g37y6q6K1",
  "key13": "249bewFcMdwZoCC4KdDtngkRxNiLRJyux2Cnp7GEeQk5yWV65hfSeKo6auP7nmPQ9XitAQtxPDMepVQoijD1HYLM",
  "key14": "2sXCMTi8oWBTLmsnwmWd3GQZY6Tkc8GaPH64BtZa5ukMCmLZ6mTgPgMSAKs4Yg5tBTkq8X2aVmqNKjZQBxj2qupG",
  "key15": "4QLPKeMhTX17LhF5sNpWffs1LbjACLh7GNx4GbfBaz51KnvyRbRMXGHmWRhTHkVcisiwNvkudHGaYj9evUNjrUg1",
  "key16": "49tk3qSJ6XtgXxRxWj46iiF76Rrqa5Ai4P8DceTAswWuaLHiRwi5V3yZwQyFJSBKfDGGbVbFaFCsBvgF62xv56u3",
  "key17": "jHmgdXm4PA486pcjVfCE1Ybfq4ayjjoCSzgQYzuaxrcGP7Xmb7x26knrsNmRjmsaEppDNfWHEkfriNPKFEmtbnY",
  "key18": "2BvaJq9Eoj3SpaXSZDHs2UaAX3rEUpnJEAhNMLFZrDMRu2fdjsY28f2nBfgybx4pPcC4xHoiJD9bfY1LDjv1jWXn",
  "key19": "4DMZH1LKMzyyp52HxEhR4caX1SvKrwXNEwTgVh8wAgbWDwESxKJGboKt6ovVu39x2dgwA7bfQ3BKwSaK3xUnB65z",
  "key20": "5rQDUxqLNqgBzqBeq4YKCKG2GQwX3NFvDfmgEZKUcUyFscZPkHFFEVPd3XVYXcJwnb3S4MpWZ8M8wynYtGZQcv4e",
  "key21": "55EmaNnqJgpSavwFATVeNmktwVGy52hVJ9cEaaBQcPtzPTpj9GXKXzTSjnZ2A8DHtYdYKnCxGRcQ6mECDcAw13ks",
  "key22": "4D3oi7bjRH5n1NYvZ32yk9khVYfdDBG4EZraq5hN4EAtAThTeG3EP2xYVpJ9sUzQPvFkqxhCt8KDe31k6tJ8F2jN",
  "key23": "5dCRc9kGRzmNRrRLJQxkwBcJgwqWh5ypysy7LfYeFnM9yFAgVW6Hi58JE6mqrJjgpiBJTUtKCZMjzeRNK2F1rYfw",
  "key24": "4mN1fNj3yMuEMcaQj57Z8JNBA2pQUVuWnwSYeXQK7baoYqmkejHgJSAKTCAXDPPg1Lza8T4mDZN5i3YiphZJfBp8",
  "key25": "R7F4BwhafMPcmMW6gwrF81MkvZxg7tDY41nLWqdiNjEtrNoq73MhMuR6US1w9a2r5sAikSBwbmprSfUDHPkk91i",
  "key26": "58cQmYXcCqNhkgEu2JeL3ChZKiF6zMycBvt4cERKDfAqJ6EEAbX88rDoZ8t9bSJEneXeKYPWzzog3UBoHKFd7Lec",
  "key27": "ktMf39pzNautxw563DwN8zakz73PSJxLptma62Urq5922x5ksNwysMnbB3pCuYQe4S8JvqGh9t38btyZMr1cmu1",
  "key28": "2bP5rGVz5i38SmRSsjVnQu2VYMuuPyz84kUGC3D5v9Zncoy92Yg88e8R5sb8ZSkZ9i7TnqoeTzpdVse1pL3GSZ37",
  "key29": "qKsUEDAdp8k8c9xzhU75J4NH3vuGV1Q7w5bgzqNyqcHE6gGkHxyzwrSUzBc2oX9TRLZTPVK1dV6naGM7xZMZ6kG",
  "key30": "3cK9j52NoF2HT1f6L5roNiSidAjo6T6uUQgH92NEaj2Qpok5BrC4eGtFoyNp5xonZkHJ8akEgkTQbLJYRtfQmi2R",
  "key31": "4Xyo2s6tNbCRmnRogxpupX5PWBfYJAcAj9dU4YU7MQZee2aCZGPyUuBJhgj81XBD2UMK8jHgue2q98quD1GtWEvM",
  "key32": "9VWxG5mcrJGvvqyqzYdbnSiTdVRwuGo8yZsW7xjp9XRdcfgv5xnitMuRivjeU59QzxwxM3XdF8u4cUePpwvNy3m",
  "key33": "pUaewAAyGZgDHV5bTJodDZhFaVo3vHgsH6zcxz2CGjrAJg3ttR4AnPjMSZ59q7Nrq8f5ahX1i4UKdQME2ziJj7Q",
  "key34": "qFtV47jF9dgYirNb5xHHAC9g9VkuN1ubDwHsR8NnR1jiz9y8yVXq2nXJUq7yY18MmxCdL1gS28MaTT3N5BvYHMA",
  "key35": "2CvcmheszMf6oWEbQXECnoQpRiPuPWcmuj8oHK9LVsudAfH2ztFRariU7aZNi3YaZ8T3sRc6j6fB7qmaYudXYJbp"
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
