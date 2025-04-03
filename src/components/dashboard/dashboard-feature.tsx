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
    "4vZePCb5FqcoaUQN6cXSCjzWiiB5N1h79yE8M8Gm4yhosi9DjSSXHnouRGFX5vytfBQwn3bnF3D3JZhFywpPK9r5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52Nmgg2cPHMAjtWdaKQyiBY3LTT7BuvKtTGsxJ5neyNrBYDF9UFbxRxDwYZLEDpxpZy2nYn1CCKsrWh3GEoNSQLq",
  "key1": "3MYABtGF7HEjiU7S8a1NNqeDFVEAWXkLUywDw44fDCVh1tmciSWkBSryRhdTaqJCGDvGjgg7JyN9vc6prVMpCxTw",
  "key2": "URhQP3heqoewS7qLpQHnFagp7cPtb37L8Dkcr4SDciCLbKB8SCLtff7exrRhRQEzzxtJYropbhwJnNHAUY21vGj",
  "key3": "67GZ5Ckts4sfoJqf9jPLi1EzQeVhdyJL6EbNxfxFiqUGFtGLj8DMYq2EJ9R9zwjsoYwuXCYFR8v5BwM7E9CtzUUG",
  "key4": "4NF1rR4Sw18b54VjzmyQAVHVcj4btpXoi7daLFF16R14ijkSwEjvk6A6tEYygjmdHfNHwg4UwCMXDdCz2DGHvmUo",
  "key5": "fgiHqxQLsLZgfP4eK76Ynq34YSZxFf7CoNyZv7gN62NmauwFfvHLPUr8vfgaporX9bcNQx3J4YnKszJ9QFwmPB6",
  "key6": "2kCVtqKuqMSZxme4jGhx2a79d3HpAxgXgTBZezx6fChhU5xex6UVkkwxkxkBqWHPCkuENZGnJXhqxoaHKQbEytWL",
  "key7": "3WKfmbs2B6akHiQ6c86a5Pd2y46zia89GHzov7F3yJv9KrGVqe8PiqsvaPt5PLosxYfXGRqaxu6yK7jRZgEZyA1e",
  "key8": "5PP15M4pzBkA33YAw3kcvE6UN5QN14jgSS2WkfCM9CP7MxAeunzFYTgDBHKeqkUxCk3DgG5rKg6GMbiPQTkGTz64",
  "key9": "3zLtEJC8dwiZT4y1d7LjJDg9nQ8QNDtM4Q2gabCHPycQM9zuoaTqPZ3iBSk8zPczQEaqSLZySqXCkWEmT2XvM8pb",
  "key10": "4L5je4XDQJxtGubEW1JXY2waApSCNqBSGKYJ92Uk6H2G23ZqPq9pMSjyUGR9SCSPPHSBozXVs8EHqP3pRGzgVwXH",
  "key11": "4WbwXC1mHbvv9Aae8F8R67z2XbdqD2mVywX4pGee4EG6X3yPhjQwxXucEdo1DeLmeueh9jxkctTNjbmJaNgvXBJX",
  "key12": "5vSDZbWoaK6ote86XSr1Fg79zE2XLfRxo95qbvK3QXA6rMYwM6AjF3NgZcxKQDM8xvqhZ6XQfr66qFaDiRDmtZfq",
  "key13": "5rEJp1dU9ruGXtZ14W1j94ixsCTm5emRN6DcMMYcdr65ckGjmYDD2Qi2RB1ssv44ERCpRMm3q55Fd6aMXefHRw6s",
  "key14": "3vhvQpeD8A1NtEL3d4tEpeD3exGAhakGqsLC1z8wkC5ZKdWTGSjBVieLPnbMvxu2BsBTPcdq5j2pf6B8ZCijKPNe",
  "key15": "2iaue68Jba9DhBDjMdW3WRp6Pp9S7crqMqpk4jNvE9bGcnR5ZgNMQVGwKjY1fUar3WxJBjWAbBEWt8cFgNLgq4hr",
  "key16": "2s4VkP17SmNpksp9Q952fZqgiGwfkkpUucd9dVW3dvNpmv2iCTtAKce2bPt1ZwWjB9bAnATDnckjnvPZ7GNbngLK",
  "key17": "5Zf5Kih49XszrXBtTPJ8rCRpwViiUWzMJCULLFrtnEqi2oNfmAEwc2RKVHFJv7Rg3L1LmdqHvyHXkZJGurv3iWmZ",
  "key18": "2qVKKsDzySQWYPiGRrB8kvGodVw3csgzsnNi3YjPDSKKpuDZZUHNoHre424Ss2pYFLtnw98bgjtDGHH25qCdzzmW",
  "key19": "3jxdH5CZ6bLUSBsJBNMFgxjpKXCPGArauh8LTDZLaWdtDYTruyN5oMD734HEiaRbLCWJSzVvMC2URYfZA679JPzB",
  "key20": "44xHL29cP5s3ntQf9VM4am3uNqjC7bmbJvymXNuux1TgTg8cKGPpWjbXm3cfB5KYe3C3Fab6qca3T2ek2s3Z3Bgg",
  "key21": "4CHoL6cdhiCmYB9tiCab64gtPYghzNUAQ9RxhNwVraac6Mtbuz9x3LxtEwwnLmUufQBRJBcKdTpSNeqq4UCyWsor",
  "key22": "5tECebJ37gv1TdtzrNLjqBDiq1uex45guCmfqUNjBcNBd6LAATjujT7zpTCbsLL3tEGvnPgFzgbN9B2VSuH34LgC",
  "key23": "4BQdrEauqkLF3eEadoDArSVKwo5tZMtfvkopwaBKsXrEqweYfYdd8vVFhNMjCAHTjTpSWaRzahMuZ5tLe2vu7wtU",
  "key24": "2xYnsSJvdvywAKbgZuT8pS3C2H8yK8XRUEiKeQaWZFTzkUWPRNupzqLF63PK1G1QDRpJSChAcAedybDZMAcdtuhv",
  "key25": "dXbeTVFDZTPUQ6xRGtqRD1oe2dcCTPLvP8yiqvZqJphetoWtxG6SY13BXz3PcRHfgYaDVRArNtKRsnTtFph9HyN",
  "key26": "3b2uqsBX2B3aptvUBMVsUBviNctmLQjuGQA7q9y5PeyCgbQbEvs8wu6QJhQvanbMacxxStkjAEJMA61zJv9hH9Dm",
  "key27": "2LuERwpgyfbhuQtBdAcb6gMtiscyhNoBr9bUat4NKZbgvK9jBYni5U2wyDXg2zbsnhHCkasWokApqkZGSGfnM8cy",
  "key28": "4g6BkXSneTcWvtMEj7cEUh96QjMs4wa8Gts31gy7wjbE4q58fpA5TJHFCeZ6pNLQCLx4DAdJScGa73qby1SFJtT7",
  "key29": "STtxYBZnmADQfCXosPnqfqgMx4CRGDociUfsBgCemiDvk3X9jwvoehLwDUbrXX7CoR9r2qt735k7B5QGC6KuNMy"
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
