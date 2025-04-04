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
    "3WUQVQgjvmCoqwVan1AaGguEd7N5B6anhp8qDKFYiLfHQ4w6yxfEvLJhHajtethqiGpymw5HtDrJPBrGeSLBHBuR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5qyNAsxKp3LSFV5xWWN22iEyxrYh7UpLiq5ySxHuk39JynYwWfAgU12W1JbTXyi6hJdpmBebJCkWfuSc76SkVfyT",
  "key1": "5kGEU7tZqthzzTmi6CDiDexgpHy2x2fpabpQCW37xqDEcLLoRomnv5Rym4QJWLQyvLu3pdbDsPq1Q3U7JmCAvL6w",
  "key2": "2Hr5efHJ77e3mKm1ZLdYaqkGegvxVyHESw9pREtQnpauqHqaNctX56dNF8eNHCvjKeSkLLdjf6Bbam63MhfXbHYV",
  "key3": "4E6iGU6nCh7Aysy1HfGFaGsAuCs9PH7sfuop5wzbqWKAbz8PyUeNNGumwCSwy9twuhto9giPfbSfVi3LB4DPepZC",
  "key4": "hJfhamCjH1ZyKvBXAy9PRnGEskwyTbLxgbtwevWi7pXKAhPWWCDnLqtrzK85ud7ywncKsiWro1rcAgT6oxMqb51",
  "key5": "2iLtpqDheAUQvY73Lk4XUmBUCtzMu4J4jhZkXX1J8Gmgmh2fRUGP3B7BzjT4PmVvsK1MWJqcS7oEKM7SDXP1bgpE",
  "key6": "2V2h3XUQSVu5ZPYDfMyrYctZNAZENMzNqQQjksyXtM5QWoUY7XuQNFkKdiscDuKrpPiwfMk9de6kC9P9R3Cfcqex",
  "key7": "b5gdm9nxRcZiGE8gwXnxfX2D75W9GYX5Nh2fgAyC89dNsn35gZpDnCF77J46zaHkfEs1VGhMu7hrpZcxMXuEVnT",
  "key8": "2FfcQQrhGuQVutAsJer4J6Y21EoNUuygVMDxqJi3xqLpkHXQvWPABYXLxgBDknEwcTNs8smS8ksLFNaNaTwYz1t4",
  "key9": "3gKPdnLUyW6N1XJEPYj9q6si9EMxqhQ2pEBPJsoGKvsS4aC76MESaJ46TpvyrrvcpnkbpiVEQi8kc5me86hSm1mk",
  "key10": "2ubmkp6eHkmfh3nNic5orHixXbRvW2A8tgAnt5TsbNiQi6Gsy8rbsjFjz7qbvArHYD759u9AeKWqz7xXCm6fGanh",
  "key11": "582gDfgC9izsBc9ZrwdErjxrZBPVp6baRFcxXTzMraJBZnyyfztzKuzQ3Ev6RxTQ3wEcDHNLm2nZcRQSktpdVbuH",
  "key12": "5gS6pcXRtdj8W6fLAgbm2TECVeAAzddAmtkYKqg7NnxMLtnjhSqkVZFZ88tXp9RqAQ6nb4r11bABKXwv2ovAeS78",
  "key13": "RZ5iRvii4ZLa8eTUNXUKvVDocPc5HgiEzx6XqVyFp4aFkmEVwnjr9Dsvi3s3a5VYc915uxsYpkXiPz2J1rdSsv6",
  "key14": "4CofiQik6JV1uhh2yf291MC9HY49Mmiwz3dNhtJD2LTT6RpL8ToNiLu4uGDEUUZs4zTRcupncWGVivvmYZXCELk2",
  "key15": "2SY6k26Jdk9L6ny1bxVfascyxmJXi6NbopLHPkRLVe7bnqg3FtQ5xm7qAikEaEEhABfKuarboWf8gAeT7WjH5RTg",
  "key16": "52VDCupNMBWvvqpLqUiAgRpT2Wtj91mumwJ6Wb9jm3rEYo9uHTu1VQKYBR85MFDkWKa5ktZraztKGFj8o8KwYRRj",
  "key17": "3poaVmjddYHqrGRNeZS9dWZ1gDT5UA5Bs863MmfJHGxE9HWnQ6p1owN81MwshuhXNso5L19FQUuwmki3Qe2rqtM6",
  "key18": "5Md96mWzfkFeChKuuRRViZVw3haAiQPqXGojKJfmUmh9AMY8Be2FQTQMvhRv5dZZ4Lhg23ap9jmrvsCZKio1FeHN",
  "key19": "5FNxQVd53nN8gJTQfDnUJymMX25vE6EVPNFVfaeUG5bGMQSwbathGp7WsMCjubWFfzbLiiiPtVQEwPRX8R3Rw5pE",
  "key20": "4tGvmRxFsKPjBiZSER3mfLaTrbZdvZ3f3tak8WzCFWeXpSV8YWdWNpXJxLuSapPLM8b9VBqaHr3o3T8CHgmvv19S",
  "key21": "41V88aLRVFK9vN8Q8V5LKCoDx21d73sPLuBheeuriQ2Y3gxGMN6EiBmxCHQatreYkiXzNwmfUdjzPLCX48tiug8Y",
  "key22": "4vfqcrKABHBwojxd1sbfFqPdXRgxL2cHtN9BLwgLEm82ULK7rCWiESv9bviWzNJeLa9xvX58eAVKxnBu2Qbmwnmn",
  "key23": "2gMMcWKCeTb9YWLyU4nuTZtCXmSa8Ppho197mWn7A4rKrRpuVEqbA4KWpQBeiDngUup82EPciTUxsu33Qv3EaiT7",
  "key24": "4d17BhUWA7y71AhtQ4ozwpG7AsPKSMKhPH1DRRVdsHGnG3WZ9kLWxRytYn5Ebxryr2bpCdRDR5r24zs3sr5DAmWb",
  "key25": "2S4eqjsJF4SgcQpUWRigMsAjDMjqVkNNPAb8qg6x5ceEGZsMvXLnqfKZkVMzeVTbtmR2XfZ6Z6sVfSSDGhxaQysM",
  "key26": "5oP7VgN7PUbJnHJJRoBzMo3XzE6zGnQtZunqcqZ1oBca1kra8LgnWeAWeETfpPuG76vNSmZZfRfLRUJ1v6qdoDgt",
  "key27": "3nRtkkTnyzEGsopnKQFAAT3LVpXQgorKx85Wzbhi6d2d2KTkXsgMxX96hMpBangWEe1hP1DAHw5fNJcnMZ86wnhZ",
  "key28": "3fbc5tAFGNiH3Uddtoe23jUkBg6d4rK23sfGoEpufc6yh8UK8W9uaMVo67YGJjDU81wQU3QNhKg9fBSKL1BUafkN",
  "key29": "2SL7mP5jE7P2sRwWjupN1vVPL5h5g2MS5TV2z4vEc8HThQJ2LQYFzWsXfgshc4kxLWJdsnRHeL8nSbMmGLzb1PB1",
  "key30": "5xc696e54KSgwfBEzGbUSmQvMdiAmHS6Uu6RT2FsnudStj43fQrtErJQK6eqnHDzs9FgKdJdWsfM1dgyHBmFmonZ",
  "key31": "5SZSj1s41CxGqAE2Ff9ZqqMhiFGCgqRHpXtDUREL32vjQQtPKCeCp7SUqrN9QvcZamuJhCAUKt1aYjSworNvcE1j",
  "key32": "635ehvfDeyiaeKV3gbfYLorbcNFFCV6KfmfotWpPy7cJTae1DVnGa5VAZRSSzdLvdKbo7dgkCCKt4K7a9qZzdwpy",
  "key33": "3CcdHw24E69JiTGp4tYeRjCY4VigeT6PLwWTZ5Hw575PHKxUqGQ7nZxKxWJrGaxHF2RdD4RiuQgP6Krdyfckryph",
  "key34": "2PZYfCxLU8qpJEVBH46MrgFE4gUd6ahyfZP9KztAbJLG8NB41NAw998vyZv6W5Y97rCFYeVFt433334dLS9vjfk2",
  "key35": "5J9rWy2U3jjSPw1DZYT7UEQ2RV4yGddufYYwthu9DUAgcUYxUXya1Z6cDZUirKdNFqu4NoqmqymYaN4NsPxpC39Q",
  "key36": "G9YRkWGhCqiBVLAsM91H6w8XvpRYh96SZ8Qmpy1zfs7sFC9oiDavucLuaJ9QBq3RCeSPoQjU924nrkFPTc6qmNj",
  "key37": "52hLgFfxHmNEn5JDwPzfJs7XaHnwvwYTqgpLnG3apkBG2ZmzJgPWw6AkuJFXnoK3ez5MHYFCAX4wAfUq1wUw5Xjv",
  "key38": "5365s4gzzExUfb7Teic9NF5geNdDm2vmmeqnyh4NDkWpsPrum22ixYntAxjXzG5S8UL33acjKpAoqJ6L2fZvq5nf",
  "key39": "58rSzKgx8oW45VxS518gCYcUH8LduP41dWygCV1VKyGWatWkZMoJ6m71mQJWtBuEDjwqTyypnrs8ZaMqkzYJV7ki",
  "key40": "5c4LqCANZCqW3uGrawLGXtqybyXJNHvYtwFiDmDejHQHA7ynMAy3hxE32BM29ftPe8CmyyrvZZjq6LcYR9v3tNHG",
  "key41": "3StXas2b7zDwBWVie8wEbwcy2R1DzAhEWnnrGFW3bRkSiPBdUgEa2ingycfbSLfSwvTmg57EPbEkcGagBi5gA8h2",
  "key42": "2ZToSstnjJGii5UDeki1FSAcjz4gZxCdC9z25fr9kE3xtjrwcDzEY4VLf9F8o3Atp9v1PKNmZxvYHbgReCPKg22c"
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
