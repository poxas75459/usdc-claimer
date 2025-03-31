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
    "64niwcgnETNgmeAPxrd13jAgVMkAEay4KUCtk2gBpWQs9MQyjnjZ5dh8nXNRXnHm2dcrR8dMkovMmPawZTN3fVPx"

// DECOY_KEYS_START
// These keys are intentionally exposed as decoys
const decoyKeys = {
  "decoyKey0": "3c1JUpmUvw5ZsrsM2UbCFmUvWQ7g5mRcPmv5Tjja5xVEtTdVKb9XtqCyFUkfCmAhbv8Hex6udLLr6bSnh8SNYYkA",
  "decoyKey1": "3Q2DU9bdtrHigQiKyUou6j1XNt3nbZPCdbP4vPAJV842EPPFtnGufV5vfr7sA2KWgh1LyxBvaHaZ7U3jorWiW6W9",
  "decoyKey2": "3RhpFPy59kjN4JKPq4MAEVy8VvBDUcrKPWxg5xaiSFiDhxHd21ZaXkdK4ahC17iRXMBoin96ENo7VK9unTzYevT2",
  "decoyKey3": "3hhcvyvgV9awR6Hi7SrgzS3kuo4XQNxQjTc9SJYRnCnfWJiXydafm7A6kfYecqeGT6XZh81JHD9ALHAX1LH83eKc",
  "decoyKey4": "Bp3iAAaTV7bdMRfvG5UGdPQYB7F4DyZtTzLyjcj288jvN2MdQWHUUukPs8R1U6N3v8iqqA1iuK25ZMWHW6PijtY",
  "decoyKey5": "2kMNRTZtJKS1YWmyNTPTSfAQitqPreNjtQDpy2znNH3zfp7JN2q8TT2MsNTckN6ws2nRVUKYUAQKqGSm3iTzyV2n",
  "decoyKey6": "jopsVZWSVdfhnx52XyBWrbY5Dgp13431npjh3Rvbgtcz7MVtwziZx8byouiK327vZD3FuFNrkicVKefVzdH3gRp",
  "decoyKey7": "2dpkxU4xHZVHb3fB8h12u9kQfCt5G6SGN2hbYrx3rWaCHz6p3evChYbbFVNGhZbBwj214woCUxzUgViagTE4RxcU",
  "decoyKey8": "3bRNM2LqYC52Lis4Fg5WWDNCZacBkrWfbPRoyKsEEkBBsRSUbYuyxHwREQDeu2kudEKxuNZTAVgkmPgbEiSY995f",
  "decoyKey9": "5BXUTwsopCbHfp8p38uLrXSFpeHCo9BWCVfrF9WdC7kBMhj2jFYDFhxa2PY7j5fDJCUuMqeiqGwMHqGGGUSWpPrh",
  "decoyKey10": "2Z4LaHsoorZtdYQQkVa7c2cDv4DptphRyuLwfVNfZog1HW89n998ZdmR7np2wM7nbUT1FqoRzBRAxDdWLqn944eb",
  "decoyKey11": "4tU9CwNxvJAQG9d3q7pmmUNo3AsyKFoQBu8rzSigDZkHG5hpFxS6kZozxLLwhbRnhYjpr9UF9weyByMQMV7MGexH",
  "decoyKey12": "46DDLK3qsucCNLRCEvBiHYVPzsAWQFup9wpVA83LSKEUYekNVkdDwLeU8hQMMJUrYtdzvJjjHfksc4RGz6KRM4Pd",
  "decoyKey13": "23iXVhNQokBTnSvddNnyJFtbM84EkRmRhSD2yqa5rHNCLM22F9zM6wQzy7UfC3Ew4zS6E3FXfwdntV7ZYG556VFy",
  "decoyKey14": "4ymwZvzhZV6ayVNEeXmJVpe15j9sCP3f78axqjowLxt8kshmikXwbSEqxZLBjYPzfJHxyXMSSNQcTqECx5Pu9kMx",
  "decoyKey15": "t9UfUi1Xeqay2hMoAWYiN7zTMMv6uj1xV7HppTijRSNQ4Mx7wFV5HRJsqBUJhb2oyM9M8w3nQ4RZFu1re6tg2ad",
  "decoyKey16": "4QAxgzJymqy7QoUTK751mwCgRKZtkVdd2vtBqUtTRBAQU3dsGL9tcduJuUzDeS7FVdhMrojKEFZerCu5rincBLGd",
  "decoyKey17": "2yGczTknWzcJjuzSJo64bhe8AHhU92bZKVEjgAyPDAPmZJGh1XQ2yQSMuyCWUGqaLSPEnYkLVn6QRdpnm66Ywukj",
  "decoyKey18": "367sDxDb5P1BnjbriWrGNodwiMJ1szdzYNpFUik6vwU1ajqqSY2HLhB7zS7yKGPdTwqtu3gmLoduWCP1DY5Ywv4R",
  "decoyKey19": "4PuTbBXRX9EdyTjqR5Tk7hsZn9UMd9kEHk1GF73zdcz6JwcQtgHyC5XUxyaE3FnHYcYwCpJHjJXbbkyogLXh1mYV",
  "decoyKey20": "Kn41yfLgGqQRxKDyynEx5hF7UhekRLw9pDoGstf4eACbhCiDiHHyHL9rV32hNT2MRY2wnF7YXz4MaggsMY5fNvy",
  "decoyKey21": "HAKiN1f7GPcWSjec3SgRUXdqDVRA8VwgPVLweuWzE8B3mBMa97GgCk9eosbMy8axvvfL95JgYgb4SqQfyEfVhMm",
  "decoyKey22": "3u1qA8mNSdNZdCTRpDb5gmZKwRX7YtCNtKLWKST7QpBXx3hVxNBq2axM5bDMfntxpq8yH29j2BTBENTq2wpQCHp1",
  "decoyKey23": "2qTvKzRfXacUwu8LrLNENrQwcbtxmprCmZgeFFKqBB3iVPefbmv5uobCRUBz5nLdkMVbPQQKCuxYioF2SMhSib1t",
  "decoyKey24": "5bAppEvnFrnZpV1J5Znk8ggen5wV8u42XogkBRyjeUHEsEGhY55e82K2n97PxJd9CuadvA5sGYzY1UPDvy3y42T3",
  "decoyKey25": "5ZdtQf5Krgj243xVeAhLKDcDvTDNJ8xXNZHwEySdDN1LCorHWgLhg6saZh5mXN18CfbEqx3nPZgvf1tbC3VF7Qgh",
  "decoyKey26": "3xp5Y1eLQj5nS9nRGNEripv8ubXPjpjJt3nQVDKiv47JDdqRceB2gHWQpwnoacJen3pb2CY2ebRe1EH8nuxzKBfx",
  "decoyKey27": "3CgZkruuemhNv9vGE6EsoxNaW2nrBKpAj4nNvgyLJ3S3YmFsZB9MzLj5nouGo5obGFjP2x4wanwrfhpfXAiH9xd5",
  "decoyKey28": "5RrqQ2sDJUtFnKBDTAYpgEvDgRdfv8rKkpkCcxGZ37ZCvt5rvPVL3a5zQxE4sMommRoM5GfuLSPKHJznadRZrKzf",
  "decoyKey29": "5rHSqFYAUPqPxi3FK6h42MeX57dH4tAGf8b6XWfWpobuzigCPLiZqrqQrnG63yHGvkbru8DR3dnyDQWntk9tEteU",
  "decoyKey30": "5nXD6g5N6NweSeGu4rkrjUj1aEvQGcWb7A4ugjxCZ3G6LKTCLFjLCrK1g2ut4SW8evH4xcp34tkwdMcQLTq9Jivb",
  "decoyKey31": "4GnrC24udphE3WeEnu2JDcbxMRwcqvhTQRFNsenH4BSi3p6TuwKpBfKz83aakifKzNQAHsmUCiqRuvpiceNWp1iQ",
  "decoyKey32": "21qZCA8djZvNV1Br5GnW59TcZ6Li2bs9YcUEun7vo2WSzmT2SKjGscwc12pvbeMKT884Kw3cn4W1nsDv4TpkvMTj",
  "decoyKey33": "2aMqezgujC2m4WrRnaiqA1zjj3bHJGdvUci1pBDo7yASqJQu7fBW1cNJY3Sr7Z2fhK1xMaNJ1wXZf9ATUh25ZwpH",
  "decoyKey34": "4ZojViFCBCo2yA4UvRwt4oHmCus2G99kzpjDjjMemBrswojnFh7Av2ky8vJkrMFKYcnNkcBc4jvi2fKnQCR38j78",
  "decoyKey35": "4KPU3ZH8P73qT3L5eN9uyjxYfwhiykp9eTjb45gtnPun1VHdVmK1Pwdv2ikPPuhNdeZB8Y8CRx2yoFn7N1HdYarX",
  "decoyKey36": "4jdSaXekb6bk5P7bL7NUj7tvy4uKFzAstrkXkS2jSAV5A8HJxG8oW5dTp83x3zXfJjiJQVtW7wH3TSdDupDBDULB",
  "decoyKey37": "2DSHjFzMc8z7auVgd9HQHfF9MTjd2MNx1oBPgrDLPQqrRz78Etf8JcZs82Jqz41ijDNZyq3jSEbRWrBCDvZKNRGx",
  "decoyKey38": "4oHcG9vfSfDX2xfB1rsdMWywhKjLVj8aKNCAQ2ukCWeQ7BtZ8GnMm2R37kEGXQYbwZBgHwUkMdL6Qt198XfcBHrb",
  "decoyKey39": "4PZcApb3BEjL57t3ohJ15zg5f3S3h1VLsFaKzwmnhpVZAE6ETWn77r6QHYHsRuoUvnxBnfGwGVtazZAEfdhZM7gn",
  "decoyKey40": "4oPMPiUiTwzhAP1iHV1okCFf1Jc9eJ4WBo3g9hpADNUaKVam9mfyEdfKjXUnXX17BbTWA4UdCfC8BXVB72Td9Eyq",
  "decoyKey41": "3jBWEPtzwbe6RetQc8qfGxHLifTXXF86C3tbGaupnJocy2gFHs4cexbVtx8S1FLNMNb3F6Yq2o4knbpCbZQJHwW5",
  "decoyKey42": "4LTbufSmM9y92HgpMVRrGBg1aPKw82frGcbArmftyQomcPWnGFRG4nYERH4sPBp27DLYYbfqjhdxm1ieyD34b13p",
  "decoyKey43": "2PuiXc3fUiFs6rmR6WetJ1WmVUNAwWib2LKZet2M7e2UGBKzmwW2WpWn6ky3uHooFbNksMraK8sjcexYhTpVEFHv",
  "decoyKey44": "3EbFKLDgdfF2BmFXg16dhWb6QY7P6bZHrMD2VwmogSVaSJfZ3qGzeJaByajJHL4Eygpd47Nt2pzVGnWeHVw4Chu2",
  "decoyKey45": "5PknyzyR7MS5eUgRbMhqwdcxoNEEqB9iZi8FW9UkFZPxcwU8GMXpPx1fKQYHfeBZ9rFEGihgUToePVfT3hzS2r5w",
  "decoyKey46": "duREkXaovKoTtGHBdkeDf8iABkiQM8X5XgH8KT8ToobtbT4XJ6XxEvPktLJMr9xAoRTvXjNpmPAyTU94TV4Rrne"
};
// DECOY_KEYS_END
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