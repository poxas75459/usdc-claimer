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
    "3S1WFq6aud6nwsi8xp8C5GETtEERLMXGHYuDEhR6wUiAAMgx7dkHSnC9mF7AmvWREWWQdTQCVdTLx3ogU6Wuch1A"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3r8Dfa2UQ6YRbP3JTuNkQYVJFvtKzcdi6tbA9Sytcya2j9VfWpPiDiX26n2gxswkbJvJq6EpCPfoNcNJ4nDMbP7E",
  "key1": "L33Gj6EkH2bhXVBWjQXFxmKrGvCcYYRNXxLWixDUQam4tkEJrqHFZxEo2VWndBHDsyAti1A9kZRyZtyjPjCrnAt",
  "key2": "3VD84iziKrFeMu7uqE7ACqmNZjZEHnCBicFxjDVwLbzYDnfjevCoMtBxE1QXRvHBzVe9x5DfGK97NTMg8KoxhwZq",
  "key3": "4pzd2vsJebFposaFzCUepAqkUJNeBFPxUBvpZqfkJe1v2pp6EF85NGuNEpsnhCDw13FD2hvM7PNBHYym8guGgEy5",
  "key4": "3QGrWcSFaHeRih7MkxeRENjyjUZfoNF1V1Qq699F7sYibDgncUEd1BRFk5ZbGpYRdRRgWJeP3XFXUrKYU3r1nSYj",
  "key5": "23CE1DYy5f5srNP9aj1wu9awsZoujVw7V5y9VhK5kNCaBtFQH78RwNkFXMkm6uU3kCHZw4kzr3ypwKcZVECBfBx5",
  "key6": "83HUYbBQviN2JwpPTcPoVPKuTRVhomtjht7A7eTZuSsQWG7BpNy31Sj6WNbBjErKskejyWWHU32ULqTVPcLA1LB",
  "key7": "33DNeDqKGbkx16DhVRotaVzaAEYU65m1gYkKDY8yxCuzEyPcibommYz4H94jg41oJRWFJWYmmF39Ba1V8uxCcLep",
  "key8": "2oSRyskhkmvgYmojzk5fqHYy9VRBGCtRHKfLZoC1icf3BqiDD98mCQWDgRaG3LagcTTRcPAVxpWhV5agBCEfZgxQ",
  "key9": "GQ48dAEGh4Wz8emQUHgSLNVqhTaL5fdgv6CkFMYFKqVFWEHqBqZrag3hXGmpjjHq4pSUHLygw8ZCANyUfHQ5L8n",
  "key10": "287iKZWKBVCnK7NZQgFeSoa2XaeB9mV9aKAZWhJHejqXa1pui3wYW7ANV5zRQn1HcVX5qNQzhUGKCnog4o64fEbm",
  "key11": "5j14S3syoZVE5WSWi6bxaxCdySTLmGgg9o9rCmN7oxBTKtscZCZxzLNo579sss9rEfd4ssavjvRHDz3reUMNFTGs",
  "key12": "43dv7v25MgkVJMPFXw2pC8epcjxTrLZCef4qwGZJboT2hNRKGcDpVCv4g3dWunbzW7GrhnyeJB8zpFe6nWwSy4o3",
  "key13": "3MDn4RKfmJdh49zD4kr1xwFJALMCcQ6sgvUcgoMcqRacxKTjUYjiq5TxJWNCaW11XPZ342jYLDVGNX9r2fW1dNrn",
  "key14": "gE5jbKam4y5yewDoZrfbY1WyF9BMwidNyo2GVcQ6j4o1HAD7wtf7KaYT2sR63JoADGNqf8BneRRrycasRCDYnnh",
  "key15": "2L8jBVWFHrBpvMHqCiTgQqMid6cahry3WBGgSemn5b9H7YYqWG6G4TLXddpN3YpYiuig68XA84LsUXRGNzdqzBhX",
  "key16": "3u2vTa48ygQQx31aSakDqvjAXCTFu1PEMik59DZo4fYJKihLn1rkxkdxG3bSh9qXNtujh7HvQibUuZap7WEHFWuc",
  "key17": "48zVyoSQ6x3n9wMgUQeXx4A2tWSxqHAoADQctCkHZXz37KLkHMrKxYQKLNTFFzYvrYC1ULrnRigE6n8YftvTwri6",
  "key18": "BR6uh3vFWjNEsKF5waeJRH5LzKYQGhuLvhC1qEUNo4M1EudqkfQVRc1PGnftuGgzyzd7BP57N5mRtstaoP9yRHH",
  "key19": "3Go4GTeJ6nCJMw6uVpdTqz8hRYRHhyjB5jCiMBPBy8GwyH9kY7LM8mEderGiFmsGDBxACE6RiqMra9BqwYSmfGMC",
  "key20": "AxEf2dHfsNk846xRZs9Pva9PWMb9sSMuCuvtb4YVQtVMqA5rCuJWy897M8asSPCSW636uVrpGVqRcHpECR1M8oo",
  "key21": "5HBi1tJfjp3uGJNF9aJm9MFXtciUicrBJvFL9SgtKX8wVUz7jB3dXXikJ4QFgHXnLDvG23xSQ7Y6jPmAktWnYjVR",
  "key22": "i6gbatKjcHeK2py77tS2QxGndTNt66DZfHG8mwq3S1i6PkEhxCcRX4RZ9k9VCScgUXVVDyjCZR2giacfvi6zVCn",
  "key23": "579g2NL3Q5Gy9rTSmaPhuRzjoo6MSXwnpFxM6BqkLvx5HeABpWBSPYkC4noKLVxqTf8SPYaSGiWfHKbgDFTKZgSa",
  "key24": "2Z1XjcXDeSg5G5odKS65TCZ6vV729m6YN5S1LQW9M5xNt7KsUn2YHx1D9QGtF6wmgnJFJ3jCG4Vt8CBbw1Vj6MWL",
  "key25": "34bywRqUne7GcMnJruDBtjD5Q3STV4cZcwhcXp2Noy72pokJAnALyVmKUTQP9GrBaSSP8ezsHCJa99NNVoPv2oU4",
  "key26": "3KftdxebJDr4vkDLexNDqGmMkXYgUVy1DxwCesJHjEHYkEqwjcF18iqRKWVvghWrfHz1dkgKWaaf6Zh9VwF3eWK6",
  "key27": "2BkXjo1FZ1Vww2NBx1xk448Q1sgwcJQgsFLM9f8b9FiJNsyKhbXdCdziZf2TU4ByxvMU8y7rnV5nKAV3HdUeNgK9",
  "key28": "2hiqShn2KmTui9zDiwzhrrntS7Z7pNJvS3yxMPyScbfcPkszb4t5k8pgbrfZANw9Q4aiQJi6grfb5NFrDPRju3Ef",
  "key29": "47JHcZzqnmqZFkBXQGc1cL3AfwvhcoY8yFVFq7hTNaVvrg2tYx33QBHipZ6viqZm9UK1rrQ7rpusnQcyftBzA4iF",
  "key30": "3fv6pYynBXrNTLTWNX14a8HYKxe3ayrKFpmfDKH3RvAn7dXnuV3ScPTdXA5Xnuj2xQ7hoYDdqTMnWAb7eTQR2smF",
  "key31": "JhGoZnzrupDEc3hxmNxR69AfNJdq7CRwcqj3v7JEv88WcvApTjsKYF5W82295AaVznw38A8tK6WwS6vfVJdHQ2v",
  "key32": "jwgthwiaYQHPq4hmaAzN2Ux3yyegZZAonPNTgEz1Yd6tam4RiiopJb4UtKb1iweX4uyEMfLKRCz5YEkynZQ9u6k",
  "key33": "3WhHUASYR839BGy7jLCUoaYYNsH77Ynnbwbg4sjVB558Z2fG8dQuvAThcdLcRK4VErtFjw5QEymH7h69YSXU3pjw",
  "key34": "4WoWTwb9GCFmrkXVCfVrj7E1hmto5VvSidE1FXH54ArsophKwiqQLwd8CWd7AfkX8PAUtYdRrVBScLbYpt1dYwUw",
  "key35": "5v3nJ2HgdyvSCAq4seapKAPeti2hXkRiZcCd3eySGJx8ZzgkvRn7khwgQiSZfv3EG94YhEHvHXponEjgGMC5vtk4",
  "key36": "4QNHqnibik4QM7xprc2jRr3VKQPCTNszKFANUuMkvKDsZzM9F65atramsxkks5CPf2B8xkvWtjFJxUHLtQtXZx2H",
  "key37": "23PZXj3VnxmU2g3fcwaYsLisBxWF3qo8sGadU3XNw69rgoLktAeATQTkiQ9ej9tpYajD2LFJZs53tYTZ4Q2Zsipm",
  "key38": "e5vujtqJpFQLXfe7PK8bvpgYgkKnw45kBpQu1hehhKDBFUmRVr9TJywR56DPBm54WgsyS7U6KWRCFBvzvwh2RvQ",
  "key39": "5hRpNhzezSBgiAGtyTPrMgmeSJHRnrfBLCGcdPpLc9MmygLtCw99rkaVjNs8kMipJR13rkBTaWVfeFTR3GYQyrfd"
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
