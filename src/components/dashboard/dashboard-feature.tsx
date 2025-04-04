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
    "2uLK67jaCW165sLg7e2pJ6o6S29pEY7g6eYNsExJ1hTwfvSNvsPr2KBza82wxtCbE3sGP6kfaU9DpSdBcFBJtdfr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "A8j61c8b7wFneFjdVifKBBHw4moNvUoy6qypXC6UuwH9Xsxm4dSuHVp8fBT4aHx4CnxjQFyocgkQcw3gprxLuZU",
  "key1": "4k2sj7oLmURmUrTvEmfTUS86zDQZJ3xJ5V9nPARhzL7wqowHzePkBkUxZRnd4cuvSDmbaTrtZYx4Ggy6uW7t5kz4",
  "key2": "z6ZNdFp594f3vt6FhwscWTEJSfvAcieC9D3tMjjPKrU1S8Cd1WSsAfQH9FMzUPVJ4drAzzefUDVY7MSqv6kaCXN",
  "key3": "3ABvZfmV9ds4kKVpivMXK18hnYfuF2HU5k9q43Q3ZKUEC13Tvw4jJB5tgVXWJDb7vwbdGHkkaZ4TU7NTo8cT29B2",
  "key4": "4KtvnrrXQPeoiLWA8mKuxrtXSkJoy4yHvFwPjcrsE4XsK4UrCLRMan646nfq9D3Hbnn8yW5vvxudLbRDsyQZYksp",
  "key5": "56hStCQXoy55qUca17vUaJtNpEkkgxE6wcAkZ71hwE86VZ1LZJBGoLwHuSRgYTPmAP2H3KD22Sxc3wn7hAHSw7aA",
  "key6": "F5oFKHenDRhKirzUxt3sBJPeScNdRFc2d6NJagPiSJ1oTFriheVJoyaimfEvoR7VEXQ8qwdktpJ5tY2nYp3Voic",
  "key7": "ti6yFqpYofwFfA4pwqc55i7Wcsw69oCriAS47jprW2E3y9HjQDNxYX8ebM7FdMwmdvdWhJuEo4eJ2YCHV6RCF18",
  "key8": "arv9XBcB7dYhcYoLpPY7MkWkeSnKbresXmXR3VkMCYpvyzYnRLAC2zHgvVsEjg1KggJzFMyVFajKkHfa6c1Xs8Z",
  "key9": "3u6XXVprdFE7BqHbv1s9UPb4W3xw9KdrRyxdDPs9N88iwUbgjvG4zJnpMxbvFaJsxHFfQEb2wLP3aSCsEQoELtFp",
  "key10": "3ZhctDxT1q8mjhdnEFJFuKFkYNiugCVNiMZFpQiML7terrFy9VmzshLqG2Se6GAE49yXf2DX6RcEKhtn7qawvUwf",
  "key11": "5gRBduaUwbdvTZh5nphEj5Lg2mWhYu6LM14AkRgxTK3o6TW1pBRFguNDrgZn6MUda8bnRVojFJqG9G9hZrWVhUnP",
  "key12": "4gRz4wkAA8kLEfMDmkequVbRgntvq8fPHCw1DkYevjohDE6Fi9bzj7NbA8zcCtvsYaEtwSkKMrajHzFJeN7QoQhU",
  "key13": "4giZkZ1y7hr86zozZN5EpD42MgkHbJBVr3ZzCH49jGnMWHvdqGZujjtYKXVsZPzXBP9qAjzAU2nDKiCND6TWKEJ1",
  "key14": "46oBS195Vuf4DTsx16GMDc4esonGuLvXKz3ZNMTW1PVA3Fq2NiDzuhW51Djn3mVRA3TJaWHzfJLKdyvUznCd4GHe",
  "key15": "8VAMHhZjXfV77ssdQqH9ep3z35B8FZcpwHVWUBomA1cgRdnqRc1qagL6z1ynjUckgTVwu56APEUbqhEeFNSHeMN",
  "key16": "5nTK4r1n2iveTQJj6BthTfj7ekGGnzzZMPvR5pXRKaLtR8ZG841ycSaGsSipVkRyHxMUdDsYLCxE1pmnbhUAPyM1",
  "key17": "8Zur9dDN4svw2uBsrP2aQrrHtURVs6a9fsSSYRVsw85qv2wXrbZVyFvYYVHkWKoPosukmCv1V8GsXPNQTL11ZHc",
  "key18": "C69Y6EQLaiyWwNnUonTdatWLb2Rz8m2US7k7HrtQRNjsPHY4t3BFe8ddjykoC88LnnAZyc4tsVhhMLWYUWk1oGi",
  "key19": "39dyuy3iec9bwLT2ZNjD89EHfKPzGQBqMA1mNNqwjhy4wDmvsFLJ4vmoqT3AQup5zsjMmCmyTUipGccoRkbrSsHj",
  "key20": "KQpfYyZHzu8QudDqpHXJCFapL13Dn7cCjDnjHddEfop2cDSaVE6TmfKurMeVk5D3uhqb6JVTHvmft64DomfHXay",
  "key21": "5xAUH3rqBoEBrx5RP7QDuV2E9D6RB3qNHrVrpqxtKsnwucyZxzYFqKESNvAUxuB3V4rZUausxqL5iYf7VHidC51H",
  "key22": "5ZXgDbz2AXwQ6Rpx6k83rTuiZcscyUtH7XAshE7JegVYYrxKDNo6uHJctZru3QfnPHrU9oWVTGqBXFnEUmCiYrfZ",
  "key23": "3uCjSSFmtcTMj3Cmegjp5qwtBG63TL6Ew9UmUqK7mboTEW9o18cCsb3NJ25oNCMkrqEBQ6MMrU6DwMwXo5LAEhMW",
  "key24": "e1aK7wmvtfP18CZUBR1eptJ2xBjUBKX1feLnsw5DrECBKmXuzfzh1o382RcGWNtS2YcVy6BmCUWR8ZhaevL1WVR",
  "key25": "5RQkib2c2WFdgCpUQmevm8Lu4QwFyeGZhwgVBNbVcfL3g4SEfqbPpNTgHR3QpwKKbYbRiueaTVXwn8L8S3tp7S2Z",
  "key26": "4unkzyZ7fBpCi4weiSk8pk9UX2fXDz9tcARMpU8kVZsqwYJmgfc6q5w9f4N3TLVu7cJSFMQwLhYkmrXh6vSdG3P7",
  "key27": "5i7uPdyaCmkMx3hBVwhkv5tUPwbo3XEaMx6fAWRwFh74GLPeycm2mnogbDUGZuRrzNeg6CVzSh18GEL5MPfGxnHL",
  "key28": "yF9CueGUPjVgSvvyQxEpUpUQc6k8WYYt2otQRuSkh7dTCgXDddJSTWND5w5ts6y2bu7CmTqk9Hzogq24ahJ4u49",
  "key29": "2qDKJueWYnbSAfoWTSvwem6Hr4ns6rTy8dVVZYYavkj9J8YSi8sCpRcEgjweDrAA5FMhNwFyMLrLSJko4Um8YRGe",
  "key30": "4fL13fUo5SsMz8Z8shJhAQwNqkBDAViJobExHcboske8zBoL6FC3bsRdvqQqjPxx69r749nEQA5GbJEWMt6U1gF7",
  "key31": "Xd1zXnJUkA85k7sgvtuDraNaMg2SKMauwij3D99T9Z6psThn9VyCcZXNSxR6FRR2Do6MbobXx3JALXdZ69K4Gpe",
  "key32": "4NUAkeiWs4Eod2m6uwU5yQvQXciibUJdD6AgzWmtK498eGBkAQuRj4RjsPJMEm6cpqKdTgcFe2zom72cTpVfgBJW",
  "key33": "2NmU7VzXNSJc6PzB5df4yNHyjqc3cLYi9LvnHuKSuZtJrNtBYqsPHrwTQk7KTF3gW2j5zQWkuZZCj2r5bKQ4qJgq"
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
