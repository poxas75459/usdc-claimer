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
    "JFpzeKmRaF8Au7gRvNFLoVftdYCzzQTN34rKAbFL3n7DvjujNpF56BZ4au1LXujP8tkyA6mETkmAE4K5ayRAjob"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3sP33cTZ7Mb8STGxDLSCBhqmvgghHiZz1L679AT61jEAcLd7HcMCrTa9aLBHDSudNamkhkmhmai3nH5aj214oSP",
  "key1": "VWjzHjkRmyHWijXKTMsndrUpbThC75hxoQUmUF4GPu7pKPkceA6Vtr7naFwZpgKNsyWQb5M32x6Vm6NyQuLoZjZ",
  "key2": "3Jouv9ohb1vqpuFmJ3p31Xy7v7NtaFscy4einFcE7P5pgg1kD7TJDrafdVBLeaz3AqoR8PJsV6uTMJT21qDChcmd",
  "key3": "3oV9KAzZLkhR7UBh4WCLUSnc6JFDfcsNK4RStD6Eup8ZDBfceJ41jAiZztwrJQWd228sw4uQjX7ZJDrjb4pbGHqm",
  "key4": "4mTU8hbKaAHheysg3AGakKf72sT2rpjvzXyQbS5on2b3VpZhQDEqchyCNYZjdAcLi18jTDauL7v61NH2jhiRdh6i",
  "key5": "3CXdjqqT6RhrhVwErvk5gLNEMTjs8U2CwyB8WzhRC4F1Pu6FenVWS36LCKdi9zciA6HibLXmsqgpDXoBRVeouuU5",
  "key6": "5yhhHSct59nk76V6VUQabFid2NFCDLJge7eQugzUjkauPiK5csuFHjcrj9qDTbgtHM5eKZzNKt8RpuygBy1LSrBa",
  "key7": "djU4DMt5AfvxFa7BtaBSTh9BzLjPDBNwvLutLS9TURVBr3h6uQJd5K1PckDf8S4dHPQZdD6ELZ9sXBmoUts3uGd",
  "key8": "Hep9gAd8a1t3uQGP3NLZQTeCpp7viquSnhVBJ67BKJzppQ5cNJo58Cs4mksjtHjeQjSnARdMZJYQELbDLtJE6r8",
  "key9": "295jKxjTR47Dbg6zZPjJxWnxj8oVwUiW651DdZ54X5eiy2bNQPA4rNNkTQfusvarkegC4WhXiJfVyJQchz7HRsmM",
  "key10": "347LzcZasZZdNWu8Xa4W6bPg3VhmWPe9cF3HHt7MoB5KxhqabUUeLQf9BsvUUQrc6HEFjemMm5w7znVNFx1TCMrQ",
  "key11": "4qPHDTFe5M9Z7iM7pgQNZ5L7vrEVnQx6adB9RwKqNbSM7AXHFF9Q3p7Gvbsz3yZydiKadg9S179tAfCNYSVtmvpA",
  "key12": "44ddqHTqGov9NbNbVsUHEu5BX6mLYK5uupcxkEFJEy7hL69iqqeV7MWWRLJ1gGqoDE3Uifmr38EwAxhoWzjv5wq1",
  "key13": "5HiApMciB2HYXGVMG9t7EgEsUkLnidjc3fEHZ8ZD14zEnmbK1SCpTrsDFQaLWoaCHdaDTPg47RdAaQfpLKprFHPC",
  "key14": "5V2auGQ4DhKewMWjSusMu29ybkD6f2xVpnLXiu46qCRbNKpcB6XXFnyLDGn6yU8f4qT24v2azCVP3fz9a861vf9N",
  "key15": "5ZTgUvEGrgxutNzNTvrdtCq7kiC2XncPaHri8pJijF1GtEkkvMtWQ51HcJ6CvEkKpdiSXdNgx5f5jF81CspgUUaR",
  "key16": "5k1PDSVfCUxkTXa4ACPzffLuqZ7cnDAyeuQhZVyvwyAohioxRUi4P3WopbCMcknNYCoXRnZugqmtntCfDxa3yqfj",
  "key17": "4ZdeQXJn2qEFmTWxLGTWaxCHMwo6J5DSDPpAEhapu6qhJfBgH6HSRf4PUmaJTRMo5ePDv1mUywojDeFP5Aw7zsMj",
  "key18": "2y7gprDCMbWiJbnghFyMMZBCSBZQxd6RyNCnJdeS9k1tW5tJMEfaUYpoNwLy25UXD1phuhNYDypTnGLnp46W9maD",
  "key19": "2W1Sh5tjqsufouvwTmKepVsSuqN6dxaF5QxSMrV8nBCYmmNC733WM273r9vKPbnCrfteRt6rZwjXqG3oWJxUK92m",
  "key20": "3ozHF4UwPZE7uBJgeYLZGFMdqjXwrgREezkYsTtip1oyKHzoeouJe6gh2RTJJqYqoEVHzssELkhM9Fwbds5vTBWz",
  "key21": "4FYFvYJBuEdgE4xxvMpzSCvffVjAgZjFr2Kpca9sc582xKhWjwwiRTNkeDxWrxeoDXhpdYUvejLLVDQWKJuidKT9",
  "key22": "3nSWiVdgoZp87sN9TB2CWWLviSe8jm198o99EKMDA4a7LdbGVnouUJpDWByjNMWoBvALybS1pbRPtLeG9A6s3YL5",
  "key23": "4vHNhQPzKSJwFVUPj4dUUiAHHHoCAKE5WnsgPAZV2LUHcS62EuLXxqrjAnKb9NUKKMqhYr6emDwzRVq7DTiZW9tW",
  "key24": "4WXUwSMXL3at8ugKqidvPg8MMZ1Tob2Lhc5VqhvdiWw72Sj64ZXpar29jzbXQDnTecpMTo7uhq2nWM3AfmiViT4h",
  "key25": "5pAq8Ek4dcA9R9YjKLELPaq9aMzUYHDL3FUe8T7J7jW3zU1q3dYmnc2pW9B1vrpFPZeQDMV3sv4sTBAUbxZpr9dM",
  "key26": "3EN68gWsv1ptjYEXLeFPiR1fkCfdMQBKZ4ohvSqAwWeHppC1nVbGA3daMXDK3fymWgx1FEnWzCMhWdoSUEyH69h3",
  "key27": "63PHm5eJ45CDm25htRYJPHMXrYxNtoVsyKSbaLfxKyDijvj5Erdb81F55e7pTiGdLE2YsGkhV3zTMnvWif65yiav",
  "key28": "5GonveAFuT5KgXM3gzHLEbHDqw4Q6ouurz66oDZnxqNZAcHTNerjcSjUi38V4PuxY3ztgpbYdj99jsMRXfiURcSe",
  "key29": "2UoS4rYsmiDGPNvsqWako2kKp5Zo8ioMB12oqAiYtaxTGrLP4opbRtxHKCJ9mzyu4JF4CoYJpmQFnuZ4FFn3bMGn",
  "key30": "5z9cUb8emJWG9KqQuPH2vibAs2uXjbuy9isyU7eSrax1XvMFsQFHVdAS8T9E2eMhBzPn5vA7CD9CtKYEyW24qdsY",
  "key31": "37vw22mXNbEhzEUokMnwGRzGnEu8aKfj1jr8RdaGQFG5wkFV821S8Uw7kB7zqTbbhZ2aSirVWaWNCmo4ce5LTHB4",
  "key32": "dy2kZX7Q1A9VRPMGfC1MszHH4cKBaxjiHBUG9pxKJckn2kB9MFZa6gCYiPQE9Bm8mNnJAyukUC2hEUP4Fma3Hgx",
  "key33": "3UuajFPQTABGAKiQxM7U2HhR3FvGmaBvJnfVtNz8GfK8XGM5M9uAdDo7qqaSpU7RUYzHbR4fx4Z7Aj1xmksAScSn",
  "key34": "CezDfaTXcosZWSNWGkC7JBaV7oe8GZHmro3YHWTAgcfDtHU6JjoteYAbTkDYk8MkDzPGpUWsKEL1qKCEfro3cvL",
  "key35": "YjTBGwrn6P2qM4aGhgaEu754sYYSZ35g59MVGHLGh9WUW6eMQNAzMLDZT8aZNdD7icJdArNWHzXF88hSLhaPzny",
  "key36": "4NpTnpdDtLh3P8V2tEQqTXFWqfbetcGFhXgpLq8sgqP3myexMXtyo9prErGchiw4s34JiTkCoEw2LPz3UMsoE8cJ",
  "key37": "3Sh5a7RvqLtS1STCR46HuiyYWzYMAXQKRehP1pggyCJcAZf5uNZKSUvLv4oYdR6XMKtkGGmMTtkrk2jHRRST4pgT",
  "key38": "3pdet5jugUgziQ6HGrRGD4UThKnZphenSxRD2wY1zoYshYVSzXVT3U6EmN12hGe9jVkAmqYkQvdCsVCcr7txfKdS",
  "key39": "4s8D973uR9GvGgbHEPX1tAeAQT2YfYd9DszT6pjykFDMB3a2JvQcLqGqoK2khkoACvn5vBpHXaF6YTYiL8KtWAyK",
  "key40": "64EdQvP1CXEMQ8a7DQqs6ssTfzMjTCKgcU6ibhajf3bDw33oboAW6Pj2t9qBXJzhPL5wxf76HD9KNMa6gsgu4CcU",
  "key41": "yMY9ox2baJjMKBexRgA8USo3Ctu4TjhqU44rA8P8eTWtNkx9ZrdS33TJpGaoxe3CV7Qr91YSrD6FGEVNHv4wfqw",
  "key42": "FxdDHf6sfqugfx4885XFqdwmadJ83dwubtwYxJGwQ8PhpxpwBrS88oVHFt4sRGbJD3RZaHxj2ELxDabhwfGrkka",
  "key43": "GuCVTYBVcWjZHp12FJGLJmu11Pd7o7Lomzq74PFAGeheBzAntqGPRrMDKgYLt3soEFfccsPJDkwPdPrEtHwx2AM"
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
