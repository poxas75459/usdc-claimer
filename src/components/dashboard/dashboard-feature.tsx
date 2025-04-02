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
    "3y42naMafQUc69JKgyU4vavbBZJEcXZmQYwhYKShryd4jpi6wHoN2zxuh84kajBF58RvmyDKPZkpun9Tf1UqNcVM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Z65HmTJ6pdDmb9QakFYWAXT3jpy8L5q6Hdb5b1bgynqS22cMqVyFdozTSiuDT8w22hpbBPMriBs8rS3MRDHR37f",
  "key1": "24fTyNztvGJocfdc4ydmv4Q9cbLXbSXyruDK8rxG9yJvDNEj6R5BNZdnPmVKxTzqddoWEbg8xAZiyXJAP3kdAy4H",
  "key2": "LzF7fYR65E7Cty1wUZyyms7Prrau2zS8rvPBQRCVPE5zVtWuqTRwcJeqvQx2tR3ejyxbAU3kA5x8FArVwtuVGYp",
  "key3": "5NnDXDCcVrr7jZwo962hRVcqKVCfKF3EwYrMqUQz4Dq2evxFBrQgnPJJwpvR64dvEeBjLGA32fyhcaqnpJqAmPcf",
  "key4": "2Hp7DH4LCyd5HnHBod5nTY4Tym5V2K3hPhWrpGYRFNFNKTjUd98DanhLxZWXG9VZg4hg5tmtj5xTxiZxzUKAnNme",
  "key5": "5dqiq8XWN27FT7cJybr9hjw9Uf4kEHZBFd6GJEMBrHhByfgvzdmMo7kabZDv2MdHPC7pD9BNuXY74xhDNMxnHoo3",
  "key6": "4GFWNn5BMJ4UMwsXY3ZVHfT9So9L1fZUGVFavb9WTcyfS2yQhRuDKfhu8M1xEuXJ8xf8cgLQrwZYADDiYzHfCv5G",
  "key7": "t6xZhCFYyAbhNB9RoUjkWyGbnN3J9uLZhSgiTd6KVU9jRtfQc595zZvtH4XFiegzVM6khDh6HP3XRhir1hwCSUg",
  "key8": "63fDG9Nb7co8VnLVsVXahgc4PahZfy8DkGLexZDikHakvdvvwGiPb9YDxo6zHAU7G2qobAy5dChF7EF4XH71rffS",
  "key9": "3MsDCWNuq5ouxyYQ2F1bAV4EfYFXq9VtiqJudzE2NPE8Ws5Ee9DckdyRxgZqpib4qAGg8rDfSCJww912aJDvo1ms",
  "key10": "5Xt566nnMkZ9J7gKnwsYpDwbMqhf1ySP3xnGQuMapaJkJSALQR7G79RqpFPm1FV4MVHjo2wAjx4GoLF1puDCAmNa",
  "key11": "5acQVpvhpP5y2AZGBux1AkdzqYuVC1APjBUeUiGVS17Cc1DKiGA9cA5MQSJuGFu2p797PPgG6uV9DeVgtYgTYMi9",
  "key12": "LuDXbtuphqpwtKscxkpGEBP3eTgRQcR5GDzLKNWVqm7Wp29G1rqwgtdVX87A2mENmRjE4LVBmSXFfaUC4Diipvm",
  "key13": "4oNkiWFLgvFMZV1Skhn89jhe8zAv757rCT9Utqn3TPjBQcPT5UVwDLoQ9czJ26fy38B4BFK8RQh9eZSCbJxyVr7r",
  "key14": "5wAL6UBhCNS5qcGFQbAQPoYdnvHibyRjtVyRvWKvYPXPJGsfaNw2hsmAEkmuDhVQUW1LkXk3xDeJpm2e2zXSy1qd",
  "key15": "26TfEz5haBYMwJEf7dFeifEMqi9UzCGESEgYWBXVf6uMaKA7FsoHGgEU9T9e4c1LfdbHD8bFU2CtU24XdMyahpEM",
  "key16": "4aevVm4JibwxM9WuP7LfWDbNMkQfAQjSwUKQGCwPnz5wRvpsxYirabUWLtR5Ko789E2hDmkC2rThYmQKDZq7oKp3",
  "key17": "4JTqdRwp44Cp9shXPygDi38pixvnZ8U6rNfbzkxH4a6mipdCFiiVEmxg9Te7Niudqk12WTYQ8ijAFxyEWqKE1ZUx",
  "key18": "5peDYGX3zocTcNNCgWYdTPUpDBPLk9wutqDkLCaa8fy1izYvqXqHSMTAfPTjD2uwVfgnPgWBvEJBUq3TEhcxzm77",
  "key19": "2rbUUGKWht6hsgXVY62iU419mwCTfYPKJ425dfCUbmsPhFHQRjrw845Zmjfgjeaig3Nuq5E6uKhzCf8pHzi9PhK2",
  "key20": "5aeGkgRnqoQ6BBF8SAymKshMteBXxdT3o9q7hTqB9ZKVTUUrGGtQ78pUfNjpXPKpCnLmGyKAhim4QSpzo5ngKPNe",
  "key21": "5ftbDfJQvPYWDSKsMkYgwSMiCpW9PT6Lfo53c23DwxDpqViP8be8tCaX8QX4whpEnG4eW69YWgWS8zNdo6N8hL4e",
  "key22": "2CDBMC4RBjHP4XcReYZjvfQUkYeYUzB1pwaAHVbuCb55qHCsPnaszv4uVoL4GikQ5wKWv2w68yduAm4eiv1ZMeGR",
  "key23": "3LiU1fkevTQqMYsA1QQD55hnQjTpgDTar7rKwBLmdKvTDZ5nfsyr44FULdABgfKSqcjd6Y8Ru3fx11TjRPDfW6V4",
  "key24": "24E6H7pkLvd7K79devCZxNRPa1mMjpMD15obQGMR3e3iGiptQZnXz9Z2zqZ8trzmNTU7qiVTCMGryZGskyBifbcF",
  "key25": "4JEBjAfNpmYQuB91bSLdBHPNu2Cu9u2hZx8ux233qbxS46Gza9aryh7LewHKTsn4V4X4x6fCoiLAwyA2XMYXoMB9",
  "key26": "4iLg8NkU79GxQfrSx4K2ivXTbEMcPftiwNCyygBXnR6Vr2ewhGPFGQKN6fqt9N6Gu8arnZE4eYa8wEw1wzMaqMqo",
  "key27": "5PUPT4tP1oCVyYwm2YJFycC6xgeWQEPSp6LCo7xDgJ1S5jjVV5NVxLjiVkgiVesm18mjjhoSnA6t8o4EQorAiN7a",
  "key28": "2SdJGwnKqBffqSXdK7NCDpowHMPQbwfQXff6BUPuDbwRFwboJNSKx8N5PyeEVqn18vs529nU4o24BVshdsPFmBp4",
  "key29": "4WNYuU7vu3bWUY2DH8CFtvecV2UemzrML9eQ1RjYWNTvEReUn7gkETPdJkXDcYLgSjR6SPmyyB2oACGzy6vpZnqk",
  "key30": "sxWGGfrMchRtb413Jzm4TVXoCanLHXS9QDQQ1NS1zENd88a6x2c2aAVDf5wqHF2j11T5PnnZNeg5gL4RuPJbF1V",
  "key31": "3T6CL6jsH5jwjp2km4dzr7Nz6bcStwVc24TqQjmiahZYJruPTmXi3ymfbSLFUqLvkFSrfWfedWSQbca6uMf6wAww",
  "key32": "Sw8WSTZaZMxhGeh3Bma2uZbChZRC1bcwtpkZA36zdjqkaCH3kqcXWvRdFY5uZeEzCP1qAeABFQcpChRcwZzn3Nt",
  "key33": "3YkdGML7K68hM7BbqbfkHavc2hNYYrZS8A8twb1dEdZr9t2HNNivzMgaeMKSrP4YdZrkBeETuLApgQUABSwWfJNk",
  "key34": "HiKQM6aAMzyrh6BMf7hvZcVQ2WUkcbVsnLi9vEKh6PYFJBr7QHhSnLCu2FuvShiSZ7JbSaMTVaCs45Q9FKRdHfW",
  "key35": "2E3fjyjmycYFtc2ZBC6HK27ofX6DGRVRe8ed5JzfY2Nw1vzvdGcPd1qNmegLExTBbUbDUNV6bswyCteSNnmibG8J",
  "key36": "2ti2avxQWr7ZKBXdib8qgWdXxqqMN5XUChUXaXZwewBzkaLXDu3uL6b7jM8aJnNkeSKMZrx6PKmUxxfRQ2dwUPft",
  "key37": "29FATaHXDunTGBn1fMazo5iT58q8zb85RJ5ZfPkGgFYagpqpJEdpihockjxL7sKho3pDpPBfp3A2fEUEewcDxGAn",
  "key38": "4GfuEhNCR5a6vscNG6HLa17q1zXLpcx79k9C9rf3ed7xdXxmLJL7F5Tkw3dmtQH7qZrPhMc6c635AyzUZw4VLvb3",
  "key39": "5MmvzoJ7GYiKg1XqpipXDKkxrkE3a1hKMesvKaRESHrbZfJB4As6mg2uK18Mo8TDWc1LdWszx8PmSrhP1CNx8ydZ",
  "key40": "381PR1xC3CRHHiRQxhTASzrywK1qjQug1uxH3rfDm2MU5h6hy79noKcede7rZGE1Q7cZevJkGFCRGpNt4nFJt8eJ",
  "key41": "3Bn6ksKSPnVbdjby6dWvViUffBdKQsQJk4aJxtBJYQiQdHUcRtq8G9LwgaQmwwGq6TepWCW1MLwm4j13iigD6iQf",
  "key42": "39ukfuMSVEm14M1gi3VB9MpZCvzTWRBzRvpfZ5arhzmmomQipfwTP9hKPjJSeKjxh4d5AbdTNRL7ToD2jKR5pr4N",
  "key43": "58w6uvnrdDCJ7DcWxLo7mxvQWMj2a8HLJ3CHBS6eqqzKq8tYwoFauS9BB4QiL9vZa7CqDW4sySL9J8CLy96Pk8sz",
  "key44": "2Cw5cuCKJtNLtrzmrEwRDPxRapnQgW23GdCekQkEdR4iNNuMjEGPvMzbfM19UhsEGA8Enf2VKehcCNJjiADipozd"
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
