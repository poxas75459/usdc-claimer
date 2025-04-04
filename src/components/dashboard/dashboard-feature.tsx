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
    "2SuSEv93Xbvmq4kUfsx7fg1FNLbSzbtdmRGkkrALcrqYrDs5qyWy8cGj9HzAikeV4DGATPKDgmu5GLWka1ZSxMAo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5fBYGNV9U4GKqoHhcDmKUN7q9e3pH4Y725rV4gvwiSenRYCrcUtxnwKyWVafHaDtp57Te4DyTexc9JJqpPMF1WyW",
  "key1": "4APWC1JJPTngDtQceY2iC8GhGPxAZEiwsPTqwHrJXMLqkimomBRgi7sz7Pp7V7tUxFMiy2Yba5yWipuN21GEUcrf",
  "key2": "5RVSTMx9suCiZibNwwZfFg9ByR8u2fxRa2NNM4v9wK9gt2Do9LoS2JcNr67ZzLW7StmLBweigvsnLNND1jqckfYS",
  "key3": "4uZ1gKzy4mj9MLDWGyCS5hgY6GAwbvoJ4xHXniYtgg8tBkPq9AziZzVRL4ZcputhjYVCMMxbshV5vz5UwxW2SZMi",
  "key4": "5JkBxpHGqevYoPzmjvsnNqtzCJHi1LzYMSgj1GNVxKZdX66feRg8kDV7TyKL4fgcVQKBrZTC4RQXvFzDzvk3vDt7",
  "key5": "3sAs52dW87Ua1Gaf3m6tRsCoB7Vp3e9XdvXDW2GWxjJZjdyC94nNRNPJAJj1K6YoUrD3Mfc8xR8zPJPBkKqLuyZQ",
  "key6": "5jcy2txVZs9Q89Q6S3qifER98Tmv4Xf3AFaYJDDWuxJTQVuokWXMNYTDzdnBrw3Dnd6S9ULQBTwsjEJXm7Lwa8NP",
  "key7": "5fEJeprSKGF3pPf7oFXVZW6u8DufGefM4aVyewQsWwVAyz9e7WuqiSwZYiDq9kbkqQ2AtH1AoFXVSiP5KW6zKTt",
  "key8": "4xbWjTUDj2ZGUFz3w5QnRP4juEJoiT6ckPkpb8FKcFscUawyDeC5MxVQf4MfFM2dE1ywQbFn4jewT73nhYQEFSdn",
  "key9": "d5A7pkibRegQ6Dsrd3Cnf3mgXhxrgt6NVEoNTDmx2feHKn2J5VZ4WNc3dZVkzuTpyfXDp1uy3Y1UmGeQWq2jGVR",
  "key10": "4aJR5UZNDxfRV2vCnu8gJqVRNaqeTDcqBZBgKcNpMr42Fztn46GVQMecaA9mXUYSfKFkB2AQojZw5H1SfCK2XkMe",
  "key11": "DbjmbNq8zCSeDsyFkq51HgHHC6dKq9dQyJCNf7yfxTKkhoc6KaEkqcMhFBAAZZn4fubxQFHXchu2ctvkWyXP7J1",
  "key12": "3q1V4d4Xc6o24Yi8AdwA639Xi9XuSERZoBnAJrCScUEwxCs8sEwJ3RXTx6W7U3ua3HxhKVDTMKhFDnZRmfrkbeMD",
  "key13": "2f5KMW1oniWaTdsMkbQBQbvbZd5k2aFFwGMdEwmUNed4uFKW1xEMuzizBuj9gMwYZZgQFjJa2axdzbAbXmxeE9c5",
  "key14": "52Yf9z2R61nEyFZDPLCC1KVWoiPLKhxpBqo613w6hcJmqASPjqdSitHvKpp5BesAJahYaAFsreTg5Z2kWSRudNMD",
  "key15": "8A6cKWX55igjWw8cP1tHTJ7QF6KvEJRpSbTAbAVJt8i3aEzXUWgQ76QKjG2QbqjZN3sTzeHtaComQB7bkXkNwaR",
  "key16": "4A1MHDQgixuiJRvnzQh9SbRZJJbzMXgWTWtJRpnTTVwFBM8mYXesoWDZsUHD67z2ndWq8Z7WVn1S2T8oq2WxoxJg",
  "key17": "2mExLnYW3vmHJfEgucvUafLzX8YhF6wQqCEzStvnYzBHa3QdkkqU6YTduJHnkJDXxNkDFrp1DnB399pgUmyBnXjj",
  "key18": "2Yg67KWGPTr4moxPwSYTGgePf9WjYYMSwJ3A18Sx1UNuXudfSv18pLU48EMNL8DaCg9nWb7vto5xLUCkNdEeoBbE",
  "key19": "5XDWhDuUrC3Lviw2tUnjq1h1mATN7n9tUmiecoKCK6KTCbCaKf5rRBhTejKXpSmBw1bsVquNMyfybAVgk6q3nnui",
  "key20": "wsSe9hsmmFJUXnYTPyNVsxsbAq6nNry81AwuujomzaTPUKg8ZuUjP2B5UxVqhqeo1RpQdh41a37msvzNm1eCppG",
  "key21": "493g4ECmxsF9U5ee66ZUTN7nzhE6WSLwq28ifmRYzA9VvTnp5ef6TJvTDSKGCgDnzAN2yPoXSVuj6WHmYo7vgyYo",
  "key22": "5qhyuCNtAqNsAemNqWcFBUo91C24LTgzjxyd5vg1uXoqm4hFrrz79bwRahjjWRKZSGzM34t9ETJBQ2v9cbrJv4d2",
  "key23": "4yYxExfq8M76LvgU8wauYV5Gxsv4QneZRq1mmUU13LmBuXczzqohJWxq6tECGthTZ2ed1zpMwXH7WRQzQwSPUzf1",
  "key24": "4ktGnQgGF68sQq5sLidsggv6tLp7fuFerXWaLDucbQSo8iRB5WrVrfMWhP3Jy1WmGWu763KrHdvXbNFq4aCATQs4",
  "key25": "59rXzjqpugFxfhWFVXTquFyLi5epoxZzVPBvuKftRjcWRhMFUX2r3dfq9DHx416WoLUCbw5671E2L17vSUekBS2A",
  "key26": "5vederiPVgYqRpXhrcbwi6Y1dNEuiua4HVEvQWsB5wboyPbXP7oiz1nJ3m8UnF7Yosc9oP1Rtb9C3j2jxEDh6VGt",
  "key27": "3A33c6myCs5bsotF1BqNNN2qntiBPWzDVnYPNgNjWo7qy86Hd56nribc7rrKMyRcHDoFR5LhZwwiHYrrYr5vJjh9",
  "key28": "3SVEhxQqF4KUYJaUwyjchTVoxkPsz9JATs9qBCJuPXTyD4rPhnwxwBiZB7UWy1mMF9pCDSfHhTwYYdBkxtntbJxz",
  "key29": "6EuTs8Ru3jdFXNCFAoXteq5HXSd3omt2fzkuqyKEkfLfi5KXHKepEob9Y165GLKmsMXhHb5ZoXGsNFataVc8Sva",
  "key30": "5KGhw4mDfmuUwQkg5THVy8VeboNrjPfNSRjfFajn7tjhvkkTbKNWHeEr47wryZyPZqP4vPW3oRYwhCKkssD5QwWs",
  "key31": "5VpJX3vLdPxryjy2ad4AGpPif3iTZfQjhHsYBXg28bfuXECUTVc4BDVKgiXYBehKNjCp9rJsdw77hEstbHiGAa1p",
  "key32": "4xo4Qz8U4u11B5Nbj3DaNyA95AXVVbPsQhg6egBuDzYQZLPJAWKNVXptPnj7gWuNTsSWzxTPuZoizdSAGZt1V4Vh",
  "key33": "4sQmcpk7C8tTNkDALgGC5YJNk32WPsdDHNESZaaQShia7ZHZw5ePai3MM257x9sEcNBGDGDxkLJdmCbYANdGgcDJ",
  "key34": "2ve3ZyjViD3fKJGpULyEpvYcnie5wYZSs56yNWivYZaSjxZ1uJSbYr5wuXahBmUmEwvX8pDchYVtMQ9k2GHndCFW",
  "key35": "2YHuUWdiU2jkNocs3TrNQR3s4CVrx1V19dZXxKF8nCWR5ZxKPWWgu6NTCZVdshcYCTVFmyRKTKcoV6TSE7SCfDye",
  "key36": "NWwjnEomJBr7iG1cVihFaYbiMcNdhNjdZVUgpUZPonezDLzvwtNQGLt3cHYLF3unBxwFV58B5tvcf5ZjfPywuL5",
  "key37": "3xguSoLQLd4h4jZXCYgPQ6wdML1cWgP2Xf6cMfrNYtpALEVQceSCwquHU3nhqJfNZ8yfRS8WhFjVCKEqqabbKDJ8",
  "key38": "3Xp7pFUyh2Ao4yb6pDW5J6TJoQygZqir4T3xBSeA3V1nhuFX7ZQ7QadabRDrQYKfvHD1Vu1y8CMMLTj6EFV8ZewL",
  "key39": "57b8GLckJiXmGjVCb6hUtpsSj5duTcNTrEgsGGrytqBWseT22sLPZMaFLorFfZkApkXsCVD5TDdaLZsHmGCSEtx4",
  "key40": "UMoHxNPWuLVnNqPFSzLjw8p2qikZbvqcFdqvQaGUtz5bL8U27UwaqWQrJpZAonzii59ddMALMmXByUMzbPHHzT6",
  "key41": "5wnGnSEnc6yfCmZBK7JHoRCgKFYQ97X33YixuB316u3vUQwq7n6EdebRgNBJjx1efk5zcuryTUXte8XoJGB7JayJ",
  "key42": "2BczLBLJgipPXorwuiFb1Dp63e9izhDCFyfy54E9Z53uc5r1jDxWmGaLQsSKzjaSZTtHquTqfhGD3icWgpukPwMb",
  "key43": "2nVfutqig8AVFPrPbyzBxW4Z9ibZiP7CuxHPatJhb5hLS9aRZCSoAR2f3RejD5g4DXMyBXE1WWYfsE2CKZfXWeXE",
  "key44": "3L7B5Y8WN9ktFZRsMm5q6UetuG6G6d4RWnJHhFpbdYKmhENuh2bVdbmHv57RDRWoBy8quDYWdUEgVDF3ueDaGd6L",
  "key45": "2mYqpPptFPKoWqJ1mtX5pCBqBjDBykkh8NeBv3gUpaEarPN4qndKiM8oF3tvvuvf3AYZ4D1xaM1oCdym9Ln3pRJ",
  "key46": "5zCNYSw8L6cuNrarkdMeyrCVMpWxvHKHu2tbKv2xtEKQac6e7FySQuQ6py31WnL5zCwq7sSPKsM5mBwT32YWCko3",
  "key47": "4KxyXbvmvZnk5HisEb2939ZRkaqD3k58qzR8Be6iEW1JztvTCFDC7c53Vqkufh48bUWKyrXq1n4n6iQb1ZGtvJ4Z"
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
