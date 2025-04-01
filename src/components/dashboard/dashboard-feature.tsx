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
    "41dsrmrPApVakZ837CYLV3yYNNUid64AusqN2vwo38p8vYDNba6bBn6fWMrLqAryDLLHQuXtSdgXmfJhMDGLgcqi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "tW4xtzQFGqqXnEa57EaXZKdqbFGskziXzLinMAw44StvjanUQhjn5dcHbixVHdaaS9VxgNGPmRm9sPxAwP6KdBQ",
  "key1": "62Avupo9sXVJGrXkAwH2tk7mKQzJtZznLFzuJ3qMGawn3ann3eMghvSYyuR5N12tqjwEw5tBTw39taFLnrBvyzK8",
  "key2": "5MBkwFHqL1YJGoC7bF2AyR31Se7p5qr4kuqxLn9kFtoA5LmwBJtnkM3fvynxY88xYTjZGP3tHzZ6TJgxHinxU5qL",
  "key3": "5NhnQE3EtwnhcDhKcffMcVLxXB6xL1cLQPkKJSXD3QfxSgYKUrnNJFejvPqLC1dyWSj3cgoThokQanUCWhEE9RcL",
  "key4": "2RdjEGEfNCXuwx1qLQPvBRiKHYwvUrrQLJvkP62Ya3Va5GgPL8Mio1pa2RjmV4XJQ1Fttv1eC4MbxmXLQNFZGn36",
  "key5": "3dCNzKTpn84iJ5PyfgtXBDbQqyovmRv6GrbygxdfvaZ8fW9d9c9ag1RY55a6if7nCQJ5GHA6x4r9NoWWm1K5JXM5",
  "key6": "3aQq58E1Yq5fLEXABWHxqBsBRuY2iDUuWdr7jNKK9Sw4JMWpoTMtqpenmVSPMTAn1K6Pfi2K58TgmZGjp8aMcVBV",
  "key7": "3szaRNFJQnHUxHp8g2aWyCzCnjJnGcdgKHn5LqpMkaZjm6u7PU3gxvxxd8Nn3WjT3vZ1btpu3H97w6SBxLpTjt81",
  "key8": "3VctRXJR6msukgYrE2wSzdk5tDLmdFx3w88GPvv7xRS6dqWgAfvPY8z2AKMGV7we8zr9ox5RxzViDMXaY2L4YTz1",
  "key9": "3nVPNKFg6pCMVQQMvqRRBuXyZNnjbSfbfQssUwMEAeZ6TwHYfoxKmndmCjGB17pJVpEevoGbzAcnorsx95FQcmRR",
  "key10": "2DFF6KwyxZ3ejcpCigbmskbKxSPP9GjnWTqP1ddb5n1VWkghCdBqQmEHX7SKeZeckEqzZRaCZfTqTjYyigxzSpn3",
  "key11": "wXx7vTEHiWndDx2siYEGVnqKdEgLkAjkjXNme2No2bW77KRmadnJc1YFB6uqCoQFkGQyTe8nvfPZ732ee1tLMDu",
  "key12": "5BzdUC2St8xM75PLvwe9rT17CwpLXRPM4sfbFmPsSgGknZqndA2tF45Cd5bvJJjLVK7g8Q9UPukDt7uEMWrJYGri",
  "key13": "KzTQRpxfuaDjfhcmS4UtgmAN8Eq2BqxZuZrCMzcBVN98AfUupgizV5A1a6g54G6ypqdUT3Wg58c2PLwAssuQUrn",
  "key14": "5NW8YG8ZR84THrY3tPiSu7Uegyf4HDP18KyfUj8vbuyv4J6PznyCojX8kuPR38DWia7gQRdTLFgsSu2fXLedubFR",
  "key15": "2zVvCfGGRj48UzkmmKXCj6g881rbLC8rrfTDK77tQa2pbrokmHYcQNTgMV8DXTPZQ7E6KLwYeeF4ZVSco7X29FYz",
  "key16": "2umeLWhzTnYSxdF5deHkwDXuhucdqhUiLCFrXPm822PLXv9QT7kZd1huT2YVkyyGcn7wX5wetcp3CJeKMJap1zeZ",
  "key17": "2p3xaSmxnXvsBVe1NtHs2Sh7C3wK2kRC1v9m445TmSzyAGY61amzxnbiJfMrkWVGQL8o3aWVKWs8yMbSyQzdf8ad",
  "key18": "2j5p8fWVGccrq4G3PTF9GVganEv9VFN69Epf4da99ypqDLf2RUDippefiyDn2wu7W5pEeeniYCUbSXjCmnGeCs43",
  "key19": "gMZbpXxD6d77cfaMd26iFb3TezJLiX1b2zBtgTL5iqg8RxCbKVBU51JEWDyU6cwQzrCP7J6MVwYZfTo98BqKu78",
  "key20": "2L92BUkHcWFw2CYdUwhdR7H3cQuTG9Yi79f9aiwNusun3pShJtXUWV6bihhA2k4FTsj3rWJMe6d5MSdwX6EP676M",
  "key21": "4VmwB7Qz7rMm2d419ymBRxETsoB5j5hNqJ35KHQcPKZfF5beyJG2vAL3kA5fMsZQeV1hfQjPQWQYSYwbocdZEL3b",
  "key22": "32XHLwNMR9B66dpfLPpzCEN3J6kC64wFAaWDNCkeCoWkuVeWUmh6gbDf7vJ7zrpWT75TrEkeEJKgvsgNz35B4ctJ",
  "key23": "23gPMcSuAzD8WfkyT4TGuFSBP4UBpBgpQyShJRkPTFtqeiQuHzYAEW83YzU9Br1uHdSbytm2zCZxXXpZojZSYNSt",
  "key24": "37j1AnmFsPLWuqeKSV9uEW6Y78rJcasJESPezY9SEx7k3NieoSc6hAUrhkjiXkfzYZNxYtzejCKieMaBHfhdjtk6",
  "key25": "4knWBHMFHaNWx1hZ4Rwi5CHyR15mLqQciKn8mBRcxyWNjF9JGcLGzXsDzXnvTifoz9Na7GzUWdRwbwkEW4jwcURo",
  "key26": "3eNZCqcETniWxLPNFbvWajnNQ41jLVcMcNNZQdbQsSPSHxKsbqHn4wFmUAdg4YQ2AmWcBAZkfuy1uFYruYYWqmQj",
  "key27": "2jHo8M67TgjB8JmUrQU2Tia1m21ViHJTfXxzoDeDu4EqY8XN8zfDVHE9b2LBNJdQmmdwUykoTpotHxzLvtfuktZz",
  "key28": "4o3KMXEjhtxHsS9VNyojD1fxpaSDGPyL7TziYD5SETUJWToCNyZQ62duPXHJwSyj9vmrz68qcpG9vrAmLzfLKZZF",
  "key29": "66My4j8KdGP6U8y488XqDu2gWLJTyzsNA2WPTMtg2MgjTyAiD1ZiTQEiXDsKsrLHkEy1R3tmLfZF4txqGcoYjAct",
  "key30": "39KACJgyGehVksNGK7C44kWvvWGqBUCsuxtyETEwyDEZYXP3GMxkNLRxgmboStTaks2ZND8FCaUqQmSBuZa6CHdU",
  "key31": "66bPRqejKSp9b7t2aHmkLqYCjic1d7pX4YqBM4g8bgMpCc4BSjhfMxGWVr8k5vGyFyW228QAnYspSGxKtpUR39TV",
  "key32": "34r7Ru3NrtnPdSGWGisn6HPkSzZ7uZdZX9gYwureTJ1JVMiG7zfVPLXtZURsQsUgFb2Dq7f158hyqbhF7aVCHJcG",
  "key33": "2KmNU4W6p9b3YwFXiNnpAwygxauoZH2N6VS7VAzcSE4RpPxVuCGVnaDWhgrszqWca9yqi7H6dqBPNX38m8Q7msRA",
  "key34": "3PY3NaW7Xoa5g62QFZrEEMfVnRcfkgiqYc5vBVQJzNSY9yKfj8tfK1ZCsdvMoTwbaWvivTGron3XvgKiPZc9AcUf",
  "key35": "sjy7p4Z9fL3LqvqoAnfMnQAF667zcPXdRy3sN9tAsqc1VHCy5w6KC6nkf2cLfcPYuZP5SvTPSuhwjSwZayCcEiT",
  "key36": "43HgyZuzV4ze2r49k6fg9zeUknqu1WsNAqTmQ7WVqt2Vz11E3p18ucQntQqCzCprpp1sADTGy9Mq9EQUnYzxN69p",
  "key37": "5BheFFbWwUKu3swWkLyBg8F4nbp1kdiLDJqEzDJcenB7TNfC179mchhgLnRxQo4Ezo78B1xifLGrBnc2do9HxxDQ",
  "key38": "3Wp3zM9yGL61kdJKB13UVutTbsQzAsYpDAPeWcUQCr8NW3a6WBXY6eTraaqhcKnS3TMBwof8gALjMkdLFJihybyT",
  "key39": "2gJcyk2jcJBA7Cutje2Gz8GHEiLtPrVXBx8qf78uXdQSs42rXME2RoKfAhLYx5qF2VSR7vJJfEDjMAPGp1CwKkPA"
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
