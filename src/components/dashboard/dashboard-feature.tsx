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
    "4WGDhyRFmDfvL49jTxSN4AEh3U5FXmLYVAH9tLsaAzA2wD3zm8zv91X6VR8Tw9xcwHvir3RRJp3xaPzhMuuRBhue"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "58MMepF8VodTBQd9huMdhP1wEYcwj1QwfGiXpcaze7nKvVzWmXexkFF6uqtYHncHaz2sbqkWSDHaKmCcKw37oA3m",
  "key1": "5aVEg7akquE4zeonZDBo3k5nfFffXi2PMwQdDqTu3pk9k9qVie7teAbAbKjZVJjNQNoLhscaMYCGD3CoTJK92dUd",
  "key2": "5zztTUFoE8MhFAXvbewttRNuPpnin8azJCaZpbMH8i8GWTM4Nvza1zJg5rzQ1fjikBbfaGuDLYRVXq3oagb8TVMR",
  "key3": "59FFmBtEaU4VYgdembz1dxC3eLahUxLKACkoa1VbmVDbUnmQJt49abkeoN66ZhLNZ4TwUn7By6gUdd6SoPgeJmiV",
  "key4": "5ngyNCvmZexqGaKqLTseVUeerF3GmUPCYn6K9PYyYBmbSX1SQyyWouWdSMni6jexraUkpmqKntQUqXtLVJBRubxL",
  "key5": "5AphBGdFr2aYd4DET8EJ4WEuJfRsxx9rMsfsvh4pwuAS2iAugGhiXUWzXbHfzbDTRr58uX8wcRniEHqnUnvH784y",
  "key6": "8DPgYdJCeBFkoU54M4y57p1aG8k3DFmsYtBqFgAVnF4HoBZuNnbi2atyibdChMCBhj12B414yR34nydtt8a5RiD",
  "key7": "4kQZSs5CV9E2fhyysdCAWy647NaJGramk3ppVHknUGvcvjrfvUZttdsz8sVw8g2ArWzYzFeYom5PeoauoBusPT4p",
  "key8": "4SspGSajqZEfw1neHvwQYfHks9tC8LagfF9XcsxZpcmXkbkmdKrKPHPG1C5d2DsMZH9ML4BfozMztET8SNafjKmZ",
  "key9": "5BZNwwmZ1nGDxp2GrapYNw7wRgsGk8oN1Mp2GauE7CXmSZYb1KPsRDnDQ2McbygR4aD82N45PWHLmtga8txKQTxP",
  "key10": "28kUxpw1shH8Gr1XRUmPknci6a6FmazCUhiz4opGHgBeB2k5Jvk3GXVmH3cDzurjcr2xvjmCGozpze7QDG3SWypQ",
  "key11": "3seUiKdUanm9ZJiYwgZaJNaAzmSsfkpyxFErnz2NMccsZjHN5T6Jc7aaW3M5SLFjNBX7MgEej5NNxnEUj4ACrrN3",
  "key12": "ZetyoJ8Uz97unQK1txxWfabFqSBTkqzUb1waSNTfuA3wEgkWfyyQTZRFmRksjgRT8fp1GR9c4QCzvgpvvHAQvy7",
  "key13": "3GgPpEuZBEVkPAuDEWC167RH6HfT4R4DgVYCqvMiCGnYXjNkk65V4XSA87vbyLx9CqUvgBDPS7mb3g29F2AHyLJg",
  "key14": "2nRmtP1oVmk6Ux8MHmYkWroaum7aHgUosfdCJV5nX6Wx9zeGKAHXG9SrggYJTqpjjaRLJpwiebc9EH92Emasxezw",
  "key15": "5u924i6qFv1kLQbXvNVDbcLW336BqmhA1B2t9HqwtAsNhXkothfxDZJLDKVwD2RVu2ivHbHhGgxHAdzy5Cs3fw7t",
  "key16": "ZVvHgECs3YDZvGFPkg4Myz3GKmxHLZ41qTWa6WGZ7JAqoqM9WdqJYwUNT863fUYY6yDeq6VJiX6swYvFyvTfqP3",
  "key17": "5sdcEqX39muKvBjDbMbriAbaaeWw41m1WYRTXcCnzGReuzXrhwYUXhLWtC5RiMvuBAAmpd5Hfx4hMKjvGcyk4wSZ",
  "key18": "5tyt9ywTDxYwq71TgCabbT8QD6Rpzy7GMox9tGi7dd1iwLwXCay9mgqTeQuztwRkKK5pitCxbezUYazaH9kyhCPi",
  "key19": "5fxZyMXXfc2g5u5g8rD9CiSktJ25FmNrKB88vR3PmQEsHuQx9uvbXdZdVhgVa5bgV5Yv2NpHnV1K2HPqUhSruuUj",
  "key20": "54TMF5iEeroirVEc4kzC1yF9MFtkZHR7UtAbRRjurGsJbpiuoLRVgqMTzJfPQ6hM6cAseFVeygBXb3k29P2HSuwW",
  "key21": "3dx5mqxqC4R63xt1ZjE1Zhqcnv9XCnBHrvyMTyh4CEo77wGxNexTMdCdMZwd8VsCLYiGfN2BFJFnPzPn1LAPf8Bf",
  "key22": "3JwLN2ZsjkYcMsjDHHZCxgeV1Lmfg74maX8qvJ3deFe7mpHVkiEkLoEQoNok7ubJi6sGdLUxbaKBJJqKqrvNzLaL",
  "key23": "2HqJ4aHRxp9RxH8943VRqQGDDubzGtJHEudB28Gc1JEnMFRGAXpSG37Q9zirMmhNqcFWCW2qPfJad7eUzuXq1mzM",
  "key24": "3Mp8UrB4LtyDJnkzdcc8edKfz6MhxHouhVQHyzGJCJedQ3SV2rYCnjS82bRn4B8QAufKXc7Bv4fvbcnovprnw9HX",
  "key25": "uCnrYpSTmoTsHqyjKgdRje3zLPne6mr2RKXRhyEMmFJ6XzBa7B4vkoFq3pxVmQV4KQT4MTu7pDHeSn15FqVjbNB",
  "key26": "4vanbtxPVMoUTKRrVtfGr1PK3KKsrusgAg5GdrjTLBb4JMoyxGudp4q9mFg1HuP4ZbHrLriyYrT9bF6ezoVjXz9i",
  "key27": "66KduKDhL1hpMagrZkiMBMiDPRrRJVraEsjcQbKXiPhJpMoDMGUqTqpp61GbetCUHUoU8KcnVmMx3LEuTyik8C7v",
  "key28": "3Et6xbbvFMsqNZcE35hcDCA5nnAqvLSZER8dvAfigiE8NbLDEjSNJdfbui43YRxgcw6xF1nDMM4uYt9dZiY4mS37",
  "key29": "4cGdcbN1HJfjnygH8BH5ccziwNx4yUAg2qcoUYQssJnj1LeFm73aHphySrrR3nDHsgbvkjJKXon8Nf5wwuqYbTgZ",
  "key30": "4bsAcN1p5Srhw6bCD98ekaCMysfbjkhN7TtKw91askxCuVXBRDngaGavjT8hU8cEnfhKsSQWWntXrHKqsCBSGZHF",
  "key31": "azc1qtgU47YJ7LXRywAv7KKqRz4KWpkNEKpvCi7CZQtkok7yjkik3rT7hX69CmN16V2ChVS253grQTJa9vnA9Yw",
  "key32": "2mv1kqePVYRgwW6MdPPUkV1h1SEoPk9Mc8Po26g9pYV587dBdbDBA7csYsUCHFrpLGF38YRwaeWXBUkv2kvfteiY",
  "key33": "5CjNuBLWabsrUJuE26bZAq2RJ1FuPaz2qVtSkrgdgLytrcfKEdMcftFfUCDCGo83C6ibUq3yLRVoY7RHkNQMuLxg",
  "key34": "2ddVveDLYr1baiUwQA1RRa3haFixSF8D1BHjMXUwLmThCnrcLxAycFSNBUEbTFqXazbpyePpafXtxfYQvPDcp3gb",
  "key35": "esevK3Az2u73mgo6P1NEzv3cfAkRTEe8asQrA4mxxtGuuC8xfb6hiMVvqEnz2BKmKGnXx8qSt3b3eB1tUZN5WFz",
  "key36": "5DG38h9HbUHjxjbRVaPK31TbLsCDKNaJhyUyLvxNc1M5Tibz15U6GBw6EwAHJiPbUdHRLoxJNQAH17WFBFwHf8mb",
  "key37": "5qtekUE2N1251jLeScxvAtpszUPdLNEmTMpDwwuFhwX87sZbgnKRYwJWfSumtLMeddt3DfbjWPFe36qXghBhrx9Q"
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
