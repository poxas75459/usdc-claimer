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
    "2grCwnp2hdTNi3K4oauRYRbBpxiWJVDLT3CQUpXBdEgzbqYxhbnEgZSJFhqPCqPLBkgusjfj7rbddXyVftb9X5wZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "nWfQw3nkmYdVEUtrVtmkiruYQxcxZFSsaq9rPjkDA9EYB2s8dgHBwFLkC9qoygR6aXK4HJwjmnWv786mgLwqbST",
  "key1": "PDNiPa4QoRmPcTLhRkNJ2tVeTj2Mqh52uQC8meyZHQG6mUZsEszjivC8xFjxsK8o3nz7Azahx9KzPJryCum6ooy",
  "key2": "3SKJmAxEbMw5ckUJrttgcxX6wSyXT3aywjAkpQ9Rjz6nL6qq6P2kCJyUNbQyaZoPD8RFvtA5B3fKYXb25aVhinuf",
  "key3": "faPYmTbJMXi2KMGBQu41MzoGpQHBtPRqTcrVQiibBiydNmGsQTjgXXy3L5UUZVbPoiHp87rNdwRxq3kfDo47sX3",
  "key4": "5pbnpoD1fBAz1VoHV5Vk8kFyLZdfzbFK2sR1w39w1NuUrog8y6zcQwc7SRLyyrXQH9GrAM54YqyuZRPBA8QhTqEZ",
  "key5": "4QwsctAAnSA1AW6jiVNr1FvayrKJegdJAViWgcukPDts4kUQiHnYW1Y9nzkqpghZnKUE5vNEnQajLj4HG33HD27Z",
  "key6": "2riWgM4gaQKvv4UpzELd5xMwFCk4hsGYHnv3foaR1XMLFMRBiGsRcRkHBk5RNZdwQoDPFnEscn8i9vKMrcAtMSo3",
  "key7": "53H78gQPksRJ1y8im24D1PLFUkL2v7DdmKU2kg2qevxZ7wEpF9TUytx4NXrCWBVcgV3Nvzqnj2ziu66iQEHeWc9b",
  "key8": "3w1Gb4egQmuHRDwARexLJks756VNNqDVNkd9GRYJAMs2kMEgd9PEfx6hkxX6PkbHrfDXoMEpCyBnG23C3cRXFm1P",
  "key9": "3sHmZcYExcqHHgn426SmX8aYmBLCDAFXsw6FuHooDWKz6B6unppeNL8H87kw4cQgFKiHTk6Ka6rRbMxCsNgzA8on",
  "key10": "5SfQjrguR1SXkXZ7YBPXUuHvHoVc9qJEsaS4dQrfY6RNj6HxyUgsSxMxiU9SbpUNQFaDAxoLUugWeA2XxQt12Ttc",
  "key11": "EJuD4dXHg4GwmNXaLWDPBfBYn3Q3RaRRL86FUDyY8cbmJzgA1GwneDbs2BavUfh6gwmsp5ZhHoVQayHQJVpGYEz",
  "key12": "4aECro4CRLTQyGcWBEazYR1roPEirS2LjLRkwDkFrxKG5C5NNCPSETFywyV4UeH3NX2TNBnDUF618jaRNek1bkgW",
  "key13": "47GCdDUGeMfeyvfst2LAq7qxUGjCtdhxUCDFHUMVf71aZCWyDBH451Gh4UMYpCis4KraA4inw3kegXRUHnJ8Foxm",
  "key14": "24DFBz5E7XzTfuTEzBfamsxDfjiHT2R7kcErddoQKpgFnJZoC5VqEyKhFwdr8niQYBnZM9E9gTwEASBzr5UuDc2F",
  "key15": "Wnk7xSVvWxZAjBErZ1qx8TayZ5cQaDiTkv6NKkrtzBUqFTdxyADC8wE1be9wz8f42bevDNfuDQHWcm9epbFnupS",
  "key16": "3hf8h1tFoSq8nv36NJiWTNtudVTXi1Hu2owq3Mvbe8igrZGESZSP3Fip3Sz2DGKWS8ByAEH1xzpptr71cgbrchRB",
  "key17": "4rNgsLUFYH1jmJRJPRSHsPDksj6tGfFR77vcR1wMEzJzrBeMBL6U1ysE5ET7XwVqR8qBCjEmb8eRLq35nn8sceZt",
  "key18": "5SntLsnGCWX3e7zS5xWKioGwXb3oxHhydgaWZCdyoNHA6iCGbGF97nkyLuHYACJUKBqZqqhgi1b17xHYTi3MbjgD",
  "key19": "4shn8yQ1R2Ego4tpHHvRy4ztiVkQFVMDrnLP5enn8Ub5zSjQbHKwDbuv1cVFHpt7LddDYVzPQV635ATTvBtHheb5",
  "key20": "4htPrwvFpo6kRwB9ea7F3KcVwwL6mJhYAC8Z5oEwoxdvfraGKxxpyADUzaPi8JhWRB7tzb5y5Sn9EqZm1rwjpjaa",
  "key21": "3MK6V6tjx4c5oj5pKFL6WmvRghZrdYP2SikUQUbECTxSAkkt5fEbjrgKrSEkntWsUfVUos22ACDRktt6pxpTRY9d",
  "key22": "2yZx2W2919KokoGCcA9hbjniaXtJwgPT3KnBk4egBgyMoCScttddS5eb21KBydq7vkZuUBFNE6KPC3B3qZE3JvEN",
  "key23": "63WX8QmXfGHYv8EQtzV9rznpNsZm68PT6B6YYSMfHK4VBN69GCCELwauTbLwXZD4TEjFVDPp5MV387aq6YhFCNjA",
  "key24": "4KSDdrtGrYqqMC9iQD5yxVdSnASNj58X1roxiybYp9spfqKPEH8meuycS1npyzGb4DHtyBvXM8VD6BbSWfAJepV",
  "key25": "5sJc4BLWPsfHMvqydQrNZAM5VKbq5b611PjLaFhKkS3y31vVKvzpcgqeZ9dxGCjT1Gs9BRWnDnstPZUn2svEBLCi",
  "key26": "53yCNNkqJEcHVSZuY4isRUYYMUqpmVWEPFXz3iKowm3VeuXpKvizSNA1nS4s3iN54sp7APtcvFT5ovcChHarc5fV",
  "key27": "4aWPntzLyH5b4htXFNEvh1zun4H9PbxJ6oWoP7d2ycNJPEgkd66gwo1jzV6a8v8GnFE1j9kKUoS6gUmPkh63YnVm",
  "key28": "5EXTU2MUN2ZRYAKEuGhfCSnC6KV3CXZZJvb8eL3ybudJvMQzUdk8RRgyjP3SnRf57XW2PCX3BQqb1rQknMyJRTJi",
  "key29": "5gP76Y3o21XTNFNJkFLocUmQMgSf5xbWKshUvAzXxXrnrRuLuKiuKQu5ossmyL6Ki8dyB2HKLGYqNsZiCd1R5FKL",
  "key30": "ibT6xwHp8wdyJFt7Lo8bsDTsT1VgDP8GGi3J8HBAxchfQYUS1BeVWhWCM1F87wtd4o9dvsdm9XsTswhJMZ2biU4",
  "key31": "3Ni7HZeiNRCJnD8x57uHSSJkqiY5VF5hBxKR4G2sitqFDoQg7kkvgB2cFVYKekZ4x6H95UKaKZv7KJyarfqcXe6u",
  "key32": "4TT2SSATXUvfwXcpp7whuB9irutSMgn7e3xKMMBAeTmCNwv17YUdD16nhZBw3ptPJquJeZFWtV2v5mnquRFVosH5",
  "key33": "5miwxjRmniauqA3kDTnXGQiVuWzohvRxNVKTiDQR2sGL8B23Edre7haKtuvHocVCNanjvRBg2miSWfnHP5aaPbus",
  "key34": "2LAyXHEWwq2FLx9MGveYQFG27kBiQvk9wtukAtLsNatU91WghwvBoXGfriLtF7BpwAsNwY63uQf4HDSLuyMXWURw",
  "key35": "4SmD7Qj4yhyxgJ8NVFHiuXMdyVkU26p9Ng8Ykqm5qedQd1HLDxvyzQ1X94vupSQ3JRuw4W3Hz2EEmmvWYxdGfgNo",
  "key36": "skAbyq768652d5Sy5iALE5cr1yBkt7EuM5nBReraok7dCAqsS3bWrvU1ckpc4iy6hUdVXMHiTpaJrnsnMtxf4pS",
  "key37": "Mma4VjUAyQrGExkt6K6Ymbtf7DZPFhtKhYAeDC1vUcBXbmMeVj64bprkw8ibnrwvbHPWkMRVUJdKVks5yP9ZRwU",
  "key38": "jVpKNFsqNAzXvo75YTFnhUFpbYJBTXNMw5i9Kcfw8biQ9TSFbjJ1VpmxDaCbhoeiCurbiiRdeAkzfQFFsC5CU4j"
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
