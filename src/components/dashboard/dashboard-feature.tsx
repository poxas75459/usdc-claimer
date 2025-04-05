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
    "2m4ziXgAF2m3ZEoRbEnXqVtjwgWqp1UxLuRbJoMNUUWkkWX1JTdJPDU1Gikeg6y689u79KPH713wGoqZLQa3tQoF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5mgvswmPC6GLDgwJb6y4x17jB5zR4Yuze4igfs2VvFSvRHUqoGT2ZpLY2msQ53z26eobkZzU3aX8XbVR6zPNBSUU",
  "key1": "3oiyPhuPSvrDA43gHFfnpBqVzGRwETnS86MjtJWCkpeVo2PKJKqrwEfGb7TeEQh1GXCXrXbJ5qjYH7A8MxHUDVnd",
  "key2": "4snRhjuHGYCXUnRpRCoCtnvvzHDf5xertnCNgbjKXULzAE88Xdvjt4kwBGxLJAYnv9siyfUbFBfPTmg1yY2zEUvL",
  "key3": "r5JEfgDqWgZwTMygvRM7gBFUV4Bgx9ixNhrpVNakf1B7KgY7azW1QrssBYz2yaWcqkwqJpn8UEG1dPQxChj1gXi",
  "key4": "2qAxmrZS2oTB3FMWWjquZ2XrjLFF1NjFP5ZWFyNKWnz6bCrmfPDU56yooF19YKMKDXxLvdkKJPQ4ctzPZKpB2zcK",
  "key5": "3GVig67rx8NkRiYdvJQQ1yD6V6sFdm6Kjv3g7rxkrVNzUXABiPH5VXFXqzWAaryFjpDueQykRKtdmXtdvU2C4Lqp",
  "key6": "3Xo2BCVsvHNYJ8N9SsS3eoSMyfcZqFtYEF9oDxiSmFPprdCrxfvxavwqQfwsfWsXm2j7NLVkdGEs3cdoUhCVfPbf",
  "key7": "39M9qXTcJK4WzD4H9oLGTgYxGeY6KnH28GukYG48upX4eUNXwDmaaW8vhGnonJBtWAt8rMYHzTpUUKns272yRyy8",
  "key8": "42nxkypvWC7y4VuYj7tH5LkLueAtTNCbtWJtfHhoPUWWmfgxBsgaZpj6DNodVGWW3U83yt81oxN3YkpMa2PW775K",
  "key9": "faRyobEtDumczx9anFX676YeGbyEqJWhGMPBhBYb94SMGhjXLHzMKEXXZiEqhZBnJajqGCdyosSqYKCJJhhBKhA",
  "key10": "4npJZgjCU9eTM4MsH1xyixyE52mtjGct8ZQaqyhjRjUuY2w2GFxARQLxtk4MoD1Q9THzgD8CPFq83eKEtYz7h9b3",
  "key11": "4LNhqriS6dqgiATYeYfRmeW2USRWUYXXLig7aDPnxHbFnQGHkb2ssN1hQSxcv4P7BV3TPzaY3igZWhxwjVTEptfm",
  "key12": "5duvSQXbTMCaVEvnimmrvB5ifezX8mrHTghC3z5GbDEVVoH27ubhfXZx8CW7H3ADGTiG6Sh7zD7wcxrGwpLEqffP",
  "key13": "2kzXp7Y7QWdVXA72oyowcjDcu7juPAEDmAC4QWtd2RFuC6GG9f4C9HedBwz8fC4xAbStTPHxUmFD568sU5mmcWbR",
  "key14": "4ZFLqaCFbDZCcdm6SC5NaB7kbSymeaDfwa8VrMghoMAcPmfTxzLT54TNSSVUB7HNpBpEgJfFmmaMt7sXbBJww8rP",
  "key15": "5cV8J3iCqrPB6tdEYxjKr7wuMTkybRi8fqpSYovUATV9Fr96cJdm7RtpZYkTbjGA4GCkBYBb28N8zasmAuVukL7H",
  "key16": "5gCneMaTT5gCEhNQoUZXKRKQwfWCWssbhLDVEquRNpD7aDaqpEWQpAuTFKbhtiKbJRxPMRNu2r8PfKnecT4xPsLV",
  "key17": "5MFUfYYPizwERsenUyhG9aKK5TZ4mDG6PemHaLJCx4RGPjcoqJ9PxT6BwbyRDwXS333Xf8HHHxBJRTnTV2PpYFQS",
  "key18": "5ScBCTEdKVgQ1iQV67QYZEmPuCqcr9Cgmmx6aUcxQAh43RMEaeBfRxJE4QkvQjb81j2CjrRbpAJYxSyhrJkP4LZP",
  "key19": "41M2McyEi6TFoUuXtZbRiy6VYM947TG2rxxgS8FiDTJ68k8rEN6QQx9jjaU1GZLjRWhmjxNCcMniGS3gEVprcDKX",
  "key20": "4FtVggCLrnhn265iAQ7oAr5MeXFGXuhyoj6BwWyHTkMYhGTbNuxmf8Kxn2sp42EpFmt1E2xJxZVYccdBjviCeXkq",
  "key21": "2uv1duNS5f1RgfNWYHRmVgGJS251cwNx1Dbdz8yYH1kYGVkamYNESquJ8giqMrqJy5Yzafx6Q3TvPuiTHZdnhW5",
  "key22": "4Lf84xB7RZGzFu6ksY8CgyRMk3aZWoVPpB8PQNEKt49UVbS6b7HmG3HCBcYsUkeAw9ofoQz6RsT4PLngyhYYoViu",
  "key23": "3DersCCVBDBRpx5dfMNbYwjLAvoSL5f6fskmL4kh4nfBNB3hTbYpQmaEQ5ppCenAYcpicteddSRgoVT5n22qc8uW",
  "key24": "2yobiPt2tgGyrwRHeriHjXxzD7Eb1iyLo3tNeehgF99CzSfjMRz5NbX5CYmSCzCzxt8vAJxeKxcGbUJGomySh1Np",
  "key25": "5LTaw5QjwHJQHtV3mKhMQYmP8Cdc528YXExAJZ9nMbjCqe1HVk3t37M5ZMjn7mWUY5ELGJApUePiqygYEPeEGKF1",
  "key26": "2A3rk15cW2duwP7qcVwBEAg1nR1XQtkEGBEoWkuvEbB8qiaMntbvCR8CUwWAnAv9NbV9WiwGKUVjAKNScJsrJknb",
  "key27": "47SRozE86iF415w2rbGnTTRPcMR7zQ5ox9at5LgjAFKaL9U5tJmQrfa1KJ9UEXQyJCwz7DFPSYsdSV6wfej1zYej",
  "key28": "1KTJHXT9HutBfRYQSbq2xxTbrJTANCxjq1PraZhsCkWgZXKHDDQG5GsPVu392X1v8tJkFqx4FhJ8euBnKvvxUx5",
  "key29": "uJLg6E4vGSKpw8tx8SPyahvf1MLXeoTvKVf1oVYUoH4LdrbEB9h8E41rw8yG3bHqBpfX97v3vRyBKMhGnebezur",
  "key30": "3Mm9QLN7aJhfmBGctjm5V2pgXhZaM6ikpSU9XD7HRWHRLNZoX4PxBUVSnxwZz78zSBK7i9Mf17bswsvfDpbnvXqD",
  "key31": "5gKdkui3ajq7oiZiyMSaoSr6j6Z7wrz7Qy2yEy7339VTXLJuaf1bJTNBjKnDMwAq7RyVkW7pGtt3HAgf49NuMCNf",
  "key32": "K1uADj9FQjUuxkGJA7xja4dkH1SV86TUSZvJ9S5S2QgyqNPk64AAvJXsWsshkzebCMBZZCNee8KYmaLwGCsQWMS",
  "key33": "24qDZA15ZgcTTecSjt9cDJYa5usSLY2T7qJJ4cVPutA4HSjbbTgkeEA8uMofNZer134RiJCwQbfcwxYHAFq16z6E",
  "key34": "3o2yTCHiNYv2kRa4FJAqE22WM6XjTDeQ6zTndXBFUbKprRj2jvdnWQdTYkwSpGZy8WB7YCmEyaTPz4NV2JBXnawM",
  "key35": "5ENGVN93JmwEydC898yECEj3hbZ7xcxQTXz5r1MX2pZV7txzVHCcdzBGEXwhadZjTDbysMEsGZEXqHMwccxphbQx",
  "key36": "AcvGaQ7zPZSdSsue3n16etM2L9Ge1hF7hVa1PxHgyPTMcWmrxmhRjkExw3qJuBX36ryprvQt1EXnhmTxVAakp6D",
  "key37": "2w9BdDPUL5b8VPtg5UsoaihLohHxRmwnMT196v8K9M3qUEJMGwxzdKtoEZvCsnXfV5UnhxASL2BB8Myn7VaJgKBK",
  "key38": "UcKJwqfqp93zKQwT1YbLvsWAq9MqUbmw2qzfPRFY1MbtLCW2fziQmHvHmNJV1LxYhr2iXCRHN6J6ovmWVgwCwS7",
  "key39": "2DAAcGZE9HNEfVN9xU8q5Cv456gvYKXDrr8EMxCMbpjAKGEQqfRGTjek53xjgLQfYZGbwiD7qx6HXGN5A9FxtUEF",
  "key40": "4tgDbjUSLHxu4q11Adb1G16eBgfpoy2BvucKF13KQYWvfn5ACp8sR8D4U8ikRAJdtdJrVFE5gHZMg3Jm4xRLYQxz",
  "key41": "4hs1KwmtjCrgq4FzncT6NsDRsuwrwUMoGeExfrK4JNmtxc4Yw8yo5PK2nRwNoDsRWYiFt9xnHX25jnQyU97g6f92"
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
