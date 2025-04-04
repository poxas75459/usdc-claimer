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
    "3ggnMyEsq72X9ibizVBfQkLGm2PJjitc41pDLYt2R1ve1ca22qiVTD26j5QDo5XibW1VxQFRAZrtVUTkk9rmRhp9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5tsdDE4C2Nctyb6znUKTAkGFynUeVfVRu1QHvrqsv6UZwP2n2t5TeR2FCyc6hQTED9edVmWbV6bSYEW1DcFCJ3n2",
  "key1": "9dEiKTG7RakjK8h5NY2sY2jAFnTB45crgcJ3uRRrxnuL9jrZC1y6mbzrvZsCLq8orBbcb6KYi2pg2XRhyoUs4w7",
  "key2": "4AGbonweRAKVDfRxSSga66FyrjMiZr9JdsnCBbHTJHY69Hm1ndGWGX27sNzYTW2Lcyho8wkkLbQDkQCQYK3fahu4",
  "key3": "4zv15q7gMo8ZHHxH7e1Q7hoXtMUUgtwJKWVt5uNpWswe6jkakneWCGZbUZ6hjT9HeiL28RE4ffQDEkzmQMsyRsyT",
  "key4": "2Dh4AwZQQDaz4WMqZJeKNwQHj6VPw4vJS8kfdTpSMSY4rc3e3xev1QWs1FPv8zcvWfFTgLa4eVrnxxQVGSzxYUf8",
  "key5": "5W6oHQ6Tg4YJ5hba8wqSVbGSEyFTQcRkibp5H7edVcN2xaTYkXyzihrkVCvcE8kK8iTYcqZ1kLb4GbWbuBshL134",
  "key6": "5wTt3T93rvGk9cUdfqTZKyjpm1AY4vKB5rp5nY2R79EPN36aHN6TyRJzrkJciNBGZu4zXc9G23w1jZoZKrLxUeFQ",
  "key7": "3rbbFEqWjDo2uwxxBQNsKiFdiUoWdu6CgXL356XZSzDGYfttYLratEDK4qGKNPfzFArtvjAUPujxKRSMWbQu5cgB",
  "key8": "3YooZ9rkHzfHik4M1mBTRSE6Etm1RJMuEhDPbkMRKovE1RF2p1HNXdqXswqcUVeatWyZWqwYYqHX76hX1GWQAuHZ",
  "key9": "4NrV2UVvyKbXZXNRfBnteFLC1tWvddCJRraYeH2wgT4sybTu4oQc6JjeMw2xyZPnWiVKfbXZgas1VLtfJBiY3fpK",
  "key10": "5wSPdUAhweXDxkCWZKu6RYuXAcz9Np5QpXQgZf74UpYXy1wwvMx1nMgPTYyqazqJA3nAXHB2PphiZtDG4Vp6Vxdu",
  "key11": "4uYebq9aZfKFAsGKNwe3vwQ8X5vRf2yr6iEgjHBsJxAazRhiFhNW1p7YqfpVupaeBQH8MWrEjV9K3N2VyucaaaX4",
  "key12": "fZrPPULGyGKWYzjLEW9RgDYKtZnrgNTBGUPG1KVSJHmbz4vfFTwfjr6fHJuWR5CdLMHwfG27RWPD6n9XBKgzWYU",
  "key13": "24FTZm3uTpobesVojxshBYzfbBULW5sVXMarxsGjBTeZP1evipvoTsxaCD39LhWH1QQbAGHkAatxXBV2rkVqFGEv",
  "key14": "2sQ3CEBKMM1CwUgARLPCEgBoRu2HwXP6TjtCWdUgNxzjLtbuAsG9wASYrK3fHtcVzYHcntrm48DdrrZi9mVFp2n5",
  "key15": "2TG29wMXXYJTTYJoJN9Ejzd7ygVtc1KZ52Fex9L5zAbr1gKDdrpoHbDH3DJBHBGE9oStTXYFRRKSQ7w1B9qqqGws",
  "key16": "5VPBHKY8zrupEd5pti4rhvLnE9Qb7cJJgPw1QuWk7ijXRwp8L6jHqNTYTH563gie1QnZzMbmHW3vGFU47yUkCqsE",
  "key17": "3gv4FUUx3GX2LB35X53VgWoGtGYzxs497vfhEtzc7mMVnUmjRSQPF7SBFjBJFe3HcPu4d3USKU4chXN1PLwAHrQy",
  "key18": "3xKSqiusfSpq7Bk2EYfdNdqFcrSsyg27VNuhmP7u3jqURjbEGWxMQFpfqPbhck9zDSLYh167vt5XWDiVh34fuw6o",
  "key19": "2waaPYRicPczXurCkD1Fe6s2bYXLCUuQJHp4irv9vWKP4L27PH4z8zV5JCKsMVbZBLNAi8hCE5783VGtmrAKr5rg",
  "key20": "qXEKz8D1n1TCjGTqZBwpTrvYKoJ7rcctffGaM1xGX2PJgvUEEJYEqADPTPkJGMs6sUF9CYSJ4PsF2XcFfJUJrDL",
  "key21": "63VfNGPnwUAZCyRM5RbnCPd4v3vPMXHXU8CiGTBf8MhEkJtz1Yyrey9kJCqUyWumBtQzBi7teCYgZd3nDsxBVr2u",
  "key22": "SSHqfMNqxKkvSx9XABpeHhpqdh5azd6YqxrqAuGyGycoUCRq7yLiEkFC1jZ61oKQEpPjai4rER4qE7pfhcAMPiU",
  "key23": "4cc2YR7QDGNYQkZVRjSxNmJ7s1xugQq6UhkyvpNx8BmJyQKN5LZvRhsMJad4rCiTv23wCAcjoXeJW4cwuHUqCzDf",
  "key24": "2Ztj5zkPdg8D6qSFaEfVcGgddiywjfWEYsFvmkK54ntDfMeu4wRtrg8q2rWbBeUr3Jwyefpzo6SFy4sWTUPKi4at",
  "key25": "4Sgwu4uCmn9f73Q8P1ZUGqbaFipwjsx1DPGT1RCsgT621zuWW1tMmnfo8BFZyi8DARNTPer5K95Y6jxdbs1Ft1gj",
  "key26": "5BEt4nH4LtarcsHWg9GrJACYGXuYrEcrpB5rEFFkH3f2UfYXJYJf5ofNGwkV7v9omqgETQGJnzkYFD1ikUffoTGd",
  "key27": "5dFtFopsyoVHWW2dcLHK2wnLXhYMv2hKy2jcvkz4ozuDTrDjFX3cykAQv7dxmAF22hfPb7SVFd6icznkiDKpU5Ya",
  "key28": "3kT2zLZqWb1hkGBLm9DkpY51QJ6TBbvLEPCc9sTq2vahMZRcj1CBP696tVsC3HLBU3RjzsM81WXLEvd5DkGadZQh",
  "key29": "3UYGnxvsDmGhCb62ej1DesuS6WEms38f5mSW2wpeAtAeufehiQx9TcQHFKzsTBahw1YX63ukAdWo4P8FST2moigf",
  "key30": "PMAtdTJnjLMRDj558dN9qaFrp6oinJdhREEdCDuiCKsWRwQA2NrF28219jAZhHKE3WkLtcNFHAtW5JWLMtPjXnV",
  "key31": "3R9jWAC2uMt1EFPxNMH7iaH9zqeCdUADKZayy5UPX2edBFNoxZeogWDxr3i8h44uxw2vjUCfbBnAofDMuk1EiuQW",
  "key32": "329WQMDzJtUicemQjyoFjhaZVXdmuCF3mj4g7x4nfjquyVcPuBLSWwuUFmsc3Pr5yoavJ35v8KL9qFSoFUeobsLM",
  "key33": "2a5u1J1bWSfFTk1NFURrsqs5evQLi8QPAZ5W8Dd4nFqJ46gnW8dFdpUqFgEr9F1YMCWF4Gh293X2xDoW49aDQXo9",
  "key34": "3G7yAHMUZRuHgU2Eoo17XMDRWogjyeqkpxCnPkpuTNvt6rWu7odZ1Dg3vsJJNzyqoFy3cyka2PaCAKZkHfRDzT5G",
  "key35": "2KhPgzDQeei2cpiCZXgyys9B4aRMYdBpmFRgVtVUdCzi1uznwUh8Tka94456bRHhaR2g8EawuikRQMHrD2mPHsNj",
  "key36": "2Rn5UTmJZTBqBxp6odCnFwWmmPYU1G6oWNwV86g7nHZAX72KyCFToMRnfJxjLjLe7xhdtqDcERqdGGCabnY9ALX2",
  "key37": "LCiz5HH9v3WUJDeC5yJrMo5y7TcN7RodBLreaDJTuoLcz2DYiUJJRpFC6xK2Xwphj6cZrGvq1peFTURyDJLB7Sf",
  "key38": "52BtgozWmtBwkWtXWEQjQtN8jFRAirGcgHyouKGj6ygYy6d5iL1ALLXLQ5NysMcyPMczZCYkvCEtiaMHkX1CWu9L",
  "key39": "2J4rtyRszCA3YjgHmjdGXeQyFMwBWo2TaXRi7AJqmrHUStr8Egfh3dzJoPPeSFvz3Td2t6kfCeS9oURbrBf5yieb",
  "key40": "XThUgwhrRawRGBNXY84Yxji6vkTExMXZwTw9DWCCgRYMQCYsZVjuSRcBSa5Utpzazx65R4XNV6wh3y9nZEefRqw",
  "key41": "5ZMkPxPoHWR2FGY9qYNj7rDEhT4vqy32izXhaGZfeAnQkQVT1VAd6q7pffEL3FK6FVhGSNH51CR2zUMG8Hkwcx5k",
  "key42": "5tfcnFbjnVzJgMFn13x84vATagzT9CV8z4i4PB4e8F52BG1VHg8GtXUzuR1FcurfJWNw3BgZFqdzzjP38UTatEbR",
  "key43": "25DSyMWMqyMgVUTbjbVw2f8zgQovph7vMJ9mkj9ncEFxAZsHV1Unwn6ir2Zgfv1oab2yurCM5Wn5p3VAuGeKPYrP",
  "key44": "3yJkDzdP1Qi5gWdhKhoLT9nUknViVf1k9hfDzZwu2GjmDwR1L9RQg5Bptzig2AJwEs2SbdDHh3qbmDDrhvNbBMtU",
  "key45": "3yU7YG7WfFpuSNGfWLZVT3T2Z5jf1xn7LFa1rfAcnFNtLjj87KSJe8bRRuY7zQ7xC7pE7ysKs1xSyCu8J1vwRVAA",
  "key46": "4bJcYZJZjBporYwiXUSzykBXd2wBPQGNnqtJ9k2byLN1LoKfMgkr6rcDjkY5Qcg3ixSGFzbffkdYbasVK62Uda4e",
  "key47": "z95JvmLnRuW3kGmT3Gsz3rWfCMArDiZSfjDnWxBaauwk5bpKLD4VRsRjVZRzT9b5DgoW3uDQimnEFg3WHTnsEib"
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
