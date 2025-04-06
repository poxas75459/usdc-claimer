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
    "4Fqkk8XxfgCmnmLfumqJb4HP79RdnKmq34N2mJ88F8PdNPqbrxKiYKaC1kT7ZyChvuJEB2QieTzX9e7XMt6ro4EH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2hu1z348Be7cV9AbvvyjepXbrmWAxbZ1omQvmjNhULrSFr9Dxy3RrJh9zitx4J9hjPcxLvrQaGzLZfSawgVT7kMJ",
  "key1": "54FFxJLaEm3arJ7XcUPACHHgGCj3rtLfuLX33XawWgjaToYjyoHWRSkm1Z8MDXCN4f3ydHsFXZLsQr3jyHTJwwpc",
  "key2": "SRsYphen5PhhSyvjUb4XkzyWzLMRcXJaHrgb6MKmGojpEyZAFqx8it26yMJdA3JP2PQY5vrxixmnGETXJ68LAZj",
  "key3": "2dEEDhFn7wgZKcuzkkiTbZ3npbgPbaA1Lw2HFsT3LTANNr2VPj3YKfNs2ViQAmoX4G57RFjdTTDoyacHX36T2zCt",
  "key4": "2hqrHrX1sxEdwyukTaUwP3echHVxYp3jXHZG4KCk64Hea1yPfNy94KdrT8gvR9JgHMaLSNejd2CgyaMNzpCqaVER",
  "key5": "5maF3eTWjkUEa3nRRnTjQgmi2d8k7YDJSTvpLnLyThfdwqvvwTuts9dksE7Vs5EKLZbvsRsv4vg9g9Z4djHHU7mw",
  "key6": "63iK4XrkQGsfiZ9Z971u6iJo77mNVUVzhGE6oHAvsB18TPdEj3svneoM42iko91nsgxF3oXYksgEpmKFUCyhq6Jz",
  "key7": "9WwYPAL7RBLesWkfKrdmiEeD1ZYQLKDniKY9BwcW6gxe6wJBEVJbMhZu5wUhWFwNLm9BGsWDrXEh4LVTSmnFHMW",
  "key8": "4FXq41QeTrY4Xc7E6SGniNDW6b2wGUUH8h4xDTovGefDX44PMDSCEgNiG3EzKFeinwv6Ro1HvhYFJXP5nyckJ9i3",
  "key9": "2vsBk8jf5o6vXmjfjUaha6Nr1bN8gst2Xb2z2T22kqJSvKCiKN2AkqfsYb6PxKAAxogyPRZoEwtL7ngTpBkxKKVm",
  "key10": "2MApeZm6S95mfQNDN5VXjH9FXswNDASRSX18zPitGpjbc2fs7uzcwuJuWmPi8fXdZ1LctQdixfCMTKRwResBwZRv",
  "key11": "5fs5nfVjJEMgvWfuv9yiiD2MqTmN7eNf1gzbeWRzqCqn1WFTXdNYCgFzxgDxLDi6DVgF72YoJcCyAZ7dYfknRbBZ",
  "key12": "26c45jShxy3R1vTe5xNEetLUtR55M8WkPDe2BXP5KtTqwvFBbFgUGpoU3CEMWh4ZrfYeTBonHJZJQojiawWAX92A",
  "key13": "5Y9iqWvYjTv6NSGvoTUGupHcCo8CUAywtPyizryA81qimjkHPNwzJrY9T1uj5jfvTqxBJDZQFrXg46afBWTnnu1p",
  "key14": "4TBY16KHag5GheP4ezA3DQjsYCMZkSaqsi9Mkrf3GbYX4BRfMv4Tvo85RXm9AsyhdsKLXA9Po6wCHc8eoNzCwsjy",
  "key15": "4vjab81tPfQqcj9UrQpgJLUbYLP6gGDQoMm4ZMG8WAhZYYmiNdQyW2F27MSG5ZFCejGyZg3MU2qHP1ufsTnqkZf2",
  "key16": "Xd4xHFbvA2nKquh73zktrrnpJAcjwmgWFhq4CatnWvA1uf7QPEDoMiB7zWp7ef6o7qZLbZXWNEKfqWdZiBrDQTE",
  "key17": "2eFfYZXNg4XBfimKAPK37cfiPsvYGA9UvgiCcVVv1bvyLevNVRCpNp3aQ1daYhywYagvmxD6ysujmnMF8UcknHtp",
  "key18": "5iuiJseTA7qWGhb7pFqtEXynHwPwjP1aFsXkH9rHTkHR5RdmLocinAjvjHohCPEk6Ga9pZxgDm8rqxLmU9XM2nau",
  "key19": "36m7xefTry9GVaqif73PPG3P6fbqEwTwy5XNyax4VUQtsZBzCZV9WNZeLtxS2JM9o9iDo9pF4xAYuJ6Wqhy8PEoG",
  "key20": "28WGEuKiyDWkwNNvSjwPjtttqeHn5J36PsNd6P4wSoYq2TqXaMhXJUW786wAzmkjiFKe2fQVd72hk9f2kd2kerAF",
  "key21": "4mDX5PbGyXdUid7bCQ5JQWcmmJEj3caomit8tQm3SZRSKD6hHrKNHNhbG94mx8Er1zUY6yysESbGqV5Y9dTE4fKU",
  "key22": "2GzhzvMXP9B8gNxXbCejK8NGd1i7nRuBZkWhdjF6hGMC3Gn15xjYRr4GuNAjJmYVpbLU2yFeDhj7AYPoZ8Q6T9zH",
  "key23": "5nUUtz29EzPwSRvuw5tVzqK5A9TsCctURAGDfrvdB9C12Jqtt7UZigACeSE3vqu9NEFsgNT9p8tnqz3HW8vPbWRS",
  "key24": "kGTZjgyioehnumNX8Q1w6geAz7DFQiJFa6Hd4gyiwQa9v5cfjzH8pC4WJqrW5uRReqVX1vsyc4eV2q6Xd1jV82G",
  "key25": "Riq2qy8uYBSmgBdcnJrHujDEJAvGuMH3D6apwg7EkGvgG2kpmpFXvVqHi14bDU8sVx6hBM6SFqs3CQtsQPiGaDe",
  "key26": "5HLc5TPVGNbF6K5XdynAsoXrNc6abPtVK8DW5RNQn8SUWanF7Hqij9JzWShGss1w29Qr26pApwmN7mxeHEhEhBvk",
  "key27": "4N5t2wrZq6rAJqAEuJFXpHqdsCW3m5Npmk6LYAqqZ5fG23KjSYXrGgaXDjerQRZ25yedEomouSVfDpwZWP14T1i6",
  "key28": "5eXYkKMVm8CMmTbFyxZm3YTUqn7KRcWvFRJY8mssTzDBn1Y6FNujpmuYbTjoEcJGSfwAE3RXZKFBohKapLazfvKH",
  "key29": "YfYJ7rSq1TNswgwULCvQddrBXkPovhoYKPJ71Uxdn9KXF7AFnkZ4WNo9GgHxQ2tQvySjGyUaL42JbAhZtUPHx5g",
  "key30": "xGCuqWzbf2J7FXQc7CUfboe9aH15oacBWoz47ueeG2X577RptiN3mqtuLohFABsfcypNXbq4XYbvbZxmMvz9T4E",
  "key31": "ujdaiU3kGTGsRdb2yWG9HRFvaJx5vG2FvrzFVSAbuxN2WoYgZDUoxXHsdBgwj4ruiarcmr5Z5gU3wCwnPU4YPKf",
  "key32": "2oJDbxRm1DaVMcCtDxHEpFfngKxFkZAiEja2va41Y3CxDS8UB3qdZdJwExbyhKqv3JaBApjAMvmg2jxph63VuSL8",
  "key33": "KcFvLGbuaKQ86RXMU42hGyJ3vXbdLodvZMTHKLQNKg7YNnao3XLapVuQyDL9CxvheXhriGBAKjyLFgnmhkmHjKk"
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
