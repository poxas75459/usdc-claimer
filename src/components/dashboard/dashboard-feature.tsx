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
    "258oreUGPNina6FXRRoPwhAgSLNhjfhWkHYWBHGPWt88bBonfhNifFCYszivUBUZCJNKc3f2PhudSSB2ZVWEkSeu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ruqRxvaHN6RhEHTCj6RmkhLKEKEM1n4LoM6ECdLDfQHY8aGtGJKomLENbtzRTRggKHumdV4WpJnFtqngsnhoRZc",
  "key1": "339CMtyjL13HQ4zj9bFp4sousx6mHwQ2xHoMToHvQEgCLmCb1Wpn9tHYCtjMgcLYDBP3SSxMjNXqkaTSDuotiQAf",
  "key2": "3LXG5zvkERH9kiuX2muyjix8tZygWLWDH5ii7EeFFQfTPGtcLLX9wRWwFWFfbuDQbnztX6t2nztPVjc1hxY4X2dx",
  "key3": "4DMsqiYS7THozNfPNhTsNdsLDBjbq3KSJ3WxAv6Ec873ou7nSBMpWNDP3i15JnsumknC5VVPngiB3Q9DhZ24zbni",
  "key4": "37yaPMVxZQfjkuo6pV5BDYtRBkujuHryjE9CYWSntJYBBY8DfAK8AUSiRAsonK9YL61uGowCBpSndjSnkpk4yVu1",
  "key5": "2KD51M8VVfiuxtvUazTevr2uJni6Ees9gFipig48Kr1WSTmBWx1tpGLAnpwR9Ko7Huw1Pi81b2RR2KxtwSSM3aW5",
  "key6": "2yPvGpvRNfceJFLDibedsJY9szjTSdvTBAYyLjTUZp6ZgoawXwNrsNQCzoAm2ctD86sWrq3A8Z8CUwyQmzfBRM51",
  "key7": "7uiib2RkVqL1VXgrnXPUHxXg3PYmMMHaTTmgwco1VZkcDUuppZoErVzmLyQGtiBM1mS648Gmo5QHUhLHc2hwG34",
  "key8": "yJfBxKzdvXfLprpwF3YjtxeW4QJNd8z3NW2ZCTEysP9bXcFQZSiyEFKo9NB1ywj7Kky2YmCksFfo3Y23JwMHDuc",
  "key9": "25TXd5nhH7gc9wdsAN3Gz7V1HuezJyp57tbg8zUM9BZQcjb4CJdGmby4SyC37RuKesEWFRjB4JAiWVteKtVFp7Kk",
  "key10": "3nqYKe7z3Z2QaBLY3gCZwhi53Vr92LQ9LL29NM7uqLtzUv2byCg2FVCZrYD8An1EBhgHyFxCr4VvBmSGYKRHEKj3",
  "key11": "4mQn9xSraZ11J6Q77mUKPvmK83x37EK1eSvuTuQiibLmiiwXY3X6ZaH58fw1nsRhg8W6ktBmH5HcMCE6LNCUeJ4Q",
  "key12": "5YnfVVHbJiCHLA36gYZe7jaYq4nhGXA7NQVw1aoA4B7P3xGnKMnACiF94XQ74gLCn84SBhjYBJbjXMD4tB5c5yCy",
  "key13": "HvARV5a6U5WnKdYZ1KBZaVEFqudse9tXCT86bkBGAuT4zGCLBYLyNkhUuaKYqg4VtWpcUPpoMPkgePoM2BMbgY4",
  "key14": "47k5jDYKx9yCtCsdHNYHGPUuat2FofvwfX7t2QDpXUy9J2vS6YNTToVjJxDu12YzHFuL3SnozJJXadFZKhvJMNcM",
  "key15": "3zRCtFLRn7nNeoykPgVvH15gDwgq9dHZjrUEFmbWV7UQCWtSXVYkJSyHZzvKVwk3sxmBaCQ6Lt9GomnWEexCScWT",
  "key16": "3C36w8c7Rv3F1kJQ75LW14qabwfy12Jamq2vzFj1s3eiZPK2LGDuBbPFsjnTJ36yna2FeRiZnzNtiyQQE6a1qPQx",
  "key17": "2DYaHJdgiA1h44GqaK8FMZWbaEUy9Hhuqdfbe93krCvPQ91nnviKq4kD1yZ2yXrngqo7UL2R6UV7ja9Z7rnCyKiR",
  "key18": "5JQ7oAQoUbuudzEHWvg8jZwcyBLJ21R5HDQYK5RAKVYXbcbKmERRxx658x2MqrfbwtJB87Gd8HcHbdZP3ReyKhBB",
  "key19": "5mxQN8crkHyH5xTX3WBdgfMUGvbaz6z1DcuRR3PcJnfn3RpwRrAPJ1STmzip7uqKrftPAjyy6PTsUUgKFy87BE81",
  "key20": "drXaZNd3kGyuWW1dBrdEmY3nY3FoGAhXFrNC3V5cQ9Fte17KmfVXVXUjpUTzNMKbj9Lz3Wm8rBUff2XHa7e9U3k",
  "key21": "26FNXzsi7RnZzLsmXD2RijFVcoDD7LkAzeh4TqHU6M2yZu1uJBGs7WdWmAuppK3zSD981BxqYuJGxAYrHQeMGSBo",
  "key22": "2v3FWvebczz1pby3Nmu93RoPozQfAsUHHkngnaB3UsWDCxURyPsCL6Dp3fWneWK3bpKak85GW4XjD6eirtFpU44j",
  "key23": "zkaFVjCN5QuutB2DXZJkw8FKfaqSWQqrN9HVwnsjbXABDdMJ6VJhBQbyPgKg52SPdmoR5q2qPA32fhrxFQafUh6",
  "key24": "5Lokr56EdzgG6uYhq5nvgYxmG6meigvWh6pSxd7qvXLKYe531yXQpqLqkUseQxemEsmuMRHvHcdVo2SRq2v8D1GW",
  "key25": "5vHofQRCsYAbmY4SqUULq4XipjisU1ug6D334MTrq9D3oDMYQSaVgmkWbvSbzWR1SVsft3hXhMJqSEddBpJZMJbD",
  "key26": "5zppjUuY2fjqRNT8rKqG4Ua6VuCxEdEKSLf7nPWtSK1mnqEZVAGk75nxBVBQkA44HhSgsGomFP88HeQjGNhecuaH",
  "key27": "4RtHPYYaabmWU4QWiEci5kkHm4SiyyEcKiVu12Vu2jPLWtEdokXg7mTXWagoXqn4Zov4nsuMfQiRt32PRzY1uQWm",
  "key28": "5JrKB34kCYDUQgnUYLpmGakB9YnZYEm85LFwyDcLH2a8k7yvxHA6Smz5VL128RSPJ2kU5AnZGVfqafLNAyQ4MKnd",
  "key29": "2nmP5N5u4hPiioDND8ftTsYHRARfKMzwq8GLZTx4NhSD559N1ZM7UmmkudWNK77q1XBUJ5RbWuMXvukC2pW9Y7fg",
  "key30": "2SSxPFNhUnQTy11Bxxj4x2ZqJdm3rUUyzB1RQdrvFs5593hk8mXqANHHxvQEBTzVdp5gtbGBtXvbW343LaESEbpz",
  "key31": "4hm75J9s6nw2QmTGE4YPDLpSMk1M881GMPo7DxW1TQCJCwP8TYLZBfwa6kKE2H5hYqDMrHih1XAx3tWMuoXmxtH9",
  "key32": "5A6w3WYUxpWNC2oeRcdUV4qLbA9pbfPUeKdjKcQbMnhrTHcWEVNzqc77cABquKHcESXeNDP18ChXodeAddTazjk6",
  "key33": "5PnFRMf3sKdgwwYajEY6vudRuZVSQLVCGCeirKxarrhtyEgh9PHarQvrHFsiAL99ZufANreSFXFUpTctVHfFUrBZ",
  "key34": "wD7rGtZ5ab2qLqKmUogPLtEFGiYiCeYXFmwnuMHSbKeFbkKVytkGpWXNg8aP3zUCy6gc4t2RuAPAbaiG8fT69sR",
  "key35": "4XKvWtPEyzKi1ULVD3N2cSXzcTqXHE4cg2kjKHTTL1TysdkqmdPPDHkK6BFzVHa5nhRcdzeAUWcux2oZyAqdSvQT",
  "key36": "5xVJtbneiQUP8vZwFXFbaWqG3v3rS8VkWhBwRmNyr9ZVogtaF3Suy8fpP86Q5wy3nTdKWJPfYc28hwXGPWnVejgG",
  "key37": "3wU91YQawJciVVyRAuyBxkbiYJjDx3whUCkaYCFitsrTqMwiVj3Ji5P1z21m7WBQnFJ38iJtK7dS8NtTWrPP4CHX",
  "key38": "5FRhDof7bUq3zpjLJAidPvJzzWwQ31iwTc1uhQ1uegy67n6MLggYW4WJsnCNqNA9NxNe8b5FBb4SyvWhCjpNr19y",
  "key39": "3DgterYyYSbA53Q2xNwcaCGYE1J1L7YQc2X5pen3cAb7BLz71RReE1VA1FVBgEN6f4JKFxz9trt5WpMt3JdeY3Hy",
  "key40": "dtCL7U5VJN6R94t2nExErwdWLRwg8NYoyZLXEwgKTyujTRhUh5tmaNF17RRb5LcPdrEBeQDiY9yeyMaDYZKGhQz",
  "key41": "3Pe63DajVD3Kya6nyAbrNBz8xF8RrmNq9jfZhXu3zipjL2Lxhi5qHtehaXV8RvMq2Bi7Z43VrhtFAY6PfuUdQLtZ",
  "key42": "2QHZFJXTYJcq5rDpYG8PY8BUMnAEZziTDoBhyYtv1xnUs7fwKvAAiEGL74iFVdjRgmhFUdF1Qsy3mCS9GqHf8dZT",
  "key43": "64p8LFLZki54Ri9KWde173TX6Yh7i7ZF7zmWSeQMk17sa8kaqum83LrQDGcy5FPrqNfCmFPVujizEfELavhHuJvd",
  "key44": "5MnWPJrFbpoDhtQT4vzNtqy6bs3oFvZELik4Ue1Ja86RDXX5GUB1HH8at2ewn5HVhaXZ1utKuEevLenGwVgjV9kL",
  "key45": "4LBxk8DAbc5xkva5675paLN5ZqnMekrVsv4JAzBjQByUxHSU4pvMhfiSroigMbvqdP9DAHZQZ5YzH8P5iMCig3gj",
  "key46": "36AkUaVzDaxaWr8oj8W3ZWLfwQZuwEoaQC2UqmauM9WkyPuCFi5F6QXqwCXML5onTytExL1gGzrzva2dn8agr1bd"
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
