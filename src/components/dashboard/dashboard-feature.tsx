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
    "3nEHt5WcTyVbfWRDjF84YZ3Q6cXeG7HXaEyiA3cmtPgDoMqQyAXmxABMeoeTfGU16TxZFKDcmhG1pEymSQQ8hmhN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "41K4pwVtHE92r6ha6UbUtjgndWnRgjttJ3pCzUqKwZGfR9SFqBG85TZ5uMWF73Sb3wMAu7UzrXrMuF81v1aYhx5i",
  "key1": "3kBNEPY24ohofWhiGswkPiixQ8NFYz9aa1tThVZ9V4htGCPiHejLyFGqvsxTYAY258gLn2726wufTy7yWaYwEi29",
  "key2": "4pJBgFFH57bEHBYVQKXvJXKWd5mygj3LXmD3YrH27EoQWYHEXM5rQspmWxpyH9b129m7J6KTJVC7KKF2UKGDVgUe",
  "key3": "3g14f353LTX6HW8moktJ7fMgpyTaNDN2nwdQ2RVv1GC71kq2C2vVnqtmLyadQwgFhNynm7woUoWQwgKLbAE9MTJ2",
  "key4": "35nhVST4jWrrQHXxLBZr72cZNrbHHMdsTVGTVWgWZWjxLAdzYCURi9MSW28hujEkjvTHRscwgG3VXyjFEHfxFi1Z",
  "key5": "3jHNW4zLMfUiZGdo4JfjyAnEh9MCus6H8S4Fyar2B47bt8hTwK8nYrRhjYPW3jgHvTZ9QwSrLHpckeEnxmhnbQrJ",
  "key6": "2YUiUWPeFEnPVLFu7aNNSPcNvidExgN8zruUt4kGGnzN2vVi6FptVkikjPuShHGFkKW9KYZqvwyitn3vRWYPBjy5",
  "key7": "3AHDJYw8TAgXgqh6J7KSmiUZRW7dgUjaSW7TiQ5g2Cwk5TRCfWErfQf8dVFxgqA3L8of1JdrVcaUZwCZQK4yJDXR",
  "key8": "5DkmVDYwzxYLL5TLmMZqhMFNNy5y65eXMgqJcrGbAJ92gaPjjbhuGMYVvBZMJJQdzJkFWJr3A6BQZRuJM1uauXBf",
  "key9": "3G8TbcFVJNyvgeEVkA3w5CMuH33PmqhGh6xrWxjg8JYhkpQipGXBRoN9AC9io7oEbKwsL66kDpL1ApUVMGCWBqb",
  "key10": "2kqxJ5s8zWDwcsRLrYFS29xZqvh6XQvERoUtaP18H3tEWM6rWB58QTQW6v9nGWWLEuLZRZqouURpr6vguZZLFjfA",
  "key11": "j225Yv8svgLupgCddttZTKWw9iR9RWEPzUdpdfA1tqsAoqkAyQEgLjghXzKwb4ScoYjr53X1tvmNHarfwgS2HKT",
  "key12": "hf6QUJLqqSPbVc2EPS7B38J8aCbvZ4QFagTueYP2JGn69VjWFVmpC2Ly4o5mgtHdEMaj1DprirSR7q1zvjtFHcX",
  "key13": "42DGhPSYLRni5WL3Y79f4TNH4ZuNadW1xjXubrjNJ3i7V3iQSwyfMMATkjsbY5QjUGYwzD9KvGpchAwHS25YdSpr",
  "key14": "JQqWhsRJP81HBGCCWSxxvSpE9hXbXywKrRZfAH7gcipNNtUv1K3d5TwoYoJjN1EEApm3Z9H7qatAzwTwhp5Mae9",
  "key15": "3jvm29uJgRcvKB2f5C9gewC5GpgJR9MESXkwwwSp7bSggmacu3qUaLr6B8ZvqkDGq269rUz2zcJkRga68NsqPwSv",
  "key16": "Coc7YZZZELK27XkgQQTTM3Ln8zCvBmuULR37R1gXwA1scYDhJKcrLP5cd2r71XM8DSy3HvRqFPohdW6GSiMEiYb",
  "key17": "5MUG8APtTPt86KDBiDmFNvjdyjNHgHKYvhZNgmLznabamz6rM6SgnVL599Mcag5ZoRbM9fdM8DmFG18R8ozzwSt8",
  "key18": "4JuizWhtX9xVdtjgyT49erLWvt8BFcig7hgjtiAyn8t1ZnstzspSYgRCv6Vx7y3unHyruYBVHre27FavwhuKuEcH",
  "key19": "2qMAAybjmHh2AESh7Wvh7TYfquptNXmS5GMnHMd7TKUAtagmdTWCqwhnhds7q5fPRiEfueWhBqvboAEyBNV6qbXM",
  "key20": "3ys8GwQpCVNaJgpBYF5Fmr1Ty8HALMfyEewaWaweK3rUJodsbJ4kDqgZKQS3Aa8krpExoUxTPPkDc6Qrsxcqq8TW",
  "key21": "4tLETXipDWW5mc7cXBhzgNh4AiNe5K32831pRY1kvHTUKPfDRQirhFbJs4Xk9n7A4Eb1k3g46YESDyga8FQmkYXb",
  "key22": "28gCU5C81h6bPFCN7pVCnnB5LHFzVFpJg5fLj7njK31DhrgBkhh6A2hXGgFN98oGEj64y1THZHZJtTCEJUr4PVu6",
  "key23": "25WHQiVdnnk8qHN772qWtjgGc39joAjafLxMeGNwqGZ5tycjLnh4pzSZKtppdoUXNSWuPBZckfMdjJgM1tdZ4ckP",
  "key24": "4F7PdE66bbs1y6saPDGkaUtmVXh2dZnNsb5cYEonjFH9kimEsKTkTZUNEkJhLwxW1nNqVmZKYBkvGYUymejdF6ut",
  "key25": "41SBZoMoVSXJxFEcvan7cY5kQSbqnXRwDrcroWEqaiXudenyBxT3Ho581fxwevkXPQss2fYoDceJCHeFaYRfad88",
  "key26": "25gbtvfX34kh725W4ASN3Yi2P47hDGKvCQudzUoimsK1KWsJ1WUBbczpMgQ6Ma9NWNEi6gdhCycaCqLmHizPKL3c",
  "key27": "nCmsFuxSXsz5fNDjzC1V9vbvAfc4zTYR2MHC9nDksYthPwRpWcFLMfanATHpAZWWjuEg4GbMJKt5on9HWfqz4Us",
  "key28": "3UTdtAG2PFLpqBrbagABTBT4kQnGrFFwurxCeXVzGW5r9oC42ZgQqdPToXHAisCy2cAmSVDfCxCrtaS6VVkL11bV",
  "key29": "m7S9KyN2A5sdJcLR2UxV76osmAdS4r7NbvAJhdwSZYZGyLsqHPGyKUUkynkKFCAgK72G5tJE3gJjKpp6S1mUkpi",
  "key30": "dXUzusGPHYExwgpCqRqMBc6xUqtCic8pxK8f6mi6PNzFvWhiMwFkJR6QmVx6k9ZPfJz6PTYasGAwjU24M5z7XXw",
  "key31": "3i8UzJQEfniq7sF1LtMUDuz71nf6Zf7K5FzT9w75c5RdJ4qPsX1KA4btMyj9NC37eX1YnsFPqbLLq5H4v9Ahimwu",
  "key32": "5YCDs4zAkRNZd2FMiLzmcYfvFneNzgnnH8gryX8GqQskNS1hFj962RT6PEMGNYJXfnYQanKUFf9r3KTu6oVUsCku",
  "key33": "46QaAKZubzyTb3Pdh61FRsf8Gxdh7kS4cwDSwyaNHGrNZJpV1JRmjjxAhDnHRLfQJz4UpYiHp1biMY3CCCgMc9Pe",
  "key34": "5sA8KXqxftbw9Lt2HyDTJ2a13L1Rv7xMsKTvyS9LxHBF8QQkswdbkL49niWuNscicaqfDE1iW1DN8HHsmh1eM14L",
  "key35": "G2R2kjV5fncDenzGQwvBRaWFeRgEL1ain4EoCQD1azLpZdCRfH3Tnp11ndJwFtkaTNcNeDTBt38osEixUAf9PXs",
  "key36": "Nsvao7tzq9p8NkEHuUdta7F4VY2nFntxRiXwr4JAkcrFFdKGn9MGhbosksaxWq9dSQi1HzXfnyiL1t6LscAvVw5",
  "key37": "5WfyYiNrpEkuqFCsQZz18mP1tUhzXSG48Wv88KevjUzZX6d9SjmMqDms54w5GK3Dn14c33tWGe9jCoAbDxeXxr8s",
  "key38": "88fL1XwwjWY2JMg3YHm3fcNBFVbqygJ7qFqXChVfQLgyb7ACkquZhcp8pt6wn632cB24hdJF9SgqGSG54RmLC68",
  "key39": "31JpQ2AzsQRG8FfByJ9VCoNm4z1qxA57DKZm8H4jwDmsfJzDBbpPmZM2yeeMTMdjugsZ679TBc3oTaYCMJt4D2Wa",
  "key40": "3kR7sQVDrQ4oumbccA2XdfuEoF6fjUkFRf8z5bBwMjQcVEbhpBzTGVzsY6X5k9mboJU6uYXAmELuFzvJiBcduVJZ",
  "key41": "4d2Y2wgr7aAVfMe7KU39R5W4C1G3QbTAJorxRgUAQ3FURdZYZVnKATXo6GBFMpWShWYWxxGNvZqi4xN8ZKossfhB",
  "key42": "3frhoyp41iCUcgfNJokukbRJaGtx3GdomX73tp4T1DW9WV4DJkEg11AKr6zfwqXUGMU7mmaQFKETTLnmaV7dzTWy",
  "key43": "5aTUCibDnztrsj3uLV3N2qoHvABRwd6uLYuvqQS3vTaYoPAfAtKGZaB9mnCStcGZKKvuZoBEZRJVFsefHZ1PLJek",
  "key44": "4TvfEac9Bh7VojLAFjVH1sC1mbMrUpFDgFrJ9YgCz5GVZ29exbAWX2rMp4KVJuJzJdvnLFbqAgM4tmymvBVgszkC",
  "key45": "47DdwvLLSTtxUsRC3LAGJrzL1Ts8eZEziWZY19HaENHyVPvobXz6N9vsanuyg4mmdZe3XKeXGjdYTMLPXYzkPs67",
  "key46": "2owYHbAGbVFuwknXXrjc8sy9zDJC62XNEdTT7AvqvjM6PEbisKrhFnjsfd8aW89usZQ3g33XVU9UYF64Lo8XXTdd"
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
