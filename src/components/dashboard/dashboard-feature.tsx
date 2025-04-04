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
    "3YcxxKFQXzCJpWaRrimWwGDxMoDhwNZLxbSJPvBgYnDT73qcnEX5msKNuHBE2ft33b4nLytZxsN3pdU2AYCYFvkv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3FQzTGyC1FXLUzj9xVuPz3NcNGdnHoaMo9KLG2n1fN9bofvvtYcv74eCfKX2FkQx6NUVCPEkxmiMQM9PZWcXs87T",
  "key1": "4dz5EpDSMxtq17KHD6Mucf6vHomyzCS3MgvubAJNr3CzZ3EhYA2YHUoUTwyMWwrLndHAfnzzUB561pqLDZz3ghod",
  "key2": "vTMHyUsqYSqVUoVPsdh6PY9vcah1mK85dGS2bsMVTzqNEvTq9AQHr5poJqGzxCnTYVsTKNJ6PnFvyVQLg7iea11",
  "key3": "fHgCEvTRMDnX5Wf76WYovWLPxgubcMHx3zddn94gU2RJZXhJcr1SGkTWQcQ7HAyV7J1C6bDXpEfXu7eKz4v3CiD",
  "key4": "5D7zqKRaKeKzTs45bRNLrLgoUCfgKm1NSy9zDnBLkZ3QY4tTkN2mj8o4fohi2eAuNx3k2UXrNYqrDTdeibwSJKfk",
  "key5": "3dDhjRWT1LKDz8M6N5R8ddQzLCchBwXxbTrfqZ7f38AD2r7gdjiWgiYbxAvhS6ZbRYxD5FTHsfsQKTdnsGUHSPZQ",
  "key6": "38FiejF3YfBGSeusdtdGtLgspb4NHrdeUCbvw1HbqGB3AF5dfPRVTZoQiHLJHCGomxZoCJJvT2ZLxc9kqMs96j5X",
  "key7": "37A4cnEKKo9aHppVdBMNf8R9QcCtcXqG4umyvu3q8B2ifcSFvxHhkymv15XVQoZoVmNDJeCToXDAhegfMnkVgBDY",
  "key8": "VcaMj9ti7M1LRK3R44H4LpXYHSzBggHUFKezvfk3ckHL74kwc8LouxbFhLuC24vHtKuuepUsVPFHRC6ruZxn2Hr",
  "key9": "2883XgFhFE152upTbw4tWfb6P9iyEBj7W8UR2UzJYz3hekaCXKEYeYyRpqTTgD2Kjeir8V6R8bEP4icbasYBeTXq",
  "key10": "4dZ8tUCjqfz6ciGQq4ePdNWcn2TUbJYNpUQAHxvc4NYX53qTesrHRrFbQ9ddhaFcPqhZWPd7FA8yKNMAXGL9MrCJ",
  "key11": "4SvADDn81wQeEiJjLMUpiUH51sd3TPQhZfcfaALFBfco9LsFScjdKSprjZtxDStyZFRs2cg2Tv624DybBLAVqt2V",
  "key12": "2wUK7sk8vBvZe4Fm3tJ9GS4GDDKNSXJVv3Pp7qAEUGaEdc3V1MhUFtk7LGtprDYdtrXt7SD6cb5tNMnSq4j5USr9",
  "key13": "5RVRAKQecp63hkRFsfW2VGanQEsTUvr7JTyvTLunDfRVW2uqtJEXmo43Zk2FCNiF2Quf7XGtCeCEjYrxAdADRG35",
  "key14": "3Cr2kDnnWwb7Mmh3P1d1YvhKopir9TiWAeL6a3m4c2ZnE7nZ3AYy8NbFbCExioUYBupYugL975hmPwThNVLktQZs",
  "key15": "4K4UtZNxcoX4E5FAXv4TuPQu3eaiV1wfkh31pxEvcLPqhibLST6dyQmf4M4sL6omnFBdsDYbtsmMRpgETAUeUxNK",
  "key16": "4N6jNnurWRuSKx5xYRUsG9SNxr199UrbToL2eEWsK5cgQSvvjGoAFyPw6C5GpQh1gfbadESq3v2bq1eYUDimrmV6",
  "key17": "HY6vkTLsT2YQ617Fu4fF22KJLmoetx4yyzFCmP4dZHp1aTxMos8bnd3WzCvrDuMjkYzuhorJ6VZxfATbiD88Q9E",
  "key18": "pRRztDyGFimVrpD3Hox6Cjn75UCoXULMotNMgk7TUH6HSkrCPL38GoN5yByP4pxyt6xKWDheJCBzjq9RKbXAP15",
  "key19": "2oXK5iC8c5hWHE3Vn3iAsT9euPJGDki8mDSP2WyP4XMMQFVbWRaYQfWSGiyb8u3V28Z9D1nrwnbYZh2SDyUDMXJW",
  "key20": "54XDmPY3hNfSjM3mKUZ4bYaYoa3vf22WMEdiaUMXQ8gTupvpLz5tAb5ByERcvRWwGMNpLKzuNkByNoEpd4VkG38i",
  "key21": "t7s1KrbDQndg5dkH6nhunVNR7RX6J4VsLg6K3XnLnCcXaG9sYsiNnD3KKcw24wuuusPeghWiHsVHmTSygJXizdw",
  "key22": "2AbiNrZwDV5Kqe1GHrNRa1JhcjdxPbHwod6peLAoeqoYovW9xmw2ADdLE2qyfawXSGK57S4Ws2oEWR7bYJQsT8nt",
  "key23": "UrcV8W7FeuLhYmRfo5dZ63PBSitsojBL7aJhd6bD5M3yX2S7Lv1U7ezkYhuSwgfZSg8c1pjU3bmdCAGmpYnisfv",
  "key24": "LyF4rWPeaybvEFVQ5VVneid7WawZW4M1aWZqASAYQ7okNJex8BadcuMyargMhNzjDYU8FhgzRGWG7gh1421gnvh",
  "key25": "x9gym7fknRxi5LXQBW3gpgMMNmyAC9GfpTbHWE1JgceiEh6VEe4HxESLNDpMQDQ3LsTfjTnJwUriB3oF6NW5HoC",
  "key26": "2Br61ZbXdftAYEJdN14UapEx9qPUwY9ngbuRNbRgtJiKYECTstaSkxhinBhG5mZkC3FZA57tXBgj2TDiWSf48TXN",
  "key27": "25dTgaxFoatLXVLJbkgqJr89KnXcP4DZd8Ghb9aXB15Rp9Ga8mL8KSRgLmP6zQ7DPFknsH3qBHSUaSG4Zd2L4vSd",
  "key28": "4hXrRMyTboajaPH6EyZpTxxRfdXipdxN3GmQKmfF5G5p6UKSnaRh6HupmnqEWAo9paeeZsapqZ6q5uxeC1MKqb6m"
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
