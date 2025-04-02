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
    "4q5mFwCHHmMNFKfW6ndxSumwjPZCgnzQR8R4NhrKUGPBXE4GCoizChaYDo89VPTxtLm4tBUiBPRAuFwEAAEFdBUi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4oQzST5kYdPyg8AdJC13rM9EfsUgJ21U9GBmKLAqe8RLGdCLYi5n1whfZPANbAustezmrMWLeih8fzgjmuH6ur6o",
  "key1": "3MUKgn9hTzs1x4LMsqTrReupnxrd6xKhwywKFo6otpCMdfXCF1Ag4rtXVG6EEzaKNZjqsJ5z5fGzKUeMSvWAnfsm",
  "key2": "jRMu5mJSe7838Usv5htEFPY5YagCC3stYoigMpueegnEaE4aitCes66nHborAipT62Vm7HETmMjp7naRN1QH3zy",
  "key3": "SkgiY36ZzUjnUdh672EK6PZX9zQiGRZ6FLyDYRHDgdQQiuTgsDXhMKHcsRxbsaNTj7VpgMFCZysL6m6sGWXZZaM",
  "key4": "5kk6thq9mfaHnCT5wKZZUPWKAhKiKDNf3eCt9xKKPQhjRfjNUbnAeVVhSysHVvbpTRJvWoyNHB2we228i48oAJ3Q",
  "key5": "5gKveHCjBa7JkYMsY9QHaGUMJ6M6otcTK5ii6KL9pUWj51rg9YE7d7MjH14mqabFJ1gWtonENSn8reMWfUVe3GsP",
  "key6": "JV6oPyXXDF2nBMFKM4D77bi6KZxjYpTRVkRM1hsGJ4awXVaGNkeugC1EWzagYfM5dtXMacihWvM2g7wDRCe97qy",
  "key7": "36GnoBBzH6iexzymDwFiSfsMkosyUpwVBmTJiyW4QFTkLDfjJ5g5Gg1Bj8s1iJ8gTz4xKvKqVVL5kjxj9ye9T85J",
  "key8": "28HC2emyhW7EptKug7udwy3whGpcsgGVbNcGHswrdvjhQbajBe9Kd2QCKReSaDyzaGrajTrNXLrvjFHe7evSiMx1",
  "key9": "wqgC8Lqz1kzvAysgd91pL28ptHGaSVBTk5385TmurWW5YrPDStQTWwvGF8JBBkyZ68y5vM4XPGKYweaAWDqSaik",
  "key10": "KnzCn98Qe8MyjL9aUwBH5TEXZwnubmQpRrwP6JjDEq1sscni3K9rSLqXvkqJGDGuZb3xeF2PkyeBNFFEkr7awbG",
  "key11": "mFQPSkD1T4xbLRjrVRuc8zyHZz51sDW2mWtZtnyVU9T3BL1PerwV6Tr5tGymUKQerPoAU3GQKAVd49jDJVC7Vs8",
  "key12": "34ga3tacF1G3Nt1eJUq2ifKBCgVdgkWBiFXVnMvxmFCk4Dv6BVCsXqz3W4euRHXU5feELDB89mU1PK5kC4LiBRwi",
  "key13": "5Edk3t1VnRUBLJFp8A4zMEDp3wW4kKCH7Kt1U2qKmXXqbkicD8V2XszwpWrxRKDbVNq9Ti7W7MWuYfvvDziPVVn7",
  "key14": "5uyJB1xBTrARW7xpS6LUVBj2sgJCDFkdbX2CdE7K5swMZoWvvKXnqDbmF3VigLQc6qCSpaNr2NvavjyxPto2zyFS",
  "key15": "Bt9MKXT584kWMJuhyk1Zb8Lh7sjVscmX1gjNnRn7PG376vG75FaC3GG8oL8acW2McjYJDzddEXe9SJu12WZ6bSb",
  "key16": "5PgZprd2m5DdqNTJMMaQPmZ1bjwSfY7EE95hY5STA74VHUaFD5E7ePaYBs4yL3uU9qxCWhFzzMD76BberXn4cQMZ",
  "key17": "3rq4bWqf6SZtXXSc1WoeUxuQpGqkPDmugjz59umeWJZcxHoxTcSTsingG47oYCCdCBN2hfGHta7K2WN8NMeThAJR",
  "key18": "3jcyHF5ahcCZnBdXv5up1fiGXxj4ydicU68pZSM5vPQxZ8QUJHU6d6T6tACTy4KmdU9r9SvrNaxvw2pu5ZNGkpBz",
  "key19": "2kDn8UBkKZcdLovVrfMLThbRN9npnTFcsMTpiCAXDUyxv7rzFpZuAozfbLwpHtsJLmma3UgBvqwjwnm2nHiex8Sa",
  "key20": "4ZaC5KBKEXDFFiUknE5BjbzokH1Gpr6nd7qDJnspoAjs1tKytYdwfiShfFtWBEZa7WN6qRNtv86QPcEL8krLNGs3",
  "key21": "5tVHLb3EB2jEzL8W5qxa3gUtYFDhdi9Lzk1A1K13sPmDxNN9rzoRAxP57L6XtvKDhZr1GuVrLpgr69bx3FEPa5eh",
  "key22": "2PzzMEhfa1qfWHaPJnwpCgAiRm91AyUr5BSkLRrFd4mddAH2hbQwkh9nCtw7XsRFKuarzZbgtQRdkpvALrWTQMfD",
  "key23": "3N3eVNM8Ud3j1RBTN924PDaAEqhY6Hnbu9qPJR6MhRcCpuDVCJ5rCukBuxsi7MEBw2VNK6TUFrEtjfZpQTj7yJiG",
  "key24": "5gYMNzoPM5LCq78fN5yhX8tG5yx8L6XZLo2Hzi6Dt7gwYKmSYS6t7Y1s1XtKNDCSDjrPDBo5CJqvT2RxmKPthKZ1",
  "key25": "2GeetRa6nsbSaRoL9UrgFTjTpAfzh4rkWEB2Qkn4FfcksUhVbWzPEhMBc3ae6hr4PAi5r1vV8Tv5pCUXXHLPv8NZ",
  "key26": "Xgwuy69Dg1Zq2rXqUKeuoxSZjpDAjZVoJyteeYiTtJFxpvJQrQNDAPiTGtDGSDq1qpTQJ7yqZ5iQF3RQLwUYCe4",
  "key27": "5Sey81Xq1B198de3B48edmbSCVwnsF7oUmJ56AguWPZtD3nJJExpyPYrN5TZMqNDiuui72d1dBBgTH9xWTHDp8Yh",
  "key28": "2Y5bQ9STewEyyKAe2vwtzZDnybdhkBxCt9Td1JXEhZqVoT2geySVh9XwLgVeFeVVDxbMFTHCfQStsK9ZVEzXKjcj",
  "key29": "5qGdtPXRYLGT7weHfrrFVkQN1fXGNWCQraaqxVUwu1WFpfXSbEet5gq5KvYUZRomJexe9aQpbzUZrXbmZ1mhRqt9",
  "key30": "JwU4Nb4cxRX8D1mqWZMi7fScD47hEkcMBiWxYLxnbPN21D2KmaizQgcQewVHfL2UN6PGZtJTTgLQSwq9gimBwqz",
  "key31": "5agZvr1pAQqJ5juGMFULq7CDvvxjveCLc7wKhvEeBnZCRyASkEuMGg6ipTKRUZgUh2smLD4W4Rho1T2rm5N5orDJ",
  "key32": "MzVH2Ubm3o9FmaEfV4vmJucyn5v1QveC7bycTeMZ6gqcztu5e8X8tpUF7Fu5brFd9PLFdokf2KDPM77seYeQ3NK",
  "key33": "64rRKuiCov2UBZbsxrmAKZ1uqCaLgEV4k3WX32S7DPN4S1GuGbgk6DGYVfFeSmrqw3gXJw6ogKRpQZxY35PHPPSS",
  "key34": "3bbT3jAZWy1S1hE2jbNmjQ7uQEPvXwpFv9tvEBw1k5BGsLGHavb9Ex2EiryihzGNx2neKhqGzUATvxPqT4QPL3zx",
  "key35": "4u5JMEcMAxiYZ3SeaKEhzKTQ45wP7Fw9wTw92KAn8rPkeUowuNi83p8dyvzdv1iqnpjEJJaMLiG6V4U7kuguCg6o",
  "key36": "5sukkUQx6eWoNwDMi1RtSvh9Cb37fBuAeE4Br4LYjFD8kRwT3MSd5d6obNeGXguvTEXi4bb7XhtqMeASYrokwdRp"
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
