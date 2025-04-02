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
    "5M5yD9J5pqcRCDTRftYcPBDBbNZ8vNARHAdsvnE8ihHBtNoAojrd6NB6Av2FvyszvTq68JKcS9DCCn1XfVasxn3j"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "s46cPmoJRbCgJw7GoQd5sDmQ4V4rrjNhR3ifYygGYm1DxwoWmc8k1PspN9ariS3ZJViMdvNEkgivFm1yxgNb5x7",
  "key1": "3m4YnfmdKGi4vzcGbQ9NEsqyg6kxsXnDaUgSaskDGhxzeG1Ex8nrxCoVrQr6YrypZua6fFhiMJBk88EitNf8nNQy",
  "key2": "rCzngQb7D2K4tvX8RkxTJrUqp5hoHWWUTpssaUdTBQFmQYDNLPrM9t2hdc1rqXSDs3nq7hJqo15zspFdsew8XkF",
  "key3": "4hkHbJe9dsKXcULCEGTZ6EQRhq4PRs5sTQRDqxG4NjeKoMJe9kWrDaxgmmjMu9fUoZmcGwxLh8LJKkxMdEaaaYsp",
  "key4": "5tTZVmzMWbgcxytf6ZLB9uuDqFqawxWUsspMHihZKjCqXJNu53wFfYmghavS5HSMyGEujuyQ4QczaHwR5MMLprNc",
  "key5": "3eRHFz1oqYucPiX3paJyVadZfncJj2FwYmKHuwhCFMSugLp7LNDZY44ZAceN9kmriahuUHjk6zMtvEPeoFWdgTnV",
  "key6": "kuYt1wSo4ZLpzKF8o3XHjxEyPsiTNmBogwBK9MvxFbJUwowaG3dWV4S4wDBCE8M2KYFte5yybFjjfGfgP4Z3UcE",
  "key7": "2LwvS3se5av95cQ2ZAWasvnvmQTMJQKpnWrrjyD3zaNBLBxFzjetGTr1QFwWXWhGykB2V9qAoQo5pJcSx8jUbsy6",
  "key8": "2ppghKwZmuubTontkXZuyKH8BzMN9zJGQKw6xnbAm7uAeXY4gFQ3vgJA561LADy4qu6kvxx4gAnA577bKmgBA1bY",
  "key9": "38xJJ183zFutUJmd2P7zArgJNJYHGxWsbKATiBUtdvqeUJypzSMHsGFeSmWT4coreBD6NHjd1DMcfdiuk5U1rXuv",
  "key10": "PWH9JfHfz6wUCQQJTQtB2Qf64h73SUBrduZWVTYwAt1LvAFb3mjXzYFDfr3Dx3qDo7K5PqdjFiyy5gLLXqXackS",
  "key11": "4yH5gcC1zZodBzcTFVHh9jjK25AX8r1MpJdhP7Md4qFhUCZ9LfjEdzW4CmxguHkCsMvC19nuNxSDd2JaqEgh3XnH",
  "key12": "3ThafhZYFAv9XHbrjsCQxrYjVHjXqwM8XZiB1UNBAbV8cuHMf8ahH31CiZcsmUt9tDgYpJ9cRXRpNcQQELfWzypC",
  "key13": "5kyGsemxGNoccLuBLaoULuhp6Qb5ViyehErV3CnVKyE5JmbXU4RGHhryZHgLGtFJitCgQ6hVVDuVfhxTFmjtDBrx",
  "key14": "2Kbr18DUuPdwjds7nhdvujm7MsvnFdSoTFEo28NTmawZ2V8uDeR9RKz8EchP3D8FX3GdoZEzVtF1NaenEGgGrPFq",
  "key15": "5dC4m8yygRubCJRvRbMkyh9cVPFkaWLXfefGJARLDmay1LbAfJgp7GeaSu7wx5MG8HYGVHvikJfz5d5eRzUNuuDY",
  "key16": "2ajH8LMFMiw8krWY8iAMBhXewdZYPP6LMcSjDZYj5UE9TVVCmRsnYiAaJkfDt1qoVEEbgaYZbcHKZjhpS3PSnLr6",
  "key17": "2mcbT9KgDeU8D4NQTXNb82em6RgHxJT7v4C9hd9ZSSZFgAUuCx4ARkg7cJjyNEAedUroKofhCU8sxbiXrkmzzfUL",
  "key18": "4fT56AfQA4sthGvkWZ5Sx51d4oRJafRDAT5aeh3LtKJ6kUFRp2sb6fjwy9dbtjQvRot4QBtA4ypYBzvveeCKPQ2E",
  "key19": "4Vt4zvWkeQs44cBpo6VqUVRa3TCXAQbVHUTUHZUBDQJojbLVo99YHNkA5bfhiUUoGRd4Sc8aXLb5BNFuyQKQ7ba6",
  "key20": "3eaLoKt5snCzXTjeFeubpJzmpwEfB18CjDL75cFnVxdQYqLV1L9jTrAHR9QsBu1AAqdK6UP1XDyv3xTN7GsWDoDW",
  "key21": "uQz7P2jtaV2vqiUywVTfAUedeoajPCyuknyNDForLkP2DVKsmdStPfwHA7th5vMMG2PpMxC4W5w5BMfu2WR8XHi",
  "key22": "49kEcTkWUxb3XVFWSg1wdcNLkfvmZjvDsvQHzwqFaX5yWZPhbv7yasnEN8wrwkKQ3ZQAzgi4WFHw7J73izDhhixk",
  "key23": "vkHbVoWYfiesLFZdPRVyNDD8LNhixt9y7vgQTwtM9NHwbHghWeWynaoCmtDZM19zAnr8ozEBYVXjPSEHeat8qQz",
  "key24": "3NYMZVbkecaXo5ifZepfoektwELBSQSDCJtyVnd27fXGHvKxMN5T337hcQZJp52Jk9srFKrFwJbt5Vu62PGqSDRi",
  "key25": "4E4UxSydbnT6Q2tqebP7FF2oBREvrgcLk43ZTS8xtr1TuVNsE5eU9VHKPkYPc5eAVkR2zAQkdGmhiLtQpVxSMemx",
  "key26": "2ee2oxRe7G2TZR3NZRnto4R4aA1VYDYRs9HhjoDiMtU5agwxpNy6wVfncYtBvdezUv88mGJdvZksXQDGe5eRtBGz",
  "key27": "3BWKTdU7C8zmB3AsTYWjSy7GDd9b4hWkwUAGyPiqXoKqRqx8Fau4WrcQKxwa4KfXX9AmkoAyt7n7rdLGjdAoLKik",
  "key28": "YVjMD3k24TaZRUkh7pdJps3Tq2XudDKpkEwB8Ptm5WQaZSVXMe53vSpBPxtaUThtMdUQn9y8ErWitMsVgKXLBNH",
  "key29": "4dLF1d9qudr2s8yrXrXsufnYtXNTin26LRQ4y6owVGMJNVxCcP5xxP4W6eFiWN9M92mdq4hTLvgn8RcRQd8z7jXf",
  "key30": "5qPAyZW2qa6dMiWqvTSEPmxfmpkop4kiQdZc1a53itFLNtUCMrbL2QZXWJ7rbGTxxfZic83CaPiLX3NnhpvssQW9",
  "key31": "XjkasbygzmcHHDyEe7GV6knK9wV5275PTPgMkLZmTyRnT1rkpYPg6j5TN6rLnW7RRncKYfx9kBB1G4fLWxzEbdE",
  "key32": "3D4GqYhZ4snqorBuxP1WQNvvDhigPwzd8gqidvxEoHkKJwiagsMsk8mdbKPr1DWcdnUadYQV7qcaxwW5vz1uUqUo"
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
