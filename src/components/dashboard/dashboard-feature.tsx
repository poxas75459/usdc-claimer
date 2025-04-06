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
    "3Dmn2FypTE4setWmppUcbxecE2spV3A72QAeh5DPESfXtY3sh94Pt7iY5Ufou2bz4ime1RAz1ECrZ2bJVjCA2BPp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28yfpYBfQsjw7R5KBaxkKLdkbqP2zMEH8h53STnNU6eg8UzAB7pxJbFbEWPV1h8NaAotqjADXn9e6ERXHyhbHF8u",
  "key1": "5D2Erq2Qq7DFn8UNDXxYcgXytQ6i7sMtnaTxP8DMEh5Qem9tQABihjwY36qjzdGuV6JhFWRw1m9bi5LkxkQpGL5v",
  "key2": "5s4AbcTfAhfXzMeA5HqYpC4bSw6TFqAMeXzHsqXeiyreaJURCEfWLr3c36K6AcB8z46e9tXRLHzeMowqcF9gLEwq",
  "key3": "4ZacS2y8hx3B6yzW82RPzCD5kC3Sy6VT6UZQMB8UifZkFPSGVRDPxsMp65fVR591Ef9YDbQHTcivG5FoC6xvGWA9",
  "key4": "2C9Y4yWhPqUbvhHerZAkfgjAP3gDYti1KXvLQgyaT3tN34nQoAifGkidd8ickYofgut3JS5XMNss6a1BNDURitNn",
  "key5": "47Afypx9hHVvZHw2fRE7K97v6LDPFdtB1AEieRCUKiqjSsJvFNYv7GQdTMAkqJ1rQaKgcniouf3YNojBLTM1YuMZ",
  "key6": "4fPgyNYsbvn4msbGuNS354ecfCrqw55mJj8jAJVv33oGkfCy2JdT3bjWaQV2Pj2aD513DnKtfE7NFtJxXmaTXC1f",
  "key7": "2gyGaQSLzTDTGcqUMWG4nPbds32VcN1txQ7EMiutv42E8YRoJ7w3yhukZxyF6DWV1GW8NjzxEXxv2tstfqyk41AE",
  "key8": "5iSbkRXHGYLyZxDhtxv5cQxPnFs9W5pnix9cVQ6fr5dGPR86dAnfbFdSmDLGHdYdscVWq7NUAcndR6P2xPhqgWvc",
  "key9": "5Xiqae8YoFDjmk2Yzk6nWomXVngowswHQhBiKNsLqzjwD7SaFsnc4BYrEvKkWbm1pM2oqgpDdzFGZvNSgCVe4w1h",
  "key10": "22PPFKxegsqgEkp9KHfBTprgzc63jKcPgDGkvTHNGcxxYz34ZCJiRjS8qmLZ6AZ7FPNUvB8wfyLNancAD8r9bFvM",
  "key11": "3rRK4hXhCMV7SrGRevyM9UNTjrk8Uuj3mLevA47uqCZXRotDbK89f4Z3QJYjcYFk1RksTX9nc5N8Q4TMr1uTz4Wa",
  "key12": "5bwNEddXeePyYiuEuBRwz4XDXd53UHgf4ZyYjYCWr7SjAQfLmeuDPRrnpkawvbKCSHgQYygxhXcDQ2N4X5xbh9A3",
  "key13": "4XZNDgZuLhMMUpWnRsu1kcBCrBFkpYFPXHKUiEVdhMCgYKGfq7ZP7i8NTawTZyJt39jbdTWtEDsdBJc1T665qdKn",
  "key14": "wJ4XcMBAXYhf4Gp9xxFEjiQDwx7aK4X3pGAQDtaKxy9vnv2egX2yjB1iRRSD8XoLnGqLAtvrhkc8DorFoz7EdWs",
  "key15": "63wb8HWmusscMBiQywRCBe4x4EZQ2XmKevbsNG3Tn6gx8SbXepBADJoLYAuPco5r5G9YuoRj2QdTjcDxHj9gMg78",
  "key16": "5LVz1YjEvEHqRKqSJtXCbMSUkBBzigSnxJwDmbvcfXA2rmzxrC2SkL4Xb4sy2wNwKLiPz1X5qXR9Awwb2o4w3sLY",
  "key17": "5BFokcb2ArGH8Z8VrSVe13SCwCw8ZbybAN4m4WfDucqjuFMmidnx1YSM2p1N9Fw2f8hmAHFkrDcrFezCbRkucBY9",
  "key18": "5kBocaxbuiRqnoeazURoboyTU5PoWgGYT6FabQvUcDZADZw3GCf4B9EmSUaRxNYBpiJMjhTouGD3Bb3zVrSsrBkU",
  "key19": "5jNKhv6n8VQZcb1quDNyhQKbC7xv4BeqU9G73iTNebTTaEcjMwtWAXiftcMHUdX65eFnNGmXGBfEXVNPbqg7LmfF",
  "key20": "2SkZviDdM8aAMsVExFUMixJWEkNtGEmrQK3y95ygYXuhk8FXeR5z5yxuMdPEXMPLbyJDR4gEPPXzZvCNwiaFnu3M",
  "key21": "2kfT8VxJS3Kdkuycw2hgUc93oXUfmSBzc8wKm59zdsvDhAcWEJah5uhHkLHtcNkAVG1yN7QLnS5Bg6tJtV8HUc3A",
  "key22": "umxAhHZbuxQPYk8gXYxoRdpgb6kALXaPgAPxwMQbPayvtwjY3SJJ3RrLgnBnfKX4HgvBu7NpUbcjis1aw8bzTVi",
  "key23": "3CgBzFxiTj9AfyPGMN4VP3tD2UcUB84vz9TPSRnF9BxePxhsxpHZVokG3GpXGhRcEGevkSH3zYwkEAtVj3DZXgxr",
  "key24": "2Rowc2n4kRgj68GDudRCFXYDLeZuCXkapEkoe8tCWu8s7dEwydG1Edk2aYL67ULYtn57q8WmBBEnRYuEUgRXCtoF",
  "key25": "hp62yh6zp1tdu6P3f2yCDEyFV3fnnVt4knxfjWAEuMGAmnWdbJVnWrK9VgbxoeRFgPArucvRKRWuvZmsTwbJfzf",
  "key26": "2wujtdH2dtRFaj5keSWpJmTHkiTiPaK9iZJvwJp3c1GmG4NovNxtnprKiuuVdUs43j4XLtjTcjSReauVVpH3W2jF",
  "key27": "5e6f2L1kqhkuSMK4cwAV7jCAuVvfFU32jiGENKP4GmMrZoAvGXuNhKL2mMPv8puZUiFVhx7o63Rei9BeAJGiXSrX",
  "key28": "tGwnoXRUXHY7fCqFMMvyNpb1MegagvUNLbC6cJLfJkHSRnr1U1PZ5aE8Vihnn9QQwCpAk2LQ8oYPpb7vBwqkjsq",
  "key29": "4SvGZwF1jaa26sz59qA9j6g9V4kxCEBuuQZVHhqyMUDnFGekaA67xDTfJrSKhkXj8dXj8oWCfN1cL7W9Hk9iHi89",
  "key30": "4SUbKUSsDohDA7PSWbCUAEmJhXkWvWETrK7N1pspLD4Rc6MyiunkSLK6A7zDpJCGDaC8desVcbYYR8eNWfs9H5n1",
  "key31": "4o9x6LQrKTDVde1mydsiWYvkAtEFW7MFaE31knw27j36SwY4iduRaNjRa1ZJX23CBPeBfmFv7Vem49Mowpw8uY7",
  "key32": "4wWWnRaHuKTz13rKJQ9qP8cZjyh7m1iFuQfyxKqrq6kH8YQpuST8phqADZL7G6TwD4FN2UJqK4F6zrfkvrNN52Dt",
  "key33": "3sevZTjstwcpe14As8Bfge2DXHzUyfigrAA11PV3mvUqSFD2xf3sTEj2zWKenH2sbisDcN3Cxazq7r5BYXNVyMdN",
  "key34": "5hCrsnFah1tFGzsunVLNLDYb71RSSQ14NNUWTmQHWSEKNg8EaTfaUEDrY3i12wbQHrLT2jWcWKzYbwCYBLczqJzw",
  "key35": "3J1huLThkBa7WEoWGJHLr98dft6v1pr22qUAbfRauPaVLWfFG8hvkaGvLhiE2iwm3ZuwSqVL4jyCiF48hTPbM51M",
  "key36": "5dCVf4ittJ6cP8hpHD7zXnMahWKXUVQhtMaof1YwcsnrXmUXZZVvisFEGqscZB7zeqSiwV1nbwpFPwxn7gLXxhy2",
  "key37": "4PjyfsWWT3t9kjttkzvPorDobU5xCX8vqmz9QkAgQ8xPf87SYm6Mu1Gawq9DFcNTv1LJ63dNpUwL9gpNVdGF8xAM",
  "key38": "4v9gUC4a8PgYxGndcYkbm9P7AHd7M2yn5nrZBKPwaprZFBSDBeZVgJo3zBfGyf9HT4zTbRhD2Be4PLX7cz2jMoRK",
  "key39": "23821sNvsWPLodz7MXHSnRFRrgjWqKV66E2q4EEVjpNZRH9TEVcYcLAAsMveco9oTjVBFhPtBhBg1SZmA9avqJ6g",
  "key40": "3fiZepdku9wEvax9fDc2xKYE3PATbkeWeo8A22ReWZXNoiCwdbi2Cdzx3imzjC2Gaf5SujPVRgVoVpaWELzSUGxL",
  "key41": "3i6M3KpaoDz48RkHNTGZq9UNNfiLKEGVkNkrdDRNtEukCZMEfmgwbq5NFQ9gwjiH7rg2XagnCJkwudnykp6pQYtc",
  "key42": "4q4dGLVscYZjfTrybGNcwtFHt2Sk4Cyb8Ksd698mUDxdKXNcczB72UrbAkfU9P5fEsJL4dwQ4fCRQ1TvYwu63a3s",
  "key43": "4aearE28cwFFCwarJNwTqhLmaBcDFifgsXT5erfdBvFeoE8ngfr1eh7HeGXKsqezzvPNkgt2TBDqAgZXcqe4Fxxz",
  "key44": "2KJ7gzugNpgqLLc51wbKWattvqEUTHKGWudZ5sSWKZnT5sdhR5yYfrzuFzeSUhRjoQ9SG85fmN8F1FPEp7ntm2rS"
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
