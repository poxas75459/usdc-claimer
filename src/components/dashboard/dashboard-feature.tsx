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
    "3in5c6wyGG4z4RZLXA99heKQdrpzW2Jd19QRTYVrAriysq17p5KzeLa7fbhNBFeAHYegwKCdS9djiEsVkZN29fVe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "44YvJD1kXNtpDMXqZH5ArsubHMfEV4kXhmxZZ7P9dvErPRkiP1PL9AWqjnk2QRoiBFoN4y19qWHSV5kC1Yft21K9",
  "key1": "5ShXtahxueabPaKvapm9v74Q7WDzim95fjjas6VNkXrGuHkbEEz6LDsaDNeSrwW4v3aQhN2XsbbuM9RwCQFcHxqD",
  "key2": "4gYrDjSeWzCkRvKMKgBJdChZtudAGBcdZcorpj8YgagYZTJnfH9GRjTfWJnyNGuUjWyUdnb1jTWFt2JRE3ottqto",
  "key3": "4zjBHiPFEVwK8iFfMViKsb3nwfrfNTbUkJTodJEx2dotrjtjukhYM5JnXh9vUDirYB7MW1eFC6EGbDJdrf1oaXes",
  "key4": "5nG27CBsib2k8eXWSxR929KjrjhJvztrfwX1C99XgiqPqCiAWsyW4NZds1jsPgVkoxQcghs1kRjLBUwxJ6yLWUrX",
  "key5": "3LvaWLmeJaNcEQbvG7fNk6J7vZZsw9PEDetdPuxuJZaMF65EQE1X63DSNX4LBrdRwC9QWLA6K7uGn6phGVWdY5Ec",
  "key6": "62gipLmBf8bXhtZo5xjhGrp5JfmP67BX5zvG1BJdVYryTahe1qGGprAhZExiV9XEheRciXN99rnnYjEfrjnE3iX8",
  "key7": "3LQ9wTMXZAs76yrSqTCLZ79wWoVQPJrox6RXWKGJZxzEQgupA957HLxboWMipBqGdDNN97ZNEtML8i6ndbNCptn5",
  "key8": "4SGL819obC7ezGpHoKyfAXnTk7NH7C5EC8aZXRqTzneBucAda4FcDLrLu7sjh3Lk8JPwNLR7mFUAcTMtonZ1LoLR",
  "key9": "2FBwsE943mJwT5Ppf5bLNM4QRewnqSvS34miDV7rMA4y63sfkwxS969WXkCoSfGnuiseiMGyhjJfJkVE6HaPF4et",
  "key10": "67fUKWWD96xH59v5e35DieuFfYthoHj2FY2nhpa81WRKEL1ifNFtinK27bd7j1bzMmpw4fnAA4CrJFbZVWda4VqX",
  "key11": "dMqkyiuqw76xZHTQk1MZwWZML8WipnGF1hTBDy4pj7MNr88sQLwAFY7i9ocbZAXAXfRLFarQ1UtP9zSeTeUj4mr",
  "key12": "waAUgcw2HmbmKffRcRPHKgJMgUssTXfYAwhvfLy7kz3FhqcYrexpNtiRsGdMbZtkoM3dFgjFHhEJzWvGyofvwJM",
  "key13": "4wYGsFnxotBeSGf4NHKPwLS95YUoaHc3tnq53fx6zfgrSVrD8svNgAyhpnidXKGPv3rFa6h8WSBcTCiPyZTp1yZH",
  "key14": "5BhMF9JpYHS11AwqSdmYjZpWhMQuzRESgP2rkE9WPButnkG7TiQ1zdxSyxkPrx7tDSGNF2sPaaPtcDR1CDy26TZb",
  "key15": "48VLTacgMkXwjqHHvKTsp5uEUei8ALs6496ajDft9TDcs3NUjBDMhuKDnwymiaLr812taSJBNXixqHVJ5EtLGudq",
  "key16": "4ogYcMDdNUsMARNJFRKBqZtN3U1B9yUPM8tAWzeHuu31BwZZw6YgXM5kBk6TUBtrZFvBj65NsrKyj7oLzXDMYrg5",
  "key17": "eaf3WRShf6XFVKmekiqfAaiL5erAQbRjtz6QE7mW2HrduDcPn6ZKNNDVia79pPRLseqfc183Xrd8Dn6DXqeUhrv",
  "key18": "56yf7rg6wn1HMbheDqJ2raVCgcU2YoXkFnGSVgS6aimXUxCuGMpUmdec6jyfmUNuh8dCYHTUi6m8aPXytApD1MrX",
  "key19": "2SXfL72JqtZH529Rs12f6xKkKGDc3FbGSXVcDiK5dP2seK5cYMGiNfMt7TxZvSYQEPxjVAzbMGF1fdabm8TVa1FP",
  "key20": "2qwTwxAgNZSpkmPNuxY79R2s81ftXin5qpXegKhCL6cw5G1Wvwz5UZ5fmVpnKf6VcvEcUVDqKeSnkeys1uf54Wg9",
  "key21": "EC5aoSCKfHictdENFUxnZoMAWfzFHC57khdc9b44grZT6iLWvBKMxUzgAQeEW2dXhvbd44BzTKk9wjKhRFjnGdm",
  "key22": "5ggDpTA9cpd1odWxCe1BMmYKpSHjqypcwt3QFyFh2Zvc1TtQx5uKQVaqpNi6SLEiXH3mtdPqMeHYZx17HVVvx3U5",
  "key23": "4Z2ws74hNsBiU9YQFYJ6ALtDEJndK3BPVrbzmPdxehfzmTgWXywxvamK7VMnaGAAJngpELk6XaXcXPokDWFv5Lfo",
  "key24": "45UCXWqKR9yZN3mTBhr996w64MV8pxGrX7muETnVLVSBwKE7ikfjjX2tZApooczPiE9QUwuM1sWuuY61VxpRYbNB",
  "key25": "xstG5bb4m82hEHAqfJxmRSV1REviCezoXkuNAnDXeRPuQM9sV4VeHu3mrdk9LYH384CY9CsrKqwDDZDH1yKg86A",
  "key26": "kfu4K6BbqKcLkv33FCRsMzwgw9wWFDXAasQo8mJSywm7H17yEk18kokWo9BHQXZXAuohwBea5DD1Df4oBTM1sFB",
  "key27": "4RHqPXjWr7ReoTRNVeBZfJh1xrRKWooD9An5VF65zGAbF1xvdiUCv1VwKJEbidbKuLzDWzXkWffEm3hXRcRsZhyv",
  "key28": "4k3DhpVWNEvsMheEX4BjtKk7NbsP4d7dEsudbTMFkkZ1VbTkg8kLxG8mbHFA9kHqsX1YHp4csku3G1TwRkGsUzuh",
  "key29": "2JiVJvQwWjpuFXtBMj1gK6A251FyXYR7EAgR5xATfBbZgyzveTZXZpg3PcYMnuLP962HQ4B89yUadvHfmHtQhiCU",
  "key30": "46d9MyrtL6v8oQ9gBUV44yZYdUJWfdhL26poi5B8Xf1qK3HZwk6VrGgYoUP2hAZx6xbhnrfbhr8ueCZSTgxZU7eD",
  "key31": "2Go9ue775Dkb8A2tTJwFpDi5MtSBNNBx1vNw37X6vH1nAX6L6NmYaaCn4FhAGq7y5D7SHWAqgVPeUAWxmEXfHgp5",
  "key32": "2PX29Rgu1p8Gn4mzsqHX38kVtJNVgineJQ3jyWDDmYAmwJ5AQoi3pJXwCVjSfwUR2gN99bWW5rzeedxnd4aVmJNE",
  "key33": "46iHrcWUUHrPMfF7RPY49UJ7RQkUiWAAsU7VRn1AStTpNcwK5WHfdjPvDffSPeuRtLq35ZLKTjoxjtSTZNFkYLeS",
  "key34": "G9PfFtetQyxsPnEFohvhRHMaA226t3Ux1S43qMe6zpaC3YsKqWA3k8H25R5VW4XnqGkhneYj4dmWTbcFF1pGvud",
  "key35": "53xy2NCJya8XtiFxuCw9zctrrCXgk3GmJWRXKFfgjR1q2JcEpZFR2rAFqJTUSuFMvML86zmQwHm72s7R8tTgvWDp",
  "key36": "5CUBxFDb6qUsHjA3tr1t6c62sJsy9YnwmkRuD8nMnCX4JQfqftEKsDbRtLYidBNyiyf9DGRYL5QH95rjdEf2vubr",
  "key37": "37BvqXcxfjRM3PGCQY8DEY2v718WWiq7qf61jMoXMNYtvVrmp72KCjm17qJViobto8tthqZoekzgHi5FoVLHWm9V",
  "key38": "FfZ9W4F7DvRGMnaNdiuuan96vGRYMw3DedasTdUG41tobRCgZqDeXxt6McftSYZCvF6LGKon1BB2G9rHuHDzssu",
  "key39": "3yPyhDjNun7Ev9RQYFA38dpdLx9n9VrgKnSrYxU2inDgoC2a8Z9B9vEc56Jf6zcMaWrELdGw2TZzPTNNdv6BV8gB",
  "key40": "HeGJGxR86Bc6M9mAtDJqBcsQU6nkeQ4JZMQDZ8QTd6PqhnGW4s83xTJTaiBXENgr3YBPByVdBAKK2zUFy2BAWZh",
  "key41": "319yG1aP1jy5r1Aq2BRDJstm8GqgH6VPbZGo6gEQP6kFaxLjy7JwxUcqsfx4EhsAAuWZAexrbJHNPJtKd9TDaZxx",
  "key42": "2yGFjEc6cxxm65X8bi8RCQ8ft1UvMAQrEfH5pbSCHS6vPgvRKqMmkviB4cu9i5uxrkKPCWYGUgHHXkVzpJjV4fPa",
  "key43": "4arxqSbauhXPTCKUCccGwUr3jg2CpmeMmLAcH9nYSFW2jvaa5heWRLeVqBMp5kDqdgPAxoNBBRUVPccF5w9Yv2Bj"
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
