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
    "2CMVW7dQcVctZzTCYtZP1Cg4FDeA5rGZGT9RBRv4Xq5XoTXZryvPvhWQJabsSMwxHq1yGBhEgz2LMTtShNHNX1wG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4HSsacf9UPqzwDJzU5akTnfupu1xGarLixLNZUhpaZBs2ZEq4N9cQRPxnURzczgSRqMiUrh5J41XktFKYqc8azjU",
  "key1": "3HtUycucbLaDdGZhChz7syYE6KZHWi9rM7GwVvhvPFZi38qDhYendVpZ22UXHp6PNniXfVFebziMH1pW4DCbYju1",
  "key2": "5dF5d8z8LdvycDcvaiBpc8DoVsGgMgYTE4g4ZGWCx32YeV6RzE1m5nyk6r6J5HQoFEeLoLxLi9Qjxr7YmBm6CTbm",
  "key3": "4w11Yykfmqd73YeMsaymhyhmjo7BjMx6MspXrxxDvcHJjcfpgJYA66za2XzQGkc31wqTLGUb379zY4FTcwFXWPz5",
  "key4": "i7VXvpDnR1stQqGH3eRzvtKDXDrC4owd5NboDsB3ggvA3fbxhou3iip3ZQ7eKhTYCbdzxUPhnvDX8KLMBHQPUKr",
  "key5": "3r6Pik329ZmD8z3d5ef2NjfdRcJnY52yC8fgGh8QEtSYDCYQwKmZeWvd8h46XvmnDS76GaQRX21u8s3P73C4ERME",
  "key6": "HTFLNzRQGcT1k3B3HbceetMxzm9MQrqwUDvzuZ2nXNU7RNCdoUYsS3qTZP53wL4dQuC43FpJPKKTT8hGtmfEAhe",
  "key7": "3n89dqXyQFNc2GhUAcRsEraCghw5mCWQcf5UMPQVdT1f9UMnK4knZ24Aq18Ra9FgqepNNPVJTRmKsZbJPBTZhvNY",
  "key8": "2i9YN4Wodys2PwTu5Xwq1SUP34tbJ7tfcoqd1xN5iJW67H7PQrnoHp4ZPsuh9iUiipMktM87hyniHzuDNxMFSxrQ",
  "key9": "4Zybv5swtpCjqaj926FdQBFewFAqNSLr8mCqpG1rL6KKKShA322kW7uAwnDQA5Z7sosXnpNDzS1SACeuJjuQkpkL",
  "key10": "5hZ4nM3YNruuxL7KyQynE56hJL2KyqpdQTsfGuDNHGtWaxV9mUu8CpVzFEuNbdkHbFLQtQPK49YLZ61uNcrYM3NA",
  "key11": "2dVJtGL3hMbQuaRem92UhpCfakmKgyrhQXpzQPA46KBtAwyMz3HEYHJMGStW4nxf4PGuk4TiH87PVBqxUZ5UD3Wp",
  "key12": "4c37DYHqLpLvTtKt4DPRAmGz7uAt93kzWgi2gYjx1PgRYgmDv5maVMKjbyomNVDptDLBSeQHuYcUGTj2pqQurEJg",
  "key13": "3afk4PnsWxmhS9QdcH99vmZbgciRhGMEUVU4Nf5FiPrie6CLZkegK6jpEZjGd9b1vTYRQ58N8NjuvxCyAaAs4QeL",
  "key14": "27beiAL9vzeR6bkf9KtHBrS6GtkHvQSSCFxjoy5RTjjZo1cgCQT7RXgaQqJa5DBGgcaSJ3FxFSz16Nr4choX17uK",
  "key15": "27BRhL85xoLTcwLzjcwpYAgAWnFxyGwQK9voA7gLp7YU7y2zfUYsxBUkUkP2FFrBX6qUZoJTpeZfjE31u5Ju7tQG",
  "key16": "PATBC5PR7A7WU9XhXTTiK84jsj7wrHhdfpsWBqw7LtQGDx5FTDzFBnuqCVaiTV6dBmBcY6ZQtvYAEQSmuGXMpbc",
  "key17": "4o5XvZTfZkfGQFbjSYfyYywFiFGZrhLmrUT1H1HHFNP95oiK7EFwaad5hF92WLR2i7htiWBD9m6zFxUq6VVYhA1e",
  "key18": "7WFSBrgmvn2B4knRgKBD4hLjjEqxe5WdvZz9bHDMDrinTAAJuXtZsHFeMatDGxWsf47jQRrLAPjikc7pt3cnYyz",
  "key19": "VaNTp4j67bEvwmMmipqPRRvP2W6Fs16RiLRLtfC62rJBxMDAMbr817Kn3LPwjABzYwQWutLLkKttdT7UaATC1Wz",
  "key20": "4agYQx6PtGsEPfSWEbfWxVtWjpn8QH5mmBMruqu7uB27fge3BsehNuyaxGaDKVbU3m88oPwFPhs9MvuSzZKcXw4w",
  "key21": "31uxHW2do39oPmgS7Xjpx5ZsiCgHovW6ZSbuUrb99Bhda1yrkgCVjEBCAoZQ98fCNnnQQEXrbJ3ACzrB1S7iqgDm",
  "key22": "48PLuSAxpKaUaxSMDoTMMQCeZF154wNhKtEX3gJvPsovDcxSpfYtJkDUZ34y9DDQDiTxXnaxmJbczXo9nBUnkzCH",
  "key23": "3NQCeFFsUppRsdZ5LrXrxZpSyRFQTQeWLoiQ2ctmMUs3AsEKuW6tTAAesQPhCqvWNBReCTMsTN7iMvZiJounjntj",
  "key24": "3D8xjBP2duXt3NiH484nQsFVwawcHJDjhyya72uFpRtpRRpsP2sGHcDqijy2o3byM8e2dLMN5wCJFZRUadZ7SAiy",
  "key25": "2RPHQdarXoMPyfFn64RNMPU9TzLwHZ9gQRnBjkVTid5dhRRtiuuMk7M5UWS4ues4FJxJecuem5X4bUTGHRmpDvb2",
  "key26": "37npwixACRSw34L5YZ9gqqFC2EcH6N6KvDCkWvGR5YqsRgMztn5GRLzxKpbZpdWzMXVYJMqtjYZDagSLrWtkzcxb",
  "key27": "zdeXGMueUmdLY9cZ3hKGXinZBEt4G12Tpm3zdNMHA1JyjkQbtBu2AVpgpq6Xjvg7F3abwnrHDG2NX6yxSkU9mMy",
  "key28": "JtPrdz2F3X354D8mmz5QqGjKfCWQgPfGfWgRUoTBKHaNJAYH1AFipLhzwgZFVBjiU7NdJKL5uJD2DYjSv2ZoqeZ",
  "key29": "312iMyfURJjqZpzUZH8XpFSQJNiA5RHw5FBFEhJUMcr8keREyJEHvFUTRyoGtwGqcZEqmupXaF6NBBfM9HPbVaBT",
  "key30": "5aKg9jX1aguzke8b5DsAVUnkSauhcZ8ZrrPSgpyyShXoDFxiTgChqGpzeeah5Yk6a3NQtR9H6LPK1RPCrroXPY1B",
  "key31": "49tpE9Mzq13hLib9U4qFmQ5S7Ggt3DP6ro1aZWoMWmitUyPGVdHV7T9C5yQoBQJ8NK6D9jUgV3JLcrUxkyHuFF89",
  "key32": "kAGTUSPsbZznoBVURJH1EpjEMbEBemEySjYv2nM5FubFS8Whnkgw3f2V9PsjWDD2ZDYA7hAZEmScDysLn333RcR",
  "key33": "3tweFdw7pBYdDH84mF2d8ZAXRWbHHWH6xg3C82J1AU6c9r4xDUpS6rr4yvu6z48EhsMLjvmpgJXeFS4uCvHe5d7b",
  "key34": "CjihqXp3Z7czggoEH5NE1HRPmck1cUHXqBySRqhU2DJHHRSpXtDdFvdd7SLRY5dbJ6n7bWsT5qbsfEkqi2wxiK6",
  "key35": "5sXq9BEWZKBBMuGE24oGwWcgimje7ogBGnnCoAjJHTWMzNKSrsmV8dPYdRk1tmqGicTV2yGwJeeuEv6K2UV1uGoL",
  "key36": "4j6p6BEvvuZ8zVkfWMz1KcnGeTt8MLRNajsFJRQTgDJDTobESwGJTk2UVBpf2erPYR1mK29PSZKLFmvVPHaNRWzQ",
  "key37": "5g2eFN6Sa4Rc92FzkqSJsX459EgurchDAXga9ZHX6oeuo7MnPE5kyFqLkT7XzSdp3NVC8hAo9sUpbooTgy21qQRe"
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
