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
    "5hv8c4xVrRVPRsssrCua8Y9Krooy7fdCBKwKnkTDEjZ4G3pZhju6vyLKTGh2TTn4RrCjYBRpdWLJ9XAN7UYbpsvH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3eWxgc1vZKBLTkdY95fC27bJihHgnJhCwimcvLqfAfVSU8w5evAjEYYjBomNde96dXFaGDa2xEwBgWDdoVxM6Umj",
  "key1": "59t1bg9kTjHNh8Chw6jGxqdgfKt4DbHd692NZCXPZs5rkhL8LJRWu5eSbNHYA2PxVNwJFHdAFkJD4Sjb2jf1y9jG",
  "key2": "672xGwnLNhY87NBRXCUotu37oScNzqLRMPAV3NRYtQpV8vduLw2CoGmhad4xYX3uPgc2zwN2NeBwzUQAB2fzoXkr",
  "key3": "5cBHWS1KWzeBd188xFieJtUSBVGynjnQXzLLQMQc9Us8EwC31yHQQXA9XJFSuFetrqDWR8B1Yzqgvx1RAUtPncnm",
  "key4": "25hbtpkScACiM9rZgRrTbfmvHSXHUESeP1FWoW5KLP3t7aFuwQRjzUKB1G9Fzad4VJDQFjHQa6qMurYYTeg7MjZU",
  "key5": "5iCa26Coh25qUHUK1sXsxphB3rY6BaPMfVGa1rVRuovaoU8njaeukKGmrVMybzr4gpkJsqCcM7sEvQgTMkKLY8MF",
  "key6": "2cHcFphGGpAy5nhTwSW3hHNjkBSeUnuzWZZVT76LYfvsJQEDfEpAiDXRWwJwEJjgAGKfScqvMJytjAUZC3cimCdc",
  "key7": "2VoBY5WgJZmBXKc8iVTRm24fDd1nQMHLLGt2CxR3R53GGM4wewRpLVZ74ktNxoDvBDVfrRtjVcGXLuaGMSkqisaG",
  "key8": "3D6fC3jNuPoqmtMFwduubPzV8uFXtmEFzc5SWoRphdkbVmNCakNt8KmdyZsXtAHEj7rS3VtrtK2Pr9MMeVw3jmPv",
  "key9": "uMESC4hdrtVmpTpA9LKyRedrckJeZyyq6jXymDG2ifXm5QrupfRyCr4hzaJkG6eZUwivuwNArMecSjvzUuYuMwv",
  "key10": "4kSgkxmea7JQsFNfyS73mueSqDD9TbvYGyupoeHw84MELmUV7EPbVdrERcRyQFztVBgRNkr7MB6w8Q7z7E5zhwR8",
  "key11": "xicKeAhL88WPjuP1UUiJRjMM118MfGRpwTR3vj3P41SRhNqLHqtmHPqGzQgUXJsdssrCHKYSSmCZvffoBygSC9K",
  "key12": "3wzo5XSGCuu4gFYg8P4riW9cKhUqaZhrcshYjYHvaGN8ZGvSby4YmiKG3D8NsCA1J1vroFvV3e2V8vd1x2vwTZPb",
  "key13": "DLExVsUmhVeCgGbaMR6KFTHDpqxchk1kzooNLTpzCT8uFJYNSHwzaYsf2Pr1omXCn4AMhZKKYNpyJygRSuNoCVd",
  "key14": "3vCSLCJcCAhpEBVT4owLoa7KdRz6PZo7ZPLQsxb4xNHos7q6cmqU96gNwwkvuJqtb6KQSFnyHEGfWDxEe7EToQXv",
  "key15": "Emqu36nZRAecYRCjU9xrH4DmA93nfWsdntwdMtH9R76gHg6c43DVx45KBvCnwvYfUZzUkVE79mCJZ21zednCcVq",
  "key16": "VBg6dm8GtiE8qpA8rSzWNy7t5jPDzCZUr6HQ4awQxxjdTS3kUrd5nibkG27eeq3NiJEVYPTLUjJoCD7Q9bPQX3o",
  "key17": "PaSmBLzeacfuyPGi6XUHqwiD5S7e6nYjE3u1Hgm69RyLetL67te24y8p9BgjiKqLvreMHoAz7ci6rhVBoX9VsfE",
  "key18": "4UYUbtHETSS9fNhg7guCUVH1ZZYvezRFjhwsBJcbP7BJsbHUEuEqv8SCNbeqWLUgjcMAeSEbbBDiD8VgK2y7zrwZ",
  "key19": "5Dot746rDufVi2iSrWWG5HhEpz6sBNwt4j1Uwrhe3GgvGmwvyenFkHHUyYQtNsDuJ5pkgPfjuoDcJEjEU2BxG2Ws",
  "key20": "5soQYCiscezKmDj6qRtVQf92goPGrXiQGB1y3jR1EvyqAH5rg8PT3VS3Xf8YMEXNF73529xYHn6HNAFcZa6aNyfK",
  "key21": "3c92q7SZFCwMWKxFqPuAymQeJseQtitY2gG4wkrVk2AQtuukDz3sQJgAPw3T5KQprX5XfQmza9pEwwEG8DkJMxYQ",
  "key22": "3LADHSBESfVyaWGoYExJLNafsc6VvYz1wxdhgkLMt4hfqDoSki6jkjj55Yhkp6RZKYXhxESJzZHSeYA5LTL3uYNF",
  "key23": "wZReNemW5gRtwWyLZyjgpEegNXDwa2LwMEP4jKH3Dufzj47uN12yGKL45AG97vXVzzeryKsYSUujuxVDxAn3TTV",
  "key24": "3gJh6teZwMsTSRBr2BXXXYeYrKQWkEubDMqvrEHc1NepE3Dm5zyPLdz3bc5Fsr1h13RKbs9qY6N5YxsvjXkSxThT",
  "key25": "3K4qBRZHiMf3MBVrWLKAjjwGtkuCteYQG6B89J34H5HwEajTLh5cWBtaaBobhKDanrmVdWbJNujDDUxnyNtk46ca",
  "key26": "2TjsduLppFtQQQnrNcr5wgDKGBUbnBeKW14CgpNgZRE9FqhBjFeNGzoS3Bd83MomuNGnZP2gCHjaGGo1nvQSP1Tb",
  "key27": "41bUxN7jU2NbwQ89gCmYsLxF53cTEtWwhEttHtXXPg9mGYmPiBSt6nupJr5yV7YBqsg76fNSpMKBVjRVcbPKfq54",
  "key28": "2SYpr3iSKrDuQdKEGWdfgdX7s2Jfa1sgNRpugXGgKmoiWLP81f6HzDnYyPwBi5LXvuDXeAtvBNPi2WJXoMx4brzR",
  "key29": "3pqB2BNWT2wc68VzA81EEsQUMf7YoyYYPwfNwR1SpiZ6Qyd5Ck47C46h9P92A323k68et98TKopRSZiWrpDGfrNy",
  "key30": "Js1v9vcJj57aGm1yFZW9L5vhE4w5Jax1nz2WfjPBt3NbMX6j4ve6JwptcGY3muZ1G3G6NsMRbUpgDtmoBjrYKmY",
  "key31": "5ghCviL6H2VnkxAafyFpiK7vcEKfKSwYVSHivuRuPzqHnb9ardgiqAfUpgjsUgSDzrUxzusgsWa3bfZMcFFkZ2n",
  "key32": "3RNbMWBmq1j7ryrMyudUCeWvnPCy6SGLtASnbdt5gH7hwN5Y8mKGeWaiW5zTNRAhk1i5BJpbxt48hsPb9JVk2adb",
  "key33": "3Jmbw6D3VSdYPwafffd6F8822AAK4kMaYM6C3ZzTJuZMhphCgakVzH7fddxR7BYzYXcxVMPTayjYFWxA6jMqUywY",
  "key34": "2aqfDP1XZNwqnN2iigLyZJWeNL3PAaULjDsXH4uSJs8qhXtkuUeG4HuL2Tx2FRaoQyU6qHg6W28rvWz6BrkoSw8f"
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
