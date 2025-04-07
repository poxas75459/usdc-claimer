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
    "5DS2th8jStNv8NDPuhh17Bri7hMn8eoETLyLtcGFHNV6f7JRBtseFeFL2P1enNxpU9FGpkoHG1FZ9DtAg9XnmryY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2GLqYNtxV4bQXhs8MEi6kMJjFMsrf7Ronz3ZWnupS6mEg5LtmWjaQgPkVwWWqsknXmKKT5idjV9M8m7CAJeC7zuY",
  "key1": "dsDFcvV4e1XHeQgWDDRMvB3zNAny7jv82J4oNDWoVaqPZMUmdvcZL5ac9S3W7AHH2BoGW1ADrt8jopp9w3DXUaW",
  "key2": "59B97wM9yyCSjBkqQmkhei9WQuJiZyb76s2W1SsRNo6zfifLhZKrpFy5452CMVQLKki5Lq6WzHF968THqN85wQBP",
  "key3": "3QtQjSci7DtHhFSgvdUaoUjYGXDG73bXJ7oke4XTb4yLDxf9f3k51hVCqnn4uwSdb3uc1BhMRM5SDnpv4pkgyFF8",
  "key4": "5rDcyh625yRKTc3JsAoqfTHcNXVgJLw9VyGLm3wwM9QovDAuWqjdwp9Jx9aVZoLiWgxQzWDnJFFfipfJRcWi5j2M",
  "key5": "4KVnvpmr2hJcWyVkHQaVPHNrrtaMtSfsyJnHWKemG9w4s2PqYamtABru9hy1XxFfFHK5eCPZkCFU6rbryCEVo7Qh",
  "key6": "3xjgUPQRietfGeyXSU3tqSL3QoatNkjUhfx1SCLjRjw73bHQCGjnr9xnPSuCRwkCMhDqwXfYco9mAkXpEK9YPaBF",
  "key7": "31P7fHK7iuko4fg1JsyC4PPLEaF1M4E44FSY3n4a5NamP6RJwqXxZL8iwGwP74HyV8FnFybViC9V8AQ28MkixnVZ",
  "key8": "iDZPpPMbeik7cbAwcVqrwLEBXen9mbc9a132EMnZn8RWuHiGoiHoD5Pwq3sqyzFqCrk8Ncyv8nQwxQWC37zbFXS",
  "key9": "2rYVfjFDhA2pYp1iebMbyMEqm9Xjr4sdvpv9JCZjoWHKtoaw968epZcULouWZy5eThASmnq6yePVh3qLX4fur4mn",
  "key10": "vphRAa4AcB4j2HcaEMZh9p9K6coSjSi4KKVWduDovnhRZnJVkWdPqDED1cHdSjRV8pvHW77187qprUQpPgFSfwN",
  "key11": "53TbUHTjnk8gQpvZFQzeqRcinSn2dUD6rLVzaRZYwGnCKjeP29grhZzE6Kt1spnLEsdnt4UrsZc9je2KVdPH4sYp",
  "key12": "2h1WGmWEvef1VjTo3UT54KKBVTATm1ZY2JXMSUYQaSxHfJSzhfZpdUuYuGDMxVt829BcdnqYZeczhK4bbVK4rkjw",
  "key13": "3TUmjxFkSrXDUjYpdGAQj8MCXkDGSg76F5oBdg1VvU5HizMHtBcHF46brVqcHSqyKt9Bb1XsFkvLWpKNSCieuoq4",
  "key14": "4XUTw6XMuhWe6RZQMsQUNhyxwnYav7SSwKjRHLMzdWsKTGiKdLzRJYtcCTzAR5cDyCBuDL62G9qVgo2ouuz1FGm6",
  "key15": "2bJSZb2JpAAbKVVNhY2bZrhth1bRzx88sdHzpS2Sam3BfosJ1gHqnPYz4zfkqYip8TJUwLsGQ49drFykohspCjv3",
  "key16": "7PpKDLpKdthNUyPagHZTGt3mgaC3dTJGqRSkrM19kKaCrrmMCZY6xytLqTJz3iCXTwxRNCLyJrcq7w2u75AXedV",
  "key17": "hf7knTyK3vNuumjQ3gSJao4Fh66puaCWfvUohcjKK769e4fU7The2GFiVYGchc2wEHfw63MKZPE4fqzg8Sz36yf",
  "key18": "3i78KGSCMPtoPgPQ25wfs8ehhQyY5WSbKUS6fCzus5XTP4SUQGiuW8Uux4SapEZ1XuE1HcPWNeMf3yqrdQFR5LQw",
  "key19": "5hJ9coDkAQMCqsmjGdYFcejJPLvCRtEPZNcDrLtwmceubBceVCYzYsoChvosFTq2xtgKuzUbdjJ1MxZ8YtC3nrSF",
  "key20": "N3ZynfgzDGesR6CwSKJmwcyBp9MSfDNqBGiHxStCZRFVjhxFhGHwc4xqMv4Jj3iSS9ay1BtB3jLSsJPkeGTr7Sm",
  "key21": "4PzSqPxPSmmiuLwaCT2m2jxfoRqgBYawioNK9fj1mcBWKTotJVtrp9bv8ADTu84EmHvFgF7nKRZF7zCNAuWzcRzt",
  "key22": "5WVEzEUW6CxDYvknbeguZCRrzzd1yWgtDy74NHxpwx7kMnW1CcHawQ5YKNwBUshpT91qsZoNqxDXUCgyZBLjtrFX",
  "key23": "4Wvtk8anT8e458vSeuRhvvhb8MiPwphJGkVn5whaiNXTTrGeuLE8yRyje6UJ4hyXYcaoVNvKm4SsR4x1vySkzANk",
  "key24": "SazAuwB8rmqDVTiWYy7Cca1FkFNiQJo5yhMcXiAEidjL7hv3KHZdbDdWXUGJCvd6ZCYkW37X1rLqrgLfBJ8M7W7",
  "key25": "bPD3DS2f3gqEta4b8NXsDFYshgVRP86og7eewEz7xeCD2cFpuPbxFjxeJqgWgn32ZYukvVYkSfP8AqCewVFBAuc",
  "key26": "4WLMC94E6kewNi1mCjByTzDW3DVSdabGMEk4V5wQsuKz2v1HTiTf3QxVyJJUnwsTGKHWDneqSfGwbjs9c2knFKQK",
  "key27": "pj82BYqzP58zamRSFJcnosWpmwC8evP6k923vEhdewPNFK62CPTivccn5VxrDVmYiPSeACvpYRBi7zzRdARA59T",
  "key28": "5N296EEpkciuCbp7kt6E9HPfocgeZzteGxJJpaAw1sQnbm6gAqC1M373xJXmL7KXrdp2Aw56CLRRK24soa25t8av"
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
