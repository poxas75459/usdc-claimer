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
    "qECMALQgab5xyAfgCTWP4Gnp3FezBcxCkMpxAL4Yv2mRLQPj649R9GNE1iHBwqNrksDyfXWjToeoEEjzwcdnzY3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5opf8AYbHzGU21XZBsS2B1bGSgb7BKsZwGEBWRuSGdTtouZ4EzjttkV9KrYQH7y2MUM85WttYPxLcX1YweZtiTiX",
  "key1": "4y6ioizKTAXGS3iRgeXnUawxEkKUPHV2Q6cvzhwHr5UJD2HQM9kj6YgQSe35ct4kYtPmov9bUacJ26wS3BZLhEko",
  "key2": "3ARqJsSmhdV4dJXzXwPHN7xQ921gnSPdkorKFX4q3ZmQ17Xxwe8Q19dcNCdFaxqWY2mAYkK27mz5DtJaBybFSj6U",
  "key3": "4uyLJiLw1ihaGUgkCdtkiYHjZq6JuCnKHbHmwEZLdqXPrBzT9Y7eUfwvZnobqkFCnoE9jWFLG1ma6ehMGukjuHdC",
  "key4": "DvMSPEYUta3nSSkjMozmVT4vs2fNvEuDk28tAkhmhCBbchs4Fh4Rh86pkvDMsn3s4mW5BrZfLcxEGqMXfbXrDfs",
  "key5": "4ZgMp6xESCzFvvKomwNb8dr1qpAfjuH3NKaEE6GmWrxGTrUAoFUGE2RJVHcKJ6A7vb32mWJKRkRVNLR4JNEtCsDn",
  "key6": "E8j4emeC3MkK165viv9MEVVcJwLSNFA6d25bL7ueMacXwToQZRpzK5BmKEuuHX8PBhVi4JJX8MtMWXhjFVipH6N",
  "key7": "4Bn6R7mKpNpYGD6bX2RksrznKc1wShuwVJZ8ofGBJbgELgGbR5pTSDqbstNC8uWsPB2H7FQHK1vihBcFmdeMLtYa",
  "key8": "3N2hT993t3RmYBUM9mAmTcxm9tbvtnVfFahHCzhLiMyyk2rauXTWyhZkmaoXjn7zxvAgks9suAthDidezBNUdaBF",
  "key9": "4TS9cwsangEgnCqTf2oy56nXpBmu5wz1Ws6PHrx1wmGJEm7SvpeHqJ4mnC7BCQ3J6pfLaTWEFEp2EaVqi3WTH72E",
  "key10": "3HSgs6rhb13ZX6vmJxWg4zfQ3qn3JaJWhhheT1zBge5V3aXZbmFbyG3R9zXiYjxeL7HPGQZU12pXZXqTxxLueKrk",
  "key11": "2SuyF2osj8fymeQY8msDP8auezmAGFRZi5rexyM9esy5REHx41HErBc21qjCqXxaMLPvsXyVzh9wgSKquGNswU3Y",
  "key12": "4LfnJHBegVgF93gyTEkXgi1oLtTauaZ7e6Tcpa8uy3fEMQ4QcrFBifRut6KjeqxugHk6ns2oM1yqENjyA3tSoGr1",
  "key13": "4GLqvmMwuKB2EwH1JmphvdCmEsdzLzkLpUGzT71K4BQ6Nn6zNDYehJ6GPQVBZTVsHMZ8B67n2J4SPz3JY5gDpmTm",
  "key14": "42T5hwVpQw3ASRkkvPbX3CFnc8oKUjbqKsfL6uB1KcWRm6qEYBTMNxGzNzfuCTDtYoptMhUVFDESUt6L6dKo9r6y",
  "key15": "8JfmgYBX6LBc2huASuvXjGyDv6otaApgkRY86Sozb7oBE9CRs6GRxGWZeXva2daWjemQUTRJjcg491XHWM1UdLc",
  "key16": "29W3eyKB2zzAzXZdu4MqhRtrUpsw46CHvQpFh9YjRhkL33Rf6nFBSbMwrCFX5hsfDBUrTNk32JB2Jtw7WiJ9puXC",
  "key17": "5A4Jkj6tbeHJJhmm4EP79G3rdmdkLwuE4hFQKCNXtxq55ainh6Vm9HjhnDAND2YXx5zx5rTooLFZvBVuxYpiUEEx",
  "key18": "2ZA1CvSD33T6usMS1sHUjfktAM2omJ2EbNV3qw413otJk24m6yqaxK3tz4L7HuGBGwDq1qZMWjjZUWF7nhwDfbcs",
  "key19": "2WRqNvneSsRU9Qyy8Jvgic5K63xN8SukNYh8jUuXAnaAC11B4byHry2u8B7jFaw7LrVUf4kMNKXTSZTMB2qqHNse",
  "key20": "2SKcdewTuDFJY2DGN2ZhsBfffQzPDvsw71ePh5pa5N8ERKoVPJrmXGoeuZa6xM38wJ92o7UGQ5nc8AnxXk7XC8M2",
  "key21": "3nQGf2g6rTNEPkf6uVRmUN5N5ZNmbFyQfcUxUhfqBTNpdSsuRivmGUtNZzLpE1EDuiBU8hY4Cc3RLppneMRVsWDg",
  "key22": "3jBrgrSQcXwepqcqK3eDJfNrkk3Bt2mQ8xeNm73J96NZVxCF32HjZ7WR56tagdWi9NsRQyJdJBVAuR71hefdQRzL",
  "key23": "sMrLThyKT2LgnDwUiQDdBRm3SVKx2UyacNiikm74N7rnRQ8cWE1VCu1G3EHwd1zhDcdgnFETaDp8M4Z8KbRJKwt",
  "key24": "4LSU1xTJzsd8RW6KWzmnrWbHuNxSEZUkdNfRwpVuK3PXWw8EBDQ9haZuLxdYx7iRbrj5GZLM9aXQ7sZpAzWp2uFQ",
  "key25": "3ZdiXnkKVi5qDDnV5fETdm49vCjDPDNDgajA4388uMTJFV4wrewqxPLsiogtgEhq45DA34RybUQ7CkxVwCveHEJM",
  "key26": "4BQwx7VTxKbDv62Hq1A9rz7YBzAYwrJdvsLbivnqPDFotByZsCVvkXjGaxP4XTGTCu9rvVVeyJ8SD2LKe39H1o8R",
  "key27": "5cXeiAeFnuo66scdnkcesYLapZHdnCyKqLgD42dGqgun5Jsw5x2sYnDPCUenSaSamugTZ5pdbgLd9kMewCzKMis5",
  "key28": "4PpJmt1xQyRuwNfiGr8gNjfJkPLJv45VUu4VXPnnZumZsb7ZYDZggXzviKykDJomzXaP8qiZbqR71K6Nqprrd28g",
  "key29": "5v1sqxf5MpCLQGxGcUNQq8pf72ohgt7rARUa7zV4cEWkNKHrMjdZkq4FqgqirckfFWL5nKTr1SmEJ5frsuVSwwKg",
  "key30": "3jJMkcvSP1gqtP7ZouCi8voUWEC5sFkn7aTGxdzuMfKjF1LkaAsdPUcKbujt4QMywVqdyEKUW1EMgbJ7V8JXqsG5",
  "key31": "51kL2d7jEeqs6v4RTAnFCPxb3GeScRENp4JsGkP7ArpXUMRJwtTMwchQWzDKxaEpMf7v5oBGai9suseUEi9yTvUS",
  "key32": "42QvwWjUcjra6i3s8rQyhNN83VAodea4Gkso4xJuyof1Mog47cT7tpLh17FGfcwrWWRePaQQJJ51XCnqa2F8jarW",
  "key33": "2Bcj6qmzobEoFxDqbSztyqUFD5t7RQAedqYdoGfRcxmpyGKGB3D3edSVfnbzLG1sYSwUShK1oxsezoyDjqbPSsXv",
  "key34": "oprBf4Yanp5B5j5fGaLUooYcqkDw5RbNjLEmSa2Xp2T3JiXVq2uaRKkXU9cwGeGPEGzaY9yUGichf76cQXDmy7M",
  "key35": "5aeF916tHgdnv4Ls7b8Rr2fZojC35JtLsGSJLTuGtg15bfTXy9y4rmCqMLgGZ4BH7gQkRcb6aaUQb7Nva97ZCEes",
  "key36": "4GEGBK9MfKgSWbuE977bbFKyxTfMGpjuKK3ZSwXEQrKorqUGoMq6ZVpqUNPYQS2tDaX7nUsvmPZEBXQuxwG1GsA5"
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
