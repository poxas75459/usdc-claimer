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
    "4bSc4Qi4NT2iWccFDwEbEaM5XGp5tWthWrbzzFQPt2zNfoDc83Lf36EFZNphysBFZVDuar1yBUX3NKUafxJjVL7b"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Rb39mvJZWLDXCVNZ1UjGvvpg13kxM1f3RyqMkrTHJTBnEazrXjHxfbmncAp1C4wJs5mkqDEiT79vx6iMEwp9LHY",
  "key1": "2TTPgmkR9pt6mYouAZGU2XMaCUBeB5ATv1e43vf7u5mr834xsJ7jMWQpkmmSfoWxq5amfi1HK2EYmk8ZW2mmvzwZ",
  "key2": "56CSe9CjyS7h1pNhuyU3Ap9GBVLSZDvMWzne8BTaMLbHnwbaCZf16Pn2ByDSKy8kbJif7e5FuoH5rTzkdETmhSPQ",
  "key3": "2GVk8pCrcmkku19EBX3GREfzpF7Bf9kkSfxE9tzUsxzJnBnZnGVdmyW5wrkQkATq8a8cQnvu2FbMPFZrwfxaD8SG",
  "key4": "4R5Uosq447n17qKd76RY23cUDzx1atBAFH2Nm6akJL6T2T3S32rFtCvvjdDuvPP9o1SZwbE3pMcJ7fT6J4PGYxn6",
  "key5": "2RB1f42i2KWZYke7zhsc3CKChCCfByXkAZ7bPd4iNPpVgdZDj51TRU2UXWSSkgqFPsYW2JNrPxBcV74H5onhg64K",
  "key6": "4DUybHkyhet7nyCoUHeWYQqHhMEX7weo5FF4WFm1iExx2aCs5k5fhGGBCsyZwGP787WQ91kAzztGyzJYhcnBrv3Z",
  "key7": "4b5DHPm1Ck7GqJhcVxD3wyUwZsczzNWetraKninUwfmVKdj5nqDLWjSioBWDsZLuc8hNUz3X9jfWcs7xN6q7G5E",
  "key8": "2t92nmzbxRxYrcHJ9aPNQqqt9tGksiFv3aXEeqi5NwAhb2ymnBSKxbUztJgvrJxpppcMwPmJ2efjkkepuw8v8eFB",
  "key9": "22GM3oufKpyAADetHnSB9kmqueUvomrcvyoM52yDbP967buRTCqmmRfWmBrbdW6Yc4BCaY9oQ61gZRFR1a2n2t5A",
  "key10": "8R7wnd1Rua6XfwWRJs7Agub4Cy1hCURsBPV8W4wP9imPK44toZiBhXNDhnQjTUhZSW7VprQExms8Jke4vnF3euB",
  "key11": "5GnNhfFgi8fZxQgMpLCS1AsCKbdEGCNuckb3Ssjna9EL1b5c2XsvQ1kLMQBfDhRwCYBZrPsVkcxHVN6syXyRmsft",
  "key12": "53JrokZcYChYQJd4iEmUtcykvTb8DspErapDusM7d5hfA52f8Mi5iPihGwW9mW3pYPVrsBobWrHV6CK8XYyg7aAF",
  "key13": "7m66WcZLZdW4CeevSZVYjJCP5VpgZzL9SZKXYDHuP8yWLh52XDD9SViKx4JJQHHwfWAZntgPypUmxEToP3zpfrH",
  "key14": "3bKo9DJ6hKSGxic3KnUfTKKC3CKHq8DSMMjCK5T1Gho3oerWYtx6Um86AzgVEKiEUzee4GHGKHAhzNPAs5HAbbJy",
  "key15": "yzZaWek4p9QxdwCuwB3tuifvAdFqaGdqo4rHoJX3rkBj1m1FLHzonjvKTytCHjWucV2s6MPWebWtZJDyoo22FEH",
  "key16": "2vSH84RLCwjQPLJMe3CGQFp3D1dKK3YHZLccXRs9bU6wKL317pxsQBe6fY9fEkcGkpJiq2Uqg1skMGtVJbH9VHDM",
  "key17": "3XpfJBi9tPxF9hNw24pkD1DhS7rMQgJfqjLujhEggBZfpSgsR3SNVy6mGEUdnAVQXhkyKxDPc5wASCLGGt5rZHfJ",
  "key18": "4f9ZGVB4hEHAyzhMPnXCFGarhzTf2YJ85VjAXSyKEB21P8dJac2zcwv6UWFfzsHtDc9kyK62iU5UCn3G3JjgwDMj",
  "key19": "5EjEPC1NnUxeJQTW8buAvRqCD7tJueBtC5jngcHNTVa5LH98igd8SBCW9Ye3KcJ6KPJbCXzi7QGwj6ikCMmohn6T",
  "key20": "5m8p6FbYgGEX5TEFb6UVdc3oERMGLbToa65kdfRbHk8DT6H3MWUW2jcLKQv39C76pjrMLtKgULCrHdAEVTj3NhGr",
  "key21": "wGec49HYWhKcg5s3Kxij6CmJuSDKMoe5QCsVeakKbDs35qA1DigZpjrcdeTqidmY5edkbhVSejo22nN1YjCSKnQ",
  "key22": "puhN728ZLu4y7wothVZ3t5DHQDWHXqqtNZYBY8stkPUL1ybYQWv7i51fciyXGUnyXEhSJzEKp6xSFLR7Pdd8Hzb",
  "key23": "2erLDVXu1oT5uqnYuQMD2hyZMtoEATrGBEhDPdZGRa6TgczKzyoyis1iNQauWUFmktMfLj4bK52kGRE1cExdGLRL",
  "key24": "3N9pNzdiQmb4Z1QuR4UXKE1sYUKANiJcyTqcUHWd5HVxcLm3YizBc1V6Z8RBnje2uD8jbXjXbZSiCp4aapJdCrwe",
  "key25": "24fs3ry51ENunbqfUiCexAAvfDabeXzdeHLbdna9P4K8HmABSGgWFeQHdhk9xsweaGAZVVptMnmHw3yCNRi36WPC",
  "key26": "4X7M8t82gQGrxaFo68TN4GyTWsjcmMQWpsH2UHAbrV3W4rXaziXkU9HrbuMS89bPXKPyxqbk8RYQCqX5XNtZuSf7",
  "key27": "97MhfhamRzrEEzr24YTyxrKzthWp2WNJmbrGEvrBA1ibGbHJQbPRdJimTLR3WEzuMMrxNL7V72Dsg9oq1HS4yhK",
  "key28": "4mU61Ft8pUC6HT18akVMM9MPDG1XuDsex6saJBb3sNfNFZYYExsDj5G1D6w2Nb3Eg7mxTCQ7z2GyGJgTQCGMMhN6",
  "key29": "5P5fmgwEnTyc7zrM1vVLaedyQFsfgo3gEMqassdB6gV8nnAbHjzXCEgZH9CY8AQMkbZdn4DWDffQr5myYrkVVphy",
  "key30": "5nRy41RKSRjrgwR5v2uvnaSJwPRgaKUK6hCXrkRjbo55fRiuRztSrTWgZoBZeJqN5e5bYmCJf4U5eGE41ybaZg2Z",
  "key31": "EBtSfAQHcNgbUGBSkpoR6x4xoFVfdjRu1TKLfZe1Ukh59QD7nsGUsNc5GtHkPmzZ4u6feiNWCK2qyczWXUjye1F",
  "key32": "4DtiQWLDQTJUR1mWKk5febPPHQBGoNoLh7Vmb76wAhhre32aea45PX1dAe5eerKu5UYCj89UBwvZkjEG3f3mRHdt",
  "key33": "3BRK5CUeYcV1h5KNT8bFngpVmY4g2AxTaTCF5WSgam5XdRPQkpjZaf2eXp1FeoeSCPa1PZmnpn9Ev3Sg7whNr39H",
  "key34": "5io93siLBBpCXTcwopCHfWQDJtp3dXcG5Nm8r5T4gnUkv7kCgzZjaB32y8cDs9caSVNSCZH1aEWWjjHaop4V7XFw",
  "key35": "5poWEzgBV9T7nzYpjYLLdaqfLbT3cq88kVFTGUKN6A183V2xJNRg5RSDMzqWJ4NLxMhS7naGowPrTFqAYz2GHKkr",
  "key36": "5BqsiUnLu4oceYaJy32eUqkVipSkkYVWxucPxgxZj7dxNXHXCkagFUSrvagKoxxwsuQcRYEd9ThzgCGYfvQh1S5F",
  "key37": "ua3fR3849EbyuEWMtvwp7MeGgt57wSzaJaqwAtzPWpdhECsiVjFgXK3WTFH5JJh6DgnqSzEaLvfG5MdgosJEcxY",
  "key38": "KhfL3SeD92hgygs9NvXCW7LoFGyjK3d1vAu8nC2jczWTrEi2EmWMEpCB9D3JSSJGH2MUiDZx6Z5pnMEzSC9HNgw",
  "key39": "4cRqrszJG1xpinzBMyHKM1frmpcyqtUQDdH3ASUiio9GTVGDWNN2Zr7iiXFirRgaQdwmrh3DNfg1mGHzsbrL7vJv",
  "key40": "5iWgVqHzfsenzgqY6aPcCDWpfPvUvZGx3qB6Spe8fU4qsy8qQoVaYjJuoprxyHPrYyQk81usVBWbUdLP72zDmn1E",
  "key41": "gST9o68SCNrjK7WN4QpLbZGgCysL55Dcq6agj7zkTmcGD7LrNg8n5GNAksaXCbYMozB55qP7M7fCvhrR7XKDQdM",
  "key42": "5mNcrfYwSJoTVHhBETQFWd1CRKLaNMjq8C3rYJfkm4bsS9HrcEPxEjs4GydY2JM15raMQ5zRibPMutABnHYybn4G",
  "key43": "2vGZMiQbqDeBqcTXxcxaYbXad8m7onysa9gGvBS8SFj6D24EFmqppgxD15va6yDPR9EJMEpwRaeDfnkjbCdfwuz6",
  "key44": "23UHk5p8qrobNRTjfiJ246Ap1GfL4gAyHEWvDWxodZL5ez6xpmt1UbzPochtSR7do3bAF4if2AdTENvgp4KYqAbr",
  "key45": "ieCUQmArYRhSa61PM4K98mL5F37ubux8EY2EJhXo18Kj2VLgedTpf2g6BKzvsk5Zs85EzwKLA5bXdLQEsRzrekC",
  "key46": "2Mm1QA3P8ud35oqLvHihyms1hr3xbBQXSwUaCsTGVhd9FVrqjFTvPLNCdi51Chq94bCw8kswDhdWmTX3ohxD44yC"
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
