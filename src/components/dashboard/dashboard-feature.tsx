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
    "33rKYD8h56b2URCwtttGCLwfLypuKr646Ab3kLPRrK2gwrbhoyDWrBz4KCcysbyuLLMJMwZs2hz6zaMthRwbJTip"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3fahotwn71RZNN5z78dinm7EtxJ5t7XBVdbwes2DWPxzSzYw7qAPmy75UG5zSJeQiNphdQJC6iCQnYTPcKGNJ8SN",
  "key1": "KitnsLr7tXKvYHfjBphrCUgAwRrsmdMRpNUYh85a9dTg1hLGCVj2waJgvQhLEsAezPiPd6iGxY8g9biQWBTuaYt",
  "key2": "NuBXGu6HvFoSk2o6bUogiBhF8vRcuA1m9o4Ar3kxXjtkcjvptrpNqFCT68RP2Rq5E3nrQbnRasxSQFXX8xRGoF5",
  "key3": "5j66SvJUbTVQ2cPkxkkdfUbGyNM5u4bjDk6fVaXzfBMApFbYVNJ6qJVnLHyJW2KRJfbTyCygjZ1a8YxCz8qXbD1a",
  "key4": "48oN8awQ7cCfKT6YeZxxTVWE8gRgBw5pdice9qAywdar3TiAiyVpCQg7nGxDuSb3WLak21TQ9Dkr5fBqCvp1zKhM",
  "key5": "2JSYhbAKhneJXTsEJofeR9NmvWXwy19wLVyfUf4F6aJtjJRzCe6Fvqd8ZfvNoe5Qu4Br4XE7TTH3qpGtEVtgxvvA",
  "key6": "41QjCUyc57qbdBEHd3opxuETSYC6mZ5saZvvPbe5Mt7hgAJhi2DhjJ8TkJ5jpaMYma1UgkQBRS6aa2zbzjeQEScR",
  "key7": "2tiMSGrhiVsadRJTKUMb2CMRRs4HR2xUKKJ48EERQRTqXesCe9udqMybrMWDX8q21GH46SCu5RprnGnbEB5HFL1r",
  "key8": "2jFXH1dnbo1o35BEV6c3p3oBqQntmoS9qjxGGxyCrAWu4TYVdsexsD4watxR3TQtw84H3gJUXP1P4QUM5y1wxRhX",
  "key9": "4z5DeErAfC4yfuP2rfJtEYxLdFd1t4A88gQvoPypP6kmmNgvxrE4tTivnY2mbocAKpiHBsDCjhbYReV4cafzwzRu",
  "key10": "3XfiZxX6xRwzL7orNWA6VqqD5QXWHt17mZFBirZRJaCVxqhy1YAFRH1qKnwFpcz4P5EN6nkrrw6cXkLg9DTv8jqB",
  "key11": "63oN1yPoonhN62CeduvnQ8TGQBj58yMRkddtFWQoAjxiD9HPj2XidhVMrqaHgWEBegaufeF3qdVhekV6AZqekp9z",
  "key12": "4pgU7mssM6xkvKxNs7jB1mC5kfuc8Z1EHkUogute5L1S17vSJBAFYByKUuFy4xYF8nmY5rZPNiybhaSh2dzFGvuE",
  "key13": "3jmgxPN49wxQW3hVMrxcLCUEaAPFnbRPo7FkUJ7G7XQHzwGnUMcKrvvQUvuRVwGWr7CzMWGydB8BPTQ7wxp25nd1",
  "key14": "4Gb7HhGsQDqJR7cF32zMknvJXwjMRE6Mo2Q3decc8im2iGCXWUtxo7kotDAERp7TYAVenAnWzawubQAZmZh6ZW8u",
  "key15": "2H43r7Zqwd8JrmvMp7s1epQg5Y1uieaodEKXaLFyT1U44NwuQ92tp5zXXfgaKnjSaY2XPBt2aPS5piDJguJRG6sm",
  "key16": "RrG9mUVLTbcKhMzFgTdPjhq2fqszRYS5ZH2zVhh8kkwbRxr2BWhpFc157LvZsoaooM3KKGcE3kMF9U7HUwPGMgA",
  "key17": "4J8ZHWbdaL5DV2JrSnDkYExmzwjtruzbnzQn7fEkGgLwyvksXeZtDtS9NSwA6ng3VrPaMvKFk3BDLMguaV1YVHfM",
  "key18": "2Da8nAd5pm2z5kynDw4YR4sZSEyt2LBUyb1j56FVckNj2P4Xs34nf2yj8UErxzwUanaK4VeaamfJ9LBG5vCXSDHJ",
  "key19": "5VSFFz5PW8kSK8cFeKmUUXA9vaChNf5WdySNQadQpSNL1fVdCDtptyhy87iswSJvWMZggkZEiRQTbpWQnFWnScmS",
  "key20": "TcCLEvthES9jrMXgCjHjBLEaoqx1sbU5FPVmqRjqaJgEUbN89bmTaQZKaFSSpvRSfJFkQoiLRY354hbSbWFJ9CY",
  "key21": "N4jRPW6W5LijoaBKMPGuNd1bJT75J7SRBDGhqXeKPFKVW3vio82RHH29Sf4TtV8CdnKfn3da6eEP9Dr69PRvAaU",
  "key22": "4wUtpp1cXrFp7BH8F3yswgXz7qNCAR7rhsK4KMRde7iemvFjEg6RD2Vvi5QiK32T6wDTVc2zE9QmuCBKxcoA4D6E",
  "key23": "3kmn1f27Lwz5tEPKgZYYXFVyVscT31oDyMjoLbjVWafcyB2o5i1jVysjQezysbd1FwcaykUSj28mSfxG82sJX77c",
  "key24": "4cg3nPwvzzF1Wfcxrhbhk3bH9B6Livtnxptq2e5obFbSXtPvoQPTrYbTggJ2BnocoZU11EJrFDrWdqyrKUzK927j",
  "key25": "xEucWUXiZMS6z3xS1wXaG4NuG7U7NE5guk6fy7ZoDLzMuQ8gHDsC7yYxP8G5ZZSH7hYe1e553wPRoXAQgwdzEtf",
  "key26": "YUHkUrTW4ammoxQ5g83F2nXKqNPxW11D8V8r6yAnX6MrogGgqrsKHZovTD4NYnZ4tmAtbwMzCpka6ZTcPDft2Kc",
  "key27": "3n7N9v4ga4PWeouuVS4NUYkuEWmGsGHyP8T58JH2evDCQb8Q1hDd7AR2HYVQvzrVhdA2HsuUZHpT7n9qLnrgXvqh",
  "key28": "51hbxosgbnGwBg6eUhvRNiwCYrtUUjJEMGQz7cqFZV7zAFSDkEqiSryVbHjXjkzhJUT6NRnFrnYH1xLLX8zmgrhY",
  "key29": "5MFaQwsPqR1AayFP1mPEavWpA3rXo6SgTdTT7omPKDRCMuqaTRGogc7LamGQLf9pvUwm6Xoe4sseDurwFmkNab5X",
  "key30": "5ZLTq41VaPu6h8mdLyj5HMdmESmP792tB2Y5zhzum23Vyz6v9nf8Q1HMXWD8Ki1RXBkiS1Nmk7B3F1m6vEK3DdzV",
  "key31": "48UuSWQq6TTCabaUSgkUMqaQYjXMsxofmHsDMmNiFRGVsHj5YcywQ5nNZbJmk2rcFLF9ag2pA6amvmw1EsgMzeXW",
  "key32": "2brRj5ksuFcHJ86cJsv4NR6dLifb8xBgAKvkuyvB3HPLUnMNUxdutdGM7NrRyBkV1bFWD24L1RdEYZJxazHT6Gm8"
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
