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
    "33xWV8L2sJeRFC5qKkt1ibA5byNzRvbNrR6Uhgug4sssdv3ZmBsfKETMdzTANwMKPJYTKZvyRwYgfm1BQGA6SacR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "w2A2ZMmx8xCPCNNBbAg9bQe8x3chHF8zrro4W7hh4X7e83cHGDTSfZyS4MZoxt44P7cJYX2pKC4YVeXBvyW61Ya",
  "key1": "5ThYDb3VvgqHQupZwK9234VdgZbonJckR48TZnBQQK2kyv8M6uHLHzzdrWRerCte9eMy5h5GgSmF5UXqiW4w3Wum",
  "key2": "YcvhYPHzRkH9B2fCHxtsmqAD5SDi1BQDMc8RKS2H1vENKr7oQSWLx9quLkUErNso3cwZAtngLfdJ2RKqn9C8KUK",
  "key3": "5CDa2smNc7zEoSDjcmt9Dt24DQs24WAY1217ucJ12hNPwwiCf9PzTgEqF2VpbK4vgjt2tTMFxuNCbp7KgWdfKQ3T",
  "key4": "3QL4N33FrHPY92J2dQArCEFbkY1s2Y5ScAZkay4jFVz8bRrDVfkPjkCPH9DKSqczn2kY4YHnzgfRSGri9Wd9ESe1",
  "key5": "66PrDzMxPedU1316bZhFcx2drxA5S4mU1KX5ZPXtSzCJVABsUzVNwA5FgyThpmHE7GmAsdmP5v6pNGpdNaSPY4xL",
  "key6": "2UegEVzVfJA2ckMbFcmPL857XarDy4HpTPhPKXX41Y3AXp4tT9cznvJQuJCTo4YK3xSaTMR3t2nkaDjuo7MJtaHY",
  "key7": "2JuQtd8fhZyPws1AyudXz4tbdqfPqvxGzYYvz99PfKH1r4wbch1BxFD62ZJZKW4mQgDKM5dVki6h3ncVLMJHhxJZ",
  "key8": "29nMVeK4hgz84tjzds3jewFFpfmdfgoxb38mcoHGUzZJKqo51YcsT6yVo5wtetMKD8RQU17jfp6JtPXvye6kgHYX",
  "key9": "3H2EMNgGeTVPPpzbKywSFKYB5mftNqZSpAa8zMTgb1Z5A4PRpcJw4m3UUs1RXTN5s5fSNMXbXPrzXFJMvkeA7KPr",
  "key10": "48YYnUo4UQPVKfhppKgQmrs1H5wLeY8A8hRgRxJi22DyLKpgqG9TSFJyuaV1QewVtYmAjhWqKxsMUsZEBxUHQJyx",
  "key11": "67T28LeYjTWdAJDtwhHzu5QCXK9voehoZTmgHTdnHpLCvxNtsinRWpZQRyaZybVMvNMHes3xTgaVMGy2fvdKdeBg",
  "key12": "3BNkogdx4tKbzR6aQpydbnE4YteVfYXmmTAGNFUoL5yZ3BGRVggt9mqanF13aqZAbjgmaaK8FjN8JQdpF7jZq6QG",
  "key13": "5VzeqUM5wVdsMqfe43Bminm49aSpkd5aZAkvGPfrZtLgNK6HaypeRBAfMLr5e98fqW4otk6igJHAcDnJpLUpXyWb",
  "key14": "2K63PVwHhJfRYtKjgMwVvqFhS9ebpJLukJAnDqC7Q9ThdZEPQXLGkmXqGp4DngMMsvZz8AiEfEwZ7yaiK2kmye7R",
  "key15": "3kgrgMtD1PyrsxsJNyj5WFRrmLU91kgtrk2CBdPGehNmbK7tWKmcjYPuxShi1TVeKL38YJFgY8oSubx2oxd5xDC5",
  "key16": "4pvYup2tb4CSFaQuf1Fv8mdFvjdfTmnXXWaYFFMLzHUqYZDTpbgM1rdWPdQ6QV9SUGrcxhizuLEgausm9eHrbmCv",
  "key17": "4NkydXSj4myduRdfaq52LHAeLf76GigEz5TEM36EbXQbmyKsqv9UXMWpbjArsbeqbVYt6wjpMX36Ge4mAgTjQXUf",
  "key18": "3YKWfPpxB2jjNXhbdcu6j8UupYfoMr2TqnGiPRts18f7HiXzNUUAzHe89Wcpf1iK5X374KTH4wSJnsvKUaP3t5DY",
  "key19": "3AKG81Dbsn6gYKFoFYXjQWSjQJsRhEqfMnnnC3vBep211cAAEgH3zHAtEThzKuh98heuSK3cu2mEFxVwNniPxX4e",
  "key20": "56SLL4FTtgJem1FH23JTpryS2gqggHCZGJQaT3HZ5cQmFi2sbDENsMP9S5iyB9azwq8da4aqG9DAM3Sqno2zZRbY",
  "key21": "XHjpQEUdFm3TGHQHRACnmoUjkuL8eVELssVxiJVQaEvBuFaaKSs41QHsvmuCfHT4cNzMgxSJWTza13Jrq1edscy",
  "key22": "41cTG5Wm5t8ErapC8nA33ss1xj6gkWa7djMxTnV56R1ZyhZdrnZ58TykMkJdiH71yghBUXBwR56L6RUM5mWT8xPH",
  "key23": "2tL8gcMrArnB8RvjXFJvsh1qbwEQ5pLVbjy2gEeMh3sVgDFgheP9YgnJXitnqb5Z4scfhr26ZqysPjah1N4o9AAJ",
  "key24": "4iGj8Juba5tPmXavmMVgJcCmTL2vL2XkP8cizTG3nVNRJCAgrJmSLVBRvu3uTMcjwgPmVpGZhkJGAJjp4hRjdbh8",
  "key25": "5Hd9EN44ZgX4VeY5H8d2EDUqVqiXWZtkbcRivS5QryeShfGNcksBpBHuoRdWxYRPUbu6KpubqgrrAd1ZgJMLz6aY",
  "key26": "2zY5iJ7gC2DEvD61LfrcrSPQs9govXdR5hYa4csdfyB1HszSNBYKNM3k5JbutaeemYRbouLHTMjqvxkDMLcqfNgV",
  "key27": "48q4FBNY9BTHSKwkC5ibCoiRCez3dtYGBtHC3kmMUX7JjY1hbKGziQrw8haRiS4hYJsXvfT1ZP9rWzxb14oRmcL6",
  "key28": "5Fi5LinHZ2oAuyKtm8tMSsQuVTZZFpktyCB7AfV915Ny5vfCLq5g4zJDnX5QxPYKY1TU93RdgqvxAAvQdjDRANaC",
  "key29": "wwodNmVoSFmHNCJDkUw5svX6CYotXREAx1yXNXLdjbxMJaBFykpKbkWovD9Uenb31eGq8SD7DWTeMEuYCaTRB7A",
  "key30": "5aP9gV8anJb6xV6fXfinCWeTi9oSc7ZkubuzVUWdxTPqBMZijUw9BoAhF8UATeFGRqPfk4wYAS9ot1MoxeUGfzd4"
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
