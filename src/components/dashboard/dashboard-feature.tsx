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
    "hkRYjdD9YubDgydNYmKVSPfUVpqfDB47fYKuDxk3aG9RWzqg1uVN7C9KwHietNi6nqSZwH89U7pwcsHFeyuPrfi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "64QJt46ZX6Yn63dNg5YNh1UgSCF6cYYFnGfRZgjw8kAtvJ2patqpwzUWfHCAoPmQVqo3uNy3TdMz3mPs9DMM1zu1",
  "key1": "5ogVVeQQPHsxNuwRsKHuRkUHUfQeruqUKbEePxpwpZp8J7Fj87474z6rD5xYFPPK6v1SVPyCA4SMDbMPwFCayyf9",
  "key2": "NWq7ecTSrrWNZJPfqLf6WGCHBXGzWvc35Dv6YmdYQpyjHtsGaYo9izizrKhuzRdvESmbm26SpH6N6Qegj1aRs6s",
  "key3": "4qX2nAYjRYdAfXJyXtBbW6f9cJ98Le5hovzrTANzJsvNZXDhq3SD2RFRmJ38m3iWNf53YhfEusPM1MQ7q4Tqy2iu",
  "key4": "7HZA8NX9DjLmsk5KcaoVerh2tVATp4Viw2XXVTaf2VhbbR5Rptd3tE6jHSpDyLHp5des3CtAYg6zHWiFvu75Jzj",
  "key5": "3CvcCFmyzaxotPPhptQddLGWbF5TyPd7MAb6qFme2QnVYJKw5qWTg8AX5sUoEVtxn2HXsvSzgisTfCkSauA1LfgC",
  "key6": "4uahKsoUwy7JZCWejhZAc5WnVuqRArz6X8mT85YbiP3MQw4kYkeyL63WnNAHLa5QP2FmTcLZ2BwbsQPPVQ939Udi",
  "key7": "3xZUWY9ryhNR4sBdsf4Ea9KoataJbfhtWUjtnZ52fH2phsWNsV6vKdwEAkMzL46pyU8TmtRFYTK56VcS9necDRQb",
  "key8": "5VXeHNNrqTqnL5VcXU7MrNcGpJUGS3Cx8Jbm6vmaT4TdvP8RDzRm3P6wDVp1yKQz5szAW2Kw9T9ch9g4P3LrcTyJ",
  "key9": "s5XzSoBaNVkwgNjscR6HiQNqNRyz1KsxtKHPKDY6GHj4qRuqwuJV94KPUDtPtUBr4uxNWiQxbHW7St1Cn1MzSH4",
  "key10": "2j2JeEcXw1hgxMPchtu5xy4EbzjgQSEMWSkh3SuMAowWRzGbjWQnEE6Ftar4VGGsJCur89e5xkc35wCfGdySpaKu",
  "key11": "5Pf6svgsjirpCLXhqkFoj86CGBNCjN1y8ogyJm92jHR6ymeyWKxGAHaUnkChrzh5uu1rQMB25xPJEykHUiJQJBPv",
  "key12": "3jnjCJA9hcw4cAGdpmG4x5X3A4w4vspA9RkGXid4ZyVEqevW2FYjiqjV8WbUywz4wGnpJvfebxrem6u4bKSdcBCt",
  "key13": "3q6TZyLz5DUWyLyfvS7bDYq4PdxYff4rHQMDuC8qt6p3CYiDgR7NPBvHKgGAEFDWuW2Mz2324nmmhsnAUPut4VLc",
  "key14": "4cZxytPm4WkCjxcqCXSea61BBZuuV3Bt1EiSJaXmao1uedvLQZk7MuEw5Rc2xSBGnyh1faJZuPjmdXyrhG4UZQGH",
  "key15": "3RqeL8oE2yrU2511bhmiGMxjc2YF8cZcyBMco4jSJZHA1XhWk8MBVnEDsoHaZ3HyRn2judURADFvuroWPnn9aC5N",
  "key16": "3QkcVt3opRshFn5M4LnA8G8nTCj9aM6rboSEMVPAd3dXHrdCAtgQUnpckpcuvAWEkJBgmoLUKtWw8yVbRjG4s5ER",
  "key17": "5sY7CmKYFCctekYbb7oZRzHaYeZBRzWGazJx3siMwf9pfYPHHGfXdmG2tebffGD54tS6fwSkRDvmApfnGiG7Emu",
  "key18": "71F2xZuB9qPskUeDB4Yz7Wa95Qv8sbpWuEjbM7kMJ1r5HZYtT6u3yKzQ8m1cmku4AVTN3q8Xoer8HsE6mRTaozd",
  "key19": "57JXkkbijY3HebFmo5b3FyBRxTdmMooyCi2CQEzDvKb2inPER1t1rEx9i6cHgZKtVVTJ5sGxZWsT6FHTZzpaNAFv",
  "key20": "2QPgzH8VoqqtyqdypPENm5LJrkMajUo4HaB7B4KHNKxqBpeUJzSbEejBNFR2HSPocmG6EPxtrS9pY8qPbS7PLAzs",
  "key21": "4jeJZEnGcaoM82StmiGfcNbxcHUjNUJZqGn6DJxoqMUi9TBvXCWBSQguo5owAeMjcraWFqZ6xDRymuy4Z7zB5Xea",
  "key22": "4pgnFRJhkeRVxwGfst5YtNYK8AYnJCAV4v19EmUPCFkgyuYFGX4uUHSnnmK9YHhcBCHtFFswGM3RVyFt8uZ3Hppe",
  "key23": "58yPcwZDCNfN7U1Fm2sd8mBit1JGZ6kB3Jq3PCdHGQ3hnMKRoazj24qqo5x2KLesk24U7xbitSK28VG52DJWBgwR",
  "key24": "5vYZLRNMtX5uMEgwiynrJds7GikPx1vNUmL6RU8rZ9JU2bA13QZhdQyoSEfbhqganwCfgdPpgiPCqAsZmPCBzrAs",
  "key25": "4K9UUmovD6tUeHYotsTJcSHc3kNGRZpgA6qKWEwCCJ3WGdHNXysiMF9hesZBfJH2HmXapnhPBbb5foxQjX7fg5Pr",
  "key26": "45ttLJo7iE7x2LGPANnxV84ZjC1Zqf1zYKsfCav2DJ2JnyVUTgVvHuDsCvf8fr89HePnw7baKyCTt3N6zmuZQS9t",
  "key27": "grKn4aPHzxUZbTfBgzG8tga2kqRayxN6DdbRxBvkry5bWTW4EuVMm4RtYTSMshYi9JNjZwyr4rFYzR1mPRTXdwy",
  "key28": "53uUBGctZYWPH3X8LGw8yDzW2CF3VzBudy2xd9yWsMwV2TrCph6DAgaCAr8VQNAX4oDMf5H5uf9hMt3tsakaN1jX",
  "key29": "9xuGe6bkQDhi4GARpwRHKTV2HBsxzPbTeYkfVgYiCzeHcE18zY3jcc2PshFs7UoZeY5GUQcyGQXdvBFWbCodUvj",
  "key30": "3rGbgQEn8ZrHfpRALj17bTFqbHAFkTot7KeYbbXnsz9iddoPhB3mG3s2Dj6iMajJCd6u6JKo5qL1i95rmHa8VU5a",
  "key31": "HRKRoxzBahJLW5cE5pAGE8CABAQAbaQstuW38BYVY4tBwfikzgFDE772gQhUyHq3PY2oUJvB9H6Wkn35jpSyQDh",
  "key32": "5bDQMcy4ZHoHtjTRPv1HMFELFoSmTfmp6zG5yhfuvB9twdpSrmSeYwY1rTDj8u93AsJgiZJPQnKtBRbqP3ZkcK3m",
  "key33": "kD6KpXxJkzZV2Ee8ohwNCeJtdWuP4mRaUt3XSJVF8c5q5UqosCQrSTT5T23T6HtE2EEEtUdriqLfveYX7FVdsTM",
  "key34": "2eATedkbiTSPXnD2nXoYPsjArgMZU8JH8jffhZRb4uXtVfWqda35ptxLmzPmYLwkYW3PKjXyccofsmwo74t9n7wP",
  "key35": "3QVhxHP7kmRL9LgVDt5GCFWy8Nh6xigTtqiF9XPY9K8qWu1gjMKERvR3UAADgQUWRKg5SG9sekKNqDEQ9q6Z4rM4",
  "key36": "4mw9UNEBe8xMBoBW3d45U47xcPaoj6DHhanQuteFxxUuPGyShg9J2wkt8Gp5F8pWmm8mpkRDoLc2J3GTftR2n62U",
  "key37": "yMDzrEs859kvHSNHUdW5VHojHzxKRVp2GbMTB8kBPAAiw63hNWZYXEdqsAYmKE88sPoEhHGUqzzYLV6LGnbYHgn",
  "key38": "4VGCncHQur9vAmex2VZ99HntBRAVQtrw8J6yaPFeUzr4Pkb9vqgPTRknm4xCwxgz9WA4cvd27WUEsUFStWdyYtrZ",
  "key39": "3xjVz8a65izFA2cU51iPk92VdnygSxg4YjTt6ufXBVyBihd3qjkcsWQCke8Q9FyAcGhDVwJMpZ2J7KkCj2fkwUET",
  "key40": "4MYT154dt8BEkL49CPYdHFCHrwWNT3APa6DPzsd68MuE5BYB1zP4fckjHM3FRZsk76S8HfEoDUjzcURoMxUh59fY"
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
