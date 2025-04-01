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
    "5tu9FrtPFnCq4Q6peu2VF9AytAjNvecp6Ye1VZohuX2yaBbfU317S5UcBB6rjnUJCBbwxFFJkgWj6dWXKMyzZurD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2tvsjzxmgJDTwwAYk8ueP1mR2mNkXCJJapsbMxqoKwS9kYimkLVyi46E6NkorxrCwQsG4g7qwCoeiFojHKHyhqjL",
  "key1": "4dkig9bNLqGrU46uZMFrkU2jC7SvwxqWZXQEM9PVxTbh9PxbL5ZFHaqWFLiuCfBHPfuCdG3du4TMJBALgx6FALTE",
  "key2": "3nyMom4FTsEDt1upRsBvR2x5BXUbCtcvbff3pq6TLhin2JrjckJoPoiQsx97xRW1JUvDVUcLs7aRBJM7GBSYFiLm",
  "key3": "5fnUQ56ExAsLJvig7PmJstqjNvPYBTWKF3aNy3FwTJD6A7ag4Psf8sAj6myXwRQ7hx9wE3eGBXcAEqSJCrSLFqY9",
  "key4": "Vd8H45PXpbH79L5tsUHhvVL5kuzHdk8GBAJ4ZxPBxAqXRAvdhmW9STvjYrE3ZXJTgmTdyHCjhSu13vXcg2CY3ct",
  "key5": "P9MhB7ppkBNtfVWm8LqofmfXLfuyZBvuyuG1GrGi773VqvtXQRJFFaAsvx7YWaz8cqp9h864mSqPFFHAfQtWGft",
  "key6": "5zvGcePEP2L5kYnug8vYxpi6UgdKk6Y2DXJ7xNruNch6ex8jY4fjhjHsmmAdYk2sa4FbbTQB7vgyF4rUVMznHorQ",
  "key7": "4fRSUxihrd9NgJXFGCMbbAfBwumnH6uphiCPx8RSiseYCyxenpNtgSPcwbaQqKXxN3SeALaTckVVBUjjopwVr1Dz",
  "key8": "4iiuHbRxTaXykQWkz4kPQnVSf1WmCL2vB9tDbJ6f3sPX89yDTjAXrUqfuUeMhZq13PRrqFFjk6yhHgYcjfGsBRWm",
  "key9": "5eYy6cqfVXfaamqYd3ukM6fWj3aT3qYcn69WEyfYfmDByzbkrRnrSnutwTzwAbVRonVZ6C8f3JRajDz1Ea6TedMh",
  "key10": "2zrWJMv9RwpzERwo2KBpr9GCsc798tLwmPE7mbqHLaR8fx69cLAUNQ5WeKrpXAi4kyQCX1CDyyKvQkPZ5euZ2EmU",
  "key11": "2HT7Laos8DqGUMRzdfyGgaTZ2f2jrVS2VVQMmCjtKnF4nrGjV9SxVo1TaxnWroDKqcBnC9jXwwhLQbdDAuqYKAP1",
  "key12": "2cY3QvX789rnEGX5yNSfzWo3nV8UrQNQ1KDog9noomobEbkPWaCSpBJb3nCqiU8bXuccfEMPEdr53EDL5M2JHHaR",
  "key13": "4VVCW1LTFpE2sfAmURkYar4Rgc13wUhEVrzJ5Vy4pmAqKuN2tBGLrDMk35dYT9bHSkqiqbohgDD6vz6QmUyaR37V",
  "key14": "65mHChXwAyoVVBLU5jzLZDeMmLszwFYFDAfLLKFCbnrK1m1tn6mT8CnEYhkdPfKfUj8U26CBXS4qtZPGJ5yBh9wU",
  "key15": "aAg4GHhxbVTBcFfr58kR29jNAhnJmn7LMAQnpayb6WxESanvSxXoQBboiTXg6TYY64P2tfvRrVq3CsgRmfYa2Xj",
  "key16": "2D6k9BXqvXGJ8UUWJsYpbDAkgn41zB7kEodr8CRsHY5XM63wnuBShnkBJr6YQka6xxQ3wEQsd8xcyLewFNBnEEvw",
  "key17": "yWrequKMAh71mZC26fkekkNWBVcx8tjPA7Si7wVB866QVoJ2d27bALTcLFr9TdY6VPzpMMdSJAnzmnbijf4hAFq",
  "key18": "2mTmo99ryXXDcMBWYwRk4RDd31s6i5xNc6CRHoD8MHC9UfYDYoq41UXsfd6p2wyYcmbNrXhuowDtun8VBFWmCB8n",
  "key19": "21AFyBswksMVWKoGWtX1CZQJRHotwqk8guRJjX1WMmkwHY86dmFW3KXQkPBoUFrSeHHMqoUpXF89jsM1uNSxt1Qb",
  "key20": "4A3k9Rg5U7ojAXmfTobuKTp7TSi5yyeUK8iG3dAjUKFShVdz6uFGWr9mbiwMJbAkP9JDnv9wJJJ4SPgMabjUzuno",
  "key21": "5KpHSHXkTtURKznRQ98JuBo97x5h1W3vnU5jZQYnfoVmxpmLbvxwM4n2pF4gF8Zec4zn2qMw6qfa58JfaHQqWfXv",
  "key22": "2mbTJDRwKMNmJ9j2rv6Rpuyy8CcGGoqPae8SAxqUqAcahzaT5SFptd3w1B9YoSzqJ5f7ARajjvmiE3ZDf6iRJnWu",
  "key23": "5XpYjYar1RpxoDns7stWmpxcPLfQAgrN2EJdhmH8g4ceGmX1SAdq8ruBqa8JEfNG4fs5MW6bqkiGWi6jEHBZqCbK",
  "key24": "5wgRtPVfcHQi1eyAhQRmrAkWJydTRRssA2x1qJRPVgNJMwNDMkP67ZGD28v1hgeHPknqeCMyBRKRUozhq3yDA7fo",
  "key25": "4Yfew9FwkF7rhqS7dByiyQ6oPaQoEFURvgzMniKrjvxFxUuJQbzPxqjybvnF8XKWeMRR7Wh6kVmjUMMEC89wM1kq",
  "key26": "4V8BcZcskKTiXFDS6yLnpMdvo53uXjBX4PMc7G4o65V9NoK8nD6zr7MmNJttQJV4tF8o8ZkjQNhE36mn1f2crGA3",
  "key27": "4S1GPNEPq1hbdi8tbZx92C4t6rvPXYCA3tEUwtYCufG5h5wKBdCXw2g6msXWESGk7TCtpaKrBUgDPtUmhbQWGjdo",
  "key28": "3WkZFtC54akqqjHt1upf6DzzxivDWw8rUQr48Mdcc78Vex2KmeZ9dsJEtVVsdtKpzRagjPPNn2iY35j2q5ubsFyY",
  "key29": "vLBTdpbw7wcuzK546QsUTzjZxHuzevBW3yhS8PGp3CjAvUYjFdQzQK4ScxLL6dgeboaZM6iW6xntq7UWGNeFkE5",
  "key30": "snQQc9dxCW7HQoVuexYudbqBhpU8bMppia4M7YyLsjC5B9t3qoDbz6DHzakixreorBHtdUJ5mhkY6BKCMqpM21W",
  "key31": "4BAXafr8DqMnaS2uHrWgeqXTwNoAyCNUaxYHwcHAr3m9mVswxWEacSP47bFRZAJ5izkoPPFbv4ni5Ccgq6onSoVV",
  "key32": "4Cv9v3YFDQazL8hu34REMpA6MgPytqf8aC1YESgkpn5WHKtk4sq2o9gP8gPnGvL3KsC8fc3ryoNGMDV1p1oajrbs",
  "key33": "4BdZZgEMr8qtuuAYuwsmE42bi6yU1jC1TQjmjMXePcZGRNSix2HrTtjEGtj32Y8zcNmc4XwBziY9fcoGEo9gRq3N",
  "key34": "2ZbUS1cNuCkbFQnZXMDTNS2keaGTR3HpYyBGcV1UrGnkgM4K9UPXMTVi7tf84awgcXuSAXy639R8nV8QkX9wzd5r",
  "key35": "2aFCqbtFaskSVfNxpbp7bK4qjaHXwgTKspcggNxPbfN6MkemJ16TDNW86KhCeKano8Ar8wTNyucDkX6c9YoWv7A1",
  "key36": "2kfFqQT84jtkVYPLYYLiHHfMh7Y8eTBxCwXXPPznKd9Z3SSNcmCAoB7mH3hevGmsWFL37g4SzsF955iMkQPwTCn2",
  "key37": "3FWqt984W9rrmtS31genoVBXApVtJikmbB4yfn5cDkJhhxunhW4tCJgRJCFKo114RTRBx76DgAPKEsAQkiaCjms4",
  "key38": "3r283shLb5pQDyobMeyUEQFnQEw3DqjmRKjf6mGtSpcR3qGBVfX4ni3RXWyoUqXkXSSydHdKJCax6rx56EKhkisK",
  "key39": "25t8vSFU6tdQQpigeAFtY11TEaBU4afdjDg8eAQm7HAyg43d9dmYkUfvWrz7ESKfxpbAamCz1uD1cT3Wa1XtBAaA",
  "key40": "35e77DFLFoh2ZZrpmtwbPt3CbEL58pskXURCDTTyFVs3qToomDTmDW4UxoiZxmRzcjrwqGQC2XaooNXcrg1S2ySk",
  "key41": "3HatYGn6yBx9Z415GxWzvYw5JbrQm55GpHAiypqitULgjoTmkgQiB12zyEVS1nscnTBH4U9YR5ysdrcVBhbrCP8E",
  "key42": "5SrwLSSVDjmdMmVwmEAyeLqgLRscwt6hroDxCdBwT1fvR1vMjDxZqAyDxvRpCsUmqXk38679Cko8qgNN5Nz583Q4",
  "key43": "zSrDQuFaVB7awRrf8BgKrbcKVieaSkBM1c6dM2et2SjSqUjvGsz3WxQUYA56bnPBGxWAnjQNYhi5BqpqZ43iiH3",
  "key44": "2bEkryWZHce2v7qs61PBV9qQ4hkqrpcBFNz9fCDTVcbNWxF6u5SzLUSfcwRxnm4QkQEKQsLCqbAjSRQXAcZi6PZ2",
  "key45": "3g5VW79btfjQbkupdB6BgZt4Md1oxFcMgqRk1RjQyanFJqoYDMsbghA4yDpC8urxeWJfEDyjtFNq1Qmus1jXvt69",
  "key46": "5yzUL1cSCpErywfdoM93JcqekFyvgiVzqTMWiYyAxPrdbHVzqCMFdRfiiHEYUgAgtbkrbpDCfoyBN2Y7eLAwLbkq"
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
