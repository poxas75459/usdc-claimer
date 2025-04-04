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
    "2PxkRRzk819fhxzQ5PvyrDiNzMQxVwgutvrf7pKLSXs3yUpfd7UJt63NfEF39uRBuTjknEwhjYxcuXPUBFq18tTx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5jAAXMNqF8LAiqE4faemKuBqjB5tcbCxZvmg5awPWg9TtWwVnScHXxkGzkLA3XDrs867vKTJvBnu1d7Jv4Uhmmns",
  "key1": "23BkNqHSWRZYDAj5VopJShEsgSWGtoYAT3mJ5QWjcGN9MkaFwL2LrdRky6ZvVCGBG5s9jfqcQbRBg51kKRcsGBEq",
  "key2": "2DngxTvVgEgFCL5wtCt4UZUsNLDfLSyHyhXRDNC6dXyfTh1qVPavCUT6E3PDCe2326q2LHWsJ2Ate3Zy9aroaTPT",
  "key3": "5dwTacMvrKKdpfXNrrCUoAWHV2NQfMA2jThBHMWbjRawPiH82SVXTY34vFpw4KgLfsucZxpRijxyuWywsg8P7rx2",
  "key4": "619vrBKkY7PuyQVC4gyutYbbxHEoKhb7q7oMgujS5mtFyB1871wERVgbkdsi5cbfRAxBfujmLqi8wtJ4cDRwnmTe",
  "key5": "4Sc3U6tVhvwsv19YiFpanA9YJipP4R7TSurABC8epkpjGnjY3MAigZa6tb4hqNXmQDNdoS16bvb48FEzs55EVQLF",
  "key6": "3ACfZy283wTVu3BpqAiCE61EtYVHMqrxi6gJTmPX5hizSU8ZAwe1BVuP1bn7TqVKJxYFzg66vejrdv6k761rp3L",
  "key7": "2aqRvw1dp5mJkFeZYrNoMnfd6g6Yvz9fZEcrq7TDXz6hymvhbwPpsMWUvkiVLN3ZDLoxAMKR26sPXSCm1fZhSBT9",
  "key8": "4exbrY1yoZAfS2RMAjWsvWSr2Zwg7HvBUeNCmr8p7xJ9hympiemtHQ8seFVSZ2KT8mw3yDwUwvavg5dFa5ojgSzr",
  "key9": "9qGiP9ayUjGvT4X2McvM85YYdS4Yv496pmE9caDS79kyaTSvTwSxp1tX1Hcz3SFcuguYxt2xVCdEhJnT5mxmtqm",
  "key10": "7ZCaSVhsFSien4bK5RpWxXoV7ZsSopuf2qQaphHLg6kpmJxdm9gyn5mNDHg9qSjBARyCATcgVuiabzreHBWUrKq",
  "key11": "3RQTLaDHq1qGTHSYrfguUV5bn7R9Gt8ffKWCQXzuJQH8UbtrqoDurds1bVrKosw9uGZfErn1B6X5T2jPQQNjACL6",
  "key12": "5amH2fK6AsG9kNvf4jsbETAKnwGT82YBP74XkAjhSj5u5Gd5Te7C2tSC2shMLDMtUyS8f9phLxY3C1FjLBLxe5d",
  "key13": "56m2e87YinfnSV9mdrkDYUYjBkria22PHvUuuxKYG68SwdtRnrtawaWzRSv9dAv7Y6nsER5cAZCoWKk6wuSvJE7F",
  "key14": "351saT4fmwjbzLrSsco6eCf4DLgXCTmahYg7d8f7QuK85NWyZ1nRjfvSDSD9MbgrSZPdsNajfmF9fNvvMQ5jXBF8",
  "key15": "4yiqiJd6kybHv3fyWEV6LMHSaqtTdxaVQAHTNF5rywV1Z5o1SuX5pWfEgpixbSBBYvdCUrJtyTJwQBAgJmghu7a3",
  "key16": "5icDa8PAnoy9X9VyuY3BGczYdexNqEfSrgdmjzU9UC582unth3kvUG1XsukB3K64EUwMC7x7pvH5MwTTUvJ89opm",
  "key17": "4y2wGtqCUjSqELjy6N1zeRM3JX2V5TFBgHB9jN5Xqj3K1nS1qomWZzzeQZLMrKzSmc9F4gKryogYU4zcm4G2pWeh",
  "key18": "4hD1GKBadLBDVH9Fd2trYapb8EQrFuTmqKNXTuPyPau1nyjnGrqk5Ws8TRc9g48mAfNiNENhESeMW7BdJowLQwZf",
  "key19": "NTQhuN6CvnsFDZS2zi4EcAUckgZ6Mw72L2hkaivTdQ7LjwgCB1Qp83trbwSnMrm5BWofrNHaGd9gfMimaiRArnS",
  "key20": "5y8EoMx65b9oWiNWk4bny9DTVYN3q5CxNwQw5dZAw1pePvBFacY9S6u3wN3XU7VxhkqMT8BhXyqDFRUwUSDTfBvi",
  "key21": "2qNNxQNZdUc4Ge6zVpM7nuMLrb6zSZVf3yrTcF924gDjabqY74DRVDdF2s1RPp7eyqCCSd8QoqAxyoWDfDynkHcZ",
  "key22": "2qDkvnkZy5pThvDw6Psq426y4CbCdpCk8frwRjc4YXmwr8DKYXTeVcSy71VMb4fqfLmLZ2XqFmMFWU2dEoq27Ldy",
  "key23": "4T31iFaz52FGBufwg1tJHpgW7ET1oKuG9McyabYUKvq99EyaF3963zDi5gLgRYAfyWM1rt21rtm2EhYmBzuqHWD",
  "key24": "3u2iEXFPsk7tiHCzF6NB3rviv2i9jpStLCT4JkbdAdz7Nb3GRbyw8HJRPiN1q9mA22nVFtTtP2huSqNtTDNS8hrg",
  "key25": "25XDry3tgcddbobYEQbw9YmBNwLrwhWcoSTiAGBV2TSXrqGNkJaWU5VWQADU5UvXdfjUtFYT9816rCmGoZ6gMEKV",
  "key26": "4HWnJNz45DknMgaJ362VCEiZmPvDsMAXTg1uikCWV3CJ9ufgjMmKVqSULSsZFHzAdEDqBbh8R56d3sp2A4XSVwWN",
  "key27": "2SdKKB8YcwCay2sHTxRrhXGiqkH3hHh22VpKbwgMD6xwhbgB25YgcEeVbsJ8ybQzCXdTQUZoVvaU1j7CtWvQJK9W",
  "key28": "5kP3mVt8iXvazYfeuqkeHdt7N4JoZM6PF9p85hxV8cykJfa26hTVJeCU8dgNqduYgGWLAKKD5ScM3XtbJEEgLp53",
  "key29": "xY5LXZhS1EHTsqgWCfBuumkqkpK7jix4q8KdtqiiG3CYu1mhESiDRrq7MNms1DUQBBPkmuL6mHXeA6FtMQQXR31",
  "key30": "3RhBrDWsbnh4inchEN3tgGbjSukcVZzTMXoJHyNHUPLMaB4KWzEktec8Yz4n9kWojQY3vgny84m6hfoM6SwdU3Ax",
  "key31": "5P1KiYqEg3cySBL8KkCMvxh5FWiSMxq3MDKQx7GvKoR3zc8FN2ZUfsGxYkSA1wp4n9YxH34fq1PPq9jFfBmjtyPJ",
  "key32": "4UsKmt1HorGkmvnx8NmnvfPfoBeLQpYN7VzmwquMLeWkJWHiv9J8VSNNrDi1erVm5vvpf3LBHQkjcLpZLCdGefAa",
  "key33": "5jAqewqhLWMcLXZtGtXitNPcXBXp2DeZf1oSgQH8KCUAfSNC2a1Vdz7mGK1f2h8MQw8Mq5JUcpogFCtmyq7cpnMk",
  "key34": "sxwFpUWoeSe8rbHjcqavGNsfczQcWTn3znGhqKSZNgUw2F9jrTMAS6VPashmS3RfXBErFi6mvXCRQnXcFgPTX2D",
  "key35": "VztFkTnVhLuAEVWbCVyAjB2kRHpr3uVVng8LdiXb41haryGibNUqp3MTKNAAwrcePBaZyWu1jNWcNXQxVJ3B7zv",
  "key36": "4nf6wtirSv1mQwxbJSFj9JeKMdXutiLJGjEV9kxRUd9qznzC3LLnSN8qisp48jYSLMru5Y58BNRrynaFJ7Y3WMfj",
  "key37": "4VygWB3jGCm5dymRn9dR9NGwnfLU9XwMKGTZs3DQaphbYsjdXRbrvBKnmhLtPTg1WJrrZDLWyJBV48X9MXud5rqY",
  "key38": "iPd2bSsm9dufmNhE2V41bKHvkCL7HP1LEkB2DLKCZPimjNm61j8vRWbboVpxBUJP2fWnUaoa3k3DrL4N6c9CR3j",
  "key39": "pUJenNyVvHdXoFDM9Kn6aRLwkCUkPRAoRiY1gQW2kUCMsEqWPJ6Ne97nhA2Hk3UHi8GJEaYrmsgx3RtRg2hz8QR",
  "key40": "2Ag6c8kz564M6UdH9hpzWcVz7MeH21riHdYdNMvMgdrcadEwYeqnezJ7MTvQVtvkMt4viZZuZmBvVuM3S5NvdwEo",
  "key41": "36xdcAkt5M8QunNfTkTzcpvJcCyxipMPWGkDHwXkMooop6sMq7N921AiMefYfqSyWhTU2qvKemuCTHL9MFN7UBQk",
  "key42": "32DWjVvVxHMbavbuPgKiW5Hh1HWSa33PGLQmKiAutmq3sjdUzSpB5Ny1w3TevgQXNvtE4UVt1T2d7sLhrAhGrX85"
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
