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
    "4g9YGRyWWxrV3oFNuTNLRqJWRXN1Qa6nMgwK5MhpWHss1D1CjMNut8TUSgZ3ymMQtsgCPEoQbCtiSpDrr6M8HnaX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ihj1eQT2b5uL2qNQjXAKNg2tpPxwwubabfvWkKnuBfuMudSyKT8yoCPe6UU5bmcqf9hsctmpEj8aq8a21mHr58C",
  "key1": "2btmoxac1VZH4rjiJB5mkfx3epgYcx96T5ewgVDpDtZwjbma7QUeqtxUYdN3WxpTUZBuCRhmgPAh71d85kXpzUh8",
  "key2": "2fjPJXgRfRrCHaHbFbCgxK1NZh3FSR3ajZaS2KW8stPMK8EhuDdAxd2ePCp258y3jYtesR9sRrymK6w1MzZGFLzT",
  "key3": "5HC75nvvkvcNFxDFLWGv2VYYRtnyD43gnnG8xHHtAzLZTEvTnZF3wBMNp8tMzBikUzNqTNQuuMt2VFXkadUpC1AY",
  "key4": "3S5bprq4WKC7bAxfLGi8xy61vFDfbXgMu7JJgCAX1tStJgtCNCTbB6CCiqtpP4FCyurQU8RZzKa3112738KRNpNT",
  "key5": "5s5Z11BdFcwJBLQq6Tz4sM4WRjqSUF6TmWhS75vv2L7gYbTP5DJQHwJuMHJufTGEByJiTiYjsUL2MKgD5jJLdnSe",
  "key6": "4D7DcwqVHhCutjmaXCHFZD5mzyGiwC6beRowycnHwS7EgegjDaXNCMkrnUDyj4msomshBnJTdTgVwygxhs9tHERL",
  "key7": "3z8hfa6FoGc4XJVsKZPaayJ7vWBPB7W5XuRjE7wZGoNAG6EY9xFdE2Phq9Xckn63kAJx39NwvsCt5M9RwWU5W69D",
  "key8": "45oWiVWkXeP4XX1h2JxQ2BpWeyHjYKCPQ3U6iLwVe3utsn9V5xPBKiYrUjrAHy7dtvnbhBemzZot6CevXZvZoMqQ",
  "key9": "sjf8yTMXfBcd9K4CRxDg4AZybpqfdUCb71TkZJsN85UqrhePfJjZWwWFi4eF1X113PnLmLWXEDStLGdhSo4m3aJ",
  "key10": "4pPuU3Y1XZNGwjqCZtCeHZT9S59qSp4qB27hKKZAkpLsCLpYpjqun8M3FcmMCMUEG7fKnNpPyXfCDHXvvUY8gsCt",
  "key11": "uMiUct9ru1YFnvYjJuMbxTScJa4GmWywBydVccBa9veZCXaKauX6HLzUyKp2GUwkWpr7uvZV24RqozP83EXuidn",
  "key12": "59UBsuwu5n1py2GFwx9z6oiqsWVcuTjWNxfZeBwT32JM6exj389wfELDsJYs3UvUGjfbiTsYtG2NYrfxEiRnSTR8",
  "key13": "31oqRK5XpoBm7U6D4uFkFGmqXYkQtEfAhxczBYsEXayj5d6PBfEdAC5C6DCv8CLETjHhszHD9NEU5ZqLhzLm8uc9",
  "key14": "4mPNtGzoVow3YS6zNhWheLL39Ya9roaSqib7Dss7HEdifcnBzwFrMsEeQmV2jq3ziYHeYgtXLUBXfouoHxDGPP3w",
  "key15": "ZjWMvnFzqpty9spPqk3NNrGuhgUktmm1AGAvkjZ7fTnucsKsSph5QhyqGCAjdWsoxDQqpK6gfMzbzaD6rBL9aHk",
  "key16": "iQEjzkDuYXUCHfG5Q4ejEMBVggqGzaHqdTWRTYeEgAGyucrBhnbHxasFB55fsYynUdzkgVRNE72FekdTs27dyk4",
  "key17": "4oj97QXV7v2eSqSaUnyLbz3o9gdjGVWkW5S9A3nGDJ6QyJNDg1hgWxbVc3J47ietKDZJ4PeaxVY1YYxmLp7GnAJK",
  "key18": "5RMY7wvPynHs9y3ryuC6tpu6oTVsbipzFiow3vZ7iQVUB2fC4K7SUo8rcbKDZmJWsgS5MG9JCBM9rtMjVc4q6D1L",
  "key19": "CtGdFALJst29tNh1gqaUUwciXzRwCmEDbTfwQJqzqdCi289H6wcSq8cyFLSjXi76nJ4bnrzoHFE6gScNwxDJwqG",
  "key20": "5BNoqfUZryoEQxj1efx6zXA1Bc2CcAo8E5K2JaAer7JHmgTMf9Mt7GTJGoJroot4SfqBVxcXqQqLxhJJkzkEyrSo",
  "key21": "3mRDDubj5NukqZwFCZFx8zy9dqybS6LACwwMDeJFu7HchZeCTgJ5CppCj8BKkoJSqxXhVccRVQeYHqAJwUvvwZjd",
  "key22": "2ZsWycSDykgJmqenMN5FhmnVdwXsWE9ezSCvW6wQmorpkGrPq4WGcjsGWUgV9qQASvjSHAppHh9hYkTrgaoh1Q3y",
  "key23": "5i6ynigra5k8uJXV5TqadC3eCdMBxmnpLwfePLkGesitfQhvZeAhy3U7a6ri5svDDepjrbw9gnAiccS2KwXEGvsn",
  "key24": "21ENDqAVGDS5szvS3zFMVYqY4WNUT82rRovdEaE6WJ1a9dnnXbFRpto9shXYbLMSWVeDCbnAuSWoPjF1EeXRnntu",
  "key25": "3MBG42TjcutYfT4boU4d3BBhztRfg8Hc7EtD8y5a9V5xDPPzqg7R5vtr2wJ5FQPmEtPA19m96okTnjck2TKBhyP6",
  "key26": "Yu9KLFCcBCjQKQ8k1gTb2cZRbjthz5wjYZ1wtWPvvfjJdUxqqEvWbSydNLiKTsKzGdC87e8jGxNkvjSYU2wHZEA",
  "key27": "28qbgHeFegtYm2veYxj4wWVPkKa9fYuxrSmgYXPErZGNCTza57CGmDMPCg4iXQtsxssgifaMQPTqjLtvMhyParEC",
  "key28": "4A7K4UCdATwfW8DxQ56Le13Q4xJG5cy1iaKjU6LokuLGNjfSZb9fJC4JkbHU2Mv2eLGcV7pTcpJ319cP2RiCBk8Y",
  "key29": "qPZ2FDWwvafzPfAFiAmnwbK7kTTgDvfPvyCyJWPU39vpfMXLCmb56ARAXjecWgZLoWSxymfEXp22MeZdufQ6348",
  "key30": "43XaH8aEFHAVQVshbsZpydgjQjMznqFPs5MxjRjCWMh7y3KzKZBC7JzzuVoxK16LCWyAXSp9PYRsDhhtQff5yDZy",
  "key31": "24aKTbzu4F8wVPGjMem5j9KydFtN65uBQAeXfNaEipJVsKAtzaNbnctPJPRGrUeSKYDLxvebf52sPVuGjXaSmkXq",
  "key32": "5L67JLqDr19ACoTdaCb5L7NCdxMebK37HKi9sB6Zf2kgowHLX7nxc91vifhh8Fe6XutA49CHE941joY1FENGG1L8",
  "key33": "27N5TQag455RbDzGoa6N4YZvG3ap2Uzido2mLz9ukiWUAPNUyuGZyb8L48T8NYcv6JzBZweSGXVDSqF8RjDpEfc7",
  "key34": "4oXY2YopMD6eBH1bMFaTQxMZcnrLshaMdgVDrH7aT6DDkNgFW2zZ4n4H2VEiVE85sKctnP6FPSbbQcHpywgKnGb8",
  "key35": "3acg3tJvsQoW9qJuCcCCq7p6w4pide8wy3zgjrGeVsFQzPqD8mAEmso4Xvd4wkgwoj95HnPc3mdjjnYbREr4gu23",
  "key36": "552FyGgm1N7RAZtE7MY2BymGztWDaVdzoXZNX6q7gd2PFjZC1FQE6zxFr9Ag8hBi22P2LxUyiLAgUGxNZD5PYxyD",
  "key37": "2EXqdn3kom2ni1XPboJFRiRxJuzoF81y5gC8rCAcxjppyt6is8SF2GGWPRZsrHUMixEFD7QMQh7xh8Uc56QraEVX"
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
