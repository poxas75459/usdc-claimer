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
    "VnJUwaMwTphYRHL9MKqEw9e7DepTZ2YXLHbjSWQ9PSfKdWYDfdEHhgkXwHsTn3xYV3UYDejNt2G3gwFxRRW9PgC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3TcPu2LLTiCi9dT95WL2gAwcKpMnZkCvk2VjXNVTvHczc7erdhWPqwUpz668XK74WxvD5RdUKUntE2K8HzDVFH65",
  "key1": "5azUEsXfCMvnRdaBBbPp4QsjS6wfZwn4Mafk1csxvozC9j19w7bv7ee6DbErd7bZApmG6v4wDFNbfca7c7bKN6as",
  "key2": "4kyG6tteD4ZEEbv1FmHh65wG1LhyaNoLjyNPGqG111ar1LRev8xaLJ6RnJXrGdHumryfvvZRQDrsY8WwuGeYKxBQ",
  "key3": "2VLdD5SGFSKpCNMDR2V9cBdJUgC6JSqR5ycBWkUFwZR8bR6zbP5na7edNRrJocPSqcu5JrwWAQeHdgvTMJXSD7cg",
  "key4": "395MqQgV4XY8zKEaHCU5Lyw6k4ydW4yhGS7WNEb2W3cNPYvVem797EBGuyA3pD8Ujntp3zjJYSkaLoShzG3h1s9C",
  "key5": "5LnqQuXepePsHM3UqqVKRpSMQeCbrtgYS9Cpt7W4kwK4QQD1npQR3Mgtic4HHNTMmgbJNWrCTaLRNZG81Wc3hRSH",
  "key6": "RDeoShokBzRUETvbcX3MWhMZGpovct1FfQ1Swqs9ve3iLM2CGjVR2rk881sDRwRkoxTFstRsbuBoRmVaDMhmLvB",
  "key7": "2kMMXX7g1hefQft8gBA3R1ZLqToDWZNL6iV2YMdHSFpmibT9EpEMw9u3qsLgqYzD7swVJ3MngjQi6XsQncEb3Lpc",
  "key8": "3AHcbLFQDTVX7Art8u5tDq9Ctjc8WGQHY1krtWodjKLCDiG3sT4jxvmDFhNYoMKXubkiK3G3naYhCyXPNFW6gwDq",
  "key9": "5Zz5u92HdWHXkJuXoerNc1s8uViAusTEzFE3LW9ATmrDrydvRbR1muAN7ALKTTdJe8NQ6KY5EfkZjkyQxnnLkhoH",
  "key10": "3JXP7VZqqvyrRvTM9ED4TMmPF7RSDeWTHehXmG4mSDQSm2PT2BBhZ5cLd1AVQiN2uRH87UvFKncf1VY1GxUqzDAd",
  "key11": "2emh3fdjudSf4bR5VjhjXvQRC2T2M2YP4Kbnx5Ce2UaU28tWC8EG7v5ezrRFKmxr7BasZmu17mcuthSRojJdSbdr",
  "key12": "2wRUsfRwQBsxZ2SfPArArgEFS7hZzNLKhJgNfzsDh8TnPjgSH7hkUMm5SnmY4uLFcpf2t25Ar4LkvZp4AzF5XusF",
  "key13": "273EoHQKCm5iS8pXUadYBnn5wzBU6dg68RK835Yz7otXHu7qfwQ666m4fzzYtBuG6f4ST3QSHpsfqypg7MpR3DPb",
  "key14": "3TG6rpPr7c7Vhu6nGWG6Xk1H6NUEUqWgVGwUgLR2psoB8auZu3SYM2thvqihAkv9KBM769iKwXVCsmLdF6TDNDFW",
  "key15": "5euh7X2SFps66oBdgMkegp6sCnxCfqmDFL6SaDuasddZgmgvrAmNM6oNdmnMvbnJppPVEtmzf5h7vgdnB4n6TNM",
  "key16": "64MXZxVuVM43YaNKQXd1MCetF55vwRyeHQaM2xtanL2PvfzCenhLhzJi9qGmFrXZqZygJV93LditAgnW15hGFY1T",
  "key17": "3aY2bWAt4c9cb2z5YNETAFkPE3kPQ5QsvVHwiqt96B6Fzx969sToHJMR4wYYxqgLELhKuJwcT9xs4rpurZmhvdeu",
  "key18": "5Up3WZzEpU7AKbTHLm3L9oAX7aFS2KtXvg9LR4NuJN7sKUSZapXVVLvPaUV5DUPDf2AXBJhhS5B6g6RW3PXtE5xm",
  "key19": "4dTCASq7G3BKr9jKAkiDDQqAFYdsGfQHan8eZfqo3jHewG9JiM7kNiCHbo2XXgo4afM6UceoAry4u7xwmyex7UDE",
  "key20": "fah8TKxsMt8SZHDcLwiNHZfvXEb8Ke9sfc9T93qKzNq1he7Yj4LLtKtKPxoa79SXXzAZFC28mKZG7Z2MoDu51Zg",
  "key21": "5FcXN6WmfkVYHw5BvZuhQZqihwRHTTA9d7VnhwajrY84ZMTjZ3og4CBx5KBdFUF8ig7LKrxieWkK4Q9YMAimQmtn",
  "key22": "49eCBBeaqEjzsNwRkMoRfSUKPVGCJK1FKfzkgzocoXkp9Z3e9RnXZNcLjv1LamH458t3RdLZHi7QspWkXQTh2bV6",
  "key23": "Ty9g8k8VuHkUYZbdXrBBQnX2oaEGB9xfqzWPnzK7A8K4KKnu9cMk8aouo4JabZR9zRPzvNnjrnSyZvqNzfCVgkQ",
  "key24": "2qn8wofbe3CLzNJEDUvuioU1YxsTWsdTdRL12EN89YCqC3YBZxPHEnLxLEZLw6KcLobXPYb3ixpas4HXqkWmGQQB",
  "key25": "3BGnLSbFYwMDrFQKGEnyBfmRkUbxuYSnSJyT9iZ4LfHx2JCmqZLzDvYyC3uGTGzg1gY8K4nqk259qbdMZAgCt9pG",
  "key26": "GyJTmA7MJurvFFM6n9qWVSPtj8oeFwFGTrNCFftcdDMz4wQ7QpnP7gGVQdMfapFy6rdjSMsChsLC37mo2udcjPs",
  "key27": "5mMprWMzApaVyED75Dp3YVCKc6SQ4W97Xrn9F25nQqm6k8h6BprBDbDzPt1sFJjML1U6ffDXdJTQvJDe3PpozFZ5",
  "key28": "5uC3Db43SzDDiDymtTT9bimTLPVuDn15X8V7Hq7xrhkx68QRgnZN8g9GVEyym7DrvYcdHyETd53xR3CBnW7qdaWJ",
  "key29": "27X2YqQZvNG3TmYQ9D9LoEGsZgT4YvK3BW2Sn7vYp1zfJJ9Er6nGnjufYTaWb3XJN1yHXoKJb2RXvUGnASquQEu8",
  "key30": "59ZWg3zRZ7yJN5TWYQVhzWM1Vf2jZ4kWnP9Ly8u9WygjrEo2GVibFeCiBgAKqfevzy2VziU1RVSRSzQ9SNUtnrXG",
  "key31": "4HgZmCKrAgyrqbwttaFCNo3cCPWzp3AsN2JehwdNRYUNtjKYai17g8FDdX4fTHqxe9NJofshCb9xfVjskR7iN1ce",
  "key32": "DHjwee1kRisubGKRTRzWFQydpC7PphxwLPpTsYcreY6AY8QHyQZ3cDuW7d5sYedQm6LZpvrX5pqwQCbdNf75ZKB",
  "key33": "5tD77qh6VSSdpxhKCxZzix4kDkiQw6PRjGswPWLArGmvzn4BzfrhfswpeLNgwhp4zqPFP7kCNAo4RHhCLiiLVUvP",
  "key34": "4hcmu1y5R2iLHAoXkdYuw5omH3hnhANTd7Kt1f3WSMvAUVB55bZJ2fntR7WAELLYMUJD9mvwt9kKLxkaQQmyQZit",
  "key35": "5KMTcH3t1reGNwLDRygTsJFVHyuMeBCteiJMXRpL9LR5aqsS7gKxTt3NjYaknhhx33xnYMkr9Cpu8XsHJxrhEiTQ",
  "key36": "5Gr2jqBUkbkwQifH36CxQ7LTTHtb5frU9GYxFTHK5AYjaELNefwgpTVMJVJ229vwuoUAZDpdYsuqWjaFwaRQw7eb",
  "key37": "2CQELQJtcvoJHYnSJAzGFwUJMLAZEPmM899p1RaiEuuETMb4W5uqJmLMRHDXxhz84SKZ2ZGpoNBpfPCp44j5Xr9T",
  "key38": "5v2weaKjfEB4o9w7eCLMmn2TAkQuB817wzgEE6V9reyEeWNgd3muFMK1fhFnj3zv5jT8omXceUzshHQ7TrdLVGQH",
  "key39": "bdZ9LtGU9Fsej2188Kopyfg9GMoHmm7MXitFQ92viZ2x5NeNq3oRZTxMasHh5oca8yBZTyQndJEqJpyCxh1DGZ4",
  "key40": "5kRM9kpeXEZ9CwSqMfEngPxQcKE15itKi4S12LJsGzVDCTCXo6RisEnFB4vibuV19pC5iL1KQaAQc9MCRqoKaBdc",
  "key41": "3gVWwSraBAYsKXj6x22K7Je5Xdq7W7u6u8AoTg1FL228qvUku7ijenZnB1LKQfBaPBcMugeP3RZTCUPAKfSx5UCj",
  "key42": "2zSWGCto4b9abopWJyxFEbx4Tbcchey5HmM8YkZY7CPgU6qH9MteG4tGXpkxmnMFJ7XceakLWbouTiERfJJWZBKB",
  "key43": "51juU2PzMRewYxhVSDjC8Bbw1Jr3TE5WfihEFwRHfPgqJNcaxd8ZwohR4kehaGTw9xeoJftPvpkvwdhYkEVyr7Ck",
  "key44": "3QaBsv7qntFURyat6RZSMDZ94mjV5MrKrTEK9h5Z47XkLJs3zwvxpCQJjfZuVerQk2vTYX5RP7MYEZGukLuMx38m",
  "key45": "yYZHA16nebYj8ShVt84nM4UG12eUa1zwWHbTFugDdhkSpYeESNXYKEoQAnRGd9K43UXWkTRWMW4CJGKuUqU7kXM"
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
