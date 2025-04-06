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
    "3Zhtk9uRFh7wqW5LNGPkbvtmheQZ49LkUzMceBqWTCeyMbCtaFEDSHMqP4VsjG6FwPUetdhFanAWtH6JmtM7rasz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ykWgFd5Ksuz95vhMZ4Wy19cAPkfx3dBZL6TnqW3qtoT6JwYLZm1iNK7wH9j6fmSAge3CVxss1iWvNhSaB5LSnkw",
  "key1": "4khffcv4SMizrunhLfTsNcsETeeJRNzCzi3sVR4sUYyUnzY2oYQozjzkWtgTYzJMWWwKcFRtxXoWfBvmskmtpu46",
  "key2": "3wwFNrGmip1dP6TwpC3UPyo7GCMRvoyKKX2uo4QtsmA8ZkCyeJgTxbBTtJWjadBMmksh8P4ddg4UzwGgVRkGuX7H",
  "key3": "2Q72wf68NBAyqqtVg33yoxs51BmhfjiNbnunk4F7ZqC9z8mXvivBBcAYqhUb4CeomYpgbwFpJNEW5giyFxW8qMnn",
  "key4": "4VB6QZwqzLCoqdx8XX92sLpvQAgb3CMG96by5Mk4m5NudRjsZkDixPDX2aGxkuazqvm7bZqRFmVpg79zrJ8Wrr9J",
  "key5": "3ACx3BzSg4DGUnWN6PUKhmbttcXe2zrz1T4dx5pBJmBXhzV28CXpLdELgd6Y1dWGYdLjhizYqgvSBKPV2xdqKGSa",
  "key6": "517Yn3duWwY1seBw5Vmwg3fAUBN8wUtX6JYegqd3YwM2qKjmvATxyjPiEJoBAn7DjhbYxFdjLoax1Ze1R9xuFVbQ",
  "key7": "5267ctqLq4S6cas42BZWUbE7NM47wh6HGewLX9A1GqPRxHaNyQmnvazcwCaGGS5syqjkyvuShGLDohqexePYTyXz",
  "key8": "469yQj1WR4sZAHN1w11zaimGgWwcFNd2jJr7tGgvczNSfTSeouwUJsG5meSiLMi3pCiriiaD1PBV7AEe3dQZryGp",
  "key9": "2vQaLiqKiVwrcpZH2cWJiKr13xgNAHtQxCb3dVW1E19L9KHV6rkmTGUYpK56Z2RsecneiK92UoK34kthzDJJAQ4r",
  "key10": "LXCkKsUnzrGxz4Ske4C5MbBbYkrqpzQxv4cv5k1w46FmgBwBu7Fi8khKuZmPrq4fLCXigczXPrDyHFFC7nEeaJk",
  "key11": "3v2nzuVn9TaDnN5NpuXgK3JiDVngmZ59hvyCu1jY393v6tZo3hTPNAikVXMmB3AT4NEcxwddyZ9TUJRWg69CB3va",
  "key12": "3d6aA5HRnyFWMuZEnTnSaEBF52yxU29YmsbPA3KEBf4UihEZp1rNGA9VwfU4dWC2diWhmsMnWAeHyFRaCtj1QA1H",
  "key13": "5RDNmiC7j9fQhdtLHYVvNgbsdmpKWtLMvZs2zZ7kNZSjR5HV5hLw77yCoEkUjdUDTidHZNqRzzWUG4numbSMijky",
  "key14": "42Zb7aNZjH8We583vciAUDnrALSUZ9i6d41ckxrZeGPdacSpSjDhp2qWMwWF7MgQexRbbcA9sAYz6yLwqz4zop7v",
  "key15": "4BVX6XTUciKfui8CNxJWZFqPJbgpoV13g8vgwywcwvf7KWr7rYFhkBLBiVgPLkRmQEAev9RRmshumSR8qfXGYFUS",
  "key16": "2fMNzxSbYvMdoSVscyYykd9LVgieies2bws2RTiseWH75LWsFCA9jXZsKVaj3EXqJqhkWma3BpvqWL99xbbNXEsG",
  "key17": "nG6joVtCw7gxPho4vQTMqySM1HeAF3eNqra5hg4HDcVAYbfiXgfLiaWLVyrai1CwRQk791yQxg4ijCPcJ9s7pnA",
  "key18": "4b5FoXyLHqKjkHZeD3kwZdqGzzmG8GxGTiEPGSb8rHwwhMjExdvzSHSTSz5PoDd3rA65D51myYzDev5t4cQGrvXB",
  "key19": "59xTAbDXnT1g1zh3tvTSQiTUFr8aiy8CFHYmwS1i521CrL9big1uQF5DumBdKMhVJoyHuUSYATmapm4gkst8AtAF",
  "key20": "3auwRqerzu5b4rhegBu9iyQYcMfwVpmk52DLrgK15w5TiLquNFoRLJHrEM4QyqXAbxWBvGwLdfn9gfaF5Y3meBwq",
  "key21": "45vsKDSV9V6ipN27x3nboMoVCnHT1usHL46ZkpcVDo2G7N33rPrGHZcPCkdX6qwoQZUWVkPnZmLWzg1Q6B5q7eKC",
  "key22": "3Jrpzn86y4zBcz8bKkPwaCqWfxWQLS7TM9ymw2wDkU2sRuKtPSYTKvUK3sF4NTsPBhr6ptGJsD3Ex9jwwhqcNkhP",
  "key23": "37komkagya6RVrvs9WEuwctfSw8DdPQS3WvGTCrg5NZzewY4AWmaNsJd1qPj22KW8eGQrwhFSoUf8UQ5iMiNeAR3",
  "key24": "2SmmiRxqrFn7YsxAZgNroAu1w342iDTUCEXMyeSuntQJtTHSAiSw32XXUsVsSJQgRobZKo7V1Q3t5yauXowSAd8Y",
  "key25": "5EAV5o8nzkYrKxwv3pRtmfzXVBXZdZagDrntzJmm1FoKSWwiRbwTZ2Z3J29zfD8KmCjSiubfJtdyoy8Pw1Njxb3U",
  "key26": "5CPyNXhjo1oAUpuApSuD14TgCHyxT9uqwPRbWLgMjekjcRxfPgSYzEXJkK3rGjFuH3s7ETpagp2HVwuAZMg8WwJ3",
  "key27": "4PhVsCv4sT4MaciRTGtX8Y6xVpAg3jgqojy7UXhg3PmrMY4kFLmew1YYZSW15Cv31K74syXsQyPmdghCUzEuQJFS",
  "key28": "4xFx1Maj6ZegUGyhUQYwWkuCHuYrtUGVxNR4jcpdXaHMLpNV84eaFnqabuQ1MyWg6yfennLuLvqqUWBLEVSS1pDA",
  "key29": "2JqoB3i8MeNUvLMMNeBkgoBRQtAh6Ey7UZS2hWAC5ctjMoZ81VHLtTTEUhiDvQpWr2avgQWrbFpsFpq5AxGAE8Xo",
  "key30": "5YyXF9EGc38RmwBPkAr3YFUE86tcTFjjU55aAqdprDwS7h4QK7sx4JaJW4GdE1EBP1bNrVWkSRAEHJL28fe5oCzB",
  "key31": "5NEZonTG3hVZJLPEVrHQVkciibwMQyziv8yR1HGoex6PBhHnmuQgbCTfQNfNjiACgxx9mjAqmTfz4brAUfkAfq2R",
  "key32": "5Xs8L3ipDdRUJLhRRDJhJe7CkSBsaAXDikr6JGDWR8ZjZ7Ah3sHTkLqR2VnH8R7agztcir4CKKWUAF86ew6M4jvn",
  "key33": "4sVeUjyRdUYTX8uNGNZxStkGzBS88AnKNFExzFwPWpTZJs9xLvgdJQw6hzgV8XfzNCCrLWDcQbxZkAm59EV1bgMi",
  "key34": "Npv85zmyFpTxq6kaQVNGC5xFRxzpumVFq1PRk3Rq4PRE2E8LXRH7hxaCSr297wuLBog2Nd1CPoxe61BgLCU1RRD",
  "key35": "3ssjJdHbZWuqko1eNf2sHxJM6FccSGrDyAsmv6sV1qsRxG1w19sHRHiJabnSA26B9M5sCKj6q2CsvRYSGeJQFqun",
  "key36": "33BVz2SQ41jfKNDa39zeQtyQC297XS8K6YoMvcF5pJRyEnk63djjemY2mHkd7HXAa7zXCFDnRVVwGw9ZwmGaxcL4",
  "key37": "35jQMVLezeUoULQvpMj1ewA6EfpT78M7PQhrK1fbcDzxTfyuEocEqg2TTHF96CyeKXrYhS2uSzEQPomqY3NPkwTQ",
  "key38": "4YsUNY41gL5M57c7i4Cxg1TURVAAexoytPDtbWLzu9CBLsrDkVP4Wxy2NfSEESHpAfB9sEZhswG9JPBP59qA87Wf",
  "key39": "5UdmzzcQJxkWvSecqH8Brfxew86PjkYZpmLE9RautpkX7xJxd92av6cBT6bxwepkbtDhLtBEHfuUR2o9uXJT6ows",
  "key40": "2zUijCkJhAcQHhu1WZkRxDEcTPhG6hKUWuQrwZt9U3tDVr4WDGYTJwwLwxRQtVcgoyy2CCqXNUH6F69xBNuFdqSe",
  "key41": "2uUwxPn6LXDpcEjGBn41gf2NQSW463uRubnZa4E9PqebT9tUHfQQwQJs6dGdkUgL8dbSymXVAECikGR5wwBaWMT5",
  "key42": "3D1xLzbUV4jC7HFe6SGFt7fhc3kAekHRYPysRy6mjxfwRpnq5j232n4hwT68HKT3JHZeYgtpyTw3Rw9wECLqj63Q",
  "key43": "61bLsPSE355g8J9bmV5QHyCyBVsgqu9sv5Bz3YVXJ8Qhv2Hqm3bACYmt34oRhtj3mtTUR2hBYGm3k1VbE9df68oo",
  "key44": "5drYE1PfQTUYxbLGwL2YbbHL6r42x8A1udQB9ACSqsfeQjQNDH6csJKQcvetADyJuG687DoTbpqbrHUMSWA6fsJe"
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
