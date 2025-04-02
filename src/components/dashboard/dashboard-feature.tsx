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
    "4PEGsfbEjYdXgR4kR23m73L5Lw2iYmCdeCdYK11SNi5vEkKSQASeyzHdDAoF76WQ8LhNUDvZxQdxGMuFG6PKZwuT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "45kKnsta1GAeZwXTExPU12WZqasC6qcmbEsTCXoCzpDWEADhLBcLHj3iZYz5GJXbAfAC3RddhaxCbhQ8x6fjgEf6",
  "key1": "Lr8Yiw8oAoqqD5CLpXvKJ8NM1SVh7dkbNmRBndNEnBGqSFdvknWtxbBVNrkD8WWDwQFBmMRPFgRs7wNEQAm6vTn",
  "key2": "675qnbCVbyC71KoxZAuVaNMBKHvARavBHvXKFoXjvdBdVvZ3mgEpxES5AwY7QgbA6qJuTJDspjrAT7HWm7KkY1ps",
  "key3": "ZV2r5WprH65rDu5z852w2hkuLHNm5toYXTB3tybPEohb2jqoZzq7D77xqSGShmsR7VSWFKdsXgAcERw5J9aam49",
  "key4": "584hJeeJ2xHrjVYD1UDobv7GsCQkQysCBhBvj7NkxzUMKUzFh3RgUp6uXKwaWeQA47Y8JV23UvGAefHTfGfKYc5Q",
  "key5": "3W6cUKXJkNfsctDoykEpjxPooajzWimDU6VqrMYvky8cPKv8DjeLWjidFPmNcEzNkUuDX2YJEAviHcHNv8WxmpiZ",
  "key6": "GuYE8NzrNBDYeAYmS3mPVoT3EDxmqMxhbEXCcPhs9rdRwBYeszbmNCUw2PvtQ8vqqWdkihCMvyxWLMTgraaS3NS",
  "key7": "4nCiHS9ZwAuMduycpTUR9kBs4tidTi73DHsBrnDM4CbtP3TmTQNa1SGeqvZoi6p8khFcyU3sy2EsQH6SJvo48Jdh",
  "key8": "6QPCD4z5xQQMGfZZ6NefomdgkaUFJ8qaHJN72hkQpXvPTYjC9nrVpBF8SQhoS52yW5DedaXeLWPMx9L2VvhY9aZ",
  "key9": "2W3CEDBizrJfbrWyZAEhJkMk4xrCy78DV7shhL8LjyHSCC7uah87wf8XdqcEVkvMYmQ6mgY3uHpqW7MfWtvSwADS",
  "key10": "2R6wcWMND1VwnrkJ6mUvZsJLC1U5JYpJpWZezGr5oQ7yUWqY5vcCozNDpfVh54CKnBmz1w24WupHZYojMo8WWin7",
  "key11": "3SVjjMN2jASKkdW6vmmdJeCB6LiduTnhqELxLFnDRrbnj617ziDPnNNdb5nbvd5EE75GxjoBRzKPyawTvQEb7mZk",
  "key12": "5cBBZw8GYVNhvo7gv2pr6TucHE21xH2oV8YNWpJC4fyXRXGFbUQgBXHygRqCmSVYSJbAjHFyMentkaEmubpSCNnC",
  "key13": "4D3fTVs6NbsGxLjcQqCaQmYKkoKivqfxqnv4b4bgnWHmaHWYBQ33ByyTSXzxJiSJc2Up1F1NqiL5uDdiiGZPD9hA",
  "key14": "5psiJYaNNxA6ST4KVWas4fBBwqtbsj26XyY8PtAdgpLwR7gLzY8yULyaAq5RmB9HD3drpLy8QYbu7359BeK27VZJ",
  "key15": "4VqkbvvxBJsBiP8R2HLPwbGKyJW2St8brCXRG1rD3RnaqXWBma5gCfezeG6YygWm6fPyXpqGH17wtdwC6t4eKbNh",
  "key16": "58tbusjKZ8iiYr9VNoumBx9bYnJ8xZKDwTfb6wtsHUw8KtBdqB6fXEtPWBDGprNk69qrKGU1C8HT43UXZbes8UDy",
  "key17": "8s7ykcU5HV5cRRXNprXh6Vrb5jEufMjRRaT6o9efEAM6V5bB22qkmpHbjU6xpNgDhzBiPZVqAbgotwUFAoEehJE",
  "key18": "uYmWGb5My2he1GFnrLuFLSD8xEk6cNoKPu37TW4pxG3Kh4qoMci6DtkAqBC2JXWV9YzdWwrQ9e3aNFShcSJxTEb",
  "key19": "5pqYSH1UJbG24aQEFcr2AQ8fnD4ap2XGus3NGHhT9fp9QC97zgG97CQo8dKMmVhWMy6sBvar5Wx4Zd6Gsyss9tYR",
  "key20": "5jkrgdkSxQY69iGLu4ZSNpmhRTCQV9P7YtCB5VeesQZhvW74E3aomvhw8WRv1tzTsYdwLrGLK1duckzX3Yc3QWgV",
  "key21": "2ZYj2MNhgrmCHGi4UdieLhddLaFKfGYHztCR4Pf73XAEoKZvujUtsVR3WXbfcuDYD8FakW2aZwBKryPjed5n7Jei",
  "key22": "32DvJ2aG23fTnqSbAxtXzAjBKGqHyqAunYD1rZaaS3H6d1iigt1sjMpCbhqBS8GYhTurRucv3P7qPwitfdNS9SeH",
  "key23": "u91utbyafR3kNEEFp3atnQ8DsqmJEvPXNGNzQ3zYBDZtWMznArXGZVELyeH1sKSgG5CZRzafGMXiQPWWc9SNTko",
  "key24": "2TfRJczjxaMW9MYD78SisArye1PhCtf1G1LYBwFPoCodSQLVVBn5LzTB6VQLP4Uub2rRUh3gVUCYHtLctMRrFm8N",
  "key25": "5CCnmn4386c1zNYbMNdtC8h2ZikKpQ7krNUnUdntn3Ae6rJCJ7ASxQdF7wDdEXtBCUSyJyVD8FHV85aNytr1St6C",
  "key26": "h3uJYf2KYKjWYKcGmcrzLoDkthH5mRxBZFuNNf5FYpxQLSWGshBxVgD9nGzSRjBX9ENjkRz7w6JaMC26wTbhUNk",
  "key27": "3HcxRC8eKYiSsUjkknfSvdtZ8UhZSnYByEEAms32oZvBxScsbxBtSK3a2xfbusMr3uNMJSETMpsH167xZ6JqvRsd",
  "key28": "61bBoaZmK75R7CnsyAumRMaMHij1Ht1dfXTKS1ecEfRuds8sGHcdGUBvKY5dMwLCXGnH4KJAAUqwfou2sZY1N4Jf",
  "key29": "21QttjdUnV9eKbEpHRVhJikS4Nhu2bkpVLhEtCdnFcEY51JwrFdRqfN4PNRZHahxaNosuWMCFfSwGdshjqcMgdgD",
  "key30": "22hAZhvMQLqGK5eAFZim1LjfusWRN3V3neNJYXBxBFKVtB5EWf9bFhGZUCZjKZhx5QYa7Yv2yd7x5B4xdwLWVBFR",
  "key31": "4y746mFdLPzgoyvrFdj4Pbm8FwRWVoqxvs5HaqYCMYV7kV8BJYUGFSuANEYEWZxmdWdEtAZ8QGkKfMZtVtFRiqfq",
  "key32": "5f2UtkDyrg9mPUVvA4gtPGvhRiRaHQq2k9tjtnnUp7ohWgw9hfQpgkq1R4kHuF3iR4ASuPtqZpBqrgtNgaEtNVdB",
  "key33": "4fpWaBjejsQBBLvqqxHYc4Ye7vacgB7THge6EdDU3tqqNQA78CNmSFcezjuuciCfQkx9ZxVNFresMTs891EaGSJQ",
  "key34": "jhPPPW2nZTQLma6L71Y6nAcMCSD9gVn66Upizd1LxEaptDaWsoS3hHaFFWj7eGzYA3E5ppst9TWS4fsUvjS4HTM",
  "key35": "RKeM5hxprkgTV3R8iYx2DykrdDA8MGXDFYxmXgyWi23hoZC7Nae2G6orArRjQ9ucT5nB1Ugnyxh3RRZ8dgwH9X5",
  "key36": "Jt8cVV88JJT5HgU4sYAAiHj9bH3mGp8pLBeo6eDvcm4j2y1w1SgjiSzFsorWnFM6FwsoKUwTVdPQhJvzRXpj24a",
  "key37": "6291Wp35SbzgKGQsFdEoE4SxQovGz2CcbZwz3QbxH4LxEQwy57rQqu8EwNH4jJQ6TKbBqMxuuWtD6biaHqheP8dn"
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
