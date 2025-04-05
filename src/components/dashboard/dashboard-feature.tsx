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
    "21TWJZogu84ADGFG32sCniokxvcdWDjC9DoFHj8jrnwotaDrfCRabGXL5Q4qadKGRiRTnkPgRU6icR3MPh3Ujq9r"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2FtnZN63oNssvUhdcAmGRJvhbfaim8QGYzzRYUpnN6QUyA5EzSoVZvkuJXs6wUYXRNQpHBrZGwkBwX96b2naEQyG",
  "key1": "2b5cbh6Etmo95A5p26xHGJ9gpznJm2q9ektSVeNyrWwNoSvC3GpEFgF3RJ3JpYXSt8bGLmT2RqhcUvurLmyeu8MR",
  "key2": "2urzYxbHnr2tP9XXLKjwZV8hPDABpdKLsdRVbXUcgT157bqTE1sgJp2ggQ6Ni1BcrYb2aevJbjFEUUkb1wXkkzk1",
  "key3": "Q122Tati3Qe7v2znyyLFKJt5deonomRk4Ba3kSXoBezSwPgZDL1n6GJ3maoLiXQPnNUjP2my6HdueNtYsgHU58z",
  "key4": "4pi2D5utJrM6ZXrW9L3uBu2VnHw3ApKwiWVxS5uxEyVGxoe8zZ5xguN32ZJuPPuMN9U3HJuEG3vKNRFHCJjgKA5F",
  "key5": "G5cZzwHwjJfrKFdAuBjU7YVBfA7BdmAk5xXa2sj7EruRZZ2aPUK1K4Tk7ydbMUFhMaR2sHj8LU41HKK6kt5JZBD",
  "key6": "Vw3o7FG7ffUHRPajhgXUuFfN7ABRYLuE5Lor4cnj2L6AWcrc5eS7v9HEBYBjwhJ3RXq4pE1SxQivzT12gajY1dF",
  "key7": "cPfXM7qqo41YfTSxRy8pEuoLzLRL5oZxwGQrTMkTjSyru1u7sNrDVQpngdAqkF34CtTHudACCsng3TJ4h6UXEtc",
  "key8": "5nqQ5D67qtmkx86eY6hFmxdKbn2dBF5ucLBqeWjsiiK6bDYmp6SAz1S6i2Q3NgS3npgZx1ZPqFn4FjKk2frzoZ3y",
  "key9": "cKuivkDTr6dKgWhgWJq6vwcTLDy22V7kP8PxdiEb3feMUnSr64BUwZWDgmWwXJJmimRjowNZKr3JyeVnNmaYLjT",
  "key10": "4sVFPN1UoRpituvzpf3HWett6cfGE5qwPtik8dUvt7knaquEqj24pqa4kNM9msyB1ubfUsbTtNkLMABYKbMfuumC",
  "key11": "3ck6XS3hF5QHKiFsQ99kUzs7y3gsaLn9yTSuwsW4cg87n4i5jEZkkWc6cYaL5SQbWx9UULgBPMG8etgVD7PgHenU",
  "key12": "2ibBQshkgZHaB27C5wKtroZvMoNCTH8QpQzca21svn3BJEqUeruBDHnLthNb1a9BLU4PWCqioRHA79mJfws4mXDB",
  "key13": "2GwScrXJRwNHAK1RX84oGxm6SBPzNcNSZkUuBHvYjtyRt2TkCCgXqFye4kce84nH6ZKfZShZK81aJMR66GLhskyM",
  "key14": "478LNDp2RgzLCr3pfkRGUqmjyv1xRkPZDbWRa257iyXqg2baMzMQjJ6yPpQ75sN2PZMNHZhL75fZV4ZUbK4VsiBe",
  "key15": "53MAQGSZrL9Kii9HJ1mdwNLbFGn9UgD9sTLMrZeBfRh6zZP7ZcnB5qnGDeM4Rv1jUvhiYUqUYBssczikvc2A291L",
  "key16": "65mM4jYj1qF4rAHjUFzo4yrrqjtzq6a9yo2mALuf5BaeoZmudjBG6qb4hv7AvBWdPvj9aZgK2LtVQVWphvxDc4xS",
  "key17": "51EcRuv457xyKtac7gy2tFjiY4BE3fjfifK46dHNTK6BQAKqPAaoVz3de6PexSeoReyNdN3bJWR8tA69o1GqT2Kk",
  "key18": "2cMSMX8kFhqzhrKGismSCNeF7DyFPTh3hJwCHa4JaanXjP2gZSygMAMpcGiBqhUwV5x7aqzQaksHdnhyzvnfDp2m",
  "key19": "5UTtPMp78mvMFnssofiFGkyQDsSkPZ7TbH8e8zaRjw44fCwufCpKrcFLL3aEGH7u1GxRhZ3n9MFSTEufpZxpbq3H",
  "key20": "3xND7wSghLd4Jt972DtwdByYtX8bzioGkTRF85tjsHxvjyJGh3GGDL4bamXsQ5wHQngkhjibB9oh6dUJ3fwU1aMU",
  "key21": "2HQq1vnS7fA7y5cCtSnwCPxhis78fF6Shq56g5cZPaTRj39Eu1LDu7m8F9Gk1Xsyy4ULmSYVtauvVZFw38tF88Ce",
  "key22": "656wHSH6v39DV5ivxTLeCtwE6nbCsKoM6SbChaco6ThaaLFkMKXrKyUVrsg2LeM9qgzYQ2vyVFBdXpxdYLmFYxG",
  "key23": "RhD5a5vpDJQt6c1dVdJ5e25ZFzM56uKdXbjSDuC8ahrKvd3WCyu9LvWWMR5hTGJKgqcYFK9JkezzNsykGfc86A6",
  "key24": "2cESzCFye1TEX7G9oX7cav7ewq3eUQNLErtefihaqUEHyG71HVZ3xJWQ4TreNCs6niZe4YoxAHBM3EjTvzTWvcAL",
  "key25": "5xS14sRxYhDqdzgfzwu7L89JsbrdC3W2Ty746vsEeQpLbGvt2s3LScZUZJ4MHb8eV71fEKWPemuBzt7MHKbwkTb2",
  "key26": "PdnwSzTQEX7N6w2T2ozN2T9CyjiTqsgoe7d1akjPh4Ff5eEG6AK1sUry3pamhjFbLNLWZwpgZdgFZVaXtLvkRw4",
  "key27": "3xX3fmvLzhHhcYzj71bCTuRfPCfdPZoQisYER83JF6NNZa6TXfVSLCQPckSqdUD1LhThysvkQV5rrdUHLeeibx6x",
  "key28": "3LAGdBEuYsxE7SndDH8wFJVj9uRXrKGvJDZ7A4vzeYm4qyaa6NKpq3KgJjWeAixourt5y6mdzLweGNpf41r8AThF",
  "key29": "WVy2EKumvaSmtDYucVpiVQwXYoLPnBRAh6BxHi8izXiDwXvfCidT96WnSF7SPxXzyqwzFbqwCc5jnqzCHVJn8cT",
  "key30": "278bm2BscHfeVBfRcXiLjW8eqkf2yWmkiru3fBTCjyh2zk988LSE1MPo6pZVi7onAVp1UxdLqmTDRP3bx2nda9BZ",
  "key31": "Ne8znqWCLGUxL4ZTsNvWoq1Xdvs5N95FoqxyM6vws7FjJVHGJffcCQGW8s1H33fn1caMX9HFxxLKAsbA3WL381L",
  "key32": "4qM6jzHitxKEuFxBLoWsyNGuVAPPNfUc6GgWTPPB9kkaCgJ3zohznMbfx1dP9jP4dSajJcFeYt5q3G2EMm786ZPW",
  "key33": "4RKt7qZHczit9FnpzyUucJzbHYAPR7etaAhxtDE6zR5bKpELkBQaPm2kRb5xfd3KyphLGSkYXi8RGCKJQgM1ifxU",
  "key34": "3Y4GLzAm3yLJzmdGk9RjHYoetPDT6uftTeXaGJdRkAPsb7ATRLpfz1ZNXmHGtLF35e1HyUaRjb9fnwXaKrBPBLDT",
  "key35": "67GexQttcn2F9nxvravAsVMrnBtNeiGUry4D5ycV3fcVPaFSJDkV4yhbbBkoEjnnkrHzdrf8XAMnYt9WGGm1xs4Z",
  "key36": "4EfK2gqArJUsonSVzr4Djscq92EDLhYExSt4vomepA2yFq6RANx7o3jAt3dfX1vKF6rvXXLzsx1JDco1vDLtbR8B",
  "key37": "oJeCvepfETJcZF7r5G64bqTN9SbUKK1d9AaBKy8NTb9BaMSnY8ghn8mHWf7VsZqq9pUzg7Y8qGD1TfhHCWByKm5",
  "key38": "3x5VGGb3VMAe17GW5r5VgAumFicSDqsSb1b55BC4FDBUkfjhqAU7SwC7JKD4PKHe7zrdvpapycuUfcwo97z39sn6",
  "key39": "Cp3GD1ykeppwi5iod2VdTZWoJ5z3n7aMdXPRcPX8qnNbJUkiRd3FnqqnixdvvEKq3DiPbboucye2Ext9AmkHr4o",
  "key40": "294ksK23qmgjZpukfx1J6hj6SdAKucRJefeHZpxYgcB3jP12EEL4Xu1iB8kw6f6KTj2Pd99QPDVPWf29svuMxkrs",
  "key41": "2MbfGWjsTKiJUPpttETmzHCRSVsCfmpfGsKKNedankxKtLffJEvX1ApjZTUWveePPDCFQsG7RmMdKstsmSD1oKM",
  "key42": "2XNDTtVSuGPsHqyRTYPgsPSinu8hbghVmZHDxpeEH6mN1MEnewbnG39gE33htt1zD5sRBeAu97NNbzKqkD224kny"
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
