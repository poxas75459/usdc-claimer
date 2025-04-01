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
    "5YVFvTJph3V2XScYUrt785DeTrVdThA2wJCUf7ZkCXEiYmuzVLXGyr8mCGirfU3fGwPqSTi6Q63ZCxGxLVFkArV2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4mSULsPhJohs3RLeH5kBBsXnfvYrqa75in3KrbtidWTSaAuDNiZhddFHuSgSJJLZfF7wuLQJZpLWskySAQhMsx75",
  "key1": "3w45EjPH2CrbHrNw53wA4XtKeQ5oC4z2yGUwwpVJyJMZKVcEYXmhikZ9xmLE6chXSwJvZAFWAMs7aXxspPmmXxqu",
  "key2": "3hyFed7Ca81ULXuDC1qz8AhUyH5H1zKt5xoEcLRBsmtP8MwsMMdP6t9obDMv2jNyCaGEnTwNTTjgz3wYfYdBusFd",
  "key3": "3HBzxqB975CmLjN5wJ2veehJqSVjWqSigqSc52n8ZUU5gVqdQZY3hGYqtQJEmnTVtuPq1TvmnWgdwWri92BfgDA1",
  "key4": "mmc5jthKasg6UCaPJNwjV7Y2VwMKjrhyKPFQw3daxyjW4kZDZ72HcP2a2UkpqS4rwVMLZQLNpgKwHhJgThkWGuG",
  "key5": "3qqr3dEbmie4r2cqLyBUwbHKApGAHX8GFGVyuzDZ8zSiebsS4bPUJDWaQMMyhK6WnrqA4zeimvGTXhBHNAKvB9qn",
  "key6": "5rpCT6Cdk6FLSXGJtjnUV3z6HHmwagVKtQnEnnU62det5xBwwL4PRjR1NJPubwHvk51C15mtEU8ZbTPpV82YkZyy",
  "key7": "5jZU7VGMXEDmjdMbphedxSNXjbRoScL9tf11btJ7bmXfNqoctAXzJtj5AcVqHU7j2zFR6veEJ9hziVRX8vKr3bCo",
  "key8": "5cVJ8HVJAqpPrvfbYg33Tf45KZUXV3TP4zXcxWpVD8WhFFfZmhejA5jfEax2StepgsErFPJ5nHKJDTVSGiosv8Sq",
  "key9": "2W3aj5wU1VVrn3vGTeHaxnUWjPfQB7aa6KQU3Rq6SbiEK9ZPymgim7RCQP9w7sDWAecG27WDeLjZ9yy1NL8JLWTY",
  "key10": "2yTCuFekSexTHNDftQP63ZotSd6hgGEAusafCns3CCShSv4V7NDb7Lo1ff82zZgr9TwmkmjZGSsePFcHGtqk9R77",
  "key11": "zUUDNKUJeKMiqQvdNLgH1hRJQQ2SRVKouc7f35VLyf2zbbAU8FDfQaHaccdTKEbrB9APJdRBBnodSmnHV5eBzJV",
  "key12": "2MoYCdVtAyBXCwGVQQvwhYfL2XuyDeLvdUwrm44mhADWoLSEvYtjqkKn1gXCDorrGUYw8iARVNHnckvhR11RbdjJ",
  "key13": "3HhTeQXgsSke5P3dnrZntn6ErdzjR8x2EhGMBGWP9eFigTXngY2uLw5PCPoYAs2ZiUCyQZHZei4gumDCy4RyH2wX",
  "key14": "4VEjmUwWV2ocjEQf6pv5QXXpr5ZsvfcoQ7AaGvjv8EFSyZxTnWaJTidqjemN2hazc4gCfvAc9FwMSSVHdGHgLKMA",
  "key15": "4tazVrMFTmfhbkvfgLM514XSsoE4hx2rp841U2NFbue4FctyM5F1KjgXPiQxf96V2vWoiMuVw7X5uxQN7VniYmfN",
  "key16": "2EACAV5XGb4P1JaHmD2jbjw7cnbWnUDuZLDxHqVUrvpG3UicEX4UNi4CiVWkyjU9JXnXa52uJJzvUMJ9LTgpUPsw",
  "key17": "3DXjELvVgVPBZvNpS1Ytm7iogG7nUsAmmwjncMLcdc1TytqsLnLAzE395Ly6e4hKJJTCYnx7DssnroZxTTZgvst7",
  "key18": "5r6M383cNxz3ffv8XM3WpL5wgJgzyPcHQmYZFUhVJYdH9Ucyq8FUNeMR8HZWAJE9M8dBZSTqPjgKPVR9gUkJ2tE9",
  "key19": "2ez8nKPqrm7UnKMckjyDSNF8xU6VYiPZzqMpfa8nS2xqkLPqosCTV46AJyPF5Y3KwRhnmAi6mTpduiSNSs4zoHtS",
  "key20": "5fyWYPmKn8Tf8L5SzhSGki4jddXCbvwkCKTwb55mK9wSs8dgmbX5jgvTvN4T7PKmcFRaAQdJVy3URryUPgAYBfER",
  "key21": "3DQZ6H1mbNQHoRgBbhN3fVDh4zZ7pHbpxQUYH7MHyqHxNprzsQ9Xhzh2oxDPyHdLEKHFHQQsh1das9MnQZezZUUx",
  "key22": "3Ez3Lx5Mr2zCFFVJxdcVojLjQrfmvcpdbGNZycuopwCGg4tbn1BfHLrXK5rwsXKcTJjpJrABTjoX81rCfEYXfGo1",
  "key23": "2gzK3e3b8VTHryKq6tCCnWKKoFmZBzbFFEHrnpLu5oz8NgSqDVkoCqHNxPQUdmbwfxuSzBnft6R7q3mqkSU2LzM9",
  "key24": "2imLk3Eda77caBPf4XqbbxyrAqzDVGzBrTmjptqPhhj458isdqg9iw7tfp8cbejzR25BS7UvHd3VxBiQhFPCggdh",
  "key25": "4fxKEqKkcvaQssSpDDbKnYz1xWa9SQ3gACfPAzu6WRVtjjgiXFRqHUEkDzuBwnyA1dCjpuvjHi1W6u985Fxdk6gx",
  "key26": "58CQcHTTcfL7BYLRqo6H7Sr6wzbUMcXJaCHWewqP6AQSUNGcLdskSGg9djvxGn3g6kG4dSCn4eqcehPqx4Dg1cZw",
  "key27": "2cL1LH3vN4zUXuyZrK2M5hDHe1ntUSQRKPTB1vkakk1y4aWgbGfRQQERzVLEkGnUiLksjTqpqFxvUfTxC7ByStTC",
  "key28": "5q6Q95uwuZNJLZfkWhZr4nVcUh1M7j47xDpFmyezajGJBRVQhzqzSEwJQZ6NZdqjiU5P9vwLfiiJcg2PoEVK2JWA",
  "key29": "737nKREDNPguwP4UhzWLcNrGzZ77uLMAzDYcaSmTTSf2QMAvBX7hGkD9h5vqXxLfKxKCqq43yieKtWMy25xK7Se",
  "key30": "4znUApFbp7wAn9fJmHpLrSRpP4EQjMX6ENp5M5PWS6cfVswLANzWnfnGLg6vazhQDpJ4jqv2GuLEYTvM38jQKaRN",
  "key31": "2N4cdoxDPU1puZevLeUUvmbJPkHfX9Mn2qvjdE5YdcHZTmex6NG8NGMXNdmm9yRqt18m9EnifFvKyyeVxkfAye4w",
  "key32": "4YqsPR1vMXf7VDWW9zrLuGcLNTgQbKrfb8nzXcwD3jm77k4gcB1aqQatHyJoWc4cS8KP2XeNcebgfcSb7JXaYCZo",
  "key33": "3vFc6xvPSsPGLkk3m7uT7FXW1BATxQDpcErZwQeLuLySeofCjRfBbduf88MR5kuA361FokLiWhEjZNhgswq8di2z",
  "key34": "4eq7SEw8gt11cWC7sNAXC8y8YNuPvXhZ7bEqzfcGaC6Tb3FPEckVtVw57sWo1DvQfj1TR8DaJYhCsqtSBfk1bkQ8"
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
