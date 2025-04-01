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
    "42R4DuaAnf7vRyw2LG9x3YZLXQLp1gdQNzmKxcuuakztejV55ZDrfV2PMDEnbSafgQBSYN5rzxu9ySGEFjhqTf6q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35JyY1xiT669rCTPLbHbvCNHEDi3jn8xzVpDkjQmw8HMswd9YnCyGbUw1GDv14T4SnP8Vqbvt3p2USRuAW98xopJ",
  "key1": "3matwCgZKhiTkK7rCvVJ9JAXDG9cLsPYDs9gqsCFRMKnkGx1WsaPG22pCQwAPp2qBeUv8Mda9HjncGztKZFq2JX6",
  "key2": "4WuFWhL5UksJoh1F5mYkgjWjkg7Lm26WxVierSGYPoSYELA4zFKVd19Jd6prGG3hSCrDN2HHPdf1KMixLFSXPasg",
  "key3": "2t192tbbRhBrM1Dpcysonc8JdEbDVguBqFYBSWQmf8dC8bBsa9QuQNckaScL4UdqtLzNHZ9mzfpENEhWaGVi94iB",
  "key4": "547ouUPsgKdHfvDsUWTKVBjb8WAq62i2gzQgXSTh4y7wsTZpzLuvPUHZPsBivF3uABDUe9uQA6MBb9T7nDv73pnn",
  "key5": "5kMpAC4xAQgSRQdvDuyPVCEzLkMTTHBMLwvMBcdTz7SCnDQPp8d95L1PzZDDBvZAKdRmMj2hGdFmzRkeRn9KrHSp",
  "key6": "2iVyctRbL7GmZSxmmrJArRkvTXi9btK4yMWJwDHR1rRRcBLD8vBk9TGoBbsoYS1iYjsyNRK1x95uUXBQ5VCvDED2",
  "key7": "2oMmSGwaFfocchGAJzsoB8RVM7zxptN9P6ywBZXEy6dtuQ1kTwj5umkMH73jub8XCGdD1ck2mmTqr3x56xS5xofZ",
  "key8": "2LnLzE61HNHbvP88KDcTpjr5ENnNTg8bZPepnGcHMs2BSkSCkoN9xVhTQg65p3jbFfxwSBFdvBe35Qoc5QA8Turg",
  "key9": "aMaccRdmK1BEttPdbTAA52vM3jVmc6AXHPxavvzmXUz1fCKUT9v9FdiH7JYLAf3uNQu6x5tNjNyvy72rVMcxyhs",
  "key10": "3Kr2GDEjeLh6PpvxiB4sLY4knrSPSGRBN5PdbU2WGEAa8Yp4tHjPqJB9HKcGERkPa95mGosJpa59apAZgwXJ3mkt",
  "key11": "3qpShGNqZVzqSawpqMCnGL7GB2d99rt4Vg2JUuz99SnNF7TghDPqV6WYXAQBSiSmRpMGDomVNmM8RRuHyNtU2MNb",
  "key12": "AzZHrKh5mc6zMD6Bmy1inbV9oF6fjgRXQw7CHTUocCRDJnbDPn5fro9SuFuVNAnXh8mC4DhGjWjz8K7AShmV4rZ",
  "key13": "4q9UaDuCFULBaRq7TRoBAyK1uaRYW8MdJptuQrGn9Xdchqy3GzFcBWc6PY6uGLpe2TuAwEb4Cz5eg6nqvBZx7U7j",
  "key14": "X8pbLaTu4oJN3ggTQd7Y2szTkUtMMuWnuDNAc7HUF36tH5XAj5vMQTWbuMZnNoGePXU8dSp7j6Zqy3CSLzjQzb1",
  "key15": "2ZfsjKtyej2Ad5sywBUTXMQQ615sW5mBkN6NYqYEpU3uRph8ge2wXhHwqbUebo8ZvFw9GkKN6pFrG5PrX2VZKDjt",
  "key16": "58M4q9hRgkYeLVTJXM52k7b21pXRqeQdKs4diQ4UqMYzTNKU7jMw9uHgMsTqyEc3mET4duhksFbJJu3FUJjMvEZC",
  "key17": "2Py6KNmCKVTzphDEMxuasT4hiDC6onBJkCdcvTA3ussgGfFBfvBiggDMgCrhzLRKMaV7oaf1Wr4wNbmukHEBVKVQ",
  "key18": "5LRdBLtHCguGri7eEXcN3kDjoDpVN3JGB2SScPmcf2H8pWcufanQvqyvoirkDMJ7TLffJjENEAXN7UVfDVgK6wRR",
  "key19": "3r1PscDJFzvgb3rcthZr6z3BqA6L3KFjKenbc6br5RDFT8bQAz3yYH1Ub5XqpZ8kMRLPRQiMUvjxYWDbwY5WB5XP",
  "key20": "3jLPNZZn6UP86QWLjsJhgPnyvjNp39h7jb9SCDzjKBiYgdzgKEeZ35xFUobkXYymNQy1qWAm8xei2mK8qhJYfkJM",
  "key21": "kUqD15Nf4abPk5rLeY5SZzJZdTfkqtfq9X3tByGY7KSSG62GYQhEc1CqDTCsbDpcUinBmufZPKSVervA6UQ8RN8",
  "key22": "4ZAUbcrUbkFPozpAgMcRUEVPxgG2sEr5mnq7J44WD6hysbHvRQKHYHEYrGvXfBJkxoXPWMgr9G224yhSMGxJr73q",
  "key23": "2ADKn19FdCmn8wBiBjF4XgMZK4hPcuhaaJZbojBvd37uVS3fiffFnfymJ4hhhqX3VEJm5pziwXiUPYKS8zDHVrnw",
  "key24": "wccUGA4GWCRoJqnv8xgKPSa2bKsVnvqjcU5eCf4disGCg4jYmiWB4wgV1HZKKm9PfrjEPWUuaKDJKV2phdvL6x9",
  "key25": "4NY6e75DgtwGJAUByVtw4WVFknvmrTAQPo3kTKXQUaisnson5rPUKAegAX4dc6pkspbDFWVYR3T4MtEk8LD9emSH",
  "key26": "4koBqwQFiqPiw3Y9mcv1fnxbBDBaJgQ9izt22EP9y4tytf3AzY5afca24DgVUCM6WUT1LMdCZTvjBswoCkiBTepq",
  "key27": "45pC7mJEsZXZzU1KuVExun2EGfeAgESKdE41ymkrTqnn1D5hzDFDzBujaLZZjWaz3eHayQzdbpvUSHhVZEcMSMg8",
  "key28": "4jG7UW3ZVx1nCkg3RDB7C7jwhePpZ2fpt5oSztiv9jFxi43RXmUS3A8nHbz3thAb8ptTJijNY8UY8muvcbBP7JzK",
  "key29": "4QFLD1eHtGGNWmefEsN6SrcGrK5h6LNNTpCEYzVtFABQ2XhoMc3x5CTFP2P5xzdvNT9oNot8Udsa2X6ZoaumdJSU",
  "key30": "4PUJbLLzJt7uHJBMbv18owzNU6bt9ixxYqv6F7udCH44g6Jh1DTpPVRNVfNMjYZTa7cigfYPhq5rCYRji5sjWTbE",
  "key31": "39n5ED4CCNuCVsppvERRgB36PzDeyqrXjnZZUoNqg1abiLWqDs99VebQsqyxaN1cU8dVHrmnNxThzHWwG75GTuPc",
  "key32": "2x66h7Mwd94a57VnT9b6woVaHoxTzg1gay3C8R8gCieNLaUREkMqxaNLRodY9NXgzBsNenZtq15Frzynyk96Msx3",
  "key33": "3djfzcqo4rrWPhdN8G6bvk4U47NwuK64iYFUY6aAuS62yMWFbYvufoaNjBThKMUy8Rgwi4K8mjchXpFYH2q5dCXc",
  "key34": "gpLUxMGz982XcK2GHdkLR8q3w14ibbRR5KqReAv1x64nBmGVaa4LeY9dNXy279vPufVN1c39qGmsj8RUs4X7pZ9",
  "key35": "Hyf1ecMPbwD1Zs6XXEwLym8EwXni85sEpUaeeAmgTD44UbqaEcNjTA69esXGdTkrk4E7qHS7G6H28pjz7UXqiDq",
  "key36": "4P36yMLsgSeoVeUnM2kcq86iXwUmJTmQf7GJgcGeeZ8EzcBYVkZMkm848CtwKKjaTNRtWt8DA7Caf8F7y9dH9tjz",
  "key37": "dvrPxsyHPAxNzC53SXJEAEWMNZyevLDEWDgRiExxHz2ekeAFgJvRoPyWh13E9mQgobRNRwVXsqx7jkGvg8SgBFz",
  "key38": "2SWaDJWLiR7WyovQnwqtx3Ce73CGUjHNHGpwcMMLhqTki7DG4Qa3Ux2cFjdSFanfEuNdd2Nygw3dwWDgdudenUsi",
  "key39": "5a1NrX1JBHzYk2VPwKHxQqMRxhdnzfbrH6oKoVrAvMveYFSX1AkVLFXqhN9BFD4CeqbfqYhLiqQMAQw99hN5kmNK",
  "key40": "5j5V4dLsNTde1kFdJZVDaBrSd7ZiCgGUaSCTgEdBusYeXySP5mSKvGjxds3edZTaZRh5jfq1tpJy9eH7dzF4fEf",
  "key41": "5ZmArQxrv9RjstkJqE8PyRJUXCKFuqrDa4qgEVV5gTEQkBx8iG6YLZ9yRv14QF1JWExPGHSsDRpwcMo1ZMvdXZUq",
  "key42": "2Sj6NBspTNKVfpmwqhyMXEUVTKyyZ86JMRL4U9WnQ8X1zD3LxwyBsSj1UE9cUYDYmsMhKL6QuhWxURtXYmPKtEB1",
  "key43": "BXX8AGfztm5BBLReFPCszc2xx2eVxDZ5mnCxE4KShX9yMqyqpDrcfJNsaA6xhdDuuQGBJE112hXezXqqcWRBZwc",
  "key44": "nzYZpGjtmNAtujwCfXrRoew9paLhkUZxndxsrcxxf3nXzkMtSVy83ATxPKxrNtS8cAy7N5VK68G3tWnF7hD947e",
  "key45": "ucfc33dvE4MQ2gs1q8HxRDsP3ApaR9mJHoFPeTFr3RgrjTcwpsd4rmB5AwqvW6s573YPr1TkTNxr9LvKjCwevm3",
  "key46": "5jPjuXsfw7pRTBCLaQqfQicVs2zo6WSHa8N6pdNk1qmmn1XQfanF56mXh97hio6hD8nYsJNB8dSh1wHgsYDSdA6V"
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
