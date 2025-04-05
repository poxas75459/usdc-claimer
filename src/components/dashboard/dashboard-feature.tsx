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
    "3inHUNPBbeVJB5venxdjbjFpWHnQta8RvH47u5yS8HrHBqNfUcVgQToVfR69gX3y2thJ16Gf8c2xXdCBWuQ1fmRj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4DEdCZXXHQssF8XEaERM5NYcSHeCPjtxTACzR5UQsv4MDniwBX5kpsHagTXyLi8L6WJ5QExg6YiUgWcd4Ae3J9Jv",
  "key1": "291EGrcBKw1TBrknTQypKHeGDLJ6ix9DhzGJ2QeHdwdKFLmRU3sejAuzYh3hpSCrfcUrrdpXQMDs4Bx3AEFwuATj",
  "key2": "5h1zkk2XrpNLj5Lowntk6Sg7juRVLDeze4efBk1RwGRyiQLPkDDSDuaqKdkbKzRRhAjcEBpeCW8fS6TKafcwob2t",
  "key3": "3AtzAT9tGSJmMzin7wtugJ7LBMCz1oPhe1d1pZoJ6EBU28m79NQyzkKyQ3oSzR7PjA7KserYcTxAJjnqTeKiMt3K",
  "key4": "4dj7JL3hzHvTym6H8mhBwX7QqaYcJ6fpL3vzhzQnAB1pdecXRjj1jNs3EnjkyTYc63kGVzff4nV6yY1arsSjBXxK",
  "key5": "2XkAXz2ahnafT95gvSf3oo45R5JoHmED38QRwVAHABxG3F954sjHPMjYQawz6oJxK5YQgVcSXKeEcDwC8nM4rb9c",
  "key6": "u368YmpauVJBeNdJyUKvN6GWSbKYSbEt1wexxAfm4uPtgKK3orahiGTxBy4U84moeExD4uqrxgrTfuk59ckQirP",
  "key7": "4nySXwjgaozhyCocHZt4ahvGUBbYiBwTHzAQ527D7bVGjYAFbxtYPhDuH6HAb7Jg5RSc2zV6fXUbp5sGChet6R4A",
  "key8": "56cDZMiYRFUfS4UFTfrpM5FPxuJnDNsAJBaaze9aQbn1xPMZ1N2eVbUqLpPozykodzRzfKUUui85GRdKS7xFrNYp",
  "key9": "3A6n3KK4VN2bmJJ49moJQ3GnLihpyWtXzuonqFcYosrFqZfckN9KQjZoW2GyshBSPGk7pJrY8y1KrWNJtNMpnfkg",
  "key10": "3oQyoANdZt9SXMU5GCRrpJNgGkGVPsJj3Jif9GUDRP4FPnuSkEddCxa6YEKbYofGreFLX4HZjYndyD4xDisqsdZw",
  "key11": "5njBCNpFwFyfy2V5qrCAMRFKLkB2H9HhQrQhi4VdFVVLMcJpWRNn9V5DypWTvmpHY3TXWrWtBdnjR9kc1VprLdJm",
  "key12": "5PcaKiT67LXY4QbeMSgGLFNwA6eUHvEbWzUKRJwrmBriYykkSDjaw9RzoFYEuUUUSQqi4VLpRPybs4UTBiW4tEo2",
  "key13": "53cEFsMGzybECxpJvRxwUQB9mNh9L2AcuKqBraxxc8om3Kr4JkdbsBPfpBggyGQkDwMfkuccsQ2e1C22zMBNJhcX",
  "key14": "2UL1vf3zYcYBE7mhA7SZEyRGU284FMm1bMDAoffe4Fi6m8raRq7pX2fCwJGPVv4W6U8JNgXaCVahkEvysbAVUjPX",
  "key15": "3VtpguZuBNAWEmUgTfcvsFvgNRqvbgYEsBvJmpNHCN6yZfnZysr3MuqPvTSPGCC2JEsagFVqTCeAHbRDUS2Lem2q",
  "key16": "sjDuZYqrX9wro2xmkeZAoENdz1kEhpcEMMtdtD35R6mp3TXAGVcra6wmDGTVtNgiA2SMA9ffbuzK1MgyjtzzNHb",
  "key17": "iA1GE7vfXermD3p4MxrADP11xDRE7NZcTvSeCLQ5U5XK9s7x1k33p4m8iduz9fREsqkVgy5rFTWYXwxrZjiFUvY",
  "key18": "3gajWDdAN6Wn4r2dSkPqFo47QXkcwgd9JaKpoqyCRoHzfgBhfmYxeU8oosEcgtXE7itJYtAhRPp9kC4KP29u3Jfy",
  "key19": "gVYLiNaVHLBPQPajS1PkPYDtT4hfTJwFTRZMftvdQFxHcT1iXuVJU1N9CCM7eQpKh9YkYY21vKZjCK2dxUVnkot",
  "key20": "2JM7UoJwHW1PjqRsGYFz8KKsyN8EMgTmB7NF7cQJmUx6HY1CmeKGuqCfH2jTqU6j4yAVGN8bbqmSmc9r8tHTssqN",
  "key21": "2nCYHasp2zKzCjNeqosizjLXNFAhHTzx9ySaeBs8Nk3WyMcWGRFV29rmSE2uRQEfYtV9z3uK1sDmRq8iHgHRHrs1",
  "key22": "2eg1ZqkEWH8JC98mdjX36VTkuZHWudtzJjJX5koiRkkgsAKiM4fNa9UkBZx5FfT4scBZWmFn1Tg5Kq8XoKVfamfk",
  "key23": "GykU2kSGHr2qvcTCWZTuZyBBHXTLFidgNweHoV7NbpxhGdK1bLDqJxxJrrifGYfM63FvCbHw3oT5YAXu6tp68d8",
  "key24": "4sJMRq5j1DGxayfv7acwUCVyL9h7XEwy3WtZBVgbgSrnj4WfvGGKxPBz9qisPBXsTovPvMumVnWHdqtESawj9Vhw",
  "key25": "kEa9Lpu88VS9L7jMqCDKifwT4bddgYG43qsF62cwPPcrezVsAvon6UZsheD9VVxm4tzdWGjbAWkHwt7jqC9iGJc",
  "key26": "3JRVVkfeAMQWoPYvcVJBLDXNqu9gv6gzGZqC5zZoKwsuvXh431cjoz8HoscpS7UTe58LfdyDii4wcdTqLTP1SJ7G",
  "key27": "6ry3h8u3Ex2xacJiSPFJdQxgjkmyr748XvAvajynYuCJN7efqcVSS2caQ8WATCuVgS741Cpuctg9p7NfonJfHod",
  "key28": "5n7vguVsHYwk5WxNC8PQ689n5M5YnjGaVhQA2ikbmYEkmciA5ZwKj2sJkJdsiDdsUTk9BQ5oyYznFBfzE49Konoh",
  "key29": "3TbHPdgqCo2vPjLY93qfND3K5EmkQixgBvpcYdH4Po5rwJVndhwcyLconGLjPU2bNYDxyijs1d3fvxFp5pAukwiJ",
  "key30": "z2iiXPzvksT4T3hX1NB7Kt3bcKoPn2vuFw7T7nA2WhiBNaNKGKQ22DzSxHnXVaRh2kQ9uL9kiuU16QmHTXLJN6C",
  "key31": "2XhCZsg4mqbbBU1SGvKnU2hTqHMUcFyGAZwGPhdMrAg6XnYrYzn8e6ZgHNbRNggfr9rkc5eUKvhB6ujXF2sUMBc6",
  "key32": "2EeNGXcr9eMRQPBgWpsoT2uu4bb1Pw17BSNbAmRk3GTP6q9aY9bMEnwNMGK21Vd4Ysd2ygaXVnMSUVXk4vd51BDP",
  "key33": "3WuE7HriTVMx4f58L4yBt1apPRrrVAFJNfB26HNsDLW51UVbaCgosMd6HstZehWydG1mfgxMmYuGHek7Lw1Gns61",
  "key34": "3Y3NG5qB7XkBau1QawfAwEZC38WCoWhpU2UnviZBoaXCCta5HuGx5K7bZmeBZqsFrqQbhVBYdNCZtKjjCG84h86V",
  "key35": "61yH52S2S9MeMMRJ2Jncyrm1wFgvZWZkN5CaGxBfAWvmTxEHEjHXMqNRKgQkKVAo4oSeooMSskMn71socVpbpGMD",
  "key36": "5S8SaRfuLiQ3jr52GuQeAxo6wtY3ec75SHrg4Y9rNtZt9bN23C9uCDCbTiSpxdrTYMsy7U7v8He67DheEeErU6Mt",
  "key37": "4YrB4VBWJtdtjoMoL2JV3KdqZfTtNzPQW7rhATTfGaR3yVvek8Z6q4J1DNqihxZX4m3Qim1GYnkhZGj5SDCoujfi",
  "key38": "2jUqhGQLADk3P7N8uqLkWGKG8ZxyPrLmLcZW3wyDYoYCtnQ6iKKQmVThcwc2KGVBNRJ5kF39T9b9ExXK4J8AzdVv",
  "key39": "2b8Mqk2FwX5nBGrVoruE8NACUEuD7BL1WxGcAwC91wRq2W1D7hunX4NKG3YzyFSeCPCaaLn6HtE2r5PUj8Ny5oFb",
  "key40": "nR4GhNPYCUYRvEJL2w8bXNzmT1x4fSdQp1KJKDvAcJWbcs98XGyTPvivvf1qHC423zGXeSNE1Wy4PXmapYf215U"
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
