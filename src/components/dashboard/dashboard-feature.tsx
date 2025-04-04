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
    "5h2ru6oYghyP1TGJ5QYiQ3cBKNr7SLwXBz5mwhs3VJRUM19NiFDmi1rwjzHGwotxEsDyWA6xBBcww2jZbrFhHq8c"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3vXHrz6WYnqrMfL8YQS9ib5NxtkGTquya1dcDKAmjC6yMfsZEVo5se53DH5hKr9GJpR6WacU3gaETmepYGgGRoHB",
  "key1": "5BMnaNP3C6Keyq6CsKT5DLcL1U4kMD7fm8cMPmVCNEbEcq9z3yCanLGoBdCfjuqYo1dwhXsiPKPeodGySF8nBeKX",
  "key2": "x6kr8QAkUHLMe8jP1DFvTD6JmhTpA6prJ9wnME99fz4a8Lp3J3kLRZnzRjAYkF7MR4NPosR7r6XtFT7TkHe4YdS",
  "key3": "36939sNg6wBts48pYiUNhjDXqwgxqTqQPi6th8qJeBvcnWYZBHiFC1qQpUXnDNAE3L3yU8iszpiz2R6FUnfLwZxw",
  "key4": "5zju2yZqdV641eeaerfJ5Vsb2kiiYqYHvwt3vXy9tdB8vdazxG77UbSmCyc5BzCeTEm8J8giXHj3qXnUujHBoDix",
  "key5": "3JgGYgJvdgGpGngnry7ApoE9nqv5nD57TV1ZxRF8TszU3cELFDB32LuRe5GSeNvzkbcqiv4owXk5tjY82iERBzhB",
  "key6": "4iufEyJDgLLbjHCDX6ejZ7G1MREEdpWDV8SffJAtUrrcfKLwZJm2hN2VWCpRedpfwLkk1jzZt1sLFTmVJ7BVNr2b",
  "key7": "5hXftnyBhRXk12iMDsxnAiDW8SKhQM39UrWBLWyC74BmAaj4FE1becrP6qP13nDtnJahz6ei2wfZ7YgkHSu6Nomn",
  "key8": "4h8bQozPGTYg6opxYw2U1Vh3YAMJsiCuMPa3TJDvkJbKAgQaAtEFQ8tNwcfGqpQGC1A5Z1fXEHnDgKouJxoQApEf",
  "key9": "3w27MetjpqZgjaGuQMPDtWXUE6HvetLuAnR8BP8i1si7a8uT4NsAPfSSP5LEWUDdn9H5B5zbkdf9WvjVyh319HXD",
  "key10": "BtSUVJtPu2wGcPBqfCuk18SFYsh8fvY2uZQgZ4qrjmQhQJWQNbbnv5BoUBoxaREBEMEppdtG6uu5ZRKQoGMbdag",
  "key11": "Qmqc52qgPyDKLQrLdNUPK96xR9wTpaKDKZ84gUWTfh9q6kNPtePKeStNdS6oRBUDd7B7tnaURstuFQB7ZpUEw2W",
  "key12": "2rGiwpjNmrEKoqS9ZsiDaBnwovWKinV3bfTn2YQGXSjw66Zvx274tJoifo3r5ji86HDJJi87yQGwbAXgJsuVmgvB",
  "key13": "4jeuUaZTFHjJL6TpaPLdgTvqh6riGztwnzxs37FseNMFzcyBKXYybD1nHqkNVoY4d9X18RovMP7GegTEQ2bKxDwB",
  "key14": "8uVg8dHA9TSyeDvP78KD69mFXKCRZ1pyPHadTfa6iVrHqYuGvdEu6sRNJTyRhHFaCvsMPHQuj8Sn8RVEj9txB6c",
  "key15": "2tm1JdvMAenTxw6kkA2wMXzk3jcFptNNSa9v2mv6c3Sq5cp9yood4H6Za99cGYbvgXJdUJSuNwwHbi6HWGVW6xAz",
  "key16": "tretzceWKg3ZgoJQAy7kBHS1bTj3cHewGewBdvw72DVuVYs65a7CLJ4czgHXe5iHUDUDeXMCjkG7n6w1haYXxJw",
  "key17": "2rj7HY8Pmyoh9PFhQh4iQvmmtQfboyxjCEtmuaUFoy9UaUrzCsibkuron93yRg9Gyufe7CNo27JqyDDGbVEMThfd",
  "key18": "Ax9A5U3TTpcDAZJAXu7QARzqKUkcStxaAKftae5yS6zxsBC2AX783s1RqusgzpZVRrgaNAURjFAqZKP3RXcZwna",
  "key19": "6hV2kPJzTCa4Nza9gD41H8ZPYzsPPHR8mC8Sdvhzq34gQ69xk1jbNL3iXbexhJBvtTb1z1V7q9PSJb5xJwWhRft",
  "key20": "3wXx5Mcsb6kqmpEpERSmgYeWC3FuPwXPyhcV2acGAJq5xJJbMLFjfvrW75bjzjsg59hLeHzYJfL21JHxpRbkfjCi",
  "key21": "gvJbCxrKVk9N3g6YBo7iRRQsezqrSAQ9c3KZPHvusSZuXJX96hevtKNZ89DpK9pjoStscMJ63iu5CySa179zJXY",
  "key22": "2t9kfS3WwKsMRwDHUq6WYZBmQDY8poSWA5WHvxW4NKThpfGS6KY9LnQ9QsQYeRovSsag7QtA7NN3KLJNVeUiPvdw",
  "key23": "4ruyeED7VSfgj9nQY5bTewm9srcvZDZ9Fe6Xaoiiwf5AafhNyP9UKgCoFizR1P45qHvkho7cwk9DTTR5PXNTcU1o",
  "key24": "2tGqjfD8GJLHH2zkwtBP4eTjz8SRYCu8pJQubuQHmGpvb4rxjn4yBvHbz1bcKjWyWTSYVfhx1oCH9fjHqvyMqXoi",
  "key25": "2xmFuWa3ynnJEjeJ1ehMXJngnjjL1AsRET8yqebCrgqJuEgHRsy7mcxPWwEH4KphrKrpEUgPdgRNyx5YgLNdr66t",
  "key26": "2jdCbB8kx1PtjvBzpuPUVCqi9Jy4RNS7Cgm5w7pCBfyDj2L1UjXhqKCTPDDH3xiuYr79i4BcVvmdaLctFWg3bpRF",
  "key27": "5FJ8iZLvLsCYkki94pbi9nE9QYVVJ64mV1bTweYSoYumUjmSWxDYto3ksTfp3jqEYwMGit7XwqTTy7b2phm41xW7",
  "key28": "4zcqbZE1mp99YdwzKWirgF4e6hwVLdgnyiMxAjJx7pXHMJLrHXKbsHnuP8KUQ3MFmo7MbVxh1CmAdxG6DFr4iFq9",
  "key29": "34outw2eCmKqT6MCyndQaaQbkZy4MwoWrw7AsQXGMXv7pRxNKEKU43hoopTozk1HYfWfCH7Z8yo82Ca2EZQACgW"
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
