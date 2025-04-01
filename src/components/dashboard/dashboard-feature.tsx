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
    "5MrETikMmx8FUjgDC9U8ZzYdhRyHRUCSDuaGnvyRmir7Kij2uK9BnQ67XbGqGQJy55Qr69CoJ3VsZ8cfxT22WYUG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3oT26bdAcKfSTm2ruwdbLn8UsSwuYjXbQLBrTEtND1GMZRjYQTxKeFukhZjcK9JUkg4tBQENekz8yMEQZ68bRVNc",
  "key1": "3vEGpZiWSee9Yfj2RWUGFpedtCx96gZytkxidBhdcesRFevbt4JsLC1M62ZDx5G6okTgbwEhtwR8tF31Tzt5o4QV",
  "key2": "h61hs6kxC9ULzyQwHVq82EK2wZeTjQgrkEwE1a7mxz5nDT7mSByestV3hVpdKTNKuYMoiZoRvX97eBSvXJ57Jih",
  "key3": "VC6RQkcY13yJioZAjY9is3zvtK2KBWL6Ck98vjJkTE61wQyL7WwyhvcXfuLKVUL1MKB8PYHMUtsbao8Nt4YsyGb",
  "key4": "5ac2bUe2Wf5osasvwhM4H9sBeWTL3962e4FiDjWtALgBSHyYZkfGuYaLnarrbe4rPYSjfEM1jwh3rxaJbxt96GT2",
  "key5": "5oe6jumc41zhLqPDaTEmwdsHTnCF5D2gagSKYsrWjz2ZW7mYJMZqYydiF3dDLqu5N2kdyvFHWm3HVnFeRGR7ihL5",
  "key6": "2jRs2YiuL75ERvgV7A265FRnpTASq7S7jUkXZBf9Sbo7WbHe2NXrAn9HMDEwZyqDvQjzUjBNHsoah6C2gWeDV9Gx",
  "key7": "2K4rTgBVnmEdRmsZLLxu3vPR6egM9rM54sFwLfBhss9HomJBLvc9Kd3LBbfUJkc7DWNbXqkeeQowd8HShZBWNFVC",
  "key8": "5FAx5a3vfGmXqMXzhYRnP35rcUKXGtu7X7QH9v3f6G4dB39fCSkMypn4AheL1JWkHMPwtQnm3XkaizERMdE4GD37",
  "key9": "z1tYyFz8Afgmiwxos4u4q4JWgg51kmkSZxaefexs8KX8dmph9wsc2JqUWExWYpYbmgGh2quLhURhCF8mBMzV6j5",
  "key10": "Tb45rxGgaaPG8Be1DskTPhkXzAjtjxsHhCsBNsCe1HxazWVJMLXZSnLGGLqy7DZ2qEug3M2ndarmMFDdUPvMY6d",
  "key11": "5DZmGkwRsvz3kGLVbtumRB6UdZBWUGXxh6TaF8Y14Vxopx7swk1d3JDFGdUgWtya4YbUhQ9kEytZbNxGENiQzXf7",
  "key12": "iqP9wHLv5vwpzNByot4wFdgdZFhTVAVJXNA2ATcGEQ61NaagioCaYfgGCRFV31uuG4qqqMF7MAMYRAXXhsjWm5q",
  "key13": "38tbKe4MKwm3bi6hCzXiexiYD9JaccvATqunjM1zbs7AfMEda88caR8jxi22HJTWKELjk6w9RB3BsRtURns7kcPE",
  "key14": "5sWTjrp8ueCcu8kuLDMgTeHrnerfYDsFGe1onZUz9TfZ1uPz2SzcA4DTgktPq9D8skmWDTPwUUWRwTuv2rXVn4Nb",
  "key15": "2FMbLfptuff2KC8TNfMETaXBMAfa977Ah9WYXRX2oGcbk8d3tQNM9MsmhAxTfgw4K9o3wNebCAAYapFNM9a18DEW",
  "key16": "4WWNTmJKLowarmYSJs4zwWYsZQXVkjpcs5xLSXYFz63kR8x8izoZtW7udsNdcqHi1bXo128aZd1h19T4s2wijFKX",
  "key17": "3NcLYvDNawctPBu3qzbvgzNVsiJbvbaCNHcRN5oUPpnJmpipkA2c8KYiwhApPGd479u55PEvvHvkqxtYEhbHwCVq",
  "key18": "5cTZmGzgUNVhTNopUFW5pkuaj7ViTpAYMuzPTwsofWyoryPwrhaWxqYt3aLPg1QW7hEYUw8Ykepew4o9HMRgP71Q",
  "key19": "4qRpEAwse7Mw8WDKKu6hVNKqPhsP7nGmGnS6XhhpTfnWfkKm97cXG5fs59ywibXqX4QuZtqRteAv465bm6s9ksaf",
  "key20": "34n4sMxSnFNChwvVNA7fhMD3DFJ9QCG53A5zAeipm7UcSTEpcPHrqDUszEYYcdgTF6sGzFwFFJLzRajLQDupxZeL",
  "key21": "5oCsSv9YZ8v8FnmYLryXnL25WpdeLkLigjAroivXU499MkZsa5CwaTt6dNJUMXKEbZFUGVpSMvBhG67C91Rt5VHr",
  "key22": "2b4UMcyJHeYXJVcvvriukcYDiATACveYZy27sr1wb73owNiPEvkDmWXtMnYkNJ1oZkh94JfVqQPVFxkDimF5v2qP",
  "key23": "5UM7K8LjsEHzjaYVjbh5Y5bYbrHA6FQR3VWNumcWRyEFu2Epcc6rMJWS7nhrq9uLf1jZt8zBJQEJL2ySRQVhATKu",
  "key24": "2YTXobQ89tmTfALfyyxP6ZwfP3BU3Y8ChDcnDgtipS2cMtA58ZhitQ6EJokivDN732dnknpzVG1dtiE1ZDcQjtHR"
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
