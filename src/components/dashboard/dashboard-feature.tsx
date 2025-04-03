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
    "4mUe2oQqvoBmHaXAeNZLqN3N294xc4PuM44eSv9sqpGzUndTHPAQeRrAVamw8CRLTHjLE1XqaE2tuoPJwfhMW5uU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4kzL4s8BHTNATyJ56YXT1kbvQZ1RPVruGDdX5aGGPc7g1qzS9k1oGEKmFkobLBPh4qzkfjzFJNPKhjPvJhVdEjSo",
  "key1": "4VdJ98GraziEfvFxX4hpYxnQaP661bVpFFJexSgYB5ibSaBTuStG7YpXMYbUmW9PeP3bcAN7isbS8EMxtcH9q9ug",
  "key2": "5SEgQtGKbjfvhtrBcby7gVqdv24GVnUNn1N1y2GpgcQQr7UrLFNpR6rjzrTqyr3Kr94W22AnvmKWUdFvsM3EBdBN",
  "key3": "4MEMgWLkBcENGECK9U4Zky1WtyPL4bM6NsXTXJbwbRPMvjcumjc1UHPJZqCVzzfpRL1yLAMjgoF9cBscyVr7FUj3",
  "key4": "2TcX8F1EY4sdfcs2BQ33iFTWazChbZVnBjsT4WQzEXvnckhYeMaaoySJV1MK7LubrDtyGRvNDLXKELYgm3d9SecB",
  "key5": "4mEjwAqrXpfVeDpE72yKFRKGELbReNaMmZRLBGCbpwjePfoeauhL1nC1ZCH3myH5XVC4z1gTEZTyWDDt46mhdqe5",
  "key6": "4JqWvjSWmZaK3WzR1ufTtQx6ycX58KYp7muEzVU1WGYUaxsbXRiK478SW33Dn7XtSjxWK1TUYBucuEarcnprAZMx",
  "key7": "aBeyUFcXc3qkkoZUvpp8MyHtiGv7b3rrKM3wVx6N3TKbTvq4QL3PWBtHQC3M48XP56MXG4fsprjNBG8yc6hQFDF",
  "key8": "331SjDacQikkSigr8oNdhY555GyZdv2An3zYCmMZM6pEcAaJt3UpkttyK6b89gEMARjGTipodWMCtJWBqtYim1hf",
  "key9": "2GQyg1B2WZ5XvLRUTER8MADQLwmnLNSUArSZtECf6ds2zceut6skJhr6Tyk8rBPqa5LVf2U12ojnJ9aavAGWpps6",
  "key10": "5BEUi2hyG9BoRjHP2R7m64XpGRZXTsuNJtUTpHiimKTmYLaTYikxzzNe5hmQnqa8xLNQpGVwVEVp3mifQi2SssMJ",
  "key11": "2LE1osG4eZm7eJdHkaDBU75KX9gmmVWJb71LwZ7ujeTYfoXnXwd9dyGuH1VKBPgigC59numzbQYEzfU7TMfu4Mpn",
  "key12": "2cjBj4XhLEDZAk2yAYz9RhgifN5NBLGus5tpsyZmC1xZ2an5y196KsnsZ3hq1Peh9tb6RA4wKgjYUxhCZiHNp6vY",
  "key13": "iwrxorsPFn6yFaiNcpftbxS9TnBFU3TyL4ThbWx63ZMGpSyckeG8zjwFPdV9kBvos6pXyZrQovfVCyFpZgXAGyq",
  "key14": "54c1oCiV1pA9Hrhg5a7wussyALMhg6yqt8TDMD4WA1i78HR3podDBdZG3hKFQ1kWY2PJaBkWCzpzVzewiXbAAC2L",
  "key15": "4pDLXbmr3cFgB4WFgskEiwX3V4CQ9mYpbmuHLHeWtkpumFk3QaVAyvk3CeNtCR93HN5eZXY6aaM4xkjT1NNTtuty",
  "key16": "5Gtz8ms4sDDLsbMypSBsL4R3r4dShg25JFS9gRtr3it6xdkM3RcVd66pD5SUPunyVvEQJKCuZefQJLYTRbh4CGNU",
  "key17": "MZ9zsvNrd6RPyQoaNxNxUZozSaCzLVouvpCRr4rQGx7eEa7k5BmfQNfKKnupZbHAXFnWeDVVxEZLaSxMWirgnEj",
  "key18": "9tPdAYdnX9Twx9ko4sFcJsJbACyoa2xLN57voFbRrMPXWPjDy7kK7bhUAXiY659BqmGProGow6wPAd9SLHmjS2D",
  "key19": "3x8qZKjzLHX1EyTQToLWm8wnbsWCgMmgHL9WE6pMjfp1kF6Y7vTHMtkUwaUbmddgVze1h1veK51uzSep4VmFwJJd",
  "key20": "59JwR42zsxseQmNHB7KDRGRaL1zstNnemmsF1bnDczALnREjQSte3UEoceXdxhsveUyiVqSNRojuHpGhJzeLt6Mh",
  "key21": "35HsLcLBR51wvBdPwYTvEFnzdZy7s9fcaDVrrjrwBooV8sMGYxv5bSArKXe1YWDoFMHcTiBRyKPgEAKCk23JXx2Q",
  "key22": "4S7WeZjdPXt4aVoocQnPYwG9oSDn7xvLyvhc35K4SSANBzHBExzR2fcY4HwrissXASFoeAcEagnzq8YqiSgH5iZK",
  "key23": "4Lxg8BtD89873irbQNyXT8XcZsFaDdiK3osyMLUdRBTEXQLVh9oCUDGu687BnBa2St8Kp5ct23kuipyj5E7HhShC",
  "key24": "2QdxS3RY56W1jc7Dy66unw1rNzZgcvVUSbFQRHqdBkdm9JM5bZAKcCUq9FdPbVv7fiQ1Tf5HbeRkqbKzWfPDaV9d",
  "key25": "5UWTcXziQYFSNM2ZaeZdewwN5rY3bwk8DrV1zUD5z2SdiWeD7XeFrSpKUm31qzyBRrdAuqhZ1j15cHdTS89N81Ny",
  "key26": "35gwtaWqm5HmCz883RD6WZYXViRcoYLvW9S8cKW3BfSLVSLPM3oX4XU3BJrpX7NSqzj2Mo8tLKqA7iFiykMN3WNw",
  "key27": "5qRXaNSiJPYvWWu879YtggJpmkwypLVQQsx5DsQXcXxPJQREfSxcSHk8dTGfpTSxraCZSVat1C2MoMzSdDFpAbif",
  "key28": "5d4FaCRHHbZ2KaMzfdDYsFvYThXqFmf3PBX6pGJwYNyBE1pHC1upU4Y2p32T1ENLAvhqudpRnqusS8gWXCoeHXmD",
  "key29": "54dcCp9Knw7BEp7NG5SigENsM3EdbNiyyNa1UBh4eyKtEDChCvusPkEKUuQpw9NHkciyywohosMZ9wjx8H5Q6cnT",
  "key30": "3dQcKGoTZoAGDjZ1DVRCwmTx8W4DnaistW7YFaS7cvLhPjiVcuHfvZHRiHZhm76UtuVtRNEH52otHfffx8L3C1CD",
  "key31": "7Sb8XwGHwj3SGcspcEtQjo8Q88MrnnxkhCXS23zouxtuPc6RtZKgtcgnhj1oHgtWd1QHZjkfPDhCWNPXFCYQghu",
  "key32": "4zj8vyV6AawhykbucCUfPa9QWvsFwo3xXANQQ1LCzgKY25VWnfxWwGqG8epkC9AtsYt1qTbe9UAKrWmhJQQSUjqB",
  "key33": "2te1R1KzNan3hsw4jQCNzmkRgAge83mPCsZ4jHC8BfvpUuX6aQgygETaJT2p8o5o6RKZJ3sDf3DRJrSZPXWtVjeT",
  "key34": "2ykZvoTYv4DLSivT1Qgg83uZHd1Gq2dk7PE8rQdkv7327cgnudedxEWRffnCtEzceA3kMRQXGSwY75BpYmLQKewp",
  "key35": "37s6kbsY5C5AtRvhogEePx7Fo52USHaWuhx1QrDHWcK7kQANG58LYbPAXiSBNgAKQKnh8bg1urdJn4rRo1FUMDQ8",
  "key36": "3Bjf3JUHxpyN2TpSHh7Pm5E9BBGi8RcddecwbKD2wpZ8mV1qiNbKXn6znw44c8zEsynwyHAhQiqxL6ieA6DJfz5r",
  "key37": "2J4rptLcF6GxuxXS8nyPyxXySQBs7ScScZ3sDL15o2Bi4miCALzTQ7o3LJtyqDmhNY3MNLZfsyN1ttEhsWUM3QNH"
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
