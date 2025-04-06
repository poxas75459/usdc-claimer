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
    "3L9wJteAkTLvHeUsnQtVkq9k7a7uZiyp3hzGHfQuqBXyiCdTw92DRNnaCM8YWDWbfLZteKtoJLdtsn9jVxfR6MLP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5quRAdkEYYoMEoVXiTeau3YN5EFTVwEC1m1FJJABg2ChVPPtngxeFZ1ZF31k2N1t3LmD5PUed9LhkStNTkfwVFf1",
  "key1": "5RbPSW2K3NqbTupp5NtBX8vZKMiGXU4yjdDQnGr4ogn1NY7Lh8SQPsbttH2NDheaFz4YBtGCchvatF6xQdb5Gpmw",
  "key2": "5vA48kqfEJRC4KnAe3Hty4K7B1E5epLt7ZUnfpJ6ksL5UyXnYFWsKRhLDSonbCn5MfMfPKvtorpThUWrpPXv5TnJ",
  "key3": "39UU633uVprApmjrvHNEwzWf32aj8Lt4C8Y8yCgDj86gxQHLeJmktbWqJKuT6Sc9m82meeKi8wBeUhk9j5zS4BDW",
  "key4": "5oZAi53LYiKydLcg1yZVVofgt3E8mE1k2Q6S5imYzSjzxU4thyBegKZaxAeAyQdB2CpzYqzSo9iBcB7rS4MPqZNY",
  "key5": "3iMJw3kvyBCXmcvKQzxcnG79JGsNVTDioEnQJ3W44zGGPKEWC77DFHLW7bDBFLf6ZCRRXs8cfDGymr1erFjZmvrr",
  "key6": "5gYJexfnSpUiAj8uKqh49CRVbAWb3no2qDzvY3Z5vQHAhcAVRkPoXdYrWybKBD6qe7tXSDDTAv5VcrTTsaTgzqva",
  "key7": "5Bt5WgnG8xGFQKawT3944rCgEbWRFBkmckesNmEncoJEJnsnsLwLZ1g7Qrp8qnqHEsDXgef8cgcVUXUe4AwgkWRZ",
  "key8": "5FVwBMS6Ha7Y9ZD2MwH8S3LrxGKhiPP9KMPCwFyCggrhR1b8B7XE3Xgr9aUGWH4ehZZRZec5mWAUjsQsgKaxP57L",
  "key9": "4CMbxYFp7ZYSZtys1SM6XQV2op3UpL2aDyrrUcSbuyPo9vyEHVUHScX6xiHvjZhB2yvb2diwzYXwrbwXbtEoyBh",
  "key10": "5KHq84UhbViHtDxs3uFWTb6A7GpUbvdtRGp4mXn3wsHkiHRWt9YMT6nL1Q7quTujGuuaw3mWGUrAbw6d5Mbp6LvU",
  "key11": "3PrfEHN3eMM9gsMuauUpCYMfZftihptqAobvSCwYHAvwRsTvXE1Nn6rvFAMnoGJfvBUPLXWWgJDM68gHnYMZDY32",
  "key12": "2dkK2WUspZkBNNte77qQt8dUWz2yRmMNgikmppXwVW6YyKxSjL5CReUYZA3m9cY7ph15w8jWgzN4xztfKZcm7LYy",
  "key13": "59AnmyRyZg7oQor2c1zngtozd4MjQz4RHnV7LhZms2D7JWeL3weCJPRXD8dbHEZiMCZz9wdCxKDpdJSoGGttdWAx",
  "key14": "37jbSYzFsmHCwqw67WtZBhcPUgvJnPUryNpNBya1n2sbssHWgK7BCN9QgJ61tcanaT4XR9PUfAL2pC4ChxTjTR5e",
  "key15": "eVqdkTfPqDEKVn7r1o7zi7gH3iu4c5ZhfQsmcB4ww8P6J6wTcHMYhSpzwf62q7GPT2XpL9X63a5csY1NHKWSfkq",
  "key16": "2hepP4h1pHXjGqWs9LqjGBUcNdPtfEqSfzbnhAGyC14QugmUzPF4DQPk6gcaVUsN25j8Yo9CJXC6z8RK3DSCyaTv",
  "key17": "3m8mCje3e3pJbuKmG2vjwMHAiwNH3vQLySnRDHkD4LshxojXgTj8UPCfM3nnRP22PKKrEsyUFn7QjNkS9UUNUUu9",
  "key18": "3nEzUR2iuLQZonQjPsbYm1Zik2KbQRwhi5fDwoPuAcv1DHCAJFbonv3tbzSrTSrU1tXcb9E7nC4qP58xjc7BPKpn",
  "key19": "4es2v3FWsMe7RHezLNMjzSAbRBUivR4DTET39bcAaGDGTe9eQXGMd4Df9ZJgXFZFijLLMaFXSUsPPSszwfvvDFtN",
  "key20": "4tcgW1CM5rxef1QGLP2zm2FbvcEWnzD6BzQzy3mvK6TLyEPmctsFD5h4LaSWosdMi3WYQhAwVTB3fC67mym2Z38V",
  "key21": "527rmJKAKGF4ui2pPmjWDCh5dF2WRnTnpj75zZRBGbv9J2WhgQ1a2MUSKG1rcBfLWR8bsCCgNZ5Vgfd2Y5PPMVRR",
  "key22": "57Py8QzAjNRwwSdPyF8ban8GzM79SJ8GCNYeqiQCMi7ZgKCdHEqeAJ7goKkMv3L5HMJDCSs8oSsk1ofyTb3mKoCc",
  "key23": "5Xfn7ssXdVJxhXT9WHPFycajejgf66FbKux9ZXEBYvLTiySa7uc6PvdfSQsngjYftubVutJydq8jAhDTMzf62VuN",
  "key24": "4i2HLPnUbbkLnKxeSRo4jszJ3uEn4Ft4cEMeqGYyfuFtBt2LY2Doreo9KAEDZxLedyj4jSVc5ettPvEeyLJJYCWw",
  "key25": "2FhgA6jYUipEFDHEdSSzj4hHDo8eMHq7vF8nmLSyZjobpzuTJYRrV2nVte475YojQXTVDP9K74BjZwhdNL1bATkD",
  "key26": "2ZsUKXjyPCB1y5VdwtvX8dNZk7jX4AvTKRUb2JNJYJXvhPyVz57dmYauuBJsWNfW2zvPbdJt4pY3BHaHim3Pw1z9",
  "key27": "vWxRAQoYADi11L4Gy4jczaLkSmtVkCHiqrfQLyMNxsZhnozTm6Sb8qwU3WHs3ZveZgSLjyMN8qKjh3mXwCznSnd",
  "key28": "4SkednkrJ4MotL3GVJTgf3yyYsddrJ6NvVBY2wgMkK3mCTK7G8oDZj88jUuG49MuDEeDXSjfvD5JPBotGUkhR4wA",
  "key29": "2TiAddX6kJQ1kiLvffNEx9q6vSfm2T35kWVjGY3g49kBJugSEchBgLywz15Ecs5BSRPN1LkPR1MxQibNUZ4NGv2s",
  "key30": "4LHoXkjRt2SYLzQ7ficov7Y58VAmPXTEgdghsxxLZqGcUvd7REQQ5fb89HnCFVVvWghFnqo9BFyjnT4MKhWnqUTz",
  "key31": "2aXJW2huCdTM7NgS5zaprGiEp4G3j82rAdfAMB1FLzyvvF5NF9WUXzcjtpbH6dkqdSvvthcNUk6qfkMNko1FS436",
  "key32": "4dkYRdQvjDz9sgVpAUhFsVJ5xn4FDau8Yo5drisFb3M6RTMV9xDHPVRAEnr6Fer8brhjs2SrKxAE1zffdifHTCgK",
  "key33": "39n54svkpdYJamnCH4VycYEb7CHwvt5SDG1xRX4ZqcLgvew2FwVtbp6uFbxg7W37843dbVpn9wUVKtWGjG17fWNi",
  "key34": "1NKzeiVjpaU7695VcvkGHpi1zPheGH51LHdKJB5zh39sQ62G9rEPxLpZ93CRNw8WFHKpKUejamxmms2oTxDz86H",
  "key35": "5tsR7P3Lf1iqRMNe79Ba3dSCH9oamn44zC6zMr9LVSZe9wkZhUwSxKQdDkNRaLZqoVbmxRNAtApoJhfczXaezWqh",
  "key36": "4TV5GjHDduySqMGuUtvn5jaKPAvhfKknESgTQ9zeAY57pMqjyDHnVMw7BKRYgpNTP8tVPEoyaLCxoARDwv7qq3EQ",
  "key37": "5X4Xeq9C7B35466XFvHYrxxRi6tBFa7aQvdrgCwSAd9oBGKPHWLMFWsCVXC1EMQeB2pMBx6dL6KcxE9AauTAiqGk",
  "key38": "2Ama2sBj6JT35HBeChifCw9ucLvoqThQtWs8yMdYN6B4QWv7rJk5JyFti265PoRy9Pv3PTmShjdRdL29eWzT9qcf"
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
