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
    "3Gy6UHwhZnd7518FbWUZGxA7VCNVqm88NnQ6PL35SQDTt4hhRKf5S7bcc478GSzRtWGHV8LqYeDw8ofASAGDALZn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57QBmBZ4eRRdNeKDLsnVRzguVQtVVgCzhn2vMnNg2hW8WV4f286oZXLYhRm9A12vnQ9kz5Yoh7WqYKqxK5Rctj6X",
  "key1": "5nSKyaBCpnyFArFjuUQGPsXjSGxuwsEmHfxu9ZXZxqPP7UrRGGfr1xoUX1Npgkh1Tm1uXi1qQ8t21gLWcPpUQ9uK",
  "key2": "4X7adLZTtnMwNW41kyXPCM1CSYtpDvPMGWGeC13XLvQzdLeJvni1zJLsE4iJhqtr7ejqdVLC9pm9ggh4YdX2czy4",
  "key3": "zgqhRCkw7HFbpakHkqXKBmT31VQZvCQpiA8poVJCTHvoSda4wnqbH8n13vUdUgZK9dpszvGd6ha9qPErpSip98h",
  "key4": "4i8PHz2VuULwtYjC22zZmsSiG2pyHoDHGQvMrhLVV6HDbgxy8nrTkgkPqSx1tnMnpYnE5NGwv3ygyEgRnX5uPDFj",
  "key5": "5MeA7je53hEYe5V7RjyWQaD5pjW9iZEx8u2SsbxapJjxhgcbdaKFH67nMaJFcWyxqZfyoZwxwcRyQZdSzaK3cmqn",
  "key6": "QwM6tgxdmbYCLhHBQ8ahNXEnqXDMXiVcZKsVD6AuXNp4f3NDXUSqJUPYJFZrJcPndZ3tEMhN8xQHD2Dp5CAivTv",
  "key7": "3wvkeJHjgH6PQoLv1eptPcsrLkSEEkD4JWs3stmWqi4NHsCnSDvfYV3CrJJJvjywVz3K1hxP6V5Grecz97TEQyAf",
  "key8": "HDD9YgXPgro522rvsWQSgPW5yCM7QAz9tY2tPHEveKB6cqxVieQvxxQWLuQoMkt6WSTeYCMwZihwGjCjFyjC6ys",
  "key9": "43gHAT2UMA6t7tN5wzLScRLSwq5K6oNFAeBLNj7GPAz15qdhUYq5HfxNDeVrzB5APqnnmu3wemiXSq8oye328eoT",
  "key10": "38oXMS5b9qVnA8ZCHyRcH8RZFEi5dUxqxpsvf6sfqTDBLrRbun5jrB6k2npRas9u55UV5eLhQeG9tZavyFPjcmQq",
  "key11": "65ostg1kMWPSvsdYePnmwEbcQecx3ekrC1cAYMeaTrtrdsC4xaUGGpqykpCmcXfiiWcmbdnGKeF2dvr3MsnrPSmg",
  "key12": "3jx6nTZK6BpG8pCZDPQh1Uu3p5vwCZ9ieG2xvsfHuUxvL1tBLWFcRVB27USjwtpQAZGZ3oX298f7JvCDZVNBXvUQ",
  "key13": "mPLHBWPSW18F9NrDdNERPGRKm9pMDqbebE4vwfoEBUkgAJsguJtpZoP3mufBcNjEqxuCK9fKKiphyBodtCX1kBA",
  "key14": "5J2uQopbAphwB6pND8HgT5rJCfxgoiR8LL8aTr5c5tHRmTeoXcSw4G7W3sdaMDUD1hiRHqXM8k29c4ccUXEPq925",
  "key15": "5CGBRwATq3h7bLocgiZJPbFDC8eXrL2VnMtKfKUuXmGgEco1DQEnPsZGvcAwuP8XETciMZcjVzaTZWznRZTE38BV",
  "key16": "c9EhpPWTvUfwv84Lt8oqkSMj5o86V82FxoB5RMZ313aotJ9Ju6zNNYH4y5ucKu1WegWq9EXL3194MzowceQSNqw",
  "key17": "2H9CwnFrMMdJHo2HNtqHcT7ZdsFHBtzLEqqb4k2fcG8rWaafwRHX9xEt1K9hTjPiM9ECBy1hdAH6nE8bAFBAS9Hq",
  "key18": "2VP6SN9Skh3cN1BSEcZVhiRGCrwRVLd4coAGcAzc2RDpra9jcjz71j73rYHBpxuFJjAqyM61tUfbb29TmezuAtmy",
  "key19": "2PV5sxprVW3oytYVU6ZDHyBy7uqmSHdD19h842B3tjek8K4dyt5beevcan15iMA24yrb2zskVs9zANzYHg88aykc",
  "key20": "4qtt8fyqfzJn6hPYC4sNgTmWN6sov1wZ23WdrM4GuqwMa9zoPjffeUGTCUZnRiLwR2nSKCRxNswintUw1CZNznJZ",
  "key21": "2fvNxi2k7nZB9EPuFDr1kVYXhSNKFuePf63u7RgBBz5jhUJkednbezDYAoFLt2der91DP8AjP9CGrjm3oie1YkHe",
  "key22": "5ZANYFidWoEaUqPzgMDm5skZZZ1jDow4MobkPTk4gr1JpTgQcubAQfqaG8XjYurge4t2JvMzZjVEcEw3MkEqUYPf",
  "key23": "w7z2ySWD2XSKk9RR4oAb3FrbMNbAhUbYvJtKqtv8s4kTNR73M4PgQz5kaU78nwSJ4uacidr16KMjDhUkqSB5mzK",
  "key24": "5xpRquKtD6QVdiaLRDvKEkEMVtJNSa16jFUjmZgivqsV9mEQ6rTNYWkT281GKN1qivmh4ARey3LU7gbzt1zkGYv4",
  "key25": "2sDMkT9Xhgh5PNoaq6aST64XgF2z8tUdXe83bccY8tAakRtjQKDdvDVDs1h8RoEgGSWpVh9TrMbX5ShTE5iW9KPd",
  "key26": "2vTTd4zbf4nBh4g7iT8HTo8vY8zwYEMdDkcvFWPH1boFK3erm8ZT74aSxQGRAPmwoWyrAepPiDbwhBMN66UomRCD",
  "key27": "4skfQycAemyfn7AFXJqCbCKatbYvAqsUTWZ7anbXNTrzndSQS7A6XJwpHQjRvt4WpqVYdrTCgC7bwyvK6pYMYnqE",
  "key28": "42AuYR8UfgrRyb1Hc213dVqDP9tuyvMzZ2uSDFVR7Bb341CCHTTKnXd7xWtMthY7oi9Hfa24qEMmAzNzpvkrxrni",
  "key29": "2rrLR7XaZ9krkbThS6kRsGerdEFGNH3DhthmhHjW726cDN9vfWz4JBnSxUDVGJGNV4fHNUWRJKi3EZM3m98RLtVb",
  "key30": "631YxuaRxZdNG3xakNUrrFSBzxT2XoT2VzM9ohTQ8dREyGN4Ud4nt9zp3VZzk6CXKwYTYcTg174MgQ9kRMHhLcbG"
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
