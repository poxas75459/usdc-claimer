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
    "2DazmLPZgyrZiYBPabrmLAYi26kRcUHwktp3GuYzXn952HonXaUQjZkczBxCWZmpH4rHXBoMARNkek1Eefvu8XKv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5WdFNAMyfnFy8pnuuSK1nVMLbfzxLAhVQTDpVD4SGDdg433FHTHRNc1Lyti6Qc4PdYC12KfWn1Nckv12LXigCvrq",
  "key1": "5Jo5U8bkiSzRSDKnCykASmVyetCR7VLSkqBjty2AfMikPnxR6gg6qjemqeixAtGWW33L5roTmzB2ZrTk2e37bWvB",
  "key2": "36CEDNpjHv3UvmKgDQmAu8rK6pa5jVQ1wEbTjSiDNo3VMe9yDhUzhFtFaM8PZ5SaP8py8THQ64XDYCXp42DVJG2R",
  "key3": "3svWMp4w9EXyJRoUQ1sCKTXuwq7yenAX1mQS1DPRyJVZqNXq8aZQ1BXfFXE14VvW7S5ZpHX9AXqJfFPwQJ1ZCtca",
  "key4": "5UnMoGpUg7GHvcVLBCP2umDqeouQCzghMNdxZFDW5YXJaacSxVH1XSZLYUvf3in6Pj3nfwkVjgXatKsiSWrc7Dyj",
  "key5": "2rjewjmTuBeS5zUhPT4QpjjcojxkGw3mxfFKLK4y35VBz8aH2NUs7559tVoQi29rDact8iMajBqiY4zww8wGeKwN",
  "key6": "53s9ZdnKsDL9jnXY633ab9hsmtS2CMRArwCx9X7MchGMyTZUfXxjiqohvK49BDY1RuY7f4phV9G2rZHb2p4QVxV6",
  "key7": "59Yy8ncoWsd1AJX8sW68arsEo6JTCuz9T9QXcoKV914rf8Bz6S7PakPcDqRxNK7zBGDhsxXq8G1wrBJFTok9GBLb",
  "key8": "44bi9kNpk9tijLrDgKfFQ6ps2o6YYZVj2CMg8FuDNWYWkmcfhafAUy6bvwNTcCBwbwT5QCQwLdKgLgHrmH38PBgp",
  "key9": "2mL6MkeZzgqP8DfGphMh6DYVigsNBoYyqB6wkuxtpcxb8jPoBZQS3eBaJ2Sec5WKTe1c3D96mqemP27YQM6xCwUo",
  "key10": "9KHqrSMmqvQx3j93ktvAiW9f2Q9E47PUjyiZpe8JA1664mG8GPHPYWcbbCHvsRvtEJx5AV6k3he4ayhpfzcKBqF",
  "key11": "bi3H1K1imYgNT6NWznNMoY5Uw3wvgayPdJNbuBWVh7uYX396nqv4SMqFDbadKiB4zLQpYbvQkHjppVrX3dKtBwZ",
  "key12": "rkmJ8edGG6MbVpgTzNQ5deBVEJLCEAZKFxZKk8sYyfYTtKbJKt24KHxfhocZtZYNXJFtGRaWerdZYWriLH2Q7Kd",
  "key13": "619F7DQKyxEsLWQxeGnoM4CAix7fLov7n3Fcy6BxGHpXuQg1B4SSrkrMYfgatgqJgu2eVF2CfsxY9pKcd2MMpteP",
  "key14": "3SuSMevgdFDussDbiTFw16dW7w8W42SaLLbNfP4G54vXve7d3Q1QLV1ebsEJgSDSeBampjkpdxn8Qgng7bJ7yXHt",
  "key15": "55jyZq6Pc6ts6Kr1fPTMXgXueD8RZ8Q5fmYhrZo1popeKgvEhXNLg74DbjCRJZCcmbn4jc4mqPPtUvPfQCRJtqB3",
  "key16": "2DHA4d5NuRBaBuM3VBmoXca1T49tk8gYRzj9GiS8L51tfBWKnYVMmL9CEUaGiVPs8yq3jmYWACvZv8n95oAbEMZ",
  "key17": "55XBepTFJwvUoSZ8fzPKbnwk4RE7Ar2v4yK4G33L7oxUzLnFX4XUJaX8GkVuG2fv4M9zibqfTuSmaKMokJ76FRyt",
  "key18": "2M2DPhwWxTwSUz2He8htyQfyUtFdvrH3KaGraA74AZTNZgb8D7wDRQHwnVdvM48gvpxZHfABPHcCr27BTWK1fVci",
  "key19": "3JCnXZnZevDuc4NEBotmN4wEyfM8CaCyK5b7383Rkb5d34atJTn63oSy8Tr6Fzo41VgdmHHYnyiHZAey26bQrKjh",
  "key20": "32ftcnrWNo8iD3X3c5wXk2MQNHBKKmNg4qWvBTYXTZwVcD6JZKyiCMSiBEZpxNMuWCopThK9DZSfADJXFYvMFzMn",
  "key21": "4oGioucSdGRUqkE1e8wC9NAhuUjAC5wEV66Qvt319yRoMCiKz1GpukGWgQJAtoGnQ5zDwBhs8UFd2UntaysKfSMR",
  "key22": "2GRFL2KL9WyVeeYxsoTY1fbzcp4rS8BAq9wXACNcd4jZAiVnKvkG4VHirqFAFdifQuSTqeSrKq1AG1DXkFa4F26C",
  "key23": "4t75iAgwTRWaTenxdMWovwkc5MiNKiYTZMv9pz445fvjATJNcpUEkyWbxETcZTEDgzpshdvg4Q97htqpH36nkAch",
  "key24": "5Vb2Vr9d7vJNZSHv24Z3zjkjNgejKKtLmgqryDBkRUfokYzLM4kTh67LyFsdXGZRqxeMchb3T8NPsqwEjjLgj8Ri",
  "key25": "4hRcX4uvqsrtAFwrw5mPexdd5UkZAeM6T55uk2egoQGxoimvirGA9s4uMLYyoNhqnU3TwwCRTzJUkntfUtEJBw9X",
  "key26": "4p5vrF1xDiwShmWnJs58ZoLEGaYiMqzQLL16fw7tXjnD6uxZU6S7VtCmFFyFZBWW2vnt4nKTGnXwEGd7sFWZVyKd",
  "key27": "4mZ2zUnJrchd5C7THNZ9PJe7HMrLPavNamP9HirXmuAvqboaMErpVBYMy7tHgCKEtoQV7nEmogfFjRPnHHPPUKAh",
  "key28": "58Jk9bK2Cd4EsFffGv2aAXYbBdRHiDPZMTDkVnX2mc8crkw3cjPr6sSBQFpAFiy5E86zFbhrwugZNY6D1h6iPYsR",
  "key29": "MucbmrPjvRwxZYF8a3eE5ChzuXGuX5vTmtmY827g3xhUghcTtgV9aPt8iDfgGxQcsjaCjst8Buwmq1PgAjyjGXx",
  "key30": "4dMW6SuLnVwtQyqg1dgBkkskz1JFn1QmLDWfpKfQo4iKL774YiprdxVRmCYJkFYKWSVL9qkqNEBFtM4M6P71meQW",
  "key31": "5YiDvX1yDTMT81qVUVFDs4gkVek11qw1oc6nSUiQi38ykLejDr749w5dWsrVJg5AgvKiLmjzLw7AHB1k4pBhzAbr"
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
