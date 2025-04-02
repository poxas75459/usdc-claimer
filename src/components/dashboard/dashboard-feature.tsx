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
    "3bypP9dbQepuYh6Q2UM2gb2xhNgbsEL4z3Ux1xzHp7PGv8gotEa5wZhGqRCSZEcLd7QY9dGTAp8MQEiLv6u7a5jG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5TeTv6Q7YYHfWNK1ZifHXKSSRXyjBxDjaqqhfH999a7YkDFEU2EWmVb877nYgeKWaqPEaKsiBYPfFqTjVa9G9ynE",
  "key1": "N9Z3w9BYYriCzce72oFzod5VNSWFUnVoN73BE3BwqTXZxJW9wgCnMMnbVewtsS4b11ppKf3U4FV4YmqKkR9CpUj",
  "key2": "2m968j1ufuzAyWN4TqJPkuLS12Zygc39DGRjcFeR3vyQP4pyvmwmifAttFQ7wuPp1VGXN3NEhLNr8gkt9YjzNfZW",
  "key3": "4VbNv3mQvEexFDqteYzDzVbmH4ijJ8fwc1Z3WpBZEYNV5maptunnTC2dKdRPZ3nWW8Q1ShKQK8k5idkrThmDDgod",
  "key4": "5THzHASEo7cJhVeevfgiSEQVi2SqCyGL61LoYf8S2CFKYWrKKrmYjXfmUPyJBsHX9MwhdhaQAthvPk11DJYJkVkg",
  "key5": "4TUcLn67WYpzS7taaVs1K8HaFNXXqSNRqAkGzRteTJFePMmAG81wKeyYmbxqSr1NdzS1dDnAbQchaVHu6gWPszAb",
  "key6": "2JnP4KJ17yq7haEusNH6DpKKA3ybbrPQfe7cMDhfxJUkHk25KxwxANFiHprmqKZQ2QWVbuESpngnFnwzA1vWXrnc",
  "key7": "47jwSdgQoqw1ZMuddJVgesCCZAiBRh1RP8vsWQ6Kx52z4z2nz4PQT54J3SdsArnqTGRY7BW3KqZHFZSV3JREJBJe",
  "key8": "3Ecg74vUBnCHZzHPXF2DgqMxjR5dGuWhSBgXM8GHz3WQDCaEHgGpJx53tSVsWe4CkPqCDxfVL9RVzSzpwm7wNT4i",
  "key9": "4SDssMrWhT9u4aReGmARm4CyM4fB3cveQMyUseoBEWp57jheXMQ8pDGcWN5daMwyGqFYyjNzxj4AM9e9Q87uJNq3",
  "key10": "3eBY3q6eqsoAKXfY7urULFM3KfRBH7fAcyZpviSqUEg8m5jduyiKfxwY8pjabqeMqegC8LhFymqyWdRzCA3AthqC",
  "key11": "2S82Yo1uRQtLhgnoVjq7TRRfB4toWvcFSPGXSbWmUnuC9ChhXBPdRc9pJpa8g1xjJR7vef2V6jdCdiLQV17bGii7",
  "key12": "2dU4zfp7uFzzf5rrec9btbLYymGN8LHBPrN8kaQkC7UxLAEaGdKWssBQgdJhPq9fYnuMrtPBJCmuo3vw9dh4nauo",
  "key13": "37TTvmac2Lp51S1y6ig2ix1f5dhAYasPGHFR7DXJk5BGhXmScDVTGh6q22GG7v6UQiVapVGhZvpgrn6scuKo95YJ",
  "key14": "2jS2WqALjf7fspTirndLzPPnr6XaGVhpHJmTgXj5MwS8XEYC7b8BjRnCQR9uUogASfs4fBdfGBdK88mFAnyK4W3q",
  "key15": "3VQZXeDa9i9P926quwMX7PvF4f9zyvrMD8DYGKVEC2FwrWhYG55Qa9dFayxgptmNujB3QtLtiPpw3AT6vfHvqnR",
  "key16": "4Tit7L62EJ16XFLD3ZdoCLNQqoidRTb6AfP5VEod2kHeW8vD7qZr7LJwDrby8G5yr25NXDXWSfFAQMVR3HrQwfzJ",
  "key17": "gAodXCCBtM4QGizYrQZsH6gafU7nGrEKUzirfQNtDV3q5c2GfEdvQm7BTBXcwT99vo6U21ubGxoxDfeVESEWgNN",
  "key18": "6auRquxiNKaeXh5CZGPuP5MrGuSjStfhK3nd57GTphSYN8TMY76eYJyQhtqk1bQVekJCcMs7xNHq5akLaDJ43PU",
  "key19": "NQZSWsqFuZ7jAe6Bc9CD8qFGNskewZd97JjGTz3oDYAwLPn7wJvaQqpkiaTXJU249EeJUQydc6kuvRsb5X2Kv6y",
  "key20": "4r8NY4fmQgYRiFumXrbJQnuy72cssPMjzP3JBfb5VfSJV6uujncyDXv4kKnHkTrHuAzz4XFEsx1FVYTHd3DejgcP",
  "key21": "4NJi2KhzfAebcujcVpkgxU7QsvNSCLcfqqyhh9gJeDnJ8sRN9JUPqjtZhfTz2pJa5hRoqzmSsYUE2TZs5asSirYY",
  "key22": "4gkXz2QsfcTqgCAP1v387zdNXZ65Ayo5fVc2Tb39dfRVoAnTWzRb4mPighw18CLZsyaZQw5yptgpwoYyBDbGXQd5",
  "key23": "2YtfeGpeoLgViaSdFgsKt6o1xmdMbP9H3WSzUE6W6o92LhQ92FpDYVLWjBScpRBQ2xT8CacyoLEfJZekdx2RSZb8",
  "key24": "4WZbEsxAC1id8Pewd9YqSk7utE9p2EM3fYqs3QBw73UaChBTv4bhGVbpYed2xtSmj9PM5WfxHCRawXbTB5JGZKP6",
  "key25": "LMVvACEBDgqTXxc2pqjhKje9qFpDz8x5NEgfYTgzXZnCJx79uMBcoMZDNs1b2p8mpa9Ug8djG3KoqNbsnkBcTsk",
  "key26": "5FJYCy494i9PxQ8K5XyCR8FHirnuT5LXczrboBJDP1hVbXhVxdtPTNqkTTdU6GZhY39FNTF9YVuqXxLoxeZ5QVMX",
  "key27": "4sEjWFhMZWqV1pvpjt6XisNRzwjEU5zZvyX42GY98tizGhiQ7EC4Kdy1bVGVtKFsSWb4ENgmn64H8nQFaUvCuAKH"
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
