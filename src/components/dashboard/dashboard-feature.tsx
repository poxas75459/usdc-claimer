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
    "4zE38sAgcroDdeM5c6gj68ceDEgK8pLw2vqeJuuak9KCnxKi3wofSeipJqUswoDVPRNo72KoU4WseptoQfBYXqDf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5BXZ6UDVWTk1ErwaHd9bnKFzKx1ej3qMc5T2Fm86Yv38qMeVW8F2TxrZbBgvBGNuwEU4BFfgsC1EWcpisS844mtf",
  "key1": "2pDaEYiLnieBcVR2NyvzgHD4Ti6v47qimmiyFFrcYS1EBMbXhKdQA91MfzZgaeeRHLUxoFwZQsDVp38pKoMwz15g",
  "key2": "62RCLYR7JjZaRsJZLUnGMNDvKRJV9edP3hZjnmPhrnZm84ugaRQb5RY5hUUPRfiuji7ZqaUKzUFB3rdzXMG1mVQA",
  "key3": "44w2W5UVUdBwfaMcmRverNBGhQaMdPSUdD1BjxiF9Kfr5LEbmuNaJPmt2mofon2pBTYVFn95SfmQRGiTWqD8QWkY",
  "key4": "KRxLtZqWgxrroTXmNNQCpuGw7TnHbUgtBSWz7KtujGxSq4s3wivbTRN3FUVvgD3rJ2S82jGBz3ZNxJwSmE11pMG",
  "key5": "2fDZPALb8uHDWwWfe7FskpZTAhVdm3rwga81rEDwNo2PQibfxiLDL5kXj8DKnPUaxG5JNXTR4SWxJsmkd6JbCFHF",
  "key6": "4qE4q4vxgotaB7VjWRY8qh6SfwLa3ZDvfyQwpViLB5JkArrAUkHoT271nLvWMgQxwAiAEAj7w35CsY1jxFkZaL3F",
  "key7": "q8JeTcQ52embNPWqCVjaqJc3wUgjSRB7cpV9J1dB2nz3eSbKi42deAjcar4XkEp2Go9j45RDWqc7NzTxw66wZSk",
  "key8": "4CKsyijqzshHodzVLNu1qyppBna9Nd1zwVaCjw7qKW42ivVs1VmvCHX5miQtjsxxucSsJ4ZDMjVV5VHx5JoPmK8a",
  "key9": "49xr72z41fjxdcZVkAuqX2JTnJDw7iJoFmaWFB6dNdPcaky55ueLjzgKGxFJuiJiiKtNR3YhrGmC1i8rJX9W5ms5",
  "key10": "3qQWThby6RZJkPYjs8uzTFKw8uNEX3jnLvJc1nWeA4BtS6LKCq4XUJokzjxcrajNd3oaU1ry7t8apZNya6B8i9b8",
  "key11": "R9RuwJKJWcYBG1PKMRqCntEjSwNTrnFhzSvXPfVA4QkRTTDfmM9rjYu4pdd4Sq7jpt8nnpmtowCCVkjhmb7fQTC",
  "key12": "4azUE5BBhuz4vSXeY7zq9C9WvNnp7oXGhAqZm93siGrGGTrS191JWjCc8u6zZk85616nd12ugPshKqULz8XUGEs8",
  "key13": "4smiaeHwTRZjd1XNJ5bXDvcSEbfweNoPHCwMkkSJ3KpJwXH3pHWBUSFiE2aaKf4vyvMeiAkXtMXg4prUYGr3AUzY",
  "key14": "3H5mwcR97dXVBoXtgMTjknh8jrEqaDHv59xHJShtxh6eYn4QsS73jzdS9EGn1Fo2uHQQ2dHQ5kWEvRCe583EtDUz",
  "key15": "5HGqmU9E96R4uMgkN74yfANxMaH1zUmY3aPoWLfLEoKa7GM1NHTeWseGmv2tRoAbozg8JVBFRZ5bQnNkZ5sNkUXq",
  "key16": "FsEZbMvev12RxouMUbTs1Zy8dCLpvXcNvE2hZMaT4BEjywzoPHURc1uC6Ps7LYo5hgse3Ar2TJ8sSjCy5AcdzyG",
  "key17": "34NL8Bi8HBp2MnbzSYF3gKeD5H7i7yYe9Ngmmps1dtFSwNXXUqGoUHtWNDkbvPShcJ1EWo1Fe6r1EM6tk4g9ehgL",
  "key18": "3sdAJMjqdZNVY7T7VcnHYGXhrYL7JJpWLX4kDkjrC2LxACryuEQgH5ZmcvRh6MV39E1ys7CPGNQyLeobC8DWaAm9",
  "key19": "3uWjFKrj1PggXmss2AjFPNXPFHaN9Qj7pHvUrZ1QXQkvdy532o2AFQQpERfZVYFk3Dzb3YCiHNdydnmAnNc9hPJ7",
  "key20": "4Qb3ftsQSD7VyX7CpeUinGiWKnousNRdR1stRPHQzmv2L18KuGbkqRL75pez48TacmFK3rMzYhPVSTTw8SKQTuTZ",
  "key21": "5qwnVVQdgqYRZx2VZKz6HBpRqBBLz8DKTZU9MdGfCbD1PmH1JEhHvASK1WoMvya6z9xXZ7bLe33UWXoCoXqAMfMp",
  "key22": "oNWZZVppRuVuDt8vSYQLMcqNfBjwGCkN42XoTi8KUraCa75PtYwFnVUogEMxWXAuguEYgdwXxX9FpZb1rRrhNN3",
  "key23": "q9BYb4yBo7zywd7k3EvdjAMsRY6BfqP9vXquoLUC7mMuDpob7e9asDfWHeZ2UJhxpZN5cLzWNes1CJbw3gnNQST",
  "key24": "5RhcrASZ4HgH43ufUW6WPuvisdc58U2yALSjXL3Q6hVZxHyc8KnQecDz68VXUHGvZrG47vUjQfSx3nzENpuL7SUA",
  "key25": "3Pe4wUt1nFMVfP4S9VwZd2zbgrFnyq5f3ToJJbmwxwigPxvKkWfoaUxkoZaVejBF2BNKa9iRR8mF2G6pCbMGed14",
  "key26": "BWdCqnfLetaB5ozw6mgrC2DTEzsEPSLVEk4sMonjVBVA7xxNf4sajZdACEGRWUrzpr2rXk76aZNUmuXDQNFTdcp",
  "key27": "jfK6q6GhLdnZcLLXPP6JtmMewdK6mvXk6hGHVePUfcfrQXMxuHoCB7xoRGqCK3jxGAiefAd3KQnmEnfpH2ogtey",
  "key28": "kqkKfPRfBAbfRxTWr8WwaCiGKphBepZeGPnc4tHShDqNqcHkK6GaKrXLnaYrrC7JAhoKcNRAAbWbnh9HMBQ7NfW",
  "key29": "5TrHkW7rvGKcH488L64ED7L23MUUsMaUoccFuZQ5DsEWJHMD8ePkhWpk2R8v6RCZ9iJw3gbPKYwkBwYU6CYCbKUR",
  "key30": "3VUJH8391Va3hfYg9deJGsTJj9pqjc6gk6Zj7JYgkZTHw9JSbxoyvu2wYPV7dBfo9DzmZP1sGN6zy9MUFzztjKnj",
  "key31": "5hAByXE8PU2Sw3STBf54bEkDqmDQ4qhGcCqjniea6NkikG2YRWEyawQKH2WNmjpNznExvp4H24TJPcu2btcwLaX7",
  "key32": "sPJaY9LgVLmQkPhsBMKVmTmRYuf2seC4DXjQXjDiDu5vybpWfVNCCn9s2aDhic9br8ytyqVrzBpHd7pGnYC1m3B",
  "key33": "dY1nNsCYkmySTRzLmyt9391VcEK28B1La4DZ5dNZScuWsSCMb1FbeNmhVGxcTucyEwBwVyBjnrCR6i3tCxx1LB5"
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
