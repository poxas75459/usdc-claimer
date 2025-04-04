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
    "39UN3Vm178VZZYWN17fLBNKPDnzDwXZENXecvf5W9gmmAHn1gjk2pJDUQeSV94dhNmBFMqAAoLAJXBhthg95N2pb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "k7F34qv5zF3unxApFamkDv9Woyie1Hv7HabLyPUimNYuXj7Th2J5Z1k6D2zbcVTMDFrBttb9P6gMyQug5w9NbZk",
  "key1": "9nEXYERd8NNgLmCmyHeZakRDMLjJgMQ93YSdVs2qB2jZ9ecre1KRBtr8m9fw4ADaP3bKBChmWtLRD1wzJbNCPqH",
  "key2": "5dMZjekTL663vAerjy35sgc13zH5VfhssGcbsyp6aBg5W84uTPC7D5TwhT5V9mb9ZT77yBwPkngB6zg9wFYjGSmY",
  "key3": "34uZGLmk1LZr2JLcWtfEixmZ2mbRXW47fJYojdnqLgctaGWXDtVrCbg2R723nenMpyuik58LPweYxruixhUR4eJH",
  "key4": "2oqNRvXK8rwvyFkSYRBnWbuFd1WmYnhP8c47yzspjW7rG6rRhYdFaz86LYgM9eLsLBjQW1mbw3SDPg8cSPwpxNgq",
  "key5": "4fbh9VryQ6asUi5rKkv1ifzKzXZm8fmn6f56S5yaLN1ByJDdbyeKFfi125b4TJb1VnxWSiPVtGbLHrPB1cpsQ39i",
  "key6": "61RunpsNkQmqAMnKdfU2FniKuDLXV2JDrKH4kGwM2WREeUtm3XEFU4UU8D4gqN4x58upSmS11dPTAaAt85s3DYJy",
  "key7": "3c8496n7fBkzcoQDRsFb5GJzkbNWSHEZqNuwjsDzwpEn9jStw9UyjpjuBeP9Z318vwbe97Wdwtwv551svD5kbgDK",
  "key8": "W6mUZHXYrBj4HemFDsheQtLNGTQweY9fHSE3XfiUVp5T9gq1Z4ZWBrRQA5HARDj68oijjKmugLcd47nxPbepcA5",
  "key9": "3LxC7DNj21MP42E33GCUqZj4BLsiB7MJChNNvukqGZrCeVUUm1DtgEMJ97i7kU97kMZR2MNHPKoFBT5E2fCas64w",
  "key10": "4uJtVxDza9Coi5si1QQHZ6xCK4VhpuVRaKnnqKKWbvnhsfdToZiTGifiz8ercYc9zVDNgycJRpB93mBtbKqu3PYi",
  "key11": "PUN2cRHwNUBtyehYfmPu6JTocQmKghHr18Ay7odwT3qJ34gEueU5ZTzsXExq63o2w758AA7e2ZEPG7nddDXxv2X",
  "key12": "2QK6MxnbhXFgtxFj3cXEWaQ3bhUFNUe5PxQMeh7dWmQXFfvGdrpReqaVBABg3nq5kKVchULpAX78HNtaDpmgJ5Rt",
  "key13": "56dNboDA42Arcba16S5qG59s4ZjSBRsMs7NQeqJed9v3JH2CRHCnYKG4dsk5XLAJTtAihazh1zzLH7Tyj1gUk323",
  "key14": "471KZUKsLtfidAyv1HDmfNKw2caoHBooXiUsKWRTp7ZbYZNemGxGPqnbvrBr1d8mAVzmL63qd2PFUFCaZjjQb8Es",
  "key15": "cKv6Rhrx938HgqEDnYgDvtFrESDYy6LCudLVVmde5ZBeY5jURHJc5uPWcjfbVpEJKJz6RgA1mKs4YWYPUvDnR6H",
  "key16": "46gop9PGHhxX3n1i9mWDCJxRbav8TMG5xNeQyv7whs47woMaiLgbD8j6zgvDLtUhGsQThzNk7qXQo1tRiT2UQgm",
  "key17": "XWWLTDfvTb7VZQQskH9CAH6uZpEFq2fZu4LDwzMVQhkqPFNWbUyGpKMiVpj26qrQRr7uRKZuAJYnmvJz4jeEY1m",
  "key18": "4zZftbvrffSvpsXNyBBCWU83cUtzZCKbFrBwWE7mkEaq9jRLTWrPBF4mduaNK3u17Bop1eJBCWxuVdcjfwk3Pki8",
  "key19": "3KfwC8kNysaxhTVANCAxkWWuZRh2HRz1FjisjUEPZ6HuSKi2MEUbrUEMn3NNQzbYRnQkTS8zdNf75zhfXTqzUhjA",
  "key20": "xu1cFSr1PV6H1gF1CvVL6h4kXHujPQyGdhcrkyvrEHdSB9UPR1GW27U7p7ox6UMFbEZ7GgxN5WG1Pd6cFBbhHMT",
  "key21": "jL8KahiMZEsjxrCD4YFx1LjrGE5xCwRfvuXK8XRPfXf7mhmGaTizUBRjQe3sjaCm8tP7WSmC2jSRHsUXwfo1yvo",
  "key22": "3TNdRuHhMnTjfHKemCR6VKLvCK4KtSavZ9P9FUds3MfJXRQs5y6MrUQVnM89Kouu7q6T2jVodLyDjGhsAzATpBrJ",
  "key23": "43p9BqSjjJLum5YcqLo39YJKts79dNqkP8D8kWBUET2F7oU3YASscHwzENiz5VWQv6kHAfcRvz7PE6MBj38gE51R",
  "key24": "Nt4FJiao7c5cB3Sq9HxHp3yPhTJqEFwL2Ndbt1jkC7i8KUcqcKXNQKVZwWjSZirxbawPtWR4GCorxZpPMmuZmuc",
  "key25": "3xmJKs1d9dHEy2WNRUKi27ZyyWFxoLZhaWY37tTSwRaAeZrsvRt7rCFDDQHHtmG1Zmei56dGbXmts1RjbCBbQcvA",
  "key26": "3fD3wjDZ38VwetetSunnE6jxuyvLwmk9wWKsU9nYzQ1wXNWqzNn7WwuoM5wE5VsfQoRyY8Ky3qWLVWaVp6KdFaHv",
  "key27": "2DGhyGe6zhqVMsndoPeUKFEoeMNamnkomYwQzAuDdY5aB1hVthnmuTDkTir9BxKVVpghbfFpKEAmhne262vtkMQo",
  "key28": "YuXSys82R982w1bpx79wmuB3MG7Znv94DNse4DoRNUTxWdDPckqKxCgVPTKVtfaRKiEiq7zACMbcb4ek47f5253",
  "key29": "4FtqQvCF82dDQrfVcj2uca4PSpt5onghFv2o25J893aTrm266Tj7T16m2r64ut9ZswJENXaJcTVR2i6jCXsRyjRA",
  "key30": "2LADguoUrpxWXjaq2SHtrR5WykGtGuiriwZWPtFmxrFFHnq4EST2VnRLBWSL9HLL9XMRiyDQJL35uTq58kQG5Dex",
  "key31": "2Y4PbaAnxv1H4TbygrvmoxHQ9xZww931gTdq6eibdoLAHHds4Yx2ydtigLctzF9s6modtwqgxMJBFppfZ3UV5876"
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
