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
    "4aLvri4jrWQhYNFhYZ1fMfjCZniinS6PJP8hNPpkdm6PqGMcWTjD2ehBhY19BUDvhxcyTcYuz2m3z2KKy4McTagL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zZ8m4gK2ewDe9BqL7LAx5oF2VBoRaFPVZKGeyXgrmcvjc77WERascj1pqdJh7Saq5eDbL42Bvdkex4dkV68YCq5",
  "key1": "5LLdcjC93UFH9bSbDBh8GdC2jsX3typNUThWxUn9C2sXtae3T4oy6ghAE8g5RVXj6peaYB1w8jAA8wJc1MdQb7Gd",
  "key2": "3tL2G5SWFG3jPeUYNGHx2bo2AmCeiRGpkm4ADzpFTKEPJGLwsabMsPVmi5i5xToDFNtomngSSZGpsDM54m76Pmeh",
  "key3": "462uavc9ZGGAgr6Jx8RaB7bz96ZHwmVpurGgtfsrWvV8azUrH1p2aGDTxDV1NJUTqU6cCnruScXamYoxWNa2BcdP",
  "key4": "4Yn3N1JyfzcfAw7VvpRtLJy5Q9GYTkyYSNvvZV2z5r8tXbeqbJKJ2nWsePgwjL2dw8WXYaVVQMXQkCTtHFvnWhN8",
  "key5": "KxayXdAg2Mc2Fjes8QEUYB4r4sPYWrCBduybKCs9NNe6uD92uZCNR1gvKY8iY2r8GkakXi5eNkmy7hqKsySiy9M",
  "key6": "26vSKGCLnnx4ap7zAHMTXw7Mk7JE7Lh6PZyc2pHQkL1gCLJHEN5yYQARr6WoPwN9HmkjHUx6kifRFN3Xt4bUzEKc",
  "key7": "3LNnfgkDsGg2nuKJ1xDv6XRwX7mTumNPRW6vAkjgUrVKVJFXKw5ht1bxuqNwb8LbYLzxv3bAffEsaxpF9oXpEVxT",
  "key8": "3hRrheyKsm8F5yAq7R87xCVsv8VA2B1QqKAWw5AjhLST4T4pjhYsQXjKFPkvHTN4FHrrvDqiTVyRFL5wLpBXSjyo",
  "key9": "3RZndxjt1EBAm1ptkQRsPXSUZQyZKPrMwyscmSkdzexanVBn3u1fGWh5PJSzJdxYG42vk8izbuYbYCfgP5JUgDkU",
  "key10": "5rkEMwUrmnKBKVaQeH1UX1U6vRpkv971n2gW2xZEWHYnyeoPja4ekzcDssQ68r1MW7W3w5C2inJFQ9tBc5SNwvnn",
  "key11": "3UivPgzEmiYtJewpEtfpA1HvbginFatEg8rcv21ChJXPABexjVp3sKTw4idQeerqM5YuiZduqWpdnVPeK5wWs559",
  "key12": "36u3ER65GeXqqiEwajtHnogQ3fxVhGYAHW4PKCQg3XLfTV4ZUpbq68c5ET2BKjPP7PZjgoB856cgAZMrqRKwUGsE",
  "key13": "4dgCrqVJEfFKznrVGGMo2G4CiQdVWwyimBvBjHTZyyFAVuL1noLW1cKyFKeLjuMT5Re6FjzMRpXbUuhe13zDU8nH",
  "key14": "bXTHYEmzShoKT1gGk96jx5QVXjE8vXatW8Q67HqZHVMfBvPWYti9zavgS3Np2azDSXzBkxRUhMg7CUuzQKVvqg7",
  "key15": "5modgvyNu8NmZXMHgzFWMfTpBGtHkNFKeFaer5g7PoNVdfxTZitcBpxejVsCnowFmp7BXzByqVAmddDyn5SPQSja",
  "key16": "2HYqBpydbFCG4qeoJzMrbahyMFKmyFKF2Nc6ojdXGXju7P3uKtG4N5WXo7AJ1vUrmiVzSrQSwEK4gN7rMUxKBZP4",
  "key17": "pgrHoCrm35McCQdeKYBtQnEZ8AdFKMykBdp73Tf1KfnZiZ5XyLc1fAEnMTXEUpwDKjzUAYV1nirC7EgbDZftbMN",
  "key18": "5n2Edp3s9zMFiF9rBLR9sMeeDQBf9M8LUufbJ5fsFqvSDcSpdUHzCtZKKHaDYquYA6MqFEc4SU1A6y5kkFFR1WTR",
  "key19": "2YoEcfS6TLMc2KT5jCsM3BezBD5QjP8Bgar36WFfd2C26VYnDWMGvcD8uq8KuGxrSQbNYxN3EGaeHMb1yf1V1rKU",
  "key20": "2Qzo2JiwtmcgAzUva5sFWpkz8J8TRrM6Vtu6Jswp72jnANTvREB9tzsJBPbDAAyVh9o2Xu64Pxn74poZQ31ji3do",
  "key21": "5EnxQpL3g4G8oTDi5TGB4hyh4G71cU8heKSzFmVX6N5pyrs9YEiaMixJfJY8YwkTuQTYkLSsvAnuVAvGqp3Ybe3A",
  "key22": "3F7toFDBeAvWy55CCK8XjzDFcKhfRtFPEagsJayAE8KnWZcZcywmczsZn4aBXvoudFQrTmntUFMSyPfHPfoYYovU",
  "key23": "45bn752A485LwvzWDFvVZzZWTLyBVrUSjGquJ4FHfCCmvUpZcS3Ya4jzU8JedtzsBoCNjZhvDcpo6kSFoCohABu9",
  "key24": "44fCEhayGTHGjwiNxkoHg1FEPN3xNUcHBrtoAHrw3s2WWTeEZwkncZVtyMiUoNHXUpbeyPoi2gdimtQSejrZbppM",
  "key25": "4UTL3u4uD1jkrN8NC5yrfkM9MKtwnSqVnntf59NEsq1cW93CbJUivHHp8vpZUAfiJvzh4zfB4mZ87aAw4GH59Ptv",
  "key26": "5p5PH6KNcqP6kK8PptpdwbMeEjHf2ghkUggJkyCJsNvcGpeycfVNYW4nQbwcKSiSpkyw5RdiNaWVK8WgkChtefgN",
  "key27": "gjTiEhC1VPxMsBJKo667mkPYkoYvPbjLvYfMRHoNBLYmhckSXEMw9AEQ6wHCgQuZFoRjRpSJA4WSpyiDbVATVpx",
  "key28": "32UxsGLTCdiS4huqWyPN8sLWcPdLjgHXAbMNu2T4vbPDgv7JWhpVeAyaojAJZ7FPwS6DWEk9yGaqVFwuotwCo8Bi",
  "key29": "59QGD2erAbb3SdRikSXomNs3Gaouoh1Hv1ZrAsrFJGHeV9Bcpn8yqgEHvxSbGTttbqwosCGuAmMK7ksSUhUMtvNR",
  "key30": "59eudf3xFuh2MuWH9NtTSp2trtoiXSauuhbV3vVVEuG5UB4LAscStU9YTGcBNsAxuXFcRhnsSENSqtGagTBuuZBf",
  "key31": "hpH3wZdzgcYehFmywaucrYoULusdWVrFNLztEpzz3pD21gBwRptAKANixnnLh67i75sTCe3m6eUfeWyS2RzAMpx",
  "key32": "3qdpZkCBmqz5xA3DpHvWxrxBP3nG9tvwvvRf95jBNdraueePtRkfhpVGe5S8Gb9HTYWhphCx9D1HpeK3ouoPQyao",
  "key33": "39Zrqk66tiGjBoHvcB3Sm47qofRLFo62k17ghShZpWEouz4rPbzkA8i6HvDrsWiSYHw4xUDFjQDv63fMbKWCwhQ1",
  "key34": "5S8N817hrLP4ycZ39LuB7sFRryr82WZL69UEjW8GWJGEcd2wYHG3Hwh7Hfa5WeBf3vZWJwMxkLDJTgpnEXL3LaGB",
  "key35": "3S72cu87bsoUe16HtEWf8B3XMFUhqRypJcyqx2mjUfA6MX4V5w1KCWBvFGgj7B5aD29fgKWkZr686PUXZG9cmDqm",
  "key36": "U5JwScRVvC7zuWFP9jGHbAqXbbxFc3rpikkToQKw7D5J8cCmweuAWxCrYm6oQfPFpbDGWfL3Qn331LyNWhUgKtH",
  "key37": "3M9A5SB6pGnWf7Eonxh6JXVtEjxjq3AxUMctLqGqDcY2UnnnCVXtoA5HP4EuSimqm2swLYc8skkyDVvWJ6w1cNWz",
  "key38": "6nEymTEK2GbtqdHRMdApdX2y6AUJGpiwaGJmQSrqv3yMntmkuAtiybCKBYkjmUBTyeViaNwkz7JVTpJFAjuve5e",
  "key39": "2LWpmUsg3jqKpT2zb75yvR4qwc6iWz1VrCuUSaw86PCTNqB4tasmZnL8A63aFD92Nz5DEeX7nDfaqH9v5kVaiwiZ",
  "key40": "43QUspvVBoYyoc84QYQfzBqMEwdrgeXWoYPwi3AiEu6BoywLkAHQZ2qJ6Ugg5kiNHe4Fihr4HinRo8HtiEe9vyBJ",
  "key41": "j3ihN8G58ZqjJtyf4YgPep7EtNRnAo4cUQwxbU1JY6gKdDHhU24ThkFpso2fenBKaPfv7TCd8sWw5UGyqtWbD1g"
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
