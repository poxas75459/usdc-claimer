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
    "5N765PjRyxFiVQhud1Ab2EVk3H9ywwuTFLdQkLuPMV8xDgLiVz86juVnbzuijHPm6BDLrPEeB39ZVDKpxm38CoJc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5fx4CYmnkYzaENSETRoAYPsxxCUKnYCpv33PpB1pf5HpX8AmJjSNnqBS5fDSY7c7gLvTygumt57UKZg3P5Ed6Ew2",
  "key1": "4sREdDNR51G8grfmTThcyzuopnmchZzCeZu3ANam22m8ak5T4Xxb8rBrRZgCrq2NwPhtsMHMymoiVE6X4GzuzbTg",
  "key2": "27YVfuTYSJC3T6j5jkKNCwPntjvGSkX6PRLiPLxk9YLtQbYvDaAvnBcChG8N6aagz3nD3ntR1MN8zjyH6VGNuPUA",
  "key3": "3VfDBZRHDzjCSbWivXTiwPXJXB1UY4BhZMT6rioCqyLheBc9jKSiJ5iXJ6LYCF8gw8G4EXVjxZZoitPDXh1SrzjE",
  "key4": "2rw4oUtTJtKc5DFWzDsGG9TuSgkbRFri3vg1hgLkzpojdBYxryCnDDcd6dmF4mc4dDK1UeC1GY2fTATkiYA8724Q",
  "key5": "5QJry26L2EY2M3yctcjs1PpyLoVFFwyM2JnQDfX3NJxUXXFy5PGEwcH4uz9bz6Ue5NDbnsLxzGJ7MzHuhLEHv4Bz",
  "key6": "42QLYRqaugqsacdNiJKujs9N3ugQzkHH8KDKNhopNkpickpihjCZWzJaKtjfVh9cXHgCYS1u1KXB3kCYySTLCY3B",
  "key7": "3SHJvjwhzmfkzwp5HnhZkSTGF5zUxrfJJTYZNBj9QAncmxeiEKeNUS8MS15DFr47HwpCzNPdVPFA8Akjh2J2w8hM",
  "key8": "4J3h4CcTf3S3Ez2mmbL1eNQZW2qJnUPQcG61YxNfzYmJFeFTKr4sPKvP3X1bC362mETjMFCEBUccCt2A5npeH11X",
  "key9": "5862tySYNy8fC5EXdBNr6tdHcWP79HYmJSGkCySdnsopjM8GprkHgKvLzLsSLvB4rv3zFEPm2Nemp6NL26BqWk7o",
  "key10": "4hk7BHCw3LBbpDXv5Dp6uK3R12pyo6TfAABMFPtZxky3EJPTvXWjBbiSgzn4tr5brd8SktPr9tKBehDi6c3ZfXQJ",
  "key11": "5vY7YX2rSu3LVBxQJ5kRiqE15K6oJQxg8nhe4kQ88qwkdnq86pXZg5UtCLmqdpArxqXmVLMqfnj2njDZKT4bvh1o",
  "key12": "58Sv35x9UdF8NKUqs1LjYprQ8kRHiFzWDEaX1FMNKRKmstuoKpMh5Zi18kNHU12JSXmyDJtMsLV64HpCcn7FVXnq",
  "key13": "264j3VFpX53cjW3UiEJe87xXs5Y15HTbU6bDqs5QVWmsEpUw95u57TBLJMZPU7pCwHdcbEQpJj2RyVZa9LQMxKZr",
  "key14": "5vknP4dkiQMRLBdemGTgbk1pr6kcGvCJz2wfSczE2gQ4tjaykojE2s8q6xH1jXi5qRJjnE2HQWKNGdV7mJmeHnmQ",
  "key15": "DTc3W7U8EAkLRVK1AraSE6wTyKQfqtjQAoyfadmJfSCRHa94MdB264614a1GBwQMzpTs2wqh3R3c5TJmxcL5TB8",
  "key16": "3khdiSeBvrGeAjwBQiyju8CnXnxM7JMv3DjRxTpR8X7DMD8UTVP8v2xYwBqDZGsv3eQAgjvRD5LN3ehsQd9ZPDay",
  "key17": "3pD8uZ2cBGeZoHyyyFfCSdLbvnytmkewLMbvSeeSWzWwcgdgN9BiUxxBv7WwnrLHwtvnCL23j7kpGDXBNETPmrvo",
  "key18": "3D6ygFy3ptx5vPgW7NnUNzL6dnTVMqCiTLdBWZJxVV4cvjhtTeh4s5386zmXy21pgm9FgiUP1a86MkUV7AvCiu4H",
  "key19": "2uZ93DvfKHEAtyGVV25kBpr5CcEm8mja3RxZ8h7xwfDpVmCB8fhDAYE7DRfpz2uYsXg3PtyYroZS3UH8PgxkBoL9",
  "key20": "3Ga678iKK1jHknySHLFqV9M1w7JxyBKY9A4Lp6k5jZLF6R6iKBLJuYF4QFgAinGzvfoc6Rhgu5Php7yPo5Ai1Nt1",
  "key21": "3BqkZoeFrtP3iADjpVXXGbw3tVQfm18LbzMh8rD5H5XSMVoipB43YUgQFhovUh9ot4ozdKSx6HBUG6nsrK21iFSm",
  "key22": "PRCKqJYynaSVJdEjFppyBimHgaMaLM7DpJMCrwhNqzZuqEKyR88c6cw9FMMUmEzgknHbEtnhsd1MZY7tmQGgZZc",
  "key23": "5JR2UMdNjwaSfpsRzdfuPc3tEYhAoEHbGHSuoBCxRdbAfgU7RAbigkHWRJUXBc1dooaZwUV2udECZNgZWPu7D2fT",
  "key24": "BdrKdqCCGK8bDh3vzGhBEmHFpWim8n7njWCZyXCf2QwsiQPxUwUtpnoKWF5MupskttvTvPsvawGwX6x1PwiFYpA",
  "key25": "3uCSLxKZbyGCcB65e7PgZY2ddShwuGcxLHajtNFEWA4mAjVgZsRShKbFDNdebuzqFNLhk9Shg1YDBRzDLcC1zNpB",
  "key26": "dANpFfctTmZZFfx4mNkpHweB5RJUjjY9XRfaNwLEsVaYThe1iYhDYhx1jF3NfLC5BWmVocYCCV123hg7Ch448p4",
  "key27": "4QzZcigixJFid7sns85dtEhKVK4AyM6WNzBZK2mYKsrz6QEe8qz5bgy3GZKqNpfQSqWUG8L571TxPWGza6bqztf8",
  "key28": "3QmfuJjvHvNucdTkVk7V1xKr5XGMyAaZZhJhKuRcaSFfMgmnM6HWd6axUAXiEcRHovc4GXVWab9iwos8VTQSh2Kw"
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
