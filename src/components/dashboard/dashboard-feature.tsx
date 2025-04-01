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
    "21faWK4Wki5DrRifUuz3t2Xqqw1kdbMbr2wwLPs3pMqfcJZ8SJwq5o5KP2u1vpp8F3yyUMBRMMPW2oVe2XY5AxWA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5hMgJz1ySvCjDuv41KiqTc476PxfMyeyd1eYMxGAm4bH5k32giqRFZNqsCthrSjRt2Z2bS7y15bUuZhq59hjjbLr",
  "key1": "3j5u6zM1LBnsWLEnKA3SMUTP9RT8admkBDHiyjuxsAVSMrCd6bYfjiJKHqgDoqKXvpkvTDsiFVJqYQwFsMypbMnr",
  "key2": "34NkY74mmm9JbiPRGvX5psrkiJHrGkuHXW6mgKKVHE6NBxVQz2r3Xxgq4eiSPbVox79b6gcUCPKU8UHxmxeDYQkA",
  "key3": "2Kc8mcqrjU4cqwzLkjFjpJGowy2sq33KKfa1tA8pakYj8rFMKruYgMW6dFvrpLL3hugWs5wcz3ZVfYaGBPgntjjB",
  "key4": "2Ddowg9kApjrYyuM7wn8MZ66wsk72ukRCeZVF5SjVEnpHJhEcgGPzqn2ZxEorq2ioNgtxbVKjT1ZSUjRjtdv43Be",
  "key5": "2ckuYevNuH6uSeXAXxeKULdkrRdKpGnE6bFL2Zhs6sxeJbrsKeX267QwCQVC9FstkWQESGvQJbnT9f1GYq95Vn3P",
  "key6": "2iB5iRadMtov72YQ652u8RFkEWYVN8BGg9NpFFk38XjeLdRaLMPp5Ap9HwWUFPyzT2qa6uAMXnniFre2VoX5Kgzj",
  "key7": "49K5ZyEfGbZaDJa8xocdG9BBqo32mXjCsJRYb7piW8tX6NXAPCj7ibMmknTHuYsnUt5YiVCh8cQSdgFeGzrzrvJT",
  "key8": "4SLFtxAFivbioPCs2TbJwJpgUBVj5agxtrbMWgUsENB16nMZzPPtPBdLdfEThP34zkMBtikGpLivZFwXZw8yQ1aS",
  "key9": "3Ktr1uxGH9qoCcptPnmUeVzG1Ri5Dh92gHbBSYztvmKxNnjALxGu6g7ygY3wBYoZUogp7cCKR3tdmSNJ7AYqspDc",
  "key10": "5tUnYv6bEPemVB2VgKtFv4hWfyzN6apKhop2iD7uUGb7cdTvWB3HEeg43SFdQHQ2JZ78bzETNtqWEejSYkW8W7aY",
  "key11": "3xRVpXiuVJMLjBTqsspgFsfvWj6QceE5LtpiALf1149Sk6ZBtK3pTYmp4qHYy32HMpyD8HgJXS89AttNCEXkD25S",
  "key12": "5uNTuqwx7ySQWDdLVTuiCi9wBzyWKf1ooy2MHFMTCcQ3HvfjK9YiibLKbUEyC3vHFBHE9oBc7WnzXzarwWXKRAcg",
  "key13": "3ZKnxVhvgL7U32NPaRG771DQEJ3wpSd8wHa8YhsqTS5qFHz9dZdKvHGoXTpXYwdcJdmUiSbaY7XyQ2krMPm8cQY8",
  "key14": "5PhaWGSTXgSxRDQ5xN1mxGfvEtk3iUpQCxrzReyMjVLBuyhhemhHo9hyKGCKJDHTZ3RaCdAQN3jAGv45ngEFLXfx",
  "key15": "nwgxEcCcEQe7gN5ke9KbuS8Wh1zjkA78g3jZjajsywVs6hRfRUZYUocu91f9m7Jy7Po8rv6MpHRcGcJJzM3MCyp",
  "key16": "52MW8T27cms2MACyAx2XERYYHc1bFmzn9m1g6w1ausjswJNLebjECfjM4ZgkB7r5g9YambYCZhBSiRuZYNjXT9tq",
  "key17": "31FKaqPayZXXCNsMaSnR6Ft2NtC5YWdQLSyBfre1Cw7FhX5npGe9X588GBC9M5J1mynECMMzHtfpGr6EXJ4FrWW8",
  "key18": "2tsJp9w1kYw6mdV5GSPAsCzv1ariTCNNZipCZ4ZixkB6trd88i3vfGMrPb2V88LbAdZHKqysZutTM2Qgtnoyymbp",
  "key19": "UE9w5oFT6nDyywCRi81bo4L5QEUcnCXNmi6nU1L3ta2DQ56gVxc6ptwMvTVynFmvcikeSRE2qovLEdED88vHPPb",
  "key20": "4n3huhHqVkzGGEz3HzJ1JKKeqCzTbs1iLkoYXw4Rw76YDA4ZA3PK2sppY2ifhrq1pXptRPJhsjZGYU2AzLV86abf",
  "key21": "3ZGQJ4sKFCrotAhA44wqusfBFBKpsu8675z3anx7TgZtxrgezGbeXCKqexcJZU9x8CBdnFfUfH1sGJk1paYpfx8Z",
  "key22": "24CHo3xYT3xqRu7ch61gfGawN1viJLcRdWRJKND5ib6uyU3wuRp9wfRzmcDAaqdJofJWybuDDzq8BB71ostJ1dBw",
  "key23": "2GGyJXrqKh6oghstAJwiESoA3NRmf25CwS5HhyeRMKunbxSuwBibQ8PqorzsUfpei62sWHUWjbhjMwqXwZYSvgx4",
  "key24": "2cTVnrjkRhLoPKvtLEkMu7Phks1tNYsbNNyAWgxEayMDrWpwG1JWAXpkjdHV47M22GGqG6Th3h4Vk9swoo2W1Ys2",
  "key25": "2DUWtdvPf1Pjse2Z5t7CsDxYw5PBDro5H4qq4tPFUfLw939amehQTAf1mK8G9mTe8A8T6vRacpYvJ2pNggeDHkjg",
  "key26": "5LNDczKmPoaPxBCXYaoagQtpshXnBGahrijcwwf3VGZn1MfqEFQw4AHbiFpXHe7j4zF1cjerWadfY11saeahrbLz",
  "key27": "YX2ivFPhmfp4bwXNmFKArXnYymPN3Cey6QgrxFJRfgoiHMhy8FmH4pujLLiiH4df3M6b4aC6nZz7AL72xdoRWfc",
  "key28": "rrTuoauQK7pynGsWH26Qft15rMimtA7DWzymZ1oJNvvpkDevwiRbVm1oX5GH3J5f9C1RfjQPMxPvSKnubqb6aK1",
  "key29": "361qJeAAY2rCZ1WfCTS38RjH94B4Fu1U1botrLYuUaV2Q4yLeCSaGZ4dAWnC363su86zQHj9jMfKCvSzNsVGKGdX",
  "key30": "8sY7AZfx9WBjeD9YQVfhYiD5CvanuNyYNZqHZ65Qv6QWwNi8ZefiPDkNhrpjSeGPXgoNUJ8paWhGhTp9CxVzDrf",
  "key31": "4Hxdpz7mH54MpW2SRVGB2oCbtooZ5Y83YwHuU32nZWbwDqGZMHXJS5Zy7tQrFn1SY6acQVxxigpVMrEbhozYLBha",
  "key32": "5BqzxdPj5m9TjNuJ1EAkCHUp4HfddYGSX5VJEaUcWqeHXeoXW8v8iRrKSkZseDSbaA37ztquToCAyQdc3zemToAG",
  "key33": "5p4MH8Hqc9GtjEb9PWCJAxpgKjZKK1eqFyMjXTXjtJLAXNkurgC5q9Bz98uV5jVY7nNnj6FwYqBz8H9kn7BT9RfB",
  "key34": "J3msh1HKLC7pq4SzwsuwAZQGLyudhHXHwUuJR4wRiAvqAcjZoGER46hRArCa2MHBogx1Dz43Etx5utiYHr7cUvi",
  "key35": "3VDUH9FVQQpCLWFp82TfD14yqfwumfSuzg5CRVg7fDP5PPmxCaAp9fpZkbQhsmdhoBnvAv9fijFPFnQ2HroMpcFX",
  "key36": "3RfaxqSb5gWXKNwSx1zcPpZmSSmtW8TNJth3pLxYJCai1nVTF4ozsSxMztxVH8PnQfQQiePUwEdXWfrn2gbKRxUf",
  "key37": "3JtH4SMBncmfYcoUQE8nRNXagUc2VVm6xVVjFLKaDc82RSGMuVr3wiFyFYHbVghxYpC8Us4EpygvC4YZRJxWUfB2",
  "key38": "3p5ZZyZcXTbj78ySb3HPtfsDwueRVeHDeR7LtBTPRaMk2TG5mhNujRoecAyTXyFKrmddAPzmiJHmjHgQA1cKYHHk",
  "key39": "5eE3bav8DsFeknQqSsx35LKmfQ3Lm2Egg3AiFo8e7nreqbHb6wNeYJuA6Wem5vBjXykE5UTP9YRXBWaspJymj8K1"
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
