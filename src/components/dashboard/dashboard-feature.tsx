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
    "2f3gjBZM99mDtB2BjKd7QoF91boVYB59pDkZGgNjhvH49VzCrKAWX6YnA91CbQnJNJiEwBTNfxkoBRPGeuzE59pj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3YCd3fkEi8mXgLC5jugJUsQzV3Fw5kkE2MhHizsKKiD3Jvccqk7WqGSJGbhGBiXcDZXe2WEuGP3hzvWYM43RTSYM",
  "key1": "9Pcgf9S4APgv8xvBygyXfMct5SAaD2W4hsP4YYGWxKZqwwaGjzZdKe8s1r6DoQj6miUBwzPa3jX4CueCzcN8LNg",
  "key2": "45uMnYZXhNAoXrWeGpToZ67zbLXy3eonJN3pzKdVbgjkFoBM1WDLBoTRcfjXi7LVkiWkuLze7X48FzxAohcFPziT",
  "key3": "5Wp26HrCiEMkJerQ8Ep7j3iiNF8atbJEe3Lcx6rPtjmHEcYAqgebJYVoKKwX9huyBo6HKZSStM1d9FU91zMxHo7b",
  "key4": "2PeLVYhVcMNiGpit7j4AdSa6uCBShuewcc17h3hePM2JTNCdhqaE5swgP2yLBK6UcEVMbtaVKAucWXqSGiqGhrKC",
  "key5": "4bGVdz8aNSN1KXifiGD4FEznGngoayFGvxNv3ZddfbYLzKCxA3WhrQBe29ERJeFtUcHw1dCTW8C4u5X44nDT1RkU",
  "key6": "3imux2wJMCSugWS3tbNo2Dh8McMkhvZnAX786nZuoPUiKTUR6VsJ5NnTMKphcnDsyZFJEFFd2yX461DuL6F4H7ds",
  "key7": "5mXYvZJ3M47WVQW9MQJf87113VVCiTBpysC6z8F57LRLngs93z6CHsseuJjaQSrT5bMnSYW1vKWXTzaox3HTb2Xw",
  "key8": "4vFzffoLyMJz7zyNseAGaw5GczLR8vb6PqVi4jio1xRcRBhfHc2tNuTj8NGvyauBjhZwdzVs19Bzn8Q9okiYx1xK",
  "key9": "4efuHSQkKNTAVt9knpQk6aFunsBRmhS3UJXfa5EiTjkznuMaVQwo86NV1GbipsyEgr4tFPfRfWovKNfJx52tb6EF",
  "key10": "ydM88WRjDRKuoohh3t1JL9dEeYosdynJRoFtKaTVaRq8cvSkpozuxLcKJ9TtBCukDcVCP3hUnb1RmYAMzbcdE7T",
  "key11": "39ugWGhsDa5G1eqS2SgXgpqCnob4ZmYbassFU8y92JPuXqh3p2T1TkJefwrjEPsM3mf3M5SP7itSwWBjyJWjKdmJ",
  "key12": "3JMxR7cUzbyWAUqQ1MV35issK8ofJKu4x5UaXAG6NC8qaRmubADhh7vL79rPE96f2xjJdtHBEwnu5ejorfjFUR85",
  "key13": "2zxaQKCfmkNkqyAuJR8WmLfJNqbhEsmtvoc8oTEtsr7ykHTWs317zvRWAgruuMrcFUNxXWtXjHH7yWVuncQ4pxdR",
  "key14": "4XZBj3oYQaLB4bQjkiLpNQm3CEACnXMZS1W9rt2SceLK8KHR4AxvZSdhx1paNKJ3ZwTo8y5BWX2JQucsMmg1MwAt",
  "key15": "28dWQGXjAvHJocxBdBKKdTRdCmTQCXKSi2UUejENpzcTj8zd7FrtTBXQeNZfr5pJR8Ftzvq8zT3Up3KWmSADPoSs",
  "key16": "5PxmcTkTi4nXYc21U7j9gJ49ajxp5YtJmAivYwAsg6k49Zah2RmcpbVHxVMraoaJ4bL2g3MKXPbrg3ksh6ZUCvBp",
  "key17": "2rtBoibVHbAZR5ZNa1ZnwSvJQpo19BVsaHmM65BJtYhdazJ4iiGW5nPdwzmkUPuuek2DW2Z1yDbvucSQbPRFrtk2",
  "key18": "4mDUGc71kRGQZ4mnyQdap4hfq8XTEUBp1X26tF77BdVqDZ7v2BtFtUN1xDroB9H7JGn8Ac577zFoZr7J1avLZvF6",
  "key19": "4pE7d1UwcWuXc9yj4niG6QsFFc2iJ6ZpjDf9qipYErZSeaU5ZmFrjr2c8MTWhCSR3QrLCPTA5Tj2s3TcXHFenCBs",
  "key20": "5KF2P6HSt8FmvX14pJ9x81Mdf5zGvvxag3MG2AJRXcRbyQn8svErMozf7rZHLZq6nvhZHmiDv1uwoMnDLq6A73LE",
  "key21": "3QAApbwTsJmYFDsm37yLiHwBcMteSiKRPzDb6XBjXzuPebpPj4j1cGC7B4HDYz82DkFGikmofYEEHCyzUrUyZqAa",
  "key22": "4SNuykB8LvQjLtPYm6cZfrL3YjeZrFkjeTi75meV8Pm9q2tY3u7YooiLjuEeFJBZLRxc8awGTtDYpFHKA5nGSccK",
  "key23": "RvPTmeTFfRTwr9E77bjKAAHtG9FDNM1ZQEcg1PqyNcS2FeAiRnyECgvWps55Cde4eALCChTwqKHMHVPDLn4Qv5b",
  "key24": "GZGMGsWsz4kMMPzyoL5cxPRWrWLXMRGeSnrXmRf1hdUGHBRr81DznjNa1kZWD9ZLQtUgDcjcdpKVnt53F6Ztkg9",
  "key25": "4YiDqjLEHb39RAHZ8bd289uuz9ckVbxZ6vo1HC7Xr36wqST5aTR9w2ZBW8wXcdXc5qqjjrfn7BBmWFk4aCGLfmSP",
  "key26": "hnjj7Wyu3sM947rFDj5KTXBojMabbu7PYqduu11AtiqeweVsdZ8hGeJfMseiL5j6XQ1UQUjeqb39nvS56PpKy7o",
  "key27": "2Xqbc7fMmZonmYkVZTsVUKP1HFhjYERHMXagdu6W9T3zRKz56pU94ZuevuFuS6eg3gCxVrdoT3iWeXcQbS1ogg8z",
  "key28": "3wgWVTADfcPZSH2LLdBNPmWWYid7XUhtX7WCTAMeeNdhsQsPnZAUBvp5pCi3MPAzKr58hAPukChRtUeuRowwjHMU",
  "key29": "T6EMbEkDPTcrLfkSArRNYrTQMkSRAjRzKLinFrFWXb4kNJgRqub2KztmEHvpnyEc5pWPNEaYxunJtDSmyBSsz3s",
  "key30": "54fd1PrjsW8HDqiPjafBXLbYrXhE5zYFDkhAcTbrE1J6SCzFJsu6WPHKThb78eTsmG6HmimNvjv9wthCuPvdgQbP",
  "key31": "5GHH1zPMjHNGjFjrQKmW1Qb1b5UtUnf3qRcAM2M3sZjdCo1J7NbLpDMiAGmDSdnWEJ8LxzZ8vcuvoXCroWoHBDEE",
  "key32": "4A4euesEobGzZFSM4VX64PzoQE27Stksfeuwecqhwsk7hRB3zgFqwYTGBwWMvzAJoo6okp8FtZjUJ3pL4QDhL5kJ",
  "key33": "2WbpjKGP3gNNjmvmhoohbrfkXiYoSrANQkDT5ExoS6gN3cKVm7ihzc3KS8dgfHod7ogLTQGux9wGLm3uKxM4sqBH",
  "key34": "SD6QRUeJHxPxDCoaaeGCFEqorw8r1tvfdogcNearxEUeCrAWaCxi4pfrXwD3bSihv6WKHfLF5PsozhUz49FyBkA",
  "key35": "2C4t8mQxoXuQfjmYJddk4Go5VArf8adsvFcbTKcPoPVU1yDE2Mmao2peVFpUfb1nTvRQeRNZTitepaBBAwLDL4gi",
  "key36": "6RpUG28uKr8oLK7NPiMjAcWf9ddfUwXTiTHREmGAYvAYttHV7mQXwsaWNWxWT7gyj8r8QaBKAyAAML4k7WYWszJ",
  "key37": "AmmtMr788SdwtwjasKtK21EFK229NtiX4XMQ7HM8KikXpSLnBBDnqhAnhw7S6URSikwvTHGcWAvew7UWVmjigpk",
  "key38": "4PY7HBJfpibmNHb6zFzWHr3MvSSuMYjXTEEc4HVPGXm6swoh1v9vTpsbVEKxNGp47Cs6gb7w6udy6QoUB7M5d8Zr",
  "key39": "5Wd7Y84yVr5ZecVxDFB8EahFXNN5nFDoLSKxUjoe2u4SHzp3EYfE7Jn6HDP6n9xKZ8nXoubpbtX8H7kSNb8AhvKs",
  "key40": "3DY9JhVoUGA9TXoaNiQUEZR1XHZpEMwb2RKetKJgX3d7JnU6tu4dXqpepxMnB8rZSHJi2NsDrn6J6xyxMDPt2aZT",
  "key41": "VwGpApvBtUjVjmUvXdTs3WAZPmdxECai1g1uCCZvJpCTUmrTmLE9zrPzjJfyHRMHKBuMAbmdmQoDFQgZwuUBaAW",
  "key42": "4xCS8tmfcMXPrBiohaNcrcNe21Dc8YXreDnPVZESFd9JdSaKBVhhjJf37LNnRqkwE55YZV9pug7YSHR44VLQCnXp"
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
