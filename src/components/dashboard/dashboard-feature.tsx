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
    "4rdFrLQu1g6UrZ2sattQACi6rxHoMdSTHgN6cnTJ5yNJTYDFVhZQCcsTN7amRAH67iiWfUDEc9G6G1BDpysKV57"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2eNXQ9uq32zs5bAkDkChXR6J7MTY7EKbux4otnKwn7chnmUmo52vRFP8CaYxW8f7k6KpwTQpaCCeU2YVvomFaRVB",
  "key1": "5dijUn5DLVNaPDQyeUzNqHhyE48TcwkyCWPNCi69cUBio8wK9BuRnSmi2MTAwkp47TP2AQ5rad951LRxRz6ysuGZ",
  "key2": "an18XoUy5zVKb63tEzorcX93MiytULumP3Yd48zx2JHBFZSqQSPE7p3LmBwGMzGmyeUaMKx5UrhEvU4nxvHipCd",
  "key3": "eQp5QCWJUCb44sN8Veh1YjiczA9ijuUNHpBQBra5t14aXr6HgRvTZgKzToSnTU5vdk9iLG72MUebBR5PMcDysgJ",
  "key4": "3QTrH8AWZELF1iB7VbdnQvEaaNScRiMMF94ogfqei3a55XywpNXNbZmTVgfy8TYXH8gJpRNDURqhssYN3fHetk1c",
  "key5": "pGx3izShMzxnzd4WTtVtDg1TeJ27xozyk9S3TnM8FpvWrw4DJEM8HHq9bsUmP1EN7Rem1Hfs3ahq9JpQetp9CUy",
  "key6": "59EM9EhkyH16WAcoJ258r2p3uDa4xcj8556SYAaemzUr7XjuMaZ4HVZvB5HN9i99AfbsYREuT1x6jBYiTuF7L7Qq",
  "key7": "4M2eRtAWz5Y4dd1WupFhVSTBbt2SkfaXLvmCa5APtYpi4BiViavasz6KebtZGm1NMskvLKNikbrtZVt2ogxAwvWv",
  "key8": "5JTxKwDxVdJzS3154APuax6NG79cnfGRi4nFePUQS5pFoQYYEvFTyCBAJWFUZqpEZrar7mHi9raM2rmnj84LEV1S",
  "key9": "wzyfSLwTHv8ZcUyQNtzr7q9zt24FgmQkWXht1oJu7kLVUCJzE9WZ1S2QD2YnnFjnpc5Tso5ohBUqo1E5M197DLZ",
  "key10": "VwxiBVeyzuitcYBbY1RsMyhH5aABMQ1QQgSfDVP3kk5gUxW9e4RqK6MTtnZcHo4HXH5afNNkJhmqYzWkEQbUWDj",
  "key11": "3gYLaqBHYTqWbrSq5JGmy2st5sdH8L4YnkANzigegjSbuBrhmUtydLaCJmKuinva2pnRsGmwujwcAZrC3zvpBH4a",
  "key12": "5PY8gdmzDHF1yFFeHiowwRjNecmCinZPkaU8BS9URs6dVcg8tAxE2by2645Qj18pYhYLTXmWzERcMc3FxNaPXGuv",
  "key13": "3aMYneY6rAsUNtf47Z1uQv8BLqqeRFB6MSvhKo1CkhQXwCnNR1YFMZVdjvHpPNFGNkvUMpTVbt8JnNEMqqt4EvEz",
  "key14": "2eEX2GNNkByenxruMKpFAxkqQ1TpgtDUS8voHygFmwmqJHXXEvpJaycWA5Ur3C2ZXtwJnukcTgjEQBVUVxxA8VB",
  "key15": "2h2XjYWBgEdWC7g6HiJUzRdLqLQH9Wt3ebZPpPcR8nFDFe1U1RnN96iqaPFaufkktRPcZUqF6uUXMVFJi1w4kshu",
  "key16": "4KmZRgS6ZPvvu71JjfiKMmSqhZzoHWJmCnRNDC8Ck8xhQjLCULGoTLxcEBZwk156eU5A7fAmHCrFyq3pg6tvtL9C",
  "key17": "2Mu7Ej3iCbjG36QiyTH81knNXjTzzoASbsGvWZkACz5HYhRMtUJ4v7CN4CrFXjHmhu9w1VhWaasGdsiWoJb6MHb2",
  "key18": "5QqQQdrkL9rGquBM3EMnZCNu4fcfuaKfnoTsfYGi24VTwL2KxQjfpMkvko7PYPYexqvphvjgFsjDwM3BXrxJ1i8W",
  "key19": "6oyZJ3jUe8JWSiT3VrUcGG9kT5QmeuotHKKFxpd1gxUPjFxesBfGLH1oBWBJG6JknosdJYRF6cGJRvoQuLF9BDp",
  "key20": "2aU8iQbcsNZfAbgpGa3L7YDzKBKKFpFb6GaRWcPSs9X8Q5bDTZ2HyGhNCLuP9VXgXMFtJaDJJnKvA5ACCBNiGZyz",
  "key21": "3P3k2BpoaU7UMYDfgPv8sesTR23WPymxovni56wWu2ei6XZtPGvccDs5vPFEscaJfwQfsqvjLNKrJUCxN8aSsL21",
  "key22": "3HTFvZ5nqjXBs8hMMkYNjmQn9ymMAGuRWzPLxhxRgSPrQmwX6Gq98KQk8DrgbGFEPRzKXXw9pAiMGXaqYbQuj2P1",
  "key23": "5ksdkX178EKYyeDG8fuevz3WyeAbZHJHWHYJw3qUWk9QttWsDLvRjkptezuCbxTfRnYxC2H5UKcrfe6rymwjqb2j",
  "key24": "4pfLqkzCFZTJwG15ZU3dvt51pT18ChFb4DWeJKngYFnmovkzns8Ymq6AhkssKFNRD4S9CB1YwbpnyFWqo2M5Drfg",
  "key25": "TefyY4r2BvtKA5hGbwmWBPLR6ufa2pZbCG7JKerEcE4gp77vTMwU7ueV91K3S8xCriYVFkMTJfBZGUgiLCDpbxK",
  "key26": "5A95yo3aH9vpvA2iQy73Jy9KhY2KScnWu5kbDpx3AgdVdbFjveLP7Zp6WyedU7t1ErWFf2KL66LEUTWnkTRtd1w7",
  "key27": "5MjVtc62V2tCAsFxS7ZeusxHsU1PFXsMg4Tou7RL9TsZ21D5qHaM3nk7LR55GHWDCgKBxwiBVnrQcidnnW5nKkSV",
  "key28": "2dLvpwBu6QrYh9xaxGxUsKRMABXNZ7iugpkzSgyK2vS1fDCynwFCQgTuZCCxK9yyVEhYqB8jqAD5FaWWkFT6pKRq"
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
