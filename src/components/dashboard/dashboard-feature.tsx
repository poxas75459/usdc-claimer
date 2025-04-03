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
    "5ky1625PLHeu6GmnwEkZCkrJhTHwRFvWhxSicjkqaNkPX1AFXd7fh1qpCo18KJSRM84qBtJ4E24SmDZBF7j2dVLn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "dbUjqu4MxbTG7SS5mzEiwXjbbnnF8YJS4UbQhrry6fkhj8pvUvJg1yfbSXz4HH5AkSWctSdw5xDfQM27KNhKut8",
  "key1": "4UBFTLRpBjqW882wJ8Yya9aTbwYUbgLjh9sACdG76TetBA98Z1TQJJLdVfW9Wf5M3mwPra6KjvEWUBa8D2QTzmN7",
  "key2": "2LkqRMUFC4exJJs98r3PwrjLMNabgrKVEjysCFPcSbmLvafvD5eUzLbj4CevKYDCqtBdFTFDetPb5MJjaoKBzX5P",
  "key3": "SSKjiPwyPCeHJ2fkwCja2FVx98GCjhj6NCJMgsMDh5nJRmwrMmfcAZGhNz7PssFwv3nHF5cwnygaxK8d2YPKE8L",
  "key4": "3bXqNFznEv2EtmdeVnqcGE4UxRikto2H2t1wGxPYdNi2u9jphZTa1fZQbGMSErkxYUSNHGycHWTctPutQmsMtX7x",
  "key5": "2nwmCg74bpPqafaDLeJDJjhan8KhWfjaWqU1uNmAuwWkrLmrbnzH1bkBnFhmWeo1YybnbfjDjo9yW7JuPMJP77Gc",
  "key6": "5HHLdgTgT68TBx6ChPno5q9yw8joCQYPBSJynjoeE7joXEeJggRY8xeLjHuFbNnYsdacBy6Auut7nLcDADX69jvo",
  "key7": "GocpRfA7y4Q9yS9GVdwz1VaErCKYv15RYpEgLqhacsm7EQ978zBvWGTLCRhkPVP1tpGprDnCkFrxKNcd8nktyT1",
  "key8": "3bBBvUMUPY92j17mWqnAGmaBWxFzsGt4jh7ziHwt36hLSb3Mo1FrGGpstJcy35CXaotc6aAP7ym6cZV6HQxoSN7r",
  "key9": "2fhzuwSGSHfJnrUzPr9meM96WPD1CvCUXb8cYPhahYhzALsCUxxQM6dtjmicrQb1rRSreQuKMpKZaMMgXWQTTh9s",
  "key10": "4ReguH6dJqW3zphFHFQjgzgaKbatvdfKb1qGyxhkfRJEe3urxFMVXnojmhs3vtyASPd1tia1kJ4eVSg8aKU5Tyx5",
  "key11": "5c633EMNBoZwAKc8QaHwm5hUF3ERHcju9A6jhDiG8H5qB5W89KoGM3aL86Uvqx4wTg5YzrutKmtXEhqD28G55Ty4",
  "key12": "4DzuwZUs36B5EZdfTPp95TvRFvxuxfSxRtm5ietxWNkv9ZUPwCKyFwLH5s5YMhbKNjwLVhVUJYoHg9bhCTu4CkVz",
  "key13": "2Ed27fZdKvkSo1RADxMJWywYDuVxzLLqo1KSc6pBmkjQ8wEZoW2qsgv7rU9SB1YpGcnuNPSCjZHw59aK3miyGbny",
  "key14": "3Pev15AuotGgPFdiA7Tz17osrbfTwqiHj5RbPR3kgisbzv8PTT4QyiCxp2qkiRxWuGjMGeCFkHYvtZMpFApVhXBm",
  "key15": "4R5Wek8PAmmvq8aqfyECRtgm895m9PoTquHc8cB3bSiTCrNnNyUS9v1vTkd2GvceomjjHq2Hq9JCjyc46prD6GgC",
  "key16": "33dwj4GHykzpd5VRvuTqVhfT3r9nzKkhz4gXei3zgCSUN2exPXESywoqeeKgXEDbN9gA4HLA8Ar7oUPg46rqUwrD",
  "key17": "Mg6ad8T6TAXHjAYLj3UgVFZLrLUf1XaJxkqH4pJuE32FGRCbnN4ViZx9aevPk69tpkQ4DQ9eqv4U5UFZrHVt9aE",
  "key18": "jgr7nUtPL9pbGaW9vsCdtmv36MBpRfue2HBgKqgTq93easjdmPbPYn35amz4UUZu5dqsv41fjNHEcK7L62tUAsw",
  "key19": "58RZ76q4zHifAEhr53TcoMAJsJK2YjhCgqduBBPrbxMWySc9PGbLrbUPAZpDoQWiEkRF7hL2zXAwLio5t7SZ61os",
  "key20": "4ecKRqGhTQgoqF6jeCsPbJJXaiWdQfuFFmYX5kMxAVvV5cVyYsxaLQ6wGijukF3NR68JyXHTnWLs9o4mMog21s5L",
  "key21": "4LwdcR6PKpKUxfJksnckRwyx1XgkjcjXSV9FusfdDMcUEBr9sShFdAFDDxAFBUHrgfx26WKafF2gHMhE9ezm92FE",
  "key22": "2mfh4eoqYgrRE9P7dQ1o8fU2ovr5nVzB7rMTwLiTpKn6VD9zWE9u7UyFEokL8ah1qJCdFBLPoPDk9BPu29aLey7a",
  "key23": "51VjHvq21wjVDgNqHyKkExp7LUj9JJLHyVrNDdszbpxH1QqFNE9VEZ4bGh6joBKPAUpnL6FmQbRdQioR3nXuanfc",
  "key24": "4T2jSsWwEzeRqbfigLUh3t29N5ayxP8x37UtkR9TKHPs1wfdkc6i6rsNNrRWYhYSrr6NunmGRuLuqx2K6X2EheWL",
  "key25": "3oevyEFCLXr36hc87gxX7yGDyNkmK8wawwomatTvqjyg9WNoZE5Akyt64M16K2txEs5D314B43zFonjVEAoEaHeF",
  "key26": "2uzbtJaM79qGFRVMyCpY38SonrcJNJikG4FHmvdwapwo2VPW9M9f6Y3wVPFf7LsZvLzezeNGRuqwaXBVcGqyP9Mr",
  "key27": "3Y6z9iyB9UcifUoWYuGkHVbdnEVgZZ34xwYWBGtaFoTYh79WSpAbJDUazKZEd4mZEn5fzDDNN72ad4T4u7vnDXNu",
  "key28": "3swz81psNie8hkmSugV6k4SdQEXtdyABfMdChGMoC3H5gRcF2qB5tVPzdwxp9846eK5QDRjixRnLfStERUvWp7vi",
  "key29": "2Y8368sQLGtVsoYri89kJASwUZjUrmHxEJ3bE1dKicodNhTsfqVbvAKBy7jJyAvnHR5hSaoTqApcfGfP3vh37oVr",
  "key30": "5u3VNeYi9YHuq4RAeapta9SgEakVxKU6X3QGqeTAjKmNn2kYyzEUQCmnWkZ1koo1DMB973uvGdW6WdRqiJTMxcjE",
  "key31": "2VqQBhiGkWHbwtyDfC1Gjsu6p6o7iNThaecZJ5odt7Nt1YZhKBM7mWSfAvJzhKHpC8qTPRdrch2cvFLNSf4mKNw",
  "key32": "NudCGV5UhwWH4qV28FK5s4dPqMgWvmEr3QjpL9LyuQScj861JzjgPUw27mjhPEY5p7puA4HjWnmHyvKbdz7btJW",
  "key33": "42xn6njJk6HYGrpMMBhHXkt3n87DFdPaE4WaHXuuRb2qZx83BUFrkhje7Nm48A6J9E2Hji5ZRJMgLLECP8meXunv",
  "key34": "4pzTMoXnC9p439aFT5TAwE8xCamQYW8F922V9vmpr2FcjLwmyBwCZgBprkveePcCsVVggF6FCpEqDUY3Cm448ZNs"
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
