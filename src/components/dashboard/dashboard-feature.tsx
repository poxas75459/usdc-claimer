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
    "2eTDk53YhKUqjX6Rf64RpsXfqbrqB3V8q42CvocxCfcPDbQVqdzWdC8uZUp3qVowDZTJhFrrdERkvrRqUTvfadha"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4nTTW9HfphUmFY2cYamU7NEC1pPuncfqaaQcU56UxGLqx9Xrw9mhZYPyNz2xiY3GhDd64V36LesdJnkcCbytuLC9",
  "key1": "5mzrP4cspDYwjZUXKeUBS6pA2DjjUGA7i7f1QEZfv1a7vgPFEEvvqrSJFM6SEGS9H4kzYwJRudYXWJe9ZgjXshAN",
  "key2": "q6tevxMdYDwBFMd1NZykdFM2x6ve1szAUarq7na5AbMdYrnaHsnM6Ep2KLviMYUcxvZtC2Mff7udBUJaCkXBzJs",
  "key3": "3uNXbjHF26G4u4R98rzNbJdov8yJiBiRFhTMAuaJVXZthRSHHhjvq8EcpEAxzWuTe5fkRV3YZYsEB7PxEtsXCVXa",
  "key4": "5pGyiAUWjiAHLTgxJq72QyVREPu4BpmR9pRiA9LNRXirtingpbhiNDUp9JTs6eiS7UDxGzS8ee7iuSN8Yv92iCXj",
  "key5": "2H5aDSVjBitcy64aR1NpbX4oWkwxvXgea2A7uZdEZBM6qdon2RwNgznFVq2fqBm1rFDEywhTxAjWivNaFPxxpTM7",
  "key6": "3YxahXh66wYVHtua6Q219SvDnSFqTjbWnAFJdmsfmDXH1mViU4fFRvqUpCL464RTHntMpCD6tjhdfrDZQaJSc4Lm",
  "key7": "3CCrKMKgWkfZbEwe96s7N4P5Xn1JU6RHhXC9p7sNUFbTQKWLwphKNcTchrJkruWy4x93Dz4E8j2p3nQ5wwm4u57U",
  "key8": "2fcR9MMHfHRCKiYRvuRkWMvDsnNYGFf8Loseb4jyuiLcpBtnj5kdFySK3tQ5Kc5kwdRQt2Q2XzKVxoXj27NfTzAd",
  "key9": "4xJW9pfDk2365Bi93TazMHREKB3HN39tGLWPvCQ9V5oLq1zpkAQBwCpuket2jfWMJYH83EogGjW3NnvZmuqqLBmQ",
  "key10": "2JaM87YvCLYc2pAiCbASQeWkdhst43WjWuSTPvkViQ3tW1Ph6cfm6BtKJByMzMeZ1tqbGY3wPCxFFW3inbnJeUmc",
  "key11": "4v6NtNL5eimuuJMWiV3mq1ryyFwSCo6CGsAzd7LJ87orF6UajE1tkJmcKwckcueytQTPZvVg6tnBVa2isaAmoMBd",
  "key12": "3ouyD3y6xjPwJdbwBfnpcZD2xPSApbBNd3KEQJAvtDmR2NXV3oRWgJuG5rg6VTjyLychSaSz6ckqmgTq1QbpgiGj",
  "key13": "ba7PBkgr6X7yzPxX6Rk1cgAKNAxyZrPNtUquCQFFTLj1mqxtUbfEmx982WcNHoUnKjM3MUpHWYtHQ2B5YgwB69b",
  "key14": "5apzfRUnNg4x2UvHNauUFEM8hs4UzpDXRFJy6hJKtdu8VjCuDN3CA3MgX2gaVjz6kEyLYYgr7U9ZpPyABZmUfXCY",
  "key15": "61n5Etd7E6bUnWwvecR16gbtACZ7kVGywdfqJ5WYuhq6wm5FD9sxjbGCeukewg5zAP3t7ahECAH4LBFtkZCWVJRG",
  "key16": "4ADXqSCxQGU3fxozng1cvKaPvNQGaNui7CbtUT3obs4ntdgofVZTimwmjTWmDrYsmLnVbVyrJas7NRfZFY9fwW6A",
  "key17": "4AfqDui4EwyLcAJrzb7z9V3WDvTnkvvgmRJRGPDtQ7dbt1RhtmJskQA1y6ci81vfFAGYYbbgypS2pLgHPNeecQFb",
  "key18": "2Bva1rBtuwJUDc46ddh9zZvLAF1M6yjuKWHpXjWkrDVH2tr7Vz9c3D94AY6yXTihN91FxBRmRWGQiMYVKAaF956c",
  "key19": "ByyWjH6St1hNTkfNxmuQxr7Q23NaB3PQmjw7iHJKk4inzXTWryR15CA8DpnpY6pTjNHgMZ5n8MhNU8cxQXGtmhB",
  "key20": "LdgDocUTx41qsuTS3L13S3pC22kKREpErcCogdsm2v5bhTNWH27mEhUvFXD2bWuZ7VHYcVYNUQYyH8J8iNo7SAJ",
  "key21": "2A2PEAYnQHfb5bjmMFCGwHwqv25Ve7Uurt2ctyHPtSKrFbE5cTyWvPMn6ncEw5jXE31cEBKP8izdA3QTHUWUEsNN",
  "key22": "3WthM7Dm4yk4wfMLDjtNpCWeDZngxunD5kEqYV5v9neYNf6oMUfwUvRg4wJaDEQoRWuS4LBte4x5uDQoRQzFC2kT",
  "key23": "7SxXjywg3DrRX6V7agAtLL8iQWVq4VtkhEfqpb552QMnTGJevQ6iogCemfoUDv4vN3RCtmBJaYngFQFWDwKUq8f",
  "key24": "RMEExptLrWJTqw91bhkkV8vsAhJf4UcWDRUChWPWQhpAFQdQ3wdNNhY4QUYdhPEgq52k5z7mz7eUSx8u2P8MdG7"
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
