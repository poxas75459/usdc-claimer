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
    "2VGBub38yTCDzttuqc9FMKtvouAPyKsUgWobYFBH4RAGXFQV2pQn1fPZQKr6fcRqeuz5kJBzHMmPHWEe3HPtMYFZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4FnSfABDgGrTCnkMwwBQ93fGbGnp1WKKgRVc3phnf9FyRoZoiYzFVwqjV1TmsMVpEzRhX5ofQGCo7Lc9WL8jb3hc",
  "key1": "XQqE85ej4jTzi15xRVaQuzVShkEUzVQUGaR466RDC6p4sNcrfCJSoEhCD3GtR6Tm4iAfk4vT7MVExa7r3ftskQL",
  "key2": "6141uF8WCChTPYpxauidsYd4imJVqLd2ARPwqHdrzY5LBAxcDyQksBZeCm4oCdLRkyrYmRHdYMmVRg5q1pfmLLfs",
  "key3": "4VbiSbSV2ncBfrugupeCoj6rxkU9qRL6THydEWQqC5PgLq1q9nPDeVf6WaFEwhwwue4pSTMM5CnqsPq56Q7JvTS5",
  "key4": "2y91yc6UDH38jrck6UScqxtcaCy6EmqBNEvAqEvV6D1rPA7MpQWUev9Dwf7V7iXEAbQJhrR1VEyNAgvPBhXGPhRC",
  "key5": "XSCmA5fqwd74HLdD2C3tLaJxqNVutU7i4qUTaKiAK4vgZoioUG7ZLsgSE1fuirUMcmZVzLcp1rV72HJzznCLbia",
  "key6": "2tEZkgreuf17ewBmHFJD5HXbUpi5i6fkRbJPqJ1Zf75TCTcn8D3obDDFQQs6pxb7GF1QfGRrcB6uNygUajKVSbcJ",
  "key7": "3WbSgJjSUfP16qjpc9qnZuUut4u2ak2mcb2SowY2CuuKz9zsvMJmGLG67bPDwC2ugX4ncWpopYLSxd2dTGbhnPzq",
  "key8": "2pa6DcxTEZLx5cALHh2coodhUns9ZEo3kpGtxZEr6SBru6PWr2M9MpFSgvqJcPYS1uXC5KJ2q7th5hUfbczNLPhZ",
  "key9": "4XsDaFzfbqHDezfM6hs1e8HzMzTUh7bnM74YPRWtSjwtTrm7r43znsoyjLZB5QNUo7XHSor9RcgoWRLt7cs79Tp",
  "key10": "49RJaz6JRMYPYPswgDwPjaiGuKdGURXK1NPoCnFwkgeb9JAzjVeo4xeMwHPt4QXo592BBZ7zaQG3g3asE39vTusN",
  "key11": "2FjuKpgvcV2iXQiC6qPnVdrauzkKwNkbCANtcXQTmZRqmvyesNXQTsuQGf8E2aTZxdXmyh5E9CuxbcvbBERkXw1y",
  "key12": "39DtxzMr51pGzbD9uamtt3J5rqikNftoiApyxy76bCJ5CLNR6H1cZUTEEwAjeMQ4XnFTZ3EuyCebm9QVmuYS47ea",
  "key13": "63LoGDk6zMFp6vd3rSzqbzz8RNSToQCJkFNhsJAHzt6UmwXc3G9EcNYDgoYSXN7BXKW6LZ32pU3fJzQ6XAGWoE1Q",
  "key14": "2cnDX6gZ6EQJaUoqCTaHCFX6xzdVSurFnQAtJMfz7RDuQwT5sMuK6xGv4DewKL3CMqHU1Z4SuCBNzBxhFxcyxSHr",
  "key15": "5HcDEEe7pMQ2eNpsnbEXhmbbRf6hsrTvr9UwdRjEzuibsntdCa4CkM131w7VcSPgn8JU7UZPyDZ3XPgbWBw9EdUN",
  "key16": "ymq6xmL1ZAjzMRJ2EhKxhDDCK7Uw56UEfACJdXErZR856CAzpWa852u4boRXmkaRFmncw2Q8cPXY1UEaffbjpJR",
  "key17": "3yEw5tXPuFaQi9AA3RfxderE8wL4QQhr5YAMiF79i8cTR2XFeDMyWetpugGyxdFPVyHirAcmE5dubjfgvUWZo8Hi",
  "key18": "23XhWWphnJxrHZ9a4f87x1dFNovRuoyQURXcZHGRqoEmVtntwsixbA6K6sqBksUjHkHx9wFv9h4rDp1j9VTx5qA7",
  "key19": "3UWu38JxdV5hFRdK3c7tYgh9oXcS5UPVY6K5KfRtrxbM6UDgAker7tx38zq5jMidnZcWgUH3opmi95NWCihHa3jy",
  "key20": "3vNBD4U9cZZPNRSaPo2sWQfXnv3oW8wAhgvLEGD7DHCtqH3yhHD1wYLCcunLQTzRpqekeW2E4gKQLtGHEUpF7scq",
  "key21": "4PSm61ozrhvYgCECpH5mC819jio79UN786ZHvyPcpf5FyXWxRXv3oYsQpj5BCLJWPvJNyFrW6aoj4skrpReoE8bQ",
  "key22": "RLKy7iyocfk83FoDf4cmMhVxdMmsNM3t9pjW4ZeQNBfFU4EXpAgpqdVQoaWfnuZAbD9ym74x5wRZJnugt5i54aV",
  "key23": "2U4fLWcsWKnj7AGEARfEZYGQpJn1dDL5xETU3ubeEdyyLcBa5GBp1a9p5bhTmdXJm193hcGvmyYLkabq8HNQQ2n1",
  "key24": "2CmoU3jVS1tBHv5N1uNahBmYKfS5JT8Ut5BWJ344kWuezvuENdtVn8bp4mjgqMDsXwtaU3fUYjnhXiGgL2gEYDH",
  "key25": "44GbcHGQWarhxPGYViur6C8ZTyjwm98N3mMJtVpopXHJhbTSePrxkcsMjdWJBZruUFKsEshAEbPWw9PU9GkkGd3Z",
  "key26": "3DNWzMqX3LqPYMY3VPEYjc64pJTHWNYEWaj13jiDaigtfenyZFVCJL3ndYbAq583zbFf4aKKaxipVxWyxmQsNyVM",
  "key27": "2K7Uhk7iRiHeSMNWdJgSMTwfXMHG5RgH6Yc49zFXxR4ba9ntVTBc66122SnyUpP51eAhcoAQ2vFU3vq1cRmRCNnc",
  "key28": "36yvP3zr4gLRFDnhygU8zrRAtf98cu1gUPvGfxviYPPGEFAPPewDyJKouexmFHCLQXgAibSZmxMJvK2fVskTCFAS",
  "key29": "exrckE9iWpFfeisNbrMe8oN96NvTWXpbni1VfRXf47LuWgjWZZrmFTX6ixiYR1BHHAYgHpZQWS6avHgyQCnaM6x",
  "key30": "2bUJzo11MdJFyhwJAX9NK4ZSHy7VeDKVwgJts8RQuVJTXk9EyU4F8rAZKmMZErwt25nZYLJAEU4kQzWaodM3REx1",
  "key31": "3Ewv6eRp1RHj1XCaj4XDoq136kBScvzoJJkYLt7Hb4QdY5m9GjBG3o9XMsskKzMP6bk9ZHrQvSHscGBVWcyxJYoC"
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
