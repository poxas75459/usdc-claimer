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
    "rJyTs1V7p9vBhcmVVPeNzHip5EzTk44njvZDdBBYtW6YqTqEpNW9q68mtgFrZZbLp6YfQ6fBPPCf49ERKbPk14x"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2C4etZNRaWqtTCeTuHcku6JTd7g7XyS2em5ku1pz9DaRX4TFAQj5MsTeHmmJBkwx5QmGaNNqJXjeK7Mr4kb6Wk5x",
  "key1": "5522QU1x4ep5dRWvEmEkJTcc1DCmYuomP6zYXMGu6uNTe188vwdUygV373nodQYtsSaFWYsmY4JVg83hLHziFEaX",
  "key2": "4bqvhLtNs48eVv4GsXoFBucHMTnCjdfvHF4ifoqQ2bve7KVGYTj5z7Lob93G6CG89PWR6bdFfPBgQ7AwfTVepkAM",
  "key3": "4ERpgZNgNBP9TPTMqdoDK2BkHuQhVCZY3LJ85oUvFA4CzNZg6cF1xfcaKojPRqX4wZAugPP8J2KWVTF4nFBL7Bap",
  "key4": "3kBN5ZN64C3RYokqrwq4qyxP8PusHWj8JxMmNHd6YwAbro5NueMVzA3TNegWCq36p2xKWHZUDAo3ga15us1G4c4s",
  "key5": "3QGvyArvG1mGf1cmarVdSKGa2Lk3vFhhr2wSgGUda5BLdr8j5FvU9u2aE5Y43C2M7nep3zkUyt1rExeDfo5yKHYr",
  "key6": "5Z3z6U7NhM4pKxtr6ai1NgcuQScjppJyYn6VfrtuRq3h9fpjneLK8KyUPq7Qsy6TnQ1e24h3xKjkw1hoeragWCc7",
  "key7": "S8fJVsjcLNVPJETMkEH6zouuuRsbdN8zf6o1QudebGYdq2uyLM31FLHUpWXUgCf4kaWEY5nPdC6yLUpaHPJ4CmR",
  "key8": "ztrygMFQQRTJdeoUJiH5w69ngBP8n8YBpJzvKowFWPk4GTMKTU3J9iR1DVKSHxwNuT2k2mgJDjtm1dBaYta1XH5",
  "key9": "4vXHrFqzKBDh5ko4esdkfTYnLgiho78sAbeYWTGLniS7SdvVD2Rymb4t2a6TKc5mfNb6ReDHNjAPk5Q1a85wkHqU",
  "key10": "3sykaQp8ufAY2fJWbokb3MiQ6orGNJH8SVAQQcdSuT4oBbkmELD9y8gPLrhPxNRpoeGVVkpzJv8xsGZXSvggmNBL",
  "key11": "38uHJV1b4yxyabU9ekQRaavMUbj4ZV28wsu3w1RpvktfuQjLhMcfK1WACNkVUWp8PLbfRg3RXMxUGLn8JHQn2nKk",
  "key12": "3ah8AJuindhq1FdqFi4fF8BNkNkFko6ydM1dwZgp2y8aUEn4gPJPzabuebzJ5nv8hRQd3LfzzapDDZX8CXpk7awG",
  "key13": "4kcZS3pCFRr7KCqseACdk1kFj4kdU2GFGnAEk11yyM1TKErCPhZu1WP4kYGkzvzwutdYjr7oneh1QeNjGB1pDxUM",
  "key14": "3T4JyY8zLfSAmPhYUNQ9VuTUjV3j7J8cCgdQwgzQZ1uVad5aW6mRB7mvo65r2ivf9rupqfMckHnFEpHcky9uyvg2",
  "key15": "3fyQDdjCr4GHzHzuiaB4DJqKSjytD2znwrA3M4AMosML9p4FNUxagU7aLntzGam2U1zgNSTkVLjqacbLtPTGoFKR",
  "key16": "3DqaE7yFKUAfLNeuSn2EsUCpmoF8pwJ2aCBTxSb1BADt5ub9geyyhMrcfa66DmE2zdDy9FyEiedGyf8XFKVSk3vC",
  "key17": "3TfEZ5U1rpYcDBTJ68D5pTx9XB9n14kUzNLRagSTDa66qFieT55eLKZhgGiWhMMfvSNi5TqSyVsBFfSWPoz9B7Pt",
  "key18": "4KAxp1y36kCR6KXeeEmLwSsC1XhbBonu9SRF3qFNBKkZRoh1mDz4dhDaZmWpetR2oGYp11Xncit4FFAguGAQVL2p",
  "key19": "4Z9uZmz5KMfh5CkGxs19wnmYc7DhYdc3ZaMgGZYNNmFrvYUgTsAyVKExgBoNgxSFcSkkrzHsSFS3sFxQvdVKFTMM",
  "key20": "4Y6F5YPQ5P9kiQhSP6GRscPpv51DDmngKoabrUQeDH2E7B51dmUbiLQr6aFZnEoqtxPQoDvgjEaDicUsDUESEW7h",
  "key21": "33YwS8QBMfJMmxFMeP8rM6C4yFd1Se7Vm4JdXtbnB71BnyEpAyuckKn6Qp1TfDNRZqxSgtuJZkaiTL5YCZYhqQND",
  "key22": "5dSkxY3qbo3D3G6r3bp76HKLmmr8qW8rpNrvrdF1QfFRDc8nDbC7CZTdwRP8FyE5vY7RfM2fDyhT95BGiWAwdoUJ",
  "key23": "36VaMxxSNGpLJwBHmnZhCMBsRLumR7fkn3cAEyFjNuJhJ3cboi9zsmean3pjU1rbJDgXo5EXKfwpnNmG6KuYvapP",
  "key24": "5kFHQmhMVTpGdHVVBW8wSZRd3VTdwd7nrkyyqVTascPSJzh73kpwQkfTnMJ6BMiTcKY3dFr4aqfLWGYkWr1zXLHF",
  "key25": "4G9iVTVzVJLtPDakQ7XCeYahBBTKLth6nE8dzCHC4GKi9fT66yo3aQauN8BjyxpdVfi4t5T1nvzGEZ5v9ogEQTm4",
  "key26": "4B4gsGU68rHMs1uu5np1FRwjjuo7Qy8cL94kQFaRx81quhMDYWTbrvwmgL9btjMjFZVAf8jajKJogWLUZdBJQv5Q",
  "key27": "5JHHB4cQ2itEkKpi9oqKgGUDD2iPNpyEMpRwWVt8sov2p7cfgzyCWgaQcgM1Q2EEjuj1KFNsbCz8bz1JYQkskUkB",
  "key28": "5pLhV8oKstauy9hRphoNjuzDATALncPMQTsjx2Z46f4dFsutJQuE7Tpnbw1GHg9UTHvYUtttbyX4TePTE9HLrpV4"
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
