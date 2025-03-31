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
    "5rqUGaMndKJGpCxjqdRASBH2TsYbJp5gNEjMtBCoVNuWXv4qWUVg29Au5shKrU2PfvcQTwu9WXN6P9hp2JNWLHGT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "oUCXxUoqrrARAa9vfP8NFxX7KnqQMASYHhK9CCAGjj9qPacKdceVqfYvVjCbVxyFeCAYPARzexmftoRHeL5C4dQ",
  "key1": "MPxZ6JEWcK6vG4aan7Hina4e9C1aFEayQTFbzcHZPvwXztvoj81etbDGpzkL3sdiuYkb4KjHM55KvFeccJ63GpD",
  "key2": "58mFDrsdkE8TynTqRxFqFQgv4fiD3otFj7x4xkhNoyMjPyT47kg2qFijWTBVKZNveDz5WfHrPVjoKh4WGsofAK9i",
  "key3": "3FPXEPH6z21xgntaKVNtqyyDX5JZfZDnu7p9ycEkvxTh8qMSq7NL7CHLJc3XDWBvxBoEvoExwKrT9MehRALBS9dC",
  "key4": "5ECnw3QjoovdEA2beFuZRPmLj3i9bGh9aLLWKBaX5HawjYi71rChKf5tsiXZyKNPrF9S4MEQqM8FzKM1KHpDn8N5",
  "key5": "4MuP3NxS9hEBRAPr9soXaCQYzhxp4XQvPEspvEDjM5yL2HdmsJVuRqGdEJPBb56EpnDpmDE43jhKVrQRrUrqzM76",
  "key6": "5qiLyFotnFcne5FvYj1SByV52dP7ikDtcdhJCQCxpPRR2VckrugKUWExNKLXEv82FR6gCom8pMtPZy24c3UfZh6p",
  "key7": "5pM4F5C4TRVRPMbDnj6uzcE5LFNuPRk7imwwZwMC41y29Z5vdznBM7ES5QX3PaJbXFEQ1J2VdodUPdde7riWChVZ",
  "key8": "SPrSES8G9y6diY37wNFfd7uRb4KKAq2UejAA951j1mbrLRBiXqhdcL2twkhryyw5QyCfPHa4hpLZXrciVUde9yM",
  "key9": "rF8M2bGsAfTb11mNuxhGpRWvdmVcCFF6f9a6gnjgpyiem5bgiRP9kBc1GX21dPyLATscVny3yLpT6kR4a5wJvbk",
  "key10": "33HKm4YLeqbmuUFvokSSLF2kEf2jWeuDPu7RPpQetBWMhHqdEHPkEtZyKKPgjtrZoEK2i8ShVtU5MMG1w9Z3cbhG",
  "key11": "3cQGe6Ya2KEJM91AjDzfZ8tdEaBFjEVLRpAds8f7E4oA8MHs9epGLmbUC6JE7qtDsWL9PxXVNKoGJEHyykTxfeJ7",
  "key12": "4ohy4q3HtfN7rXY1bKACm6e2Dmfxcs3orYqNJKrdW6s52dB4gHsUaa7TsEiCaWhaWxoDYwMEAR9rxueGJ2wWQAJb",
  "key13": "3AYi6XD6UhYyga5JPAm6zzGZ6H82yCZfGebR5o7W1HvREnjvgZCUSLoUSPFxMTZYovNuo7kYxqU77Dm2T4ZjyTTz",
  "key14": "3oApQ3KuWJZ1vXu8dmF6CqDospggoNuUEH85mwRpL62CRrc6sTTURjoM9PjHVZ8r6D9GtrSAW96Kdgcpt3WaDYUM",
  "key15": "4jrsreAEnLzUbrqpaLTtxEPQkZM3sMpwTjxLHwqwv4PnnEjndi116TFJVUArf2ukrD5bcFJR9kXBevRM6fV6qKWs",
  "key16": "4iqAqcvWbw5Y1Ui6nTPqXdGhQnW5gkDPnVdRvvwSZH5SkiGdcpvK7ew2o4sX7PGNU3dEtJ667p1dKY3XxV45bkpT",
  "key17": "tiWGzAqX3JERQWJznT1oYJfzJBYP3JNjAE3DxYQ3TCxYraGATfvfm66RM1CnpDzuTkLZw7qFE1fBu8NLa2CBzD6",
  "key18": "5QfKM1XsqWiZNBZLGkKnmV35Go8Ae3hJsiyqwDxQbC1xBrUjC1f8WDqXRgf5FdHGtXSMscdcAKq3619fYsXzdw2m",
  "key19": "2AGXt6wpWPiqgmMRwr9kUdmfaSKFvAYPykguBCgxvnScGNUjr4iMScA3Ga5UjJAXysYwkuq2RVsHT7q6DGxTMEsP",
  "key20": "2SZd7aoZtqg8kgLDKXUxAQk3zzTZFVZHFnRymY4YxzVfS1A238chexri7Dn6HvS8decmoYcGtijdRkZordiXUzT9",
  "key21": "4w54ru4U7txQTKy71FN8f6v6zfwPdBPRsDMLTEKEC8LCq4jtR6MBovGDo8Fn2dHvVdNoRtcL4FLKbKoD6dbnraHU",
  "key22": "31d2XDbLBxN4jyc6mXV41WGF6xAvTjgKsZQSZ3NSjh9Yv7cqGzeKi4LU52XSFGjGBduZtgX7PJpC4pxeCBDRaoCY",
  "key23": "46euNcwDpVJfgBwcUBXdjtqAQsXeUcd1AcvGcNRT22zy3BwgZyhWjMWdeK5pijiVuqTHG1fE1BGBt96LnYTpRK7o",
  "key24": "4oJsQephjgSNh9uJRFjKFEyiFUPQNFrcceXcpUkujE5F6Dhr5XCk5nrZToSM4AC1Bd2MhwvLevR58DX7Nn9jFbxt",
  "key25": "5ZXcSuMrTeRAVp8HVXtK8P3JbEdFVaiiCgkNeGL8u2HdwgH5iDXZLm7UwWFtzRhYbpAjaJNzSwjyzyUyfHemmUiC",
  "key26": "2BTWfN4MHsTEnE5oEnxT98nevCnmCrfvyZaDpDvHJ7jt9tJw9KQ1G4xTEVKsKpex735oze6ewfsCpzxJbEaEYgzv",
  "key27": "4QHZBY5rTww1rkxEKoKhigYuf8GLsCvRMQCMkzomcwBWoxw8Bxpir9YLFUsxTgjM9VpvkGcWUmsGE61n5mQ2DP3R",
  "key28": "2Vbh6XXq8nauRE9C8LXBmQLa3g28q58VVTqvBK9H1z7LYtJQMagLvBtjsG9nbfwu7xa9PXfY2UvybexHmpzXjReW",
  "key29": "2yNaMNkY2j3YSyx3QEsAnKgvw6hdSmgmnwUNeqgurDpBRSJAEzYG66MCNSpLdTm8ALZNVMFDjMmPVYraKvYDnGQe",
  "key30": "5PeQjdisoibYHNRvWd8qQoqATeKUEjhxCs9pu3yUWMqtVVG8Pe2Vzb46D1PRj9vJhXDitRfnUS6386e9BSrTHquV"
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
