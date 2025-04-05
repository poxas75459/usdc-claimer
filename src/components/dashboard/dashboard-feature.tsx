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
    "4EfUFiyafqnc3tGtwuEmTBw7f71w9z7brHdnxDYvfk1VJjqCpcQdq7eFMeKddL9pY2eYZmHvGumrNt5eh4AAQx35"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5R3yg1MfrFYseZzFPPQnWcNz6cRsc3jP1wA6p6NRFiJB4BNa6jFxGHXY4MmyjMvguqqaK7HxyqTJs8AV9KgcSqV7",
  "key1": "621JGNFYJFJQ5hVunLtRbQsD7mLYr6V3joqXHenjBqSaNn34uSV4aBbMdFn5bsA9oqguxqJgT2XtJfkwagB693CM",
  "key2": "4KSwRP9fwcskVksMMVwj49Vx7vnDxF2E2ugUDviE26S6Swz5fyz8qHdgqGruDkmhnkVajaabGiUtnUn6thhHzTYM",
  "key3": "yPQCSKCpixLeURz4oc54aFtc3mFzv9nnNtudYfMN4CfK9DWQcdW3Ni245FoNKvVRqEnZ8NTCtCq4GHoE9KhuiPz",
  "key4": "3cHmVgnT61GrX1JWNzzs3XQENLFvtGf6WS16N5hWFG8qxDX7sKxs3np6vdcuzBTz8gdRJRfqNXHUsr18Pmvw6neF",
  "key5": "4KXBrdVpwazNDqNeY88HngGf9XFHtdEgWFDSYmNFWkPLbig6YPg2yxzqff5qFqNXFTZsYHichr42y4BqMyvbwfEa",
  "key6": "XhnTa7UcPXXzNfb9RjrfsYUFTDPWmQ6KnyBy9mytBxrjXgi5g6U8HdW17wKiBWc8xNJneg265gT2taeZnFvD49e",
  "key7": "3rTRUbpYpu2YBK2mjt4RHqXPj6MFQo4XZb2iJrJw3Fp3itXkR52AksioV8gJtSK4f2kpAroFXwVFHZFSA1RvFzRG",
  "key8": "5ZDviB8Sow5cTmxhpvXWm7PDjYb2HsrzcUGf94JGRfUQk92DusoQebYdRtbmQthSKmLCCHDHXcGC9V6JZBjsbHG4",
  "key9": "2FGfbwRcFGgj5urVcX87pBqzVnpMCPcTfmY9iBUGcdKMYBUZZhoXwX7Pub9Jf58ZoSjk3vBWdULX4tmxQG264TGS",
  "key10": "3pk3R1g6XuXuvkDFZe6EP1Nfnw5iB8yuoA1GA5yEgLoXfy7AEC9fSFQ1MWCNX6REDwNVBqmCNYXrhw23y1zxQyy4",
  "key11": "3oMhkPadu9VTKHSagCpmgf8sqaT1KnPmYbQgfx55XNmDixGUs6rFywqyv7DZDJYyeyzg2xSsbyYTTm2CVGEXjT34",
  "key12": "6615ken55ccdoSkbzFiT1cdzZzRta2SVHS5FAEmB7yyCrM2jeqzazAtGiLN4NCvDEh8fAqvPq3q7k9wrNo4SYivh",
  "key13": "iafiyjh6HAkNVpDpHHLj7j63wGbkEGcS3GTNTe9D5NRSoSf5vQawkCXDHn951vvW4mCUkhSCcb7YsirPCjP2PPs",
  "key14": "5cE3jiwyKJ5p8yUtDWqXK7fkWYr3zHyL6m7ZrUk6vm1AVGLRGKFEjeeCsfywJh1QZQCGHtq9r1LWpiFWTR1QPrUB",
  "key15": "4YgpEJMGwnAgRqCBaEXpVU8Tk4v5QZy58hqxmgDHzZ2zqtJkrr2hAUo1A6hvjuHgR4HQtB9CKDBcj64vQwCYN9dC",
  "key16": "3SUVeSHaW6QP2B92nfbMpFDpWrXJ73j85Mt3ZFMmYR5TNnk4gy2dtAyjAP5oEx5BNVtLzNMsmLxp4wHJnxBV4PbG",
  "key17": "5yvBKBXWGtQrVJAKRRp7vyGDqTRqgJvnBzL5gLXLikU547dxekdrkH1ZNPtzGjjJTRGT2hDRwFyK4r7G7sV9sB6i",
  "key18": "5kC8z5Rruao6c6U1pnFaedGythuBKNH8FrstycwBaBeuNCWNLFfqHb9MD2U881bf6Za9SXjtz3F6zHevQEq13z99",
  "key19": "Trorp1vYjjJWZXa5jYDUYwyACnEu3FiZofSedT52gkWMA46STC5hT1UpLkftKwepH2kpC8VtL19QjttePg5QaQm",
  "key20": "QpRGpn2JmVZPPQqopsq1rbvZboTRSKzApoyHGzT5J58BLSUaZ8te8uDgf9u2F1Svmu4tmQYCXeNACVWFkrG3jjK",
  "key21": "HD5p1pKAVCKK5KgdrTjzxwx8PbA4Ag7nz4knuU2kdTmYrCFgtxJwG7Ztm6VbvwUazS6FToqpcj5af9eJBoNkF3c",
  "key22": "4EpHju8tHHJgjJNhyEcR9BiEnLkiTsQrwBEDBbSuvrTA8x8JkaQXs2SpgyXJvjhoTZHZ3mrm2R3ftJqLEXm2LvUJ",
  "key23": "4yfnMxKm8krtdBrpebbDgLyUN3KHiKmKdufcnCkRCaNx3MzhnNX2Qj49LFqbLgtxrFr2n6YWEGaCrp1YzTpuHjGS",
  "key24": "2FWDjMaGvPMRzdxgwDqLH7ozH2R45ny9EXVFYRMgRNCaH2761EHKEzj6WikkZ9LG2qDxd7cj7mNNcW16PBQwxqTY",
  "key25": "3bXVvprZQCrgXicQwJVEuZRNgUDF1d3ivM8pB3eF6wEsrGAkabToE7u8uN4WdGH3mBkYEZ2uPDjZ6z3fCQNjMJ4c",
  "key26": "uFdhsmeeGaP9Kih3AGRvrSgRezJGULH2vRVAJF4qYZVtvVdJFhwU96y96TYrrqduAGueRoEmsXonJAVqNpmSR1E",
  "key27": "2eHaXL1AAgpg5VpiWxdePAxcnGNC6Qvws8972ADyHhLdnnPFPFDMuZFjUHtNzNHfvBw99yJhmn7ZQWkeQGhesZVS",
  "key28": "3FWCT7phYAuyAeYZCE1W7PLFzB2R3iKbBvH1dtG46Rw64Mv5stCb8Dm8pfkNneF7kVCeNaiMdLQJNxCouSveHt8c",
  "key29": "4iuND4dMn53rwifYjxBuyRze2FFkTn2qEQCYBu71RzzVEMPXDcvkyCXGzzZY3mWcx1z7fKNS13xda89EzWAUh1tG",
  "key30": "yLpwwMPGHHNGMwnq2ygsiRH26v6GmUiJuf5SYobEPvsdh3UNiYcCYdJo6L2ATJgZRivfJmk1zQCsQ46LQBPnkwJ",
  "key31": "gBBVDRN6PvepZJmfF7mPTaX6VCreoWZeUWxMcD3HXYxJsDWr921dtQa9faieL8x6oq3fcxzCDP9EuKWmNtEnQ63",
  "key32": "3ozGZPJKrXSLrjjUzRUf7oQekMWfVebBFkTd6FvHHZbbkpCHCaobFjaB19iE6Af4haaZcAbqhDRTWqQKJdpCTk4J",
  "key33": "3dyadnZZr7wWu1YeHKvWaDKaxju3CLM3ku63uXyheqaa1NrEry4GoizTxFNhLod4sT1cwoeCL5bLYp32xGsfdhx6",
  "key34": "Y9LtoiRAgsxKuuv9bJsaFfRMLj8TBqaNWaqL61kWi6zxZvYHH86fMfBfzJ8pgowuatsjJLSMLwcyLuZfcjKXUeM",
  "key35": "5PLXG1Gk8oW3Tr3znQhKzTbrB3RMMh6cwoW6QBictSvidV9h9epsBoLdVWqXpHwqhP9zyGmRpe3bSoxB5xNFPd4C"
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
