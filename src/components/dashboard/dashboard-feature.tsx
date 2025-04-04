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
    "4nSJqGz8PMx3eEzLx4W7arHxTAR4Zh189b2uUiJpinYnXaaf21pMGscc4boXMDrcshxtp64SsmzkDeyJcoUQH42E"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4V43pgci6tzCSXnk8B8QroyioNPsv51T1jkzfAAByq5REXp8sB79J7PG8qh3B5GitpaNM2ztfJVvmPoa3mqgMzB6",
  "key1": "2DCEcFWQnA4FHL6oPoKqcRMsKuwQJsgEYWCFSQVnpCE2UAzA7EdkscJAzYswspSq8gFrZuH3cKdtuqQpvuHYg4wJ",
  "key2": "3bivCuqLebPjHic39zae2FiXedSTFN5rJV9499edNfUDqUcvpPaRzSucDPfTERJuffP32xcE7xX29Eo61uhS7bQ6",
  "key3": "3s6vSZQe2TpZzh3EuBd2BAYyKJCdGurTVZnN6ZrhYyYWV1U3kt2h7NcQAMnoCFK521rD9uEWBGWUP7z57ZSj6eVW",
  "key4": "4t1negX2eHMKopnDJLk81KiG2KKWMT8GXpW1R2mtndCcEgS2bTjbrvRYUwd5P8HQoQnGsDBHk7mqLihBwNtCjAqa",
  "key5": "5VVbxmm8wDKB9znFLZyMbEgwu9fnU9gLD3Zm2xLDNGerFWcK65b3HuKrpsGQfYHe1ZGEknPLBkTRz5Fd6r5jbZ2z",
  "key6": "3SS8hSvGPvPoWzmde3dZoy7CaX3FpGPJTqSpDpFoKXCeP4mmZJWDhwenDbBKkr2jCWDHRYqY9Ep94j3saCCGUMgR",
  "key7": "CM3ySv2LRTeetuxbmTdwXb3gEY5zi4YLMhLodmyguensMBo5CPmDuo6pkBgeeBKvcNAqeyu6eHgrYPtseVPfXBr",
  "key8": "CeFFnHiaMcCYEpqWsLi13Zyo9i5eQbp3Z7z9r9uXrxV1Gc5r6yEgK9C6V8yJWRZTpRen4EZjSdyocSLrBnj3kaR",
  "key9": "26wkRkK2YEETszyHE18G19RY6dibSULxpriYkXHFNSprV2E1GAaLVHu3QGuAkFu4gYftiydTAFtGF5q5mu9YqS4g",
  "key10": "5thg6yiaGiqnZS9ywEedNjU1D4A6Dt82ACaR7Sp6J2bMCe9DEc5nHQp9zt6pQ6HEW3mTGPciQFq8zYwPQ3GBH7xM",
  "key11": "NtC8qE2NrQ4oHh2YMAoPEbSASmz2nKQJUz9hZaWq6o99EEASQWZGKZ9Se53iG4eQvjBNardm2DtzKBM8ks5LZCi",
  "key12": "kucHh2yxvLr2sPVScpe8wtBQjg7WRxaRqcUZwd7LkU54DLCUhXjYYTERzr7XbNANsb1jmtFyHbVVKfGw3Mkwgy3",
  "key13": "SFzvin7G3PKoeevc6KXVdGdiw1JZtedDtmr4dzpgcYJk4DAXMCWrqtYC4NP3M1ib12tzm5TsNyXkVowZePkaKtb",
  "key14": "3tdLRtV9AvQiZ5Zcu4orrnGPgiiTGniVgcWvAexR3gxVhL7WJKEZpmBKELPb9apCuLZ3WG4fehyiMt86RMxy9XL4",
  "key15": "3SZrAnuopi5eQCXdrBdyM5ko3VoHs4ChKtasrSPjrjr867rsyzp53kdXMqpd1AYkcujnS2ciEsXKNjjBUYH1wkLf",
  "key16": "4jc9e9cq9dxv5fUJURb1rWoM1psV22Mv8148gjY8HM3La7qZj6F5LTivSZTiJqAnoge89t97Mm3BbdPtpDJKDW3C",
  "key17": "E2dx4NcFyQ4mJsuHoyU9NWer7zHzL9PoTx1k2pmrPdWoytYmnfxyaRaeNxjDPBEd1XuK9xbUkPrBsNK9CoYz2br",
  "key18": "2rAG2SPg69b2GDLkCPc4KQxLTfpaTM3j7CaSgLc9vAkR4L6L3vWjE4XnR5ZyF1EjZidY5gPijJhmKgusbS6vWaST",
  "key19": "5EjbbpwG2E63dkGnPgKu4cVqaiD8EkrYnNzkw2ANwJyxKdYgmeMVk2tjQPGNi9tAc17JjGahk3qmDmqTwKvnsVW",
  "key20": "5K1uau1q6BuCs1r3DfHnn7jjAYiyAARWEdKFsoS7GZLgqQFRUkKr5rZPEnp1yH5KhCwhWYirLNSvabZsM2iryKWP",
  "key21": "64NfkZspWpvbp3U9q5VKCyqwvzgi6hGosTMcKLE6uCuRKWU4Ukz8YZ1GwgproeH6zsXbsPSViPhfTQLRxvPrGJLX",
  "key22": "4kAm5cCi3hA8V9eC9Rf9dYhz5LshEcXupzp5fgX1Hiwmg9MzzWh497shusf3e9frY4y3DzoQLKYSqkpJnPGk7JqW",
  "key23": "4prS7xEfFeEe3vrwsfyViFs819Sie3U1ckdeQ9JFqx92aQnVmc47nghS2s3Y4gzTCU5QGHvDZJTvycDGZpeuJv8F",
  "key24": "366ve3dnMqo3y8xik731Sy3RGYGD5Cp7ypQR3HaMo9Fys3yyMkFfUPeFcCuBFmVShyfFEMTagYfzVs7X9kgzEaho",
  "key25": "2YVbWC6hnmG7VCHfYS4Ap8nZZ7fKe5RxjoqZh4gzi84RHRDxWjeuYBX4Dwv69kg9hzRgxMoCBgZYP9UP8TPmfd4S",
  "key26": "4ds1T4RxNCbPVE86ze3RBoLpS6XYSvxsZuUvqD2fWGniErDsGVYBUvTz24i6YKrGEDJgGCEXmvUcJg2Xy1izXAAy",
  "key27": "Uw7gTMRCj1FvKDuA5xiBDTQqbBYVmsZcWfBHAi5CBPxfhJ44UP9oYVPH3csGJinoWBusRXMPTVzuLk38riMZDTb",
  "key28": "Re5gEpiR5ykaTGUR7xAuVvHn96jB9xRtnBGnhwgeybauMGuFE1xgAhdazbW5ad1ydAVsr3jRGnij2pwcMFEPxi7"
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
