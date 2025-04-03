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
    "Dn8e8Zmvo7ixPD6VG16Pv6br5nyYcSfscRNq5bbjwm18FDUiEg6h6NHWhMsAvctfmPru6yU3F1gzWnsPdxqAjLd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "cz7gV4oNQq9ZAyPjDwtDxFRF1BpEaQqAv6vRxUsBki8rsFhAC8u74YcAzzqdTgbUfHHhCG8mo48ijUGPdkiFrWs",
  "key1": "iDg56FYkDJzYArNprJyhLJiMNRGgiEFt6tD8LYFkGc6XzApodF9T4C1UJPSXc6MKSm9wrnVQjArtm3HNGPsak8x",
  "key2": "3K4BFrGU26DFzQzpVFQeJpkyRZ7bntAZSaYxuw6J8kb8L7hH2tW4UMaB3FLboWmFaXn8StCZahiBdAe29qXFgqER",
  "key3": "3PqiZXzjpHSG6kbZq645PCsPLRwFgkkgWfYpKNN2zj6Xj2SqAvbRd9v7sfGp1gAPysdv4kh2V6xhP3uAgMSesWS4",
  "key4": "57gnqvYH7Z57ckbkcc4T18B3ugvimdmFcSD6avbCCQdjQXZbj7xaDZAbWdEN2w5ndmBiTP62MuewJVk9xxZjPW2K",
  "key5": "cGtpZQKquEecyJZJbMxAAu1vyrPQyJBS8B9p4JZj4z1sEDo9s5DesECGVrHua5i9JheL94ZVPYmJbF9g76bY3Dm",
  "key6": "3Cfqe3jy8Bzp2XDyn4HA36Pn7WRbzDKiQbxg82uVPvJJbfVrnrQT3fRnuaCt1zBQQYKrfM6Ki8sFSpzcPUP4DPKD",
  "key7": "51pJAAt1XvrgXJJCEiA5QmYTjpYepQEWKsbZP51ZdGnAnBTWzATmBxP1bR8ikc3h6MM2ibdFbZUVFW8tCVqhazXn",
  "key8": "3pWWcAwCKdcuKiU33vUtJohKjfBGtgbP5FKBfrTnxXUmEinAwcM8o3VE1NLxv9NhFBaATXCb7nt3w3QYjgGpPcPW",
  "key9": "29ep7pPK6jbwmhhWsLW1Am9hbtpn7Rond29tLpubECBkh6drXqYegjeKSKZALHEsjeHWngG52EsEMtdb93hTMbDU",
  "key10": "5p3YH5WUZ5kQwqmTm3Gk4W9bg67aeovpf6XuXWqvMX1d5VwvYLL2qfmDFS7JvKPhfesHzpbaczzBc6wgowrDGatn",
  "key11": "58WMkgrNPsxA41WUsS9Njc3V4rbYfGJ6XVCHSnaYgQyV8o356BF2uUtXDapVwtHsvKh9kkQP1FNabvpXhmhzYu8P",
  "key12": "3AkK8BTEqvPem4XrhGUFge4Q88xtFA4CEXPuhCAUVcBUtmxduRyxDd56eLFuoRw2gq461LQo34QrUF5obet9cqXS",
  "key13": "2kwRQQwct9nStL2uK8RW7uu17JvgorzyAtoM1AEeNus5ZdDhocCNshoitHfX3Ztgao8pCBz5LEhGge7bK1NPSVft",
  "key14": "2NbpTnn2TuYSs9XCnFzSgBpbHJqP42jgSqJkjpYDPXtTMnA1apA1V3CKdMvd76upqPePHk1wjrFAMPzsDjxKxnBQ",
  "key15": "43QLS8mDmngbDu6MUBoP64iGsENRrhMjgKZC6V6G5x8XR8wCDazgGRynD7wLe5meekLmb1Gq7sQtCNi8pS3vqzDk",
  "key16": "3d1UhY4YZETCVeeesRR7fA2GttsckPJ6QrW5Cy196Vrhh8ncsBxJTmAR1aBhV1WAngSsnYRT48s7k7GReQrS7LGY",
  "key17": "5A7s3zX32xRE6BCbF4RQEKq3Kmf8NA2PQt9TKPtQhTgdvn9Jj43JDLoJZXSFYv6m93RASEsdP9uNEiaj31LdzUqn",
  "key18": "4FjmmV3gSjEnTjvE5e3tNvVTyerGzXuYc7e4iuf5e4JxvBaYJUa98rx6S1AX6cgtxMaAu71i7nNVBtuLwt1h4bWM",
  "key19": "4BGDmaUpjSwVa3zbmwecy8UfTU4AMqvxyHjvnLFyKqPpKJWSTMTbpsJ7EkcrQEkf5eUgQnpijqVMmtjokNx7W7z3",
  "key20": "4rGjyExeUcYtZ6adc2mdn7PoSGxaqAjbhsHFK2VH9dL4XDdvFkVXvi1bfBTeLF6AmCSQnN7etHaaiMCqedGYS8Cm",
  "key21": "43sCK6v3F3HGfea6sv85aYrRjAUCiafPutGKzA7QcE4JoMpN5iWFyFWBDkxV4XSECpr95JjEaqqGoyectNfx773E",
  "key22": "3KWhVLSTdF7H6FSThUD9wJJK6Xz7UR28aJtrsKKmV18w4CASJBMXK4zSzTXheKniLEGBwgSLKxS9pHBHmLNrjL8x",
  "key23": "67GnVpwb196kySmXmSyA1wSAXVsgiZPLuvVMHXHNMUejEwtkmT7o5GUnPQyLzq5haXFnFZwiUWrLJ2t9CfLZqrYz",
  "key24": "5DSy3X9BrqnLwPYGdWUNpHVk4WcRcQGYnEKc4rMJ8xobi8bTPrATRvHDhdwBRHHFPGbWfnMzhJRg8JFWhZpivU6T",
  "key25": "fvfnLpqCK8gTAFr6pcTHhoHHmXYfGA5LLSdLXX88xZRVBHt52QRVT8uQ1kLX7KAcjFGamNQ9FVApNMZDWvJMsfA",
  "key26": "5oBS3EdnGQz8PEykzymmG4GFuPANYuN6AZA87YCXVwBohWopr1hEAdiWehAqCpoPFzpSqt4CBPVajvDPySjnn7m1",
  "key27": "2XfgUBXgeDF9MhLrSdago1vguauPc7Vex65TMPzw71EBAfWrQVYy75GxChESnQaf2CYgFJigMpuVyfo6f6Ktxu2y",
  "key28": "3GZQY2WPQ5ZYAoavtd9ksuP7EUnmyUgJsyHfaS38xM63s5RAysyJLRKecawsxkKGkRtLSUisgC1MGk3zNCnRJTwB",
  "key29": "5rWEGryTijhZpL1oGX8eeGHLFJ4oqEVVBaxMwSZuZ88YBZEeTRNBZamH2xndGdy7Xk6qZ2EAameM5uETUjZwP6Nw",
  "key30": "5Po4B3FuVfRuoQnSnpevPC2HzSdMxm31FzahioMyT4mJbRqz9Fn3qhgRUrNPo3i5Que5i5AcB4n2EUKSAHKAkJXy",
  "key31": "3qjKchfdRhWQqbHdzzLmFUW1TZ2E7r4khdYyzE94a9nfX77uAadWNM8DXu6aGBkRgFLKJ1bjDRE1zN9wVGe1EmQ8",
  "key32": "5r5TzRYZ28vAC6wUY3WxXNpEe2wJ759Z1Zf7msGkeKLHjVp4AiihzM2zgkoMhLPR6fWULAMvPLS36smQTh8aaZud",
  "key33": "cptw7PyaZ2bRvKEwbZy2cWMTCzBsjUwES9PP4zBSbkGEjz9XhwKbwhv7JskEDbSmu9XtDU4wwUA895zFfXwy1Um",
  "key34": "3x4mXGNYUDSNqpiCJbivvQcMFHxdevMTC2DBERtWfjLFZGhArrm9z9HDvxRQxFJGAGuQfpxg6E9vDRy6v72is5Jv",
  "key35": "35m6FQ6hKMdqXDwtzbU7cSxYPeoQg5uPyZFSa395HfvtLk5mb447Yxw7h7DrUC2aZhahHFcZ3pi9ca5oKCxKp98R",
  "key36": "4v2NEkSiJinUQeAA9zauSmxo9zLAWJwoyCpi7p3yCDuka2dHQRqDrALPQQo6BM4q8xkYHVFZ1d2ztDD6nFi38NL7",
  "key37": "5LeLNeRy8AgSbKdYEXqVEUZy4QaNJveszsJtXbWcdaB4QkTSccvuVCwhGSLxEoHKCNA8ctbWQaSXhkjFEAskb3AS",
  "key38": "2a4EqybgMW7pYWHPPu2TKRRWzDJN2q5buX2YqpEzGUWW7ESGib5JGq8yPEXe2SMd3QQqZyDam4VSubytx4yyQD9p",
  "key39": "33NmpXLUmQ3pH2F2sFPNvPXSZ5MEJxDaHANCPQ76h1GKjm4j4qbncAPyye5hNwaioK1eKziWyymPpjqiXF2Wa4pY"
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
