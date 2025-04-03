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
    "3r8B19S4QtbtXpak5R73nRZSdJ5tWKHY4qmPpUmZLnfSHypu5apZmh3a6SbkmiKE1AkJLQZ5m7d83CtC5VAJH9Yy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2HVUNrXesXTUW8SmJT2ga3FCW6oef9G6KiEBsBLdgYd4Jbr9ZaEs2vQCwes7KNkJocdBVWCPzRV5KPYgiqkJmzFo",
  "key1": "K8s3mfpS7MJpRsPRjvyQvJQbcQdryVo47aQCM4dRQ1VeSZodURUMvyZ6rZNGyHGnGzHSrN1jcyzmmwXyZ2cqQYS",
  "key2": "2ZQpt8X7QN1WUfuXQtLSjDA4x85BBr1zV3fXZSWgBnw1gnXmhjhJb5uCcG3zwPL1CqV84ZpYxW6qtAKxK9ML4LK7",
  "key3": "2puJjNgk6N5a17qksQUJRB8u8r8BSozzEFYCiFSD591cHKVARQGx22JfrS2KycKKmbEAWeHcdXbrrt3ghznLPZ24",
  "key4": "4pJmJhcMXtABsjD2ToufHNvGjGevpGNmTYA5kQZWEo32TsrWArmqPQvyTVD7P49jCP65zL7V2wCcMiT5WV6eb6dX",
  "key5": "v6w5gYW1MXdRK4bBAqsjTiQrUBm4sYLRUxhoxwjaFz8KVE4dmW1srS6ckC59Q8EQRgrKkADDoiGw6uCPUyxtSQ6",
  "key6": "4SjKLn5tVpQdGZGzUBquURJ1njbbt9YTbNbcmtJ4Rj9piQuzujRqfoG3yRRgM2fiBRx4qSc11L9WSbANbQ7Ve6iW",
  "key7": "21dXZFcNbkt6FVYiSDDqHYG3pCVxiWFPe82yrYFcuitKn9yD6NF9gggvY1L5PcZxWwLnwqFSvde9uvM9gVHXXJcJ",
  "key8": "43r2tkXck1i4DwQL7KXywdZ5KM7rqcLfKtXCzGNJcRb6VTrKtHDevUdxxSinYProiASZ4rr3K6jV83ASkq7RzAuo",
  "key9": "3KYuCWNUXF5bgfidrR51EQWLsWNEhxJQvMjoKLvMRedw4mQ3mQkC3cvNMrqPcLxQ1GQZNcAbKYYzAJq3jSEFSYos",
  "key10": "2tCpbRdMbHKZcNtX7QBmJ5XEsadEUa4JN7hz5ZYi9jWU6SnLZns3r1H82di8NADgGUn84PeHM3UNY722b8ocqUW7",
  "key11": "3GyRr2eBxwF1AhiJbjetyZdq1FQechnCpNGiwHTWS6FPTsCaiWQY5kPsSVoAfZ7ZpqxSpGFnE8c5YksJJVostUqn",
  "key12": "cjmcNUzf5fmihqW2zh9heApctHrPQcoUtv5nYeRGtVUbyKnm8AyLXJgpEduHFnVYhBRZP6RnyiWWC5ghtW4mr4G",
  "key13": "4UMNBNsKERuejpStqxfNpiDorsUtrJrMg6hzbQqwvhmuJ1CCpP5vnyJemKffpKsci7nXTVGKss9FdguERKv89Ab1",
  "key14": "2J9aQV38ip58vHd3zgRs7tVbo5wuKx7KR9Gh2EhT3LKH2EZhJM9cWUXDHUErTPLJ7iqyctfDhL5Rf9AVotqocGHR",
  "key15": "5t53hBWeKmLi8Sw1J6vAXxgnF2zGMtyzgihLr8WPtebcoHMZCcNK97Kz7QMx5WcsdTEYAKUNiGAyrAr2FR2vfzSq",
  "key16": "2gTzi1njm5oQLh71ctYVJo9an14LdhJxnXKQrk9D6CtvYbd9CPpBxGGtP6CSZw3z4BRTUqL1R3qoQcUkQKZTq16u",
  "key17": "2Aw5p4N1eKGTmnz9Un5tKXdV4U6Q18xXRr4p3vZ9tYgEa7GB5Vb8M1WqrUeSGn12X98a1oBRfy8tpSqdhdy5Zmbd",
  "key18": "4xa1hVPdh7iwz3Tx65ZYsU8TYkLtTiL2Lv51NnCM3KsrNX3G2CfDzZfBg4bJ6ETzrEEu3TXRp91nAQibPFbeQDST",
  "key19": "2sWptTAw8JZ3m7YU1aXiN2EvEFRVqgLoiWyXw8Ejo4SDmfuuQFXhj97Pd6eERvZEGFzey4g29SWUhFYxqmsG21an",
  "key20": "2sbeS7D6e92U68TEYvYCG7ndM55MQsBpvUZvxwoiNvpEXvE5b2CytN9VVt263pVcMjqT8fUQwaA7sjP95jrxKPmc",
  "key21": "59MdQQ3AiL92JQi9vbv5JMNVLJnsms5DnRNkVRiottT6kvCrnuC3T1QMgZchvUdAdfmUsrGUJcC2CaE4acSzS1WF",
  "key22": "2X8RJ71QVQykVxDSq9phEeeYn26NQtEBxDWFB1T2P2dvT7xYHV43Lt9PKxThhDNUuA1NBqqbcbGNUaCc1HphuwJM",
  "key23": "5sa7z6cV3ThsHohfvrwQNDSZtqe1pjdzDs9LB9Jr7RCzVTG1g5TiVpCndcj6dq25E9Kfzjuh5WLmcaxzt6TtnFhp",
  "key24": "2H1dkaqcui25YJJ8echnhog8jtD1JWwvyUhFXCZrb9RQUeXpfrbuWFcneJf9nbAHf4ETmga4LrS8Z7Hiv5BqLH1J",
  "key25": "f7QaBHDRo8hiPBvvjyowxXV5J4vSrrbzr1MsBPo9RjYTLnJnjTmYK9mcWGSq8s5msS4XTotCESCuSd5azRZzsqc",
  "key26": "3q5kE92SHtvbe1uA6o1QqjASnMUQ69qWeZRSQaGe2XeTuLF4aTLGzC5AqTV7y54Mak1qQtGptjqcDkHxyo32Uaj",
  "key27": "3Qh36nmYcQRgZBZM4DAyCdGpXuk18YB25B6nudQyykYJSzQnbb6Hz6a5iPeRzrRPoieaxGD79qG8ncGk9WnMCucQ",
  "key28": "3aAtLmXjQJEsekh7omUgKmshMG5kfvTT4gCaDx5dPXZFPSf11tyDFoPMjYkWEQsTjXsU975t1wNzbxFFmNGGjZZ1",
  "key29": "EvoZNLTxLhcxw48PJJzSXntek3eCWL54jZaqzoMihEe2vkof4cWL1ZmZG7BnTuutCxDEfkhGeqpsBvuidXcS2xG",
  "key30": "3oJZhzdbRsNbpd3P6dj6fo7XQiMXwo8j623hACZLeq2PrCTp67PRoT9huUjgwDc1YCxjwwHRUqBKEehBWVzATog9",
  "key31": "2xY8hCzoQxX6sRkU3zG4BAtGzcFqHTcA4G9FsLFUnQqvU9yB8koinoQuEdg5GRW9uGnV46h1QKH6CCEVvq8fBHH8",
  "key32": "jit2aMn7BNj5JTdkzHB2ydcsq4PwzEVvazNTBPmVdaqmLQxAiTky1sp8uReeZE9RtenwFanmjjYvjE2NW2hjkbX",
  "key33": "3N7VJBqCNc7gLG5Snho7ZvmVWrNN7kxZ53fKRFL87T4UfcXdCDr2zaHZ77TAfuqerP7A8AuEnQUKGsekWZTXokX2",
  "key34": "2J4CUXx2kmPuzD9Jup27wTToiEbagkbJqHFDn7okxbuoRvLPuQqA5tJJchuc1DMFxyYAwhQyPExrW6qEpNH1eUVt",
  "key35": "2cigKB7ZhB3Pgy1LbxtmtskkvLSrU858mbTi5mFw8dJCXNRme3BAVW72SLeBBzAsh2HXPkvqEo9ZhdkqKeEZwHCP",
  "key36": "3qmiRDy8utAnouiKpEFHmYz3fijcHwAcgHCbZAvuWpzp16AjLxQNWcAd2ZiqHkeNQziey1F2DU5bynWQpAkwC6YU",
  "key37": "5XYK4f4bcFk1ADCanEAcWe69UaoJGGYJtxhXkoPuT7ygiyjDgVkW6jQjUe9U2oXdVZ8hfbrs6GVyMqFYerSmEwmm",
  "key38": "3fipsbFweEQqkf6gvohTZtCd63wYHhftQh5VDdpSFqA2jkWUVQecqU5awq1wKX6ukjgjHTYwJubqzTNARcEgv3CH",
  "key39": "5YSrSWeeh6EkX6cmP8ZeNrhsuN4tqVPKFLDsnKhhkYPb9a9R8vb1UGCfpuitZvmQERAy3CphxYZ32YV8UyPVHNit",
  "key40": "2xCCQZH9za9FZ7BLDyYFF1JZ1oomx725HJiybwFfybMR3EietSGjuntCboL4qjbNGbM5Zj3Y2JdEsVsrm6K28y4U",
  "key41": "3Wx95iepZZPNvFugtpygmoJnCbUiYnb7i7ibD8NRVH9NuNVDbgGAzWanKDnGuvrEXii13jvcyuMWAo6bRoaM4vPo",
  "key42": "5Bdj8QTYkK32ofzqFj2qdUbh3En7m6PjFXw1QWsx9FSPkpABD8koMDcX5uiLJbAJ9Pe4wMv2KvJEoMgBTJ1jgvEM",
  "key43": "28edTGDZbG4f8eB2oEtv8WHKRjnxRZUuVvYYvjBiTTn5essuamqqfDq5wwey4BQRTUdNN5MJbgJwinJVzpmfV1i5",
  "key44": "37BJtsUra2f947x34wnqs3GXyqdQzMtbiu1qRJS5ryAupsrmbTSriLFWfcKjqgKZLHy7Aqfc5pVvDRAU2LbnUDqR",
  "key45": "4AAVrFxnWYYYFF3XM1dwLjSvSrBp2j42Tz7qmLuG4Xi79A72LuNPyjhwi5hz6Kz6Z34QTe5TkwCeACRf3u2KKnUr",
  "key46": "2w5oTnt62EgikNoZHDtp42MuVuKP7tFNTHY4rh1T9bFEt7NxVsYPXmgsBPxNNCu7J1Jt1TtRZuk1QaXhR4GoeMAH"
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
