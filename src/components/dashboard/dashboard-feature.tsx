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
    "3nRtptRzTz8MMDr1UNLyELohkNms1xVsXsiSKugWDxY5TwPuJxGUuwitz1zP1Cymh3eQ19Y6gkppG8z1JH18jL55"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3gwtfsWLAjEczfi59Ty1VwPqo75XP3sd7hXFnMZ7vq3V7CMkKcxxiw3EXcGh4szozg2rLMZmX2xYzhLaJ5SAeVNk",
  "key1": "UpDTnv8fxtVzKMRLnSgBQva2Av57rRyVmYf1QLZkKyuf98sVFyJYJQ1KCVYUGAruMrktmWpD8xudRoerLHxC53r",
  "key2": "vKG9UimFs42j4Afavew2bM5ThEBmEsxverX8pVyqqm9DtvPhGcbEHX8Ju5TWCmaSD73hwTqC8WxxTfm4SP8SYyJ",
  "key3": "2epuBhbqiiXr58qd9rJv9Py3YMjfuendajmZYaYCQnugxuZzmaZWcbPfvNPccY2pTxmyqQqc7oRuxRGoTfNEizWm",
  "key4": "33JRoUHTPcu1oNiPbWMh7QD194mHojmQRN5vWzZs6gVaZ8xkZRUybtc55UzKKPCaFu8V9HwHo57TEJk3cdaRVvKg",
  "key5": "4uQtSqs3vijuKDuRwgpBmd4wiWV9x93gHcazN1KXMu4jxonErFb8oq1QPAv2CRLxpRwif9ckwLkX7QMjpXuvLWhw",
  "key6": "As2JRdtr6j8Aekj82pcKAA4NKXAmAwHL82PcjutXGVbUizw8NmUN1XdVYZPdUqHSpkAQPkv64Kka9wrLUAo6Sto",
  "key7": "uwQ3kyRbfrTDn3J4DDU3YsykdSSDQXGSdWCB2LstaMUoZpLTc2EDwwq7SRdY4KmuN6G7YVoycz3tjPtLSxLSCMa",
  "key8": "4fR4zTKt1VM5BJiyuRwvGxgzXf8GFBaqYDmMf6xULKhvv2jXQFqg3JadoXEoy8VxXTS7Jqbpti3H16ZvHWvSCFSX",
  "key9": "3XiSWCMfgSgCE3QtjHYZzEynJJhcUVqX9YF8FKRqJx8zfrSPEwFw4LtijUgHM69q6KefbeYFYyQQuzbF6x4vXi3y",
  "key10": "4umRFUvFHEbecph6Kb2RMJrSXzBUti3S69s8mGGEM9FwqJrzYMxEh2KGRhtKeqvK1zpkRhTSmy5s8kYuu9YiCZxF",
  "key11": "5W2zpjgCebKntXSTmvKAxDcP9rcYpmEX8YEuYGCCBEWzhGQEFopayZYXc4VVWcW8Re1kazJUjoPoTYKsNEbFHGTE",
  "key12": "2m9k2BQCyzAPmtiwxxQnkxUKvkgeZkwxVxuuSmyftifsYakVk44hte6prCXCr7Y7vuF1KYMTB1dBTdmuAU4inxHN",
  "key13": "3hCeQJXKzM7eQxaD9t6LBCJm99caR4HaWyJNYdH9mfEYGmgNpTo96gSvL74FAPmy8aqQ6DyYbiUSsn3cHLyBW9F9",
  "key14": "2N14BgCAJhVaq6ydDdFUq9oBjVgBjPePEw2vdSG5m7tysywwv255oghHkKZ94yFBMb2iBzG7C1gbpkq3YfXVp5bu",
  "key15": "45E7efHzkXUh8Sg7CBjso5bXkKofQsBP9RM2Tqk7yPv1v8uUbD7DWzx9SFSsyhbCHjruek6vRzUXBJzxfzFhiZaZ",
  "key16": "4zARZB6kKimrMopoqdghv3Dn55A4qzXQCPz6es3ig9P7f3Dj3EZ14c9ocno4696MFuffGnDAn14fqqzCQHSDfLH7",
  "key17": "3mqexDLAXAqnm3TsCUjZWujSMjBneMGbyBMWbLtu3gNWjbwBZaRda8FMSujFYcHLMxdxHQxhpmsBL8VRLtiWwHc",
  "key18": "5fdZXuUSqBqXSRUr7rjfdNnB8bVZpUrhuCUYBbKTMdGaoeofiZan1wai3WQFXuxK4GMkjgeoy8mGV4oQu2jJWPRA",
  "key19": "2GxkArrPVa3vZseL1m6bhMdY5PVeqKGD93cM4uBAUzKMVdW4aFhv5dhtCWjsia1XBgv2d5Axu6s3JU2ZzkStWHmo",
  "key20": "4Neaf8NWsATpHMpCT8yn8MYig6HKRADAtyUkrkGUN5dHiSSiojSyDjKq12jsjxqSnG51VkteSd7cEjF48C199vEf",
  "key21": "2KjU37z5TAM5djAWt2K13gWL2VVwRD4uQ5dnRg1dWbZiWDukVRR3DqXx7jar37Ewg5AAT7sZH3ghNNoahYUH4bu6",
  "key22": "2eydsVUVwniZAGMhnJJyHLr1Tod4aUgSgJp9T7nakPSAYvwK9kzQpfhbcg2HTUt8GP7EXDk8pB2c1qQCsEjnmHJG",
  "key23": "3GrafftR6kZPZXgc7Z9MDFDodxypjfwtL1oeTAenquZz2e2sfQDFGmF1jQKagXesKEosg6YcSgj4BNTNbeeF9kn6",
  "key24": "3VMcSrUkAj3iAYq7KyuDtVj9iJUANqqQRrFytGg7aiBKm9bpvAuEmhA6vP3S2fk1vAvRRy97XZWZ4sM4NsqKW2oW",
  "key25": "2Z6HVGRK5ocUCiKtjcwMnJDsCw6TZkk9MMkyUajXmPPDh1sTRJJxKq6hzbqHXFZ9t9pNawEkDuabU8mDv5HAYyhq"
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
