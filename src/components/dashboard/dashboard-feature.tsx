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
    "SA5M65VaqbupA6LgEPZwjc4QVuyDXFsavaAKe2gvnzv9Hx3jZd5h2eUCpgvwueR4zcLVCvcBJcvyBq2uVfUAXBQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "238HnRwzkU2LddZq9MFN14vPRDZwjKxn5sZatMsf9XPkNoKbwRzdmpbZTnkePFEwCHMraMiBzGYPe2J32Eb3Cip7",
  "key1": "2xBhsBgiwTAHR8cGJDUj9vv6AnYemeTNr45PBViPhGFmAEifC3PPQzZ8JaRZLk2aQ3gB8JkFPWNUXGQM5Nbd8fcD",
  "key2": "HnUycyW5BRcWhcgDqcQjPKXrEGiGtEtwHRgEuGC3BQsM8N44927szMCh8cbatJ4EeQeaqKHchmohydrLXPi7cCc",
  "key3": "5y3aVwEBrWJ6HfShUTtu46MpDbjq7iJNr4ngPD6HDQ8atf1KKa6a59r1X5m3hNXQGRGrrwMipP4xestuZH5pvDYr",
  "key4": "4WkfhyJvjERaXtQDYSxf1cJSPqs4YTXysUthvbSitAZB9kLTjEW3hWbBbztdot6jNTBkMDb1WYiv1t5FRH615Qwe",
  "key5": "58qFgiPTDGtSB212VFB5LUWaQPB9T2kvsqwCs4Ki7sL34vdmuTqH3fqgmF2cN5NkdnKGRiqSXog4u3zAUAiC6vYF",
  "key6": "3GR4LC4DEDFYJ55oQbo5U8qef4akqPhCnskPkjsdbUvy381vE8MoA972VubHPNDVsjojRWBEVtZSwLSGVv58jSgb",
  "key7": "36BsdqbMLbkwKpoLQ1QeSLYA1DQ5FdUbbKkQea6NqUnY7vsDRmnWnamcYXDrm8vpAaq1dH8MkUwGMU56QCAGTUeH",
  "key8": "4jvA5ZV88kHHf4QMrbZJXKX35hvpTZPArq5cGq8qDKn7ZeSsVRc47z8svwc4h9NgHL9zaMGqNFdSq67uijXVF8Wc",
  "key9": "4KUsS5AGTSygk8gCi3JM14EMr9qwTo1FeKTagyr5ukjYEgiBkxjsckqQiDWNbFaBjgJNzkXcarthbiSa4FtQ83c5",
  "key10": "41j6CRFmb9hGeM6w7WrgbT5ZLoAo5gDg2EncXBsCj4wqdUKVa8EgwEgsawi4xHca4Rop31qPujjg8u76eXUS3PWg",
  "key11": "bDZUERafqt5CXwbYH34WEXPXJLshR3LUywJD64nTbgduRCfoVCU9dGSFGcteNJFL4nc1DhChtK67UThGw7Abr4s",
  "key12": "31b58T8Y4WboNeXy2UH8GoKcTCJ8uaeqJhYrE8gYYn8sFQGEeBbAB8U6VUihS5M3ctCwAgvoSMK15BjF9NqAe43S",
  "key13": "rfaqULgKKCUpxCSv5AVvcRFJ7WMqof9E5jo4MAxRoCz4a2R8Zu8E6mDuMbXZEAwMk7N8tt1wtJG2TXyxhUCNDqM",
  "key14": "4H4sqHeHBJBZioJbA8fHrafuawXcGiKMGT5QCHgTYxAYKNS5ZfGoDWn7QDLUH2LonE3cLprJ2N65bUcjgVKxvZ17",
  "key15": "93Zcr1DwYdJcZAfyiNVh2AaRBXvcap3cJRQfMmV4J7Y1165ja7Tm9yaesGoRHEWnrEWV4wRMS1JS7upTQ2zAsMk",
  "key16": "3AVEWcn5uhU1sppHyizE8uMckSxTKTxjhLsYEQ86mSEYDaK2yHrnVT58WrFLb46dDTwZ7PBCbzrviM6PPEmk74qC",
  "key17": "5n81jGgn6cQz6yiDLtnM9z482DbJfrcsxaK8Nkmnzs3sYjJ3uuUyNjMTcBxPJs2yad25s83aEKAKnkneLzsQh3cf",
  "key18": "3BRPk2BC7Z5SDhzGM9aGEjjZnnoTEVNssaRF2tKBq6DRH2WjjnAJkkAsFGNjzyAeedWMbp4t8EDdw4eULvPDRCTi",
  "key19": "2YWbWBgycq8sjNDSjCvFuKQ6DeqmjU7GnScVP6jKCFzQDjbtvndRH7JFporPurtiGvgsUngz5e9MdgaPWHM281FG",
  "key20": "v9EpxM1xPzKsDbgTJH9c29vjZwXY1rSzsoquK8gptYmpKDUn9ss8nhJgwhyZFFVSg1xA6rHwv59xLWy9hfFP7S4",
  "key21": "2nZgCGQQ9t54EuAUGtqHs6kzVTrrvXmWx4k1YptUHfEqsai1kNjKDkf2WjHz3t8tEZATMXVFpAdnaMN5vj2uu1xF",
  "key22": "gMvJu24qaktpgoJ9DqMHtZBwEBq39qCZ9RjmKFcokgc4kRvgd9rkHydKUJ1t7d8KSJYkRaiFPiELoHDqjrZjXdn",
  "key23": "2PwGorNPpZW1QyXUeqPyk31Y3qPcKpu915jqrtK6qf48VMDVyVCNajcvhwQbBHQ1ThsZcbRCiAfp7YGUbSXZemyk",
  "key24": "w1rq8K1uMcpBiaRouXmXQcBGtqVUw3uMqAWA5koBgvDW5jN4oJETC8U4ohYWpM6FPCMVgp2WKZvHguLB4KkNSje",
  "key25": "3WbhbwWN3Zt8Caiw6SrmrBAJpnNwnnSJL4w2X87qRm99RaX9D5Qxfe8EVWVpLMDPBQg9mSNJNh2zB1FBHeKZJtXn",
  "key26": "42AhF21BVtwQ8PQFoeW2mAhFDkMSiK2f4iQkqp43ieFfibgkJUap5N3uMQJmhuPy4ch8vGMahzg7HsD8Mr2rHmsY",
  "key27": "znyC8rcSiJ396chyVQGrzzmbaYL2PPZgC6hBoWJ3ecmQWspJSJxtDA3S1WhKiXunKt9qHdQwwod8Bw1hE8NwQvY",
  "key28": "2WoJNJN3Qb2YPhVrTsJuu5MqejmJ47fszqb1XqqVmcmPAwxUjeNM9PD7aznVhZNGVz2Lkzqigzno28ipqmM42ybf",
  "key29": "54vjF427xRNsf5MQPGDmoHeJK7caLTvf1vWRq827Us9j9gFpoMbxHtQwpa7pWd2xAFfSPCZw1t5ThE1XuHwS3kgU",
  "key30": "VdkjDzNQCk1Z5ehrb5vf1XbStoXsn5QQDGzCDRSy2tC23mzUYY59zaz7YLK3Abznc985YNMe1PAWAf7Z8hqUQse",
  "key31": "5ENy4WU2jAG6MAJb1GYGdi7c1SRLDbvg3UVMUpW9NkenpjxGdVY8RET9ceyjK3xcZB2QqkYgcH2rH6WS6w3ZpKHc",
  "key32": "5WgnLh1LHbufH97oXfip5zow96tV3pHd7HLuSqafjz3PG6MpUi9N8w5X462pBq74J2KWWizazLtEyWAVCam6ttRa",
  "key33": "3Q2Vqqq5iKkQUezK2Cpf2kbAPbTifwAEKy858DDNzxw41sppuZt6qq1Tf38bNU43exzQxznn3jgdZ7SD6DKHACUk",
  "key34": "5Kg6at3CHjXJjUeydTXSddKXybF4N9eFAs4iV4kVXU9duRKMrvQvJp2UpmwP61fhw5vh5KEiYdjeQa6KAWtzScWi",
  "key35": "4zPKchCvkd2nXvDXn85M9ydUfwiaUFtZkCHhiS2TAvKpDQuNhU8jbrxvbDSeA4RCp8BwWT1E5FGs6nrpiaM8EA2y",
  "key36": "3GXwG7mYXd2wUfMRBHeRFgJ4WitcU22sjUUcFQxFqA5wHP5cGVuyYAdXoFchXHDAJtT9ghtufbKAKiyYjgfE9frQ",
  "key37": "nkp2ZXnRWzdWETFGfo1QJkXACA22oyVgkNdettTjnehxDvsWmKgRdAsjnumL4tB8NoQw2Sjx8aMfas3obYMPuh1",
  "key38": "2BVGLUDMB39esUckvt8AAdM9g8FPzGZssXKhtAaeimQ5dwNeSkkSmQL7TNcR8iaFg3Ctge7Y65Ze8k2HL6MPfsLR",
  "key39": "3HW6EBz2PkqZ2znJfT8fzSsbeHrg95ApnbRMGrgZNCnpqZudnhEpwEm6qW4UvzV4jxEB1Jg5prCd336vDeisTCz8",
  "key40": "4jebqa59YPWwS3eKvgJWj81AhDMmcsnG7gebF4pouqCg8WtyDAxg7u8gBxDEFynJqQBAmNo16pvAN97H39etBXzX",
  "key41": "45KbWHsWiTsv4imz2XjiqUoqeLwqnjCeG1Z6xmxfdA1iJ3txKR3Gd2NdgEpC8Bxo78dsP8Ht7pNNGUSQcKMsxY94",
  "key42": "5NFcDxPjgz2ANiSfFe1NJ7kPdS7q6QToqMa8SZ5LyXxSdKoTAGyEXFybxjQbWM1Xq4XyderY9EH5bT1Ld3U3NRB3"
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
