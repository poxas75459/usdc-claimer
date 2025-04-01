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
    "3Rc9MiUTL6V6VCwi6kgT6JNj1kj9afiwMoUpdLHWsWAEdmkrvK33Nff4JwbBxUwCV55bFydgpgaZ1mkunDYnB9tF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "516MpzKHgUifDxAowvbCsWEZ6FQyn1HDxFXowRqERxhhFprG7giqLDXYoQYgLcsMYQ3iL4Jh1Cxay1GvGsT4UbSe",
  "key1": "2MjRXAFSkCMDAhdwSGPPvvLYVckHuiKUnu1RRx6EZaHk4FPYG7RmLbR2X2w2AadCcVwrFsXobP75CCw6jMYPVB1q",
  "key2": "H4K7hZbaW4YdbQkCGfkLVmDLSbwYZDBLZjKdW9wnZUg5twaw2dRZwYpK6MPQNSoSCw6XyY264cNJdreF8QJyRuB",
  "key3": "5gZxh5tHULBXtcm8i7rUmbhn8M9XtMQSUhZu6ibjhHX7a6uXFmDmTXXuuqGaShZR6u9rupMzwwxujN2iY8jBrHWT",
  "key4": "5aRrYegPvzwzgXELYqryJghMD5XHQxnBGN7DGhMdVoetAYzkaCUzvRXTAebZT4SxckYsAKQYpsufXERGfLE2b3qs",
  "key5": "3B3GrAN9NKYtayboeqcFPHKtw4qyjKSH1itDEYmGwihQPgouwLPv8MakdoVvxPrjmjtLKWdjuqVnoob2536XwGky",
  "key6": "5cEU7XzkXdWQRJKHHVh3VAQGFFUqP1GtcbaPPXF1KEgtMcfhLcPfhWYDqmCGfv1w6vZsDeqwgD3fC7bsYc18hhwY",
  "key7": "2NkK8aL7LqJt8q1pH8zgh3Mm1ZeqVu8jvH5gpt6pY7xN6fgz5q4Ni6zY1QczqS4isbhgja6keyrr1xvKdYH9rxwZ",
  "key8": "2FzjZ5yScyxW7wS8zGjsKzcj7kb5y8C2e9byAogJTJdWzBvfujSfDZhJdd87jWU7Hwawb1BnSAWYQ4mzWC8dS97k",
  "key9": "46xar8WdZebLyoPB1Kxbv6d6yA5DmoK43hBYGJS2ZqYYPxGu6n2HaCKbxwFLoF4pwwKvhMMnaVt7V3ZYqELK6SjP",
  "key10": "4QL7kd7z6Fa97MXG3J9zWtPJb7uUU6XE5hmqSrCDGYFhVJAdh2kUGvjakTuwT9pr8U7c17oZUCYop4nAfVavHfmv",
  "key11": "296Mv3UkLmiUJp2Q8eeC5X64DiNFaPSnAB51Fon5MpzLQRvosowU7ZJnUUq55T8CQuLWFyh96xAiGeScZwULdYk7",
  "key12": "4GbCU5bRfXSoePwGQgsfrRFs143fU62wFUrEvrKi172cUY13i9UqHNKvuxPECmDdki74RBbzvEtaqPF86EWCLBVK",
  "key13": "49rDisjDGsLFqJckebpciXykfLfCTYFRb21h9vdK8TEdw51qhgSgKdsEzxHcaCyqiUzsmrMSzqqLeojnSr9aJCdr",
  "key14": "5YjsLfNKn9Txd6sNNJWkCfHiEuRGtAkfF83n7ad5xLCQDneihGPkQiJVjw3YLwgcUzKqW8t2DiSwFwmEjnzhZAe",
  "key15": "3yiEfCrDAk6keb2TsnyD1czPsdFGfFBKz3UmpF4EnqWopokKDLtTVBGx1Q8wNvM6oXhXhR5JX8Yeh7CAwZNibVpc",
  "key16": "3oEoRjAZZ2X7TXnHz3kNEPZCemeLFNDkAgk1fYWXctHYhwLAhcKjXGUbEkbdbvLFgL1v5ZNHGd5rpcCRSzhTRasw",
  "key17": "2Wzhb6LXvYpLuMby3oFXzPek8xWPkugBw93WYhAZaiysinr6Yk7Us3zREEZH3pgWgWALDTEcNwipwJHQRwhug3JU",
  "key18": "3MWCL1Y4HBe5ms2GDsVma6FFcXgYtkxETs573fqZh4UMfyHXjxx6btn8WN7LibLxyAWjFnco5zmkS8Nn3X9RMELp",
  "key19": "4Mqmiu4g7mfV3URczcuVJsqXd7WE5NorVBHyQnz9CPwMiPKmGWvy6PBZGh8ed3aUqrjys3uQUz2drc5hDpbT2d2t",
  "key20": "XGP6wo5auVsgeXsYSQyeGpHj5S5bGpiCTyEcs9CJ8HhcL4ymtBEdcv8i4G8jenqsSdtLvdShEtCRrSSiymKYXRS",
  "key21": "42W5p1gNVAMmKfaaRqG3N1j2EyPhXJv2EGVHrwFnPtGzeQPb1SiY3KxzyqpcwpFd9jBLFYVxhGDg2fg2osVvz3YZ",
  "key22": "2tHTkkA3xr5ESpMgEWU8ADRsg7D6oQN6M7PcrMKXkmHwh7bePzKyVoCENdmGeZV5Z3hqBwjjNBBL9pSXsLcJyebM",
  "key23": "xT4PBeDVPCJkk7LCthrNwe3ChiXMeFsobVgbkqar9HfqMbyy4zmQLQHrHW5qSk1WSY8WsCrXwNNBkNthTit8NJ1",
  "key24": "3ZAqMuWCzabn7zoVHnGSrUwCNTYsCunUMyq4ugWitsx4MpoDnjx1zkp6J92CTXDgurzK8k7U1NZk9kpsZRcq9Zvb",
  "key25": "3eoNqNAYjYSKBbEvUk1rUMz6JK7adtP4A7YEkfRT6eH7dqJWxLH4kk3VxvKz5J15nBqwJVzenCZHcJQDjCURfmiS",
  "key26": "4wEkRWAkj5u9bSvtCChw7phYWk4S8MyDuNH4LN2wznLARbbWTw5bAPayHvjnLJLkmJEysWPh7zemehrpJrCwxdpR",
  "key27": "5HT4n9YN3gBs2BLSkNwVb8Z19jmU2JbTBp2Y7XZZLG7V9QUTGG46LJ8bjSJFBAspgu4NwYKE6thvzQbr5d62iQXP",
  "key28": "2ksGvUeTSnEjBT7RTxpxujsS9kvrXHHTeQjZzpqvwjTWM3tLLZs8jPvfHrkynGbEW1a1F1r55qQJMpZLA9Y2traZ",
  "key29": "4WMbBSoszmQ2xio7ULRxR4gXyYDR9SM3fmNDFrDQ1WYC721NdSPgF2PTDVRkEoAMBevx9bYTpabyZiRxLeeTvNyr",
  "key30": "38Mze5GboCS9LdaLGHYmQUnCLkXNTwtRJFaAnoEik1suc6WpX2uVFgNweKx3BAbgJ8VdoyVcy9MVMzjPciZ94qMC",
  "key31": "MQEFwFu4GoZX34PmSKSNqaYqWzN2dTepEKBJU1HFeUrEXTvqerwJynUhD4XsDnvr7AiwM7uwMkxGzQhxeGpBiXX",
  "key32": "QkFA3YgyyqGtjo7FRWd1jV9H66pQyJUGqKQ2h5DRsBr628X6QEwLaLVM7S9ic6iT52MDVtoZEDmy7gEPaSEgfYL",
  "key33": "TzEetw15jQ8tUUjdJWPhiK5EHWomgvB8TWvAVqEmUzCoEDbJxkdK1C2ZAvTU9x8yzzUAkTo2zLLhgdHLt11ZccV",
  "key34": "2CVJfhofNNXdQzDti4xZwNdakuar3BaLVxUC1q876DfvotWqJ1BTZn6r8Jsd3oW1ddNhtxFih9pGRCr3uzESCvMf",
  "key35": "2tcGks5dFm9CzZWGMvhJpSmLA3NQ8f8rcTxQHM1CbpSfLR343ybkGA9sCrEuG7TZweyNMbckSFKQheTfHn7Pvfn",
  "key36": "2WBHCthXm6rztoMJHVhwXbf5b6kQaPK19P9Ph5BSyTsAxZHnULMkdy893jac5x3WTaSi4mM73rYXVBLn2gciszJ6"
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
