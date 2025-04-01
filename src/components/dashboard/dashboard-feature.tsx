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
    "2BUzdrts7H8PxKf6U7ShgSdxmx4biaLMPmac5uET6sLD1fC9hEoqcpwQY1wVUrmaCA47n8J2XTYEH4zzRceYm1Xh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4TzFF8zHd2X3diqiUhG8RnZV5ZCLvTjjUfQPZvhGi6kx2J1rto2UC6VkGbQ46eEtNKyhHpWeXUBpTm75SX9S8kUG",
  "key1": "3vX4VRCHG61osvGMgPE3jQ6gc32JR8414w4WbY9X1KowfAYvwjjpKZSQjtM28pShAjBEogrCCwRFVGtwJ8gMqQSd",
  "key2": "5TbNHo5RmzEMrqNJdxBPHmmtmyyHanfuUdR8ZqGnHmu8thFVEHFuNcg6DVFdMUa7Zx2RFojnwKe4XUXjbw1nkRWA",
  "key3": "2bYW718cHpKyYygRF3K9s3W8uq6snE5xztmSK4FKx2U9yCqHtm5A6xNkzhyBewU9BaxwyLCwjYQ7QgWcP92AkDa",
  "key4": "kHWZ4MZiGhS4UQTAtXjqjsdH4hCc5vZ4UGXSG975zkhz9BRzJN2YaVTbwSBJSxDLbtMNQpUAmcCm5Bb9YtKDTNz",
  "key5": "3AD1W5jWZqDJ3AjYxqcDzdUV5dyv5hC4WopNEYtneVPUW1as8bU4S8FJ9WrYLttJJBePTVFpjBpfSLs984wpEbcv",
  "key6": "RsoPcjx6u52RP93MZWgDAwcfeRzj9AzkMV3NCtuWCvN87BW4mq35uXahwi25wkwMDc5tD2rWkpEUXPr7HE9FAsz",
  "key7": "3aomULDtS87juwDEmgcx4RnfqjEF8ganDXRk1Mj44JqEyXLV8mQm7oPmTRYLBfLsAcCbyWHwKYuJr3U1XrAvG6Fh",
  "key8": "2xpdSubqRk2FUzDQakpd7bFPuT8UNjV8MX7kGx8fz3bNgazJw5YnGUz78HwkubczgXBuum4zMC5AXoXgTDDHTnT4",
  "key9": "3WdRE4hr5cLbLwCre1g5yJ8e11KCCi3M6gbDpzpECCTdj5chbfKMHg2eW3PHAPjtHresmJXjrA7hwPLspmoiUDs7",
  "key10": "2BeiwRzBEJAymNBByUmiHDMPSmrSdzn4CYJrMJeFmTjYH5k5H2yQXbgTNmw2455711ZVpmvvMzZ6wMYnCbh1ends",
  "key11": "4YwF1rnbieXgFDSg4ykZ73gQfPcxTmpvbtaYz4bexR5PkQPbAJrQHXyp6h8gYFV8v2msvS9bBbAUYeX6uoEt8yVP",
  "key12": "34z6M4VUbbNBZFcSfvAxEQsaFxPHmZCc9g2Ysyq7fJPHN5d9qSMeovNd3k15kR9spkxR9mqnd1S9GguFFPaMzQBT",
  "key13": "39jgd2bBJrcyNSt8i7DrnQk5QJSBgkFgHzEheLSR92Vxg2cUAMqSzXG5WL9H4h3iUbkLEGBaQwzMzSHP7neiYk8x",
  "key14": "5VMkrc6NreXLsrVF2DHMgbUS41bcL6j5b5LP47UNMSz6ogkY1SoS8NJXbdEC2kyinztDMujfspRYj5JQnRcEfzPF",
  "key15": "5jJguT1BJhZtqkEra7JDGgEvPxB8zsq2XaH4SL9RaXz6p4DjFgC4xfqGrLdzWpMfwp6d6YJ3SVrpvMXcr65Kusx1",
  "key16": "GTFGYZTE1Et2UAyrYcrRxRd3KgfQAF8TKzoohvT12W1XYKWY6EuKPjD8ETwsFNDR5RhhVLX9ahh8EEjk3Ku4mWy",
  "key17": "3HWo8LMxjggawyg8LYRV6uKUGnGfky3jbqHi4kcY7h247uQZW1Wz528TzRFkXqwftTsBrPozFN6G35gAuK3Pnd5S",
  "key18": "34qcmFu9P5Enuunz4faVnAjD5mrDRpbcrW1FYmj7ovVNBKHEmymZc2NzSw55MvAU328SVQM2toRmkjrYesYvktTj",
  "key19": "5gGPxdCgnMiVJzsay2mRvwTTuxUrKLZfTtbgUGn9xatrm4diHBhUYpahP2Fxz838NwNDtcpu73oU3du6nVo14Qot",
  "key20": "4tyieNVn6aX6J5vwb7W8jZmYaA94XpwVwF64h4Js2Lc9HFnMPHZJFT15XK7T5NrWoofeAk9LbfNdpTdBdJQTZrPk",
  "key21": "4NFTPe6USDzzssZrXjGLNFiq2ZjwFqruuugakHjWWzFzKt12WehDx5tfqhYkdk5PjJMa9FyJYdrPuQci4EzKwft1",
  "key22": "2GXoDQEn3Rc99dQj6gif1DcgvFZMzem5KVu2D8S8ti7koCyAi4NeFenAZK6sKHVvoEU74hz8e6ALMGp7wAphPMaf",
  "key23": "65PK9ze2U3pX9EpKPk5Z4DSnRirHBQ3GmDVXRMPzbt3HLsMQMzfsN422ZcEG8vF9quGmPXns95f2WWrpZg66ALxg",
  "key24": "31qqsjZEvgzcpS4Zde8nLEsM7wnBYT9Kx53sqKz4uFu9cwy7AzVdQTRUV4PNiovQq5dhoZY9ZYbWAaHSGc18SmSE",
  "key25": "4YRzWdZZp2QSGAGi9Dtzu9oWTmXxTXxbfHkiNY3xtHMVV3dZvAdqbyA5PFdfCCYEuyGSS51fVAgok9WZHuBiqF51",
  "key26": "4K5J87G7gF4XAY5obFE9ZGbDXztZnntLHqRkJWW86AwU1aUpXwtoKX9A58aqu8Pn1Kf9k5BtWEmxjoJ2arTTg4xJ",
  "key27": "48HSnYUb6ocRQUpBMyGkzyzvMVJAznfTcUpPdN8Mwe86SjiRFvb3ZiPvV3nuFmaVGVpx499naGN4nDdMY3MuvSsZ",
  "key28": "2vPV12upZUyiuuj9xVAaSLMQqSwY7VWisEDWdFqRqZLX2Tid8CV1cyuZLsHJssLtk9gbRqhKop2PYtu6S1yfn54Y",
  "key29": "wbMRRzBovrjnYMA7kgDGy9pzTtkkFpuTEqoT4jS4mTP45i7DZ9gHiQT3kQaVkNg7tnDHgtD7HSCKt2RpvWTC3fA",
  "key30": "55Citw5sQPoWWf8bsUSR66nG7HuGqn3jvmaeXVLBGP5eZ1czR88L6o5gtHc1BsFjRiYktxhNudqYkFMEk96evRxY",
  "key31": "PAtGUXQ45LchyUrUrW4qJ6YwZKguY12GEf1exFseiUaaYaXVVGHHno6EB31DcJfnWFSri84BZtJWLB1Um4UL9ju",
  "key32": "q12FfGgm3onGRKzDAgtJzCdMhbZYvSgM2RtaToBiQr6wHJ9rtDCp8PU3xJbDHB2L87gxpXgbWiWRL3F6yVyj6UU",
  "key33": "3Jw4EDFQk8BCm3QaqY2Fa8f9r7zzxiMLddZFXLJrAWwmTcYLDkVBTmsw4VgTo5ZFuV6EJDoH52Pa3o6jj9ArnUFS"
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
