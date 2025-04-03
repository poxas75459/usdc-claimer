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
    "DoL7EmrC7RN98HcqzDwRWs8EEdYQu819kSK19UeHzWSPTMdtqYfHHg1yJPMCq53HWhbK7DzPxFKhPaEEGhSUdVF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1JuQQSKN4w2txbNcDMHMUoMu8hs41TJthp9vo17dPxRrzXQqFZWau1JimWUxmvTJgL7AYmTCFZRzSVuxrq6nhSG",
  "key1": "64XabgQA8bxHM56xL9jthRtCoJrfK1eUv3E8pLVudfgqhMo63K9Az6WCwKHxKwVB9ajzBTnpcZDiuqzraz1oMqUx",
  "key2": "UkyxgFwDeK6L5KpNapWzZimAdMFXPg45tfsxzh2jkQG6sGkzHM9q7Wkvwb2iMpmqFktUrZ1PwqAL4mVup4Jh7Ka",
  "key3": "5xg6DKmzZZb9dfnuNaDVjjLnaZRh5tpyLpdpBHNQWRzVZmu8RB3Dbf3A5qU31kVwZRK9GDLLUA8sfUUXfHHDwabZ",
  "key4": "eyGAGwBT54LxhyT5w5WTaQ96Bb2MPvd6X8FoGPTQAPPVvFJB9qbTkSwXFLSVYiNp2RaYLss2SakciHun8ENYTii",
  "key5": "44WdLMkodAFhjJckZcb2kvuB55V1YUWHhEv7jyg5BUT8FUPHcCsUS8YqS32Fj4gVKj4KLvxUWTa5w4rwJbuN5vnT",
  "key6": "4cBwarDdpYEBRgtkywV5GdxRUJRcYxtYunqn64FzAnT349WBfrmQaQzyEZig6CUvW6KgKcDFaCynn9kb6dSoFtgS",
  "key7": "4ofrM4swHrD3jUuMeMFjqPbte757GBqjwM7xYCtErKmymw8pk84csTyhXvUUUTkxSz6wsi3ueF1pysotEduq9NCQ",
  "key8": "3Z7WfbUmdR1ZdTWtqDNuYRw2akvU4J3iuVp6hUS95CfuprgiEPVEGxcT4Y6bxYraUfdXWWqznb9MsoE7h2DHnitk",
  "key9": "2uzQAeimUUCDeQJXf9MuRKHhq2rUxsZdaqjnhfEUBf3QK8SF8c55Ctmgf9pzGnVdX7sa6FxVjtdAQsceVsrpqAR6",
  "key10": "3nir6WXw7LNewndemR9Kmd1TvWcuBcEhqq985EFpQ82M6qgG8zuM9yVwyT4mxjgeMxU9RQKXAadKzCcx86bvjNjL",
  "key11": "DxiqKcKudT9pdEN7fnCwH35CrQeSyki9vFQmFy78ZgKzaAeNFNygVxxKCB9dkmN12xzJKtWG7CN5r9HstrrDp3t",
  "key12": "1QanQdqdqE16az3fW9UnXw3zaeLTMzvJdVJDXs1oM5x51KskhGjztiXvHtbhjGibJuKaDraVfmSNZHpjye2uejD",
  "key13": "21dxnbxwGVDsM5B425Zmj6jpv5X9Yru2a41THkMDz9SVyzDnN9jTQnkFE6uMCy3BfcM9bwBmdA7QGBREHv8NxvSt",
  "key14": "4YgxmpQqmmQhEDeYp9v7HKnUqheKqrKYK6YQfUWZfB5Rb7jUJPbzr7VthSNE51xWkbeJX8Uht4nGR19z1SAvW5ZM",
  "key15": "3CHsAoNwQNjMybksPucXgEnunvS15gDs8cw2LB2Cvqc9TCPBVNNdHsGVvf9tdYEZJsbLy1ekAQtaXUhDNgEwrFNP",
  "key16": "51CsbdpcqPARjaRsmd82tmbU5djBeVzYTuTDj1PCqiB1qTzkycwWpt71suok3TwT5GzeZj3pj7ZNRSQNsqkKoST8",
  "key17": "ZikxYBmxUEEFZbv1fLmM214Lj4syCGkbD3gikpNebanSocvhy1rdEUBsy112faK7j8yGBXJ7zUQTg4XXNQzPJUh",
  "key18": "4w3GNMaEkgLrLUZDis6rkd44QNQrJwziqbKn1fjsnGaFrcBQ49Qky9LnZQXW8Nq3rbu78mLofjgxFjCmNjtLh4yN",
  "key19": "5VqW7AqS9dy9oYZD5Rrycx4gQ9EtAgK76GfHnuxtKEt2jE7bUCk7Ubm4rZdphJCHXKkYvtEcQ5uThe9mGpUjq4dB",
  "key20": "u6i133aALqeqBKXD9h2n9678UWDdcvvkePv6bFbH2a3deKRPyGyQo4P1RWaokPXQLmQSrozBGpusxvYe9CvZw33",
  "key21": "7Hz5sxQaCaVCvJW9AHJo5FeNRjo14FsBbXhQj3ecToKrKVj5WSYvhogxeggVVaPtEyL8bJNpar8hngcJfUD76qG",
  "key22": "4zpmcF4JomWR4Zf9seMRRb6zCfr7eRon4cqdv3xxAMdkre8LT16nmcSjKM2iq7LFyooeXDJaY473bpiM2MguciDZ",
  "key23": "3XU2Q1Tzb2HPjCBRtL7YiDEnb1s82Gi7rD13k6ks9K2Kor5meG7ffY6ishSbx8e1X7pBJR6dcxkmm4kzQonMENeL",
  "key24": "4e4ZRYtgPh5ECJP6skkzfQJyQyBRj6nBAyRNpv3AWp5yuZaP26aTfhJnoub9zSrbEEs2Vj7hKSEZZTkjdfap3BT3",
  "key25": "57pHmXmJZYKqfGWLvZs99opTJtP1RYWrRwtgc7oQ2p3id74cNj1CX58nTPwTvo13kMJ6acBdwKvTv7AxNsjPsLrg",
  "key26": "288Ub3mqiGEPDPQV3XrT5N3Nt5HcuffK6cK9NCgcAq1g23pddQJGtEYzi4kFmFotM9DatzuyEgsvrH9NDHbnNenC",
  "key27": "EtLE7zhP1wUYB2UNfTnXn8oFHqqSioYFXQoUFzyX1Qb9c7RwcQjrFGrWrkgynM6QzyRqidYVd8oAWJnA3dXj4Ex",
  "key28": "48SGd5HfctSU2yK3vhJmXL31bpQ3VjQw8TEMFbzJ2wRBj5egagj6dCmPToTWF6DM5qbAVyt5CYnhzCuUM2JFLiz8",
  "key29": "4Hn35dP5Kv3ov6LCge3yBK12h7etzAfJTH2SnNX6E5YxqUEMft7Qk88UbVKNo2RtBVWGoaUx5Zf4WEgdAjNrx7ur",
  "key30": "3qHXreHhhE7bPZAWAvBmA2JiTM3GK3rmrHGrmzm1FA9iPLsKrQqiveXzXX5JFkeyXhfd78RYnr8cqEn74rWujHMB",
  "key31": "31PNwUNgbkc543D5Hh7hKPAPNDPhvAr7SP1bPF8oa7Az9RTaiXDYbNxG4fHp1pVksDBBeGGFet2rEwjyKCrZxzqd",
  "key32": "5UuWNgFEXKpMKkhsHZmdaGvwRq1P37bKtJZhXJvgqv1orbhrhdbBpu7jvQ3WTzVUhfu4Gt8ZYq2zZ3nQzJGTUmp2",
  "key33": "yZpQ3ruBmchJYoTbgVewz7xhT84nd35BZFjF9cFhhTLJXKfVg3ApST4pU9CP7yDwYfZboYJ3j4HxbtFvB9kVE2z",
  "key34": "5VucNTiSZMS3Mm6NqYtsHs1HDXNvj6obMz9PQGpyBjG9G1188we7sUc58Wvq8Ek1rb89CgWWZVndT595jNRDNTdA",
  "key35": "59oqteqPJwDRuC7KHzaPxcfYjtipgHq3d28q97KdQDCeCL8fLj5urcYpusZoE66bgCaBs8dQSu49X52ELJESc2py",
  "key36": "3qLX2Z2THNGNFssjvqt7gbMv5UU4jEDBXFGAgi3QsJVW58DrRvRfUAjB6PgeBUagcGZhnn9fKvbmNep2AVdeiVtW",
  "key37": "uPTLurVat1rRWYqaEfqK5Aki81SKVFV4ibiXk1xAbULaTDZDBfzNHjaZqY9sLE2Dr6ke1YWMjJPm9HnDJATcBVk",
  "key38": "4VUiZ8TEvRprBq9e2Ae1DWCYwCd6JiM1DuJrng7ZguVRvFCLto3mf5bsHaR5QnCixGt2ZLMG3ibCZD67KxrJ8Ndu",
  "key39": "3jJv6eUvZEViaMGmN3paKTgaW9wWrSAvgWnvupCqgJWzVk6nCsc7rZvyGNS4gRnLudxx9mUV1TKKFhFuBsoPxZFU",
  "key40": "GCRyjku34jvUVwcK8oaRAMyBpTXWjtgCzQxgj3QvrETieYmU3xnDzDPpz7ukLYoxN92oz9jHgnC86BNcLFiFYvU",
  "key41": "2fQ5NDihyEZnwQoNEXfjMC7xthjEb2Ypc88Kn1RE8Lzhnz81e5cW71CDPRPsBdnrwRKi7SBNgtzqsj8VoVga3fyE"
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
