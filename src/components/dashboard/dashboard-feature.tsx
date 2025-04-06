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
    "57FfPvRhJRJpSFQd4UCyFi275D51GSrfuLS3WcDycb4AvUtDhv2B3uQac6JyYwXBtoyZMc4qxZtJbnaYPSWuoZXs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5MFfpoNvNMgpBCmKNLF6F1PpEQ4mxAFAjTWTAqd9gCcDeXLw8pMFCgKBC26NmYxnX2Tfkq3HFWHDBvMg2ve6H9Aj",
  "key1": "27SZtJZFJSnue67y4z51wvYYFqrPAfwjQcX7xNE8SqqQFVJ3d4EKNQXBGvTxk6wxsvTJcDn6k12sBtuhFXFk6aZJ",
  "key2": "5jZR68j4qXYMgEHFBbejXW4X917BXo9XWmmQCFwwf6RoChDFCQasb5tRFajTcvztxdp8hoBdFWnoapBNeMEDJSzt",
  "key3": "5tEAoz5zCLQGMZ6TW9CkictFSWmZ1bDSkN525N3E2cq3pxo5W35srdi5Y45boUQKo7aHnpKDAmXdiiMGqk3kEMni",
  "key4": "5nwRBC2TJsfMvBa7nkwXAfE7KaVagRxMte2Ahq8hAkpgtvRUS8xgFS5zPaPy2pseYGmsrDW8aLuqQdiyA1yK6BwS",
  "key5": "3k3Mh4Nm2X4uvX5gUwk8tbvJFEFNRizydeSbzH2kGSRt7UxF4pogKFYQXhptvB9J7CFCwcP2jeewuThiKYPQTkNh",
  "key6": "2b194W7SfTmZwnQSXwPPWW7UcpSQB2j14tLX3yGp7p7bNimqpQ3Dujvnr6He5WLhwotuqa5TxBtHjHD4rYBgSFNn",
  "key7": "4eiq3dKNBZ9a9TWBY3em3eFBopVAgip9WuxeRjfY675zNvjfqygJCKCPQc6667ce97mXgGxw5g2JWpNENoSNdriK",
  "key8": "2n52UrwCnKRGmZgPbKTcYgq5LE27VyKrrwhjBANaFVtF2UoWFHx5cyyDt7CeEnDhBRhr7LUYaadFZCEoWfTCZJD4",
  "key9": "45CwsBhfwsHEwW2xHhGdTbiKNaPxEAQaKLnskr9TzUEVL9Bo39Dr6fU9Fck6hcL9cwezKRqYd4J7mxUSxRvnaSaE",
  "key10": "5Wceg12ZAhxzLzJcZt616SE5Z6cidB6XnnjJx1f59eb2WMLHcfAdvu5bYW24i6NKGqQP1ki5fLqWnoGMereDwXA1",
  "key11": "3K73gsRGqjU89hRVLVJ46Z1HQA4n5WALWq2tC7x4nugDxf1pVp564WHcEo8Wa12yd3SVi1rdnX3Jto3r9BHX9pp3",
  "key12": "55S6E5MUeGUkGJDEJHgXDbVSzdnRUDYMwTpthifGKvr2emLHfExtFQyz4FdTmbKGcJDpoD1uXNtdd6uvXgBE3KnB",
  "key13": "43R58TyUYtje57u8krnwWyzWCqekdmSbw7rbqBQ5tGVXfJiJKVJNs2yk5zfmT8RJmYEyVTnC9kboSZUqaxfSSdcn",
  "key14": "2PmmE7x542QS9p3CXQDgsQH1zDhkccBrcZbrQaJfewL7AHHEQ66ZMXwLRUucQfu9MxNNVWNEK4APyXt4DWev15u",
  "key15": "5fMt2oDxQHEvF8pxgyVUwiS2EUbse7Sevj11BZwspxRGbKMBnWXRFLFTGf2tbgJfKjnAek4vNruNUws9SuuexcLK",
  "key16": "4DKkbcmwVhURTyQscsFf8cSLYaRK6qoNdzGc12of1RyyRDjWtQxmEZDdoRFFd7qoXy8nPwxJaqf3s1TfKdgNhnpR",
  "key17": "32FG9YkPPXCRMEb1hD3DNUWFKkJVKBj5FmPVGuNqw7FfH1jgSatM9yp2woQvULpe3rSCgH39Ww4eVyMF4wWy9AZr",
  "key18": "4jhVQNSbfuYoEyiXJ6ueJvinCZ2JEW2gGa6Gp4kG2DamxzJcyPKQXB3KW1U1uEFutmPzdvfcjTU1Bnf1yoCsKA4t",
  "key19": "55rv1vuQoDMCNrdXzVjmWvpFQDjL567kJyMZJXKSXkkh2Cwx28U2JvZLmSdYv4KNDVtPLnv85HYpDAgec5biZ8Ax",
  "key20": "2RRRhWikBobh6894DRvxsYZrzaiUWtw4wvdQL4soaGecgPpDpaMafzmPih9KCY3eLsnZCsPzeadiKMEBg8ascUoC",
  "key21": "2APaUhGkeqn9fFbb3dUFBNdu5LcSjFQaAxtriNYfZPikdqn2isrJFZnX8qGEVPRJiQJoyxfhEzXvQ5TK1K6oCuUQ",
  "key22": "4MkCsdgmRTtFBSnEJ2wr5xBStEyeyzqr7s2CKqxQtVWUUoqyFKZKhpi192S49sqZ5NPv6WiCXQntei4ixsMqP5dH",
  "key23": "obCezxQjafN9fq1r9NUd2RNjn7hDCabsBE6RatvQVrmFCX3REpMmmxHczz9bzJtDW86gZpK354d3qihKiQz3xa7",
  "key24": "3G9ejVFsX4KyhjoYr25hJiTtJH7ZgUbfhQVZruRAoajgQiVnnQ9LgK3wio2pouwNkGtd4yRi9cwFoxtDVKMYADS8"
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
