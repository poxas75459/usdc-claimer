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
    "5jLE16SAhvtvRLsYuNewRLwNf4ZmPT9248H3urUVfv1jytwifxQDncKhYMZwetRF9pubMupByZ5EBU276PNaVTPB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5rgtPaBkXFYPozsJqqNZqWv1PbMXfZPS7SdbVwFapVpLpoCuAW5ucEDamQAG4FbhapE8qnjcJe69gqeJ9MEvUV3e",
  "key1": "6U9dGUJLmkKratkYvHSdp8sw1zHKz4eFCv7MJ3gS11CcZjDZJK1rBXcWfAGjmDy7F6TEBPj7T1CZEbDtS5C2iNS",
  "key2": "4CKW2TtuptLhCb9vGuYaVt1yK9dRAnU9X5RB4LB7GecjmWeZJBWvVA4y43QG73h17RkmX8nPLs2VGCBQNfhKw9rG",
  "key3": "4MTGGgS4S8GHT5nzHQ1e7Q8QcSDep5PT5VUQsuJQdsRQ3AKFgYDwr7w5GQBUEwxdpGheFWmKpuV7Fkuia7pTudWa",
  "key4": "3KAJVL2YKXn6jy9vajj2pPFZ1pYVsCHDSZubUpdWPitzTpBeoLrpXca8rsu5GTeUKS7Xq9DauShrdRjoPHtdWEiR",
  "key5": "3eTrRXnPFbYRHsQQvy1VcWeYbs8MtBiHBTgp2DmKuo4yNZgceuxetRfaAJWiTmVX6nwMS66a9xLJS1z9ubQSgS9U",
  "key6": "2J17HWFyU7DGefdi6mZkEH7XyGhNTxqHFghkAGPjahMsY2S88qYJ1HZQZ16wjs1HFn9e4RTLH7sQdJSbkLDHKArs",
  "key7": "4fCkp1TEj6zBirwVnTpGnXBLwHhPTkjMKXr14TAoSSPbosGvBwWpXyTRuKLDJgkPuh9eHEH6dzz5GBGGNerqL6d2",
  "key8": "3K2N7avy9BD2cxwu5o8Zcej4NrbxZ2QQuR6a4dK1VL2GKCgYAR5NECj5ecZt6QHqnqJXzR7VgokFjc68KmRPAtsW",
  "key9": "4jMRtuiVBciAnke99Mgfcui66yBWyJ4uCDVXxDohT6KyL3KiGuxn7tsectzN8zKJNFPuze1ofViwdo679c286ktF",
  "key10": "2Gmdm7mrHJk2zVC81hBMavXLQnWVZsfBJfm7WQ5MDUbBLTvJ6SrU2h3hP7YRFUu3ztczzbZjBPn58xkb6i6HV9Hb",
  "key11": "4dHp6CF6xkQUPxtC9hAHnjdz1Zi4GZrsKBMf17AdAU8AqvXUxnQtKLJY9UkebCG4YM3Bd3FddihqvePN6Cuu8aHU",
  "key12": "4HVPpgiEBr9vAenRw4DD4ZVhcvGiGTBomBhVR68TBb7VzLaQbLJEfrdGyJATHWtFFjNBaYe95ybmkB65ejVpbUZE",
  "key13": "Eu7WzA7k4noAirnifuedpKm2fCBnkvRtaDTuRftbUAmEaFwYjZvZsoggSVG2k5vHqJH32rtuqGhUtUJ1cywkeFr",
  "key14": "383m2Vcyc8HZP7bP7xJRP55cSVjFbu5AecG75Gitzy6uahQHfS2zhCAJ6qaPcdhpswbynRdYSwK4gJv5ADZTgTpd",
  "key15": "3S2cAXSXThhSfc9ZayQN7Ft9wkpfk8GunP8xPNX2ibp8rzKAuC3afbioiMPFmpB7uQaiXda5oivRRUTZSqMCLdfx",
  "key16": "3oRfJBXVW1sBhrxSUuZ2D83rU5hzHnfv1TARY4cam2Q1VGcZEQezWnpYuhRUeaMniiug3KLDgxumtQ4ZKGHM7zGf",
  "key17": "n8mypZ55YUQJx764DjxAyPi3avotys3ecEyFBhEBXemcszFcFAm4BUKQ9UjwEY3K6qmdW1KbYmbTMWYJa2GmWY3",
  "key18": "2vHYcmwuqtfewcmwQFg4nxg1omGLpxteUu4nfUo85S922ghhLQMqEGqZw74YeNoKd57U5zXZvMMdiG6agNsfjEF5",
  "key19": "DqbjZm5Az8c56rHzogrwKeBz3b8FQPESRFhWHGBz6CAFj5Xd9JMJ86aPJSVbcLNXC2z5w7GYgud2FtuhpwLghgn",
  "key20": "2cJRGsecvTFwYQLVGShz6MkDPu9H5RSVGXQoo5aKLSiM3fXJK4xKBpwKXRL372PP3kjYjrVPTv1VoXuAUKF29hYr",
  "key21": "4UVnFBkV9PrBfXwr9mXxQYJMeLSshTvmA9M35MeNc437zMw28U23PnkRa8LoGhfCuxM5Ea7HfFbfLzHL3Wstr3wj",
  "key22": "4r8RcTVcQY9tEnH3nYCpnA7VsJHjAWX6oP5QrLGa14ZgnEWX8Hw6eP4mUJ6Zh3jBakFpqrN8aYbDviLvwFEA7Rx",
  "key23": "4zGr4xXQYhWwDaGGEbgoNkF2eZiYT8NryqJseg9PNX6AyiB8hNYk4rRZ9Yq1GnGhbkdRs7Pd7jcyDXAvAU9kDw1A",
  "key24": "4BDpjqvS4Bg3WcVwHvDk7mz8xkzo1fUUxh9Fzpe1sbN6Bk5t7bY7XmQxtFz2tmGxMiycCn4a6cCE4jtKbJUWRZjF",
  "key25": "4yXVkpi4PAzCJhuqnaB2BCQC7KucKXT2SiPhEnake3aFAV6Ywyt7GGP1ZQFYXjtg6sZEejPzzbvnpDqL85sk8FPn",
  "key26": "52eAmaNkJ9VA2Fj1Hky79pyAsykr5kpwCwEf3gSVSzJvBiaBtss2oJrdPJbk7VN5517457W5PGCB9ECsfZe6LaTi",
  "key27": "5Hygi85AZHpLD7tBysu9Jcqqs5Mawxc4d8wvwqWF9ZroSjwgsrwR859Z2PsjpajBMrvp55G9vErNXRVSqS2MmKEU",
  "key28": "2buAtyFqDvZvEUHhaPbwxQcggfkXYEvTvdNGnUuzBsS6H94sPqsAU3oQTHv8im21FhA5bJgpgiC9rNcPueUzGmjE",
  "key29": "5yrP7EqXvMVtkBeEAXezAaaQ7Evd4nhoY9Tdv5XJEBhvJhAJRwW2FX3quZtKrFsVoCsm444K7L1AJAHmSG8Z9sDK",
  "key30": "54DbNmNbv6CnjcrrWAr3XYDdozcBxXHu8QjcLRWRR9oWVLivkkyaEHL67q8Nk7YtjWq6v7QQWkwqZUA3dEXod7Bk",
  "key31": "3NgLsAtaPwLAy2hhau6rrLoeGcDgqsyo7jWZiNAmngv4debi74xmRt2yYc2JWbUDQN24wWcujoHyefgpd2r6WAb7",
  "key32": "2iUdjvQQP6JNZWkWTBMVpydf5LcpRAD6gbEZsuw3inzoyXTkY4t3anhUzz9FrT9YWkLf7JR7R9J5Ey3WDooLeV97",
  "key33": "pwppvv1PSD6mVnog1uhsa8SxMpZtqkcFj2xsa4uwq1kDxSiX7eUDgWyN3Vjk3g8Aw3BLWJ1UU29GL2GSJGPgSB2",
  "key34": "MbGsrbdnpgjPfuDu8azFvsb94oxW3fKq7j3F16AFPYy3X8nu4VFKRJb7X8e2QBpAkiY1un972oJ9dsFrXh5M3FS",
  "key35": "63jaH8KDJXHcgftUxUktbRHz3yGGoCDFGPJn6LKcT2mnegq6Nyb29usjECuBgNEckV3fB8xgszwzyeRosZK7pfvd",
  "key36": "4AmZe4sKsviBvqeoG4qyZuPjAkg5mYWSt2dUVpkD9d3Jr4RoNLAmFKT5LzmuEYddbCYXQ9Jx5ZTnLeCMHf9Qp8WB",
  "key37": "wTYfb6jwzAY5PSFZaamjPdHTp1z4GLstBV3DiE8f2mJn2RDAb19xMattVpJoAKZ6M5TGLEZEENbRN9fBC3kzMb5"
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
