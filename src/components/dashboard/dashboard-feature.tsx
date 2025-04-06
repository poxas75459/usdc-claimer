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
    "cDZsfqDeM4EGmu8UTdKuZY9ZMWqBGyiaKzmZH7bWsyQtSf1mgEGNDNWmHuKcSzkuUKoWAkpBEq45nRFYMaRL2Vg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "T45SdmVdoS3bFuuRSVdcwves5MWWfekP2fktJubTJf2gvXLWoAuEmdGNSy2aakD2sC1Pz2ivwZEH7pDTBAYTMXY",
  "key1": "4ycnjHGjj8Z7S3QSpboWC7Yr8ihY7DcjxhNZv5skQdUzkG8aNGYPyqdt2YfWiU36tWsct7AvqDLFsxQ9isaGUpXU",
  "key2": "3r1gAnQssZe7y7jq8sszxeUdP9Nr7zKoWDkvu3ecxfKCkaCZvgrmi1usUeja2ZFNZrgaFDA4ATmygwLiLhTqyD8s",
  "key3": "qdHXDK8VfkfFwgJhWYptVBTw6KU3hbnPVhVY6PoWu4xgrvausjERdjEt9wM8gwwk4pupJQL2fbmeCELffZ995am",
  "key4": "2A2SLt46LfSqXACNvABtGarya3dWxjGGd6cHzsVupLgrvJtFawo19ct3ihEsTBS6jDuNkvRU6upndzv3mp4XKHrG",
  "key5": "4HUxBkYxTnGVEzCAhsB5AQwUZobpAjhBJXpa6Jas4Pes8hjGcuFa6E5goAJYXhLn9uXhLpS8iSb1ATZ1WRgHymtX",
  "key6": "2w5hkehfpdkJX573529B5CiZ9YP4Y8byZfK1G2MvXcGDDMwWJ7jrNpQU5eFcYmik4r8iUSPhP55z4rUe2cG2AJVM",
  "key7": "5m1J322nRjiqbwkhyDZ3hPDvhS1vktenbFw4SFyXxvNBi9BfUhytDrg8QoaZRuaZGx1xnRZ59NhyBdofepn7YBxo",
  "key8": "5JHXopgVazFontM3tVkWjxvtGtLmut718ByifvMJ3c4bnbQ3zAbEyqsY4QGJibvA5CKPHaGyUSvt3PEByXiv6Xxd",
  "key9": "cZf6ShYPK9he8rSZPEjgDrxTL44MYGVTZk4S2Vr5dZfxun1jm5XDiJ6LVHjkmFunXhnWmHiAeAhaUuv73dEiutm",
  "key10": "467iYkarTxzAdXXqpVz8MuZkKkZ7YPueFPxVj5A7MBzW6zhJ25WfeXLk1j8xyt9CQMhfz2YW3Uk9NBVngiiCsRz6",
  "key11": "4zBiysd2TC3UjGdVbKoaMkeJNjTHcBCYvTDmAfyLpxLBbNJPSeRy7N5SNhyeYtioVNKP91jcsFeVPRjRXfoexNP7",
  "key12": "5jVL1eAxbtxw9cKmtfsVPWgXD5FgdhfG7QAmTkkHErRdNGfPBZAcjJPiNHaPiGSgRZmhUTBzzPaVfWdMRCcVXPv9",
  "key13": "Fx4VCefEjj9hZ4d1XDHc5avpV6QLJN9x1fFp1peGxBuoK7BKQhqXKUu5rwF4SxboAfLQn8iBk6ScLNyADiMzeCA",
  "key14": "2ojNX643yUc1ffB8ja6UMrJ8GhnzQpb19MbaaD8RfsokAgYWsTkwJxzpYzBebMBBsKnzeNc4XfAuUkvzUoSfYZMH",
  "key15": "3EaGZDJojtyXWrpcKYT599CZDAgTUhM1BWRLhrz9hE76fqb85JsC7tLzAw7kyjLPAawBFCzeqQoC7uhqKwGGjgiF",
  "key16": "3b7tmZeVotuPAgZAL4YQcH3JQwd5suwxx3YfeYpXeiDdgcHmSgEMZczBCDHsCL86tgPyuhXyfXPsmX45LrvSdJX4",
  "key17": "3Tz9F4mXzVQWDagazckZgatmSXpTagTR4ZHgMfujdtYF6Cs6dCgcrfdKmhiEb5nMXLJcHckYBfwGYtRbGt2jcwm",
  "key18": "25BNJBKrovMPj2w6N9bE8tPqWxS6z1wDa5rR3ENAGyj13njtiAAW1YNw8j9F5MfnK5DxsAXy7TGUJpnHj1btbhJe",
  "key19": "43kgJxz29JivLNnTHtBW6XAfdd33q1ifSQwUekXRewBEzkVf29ydtgQrRx3igd9CWLcV61GCqt3fQdutvedi6pBo",
  "key20": "66e2CKYxqUFyEs9n4k9Ubuv6QKXX6TX6LJvdE25DKhgssmq5siBh1gaeX2co32MvBi71HSH6q4kq5YdKmMToSrS",
  "key21": "3B2DQWxYR2BZ7bsimG9VNAurfLM8ohv5HojiD1p9NCpW1UgY9eDyJjc1yRMrcB8it2bbbqn4iqHyK6RdTkDxCFbg",
  "key22": "36yV9EsUKQTARAAXgeZDF5B8N596neapiGSP5CTz2imav6hrmqohsFuKgET3cMT1Nf23sUxHLiaGyZUsazFtAn8W",
  "key23": "21YA94Jyv2fnYeiiy7HoyiA4dc9b1WRBtMXC1oEhavbo7r1EmbQjyBND3z92X5o4V6oKMhJFgXQG28Snhob19RHe",
  "key24": "5X2LNAva95H4wQwzmuUCjMcdxpziRuvQMFnZKqpKVBmwP8Q98bqXo2sxKj63v3dk3ZknjjAiNf7AkP8yxDDEYPUV",
  "key25": "3v6Z6Jm51U86TkodxWB5Dw8CD1YTuBUduM6H9hoVcZ9Ufd7CgeA7TtY9uW1pXhZqKXXMmjfWof9PUL2crUkY1WR2",
  "key26": "4Lv96DtP33R49rFToWpMmgrJ81vejJYJTEuwWB7h9ScSsVKT2QM7NMYVtJkc35NTTU3bJwTzhTCvjo8yBk2EyNmS",
  "key27": "3obYEnxsXBhjoHB7irxe268nzSm2hwLgxQnunKsezJvWMKruifk8cnwXcn6CWJuYhN5pr2EtrbP5xrAxRySdW6XN",
  "key28": "3RXR5xRAmVWerHiMc4nPiBYPzeWhKTUzmkkJM2BgfHpvC5H5Jq2EwjwNQiTjyGhccg7prJubupBCvVg1PMELmeSz",
  "key29": "3RHrgsdxM4nsjqofnNoMprmNnaCVJbwtbepQ8Lf4z7QvH6SCUY1vY3593TKSkz5Rm61REfo1EG5U1mYx3xEViuuX",
  "key30": "3sVmm1djx95MmdmXtUcdtadraKmC4GAh2eavYBMyC2zk9BxAFYhP8MKZmfkiwuRkrkoRCrvgExp3CdHNCaRA1vc6",
  "key31": "37LLUwoQzmgBu9XPCeax8v52wTeieeUPdeKexf9JSeeUYyxREL4a7bGgDMtFoWEbzPfr5Lvrh4DDuzuCWCyNa95m",
  "key32": "4kHQRCt6gaCk5yh5GwENfkMUXtH2AMBaotZ8gKmBeuGBsPpFkx5CdpPeYojntfBkxtKz7ZwhXm1XryJEYy25Q5FZ",
  "key33": "3sATck24HRVa3zyPdr5PLmgZxbY4ypsHpUKsvne7CTjNc2fuA7vNth21ERpRp5iyA96FteAQQAGj87MPbSfuTsrQ"
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
