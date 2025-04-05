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
    "MZLWyweWc92mHVcW1t9zjcZ3Vty6RV3X7Htcd9yXmDQQZyipnHd3bBFv1np9Uwqkhb3ufrQGsoNjYwdqzdMAJsG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "c8WfGqvQjDudRfyTyWZxKSYkCh53ZGFxzeB5wwnsY99SiYzYf71E7hs2nTZzkj8fL53RbtM8US3X4PdE8GW4JG1",
  "key1": "5L3deTTqNJxxUzii8czFs9QPPvmsjPcFmc6Q245bx2aBX3bJZ3vsrMimDjKW9ibFqWVQKUixKPrxVTXwauuuEiHY",
  "key2": "91s3EwDWbiFYRaUpqnydD27V4SkHe1ekXKXA2tKL3c7WPTSTtskdxddemCLaFox6hkyJtR2DoAJemRAqk2HrYh8",
  "key3": "4JiLgQsVWDRmcg5X6qaktXKHVwTz1FCAPFamU6yzDFKtFaEYZwsDLPhwKkAhH2Q2BXqAWQUYdYUuw6EoL9Usnf7z",
  "key4": "5roDxHvjTA5KnAoB5tL71c42C8eKPg1hw2DYBWAQ8vVxvHeeGeSwbukDTndqt1qfQkQDsc3wdwD8qBrwQxTBhAXr",
  "key5": "3qktq6Nm5NDSmiHcWdpfhmWfMgEpLyfgAguJL6RBFs5JPCqxhiWpgPDewKVPoQqjNU7KJjCu96srvkHqACtpw3dD",
  "key6": "4qRBR96rqxoaP32Dr4fq82BA1tK4K9kpKxXAuH5boUntkBbpmf7bj3kehFxw62jLCrfNANJHnJjvh5AitMYjsorY",
  "key7": "573KvisxzajStKnxHx4trfruNtcLrwAJAhysTLeP7SmNF9Ja3AawRWSAJBsp5fXXLSJzvRWHVHb44aGgupCY9mRa",
  "key8": "4zbBt349aeHbZNucbQzU217GWBM9PBKABBZJm2M2Rf73jL9RAx3gJFv65G4mcQTcBNp3orG8pYXn95nnLaSowTh3",
  "key9": "4jcbuHNHbx4HVJQgH9jHvC5yb6rVVFJ4miRmivhnRQ8iD2i54QVMCi16WyYQ1mpeNcKCqpZwFRGLqFLdhQdwgAtY",
  "key10": "3WK2ZrJqFA6BQJUGxwTc6Vyh4tXVwgS8x969jZcCjD4k1SC4Ew8KACeHujz46ALQYNnZnSprjzQKxVajrCCXMx95",
  "key11": "5hANApvVceARNU4LHK64ho6v4j6cLyBbCY2diFZud1nLKSMdpFfT7jCTjvhvfnKW4GyFsw4aFdhBtvvXVHSFzszu",
  "key12": "tbBHBMNTqvwQtfRBXmRxwVexPA8ahQc5s1jkmHdy4kDvUyT3SAZoy3eW9hESX5XwBRvjAF9o9RZSWc9Bi7w6HZx",
  "key13": "4rB96myUTi43hzXUkFc2aP9h36XYU8iv7i65CZxH3p94qHvtGDFbHUjtWDFC6cnFA3yvBRiRZQpojKEjs6ueVwtt",
  "key14": "3H6BzSJWQzQNSQoa5eV1kvgGncqZh9a4vvFW7LDSN93rfs7iTcouPQucAJE27whtA7q9mry4odFs1qkwqtsbCUtz",
  "key15": "4wkB3HkPEUJwUfFqyNsQji4u8QgryyTJEBCh4MXu1htGmcXYEpqxnqxofwjztfFLDacALSTjHBHAmJXEh9TiiAZb",
  "key16": "vdGhrXWYQSNc7jdP5GM36jqngeWfJBZykPnvus8aqRAQpuZErzE4vgFi9zDvrpLpnGjTQCTH7ra569wMGcGs4LT",
  "key17": "Eqi7ic7aduynGBzTqWuZrb8yGVKMYeHC32AtyyNoQUwzsZsuWTBfWXPPA8PuVKcRkmffyKAEsdTvad9km5F6KL5",
  "key18": "2nQguuWFZ5QvfAWtqKvw1V1Qx86mFmdeNmwJbxsQmLg48x6GHx7pQgUmdg7nomoP5fD3wjMxyUrGtccERTZ8YxyZ",
  "key19": "4V9pLgZwyNyq4vt4wyQ5tzQ2f2wixmvqfqHFRMM5JXmEcgzDdUw6zJLbwFzoshJZtNnxwTDkRnQqRXhuHknsn4mR",
  "key20": "4sYEV1iTAGqKHNm3rqL8qSGoUovy4E1HgKHaDLdUv1T61yyVfR9WD8CJE2BVLgGANmUnUk9RbtpZiXEcbsWkfxfZ",
  "key21": "2HxyxEsixgCDTqCS1pJPhxfSos2PK1nwu7bUwFVVqSc6r191ySe2FPQYc9DqThatjgpzy5RYhzv5B5QFqDbMNbza",
  "key22": "4NmvK2p3fzw1mqBzgMk6JUFsuoHiEkbYNZoTd932BproLmf9QgAT7PUHV6kccKf4ayKb9yZ4xyeFpqh9PgUjLzwe",
  "key23": "5MG9PqaqAW2stqovVQjRXzUsTZcNuRhviPk7fpjkBSEvWybFDpEaK2aYrWnq1cB36cwtHTqMjZ8GDAfRw54XPM7z",
  "key24": "4vG4qhKzC5r5t8xDjvyvtW7GreaKbUA781QBdTfJXJfme4BpYSbi4LvZ81q76SxtFUfEyZfqNfEc3iFQRwfUfVjH",
  "key25": "3Zpkq5Tb8mw84xWPVDhCw6JW8qwLGLwUBtNirmGiCp1cFB3DPoQ7mRnyyGNwhsCsoN91SDaZJP7L2JJ5qZQELpim",
  "key26": "4SVpwHBoTQafvXEvsdy4gDoywdkPc1RYxthquQ2mjNvsNt8Zd7ptcuWy2vHAVWUQ7krpmZPju1drgU93YGTNBDQT",
  "key27": "4H4zWG7gu1nsyqo5GnmLmaHBzJrnkKfbSrngcPb4akT9SK624d5QDY9ksVEKFKP15qbfF3i2MeuwB5gZAsctG1jY",
  "key28": "4T9f4FTUVKVkUB4cvCeby15UJZG2HBmejBh5Dt5utvAq33mY6nnpiZxTk2NGVeLv7iMkxp1LZ7EAxQeCvsmFXW7E",
  "key29": "2AqXsYg9mRLvX36nTQLCs28kcy8t1L2FcjxmDC4CXLGwvL29ehzVtgYrteBQTyGh7KtNGp9dswctfJt6prLoca8d",
  "key30": "5yddLo3L8vFjhECNAXytzdjHoggCHuk5jYVtg8tQ1M33Ag32m7cNEs7idFmpjhvsnstkJgzR7SJcKoq5wbkednQS",
  "key31": "4BkTy6ec9TBhEKXvtTp65jytnHBAKLEETF78fpjM3SF1AtinqfTTZeYAfVqUC8zXDTHWB3yBFL3Up3bTQKorwbZc",
  "key32": "e6XkSLkp9nH2ZWqnRGBg5cqT6HoQWWUnbk8XXdeJhoXVcq1Kjn13ZWTzxHogUCpq6nxJgAuQSzS5SSHowpTdpZg"
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
