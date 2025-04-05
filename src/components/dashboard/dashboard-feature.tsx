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
    "54mdJFNBUw7S4oqdpGXDbREgnKFeRws3yEUhjNbMUYyV3vqmC1yEXTBxHvvMSuwXbfwzYVqnfqSvqiEpMAvQMv7W"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3JvGrpR3TMRwUwJ7whejz7apDkXECDZMRL8hJtmUUcudtxjjeFKo7QJAmR1XnnUbbRWs6RjBaVoB9i769qwgXxpc",
  "key1": "3cAMpKFQDBV7Qvz1coTyrNGnC6un6NdHAi6SFEsoDHRX5M5A9F2omSR8eomFR18RoscZfXbw8FaVevY269di8akE",
  "key2": "5pGmxvgmyB6BWUy3VBmZGam4oZvE1iXnWmDW8KMGWtpJHNb6mPWnEYE2J576d6USmyStcCUA1gb7p4ULtJyYb8S9",
  "key3": "3nwfGaY9r2GowvW529hy6ABL3zSzuo3XvjKedeTMf6uULgSAduLgoAGTEvv7dRArog8W1uumRjkXXHXEDyVct2fW",
  "key4": "eq4nDSDPfHohvRt5V3WmACnuBUCWuAsy1hNCuED29z8hjx2TptZbQNLzZaJNtBg7nq9aKs6zcE8oZWR9BVWPGe3",
  "key5": "21mdbkySWosW1H3b7izgevhcNoUJByeANtXFjKAMkwEBTqSTfG9KoyaQPDqkbUa81gCPPDg4jz1r1BqxqTRvaGJS",
  "key6": "4deB2J2ejFbiAXPc4s4i7brYNNyEZf6mBFG2T2gZDKhMSFNtjsVJpSq5bZTKfe2jHBUDLUHGQzA2XWXS6Kjw4cHU",
  "key7": "51zsC7H1jmGfuQH9F2PWrR231KtG8o99mUyKT6HeWRTo6WQZsW18cL4gytYzEZZ7x491sB5NoCCKDZVoB22XKafD",
  "key8": "57Txdhd2nMsJhBSfe437H8Ar5yEYRG1a7iUjX2G9cwMYH5LkvXefnFsYri3Pvudf7BH2T7LFxcgag6iVYzb7DPkX",
  "key9": "4pVJcJoajRQYEFeChmQRijS2svEJwKBRxPCnG7k5iY9wXwEzvemR5QzLqZCiq9bA1cs5qheNFhpFomN8dMKaScgA",
  "key10": "4M3c5TUJCMJRnrPNBQwsJJLYTT38pvHT54A7RV875HdAk1RT6BCzc7NwNfymkQgEz1QYbDN5YYpi6MKTZfbXBbsU",
  "key11": "5Le1aotWFEFPG4QAt2ig1wrnzYKBmXAU5MJ1PtsY3jisynUMAxREXsUUhxDfWaZodzwXt2LNLuZsC7yTCM2wsGfX",
  "key12": "3EW6ZeomQLQTxk1rguTW2SFo9qcyjAvgba87LTzDnFpG9Syjzcc3EeAQyJSwzedHVpfed7ULBpdezpB695XXbu23",
  "key13": "4owKwn6qXbqVgbkFKsMpB6j4h8kaQzUqyLdfaYTT8msahUMqs9cdg7pH56jyQaVEscouMLBo3uTDGq7MBBxS2c8d",
  "key14": "2QuykvGdLSmFxZ9fLXLR6XcydYHDiXrBqmopBZCfFsMvGGRkU7ANXps5gRczUBR4wVpMuwZEb3r1jKY3TNRKFx1B",
  "key15": "4TL81aiBaZbvyfZGwRtG1aaFUoY6qmHaUxAJRMhMMGdMtV59aCbxTEpDjyE84m8hX3hB25YeKUf8o9BhRCAqCPRx",
  "key16": "HzUNTizMcynDF85XC9QaB8Lt2h6CXmwmgGyP9Djzqp5xa5p4dkvi268dpJs7mw14Nk5ovhuLmAaYEizvtExkUAc",
  "key17": "5RvYpUavXgpogRP4eTkd6no9p2ZP3YfpkdNSdZ8H2GdtDikQcatysVaH1WZa2PgbGWUdSbqr5S181shrC4WZJCqx",
  "key18": "og9D7TQY1tWNL1FMBbAAHEmWw1hXHj3EZ9sswKVwHHtiTptAEKEJEVhinxf9LB6n48EogADwdBq1yYsQZKJpZ2Q",
  "key19": "2AMH4jcjDJshTigdZRU7H4Jy6jH4oSjHHvj2d79WhKihEbkWRbeym6fibWMQ1cpZ98XjdZQv9kHP6VvnUnr6vdpr",
  "key20": "2U6GnMCsDycUyUY9yzp5GycPJGsemGDSQyVjcQe16YwomphCCum6DUNT7FQhtDTjcn3cVmXQ4MShCjRabR6TpC17",
  "key21": "5eg3EBzsJ8iwrkBfvhgr18dho5hjuPMRmGhqVsauTeDCFL5UUsmV3RMa8T1qUN2cDJMSNdYSHE8PgguZ6dXJxN2",
  "key22": "5LCf3PkhPQnkgyb2tnhfRxA2C4bEbrBE6Sn1UZNg2dKuQ4nvnK5HfBHrUn2wfTVwcp8r2W6UDnvStU1JtJeoXoZi",
  "key23": "5t4K5XBXgaxZZKiXx4DTR2KJjkXDcCkwM2XoGwcxysUo6jKD6DgjxV7WTdT2xYWLYhvWYy1pWP8xpEfx3TVDrR19",
  "key24": "373SoErGCfFtusZgxkiUqdVizz6f8u56siMe12T17C2i2KUgts72AbwMSujjoPnFUYaa29QZHESwzucSP8PpEi9s",
  "key25": "mFjvRqzTL6w7DqT565Yq3zZrmX3iQsRJaCrGSXLyGjrY7EQXoZaxE6Fk2roJt8dR4EEtipWvwxQBnD6is1vX83s",
  "key26": "FvYzfx2uRWC4CTEkENu8Sepm9j72hJFCBKRYMs19vnPGYi3TF2RzWFMWhjHyXyrTJReodsTQUuK5hsGGWhtvK4u",
  "key27": "3KrgEREv4TDMUr4qksaKxrKYxduSN8jbd6cSSvDA39fFz5mLzesLgMDKK5693t9GPCybCKp6W6KjpM5CwWf2juHa",
  "key28": "5sACz6C1TVmwCJfp9R6WAF3EggfEKefE4buqwAnXH6EJi99rUvpGMPJgn99zzGGH3Nx9ETR1LYKw9uryREg19dMX",
  "key29": "23NB5C2mZ9CaHAwF9LCuPFevpo32sCX1k8YNNHgYmXAfiiXFzBBtDUJPtvY25P2tuMELvytyR97Li6hnrV19YxJH",
  "key30": "3FvkqkgFiJu89pF43mBJQYxUVdVozafas6kMQ6zoL278pd9MzjLeYwxoC2wRjE9yEG24bkx3kxEXKYQ3qGUYYQ5A",
  "key31": "2ACaG8sTwSLH3JJsuBHbVx6TcN4d4Qi5LDKLVfuJ22Z9Kngt3yCBELmgFEFTaKLxU4fVLC3X8o111GqhNLpoQW9j",
  "key32": "SRFAcPqvG66VrqLFtvDGHxcaeDs6xXh9hECc3MjUiMB4YCCzBqFcKw4fnwqFvXJQFJuDm4Hh9fxCfAH7s6EUz7V",
  "key33": "5P4ympskUZrQMLmKYQsTUDm47UuJU1aTEgKddFQjEeMiZWQHQ8aBuuvthjLYocYnC19w8iMezMrETpTL6FM9VWa1",
  "key34": "4Lomf37rqNNHxyL7ygsARM7hBJvkbPot5rDyU3jZVU9Y7n51ZxdZmiAkd8L4VPzfKitqci9jqny6cRCRsJs7FKQz",
  "key35": "2t4jKq3tjrP5CWBBtjQ3UTQQLmAZCyUnAzC4QzdBgntrERpArxPeH2GWi7ToC4nvxbHnHzrrUEWrdM9qtNRwiS5D",
  "key36": "2Hy9dAVp4CbD5E4qgsZmTaLDLhNSyYfvLxpyD7FVip1oSTEZtTKRS78Ph5e3SxjxMXMqQoGbZdVyzdQFQmZShrMS",
  "key37": "2a86D6JaJe9KTKHJ8L8haqR1uYQ4AW3vWzTuffSWYyg8fvjxGajMvYWnEFT7KG4ka88WNkDtYNLcLwwP9pCFMq6s",
  "key38": "rrfen7WtWkmcCEHeRMLqpPy9QeqmCZ5CpaheUhstxLzGvQp2b9vgX3g8uzpKeHfb5y39cJFH7SL7Tg1b1ZnT2XD",
  "key39": "2fCcuAmTGfz8d6odQZs2fvmXdemwPcqSxB1BNNvBR2wy9y5CR2Lc4zfS32QysiNkRJj94MjhoT7yGNfbqd1X3GGX",
  "key40": "24tfqv1uvky99XfTb8NHso6tX3NDvCSeiVHfVWe9AD8zTXofx8uM35je1ojQLq2PqHbkzxrkzAsznNc1Kizspyyq",
  "key41": "2ZpqiUQRVqaJB4ewWiHc3aWHZ9wHWdoG9UUFgSNWBKCrvzC5teLnF8uQDanFWo444TCYsw3mCQTNXWjHRe4Y4AWW",
  "key42": "2PrnWcaTjx3QzYjEVd3L3xhARMe13KewJtFQVPJjQvpk8MvD8QhW5YKrG9vxcrJKSM52fbt3w7ipFUbE7qC1ktpn",
  "key43": "2igcaCLsXuoYRSf7ET5eDuAfAGTfcsbbxXp38g1swqYCq2bS7yosjhgYoRXmdkMJtXJTNx9ngyUAuCt9AVCJtHb5",
  "key44": "o5xVb1MLXAY4qR3xtoJZWz3q7cb2JzM26j9GTLTdFUdDE8ECRyvXLGJd5SWnuVSKHTjyPj3p18QZPS9wRLbPkLT",
  "key45": "2ewrFr8Gpeg5n9WNRBMD8CPaKsELEGU76Uq1qMYYDsmgw8vBkfZUvNZsdvPxznSSRG34ZXTYgd6PP6N9H1F29yFf"
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
