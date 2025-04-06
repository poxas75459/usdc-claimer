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
    "4zgLcUjbCuUhP2S8JmnUbCg5AVjAdcRh2fr2nhGjYEmGQiZgU8KvBoXU11tYmcUF1R8xuxGf7UW8yejVKXPKMetU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5tjUS6kL3vh1uy2TWMN6RyqtaLjZmrwZyFzMNQbr2sKVQ5PHqKFjocsy5T43NUSdXe8vX3K8kiREirE9qQ62Fqu",
  "key1": "XnBL183zv73tRWTCpH8yCAup2dJPwujFtN6tBXSis4hwDKuE7Lcn8jiHV3AQx4wBzd9VY5m6QFSWo67nNWhxz9M",
  "key2": "2D8WKhHkP8M8kYsYtWcDWCbGHLg1uYJVJ6f2gr3cqhKSjuKM8Gfa3GbpWCVnsBzKev8H2aMoT2ic3wQSSJ599wHC",
  "key3": "5iRmLniwWHLSUgZVjM4BUy7MnB1qdkmrCj9W7hhPuzNLp1uubAW4rV8b1D7ZAatquZ9Qpd2ZvAZwt3CZcHJWFhgA",
  "key4": "3KN5QLg67rCgEXAVVAXbmoZAYs7gm3wdN2ErtxpUV4T9ipNSL7skoCz1YP81DHCBonFVcofecHc6jvaR4G4VAqhv",
  "key5": "5raRWVxBLBZUsMoJLgsDFAD25XmzZ3uzf3yL5f8ECeAySjrRAcRvxLRP7QJof7J1TSBeuw7tTauXawELRP4BhDUq",
  "key6": "3Ptj4izqXuSKiP4ga8mjFr9uQKQZxB5c3ZqRCDwhWDU6kqMfjumoVi4ZbD9ZxCb69MKNQKY31mRdytVZCJzeBfxw",
  "key7": "u5RxVLnMhPG7QgG4Z8dRRYw8rhxnfqGgQ78soDctDeFXoEWhNTLXkrFC5KhdKViaSfG7dT65TUzY84oZGQNGRcf",
  "key8": "63E2R5dMaVWqcKDNSqC2X4rNkZh7rZhhk8eU4PL4we4Tvd5phz2CSCQJCYTfEc5VoPy8b7ujevv1aC1FzhBGf6CR",
  "key9": "2V1qv1oVhotXsvo8ReFaSissW1cvLRHwQdUHdS1MnBDnZoAtRMZM4rFcMhtefCySJdj9io5gXjU1qpBbaxduDhVU",
  "key10": "39dnAPrQ6eqTjnorphn7xDxpjisr7qK4jjzAdNjnZ7zULTfkXZU2KHwkDRi6zoNN1uu2zbzpHFv6CmJhpNQKSLMG",
  "key11": "5Ah6nCybREjFbmCm2gpZbttHxQtpizV215WHpNP2GXGFCqkWo86EkjybWiF36qYWcnmLxcCdBSTc6M2NzEqgUVjT",
  "key12": "3vfFSiieMu55J1LQqsDy8E9TpBMVPsUvoKKwmFDMCp3npThBsvfJaTbA7Dq9szZsPZGPXodepNp3pvwvgGYrwEcD",
  "key13": "5TkM5RDasYjWzN5q1txKShPoikZdNXz7WX5XyUuPdRLyzuPxMNbhgWfbfjfRgG3n1DzK6mtiYxufT5i9ZyaehUT6",
  "key14": "4bFckGKoaLff4ZXjBAmfxS742QdEJXjEQa67wddH7mdzGjaa9BHBT79HjrqpN6wwGaruq8pXaXJsgMt25JDboSjz",
  "key15": "2SN6aQeyFqUCvKKHGSpvE9G5kGx675PZ6DZfB8u3aDP3zyFzVANh7KtvUWLqe6oySPrR5ZfFvrWBcrJKzxA6f1Nr",
  "key16": "4E62FbuaiaCNWQ1TZghZZteKyfBxe3GegmfphdnAkueDpPKew3fUqmbPCVtFuULPpQqa4yf3mt6DPQwL6gKXG34N",
  "key17": "My8HsZfVyBmV4Gi2F94r5WsPiGG5Hb7nKVA3MmetY6DjsbzpeSRtkSqtwMnFVkMNUDm7ZS6pTJjNMkGFhhDD43f",
  "key18": "5ooL9R6P1fNUGYUYYNiHCKq2A8JLzBRB3kxfPorZvEcxR2akCqupk4froxmWrZqC6csGTLA4s55PejXr1byF9sLU",
  "key19": "2m6h91yuLKR1wW6SS2v7fbEmQ1MtbNTcVDDkMJxi2bEuHKgqcJE7ezpmmyoMjqHAxZcLi3YXZ7sWsdVrgPf99YWZ",
  "key20": "2zkxSPXoyZPp63J9p9Epof3mcarBvcRbSnSGsZszW9pL9gBNqEtLnCo57QvsF4ueSzYVLE8F2t7gsyD8gsxxgsT",
  "key21": "55pxPQSq37D7LKy6mVZuFae9prrPko44sMYaLz9jKkZeVvbPTZS7rAQh74Yqs2L5B5LQ4YccREkun18BRjJqQvJF",
  "key22": "2pZhXvquE7WTFqzf3afBQCBzGCAkB6DYu9XWFmSxBMFM5CqQPSfMdAPCTCgw6mrcUsGC3dfukyVbjTXy59mgqkXM",
  "key23": "5c2vFDvcrQdAAEsAZX4tj6rNdXTMVANzHE6kdYCsczj78foQfBBwpesdrw2STvMAdv1miRk8mjqDQ5swUNzxEXBY",
  "key24": "3CvjRWjwvr5zxj7G2QpRmc3RewyKWVcNQ6GWL14X3ZqKSAuJCS1UNDKr3JJVP2Q8DhQxoF1BY8cXouo8AmTqeHuj",
  "key25": "4F7VNyK6UH3dWz6HZvy8dN4wvxwp2TwQKMHx7HcMdSLQyMeQQKRi79TuZfGNoX1kWeQGRZED8gSb8jcDDGebH7S",
  "key26": "22pBSv7mjD49WSHFKvThBKPKkZdRSfXaaqQMkvhCi7S3F9ptmB6NKqrrYVVLJgiuyQdMLEp4nk6U1TrWQ5vtjRtm",
  "key27": "GCJd2xfpkaVYYy2DsVh9nY2T3fAVEFPEbPNfuwxm12o8u2FuqrT4xAqEd3k4chyY4tMDdbkPG8kbat6mpvJAnsz",
  "key28": "5XAReAxCrxdGEtXy5d2Bo2ZbmJkBrSqMr1SW42GDtzgZCp7sQAbSCqgVHq937xN4uL821BJ3tsKFKztt4rgr4ScR",
  "key29": "5EPDgEhQ4jwHqixmi9fV6XAhyVR27sL6b5wdCHhkrRvsFoBkX6V3PSobuXDYuQUi7VHhAAMMGJCPiWXVyj7sBCok",
  "key30": "5Kdf12PEvnrRXJiL8c7n7fh1oWR3v2nYHkqK9cBrknjokCuBMJxruK4QCppdVQTwxtbZgeH89RmTW71rTg3gbCKW",
  "key31": "2FowHzcMtdqEjeahcs62mnkvaACBJdeyXEfcxB7FsArsBwfMCkQGbHQtwkHJTZ9fsPKfoYXBFmrnZGXRpAy4Yfnu",
  "key32": "MriemCVqSZkCFJ4gaMduohYZrVQDFabnVv8TEdDuogTAWU2PAetJUAnwqpJp2eV3TdYXXmyTK1t2Ji56VW8dTuA",
  "key33": "3G8qVPqcwyhU8Jgbfic83HyEuDTqjvQcrpf7fMSxRb5wnnBaUNqcuEkaAVu8HuHVrJrARP23c6JuJBvD781ZFDCn",
  "key34": "FZa2bsCEGe2azNvQPF1z7Exu6mMs9n5f7wPYQUwEKQoYnUTjTXb1JVAAY53UgQ188Bkik1ASS2kA9hCHTt9Anhj",
  "key35": "3qpAsDxK3WPKHmcLpMVHzihpJq7MiECyyeCGZ5ALLKtGUFmnAocpEkyX26AopnF7xpQFsJ2dVTmirsichQwAVHQk"
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
