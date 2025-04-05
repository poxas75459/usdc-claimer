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
    "3myKpck3DKWJwcEMMA1tfpE8cpki1egCYdTwghv7Goo6CU6peyexq5HqGBDEAvJnkSekX1JwgySZxyhrxoyrMrnY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ZEpBTvUVixaHz42fZQN9Aacgi6Hcewt6ibDnLHQuYs9TLMgZ8BFVYeXju5sa9jAeDDQrUaiBkP9me2m8fmYdxpv",
  "key1": "2dGz5dpnsAjuu5hZCcmoU8j1jd5tLxgF8jm7MGTixn1JcoSTkSeuqVWJJvHvMWsw3rZsxwy6UD8EmXUpQtJFaUBV",
  "key2": "3KNC7D1o1pnZLY1fCQGM87bCvVyKUKbzMx4vauiBx2FHK1mJg15jSsGwisnAaKTWMKt6mBUwL7CCKes5ERqMoDQJ",
  "key3": "CuzTGhM1Doe4KdT5VL1rrGDLe3Cr2ZMxfuQSU4pQBXTznDzkD7nrLKhBsY4suCwHHEyc1auBJ6hXm38h7k2F5dj",
  "key4": "24yuaXQzhDUeBUCyouvqoS9iNg86W8bDi9NXJyweMGGzJggvG3bb34EjQQa9K4qBGuhhnbCkHBiytt2CRfgwzHHq",
  "key5": "62gj15nwKSePaBr6ZmbmKd6D5EAFFWo2tWgpbCKknMVMAfSfsBaGWaLKj5BLfJL4ocYrYXEefDmSKL3SYnF726fX",
  "key6": "4iHr6hwxPde3jNJuasCu12Rg8jwj2BCieepEB6HZ4Rwk78QE8hvYUyeB1UsYSPR69RFb9iJiuZPNY9aWtrStTzPK",
  "key7": "2cfKPChuKjQWpiz1bWrb2RQp2Zc9x28fGQffa9Ha7RmeoaqjDp1pKwG2tE68Fp4QSp5PfrbdkNZriWhXd16GVBXS",
  "key8": "52jZVwiW7rMFcXQeQV1Vy5GfeCqJqMjxQpsk5R6q9zFnjHvWvcZh1sLxe4prwSHqogqZPk9sFxHt4kbq8jY6jnCL",
  "key9": "3PUs2bSUBTUYFbPH1ArywymgaEYGPsgC3DxaA6aJ517Ggyd3Bz77vcmNX5GEshaTMfxJCgXSkoag8543iMZNH6CJ",
  "key10": "2SLmc9ZMMwRa2ZETM3PzUt9W9qqpUXFzotSpBgnF8yuehMsPAS7Nc8QUdsRHmnYe7w2EEpiqUmi5zK7XjMewbUJP",
  "key11": "3SAGWQ5nRszT7iTqo18ux8rw7tvDksn6y1SmcQ5p2VARfTdb22hZRVVMnqosgSZ6cvMrMrxKasNLrQCi2Hhpy2eX",
  "key12": "XA8sgKLkChcLuCrWQW4gxJNQfzRDcVAPh2X6RhUNLbBhXLApSypEHmkUC3fDjRyhSkKkMptCpnmbQK36ZBRhgJH",
  "key13": "4pp6XRKk5v1twvbU1uRbfuMMyyMAajAHhSnNRkPeL7TWJHGoUT6PNC4naXAjeraQoMX5kW7X2gwppjLKFqoyW4Qj",
  "key14": "5uNSsBda3JekAqGuqga1r7uXHKdGQWE2uCFMe6NGsC4YYDTTuXnVA42b4JDHuBGTHZhdUtdiECRP7quzhzbUseP",
  "key15": "1vDP7FpPuyUsqCBrurBAg5SvaYr1MHt3afj2FLHV2BvRcods4VSbJa9ynpEcM1YkayFMbHUzZVbMHyCn1DE5G13",
  "key16": "2QaS4QdaNXXcEhqCRHxGCZSDqMuo5XjwjeFifQDYwWAaP2c77dUVvTE8QnM3YQKWmUWAx77tSPQ8zBFXGZVkfeSt",
  "key17": "3eRwqMjxEkdHtCFQ9LdS7pd6DsQDN3woBGoga6XHpBDdhsmnJeHiCCfkggmNgWewcGPeTtCP4urP8YdMqwbSomuZ",
  "key18": "3ZBMBqnwuHs1vGsJtXhGLSPajeitS3QtvYQF8HUzAMCAzpcyrQLoqHGHyqA5LKHEC9kCBnpCpCQJgyR34ByBsntt",
  "key19": "5Kr5PAMMhs8Hr2UH5yXgUUHm2hkBg29uSguRefiTC1bZHcoRwgT7L7qPBj8DVkvd4xNDxvGdmaDs3sWwdnXYeE5T",
  "key20": "5DdHAbwvnSND4EUn64rqNP4aiwbJQ9eTwbuMa2hGopG4NEPdSsJ9RY72NsFxyktUozmv8k25VpSoQBrF1BESbYgh",
  "key21": "9aqzRcEfYqAKY7VT3kP65HbeZ6KAc46bcERcSnKux5PnVBr1BmTAoj8RJMGNK7hsCzCvyN8CVZMeMuBjMKJFtX1",
  "key22": "5QQzRp5iG92rCdec1EUyccJVrSXEbDKrYQS8bxns61PeyFG9DZXgbuZy5SSts1fBuSRt3R1PgHL8SnssvVmGsGEa",
  "key23": "2uQ7BfKjr63izdWeo9RN3iewtKjSEAotoajoxjwdA5SaQ1FAQnvfJZe5JZAQejwmahzM1quWNN1m8wtzvf4btGEm",
  "key24": "3B75if3KtMdEYPYjmEusYMykgyAxSTgWeS4x27izdYsG1W5hzUmdH21a8BxRwNaoJe5VZfBMxep6Xwdb8A67tXNL",
  "key25": "3b26qPb2yYXa5vKvEA3EJ5DLVfjJTriri8uSocdRySLrMDpnCxafMoysnQ81zrKcbdSeZhfUampemPWfXzvFw9YY",
  "key26": "2qnF2Qadvg1tmRb5yg25veFMesBNuRkuvZk6TzEtavyPioqATT11nUdnRy4AbwmFVF2QFwaBYRNjJumJPU8aNZN2",
  "key27": "2VCLnctBhdD6mbnR4xaBweVCkaxdH6Egh9hieq7U6EXDGvZWr8ekEJzcTeMqp7KtDUsSUkA2nA8n4LECiJmJC128",
  "key28": "3DHfZZDNYGJ3B77k6wcoEqyF61dkY5E3yfZwo2fuaneBmovnCeTpLTou6vJ9hfEmJKiWZKk3RtkKnfseGtkib6xe",
  "key29": "2shizddXaQ2gMJVUXxTCAvcrxJJ133d6zBRYM3KEikhEfwsidBbNxH5JYVNdEDqatNFCSrzet6JxFva18TX2txHX",
  "key30": "2aitFQUsLWbH8NHXRULMe7V52tSVQtBdUAohmehDWPgm3AjauS94nvT6AfTmF7ZwsauYw9cvV4TgZC4uhyat9go3",
  "key31": "2cShqfbutxZMqtnchpNBEQFh7T5UVuwErLqaeRcDtRdZRD2W5afYxqQGAHMPwe18CfyxWi5FXfopP8vQjfyUT4pp",
  "key32": "3HmzvZ8a4MALL92Hxs1GZnJix3yWDnKWr1AnBVXJ67NXU7HCVMMgnWkckSTRzicUb193E39oNjqcpsKqrgfYfy49",
  "key33": "ovVHNSX9S6JaWG4VL6o8Wza6ZKYEhdYrzKjCVEPndtMnaMzongbSBLyc8Mbm8CyVbuLkbwse7GELV7ytsC35xBd",
  "key34": "53MjupjBtcZVKQ4D74q4Q4uDsUySA2fbx8vx2iCRUqsdy9qc3sMkQRNtUMn5KPmXv3ys1n99qKC7C2rGJokv3wWa",
  "key35": "5LMeM5eMjr67fg4YHbNU4FpvKJyMAzuhpGtJPm32wVAifWDtcDjoiUs3LHxKDqrroBg3UATHCaRevay2JDJ5rbWJ",
  "key36": "3Jz2CEvUxBs7o4iQwfx8DWZRyTqq2D5cBZrSfPptLNLDWfzw5Rb2JiQkiXEoKrHPiZbZC1cmQJENsjP1pDFe381X",
  "key37": "RRrgXZyek2oB6W3Gd5TtpomcJwRfbGr35sczBzpodYq9Xhfx59hiKnivHiAbP8jajmTW3XrxCe1AZnnHrVab4aQ",
  "key38": "2TFsL7mD511iid4xMAYeFXigFhfy1RYygjkQMyT9quxpsKK5wxxEi2G4NEv15qxgJuQ73qXEALk5XNkcfdrvbCxY",
  "key39": "2ZSTHKDKt8mqDiFYHxq1J8daDafeQWHkb6Stfir3H8ikmG3Pmu85zAPfdYx2Kz4faai5gzjhATowkrLgBjPXjs1A"
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
