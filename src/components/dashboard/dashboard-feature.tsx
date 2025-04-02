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
    "53kPq3LSAxV85QbunSSchUUHCBacfFBxw8QhXne3m7Wy89FBKVgzyyi953ostoxecxRkoDvbqEwHX9U6kCSRHqXg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "fh8QdVbgyh7FSPphJhUtX7vMvJJAKGhFTWX35M2XYzpc1gx3SL87yQiQ7Hi7tByhgdZtM6Rfn929kUpNuetAwN3",
  "key1": "2tTqfSV1yDvxCoP4qZ1edbTY7aSGpP2Eh2xi77AhUaYVPFkRLkMfYQyfpGdqgKdPd7kdR8irXJZJMc9R7pqd4SdQ",
  "key2": "yvZJiQ86PG5k47bFKyvtwp7qBBcbgkArbihnb5Gp2nbqZDQ4peKbXCkFUM4Ne1o1nX8D4CzAsFWPdVFgjZ1tMjB",
  "key3": "5RskGLb2CxKribKG4D9wTLL9wDtTSm3bR57CJUTGsLtx2PQ9SR62t3HyScvLiAwhjtfCbpWZVf89Qui3gv3dwi1G",
  "key4": "5kXUStuUPzSsdTwPuFZ6VKoDu2xbiTkkWiYjtT6WA89NCX98NtyV35Q8PiXBpmVWwrgYEqxXJ1CC9pyVw9amLv2r",
  "key5": "5YTYksbVwvcFFHBuiByms1y9mGBT5icHAYvu53CG3XZVBbDRFFkrTvmDn1MMYxBVyrUF8agAeA7ofsHiR4LLjD3j",
  "key6": "4PXy25HixwtgqP1wEisrVNPfHyEkYCZxfvERKUmFCQXesRHtMEv9RckbqrRZn7Vz1gGk3idFtU8nbkoWQRqwFLUj",
  "key7": "yCPygqMHkwFZbEXH7UkZoq6MVPsEuWTdMTZ836wjR68AZmM6YGgDBTAy8csA5r9ruR5ATo94Mzmuij4jSzd8Rjt",
  "key8": "2PxM2LkkEAStuH5QSmZd9Hs1BqQXbbzfH7qzfqhnPP21ACizqpvjDHTZo5rst9bxGRDmwPDTTVnQSiYDdMR5WSdf",
  "key9": "3FGwdvkxhu8hWWx8khv9StqA25wmUKb89FQSFCaMBVEB1NsfwiT8JnJPmGvPydiqVyQqyqAtpFRfxuzRJMdzJVg1",
  "key10": "3mnuiQEZQvctzzpghg3UpWeYoXt3wZeconxfMRbxUSuSKfMqLYkZ4tax3SyTJcKmkexNVtYrCdSvXePrrooPtZnx",
  "key11": "3Qi8fSzs4oFis1zboGXrcisKYC3yBtFNVgu9Th9PPB5XyiU1nrXSpC9Pp4kmz7VmebnRKbx6yhFnZv9bgDSfKwmu",
  "key12": "2bhuYDtp2B93V1EWx655v3o5fFwSmgbs8Nq33RkUBsS7YvxWWjQXqnzxMt9eRCoc8PSAd7bb9eR4G8VV4DGqfT8t",
  "key13": "HarRvwzfAX46LSnStVXjSio2mtUvuiHcmgW2zxpkcy4rwtGqSGwszMiJdJr6G2DATtcuHEUiNNSNdf714LRYeKT",
  "key14": "61VweK7DsiWakUuGe2Eqzsff8FHZ2TSRArLnbH7SDxeJUPQfbP9qGWR1vxhG3qdGchKtGyfHLd3Ypse6tBcPm3dv",
  "key15": "5C2xvX2N9U23ER7R16BqERhfu3VF9erkMUnmhs4BGTRY2k1MMx3wNj31jDWTqN8s7ryxPN9mAzApwo6yqpY9LNpW",
  "key16": "44FfcvYfZh6WNmKaLvs5yh9AXMqS9aNuWAiTLxtGRD5WJ8u3pxqtvbGdY8yLdMb1oie8zP3phmZE4or82nVBKRcy",
  "key17": "3Y4T97Xkv6T1bhNpsYxz57KeHs7Tw5xsjQQyMzjKmc7SaLNgFryBK9p9dfbZwXnq98xzfbER65ZkCytGxzHEkWvv",
  "key18": "33ZGmBJFyy4S38XNUVWr7aY8nbqUWYyddB5tnaqsHqWHriLKMsW4opCXjPZR2eRLFtpNwDR6HmHDTxZc43oKm7TW",
  "key19": "4vdCYrejKXEBihsvVnqiTuxPWtGRzRhj2jrWvAHWhdQMwVbfL7ftSdhnRDUTfCMoxkEo1bMBZkSuEMSfvk6vccbx",
  "key20": "4dX2iRxxNVqRtWECrPGexSEfNZuKZJCKMrBMguMudQRQCxfATCfgSitBvY7kWskxrkaAzgF3e44EHC8v7b27XK69",
  "key21": "5AbXErFCakDjQuQLW5dQDGd22Bmt82tTo9UWhdd5ThzFt8vxtj7fvQK42wCCpxFTMHm4kGwiZHrxYsXmvsbckw2j",
  "key22": "3VuvNYx7kjwZz6Qe43TbtukbFu3ipLeyz7aRrqJX8H5W8oJwN3bg1vN3mp7hVSY5C66Fi6SyiBSe68k8Z35TFkSB",
  "key23": "4gcryKp2dZuuHeZWdBo7Hb6PVrSzYnNBdAuwoJs4SiFq9goT3pw8R8ofCy8rR6YGCGBdRHHBQxztZLyY2qxcxYBB",
  "key24": "3mjnYSYAafVU4eQ5sS7xS3CM26WGi4UBtyq4cQjtmGeb9Vpk1yf4N5HTgkNbMDy2TW6s4x9fP18A3v5YbwrhHNp2",
  "key25": "55Pa6xRYRd9ekg7vUWB5rdFmqsuDTwHB4mQDhzvuuv2Cmxm2GYxm4XubwhfgfZbjsBaje2jQsp1VHusZJMjatobd",
  "key26": "1qFM5L8zhkLneb8RYZm7cMo43CLuMEtLCbxNVGN9TPSk8BkL1G7efcQ4LQuCpnh74cwhfcL5YuwNNjqE99KBVQC",
  "key27": "3HP4mcQQJu8KXMNXZHPvQ9bHaPJfe8WP44AY2yzHM6cfWKdB1kvrMAM72PikmNpZ4Jqr7KnVmG7sqvJrvoWyL9As",
  "key28": "4Z9FdVAwv2CkxLCLrMPENyx2cgQuCxQTuxwPZR2kUB1gYBsYw3HnD5bVJ2w2ivwz3Mhy12UBYv2iQxGPk41EPeEr",
  "key29": "3s22GqzhjwWpk1zfFoKTwEyHcxCrfSJxtQm1B92GHgNzTwTFkUF8HY8RWt1Q7B2WxdL7pFMwvBWeoX7oyF6Zti2C",
  "key30": "8L3zMTVMCtkZaKdWAYPcm7d2g3Ajc94YuR241GK19EFne3A3V8MviznNHHRKb9Gs8DZnPFBZnoMz7FgjQhBD2W1",
  "key31": "4Ro77Qn4YzH58WE1VjFyHEwduE566zX4XKY9hGMjPFaKjewWSQicex8LZpsUswwQckMKRDo1DYBgNNXSx1qJhst7",
  "key32": "PpwhnKi4xbHyDUb4GNHzbJ2Lcix54f7sjopt6KDASMKHZVi2fro3Mx5bQTzw27xdb3zKYhUmrRVF7tFTiXpY8ry",
  "key33": "3fCNJRogiVmJCVQ9SQxdMiNM9Nb2eS4VeJAcNBwApFTSM8PPR5dobMLsJBP7MARfg3cJhKnbJTxzbRrV7t3HbjhF",
  "key34": "4Wdaf2gQ1EUXArA4jqxDqAbZKLCzSUNfXY19sBcKr318mcgWTUo9S9uJGhBQyjKUMxP68TBhznd3xGcKCjxqQCi9",
  "key35": "UtUDhmoYCvZNkTtXZXPmN4vceaM61ivrgpf2ECkNZ3j3ZhrPMJJWrfgfxDbeG2e86YGoHcEjMs3yHpHPLPPCB9i",
  "key36": "4eCx6vBYL1GZZnePQnvYHFKyb4jY6BUybBveeBA19S87wKUiAi6RbRUmYvFjJUiMRQGw53JWQ3mWkEd7Lj4XGPgD",
  "key37": "4XGmTX3cvKyNBaDzJvPmW4S621GCEPtp4rUgVT4nS215V3FMsguvmkuFdfNiViFeo2GyZwHiuVDYgB4YFAuY16Ys",
  "key38": "5UPBaMe3ZUFQ6c9CVnDf4Vfao22TKFyDeBShTYPbh7iaeSGveiR9i8NtdLKyNorTnorqPqGPXQbJUX9WM13kRVpc"
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
