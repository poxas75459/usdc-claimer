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
    "8VByCsiVf6HcwWmpE7bsUX1x7ZitqjGtVssUEVhPUEou9WRn6HT78sDJE73kP2ppDF8sVjsSkv1mBgmEak4GfAZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4H8MLjjjTKfm1TGGFXzYaAGUTrLeQyvH8pFDJHoPZJiys2JVcquWnEkNH2bKTHLsdPu2SinbGghRQbYuJQTpyA6r",
  "key1": "5wHRY1veAW8vZSDjNgJVNdd6puvwG8JAbTKCpJktDrNattQLwUxBuBjx9kP71Sf6byKejDLknQLD5mqWruBiCona",
  "key2": "4bsWp62KU6qzJyu6aw68c8HfkMtxqPDiddAzeUXw7F6N7T5hLjGYHqTvxW9LBB7FFMHsdYWE8ZXtUqA1uXrDP7CW",
  "key3": "2rvdcPoQgGXV2eBgGH8bayxJzA3eoRW6fuQkHRZkw86qyqEUC6DT6JYbF6AHd5LhbZuv3FNUbqUhis2rWHkZsS3w",
  "key4": "2wotV5ywHjDv5uF6wLamsX6Fcr9YV5tz9iKGN4bqmAQCJkRJMrwijqpGVPhruSdq4hEEjMaTs749xP6oUPowKRjn",
  "key5": "2fLpZtcCnXCpCbEWbHRoTPAPAxXETQmeHqqeR5kvCFKjhkXbTKAgXrvyfxaDvpkZ5zEXy2YmEw5SrHQffwDcUhyj",
  "key6": "3bt19kCFzi9haAHC99sH6m84JfW7Fx8fxuyBApNn3uNsYRF2syezFTjALQW7Cgdv66k6EtPQA4zYgKioyTBhtft7",
  "key7": "9SBG1Du8VCqZyzEZWf8eHRzMDBkjTnS5aSopDabiazf7F1yF1nnc2UemvWGvp3yzh8pLKZw6RqqCP52Pm2PpCK7",
  "key8": "fSzoDXMsjWDHgvKPAMBB12Np1twaraVv6rq1PpC88C4cxaRE4wgYWvTQcs2xZS1J6CGHs7bE8uXWbjGBoYWUMFs",
  "key9": "CaubuC7RapyBDGzJXfJpKH69kG15pcgYapHJ666SzC8Jqv4R8PP5Hy7y1Ga6sp4V3kYgKNR7gCme5aKao78VmLz",
  "key10": "26tY3opgc2V1FPCSVmCzTf1HryNrN4sa94tbc87NZmohjpEzLcg2v9iGAVpBTYRfCLWE8CbwKEQZNRDtbP1QcgT6",
  "key11": "2GU45v85C7zdJSYPPLpq3JKGgKJhXvm6Xg7p15bfypKopm9AaeuDhm22PtBHYQRGxDJfEnnrvX6WWUcAwKmqWFbA",
  "key12": "2NGwG5ZLquBvu8aw5MUUczG1Tj8c7UjPaw2aJvTu5rCZuYP2XQMd2wamhzwhtPaFq3gqnmiJuapGGQX51SvLDow5",
  "key13": "3z8q9iFG6QPhLafku9LbvomuaAvCFAALYttmUusR8JPqQG2q5BrCsncfBYFnepJWhA631UKwyTjbzVFEWJ5zHEZG",
  "key14": "4WeJJFnxukzDMtJKhjm4G1UgYnuUyFGA9ksuy5KZ9edahaWyyfS45hmxycjy5W2B4h67D7Xu2ZBi5gH1wjvBzL1z",
  "key15": "4WmH6883QmQ2gohv5irxT4HZQ2nriG18xArb9AqBS9kthV5jNyr5r6VQKZfuMshBNgoJtDSoxauHRZux1Lyjyi6b",
  "key16": "j5X7nLWJBDYXaLk9Zye5LwRyHZc9sBvZudMgkcFiZdw5xLLLgx5qwhv4S5cTd7SFakmNt4A896WFhUrUsXNsHsz",
  "key17": "5umzEBuPRp8nE3g7iZvr5THNDmG8rNqQGv146sDKJkt2AUuFn9kkc9VD8k3NNFhxPfhsgXkwiMVovRUdwmHD4MGY",
  "key18": "3tYTHicPJGyHbZV3LrGbwW4fGvX4dSRkaBpQMVcGXptYYUWHHnvkq7YjkAfzQDNyhAFRfWvxRdGeFQqZC47rhdNv",
  "key19": "3GfUaQL3hhE7QgcoHtspkTUr4uwFLPzJVWi6S4nZNywKX3srKT9qWnSAwvr2cxK65VJrfKDzDoxYVsPd7ocBechk",
  "key20": "2Jazu66K6pAEFxDwBxH825dJs8m2zwQMHTFrC5FmCubK6Y8KPc8UNf4MHj556AbZsiHWfEypkWgBTbnHcLuPf6Xb",
  "key21": "N6QFizS7HSN9PwiFsvzYSiGx2fGX3Rw1VFN8sWieHzTLXjFUCnJq5KLVGZUiCHV7wyNcSQCugKrywdwhEP7mVEm",
  "key22": "2xyccSr2XkYouerjsRMBib9qNjJ6dzKt5P36ccPGBFoesbLgw7JcQU5dzUN2nqwM2sJftkb33bayPwaiT6sdnhzH",
  "key23": "fAB6JfZZC8PRgCL5m59uhrjNSQ7UfkCA1DrvzStXCY6N24TX2Sp4tternUR5tcYu5Hzh4CVFomrhcKZjSN1BSfU",
  "key24": "kTgtLFFro9wxCGp27gFE6hRUQsrQ4uHUT13DrnRMn2ALm2fsZSVuVQvtUutLvn5DF1C347xrGUHZRP211hpacij",
  "key25": "1DeMEcJKVg5h997gZzxtLPYm1nS2aTXkbTdRxsKh6nHKLaN9FyeiBWutpzQHBUUnAJLsgKC7STYbUxzbHZK18T8",
  "key26": "2jPyoveojAD7chqH96Xb3Es8PQogbA6X4gaF999hsjfj7mbGD2S57Xx7mAj7PRBky2FensUxTNsC5jvf4RrvGS75"
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
