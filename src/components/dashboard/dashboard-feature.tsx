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
    "2gJY4HK6D6RcaYLEk8CUyxGJxARTUkXYPcr6PLooy52bpWFww2n4PhBgZSJDQKQitonQRjyZcwZftnHqD9BsJCqc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3X5Gv2VeugBmq4T8FoM6FoeVmDBRh74nshqK7RzAWDoycrhxrfKBhHs516u3BHiwq9yYvK56tKaf55U3LCp9qfEp",
  "key1": "31fxz9M9Yyv9qhEtWtwcoEDkSW1RptGHFfczHBdnm4oaVAjXM5at32wrsPc2LABZJAGdN5khihedjHScbXybr1po",
  "key2": "3oERRZvT5w6p7fCdGES7qmVUScRB21dBP9mn3NJSwP7VzdR9cAbTbZnkMc4P5tGfivmt49RiBw9mxswDgv6myPNh",
  "key3": "4tqFgGbmQX2oKBzpTfroYKEuyqcRCBYPcDbqaujsAtFwh16YiGWzLDupW9icCXGzQS1dBtWCRpLeaJYjVh19ThRu",
  "key4": "cD3oZXkgjeqvjQKdgiHQCiRy6ASne4cXS6c496Xbwcr9c6RiWDnDDoKfVVFi2CRyto1UGgn97rNrEx4YFRps6Qc",
  "key5": "5TmELUoDXaCJGE5pjV622fuyqWeQePxL6eQa3q4yXfzLNEb7ktKv3rmTWySjP5NjNtfxRvhXs3d5mx3hmMcHbHgQ",
  "key6": "VoNfjfPuKRHL3cuykVAf9WgX2Rmtemk4mGJzWTYQtd24uidFB6WGthxDpTwM5ReQHhwSSKj6bcHnWKbEvAmZLxA",
  "key7": "29hMmfHZgvuf2LqctX7vfVh5vkZgBtJvYxaHvaFYWktgiES7fBxvUMiipEaA1KoCcnVu6Qyimu71fxPMQ6zNBx4b",
  "key8": "5MR6M3j13nkABfa6piyZ4dUVUtjpM1dNVAjcnG86xhH94gwrJVzcvsVry1V3XMVjKpnTCF4wJ3rWUyZrEHJj5mBG",
  "key9": "3qSdqdLefFDJVqWyivywHWWHin9STYdfrDuqzz4B2diy8UnZrm522s4NEuVDU9oCeQdCaXQTxK1hk3FXYRxMAvfr",
  "key10": "4o95fwjARSpyPMBT4Prg9bFxiLkNxbYTTXY7qXxEMzaEwT6jhX9iopgPZSSe8sJmtsPQaQKfe5k68xTv5gkmWpDp",
  "key11": "5vit9X44TtYcbZpChBKT5pcDEpq3taUGtchaqxsrHMneCDdozhVu8QjgGh6GUydXQNETMMSJLDpnC4bwKEu8TT9v",
  "key12": "5GKyUdUhPRCq17vZvytkMUQ5jtaGPmbHQafG97vcEinC8KaXwzqrzL1Wwxc3T5yx3KKFtc4VvKL7WbH9JTeN4tF4",
  "key13": "dmABjxsXHeQGRZucUWHipgBXnDjpF8oD1QbyZpu4GtzVeieXpRDMMQa2v2SY79hDbrwuMBzpSU2HFqoVUrGDY9c",
  "key14": "31gfbW2Ne5qAjyhf5B6xPp9RnkyUG6p759NWhmmXsdLa9i7gJsTui8uptg6rSCeocQUbgV2QDrEztfTeXSz7GfT5",
  "key15": "4AxcnXej7tSxzbchNPXdjWi4UXA14syddg8hMZG9sR4YC1DDKH8Uyx6adGLgqJfdYULdge3q5YC48MoyX72Gz5WQ",
  "key16": "5UoFy8Fvw4YYQ7JwAXAgYHfo7NpL3nbHziHV2cgmBsU9PMGJyr8LaGecLagPqbSgj2BW9D3RJWs2rauvVZW1rGgt",
  "key17": "4SpihtpugaX69jBf2AzqvehFt4Nuparq6jKq6dXgvmW9jUSU9xYrdoCTyU2ArM3CWceDAZw6vCvnpGUB9aoGZp73",
  "key18": "5S1L3QTjCqYzFjkBS9UN9Foh1DRasPSWxfVzS6dtZRNbU515NZNy5Y6sTb814FiWryoFQGd9jeQ4z44dfCSzZs3J",
  "key19": "4W8ivbQXHbR8t72zm5r3E553Z7pA4JqDsFEjqGXCE4podFy9SApa4uUpACF2i8h8wunBnXNBmY4Fiqw1ufSShmzy",
  "key20": "2mo2pmRzcF5gD2kKTGt2o533SDzvyqin6qnVxhRQP9u51KiniFy4LVjZ1ATrquEVjcneZ4J7AWyBPX1FVQscByke",
  "key21": "4CNzvBPWUe6bT75jg6XisMs2EEtdPtps6SR3yf17qJX1Fe7rZ1k2LdQWrB1km6QZie7NQ7aasJViPeA9vTU8EEuo",
  "key22": "29WWBBcCa7R2NkUK5SWhHT1RDgU7PcnWetgP53FR3T9PpayzwbDy26voKLjiSk9Ruw3vkzzfGfH6rnbSa5CG8cua",
  "key23": "3c9ENgrhBM23KxZxQjyKTxZEtSpqDp1W51wMJ6fFEQ4sy8JHKEjgsj1uRBPG2QUDNmVSuQrP13vrjcqjRMu8qRdi",
  "key24": "emkCdxWrrmgTCFCaBu1GNcQwP63sMn6u1o9eeqjBcrqCRJkQCXtdc234m5JCagTJeyVnHvEs3cS56rqyJ7wjLPA",
  "key25": "343p1SpSxnoVRU9q81NWpRXGzoCfvYA8q6wEj685Rg9SbVPGAp12L3n71MjkWyBchz9FMuB639Eo5Uevpxah1Uox",
  "key26": "4c12vscWRFpPFReNzb4DFKeYRsRbsigPi5HVfRbYUNBeD6eqNzuqqoAHGmRooxUcWmtCG4D23itTkZ1ziGL2zTmY",
  "key27": "5YeTuVadVVcq6KU9U46Q31wueGUXwsxtNtGvDKjCnNJHYq1oM15RDjMTRhbUEWGfKqj7CLjevHFbqekYt8UwwV93",
  "key28": "o6cFia3qMFGaXwqDJa4yVaUWrLf8ekFPLXiZxCx13SKc7ieysrXJfu3vdKSfuPcW6hnLjFFK5Jb3Ut9LvrnUpEA",
  "key29": "2C3f8CGMZCJVQ7U4VPG17CMJXCrM85vXhceM9bm2y4ByDukbMn7rq2THVti5fVHfDshT6ytJoytBuzVLXFFsnuk7",
  "key30": "4pt6WSyUhufQji54GSkqk4h7cJCdd2pgtZPCJfJWmEGBzT7CMnST7NEJ2bygbBgnWfckvDpfVpMSRtbJDCKAgskp",
  "key31": "4MM75XfTosqwHqG67faK5XUyyEHkWQhjtLHHNtwscP3SbpxQbt7Zgg3WDH24doTG8JqLG7T76zajfxV1BFKqCSEQ",
  "key32": "4ZgPn7WVbapARDjPRsCPaBvVrTk1hbRooByf6CxCySRzYsAaZKDF5gwsDkkfrq17uDW9hNkCVNQjqLsjhxtZu7a",
  "key33": "2AcS2rsuGkGqgc2JK8TkJekVQqqcfDxpTciVjNUnsHWWES4u32Zeni4QLzfdrCRxeNsN8UdKzPDjgSh2iJANtvBB",
  "key34": "4e65dft4HxxPZPZPXy3VhXBnbUk2aqAHPEpkgsXeTwPBeqCQVdUAczuRxX5H5qKUScMia9np2ZQq64GPAdRNwT85",
  "key35": "2FZFW5gpfXNYBvaq6ra6t1VD2QGHycXDJn5p6aXShtFX34BKfCVzeCk8sxjW4E6xiprJzbwAGTrzxhzneiaD9Svr",
  "key36": "dRsyP5EwcVQqs5qwBC7FQoRHjKmMArJ6ciRFVfNYHxew1DJSEZb5i44HzUR9P9LfEUv7CWD351daiPWriQcydfF",
  "key37": "4ypgKoerZ9gQ1qTX3VvoLAhhm1TaKBaTe2jDy9CmDaKb1PX6t9sBcs4qMBXDt426BGMsSEvwpDcP3TcC71Jq6tkp",
  "key38": "5kCTz99pAWSCKvTGWQwGFsNujrBjdidvSgU1Z9qJed9ii2JDvNxoCV3LTSNuQfmeMXzLG9rNEX2Kh9RcUHaLxwnp",
  "key39": "3oXS4oqh4v8vvT64CFf7yP17gdKi1EtrgnhwbHKqzFzq74zSTjbfFZxHa3NTmeykBxaeX6oZr3V5JkkBuwwngiLs",
  "key40": "5H7oo19mDEi6SGTKJkLBvaiw296BmEJ1hJTjGMzj85SA7tT7A8QAvEQdr5iYnBJkyzew6g2iyuQs1bL4ko3QDxS7",
  "key41": "bHCC4jb5Cpvuucq1RUpWLTkYge5vsWMGCNeeuEECSwFr59Cj6HWBhJU7bNvJbbv2xVAjCYuWgHiVwsMwZAGgkE7",
  "key42": "36MJVQjA3LMnLKALVfh6J3U3g5zSaJASSnMQV3gzWVSjdwhmKVZdzpCxsVXQ4HHY4oQ4u83UgmQ6xCpp9yqMhWDy",
  "key43": "8obbata2yANg9skE9aRGktpEpcE7eXSvM4ipyQFmjyaEN9f5MFMtCNZi3L1KN2q3tJBEnxwErCcG1mpLcjoSSdX",
  "key44": "21virUbD9xZz8oFKPdfAgGY6Z4GZw9eXfRcDodoN7piKyCxzYtNBJmvTJWKPkw2kTdU2ZYhCa54XLqsLn1w5ri4U",
  "key45": "3AkeHbe3xyZyGEfYDDDKsSXea7MkV7xVMEUBYt9LELnh5r3aa4RoTZTEMtm6maC4G9rgTKpcePYLYeCSkpbMfRkV",
  "key46": "2iT7DZQo5ebzKzYqRr7ksDwktFXqh9Tn7SbGEBaCAuWosMu9zgGXcJPhZUJZ4Ci21rfh91Hkf8jqCtYJgUVjd8U3",
  "key47": "63SkxjkgCmu1bAFEQmGVnV1PhjRiBzjeyLkGHWG7twAbkFz5sd4rRk18bpXLQznUMD5p7aLnNej28u2XmPucupsa",
  "key48": "2VcgSY5M3nA5AqhRK9qLvRj9DhX3kghpmpGHAivrmhzXQSNyaKBMsvvPChwL5iB4RyW4zz45ZxzoMBK12jyEhfK5",
  "key49": "3kvx1U6JkmRXqy1Zgp3eg5kLEAqYFimeKrupSa49og8GYUZS478TvPyQ2XFHuAWu69fXLvnSXSBasR4y7Jk2R1vN"
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
