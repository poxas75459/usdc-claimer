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
    "4Qr3NdxEbw6B5cHfyq6AUnkRwCLrxEn2A8mgkZ434iTrohhho73XBuwmdEjkQUTTvf8cE2RSstMb9t1nb1jKr1zk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3UMCco3RvAxz6ghdCdea7H4Tdr9nAcScqSHou9FmV3MeyDvZjN7s4T18rCfzpLEsuheq1wyXqueKGGT47NqZaosD",
  "key1": "3eVcpAcPCGBMgLekux1Hnfe3UZTkuXiTeT6vkqVnu1NWn6vNYZe1EcWK7cLCyXFHKxhuv3NQkHeL2v39yfyaenFL",
  "key2": "3DzJYjYrUk2zxNQVMcjpqCUQX1oCUKMgWbUVG2xhZykMTfKCZCKfhCNCBEnD8ZMs7LBqPBBwDgUhtqVeX5HAsVd8",
  "key3": "ZAwVaF9kzpWzUtuKJhHKhdEs33xrQru3zY69ZhZtu23eCg82Pb43kYvgP2e3uTYdKiEzhagV5eTbzUkwbPqrEPX",
  "key4": "2tmSSZB7phNCJXL4GtEhwhKETSZ8n3EK4sEtY7xyNWNb7X4i3VHQxTPmhjKSDeiMbHmGScUC1Q9VbXHCocQBSzLQ",
  "key5": "5X8VdLh1GFo3SzXoBmvGMx19ZzTmG1wKDRL4hkzyqHbKPLigVwUwCujFTpPLj7HUUdV2uwcDFERWsPJM43a3oE5s",
  "key6": "4JH38eTiaU6vLvmmXptrdreZTApT3QVtmCWxbCxjBhEeUJPw2dqyrvzcxDhraDFuJhF9LMWkpMTS2wGH2b7btGLp",
  "key7": "3gQFeXVPNcq6JVserDQH7poeA42Ft4YkV6YnuJLsFYLUHGiwamEYHcnCrduagQW4SPa5UjDyFvi9Dj5Xi2maoTfH",
  "key8": "2vhuSyWLbKzYqjGnydbuWx53K4UzPNJnmSDJC72ui5HUb648Zt9xPBdsPaMPPfQUPywS5WjDWs981tmHZsBHAUqc",
  "key9": "c4XEWSnrt2KtTqh6C5bEh8arAs1fucXXQrzGnqk8yazfEX8LYi89aLWY6Vi9sATsbayM6a4YY3rJHdtfe74JpcL",
  "key10": "b7P3zrK6MUDJRhijypdW546bfaSxTmHJ5WEZXAgkpb98sdzGSpJR5UEQZeD48XeXtYaad4o52yeJHYKq31TRY6z",
  "key11": "4umhnUzPCK6RRvFhLHqhPU4BrVBc4yiAZcm9fsZYJwVUyiQxV5bvmgzbbijCbYnqS8LhiadjsvMxPKbeVD419BLw",
  "key12": "23MjKLVnM3Wu9QJxikd7af4AqmANTKTA7Ybi7p1FfiwWvsLLx7MdsLLmym5Q4bxFXZni8nwAjTkoNaxyYF4yMMNJ",
  "key13": "2eusoQnjZhi6SahyMLjVykq9JNJbia5uGTQDycLrKKdRSqDgaDfwCj2hBEdcHbXmBqeXhb2mUcz381ZPPhk7s6Ga",
  "key14": "3eb9bT7DhcSrdMhTSvEVNDWDrd3coAEgrRA3dvsRq572wzkyjxXGJbDpmrAvQgJoTy6KEv4JfCQUrcr8ryp7JkwZ",
  "key15": "5Zs5a2j6xvs9Wqss1NDzW4GFc9kUvWCPJPjXLJwDdwZNR8VBhrvQ6nCVU2pDPBN3sJ49idfLGToxBEtZEKmSsr4k",
  "key16": "2E3FqRfFWRUpA5Nf9RKjVFNgPCmzR4WNVVeRH2zxbJdKBjaVF6EMu2EjzsWmWso5Zgzdk3p5kWkHdR69crZ1h8Qg",
  "key17": "3yfDHE933Ys3cDZ79reHcmQWqhGiUEJvai7fGB4swUVGyGTUzfHPZ3Aw8Jbvf2pGo87i1ySvpUEBR4WX9jiDf8Xd",
  "key18": "2fRc9vK2pi89EVq7kYubBpa9Xcbe4J8hDtFZGunfdVcahtqqvR1NpkW6Ky3ZKGVbseVseFiqZPeYcpPKzomAnWRB",
  "key19": "5AvDz5vXrqpLnrJ1KQE4DXc3c21X7rfD5ddhDkbMsMVQy49eD8xoikK9CXxejQy56g1wEjfwkW9zXKir2UvF5cXA",
  "key20": "3RMm2akCB4cD3UTnjbXuJXt5dU5BagGAUuBvfmgCu2sqqEikvY6WWxWE7EucPdZbtPrYoLrDeB6Yax5B14yZ5jpG",
  "key21": "3aVZTRpUq2YhdoGfqYqXp5mR4cgh2rXNE2QN3ufHwU7ViTDz7MDZRdbBmgyBsJqCtBwdxf7E5nj3gheAW888GNY5",
  "key22": "2U91tdcZT37dv1m8yAPLxi2vsjHKjAtzcHZVWKbMUfv2tqVFRZGejBGdqqWwrQ7UGkNH8wYNBuNd3721gm88pean",
  "key23": "3qWG1tX9GSgcTd7QBxDuYMVzhcWJeaYeamicNnWtQdEuTav3dQQFTnzDE9jVX2qcwnndgMrpn9Z6HfjeLsSAovQn",
  "key24": "4zrWYoB3cxYM7RMCjr1DQkuGJaBcFXpeCfkSdPkHikas3e1EoCmxEnioTKYmpntqPx5EiRoj3fiooiETfaGkLC5W",
  "key25": "Miwweiz2EuHMcbcXtYQZp8kWfZJKwwZndPL1LFqDVZUe4azEgqyed8phFnMhqvLpZjPJ5aiEv47k5gZt7PmuUaV",
  "key26": "663QDiGcYweWxUCpdUYhtMJr5damjawTLvotw4A4J9MgBMRdfMby1hGuj7c6pX7YRLTfhHKztp4YMt1fxfeYSvnT",
  "key27": "4K91ZPDC1ZEzjpFTJbByiHnBWq52UVooPcEUJtLZnFgLHSBNPGbH94yJmm3zqGe6mxJnn72Vozit8D7QhQuM23r3",
  "key28": "5nr3ezh7QmbVwfwsLuiAQfiebqRPktyDjvcJhhq2KGSpdFEffVyd4tgVTAgCZ6BYWeZdwgJaEsUWNVvWCvqCNCjW",
  "key29": "67NQUhpRnqj7pSy2RucCzgATfVrFPYS2ikwmGaMsr96ghYZVFTgthnYEHvvYywJhjy37TQMapLsBvPZWvRK8Z4YV",
  "key30": "5jh7QBq9M2jaxShz1YzYD8ABeNbvbvR59Es4dJNdGyLGcjxL9qyiyX3KSGhYFHDuWtr3FwENjoLsqm1Zngo7dpVc",
  "key31": "4R6Zpv2dijcxKks96DEN4tNzN1PGMJSJxX7J1kXayELzthFwMxRzHGgYMAGZSF4BvXCT5Fwf1KUVtoTJq5kMLwn2",
  "key32": "2xhi1kHBjJBp1NG7pM5U2jQxCwfVVJAUGtSmwbRZS78Y3ZA1aK5qqqma5oiUBMBZjCPQY6F8Vbo2U23FjHKgJopK",
  "key33": "2jFKQFY46bJePMM4agPpaij3qtoovR2msE1a7jTzkYju6ABoHisEzDNwRyHaj67zuRXxvE31vqZ1Um6oo2v99Tep",
  "key34": "2JZuZMc7Fz4e1msCTfYoB265Zwzdg5QpAYA4BnB6PBjqBHzh3uGHyVQ8gpNnPeUCAU6UJ8CaeVmPr6oxrbS24JtV",
  "key35": "xRcLZ5w7NedHpbjuF1tj9QRrhJrw27xoFHCeA1Ac5sJ6Ty1qxWVM8aijhTYNL7SYvQTojB3D9gQTUytMHQhKz5k",
  "key36": "48emj7P44qJfTrmx8utHr8kr6E623NqmASXzqafgzXtDNn3LomYoqxP3ASprXMwefSWg9cVT4BoQPYyDRKovFfKJ",
  "key37": "2fF2oWba8ZxKv2ikxdUhTsLGe78xznb81rVcsMZJ1htmc6ivgstu8bY71AdcjSDm3ZoJzQShzm8Ew4TquiPnta46",
  "key38": "2ViCSgLadpAWShDNUykFRegfGwASbmo6JM6a332TYDzJcgFf8C33jRupbp29N7zHQABVc2RjRs76dYWAzjNYtiKw",
  "key39": "1ae2LpqKRzgRUf3oEPDBtgWvFawuyMMZmfuNuDUU6foY9u3ZG91Fp2pjk4H3UeWDuheZ33g8RNb34vrzjndmNsU",
  "key40": "3jxaiG8kGtenXzRkJ6ZNGy2QtQsjB45NLoLb4wWWiDQ5WYc6ELdsty2yHSufjpNHgS1KeXDVif3AQfFhEZnCNTcv",
  "key41": "5CBJqwTVdj7anqL9oTQ5f2W6NDaicStnUweSdPHJTWTYgdok6obKN4W566hd389WbFAEPRXmytfnvdwpQVoz5gbQ",
  "key42": "vjqZ3Kd1EjnUr99mtWMf8vvVwhHpG1cdRrUHGt4wp5qmWWgCbU7jqzHtZCJC9bE3zfP4EKTTKDbbBJ3yWXik1AC",
  "key43": "3QPJ9X9uhLV52ZtjEPem7SWCta5rcNbZ5HMfXjStWxinG3osV41wDSV7CAU196HaVneViu19hd9aAtQBSVeN5DSz",
  "key44": "4yZPTLs3rgwQPo7obnfLVmQH3AczF4GJugoErLWWUHtx1moUP98RbvAMkS5vSS2wKJUbbuv6iBHcZZj1b1E9goRn"
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
