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
    "4FRN8YP23io9JkBN8CrJ5HCkmNadg7qkdixKoo9NHncRtuZsPKBq7ezuFgUE4qBWk7xR3VnwHqHQLwR5nUGPABt8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vAb9gCPkJNK6PKUeXjotibaPbN746WqzspXtp6fAhsffeFJwqBtbC8uwEmTEPjqf9jvfsBAXRCDbz1qoN58fi4a",
  "key1": "39PVWjWPav6BZyFSMfKb5n6MdKzfgkVxPAWRginPryW2UTJxge7uWTbJZ8F3GoT2jxfLFoGq8N3mG9oeaYdDuZxg",
  "key2": "3v38iMZN5XDhuctxgdTH2xHKv74URogQik2hjjo1mV77LYj8t4tTZXhfGvsnkaQg28NcSUt8hQsE7ePnEpBqqgqf",
  "key3": "PX97qMcdCfVfRgkKdGU4xg5Q55eBPMTHwj6Lvh96fWp5eSYVFfETpfpGwt5VW8Xs6cp3J2je7mvNABi4rmeNx8X",
  "key4": "3vhy7jvcRNjgty5QQCvmqsr5GNVy7XajTMtfFGjVfkz9wQxX8zAYGU3mtin4hGHdGQyBwLToSbidtEZrqZtGmfpR",
  "key5": "3cp1VhCJd6JBbQLysStZyrjBjuE4j7fgUjjZmGXZe11ijoV1orNT8t8Bts1DkmdPh5BMZxoMKCJmfnNVJWAekQKD",
  "key6": "53cM6QD7GdjYKvjgxtzjapoDhXQ4d6CMmZjnNohmpWaXNDsX8smcDBEfdTmGKdVoboJRqFdpTsh2UAfcFcFzcYRo",
  "key7": "3qPmcyVEhShxRSfxyBPsaqixjKaZEJDBPZCyofS7SDxP6VHq8wPV2sR1ZN1V5SinpnWwKPjekMqSdTaCYfBVYKrH",
  "key8": "7G2dXxQFrVJtrdd22RnnXxLZEBaaTCexc4RS56Xid395wLjrMM27nAW8cHxbm28W2jrDEvmD7b5kf1bSWZEHR57",
  "key9": "2yx1uA3h5ERE3EhMRDVjoPPV2NBzSx9nyUEDcc5prdwFkqMtrGjnFD4Vbs25xCH26h4AecQtyys5mzXnYXkJ8d1K",
  "key10": "2WQUsAFh693LkNwGm42CA1q5tGn5bmg7xNpBGizsmvn6XMMDGJ2Z11xqB9zPby1TwbQQsk4pJnSLXrYBusxHXNs9",
  "key11": "5wLhBLuGceghugoE5C8kBzqvjyEU24UXH7mEAtbP9RokoEAtMgcq2iiwe2SFvzEv9pNRPXyCJ5hCZug4jZmdcw4m",
  "key12": "3QoAYvz9H7HhLpfev6a9M7Z9uTjuJx5bPT6iiP5oiLe4UtcaPgH6kFmnC5a9WhETruxANHbRBKwbs4PVxQVSnQ4W",
  "key13": "5MwE1vMWrWLeRfA6UkkMsVEdpaSJXb2fELhjURCKv8RKwHCD3LQZvUKmea2r6Mm47wyrjA2sX44DQZwgLXa4YLXX",
  "key14": "2uNWAbHXsKja4UsARKVXkH9r7ouxTUxMVSNZCYHxCSdcB1CrEvzftz5gqywVbKn4fJr1K9ZMawYhWRVGcqZtnG4H",
  "key15": "2GunrSm8cEK6ddrkPYrgszTbuaquhqfgq4B543EzXChYwXgbD6aDYBAKt4p3jWexfDujC3iQ8xvrwpFrERVfs1MM",
  "key16": "5TCbSqs1t4fHxxwsVGAEx5PvKLP8cEEmprrxUTKpnA5SEeuwh4jqo5PkxivWFGazD49FjdkhtxLNtRQxR4Jq9wiq",
  "key17": "2XQZK1wCx3VowTQrnC6WwEQsauAcpqYdBoCX37CtWea1X9c9EefLStQfkaqG11oFt8ys7sSm2pqd878yYctRdSij",
  "key18": "VqBiiWsa5wwzrfwDxcyjBfXkJKnmJr2okXx6hej5ywoH9S3dELdWG6Wuc1ZvZPq32WYPRGAjpL99uVNPjfMwjD4",
  "key19": "2Kmm7duF2YioMdfiJbWnN5XQxCi3aPn6ZdaJGL5tsCJbowBrY6UDusm823T2aCEbUU5d7Wn4kkqPCA6R9jiZkB12",
  "key20": "41tyGt8mhX5oHU8Crpi7dsCrX3N1cgnuhuQ8igzesREbiz8anVsLkub6HdJ9gGY1wB6uW1XYU4Uuv7HPsvd1Ykdu",
  "key21": "4gME7dMk9NkivUYbSSTvgK59MYSq4YgC5LqXG8qsS6AswCNS6CZxYuunseXTHLqBdrmnefkwSDAia7U823FWFjae",
  "key22": "3pCjrctaC3cRJPakaWQTnDnrxHTzjFgakpD7kW4oCXkpgwYRU8ZQ2VfxDNNZhR1G4DsPzNsoU4rK3RTauDiqV6bG",
  "key23": "4HyrXjS6VH2Qgnd9ccyx2wcnfXxmrxd6ebySQb7jZpsY2i6brTrPhz8c1MHckogAbve75Kf1DDAgyc4A4tfwSr5S",
  "key24": "3ZHnkkJs1pffgzQ8CcyrmmeE5tAduY5XoeTdrkMfRNf4tzyJWe5ZJTPRW22TW2F12zzH6WdXNVFZLgCMW7wfj6Lx",
  "key25": "5UvwoK3Y1o2SCY8Djai2BqpG8HPVtKR98nEm4xTKJK1wSLqwAcSc9na9gmKycrEog47oUFg4nPFiGuvAMuxqAjfq",
  "key26": "9HHmwqpYBSRQg7b7wNDCBhP738tiQDBBxWSrFzFR2dupvQxSBnjsLoaQ5gMhWoKcJM8KVsxKM4DRSPLD9kskKDT",
  "key27": "2utPRGYV1RvGetSkv8rt1uYwGDWHhvXxftK3vbJ6qVwkPYZrzCkH4B82hFhiwFyM4yUMbgmadX7mJiZDQPJBGc96",
  "key28": "fiEfckAPzzpoewo9BrwJp8iBvdQCiSRgyUCUG8Hn7YWZHmppCWg3adNFTt8DuC9dPLKhj73e7uGm4Ey1gd5ru8p",
  "key29": "3mAfurkgRWwpgF7pGu9jYEJ6it2itrTF49WTRjTMDKMi9qDNsDfpeWBcDXxsY9d4ykMt1PZ3HNUkqr9WkF58XiK2",
  "key30": "3yENb2WY6Mcjh8SnzBBm6W1JyjbMhVSx4X5D4pJQGxWF711mAo3me9uv87idSqD1Ca8RiAN5Dk24zNiamV56oHq4",
  "key31": "5XXMuEVzNHnhKDTGDKKQMg7afyjrxVEq81bGdQEojQ73swUQRksSUvpivmgDvQi1mGF2gc2xvB9m1gVCtgKGmyyL",
  "key32": "2c92fJek9Twwwd9mnjpGajTYchAv5FzHcndgfSMYKitQxGLBcAcsAhu8M6TQWXKVsqBBydbtDSv5xPQBfo7WpUvq",
  "key33": "3NNYD6E7HcSB7KLUoCVSdN6gUHxafyDT5n2ucLtb5xZ2neq9pqKqhD1hQt5tb1dMjAaF8kAMSd1fvXQaEyVQmaeQ",
  "key34": "wKZJqVK6KnnpSyBPwyC96PPPEQatc5nV85r8KUMZWM9oTMDpefViAsYKZLkBoWQPoGEPHxuJu7L7N8Fo9Wnfxex",
  "key35": "67ZZTJVYVAxFyvNXH1yrj2rg2sEqHPK3Aed4bHkKbE5UCNeLJgoaPBsU6zKyeXd1acQpSzbFX4jz5KeA86nQ1csa",
  "key36": "2KQ2K1mUwvgrwcqtXyuhCXgQJqi8qdr1Jh3V65VNgsR2mf9QsH6wuMy338rq8E6YDxmDxHTTr4eqxwyg8L61dE2D",
  "key37": "5oXxWX4z8WaoZDakyE7xVa4n5ctd9fb49dn6Jf5YqVdhWuQSsDboDMKtJncMFvbNw4eJ2Mezz9QmJc6uPNArxoPw"
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
