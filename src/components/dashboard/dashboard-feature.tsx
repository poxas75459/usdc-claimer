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
    "DuGuH3VoLtyn1JR6TCRP9fhGAfW9MYePtFJx66A84oW14Ty2TGaQkdxMJHEFTa4FYnuERe1P6bKLzq5GTckgXTw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36tSKz6YWBiGdvvR6CtdYhAb3AFbx1K2fETGyH4MNpEGzbQwxpEeQ6p3qDM7sEitV5ha1VAdjR22puiWWakVqmqT",
  "key1": "4k18mrVejpvqoJHTMQJbdcL31CiB6GRNniLDpmpDM4sDNsaeiMhH2zJKRycT4GnR3t8TPMyeF3igUs1yzpM8EKih",
  "key2": "4UuksFYPa4GPVrn2Dvb7tQCfXoHHFmj29m3kztFpTVW5j5uSFz7zEf4T51PR7aRqrNLBMx86kKrdKCbsrMm7mURT",
  "key3": "2UZujgv3MUuChThUjeJ8szVJtGReLYt7WdAARQVkHdHsZtJe9T8JRGza3ERCT5WrSYLDgKBYxNKPN4UQHSGuzN1F",
  "key4": "3LLXYTHHiF3P1KZGLveUNDvbER5JmzB9vzirjPnWEovNNY4xqvKRht7wh47T1SEcuWtPacw9wqpGcRvNv7eRENbZ",
  "key5": "5q7Ek55G2MJYzQYen6VP8YpDbnJkEmbGCN4arAfKZtjE73cqBc3xS4pvWv4sJ8SRsWeB5Ax3MymBJnTUwDH1NUjB",
  "key6": "3MYDtaTp48kD1nU1zUZJz8kpKPGhrcFLbEkwp7dXrQvk3ugV3b2yhkBWD57vX5oH8p6Sabm2vKJAgZugcWchZQD2",
  "key7": "2dFJL2UKxsbMaHPGkMMiwfk7U7xac3o5TbBeZtMmTgRAmFtsnkad6e7BtLiGnSuZkRDAja9DhRT55LDpJdtahngD",
  "key8": "2pe8Dcoy8fmUGFn91zHhFkZYuaFTqVZ7bhCVqKvoZYr55aojX6E6z3trzHgqQAxZuTrUwJc3QJriW3nwvdvfAczg",
  "key9": "4ugC5Dfsbfe6Ri988n59Nm5NtDuvq8ndZyNG4A5fSxH24fFoE6ErZJU8hnittsCo9567Y98sH7tyrALSK8SWRSGp",
  "key10": "2LKtq9MGacya3VMkg2dVch5jqqBwM8z4qYrm4Gsu6ZUovTErbXHufDXNJZizuCBhjMFmDYQ2R9eCP2E7g5H9nsqT",
  "key11": "2G5mwGdbVs8hSNdZKNqnFZzvNC2ocWg1tVxzQmRJXDMb2AHZH7q7hVkzi2WP316LbCTM2hrwb5k8AdkXWWhBxLzy",
  "key12": "5GpgjaKniA84VX6J5ggh5fXH5BZdvAV5gqpapL5v9aihEp5khrTseWZwC8roNPCtqpqt5KXoP1EQgmzMt1gXKdV6",
  "key13": "2ro4ASWp5tsY4nZ6vkVPA2rcGyFkTQyX2rW55itxEFWGMaQo1ibp3tc78a599gZYCuz2EE9dy4nUXhggfqWhh9UL",
  "key14": "59b7b4Dn4SqDCd8nrpa82z4u7Ji8KjmSfRReyq9AaLGv8csmb1xBRhQTDF3qyPj5DzgFSNCrzGyHSQQr4qEvrv72",
  "key15": "5VgMuLV5kBJRucyNzPhVVKAX8FVpLnTuXntsfSJuAq6V69rsKG6ESVSwBYZupGxhG3XHA8xAMp4aoSzVkiQxt3Mm",
  "key16": "2M74Tgj5NmqrCd2VSXvaHZY33Nn8N3qiK1nJ6p2uToZL43fFuKvHCEMypxB9MZiFP7J6bhiMCB5F6ubhKkDXL2x2",
  "key17": "5ARoZo2XkfG8sBDaYb64j2JPzYShrreehjzmNMM5ND4Vn4DcBTscB7hxP1vTauF675yj3dhvy9Mu8Ne48ynuh54f",
  "key18": "wNBTQEW8zqpdTg6PYVcyGR4ENVqaEJPcJYeCdTrVC1EwU7qSzfYvR8D2kzDfADRPeBG4QxA3Pf5JDXtWmjyNxor",
  "key19": "4gMzYnPNrEShmvfyRiaAVaQf5fmbCL9haRpti5M2svf8FZpbD9v9Z5sjxdcXQ79mrzquwuyqbz5eu2FEiCGrauxn",
  "key20": "5m577UxU8mwYRP2qixDxMefP33jDdgb6kgzi5ZYWpc3LVQAUy9W1vS2zoAEqZ4Y5nLjWHeMZRPSShKPjmsjyHdbr",
  "key21": "23Z6m7T1ZBmm5xxBZGrRTAVMfvqoZnB3y5i9gAw8H6avk9iQtjPU4mrUQxNGmdRnsUohPdB5HA8QuqTUv37ry4xn",
  "key22": "566ypmy9n1s9jzHn66BZQCssZiAc2SjSmBf1nHveF7dJBnZHSPfeSo66LLk8KEoZ6rajHm7WogxqPvTZAEAJ1414",
  "key23": "24W2FaMndEMH48eWjv9864MMn79yCSLGWRUwKfyRSk84rUFsUbGGygM7Nx63taAztP7KYG63pJ7sVzdHesacMpaw",
  "key24": "5cmoG9oECvrmq5Vp1qK39CkTAxyGGNWcYPYUC8c1xqh85bNc2nJqgV79xgzJbRCvDA1fj2cgpQQzBu52P3JKnnuo",
  "key25": "Kb3dxHC4eYXqx4HrMfaw7ZneRCkEG8UgaR1MYwY7Y12Ln44usgYKgFDXkX7ajepnaKy5TqY6zMmPPPTMnw1h2LU",
  "key26": "4Ayq3em795Sc9ztE2t1sLVocHG1PJYNWDNUvt5DDJrHuxsb5qBGwroBPQ8ggoEpYQFVF1eZvpwC5NAZPvmwLbUcW",
  "key27": "2QRNJfVG5rDQrpNfTJpshmo4gnxpmN682DNjsVYjLXfW92CpkRkXTvhN7scWabTvYowaDC5jY2Bmsee9SePYHYXL",
  "key28": "4ytPVtgViAubUJmftJnvRBiFcsnJfXtv8bunThmRBTrfhvW91mEyxfewCn2bpduvfVZ75w9Q1RXdUHzVQqgRUtnr"
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
