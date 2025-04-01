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
    "3JkuQ9ckAzswJSon65bybEMukQ3Azdyhd6Uy2o1j8u1YiWpwd9p7GbSFGRSqSmaFyr7RvAp99tv9fr5cJtRzjQXy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4t6ZUqyNrx5g1rR9twLt7oKrqUowDqZkRW56xjkFNuGM5RdgP8bNzTEJZiCLgRHwMChosq9ABvgaoZTTpNSiDemi",
  "key1": "587qdpbk8roSbGx6BnHvUgoVeZVoSEAPgTVrMW4dVPWp6LbWN6fWYHqZHGgRpHsFQ2RHCmE6FRarhXgUzgNb51sw",
  "key2": "5aW1rtEyZfPUAKyedMavNRyNxrxz9ue8ws4PfT2UuhQU94QdYCd4bFuwUqiAs3DRbyKCiHFN6XzQofMb3UzGgkrk",
  "key3": "2YaJh1QBvCrXngxmHuGMtpr8E1jJfyX837fHt9KFhkjFYXXPxKJz5pCH6gLwo51ptEy9Nv8nViUsmS2G9R2Uiqvw",
  "key4": "5AMJQePqJQzsDT8hSDnqbu9VTPuD46s25mYzozmazGSGDMy8fWNqZwRXuCrtZ8sLPGkEdUKnv444SqGyLjdLaqFF",
  "key5": "tPX1obXnxjAjuh9i3ZvfiqbgvPnVS3NqmF6WPVqaVjtf75y89yV5R1MHZrL7X2jxaSmBZdra8uzWpxTY4njwDVm",
  "key6": "2AnCCbtSqiKePtYx944CXCgTpqZhJejPKPBUx4V3jaBgopCByHTGSDGrjBHX9D4MVvRLVUa5FU2kTaLkQZNLd4Pu",
  "key7": "2521FqLFEHwiu6DtAWWBPSiXVUmNYB88Mh5ujtGFADLiXdqh5q4U6qfnFiSgxHB4UKKN7ysfHeuN1vkf5awrrLhG",
  "key8": "q8g9kSFmea7bQzUPgigpoJELAyTfJo78SRMvdvVh8X7mTCgo5PXbhQSexegHYyWrujfPgFDj98zLNNZypTKixmy",
  "key9": "Dah6wZLgwTYiCwcVnxMcpfLwyf41Uonw4tKCQzDLrSpWSq69eE8X5PqCSAiAjeUaWZMjGhMNSD1zerfajX6GYGw",
  "key10": "3w7diAU1vk2ewAyZ28v7PfjxkhXcWKTivsHWH63CSHL59UyKadTeXmTHo4jsjfZ44uqYGC9GdVBruPmZ4hdGeNWM",
  "key11": "yMMoss4r61SbmtMoU8YEjj7iR6HTxJg3bvh8NbCSN5RkvjcyfgKfsaVhKqWsaY3ycf6zpHFi5647HTKckiMibkT",
  "key12": "45iHXV5GfXAHH72EAuKCzzsvWgYf416H5M9EqjVnG94JsCYa3qrZXMTiMwen1CcujYboawjTPh77gqbnt8BdNHj2",
  "key13": "5XruUFR6qsagewkrCR5bE3sou5oLpLgY8AueuuUC13uBCxAt6iJYvzWPxXfSdsumCi5ZEc832VgZvcAyDgsadRMP",
  "key14": "4Eo9VS812NbiTZcGLpApq2fNvahb2b6kaiYMwy7UCzAMGkQoeJacxLcPrjkHTi65o5fbCjMsRM1ZYo7mPfi1mWKJ",
  "key15": "hU8f19jT4BoHUPKS1Mv3yaVpy3f1h5JENejYVuQk7G7MEcXesYU4hTezs5wk2dFTnHAYSqHz5Q8CN4RW5zDaB58",
  "key16": "2FnCScQwgNpLnM8WmzXMBkUSCiYFNUs4MFTFW6NJ2UtyBNjAus8LB3ToGzWWHTpFxKCBwbF9F6DxXscjehi3VXjk",
  "key17": "2T975cQa18r2rS57Tfaz9fbTUQnt8T1acfpmXEySa55MphrhtzD3CTnaugTLEKdhiaJL6Dm2T1kpqiLEeFktQ8uJ",
  "key18": "2qNjYAohBd4tbXi3hDL56JWsCAsvL7GFtDeknCt1bkQiUmX85m1xJw1Hv3Qobs5nMzCcrLojAAW7RGzkkPBHeyTs",
  "key19": "3A4htTrnyDM9EvRW2cXBj6TRgduuoEe1KutAyDgk63BNHpMprX1CkhMobuqSZ28vW7jVt52CzV6ZA4Sgh5QR6qnf",
  "key20": "5XXhd4Tg1yHa1cmwc99pxXf29wfbu1YRp5KHBN55MeMG2haVV1RxW6ieJiDwFiEEvsXCFN996muGVWa4vMFcmGHv",
  "key21": "2fWan3XUrko1ZDxjz3i5CVqwGqBuB3FsG8Lz2ChRSRo8XpkS2MncE9xS3nP6YinrsXQW4Kq8N9veUjD9UfsdUjmd",
  "key22": "3HehTHjfteD8nrYHiFy5QySwSyibD7sWwiYPvjfMSaKErY5suuNVp79P45rPS5FQA89iwXemnudoiWr7YK59jrMg",
  "key23": "3B2Q6RyA5dFKVS7uZAYiEVkmoyFQxgVMp2JrxqepQCJEHs4PmhoAC9wqeS47tfHxHW2CUbgxYcUU2EGvURzwvh8A",
  "key24": "3uH8aKqGJ2XaUiBdsoDJLRV7YqsDBJ5sbFuUncxdxQZq2B5Yyg8JsySweAxhdh6fv86FLrKenXtTkdJxkJDDbTcc",
  "key25": "5WgCyoQtNuMPjaX5stD9w9n9ve9otzkVNTc6GjvUoZy3nj7zVBYfFy1iatYUR3fND84jgtMehVtVRrHuqayZGMnp",
  "key26": "GGUgBrVrAFEYyh2Zb1sNLBpguN9F2LRD8xuhoPu4ZgUuMxFscLqcxPVjrZQMF816S5ec723wW8gvy24CeKGW5UZ",
  "key27": "5v4Y9iePUXYYEDfqsgF2TmJ9wubiASi2Th49FbLC9JHNKS5hpZDNfoQPrAfPcWtrn4MNpU8yUsrpTCg7VBwXR4NP",
  "key28": "4yXR7RAQs7sAhPDTR9hh3wiWQFm8qb3NsCnGy8n97hGXpCUNXoiQDquD6bAKiyg9M2GNdgYuciBLnxLaWumwjryc",
  "key29": "3LJDKvbJNRko8gVNDVjEPqLM6PjaX1mKEdWBdKuX9vsTJE6QNWP3oQVK7evoayXoNReZA5mWNnm2yE31RuJgddHi",
  "key30": "5UwqFNkbaAU1t7QdASr1nQQy4KVPYpWKPVPGmkycKnHrmnUaw4LLDDTNanP6EJ1QWqSKTzuz6Jp8TERmz2XUXCrf",
  "key31": "21yMWUDC8Bv3vbSmk1vENZN11f74WAZp1Dpk3LxnXp97nTYPvkd8SWGLWmN4ZQ5zQU6Z8XfXin4K9Uapp3vYMDxS",
  "key32": "KNVghgGoVHJZuUahUh8WaDFtjUJ28E4KmTpVndi96zijsDWn1gFBqSg32qyGqMtEXxgjPw4ydUgaHFDbvLtw9Tm",
  "key33": "542tEDBLaKaDPdTjqYBBTEULjvT4d4m8eT9W8uvEoi1JSqUeizEkdyuDFmxdeD8wx3ru9ymz3eyAeQbsqTqHJHdr",
  "key34": "61XD1c8zSpcPxe8vbvSkTgGWezM2SbE1dQZwTg2ggZDdn9WfZAtqkKS2NVMj5Dfvac1vDGqCq7fznSWJVrs63cJz",
  "key35": "3N8WbwJt82sYAWndwLEJJM4FMRpFebP2b1NwvTn7BqUdtQeFDaawXoZ9ixbuenyKahptmntNAARLXfVfbRZKnveK"
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
