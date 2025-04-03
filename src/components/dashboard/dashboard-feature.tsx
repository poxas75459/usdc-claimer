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
    "x1cuWiFwZDJnLGPUwyDozdDoamxFLSu62i3qYkE8PstgV39CHhKXNyzajSZqg4RXrkHvaQ9nbptnHmTM1jKm5kD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54RZUDZ3o3w6Cmb9hW3Xwzj8ZNGtK8PuSboM8gAFbMHBzmaHkYdaZdxB1g7j7CkVVRKgFVHcfuNaqCZMFoXnxaUY",
  "key1": "4zqXQTgGZbbrVv1px8gHMdFUCXWL2Q2yWZaytmKNvWn6fUPwYmt6gEb81kpXkgipfYPRWJefemtD6LYyb6GQQnrp",
  "key2": "4FukyJHHhy9GJqbgMsLph6wYzcSSm3n7b8u7pkxMqmPZY1TFjvcRqnevUQPBq87kmDQq5SmckPcd8X5ML2CHRpGc",
  "key3": "2aREPrHuAiEaMuv4Y96vJkp9Fd7tSBybuo6wFyGQhJM1xrvyjknmft49i3ehfP9JAiFmnCLEruTy9CapVxztti6N",
  "key4": "3tbiBWuhyEvauDENhMBVaWQoVfHKv4ojEi9X9JEeJ8UgAzYvqaXLdoKvPDzPU47PFw2KN5haV3TuSbopMrxZHTZp",
  "key5": "2S1DtZ8KdHjGVJqN8KqhvBkCYySnNJbg479EBguPVZ4MtZEKaPnKLhULn242U1AS2Y5WzPBVrhCXaCrqCoF8pDnT",
  "key6": "5tZLkj7USrUB8TJu4gPPYzxpDFjFtiW9F5VNQjFumCmgNV9j1nQEpSL3HPDptjkBBUof9pyWS59UMorah6gZx6Ua",
  "key7": "44Pb8Ykurc5RCS8Gmmgyw4pbUKix2by4GkYPuZEDQ3cK4kDYPXzVCjTrTKL6awa7yWi9mPPsPkCvJoKonGkYeoRg",
  "key8": "kqLuNwWpHdxxi1iBwX8jP4BAzJmDWsM8TphC3nJG9LWYSoqmvjLg2nQ2vyiCpW1wa3QHuuwhigAuxpFCnAStEcq",
  "key9": "BYGseWjjSNsotxAPxzHYhvdy7apYtKwJ8FkojF6eqiWi7ZurfgDRi9cHYaKrns8VyCMmMHcMc7dG61JBDZEC2Hj",
  "key10": "3UQT2re8wVCUjd82hEUsLHbJnTH3rQREsaDpA2YPJ1tK4phrwXLbd4KVjWDavW3SVSGehH81vMh8AWvaUCFdnFbu",
  "key11": "21ELfZjh2PrfEiTsVysCKtSAXTkXbY49bGbMNsE9r2rUHKJFMJHB687DqnoudkYEr2oRuG2HhLm8oGPFskfSvCfr",
  "key12": "1dxV5BVe8MthE6ginSqoXT71iDzVjdyhiFtQASPTU23RhejaGyWgWVevpEkAFGoFL2U7qb1hSTyowEB9gLWADQC",
  "key13": "4D8XPaGvsUG3qRc4L3X3x4LhZpVt6kKogzW2iXpwa8KkSeSQjZMAEACPNRJvzB3fq1j4G7vXZg6ej4BeRX3SvFyD",
  "key14": "3WUiYR4ye9NRNAbtNN3wdFTVViGh8Yuwf2uJG9Esd4BBqXByshvEGcM8FgzXz3BD4TnfADhkSbmjhZhTXPxsYgMt",
  "key15": "3GDZi3XcmjZiiHqcY6ph4FTGXbLHrvJ8eE1ncdyJwA2qvBRQjvRB9tAqEHjdPW4bWaeoyBn6L3FsxGkkhAhJrZcH",
  "key16": "kbe41y4RaCKNKFWCasYb3C9HLVP4GvK9GENdNYanN6WRWdPBAZGGuAVkgijZ8fZwP8KHb8tGkaHcKLRpKbCUQTk",
  "key17": "4tzGTpJh5EcoYdUQBEiQp2DXKajisvUamPEn8j5AP3Uf4ftCQGL9JcejfMQ2ZrfAAVPrdDEmimXZfmT55FSumpRp",
  "key18": "3T6QAwpnFaT5TcjHXT3FGcYGKvY2Vs2581zxbVuw3B3iw9WPUDWdDnzvjc5jPq5pHcQA7eAC9zmpSSx8i314sGkA",
  "key19": "2fZgw9C1dRPyQB2KKrSU4L5BqSA17tgHML8cLGWBmo16eqg6RG3XpApUMSS4cLm5LovKKUs135ShY7mfCEdx8jSc",
  "key20": "5yoPRBaWmw91KsMKo3AsFuGSQzo9Z4wTWCcGwD2R75Afh448A2hneyvjcHphzu6UnTwNdK1ittwuyRJe3z1T5qi7",
  "key21": "4v2SAR8ikMrZwCsegET8gaUt5QRhY7594RfKkNcWQwth7EWFqzeWEDFbQEeqsoRRJg7csk8CCsqoZguobRnWNMkH",
  "key22": "3i4ZshpjkZ2NuoymozM4TCZGEHvb5axNy9h3i6ycXXGy6RT2tqjDYp1BQBvepKP9jtkyGvs7HANuwmDsBECtYtp6",
  "key23": "3eFkizVpmJWtFcuH5uLBy732vBfWMX4wz9AQnuLfEVDCBLn2ZKs2PTDHeSZZucpe5KJtZioFuv5P1Hystkc6jyPu",
  "key24": "47CzfcrPC3p3ee3mXPaen61vZTmqL3QbSFGVyWAzWuaP3rVuD8KCLeqvJHPE6k2voYgRsZtD4WuM4eYirKPXJzw7",
  "key25": "5Vu9EftBKMhqQb3CX2XgurWnTZGFHEVNXtnpeJ6RP8gD7DzHBoU1b8npe8k3wVeN13Qa2DNsd7Rk27jogvnwuvSo",
  "key26": "5pwKb5Qy9fyiNNE3qXuL8dgWJNemXHFpaYC9rVF9zXi2kKjHYmhgbKv4bajns1PhPzAkkfFESeGeXBPsmEMfydad",
  "key27": "4CoFndHmfBdeX9uvei7DSJRBQrBSsi4AfagXj5hTAVBuwrf3C8QjouUsBYr4aYJx8aY7cQi77Z2iKZwh2jzbA5mr",
  "key28": "5WaLsP446Nfefe6BCStc7FeEbX5NuZ11TxgWvuJsw4b5gz4VK2qVdd182amWH2ufRZDD8WZEkxMyB1G3PZs6YfBv",
  "key29": "47m2SeAGQgKwEGW8tzNm4UaFMCJXD5WtrBkBSqDqWmnk5q9FkiaA5NDugXVFGB2NwAxcSCRGTAJVg5DrM4s1j3xW",
  "key30": "4UVzv7EsE2KdLsgGbg8i9BcZ1nYPkhHMUc7hzfXAN1KDqG5vTU6RFmNtKGbmpw4zdRoKFWnnUjSJZg2nX9NvWk4A",
  "key31": "2Em2681r7k7RNoTzX6Hv7wxVpEBSCg9T56AcoRgP3h8TDLinV9KA2xijvh2EfXtWj1yi5rK9zT4CNM8xcwL4UrVj",
  "key32": "4uCCu5DGpj6TgyfqmeH2WUPHfwX5ChHh7eojB4sQdDggZJPLF9sRdMfF4ua7TYUpkSsUVmU8uJ93soAVkFxVoMbF",
  "key33": "42YULMpKKZ7CeSHa9Q2trdSTTw8FgMHNKiZ89sLYJQ5YwAKY6NKySpGp1NjxQ1kvzUtNxiGxoFKkP772d5ZeaCpY",
  "key34": "4VGbALTg6hLzJDkuLqhi9PDU4ika6VpnSkNnJG4zLsjbkNEcv2W2YYgRhSXVf9ebohn3MZJ54mcgzLVFnC6D1Nbv",
  "key35": "tGwBDwXyrdcS1HxscKTtgTMj6q8jLneZWg9WzhpWCU5ddzr1pyUxemrrGBSAZkMP5bC6av6xGxGFUn617nzdrkU",
  "key36": "QgoBPJ4E8UT1CTi8MQmBbd37Nq7S2NrCUW43F61E5kWXkG9vkd2s8zFKEvwf7WCDHX6RM7f6BEkpq8KUnddwfVR"
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
