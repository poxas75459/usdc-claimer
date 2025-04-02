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
    "NDBGHQQ9JbV7ybkq3BhAPESJHbG55s31QfH5Cp3Q3W6cSCyo58nPZzHvH1LCxCfStuG2H8sR4cv5VhWxudKs2tz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3bbe7H77jBo2chvDzPY44yEn6eV31S6TJ3oaSRaZPsd39vaR5G8tKTJfxtcbhDpgk6AM2tcee8XuNNkzxsH7dgP9",
  "key1": "3WwnCXX4T7hrvbLYcXFNUipobJZ1mt4tQJJN18VX9mywi5JGCQV4rdvKQZr8V1EgTk8trE2KSELZBktN3SqKNrcg",
  "key2": "2wyYbdgzRt6HCjdo9b4SCETLKScT4bDr4VAkBCc9sqUUjPSqep8q97sZ4G3tCMizEFeVuGUU7f8K9nWjnM9vmus6",
  "key3": "4QNKsmx97pct4ecdUNp1wEeh4frCJrDW2rc41rxXc2gPgJm4VkMVgUfzoiEM3Avq4xJmH9qBqQAXYX6qDopSnCjF",
  "key4": "3dkafNfc3E9p34oVCDyf41eTfY6vAcbTjAM8U1QJnEeRe2q6tRdNFrxw6fXeUA9APKysdtBwRoHmG5aL18niAhtE",
  "key5": "4boMmZkAHnFft8BpHe8bdqChWcGmmSU4AiJbJi6RPh4C3o8ZvWrY58W5WLoFpsBQs36RumW9gy7MSGGdV3hVCm5b",
  "key6": "386b8h456xGi3tcavDWmJqL3i1MCTGLzN8L4tCLByf8b74FD4iQkRTAn2PyY4HLmSLMeJS74VrRxhdhcGKfmGKVN",
  "key7": "3KchPAPhchSpjVNe7PkN6v6VaRHuicMNW8g2AKdWmJG5gC1zhvzCE5TQ5SGwcdbEk7cSh8WXZ5WAvRKU9oURCAwu",
  "key8": "5t5N1MXbYAVCQi9Pkav2Qcv3CyT91U5oPhi37L8KL8ocgQ1kCM3DotYupN9md8n1QoLJFoDjhT5g49tfQ8ZcxSbo",
  "key9": "gU7qXAzdKaQNBUc3stjCf1TL6L5MCZSaYS3rk5Ju5U6cb12pT1CP6icz5kE79xSHCrEXLTq8aLjD3sB9hq2d7Jd",
  "key10": "2eMoxZsUN7dgZqmyg3yEz6i4tQDbT2iffjQYJro6K5oN8p3u7d8yzvfCXcVzMHSXUPVKP7Z2NnGPFQzjn4DFgWd6",
  "key11": "VHdidZ3SzAmmzMYw675fpgDsZmQ5zsAF7qfFefuoFynJQg6WZMkvJxGqHDXpJWzGS1d8tZTQRZWkWWhnq9TLLim",
  "key12": "63Dg1jPxBQ67U236TSANS8vxuW5XDcLRmHEqXmjWcYBPCu8x8D371NLPfFCNGUiN1esR3N6q4BXMqhdapmsFVm7h",
  "key13": "4i9mbZu7i9w2ksgBBhyMRLmpNEqBQHhWZL3wzvrnVrqo1vUdmh3NwFpvPrBpH1SXUQ5j6iLgAd4ZtXevChSjbhTM",
  "key14": "4SGU3k1eQQcyVbYZfLDdHvfosqFkGZ9QERrGBSbedVRzdgWKM1mkcsYxZhJ1dTmTQ4dP3WJJ9YMpK6TGWePb5UGt",
  "key15": "2fqHgap6DKdvRem6Y5kg5buGw5TNekyzYNYm5J5UvP2DcxjnW8RQ2s4maGMmLNJ9on88A3mpznLGz2iDRoQe8Khm",
  "key16": "4aZQyefj6CY7UmDLPjhfny2RKMfPwHT4qGTjuxmdPSEDq6pW3T1DQidWVvYm6mg5XsUeXXhusnJGPgnEtGegWXYx",
  "key17": "62qCmSpR1HX1fZVMvsXyVA3bqHE2FvHM24FGjTzzEHLqU3CZZ4rS291hB3QCiZ1wGq8zAbHbhccTfyioLRnUhjP3",
  "key18": "47LCkn5Cp28Z1q1LGLSBshuvjD3gAQD4WtE1MRLSiTTv2WUnHqnHehGGgpdeFgzu6C6exTdPi6EX7JRKZPqvEoZV",
  "key19": "3qpX73Dh9ztWpsXNRaajy6z7rkbde5v1EuXVEREbJpQ9oxKgyWGyiuNUxGfhWZdfJixtmtBTFrYiaRB3xTkk9Mva",
  "key20": "5vdaa1fBZgDPhSb5CKyhox2KN4LrNrH3oghoCqGBSZruqZpGUXGz4QyzpxC1Rhg1ZEcok8f89N4JbLcfnsK2sZm1",
  "key21": "5bsC4r9ME7Bym1oVTN3vX6wEStdnH3GWGsU532sBxfwsQ9WKBFCyxhWhfSfbciSwKEVdGEyaZDpVei6UUVVEsCEG",
  "key22": "5qQny5StGi4igE8GJW3RM4uLACfEvgsQpNLzKquqSiXETbc9XicYNnGEwnu6FBG1ip4wsbPHJWQyGBEbm1cqWHRA",
  "key23": "5h4ngZ9HdVi6aS4FLpycdV8TxACpKu13MeRKpmGM5491queFjyZ7oap4CZCdu3uA72AjH16GNTC2tg2xgbUTjdB7",
  "key24": "5ZezGbKf9VKZWSLeCos74crujo4cirDVk3X7jZuRtER9KzwT5gKB3xUywXcgZrK9cUgMoyQHxxWj5CkJj3tZhJyk",
  "key25": "4p5MiPFxvAogiCXsLzLReCF8rpKDZU85mtJd7ix8uNgKEMmS6oi2Ur2Q8rQw7A5rySLeZW6qmuzpL6PRe1ZYPTZa",
  "key26": "58DLeme5RspBJ4euHxdAjwq6gLgUquDCkLC9M4KMUFeaktwTeNpfsrUfXvpamopAZ4WSoGHra4Go6pzzSQNiwDAL",
  "key27": "3thM8Svb8Asywa6JFARyGGCZvBwCTUWF5vEkHhyr7nSUFTxzFRy7EDmcYiAHco5BVBWnJoWtSoUTnQNVgB1GbXgB",
  "key28": "2fCMfaFAsziFLuXBbCCzo6FB3vuP7F7gUkw6Vh6KNkfFJ5xv4ns1VRsspiurvNX1eR4jkB7kB8SbMPbZT7pCu7vr",
  "key29": "2LCVPnAMG5u3Jw4sGQHzm7cCkhsZaJHW2xW12r3JnzurnDAKKeP3VK6F1zmL3yD1JTGb68frXPj4kX31xgKVe4oA",
  "key30": "5qRNsoigpkPkfJ6XLv3mtuBRGmwRGGmsVEKwmA4hbNinXxJiQWojEGRTmZBpoJnaVD2qkZy3jd8P9c8DGHz1Pmn2",
  "key31": "4adNdu8b5AeDpny6miU2uTCtFDYrGBxehcyUFnEyUeZ8JeLTUXCsoijVbGR7gZ7s7CAww1YJCZNjoVcTQc8mHXAL",
  "key32": "2gthWRMby2YrWta7KZKLWVqGUui5uBMSEhYSLZLU2rV6bPo3nEDqNCGsuEW69esFtZdwPBz5cQywyCd67MrcfsLr",
  "key33": "Cr3xpXGARkJN7WpV9z4H16MGFyS931xv5M5g1z3k4FzEHRFLcGonrNzqoxAoGENP53DKov6mduhWV9hkyb9hZoq",
  "key34": "3A23PQNV55oXRLVpZjxLKRLmbLAAB98ZiqHS2GeAqDTMYGHaymsSWQsB5CsThDDgNU1htmikaxSYWU1foSDCAUVz",
  "key35": "53cbkYFpBfW8NjSTBw9rLvUTUhZR19Z8kjmwGQLrvZvo6kGrQXMPN3Rnu6k1jJr4vxn5Kgcpf1pN1W5oXeBQxsoH",
  "key36": "5io5uVFZFFjSjjzeD2THQYAZrYbQescJMWtky4JgvwT5YoyMzYUByVwjKYeXyAAQjrw7TzNMPKjFYcb9ihHxi1G2",
  "key37": "4KwKvJsm16szcPC6KCQnqkdW4Kcxb39n6x9C77GY6XzH6uXLDDUjXSLSJ2eLbicy8QbkqvGHtw2EeBJtha9KKDQ8",
  "key38": "2eks8Li9CZW9hwjKi2sno1fwGULALaUBade8eqb1j3nTVxg1CESN2uJxw7dC2NdimQUPKSDfPUJMXkFNQxYGXBQb",
  "key39": "5xYczeopxDd8LoSXb7GNcwdpjwpguY4nDDvZzPN4zwa1gDwUMbr9jH77eBCq2GSFDnKhJfXH1yJoqHA3vwKLWeaY",
  "key40": "4ohKhsj99nwKSmkcPR9pmVt7s6wjrozhKhahEY9DbB9JdmJQ9Qathceuiw7vRJee7YHPYinxkmGXv8Mc61TUTuzB",
  "key41": "2zFtZjYwcNwxokvzFn5pxkaJxPmV2JAGq6ZqD2G2kA2pvGZUMYtztNwGKF6FLA13W81qKS8qP4Q9MVK7XMUriHUq",
  "key42": "5iFEwix7NfrgaHbhVhZ38dcxUcx5F8g3E94ETP8teYZ98UFWQzi3Vmb3gEjMGntjvDRcmj8TraLzQh3tSFMWZ2iB",
  "key43": "4iC4V21p6xXHcsUk45gLcynSe2HdW8graQyFVXsnXATQe4B6uh9ewD8XbqcoBrxV1RvBZPwCMLB42XfA25uhwZrd",
  "key44": "5Qwsv3dZZ5aE1RujQTUSSc4D6b2aPH8UUs5KN48ybpoc4FDVYazE8x4VUTa76geDsUAj3sVRNsncKUu6Pm8jPXvS",
  "key45": "q84GWTwjyMEoDxgu8axeSUfFZg2MP2hM8kr4fBUcqfDuqzUojxRmEofJA3sBaNGmkg1XoHZr16RJVUY2SsgZGkC",
  "key46": "5UC4U6gJXdnEgbK6JyqbtrertUSiwB9n1NCXQWyqECCwAaWiWALePBCfrbj6pJnyPxJXPuPx7NZc2u5sL8jdMVG3",
  "key47": "gaev367GjJVS41ASyX9QkPtJT9wRrnLkh4jUbJUhxuDiZ69NecMEyRQXLKLjuNRo7pzUje6rd1mtCwrkbWEqTEW",
  "key48": "WC8PPkLGJx2KGZs6NtupHtej59YmNRVFxRmbaXCBUAJ2YZt7QsorBBrhRHwj6DYnANxmP3KRz7Du8zEQWBA6jpH"
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
