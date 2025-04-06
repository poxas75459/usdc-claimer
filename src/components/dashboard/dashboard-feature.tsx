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
    "wtSJ4TgomiAQrP9xXw8DA7mxWuzQUsFW5JAxRMbEuWCirK2y7jmFHAUrwzG8y8m7xAh34gN9PULZQyH9rK7PU3w"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5JNxbCNmqoeFBPqAhS6YkEwJY53cTS9xB7WXyX8v9wrg5vsoU2Q5oBZtdQuNwiLPAppQtkBxGJFi8SXZTkYcZqZN",
  "key1": "2ApfWFwg1G8pVXyqvpXUPibVd1udVKaXNDDmowYQjBd4nhttyWvKcxD6WpTE31LwRm6VvzD8NzBpqMGuGx97JghZ",
  "key2": "4XSnfT92Lc4CRPtUV2wtDNVEzMJGBqzJP9LnfAWtHxLDYWG1DcwHXJV5UuSj9Wvs4TEZY28ybYRgGBhXcpsRC7iN",
  "key3": "3YzLoozKJQiDQKumEiT3aP1H9ZZ7xwFrgNS4U8YhuphWEJTZMBjLBRVXD8AKjfcw2kMdwiA8PqhpymsWat56sQAR",
  "key4": "4dRppziZsYzFPhN4bdcHtTpY4hUVMaJqksGwPfkKvHifmpQ4uH1KpwKWW1CjY7bHfkmPrrRheVxj2SczZPbKVveM",
  "key5": "4z4azHjn8Kv54fGwATffhCh1Vz917HjFtLmg3JXEdfMPWeyCteEzmgXSerAVbSfMJdhqqLuWxVTgXAD6thGudsYE",
  "key6": "38K7JvjLmCgCQqj2SbNeLmG4doWM4ctwRuLoPnG6dab114eAZEsnZH5Psn9fq92JaW179pV4yMV51MWcfrfHJ13L",
  "key7": "2anF7AvV2BCaqEe6iNMgzDdMLYFje115xdFXWNordCxXvo9Wa1g6PtpUp3Lp5KjP9yefQpTawE55HovQSSfBkY7u",
  "key8": "4DyUVhtpaNsG4fGdQMMzDUGUaSvmGiV1Ui4FxUM5ZAZkfzdPgge5cgWC3Xx3XMGsvPwyzzfKRBfPLrBSRYmcEqWr",
  "key9": "ETD28tYh8U7xZFff6MamThQFo7VEiuZ2VxRSdw3BPa1yyvweATmEfSKF82ZcSQXvmwqiX3s45b19VFdvKAiwRp9",
  "key10": "67DPJZ22Cm6fFsFV5rcTjrL9kNf48iMWbyV8JxbGwhowz9eMWdxiL7yUEy17fQnPTxZQ3wCnanWtgZqhA3cdpZcT",
  "key11": "kwuvL3hLQP1EqZcV1gbto135fcVNKbCigpijpUJQVuEwS4CWZ7kUy13AUzzE934gHYoaMzEGHs3sYJqUz3PUm3H",
  "key12": "4nPrcnr76JEwuWyfEvTPFnKNrggzqR2ZaNSqCKCj8D2obRSaft5XF4fdskqNq2VC4xEWLGapBMqXVMuHcR4dQvR6",
  "key13": "5nHg4XCXDnfzfUFY1rS1naKHgeeobPnVwLAwYgdX4h43uWWkP2mZxUaoRB6NW5v4wERA2MVoPpcLb9Taqp6nXzuT",
  "key14": "2DMW8DGi54zf2RgAiW21w1hTnn1DSXPnxFAvsX1ge6LsTEc49TZHGMNaWc1xiyz6owjctDrnjyiNZi7ryxPZhhiC",
  "key15": "3gKKvB4owigC1AkZ55zb9UXgMiL8BUTTGmw7GEY25b2gjogsvNuf2eQL97vqjVw3iUjbJBNpmC46dDRsuzahty8R",
  "key16": "BUtH2x5WZmPp3Qphe8tjX1v2TvttfQWjp5fczhhorTcL58N19g8PWFFMnqeoPuRRRka7uscSCnvFKZn4v4iukEs",
  "key17": "2rEhdEiUe1agWpdSi3LJCBaE8JpMZwG1fs9Do7iPSaJMCUrZaWnRUC51yPMQY7fazHHmf8rehLckx5rJYF77jEE3",
  "key18": "5jrKywqmMnVmGujcJTY96iQhMqVSKkX4Eqbax8Nsrm21QRzakcTVU9aBXzc9e29z9RGwmNvDyj9vS2juj4svHeoP",
  "key19": "2Zr8UJXTtJ3FqW9VWg6WKuyefWt9t4XD2hDueEY1V3nLzo6JLHGBy3sbUniZ56PtQnacDk6f8MnjRr1VknsQtKnL",
  "key20": "33XqtoiowSzrvdzFRiriAP4FjxmpUW7mPJojsJQ1bTQUT5QSf7UoTrDHmKfWvhaGExMVnZDa97U312tq8gr2igWq",
  "key21": "2VWLLMfCVRPTaFRnUmVs8eDzWFJ8PBPhpqLzv3BVsuYGoF1ox2ariujMajVqdFHVPgaUEM6fX7ejAGwDeya1PmDs",
  "key22": "AzFERUCaEegEZ7hihTDtf3M46ayWC2Fsh5dXoXGdrLNU76dJV6B9PLEVDU3SJXXi4cGVwdNneDWBd9G3AQWxH8X",
  "key23": "4yXBZsUE7Juik4q5dvHtvihoHRZFJekx9covvmXFK7eL87C4TAproAmWwik1GpWhaimroewguyM1HN7a64Mku3FL",
  "key24": "2sWffv6ZhQVV4uiDdMKudbooBRzqXiVggoLcyDxKWEE71dY7XLduhUd3z2oxSCpQxt8zKHvNCa2RAMhrUBA66MR1",
  "key25": "3j9f61jD15L5WdLWJSFkpZaJJLwKDmV9zjs2XPuXE6Usp2xSMaNYZu7QyJTPFiBAyvBtn5mC7by6M2Nx6fg3c7e9",
  "key26": "EDyvfxsQhQh3BZmFg1j2cutkbQVSNWSwK7LAFBLFZq42MKXSktVfym56gMCadTrhfEaJzPxLTWsfTbNeHYNaZFJ",
  "key27": "4RvVSRAhTehaZRP88uY33omtwyEfoemAkeiy1tq8VyETa8pBh5zwy6bcWk21Yexk2V5LBRrra8EW5Extgti33vME",
  "key28": "6DhCwywT6zr1eMaVzCR6SYZ9qRf6P1wNta7bv3dU8b2T8MviUEJtK3LXzb2yX8fjstN1mTdEg9ar32YeR67cigu",
  "key29": "3tTKosPmMkjWCFBxf1QoqqGinyFCQHKsRQ9ExjCJr8CfmFrmej9mELpoNzSUzgrHhp9NKdWkUupVFRd53qsaEJqW"
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
