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
    "KkDVRkSDbuxwzV8o599Hnd7q4nCkHGTjBGnRvYzUqUjK31E6vrHDrmvSwb5SLkZh4QFjC94Y4KHEE3rE41u3Qw8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xLNejgndEoJqqYXhRCB7ZdfKGrEHnFDS2gJij3MYAoXRxt1JUkNJPDkmnd4eEyHnWqkxNed6ispMMAoUhyLe1aP",
  "key1": "366DkTgaKNDtbrJHT4dPcPx2oFQM1GjPEJye2cyfSwqxJh3qvoC7mAKNH4JTBa3VjrUFxB3b3pGge6w796x6zXyo",
  "key2": "3RNCCU4UKX8vL9rwTpiCnEtUVMPZFQHRpGqUiDz7etPyn9pLzuKdPtDsX2xNZ7VEeKUuJgovazKqzL38VzithJ55",
  "key3": "37CAVNJLaRtekYfdpB4duidbE8ctn81D7K8PLtc6K1ymwj7e7UNNTtpYpZSarky7fQLHQmKLWkzjaKPA3aWi9sQb",
  "key4": "WrqeKBFpdeTg8HNqntzy3XHvPa9gvjxe8Mv5N3JFwK5b9N3xiTaifPksj9U5bF2inztqgYNvYZjxsE7ZEYPrauZ",
  "key5": "3rnSb3mcArPvEm2rWcqrVLmQjpXXXeVAk1ghsXn187GHnzNXacnxpTMVj5bA84W114v9pWgyJwX3vtfSt8ugFfbY",
  "key6": "5RuuqTVZE6Cbxwjq9D44RBuiftSmA2RrHnxL7BEM7KoFvppVadtwD1B59jEaK8zzsUYzZQiiUUa29XxKySJtdwNd",
  "key7": "4d6wceYvGnJACvd68yRbqqLzTtjHuYU7i3WFLjRtM5vJ9wtPcu6tJbmtfNxPGRfCniNNxyc2R3jv9eTqDU1koXBT",
  "key8": "5Ns2XmvGRJvJmWNWFaRxywRMvWvb8FRCg9mQAhYH2r29kL4Mpt6V2BJDh1Nqgy2vU3Cqvu4hRg1g73VwtxPSL5ig",
  "key9": "38UvAcCr7KFA5N8hFvXkYyQnjDcKpXDJV7efVy3pMLLZGRYqNM52hNNEwKiWAFUxaRWw87E4xQXUxnCH6CSmbryy",
  "key10": "24KLFeVjP5K6bWiVQGjJKA5JtH9MKxN5CTddVQvSLMYHomprXhX6D7H3RTpSpV4bSFtpwK9kYQ8zKJmiYykC3Qzh",
  "key11": "5LCvviavuJkMHEVFNwsvG3BQj1nSL4UxjHZj8toBhBC8v9B4iE4QzcXSt5ffQEjfpLAZYwZNBTaNk5KTvAc9Pg8t",
  "key12": "4CPAqcwpBZ8suXsjgT25j7mpCJrZTaaj7kq9vTHPWhReQ6GmpwUSFre8X882p7KUAEkTUK91seJTGc2uE5oRZfTx",
  "key13": "5snx6zSxECpaGuJHNfBMdYfpFm13GmEVV3Un97b85HAScEPUNXFwsiLctD3PGhjdy43PbKGJzCewWVAhdsgZqqYT",
  "key14": "REDgoTKSceST4c5Qisyv5RadTqqNh3MPsHfPJfGz6Hx5Zf2oNRpmbZsfJwSNtxJwfDvCWrWsZ1tgiA8MqaoNfcx",
  "key15": "5fdufN28hHhoSn1zZKsC5o1JwveC6h8NNSRbhMsd8B2gbSXuJVtp1BEGNJrH6JRLSH5gJWzT2BmodxMaTCWASpFd",
  "key16": "25cV4mYCFDj3UehNEQZXha21TAP36Y3KDcJhv5V6mdBtTivE8Nqhn27TodQFt73B1bn3o4V4kGiQG6cLeh65cjdd",
  "key17": "5dA99EMSHZiMc53bWcTRqja1GnecbGuX4VjJB9f6QtPfx8AQ2iNyGxeCcrxeZigsmHP2dWYTTRWuTx2Hx15h7dWD",
  "key18": "4fqBAS7RLVgbvZHULscz7c9urqowBHEx5w26cb3X8RgcS3seB3FV2qVEWWBrJJM9kHfhqcuHshSNo3oauD5FL8ni",
  "key19": "459fk2xaKQAD6cTNq3ELJRtKxqxhcTJisjwcDgjsP12nWDrekQJPp3uawSjdmsyPMf2jhbpivRqsb36FicHkxagC",
  "key20": "4AeCfrcMpzCsn5fkv9PJGscTHVkPfa3hbmJXHu4UEZP84DX4pqBBoyAk16zG24sMn5wAi4DwLUQQzJgngqQzXTa4",
  "key21": "3nmh8fTkaJW46qSXDcmqxo8g3XpfDSv17dhQA3PhM1EmLaahpx4yycoyRgzUAFn98VyvE4w3K7cd97EixJnsLNYL",
  "key22": "oVz7xqMVbFSxAHcSTKjN8BtCzmXPPgfoTMspuGCvZxeDi2Tfqj52AitVFkqKKJL7GCyg3L2SuUoZUTsEMPYVCrN",
  "key23": "3U7Y9iDXZx8VGv1gi5LRoS2fshNc8FKTjCs7P4ZrqTXytHXLknKni77bJr3TsRQozFVQ2bEcWF2QZsNmk44S8oXe",
  "key24": "5icNZ2wPdjgtNoDpUk9cMk2DWPGsirNmCA597guePvZN9gZvidzSbazQeUGEGfQgnniHNk3FzXkt4Hxufi4xHNS5",
  "key25": "2WW4iEGVLh8pJSbATvVs8txgoEbQQNrGMf5zu7eeDs17q5RL6ojTWR5kSr73hhDcgixXkwv8ZwSVEpDJTThE42w4",
  "key26": "3L4VJhjahq8zwSkrL4gbBDNYNF8VSbNLudDfxtaN3rWHWbqmEHKaMpFMRJ681BKG1dpmQ1w7P3iJqY6Pj8QMxkxq",
  "key27": "42kfiBwJJUfMUprFC2jefVF6YKq9SxYucjoj3zZdDog72dvUeCJ8wcaD1WQfJQb5XKYtUsuMkcMMzgaHHzFGb2v9",
  "key28": "3ncccic2gCtsmEpwysM5GXZtXgTYQnJhmxsnyydSQ1AaPmBS8kYJ9mbfxyFGVTmyaMJ8GYkiuEUFPorcgZZR3LX2",
  "key29": "3ddtCMHhoEYDXv25tNBDWAahWvjMGDAcoZ6Uo4BsKmaUNJtKgaVvNCrpeYR4oTihrJiT34CufeKUQYeJnLzV2FHC",
  "key30": "3RhzDor76aCfWKZjxt6dAZXie9FAx3xcmz38RFcfpuHHhewx7EYCagiRFeBX81au2TCexRaDkErD3dofaAmmNsrp",
  "key31": "TKswyLy8frS2heeyQXbtyg8r7hBwQbyuP6LyncYP7oZXCAi21d4BHwBNBxegKyeu5pyZNXxXBAbFJPwvukwRd4k",
  "key32": "Gq4jNAPN6JhnfHrmHfVBHZTaTFH7iRAess9baUQTv4WuW215htibiT2XoyyBnFeRjJE77MKeJTBh9CLWEgvBPf6",
  "key33": "j9bh9VYE7AbWoAdoFGkW6G6mABSgLHvSkM7RVAHZ3rFZmfXwaG8vgtkXwvrqnAcCKwFvNZSX9f6qYnJtzVppcVa",
  "key34": "Un3twTFVPYUmXaDJud4kAyTPkXQUzKiLRV8ArhRcRXZ6sHKWxEu8BidX1G8h4kJA7XJLLyAAtxcrVwdmRtnYdtZ",
  "key35": "o29hWc69Usvoo3rKyRsM3h1GBpL9hVwfqFUR7bYqACrJS75MqSz9b3YCiVSZwVPzkx9qU32CgBbRFhYZR8nis1r",
  "key36": "48z8bmRF38WSpDhmXcC7Pdij4oyTi5BVUdUF3um1wuasmgdtMV8HmemMtMbUnivzPDNPrqsqAAWTBjrMpJGLxveB",
  "key37": "gPL31hELwriEoBsUXp8pmvRy9zgiQ25RM2878sf3qEyD3CuzbZdNgaqqfjr67PXQRz9p2GJH6Z7withQtbDpHpL",
  "key38": "27foxpfVK7oARvkFaiUJpQYgRzDXvECY7boxKVWMdEcHtsHVxHzEgzhvt7Exgr49Kh5oHEuAE9kfMkhrFVG7PYy8",
  "key39": "4ZEn3VaLNVmWN9jMKeZjdRJumAzEHMhPeLqjMDvaTGgAxXmzBzjNi93aiKxBGjEoiWNcDUhdkhvgE7x38jE6NcxD",
  "key40": "5Yr1NrBftVygsncqSphDqkeva758H5PS3nwWerusLiK4GpdvRJsGHDEJ4kK68E2GkJmUQi5GH3uCoFcvQGv9qyvZ",
  "key41": "3cXBr1qdQG9ZUEbJTFFLWS5bDQx7iGiskGnigVGN5GhLWd1uSgzWvrqnKFHMstVPh6wrrS7UKZaJPMZwV44Z6nUc",
  "key42": "zQ7nMGGSiw71PC8rWQ8YzgVRtySKcM98DrfcCJE7FF6NeiDzdPMejYSnnQzWEjf4Mn2ygNmzDLkM5DaD1JPcHzf",
  "key43": "27EYq4bTvgavBiKfdBjTcSSd83LTiwe57FXU8gCrycbPAWBEekMbumMiXkmfGETCc7D61BDSVYi2X6uFJD5z7wny",
  "key44": "4cRcCqdyLQ1r8Dg4VBmiqjGBX7JiFMgkmdRzNYYxoHMxrHqZAXsxGAriY7LFpYk3BuJcBh8iv6pW4nQijNVabzW3",
  "key45": "w9nWqr24pwZPSySLdf8173anHYLj2Y5oNahDUZt1rw7Qj3L11suzyzsK9ADKMXqqm3qB9hZ69Zo7Tgt5aCN5Qjt",
  "key46": "3YvkDt1osiZtXvpRYySGbRSmWwUKt3apQ5KRRUWFeRtUzuqp2yB9dcV28ZbYR3Zo2ja5Sw1SMQbEwQH3jRwxZh8v",
  "key47": "5MrRMyZBNyKv9MpZ6RhgxRQFpSPtcw4G7WiyS8N1YVToCXwuTWab5inYxtD4UH6f7hHmQ1PL4smwjRLsmY4JyKsa",
  "key48": "FNqYJ5c93p96rdectzUVhRG3gG6UCNdxqCKKC2GubDh41y9cgqxBRt6bagRi6aPsVmFq3WizHY2Ryh8jbqJqoNs"
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
