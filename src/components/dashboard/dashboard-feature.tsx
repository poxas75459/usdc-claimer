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
    "5qKGsK77hp9tkRS2xXMpwEaEQhsCw32JBkysN64xXqk5P8cWW7hk8J7frhLLBHGxcGJWGvLsTxnp8QXsV5umiQz1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3e77EuK5bWpvhGTKE5nJKm6gpEZd5ZCpnjWZEzRrena2oTF2z6jRQ9AurVruxCeKaQYSnY4smYihGafQUXDXdDxE",
  "key1": "5njnT9GKZXdueDpzxytGkPrUQqB3JeLxvsWahHAJfMxbTns3K7Ge7WjqaUnhJi2GmR7LUm51ePwjxff2Di1PFs6v",
  "key2": "2pvnGxXnFHorPQhxrz5wh58iAKhDQeZeav5xD2qFEQ5MS6oQT8b6BoSUnGksSGYztewNv8mXuCQ6t6hdCf9Nh7NL",
  "key3": "4aMfo1iRe28oNAG2gnoSxqmKBucihDiGrq89M8Ycm2kodQStoLNw1zDRYfTGzi8cmcyR7DGPdEZLjxqSRStXGhdo",
  "key4": "2AvU1RZKmo8iMNeDLroGD9ibSCT94k1C1xgDhsggpWs4PQ6jR3RW9JygpD1BB1CneshSU9ogE5De5FfxoCZWk3Lm",
  "key5": "9no7Xsmwc32KHtGYFWDKYH1xH32cjUizmhQ9Rdc9CaiTw46vMqZvttX6dW8RSn7soxBKhCmr7rDCyLewqYG2WCC",
  "key6": "2Ugsgp8DZVNXpsZKRDDvVMczKZjpqjfLEpuZJJe4Yov1psBWziLqb4cGvEMyuXX4dVq7h13mDPK6g95DNPy1YoUP",
  "key7": "64MWTrQkcUUP3CXqzDsae6ymsgZcycJgXFxCzCJtcfZtAZwB2EwxcEsbiU8xCp4tVpwuus22SYfPTPoU4g3NDbp7",
  "key8": "4seAXc6sAKrAyzMtExk29Lw7gxRms4jLobhvYefpcLYFJho9DJJJQoDW8r59kXDeZH4NVhRrqvfDVZ1qg8aHZKEy",
  "key9": "4TpZxBduaHz3VnCB2yJWBoT12Yu4fDif4R75XTHRRCWu2bX4risNP39pjoZTeThSzdjHRpPT2udQWw8P1FzcBqUW",
  "key10": "5dRN3MoqRDcoewaXnDso92kNgjAAJSz8m43eqv8B6GUKn6xk1SdQ2DueGs1yuvQDBNEHWcDeG8xsNuoYmzQJ6Afg",
  "key11": "5CwQzgudq4ucT8fY52Ncpf6iqAEYmpopJ8EGkobPLzy8cm6akqvPpTWuh2X4vtjGrp62W3vP7c9EPyRBBcKydhkT",
  "key12": "3iy85ehuQ7HXbwD2r8DQWE7qaJ2BuE7os799PQuuQCyjPeSf7ft8e8vMiXnVZi3weRdEeRBDer39PN5i4nAXB3aw",
  "key13": "5fX2kTYQgxc57nBUto7fr8Ph6y5rTZ6RMicwBBcYVdjvzyAv8VFRShsCDHySNcT6qxmrSek5LWNkFwD6s67uK6g1",
  "key14": "3QE12akLaeN16Wryi5w6M82WtVTubgEzBwFJLxttJkFGF4LERZdkeAt8ZGo4ZP6D1J8Ppr1gi3WvizmFV3UYM8kV",
  "key15": "28THTvYdvCW1CcjvBCjYAfLAHgPtUofAX4QcwCQLX7nJrWAo39rFKrtPRPQfLqghepZ8j1hMojn4s4m2Rc7MWddj",
  "key16": "3PVfvmiKYzmEhnJkcGyrBC7KyfpuU2e2gurQDNnyG4zPMEx6U3r2fiBWiRAdaWtfzFuxNgdWYazQ3GnKxZnfQA8V",
  "key17": "4zKQcPzonFWf5xU1U9FWHzY43UFHqWhvZ5djTZ7qrx9GMiykyo2xt7Lg1mUXqFE3htRK9CEF11UNq1F6t3jg7xyS",
  "key18": "3eciz36VFxkQP3duyMCSCNz6Lsptc6jU5m2TJK1Zkd7HYQdWm1k8GbPHbXERqPTToySTnPqpncBT8XhsFHYxbvBa",
  "key19": "F9yfrAVnPdmPiU1okXQqhAjDQDqthg1vTCZ387Bct4vTNeuAkNqREibku5hMTcxx9sS9zBLXeVk8ubsf4PsvC3G",
  "key20": "29vuC65WS452Cm4NWDx7LqKRvkiLU9MwtpSy3DoWprPUa2FSpT8etTwVLCMSX5drCDxrdbcU92d3WC1mZPkFiTQ4",
  "key21": "3kBVKV6sEA2n4qRdrgGWLYnZzJxACL3C7nWJrmytHdhpxe3ToAd7My8cGis2yqTsQLVjy7TEJMTAkyjKKfRnyZLA",
  "key22": "4JjYwJ25K5HViUMKgacHq1YDe9c7K2NnRVJkHwof8cRzArEp17856CRUFxX8sK8tPpWvVk379EBEn2VcBa3uXZJC",
  "key23": "3rHYjgUREBuJbJ4a49JwJA6B3CG2j5p95jXUqacYSghSoSZBMYwEfuePgUzWKamTbRXdwoewCicpHYUD72WNkp4a",
  "key24": "4dfho5xmpqzL8fcRmAZAPQJ2ai3CJogWcHx5TXE6GZABb1S7vbEnBNLFuxbMBoZMpKaJH7peuE32rUaU9GihR7Xh",
  "key25": "Ks9tNAxjbdaU2d8tMGutZ3cteYnN7tFdubNPeW9m6dVAS8WENyEZXtXyaKdgYBbMkfk2vsUneQ4g5oRDX2HS9ih",
  "key26": "1mSA3tMEF5WgWans4Se2se3xsz4gvNQx9b4NXK7PXY1i9aQd91x9SiZ4e76eLpxohiEbCptrDpL3nESAuzXVM8D",
  "key27": "2acdbS5QgXieD7RSz9dwt5xzHy8tAqPpaEP8WjkTefYGLRDKFNnZ9YJcC53155UaCpaAcitxW8TBePAMPkDeRFEP",
  "key28": "4fa1eZKgKoaLEvuVUdyUP5UjPz5uLmgDZNec3jdpHUM8QrfQGL28yi68PmoXqMLVtXEGFX8pVPAxeDVhvdRhXzni",
  "key29": "26BjWha2R2qBKoS8KpDFCwnvrja7xXyaQfKAGDYxfiJ48bU13yRYjP9RZLgoMdhuvRTHTF5fqY42nHJTQx8452kj",
  "key30": "28DRvwqmhMGWabnqJqiZE58Jt4h2e87navRR8AT7TfrT94h667nPhYCYJAMjyRrzoS9RQpm3PYW6n64spuCeRn42",
  "key31": "3d8Rsb7YMnHzfi3kdoT7ZpvkPAnSRsKFqDtKe4Fumb7PfCrBqNMKGGitEkXkrGzhThg86fen8ZfYTrNPbQEboc5r",
  "key32": "3p5kBcRM8QPXrdXYcmaVKmTerhqePZgq8hSnxnv2jmMjxu5ipvd2PKNc84HUNkgUaH72MKjCYmWbDWHjWZCCFwTm",
  "key33": "va8yRnpAVVTFx674x7FHuf8pLUi2y6Be4FVYMNYx7MUkPVTaWatXbj7gwnZfjkkoai8mLURCpypnPUU6Si2fvDu",
  "key34": "4EASoJhkwVUnH3Xoo8YuqhFKB4pLAjG5LcgLsg2eK48sVDACarPv6PeQ19Yu1gdR7TrQRnYNgniWgf6yfv2NqzoB",
  "key35": "65LGywnFq38yX1jiGVXj5tjUAddT9QnPQKEDs818Mmw4RTMu484QrArJED7GiM96rEHaypMTPG5jGnJmEFdWiu7s",
  "key36": "5pyQtUH9jUjRMf6CtZM2u46AkTC8ZQGYRsnAJevJP8siFk7AixFmfMJvNnsXKdiB8V7xeNdTdMbb3Aeux5nqJiRY",
  "key37": "4LMFWyv5nR5BafAohFpPpCtZvngzVpWTCXPMHiE7VyEV9bdHoXQUQDDc5ZTP4hkjAtC7wTjE5Bvh8UgsqEtpxpD",
  "key38": "4xXmYGkJNDvKu1B5LfQeeGKweqgDdrsriUJjR2j6AxXs14Jb7pBJBx5corAPrsEDyrVR6mPxFrHkQppykvJNaxpz",
  "key39": "2JAxdj3KSWVDxQ5uDQzNFPRrqjxT4Yd3xq4GmkapqqmVxUufFYaZzNnTNo7QdECbzVyU7AQrQdMB3P8YhqR9kWKL"
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
