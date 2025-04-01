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
    "4XoYBXGNGxHV8kSb7L4GG8p1nfijTusXgVfwGEPWmEsFDaPEbufNrE2yFN64hBEitBwF7U62AtqL6qXCCacptm69"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "jooZiMFr48x9ygJMfR3cN5HJZCRHneyVXk1BFS2wdqFbkq8e4hehXBh1LQ8vL7cxpjiTQW5bbxbjoHXT4LCaPkD",
  "key1": "23DCDM64s4LvHrDdpvCe72sHbrz9c6QyzHEwgQrcMmag3u72jKFzeJt1YDtDL2QCR1QmeJMXm3iFziFcG3hhHyLE",
  "key2": "DjRyhtfyGaJBtGiQQMxMZqxjSMzWz9vrPxvaqesW6DujNS8wSi4n9Yecp6gj7Bx6jHnbJC92MjiSvP9XvGur9dF",
  "key3": "434Wn2FMB978jRNCP9XA5F7WSQVBpEDJXMLXxBfmNWQJ6EVGeFHgz9B9ZykKPXeXx6gwg6gRGc6s52mJB45PBynJ",
  "key4": "4AEJUXgSKwBToZLveQur8vYhj6G1Ew2KP5RM1GsU2ozju9CYG4qWn1iBXWbRufpkM8ZeLccJwG36vWaC2ypQCQte",
  "key5": "6186znwnJwpU9zPLxBf2vVcc3iN8pXAZrTiUbHGSC2rKfTGpmAH7RN84iiCCkP4LFp8WkhM2H9ii3fZ3NKpNzBSk",
  "key6": "28bCVb5WgYpiKdNeB2iaMiwnmaCM2vzj5d59Qvkm9uDZv4JzVhXXEddYoq511rXifWrkWEL95SG8ce3o5iJ58L3e",
  "key7": "SZQtWRaXnqwKnC5om78NrTVYW79z4Tf3nnnMb9XrXNaUW5m2YReW1ybMCYbBDhT14qcAj8GehWV4k1ifiU35W6v",
  "key8": "2GcsGxXyntADmegw12qmNzYh5XHbhawJSjXe1Y41nqhWVxf3WQnVFMZVhQHkZxPv6UtkYkLqhCN13UHpVNgwbpod",
  "key9": "3oaZJBEFiqNG3jsrF2GKjarphjgwamu8FwmTTBPC7jUXS57R1ZNtr5qA5RfdtMP2VuzunWyE4opj92FVLSD8dN1D",
  "key10": "4JyztsrR6RB38njeyXQJJz5RvmcsjKmsPFoaSKxyBcGBoUbvVFgLvZVmKby9yp3EdRrRrzA4UMXRuWm7EjL3WH8p",
  "key11": "36F42bLcqfhnkxwY8etyqKp531q9p3GdyRHC3zTVntYsvrtMBiNEzfYoFArinkswbjR43LkwrnkWBrkeG8WP2wrE",
  "key12": "pRNGMdZxy6Aphx5Nvr2X7dijaTmJFAN2o3Z1t6hQYsgYMmayqGPAK3Q8ePNQZq6iWGmNzTDQiQiVeTmL5qYN4M6",
  "key13": "34yS8L3QstLdQowLHHruEa53K3NEUa3gcMFrUz5ELWPMBJk3GgjZ3ULpdCQ3eaiGipKqxAhcWt3vS28v1fRGn5BY",
  "key14": "31A6TvAVG8TytkWvjE8Qoq1acc3LT7Nf9z2EsqE3z1jtKvomMVPwrdQAtjN8TmXJPyQrCBwPiSeZjBdkSJCqmNiM",
  "key15": "21vtSVwJTPZgmjWxqFmx6Ytv7UdoFaDmMtcT6fqDkgHPfUy2MVs3dqvFzokrQmzeWnvHwmaJmdQJsMyEynuYpJbU",
  "key16": "5cFinXmKLSuu6QwX9uebCZbiNWw6miRZCiu6jCwxP1A9rsqNDUKJqhN2SVCeUqP5S5mw1rCtcsw8nQK8vQYbMzNX",
  "key17": "3tYuZGhfPKg11a14xSNQVmamqButxK1vMEra9PwfGHu1EBxEDbDo57Y9CNCiMYJVcurWpPy4eC5QQ3q8c6q1MX9T",
  "key18": "26JthLz71ga2cgu72kYB4F2myLr7XPY1UTe74qq5aeFFgGru5zJBog7KrfXsJynYJYERYfR4qRuE8fLYCAKPHSWU",
  "key19": "xdTHDxyqqic8f8ymYCNquqmKgVuAoDYHuuLCNhnNnhjAHaRdo2N6UEycR2Qaxgzm8sGVpZyZFsJcUBBhhPRLvaH",
  "key20": "5Ad5CinoB1a6xQz8ccrdAkjYaZFgrMXPTMgDcrnpNyNsTY8ayrn3RdkbYgx9ViNnfoh4F6gogigHDt4ETm1z7fAS",
  "key21": "63NdHQ2CSKuc2ejHHskTw5e69CBEQJSm9jH7TMu8FpzwBCPmJJ67Y4MJkCrC3rfQxuj7dkGDHkGxHp6xQ2GEYKAe",
  "key22": "2HNsXPFXkftiioBUyio9SLJXLCPQ6C4AKdEaujEJFoYBU1noKoBj3WunakgrFiS4uRfxV9bq1z37AfySmgNzVGqk",
  "key23": "2DEiNuGKxNDwGwBw5aANSpWpCdeKbxmfjXQEBDNvWXPmWfMPhXmk5VqcgHBptrx2UAmTQeMedJc2eY6w3JaKcj8N",
  "key24": "5DPVq4q2HJjy7xxuWDzZEhwFYBE35e2pAVqRCG5DXcJqajbvZmQvVtagfKhSsfVCUh1rYbYUVzeASEAQRrcGdp3V",
  "key25": "4PRmom6eki3jAimSDhddz2TN45JTwnfvfZNBPT3kqQugb86zev6ifCz3b9GLQAiLLidq2xe5Kk8QC9rA42msb3su",
  "key26": "3tddqahTWuZW66VFFnJHpVmX6jNyuan49US8cdR4qEfY5mCLHdNCnSpXuWkZYoEZHqkuunFWxxhHD2Vghs574djt",
  "key27": "4AV4y82SSJGn7uYmKcVdXscqyT2kiy6wc1qhPhWnGNGxuvSdEQUqv5wSv9sm7LAcDvZ8brkpPtgYNMNMgFnGMBfg",
  "key28": "uGv2QNLQBxTSJHDCYB83NPP4m6TJPMKf9EfnhgfBUZsjKga93jgMfiaJFhCzGyehyG7YmS7ogWEDTM45nr7fJVk",
  "key29": "4P2kye4wpGLfMP2pMLeEGDb3szi2PkRryi3Pb6hMe8ie5k8rQsJEb54iiCxcF3vnYt5gbuJ542LAYHb5ohZutrwG"
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
