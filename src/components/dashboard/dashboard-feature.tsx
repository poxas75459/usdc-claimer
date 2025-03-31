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
    "3pNMNRKjpNQHmorXxXnDkEQnP7vDXTcHaFMyNnDKrDN89Xy674cdVs2omSCdr3snwm9wGPH3VM25RerSXxqvF5F1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5UdXfJbzJXvRwmUDT7AuUGYUHj9ag5JmiyWcwhKSbmYVkYxWAckCGUCAMnSn7dViPeerhC6stqQg5Vopkj645J96",
  "key1": "cPnNNKyhaJnPJ8TeXQvoUQAD4TD3E9DaLrv6eszpPWAG13BG1aQXf73gk3RjmaiiCrbJ5d2XGTDm4PAqLap1Ptp",
  "key2": "5VtKTLzxiJCKh3YUgurp9SkkdvVH6kR8xNTXHproEw4xh77719aAahxPR1HnE3EkdiyJgmFEsy7TvyWG7qyRwW9K",
  "key3": "yfrRgeUAijV4TjFRyZUJM319eRCmCpK7TXFiT16dDpTauGQRWQZqJG14XtsXj4e4Z3TJ7FCHNEN3sKA6m668Qma",
  "key4": "5fQE6VeztBNJUcwiQnVQrpsGNiuEakQUPCMonahZpLBaWFQesD5DqaFF1qjRNmjirUdBzrysffapQWESd1bTYZFE",
  "key5": "2U4BhWnWmsp4cZn2fJsUaPYHY8SDSAeYHAFRGMgmXnu1NGvp3YKE6bKa7BSZ1b693wbKWHjN9sXDEcHe2dKyyaDS",
  "key6": "34q1BQrmVcpMuc73qeuP9UCGLMooQCr9J43mDytek1ACZZefpmXbrxX8pCDK2xiJ7odzWz6CbwT2JLWTQUVPULue",
  "key7": "2ySL598tgeRpK2BAqwuj5vk1PVmgcAHfMvYwafvUxgMomEYSvpktZphZmvqyLpKE9f431wCNoMfM1fi6gSigmdF5",
  "key8": "5g7EeXCM8egQPGkTsgKN35ejYnBj7UGijLf2cKFithEpzRLTUxXpakRNyNDKxcs21XWYNP9Af5cgGFRUvVqmmHDH",
  "key9": "4XsD6Z4mLi78rEutmraCeu5TS3LFCjBPC7V172k69G75cDdJNx3s5jCi5SwkFQ2WF3CTNgabrfsHSfvo33UH3Nrz",
  "key10": "B27ayhi3dGsCMKTgwGhFAHZ1stMYi24sPKJZwmr5238CRuavj2i2yMgYWUqtU8kYtVkyMbtrvPXBzUWXiBmLRaL",
  "key11": "dZLMe3QyUHD9p8ditB8oK66yBbboptBdw7KMb8nkv65zc9Kbh9A7bqqVYus7HXLpvcnAzuVeHpXtfYDdrbxw6M3",
  "key12": "5c1vQHoP49d6DpZZDg5hikGHBusir4uanZrKFp2VLJDWJEnpuQtFqHWwKkheYcovH2rUJvL7ugmS3t1mc2cZCN7G",
  "key13": "2i5aw33noWUyJbKw8kCAxR416rooaj2nvd933kLsmYKJ1cdGs4174tnyv3Azov8UEsJoH4GFi3oLdtMTXugcCMWg",
  "key14": "5AqDcdVdpgA3KbfAoYJu441dM2ZjVkJ5NQJfy7K3yJ9ML4AZfKkL4T6dk7fwVgBwq2JPctxy5Xf9ESuNR1bCCpRe",
  "key15": "28z33K7mdqHDsdU1mLYEF4MxjM6oFAdMwF1CPULFHcZomA3Ak9kkD7CYwKY6feRQ62zCBJomJ5m4rVzkJ6NfuXBU",
  "key16": "WJpywrksbaz6MFKbxn6WNTsyyuLLdPx9FAWQPr9L1zGMzXHgAoL8E1HC8P8ZnUgRXfJ7b6JkRohi4Cn7mJcbWdF",
  "key17": "4HsZq3y5c1xv185UwoJhJQpyANTrSqg1n2bq83ju7CRcpNxaL7gig8catJX1jqSboj6GHV2bR2P51H62coUAkVSE",
  "key18": "2aek46Q6P3oqHe3PbbwppCcZ4cpECFpi4gHBbr5mndraBptts4WL9xxDjtmPdA9iV7N4axGeC9dN4hNrYzNECXbY",
  "key19": "65vNfLkwt127MnNoUvRBDF9RH6oQ1gbYJeZ6rnwAKy1vMCStsAchpEX6LmsvS1qqYnFY6ALPwtHs8sSZqz3HR3JZ",
  "key20": "2vRRKogfJ5Zfeety8fG8Jo5uTTisVnM8ge1sFfuSZ8hgeJJyymE3yRM4URNRFFkqLTZeMWHSqNokLnXSoPiVdcZp",
  "key21": "3zr4Y1RigdzQXJZse2y9idG11MHWb3kiseRHdzuzGjopB4uGvuJ3H1HigycySbEH22d7dMuJ3MYRsbQWYirgtmc4",
  "key22": "3mG6RGsm1AVNBCQ4zW3aNgSN6eqApCKptLnMGnQBNRWpNXMuSaHS7SkWeTNFvLsEwfu9HCzwqSTXeFMfrmNag72j",
  "key23": "3bPzewNLwizTqRdK1vbbjJGZVKy8t8DmuibGZNu2mYuvKUGUZZxtBuarzkM3ZFUWEw2nQ1U1SdKssbsPzHRCFZeD",
  "key24": "561fGX2eQMtTeheZJVZsrfLT7ynDehgGtPFeey1UzsAWum6LLYm7vtbNxqQD4gz5KEJFSAJMtKgnWgNtc7uS9sge",
  "key25": "3A6BeJRGxH53U6SSGeyCYmjYSNKBre9Mt16s9D8vJLMPFbC9egPrqkD2RchSJLytPENdRKsXKhauG6f4tuFXzGta",
  "key26": "4h2wwJazor8iUUzaJhB62DdMwcoZFCVmkMNsMpGAQDSR5gEDUdwcMskDShfLNxSHCUhgb71NLH8AUh2o8Kf5mrNm",
  "key27": "48VyiM6FB2B23uaScaN9upGYk5UfcP47hDSZ3R1u1Vtv94VhjZCwaE4mUMjHjUFc9RZF2qKsD8EEgyTZ7VpQv1wx",
  "key28": "2wnscLALRe9v368mL5FdMPabpKvqqw1auD6scsPRMKL2R1P2XZjeAD9ATDcV414qZWxkqApzUwwWyjFBgmcUVYfF",
  "key29": "56mCidN6heNj2j5K2D5p3DMad3Kw1qh2HUxvZQjhC2yFV6Mtu2VZJVjMDqsvP8xzcEi3BtDoiXL4uuSeHs2u4haP",
  "key30": "4NNRf1dFRzhfPzuVeMhG7vJQR3SFxyti183CpJWNLFESWcdrKTK757vPgnpYxqTrdURpRdrpq3ZrFe6u8erZA2hx",
  "key31": "2pPiduxRWCy96KTLZS1barVMWbVMPqh8iYDy4FJpYQ29eYabuf78RVBubrjT6NxsSnLvhD3RKC9Nt4SvFUdq6MUW",
  "key32": "3jPpJ7qTWxZntGKmrZmbQPzLys2etBLHxsduB8HbiZxSaBiQnX6zeHF2nnejfR1citb5fvPnyhQUzYUYcuSX3SaE",
  "key33": "ePjGeNGS1HDT1WjmBwveronA8xeX2fh9iCBHdP1Pca7DyEzGBTtYCXsoBuWgP5AujrtrqTKxJRonkDx6azKCZVx",
  "key34": "226w1vxhs4Z1eZAusshmcoRQnhrDtYpkorcJUESFFjkA43LBKNRQpGNKTztgCmZo5Z8Nrrhxh9v62ZqGwHk6N6UN",
  "key35": "51ZZUFCnmjWotykHjRtwGCeGuKUjrwdokszvE3W6xGspyFoyWXXycnHaLSC8exxfDH76qWuCq4g39D14ndgrJjhr",
  "key36": "4pXcZ5w6pbTQ4nf3EfGasNRyFziWoQHuNyDZYTHLTububNtJmrWB1cMzgLrKF5VW7HFm3Xp6gT2TrJd6h3EkeXdx",
  "key37": "zvrEeBnWAxEkGFxsxeyhh85FA7WvZEjd35aieRA7KAmTPLfgohKU5TQr6qKPhLvHcEk4juN5trTiMn7fJ2uMznH",
  "key38": "5FZYU7aaPCtc1WtEp8HCyaUY9p9Z6nx5i8kxGx2oGQwwbYh6eW82zojhYjKCKmC7ajaEiF78NPZdR4xxPpAQuLB7",
  "key39": "4bQoT5PnmWTScrn97APqt7Zb1rnfSTCPRKHfs9ZKea99LzVUDJSq3zcMLgAyZsrKNe3z2pNFLQaXyzzSsK7wLF1q",
  "key40": "3fyyzGv3gjGFxzvGiKis4tbHTSM7R42YWs2wtNpQCZy64jV1f7cKWDYQJdoR6GUE8SNr5tU4LMDsdkYTBy1rrdEt",
  "key41": "3MX1xHbUvaf2sZLVwcaFC7UTRMYdDozahMG166n2kq78xXQ3kLMAsKTGUkpnijMtW7eGwPoVpGLbG5SyS6S1n9vC",
  "key42": "2bswy4nefjajFbWMJqFmbBzAaLYUMXD9yXoEgQu6PaG4SLEZ9G2xRq2JJ4wKFn9isAtgLxvgshCb7faatVadHzsu",
  "key43": "5mRP7sz7EwU9kH8rS3iJbm6KrTJ4rzv1a7fhTZxV1HHyrFCJNRmMMcQCeuPTUmkG7cC3tPzUoCzkEj5zSGNiaPjk"
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
