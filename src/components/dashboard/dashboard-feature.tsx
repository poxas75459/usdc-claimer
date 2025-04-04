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
    "5cP747j1aRURpHrmLxBgPAUArb4mJkvsFZU7QHMSiRDwMvmbA5EzQdfCBQ6oWY7h4DUawezwFgzq3CrEeosrqS72"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3U2EmAT4HSaXjtca478mHU1D86YKRyDgyRbSrgRFMMbM6zm3vm4FkCQdyWe6ToMfRmKCZRxWQoz2EwVVJCnZ9UKP",
  "key1": "51cXU5Ut4QNgSpwRX6rmEmBgkSxf7WMwD7vtWEHpqovTihapgJbQHNTRvnuhD9d22aakpy3ZwChJnZhgPWx9bGUx",
  "key2": "3v9rC8jskr6kXNm7y6Vh3AEYw4WViX1eCtvdoAjBKUENEyGQdwQSwcJL5LUWBuXHS6JEfWcPERaqhJ9LtLgWEo4q",
  "key3": "3SR721ip4JVjdHruqkxfFkAFd2GE3zhC8x6ZShoJJyzaqPJ7Pkxot3SWNBQhQbi7sQAnF9XP7sM7TCGVoEUWQoDg",
  "key4": "66TAth3NekrKQ78TU2nuvWj9k78aezCVaWs5fWpov8AAhPzDzYN1tA9eGT3jUuUkqrNTdBPnE38ecpbLDxPjpSQQ",
  "key5": "2XE4Qj96BBjjrFBRok28MLNqWBCmM3cbG7HEjPRV75bUxCZcvKkWa7r5ZQGLTYmZTjaDXqEpFRG8VTuwDaE5caKe",
  "key6": "4v6tHMfSbRMPgyNSrYkYEvJr33c1tmUStdws1c6qtUZNtGLctKzeEStkxndbmUtegDWKVnLYQvVs8wP7Eqg1MtGB",
  "key7": "AnbbnPYRPCVVqfhpa2Dif5wQ6YcnHgzQupPcrN47AkMcEFXWp2B9YkzPH7kgMzmPstMHuKMRc68GUH7GJcantd7",
  "key8": "3n8Kxv4qK6BCcydhwZGQG63C2zpR6mXfVZwFdoWsMNrBdpU8BpUYaML4FN7yyba3dWhXaUwbpRN1CoHBUbQrDTUw",
  "key9": "3YsGGx3JDEuBLYUs126bpFpNY37QQAb7Pmnqkhhadt2jghRBTZ8of3rsBtV2zbucHqSxnVAtWnQufRkDHGUkCsdt",
  "key10": "9zPDfHjMZEt2B87nrMDMonVdDovvAic41Gwbam13d5FoSerc6wqHpDSPDrfAauNGiDwbivoHHxeYPzLVYewg1HS",
  "key11": "63CzzTaAHPBfFdMWH9WjKEyy1r2BR8C1srKRZbPftk71Z9LEiUyyBgUDU5rBgigneV7LzNwcFtqDAW56eVTBbSk7",
  "key12": "42eokvLZ1T3jJpJGesS5fwGbZbh3SHYsCsfu8Lg5LabBR45u3FnVDD3QtUbF2mXgXGUPJvkcDHHEi7C6tDKicmd4",
  "key13": "3iKbMxQAci76zzUe7fhd6X6fur6cttdNCd1nzdWiUbhewWCHAzzPXXTqATDCEi73cUPhqjNaVKFXZghr8XWVqSQA",
  "key14": "2FSCz3gCDB35cwy12JD461XtiUwF6dMJe1F4B4oTw8uqJovRWWp6aNC6nUUrLrCM424F3fKANyegQToGAuKzwRHn",
  "key15": "2SAEds147GTNoCQZdPSk57GitZQSGDjt6RJSEhyd6mnKFYAYTbJs2jHEcqE7R7YCyKHYQjgDdEonFrfQZnbjUi9Q",
  "key16": "XYHUR4pCvw7VYu3xdeiwF4AUZpZm7nxUF1YP7ubJGEJZopAGxxdP7Agv7dyy2PQfLfUvSvKJ4YV8mofC8gsCop3",
  "key17": "5PaZB72AdurRKXFydWmUvLtd8xYPWAyLnx2MsCmZ63tFs3WdYWmM5Bxrcwpvwsq9ouvb3UJ7LZD7EET2dwJTBE79",
  "key18": "2poFt6HFtMghSArvUmFPDZXFPyMoJFv65a8yn5VbTMFP4kgMRjY1DFmWuCSokBkRoRTV8FZEytwewBwepGEmGxcF",
  "key19": "5AR7i1FoBKCrtPFu5Fhf7cKxhAfxSHwGMVTW8nphQrM21TCrruyAQ3TdwNdyevgNcNUxP9z8SMdtcV73oRkGVKrn",
  "key20": "2B2D5z7AnsUc2tSUGEaiFsLxwpzEMcGRZxNJfhmUgJnksMckDcPhVe5vm94tmgvM13x9ii7VfYEvAQqn9judoLs3",
  "key21": "67Eqbz4wZ98fUxqgmr45z4WppiRs3eEE1WLr97Da4HRYJCfgs6CN8HYgFT8ra8Tod7tMnfGAnhLcQhweEiv2vmTe",
  "key22": "63Ja4XpYuzmWNgBdJWK63cZzcXcPum5HxuP4GLFdKmH2tJyhgNphER9LsA2TWcvdrtsfJxAw4Q78m1F8bSHb94R5",
  "key23": "4wqWNLqGyB9z2AfF9uL82tUxoeG6iLXmfjgWy7pVMfxB5kCVdFSyHYmPK4Wm147JARekFpSkvwk9PgqiSWtctEkq",
  "key24": "5UWGur5P2YojqZdafcLawogSpmz3Q4JED57N55YfWYgnKDT2kVGZyiHeeEi4XgZfTm43pVzRuLTg6Wm5QDHvWSnN",
  "key25": "VQVFbXRDbotQuaom72WsNhPvgpdMPXTE8MicPSpPN1FzekmrEQ99RV7ZJJCSXh7smqJRpnEp5DR51zby1YCdrq4",
  "key26": "5m2uiJQbwxdRdpdBKuCayo5rbyvxnpzMMQz5mKtcCpzSERuzVyQ3mnJt6JRSvTq1qU935xvRCGagEHw7gpDxDgms",
  "key27": "5dyMUz4DWhH5hqh8HRu7CbYfZ5aHsqA9eohFjZhXKq5nRwWSoCVZ7zf4bEFjcpd1JcpVHQuGCmEQpTg1JYZASdVB",
  "key28": "4FojQej5KTzjrmYDY9LzCZUfVTYdwsYr18ZvuFkb9s12iBb53qt6t2BYqv16CCiV4aN3Wd7Bn4MtA6wqxqR3AjGh",
  "key29": "42ppKLa4TAjhCfHirqPxFgNiJJW6e9BMwQxduyLt17hKdhxj3AqXHGy2LdB4YBLfAxdrVUyqRtHYRZtn1rQ9Fizj",
  "key30": "4BLmw6CTdEvjMhtQ7SSA8ViUAUAi8tEPzEV6s8ztPp5GKw7pptDJvgJ2rXwZTwSSu4ZZ23UiStj7GpbNR3RBCyZK",
  "key31": "2Bb6FkvNAUax21ZCATvmtAqihtBaxmCfS9D45uAVtouNpG2VeKe5Z9FpTyXBA9aSwNafFVjdSvyLRSfuWonnebyq",
  "key32": "37N7N4kxacYWzCPb6yyb8hFZ6rijqHZdCphTRZN5HcWGSF7r6LujfMXgFQWx9Pi9a7h45rbWgY6X91LR1c3aLYwD",
  "key33": "2DbueSFmsgNicYanfSEAuttjppdqRT2dXa9SENoAhSssVjHgZRaVKFyiXaHUVW2GHcjhbwfs1ms2LTJsxNEBunHH",
  "key34": "2Um8PtCeRUsPk55mvErnWDXGxDSz5BmWPThrEvERihgaxvCZq4WLv1T9AQNcUGYZy54QZQEb5kqJr4DuFcdfF32T",
  "key35": "2cafnu35wnpynqaU1a1YVJSXmE61Jnf4AN23gRkzmFrF3xkT5b8TSrZ37R3XL8NQyCYFQKVSi6dErLTg7bZ1Aicr",
  "key36": "2tpUptn1HpowPkgXja55vEBpVGh4uZcY1RzLYZKDfaeYBFEG8gTfxR7fndmya7LNvtwTLXE1jD9JvueUeiJCqmmc",
  "key37": "3Qjj4zVoJSxH7SqMXb8qyVG8bPHhqyPmQZ42R3RsxkaKJYroDopXmNKz7oadWEumZZ9e1G7xub2ZGGBjNHQasN39",
  "key38": "52XK1NQ45z7p6h34EBLFtFsTTHfJXcBT8TJuKLDMCxMX7vzLaxNg9o5zNAp918aW1ztqEBaVN3aQvJ4pYMjeNApQ",
  "key39": "2xH5UBcokmQpnzBf3Wsigb4kznege1UhP79fFuCG1mheQK6kHScaAWoWn6AS4D9ytbb6YZsrfqeiZGGvaztjRjNT",
  "key40": "23Ys7zkXLPKpP72Up2aMvKRsZsXGcpK3tCA6AYMNE8d8N94DHy4TJUsPXioPDpiD4dc3MDeQEFSkbrFPSvziEAjJ",
  "key41": "5GtKZXyvGNnJ7Z6f5BJk1cAZe573aEwq6QxuhDf6oaukkqfiryKJ5L3JzyfnoaEafTojrpxYvRYyDMHAenZf7u5H",
  "key42": "2nzsFBskHv7kZWzzmz7iAPZnHWtNsGp7cvbEkEzKBaDVWBhZtAc4wNKCgs8NMh9j3gJBK67tQjZkbW3Y2uQfALBD",
  "key43": "4KHvZhhLJfu8bfw9K67ZkCDaxng1aQx5jGt91tvmMnYGd6h4VG1XCHNXb4Kmzpn6gnuYiCjvjZsePXnexQv32GGJ",
  "key44": "45dvkRKbWB3QL7G5buqxZD3bQvs31BuXaagM1Q2wFfN1pSeZBW6QkzQARTVpJnzbRV4Z5A36B73KVLRNQV4tJbbU",
  "key45": "5rqAAYQXz2poAfDyfiSbUGNX7MP9sX9JhrrgvxMeycadDx39jfHbr3jd65FLEaYX475iRg4YXmkeeC3HZQ3WMfnJ"
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
