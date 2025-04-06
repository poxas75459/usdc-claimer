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
    "4gJACu5tNWB2pUXMeFuqjSWVX9CPgmRaZjQ1vJ3DgwEGojm1p6TiPdbQEAmwxLj851kHYtzD36GF6Gd4HhJCv2fF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xaTkAuzEVzBKLb3fGc9BtpY7kCBh7qUaqeEWmyvDAYa4bxRu7BHqx4H2F7B9mT9ShxBygF5c7SaU5ekksViP8p3",
  "key1": "2G5q3K7osMiJ3vay6kNaEUSTYgDKxvJbfgTsw7AtWpSNbuhthFMKaV3t4yYR3rUg9zg4Tcr4b495q9AiuxRX35aM",
  "key2": "ku8tRuhmLL2rciP91SYVP1Kk7TPb8sru9fxPpWm6C2YjVYL6DrS1ch2hE38XPwK9yQrz7VrLTJuwQdZsTAYLH1R",
  "key3": "5G2pBHu3GXws997WBosP4KjyWgeyhDWQbtdKyzNUwNJZ12d9iMgL84vNh1iA7a7oNWRVe4ZC1z6UJr1hnZ4gewTf",
  "key4": "4htp3P4RAC4kSuB8dvtQeM7k6dLSLTptmTWn6B8A4LFEae9z9bHfoDfwV85icmCYKyjBqBjRps8H5T9eyUymN2uk",
  "key5": "63EH5buSy3yP1P4KYjz7KTF3H6dVe71QR1Pu1fQYJtyFRXKBWpwEJtgbieG1iaqBWGRJJLRq7tdyJEFfHtaj1CZv",
  "key6": "4hZkxxtJZSXDnXJjifV8WmzjPsUMFEsZNhA3GXm1AHK2cVkqASnajfLLtUytNpdBSVhQ7fmRB6jStMWyp6fDdyne",
  "key7": "2EcnETfbJfgLVrsCH182r5jTKuAdH91kuefpZq44tENZwffa2YELABf4UCCjiFArApP7UaKW8KQxJ2YeA4ucuacz",
  "key8": "4uEFoBQuqvpdFusJQFQUzc47oj9XJaQoesQH6KFDLW5BkTakDgKL9pYAB9rHknrEpSuJPcyWMcZKeKWzuTc5o76F",
  "key9": "26vzEGw9TrMC7JS9gQ82f6JVbHwktHmDQNbbkZAX4jRHnjME5wQGoJMVesLxnJBHdwkUiTPZp46nwrmBUdkA3ZE3",
  "key10": "4V4xK26SJ2ZPjyc33HjU4Uzbuc9fA1UW9oCyrjEuei2Q1JfoTZVm7HEuH8J1e87e9sZ2Ns25tkEEcTULvDu3xuAC",
  "key11": "124zwLmCL67ErfE6dTKZc12k7BTJjh24RM4vV7USJUxPEQfqtmQRyKYAEGbBDZrdGb4t4mQgfdxHDySQ4eoJ7jL9",
  "key12": "2akd8iJiMXDuzfgUE5q7ujjcEvT6ma9c93N1GtF4zKYLVWiishuhLD5jef9UuQtxvJwhb1HXtdhjZehWmARLJY4H",
  "key13": "4EfhaozwzkCnojBASv14LHymx42KddSmeZWpmmwTTy5v5SnBoJ3JUuFGgfVTu9CZopgjysADqEBQBEsiuygtCZVK",
  "key14": "2yZop6oh5REVba65sZAQQSSvoW1kjKTkEzHxDhw9BJCxoPqLCapJKSg42mVjHBudQEvWigy1wDK5z2xJ8uSHiJBm",
  "key15": "2X5v5q1kuxaZv7MnPfkBBDFhmCijC6ucMUfq9UtwCVf8fatkFS9xJqEfFAAz1g4jHPrCcBAivyHj5w5s2mhxkHPf",
  "key16": "d3YTaGuWRJjcy8DbKGDLUdczVb8mbn3zTgJALdCtojAjwjy9Pi9hB7nU7kufF6RRG7JfvRiiFzoy5wpTf8PDuW5",
  "key17": "5azjM9YBvYraSfGf57qNW15tKgJ61ndpDbN5qnH59tkcGhGtpjbbX4fWu7g9QduENrde3vAoqLVVoAmtXAFXVWEz",
  "key18": "5Xanmn1Z873GR3DYmYpzDRRLNnffvLS8tACanrLCBUMjy6yavyMKGZ9kaTkCSmgLSBwGHQQ2YmeZNjVLrGJi7HeP",
  "key19": "3JzBfVWDW6rVU3CkzeCUG9VxrJKpqbHXfjuayNKe9hMQjeEvon87eSBpneHVLbnH7dKGbikV8vL3kpSLhdzdPPaq",
  "key20": "4Q13LMRmC3yYfGZF4z6NRb4PiSvSaCFT8eEr2KD8T1wXEhXcJqjyKGE5MpSPngmZMXyd8he9mgkEYB8ECQqAu6NU",
  "key21": "28SscXkQKwL19aK2eEQN9xpKkouDjk3fzxkg27e2Jj33omYvozHSYCwn3DsbhQg3n3dyPayeEsUwbWfALVR3sTJh",
  "key22": "5qSeHT9okRaTr9NbKHazeBsJ8MBjTQ3fcZwvWzcyFatJ8NtUzmLc3h7R5GsHcT5o7qvGGYBJLWhmZUVRHUA7tVeh",
  "key23": "4AvqP6X6ft2NKCzFBp1QxNJWTQkR1AsJEx7dmgDm6RZenb98WJuSFTxAz9EhgucJEG4WRJ4VZCmQgGB3aDVamKSt",
  "key24": "z7fm47jEqAiEtXmhQSBkcWMuDHXeSzCWBZzD6wnFWmvzKouL2gCDiibmwTbLb839QWcPQJf8UZDVekHtCwH39xJ",
  "key25": "5VuVYdELbp2AuSa9boFDBd7M1aH1RKyRv5ZdRdnvbcB9HxkbM23iAgR4nB6LpxBJHMpeXaPjW8wzjHDgjdL2xf4Q",
  "key26": "BfMDRoMvEoCgj9FURwKJiqyTdYm4mDZ2NqHJ5nZ9EZQQbpV6NXY8tCkU9WfkqyJP6bj7rrjVM3183PXLKwzc2YQ",
  "key27": "5uzcNguNv2AfdJp8EvjZrHubMeUkjgUchhL4nngxvkbqRyYwwiB8JdoDUxaxuzCQXDH75bEorxgmAxWFFxiuk27J",
  "key28": "4qiXcZXDmEnYLRQFRbVNkwcg9twuayCwJ8mixqPBkCLJnZsLZQ9zKa4mWbcVNy9tkrzQk1BHEWwqoqz94eKmUUdu",
  "key29": "67Kn7zvT1VKzLY3Fftg6rbjf34eRrfRFGVMWPm8Cc3MVRFDCp6bc8tpsofURdAXTfHCt5VWqyEwYDxGkGBAL4qcV",
  "key30": "5NPXqMAUUPjw2AfeZMnwTCmsSnzgDRQTJpyMvHNkHKQSEUL224PaFMmeLbrtvgXgJsMLPzwXrgMLpoKoTvEBBJzt",
  "key31": "5EzqP2CdvMNK6uVfykcEwAfTuR6w31cbxq1cP3ASeNnNW4FpCKot2mJGAzfmrJpMtpQzxG4EJMNYcjfM2WxdqZjj",
  "key32": "cuVye94QHfvxPcMJZfp26yR6ZQPvHc4xm3rC4wzK5hGScDcUsxg5g78jQW989m8xQaQPFNX6uJZ4sZybBZFqyUR",
  "key33": "63aKEsZ2xJZxxwdgoTqFSMrcb4CPgTBy4sfhYApLsoFETJm8ncN4ZxUJkWqfupwYeUzxfHemXrrnwdnf1eVvf2SY",
  "key34": "4ZNwA95ddjXreN7KsQswAAfPXhf6gfVavA55Uk81YcgYtRZQNau21AcxR1gS1Rr2kmAxbzUo6JPksda9p7vfiWkM"
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
