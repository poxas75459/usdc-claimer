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
    "aJsUCtZyMtnQvs55Rp8ctx3hYs6wh2cNprCmF3HKTfjh8wKDNQ4VxeegNdBpxUfdPXDnh1cSf3E9HgyEqVDNvBG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4rfa4445SksSnGARanw7aEAqEcdndR8tYMzA5cYxdmSmbp8Ld7JmYAWGyrEyRvQY4cFzWmyPzNnHdxXn71uMu37A",
  "key1": "51YrxTNzzMeqdL9d7bRQ7AJiFqZkAJNpRnhemeRv3ThWdPpebna3R3Q6QiJphQsCJmFaBjrreNqcQ6G89YcUgCkH",
  "key2": "wwrijudeo4obUdeKbgLRFXQXvjdVzRPixGTcnbnL1hmjQGp96SgDGHy63adt3gPnLf6g8mWBG1nWUBW1Ho841u6",
  "key3": "x64fdL1p81MAQAN8RdBfqMZq3HeDns7sQEi5Yxf2x2M5aAVkiXpAaXsyvH4DWifZdyXUGkwbr6Dr4QGFj7HKHNb",
  "key4": "3inpykM6kLzFonnLd3tZ1FcTZjBjKZBo5djR4gHvhwRSbHCejtRQo43LQykF8yJkQF7v7CrE4EC6PWh8Eb9F27yt",
  "key5": "4QncopHKHzfWm8C4e8km9oQjbRnwCMozQo6sbRrzhNqnZZX9B1S1QrCHMNpREv4KTDdJLShLc1oZUkN2Lp2gn5Cr",
  "key6": "2agXYLpHrMHDcDoNYhiBk1EoQgNv55QR194ZZ3pCBnJZ6VwwZwzYjvvGGtCA8AMSfRvTTw1Y3XwCd7KvEaCN3k6D",
  "key7": "38KrZhC9an175eMzuVuAE4YPwgavJ2QprWEriQkhu5vPiMnf4uDt3HN8EprqAvGeTaYKWC3vy6PTpgXrXaMe7fL8",
  "key8": "5JjB9Gq39fSyyVUpTonjDUAME5ePrXuwrwrfCFFbAxcncsj71Z9h2rXEe8ixRxfcQkXVBz722UY9D4pwfHFYzeu9",
  "key9": "4XTWzJavDF35J2cDEP3Bu1EpLyWkDJiQpy3TUWCe6sd4WM2NR9FqeHy5743a9WiGhHWBxugtqGG7MpNbMLEW9WGg",
  "key10": "2RbNkvPsxhXGwKSQLbhfgnqwA4mCGHfibaSNCUXJDahhrmZ7TxfFRthu43bkgk39fUDHLpAx3moS86XjqiBvoEHK",
  "key11": "3rXXt2wbK1uR5LsbzCorUDfcDZNjSHMo1ZJr2562m4NV6wVAT2rV74hSaDZaX6FirYoWwiS1Svyu7vNWgu7miex1",
  "key12": "3oRqjNciWUEfrmPxAmYsCjZxmvvgbVEee44ceg3hQL8k7hUau4zhdfiQwLuZjpGuwqSoP5FXD2JRNYb5T8EPNeK8",
  "key13": "5a8k81ZNwAmDJCtt9XLhj1qVeUE5aQYKnbyeja5ymzP92GDKCN9HgwdWymVJ2L39KdSwLQUmvfGiyC2bbnwnQrkt",
  "key14": "3Xmez4kCNFsLkU7fgCiX1fmzRT7kPKehoaDZKsyBZKkRLroURnmtvBfXcUjaTMcg7akRepWs7n4ZRtFoi5hzYhHU",
  "key15": "5xeNWSrUgNnDgSHcqvtz4dzpgJXg5AMbeL5DAEFUca4HFpt7BZgDQGHHVaF1Ug6JwD49eBzrYpS8DJQnPrp3tsVN",
  "key16": "39ahjUjPGicedoV7qAsfvmQANEZvaFUT2W2U4Lx2qqUFJvG6FqA2S67nn4ULhUZmacuqUHFzwwmVEmw5LpZFjDAN",
  "key17": "W3HFwbxmDGFM6V8az1KWPXEjUJdinb78ybgLFtPknRbjUoKzYWmXjb7zVJn3WY8JEHFC93tAMLzkBdN51obgWXq",
  "key18": "2z4KyUFf8eLuuCqMu1YKKTetr36nfhhd9ugt2o69y4caVaEH5hzbL99ADBuZYuFGQPDUkkQRKWQrhHgjfwUTwe1x",
  "key19": "4vFGHUuUbJUjL4E8YwFuvwRUY982r5MWYo95gUySjtmLtvKLCKrZUfdXLwthprTCB2TG22xSFxMmqpphgKPVFSx8",
  "key20": "38ufVWB9T3AAXcb52JuUXHZMUnJC4LtyqjJiVyXMbRBiarCqSZeqRu91zFmcR7hrZouj2bguavenUmBWAT9GD88L",
  "key21": "3m46JGTd1oSgKaxtxWstTuwCHcCS2MmHV7dLgJwzrYbxBNpAX7J8cqNbkfTsjCUjtTQHk9WpUU9D8HRm5CdCjypj",
  "key22": "57tzCS3uAAjyZ62SRu3TvnDQoDJen4GmqStGAsMpSTmkaPZ6z5aziByZHs9mL8x6ZSndhQNCTSejHkrugpEQsQzA",
  "key23": "5cAwsiXZaCiVyBXkwCvDYgHYowsznB7uKZ2Rw93inksNX2H5A4eweEYaGNh5owxz7J9H67hYZkCdwCZAPPBqa1uH",
  "key24": "5JmM9rVZGeUpwA5jRa1YRoi1TpF7nrg96DJYk9avh2wTLnAmCEic1VZkmwrpV2w7YfMybPvMTEsT1mNBuw3am8qX",
  "key25": "yxHu5oC6YhcpzUfgHqmoeCxd3SWCiDAkYvi8syYUNm85ZMpMb9fjrXV28YLPxXtdhxzZas6AR3t9wdq8jQyv37P",
  "key26": "KcnxGFM1BRnoMZqbEcYsZn2qTQhSkfh85ij6ZiENnf8pseQWx7BwwQSo9G2NVjzXkHs7D766QhAszW75Jwbh3Zd",
  "key27": "22UT9Caupvbp7LwBghpVJswMQo1j6exUFpRQcX52btSNQnBywGLg55xL5WHixN7QqXrC3g1ZVNeVz8xLeXUzjRdn",
  "key28": "3UKXWufBJVtDH27m2dsGgdU3zW3JN7hsW7Y9VkhLTLVhRQPgYMfuZy16VY2XeZZ34hMYpb4K2wGn2pjWnC4jUeuR",
  "key29": "YBytvM4heVPJQbc4xNPhGMMhLHfK2rMbx9q1mBejz7RjeDddUkJ1KGhn6Le6isewXJGvRzLSsFCTnp9Hgw8S2rR",
  "key30": "5H9ruYB73dkEEZa3YRyks7wTkPLAsFCvmGepbAX3Fn25315uQ5oj192Gha8RiyDSdGVmFDG7GEpJwy2FJzhuck9b",
  "key31": "4JVodWS9ckXUKECjY9TGGTnvweDrwKwhppC9EnHJ27P9Mg3A1wuZMWzrneR3pWthCfNxf6zG4yXrvxNfMUzy9bfL",
  "key32": "5LA7mG374EvSpT9y8s2VAVYh2BtC9DJwA8kb1gSgZGkbHCA6vn4DbrVEytb3RfVoQgB25bTjvVBgwLJbjDz6rZrs",
  "key33": "5xGmDUZPoRxDJrf8tkXxU3oW6TtoUsRW5PpSW4NhybnzwWEiXihfQxg2tfD7c69K38JNDf2AuuU4q2iM51tHPnRy",
  "key34": "2k7SCWhsmC97h6U33wVHZdiMCCiUSNbVyyk5Qp3NqdpD7ViHssJeYLCPxHezFJxyQHmd6aBY92R323e6nZMHDgrx",
  "key35": "5q7ctv8a9QcjfZbgvQULt2gC4sbL64CqBSLgCS3piuHeq4HYNV8RDHVAxMEhup4XL9ZtvwUnszqjgSkLRtWN3444",
  "key36": "M1KUazosuYKcxqsnTJeQSSi4T7Z6hMSACUm1wnEPgcQUuggNhonVvHjKanRSbtYYsdW33Gskmi5WqcwoGwknBz1",
  "key37": "5zL1VvMJbVCXdaafWLtC2ktrJEFyLMxwaLQJgCMLjT4MzQerAytFAT4UczY6Ytz4mVvtCJkWKGSfJ5Nt2yzgoSbE",
  "key38": "3hm8bcd3gxHTfMcjqhA1NUrQ7DT5DAi2bgVoWHFjNLW3CSZSWTYmkW8LAanFK19twB2fGakEn89N68Wpsn6PsKDm",
  "key39": "2UQamdJbRpqpzeeq9qTqJfaWJpUEm8kSJeYPtrbQZmr6TLEX867dnaySGwds4UFcHDku1UJvoAqftSC2hFFKZrDK",
  "key40": "BGCCA2ZZeAystxhXYzQV5cqPtaRHuTBArMGNn9JP2je13nauiFwhMTTrdN2JbuWYvxrN4inJKKNdDdno28Ax7ad",
  "key41": "4zF1td5VaWLYyyRzfvq3ViyXLW5yhpQQZrKKoMRtsbBzekLWvBcSjNtqgsC3DmWLXJKph2wHeme3LiUbWvFPQz2z",
  "key42": "6664RgvDgbeMPbhYRWw7emEoRm4g4qGGpWnvKpVx6xSVrCnWj6S9ALG7ET4uUwsszQy6jZarHt32H8ZDPZxU9Xwz"
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
