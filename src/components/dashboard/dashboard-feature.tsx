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
    "36eQgXjWJapkScYTAP6cydnYhRf9U88mPo1WhFDAAaF5XDcJTWzY152rh9UgctBCtvxWxDohsaSnBH36tSxe2ujy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2XQLX2WgpHy2GWMxH2EcJZoCr5UqFMUrcyhSGGUhPntLHjb64Xg9ocBkL6sfZk3Rh5NS6Vd9yYSBoRsST613J6Ct",
  "key1": "vHcAjGSjnJNbNJEEAbwpkKiB2nZ6epPi2Rti16beEteuvjoV73v4qzYcC4X43SihAkxh3UXH2zenvMcoHmDVs7S",
  "key2": "3YZzsfEPGPypLg3gqBbciZwRywXEpyaSXgRBTJ2fJsKTmjJocusxHx99TDexGL5m9qW22fbMBZeWkyvNE5oMRmbw",
  "key3": "3WYDstyLYFsRUnNXoJPHYgrPyT8GerVtCnzdRydDadvZ64N4EjXg4hpJRuu1W8abMm4bKsk4A5bvTVcg7XvHhKNm",
  "key4": "ps4ePXzhNfS6MVH3y18sDpRvuS8xFuZVzp374EQU2gPrWys3GsEoX45KnG5KtNERPcY9Vq7bZsthJ4KDyY1yjAT",
  "key5": "2FsM6Fe7MTsqUwfPAdhTrdW6LNyB9ECxy8NqQasJCemXNEgij2WPxqQsjy6x9QEbbBNaZHrVWUyUSoheke6dnMjU",
  "key6": "3z7DgSQNSsn2BhRkMVAqFRL82VK2MRXQ5doErNjxZmKrgeLAq2Uu8Cpb6SJuYj12eznwbacdNDkpBbrBi2xok6aQ",
  "key7": "3KuwMKUg2E4N9hvmZVCwEJnzarJYCNYNz3fnxUdmhh9G2vEABxkymfLsPfk67b6ypkmTb39cveuhdvwvjhW5njcn",
  "key8": "3s3Lk4YEdSkTCqS4S2ckQ2jGicERVGUwontjNx2X4p4L2GhJXoDjeQjSeMnKVmFXWnopr3AR8M7AzxK8peiauQaG",
  "key9": "2ssJJ1STqE9z3kpaPpGLMVa3u9vH87pdgsckS7nCv8ucjc3Vfq5bLYPHta1EuxzFsvAsAkN51C62fjRYqWW9Kr4",
  "key10": "3FhrUTXDhBfZu3VpWYKMRpDVM9dDiuqYHVq3p9tJHUTsyFTGEtntAoe7JoeukiCn9muhzZFg7BDvMrEzzNVKAPt2",
  "key11": "VThtjGF1MfvTMVTfAGyMSgPzDKvJSzzqCpb435VfWvcW2cj9HFqeoMEzEjEfoUt3jP5xoUd5x1ybJFqqpooTicm",
  "key12": "5PqdbiY8QHsPtaKo2ApSraLboQ7eE1z4i8DJiNmhnVYrtskGziPDkxsAmr8AWwzrLQijdYux6v8G6LR5brv5kqmJ",
  "key13": "22LE4zBwvY3WdzP6hm1jez3C4eKUi4LzhgaRUnBi8Te1SetBMoTtAdKTwdp1mGx3Md1d31UfwTJztqx1SZdj7a6x",
  "key14": "41RABmteY64sqoop8XpGYWEoH43nRMiqurZBF3XmRZTVXQscxJLnTa1QMeoY3oszBaMXFj3C9ay9d4FEiAAUa6w1",
  "key15": "3CaPr8ukPtwzkW7ys2Z7jQg6V2vHFLbPM22FmS7N2b8PrXsM8gVnZgsppfJu8roqbjx1x2s25rHqTkuiqokhZL7w",
  "key16": "pSYDoQ2BJPzqZZACkm1yrdB1XpqpXZ2rLa42a4mJx94s8botcXx2Vr38ajRbbKqhohGYM79DQrup47cgcdLTAvG",
  "key17": "eN9i5tpdeqdtiyjvc4jp76wPFS5eeJcwVupKHAJc7xsXLbL16i9hjTue3KxBdWTgAYN5pbhuPc7QKYbkKc3jMBQ",
  "key18": "2hSD9KnhCQ98nAGUDudEu7xNg2SGrPo8t4rYwLcx3fR48YhA44N89xCgBG8mTMpKGFNRjELJA5FVnZpZthmRc716",
  "key19": "2n6HFuMYJLZrFnSRBXBL9A26H6PWkAypevS4tgoSPrXoEWU1ha9UbAKmi4MVFKKA2LbAvxPDvNv2cMTN34GKCYZ4",
  "key20": "4ShLneZBCBshvxrZUAg5C8vNiVujjexTTQeS9cK6QXJr2KMAizeQwbuvHQZanZ8KZZDQtcfLCq9SL5d3stxFvWsM",
  "key21": "3yaKPcCQvCpDzDhhPT6Ggqc355nFoe9MF4415w9Z3QnqbEJDGKaAg851B4dG6eYmyLLSzEAbUBRFXkajpqN9qu7",
  "key22": "3G753gcBA1rtUn5UVuX2rsGGCS2VxucxRYR5bPBRBnvEaTtTqKxz5Wp8KWjXPsXTRf6GcBdJQu56vNsQz5qQDg4H",
  "key23": "41SBZEPEW5Uq7nJbgujNG6CL3J5EFCmwFsXTknVRCPfT2oZd9rUATeRpfx2v5dVYqShym1NAETYNRCGwdR9S12gM",
  "key24": "tFhnX28xehffTH84NLxa5uWJd2GxGiNUWnN344N13oNZm2aU4rAJkDUBPcNxofkhVqoR3VfpKPrLjGhKERWb43K",
  "key25": "2ysrvmBs8VsuTUhJC7ete7KNKJvGAPiNs14Ad9HQcqoEpLPb66MPaCpb7y6dHNQno6Sbc7YcdVsM84arM6vdBqfV",
  "key26": "58Me2ruBmPRScy1rGfwuPEazVcrmhpvPXGHoYYSaEaqqTy9pUHB7Gmb6n4kwEJ4mYKvyQQepBeXpqiMVqA5WoPoi",
  "key27": "36mCvCHnqeADJA6BZ8WscmbF3nXuvbDay2K7xemzSfB3f8FD67pizuNKWXTHigq6CiWQ53HrcRdFHp2HhZDGw9i8",
  "key28": "5VyZ4PkmHzTbLhWWT7JxLdL6f6hvktTT1yXo2bJZaZH3qM619Xi8xbDN1vm1yCTFW1FBHTsVAxv6E7AsktT5xLPC"
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
