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
    "2V3yzYiWkwv6d7ymFQL1uWM3n9ezD794S3b5jhLQYG1p1Qj3M9Jvop1fqeb76fnZWNqMQtLMMBddBwwsBd6NWvdt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xzeMm2Va7k8q2GwKRkzho1buFYnTo13Bj4WGSmEZsLrSiv6XtmU6XTn6emMCXn8y1CD8wkEWdvp3HKNHx21QiK8",
  "key1": "2DWE59zpZmDsdU4DPPbSk155zeozw2MDJAcnwhpQ4itPLftfZmrR1wpAtbEELCcsj6XXwdwSRXFHi2jR4oksHZrh",
  "key2": "3wcYsP9KVfEy8ddB96o1bHfwzGtAjFkRF4D9mWZES4Gs9oYep1TuUPE6Jf21MQNbBLSFK3aik7vNfHXuX487QhMs",
  "key3": "5dh9arUhUPtrVtt455qd73NSFAkkacfQDpY9YxbBby1VjFRyYmo9r8tQKNBabGtce4KUYkNz3YW2t51TYuZYMVwj",
  "key4": "5yN9T8RmJgMHxx5w66bRVr1Sou4DPGxEj7dNGgoFiHWHffkji5rBAWLK8VG9VbPJTHRZ2TActTsCwLHqk6Nvr6qt",
  "key5": "4LXAQCzz9Xu6cNQQSsfoq9qwrfWKtdUKJShPkppBSB2hj58X2gLqKTLhV5ndEUwfDnpaqMTuMFisMiRz9NqwHiit",
  "key6": "2spdrLqVRWrMM2jQvoTLG5EeJJwSXPv3Qhno1fqv1zyQyctaqPMkZ5EeDiJDDDUzwUNWS8QGwvbHNpZWgVa7rudY",
  "key7": "5gG46ajtQqwYgxxxvDi5QtJi7qgBpNpge7cuZrME1rjEocpF61equRvWZ5gEwvS7gZjMSXj8ervMcguuQMASAEFC",
  "key8": "3VXh7bfWigDWTsicxhRWcJRvBKgLdE3YjVsirKvV3cvrhEBvXoybY1JZv7qQ3HXWtSqAXqNLzRDCwseRmjiqoEHe",
  "key9": "4QR176sCcmwz8CJgThbiLYDnYRZMzFUmAt9Vv1PQvhbwMJ2LjoHS4FNb2fDXvyEypMtDicHKumor8JrFepGfnnSe",
  "key10": "2Je5oeA5TAm8yY3AS6x6ohqPqhjg3YJCVPMGeYPQnfjhvy9QLU72VTFtASkq163eUXbipFKecwC2U6ARCJDaCwwu",
  "key11": "5x45Zi7aoYGyYaR8DA5u5gKsHVMVWNjDujztKfJDT2o4PMQBxzMtxyfpe4KPyWZ62rzdDis1rr7qtneQAbGufwfU",
  "key12": "2mAzVLNdy5jRhrkrChHGMey5sPzCDhaw3kqFUfcBh56V48DqXPSZGA5iLDni7QpuYj8EQ5robFAERJ9JmHTv9YYw",
  "key13": "5jbBi6Cyk1ThetD27m4wAB3655ZxzGoYRfLE6eLhyLUjo4iRXoGZ7ErRrr4YH3HnM6QZWWgp59PqKGMDtsyfuaNa",
  "key14": "4kYoHySL8r2jp9BEz7Sm1YpCinHGh3Bi2GHnAAf9EGDbjMCNRBFEbRABVPzgbTAh75WAeyUhzVYF1sAVWs1Mewc",
  "key15": "32SqV2sVnHzRvP7jfNvzmLmNdwfuQpzr65csj6onDNcmnvp75kYLtTf9uVy4eVBQnALgypMC9qZaWwquyxEoVcY2",
  "key16": "3SkmaYfQUQryxNJnLzkvvxD7Cme7qoexg9dnAHyW3hoHbZmhhMAxvLXzK7ZuTCH218hDtr9P6KBwrDHo9DBvvm8n",
  "key17": "4ZketqCYjF8XccQ34hjEwfrEuKcQgNuqv9zMRRuUAi5WabT73obeoUzJVAGiB3ZLzTUPqG8jhgwScJLNy8QoWUzz",
  "key18": "5HDJv49ziZVVjAYyFTnkQzNo22fQEytkoG3ghB594unaXYveVw9bvMySfwkQBFPA2ZVRBBfpdSC2J14WyC8iXjYA",
  "key19": "3e998ZLwqZbfi2FW8oKoYCL2rVcgzHBxsuc6ghMoGXKR2H5FkKesiXayPyHbJ7ECdZcuV3ZikV3QYsQWKBNFYHX5",
  "key20": "2iY8Gp4wsgh1m9cii4FcDtMJzsmQPW2xA7SbJkAxxjeiGhYkpazL5t2ERcphGiWKJxnZqdibGM4vaZdjSjzwpxaq",
  "key21": "3LWv2BQCBkwTrwPHrYPD8yteZb5VmiGVRKhwHX7dQdKAinLyXbDtw69ZKzgJrQYEkE18DDTcfjFNwCjQX4oaqZmF",
  "key22": "3FMTfXK1YkWMn4tsfe1cYTAtHVALiFh6DuJkDWGNcpXLRGSWBLuMUN8i49GvLPwsWk61RErNRMtJebn33Fy8XX2o",
  "key23": "3HK5G3yFQVYqZUqLr4UYzTHkpT4sQBRiEqFESgQqSERfgeWhPmLrkXDGAMHsyKmUutD9Di8dTzLe3Dp9AJBGGBLM",
  "key24": "5n4oFxHgSyJQ4Vc2w32y8EjKuZJX57PMVMwPGm3EyjGxSoMKi3ADbzEXq5VYGdMcP8ghEcjRoLiwdPtyvJSF69T9",
  "key25": "2veKQULoZbwiSqaiHCPxJCYCgL5CpSuj2yKdbFfFv3Ly8FYJCkavjUoqzjgPkFFaGSQhY7TXA36AET1bC6p111VT",
  "key26": "4CmtreBqHuB1gn1TtVyjsgSqxchRzCJqcsJkdh1Q1vo1xQMpJrGhtqgHzGyU4ToEFuScHTjTArzmwNWSKdG8QQM6",
  "key27": "5LwWp37CnUiKxGgggmF4q84cWE7xY6z4X63XKJ5Jebmwbn25tZMj5JoipJ1cf2914qytbS3HX9EKixsBGTeFk9na",
  "key28": "3Jkjesyo5J8jkdFkhaECKXiNHr7uvXT5Kc9RHwJqCnYioL8PERLDzVkLeSnXtUMnU5nMMY9SskPnZFCC9fi2RuUW",
  "key29": "3aTuothJdRZrAH5B1Tcj1RTT8dVeGH2y5GZd7DHCrUHv2CDRABzAQhxACqHB5ptf2gk8mJYcPdpiSfzVyeiHhU6n",
  "key30": "3WCMZva85T4rdyJLteHDFm3vSHEvZ7bmhWkGuwaixQ4EEsWAPVo8x4pjWtpHc1F99MibGVNsidY3wkwVKFhF4ykY",
  "key31": "52WoQdvPn9sp6a69ig1atxMdg21ebwpY9uU8g22AKn2Vz6JHbhP13thii7AtyeSFpis81wfTYE6xzyrZLDnHfJDk",
  "key32": "3sJ2i1gW49HjNuV3dJV8nwZowNUxMvFsxpAPaQyftzRDmWjceKSiPLHJRW21zid39a9DmZ5egq8s98Wmjo1nR7nV",
  "key33": "2o3hDQwkkGDqbnxpfkYsJ1GeCRiUfnKVFWsvjUp4EaeHrQGTDpYN76ATxEsYmHu763odG3DQ3CPkuEGZuUAmqvkD",
  "key34": "3BG5i9hadoEgPJaR7vtZoyVqN4rXq91khWZtEjYTpJh26cwkJnjhNFeb3jqK6QCQtAf1kib3rtRzqqaLUt8KMN2P",
  "key35": "5zycY5cGRZbJqnVUaZASzYofC6xMGpZ1xzELtTj5rsrzt1NU6Hbwh4SBM5xBBoj3FcyY7dig15o4Huw1RAzqKuQj",
  "key36": "2ji7MXTXNYHpzj56wyRYAz6qFhSRShog1CYvkNmDCW66QzWuNPvbd6D4MUdbdQymww6YbhK4rfkb6DdPEKj6NpNm",
  "key37": "G7Kxuryy8FuLDJQZqURW6kTdWmQ6jcyAEgsNA7TJsNguY9svnBwy4FXSKod8aBE4mK1ZF52PnfYX2QciArBHLsp",
  "key38": "5vfaZt7RcY2L5nKybWm7nEU7e1ioYtf6PdVStyMDNuFPfsE8SY87o98cgWw6Yja2DF2TMwbRkBMDLMs2qRPtoEes",
  "key39": "HXM8MU6RpiNahdYCtUV9yedSVCDcuk2UF2HaQZfDusrAYZMdXkfs3cUYXeSkPyYHEYKfhku7aidNERseSQM5xQD",
  "key40": "3wqkGuBZEqybbPK9wVaQr9ba8q5WyEB7T949gDhUimXfCwTPviNMJ3fCDkEsrcV9Ys7BcuMnSDtTvqxXHMjeGriY",
  "key41": "e792qrBeEWr1jt6B1mPKdWRNqPdrfFTHiq6d9WeYD5EjvE2ZKrWYkbxiohv1YthNxztGJ3V1BDunW8NrPPm2ind",
  "key42": "qNn7GSXyBAu81FFKNLwppFE7KspxVeG7CFLFCkjkMbRXswxtMCdS1yZejayiFS7JK4sJiur1C5pxiUQqxYDdCvp",
  "key43": "2gWSCTVdruh5gMsavKWwgSGq9epGVekrdnZmmWDMiPaMNeixuudEg7YCeUHUZitEZMsXNT35QmDZ6eDkbsFNke97",
  "key44": "3GodtU1KA91Qv2RGukhaT7wePRbieuXm286giPBBmZjGTqeUSzZrX8aRdVms876XhEP9tC6cPpjJA1qhJ5Crmo4y",
  "key45": "27CPhD46BBMuC1zvvfEe1W5fEehESmzT2eVjmWppdGxKbcbaB9TtrkYbdeLphuu1e3Vd45eutojFjqAtE5bhzs9v"
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
