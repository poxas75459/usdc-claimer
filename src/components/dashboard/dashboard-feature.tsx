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
    "5D3EcsedgfXzZbvN5TyjwycrwCcgx1wfkug4FZbfzhbAMN2LHECLeJmUEeEj8dLSd6abgww7mSZxejTT3aopkU2E"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "58u5VZA7NHpQx3egd7EkwRJ9JnvKQPZL3n3SYBZxZWRnz2ZEpzvRLKXrbhXVw5vz39iPmw235VTddkvSqNVA2efF",
  "key1": "YDiErjau77VYgNUnwDzVKg5Z2B234L5ftwSHuEhP9UjmHW1DSNSXKnUUC6ZqwhnhtKvXCLeiuBJ3HcnmbQUF572",
  "key2": "5wkVQ5sARvbtzc1PWjeyHDvWbdZ7FbbsFm9KrjWFR8cikvNf6vpuVjjSUWtzd57Vmk51Qtw3a422ea3fpLKLsvXj",
  "key3": "5J5e1nF8LjTYv7ECqtLBZZ8eeRseSDUgqLWUmKutwL99baw4cPbcBvCZgMxyrgFSR1C6EiEt1ht7hjX6uNTWyAwo",
  "key4": "4hdG7yBCRrLHziYwtufxaZ4bc67tuqVccjFdXJoLeub1EBMhgkrqMo8EAbP1B8PMJjsxMi4SSmFTGW47qTq21zmE",
  "key5": "61ReQJJX98tTpo42s5FXDxCpyiVzJBGixs7pjPzrHwvpikBGXBWirzxQn6pMYss28ztzsZPVmLyGTzPB68BRdwSr",
  "key6": "2zDeKFaCSEfjC93Hi9W2Ceb9UMdMka1iroGbuT4cRvKWXxFWTQFW1VsPLTArnWEWyArZuVJGmSp6mo6VbN3tQoV6",
  "key7": "SxsKVFf82EE6nzV6PcMxrP77yHBNLGxBPzo4W7xDpEkt5PB5WUgS1dGowtNfbgMenWQkKDtjNBZY7JwsNjM48By",
  "key8": "4hkYJD8BNhyoyhs7qX6sk9bZuVtyzHQptfao99pKsWDFQ8xq1fPsvjkDHs9rFMCPYk2DNcdgWswRaEQ13FMcbGS6",
  "key9": "2pRfZFPpQpVimn16FrKho3gcydjty7ehyLFJwYrvYLoxQ2X17xZT9E4zaezpg1ogstGpZ1CoEQGNPgTNYSoGU3Pd",
  "key10": "5RJXgxfG4nM7SvmRVeYtvUKu2X1iJ3U1pLoVi2vymYiFyqmH1BymVzB468zNKZV79Lt3FtEW9uhTc5JDVud8uJ9a",
  "key11": "2YhD2Ua8Nc54eearSVUGKAmhqjjTnxjrVPARys8RX2rn3X3KKXdCxrYwFSXvxxcKnf8TcbExonLYPXEULTcRQTTb",
  "key12": "BsUHKN7iVYsDBJvuXCefWJqTdyFVYTvVLbTqgWwAHA5NECZvA89TiiQ4ZPQc7m6BSRUBHjWuHd9BSw6Pp1XWUxB",
  "key13": "2qmv6CP1Kngwys1SLXPmjK3AV8meM6uve7Qh42H8umAjqGmTEi4GBsXYe2WAdYeEPVGYBBy1HPcGY9ohZ1QpEM6U",
  "key14": "2g3D4xwtc8QWFwkEiej2YQ3LrW5TcDeWvwU9QGCRcQ9y53fFVZYjFJWmWMWJWRwH5EgbDdCHYwVqhmjqNTiie3aw",
  "key15": "5YffSwJyPLKaXTkCNSNUJLzontZLhYQjkYFDRNVn32FvDAzncsCBqThmUqhdD9nzqHNMyj6Mrv1obHzu7bUUuGNy",
  "key16": "nnpiUsSTh3ZzZQd5SsHqMJnceRXnzAfCgcEXxmNenz9A4MvF1UMbzHbsVyLA4E3qbvENBeV5sqS5g2sHZnkcgAc",
  "key17": "4wtuZyR4NfNUqPezvzMuEh8aH2U256eLcmwJSvzyoDxyW6uWbYUvKeAzTjScjJUL1UU5jFo8P4Y7CafqJti9ZXGf",
  "key18": "2reTh8MDouh8KRHBg685m5jBUWFozvmp74DXVcABM89dmCT4Wq4nCW4xZYQm4ceLRPx5dX5bmjnVQ1ER1nzMsuie",
  "key19": "2cX1t4hMTcfVwdXN1KJx9qN3JoPpJnewN1uRjBBahWqXwZKFXVbdVMSNDqm8fJ5SPPQa9yfYkSMBGRbzPSXd62Pe",
  "key20": "3ydt3KhYQ4QDPPttBv58y2KY7TMquhuAtFA3DyPVDz3TmsSAsdnurdcAHmJe4z3YBn5f2biWtdkcB8haDksG59VS",
  "key21": "urh3e1UkgXwvU7B9VrrNLf7mWYcP8ATHKy4k6vMu8HxVyV8tXv67qSCA1WATLthCuUjNfEcLFf2Bcan6skz6ESH",
  "key22": "3pYRDSYqQGedeqHvTh4aYi3mAobdVyGCRAeMt6AxQbnqoggdZpZEvUacq5GVv85hDKTdgG5HR2xZxCnPDDPqUzEB",
  "key23": "46jDEfhbZDofbLWecWHRixF1Bcr3TqrZkGn2XKNpJweYicxjTv9kivcAihcGbGwTbooUfqzVEkQtVvxKST7NwRqF",
  "key24": "2X516hvHQFSVSqCfk6vooXZE6uxYSkELXerTpGSoqhbFcUyYWzcDUFNAAoNnHDpskFQG1h4W4tfn8TeVBM9bDn6o",
  "key25": "2yrXNWYeLLUTNJMw4avjkknqMWJMDNi5W6t2i2Ww5VWQDgTfHKxetypMnWippYudfsbaL4rrUZEY9XNnFpet3FLH",
  "key26": "2V5KP4rneQs9pzqAN4fPfcauSPEWHuH7r7z5Ar2wd7hnVBfPZ94a74Hzyu8waXsRuJSnB6CqSJ9o5MDpQNa6mNG3",
  "key27": "2F5ka2mSid9N1PanYeZTqSTJorhahForDWT5tuD1KZ8MgT1zT5YNgNG8h9JUgr6BVNHSQsrHpyVfr1NPWtQrPjrW",
  "key28": "bzsxxFvhEc2er17SipLRte25PejYtV1oLURbcqLv3mHMN8eMCwyvGMr8eiHAz8jKJ2ykJYx6XkMTGjWMtGa1Kh5",
  "key29": "5jAbNNcLs6DTLEXtejpqVwPWuthXMuaqQPcnCxB3JK5CdbibqmrpcWjKYgf4D8mYbqFFT7PFRtuNR2EJRnmTsTVh",
  "key30": "2G4SBcEvbsY4otTU2pouKPG16jnjUfj6nhwQUtevX7AEei2LiGcyjxMWEw7cGemj2EtYr9n4u782Fu17Mem4Bkoy",
  "key31": "ubxPWCJMyXmdWVr88EYpR2P6UVxMMJyuyfZu9nxcM6veFX5s5yHQmvDkDcdiCGmci2QK5YiRsLQYXaSDTfWvHGE",
  "key32": "3F4nWEqY8zhWW6TVhMb2WpibFmjWYTPRTK2hvQYzzuVPjPWh1WPeQp82XGSi9XgbkSdHnPnuakEzRhQZweKVntYx",
  "key33": "Z5LUHUo9bNgSS6PpwFLAu2tSJajpb54WcuiR5onkEW65kpHPPjsp9Afo2yBTcwNGRdooYw3SUvHYuKNxoTx3vaB",
  "key34": "386h7nYqk4mCCxCw9hsRxo2gjCy72S2nDwxd54MtHpLmcUesNoZ49qauco8LQq6z5wB4GwVGuBg8zSMcN7vwdxnJ"
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
