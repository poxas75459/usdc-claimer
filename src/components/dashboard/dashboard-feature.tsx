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
    "3SLJELwN4rMUwtj2JedQ4nzAfvGwfFTYFHJnP8WsrSXv4C8CJT38HwURf3BkqwZjJtne7BzSFKv3VBCF33XPMvS5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2qPE52ffa5v9dQ5dHutkk2j5W5cA7u4ML6qUQMoWq9AbLsd17C2Te4oR4ucG64Ti4LVjs5msWNNZNrz56jGfWxSk",
  "key1": "TN724RwVVpjA9ed5HY78JBSB5uYUjGMD1rZwsaYtqm1uevrCavqjv8Ma3co6PpmzWd9cvo14nNq6TCqGYe9MSsg",
  "key2": "4erfjgMcNC5SUcsRVizZ7gKbPjbdEJnHDYVRs2MrFxPzsKJ6Kk2whAVnY2N61w2zen9PtYJKkBFwkSrQafjQCWMj",
  "key3": "HcVoCxtADsTN6FUCprq9qYZKwCw2sstGt9h1P7gzT82ggiYVpXs6L2eoqmDTj2u11bUPoCzgXHpbHHJuNm6Gvwf",
  "key4": "2Yw5y1h5RmiVuqkgJD9aXBBy8TU7ZPgbeJQfvDbMANuK9219kmX8XcTpXYs6G8KEHBrWdRmzfnvtR3tEM8zJHJop",
  "key5": "3GNABfmgY22LGNxxUBseZCScvJCiP3jQJNyMYzTq5PsC65HvE6bFX6BSZiPx3Vk3Lve1ujGts8XwnKMqjGrRwsM3",
  "key6": "3oCsihH6jkaftf8FStXrttKJQdfv1ivpSV8pmfvJsvF9a4yxjxMftTTaA4QjWVkPYeduxg93FKVC1vBKVX5zcUPW",
  "key7": "4iUgftg4yfb4J4TQhEBFq7dtEBNN2fMyD9bWpS8MGSyNTSZUMFe3ow2c12H8B1EqvNrVAF4BqcB18G6rEQ3qtscd",
  "key8": "5MTjCMcGwSn5L5T22VayTVx4rkAZNoq1KaJLZYHhwQD5t5LpQVKa2fvwPDvhsHvWrdYsmCTM51A5kFKDApSHLpRs",
  "key9": "3hGWduTuU78mtJjMr8XEcW5koS6dTHJQBo2jEZtxwhi5dnvGe2V44CpRhKWzSDZjzgifxsjkMbAwPYoNZ9XjGmK8",
  "key10": "5FU7izHTApZfd1w5t1c7mSqcnyQ47A9NPDi6gGNgf1sRhD1aS44fEKYFVCxoD9iBS9iehQ2Je4Dmx3qtPsjq3diT",
  "key11": "Jq9NLb4PbmcQ4KfSDffhLB62kqgC8Y8BxnPTnkfyBc8Q2VdRn2otfSnxq8U84ZUo5XT4RknJiHZktwWm6JY892m",
  "key12": "2kascJeotWoMRZRLKSkRwwUvwvh5PXyB8NaFtUd9gJ2AYH6aMMXKeiSMP7zoTftAZz1wyc2AKjvaCDxUZsSnQKdJ",
  "key13": "4tVT8M8thHtRrW1qAc5rYLsXUQyvCerBWQBUN5rGETQwsQ7LKqQjcjWHEi3eBZQJN8SwwRhMm7Cw2u2WLbLsuDBq",
  "key14": "4C4xxwag4UgFytdw9PEF2rsFdegkakexMKF6YhX9jqbYUN9E2hYnVSmqYKcvCcH54aGF4cSfgaFSwhxJnR1fSHjq",
  "key15": "2zLzW5HTLbPtYp6tXgCsqiGir6KjEDHYDdxXdewLoFfPaHtxtpUyS8DZD5p2XA2LK3zbW8hidprcsop1R5UKfww1",
  "key16": "4gnaQd74THRYmHkBmyqgXFkJYP5ZxC9EWHCDebpqjfetheShKtfXtNhYM8BxjFoXYWZp7hZ6FHmuR3iXRBZSCigU",
  "key17": "5Py7h5VvqG2jZ2iaSHoywJBGVqvMWcyyAqmKA3mBDCFBvz2XTtyKpFamy1nLp2pkc7HJBFErdRGD1rRUchqYidet",
  "key18": "3o5cVFq179a65hkVcb6QZ38KZ8F8RE9NDBSQiba754VDYqh5apBTL2EnpAoceLtTdpCAHMgPqhYrGFa3B1DkacBi",
  "key19": "wJYYfzRo8aSSp9sBi1JHfZ7MnprgQnF4NNW8TCAT3Fp7LUxALTQKALSgvM7LC5SEZJ9WEgFsd49vyWqd5unTSV2",
  "key20": "QFPFscEgdjga9quF3LHtnqZwBB1ASbdVAhAC4EsNhdKpWsTksRnh55jubBpAEqUp44ZcJDQEB2QuGUTba4KAuMC",
  "key21": "4aAqoA2iKhVAkmivTnw4kLPDuAU589daRj2hvzaAkp6aoe1pf4GuYUMQMs5KtTJAHm2kgjHpQbdCwiPU4xKoufH8",
  "key22": "oDYdipsx88bKKw1D73pTTp6vR7PYFxZMyvNjehzhF2QBZaBGHpTwmhEtzvMMw9EDtNX6nr22qXppmxgx8onydXd",
  "key23": "3xpxPU4AeKZnHyDVKtt9EqvkQKabgoWqFF2p8X1L5RNQC1zPzaeUmdBbr1mZVTyQhdP4JcarZyEbPMcGx6J21E6i",
  "key24": "4Whg4j1Sx7RmVxcKF9piGnFHXPEnFuYgFLYKGeVpRcHmUxGqLYUthmdpyuStw95pcJEj38V6RGtAVjTLiNMm4Ssm",
  "key25": "yDqMETwidHvCvoCUapnynmnDZ42C6pHoTjXyEWxR8sCFAV3ifM6dXB8W3aqRNL7zwmjBAEjnASiEzfJSMtFqnxj",
  "key26": "562zr5A6QygKnrHD7Y5doviSXnv1BU2iMDmpHyPCGbasnLS5kyy6gz7ysnJFPh2rmQQMGTRWjrsseaBEoWzcJReF",
  "key27": "5bJHJuZ6VCFQPApGZghBoyYe2kFv9QP4dSjiN2EfaUX9tcFyKSZEnbNNLvk1q7RDZpxPme1j2o3vDb1qeTbc6pwd",
  "key28": "2kZiVUxuKLN1LaXRyBCXExgMCTXGmQJQ8pEHU8G8t6UsqQBhfFQ2yjGN8RYNZyK593hfuoyPUyxuC62Cz4xZNyP",
  "key29": "3FhgXNJ56QwYiAnqrfNMmv5modCwiSjVijSz6Sfm9exb9CbfoHxFNX3KeCqmw5YnnMzJTJaCyLec6bR8vtKyc5do",
  "key30": "2CbYARvXW1Hea29ZnyQCQjynHmx5Fjrt5L74f6WYhp8moUVrGcGcvLWP7rvaXTorckKVBjjNozmWJ68ctFJ6sBTw",
  "key31": "4swLUPZESEMXyHkzxcDziLe6HqWudzfo4DHf5gAPxjV7tJmDhTd9PHNQpsYgFik2MWhmQf9TP5aL6H3Aztr6zdJM",
  "key32": "EEpbCEq1AkUMgLcbYUok9b1GJHi2gVXuoqNEhq3wYd6nD4AbDVKCPAXR1VzpQoufMtUmnMx9gBtpvKQ4Mtvm61r",
  "key33": "4W4Q1VM4j3qoLEi7ZjD2tRJKNvfxhEP9Cw7Q9WEmHMoppp5rRpRtRV4RyZFLZqGp3ek6A74CRCZZuPeu2j5AuRDx",
  "key34": "2rn2D5mcdWTuEUxw7r5VwxtQmwvGkbvyzqDkpfakW8piYxhF2AK5ygowtCMWygZNRPy7UwtsYWz6gAu2k5rWy3Go",
  "key35": "41KU34U7zYDCVdyZtKppiQABG3YLMHP5UAbP4EgRpyG1H8fgk9NuizfWFoJZvnkBp3wdutHcWoXaihDFo75QUS62",
  "key36": "2Db6ZPB3CKA3dVxkidFcQjxLUwvkFGmdiahqZL5ZSWM9LPzA6hpHRXPtBHYAmYiUFuppHpxNFM32fj7YCL9oQ3ej",
  "key37": "4rKYREeJn6q382taU1B7sTWKhqeV4fXAjkHBa5P6NGkRgJqkJWvCjoWRac4FLNuoZZEjHGAzb5BoLKB5eEoiG36r",
  "key38": "4LGeEVLwUqB6Ft8mmVqX5RAZ6XBra7cR2w7u7zPFY6qunSXwHk9FuRxr1XsdvsuP1RGaVEmNC7UaK5v6Uryymeoa",
  "key39": "2DrB9GiphCupAMke582Fd2ECrFuoRv54yYNnYaW697edzh1ngWavzeFAajDqYjVhxq5Toatjono56kSgK8jBJGzM",
  "key40": "3Q1Ry8YvxgemMnYV6dsNksa1yhQgPyonry4c44LkUTm5uDbP3jM15f1jfjSh3fWZvJP1WiDvqx1t42KgZKetRkY2",
  "key41": "62WNvvtb2g9pm18D1J9HQhv4TjTqP6DVKD8J5sPr8QjwC45XDhgVVJ5N6CNdc2d8KJtBzZ61mQELwMxfK4nymDUj",
  "key42": "4AUBVAU89WmrzmdrE5hT1jnm6sX3Aj435uQrPp1ZzizTW51GrELuCH59eo61cU2PyXNH9UKM2EZ4mCLTW6V6HNcG",
  "key43": "3RQf2jRSDDxC75HAcw6qkab1iwqF5Dro9cLRnVPg2SaFwBuUXdsFZmBosVDPiC7SX4HC9W6J4ZAqhn8ysXPRmket",
  "key44": "5xmosZKkghsnGQRembzTDKjkekAuxMWZoCqPVqB6KNZpZhyQ98P3WrY5n2d6GEn8NXFYup1BDcLirxC6vHYaRH2o"
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
