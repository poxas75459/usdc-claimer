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
    "3KZKykwNT4j4fgNFz4tUri3Ba7BeKyTp9gDcZpty1Y6De9LQmSgrPWLvQPzrn5x2nKoA8ShLgPaGG7oMcx6VTAPH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5SPu5P3twt2fp8mTPDjyRvoJ6GhFYiLxoWinwf16EsAs8Wnw17D74YW8xSpFyf72eqro2BYGgwtQgzdWGHDv8twc",
  "key1": "2LnWCbt7YDMYDaRBC7g7bZ1ZjU4pfEehK1tYUtVKj5edCVkGgNav4rkhWBqZkpu4j8n4NDhxmn9CwZbxmLhwtw5v",
  "key2": "44MBmK9gXWVAYxVUtPntqREgDGNiSe8hHcN4MAYiYq4PusAkMNP4joU5BNcNMEFZdnxEsuG92tES6Q9bhWUWZdL9",
  "key3": "4ymdPTHHgfSyA65TwzgehQ9mYYyPNHKKjsthkpmwAfangACGcniCdzCdwUFky2WLVdJ6dRzdCxYsmoKUAzPhDhoj",
  "key4": "QtwfN7MdXKSZxrTRG197ume1xBiepkoHRujhqCeqvQ31ZMJfEfZkBBkrWHgZtLGTKWjnr9fDzAG7XpzsMdnbcRT",
  "key5": "y68Bx62xdP3X3Ahxt19J6RTDjHJPftfupVDa6yFv1hMYgGB8TP8KJk4D38b1Jbo3F3EVEttKsppX6sSU4eER8VQ",
  "key6": "UXEfe4dvrpPQyfN8x3PpBYpHjQP1giBUikb6vxKKRYJP4c9WfiVYrugwR9NJUVmdxAz5UjooEuMvwE4A34b7Tev",
  "key7": "2fnPjvf4TyrSAHeMZwFkx7swGJgYJJe1wZdPi7b5rPSVLB6V1P9N3f8xbWPdr64fJecmmqZ6QjyDvJXTtMkWZ3kD",
  "key8": "2d8PYoaLpqXGSFwqLwy1JHLLVEBv7D7PvhMqTtgPtAcNjYiHo7YL7sETXeQnwjaRAhHogrWnp9MZf8m2RowXarXt",
  "key9": "5cAQTkKS6oanN8u4rUrZrz4cb7XWUmx143QGEZS55WgLjN2mQhWdwGFzK1ZkK93GWPE7P9JPwGjZza7E454h9faR",
  "key10": "MFnAjwqoBapc8UJXBxWrP55QzvqM6m8e7TMNBC3jofsD2vA4nrWBG28MsEvqoGnniXm2kBiVQGRRp5jvDWLdScp",
  "key11": "4XSzfmCMpTPGJneT4zP3VBa7ZrBvFSKyEmo3zUEebmha5JfZH873EJkXfvPgAs2MdACB5sv48FUET54ThKSBRTyK",
  "key12": "2GuS79etWHEwuiwHNbJzgBzJ63siaHudZMfWj3ojvGKHYgLuj2cr22ZyYutmPU9xJH8YUoAaMbzQRbZSGDW6rwXv",
  "key13": "5ExJcg8kMudPvsFUp65kMpJRNszph9ZrwzYMoLDfJ8nMZHfcikKT6mYvrRGpGeEnDwCfu1er8RYt5WtC764yReXi",
  "key14": "28Zvd7MAmb49DcnFfyYN8ZhmN7rbPTqdxWUxvwKjyBra8cKkNizknNQc8CtbX5YUdHkfB5KkAwt9GZwKmDMoyi2d",
  "key15": "4eXWiiAuowkr9APK4Q7vtZpwjGBuSaxW3sKS3TuQf4rqHGke9A2KLdoYa7YXfAvkbPPfxJFChbWzqJetWskDo96s",
  "key16": "4gYHpm8pnkXpdm4odsDPWbKLjwNxgphNUancMXvU1e1MQZtEAk34PQ5huFSSjRvMtNGcJUCw61LyUmFo5FVWHvcq",
  "key17": "3Gi2f5qwgxmgH6rTgwnbwmP3pnY7R14hKDH1TDZ8GZ31ezFEJpmJDWwKYCYt9QGGkHzNK31nyVEmYRdpGknEU8eZ",
  "key18": "2bJJGHhfGCAsmi3VeSmqcZbz3zYb9q2APwF4R7WsTgBVBxMRCykaSudCdS1ze6LUzF51ZZ6M2Q8PJ66mcxjx8MAc",
  "key19": "2gDLRhbj3R36T2wQRRWMQBemK3y2UTMT2dyVM6u3Ly1t2UpGgAEceqMmzbU4Vi4c7cXKN6jz8ixq8c5E3G29yr9Q",
  "key20": "5p4iyb76vbZLU6nPzPyXcnsfz28Pcs6ZF3FiTGkvGu4M8kpPpENoMhNnukFrE1T4WYA5uEEzMcyvQGgspuyqFd2E",
  "key21": "4DDhya3k3J78dFgMRYFsYdgssU6s8Ro2dTohs5A12nwUJ29GQfuVVk8N9eHm34UY8TaQgovQJPkEkYzm6frUq8bf",
  "key22": "572Xgaha59xTDPyUqhXBBf828DaEd3XZ3GYLtJE5tgrdgJuAttuUWJtrUT7vembpFcuKnhNRmJs2naBAi3bMu9Zz",
  "key23": "52LRBn5cdiKh28zyo2Gg5iyo6T8DLRjceYVM3k7bYyV4HnTGNQQepvACTp7ytJ1gw8b6n7yGT5t983oR2DjCpwqY",
  "key24": "YRF6w7aaXvLehJHVtdoFjEAKyQafxsD52XtbtcKBon5RvsBWNR64WqvaFzYegwc47PmhkoZL9KQQcLcouLUrnXR",
  "key25": "woSehAN2GhVCBR4Ts1D9e1JBHQmFS6kiRGEAeVzQqgH5kxqwW2WD5oPJbEzAGGN4ABa5fzqZfthDhVZK3qTiKq1",
  "key26": "23isUT4BAJgfPKm2MdjQGpic4hmD6ELf5JCoi9v94HE8s6idftuAeDUA3emjnePpZyDxbXiYe84ZxPgNhrVpwycN",
  "key27": "diDmTT96Bn96cKSJbGXRNfNzVxkJfYGe717JukRVXH1RDE8vaPBDXTmJQ2WLRoQ2rvp7vjAXeKb1HLtgDeQeNi8",
  "key28": "4K8WZ9vdtsZ2VDiDfmBYGAqgEgKLCpjJ7XmFbW14v1zDX5JJedJUSA5H4F5wxordVPbbNNyPbrLy68sJMXRBaX36",
  "key29": "ySrgj4ZEVS23HdBsH9HWUDnk1x6S9xxT5BNQKABegb4LtRmogXmhnraRVcrXJTxct2k9ninX4SkXDuwJJHFGvg2"
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
