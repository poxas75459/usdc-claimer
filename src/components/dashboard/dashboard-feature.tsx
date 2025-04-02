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
    "53wo1QPg5FLTotpCivTaAcRC3AW5FxCVRhqAB3jRKmRvn4dQd2fcjERNc1gy4DmKHtGVPCi2xPHRPKnAweHP4siR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5RLR6dpap1HxHhZ6tfhH2yrGDGFnoDXcPKtf9XewsMJt68aNuYJEnnsnMUrDuCCUNzj6VCaJErsc4b8XeKzV2gsV",
  "key1": "whfFHgTi4cf4yXgDBa7YZyRWk2WBFvhC56Bwv7MsLCarW1JoisR7UjcUhHtigVDQuTjscC31wo7MBWCGTWoCyYX",
  "key2": "zbzrsKx3UPnVyTWhdFiKJ3aqwquwmoXdWSGsS2cGD6KP9qRpTkKTyarY7JVXmPWhoBKor2iniRCEyVFSfum6RW4",
  "key3": "3gqKKHuzrtFp5LRnxcRF62T6K8EnmYJGzJYgAhHQZM9H1y6WLVBnxVCaScsimK7LrQgqQuaRoLFS8y6bF8ECxkKu",
  "key4": "zG69CRA2tf5xJ7C3fC81Kzs4MGeu2VRn9EaHngqSTUtEtpgdwvup2GpvSzUQH4ZQtD6bgB5pfGYUCua98536sYn",
  "key5": "gFD9hZVxPh5nsrzF7SHx7eavBDD7Yyb5cUTFG93Gcnb8S3USwuvgKf46FhFNBJ3PbkCLKw6kuQXwttk7t2NVwuL",
  "key6": "QNtqaLhtvdgmxdEdMR4eEN8eErenqSor52W64KKfqXZNsg7ZEMeF3W9Ubhu3pCE6hAMP2GMKHYw2q2rPhqFxVmB",
  "key7": "5WKuBCT855t2JVHcDXLT3M7cAuEw6S7Vh8oqB6nP5Cbq9x9bBj2NEnwMH54hSxtUrRNRZUXjTmVQYV9X1rUjLWRo",
  "key8": "5g1XjGqPa1kDxgf22fjns6NZbsVjHHUb28cJUaQHYKbgCxXVFZtcsGKTVfxxYqdWQhmtNyNbW6pY5FjnavnZXBwv",
  "key9": "3p3osv4yU6g72W5GxzLqEi28cWdpn62XZfvoZnpbjdSxxLD51NBohWKCXprZgopTJW5vytH518Q72zBpbrRj797r",
  "key10": "27C9L2CAz1S7SmE1cjmEwyPXBfgZMR3GVb5DvYrJf4fp95GrtLrvEVkB5smJGXGeRWPWTDNLb5DqokjV4DNTBC1i",
  "key11": "5TNJ6wSvJRDhxyGaqCcQ7JhAbt9nas5JCjXaDqvu9gi2ZoRJ3okoUjHCDCHjih5qohy4UVeisovCrto1wzYs7tZb",
  "key12": "4WbVTzt9kGs7YDYj4awXCyRfZCxTaRs6PYhiE68LvqdhvctzA66v4WvzYH2uL2J49hWBCXr2gEqEA8egLhVBrR1a",
  "key13": "2XUzpWYfVwHmeg4q4oVxRNTTJg3u3UBXKt9NuyqbJsS5NxUXZGicEP5pSvD4YYUWhbavVMtDUsHAJzY5NqMRN6hH",
  "key14": "2Y7nXTiEja36ZhFK9VRQFU2teDQBLH4UVH5sdMvNZ2TSUBrk6JEzsjCyGChHZKNoRrAsj1K9HbZmLYg8UFQxQJhG",
  "key15": "5yeSGvgnFnT62V4MPjge5cVaqMDGp8MQA62bZiRwL48MQ1Zowhag5wHfVaHnSvjMfujWdjrATmyxdraznQEpg46x",
  "key16": "fxMGUevGg6uFmPVZ1KTmJpH3MARAB7Z4aYKbGvDg3Cm3ph4eowYnjpNKNtQta8LE5pPAHRFB4A2nJZFBFb17a4t",
  "key17": "3RRNDL24meDuiJJFVFG1MGhJWjgxUCvDbu8RMbngwsymLgkRk7JyMr3xxajuiuQzk3f9w3TKQ65svuv1EwGu3aFV",
  "key18": "5UxFJRK2zRczd7oFznWkkmLVvG7nUU4UzqpDmZvcW2m6mnh2cT7upTmUdsxMECpVEKbeoMHK2ssFtwDYzrKpytXB",
  "key19": "47FBQCtuHsub9QAz4csnSbph5btE5xmg6fVz1qi6HiK9EQNHmzTSkkY7c4eXQAyV4v3epqEviEiQtoazTvVy6NAq",
  "key20": "37EcEsf89d4Bo7seFw8kwUuVfSucyKvxn146H9kUJmhcLnrmAo9ggvrmwYZR3azNneabLpEyLXxR382ZbRL1Lyea",
  "key21": "w9NQMzJ5cPV6Rw297MBMqoeZn81GytDQKqNdixFxyrPBWFet13WhH4T7Pqfrf3E9Ss8SU2axnhkmYGWjyFtZt1C",
  "key22": "a2kE8YUaLXV2H677goLDKtH43QV6j81q1k5rziiziL1iSyFaRNHDLjucjd7tf3puJTbcj7kVwLc9r7x1hDteSsG",
  "key23": "4zE6vij1EPiuaN1DKQKYosLh8DjZV1dNyBJhQ4rihiJVF7xfw2k4vjyt14XGDPfKksNNxCGm6hRiGFqndqHgaJL4",
  "key24": "39J54PmdZ6PQPaivAYeVXjXk7HcTT5fKp7fFiHdsDmnTryW6Zac8uEBSvoCEjkdmuyTT43Uk5W9VM1myaLHnAvGg",
  "key25": "5fU4mpHzMHY3dQeHmV8AJJf9wa9TBUfP88RTXqv2ERAaFRswYfJM6xgkpmFVJPNeq6ZZdcRa9ySxnzgiLfCPXArP",
  "key26": "3WdwXYKChjyZfXtyLKjS2P71MUH4icMfWfn7mqoYW8vo77pvHmaN8rEUDL3tWRqMVbXxJEMsYMqXc9n5GcLapfS9",
  "key27": "2sdgk7z7X2uwSboD1h7GxFzthX1FtwoDX6vi9wLov6s9Y5ba3skaz4iowS9svrEuwS6uCNJXMD1iCRj4AzWyNV9M",
  "key28": "4mMB1wwt1cPkXZVtkSEmBoCCPgU5m5FEqR5MU6JT1mw3Kde2a632PfJQQ2Cyt9eMJp5DXGuD9wxs79T5aFMsHaZG",
  "key29": "5fGkZNuw7PCaG8H57tZJhC9xSxQd4eoo4SV9cNGCgk7Ytd42kKuHYwVicKHUAAG3VoMc76yScWNBaqvPiwTeqVjV",
  "key30": "4qHfzT4U9Gj2CfkNSBs4bnWR1U6QjUnfBuWZpes2T8USFpdqQNwjq4zK4scM7XnrdUGwY5krN4664kEfAFn5gAbm",
  "key31": "4kYor2B4wPVKpfdShXV6TGLDD7AVkkZwqbcFzAckRe5nP2okEmZHzCTo6rjXBZBWD5TFL5vy5xucvwr3SbWsTmW7",
  "key32": "2AcmC5VW4hZyaYKxJe9MF8qWbP5kHRzRhskKJbo4Z2jWphnVRaGwy6kpWvPtjzJAQoTtvwqce2kdobAGD8So7ch9",
  "key33": "5XqAFphHNoUzJ3JnnzH9pHfWcDx63o8MHvFMUq961J1yuaU1iJp1drVmJGBZrdfWnanWsnLiEMtBsdTN8DVYGSHD",
  "key34": "NZuer76NSNG3138Yby19qQSWjKmwieBE3YLfrAVPgTascaumzebv6sAS9GJAMvGE6NAsMGmE697WHuMXoWiZ65C",
  "key35": "4HNM7GuCJxRSCPg44LzMysSDxyKkNwaZeSVPDztpkoc6SfjGBRfLFoX9xhmu7gyfASrfZHqZv1wxpRmQWhnvJzKK",
  "key36": "5GMgkPRsiYTMrkYJDwhjEXBDwG1B41cXEQUBeBaPFbA4SZ2a3Vh7C96y4y48UbV8kuRxBVmJAu7CT2JmBCbzxmUV",
  "key37": "2GWZD1NoUwdLzoxFsRd2CFLSUH5soQSCpYHRKwfJCHXRUqPBC6SexNPvbN1PayPB9otJo1JbzJ6vog2bz8FdZfvz",
  "key38": "2GHTGuvfxCL6LH4Gh6qVyLDH9iWTN1p8bFQC9nWgdJrp2EAKmMMun8vgPSGB9VemBC3nwq1pQ9PoPnssWrpzZa4G",
  "key39": "2CC9K2vatESRjRbqpgU2VrdFy4cbAkiVybn7o7Xj4KQm9FHMdDRRp99ss1ZUyJHFJjK15uDXdmaNbqoYuFmbp33S",
  "key40": "2mpm2DCDtngVsob2e6fzfWe13G6WFhy4fyyk1wY2MBU2a8aUDLhLaMsTijzc39cm9XkAb5qeQiaXf9FyqkN3BRFp",
  "key41": "4PSnVe3uS5vDJHhkzQMEQ8ee3uSwk1ScVbPLeHK1yjZgNGEb74nAYMBZPSukYwWVRbm1CGFzVqx74qW622hYse1e",
  "key42": "5J1j4eyX82rLQBUrEhZLS4GsFc8MAkWpVHAoWU3zjzfSBFtDnVhRuRaeF5Juswn8iaAyvXg3rVvs3aQb169xwFJQ",
  "key43": "4WUT6PZeLcZ2shTjQ8hjyFRpxDn7DBH6NJMGSxGZW55Na9KfAgoYPscuMsJF7BW2BmgqUhfKNzVcwQBJBoy2CKPE",
  "key44": "65PCsbT8NWzTBETgEGkndU5Bd6o18ffwTRyW6RjfBvhJ91idEZQ6m6t44bFzmn3weN4KkPqjS6QEiuTCc5qyPA9Z",
  "key45": "4MttuWksCsoCvkJzoUyehPy35B8yH6G8QnWHJmQ4mqSCH8cGLaP1xr8rmKKgF5a641cPDEEdHhEuC8sppYfAHNKp",
  "key46": "3FrijWoLJGTJDyA2BUs3G5UmQZVdPDBwrqN3Vs2BxKWx23iENTReaoMz1zczLNJUXw4NR3xiNRJRmymo1ZTSfHPe",
  "key47": "5EJA69ezngrfxCuLooGpDxFZ84YYHVWYC9nLrrL8U1mZ9EMXeGNBekX2uc3ZMTbZWVDGfGKTLoPkFYK3qVQEK56z"
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
