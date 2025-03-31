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
    "3bUP9MFncxqD1SZrPMXn1tjjYjsxHURrm7riPETzcFreoRazXSJKVZck7KqytrKfaQp3qDKuJTiaEszT6P1nWPZo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4poCyyJAoUEcRyZnmfVUwsWsznGjMbWnvdU16NTqJRa73XLTdRcQ2iNaiZ2yRC1srQXvvKHBQoNHQtkv9gh5W981",
  "key1": "29YWmnqeCCU9t76N5T8fkyTw1GPr8Fs3kaiQ3MLroSauNs9UCx8aZt24rPBWAy8uUJo8Q9YVucu8Yxqm1oeHXc1S",
  "key2": "3nrvu8o1oXDYHx6hgMa4MGjkFdwUYNwnohgCrgzKWKwKtyZzWSCsjnNsFfe4zXVLTQrgYSPJJHhbBLhEWGPKuDZL",
  "key3": "2bGZ3C3f57C5D6zREKEq8aD1Sk1a4EzAiySToz6KKTHBPEAKPW9Ztqx33mLcsqC7zmphrzFQL4ojzFrPMMUbmhAq",
  "key4": "rdabtRNdih3NHuPSvtVzM93FT5LBJ7CQk3LtQAthPDNz39R5sq7t5tdo7tJJtbTfCwdsYBuWPYePyjBwiTmSb88",
  "key5": "48c1zYaYzApPwMXS1yGJUN4EZgvw2kULE96ZDixuba7yWM6C1sAivFct9T7L2mfFWT788EJKwoTdSKv3yNVu8yow",
  "key6": "4PX3uTnx2Hwjry7Lararm5o44QboUPVmTSUbdugqLq55yxgLvd7rZpyzBMa337YyyNTHmVtPa8fHXzWK8rjcXkuE",
  "key7": "5c9x8fA8w8Qe2mjL8ChVtzw4H258zWqiLjgmXMk7smLdoqw7yCChtY5Uri1dPtvxNfwEVy9MbqkMaPU4dH4oaKSi",
  "key8": "61GjTkaRZ33PkXA2VBENfj4La4qxBe5EahSkmES5V1ES4vk1rwDQ6NuTUZu7X2e2DxUqywhj1GEGHzkkLkJCUwMV",
  "key9": "3PX6Y3SxHZ5RbDBs4CN4MFChTKaZN752ab4J3BW2e76ji8BX2XiSZzBAzJuiHw4Q7LUwEsrNfFmKEWQu8hSEuN85",
  "key10": "DwcdHHRU2v4okDYq8spZdPRfdjxMGqqQArMjQRxDmxHHWLhgUtSRszeeBAQiU6N2tX1HnTDDjezUwLA6CL3963Z",
  "key11": "5WkiY8E9PkMB4fAzqo46EVqVVmqRenT9MUEcBGdqbKfkiKZ7mtoCy8XpkayPaZzEaiAh5DgnbJnRWZuiuYTmBXY4",
  "key12": "2ePRE1Yc1Xj51jMFx47W2TFN3Ewdq5o1JvkDC59NqDwkocNnwPSCV37DkcJy42EqX8JKMNLkUyGJkVGc2v6knXww",
  "key13": "2VxG69Bdtp61TPy29LGsyKtE8EYFzheACvtNXT6FzdxVTo6YPmSsbrUHLCsEEDsMKm9j1uftf43jfqR3QSB3Xg83",
  "key14": "DFr2yGYGXk1ucV3cbPbwa3pjb7HuRgMHTKwDCNEgzS3fQKmf3rZyFLQHaNjtmQ6k1zvwERkaCYUM4LgaaYweNto",
  "key15": "2K4vXcULwkcjLRfpWQ1CdHURtW8CPKctCsyZ6uXjUbfVwdTU8bwYYeyF5ui47van2S7BQPk9T1yYnKPzbt5AyAXz",
  "key16": "48NY7AioufCUBMBXAfPj2nLQ3A9xGuKYtt68bQsVVFTpMDjrs9WhqyjQqckywQsX9a3uap8X2nW4te77sXjuuuPL",
  "key17": "5rVdtxu3LUvv8ZTFMUc8sVcayEcxupvNPmtaDAhw1gmQFZ2jpGgRewXAb6L9dFZLjouyDqdWD2Bp5dA2SMnXby2i",
  "key18": "3EXcwDZ5X87vDZ5mN9B1ydnTjaB54XxnUPFefQeTmMaUi4o8GP4GDpBouLRWiWemSwzQaa3feY9k1TjiyGaKw4FK",
  "key19": "3yRgrigV9H7SCb4LQMv4rFjQbXzkYQvwqdGm34K1wNADkcdovcA6sZLmNeQLfkcagJMvMS9zeyQB8sVqFu7YDNyX",
  "key20": "hW63GeRZNrLRmfjCwYaF9UiSdLXk7JJb18A75L3cB1pXUc41ayXUjjXJviZCYTipZEaMwZ4F3hSPgAUFpp3vPEj",
  "key21": "2r7cstfxNgcETqb5r6Fu5ZWT4gdXsfKvfTtEef5X73CxWZ9XkjaXNG2tWGVT9kcV1uCFpfpmoMF8ew2P1ED1Y7n6",
  "key22": "4nPRgz4P1KUhDYZfcs13EwMELfWNfSAGX1HQysARM5G9Mm7cixejK4k3UossaK9kmKNiohHLPc32Zxm63SVvu46P",
  "key23": "5YMKqP2jXFcB3SFhi5ZjAU9DPphA9rm9UbxoxpV9dCRgjG8nWhU5efpkjHvVrMvMtq9NRuCFCDNDoU4XNcJ4QFot",
  "key24": "243sFFWzDw5D4svumbCVqahBHYHYeoHBrtzekJpPXZvacx1VRsi88B879dfW2WyEY2X5Rif4Z6oCTnqy3Us3kKU3",
  "key25": "5pLGsp1XHcANgDn3BPJyVQ9fBYpJUfdNn5QTHABANMXYqwUNHgUgJ9BUAo1VMgcE7sC8naijWXuKHUw6snEK1xF3",
  "key26": "2bVpBCasZzYqVBQE7avNRWWFfjPWUKBdkuvtBCiHNJ8DHB846aGmoC8nEL4gXKFmjxnvnxJfA9FuVSs8fEiwtCQa",
  "key27": "2kCznt7JR8xLiojektCFbe1ky2j2AJRFDzNdtUAkp5MUm6xsUaAc4mPNiUxTKGakrWh5VvVavyxt8JPEcRb1NHbs",
  "key28": "61MQD21g44Fmz7EnJv4bkiWKRR9GTCYREEHGWQZ8BtZ6aLjCUqD8eUaXd4ZzNfp7L32xCSkxM6S1597yJDNU45hQ",
  "key29": "2PcaQZ5ofgeg8Yc9zMaqeDCBXC6qVnd2H39UiVmDUCgLVLGZWnUNTK4hKAXbUgTgvPT58ErxujcwEd3CCZjJT1n5",
  "key30": "2wgBeo961yN8rsNiWwynGBNahaG8NHh9hSADqwaf136Jt9MpfAJfAZ3htZmYgFFVZEytrM7b33aqz9yeUPYXCEdb",
  "key31": "meL5WatLf5QrLjj93tUEowHnv9XuscybmeYpCZqBEKqGzUxspwEP9eVBwNXb8RyTDtSmduAEuMZ7o4xLipCN1iC",
  "key32": "2wzfzCyPoqVtyn927MhKptHTuf2qwfMa5HDMuHdnJ7ZgLaidy7kfNCSAM8JxdTrXzXhsLxhgcMBk29QNhuP3uAPr",
  "key33": "3x4rhxLMM4herRDkck5jc7pSfWSJiuQDDyxbi1FZepvjDJTtHN7QUSBybsR34pab9wqK1e9pFFrYdUF2CqUzkDQW",
  "key34": "4MSKiHFxvb2HtruZ8Tvco58GMgS48YXxo5tWuzWK1j8cqwcHaUjvSMdoefEjnLUA3Yc9GweHCie9xfHtRbGT9ttP",
  "key35": "2mXNMyRYSD2vCnxsunGyMgJpsYmQ2pVF9AxETdYfctYFqn5avpKg9dYs98WtN7PS5bWhbSFGrXUBuoqapkmkdTuj",
  "key36": "9Z5sqbstYKycWAmoSgjjnGpcyKLpF4jYVKSa65TLTnJKPkPT3sNUKJEtmpmGuYt9wzEcdNJXooZutJPXWZ7adgj",
  "key37": "nepUHmbYNphHa4tZHBhJ9KMmpozhWbyx2RAL6U6j7jga7mVbVPHUDPaU5MCNc89Jd44BpNEiY3KMt6Ss3uv2wAJ"
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
