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
    "2KQoYDkiutP1xYn7Kqcw613UoHRPgD84VwyviLRjiiusLvsztYWwbW8WCA7invgmN5aYnXkxLR2XG8yUMjJLB7Qk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2cDSLz1Tu5nYHzpGd3R39RJbJyx66TMUPMPCTfFUjwzsbo6JmhwfsnVMXdSwwk8Fv8bxCN7Ej6HzPha9grrZ2xJk",
  "key1": "4s2a17QAdpQrQBKRfywNWiww8iWiVSgTgtp3DhJhck62Zah7Ujq3FUxajKuLkLrvK2rxcJGq5Q1QsFmiJ1PTDRNJ",
  "key2": "5m9qVUqBUzUnXRrNPnHyEqPaengdFvysAnvMPRPSvBHMSQPTtoqX3wzMzH5jktux6dzTj3TxAjRkTKZMZhbtr47b",
  "key3": "66RY8NbB9DgsEomD7E6PjTkHoxM7KrWo4ZDbNautDK5xEej7Siua2JdMrwHQkg6MSbzE4M1pNwM5mvjeo6odk5nJ",
  "key4": "2oZQ4GvfswkxEiNiQPxNVj59tB5eDPLvmFC4bVwZvq4cZHVPzvkVC9EyMCkhiaxBTeC6WncVAXKiQd4q9DiKBD5M",
  "key5": "3dDPdMk2Lr6oReSd6tW8yZ8fkcUQa5GLw5cK6kxUDiCHGUzJ4rbrM5wBx1hCqS1k4FnhqAgNkUpqoPiTW5kks2SJ",
  "key6": "57mJkfnfa1zsqtskhRPuMzYk21qKAVcyyZ3Akfmwpur5mr84egEEk4e4hsAiPn89ZbDAy3etxzaoyHoDLkfNHh1G",
  "key7": "4M1mizzcCGr3H7Ruzeaspy2LTqa5ruFjFUfxrqVSvR4zfaE3ToTmmJGsqHRFzMDntkYVMhQ21AHnMXJnKktHjaQX",
  "key8": "4BnUf4EmLm4uHmXfEhEaRHczPkKCxqdqEeqDTKWyPY3n3NiNyuqZFhTGfeRpY57Tom9hLJSXZQvasb6sefeMKPvg",
  "key9": "3fvRCtZufAvLYuwjYf7AZTXktCLQ17toLrpu7SKpvu7Yr5XzL89zNdByyWQSJwpGSdGfQRu8hu5TtEfQH3HvmpXV",
  "key10": "4ssf8LuLVnzWzuBegseKj17EUPBQkrb34jRbw5XpjTAdEk3Sqdiy18S9xjeSoBdhUBpRyemB6c4P8CUZnbNqepmi",
  "key11": "5poMcbUvF6w6kC4dKVv1MifSeMXrVbUmCVg47JzQCjN5PqkfKYHDGy4NwzGUVcBEdUDu9Kwmn7tYedKJwoeZgAXy",
  "key12": "iPrSFVF4hE14p9fTKFPhaAW2rd9yvJBmS6nfN1SEWd5epLhYWuMC6W365vwVoqiMMtcfv8m2hHTnKhFUM4vyR4r",
  "key13": "3QqWKB3RhDbzpoXZxqRkgb3GpLzmXVAymukegy6Qya2sPUSCzGgbg9QNw8noMUKB8LQAJpLxXKsk5mr638JfWcdj",
  "key14": "2hF7Z97KgTaDeEceiKFJsvyLqwvAjDVN7PURNkcHpkXQhvaC64tbkv6hchjUD2nynmvv4UQo1SA1dVhWMnMPbBs7",
  "key15": "3Ne8B7uCiS33hNebztWEGgx2gVGGhbcyQtEDeszwqwfo7cW9VasWHCnfrqLnE3joXAd7mARFe1VfjSZw78MzSuNJ",
  "key16": "3WqrkrHVUxSRprxRHEZQwEcxAze2awzJZaQrkbsJjTuyB8eEzjr4bUQtPv8yX2NoCbzri41QWw6FseRhK9SSSrdz",
  "key17": "4VvWXQPG6sFFqv5WEkAue8ihXqMsxyJKoxpkAQ5WKNjcG4zjffiCBsGTdF2uSYiQ2W7JVNPxcgVDmPQZpZJWzWnM",
  "key18": "5u9w4xKAazwKkAC9PrkXwdX2tuJoNa7kxyunK5EGYWFK9PyR9xaRPZDu2vABdrpcXiRJkpbSarTtgUCPGmWKRjqp",
  "key19": "3mBUxvtAea7R4kmGQD3MyzL8qr4v3BxX3QTS5oU1xC7uLVbazSc9NvTx5D43zxyZD68pLHRxpk7nsA9T6Xyznu6H",
  "key20": "3pLE1wAwExJY5SKBPsxL7L3PjXND78RkSJB58rFz3AV5t2dvjFmB5t1L1V2NHG1nHw2cxd56xjcxo5g7jvDs1cpQ",
  "key21": "2WB8QXFD1okHJha6i6FLY11qEAKPgLRFx8fykwPHHuEiTpAemWac5PhkijWGq8GQxfFGUeML7tqxomhvL5JnaB3u",
  "key22": "4ttyPDciQN74oZFCnF3qsnKifwKVdEXQzqveCjHr5j4g7m2DBrciw48PdPA7cKfoiKDXUT7tMQLcgpf3z5dvEcDc",
  "key23": "4Ggg32TH4P9wJffRCQP4QbCJ7Sr5JbNPtxZTfGmRrjKb9sCrLF7XhFJZ9kvmtSHbYBrufU1uJg1ij8HA27ViDjEt",
  "key24": "3S738Xcu14YugugjXk1KhW9yq1J9HJXpBxWNg89c4D75HCFML7JzyzBzXyuwPWbGJTiJfuBmbP3kAMXk3agN3AKd",
  "key25": "38LE6LshPS7zGMRY9GQ3y7BEumfXD22NH3PgzHLao6meKApLtfQvJXwMzUsQ7qZxkv8BHtACmUQkbh39ZoP7LcLW",
  "key26": "59gqAd7XauwkTYikamKgeczTcduMiWDhsFgbAtw2wfZz46GRtciqsfKmT9HNzWUUYp5q92BxGLbby6XWyCBXrT4T",
  "key27": "48yYAPYdWSe2wsC3JPcJMUyYUKXXZ2DnjAiU5S2JhiVaJ7hy2Xb7VyWt8JdEbJTM64Kicn69v84DVFTeW1rLxeCg",
  "key28": "5MAgeNVUZXvojf2JFC39ewvstN1buyfVXfVjYtJ2i9PYMrgtPaMhMpS446Wq8ipXBDhZ1UMwbkW5RoFtGCnmBKP3",
  "key29": "2d7JFatrpwxDJvJiFRZhSACDCD6GhDoEENx2mmw7NphYpVtm9wZkryNBEqeB3eAojHuqv7uKUC4er2KV84EpbP9j",
  "key30": "53mTeN4wpEcaHPTUdrHFCsb7QCgb6vcsh81dBShvCooNVPLMVYTGWaDhC5HYGv2g517fPCN5FaLcFUyNovVAVagJ",
  "key31": "3bZjuensx4b2E8xa3cDr893E9SCyH6vkt2EEYQKqa8pdoNi8ByL83syVW3qBFcZwJ1tBajA3Z2HpkMRWThwFSat2",
  "key32": "37XWPscpv2bx3Nbbcw8makHN7smUkSXwkjpwD52PwxGUFMMNnQsLfpLasmix541dUP4Ekj1h4f55zhT44KBZmaas",
  "key33": "3gyi5JGRp1Qjfff7xn3RgHq9GyNC7Z2mcvFhjYoXTAMifk3vLfWrfRGSKVTFHxTCRajcApycYpfjCazfzHiGuUqp",
  "key34": "ZYhS3dEpdvTKpneqc4Xb5RfV7k88ntyXa6NHkBqTFxmSW6ZUw7KvBGpMdb4XuoVbPPgW7nYKm3V836CFF38hbQc",
  "key35": "5zR1Xt3tBvHeBRgtDYyGJ6EPunW547M7LhoTPzdtipHdRouWFegYPaTpnsKgdv1PigXRiiVRPs4Hve5aBJvUpmWc",
  "key36": "2AKyQQF8SzqJH8gdDQQq7HuVG6UA1L2PEuoW7sgw1WxtSg4XEZ6RkwxsMT3hjt5Qu39GjX3fmmsnujTJMs8LTj91",
  "key37": "386peJVmcVGcueFPJTFtWD6oCBfG5pfvb4UTnTW4tyZ4UtCJt8yqf7ARPWps9RsviasBDAT4NzRzDGBTrnrdHaXS"
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
