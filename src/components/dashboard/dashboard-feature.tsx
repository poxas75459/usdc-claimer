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
    "cvBbAATi7fPn4HW4um3kTEzUde78dCrob4tMTZ8PL1rywiQYsAzhxH95GNRST4nQHZ38tE5vwCA8xtDgDMiBoE9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4T4nyoNzJ6AiAEnt3Vq1wnANwJkLir7fnSh8BSbMZvsERhS5rvjLLMpH7sVCG6tPgGzNs1tVcKpu2yAq97KHFKJm",
  "key1": "2T9WA9v4FRBiVKNqsw4siBvVYxqLhgsfeeDgSnTN6a8EehPY5gKCArzUhshMSi5MjSxg96SYQ8sR9i4pFrJeUYSJ",
  "key2": "4SbBQhy3Zp8HUEiXf2GrZmB17C99UpK97SBXdjneFkw6oCmHgZKRQy1D1fMkEtdVGkRpAempyL9rS5PDKV7R75Wh",
  "key3": "2VwouhTBJDurmq6CHGoCFay3i58BCedy5EvPJiStJhjpjQxVAf1MYF9GS7HctAkpkn7n51BTAePHKU575Kktg7NS",
  "key4": "4KsMNuXm3d1CXFBktR7ticWxw1RTHkcUQkTMpGSkYiyXucnTgDRLyA2mhAoxHYewcuh97P9XmFHbJefMj2AzgJNi",
  "key5": "5zfzYMgHC1xDMC7qcj71mzkRGvhHigdZLE8mRzBcF8YsQHbHhgNz7mHASTX7mw3nxCabj4SidJtE9GfsGTQpw9L3",
  "key6": "BNy9QUbsQbBXBgA7a2p8g8zvs1LMMSLTgR4oxJ5hp8qF6BmeV7CumdT1XYvdp8MN2uwY7ap5etQfCpM32EyATpz",
  "key7": "iifNpBFnms9hyHCUPLEbAYQJCud33sLuSk4ntkjzv7L7t3JZEMHLEzidzhHFMAGvyUyCzGxUozS7Ce7gqbUqi94",
  "key8": "1ZPhRRWpjm3BAjQDo5RiBPLtYepeoSSF5xHiaqn4iyJ7aMPddK7wXTMcGJ7P5QYPYnSvhgsWbZADBNb7x3bCQtH",
  "key9": "5aXjKzqmjHQgWey1XSq8orYbZRCC3NZE6bxdfmfapDWBCRUcu5FeaEaekU4GSuUxkwGwapGojMQJujgReSK5TUSA",
  "key10": "628uPnfyscGE5Ma4jwpknNgWRFvp43Xfo3LLZjp9RaYxQ5SgwdVkfAwuKUNENmijCLv12xKfCbyquckvBPdjReX2",
  "key11": "4pxnz6fxFx8AqciuVAwmYn62Ho37xWxU67zZdrh9TwoYB3GBfcajFVFN4rztVVYgamRwSJEUYBc724QZDGpDLgb3",
  "key12": "3ThZnGoT41T7ewA5KWvNWeU4RLRRxy6nedywmH2ERHxuZDAoNwPoRXYhGZ35PjyJjCUJq3eaMPoPE3EvR8ESCk37",
  "key13": "ZiRZ6X1yRuQ6nJJ8toFM4QepwA3NKUMCoxXdkSTug16wxCc8rSBm17cqzKu3QBnUX8NTs9aA6x6iYDUdA6xpKeS",
  "key14": "5dvVPDw4ZijKVBh1CTVZsPGe46pNiBeEbGMVAVNf78EptWS39o5gdDFi26HUwceSePMaYzretTjuCiZmJLTMdPoL",
  "key15": "3cHFYduNZaLt3LmuEyJtAZtPVpUxKJpQtT99zi4qwEqSvV4S7svR5xqVJ15JQKsNL2eXaE3mqhnNJfkPdVAYgtKa",
  "key16": "3j9ANgBtri475jMtbU1BYnBEwp2cydBLhZGanN21WrUxK4vUtfpEKUXBfL3jxuxvkBibjJRZYY6CsdKhoJgQdcXk",
  "key17": "5sbSu6Jf9hbGNRjpw6xwCgD6m4wBcJpjJnbtCTySg6dffZ9iE4wxgM95aQpGMPWk8xC9811BKjvwLpSFvSqQ4NMD",
  "key18": "2yX9q92jRuKBL6G5UnKMDdUuGXXQoQ7N7YpcWMxCQzYHxfFzpyZERTL2ptFMefKPCe8pfBUEbDKxmYpiixKfsbbT",
  "key19": "4qQQaDLTD1xePHqu5Eim6dSTSUVg4zjVk8wG1g6dSR8HxhqVHHh57ecEvQZJyvysU2k9HA8LuZsPLPxZZA4LVJVz",
  "key20": "32RUjhEYGmFJcJ7xiJ7vxrXDAtF8tFfSksA7gHQUhvH5aZnjtQFKFK5FHcDmjuF97DVJhcLrN5YywmZx36DmbaJ2",
  "key21": "d31DCe2qdBQGvvnT4HYntx62Ucn69pW9MQLFX9tyYbyuHGjYUz4NDqghvu1zXsFHRt24preKAg8odbWDkJGpWjc",
  "key22": "gDsa1NtXjuW6uxKz3chSh6fmzSUtUaXEjQJ5MHgNtoEyYBcEQjjGsKJahhKUDqMZVrWzF3dArtLcEkYY6LizT5N",
  "key23": "CUFDw1ACW1Av8BmLEFfCtq7eG8FjUSB5LSKAr2usNbaAnMrKoQugTkfdrzbVUUH7qfDVnP27diS4UZqegN7vmLK",
  "key24": "36dcXnyJtino8LdxZ8cetcwdDLd6td37CYMhzapLLpBXKF14CaKWUAwA9tutwvLSbLk2mCj6t32kQcVwXYGrhLPc",
  "key25": "62gK6BQgt44WP5vgKo8X9HGr69ffJTQaqCFJgpnyaMJcro1GtDj5g7q1KAaa1KbKYi8PfUGZJV485m7uMaKwijjK",
  "key26": "5RRxMyoL9HSGDfqSRqCMdacUWRVFjrF68w7f5pkCHh6w17ZXxzud5ixjtd89CZzcxv7pBzF2pz45EHYHsHCpyLqF",
  "key27": "2S8DQ54ChCULakCDBwNKQE61Vv83LrJNRfAxaeKeKVAURZ8mQdyKzzZfr79LyREJcrDHKvSMEoH3D61nGYw3AmRN",
  "key28": "2EFcyo3yq3cckA1iVEBWLju8WcSkfTCTHkWyAdj9ELMJgP2gMRTLsdy3uYM4qKRpm21hiQEmN9CK4A9nEjFSE3aC",
  "key29": "2Sp43Y5v8zPVErfabQZqZ9jt5Z15qP2uxFvzhdnKsF5RKfF9oZjxKBXaAQPpZXKUT5iX2YZaqA3AtFa3dGYeGxf5",
  "key30": "2tfbKU17v7isr5rQqZrpFkBEiKPuxbAhXtUt7W4SghatNw9TBfP75wbeELYzH92AzgPXdSmjX2zknGNSgSi4NnC",
  "key31": "XEQpMJXyR3ArEpt2aBb98DZeeZ5MGefXQQjkPe3SuwKuMyg1XWg5LJeXU3MBcQxsbGB9dFfz5PvnDrEJebfaTe6",
  "key32": "2QovgTneh4ohqz1o8z2Cr174XF8tqox1fuX1ypqoeADJcKBTHQzRWuKoJHaMen3sYPwoKHLjMJk3Pda3F8FQZ7NC",
  "key33": "2sHKrGRGdsGc4Vkmio12Dp4HKZFJse7RqYbQXesCy8sCDqYuzW1sTnDMa6peTQBXmY5mCRyjLUnUiYnmLVXXVRgK",
  "key34": "2LDxjafokLzLoQWwTomJn5eyDxtFziWTWEEjh7qPHXE5ApyZpJTzau9HnCSRU6sMMssUHrRxvMFyuAvHoHBf8ey8",
  "key35": "2nyeehoAWvw57Qi8vRg64qf9oZd8NRCzCDtWxunGGE25oV8fEm9YDhDPiDGZh1YejRwcqQgEKTCEDs2KbgoJaS23",
  "key36": "3CHZXs2cypMeSNqmK6HmH1hdEj6YJ9zzhRACkXZtEHZxVgTa2H7fdGwfVbTvFPV2HfsmpVfi9Md6QSWqZckRzXVC"
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
