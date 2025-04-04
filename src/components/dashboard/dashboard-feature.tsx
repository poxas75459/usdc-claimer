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
    "2JpDYsGGSmU1qknxXXr3B159umfCDxKbX31KrCzLaSMkesceQbBWupobeBKhc7epNLwx4ewAwvFR5cHPTpaqB7sX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2JmgWQXfqGW7FsrzjUzBLGvR9MJD31w3pSdX5vzhMHgP9iecoL5A1J3ar9gbWeBBgbKSy3CnEDuaE9x1oQazoW3U",
  "key1": "2eJYQJLVA4egte65mfpyy3FaPx39eEk6F8qz7VwkdtKE8Na9KJLbiQGZcM7Cp3FVrM94kZQLEiJjDjeXDuV4PgYQ",
  "key2": "5FN27cFQeeAabtSbM6gvjFxmTDWwtfDHWHznZCdoDch11qP3oM71cgKkBbSxaxVLoUAoqWsUeNcNrTm7Szj59QXb",
  "key3": "4Atny79qfyntFv5Rq36gNQ1kBdeTmqhAegKcDfhJTgnWghFww5WgNmcgsttSt1gnNFm7xLQ9ZfkWC2shENnScppK",
  "key4": "4raysGwXGfQXcSj4jhY73n8eHLYQq7n771na9dMYx8wYJrXwcuqu5ehnCFKpBoHsbGFv4vbjQBYMd7kJCq5DdK3U",
  "key5": "3qrpTgmGAnAc8oT9E9t23LA1zDo9AyEFzgjdDNUDsjnR1Uznib1qwEhqxm7BqgnDaBybtBXzcttDSCDYN4nkkwGc",
  "key6": "4WsbRmh6pNRUNkBbgnvUfGhQXSpyUakXWDL2U7xDJcafkRcarv56uQp55KGepgranVJUqr1yzVedezmGBBA4rM9B",
  "key7": "Gr1dyBsxSz2U1BvVAGRhYU8Gz7YxmELJVe3MACHrdQJLvVjsj6msy32WimnKahzcsE5YMJMNkmvqupcGfrfiJRM",
  "key8": "33bLipwUHGPCSZu7psvnzJb3qZgXUFYEzq3dauixyCXXyVKbwc5XkjiH3r13394h9W1u7Nk3UQYP11z73rkDGCCH",
  "key9": "3ep2nV31k8WyMKiMMXpE7QcdPGFhhM8NTndTZW3XUKjTfYyv3Zx51nAme9R8DpjSgMffE3EqKYyKTYofmDDMosM3",
  "key10": "4UsrQnHqMzMBoGvmCP2NtUYJcwkXwGgSoc4ftr7mHq1Re2UZxC4fssAjmdgKvQYBbGMXPJPevKRtQtWpjwtZqYEm",
  "key11": "2VYeKVkxBjgKUG7aMU2p2xWuaoeSCM6KyZxr9ZoYyTx9D1QBbpD6bE7WraeQSgmMAgunegWGQR7GUeMHFSWDpCRq",
  "key12": "4SKtmf7MHsejmgWeBuu3rWHaUdby38B6uWo7pJzhF1m5DHytv9Y1g4Jf1ecqAHZZ7onNJ7MmNeECxTqM7y3XDaoN",
  "key13": "36XsPkHofpSpC7GzuaLkx1wbqkLoCDu35sErMUNNoRnyvepTMJvdGBvH56Wr3dBAGndJWAqGX7kx4MkQp1yQTUM6",
  "key14": "3UBAJtJM39MuAxSErJKudb2mCjgeKBxpzXJTTexJmui621pS3hFR8G3rEVNkcv5K6hR9csd6TWBog5PHTJJHfViQ",
  "key15": "5VWL4vJtwiXYgv3yfhbZeN7ZgTgiyHRN7HwmBsEFNo8FMBUmj627CRDqjV4CpngGXMifXKpQ8x9bU6KRvv3gPfv3",
  "key16": "597LPuXVdgCGNVutHd6kYKczjY9Gm5q4SnXL76hLAXVxrRnHQe5ynpaRTNCtR8EGrzjDj9cGimx9C7iBYSfw3VwE",
  "key17": "hWLUhs4ayPZewygK9354d3DJLfgzXmiCHz8zj94Tn4xyLMA1PgKbFnhgYoNncUToyXT7otGGKaajYvWduM5sEQ8",
  "key18": "2N94qoXH5kQCXSC46g9e2TH2E5KJzgxZYfdXr6oC2cZ5YaUHYgzGQXkg42jGDyV24fBLZ6hx216CtWsiw2f4icmF",
  "key19": "4bZjzPEDkg19hECTm7tH3aB7rUsucPYwMeHFM5Eu4oFXJ9Z5RnuPbDyKWeaX65sttzGhL6PsVgHRqE1DKEd57ZB4",
  "key20": "7YKLeoGvtwe7zEMJtp6jAG64wD2oUJf5WTy6nou2xTQUhnWED7a3EG5whir9LxEgyrngvFjhVUxCUVeg57Gqwcd",
  "key21": "E8U6rGqM3fsAfJwp1mpuPu2sBCi5WvkoW27jwLeHmGCjTjR1PZCknFJPGUNQsbiey7qCRZvbg2Tosz6iuGgZokk",
  "key22": "4DMXmJCRCJdAShmQzrWXFcRNDgrUgpSPhDCAvXVjx4ixVoNF9pqLWN59sDxLm3i62g4B9swqGf72UeNfe7TzQFUq",
  "key23": "8y9m7jMCrFwhSHcMasGeCx3UPViyNWqScM1Knmgtina285zYMt8ku28yTPJ1FRF3DVrw7X8Lyfod7onUA8C5UHA",
  "key24": "4FJntw2HNqNH5cHoNbWHGzsnowD51QgsomWxcVNzMvXrHFLkFVA7B2ZEjspqQUpbFXW1ko1BbMU2g4PmfyM4Tzh1",
  "key25": "39B1iKeBtBpZkBgLBpn1EuKmyfaFHd5uG3iu9kpaQ1qrXXURU9r31vUPKrFjdX2gBoyFbStvt2eQq2JBk67iWk3g",
  "key26": "RxM62EvzSfhZLkHdTA5jNR16CeFcuBa9WND5hCxmGGEv1VgArGREZ5mEVHb2kEQMqRDSnX7EMxfPtKKeZWBskML",
  "key27": "3mskbQK8Fwd9Fb5R2SLUN3EnubYmEJEb3UqK96iitur7byya4YZ8mqHYUy1DzRqKDpy1Rtf7cRjKmDKb934rBDaL",
  "key28": "2mQLigSm1CVeMR9Tggq3PpZxS1ZL7kZqY1veFMxK9S6cbpha8V2boqUYHY5jdu2MErrGGxLNmcd4mtoMcEym2kRJ",
  "key29": "2c6udEhb514QMzTa7NYGK9BTwZWyY9szXvFP3UiUu1HDX1GYcwFgyWxuATGWssTSvEK9D5HhqDsSYBAVKaJgTuLN",
  "key30": "395HCbnP7sShVZ3yarxm1jQmusn1UaCuBTpYNERxHTKefGm8DtPtqouKz1NQ5GFAHFSKrLzMbhrtm2M6bhu2Qvq",
  "key31": "4FV4yPgfbWnbtu3ZfKNxNEYu13SARnsBGM2onqArzZPSoVJni5CFgL1Dpd52RLMCCwusJgzHoU99XGanQw1QYywa",
  "key32": "4FweraDAm5e87JVcrm9PPU9Eu8nmmeiBMTVYuqNHnDXwWgZEnadM1t3mbaDfHQk5LdqiDmzMfZRnuvbBWfEhRuxk",
  "key33": "5rveqCRqcqwLVgTK8BBkSeFpdoU68wBhiRKmpVTT4bAvvdGRenucRyXSs6gt1LfbaWBaJcJFRu5477tRfp8uVaJv",
  "key34": "5uYYX88SzeHnGx5imxctjzkxXPXGLZ2dHr5opPDT9CyhBtjaYCyvfy6rs2nMnjnGCgTWaLiM91FzdZpfQMVqF1uL",
  "key35": "2yNEpfMwukrKXMyGUmACsV7hpoyXPZjwkKHpWm1vDSJougqm2r1CRPLppBKXsgw6mqZTLdsRooVPxcwsby3xgVPN",
  "key36": "5rRQhaCiZsUvDv4Ur9TD5bxY7dGUvRaqzsvHuRJQWfyZ9b3X1bLoNfFPUKUc6DMmiaP4i8p2avbDB69PKwxGUadj",
  "key37": "67r1hm7H5Zb42s6sDzrDbT4JkUsmxiLiq7QM1hBMnKLfAQBLmH3g69R7c1RbAYfRLEu1gYgdNX9mhFTGYk7msQDJ",
  "key38": "5UswrPmEtcBx17G9A5DhCCZymFpdGh7eLZ9bUsi4mwTC3mojuasJCByTUu7D74zEqE353qEK4PvijiQrb5VujGNf",
  "key39": "5q7bqRGXjrDUrT61pNYokVsaqjuwbRpfCrMx1ghSdsiXb2JeWNBJ6PT813Ei4F35x5xWjWEj4K3Tmhtpo7MPdNkx",
  "key40": "32kndiNmqQKBEvE2jnrnxcZ7TEeKtknw42HzFr1ziRYdt8m52dLvBNZGpCZfdP5HewzDCzbeqnPKe1Y3WrMgJTNM",
  "key41": "2GGzXapv8ysadg7HtACp6HqwjGfXdPnyYhTRufARwFfLHhD1mKDQ25TJpPqy7GzBq96Xhv41XzPGaf62Lm2zbubH",
  "key42": "4gRfx8ggLpvWQA4VTMod51D6NkhXYEUgjiv1wA6vhfChTUDwTU43s7MX5in8XE1GeDmRjok9usG9HpJfM4oEj5Tf",
  "key43": "Cfuir7gtHHAUi9Gibv84PJLdjogwuagvF37UNLdJSabLWqdg6G5k2Uq6rKgeAsT5cNqrgXJj7ZipejeVH2dViod",
  "key44": "Qkr89s3yJejMbWasx6SbFjH2JEvFRMAai4mMeDdeqYBL6oah3HUrAmUnPHvyz7BDyj6Fd6tESyG91cNcW1nn4pi"
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
