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
    "4GW42kBmoywt67y8NpEX1AcScQ6x2skVxrewxpJnyShGjxmL77pk1MDZq8prgrpAiuM5rPo4nZouKBHmv96dewst"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5q1PLWbQCNMAUi4RrQo4thuWo8LyaC1B9NSwCndipKDsw6jzkSCPipXFiN3uD7pDhj7Aun9FSUxZT1xLrzCv1ZfH",
  "key1": "3dxBktrB1L1WCJLSqz45wxzkLPBhh6Vp1FaX9vkna7qotxnGLfDGQB9LU8h7veRANcNrZz4fdAj1YEsaYAciJUUJ",
  "key2": "3DvH53oKAr3Ue7Ck4aGNvkoKu99SNRXceZG1WHMHmaNXrPj6A1UEK1bx51x8tmy8oVsHWNqSPCABT2Bcb5HxDYBG",
  "key3": "4GAefojqnTF9Q4CftwGeuQ7eGi1qkreXCkh3CSuyc7j4BGAjLbq8zRVoGLBsvwi8bpWx6Ngz7E5WacK8VnJNA8qm",
  "key4": "4mwgNANXe2ZmcYBkbLvECkPuUJvgoTgZSXfMWYgrezb26LMDtuY1ZUvF347QAaDLZSDXcoD8DJWpNVc1hvHx7WsF",
  "key5": "43UNrsyhEz2pU7yCrmuySGpq4StoAZWLy5oiT22ZKPMN54DnMNCAubCzMvKAvXQDv9eKNz1xrZPgbtdEHJHmvf8k",
  "key6": "5KR6yeBg29LHW1rujeJBrnugq9zDern3ThBSafUTH6QYVEZCJPFPLw64nW6mNNDdkBvVjctPscFmrZHDf6xcdW5n",
  "key7": "gC5q95kKdjKQHEyhHXJUaH6xyJb8diHPVPqXAVjsBNPQbwefQ9MdLqWABzn4mPL71Q4QheLVAdje5txaskSR9pZ",
  "key8": "2LR3hqRNNaaQikHsTdinvgonR6fRDP7McLWkL7Vyk4KKoqJMwdenN8RHCWuR8ubC92kru5bMfAdvWH2eLCd2PFij",
  "key9": "5JtkZVANNrNeSfYzt7XdG7Tf3XrWie3Dwkecy4rar7yLYMHTmxYECvacV5MCqNapxmTvBZQzkXuGnvbkWjKcgzff",
  "key10": "LKt1mYMbHGGyo1JMpFmy4wviSsZBa2C3PQBFPJFew97sxKejRDrwgiLwsPM7kLb1k88rRhoabjF9q28GcHYbKmd",
  "key11": "M3u6HJtjJxeGrW2g3HEbUi4YGZRD5GEzVvPykp5n5WfahL3bL7txuy6dVDF1n1jw85kKc1Y2kpiSXsyobJxyKTz",
  "key12": "2EhZQySkmD6HgHk3QqcQhstj4fsDY6teCJ7uQrAGQLdweJWFPx3TCCm64hr2kuA5j2bd5AhnMbsYUXonhJfxtmsj",
  "key13": "5N9GSreEaEAVk9tofhb7BVzf66p4UDpMTrrci84SSFzhkR44Pt5LmEcQ9wicLHowQTPLLg7oo9VxxERJF2XNXctH",
  "key14": "2wv6gKZxur7JEvVJppsrvyx41PpWfKQ9C5cVN9u9N1GJvFNFjBFNf3nJetbAutGj3V3hPHZqJQY7qnXu2eGC957Q",
  "key15": "3MKaZt5VCGQiFv22YsRthxh24c4b9KL44TnAx34641Bhm8VzFkm6jUTMeUut919XTTipDA7nknLMjpAZzUD2i5RN",
  "key16": "3me5iK5B1j8kvMHsnRHSQ8CDSgQ4iUfdxyQbgJqKPATZS8aouh36hNqKSRoMEtj1wGBC8x1g4L3brEbmuDcxunp7",
  "key17": "HYJB63g2RJh7yyZgBuVJHa47NnNoRKQvqCui2Xuf4186trEHT5sdBGjGACYZDdZyMqBgokDXowCDh4QND8U4hoP",
  "key18": "3vCUEwF3yUHm7VBN8GZuYyMdT188Qzs2kikPS58MLiyN5dhuHazkwYA4DYT4hbjELLXrVyi8XB9XLNWsapHgNH61",
  "key19": "3ngkb6WYgY7ZfYKCJ1wSPcknPfidH7JE5Uo2k1N9o3QxpjU68sGx4UQTDfN3zQALDmyZ4QZyKHpCoCKrbcvunTpB",
  "key20": "4M1Kjohf51jQwc9dEVTg1xPxDmusyxgRF49vtCSLfEFmSgGmPPoR9vZyhQihHi8RXLab6oJocQBj1SN8koSG6qFM",
  "key21": "3vmFUUfKFpDYGJ6KKkgMG6huwskEwMfpcHgwUomaQwWvs9qrRpfe8ApCg9rX9bEgu9ebKmSH3m6H1B3ChkRBcSpG",
  "key22": "5NZxDyGJppxDB5xGBY9BpRSymtPwWtka1r6T9udp4PuoHUUvcEhz5Yqyba1BtjFaJnTtX7cVyEfie1YGQKXzPHVx",
  "key23": "3wSTcZrR2DjFt5GkVekR9rw6Mi3bw57CfQpmGDpWPo1S1xjkWLffzooNyGPPCKxnijUpGVi3bsnSAb8zqVkaisW5",
  "key24": "24U1Zd9KRZtTwMFA9upwkXWLW1XvJ8hDuPyhBr2YMrutAYsdRYo4fJjPA96CWnoWLLnvuPZk77WacP7zGz6NSagy",
  "key25": "HaLhVHWeD9HTVRxG5jM2cw61nycC397SZBRLgqRC3bGq4Aqnc2geKGo4FTsMYJ4jqBRGfDEUqAKMSZYGA3WMcJd",
  "key26": "3GFuK4T8HTbXCfLtXNFRvWDyVkuwnzv8nrxq89QL32Pd6n2S144KZkjosyGTuhz1pYkfbfyg7xXB5m6ypV4rw3Z6",
  "key27": "2CKz6Hadxn2cFyZRcbkzZ37aps7X5jMWth8119qCsSXGVPZNyh2TvCSwqahYRa7yS2PQwwVW2snY5vV9wNSNzMeh",
  "key28": "tMBy71wnLbmcRrD4rcfFBpeP4qB4DUbkMcYbLh7VCtysQxDJu9uH9FSp4CbNpWKviXmikCDey4gb4KHUZpuhCqn",
  "key29": "3bXHE824RQu1WHGH9gvUwGuh9DAxbxU96pvcAte7FszxucUeY8XsCLwNNrHYJQCfJJjPXt3zrBVbfDUwdMoQothw",
  "key30": "428XUp5KyUWya1gAnbuyuE5R6wzpzTxZvA3uUcGLj95NcPN6DJyEvcvhfnAtJQcTZDLXRYndDQFfVYrrKBN3Weto",
  "key31": "3fqsH17ea2BGuxYkA2kNU87n4B8Mr2tK1N2E6AupUhZU3Vht52DtdkZsmciVavKAZKr5FUVnFXc4ePnbJdfiU9fx",
  "key32": "3CdGjWf4Z7Ucpbrg51ESPVtc73cCcZ5Bg15oDjoeMGxJ3iJDJFn1MXERuWq1RUeXsM332rSdSB5BFGGrCSRSnZWF",
  "key33": "4SLMQkvbK1oZ1VgYRUpWp2PDm9fTUgv5RYpMJ5voa1XWvjdr3wKGMj2bBbXrMEVRUEQhtrhDuLJ3U2krWsUnhbMr",
  "key34": "2NnttW9wi91oqbBasL3CNxsF5dmMqYzgNvS5gQT6SbPRjENhHuzbKPnstQeUfRNzUNwCHAWXXcsHjXsKVNjyZpBa",
  "key35": "3fZTCri6kGLKSvftMuTWW9CJDHTUm2pqrRLFxZdVAyhPUcQgffzA5n2U7pB7FCiBiyGwkoRozowLakV6viaUyFdP",
  "key36": "2T1FJTtXgJ6TjAGpiXzzgNtB6EmyXLN72E9pXRcgvccCn4iunA3KLstd8KX9W2Jecwj6TGFu1DWv9RcJZRUnMXb",
  "key37": "jGF3Q7LSMKAP5SwJs6EuJav2T1okXLs2H9P52VqpPQqg7uMAqkVdMLWmBP6Sn31biTjSp8ZTGTsunFUH3ZaUJ1h"
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
