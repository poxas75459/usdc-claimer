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
    "48zdPjAa3X6jmzdX8s2yukECsneCn3EBPEmCjtdPAfsKNG8Wk8gdPFkKPinnQ5TzNyemyRkXHJBK7QH5NCvctcRQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4fNQQxwnehcuL6Ncdb4Tebm2horL3KEEtoAELXYu4AcAnzdDYecdJZyGku4bYgQJSetmMv3xWHfmh2DfUoSvrUaX",
  "key1": "5reskH2n5bsutKULUs5n9a6cAfuNX5eQPVL22vyFRykuauMQRJxazcuudQHE8idmDukbGqLYCEGMkiFQPAWTFLfQ",
  "key2": "59i2TA9xdmaUgrQ5M3oTPx1i8oDqEAU2wKutc7mX4F87eu3YtejqenQ2LgXG7ottXuJ67rh7ifdhEom538VUsKf8",
  "key3": "5SMkLXkShX7ETQK3mGzxEwHfLaSeJFZNf2kQsBeN5wZRsTXfy8LT4BM8rzyvDur4aEow8JMdnKWQ4aPsSvDd978x",
  "key4": "2dr2JWibvZPeUa7QF28DKqTpLNfNqJaKkXU4FSMuaBQuQ4XfikcbT8zcfH2WGwG4nbeB4oWTjKXgM2dz1jXTN5Vk",
  "key5": "DvvijBQ5BJ2nmxjCJmPwNfSivvnvnJ2MYzFK6tFkRG2LcGB7ekAKf38bX2JtfpGmKTunJ4kgyhRYzRTNNqpCuFx",
  "key6": "2nayAVpcWagox3pFgM77SZHGNs8UqLumGsLiBtqpAYFytRN9GfECWZVn4uiFuWsJ2sdhsoevrdxJGpe7vXCJjB2r",
  "key7": "2V28dENVfhMWtYsvELRoTzj4m9tZbJMUcRzpB9k7VKcHCbX16yat7vV9GanfU6zgEpQxzKcEApYFeFNT9baxxCXe",
  "key8": "4wBbW198EsKXFtgAMN7m5zCztPwFjN2g2G2jWtAd13ds3FBmZu3yfCo3eb1rBLKdreAks3NLy7EFQnNyHJUtno2b",
  "key9": "SHHGmcvt6iuthfcTc1VqtbnMB5UNFr1DNPdLwFopUoDTpTMmEAdt7wMSmwrZehqteT4kwEwLNufpcrFUi89cbSh",
  "key10": "2yxdcQ1ofjUstXZzSXXxXUaKMxCqLL29TRM1qsQBYoETUZd5qWHAVs5j7pttv5g2jX98zvEah7jWnRbJREhYoDJ4",
  "key11": "3bLbzBYHqbPv1AnMhMHkc7NzNVDefbhBL9cafQp6Q4GWFEKN7njLNNSss7VxR6XrJuqBLUhpwkAawA6Q2S6u4zev",
  "key12": "5z8SwFH9Dymc6cBu7PE68UQry3J6usZ2Y9DBmJWMVUVoRnqbbGGu5Uv6j5LveAzawvQ7iKNRASyqHUjnoogTHAyw",
  "key13": "2Ag3YVyYpCXJY2MZnBHqEqfTfhLaV3DgF3FMyY3u6TV6Hza5v7rnN8zUnwwP9VjxvTeRynFLbSvAoq7muYEsrEEz",
  "key14": "pUjcBKQTTm1CrtbopC2vaeXXkZn8K9XS4WbBQW5GwZRZvu2CAnLPb8T9m97ScG6QwgEWwcgABCvn93GWVvVqAm2",
  "key15": "3Zdyi8XgufwZiicVJmD941JJz3BuTEk8UmqpcVmnM1gGFR9tcv59ZXsPkrLCK6nAW1MXHCXK4i9xfJovxbE4geem",
  "key16": "5VjKTFpkdPbHeyyfbGD4GbPVAGndM3xFhDJ5H27fS26XXpv9ULZWCGxjNgYs2MmWVtnXn5c9ij12j3AMjNWKPGbE",
  "key17": "5rCxcxnS5o1hNojLdrWtxeAHFCJWensr2sQcoXxrQL8WjmhvdY6Tfs9ytBKHcZyUZDSn3kz6YoMM1Drxw1jC38XG",
  "key18": "4MXKaFr35WfWTonNTV6ecWyab7qLGvMoYYk1yJuTbhEb6unJw7Uwr7TgRLST5Dq1JDR7vJgr9twQNFewuKboUpi8",
  "key19": "5NhuNNn2km9xMWuptnzhUjamMBJM6jKtB12hPu3PVEL29f3iV8W7e1PLkq8cs5ayvGWAAyrgQE6iGdSzAbucbENN",
  "key20": "3bTXH52cDqPCpn7c63kxfP2kVxNdbXYjKkHKvPdiM7QvciGpgKkAB3X3XEMHfVxWnquXcAxyroHRntCk29i6HmSA",
  "key21": "o6HxMnmc1oZxKSCQ2MVTSoxgRttEhXmYYzoj7PmYedmBdpRyWcZqRVavd3m4cvE1Fhxj1VyuttDR971cRhdaCjP",
  "key22": "3fZ2Q8dYfK6Yxetae4v2cu2d2o7YMSu1KNEuGndwNa8DX1Y4YzpRrBbANvJxcH8UUWbEmhhHa541zhPTukmp27eN",
  "key23": "3bru6JNCU7LmzuUnd7xVqLKMrQZz4rvH8nViFkU6xxwaSLTxK3Zk7mvfCk7wioaY8V6tVRpjK9wCPvk2SmP56mTB",
  "key24": "4FRP8auMVHPGkED4BYu1uzjLpbcnMBdd48Jitan3qcKucVG75vFmKEyhVXoBNc7N4MckgLVBJpYhrAd9uWy9DY6k",
  "key25": "mk6YPLLpyRrcM7znpaZGKvE9hUKe2rYTtuhhzayNBSW73TTGgrsFkQ5mbyb4gQmq5ujVRpbSpQP6J3yBzFzo4xH",
  "key26": "Z943Kfaqa1unBpManWiLDnRCZdVeppaUUQZEojgkiYsYgcP62TTp22yq4AtMpQSmY1fdBmtpmUCdhxd2qay2f7P",
  "key27": "2gv7cBWaiGQfFxYyHh7mDRiAP26ofSDodri5ak9fh91JmUYc2zbSEEpzak7pX2WDRiYooSbUUtVjNVnowhKAM9Nc",
  "key28": "2ZBwUKHDBEuxbq4qRZtUqMT7641ddp3wpUnHPiSAuReZcvFC213yeYdsvmX8DXkbYgdQVunHMFvbhvk5ZpTCmzaS",
  "key29": "4zazLUzchQqtRqv5JtZSzrF3aTobEhyi1FJxUKAVpKW4cWz2CDn8djJVq4JvzfGPbcuSGuH7KahxXntPYCx3bSH6",
  "key30": "3EpcuNmHTMAy8PyHwGNY2Z6p4kdwnLdyxmwDhQy9oxZ8THSEnrv8yPEaXVaDKpMYyQbxSWS1rmD2iaevj9edAtss",
  "key31": "39mjf7Shee8m6rCLnfmQ6zBtHfnXDWnSZMnvHMVZAJKTHGs4PwYBEi6SRtFigQRgg92auXB26UTUriHCMKBVSfC8",
  "key32": "43Y4rVZPdu4ScYvhNyWeze1K853PrYQWyTK14A975tPCQk1sxDjXCStHMGtyoAogLyY29sqrfpwPqEBz5Mypqi9d",
  "key33": "2RwEjs45mivGbDQ7njcCv2M7B4SQd3dT4Av1DSXoBEZPEHowrHdTx6YDPv3hsxXxTLDSth6dVrFw2XNkQHkhFMoz",
  "key34": "xduoxCAus3x2Lkmp9tdguMieW37XK6xCi6pJoLwe4xNGuHH2PyjYwp2KwRsgbzBRQTmwZwzjdEy7KHg1QtgMcpR",
  "key35": "52MYgo14fwkUgTBhLBFcBYB1kxFqmNaRk963M55uGAXe4vKfTn19wwRmZ7aTuoJdCDEsmmm5HoVCJwR5LUhf1DAi",
  "key36": "2Pty7bBmHAoCPqPXpC6bgpYJwARakYuqq9evkSBQ4sRQzCHwt4FnWR3ngs2BvVbQDRQcxigUR6Uj8iAsiBCbB9kQ",
  "key37": "3XNdgUjYVqPywFaW5wypY5vN8ff59xQ9e5LX9bpiqx1t6RzKa4jZZBfrs5vwyzRuoshXYqhKdPyjRHgGT9AsHx9u",
  "key38": "3mcEJ1XSyjZYXtiHrNe4hDo4to6snzvYn8dQ7wgcy2aL1RLm2svJUXbLNfoCD8NViNqU5HQqo99zd3YA3HbGStUz",
  "key39": "Qp69uxjPLkuqA36cPvU8k5AhnJKQNUXxiovpVvBx2dANUUUuBkXCJ4AfT3ZoUFreX1p69czKBT9nE48tNto4Vj7"
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
