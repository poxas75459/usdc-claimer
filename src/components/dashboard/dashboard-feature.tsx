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
    "2KiLG7u7B5fjHm2C5btnYJQiPw83kmbeiN1FozXtaZcoGnrh169RMsbMPu9fuvpN1sRyp2tJ2Cg3QUbyjeBUTjKy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5dL96GzT3cVf3XcWmUwdm7hgUz7MZ1gEDTBY8ohT4K1AV2dkVvj6Xij5YiyAV8qP7pcTcagcT5HjZGFHk6BCB2hM",
  "key1": "5ZCMbB5rfehzGMYbPV2UJgGtAjvmFwTZoipf7Ry718eVQGvQE6RePSYYc9MiG9kYj1jbhWiX6PAWppUirx63wUtV",
  "key2": "5jtMws35BQCxneAa2agMDXV3D5jgJaBPfVaJvmRF65vA4vjzPTcq3xvcu5sZjbk6er7jDEfSXXnfE6Cjg6Xi34CH",
  "key3": "2sNvYG2hBtibUttn8CAH4tkRJrfuW2SqYEEcbeV88rhU6wiFumyxirYrfx9Q1c8MRmdtM7RP9adrZ3M5jHAGb5X2",
  "key4": "5tRsc3eFPvWXxFGUifWKdtrknrkJgnpSsTDtQoZZu67YJTBSMpZ6SfMjjXB1fAL1G4gmDQcvDeQnr5CYWcKFKMRa",
  "key5": "5sMVxbMFJwGkzwMFCuQpZi6dfinR6e87k2DPg4rxNAF2QBMQDeVV6X3p9C1AacoWtbB4j7dneyNLuy1J5kbAhKzr",
  "key6": "3zdLCKYHKgJFjqyqeecy5gz79A6KASbQqqZEUZk5sA9bP34YfNKvdEko3Mhoa5sCFgQiwiGHf9FeDeKQFYh9D7Jb",
  "key7": "4WyXby8YvNBbZNL8HFGH9EqhDGqQwJB8V1UUMbEKPdn21jXrVa7oLPoHQAv5He9WujSgg71sSgLoJcv4RFph7Cw9",
  "key8": "34yB9dT5XbqSLTnNjMjgCZv5FhQDYnceySPfo7VKqyJNjLDr8wdeFFkoSB1tDpwKVJZvcHGPtmnD4V9anqfCTjzJ",
  "key9": "2iKmQHgAcMpmGoDK6aiR6j6C9E3dbF3baMHHsdRc1LWZpGNeBJzCsCFX272kpTUmHagTNqF4FxWVRtd7FriU9E7W",
  "key10": "2rxxPtiseoYPenn7LuNN4a3bmZ57Z9m5nR36d4SU11B99bbYQpZL9qMh1we4tC47uww1QHJ73yULyzrsq1dj9kj4",
  "key11": "3M59Mrmqb168hxF2MV3JTd2a4MzW2CsqQsttjHYmF6FSK1pCQyUXkzCp1utKX6C7bHGRZZqGqpvxD6rrxkC84CNz",
  "key12": "3YzxGynzyAK7vrsYM8N2wr6dqsneLieyhwGrtrbPjYX6avUmen4hB5CiwDSFNJv66CeTDDbXytYdC58WhbVbhKJM",
  "key13": "2nLZW6tadVCcMD61CLGQpyUXrZwNFjbovbdos48Tj6U57w4pCdv32f1BnkM1n1qHWzUY3QGAQ6PjJsR9RKqrVgzm",
  "key14": "3T2N5sey8NoXu7Hs2VJ29nEsh8NReAscgwp2HUHhkRi4iuzyp1FY8BgCpTgaGZbrCPqPV2uueY3nmATPkWAfAY9J",
  "key15": "4adKN9WEReKtPD5rnEYAuyNppe5aje2USGCGhRDynrK9kxtbAHc7TqK7d1WpruhMxhrkWjzHyUK1EYhtberkUozA",
  "key16": "3jEdDAqdmoXtREWTrpZGBLuQnxY6aNnE6MAHsisvdrtymfCKU72MLaA3ZZorPNAJHTky3UdSq8LeJnLMxcHQivww",
  "key17": "Xy2phQp6K2Ft5RVyigyRbTX62PcgDhEMFv38wV64BFDfvafYz2aTqqu3WtzH4CGJhd4k4ixgbuEQ6vEFNepWdSn",
  "key18": "BrjK9HzgLqd2VcFDBmH3QouWUbDsiEzM33XXnkR2u1bgRVoBqXRSStYhgvLpt1d7maKpZEJivSVNfT9wUufH6qe",
  "key19": "5qB8kow3mBDCcNWDmnx5qUEBfkxiSWoAzDHnvcbNwg5fUobbDbSH5iA9E8hVWtThrxqJNRKfks4JdoaK2RDrdMNC",
  "key20": "Dk2JikeqqYqwgodB4EXSwYHUfxvCDVoTz7AQMTLmDY2xzNwYuANLL422Nh36aWu6L1XphuNESzNA9Bn1TUTHSQv",
  "key21": "5ZNfaCVKTrobtkUN5quPBgefY19k5K27JYudmjxYb46mjUGfByMpma4Zo8iEH3cQ9kiKEzztA2xjwv5A39MLBGgH",
  "key22": "4FoJs15w2FNGobUb1cg5Y4k79PTPGHDEQK8Ut32K5SkgkAaPf6WgrCr14tto6a5RC2ts1iBJsao3X1fj6x8kBreC",
  "key23": "21whyw3wS51Gby8hQACt9ZNAqtgD5PxtvkmWXrzhqkUjEXwPSy2opkfJQKkWAmQBBmwfwsxQWWLTmeRRRKBoLnhD",
  "key24": "5tB4kEx6PXZLXixgrx8uwXTt8NSBJSBq9mcahszyjWreWMU1i8KSxvdMyM6sJkgBSTRHxVZe53HsrcKtX6NNRWRm",
  "key25": "J9pwYEn1aXLcwv1a1cGb12tfKFXQK9CmEyW5RDrnhrXJTRwgcCK5jJJy6dUuuqaV5eZQFcouXteMPNpGnjWg91J",
  "key26": "R6BkZFLmFkFy9b2YgrBuPyuaFLFphxVUhd1vAbrzXjXRrFsD7igVtc71qjsLrED8t998oKuuUZdPMo5d3DeiFVB",
  "key27": "56j1Ya6dUR7MJxCFYHyWBy5QGZjiGt6DyhhTZpigKEScHsHzwTMVLCxDKGutRB8m3kCtAdanREaQXQ9EqhjpQ3ka",
  "key28": "53f2UBA1WwC6DNgLJb3RuP7bc6WJ7xx35kqFf5PouG5cHbcbHK2Rrzc6mBojdvCZB7jsWxnFGG8md3NNF1H7Hn18",
  "key29": "h8AG2jRjDqKP3QfpNzP55LtNrYdgA4rtQtSgzJSTWzUaC8vqa2vz8aGYaKAZv8LAUcWSJrh3rG884ayj9XjpecZ",
  "key30": "atrnGhx6TfBVvANv8fT6ihJeCHzazwxibhEtCfnQtjNxi4NLqbPagnXn1Wyi63Feg5NBRU7cbiPHHzXC5wr5rL6",
  "key31": "tAKMvaK9LUQFVxpRwcTgvHUxBGY5pFRne7fSqQSiHwEdUU2eKU9ZtzNjy3pWeoAgQGNFmJKJYQsrKipdVtqh2Tt",
  "key32": "5ajjyhF3n9ErYb3feQLUq9Cw2o3QSz6mv2pGyeQchxfgJLkcfRXdM9a4ScsRFrB2WG8LCo7npdziuDxGFU7N7hHh",
  "key33": "4xnicjr5MUs6UkPfNhCtMFjfm3NrUVPTcpuC1ojGNe5pXNwXBNBkKbfnBxsu4k5pqTiWj6YUMg5MQ2dzviBKoZub",
  "key34": "53JsgyvSDVi8B5LUgV18rmKzUE5BgeSuVeidnj3UEwofCD25UrvfJYEjcucTdP4ityeM6HxaJ1v9VHR9UodBsAv3",
  "key35": "rM2EASGvkNzMk6XktPNwVtEAcnUTm1Fm62fVPgDMVhAq8xRJDdDFMTqPAMBRpLyCK2qxGmweeLtpWSifuyk1P6m",
  "key36": "JhfCtVUkQzbSwhV3fsoM5yLMJbTU7WyvkAP58VXJhEKAX83R1mfyF6VRgHRnfP8Yps8Y5CuXcP6QDFBmhvJpPwQ",
  "key37": "4UqJJupm2TDNmxNR1hP61po7m89pWkjvQNp51UmMNaKxGDcaLzLs3s6cTcaqoHbn46FYZyNE3yTAAQLctFzqXTxF",
  "key38": "5KjGBf3sqDSeZAP7Cjif2iTxPtPcAVWGm5ovBeZ5EL2qWVdQQvvW4NKinMF132tHuWFWGDu8rM37QEsLh5YrEwrk",
  "key39": "n6mNHDczQEp7VttKo1g17DbjqZ51cxyjEK9s6dRfRboMj3ZGU4DQrwDRNwjWqyVgS6CncR7B1AFry9smZuRzzQt",
  "key40": "5bTrd3zpnr1ZXGh8fJwk9VU73tLs97FuzJ9SyxhJigGqoSQU6q3kS9SVcvSE74hF9NCLrMzY6PyB3ijh1VjJnvDT",
  "key41": "2TPyhR2qbmvKAKT6eKvHVH9hfVWWEX6R2ZWUSkL7Ry9WT6JG8kpKe3sYsjLkxMtSgoRGuoX5N95Anfn7DPjedpS8",
  "key42": "4D6o22WMnRfGpHo9idschyf9ruP7dhwVMPVSXjhNwkbNsdp34MXT5wiu4PtbJ2hE6K2PhFCB2zjG7Rfhytqxo56z",
  "key43": "3pDEadnNi3Y7CAbdf9SXSZ2qwPDMHpZjPesxBFkF33XFde8Mb8KZ5KdWNmgJMcjkuPq3bcHiKEkSJNFwM54pYvNV",
  "key44": "3T2xC8mjeRAVKFZioNCT34Ly7mQuYxUrw7rqMN7kJHYk2fTyy3SYRZk6H1CYnYKGJABHhbYHPqFscmr9Qdu5ngvw"
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
