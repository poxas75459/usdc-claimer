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
    "4Gd3RLjsV3ENJ2R5jHX4W9tE5yuNZ6qBhJfTAnHbE2cvu3N7U9mL1xoNUq3yQYCyYjS7d7gr1w2x96RtmXHzegEY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2QM23iCDWWEwXTauqppihb3k2uG8CYDTDKwbW6mjZ33VJhPmk3mN8eBHsQ4HbxErB4FYRZDrd27Yzcnj1b4Jqb8v",
  "key1": "5XoUQQksMD87vyW2bDySpHjoXq4m78BEvgcbL6ndddDQPE23cLNp4QdWNcsq4X8U64NDM6Jt8LdnbiTAW48KBjHW",
  "key2": "2ArexqRtncCZQFpWKCuEn88p6sUZ9a3cHeLoQjoezWK4KNW6eCt7HAh2rHXSGaohvNByNkochWEmPVnK31xu6D8C",
  "key3": "bRHvZ6gTkcU8rjgcjC4Vc4osp5n7WkUx5Z1Tv2qaDJKVnh863pduxP94Ay2WURuP3QijsAkvCva6qpZ6z4qxLd9",
  "key4": "3Jfq6jRsGiRGNADg4wrbgjHGKcd8Yd9Ngwdb4RsxDPTrnCqzQCrvs4eJy1tiqfE9qni5YbCUdSv2WT7zygiNs1zH",
  "key5": "2gjifL1of5Ta3NZL8n8CfgxjfpZ53U6pfzD78BgjK5AHRmt8wMd1wc4nPEQvggLrzDJGzw7Rkc9aXLC3jyKVL92",
  "key6": "5t84WerkrJyJST2UFaAdpM8GadNbTrqymwsSnEABNmfWBdPJamxRUtzAYPoWegCcewbASufRHiAV8mUCsHkXxuqj",
  "key7": "N4tcQW9Pu6Y2gU6HsrDZDwWdhHonyC8KEbSDX9xxyGXAb5x1gPDWiRPXJJSwxuv5m2E3BvFYySmi281k3dHLEsY",
  "key8": "3R21BL9eDBhArEoBuXyuXLEUsTshMLtxKYh8DASQiEaRTGCyWe4mhwoieuFh5ngxjZpck4YKQcAcZonUwmQ2rWK5",
  "key9": "2FdLiqGknrFbeJWTqzXLb5K8VjwZtPGaUQ1dcx3qy9C6iHb6JXpPnHQLekdXeGr251ZEXo9YrbJiwbb66UkK72TC",
  "key10": "2DHzTNMJBc43KZmxzzK71MSLq7KwT2Qv7LdDv3B8WzcZkDiKfUBDPGdcFSKobz6frRWskVk8qavTfB4BELmKPYpU",
  "key11": "34qtCw3Pys8NqpV7CdcEAQRfiRRsDMwMxS6qhFLvQbQ99SdMUBTFL64GrMBBrT2tKAMNdDJJqPmqzuGVVq9MCaBH",
  "key12": "4Yub5Vp9jgek8ietHt7RUmX4k1QPMeknCQVVVrjkErnV1QqLhXvjDozWZDoRT2cJ7WLHPnvGadBup1m7Y81yFTaa",
  "key13": "2KkrcHW9m4sC7UfX9kkXUYe6aR1kT7E93vExJwMHvxVLcNzpU4dUU4H6CJ2cuJ2UcXbT6foAxQPSfubSJ6jhXYvi",
  "key14": "5yhEHkRn7oRX6bytr8phCZ8JiPinknNKwsC177JykHYM6V1gRY3xof3mGcHXsHd9TXhBHSVVmSTS8d2wUbiZZSUs",
  "key15": "2g6keDZu3mBEJj8zCxBKh4bn8NaSidJGM1rvVreYHK5s3bqNoTgkKJkuAczUEnYpmL4mJYbRhbW2YtG95Z9hey9T",
  "key16": "5GpiRQHQx5dpBd1pbmbjrDWDMffCsJG8bweyrhoDKfSf7wkBT5bUjEzrV8w6ZoF6PYiGb3ZGtKseUZUW5vgxUWnr",
  "key17": "3iYWBTw9emfgDQmjHGoooWHHjNoB8TeGoud3u1MRxYaWS2RNAiLoo8UJi1gFfrrvYPgSnjWfSzo5svvtnBLtQFdT",
  "key18": "5dSmfMMJAdwXfBb8TzurN15zApu9HRXAD95e9eaxmzkPCteWHYgtLsVFwAPbmPPEan3zupG1ZiiniYKyeMUzMD8s",
  "key19": "27YAsPQHa5SWtXiciUoP7vfZoWG2EjM2MjuWmdxA2GkoqbakzztTuLdMMtBtizf4nwkCYAU4UmLTGDEg7CiQ6dh5",
  "key20": "4eEp1mmYCrjGqsb8XTUWeMY2xoC2XXZ8R9MAbbTThNQ1RtMPtByJF5MkPXi3MYL1a8KnqbCrYZS5B178j8GrppN",
  "key21": "4r5sWkKeXrGwB6V4MSc5x69R8hAutZ72NKDnfop2p58tPmkNP24qjAiwrWFFirqYH4LVEXhggAnVtFAToJBh9JC7",
  "key22": "2DnmVq8sGLjjsYX66ANyBziT3N2UXStTXGdMSBxTsDniQLS5Mq6X3qGDWh2d8aZxwrLgYjwFpM5N5WrxukKRX8jS",
  "key23": "3fzCAzAcsjFmsBrE2v3vUHe4GhBsnojp2Ty3WahBZpSCB6n2t7eYGUHGmpfYauAk8fHKaMuHMezAJzT5x7Bf6iuk",
  "key24": "L8Mx1wLGxKuNo7DQikAcocFVZnJayQweUEoXh8qHHKxgnTJpdvLZP7U3ZnefyzsiSqtBiff6KW9MbtnqPrAWKkm",
  "key25": "2uG8DktJXmn8oRkEj9R1yAYN9XDrGqsoe19vDjZBoo4au1K6UaedU45Qk4ChbSw7aEuUXcZkVF188xzd9yxh9f8L",
  "key26": "2sYfFd13ZQ9hLoyMNoSMpSfQcb6NeXgTcCQtxYdYhYu4mvrGiATG9LFx2H8Gfa4vG3Py1FGM4GnEmwuycBZ2VfR3",
  "key27": "3QqXY1fYZrBXfHjer1SuJouo1vzSSDX7NS8EwyrxrLJDVtHvagdBLV6gR3Fn858KDHda1xASg8NPn7pyGcYgcrW7",
  "key28": "4gcqYTppzsvwAWuAAJDf53zuimKseNx2V1TKSiaWKgZqxE2EkMhF2Vq8jvMuJNWi278b8aWjyK3FTEGhrDdFAbae",
  "key29": "36Gvn1NEC1g8NVggKDpx1pbVqszm4PNcKa5Q5weyDCsNHbnxisyR9EXKXiDz9YQEPDhWzH1KB3X4gTwPpFghwD4h",
  "key30": "4hTRRj8wc9gz7emJkPJv49QrKyv4WECxXquG62qdYRLhgqSpWDCoyVdoUErExd3cSznV2naeQwqkUT2C6X66e9Gy",
  "key31": "3FpaJzTngqDMVsaQyFdHF2vFktZf8F2uDgE7Vv1YGPjMYijgXUeyoHfpG7Yum12RAV62NrNKHDZGaHERPQ3jAfGR",
  "key32": "5jGqKmsxzM8rgfAEKNKULcD8zmvVxGM6ybZW1Rdudx63ATh1zNyzjFagKcqdVvAm81biqNLRiMfSbSanfBXuY3yN",
  "key33": "2dN8mWBdAdrvSstvFBaLB7p4bfCvRdAyEdjH4XFtUFujtTXvzRWLhrnkL5pM9aL2eKfr2rKYQAYUFXnw4aHHdJQ5",
  "key34": "4nrGRMge5MhPf4ZyXhVnKKBmMAQSnnPY3RMtJFkvcaEZ3QkPtLJRegcc1qH122mwQLiNMo5AHt3VCbAE1TyGnNTE",
  "key35": "2iFfQyQV5nUmG8ej6Ls58xVpED2ZXFPm12MR1SUBSytRQmFYBCCUa6a92tKggQYMKQWkQiNPnw6xjPSr771yoqdA",
  "key36": "2rCUTov8acTHs9XPGBHrjgreYgB7sw8gortHkQ2j5Tcx4ThgYprT9GAd66LjJJyj2t4K2cweTXXU5BrGwrcFnqhx",
  "key37": "67FXLmdHFGSekvFyDZ6gmQz5fuFJMiPk5PZPAxp7n5QmdrxhqFgZhh6tNd6zyt6B64bt6B2NFjThuSmpo3ukad4r",
  "key38": "sidNe63qFcZnGsRxBXFtUNAmfjBbugGcmY79n6KoymffeBTNeCvUb4D1JqugrF7wfAjv7Z54uEqvSpvYazKXmEn",
  "key39": "4Fcc4MrSWtLVf8UV7nA2A1mfpbxZQ6AWHhGZNknJdD4cmSY3MuRLfk4nv4rZ45GZcCBjnV3G1Jac4Wa2rSStb2Ue",
  "key40": "5HjWpXEd2m7GyVzxbSHSoAzSfYafKkAKAY8ZYwjBhXkgEA1vR3EhfaPiZV9A1bdUAwCNYYKSnJFxJo3LW8wqcT1",
  "key41": "3KdwXxCR4pBtdyDRKPgAKKiSNsPHMjeM5R7TfwfG3ER3uDT1yVXWr5PATGrApqNdmbkxGmt6NHdrV3sKsKcTjGJx"
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
