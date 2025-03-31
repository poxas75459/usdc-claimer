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
    "4jM1WizR7UkajqMShVhPciuhQDdZo8vsfv8euc9jSN1wnNv1YfcVRJfifRUBX7hnkP9e2fUEZVWQumohXssVS513"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "f2ukjLSMCXMSrY6JSXJtfF8DyuJZw5EAV3AqVKQt966xehaU5BLA7BcG1bC2DYfxrdRxzV8D218q5g2v85HgrCF",
  "key1": "4UPFCtsRdmQyWREKV6KnLtXhZaGbCh6CCAifQQNZ4CqjxDWcnm5bnPmLLFRMfcs54ij2SRpU8TzkbgcfbxAK3MNo",
  "key2": "4aTu2iSdTgVFKrFgZkLcy1sua5GhqohQBL7qfoKHE2x3dsodNQKjHHecRXbz5XjXfxr81JgXHrX2nNFPPzoDFvRb",
  "key3": "42ykEayvqEi3KmQ3cMazuRzXH5PJpHbg4CgPfQk12WDLYx7VUZhjG35A3MszcFJyJoEfV6p1rLTHWw3Qxee2HUn8",
  "key4": "57dWoLcjN8qBCxhvpjpBdQtqYMQZqTY1uSBvDTgzSSCdMsWPDUUA2KLzfxazropW6PHWtSGLKkntp2a19JVXcFME",
  "key5": "Q1X8FsEv7UqFHiB3dEA9JW2euZnKuH2cMH9hfJiw8muS3PgYL7tq5Q7UoifptaCuq7UBUPUd3APqQR9mVJNZhgt",
  "key6": "2uHURj97988UvjtA42f7NAJYLgVkEmLmKjmYLpv3FPGV78C63ocm2xFZwLHSr9VD8qr8Xtnjw6oURzmDyZ1bQBb9",
  "key7": "3t7JSxKPKSzAnpi2sPnuEVJN9kr5spfW24KtQLuFDSiUQ5M793UyMjH1SKTSewPnMhD6ds8fxyYnHGBXqZgPQsMN",
  "key8": "4xzuaQXCQNc2pQj15dPae7CvWCSC6Mi622BHygwWP1tX5rMC9okTUrHTBFeyj4dezjzPM7ibzRBG4t9JNj1yuyWp",
  "key9": "5w75uZgB52gjvZTQLD2rkGTWHV3Q6LMaug9tQf8aCtMazyJPL9aTVNcJMmWmXeG5yTmjcNeoUQ7c4ApQZbgPNb9W",
  "key10": "3pkoqft3Qxj8fQEHwgJsBQksHNePhtjMkqa2tYc9gMPc7RrbY9y8ZKyjTuf79bVHhcyzay1T1h24NHQQQLyersQx",
  "key11": "2G7pxKVKJYhQuqTfzi9pQrk6oDU51MwaueDKHE8fdtCfhE6v8NWAsCCVzisRYppoA3RFiAJLauTc7WNLqxi6r4zQ",
  "key12": "4mTtVAkS1WrKCLrWks7Cnsyexq9DsRq2q2NzF13W4LzFRkqxxhLDonrDiYBZFPaBoUH8VBnzdrvu6KKthFUrB26P",
  "key13": "5EcvVwGCW29xHFzCJM13sPbtU4Mc1HAYGpB594N1VPufx5bPAk9U4G4hnjduF6xMPPHZKekKdRxQ8MKHm4dkTj9X",
  "key14": "2aMguGB2zak51eRjaVC78PoU3ofDHTA4B3BQDYAhpA1ZMvZiAsKG4tZXu5Y4NeQynXNMzDGBMZD4pSnaAVy7G93a",
  "key15": "Q3Fa4HjXLpZXMbuozQ3HQg28ejCG2wuTm1fxuTfuJP4fbFWRdGZ2B83ayP6p5hXSe8evVnifiJYiyo96EjHzGbT",
  "key16": "5qzTwFG4kYfe86AB4mJtK7qEVJodQzUHvizdPCVUndV4XUzyEKvuXSFHsvN9ypHetjDyoBqLTzxSm1wnrzJjcnsE",
  "key17": "5DafUA5HLbc9KZJyPxUtLzz1tU1AtpEBQDqKqR9qaB5Lk4JbwhmEWFqggJB4s5ByDUtfAMseE7vUCgVdA4cbfg9F",
  "key18": "3Rh3FGLJpQ4S7N1gpUiDvhD7MQ6srfCQKxjZzJdhgbQZLfB7xsgTAGKMMi34MH8nxt18eyvAPbaXJ4s4sZFmGE4c",
  "key19": "3iuhuYbG9E1Gb4o8apkHTE4YRo7trhK51xh4F33PUEU7mKPLwEMMMHnJfFJsKiZWMgE8gB5kRpHhTzckZtUxmVAA",
  "key20": "4UYP25cAyCYWtNhvXPF9sq5nnHHjyiZoMmHrGqyEMHS9SsWwEG4i5bR7CiU3sRJu6KDEKxwzJjUPHPhT6EK4EoTL",
  "key21": "UXZmG7dp7AY5sYtmdvt7i6yEvjGtWv7WAQEqcdCqDzNVqgfx1uFZf5RxaAAHGMPc6owXVpBsJxUe5msw2wks5oV",
  "key22": "tS6UPcYYbp94ZGyr9h1ioRy9PkAVDEnr4xsagAn1QHjcGMMVMmUX87YmKP8ctFPoh4gLGt993mnVU1fkvZnET3C",
  "key23": "pMSyHgZxN18UhuYQ8N24ssns2ZRoXjd9eT7mnik88tqRaMCG7KRgLpsKAHvtcsR6uSYq9kY8bBhYdiPHBcc3oz8",
  "key24": "2tZK49cDMGjszdBsqRxeDFbErGdV4Mz8BrygEMz8XHP7icZEdW9djK1hHbB4tRV5FWCT3MNVM6nvQPDi4UXftmcb",
  "key25": "3Cetoe41QdtxRdTTqKLk6ENkLZJ5x4iry73yHyzKdxdQ36v1Xp2HzkyXChM2RmUWTMNESxzEJCaPcq2yJdVEp6Gb",
  "key26": "2JiWrFsMWtqxHTmX5jyAPhg1dQLzwuyPscVzFZhGPuZrvSSjqL3jwfZpNx1XW2LprS2cYXDtaVVLrzTa9P9wqWZ1",
  "key27": "YN4kAMhKgb1vWjWx5Z9oogTGPpdgNT3wNEJQRTdVnF5f88iJUt7XXLUckAtCZSymjJ1e3iU1aASBoZ65e6qv5SL",
  "key28": "25vfvL6sSL1UoNwe494V5qXRTwry7foRp9aarxRECNjKLMk1ySG44r3zffMy4wQkYLj9QRgb67bvEQNiWio4KSvx",
  "key29": "3VoDC6vqqBWbVurdnNHYmZTFBdNeRvTLBnuw3wCuk2hD4Xpv8aN2cfHR6Gy4no1kYrfcLEeDR2xFo18W6pXB2dU1",
  "key30": "5JiiEQXDFcFKUJ1Wb6VS6uv3crhQfujFXeVHFhXnxzztC38jqLxY3cY8myZ6BDHvLYjSfmdYfB6ACaGVhaqos2ee",
  "key31": "3Eqsx6fyxmTSUP4FhsvQ1BoHNJX7SegYmnf1KhVKoEA5TfXKaNDM97c3MnS1NTdEoYGmNCBvheYwtb6oB1WwqQ4G",
  "key32": "vnQpQbxsAijdJq1tCuAp1JuTYKZFhUHjX2BWrAN6brXuxQjGceUNoxYaMLYhZwmqoyUBuoAQmADFaBdWhibcQXv",
  "key33": "QhRJeaQwenEHamU7vsqZRLwQexs4xS336Aw2PnmHbaJbca8d8VDah7UBzYZsLH15nXKLKu9ZNqrtL4Qrimycfg8",
  "key34": "2HHf3z9d9AKQmUMpVemZta26c1BNJwkWuL5G56DFgu9UyQh3QFBpxiNB1tcqUqXuFUEJHMPhv2fyAeHYsxkp8r6G",
  "key35": "4qqUP2ShGX5MTjX8HZT6QwxLWoFgwtBVn8gdkKapiKtJsBxMwbYpaw4oLcZgKmZnSbTL1aMBVzrVVJmFqokJSZ9p",
  "key36": "5sqnHsfqWGwis3H4qyANzzgcTvvZ7JymQyTPdPzP3ekow9ywMGcZ8yCYpYonCQdZ7BBhjmK2AgKkW1QYiGWkw6DM",
  "key37": "2R1mg3iP66RMhzG7LibEw7ZVwPF17kjLdxYNvNZtYS3szoTgMKeh5oY3QKTMCysqPf477jdj5RJzNGY8UFoDUSFP",
  "key38": "2LXqbUFn3re7GrmoLmZsPuJVGu1hmQ3yaSBXT9prgArFnax9cSmt4aaXvk5Bg4mktFMVCi64URwhPZdiHxAxktxe",
  "key39": "31BZ8wYpeccEWyWUprd4Vo1qtPeBinqcnRSej3eAaF1wqQLabe4UESkfEgcff6FTLnPrnzJjgsH7aybAirLhH8UG",
  "key40": "PFmPethpBnqXP8fTCdL6MW6JZYuxTsteWuYgbEgwyn8nrT83wBFM7tmxBxHTeU14Cn6zKCMg6RerWsp1AJ88S6U",
  "key41": "4dwwjhLS423HPCqmi4fDUA5jdAxEjJjkjSRZMCBLnitJCfyxCd7gvPqcib6E4dn5tUNkMQGx9MCXutFtnYqpqwD",
  "key42": "TZJPXDhYiwYJszKtKNDBsAu7zGNbsh9n5yySEwQTq6fFUnnq3ypR1tm7yvBtgvghccBB2ovh4UQ77hpgE5niXgZ",
  "key43": "f3J3XoUuLasnkP2KZz65dssxKf4yL6cr3wEeLiATqKJinrSsnQGQmTDuuXSu7mQzQqaM1amwQCrkA93JLgpXGqY",
  "key44": "2CQFHeUN4PHDmnaQARERwNCteVw6RaWs5jazLqWMP9JHQG6XoKnuRfnh9VDBSbsz1VmKS3pQJ1P9CkikD9EujQz9",
  "key45": "52tFFxWEWVgdHuP46C1xiQzRzuYZPPTaVnNxQEFqNi1hBeTQkAuXLjfhnxL5cYyGTy21uiGtfUw3PQU9FvF4Cc9u"
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
