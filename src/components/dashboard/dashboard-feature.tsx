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
    "2Ven1NnnXPqxGY3c58YerTrXRusjxCayhPBS5cyuPjaYWLP5wWHqSTGNwaimh753YgZ3c8i1DsSHsfT8UVFoiJXT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Aqn23pQe9zdrzZHXtwsyTBEpVVbHyor4Sp8FEDpna92H2xhfDizyXXKSgTkiD5bB1LoF5NqSyRKEv6RxbX26PFj",
  "key1": "4V2XG5jewmh5QyBdN8MN8ZYcBxB5HmcPAc8HLVN9NVQEZEsnjd5WAaQYf2QUfhk1YDbJ82CaPBP4MxeRPn5dS2sR",
  "key2": "dTHh2kEU53uMK2vTeBkQYviHVJj9hBBTZ4S3rX8oQsRpaRes6sWMdivR5JrUWsq8w6PH1XTMJej8RQNRRfnCiNk",
  "key3": "2qVhSDetrBdoxhxaQav4D4dkFYtLst5qaCcEkSLroNeaacA8ZWCHyEAKCeXoiGAqrMXvkeyVz9q8GRdsaFcMgRpq",
  "key4": "2V9Rzv5bPDqrnnXMpmh9XH29achZ6YBSjwYZXXPvQdMiiyHkwMwf9TpBL6rEmaT1p7p4QNjAqDqvUZt2WAA19d6r",
  "key5": "EUwSq7cQubDDuYofpSnCrGwZZ4LqrY6qgCYdBn7sSDUi98zUCzB1Zt6F18DTWUqmvR8QxxkUNnR4ViEvrVW1JBq",
  "key6": "55Ucd35SCnHqtjjKD6mvkwaNCKgQT9FmoYiH99m5Qgw4DpAmCT4otdSeqbhWza4qpjRJJULotB4aPjDZmQcpgaNA",
  "key7": "2bQ19EUVq7ZpnL7dpHRiF7ZBs9fXLwPTjByojzvHM7wFsMrTeiRjX1BVQzEpyFoJew2N7HyUrTFeKmRBuLhLPgzY",
  "key8": "22L2B6VMZJuJHkWkeJRepikRQMRkdpU9y3frm1XpdoFZZDzJbcArGPcqUaNxxSgdS4A5frJ8uQ12MH3CGdBPNA61",
  "key9": "5D2jY2HFaJzBM8QfAhpS6gAqApt6tKB9ffpTh8u64JZCr7uky6LwAMn8AdcGMJiUmAkt59XrbyRE4ScLUDKfAezf",
  "key10": "4pS8vihURgvieA9fmiN6XdyYxTKCTj4vBX6W76NeLzSc3RrNvg3cJbvbWrqES7nDS1kNUvTkPLYeqa7g78hg7nnm",
  "key11": "4P4ct2KaKWjbFoXeznpWHcb4DF54ge8aVeE9Tt5BPHeTNR72zKySMpsC29JSuCXAsVgbRLDD2NfaPuEdRsh6iV96",
  "key12": "rVKfkHZFH23jW8XdZtBxA8mp5HPwD8Zj31DMEC5ZUJfHY78DwbkXcdWWq6zQfszAVntRhkmJWXfUigP2CJJVdV3",
  "key13": "4AiRzngUYgyAvq6KdQNkp5yAgCUzKbQGVNJkk9SKXYw5GJzE5Ao1RfevKS1AzRUGRHYg9QUrp2hpJChRbZY4nTMc",
  "key14": "2BTj2DcgiFS9ugpMUWDB3bJhtMHVJi2ZZLCbCMcmYfaR5aTZeyxsEWYQx5hRSix7pwiY1aHLDamcgNyefMvg1FKo",
  "key15": "5bCchhXzZeQH9WNBa6agstmLzQB4bNgSokNKrWZZ1xNzXDFMwCi85woGdkfFkxNjgjdZGQ2kiFLMQMNqCt88erTA",
  "key16": "kgvFq2fzyCLAcrbEwRNcLbYoqyH2XqmtagYajPN7eHXUcEwXwPy8QiGGg7gb1NUmFHXZuZq84uBuGekG8mtm5Gn",
  "key17": "2gB1HtvzhrreJE8zShfbZiq8opESKcKqxNyxjaM3ePzXRunR8rkKrmJfmkVEp6HeHMbEQs2pmVJYNaKxiykiuvo",
  "key18": "HSuErPBXGD3LmFh4gv3d2VYnt9RkBWZm9Wdcvwh5eWdqVWuvSwH8Ta6iMMW1B4emWLQ3T3ELvHvuLezq1GRYVha",
  "key19": "5PzUoD9NY3fvEHihpzP543BqY2RRzx4psCKYGWAC2hhdSaPaB4HRzxhN7bTSjGXs3omtV9eTHq3SBAWMnZKQQxr5",
  "key20": "2bsviUbvVBSZzi1xNzNohhxDXAWQvi5XZGLLuYYRVrpzQDj64niexB87yqTQGEUS3h5MFs3ftmuNwTF5BvecRY6q",
  "key21": "4ZWMjZysut5yuJBqtoFCoouEL4fKUCEQfeC8NZiTuppaug9Vye4Yyd6siyrPNzrmsSvtJFKQumUP5zvhZCcrMYJD",
  "key22": "27apiLKCNcs2fC6uBrEkDXUG6Epcww7G2Wzi1nZDbmJXReEzvysALM7mFBZnuko9AooWbQSzhfL2EamSJ7XFhyNj",
  "key23": "2r9AewMqDpF1mTYb4M6KxMr3iSu6xnUWQGDdog6rdPK3vdLmJDyJve6gGxDD1Vvvk3nFwTyLfZASRhNnzsUcKEL3",
  "key24": "3kAK8QnBYKQJA8VtUUabor2MgvTnG9kwZJK1UpwUkwYo7AFaD65A1R2ed3Un63cxrQHzcvQkFnNACE8EDZ4pmyU4",
  "key25": "59oNkEzKrCKXkEg8VTHZpYjUeAe9pNBFoxWcUQa4JDx8WEtkFetJKsHN3Ugg6yGQFr4SvcsWzcd75zCqQ9NdVXME",
  "key26": "5rWhGooZg57FjWrrcEUZhmdrHaJBhk3wdz8auExvByaLLTiNVDPNVLK5Pm6rNAexjEaVLVNzKC6F2SsZCZGRnWee",
  "key27": "3BGTAYBKgPVY5mGGY5pwWQDfoCA5esN2MW91D6ReSke2gNuRtkU9tFQdJoNNL3FYRdJHifAeSer4TEE5wH2kbR2c",
  "key28": "4k7YoUsY81rL3g1gBzVByZ39JrZdSXAhZqw4CazP2EnvSh4U1sPvQHUssiiJmvx4B727k5zP6tSReqC8SuFdr8G7",
  "key29": "2ntyPFGJXpEhYUr93K5NSLPdFCPB1FUu8FmRDi9Cw1UYKzm1XVVdVfNMCqJezR9LTUzYPMWEFTBwpbsesnjhDyRU",
  "key30": "4cDumKBV3cQv8CeFGb7NXNkY7ZCtQBLLuEheQwDbKZc7uVSnYdUjzkkS58wBv6XWc8potxtQThynsvK8Swc99Ejz",
  "key31": "53d6aXDNPQ4Fyv57jV1x5DyhZbCXEnh9RdDdYtB9AJ1Qktks1hTMGHTybmar3E1mV6in9GS59GUK12eLG4gN7Zx7",
  "key32": "5QC4XDgfHdcVzj8NvcxjUmhJoYAdvUTi2fUpE1SnXJegyrZjvDGohAdiH1zsKiwT2WJxi4xdjUg6zXGUkDrpWTYV",
  "key33": "22K6TTajQoYbGehJ6exDkepPjvPYqzZu4WQNLPufpS4QdCCE3FzJ6GdL2sDhdgJ2PoUUjqMCfMukDWkpdGRuTmsn",
  "key34": "oit9W1D69bAbDRXD9feTXd9GrQQ7h84V7QysWujqk8P7FtM85N3hrZZWkJGSarP6SRwiUVThzr31QwJ3zF7MBjq",
  "key35": "55EkYPP6QzMwqhCA9DQzfquowHNrRsFEA2FomZaY9qLii7dgPBVnSwpbNEBrawHGTxkeGSPDv8nNF4x3T8soP4xL"
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
