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
    "37Jx2CywJxB91Y6R8HM8FcP8Q9mfRWgGbPnABYQxN4h9c234iT64FHbcVVSFTvMmt8LvDAHQs73v6QMccBp2iKTX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Gg4Vhs21AGyx1b1hqfSymMrrvsjeHVGhrpv6xavWKKzMgep5XbznYBZnevfgpE7ymhxMn1vDR8hXrYxZjVym9PX",
  "key1": "LocpsALZmb3RTBiLjorsi6LYERn1EJVC9yL7ASezDTf1uzen4kTMGaWwX3b5ZHxCaokXFeRT4dZXPfi1dMsWj84",
  "key2": "45u85PE62RG3FzVomJiLL4dtTq1wSrqdfMSniENAZ1TnefHYqqG7uF4zVTmEnLioMHHGVAemAoc5TNejLiEu5D2X",
  "key3": "LLg4hxGthpAtJNjXQMQUtixm8nUkR4CpeE1St8jiMojySaKxdZZf4Mw3U9Hg6ynNhQ9ChnrN8qGEWJrTs3u8QKg",
  "key4": "yuk5k68kPZ9PnqB5Nof24BfcxeE93mmY5VUcpicc5ZpPrhjMYsfLdTqKHrPv8gvaNs4XzCD5LKo8JNr34DZeVBf",
  "key5": "5WjK7ednt7m24m2PQAq8KQkPa9pKtv6tfeQh2fKRHjo5xhmtuD8axqSD3sk6STAY6xmbFWwigc3x9Ey4y6gdUJXt",
  "key6": "2VFgNfdeMJQLAUC5iNRpH26KdWoxzpi2SAZj7rQffDkTe32iPLLcFc46vQ8c7ZSidq6d1Cx1J8h5w4h8aGDnGE8D",
  "key7": "4wKjxnyZj5G2kPcTyAPA3qRSidHCnwKvWoSvQgv5G6GGgkWAb7CgeiPciHyUwXcixexZCufZ8deUKKU7TC7L4tbm",
  "key8": "4afdsKHSphFgo4iBNLSj5jZCp6asYKA5BfVMyP5tNuDg5veAdfHyRNS7XW4S9Lh9h2z5W9ops3uD5VbvZcSb63Lz",
  "key9": "488MnfCegEHnNk829skV8owbKxxwAW9UK4uVpGtrAyYVJ2HbZB9UqWmn1cXDzoVFtRU9orBry1jf7MeHifBYbcTQ",
  "key10": "5pT2Spjw8YBvxoLEinvCwzZvkH8TymSAz5vKg4fm8Q47zZUMtzQpwQ1327q8zVAkHT1tVpdigmyFZhcT629ybUdk",
  "key11": "X5AjtVJbTEHBmVp1Dn9AxiCzr4RRbwbVB7bA3iuJfX1sKe6ysJbYZG8QRU8fK6mnBWvZc6W9RoQs7Hsa677nbbt",
  "key12": "2LH8hNCJ5K7kFnuhhDy3dH2SYNVQENBsyrcxLKKhzJtf9nNy7AX6sKddXbbUtqfsJChN3RWdcA7KLkKC8dwyz6fn",
  "key13": "hUuqYxD8y7LLyYCy3yp1vuP3PwihA4u2ZoTfrutQhV5du9aAZkqgdLVF1nS1cHB3g4ycD4kh9gFNvreRuTJhDby",
  "key14": "AN5AW6LJUwQKZGnW5zusajdQbrZ6enfAbh27xVtSGgfkYN6mqTMJMLRcYiChyXTPd9raumDJAsMcayD1wR4QXQA",
  "key15": "4y74MtG7kMNdETiR48SKFQo3YSyQZEUJ7GiMJDeYj4SMMy6ghqGxBdH8k2QbsdJErKai6zMzLo5oA9tPMdSppPp2",
  "key16": "24d8Ks7xv7ibiawZHjqEcq78X92SJo29aEUH2PAJi3PNnGMTAferwg6xHnHQUDTEaz5CDfN87Tf2wY5Exe7zh8BM",
  "key17": "5FXVqQ27wEC4XHiea2MRizzWGrjtqNwnhXwzi4ZB8c3P5ShqT98BZGNXYxcjoCbkg3ttLSSWQvYMavWhabnzxsC7",
  "key18": "QpWYTBQAwd26XyhKjXayzQ7BeDD2XjPjVeazPDFZnsHQX551vauCfUUHv4CrjmYUdgBMQtsuTKw4jE1ESUneJeY",
  "key19": "P3vWTkLkLh59CR6yxywkqDrSZaDeqv9c5CgvL3MR5L5YkkpKbW9ZniD7zdHkKHHr1bD8Re9q4L3BUc9MQ2bpmyd",
  "key20": "3xkPNBTYmevVaZwFVk4rTx3EVNcKUvWpqsrMKjoUcQU3GQH4F7eAjQSAy67RBPmbeKQTm4edGpUiTtyEg4oPcQhw",
  "key21": "4CrwrQk6x6bLBSBtYLwLMcSC8SV9AzBRUeq7ws14W6Yprn3mZdVfFjQeNNVgyonaL4W9uv7cv7137wwCL6DRbcJ9",
  "key22": "5uVBtbCUXBuc2emeF7tefZxjPqGARuGHnkst57gcgvD52Kr11vLAuYxE7kZsHg26NVfzTWoerQvLqRHLAz6R3izF",
  "key23": "g68Yava15UiFHE4Xh1ErnLAf7SCGcbVSs921V5Fn53G8KxjYueoy77YqTRZLfvBswE935Hnsqk8RmKpRHk4a5bK",
  "key24": "3rBt64L5YxWKWB8xUFNKCiAuhPhZwBV3yjodbKL5MHzqGh3NVznNLhR8Bg4xo8PjvDFaqc462v95RWxbbeQuEdYB",
  "key25": "3KsUyY1oiaxzmAPerjwJTDTwKak8t366wq96btkN9LiAjNJPH9GviUD4Wgg37L5yi2X8LRzjeQCCqbXZZVWNKArz",
  "key26": "3q2EbEivnQnNzc61xmhTENMZtH4QoarmWNHA1LgdAXHZyEZgy9ZMoiq8bAT9TYsEu424uPnURuujBDvtMG5nYCqv",
  "key27": "2SJgj9aeV5j8iLntmxjyNcd8eQ6L5Wdjtw82w4dUChVM2sKUo5HANevwe26F8TDNuRaW3369WjKrvNb4gqPqhkcw",
  "key28": "xuggqNYSo5pKgwrqyzJPsKefzicMt18t55o6v7t1taQi8fsGLf35QeaTWp79eHYS9rtPQ8xpjQBY9pW4Lqp1Jr4",
  "key29": "4yCA8tu8nKNTL6P3wusfyEkRkv97zAAyY9BRSM8wTJyWNRnKj6mtvdhzyiq6DbgmCZVrvny44bZ5hy7HtZX6ZQWv",
  "key30": "4g2PZjLXQHMiy3NfVoqdMNMLcMKdz66jzYwcC7qBr26WGLSgQkUdqzEC4HEKtwJt2AT6xRUSiQhniJFGsB8ns1ro",
  "key31": "511giBZRCQv9rYt1GChCzrsn3ohnWzJrUFo5PmXk1dzzDWWN9tkMpVWT8hhSPmgzvZyXoagSkaz3FHQAHN3f7oJq",
  "key32": "4wpujUMqZ1ekr6ta4TEKHrA9iVnqMLa9mLkKNYceHVqtoyNMdjhxjeEmEJ3agaCkNbFLPedP2yjTgFe6MT1bjzP2",
  "key33": "4grrv23YNwSVUyQcMhDe6sq6aAMN8ybUHdjwhSD9wn1GcKX6CyCxRcY8KEizxDoeToNrGzbndjKU6dyBnUPzYCQ8",
  "key34": "2KHUQnyGGeMgTShezjiRqWefQGwQbxC98dpDhFuUQjLkWuAPHz27Tf19AtV5JhJiBJ8H2gho9R5F7JoR3JPqY7io",
  "key35": "qtxFesoxYBX72AeopW6zHurcF6vd2K5PELT3G8B4EB9Yb4vGQdQbqtnr5NnyEN7hfbvHYKEX7J3XA17y8G1F5yK",
  "key36": "3PYAXBzzgCqnqMa5DJeU74ykRz7DCePMbXSTnX9SDunNL9jLJsY2sg6LUEFh7hPfR91T84uVR3XA4tiCm2wywcxH",
  "key37": "3JCSKA6kkwbFQTpizmTJNwNrjHw4vq43LxcheTRc5vAnY8NYbKaJ2T1D21VPGKWK2kZnhC6qRLZZiK6pbPsVKF55",
  "key38": "5dMRRbciF9azGoXjf3NCVGB2syT8HLUb3YQ5wXYrnoNYA1AXnHp3MW3yN7HUoujwDd9WbePEn1wUMe6uzniE3Z4e",
  "key39": "4yKfgB3kNX5kYrLPQKjGDAvmEpijm4ymRNJLgWoqNeubNutp9ug1xJZ3M8BM9UxFVY5ihL7HFLXwXSuVzzHsev7W"
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
