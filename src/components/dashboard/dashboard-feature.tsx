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
    "5s7ffRWuxh8qbuqSQNNzrZGQPBUu83MLbrsEY5CFCQqpBACtx2E7gRCUTLxNekPXQC4CTqJuAomgd9Jm6B6NfwdW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2eqVti1Zp3CdgAAdwMdvn6LujZw6XQU87SKdyhd6BMqayj84Li4sWbo3r1xMiHSVikLJypeG1mxyuyyycim539dg",
  "key1": "4ncxW57VHfUPCf3Yav1uXWvmRJE37MKTaSXhzGcMEKTtofEehJZy54qyNDWZjpHd9a613aoAqae99kstV9bzSi3g",
  "key2": "4rXUkDkdJe2abQpuVmKdt7JgWoLKEBub9smjstUiPk5CFrrJyvz8MAM99f9fZSCYhEHh3sNj9YCDr6U5WVU1DCdP",
  "key3": "5UNZPRN63MKkNhuTfVcFR8iVgLCyAKRuyxzNtur5dpLRLfSqgBAAxv8979JH2PHcQdR672SSs3sLGr6NGqMr7Un2",
  "key4": "5NBpqXPNoBey1RHaF9diPo6HsVSkFq5BSWPXMhLvyXGB3nVdtBdW2pTRqmFZu6nMP3PgQnSY2fnt32a557BMJuMH",
  "key5": "5zFjm4dGso17o7DDzwfS2qzNs57QRhTTVcrVMQKnnc7f4AVPQCJnUaCLcGxTRej11bW3LFehtV42HHcQKok8NRgd",
  "key6": "4yYW2Nt34pA3Jy811nFD1ysgTsgzDLdAYsZpWbNrkHitugMUQmCxpLaSGeHLss5QJF75CJAkAhrMtiTKUqpHWc84",
  "key7": "4FVcXYBUZbcqZnc4qs8irmoJpfYxz2PW95g9euHP48372nhrhYyQPGjPkaKiyLqCDW3PSYVbyV6Tm97p73SsY7dR",
  "key8": "46tEMnjsYz8Xjtg5uHNmNbaCYcXjdpS95az3sYKBM9hauYeUeNAxiQXdDLhCxEsMisfY911xzLG67efPbupR8LL5",
  "key9": "4BUyzRMwmGgwvrh93XNwBMX6ZQUedu78zZfb3mutm1AqdSeznqQcMmHGidedQDsxFV6iRwsGr5Q5M7ja9HULTa4K",
  "key10": "4jmQBMGhtEnJUY8iYkfo4qLSLQBdZ9de9wAQENy7SevTKBvCYjP7m4QkgCyK37CgvmBdKA83o163YjG7P2FSJvXV",
  "key11": "44ke4mS8uNtCLm7Qf77jM76s8GQ4zUuEWmsRg45Bg8pbXuYKUnDgajrkCHzhcuJk3zqHVaGNAWwfAbru7EMmNoRr",
  "key12": "2bTvcBzWebcKDUF8BHKsXTfGnyKbdBmaCs2vzVJUMXER74dmEnzDaK5dJeYy4X8MXiFUZeegidGcmX9KLdSa2pBc",
  "key13": "3VBeBBS3SETqBYmgL67QoaFdZuqmACHxjYUGDWMqPDp6wTngvS8reca9HjdjyHVBzUJijkU6LGRNvGaBWgcUKUTM",
  "key14": "4LnWjP1eZ7XHn3QmTw1aPFVZezQYYo6q3hV8vdEkWq5D6XAGChjaqe8LPFB7YB63kD77DLYH1HaeDuQNRt6rxFL1",
  "key15": "4JFnETgVfRa3wxck9YsfKgRP49AQ6dj1BdHgkGUiKGB1puDbNq3q2NsFhhU5o5D3FuaGAWbvHTpmYmgV8BXsFgdj",
  "key16": "aQ74TBttETgjLQoa2RUQ3XvWsjSyDjKJD4SVB6V5VpwSnrfv68dmpKixoT7gKxAgpQmwLpPSGNHzf4EbcCxCLqX",
  "key17": "R9ermbzcTEDCv9sVhYiLyaWv314by1XxjsCnstFeUk6EmSGSzRR9Vestxs7uJMUAqcDBRQLvaPgm2aNSF8nMNEP",
  "key18": "fuqiokbhNbZZQgEJV7XYQBpEQyovLHmk4GMPJki3aEH9UNMiBpkfi3Px1G228Mkvde4Li9YfEkFWUmRinSKGx3T",
  "key19": "38MC5WK7TdX3xXqSy49MuCbfzuhMAtH6iVwWEyAFEUJbQbjsZBjW91xgouTfpHSCoVuchw2EqDDAP6TRxcuyBPb",
  "key20": "5mwYo8axgtRxtsb8XR5RzN58e47RRt2h9VDGvc3DFSAGaZb2bTv47goGPfzZhivKcuSCvXC6vzC3f126NKLcuqjz",
  "key21": "2wn3NW5tVpp21kxkgJvxAo93kTsNwZujwYj9gQNsF8dGMwxXEZekRZ6kwATmRomdzaXbPgRMyoX8Jg8xFiGsPWDx",
  "key22": "3vBWSkaaDKryDoSQ6bhX4pkLfPp1CZ2bqM4KXeE7EKEHaHP9FkhEBK41paVRMAi79oy6wnLqCoLMGzN3LM1RCzgF",
  "key23": "3c8vETEzf5Tr8pYC6FxKYFyRjAvQX7YkPXZJjRJuSeqAo39ecryRDcXJQ1y3PaamZSvRFNSCvqYb32dukApCSGwW",
  "key24": "5veC4kHgJyrtXFCWuWtKEUuNxDino93h2HV4A8j49PzFFC5QN2DjmxaRaS92s4mCZTqGvTcdxwtthXHx5H5iqCp2",
  "key25": "1cEqYcsxPbuSeBzFwxxsvX3Tj4VtNtNn8e1MgbGBcy6jWZUJg3yha3V2GMjrQ1dLnkAbgmYxXMsNGEFyh9hsQib",
  "key26": "4vQE6Fm8vj3PxTUnYKe6LFm9MbxF8WtjhD3sYpkxRdDC2iYWh5qJiHUWe2SpKrE5oRKQFsNmyhH5DqZeBzHdjzo9",
  "key27": "5yDzabC2HKy7pvbRyX3iPyHqGQauJHzruWL7b6LczaWQ1eAj7tv7SAyka1ciu73oeqK5b3gEMTZpg4zHX3KCDdE4",
  "key28": "S8XpMvZdeYe34ENnYaasNPBciUDfAPXPWhBhjvBZaJKg8gM71BTsFrFcjGuS9Y1jukybQjhHemGkY2dUDcKvtBD"
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
