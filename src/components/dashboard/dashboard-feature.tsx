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
    "4yVKo9rWMFuxkop4ZYDiUpF4K3Ch16vyqVm9iCNwEsgfgE4DBqXC6NQrvQ74co3pZ44fgfvFkbgPKfV3Ep3ZG8Qe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "91vpcMj3ftDEpQUAKH2C4iWiVxvbGucdMNauaUgWUFuw1yHtq7jGMCTe4WieixspYMSGFJMhHNoHsVCRWr1djHj",
  "key1": "ZXbMpGYmovV9CUnRfZ2pkvpXVskUhsvp3hXrVyafMHgbB36i7C8FW4Bo3TioGXopEDn7kc41GeSFUqWjN28bY7n",
  "key2": "3kTu9HgvKJrFRazxNJ2C5r9yGKUV1bQ6bVufnvmghX4CKjpaPQ17P5snAtD5XQUnUxPWZJhLco2Pu31qEzUzb7wY",
  "key3": "sFQJHBhgdoFiVQckbSdjFAWSPJNYUNgzQUhGNaxrQkZY11Mq39wFkQZSiudTtZeHJPFtPy5xziQ43dxPFG4JoXu",
  "key4": "XXQgC17eGouXrSmVjCWR3URNp8yxFVeqANhmSawHjxUbt59vEydMwvyubfiyi6tzF1Ng8tqYsDpzV4H6iqbTUv4",
  "key5": "2JqTUc5mDLGiVzmnPPjKc7Fd2iBFNe5WvxSwb9uRCKC2G5vrMUHGevCVa6o4has16fDdUEy5oVNxi8HrBoQgVHtK",
  "key6": "4i47Fpe5XccWpD8PdBjM9rxETMqBGeSgdUNyiA4QbeoRz9VmpsXF6S159jLDjCaFGZ5UsCdDATk1kBYcoXaeLSza",
  "key7": "4G3AhHGBizvabDyR59Gh2ECHJ6ZpKqsNDfXnjzQ2ZAoGRocs2PeifKbwuRcWzSc1ZBNReBxSu7bShpWmpWuVNtor",
  "key8": "3TZE6wHZVKX8R3MwQuTJ4w8WMwHXeaKPAMAomfwSNC4hLnePa3sXaoocCuBZL6Dd4b6qRUYw6aPHasLf8h4gB6h6",
  "key9": "4fSBdPZ6caa4xQhJyN1VyUe2bGfRGkb6Ni57RX4adcDjb96r9XtpVgPkXmT8nc7yK3MpA6j3jsiEVKbwqenGLUje",
  "key10": "4QApPsRYNmhewuxh7Hrz5CwneygycfJJCmUgp64bmPy94uUGcMLh8hxLBCMsNQV9bX9y4WCmZBaKyv8doreWYHZz",
  "key11": "nXcNdmJtkqP5gWoAfx7ZWKLVYssEMs9Ci6JcXAG7DWDeaEuZsjJNQoESwXtxqUX1WePoQcW32eRRofa83AReBag",
  "key12": "pRKW25EkuJtTtwchQeyn9LcbfRZvr6XCMf2u44CoKg7SPsZMoKNarcqeCkyaUcyGyx5HGQc9U2pNsMb51q2ikFz",
  "key13": "3XNHr1yWcnKwVmezSpK4vrKdppX3qqD9JtbyctRkxjAiQZ12aBMGF9ieCgd4srmjvBcqdeHLChCP8rePs9JZxMEG",
  "key14": "3tV4unqNAJzt6HxTWHote6XZEuUWHEie5HhaiehT8Uzz53cLGNiZqxfiHwPvku4SWWcJNHmpCuGfzj63G7Jm3FWK",
  "key15": "4gWVGcfj4svjiRG3QTRn1qRM3Z7u4xZYXB4HmMjSDQD4rS7jRiAPiJwLZVP3MHBbGyVf5oi1QHp4kmXSePXwaqDE",
  "key16": "5fKVYQFZdee1DMpEMDWSsrsfn2RVyVj2DR2sJfN9WubC8VDjZZhGXYrvvwNAUJXzbqh83xaNdLkXLXbrq6hCBnNw",
  "key17": "2NQMgaMVAbm7JBYw913yiMwxbXct4GbnTTRtv8PWzL3cUxEZGU43KsjLNk1fA2dhGEGeYButeXVf2RtG8aiPW78D",
  "key18": "5jV3EoUxh9Q1L9snzBMFv5Hhb73WrkSmMEnnwTBwtCBEcaZbNRKf4FMZvjkqUtBwcVXfWnsNhKBSfuQ23j8dECku",
  "key19": "3kTsuNJSHW9VJ7j83W2qEHHsYBijCNv7dqhHwd4vuyQyemziQ3wDqR6HRWKgyHkyZVKQfJKwd9tQWukqJecWQv17",
  "key20": "2oRHw8wUNcCEjG1xhfNx6wp2BXvBs4htpnJQLjDNePv1TZCKnn1PwDooiM8eSVGyUAVTzaFXCkRJ6oA784ngoAf6",
  "key21": "ADGbXopZjPYk9AGxYPtBgszQeaAoA1qRnknFr9KjEK3Gd7ze9W7oKjF9d42wHNszZvAJUvExS52d16xaNNMTTBp",
  "key22": "5LKswW2aeZcGbHMMPKzqexKbj4FvR87UUQKMb5kgvVZnXbQtYkT8UJSAzdsWC4iFrH4aLPJqiSfxewohhtHCDRaL",
  "key23": "yYavyqkYbqCoxHB325mDcVjYmkiSi3PNszkHAvEYsAq1JocieT9354tDJ1bYXWgtbCT7QiKf8rg97GCgPu9nQZb",
  "key24": "27YfwNLnuaxpgM46MQC2zYjNZTqzL5Aa8MULkbNr7P8LbiEbAGVnY6G35nvLcm33ypH9FnvYrEk2Ys8YnyseSHkV",
  "key25": "3bYvMeBaPWZEiZHuZw3o5ZbrhzCVBAhCir5DE1cPw3axYdZhrcJiFJD5Qi7YX5YDyU7nuJ9oJeKSx5Yg2nANWuUE",
  "key26": "3PUehTPFRmRBfpjaq11BvB6g6Mdy6M28tJ2jCHD9UQUJuMT1m8e1GfU8npfkujgoZa4yZtVPHm1Ws3AHSXh5YF3t",
  "key27": "2EjxEDErowV8ktL4iykwQp9mV4M2N84PWiNgLpUPmaVjYVQw66puCDAhJ7o75jVKfizBJwyoBGYZ2CQ4wxE5GBeW",
  "key28": "V2rC5BEhVJtsvQja12pZmwY4xf4aYZrUKb5wKeBXtgDFK2CZs7yvkZnn6pwkoGmFfpyiiFVXAnLuQwPhZuthmVt",
  "key29": "4s7MJorgvDwN25x4GPGCjXGM1L3hd2NVYpbzmCxQj2PVWGT3k9yKme7f9y9ceME3hsTmFGpxZp1eTr7eSA7qy7Gh",
  "key30": "44LLRPvnkNpYPeDawbk8xPvRxcB6TW55EniuABrLws4GMX9q97PT31dnQPzCihDBzUkY8X7gw2trcwV4KpqJZRXp",
  "key31": "26s6mMuCcfgXZRTyGzLfHDhqgDjjQXYVBFtkrRESKHJ8CHJpNbq7s4uuqCi6NKn1WTZfuf1PgAMd2szYe4hv25CJ",
  "key32": "63zFhEBCVgDdbmyTVcnW2g3eyPhTXmcJRvHPwf4FiEFsa6SGJ86QyUojkyNZMcmgDxzSoUwAikXqms5eXYJm5tid",
  "key33": "5pNiTU7BcNuPJw6MJ99xGuNTGWntGaUoYqT2VM6iWQ6TnDXdV2zowxdHGnc4BuqP2YKAFGzLA6yKxh6bnz8h65UY",
  "key34": "4sCEspawcNLteMroxzCP2BGW3GfnwARoeo82gpsHZtdAhGmguKuRKzoJroYsK2fx4ooPamVQUGwhWhQgSM9APXGR",
  "key35": "5meT4p7zbMAe3J1oiGSmhqFygYZby5DH8SEAbUz8rjxdwmSYnhyBzxMg6qGpf7TR2fhrXFC6WdRFevcLsR3YmMxj",
  "key36": "rF5T99CRc7jiEQHUaFopLrp9Rieb8EvaanYq9xKryRyx9Ljcv5n3j2AWoczqm2tQvMXqqtTCCd6GkqAzsSKJK8C",
  "key37": "2FB52yvakZeYTFZDx4uhmeRR5bZH9JpC3EdUEGVSPkCxXsNDrBff6Nb7zLxGSUmsQxVHmhDnww3hYjxUtBM2ruy1",
  "key38": "3i4U69WasxJnprQB2sPhAtigV5aG7APyh73tRTaLwmFrP1tCvYZYdcdGA6LR6K48d74mWN79cB6PzBj3B1bss8cp",
  "key39": "5jy6Hn7vRAsw75aNzWGu95BhRBLe41U9SS7KPgxZ9zdKCLF8GjtmMLNGCk7ANF8LHgBg1sW7kiZqQMp44ugeEwAi",
  "key40": "5hSvuDDoVY4uuv4QxQjnuQcQwGPdPgAZa17exn7LnpdhNXicQ2Su74ybUPHR8VEpKUDBRu8pgG1s7tqL1Ee6wTA1",
  "key41": "5QgMiykyMqtxL3PZKavG2QQ3t3DM8JPuRiFqquQ7UVwknYJjntaYcsk41qhtV8xwJuAw4fRFPuR2tzekq5Fy7xJU",
  "key42": "2YfrdWqkJYu8PHez8gJrzt9jkLtg5xAtEkiMD6rfSBNsexJG6XHpHnG9WZLMRCufB8AJMWU1T9ro73Kzk6b59Gw7",
  "key43": "45fVio4xGRcXDSjFEzcMdAyRtaNcf5QyadfjwhwZGnHShnM8c1mgnR6KevywTNdRb81oVi8ZxLiAT7gq4RH1SNzM"
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
