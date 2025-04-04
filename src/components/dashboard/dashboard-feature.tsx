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
    "57gyTKAanGfb97skMLM2JFsgrykn4S5jTx9Kv1ARTLyJrFz27UXu9ZE8WHbSTETnmiFXm6TnchW5uDgEaTs5LPbZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ERTHhRFhizuyxZxj5v6p3RAuBpHqgpTGboTZougJKg8WagP7n9ofdu5pwaADmHYFsdjHzPzQHDV2kpUtPYY9Q77",
  "key1": "4FvUiKdMh7XkjwvGhA6QzZCSwYC8ogyAAzxBAQyjQ4tgXT2fNmKMkyPdjD3k5VGJoXWTz2n781R8eTXR3y8RTont",
  "key2": "3tYVWrcXUStKpjddgSnv2L6m1w9UyRr4e2QLX8VVJMPfBkAsd7xVNz8ZoiifGmSQuVqK32ec69BkqzRzoqfi9Qrq",
  "key3": "2BLxyP1tpbwcqPW3bXB3RkCreuu45YEPG3rBr3E1qDCV1jQVHcy7wkyJVSYhJh7a4RG1G6Uxhoq4PDYUyaoN7A9U",
  "key4": "5k2WmP8Rr72AW3fgJXM9kcLbcQA5c65MkfenxERNfe4JBEyruA75BigFSKeSWdzXgpo2FmycgwUkBs9sAti9L7Ns",
  "key5": "4MvzHbXaLCRsy6Y5LC351hB3DcTb2oKPUpMgq8JV4bMLuFaXteUeQWecUUUJRGC2VUWJHw1LAD8S7aRZtynAbZS",
  "key6": "3vR4fVFjgKkHGLw3vSPPzBWTWUdKFLusFjF4h3Xhaibac7roBsRsc8CsUHdXog7zM7H7VomoPMPBLkdwhN7n8EUi",
  "key7": "63uPYZ3CVwK7pfEWj4MExmibe9Lishw1jGikqqGkXFPFcT6JJwbAiw3g1ymKaXPBYbo81xhj8naSxbhgTDotp4eV",
  "key8": "5DjAPkvvBdBtCFT91ocPDX5d8nHRVMENrtVCveBRYFuoc2kqcqw13JmNF9ooFgLZcHopKQXcXqHppA6ZuQmCVTYk",
  "key9": "2DZeyCdZTkNhgVRcskoXFv67pDEqQyg8hNGbrHiFwhiG7zCsSCoHJwpnDWvbdxPQXY8iaQFneBRv2VUCmVojU1M5",
  "key10": "2WXuBwVTiPqb3VGKePZhNYfWrVqpwnrSCid6oSZwzzTKjsakweTHo6V1d2tzDnyTPZJDt89aj7LdH2zk5jGR6G8F",
  "key11": "3SyS1KruJLCBbSUoEzjfgyWwdtKhzE9PJ1Q9Zdbv3NRxHTiTwtSDYqnKezBiPD8dtLSbnrhBM8MpAuAXSTdd9cc3",
  "key12": "W8KwnmH2LgYnGH11aqKdp8T9wRjtTFJgD5DLfGM6XfW5dzHwBQ8UjQDwR3fWsv6ccs4nmNFXU7P2vfuqiKwRxd9",
  "key13": "5KDJC9Ja9YjyXDHW6EeFkZqVPCvS4orG99ipByDMXRgARDEJTRWUUrVwHPFbATLW73e4rgToqsdGWsXVLNXUMsds",
  "key14": "2oJk2ge4yQSLUG4YnD3rCWfbSRUjaYkkn2QmdC56hU6FgAhjDa1Hhcrp7XcWLKep1JwkemrqeqW6VB4PZMWLbtwE",
  "key15": "xMqh8Fart4Mv89qdUtVPWd75pNu13hJQZLANuQ8j2hiVZ1rUya5UvNdFfb2FSH5x5kSxvY8xWkncFhPWiNzgMYF",
  "key16": "2xYDuNi2LFTMtPaViHP56e2yk753HBiQpHcvV4QLFiWbYseMidNErF4aivLfn1GtsdW9A2Y8fJZGXszca4W6ux2G",
  "key17": "2hHQ5ucDw6cXRjtH38iascKve8tLBHKHtaFmBp4qzDD8batp82VSrh2cvpZ5Qtd7c5zUsbzrcuG5DGXka8peM4o6",
  "key18": "4vpkMLEtjCpKrNjU1unAPJwBj6ziWx52UmFWAU4n7sU1pQQwKMJa7qMB6bFq8qbfxtz9cxQNjUEi8bpu1aPvn7dh",
  "key19": "61gNqSRZEzXUhV38ZfZbubyvNuU3mHNfPeTfa7htrVi55Kpu2KFP4bni2xZm83wW5A5bzYST97gU6wbSQKmnWVzR",
  "key20": "rGavkDCNz421ZCB332XVBE7CzHUz5Ki4XtuSD8vVKzuwawaSmmcgTwCcADGXqdUBtYJM9aj8gvF6pNiFdxqVjux",
  "key21": "29TvK7HyVr1akHgZiKkhV9avsE8jau6Er7iHAkd8pAatYYExuNuAr17hpSh1HWmMWFtxS6W32cqbVYEDiRtDr4mQ",
  "key22": "38sJRGeLPJbCau58gqKTjsvHTiH9grGmGBBCaU5MmHHyBoGg7igvZry7xvw8avTffZbzJ3xzsrrBxqnapNBqtGyt",
  "key23": "4aoAmy1qpunP2XEgRG5nurxB9qHpRbzrRJ3TZeZAPPp4swPKmiHX95tPzVtemRuLQ9tRc4joBx4AxMofaMo6Xjhg",
  "key24": "qzdBPXpV9teYAw2rHaJYimrKdcN9nePGGmPcjZT99TsNK6iMaMaToMcf8RaoZWZNWgY1TEaXo75ypV49R1n4nzL"
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
