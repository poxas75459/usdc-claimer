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
    "23yBqvbYFpwZ9ko9Yfd44Xtmq87aZn8ZQbGfKVknMFLy5hzsgVpy1SKvrXctdpnUaCMbGtcBVVM81eRc4PytQj3j"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3vM1Z7bM5epHbB6kfC4BJWHtqn6hQUM51pLYoMcWk6PzvCEHCNMxsTQkNJcXDThR7t5W5sGgbDoHyPM3KLZw5YGP",
  "key1": "oAPHdQc6V8gKDxRBWdLGRqv8MdZoZPRaBKvhb16FURjiWMaimfG8w4LHDdJuAPAoGNDJhGVjeKwgRiahpaBfY29",
  "key2": "4uTEqpeEmonYEjHBcZVQDuFSJGYYVHEW5cKwakcWYJckWtmUm43peGQ8sEJ558g39Gt3Ry2Tckv5zghR4GacLY5b",
  "key3": "4nhPJ8H3idHFvPikxiEshXJjPd8YVfdDWf4qZZAXfiZYthxAd4svGeVP97xcJwfMh6BUdNiNEi6XmktwHh7fi44Y",
  "key4": "JqCtQi43vAXTs4GgSFMB8Gru6ENqXbtP9k13c5btPXPM63XeZ3AyEd8p9uBdKB1MhCdGZD1nbekr2CLDmbqWGaz",
  "key5": "5trD6aASuzTczhskLEV86y8Y2ZxkR78Ehxq7XGeaxu2eCPRQKggHykHaFRSKUk11SQXKTxVPtsKVbWTpDec4fq7D",
  "key6": "5RXdMah6wrosPqM8REPAFJ3pGeJ4Ze1aGf7dBYwJ9wtQhvzxhBt4F4fMwjAUEKenX3qJwWeHkj2aioFZ3E35Si8M",
  "key7": "2Vk3fmTgv6ZiLqYYbsiG1bn9m6kkCAxNP42dav36XY7fME3GecxVfAaVjB6tAabnVwgBg4cZCDLxZSe6uiAjerse",
  "key8": "2JWUQLqs5qEY2SjyweQHmTFBtk5jZtLQ6uaYyBzwa3uFiXuZrMuNibZk3Zjen6y3pTVoVeU1qFy5bMM5ASY8sXUM",
  "key9": "3oyCQxQRuUXaJ3P1Z19SAM7VngphrYkzS88ce5ro1urNbcBQRZ2Sx3mz3CtZnCoxWEU5WFdXH1UTK7jp96yjaoqy",
  "key10": "248rFQKUapZwEhBxtUX3BghfarW4Zbt4h15xbb4i8RN8vDHWs2cS2Ryq6pwbjkTFxKB8ugwArNP68Rkb17jr5mxU",
  "key11": "VJyQAusGK2vBugFuvrxrHkQrpNanodpPffxt2VPT6USPvaffE3nqyFSBgBLECBn4DWXsSg4SE8ax5bx7koYwHtk",
  "key12": "5tz1fYgrN4ZQqxViumkNLhKhsJQgM2iX9JeEDYpeEDSUJ1PKme9ubBZYqurx5xTY2QLQi8FMys8m3f9tBGa8QLgQ",
  "key13": "2kVbLdc9qxwUEh7Tc64L8gDURXCMMghZFJmWdWQwu7ZwtoLwZr4cdLYUWPbhGb7Ec5AXMFP95H5Yn8wYYiHRSZQq",
  "key14": "p9EtdvZwVJW4EG4HaAeipKXh4nh4Jho9KznhCm4L3jXywa4HSoAJk49mjbxMnMh2GZqJfPBjEVJ5KHpLc1V1huJ",
  "key15": "2aXRrgvL69MLvKWMgeNZRnA3JMkGx6DPzRiw2o79wYghzSG6ARXSSBmDsvpE5R67nGUnEe2navtRGpTdp19NVCMc",
  "key16": "2QCn3fjDW6xCTh6Nad31qfTxHXgWy1FPtGtdAvrxBXNBBU9ARWu4sgPDpZCD1NaV5Tu9ujhXbZc2cY5d5jSNykX8",
  "key17": "CLJLFKGAzKeSXKw3beU5jaVjPEKSJdie42UZwJdbLNvnbeajmDXKGYfQJxubLTNmZK6ZL7VbsFQf7cjTYuK54yi",
  "key18": "62vBJJb8s7Xs833JDHeNSb8rntvJmXwF64gMjxraYxNhpxhTmcAMDex7R4uRsHHWew4XCQRZSVPD2hF9dMFepPzA",
  "key19": "wP1iTj7RV7ow4TZgtyho7mZm3gd8Q9Rab6qDUhdLEQhnaKVFHd5o6xhmZpJ51yfXcBmrovTJrHFpQEVqwGGzUXw",
  "key20": "5qHiD6q62oAqC1CxxYha5ftHaJHGkKPM4LBStqos1kTrgKXBnpifnru3hJDSZRpau8qP25M6sJgNVFSk3Cn21vpu",
  "key21": "5N5bW9vFjzWVPpHENBej4HQS61tZaC9oP39pizePReHDhUXZQeot8sSVpYsRD3BDUdB1xNSBTEQJcApSGGa2pCW3",
  "key22": "564eAjT5HwNZJhLS3P4tZ8sadPMCJhdpNsk5P1gz5528TVZrGSAL6L9uuX2a3zs8yVceGryzdDVTZTGQHyxQV4Er",
  "key23": "4X1baNV5ZVXiztuKgXNbcqDQQSe75vsrBYuuanG58YiodxDHsvdBhbGTJQrNUX2LdZpLU7NSJcERkwqKHDrEXBM8",
  "key24": "3FTN7CboiqVq41YcZFdeGGQUNFHGLuoTEtm2qJek8MowsZeVw6cBGfcaa1WhnE79TigXmscTFTbcmUy5GkhthKEE",
  "key25": "5C67RVxVwbZ54bNqveW95RJSjKBz1edjv5YrUqiEgNiVAe2cj6qfCJb3huLCLcu8rvMBN7LprsniJ6jhsz8DCcQB",
  "key26": "5ok7eK9pkQcxx9sU3NSYKpnrVhHDiij7n2yCRa7wRLCRkUfk6gXo6ZbdzPyJaNG94Eoo1e15a81xtwwVmJxy2k6s",
  "key27": "5dSfmKQGqdjUhSrnco9VmVzmSAUN8vqNmiEx5treqnHE5hXd5ZAWCwiu5MD5Gbe7PQTXsjWeEbhcJRntn1pfctJA",
  "key28": "2wsWNyeZ2JFE9PtURfxzmaodc329kn4c1uphJK2Shkocnd4Prfc2frAUgWcGkoyVATXG9Peak2ua5MdYzchKV32K"
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
