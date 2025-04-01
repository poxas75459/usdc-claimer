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
    "2rGpRdgSudkbaHPAX4SMqDhSyDZkMicvT84Di2cM7MTpNq82YSpUfXaAWvq8Vb6dJcVfpyWXFiB4HeyYeGAs3D8M"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5d12hQ9AzEvrFsYmjE3tzWCeGvKTXpa9kLE2uYiH4AKhGCEQsfJXwZpsJ7msgyqxcjuhyjpaLZLSzn34SMUJ7Sca",
  "key1": "2mEYMYLY9QNnpgQuMpJUu4HPsqPv5oc163t9VAgqds9pnxhH41VmwJXCNFCuaMSGciKwvCGCoNVqky3CRTw3GSV1",
  "key2": "ELEsWgRAek92GCdgT5aLZoypyJNfbWRKvBPs1wXYMA1rFKzt4Xh915dbjLwh8w6a3BoWfPP8Rbj6czasYxEGVxo",
  "key3": "2Eg3SJjrHGQYMLvsRRQiXJL9Mz5UqJJ2ZG6yVBVpo1HyELSVXvLzW5oSzPaP6DQcM9xrAd4mPxMESsaFhcZvvwQh",
  "key4": "22yoVwmKtFGanjF7rbLMAnX1mqVR5qvSwNK5BQddVBDaWPcwfrPyN4itcwqkq49Dn5vZ9usSxxFagm3GkREW2iEc",
  "key5": "27VW9KrNKgSBLi7x6dcKk6DYV4t7HvXppKU3rf91BGeXatuzVW8dSLuNNcNRjF2ZzofGPScfLgXsUbKF64t2kuUH",
  "key6": "2Gkje1X2ZN7bxFhcohyzVdSg4Ub91h7Cav6McYoQaRWU2p79qKBanMrrnmGtiEopv3Gm6YszUh5jrC86QKMdqpF3",
  "key7": "31PsH5d1cYSCQtxJpBNwNrA4d8S6Gs2ZnQ2aWjVR8wpkDGt9nofd2VEMesUAqWf1AkZ6zWsftEYRq1ce5xjex4Hz",
  "key8": "4zCJMiyvgc1kM4i746QBGiQjppYUHArBSktjmYYra5qPACz1MgQrHxwWpqGSALNrJWFCoFF5w5s3d2pscDZ7DXUK",
  "key9": "TtYWzcBCFv7UAZgY3nP7YiXD7dLcakie4oPWABbficwiAiam4W36GkdoLFw6FUByoRe77Pi3uPELiSwyet38sGc",
  "key10": "1Cw9nTx8aMfAorecXKvDcAtjPXWgzmmFdxvQUkgxicJMqvJXBbk59ePsypSPv9gVxFSmcnx58feoAycU4Y3iNbN",
  "key11": "ywU5c5tv6DVRdVyr2fspgKzPURKyq5QtBr5i9x2asR2p1T4h78aUXcj4KFaeH5e1nmg49368RR4tqota85KsdQQ",
  "key12": "Ht1VNzbiQ362EaToyuCtc2ds2RDX8GRjRNEnjcD9vDLMiDabPYS38iZLta6169vk76j75DxRovowDxZ2AeWof8R",
  "key13": "2XNWVbvq7ntRvwmbbvDz7Y7bmGfzbR96vSDqgTjqgapkZhwRLfhjiEwzEwMVh8picBZTGg3rZi3NrYu3CYCsN8c1",
  "key14": "3y3kiXTAwLL4gkeabG4oF73o5hGxNPnbM1mtmWo3zKcSWuWWxiTfLTGETvZbYAinC7wNstEnvUxic5fWnburUqhY",
  "key15": "3dg7zwMPkX2ms3XvKpQ3cFMUK64byEMYGoJctD6sHtPfL5nbKNDxG6sVfcvbLaSx7sbf9P3S3xRS4hmV9nQE18c3",
  "key16": "3LPvh7omEg1wUToMxyQzEzWkLkDybKzB3pe9psD1LxBnz27wKeKvSp26uUvGaVoVcoJxap6kK5YMW74rZsUyvJBB",
  "key17": "4V2hGUuhjw9Qq7BDkzzgxnitnexxjhosypKK6BZFsxytKYKJ3SdmkBpC8iYvvH8Z6MGXV98aZ2iFyx1f7mcwCZ5L",
  "key18": "53YTNDDdsqumvW27feDyLXQMk983Jt8coqJfbcB4SPZk3iFUXuR2uhKssc4er2MwzSXZmYLvJ6vfkXo3EAs3qcxJ",
  "key19": "5ov7cgr3wE5enfgRiHRdJBzFmvgtxSLmzVuJ7Ef4Gp9hXjpVhf98A55avHxhXWt13Qrf4Y2Z6NPsgCt9r246yQfb",
  "key20": "2ibvUaKKenK3zTaNHfMETVGcHqwU8PnGeC8imtPRwQChisTYn2ALWpVS8unrpKKmRs6Gypc3EbviZZd6Dcyq1VXu",
  "key21": "2wQpqrD9gKU2anMUZ6J5jHekcv1sigHXbXp1k1wvQLBUYiP2po3KfSR28pUHDQupgQLDmy7buiHB6wTTRN5HWkgf",
  "key22": "gvfjQj6zu2gkF4PMRY1GBis6y9svLU5W9DcCD2UggWY9BaBg27HuiJ6gJaxKieyWBnaN8eNPTmDVR8UvH1bh3zz",
  "key23": "2QbqQuxxNQhRX9vijTARTSbvqgEWocGb1wersQkzHsyWpVFbZz7qG3DeBTi5PvpBGVSdoFeHKKrsMLaMVQa2xDRE",
  "key24": "5gJyVriAcoAwLFMgb2YZJZJqGBQKXv1uEwwBsg34Xtr8FqbSxUFhqFPtCWTt76XPm7LNVULt1GcR6hZCrqPzedau",
  "key25": "42UVLnLxipmLdeQQ7G37zFT2udXw3rjrg3gkakxKy81xsWpvo2ujBPP6bD5AiNTWQkeQMTJLB7sibDvMn7VcZ888",
  "key26": "31j7yaEk2svGL6muAgQRCgxuRMXrJHp8kphxNYRoKFCVdi4NeweUUpeCs13KLT5fENFKrsWJfAuAHDCepxEbDmwh",
  "key27": "3vEdARsTV6fFawMAi8fSdHmRWeqZ18nNqSQxi3gkqpyCnkJeP48NKeoHjp5a6VpN7b2B1vnGx1SDZW5dMsLTKdvx",
  "key28": "5ufKseGsjUbNzfuqKnNbmM74YuqmKP1jd1k45JASRxyo7d8TVBZqZLFftJerTEakdCKnTSVkeNF8EPNM3c18D53Q",
  "key29": "37sSTRxNszZ122YyUy5jmzJzDmnaFmMRThs9sSKwWNw5WXTWSARn1JQ48dHyBuhdokDYDBVsC5b84Ghc5YfARACq",
  "key30": "3ae8NyzU3hJFCYT3BTH9joPivHZyJ55s55qtQV6WS65av4YNqkdgKyEhSmqqN9WCkBuSZuVd4iQ33MNiFQpbAFRo",
  "key31": "41dmcooiGBsSZjQjDD6VkUvm3M2biXoB8Rb8qhAJdfJdxaTXgHUpAxf9ktpdRYTPZEv2w8kRK66Fjske3epEHeUe",
  "key32": "5Sro7RT9aMt5Nx2RYWbCkCiiuFe2xCLDg2Cp4DZ7akxwsyehQce6PsVuisxbZX1s4fshddGG1AXCUxSQtYxzR5bz",
  "key33": "2XqzA9fJDs49xpNaGY7kTkGzbuPcRgQDCM8xuzTDbUwNPEjnJiozSxGDCn8zgBPveqYpWHDo31h4Qc1zGvzNsQ2M",
  "key34": "2iiUNtygjJLR1dPzHsrJc1zARp1mJ5juhrfPn2d1zkfGqMbtgyvveY4ZLUdWq2aMjpcLDJD5fxDvrWMD6kxyFYmr",
  "key35": "cecrb6GYECjJYbuDpHapeiZcBToLMSjxwXQ8hkjQgk8XPcqfcVnmVshBruEHHVK7Ropmz6jXRw1zLnf26xjQ4Ra",
  "key36": "5BGK2SuUJH5KqTuZNCV89EWMFGqgnZ9eEb7yGgt1TQ3p4p9NEbZKPpm29V9ZAU83ibZaoyy8WqjrFij8bZcBsC4J"
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
