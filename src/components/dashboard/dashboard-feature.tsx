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
    "2xbt9757ndhuFxyLcadmf7p9PVcXbu5dGaDvEWHUsU3ZR6e7vgGgczZ1xQmyxK8ivY1RbnXL6wfNikwy46sRXhVf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Evixvw9w4k2em7XxZoy1HnD9XP2yCvzRexq8izjTRyJc9SfiMC42aPgdhnLMkDYJ4zCyCVrBNSCE7BiCJRdv9S2",
  "key1": "4gpAQHV4oQ5f6PxLNASJXWFasDML2sMSbBmX6qxxJLh1UDJyuCHYqTaWdVKPw7G1D1H2yqjqrrnwE87hwukF7rQk",
  "key2": "47G8uRJgBj3ryzfVNpTdg1ykXppWA4BE46q41SchXVnBoD8pX9miXYiDfGzSh4xjvPRR8gK366hXgifZAeto5Ms9",
  "key3": "5EPicJkszPovwyifXqBuZKCFMYd9p2KB3ed92VJg4XyFBiGaMfRbmEdjGzdwkE9hCpAe7G41RYgJzzPqcQJ9zx5w",
  "key4": "ho1cFhrgNug2Ziwe25Fpf5FcBZ9Z3ZeiRMcekDMjo6QscMmfiATMNAqQqLjmw1Qu7xArkqSwUyzyNo15H1qkB9H",
  "key5": "3E8q4s1kuuJ7bdiYDAKRTqchr5iG1Yx9BdMBWZoRieNR3h5SbnzBKYVBvUK6EjWARwbznampBdBZf1bzVpaoHapF",
  "key6": "5n8iDbGXdLFQmt14179wPviQvkPEusesxxaVcghWSnXNgtikVCz3EQAkz7q83ydC5gcEPHc17bmxtiXFYRqm4D6t",
  "key7": "2F7JKiBBHvxjM9BnpC6AxKWctYjjY3p4baauWEvfgenQgU1WbeBMe8p2QFD8z1mH5jR3jPo2iFkZWVqB2SmZBAgV",
  "key8": "Uc4exTjSuDME2TSSXLpnjp1V2ryysueeNdRHEEXotq3i7fWrwAsU4JFbGZJY1S4Hs7sFoAgkCYB2uciADwsaJNd",
  "key9": "2m1Lzh8vi6dj4o5DWwY8CcqvmwDEXhsEC4jqngSdknD3VbxiHXNmfCdHw2PCkHT4cSWE9MnGJpGf2w2937vYFtDC",
  "key10": "32VxMoD9kzaBjB4yF5ZXgkKMQhwiXQwp4Wm88XSZDb18XkGJUpenPgwrjagSjjhTp1NfZWfYKMB5b6AnMSav4JRs",
  "key11": "hbQu9cqg8UBQ8RicSjAhpsRAJ6SZN8V1SgWA6UyFoaKkyy5vGDGLg41iQVgrJdijcmUGiCEfDX47oLLevAmLumk",
  "key12": "2MjfegJq7zuFDTE37yJxhvqnPUV5m9pkHvj3ojzXHBWS25dRGFhLAX7hB1hxrby39YzhzVuDZqYmozFAXs8npS11",
  "key13": "3X77HjTwPE5q85hYeXAhxLie69eZ1whkkKxQFVi1wqRL62iFxYhRYb9UUoGkrC6cXyAjc7LQscTzyJyyrXgL5M8a",
  "key14": "4nRx9aL5q4s54WHeCZdBpoFbaRXZSM2oR896XPQzMt75hYJEbtP9sCdCeCsQ3bF5S3WwnNeUHvfrEAUscrsL2Vtq",
  "key15": "4YowqNQoAxkEJysBDJuonfbAsuz7q7T9XpXdT9xhbWjKX9VakxHteazj62GUs4yrxVZ13odXdMLPhCkHqiAGki3Q",
  "key16": "4LGTrnCfYKaFaWg6bR5TyoLEv96ho7BbXhSaA6kscAKe1WANiLcHDVVnn788c3eRZnDVxSGAti7gRXQ6aDdzQknT",
  "key17": "51SQsoVKDcxzWyuiihJFUmE4i9CH7Qrbu18Rngu14Gd1HHokEzxQKK82xasGZNvxVtq4724h7cvS2FGFe4BP4Mqr",
  "key18": "214HEWuCktfcdRQKyQoLLLQhLg8FtWMZ7XiSeULFhpmn38ZhyEm6bR37m1hzH3nWwKc5AXD8BVr56Foiu6qAsHwy",
  "key19": "KTkyhrjASqwFhKi4DAhJeMXrZwaxV6DafChn61kZiriZfyeRVUNw9YcDFmbCL6MpKg1o481Ad5y1Ahu9zxy7Y1o",
  "key20": "5gEp549h1VqnGAUCAMEf2zSwMtkJ2uzd8S8qLuErSTQPmbWc9brnviCAUn5vur8EDPKVLtn1LCRGAmCAoVLpwCVC",
  "key21": "5LKWxCukeTfGPRHFZWscDKhvbBUhX6d7G8E8y57TbYZgrNSRHnz81nWA9QG3BKngc9peZfqaJFxDN6NsEVDLQ7dd",
  "key22": "4CPjGyrVpZoyRwbyUnJrqYxGvj7Dxg3TCzqsnq5fktBaVLPSEdA9XJB18RHFWcEaRY62MRvpnTwvrzFBaLNWmqLv",
  "key23": "41b1C5RGmtbL2sCVG8Pju4ezKREuH2zzyPAkSBeoUGn8919rihwjygYtnQCLwa7oaFEnD4Tq7u7XsqQnzggtcxd9",
  "key24": "31XChe3CSsypdjmWFYBTMT1S1vzjCDeUX7cPLZahzpYd9SQyzjk7T5Zk9wfARmfTU1Mc9BZbkR9zz9swEcv3o37A",
  "key25": "Td42yys63jydKWMi6Qx3MfEBoLuoSqUoQF9tSxSBiAd7UJ1mCikc1br2z3yKD3tggPvwkabzoYY3pJmZXdSYy7A",
  "key26": "2XcyGnpprLD9JzURJ28iDgKRnCcX3BM4vVir8DRzPpCDTFHWxBWGgs2ggezthHELFJUJCjF8QmyH5CaDSNPVfzDJ",
  "key27": "44ZQtUyyvVYaZW9xLux6kbohGzTDJ5mjGZ5GQ9DkXxX99ys2VcBfeNqs8ZzhLjGPJpedwceoJGsyMw6F95HXRL4H",
  "key28": "3GUqRNVHND5AyiJGFyczrawibZtZyicAK2Gu5fhYtuLPPRUMdC8F4GNVkDuYfnRAM9SasJug4aADKNpSkshHJeSd",
  "key29": "3sVvsiscQxybfmgigwawyfQ387FoEtT8j5gWq2AK82dTJZYuYndVLXhz9JV6RHnTywopvTSU74bhHERRwX3zJHu6",
  "key30": "4sttvBgeptUGVgyQWpjLDJ5mBr4VbSk5Kfx8dixS2Pkc5eqK3S4GqGDBy5zbamjFqCx7s9f72KbzHtUKZ7cYn8Uq",
  "key31": "2R1YqBEeMdWKCp4shfvwRmWPAWWwx8tdPvshue4K7pD88bKgEtV6riHA4NvHuoM6HuxuYVk5Vty5GRP4qmh3er29",
  "key32": "4CZha3SavioVtNrMBmi1pbVtt1jZCJDkY1uxxRbHJEbj37posXLTwcDZTd4TV3jmfLVxnEFyrNQAN3gUjzM1QRjY",
  "key33": "2PHSp6dbsYLJWaY8CEdmQ6gjfCstLjRdGKAE92Fz1XZ1pjTpe1XXHumiG3hzxpaS9da8b4VB9bjpD9DiBA7rBPiy",
  "key34": "9HuZ4U78oASiv8yuifP2d2QCGx6P4VPqGaYhUP91hsUZGK8Kbi4wFEWCeHGA5evteAWAGVi5qpVoCdRCbbLM5V2",
  "key35": "2aQfoP7HbZnMzDUcM7RUnse16WNWW1frjxbjS6LkBKDudWR1d6rrpBoN9sjRUm2TzVCqyidgXE7HFvVVr6CfAeB3",
  "key36": "2FzJh8nYrMNqmEsFFCjmb17Ri7SCgn2PsEkvsqvLxzHEPAEfH3cNuMtUiDTmNK1GdUzm68aS15Tjs9rQMxwFvSDR",
  "key37": "4TRjVCPRv3YpByJzNXbgaMimqh1Q8PNLCdgvMuNgMjJZ2rUDYcEfqDkWU7JYZDq59doXvfJ5QvQRwnoM1pTyJ94g",
  "key38": "4uXujsnfU4paEmiA5cFEiRCf93ZVxmbFugxNTVENjoNMLddfXi8HjP8CDMKm5zeYZthb6gLtKRwNsqFZFJhyUDQS",
  "key39": "3NMCteisFSyMFqcgYGLxMpF49e3R1FHUnmJ8U36qFuboZmYC6g2eJjJUFTkYWBhWv3RD2C5srxpo1GVPb3ZjDF8n",
  "key40": "9nZbBU1w3fCV3ddqSHgs6Ein7YG5Dr9L9HDvUbWFaJ1sXjMp9XfWi9PYsKRn9LBLRkSkU5yMD7gq6VVtc7Tca5X",
  "key41": "3f1Dzoknmjs3j2ECfJKcoj9CYpNSH13gHMgsxoPvbc3thophTqZHbTKBKs9C4Uvjxg6ooHeMud5kSyPVATENj5c9",
  "key42": "2Bh2cNcQ461BnmN5LE3KCx5WYShQtEdTyAJZkj1kGfa8GqpQcw9Ywg4f7Tp4MM1stndZpJMHjSdqc97HPk19shWd",
  "key43": "4xMvPyJAdZyGJbbiBvXm7VbXAwGs77SVdfu8y8q4aandjoVDJvnJUDSjofditgvoeycZcJuKaKAi8TbCjFRroTXw"
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
