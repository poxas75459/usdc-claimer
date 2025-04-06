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
    "5fRdbkPvMnjRG4id3bsgDwkwioZCE8JjqYKMuFsfiVVEgH1Spr1rbtsZFHuHv7gnn5833fFNHi5SWnA9mXEGLtG6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "58Hz8ErW5fRxfAaniJ8uWn61Jy97PwZXY1Em6yFXoFxEjQ4q6bAnaGbFAjLhMYTqkSMgjGnevcwspnD8TyZK4DAw",
  "key1": "531aD3kQ9DpAqyHrNreDitLfB4WeAE5DbTG9CaXrcoge7vT8CHBFFHfDtaVh8GSpzd2Zdq8Mzo5ttwCd3D2zAGLz",
  "key2": "3KnWqCfGWMkiLNeGuvKHiVfH2RjZFD4tRPapSMCGWp1bcT1azfVWrFqZNkABGkaiVbMVs6YrDDUABD47wnHoQcS5",
  "key3": "4to4e7dc6JfvvvsuKXvB3VPrBug9mAKiGNJPPbKahFFYBKPLYGjmTRBvCwN8UuVGHah1fWzBs3JduxWMB81cHBAN",
  "key4": "2QYHPWsrPSJFY9Tbn9P1ZTMbzQboM8UCZeMkQGWa1482pmeGp7rN9ScFgJ2wKPgzRZUaS6e5tWvUTGT6fb41TJXF",
  "key5": "3qRLhLMTT3LHXVC29Vpd6SxkYqS46GmsDkihf31TBby65tFDkDf23b1bm74UVpQJSwrTzxMDqdYecJib2XYPUwQ6",
  "key6": "4hQf2YYufSJajFjTA9uWgNzGjYEqbesiAYNsXk4Z4X7tBfb2tgKe7Y1qgHErZrYQ83pRGefoS5khvJ2LwXsjdrra",
  "key7": "3NRXydgqC1cq8aEFtbX5Z9utMJRhC3NSn8kJNw9Cr4FtMw512sNo8byP42m4rVShfzt2EbowtVLXjiotScsB12So",
  "key8": "4ZtSQ9tyGK7HuG3fVkcn6DZMUbYTvdvGwEdkheiCLJgpXWSdNHFMzUndJxD1PuxHB8BnvTgv9epe2ZCb9UC3b7T8",
  "key9": "2bMbNtAam7YvrmgXdx1F69B3DexvfeXicUdpjxC7eK8k5WXMaS4KwuNkTAxNj1ETn8PRQyJsmKejzgALjkGqeTHU",
  "key10": "5h5eJ3Q7uYnRzuTvNT1kieXtw6CiBvhxK4Uf1iHkAjFRsLRkVboZgzjXzpmq3c3bJvM3gnNAJmfNVJpMXLDzrGQb",
  "key11": "2EWTgpTR5d95YFMLXLYW6d6YChbYuV1FCbdMUvmeL9NeHTJs71dFBRQx8FehUbCSX7GZ3yRSHtAsxHUv1FpVGvJX",
  "key12": "3uekhdb1hGo8bh3BGaP8qbkv273KCpMQYqEg9EmZxAqknx5xrFxXC24efbYiGiahQQW8aQ9S9RWbPWThTPgUW2JG",
  "key13": "3HuvwYSmsaJYMyMZUaradtBp41Mz91sHfNB21fidXCvMGQ2PNxpkTJ3RKmPoxwikAk3mJbu64uUJrMu8xU1D8ggG",
  "key14": "V7FtGXwg1jEtboKoMJWyWNiZewcgieccPj6K6SExZF8KYMQ4z8NF7Ziy2Ky9Pw7VnN4Fbo5eEcE51NutaxNbXRz",
  "key15": "3NU5EJK8ywFEAMfop9dgRRth9GHA96ao1zjex8D7DEjxhm7BmujqgkKe5nDMjCukUE3bP6qNhvETBBHHstNrqBM2",
  "key16": "3spLDUFmWv9hHF3JowBSvWLLVBfpxVLswkqW8jyxMABt7rRFExaB46mpEPx1f5EBvhNxaWSatEN2vauSbVKX8wsh",
  "key17": "3AC5S5KjgekcEhHNijdjre7VJdW6ZnV5ANjS4hQcwHNWzrYFW3NtTzWLL1MNqtBZVT3sBx6tUjbqLYMapgPLxBez",
  "key18": "4ovEfXfDcZ4S7kyyVjgfh5kYZDQXp5TABkYYsnPCmDGTkzYDsX4ucokJGsUsLtxiBVJ9RS59J8hXCefiR5KKARoY",
  "key19": "5YWCfcA1LsX5fE9ZfJEdU45ztLHtgQm1jWSMpaq4eTnxqUiMx1hYjJTUFWHDU25ifDGgvLWnbpFps1HyyPMzmxMj",
  "key20": "cSX5jj2X3DWRs1txQdZz7nYYC6LsBk4GQYJJ2HqiCGZPA6MSedhwE9oSPwav7kgS4DrKRDPG7zjCqAZsvuQQFAW",
  "key21": "4raAz3yneuy7k5tVin8YraDMx7zYRSrXsWnLau2YWc88juLiQkPq7UiW4NnnHA32fcZ2VQcNNv4G9N3UZMUfBLpp",
  "key22": "4sg2BhNszTg5X6LpRBKqS7GfT31k1Hk2Aic6pA9MeL5TakfNfvoPRXjHqKPVsvnoM3FPyLFzh2D22WvQkKAWwqkR",
  "key23": "5skGk8GsBCQQcfn9ZgmmtnGLw3ywVNguzfXxogWjXayHRo74hHPZmYRBWj4vCRyzn48aRhRSt31oD951S9oT7V84",
  "key24": "5EctdVwCLpjXXUzmBv2b5FHNNjaEuFoKQV6tZ9xMiJsfTYXyu6n6FqjoKSkXhKBknPPHpZcZQaPXnqXQzKoGUJdS",
  "key25": "5AqEM8DhqsJ6aumGjQpqTyePCsLDZPgjkash6XGqtEUmp4y9737MchrzeiMLJd8sCgZQjPHexUotQ15hGx9CigD1",
  "key26": "56VnDo4jSoCzqu36btufnCZy8jx6MxHc7KnSwQFM9DZ5QkuutfZ8KwG5e8UnNwbHynMwtXtNs8CFV3QMGCp9hSxk",
  "key27": "2vXWYkQpc9edL592q1eoUrnyp9zgWzNzDhMvwSTki6cxurdeWHBM4wxuXL4XKp9CshS4dzoAmKBszGNZg1SR8UL6",
  "key28": "fB4gtjx588HabU78fKbGAwqeqKrZTQTPHRSWvcw6RXN4Em8Bp8uA2fUyun7ptxsm34J8KPyPejqB64uPPHCokzd",
  "key29": "3HmLKHzXcu7anP8AT5GXz6jNKpAomRwXJxGadv2j8AWnkAAzd66QcG197pxD3R48tRFpHQHfA8McWiaP5cEZiFSh",
  "key30": "X5TiPfvpb28sb3LKUjnAec9qxZHxoD398rT2HdYrwMCs7MjKXsqUKGx7tMMcf19CDYfjPiorzJihBYjVssk8ETs",
  "key31": "bWw4Z8NsEUamrU4FXQ66U1fDMWeiVA95YWsx8udCXQeSUt7XbiRwWKV28gLsZ4XdCCnbX7841Upi2ZM2RzuthYQ",
  "key32": "5tC2rTjt8zWsFztkNFeZ8fyK73piyTzeNGSpruuUDxxwwa2aeEWV9hjM5Rq9r2uZ5jAH5Tp3PS7WnhQDRRceeV65",
  "key33": "55DvKiPCMAnpvADqZhheagGJn49RtgKqqHc6d2iGFtV8RkY1Lkf7JrkGNyiZk9ijEyaYRubEo5fC7kYsVdwSKLfd",
  "key34": "3w1r1HhfDKZw6EjMgDtuCACNWn2ZC9NmCBmJ5qmwYjTDcW6w5398T7Xy9k1pKYKhVvwDGGcHe2KncrqhHXL2mTjo",
  "key35": "Ej4QqTJHV64wFW2MisBVwrLBEJEDb39czUPZc1BMknhDmaA4vDxLseXqVMKp4N2JbaJRFXJZ4j88pteMxeoLFQQ",
  "key36": "3mrKkg6h2mUraBKghBEi9FLezRqQnWykQqjMm7ACoKVjsqy1bp2SeM45ozo8h9jzm6HoszqyyyAwpueMHpwFAmot",
  "key37": "JADbH8xWa7trhug239KuzG3tYwyKu1MP4n4xJuNXttgdgi2fSShTXmLwisDfMk14JDdiG1ugpNxSTP9PAaj3zyn",
  "key38": "244V32iheie1VPyFXButa5P21dRpzhaLUb1tArjX1uCvrtVcMR6RYmgjDM4GiTfSniupFVoocrJakBsvBnCywbjx",
  "key39": "vKU6iujSPsnKqSY7Mc4jnfm4fHWMFsGLAnyAXdabTUnjvNfREQq9rmzLDmKwGaTtPZ2wf2VtvPXgH1cbzZHgQfW",
  "key40": "5F61EuKrjc5Jk3TFGTBiqB93UFsuRo3q4AW8yt129YQLJEWq3UZ8jT6emcZDHcRnqANSTWPK17uHWrehycxQ5PL5",
  "key41": "3C85UrJcXEhdjeTQ7xx3N35AUgYDLvKjsbqsuyb9up6NFP1nt2YC6DL1BHJNoE9GgJ7dMF3mkxGxZmfYYGwxP34r",
  "key42": "2MD2CUGeaLFrWxtURXmesEn78Vyj4wkvSwQMRGQQp7954rPa6E3NvbShmhFEGuRnxeEvFNXQrbh8pnU2o3xHisR2"
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
