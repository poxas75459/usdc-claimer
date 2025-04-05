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
    "XW8ykuSoSfvmJ3RWxwq4eQeZ92HH3n2CdBs8g6KJLHtVEr4yrQ7pKoJa7WmnwPx9GTzPtV8ioz9y5tsVrkSxLou"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ZESQdwkCMWkRRgJiaPUNjbizdAkoCyG3v6TJUDM7VVpR3hmqwYWXFQQ3D7QJrPKFF8BjB1Lcf2prZCMVDFCHSt7",
  "key1": "GNt8BeM29tMxScg27icZKPNyQpRT4YVbj4pXhUgFLt5kxZjVazbc6JshPWqgiAtnyYejGDS5gPtqW8EniSFXCxm",
  "key2": "5QGTzjeT3cMTKmftZHcMKvYGVNHmrPfXs5knEf3rNAZjWpFMCRvYqRJp1GNAsr6pGgJ515H87JqDq5px4XgDXYQc",
  "key3": "4neTuBDRVgCJxMnkfMKSymzm9B6J35XpfUNXDGtboeM2hovvkPk1YRAYH3xbTRSm5upak5xdUgvTVCE1DpFHPaQo",
  "key4": "5weq7rMzhu2KSoZfcJxCWpCLY7Gt8wvXUMmCmjT3N9otngwoBSSwCtDaCnKhjMsjppcC7dqa7tyxHk1HX9ZbUFdv",
  "key5": "5quvUzj5wmbmFzPStywMBUJ986C91zTErnTXUuQhqrzfSjFTJ7n2uhqdKR4rn21ETsFMQDL5mqqKNGDpDny7uk7C",
  "key6": "5mwnFTKwzCuZ1B3SyLoHDaDwevHih8sFakRgqcYrAnmuRmiT6QmpSjPFSKWvEnionX7UADyewqPabatWcV5JhKMj",
  "key7": "2KL9wbssYffg2uP7sbFDNgYsQFJGevMLDCBUHzvLddUgT3x8Ryf19wXoaAVoEG4rmfRsKAHydwcMjkzMfHUSvJxA",
  "key8": "4keUPfVuqVeSNK8YomvB8ttMcb8ZX8uzsGWwDVVMcqnGMz7Zrgif4MSfuLfZRCookw8eibrYWBoUrG87U5hs46D1",
  "key9": "2eajMyEL7A9dBqE77AM5Dhd4esDFYzGkfhPtbAoK8LaFiUjFkmcQQW3H5gMyqxREhPsXLqhfey2dP7NpHQqpZd1V",
  "key10": "5HgfPC96NXb64a4DSrNwgcgUpZsm1Y9P3YQu6Fj3mVY3grHJGyaqGjJmLQ9gbRLJSAEUbXUVzLcef9ud2nvEKQhH",
  "key11": "2mceBQ9eahdgRyDVRMrUH7TWEvwFd6BLEbfm7zscFTUX33vQsVSmix5JAFje6QmiVKmAv5EtBD6SSsu2L5Gj3gyd",
  "key12": "3RX4UsCHxny1tYhrH2Tkju2BrBNJ9amV8bGxy7nxCC1RxrL59KUKXhxfHYTqyXMBBBipe2cLJQVEEHAyyKvqdU5W",
  "key13": "4iFAc6yxuiGP4EFYYWJamsdLyopYmcp5SxHmf3PxPAAy6ukHV3bUiKLpTfE7Hf7b78vf6S5VWdeuhvbSdGzGzvwW",
  "key14": "2cEhz3EQm3fBHtuWvX6zPe2pDJHdYdHpkpjn5SdVgzQbpYchc28HdEchoupD9AWhBnAjY1PB4u2A9YhspJhvPcwc",
  "key15": "32oNafUwpGyPRoabqdwun4HQr2wDJVu5EMBmeUsfmV42bFwh4xfayozmemKeS5anEqLqAt1WfrRpfjppdYH8YrJh",
  "key16": "5MkgFyKSize5TP36wHr4wwjrvgDEL9G8YWhKwKtEUkwpDF1zeeRVdt3rBpEEJkayN4uQfxJyb6HQ2XiZPf3AnFQx",
  "key17": "muezuMQ8nQJQA8ura3j3wmuRA8bJsj61aiPW3Za5DWn7CCzgPASoDT6pVN2X8vWLGyEnsK6rVw9W4J6qdBY8vxs",
  "key18": "2M6CDDqQqTBLK5Wtej7YdRYsxVm9YFFCSKcQ8AE5HtYUepy3e9bLs9najGCLLUdFbq4aWM37iyjNy2EYdEWqPqGj",
  "key19": "5yUfGvrbpUMVy7hsKrXBzwWhnBWF6GS8iJSv3w1X4j3cQZ2oQ5ZzfEVe69Pt2kWhRcLFgqnAtrEhhTj6L79GY4L4",
  "key20": "3cEvxUJW6sHKVgu4zE1EtVVMmXZ61bgSbSvBWZZHzdwU3cyQQf3wDfwWXJF1TbbxMPdzS8iJDWCX5TMfddmk4Xrf",
  "key21": "WP5SzekE7XJ28aTomDYV8mds5mPCfftzmxHMrX69D1GYEWmZcU14ESBw8u63R498jPWP1SxqWYaSbmgLUj3KGZP",
  "key22": "uyipc4sRUBshS4Y3qS46h3txuq5cv6F61TpderTmx77Gyq7o3C2E1Yc42MDvUDhkVRYXSSiFhm4eGZiAxS4qZVh",
  "key23": "YwowN2cRiwmjChu4qHawRkmo6Db31Vj99GZrz9VKYaATuefh8tJoBb3iQGiNLTFtUGet8PDgVozHhxhh4KHkGdk",
  "key24": "3GcRi48FPxdfpozF4mkSCLsaWJgdMFJfZB4QJKkpBryD3tP7xwygtPQ4FTPsTTQLqgDmrHG2NXCLebtXncTTt8Le",
  "key25": "2sg8rwo8dghTPnMDs8tqPpMWLiDj7xiah1qvVnpKXY2RVzXVKi1G2NwE8V9unwdmPNCq41NrpRucK2v9GCpaJ4Gv",
  "key26": "LHyVpgBX12ovHMbvie4c3gDuRJWQBejDeuuv6sANXJ2nrdWXST6QfKDkoJV7HxDMbFEsLNzngKsamXk5W3dYroq",
  "key27": "3UVt1ZxQ5JEPw2tuJG6uHZqP7zQVEVy8i2Q3jpBCvMgyFuFr9tfj7kPBXuf3sDkhty3ndThunsKYeUwirx6qoqEo",
  "key28": "43yharAiVfM7T4cLWkzDUsM7qmvLigAPV5ZVCSBWoZv8qrK7sDmb8SUAbYSA8eqT4bnvqPu2d6AtCZTpfTyQHi3X",
  "key29": "3fe6rWCQmVPA2m6c3PtCecMQbe15ZPxcAdB4C6t4SaV4ujHPwGvj9eq1vHkKQ84oQLGLtMQk8NaMu2EPJZ1NxK4A",
  "key30": "2AMU4Uogj7WaUTJv5k13L91gSjQhnLbFyWwUyYAndSJnZGLYgGm5TeUkwu81ZkRHSTDHhYNnmRK4YBoa6wmBHo17",
  "key31": "2RkwfLkXzUGEVegoKM3SkyQvjhXS1goXt4cdPjFskAANqvcumhLxsgtzCMVu56bh24sn8xUNNfC1zYSMLDKVu951",
  "key32": "422cYDNfDk1mrb4QDWfF7V1Gzfa7aCHdn87nfeD4pTFEvF48VKaouLKxFNm2cUoPj3UUPjDogTQeotw5d3e193F2",
  "key33": "5b54e1JkKefj1bkny1kcKXzrEGLB7xg7M7pkhLW1orRBmrSq3VnXcE57xzoSAuuc2JD6pBYKzoAZGriCjRNDdGHF",
  "key34": "4w8YA1n2wjGqVyLaWoCMpsL1Gw86UDeb3C1VFZvdZS7BCERdsc2e8NeFv3ui6KMM1WCNUcrMmhmC4WBVbBC57EVu",
  "key35": "3X1Jv23iN3TqEgPTAj5KTJWXXePUsUSiCtN2dmZDNqEqm3EQqmBuPBS9HRtC9ix84DqSwJnSPmnqu3gySCjmHzif",
  "key36": "2UYCsf96RKktPBLnNb1QKkNHunbNMv3foMJ4wCHg32Bruu3R13Wa5kQEHfJMjxhfmHfnRtysZCiesTxGpqk1N3MD"
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
