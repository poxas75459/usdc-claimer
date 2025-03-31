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
    "2frQWFCAbik6TjEWL8P17YKRnwvc5uEBEfcg5VcdyMqTf4rbNRcujJj4WCaG4TbkgZCRhB7rgDszzjykaZKRA1kP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2MazRN3dFbbchGzTkufYvCF1UCAYSzvB1krzbiDCHztkF9Sw5NqVrTBQ93ZLeTQRFh38f4ej2Dat5FmEssaLaEVb",
  "key1": "3dUacsrpYCjDmT9uLwtuQXJoDTsgBt4FsUvVUxXkxQWiaDqCybQpa9mm9frGyjSrz17q34UNsFiq5qcm8HhEvzrb",
  "key2": "5PghzbNkzsgBsGGC1JGwDJFWuSfvFW5saRUCd1n4kys4ND5KdKRPFSPZYagFnLsJZ7QLLaekcTc98GV5ER7k1sQR",
  "key3": "5VraJYY1ggMrq6LTRYk9nQnYjfpF6KQNVWNiZUDN7uGTw57Cj1ZCoJVe2VXzn9X9mBpUyBwY92n8pwGVQbiptwgt",
  "key4": "iAgZoeTp3uUwkGzTjonccTi7PX4MfqVxUScyjg6NEZq6iAbnmA88vF9Ye8ajmP23WSuV7nMx8fXTq1dkFJYRpsv",
  "key5": "42ivYV2xX2feawmaT5Lq8jjmUH8faMU2Rp2i76HugpQQCFhgs1bGjxmw7KiwtxwJu8pJLw3YPQHjCXUfBgvnuZzA",
  "key6": "574cs6BAUMSquRSGzyA5HgDPs9SjAZoy9Jy6bmFV14EmBZdxj7Wp9FgidAoacE4399QPuyYwvQMLqq4GPnD2yPyQ",
  "key7": "hM3x5NuVsFcw1TA73Y3KzHeneAmnEDCf6wLdDV3ppV2jLoLEWmwmcHU4CE29836SY9firXZuHL4VyJNzpKZdf8j",
  "key8": "SzX6Pgp7xvVTLcmFdToDpn5VmBVETV1ppSKs5WfLztiCmuhHtz65VtvNMKjegfaKmAnNfKZRDgRRRBHzYQLH7t2",
  "key9": "53cUxHbvnsdbeZGT5Pprpyw41VW7w7VFqPainMsskXGUaBSBP18VxeQY1sUuPQ9MkbD6VSMYdUChgsSTHh4j2sMP",
  "key10": "2HxYHe68bNUhtXByvf83ts78J6sdpXAdNBE8TNKNpAvjzh2N2EQv6h9GWU4yi5BJFzhEiK9sVyLsZW68Aro9C2a2",
  "key11": "3TWrMPqTcL2A82p4QLbjjnvKn2eKQJ4jzewECM18JsmajJYK5Kkr43GRCjeLbmChb6gpboAPQFLhkVAX1tUQW86w",
  "key12": "318pTiuDCEp7jN1aqd7ZRXRi2UyC2TTPoxShGA2tmufXhEZUQhbjhHcVALRTvwfPh1ARuyCtX55HxwmxJ5CTyAcC",
  "key13": "2Zgh8Foc1svY6xYh7SLcfi3FeHYCjchc3gMNmLNXEwXz6nFG9rMmdF7rwetRV35fwXaSStKrynsWJpahiJ4bpzp2",
  "key14": "4YVtcYcoRuUPSGD25yMtJ1vqzJYDgamY2H4X7vzxrwrG6H5PM9aQq2H9CahaM94rfkU45H5fJxPvcWJVYR7ZbSVt",
  "key15": "3J8KUXt6QSv14d4VY31xyp1xYLBYXdRwPARGmsy9kX4jiZbkLhMqXQQGpBKJFQuEyoTuk2i5kWWtVnMqwDU5iubt",
  "key16": "3DfU3j3Nd5BTZiUFxGYVouB6DzxWShohKesg1f449cF2tGP6wvwZyLEUrQcbLVo9XCMjUqCAPyjpbLDz7ZEbyBwm",
  "key17": "HYhsxq3DFHuEQY5T1hgR6rQUzB7XVDdsbj52QivSJgGDv1cPxJQy2nsY5adDs9AmHGXKT9PsQGGkFhyXGFNFFJv",
  "key18": "2TSFG4yWbgGXnpgpRQ3EtjywxVB2iApnR258hRDjCCJ7mhYMk84HGQF7tYJT3p4t9DG5thLvibSXa6G9CrMP5V9k",
  "key19": "217t4qQSf3tibs6qaP91n7u7P8gXe3JStLM7Af3haa9j9gyH7gTRzpk9mjVTAn1VDSLLA4BtAymMRNm8HSWCs2Cb",
  "key20": "3E1pfpWZzG3uDfn1FA24RU2oThn3GAxDjDDUe8M4VZgor9CrgWtqgCrW5zuPtf6bTxyFW1PDqXcGxY458nJTcxan",
  "key21": "61eH7zYUWy341WGLN3ch5v2kLJz2bJkwRcNBngPuhcGPjXw8x3Dact4PW2CLFGpjPCghqdBEpE7t4YXMMvRSLP2",
  "key22": "5HHWc4E67hL7wW7LqNkXN6dgMUWmPXuomm1M86qNkSC4A1ChCBM78thgbTeyUe2BUkbcURLh9yow8KhXprckALg7",
  "key23": "4aMai4FuaDDeyF3D7t1nn85TeXGCCKYnrVdGMgn71NgDZwZzkxLVCJgXTsi6huV1y48CMyBmxFuwAspHDakQZwf2",
  "key24": "4t2R8kauEii7gftnZYtUPDwFA1dHHxC1yS7DNkccN2Wx3yLVE29JjQVHos3N98RtbJYA4Zo5CCQQo15FzwxLHVek",
  "key25": "2BNNUKKu2SJ5ZUnjL33WzA2LBxiTwgSuVsqgYR5oH6DzNhQ64kZb7EjHgLmZMm9URJpXHbtfVKxhQwQfeeZJ1uwU",
  "key26": "3nAhXkmY2mQZY1Cgaz9VwTV9a9PPjqsyrrAY4k2h2kWHEqUAAPmhFNLVXJWsnSBGcAQitvzRpGAMhbPGXnkUtMY7",
  "key27": "NJ2Lemnrnbv4yfgWaFjU4G1GWKUsFs5AwKXXcjnkyaQLzgHgEAQx5g4xSLGdPwtkCaaUN22XjvVB2QFsg6mPkGS",
  "key28": "4Zmjc84bbXF2RhbAD4tdFt86ttDKJD5aEMAGRFyPKEaJqLdE6QLoc4drTuiv4ZuvkvhqHxYqNoXPfTjinBYsJpom"
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
