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
    "4FMbdkBtcY2CivuQeP8SdcxMhsduuktNuj7vbNvSQit7gjbbfmMJsfYdYxhQTmRwzVEJGU3a83yPYcJsDTmibgsx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ereWSCme14TPYvLiraz8zNMCTQnT12XKhzdtQJMJvMhZxQXYkHfM3NSufZhn9Zv3Pt2XqsggWsuXKifu9HaUyqk",
  "key1": "3d8HWe9rpPFiYB5YcCHKoupHzvdeeLVNVuY5RRvFkVT25j1wtyAhxBTyihkNWp9YiMS3NyyDEeY95Tr7Bh3dCnkb",
  "key2": "3MGkzyHaBnNYYtNqS6aVcphjbWhts1AN7bCD93FjxYVC1QfwWKVfquc8jY366AMoVByBQtgJc52XG1TNyNaEpsXi",
  "key3": "2kAWc1Jm5HpEP7Uxvi9kcuoujzvDyHWfj6Scj1naZjSkYwwFdHuPjGyYpLehZaLGq4iSB6K6LRs3ywPwnuf2rZZ7",
  "key4": "5CF9S9dqPDhuGuUcz9ubkvUwjJNKBhMAZA8NbiPdKmB2Hvru2ue4YGMZ6cVJQ75MXGWBe3JwM69shwGFES1rghyw",
  "key5": "4KcFuE2eLw7aFKgMw7zDgWRSUaAiBvVG8nU7wpiXTxfbnxeJLPmYUJyo61Q27kpogKJQfvkB9xkYoeP7ntEmm1M8",
  "key6": "67XE1w75tuAPoeiHXbpQamoyu7fUXopoLqnoAce1Ry82KsJPK2VUYHRABEDuQurjRDbe4AdTyvgsc9iWDuzMFHu8",
  "key7": "3YGsXXiN5r4e4JX5w41b4xppgyvffUJMqTVsGExNhYAqUzRmWHKUXYskW1c7UwfX1oaNQxWqL2xeGxDupJNjBeVp",
  "key8": "3pzusCHcGTGpdXQjrD8ugZLVk7Uot6YZwZpwjSH6WgzmAxUdnbh6XDBE3nKXuQpweiqCUnzy67nwYxRQSvp41xkv",
  "key9": "2YTiHwX9vqs6rh9zNrnWXbJoJU4TnCdinzYBcewmmaFAzMTVpfdUhEE7UmoLU9q2SihtLozA8qp42WiH4GEcsySH",
  "key10": "4FmPwJj3wtFs7myFo1FF4ubX985mQX7MQ4riiewCCKMCU3rU1aFp5HQQCoWsgFJUFmfxQwavcEpNAG4PrZzq8XQT",
  "key11": "2aMR6zTtSGo9AkXEacL1kbfbxWGrxqXjpR2kHez174nwNt7xcjvXmvPMwqgZwoWC7KmYGK2cfnAK8h1yKeoPZ9o8",
  "key12": "48KUFgysKBdNKa2tRv7nTJSGHF9EaguqafC5iXLL8LBPe5HUFpEtxtV7APCLuoizaVZSHYNnY435AtN5vWGGYgbu",
  "key13": "4bQpkP9J93sGz5P9XafsFVLc3GZ3icFKDqSnP5C6Y4SMh4taCSHw7LV4VpUtbjuFvezUXqpcmuvebkNSJH3UwBxx",
  "key14": "55PKuGmJR7zSMy2fKpekbhyC7hqtyAEfJwgh2miC7g9VdS7ZHfVeqMg7m35vX1kYisC1FFX65iVaxp8v36XVkxS4",
  "key15": "5qSUjdN7MsU6bzk3pDyc5G22qopj2np5puu4KmH36hjGGw4Z5jys5nqScefjaNbVmsh7fUVoVtCqSLechNEbzmvh",
  "key16": "bEr412wYaEkAb3hoKfz3DB6ffeCjP3oQSYnMzWPzyhjrt3RdWh6fwFdtcDvoy5pHGgjK9LPznJ2nC2GwXHcUgWx",
  "key17": "5E5QE34m94uHFvM8AX7fiFx24kzppyJMsbxdDCwpXaAFVXVvVFKdvTKCgWeMeZEXjo2rM3jJdYeDxUVYkN2LVTLo",
  "key18": "4dMSuwU7yPRtPKVPTkMgFGa689jMtRpHCccKHheT8xqPxix544QzppLqXGhu21yGkgP8hF7SqprowSmoKjJYbERJ",
  "key19": "4ie1MFsAPPyzKbVoMaCSxTVKnNhrz6iwkYUZNfrDoBq2kFUxYpqbA1QUaoysnHV56vyv1JaJ2n1ogVvGaAPkhXh8",
  "key20": "2mHxYc2D5iQ2yyBaG1Fpc2FG7RpAfB1Mt7cuAbctKgRyrGZtT5ygFwP1MVWzZKT5VkMkvDEWYes8FpD3TwW2TYV7",
  "key21": "3pRpBigateEvvvGMrR9mTBzQqJdahUzHz9FJrAWWxELZj4ref7WiBdNZ3q49yUwZaf26rqKok8u1feR2KzeKypqf",
  "key22": "4nWmG8ui1VDE5mqqSqhxYe1dMKv9UC365osJBsGKquErVPj4jcCRMryMPXypQW8rNiYnZyLNeVibm5EyeLYDdT1t",
  "key23": "2siKPSTN4cWsjXX1DWmJw455pdt9FWNpPHMLk4nNh8hoBi6A3Y62o8zuW94Xdgp7YgvUsNcV1hMqfPTvJH9e5Z1s",
  "key24": "3CYnKfrXDFMvkrwDZwV4Rou7osLf3rjKcWj2JTkfhdtcnMCwVugxAaNiWwGdnVUbR9eu67Rn5kjqg4PeF57XM7Go",
  "key25": "5BXLV5HZUVeJBMQnjQQ4BZXEvvKwak1enHgFY4Gy8ZxBdqV2K2yGsLCCLhJkC5y6DNLGdZppok4kza61akQChX4u",
  "key26": "4n4NDCh5UPve94SSrvw1mMQgNzCep9ox1uQFkBr7qFmeFDcMGMGVGr4mnhXEcmDtUDP4fLgkc9oewfriRtJW878V",
  "key27": "4f9BrrovfDwNQvxTx78eryy2h2ref4iCXBLMx62WR6UWNcQthdmwtAr2SQvqtLi6Tti6qPoGZ4s2X9UzYaD1PUqa",
  "key28": "q1h5RwY2UTHFAHyKqqSSe2vJ6jxo6McCpc9nkZ5iPHADsHyGEXx3mmforGig7rvZJ2MY33Y2zobr6zsZ24zDhnD",
  "key29": "jMikeY6ALTsFtRB7JwVPnWiN5wrTUDFV5QtXinUxKU16SYfiyzy16eN5q8UfRHmtW1JxfTc6xHqNXjA1obUPNKb",
  "key30": "4G8n8hEj3pXtdMegs7mBLXbfD2YcfZZwD7i24HFwgUpLSwmwf6qsquVxqLv7VvfGMoMhk3NeMdUV8uBBuTPuqqYC",
  "key31": "5YUhS28J7dDNzCnLFy2Uwm2KHkYUWCc87mxQKafNcNABc15UJLaibH8Q4n9FKu8RXirt69bRZgK3goEVu5RKZXuE",
  "key32": "267rmUuBKwumXqWACgH6EZur5kdNAdEAMsyZv5PW83dKKm5fpU1PW3vtEm9Git7XnRzedkHygTR7z9GmmTAJGLJA",
  "key33": "4zKUddMMBmTS1xEGLdczuPFT8k1aDsExy7csjrEgHbfaD5oz4pHrqxqYHiqnaYMt9RhdEq23NT8aj6jq1hVvJ5V7",
  "key34": "2MW6MTiimo4stbCUvT2NomM8qg9c6C6TsnuGumYEf7Chjj7EkAFewDRKFcK6ZTsHsg6iJRpZj4zECfTN3TCdatwh",
  "key35": "4GwjDt97oSBHVL33utTCXD7AnUs6e7FWH81GtWXNkuLdT9vAYwD4nNScmYL2pz4C9DCK8CgWNebDNeV5DPaiUs2K",
  "key36": "YQHdRNN9cWrbwSLVScqgSwJAKrvY1vRLsurcAF2x9ghYFyihbcK9wW3a5oKY7V2DeTv6VHWVcagC2sT34JFNsj9",
  "key37": "3o1GDvLHcGCKWD4Awhe5juyh13DcwcK9Cdv3EErMU94CgnvNsN8ArvJGB3buNWw91x43vjDh1NXUVS99exGChRDB",
  "key38": "4N3AZddnv84aVsPCuyRbzsw2w8Ba8RUH529y5FvwXXfxvu3p4uzfNduddWDSKVQvoR3hof8QTGFmZHegLebXaHu8",
  "key39": "5xH43GCkxSY8bPZCvJnLTcP5rZrfiSPvKcXKGeZeWiRS3s4QJ88SvUbNCUwQnbMxtX2GNZXF7k3irKK6Q5xcV2NE",
  "key40": "2rPTANLBiMufsK5hvNDPzpYEnbE7wXmKZGzJ2WcN5nF7YxDFkYFL2JRrsUf8yF6ttF8woMoAG6bEmsH3ik5FLBr6",
  "key41": "vtdDt4jbJJ7pFDDhxRUjzqFDpyv8xu11q4qqeshKMEZnPaRJJtS1dsTsU9SipC7PZZWAkuUUjeZkf2TE8xP8t3S"
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
