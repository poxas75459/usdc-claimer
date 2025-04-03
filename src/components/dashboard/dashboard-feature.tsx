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
    "WWinku6wVAvDzVvD6BnezrKndVkMYE536N8vXzwBee4DBDAS8JdM87m8YSUNhKcme8Y6c4YyMTfF3u9xD2yJAXE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2q1xyAnsGiM2jQwCd55fXVq5Hs8t5vQzddRNiMCWeMRScrTxB6KsKHp3QRVkQk3i1QfYY94rW5VcUUXn4mLU8t6V",
  "key1": "5R8xwN5JYTFnPvfB35fkSSswMEpVCsCt2EAMFuDR8RfWKdjtygZt2BhLfsBPVnEjPn8bTBCnivEAqushsNRxTAiZ",
  "key2": "4qf3bCVLKRcyG3t6mvkq9ssHBkVktyuX5qtFTgmaMqxabgdx7QNHSfmSuxWZmqbR4SeTKBZMJBQmdpc9E6Gn5NnM",
  "key3": "2qMHW33U1xo6CRvQaEHsTkqCHF4z9q8q9gBcEKdkw64pGFqrH1JNh9RmSiDpovYvVeAmTMPeDsjjVjft6zLPqQTb",
  "key4": "ty3oT7kjkLRMiP7THLXSosXv2D8syKK8jmfRfeE4sYeAkYG2BPQgfL8ZpNiWwW9mkAG7CmA79g5yKEbXaqf1vbU",
  "key5": "2hH5cZmf74Dc2QtfXzZxyeMdATK6bkVReopvzv7Hg6w4bybTrSCSZz8koRX51oHW1xPcnkhwYMaa1Pcn8dsXXd3B",
  "key6": "2kzzhEExvpNomvPUefgTsCHHdvyN6THKeBN6TGoCCJgm7si25PVmmVZmmg3X3BzhA9iLezrEgkkyhX7QiWdEGYYb",
  "key7": "5A4iq2ZgmpcXz6SceVVHt8mmyotZNDJBxdVGns541A19drzW3c7qMeT5dx74qHADh3CdHDwM168WCJFcRzFCvw7t",
  "key8": "2ciYaL9kkMMYwCoU2AwVEcJxnBLEhk5ZKRTuqNifdJ6AWpQTBWYVGVx1eP9Yd4S2FiKfHWsC6j8nZ4t2u8UDbbwE",
  "key9": "2s75U8kqUGkiMLxecFmeHw8J96XY1x8G1ap3QaTV3BKHMzSV1QdVZsg8HiLEtoBoDGPTBgUcYU94z9SGHFSTqa3D",
  "key10": "3WVzPWY3G7TSNpUWAu7sg47MajD18L4VQsqPD6XnC3QiXEYUxKRvvzc2f14ZuEHAZoPfr4hEpbXeuHdwgJr7GGJy",
  "key11": "2nfy1ff3NivJMNXo9YF5uEURsyms6i8n1nT8mNUJRbwdrNysx9js3cAyrbjBDtDd5mY2DoW79TUT6J9Z3TVaRjEU",
  "key12": "3nxEAU9SXwuofCmGbnp9kgAwxkTV4aagWWwGa7xqFxfW2dDtM8rjmxDZ1KoTUoy2yAyxQJwz8Qo3tqxeUauUddnL",
  "key13": "2kbZpyj5phsQkUqC9CZ6hfg63rApCU1Y8u31XikQWx3PAviYG85XpjdD34EK5W4JtffsJz2ZMAXJcac1cxn3bDDS",
  "key14": "4cLgDtCFfbbLeZ5AzosgpvLW8wCYrbywyiMfArZ5wQx2NqMEL6BPEeqTZaTuzxLysYzZe1X4FizayCuub81NoUHi",
  "key15": "5747AVLYLgLuiVyW18ruMVdFgUboEFHKJRsrTy5KTu4SJsuCVzQphXmL8ZHfFmvJdCSHjhxM9dUpbUyDCDZYybXJ",
  "key16": "2rmnrhRJrLM4WW2ZQMqS7uYAUmBY81dr55sNhrib9MrK6d3jAV76mXdKSBdggCobVwh41TqCEHRQuaQqJHxUT8WS",
  "key17": "5N8dVBbV6U4jn8h9RVzGLMQmDq9RA6P9ynwxhnZHsXsabsPEPzsU4aJYDznv9x7HAkiPHLyaDc9mdQuETfhR5U87",
  "key18": "4P2dtnTqkG61JMorqtZ1FfGs4owFhEKVQu1RzYsfD3nCYHibJubfnEpMoi9RDFDNhiMcQzhT2KL2UmkRHAD3Ky8M",
  "key19": "5Bdr3asDKcVL3doxkA9jQqiiG8njJVJFWMFoqb6cTahydCVhHuRumprQpB5oM8Sre7MxRjfGjxt6UQtABuTrUw7A",
  "key20": "36nQD4TtjaJUArSYmVyCUcgtT58BBs4ptTVEhb733iG4tgg3tXcJ1mSwsDqmMTNt5gP9NRms5zwTR37FzFMrsuSh",
  "key21": "pQrvSGQumRwWEdsD1twGWxdjfgpPNkMpAPjnNWeECZWs76zjQKwyJKG68pLm3FwjBcHz5eR6LPfMDnWk8Jgz8vS",
  "key22": "3vhbb1cWbJsvF3iQx2heTsAjRsVQ4xNrQFp4gYi3nAWZXxeAhhn3VLQL4QQyVd9s1AXf3w5ekS96FUQbiNnGwPYX",
  "key23": "5AZaJFd6K1nUji2hJ8obVcKs7FJaGbW2fECjXaNoJSwPCn4gd3Z39pRXKrTrswGCFtuHUnt1TT85uZoJBS2N4MnH",
  "key24": "29SB2AosfcLvx9FQcm2uU3bLLaKoBy8WGrj2jvYq73834zVCPbzpSJ77pb2sTGERtz1DHNczqSu9ToWBbaYREgaa",
  "key25": "V8uMPcwTdJ1QRsf6NhMf9UHgfr8bVB1McGDQBZ3s4oDC1ALCQveqCmmLmrcvXZe1xGSUfZQy8uZjvSUraaTBN8Q",
  "key26": "2ofE8edtwo7Kh33Fu4cJQgjro1WN2tiD6xwL8YmiDgncxqCe1qsD2cD6SyN74VFzhkbfeR3h6qStDN8rGHpY9V9g",
  "key27": "5HSjohVMhKZkPBqbuvea9R3DKABRUrK2ziBEPPB18TDgde9rF95kpyfpnLafBg7ouU9uNQpAumoUNm7YwZEfaCMi",
  "key28": "5vyqKFq1f5aM2wNJEdAtQ4weNHMc5p9g6MZqfKtLyYXp7NfNuexV12n3NGassxYsuwvRoa12HDAyCjZEqK6ob5CL",
  "key29": "3rV5LFTugonfTBhD4h4BqiCYoKGhfCpoMkK2Vr6hc5fL43zZRP9bPQ9HeCxzu7AzXpYfqRcsNVP4GLpkQKEUWVcW",
  "key30": "2xUfdGBFSMJKx8iSyd9iMnH7j877Xnz56pXbG4h1teGJS7ddhzTc4UPG2n3ya1sXTzcNF3t4ax7wxfmGSdd3tjU5",
  "key31": "3v1BTw1YsceawQBa3CjMe15QWreqTQhTXPBU1rAcL64P2Abx1rcaekFYJ7WT9g4LqbDRhuQDMuMMu8PsQZXoaPnN",
  "key32": "27ymA1nxvfnWZMmj7Z4xi1ZMt19SQToAZtxDqiMYwcFDAKvgpWfhsTrwXYDcJqiN9yyJWGWQmt66CrdWafMf1ngC",
  "key33": "2o1vHXJXDaouMtkeXgaaxUXikk8pXXPhUCsQ4hH1NXYwnnwWTzdbEugmsXGK2cuY86X5nHETZpAojMnZHVXBkhsR",
  "key34": "3xnVWrf9khadBkk4MdAJCtmcikXurrKX6SDfMUhJzG28FyB8viDt2YSSMAeHtXSHANKcV6nCDsJkpm9ReiwBFYES"
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
