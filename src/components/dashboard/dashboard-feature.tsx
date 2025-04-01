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
    "278TCFVkGh4VTXD3cJT1AQD9kpZ7apxyNPXqCSPEM4FDdjhAU2XLSvwD2UYfEaJ1KrbmzihYuVqzMaR9GCdJ1Ape"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3rUtG1DVh7eMHHwbK4ACdAumqaLeSvDWPF3WifkfhSoYEsKqpdMZv3h6XMWkpisvaXjdof8LJiGieUJVgSDkVRog",
  "key1": "4U1baiMLv8x7Z9iDRCxUTEKPmA867f5u1xX5iZwU3qChhX5QsP1zNHqDnc3zY5K68S2CVaBtdz1QaFDc6MpHnGzc",
  "key2": "3hToimP2dkmEbUad58cxNByhCakZ7beW7arV5sFxXHF8Gar8TYYP1p9nJHQBJYkAZhmFPuA2cQUar9ieLgXRWs2x",
  "key3": "4Em6cArGwWPiRmtNxpzXd8GRAUoxZyjZGeZz1LmLwEzVUsAJ1DgViK7thXJCJQY2FLfFP5rEQ9xsaW1dhYsJ16VK",
  "key4": "41WQYk55iYFozf97oBATJBW1ZPDDt9NrP7XUSbs3ix2fCb8c7jYCQsLM8QwkwAsZ7pEXZU5zE5y4FmVYX9fL7xpV",
  "key5": "3KfFR77o8mdiKDtfKFd2ZBZz16Et7z3wQnUDsVvYQCmUAkgZknsx196Dkg1VJg8Nr97BbHKBePrptmTRvGTZcjLs",
  "key6": "z3tPcAvJTUpnLRki7DayBYPbdXE8twHXcV3hA4waTy1Bm8GAWduqvGN1wcHkPqncwfD9BLL8mLbdRjTgZR3WYCC",
  "key7": "5khEPHvB5ZhxcGWqw5xK8v8PU7E1dzNHWJFPeJLSg6QPdDQeYiq9DZtVdKj3M1p24G79MJK1qZEc79eESAkyVpLH",
  "key8": "5yAWq81JoDLpc5dT4p1PKEXJiKSyA6JogEWP1msxgVj42yz3WJ2NoGi3SRpMzMJU6NK734A8WdMfdQbwt3hSd48L",
  "key9": "45Ch4zJCVUEzUdBJ4Yf7HQxS1w318XJjMbA1gVHXpDZKyA2xxCd96j28qbGrVsRSb6q3Mic35G8hEKqoAo3ybSgQ",
  "key10": "587ZSvzcMH4SX4H3sjPM6wG1nmsn8Yyh2PRAmz5KYT7FFQur9ofXPM1YSv8991e6kPnHzqx18Yp4RpB7QKaB4PH9",
  "key11": "5ok4uYbxXirPe5GSp1TVMBYRuwC8CkfwzFrmj4gk7wRCXJMYBGKu564c4zvhwCsCaW9NjxiNgeuxWFTVmkvxzgB",
  "key12": "4d3ZeyEnvztdDVemY5rEuuNMGqd9XZtmFeCAHXgBnG9SPAH9dzVK9Kk9nFzXowJrwNX9n5qNCxmUkYG2VkeAymnW",
  "key13": "4YJgEij32F8vopj4KbwZ1Lh7SmoZurxCdBKKHBjgeVPN33ExHKDpex14scVUTeQsRvFozEJJqdm6eXXF8v8DQrga",
  "key14": "5DsGsMJ457xWp1z2X8UEY81HLEUZj6Yq6EvTtK64Xk9MwStSi2Jhnxxp1rDNeqdfHXfbXNVrpZq63MzxmfNYv6Hi",
  "key15": "2JWqsgVtrghhaQNTZ1VmCVEAMJo5ZdMsTajUxdDyjY7F4eYnnU6YexJ52nkh8QcnuvsLCoRWjJqExFoiuEy6EszT",
  "key16": "4Rjvp7yNZXjZkke8kj2K1wM7sSrbYeWSyGvjVmxHk6BeWo4rLx6CaFD2wSxWgQ8STjzCKRBnQPbFudJVDFsmoMiE",
  "key17": "5fjURFvrAN6bhEb9Q4M36Vmcb6Qqm9RkVW7Q2v3nJELp9ot1hV1pgKg9rx1LTktVeM5Pw6tvyMpwcPyrdG338kRN",
  "key18": "5pWESXGSd7WE8PiwAiTx1wZdcpzGDrtUqjXRi8prDpwPZW8LsFZwhACDD5LAosnXDU5QoChN9HXb3Yz1iaoLsZKG",
  "key19": "56REnBi3qDXBhbiNGy789S2RxwZ6GepJ93FSPzrUj6peuBj5NNoL9JGjVEnMR9DqqyRQTJCW4Q8FwhGo1E3rp5Y6",
  "key20": "4A61LT1TyycuvuZYY4Pauc6ufji96kqEPXBPFvi69fgtgNSwHPwZFrTuoDqPHZdmSHN6V3biTxG3x4ZQoxpW34cj",
  "key21": "AsVZVew6NZ2MKckw55bPzBwQpiKfSNmSANaiJeBWd7xHoijpEmyj3fAf3bTzeFepvi6acR7nbJRhFLAiGGLNqt8",
  "key22": "4XnP1k8Rz5V65S7So3xcPLqsAZm7q4hPobjsY5uoxp6bLECRXdZwPUw3AvG3vDCa5V6uzUkAcDDPiFy2RF4Sexc4",
  "key23": "V4pjBLhS85rVk29KNvVX9jMawkkhf6aqD7zDvnG4jWmf7to72ULDNMELNfZ2WdayAUNrnxSJUyF7DQkHHk3BBD2",
  "key24": "5SQ5VqbHMcFccDHNXkGAo2JfzmkiimbHQewsatbfqJMHn3VCKrUUHF3c4wvSPtYC93UMof3ExLuTtu6WxEeEhfMh",
  "key25": "2Ze4aQgzbjRbgYqmnbhru3jmq5F4ePTPUHsEx3fYqxb6w83zEU7skYZ9VBTbg3PFsU2aSg8QbtRrHtQg9QP2JDZ3",
  "key26": "4ikMj2L7V8jpQf7bGAVn5McwGd4HJy5qfzwCaghZTMPTAe4bimnZ4evYmZQDXEYUVH5JzudTLXpdkBLYGCxoWFxC",
  "key27": "4iBTQqm5HHBuNerYM9LpUdYaXzoopkEvxjwZhkY3ZFqCfk3XQkvybwMhUXE4duPgvKCjVNRgqZHd6Vxqps1pFMPf",
  "key28": "5geEtRcnSUM4FhpbRni6bnfYVotrcTbSXhH3JBx4x2ivuNx6nQRAbpo5Wpe7QWG5SVLmE1gdAkGq9r2wDuf6tLEV",
  "key29": "4XkEf7eNXD7R4rUjbD4D2yijYbcGxr9xd5e7VEwUJTVmD7U5AbFq6Mo6WHZXhCDfCDCKRsgq2ijDckf2Zf12HTa7",
  "key30": "FyjtnzWhbZG1M9wLCn3ZgShuESMCqVgHn4PPSt5ApEBzwCUgshpo3r6QMzVB9oAKaJqBXnc3ZS3E9qRAjd3Y1gV",
  "key31": "58TERxVbCjsr1K7Hbpy98DuRjovq2ePr1Jy9Qa4SeDF248x9ncBNaCsZQqyaF3hd9Gq2vGeDm617PdU2fegxYYKv",
  "key32": "65FirjoZa1NXV8kCpVviove6o7GHDDWrUbBEqGLiAXnLNCwx2GUu9iC4JHgsNr7MHukHNKk62kww7BXDbWkCoCfo",
  "key33": "b3ukghxCkbupZHgdZCBHZeTUtkrzHzXCEC9es5pAd675xgjcFzs4aFp3FMFrFzcnRHSRA8w7Yb5Qz6K1hSNfuRY",
  "key34": "HprrxmBZ8n8h4xSJPwFe48jz1Hu3XiHBot4GUqxnkZ9JJ5oBcskcf66tNg1Fu1STwnVjXQxUk7NSqmnPTm6gLL3",
  "key35": "4YL2zpa4HC8T8LHQjmhDKeALYkiSVKY2CxFaYMUoBAup8hfkXfn2q7SGcb7ZWa37RNuy8F9kjZJGp7w4keKGUqMP",
  "key36": "4Gyi1Ly3VDUZ47qA7xsNSkkrw8ULMWzE9AHW8wf81vX3p9a6LSBzEp1vdxn5kCnhJ9cnKeXt8Vwg3Enph2si3zhH",
  "key37": "5FeemY1rPQzMJXiYa6pqntT65PtyLe3myAR9kqjJR8YdyT7jUKsyc36EnTmxMqpS6LJPweVt4YwBAeQgGa7NM3jp",
  "key38": "5p1Paju21TXzSythrfYK8CHamgx6FEPEbTjjiE2RJmcPtfBvQ5dZRyio7hvHRtoBBCvVDKzsqwjT1uiBiQYKmo4g",
  "key39": "3PVsMHXd2zmpdXutgrEJJLCBNEQBPBeKXfwTxwfZh1JNdvEkJ7GjMkMoXCh2WVSrT8w8SwSDdSRRCtMstxLm3k1Y",
  "key40": "8J8o1XekNso8UhteUo9QWS2udom7UvLCbEr7WDg44UVSQy6WMjqtxpJ4D5ptNWAJTFoS2rUKbnw2SRfPXnqfETF",
  "key41": "51Lj8pjx1QQFixj1BCR1kQU7xDRoEbTp87Bp2BDYJuX361GRknxQZQDfAtiSX4aAH4ebxknFjxY1dLZnHPjQos8d",
  "key42": "5Q8a1NFFgXMR6HWC18YDKfPegY4X6onuk1bpoVFh2oLyGuwgbRYdVpciFLX983je9jS8t79d1d8fW9eLbUGhkwcL",
  "key43": "37eXBxaSgPoyNexBJ3MUDu5i4koPgwTGuJ2VioDoohdApq1rK7XmYFH5CRwgKqyBRZs371qbTuxGN57d2ktj4To8"
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
