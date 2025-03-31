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
    "25h3L5XTw8YC5L62wsVzR9e1hixsvtiehjenoKBMwoNxY1mEiyqR8KMSQSjty5ii3qR13U2dqnek9WbbcbH885wb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2wnX7KziQ2496nHaJmRr1RAe2u6bfCkPE35Y8n7NBqnCHThdkDk3i1mnSaRXHcab6SMnZwh2NhhoQ4MsPporC4SP",
  "key1": "3xJWVkHfN1ceBdJwmnY6S3BqEDNyhavDTvFc1pvBDskte8QMsGUo8ENMgD4bbo9YqMP9TC8d3VFDWSHsbT4HW88X",
  "key2": "4PCr5Yo6sgY1AUMFkbSkKu75XCHqp8sC5DQsvM7SUm8Q19tyC332KhWQFtU1eMaG7FmqRL6pMPA5ZnwhwHsUAJgV",
  "key3": "2V4QeCddxg8SZnzmUN4uUfAzzgymCzxzaK4zVhRQTXqtB7e4FzkiKSwzZrkh2QV8oiAhBaAtQ7YwZDyGoBEhM5eQ",
  "key4": "27gPFNxdzLFuZYpuDA2C79xiup9qcNBrdn1kjGjBsDXe3Rvqg6eFbxiuBLzCebGCJjE4yduAsCBJJnKK8tgTucRN",
  "key5": "5hF7TFhkiCX7ozBYUgPDgUqCrHHJVpHtCDqcfMkjR1aiFBBSuu9KunTLDgNsp3ZJ6YY1kvYd1NzDh8JhuP7V78md",
  "key6": "4R2teJSk8qheCfkZGx8DZzfn2rQngRdfrv2DBYKthRJRCXA3wzgYjuzirYVpMjXw2q6wC6hUeJn1DEggZt32LP74",
  "key7": "2gvPhCUD5xk8Y2nY11QhEKmUUMCp9wcC3xccYk3NdTQZ2K9Yx4camsA7RaZN2xsDfpCKDtADv7kc7jxGGurYy2Gw",
  "key8": "tQPJauXTmULJsQyDiPadzuXjoG6mG2oJKUJuVxfc5kvaecy9vYh1vjqTtNLNrFQ9me8vT2Qx9Bg2YwvDiotCVXh",
  "key9": "EBwYsaVksBG68wWsG94utrd4oET1wCV5CsvvYfNAcVyrxFzrzq9xcqDMfBW8GmSSxuMufjYUCnqP2XQaP2Bi3Rf",
  "key10": "5kSrdAzaFcC4eHnBZgGV89eV9G3T9U2tso6orLX93PFZm8mNi3wDG761RssdHfdfzZ9NVjKXxqMNq3nVp3BiV7XN",
  "key11": "h3h5KkKctuqg27oQXZdYgFYfUBFxnvkhBXd7htUSa4QUR7PeU9iCGLvWWTentp6RyjQZFDgkK2wXtvPYT36mnY4",
  "key12": "5FZxZtBs7f5EgVyrtMu249MGB2j5QCE4P55hVYmWf61Lt6obs6ivPxScmVe2ktX8C2vjTUtLng5h8PcMRwKDVxgq",
  "key13": "3jL7KCGi1iMgCVh2mD7zJW12P9ruVBEGnVTwrwoU5gyW5PpHLJyqZ5Xxeu2LS3Y6kmw5hnSyaZVoxMQkwFhHZhG",
  "key14": "56RFG3R42VLAs8BDBi5DCEFZpzFVvJQfxPGuCL4v6b2GN1YqEChJPLSPegXmYh6K9YfdjaehQbxwJS4wAJZDp7r9",
  "key15": "3iHTCS3TWNwAH27iti4RMUWMyyAPQyTqRDDBTu8rUCv1vTYua8cTBDece217cLgSioxFSAZErE6Z5FPWuajYN7t2",
  "key16": "3KaggnYRMdodS3s6yjVycu14sWLoKuhKcH3Z1iBUPHH1kb5xFoJayUhkTUjvNEpLdvcACr75ookKuSRSEikJ333Q",
  "key17": "4SgeFWSABuuNvNWoVVAqV3K9ESETbA8jFK8uBEtYC6QNtZQrY98pWPkZmFEw5csuvu3EQvvdALD7Kn45Abi9LrR4",
  "key18": "3Fv13VqZgnZHpiesQd8d4ep6vgHYat1zem5mpPr9SAan7x3pPpsdoaVpWHBpMCijcBrxWbsc3w6jV6n93MKF1Vvq",
  "key19": "48tc6Dbii2M5jMSy3yiJBDvYDyikB85R7q1P34dCXxwVi1Wuj6oDUGX6eq3tfgcbVuboqjrrHsdcQ8d6fGrCkENj",
  "key20": "2VNhjRVZgEsDoCmkgWkWVKwZGL7fzGXnjVq9QzENtNsszEieHKtfVXVTsQ8ZXP7AXmRHnvsHzkpxrBj91i6GVEud",
  "key21": "3jstYa7igj1afMH3qKTZ78aPHRnKm2bZyKre377t4P4qnDGR7RnBqHqKy8htvUFEH98DsrLgU8N76ygdbEVwRWA8",
  "key22": "5mv7eJt8KjoPxukB8EcaNzGpzHkeCFPfybcWUPd95SiLvx3fmxDDPfZ7neJp4dJkthXdy9kfM6wUnDscuE164BCN",
  "key23": "3UnTEGyaHKgXf32Qg791GTr2fBe7H8VZvNKuY5WfPVBSJX9jUHkTtXSQudRHcmC4VUMCGpJRhM8EYdvisvqTh3Mx",
  "key24": "56ZesAvcET8gECriBZDyD255xYSoXJDXyURgcRJxmP4iJxuikPbd1sDD5xL8EJhf4qXzeJ8DRQxDBxMCtiBhZSmX",
  "key25": "5svw1FUsVX6BnQBoZBESvcsUYi8iq9XpFpKC9N1SuSJHrNwHdQypJyf1ghTw5WsPyoQ3CDdnKCQJHhgDwv8B7qDH",
  "key26": "2qyFAzv7YZH8voFvKE1QZrKfmaz3Uhe51G7qZavXKaWNQUa8hyFRZ28NVZveEQeyTg8qBtMTNjdGaro2Fw69ncaj",
  "key27": "2adPVAhuUYtYmekv6ierpf5j78DudmG9CnebTfzCEFnfbNXPT2zNzRKFfqaaRqJ4UYGcSLaPvquQJ8qx4Jbn31tq",
  "key28": "2G4UhpHwdPzUqzs3R9kgcWFdZVBhHtvUc6wqozKBQB3gvRFg6nZu7ZqNS6jwfX8nLzLNPRBvJhTsFnxCCLd2HDfN",
  "key29": "Ug9wS5jaodAdrWUjgzDbwqx6aBGrqFFDzGNKstEw4eN4FeTqACxyKPfZusqAYxyS6zoeLJvRADjPqk4HFsStEEA",
  "key30": "3Zq6AxskSMh478WvSmHB3eguphRhZaWJua9ozPF2vjAFWfm6y4cvoJ3kLTqTFCrLqz8n7RFfpnnGKkGNoNwi58d6",
  "key31": "4cncWrKQTovKGQDxFQ7TjCx3NA4ABZUC9YZ1PygMQv1RkPLmiPTCzBS7tMXr3jXv1BfsKbo6vUCzBhjHdd1gtdN2",
  "key32": "5r3RxsuKoxTDtbWnR56TX7hrEH2997MjaWubRWZzYbaT2sQ7tW3c23mxotfUNXS31QCwdfFu97jbDNr7N37Abbi1",
  "key33": "3Hxy4JjK1V4LpNC7w3zA93ehzJbmwGTH1Ur9sieNSMJ3b2RDJ2vSwurJj8KbfFsZjmuhgh5ZtiV7sojutve8GKDb",
  "key34": "yrWuHXLQJRR5YwHtA8JrtAPZAh4Btz3JQrGYY8J5qcBgMfMhBHNLjBQuA6kLtEHbt31K9tFtYCBuY1JYAycfJFB",
  "key35": "J4J255Gqqme3neDyeakvsxKFUdoZhuEkvLFvYo8gcks31fvmfdd2T9fcs9h9S48mPY3RHmwizpq4unWaT3ADGjU",
  "key36": "3wmvjjVSsQF1e6EgzRtjF9RmyrQNyJ78dwby8r7EjVKwnkkQHpY6iHv3iJEkQBscLLmYUTZjSWak9XNQyhfR8gLn",
  "key37": "5LrCpUyiDMTcGv4jNd6tF3ioW4cxh6bsyR3HBGNrtkR64ubhj7U1eCJdQrX4GgPVDmYd1WcJeF3G4qNtywuQQSEf",
  "key38": "5XjqmznHXg14kXnZiDbBjCLEE3b87Sqsp68tgewuqG6Jc7byXzdHid2iG6jgRanzUopViN6J9LJtphqWUmt4e3VY",
  "key39": "5FHRMf6tCBDvrFcpRTPLqZWQNmVdk5TaKn5ysM3bUnXmhDvaTAbAgaEMagitQTtwBBuNmaTYKrmiHLSJbubZ8F2H",
  "key40": "4VoQCPQpEc9tga8vRP2ZhonJCKDDwzkLyhtdSNJ98bQqoY9QhP1dSv8FGrwoq8NpPBerxihrWsjdhysZWgXC5WY4",
  "key41": "3gGzF6EhzkcNm9XhrrAeK9VoKfAz4peYFv3wCUNvB5E2Kmv24TTDqonCw1E6FfSx3taaokwKi7oqQoZoeyZbt2F4",
  "key42": "4dGvMtHqN9dZu14onXifWKJXCuaRzNV4dtY4C39goWsJdv661ocucLBrfKrap5GTstDWW3TutNDxtCP6sMsVrv6i",
  "key43": "3UDrwWhJzB3gwduN5PEVZ5EDhfWZUA4Tn2CQzpKymQCzzVKBQhv16qoP3H4vd49sfKuLRaWQ3smt1C8c8XVyV1ti",
  "key44": "4BorArVsPpwCqX4oFJbYwGJh4cARA6Hg13R32ePWZaKxmWRwYZALzLHg856tooGAcECZDL2PahaxFZYDTXqA4NjS",
  "key45": "PZUL16hmkdxRXmLVm12zzRruimAX626NAm65iuC7xaQLE3YMjUbwA9F76wa9VSnMcFDZ8K9Wfv23af2q7mqe2ya"
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
