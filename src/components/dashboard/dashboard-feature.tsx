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
    "5o9uzXje2TbG221KSiPTmN2sowfiLcTPYwANbUDLpEujrKr2hJyMqmq1vac13ckDrK4XxCvBj1jCnbYkBniqznpM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5sYcTZ3wFL37BWc3yHMHyiC1JRfZJ3CDmSL6PxgQoUwveA376uBK72oP7xCqBeyKQTHk2MaogZKMutr2Dp9SMG75",
  "key1": "4orBAq7XEjFVuNadKBat9ymkYGNSpzSQ9bbX7z2hVx5A76DTyRXtatHTgU3PV9wiXJqR741h9dT5reqGroS28Hjo",
  "key2": "653EXpyBiFgAsNQx6V7j958jeDWXWmiA8X1AmKBhRco9hgBEmBhe4QcYhXP8BscnzqDXaeAfLwPBZvowAQd5eArm",
  "key3": "4mg5tfkgS6uyANDKZb6A9K7UmCfkLxAgF8jm3ps7LoASFXNsHgHMTVBDDx8ikTYy1mmEpVBQ68aFsPxkA1GC2fg9",
  "key4": "fcTye3PBmMoGWsYKXReuwbxy5j5FLsj1xwDr1gPacqwYsy2vDFs6LkQaZsF9XbZK82qX2rhqdaRHHnK1xTwy2wc",
  "key5": "43avqCEKCcppqseSfiefaLnLTgBDtT2c1Lz9gC2eoo63JxRU3AB9SdW5xSpHAAdnfeoEqS31ZhSFdjcztRSzBCd6",
  "key6": "56CaagGhKGXLCqoUBcaZFFF3d6DSh85xDkAtHDo7tuAp4GQ1znpvG8bDxVgf519MhLw1fNZiJ2ZZuNw5peSs8ReQ",
  "key7": "63B1JGEf96UQUN1ga5dkU7pvWDW3xjQ5yKXR15UXU3CF767Bu7yfuAqtQUAm36NJT9K58ijsP5FZatGggS6JDASF",
  "key8": "fDZZb2at7fhya6rgQif5MtDk6rtKw2M5nudgqXCKXmATjECKR6kQEJmHpwJgkyGuFi4SZQEPnMLdW7JEWdNwhVP",
  "key9": "3Bbh9T4moJJaJXLDtrRnpSvki2ZPQo7BMRdQLBZsEvfa5d7V9So2yai3PWgqtDAvZv7grC3f6gRgmDvg3cxmoTQG",
  "key10": "3qEMfFxTAfgTBFHSCfjobLyngvbVTpjm31oFokFVQi5Wxt7uLun3zsNww2YMosdsRU3fa8Ftw49jBwYb17WXPvJ2",
  "key11": "5GFyaVsBcn8aRScz74GpqZL7m3ibWQRUxVWC5mnvg31yf8tDqiYMvf7173ab9urg2wEQvM57F9vJwGpedhjvX5Yg",
  "key12": "4eRCYZKMFAV9o5AX8hx5cbnZzKrkfdonDfmnxfDaWcFVu6EfxKsuEeGP7fUV3xizUTCtwkTCtqF9FfbeYBynPwbX",
  "key13": "2m1BHhfgzc8JGnXS2SoAyMTDfzsaZtBB9ozuoUq2UPBKVdXL7S9sM2LEPMyhNs37KcPPU5QHxa366TER18o5F1KU",
  "key14": "5h8UdYXvKHvbnjJifFEGeRmD29YrgJunJJrVZCNEbNbfXDvMZNKreAo3ECiVtAHMHDeLYHUqtZLzdJHWiuwwVjg5",
  "key15": "2qvayFofzMCPYvBcAGJ4BtfkTYt7BMPhVhuDD5bN1JR9jCBhgVepCZZKW3ZRQdQmiHqjc4LNoEHBnRkUchSSQfE4",
  "key16": "3E833WZ9ELtrs62geJ1wygBUq3bD7q4zWSo5qhycMPiiKrMyRtkFDGyKZKSPNFsoaFAqLgbRgmtqWLL4YaDWoHZT",
  "key17": "5am5T4b136mshhamdsCs25kFGmEoj9hFeCGQMxG5pKg6Z8pJiswzsbzB5iYp8Pb6WBcxZ4tEiHt86JYmbBnjjPkw",
  "key18": "5L59WnnVSfN9TtMVsnkTPVEdWc3WAwSTMZhmA8tVBvQsDrJizPHsa4PmMLbWZNVnT2531bJVrAv232QTPmBWoUaQ",
  "key19": "2C5ZhukhcAYLof7MvGhoG4HiDtGZB6gKjZu1k7QzBgAxw5Gn42HTqXWu71N3V22UYvtazqJnXYtZC8bEqmarYKBn",
  "key20": "qd8sZW3P2ZVtZjFd1cLRKp2NgBk4PGNxFSS2cZcTv2eDouHPaZXNAV3LVovuMfi445f8VhmYLLye6hw7AzZJkx7",
  "key21": "2LWuSWUGsKiMi5nmC4vcpEAFzePyxRZt18KA8Fmp2N8i3JxHHgDLP8v82KxW9ndy2BDSmJU1ZnwMjg17nGwkX4rQ",
  "key22": "SuUXgetWgCxLwt23kvQ9Jv43bc9sHLMH5oRjJyiTUN3BD4ti3VU1WpadGqF7ybDvm5CsM9EJpkJgKUKQpBcCfUR",
  "key23": "SZ9jh7D3GvLtTnZAPj1jGcuK9Ly6cFvopQJxv28i11nyPVYSfKJWop3idvkTgw4gUgrvfQ9cKuX5MDkxa5AUekz",
  "key24": "2oRR9TGNMyMjMPAqqF8MxTdq4MosLJwZwqgUdbkCUTufqqZxGFKY6aGpvBwzhUAwxrtx13TcbXBCS4PFAxM2GS5u",
  "key25": "2tScaeX4QgjuB2ZQRVagtUyKgoBXFUzzJBoxrksst4xtbB2Jcpx2SzM6895pyo93WMASNZbiSzPHjeQTokDDLtiH",
  "key26": "3GtcZHaVQonJsrvgm5GBFQQ4hUwgD8JNcesCRQCxUGrQLMwzRfSSYwGpPtDx2JwagvTEZwYXHXDc9nG95jt1FGGy",
  "key27": "2hLb4zCjfNE3Pmy2p8kapmoNJXDoe9xnVyNGsMi2Pw4tbJeHZvE4BA8ZEAwcEwr3r6CqevLq14Va3Dnbj68CVZi",
  "key28": "5iSXfcFe4GcvKfis1dxkYsCSPn91xUaC2EEjke4Y7J3h85BQ8jn2tQLQ9TxUUwHwzqvEzGsnQQ4k9rpnX5orK7Kn",
  "key29": "2t4BPc4QDW7Y4vVRuui2mbzMTyqaRZxXDQEMUPP3LYvQ66W2itR7kzYwyiEQLKBwThwZNzScWZWTKgbq6qfQznCF",
  "key30": "5e9CsJbd3WXNoRA7ereMwsfM4Qm3MHK9uuzP7E6XyEvUE2occpkZ7mqKgtxnjP7osxKkoG9inptjrTBtj5og85yV",
  "key31": "cAEGDUsF6Hv7fWes8cL3ryh2SWCbWtBSmc1V3NUbuJr5dvxDYzVazihNydQoeFFyhp6yvrem4dp8CqR4X5VEdKc",
  "key32": "2S7ZDnAa1t4JjDKKRC4Nc82hFEdUweVyrk4RUQYVTSGRRj3uADWMXxEy2jVRnGdcHRgAPWbQqUVRyhDJ3SRrFJZr",
  "key33": "4nfRZdQdWf4NdvY3HpuZtyTnmkCXDXVNAMtEiVXD9Czjy35N9sAQeKCdKVk4zwSHNfMsDeq66A62zbXpzSwj3cmM",
  "key34": "2MwekfzBLfB9t2yfTra8afDbXQ2fzJdWisuf5Y4kFkVMSsyRV3kiq8dmkkKFthcUcXLhYiUZw8mExVTUHvwnni4k",
  "key35": "3VDYuqrP9aCpKfPUUZG6czBzdoGJWXZNNVyJfzznRydAwSHUbVZqznVRBjLsvz6hkgBsUCiWMwzUAoda32c5VVvA",
  "key36": "4VN4dZ5VWvcJ6LTXSHLbbLZxAA5zdGhodeeqFnwwgcQALbdnGUhNqzqMjDNZUGLs7YCXpmxvkx7ijYAjW16RRB3H"
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
