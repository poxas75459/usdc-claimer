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
    "4xi9GsBj2vRvaVZiLoBgm9LtniNVWQbdJU16SBYzi6zjuG3NeLio1pkirs3uzu7nb4qTkKvL261oncYGYW2ZfEyK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5A3LMojm4cXWtxG8C6VDNyUSU87UeKdC9B4t1tDdd7SAQ3ySu4bBmvBi4WsbTcgrgkVE93KdEVhtqXweeXoHbwzN",
  "key1": "3vnX9Ra85wGFs4dQucGGR93XhiNWJvZsTNaKAtzp4iejm9ApNWDLaxTCQWXFSd4PUoAMQ9T6wzsmXKGVSUsZNW6n",
  "key2": "3qFmikSZhaYxHuyVxLfT9wQV9vbuYHSczvZYSLcmJ7z8HH8QFvKfp6CfPAATrJ9uuWs8XjpaNiGkoEcMNVgQS2Bc",
  "key3": "3w6uhyDayjdpcksqdjC4tnHYXjHGp388pBzfyY78hFSZkrMvD5Fkj1HnugUFNvshiMZBpxeAS22CKAXcyAg6NXL4",
  "key4": "3uGCYfCFfBPrEdgoYzKAsWE3bjnsrezGgFrJR8bf8og8fnfawxBLC5MReCYwtMWn34GsAWTJToASsWThu5EUykbN",
  "key5": "559Af7yfEuCqbGY3Em6ogRNUnRjRGwkdwAqr8nkHZZFE55jhsASFbu99k8wf8oR7VPVEjpNrEwGTb89MwQfNNcMM",
  "key6": "5TYadCTAS4e1BLTJfSawJpQJM1P26kGwvgww5RP2Y4yvBGk4HmUBEbgQWRcjeRSB1AcK9eSRjxv2VpNF1rFKrki3",
  "key7": "4DrXd9e5xGSEYCYP8VyrdCtejUHjqXcj27LtvUBHRQ6Rey4bCrpae44aZuc5hvkEXNArQbMrsR1xU81GYtGeHTq2",
  "key8": "5FV6hq7WNR6eic9wNTdCUqAh3Af8LCYKESRkRGSEN2tzhSsq65omzet9rXM7tnggVwzEYJWzZW3AtwXZngTovwLE",
  "key9": "BVCaQR51NT4rHuHFST53MpLiA5wz3TkozbEYBm416EWLVEb71r1TQSUv1umKwzKt6hwwBP3fD6Hq1ZpGxXvFPAe",
  "key10": "5JPAYtrRovWnfQjmQ7dv7msSgJFHBnZtAikmHC7rmWD5qHqynU6wgsRFwkxtnJbVf1cS6wivMqTN4C3UCicffQ36",
  "key11": "2KNKb7iH2cUrmk6fM2FvQKhCoQ8KGoboGroKHMsYKpvnXpCS8R3uuoqDz4LcxjhbvP4T8WxEaKErqw7zqMmZUSpR",
  "key12": "3ozbRPdZ9suNbsv2eZWK7ptXwhVL2jH1c6yakWaLpvuKdChCQ1VCkmj7rFbJLcfKoQeLwhMx9vaff5FpRtfVeVHK",
  "key13": "2jk8fM3Cpzmc3JcJ5xocBBdojFsHYjhx8yQ7y2cw5KvqyHKHDDjUKwadEx7kifXWUyDBakHdWHXnerDQmDaaWRLJ",
  "key14": "fQ51B9YEf2F4c6MrXoyFZv4vxDdmorFE5xwFDHEgZ3DdRF4k8K9kcg7idHXi7YuXWiJLAqnimpNdmi4pUFtfLBJ",
  "key15": "3AH19W3HoJKwtUGHVFhtegECnsgRaum4GLp2RgZSNrgXUxWe9owxKA4xpBDUUBjhRQXEteUVJU6jgJJEa22Wy5Zg",
  "key16": "34gk68jJk7CrKeGFe7YhFcdSo5m9hDfVtzS7AVdV2REPAMdM4Fuz4Ehs6GjuwCvASdog9eR9ogJRCmDAR8MQ6a9b",
  "key17": "4VtXLE6wCrqExS3ipUib36Zqyy7stZDNE65F8RdBY5ph9FKyCrviWybDdorhY8cFCBgRyfFtRSZRYmSYt6GBGq2K",
  "key18": "hVrDL37HkkpzjywWTkQT41GEb4uJ6LqXfdwtrSX9sdThfQQL6TjpRbfZyMJtCATiuDRA7xD3wjuGm9WZr7hcEm9",
  "key19": "5ejFaFmTWSFqxnDBiXP5q9orhmmhHm9PRqZwz5xnycA245ucXCnquDn666weD1B8qKne7GLzNS77LduxejTbZ5Jz",
  "key20": "588LzqGSg1bzFZST6myvrvny5nTVZHxGDYke9e6A6reso9mmDTDpkLV43UcsPvmL55DpNYufzQVm1w8hoKG1PoH",
  "key21": "2T1jpggU1RvKt9UJM8PTkkRCSWRbWq1wf2BEmew3k8EjwuF7QTi8FnyVeCiaV5x1e1TW7x8dTdEvfbkNGHijqYyj",
  "key22": "3wiYbfMqKk4ri358zD5P3KC3rDvBsTDJEm5i2d5N9ih2NqU4cjnazqxbeVuBLbd6s3Uzi2GXotpG7Y9oZVr78SgH",
  "key23": "2AxEN6SPJpYdqFcYm3Rw2CxHUJ1gCHkEuHY9Fc1us9QW3iN6TjFdt1wScLVuGkXT3xL2MJqxdK59QcnjB2oqh7Y",
  "key24": "5T6PNjwTQ2SuiZaXk9quPVwmVbuNv4uV99nxodZXw4WMKE49bU9HLRsQmZajvHLtQzHFAhEXEYFbHodihDbeszqk",
  "key25": "56wyFJdACQbNWgdHW1KrttajuW2Mqy2HCVXGKf6zposqvaxLbGeF6rAquvfAPpmkdLYym55iQwUF2ghrqTbYXnda",
  "key26": "5ZM4NqszfCwFYZK6XxAiLpXEBYCKyHVcweFzjyEVgkyEf1ZXnkPznKXJW5YaVy7dQABby3DzZ53LyYeaF8S7Xxxe",
  "key27": "5khEAuzGmk37WfYLsBux1po1Czph5SXLJx2TWiw1kM8V7TCGZtXV4WvwqHptpwBLuBmrgzyWphNoLaYkbNz56j9M",
  "key28": "5ybJiJYiF33xUras9jideYNz73RZriyw6D5gEUpcEosWdTba95hdd6awQkXSjPubPr7VhLg3wMDrbQpKwn5BRP8V",
  "key29": "5uGrnjVVS1MdBGgZ3V5Pqx68tBrcMsybG6of5Vp6o8zSSkFjrvDM28EstBJSyy7VSw5kvB1QbYxH2NTNyKw7Gmgs",
  "key30": "QqPY3rZVvJMcDxyP3K6UmLWsET2XMUvTNy1rsxK8R1zyJ4GTFhs1x7imcZNWckFd7ZoG6Z57xzv7L4DbVMSgJsi",
  "key31": "r1XesMJaGXGUiBtC8tmaz6xdtVRxW8WFcMfLrMBf2N5akMoVLdjXvWTu9NJ7jiLaxxe5Tza5rbGhTJAxMwa7XLq",
  "key32": "3KbdUaasm1QWZmp1r3g9H9qNMzo8dtoLQX2bvtXNF6p6vGdgwyMn4WJ3U9Yw7xWDK5BNhwySBrRRbTFqqbcdMuBQ",
  "key33": "2EkwXzut83kWG3zmLcsXEwAekFhps7LFHD84xYoDyL9MaZCYswkxnQEDYQgXkPufSNMzM4LXn8YSmSs8bf8R1ZV6",
  "key34": "2aKz3ioYehgJ71nRBVowg3j89afWc7ZgsATD6BDizKLTbtXXixWpo1oKpvZmysHMMuFtmyqhiynE6zmJpNbxaA29",
  "key35": "3tSNmWiZHUWSuP9fuGay45au4QsGCX6qqHj6qnFCpYzTKnTf5GNxk3NLUTxkLJwPCEeFD2tEBWW7qurasfgmJaov",
  "key36": "4a6NypJu62po44wCiTNQtmMmri1SfPVNWoJDvdGxzgScN738a57YQx661wFmz3J94rjYxsZCPbe5aPeWbPZpLmYc",
  "key37": "4bZx35LaYbYK74h5H5N37kX9SyRp73j9BjhTM36qQ6iW9bsz2erpuh63EUWBU5Cr1VfCL4Hf1Wv3n6wTaeUZn9AY",
  "key38": "2Kpq5tR2po171aP2YAzRZiLme6Fi5mSHz2CefSLZ6YWD5JWVE4D7RkJjfwY3GnhghEhapCNFmMEpjVNP9zF5z79v",
  "key39": "3LwGjyzGBpRfzmakAxxT4Uv37qYomAJN8pHwcSLCa4aNQBrz8GHuk8Btj3rYJcGYXVzmiAaPuhYr9Zqicusb5DNU",
  "key40": "sWjJfffDJ2xGvHkUtaguEASrJ2wrWg8HpfEWNPGBsTXwuuhQmFN2ZbE8u9qVtMxp6MhNXikVUvAotvKA4N8cyn7",
  "key41": "3TvrWbtBDSMUcQ5dwvzoF1vqTqLc39ADUZpRsGD1s8h7ifNJqYUk2PZGCz3b4HPa2SjkZtMW1xPG3BFpPwfaGvtk",
  "key42": "3qvycJPfpLRggB79aHgHpFRmhP9GnpdBsvzyhTw7fQpumqFHpWR421xm2c63CiyrYqiUa2Ns36gfqfX54vpTSoT8",
  "key43": "59AovUni5C6Brzde6sTSZmdUSFn1UYK7CMv35tijURx3jUALFd9HLwzieo7qZSwSsdCRmyPEA3cVDrhG9NxDXh2Y",
  "key44": "3KKSTagJ75Pqd4EZwfrLcyqXSbvyyhfmyFY5mhi8aP99RXFMr8qQZpdYQAxUFSehFysy7o98k9BxiasNf2x9Vtds",
  "key45": "2TJEjGcLCMvA4CEqnMs6x6YWNaMGAE9PJJbFXzxH7quS1i2bd33LVi6pECHa1CsuePFGvAQ5b8MTDz3SVejiF8j5",
  "key46": "37VaYadeCpAY7ZQiBTa7hH79pmriLrS3iNv8mFRCmf7rFhf5hcCWXhLfpoCyNZ1jHZZh5XCf2KsjhzBvCAp6SYdv",
  "key47": "XoinRxMkoNxAYJ67KPLxGqUy8SHJfudB3Qh63y5DzWc2kp8jmgZomd91hbF7u2Jt8XcdqvCHAniFTSZVTPbH1zy",
  "key48": "51UpyVsWYoxL9XuqTzWGaMR6pNaP8SxgzUUVwVNbcqX3eNMYdkiGUXcrSYp5V7ema7SJGHTouf6sLKCWdRo7JnQj",
  "key49": "273cQoE9ghV6Sht5o5z1n9oxWB6jjWRRqMSHLwiDMcuYLdu1qHpWA3j1NgX25LroNnQNUBJ88wYUiAPskYiHkZEB"
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
