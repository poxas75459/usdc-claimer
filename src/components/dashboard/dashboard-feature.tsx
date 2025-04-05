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
    "6pzAK7JeNhGRYB9DQTeSz87qBGdattsJ3A7TwbSpBMLLquLtxh5JiQ4rUdRp1qm598HbhyWjkLFMSMfKCFi6gVU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3TUPBwGpcQxpe3WGv6ARLMVeP3R2nzngbgrr2QMDAkD3ouU22NFjKPpTGWvtrHhfSRQdUX7ku8K48PUzsz1JZffm",
  "key1": "4W8seyvZ7rdt8aTo6wgwiY1vEGhUUN3fmvTR6VpngVMdhXFY8xJ4fao7PTgvBdC1h35DGb3YFD8VSR8v1VAowYjn",
  "key2": "5auU4DjDKAueKaKUodkAnf6cKngnU7z6qBxQcAPUFmaWZAhAyaf6hsdD9zJpNwTcZNML34gzHHCPy3vN6w3iptsy",
  "key3": "4KoARrfnwTp9YKMDdpvXxs5QzeXtRTT2ZQ3ykpq6q5wE21qq8RFCtWJ1RjpZF418hpFmwmYBAPDcMBBnjWdL11A1",
  "key4": "3x9wR7XzGse3YUhzym75aK4KjN7BF4Ej8fFC2grcpsHJpqgB6FyLJRGMkt3fLtFzyaiFXg1oJW9vinXV4JF1v7qs",
  "key5": "3dNgXsVZdrcKNgYGX12jEfiJ3Pg5ouSZ34ZuBvActKxkQoQrL4BAHEaLxQA5QyBP1mZLuwkSMNfWaLPn81FuFrcL",
  "key6": "2T3JG2nZHCPL7WpzenyrJ3UJ2BGrZiEtZSNssCr5bkR8mEkfCB8knznwWVYssEB75tfSsTHmqskFUoqEcpq77zJn",
  "key7": "4jmAsj71yEspSbaqJQSjeEshuN14bTeDmZmnGKc858Fx5VUwvfUvXSWP789WuGw9nNBXjA9VSpnq8pXmXNu594fe",
  "key8": "3Z6P3pRrHMv5nwYfLUF9o3GEjSRrP17FMXRxyszVKWEy5y5eP2ZJ482kWKEVweFhtszhVo6Lh7zRssnKo8pRyec2",
  "key9": "3H3V59XsCru1ZqpV9QUqeJbw65yvLjqyPf3j2HA9k15T5s1a9PAfVrJVRgQWgLQtzQcBiyWkqs2Ufio2cerHH1fH",
  "key10": "4TP8EuG9YUZ7dTyhE7bbJVPNDKMG3j8YBKSeoLHBPwPVrvHzT26Z79C9SPym1hsBt9BTnBRXizj4ZQtnxztJ8wSz",
  "key11": "2y6GQbEg1YhK1AE6WqT3UuDBmvwe4bMkKyz3kFgqttpkmq8dDAyRaRYmWHNZSkqMiDtcEjs6b2hGhSNoM8dRoy5h",
  "key12": "MGL2bifntWBFZujprtDcgE3qFLkXr5465y5jPtj5VMWRH4uqrEJe5WUfx8pH4uuySdCDKtkTV7F52h6vHomsYL4",
  "key13": "4DTPJPGhzVvXGdJEqt94MnyUDWZwVqik9uUqXZcsBCdwnY8LdjXBQespRiKmqjTmVmH4ctiBXbgqtktkvrE4Kpdn",
  "key14": "5U9MMVxqCxoA1V6pLePcC7G6UF4WM7SFSh54fn6hEjMrhaXXEZqNZqzY8QMnRfH2xwiKnDWa5HcWAkBY1jaXoA6G",
  "key15": "B1hX8BCso9D1g2o82uEHuwiMKJ1CPKThd1E6w1dHuYb8FiRh3sJ9GNZfHFF7zppHYaWAUpFLUgGKsW1cf5HeAU4",
  "key16": "2vZwwkqFJsCVnzMXRkjTUo3LuT69x8FjsVQUBGthF7BwYGrrcfNhPqWP5jxWQFzVjZxyKEA13bgNPBgGStdLchpT",
  "key17": "4YBko5dGnkJdUj4FBtZc3W3hLWGrn9ZYqDzAHdncfnNH6EbZWKRP95QRq2gHFFapQFCxrb3q3TsHt1vRTPK6p2u6",
  "key18": "yK9CA1teSvorEVLf5LPwvkTnSGXhgMnjJ68yGnUfprNuLThRjGXaKVRYsUKMkiqLgKnMCn8YVa8AvHEx7ixfFhn",
  "key19": "5ZRB8KQMybnVrosbywjqbSskRTTgXy6XssTw8ALiR8tPk8cDPYAfoce684MqGk2auG19cHpBR6VECu5fAhWaiTLo",
  "key20": "48GdpqKtmpYDfCGyMfUT28EDtumZTKZHGC1qCBPVoJGivW9CFMvXxfoBF8VHdqF5NzWZnuaKWM24dbYT5FUG3nMy",
  "key21": "3LC4yrJ29wVt5d6wqX2qVFHtLq5QTPK9XAcrXAqYLcpYmMKETrv9S2wTbLxFVUPU9xWCUMf9tR5Qaj33ptdtCTGX",
  "key22": "KoKX8KU1dVvhD59HqZNuY74xjo4tGgkxpvp9Dq56UiXufvSPQNPgg2MbeMvnZEwzPgiCbdgu1G7hCHYs8cbUYbv",
  "key23": "5RBdrqqM4eMNLSEPsbFBWWCtppQwSUaEn4HpSPbm46euKApgRHTqtLCE67ZQcKpdm8R2K6CksbasFzY3UFQau7Tf",
  "key24": "3163V7Uppq74kH63U1v91QkvtGooqJuAKMNBgTEqb1fLYSoQJHiKsuwMPnARkP973W81y9RbpweZfK8b5yRYq2QZ",
  "key25": "43ojBeBBeYFQj6qZWaAFUbY5d7WPwjZYrHpPk4S8kjquPSC7aH744XxW4hhpc2TeV4sYpfL6YNsksR2DCvjt5ACa",
  "key26": "3pMR5ttreauN68ZovQTt9GYGCs46R1S2aaVBEgqqYuoaF87vxzK5XkfHYWdG4uvL1dma32A3cWvEzAdDYa4M6uk1"
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
