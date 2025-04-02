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
    "geAVDBvwUL6M8RQiB5ecprjrp2aaWSNzWZkSWpWXAhoHGkQBk4u3ARwCZJisC7u6Qn3am8nuAPuPF5F4haDs3Rq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5SPLjJ4aPReKg2mTDuSNthdgnwAKPBm7SdZLt6Td9mt7n695F3JWM9HRfZ78BmVaFLy1SuVXRxj38zAgHTtjtuNf",
  "key1": "283A66qAw199gSrnSQEixb9wDGc6Ex9ypT8yDVDx8cLRJfdTQC3VeuZMbzqxMyBXAvL8sH38VJNa73Lw9BNkjCj7",
  "key2": "58azoNt1hvEaJZLWSZgBk5ednA7bn438hfRbHinLSwKDsKdKm9BDHaTCaD6Ze3mHw5eUzb3hgTcVsWM5BYep9pZd",
  "key3": "2PhVnBREBabvvZyqP5JQK2CsUFyuXxybKHNofiPQDVSoqDvzQRK3Yw7wBx6k8znZmuXVL9JFbgUb7SHknkBraLkF",
  "key4": "6iH85N3s4XQ2db9XTYKj33ngVPZkLFYobgmSuCaBqBTJKNXhutpzugU126DDfWyWLAtzKEC2JzWDvw6FKowsQBM",
  "key5": "3jfpGgwgxj5XfBpZEGgR7jgaTFY9fpuhn4pxUkYeQDrgmXis2t3DVbbdJZCqFPQaZifQYabrGWDKjvPNFygj1Sfr",
  "key6": "2vzh2KdA9zu1okFGZyuLcTTaUNbgNJn6iyMPS1b3p1uBNNvmVK2vEiACkQuAMQs7p4bifrKaR3eiX5ZBJZqDCJPk",
  "key7": "x6riFhunQ5QCRJCVmyRvjuKT3DcmR7kbRNLW2CmzGR5NkuVDsiwXH9rvHqZj6WrQDhgL9w9UsxUqF3MSyNFxt85",
  "key8": "vyMkiQ2Yjep4iiXSbchiqjgD5nKTqTTbno2aCLdW2YYtUN4ShYAPUvGxNWm6eRzYBUcbo6bVPrTmMqQdcEor5JE",
  "key9": "2aWz7nLnEVLCELoa9AvtiD77Gwh5Ane8tQb41wSxB1mp2Ha3hQgQhsQ9M4aSHM2FbV5TxJzytZtq1U6hczUtUsxk",
  "key10": "41zcM6GGt9cqysoZLhhbXv5zrpL1VsCHFqQzTthBNVTxuY5CPQqQYUPXLuVm1t9oFp65DDqet7W9EZ9vnnysDVg6",
  "key11": "2kaCZQ7C14NYaW56GS4vBFULCUiaHjf64JnafHTqGXUPyNK83Pgjoj1n4XaSbJ3k1ZHh1p4qLUc4TM4DDXL69aqC",
  "key12": "29EpX8xGYCWkXcYex1JB86sJhnz6BsND3NhNuMBZK1DfDLBqFnV59gsKgKcYXRbPmJjipKycpvDRLQ79qvuCkamF",
  "key13": "5KgJof3XfrYw2jD9oR3HL23eC3425RGL6pUJCNtdPjKDWc2DUGpCWaCZ6Ny2sM2MLTaMTfyMqjMGaJfQ9v2rSYDF",
  "key14": "5CygGcza2D7XHX1PwJf2CpnR3RKS7zysmeVkxT8xtpAJbzP3xT6Zs68MumTBbJEpfjSFYxGE4PAihwWWKFx2Ky3c",
  "key15": "2SGiH1fPc3LSjMb977hkZkNDBQ6yv766FGZEUSo2oy589tCVGHhkX8ADp82qApaPzmFwnNZK3U8jKf9LMisEute6",
  "key16": "4fTsvzjhskQEZtXKChrkHQNLQ2HMfH9xF6BZiwRq871Ci5ktYBA49456H82FqCdk23BbZ3RwhrDPh3JCh6dz5LNH",
  "key17": "51dV3trkbvjzbN28QqjHV2c2tN3o9LFyQtSBywThLPsTBk1JJLyhYr26ZtSx2NFCrC75fmehwzU5W7bj5xc6kBx5",
  "key18": "3PuqnVKmkf2z6wiUQMLZy3XdpctXajtsVuKg9NakEaf6NEVhs6UFhPUXgbUxoLY3nnjTY3Byzhu5vp4B8HFYDDtf",
  "key19": "3MXYeXyuaHjQ3vQRJGKdmxmaueFEE8fc6cMy68evDzCfS5NsWci7vAQhoYsMSCxhPBUnZYe5KvPTMxqPvSAbAf5y",
  "key20": "8thfreRXsvC4WEeg8vhQjvCeVGKaDCgpio2FQ7paQCAcuZNdG19aRNDyfw3fwNfeMcF3buAJXfw2bxXZvUaUAyd",
  "key21": "3Q3zXV8SZQjjg5zGLZzf4utFEz8NjHN1E9sBabunVePPjqGLCSjWwJCLa3RzDE3Tk4cgccHHKsMarkKax3VVCBHU",
  "key22": "3ygrAJiY5CCQxKT6csCb5edRnSHBEwugV9SGwYV8zvoCuYHUymaBP5SmzdwSB5QXPpaL6obYgmJt8Vr9jW171V82",
  "key23": "LTotzKua7kdbJYinwByWHuvY2pNFuhYVRoHv14R6ymHcgFkQnJY9F96h5EgEiyqYx56j9sJzcbeX42WiNAwBuGc",
  "key24": "3M5C2ggJPnsSrpzHpFNU7qK2poXMPhoNodCSw5FFmTiZxsNGsAPHLYq5nSeaaw55NhWYgHCmtKFJgS5gW9HdbGN9",
  "key25": "2ZXuNuobz4NNMSYAG9VWWMJd3Pxf6Umx9q7L4uk1rAmxC4yAmwpqS2JVEhnyrJpkTxp3TQtB4H1qpUw7Hrp5nL8d",
  "key26": "66axkTJyCAuCTYSsVtXmEXrb1A5CUoBW61tRH39VCQP7mRbguXkE5PQqHWKpyUUp7EEspQNVgumahufkpiTVESL4",
  "key27": "3kG4rD2THXQhWFHhUuu4W2Xhciv4rxt4RRft1kch2mjbxNK5D7CwUXLEYdLvLc5rhEAy5Uc9tgxjqSmQaXWZz2kk",
  "key28": "2CrsuLwJutZk8KKbLdomtqjkHAxm6WcjKBznQETQv6TGrJ3pphCcfebJ4V4FqrtuAeB771xYzjfx32t3nip9Vufa",
  "key29": "2xpCMg3zQeF73bEzVJLN4JXVtvCM8D5ky3twWmrKx9kH7CGrCboSLLSPQpkjd91WwYpom2UNfzQFKRbZ5isEuTWt",
  "key30": "2rLoRwCLURjxUZfQ4TTKn21fGSRRa7XX1shwUtzQUAtE3KYS8P2ZufjK1tCzCHfbWrNd2GHpQGBZyA4bEwobrLXT",
  "key31": "2JRcWymVjztV8C3uX6MVKf6SoHCpUQSnLSvxaT4u2XtB9cCbcT4dda6AbwgiL7e3vfhRJiPJhvstuj9SNrsEGMZU",
  "key32": "4r7GLRu1YmEUaoLLirutGyHWwtE3XXApXvboKzfWj3DEWYsLyq1woFBJjYudukWf5iAiY2RQPk3PHkk6eZzsNJc2",
  "key33": "6488HZmLWFxAaKAt63UTfPvFQifYkiPQWByF1sfDBS31dG2c1USALLis4NJJRFU2ooJZrJ3sJ5PXgkHSm4uLRjUV",
  "key34": "3mR99j5JBTLteb383djqY1b47raPYGErSEkTezt6pHLNsaketSvtpDxUA9N37Q72aifhEemK1Y2w9xg9NKKDWZYD",
  "key35": "2jf1m5fNUtthw7ctLw7N5CPKHCSFX31tWEPpz6A5yKZqJcouzMywTvpMuxdb3GSgw3SsDucnaosQo8kzz8toUywR",
  "key36": "3iX4KHyGSTKwTwGQTBWL9eCM7qUTwsLhgWMunuP2Unn3gBx5bimiD8pL4QJ4J3HFL1Do3Vg96EX4UeFxEEBCESPB",
  "key37": "6148sBec1Gxkup5PzFYrdPYYc8KULpj4hz9ZrjbtWRhCXrdFYiLkcGVFCNjSBKkRkNCUmBnF6j7oMEQqZih4EreB",
  "key38": "4geepy5TZCq3twhe71wVrs5B8c8u5rDZGXmkLzd9mJDnnwTDZmXx9hXse9F7fgAZUH4VNjActEc8EptnaZWcfPqS",
  "key39": "47oajVyYU4u1NogYaW7GwZc4gsq7TGuQZtSR7rfBtw8UMe73zQSsqCSsLtS3GBQPi9NHBMKYMvRP4gQk9JmrZmr9",
  "key40": "YALHKkf4UuXzezkESXya3G9oSGRweuYfUUi8KFN91AQhrx4HeYyX6DvPBRe2uLV9rTMWt6vvbrH76QjPPgGSUoZ",
  "key41": "DmZRJ7dYSAExnmUcy6H4XuGTvXcspGfzERQzSgk4ciGHicmyN1idiLaYEZzerd5G9Ugi6cmkNpsvzbZygUSPDVf",
  "key42": "3De5njFa2SEwkwXP6DxakdRuCpuPoY5LWjLPKCYkYoDFYJUezKHNS5j1LRKwLDf6oh9YV4nBxDQsz1Kcaow1xxF2",
  "key43": "3kqtAJdyPoD13ULzyK4pw3d4fcaMj43Ahh8Dd8VjMWUEx7ZzMdeGJAzJkUSnsLVDV6nUgTqngZk6xqiCjnPtyR7Q",
  "key44": "2xaaoz6kd8GMijKEHaUTj7B2fBLpC6sgR4RgurgZ4DhY8hamN7Avf2rkD6jwjWEVMzesP1ia9dWCKiY5jk1ziKvL",
  "key45": "4sTfSWw7zaESVntF1XQKdk3FQfWFM166viQyGFENpTTsaY2qPhPb98FpEVG67k6AtkuZRt9gGThEk4ZDdKEEsLjm",
  "key46": "5JCsYsMxz6mUS3BfoeydM1bfaMegk1PZ3vgVKRifASirWo2toifmUNPqCBC4bm82JCLE2TT6CZvGHVFoE54qkJgF",
  "key47": "41RSX7F7cDgdoHLLwdXq96AeBGVHTXXd98pc2gZExDsUg37KRq2W12yo1QaGWEsGNCEwTDNkTHCcxKdjGtQWAuRH",
  "key48": "5CXtoavP9g42WfdSLMAJzLnJnab86ByoPghC2KGar1N4nRxiRBvhrwdmsMeP2coVrC5PqR2ZDTvcPZZPsD5LjmB6"
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
