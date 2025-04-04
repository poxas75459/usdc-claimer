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
    "4NmZaidLtHtNPCuYj72D5fcTg484d3YgWp8poEVeGupuzTjNZK7eYPoxNpmn1YvMRUrYmU6bHcGvWagaHRWvGFZ2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27MLQDUMPXvgqk5dntdygMg1Qip4tmYaykdkYdN2kGmgUtVBkReU13PViB1QiRrxfFrnzRgHeEhwXLU1GDmL6HMr",
  "key1": "3MMSwu7Cpcut8cFN8oCMdsExizYFe4rJKiLHGayteSoGo6aJgZT7B3M844Yxsscxm3ymn3BRgp5fKtsawi4muw5X",
  "key2": "HvMmCkCrinW96LgJdkHA235sK4FH3GQjg8Nf3DqoWhe4CXf5j959ffwsFBT2xBmJyHk3cGrwQwTiuCiKjXTn2fi",
  "key3": "44uTH56E222VyQNifzUczBMPXhMZJLiHXjShnCQPdEnVzdeZGiwcrjtgHNfvrjWw8phi22LWmdfdkom2oyePYQUV",
  "key4": "2LFsEfDeN85F8cZmcp7RNmC8T9UU56hkb5PcSkZySJutbKoVkePCCTVR9YEaRk5P9E9gp1rscC8FHxdEyivw1cHw",
  "key5": "3xnuGEsbjXrUYRt9AxT4VC5z2QGSL88yH6mxvvcRFFNk8HhAf8TXoXsML1TV8jDhFYeMqb3gaCjA5iFFSthYCjBt",
  "key6": "x1WT5XPrx296rQikC2TXPirhxutrkXNfSAX8Kf2oi7tYF8aLamj3zNnG52dRcX1Dx26Y4MwQ1bzp7qJ7v6m1cxp",
  "key7": "4ToBvWMRjysuYCCmJnUZbz7NKENH776B1MYU4F39HtH5drTepwz9Gz2mU1ePvwL7ezrGk5ZBVh7AfsA7F5LhDT6k",
  "key8": "vP2FfJN8HjyqrjXzBX3EmPyV8i1KrBHRWK7ZwvCJRFyqEPWuvs5zTDK5rSJP9w16phVpJ4MvXfhP7gBbEzBfwDL",
  "key9": "2usNcWRo6gJampyfnKuEmTv99sC4GK9XUrx2oTcGXy3GgQtqKwrWh94GmWb16mkY8uigZznzgmgqRPDGNh4v3MiU",
  "key10": "5mdfcoo2saJdMqfjrc4XSwwpnx3gPSre2gJDN6UVZbLixJeNBwx3wVyLww18imRzyYMJJgyu65VHn4U48DSAkPQv",
  "key11": "5wyMXd4iYHysirGk6h5ZmPkNzsdQPnw9W3iMyiqDwUVqeAfWS6GKPMmfA5hJe5RN1uy4jMtrFhhVJpWYvdjkJ1Qi",
  "key12": "3ou6jwCGeoahJMuKhUYDG8urKHu7iLf88se7DK8mXy6h4jc6PLmt1voamd9svQuVZ4bRLVBc4Grk8bJ9FhdZsGpx",
  "key13": "3D4kX8Ef78BAU4GM1prXjF7nJpeTLHSgJnDYAewvbfXqkuGc2yXts3Z8YCXvzsJgzrV1vU4B5eK4tpDegL9qyMYR",
  "key14": "aBdR2NFinZAT3oQcPgqhS4PUT1UhAaF3UvEJaFwGCgMtJUpmxWFv8UjzZnKXDkUv7RDQfpJ4W99HRTZwZgAg33h",
  "key15": "5bTteeUH8GE8vjzNzTGbZtoeTeNuPrKgG35PhWzimMFvg83VZHGF2aw3aQrLUjPQcSNCvvTxCsLxKbCxKMiSz8im",
  "key16": "5AcNMGaPCU2u7kdQBftc2jfqdddZ9ELej5jH6eAJ5wrRSVekgrKoksNepFJSAtGU6WVq66jXiYBgPrwnkxs5uXw2",
  "key17": "4z6vUD73c4JcR8S82DeGpTkvLKfr8e3FchzDiyk3kaCxhvSX3HfN3vsCjZMXMeKxrGjb9fWRm1zSa3Zga25ZKjML",
  "key18": "4dWdB73S5jvSjG8dub3N2aPxthoV8QJaM17NcutQwSK1Cr33oun3R3bSXrARR68WbQaCCoiU3hjQskpXsdmzDh2y",
  "key19": "GZGfjD7M5sZ9DKwQtG9hoZeaawFSao6V9aHRSG8rqCaRs5WJWo3SddLRZgqUfdGHMYDmzR7prvbJnfdAiGobxSq",
  "key20": "3evJ19BJuG8CEe6P4AY7msoAKv6GQLqW3aTfBDvpq1qugB6ejmUun7PifJyC21RLUKgzHcTdL7mJv4ve4GCVz2HU",
  "key21": "5wtzVRrpcgmUwBwRfHRmLwoLFzn7Xod58kf7sZR5AgsCQxd7s5J72tVfJeFBVkuyhopJWxS2G9BDXawm3Mf61ndi",
  "key22": "3DkmR8Yd6C2uja5NmapA9M7udFqJyWyYF6hFXMdeCxQaZcy9n9dPy9x92MAGhP4DNbAw4NM8DkgvXy3xi8imAFu9",
  "key23": "5XMBrqqAbusubPjFmXbRZ55nrvNmrqZfDPDZEpmREGzLC5bHqcEJByxQpjbVVZgcdY1VbJXfZCH6Y1ZYrfxXnGKp",
  "key24": "66zxzDmTUp4h2bFvwiyvxbYwUGNsZ2erCLu3r2mw8QxiLoTMDdCkK9RH74R4cKX923JvCa6gmQc83vKamokK2Q57"
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
