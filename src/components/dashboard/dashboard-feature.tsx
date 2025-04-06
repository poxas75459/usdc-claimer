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
    "3ob2kE1xoFMsUgzdQq1o73LGjA2Ey5nF2AhAJWiSyc67JXSGtDeGTPYnpwWwtAFDMddBy4JqwtDcatjhdxBxnQe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Rb9ev3qoFLciV2DHvwK7shs1yrKX9ombvm6N3eAfPX7c4Uoc5jUC57KSeyeWw4x55LSauha81RdpdEujiR2hv7K",
  "key1": "39PzrqAhchatd7gmkNfFUWRP3v5CvrWYt28TZY3seZ5bntv7aS2TFcYKW4hpk21mm3gqfeW3Xmesmm8ZvTpmhgzA",
  "key2": "3M3xF72K48NQsTJY2pmrfPFwMgLwxH3LF6fctDAR3bZB2cntBY9ccoB5YBLjz4CwYxrn52S4vPnEm55XCY2bmswj",
  "key3": "fBWwPVvVvUUyZp4tgoT4Cpgz2o6eW3vkTn1NrGx3NAR2m9zh9RUyfi7rqD48X3VZpeefwGR9d3tYkTbGCQvkAUd",
  "key4": "3GCbpYcuJ4CcyHTTVrwjvvtDkAmp8NnHgkvZUqTVsviUrFXzaT1n3rsx59UY8gXUUc1zkwwKM9i5KxcsBm91tTrB",
  "key5": "4zhZWjRXJKZsmDs72CeK6W132fDmGMSS35Z8AuafVeDyDFYAvBv5UXf3bdKKYZYHTfptsufD2FZURMorGPgkpeuE",
  "key6": "2PRxx9krPoPdmMUMQWr3dwqmQ5iqGubX2wk6NJHSenqs8y2AgavcCREbrdvcKUcFfbpRPETNpTJq13SEnvmMX1A8",
  "key7": "th3H6TMpKgifYXbM2sG9FZqsyDqVc6DLk6eR3uTxAVfQWLHEvRWQQMELs9KiHtSAgUcZrCZefUXUW1rEgjMxXUH",
  "key8": "3ck9pJzdXH85yYAS37faxeEa7atUBkaaRJLfHMbFWFCtqTKaTmq2oxtYPpqgPrUdS7VHXYANry8orNDSgFGmPrss",
  "key9": "5wm3Jb13kP85P7t1H9SJ8suRDRPGkwp6QhM8bj4pYisaxLa8wVYvNmBzuxTrf7z36AX1dUEbP8dsUfkZZNPM3Zs6",
  "key10": "25KHdStHyW35Y3JDopT7zasnQanjRqZZ3bjgoEVJS6n6i5mqvg6EpbqCT1w7vBYPSgcCiTzztD92Duyt3urbMppN",
  "key11": "5bFFaVMpmWnyBKd2Boh2WngyZtmgShGKtAXmBFRkW2avcZxj53NLWDMgT1N9umKumw1QsBhzo1gYNCApAXRLR4vE",
  "key12": "Vzq2UsFPczAgwpXmWhYxhytixkJ2wHHuB4DeT9PD47xpC1RuBtydyPY2bQzn6fnBunPpA8BBuJ3FiEL7eqPMgi9",
  "key13": "2cJGKHzK3bACqUq6zSPyLEcySTU3RaRi4soTD6mY2DRRPkDhmfaqdSr9Csom9XHW5K272eMcKY2jBTWXRHxRLkyp",
  "key14": "soAKGAohcs1c8GQ2VPW2fypCcfAPBSmqFHFySroJMRAiotKnTEboxLyMjs4w3MujoJdawEfezc7n7hYQqSqPuuN",
  "key15": "5AKp5SWiLtFNFuvvVdnn2mrMek4HNSzntEGb2UGLn69D3usoi94eSTL7wrwLrEvnYM16ozrcDE4TJppoK1bTumsk",
  "key16": "4vbQ52MHktGRVz3TydXBZwwJtcCHWkEkiAJ95tsG5hsFb8EMvJZG2f1CCs5LJwpgTQCC5aNSufkaD7gewn3bxZzW",
  "key17": "32FxSG1wtjvzkj8wZs4s8dyJpzAB4o1XegLhAQ7S2AJ5xPw2sJKF9X1pPQGmeWUWnEmYm8ojppdmqcj4D1emhTZ",
  "key18": "43eskXK1jyFNo1KmxMqhaGbhNJTV5KRGtaRMVgVX5ApCeXsUMiFgNUuhnXTeucAW82Wmih8GDCGGUPd4DAM3r62S",
  "key19": "2qLCDbMSDein46KeoFmBh4FgJCkLd3RL72i6VFP1GZTWzPNmuk5UX8EhkAspQhFJEUJqZWpRv4REev114CySYQYM",
  "key20": "3HscPietxejuAispa5o6ioVYmhYQJb2VABq6f6e84rzRo84qejmvbuLvHTiZqTvwr4Y9L4MPfGr3jRspPsbypxLJ",
  "key21": "5RV9wG5SPxdHUh433VqAzPueCAAV67GtAHHTbMf1pAekoAyKtrku1FCQTiBSWe5VWSmrKQgZWJWMEJDX9MhWdnsR",
  "key22": "2CTzfxG2w2us4ndwtM9T73E4rz4ivKeWmiAfhykeTFJQ3HBRTNZFrQwVT3ooqDikbGSCUaJ5UdNMB5vCYNMgcxwh",
  "key23": "iB1wGyhBwit1hgZy49ZBioMJnSoq57562fH4Wq7JkN3Pmb8Xxg6abxgYeP7Vam2f5esNqTq1syJUE9X1d2G9YzP",
  "key24": "6P7DZLtSLqBxrWxNNavRojq6XGo5A4bthgkDed8zGqQtof3uxr1pWVpwNSDHCbYZQYEKNFCNm4CzkShUSAqNSu1",
  "key25": "5u2V5p3cBUNXZxRXUZuvqftSf4pr4oWvpPkoMAAZYLi5H6wEwgX2TUcrr2gKQoKMvfWqnTGCfMfyTFdxS7PvQSBm",
  "key26": "5sogaqnDLBwKnefsYYERm7pKbngzaadZgFTx7zMB6j4MpDr3GShzHjD9FjqbjSqtGkTm7D9J2BP74WcznwGLHm9J",
  "key27": "2ECaH7ApDZUMb93GmDTF1iDmxh764gTSeyQmF4GZb4dWqfyrgbb3DjFSKGfsMKmw81VqNRJqLqUZ4MNuJd2xFEwF",
  "key28": "3bhVFYopzCK1VDgHSbRX8pNMfS7vpmeAkvM1LPc9vg7SZatuMocA5AGReV1gRyyuaumvapk8zfQW6qeevpVn2DjD",
  "key29": "Wi7DT6tDMkdkXUhoHLzJLEQLhPZZsieuSbP9tFhZ3sy2jpBY66bL3dEKcZpbY4tia2rLPAEZ1i5PEM8b1Heu5CP",
  "key30": "3TGrt1D3tw8NaS8Tght35QhhMgMZWS7UtEEjhixQJLjPPVRvJzKtGb2RzSTDnRbPnmQLeK3K8R5jB4mVHyzx7dhB",
  "key31": "5JQbRiZie9XDrcwB9iVoimUgjWo4dkqDTPJw2vN2dn2X6XdGVFyaVMpQq3KLryJPGBJADymjD1qiwwMbswaneByy",
  "key32": "3oinCHzn8cYRfeaV4baFGD7QaBsetv9LXUMVc5AQymDNr6yivQpjLo3KJoinmjLaeN3myGVuhqBDJrCrDhVPpKQE",
  "key33": "tkBLTpBpMMKmj4iErB32Vpo2xczgC3gRFigAoLbSD5akK3QdGJXVvgqVujXUz5KhzYpLjTPGL3dXvfcSmxd97hR",
  "key34": "2GaUj2Po7hNoaYdu1VxF7DFAQy44L5QjfbpdXJZzS1imiE38CEjcWa1BooDdc2hhMtVVXvBB9DNBrdaPj154E9LY",
  "key35": "fT4MXiyksXMYX4mp4WK1zuaW3ZveQE1zy2nrsg2Nn61Js1SdQCFMEQQePSRkskgy3wXRnh7HsdvW6EHWAXBsJxM",
  "key36": "5Xx8nHvq7dy5PVmeeoYVc4bEWbsydz3N2BNyKdJTBYKt6q9QEzDYEcgpVzCJSd6EUBSgpaZyPKYfLHXaxXPr29vW",
  "key37": "ydzap841W6rtyE5NNy2TzjJP8fZaN3GMXKc7q2E591cUBNJ8ALapZAyLoMSBWYXCQThXw5ezncK6qx4LY143p6z"
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
