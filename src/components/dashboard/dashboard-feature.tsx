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
    "3VANbLyZvDEyLVDAVwvgVLyF5bPj42pyWVwRdEbyd7w196AYMakJP3V1pYJRNER9PGCP5TzpmJ6oQxcuGNWYBsoY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5fHW1mtNho5FrVttA2G9jbUGk69nPbSh5mQDYnmAe8D1kDzTg4WiGgpyLTMzmP3V8btagD1uR31jP9inLMi8Qmkd",
  "key1": "X9B9QMgtCrCySzrGHqHBwF8bqtDSZoEYA1jvNCZXjge7o9XDe44t89QQBEvoMAZq1x2e2w4NsyADEdewjE3gHJU",
  "key2": "43i6GFbqTxFMw4Z1PkqMJbDidLdPHmwfTES6A3hNrvJz12ZqNFkcDR1R7Mj8tDcPD6N1Q5jFjyDSmkASpXfZRfz3",
  "key3": "4dxYGPyu4VYp1BLaoQav84HeqpkZUrRhjnro8VsrgCqDoLh9jrXG5gH9PQkxhtGDJM8cye9RFeHZSjx4J5K662gv",
  "key4": "5qdCoC1bHHEWAVBRgHE8EWhokc9oJpUYxbGZYK3C4Sv8tevfCDLX6UFqLZzbqz4yjREddV5g4yqAeJ9iMjTduzaE",
  "key5": "5gnpQ862DJeM4gkM4egP7RGeGLed77SiGWt2DRZ2uJ6xEeg89bY4938LvZ8RE2BQDnGiqFuyAi8xUzuzTPrQsj9L",
  "key6": "3fHjSZ7pXE3UuwtweqV6wDGw4iUFPxKWBBUzzw23qd6XZnhqXCJZeB8sU2Zpk2Ms8w6LMfcZgkM831iWLBZipsPG",
  "key7": "4ZJLVWkUVpC6BuKU1wX3M1DsYh88KuzRWYW5znLG68bBMdziYqNZcYsj61EStd2uwj5FvcAkdA7dseYw67rdJehH",
  "key8": "16PLYYDLEuSwBmnnzgAUUTyFWoqynutPeaVNW6ajui1TFLo7x5BWF8QGoA4hVqVDT8UgYMJoMxPgFhCHivtSahS",
  "key9": "41G2XCp7T1AkW9oUj4NB89uP1TXyKEroNU79xerHd5TQR6yzUP9oX8NwuJ3CYx2mPGnxCtWpY5sRM5cLJJthCWsW",
  "key10": "3kx7ARrjcqSJyaQecRmc6SH2zpRfSRf72q9hyBxFhbndXMsEMeBPBSHCuoZXsDYUoHgtHpp4GFtPsafbyXkpNiTx",
  "key11": "4kS7ivMkPYBC31yezrgdfNGxCbHWFPxmACEy28327TJVTgfbgTYCY1v6Wv5aWDZjPpd5T236KwwVxNqHxSGsQe8f",
  "key12": "3EqQ9ych6GgUunaiNuHwMRanhdhS4L4UtVhTXbjUJdLAHbh1sKEbCZGUdCqzJ9hdT4zaCTmyXsi29rm4mzyKjF62",
  "key13": "3hSZ1oMs7wEb4CfAd8oeYUZoL63FcobNE5ko3q4Ugm53KmfZ1zfsmsXYTWR7fZ7YWkYtoBe1AbtvyK6krWVLz6Nv",
  "key14": "4BGBhJckqWfwRxRS7QVgkmjBNA7QyfkVSnegcd8789HjmqKZXfcGPC6kkjPBy3NxV4nCpeB26DZqrvotzn2rUtWR",
  "key15": "5JmHaxmBYH4CHAZqM1p94rhyyHQj4U4pj8SeSZJujppHC9i3xn677wC3xZmC7RmxPjrrSx7NaRj7dmtCrnkppgAm",
  "key16": "2hGACsh7eazvsBCPLEiWXrDvj213yv2ft7qYQwX822ykmuXEQj25UEPeyDb1VmAoWpW4K1XvUhfpiCLT4Jz9zaSK",
  "key17": "4PSTNY7vs1VybSs9UvZpnFaHSQQ8K85KwFTjSZ9ZfhFjDyspYq2biZEDyBkP4Xd7e9xzzjioDtKVDfb1eAF4X4ys",
  "key18": "4aCitZfafD2iRPmtb2fRfKeToJornK43ApTTVW7NfzD1pfsWoinZEqBYdYqFcp1cn7Gv5heCK3HQdtu4oh73C5DX",
  "key19": "2RFkakM97AiEYxDSdJxMCFb58ffsjTkAWhpPDatJ4YFe74g65hTsA3jwhbNUqqiewyRZwDKYgYVmuhgPihZix4tf",
  "key20": "asdad21CAtDHUaNZLAuctLPLABRXingM8fxz5tuEXMVXYBae8dERnZLhS4XCNVHHVKRefVxmm33nXHViHoD9Dfj",
  "key21": "2Qaf6NWwbYdKQPcMpCP9WJFKJbAhjRL5gzF6mU8nCxUdkv5XfD3Jdqr7gAdKKS3XkbJjmgJBuKY1aRa6dt3UBEWg",
  "key22": "53JER8ZvYG3u3KSWj3hipno6cvrbnrJfSaENjk5BEtaTAcXKcBKJsXzMWeLSfH8eiaVZBSJftyHqTaxScLNYe6uY",
  "key23": "4sgK7KpE7eJVwAuH36aNY99jgusv1nBRQZEWxFMqrL3drAV12yebNeQ2hM5zr2f4EUPNVGXeSnkKsjmkWYsghKZU",
  "key24": "554q3KaGbSahEtLZ4hubv1uSSDHXYrCDP68jSAgpp2mGcYodvYqxMKQVx3kXr9nVRTkeM9Kw2bUG6mkvcs8739XD",
  "key25": "4qTiufPDdMPW2cpYRUa5r82FWuyggS56zBVaUwcajHmGrQsozoEQFwsMi6ymX5pE3pNscu8vyc2UvaaU9CPa3h8P",
  "key26": "4VViCZBLLtxTXwn1J173Ghw1Wxh1HV4zt5KFX6tfwVbtKQnL81YubU8dBwnHEAsFe9gXesPTvc69BJi8HVnkN4FT",
  "key27": "98WMjuNBGTgdF1d5sAFhLJ66JvdhQZSzWaXnbdBZbb3TLFhJPCnJcNne8KSdALPmQvjzUSyfk7vy9sRJJkaUzyi",
  "key28": "5LRg6KKBpXEXgDyutQb4xiXhsAKkjNDYJ7G5xS5eZcMbZhNcDb6ZfLJQtz3M2ecZogYCoVVxd4kB2E6QedRtkCZW",
  "key29": "59VoE5fEYFLWbvJrbXdW5EhooeZF8bqQN8HPsA3QELb3PdKL5dy3kNTr5DpT7iqcseWj5sMMKtAzNyTqKaywcMZ4",
  "key30": "559iqfKUiBvhLiJJWtyeSvLaKxW4Gza9qBfCPbhgQLAJhqC7L2XjgwexiPtRaS1FMizrRrAR59VQe2hMNrH8gHrU",
  "key31": "3rs1YAhJqySxHjgwecyDyhZ1fsyy28b7A8tMD3UKLH8MM5R4d1zYHPt6ZEk3KtGEFvDbxYzH3dxZB4vvhmEBc7bL"
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
