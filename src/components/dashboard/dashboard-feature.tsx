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
    "5njDYfjSYL4w8uXVMJeCibr4YgFU9WRzCeW4KDSiWWZUZsQ4s3Thuse2qWpBixHdoDgMQuYyhH3LivHE1Sb7Kzze"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5riQnwJ2sWCgQ1ZQE2z1agZ9vxb1cjMaiiBRmgJpi3h2m5EE9GJzZQdaTpmtsikRNnmYVYqXdM2x8hLd9edAR8vn",
  "key1": "2nhhpFDQs1tqqQmU18jQkebHemu8tXhKg8oqgjeHpgELFSsZi9K1RdW2Rswfy1UiL2tdcxprQehMmrF3Spvt4DDd",
  "key2": "2AvUBPsxrLEhZW6HGonxgGQzAwHaBadyeK7hCxgB6SVHhoxCht9xodPAmVVzDjqtQcYp9e99WFhAAU98AKsf1FEe",
  "key3": "4XDT3v5d1hp7LLciUM6LoenvJrn2M3QEKyinVMq8cfGQ2Xi7JQSQ4aLpbuRCETT8pDa31ZFdHNv8C4JJYtfnz3Rg",
  "key4": "4XfEjY8LnxMgpWaErNRjvUuba5QEA68xQxfJo3NBuVd5Vd213VxgHagjz8616XJnyZTKcRpTcdRgC2oEeej43ZGM",
  "key5": "5F3hgjZC6BRjZgw4ptGBhQtMc2rbYQ5gtvs6f9wLf5nJz5fCGz3MJCzFLgfoRQhLP5hCzbEvKWCZNbC2JiHCm9GU",
  "key6": "3nYW1Uu927ky3zRtqZ1sK69HUxzgQvMzuPcGpBHbDazWARAYKUqjB6zwcDWpg4vPWqZKqKsC2YaNytkdQRn5YXmj",
  "key7": "2aATYAuniGFs63QDGMcdMWz1HKJiNyv9D9cVxZApY4uWj7gG9NzgvL15R9Xaguw3iGfiWXL6rT27KfmtUUzkhdAd",
  "key8": "3CwiiDy9jYWP3sEkwDh6uYq75wysVUYVqcCdRAsf8r2u8VWrMp9iUCk4bDse6ZjGpWsNoGXbSuu5yRXyxTLqcLQS",
  "key9": "4z4jwkuhWfiZgttRfHUSpaTbv8jfTr76DAZHQFk6C1thq6FkdeZfYomq7iCTdx7xsvwdrnFq2rixwNAssALwWuPg",
  "key10": "2M2CC46U5RYyaM37MwJLTfbbYrVM7wA9uDRDYReZ4V2W1sXjjXdvpCVWZyfzPDcvP9PvJtfT7WsDvobPGrsi9Aea",
  "key11": "5Gsso1SdEYiZpSVHwPBaDo8KUMi6nv26FbehaZpLJzUoQJ4JrPUi1DDy7SsMcvZmzeL425D5RpmUNHY5AGNPvgB5",
  "key12": "3upeupNokT9mETfsy1TXtAbqh6Qr53QdiLCf86Cogz2Me2GCqPQPHHuS8ZdYjDCyQ7y6CkXvY4svjngr1QaS2pW5",
  "key13": "5tj3fNSjFnY7kGKQREf7Sow7bg6BFAUyEjZZYKUaPEPe2kaVbymEzhGrdBRwn522nwSHtFPWwHcWKT4H4PiHBScH",
  "key14": "K9h3aS1JjQQGxL8D9b6Ti1PQVjA9J72SY7drmc13SNsTc3kELyZEQ6gEtE7t3BvsDKnh2qtjC3GQK3mwUDdbNgz",
  "key15": "JvZw48bidj1uU493M2PvQ6yiXQCjnYsRESeZbgqqEuXMnZZvnZnffn8MjxfxwJgGXomg7x1EKcpetzPFVJxo5XR",
  "key16": "51tE2TbjTKLBdXwRjDCsXagBBMiSnRsK6HguPoM31Bd6jjiXWYujHCujcW2Kf1WqEX9mfUDwvAn4g7rjSxKdzfqf",
  "key17": "zAd8diyiWYwDamQTyY9retp7n6bERGZzcXycDsDYCNcLBB1y2UXt63MxDGWQmuQWcQXxAssRH33hDkigevXXLFs",
  "key18": "5kztcegEixCsPJ5KCXEZjAZzYRf7G8hmo5afJHvu1deYCnuor6TVFcu4G8qbYMJsccqtLZtfkcqQQEiMARCqjWYN",
  "key19": "34VuBwRRYZzQM8dH2cWseHzmSxT7fiZ29GAvHd1FXPcZHaT8jQw3S3jGe6GsNfZtDUErJg1LmaeTcYhGuJsxrsLf",
  "key20": "PzgAJxKV8qdbSLVKuEDHQE6i67VvEWMW2sA9R3TRcNos6sym3nXrLmjEnD7XaASU2xCvRHJYZQPyyYJ2D9JPn36",
  "key21": "VybYgYXkngR9RuHLxqyU61ccQSt8pDrF73zTWyaZspqvQpNFHHCygjwKTpbPYn4AnxyKpB1LZKDwkFai7Mq9Zxc",
  "key22": "3qQ7XeJQgpSixNg3ZtBw87EkGo3zM3VazxAFZXAW6Fp5JVNuaccjy88LKAGmtDjPS2taooywZiaGaNTJjbGZg2aB",
  "key23": "4J7x6AnDbahqKmTHF785bHkMsGKv5xNNGLBCov9gjf6UjsjysQtbYahjjog3cwAsRrmuVPDr9PWLL5Vm7cKNp8BP",
  "key24": "67PryYLmqVRUrfoAntC6LeU5Hb62GfqG6HgK43DqKcvR8hsz4pNykjBMsuSEh3bePZnK1MHTxj5JBcrbW3g9Jpqv",
  "key25": "3aUSiosqQk4WycfdsBmZg31duvQYTq1dzbEjHz4zkvW3sGrJ9fRFTbjTDQe4yQyNKPpKjPjDCXBcRbCexvYXp3Zf",
  "key26": "5vNL4w5RGmy8YDKZsXTNt3r6Notw4rzqrW4pBy3AyvTS1d17dhyCRP7ASAPeELvVSKTUCYcznYW7PDxBDLit4KUX",
  "key27": "5KD6gYKgbtNY3dZeYtAsMBtyhRWPkLdU25bHVvqQKsksaj1MPM143Q1BNZrvQzfBPKth6fyw1c2KP3xof9gvWhnF",
  "key28": "3zCLrda8oqxK374pnUZ28B8JJMu3g8Z5DRAx236D2WQHA3rEHqarHvzsTGafA4CJcizN6X1AnDZPJ2j7BWckZmpY",
  "key29": "592AtfGaMoJvAeWqoy9rtERuHFqatwxWD2sq5QXTUdmU9jcd2LVQ2BtbmsHYBG8PsRTZGFvv6BZGWTFhm4zm352N",
  "key30": "33vSUDZX8mrAAas5SGvvWefZALvWqyYxKWgVqZd4n8qXbeBsGctvQ4x3Am5k88rW4ZSB2ULUTrntv9QzzbLzVYtb",
  "key31": "ec9o3NALJaDUKx2phqP2SjqaHyRjwbBT2SfUsf2XDshkvGaXgqGcRBGtVpwkioroJSomtu56JCh3MRewDikCBrc",
  "key32": "25pCJCBn6JAtW6T9b6fVva1gECQDTYLEiUbie7YskKtHNpCNeADCW2UN2mZyDjpZDYTBVRCovzKieyt25wdeBwji",
  "key33": "2GfYTkhMsH2CL7AaGHRgoJX5LBc824T3QggrHQKtYKDQPEgXcncHjuyo6geaN4toSrjR4GXhqwtMR5Svjgc61ibn",
  "key34": "5GvsfByL1TcGLbSryPeas6wteMfSEobC7WkmE2jPoT8nWqfs7keX6cdmLs3zKcNxKuimxadLFsCyFz3MngEKomQa",
  "key35": "3xBxpn4GtyPrTtGf22PFRr7UaKJPhBLSyf7X6wRqLHic8brDV7MUocTPNqcLNbkfh53BBFjmAmqz4RQQitr9kF1m",
  "key36": "5mvYGiL21p8JNVSyrwTTmGZDzRKSGFKf6cwqNVzJtSDcxnbULtGta59MH9yAr3B1xeY6H9EoVBVFXmq4ABcaSZZH",
  "key37": "Gyov1Jr9q3zLfVA5tcKrzAV6mXkeS21zAnyj3VYDhvAayNsMqgjJ5xAeLjUqdregPibkwYBybbZCJgqbgkiRSRY",
  "key38": "4kVg3rswv1ZZdMLy1kDar28fup12p3nguY5ezr133GcvMvFxdtomRKmcwTcb1SCaL6gjG57p3tCNNdRe5dhf5sjD",
  "key39": "4ors2xLX2tPkdCDWnWKz5gvy73zDteSvooNBT3zg9epRFsX1e3wPNfqt1Q4qnMURtgZDqJStxQux9Jb4qgNjiqmB",
  "key40": "2SbktHkk7bGWEWtdb6LrPn93UoLpJ97kibH6XZx5RArTLuCBJAsw7SsnGyjRnS1a7y65DgUvAEwq1fYc5bqmVQxQ",
  "key41": "39JAtcodSxfD4QasXNaFdJfEouerdMqHJNLRrcLLUnwx6ESaQrG5x8xBtBBEBMA5LqGcpVXSALSVGM93Sr27a5qD",
  "key42": "5evdkskr7ziJ9ekBbTyUXDQzvDyV1uQz6M585gEbz52J38niEDHKMeeBuJoZ82KBMvQraZKnrZH772tfsMM65HZD",
  "key43": "26YouURD1gd6EadqzHMrk3ijmRFj3Qud7haiwFp3AcX8LrPrvtYhqYLJY4AZDXRrDGxb2HoGMPnSRjwFusWqskei",
  "key44": "5sVmaQDAHj45fnGxMXPUduVzWu2qrMRasBtgnduxXtNL7RDjs7QmNci2Kkop2hGtP9zuX7y7VoFCFjAMwTCmyUai"
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
