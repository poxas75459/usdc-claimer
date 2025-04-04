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
    "294Ug6sZPAFBkXijsV9mwr81W8PPKmhAUifakPsmiL8nn3FWLhzj1Q4fhQwGSW6DjCa4bEtCTgo2sSvWNwDX5PjW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "377WpxzHyP5UmbCLjYrHsY2muVEMzcnWTDqdJjhtwsJa4a64AThCnXiLWp5SPuTb56KK3RsFaogan2WF9qU1N3Hi",
  "key1": "3jCeW9CM6aSMFQW34Qs8CojaYK9wrLRyYqZbdmy774xinbPrKSvxGZTuYnbjGKYWCjw5jTNUYxeWauYe83e3HPGr",
  "key2": "3aP6fc2AXth8seSiBpaxZFSDnCV1b4jPtE14QPvGcffEZ4pqRUEA2gdAe6jRtrCYxjKaxNm6R9NoEZNUaaAgNne3",
  "key3": "4nvL3Myeuezz1dYYvG6LJ41CkR2V2yHfqwBJ8KCTEQ9TopK4GVykZ3EuBcs2L53XNpM3Y3A9zzYoeoCukPjmrEgE",
  "key4": "UWsLZbwwudgNry6A9p7un3Bnqq3mEREoqP5yhjWrz1pEipo1JrPXqeHaGYTJdzpggU9CWLvf9ckFVmVZdFxXEQn",
  "key5": "61PjLwDVuWAuUchfX3BJF8pGM2Yjd2vGJoL1dLvLtkHQsv5odogsjmtLNAbV2sxK69dSmushbQu9AWmcHFQWaaSZ",
  "key6": "3Psa36NVaNo4X9Rc2aNnV1GBBRdyDHZnowTQJ12B5UFmQoCp6WvhsTdBWUCzksxbJG79LoTE7Z76dtxTuLFpjbWC",
  "key7": "2t6bXsuBrSFsqzRM8XQYtSysyPQYsBUztoAPhQ13itQoxRqotFpBuTYc5mQCq9q3Vd4qPg3ewL4876cheVhKdRTq",
  "key8": "3MUKHk1tVy5oytYoLgS2PPS7uucjBL5wHQsLZB5sdvAruGVZtior3n8PpwMh7XNUYGXM6ML3z7f6qkdBTShDXHMT",
  "key9": "p5MEdxs5H5upv1o2N2WQ8YKaAWyAzA7Ac4y6Xo4gDuoQSaop7sYDLtSANukMJ3R9JQPCu3NMJsEdaXb2mDBdWBP",
  "key10": "2HZ9L4jLRzbm95a23VUwXPortkTznDzeEmLAtSG2bcnRwZtfGnZ1hd2Apa9Y2212HitBdZvhrd1qjCMef3juKuH9",
  "key11": "3XL2FfjzrR4FsBKHkxfhMR2DURjZSdr8CzjcfZACB6nLshfMXE8NqKapYZ5PVCFUUYsy6CupKEoQ43Amzt3gr4w4",
  "key12": "5YiqZmYYoZnPXdDdtuo8JsxXHarwH5EX8yWjUFuxbSxbSnRsFkh2pd3r7gGTVK7k6w5R8vnFEC1NFKzHWKiAC3S8",
  "key13": "4hqsiZaGFVd6R5KU7t2YnbLqCFFXYmo7VccfcMCChbXxUddMTrU5NCLG1d1YJxx5XabAN35pGPspYXgJBfxMqpqY",
  "key14": "44mqLRjZLp2fZQ2auJMsMVqV5NqWGoFty5D4mZo2aS8q5thCXLL5Y67bTkvMgSqwoK369ZnbHLKxvT7PasirAQpH",
  "key15": "4uj9WitpJRgEG2XJ1TsL1fk5NZPCNiR7C7NdHj93g6MV2SkL6jH8Q8oXkUymTV21ULPWnsZWsGwdYWq6coATJRUg",
  "key16": "3LWB56wXE4hoLMFQyCbGj959HeBVbwgNzijfip2R94dD42U6gY8MmJnFpRDKdZQmGaFKSYpVivjMju1fJG7DLDLJ",
  "key17": "BXvy9o1HWDraNRZuzzL5sokgyxqhY9wJx5XEqaPaHSd5dbpL6u9Uz8Jb6NGUUPb7rK6bgFaHjuZFyHf9VxRiuEo",
  "key18": "3rxKEQ1fpQt7TGboSU9nMKDP92Kkm3pvARhc9L5B9d1gjLWPx31MMLD8ysPRXp1Awi27UfkyKL6DV9xgrYBWEcBs",
  "key19": "n6VERAo1dMKgFscH949qzFP83Vby8wyM7MagLq6cFqiuKDDC7feNCsPNuiskCZfFtsK542vRgXBACF3aiTUbap4",
  "key20": "2feEGSnRU1NJgJZ6tSMV2f1uSCZAz1KqapYCQM6uVSNE8oBH1eXQ1yfgiki2DfoE56SxNVQTXGHRdpdpyKC4k6gT",
  "key21": "UJmAHrHkfTBJo1oSYpMh123Bod2X3QhZp2BpGK6ca6k34QyUmgP6SdjURMZtjDcwcvyrjX8JnWjfxBqgAcGiWx6",
  "key22": "4vMu7qFkPVzQye6PscdAy1QRe3782cyeMjFMSoxBTqPEQ1Dvgnxa7NPo3FcXtKM4t1DU2FACiBEvG25MNEGL1JVF",
  "key23": "GumLWEbwUixEvYXoVfjTykoZ6uZSyrLVZL4RfJXWooSpUwYf4TWE28pRBvQ3MFX97cDcy6eEGsJNHbKZzhjUUWj",
  "key24": "4QadBJC3xg7S3LqqnbwVYWHuPNitUFHPQiucqXYZVZaRGDHZyLgvMz1ak9oGEeSmkVqpGZmhJho5gTUrvQVknNoq",
  "key25": "gN9rTxGN8mKTWMazjdJ4dboYyMyBn4oRDjg4JdEPa5VddcB1UsgwgWKHMiYZQAcfkNNyL61bqMNziZ46gecExw8",
  "key26": "3QtT2LuS4DTFN2hX3asHNxYMmuRPeMq4PJfJN1JcwfQk47pCAemm7XFFzqwhogVgMsWrQzMExb95Lasb8Qhtj46U",
  "key27": "5GLic6W3awEqyJcoxKYZboEuR9Z7tghAF9f4DwaXFK8fPcRANS2KMJHpGVeC4JgbNX3uouku7NCpQev2kgDE6HYL",
  "key28": "33rQ2JjwarRPQX9DnmFHmsqvyz4GCHGVxADR2sQzbkhkvQgUoQU4TNC14qtHUyYSvnSZo1qu2Hs1VE552G5v7VCf",
  "key29": "5n5miQw2kTTfc5f6zpnGcrZaZsrZbknfB8or2BMkZHr5gCKRtstjHuhfsEvGLKUxzRyTxy81vYqZzV81ki7YEhqh",
  "key30": "3kEDV3A2XqBnxT8Wxcy2cqre1YnJC5gBqBwRc8LUnZjYz4QJtEjf5o86DX39Z7f69F4EcN7Qf9eUuoqpEW3M5FVa",
  "key31": "5kcKk58bB41aK5nah7gQWt31xRFnAhCXLVqevuzf14fdU9Kf5K5axs6x9Ccpf5Fhm77sWB9cD5RrKGc11f81qKC7",
  "key32": "2XmoLZaMyPGR5kx5yakxKpA5LYFCcj9viZeNsyLKLZNYCyL6k9b82zH9NVCcVeKYVsfd7ZRSHRyLSBy6Ls6cw9rQ",
  "key33": "2euGKFPB38AWPSoTXfaEMLZcg1j9nS48fMBkvy3DMajjoG6J4sUJZVLCv4ChfEZ9hhYXkcWgXGRQA2a4JAQ3in1Q",
  "key34": "3X3ZyHTaiDtyvWfHPd1aRR9m4W8owGEn126rnWQC5FZrbAMdcHQTJz3LpYdn2gZrir4UY4Rsw6t9mNkQwRCMn7JA",
  "key35": "2HTTGqkJJ2e3Wne5nAQUiKBottRcemzKZnq5VVraZdbSRFJ6cqaLUpujrMczPV8ieWp6znt6JeKwk8rVxkT6QiP7"
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
