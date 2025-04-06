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
    "kenkaZaa7t1s9CtNzxWZ3dZ3B3mSVU52pdVABNXYELsmQz56td3jWDT9piok1vfmdejng3MVpnd8Eqqzkay3nfg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3G4D1ngXVdNApHx6MAAi6dDwzN3DTNcwMoKxRD1c3Y7Xp4P2rrRNv6VQLXZqBC3jmMZji8mBsMM3ddxNW7vXwXK4",
  "key1": "5TT7fM2ThNF5bGmF4Hruu9P8UrGW4Pz6punD1BDMzFGHjbHV7yFpdfrQYbpfSNox63PUDHcu3jUTsUKgS1rvqWvN",
  "key2": "4AvS3m7GjPz1aJRyzLNMJKYfZWmefNH75pHRX4n91o7tui3m8PLT2QnpM1ytCoyfK2xWPiK52uT8pLAdqVD2cgXr",
  "key3": "26Ff1KW7AhCHqxqvxWBkYWdyWDyXHchR7YMHGVXqahLYMZVbn8cfsuroGexvWDjZWqLmzDv1cXKw8QqX1jL43RD7",
  "key4": "27gh4YWTYN4oghqYoTHHNuSa5qHaCCb53rzXrPKSozPuqrcrRY3mqBjy3c1btHsDu3g4EbV1z6gbCdb3nYshRjGW",
  "key5": "5GB67E1o9vzdSx968vE6TZDz62h5kcXFz8X1oGXYjCirsvodk76yfXxRLjuRGtncwMvkMJuAvigQxJEPd1vsoU5n",
  "key6": "3NSNhxKEYJEy9brFQwmikQe2ce52pDuxpfuivVz24FgSiDDw5VgtX5fRn3m7cCZpTDWcUwJ4QeCWJEmWX2GiFTJm",
  "key7": "5yuBog7kJQgfeP3kJ1DW3dsQqQxSpiu2SVEwe3FUbyrV9uuLfUcEo53Z8Vk4UWg3Limd4XnWAphkGLyVV1QabDB3",
  "key8": "Qr1P56Zhruu3SqvMWzDiMmwG4DAspjDGi5fyr92pXXpPCP72hvdH1h3kUxmANefhwkMygswKYpyxhcJRG7Cj4aY",
  "key9": "3EodQEzkRQWgB9WNEemB64bMZVkrer7n7cDSGcYzEVHaDQmPD6Eurq5o4aXhWKZdGZhqyptLkA4gX4hA3riCVUnL",
  "key10": "4m4SHamfoLcNQjxqkvdksJVfXaiwbvUF2XPQmjPc6GYxEF3BftMJgsSBM12bGDYjNASH4W6jdcHdLe74m7dcd739",
  "key11": "4qp4VF3DXr2qx65oCt4sQP4wz3U3qvDMgtbed8XS6k2ngaJJK3YiQfevwdkivqNSUaaqAnj1A84gmMhur7vcwJPm",
  "key12": "kRcNKWjw2uhnNAFbgoBAUkYJ9GWzXV3qJKyuubt13H7jwh3sCAwcqv279KeWUjhntUmu5WyozGXU8tR5HjoSmwz",
  "key13": "5ac2hguXk2oWCRHUtPKimri63PQ7LWAqzheo8ScjHffMYxX8PfT4v9eojbhTn6scq6SYgYE8Z2tDZiWjPbzEH4Gk",
  "key14": "46TfuNK6BtbcgCHonvNctvo6ZK7Z6rTmuxhtKs8PjUiWefwzCnTd7yWLn6n2Pq4xrvvMvVrpP2xUa4QiT2XUgLCG",
  "key15": "2Gywg7LnhQEqHY9d2eJPziCPtx335DHA9m6k6Sg1ZYonrsJ8cZVki8wk7F3a8KYsZ6vDkJUGCZEtJQ16AkZDvmb3",
  "key16": "rh8sPvPpQFAvFLd9GQK49meziwojw8cL75gz6wazMuAk11LkL9Ni3ZhVaFELc3Dg7LAE63oVpRCnRWnSbYMg66R",
  "key17": "2dGAFgrB1P7bH3p1gab1qjiu4fM3uxXKzvVoEea56Y7HSjaYDWBuyM9SmWKkaw2nWFr5AnxwDrqGEmL9ZvKp9LG5",
  "key18": "3R6YE8KzS5HDYd2NE2n8GKNqYCJz8SMXEy55AfAfoZBikNAP18YVNcrAk1zdnyg7DyubdmRBzLwn7ureqVqaw98k",
  "key19": "4m3zymFRYwm13aB8YmVSsJmWaAgtnaht1ZHNt6VejPLcdBZJ78NwqBdAgMGwsg39vBeFj1CyYe3R91dAuxUAB9zb",
  "key20": "4nCEanLBKG6XPSK8fpMRDmvPyh4fSdd2voYcGLdamFAy1YqXinws92b7Vh512iAY9uMpUMqA4inNEB5vjh4jJRM6",
  "key21": "61pzoq9eDbYMT1iTLkfB1Yz9gYP2KMGtkAdJtj9Ba1zDhhLGJ9TjyX49AZLu7Sn54t8StKgNtZvNQVzyzscVcHqg",
  "key22": "3NDSWHNGkSouxa6xeq2FPLCv7rd3zTBsyD8JBJMYoapL5pFY2851cJseEu6RJfN78f3YSgRwthyi2nXJW2giuHc5",
  "key23": "5KxUE7nwwoJFpAbR2V9XqVDqHyqk4syMXUjmaRNeLKWFJvRueZm4G7ttSJkisSXjUFYyi2BFG4CQi5PTXBvUGgNi",
  "key24": "3NN2rgJjGXjEXoGCDhibJJZCUqLNE4s2tHYnL21K2RRft3Q7v75erD4DUQaoy297kD3JR6aujywKM4T5myaedJLC",
  "key25": "33JGWetp73eKxwPrX3m16eUryZKJNsDqEoZabV4GJE2fCd3q2Vy8pGYCS2YAGAQvKPTfsgggEViuwJ1N5eSd3j8e",
  "key26": "5ZAaTtWv7BVuCzDXW7sMFG1bwyjaK7JiiHs5nS2srmWEbbZM9i2p3rjvBah9tkXovDwwxxfuDXEksLbJqRessnvT",
  "key27": "3nWMWmkMVT4Bupx5ZDMdB4gwzrgEsJt3NnD522mRM8pzCqYBs6RhHaKfmPZotc3Yk68ZR5fYYpVWXkKBFL6XkwZS"
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
