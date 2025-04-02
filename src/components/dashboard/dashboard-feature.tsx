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
    "2Xa3v1TeeJMMHiRjcCDEwF3yBhNsQPKHK8XYNRmM6AF6tEAvDL9QACyZgmntay751tgK2sMeTNoNK3X7BwYxXh6U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "678hWK5ekZQHcpqK58MAx2YR8gLFGv1Lieh4TaUvEgfDpAMEPHWe1nxasCtpkd5JRaB5j2qpd3mxz2gSpNJ9yLKV",
  "key1": "26DFfq5FJr93SBBWampw7eqVtB6uGdyCfCewrP89etv7mtsMvgjMMwWHPRdxuem9LZbRrNm3HEdoHQTM7oqGy2jw",
  "key2": "5tbFPSKeQi2iM94WoCmBUcmvYVGSEtk1ukQtQ39CSYPBVsWNAQvAuSJA4neonCV1yHGdXxd37pQdhvQkjbmkzJdU",
  "key3": "3ssgJxXB2TRvTVyByiwvnRgmFdDqQpVbgL5e3XKCpQaaNyWsZU1CjrYmLfJAHbKNkfjNqYtKvVqjsHWxMGjLnpR8",
  "key4": "3UnHyFXZDMtwdjuh4u31qB2JaHhWTft9XFf2DyQK6uRHv9GT4TvZzPtc636T41F1GMDYXNpxRwSehYHigwDS94Qm",
  "key5": "vxQo8hyghAVa1wY2jWRYe2HEbMNXKjNsEwtFioTRAzYAdB1Yuv2uRpKELxSnjL8F7fBdYZxRtoLuCiFVBAEaB5Z",
  "key6": "3cV47n1ebp5HuU6Zi2oGMnwj42xVmz5byppVCDjvhVviBEQa5fLrkhTuPP2zGkKqnJpJ4c6jbAGdhg6Vx4bAA5gX",
  "key7": "3nAbpMzdE7ohdzpYgoRPhFoT4Tw2AdimofuThRMR1MSZAccrttkhoodFnn3i3ev4hvk2DpkaVkPhRm65wQ9qGrWS",
  "key8": "2t3AsaLcn9A31HKy14b8dqF9UUJdLPvU8whGkgWSbDaFNpYhSqqDH68LVUE5SBpzAwGERag71VDaCEYKQ8dFh2Cc",
  "key9": "4Ck9tSRfnT3ay2H5fuAAUNRxB9gGgBAQ72yPnDxvi927G8iJPBfosZ7WAFsuTeN6E2pw8iamTdwoHFNhFGWV14e",
  "key10": "U7gn3N9E9WD5VrM3FX8Q7uVddhYyLZgDVRQhTuXUzum899aV4yqECe2XE7b2BmAAhAy1puqF2GWrU92nhWmXkju",
  "key11": "5n723hUZKBVjcoMyT85R5wQ9YT7RNXiq65LkYbBHfVipuRNtLqxhNoxWimAbsHaDSZXJebdkA3ffk17cSTGPuAsW",
  "key12": "5s7QdgsyhU5qyvAXUNe3azZ9nDr52Qk7VwBa3ncjh3f2WvLGZpwhxhXG1WtFKJ53BnyMTVUR9wyRXt1GYaQHRjeu",
  "key13": "AfG6rZ2TGdrbZrCkiWSg5b8rf9bm4Ab9SoMpxH1Ep2i6uHg4NtUv6SYzCm12Y1TmgX95YhoGU7qKcko8np2DELs",
  "key14": "4uHzsvVULh5LyAdJmfyvTKtyQPnC3qE8rDGS1raaGVBHk9FwXmmET8tbA4kSiFmKf2eZQ6USAGabdHJA6QUFxh4M",
  "key15": "58Q2e2iQp6znipXhSXYbstwE5gjGGtGB4WmjjBZvobUt7ryyjdqDmSqvebjeTG8QAMPW6hEm9TSDoz2FiCNisTq8",
  "key16": "4tKDRqoB55CHcskCkGw48BMezAxoGKqXCPzoecGpxJi9v8CB8DHwikRPpkGKTjoPT8ZyGXPowwmdTV2zw8Qo5iKc",
  "key17": "5vm7YEVuA17j68kogxUFc3LX8MgS6s4jXmMMneWWdiDbcZHeH2dtq9tCKdprEYEyjabYHk3AcZQJUwkRhqwGZZKf",
  "key18": "4CcwENNG6yArq8WYkSZwmm7t743hgMNRXvrULSjiV1trERkQNixNFj47t7CZiM9M6k2vX1coDkGsUDN7RyB471d",
  "key19": "3P8KuwNR4CDYUDmNJTUUbWZPhPm5pW3w9qYrzSJXEfajbBtMHEBQpicr9jbMxLoV3oSJJ8MZRtN2EW1tuT3nxhmW",
  "key20": "4WXsYUhYis9WeQPeAhyJxPXzpLsQiX8mT6CD2oRfpuyYGeVJ1rKhBRUQMcetT9Wg385Uoz9Y15McEVa2mHp6JrRS",
  "key21": "3Bn4XNAATGyqvn3yXRQcUepXbPRYYEmuY4CkoscicQUf3iFUQbM8DBfy4s9nck95np3ruJZhdE8JDE9H58VWcj4Q",
  "key22": "42ubAX7YTQDrBP8g5LpKf4jAaiYTJCiyBrg6B7YvAAHTTyDFqmqATWXy96EunbJFiAgDmWpb86zNtTNVAga1aTbV",
  "key23": "4Hm6aJA9A3GHRXBxtp36Yda2QVLwG3ZfLRvyaENETve6WUemDecgkMabjA7EsZicQKoUTXKsH1fpr2xs9HLcEaZK",
  "key24": "3EWhckDKSmBn25AGGJit6UqoUsTPPmA94GTk3dPmBxcgaHEbm7FWCg5KTcu3PfYiwj6mo6dkk46fS4kGhRNrTkyV",
  "key25": "5fGLd6R1usvJaobesmWjpm9ui7gm9LBHtWr8KQgkuGyN1izr6bWqqhb6wLv7tRxMhmTC728Du456jpcpTvTAHjdn",
  "key26": "4HE4AhKYxoMVVzhpK8gHyF23skywWT5eKxHZ4Qr5NRB1RoE2h9jhGmFa3HJxtYa7Crqwxy5vjag5v3AJngqPL3Fq",
  "key27": "2wX4awtqrBevybD6ejrnrKwc3QrxGkjpdDA3o9bPgyF9P3yW9dF6gJuv941NBDn28giFuai5mkMdcD5R7qDEFNjP",
  "key28": "31MchxnUSdj9SEmqrZXVrYNYwMizAoeGETD91RPgwGcCM7Jqkkhk8VU6yBKTnK7cNgiYvEH2tRDCACazEpvQ9BLL",
  "key29": "2kaEXepuQ5DGtGJ6x2J8zuLdYRMV7bnkZDZqCq1o3199yGEj4LjNWc5e3o5nXRyB9m5psbbSnkqxzBHF3jHgnijS",
  "key30": "2ycuVuwwbZTFKwUR4bhTKzdrZD7nNb43qrGQ8bRR9dquRB1d3JSowcsiRYZgdLDoPEqXZiDMDS8s5cPwGVw58AZA",
  "key31": "4WCCD78Y36jyWG15LS4FXFhERQ3DvqnhVkNVucjqajNxBNooBPzVLTi8C731Et2CP3vEiMfMmDc2SccnSbBS5ucx",
  "key32": "3L48297w79WHQvqSnHxbeFE5GPRkRMrWWCtuLhFUb3F8V1anVF6usy3AcbeCc4VJwE2Aa6mYct1m1V6CpGHxFeJQ",
  "key33": "29yfotyUW6bJx4gaUGcDmvFgiVkMrH7QH2W44HDfPaRyano6bVuja5N9G5rESnpfhwivCytdWBobd5oig5Lh3DRi",
  "key34": "5Q2aCg9763YfnoJEkuEEDkop3HFEeE7V25qrVaXNoAwDVQBQRNpfZ3sV6oMYinnyt2549shHWRSJnoSJuxcSADet",
  "key35": "3W5To2u2rkVhc2RrYYaTcvrVp2NAT1GqgGwNGWFaYZxNQTZNcmVxJNw1TDj2AhxYo1ku96D9iUvGqU55EbF66QRs",
  "key36": "27pAe1Q86P5gG2Hf1zjGNXFdbUVm6hVUimiSY5zoWnf7GaHa43T6uboc4CTFLZHXGe6Xe6vmpSoWxEh7CSjCPzJH",
  "key37": "65SgiJfrhhcbuPDLFzsp8B5EMStMNv56RiaVegGs8zqJM7zS7ERPfA5fQA2kTxVQbwnyi5PMfMtB6gGo29P1TACU",
  "key38": "4RWPFq125aQA3DuuTmmSmJXpPaee2jiHZcQFJEkVqJE9wBGrLJdLEiZCSqw4kvp9duPDuMPVUpHQNBjGDR2mCSSr",
  "key39": "23kh3jawsBziXfMhKUDNa6epHWTHucAKuRddvrXGs2cvqkji53tEDssUDMVRT8hp8SsB8vSCwkHG1RWCaapkV1hU",
  "key40": "2A7B5HkYVuayibuNx1URXrKgtqSjTKfkfpwmtuM5DmYbdRwTLxJhHib4oSqPfXiq5D3PVjJP1xDGF69kRW1GhYTm",
  "key41": "34i212FiZciUn6LHfZatP92rVYMwUhBiYsEvEQhutyFocKHzuYVC621RfKDk7HULzft8jna1zfYfx8236oi7gg3W",
  "key42": "2tSEZmgkcTBiqmU5iaomCDpnoCWWu2wA2rgxVP7Vt1353LXBaVQ8aFnkaHPxmK5W6FMiMNN91BKNm6VXSUkAjknT"
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
