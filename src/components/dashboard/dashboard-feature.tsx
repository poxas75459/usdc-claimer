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
    "27dPEe6yDHFFDmZpozcT4sb5ebYMVMmRRBrDnegBEWVdZCFZcFt5Zgm6MdifReDkeUA7CKod7PtwvxqiW9mrasyG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "53g4K5QjhdJtsn12LCzdvwYtQxEAJTuNWeNRD13VgKsGphvk8smu6DamYmnuVnfSbuegr98LDm9pr5Lda3drqhmF",
  "key1": "4AGJwppGPqort7w3ztkqTexv658k6Qch1VKLRMpieU9hrv3GMz8cfVGtjAGfPUyQLFj9adZH2HFmkJDrykjdJm8i",
  "key2": "3FHayzRf7rDasBVSWumYFaYi3QBKzzttwxipnRCJvSWqtdcEt4zivR4fYVg86zshcqUq5iKr6RbpG6CWLEzvEpni",
  "key3": "4LWD8BarrnNBvtaWMtnxQEirX8xyAkanVaNTgZRmV3WAMFx2wY7HM2EeyPc7kq9L7KLb7FEadDHy9bRkDy6GRxnB",
  "key4": "56SUZVuf7JGAz9yg4YWDhveK2pkht3HFY4mhnr13LM564JPFvc1PYGiyUbf9Ygp86g3nPPe7gwfKi8CGDkbV9tZ5",
  "key5": "4F7WscnzD28PXCs9RGX8uR8XQhDHvfx6N61NKNMsZzaSUBWpV6sqYAAdJRrHSekNTP2QPuJStSWhCVUjkg7DpSni",
  "key6": "4CTyYzx43BLKeBdtHC8VGeZgJsypXoMG9zXbRBqLQHnvcqYJYTQMFJYvipSNHddE85D3qY4ZE4J9ppH1RLxHWCg1",
  "key7": "cnfJbutjqYWsGfumLoXb6uRoRwLTA7ib1bgxn3Y1WUyPUYMuz5qA6QdowVcUf6F57otTwenE9jTEXQ2KYRSaiuU",
  "key8": "iNzfjxrLNuBNgGeEwq5ofLospLpnZyH1AZyDnxjTCxj1gG55DUWdrcNCTQ2K7xLvq2sATNZ6gvLp8zF5RJwWtGY",
  "key9": "K3vTW7HDRUJAwBh5S7VySqEjC2WVw6gpeo8dNetsTTFAUVUWa3J2Qhvq83WP9HcUqLb2NkoLKXiy9ku2G1SBquZ",
  "key10": "3ZW47WuBux4AXs3QzraaY1KDVUv2VwzSxLWypZmETBauycr8uHnB6mzAMatbmFF2yuPy3BqaCGvnEXdfCtRwtFHE",
  "key11": "62ohuTYu46Rys2kpsjsMygsrLfKyxXadv7cD1ZUr3g29zjWbPxqJiGmcRUqgRhFsfYgxMFqFVJvs3xdkKVrTzcYA",
  "key12": "4vnZPWjFUc9ZUNjKgUdFwA5WxtfvWhpQXCB1GU8BgWFVmwZRv2UWLjAY2cMf2pS95VnEjYRBQgKZSRNRpSiaSZrC",
  "key13": "pNKeZumeUV9YjhV6ZScttBYCeuP5fr1qgbfLXBXYWN1RtD189jj46BxGdTmnhMgejY6RmX35YVQWqy1TWU9xTrm",
  "key14": "3x8gxvRmhJL7u54dLncKLnxqynpxgn8Vs6PfEioDtJqkKvHQqjNGXTqdye7DKiAf5YuRdTjLLTihe2qiwinvtx2w",
  "key15": "JHTzZbCWUUJpoGfL33WcnXXrierd4nuDbKS1rbKZFzx1G1Utt4pRSRC2PCbXPX5L76djqsks92Y3789egFfaRCd",
  "key16": "5ABTd9C9A9hZD5TB4F8JzCpebKnuha2e4LEA1QPXJk8mWb3F9mU4ZCohnVsAXhkGzZbBq4iUomUBg12iq7ke7TwG",
  "key17": "K6BGRamApQJH9fn88m8DLNvH9L6VMC6A9rZP3sVAJeVaCL96qW7JjegVR9A8xCQR3aTtqieSw9As9xHh3X8BGLb",
  "key18": "3RTDBXsCKzvt4rQxEXCyV5Ha9zSJv9zGDSSVkAcY2Uk7PM7vjDKRKZtmK9Q76C7C16C4mApC3F9rRAQobdv8Uy1P",
  "key19": "5hCcmx9DhTvbqRK6Pyuy1XDY1ncH8gkWXyiWpxSrXLih9GABY3jzNQ6L7dJSCtcBs6ofrRnJTfRupZMzZzjUSnov",
  "key20": "2nSMFxRHDtYXQWwouDqFj7XCeYy6ubm35WnC8BcMvm8Pdv4CighKmEJENqa4snQrmXH1aCnp59vjc4aetuy2FA1H",
  "key21": "4fSMJMmGBkU4kc8VRnnPMKWt7igSKNfdSjqVPeLcauA159v1Trcwjnu3wTvLjGxyyZHE4bkJYqqJJ3AoMix8NPr",
  "key22": "3KZYApn4oa7a1PbZE1FA2rrUxT1UxFK8YhnHaYwbnvkomcQ45S61xk6jQMVTXbZHHLqJSF1Kot6z3KfeoN9i6tC3",
  "key23": "3iH8kZdvy6HaH7eaS283jjTdXvP7XsB32vSoHD4nf5ckrKjH9XxdYDTUcRVqCTJJj58wr2aUfoU8b2KAiDRqg1r6",
  "key24": "3hWxLpfK8fmECvfeBkXzLEqb7jzVrasVj5ob7A4uvrr6SVjDWEjFbyUuu4LqWvS2Cz2kzFZE1SYuWHDP4um73TEN",
  "key25": "3Tn7FxM2Z6zhxCh8mPKPTeQc4rHhE8HyFUgET7vzfaZJFLfJdH3bbDYziiHxHNfH2YCmeEZfTmieZmaSBN4PTsLY",
  "key26": "3K9EhUs3FopFeCtnEWK5YpXKvLSqGxTqTmrap6aRdHQLhUN2tzXDt14K9Y1ceYi6fRnxJzEuA9rosDY3iHHWg1Ad",
  "key27": "DiZkzvhCZYWEKsSXWPhLodBdew2Lxf9SYbRtSw8JuS4kfQNaP7o8EGXHArGRVNPmmJbhXU49Wccc7W3orBs73j9",
  "key28": "5C72Yp8S6GANpvhnYmhMYgNA926MkUg1sddHDPWGuQ3xBfKEfeSGVqp1TUtGbXEyDavt5BJ1dn4upPJ7nSoZjyTd",
  "key29": "7CUC4Fr3LKvqNHKsGYaxX5H2qbFP67p24kg2ncA2LWYvicor2HsjJN4dPHPpeZYFihwDiFBxnWyCZbY8ofrNPUA"
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
