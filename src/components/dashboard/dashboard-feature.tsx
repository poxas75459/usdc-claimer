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
    "3R2aytnTRo82GdMS9h7CXRF8VXVKTawRFMC3jv5PxGjNBeLVgyxJrua7Qp5iyHLSQRzvW5HGHUSLbFDSnL5n4FAD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4RsrnnEDFi6qjc62TsMHQt1unZnAFqg79xyevcNYMSET53Naiy3mmNJYSc9hqpvXaH723QnQaSHjg66UG5Q8eMaS",
  "key1": "2sdH4LJ4o5Wh7DTA5ecEj3HRUSeYkaYEkQkx946TEx7cXCcfytyTsZaCBuY9Kona3bUXNKNALzikPghgei8Q7U7D",
  "key2": "knzVVQNFeZNuv6zf9T3o4eGR2H6NdWvKAnBqa2aSPiX29f5nhzvRbZjCAUztVo6VdfjpSPeuW6KwZo35wtaY5oB",
  "key3": "2xYNY1tfixfGbnNNC8fYsLoVrgrCwHYPEaWAfpGhwfSbEbFL6mNftmxS8PZFBWc5Knk9NCASxKMfEsiMYvTMow8F",
  "key4": "5vGzBqL1ZR8hMsYuCcuRkWPTcTWC5nVgYxiUUkedZUix5V8DWVNECghuLiDYimHVDFtXtRqFnscUxvcd5LptQLyv",
  "key5": "rCnxX8sNnCvfGMKaZeXrSAz3CFzgH2UdYc1VynXu7RYvmVrcEU36tUywjNK9tRRfEgjcVsT1FPirVAx54ZBVHBN",
  "key6": "4qThTcW2T9rGYQeDXZuR5zT2opELgVfXhU5fCU6gxguY5vGF5GLqEYAo5EF6xodiGEwg2nTHb7CGqhEJU96Tpa6f",
  "key7": "5rPAAzJhoki6VrHySyzLLamfR9ribTBVkxMiGJaNvEfLN1MQ4NBaTKNyvQYCSjvcySy4RH5RAzf4jgGEFTvNo5QJ",
  "key8": "4URbFd7mh7aFTBnZT5TcaWEPMvCfCdyo5rN1r4Do29v6nhd5MZHX5uuTPC6X1YGdA1NKcLoUZdyTgvvGqT4Azufh",
  "key9": "4BWCWTJc12QS2Nr3xBsuXsVh1b7v2sMav6opN4R6JycBWPwEhU2Vo6EZagteE86MQ5WnyhetKFZSzLk1BKD3CqeS",
  "key10": "5AxFcG2uVKUrZjFHeaUpEWQnzGoLUuELmFS59X8XC6kFGf9tW2PyV5o6SDjTGLfeSFEKTEZdchNCpXB9sUxKq1iz",
  "key11": "415BHVJZxnyVc3ZqBJLNscGPFv6eVWSaNNucdqMkHej2dbErg1c3ARDDfzaxeWU7c7kJ2aaJDBDyCCWGHN18dXFb",
  "key12": "2EYyCH5Fa2hkpuf55PAXXQHgjtKfJhpc9KFubWgvFxL1fHRjpZPVzmHMUH8PvygYnKYyP3J4o8D529JiASFEVAvp",
  "key13": "2ndNvmXdfivhDqDvuM7NVUMyd8dRiHDyJUcUdWxhYcYqZrjUwThXz8TMAr87ZnkaHz81yzP8UDt1dfYpU7uoZ4q9",
  "key14": "5rnA4X9LDV6F2jN3E8EATFrYgBfKamuxXwDR5rW19dkDq5pBv7JmSPvc4kAZTtB2pbNgXow2ywftTBtGLaFfqzDp",
  "key15": "2FCWdwpJtDqGJ2rzMuNhXDSdhCbQVYmhEo2vTXTkENzWWgcGhkyayfAsLxbkKHR6JEJRVrNYJrxiyq8K39hSqL74",
  "key16": "mMv1pyR6pQPZwU8yyYncxncA4RDUCwwsWqpYtKiTthszkVbQ8vZqZtCi8SvLAfCQdwJ2KeMg9eFZ6GPKTsdJf7Q",
  "key17": "4A55MUSyydYCAzmL23igc8UwRWzkS7Vypm8pcdat8HH8korVhGNri88gutJb2gYwpb1DuMVJ8ePX6j8zbEiu9SUV",
  "key18": "ydFtBNvn6wfLcpFaiX9qFX6M7Ke3UoW9CxQJjwoPNAjwqWSTKkaoVJsQY9W57kCC7WFBbJxcmG2VCsfc9FKxAbt",
  "key19": "2weH2g7DeEaRNFbSMYmCSpkDoycjnCAcv9svWCmcXZ1gzJYK8pzqVgEVNqurVMefP6RS5vMbuvp8oB3jfCmNGzdZ",
  "key20": "23afUH7YatNBmskjE1DMeRX4JC2GfsDkxW6KEzuot1RbcGxePmLeUHCg7RHCMhuq7imFWL2FpEvDMAPXxnCF2U4Y",
  "key21": "4t3LFNDL8g4Hqjxz9yVUvbPYoTK8Mwph1A6Qcnaz2DCkB8TDxjd18WXqLgsuuJN3n4Y2mXQF2fimrWP5eqQD9hmm",
  "key22": "NYYJ76rvnPM4ah6C2eHB28W1XszNXULiNA8BrehNWGRZrrxjbC7vEq1a6gLtCMFHdV4AuQNkZ1CEfCas3dGDL1w",
  "key23": "5fpTu1V6hRHwKZtkMpDyq6ARMp2SZdqdaLpqQpu6SUbvkyyLQNCjjJ9REoHj3H8aY7KSLKjWTvDqyH9KYk3Bbhbo",
  "key24": "3SSsxEbVUP1B1vq5Vs8rB5Xa7A8bAnv35VfFFUbY9RvjLZFis1SZExCSMxoD9puiSh4BdL2tcbBuCiEkjJUGBvV5",
  "key25": "5UYBUKHQBxKpwueouq82k9F493qzFGriupAiqo7H1wJqGx8CoE9c5tkzr9GShhrCVFHhM2C6fVkR8EbYwsbPaAc7",
  "key26": "5wDEQkY9Ztxew5y6FxwjkTjDr7QdNReHyAuxuMAAeEd1QqtDG689cDCdTQ2PTzPnQCfbs9LjxqHo8WtVTNgoYs2N",
  "key27": "iJRv2oFz944UTQ171EM3qtLFjWkMUaNN6nwt288Qux7EFz6setDGpbdpm7n8Nuu4jUzAPXiVZN2scfe7Ebbqpxe",
  "key28": "4WxCr4BHYwXEHtDFufQcjntpJ6mZ5BKMNymEJNs6zSzCw1feBJmQYhDTeWRM7KkvJJHUcM92FNo7YBGwzSYJoffF",
  "key29": "4HvP2jgmBj8rqD8NYHUJKJNL8jKAHUuUCi7HGudmRJndBpgqTZfE5kitWLGxv59r7zfasj6FeB4ggtT5QfFAbdV4",
  "key30": "5yG21SiApMKNpAV4QY4jHE9Ua537fAn1r1KVNykDyBazaudpFTfd8yEopB3Ufz5cGeFtgF8385BXHUccodYHRQV8",
  "key31": "67beyc2L9eJUUhyKsBhwH7ieoAgk3n5pJoCdqQ1NHVDBbu4Dc4rfbaAJCUB9kRSiWGUvWSV2GFfHwW4gCBYxxhEw",
  "key32": "5Hx7NBU9KDZkBgx1m6faPNtFe7LaWxkkyQsWvA4JGLcZ6EB27jrNy1WU5dUTKGZw6xsWGaYFU9b25sFBLYrHzEwq",
  "key33": "2hWL9Un4SU2jtQM7XVuaU3W7bay7vtVdNQ3DvLVZ2p4ABi4CYfq4esnvwZSgF5F5mcnFaWdpNiU8RoNnY1tVUWoK",
  "key34": "4qengMev1tffgmHs35MDGoNgHKTXUDthWJPAJtFr4JjnvkBsuyR61Ct955VZ86EiyEXR2am6ZAXPzNakX5FsXkt6",
  "key35": "64Kg9yE8Dwdj59BSYbABktrqDJkBtmkgPeFfeq7N27jQzrAw5ksMjrJwaSRFbDtBA6u85pgtwh8b1k71TzkAfEJ9",
  "key36": "67X3C98QibeqTLdZGBrKEqYDBzhWDfLP2HL68KYVnb8PWwmWDEx3Yn9dN8ZgKFPHTxGAiPWQQJsd2BZTDPtCFAgD",
  "key37": "5qRPs2E5B7o3QqWQ64tUX6vwLSkienCcMeryToNkBX65KNGZkGTLUfvstXS8S5pg7KvqbXDzeo43Pw9kxzYEHsHH",
  "key38": "2cYCBepi1LSmMNHLs2hHQPjkrrkwRP51fTTrKZ28xQQHog8pTgxtZQVGmHoM3E7khZPNvLSRxVGJFsyGv9ygx7Ai",
  "key39": "3Cf8HKU6QauXu2e4h5PsAqdy4sy8mvUxmB3Y64Ra8ZZWvD72YzAotZtg5noZLCYj46MFJZPqkaXg2H7r6z8dR6wQ",
  "key40": "4JeTwpXo6vjoXePgfcUL7HyRtrYHRriv34vBiW2GDdP2FQbQnrqyKyEhkmgptgQvWoLJrMaCujVhoCNW9Q9RFRwc",
  "key41": "5Dt9QK6Ntdqme1R7JNj2da3o4M6K4YZsEhzyCbPtgRvoad76C8R8jiL3jVkBpdoRoUGFw5ow7whunQfcbvYvZp62",
  "key42": "5GtvKjG63H778UAXBFtPZ2YysHaarYaa2AXFsSFCGy4o1epHWxsffm3foijQkXVFtUi3Dj5giovHhcbir7StxFd2",
  "key43": "5TihC55kDdG7wcva1mEPrcXAU6PgppziVFRbLYx1qfVF54TbQtd8doGzvgZXmfapnJrerLbQKFWMvDe2WF5UCyhu",
  "key44": "3tDHBjxyBWW6VbimCJDH61Nn3YSxNNQ7UMKv79q49TbFmVw61RzWuLmrwWGkWibAGfbdRPW7K7ySWxazonxmLuCc",
  "key45": "4jUXWSfkjdZMfEA7EMfsggcCP1fGPB75chqZzHxVsifDPTdQu93bzFQWBv8z54TaSS1ANrTCJ2NMz4HFqKiJ2P6H"
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
