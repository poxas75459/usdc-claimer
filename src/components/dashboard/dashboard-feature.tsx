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
    "4B2dd5CXZJjn4euu5iXnoXfgZFJHPrYiU41dHnCX2LFsADb9f9Jt4fVRg7ukaW23aVeRzkip7RBZRqFW3UxHz48M"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4nd8Hfcenq1EprMuRkaftsZTehJrW2gACM1LMkCkdRZZuVto7mPKqKB3qD74im6fFdYZy6z5LxKv2DdzdPhTBm7F",
  "key1": "2EqZE4Gk8Pxky5XjQnu3JYTYFgFTC2fmPKpt6zrkZp22w2StB7shKQwDDK3vdMLu7MVPcPAvvaw5gs9uk2xin6nn",
  "key2": "5wX5tuCep95JNwDJZGXBSZ48xkg8yrN5sVEiLYxqMeaWVq18ioqTTysx5s7oKur6hWxYSfQswqmUG3qev7r9Jdya",
  "key3": "53eprmKRoN9op2fdiwZWX3uyfgq2inK3h7xm2xK8eeK98NcqSJad9sg6QHo9HgxRxguk2LeDUooY3p8iJJgF1rmb",
  "key4": "4BFeGxHqPFHhFw9V1paFRaC1gALmxzGR6mB9wBi3TohmAJycqhxsGyhqhnTNCeBNtB4Xj85SDxWkFq9fCmMrSqgK",
  "key5": "Pw4QGrNgkCt1bNLq8RYfPmkTfhz1ZzRBaena2XfwBGXCGAZKXSaFUgKWmag82c9yzxZFh9tb7PTJgN7XvgHe853",
  "key6": "unDHBM5kiNb4CjTEURQmSACkp1rGBmd2PZZGbNKXMNcyM4qDuCbDdpv7EP3j1MgQhDGiPD9gX8Vg49e7njBdN4a",
  "key7": "xQh5bH82qXo24MfTW3mo7bqmgC9MB31wUxA1nKj6NcqxWBFncYRm4t6TYVNSiJCJBSyCKKWEBR3LBf72HDEUUEL",
  "key8": "66XXNDWRqeVcFDxpgRg1ZqxBm2xEABa515xjYMx4S8fNXeoBtSoe4fE1o53xqcXxTDM2y9k434VSVnep27Yfo426",
  "key9": "38Jm4Fa79cpLBLxdhgnwhhWaT3qBQUQzz8eQ9cboap4t2Q2oNs4M66yhY3wrccW4RAMH8Y4tRJVXNB7JgmXDnpky",
  "key10": "4DDzPyx4kJx7hufiYbzoVg9QkMNckqtuKLyETrKsDW1ZiqbN2Kd4uYD7KZP2UPxTLVsswuQKuaHkM4TpnPrATEd6",
  "key11": "233rLSzkTYcEe5Ez3PyoxgGVkLJESpWoabMRC1qv4bRipqe6M2g24gsPYWc9BHXtyDCqEfUMXd8VtL2RCSBdTpks",
  "key12": "csUx1yEJviYTMGPwvSTvLKpgsixVT2VhvbpsQDQYg8mWpG1HAavzfzncLp2WSdmfDHMWVZ4XzoUBqjHjZCWr7r8",
  "key13": "rQmY5NdN7cMi1QHPXCT7xqqHRJxzC6i7rn7QEweNp8RK2VnMXvUpT7viqQzJqS7K2YS26YNzi5aqzsnqAjrFhw3",
  "key14": "Tu1Acn6nqsMoatY5BFgW9UnJEZtFV2XD4hVnTNeEd4frxfyRmMTHdTxcNxFWfAksmcDroS7no426a2HhxvrvZoV",
  "key15": "4nE7of1tU5Aix1brHMeENhwx819c89UkCxPuSphxJhLJbwiSYJCAekx2TwopTBH7RPXD4TjKxy8fNan2KoEjE9sC",
  "key16": "34vbGRw9DqueSnhZogjJ81hKeMnaQLfLCMZwZWsq7GkRzzcmpkvY7754qxv1zcxNVbWCugAb4ayDhoscr9Yv64Df",
  "key17": "3oMBgxJeYJgwnNuTqbdxmkdjTTavyYoCwPQZrM7PvyXk4mYinnRfgEDW9HRTHgUK6jFG3YPpSaeUUfdQSCNdp5Gz",
  "key18": "9N7gyk4QecAxbL8UBsfwxz8gyTAQWizbX86aBMPYCm8tqa5Ca5bq9QmvkaDHo55xd5L1ZF8fkzA81cGzxRHBpsR",
  "key19": "6CwoDfTPfLzbCTajzh32TNpss5i1Xes7oEUfYCLuVew8K8kuP3mFbQED61PmWxWiadcfXbBcNJMjPUW8UA7VPou",
  "key20": "3wDdVqYmSe6GjBZYibejyCXd6DFYWuH62smrUDoDAyXuc2fmJRYzrNdwFaeGhgFJyzgCq1xPZtnZTtoLVFTK614c",
  "key21": "mwDeRyKPf6A59oTgJ2MjodwQBVw8w4Wk8rgzfFC4uu9DdDWVRcXMTem21pGLFxFhWBGMhjLH2v5CMxz5riGUtQp",
  "key22": "422bt56LEebVZziRKSJxYJ5a9KgD6daQPDbTcVXsLYRKZSSo9w2LzSi66Yhf582PtA9hNBybusPvKmJCH7zibuPP",
  "key23": "5beCuKcjuFQHLWSEPRJqSWsGvwx1bajfuTW3TC9LsqJbVZAxjysewQwA4Hq5tCN5wxdBkYCRTsFptpvMUPVHTUr9",
  "key24": "4vJoffd66SohDMz6k9Bjr7Fn7CaWaa9HrYX8cVa5HrKE6PUux99ZssydsGA8MeV5uNnVX6Qc1tqMwEKgGPHinLW7",
  "key25": "4vDEwA38gLbsKAiVhF8qsFow971AhPwqeBt4rsiDEyS4AHpkcxgDMt7W8i4jVdm1MbPj11BBSvTN1kzMbKA9zDWS",
  "key26": "636uKNZvxiSYcebBeTzRLL5T3jCfmPU9Rirsrn6A5wrEYSAoCD7YCnjx9ouzJXRfSg5xT2yQPjFnZALnzjuBtsrF",
  "key27": "5mYZpfrQ3cYqvyJj9u5TKMf2jJcryT6pGXjuwuYEsbNaLjKQ4cfgukyzVkuahcefbSMsSwkbRr7iCtatgVB7Zncf",
  "key28": "3oFvFqmdU813kjqpGojv9fvkJJxi9bsva42DreBZ4MvLyVsm4rFpFu3J9E1rZibkaM2uQFxh4nnsctMePLJf19Qf",
  "key29": "4iHriBH2JNjUkTTq517R33fHWa3jhHRdLxg6tmQCxxiVrmkYDaiaCy3GQsJ8ttBrhh759BQvoDxDDCpDm4FycHgw",
  "key30": "3UhWdtSRws1nb1G17WMwZnjFZW1Ehy52f3kB7De6imv24NthYc9c2b4ihXQi8fLW7nyupAk7Qo5ATiVLPu94eSYZ",
  "key31": "4JSGUztEaUtDqfGgc4fQQPss3RSw2JJuD53QptW1DBaqiigbhLU2S3XuANWih7uAXgNaRNrV2Lif4ifZ8uov5Au8",
  "key32": "32DVFqSXU1Y8PWPFgsarCUkYUH6rqtaRr1sojJSErrsDLLpoHSaCs9m3KTqGDoT1oyDsSCu3JbZh4FsJKENwLPFn",
  "key33": "4LPuU7kEf1S7w172gKngvE2FGqC3CE7Jgd9nZF5oAcZnNSDr4sPGd1w8TProGLFAqvJS6byF9Pj1CGDDcBaL7fhH",
  "key34": "5bpsgW6Bao3KeBpnNG65mUy2xkKqmHtz39wUvEYkeGjLVzo24AYazUhHmq6p8iLFzw9KnQznvGRnPhvcwBz4j768",
  "key35": "2DqthL4DDBEPmEr4xh58hidFn6kLKZoGrAdfM2ETmvuV5VdccFioHeh3Q8N7riBoj3pjw9UVeoUiRmeyS9ziY3nQ",
  "key36": "4CaxE5wUmmaWb56g8jJQ3RZ4uZcpLF82YjYzFKLcc31T9nq5o9nBgH2qcRb1fwDTzhDbdQ74vxbbQPprbJvrgtHw",
  "key37": "4XcCbEsNz4TdVej2dfTYiyfgviL7Zh23hYrCJkJ7VK4hfLcaGQ5JQwMzothDccg5rpe4yevCXvipijo23SxMKTvt",
  "key38": "68HLMQ4xejg16R9RfvnxRMopExXPEJKYJco7WM9656GMhQJuy7cL7hURKas91BN2MKGerhtL4m6yRX5fTvyP12K",
  "key39": "656242SJ4GE1EvxFPnHuzY6Vbp4zLZ3yQVU4ixF8bxCAAvuqhifXuueafQBzTYh9f6xsG9VTdZSHef2wdtNR4zX6",
  "key40": "4nARYKrBorDgbqtFfWujk1bFq4ta2XnYiMjF8peU7kWdHhCds9CfQEjFTdgcWcGVq49mBNFo7wMio2id1FqAaLJm",
  "key41": "56x8v2uX6eXCNo8uKcvUkiT681k5mqbA5FZsKhq239q3cCzNuT2bbZ7vpWMLs6aTPEcW2QNo9rzfddAtd5iLyXBq",
  "key42": "3LwSXHUUak2k7kKNqq1pUN2fomzWCx8NNxTuuqbRxEwJTdGbnCt33Zn9E8ojJThrKT6DKjPDodBNezd1qJuiTiV9",
  "key43": "5WGA2uXbjytGDsGTsNz2KPrbUvQ9EAkBK8ywpo4x6pihiKhnY2yTR84fzXwi3tiJuBMR9Wn1x5sbthE5WgtKyR9",
  "key44": "9pMWbXZycipD9V8iEj1z4SjEKJKqW9m5HqWHGiqKkjM9yipkf6otGQcrpeoo4iWzJFxVMFDEQZsuBQH69XBAkjS"
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
