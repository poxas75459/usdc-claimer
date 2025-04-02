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
    "UMoenGsQe8WffrojqmkwV9qHKXeu4pupwGpKEGWDTReTo4Q4S7LkEW5vt8pHKZdgFNoa4dnife844n2f3qScNEi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "FvRg2DiGX7LKC8X5CVnVop5mVznJuo2x1ZvMV2CDxP2WbbSNxE3TR2FuV8cGE49r43bcfk6oUd4Y6ea8bR2MeXz",
  "key1": "58VCLXoBSksp1dnu2WjQNhQvrbdDAgwaRs4SrR1DHRwWz7H2H5suGvMMXjEX8jDF8Ht1MUhBsdCDZCadqQxr2axD",
  "key2": "4UEVorAvaqCzkd9TRXLb884KXFfcFUiuRSv4CxmfHf6G68ihoiwGmTkHetYuEsGr1jQMRptvLtus3ag5iFhso9kB",
  "key3": "5jNBmjiLT8P7j4dZsNWgNPiDubWnDYS9Qm2gw1FJKrmcBtoP6UhdwZ1hG75JouMi6pyBshLNBT4teXxyHC9BnT5g",
  "key4": "32EZdax3yxKGzEcE4w1putd3H1LdwqJVWydCQjUS2XhrAACbXXGDgtkf7nE4x4HwzSzxjefs17QuRkj1U8TB99vX",
  "key5": "3ksV5U95um6h5MZQxSDb3gcWTzWu7s6J28R3iK5Spq6yeQZ76HKZfPsfUmAs7if78w1GdWnn853Mb3cJYbf6bFQo",
  "key6": "498JEQdr6ad8yh3G99G8RUqLxdNuspXEDknYWiwep7sZrFhbZXnPBHwJqnMFZsG1qvTeMBXdmFi1neGgKyEyxGMy",
  "key7": "24DZCYVzucLjvYK5yK82yhkkPQxwUg5HnWwHFBiSWjqLYJmyT772sK2rMU6LbETkwJEQxAmd7yQnp9XSTV13bbm4",
  "key8": "45J2yLM7iA2btRNVGP1WbEgAM9VcNEAkkce4jdSDbGBYvmjaPm6Df3QmGWaYDdfsq2y67uZTcjfpX3pE2UHifcN9",
  "key9": "2uKTCLhifkPmz5vHZVp9micuUAKnqoPhne2oNx135SDw62gkfb25iNKPV1NT2o5XMVCJ7RVHTEkiaHRyBhvid2Mi",
  "key10": "578rCfueofLVM5AdZMNe6KR8yML61CYN7Hnk3jYoWgpWjFBsUTH9H5t8sXVQbqsAh3pssDx7642NXDSacAWqezjZ",
  "key11": "qNBzkWUumCSWviZz16MYMZdNXj6HNBUMzM8kmdDTxB94XBz2BAko6sY7QBmJC82GHCBdo4bgqCkyc6UoeWeQUh7",
  "key12": "3PEALn8Dq4SC7CoSEzT9gCzaxvAEjpgzY77m9zVR5qv8REbSMgSRBeSUxm5GxeDq5RbFf7C6562M8s7PFLXbXNPD",
  "key13": "4LBiFYJ5CEQtqvRU9QgjNjMoC5bdLKX5ii7N97Jnt8LcRQAEMfWgTQXYJKhAtzDuWsWZ8qfTi7vappzarf1SQSXd",
  "key14": "3jwmLzxHgdJwSPfaB8a5m7pa7vaTgDJuyVXbrvGQGA2HQsVByGSQQSMdVushkzh1UX5Ns2akRgKTwQfDUdZVMdvs",
  "key15": "9V3RxkSWFSVoUyeDx1Prqj7ALv9nDDqAvhd5rvz1ArwxbRJwwe4uXUtc4saU23jGWCYqR8K6ZsW7KR9VPzWCVYy",
  "key16": "Prgipy81oVpBLuYGpDPTzikhzrNnwUy3iS4LdWNtxZdm5s6yv2Gw9ZaSkSQLrmMu9W5nQn2oM5CgTSoKkr3vpwM",
  "key17": "QprBQMsfWayP2Uhw8TyHarTinaWXUFF59uupbaG7bFKQmp8h5Gki2P7d4rfWXhyGDXoR72mV1HR1Kva6MCcZeTS",
  "key18": "qrRygcyi3qZUWBUyD7t7ESztFPv4gYxtV8UFtbNRhSjTC6anfkHE6iXrsbA1f2H79Gd98NRuND3dz4ryx6CoasZ",
  "key19": "61ui3ydubuxeZ2w7br2kUECbE3uw86cowyvMr6Fi3QQYJHXFnSZ4hDvVWMjenp3Pa4XMbwxtLBvK2CGVP8mr4PdW",
  "key20": "2yydYB277AGPAazAen495ZV2Nn4XhVzYDHftipS2hkivHHhf9LrejVChaRi6rkTE4MEk4zBPzwirv5mfbcr9ZwGN",
  "key21": "5Vrhb3aQ8afxnMAFYQfs42znon4UQdNEhHLNfi25fmbnXTiEXXG9g8FWnpPagiQddD7J7VVtwyMz9F9kKbNB3MVe",
  "key22": "5nu12zY4W2G2AdJktdx5H81C3ETgLANEsmqUu3KmacBUVPVpVKiJXFTmRX6yZF4XPRLq93sQegx2Hx6ZLySiFV8f",
  "key23": "4BqvrShjeXSNuSqWY6NR64EMFPoNX6mvphVCWtD2WpaEcZqN3XxgsDco7nqjKYXGN8fvaZhq6n6UCFpuyBNtuvsa",
  "key24": "3ZzpwEtgXEMu6eh54DQAiw9mni3jpAojLMzQckAgu3nPXoCHdD8rUED46Qd3sZ5sAoAgCQuVozFKDmnrEQ9BQhQr",
  "key25": "3pjiVxDfSJFZ7KUkPWCBSj1GfjiuPPSDHRXfkRrJnSWUcP7x4g7hoPPZ7Zt9zhQ4GbedEkAXt3uDEZroorXjfkuM",
  "key26": "cEqQDhc64SuqiiorL6W7M3ZxdDn2zGPbZhtAMpyWUTvSnFAdGArTrF1qeMCfeB8vy9r3uUqbRi6X5urc3n3bBZQ",
  "key27": "5SmcxTpYE6t7NKaweVFL9rDrWzbwrcerttYDQusWUyANZP4QjqyCDAQ22QjhYWC7856hBwuvs4CkKpM5yiewuAVb",
  "key28": "4tNu9PwXDprCjVSVT6tbmm2xNKcJT42C71uyKE6e6qmVNjzj95mUsH9ShTCTh8Xcbk6gXpyTsCpY5UyiZy7kDxQC",
  "key29": "3ftrok7JrSdCNsN16wNfR9SsU7JCmAj8y53Vd4YZ6V8ncYVsN2dm7eyzebAsBULZVxuPLwzDCNShty5eMnyjpPXu",
  "key30": "5UyCEV3ptN3c5SJ1hhBP53JyG7jt5hrSThKGPhn8K8dm8GXB7MjsFdAwdiVeFEFxsGf6Hb55huM385A6WYXwNgo1",
  "key31": "JenUHn9FW2e71AastdMmeChogaUipcNNdbj6kWmELrNDo7B53msrgQ8ZWUzAqBdHoETanCqgPTwCkP2Jr6JbPMQ",
  "key32": "5F4WqZGhxUaux1wcEXPAMR4kgFVctjtKggxwsbau23ZyFhdMD8rjQvPXEvuRsvLCfEH86aR9yMinoqBhRWbAP3p5",
  "key33": "XJ7d1o2EbL7DFQV6o2L5Kjvzwei5Cb5cTKHgpHedzvMGfzTZQMrYEMQ7A5PAzD5BFGkCN6whpyHDdusRehPmsCo",
  "key34": "33W6FYpKfFadesTv671yGgSJRRyFsWhBXQw8KvHpG1y69zPS9a7HbULZXzMq15XU6U55H7rYRfSKVSKDVjBjtDs3",
  "key35": "9bWob21oidD7NW3QPvqDDgpfgCsbLoq8DEaNTDX2SYfqHjV6TRCx7QcLkb58EqXQEuAf23zbHXpzp6XzrpLw1Dq",
  "key36": "gqcYe8FnZ58qz9gSqG36GkwUcVm3MXiSfdDn5HyysFkt6ojMDg7RrVqfdwSCeQMPRH9pz3x6KdGjap6VoAky1Fh",
  "key37": "5qKHzhyK2HSAAU2jcXTogzky5FBX8QcbLbFWEZA9hALQkE7gRLL2ahQNqxzP7PZtDaBgnZHAHbYhXBwcxxpuqX7",
  "key38": "5vddhxPTLaz2xd3xcivGBteEzg9vLRV6p4ekAF5Tk6acGz1e1VLK2XhzGTDq6HRZnVxsqKrL8eZYRtwZreU6fP49",
  "key39": "2qNeWKxBu7RXGnWSGwufQGFhSrUzg8wp7aLTjfov9Asxync5A1ixtYa3warEPaSzr1239v4h2h5oF1tcEEPkiSzr",
  "key40": "5hP9H6PjTtPogtF8KZ1gyj7Ue2bAyNxpx3icgZuuv7HxbuQ27T99yFZKTyXYpc7WsQnM1pTsRiRx1rHPTKmZZS1o"
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
