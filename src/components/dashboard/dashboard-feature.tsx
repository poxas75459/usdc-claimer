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
    "2ZvhEaSNbNsjGcC7BNKTJiLSrFvbKykeGdDa7n6oopHdk5DnL2kZt1XxgYJquGfoMsDusXGCdaxqGcgE1n8exA81"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2A1cx5r4UqvSNp2wKNiUciSpn8WGuoEgAYMtzUPtnxHKgCUEwgEAXQUKscEspZ9gChDjtVGLw9wJbEztF7UuoioR",
  "key1": "493p3c6qXZ7EF2EYS6smZM23KdtR98NMikjfTAicBADumLZ8jv8wD3XABRgY1rDBCvEBwuE2EpuqBtNQwAGCV5j7",
  "key2": "63umNe1ZVU7VVW5a5zeRuPJzrxY58var7avBKL4jdoHPGuBsy9AcBpmVLnK5xMVhBqw9dU89uJLNMAL6jjmVvnnq",
  "key3": "2iViUctofhzoimc256fvCh3sdo4zJJHuE77CFjB6WKdZXQdQ87eahQoRutMc2QDmitGBwfFxtSz13idSTjr4cA1x",
  "key4": "5pD9iib4Sm2QTzQqv8QhsdFiw3W9RpmgjAYNiNwg5CBDjAcokp9GXxVzbRB81yL9YUdCViA9maXoHj6j1JyMzCcC",
  "key5": "2ioFLvX9wzNfdgs5Gfx9xCQxzR5f1aSesXUdyTMnEj1baMxLbJbEATS5Bo6ttRzx9WuahendGJp7TNfdNRsKPYcD",
  "key6": "5SYqWT65rxxJz3FHHz3Zo1uYvauio4vyMCb2HzS6qpxMHVhafdELzZjxmcFZb5GcE3sHjnMAZHKTmvkFJG98KCjX",
  "key7": "5DWWHcHvRnopmx94fdbSH2ZjdreUFg5k1uPgDzE2EcuJKujPqbwzeqX4BgwaMkv5Y6LYaXejKp3cUKy68HSJbtaa",
  "key8": "28rti4Lb4QtDbp1wbwQRYcyQgpZJphwPhFSDfurNMB7SHxZfpBv2e3MypqAnqYMUFzuByb6vrVGiBQVUwwT7xWqo",
  "key9": "2jpm7s1eA6VKaxFgwovykyvfUDGYE8actgBiZrAcjaTy8QurBUBwafmLjX3yPnRxqBVR5jBoYKhExC3G2DZEijA6",
  "key10": "63Uicz6KH56LeA3bbNZdmcAAWphVgB2pPr8XYoejBcP6sVX3akkRiz3K7KChqioiHZNoN9SCTMtsSE5n6vAY4jd2",
  "key11": "4kUyXBUHpdYGpxTnuFrd1GR9dPf3sVGvVLNHQapkU6SxnydFYbJENk9NsbhDQchocrQveXsVckgZNHemXDbEK8Bs",
  "key12": "3RpNDZiZP9qmnoD14BBX8BmZC5rpgXKFSNTTRZ6NV4SEvbytynVoNbw1XpzjAuUJp15MTafJ721szhvxueUNCNtn",
  "key13": "496YVjQrRvcPgQNx68y735u7YyDDGFPoRRoPR6VHHQgoSNyrPjaeydKvCgQALctdkzA7kKcd3mWEzW7qVJz4udom",
  "key14": "5gqM3k94d2Q3pbphRqzBpjgCTNXAMDXRp4WxssZwsqB4uFtDTHBLp9GW82JXvwMUcj4UuyGsQ4gqxXxXxLqreeu1",
  "key15": "2TZoJbRSjFnDuNqMSVbz9XSCCWMWYeMZ1j9B6JQ7U22v81LVF8CxCNPAPsi5LZTEQqzkZsvZ6954mWD6i7rXHvMj",
  "key16": "ns4LbhsMgyjBGE9F56wGPgAgjLB2X1otix66aJ1u5qMX4Yjv8TxffiUExPYwSFHyiCTetgLYkdPsxrUQWUNdmgx",
  "key17": "2TvYmfXbiwLR7EsuqApLDsj2LvV7r1ogi6rZuYHyhhuxGCxyEd4gBu5LGYbUHeApMqKRYibtMVkgBNuAdGzXJafv",
  "key18": "4CpmF9GEAn6daZG6uuogxvqTR3kxZCZkf1tkiTmtTaifgze8oZU4KVwTBwyQ96D1kJEfUuivJ2RYJuiGSpNt4Dgr",
  "key19": "G8BTb5MxS4X5Hyfby1qETdUq2MYZM8cCRo1wDJZtjPpfv98T56g2Rwp2x5kD714MRKgUu7QqGL2dXjB7BLecK7d",
  "key20": "5Jwg6Uqu5QkUXEN9YKUjq5qg8anmqQejzaxQymLQcgbfCcLUEvJ6FkMXnyYfRzZVHi8sMC7wLRGqApYVk95nVKGN",
  "key21": "2NoxHqhYWwDXAQJjfbmJP3zzXQaXnYnNMSBYR3a4hV8czAS3a7bqJnNmewr7UFhpNbkkCqhBE7KTjbHdPg5ab2KX",
  "key22": "GZAihaRfJgccJ3VyPqQ6He4sZHEXxt6Fb7PHtiU8aZZ8LmC75GfmeJYssgiP7z5HKg7cXS2sgvUrwo4VqxNs3gP",
  "key23": "4RqtYLaxXNFMWJU3Wy9LuT7wLLW1kJD8QRsMk3JnV7Mk6BHexxF9kupLVy2BkPFb8wawqEyyYpvxZEwWzjsqeKMg",
  "key24": "5hHyjCF8dAwc5eFiHNkqKLFABtnuM94evdiNwLTTDemXeySsDRLEUAnE4V7LrexjAJzXqYdiU6P1cSSoAzwupDkM",
  "key25": "3RnCaTShKi5aTrRwkKpsoiFkYdiqA1Dz3mZnYtNsmDXzaHCu1diUjm8YxEhysUGb9GtVxGZLEE3Wv9VnbJHxZ7kj",
  "key26": "2TANbmNgQvoZRf1AJQm2akc69ochRopsEBJP4GVypsEHYZ9CtrY6MQLwUt6uP6VGTbJGrckZSPe1xT22G9yxjNq",
  "key27": "5yjXtPskoWeT333hoigtgbAWYaUWeV9BpjCteEWZWiNpM9xmfxwxnLPjg7FZbZU6aqyjc6WuamgD4Fm63PEepssb",
  "key28": "2YqvCNxHTaoDkDR4ouR6crfqGxKjjBxdZdH4Atyn8HHiJqoakM1GJPv4gzqa5uPSbMzfmQu5MGM4xbst4W5VrKuv",
  "key29": "4rQ28YeFBrQBvPdeTkVyDF7PXUmgZ8HUmHcqzzLGaWpjW9B5wDNRPV3ChdqQVcVkDHYW7bSTKKDrzkcmvBsZGPVJ",
  "key30": "3adH4GLwoxejjHrkYx7VijjwYRvdBp9bUUceP8P9rrKTsAjYZUpizzGiJngfAhmhoEiJ5xQZU1j8TBwERHPFNZfb",
  "key31": "5eBQoZU2T6mHtDStWWgip26DhdR9UV2RHoPnik4w8z7BrBSBm6U5a6iKZtjsn8YuwyqvxvgDf7yuBgDdghgTFG7S",
  "key32": "XCDR5P3DiRTWCokwypQzUtJK7kcHF75EsfoGYi6fjaQKx1BJdfyRfDGdDmMXvARHacaNFMnPRvgkmijcjD32EYi",
  "key33": "3ysnxriTTF7YB55cP65sxVPLG6krjbd7DnbgCXNvJRrVKL86kRthaYFggCYuD4YHio6Jm2cMNnGr8S36YQkxsSKE",
  "key34": "5JYe7qUfhgcxTELb2nwVLqqP9bP3beqaUvaPJstUEYKqTz229vcdweMrx7RziR7g8FAfPaU7tArd88hrmqgRNDw2",
  "key35": "4UhgNDoQ5PbDB9oXhYCGGgNpQ1RtVfuYnxBMdx3wscVrx5GY16XC4GrEMwQJi68Lhf3pLbdY3Hy99FRpL7Xi4bvV",
  "key36": "42Xjh5aH6D2Jo2N4gjacUCaN38hA5ByD8MvJgd55mkiEiSfqTj4WJQbBRJb46RsM9x9w11Vzp1qxAfRMJNo9m493",
  "key37": "2fpbnunoN47reeqWkYtMwBadSK7j9Gznj2p1eZmGVNQykKYQkZpMSJYvscAcvTNBNjojjtJVtaJKpnK56Eb5p4DC",
  "key38": "4ZTN8AJwejzVEeHi2XwJxBgdHEcNM12obVM2jUWb6wSEHWSL44ryiQ6ouKLaKC8Hv8A6LHi3eFMiQgVySsyCSRpx",
  "key39": "4J1PytpLQs5aU4qYmKu6K8MZfVJvEw1w6UhvHvA5eu4FRGGaaLoxPWw8z7HifaZyi8GnakpA4vycY5WbRFtHfEgM",
  "key40": "5ZEzsDoq152xYrBGprU2PpcBoaY1oVrK4RZNX65dq67zS5CA5b6QAew2iwYhpn9zHEhwY4YTTHqu9TQkGeYUjbgY",
  "key41": "4PaCm5sAHHAayzKrPN7AdWh9kc2MLcSW9H6pzjwVLsuSAqj7zvQtJULisEnqXFZKAE4FHvpsw9bnoiLWmVRbRuWz",
  "key42": "42kpAiEeDdV1xZrwikraaJnBWwqJrq3uAGmVX6dCKWLQEcrX7fRfSRGy8dWMH6uJNbP9aLEnBjsbfKhiW5jEZBsx"
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
