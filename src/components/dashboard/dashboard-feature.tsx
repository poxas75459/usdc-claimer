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
    "3mCV8GGHaB1GP2Nm3yp91HpZK9mT9m5DX1dbJTmQZBuiCiq4cFNuLSx7R8waTmJeqvi1kFMWxEcySeEuxwqZzfgs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5kD7m8UjH9K3bv6z9Drn7JCsWNjKkGraD73xWadanV8fb3mUENYoJrb37drJeLVD3nars2c5s7jRm2Txecn7t5aE",
  "key1": "3rseX5pQM7qanE69MMtsDMf5o1aLfp85kTvDwyXWVyijrXMQEDCN7GRjFnYbDVNd9Xudqc1673fGKjUCUazDAGqU",
  "key2": "4tNFKQQLikzH6VGrpQ99NrHSHGZqLfvSrbCH19PHz7ENYmCAqXbngFBzmUkgb2H4Wsar4AEswZnTY1RWoGjWPb7G",
  "key3": "MkHPq2CktuxLkD8dgTbQ6k8onYKpobKQqQYKjxdqGYYvYxozHXGXp2jboGkRcFrBJjEAgFa8DJwGvFchtRi7dgX",
  "key4": "2q22qiSmtRabvf8norae6ncLMtUwAKskjjP4Bi8ZKD2GcXY1qcni4J6ureFt2ZczTPURSiftD4YxCxP7bNNusKNp",
  "key5": "H8GTmQtHon62wzXt21f8Fo2dHJPC4VcQwwGZHEy36wgBv6DUp5BVQmx3Y5PRk5eAkbmFeTWPBS2QQLSBn4wzfVo",
  "key6": "3UbEq7DeyjxFG5YTuPR8WQpAKrDQq28e1vRpFf91LZXuDvHJXm253YkBbtGuZyvWiewYrB3wUKsW3JvPgdUaZT7z",
  "key7": "3hRRLcGf4JxVnxX5h4iygN4wzE1JxeX35FLcyrjMMVnRd2x5zcZGwCNrZGYKVixpZAv5oLQrPZRgn799Qaka5fSx",
  "key8": "3B6awCcfwj9G6BEvUfeH5Vm6hPcCb6zzweYzR3oAXaxZrPX8j2jLzUsnc67mFYLNc2ixFuLb982dVyR1G6BqtPoL",
  "key9": "4eVihpa642LGD3qj45Wyq8SHAeYwYvhGHAom9mgWHZpnAr3WnTfiJGyFmm42v2w8njmB3SaDy9C97d72y9GgB3tE",
  "key10": "2cC2A2HavK9rCd8D1Z9hZdXp3Fos4ZDJJb9Dbo5dn3dQMFioCc8mAaZhEXqdDVxAM5yFmguCiyDwVimKHKiDrk9V",
  "key11": "23a9iVV2CHnxEMLAccXpoHuS29ZDwGoFUgbGLViZewLdp4pscGHqEWg2BwsFCEaZw7zxncMf8S7wW2ZNBDHvLXka",
  "key12": "XMKEGTpUH4MMQWQZ5eLzYuZVuxz5u9UbE3RUdP7C5Ch7pP7w28MkCjDHFzCM3PebE3pafN8BDoig2qWp6yzfMtr",
  "key13": "43BhbD5h4ZecXfMYmsSV5Di7eVktNaLGsLXmVY8kXf5BbbNhQkAoqNPyma7gGLQkL4WUCEEajmF1eEPeE1AusNgm",
  "key14": "4TrEVKb4Prf6PNTtZjWneDF9znMMB2FxbhHukLgHgBs6As13qnDhjDoPdy7WaF7XMRz5UjV6KEHxzYQDam9nHnUF",
  "key15": "4hGU1t9y4WWNTCAtwmaZdbVupjAxZu3FbYqPKSKFBt4txEtr88i4Bc7aX1ZwMcrqt2aknjFnYE7eJyzNpD5LDm8X",
  "key16": "3ZokeMtvoosVEgY22RV79HoYSRYrxSwpiTEWv6v7XM8wZTmKq3u38Td4EQuaMfAvPQgpYAm481eK9aUFQVzKLHUz",
  "key17": "2NBeQ4o629vRVKgPEeLGLv4YW5LEd7W9G33He4reHx5CHFnYbijKuG22MZq27ZvduXxqvrXyFmQUZrBsS7vDg3Bk",
  "key18": "2CkNmWTM26SYMn1gvbRRmd4iW3QhUNTZrSVuw3Fe1RnJQpDZEoLWPPJr4g3wyqmcWLdGxwuCnuBCdnsCM2KcVLdm",
  "key19": "5X1j5pmrEGqGpeACRDJpeeiRm3DnAsStrkk7aPqjsLehx1mB3a1QkYUfbbZ9cfN5KspWFKfQnwf7sWxtSztFgd7u",
  "key20": "5xBdL5metqPsA8tjUzdSEjWBAyWy5RQ8MjSJtjVxWvyWto7vUyDL51VfPQvXgxp37UYhT4uLCMrUBupWUG1MkE4t",
  "key21": "3yR3o5uBXPzFoLfzjziw6nrEir8n5v429rG3azbHS4eRrLswZ1gwuFLXmEdtXte17UBERpAH2VqGEUQ4iDDoDqZ5",
  "key22": "3CDKA9GjsfBn437bfLtDtxUQwSC56zT91btPQpZZ5EpnGRYSGKeLvPjb2BMjWEbgqf3m1oz2JFzvxrCL9ZrKEy31",
  "key23": "4inDMskrB4Xhjd8fd1ojZE7a29wBdGZixrASBvVkBDDRtgEz4UXe5oT6D6y4hauJTN3gjqSGShED3qzefkFFm7TG",
  "key24": "56RRvH6QNsY1bgZsV9sRpwLiAo9fZnTGfHx2bcZxCEJ7NCvvi94oWDMotb3Vb5jWhR348RBfsvBKwzq1HNPX2psf",
  "key25": "3eZAtvkACv6FR4cwJScYDezHZBAwtGWYpfxiqqoYKwicXerQMkf4LZoSpUTuDbJDisPobTuMERiPu27w5E5in4rD",
  "key26": "3ycwz19Jot1fKqwBVwUdKWGf3CwGvSdPPT89NNu7tCSj3t8gRb4bqyizLeuZb1PpNmQHT3uT3crpdpBanM7HNjdd",
  "key27": "2VUAWfqKoCQCafi6Zt24aMPzXRqQY5jDaKYBfGk4ZDSasQ6P4SFYDS2S2ck1WngUgxa5pjHUHfiur1kxQvzAgBrK",
  "key28": "4Qtf2k34TJ4dNrmFe7UpSR5DaAAVZQ99W6zsNYDZSx1oRyTcTCoN3jMVKzHDZ3kocNfyDaVqiovCA9GF1SMpCGtW",
  "key29": "25yMr14D4SBkw3K9MkaFxGwNKpob5DTZ11FyxHMK4qxGXEDZYq1kPT85JrSqcAyq4Hc1NdugJY8EZEMcLgatJvqU",
  "key30": "5sq2MYE3c1jaRES7nQSW81LRXqXejtjTa9ByK24U1DPCpKK9JBxykDMyXAZCKSVGoqMoJ2AhuMS8v7oQCndeob8a",
  "key31": "5dZAAcy65UaPjwxbG398F6F4sxT37hrGzSghbLpKE8FojNK1ENbnBbE11JgFFGZJEriVpeMfL55wixd54SX3A7oZ",
  "key32": "2zsv8xNA5LyiMF3DHN5B1PENzXvt2oZi4BzTTk4ziyEZ39M4DwhndCzAdCuheZ7Dqjp5tRysBoz4iUekA6fyc5fy",
  "key33": "31vhrkiC75xCaeSeiuL3LzX7n8UUcFSifpbBhSUqb5QGeA7VFjhMVt8VsM4UZYedgdegBAbNhtYMo1TqCrLTQYBV",
  "key34": "3Hp6NXbVNmuUDj1sj1cJpbZoyBThEmY4MEM15LJLB8dCxyVuafaTxQsP948s64aVcQt9NwS3pNrsiCFdDmitjz1s"
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
