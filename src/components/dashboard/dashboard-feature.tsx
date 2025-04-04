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
    "41W9ja4mggdzmj7MRqrvP8jLrZ9ko4fydjT8pXhQgNWVbZJQYEQ54yQLTCW9JRHfF4ofFYDxCp1g6fsLjLCpz7Wt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Wn9MrPLXMvpczGzgthaQhrt1dfAkdJSFseLkwtgvmS6bD4UpsWHCvYdVx7gZMSkDrH9ddcyzVxpbvaAft2HwgXi",
  "key1": "3mCNLRFmy9hfttd8yMt6LXrnDmCkuDAigBbFzENY8SQnegyiNxMxFhMEhLhAVQ8sgwJETm6oXPw5aXM9Xwk4pPGp",
  "key2": "4s7Zp27rkzYq2kywNynxdHnFLycsRNFsvt46borWys5P7x9wWDWxsWmtR9L8YKLeHX8NjrSaVY2Qaw7gWxjR3T6v",
  "key3": "2gWtDitVbJHVQPC3jH9uNKSh8bjXQps5gKee51bQhsmyc3b4p2Ad4eogzH5xJ3jiQJtLJUpofAVaFPiDg7X15YoM",
  "key4": "3bK1iJLMcfQ2kbM4Z9yRyVJMGRewJyQKnPPm6kxco7fgGSyabPT8DnhCGhiQMKD9GUMNETUYE4grZXjk5ahFUAqk",
  "key5": "45KzXhh8eh9aeWvGYi5zwHnnxixLVokGitymNdbMapew5CRBAkFsv39mbftcYTNRVn84LSAi61Tq6jbyWAmsVSqc",
  "key6": "3fYHxMfV6khU5BbQNwViUzNzCxvVYTYBffiwGQGfmyzgWBbKVrg6EgTk18XhaHbT1frFUsTJsYkVmEqwK8X8ubzU",
  "key7": "5w8H9JeRFi1QwPvPK1tHdLNjDbb63Wg8HGsH6MMy9hQdnUWm6ZvDFZq8LeYSwPVkZ8G8vK964oPZ6pd4FdZhM7gC",
  "key8": "41tXo1tPo6hUirPHgMVeG4wuHE8giDfYBgvgWhbuWrsFsZk6QkVUxnw1MFkRmKsLpmC2y4LjpvFRu13FfittR2gs",
  "key9": "3kgyH6qFfJFMB8fD7dTJ4cf2QfyeSn2xcHSRtKV2LCwPgfrV23sSNvLA8obsgy5UG17UntGpvRhvKi3kKJPDiEed",
  "key10": "365L9egbtdeS8CuxQahMnuCfbuTEazVL5KeMeTLdixxNnNeY48kWLxfRTfsSVYU5ox4pjKyCFmiUHLdQp8UrBds",
  "key11": "3B7kufY21VRz7yFJTpfguBV3gWARTHzfEBHAjKfGYg439C1xjfBdAXXyX4ct6UVGVi1iH2jZXEP1BnfMcdaKssgz",
  "key12": "3r5DoduYYB8oA1fg6nTyjSeecWrMeqe7pebGk3uJEvQsMonh3j5UU3uuBseuc7Nh2b5uTfeD3fWySmFMoN3iG6tK",
  "key13": "92TaWxL5ikf1rJZG7m9wyywPvLBawnbGSHpY9XByfcduDAS2yhu1sP5B87x51vgz3tN1QNXzw9JV3sytfETXFMb",
  "key14": "2FWhqASi4uUu1apxNpGZYbVRCvmyjTSrkDRkzwXeMTznnmVHJhLo8nEf1u7g5iSteCzFtPDqSu6E1YxGmtSssQMV",
  "key15": "62hHX7Jq1q9xqU14UZ7psRcVYM2uPfZJVCdfjxLhyKkhPqt5USd3AmHvwKbRPVRYazGUq6VAjVFAj4iZUcEQUGD1",
  "key16": "PRcaYw2LrmLcxtyXUVg2g4X1ow6NFxTwSya1vtmapUN3zK6Sf6x52v5yr4P5hEZomFh4i8LX5mEdqkTSKHpi3PM",
  "key17": "2ia8iATWB5MFMCHqX4svVgoyKHo8WTtXVppXpT5XvaT5KRjV7zxyxkmXqPHZYZKrjc8qWmWVY6oGoec5WmZjJGFx",
  "key18": "2qKFWSWz1Th5XE2wgGYoEFSAzoB3cyCALwdwAcLPcY1MpiuTXm13hjytUeDpnQZdFfmAjmFniaSeJXS9h7rPjoDe",
  "key19": "2tGEae1XaCWX1S2ysYBX2oU19VcckTg7N95kZNH8xcC6oepDsqonhzyvKQBznbxppZDKMZTVhpP636yMvCs23B8q",
  "key20": "3ge3ASbtnMSDajFFAknzavi8hwDmMu7HgJHbQfNoJvPEtCVxcFMWsbveaTHzQEf2jKkhNbzHoegMb7Z6BSw7C5qU",
  "key21": "2CKmGWfX85GCya4aKybLJXBAeurjT611GsGLcGAzijqTfEaShSxeksL5MtbSyrxBAGpmsTd7yDEVciqz7EDNpg9c",
  "key22": "k2sNWbJFyFWvukJHpvajss39vq4ViwzrvoMHgzUFWFunV13oNDTiEyFqWecfvJLCQPuwiaCxxvJXMfDLWZwxMK2",
  "key23": "5UwszPgQn7GJduYZkKPPtELZdWytF1Dy3cuYBpSWU6jiXasRdqTHgCYuGNz3iTfE7xDTrF2GnWB8swbhHo96bdp7",
  "key24": "4UWhy3ZcZFkgT5x7hfmE1uxocQLUFRG2F3FKtd6Q5JPMnQvZEuo55Cg1AGUDJ9wJfW8UEoBVMi3XqptpeVSi5uPn",
  "key25": "5PCAUTPKjrtL1FZE63hd3nwVjbVMGQbDLNg5b3JkAtp5FHLw1rgxWiihVnwAEYERe4xRZTsA8hi951WQepF1KkJe",
  "key26": "4sLnVhxgAFzLXViADtMRn76gFy6yNUCFuR9XSDRYSkqeiXSUTqJUhssYGkJbxyytnoLni5ySaaocwr8tpbWKoejM",
  "key27": "2g5Tm6RtByDTFjErZq1UjPT35XY4NaN3FLPMqC8YGxYM4dEoV2oPicmkbc7wiqZeLvYzp98U5rbzJmYK7rRDsyna",
  "key28": "3jrDbNxeSdndV7hBQ6EgnzyaW1Jw1QM57Zm9TVwhhbZgzP7wFjuYStcapmZZTXmhgTPBmTnNCg6H15JvMe2qXYU5",
  "key29": "2Zksq6WUTCRCXBhDF5FRLMDefRwu4K68J56aBWPU58baxh2coevfKmvn3d7v8k3hxu1kRfuXxL7Y3CcgqCxFmkWC",
  "key30": "2wx2xpx1n1oe3CEbdUb4S9YZs2SSc2pEpzyrA56LhbHcNtZoEsTacLMqwwv3pdfSbZTCGZB3YGdCNKJNTcCVijEQ"
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
