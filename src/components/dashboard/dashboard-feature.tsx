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
    "5oWXwbqQkuFozKegQNC1pX1zmr6nS1CTN1QTeYpAhcMgjr9Xy3vE2KZmaxPKfhQTgxLXkhm3fKXHmDaMz2oKm5jy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zbmbDWavEZmdRwjgiCTM5Fek4WmjAmvonSiAfxJNcMho87YoSD7yvDgCA895jnpggh5QZYxUfcFizTrDwMn2jyb",
  "key1": "3Y2LnMC4d1sjDarzWbe9XXt2nXtUjLNX1cztZF3gzvEWBZEpvpa2cNHJ6vpbBxgKwwNY3CfRimWsoiYmhdbLcLFB",
  "key2": "3fUJyq9zpaZvC5jVs4p3YCF11gCNwU9kMGfqqNy1FmHtnEvMnEUE25THw2QXzrEyivwqp5peBxESF2Nx71F79KJk",
  "key3": "2NTJDkdHiK31nZKp66zAQs2kugTACb5HqAdzdne9erHiTHDxy1YFgDKKhGVN3Zz9diDETwEPq6LetpiaZsyDFzjB",
  "key4": "5tUo2VGkTMTEB1dPdccgDkGuNKe3nYxUtDvhBAF9gQnPFxKtSQnFRcmiyTYsPgH7yxy4JkHFjkduPRV5NaaCocZD",
  "key5": "3AKu7KYerJa7km3PzodqbpB37vrmbBR8DzeyAahoQhGrxfE6J3D6HcbEmCuJkq44nZcBoKzMNM1JcoY4Usd8qqc5",
  "key6": "TLtekynAYZgVEoD2dbst3mxRFw1gNL1apULo1SWuEUxjcgtHMwz6pGvZ1FLM4TucVtoifxaZ79GdPRCwp5hc9dh",
  "key7": "4tKFznNCzbfNEVHn48ZikuhdCAa3JdfHXsMsJCN9dUn3wqcoK6uTpmnymRAd968c4WvMHQNVrBUGsj5CPkaiFiTr",
  "key8": "3cNFCZERFYWxMMZBi3c5RDw8o2QyhFMQ8KtvowRwHh6idguR18QCs7ZHPiQQ1HVZ31bExGuusmBzaacS2PtJ7PEi",
  "key9": "21TYaTtWX8zZFgKXzH6vYmoi58cFBbtWhzbeTKGHJt85tEgb22Tn3uW7kyPzXGs4UUksDuV7HuEwdRH11pZVRP9W",
  "key10": "4eEqVT7PReAKLAUL4c9siEXCekX7E1u7w1L3k4eyfUL2Q1As8fwkMMX6rjPbdBKpufCGtt8W53mbzCxoXNyixKnq",
  "key11": "GMyjz7T2czicJLNUvcCLuX2z1DwYr5oh8dRs1HeFgBtPhLzaVxKVJZi5CNWopYpLdtd6KnBCpqQ1UKparBMeNEN",
  "key12": "3YnTtbrvF4v24CYEFVHrCDcx2RESi6ApWako6eNnkG4RQ5r929frH25QnU6oL9qvDiiRuD2dR1k58NzfF8UTpKtK",
  "key13": "51Q6Sp91mjZqcQxaswK14bU895dTDn4s4qgD1YNaat7esXQXG2XMZKCcioeA4MCjLqhm88voMu9BeLdJUegKjSNM",
  "key14": "3zEtZHjo5FvDZUjWJsZTYY7SZq8bpRGuNnqbWrrKiE2q8vupESAejtLsJbEiXbwNQpU1EekACz9qdDEdH8A6b4ss",
  "key15": "2MHsmtKEbbNtkeBzj2QQrCCf2KorDs4ju4Rhwg8TGAJ9g4vgtAbUW43XFrv4yFCYU3429ShL8ocgaCNgXHuT6QTG",
  "key16": "5FxGPu5Vtec2SfNbLP6MnntVrf7zjdYRqaJfqXqfjERXpS7z928iQV3oR7hjbhBXpbD5YvtMTg12r9tYuZKWcD7Q",
  "key17": "5D86v8YB8tc84ovtPoz1Vy58AVnvwjxXeth29xn8svYPD9R9pf18Fbfp1uNtSXLpJY6hJ8VEap76VMYM5NAv8NMv",
  "key18": "3pgRaYjcDkT7s7wdpmLyWezhgZGPSgCX2AXmmMqMmDqgpVXYo2dbs92PqxQoxTfQH24tLovAHyRhxAdVHL23Poh3",
  "key19": "23jHwyVfk8tgN25UpkBY2nJoLAiXRHaZ3QkUoQSEPVKB2cFWXqvYj71JZoivVpRES9APugipAQy3HP4EFALXrgWi",
  "key20": "2QX4BPJQVNbhjEmFxBoW4LESvHmUaYMv1HJoouwVcbiDStjswaxMSVN4W6L2CPLKsWS4xpoujFgv2PT19tS2ANQF",
  "key21": "4xBhGu7ZXDumBTQ1uwL1LvJxuhHseQLYryAFDSB9P83Z9H1DHoQPeHYVUtqGfA855punQHEBdmP5HmV53X2HBmvV",
  "key22": "pLxiFAtVCyKovSKCzkDkbzw4NaJFyUr1Nik5ANDD5wwJKbdMKn7AsTNJ1V8CUNfZyWGrCts65GSCRbJcGPkUbMP",
  "key23": "5pmtGnaR2BDP3tswd5onCHbUGvzvdKEkqEeJ6xojK5iyouc57N6oRwTVSiygzJWrx8yjGr8Xz3aA9Zf5Xj88f1Ki",
  "key24": "3VhutdVzriMz3FajgDLGJoUQGPmLjs6HyLyFQxK3snjs9Mz5MHdjGVqZJaJC3y69mmRi7QzfQiVPcxhbMZgCkMjk",
  "key25": "586CkQpV3ye4qCRAkWXXiwvXBWv7iwA2aYckDH53E4rdmzG4CrJzJ3P53zZ9bvcTvDFd56BHmS6Bn8meNQ678MtJ",
  "key26": "1BnRTXPFCjdJvLJBArPBXU51kofeLpzRxy446L9cbWtLeKh6MMrgQPmZTUEXxhxRrJj2gpkZyPQwYntV1w2MWA4",
  "key27": "4vMmDCaSuuJknXNdHqHcoZEXvpfgqAsMzzhHHf5J2fjL3A7cgsTV6zKXdHVX3iwkZdP9dYjYQvNsr7iifNRN7hoD",
  "key28": "27piMmDPJy2oYp4qacLTHsMoNrJCFRHGJSJHgYBxpeaGJbWhXFtphu6Cx4Ur1tBYsRLeiaGR3Axif2qhPT79kfVf"
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
