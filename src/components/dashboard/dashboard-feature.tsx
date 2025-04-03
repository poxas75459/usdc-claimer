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
    "4f9PAsQfUagjVP2HY8F2Mk5juHpnm9XF7TaaJBRRvAjXspzqZgu8THoUfMfDNSLzRqW3Gxxm8Lnn8o3fU6eTeZJE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35jXzCyXFQViyTRsqwDo3rxZGovKqF6FHZ5VFoXD1AVb9Susj7PryScrTj1TzWXb2SMH98VzLZsCfrtFJyLkZA7U",
  "key1": "2c8wQtquDgJJcCnzZWMfaQkNSFYCLb4vTmPvCHMPLkCLSBNx7Eh5ZVjKEWSHaz2jQxj8hK53LtgPv1we9dHcy6GN",
  "key2": "3WVdeErRZsAeL6Mxb6QUhkMV1XPUSeed6FrKvUgJcsfkTzY2mC5Mcrb2KvQJWk14EHVVDDkemHiAUHVmyy1WzJbX",
  "key3": "52BrgPQXKqyPcak2xRHogTyxqYsi6MMTtYeEonS2JD1DDgeVCv1sfMiPjBkF9HvTLgD3PVLMCvN5zmqcVNUTgtPM",
  "key4": "bPE5uTQ3oWeYNZjGXeckCaALizUeEdZGaadS8Fouu158vm5DdpJuYoy6xnQxqdFqB61Qy928SN1QhUqEFgE7Z11",
  "key5": "2jA2wZtvPhDa1f1rgoRW9s7s98TZrfoATqA5QFaskqFeDYLjwq88U9qkA9y5Efn1dguynKQ9zzji8zpKNfPJhZha",
  "key6": "3pGgLeNEVg77aaDAKxJshJ6ZERTevn7SVLgD96z35DRJ2RuzNdygZU3iFmY8xRCjgwJpGRV7dYxZPGoW2eJjECRX",
  "key7": "3FV1CwFa7bSDFrxEZPHK4Lr7NmxFx1g9qjry1QXywCAwPopNagWNSyBTY1J4Xb3vJq1RcSKekLZzYPqT6pJutnxS",
  "key8": "3t4ACQQDnToiQSqKcwmEht5ZkpfP3pSHSnLvXTDenmregByee8kQiwQeEq3rZTmhN3U5KiDzdwhRiaDRdn8c8kSW",
  "key9": "4aHRSJSB33316it8TkK7LkLLnYSSUToz4Wd142pjqdSFUoVaLau8XCb2ye5jAHFixBKWYzXdYZdi2Mc8rj7KFskG",
  "key10": "3ifHwKAK8QfudS1UNgvzKTYcNiwbsPt1619BJfJqTdPt16KkCG9bQXfLN81vumcWvJSR1vXfb6v3xM5f9LStDLGb",
  "key11": "pyts83q8opPsuZ5YE9oikdmbPfUP42hp7TquoaFDL35jSJneSQdbk56EgQ6HT1aixgZ915J6boS6JvRZRCJ2wEp",
  "key12": "4ay1FnA5RGxaC7bBQ1gVpshcTJDRcuGjQ8vABJ1UAzfHgzfmsj65KMqPL2FhsmqQRtcm2fixuU5jTrPUPyaVCeXE",
  "key13": "67B5srpH3ZEQ9cSrxhtyi2inWcnxV5igSEvPw62Dsg2dKy5kWNpTSTw1ZDfWz1wW2CNLVUBoVNUiTPBDGmwg1Bt4",
  "key14": "4BnPKAUcqQasaJ61muP3fNcscVHLGUVHa57RWpsqGXga6BLUkW4QJxQ3w14M5EkxK3HmsPGxs2oRtGLNhb8QzuxE",
  "key15": "4tQebEmqjb9ZT29CJgArytCGDEZ9ptVSts9xV8p9MATK3WNVvooZTJb5B8wN4KJ5CfSnsiUGoBGiaURvk7NzYNVW",
  "key16": "3r8CQV87HTNQvQJVzEfuegSEXWyauBznpBfJBniPu9rUJVkXpwFfwopDwSZjZdpCa6ThTyqRtXat7XYidiDyEr6d",
  "key17": "ZnRiTotnopFEQoQ7wbkbQQBRKrH4aY1Bv3m2dTgSQj4YYUbw8uNMvboH3xRfNmCoSsU3fpoZkQqWjN5BeqkERFi",
  "key18": "4zCeGZe2waXRw5LJHB48vrXhTpvZdS5pvgQ73rTrRcKhwyrZfW2XJn8tyKw8QhsDM31pPD8bNpvGPu8Jt2BvNe19",
  "key19": "3aQGwF1UFLfQzV6viSnw5oCuLvLL2DN17uyhLwS3ygFdq2tvf58mpuXCHCteouzyUV7j1rbkuXLm6NpdMehHZixY",
  "key20": "4weqNCMixGKJ843cnJaXQM2w6dwriqZ68ioWvryoAxkSyPaLe89bdtYWq7xLmPsTGCPSFoonCMTQaaxRMfoHWdw2",
  "key21": "BgmNfr8MRVTpoy3jpdK6yGKHsquAg36BATy4GUJsZiPYFYBBL5seSvrrvwKWXbHa71UvhfASChSXtgPTyZkYeao",
  "key22": "26eKNxAAifNdqvtAxmAc5NizKdcHbsensTUQsNdD2L2ErRxvPJwRtdEPGDDL66W57sqRZRaDx4WNDNWAzhcKpRbW",
  "key23": "3WX98J7Ps7setW5tTdf7D3orpUrUDjMgn4aUaY3mqf3s47foiKsEbkdsr2JdjsFT47HM6U4PMoAWz6Q9X3yKbxaW",
  "key24": "27SWXipKVZdXi16zyyUyk7m2DDTofA9ZMKvhkWnTbvXjr8hXjaoJfqjh3GTwX82vJzuRCcMDu2WXxxpM3u5rw974",
  "key25": "4vQffuVG4KacM8B5c7TPvR54NGJKoSzd4A1drayCRoWAjtJEcJfS3Dh4G4umN1JryLNFBMszkquCTAHMSGQsusGX",
  "key26": "c5akAgSEFLGW1BUcfDxMi9pYHqvSUwFULRZ7ttxFHmCLTmf5N9v1MCwReuAifF7UBHniLayZ1ywD3HHyQkGR4yp",
  "key27": "3JobVjhkSCZSSfWBFRgxuKVWFq4GjqXNvFZRYi55nW9ziRaBEisPsTs2hs8ATc4vdK5yVKEmcKqycrsytkcDqSdZ",
  "key28": "A592W7a6dJwJnbVAFzXqprUyDHSsMxjHJ8XbBvSXN48f63r9Ymm5LYaQjGHkfsgg4hRiAjnDPhG4Wd2vUAaUaCN",
  "key29": "2fZ1pLWSeKAhWyPcFyp1uDtZ8A7dwgpcBdLox5gz11AErq3pLCfK8GK24EjsuUoMiQr6BMjsuKGwKt3DtDHic9xG",
  "key30": "3vAz7tT3LdUnfKtQu6S6BZMvmzrUx8s4H6qNXXr8xBQ2mMxLGNrWy6dbk8Tx3APMAoEaPafB8fT6bJ88AQtyPWXP",
  "key31": "37e34MkX9ig1Lv1S7JJLm4zqchsmLi72FhoXaQ2nf7UMfo54AH3oCtu1DBY5rFRjX2kNXgtH9oaCpMe8nXe1mhi2",
  "key32": "WVRGiuYgjr9qXvxVCQRcdmm6s4fPuTPaLL2ZtKcuLUbyVo5segoP4dPubWgWHDQek22dJvpRA1WzoRAVQ3a4FK6"
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
