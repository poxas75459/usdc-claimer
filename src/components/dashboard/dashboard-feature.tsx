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
    "3Q3aMHD4dAvx6sw5n2BYjTR9jTHmVKJ65dDyUum5heKZGtgadWPBXn7HVp1aqK4QRky9qra1ij2zaFL5AnqFn69E"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3cpRMWR1x82SG2pCUYF8xviyqTguUPALFyUjMYHATYdXpE3VsFmnZqVoUwCYohPBGFkvT8hdFRzQXa9LGNU8hui5",
  "key1": "43Kvz4g37WYmo9w4X5s5AU1Gf1a4wGnN8ST8mibn9At1MWRJWgxqG9viQK4NwxgnQamC5ue3HUqby49Zu3a1gBvr",
  "key2": "5tgkdV2Rn5nZDFnFV4o3Wh9yyLcYttqyt9ph69Be42AM51ohSZafBaUDzBGhk9WSw3dJsgWue2XBnm1fkh3ZWqwA",
  "key3": "4vNDaRx3X9XSzP8KwiE3icYqhvJ2iv6b246FxqrjmGGEzqpeEQXG97JE4kddkPRSwLFLD2U2TDN2cYFnMEmnswpy",
  "key4": "2Nmw4axWx2cQFfaFMaePvdhDwir2qYj6rrXBp6gErVyLkU3jmTrnB34J8KtxipHFGh8xsEYetmAWF7MBxP44t6b5",
  "key5": "ddSuN4o5VYk6YJhsGJHDXrDyS7bjsxbea1qNesy23yFC9NhhxCiBS5zHGxX9jp8C9BT4tcdLzznnrVVtvXJM8VB",
  "key6": "32sUPgdVVHhET6R2CDgUGZV9gYRMG4aEoqcgkNwufe4BQybCHyub8F5SssideXoqp57T4XxSJHzm5jFFdpCTMdeV",
  "key7": "2vcLhqS75JMdgSimiYuRMUNtRTFTgdMPdGAbdJTmVZ2DVYjSksZRXErHwENePLF24n4KjPSrAieE2h78myBpvmkx",
  "key8": "4dd5yVRwJWpv2hgaJZX98FjHQQRgd2bsS8CXM8NnVvL4bZtujdUdewoH3ThSgT9aKzE4UHPmCV7SgzLCDQyUw8iC",
  "key9": "45fAcNkfngHRndgK7icDixbDCdVeShqtBR27BBQJ8hLFgTdfYy9TW7QFUvRiZcmXBD78hj9CpPzmpd9HZCRZw8Ut",
  "key10": "4hc8VP33ukG8P8sBJYmgf4YiUzr9jMdjczmBeo2e21FKYb7LMDdYwrAyjmNoTQazf5cKgzoFTbpkReVCEZSM7nsU",
  "key11": "5DznogGzkzc6nU5TfAoHAV7UZ61mk8DVMpMAZg7nQw3VgAV49YHFUGeq1iNd4NjQTiiDShqJya47jBeHMZcHwHDh",
  "key12": "4pwDQh5yqHf1FB9huhC8r4x1w9VFtt6paXFQorpk7AfcfbASec5qVvdEyt1WejdLRB2LiyZQH55qzEv7xDou6JzT",
  "key13": "5xT4kEQsKSWpCrjzSGBTD2d6JvfznKPoF4158gRqwzo1Vf8vnUpN9hzSaE1k2FjPhcTqQM8GKoSzEQBjYVnXLMDh",
  "key14": "3e716c23SVFGGh1VN5e51VEnsBAqoe4VCjifBXdVi11x2L75F1awvaBdpnP8wMx6mrBPCwbPF1Q5Ewkpse13eNJA",
  "key15": "5izQEXTKrGVyzdN7QU2GS5z42NDNf4Sro2Q62xQYxKtzjH7vdNh6zWDuzwuJwrDC1d6veE7Re2jvnRFi8oDeZLfb",
  "key16": "2Xgni2peccDfmqP546587FGEWxzMKugL6bAvipgfto1maFp5jsvLxLRGwycRrZaw58hAphRbiQYedo1U7DTHQ2dF",
  "key17": "3d1sBKbdpv7t1PKvCpSZqnc2c9GviP3A2NPzZRYeDh7NbbvmhDWNBS3ne6bhtWpGtWqrwSUY4VfH5D4j5Q9Um56t",
  "key18": "3WVz5scia4edmKauuQnFcwa2cqMgrA6agrdsRDQu1gfiKKWSP7HSpufjQ2pvTa5BXbJuahmxG1g8a9TgrfgGsGYS",
  "key19": "5ZyCkUzyBpfGXtRvMbicPsKgDgMzQVydMbeEN95WTjQa2jrPtx8XuS6EHVSycxyb9dCoqnGwkiNWqHwH8HiJrHNa",
  "key20": "57KijC8TzH9h3mEyexmRxhJySVqU8rA6YhbENeeUQB9mm2BN7Lv1HWJmsAevGpARbLhwX7EvUp3Anrvo9qYMG4qo",
  "key21": "BPJokBcVC9vM8mW6qD47F4x1B9yuUHW51wPoTYkgbJXD3gW1h2RBCXPn9tP3WrtXHvp2CWifAAc3KSCePPBAkmk",
  "key22": "4h9oz1jXn7Dh4QkHPywwT7wovxov92mmkBZfhyecgcRoULvZC4qHpoqWz9Vjs9hfkUQVKTo5HY4bRLKw7rqiuNsq",
  "key23": "5LEUSzMitH2o8wVDwoqYPJQ443YyU9VyVXnbqFzzYiTVuyuADrjwk81Lxw476awmwdW1Tdvp1KZqgsuAoB3Wh15p",
  "key24": "27NHUpcwFEdo7H3VUDEZ4eJFiox8cgVmo9S5Zh9q99dGzngHeCSQvwUWbRMt5cL82vAwrXAZSJpWRZAThPZ8fpdu",
  "key25": "37FErjB339UhpaTR3MU9QikuVqtGtoLNpkWjYCyL58fDKfKeKssR5U7HpE1xNMha8Arkx487wdRTFSLoX72Go4aU",
  "key26": "3AGkGYMrtdLwZTQMiZgtwkr99JbE9SX1qu5DomkgT7khwDpuNSdUuQaRR5adTTGwJm3z5Uqw6xQigRWjV8dqs24N",
  "key27": "3BE85ys7C36YMt2WBV6MyqCutf1EPprme3d8ktGYh4jv7dfMEAXKjMpetR1KUbGsfzM7KbYx3nZddtpvrYAWtRom",
  "key28": "4EAv3dPuuDCgLLi5f4phraPqAXC1eWCRULXMFTd5xEgH7NYUfoj1ncGQviFQBGpT3j7sVokd6ZFQS3AfoVBqFX3f",
  "key29": "4TGkWkro9Y9pVShqTG2BJjJsnEAnUdbxCuYDFrvCtuRii3v3qGMwdnNfQCr36oyR434DAWa2m4BoqYssqQ6EZwhu",
  "key30": "4TxzdkyFqKb1tJtJ2qwL4wE9RUyfgxZr2SRSwLogY93Y8Jk8tVewmsxfH1rAugoFEMsNPwGoHMhmeYmzpCiKX6cA",
  "key31": "EHBFC8LrBRdRH26MT4cJW6SBtmVZQuoY5g9CqMtPJ4MG6wYHKA2owbc1YFgsaSWHQcvfWxxzxfPkQGbGj2Zg8yk",
  "key32": "4ZC3MwmLPksBCDAt7p9HustTFfqN44hgWaVoDvrpqyZPNL6qbvRNJjajecWagVdbp5vdAbit4A1pThGrFahArpih",
  "key33": "47mwFEMQfP8kuGoHbPn8RXTK944eZf27DbsRLCvis1uzF54WKqonCuTEMviJS2kLXy56AnBtz89WadDZtEc9R5uu",
  "key34": "5p4zBxNDv1ADcYKSddtb3yaCfoV6tTyFjrhRzargNXh3xA294qUfr3eECHMwP7UiTvbNTLH3AcnzsFSaNfV9pHHv",
  "key35": "5XdRi5TbRpcXgMpTek1A5zTPe5Mh8r19RGL5NJCL2BZWDRQwvi94TZ2RvhzhgF57n5XD2DzVZTLQ9ryQTM1jTVdk",
  "key36": "3rMDcv8RRwaA9gHBx39mQ4tUUugLbSPNeGzMVrMzqUQAnXjNkvvXDXBEbKgQqTQx9Ky1FENDjwEuv846D4LsfcUg",
  "key37": "zZgQeorKi36Djzz2CzuE4msv9kLcKp6HHZBs52rvLxLp9V3rwLEKtoG9DCvF7fEStCJZLYLUwne3NhYSEoMrZps",
  "key38": "3p4a7LxSKh43zRZxtLaGbGTanE5dmkvirUEGDmSHN7cXKNDNnqvQe4HqrrQuucHWvM82Ck91KGUEVb9pyJ5Raa5w",
  "key39": "3BjAHoi11YkWTPzvgfHuCTR7bg8qJzASYYSiioyRuQ4sueu7f6vJKL5vyJqi1xM71TJR2BPLwXS9UvoyLeKaibVt",
  "key40": "U5jugA3qK9xMphKxVHzzsjKr2HwaDQZxbceT9HnS3VRAXJRUPpL29vXTrmp3YU8kqmNwoGZSGFBdZ5P4BTWvbeE",
  "key41": "5YUi1uACkRPWJ7reikN6x6JCVYVjLCioPmAjETy5DxDHRfWh5U5NxwK2CwbPNtPk3GPQHaSmVW4CiNPn4echopSo",
  "key42": "5o8ryW3UqHV8JA8cKGjCP2o9S8oHvMVdgAL8iuRd6M4R9Q2VeoRqFhHX5MEeTuSCeu7yv2hMDifGtw2ysVFAYBdQ",
  "key43": "54Ms5cpdJibYXXnFJ7HJfLDpJxGnYpsPu4Eo1Kf8wseo2UW1omWfwcyRpjz1LAWb6cjXEeAqMqWUdYCBgckna3aJ",
  "key44": "4VCAfK2cfDx5yueH9Rxr52sN1wPUGubmYBJvVG8tDp5vLLhnyJva5N6FkDCm5JSSgS7SDkLgE7aJ6wjSknbevh2E",
  "key45": "57fcFpHXKKZXFmeP9wd2VntuKYmJVeRSXjF6i9NyTAqkZ7mx2RsehCoS3E7VAuKd2DxHxga9j6R866cmdQaaBPtD"
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
