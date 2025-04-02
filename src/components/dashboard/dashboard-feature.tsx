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
    "9XATGKX2zB5Y7UWJcdXYjJdF5rUGBrjMH1pdDrTcfNqwgjMvZMPuK2smHGgAVt4konzgmJAmpBmXX1SiGvoTbq7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "aT1KikEYUbukPknGDBJXtYpnXqcUTKUDCUZyGf63T5Ezypc5Hek3v4rEeN2NFAYsyLFc2QivZjsANJ5BNvRc6Qg",
  "key1": "4wyfQLDa6an869R1oWWc5V7oijp5tbckR2Gq522BH25EwUbG79J4A9gzY9HZGVrCFNRVwaKFvyK1mZU753pmSLin",
  "key2": "v9FRy8RttrD27VtES4K53PLs2DVou6s5DoLxZh81V2FVr7Lu7kBoswywWAtC1tGQMrGu4PtYF7DsMmKRYXMQPtF",
  "key3": "5kA5y2PhuP92RpKmwLo7CExzEFRuM5W2fyGdGvhLySad77Cz7WUZZisVswTSFtAniYuBbywobpyvA1PoUzg7rop9",
  "key4": "5sWSYGpcbbxbNq4uuVoYXbUtZLYhKHKR6ZCG7A2HMy1DNapJTbiucTfhutnD4q7bGtyQiwiZLP3H5XZ2XRRMbUka",
  "key5": "4z21sBuiNWqfucMSUeq5uH7unhFaZvvX3MRGybnss3NP85PPHkCibq6jDbomvd2m1e1heiANSA1Q6pPdeoxmJiNS",
  "key6": "3dy69GcLD53e1oWASbXCqb6PapuqTFhf7revTANyPt7bDErd72SeZWkn5fqAfqiTmsiugsoTLYXHJKJRKEsiPq75",
  "key7": "3cVuHxyjQQDjJk9AoobVJYrDfMzCEEedxnywmhLUEhRCcfRCw2v9BAkchCVtU7TkT1GoWQfsKpqdnBMgUJc8KEFv",
  "key8": "3fTkcpzeEcArd8Qshgss9YT4FcoZ9KJ1tBscDVQwCMPEWgdboHVBwxdFdYnoMNFiWv6z8hDpXgaySNsXzhFWvqoG",
  "key9": "24DVLPGotmDyBsEKHzB3SsBc1fnqzTaomZY2qFvggXi7A7TJs9nSV5y2DvLTTpbUVUMucRTUJVhxEbdL4GLi94st",
  "key10": "WodqpYHQeUW4Rc99NHKxpSt8Eo8VAKiGRHYbWLUsYDMgJhgUiukRMHD3Py2MRMhbJH94MMu5tHscNa1xQZWX7n9",
  "key11": "2QdCvdRSP6wK4vZZRxXt3VYtLUkkTtuFVnaML5qd9ctyTU1NCUUrDiLGeXDjrgDZpAEn476faTWWvszr5i6G95Ce",
  "key12": "3nHW8f7VKkcLNiW7wab1cmwGCQCbKDyM3vx9QS1erVfgRYBxqdLQwGMsySZ7iX5uT5wS8G4LrMLHnGtanXg7KML8",
  "key13": "5o7buA7yiyQ8EtNg1TpuMDyGtZjotoWyPeR292hGstQ23X3eU8bDW6fAuPd4WrqH3KZ6JctbgHnDwZi8MitWn1Lu",
  "key14": "9RwJSPraWEyihZ9j6YamhCocQqfEfJososZCjdQgpXZZsPYsJ5UiZJ3fktwzXoVUCQ8VYuHKGAufvqc2hYYAuQN",
  "key15": "2AKe47hXsmJNsfJEfit2nRmUwAnh9RqqRM6wR9PEaP69rJYHvvxfeXK5dDNewaiFHCGLqPNsdDrBt4BiMg4QDKDP",
  "key16": "3T8a5CoGATP1v14UmHjjeYmgCdpjtzQpVwJioFbmHmEfQkin3aVnzZ6Fr2KJVvd3U62ry8RksVx7CVHPpHtUYvb3",
  "key17": "4csMcKCU64TTUt7TVhnoShLJk1GosQvJx3SWGCWNaHsoNVvHGpfwGFiCXp7DmwdKgHFUqEB8oLExGKYzxgQb8Q66",
  "key18": "sUAhyiZVNMgKxGEEnkCHLwnDRGTCa4nXd7ua4qwsHXNj96qPezPk9DfxJvcEuBAyETDtE2FcQyVTvnoaWmfhxbJ",
  "key19": "3Y3w4fRPtqzsfcDcwb4NpSwuwU4y8LY8iR1C2HSeuza6iKrfsikUHvzmtsT1j3QbJnJ9ZBdTuy9A71Y7oHezbdCm",
  "key20": "3i9kfvUuzGfJJZPzwuL87rjeKzpPijMvPgZmhzVUKAYeU33jmsANPF8zoMsBEkhgCRMxcPSfHmz5hxfrAVhcxpRt",
  "key21": "2aq86ZtZQqxnDDFtnKDmsHc1i1AR615uqGEMHrG357rYN76QXY7vg3EFVUtaaQV95WumyzRcNjMPFWkw4c5tA7Pf",
  "key22": "RTZAQoZARet6K85uMZgB5NEqd7aVQS1igNPh9CczTFCB9tBK8KA3cK29sht2pG8YtAmQoPUFiqbsegN1wLGV6Su",
  "key23": "4gFA9Yx9KfsYhkjjXLTmrjS9yxe1krkS78Mx8VaNkzA1TydKFmFxCH6pCDLYAC1UiFc6RDBy5nkU3P4WDjJFLrdp",
  "key24": "zfpCrB76jD6qCDEYcpVkYndv8SiQy3q6oU9ZdRuVAYahMAesGcoxh99RgqVvN54UUzdcYu8y5Gz5bkB15T7pfkK",
  "key25": "2EFxtmn5MdG8kDq7M3ZfDcr3T12PPuJJjyVQGGxNBKnxefVYa7LFVzjWLzVBCb4852RJ75cLrKakz7RRdJUtetmV",
  "key26": "2CAWqt7xGnFoTXTpQM9MWgmuFvjtbp8MwoSYovaPzVnqFan2nWnr86eFS1STJzg2QFrCstjRpv4UR3wfbBbWuQaV",
  "key27": "5QAwoXZN15tvdf3CJ2gDDNzz9sVTnvdbEnzoDEfdbfUSRTNqbZURhfSBWbwWcAdmdBs4xbcDuUYsxHpA17ugeYdj",
  "key28": "5jftLynsgRLqhp3pXPXMAMY2VdZZ3xdW1DH1pisBPu9ensCMjLso2VFetx3K8UynHjwdJUoCN3fAgRM92QfrbZjD",
  "key29": "58MKc1jsMxVsdvjCxqSfpT6SpNBARtb6LjggrkjfjyCCwbq4onGkFZaWfQ2Xc6UvRw2Um6Lte6faNSaBypUfC8ik",
  "key30": "3hEz6Z9hLoctBGS64YQi67GW3yFjG54vQqPesmq4jPPBw7qxXXhPh3Re4dR7SnSPj6ZxHqMbUjTG1u4VRbcc6yd9",
  "key31": "3tnBxnFf4free6vWmYhfoVLtbbxUc4NLWX2GSZ77ByhkgNTYjyFYtYtRAkrGJHYARcm277MQaZZFNDKJwt2oefsC",
  "key32": "2Z4dEhmAZkJAUJrJuvRBM6jHVcnyFXgBurrWoAWr7PLRJQLym6BtG6Auim3gbXAi1znmtzYMZZhRdhsrsxKV85dw",
  "key33": "5yrJBu2P9dZpZs4Abp4v7PntRroA2eKGiEw6nRAqBRnpJmN5QUWqQzoNtvphZpWuGa9ejSD5yrBvx7PR527fMpXC",
  "key34": "79tKPBxrUjHVsU9M9y9A58Mi9NDSZkSZ6bEXR222KTj7uWfEmLikee5rwjqDbcrF1fi6w85KEzpPRMs1T8Y5z7K",
  "key35": "5mNkpWYZ2LJE7eLCVN1sApiX9dhpBVGPDwGh8aDgAdE9KAZhrYBwGxr4FJr9DMCQn3xRSsaiZdV7GX8Ro4qMECRS",
  "key36": "3DRiTMxZZTPJJ5yaoD2mxQYMSS67jL5j8cFBmR9YmmX7ByfrLS6YxQb9xADFYxsWcFijAtNfjB2CaGrpv9c8T4dq",
  "key37": "3C4aFrLVmZRx8hTAfqb6FQ3QQVoj4p7EVroQx8DBntMY2giDxArkfpFV8q6BgRrbD4qaqrFtv9XCkEnWYnj1sfap",
  "key38": "5FDBzBRu4Nr5CeJKusJbWjWi3rmG7k1irYzRfSz1Ce5nPSs3X296ND2ZfzFWcy5fqqcDW8sVKyhLC9azYfu7drWa",
  "key39": "5pnDUrr58fSybnTgb7jw923BLgZ6HEbFxKycephTmnZ1A5V86bk3UpYBpjzV6bxa5pN5JJR7CgvXMfVGEs8jGLSH",
  "key40": "38YKy9Yz1h1yTqVJF6NTnVQjK3LiXrgMuiNaz3gCbbXzfJ3b1Sato4WB41NdrSd2geKrw4svuPicxFrQvuAA2VGK"
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
