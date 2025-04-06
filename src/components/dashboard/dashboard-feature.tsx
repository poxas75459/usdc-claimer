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
    "5vn2GX3FH7sbShRnF9C6aqWZDftPDYu3YHDzRsGXH4aKydkGeTQrE14xQkq1hoegX4fgMFTaWNMqeD2QHJ8NWFPM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Vf8LBNUnzMPrGCbVWJ4j8Qp6v3ufFaErJRURCFjSCnjSCzTNtuTyv4qranMMRNwRLNZV8jEosSL8UThYpiskevy",
  "key1": "4CbXzffzW8dt5zaruzvwokX1sScGEaUyqZiXUTVDP7qEYXSJMmWdGapX1f5qWMJf7gGrBSyXMYRyrpcda4CxXFdq",
  "key2": "2e8Dy77yZ6VFooxKsvV3MAz153oSKQVU8xEWStvjQGRVsqRhzQmLNunAVwcP68bgyzsQWdK3oWgRDbGownPMb2Zi",
  "key3": "jrvxj7gfGLKtqyJP4trxXtGMzUhPRuQw73XhQ4pJW4DCF5p5xPhqKEwAi4tvCi71bL8ykjyn6grUFnG6QVn2VwZ",
  "key4": "46G2mjBAKUQMwW122mZaSEZBE5MMrtDedcGn3Ay1xqGnsDptnKQTrXx8faFDPcwue2ymTj6upgknuDYcVFYGmMQd",
  "key5": "5zdwepLUshJN1BR5DsBy9mX26JWrn3NDs3Q88wg3AQUyGEAgqMSYZd7AM6Aioo735uhaZq6EPWxWR4KdbQ514HR7",
  "key6": "6CxpTJAxCviBxugdmFtXmtHrvUnNvFHSEmxxBUU8LFE9ggyQKyGpRYSZeTV1sSP2NX5fir7hVb47TmsU5pQ2VB6",
  "key7": "569qLtFNc2WQ9MksnYxb6Dn4Z6ZbHDXsPAeLNS8AvQm3qVUxDooV6uUAE3VG2aUofkDWaMy1663A2CnC5UWiGEMa",
  "key8": "54AcSVvbg9XyVS4rn2pPVt2wDKS4exEAFmoNLrGs9qNoCyCnxnQKQQhxSbZszDjnsVHqrXCirKFbCGjeWKAw8M69",
  "key9": "57ytvTuEawotGiF4BcnkyXfbYqBaX9ETkPWtWQTTTXm3Xgy28FXLZGwFhhZE3vLdorirJ6WdwEoVTDrWsZvgg3ms",
  "key10": "4BFCuUfxrNzGDRriGdb6CS9MQsMDAHmZjKdFpsnxGALdXUPfAyiPTLdZWqJYtTAxs5TBAWoDZrQ5py4AKpSQo4zq",
  "key11": "23jqpkgqAtAFRNG3c5YKLjaGwifxuiuuLvW7w9egAgFVcWvqHJh7oAZBRipgZuPBsRSct8GZj6hYZKjxutyofnkN",
  "key12": "2rCS513pSaBa37yu7FJE4hspawSYLsrqYdX7iCPvTwq2LtRFJMkdR7zvQLJcGYGBWjLHKjK5q9ZdF8tqiqkz82n1",
  "key13": "5b5n9Mox185fZdEeTDXTHVV3Hia5sfpzFtw53mRvgvz5Ffc8B9jvj3ScnTYGH5SWsVJvf8VrUctRSxGqMCiVj5pc",
  "key14": "2c44Nk1ViBtiTUWu5sSkr5BsDSnQVoBcjc5v42Jr4NbiExMbbnr6izLw4B66JFvukaxS8JTwPqV6jkKPDyYMbLv2",
  "key15": "64JQKYJi57FNitQ5cHF9u8DWMnUbx1aAnnEjFJdg3FGy4C5bxdRVnLxRv6X9Qp9J5cHYvFrqVWjoimNduwhUMWob",
  "key16": "Fm2RjxBFiPgpbg8Li6JCQJZuVYdkrtDUnSGboz1qBCYQUXmgLtRYSz81PKYRxVrGtDc4Nxx26zvHmQR6eTujCg1",
  "key17": "3jd3qYLhZioTf96NAkDHhNKpmJWuLsoJmBzt34QLAoeCjdT1b4mB1gD5ZUVQ6qLJkJ4jAjVS3xLmxbGi3PXwT9Z6",
  "key18": "3om9LRoT9bEhSftfeQrzQWASyXYcHVc3qxHC9Pp5QtA7WAfSKQH5Tmw7m5mGbQv7Efv5gLPafuwpP7TjSsHcvvu6",
  "key19": "57Wg2ExvxyxM8akoxjxVVrjkDUtnFYE5D2peTA2Q4hZQqJjZN2FgQfbi6F6T97VRVhHUb82yzY4kYv2ssckQZSEt",
  "key20": "ZNcRp958DbkbaBc5yqnSQzj1SPfwAn99HRNhvs2c7ikhbLRC8tua3Wdy2UXhcYCq4h9o93C1db648nQJeDPeEAR",
  "key21": "43q1o5Wa72DHN9XogmsMzCnGbM7SKMvQEo1mZN35EWTEaqp7vzVYxgoK4YePPqoXHKixdxFwo28SmKFWA44Zd1Lw",
  "key22": "4GGvtA4RsvVAVsYYWGymcj572D28UV3vq3CtfQEkrsVfbBwEjhgKChTxndLT5TKsknjPTs8zsTzwKqTTyDuBzMVo",
  "key23": "5v1XA1U4beRzFVYDrfC7JtLQk396vZn2mLh7qrkzRNBFtQU3jNQncoBxXo3LLnUSBKDwSPUU4KnwJLy4VMeguyaX",
  "key24": "5J4i7Vvq38GhDR2LugT4DvDnSqYRnavxyXhd8sNpnKvQVcpYVpEwCowjz9ZFRPrJMh83Gssj5TmYGkTaTE9LPMGE",
  "key25": "22WPp3Mj9TqMMnyHowZLLu1GkF74KwmZkj5e32TiYnVxVLnWsK9thMEtUZQamTaGqsegtGHcDLxvPuhuXm46XACY",
  "key26": "5Ao6HH9VvRaKN2g9yQyzpZfZ9NLnh3BwmHrnwkw71GivsKKrBApVQ5VdEDBnUmYjs5VM4skP3WiuRmY6CCXP98Fz",
  "key27": "4TJBAHWuXmRM66ivbkE8feRjeXFFLJgrcMPhJfjKv3x477o2JWG9LxWGSNo7x9DvxiPjZTgWHTjZQtmJ1bzL2dVn",
  "key28": "2UwTEEGc43c9i6uSc6zxiTv4LUh1SD2BwjMk64Nqyi3ovzZUJ4CqoqgyN87K14NbPUwavV5SyFjFog15KrxU9FdN",
  "key29": "2vR8atPNegbbY5FkELQynn9BoyVRM4vhy11X6k6seUnqszHnn1SNTvxpyjN4mzPg1BjkDoStFU9HqVFWDyv2j7mh",
  "key30": "3HcvZM8xiinzWhVTmz8EQVLDp2vahNSifc6zUtpZcfHJJwDvfAXif8VLx4GwAPpMmZKRjnLszrJ1wtbZ52ATfTaU",
  "key31": "4LHnmgUPAUzc36BJQC92Vx9ZrCBzs13KstXNhkV8QAqX33j5x7XkohCvD44N14guAtfecS3pcY53aejUzdbHxenn",
  "key32": "55QUWSG1uNHGFGMZFgDyAR7vvo17L4X3no5wEP7QcH8R4nZdvhh3BaVcZ3oV7Dhd2J9HVoD6NWn44bUYFxzpeN78"
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
