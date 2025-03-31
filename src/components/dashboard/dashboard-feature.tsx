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
    "5vvWazTvhXbZPQPDW6V6YpqwDAndDNAdGwYjtW6NePhVoCnP4XtuCJXkZnVK7yDmA4h5K5FTrccdf3VNn7smLUbJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "386Gi2TTzeoDvkEMzJaRGrDpvLKg4K7u9cLUEqiz6UyUj7bdEa4zGcf4sZ7kv1Q6CeyuWZTszgDC9mkWdNSg8whn",
  "key1": "47A7jD1oYD2wJYXk1w5ZUacpnWT7esHw599z7271LfqTxaoF4DvfqHy28j6QCQoH2tAc6bvXrrprprNxVGt3HH5J",
  "key2": "3ZyJFyc1sFc9VC7Q7T8XAJve4JgShiZi5GQPAVcFAwchue6dk45WSfBgUnU2BcbBBRRta1igrEEdGfhUHfCQS2Ds",
  "key3": "48TLF6h7yaYbxxNNNTzEytnV46xkXuqZTxx6qXTaTQUdkyzgRErSUi2329AwBNYefP9MzHXUhTY7X6WLBVcNw9Eb",
  "key4": "EiHnW8EtixVsTNARFtaEUsNCHa4Z5n4jxcpmQS2nfpnntKtvhkfVNfw8bWSoNoVMrKbB6zsheYRWWe5ZC1o2Jj6",
  "key5": "hHYDRAAWT97TRNg2CCtnp8a2aUCXhHAX3pa2tN5QPqEZ3KPEnEUPvurPyVBL3LumtHLGsgvnBDxjWAxJGy418yb",
  "key6": "WG4r36hvrjXroRq7vtWTt6tHofxY9DWiWxvaELFuBmkhvS1sTqV7xgmVaKSey6Bkxap6xAtCsXKptoFPjjs1uLt",
  "key7": "4yicXegcnJfzN18JLVG6vmpB3KHvJ7uS1wt43cDvmxhJmNVWTcbCeXiwtcDNDyyeAPRm4qt1ddp8VwpKwzZnQNes",
  "key8": "27VfxinofGLXZDcrGNeUJezx5NjobjpUT1YseHufYK4dD6xV7GnVt3YRBMziRzL76ngmxWZHoxNKZAPeXacsqah4",
  "key9": "3pccUXq8UfWVHR9fiR1ZkPqmx1TUy9rzFq472PgHS8LLbVxPJNQhQEw7Ubkvmsym2fgJN5d8CDSRYXZbtXFe71Gy",
  "key10": "3t2Mg2UiCDKj7WoCXJas9wj2UMoWLt9p83CvPQHGHVYGbCPn7bmkEHesFfpMXsGqb56BXox7TUBW1EqbYRsfDYMi",
  "key11": "5iicbFdYEwsgf5rGX9cWK63Kk4DDFQJ4g4u7KHQREiVDJJC24tnRVNJ4r4xdn2wWz9eDBgCwn2SWuUfCfyVvi4GG",
  "key12": "F2SWKzc3GfGxe8p3PLT1MCVLKLCCEBQUrp9T9x2Bm1oq2peHHVgVrCYMbww2hgpGkkESBNmUsKqP15f6FeCsA2f",
  "key13": "5EkBnwfdvQrU4YynvS6uSHFYVDVpZ1Q4AuVcsTVpFx9XHZANakRWJyLyAQDiUb87L2yPgiBw44EKtW2YNmnDYL8d",
  "key14": "28SVbBGfNNvHMKT4U59dzhYurLtPVMGMrmfVZgHDDVt3Sci3ek3TT56AUU8W2xcfnvqf46KRTdKK2P4MLPu7xXYn",
  "key15": "2Ycr1UgtJckBibR1H7UB1xnxS5QJf19c13ygEuZsJxe7MsrMDsZL869gM5am5HpQtqVcW5CAZLWJeF9E2qsmauN4",
  "key16": "3d1iPu7mSYfK9YcdJ5Ma8U1jmtENxw4rPiNWvmSiTEDwEegAUHYq4YTFDczzmxrKQJKA9FMnNdBJkiJHcqWv3Roa",
  "key17": "ikJbe9ghLPsdMbajJw4ftZo17Z64UGb8YrDhN5uw1VN8VBQV6ZHLN3hrRoSHBczriYRXKBc5Uk2hPRgYSE9rydy",
  "key18": "4pcBbTLBvkGEeorssvkX2kmanUyUsGdhuAg9WZi7hGteqnVsBfvsb8vkV8hgNTYQ7FivMWdjawTHWaTeXdUbSnLT",
  "key19": "2gSnNGtN5wDs3JvxEG7CGqvAbYKxjBNdiuzWgvnzsC5Pu3ipp4AZgg5GHJ9mRqgvWGankrhWgkQSv8pi5aXteTw",
  "key20": "5rCh1ECmr5sK2RRyR2EsVzDdFj9HscF6bMhXUqESX596iZ9rwHW9kpnY8wuzJQJtZ9B4XYLUAiFDJDbKVNq2mtwY",
  "key21": "39EzqmYPA49VcxFmNU32ZWysbVVnxuptt2qNBk3PJWLJXvqUfDcLxiRMuRqYTjNNW1tPALuJJ81GFjAffBAY6LCR",
  "key22": "4e1hmgrajwweZrhMm1YimbxrJHSZMuGMD7h1tHVSZByLpz6riJUPtYzTDzPUtiMFAwWPMkE2NDZAUCWW8d8G5roW",
  "key23": "5yYNK78ndMdEANq8b27jkzAnbBXCCN8Jj8v7LimMfn7nmw3nnzvCR5irN7ij89uTYVy6E4K5eq1AnbGivNH8iPAU",
  "key24": "3yBfUBtxc6zSAaWcZUebB76umBxvT5dZfMdoLQbVrs3R4moBJm4D1roZmMd7amPT5UdxkMCKNZtrZUqxvng9GA6a",
  "key25": "69xQXGxreU4xsuzRnwi7QDBanhkRJdTzHuk98iQnaSfyr6oVeuEGycPoWdwPYbPhXwVzc8XwQaBLLJapM6B9RuT",
  "key26": "2pUxC5Avm2jCg2itWkBYUGbhyEb1JefL3EkBSw2Kw2p8xZr2RqMPCZycWZ2RMQ6MASa2evJAfz2br21k45zkB1PM",
  "key27": "651YJHXPDweVhAQggYS4jBM1YqqZ2DRJJCsgoLduCQvDNCvGdC3V6bXvF664eftmRpcb53LrDirkAT9eD22vZXEu",
  "key28": "4k515TBydxrrH23AbFF9rxrNsENTzraekpcABLaz8QVaUkYZAgv4D1trbGjqN3V4LRAFQRAc2ahizXX6fFnJXLFk",
  "key29": "3sZHEvLdf5W8ebv8rfXVvBSqYZn4qZmbWRzPywKMie8iFMCS5T9EREF2mTME7316VnQbE6E5zpDRKb9QVnGs6CwE",
  "key30": "2ECZYZvNgbNfxRVcoQJjJAUULyibkDWa6ECMscM5uxxjsy6Y8HrhfB2VL4fxy7WTeo8Qb64uRNbmwE3JauTZgyGB",
  "key31": "2bmf3WBjXoxgVNJDPPHMWxorTwHx5Yan7hZzzc5DxQhFz7TpEz61A1sZEeE3YbDQSLypCR14ZbSzW9ypDpzcpNas",
  "key32": "LgcB1ifa2kSjdejCjsqMZMVSiXGNAd594wJCJxxsUDBZC1GQcP68k8Ps5y8PxFGApKub2RHa6dh42QmbMCJvJgu",
  "key33": "4VKc3qsfvUwFcL3EsCGr5ZTHxvJQCiKYoduE2D43zQyvxn5JmWUmWqbQUhwcPgKe5HNmDUWKMwueScDS99jkX4qv",
  "key34": "5MVHg2YrkHzTjcAieZM9EcdpUixRHBZhCtHg1C4tCcnPXjkYCLJQMEEWfvgiLmkLA8BPsKvRCzdNxTAHQJzSqmJx",
  "key35": "5p53YsgsiDteDq2KjWMzi3gHbJS3e34NLcVSfbAsDEB8xt4G2rBTttWfPxLJi4eGzr5Bqqa3Nobav3WHnZ6ZApCA",
  "key36": "2npe7xVeoUxoNsTGBtdvRHXeBM6gfo9ZP2Gor6vRSCHvBGfMxKUibQWnWZv7VBLxVGMJYeKEgLBsxA3D16238tYW",
  "key37": "sWX8pPUQoq5yr3Vd97GAmBUukPVDkbbhMDTKqsFnZUG8veH9x8vScAhkHkrynuwPT5ormnaKM56gDEPAAEZVMdF",
  "key38": "yc5GeoaEe2t1f8gKQXG76qnSQNbU2D2KrY2iVCnRWhfw8vNSDfEnt5fqJoATzvhZRkJDwMr5bLYMUTzrYwzZLnA",
  "key39": "4vUm9cw2ysG5mwDKUrEcqoo9AWUrFdRWE2d6CQoepR9sszutUUHSJozb7CmyGHAeBWgoeKM2wYZVAs58uvxovpt6",
  "key40": "3Mqy4LokSYxkuM7bwVfqpzXRvBaM3ocqSZRBnzX1eDta7XPvBJJhvsj1fVGZAr3dMJVBh2wMQAuBfPhii6L35SCE",
  "key41": "S8mcwuFWYeK2YXCXXdsyYo9U2ivNyk3DR7emkQ1Y38e51FDct7NsmEXijYAyTsCn8fnBgTm3YTogzv7hE8RByPc"
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
