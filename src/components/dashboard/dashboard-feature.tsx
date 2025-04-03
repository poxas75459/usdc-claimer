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
    "4YYb3jgKrSwFPe44H9ioTbaWhjVgpkMzVHqe3feVNQDjMG7crKxpqGfT15CiiN9wZxRrazDNRQ8CkA3sq7PvnJSU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5p5bfix9pWbC3qtn7nndpcZqtvU7fVAd2mQNUCn9KLG8sMNCoeDPdW4VBjkzhqz4DKySbnfkYWT7KSJTQHVFk3gD",
  "key1": "4ryMSn9k12eBx8xaetzCdZf8YC6t1bRT6y5Ydvk9sV3pmGarjk8nT7KkmyvjWkizQDmXbRkcEKxiyqe8kPvQKwgx",
  "key2": "TgcACWwLXt7Lv5yrnbVocrm5DnVXLaoLNRZNpSe152Y7S7UkZBVXyKjG6E7SuQ8TFSc22mofzL35QW6RqGg7Pnd",
  "key3": "2mMZLrdGvkUUwwaGFot3XsLTFn6FpeCTGYMDt8eHbPLdzsxaY5D8Rhvn1x9qNaVt3SHntqupZ5wsNzrx8ciAC5uc",
  "key4": "5qnBtq74gUxZ4hZazswmxi72bYib9QfTU558vyjgG9aPq9Y7aM8tWWUc3TgNaQKdj2BoQ8nLWGmA9iXad9MJraj",
  "key5": "s8RQCxxDFNWcBiT2Pq52CkbfkwihrJVmPoJmzR4rutw1Rd5nzP6gmdvZXAPdCS52KKeZvAq6cQETd8MRWaQyRpk",
  "key6": "2kfzjCeHosaZiX5dYC4nSvxd2gJuiUDJsQ5NKwcWE6HKH4WKQHPMEpnMyaUmpiRrwx4TiUSrxXfaX46NMktcWqp8",
  "key7": "1SjF5QDRnm1ewescx37KhjBrWUFS1EUZtdsHaJkk7gHHfi36m6KPMuXa3Wi1Cp4D3JinFwv1M4U2hZyuKkdP7K3",
  "key8": "5UmheALBavVHMxngmKZgLkZ5ydUr2GMao3iHptfya2geYUfjGCWv2JVtoshMcCYN6pyABpWrKWqUcNX2quNStB24",
  "key9": "9ke6MMDwx2VyVStUVjiCoXEtv2hredm95Rikyjcngbnh9j8LvQoFsMyFXRUX8XfK44QKqdo9W895ui9AVRKDDvV",
  "key10": "3Em4yXk1mpWsTRqDsTGjCVHWtwHdY4sUP9HuffuW2mXV1wj3LPeVPAg5gZS5xKyuoUz44JEDD426MJGe8QELfxt3",
  "key11": "5NQKoWfKsuaS2rFfzc24oHAS2bJu7y6QYbdVipMkYPDUpqciUXmAm9iki3jk6YBfAa6FqxSgRcKppQLiwqxXCmvR",
  "key12": "23kJqfx6HsQf1XNXCMQKSMSCpSwzrWHUuK9n4fxrqaoE59FFzqjuc8CXNeXtMKVSXEFFqMkthyVdRkUAz2zb8CET",
  "key13": "4YWVJaTFWuiUpVidrzZMSjXWyuG3UusMyoDMXF5UHPqM7k5d9XswGYKaVEShxyygM7FdBt8WBuWdEh2chaH7L6Hq",
  "key14": "529fDxJXTs3HgWTXkMWasG3S72B5tjq3P3ujEoGZLyrmtpAkpYds8c8NGVLCe6Dfvmf52NAL4tPKRgWtWiNiN4V8",
  "key15": "WV2BgjBdGqavwA6RtcQztKaGL4VvENGTiCeFKs9vXRePmi6zhUFGbHNYU6gm5YYshEpvEjdbPMqUTWsfQUcQoqS",
  "key16": "2aNvj5G9er4kt3Fen1CKs1ktkrs2nPtFJtYodTJkvXqx8WLanJj6UwRaWUVwnJFvfLrcBjb6EAQ5w2sGKypiSxsL",
  "key17": "3P7XCy19kXCDeJFAw5ZvTHS6BD1EtMLe5iw4DJrgJWeRefaHUXf61QV96Qq7V9UhHV4C813JtirieUTeX9PgCZsx",
  "key18": "3qB5iqyVprXKyPuZ9GoDsikuW5pWpMwVJVLh6nRyq5Unx4B3USdELULgaj7L4ueLhPi6Qja8UZaH5vcXW5mYUccU",
  "key19": "24C2pHyz5KBvDNpmmxbhY675UPS5FZDsS26meifJeUDPPYVaWnE4hhJzeFYWBV5ynaQKoFhFnS6QTqY6ac7ZhGCZ",
  "key20": "zS5N4Tj1Lw4Rtx2PcYcSDTERUFtuKFb7YtJtsvNg9XufuBRVF7WmaP7xMuV65XPUccLBcwxRdAETDP4g22w4a4T",
  "key21": "4cTjaJwhfqGmbwMBjReGLLBdizvFgEsYNg8vV9oM7ZQZWYPXWS6CgVQkC7ZFYYG3mvxWtfGrMy9BLL6rgGh9SRja",
  "key22": "nTAWFV31mmEupWYchcz8YWNBWogHgCE3P81zeFJpEZvWJdfPq8wBYWhbtsrHn1tZxjRau2DAfihQh47gKqENcst",
  "key23": "3mtKqSF5AnShVTWQboNUUR1fhdbk8DeFB1xsj3Mb6BRKLUAv1a3arbcfQatVXN767L4r2SFmXubL2mvvgXPt3ug2",
  "key24": "3MSrgCoMHUzW5qpUjEEP6N3iM3Dp2uDQF82V67XKzzuweumo4uunvzVaCh6HawCPYqg2jh943xY5PFemXABf189i",
  "key25": "4aAn3f3QuoCisNWzARMj3qfvbioxJ6eziJ1zvkncLgg8ejS7fAVocFyswQL5fzfWXjU13dHzAjePfqMdTKpUByLj",
  "key26": "2MjzYZYeCKy1PdUa3x3FCJQVok6f74WBWyeNTX4D8L3JdP9RM611YFcQ7gDCRKwnhfdmMDsNv8fZfhEVG8YoAPL3"
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
