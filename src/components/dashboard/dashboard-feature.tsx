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
    "5Uo9vNc683KruxzSmdqnLi1cwcjzDwDekEx1PqfeU3oYoXJwRXwhwndoFh8ytmFTU3rmmaukEFJDGttKymGsymY6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "WPSipwC6myHKgmWFHr4sGVJ2BgDRmC48QDsJ2SGKJmEunj1eRipMiR2tjXVTJkjPpMDiVY3AQptDDckdcs6dbTo",
  "key1": "5eZpVinE8DYTG4axrVB2rMA4pr1ogu8J7imUqb42WFFtQ8W7eQuFTDgLEL6tzerWsLUb7Fu3j6ZTBMsEuatvYWAp",
  "key2": "3an5jzJJCcw6HriVXSNxGJGXU3a5gtFupU7smjMb9xFFoCaYxGc6nfZAnmKyozbyE8LX4Pt7ESZVkZuYyMe9DR3K",
  "key3": "2u8GTbMkPdSgtHSbWggitRWkJKUjvBAi4GUajELFDFqtwKvU54wYMvnqVhb2Pav2UU3H7mKAU6zCKNYCFffBx6Dj",
  "key4": "254MUYgrgsiHSEMGccJybLUPQEUEdJfmgV1tGAr1mMWQeuzK293BE7CrUYjX8GbTbpzX34yJRzwHVxoFd5DVU3dK",
  "key5": "35Wy66pee2BGUUVn233eBK1LdmEtp23szEBZwQa4PaKnmeUiVbPiLs9AaWMSwcTYFPWfoMp55wdN99oTNfEBoPPs",
  "key6": "wDFnt9v5Xq9zCkZtZG9LUzcQBtigE3QM66iLFh6nv8VTokuRCptL3jXwJK7vrknaKkZVrMc8RKJ1wyPniyXyxZk",
  "key7": "2x1Kbt7PJk7QrdwAYi2r2NK65SybMRLBAPqLtPGJT9MbVabVpdKa8dVhgpveywdarhZiTf8FT1BnfqHjwP5J3cQs",
  "key8": "4TRFgs7sszS7i1pqwAHr54RGEtLJWuMfMb8HS6EYhe6oEdUa59nvzCWFue1ZFJxfbNuejX2XF7LR1HxcXWFMtomS",
  "key9": "xRk8rNGgtJRfXDCzvcBhuddcXfmTAdLLvTY4DSwRUu1inpQh1WA3P54pe5u7ufs3TTEpGUj6Qa8AVGFttLWD8QH",
  "key10": "5Pm4Pk9mfmh44Lb8QE7LtdLUiJdvid8iLSFDen4eLNz9xA1ebcf5fL5bKaQquULc1PP8zYcfsoCQMhHQ7Tgtbvnt",
  "key11": "8XSd6k7DQLeapE9TUtJ421GCAZmFpXjpf9tq1gEiXFDqpWh6iWzFtv2ryMQPoVSmBzgeTMMsyipZW31Y6i3CcdS",
  "key12": "4hWHoyKwWKq8TjHGutvScxBy138YFUutU5JYnXLLnSNqhHvDswZsV5df7Uy2fijXhC6U12rsk8rxa2paqUomA3GY",
  "key13": "2kZkWRJjyxnZsYGSTDq5atAaCPK7jMNwMhU8LSU6N9BcwSdgTKqz3dMPoR3FWKJH5uKcJuJ7GMFhUzNrit9C9RES",
  "key14": "2tXNB4adcWdjVjXnNJz36M6uBuhad81pYxfMvKsvjS5emgNtswvL6nzJ78nMDJ19Nheo8Y6BHJFdS9PmD5oBd5yu",
  "key15": "2Z5ZUTqA5w6jmPKRFsTDv6NNseMUmMcyg4ZCN5wzfHixPPZXreEnaz8LBURED55uoAY5uzUGNaez3TcSDiRh7Net",
  "key16": "3ozTLmZEidJkkNfbBRFXJkVg6w2YLALE2LqEpXacEnMfjYWDCBspxe6K7EaKynmkd2m9zvAPbHiZTH1nNvTtNTJt",
  "key17": "EWbFGeC6TjvA4yEAdc3BSsptkuEyysxqGpKLgdeT62BDqsbq9WDzPbYViFGeoLrL5BFnh4VLmboN3FQQcY8SxVG",
  "key18": "67ggYVFxiWYZ3dkqQpxs7TsiGeG3PyECrKsNsjBFJNqnfv7yYkYvVxS4x3gwCKXXQMMZVLpKSFgZkMVDYDqoNYHT",
  "key19": "5fdoh6W9f9FkeR1HKPzg83y5mmbv4eWUcFXocteAD8oRVzvAuUaAvAmftMMbDZzt9AaNrQaUfruV4pq1pzSFKUs4",
  "key20": "5CUk4TV6DE6EBtaya9CyzwaprpDe7ZPbN4UKDWRZ32KFvs3GcVdg1UJRJLtzztBA99Pmcck37cbY8MZBgpEKdqrd",
  "key21": "5uk1rme5iMxJzNZ9mC4VxNz8GSmhPUxRTHZYutnVLx4gVo4jkP9ToJAMVp1VTmYbB1KuDo66DJ9LzCj4kdiGYR6o",
  "key22": "5EGxRMrzRR2MBWdLodB9cGPYe1eV2TUpxtaoHka2eVVSiMN4taK7mXoXRBprQqDPPvMYqiBaUguhxRqoGf1NqfZZ",
  "key23": "5hejpWDH9VYSV2LzdU462g4pcChU7tHSwj6DqqvNJ2eqkTJhRe54VZR8pFFUKT1mrRPh1PEPi5umghgau2EEQSp9",
  "key24": "4SB8Qoe2JeehWFAH2m9Vagehm988jowDv3kyh9XnxXgAFtLzhJ7MgbBrTXaHgcbWPjaQdaX7BdygEHbGPCaDyNEy",
  "key25": "2XTgQ7Nv3aCxc9SpX32fXw6czuijSDnTYPoVxTQ1KLPzMpoYMAiphd3jmaCM3JNUQE7Ce4UV6Zu766Sn9DpGcxh8",
  "key26": "2WMaGpGtCSVTZrYWsWo89aYxq78LHmwwXBvPXDXYCpqXX7k4a6qm6hZBfAutxEdYy5iMqjpfxrVH1Yoz5tdqTBbR",
  "key27": "5dzPgztyYX2ZkkQeYPcigMJ82ib4GarcHh64VXNis1NuFeAptH4ByfogvGQCCuFct77rZj3LJCe8Q2GyuS9GRWBn",
  "key28": "5TGbMVUGc33HuwAxfEBLuzzpgRMg7V2kJ3K5j6S82ysnxffwdE5pFiZsgL8Ab1ae86trBYtWmkMCn5vKJtBdZ7a3",
  "key29": "2uSZSEgvGm8AmAAWCJVYDrA5HVKU8gknTbcNs83ayU8B44VLvA9A9QwHXbpS1ubcsNCVa1oeuLEdSrDxZzhV3bXM",
  "key30": "5mqnTrR3oypHhkGYHpyxdgTaQ5bKX2ThsJV18WBYjJhVbnoQ44Fgnvd2K1DDrqVe72HM2bWVEBt4xcngZHyJqsJH",
  "key31": "cg7Rv7uAD4HEBSK196Vibr95dL7CA5AyNryHRKw1XLSxq6yfhpUKnQYZqdnyR6mrsgL7i2rCctxh7w1H1QmTc24",
  "key32": "62aashzktx5qh6gPyVrsk3eYaKhNHPBKGax85Ndo7wtExytdmto1LEYRFZU2mEHGpCSpynJJHB1A54jPMRjKr8DV",
  "key33": "2H7Rr689dB1zhwszQTMDsQyLE68rkT5mnrh2EAQp5RmYfoAksMyru4EnBDLmcVpRGr1rxsDHKN6KAbaAX5a8tPcs",
  "key34": "4ekPXCLGjwkjz1KfcngPpT5cqozk9fj3jLB6hNTW8SH7tdpw6vaXqAh5y2TngQrjjHRo9AJ64GJQdUMcutMkFzaH",
  "key35": "4Rjr8xyqFqyUojYyfv8Wk7xrzxJSETZ5wXtHVrhqvQUNeUsmVELbnYkfUwGcbTyATkudyPgRsf5YA5oVzv6Rfuf7",
  "key36": "3LyFjcmhaush9DhynqfwhmKy2wJNnKARyT4ZvJwQDakFMXDvMkPqbULfeYp9D45qddzZiWt8RBid2hPDSwXfm4rR",
  "key37": "4usDJKJeddHVu3uq9x2Et4KB7md5uHkyQxc98B3TcbCfJX1opsvmkypguDn3mPKLBpQPJbHQyXXCHQEAd4HqNpyy",
  "key38": "2KAUuLrWaiauz5fneVddXQiYf1Z2hjcW3TieNxfhAxRVZVcbu6rm413qHgYVEpD45E542B4Lbx6Hf6nQXSyyMjWx",
  "key39": "5cPWVUdB9JhhKMQyW5JgBbhpMqZKigjfV38H73sudjTVbzkj5bRQPJC8jjErbbv5mpH6jiK477huymK69ecMM3MH",
  "key40": "4hFesRxcBh1Q3bwsUnwWjcDzD7sfBDJvRFjvaACJJKofonpWQfQRa4Yn9YoHEcg1ADycUkBkDkAnA1UpWZ6L9rh9"
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
