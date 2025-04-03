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
    "5VWBViunbYj3iwCAaQujYG8nz1LAndvjqzLn5EwRVuf39464DeZNT3BKbbjPVYSyYfrPtdoxuDWkfZ8PPFgaGKw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5XmCk4hrAc2pbjEkanJAjhSigTYmBxjprrry1xhX3Ytwqo7szd7d2UcEASssRzdfr4dBHe7SxpQkFTNmd7VjDEww",
  "key1": "2fg5hNi5k3vTtmKVu1i4ZbVHd7zvXcurXABjLsuB8mWL95H8WHzSrXR1LZhYqhgUL4NcokWGsYXSbAfx4jMpGL22",
  "key2": "2W4aT1fJEvhF9RwUurR6gBvP7ke2xmS44bF1eW7NTuYjvdALaAsxrjuKVFChYvwQbAxLnwk7vRzJAeKRhowg3qy1",
  "key3": "2SXQjRDPNeeA23iPEhxzQJG8jTnBq8rauHE6otS4WkdBy5SVnBvErNND5ccjbV7iJpadhnPgyZqgYGvZfhF83JMY",
  "key4": "2UzooV4SN6sN2YadibdSbMzo4JmeQCJHYT5UaXZE8YeRFFEMmDpub9gqVqtNfAv23x5NpESsXhkzUjMNhhd4quQV",
  "key5": "jvUKD4JWQLwfiguftH1eGjrvnKd2KLNPRUy18bX972xSFb9wF8JtHR5dDFp195QXmxRTt6AtWuD7Rwyn3yBnss3",
  "key6": "2t9sKCtpjNWjcZocYQPGsvw3GNFn2WWL8Di1P4krDfuyAvGaV6aAu4oMemLuz2uAAhsbXeYUXtcHUHdjnjLxafy3",
  "key7": "34FtDXpQxMQQ7sv1pCJUULU3roBUdG9YXmRyTbwi5RJuyq9KhWgR98GAgyB9TYibyDbQ8izycGhxTzFohPjKWPFz",
  "key8": "29kbPfw66Wix5s8vdU7HB1yss2qLGb74Bwm9w71eHaYBgFGj8R9yaJ12ok7a72Z7M9G6796f5CpFFdXBqHY1ArvJ",
  "key9": "5J1no4A4t4dd3hteEBqMjdeorMYKamvTcWkaxs2Sq6FoWUF4ccTjgrQEbQiRaeJFUFmiegz9hRN1ZtUV18bM898E",
  "key10": "4hVDJohWEKAnpcXqp8R5YCfZpRu1ntrB5HHZq6tg2ra6bTkaZ616SejfLwRx6yQ9J3gMt7CyLuwvyjLRon4fpVwU",
  "key11": "29TcnEPrmDoxKLtYXBcyNyAnBAUktH4ToZc9LdhjV6REpkQgCAc7yJgJMMVmbM1DEQqEg8kjJzXXpj1VBtDLWQv1",
  "key12": "3d8yLwK8WcN72gBCYTPWoGCxRidFJazfx4c24SNPecpZQaSS3UxE9ZpUrDtqgSz5owv5eNY7NQy73AWgNKV5r7rj",
  "key13": "41qxseqJFSN234MqgYTRYrzT6wSVEicGspKGSX1jKjCRhcT9gDEGPoeEKgiYkqGFwsRasVpc5U3wdHA2QnxSUccG",
  "key14": "5M3N5rUph19d87FwumDGgNNyZfunSMQtytmLNHXG4Ms19XxojzThwaBfu6f3Q6pQwpuvjuVt2zXv2uujfWznssCx",
  "key15": "5rkaxN4Ph3HEPt4B6yY2owskQzHYHwyeBVtWDxTEyT2PEHUA6EKaMXSBZn9u7dbEKAfYTpJpjWTpJRXwtnNF8uLb",
  "key16": "2JXhMDc8Piq9z9pNwsybR1u36QHC7Yn6fj5x7rQDQ4UPnM9K2mb2acMpRtd7nVtaThJwZEYwbJGbV6cNWmNk3LUJ",
  "key17": "4Kpd4ozKFyaqde63fwqvhegVKpGvwQwRm32zXJ4GbV7hfw8GFrjcZV2KDVT2Ep2HV61ERYknMZaAVAUUtxdx4kkA",
  "key18": "3NHdHquu6XjVz3WWTbvN8bqL3XRM8EhHw7UFgE6eJ4mY9gAZX8Gx8xCkqozJLKRWcDYZAvj1Jo8Nj8KZtxqdML6k",
  "key19": "2UkVrmLN8VjE9tgkVijsSU79nh6nSV43YbPyx6bjVeM1LBQaXD2PJFqsHGnPSNH3LQth29sFhfBdTtfGXDT8AqQv",
  "key20": "2xp3ssH9pmzhkzCpSyw9q8WGuUKqiapWGYZfpVeVyrJLDuPrL2M8xchoPFNSUcyenZKoEpmiBxfqqwDzmZ2ooSP6",
  "key21": "2v95icyW4UDwbwpjsTzukfB5X6aja8zmVj2DFSYb5RiTHHBRmML18WXXziVD8gwECcv5bB1LLp2xzfiFc55KRLUp",
  "key22": "joUd993ssBpQKqopLr8qzwRwWJZJnLTJbTK6nBoT8XKTmESPj89qcTg6u8LtZMcTFr44RCxRexzQQttG71iURiT",
  "key23": "5vYjPeuNnHAAvruQh9AjkBz2gSRT8erxAr3RvihBxXe983ucgUFdSNgZKEAtkjjWroaqLvxH7jmYxV4AEyMh9e2X",
  "key24": "61H6yDHJGrdH3Z8FcqoeBCYnu561etMSK4maBWqgp8pSgEM3aLt9tnmLjvamCxB6Xix49WGW5vzenRTFkdpgZXQ6",
  "key25": "5RNMbx6EpS6gBpPcXc2DrEnFKHsDmEz8SFoumBTE3BAjwVzmmDXQpggSgUuunjaL6YHoueGR2s4bgQopEi5zobZU",
  "key26": "3CdsCdwdfQeVMom5gG47mm9vdP44jLmv5vb1VHj4qKzh275JcSLJsFi7UNTDGL4vozCcb1nDAo5Wws1NoEKfosBf",
  "key27": "2Sox4iANXza43exHG55r3j8eYw2AKFcdsQ6RgAds7Us2qvoVyMECCxniWXZbjCRfLfJRKYDp7EXxe2Bxam8EVUpA",
  "key28": "f6stHjckYETgxdQMEuT94igFpemHU9HS8MbAyFQc1D3AeexTHmkZ1FxJxTgpemj2LVD95bEe2bpXmTiwv3rxoQx",
  "key29": "2qGoBj5dNtdi4oQqH2YYTDJS4R6v8UHX1ghTXr8161uLJiTJWhQNkGv8cD49nuiJiQFhiZ5S77iqP6nkLM1q9ehX",
  "key30": "2GgmCgnDSGBq1Yj1NeVkMQUYfBU1tjGfThAaznvskpLbcArJpm3vPQzq2UkxcefwnLz9Azc1LL21w7Z1TexHyWcf",
  "key31": "msZL8VEyAQTwtET1WJhzP5hgrFB8L6EWT5GRa9h15kdjRDXocCwXWKA85kof5utKd5HBCaLNpxYUK6j3DARLvKw",
  "key32": "57KAJoQ9XrYaSnSg6VzmA4BGbfNPwdeer9aBJchQerVtqNUD1vYbbq9RaLM5pA9waK5caScGDH3XauGiZuE9kQ76",
  "key33": "5UQcUMmCF8JdmGfzgfR62RkoaTPtCb5aT2VmwxjxmW7GgygTykMdHtQwfWXMXVrfuW89QS8xLjwhpTf6kvT7AuQY",
  "key34": "4e4ZumqKEMFrZGakjykuQ4pLw2Y6pwyxRtqTV2FdSpVnv5wAyeej5TWT3aNC4oxjfBHT8TtjzWdrTpwwNBos39Ye",
  "key35": "5GGvA8BmsGiQWPRkaNTNpEPL8ubox89iGgK9nhCgVDR7nYXuQANXf4uk3ei6JHAtQ2EosMUjDsQg3oSe2mJu1MN4",
  "key36": "2ffmS65zzBDsswkZMNHKg2VPW3jCXWE8QSpiGB6JM8B5hd4zQH2UjGpMy1PVCPHWucc5Mt3soAqNRp8u4gMM9uuW",
  "key37": "3bxVRzcgxRtGopGNkWP8pL96xZqmXq8ZaNpn3n1yvSsmMi3ekLAMHKdQ6EC2vaDj4c261kf9BTu2gWuQxsYjPX5b",
  "key38": "62o9rQJYtZFRZ3FD4mxbCcsQTJMxJNQQzh487dC5azAtRqsvyPapWaDQdCzRP6Lazp1qWCQ88DeyGhxamSRBVgXY",
  "key39": "596QXrY98tGsagqzk5TvWzZVGGZHw9Gb5rSVjBREy3jfSPE4292u85ubEFRcvoSYUXpiHKQLnJUsLEFY22fcjtPu",
  "key40": "5EXJnEdMXAzdxZ2AE1V3FpbFg6aHHHN4qv2WxXcFXDH7WHGktxxs5gNy3z2MDqK2b8WW7Uoc7y4qX8MKMVx8nyRH",
  "key41": "428CaAhHYKxZrNoWMnSiFxRqWjZdmHBF2mc7mmMUpbwVokmoRK6CzMtoKuH99xY1CfpL6nLUkvmj7c4M2SCjXDnc"
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
