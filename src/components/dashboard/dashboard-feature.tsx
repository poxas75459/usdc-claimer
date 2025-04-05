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
    "5FKXkFHS97UWgMWr5MAXWG8s5NiqfawpTn2ByhcNZkVtVRCmw32zXKGRfmyfbfZDaPFFZn8v1FCYWnna8zD6nTMr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2rCmgDiuUWVy9UhNUW6Gy3yXyHPo9D8nRQ8uAL1HNd5qAdg8vV1UkgwvxbYs57jG24sf16hx7cvTJUmHyp8QdBM4",
  "key1": "3915acnLKTGr3ntmvVTmDQT6vNjKDMrKignrcdAqTVtBUzDbBG92gDZfh75PyWUXTyHP5cdjDa4qj4xtYBP4fH72",
  "key2": "KVBUKKvWTMquSuZXbuvyRUdpaYfFqsXw2oSgdL5RbMuJzYSynEaeFeEr8GFK9FAa1Av9hmfEo546EwDLLrKkyAm",
  "key3": "6Sgj96tqhSPDN8Z7wmQNXegaq4Nqkx9WSYeUzWZx47nwSnM6sjguwyvfQUT9XzuXECBYzvt6Qdp7YvvyxiyTqPr",
  "key4": "5TuUEQpJToS7RiJtB3azaDuXc9KA5P7TzvKaCe1ErbLKqKA2DWAc1PmC3tC9Y8pKji13dbMymNyEiCnpc72v1sh3",
  "key5": "4VNBE2jMXbwZT8SLfJPHjq5mKHE1ZbhjhVYi9KhVNnKGfE6R1SsThL3QJxsbTJnDZLKaAvZLwj5ZsrAdX23MioEA",
  "key6": "2c1sPv3BDdjnVPMp293skDvoXoK1wfnYNbUcHkieJFoursFboimdcZSbzRWEj3CaNh1LSoHfdkTV6FSELHdTgrTs",
  "key7": "123EdSajKS3Tm2Jk1aRTfNEXC5XuSij2nLanCLHD8ZZmHLq1ddWKpGrRE6JwWjewoZ2ArTSJtrc1FtQyhXdasSeX",
  "key8": "EmwNZzKgWcPAyYipbXeP8R7eRpnRwPpWZ7GJX6JJmdWH3PLSzS7sXeWxcwPyXWQNDRR7TBPDCtUenQ4vyEz2zLm",
  "key9": "4icx2F6B2JWDxDJiuqV511sX6Y9ns6vZZdyi1DUMvnAAk8XUUrsrfQThU2PciVufPFsnpjmnX9PF26msqj4wWaYc",
  "key10": "5MT5dbDPKnb3Zo11wNDUdSf6dUcQyZ3tfSyG3goWqrBmWigyLuFQvUxic6AvUEvgjJbf3sM5a5HuzR9GnN3Np9cM",
  "key11": "4yWdey3BFBQWvhXcqpHST6jUy3sXCWVGuXKT8P1jWtwobjhR4afgChqtNykWY8Z1FaUrLevDh54V9PPCZUCGaAWZ",
  "key12": "4HvkvkSobdYvbafJ1EtLWvvSBLBENNQ8a2UcvxvKB3u4SSnBTFvGKpbmq62CMbgntBpuWvNmZqRy7HR79c2McujH",
  "key13": "4bu2E37kbcZhhRMpbuGLTewScWFbm7YsUKwSZNrtBPJC5T4rESZxrBJWkD1gPYvsfktPkyeJAS38s7BCwHysaH5p",
  "key14": "2PHCSSzvsAAdKCq2AXEHsGsS2eaJ9PhmUNMkf16kX3B3Q7xVyrzr2FU51U9hWVqS5VSDGRXuwshxgmmUHwNdwssh",
  "key15": "3HpxQdzsRDYAtmL1E5m3hVbjcGHncFk7VMSnkuyiaE4bgTrEJnoZX5HrS47TTryAiT6CZiMmRnFRtB5ywzraSwUy",
  "key16": "HWj2DQ9B36ZXyP8ZRz8kvsRcqTffSTPiZzhdFdVzC2qMwyChcguMzzVGCLYtejZiSEnDWFUDZz5tp7z8NnM372T",
  "key17": "3T2aZYzAq9PR4pbqJeCfw4ZvbtEgHMuxF9ZtvsbznuHNi4oAkqWSHbmo6SqzgCpgAHyiCbijzG2FQUCzUPvy2iP7",
  "key18": "3phK5SaPLtLSFXyZQYpgicnBNzzmKFc9iJdo8wgf5n2qTQcw115gu9r9gtzDjCvrSHJosjLeZbrGdRU3itX7kqEz",
  "key19": "3ikBTJHmTG9kYE4CqL5QrJAUnGdeV1kLuiWH1fSv4Te1CPbXkiT1MMFJeVHY32BGHCYwiheJMYTBini5f2asQC2q",
  "key20": "63n3LUPMjPHYkuGZeBbGW6eUJocFKq9FnWgVGmxkpQJdESsHfXTEAfUZLjhaRv6kfhcRyAELGdzVWnXZZNzkf6UW",
  "key21": "46TRtvvjezwL2u8rQu6aSL3zaFHtu1A7cZYp85uneEDfYfzz41gPSdKa8xWjHPf4ZFmGYrq93hAPYoySHrKHAeBV",
  "key22": "5GQsuKSRUQZTy33JUaDUnFSyuPkkx9jUSPcuHdmwBVmJuQnjsAwEWmskQE39W91qfwL167Ej5NMozcTvwWbjkQgu",
  "key23": "5EkCJGVfygHdZgANu7a4LZp7hJ6mwi838o3vCHVcCuymPCSEX1SKcHWeyCXSsQqLwuBqmfX4eCNfguHYjKqi7ruB",
  "key24": "4Y9KwAMtt7LooZJ8CrGNKLksLkPUiZ3fzv4uWQVREUBZUqH8xE9kPWjn2XB7VLHHSZjkSPq3rZZwS4kzV6AtmMkj",
  "key25": "5pibXvXRbLPjyzUfvjsV1AfThJVE5fwFfnk2MZPqMqLb3Ku6sGsVLqNbAKGaSCJmi83cCaWLvaqynCPd45Zkze43",
  "key26": "3DLndkTFL3wUDoo7qVWiHhjJ8RcLHDbW3VeADbsJKw8qwzykpHXb8svcojsdid8EASAvbkaD8YHLHiETYWzy4dSj",
  "key27": "3VWEAGTPUvFE1ev3TsZH8UHvnKHgsA1be3G4afyczAh2ss3FLm9KdzLmC8FUEKnidELVad2eKA5yfs2BdSm46z8e",
  "key28": "34Cav3v9ykEJnnCNWrryU4aggKZiFv16V4KBF1wNrx9q6Mqg5ce4suDtcenEaHpKJZKJExnNHt8T32koS5S1znEP",
  "key29": "uicXvaMKAxAYzRRa4Q9fK9FxiRBnupWatLor6x9CMmSPdD28ycimXbE8nmtpqvyYexxyki6c8LYbAsSz8ftFFcZ",
  "key30": "4CrfVkL97kBrqAd2SpgwjvfUwyVrkKVDY3BfAVg2XdqY65r7PeunVgDVeZUNEfCFMB9urEUxw9s95yY8U4EKp67Z",
  "key31": "4yFKs7ifLvmGT2Qa276qEKGKGmkQLoJaVAtdo5yTeHuimiPDvEkwkSig7RXSH2cLaE2Va27BHZSYpSPWKAURHSCb",
  "key32": "52wFtin5dmV6GLwW1d5NRW5ePEL6AUWZKg7G4wL9zgCWtcUMcNk4raFSivipg2tRcWz3haEaGHBN6rjvM2kfsDdn",
  "key33": "rSjN6wCnFZsY81jC5DMgfiVCpsSY1tLu5HmQt8cwHiSSDTdAopF9wLK423P7u1vKzPDGpkyRzETCYMzwJHSRJ1P",
  "key34": "2AhfWS8K1tSGVcF1seh8A9jqbkN6kDMdnMoZt5zFh67XofmXh5t5ktDzfTKuqYLk9YTKLeS8RHpVfRHqrsEtYdps",
  "key35": "2o8jyVtFygQp1L2WVqjEcgxxqVshiSntmqpMzUVncUG5E4fbWtfTJWa3ya1fV6rt8vSM1QbzqCyuURjpyz48J3Pr",
  "key36": "4kSv9Hw7xxkZBmtgiZYy6px1nwkCVrEa9Ea5c74rXut1joufSr8oEroonmJPvSRFSbFkyGuZL11Znazo65veFmhs",
  "key37": "xvcGMn8ejebjBR9so4uPQgEFHHaRxHvepGjRFwZpfR7hVVrNyNuCdFSqgm96siWRgykYSRH97FDCxSoanVXdfTG",
  "key38": "4SktcyZ9avaEiskF6CCG3QTUABP7shMpUE6KcxiEYxkTLLtuqqgEKcwv12x2r9QvpbyVcUe7xjzG3KNyn9kc4e61",
  "key39": "3M6W3uk4ER9xgXp3SvokAQAfEinEzRKNQZzZcKyNoWqXHs5q1YSv4Avvdp8S7niygVEXdBYakCTEPhqjJdCN4DpX",
  "key40": "5pdNwknzoxbxNFZTPBmL1ULjVezGdPspBAdz5iMhY17673LbptVinC5ZBLBmLVhU4Kc95pMVkF9K1AQYh7a2Sse5",
  "key41": "5fYviQKnFHsHssQn7DH6ySGEM6pemRc62pepmPTV2XttwHTqxkrSCPYmfjPZQKmq5EFZSczd63fg2ZRi1FyAyCT6",
  "key42": "2S8GumdsiQ48ynMqSse2q1H9dtY18Hv6rwEahSEBnSzydrABNTeekeXomEUBHz5j1B3kj5xg7RPRCV184JkMLDmJ"
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
