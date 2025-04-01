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
    "4znC4yznYKXAV9Tbr3m1YnMbWZAgX9SjET7DXDhwj5VJ2SvExE1juMaS9cK9e8Bahop31jYvgx419qgPLNTBhyUF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "39wqkpUeCk6UaVZiKkRNfGWovBHXynFe35gpRQnh5dF1N3s8bd5HGHmDta3YJ1nScTUUCZVy5DceGdqoqugsN87x",
  "key1": "3jmZnSMKs5e2hvVAUH82BjMgLBF1fWQACqfJ3Uc3zpZCia9oWmuwrkA1Ct5hZ8qJ65VGySE7RDpRsbBQvB39tKMv",
  "key2": "mrxsYnsPpGTynNXoFzWRgNep7KqcdrfBe6v63zKaNQMpvDALZSvWXeHpnGBnBgvbmP7vZbkPpq2jmuaDLLxfUJa",
  "key3": "5JmedxVmarDUk3WoqpgW7WYMJHwMphNsqnrKkyL36iuYnR9UV3PkwD14gBTrPucRDDFuubYUmKj391eGvFJTV3aK",
  "key4": "4MkkjKYSMuuSKQsqawtgWYGTJ7a8E7TigyrE4cH11XbYkFMTQhMAi8ueUNu3oPowpwnmNmnSHW1KyNcEMQ8iChuf",
  "key5": "2zU6tKW6UK11rDKRGBL6wvB12HuBNPCnoWLHDpa1vLjYmhDKA7ASEvMsjQGbAjvx52f5aGsAtdm8qgXVAUB2XKE2",
  "key6": "3pftk5eNk1NNZvqRtQFX4vj5gTcqHTmyZmL7cUWnnACUMax83iW9tCEMavvwvzJtgmSKKEsPpYuXoGoL53zstoi3",
  "key7": "24dTEWgbRjiVYBo6RwDJe9bxELVEM1eYwQNSC8jJSuKXRaXUnmjNMBq7Sn5GFo8qsGJZSFbEBpAcJfYstP4WuqSe",
  "key8": "3cgjJ5TYtuyLfQsw4JoLp1qf6UAxmB96tYqx6qHKLKom3ZZUtJckD6ZGTbtrvom73XnSS4Qr6ZLCSW8itMFsq4bi",
  "key9": "LTzvrLSQCgcDiqwsSoZ3a32SxsJe1rzL9q6GuKSBpMXz2eDUBhS5sF7crYL2cWuU9JQ5YvN3NtxVmSKcdM1rNnV",
  "key10": "38YL4qfEbNkC8CwGVFYKQj5n28Q5UJGDaeMe2zJmWiTZuURYqVPEWUnwVkqGX9RKpy1T3uY2LRyWKHRwz3wbM6y9",
  "key11": "4K7HcKizvZQDPHVRye6DyHiKMjN62Ek72754ubKkmuL3FM2dHQzy6hWFnawbWNnrenCWwfixsGXhPQeQJHkLMTfm",
  "key12": "2yg6JZtxp7TVQLhE1nPwQKvg3fnAmTG9Q4Lo8RQWiPeS6KLaJSV2aEx9QtQNRRbpU74537K5etFwsHjqQN5uzKJX",
  "key13": "5vJBpMzdd5V7LeMmYkFbRmjtP2oMMbkt6pYcnEH2VJibG6uNdkQhqsvwVXpPw8ehYsqdzpaBJyiGCyiaF4bkKDDY",
  "key14": "4thQsRBVm1FvAaDnJiH27MGiVyBjpj1vcsmhXspswKNW9dHPNYP8J3D5xWXk94J5tG9hfGoWcrVKEu5RGCUGPZtQ",
  "key15": "5miLkuuPDmynRTqAyM9vAaPzCRJqm3q6GoKp7giV6KUXZjxpUEmsYi4mEzrEhRLrqHF9PAMgbyeDXMJBYng11vsb",
  "key16": "4UdMbPd6WRGKJnTBEt62gSR2H1XtVeKUD5cnLrh2sZVa8NVtaSGGaz2iNmyqczaVXKT8uAekJVVjWNM1p5xT8Q1A",
  "key17": "quQbYNv4ZLyVds2UUkuusXHskQ23s2kcxqF7xJGjcqNQ81qELdP6yvbjQpmDxjMvm6kZTSrgQwjom6UgsxRoexh",
  "key18": "2dk3wVXseinGbUwMWAmFnyEQgmFcCCpSdGVZM5LxVfWopQyD8N6xYhLhiJDBKf1oZgWGBk52Pz2Vnqm63ssC8dLB",
  "key19": "5razK7xzSA4S1xSdVuT682C6LmSnDgz98rQDA85BbcFhvHHcFYxHaA2nzYRHETzM6irseFJxJXXvcWaM9Eh5FLqo",
  "key20": "57fQ9cX21VEFxpZgopNNQShroZGmuqva4o43VCMKCp2E64H2SLvACCBdnUnMs6aDJn3D4dzqrf6tyMGP8C5SQ8VN",
  "key21": "8Kc7T65H7AEmm5HS84qnTMXzPXG8yuUCZyoE8U6d6ayoE9AUycxnuvfbUX8WwpTdtpcRKhph3SXTmWispGzupF9",
  "key22": "xS3VCR7jRSuJDa6MSFT83GFnAa84uLAie7dvwTygRZX8kzU2ANh4qt3CEM9oWYrSQ5FiGCNMj7hDdzqNJEJfdJa",
  "key23": "hoon8unKKDKfjnZWkP21NqsHuaQKoxsdpXiuVTxX36CQVF11ZoMSb1s2ZCpusCb9xVVvMQUacgWAxihb1U4QD1J",
  "key24": "A4ipvUi5bkzEoAqGLNGrRzHYMqy7uyaREBwBcJHdqzun7oxXHoSBsPett65dezL7FWSeraFDqdWBCRFxKKHmaUN",
  "key25": "3xMcmKVfbH5dMt1zPdZUhA8K9vb5rxT941uyDtq2V6Ujzu9DfB4acqEjwrWW6WkJ6jNKETaQZyQqYNy9XWgWAh7B",
  "key26": "42VR6d2LYWttJUaVzQjVu3GWMRd3SRKZZkWJNrdbiKDAiFsj9iKi9ENSEDq1C5vy91tKoQnbp197aRzvstto18uJ",
  "key27": "5uvf1MFhjrdYcRbex6gaancWi4So25hyHRSWX3AL3ikXzndSZHkGDLwSKUKaUXPHMq54cMiLY5ch1abPgVRXvbk8",
  "key28": "2UydSUzTpVM6UU2QWQy5ouWPsExzBYzdnW833EVcyf3sswpHz5YtTxQ4VthxB4TuTRR5CQveNrg2RGK3G9rtB3NQ",
  "key29": "47jsaVAJjvgu6bLjh6EqfVjm7kvCAXUmRNTQMDqW9LnhExgvB5bAGjBLASmvNenzDEBxHKQiXreTJYGKNt8oj3EC",
  "key30": "27ygkqVsbcLVQTkvuv1ij5drHmfs4atKXM95T3jvot2JAra4FwK2ZgXAyYxELTXv1tFFGa6D88HBtivYVzzHV1Pc",
  "key31": "4TAojMvmof7FDNXzMy6TubWSQNcjWUqpNarL9xhvzEWXFLao5RAQyWzEA3m6viyu81hyxYK1XewF6wGfiBD6TWEv",
  "key32": "3sHBjCddF15P8BNdPg5KJW8QnUK8VwAUWDzrK92z8kvXKExrjxYtc4zKPp6B4kNpqEaRRRsVFvFS43k8NmG3KMwz",
  "key33": "5X6u1bP2Adrky3yCLeWKLfroLGtBJ3BhK9mt5S3GDRoihVjjSHgUivdP9sRXnwUc4u7KQn44nsZ3bQagZbE42uaj",
  "key34": "5hwYQx6kvFq5bEbCz9b9di7FKj7gJuzbkpmMomKhu5XrqwQvDCbctDaS1cLaSTvuNWVmZsNDDw3zEe2GgxeiDTKm",
  "key35": "653mfJiXFxAcoswAewbmNHDdG2cXGvfXt3i28qU9dQ5jAijfsJ42atMK3xPUVggrLQGRxxftCakTHFssWyFXb8pd",
  "key36": "3Sf3UMAKq52HtDJE6dnVejrPqhJ5Ubj52xctgkqmhbFTqCnKRu24qM9wTWFsbQFHuhM8763A4Fj44X2VP9KwjoUZ",
  "key37": "q1gGMwbdw59sshThSGwHA8aZ4CkddNKVsX5D49WnriHm4aYRG5YHxMM3ThkLrzUPqVC6A59zN7uaQtVDmsC5Vga",
  "key38": "4NA47vJPyBsS2eBGTjNdh2nvxoCfrWmXMqLpzNi4P8KauzJJEtnK9YubUJvr2XZjwhPLpcegyJQBMSeyouJpxGf"
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
