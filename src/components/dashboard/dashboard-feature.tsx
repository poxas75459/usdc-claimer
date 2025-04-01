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
    "57mukiLPxGv7USk8F5S57Ay8b3aRYL93Dyidve5ieANYyC7gocstSfwox3XgWjYyrFsnZRCiHbSVHCRGVRoXRgzQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Hmu1dmZBA7GM7UacuwKQmPTsb8iw5zH1MERn46jUcDYbnYgffZVLF77rHh15c2TiDm3xrv8YmxsAZ9AFqWxD6HG",
  "key1": "QSnBcdAWVHP9oBpdw8FRe5HUkJnKKSpSz47oRiiiR85Bqn8y5LE14t3GKKk7CWVCTByXXkNs7uFmG4wUUFE9GCS",
  "key2": "51JzxYvW4evAgx8ui1r3tUQsZMujcunbULmHtm46DTToUYGtmDDU8p8y1eTrKgYDZy9G9GsrS4kM6C5rwhuFAuZA",
  "key3": "4eBQ8F4sQ1mgUs73h781tychLwwVVZnwt9c83qQkmEJ9mUEzDipAitu6amq9dPh2GCyNUnGR9VRRGD74JgMyXmKz",
  "key4": "4UhiA3gfumh1CzbYzdZ7qg4dLHRagXG1WdjY3fwGej8swJTYBZEcPp5PEaCNLnEcU64o926RNFh93g4WXqh8fqu3",
  "key5": "RbFiCFirhBDyx6J9Xi6e3bChoy9i4EbY3UzM9uUAprHXdrCpVfs1NAqAAah1jAjq3VkjKm9qnA4e3YUYB4Y4YK2",
  "key6": "54EBsqw3jKGL7DYjv5LrQwfByv3Xhb4v3TnotU7HPFSbYr1Wryv5v6yPAgY2zBDkRxCbXQVuDWTfHAiWiVDdKvKD",
  "key7": "4V7WvoDdBaDc6vobA4CxkvUE5Pdo9YHJgKJnCMji1sBcEJPSzkBdPewN7iMvDTqSbNCsPBtjHeXxMWa6U43ABeDM",
  "key8": "9GHj3RPZSnBrUEePBEAWWj5fEF5vnofcaxc1C4fdYHtiMSBt1Brdw4bfosEWxHYGg9S3FRgiiHZdhzVpqwe3HY7",
  "key9": "jaLCK4bygeKgHGcTot5W9TVeGp1MLZAqoKK4KKj1MynXT1tGbpsyseLT6tkVutCUTpjKBKUoCrrp8HYK9sTFWDW",
  "key10": "3Yb5vPBw7m3zVAaQuDmUgAhWFeX9XgPfEsEjDTKnwuvkLTdTod3UoQkka9bdZsnKG1MgURpLcRSyvpRPuRV7QoaE",
  "key11": "5b3BFQfNkkttGvArooQUztXZr1GPhwUnHu9hVJJJ97m998FWp7LUicEzw5rYFKhcFGqEbmTN42cMaYp3Y14Vfb9x",
  "key12": "2YdaNnQXV21BYL3AtnR6dgcbzMtEbE2RsjoTCdxEha6ML7AD1YsUawwZ5CbqR1UGRbfy2va6DJBfSe8AFrp4NzBm",
  "key13": "311qAEEkr7NaTF6tSvxFcmXwGYMAt8fBpkfWpNH22zKgRAqejEfz1bqkYa2V5bNe47rSrqVXtSBgQD6JqrzmE5Ji",
  "key14": "4LeEAuWxesG1iXXLfMXzRRcQEr835kXxCnihEEUHYFNj8Eyyr59Qk2WSRV4qXjjopSt8XvW2mbCLi25gWHabafSk",
  "key15": "4EHKvPUDGyUWfkNAdLBGNqaByFJtCFmEM35oQaynUHsLSoEj4ZbevjBzt4657DfkTcFQbTxte6xcfRV9Lg2soFcW",
  "key16": "5oCfeVaYTRShGNu1sphHLtP9paP2fS9AUbPiMkN2huThJq8pkpWUEQyC8frJ4o7tnYbf1L7vUHvrP7LoYXYJ8nBM",
  "key17": "533zaC9VF8m8N2hv6ufENNAeqyT1Sut9YS9MK3eY7RnKgyqXd3Sqymb692gwoTxvKCGKm2c4vnG6BSWHmP4PMdB8",
  "key18": "4JvXMJp5a8h6rXEdMxBFPGmJsiywuhZx5dYLeXfrvjFY8yaN64z5UrEWAip1vDEwDKEfmJCunzABBcCeTitSZfZF",
  "key19": "6H1wai3Z9kfzW4E9pUP3hm8559yNJUxvtZ3k6pcPs8NL1EVUE8AeA5QLEMc6QuXoTUnuY35MPcuRgXCTGqgBVG4",
  "key20": "5Z5H1ba4SPn7fcgGELiL21bjLxYvP7zKy7fweXxczjYtJBqHqVJxxFKui2YrWQXo4WzMbREv9Vfc3goiyQGxHG5u",
  "key21": "2qCDBVUTomkfbrKWbQHrjvEqt6wj2NPFWo6RZTWkJHtqohdjEYTRPCo1L6uqDAzQXiGj41VXX2UdxMpDvoYRNj6u",
  "key22": "5hjEh3QGUmK8vyezv3RBezDV3uQhTf26nyBhysYnxNCa2eJH5QeU6FbPdZfEDtoTroR9sirS4kaQsfBVZGLyNpMH",
  "key23": "nS6gwxLbhhAycUbwMaPbpHRpykWGH8yinMXSvi8weEw9WnhZD6DaNxoDDdEwTDWwU4phZrsbzo8ov2ayC5c6Rns",
  "key24": "4b1Rb4nVt3x2w7YEf8j7ZNFEox4PFUhMj4aGuCvAouujQ6LwYRmjs1xruNnwnyToUMfaQ5AsCnTgkaEgKCt4fLLj",
  "key25": "4aeRG4fcBVQnKjsuBUY3VT5xFyQRP2P7wY3YmSbrGLscbxjFyRNKBrxvPy1EjSRvaTYK5Qsp5E1UT9fhKiEqeEHn",
  "key26": "2dkERuqhgpZKsmw81AGKB7m7s9R3D18SxBzY5FmMYbk8s3Mvwuif8F8Ghbr7wWPNgcwQ6ek8itr6pZXdGASg1hVw",
  "key27": "2rLd2BMBDuAb5VNktKkxKXSAuXgA4dtEsLrhuCcmzfFQQAr6Va7D8QWyHdkUrFU1FMD1ZppbntptHxRVmsnzgoje",
  "key28": "3A1KG4YXSp8ofybhrPpSukxqQzrRKFAEqb61m4oqNZevtuHKVH6MkxZqF98xo3ux87u515ckL5F1Ju2Wd3JmbhRE",
  "key29": "4sBVGGSAX5tvJ6aABC5c4WETc8BB7CZHVedeYas2RrKDGw4gba96ALzEfanq4u7CDpk8AxoP2Lj8xrfRnTDNmvW2",
  "key30": "3aESn8FwWrzKK7DSTKrTTu2zt94fwxyXKiABfJJtvJHYQLiPFLucJdXtrrhw7Tf3JQo7sePfHNMf6nj49cpEBaZr",
  "key31": "27YgZTAsTUSbaj6WFBh1YxpLKmG5kWwWiUdt7UhRpqHr3QzZ4XzACLGKAr5xybiD4Mfj5YSpEhAaBurgySrGy9sk",
  "key32": "54VTCRW9Zfvm29Kxy5rJZiYqtJzC81eLQdHvLJB9pLBKz6PemNTmXrCCLebfXxXnQ49Y7ZKhUoTPPArtM3Eed9zC",
  "key33": "3GBnFZCU9ZfjvJfr8aT8Uqusd4DLAWxrheKXMtYUaxuLNDzpiC8tzTronWTPFM5SUgkpRYcDPP3wWzP9mCJFbxX3",
  "key34": "54FGEns74jghdbYuvsToK1G2yMzsb8G9A3aumhmXQEyoGuNbHMP2EZbmJj4X4ZJnz4GYMXf7JJiAHX5uizUrzbrF",
  "key35": "2ukkPCYSmjgSeV7rtGc6jaT6BGXkVNutaNJBbCVobitqqcusvh6ygKrajAXVqok6NoiEkzj5F1ekLntVcoUVC6kh",
  "key36": "2tND5kqSbAAN8vJY3gh35XqLSaP2pRHcyijQbTxdknaUmh2BG85iMJV2GCmH1P9fhLGwbqes33kWEyiMKSFfzkuN",
  "key37": "2P3xJeA5PbDmVpti8bVhY3izrxLk5N34shmFNHHCaQejcKxu1hxN2UXopxRWW7ZvbX6qqFH2JAqp7XQBZazFHdrM",
  "key38": "3VNTkJo4L3pmpapZp9a9dGvwD2qQFpiharvN9caT9NYUFpbW9c2UwoqXSYCLFL4bvr6N2PQt4BaYvhSYBys18At",
  "key39": "Eu59VQBurD36BG5C5VMtRGqmmWr6GhpdmPcQCu8wqTxyHsyd9bH54La5MeDCGPqXrqzKwqaaTHe4A6yxJcFmicc",
  "key40": "39imEG2zMTzzdLJveRad2XjsjmYCctbLy25Xr9cuRLGa7tmyB47AdVXF2HXswZUPdr1VPRFR9w7h1wBvmRGKGvmB",
  "key41": "m6LKAE3ZFLE57AXy8uQcCeb2uzNEhbRwhw1RfQPrDtopxNEnaHRiYEBGoxCSfqTDDuext2TDrxbGcBPLvq1A6RW",
  "key42": "4qorYVemzg4MQkxymUjH4qH233UsFvCFAfSDMtRBLey8LVvezxLEu1GHfNT9LERMJfXMo7c1G7vyMHzez3oor1zG",
  "key43": "5oY6hSSnMmfv5KSV68E3GuC11Vz2zidmogeCeVEC5jhuWFQz6UmC7yZjEBbh4WZR51qBZayH1vPjbq3eTBpUNbEU",
  "key44": "54ZjoVVyKD3UEQKSXguZ21uE2w2A8D5uxd84w9feboi6k9SdPzN3133JvJAsRsuscHRd2fBz1fpBtkoQYkrjkNG2",
  "key45": "2Zeop5ouw9hgEnikVzf4kmA3PyboQeGkmWVy1XpxQingeErbxPNgsN1bfM7JdNbJJ1eHnmYzQw22K1moMwG4dpEq",
  "key46": "5ATCJDxo51BegsTKh8e3Zog9BzedRH6rrrxkapuYDMnTkgZAWFTpY9QSqkUCRAmviu1QSPnp2v9gSNNTSTTXia1m",
  "key47": "3h9xXuZsuM5dacbDJ8Bzt5PCvA6m9Uf2WTcpVE4YgFostAAkKmRLiZRck5FdFKC6VP879sM212yqZBpzX3KZrV7d",
  "key48": "23ComAcpnxXoFoMZSccvuBmYGdEW8YdfYtB15J5rDAzqMSHU1n69R4ZEn7LRVyqReDvp7cRHBHJJViRx9zG2ASYA",
  "key49": "C8h2kLnSVeKPQNfDQuCVPWr1z5qEiwnkxi3wT5vCdkwdNUdHQSVoQbYUHb4zjHgD6LxxUEYccmTZRBXcF9LX251"
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
