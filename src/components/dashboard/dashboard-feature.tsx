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
    "28TcmKDQL2Zf848niHLiL7ZkN6W9ELyRnKTPMg5vcEWisjJ3av3E2mu8oaRMmcdgfWVYVya9fCxuGk4GcbzWqPoZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61So8kKJGrfCdN6wk918i1aTwhQBYL6W2gQxXdT5DiebZLRAs2zhLmscLefFYszVoUyPhkypVuAgM8PLaJ5FYQmd",
  "key1": "3BtvqM35eRGVWvgSk9VeXvGNLazCkUwyHzf4HDKTUUSZ4wfYoQABAFMJAsdgwg7Jr9PpQyoBAXKBz2rj6W325Wsf",
  "key2": "39udvrgYHLswAhayKZPbX5pKZaQJoHz8piHjqxL5n9b2gGMrd6JNacADvvQcvRHUYxuumcj8FNzhtYNfZkdtjkAx",
  "key3": "4Q6mKnSwgvg13gJDSkL3uMiUxQNQzDSjVA7AorLkPWH51VAA1M9HFYtrD8v9WquBrqtdWiG89cQ3pozSXHHRLhqm",
  "key4": "654N7Cci29r8h6A5HsR6KUkpAjeE7kEaHPmEoArnkunVFtR42d6PBnKhUiiRwmHGjyjbicMBSL2565C8hyfNtZDT",
  "key5": "5HnQLx7SqeU9giK7g9XrXDB1GdMZWDorzkiAy3XR5rTMDerV4zg4BbpSTCaie36hx4d9TNRNzeWmC3EYLhC3rjWM",
  "key6": "3LBXE8TQ1S89gx6aESkoENtNt8dLy2Sgxk3muptAYa4wNZ2GJoFKDVnWDn2r9JbYCgLT1fKDov852nf8DMhofiGx",
  "key7": "263mtqYXZdqy1VPBg9ik1yNh13eFNRY9tQpXF27H1NVG3UJJvByGPeEjyrvFwFGHqLLkizoJZ5Fg823gFos4aJge",
  "key8": "32G6CoedY8C8ByY9UtHqRByReNeYMEre2dUBcdG4ePV9akLqmsLA8eerFQFdjgAtDXKPYCxrU6dU7Vq87Ui9zs3a",
  "key9": "5qiCGJcnzLsswF3TASUs2uPHeUSYiFau7rrBsX6VAE2a5MEfKCEg2kcHDvyGoU9hCrXDEtGfQP1B1bjWkPyFZJKv",
  "key10": "4Xmu1Kp3gzbATHyrRLwQxZTj1BcWQ52Ky1mJeyeZU4y52DkaT1sA8twbVMXYh3HgWKHnH8aRK6R1Z8oXCLPSQ8wG",
  "key11": "YTeVKMRNHFk4J5uAAkii2Q9wG51TTYrMHeFb7U52KLZqSNpWowpvS3jGBYQV1GaAgs1hvjKBvu9Stdekn8Hybge",
  "key12": "5a1CXNUYJpQ4iSCwmThjXMUL4RUHpN99WQcv7rgS1BrBMaDjUnjruT48hhvqivYGX5rdZUZ7eC2wEuxUytsHky14",
  "key13": "3VvBf39ymTJyivChvTztG1vVHFdHFhsmgkLJrrCxFNBd2ndfd3RrWJzUcFGw8EcEQDR2P4pKYiRMFSqJjTBhNv14",
  "key14": "3CSHKibfghoXTrXPiecVY3NJZx4wcPg175aYsBCm4kdoYhwA4zFKYHcHr9ygAijfAoWDpTkpQRtq6iicQXACUgbL",
  "key15": "66aN1yV3B9Mi3jsTkZGD3Get6xx8DZrexwhBie2nQ37vC1CyMdHo84A3CbnrqbAz3DyxuDq9q6wAQawJJEC6Gm4S",
  "key16": "24mZG1UzcdMLDR25abBRboCEc1Gj2NgpXyDZJfU7Ck1TKh8WVatAtLfqVwy1H3NxzebzBaRdbRRrJEfo5sHvzjnS",
  "key17": "hGBHj4ZMvvaSp3mXTNVJp8SAAUj5UoYCpXdWjDNpMa3m346edSfKuuf9uu8uaTtQL2jEWB7GPSXH3RMyssGAQu3",
  "key18": "4A3MkwpHs8qFP2n7VtsYNLH3YrytqQFfhdGBmB3o2foJap4CHG6oKN3yyZxqhTSvFsY4s5g7zWFCn2tP1cWfGa5K",
  "key19": "4uux51ZJs9KkxFoYcqruUxB21a3UNdswFGZQSZj7qPMB9VLHTaYTN66t99HL3DQm3sFQd4HTzQ2rsBr5ipsD42Cy",
  "key20": "3nwqXdbRNR3HjeXKY8ar3r2S4CxEeiD2wtjUBHGXf2bfa1EqQQfiGXNqek54sfHXotEbbQJ17RgV6KuHFdCa2Jmi",
  "key21": "iYbCMxs6putG32NqqLAuqCFc8S79Tppt9mamEZFHGkKw153Cq1NRWoHacCZxt69Ee5ovc8wh891kWfduUVjgc3p",
  "key22": "5Kj7G4bcVmWTfkk7jHy2BX1UZK49xKc4KJ1PSHfiDA2nTUyZqbiA3hcSy4KdpUZeBFfQorv1YWptbLDum4cp7gVs",
  "key23": "t3Hf9gLmzcVtk7ByS9C1DwwxDN8qD2T3nLPUP3BMcxZRLjc6h2xvGz7CpJ4eVjr6aE747hQPbRSjp1FM9NqXZnB",
  "key24": "3XSibKnKXdbFvpSfhssHuSjgzcCLBZsPqr15w15TyMW5Q7YHoPdt4veWgWZvD7ApsB5mWAWiwkeHkUpQt83Csifi",
  "key25": "3g4SJ47iBC4aCJaq77MSvnz9bsikF3yZ68zj59t5nLs5gKRupwGMfScKxR6HtFugTYRqUuBaziK1f6XfsDqb8his",
  "key26": "2tDcufBPSu8y8cKE5RoiTAvUGNH3DL1G59MRAvawEhnP8xCWxQy8XSiXkPfSavyRyJXPcx9C8FP4wL3iQS9tm6r3",
  "key27": "5HQGSsT5RZjkbYGdznoNHc1tZJi8CzMh6GB8FaFMV53k6iPQqS9U6mDTkMNVjiebuVdvrW3pH4gEoAWnHGkGcHGQ",
  "key28": "5sFFBL8dJkJwfBXZH4i4h86CwZRo1W6SoZq9fsmGDa4GmHqRmvj8AssAVYDA7ish49w9St43DcbnLgrjrbxFtwT",
  "key29": "3UFHynH59htREyZzBjXECWSnphLwDPv8hxwMUjvPMSeQh7qkSFLmvUgc5k92pVCmDcWvJB4CimVRcqEHQ3FyeCRA",
  "key30": "4N1LZ5MeqydV6bwxiQvoVM62LfbdrSrCgy9EQHkmuxCJNiGxT8p6FWHRQvU42WT1HReL5XAFLNab1F7GruX8dQxb",
  "key31": "3ump5oCZUPVPQeh4F39abgtV94kvcVgdJaZ28fXAnGsUnEus5H2a6eNViNYrseP6AReN9sDSkrwpYxYLQVzRFuj7",
  "key32": "475PUC4KZpKLmTQg5zGp6tneeH1r5zhe7eK7Gw1MQSPLdWEHfgNahwD4LHuxGP9Xqech2ksknpWvtpj7kdaroLdi",
  "key33": "2h4PHcVQR36Cw66oYnhHLAcoFgTmR9B4Sdz3ZZzoChM3gQJXXAG9jweeMjgFSJBFNmvXCEVjxTVUfGXj63Jmj8J1",
  "key34": "2g6yYEVbk91Bwdz5Y1Wb7urB4KCuYFKaSUV6qFgwPdNW45GYXFvbv81xYMnVyFFuTKeW16ZcHtubf7WpKAkuH2sJ",
  "key35": "gpMJhhvHvjs7Pbi4BrLpdGsXZszXtJnoB7SpYQF3MsT3aFJ7AwT8jnzB3McRtwsXcty6iXBjPsSGJAvEQuPHA8S",
  "key36": "5axJeyQjbxSehALJ7fFaTzG6f3BJ29BKjnKgYqw1Cnd6RBwx95qCdSR9VkQStTZXRrfCgWt2HA2Y4CD2dpwKS9Dn",
  "key37": "3yQFRr4XDo7LkbLrGyAQgfoHAhqFtvSXjWLxX2Tr5v91K8g5CF2dm4qpmevWdoyejChPzh13VnH8BpCJ8nUXZDDp",
  "key38": "4G7iREfF8hpP8qLVGJ6vc7QwjjGKpZ9KPGjGMZbeHQceBtnfPaaCw9VP6eB2n9HfGUrccNn9R6dsNpSd8y5SMaCk",
  "key39": "548H2z7caeAhYZXZ3DCKMJBGQQjmLYpU1G3DL7okD1mcbD2Uoc4n4TDGsUvEY6qceZhEmKUSMSfSLqgcTPG7aa9y",
  "key40": "2PuzatVHKiqEQaZqm76eJYNdf8x2r19UMEhCHbhH5dVetni9iw43LkSHPvb29LxLro96CHRDxdzwmmevUksLbuF6",
  "key41": "41VGMmw5W4oJ5MKc7F2sMjTt3Fh1AoEAFsmtBxs3t2pb8HyeCmdd33mvV4bdYU9yJdTNmBoevybwU8MSwAXkRgDh",
  "key42": "4mWa7UaTqydriSKVSSdrK594x6ewg55HWinoVguCYSCqKvX3dQsbHVcqyxpH3S5Czvc3RwBD9vNzFTmwDMkBmbP6",
  "key43": "3aAXnPkNnNqSMXgC5tYpia14wxpSeVFdMZkNXY3dEKroH6AaAB4LmsdM8bbASUUqPXajrAmisGhDoNPT9AfSybRq",
  "key44": "5dd41SckopiwgYsnJpVdRio5FAN2qcvbCFznNik6MPvRiP82d4zP9y4YwEzZZGGpr6fkB9zcJ87cbHn55sKHDuq4"
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
