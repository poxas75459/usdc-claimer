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
    "UYfk9a6FAr76zaNDymRqpp4S5pxb218c1ALijLP5pGtNMyKxD7Fp48zs3qMAVA4J9izNeqP3i42LnHKvjmdUbKN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4UW4e15YBJYa7WTtkxH4nP8Jk1sTSZQF5kBX9t9PA4y6XrMXKXAJawvHXWXANhnC6YUmzmzkbmM2Z2PD4MUeNYzQ",
  "key1": "4yQmYncjDTr5QD9wdY7hwHx3MydGufAt7xd7t6MRy9uZ23hKjeAH7S9PW41ZS51YD6zTNUg99PiH7oaH4YkGhrUJ",
  "key2": "2GyBZV9vkSrkcpyP2kMNuHUQz8tKHs1tCJsAdErYiFpjy4zxREtBUxq87PEQvi5HKrwrsuMtq8oyxZKjH8nrZVuU",
  "key3": "2cd37PA7kBHpyckruo7BvCFeQujTbaLQo6iGYjcN8tLH4GoH28K3y8vLcT8FjqYBCibBeBJMJQiFC5g8A6R7YvkG",
  "key4": "6CNng4GD4vGzU3JVrwbWHRjrTYdRYsbdW22zidLQ1FokaacYjkqrURpJq77dqRPYdEEHvK2YX4F7V17GTmGzqpz",
  "key5": "52wD3U8WAquXK6y57jxP84DBRnZJSFD2VQ6HDnj3pyyntnixgkSroW1JqkXU192pXuLy9z9GiTAFYS4hCE46rEP2",
  "key6": "5g4t5QmNUtyJp4SnLXneJ8ggeCP2dkNt3hhMssEEHdtRogHmhDNCnVEMs68SckBBBEeLWoZPKkQNCgKMVxsCbppK",
  "key7": "4d5eF7W8FxQFExXbHxQ9VnkZWPe5SBaDHq3deZh5oV3CWuV7sAz8SVTLsyhrLzyA4mVGYE5wbM64qUN3wC5HV93d",
  "key8": "28kfa28xMqV5zgAf5BZkjL41AyDKUK5gouv1Gb5zdaRbhwWDuDSMPLeUSc1A43fGtAWEdFJVVHpVJk8VPqb6M2sK",
  "key9": "3tbKkxggRZJ7W39Qf5yTpRHtgJPF29JhhcqwmNrx9i73ib3FiMJyHyihitsTNzbF3YZMR1i1YVLqY1yrLWJrmNaa",
  "key10": "4BybDQqZ6i9NmGdvNnZncYk1vqbQaK2738y5hR9n5rPkGKQVeXPwVaaX5wEA6AJ8bDFJaH4N8kXyoyKD3CPVj1XR",
  "key11": "4PsGS7MpUfTMVzH9qiqiYs4NAsmXvePioG91i2eCf2pYUxB6UE4wCdU6gLfofpvHfk7253bwGJZUZaXxr9SuCZFA",
  "key12": "4sLuwTyXFLkRocTs17JTG359Q4NXCHRxXq6WiMDd9YZEbN6eYJyYU2aQHTbDppdGGnzdGbEFuFFkfcKbNA18zBHD",
  "key13": "59gs9eJWE2fgAkqxjj2ALvshVPXXPgwoeSyuwpFEX8Ysjc8ido43wsnBsu31mYvQxb69esSECKH4GwzAMKLMzHPk",
  "key14": "4WoGRyssFx3zKrGEx9utoKsaRzQYfdKc1zijzbtw6Pg4TS22Fg8xbB6UhNw1b46Zj2o4nCbQfN8ZtPaaDpefcZzs",
  "key15": "5h1V9UGA5KH6mof22okL7iRPAzDEDJZaXxSLY9XuYGQZ9m73yXV59MedKUwBi5ZdGWkD55RdguqBLC5Lyn9VczSp",
  "key16": "2R6KoeBxrp4ripPqQUZk6wfNCwLdHh8Q1wtigdpqDSuRizchsqSBJcZNK2gx6vkhCkircUeDHsChFcMqvnoPQ9fh",
  "key17": "63xsL5Ynshd6y5oNbixRhpFN54jeFkbZkdYzMEyoxqQUFyjA1XofkNr2U9VvYGJxH8xkjrcL75KVqMcdLpiwVBh9",
  "key18": "5LZBhYxWhZFRhx3SQAYacW5H4YJ2d7D3kW3c1yPyANEXg3geT5W9aQpwfKxFAmUTzirxJUcqR93sG3hvcsunwyK7",
  "key19": "3wnJ3fHXCUABxry5TGdLaTPb3jE36ksTCHcHRa4ws5fab8wWfhNXyydwfXZkptxfabg65SyPv8n7qcbyWbmBYYwY",
  "key20": "65YRbssABugattHky6rUJXRDd19b7fKT1eZgpqg5yjTw6y1kHJBCkgxumHGb2d7m661V4WFSasQ1J8nwnVh7akwE",
  "key21": "3xBEQqLEechi4D2SSjLtATwVo9j3xdYdkNdLnM6kMg1T7bEZ4wYduyQvN4cu1Q6riPdSF6waQV9i3xCmMZTQ1iK4",
  "key22": "4oBaNvgo2CRRjdbqJMkrgFSJ2CW2scRTyNyftyp95xShJdfdh8xLy9REqptDDABsDQxXxD8qWaCcXk7WBQQh98ZW",
  "key23": "5zMs66XqgMskT6PgjBQRWARaaKcz8UJ4vDWUFCBumjU6yh5zzBK8cUN8dih3Y87hx2Pft7Ucj8gubzQdyvf2YSGx",
  "key24": "5cVEC3nd1T7x6kvCiRzcYAPtgH97pbMYnxHhPTGLVyUCrGxnrbh8ZRJp5bR6twEzT7tDjAQUXGRv892PrNXMfCRi",
  "key25": "5WdMmUnVVrWitPYwBmk5P6ymgqWB9kZCkqzrDr7UgcmfD6UuX11xTRrSYq42zJDFL9Vj1ULw16KiKUCHNvEHyW1U",
  "key26": "nGKvKBBwV4BcVn2P3hncru7zaeH9QbMqPqVSzoVWBf9Pc9n8Rzmi9or2BEJTYt9tY81kqmmwK6NpftZTmZtMGc1",
  "key27": "BBNdVnreq4tQZstu1WuNezPaTm9ibuzGi3QK8NhzzWVF9vVDyx1XDDEo66BRuCqW7NMTFFi1X3nVX7BhYw21jeQ",
  "key28": "52xEx1eF5rAu4UX9DeWg6P2axt56mhrMNnHB7T6TPnLCzhENtyCRcoNKo3VNYkykAeBvfxHht7HcHPSNHVyCnExz",
  "key29": "5Xn3FnL66QFQRupZZousUgy8xexz3R1AEfVU5mUymaYGV8w2zGBDHxbkzBsFezhKfpwdG4cRG35y5zzAP9c7okvp",
  "key30": "8mhmg5Um11L69jf2Zm3mYvD6wBmAfhqrmzsJUKqCDbWTK3VTxdXaFRPDq7hfuSAhEcaGp4Awp1v2ppNzjNVhatS",
  "key31": "5fuvxVg1HSABK7mR7DrcwW1Y5ufZn3fGKCgyZ7BPaYj1pNLjaU9bf6ojiMMArRMk5kx4JYbZ11KtaET4yMRumBFU",
  "key32": "4K5odWEwsyH7FKTnpKsercUNAbTem3GMfoUPDCWdBB1MD7FWt87stXF1MyqdyConskCYwVxF5Df7knaca8kUsXJA",
  "key33": "2imLx4QdmghpgNt5aYmZ4hYQwdqDWWn9GmpX7pZn9sLtmWuu5hNxrtXGWPxRwJE5K9eUhcmHHNm8z69EJJC7aTw8",
  "key34": "3DkGBvBU2HZ6ZAXtLG3RXevLF1ASRyy8PeXSc8ReLufDzex3jv4hodLuLrjKGzuafEA5Sz1oVEUTzKYy6u7uyfP9",
  "key35": "5uae5RKYKLrk8QsZLGyx464PyR3uy7Fc91PCstLLjdEzbx7WPPMrZLfXYx4c1kQgkyRnj1teRtZ8vx28Vu7ApGp8",
  "key36": "2XiizWtpHUnvGdfJXQzLiPxyMRmuyWH5DaAUwS5A6cKfm1H27L9gtGnhX344MC4XWow65r1XvE2AK7iH7NjCeyHA",
  "key37": "pBGKaQv8tAN1UyreCkjiRFC34d2dbPU6CotDVRBvDn2HCe3oo9zxnsCSTgztt4aqq57FH8pMS7ueRtbTrstg8ES",
  "key38": "48AXFogHxTeQeQQFv5MX9jZnwVj7uKS8xDLeyNuUu2jRusQqCkf4RFd3FkciTVREFZBLwXwxnTx8LK9EnsTkid9f",
  "key39": "3TdVmEnkKXrq92USfyLUQmvo1R3LtFwkJV9Pd7oAfD88ecKh78n5NdHzmpSv2DWttjsSxZcba1Z1ynzLTVr6GxyW",
  "key40": "5GAsJc7eNn8fVFUdhiedHrJT3GhUFvTq2tzqhN651YpYi3TzomabUGhk2koGxPGgiMoxQ4uqiFCdHpLQ4thwmVxR",
  "key41": "YDm4PRYT7HZQPqf2ZojqR6nwXLU5oFdMPUg3STZE3fqZyGfhpMyTLgj3bteL5LLm9bn5egd5yUyaHjdm1HknTZQ",
  "key42": "eeecMLVYfreAaEiAbpzkHLU7882Tjr56Mny53hPtU2i4pm4TyUbWX8GQ9RqVE4ipkvV5sVnBvcCZZs7zbtf3MuU",
  "key43": "4cHwqnJrdG2RsETo5q2hB9j6fkbZeRjoZF7KypbNcMU8zXe5Jxp3a7X4JDMyCFQGQUWwdCMQGusPUqffXCuJW5Ax",
  "key44": "5AScEwXFkP97K75Snj8uhcMGJVet7MvQCXcga8bwbr3vdHJhD1D1sug6su9eVCu77n1hT3EpniSZMo7pUNv7WZ4i",
  "key45": "235URYwuAiUyd7W7ymshnkmzjUDyaCjX37APXjGkXSfPoGRMomckLdJ6qZNqZp7raheS7eW5XULNtUyk8mHgxjwS",
  "key46": "4kFu7UFvafsqGmWvtPBpVLxhnirYTUV2gNX3M4JP5ipoXnUKU1xmtXzCqrnhyvJyQyYQ8dmHYvDRB72SYRK41VDB",
  "key47": "4jZt7WWafnftKHXgaKruNzgm9n6xBv3tgPGGqkKP1wPPZNJyVYrjBwxjBAHNmuPsyQvPqKe4tL3r3iWgXqnsWgtW"
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
