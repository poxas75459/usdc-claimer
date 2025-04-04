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
    "273Udgmbz1uWPpM1PVCKfVoMVPKUM67NHXXxBVvXvwycYnMQtg6CN1hzzQQWhrR3t7EDTQTCbT8LZKQ8mrE1pnK1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3wx7wJptMw2jGGeKjQDFUkCtJrPVuMRBdJEGgnb56P1CcDE9LuH6x8mcNXhnyfpKZqC6aFNdGfXAr74sVA1RJoSs",
  "key1": "26bSXuikKTCYBGwT69SFMQw4bCGwf2xcqSxhUmgurhyoSn9nG3NL1LRhVb1ydhWx8eonpYXgK8wiJL83LeHhVQVL",
  "key2": "3SyFVC2pKFLiBoDNiwD7JVKjGDNjLw5BPxLkEq8uuFhaEQ6YgaiPEjqD4AsCTSqaXERbKx9N6doKKAAX6vDx4FW5",
  "key3": "2W7Vwx5W1V1Xcq6Td9YqAoCL9v1WEfM4gxZjE2DQqAPwrv7szFh8mebwd9QkdhiehWQo8XLU4sbX2rcTqbF8fGYa",
  "key4": "3sRqJTuDEDampqAbLxbaYuWiRNWwSxfgxAXtXNWjjLUvfqoptEmzeHnf3dq5hkGrnN4hfmr1XWdUUQjWkEA3Fi6Q",
  "key5": "4GAzV4VpXZjtyAitpQ5m7cXa8w46DECJxUwLmohDKdevhFVfw54KUXJFLWE7hqC5r5XUXXg3fkch6iNDyi3wJgQR",
  "key6": "4dotvoH7xVoueWfBAE9UkyL3tHok5JHBEhnUbpcrZiJjQXacZmR42LHCksp71T9uJZuhvK4euxapGG6jMKLQhfk3",
  "key7": "VdtAajpUDb9M3wq4CRa1hkZwfZJn4j6nspD4Kqxrh9hg1j4XsestSmvqe56gMcFTcp8Yk4Mpw8phatR7qhPekdb",
  "key8": "4B8ThaDRY7BQDqQiqWDYn6BVYTY8cXYmHiELC7ddkU6xUqtDERL8F2tYKPLqv2T8LxtjvGgGhgFY1eTsJwjhAXr",
  "key9": "cUKW29nkyxicamV8EK4fSPEvRkJ2XRtLEpJjW7ojYVKfbTFNzHk6VbefCwtyaWgfLLcveg3kV39FhYUo5oq4tQr",
  "key10": "3uscDz84JCzDSM3mNeXmPKbtzEosbjqTN31qAXKScX1YbZNEawB6h2F5WsPHoCXyvYfkUdwmQ2SzPaGLQrNaX9u1",
  "key11": "49ATVYHATbPppvZxhgguemJeSPr1xxLD3vv2kvNbjvS8oHrsSa93HjGHuJb5Hf5DjfKKeJm3NcE325sJwevgtaFb",
  "key12": "3bkPgNrCHM342htua8FPzpMD7KFQP1iaRSaLC7NBRAEmfQiaXuVUAdoD8rxkpai4xxMYrh7iCzbMzWD6CDzPGZPD",
  "key13": "5ZX3wbtmMihyefFBKgWrvAAax4DXbqKDeDas9Buh6T2MaHs3d8CmQb55rKLuk68so8AJv14cmpFQCfkdB98SMD3C",
  "key14": "2WueKoZB7V4SnMQnhQ8wbwngi6RqjaBz1STyFuehVzBQGDCM1HvzR7qzKGwTBCKPLH3PfPnbRbYW7ffV7SPiJaGM",
  "key15": "P25av6McN9ZjwNuJw6JoNWBAnKXjouiL7vrkKDZ5g3ua7um85e7jwzYWP1768gnMgByLQM86oBuhnA2UYCRgLhb",
  "key16": "5W4Q7exMiyBgNUoUDdCQaLz3tEbq6H8jMVWwZSjudhT2DvavwssjrAGoZmai2taqfTyDS6tUpcd71FeK3TvKQAK3",
  "key17": "37nUMMVZk1HSWtXDEghbQXYbwcDGvDoPAp6motMzgVb9myKDSoNWgzDbvHmLuzJmtTK5RHgaFxCaNYzrqFcuhgP6",
  "key18": "5pLMNDpC3nMZtkrgGLFykayruFNZyLtJ7o7atYRsqeeodQ3sMbFNkXd5uspRCKQ6nMXN13hDr8kWjCQEjJBB5yp4",
  "key19": "5yuu2NheDxdFWPgTWNDcCdokbEZAkfJQzr2mvFZfuJNF5ckSZU9hQYzhap2cSMKhkzt7viAyuz1Z9G3zcSS2S1AL",
  "key20": "41qwoUkuXTNjC4FiiT2ap3qwYr2teoWM5hGzLbw43eYGvnHWHvA4kQ2n4KyscDbveuTcJv9m5Yr6kfcnrhoSdgrG",
  "key21": "2wWfGwJmUnAEQ4VTvSRMeHMVJHmAGmFSZ7F2XXswriUT2paNjcRBsbo4itkYPeJJiUvHskZfYyXM39tLMKEGBkHB",
  "key22": "4jmQXL3W2d4whXUbGuxq27oozVCcJV5KTFd1yDmpjHym3F4h3aUk5C2Kbew5GsLxFRqF8zGn9NTqF2f1NEbAFfVU",
  "key23": "5Eyx4A3gWZ8Wx3NfGNL1EatNAzYbS7ZpCHuzM6cddKxxksEGj5yZ5sZrpPhXchynGkC4Wt21a2iHynE7ptkHScRn",
  "key24": "624HHQfd8QH5LAgjTzHnSgWxxZhqFVM3B92FF32P8apYYqeXyHiQLP3CSedkrLYYNtkQRYZvK6t2h6bkWJThwMMi",
  "key25": "2UWGSMXimrx5rvmH15hrsQ12zSJCW3n7XbfZEg22TkkS8a9cBoiP9DoesZbpUh6sgQcRJugsBRKj3f4HfhQ7ukBq",
  "key26": "4GBgyLFhKD89KfhvRbRH9bKiV2e6SYNaAkmtcZSitCK229rnFBDjcnUt1gPUKKNL2Eb3w94RALnt6qt5XVFwKTfJ",
  "key27": "2kuXErTYLn7zuJMVQfdPL5v4fsgxyFqCJ4iGLxYbzR3kNvmm12V88Xk4DryhojwFJGyiKsEJq3ijif18Aa26kf8n",
  "key28": "5g4xAAzmSVtFPpFaepTsFq32WAUAT9vyKfjUAEqxZ5ddzFDE5hYqpucfKrUCk1LYRDwoLyFg1uLsKmauqW4n1zEe",
  "key29": "4Lwk4F7LVi2daaFiRHHcTv3pZ44a74SnDV3tpUekUr87mPrq5H3PUKUfi19EfKsZqfPhkAU4joCZedAzxx6aYoEu",
  "key30": "3NhtTD8wjcMzjSvmsuKrKfkwUSbunhARYsNE9BHAtRssCiCJZCbh1yA4TuPVPZk1yRR8V9kLvBG1VjrYPsdCMKsC",
  "key31": "3vDsdDE9hDxdFoHHvS6YB5FyGmRDFHyNfKeGwiqLVWHbCLjZhYi8UoFqEPioFQSQdaPN1JYKUdbnd4B76E4jTEjR",
  "key32": "3PXcAgDUVbyC7uTnHaZQoH1JZfDd7gntLZXZwryN1eRJ7qERfTdK7fGwD5ZkFwHtk5ypLV4pR3TVmdyirE3AojBv",
  "key33": "5AMQULTjU6iHAFGkTf5RTWHQht6fFrEj3AzTuvxG4tE9nwqV3EW92GwWuHFQ2t22vxRZebsRujp66Uunkt4NaBBk",
  "key34": "5NQYxeAXYUD8NSf2KbK7g1vs7LpR2zntcSyf41avNadyKP7oe812cL7jJcfoxRLx1dr7Xvk5wJAA7XGzmcKHdagL",
  "key35": "2dTZmmGQsqD53WrxLnczutVfj8RuyWZW3C4oU1KzSid1gihxandRHSqRU2yoGqQXyGLtXa7gfydLhLnNgVnWp1C6",
  "key36": "4HUjf5edCYg3Hxax3BrfJXZeA4DVHX7kkKy3pvnKWw9iQhXLgWUfmXC8R1mz6yS88tLmM3YznyEs9gq7EBiQNBH4",
  "key37": "5imtRwqa2weDQG1rPoB8iG3uBHbiPZaBqoRfXDqdBAE23e69SrJPH3Di3geXD4NhrHjppsrvawtfrKs7bGZhMYa7",
  "key38": "35Fcrwhi7r5gWkK1uu1DMo8wqdBfoEqF8Djb6mkA5kQBorBSjwjmXhU9Hzf3F9yM24YvvZdqMyQn4rKSWD7S2kuS",
  "key39": "4LYtTAFEY9wsTQAJL93PkeXW6MtQdEFCn6FMwZmXVgGN89HCvExZAvuGz7xiRuEaCaArFFv7uPrQUFRXisLzJFbj",
  "key40": "3qUyEsCEuMk8agBAPM8rFXyxctw1MPB6RjNr5LLWx3SfYcwHPjxQof6sLDeZ3WSdF2QUVKUgP7u18cvyv1aMP4g5",
  "key41": "Ww3siEHF739PuGpk4vCZUZnuz4erh5RzFr9ueECNuxvzASAqrGMnRVT2zmbpLZXdNijsLxEGkjtwV6b32YBA4Yk",
  "key42": "5Z7yxkbvAMkAVHJtB2E8b1YSjdm9asYQxzRxxik2Rn4tnwcQwhgH5PzhFEfDusnnVwcNpiAiUzQENTkhRhcX1YxL",
  "key43": "2uHcX2Vtj7HYjrNNETQwYXGd9PLyVK6jCyAtF4qzmDUREm27g9bMzx4L1p6PBggQseS1hgWhwXNYGHNR9cJG2hLH"
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
