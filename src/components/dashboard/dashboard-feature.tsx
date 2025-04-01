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
    "3JfqSY7xCuQ1pxJPPJoMHkn7Qu4ZB6ZyXv4J8jXEpsWgFAFBSWzLbjXjc97SZdXuiKufPdNra337P7qsQK7FAVSZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5RcLcFg21ddck8d4Z2eDwQTLq6xmFUqQgY7q1GE4aGyirp18mUmC44RNM3mLxfsjsiZhogQRzY4m9YNnZPpsNNnm",
  "key1": "281P2jNAVVpecUEXcmdVoeK57fbh65PAtM84nbQYrXg1EL5QnhErjhujwWCQWwager2V7eKGk79ncqtm3Rzh8XgD",
  "key2": "55R2m2gkr3HmDAPFyCqZGe4j1px9rpXDfoSRvZqvMmc6FPL9geKwrWKK8ZQUiMWjfJa4nQsttKWQMoL5z3mhopzW",
  "key3": "5KfSrUFWd8VnKSissdERNdGnCqN1gKoaCcwRtowvSiTVdWgB9WgQTtsGtGpNiUS1Q92Qqd4yPeu9DDrCGYcEeBYP",
  "key4": "3QJbZoezgackkrJqNo27ucd4mEuv1vgAGQN6LLdd6fhiwuqaL6NeKJKUEQx4PtGGSqifHYB7BCgAcvP26WmwgSfV",
  "key5": "3GPPyKeEUptya1xreNmhP2QhBr7rzm2UsgY6P829x9P36jbn945gm88Km9tvHW1B3VHHp4nus18hc6Jj8u4NbtY8",
  "key6": "LxrQnsPLJQhaMtwi7znF4dqG8KygnkA4S3EbchsygWXtuSK79MdXBCpmXMN2T9nsth76R9BQckCsRn5LUWUDj3t",
  "key7": "5HSFjWFetVVDXJWniggeSc8NzVh6UnyLo4hMghMxhH1WwsCKWqSJrwKpLcLp3NfYR5pqsA6iH8sornRERZDRuYrE",
  "key8": "3hcpEauLzGt3MXLGs82utDhhTgj2QdfvgfQSRURasL2Zw1NszqNkTf1NEEXYvGf57fYxK6CHHxhPGa9VgVsz3rUu",
  "key9": "zfKxLNWiRiFoDkNwdC27FiR55AWQBh2ryhHx8ReELnn8NpKvXzv1jLYWzbAekZKmXsvGcxrZ2TmQLwQTtVu34bp",
  "key10": "F8BE7xPEjXyL9taoYL748DHLMqE69wWQiSjHrhMZcHaiJnfNu6knu6PDF8RkUZw4hQ3GEheDXxfGY6oqhwqZR2K",
  "key11": "2EB4riNdPf2YhezsuAGet2K6sQCpXetCPQpFVdkWnDEmEjHz2bL3kmNLF2wmTiiN54vnEFcYC99ipDKaZsJaT9L3",
  "key12": "5mw7WwfYZ3JhSf748rqgV6YfNSKfgmbyPWh19EYNSjvZRXunNaPr6Kx7N3nwfmVQR3mEmdiVcPqSkBWxDhg5F58",
  "key13": "3DYdGYwmBXpmoRaX3wpgPR2SEG4U79Twv7vD44fqGCwDohM4Uaz5teebp2qgXLqBTzdSGAtLM9SDF7kvR1BjAMZn",
  "key14": "2ruxyf7UemYB1s5Q6QaMJLk8BP1vhKJN1VX7NpgdzgQ76gDRejK2tQiNDp1Qt87rnoS9Wsben3WRTc1uFhznDEGo",
  "key15": "3nLN265LujRjei5w8TCVbhJa75LGbhL13Sqh5nvsSJkZFYeKKFEMygBVnm7eAXQncYAYW63twRWuZiJB9xPgQ6zU",
  "key16": "3xttDTEs7YRZiatLeVYMCU2gmW3GhjwzdCirNoWVmn9bJsgAdtGmh4Kp5EMZu5xnvGcGvZrWze11dQfUw7tB9zYT",
  "key17": "42eAdgvaU6HEV92V8chZEfkm1XEDhybauNCJr6BrqHe5VbE8ZgcgDb54V17rW7ckKonZmFEvRV61UwU5zqYgr4r6",
  "key18": "4WY6wx52sJwxEHoqN34N5oUtVPf3dmfrJVkaA7FAc2NJ6bo35KfKRv4th7QYVC4TuiJUVs3ZUurCC8uKA4UeEKz3",
  "key19": "5EDXxi8KZbr3cikr8MWkgRXjm8K71GxGSweXiHx2QGwNpPCjfM6t7PzV8tR8gsqH2GCfiE5k3uQxVASXvKouEJ7Q",
  "key20": "3NRbqf4DKizWnGYcvLAZgX5xpLJ3r6LTjzM3FadJjxsoFZwF5zstGqBTa9EXg4w8fG7xkHVobnkxadkSxp6jPPry",
  "key21": "4rU3jT3eZ97kaPYDfK5WxUaqcZkBh6jVRCDRiwvdQTZGpSGEaNUtQLKwhVCZnujo7tU6SPkvLwBHAnmHMCuogPnS",
  "key22": "5jJwnsRQfBLPNrax3qehJZvyjabqZd5CoHnm1x5yhNF6TmSxSrKMpwyD9LTjs33tGWp4dBb3wNFrJV6UKVEXHWFd",
  "key23": "s6CQ8VX2t5vZSomSE81PaLtkAqHQr7Nz9xAwPXpDmH5CH9oF2A4YQxAKmqgJ1tN7Dum2EmUeZcJTbwxu5iMeaW6",
  "key24": "4mUHvLJcyozBvY7FM6cYxe1ihPedfW2Wr3gMpZqDJwSTmguELHg7dwSebRrjqQgTmfPxrHN8dMP2yvJqV7aabgv2",
  "key25": "2wuG71pisL9p3wkm1KWVmeWPPA2n9vd65buZ71P52CFyyz255MJKVQ2V9BBaXkSEQHDB4NuKsPgY3XUoLAYLBSCy",
  "key26": "2FVF68dzFbZYzc7k6FwqLm1JqGiR2jrffj3UMNGmFC57eWaFx6Z6T5bNSmEs7Y8it9zVgUzmug8R3SycHDBrdNRt",
  "key27": "XFKkNUskfMNc3kXibWyvHRiY2dxQoCPHPYiMpo54uBaKaErfoAnEK1nXWtVQCuceHx4obyh7DAtfMwoqWBbkZUQ",
  "key28": "358f9Aw61hfgDNvrxguSxMF57noeZH4k1MXANcotcCYVMiYxhhPPZkWcDhJX8LGxCXvaCXjaLpaHMnG9hgwEvH4B"
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
