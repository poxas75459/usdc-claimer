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
    "3HibQZzN5vPV4XyPJGQ3vZwftVo5FAeJLRuZxjXiW7BK4kUAPMiwaq4bLZunBwKFMKG8CEdZyJTFzkRzmWbtDsZf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Q1dCG4u5m1oU15HA41uBa7TYBMzggJy2oA6BpsZe5CHndtTdoaRCETA93K6C3JfLBRSKjCGFFvJewqKQdq5JQQS",
  "key1": "59awii1wjuA2vFTcCY7DjfcrSKBB5Psnj5JeF2DNiFW58fEKRwxtDZ9GRfNVLEpnsrRocLB5HgDqARw1nzivDASj",
  "key2": "2V1J2HAXQCGJyCESr3dvrXLrrKanPER74RAkVzxyhduZqw64mzBpqQ4uZgt5eHynLx6pB1woJS3AaXgUnMnURTZk",
  "key3": "2tsxU2uu6gHUaAMnemT6mXWVnVBBFHhhwPWDnS3PFDJkPJMUGNZ5CezF1cjosXEoAdtvtUjEY3TqvryVkENwgKWe",
  "key4": "vxDchzi7Rhx8oAMDdME2surXnKyWybZXpduhSdcndDzA85g6MYQQhmxk7g4K6DnMzHMesMhADKdeM6YwboKY6SC",
  "key5": "4zFvnoCSVZyuMYm2jGoSESiS5VKz8PGa3udKQTxhpZ6fDs3hrZzSfQLb8a6ouemSPvjYKfoLH4zLmCGx7SM3Y953",
  "key6": "3KoTg9ZvKUtnWQHXUHqUa1LSpGU9NKgK4Yt4YJM7FU5rW1cgBGAMiXDjX1nwEhGZV4M61S9F7a3BsLkegUdce37N",
  "key7": "3ZqvwJKaoUCGaVspTSxs5Wjjdaw4hqkdW3dUyJ3qfPgMsR9Au9wMaXTg3XEHWPXJd3FKBnnCmNh9bfoyfcQtgJAN",
  "key8": "38B1iq7XfHrbJYCbS3DnrGzrCvZ3Ko9R1e6KKkebTSF7PYEJgAGh9bQwWkGwGzygcNNx1SfLNYE4MrXRsoDGhvKd",
  "key9": "5Sx7AHqMWDhGBJDZYBdNbhqH9RKtqi83fE9EhZDpgJ3xrWMERSdUeY4uyBNNLwy54ApHZDiHMCruoXsd16oYnDGp",
  "key10": "3PGayEExZjQ5WZcJbFERb79RggebCH1o4U3dwCxXYHfemQPiT5wSuh6nNJfxgvCva86cRrCRb1ULukDoxhxPA2J6",
  "key11": "48jw1x8sfJHEV1otkmGpCt9BSfREGpSiSMo1yTtjA7LeXh52eYnNewoLJJNmAKLFc7ppRBoMfRyXqRmamhJP4AbL",
  "key12": "3dSaAKTMLBwcBv3sZAsdc8M2CJhCNoVrq8uad7uR19Gqr1VttV8PURm1gKi8Yjv3P45NrwKZxZmxaCAye3DfWbnb",
  "key13": "3pav9WLjgVSQDUbUJweq96fgoix38Ack3Mmx1JWNCqH6d1UHozyfgSeR3xTqr1KwMWj8DT3SRnzXkEGJeE18XhK",
  "key14": "49cP9zE6bXsLhfDx7dvDCHk6UPpKiycsaU5fPVcuhqMYqxzsSmx1qruebQYwVMLXSCV6EgjpPSB12xKd8yof2zzt",
  "key15": "2ZqWGWyEUxPMWBW8XVdXepaiSzY5528bK61c6XcXxXhLkiDZ5ti81qF3sLXPAsJSyQzQBFsA6u2ohSBpZfx3WSo5",
  "key16": "3pqAwWTuNvE8KPMnoenAxKapsQy7EMFxogdKVGTz5ffm7J1UDvs2uhJtMGkeSTSyekZRd5LJSvzygHFw7GQBQuHr",
  "key17": "5WU9P7dTVLq57sZCmgVJPxYpvhYsmFX9jax8vVd29jtLqTS7jd6g4RxDmNpMnYGXcVbEF5TfKoi3T4WWRpZehSae",
  "key18": "3HdBrxzMDsdCRULz5PYEWbXfwuQBToUhPpX8RhLvoK9bDmAyiNWnUh7Nkf4Tq4C6KH2EXLrRToR4K71nxaD1Lqpf",
  "key19": "4DE4k21s5nj6wTddGwCtXC9aH8iGEoswnLLek8sJiHrrd3dWvEcCC2rDd5vzQSfYP4eVHNH7z5pWsTVqgA2K9A19",
  "key20": "4QczVEfbvQm3kVv3aCg3cgQhZpAqfnECScrG5cEbjXgMuwbaj4NLXW3fkaXEXveSpdoea6mTDdmkURgGw2RQrW1y",
  "key21": "3NYCibiMqvWjuJbXPbWwMnqpAAawxV2rK6QmWVCvSNGHyCUZU3gE8t5XSLYZBX4xxL5tyxJahhRNs7Zea7wArSWh",
  "key22": "5zXsBA5Ah6sbsCnoPJmARcboYVdvgH7MkMuoSu9VxTWAm42VupBN8XrqbEhWxsAXjzDJgtWio4eiZTr4tRytwY3k",
  "key23": "huP3tr9jED2vZZF45EoP3s43M35HWD6A4NKVdjpLrvm4sC5dNmtA58QUNssZ8ghmYFnFd5VmKSzuTbQRavyydYd",
  "key24": "5EqH2HDuPKTR6G5dL8L9VoqTmhnmAacPVXyQGHYceUUJ9NvDQgF1zqaCuSmeUzcqi7RJkrVpR4CMDdUxEJ9AzNVJ",
  "key25": "2USHXSW7kfYTY5ewt5Doja4Mfc4mQqpoBYm6zE4V6LSPjZdDVV3h7zEsL3d9p4cYWGEmDmKRWowFr75BZaFTsfVm",
  "key26": "369q7H8NSqbAiWy3E9x1niwzHkJS7dx37DMCQtShUp2zxog1sAnkoU37EqTXNzqCGgAtGtSWfqcN6PssyJbExnb6",
  "key27": "4Z6qymFTyonLaUZmhDrow5oXY93snvUk5Duy8MJ63nobVrtVAqkpXkNaPpZVR8NkQx6qz9Bp8v4QRJN7HLjUqhsQ",
  "key28": "16Q8nNK7pGwtu1qAe7SRjr2ZPqjE59dyP7tVL11JbJ2zrm6EVZapmxa7rS9ZqJgVTXngPVexEojXGKYvGhZrJs5",
  "key29": "5oDvsaWRp6Kd8oTkiTziAUgb2dN6uw1DzQiKiLU2z1jcimWyy29x3GDDYTB3P2R9e1jZ4mrWZqcGzRjmjvGAqqkL",
  "key30": "3tydnx2FgAN2BV17chMPbot722v9TtkitHVwXr1Tt3kNRSVFNupFLqKovEaDodv8Wfm4zRGcLQn5jMt97PoUJR1L",
  "key31": "mFiBGmQm4JeB8GaJG5cx1arwTftxayNb4dqxqxVVrifjzGgQfGAjBJLwnnQEuMpwfQJLqzaM6PFw46kHdqfXpau",
  "key32": "2FnuZsYEWfKNnq9N7R1kxeKTkXfmWD8765GkdcQughgKsbD3QTtwXHCmqWLv2pyELR6W76xdD6zXeGhw55UHqrJk",
  "key33": "2kxdGJiWAzhxUsGm2Whfv9jtUZ5P878yBNtCLoJVZGweCwikRceXrmYHCBAhx1Yh6khkbSeW5LhES6cGNxuu1699",
  "key34": "5kHAAQRdyektHveee4wUTpUFwrsMm259jQjU5cvVZBts5CgCTfnNGTyra9MNzXbsADueifvCAfHMuvDHGWzFfDBd"
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
