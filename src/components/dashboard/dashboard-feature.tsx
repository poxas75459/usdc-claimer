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
    "5CYTNcT7nibXGdThSKKbfr7Rn8G1nrQjXdisuWuhbJZrVoSCtzTJBnkWg3zyjqSf35WUXMJpEHifSud3gWyDRBSW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3oxRfXUyQKYiE5rRvSVcm5VLTeM3tt5HVHuL4fDmBVsYQ9ihL8QhF2cM1PbsPvX2S12VPWQfjzse7UkipziT164S",
  "key1": "3tRRNzFJpQ28mwwNbXpLbXMVV3qH3Z1VwkvXHAWo1sXVBcMzpPnfF98VrLZLuFDmdXW9c4Jpw9rA3vU5pLXHYBQV",
  "key2": "CvkL8pFVJPxqQLHZ95sruso2gmsVZ94YSwQZgsJibsZFaEhAMJR7Jsm5e1iHW1SvrZorLAyhEJKCxAxLBFUwzka",
  "key3": "63pTLEsgfvzxyozA4W9VPzg7XqJMUkR5FaE9XfALhAmwz9Q8WJ19hXnfchdp4QXYJx9EpUXGFh7xExa4A6hKRBt6",
  "key4": "5D757Awkst7qtJybjRK8nkQ4gc8RAykLPPkBf351wh5qq2DhqWEXpsDHRRYsc1qNtJoLEy7TS34EgCkzsSZ2PZ5T",
  "key5": "5rQioHrrydiiQLrf1Tkha8GtCNG9xWoyDLvajWqAWDkpVPKbmPoLrgNEt3C5jSxuN227q4y1yi7PmGhZQqzVFMMa",
  "key6": "413gnsYF2TAWfjMPur4vwrtPWJXg4hRhTWcBGDaWaxc5HLaW2UNzXJ23gX9fyPB8e4WZ4JauH2Pe6HN8pxEvDjEy",
  "key7": "jUWhdVTzRXdr9PwK4sPasNBxX3gd6AowbEpCLUrcUxxs5T8hfnqT48xSVEahuVx2JD9Q5yuWtHXJccvXR2mbPeh",
  "key8": "3ed6YJ7pcExoGjsgJkwgd6AR9frJ9tXkSwZGpN6ZgtQi7zS8m3YG6dkT1dnHEhQKUUM4XtEUt5kUs3tUS2fhpQUj",
  "key9": "5FTXXBdxJbQZdSzaCrEZUd1bZPtG8qLEPBhwSZAqiBgyav7Eg5bmHx21yEQtfQFBg8FHRKC6TZW8nYG71NQwNrnE",
  "key10": "4zS8MPZA9dg3xRWcU57TWAu5rB4pUEzdZ4Fs3396FTUwJTUZpsJ8esY9F9rUEvTHheCP7cxTrxvxyicVQYReNMw5",
  "key11": "3bw1G9QU4gWbBoPA71mzdapdCwFBTmCBzrFaBcJ5EUwg8gd83CaURhCe1yQiLM6xR4tSorFqfgM9vj8qiiZgubWi",
  "key12": "2hJeyoSC1mQbaKEf7mt97WJ2bjkov7xwssBH6S4bak4g9hPLFriFmQ9mtFjzuJ1EmhUK7xmPwS83oKQHF6X9smuL",
  "key13": "3S6h8YrCWKeSWZ34gCqgDLv5fyP6VY8MyqrGXFsUfQK3jxAWvF2xo7Rr6r8yXZATWX8rNkhGFJnuNoomi2zgv1kp",
  "key14": "2HTXd7oLwt1J6qvVcV8iupynvSuyDjMEptGMnMajgArvNMj5mgTbxqthk9HpRWcxAA43H4uBPyxZjtSDaJMHTDf8",
  "key15": "5F3foeBcQVhjPSBwk6DChVooa5mQzei8BGfB1WpCmenujZ6GR27ZBKqfTNokT3frQ1sy4mrJtFKqvFdrkZJkmNe8",
  "key16": "f6vQPETxYoyccKcAyTEaReFfgUFEsjTDihncmx1B6W7vxgYWa3XtsV5P4WQxsuQfN8oSKAAgZHsgBrkxghQjchM",
  "key17": "2AK6mhiq56EZmBS1jMrHcbiDq5J4kZegi9Wj94pADSFADiyc4b9NYhoAsvMoq23wPRujFyk9P6auMPMVQsAhE3Bm",
  "key18": "2kufkW59hC1b4o5Db77rrc8oD3BKErPuTax32tGLaj9enA3UGhYMU1eap3LjdyLQPxNkyMEF2i78DyKSAYLJ72dw",
  "key19": "2cP3Q2XvAUgBURXh3zkHw4qu3aDS16Bd3C8kNtEtVEPUjtX3Vp1vWjAbtUUobjeU4JUUUvtL3LhpHSmD5z8m3tZp",
  "key20": "EHdeBy5b3kAd6b7Poa4mEd3F6mTi2Bq4tME368ubhRJ3m6iwts2hDYzL4XtvKAfg1fTFxXpyw442oow4coDaGS4",
  "key21": "4xZ75uudWqVETupiertTXRumL1jpFT3dwXUNgUUdf82AkxMLn9M3hGP6EbNtTdY5jQSCMxcNRv3Fk4nAkpwNXGnn",
  "key22": "22SJdYrvcDnGnGnHUmHR4GXWu37S2XWAe16iznkm52B8vZBRuCexazRUwy2hfAageGZn7WNCf4mkmBxkGa4FHoM2",
  "key23": "5Dw4oGJpsmFfwMP5SReQbxctTLx9zYMCatjFYiHWUDaodkNFdgoo9TxSwqCM1XNQrwrLywWWvKe3GXYvCp6pPgMt",
  "key24": "3cik5RcAhHSECK3RHT6br5zwkNhmGjxN9mz8yQkFgs5iTT9WewJw2pG4z3rbpMVBmpiFzzwQd9JdsyCuxMw3LhzG",
  "key25": "3Hcp2HJ9Rsh8VLS13d4YUShXDatULhFESDLJ3HzCU1bGUgfRsf18kYHyk8UZd27X625PQMZFVuXqyDshQPQtE6JS",
  "key26": "5ShGmaQFgVhhMFTPTsZaosDbXues3gst7JxaTwBZu3jsx1VhaFaN4Ekik9XejAqhzvpFqep5Y8q5Bv18ccxPcC7f",
  "key27": "1bVLHVMvrREyd5SAWjz23xf3nN8aLmzxcf218aXHn1ZD52L5GHrS7dYUfY7P1r4pjT5aeDGpMvmUteibDPSGidi",
  "key28": "4MzCNi9fUcg6CbJJQANgMRpVH1nkQXUq5wJ3q9pAFYiAkNw4JxhFEubdfALGZTk3tM6bgGZfyneyyWYE8TMPpegH",
  "key29": "62iZ9bei24FKBHU2WaHjQRp3mnMybb86UyKKjVCswr8hP6uZWn5x7cN2S82vmcZkRmRaQMFvaAZvych6vZnzY1zJ",
  "key30": "5MJzkxfv4Re6MXYc2Kfe8oNrFwSEiJrP9XzQHEUUEMPa9Azq4Gk8uMmzpnytFZfdMhZvGg8dxsu84v3ik5mANc5z",
  "key31": "iWZEgbGPPx3BUTPHE9AExqfde4nDiEKAdLu9T9s5EGVcMXyEGAjVqqorCMTgMzAvHAtq9hTx9aiNtx7uFm1Jc5C",
  "key32": "4DgKW7JgHZWpQv5r4eXnfWWpHXg8HdENxL6U6Vuq8uTC12iMBAACvMCqe5RMshd2oeVjc6KxrSzUBcUtfcsegaf1"
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
