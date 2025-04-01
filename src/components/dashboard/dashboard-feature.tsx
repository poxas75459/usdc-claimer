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
    "5smtJNyUB33LnehmBie4ZxjZpYgeEUbR1Jk9WyUZyb1Qk1L4ZKpVa8tcCLwBkrWpL5Fbo2c2ZVTBTPcrfnHYpL5R"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4djdT3ttA9hERUhhPNWmCwhyBvtYmAimz2rjgVvjAVNC1iCCgAGfCw9at7Tq8R2nY3LKCtEUodkMxsyTnK8Ttqwu",
  "key1": "5RghsgkRcKmUiYXakwQHkG6ADbQSMN5msZBNXnUeYVBGuSYwHY3VHaocixpG4xvC2W8YuhNY5nzHKFEGaxUJjLGv",
  "key2": "4HRVmPT5ksTD37ryvE57kAkdVP3VEstji22ok5fq4fwe6nYaZG9cszUqCyPD2KTkGFV68dhj1epqgMHv4cPfbd5V",
  "key3": "3Mm6PQzFAnEBenPzzRFD3d8nJ2Er2fDAZyQQE4jVPHhoe3kCyU4gbdM3Tnyz49va2rULptBNCDXc7zwDJtAYXf6m",
  "key4": "hSgAsr3KTLFmDwe6NiKTRJLnbEECub9wwviQcddzwx4HEFTsdtvUzCpSWmChvcaXeZGST6UuR612YFjq4XkTBZP",
  "key5": "5vBHuSBmCUj9kt2JjfmVeQu5K8hyqJ42Q4LLVVumVze4Py1c2TbHzmU1hqhTAV4Z9vtDkLjpnvq36SG51HpE2uaG",
  "key6": "3RSBvmGjfaZaCtpPhAaWhLrW26hCJijHnYrNSmdW3DMnVhsVczVmfJyF2GBdpmXnVNPo1eQ7jMDJiiPDek9URPXa",
  "key7": "7HkjPSWpQr7h8mLKw7N2RE8ZKCmbMcSp7VrDzgtDypHyrT1A9afXmkhkYptBXGkNizehXrCFEy7z3f7a5Ub8Apv",
  "key8": "3dxnyYmSxjTkoo1wYmizLMG8sN7rxjsV65GToSyBZYKvXEu2LhSEacg6KkU1gjE4ofkVGcYsFLPQnTCieBNrVhid",
  "key9": "3WYfqj5aDcGGAHrbtY2aDdAXKY6tMnQWYaUWspgDc39kBNJQEFEmPMuM4sW7eJgbPAmg7njbV6CVCwA52XitRzGc",
  "key10": "3f4WBAcD8ierJWkH5gVzZhtsEBSMVA9MZ6kTXosZjuJJitonL3hohhTELWhieXEhjuskWdR3DoZb3dqeQS1XqXc",
  "key11": "1YvMgPuebMMsujZD8vtqGKS9jwLpcVMv4rwB73MXt1zECSCWW7xUtkrShTxbHuW3hUdtXfHBXDsTMzqUtwQJWqa",
  "key12": "4ee2MihxfqJMDDbTDwFEBgU1av35M7kJWpLPnLAFqYESWKQ8Gn5NV6W6zB6WCxCKY7dUBm93vSTVPCpH1LySBhZV",
  "key13": "2XXHeMCbosmBR7TJ9HDfvc6hK2SWWubAY7UBr6kfhhUyMgAtXXwsQK4154TLmL2AVgeATKE9EqFzKWPJHZPvnApv",
  "key14": "58QvFfiA4dyhWjafXTE34k6dsXutZ7rac1Csp5XMJXazQ3uVntDAorbycaQuLxYju3Qtv2hNHLsReB6BdgA6kPGN",
  "key15": "417WKyeVope7befCFsnPWhEdTWZHNsJ4mVu1zTASxveWgKZreGDTQ9PoYrjye3q1sVekci3249eYrkxcAdJ8FA3i",
  "key16": "47sNcqiJ68aMHbhczBgUr9cGf3twBHfs8EA6DWmpsz4dcRxTohXXbFGkWZCg3gTuprVh1g2YsJUkS6EEXNaVTS6Z",
  "key17": "2MWRaN2WapnW8Ypam5EqhfUg7PqLa8hSboK4HTUz1HeE2HfH92RmBoTapZfYcsGboXJpYrS8YHoxtNjSiWNJ5BQu",
  "key18": "5aEA84Yp2T2k8oRVcXaDdH4KnQG6HkMH9LwSFVAoqMSmpA4rkzzJqFDeYnabvocMMZH8tZHNVGz9tYH25tN5GsGC",
  "key19": "5HQejpGmossEMTW2mdfDYJ3gJZ8517AmNszTEmu77edpNvVmnn3i3z85iWp8nMcRHVfjchkDyHD4fjZghgWu9vK7",
  "key20": "4matnRHyDKoeZASdEzsKJDwLEGk4QeqAcp1jAoLdG6MfWS6GVG1iDidSvo6m6FUH8GAHK7Mn9azwxMUuuwEyFFqc",
  "key21": "3LuS37xcxmYwh2nw7jv2f2PNUcoHFPB2kg3AXMSTcPQnRz7EQW7EDWxWzF8zEHQTyTwgEtdFNvWW9RnGJr55HJuX",
  "key22": "2bhSFHD2QKhnoxksQBQtPBTKCt65nEdnr29iF4pE5FNY3GKmWHXpUCGMKXLsYExABBEdqkww3DhPGiPRkBBsiLNC",
  "key23": "JmdZ8wkmE1bzFpNZ2i3AjGMzDUZY6gGg9GfSQv1G5zxKDx7FbrfKsUYshLFbDzznEFxUKFTdbxak8QBqZiAPXo8",
  "key24": "2oMpXAqXjeaKukX1tccuKJNjU5aRtgVkSBNwdAAafLjGrFkeVkVyAuz1j5v8jL17yc5pC159G2aASz62GocgkgCs",
  "key25": "3r9T9W5LREZMCycciijMfNBiGvhM6yMWTfY9friGz1SUmKztnrWKLCiiHaA8FucP2PFJ6QeQYjwCxJjyTbaFeYqD",
  "key26": "2PgScJfaLLXMWhktTDJSBiM1fYShk1cCiid5inQaLrnqQ5S5r1DvWS2eiDqFXbS5aDpjipGqB4SPsQbJa7jWGxQD",
  "key27": "3EqRPdvQgHoW58wexKqTNv48F6VY7t6ZJF1U1dwRqr7K5rvnJvRLrAvk5dipNuSZmUUx4Tchuiuk6sZrx2JuqL7a",
  "key28": "4apQAdR8rW2RtDyyFjRQdARCL34AzJtJY8TW1tE7fon91Qwbr2rstR2PFLPgitnAk1gHK9nWqZacPSHVeKJN1df2",
  "key29": "5ZbyvT4tddQcLBLku1BfuaTUomWFzEnMBKS1jHLLWRuZtifGdpM9soCU3aBCidQfJpdRVty8ymxARyf4buVoYmHu",
  "key30": "2QJ7dMqokoFqPa9aL6zvVBsBgRFxtZshkbUY45tv7F2HmCQYPDVYVddvZiQvyyxJsuWyVJywhGPj9tmJdvYtSBAu",
  "key31": "61D6WVQVZHSEcQG2ZmTaHH3ACmhAJDwS1bJ3exdZTSvTDt7eNvQZbWAdfmRJVbLhPCJYFhLM9JxY5hzCaqtacWAd",
  "key32": "3grBHcWzsnVsZwirXJggf6HDrBgwxrvRWkwAV3SUjss7FCZ39BLWK48AtbAY9RjjNTD9Yhg49uCbKpEF96d6sV5S",
  "key33": "44emKxEm2tivDEYyxSL2SJobcUNzKJhoV9kHW2C9eAB1CVMM3mZvBUdhAJNr9ZUgFgkFUDzSHcUQEeWow81cnPHb",
  "key34": "ma5JHGvT2Wyij1zQRdtExaeUjRKPbMpFuMGiynrUf4gn9SBeBsWKfJ6vRRBcK1KMdo7ZrJdayipyyreqkEK7R84",
  "key35": "56KNVwZsMVD69VL95uHrSpkqjbu7XyzKR5F27kjUd4HpAFN5mVxG4oVqahxQ1g9m5BpFM9ePCj5cXYbn18aYmnx8",
  "key36": "3zPqipC9iCGghuDT19XfVeratEw6WvgYxS82LMV2CJ3hQRWCqjNtqvcxN2R2HTmTwpiDqLCwV2fNu5SEkREQsDEa",
  "key37": "5isi9H9YC7CLWabLU1okAvqFwrmh9TjYEHAsDbE8c1fQfHupS79pBGbMq1Z9vRXWsRAUFaxECsuoU3EWRnxNuGqx",
  "key38": "35YqYvhmBd2eDZXdRgfj1WBFrsZNvTL6q7GkeaXF77c8CD2B5f8WtA5n22uJSvGvriEnyGDagtCM3eHAYsDY89x5",
  "key39": "3WRHY7fAqgTgsKwQFiffriEyFQ3i6aUGq3fjv3c9yWAyVPbK39CN1Yn7agGCv6D8PrD8vYfFmfrXaSRiLkJ3tj3t",
  "key40": "2SxGtBiDepA1orEk3MbTvkp28e5PGiYPAF6Gbho93kEmTSGGEZ4gmM2y8j7NojS23jmaQGRh5sYPF1pvTtFf7teR"
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
