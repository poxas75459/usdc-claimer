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
    "2ohGghPwCoMm51BqDr3hcznX9ky7HMdt6miPmBfoDBKoKhGutfFwm2345BvPbKSat6rGUvj4RmfbFWKCLy4JtHkT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "P29QfMF4CSmHvf76H67AWvv8dfRCPqaXmggx1ssgiyyS7iscQffSXniGBhiqsiEf2ajesgsfitgN5TfkqfFE2B8",
  "key1": "2LSE6J2N2GtbrcVDHRwLszme4p8QiyiEaYMQQQmXfgpHS9vh9obJaeMzZFrtoa5e1bN7aq7DBUpFgDcjh9GeRwBr",
  "key2": "kfmgZGN5P2vzD3vWwdS1dJdPKrQreGxtYeaKzTWnvroMJV5n6qTNyK7AbAKsvVdMzaguGBur1NWw5aJd4JZJ7JG",
  "key3": "2UB8URrSiaknKPxcWR9T7HezSz9wtEmZq22biHY7VM2N93YgFybEBpii4iEyzZG1CWSZP8fKTbmmywLUtCbFPTcZ",
  "key4": "2o7MsJR4AsavhLANd9pqf4T8t5vDaDxsfvHJRnLwot6pWiadmYcqDDTjMXt6ypXAsYMRiziQ9E8124cF1WtBiuTx",
  "key5": "3WzivAauMw2Vq27aJtofzzQL4FTA7p5pYEFdy9GrCTJmGwRZh955hoRDd2AJnXrULdw7zDCqpr1gpVBzqLHLPwkW",
  "key6": "dBgpXsbD3QQqLNsWhX1426ev87mZE2fmM4av87kLzSTXUXeCSEPYbL17fm3qQ1DZErqxjv3Kp6h2XDc3xsW1y3b",
  "key7": "2YLQEd7vbRywW7iF1ZJ8eByqymsnK1qQ2ztdPnDEdEfT2hDBee3tfnDahDzfkZ53Lh4LSqQ59rrM4xpYpRDCRje2",
  "key8": "2wpx28ET5ppZxtanBM2J8HErygBiRYFA1T8P6N7ZyyCuMxN8fwKKxtaVEXEgqY2vAFftq1NacAK2GJJoArLdx4eB",
  "key9": "5Sa8cWn1qto8vNNfXYNDVw1Hw45sHRYkxJ1Pg3wj9Rhm2x9xCPmVsJs3rRoGSxxzB99swThwPpJAEvWArSVrzEPS",
  "key10": "nkKfaSvee3R8daMAmYs8oVKZSmZt58b93x27FYQvAJHbPevHUkz6B1NoPbXCc1hcXR5b725TRRzbUUr8oSh8AoW",
  "key11": "4L9tA1WRuRT1Fu4pNcMGQHbrcym9huKR78Sv194fwrCax1bezScgwu7jW2A19v9yoJvXZ9UWvcRm58GcevUyomhT",
  "key12": "3j6XUSkuA5Bm2WckHxtKzckR1kY4NvcefR7BhxMrxyHJSAus4hKLgj5J9ypE882DjAUV4pXtU56XKWS5uW5SdYJ2",
  "key13": "3sVDyBrmPQLouituRYYi8eEhBQHiB9c6fVXo7WGt7G1fA7s6rk8DQAGc8BX7fbsmUWfktJdygZjbHCNZoqMiGF2g",
  "key14": "2LKRzJMy8A9513M83ahYXNJUgUzoTh8CB3byamTn85UxgUq24gW6A3eHDqCUcNndW5Jxo7x9KGeWWxx54bo7727e",
  "key15": "3RCMk49ZRF1bnYapbzHDhs2NGFdXmnvRiTnCHCRdntFxXyWP89ypFKEaSpmWkY5FvVkthQxGFeLx1rwE3y42mcZU",
  "key16": "5SeDHLdyApRY4643DRxb13bt4HHRFGgxmn5cMxeDuxNzCLSEWX3nqHvMhvXTCxEmuFEaPnvhLq82ktRnpqmfZcC",
  "key17": "3FeFWdPwXKfNSsFJyX9EmDdJ9tE3T8J29vJsfQCWnu3LQtrPgyhjb9v4xTZqqvt7om67KMGpPAvUPnNFFsF8gTyX",
  "key18": "4weRaxUg5ZUNLnyhozpKvZY5jzLUGkeim6FwZhC1Rg3RSaHnCi6YyVmfkYGChhceHGDAwvvDv1aMRVNE8UR7k7gP",
  "key19": "22NpadBP32pbAgeoHEsShJ2WXoDdXLrL8SeuBCETEbXgzGXaChrexYjT2Hter1JuqTDJYAJkUaaxN6ZxChfNJbVD",
  "key20": "2FMKTvApD2URrEhGjegNvev4T5HVXnyN513dEABjA8d4xeEh1rvHizHGQkRnyXbyj18jAunLcDTnYuJJJoArDbiL",
  "key21": "5nwY4zzm9QMVahPifdtS7J9VFdXBYmSWnyVVMg4PPah8iauWpyi9hTtQX8z3KZYtWGWFeKudQ2XtJTjZGRyF3KYi",
  "key22": "284EjHYYjKjnmz2FXFyPX1NNSCADXLjCcioFCgYtJ1iuo7HuL7iNhUUvSUv8q3XNVcJnbRTXn5HqExf77QMeEbAZ",
  "key23": "64f3dEqTEjTLzkeepGJm8pMGYptDHhQ1EmxUsYYwKZN2Bt3n9BMHorgkaAffGR1FxbkwBnny3WcueqvU6mvxjYzN",
  "key24": "EZvWqfNhDfjzfTzSRWsG4Rq3Uochn3e3FTzbMmSvZ8yooNhDbFcT6zx5JCCGC3EKDyUbkW2tLD7MFTVVdn6X2mE",
  "key25": "5V5vGsiWTeK1aJbi7rBcThUyZrj41ofuVLFzc5wvGiBZGoir6okT2jBqVGqTkKMZfriArbZm7tghXvBxCvqoRx5H",
  "key26": "Bh7j7J2XNS8rYKzoYtkuaJXiTRdnnDK114s2ez1V5aUtp37XTiZEByhon7WuBbXtGE9Uv12YZkVREX1xfx46nf7",
  "key27": "2BByoro7mW6pzJLzHhbGZYncgJ52YqbpUGh54bBU8KRUTEq46xgj9uM419dEyryf4m4gqAzMCgqsL8LnQaSsXsHv",
  "key28": "5FQvMgsE5BYEMYaRxbcgZuE1ggnAgBVaMCet3qDqsXEQVZumrEU6rJ1x5mXhmQbbkLE5em4fWkTX2u1aPtDRryiw",
  "key29": "2XGta74vFNSGasfNuspPWdLdsUts4pHG99avpG8n3BQbhRbLhQL3yXgFa5QaMZCDEfJBFkniHDnMAxycwvKPcoao",
  "key30": "5tEQiCc3FsS6FEpH4L7vRqf3ArbW7odzbikAH8zoJDwSoGXfqHPH3hgiwPrJ1WyfWktd9P8v3HTXfKwwNV7ZX8W8",
  "key31": "27TLbrCsKbXatusaWM5Ay2qZHbXszj5UNbLZUfxsXzjWQL2Jo3pfu79ugRk47Ey5SSU6eq8YEH5N3EBviW827Bb6",
  "key32": "4AYnmVCkL8SECJZ1UCtNP81MBsJgymRzLW81i2HSt1mb1oSvPP88gQ5n37Km9Fa6BunWkTFXCWVMCt2oZcwdc2Qc",
  "key33": "5Rd6ZMmm7sfifVKWw1QM4ibgZqT4LynAaUq3sUHd74Q3CBqwdXKMfkbS1PumrRmrLMkAzsPDMvjt9FfASEd1fDSm",
  "key34": "3CSkSLvdC8xxe6M5ghP14jyxjE2ximPZXD62QgaCyFfiMo2ZP7p4EJN8LTFECau8wKiRXTW9a9gZPvovkL1Tz2sX",
  "key35": "5qdr5WaFAaibBRpKZAuoct5C96h1juoSTxRbqvrKXc9WXyP8kJocqHT3DjNtXFiUdH7w6R89kF9gstVPPJjenqHF",
  "key36": "3DHFfjUzYEntzdw57rvSJYb79Q7TKcU9VG8CTePouFYP7kow5SoMUbeFCrkqriu6X4wsAgUyNyzEjtfg6eK8XNXZ",
  "key37": "65yRB1EdsHjEEWcte89Yu2uvwbajG16kavmqBc3txxNcuyecKGFqSDyHtD721wkWkXq2MaMW6DuvvpDqU9bg6EJG",
  "key38": "22vkHgsRKWLpBHn5AfUtWjStLCH8tGfZiAEV7a31Y37NaLNM19LghtzsB4mZpP228nzfPC5odUYmmJZyZQ1MBLJV",
  "key39": "4HcRgNEwRb2tnVzeMWdKddbgEffZVfNWwYJdUuGTLhPxHHJaZXqwB1B2XTp1uruyd7RQLyfF9A1G6q32qgqsAftF",
  "key40": "4HYhqj3RN6kMjNkKiuodYQ4eKtempaDcmj8nVsKxs76nDwwB9Fzoq9nXwiE4yxKXZpBpd4rfMtnNUCrAbV9uQT3p"
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
