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
    "52pGTwYaxgANkHbRJcUUa5thekj1Ue4w1AqCFiXHXQ7hXrEwdMF9dGDvdZbzxoCHgA5EwS41XLW75xDHSKhWRqNi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3kMMDk7vThJtzUU4iFPKKhWVxNMAe7DaSw4w3PYAjeXwgzH4dKxjPG4VcbsEE2XtYYiBfs2pyvEt3WDH6NMVUZ9",
  "key1": "26B3AYGonoaP2LzJuGFAw5CJ7r2XK3QFJQTcFLbskzDZAumZsrScsmcvXY68hrjnMsJUPh1d8u46q4fxSHmUuRs9",
  "key2": "2iy6nz3nTMEGCJu9RQa2W77N2vreQcWX5bsa7vG47pE7M3JicbgFepoQkQEdVTrwUNaGQvfmKgQvjeoMYTTypjBG",
  "key3": "22EXP4a3Zj9bsBSGS541QoWA1a9gsxQMXupRSd53XsVcDzjdSpT1LKHpGb5bq8ZTSWAEZqzJwA1A9bhudsZ2mZBE",
  "key4": "4gKWyeXWSaHTQtd2xXn44ev32b7L255y85b8ncRDyrcBfUxCQspjTTwtb5HEQcK3EKFDSyTMdZqxXjsPxHAhZPoM",
  "key5": "5YNynqADDumm2hXrnbkMkPf4EWGrDGdzaZMoecfFEBBj6CFTqcqPgYFAz34SsLNsEgHxoR5wZ9QEVcxa2mMrWFyV",
  "key6": "3Zh2b9aeNMnk7GtVsJERkDs6H6t5rjCCje6w4WMKfH8LqnK6csxk2rNoQtPatcXb4YNiiMt5JBPdeK8JhYMWdDqp",
  "key7": "2cTVuzmL47ixh9j7LRE38i65LbPnobQY7GPVpPvjCzSrR8MiRHdevsPug8Ri9PPL91cvF2SNMBjZuNXCuyqebVN6",
  "key8": "3rb9EVHFjusvsL478KeywvsHo5tfVC8Gtpn2NdyW1yP6iZZXCEnXvTSHew3pLkvw8t3pSHKiMoTxK4ZtnYEriLVU",
  "key9": "3oWNQ5qFZbskETBLMTmLXwg9s8YjKXggtR5AJ5ibTRXnfC3gVMusEoptKSpor6PgNx89NFm9v4sR6iYT4FQk7RJi",
  "key10": "5Yj238tewXots6trmBjQ5hY3kDeDTLAXHbgHyxevqMQ9paLHJ3LppZsZtkijRL2h2EY3vnp367bT3xNE3Ly6wVRb",
  "key11": "FqmVKnge3AJMcCCzJGEyXAeWJFDb7HMWavi6SdTjDew6a7w1AYy6XYKmEPd73eLHYsDXW1nNZgrd7EN1pWy3yyo",
  "key12": "3Y7iRuaQXuzt58XQYpSHnHjD2KwVbtrwdcM5Kd2mpFnRzJ15ysThdXpFAF3GaSEyN68xGJA5mM7D4r5n7JHQHRUV",
  "key13": "3gVQ9y6hZrurfrYpwL9btQwks8sy5qfpyMiJiV3SEKQrrtEcuCA7ksVyvNNxtFiFaQDq5ScF1u9Z9YWA1rCHuKvF",
  "key14": "2FeieiNudothWB5tXJpV8566TGz9cxg5TtnyH7ThsWUvo3SU94QCv48565pwECo98u4Zynyw1oRfgy6v8tYKy9Yw",
  "key15": "5pmgVJA9xgMfyrZpEg5u9cqknwrYTjRkwu76Hy8jRd9iAGVJrBcuHghtEbFQJxUgSPF15mZBGnjqmQqTpcKjv1bS",
  "key16": "5nSCm3Fxc4uspqwuGKQuTZoreBzsJvw6LoJEt5yzuCwJyaetTNv89UDF9SCFdfeojnWFgZy24hRc3wG9wzxcco8x",
  "key17": "UcTZ5F9upRP1UJXuf8yJkUuCiz7SiUdZyTtfMH5v8rN3zRhPdHnfAJy1eGM3aSAqgu2raszjNWoM3H4tyY8qGbo",
  "key18": "nTtcxCzMNuqQAyqoR6VukxZHQ2JNiUGR74pzaYmc94WBZZHy9CuGzx5ofmWvqiqFJcddG63LRxCfPT6bMWUSvoX",
  "key19": "ToQAU6LHhow84p61bdiUQ8QeegWC8CKyv93gYHszCZDsN8fLsuTDXfVd7WdXzKQ2H2o4Rc3j5K9e5TM3G4TriKc",
  "key20": "5psSruRhhLfjYsrCz48QoeD7NPMRudyF1yLi9SfRWHNunfxGBuBiXVG5Y4B2K1DAm47fd4ZfozBpEevAY83M6Qsm",
  "key21": "3GNaD2QaaiXKQzYv7PMWPcB9o5ptmPE3aXkKK3C7gEAnbcpUDi94cXq4ZzBfxtmubCQJreQbfKEuPthEKM72jFWD",
  "key22": "5fFdm4BtTpJMWFKGaWiB8VDnoXVeyToCULFxpuqEp615xCGtiptpCJ6RdNKNxPgUzgU2L8ED5PuCrkjzP9WLQMbn",
  "key23": "4gqN68XuwRy3CQfBsk96Z6DqX7FobiUfBKwrLnX2QZGndzcYYR8wmtpPAWUWtk2A7xmVHBqdoJoPyhq4yWtt7214",
  "key24": "5Wi6t9LQNg1qtUmniTfAJduwj1CWfKCuDNMtiZ2m171ZWC8K5876jUywwAvSyZwF9htgvpxmDy3TfYKXZZMdwfYC",
  "key25": "5K3u8CCa6U8SB9fWC8q3zdHj14nHqWsjj2GAijCftC7hXuLC7kNMgZfrH5eG4aCcBu6Nc2Ww8KrWPayS6WGCev6u",
  "key26": "2DDK4UKzLkX8MDrczmAe3LbmNfAYbUx6PUXUzD6wjcaSAfjDLFdvrPKMCKYDMDZChLZcK5k5cpvU6vJjMb4fELXx",
  "key27": "26JF4VGBuSfynqfQbLuJGo6eqh4xdbde8zx1F1vA5XpH3zmubuaBUAobNuPngLDWJzbZVvaGtQrSrRnzzSqSBCj8",
  "key28": "5xErCZEnui3vTEPFs1tkVPttkJmooqit8619kyQCLFabDxcAAQdV4DcRC4wkxVc2QVcSEMk4e11W3bcmZb6gM5t5",
  "key29": "2WaahrLiU8DAT4yS3HGLi7yZHgduGyji23RXSLjn48ztwT5KU4zhaHHFi5TWowX4Kqt2UddE8mD1PWUQYgdFvad8",
  "key30": "2HEXmNQ73qXV7dcrhHPQTFN9UXjWA5tYfEEZLFxkm4cgLa9XToqWRrtAjA2tNHhVR4D2EULoigLqyeP31GgkabiQ",
  "key31": "5Gy5aUhKnhiTWj2omx796jkpKijoUqWcC4AqDiToVvxeRAx1krXG5qkxteMMjFY9rPuJ5P8hZDFWKVnmDnCgwewG",
  "key32": "5h3Y5Mv1XEwA6zGgiQGHJcfCkjz5bG2v5DcmzJkebWg7TgGH4EoJeoat2zfumLc8VPHYUqPxJuSQkaCEu6sS6dwj"
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
