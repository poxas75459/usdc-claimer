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
    "5hSMFv4jm53SiJaup6A5fq5ZVFYcSnSSgvJqFVQ4WMVV9kpARWf87iMD61dYUJ1jngtJA5rF8U4wKT76mykU44E6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "44msb95QbMuVr2B2kjaB17HYuKrX7UR9dMchnEEsqjK73YUdqx6bUEozUNvoi8LPKoB8Mtgd7QgV9t9gYf7KVC8m",
  "key1": "3wcYKwqLtfgZ5njt4yvowZfXKCJ4P8u2NDW4KEFFtKhbvQXTGgM3AfVa8w6yMMQzqKDxwh1ZsH2QyNV115nB8zhg",
  "key2": "5SjtEn8ru2a5B8fCrBMtnhXpFFPP8fRWD1kyTNeLsjvsn6MzTzBhSAmrYUGRMx78NiQVNDHnwpG3ahmTbYJrKLL8",
  "key3": "vz51HjcovLyyaFXJvo4pmiUpCTzQpczcEWKHxL6aTdyb5uEWRt3yCiFhiX6DeQRAmzTb8kyGNaKrHTRv6yZSxnD",
  "key4": "oHExgZj4DkmRSfTfK3DgJLmQ2ing89sKjexkoXb9qac3A3JbQed4M869Jdn38kK2DPeBq5RTGLJd3ztbFRx9k5j",
  "key5": "Hf4yY2NqWkjgRTvm1L3uJBMcoA88QwfCj2Av6YG1vQWShkTg4JUC7GFRysg7WCsKzGtS54RZ7AJwMuvecJhXbKa",
  "key6": "5YvgvkB9Etrupfxm5x9vTNWnGPBanH2EyFe3w8ohQB6P61JW7GoJFfzZ3kFpv1UjQL7Gdb8AHmLkZ45XLoQWfHT9",
  "key7": "z2PcpzHB4TeiUY5wFEqreaGf8QFQwUrtd9CgS1AcHEL6eNoS7vt96Uw2iLNSN8QCG9sy1a3D9sX2eXufnRFSigd",
  "key8": "3TfJVG9s45abqZsjLmqJHQKjzKDuGCm3m4eUg3FtsYjDKF4gyJ9PviVyqPp4z9i333rQzddKbfkZyhUyrG8HSYRx",
  "key9": "4TFZwqgb6rnw1iWroAvVxPLmRuLfsfn9yrLuA8E1urkWa3BfGgNZ9dBdt7U2zQqTHp5HrCtqaHGy2zFLsfG4Mqr2",
  "key10": "3ujFD4x8pJuDJF9kpYDxqYVotkWTvjd9j396R5gW5Er2k5nMjA1Dz5bHheVn2M1Spp25i3Mm3tvdXG9RDLgubjH",
  "key11": "2wc6NaQvaVfZejb3p1f6mPnBAKsWcUyqGWGZQkvgsrTZ3CQYBMpdsaydk1kb597hK9hoXc4ZBF6CKowLkm4Whrrq",
  "key12": "3boHcwhBPx4iqw7qYECbQBZUqvwisNVsCd1J62hsYaomjzJYJWYPHuWrZ28zmHkvgZcYUfDSHrwWMUKa4vdoQvbE",
  "key13": "4Kdt7gChwugWWd5j1zcmbtmyhjhQHycE1Z314yNKyjjoja4U7YWQwtXzVbGNki5C8D1YrnRto4CaMytswg3FZPi3",
  "key14": "486n3rhrqPR4eZu6A8diabzvSnSAHRRsZ2okf1yByTtKb7EnmJ9kw62N7mxisifFMUEFwLbfhFzNH4GasHFMg79Z",
  "key15": "cjujvtrEMMY6UAmP7Yn5nmea2rpJ3zECoVsMSHzfVYUShFx1umsbxPCuenBJG4xPKusNn5c9Tn6m3UxhCtatbbH",
  "key16": "R2nkNV1YWkrmW71C5KEpUCGJVT8Exo96gXPaH1gpTfNZfwpmqFMLFQ8xSJnGYPhRqSjPwJFpNoozGXtnc2MYo3n",
  "key17": "2p3fVKghBFnNrvRXhfZ4BK6vvVE21CuApBQwDMjyEgqyVS7VhUXg2sBFSNyjhhrRrwKeWvPX5reGqAeg47agYrjC",
  "key18": "5KGJmvGmeXtvmAjQoXhLkXnEfBBvSmRo1uDJfpqMAhNEoE14x71UanRSMKYXhfu1a63U2WkCGbZhakcSTgWRpugG",
  "key19": "QbEwjBAuKn852cebDVgu3zWnAZFrQqDSsxCCXHNQP5LKRoW1fg8dw8emcR1aSptFGpzoGnyb19KbptxRbo8YcxR",
  "key20": "3fezASL9syCSSsVLtfStdxbV36n3cb8V7o5bJGpLsZ6oCiX9uxnsCTHZHbUUPJpQB8W22KYNguUhwSoEUmPSR7vV",
  "key21": "wdECqYiW9AibAweryBoMhe6ie8KazWKt1xV2CvYme4LkuuGzvCni5XL5fwnV4Yh2aQMx1r8NigjENP5suKVKYeq",
  "key22": "Fnc4FVZJGvjE9R9zb9FLk6ZFEvNAX43YnAGNTtvTpV2MSDvNgxX4CGVGTU5xkR6W68RY9dGRqomwWfLg1FDao6r",
  "key23": "YNaQp9qwRHz9AjTWLcQiNThczTonrrDYqmxCZx8bJZ3a4qZtx2LyhsikPrzWKDUitKoWvBeGtRvgNTZ4rus1HAR",
  "key24": "5VwCyDMnRcDsPiQh9eJJsBb2L182XcfYEB1N8vmatkFvvu2YmSVjqdugTenZfPs2i8NcSAE8yyvcAaXFub98YXdC"
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
