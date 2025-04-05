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
    "2n9MgWVxM6K2Y6daVavrLf5Qs2TXTnsu5PaV78gwEKim4N93cvRuEv3TWjb7ic6Vy96t3HBX9uJ24dNMZyyxNQi2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5d24vApeHHeV2t49LkazsjG6zmWcU6nqUd5Dstis3uqcaCfFk1UCWkMeUt2Wu5pJfBRvnd9CUmgPU8tpiK1kZFmV",
  "key1": "4X7bEejpR4iG95dRPvyivcbzvijgyFYaMAPWFYV4Ysn3cXoRaiTJASxB3VDS8maedGEdypWTiAQqf3GtNpfzY59W",
  "key2": "2ZC8K8B3EEXcRWeE1srsS7VvAX6iPqBGpDiJVWGyBKCx7o8SbesHhCKUKyEmWzGyooD57f8DcaSqsSvcxbCu5TxQ",
  "key3": "3gCLZ1gb6NdbC7R18vgtg8F3xvxifoaZc3PMbCi8oRxkS3uuCu36AsGNbJztDB9tEiXy7sW2xQeza3HWkSnyzDie",
  "key4": "5JzzyuGUxumWdSgs9NmXAtR4MYo5KggJGoWWTo61r8oHxH8ugfKypjSbx9eRKAHs3yu4MR1HEMwnsnzbKYkPKoba",
  "key5": "3fMGB4oiMPX1suhDxSYkUKTwqJW3w7f8PevkZ1EsjxhEoMLwj1GXpcnBDg2PiHuwSZd44hXdCwcybXd69uFSPTUf",
  "key6": "2Av7zJRquAw3Li9DftNruzTxMyevQQ1tnJYw48zEz9GPtYJZ91ciM9F6fdKssttF6dsUa8sFx17k35REyYHqDioV",
  "key7": "3kFeGBUNfeU7ybQh5boHyjpNm5fXo2bGGfWQG8FLNaL4MBMsdGRBbRbwYA1RYGwQSEXDDTGgx5kBuLpnfNxEATRL",
  "key8": "JnwdbL5qwhiuM4xpJruzNkeCQWZjopmMTqKMpkj7dbUcCUPrsyuW9y7cMu7FFXd45BBpZ3Kk6x5SodwNw9Vh1Uy",
  "key9": "37AVzCiQftASTU8LV6UE1YQUuY98cRGp4tSTmrDKMijgs5ZwLm2SqWznFZJV5TpjS5QAthaQ1NqTNUNvjHr1vERA",
  "key10": "5nTtHhAS6Gsh5e5WEoD99wrBNR1gnt1AY5NV1KoHYxvX78dASWQNwy3bftgi3ha9NMthZ9Cts5ebRU7UtwRfzAmU",
  "key11": "35Mr9rYLb7sSPBbjTwidkLb5gD6ookDGcGiZA3dGcmWyuS4WUDYuS9cq6HphydT27cVMmM3dUgv1c7JWzEoJWpnP",
  "key12": "5eoGLRgMZ62pFNxLYguqhTXcnZ89CDDMyWYyA5Tnc2vaVLjsNKftZVogxmvB6iynarzK6t4ZbFB6nWZ38ddbP5Na",
  "key13": "4CWZZgxU9H9cAXG2xQyG2gsmvy7xPrUfKx75i7rvwgsEgmJS2s4LFMAUAsLCLX8PnYpEVGkt9thisQRqZcwtf6Lg",
  "key14": "jAu6Mrx5Ld6vQcKrq88StJJmeRszUHawTJTinUqjiwR7hoUDNPCtwmok2eb7n5G6yAi8JPbyNWcR5FVbgMHU8Za",
  "key15": "4QWHbWL2HS1v4bZJiWGZT2gQKgTQLMipmYgVX9Ne2BjxhyjDq7dE7Sseb79R17kkgi6w3cAiT6oBZH9nT4Ro6g94",
  "key16": "28uLuaLFvVLu9HYqayhjxTTN1FfV3UaxC2vURy5fTea2Cse1RBmDibSvm8rHwGnxjBEhoskUrjct87uadAEZKfTU",
  "key17": "337rgYbCXXxeqkKzdiFRySHtnr2Kd4eyBJZka2GpHSZcyfCa2hZdhHAbaKFc8DzkvSMhCqoWtoNnuRvjdXEnL52X",
  "key18": "B3VkQq2UNLh2GRA1JhuiSmCaX3Bpe6tnChoRLwo5sBjYtT3e9FXPtXdfocJy9eVEZNn6zh6tTMBsBjgYbtmMj1Z",
  "key19": "JeX9BPXsd6aDNkrCFxDqHDdgyQhtz43Vyx7JUeA8Gk54C4PxMdsKfvb6cSu56JEeNUZ2RaZnAUcA49WpNHNPRzT",
  "key20": "5Y9tU1Uh3GNJJUuLP1sZsUCyvvWwA6xcy5tPfCj6c1YzSsozjEuph2bwPGXEQRR9VUQVfqMeBHw8MhGaV3fkzF9C",
  "key21": "5MsqxMTqQ46h9yrgqpzcTnFLHSTRj3jYrYvZsobJELxKxf1gbC3jMysgwNa3NnavZ1NGpHcNZYt6c8HPbAHScqQF",
  "key22": "2TsvPGZ2JtCjuSQoqc6St8xBBwkEtCcCknHLnBPiXAKoFB12GW8f9NRHGvVvr1TucoLZCdrDGvVjwnZrxcECsos2",
  "key23": "5ADZ7EXQgMGqhmNDNDEtjg1XQMxNgmMuijxp8q6BMRCF1xtSkdaA2LN5Vi43zxeFmqF8pArU96B3fjoKfFsaserP",
  "key24": "4qjSNtVdLSmZ4sM5LEeTnBVaRGym9g8FzBQoVdn5Y9Yvmzp3h4uHY3XdHFQ8nQeaFDKU3SbxgpPXDEWYoHBUY2qu",
  "key25": "4Xfbzd2AfsodiBG3pK8VrP1FSaMWA7xMGKv1bjDZRcn9MRYrS5JC77crUkF6PCcpHkrJU3uyn5JBUc6Uf1yTYo3g",
  "key26": "4GhWkhtM6Tz65ypwKeCouYjyxLrAJQYNEm43LchxfHZmzDL2dGSQRb53Yi3adEBHoMtRW91314ALGNpJsQLg9Anw",
  "key27": "2amGGNfAdN3LqZFjEhrq3d3qjE2oGJqNW9siGvF7nZVW1JXVQa5qCanBWrVrdJdwrL55qTz524Vs4o75AvwtTgFx",
  "key28": "3H8vJH18jWnkjgzQNvcfGrSe9sq7s6pVUoke71BKw4WDyz6B2Md1o2oyH5T4EGVzuPHsrPFF5LrxZ8nMVDMckJxa",
  "key29": "2nbFURfUTRci4v4LMTazLuGKWW9ZRabCzrsRzMfokhHffd7EftJPV96x4Kx6eTpWcFrNuw7fGk6DDEzEKNSjCca1",
  "key30": "5R5zSmtAfvu1uyc1y4HTmjmuFtZRGjg7EXt1wFqn8iUP7Nt6cUV3FXoWsZ345Noh59g8Sy3bdpRxpNDqPQAUKPCV",
  "key31": "PKTnW6cb26KQpcSwbZ95MMaXzm7WrbdVM9BuLfYLQwLWEcpMAwXtTmTK9NY6Jv36C44vLM7qMauiHfoeBWRgSK8",
  "key32": "3kH5PYzeckoNaYRU53HJEDV7dh5NoCQ125N5XjT2For4xWujQEDyqLEJo3jhf3piNvhnM6Cd1BAh9zWHmzR2VHpM",
  "key33": "5VYv49yjD36xuxR7FAQKJaSCH57kPk8gJtSGnhBtocfFW3mV5rfK8t9eaBaGEoRGUGkjrVfhnW5Ct2WG3V5a6Hnb",
  "key34": "5MGrZMW7V9AkZgsHDZZTrQkwtY91JusebdxH9JpdhrPhNeX5LZy6Vb21iLwViwKCVg2XX77k2mHyoJ219wg1wYdT",
  "key35": "24RjTWdSMGYLnpahFaJCmYFyUBHpcJqVsaKhckVvD9ECCaV7URgkAsFRm8jvL339aQ46og1idqbk36QmbXM5NEt5",
  "key36": "5PtXMkq6fGH6dFoG9KvbkqiWt3ogxbRXbaPhrTwv2rdVSabFanBu21ynN4m6egy9nNp2hegg4yEFBK8rmR4EUWjr",
  "key37": "4B1y9FiDXoC2VaxDTiWDzkzNArQQM9sStk1S1FEeGKjdqUxufFLNehUt4JxAmAWFfd3MvLQ5HqbjbgrcQcPZEEfW",
  "key38": "5MsPb7oUaQ59qdJXHiWGRhoyN9pqcuruf9jGQ4pxCQPmnc9t2ANMEcbotMCRH7rdZmAvdW47U4g7ZRQEZDK5dU3S",
  "key39": "3qzjwJMqjpx7vrBbVuhHWytJ5gJM1CRgpjVdJ5YaycVJdnbLq7shxs7zMNh11YzVg3KmxXZveBpA2TynsseR2zUk"
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
