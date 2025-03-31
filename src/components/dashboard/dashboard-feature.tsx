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
    "372QC6opcbqAWpkdUjSFicvmES5G3yiAkwYCRnACYhC75DhwZ6E8D2JVMFvMuNavuPWxhRJgRn6gb8rRk4Er6pYD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4xnHfepSQaYvawbRu6eC8hZh2jBbjPaSBzKWQ1jKmQS6tiDgnADKFN2M9WAbumRBx1dHWEkBeFTLqmq4SQVzowiA",
  "key1": "2RRvG5zKBh3e6yc7gkFrks1CY8DtXXB2bDaTiFKu2uyMd8bsQFBVQDtcVuCDNRE8uDRySvk3Qv8c7JV1ErTJfbJM",
  "key2": "49P84EPhQELcppYmafzQA5AF65c2o6v66G1eGsBPnoZvj8TQvvCDQBiWNMDt3VySh6ZHEUzXKU96mpwRrTnPTLwJ",
  "key3": "5ms8GBmnz2J6mBSBqmmSSHfiyWYfpNbGMvRh51rVVTWG92Fd6Y729xrJwvZm8ajPXqDNEzseJYwAo38L7GQHqHye",
  "key4": "5QPgbTZC8ZbSSbpfvgSgRTmmejEWRLjeNDm7pLkqBHk8WkxmZs2mVqUe8J6ZzTxjUk2WnQdQSxsEaGf5H1M26Z27",
  "key5": "65a6HvxtiH6wLAG1LY9yPYNfcRbDBDt2AeaHEmyK14KWjfLdpvsLmmtwEojNMiGyMhAx1wrLXynUFoxsqpeDQQho",
  "key6": "5urgXcZQMUdgXkjjSLtxZscqMR3KEJMzpsVq4wsjW9F1j4gtJ4jtvJhDoCQDT5eXiKJFrS4N87edDwjz7ae1yfPr",
  "key7": "3PWC9msdXkGx5MFxiMpAsPxdSZKJJuvZwygejfBTfjsfKMdiWE9PY8xbGeBkroeCgeLsT2FkC4bobnB8v57WSVBV",
  "key8": "5YKu8noVYXPBwAkV51opv3DxZjqJE4wKevCDeNigyMAG3DmVaNqHdNQuKdf7NVdSMSrgwKFabv4czzMNAnKgLBZh",
  "key9": "3fXwXnwXVkeYjRmur4ouECgm2uEqEkaX1gufbNsVLdVN6W7yGXrnatdcRWP9DroCFhd45FjmzUMV2b1b2qwwypNV",
  "key10": "3Xsf3Vpn5uq6tYBvsrJbjRL8AG3BmK3PGN1C29ssrhDFaMe7ujT83w8rCaxpcJjAEVUnVebY4ZpxCPhLyuZpa6ey",
  "key11": "4wAJD39CxMve4x9ueWwjU8Jq5JGgNk5MgMxN2dg3jep994zYnVz9iBSknAM9wyKrB8hVWPEgqLu7D1VPFJoWN5UW",
  "key12": "57e7BJYWri8FCfXgFBmua7RtuASdsZSWjuiUWPQ2KJXQ6rQftch2NNkZvGivg4zWyDj8WG9hoDmmRS9Pbj5i4wH4",
  "key13": "2i3dfM14HZTBYbP3Tv2ozvP7V8TsLs4yJvFHwgSVE3kcRheC2DWEHiZzWuQkFZecn31b5SzDH6dtMqmLynqjKr7K",
  "key14": "586EhpLAH1peBmzEX32vbPRJV7FKRR1hFE2XbdpWAsQjqDTWob5ugbZsomjtEPAdWAbZ7M2rWmGBW19XFK9Hpk9F",
  "key15": "4cg5v7Pabr5JRgSL3cTeg6YM15tSasCE1rRvef6SAhCYdY5orz8U74N3BdVcYX9aHhyHXipTmCYTDxrekq5y6toK",
  "key16": "2bvMnFDxD3PDZzBFGfkpNWqxbSoT2hEWbJoZmrS7qwLTLMgRdJuvwbo9xw1jWAEKBpzt6Gkkyoc2gaZRL1dLTy2Y",
  "key17": "45YxTDn3sua13B3c1cepwWutVhZHsH9Y2DpgDMbu16dK3ddUKHv9UcZfN7MFuSh66VYJQNBoZ945ZR1FBPaxgcSz",
  "key18": "3QwsvHkNsqUnPg8ECRxMwHCghoDgU1wt5465hM4yF7mWKEHmfno97Wu7XY2uyBK9FyuSteEWJzk1aquxS7AxtLjr",
  "key19": "2UAsfKrVKSDujcjXr7vjMpwX5TA8nMSBzWsnv7FeGFg6pq92xTMNQRaQ59jFJfsS69CCdY4YMb3se6nGKG5zsxWG",
  "key20": "3jok5rQ9hnmteMnAjKwb38VqgLUZASf5UVJAxF5dMyBqCrW9ssj7iRBSfacqNSQXhRkoSuZnu6bW1evYNZuT1FQb",
  "key21": "3Vqvb2gAo1u8DbFAEofb4YV6aZwiV59YFwPeb7CMxEMuRpjqn2tPnvbKh2gGAD2TGKMsHWSwod9DhBwFEZCZTwpS",
  "key22": "MwT5TXGZtx1UbVi13Y2Qm9M7FNQHxEmk7ygQYHyKWGJUru6RzAAAXXCHSkj1DwvJe1Ut3JDJDGe6nmpPCyi65sH",
  "key23": "oDWbTCivf5o5PepcZFmLHN89rZiWKMLp7dMkmq7qmsodz2yzKPzpfJ4XpuWpJnqda96bZ4TJPUKzC59yB5EqSJ1",
  "key24": "2YkxgMCgCwXxs4k816VZ2bCro8DNuYqxuKeg9XCUkiW7Ws5VXSV5H1yF8snfobxhEtBWCbe6EcC5x4zTw1C2AaTj"
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
