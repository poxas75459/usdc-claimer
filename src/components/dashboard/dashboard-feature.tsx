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
    "4aVmjbXNLY4i1RinqhJnDewgeoNXaZGdQYDTTBUmN4P4jryf15BoAUhFcLC3AcypbRpL1tmpCEcviPjAZ77voBcb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5YLgwegAWrEgDQUhEyT3zVx4JPoxicDJ8iVSCGeYi8bnn3Njq3V2PpxpBJf15K8Uj9QGbmwtSkAtkAptqnuMh7Li",
  "key1": "3Sk42yKGj9N1PoYDGHkfcPjgX2qSvsP6BooCywQY9WAmEGRS56BVYKm3vqjhF2TJdcXpAcaeKjLKTydRukcmZsca",
  "key2": "5KYQPNc7E16gS2PQtpim2kywn8ZmAJCw3GTTtSNGXTuhh9QaB6LRewgUPnV3HG4KcNwvEP8E6ZKRRgX5jk77Rcr9",
  "key3": "5XUqw5nvJbsubgyCEcLUP69ENGAiLFHPdMWPPcmhcoz44UJnxpVE3CXBWMFMtv1bazpCjnDjrDB9a6R38mzTtfZf",
  "key4": "3mPXRuP8EtCbaL1QzJhQ8KFtjDXrF81nC4jQy2cXEoW986ggrGCbtU5VXRUgv19nA4wiA6E4P2pgVFQVRDT6vuRG",
  "key5": "4d4cQR24AFZe4AqAafk7MkLMkiptUXfBKyDTn72bxdfRWeUUWXRo8yTcg4NeZMTf5Z3v4A2MHUSKk9v5rKQmyy97",
  "key6": "5BVbXAyb9Em98qnGZMgByJjBDbxcMGPxUw8ZBoqW8rTjLuKr8e1GB1Yb7D7pMQj1m5tY57NE1hnZX5FPX3wAVRwX",
  "key7": "5YRnv92xVDRGJa2ht5ErfCi8nJBqiQ1hFmNZjP8DsMmtvzTCmbHRAuoDMEWiz5Hc2w5LGvQ5URmbqVWfYJeyQqUr",
  "key8": "3EuujSqHfG3ytTk857N2kL1wz9dd5wsDqQo3BE4PMA284PCZr8QgDWfqJt4yi1Huwk35UdChZwahdH3pT3CNcwRn",
  "key9": "2zVq1NBg5dkvoiXJ7eDuJh3MpJKeYiFgSa3waSXL3UJ1zJkiv9Md2zhWa3zeNYoW2qmq5idHXVwy3Fu1L2GmYyW9",
  "key10": "4kKLFdAAuRbQ5nSGCmqk98Y5GtZ7Pv9cvwYiKw4VSeiYcGJrXfMBWpa34iBdM6cmd32SQXmdaksAXdVSioY3Kyrc",
  "key11": "21M6f8cU5WRgo4nsnpGTkHDNtT7ChKRVQSDWAXMtruxLEoaqKvf6x2P4YfK3tWzVsThrMJThT2gDrcjPpFoxZvnZ",
  "key12": "5D9XgVNBFYKvqkhMtZpZgQM9SiE5VhkiXgcdj8E8V31d6wwAcdnjf2hc1TqbxKKvqsmnhXxNdSLRimaLM5L87A6Q",
  "key13": "5HQmFjF4UNW2Q73cXz9LR2mabsY1T7kBRMKLfnzWNcXmzv6YAAiHomHqdCQZYLgTMzybCjbxebWQi41Aa1d5ekCa",
  "key14": "T5XnR3DVkYKhhA9XFmUvfT5iod6JM2YXek4g9YbvpC7SBvP28mYWF2Mm8iaxgCsRmmfFw4pkoyti25WRPCMUByk",
  "key15": "4P1N3peytEupMUa9X7eKzi2E8BNpMzJ5q1TYsanRr2XvqYhiFaAci3xY788enbWaxmKDcmgk8QTPpsns2hkGbsna",
  "key16": "3977UtAwH6p2qNUhTbC3RTVShPRGMznCtJZmpSzbD2WdoKN3LkRt2CEwbmwwXp2YMTGXWMgxLqri3TjfN5FGVt1T",
  "key17": "25TmEGFHuh2vcLdVZeuzmhc9bcoaKB5hJ47YESf8Mc1uFZgxsYeT92crGnLgKujZ9QuLPXMpohj6M2ba9QW88aVv",
  "key18": "5A53jcYR5hNQ5c4baNSwSpz2jgt2vF8LYERUsUBRGQCs1eiaPxWWiXWX4uKUbZuVDM9cn7wXf4m3cBVMnvPjcJg2",
  "key19": "3pi4auERvZ1Ascieo6G1jaYRsAY7H2DSDxgHHnf3L5BUSjRmTLquyvcioj6rodxUW8CdchufdXkcUcAdmzepnVyg",
  "key20": "jEkDiDDKrFh3vNuZtQZpcTvKrPJLBQSGLNxp811tnKmSjg1N2tPUfqzBsxBwYk9RJ2pG4EFyGEhRAMBHfxKtYAW",
  "key21": "3fgZ2GErCGugZpRrtw4YHM2XAQUHaB7wov6mPShhmfsMsmD155QNKW2f9uD2kX35rxf6mgXPnEBgchCXtC1Vqgyc",
  "key22": "3JtAX1uJZBLvRbMJ5SPrwNyAsvygpX8ytxfPzbXGhKmgQE8eHNtGjC6PvHixSpGVebYjVcR3Qc9YGeUpLmNnph9J",
  "key23": "3ntsZNXADtYVwzBGaW8VN1bQBrFspMpvxUteGjmikzT7hegfHjTapoRinE93i6F958MLe3ozfoiJHofXsoE1zRaG",
  "key24": "fumS5zpHFCpyHsL8zPLrR4vm6pEuVbTMi7bokTrCjufUCxLr8YdCyfba9SQqYSkCVUodxYFMTpNWBBJJEFASbXA",
  "key25": "4NKxxaRhXtQFFzaDx2oAUDappHEg9Mx7arhDx1rjn4ppG2rk7WVsJ6r82ZiD6o6T9MkxVeuUw1ExiC3ZerB9ibNe",
  "key26": "4eitWzY8aeRrQghFkM6LQ6oengyVgruGA5f4dmPynuTFVthnciWdssiYdN6Zv42uZAknzafvdhvmYVpiL69Eidrh",
  "key27": "bJTjpmYWNcUcwz5Ciy4VkbDqEp37ts4h6YZ5cWpAENqvio4VLTBFeoGVvyXURWQ6agcZWDWk1s5wD2Ax55QYJbt",
  "key28": "3y2ywk4bshMHsTCkfZxXwX7MZj9k73pGJ6P1swkEo6EWmkvgZVAzD8gwRmBtcNgpwNjLbYGDhman9wPjcQFjoJ9p",
  "key29": "2R92REn25nRPo5uMFxpuzovYsCBbw31KoBQVCzdqmR2yKrYnTG2qetrrcv3rdj2da6fYLZS2WZxAbeNw3hm3HMuM",
  "key30": "2X75zwkL7rH315UVQrRzusGQ3AJNFhPHLWviipJ4SY1Te2XjTYDfqcbytMRqNm2PApLXrHrys1ftJbAfLoD4aTgT",
  "key31": "6543AqBCuSwp3RoAMNVKWZ9h83V7oKVbxzSBpLPEsWk9T5aXjnfbfwRphtjkJepZfZZKXQJqXZKHEgumByXzdz12",
  "key32": "2RXXA8rPcgueGJKeS4rmbZRzgVH8sv7mxWnmfSWyB5sAxXsUyGpvUYuesbAnuDghX1Z6zpoC3BdkW9LN2cBU1XTr",
  "key33": "4gUCbpGF54Kir5tViHnUoREdnkKCWs48vkKSHAqU4hNYQf6vpp7xr5n4E2g8hPXK3gUzNarm2DnvKXPhGNwMWqYC",
  "key34": "44ciZwZmsRTRNRVJW3YALQkyVWABH6tg5VnjSwfKmLc7n5zq5ZJSo5xA4EGiCkqci4s9Zpx5C27QermzQgWUCRSa",
  "key35": "2mRUnUArd6koh7mF7uqde3KndfuDSAb9wJfgHTddChaQwXqmrFXLSBLLtx7uesxuMrXodHoqG8Atj7BCjpzgfwq4"
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
