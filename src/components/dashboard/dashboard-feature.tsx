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
    "rW1pKnoTpuQGr5ZY3hEQ3ncwxSUdkLSL5gVb2woGm3otSom5FWMLC1GHttx7X5L5UPttNCHVM6aN1bFANQfhxd1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3JZHMZw84uubhT3kKdHYXx512UA9aay2jgXBESxhr4GwYgpEk3sCRehwxYpvhZnycbADpQXtPmBzTJToiXbT7u2U",
  "key1": "2oYzEyfh64YawCiLCCc7TJ7Eckm88srKqhQkd3oLXTajXX6UBW9sgnKY7VNrgDQGK3xcRLjLct2rgJWGsNRXNx5U",
  "key2": "2BehqaB4FQ8D3tJEnyJzjyVunKWH37NDoLqDiKkQvmypuJakzYsHMsaw9nNfaF2SQNaXf4JuQ8avG1F4jzVkduhk",
  "key3": "44EdCrDjoR735pKpqfxbpM8KBVUBqfsUU31nXnRwG8xSwvUtmbiX3H7qDNvDdFkR4wsFRJ5pTL2zkdFer5opt1MY",
  "key4": "2iS1QdhBcFQqGunY2iHqhXdrdkH5Lyrw5pAK89cPrAPaJMB63WRZK6xNyvULBpDvz5JirZvcNC7Mt2JBfASBtGte",
  "key5": "2VSapqJuVGBA2yqX7sWEdeh83Mz5dnQFhjre95Vj5KCqfanerhweqkHDjjviUpdYKrgnoiQJn4DPa4RKryzLjcWe",
  "key6": "2oRmKspezLspUKVscQqbHQxDiqScU2DxYWNX5RtE3QAbJSLAGCtpKeyRCFf6MNSvzVLGoo6cn1Zr8b81FjrNKk7N",
  "key7": "5HEEwEcVa3RhhkZwwTvWLpDTDf2MAW4abrMREhSYDzK2zMJ8EFsGnbep5e4WqSZHMzxohJ3kZ7cm9dcbxjMVydQC",
  "key8": "2v3LEJhbFb53Re41B7CYfyrbK5eY5XHTLrXsVqyPAjSgnouNGfcx6LLoueZcbdFrUzK8FMxzhjGgHitSiZh8UZCP",
  "key9": "3nq8K1TV89hCFf6KT2hvgRHZ85fivYRa76enME17bZhG34e4AJxd8tEs69aG9jnbYKmZvTduZiRZ3AvskNeBzdr8",
  "key10": "4J3YcpyGyrv73Mj3HuLBskKzuRMWxZGhxxL95sux9AHsFSyJyjKjMR8QmudDfoWyNB9YAqDW24m4DPMpAAXgEVwB",
  "key11": "25hzCQJJZZVedWAaHeeuqa5bNjopWvoroWcqtrKs5wP7DadpAyE3EoKfgrCWP839FvNKBDYwq65pBQVtmuZAir4C",
  "key12": "4SHjNwc4EQAzP73K1U7M6gfG5HQxv2u7XkKxvCC4SGqK35LMG2ASn4DLndjLtVmdLu632DWYWzhu9vfVd9fwHMZc",
  "key13": "5vdp6ReDywbWoetN1s2JD7J7677wW6Qa6h6AAsmTNMhFKHRSUt3ebNVWGjwwiKduqoppHXBGdPL3hYuFcFHRkcrE",
  "key14": "3LvSw9oYSYhbyq5ATKA3D9oeU87bP3ARUwuQoE8cM3PXXuVYXfWMmMFqXAumqJwh8t4GmrqGxt9MmaaFA52axUdx",
  "key15": "4ib76TCVXkfTmeagqDZZjNr38TNk1XoqcYbGWEKE1t7GoY8SSGQh9FAhVUhsqbqJJjr22ZaxrVopYndg49A4Vcns",
  "key16": "2kJ8CRpBmrZRZpu4RyzzzRMbdorxgf1Nwa4CWF6V8Bv9FEp5No8xja6PeFU4EwWgQjTbzofvgHa7121A3ppKrgjk",
  "key17": "3wUM7YEZjN4pvQCa8EsguVhACGRGwoGUQW7GHurr8pmACJxKAdEw4amTw4LFjrBPgys2iLUFD7pEZ5Papu3akyQM",
  "key18": "3QDgQFn4u5iPFdphAwvVfEUXPygdQ1YMbXyETJv8UAVm28fwKRWKG4sN3gC2JTQYaDpQomPQBYzsJsc9wJ8taKYk",
  "key19": "4bamzuYa9gDs42nW2Rxwk3W3t2PSPweBVu4GPmLtYNkuo7ayEqUKoXWGaLF4Cux4gtCF8nTPTxJGHC6dH9ygGQqL",
  "key20": "iVMkS38YY86Fcj974EkcWoUmPd8okdGY6nKsPqF8fnoPPt9uKMRNHLFbnAiMh3zxoe1hsGoUE84jWkqmDRrrVYv",
  "key21": "3CdHExq9ePx4MxeeXNxUeXC3ehW6uhng9E92eWwExkQEo97nMJadNUnp3VDuzp7aEJ6Mzn7F9QbFRky3o36NVJps",
  "key22": "5GVoPFuj918ekGEctXDyAxjzU9UCRy5pxVu5LwX2iCUwSicUzL8sC2s4ReT9SUc4rAe7sDYCELtT7CY7v1AUfWLC",
  "key23": "4nMdY6wpLNFN5cmXzE1944CTdPGNMdAMqzbrnwrmqupaYXVDn9ZoPADXmAK6h9LgzjvUqhdCn7AnWCY8MsV2qoju",
  "key24": "41DZanpL29hBtdFnU5Mvp19TrbirX1BytYrrHJh4etid1wwJUdjbvABe1Sgj8UbAzwStGeaHNJQf8FuRiHLPEWxx",
  "key25": "HYBA8Yc5oG4b3EGjMmPBJJp8Cv3Tm2Tt9pewWdVpzvVhE6Evi7zHk1K2DE8RRHmagTSyyPU5jKc81tzipoGP3Rf",
  "key26": "5p6B5HtrJzGgdfZKPfnk4mqYPRTUWuCxxfGXfkNvBEAWeFgdsHormmKdXDj3RZLVw3opnRpVA2HzQeYAUdh4H2XB",
  "key27": "5s8e8kS92u8YKJtdhDdpaAm3UzN6ukTsfGqqqQ7DwpH4p9Q2Tpb3w95HeDcvDBpywbcNbDkZ7uSvix6nQPG99qfo",
  "key28": "2ZDmKUcNoYyMXq2x6maxp7qRF5VhWVGXAvaaiqstmzjAHMpGYayVcqwgkAZJcDhYrKbAucu1mpjMtiHqWKTwDB8T",
  "key29": "3tdVrffV8H87CR6AxnAKoUQJsw9kiU93edMFYWExGEEYgwxjiSbmebUz6GJvWc5tNgEK987NCzFudFBrq4PcoeNS",
  "key30": "4p8aDEFYoNf4jk85WF1Uic4myeCoLGy3WLV4uKA2f2uDp36mSiCyZWz2Nrfj16sKgvrjnqtRBoP969Mhe9wL1op7",
  "key31": "2b487C5joBdrncoBLT6Vmdys96syA5jSi4bMNDARdMWKK6hDUrZQYqRnsBjiTT1GjECB6Nz4NkFherHqztX7JTXo",
  "key32": "63nT6K9SgDvAi1jR2aRQyFgZgCvdJJYmhj77ftWST2edsmVbLriXwbCnsM6RzWwKKEzJP6AhL95mtiEpC35HYujA",
  "key33": "4drYPMugaTjQ8LigjaquyE6ovmts2GrdNT6BZETW5gzQLm5S4UWqM1FeJT9CGQr8T1BPjcyjUzp9tFEFXGmnPqu5",
  "key34": "3uK7nPowht1u4Mro9BCFUducs3uoupi1x9mXDQkLaG4R7NVWa1deTe6TK7BgmrAerrgbr9eiYBN8RZPZ6jsJpYHN",
  "key35": "4Mqjd5idNREL6GavByhUXueCEPy77TwYtfS3uP8vLz1ZfBa77YggnUuTby586Z13T4nsMGryDFSyvxhEMhVZox7m",
  "key36": "3pUnMcnSnPFSPnkYBheFJuiA8soo2zXA3xvfHkG887M5Z2DhLTgdnNJFSfhWPR6NKqBMamjYziRoFzdjthdD8ZuM",
  "key37": "5DggAHPCcQXiej7h8T95NTnHokCjwQLQeSc1dtTVvy5VfRPupDqZfk3FjUwRmzSZRKNH6uWNFCJt71sMTaw3mnSJ",
  "key38": "2YKwmKYLqt6k7i9Qi4cLfTDHtnNTZq34px7i214R9Aj74Z9upfetTbuxkFNaa8kBnPtkLkSegnsk2spwtjR1a15C",
  "key39": "4S2Z9B7BKtTSyLypYGv8JmfMSE18uc3JMx26Pde2SXfSWz7AJXzrh7QYNb5fS2fsyafV5rjbFWmUhEyKAXdxUFTR"
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
