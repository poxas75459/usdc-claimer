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
    "46NBR7TpMK4bNTJkdUTfTmhumGMLKs5JAXpmeH5MmKUJHvhzD8D7zs5ZpARiNr4a7c4Jzw7xo86Wvbo9ZdXxCXqy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5a5ZCaSuqW1xZaZ4ymqv4WSZsaDKb8rwqHjnY33Xkc6ssgRGiVjta5tMNYbVsviJDnqHw8QD2H8jE6zW9woymmzv",
  "key1": "37JvTFVVrRdJQH9Xm2LWfRiZHXZG3phHKbso2G4nezBgm2yk9PwHAUs2bXbgURYvdP7pTZt44c2uNoZmcLWbuDaf",
  "key2": "4GdHyYwpY2Bpbjf8VW7v9RHCfNz7vHmtuF7QTLCFmbXb3kGEEMnyvNeqRBes4vUFoxidHi3ZRYf2M8HzAdZ6GWmM",
  "key3": "56VmVzDmZgJ9PceZWD8oRzmY87hB14ty8GCPZdq2VTvMfoDwkkYa1Lgr6qxbM1JjtV8zM3HSMYzFzNfhpoHQJfSR",
  "key4": "4sqcSgim4t3mUS2DKfXmthJWpym7cZAYbLCbF6WXmxXcJzZRsxSWapznpr2vcdtX9zEopukkBMPyjL8k2icuxoUG",
  "key5": "4KGwMj89t8axnrfUdWMZtuisfqubTmgnLDVz8Dn7T4WpE3bRGf8GchSd1vv4diP2BVp9nvNXPntFpQa4Ccg2FLic",
  "key6": "5vZPJvU7AhbnBFgeATLnofz8MSyHuyrLcXzS7uUYF5nWR7tznqcr2SvbbAgYdB215CEU8WE8RqPW7GDedpFxf4dn",
  "key7": "5xRvhnJRYPmKgj4skbap3F1WaofQr66Z1fGpqwfqiaWbTQpzV8XFGzq5fyQb9HbY3oCzbJU3TKhWivNidAEBAaGE",
  "key8": "5FXKx7nfs8PY1NFbh3a6Neesb1aPjaoQy2gi5hjv5iCuytHXr69Q6KkuBkGaLQ723zPkfFJEL3fFsoZ8uH6qYjTf",
  "key9": "3s3zGhcNNKJ5VAhwQY4YwLJZcckNnrgU7XnPq4pafasHhYK5Fkxk8W97auLA5Fn3fxLKS3QwdRL7tkox1pgPPv26",
  "key10": "2N3d6mb6CuqdF8t4FupqotcYi8pVDL38UoZHsqcA43iUX5yga1RT35PQRhE868PhGGkS1pAAxANp2udt3XFzAsYQ",
  "key11": "55i8RNBfGy4M4SgzFh2wL7RFHdeMF2qBaMW3uSPn7kUpbsrkZiHVmeoXAeagHig2Q9dy7SY3xrkjqrfJ9BRU65P2",
  "key12": "5diYKzMYoqqQjBYKfzmFQwjbMYyuX7rUkevLQi3iPDpnrpwtkToiuVdAGtELXFN5B759h8R8psEyzxxBQXNWMog8",
  "key13": "21g5kJQXLqeCmDzuaHerpvfhK6SvKPVks8RV2H3zN4hh3hFiFb2VDXV6mMuAzjLBWmhCTqHPotmYJfQhepMiBsvQ",
  "key14": "4pUAXmLcaLLQcHZps7UnNskg45As533VbMsjGAZK5Tc2A3UwnJGrGr3Std5ijrMpNLJtFCRabmtMgJd4e5k32z9A",
  "key15": "UNux7AVkiBAnV2QD8iUNUiJqHioaaZZiTXiK38RJCQVksiJdybgYvdfZZGKuYXNz2p86CbuWatMgo43aixxuLt7",
  "key16": "4r8tMfm84ogSbjs5TWMduUULEgiGNtKBngpoUpaEJc1WScggJujAm6vEmSnkg7vSAV7xjpt9TiFvT8d5zxUAsUFH",
  "key17": "5Ug5fRdgWR7udJj9NEBFsurDPQiZb9Lhm4sCAFTdYLGKDutjdFP9STAFwWuqKtVgW832urHmnkdLVYsvw1ynMQnv",
  "key18": "3gioFQ2PUUqfYGadAMnjptsqvqgyLfvmnkSndcN6MDnTHe4VdMUYgyBtfpsSiUWaVzkJy3DU2kxhHYrkBsYjLfkk",
  "key19": "2gV59vMBEsjuYYv3oTmUuCY1ERaxFt98Pj2MBrSYYnFi8swRFMy3HCyS6Y6q8nFzHBa8i1Hv1pe4kJ1V5vG56YVe",
  "key20": "34zK3oDVe9JEQiaEzarxX56dumJvnH8zEZDrvjEkE6waGDzbJkhx9TpJ7TVMJWi1gHWZj5aZkd6w8ybBYZWGFkEy",
  "key21": "3R6bQRiSuakj2VbjMpMSEjPUAR9xtFM871ax9PPfNRBjgdgCUPP7vexV5UYYBcPLvQFfDgHZ2iiPCENwU5jC8qR4",
  "key22": "5MMjZrTAXA22xYLjdThKBcbZhL58rkXtSitChGEmZXTjgUS2T2RetD3ziBVsbmywooGP8JrmsWqxKaKV6tvE6DL2",
  "key23": "4r8eCt7Qbudamb9bgnM25Ru3rczk3CL3z6UMkwwNjGkMJ5NQ5P65GabmH9qVYooG2DGr5Lcwp8ckhf4n5jyxpqN",
  "key24": "4w1Jwcg5VNyuRYAfpffPW6qLReV1gC9TG1fE44hdMAGUuwSZcEA5Dk4ME6hXQP2GrSX24GvqPibFuMbFdpMHBSX4",
  "key25": "2B8iZScm4W5xQSqktoxNcVF5Ct78Xy8zrub7mCGngPC32w7hoUcZ97Y8dgGg6YNVpcSkiV2R8TZE6wUi7uk5MRoh",
  "key26": "4kdGqErSV4wxCv8dGQuAjsLRfy78vwvRvJv34D6yVimt41PeUMJ26GCGHrDsd3AJmPaHNbHXMVEwvPuoU73CUMwY",
  "key27": "2SyQR3Jn2RRdxTrT4xDMY3iu5zdr9o8TaEwMRLDmhof3J4RrFomhNMvzYgjGRCEZv48eanEhkk4oWVDyeUGp4deK",
  "key28": "3bZPage5bKgSWqET55pd9KWNqPYt4mYizSvaLLiyXayQy1jzXU5aPvV2XZfdnqaq3HSuLtzHF38hWJZdjTw3fKGG",
  "key29": "4PcNBgukM9N9YdMu8C47nJeWLZWSJvPkpEsgK8mVdkL2Me2enzMpVZvsL1yQaL7jt3Ezfb2356ShSz9FegQytWXW",
  "key30": "5rX5K6wcGwXLNYkZSQzTMmL6RKNGrHZnAgugNcAqfqSM5jH3vbBUVZo7pEGp5xPqn9esLBSoumYkidZadFiyR1VS",
  "key31": "5Qvr5uoXRidEFHg84fHKrBr3jCxqL7eyBVi5gRn53YYNYsg3Hw5f986LC8idPzZ8fgfCMyrrCTccjHDcboFgw4rW"
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
