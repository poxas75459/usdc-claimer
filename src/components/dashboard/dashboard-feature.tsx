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
    "NcmZeVMzTRKFA4F3V4RbKBFVwKHYkDjmqjnxj5m4LJEsWomLEqZoYAAcCuSYigj8YtqfCF4i2NrWbYuAzHTGhYb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xQ5iMoZbTqK9wx7sp3eYvc7c5XqB3yw7XAJzWV4s1gnjKX7r97T6wuBXyDuNFA5fTvhB4mPipR7UjqAqqxfDv5Z",
  "key1": "5GoFV6w9wGU46RRKYRtDveo6acZgfms1FsF8NRiSiNpKtfrVMtiZUEPSANT2dXDtBBVj9ndk4FKKh5gUdRsY3ESK",
  "key2": "39YZFQmg9sK1VHRxHVVyYuH7Sv9h7gEcFCtuU96Jby7Wz8R6mQAgJtNdsybhCKpoEWjZhzjz57vCgJnMqYnEqz8L",
  "key3": "3bKchHgJdF8rz7cjYFcempTe8SSkv8vaQiRcYiaqCVXnDYzRFDoUJkzTzijXzUvCvav6H4PpKDfb8xs2Vac4fBVX",
  "key4": "4BzADe8R8TwKjDpTSikVoiJQCukWhPxQXDQ4A5mL74ct8qdJgQtQLv3EpFG5xjTJLJm7qJBVCGzWtJ7tp4DJUf6u",
  "key5": "4FqtS9GGRVEz4XRtFakciEZRVJHPEJRPpJ7TF58KMGynsK6RskZ12W8NuBGfXGQyEcquHpDgAzgUQW2mTSnJrmMy",
  "key6": "4xLqkjn4ACDmUiXNNWHHHRCYet9UWF1Xd2Lr4jujVXvnigsnuL84ZsFmiJHCaNwioJSZm1TTB2aLrR5Hqwj9x2LJ",
  "key7": "4YC4pNUDHLhdZt5rXEGPQ2dqDKTmNohhXoxGXi8fGiYY91j9HjrTrxLEfjwwxdyWycMJv4R7uziveCeqdtMtAE5C",
  "key8": "3GzGNK9bJbV51FpAAxWTHD7Sv4cndkVKCq4gWzEremhxoP3HHfW4wf4rAHDrZj1Sn7rLGWbyWpzAgDRdp7LjxLzc",
  "key9": "5nQMSpQWD7J32yv2pXB8HP6EfwkaUHQ7HUxapL8ULq1q8rkdUcRMaZLTT28aKWQgsBdauheJLQUPsCkfSUquRxEe",
  "key10": "5KDt92M9dUC9huPycGYu4Deycn4BQri79e8NbWHSLLeXRafRGx9HRLQ2Ew7YPgF7iL9hukcw2smynPwRRShjJpay",
  "key11": "Svg14MDKUKNuXPzSzt3awYxfaxzJyrrQscX57uR8HWpPuvhfs8wQkC2z1CzqDajSNKUirsDDjQMw2YfEjLjnRWa",
  "key12": "2fzcDJsDhdFzzuDCg43rXMgjkPDmxw1Thbwy6rtnvhcw7bSPewfAcw1kC2GbHH74XnjNtF8m8HShks4v3qeK4yhv",
  "key13": "5xKiA97DXDKK8iEPADEquUdZvk6Z3nXDBZt5rqZtyvtMVFLpS4LFJuckzS8jAkpweHun7SBQfJrNSvTh47bFMaWW",
  "key14": "3ERcgA1FCDPzCbiBJjCcC4EcBTgRT4AA8HzwKGpKnZZWLqpGaZxioAYxdRPQK7Rfa13yvYGKfEsq5aMYisfqoGbU",
  "key15": "3dozVrwPidEmVjvCrDdQAeMH2bxCbuxWFWy5fGaoQ79ehABjsVVRUW9CkAfJghnjZhqypNTYZ34wWtepvQDXRBkL",
  "key16": "2MGtu6faACAibhdns6rktMpiYFtvA5vXbJpKu1TKMpPQeKCBunHBtLezwxi1ES31WCwTfUSiU4BsBQrBo4mCBxVQ",
  "key17": "z11MNQ4vsc7ocKrNqdmwyeWRf2pzsKtfMHLpqsqGJksDn7Jxbz2E1X4ThbPYvqNePBfemnKpgmQZsaC5KRq8EEf",
  "key18": "5RFHi84KFACsCP4qjCRY6q6xkTdnHTzTR8x8S3VV1J3nhhFbpnKWW5yo5q9aT66DiFCGzB41UhGt4ESjpoyUUzDq",
  "key19": "62q53VrxMd8boqjtqQGQEjTjFjxf5sf94qWsDf5ouo5GWqDAdLKeW1CHtX6Sof5fd2RDsuhuEqgsfgkyvZhxwroU",
  "key20": "2TCeQsFM6vgaevx9GoLPJfsTEMajArt8JUkyVbFf9iJH5fG4mc2z5csQacrNEdHB7CEzW7VrpVopNyKpAraKjjoy",
  "key21": "2f9bE279RQ6zKo5Qqszzp7P6WGaUmtmRy9at2oBzXSpAy82S5gMoLo1xAtP9XcCiFjRvMH5fuVs6T8DRTaLTk6Rz",
  "key22": "4RQWYMHcKgF6tUcoSZdgnxRqLbKwRJgR6LfAG2saDXxH1B1n7YrcuTsBe9cYks1xa78AA6KC9iFbUEcSTdT4KoCd",
  "key23": "3AY97EUVGbn3bz8cJ7CyWGui7CVNNvkvgVqc5DuNgnk7kXiKNLKs3axtpbvXrZ1HtJFQwAXHrq2H68tpQanbfBrR",
  "key24": "BzjXhUCFdRiQ7VNvriBbAbffXvCRWFSfPmgeAE1npzPNk1zQHqPNiwU8mi2nWuBtYUrVETdVDBQ7Fb4wksGun8X",
  "key25": "4cHeAv78D5NBRB4Do7j4eoKd2PFgwUacyvWfrADh2hGeF1LMxWnDA1RA6w4DzYJwcHVZ2WkAoyV7X6JfzXii9FCv",
  "key26": "3SmQGLTZExo2jmk3o2B3vxpiuSBbhmy85tNqTJgeT8zLwXjTRPo9QkPBsmvMK3sNf2NhVFW1bpmA6nkAFP3jjX7t",
  "key27": "5EfgpP5AYR2ZFrHk4GwJUeXrFJs6f7XfTamz3prET5pdYGKE9WPo3ufVjnV2nn27sgLgrHNpEW6Vt7XEWboFPvC3",
  "key28": "4TCxHHnGzMNnzmG2HFju2pSmYw1gpM6nXn2EMdrMCfPdyogrb7SRWpUzF3uJZ99zn44r5wjUf7ERCXMKvXmQs2ob",
  "key29": "3DaMkczAETRj2Dm4wQqUviT6bJtfNYSrAgkdu5K5Prn14CRYhGhHjGM9Ci27eaGxoMwsRAnNpDoiEJyRJxvhCwhF",
  "key30": "2ZDtMcBxGc7YQMGSyDuAAthLmVsMArXv67S1CrXJoY7Sy59UZcyJhfsUB9CTp62N5owHCKTU3gWBCNqMdviVEW2R",
  "key31": "5K4bMDcgF2pXtroeuWoaJpbTZKuUwxzksmBXJFvA1rZhiMxuDFC7W7rNxnAcBdidxhbuYsEN7RsCAh45VaRqvfAo",
  "key32": "5NVQToHvWjQgpmZqK9X6uqqZCqBkaqFJtwKFZQJTFiJB5kaVyZvM4uCqzY6JCYZeCWL7eJ3gbAVcJa5oSkeaj86S",
  "key33": "2eBDvjWq5HCDp6RXmPPdcGLappAaVrnbQJQpQWtsw3w2ndEtyGwtXG1rQXCxUqyGWXGCyPeR4Sgymg5R1Tn9ywDf",
  "key34": "2AvmUwKSPpd8sixzKaS8zWxc3FVqBju4566RLENHKYm6LXCMdhnDmJaTNK59SADV32VPd9DE9qYLXK1VMyXNSrYH",
  "key35": "2eKVTQBQGj48zGz7UZADV7fW7FU3HjdkWw9nvauWpugXPjt2Rvi933Weyv1jV1wu7jRT9CMUmQ9ZLW1TuqywtUME",
  "key36": "5HNBWyn2JzCiuAQvs3gxMzaX2TZWsNSiKhUcmaDwyu5HXpnYqwpU89WA7iJCPFj8KBk2ZWnoHLLMmRjsqjtittzw",
  "key37": "47w8E7LVkL6dr8QEBiDA7574bvTE3qBxofmdyH9fwJZUKhp46jKc3nGdtN9Wc2XjnRZM3V3nwockpS2ZJK9cZeyp",
  "key38": "HMc7pJ2gsghhainhRdRbST5RnvV5ZzohdSFNH9EqLGrzDV2Y5A1JVhH5khKzmGiJP1pHhpV7dS64zDZCAdgSNXp",
  "key39": "24rWdWwvQCsMdHmC5K6yj5fWSF6BiymQXnYKDuy8VyWxSMVTVf7qK2n1Xu9c8qsuKHLmUw9Ky8vktkvKrdXom4QR",
  "key40": "3e6B1Cv5v1DSZKmk4ysBhwcrGwRno9ArmCtbWz7549WYyBD66BW6VErwg67q5mM55SgaDSb1VdksyqtrV7FGHJUZ",
  "key41": "4HC2Xpwsi93LFqP7u7ZamV6e8vyvLVkD4h5pGD7eaMGLNF4Wm2bDs8S5cNWXUooFtWtNtgta9FSXwTgP5iGzRSxM",
  "key42": "khzji8uXaoD31oYVph2JjY74iESD3KnSgBn1pqttiWpDbhdQRXn2iCUfwTqkQNsaM2Xg1WgQycFfHd2g3Lxjim3",
  "key43": "3TxrktxhJNapL5J1BSWhgpySPcqLRc7qj2ShnfoSMQy7u75cNsJECqRfCAqG8wBnhKDN4dKreNps9WPueHWDZVfu"
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
