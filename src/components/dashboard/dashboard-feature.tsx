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
    "5dG1va86QSaFxkheNFP1WM8dR4ah9tPwYivFqHQiQXYD3SfTypmBXy1NBGe76eK6hZHN1iecrwW4hKLxfaQxhGE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "yoRNVhaPy7jqKmUKoN8AhzRKNC725caP4LvpZx1oGSv2HBJwJvXZ1GYyoGpjGky9KaF8nq8YC3fQWrqd7VvTCGY",
  "key1": "5RvDr1BCKMpyX4QqJFV7FAdLHNbkh4Dnfozd2jWF3CXrDBwczpWmfCwcEsb3T79ryyCEjKL8ocJEzyb34HC7sHpJ",
  "key2": "4fTkxFX99DujDDJHtWSULJDV1uJC3yRxrgQdvZRfDvMSSJ4Qq9FnkgTvJYTQN1okDLtjmQfC2om3aiTJVMZxfCpE",
  "key3": "CJFzrNtGyXkqfJvKSfY595n62WSNKbS26Xam19WbdEWoydDGaXmJsycxYA9oCXoeNMPDcUoqakRxMc7Nq6ekfgT",
  "key4": "5ExLNS5ywpVRVB4fjq4LpSGSXbg9ZhNhx89pS3BuFnL2Tt4Zu6MxAScLzEPViCUDxJyMGrRzfzPCLVewSoqSDJ9k",
  "key5": "5Pg18F3m2oFDCXryf7AJfhnHGgB6tXsRiDkvthJycHvw4UpcnUQXVZDWpTcUqvxrYwHo7SbhVXST6Gd8ZYtefcR6",
  "key6": "Rn9xeqwMikup5qYLdKSkhvkwXWuAYmiec1BbexuV5Hw9mnG6i196aZ1yP9TJvaUX34irFrFffo1rSNZZG4f5Vgc",
  "key7": "2vMXBhWSZf3pKEtHEdsXcPeQ8hiYc6uzhYg85hYuBUc2oUUzjQwKuECwx564xoDYQ5Q9uWmeriURC99voFZWjPcK",
  "key8": "3HzcCHnB3sVRNKGhnLuYAGR6GzY44KHsHoGip9UgbTSjBy7o94d7qcsnzLxWm8padYLLeYZmcNUi4CqywaPXDKE7",
  "key9": "421dMSDR4jwwG5wvQjws7eCwiYz2VqQfiWM9ixhgXsuN54hUoVvRFhhmUHH6kvKfSWZi1TZpmMMXAKgGVGFH5RL",
  "key10": "5f1XcnnFediFE9nviBjcXHdiYQG6MziYeTasSvpvFyepRkxjwRNid1keALiTW2QSA4NiitUBcragjWcSyXtN4ykh",
  "key11": "3R3bwZEqCiYHXZTKrhHGGvXqGeNNRKdM5LqaMDLRhBzmBK2SrGYw552sBaS5BrEQsjTj1nJRniQbdVushzLqv58M",
  "key12": "pgo24QrZeX5pkyE2cNieDPK8sX7hNsrrTy2TUazgnEWmUj3PZCjFUAEya51SqEmnGxkAfroaTMc83t3JMXF6UGu",
  "key13": "2nMcoa2BXHv4sAZhEhnWPAvFmYdKb6tsrzGcWNQTVLUm41ZJaWy1pvLjcQeBn22JzS6mfdTGULVDphRPXdob5uNV",
  "key14": "4qdS2s9Ps4cparkKZiEMSYov18c3f3rPLvFXFuMSLC8RVUH3FQNtWpzvawMsJe1YfogbSyF4WG5Yhmpqy2HtMuP3",
  "key15": "2BeWGVY6zVxcs1s3XNLNtXr9dUtEUzoa5K4dvUHYMjXfUByv2vAUdhBVcRYUKhE8yCkiDmcqBcihCtM94PxFtPyT",
  "key16": "cnqNzJirgjkmseCJcGdYHJ66DdyiXWTNYeeYKU1oJiiGsXXNoBTXUFyFFJ376EzahyV9dBpcfHTyGv78qBXMHQq",
  "key17": "38wAPCCzRkxLpknRwC2t4nAHrcV2HAKLm8Ca5RUFPamPNNcWBKzyvi6Tux3yv6CaShPwtKC1WEhEDfKYTPUunjZ2",
  "key18": "2FPVAfLSZEjdD9qiMrhRLfgfz2Vr8kvVArarEHuniUa8t7FAg7G9kCfPLyXY9QSnS6nCrypG5HKxWC8oAYKfvBW1",
  "key19": "5G43eWXJod7F2U3qMWwQAwSubTy48FKBsovCMUC3DM39Xt6UBabgPdP5J65VGSW5xruALTVrJ6kFQEHfeYDGMt1P",
  "key20": "82BhP1FhMACpWctpDYP1RYKRF7j4VbzuZEEf8fAY5MacftYQvPJjZyFW8G33txxcUrR6DnnCarsUcZcNxRqsAYu",
  "key21": "4iBrSh1uiNBBH4aiqEmETxYbvRPbaYzxuVdfHgtavAc99c5h44KSVpuLPt4QFM1TXxfLbuzaaV9fEssujaNS9zvK",
  "key22": "2GY17MghQvf2YUftoGrb95a8eoQTeLS91RE4hyRTFrAnPvYcdQHhnW46bdU4WdFPxvw132Qrk5x6H7JszWi6NCdv",
  "key23": "4iNkr94VZGHMFWbU3eoBk5mEKHjk9rfzp4V9S1pa7mmDjik7HyxtLBJ53Y8AnxsGD57hdY3XEVudVLRAcJqVYs7z",
  "key24": "4TH51fiwe6cNixvTRW4vCLma6BGKEs1iqUZccerBUajgGQ99JFBjP1MXEJqcWDbns1wkMNxg1Z5MmLAhBVd5BEN5",
  "key25": "2EmELCraNSSVyhaXsRPY52wxZbqy9CpuLqA9BxAqxN4fo615RHKKw6aUzQUZQbTZWJPV79zKv1bA2nPJs82VH16Q",
  "key26": "2fXpuVWhJYUDkcCSWSaGRxE9d3XV1YPYJwFW12oYXdXnmFKcuZDXSvGvXCta3kTajadKL1WTeR2n23ZQ17Ts8UML",
  "key27": "41Wpharc3A1jXTAfAUQBBNEoy56ghafXxyj96nGeHGbQEAVXAc1QwyeX5iVyEsWtSmB2gGXw4JcY7LE6YBycwH8z",
  "key28": "JfPJvnHd11AAZK5rz3YwpA2gKwiurVVj9vPTFr5ssvLTf71LVL4f8snPnjEAYebC4yb8DkFGTowC5F5xYXYDtbj",
  "key29": "4PnSdvS7SBFgkdt2M7r3ab9RynwMEz2rBBgRWWyEnXqt8DZi72mjJ4HmnU8K86wmKFwh5tFdFsde24cCkUKuGcpD",
  "key30": "4gDy8EgadN3dFCsq591U35BAjb4QWcPnyJG44ZqarKCb3VE5wWm1ETfs5MCKxHVkUACj4LTspjiNBm9sjsPd9DZs",
  "key31": "NKU2Xbc41AFTxztVE96EU14oaxnjm3UZkU1yZaVyYxHZvyQfkin3Nadi8rjxsHXAQ5jBJNVfHSsm2UXLSGdEVcK",
  "key32": "2ErRGRyLTbhPQHtpHQVCHVJHnWizv3dN5X6jANi1pp1TDU1qkEPcpBoC2eFv9cWp3H24SZmWvMX34wMkmqJ2Nxut",
  "key33": "joTt8bY3b1ngr25xz1VKxD7KsK47uVGmJ2nbunCVg4mLDKbDE7m8SpE4U1Z3a4VPTfA6gs39HK5ooUYsFguxWuU",
  "key34": "3qDnvrowN3Ld4Vbg3AjbrScSejNK4fDasVJ2M3eTZcWm3j8G4PsECWkz5uDVFLU2pAGqE47MRzu2boZH2rvmFv1b",
  "key35": "63aMCPkuyY5iZD3C9L53T6iTiXTs3dMZ3Hxv5YmdECXPNigyPVUMQaX7LnCTM2UznbYJcbJd3ix7unHwDo1vX5tb",
  "key36": "2b9LKG2ehx9N9cdW2QR8Fyk4XmbhKzttGgpMTtcsst584tvBQL2LsAdw46d8TBwWAobshk1e3wMgk5maRCFwASP3",
  "key37": "3pfSCBTj7DNVRxvdZcWjjJzzM3HykRjCaWzLpWJqffzQFywJP4fbQmZfK1mYoaf38cKTJYUqrNtumcHciVCTnqwQ",
  "key38": "4g6Dn7a2b3R7WRLMFAZDqVKqbts97hirn93rwaLwxNZfcL9CW8sb9CKSLUYSCvpYofTeZDkhA8h263PrMVvRc6Ft",
  "key39": "5uFu6Ecf7N7ysbCWo6oNf3KzFkLKCcGJz9oitD6fAthuSBty9VftNsXfmq6ovfPyQgekD4aLHQxz6YvwYBsposkU",
  "key40": "49Nn2ENfRLLwn2SY1tMWtAS7JVnYVwhPkRBH4wFfSQca19WUun1Jc9PkWS2iLAjEmeC7vLfX2DsqTpEbLpw9qNyA",
  "key41": "5nSUMfpaPjZfbfKvJ59AKfVGiMFn9L76uYVx4er2x6WeoV8sSBmSzRpBjReAthQXedZNpgAchcHdNCX82558WwpH",
  "key42": "2o9QXVrj1Hw9GaTkfcttETyQcGXGjeVyLFLKegnpEv7qbp36LrSq6nGTEPWxezE4D7S4akQbvPjQM6Y9DMTzeppb",
  "key43": "3PjyyyCUkkCKQ4EMQ911jiXxvsWT9z5RhbhRY6dw8SBkotDAzsVDpL7g6dsMHSo58ykhM4TSBJreHwJo2bDBQJ1b",
  "key44": "76r7BfL47AP73WSh3CbG8KK6k5tYvtuHsDjknwz2Yyunine4eUw8Jjj9KxnYLA3Bu2fZjjhuDBWAgqGCimUwXgC"
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
