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
    "wGNDcnEMQBvqGDfECyEZ6zVtSrcBaeagdiKa6Xa1QUwt5xijrwoBM7WMZHxCjBZnDQoWUSaXTzticsfBueJ9pZK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "hSeL7QhDhLnewXoSVyFmQ35xJgF9UH8GNzq1ShUfgsHPrLSP1iDo2fnqRPgRCgjpvGqsFom1mpr2TMGqjWTtPxp",
  "key1": "35Gj4rU4T1UEGZjWbxPzvPHNBDYUbhyijbjt6nz6J6H9Kn4cjDipaMmSzUqdeYi5TFyJQzEhkXYLi7mVSSxGKorY",
  "key2": "5s4ajcavpWnq83QCiYnpYTbXUg4X5A1jdL1fXdFd6yae8d9oMJLExDDB6nPQXKgcvtk95x3SnfNbxjLbLHRERqfj",
  "key3": "2VuyD8HGbc3Uz9gGrNkEJbyfBP6UFspkiqRrFVfs1KLbHygn1Ceia4o9dXvidtYRGczKkEhZjWCgbeYuzR6UAZzc",
  "key4": "2QLDzVuxtUrLkcG9meYcxs4awuoB3DgPt4JR6quZDrbPzEzNevMY5zZAPqJkK5orj7vGZbNRQaVvFot37QGjJjFP",
  "key5": "2Gqq5daPa76ixUT3pNGXuBq4zMTE9bbrv9fPF3Kyhn8dpdzEEHyravRcvjM3rtjJqQpLFAxpqui1ctVShHjU1Nm6",
  "key6": "5davzXMogZZm4L8XzRNCNnTDsCPm8qUSUdUsmYBFku6eKt3H6kKZ6z3M4yRVKppmeZN5115m7hnWpug2dXpE8Wfd",
  "key7": "3LsdgTREchjn8s9fkZQSrHhqqyvs2tS1khsuSJ6XAfjNd634EVzeM29Si3Np8jYFNGMhNTWM5feKAZNwpEtfaaaZ",
  "key8": "3WSCnwa1ABnG5UNQ9pfcDv4mZ552nAVQ5gwKJJMTiKpcd7nNnU3aWBQyiJFd3rofkonNpkcyrnSxFWAfHYijSSEk",
  "key9": "5cNLFWGEDaCu8A8GMnWvESPDUWUZgNc1Dpoi5mpiM5z4WsNsqDChj119GWF2PAapMJzdWXtSF7p4Yh3KhCGhmwAk",
  "key10": "pLsswriYdYjkkfbWpd9KQQuCGmdLSSM2k91wmefjsjopWfzTnn577YZ9NU4uGVn7LvkWGpXKzCViJW4MnsG7szy",
  "key11": "f4amPFy7UbZPhAciNLjEPoD2GmQXHE3pS2DCej68hzvznMwaajTRPtF8MTCQ2aHzgc5sfDaGkZjx5qAUZYz7gam",
  "key12": "4ojZRFhgtCesZv8xvjiekQ9qh2YHS2U5tpEN7Xo1vQZjoLoxTWqPEdmoqRYRuzyF9x7EDeGJUrLy3CHfuYzWmbjC",
  "key13": "2kVbktWkJ4E38f5117Wpc2o3TZ93Ws3Yre5jfM4A7jNnZzd3SNJJMkKTEijqxMGNeY3BaoyydE53txSTtj6mW1JS",
  "key14": "3o8cH49ivcruceLeP67WAcBNgWsBjrTt4P5RU9Bj4iLZcV3HgCB9w7tkJWN9q1Drwi6xstoEGELS1gHX5QTTWvWX",
  "key15": "3X8S95bj9KsW1JLP1S4vaF1UFSKm6y5cq3mJhMhuXpeDkS6Ze4BZWu84trLxiizK8mdnph6GHKWumkwdfcF9XhoS",
  "key16": "5m9znqC6cZimrSX4bHLYaq8nRXtmXQMQfa2QsaABoYLjDLmEUQbDH2tzwgikBhgXcHwwjdqQ7cb8RFM2CTqX2LGx",
  "key17": "U61EJ5CbB1w9ApcGAi6RgmGNofpV73ALX5v94373UkP8GByq1CHpdYdzmvNLChMiKUZso7ZNky4JBiTTXgeukQL",
  "key18": "5AXUq4Uc6RTieQRrYGNhKAAUMAP64eDeDgvLsAkzL6H5u8pYn9JNBbgEbr3xqi15LCPpaAHxrbMts3F8HK8t5phN",
  "key19": "4PNw9vh7ke9e9j66WvmqCefoi1oA4bmeye4GsYLRc8FFmTririu6EDUwe1pYAPpTfoxHqmtAVBiisfM8Lj5R5d45",
  "key20": "3Y6VxrAqAVDC3QjqBvgMQwbR8jqN6AxVWXDevKMDSojpCDCSuuiCESPpfgjzwnpngSpE4CRJXfVuUiV939gUhni5",
  "key21": "4nNjQRRvnYtcxaXvidPJgNrH5DTMCFNA5kU2kPdxeiBZDakBne892jhxG5urLHPrAc3rVncQVidpkHYj1hNQzQGk",
  "key22": "22d6TMbNrTeoGvUpfBzkf6VQcevnvKY6PmZkCNjk2JcqgBHY5AvpopmJWpa8K53U9EjZZdcZNbEsYUkypUbWKaZn",
  "key23": "3mbWhwV1nTXnR6gfdh2bvpMimC4U4TRn2DDaNjJQgZzbLwhCzmfjE5GTSfGBg16aH4vRRcgMBbEizXGLyW1CQWTk",
  "key24": "4fGrM3Zh52BQ94kd5xv62z3bfoHov1cBdWjVQfyC25ZyBo5vxuR5AKwxpUNAjqcY61XuxNXRUedyi9vLLwYn7y6z",
  "key25": "4GDG14DuXMtB91z19BFq3QZmyPAmsoW79rMDo31b955WWkbzxkbBYickjts18iBbDmMf5fAPf7ibw3cns423rz76",
  "key26": "5PBEjs63bEwpJ1T7LEtEE5niHkTGerueBy6vTHpMs5N6PsezPmLAUbJJNWudv3exewwM2vAooNVBNG2kGbMEjji8",
  "key27": "5a5MNsD7mFLDGxGi7cPmTutKQjymyhiAvhcRDQYgAs6qjnL1fXvUTUzsqZRNybpWJeoLVmGjNPt4zP3wvnAwz6e8",
  "key28": "3h8uY4j8xVdpssEXtiYcYyFwR15jYjvhCNwtu6jvTcsWMS4DirdPLwnYF3sF3YuiwDwaTYcryAUm6MBv5LqbHJv5",
  "key29": "UcY89LDdFa6itHAn3RdTtSGNKsR5CRPNRFPDLiM8DWeNSjcwGFSPWioo5AyUpR7eFBbPx64FhCCc8Xy5DYK2y82",
  "key30": "41zEWTtMtAeCT2dJVg7A2uNQdVyEBZugGSkcuqUzTdAgeWh22Hfbq6cEFdmrrVrFkr6J1wqR3rSPVR68FaEr1BJM"
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
