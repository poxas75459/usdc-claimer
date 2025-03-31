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
    "3uNNyfieJTHuSEzNbXY96WFQhqngnTnz2Huqz3y8bLeJBmwm6q6gZdEtjnrDL7g4r36Pc7uZnmE4ANuSMtqb9PHZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "59XztSQvgbpSSPn5pnFqmAUcWB9EhjYjbV6N9tTaB4uK5Kg7tN7nC5WBmTwCNevCEYkbsEMnoHzMLHVQvQnn1Anu",
  "key1": "WUyKhKfhDeS2VQj7S7Uabscr4s3ZWvco7yNwv4Xp88G4pftDSccq9fkPhchW62znWph1LsXpdET9FnpRZfFKw5F",
  "key2": "4XEZRxznDEobkMhSLtSGuzFisUwGvEYqGtCobdFvvFNJUKQ4Lt2uJkvttpoNJVXQw3HW5CR8ed7Air3eCipHWny6",
  "key3": "3AebyFCfAudPh92UC1KKo89heLNGsEixoc9SQXebg7h9TVKGKxpXvUhSFDcmdjHeXtvXBAMhexAvzXzQdyqfDnKt",
  "key4": "4Xwx6U9C5FYpzM1yXPn5eCP1PrVtdABEdPWRHtdMLvgpfPGdA953f4MhrihfLmGn9bA1kAYS2FgLnoEvwLGjuUyP",
  "key5": "4DnrjWTNVzmNkC7yEJfxvarKrA8Jf1kE6vsM8hYniQgTHeAtyXXKaHEdbJkD5xhJJTSk71AvzbjJTzEiokacbMJR",
  "key6": "5SVs4w1hpdb7r5cBBkMJbqA9t9mHMhUqqqnAaAKNFStpPnAv8ho6YqzUu7pXZ2UFmBsaXgxqNP8sZB52uG93V7kQ",
  "key7": "R36TKfkfHL3A3WFYLLi32VGhxEUSzbuCaHEnytuaxCTBW7pwnisJZuUZBiDfMijiD5bmhoREhFnZ8uahTG923Jm",
  "key8": "23r9pNQZB8v5bah6N7T9mBDNkDCmhPHBAPu6ZnZwNNTXC5iEC626ripiTPmLzf11bhaVVapdydnrdmsLZdGNkN8Z",
  "key9": "2Xq9m57ewXfYTg4Pcakp95UvYTYnWUMnoRRRvhYjZUtyp4cqskVoLFmie3S54r2QzQbieP5TmjJZzvdGxFgs6r6d",
  "key10": "2S37A6744VfJMNkt6h4ZcEYunq4MUR7wvhcVmSriPittU2BVn1QDnzvaesrrGNekYY99KURccn7feRKvca3rZN3F",
  "key11": "5G9LWEey6zWcLwAiCvJbV8Gceb6yY9RhABCG5CyqQUwVyHCm5Wgg4wncxarzoWs7kMuSijBdWTJ6JMPM9Uhw2YLw",
  "key12": "kxVYm1VhG5B1QpXpEkrUc11dUWbfni7GtBZkujKtzamfkp52hC8nG1HtVvHMRhv8ExW1RbVTcN9Zf4JpbEs9Q5L",
  "key13": "PPzF8mEp1njM8D7uHZP4kTCB4LgWaLjSCxYjzCwYEM6SaGSduXLtPp8GaVZuztJRSoQeHERv1rJjcvqxxmT37aB",
  "key14": "FKqFXFEKmd992ZczPM1s7wqKtPFj9R1MJZmQK5tawACHTQUC6JirTNivA3h4XY2zPxptSKrG7Pp4gGwCb79c7zM",
  "key15": "4mWPkAvaKpMM6vCH3kPRhCJ6RBS9zNqR97N4zXNRqkRrKMhar86VtmiWFDdS7btLtBWV3npSPfvPN9CMMmuqrYKa",
  "key16": "4DHhfAjQZeF8t6XnsQ3n1exGeGe1gg3uWGMSpbA6XGBuMcCQjNb7ujY3LjhAPiqxZYEV8tD5sCt2TmgPANfikYy",
  "key17": "2mgAXFNE84oTJKN6Mct8S9s1fgGwqbD766sS6SFppJrXqcbhG9ofZyGiNaw2Q69XVGyco4HqynJNEBNScpiFKLQz",
  "key18": "2FYCNH5LRLTUGqMrFrHWPMRGBWEpfR7yijMMnqeRRbHvkG6qzZ2Hzxq1YY4ESYYAj4rdSRuvwryW71jxuXXfDsQb",
  "key19": "4bRh49UQznuAGByw42FjzBxLAEtixSxBtkab4pP25T2fo1B7ykXfbFxGu1xmXrBR3G1yBN5MjTzccnJRPeGhYs1B",
  "key20": "2R56wFrFkABUf6WyveUUf6yW2sXTTWqhyFKjPw5Up5n6ixvqKRn1CZzCoaARoEeD9aptMybZmPFv6vjQA6PwUFSY",
  "key21": "kB9QQXHvu1bqAMf97rpYxa5FwUPFtfEtUcktu8YfHmrPJ8kRPyqD36ZmuLVsqFnSWJ7uFufDPaGZG8kFRc9rCmV",
  "key22": "46nxk4GtE91R8Mjje54rcnsUBFfmqSvWQ1aagyZxDGGuqsbCjKDeQhMzn5SjnLhQBt6awwJzV4TXfCbDgZShEYKz",
  "key23": "4hGiQ4mw3ZoeXv42enJ4yZpcN9Lt4rXvJEJHg7CBnwDxMg8CBD3QGesqcq6gJHb6HGFG4QAhCE5TQujAGpeF2JSD",
  "key24": "27SyRphk7YWYo7yZCKPjxw2ENPN8GzS3851dnE5UYnS4bMPTKzjZfr3q4fRwu6zpSwgChe72eyPWhnnZr4NTc3Ce",
  "key25": "2DLSa36jRNVMmeoeB22VwhZpTz5B6Cq4Wvt9LUjrjgTtT9FxD2GxnWpH8pbQARP3jCWMeMSPEoBrc1o4kXQGX1YK",
  "key26": "3bDXd8rPxkwP5pfgX94dMBawYngYWW7AU5RAHGo6bJtu4icvk5DTkRS3ietMFp2vRgZC3qSTs51B3ncNwjcHTZPW",
  "key27": "3cCyMFqmRLLwZx4rxFr6bSonpVGRewqYXrGr8FrpUdkp3vVn2wb6ietMkNx6ZD77b9UaQbJjVYASTaNHbjady7L5",
  "key28": "3Rgt7B7QzH14espr6KS3NTx3L1GfcQY5jvHT2Mi7NsXD5N6GMXVH8eq3a7nzwZbpnW4xSWGAEctyX5njKVKzNDP9"
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
