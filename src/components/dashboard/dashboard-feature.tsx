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
    "5XozyWgWG5JQBkoyEpsjxxeeQek4tMuP5X2oAi2YEtX4WSmuZauAnMxnSDKX6wLavjVma85KT7zRuocGrb9c5Yiu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Ahw89x9fepdDiQs8waQUH2KH1PRPyQcK2n3ksFcrNVrjJiB672vMLHxqHMbYouRfZ46m3bafryjQQPdts7m4Mhk",
  "key1": "VSn8dV2q8JMUVoTFCd2qxH21B2A77hqwvAqozNZU9Hh3qzARiEpKnnsaWq68NcWyfYHrNd2KrDicYCm6HSHAah8",
  "key2": "4koFXgYYq3WzSWJBioS9gJSWcc85KUnqGfbN3i7weFgPjLvFGo7xBX9VAZeHYNQYk2rJWm1fGEomzxc6fARED8uu",
  "key3": "3yccwbA6PyGYPmrBPfUn3ndo78YQ81G2jS3Ft8Y3W8YDtV66sJcJwbXeq51g2TEd1EusFktxdSvvY3o6w7unJ5Pa",
  "key4": "KxcrJrxrKUGhTexzkKw25agpGArjaeuKBZahK3YPXcFvSV9Bd6B9oq98pXbPwVch9rNKRQTsJiKtm3MYQKhh11W",
  "key5": "32p7ej3HmiRDEo1zQyPtUsnNQ7K6GK7zLdnFWYME6G5f9LyLyyTRmPSQisCbjoBL4NkYAxPKj9yeXZ6RhUCE1SQf",
  "key6": "65gxshuyo4YGScH8S1kNweYmPgH2EDfp2ogLyX27gs8LcZQuFfSS7pB94SyRCg1xLDYGCAq2rtv6b3XmPGJau94G",
  "key7": "NyW3bo89C4prUcKTVPmRdGQGMpRtYuM52ggarUQKvYvjCAAFezDULHkSaL8j2fwCdijbWNVELinHMMsX1uYEngV",
  "key8": "2QXwaTQcTbn6a7ZUsWQdKQRNyYFnYuLDy8Mu9hZihX1E5rD26cWcp4Lcjt131AihfYV5BSJvrDuTsyDmiPuoZL5L",
  "key9": "32jhhUdqgdHRPKURkW8ZzowzWX4XPmovFznYEY93uL6HEN2yNeZQTHqzgNi9LRTioepJ97upaYhpj5jtPNCiFYXa",
  "key10": "EK2H6XipPL6Ewr5HeJxfW1a5Xr2K9MforgmY2QZi8ptmiLTBScigAQnAn56HnaSY8NxJKu2o81BcVLuaXV2o9em",
  "key11": "5xJ4ZdEPze9UUiixXjbjdSBfDGrZQnUw141zfPt4jM1CHMESVDBhtKeGWwQ1gWWNSsHE6mJFN7YLbFshGBrYGnjS",
  "key12": "4puNSxQ4JKY2HycPBZCLnFAQHpvM6dP8JUhqPNwMuMW4Q3BGQUJvK9WC3p7BfZTk7o3QaWyGdBnpnGWnBFPqZQTz",
  "key13": "2tEwNkz5MGaLFBxhENgcdEBRPyYAW8qoaLMUiWuXquwGnDiCAiHmDYbjJc5zRhdJGjkovKkZAbzAgfAEK9wTSQZw",
  "key14": "5MF9twXD7nd9UXE956TCw5XdGffk78FkExudmjwEUxfnPp4FS5cec7dtNnfMFMBTQnzRdjk3oECt1RyuzipM9LJL",
  "key15": "HxK6jwdq5q6XdsXPLrj3UGzr1pmshR5xECFwRJp5vYLB7vRWfA5GZjRGS4m2a8wHxL7kPWEoVvkFySw9DJaCKXM",
  "key16": "2sDbPWgwwT7WC1vtAJHTRAEMrjWK1y8LsAVbkQrdMitxb8p3aH1R7ghV7Hc544b2Zn71WEctaU2wpYDZ9nP8JK4",
  "key17": "4RSHkbQQWAQp853FdSw2akLjtMgcLPE3CpFLFPpT7ZiX9axRwTnwTuAazzNqqTfq2uvUZjysp3nAUKhVzonMDwAZ",
  "key18": "4mGo4ZjnFsSDvntKTCHKsW6rv7KgsLzZyDb7WCKx3xxqzxyQPnkukV7KxyD8PY31eCZqK7b8crwuiyK2c641ANJ4",
  "key19": "2hyhKoY7TeWhuGCKCic8t2B4xSzFWQ9m3DZZMLNXV7YiaxyPg7QhvCke83J9jwVZz1x3QnQXDdtfjMcJbQ3Kc6ka",
  "key20": "5Q6QRfbNnBEi5GFPCMuaq9pWvccJQu3qSsBBpUzbsvqxkmMekCBcSiASWoWWcsToZmhrBAB2F9mQGGZe7vdnNYz5",
  "key21": "4qRo7hVhKX35opUZxgH3EhCSzoQ1dRLYsALTbLY73FA9ef53kSvMusnpQUeZGBBbKpEU3rw5UZoyXzxm13zDPceb",
  "key22": "3UEFsnj7kDKRvJzwpewK3rdTQLh9pQJAdmxBbEVaE5ZpJRA7tDSUNJU4MuuobYJG1gCDH7wx18NGEiNDnc73ELLm",
  "key23": "qZHdSZwJ3tUsbmYrqy6sxpEQYHcRH9GmwDXz9MU8uDsJQfxpPbn6hnmkEya9E3ce1ZDCvqAWZWHS23u349pfvxL",
  "key24": "3PYBNjuDmKmQXNMudmhBmxvRXU52xg8ca7EQYkn4AL5SAuZWEfJXRG5Mh9RFZs95upJAE8yVDVv6mj4rdMcfA4q9",
  "key25": "4Rc2trg1ui114rwSoRauQEPpeni5crPDMaK3UsbAv7dq9XYpi45mtSJbxxZiM1DRq3Ug5SVcdKSe4Lhdk7cSpyPH",
  "key26": "2PAB2P51M1Z7GxZEQKxvcqtk97DYibziK2NqFPJwLt3DRDMi5ZsbJsY8mY8u6qDvd1hnf97weZsC9yrjP9rxYRUm",
  "key27": "4ZwhBHoKsPFXFvnZRZozTe8MhiSLsvdtVwGhsLMQyHzesa1YeoESvkhZzoSih8fwPmbQm1BNDkzsjLgNnJxMyJSt",
  "key28": "2ou2VffyuTPLb93zoHpQPDX1kUVNpEZXB1WmvsnJTudVZmHz85oNJt8auKc1BhaoJzkDkMpsqWnrGn2KuxfPMfpb",
  "key29": "5Dy6mf6Y3eqpWLtSeowcBTpFwPrijH79hDjdX6yJVkEQ3YJERchBRgX97NiGWiEo7a2Zt2Fvft2HQqt3rovq4y7e",
  "key30": "59h1QGq2NcWz2wBfhp2iVxmquBu4RiDHFLknSydhGGqW3F9XCn7LrJWEs6K7PzBFq6WUyn3C5tkPpkperBvHuVsD",
  "key31": "XpW142sXmVrjoTCeXfCQAaqXx1qLqZnjtgvPnBeCxFk9Eg7Z97mgG7W1GCfNyZM7XAocmwFheusEK8UrEJDTpd9",
  "key32": "3nHYJGt53tCvPMPkfYytsgYBRbZiTqTuJJxoXc5BWC5dJ7keLCoFugtzq7PLRKe4jYirgd1bv5T1jGFH7HK6sE1J",
  "key33": "2antBsFbF1ZYhCbvYromz2a8rt6P92pj8dCNXUfQFEPAWnGP1ozyK7zhHJJ2ge62C9pmSDHd8hw9vtzGGqgaspus",
  "key34": "5nVARduLZebsCo8cHXFKMvfAs4JUEJYiYqNytDFJddqpA6DUJB3vRcfuUBZ1zRtdTksskERRpxL1Wd3vdkxrfNn",
  "key35": "yvCNC1HWainxhYRTVXgLqDpPKbeZjdaXcj1Qmg451q3SvYQxaQVDGTaESUzeQA8ANrWHL9r1oNpZtj9SvjbkTZY",
  "key36": "4QrPUqrq4BfCWrpNLfPDWtH7AehftH4xdvXhoJEgJ68sT86ffocVcjtwyFZoL9WAyuY86RrD6iu91ec6fv7NEJsk",
  "key37": "5G2kJanbFZjyYR5Zb48FkQCvN8jbSHxyoqNzqvRyRKsBmN2ebNyHLybUwVNPHt57VKDZ5RXGTSfo1Q8EeqGSbap9",
  "key38": "2Gu3yNAXRYEEmcLeNDYy3rsXs86MrdfMWwZDAkYmvL3owc2HifgRxVoMCJPpUv2dfyPDxrZMUPcsRvUN5c5pqSDx"
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
