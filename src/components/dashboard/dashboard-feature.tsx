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
    "58nMruXKMt2NEM5bxNDoGWinyT8m4dsRP12ojH9n3q6N5meiMdwLQM1k34u8n3ZsTReDuxWKEkWij5g1iPaxytpM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3bxb5ntgeVPcrxeNM8ezq9ZJQyUyAaL6Qzwy8ymiEy7TDAS6Y8kPtEa8ZhhKFod1KnnB4uFkGZ2HDJTdyBPmXY7R",
  "key1": "3NugAwSkwW5BFJ2D7bZjrNeAryGwmTTU3RWVKRqkx7CpYCZR7sKfqTt4uQj2zhKGuNrzVVBx9kwDWjorW5o4kV9A",
  "key2": "44cMfxbUqvXdAARWMjHhqxwT6XJDwtXDgaSYCwHVPNnLQB2wGAQN3guWQbhQh3xDkW3ersBgXGhAXsQQ4CCqF2e2",
  "key3": "4rg6gvvyQB5bHDYNg2JNWUKYU54f5owCspVdEnsYMwMQiGypi9rFBPW9p7ZGjf3bSQM5kWU3eHQRwxkkA6uFkqrA",
  "key4": "3RTtUNiEkciRJyPhcksqq5MBSGfRciZwsWwBxEMRRtPbyETHmCpAEeqiikZ4pCGrNETCKzc3zLhEqkWHE9cDDwsn",
  "key5": "4QxM89pZuCHivqmKnRdBuTFkiPizNueM4wUxbPhhsYDTELuq22NTTDhrLaLLfqZoXd78QxiEfmQ1ma5PYarBTCoF",
  "key6": "2A43aN9Ce987Z6rD9A3sNWz5b38k8LZu99YMCAK178JG1wGx7Qw79S5zj62MhDA4bpuW5572dHUuSofDKZc9Pyi9",
  "key7": "4eje6PUZjsv8RneFByEWuwhoVBjxLnYPAt5CY99LSDZF6k2UB3KPnAWPF29ajGCaZbQsmRBW2CYYGwLSm7M53XoX",
  "key8": "2HaFiYG51haZKyQVvEMhzExNrgawNu6BX7Me6G29KXGC6haWWUHeEgT9aY55kKJMYMLHJEpELfz2E8e4dST7JsAd",
  "key9": "2YZMHSEVjNvMheTSZku12ahd5PRXtcPpatx3nwPK6RADTLyJEL1p5ZnjahkkEhPvGuBTmx5nSb9n4oQAU1DqbTAh",
  "key10": "4GC4G9nrvGNgtLzV8fD9ran2PZDHAWowPHhBtHXr9XzMX9uH1orhwYzfnQ77XigepdPvNWoMcGXBqfctKhzhfZXx",
  "key11": "2FdLx1QRShhd6KoxsRqcpQgZqDa2dnt9DaixaTbKCVzEgGmejT7xU4NUQXq4ks2XwRvyANgH5fZm9WtxKMkRKybp",
  "key12": "7AR4WPsyH32Fq9V5xskFhSztbN9YAkexoLNJeSoBZUvYqbuyHFNoEbWSn4epiosxwk7GpZAQqyinrXPRetHzUpT",
  "key13": "4d2CdZ2cUw6yiBnJpF8KXP6BhsJsUXegUGs2ozZrDAyBeJAvHdMe8RJ4shz3n2AQWrYYhZSmArsyKsT2V7FG1KZr",
  "key14": "5WB8s9EfeGxGzErgUkrqox56QFFkeTLB4X2gyc9TY6M2QjMhkcMFHmFyV4uEUZ5sRmxWTsBgh8KwfYXComckkVYe",
  "key15": "5PKLjKMJcMjEVBExrZqqMMUmswJ9x2VjM4SRV9cY8nxyCnhKq9qEE22Neki6wmi9yig8E8So5g9XNeoFVt3Kjw6m",
  "key16": "4MkdjxQpWkH5ft8r37WiYmRCo7dQpma3Pk1MU7wL5xqM7kKbVC9iyf957t8NX2UkVNKNc1mWfDaXaRCLAxKpzksG",
  "key17": "4nrwwHqACmBna1w7Ro6itPZKdh2RdGefNnbfBVofb8Ba6MruvHQw94yxsUaoBfsh6xm5wqafzNH65fRecLFmjK1r",
  "key18": "4Mam8eRpfhYR8SGzrNPFzW5XEu4MyqcappBtNwwtSZE2mVztwTWPnLDTCphC2ehZQpfxWxatjQMsTcCs8vDfdmZA",
  "key19": "4D3WdeWLYQMfvF4dn1E2V3x3yq33bXe38TSP91Ru3gaj9VZr6aKbntxEDn477SHWSTnj68oHC125uAhyEYdZ5Rre",
  "key20": "53aJTzqrYvdYnEN8DEWWtQvr59evSgFGup6eh8CBuxCPDa7Ky6iJ1ccKpQU3hmdbzHMAs4QdVkzZ4GXBJAVG345R",
  "key21": "4VDAvzieFtYVV3HRhS3xmEFD2Vn7n1rRRRY4gFeyeyBWhXVCaQ7LnHaCjoQfUDXQA7dfLebayXRtACjJV66S8Kts",
  "key22": "66gscLQDEnqbYzmNibewCLM7nJ89wRNk6gi4KuEHGAVc8YYJco1wjPAc9RYQVbnP95CPvcD5p2ydMLpcgvepptgC",
  "key23": "4i1Yq2SaYSbRNMPer8JVWKjZfa1Za3hyZi147dckgyAZpysx8hUmoCzCZhmJrtWab1BukeD4mJWboK8FFoGSYUbK",
  "key24": "2cCefsmH3W757Vqi4Qjsf7RHtuxBaDeJiS8Q9Np1DT3iGrDqECCmgzXPd8sGeL7DvVg2f81Xt65qJSU6bc6vwD4R",
  "key25": "4CfzLjaa9UJ4JLYf4wiRHN8Mi4yjHMPABkB1Zhcpef8JwWSnoUKeFbf82x5xUjcwWk6svs4PqJAWBtEoijatdbC6",
  "key26": "2WTzJ1dSRCEu7Pp1VGYLGVMcbcFR4qCcSLhHfG3PaC5Jzsy9NBp3py5MAWmc8tfSyCDaFNWtXrYNg2mLBykxKjaL",
  "key27": "4UvgboM2Yh32sj4Kk7ygJvdb9c7FJNnCBRDHRbBS4Gq7B5hwQFBUT6nZd2PbNaN7p9iCF6vkphKw5QFyxkxRgvYB",
  "key28": "2L3b3whTnEtXJykuiUHQzwufLe7PdSPJMipCEhZ5wbupGypfH2bpgDaAdyVzj2V1LVSH4TyafGmNmm8X59Lmt9YN",
  "key29": "4eXAxD1hHmaRiQEnvxF3TQoK1jEabfsec1NRndT25yxw7PNBV731UMcBDPw3Nm5SecvyW7ERZFHGtDdDgVwUaK1Q",
  "key30": "LxKye5LAqDBw54oPzCxgY2V8Vx8CqsN46awpdkf7VFRKF9Kxzy1afK1AYkjn4wtVNf2GdvZ73i1mvx6Gd3RgRUC",
  "key31": "56zXxJW3J8MhF2LkmgZiA2JvGdMWURBeaniLFRiqrCjSwrgqSxVNxpbYgRBX1gWRJVF4Dwwwe14cWzEAk86RRPrD",
  "key32": "2USErb9gk5ruTwByPDbKiT6aPNHAbFQqLB86H1NMsLKucwUEQefmgnYgHgEodms4wNogxtNeuc4gz6upQF2zzoGr",
  "key33": "UBuLXkZnoaH2aSgLqB2GuoP35YyZLmnejXCjxbv21vSu24tVswv8RPwERMqmPiYjpjJKZmqn7zJsWRvo1NRFicE",
  "key34": "4ZfGgsqunY67f9SFvQyHpS7KGqoc84gMUPd1gkbNxfT2qfcfJ6etgXrcXBmVvXeEVfaHC9YK971PbKrkot4vqCYf",
  "key35": "2Ww8E8ZdpUo6aqPeoF9X2Rs31zHcCW9uSsBqrDZuj69j1yqiYBYf1ouzCdvm77jguALDW8GcnZP1Qs8SyNv6RzBD",
  "key36": "4L5eRnjgF2bi9fSbe1iWvNy7H5iQoEVHnMDLo6wS5W4oS69943NPMiVRe914LtmBchQGXNwZWg2mM9KnuL86BgkE",
  "key37": "5HMHigYfwj64LDEAwRZNmTBbc9NMbfcte5a7YdpYPpwyKh9uDQpaJt7BXVNVxEYco9o6WZc4BAymTK3vLMuss3am",
  "key38": "3JfYiRZciLy7Bb45zAviN9h1EQK3gATuJVYu8uB4M4aVQSTVPZMEzUu2wrc7V3wANRnn3DEr2gtZd7BGPm7fVNEC",
  "key39": "5eRVCEZT74jCiy6WXcF2HMYURQm8NXNg3byfWYTxhifi2T7ez5ywnupZFQbWxASotCEruPBdrV72kVrFVWHbgSfm",
  "key40": "4Po11E7CR1t2Fk6LK9Y9aQFHSxTbpUrXcPp24sXq9PyAhR4CDMbzkT1JuN9fwuJB4eQqAekHEzDDLsUoFQzdGbyD",
  "key41": "34vcGdUYWdWSWJ5FMDSrnUGtCpx5AdoNDUSJU4YyjhE2SW8GSSA6qv8GDKrsqLTLSUkJWLxCZfdCs5ZpvVVh1hL",
  "key42": "TkajLVagRsQQejkNwkuvEdXryRkXhBNbnEdBDNjPavowqKTx9ECuZfp9yWnKcevonPVJSfNG5SYgBvHT1iVe5TW",
  "key43": "3qdcMs1zLmxhZBb5yTamyPccLnkS8zZMTK7f2SJYwDwN3qdDC4nQbTxe1ACFcAsgbWRtH3oXQmKFD55bVEHqqYzD",
  "key44": "4LZA5J15wixCEQFn9Z9zN3S1eiQfp2N9h3ydNzoSSFD4Pt8syigpFuXsxbmn2fr9VeqZ33TCnEqqE4e6AJn14TQp",
  "key45": "4xPU2pbYE6iPLRnxsSFQMwhB2wf6M3rc515Xg1VMT4Do34DxAr32mu8mTYdjaArvuWrVMndZ2RJf2CfJFiZJUNjq",
  "key46": "3pfVaWDLXm92f8qAFkPoonVCerdnqFK4MSMbZXwM8pvegQMYxawtSreE47JqXtXPEAsxWLB9cZbU3wTSVNEfsXr9",
  "key47": "pwWe6rSY3V4uHMHkuYid7BZw5zvSe2X5MLREHQj6Gm6x2sfZhLB7Za1ALGAUcMpdxd9LuAuUaN3ZATQhkWcsTUf",
  "key48": "35rTHStzo1vNRFTVnmppu1mVCmE24DBHM7UXkEC6WngrkmXQ3EXiKVZGJhKK6XzuEaiWLp5GidfBXtbGZTd1SxbY"
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
