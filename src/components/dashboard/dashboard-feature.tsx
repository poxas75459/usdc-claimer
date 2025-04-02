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
    "4j7QChUYARtL6cTbfd2KGPUCSo8PJhriuTaM5ME9krFbtgD2GnavWUPuLi9hZbeP5eZxB6Ur8dYZsnxPZ7VoSTGT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3qZsm9gadz3PyjiX1m8WqMtFPLBbtZirpMYnrEyCYFAEAjLQtTRNu3KZ28rdYaH37YiBDxDToWTMdRRfGDtm1jzh",
  "key1": "4R6wnpKwYyXWCzPFbyCatqeSKRMDnK11q7WW46tSJUNj8FqoTg43j39YVMg3cB3RNjmHYtdMjaqYzX4e7QraAmma",
  "key2": "5qxZ4HctPFiRpqZjEXrm8H6Z2XcmovPByaJRiWwC8LrXGoZFcW1w7qZ3Yf9UVXvtsSBpWU3Xr1wAYdcXd6vX54tR",
  "key3": "55rKh3Z2RaB5arB8Tw2hdX1uMoMbVRzFHRF7iysCaCGeuxZiU7YKSqVUuuCfNvy2tux4DydiuruzepkebQu5x5Ac",
  "key4": "8LifktZeeXESr2RXUoLwSHp7B9tVMhawAspTfLSjMQSiM418YK8nCHvYXpMgQwZpAJsDVXQoLNjYQLQ4NAxYNvp",
  "key5": "4SPWLfXFFU9Uc6jLvgcrBVoduRQysF9TzqChjH91hKXHYwFhxuM1pJ5HM4DcRkasNfHDpZSz2BEHRuJS8asxb2vb",
  "key6": "5rU7LJcfkMB838p9DPQRvzKhLo1nTaa17WspcrSGMcepL115DjJ5aL51L1bzb1Z2VMj6J8bMdcM2WH6nCLjVGsr5",
  "key7": "32qfoxjeGEJx3m4w5L8B7A3pq32NNoTbsRmGMuR5kEAE4WFmV49J4bQHbAwG4Bz33hsbUtwNMwjhHMse7DbcXWgu",
  "key8": "4THw4iypdiNrwNF1dQ8Vs6tteE5uL6VxgbJPSJpSsgwwN37Qsvh7LnKWTZrGFnamBxLSwAaMGzzpbSyGcEBHfJuR",
  "key9": "4rzzHaJc6hEFWuTW1Zu2az2YwRFrvnCbBKQTq6M8Vd3cWPnnLx6FyP1DS73nasVyKGcionzA7a4pugmEJSdHLyRq",
  "key10": "531Hr6Ko1pGNyAhk4mhJgeBKyAeShvDumTrjtJjp2Uoj3a6XxVbZkkG6Mj9zPeciA4V1d7Baa1yrxs1zCvYmaayc",
  "key11": "4nLRZwSq9V4WAnZN7ERtfUtMPUMNAWmp6zU8ifcL9MKsnSj6zyGYBCWdjhUt8NXaQDQ9QKo1jMgRKunPVDVMsxnX",
  "key12": "3DfYQHqHDvdLgQDmGUU4o7y7wwtCZXDnzQniwk7T41AVsTYcuC2Gz5hwKgBoHtYtSAFsatttm3rq9xvLZikpZHK5",
  "key13": "36yVbY7xk6MyrEHhuHJNDQLYW7oMbxYVZmpQPVPi2X5X3gjbpRcSFQjYGZYB4KdvSrrNmN2ExAQxLcWZCyQKc3FR",
  "key14": "5WNw3T1BsAxpaL6NqvvWhsp2SrvkxMuNjtV7Mert975murcJCDKSgnJnV7wwMSHuEnhf7su8YfSw4KtQV8osRNcW",
  "key15": "2rotjLMUfiWh6Rw2TMaMyBZEnK1bN5SV1k9XughMVkswrQt66mPqFQRXgJy2QnRnrYk99G9qnBQujQRoHJ3x5hBC",
  "key16": "4h1QDThRmf8nfUWfTLG6pKo57zkXifqWujz5F1kK2PCZwDB2HfPFzGhPN3cQAyAFN6ygYGFzRLBkUiB3nRi8W149",
  "key17": "22dUJZNv6HUmu4B4W6GAYVRjkm8DWqEUcbnfeeqC8NTeitf3k6mXrnrNWG2ZeuCqKWGWchMbpK44v6tYkTUsLNDS",
  "key18": "5fJEvsBmFSJzgfx139KzkPwbKYkoUwg5KmoMFB41iAej6gB9Zon12wF3HNo2ukMjYVn8NGYiPhbw8jVo2DP9FBwG",
  "key19": "3uDCMTpP9q1qiez4k4rfxtXnVCWYvoQ2JEM9dNTFvKvhv1a2NjGWY7MKV8rWddXEbZbgFAL9AG4H98nxR7f3M4SD",
  "key20": "66xJ4nSGMgPyFMm3wxBaouN5ADKhd85kvP4HPtmZxLizwrRyNHijm2C2G7iHETUFPKK45QuL3N1gYuqkbYu3kVpL",
  "key21": "5XVycJsLByfwRZwAN1XkEyFZHPedUw7WU4z4x2BLQr9K7Pd7M4t7731ceyx28ynMHBDadwAq6pJ9GNuGtY2mxii8",
  "key22": "4PGXi5HH5MDmStXoMwaUEvuPyYR8wnKttV9aQVGGJm2qyDaiexra1Hx8EGWy7XtRpUJFcnAQzFfSrPJYiVkXiqJV",
  "key23": "CvECXs1Xfai41i1vT5TCPHHCzeNnsNym8HWk8e8EdjQFXKgoWbqvtFqD1fvB5MMNGj2UBEyw6FczhE8VQATruLL",
  "key24": "5ndfzPHG86XDiQF2bykAq4aDtrPga4YEpXZUeXtKE5o54bW3D9Ya4EVqzsbpxum183972xkFuwTonW2F4kmLTBiE",
  "key25": "5N2BsZxua5VXKW3PDzc3kXUnYSv4MpCX3kPw5W95ZKgFrc4MjkDdJ53QeHTY6S8gNkCp7kRCHUTUzLPAs8GAYYDG",
  "key26": "3M5ESPvWRfK5qjKRqV2t8n2BSKSct8imQaDVP23gezpNGkEjT8ch1c3aNVFPzS1aZ4juXL6FKQWTr8Ach8qaweHJ",
  "key27": "46FBPsnhikaJQjXHwfD4z5G7N5a64S6aNQaStA1wUtz64wgR3aahEW7VTMoBPP9zJCmSP2VdRp3RYxq9ANzRzko7",
  "key28": "3zRFXE3GLNfY5V88dddY9gedpnxbWqwMew5k5rM9PMncfJRd9NT3gfwgV84r85qAaszcFzosUWvjLdGnQ8zUKytv",
  "key29": "4zppm95HJ8Hm1pXsPMj8KdDRTNmYHT63AnobwgUVZyP1tJnv91rZhmqMTnobKa9qCGf8F27AnsxkQjFBbKvmaBip",
  "key30": "2XM7jH92Bn61tLmt1xnSuyPTGqn8Thn7VxoSiM4tF4HGDzyETo6spTXNa7W9LBKQxomLJaPyWg2WJ1amebDh4CWo",
  "key31": "5nijw6e3w4anj9iJsFeMcQdLXUVcJcekvjukhSf3Tfaj7KPzdD2VCSZ5cT2GV2LaBjb4aV8bxSfVLmbgfmYiAgZS",
  "key32": "4t5gRP1BFdm5TtWc3UnWyKhmjUomRoqQrx8N8cnWg7YvMxc8rVkZZwmbRBac2eftkx4ejaDk66ovJoaUJkfZtCGR",
  "key33": "3aPKjWRPDCdz6qwqc7XvP4rFS5ZC29nnUe29uS57tHSVeUyEy4jvDbQqUPCBZWEUgJMDM91wpwmuSk9urNcX4BqN",
  "key34": "WxPbXrbsf47QmQZoBnkRZ9pJ5rn5aNevqkFaCDn2EoD1JqPbRLAFe71N3xTs8WLM1a68QcHQrMcQwUUhzNQREGr",
  "key35": "5bSNAtthHKfMgHrQaRWP7nUtM8jbXZR2CjeFpirk73fztKLxA3gxnEznA7WQBQVCzQpgeiKhjH7eSUT35yjhRDRF",
  "key36": "3pBfYM8kcaCQPzB3RMfGNUMRtyHDeFzG6nsgMsZUyMViTT8CDSn2uvxGxQHKigfUFwpjo6NGn5ScgrubEp17GnvM",
  "key37": "3ceZ53Dz38b359uiQDKiQo6hyqBKqja1RcEodMa2J3TkXXRthBRVHGwmRJjcNh8xETzfoR4kEAFZQQLXcj2uAwSG"
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
