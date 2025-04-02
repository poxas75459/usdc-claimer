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
    "2pTMZvzcVHNPJGUo51nYy7QRxf5PmtmmbWMfaAPaL1C45rypNJJHAx3PFrKuf57Wocb17GvVCqZZDpa1RhtNi8q9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "LWxFLskDutQsGhGgcTvZ2rtSRsGzGGJ2yB4L52Fe69WS9PePWZo18yekDBi9LVrKf4T9GmQNtuSX1QSExiFuEB8",
  "key1": "4FipgLrBEUB4DfjEFjDZqSwJLibANQytd5mXktwHw8tU3zHcBHweMTzhRr9nE56F9XW9sqB6CX8evAemnTgsn5fX",
  "key2": "3wzWTMEpzsxqv8F3w12Gi5ZWDZHMSSeDULoeBR4oAVF34HUYjc9ELU7Si3esGjkt1nzsrusJjH6CTmyuiYBJnzFF",
  "key3": "2Fy5QLFPFGA2h8X5oxccNajSyoYhmHfxu2f3ez3ZndUQ89DpRSMkq8zLgkiZpezaDp5KkRUtkXyu5VT8T4etkcWV",
  "key4": "62QqyZFXKibLeAvS5nt9TGnS6csrgheZNzZRzskH5EtQzyT9f9EUUJbZ27dSFQdJkEw311Sz9Vd3HnQxuqgAi5bV",
  "key5": "B6q2p2EWNvNdQ4k6AoDCFsky1kQoACXyH3P8D3Rrdz7njJZNXyyxY5mmfNiEJkLDPcZAGFXVtxAbMT4Lbc8YibZ",
  "key6": "3hZudzbBSSnRWkh9p4mppEPqSoiekQP3D6p9xqP5T6RCAz1DQUJb5Dtq7P7MZJWaDtdDfsW6gxfU6gime6WZPdxB",
  "key7": "57iCdu3cAUXqRAzCQia2ZSFBLZ9ySNKbQqPr9w5ePX6SVbqNJYtWYWq4Zrtp1STdFXtKyNtGpS9Wu6pJXEW2YjSF",
  "key8": "42duzhiKaGRRVse1KRRUmZQL4U5f6y8uam9dHsHJrLJ5z1rFM9s9D7jQnigbhwHSTjaTZQtEWtuv5j2uVwSmEzb3",
  "key9": "3aTa8f9Gzes2C9N6yHYma1mK5U4jtChhSWxT9SP73CSvYnX6cVRqHNwkPh513ukGEUYxDEjrZFwUvPsTavYWKQEp",
  "key10": "2UtZ6otMvTG9m9UqoCe9dLmgsQMnhgRDdT87z65ngG7vQS5p5bE9DcxYetCjrVRzUKs2agPmGk41b7ZsMdxniNUQ",
  "key11": "3xMLM6QSqHPmyWiv2G1kS957VTeuRh2r6dpUEA2QhyhDaJ7BzneqoQXJS9gSWbZntt5V66H3wUpAEeDsW8Nhcw3p",
  "key12": "65bX9Jgfvqsvnd72nWQNgvgvZuj4ojKSnLE5mba8zPHacc9muELEXYRBUoyzH6MJX1NfPhmqroGSPv5KzfktfN3H",
  "key13": "5yKFJG1gxHvtLFAB4xzZoT24ad1Mgc1xdcDkdb9fKhWoocVBDPV2h9Dym4VpifmxCnPC1XtH1CuK5AxTjv64qP2a",
  "key14": "2pKpHHVcVcKdBmV762WwS2x3scZ28Gcg2Njq8p3cE6t7c9HM3dMrGbuDaHuv7pLewfAC24vQ4rFY4x9AfqYARoDf",
  "key15": "39Xx8dgygJvTNiPtDhPvUFcfyFa3yPkKMtxqMeHLjtTAvYpPy5iAicASwvmcvaUuGpPwnYwv9hZLZydUH32YaWo5",
  "key16": "496qtrDvEfrYQxF9PJQ2NoA66QBoEswDfPtzwADsKHdLANk5QnUdQCgQUinYqfgTpkLh2NMcQgsTPnjExyHoRZbN",
  "key17": "5F5wtUR66fi7QUviEotLYKuEUARmkmbGAe4rNvMjYyBvLiMqqMgjrGhXdopY199x27f7sg5XwRBDASWdXwQvwYYa",
  "key18": "55hHzBkhK7Fce7N6L9d3AtvD9HbLvRBjamDSn4uorjq7vCZKnReFWtiLTnw2znsams1kRVf2HKqdrrgg7xtbDMJ4",
  "key19": "2ZHDodsWKUeRfEMTTUdcCCVh9AAh6CmjzvvtfJJz1BPJDJUf6iseMDzHCu5VtVC8pmQQgCMXCpqGf7uDcpsJGxcw",
  "key20": "5JaaNFDVUAMrFMS1bsh8Rt7dKCs8A3qBAeNG1DpYMNdZK2Nr4BFE5XFaeuEqDs8RccpFheGvXQMgAMXB92swPFCe",
  "key21": "4sAXr1yB9rr5sJ4RD3hecsGEmR3cSfHfgraEYn4vFQvi2F1zLbqP7YWtnzZ7KrpX9Rg5sAfrWnVxTFJSvKyiDU7Y",
  "key22": "63vMsmFMqXfMsoUK9noygMxc3wH6N3jPgtCqrK2M9VuGCH1rjL2YH8vL6qECBJQojg1vmhrJ64birJqPTB6Yds1Z",
  "key23": "5F2h8ZvXe6jv5j4Texv8S3y8sUx5jE4hJ39QLKFa3Q1eaob8cL1tMoe4JU8uUrphsBC3Drou4XkUc9JaKnbSgkpb",
  "key24": "3gP84QipzNs22DdWsw6HAx4b6VYJRW8RARWDBsbeE2iLZG9wxB5VXu12sVetEXYihRq8FvP6LqPjieaaCVCBXiA4"
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
