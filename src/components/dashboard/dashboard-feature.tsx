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
    "4oZRwrcqUMXmnf57ujKPr3UDzaxN8YPDkdbtfPBznhquGy43fSehSjQjMFcgvVzaYG1Qu2J2q6dzScHZTEgSQLVp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jkTpUG286ahyMyajYxPMFuoB92c93DEyEF4F8eL1ab417rDvPuFb7jDaxedAHJeQSdMdAZjYZxx23KohUfSMEYW",
  "key1": "aQyg9dBgBtjjGy31NoTvk6d5ud9RT3gtxbA6QyjPDZ9S75t7NXwtYVJQE18QcCfu4KqiXoejf3XYt1pYTwXeLue",
  "key2": "3BREgEGMZZ6SZ9KGrrFDH88vNFoQfLuBGPcVNmkT22RYHwfyYy4rg3hvT4muBj8wm9tv9Cv5XiUoqUdyQT5C5oao",
  "key3": "67mrt3hevJ4Qv3wawVra1mHY6U15brFDeyYS749bhLCxZC17baxBkMukQkd8XkcT4bySgecBJYg4gunVjRCxxDAN",
  "key4": "31FNup4SZWgAJz7veQjpx9xuuiU3T8EE4UNtawFtmsDGQqTJTyhsajQmJkF4KCUD95SVZkSA39YfXxETX3aiPcc7",
  "key5": "3jJ86fjTpbcFuEzDjY8ApsBxM8bPftWmQ1MBP3UBjC2VCLJLYBktrjWTD23eD2vGQktHRbYFGvHo3X8F14asZTnv",
  "key6": "SLUq1qXrp4Nrjo4sRSD6SPA63SVD3fKzephPpzta2NSgMH5tu4USR19E1W4XY5zaKGox81T4Kcx6G5iMciJoF94",
  "key7": "2Y8yqJrotWNm11ZiHVgHag6qmj24Vc71M4UDo9GeYW3W7oXZeQ2EnUfj9wyefNDzgd5rkUPiu6SaF16Ek5eVY613",
  "key8": "5uy2WojLhk4PjFHcuob6XHjMJMmyQgofK7DFqV1bnNvj5Hj7N7XcMhhk25tuqrngmtHxEy55PEYFetxFj5cZtvi",
  "key9": "65ySTGFND6f1ZJiUqwUXfceSfwXn54RPMyQVJJqmqsBuwCZSd7wfYroZ5U3a5cKmhh9gXsLFva84xFVHimqN3S4i",
  "key10": "5AAmUNDg5RnnndYbBUakSBokQvQYmttK3ZSKrKu5s4SCUakRMZ3p4yxnFA729gwx9sYWagMk7UmSpp3ACYyWbi28",
  "key11": "4yCZoJThZ3BNCifBq2nRLEQ7KESPtbsYYxLQw9v4ghNVaKFSyztCZDtHyYzzirjKWZbon3tiYFngLUVqBgwftKCd",
  "key12": "q1BEwom4b4NQGPbBEdvs1aFRGVb1jeGLfKfigGzrkk8Vb5fSnpx264tgF5JajqSiYDZoof81AY4nARxzsWjLhMy",
  "key13": "CfpR6PcYM7NYGU4KyCiiDTEHVvHSgcP4ZYiP6jqL7BMugysNQpgrxfpTbFAPX7uQe5q8swqTxMAGAvMZp7C2qRS",
  "key14": "CV5KMDDNMBaQDe26WyHEPygHvFdNsNvf81nRm7ZQSriK2QEatsmu8PyiCwdr66ycPNmjPY3wv1KsmJzgfDCL2R8",
  "key15": "2sP6DpEBLV1ACA9Ce57XXsDofActj8DWiZRf8dBeQAEYhMrAndYjSTgPhNSFCSJUCKPbxwy5ADjiCcmqd4WZWXCb",
  "key16": "24zawG7jkLScJQMyMoii8GYWMfhPTzbGsT46pmrtzqqdrZfJbAwbh8rjdNQni1ZnvpH2YM9nHzSkYWagJJVfW3JJ",
  "key17": "4toQBjVXcnn5ZXNRr9ZaQM47HQaUVWPpupHcctjMCnZ3f2bhC2QSXRWB3La8ncW2HjbgUvtrZGYMMnHnJZiysEBb",
  "key18": "3TGBcmtJ1sE3Gqz6PPxJXJXmDMXNEAgWNeqBLK36hbB1myM2K1ys5sPTGiZirXzLUtK92vVkQpLEpE7gdwgWbz2g",
  "key19": "4ANnweyuiv7MM58N3mZJfnMi7RmKNUhpNWwCvakMMxyxkcqv73y8E2mUYcAo8QUuPanVUqyohoNMxBfrdMxct114",
  "key20": "2QpjCqDnF4CFx4NDcTbK1a2eNhABgVPAKJ7YsTh6k6bQCme2FP1Nu1DSZwnvP7MXbfkm7W8vyjh49wCXKm5dKvHw",
  "key21": "qdk1YfhSbjtHCdYxS9S5R6UsvkZdR4kTYgcTNPy8P6ggqUWFSHLKfU2vWJstRicr3FURkxv83is13yVhZY4Vzfv",
  "key22": "3qagVhH7NU66stcjuip7k394vjLAnE5WYRLsEmQdKftB4CzMfScpn3FKe2ggohcujKCqEJMXURtGFecdBxwURLU",
  "key23": "3X2ubMnLVXDvqnzQKMBovFKFQbKgYoAaM31tRWbpGd3GBr51t4sj7J5rG15xDkvFmtxB6PXcq7J8X1SSi9wxWvA2",
  "key24": "eGS9jNugsjuDdngURm7oH7Jhu8EydtqGcrRn9tQV95J4RraAjcoxbo4H9NSvhaU4yQidQpEziM2wWVM3jFKywaB"
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
