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
    "5sekHeYGig45fzx7gYNFJVRfLN2GrFzNoi5nXbgiWg5ttQM9ijub6JeDFt3B5QiiyMVZTrgsTeQLcGmNwFTBWAhy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3cJ9Wr3Ccsz1A2Y8w3pwWHS6WJeRNVGkewy1GdshdtLQhUmgLX8XHDk2WUbDM5FsGszAA5XNdbT7DC2BrxD8Sped",
  "key1": "4NjbBhceULpLmrAmjMUn2DSXoEDBcVaVqVjWDLbhZQ3yUpNtPF7zJr22RgQL9WfShbJ89Lp2uRjddVXACQaU9LjR",
  "key2": "64PbrVsnu9DYAaUNUNipDPF3J8oDC8nw1VkSMyrGx14tQAae54s3rtDdtgEb8NaUK7r47wrxPyzjbvYx11cSK2L6",
  "key3": "2GGBT2qgkiEEpVnfAYVGHsiYvYDc5Ef2PN2Wj3dhJ1pQGR8di7VicPx1bQNZvH4cDrtF7BPKqGW4F8kjXfTme1PY",
  "key4": "5jnYyMVJ2Aut12Gbz75JHrNdZWGcx73U3eRS9XLYN1LZgu47zxSKVDsEqFRfcmdbKncpSLmawJGJ3EM4J7dieBuu",
  "key5": "5VfZRLdPtojnVWwTwYH9GRdL6wMHTCrPkZhV5uDXYm92LxfZ8ny7DKYY2PdDr5pW4zMfGwYP3oNrWwKmnYh1VA27",
  "key6": "4RxfXzXhdhEppbXr9euWUjcksXTJKBbCgXgS51UdHwcN6y1FK52bf4dJEnvGoVzpWW4ndJto6edWiWjVxaJoz3Vk",
  "key7": "26gBjndHvUd37FoL9pQN5s63F36PMr7xMjL2EZPoXRVt5Nd8oDFT8zvNwjzFLYtLdfHWicEkSVtNuJcoscfcLJP2",
  "key8": "3kMNStmPNNn88RX9qmbcEvCXb25RK1j6f5fmWJSgoNy6BkVSvWZetC2q9FMQAxPVkmxaYiPdHuxNe2hZ9cQEh5ta",
  "key9": "4uT6TQsMEdVHkkqQfPyhUKvdsTWk5cVUTHCPPeKAMBXHy327vSmsGA6wan7YAJjoZbaomzLkSeMwcpQKpq8ecPHq",
  "key10": "5Rn4zwj1ESPsCyBuxjQv3FmtKYsbVzVW1jPnMS58q1zSJsCNmGpWohyF4qhZbP7tqkPHsEjBYaMYdzsPc9b2YTW6",
  "key11": "5aqzubRUN2T1YVFL8PEzg4UTkqhbS65ZRKrYNaAMoCYkkT6JV5tKvxAWZhHjXF3rCz1L4DzvJr5V7f4XwRG7D8mt",
  "key12": "3ncS8MPp7rRwozp5UKHvmXvWKg2bRUqNYZNATu4YT42PQrcFhfePrJH6Vx6HYLpqiCiDCFL91uVmREXeW2NVLxJm",
  "key13": "Dzk1DSzPCywm7zbS193nTsMyJsQE5WouFR4HHK5QNRQpNA3mFR5QRocbmTytMWENEQRuJd4UU6x2oU9NaNrZfAx",
  "key14": "2BeytZqTYt9tKDXgBy2GYNZPcsfNpKcueUnVzReKoNzg6f99wfasFyBwd26c3kmRiv4NJqMbvrWefCaH5mkc9R5T",
  "key15": "5RwF3r9jyUf8YqHGZRxh7iDohAVU1RebfyLWvzC8ayWUewRFHU5hvH8T1h26JiQKhUBwHJPbbgfHYJSdzYkc4QsZ",
  "key16": "66u6STLEwast8LNmEUWaAAn6T2cMbXJ1yxHtE71dzVVosbWuu2s6KUeEJoVSVkpisGLfKEtFiw9DbkAtKPbupjZn",
  "key17": "sPFYoAFrWypJpxKDQ7v5Pf1w1z5kRMmGD4h7pDB9SmvemyaSnuSL5TSDW29i7sNuiCnphFegarhZkmghBwKWwXp",
  "key18": "32aQ6oCRyVTJfe162rgj97u22XfRHEQaiWAFBHHRWzsyabD75Sw88Yarh7vNBBQP9m3CgMEi9B12HRD5B2eNdSJx",
  "key19": "3a24V3BPaNGC7T8DERfcvF9e8Tm2rSa7onYR9PZ6q9QDm72UgMP1cCUgo1hNc31AykZZSGDGCSq4Av8YaLehTy7u",
  "key20": "5MjrZguxPMM9yveB1xhTfCgR6r9tLVp3TSxpzWevJPwPpzJPdi4DGu7AKNB22jzZDhuCMvUC1pSGSyREdqFVFPrf",
  "key21": "2GL9RKwaoMU3qVhueqji7SFqtXbpmX2s6ZxXqLwLnNo4fkBkVF4jsHXBuiAA3ccT5ckskPS6EfMfPKRaFUh1mMpv",
  "key22": "5VvrNapvjrdPgaLxcEwT3bFZi2mmmHeGoMFG9wBzUcYUn1akRVJq5Pd4MnpZCkyv5xrLJ6twRHmFfmMFMNiV2LwB",
  "key23": "mSFD1212m2xzVjm29D7C8DeFrg8AiKCMgczvfuzJyTB8fVMFVT2Fo2FLKjGUCALoenmgJE2suRwy8CaqUeFGT7C",
  "key24": "43UDkjoCoe4cELjZx1stupvWaFZBAH7jQDKJsuj3LekRU1UJ3oXaMJZ2rJzwgev49YnXfn2kDZP55ur5LXXfS6K2",
  "key25": "3y4yusoiHN2YNRFB3g53fZ11AuHDKnHmojDzZnAGgLPKMhzHEcibtzwkwe9GGVrz72HLFZu9SPA8iy1NDGtgtUKt",
  "key26": "4k8Z3EXcGzEjLopUqPvBrMGnvG5V1YWNeey5qJhpVg2fA9J1vF5B85pB9c4NY4YPBejtBW9A3EB6mAj13W6tdpLN",
  "key27": "PSuqAFtdq3moj1Enb9Qexfp9cV3rwB2dGj9XEzkvYAxJXif85oNqESHEHrpk86gte2pPhRJfz6tRpeHDdGJJWv6",
  "key28": "52N3u4BRBFqsAdvskS5aoYdnLT6BXjkzYoDnxTKFJthKYvXfFVJCwYPWkoQdrheyVoqVrDQyLfsGTv3HZo2f9mgx",
  "key29": "5n8HGMsSgszKtKp8nyyJcf8QonMAo3g2Ng5v9viavEayT8q38A89xJqKYqEUAevkmEzzZSy4AErc3iuGADmFqL5r",
  "key30": "67ZQHk87uQX8cgjLXFAQQjHShaNJMGVJhW3JHWWZA6eMAhEJoBjZeRUjNBo2UU4ip2KokPf2wJGvK4tgq1uf5U6g",
  "key31": "5Du2kmJyvVC2zFoDAQiA13ZPatgNLzZZ2xsaFSWMZ69S1aYKvquKZxdQpTYGViAyzMbU2aF9RYC3yKzzoEcAQVAW",
  "key32": "2Rc2cc3zL1fyJBANby4nW4BjAF35kPp42mbtHiZ5DNsJwYNhsNqeMcehRLfDmpYJXmQznAjAddZA31EEyUkYtnsE",
  "key33": "PuYjN8ueNiMAjygecTwN5RobTjWf2iceaqYPYamJRRww8q4NnTJvgj6CfDzq2Hv9sn3Tm6HxLQozfAimZDn4Dfj",
  "key34": "8am9JMHh1iTKbfJM5972YVXsQeHQAN1x3TBjwNHLUH3FYFhScWtwSuESuCMiyx6PSSMLZrPGcjLX7fkf2xM93Re",
  "key35": "39mexo9kAGBLs5Xws8aXuXcPFXn311LzjwPkL7rqpcpcMWqjHioCZYjB7tYRUMW78z7ezBVrLitJsXVvjJgTJqRH",
  "key36": "UepYFZq7Mx7y9xvBwvfN24FV5dR2SFRun6cEqHtDbeW82Z5nXugTrzKdxYmx4WoFrjYxG8hneAtsN6G9Db8Vxqv",
  "key37": "2RcoA25WwCPVZKAXXGf8DCnATm9xKPYG7faN6gU9atoXxAvfo1FkjWLNokBA27iEGyaoCLWWNrJ29mp71395au5H",
  "key38": "28usNUr9n5YqELBvPNpHWf4rqz2Lo8qot6KkAJYjPhgxmxs77rmwm47NKuChPk7LpAjR6Udxn847HDNmkJ49CbFc",
  "key39": "5TFdwpkz5hZGqcGDjLrKLrfcTzE5nLUM7Kh8Tgkp9o5kUte5N3XgZvxHuTNwa1a2phXquvuAgPd2kUQVF7DjR47E",
  "key40": "21CJsp9kFEwWPWASNBEbVfKxzsfVGReAWbgNhymxNdPvA7vq4UaMbWF5BcDo14Dbpt6JNPZ9RveRiX5h3VSPTtJM",
  "key41": "bPKRn22fa21Ex6YF5U8mMEKw4WiQKun9ZMLidko7AANzHg26aaDkqCEZaXgXLxKANxYPofzRdZGSn9qqzLcpjxY",
  "key42": "4AJ2zPXEryNq587x7jn3AaYi8de8M6We5mKM4Hi6A4eNcSmtmRgyhpR8d8V5mXHz6DdHTWagni16jjQNX5qwadeD",
  "key43": "2WjgtNBPxM2DfDaJsqXP9zLopBoYdypkov4kvdevoLsacCEtZDgSg58HHDEiWMUA1Y9jhbJNjpExkmfcbxsX9zjV"
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
