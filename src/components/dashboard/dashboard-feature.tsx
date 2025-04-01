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
    "FtuermSdeKjQGqKnYzvoudDnFkj7NYgey3DtEUwTZiq67j4Qc14H2LJU8VZHSuSpyGLTNEZzeqGNanwK3oij1yo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5FHyqHt6WviyipCKF7xTNo1HQzSXcEg8zXQaTGNaV9gGciKbJU4PwxTJdPVFELzbFvEuZxGwHAgjfVAa5AtC4WJq",
  "key1": "4Cccd1d4qU4myNW5d9ahLJSsetEcQJn9N7Apj5aAkVZnTPG14yat39RJcNdc6gzenrnYRUETYBDNh8aPZvcfFzPX",
  "key2": "2m9QRzvZzqaL79xTTLUXEC7c5ZNYgfFiS98s4M8zrYcnFU65eqiEaezh924x9SuCSXw3G48Y646P6RfLLfEyHCoF",
  "key3": "5GpVPGPW9uLdYZcgKRKxWPMa8P53WW59EfMkUx6PYEtaZ4SyK58Ub2p8mL55EjsMp9E3PC1XFMEoVQ2eKV56RHg3",
  "key4": "3ykwPMftSNcVPwuSkwc44t9cnqT41LNwAhj9nuZLJ7vcLdyGD4a3Hp3Yymk7gf5FiqZQUfKriRRRSxk93MUmY3d",
  "key5": "AFjXr1shozMb3yc4Wr3NNLGu25s4aJNbV1msi8PsJDHNmCqDrfXp2Q6AHt8RTx3K7k7pHgHGFcz9TFpb1zqRBKw",
  "key6": "5MV6bXCnJcUP7cU3t3dAYhM2ooF2Jfxdemjrq54PYE2LTBgW6gL96eeZgxZUG47VaQ7UJk3aTJgeQQEdp84iTuHJ",
  "key7": "3JstdZnzsVEGsPdygFk4BcqhndVACdLjJgrfLNTLuGUrS6gEdgUxUcCoboPSJBTPzqa3BPwt2qhwFE8AdBZtpSkr",
  "key8": "4oVvgQKMUAuLKAUFcDW2phJpzXSqpZJWv4xs9Akrh7QGgzYvsk2po2DUaLcaNwLZLKZ3V31GkR4Mh7uRoQ3zMKhM",
  "key9": "4Nawi48Ai5Bf4R6thXGxbtBDnSUF1XtEaTmnpxeiNCUPuDE1bEjvFn4q9WD5q1CDtbu89qfkksnFyugYoA5tq8Tp",
  "key10": "3weUTrfJMSkzBYFLSqsyimF4PvM5WiZgcC2UZauDYJhKVmTHHdGCKMhv1aZHaZMv5stFpkjzS9rPBagfoe66n941",
  "key11": "2fhCMpWAyFMR5DLENtdpZZz9N7vovhcpTSfgoXZjyXjxLQjeD1T7msyHwjsNCN5TQy9DBANvQMjB9oT8kAUFUZw3",
  "key12": "4g7sdMTZr3Wu87rg7dPJCbU7RRjszbcTTQdqYP1nGCfuRyGkAecX8CpEqomhS4JznJuwFwyzbjH9dD1JL2fmxCKL",
  "key13": "332em21RY4MLfzeyPjiXF7Tq1JSNjWuF6TDGTkz1UXXfbGJrAZM6K2xhqspX7HQV4PM1X3UkhjEFGNiaL97r91Jy",
  "key14": "5qq2dBy5fm7jX2H26VJ9v6ifum8B3xaaNZLmGzBw4nM3dGdtkU4DmYmbjN9MLEigYJ8ty7Qy3qsRqwKSBG6UyeY1",
  "key15": "3S3eetgMrQpV4ryLaRaYzwbX1Jinysvo8K72zfEaxMEmTrb5m4whDJdSgbFJB8h1RFbwezPiBW8bPfijxfHAeFML",
  "key16": "3nCR2Y8gMt1E41ehtCzkejLdq3nAo9jSbn8idGq124UWe8ELv4c7ZjBvugvrBPTCLJ45dt6Di3wi8EFs5VpSbnTT",
  "key17": "3wTs84C8VbcfX1dw4BeHmZyqEGJEenT2NLKmgUVEBYK1J6rREcC3ZA8PY8sZ6vYGUqjmmMQP5ZpUeYQM5TBdkJ79",
  "key18": "5mwvdJ4ziSYtRkveEHcSd6iGb3jraCfAJYb5uWRTkihQgHAUC416aVfrkTB8DHLkbABec4sP3ip62X72jiP9f5aY",
  "key19": "fXbTXZhZF6AJasxZS4w4KeaWAt49nhqiVz2LPh2cY542aaiDGpfKi8KqsbqTPDPxdhiMfChhBa8fdq6wCkbpEoP",
  "key20": "3ju8pnEBAqT17DMDuEZnjkosvBPdVYbiJZ8A4jMYRkYeRjdpNKZ69eduCkud3jH5NQ66ryK3iDeThEkWzrZdKbXo",
  "key21": "4J2d4Msheni9SGYyBBLkPhiywnMVyMnRsppYn6bVrgj6arQfp8jL8kDRnVDPfyrnm2s8zkJ3Y1PbXvfgX7d15oce",
  "key22": "Bnh9XCerBua7UvQG3GrpWzDfeC2x2ygUekMQVJSqdEUbFCFqKrzSJqx8w9qw2WsG3bidWj62nhG8cJgh6fZLT73",
  "key23": "2jPZKpFHjqFAenuUFZwk7H3SCDdC5JQwiZoTi5d2Mj3VTGmkgnmnWjE1igRQVCNMncF2MrbTQUPg7mE9QGXnqXBS",
  "key24": "3xjXhLq9qLxxZHMNv2om2qxwPNWRUsDKPXSxKSPhaJFWtCqBMyvwATNtx8sgSTSkNUNbXbeo2Z57boFULa9z3di9",
  "key25": "124bw13SZdeshPkbwHaaiGqMwhUz1CLJeJSVwoULQEiCLuaVHmNjqTNMWhWgtz1HXyWKBSVn7n6wj3Mm6hPLYv8S",
  "key26": "5PCBgXs6RAJkZ2oKs45j3eyMgJyRshhDT3iqBHKTXicoeGKhZpCCJp1QChebBoZ865tY3SYEYT252jRGx1QxW6rY",
  "key27": "5JRgtEQp4skkFYzN2qi5qWooVh9wBVyEh4ZztMe819qKPp8TSuEf7syUj8BRqm8R7qgaKxzNmqpzrBvGvbsnHxPm"
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
