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
    "fyBMtULs3CrL2HPxWduqSzSZr4QWMv9Y5hCDJbv4WMbJPxssoDtDdXimejQsjxWZVsDhbiyqpvz2z1iNMEbuhGY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38LsfNQMHyJV8E1ahLvqVnSUfZQeezWHDd2uuLE9bLG53iJQLCkdYrBBzXew1sWZU3fQV36DMjJwQP7A4DCG8dAE",
  "key1": "2jj2MnpUbQDiVp5W4EeBYCnM43C585yMN94Xy3JtgN6BbH1CnwKy1PbBTfQszAo7Mya6R78rV4Gb7vBWyPhdizd7",
  "key2": "ZfxvWMMQeV9ViNzTtL72zVubu32zpYQtHoFqoxXqWC8XdwBQJBhqdZk1XmvVroEcEBA65ggZoYLJwPDuRANVitX",
  "key3": "Z1zV2odFPzbcWDhqs775HBuG1zuM5qStBY9xgKVS93simKDfQUb1u6HGpzLKEr42achmxkuc6LLSWkfzMbP9oUm",
  "key4": "JUJUStsN5nR4BSXnLYh2FzwKdAxNVsUFQKwce7EtDabe8H3DPTBn4ynt6ppnjvJqXQfVCSyLAcU8eJm3WUt4RHs",
  "key5": "3cFvqs7NEZ1kyeLHTSLKYKbVKtpJNjTmrT9VUXTXKsafdaJC5ffvvVzxp68GKsNpAtrGkJJEf829J6D1tP9wSk5L",
  "key6": "3xaXuCtT725KmTLnwFHYuikYaqNThUR7qXaps8jYQFXRiArtXfYXUorP7qBCsyt9ctBCpVUgNQ4haJGWivcySxBc",
  "key7": "5jKEhvBs28irEh4VVqkMZx6ib9PmixahdCiVti9SrfTPJ3J8p2zN7tUB9yUeeRuPKyuAs1HyY9Go6Vx8fRBU6TwA",
  "key8": "5cZqiakd7hkGbYL1Zpz3ep6QHGVLR7NeBpqRZWx2Wgs7SGDTXdP9iFQ6E88fqDucc2UDvb2BDpeFQjoF7tdnqB6C",
  "key9": "4FWAYQNyYr13CEDyt9gBk89XJqdhnJF2HcHi8Vkn361e1qYWRXeJEfVfGWAzU1hvVaVgSoWLqakgRQr5NJFMPgtZ",
  "key10": "5JMN2MtEi437HP9yT8pMPvWRSmsMF3mpCUJkcmKqYUD3zvugDFoZyHcN8ToRfQZyGz5YJuMwBSuaUpRRPpKanHGm",
  "key11": "3pWZKVtjimzbFHnfSx2Y6zyHxaLoxuyVFfjUmiwruq9C3WGNYE1eJqYzrAuGi657HsaddfPqgjKJFXzUUzvmxGHN",
  "key12": "JA9cKELCRMxDTXJXQQN6udxqrZRTxJnf4stx4UnTNAX46M5brAMGMsRzmYh1ACStMdxPm1GisUvVg3iMn96eZbE",
  "key13": "5hsRRMUs6rQMkyGquGzEJtsFkiowiYKFiwX1vN91YpKQxo9RsNZUnH3NBXU2uFSMJykQqaqvX7dGmdRq6dov42yv",
  "key14": "3srT7So2i4zfHk8PSpgPQbKhLfPQ8D6Eo1JpMp5VZ461qhQ5idsUNhmZG2oTZAnqM9aQRgacyzRkTH5U1mA1CFoY",
  "key15": "2WagEwGdEc1TYRgfxh7HukLpgFEvoW3ymHW3YwWmkXuSA3hgKqt6SJVDknj2GNsGT6zwrsFpegj8CWzy7ufaNY5F",
  "key16": "289hz8QtTqRy7MsKhqaFCxJRmqpUswZovhJKraWTBwzxw3jMB4L5LPLJKUsX7E2szDEHZBFbFhBcHhSCXfPoxNam",
  "key17": "33EQs9QnGeMPZDezjT3uqySqN4XaadZQDf7kC3QEZTiugGyDzva8P8FpenPQ9zXJcnw9YUrSyN8YhnpVdizK6L9y",
  "key18": "5yM2wZBt4z8YMxDjdfxgtKXWxmSb8ugubxJVbTEd3epgpQqQmTcbNQKtimCQnuqWas7L7d1qdZvBn1xJY1SXgFKJ",
  "key19": "2uc3sVwHen7JWZw7aF3XPT7HoCsi7ff5RSZWwPjk6cjai7fNVkWFjQxAB12a3HHntoVhk5DkhZ9WfHQqmENLU91o",
  "key20": "49cxpxV5rbGt1FYTVUWiKyujAU6mKLsxiMpX9DvLjjHScBZLx6m1enA7amQEzGN6aNTJj8Qx5rbPLKDHovhHV5EH",
  "key21": "4XXpuKMXLx7CS72sMvgSYDdtybhvhHAu5QknW1NvfkpAcAza67PZMVnxgnKKTHRwcEX2CwnVZRuT9D3RoXnLPkKv",
  "key22": "5Bg28dpvhx1mUAAb37fWDV3mz499vk9huxrYSJ4wxaMKySzv6r8nHPcWSUh989fYwVnvjCjVENBkXKaR5TsWx12n",
  "key23": "5Lxvcujfc7DPaCRQhSNkGkjzpmDaWQphJ5NsYU9FaCsmTM8kbWCNDVZSGmYahDfSbhzbivfHafwTgL9wAwkXZGwy",
  "key24": "4B3XcdhwpTSbcj8ywyvreYHCV2myoUQH15tTfWYJhJEwFXgy8HAEj1AXTwMk3oEb8ATJcnY9Af8dAMz4mokuDfxL",
  "key25": "4eSmuiHi75deZQxaPX9H41NzxDfRvmiQ1WcSVQgSs7h7T3NXvvPLUitDYLGfwZtcEzN9eYZGPmfoyPmVy4bhQHfj",
  "key26": "9aTmTb4JBJCvYQuJtnJ3GXDncUuzzx7GxrwG5N2bswK78aK8oBdYMXDJstKfq6AChtVfQKV7K5aoHoFpv18oUQV",
  "key27": "2a54jE2eyqTewWtkwUg1wQczkLt54hyoDmKEkBV9ZZbYLqSjg1R7vj62fdjEgxvDPpxXWfV21yvff4KgxnP5cUW1",
  "key28": "59mYcKzuYe9D3Wr9AQcjfbCqE8A9R9YQJnDkGU86Tmhq8ZDaZ8LqK82vj1Qop2FQG1Ru4BS23MpTh7UQ4Bwb14rm",
  "key29": "4epghyLBNdmfsNRqKxQuRz22ioL8xR5DL41UFHy1ec3fpP1RxStZduq8knnfrELgHUVHaUZsjoorDCPDgC6P8JBb",
  "key30": "2zX1BsfEkLdsK6BPX5ocmA3jLJEsQDAUPsHZHd4RSUgDUiAgAWwCJhQzzu7L1wKVxyMDR7WEERpu1aN1EhYFxpJ9",
  "key31": "3BN66Hm59YHYshYyN1uUysAzFBfKHbdG8A5dBVorZ8Krb4Z7PJsncndfnUj5f2CieQ5donzKL8W9P8TnKniDStGd",
  "key32": "4g2ZH2WwU5Hg2ttnfoT6ooBTf3u3oR2NfVjLLL94v8hHtgypsfYaocXjC8qxotz6EakBN5VwoutH7v54qgHqu97C",
  "key33": "3keA5BMqSBF5Y7wNW9C8Y7wHP9iAjkmGeG4ySYipZc4hVkff2BjJmV4ws4koBRuKVPAhEcbmMrRg8bYcP1jskKFM",
  "key34": "5E5JmKVfmbb7HuKQrBQgwFNsSyNRaPRBv4yna6xrnUrWpCveoEoh4b2BdqJ3ahsyaCxMe1SUuBM7mY21M6m21emv",
  "key35": "4LJNwV3NueS7V7XbHAzeqxpFTRcr7NPsbLWCRwCRw2wzPrRf6dhBugkiAXVTvLhJTf3xyawM8ooyrQWPBT1xuksD",
  "key36": "3sRnxzRqxtUbzBqUheB4Q36Aj1h7aHZincDbCvmM7QHd1xyNHai7vXMR1RNGgu1eLLqyzM9f7vAzQxXdNTfDU23D",
  "key37": "3zHpGvRXRZxH67XW9K4eMw8qUAwWoQxriDoXsdhRxfNXjuoSsTacG5pKY4po97YqkurEuzdLWZZJURvvHgcq4r3s",
  "key38": "3eeP3cB3SpBSgCkgSmDWZeUyXBBxd4c67Y88SbQrXiUzz6KmcQKa2vyYkUV9CZ8ZWyj7DqpytJQZCztUN5DP135U",
  "key39": "671xerzfuAYCytdZxBCpauuDayMkeNMUht3ydrwT4rEtyEakoM5oVa6wQ47D4zvuyWyhBFeJcXrfpK3PUfpMYEGV",
  "key40": "4GbvnyFUJr1nu1XK1dEzdtZG8ARwtydW5c85eJhsHK4QvNc65t9kb9xMroiDdbgNzmGowjAHbpHXLZ6VWPRpjcUk",
  "key41": "28AFAviv8sfqgiavrd4HrF7Z9xh1KkCWRR7rKMVYCL9cA6NBZjQFcUaB5kyBbH4q87bRwa9Kt7kZcujEXrGqbgns",
  "key42": "3cEApuQxFp9uPGKcXTNcZg9CtZewg5DsYpwgyj71UbnW29qDXJa4RpfBMN7kewE1xZmEpRqh5goT3Ctzo5eDETJn",
  "key43": "F7WLu3Y3atx52z6LBBLeg1bGzgViB3VhDJ41RG2E86qRYYEzVzmugcojGEje4vYRWiQhwVxtxcEEdBJZqbnENuM",
  "key44": "UXJUA5EBGRfJrgBWuSkTYjQFgfkT8eyfNGkHFgpt6DJZxxSHwZbG7LL8qkjrKnm5p3T7W5t2vyLxfYotWQL3g88",
  "key45": "QbMCNoX1xpzF4fBpycwv9gPXwvoennLwyrzQPrGkro4VD52Kabk9VvXzzM2A8cW9CvaSsqUvm3i7xQPTaKeUjpF",
  "key46": "2Cd1GEfa2mCJ2Z6e2aEwPrxLS4rc7V5wZznLTKCoiZ285AR5EunVhEqhLNGVSvpLYhVWysaCmWnWHJJrcYL73VeR"
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
