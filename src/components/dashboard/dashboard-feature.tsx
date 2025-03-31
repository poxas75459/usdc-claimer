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
    "3HkpfkL3LuVTcoQ7HUtPSoVUe8CRxQCCSa9FhoujEfWzxnY2TgV2GwhizqFbm3yTcon6Rn1FvxysTr6UEGpv3UcR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5tmiP3dv33LLhybRaD4zjdSHr7M6wh5SwD5h8W8ptxFuNYcEMetdsRsG5YqsDxZP9aagzr2i1fZhgApnnKgbHQC9",
  "key1": "3sY3bEWuCnFeTxp3ovv4gSvUzEvJbPcq6tKf5stSHh6PqWMmCCVuxJwftG5oAmQ36kHBWoW4YGbEXwMXMWrvkEAJ",
  "key2": "3aZuQzoMj6c4FWKVmzHF3pVhD7LabEgvr4kPdKxjpAqyGoyGtaAddjPLCeBv3kxbuftLADZbowWEcUebTXfqPyHj",
  "key3": "uCVo3Va6ATB1qFvsbSsfoQfKWBDWmrvwWCJfcBg1Zyvv3UFWdrkxfHKid4cpmNbiG7E8ZwDmsoazEU6kZBjxZre",
  "key4": "3A5dHXMFjDMSi5ojuDJGTHXwGVevXkJSmGKGMiZztgnXyafi4qFdqPycxccPGXQxrFuwRXqw4MZdMtTyA6XPnpMP",
  "key5": "R7f3jRFeVPCXwfHwt2ifyTW6LphorvhwPb6FE1Tgd4NDxvvac2AkEVa7fQCVe5joHwzCPFvS1eYQkZbrQsx42Zy",
  "key6": "cEsaeS16X1LFW3rgw1WGUYjUP2EDxrGZPzmv31wYkxUov7cLJDkF2QCUWmmLsN3wZLUBW1pukBnQZzV1pgA8hYX",
  "key7": "4QpQq38tXKuJwig6wQdt4kweCcbNbB4kKvLT6cHueQwVST7bbjZLNjRW9CeBqUUafQFyYX7G3hLcifE7kJ3Lo4nX",
  "key8": "5w1ZRTK3JWFEsHiEyzg7TYH9DkpSKh9aG3UFWyRrEHMoinmMDSWf7abgWThtMpnc3wsKF3EMtrXSkRNWZfBgVK8v",
  "key9": "5UbeyWQdygHa4eoV3W5fwkapKia5eL7qBQmsTFo8of7hwqD8A9EHQb1zSjsJsZsmNsoNWgGTXaxJyGc93SfaAzR2",
  "key10": "5Vq9fjEU39hSAS39w4BXqyUkjTWoW6yE1EfJnYxhDKQzV4TwGC1iGfmPd9TNbJjiGojiKk6hqj9k9FT26GCZShaZ",
  "key11": "4f33tSAQqWpBazavf5yiiHhU4wu3XT83aLkWXXeTg48qhBZoqhPPWVvTeoxCweeii5L4J5mzaTHCMzEmjHy6FJmi",
  "key12": "4SjhJCZvyqPGht4J7Y11QbS8WBEWJE4QfcTgwMsE5Gg5wnCneWKbt7TBSGChzw5N7VMBt5HMmJDnabAvLtR1bmPf",
  "key13": "oY8rr3rcrc25QBACHV3pCWyexHWfEcFYDyrxgdEAPAyRXe55tJiZLry6Uf8XnJZKX7bTW3BbiXrFNhKUmhxnD6F",
  "key14": "3kZwEHDeJrfRbUeU2uUdVYwxvzaAF2itTX7LAAemt9enxBBworJKa2BntNzrNUNjPabGCpVhQAXWWmnpmyzffKdb",
  "key15": "3ZuV6YqMG5j8JWFCV95um48VfHNzXW9vo56GzzepfcovzTYn6EtWHAJMRZZLoGcaNkw85V4qKfVDucdR6bidQhw7",
  "key16": "58pVGuKt9F3Bh2pY4LGJz23GrZHq4MtZTXav51Wc3B53FHboKjGEr9c3YFQ2nD5RXXvu54FYD66xfUYJu6JTdPML",
  "key17": "2WFZMsB34WwVz6cQ5uQtdQty9aHzN2YNVp4dvHyJnAiZRT3jL8ubpk3bP1fSFx3PUKTAZooxzyUrmgmEhmKPEWte",
  "key18": "2boWX8VWVjNN4fV7GQiAanqM6jha9vAG5zvvkqezTCr5YjtsDpy9WH6aNxWWvTApoXAR3PFfcRNJdg6KCCbVZHwj",
  "key19": "2L4RsXqwoEeND7yWK33zxFFGfjPuJRV1CZBYWYK92Wy5kgyZipocQ4qwJEceVVWYmiGTWxwiCqvxTkyvaosyi59p",
  "key20": "v98HrTqVMEnFvFYRoQiBT1x9BJNNyRVipLJAMmd2PVT4jFjnUMYLcYXfq2xsYJP2kSX3xcg44kZzWmszCF8ZLUH",
  "key21": "38aNvrYDxq3TeBJHtzeWe5ToKJFVUuxcXrV7Q9MYgHWPrqhtJh4E2p5v9YWK3iem9ecBtbDYmsTwsWso2S2vtHUj",
  "key22": "4mEzxmD5iGL2USRqMW1tMGzVuQmZmn76GgYZhhkJe9RP4EFJ4jaPaq6gWZgtqFVv4qBYS26TEioxhQzK6DTdtxDg",
  "key23": "4yrCZmaQhNUvoZRJvfZvRnybAHiscKY946a4WdYg2ioxBcifAxxPhEaYCnskdwcN2Ufskit9q3FkQeACCXkRFaN8",
  "key24": "4MKJWPF6XBxCqMgcKzs1NNjFK97sxbEJ67JXdmTKDBKsfrCifU7UXKswk6mwpFZNZEFpfmzfswzMGanaHr8n41SQ",
  "key25": "3B4zd49G5p2eTX1d7KGGyJPLJeNVC2oX2WwA6v9UBMoEAe4MtashSbfaneJnqkENWuYdqbfrqrB1B1TERvXYkq4b",
  "key26": "PcUhBMuC8GR5aLhssf6rvPkGDofs2rabfJpaDF6mSvig4bu8kvqZsMkJqHxb76Z2nz1pf4gNaHeqPGwaymkSByQ",
  "key27": "d48Gf3VZEHWCJ2b7UD8GZwYtah8ztwfDEXMqjo4UhSjjt3vQ82AywuvxTVhbkjf3HfLRPM7qGsJTFZ1r3WvoyVQ",
  "key28": "4CbtUUKXUA9AaMqfyRuig2Z3Bh6TfjGYgNmy5r2m9WDbswVJHALsKLDra9ktLhexuLyEDvZjRcLkPsPWEa1BRYeF",
  "key29": "VBxxD6xyh5LBRcQHxtHypMk8Ye6WUJe1wTxUtup8S6FWA2gHKUMBcds1FgXvrvAJK24n1VbAvd7c7ekdhdfw9ix",
  "key30": "2BRMCAiKf157NzseJe9xD64UMuGrUGKHok7XLbLsbkS3AhBCzywCFvkWsJ3G96FkWjkJbFcBX1hxvFbdTf7PtoDi",
  "key31": "4yBcL3sAMG11zFRRLwgLRbYskEipDVfXwZvW1vMRCTFAihAsLL3T4ZQKDTNU1djp76W6bqpQnzY19xWUDidHvWkQ",
  "key32": "2soW76bUBiQ9ScehMbSwcugihGtyHZmfuPW42VSJRKu9paxcUu3eWEzymQbcy8wBW7keEMGMTSnQvaUYfbiCvbvH",
  "key33": "3sC6aARniPAYbqoWVPzSPzWCnYBSRr4x3Tbfy1mYDSAAbfoqps1TNv4AU1utuptBKFr3M924Vs8BEqc4AzwWuB45",
  "key34": "35QYez4pu14X9ve1W2igxQAuM1n4LE7MDsGackyx2jxxTeETNgQQ8g5gx9A2DzcfQfQB1Aui5DUX27wFqsJ1Snnx",
  "key35": "5BkBtKuKLQm1oYUjcWpGCB7BuEyM1gEtE3enFY2KNPpZvd3ztmQcAZYvAKFnT2T6D1KDPTUQ3bcNrN5uYpBaFRCC",
  "key36": "3CJfvtQom6J1avw92RqTicwW5pDaK6Z3MuAfPCVEmp9MKFan7dZH4aNCp6wD7aSF48Gv4k8CVExQwTPswxjLf6ri",
  "key37": "2NySKFLagaBF9Ak2z5NgxTeCJp9zTktTxMqJWV8LTTSTAhVWCHbt2guvXQFvXGkwC4UaJFYtCNKY8eR1McRPUJzk"
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
