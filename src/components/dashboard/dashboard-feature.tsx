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
    "5wByYczNtUrvgzkwtqhMrGuzijJyqLqE7vWeUnb52co9wFkGT3WntZ8p57piBHs924ej6FUbKExFPiUzXyDn3WdY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Tnw5gnMs2yrDUHQ5siE4FgdAFq95GFGyLu6pw4yaiJfJ7aXPCNYTBBEw2yDBBfU2rpacL9KKaR4HpZfRVy9F1y9",
  "key1": "53S8Dhvar15TaAm3XKTaqjb2vjhAzpz5FXokUsC2NB1yy8dveW5GMoVrVseh9hHMBDrMhM76r34BKvNtXuhCUgrv",
  "key2": "2QQ9DP5Zxo3SvfptXYutjkcfhzeGAbPb4prKQL1XD5MHRgyfbgkdisPgiqwr8PeYW68tUy9kAwknZopaMSFoTw1K",
  "key3": "5q6bNjQxfnum46e1WbYeLtPRMEtdfsFqaVffF9jWw9jhojjoLakszbTfLeF9DvXhPj77jcgZ2gFwMCCLiRx2rZeS",
  "key4": "5PFTm7qh5CgyozB3a2F9d48fmQbc9RN5S396JDkhA2TQGG3PncjwQrDetP8KwsLByYUw19inkFDbAfvQRGdpUmv5",
  "key5": "evYrw1YJqXF9fa9kGi4Y2YWmxG4BpS3RV2XvoBHXDsnssvVSGwB14ymBoGg96Eaz8UtjENYNoNXt2sHZgKDsqAB",
  "key6": "3yT2ZvSA49tcqSuEDFdMgCDfmbDQ9nxoQUgXiTETA8UUX9SPDyPwQYM45NEz5aC4ihPBQMq1w5STVAxgiK7F1Q2q",
  "key7": "2YUojTkyz6ij4oyQ2aarSRgMtedUwnTjj41vErkhmyiSJnbx5oCi9tBhiadvhJmRZGHgsqeNPvNtrN8fYb9wLLe4",
  "key8": "572cwbBgwF7Zpe1Z5sAfzVt6GeRMYPCX5zuX5aWpgh7zNhmewj19QeCQgTXNsFGkV5dpLBTP9XrjQf6H5Betw7Yd",
  "key9": "LGLvvr7ms8JdfGxtNauhoZsgB72g4VcF8vnJDFbq8Rjv9aZhMGPUU4DMVCD7WdWqrApPTLqtMAHYE2RM9HmfsZy",
  "key10": "2QdXo76N8MXruMsj6Xh1MpV144EsLW3WVm9NeWREhNFHHFac46j6GDUDLhuSAasCHp9taGhseyBoC8dP6xHgdA69",
  "key11": "2EPKT6HCdaYMyNoJTiH3eDzAsVD6mZSZ4YiMuWWvAaJERRumTv4xRACGGdjuww7xcw4Bv3thHvVG87twVQu3ZPj5",
  "key12": "5Sqg9keKmgzr3zbUnNv9nNzJTQPMBA5o9vBpLsfHKgm9jx2nutzLKgyzUTeTJwdGQrTJDquUm5wKJNKsCFXUc24j",
  "key13": "d663RRRTBGqW7CNw2kYCT5YLZ1SWj7YydddZntQ6k5VNzJ1oVR8sJqrC2vocAAG4TQgTM6SHTH6GDVtTfBroSJm",
  "key14": "469oknJwqKg4ArC2uNHNQUWv3bWZLMkVNXXDfWoELt77XLjknabWJH69aL9awKQxeNpyMNT8bTPTtYQuZ2X8vWQ9",
  "key15": "KMjq4zmDLELk3iHzmjbEcJP8ibNgSVC91UrdGxgsMBLvBrtzij389thSS54GjgQ6b7qtB8XjPqzJZq2jcaQQW9j",
  "key16": "4CP5tLzA2S6nwejnWbd4dK6kJGisgAzS3hbKVKvTKCbaYmK8VB9PSxWne9Ad7rPc8LgXPe7UEGsCNxCX3MmsmZM9",
  "key17": "3gAFM74S1CoDjdaev8HUgbugzdkJS8672kpR63QN39FnsFiJjGz9AgwRMntPNnJkZpAJDVGw533RRaqrtYgfg67B",
  "key18": "2FMN9bwius2EVnnirZ9fLEb6NYBRpF5BTvftdUjjCCAHaP8iUSn3e9yHBtZgo1CNzTP9tjd6rg1UnBiVy92HUazv",
  "key19": "2JtCzmdd7jzoGsnAKgsJx6nyD7BHnvqSsxGz46v7pswRPz23gArtzQRKoYDH4XZUCsFdAc2YpUDU1TRpBtsXr8aX",
  "key20": "2wVQWy7TtnBRza4xYCFCBLxHDvkWi7VpBD3qv6wzyUEWy5BSZdBYVdvrfRVAvYg18iGKBXaxDx8pcoxS3nLp7Drm",
  "key21": "62PYHUmDTMnmEgi1Qtfvdei9PznyAoaSw2ng1StRS1HxUn2UjGKUTrq6JcFBpiKUUv7HFKMi51HZ6t1H2XT1QGWB",
  "key22": "38WSoSiWygEw6n9MYDf3pHHth6aFWQvK96fJj1MeMtxY3mEBs28tZu1Fgz3Fie4ZkWLo8vtbBzz4q7xxe4h3Kyg5",
  "key23": "274u7ju8bAeExBRVTy32pQ8yvzSeXD32LiHeuM4UtYjuz5bJRXtGcyTWcEWEnsQjsP3i6n84vkbEu6arE4nFua4H",
  "key24": "3tvgqR4cQ84AJbQMrPTCJ9HyEK5FFy5o6XmwkVYBkyDW5DVJkErwBw4zY6uXo2QPjyuYA4sUTSMF1LEPGw9fG8qq",
  "key25": "3poyp8MG4ycVH4BZh8e8FPuJou5Eik2z3Xy4wmjBCTEtoqgiAtghUh6QC6N4h5Mv3WK91cu5h8eS2AW73AGdH5QE",
  "key26": "4nzT6FyLQGqrYDmkFLnHC6UoF1WpHUaMmYB4y4qchVS42bgWAw1GSitd1ewTbLwbyraBvGHX8uGz7NWacXtitQjR",
  "key27": "37KXXf9dXBEQkHDee6P4YhE4CymZEnSWnzX2ajxHPmSjQsv4xbBLx3YMQjiWjB8jbFLoyoth3ohWevSRhEEU5a9b",
  "key28": "36bMGKZwZ9f5GVeqi8mng9nvTv5q5tXFDKLSgqxTWN9iYHcif52YijT7BFjTuDfUeHHk1nZuzvxKq28UqNFXj42H",
  "key29": "3SVN8dCpe8mhvxZr3jgdBbsPG8AmvrYy5pC5eQedotMVCfyntXivJJJo8Q9HcvXdTz9VygWTjcLSEwnhbk4wiuS",
  "key30": "NszoZLTVLorqoieVv6otKj7c4HRhga9LrFhNR14ZQJmj7Zser2sxUHzqK6dqUuhXZvyemFTjLsUhoHDbwd6BubU",
  "key31": "5Kxi1y2RN2JWEP7yRz8Cs8jKUSexGUXaUYstzBBdZCjU5fUbHSvhGwshPYQ1qXj9pkgKCco4jyh75iHAvihK2ERr",
  "key32": "NSG7fzvJ4rLWYVJNxtWyBkvcDuxKczySB1z7bpL4sgpXNxtyKzy49gJSLYJzv1uSYXC9RAqed3EXoGbjJqDrm8s",
  "key33": "noSFEWv95zWmzVtia8QrW5trYJvsSS4GBkyNFHwwuF3AyVghMTejRbRWRU9jBrxKhMcQeQW3CeF57JLFtkAWU3M",
  "key34": "62ZpYMBGb3HJkTDWS8xtcFPDBPe4v6L13K1JobjSUCR2GgFkVzfCYLWWA6VHjncMaQvFB1QmKK7YrRm6z6wPZxSK",
  "key35": "3dTLrs2RuCKajfh5d3QHk7b6aMR2KuCuDS7m95yFd831fVCqmSvYuQpVHM3joe5sJEbKZZHQ5ysxhAkAk9T7MorQ"
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
