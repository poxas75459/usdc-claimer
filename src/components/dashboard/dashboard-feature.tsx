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
    "4noRck6hoppk3iBjtNLq4fkKkN4p5zdudfkYiTV24KZJ5k8VdHKWFvpq43PnH7tkDShhuGdzDZrXbJRVoYYSUh4v"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "EFGW7XC3o1JR54S4uoJ1z9AhGKm65mjbpVfYc2WnYjs5WJd86rJSuTfyioB2QTi4GQ1FE8bitCJPjuGa3Wr2Wiy",
  "key1": "49tDC2zwruWWpTz72NDY6jqyC8b8KCshUMDt53KKG1zRM2y2dXbfgPmez1RSDyrtWBctTrpu7tE7wBFBHvVzkhz",
  "key2": "2zTEYFWuSVKuGTRQFZAexncsMKLuPUmE35dhJh3jZtF438Yh4peBxHseE44tgLk42cjVUPoqQ2wAQxecBjjzqjiY",
  "key3": "4dbPT635JQrYSaRhe6YdRsDZerknaLGvmfYKH9Td4CueARH7sqJSbu7E4nrsgTDvXiAdoW6KgUukHX1GuSXjP1pi",
  "key4": "qL5hT2B3quQ1tHg4QsWL5LNcbuUj23V2khLzAo8gpS1T3AUmU3j6Fhmb5ifBw6tqabtUaoN3w3qVG3UYgcyfGTm",
  "key5": "5yDNkEtrbiFsihYMBCYBAnD878ujvN1EruSAAkRuWNreafFeL6QZ64RNgx7tbfJqztRJGraWrmXhVj6B1j9bkwTV",
  "key6": "5wt8MB9eoGhjTQWSkg8zN4LMp22xzJqAQKefEQ75YAqiL71YVky72VDZMXHTu6Lv81k5K3zh9jiQWMGjDJDuUbqd",
  "key7": "rEFVonfbsXvNDXa2WFK3e54byA5dGdQ3GYw3oJzUjwouu1anTq5fR29XgsmdDkGKimoSVt1nF685s6Fmyde5cxn",
  "key8": "21ZnUwPRN88AL55frX4SmbnbN53182BLt49HPXz3Lu3qFcepWRr757TumVgdCBwFoe46NrTPVmd9NxeigyNZ98xW",
  "key9": "3fFBEbmXyiFsTTZK5isfrJCpabKbhALBtZUzmCX7DybbKiSjDB52GpjUJ19EfGmTb61RwG1cVCx5Q9NjqhExFZQ1",
  "key10": "3rgzxowpDHYpTmLL1KFcaHSkfZ9xPkLjqvbtBUgri5joqQ4pDF5yQN2qauRFu5SiRZZx8MoqPnB4HJcHqt3z73Qj",
  "key11": "xcxnFVivktkDsyuUQTp9fw7eiWwake8NzSkFMRAKtXRnPWSYAZdv1REGivWd5FPqT7nANAfUppMSp5Fdy2PTEeU",
  "key12": "3u28AN3qYHDJUzjhMhjjwHjB4gmoPBDKXJuxH1qBh79TNTPKYfbJrTbTCRV6NtAaA9dc3u4dA7nz3C4uxwzQhNMK",
  "key13": "4XSq5LsKWkMPZ33bDdVCxn3MS1k2dZwJHyFWsXJyGfgQGwJWJkwwckqA6MnR5yTdfQxB2UQUS95yGToxCdJ4vhuM",
  "key14": "BTFhiu5MC3PciSpvQHZQJa3WuAwwFjzffYTJPsD7D1bpNqJg7VuuVNQZnpy5wKnTGYtHa2sAseDLLBvmckiiD7b",
  "key15": "5ScirpnDn7uAb2Hyfuxu2tbpqDFRJtBibbiQ2VGsjLzE2VWDQfDqBjrXkRZKS3RmpVCxFznNhokLJfSLgXDGDK1B",
  "key16": "5RcmujZWMZZ7HLY8RzQXpJnZLxMBHEGKkHAZeQNab3yx4nZwHbb4cST9BWaQo3JDtY9WkSGdudXbKDKWuW3zTs4j",
  "key17": "2wyyT89tzcqphdv9c9N8GKsNqB2nhMS2eEr9dUL9FAzodYxJC3fpEZLpza9M1EtuHkksQA5Cs1ycb7P6T4YjoEd1",
  "key18": "4Svw441nn9JSBumbVZrXduyKR7oc17qhTV5e1tQGDB7N4QZLaBAFzb411xv7z5SzMfPU5djLEf3YbLMWfCzFTFMG",
  "key19": "53tiNQJebefaQXoAWQTVJEAuX1F1nYvwpeAxk7DfnKp9YK9LHpwy1j91u1KQtG64Kdzj6toMY9AGPkaXPMHzrZpS",
  "key20": "MEcjJ3m7bTmCoTcakXnMQskWZsr2tyD8obCwYooa6rsWEuES8sKDkCPDdvfVo9beZhvVQsHAtHi9noswSnkCJjG",
  "key21": "QzGvufSQryaafzrvvByxkQE31iQVgmtd9Uip8THLgGdwH9C9Cv4g8h9HXvRNtgb2SzS2tBGJjjm5RvyGe4CW7LA",
  "key22": "39BZqnD232ZWzYXh6N4vQjHtto2Am6ht91NsUfjfTzEzD3neMbDg9txRaYs8FTDxpUB5mFSsNWjpwAVuhGgrmGWL",
  "key23": "5EYUGSfPX7uCqdWmXvVF16Qg6wCxQYbE1EdThCsmk8qD36X5ZkqLFbmzAJXbPwCM5DyKrhrkQvwBqUc3hopFR535",
  "key24": "5PiNFW8NCWRgmvY55YNpEjm1rbcpumsWL6WtJqrECoCwFA6Adm4To3e481cHRvQJfn9jgNWDvPdCt6Fj1Dykk46z",
  "key25": "4mVCmLTyect1F8u74rz5WH6c237Q1qA96MgxeCGMhYK2eSwMwioS6LUYxUHHM95SCKYmZaGDDu7SgQoYYDTtv62c",
  "key26": "4yyhk82us7oMouMk5ZzRYskZDuBzdYMmHDA9LfPtscf4TmGxWkT8uZFiJbEnStp4dGPTgifBTxU6Eg44SBTVDSZh"
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
