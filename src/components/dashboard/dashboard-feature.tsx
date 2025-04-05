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
    "3YQYCRvePz7gzaconbQJ6k8kdmaXwciLcdB1D1jRhfFbRLPNrrFeHKKwBa9g1KRJJhP6UDHWasYKgQBvAwzPig5S"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2AZmmhzGK8iscbKmLkHaaRaDtJDd6Mr2jcUHwxC6kJ56xh196Ktr83ibTK4qBXNXxBm4FTRq8oJoHcCoBVeetHrL",
  "key1": "5sC77H8WLa6VSiCRAveXYhjrrDfGgCxbLJYnAjHhtoyudnnaiFDtC6LyE3Muqsqkq38iupG2CfkrVuUW92UtBJb5",
  "key2": "5CWdR4y4dJyxEQsemtEbCqCZBiGnfSGc4tuPA78fKYk7hSqi2QEiUTKXGbQbwi484dwcwia6wVxrfqoace3KpxcD",
  "key3": "5qf398VWCfZmQeE6tw1fu34pwrUmTtWE3PrS4nhiMxnQ8bpJs5stfLUAhWYDjk9FHk895c6hLBd5hNSy1y6ZjtXB",
  "key4": "5Nd1rxPk3YnW3TAVwt1PVvPmTWtNUPbAwJLLirEgQNcPkrMV3gw62Yi6DSao7phUkSuKHRv8E3dsL7bgCDKJMS1B",
  "key5": "oGn2pWQF4N6ZZpr8w1YW8BmDMPTkHFj2Ahhk3dVBi4XNrN1YUJMkgyBVxgDC3WaVr2oizuRktn1hRvhhHMGxzCy",
  "key6": "64yS8ijovcUm68gMV9jLnS4q1sHAgPkwZe83hn3LJtTAhMKjWakie3R3qhBp7gKa54zdjsZsbZMdgsnfaUgvh6BN",
  "key7": "3UhcbK6RgRxftDnap7LbrrSdSST84EceLcyPEN9sDeyYhSPNaERCVvZ5sgCw6tHMocZDWpuxeARHi2AgAPKr5an2",
  "key8": "2enicew8sB88YKymGxkaKakrJaMEtionPtjw7CWo2mZceovsmJ9Kr9LHBUEE1p6HYa6yhnKKnMHbf5wY4P8xZv8G",
  "key9": "2BpeZQqN3vpxtZPnSNEvYYaf2TmCYP5xEDxJLLUxpAHGctvZmy5FEvZRZZddBa9F73MMZQ8G9Mc3f5ARRN8expBD",
  "key10": "5QiJckYcWM4UKozaGRUqYLRKqjBMjBnWpKJGM5nmPW1R4VgYzPswJVsAKtRGCACwoB73v4wfoukCH1DHgeKqBAef",
  "key11": "XU2xqXdXDcVPiVfww9Hz8s7AFUEseYtjyn535n3bhiK8HDDVA6BsEq8eDPDaHyGYm7HukgAe1ea6A1jxVywVV3V",
  "key12": "3KyJY38mtLsASfTfkyH7D3Vgb41ukfptJxj3eskdVSsFVVB8iihtLV7Ymz7wd6MCWNexjpqHUNyAm6aLySSEjh53",
  "key13": "2ATb2VaU7WpYxr9h5fVaTgdk7vgvTw88GASdzUxSYoSDMtFR425YH427H9HGDzRaAQEqYuXYR9cBfpfSDJ9WHzRs",
  "key14": "3gTDQfPMoKngjCdXadctCPCLHZrMXTcmN17sBDPDYCiXg7gqM8u8KUGAQFLUTEM7Kt9FmNyiPn6Qjuh8C84ANEZb",
  "key15": "4PmVpsFhiFfNgQ9QhpsY3RRFYA3PozXk7tWQEt4SqrRTVjx1Sfzsrt967qhG8K3DWuatAV29qFdCEEpAXaBczJV5",
  "key16": "2JPHfK3oBdSiJfnVZMhUshzQGsN7jTBViJGXkU4i52wYS7V3q52Hfg17MymiHsGrMzVpQMeVvXyBaNZdWe5j9MpK",
  "key17": "4f3F7ed6Vk5MNVpjiMPsuNJ9vbDWnCV8UiadjzSp2niydeDcY47niv6X6inmVj7BeLr9RaWaFLET5iCNAUqmg1Nb",
  "key18": "3hbWtVKwsKHkTp8mPvccrnSajhJndXJ7htPPSLXotrC6Q5v1ZM6GjW8prpVeK2UauG6fQARWz71ERVDLAxi38j6H",
  "key19": "4nNxEokMxMX6e33wShx1wom61YB9djzotAe3RgRkKaNntTM2q5fEeSg65WyaxG7eULdrzHtjXouJB2Stu6dtDpVZ",
  "key20": "2QdjCfhBT2fWBCp6jZyneWKMSfiCVVhGsYXZYaHqZb48VCNtiinL1cftJry152Pvq49m6DchUbSKJaHdNszyJ6De",
  "key21": "4vFjb7ggzH8oFds2s2j3FJfp5eMMJ8prcfszyeJTaPmUez4cYE8LiyWLfprXrC2G5Ud2Wr8wvzNwL8bxTfqk88ke",
  "key22": "2AvDz3NiJCt3VSxzhhuqV424MRq423mb8nBpeccKKmAhGnR7AVS6F9jjSn5u7YM88hD7iEhVME6yaDpJVjEPZL7o",
  "key23": "HMHBi5yQrN48P2WZYZNb3GCyf1ouovxWbqZejrstXqevhCMk118rGxGCeMxjdvK7kJYeQNvgksi4L4wbb8LvJ1L",
  "key24": "3tSU5nZLn7PfnsVrQamKemJC3sRi6MDpMaxPYU8VpWXg54PUb15LoYjpLR9xa3jZ9gdmH4f6QABSpPQ1MqD9DEqx",
  "key25": "5F3xhHQnmf9vrSkq4brBE79JqRxJuY1dp1W9S6Qxiv2WhuGSd6JUX7gSHyDTb8gTju3gW9Q3eKSAxyAJoTWWKqu3",
  "key26": "3hGUkeLsK9XKp2GyLWonFTgrxRrdte32zPmUuPssJ4ikYgkX369wjtNshnkY5Fpm6EQeWkC5PLpejbjuzLChJYrm"
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
