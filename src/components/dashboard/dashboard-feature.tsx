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
    "GPotNH9g82666xG2MeEtWNcpBUEPks7J3awFykMU4wTEYuQGhhdWPSPuWdyU94C6yKNRitpZ9Cs4exvdyLboFzF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5h1vrjnyDLQcZhn7Gna7xQvgYDhVTxG19QyCxKKa5vGWgmzNaHu8s8icHB111C7tCdD8ypQBzajTjQH23m7f8rho",
  "key1": "tD7DYYDWgbJ6qgAJJk5tp4cS1foLE4HaCssucxmry4JhV25H8gXQFzaQy8VQScV5MJAkF3cu52pLV3KzmuxSAsJ",
  "key2": "4SbLnUCeNeqWq27RFoAifA3ybEYtXdvJiMqJfZ9T1jq3e1TSNxVh9vPJFyrEEM23hP2ii4CpDx7eVuWUdEhAfQgy",
  "key3": "p4Q8w2ioKBQTtpsFPpLsEVNhBYAMjARsMMEt6ebjwRi4S1daikEMxMNeYzi9ELKsQM5LRhdqeMTfUC1hKNkeYt8",
  "key4": "4nwxDHESZRX4qJLLLbkGCc5DWuZZN6e8J8v9R5kBqo2NqDi2dKf8Jo8dX3Yo5gySsxPUDgjHnqXUBL3Nq4d43Xw7",
  "key5": "4JtS6AV4u2ZTPgxNYhRgkocoR3HbfsmbwpRfHa2Fzvco7mAZ3xhozpFA7xcV4Dv3cGGDTJNKHsDyuXp125zWAF1K",
  "key6": "5vqsZi7a9NuVqT1xhr8cYCnNhkgdigJp1AhCFbfwqGzxLRKeGCEojMjeLch6Tu4iqJZGsSiMCu8b9TqkZmzJuPyv",
  "key7": "3USjni89dPkKbWJnY4tNp5ZVYf6WgvR97rPTVoUiEYNUQBFiL3pCZWuoT5nxzMaPwQtvzPh3JwaLVMyYT3EsgUCa",
  "key8": "5dtpVcWuH5cBwW3Tba2CskZwYxzkBs7AicvBsh5pPojMeYgvfUhcrW2MYT8tbF9iGKo862y26MLM8iUjgcQk6p8g",
  "key9": "35GhVsSwQLLrxqKwhRARrJHXBG16geUCFSXL8nAGh69HjTrGrBbAx8ihvsaJDTA4a8hG2XUebHYEcabbcLntJX7C",
  "key10": "5X1h1VVXgy7YEYoGTZmSY9UeyE9pDY7J5d5Hg64o2ustpm668MZ74rHYnXjP4NNzM7VwGjcNNt8WiVcWNsUuQDQq",
  "key11": "2YQq6kckdFXXgba3AzQ3XCze1MBKZbyzyTLoxiYbsDUyTLaF36K72VNcKCsFGkV3bGvYzDGZR2aptWSnCSMtcoQZ",
  "key12": "dPcvsdgsD8HSRkYDd6BzvKQH7UgbTv2TLdN3SH8CuLUpJvcMEjsTVXg6ioKGstjYVVRyZL9WeLPrxrEbipF7Mkq",
  "key13": "3YVKm8FE6ASzfMLAGzjvcuHKXWvUuh8AUM5vy8HTp5m4wVAfYQbkrHTV8wj9dhxGpsybaKNgr6QqjbzswcTqWere",
  "key14": "23zhdCwtqftfP9LbgoyoUeFnomz4n4jjysKkdJBw8V1tJaVHsHLCQe8d6nj1xQDXhqaeM2LGkmAWeqvDDFsV6Xb7",
  "key15": "5JhjBErFQ71AASLgVgVHBRdHHWZBg8c7P1quipr3stycWH86CZPq4XBpt6qwuyQ2riqDDrcMy9vq5qkmLESJAr96",
  "key16": "3HfYjVhCRkdMwbaorNRRsqypYaTNFT7ZXtnZ1raBtQEwkPBaErnKHdfDsYQBMro4E6XzuF2K2FNN1CS9ejJddBXw",
  "key17": "4TqNM2KUbmrztRxQqN42AahN7HhWKye4BXtX3qwLyNWHkDMWJzP4idpgp4BWriFWBddgk7sKDZL6qA47n7nydRUB",
  "key18": "5g6wmfkojoLeyZEG5eAimuTqgSrX7XC9n3RBsr2JnBBoy514dduyJSe9wgMPS71CCWpQTZHikakWBfMe3M4stQCa",
  "key19": "3p62gDbMMEdh23U5fMeGUtsySARL24DXyQarb16CeDrNXvU5btUznpsxhNXwRy1yrHMWm3ckQqYhoZGzgmetVYxg",
  "key20": "3VwigiYQXdY4eqavYbDz7b59u74JX4PxunUQ7w1VCLU9wYuUMfqe5tFRMAmce8PsLwpGeK4RoaiiNYSK84N5ZpDQ",
  "key21": "3RKdvHYR5XrM8LmqfF7N95cbCCToZTEwLtKc8g6mLJzmurHfLm5EBqda6cYVhRuHNuE86RBeWdRU6B8uKGEGk2KQ",
  "key22": "3iT7nb8Bn44buPsGR7eEqGHzHXaqmzRtyeuyCPYLvrWc3TW3KRL7wbg5NNmA9m5TYbc3jKDAzPUgMfKcHt5ci2hi",
  "key23": "2RTmob5JtVS7C3Mq6uadFQXVn9g6rio4ZZNS5ABYQ2775AvNo27yQhouLizthxT3A5Nfencgejc7VgH8xP6wyApd",
  "key24": "bKbKpSMeiqTt81CeFLdf5fpAKnZu73fgnDN2s4Ter6awCM42Z7214qoXhmrs67LiFoe55i6EKFCZgEx17D6FDL5",
  "key25": "3PRhwCWqYDPqCW6GSJtMt4fTprjdwNZSC1nXLNXerVm6cDx6kv28YprqQioRcx3FrJqVvqFwaKieDAsP39sH3ji8",
  "key26": "8ZyMWVTtna7vpv2zFL7d83LbcGFCiXP6a1aEr8RwZyXSGBgDKYVmQZQP5qL3AMEWM5JeJ54f3HEY88ijAG9fKuG",
  "key27": "3SPoUyhygoXF3pLDWwyw12UdTUuw6GurUyLcUtn9Hxw3xue3xfZKGxmpWUDeC7RpGS59yv2z7iZoEAWbsrDGNLnq",
  "key28": "5oeenowu3VS8Mixe3ZqjCrtM4mhYdHvWsZ1x6K7K5a2Pb1gMe2bwzZRv4huAq2ZPLjLtv1Ay2DXJNSASpLoYAdHE",
  "key29": "3ts2dha8Lo8ZKPPocQFq9Xk6AbwNbhQxcNgzGdkfMNSgs8ykwcK5p7wb9hsF52j2tQ29sRV6ou71UD4x71NDP8v9",
  "key30": "4B6LoW7HJBRxo2HcAgz7ETfkw8SuAEKFz5KfKtcBCUGPHF3twkKZNG8F372H9DaqungzUe4L7L9tNE77CqtNaMie",
  "key31": "2DWUgwQzmuo42fSbv3mKH3PLME6enLE9MwxYR1QkhAXyuWGyMm4Ut5zC9m68JmUhzeJr6QVPRk7CkoP5VXtqo2C3",
  "key32": "TfX7uYe9YiM2XjkrST7qEjcco4cRTYPkJuL3KPGjvcdfUL5vz62Jea8aSbnvz8reedrGooPx7tx1uUoWS8pmevB",
  "key33": "5971EDR1hmezAnm5335kvY4Jsa2zbhWXcbfAseUGHetH3Ktw2kzrjwPY8WtCoat8XXRi2BVc3uB2gR7DHXDZPJpt",
  "key34": "PFXJ2HPwq1t6j1NJykYXQTi6MYgFMLtyFWqQsmY4Jr5P5VdPKM47gsXRgkyfRBfVRGFfajeTsasdq2e1jRuzAUX",
  "key35": "5kp2YWySqPENW2FjgBTXnySc13CH9kNEiXpxbhzLCp8Sw8gnjkgKoxNabWbHjxSisEbgGLwkNCCe5i4p6YZ7pDeq"
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
