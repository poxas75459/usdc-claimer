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
    "5P1cHGZ3AsZKSrgigUiFEtLpwTz3v1nECLzVRyH4ELD96F76hke5V8GPjfvLS9b9UuyMc7mjNDMSGTtMJbpyZBcW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5P3eUkihbRF6VPYXfpNB5xZ7b8cCkCzvpVvcZdwBs9Ltbi71F1yuvHBbTk8Ef8JxPmiF5Bc6amwHPERo3meC3rfy",
  "key1": "38Dh3NwECGZVMwJjLXzoZ7zoqEeyaKKtgqDKaK9EThYqMtjZ9rDqQWKQAbBt1eb5MkpEPnnzjJ6N1EgerK8F7nzk",
  "key2": "39Dfew3rxY2nps946TPPWAnqWDmrHUpEuc1RX7wKZD88oZTeSw5VwXZzk7tyDq4FsYYoZfQqXeu5eXxxYqBkMjqp",
  "key3": "59fk8zKyu9GySFyV6haGzAQJ9gxmkdQgciJLYq9kpKjrLmf9BdB8SYPqnveWxnSwU2vdcJhCMQP7aSXnEadTr5wF",
  "key4": "4S8KWVf84y8Hbzuxjh63jMFoUKfowTMRD2vtZUfa4GzQaaeAYb4pwnM7dM4xhCP6fx9xiqmujPHugCZn969KqgFy",
  "key5": "39jDk3yiMQdaAXSEjzxMiQNEPPDYJGoy6HHFunmRYqnazGgM5GSFUPYHsQYpZR6VxurB93zE9gKmHhw4aFpwR8xM",
  "key6": "3AvbdHoXF4ee1jjyrp1wG4xbLv7d7bsT8XZ8TX8CPM56S4ezpN7Fkfxi6bxVMLKrokEj3NgqxsvyL2uKuNHvS1GF",
  "key7": "2hf9G8VXgifVoP3CyeQLdmQoviV9yV8e3CDwNH3Gz1QsDG8uhP6kweUsBVCgcSzigdPHs1eWXpHNNgmxgRLXqGUD",
  "key8": "ZF1bDGEe9xCPhzfvycL2a14NSk7GgJD7qREAu7pFNJcuThvWZtAyzvc2LqYzkuYUUoSDkKC8YC3QV5XWoE4spWD",
  "key9": "54ZoZZyG93C5GTrSiRp3r3fHKR1X2A5a7fE8n43XD7QuQzyjtTDGbNPS5mGrKAj9BHgAf4FJBLbSiJh5fGqUXLKA",
  "key10": "61EEG5KaZRnRzuLzrPBYg2hKnJYWuJEfMeEkh2U7FjvKwXSm9TvZ2LQce3Aq7kkXTD1wE9JGevHVu4gSaK1DHG9L",
  "key11": "4DwKPDbA5GdDvZkJedr2pWk4o9sBRTACeHJt2m2YkhpSvwQDUy9QQoMhmBr91VZ4VhvSZNvhcDjG2DtazeicZjCK",
  "key12": "4WDbtQMQAHR8fPEm4p7NQcio9ZZhFXp8tyAtr1QdA2HMR8TJc8z3qyX7bf3ZS24otygsADxzdT4cS8T551XhUT8w",
  "key13": "4Ug91m686hpoc3HFXiBHSGjw5HjfjNLjkErurJWD55ru9HmnYCX3K5fgCv2miC6hzFB3x2gv3MkESHV4dKJMapLf",
  "key14": "317NeyEVpT9MjmoTFuNLBNeSaUpfnd1e1YCTGAfDuThPJ6FKsLgkw16JH9NBysQCiypJAgLWcoP4kuvWGPrd3VZ7",
  "key15": "365b4iVaPuEdDnrEGyNPTze9aPGTHe1SaJPU9DhzdxdHvGcjCstrLvHU5Jg2gM26YdSus1jr2rjZRqs4Y2dLH9Ve",
  "key16": "S116XGBejkMNrLoTsGuDkzmdJefqjzLyEdZBHXG6gpGWYXF6jRiUhUeDG2GGvLiEnqtZn2TSznyKiVYott8bMEr",
  "key17": "5rHCiZuKxAzQJUCQhQXxmJ7M4YWHVJQ4Y7Zxo4bgro2Rg5SwZR2pfBYqLAFaTBsTAPAE23Lipj7Fz5J89hT6GGG3",
  "key18": "QrAfiVUdFu2QxQ2ZuWmwDkqHeCnEY5XbQ5GHZYBQ5MtSjAKDW6duBNXautyq93i1BWPg8GVKh2Y6GQoa4kzGbVj",
  "key19": "kz93ZJbv7RAGEcksoU9MQ65HYCPVn8PSsBe4qwbRL2r2jyNPSD78tNrfEd3PJ64dKhG3iobuDwM5wWxgyH7HFqg",
  "key20": "Pe5kCu5qZycEJMyNKpttx29m9aR8HkJQTH4CrxtRpgE6vkzQz6YdRMynauC3epriwLA2YgeoPippE9xn53Hpe8V",
  "key21": "4hHQTtAmmNvY3zEwc2TqKY5PxJ6uCrmPw47LJrtB7pDL34JkPUY6eTc8P3AcJnYZzdBuFQutYKE5Tqy86tt5Au3T",
  "key22": "hSj6sNTBTWoNTPST3yuqqV8znsjT5MRLPeiu2DvJWjnTUrgJvHiKFo33a5ioEvEGfvUuk3ZxJZZJYv5YWNWbkJA",
  "key23": "3fwmcPXwdWejSnukhEHdjAUhDa9D6PceJFq2ja2ZqkBxm6FTsxJuTLkkM821Vb8FXtaTW4kfj8UYPoQ9rUZr22Uc",
  "key24": "KRFKdYobDXVDFfnmXCU5ha8jKuwK1HFbMVhakTr3PAdoZSPHm847F8xNiQ7HSjfA23opTyu8oQ8nvmszCewW1qi"
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
