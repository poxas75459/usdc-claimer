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
    "2sq8BCxyw1MesCzscKBRn4hgRJD3E1D1EPAQBcnLUVndAPYXNNzo3nerYxm2TX4yV3PGd3DTjcSJyyXcT4xVaXKv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5BELBQeT9mEPE5QdmV9qK8npFBddhE68VjV98zNBxUoBEe46AJS1G1VGFf7GhkxExtF2TpxRrsxNd1mYwyuLgsL9",
  "key1": "HUDapz5SJajjk5HpgFSrvnpzAd4EVJZ2Nt2teYSp1L2xJ9pfXkNgabbqGyMzEAuwK8Xs9uiqnLeomu2jSsPCVJZ",
  "key2": "316yMS67uSj3xw4RNVHas7QkfF3KAD3w3u4XqNr496TFhCQ4z3rVXkKvMGYqJMnLKQPVH1vP124CJufmu8nbM2Sp",
  "key3": "4x5q2GQyFbHoX5bTQxzL93XoU4SM3p4NxXdRw6xzB2qW5EpMmsGCPv7o97hM2gZSwC6i9D8bj9QxRoPrK2KnpWAX",
  "key4": "2nJo93gD6RoZEcGAf3kwypsfQmpJQm9Hg5bdBnAiTSXCxnj2m7PzAfcNnh4SFLmqV79hdeBbAiHD359omsJJr92i",
  "key5": "4pWD4Xt19N4oNBZ3T2bJHssJHeC3G55xbiKL5REN3RQds7cJ5L2ATZ6ufaUZGeYJwQcQbMjBJRQN1sjGZJAHKwL4",
  "key6": "4CHjH1TZEE7SYqeXz8fJWZj1UaejNi7pDzjv6ryxSqDYRjWniAhtzb3hrxzLmncvW928GtKh5Fdi9pm7d6uh7UM6",
  "key7": "33nfHv1RR5jqa9QDDFUAuDcMRBtd9Kqg5FwsE44pbW62FY86AA8EVCtgQf9EJa9rWLb53CHyCFsCQ9LwHFRMbxSs",
  "key8": "42xhgeMgeHbLRrrxosM79vLyR5pMJuLVY4wwmPyQsxsvxJBhfLzMQLqVrYLi3xeKspabsHejdZH7YHwQ5n9SfKE1",
  "key9": "2gcaMqbVCxxjCzgvhdo8tjGgvabZEGRHceV7j1CDHMCL7jhaGvmiTf6x3RGhUp1etTUC4G7fHJbEXS24NYJ1E2Ai",
  "key10": "2cvzG3iku2QWghcvmeSEw9CPLApNMLrKem5wrf69joqFVDVoiYddgEG4znQiRaZQq3tUdJo2jernYuF9nse3kcWy",
  "key11": "4vuhb3EDbaxqCHFa2PA2hTpYQBHXCFmLHp8Yci7abzJkj2M61FZn5LiQmNrZAJLuWXBumzTCzydp2pY4czhj9GHg",
  "key12": "Zb773nefvUcjtzEHwZJFoXDJAgNQNETaFzvTKGRkJeDAtY6NBWsjvE3uYHugVPotqtCzwSPzrXVsZz6NEoUGbfq",
  "key13": "3shMfEXDazYxUxNnv72PKkfrP4qBA9JYDxBw6EBVCC4UVg3AP8CQvEhae93Z1TsdkfhWGVExnNHjD7MEtjCR5yxo",
  "key14": "3yosgmiBhp5TLdcjqE8H3AZpzHehsUQeTabZZMMzte8rLD955FbdAQRrNypSjDydV6amiD1En7yPUjpggmrDj7d6",
  "key15": "2hXeUVCAzhMuZ9g52m3nVPY2LNhKnye1R1GPUWuBq93Hne4YUza7wDfyodMDtNwQ3xYLEcEv8mst2q5XSHtgxuzE",
  "key16": "5hTGc2EkeidDGa1DnVVM9NBWeHLdhLXVUz1fGynLg3dWXgVfYFqR8kjH1stLBmDyJdGnXg6ZRmygdnhirW1AwiSQ",
  "key17": "5gE8ri1GVateGAHwjQH4WzQUnuFMViN3ELFXwFzYT7VKkYP2aGbSvxLGksrcdKX3S3Tg28zTUTj9QLuCxFyc7ijA",
  "key18": "5kNQx7cjnHWkKYzNbDWPn53pid7cqs9r5XB6GNPXDPs6QLSSx7seT98KmjivY3hFwrvPLrBUTD7yXFqSfAwaEstg",
  "key19": "3PYhzHjXJr4TBR2mDwjagugY3izyqo9jG4xhQqP6t6tzx4v8HrdM924KTxC8Ahydk9qeTHPykrGJncrs8TUc3Xtf",
  "key20": "2uqiSR7aj7ed7f4sKhv6bJdMwUhrTKr6ke1znKrDcDR6X8hwCvdp5f9ht8efRj5iHSaFwZdidQgHySAM5TzKmnSB",
  "key21": "24VQuFAD46ZNoRshZvHknRMNeBUWEMmstAVsdPqv9odmmXR8koaXMnvteYaBEXyjk71AZLSdQmSKFg8ThDdJYKGS",
  "key22": "38PTykiQjWp2soHkiW3fu3pT9YHSYVh6DchShP8dnXJ98ipzWpMwyoMqLbvHYgBm9wkzuiFL6vpwogSkQ79K2UKm",
  "key23": "d2gMvcX5mjgzgfH9KLHXr6rE6HupATaArYu8bzkLHBaGo3NTAFCqckCZFC1qQ9QbC5DvUghYzbamXL5aVNpHtu2",
  "key24": "5RtecKpfvj7m8n4Rme7kebmB2jgpTcUF5pv9Q7ee1SB2D3t4kr59atnxtD2pkYwfUMDVsot7fuD9nGfRt4Aw9Whu",
  "key25": "3jAMoiiUPfdb2mwg41ZtqDVbqmMDaUrAmL69SQbr68G9Sp5vwRVAjBaeSpTybGRTSLhzekRe7fGNLiZAjzsADWin",
  "key26": "4NckgFN8ALweNb8uXdn9VetNwVUvq8CgsJ665ikLWbtYm7uNL5nYVJLkvEZGmNuWU5skLCnJXA5gMiFmoT76C6dK",
  "key27": "Qa1tZu4dR4d6SZ7ukpR5okHyKpnm2tkGjYNFdVTU4uo2xMJD7fW43SbM2DXzDxwq1VHjDeVpZRqVmydZ5JFhAtw",
  "key28": "rXM2vAu5J892Jo1MygaPnm2u8cWZ8P26dynWuJDo53jg73BUHYcGCEwDU6J2R7KPW71ovWbDkYnTrz3VUvrV1Ni"
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
