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
    "5VyyrZ1u6Wip566wxgSyG68WQnMkQxmBSxLjbBbcVphLDszEYRPDmvQWMza4EDCtoNMKKv5KS5eWUEiNpdBJQZns"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2C82jP9dpkhvqUZtyUMU24YCc9fRd9SdqFYEVmwiNSnvDqTuwoyEGkt94PYhuX52SyT8J87yX1hbLD5TZKDdfTci",
  "key1": "2iK17zaCLd5yLm6S3LzsXkt9GNaFP4r7FrkZ8S1UYPR9hFL3qg8zCSagbi5Ms7HFp2gawe7mTzuK2SqP3gBBwKke",
  "key2": "3VTH2NGABXoE6B7rD8CdKd67mNVjaBRARCjMrJ9P8S3bPK3dgseP1MWT5mAyfENW2e9qNAEQEkD4j45c13dxW447",
  "key3": "2CAwLkov2VewApWWP197ubEWkaFMWyz8DzJtY9aECmVNERs1ufFCRMtCM1PkEwxvxFnQpytH8hhS4CfCixeuKXb4",
  "key4": "2p9qLzLmhD1VzUaGiAE2qH8X5vJ4DbqZXvyaSiC1vKLGPvdZ4YECF3kGpW1hF3WWReAPvwYB8gZyWJdKdb6b3vzo",
  "key5": "5Y61WQ2BJRNUUG94z6uFHGnhiHa5hfKhVfb7vxN87ySWACn56yG5yLyY16ihXXXAhAjJfjK8Q9aSssUwNfRDTGVV",
  "key6": "5q42MT3N2FE7mBs3tJnW8WgiFYJBtQUC99UFQRcqM7BMN7d9EhwnTh5vrnXMciX8NWU5Tgf5Mss2FCYPBPkjaGEo",
  "key7": "3MnFUFwqQKeLzeSNUS3uTXvd1rXHSEw9XsPc1YQPEQLXFNiFMEDpGzxGUKm2YMxcioshFDcznAKHrAbEZDJiAHYH",
  "key8": "5uxHeCiiu6Sw7tjA7juf8eXFDLFVnCFF4F7XUBPcxbNMwqrHqgAFyR5cpfHgv8QnSm34AZQsVyjQo1BY8LxkBzAU",
  "key9": "5J7e2yCb1mTo31SUgN7vvnkBVBMAVj2WDk8VmYeFbW1hX1NrbKqufvzx9qCtTCeJTC181b4XdECRmYw6Lvi5fBkx",
  "key10": "25XLiVbm3Gdi8FoGhtEadP8zSyjXN49X8qVnTxUNU5chGqtTtETTmDHGDZhY78wKF9Xnd1ddwc7cDxB9hHRzW95P",
  "key11": "3KfHCaas2su2BKHcwkzGVponrh74fxnqyCgt373Q6HJxBjMcr9dB5B43Jv7fjrodYQrUNDGU5qKwY2ep55APADJ",
  "key12": "5GDVb1nCQfwrwvXjbd8UqzWjydh6vWRpayfmkK4ZQJhfpjuhxprkrhbqreNQsqb6D4CAh2DCPLphdtxMN8D4UTJq",
  "key13": "2ccL78jgSZjHDUcA8ZrYEjLFmuEUXSox9zXhemMRgipNq3ffHuTJ3g78o8NNpYYCx8xDj8dhrcPkirFQr5xq6aUN",
  "key14": "356fnJXR6RgnT2AEAw4LcPqyj4VY7A4ckoP4vAJtfaKFYQK4rMuMAXkXx18i74cpFiv8oPcnak8Br3bJzn2cVcXp",
  "key15": "4NUWUv19at2umu1cWxvdCmbm8vmmLvzNKzyYaBGC6zPtESX6BLoxKHzSFrkWWcueLLqdgrA68kBTZobni3qGv2xD",
  "key16": "4Rp7E4y1zFnmmokH3h9reyrF2S9Q77Vd2Q6Y9d4wC5ohGyHmtAAM3ovVTrwRwwYhJRwxTkakL5g7AHpNy3fqKNn6",
  "key17": "29v6TbNfucyMUU2cSF8XHAC5uFXkGQfgfnyFwjgwZowW8Ca5QJFfN2bwMDhYH78jeKVhpYVKvBqhfCvFw9SmEAiC",
  "key18": "4ESb2mDmNDyDfsk4NSQRRXspVYvGTSho9vp6vMTDXD1KyVQ23QbEBGF65fW8RhCvgFvQQWerZjaXgdHgnawbYm3w",
  "key19": "39wPZaVD4zvyR7woiD6wSjm5ogPQtcdrTMbQJFcrHfnXNCp52LYamRFErKpvyZb48ZskRrqaauRCpXBgVCTvkmrv",
  "key20": "49vJqmxLaUe1davN7qFTbn2xyeN2e3ebBuDvXhPMZ49dtSBamEeDBgUn7worHGesqsR9eAXNFgD3dprf3YAxpDG",
  "key21": "3XGBD5HxWyG4CcTVLib8RXieVMxfA34dgtHBmyzxFBsARipR3bTN6D3rHHdV9aMyXkPfHkdwbbtN8fgyCVurTpjV",
  "key22": "32MfCJ9N4L4oybcVmREWfSGHSCPc5tAovwgeTT8abxXpj6erTKM5CEBG9bxgE2vAWqL8DoWvJ13WbvEmwtq514qq",
  "key23": "3pSaf5pjm3VFWjia3UQKWuBb5x2RcAKrrz6wi2g4twjNruQGhk9jdLFbyjFBtm557sT9zDgVnjgnAq8jmpTUsPyR",
  "key24": "2mDhJioFGkeQosaceiJB3uzckKZdiwZU96u7w7Tc4mUKrvF6VGg86tEZzVTNCGqkfjewLgimq7UCqRC2Y226nE9F",
  "key25": "5uiDTwAK3osqRMpLTGB9GxugdQa4SCbTVkTMw7f5mR2p3vx9dWGBFJJ82burtysu3M5w4TtSmCPjBD5Xfgo24t5A",
  "key26": "5M1zNkSM2x19TF3dq7dM5jeK5mF98jDV2Cvp72zvhD9QsxxcxphvhRd4yFsgPTTLAqJ5piFSHMVsc48xfZP9mJfV",
  "key27": "2qcokWDYeD8WRgYqwEA8nA6JvVc8wsEP6QeYxeACFL6HfhY2mYukXUwi8XrzjmxDDSw9JEtZ9QN1my5qEsDts9Ud",
  "key28": "28SMs17uiaKYz91gSk2zLTjyDeiLjL7DNxP955e7FKU8wevw4sbgYmqWSqVA2zfWGWFH4WuwwnVhLZAAqtGQSPm5",
  "key29": "3rxVzZHZ8xJj4aRF6WbVsLDUEiy7XG2yX53MGGHFp6fKdKFz9cux1u5fLsWKPMLj834CqyEMhLZ4f79bpsTt3w4r",
  "key30": "aDGRm3oNCMYAmWLGVCxLWNjrLg1cvNLnRmBQb3QpxwR5cosvK3GUANBNwdp4XosBqLSfKSZ7QsSXd1uU8wB9jP8",
  "key31": "3W8eFgz8cY3oHwDVAkkkAYAV5WV5vcT6HTgAq6CsTLqbzxbx8o7S15v3vb4JdtXbAeF4v9UaKoJHy9AJdvoVmeW7",
  "key32": "4euRGeRy34YZEkRxGJuAW18adpZzhBNiKNPLDAjhGtShoK34Qc1fJbceuosieNHmEteE35FVSZ4ZLLTvc4T38EjT",
  "key33": "h27D3x28nBNme7DBSHbnDjKHbVKQWYdHCcNZsYDtijAvXWN62nFUkc53BpDXomFXqBk65yShV52rj9o6dN4PmUY",
  "key34": "m54CVjZuCx2vr3cszseLmteN5j65ycPKFpFUgxnDk7yGa6DRUdhs4cEpjShoJyXgor9172SG39qnMkTV1xcLkqu",
  "key35": "843uMucyx63mTjjxsFA8zeWDQYHAfCnGLpU68cUm12Ba3qU95UaPx7LRBvKSK88XKppPJp854jrZc88JnhnhtFq",
  "key36": "WPhi25RbwBMw96MPrRZCJF89K19qiz1qpGebZuZmDAnmz9QaSAi6Hevajay7r8AxMQUG4fsKUbYHkVDpNRrcQbW",
  "key37": "43MJMfEkSA1PkAQk5LVjS71L8jxBnsECgGA74CdkkFtBmaZdSG2L5UNsnNkfQcwew16Hk7JSY5bYAdNLPduLoezP",
  "key38": "2aGFSpFSpEFVW4YojU1jdzyBNjeMW2rdsJQsH7ZNTkd3DP5wD6cKp6ATSLECnsdP3ob8gqJM8Nc3rYyBM6y8tdzX",
  "key39": "4edKKM9yJEZkumwnUK84AbgCmU9TUqxQP9mxUE6im7bv12vWcZPqaKsvnjFhhHUv4iTBzoU8DU7xmutQJZBbNXLY",
  "key40": "4fpMw2o776T9WP8DRfxT8EyiTuiUgGAWStgKsPi2TZkpQcWwubZLwrzQMjauH5DfCKzQsB9RNDwoYHN45f1yGQ4E"
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
