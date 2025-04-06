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
    "5o7aWd9sFsUwfT4tqkjKjhyrn8LYce51UHcvPAviPpFrmvs7etpQpDhYDukP2Gdx2EoDWEFStfVyoLBtanE3ywJb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3MeHQG3UBz9frzWFjUiDvRbAjcsfFc4LZdqLrC4R4E7cmsRBUZ44c6Xd2VtSfakgFAvnKtHrrfrFxmHT4o24muUN",
  "key1": "5BTai7FJVtYn2D3D69UTziY3rR7k1woiraeZpadsB7i9iPrFs3gdWP4GN6mfp3sGGUUCKZyyCq5vgPRGSxC7gvqb",
  "key2": "2BCrYYth5mKzSJnrhFhG8HEaJpo7h8Kv4ddUAArDfsm6KLiBcA8NTy9SrWkpet9tBpn6xhFpWFvCgn7gHZWE24cY",
  "key3": "2DdbqfngJYaQHKu8XsD3RqDEi1ZDLGXjJ4P5Za96nx3BPVUZq3ZmyVQKkpUKVNBpLP3p6jFBRLPN5DNcr3DtrUot",
  "key4": "5ryjpALrAxLJELi6mNzDYTrKqDNtJRvmBkGTjNL4ivFMn69HYocG7XKPz1LN9MDkRAEr3yBoG4ezjfKtHKgr8DwK",
  "key5": "4yqoGUNZ2Y5KxYX2gC7MaDj6WzxYoYqfr15DFAixWSo8TUyszHqVMmvi79gBRaWNtWnPemnJEwTm2Hf464e9AQcY",
  "key6": "yq53NgXbx1zUGSeUzrzvLGt9E1Vyhqtmbsr4LiaMbWy3HwoMvCeap2bK27CwLgaaPEU5DEUYZfmVQEG7E2Jw4Z2",
  "key7": "5txLkuPHjh5gi8738mk2DVooX3zFLxQGmAo8o1CcYfT8Uj2jpLC9wTzqk8uPucFZkRQoGFAM9wLXjtec6mNXoEzn",
  "key8": "2frTyYe83kc4wrnLV8rNpTAfWJfavd96YfRSS3HCZN4NF62FxFDtGfLDNzzhQSDtPpH5Xr52A6aH5NuC9ABees3N",
  "key9": "38KKkgCjCQFwUb4Wv43EbYZGLTDfPvooFptqpj7bQzRAnGJ34mqn4qYMbwaLfcMuQPpNdc6LHnoGCWuZoeATbFoS",
  "key10": "5NMYtAiUc7Bg6CsWq6T2AYBhGv3xjGp2rStE4bMpZKCfr4MTLu7AHEnhFkXmRx8cDy7KRMD8GFcHxZA58P4Xijm2",
  "key11": "3GcGjgxegyY1fnDBZfoZYpyY38RsyjnGtw1qShBKQgevRJ64w5f9ecnU7iRLC3WZFfso7ukHMFAPvJkA9qrtN2u4",
  "key12": "5d3Kj5RRuwEfd3pvf7EJYHw9YZYmhgTuXuTZNUdRCkvjpQnLjbV6Q3YZWCDjvxDpS64jtJM5sK62Zn3V7oK1eBXu",
  "key13": "H535AFU8fCXFvobiwP3NW1mittPpqyLq9Wzz5T4YE2yhwmqjcd5qKVDB3KUxhqXpsE2bh6surrUVFtvM5nNHU42",
  "key14": "4oaYzESgmhmxXJ8j8Yw9ByH2BYSSW5wPKmM3ULGM47hDaoCRK4PkcMs8gRni6saWD9qve4Jur2oSFSe99z6nJRvz",
  "key15": "bPhu8CcxktLiYQjpxxHVvgdffhRjXC9e7XBicPQugzpbEABVCPMqpT7dJosUzXtesBCWBnn1jALe9Ccm3VLdRXC",
  "key16": "yasH95G5iFgt4rhPbT2sH37yKcpfd2RC3vzjENxtDwJRTL6HWtDG5cTNr4ZVFNc7K1zQsxZrUhnchN6AAFojVmm",
  "key17": "6p722NuUAauF8Z3xM7xMuMypQG1AiJV8SuhYD1w9JfecBUWd6cRJKU5CxxUn7A9V8nUt5Wv99fECz2bGupjyc7f",
  "key18": "4jEZiBDduRadY8mV6XgBrkHLac9RDj3WdsSjmKUPe97c5i5in4vWf1GzgJ9H8sPDejmmYC5Erhxofy4bFuK65W8Z",
  "key19": "sX3SPnwf1u88BMwemxkNaLC8hGGqkcJUF5ZgWnXdZnJ9LgscESNH5HEuWWipfuVMPjTYdnsUP27omokYiyRmnzv",
  "key20": "k2x15qwwS7rJqffJMSf2dPHep4rBkdym8bn516Vn8sC5KqvBB5kK6RwJ9CfCQbZcoMopjZfNEv6EkKJC8PwP1d4",
  "key21": "URuHwVbWUEmQ6xj1tnv4TN4vWayhBiAW6b4JLugoi5XVaM9F5PtiDzoubP8hMc6TLHi63muMLP4nzhbRvewYgyf",
  "key22": "4VRVXLnhMzHSaVLSyHZ4TQT6PFu2kQ4u3Q2nKvjtZwNA2p4QVBe5UmeHvMMeb4bmF6bjX3MQNpDBwNcXrKJqSPhw",
  "key23": "3khgdRgrwbFy7GJFepruCtbYFeArAfxaTgcdGnn13fLDwbBxtQMSoY2uzAMhy5ekNR6WXp6udsqAVNvgV9cpUmKi",
  "key24": "4XFHxT6gKCx5FpCeUhyDp2iZg1MkyVp1R64Djt897NqppQwQvipKXwUfqYKH3bxjdin9GXQd9aSR9YjdHvQWfiDw",
  "key25": "3k4HfbgPdmMGzF63XncDV1N3MfwJndvBBrahbGsEREmUd4dGX2NiV4poxeQwymbfeNgs3rmEew8v1NRTmfMLjz2o",
  "key26": "63C71FuioV6W29JP64GUV1RAGZADhe4CG5Q6cJyL6DwaxfHSYEfv1Kzqxjk5Y5w54WEU8YudTqcQTYnGdqXAgQeT",
  "key27": "YS42mJGn5MicaBU7AC8tcQ6na5KmYwmMcvyHZi5jB9EFKoWWT2yMPTcGBWX1xcefe68esbMGgJ5PXcMAJMBZNYe",
  "key28": "2fKpUuKbrQVXyyXLAWGu6umy5JsqGzxZPHr4ozHxaEQy2BzzFhcjt1JtysSXjMdzvNbbk9tA7QZ8M9xgkoBBQVgk",
  "key29": "5mPgSx5QtVSDS4HRUAP9WrzrDajpviErN3oLYjtYdT7irUKKAtX9oKmSimipL6vgiYU6apzfUGsVBQbgZVqAxHMT",
  "key30": "5azCSEoSWgARd5CEM7XTCN5cF5KTKbB9vMa4DvMqyDbQ7qeFGGg8KPG6duy88jTrNuwm3rffjzPb5zD7iZHUcmR6",
  "key31": "3YjwJbvvd4tr36DGuSZDdRpDd9TRrsqWBEvvMyvR3mMZeforuCjrWtwc8bQiphnfCfkgrPUtAsdqGSafr5AHf2EJ",
  "key32": "5NDngj8RMkxFFpnjPopKjEzmhYK9R3PDfjWzaFhR5nLutS6DZygfpT2cQoWrHEZRPRKqncwCPAVpSFbpauXMRYwt",
  "key33": "4VVFqNwQevZBUx4VVuNyQrr3m9nSdyn6M6qvZjHyGcpLLoA7LNe9HwDLtU3p8Ryk6TQeWLcBgybFtBLUGaf9xYCE"
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
