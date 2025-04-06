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
    "5x4FsTz52g348MCNxurGD37UFdAno4ef8eg6gABjQzKyEcPc82gq6qoQBGuS8bJ3eTMjR18sqaq2TMk3VFgitBvE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7VNDM6iagCGhYMSenh6z9XNLGrJKoNxLb5ZN52iawz76Cu9SiWW1aaTX25Z7NjMys1rW7oPRwLKFEDbY8P4P57A",
  "key1": "5rZWzUPDSh3aDqHebiXxPrNrGDyDapd6ZKmvcGpqXukaJvYqJKZi9x4P9GWhKQYpDfrC3qEFwXypRbDLPmguYRdB",
  "key2": "5MpDMJizUeUGKJb4bNrumMx7P1Y7j45cQg2uSNsuLPPiHzV3d2UDBbaVVHn1YmhDWGSSCCUmgLMbH42ANK3EPEXQ",
  "key3": "ioVW95rC44dAEYoqTvhCLTWp9UBMrsaFt1rN81pquQ1ckqCsYFSLbwCKn6AikiLEctmNi2i4ZpNVecRUejiW7dS",
  "key4": "25ykZBEA8FKe3bz7oexsMh3o6A2rtumfLV9kGEH62pZTqbUg6kuF9Eq8aHigPVqBLSqzDhDzypPq4VMrCBDKmGbL",
  "key5": "4NVzaKWFfUtDm7KjRCACmp6ejmrCYGrHjaA9tHR5pEsTzsGzBEeA5VK63X1QRGE4gMcnH6ujfDS1xBbpLTJGr2C7",
  "key6": "5ADZxz8JTkUTEMDi8Yzaxe5aqSp5hbaMYtqiZwgH3Y7LeQKhvc55F5KevNfonaeYqKRURmJ5cJCQaNsWjmarBDPg",
  "key7": "29Bp9sfxCxbD77njxsTfEBQ6frGw3UdfJqQdrov1o4TJiMhBGNztEVT5SoTzaoWGx4aSB5MCwGANqQGXSoEMvV5A",
  "key8": "2PCa4LNpTgsncnuwanLqv3pdXWqt3FASosfib8ti4NaEnLDpd9JNVbQp6FJNtgcGoPKSZEam4xYDNx5JL1WnVAQx",
  "key9": "38rVEA6veCgUArSpKtKLMRJEN1oethNvNodo5moBQuAUaSyW2LmfAsqxcDs9wawHsauE31LctKbwRcBm4ADJp9bJ",
  "key10": "VrsArLXFMuHfF4WhpZ6jRsST4N8m3CFNFo144Tm1q2TxRkX3pfxKq4gkzEFQkYcoWP4Kg9bUJSHBSzZcGq7RH3g",
  "key11": "3Y385mT54UR3iiPqM5JtAV23sX4VJ4NV8tybqRRj2mDcLKtY2mewEKd32ShJVTCotzh8dS6rsvRcZDqoA7YGEBeJ",
  "key12": "5sxK9prUUqxTcLttzCeX3VbrEPzYYr2jLfwJ3sZSKPTCn7paaSohzreDHxcvbsdkU1bpABmntuk4LVYz9811BkHk",
  "key13": "4cJnQCeJhmXq1Wn3nKoGgFs33D3Srqgk7DJwhcaPvpYepg9BjvKus59VcsgmvpaS9ZzdcsfLbuH841L6FpM6ayn6",
  "key14": "5jxvbJFJTK3MJSvBLAQui8jd4CiZDa4dfUWqUGtTsfrqFhuc4M4qw2BNRPa6gFtbEURKW8aWu9cwLtfU6ieNmTvM",
  "key15": "5iyc5PSebBVoN9U64dkqjQQdMCHDYY1pedAEJpwNtXQbwcDJ3BPzNv5fkENdAgtwAnmkeaztNak1CwEebJs4DF8k",
  "key16": "5euD2rjaD3y5tth6JstLg8wcpWvSLvZeAZi3jv7XnZhwfmDVfthc8HHKvYi8Aq1mzuUenmcjC6mN5AN1HYJBA8M6",
  "key17": "2QJfrQhcQYDrVFDo1NToCrvuYj5aXBmz9575Ldu4tUpWhhfCwBMnM36Ce5K73GJEoTwJiu7A2ZbDBReCUH8nWSe8",
  "key18": "F7ULkS35mygdjXqJcyoDbEGfWww7YKEa9sw4YqrgCjyzjDfVfCu5musTdHE9z2x8nDsJu7beHPsjjFusC7tfhkV",
  "key19": "2tAydFKh7ZMeTyARd81T78HQWXscfw5GY4bvTBhzQziiYyJnLGzkqHQMS42Y4wMNyx5z6aqXukhBwzGQXQwmfHcK",
  "key20": "2DHmCCe8NsTfUqLGqqx1KSBvmW5A3FQPFgSAGtnCJiLUeozEjBizgFneFGv9Q7C9YnXF97CFuUNAdWooqq8mexfp",
  "key21": "4mh5RP2FhRLDRB4ih3voPSgWvvriE2b2BXpWRR2sc8tiK9CERpUCQKhHWa1sktiF4hqCocjZZv8Gt7gidqi3dMyD",
  "key22": "4aCNtgaEVwvJkniL8TBRBfU8Ht6d5Job5JK59jjQyNjp5txmWVCfgva3SzTfUaesHhzxr3PPonuxb2yMfpjUScVv",
  "key23": "4tq641p9jPrYVsqUeoKRsgzSMUDXgPWih39CbNfntrWezJQfEgdjSPUXUxKWWsfhoGLkv1SEE8zU7eG8PSVcjG9t",
  "key24": "2nkH1bJwbWM2sRxgiECxH5HfEVoypU1UeRPZtzHgerCvXNPcEF54QriYwCi3vwFWsTWnbGARebyKktZZ2cSGq3mm",
  "key25": "5Jf3obveLis3ih3QMqPFkRWhg6456isuAudB6sCM7BmdFEAm3RUtWBgCHpSm6vcPrxoCTbkhUvyH7n4vUtju3q6J",
  "key26": "21zsFW8soKCgzyAw2iZAYzigT5kYrjFqhk8B1tgn46YZfjxVcrgPLiQRTnbVmAxGxNCRd9ZK2v7xb8hXxo72DFVK",
  "key27": "4MnbENJz1EZSRfyZLAwaeEYtf9yYaHi9asG4NLD9ww8tYNkoWxgL1ZVXK2pV3D7g56SwkzdEHughAZCmp2aMJZrr",
  "key28": "3RnVBQBk73fNMesB7YE8ponHFDpNxnPshbceUrhrAXyeQic4j13tSZ6GCBdR8gzkJMwg9QR3xWkMWuZtVg7PbSP",
  "key29": "cYnsAJ4pxBBgpuCZa9uz1oByHgXhHVE9EAVEnSGSdZ6VLGckcf1Bm4vkfGyUZiQ1Z3s9fecDW8Faw8SZgw5JeAi",
  "key30": "3NiGihEgQ3SP9ijUDPq7RfS16QrceRHYoBT2MrbNUjxQmAsPochDxoCK79zupgz7B764oA1mf5kMCnf8o8PFZE1d",
  "key31": "3cx3xfHK31iPStivNUVRs8FrK4iAoZc8hNnV6rVjB7XjeS2h2FLffM5EQvA3KLh3ka5VqCbeuPRmn9jDQuwDA6yP",
  "key32": "5vmxstco5oiouCPvi17hoCU8MS54gLMZRZ2kHBuL2obJwhMq8G6uTnSDs7pbtkeXcTxVvfsfp6vrnyA4tMzppDh",
  "key33": "a4X51XGGR7rh9DLDD3BcSSUg6XC9BieJb8cE5QbBVnWMLf9fSehpZtrizDFSmG9kvZiCE9E5PTi85JZcdn6kthv",
  "key34": "3ro18pvUF488zger3BLS4WAQ9HaVoXKqe7EMRtzMW4CRXUbbqd4WiqzSi6G9jvPsJKo69sHgHnhakgpzWD5icjDz",
  "key35": "5rR4a3H6FUFvTWjHtogsoED7xSUixeUowCypaTkzUKnPtuA348PVJoggCe8LqYjsuUzkrzRNsHm1E188QZfkau2s",
  "key36": "4c4Ao8kUmjZSD1fFxCKr4r9voFS98cji6SorKNKPxTjuxwzB1iT958HkUDm499AAitz7jh7jbhDASQWhXQmjBVwe",
  "key37": "2jCeAvWSNuKF4WEUA255sCyeYWi2mrrbcNdpEiU7JctLK6HML7LsK31CfwGJXRkYFGGPCwpLwKQrSnExj4vtTxJB",
  "key38": "hTm9DbJC398grvD5FHsbFn4VbzvXdw6RAC93d9DP2FAxYSfrxhaiWpBdgZo5MBnJHQ8BDnuKvQ7XMtkacsPjvqC",
  "key39": "54Q173NpdG6FSuGmqcnmoknVutahFZ3hqXFmrRRaABBfzT3PDZPeZDStQLGguUnf1EgDRVrNQBxb5Fxeuamcsywb",
  "key40": "LSjGHUnJX8CQkoJ6NptuB2n1LrVj1tMmdmyMR8daHYw36EDBaRzUeoo8iDP42wNvDhryJDFJxF4ZibWH5NvasDs",
  "key41": "3NGhVc7Y4Kj7UuBoWppZPeHCQh1551EpkPm1RRLWt6jq3VQ5teiHaptqXevtHSFoy7VHnDkMqoSvnJQoUtkucF7X",
  "key42": "3oXCv3ZaNRFRzu4SpWAV44wVp2GB9Z8TAvk129bjnGkPw9KvRipMNW8AnYZijxZJ8QLTEy8L6bhGxMRHkroTN3Tk"
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
