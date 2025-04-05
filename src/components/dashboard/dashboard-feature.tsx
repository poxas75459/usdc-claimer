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
    "j2PdVJFVRSnaBnWZ2gTesQN7VCsbcSwPgtji5nTXFiztrjrgYaCPDLy9TSPXYeETooxch5Uc9fts91JgkZQCLcc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "vkDKXiKYSb3uJBacXjsNhXunAySYDCx54ezbp5CtTohtgfcs6S8ZEiWv65keSgsoUhdPdJ9n1pA2hnDgfv6vMCp",
  "key1": "2yZAgAvRywtBkkGvyT5NLipE4KanDhXkqvbS8EMbNp7UbpHf1LAZPNKmysBbBSsUPyV4zYaef5guVnsSMbpT9Lcd",
  "key2": "4nm4f58qx5Hh7S8EBoYFWeMxNHN575VaVTPZmL3ZTZWVJKfp852mZSAiqMwnszweMYvrSr3jyNWK71STSD2mZize",
  "key3": "4VzC3GdrafA7wquzLgx9o2V53u1VHBfCKvdAhjp5wNkWkbpZAvGzFkJhcGYsxcDtR3p9JLGg5DVXDUCYNogFcfG5",
  "key4": "5LYipfcrcWQa3sWbtDrRV8vLdQgoTJXgChz31NZabtifdtmdNAMRoC6rmYR8kmhoQvaftVCX926eY1HBWDLB2qhj",
  "key5": "XMu3g3vtN2Cbyv2n7ceEU6z3ttj3sE7ZyzZ3W7eVfvevrQWjf9C6GUSzhNxWEj48ziyFBMVzRW9iJfV6wbZR2vk",
  "key6": "3UKpx2Qj7QnXhL7sSQzDur6ZUDLbLGhoMc8oeD8gnSJXAkepShuoGwcsmpf9pj1SqRHV5fh56iToK5NP6HG92tK2",
  "key7": "4g5zQraUy4Y7CdMBj5uq4KwsX45FCg77HWGfxMrJ9bpJeDMZ7onG9AN2gLrmq1Rq5tEKJ3EcwbtT7Ut969TMzeRD",
  "key8": "dUQjExSYF7M74v4Ljun7AuG4rniMNLiWF5F7miZrjxxwQ6TwGcehw7x72j8iZwC7K56fbcckQcAkTYbxExgamNh",
  "key9": "2oHLHvn3mRmUyrx7gKNWUv1U8RMdr3ocHSoaKvivuvn2nruEJU2QLShr6vXzXrMP4d89LjwT1d8LnkVk6PcsoyJD",
  "key10": "RAXEc5dBPGEJ13GSbG6n83Sj2NjHUKhN2pTJdRJzvecE1EmaJReYxM5G87dnNbFiAGAvqJhKgm4r9EZRdDFw1W1",
  "key11": "42d7U3nNFnLkEgLHRMKGjFj4dFfm9p1iu3bqNcJWr1gdY3B3C8doMRBKtmsA9jxc7yffRLZhgzVtizysSPKbfz9t",
  "key12": "4z8VEdJSVnS3o9hUaSpcrYqGhhvF48KXhGrZAk9CWn356FotZjUPT6ByzcjJtULLoVHNhi8NN4yvLRtPRao3HzNH",
  "key13": "5SqRKDNDScQtpE5w1vEgoNyCtXN9MsFx7WaEjYMVNeovLD4o5ptanormcqycYtgSBTUYnC5ZoS9We7vQrcmV8JG",
  "key14": "5G7bm2XcoCuLiSpY1ndwCNnrWw9iL785MEe3eV3Hx6jd6RuqrV1kqYcg8pcvpsbyHtdtFSKqUz6Q2ueLj54Mz8ng",
  "key15": "4pUcPRq5Ntu9fvJQ48Mrtsboj6Ddrdju5JnraiZG2D15iwNU1iA27V3eQeGBvj1899DHv5nGsVeh9WoekoFB1PDs",
  "key16": "12245mEF7BLDRiDXBYDuwGTbByh9n8YXVF2araWwDQHETJ9smVRXxbrTDU3XLCxTNe4nYNnoYKujE5pjNdwmnuuy",
  "key17": "2PrErcAzDyEe6m3hjWYm93AUZTiL19agLoBunHFo3CCqpDzErG8YBSk6mPihJLcYEweEzjTNKFeHY57P5qnrcycf",
  "key18": "4yrhYeRjVBxFzGTu5KSfETyn9JTN6D2S8hMNjrL7US5CuWKYGSJmAGy6bP1hxzr3mQV1yZECkSW4nVMmf7EHKmbn",
  "key19": "4PPsu8qj69qaB5d7EqifimdGpYVABByZLeF6RVCGDL9LC1mQjhZ2rrFyWQ81v8uF7XroQNesinmTETDqV6fQuL1M",
  "key20": "JpShoxEDyL2TooQtZW9HhaAfpXsJypqN8ngVTxgMYvkQZkvrCH5roqpaYMwwGiimh1e1aodCsKNDt1grtmrnHk7",
  "key21": "66oNLVmH8r3rZYjuBMbZek9ScPggD84JneNdAtxjdKEnYCKgY1LDgtGsnQqxdKCgAKBjN42rbb1DEQFuCecFRXhF",
  "key22": "2AtbHcw2xw5ej9Gwyx5Bh2aas4dMtdQUqc2vaqv6y52A4buWC5zWQZ7ysfNymju36EYVMFYANjsmHUkSVcq52aHs",
  "key23": "bTLFGJ3QFt2H3RonvKZeRR9ovMMgLt6CaU24exaXuV1kWh9kuGWvT5FpPNwxQbkc2PkzCY5xqt4uRiL5EeM8DP9",
  "key24": "3u5p5ukHmo1khbovJG3XKZ2LGJWK163t9EPKN3eeBqWWLNbR7rvrmXfV1sLBYnRnhx6VnAmdJbGUxhoXBAotRKsV",
  "key25": "41t2Fwf9wKpKMuYczZp9aNQuTWdDsVdA5cvKNw1j2ER87pB9sL56PPZJcLYvMEMwEu2F8xKGUxMZbPKomXTQBSwJ",
  "key26": "612dqEEFsygrSZKGgv4oqfQz6Rfkw89tskHNv1TPr4cSaGJD3oNTauvj4WeEoQK348JP8AqLFTkUSgDA3fxEMJUc",
  "key27": "3JkrPKDvGtwtSo4FZ61J9JFkvc3MyjrtoTE9pgg54FEFWyL1XynPWHmEc9fCntcEWee7vpMcEjZ5XSJtmwJVWYzx",
  "key28": "3nENZCPfZ7qbWTDJoPihzXwA6yHJfuHNVGDeFGiSmRRK2osmCrnFyDixUqHe5PskoyHzyEjffnSGKP6kQnwhhefW",
  "key29": "4ZxWj62njqRzkoHAs3jLKqEokCH9zD1oGe63YsAqWhjTo6zJcEMxAj3oziomuashywy5gBBWd34vLCTeFzXMNaBk",
  "key30": "2EW2CFvBR9tYTSeYwoXUw9jR9YZjT1wvX3DV5BvMQyd5JNFbZqXueuzf6uuEEM5jVwvLPBkgv3oqwsoTquuSQfgM",
  "key31": "53ZowZGV3sqARc1Aj4a2kEHMfD1hZfp5Wr9s1GEqczHGSq8nHH7FpFM1wgX8mBZian7d4q1J3Vp8ucVV4eL8MXhf",
  "key32": "3exag45GDXUaKX91qj5Q6YJeZLxbgBbkETcRNHf1Yv18w4CyeCqvfKJitgRbb4VTwLSGrXX3zdNq2ujzDECiLXkM",
  "key33": "2ezqyQtnrLSrzeXf3yWG9UcSqGEx24kwUniferf6GCfDVfoWQNQ9Rcb5dRGnzorfy19RWZHKSnBB2qTM7hbYHyXH"
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
