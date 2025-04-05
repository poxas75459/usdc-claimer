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
    "3iozVwWKrqEVsBUGAq1xWLuhE2NsJZJSuyLveQe7rBYtwxLN9swVPWh7k6UP6x8CTYijqrw81WG3TskmXtWHuWma"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2XcHW64xfXQZTypcvt4JLWzU2oz14Eexvt6YERiH2W1W57ypuJEUKRGf1g8tZEbkGmmAJMzQHnWd7Pjzm2R8BjDp",
  "key1": "4cTQTabyFhKrcZijqMDTz5hqK4vkZYAhspiaaTUmudqEiKGkf7udA3FzokRTaQinGBCaPZjdeGMnosrEc2YpbB4u",
  "key2": "2AEmf6DDJxL3NotRd3LkzM8yEdehm6g5fnrMAtHqz5xXSd6iLaxRRFaqCHTHUtyD3549hfV8uDQzk2bLmaxhKYmt",
  "key3": "4wjhKVE7ViNShuWnjPRBRd72drJaVvsaNN2UWziFj6sFUFgm4QvMVyA6nHiJrZkiXNhVJQrkSRhQ38NkT3SiBSWf",
  "key4": "3wRY5zNThFcythqoZrV9Jm5A3Ne2oCZJDwxN6BkS8QQWJx5XC5BLpVBAAZb5ruyo4BNyMMMPhJwGAXgE2pbaEmaE",
  "key5": "5nEYaTdukmRfea1hkLKgwwVRyHRU4Cxdd4MN5jdtG5Eu3zHwtqV3ZTQnF4vgHS3AXpjVApaEG1pG9iphWG8JP4vV",
  "key6": "Y6uwEkKvVtvHWVkTnzsUw5x3954oP9TEeKUP2EbDsVBgAD473UbJxWQxoEkYA6Gs8AwUyd9fGRk1TG6J1bANdhi",
  "key7": "3aWijzhAQmAcW2jSftarqa47s1zVwMcj56aDNLUdAtLyaBUfsVEf4rES87WE7sstN2g47xUpGnTuEiXENpNANPh8",
  "key8": "3p3YGRzVz9DMVaL2stv3ieoMwjmRXV98ZVJBmBbazjoP5zXZGXzepdBSsjBn94om4AoK7u14TWFmXF2DGcJgWr8j",
  "key9": "5NFXbLc2XSBmGxwsSKyoW8duzyXSFgLm3i5rDmsdEtidRGZPCvFjqMVhWEtSXrsmvU7eQxuncd5YvWCzxs4PFLYn",
  "key10": "5gE7fC3MnYxmf6xgUVxpAUpYLcEicg3k2C7SpbiGVTjSXxUk2yAGYYdGGBT5Uxehof79nonasFzNSp4JrYy9ZQrZ",
  "key11": "4APKYP8WZsKRjLzrMs1KyghwWGdaJZ3puAhbrY9Y374DugPBMLXB4TWVZC4UeWkY8sHXiQatsJuySSTmgHZ2WFrV",
  "key12": "446N6Zvsg7on2S3fEvtue588Tv4FWwmwRNqSt5VrdDRY8KgpTui7N6DBFEv3S4PgerHeHTREiEyZeUTSjFaYs77V",
  "key13": "smStwS1X7uXazEPxxy2mpturh2L274JsSDUCqQYyBoEMkUpUcaNBPntsiu9A34kAh1tRgEfyzomPcqoG4oiaYMp",
  "key14": "38U8cTSBzFMgXFLHFDPfEQRoj3ggtcRJcJTAkn4nYmxa3fREmD9oZWzxiKWwrjuCyA2daugiW5AZVSGUSH2R38aA",
  "key15": "57x9oMVxjaJRh2vgMy2gxw33WJRJKRfUpxp7sJcM3Gu3pVLNgmxoF9avhnkYpwX5TiQiDyo9Eg5FK9dhA9LVnGdW",
  "key16": "5kbKjMpnM7D7LuUQU7FkVVVegrMCmk2XJc9DeSTDTQZcWDJtDNxoaJJ6aCfQkexQspQnaDJKvFbumh421rz4crAM",
  "key17": "3ywGazTy4DqAqAuA4GuNxndFqp7w1gtvVLDJA4J978crm6AigCr5yesZs124t7jQEbEvwVRJiRRcicxqsHU118WP",
  "key18": "3iVMhbWWThThDGg18nsSddY8mY7vWG7Bg5Tkofjid3X7hTddwU2iLyHfH7JSxyigace9z76L23Xvv1uDM23TgkpQ",
  "key19": "4VHJXMoBVme15WrLLnRDP1erbqi88wZeeV9hhU3mJUHE51GaaBomCnPcdVaEX4Da4ZvhEfq2FRgSXzeLhGAoZxq5",
  "key20": "qk7vkmZk9ejwaastBQhsjqFVkNL6S81RziGRreYrx6LBNeWZz8uoHHaeJfacSGC45Y9JaCTDzZph8NAJ7hxTKVg",
  "key21": "5VCyho6hJBE8tM3sTNPmA92Ao3epBY2pApbKrxXNYnYvZ7yp7SrkSaVZ7ukPsjX1AiJD4uEbrnzHzH7TBVcKLYHb",
  "key22": "63WgA53PEVDHtBnkZzFh5NWPMyH4ThWW18Wqs8WZPGrrH6pHuwQhbWfgTSx5VVdLRkVqPRVxgQ5YjfcTgKo9TtK8",
  "key23": "32H3o3s8ucFzNUvvx8rFoR4KAycZHkyYAwoC1k2jbHV3TxzxuFL2P6jsAidA6Jb2L4pDa2EAptwLGeTKmpyxaKxF",
  "key24": "5Qxzr2HhEi8GHoqAku6qwJBWJWYYisMWZEGLNoAN3n46Aj8d6KjAtUbYmtaY8dmykhsk8QCXXmV4sSGcSV2KPrFo",
  "key25": "5z5eaxRt3fWjwQeRwSbifoLs8iLWG1ad8V2mjh5dYGH5Awt6o6eQbK5W74eJnRtwD9TBxs9wq7938FhFePuSKfXV"
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
