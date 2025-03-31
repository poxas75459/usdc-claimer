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
    "2oSavLexJGdwYVUhaSJnPwJyXNv7T1myH48Qao9aXiWKDAKUjpXmE8uWxxUrdaELn2WGPsvE98wXEvMtJsYmkQPd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "H7AcznxPhccTs3x7Q8Sx1jm8sYeGb8AUd8S2jqVqmmMNaBwCYHF76vhnP1PktUp3Monzj9YwmuGMevJ5AZxFngu",
  "key1": "5gZ4eeVgnTuyKiZn5kKUuwsdzg7X6NzZjxNumbGVFP9wkPnqTs7cTaZQwZFy4AjQnEnWYnygVPwDXkTCdvjciLDq",
  "key2": "263Z3qLwJrchbqJsfx9uXimjfZRnRb7xHK8zrX1J2UxLQPhA3eMHWfgfy5NDiWcmFkNBn5FNxAk2U2eosq5w385R",
  "key3": "3CuZcij5TmZGfyj4KbnUDrWHyQ3qdEaPWj4CbP95EgrJZ3LKPAZd2vBYoDMSz3HzSALnLfAs3tpHwtkdcsBTcjJW",
  "key4": "U26VFifqPrfCh4USKhs2KDC8B3ytUoGV4VubViSEjTrfHaCNoGFKV6PVoKgdiT3dcZD6UZpaqqwX7MJJDivH9nW",
  "key5": "4gV8oGFhdu3ZYPNWw75rs59LWT8PcLRUtk3NUgYK5hfgPjtn36A9UubzC5fYiwabxMrAn3dqkQ4mSj7p6ZSo5BC7",
  "key6": "2PWmzKW5K5WSTiquU6HV6PSuH2aFgSmMRE47SqVtAZcwxxQiwUe3ByzS9Fx12VRzWGpxZBDSnrn746namQFgfSJZ",
  "key7": "2B5ySpRRzcwPidGbCWqEddqjTaJATudShUcaTmnjPvCVYL7JsYr5CUTm3TFnNodQSf8qBpwe8r3avLsdvLeDG4JQ",
  "key8": "5RbqSZGXLWBYRE4pZRVmKCJSWBNhmZNeXem1U7WUmyhy7EEsVKL62auhcvHsiHxJyUDJmugSvkjaKXK188fV2UHB",
  "key9": "672tSEiVpjBHeqAE7knpJHdesjmQkCdtQTpnsB1WnvUrAUf5sSfRswj7V88HQA9Sh2bBESAyuwbdG2zsfDKPhh6k",
  "key10": "b3egVropbBPiFTDkgfWNqJ7ithd41PJNVVMEZvDoX3qNpBDWfzaJtWC9wYM7vBpj6b5EGeifDxzBwYzskD88zM6",
  "key11": "2qTDB3dWamKPq4aLYyDdPqDMTw72AzHHqvAwFLvAvoKMqUyiTaEHx1vzCKAcjrWedieJ8cmd41Bzyp7eYPgXRYzy",
  "key12": "3jm1GhRdxDEhiwvQBfiDNSw6Srh1YgSb7d6KewRC973jNkmWjA3dn7rDk3yxnm4BjpdcccgetHb65LYtq9ro2SuL",
  "key13": "dWTGC4CgskJTvGHzwuzTw3UJdnK6ChKkJYkrvGVcQwuC6xqgaHNRk3GYa4DEk6pxyhhyWpvH95a9wJnNYQ3mGKa",
  "key14": "41phjc3w1XW69X3z8GcrJ6MqCvtc6Tt6YtaUqqKAE6xeQSFcpNxK7uStpAQNVWwM7nDJYdJGqHFtnzfxEvDrLRZd",
  "key15": "3UL3Y7EgLKCzHHxHoT2PA7TZ1f15qfqYu8F7zrotg79EmPGat6fxLc1gdGvci33oJgPtJmtX3Z6JgyVv4p7ZHhtu",
  "key16": "3i79pDd4ZHk3tHwvxmLWvZLXobAb58fvxxtph7W2Dqf5Ztn9su3BH1E2CbHh1wnfQWWcuR4zWF24zxMxyR7MXXko",
  "key17": "5os52idGJpuuwZmtJGtj8CuR3LcSRWHmEbxuMy5xx41NnxFZteAEMPsCecBQX8BeMQffspmPoqzFobquTWk47xrM",
  "key18": "3yp7vP9v22rEJVSaqic5SekiJhx3d7xEhhgNr96oX3ui6jMJEoqCAtDkZv61tUnybniEBTfkqT6hSWWcVQ52CFio",
  "key19": "5TdVCyHiRCp3zmMMBKxpNudV4oQ2dfrHVtb7QANYipCd2MFBhzTaEPDinqYXqLaoyM21gZyPp1MepJJ5SMmhRzkw",
  "key20": "4L4jDHRspKn5g26SdZYWsRfFkKANvLagev9azMKZzQz8BqKdksEaoqHnb7XbeFXVE2vHCtG9An28z5Mb8b5sk9KW",
  "key21": "28Xbwqa1WFEbnRzCFSRD7wpHWWuiPh1DVb2d1V9aa7uRCoT6kjMAaPU8622xemRTRF9mqy2WmLwgcDCQezT1xbLz",
  "key22": "4UgsUVLC9spra1KAoAPJbenCqeJdVo3zUg54p2JcUKD3UNew2ixY9FYuCVK3KPV7SpkAsW1Zuu7H1SUCYaCrvUdT",
  "key23": "5Ns2vRKe2TPKrvzjuYRoaMJgN7g8KGekJan6Q3FAQU397B4TbaAo8UUASEDAQ3vdEMq5sQqnP2uS7wgSpyaHhBas",
  "key24": "2utvcvqSxV2rF7o8wMbnj74JXr33iB6a1AFgyMnHFpHkL9sci9BjoiGK7hHgFPhSzcW5NTQ58CTCytaNXwymei9j",
  "key25": "5pHkS3szavvkXcyFzmTwzmE5n9KYQaKxgrttjfZYTr8NRTZbURfJqb14vEUmtNXV3To8QqhiKrqsH8quHWNEaxG3",
  "key26": "Uf3FRh8A5umbdGHXisqZztv8ZrBb1cfCHThpB6zV1s7gPMK9sq7r37k7WNhuShSJRYpnNFSXQ15yuzFBogyzRdQ",
  "key27": "eJ1Tmnp7LTNzHg4JoiCPhJ5eAqBgTCJ5AiwdCYM4c5PxWuA85wngbRUsP2qVHFuhR22k7uRKZttAbHxdTTTgi6A",
  "key28": "4aEvJx3u1wXnCLR2PDohjWJ9CA6MeCkyfD9FuCexm2LxpEiMBnFRbht419TtGNu9UHbzbLVnPUaGVK7FNsqpVKLr",
  "key29": "2FovHGGgvTHHdbxrZN5CwivLTCgPxzXZJduFDS1XwrkZhzV4bU3tx8KSauMbXxsW7QxYGTDvtgBuhtmfH45wymrA",
  "key30": "56hchthuinqp9nC34FUWKjPCjxNAbtVJsAdgui1iZEcWKLNZiDqJsGJmc647fLo9nZqE9B7w9G6TG8YWXsS751xb",
  "key31": "5v4636peeriEZxv2ZWw5CYHPNz7nh5Y26TMZFZyQS6N85LK17YjkkPpHZRpCmKwRpc9uznMhSECAX3cXYa1cfR3y",
  "key32": "2khEkZs37RHFvKyjy9Y8fEy8znzrKwcc1wVKBkQbLKNAxRsUgN18ntGxNcbNbHnUnn2aTrNyvrYNZMmLMYPDyDW9",
  "key33": "ySzZhWrFxzFWVAkcPWX6dQACxiL3NsV55bX55zhCk4wU4A9XEirGLmc14qg8YXkyjyixrTVRQXe8Nf8X5kzZsWj",
  "key34": "43ychgFAF2o4QA89dkBS5TANoJaTq9wLArHXMhQf4pTDQB8xyD1sC7V9h9hpMuEg1BoA1p1kuh7L2F7DkUstsd5v",
  "key35": "3PwE4eR7Aketa7vQrvFiCSvBd4t7p4qQ1CevrFXFbzfJHbZdqLym7Hzt6HB5X2bmNXizEX6tRAgUTGvPwTHwynHe",
  "key36": "qgq6AehTmFsPNrvRhUzYWsUoAWicNEvwmYgegSUYeBsrUVNP5jHhrddMsg6Ld6vSuJ3aLpTzuzXF3ffKoEPvsrv",
  "key37": "3rBqFqBsNwXcNWrLzZ1kiRuTkJUM14KfVgbmytVTHnwEiBLkn4Kwadi1msfdy6R6vhG2BEg69VuhmgUwGECz9HTQ",
  "key38": "4TiNZZsSHN3g6bMizkyueLEwhFxmxtynPd5a3JLzFctB6oeHEv8X5viY6Lk6VxRZFtiEZw4m4c3SsGC37WEE3uKD"
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
