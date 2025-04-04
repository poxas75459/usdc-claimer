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
    "2fiWH6wJ4jS3KJCYtQCi4ESzifNabjRTjvCMHYmBMPzLU1Bzd4igxeq7X91MseJeGHvNszKryrwDndzsGrDXBMhM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5FDsvS8CBrGEybvtUmNJWq1cEYDszkvKg4F7JqNTdDafGrjAnUk1AGmotpV7UaSyPb7ca4tR3c3eHm3Bbrufuq1R",
  "key1": "71sgoHHW6rxHe6M15BS4WLGyApYKh1W9NwTbsQzS5FtF2hF58vZqMY1r79jfZkB96G4pxh4rxhmM6D3xZhxGN5G",
  "key2": "uRvSXwjxEkRtvAjvTTzzxvuPAM1ik4jkbPCsxPT8CYwUJ1bmNq7bqjQ7z1SLJnZFbVv6AxqZFVzWrb6YCpDButf",
  "key3": "32d12sTksAVqHiSyRxxBiZ2yi2ir9JdVhnkSHYMjb4i2FhAJRn1h53WVbxJ5DBq2FzUXLCMwe11VY7FQ57LWQ73P",
  "key4": "64PoVwG8UDgPvQoTsk5WwACmj5V9DpGLhM2z2yvRE3mEU2czBkFfGvb6iprDj21zSw7yhLHfamr1iNyyfYAhpNrW",
  "key5": "3Jwne6Fmampu1gppft52GMaDrgWRui5cerSyuJLEf7nashYd5axY7fvZEPs7sg6xLs8jzNN5D8LjJpQNUPNxA5rH",
  "key6": "4iJqCzXi9GbVN3qegGNb6hqjBdsHmNWoiRxW8EsPJ7zZ3Eonsgo3LNmMw5H7HU639qUPKaK5J5Sb1T8svUUziA7K",
  "key7": "2iJaBzyYtoSWVh2bE8TQwjP5HqhVxLCXreh6wmBKNP828VY2Xd8SUL5wzU5w2mZMa6FF3MoYLMEozxhadRktc8mZ",
  "key8": "28bjd7GCNrczUmZKJndpNMrBLrDPxyFXWEn21RTGfgFDopoJiXK3rGD8MC699UHGmqWEPJH7mZuinFfRPpEGWXwo",
  "key9": "3dDBbF8i6X1aWWYQAC51mwqQvX6HuuwHQ2a8YkMdZM1hydbaGuecSgWu4A2m5dZLt2ttFA7WNiXdaQhrXwyuYG2F",
  "key10": "4BrCGaRv6dhZDBdVbYASgWpymX39dkkcNsbRKcV29CmznQfWmE86qCUTcqM52SwwrFdpYqySFcSTUY6oWNJdGQQj",
  "key11": "idRi9yZpyxD55Q5v1KnqWScpqGKvi8TvcLDh9Vw7n232Fqp1JCNMc5R6SrzFRpHjqsDZu4JC8t6HpqxtBDdPoXm",
  "key12": "3ZqXLuWQq3G3VKiUUfinwcoNSo87BHwcMNz8YcoTrSf6fah3xdvCKe4y12uv1yLUXWA1hRnz8RyaaLmZticBKPvw",
  "key13": "2Dd14rLCv2tZY64Q8wFQzuu7p8WaXy3v35PF9284Wkc4pvGvSN7HdaFHqAWdk2Tohg324fjdZ6AP3r52FsiWukw",
  "key14": "3pFQ64bL1Ea5uSw391gL3LNhRVySAbNMPcvka3Ee9P7WPzFVKasamYtPrhshifBcMt6fZnkCYUkqG3MCAmWK9mDn",
  "key15": "3aWPC743yQ65nDfCTsrjFZMv8s2SCAksLtcPmdrbs8oPC7Asp7UibY9imMXymBxMuvrmfZRkeEdRwMtrVAa4kQex",
  "key16": "4Zjra5c7zyJjencP5HkYWJLxojQimp7g5ZoLb43JNHoUp1vZuMNJR22dLwU6dGBkJAbwkaqAPcFniLz2969ba91g",
  "key17": "TiV6xdtby7nQ6bfN5mQ4Tc7EnphA2SxqDfkFwur4dct7DBjhvdyBG8En8XnU5AP8LGqafnZUM5tdT2grQtgKjRv",
  "key18": "47PBB42SAsdmpYkTS8hAVbhTQtfLSP4k9viwN2QWk1nZQFyspyk4Ztntuz2BVyq2CtMTjd4Bfh4wXRDVeyv7jEtN",
  "key19": "3ZhbdKPieKXTjeWvui2sH6vErEaQ3yU1Zh4u9sNEVGXHfVgt89DCyDnFeAqbqpgKgXjMcEURkXG5xtGTxjuoPz2R",
  "key20": "HNgQfPgYvttEM5DqfJ76qEVbMcRFgZxUGfgHTkfR9UFcFZmkMJ3TWQy818nYkUQuuFTmCGkvDmJkSaATLoCWWxM",
  "key21": "27rc1sTd9JxP6PVvnErPfFNb9KUxhoYpydye6qiBKMiW6HuEaED15hdLgYph5bKmPEsxaUqHxsKRH77FvH72t3Cv",
  "key22": "4qpQRn5gR5sTysw8sLFmXGggHRBuNP1ssT9onwV4L1NHMtmxdxcFPjZYjmgAM293cc3jwbty2GPzqMogX2F21dmM",
  "key23": "3QWoG6gyJSRNan3CnLEFPrDCktnqgsVYYoai6xYbt5aMKN3wJgEMAEjGe8AcLu47FKaKLJTKjnHwTiHqBEP6QGbd",
  "key24": "2RWXRiJa74fBEVtCHnzLkN9Mi2y344ZuDAtVApdroE37jy7Dj8Q32aLU3Eu9jNNAfD6fryae1pMvwzSUzJjP8pVz",
  "key25": "3ZE4VjtapCMpX9k2PtSPSiyB28pJ99JYTLgc55PZS9EfkQ5Zq8Qe6fVcgkzRw7HTYmiZVACpJnenfqqbdtY3Carq",
  "key26": "3vDVmafjbQPqGJrGC4xe3cSwS155SK46w1BLDGYZxUs6pbnaz36pEzr9GAegeZ3Un9KVkLtyHVtpoDupz7uRpsgd",
  "key27": "2uVwJva65UKf5De6xHkxooRCCbjsUTsDfoCkUwYdRC8kPmPXzvBBoRNx5eC5rJt5k6gim4DDBcR6oddHKttXWmS7"
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
