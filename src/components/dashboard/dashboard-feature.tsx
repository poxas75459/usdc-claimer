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
    "VVv4v9SmN2LZxtJkMbXpbY2S3wxyLyjfNgGHR5bkjVZ5zDJ8qWvYT1oNR3YSQF69ZaciTTF8abMKkAeRmMPLZZv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Gc6yNxC4EBvHm4kNd9MEU4ywVpfohqndLTKGmFfYCUSns2eVmsJPC1JB75BZEmwreU5Mfyzr7V7iAtsNch6Bean",
  "key1": "4nEbn6yZdHmy6a7BqiRPNrhbNWRz6p1ANAZG57JsXzP42buSttvrdNtH11tBVqzDpDWeGpu1BUHUdoVHPi5STAD",
  "key2": "5gG1BqZQmFibbQfpGv3uTvX5PajGBbwtGMUpx7d4sZijs2Xy3SP7EgAivWbzd8jmV3QUHKbuSVCMctaSqaqGz2QR",
  "key3": "4tiMJdwpYQPuq1x4pLbXN6JMvKxPYXSVo92mQFsNP5iiySJ59oFbiYi11jJPBPYz16enxypLpPJNpizBWmQxp7H5",
  "key4": "4s1hA5op3YR1srJzfB3JS4hQySL5CJWHKQbzNSTuSL9apewB1MjpWcHwP8f567eA989EfHzFc7r7En9Ja4iQMZkb",
  "key5": "5anC9Neu7i3c52vDq6gMXGVKihfowpFPkY3fhemBfhdWcq9GXEHNUAJ6DQ3Jb2RfwYe1mxFqeAwCN67sfKZ29zxF",
  "key6": "35bCtTnhxeQfMEH3zYarY7q5jabPkYaNqKfLz4oyqVYyXoQ3z7khESNvEgfW8i9rDZyuvxZ53N95hf52hNs4QWL2",
  "key7": "26nmThF8cZsUKAoCeRtpm2A8sde4wSt9Uvxgmdh6Fo3psWkrfC2sZcsiWStnZKe1H7r3kiGTZM1D4UgFmXCYaJBK",
  "key8": "5QuM7Crwc2kyqfpuFpf6B71Bd4Jt9DYp6qTkW3CER9CoveXJAxxJt9u4qjvxjXDp2vxtsTwwLaw8epX4QUJXSwDe",
  "key9": "5acnmKEmQVWmZjhWTkL8aU7JT1kGAikR21Tfk7cwz2uLD8PJEgy48odcdYpYo55H2uc6HBajjiuBHVJRpwpfWZ7m",
  "key10": "EYkgFu1MHzfRAChBpJ7bmKrFxsfXegR9QjuWXdofaEZBqzjWNN6r9SBGoDmrvRDDaDSarfJQ44xwcGYbaJnKfBh",
  "key11": "2TTmSxrfdcqvDuBADMVH35vVbnpfjv4XpKybxXk6WejjXjSr1fwSaMVnWCEKwNRE8a1RywfK6AL9t9f2sQDZLm6g",
  "key12": "2XPK7S4eRMGDnkBiDzvQGU3UdTJwQeCMVPJNyNtMnNNUR2sgxsSe5JM7dCNV2M3dTXFtCXzcWB9qaPsEWrbC9iSW",
  "key13": "57WiGf5r9gRoVMsksYdR8LuYuwSAxfrpZspvdgzqKjWGQDo9uQHzLzSu8wsYRFoerrxeHZqE95p8xepQc2soYtnh",
  "key14": "28YsZUF2YPFs11oeSsDBgezbriT6HeKUv746RoCpsGBDys6VQ3qJjrWwq4LfJeLLp84w7ToNo3unk2wDvBFZM1Li",
  "key15": "5zgbrKsNdCQfCpQXG97MumipTRL8KWGn9bRGw43evimandT7pTHLHp6Ppb4Fffp7UxNYPNtVV9YtqXtD3xgqyUmN",
  "key16": "26inYthYY8ik47PtznSC71PVSwawnsYXgDV4ZYuGXqVMqJN2B1zgzpY9dF3zK3Yk7iBcyp8nAaVLta5tXSRLvpNx",
  "key17": "bLvhSXY61aVytGSYP8Z5GHG45Dye7DjEHTbGCxnbe3qb5EKzZjVeKx8YnXgW3eKfh16JqRY3RqfNTnXKwt916WN",
  "key18": "uTTR2qgN2dTkTbKLamr8s5ap9KMUKxLt2Rykw2ckqy675Xs9LPCK73fLKcXQ5pfPrN59qD1XpQ5mriHHT271Bvx",
  "key19": "4terGALXfzHjWHEDxWSjt5v7NPRQBCyXeJv2g66kYNL5azSmWwM6KfxxUF21bmEr5quvN223cVBhMd33uVnBMNAM",
  "key20": "5fze3Nb93g2vNaYajKPPrjmP4DM6BUp6RAasbHWW2dZm2weRfWjQu5EJAj2T3unBtEn6Cvo45ZHz8qzaZQtytPF9",
  "key21": "34z7ZbexjTzrKt9okyCeYzmfw4WWtt6uoT4DraZC8B2JeW5PCKRApvJksNCcWgHwAPX2LkS7j6ifw4hHSrmCskt9",
  "key22": "51zqSTMkNcpb9DWFxXfkLzJ4hLtqn83pq5euauJVjp2b7oEkG2MVKj6nxqsXjVXeS4kXztCEo3FRM1MkXXkaqjwH",
  "key23": "3mJ7C3i18dyX5hvnVAfuGwDWn45vn55yezTd9ekQyk8FyF5659f5PsqounrfKefdzWsnPAzRMwnDx83ZmKSEfwb3",
  "key24": "HoSsrwf1PV4HF5nSRqnDtHMjn1JNewMUM16NJciYHq2NtwtYbqUk2GEnXpVpB3qAuZHuVASpTmmYWrhrh9Ue4jY",
  "key25": "dStMwTQnnuN5SGkyLDDcFJcTrbhSSg9Wj2nK5PKnuoLSvYaoaSNeRqmnovrA1YH9R5DpNwGMtXevxrQ8MmDa9pe",
  "key26": "3JaX9Psu9hBMF6piyUT4ePtRbAhkEkf9jhnK59CYTqRKB2bbUUoRUkvzVzxX9sVaku3KnvBbYLPPtYYzrAzxR2rp",
  "key27": "2JKrEdWeTJVmpQ75ti8eGoevbfYiCxghAHrMnMnzRbxA16zaQaRsJLGqEH8LXxqMunPT2nZ6QyjXgfNq1KhhZodM",
  "key28": "56zST7vN4y6X3RiQhm9nER5orZTaBmHYPdmoaLBT84QvCtTqwdrmpBywPTMvSs588aRpyrQx5q9QZ3nK2SLs1kTZ",
  "key29": "fZFJ1SETFFjZXuos1gbmtTE5SCpfryB9PVQPvJDCnfuavaZ1RMY591HmGDWhn2fxGSaMH4WyFeLTsxR8PRxJZt3",
  "key30": "5XV2BKf5b1c4Yv3c9jaSjodY86eSfmxxfWgNxHY8z2ADVuZJnYvopawwQgTEVjXr1bp1rmWcTvVpnfWqgDp8EXkb",
  "key31": "2hQ9tapfg9A4kM2ojUyqpr5awkS2mjg54qRYGSKbjuQqq3BZs91NS7eQtLHXECVKFwzFLty7K25utcLZPyKqho9T",
  "key32": "22zgChJ8GFgEZqixFopMCaigqxYgaSASZ7qzh9cYAFzvRXeJ2Z5n5Dv5HD26871PP3HgyUYvGyCTj8TT5HSgU9sj",
  "key33": "2Fgr6rTJGYEc4tHeuYkyBiZ5Fya83wDQMbhNV9z5xgN79tpKcgV2eaYgDXpzk4zgu6en5m7gChtMvuNFWrqnK8nf",
  "key34": "hr2BPzx1aKyn6J1XHe5VnoFxGEf5XTb6Pc9JEspuXtZtuUvQvR6vFumpQvNjRaZ5bPfV1p4HKgPdoh3b6huTWPH",
  "key35": "BwyoTE9ksMmntVZCQPq1dW7VPDhouCC3TBL99RbQeUF33FaL4CnMdEuYXGfeorshQmAWMQPH8bDREPGNUEXsvLB",
  "key36": "2PkQ1ot9JAtsBLk47sHFoRymygUo2vQszMH4y6drdGEgcHaFUFHayzjmPHipwznheH1vk7xdFF3cNXQuNPncP15G",
  "key37": "5Fd1U9SSdM8WMiu3eZSduHi2Wczn2i8a24ibvMCrrs42rCnJmY5NYmfbRmQmup2iLdcKFGLM12uVmYARp6airQYk",
  "key38": "2MKuHiySGAFM8y5vVm4BXv5BWQ46afHApu3nj6STSUeVmCyBgURbk2QR3CHpdwL6yP4fYn7G8muCDhHBX8syN9dJ",
  "key39": "645JwQb11nav1gF2X3sBZ9uHjh935juDjjVBJL4SYHJDRMtXpqSWYSQu7B7pqdm9Hefgnk1HQGRDYdB3vXu3xj4i",
  "key40": "c75CUZm82kiN2pJtdqCZrZcSKUaYtp5tw4gUEeENCe5DY2JXEmiF17ZYHSHhvNQvEFQwTLGa2H5TpjmddPZkv99",
  "key41": "4xMvvPD5xiR74ygnG3YmTuwuBAkN46Y3UTycsqGMstNmPdj6YozBu5vABWYR5ksguHvkFu4Rd2fhi4FMhVMn4zmw",
  "key42": "5hGAs9g4gzFkothnBNEeiwnrxnwHynAztrq5ubdm1m8NK3iZVfBVvtiH99sT8YS2zVaVwtsLx8dCjwr4Wo6UWyWG",
  "key43": "5Fw3u2rhDjpcf7JNiGP6qainaq4eZuP1LkHxqtJAbYummbUAJV6EnVDfdpeSG1PrARLcaf9wwsQwUYxkq8CpkP8x"
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
