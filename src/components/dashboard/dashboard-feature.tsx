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
    "3Y47mrpohyyFeqsD8SVNHyipmq6wnTVkt2bMYnMegYBNhSXeqkAW65va2v1uKCthJX1g5JMCXj6qr3f3uQbZHN1i"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4HTZsS26j6nLfXAgeaSxoejoz836R69rR6ES1j8N2etYk3zbhfTYthh7E4x2zS1MK6ET4NNcYoZrrMnSLSDptot9",
  "key1": "5Y3PDusngFYcSmTYF7kqoneZ6x1o3R3nhCLsga7P77pf5xVhQaoyZQVgYUsATJm3YyodJ9yBGQwCayykhAJcFZ73",
  "key2": "3XtRprQchf3c8sxPRDpxi3dAf2Z6LfqqL7GaR74sT9xvrPHWR6YA2vnpfgMcAHyi5M5JWQw9vvTUwMfGwJ5hUrFY",
  "key3": "3dRuTNbrqEpSSeLxBGBvahNZeWDSzLdDe9EragJ4EBgJ9ryWeqebWFvzqbz3SpeNfGphoTMo4LPzLeM3ZvWYmW2K",
  "key4": "4zsSoWUxnRJLneic9FjVmNk3JinijFakUv5ov4AHjsni23JBBnsTi88zH3PAa7d68sf1TAdC554y1S81rkzcvt8X",
  "key5": "5hVM4aGsfJFsAryKmCUnjJKHLc6U5twf353YEUiuiAh91yDLgdT23uRCCZKPRSNmVSJj6BDrcNJ732V9bbzifDXb",
  "key6": "3wdBiByDwvGq1GDmpcByFcbivvRCbVp46Ui9iKEFbvcMy2JXo5kZ1iwFLc3rp2R1HGwq72NogEbmjRkrc68iKGZ4",
  "key7": "5mFJ5bGsHaRx4BbB16rCjE9MWTrzfJ74C9BCQsVj3djLPEFriEfk59jEBVvHjnjNKak99oDUPPWPuibvz9CREBWY",
  "key8": "5sif5gRqnUm3aN1D8acAqY8GXjCoQBtad5rXAuGGRo1Ds9me5Pj6b8GsDmja1kPSGxbm65TR54cH2UcPFRE9Wq8u",
  "key9": "HKcFhFwFxaMqaRrbNiyAyfZd4gDFimaQhF5FxzUUrAXcPvnLNhLjiTLsUm3xX2v5Lobk1L4DVqR2Rc2k5yqbQU7",
  "key10": "24Vu1QtgWq9uVHFMQKjkUWPvvMnTYKYBRhYRnGKDSB7898tVJSuKykYDML93B6N6eQZQg1GsSYf1fVFiFA1BvGa1",
  "key11": "2dTAQXbjc16XEMgsoiWF2txkGL8tSPXXEpkzK4SKUvfgKCvePz6JAtQvuYDLENeCKGmwkvZBL2pBW2ifpXbTbEin",
  "key12": "3zGKhevVw5DkxGxaPRoFn17WuNASmXWnzCQiSPyNfx4Q1aJpgkqesWLGbMTrUCrBj1g6WWZQM58f5qd6B2w2DYi5",
  "key13": "3sfTkaTFaYzJFWEd2Bm3c6NwNkGQnVo8XPKb1ncyiCP7iXWxtk9NkEdx8LTmZcP2SKNs82faJAUQjqiaWLeh6aYC",
  "key14": "2U85GKZfeLDeLoYuknuEMYkjdm9ZbjqWcLFmqSpuVNrMxo9JQ9ECuGF7v3AtNYV3SNzDfQ6jNAEZgNuQYaE9ZLEe",
  "key15": "4WihW2jUYz6nPnMo5Zi7vRLnzVoWY9HsAjA82JVVkLgT4chRLzmJ8uTwgKB9qkvjdJZssB8ZCnYouDujKzUqSz24",
  "key16": "53ScsmhTbPJEzXecJhZvcrWoGA9ycbmNSeLqkrFfkyPgFXqsB2QRG5bP7un5oqHLwQyCAgGHrXhBCrNN4myP7uxE",
  "key17": "pUREmu6HdJBgrAau1X27MDHyD9Q2yK7fRhdU85TvtdSDM1pUQbmT5NSQj1hdhdeAgmnUfY5ydZd22BaEvVoTAXT",
  "key18": "3fuA1jxeYnxYpU4Fhyq27JTe5o9dUjnxujdJgKwwrLeJzPWT5QsfiozYmRoL5N1YTvo7sKVnwvJG8was8iooAYkV",
  "key19": "XPXbW9HEQhZDzb9JocUCqVW7gwsuaR6BZX7T3mrrieiEMP1NkEXy3qmS1ukXkzFLCUYf9f2UxgWW8QoKmMLjq36",
  "key20": "5gcMxb5dkusfadhnQrRAvs18d6PhPa3CPXKnSfZBfoYehstx7eFHoJZGQRderz2iutcwxvhNN6krF5qJLs75JkcL",
  "key21": "3VLWcjeMStcWzd1bcG1B6Bh8RtbUVJsCKXKGELa9rRj29K7NkvqEj3KPYykVjtGapq7eug39A7fBygG3aUR8kgvi",
  "key22": "wazaa1e3Ri4fLugmBi22ghuHTGZn9FnTkW23BquGT6uWKQqSXqMgR6nLBnAqns9rKzHMktVRpe1o911gtUxvruL",
  "key23": "4dXJKMVqjNvFnVEjEbKXYiE6cxjZtUt5G1nZQ3a61sybBseT9sg2HiJaWFbpDC1oLVLbskZjgJBxpyCzc476Sexv",
  "key24": "34T8FykoKFPaGsmHrdSvUw2wWNKtzd6vLPXHCbLC5mxDbMo9H4g2dGfKkgB9Xfv3oLGS9P3nvyxbXxvinVXuDoPi",
  "key25": "tXBV54PNH9yfgwz4zVFoNxvLym7wHTJwtmrPXivxjJtx18YA2gKC4VXrmxQkDyFGxvtUKFpgKKokEyumxcPMPQq",
  "key26": "44RjQpVe6JyDB9aFQ3AEWMcn6MX1F14nf9NAJMQv2PRSfuM4EZDN3EMXTeT2RFzuzWx7YDBGd2DWyD7ymYeYDSTC",
  "key27": "4qYAwmN4BkoEbq2YnJp744z8QKgsg353mYNVP7d3MNqAwWdDL9Q4XqBDqWQKsrg4orQs4xV3p6QRrHc6qkfNL5tH",
  "key28": "2qu3oMXeEhjgjWhwkhih2eE3pWSghB4i86xN9qsLZRZhT9BHNAFD3ajHy4N5NN21PGrF3Bg93fVkzohdRF5KcLdu",
  "key29": "4Rt7itQL2vJDnVB1C6w2iK3MpuhL5rkwnvscXTMA64ZqtvQwFfxxxpt9qJDqGY57G4A4jPF37wiu6civauuxq1qk"
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
