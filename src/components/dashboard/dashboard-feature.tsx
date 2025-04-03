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
    "31rPKZDV17Qtyk3JVRfkBNvkoaeAG42SSsBbBcgx3YfSZYr9cvjTLXLnqS4GGdkiHbRk3zQfhkLvMQr6QWoo3i8d"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "uT57VL43LfWMA7jmBFT2tdPZayTSea9w4btkTqjkBUG7H1j8XJrLmndYwUr3Y2GyS1Sy1uhv5wxTGjxfCPjPips",
  "key1": "2nSNRWodmQMJ9JS5ywnpj8Wz7bbSaAJwX7CQT2WN6rKVMKESLjYzpamb6wPAkxsAfVwHF4i7uCTc44C8DwxSEwqp",
  "key2": "9gmv3C2m7ycDhn6JSjxstnAEB4CHFV6Yg3yuT6GoQZLS3sJgWj7UbvVg7yXJBQ6hfsdGZH9hGYdJ7hKvxyZARwc",
  "key3": "5Jc3GC2kk8u7Ksi8XVfGNW6ZU4c4wUfKwFbafqwMX9srQXUe6XeTNqH95wARpEQkCKdDm8eiR7nHPtW1VDL2WFDJ",
  "key4": "644dW91RVE3nqhiwFU6ByWmubApeZPxUfxMxVTTJxcrRjKxb3Fm2UU683yJhiSm6zcVRkCVUf88sNpX3haGCm3tm",
  "key5": "5pvaF9eHA7z6HotvnMt7fW451o37M5gJkMvE9fxw53BbUMbLfmmvyE84y8mGVcqnWTHcNFzTh8u1MReWcVwSbjy9",
  "key6": "5AmDzXgoxa8aNCgNPJWMyZvAiRsDys9crS1VxrLNiR3gQ8pPXrn2pTdTWWxeeZgQR3rbv8Uy3B3sYo5q18NkJyVx",
  "key7": "55BA9vcJ41Rfh5DX1sS5jDE6QjJRfhw3h4kgwguXXgXsRsjyJMvxmBzVif6ttpLztyNWDXK8jTThTvtdooVVR2ky",
  "key8": "5SrYpJ5cQmcYrCZReMxboPBU4kF9CTfjm6ZSrqEz8NJrAynBQkoLxQ8SR5zgzmXTPZuKKhy9AvyvntBLhDxs5TbK",
  "key9": "2Z8BR7q6detG9eMUxa2d6EtuRDX87jp35gTdKQcRcf9BTWNT8L1W41FNWXA3Cpogg83JHoGCu3H3yhiJUrAKH5UK",
  "key10": "5V7VzbZTR52vDLy6kYRiozxfwLB2hXpG1ew4BYxeSzR3BNihCd1J315qrHEwYtWKNb4tip4J3iRHR27EnbrpPezH",
  "key11": "3YAudw4LYSw7jmcPXNV9MC265EraCeoTVHzApYTnKRi1c1D9NUniJ5pBQfm6tmnvECCAtjrWAMg5THfir6fJBskm",
  "key12": "4MgZnRo3WBReCTikJ7L9wB7MGvdE63uyuWvkmJxsqzUfVmd9oGWKqHYg2MgzNBycQuXoQhRzq59ZoTpCEZiVYLB9",
  "key13": "4amwpSkB8HHY94afjeB3BRu6hcbF2zZUWZgyFEXz2fJAk6NknjF6XKjwh5UekeXBiZC8AdDddRdHymGytzsA1v4H",
  "key14": "4ULbvbLbtCVBz58uKLQ5r35drPyj1LmmVTfJRkhSp1NNXRJw2cC655LQPXCs37bUXkdwbm4rnbTELCCWbegtTAqc",
  "key15": "5ifJMACiXm5uDEor4pN4FRun9tx62FQJVct58qSgkVvcmMU7Lq6bMGcC9aPB8RkJWsdC7RZEjTWmSENDprVT5xy6",
  "key16": "2zQJMTzKaB3zEAuSPA4jEYWmGa1tc6K1LsDWTNb8dVxP5PT5RGX4zHZSQWDi3Wxum52NaZrE1rHKZFyYrRxqx7KL",
  "key17": "37PjPuEBEbWNEe7myUU6kjrWd4fTHoL3rvki5q5fgqvgtaKnVWqPY14hvPaxE2kyFQ71XTLWG9bDMR1tn1WhP3Xj",
  "key18": "2ar2qzDUyGRPWF5Lr8s5vUEvWvjsQ312s1xHxDToKwdb3iZPEsr7qVgG98DSnZhaEMbEvBn74NBJgs7ASGDkmted",
  "key19": "2shLXtaryeMbmvVzVdKTbNBwB9NSHpBS8bujHjm2zwEesit2Tjjq9VRNzPPWuE3TgnmbcY1XK5EWF7votMUMHXA7",
  "key20": "5XSHcKsggbgJT246ZbiDTarGWY3dTV7jtmvyjYrSAVRhMP5hvpx263XTACRCfpdFDdDzScz1mC2hRTzcKRcAa842",
  "key21": "3Wz6GhfWi2AZviHTwQnJF7jBrteXbGvZ5oTV34qyUfjCfGC5hER7GaEWLfwLEJRszu4cLJ13hQpmBdaqBL83Uazi",
  "key22": "ugf6BiX3ckE8ELUYGYgfwg3GMWeW1B1gZYudyZMtNsXgt28Q281sdDqRv18VsFFGZMrnwkEmX88kPS7wbT7sWnm",
  "key23": "nFa8KXcbG8FUgFKMqNsPrGx3hrbtKpcabz2eSnk27drNpb1XjSK2oT96EQ5SJgp4gfkRdRWckK3cYxqG12kSNBi",
  "key24": "FFUJfzAaMZMPJ1WmXabFZ4Zfmwh1QSxk2kYdVgd9R18awP1wfSSYUWWN9jQ9Cs9sV1xCXUmq22jM4qZNhr9jjiL",
  "key25": "HDKrQgEQvvcBNQbcsBX9San5uQdQ2h59FbDaBjqRzcixBv2fk5Xzw3iccQeD1hDGMYC1sC4nJaP2TzywVJpz8sX",
  "key26": "3nkR7vT2kQm2Ep5U5H886yKUyiLUKuDeaRd3HuF2P8G3ACBk83xVm1wetYUAfKUJZsLG2VdGwQ9DHi9ndQt6onSS",
  "key27": "3Gci5GKZqRAaRSVEAg1xzQJSQdiNmW8iu9mAmGBVaegrat2ZZyqjUHnXYrFWeSetJ2u5HWBFKt43havubfVQN9GH",
  "key28": "4LLAX7M4tWrQFmTPncoaHHsGw3YAX9mdRjsDVvQzqEzTP3wy1iZvMwdJXqjaTpJH46x3UknvkLWeKUnd92yLj3L3",
  "key29": "SXYqaoeHSZ4xYEfvFPVCCNbtntTnk2i5FqTK4F6hFx7wDVWfFcRb3wZFNAVnPFcw5oRsrdad4wP96s7onvqioL3"
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
