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
    "2WAPi4rcWQGdb2UJTkCkrUC8pyFDgrB2x3vWvz71232sxRxVoBtcx1phFCSZ5hfmSPWkJbftsor8HSWqoSBTDJ5f"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Q2sQieZh2983N8HkoDQuPRDD3BYyVF1YJ6qcECCFVwxDVR4sQ2kHx6uz8rjRFeAg5ueqfD399qtuyDNar8ZRx1G",
  "key1": "sQbhfNJMDmgAWqr9pSEnUZbSrup2vSm4vmu3UBi8zPXES6CbMrGhxTbHbZChguV6HhTBhdTT6s56cjFjHGUf95K",
  "key2": "51pycv1eMf6jiZYpXT6jwknPuiC4BU4DcwaBNJXNZ2jm9e8AqXBiaJLbY5DrkuMgnrpStipLG957h5hXySaBofZb",
  "key3": "4wBXrhHix9A8x9gr55CjEmwBquc5ehCqzMGVHMVFw8ASkKc6FFdgVvESyTgF97mTguY5UAtEBAjNdHAysF3k8MoG",
  "key4": "4xcGjEv5wQxfpCN2LwnpGwTrDT7a5D6a8qMMRtqtDowJNjL3ynnGreunbmFYwS2s7zeTZc9vYha46HgYy1Fdwbqi",
  "key5": "5Y79FiE2thgN9DKKDy58kNdQqomnXKZaBAqAtjV5mTbEjdVJxPWrXpxrJqQgs1JePX27eNqDVqqz6brpoWwAM69S",
  "key6": "45TvXULs5UFgkFzABttRdR3wqfgxDFRMX5CfeyqTYh7ZhazwgJ3CFUhWBwgh3RUCT1QSE1T8Vp3SxPaHod5H5XiM",
  "key7": "n2pDc15rpoh1FWqwJU9ooAbPgtg6mbaRDYS7nhAroYaZZM28s1i8wsWxyGLbCnV2Z3VcYCSyxoETZwuQmchcfJy",
  "key8": "61cgwfD53GswARVVhpknfBXD4z8urrqU96WbWbhZXC5MK5yGmXSGcpdN7iBsaYUEk1bqAPLuqXcY7sPHp6FTDoHd",
  "key9": "4NeQKuf8cJgQ3sV92EJJyYwGTiWp8bkANRmZKPou3oqcSWJGYKbd6EVCnN3btzZDZmjKwACA1vmf9j77rtGLA69z",
  "key10": "36hrqFV574bT2AmA9DFp6WZAYMdrUGcpadW7UECEN2QzqySLej2wsQ6wRkFwVywXMgCLWQYWPZGbRHeVq3mRMhzb",
  "key11": "4YTW5iD19GZbTkAxoN5Aoq7rTWDscjSuzRzUdKbcGX81LGeyW8o3aGZnpGiF6geRvimLVDUJrYAzaqRxgvpDnM42",
  "key12": "5bJPWA2ptqTM5JPLd1RW8gRbWgaV633PMwRGtBqEpahQ1qEfpV3vFo2bw7MfGbt2RZCfRejNFJ5k5VFUmSiZuinR",
  "key13": "3avKZbffCcke8QqyqSJcaa8AUuMu4sqADgp5dHLp169tbknaqDAYYFkQfD4BvU7ugAA4p5fwmuG4zcUxqmcnxpRd",
  "key14": "DuDcNBaFZ2mojfreznPk5eGM5q4Ezn3ewbXnr91vskSJ6tKLqAkqwHjpSijThgwBucKSKqJnEnyvutB3dB3mBjE",
  "key15": "2jbX7AFoA4JfstsQ5t4kQc9XEaD9S8aEG58vuZU8UXmkjCY1GGEBQtF6ZYGgnbNLUFxCeL8GvL8HhgrBYUfnB1vk",
  "key16": "5S9cuqjdLPxkVyWJbbYQAYnREUWGaUrDimRhXHagrs5LNAgFmeZnGfEFRynxXMFNX7cNPL4P4e5TTFcSQ2X1hvDv",
  "key17": "4Y5bZxkmZ1emu4U1FkYQztNUHYwCpP6s43Ybt6ULZD8eTPh6TEdMdKoEGdDGBYdrEK3CB4SLgQq8HhTu1WdkXT8B",
  "key18": "5QYMbShuSkk5b68M1s3XnpGbtExeb9TZWLGugm2cneu4pvavR9hfL7GarFvHrVp3JYGHJJsLmeHUUcsT2B47k8CK",
  "key19": "8beBXRtBUD6nZrHVgQA8sB2K6X9nBQpPN9fcaHVuvrwZfvUqtwizaM31wxN2ML46U6Th74T7gaFEbCZW6t2Qfr2",
  "key20": "26HFdpGH4R32bJWBcheJaAk8eEfZMh6YibYsAzZ2dGgojbSRNdoAdgVSkAfvv2w16kmMfatZXihNXdXMEA8gLVXd",
  "key21": "2YJxygqGDhiquwJiEYdN72y5kBwhJYNaMTwCVACBYew1w7qYy7BpKsPYbEaGcwgkSKD4Cxg6R2rP77jTq2Fp6Dpe",
  "key22": "2aJtB3h6X4i4WEhJpi8QzBKpC6XyyVax7ZBB4UzJJwsm8m7itn92ZDSS5CchbPyN5bQT8cVBva3SU5eLRK9TTt3L",
  "key23": "3RibqvSRaq2UhWzAcKqkurS9uQYSk42wMSJUQ1D4HEeUuPZp4Vaq3KVjhuR3XEmhtAmCCwWkSX1QPGpJrzaWWJti",
  "key24": "3DymF8KWGJZqoVsPsHu7JfJRbck85Y7567uDz2XzLQ6mZ6zwEcv6MY2EfNZoBtkAVG1c9YAzykikAGr7s9A9YYLg",
  "key25": "4K28Gp48yLg3iLroXgNzQshBH38TExkMf7TW92qKDj9tLvrieP7EMSJ4d3TTMS3t86fXLX5b72mavYMyoPsAMaSz",
  "key26": "3JohxJ9Rp36ygRpdASwvsm8tyw51MVkeo6ewEbNmiwkUxh63rQjxLTNaXwfiNo7yoDaEgoZhaLDEJbgK4cU1chXw",
  "key27": "4wwPcGDAyF2aSw3jDaPCtEwNcJwYpfpuKgL5ndi1PL9SG1bWRkidHfRxitufhprEMKwAetwSWBKw7us8abaehFMP",
  "key28": "3cnf45wCW1p3GCz29ea15Hkaq44rU7gF1mZBx3WyWv9cfFmriNNdRpDZtXWmfprsDM3JWf9m8XdfayPZuCv6r3Gh"
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
