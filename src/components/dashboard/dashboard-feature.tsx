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
    "2jcrmhratHjVzjmTn57SfhyFsfGnkFZgZ79wEbunoCiCWbv9uVYKE4mFdRR3Vo4CbUYcfGY6o1xufxierV3vuu8y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3U86HMyWUZnQuZHCx41M1bthHJYvPGKqoNc15nweEtPaL5RTuYoj4Bu7zr9zW6TrVDoNMZuJkMDYAKgVXcSmmmC3",
  "key1": "62zBo1oXUvutcA5DXbUsZJxQpfDcfMC477R6wiZTRFnKutDwsNnZd5QCnhHNzNEYghUFn2HeCKaZja6wizrL2CJV",
  "key2": "4Gq4VzGZ1TaBSzVFBqnxbVL2RMjm7Q9miRnQ7cQob95JgTaHAsmug13Dpg3p56NyujAPiQWzotZsaocekZ4f2FSa",
  "key3": "22mbLxCNeh8uxBWax4nKWufyRGFRr6C5H3jVufs2ZfZzcujzYAHEceBMFk5Tx1LEBeGhibo1nBvR5KaiTtYw9gbw",
  "key4": "4bPhoDLA6pRUrvbdsAEeF3bW9HGurpKnDMcuP1UEos7nJuooLo4YqNyTxf2QgaQ69pQV6Jp6Qw6Gr8M7U1RZQSCC",
  "key5": "5r72EqCQ4kZLvvzWoHbG7Wm9ECyh83gzWGShpjmJp1LKxTqkf8RvkXrbsDTVsU6fMBTpBtaKjHVRtWmLXKTtppFv",
  "key6": "2oBuc7buywqpTgLPhd6zmFHUTC1m2aXfavJTjz2n3TcqGz22o6wRGurx1AfJYiVAdyYchXNVBWJWBt6L5yY1KMoa",
  "key7": "2DudWNehJ3wfYR2NtSxqEbW4smkmiYThCMZ3AGvAxVzYvSXNzMrPPWs4YdVqyeSAPKUnA6XKyicuDLjRvduCk9ey",
  "key8": "3aTSv55JmLtNpSK3PBgoyBrjr5r7AHpUtRey8sdpeSquoYwgjSxbXuD8yGRunGQyhokXChah2Ykb6BH7kQnq61mN",
  "key9": "4CvLkum2eTuuGWZf6geWy2PiXXQVsEiM7Hd9bQ3gZxaYszXEMZzn7hvVnSq7gz1WTzPCoH3QSVKHsDaDfHxHkCmq",
  "key10": "5MJu3uxbEBxdLAjYihtWS7ge1rtqzD5V76Qw44j7DzDE7E6ZErSL9LZKThGhLAUTcV28MaXWCa9tZ9DGr5CoRKzp",
  "key11": "5ybTutB6psZrke8xSqxa9fVnZFrBpTh2JpFCryhSXWB6TLASXkKz8Xr33zq6cP8qKh7NLcfAPGxAxMQT5qKdtgeY",
  "key12": "Lp2tTg45ED3NWSB3y3azHcYuWzwMVWa3HjQMJhaxR2aRxyYkSGra9jtpndkGpy32t4g5emz5tzg3NDry8kr5tvz",
  "key13": "3Ppe4f8gxWapycHkDmmHd49vwteyuGRNCgciefwNqFn1VuQL9GJPnpk1gTyyb7cX7TZqttwG1VbHSVVWrzvwNdnp",
  "key14": "2vpW5GZWnzZRQFvKRBsxiQVoweM7WSo7FQyU4yXdxDRb3Hcmnxo2JiJCfboZ67c5TvxaaLMh9jxuQP6KCnD7QM1H",
  "key15": "2qRWWGFTZ7hLU36pWGaJfxib2AupZHHMmfZTHZwweRW4eX9SJLz39iFWAe9crNDsoyCMiF9VmdfG11MR6xJEnitB",
  "key16": "mtDLj9DJq6Gqq2cfGW5hDTxeP5HGE8HN1pPybCBb7EXUsq4DW9mMfKkBK4C1NnPYQEpRZdtZVij7DPGFHcZAhhH",
  "key17": "5ToT857UsKfnJZSwqbvTrmU3cDpS95pZvZKBqRYbZMFDtx8j16qn8GXqCvo3FJ8UGCueszTjjULR5x2gCbhrbaTt",
  "key18": "4A59j6C8W4JtVemC6XpKkCFVhwiuf4pVvoiRkMHL4q86cQXcpP6hJYrNfx2zKrfMSgbRKEapP1qFyJgAfiP381M4",
  "key19": "4kZRNqfEExZonNzwfqu8fvZFftGLz2jE7EukBWZXsTqMg6A1EeqL3wqBbTSasXQDeRURbUeHVab5JwF8TAaGosET",
  "key20": "2ezrxXLQFzxDDYfsLiLRfTTsBzyoKKRKnWMLdbE3DfzZTTYnPAUzXRygZt4yv9bjfDsgyMs3kmwZCn7wbkCjRYf8",
  "key21": "3pJ5PGmYquVDuFWLrMh93UCMeDMuHe32xZDexA21R95MnLjp9BWrNe4QfiCeqXJxC5PKV8onrPDKYb8q9yAqS58z",
  "key22": "5osQHMDJgQk6zQ1LN2aEr1yVthXuHNohnMdH9JrY5ifDq916ptJikko9VomFaQFfx5t33Sf5KF6wXYYuaqFu5vJc",
  "key23": "nqxytvSSwhnhaFw63ySjarTmPHLY2bEWGeerSzuXsakd1DUAjdDoHMdda7XSptaxcvX2MkEghm6sbf1ztMm7Kja",
  "key24": "K6jR1WdaDBKJpo4wEsGXGs8DXdV22QuUCpsYK7fVbxMqACPXJV3gVmY9A51Xoq8mXvzJmfgsi3CvJXxKq2cAYNV",
  "key25": "4SCEkZAgtvdrAujWjG5ZHzctZVJYkroSiayG3T9y9Ee4dJpPW6uLaPYjoBXBYZGZH6U5n4tz9hutLLNBj1zuutcZ",
  "key26": "Yx2vEEammioqjAWj4BRBbotcqttdvxetkwyJTpk9odPx36W6a5GHhDpZjww6WAJ7NLrzbUsDxsMgBcwDzTS4oJ3",
  "key27": "5Q4P6zrm8EmG3L3epCdwzD7HQSDjZrAQrkkWduA93927cb3YvPVsPW3yn8PFM9Skuu7kxo7bdKREMsD6NJTvxYJN",
  "key28": "58QskYCt7eNsaFBoZ6GiHRmLsumbLcfWB5HgD4R76ALmiLic3A3qmmCVwQZieJ9uZ3erBfVwmP7QUQoyFW2bdBYY",
  "key29": "4Poa5n2bpzeaHgu3FccJpVDAMseNvLrska7T1DN6mQabgWmCWM18uzqzCrr3CSxvazE8pFeDxgBLR6ziiEdMDK7x",
  "key30": "3DrAJtRP5sRZpQ6o7BSn1iR78AyjGNAuc8CxSZHjJp6ERh4JkuXoBX2RTMajW76wwMLKF6XHKAHmD3J2BNdiMcW5",
  "key31": "5rzQRsNt8Ge3qafeqSHfKcSPtXcrpnqBMqYegWujaKUSaRiYMgcM8sWd8oCjxHtbFszHXo9JeGzF5aCAbuoNf9Wz",
  "key32": "2XgHsufqd9xQQQHWDgF3Z48xrkurMPaoiSfUBsfobASLY23dz3aWiPwVUzPjYgsH9CuiQ8bMYyNXKYo2jKg4RZxV",
  "key33": "9b6duoLDpf69nocEuXqfQy3XhAMgPzmMjiYFNrRsQPqcx8uWYbHoWAqfDy88nnMuVr5vHknGnp6yUDpBujZT4gU",
  "key34": "5tpGxEcnMUQUungEmuQ6NjryMrZvwdaepaq3z6TCxXtGzBGZm9HiyBfgzGgWxizNRRRpp2SFi2R3Pqvc49QMsahH",
  "key35": "241T2jJA9tfcrMhUPXDQPbSYPampzVqDNB8hKswTFbPaD2nSsGaAgqmmwa6VHs3HQMi5RV8uPKhFs3bhDDh5jM1d",
  "key36": "2TCHJSq8bHQtwxpUSsBJa9itDcUJ154kXdXK3dCJLnbB8xGKKir15tajMw3okyCzjnEe1kc1u1GwcWqeNoktuKYQ",
  "key37": "4o6TrrPgBhwSjPU9Nxnfa5ACSqW47J8byQF9r54HuVyUZA2ijGgqufqEKLhG9tHuh8dM9QnWNcNe1Jztws6JVj5i",
  "key38": "62WmegYRcbYX6u9HagKvCusVkvFRtSVmM4eeTf1MvJVD4P3G4ZisLM55Ez8duS6VY4oUiD5ZbrvkNii8ZtC9ozqP",
  "key39": "PGXZmaZUafTBTQ7thJGGhEpv2Ko4sLRY7huqxLwwFYgK971wBNKhsxZ2XYvtBqFgvxekqPJBScYQPSEhV9LaQao",
  "key40": "UrHcySG7y4gLYFLruzs9k6kvveWG1kr2Y9K1y2PyXAZkwojohMu5vAn5NzTTEq9UTQxQwrZR5mVMRUkhREdojC6",
  "key41": "2qcgWE8iFidFRdAZ8kfCMoVfdKz181QhLAaUFCuXq5Mhp654P8qAs2CszeM5u1WJmA5ShMyFnE2hMHjAZ54CjyzC",
  "key42": "33wo4fBGMjSW1SNcAqxondLbtcdVbYHJtTE57BkQjnZ58YivL4cH23RG9oZpaAzAtyYCkNKjReNxTHruxfzsufUg",
  "key43": "4T7G3M614RQycmupkW8k8fff31EATPvaP37EXav3xw4Lh2etu3SKyZtgVzn4w9g7aqha62CcAiLQdqBHyjNMNLXL",
  "key44": "2t8qtSFDwDqQw8zGwrtySr9tYXc2658CZcCkWiwN75VYgUU1mMGeNun1Phk3MtgNnPvZXZB1ALzeaSp73RnBwZDV",
  "key45": "5Evt54TBPKz8QmAEUo1w5AUkJuUM3tfTwWuH12QCSoYBLbNtnsRT9QUBxSgUZvtEZxz8vEJ9FEroKQ6C1vExmEcy",
  "key46": "3c67FvumgYGbjKtzeWwCkoPG45DqRRgtFQJKWBbLxQfxgTNkmq4NiRGvurodeG9Wg8d9Uf9csmUFxTz7RLshXkVP",
  "key47": "2U6XGAcokxceVX5ZzEC58LtyezZZ8hLsRGecDZirU6PhQ3CvVSowkmwKgMijqusECp1viykSbfHgoZg87ZTxoTW1",
  "key48": "hS4mBfUfaTtUBeC8nYKDFVY84gybkziQ51shbEJiu8B1tRZ7P4Nk8HPLAbAzKb5mgyb4qyX8e1v6BZTCWBT8j5r"
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
