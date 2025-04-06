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
    "35B9tUHoErumj7xNimEfpKU7sJGggAzvTMazwQ2Nf3MMpbYr7Dyguqpfrhc4RNRKTyKdeM3N3W9z6U5DUmKjeaRF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4f8HcbNwpBVSv29GNYNgkJvznL2GuimzwNXyMNFmaMMVNKUHxaiLUbFbF8t2tauEzB8HJSs1YGH7ULCqvtbhJWaZ",
  "key1": "5nzL7Cxkf6gM1SmQXUTrEhWV7sEu4d1jAuwQX6esLrEJX4KSGt1KAmVFHX4Ei9scQDxwFCJXcekhAxqCDqTuM72G",
  "key2": "2FfPFkqizQwEpRbWW6a1Vabid4Ud2rijRT72PPeN8Kj7LXbTF92622XKRgMNKNw32RDPrzaTCtJnoxr2TwhxwgmQ",
  "key3": "5YBaqtJa4sHyKUuJCxMeCM8xnKUANQX5Qgtu5sHirMQX3J6TsZP7zhzcUkk47BUb8B3HwBGXp27WZ67PehBYRgCe",
  "key4": "43jt97dH4MFMrkZk6kBmRUmKSWQ5EXLC7eR1amLprgeMFiShMwLd9iXF77MgcP1GzBUNeLVvzCFmgPPuhNW2iFXU",
  "key5": "2GTKX2TYrXTuKadbWEmmjq2sTU5mrQ4mM239fZiRvEn3ioRMkzTrWEjBfeiH2FesMvY7KYJGfDgKQGYxARSTGqj9",
  "key6": "4M6tdLatK85V8cJmy1kCPW2UWEvjimJGsCR8DQjGURmDwXSCQB26acFoZddotQM4utRJRRuPKtJANbMow7oYkmHq",
  "key7": "63FXLfBw2RVBGtBLE83ApEe7yr855GZo19hQMzEwqpReVWaVnp9rha6kUhQFBvX9mWFiKMicWzAKTx9KRfMu1KDe",
  "key8": "4aa1e9N6EYJw9ah97kAo4NXFy7KDd2Bj2zs7KMHTn8CFus1KojPPLg9vUQiUR4gPQUR7dvZJeRCcTJd4JufpBnS4",
  "key9": "4nT29TCt2RSoHbCAEzpKVBSyRUMA2dEL7G9KNHJKFfV5u7FRcfXqDTDrT5oCR2dCiDrE7p1a3LRUtdwEUiC7JN6G",
  "key10": "59Y44GeZEMX83thRR4jMgp8FvZgHDyNkwJ1EVeB8DetUpJ5i2NuA7xUwCUFNH5KcxguYhDZ1ZZ6CHno6kdrPb4cT",
  "key11": "2UAUzbAH9cHfXXHjBBMMQeWm6VEhuendbKPEp1xxrMoZ2REPmqq8a3RpUE2x1Zk3abNaFpJogGubk39H1ZGzqeBb",
  "key12": "5h9Bp6UqWiGfpstuFiz3G6aMFMpEcJFXnK7QSRYAqXtReCjMj7V7Q3U3nkfYFfhane3CaZgcacLGBvmhxb2gKVNY",
  "key13": "P7kczBMUKZdfhp2sFn6vAsh6USQWHr5uovQvaQdrF1LNuULv6LoZ2sBN7oKHxtqhYHwDa82SqJByucztGWtkQzH",
  "key14": "34M8ThymxQgypBCU8FjEsCjq7F1BcLC9rH7tFQpQ9r1U7KwhXLvmEnbKkS8CnsnwSpxpSmtWNjU4hdweirrwH3kR",
  "key15": "55xoWwGCXrzxsanaLa1J2PR2uf6sFGsrmzEyMr9gwYp5shUkWBGw1YTeASADazovWTB9HZCzeS2frHvkqjmRuUCW",
  "key16": "4biHtVejEd2QuXyt24kGaacNGkCGisr51RBu6qw7VaPsWa77Zk8BJ9EiSCk3sz5xVh1a2LMLHWoDcUobyM2KLsH5",
  "key17": "3C25enRPjqKdXqZ8Ld972npXhAJ3fRwCYDvnTzXAKUGoZacKUcCNtNoYFJKZURvRQtgnDZdtEFjJzV7JqubrmHzq",
  "key18": "3RFfub67xS6XNnRHepnwcLPsr4Tt69hS85zFf7EJfs6Rdcz8W8f8qKoqa4Fnn1LMeBEjdcmMERcZy4bzBUnwa7pP",
  "key19": "3PxjMNL3wQaQJcYRgz4jLJnxgtreDzZZhzhMK1BEABp5okz8uB7aNknBA9861qsYTbSDFQmugtsDJroqTkdyo5s7",
  "key20": "2U2qFYTAhyjFS7mS3631K5afJZ8ksjhxGB9nm4RdWUsid8hCacwwGpBGSMqC58r2gmJYYzmTzGMNeBn4M4nT1tgN",
  "key21": "3waTEXQzvcYqeopq2gvek326t1RRDwk75s27bW9Y391FiMRVDtGhEbLUhJs8sLWheGhTgU2BtjX6RdTVnF7Tibtn",
  "key22": "4spNqPedeWR66wasELXSHScskdBnAp3yGmeqJnNYEz23EFt2ubzefY7qpkrJhWT8Am1BJPcGFmAuNHXMExoBov6E",
  "key23": "2nwK3YrCFUNC9pXgn9vyyEKXwoTomNFqd23hNxwb4Ts5WtqHoZDc1Ex6tm8gqnzW4ALq8hk1uczVR4nL9eaExEKf",
  "key24": "3Qk35W3qqQvG73Q2XUUEi9qW9ioJiy3zTTPJzUxVGJdnrNZybhPpptknkyTsQ9u9HBoWPoHbNXozTmSfcTo4VdP6",
  "key25": "3pYjvAwFZpjR31pj9rsn1kCRuWDLFtzGmsf5xNZtvPoszJWRAzbpDHRQr2Xhhus2hz5q5a4K4C8ewYZwpGjHALdx",
  "key26": "4gY3D5RQSzWbsbRM3z2Bbg1Q6Ye8qUYD3AycfJ4PHAD42hoB3DzLd5tYSwvSXnemFURVouvDEeJrJtRwJp5y7Q9H",
  "key27": "4vNAPcj6zziVSPS68VzCXowmmwFAhosYKYrmCuGE9SJSR3P3qNsbjKtpUuZKs99DJ1s2ex9TFnTvExQUoEbiCJES",
  "key28": "4VHKgFv16TCRpT8bVje4BjQRcsQd47KyQbHCSKY2XNKm29eWMjwDecBUAf9gSQKgev7Tc8LbyxgFZFfFQN62UUPu",
  "key29": "G2oRBF5wRqchmPQZbk6AZ7y9nPPSDrgL3owCmyN161YAxSAnbJU7aPQCJPm1LD2rEiSo9w88qJFFkfL4ffFXzkx",
  "key30": "2WQUsLbJNS6351wYdHANYRioaRB4GcmJD1RRnZNaoffbSthpCTUsSbBPbyQecETBfNuFgXBXceuPSdeJxzt76Jka",
  "key31": "46VMKnQFcBNnLuu7poQThBb8e1wPDVcmRLz3Qjbq3uaXBCmAeXQ8MdNosqF3y3dcjcU75i8Gb6NGiigmFif6jHn5",
  "key32": "51MfEdGXCNXNCdurDWyAZrC6UiyE5mQxW2KYGHW2hV4pMQ95K8W7e9eZGso6E1WxCyntHuS177G8XjHirbk4dg7J",
  "key33": "yhR9rv5JeRvRAFxKQRtjKW1tC7xCRYq3uUcWSxZpBHaRz9PKPrzaJKSM4s7si7T12ZW4D2EDXtEA6YZnxfBs3iC",
  "key34": "5n6ZE41cthhUPCtbYG3xaZNno9LdbyEFvkWn5Wo9DwHFLT9EEf2v5vdJv9S376XPHZG8ng4hNLugFR9PQxQYjHdR",
  "key35": "9Yo1N5tvzUgiBRNF5ukbWtZE2ahHeWYDfF2VVTR5QRGEH4bFkeggP1seZdyitsnUvPKUkc7EkfEqBrLR39vWteS",
  "key36": "5FgJPTEbyobYAeBuS66Rg4ZCGEvrZPJjMk6ME1DWDsEygXy8tGz2w4mWemfgFFNuDMFSqj15aFJdhViCnTsgxYC4",
  "key37": "2tuu3idsaUkzTzcMeveVSCVvdBgvEDqG9L1ZbawELZoVzgta8uQLTqiCoQ1Z87xis8Qw3Ahw2JCgtPiBpFNWTcp1"
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
