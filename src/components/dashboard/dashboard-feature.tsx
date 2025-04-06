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
    "33f6xTt8Re9ErfhcKsSigEmUBnp9Qvx2QNFq9qknTotWcLZmDRFefec9UdEfRxMQH6V9MgLE1EGz9B5R4sTDh4tK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3rxodMiMKB1eXpx4fTKPk8Y6XQA1jjYVfa4Q4CWv1Lu9MeBS4JG6kacepUpZcbBPZZJarBLeiJTA4Kvdh4mEJDKN",
  "key1": "5tE13PrqCPdAqzpxa7a9MV1Jzv2mwrzw4BzXG9eaAqjN2dPdpZ9NgDhSSn7SKTgVW2b26Pgz2XujxasH7EpKSkgT",
  "key2": "5p91RKhVYP2X7pMt6Fp7gUBvRGUzPFdkXz4km1YXDCguZExpeckUsfiU7QKqqPaCsYik9upP6EBKX4GPSeBFjrQm",
  "key3": "2gYtNvCJse5YAyZGc2i3WS3u7mu5tWT7p6hBrpro5vaeS4zxFRttPxBVHUfPrcx6s7KQ2AtDMoH37XKpL2MQTUaT",
  "key4": "4TahJ6GDWUqtTMvBXMSBivfvrv1bt8QVkXgcyRuwbpVJdonDBzhSBFpGLEVLR2Q8EtXkrNHMui6rL2ueaEeyr8rp",
  "key5": "3Dj5ZS8yrrZYQdxU1e3DWWu9EH5gzZvrpKxz6DPG5YKA2Xf1idcwPaNxHfc1SMD9WTEqjNxrE8tWV62pQKSAdtxa",
  "key6": "5pphfnAPKto2zWyYerGRSpwgsxTCVWx1g7XT9XS6vyxvJRHAZXQD9G856nfjJmGp785uBt6Qqbm8nALewRxZkqMr",
  "key7": "3G2yq2ZtLRv7fTQdGcn7y8iNzVRrK24AcwUJBmPhJDSYPWYPEdXibRDghGRqdNJ5tXSGnDfAJj9qnCVSch2Tewuk",
  "key8": "3r58gf4vD9YL9AaAQ5Vto1mGm7vGHbsGt4ZRwSjHPH9D7vnszty8GFsv1nX35VqHhvTzjXrr4dpiEMKV8iGzcjR8",
  "key9": "4rzc8gFbQPzT7xYUyBY1MdhVYm351fPvREr8ZCyviGrYk8edDDXB1yBecoPzBmtR6PDngkBkZvjvnpqKtBDogkZV",
  "key10": "2MVWNg2r3HeTvRKbEqSq8LnmnA6qKmAJrR5TVjB9Ja25kHag5nE52pPwsHw9buAdc8pXpHYqEjeX8tqVcZY5tMLD",
  "key11": "9GMe7uRvPoJPmr4yg5gAjju7zRiu8Zxtd4q3YnU2yHYdumvDDd4bvsLZjpgDujF7cKNL7ogZUhyqTsuxLReVhsV",
  "key12": "2FoXoVJSuETe1mEDLz7CAcgEVHLM1oqnF99ZDsRKJEE1Wt5LQB98Cdj4twws8gV66i2kVe2KKG57dfG1JvczTq6c",
  "key13": "3jvDCEU5xuud7adbdLYxEtBKaxV2hRhVL2g6QSxK9v1aTFmEqq5AMxosunANU1tLxT35ThFpekbApcUkWxVWeWF",
  "key14": "22Dw8Rz8JbJxHzWZQGcHzzd37dEMSKDAV79VDoD8UPYrSezGhidbK4Jrmg9PrRkpstGFiBnRLqZvwzNj7bhyeN7s",
  "key15": "2HJ8x3L9mffZehtgBZmoNdbXh5De2Kz1idCrmX9WqUwUe1Vixn8TSZEV4c7Gi7kPhgsTAj9NJchnb4Dm4MH6HqD7",
  "key16": "4wRFK4MCdBKJEkxwBkQyWCY4i4EsaNZhu24HAKTfBPXWSoS9PejJQ63FZKjxD6UKDRFwqp3SsYC6R8pca5ygBbKE",
  "key17": "3N4bc2Gusom63zPusBs4iH79HLDLQyjEHrNq8duPK4sZDbcZnz1DLkkMgkgKJn5RZgBd9sYcH4A13AudvCFZaeaU",
  "key18": "2UaTnbbqAqfcL1eG5ZesSUUEXHorRyR6wTyztAruPJVz6Yo7Xtj3JcNCHj9wcjyJMDK3f6NhqqARQ48gNMxegQ9K",
  "key19": "5XwPVpv6ea8Aia88P7kGmL1v4bUs3fZrTDXgbRzFwdDWv1gVxJtLR2xNw5RK7Ue5tFhWJx1GbE8DtPuQMRh5EbLF",
  "key20": "46JdgMtej9vEKXKk2D8YHKiXJFGZDEsZSFeHtNxFfrid2AMvg1LQp6UPc4SEaVnkpgBZWJUqyw8CQFaFQAbzCrmM",
  "key21": "2dT5tZK79kHXXbMbYiTL4BCsuivVLcbNijpwQvKrkkeFp3NQBvV3XtWyvV7z6NehiGxbPBx8PiHSQbY7Gn7Dzeih",
  "key22": "2DdWM7sJxHkWYXRtrxQtJTauYX5wr3yS1B7P1YZ3NyFA6f1dtkUrUCGnnRxZABGXHVEdAMqtTndwiRcYjXM3RLVW",
  "key23": "4ys9obzy3G6F6qnHVpGVrzMxsCD7UQRfzyYzCt4gasC5msxfmWjxQ2ZE9S6XaAFBYsKbPa5mYHysSU76dsFGtJwH",
  "key24": "5DShqENdruKPCdDQmMvzdk2rwoAEk5Bd1BXCnzCdBoQyt1ggrrqE1YitEYQWaBp6p7N6PRfXfjiNosihSfgA5EZD",
  "key25": "4vi73Ls6ML8jT7eenBNDUD3BRAVHk8nGfaEc1CH6bSjMfQBZCoUjNN7wYAD7ZYmdqP7qYwZgS2Spa8745JTWeuvi",
  "key26": "41Lxrjw7KaYguXkNR8gxhR7zH1LTgVBUU1EBpUyUR67DJ1GvVqsJGTKiD7b4W5EKK8gMMvVTQFarEq9eHLHndVwa",
  "key27": "5hUZY5vzZqiJbFFSzUcbfPFrAcdtFKpqAf4fvErXArkW4JrymnMdisXBkiKDPdYVc9iBi4yDnUuemm8BGbCE811k",
  "key28": "3MJ5iBQtEjmHsrejbn8C5amLArGN3WNvi1WS17a7i78VhB5U7rH4QrxQ9tDcG3A5dMkxFnGBo4o9znREsH6e8P9e",
  "key29": "5UBLocMCWuvTjUbZPGymLVJRbWFRmc9y4S6xosKRBf5VgAv6sgmXVh6r9GWDcx8Y8kvY5wDMWAdP9693nWYC2wQ9",
  "key30": "3oRpzpdtuacqtRZ6p6g2UNsLweN2ywC6w5dkFWL3iC4ZWHgjddvLJhsPjPuxTCK44amkgFnre8JaQB4grRb9b3xJ",
  "key31": "xQYxZKt5nXSGsScVCtEzmzyRpEWzwUTRicwg9YHJySctNPUjmuvQG6oJgBXJMJfNM2qMnDGVSfwaNE3g8T7euMp",
  "key32": "38QQn7jEEZy9TJu7XiYUhRTBZC1gGxcETQpVF4TiNSLx3dSRbeokZxL2rS48heUoZJmKwvend7CeTUtBfHjBdeAd"
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
