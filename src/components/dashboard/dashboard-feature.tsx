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
    "4mPcKaXkt8QefQqmKP3HWBmEy92ea2B1jYvSUUExpFup6NmYW9uNm3eEFya3DHGhfjRMeJb7yqE9swcWZMGnwKcr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "JVFPL17czPTfDxHef7TJ9HQZM7ZXc86GQEEiE6cT4c9Ch4gTJ4X4pTr2UnEfSp35koRx1HyBe1mYFaSLLhsD3TM",
  "key1": "5NDxrZZTbMumDUBhzfNAXoYj1chtZ9LV4VpTLRxdMTuQzvuAUVCEscFdnAS5rhnaQRMtj7EAy9Jq93GUex98XdLK",
  "key2": "5uDTbkkfTGEeFT2quGzNhQpWvrQi2Fsp8YSz69PZv5HKG95L7YsfgjBLGR4HA9pmVoyryeTg55tfFPpSWu9hnWih",
  "key3": "56qiNPwW7uZwapiGqiWanRdhvJvc5BpFCeWneK1jwve7Zkup4twJ4y225pTLWX5gu2ZozgarC4LtbZsZR4eQ51sb",
  "key4": "3cgmSb4xyu5gwCwkpPYDhh2NNqsJtzxU9rBPuC1Sp8pTE84WJ8RwJ23iS637cd6ELFFX49XqSgmKMBgC7rVtoYdN",
  "key5": "3D8KFvgSh32wMYzBsuWH13ZxPkCW73cV2N4WmQSQaRSA5sdvMrQ5GdsGKd4cghHfj7SSG6ckaZZ9k9sgnJR6ubtN",
  "key6": "3TFPSmgSrKPdWem4r1We6rBoTnyzAhYTFPSNfAqkaPPKwo99gA3za2n86VGR6Q5ksPf79WToHj83De2Q6EBdJXmk",
  "key7": "5c2pqcvkTZ3dyH8Mwric41VPvkoVRmky3jtrurgiPTHGAqRTULpemz6fexrLn57Wyy38Rw9VLYrXckGCciCVwZBS",
  "key8": "4iANkbPriZ6NkfvP5RbzyRyRi68mxnkpcT8r2WggePYgu26CMtyasedZnwSqTLFpBYdUfJTT4TgWcd4CyD1cNMTz",
  "key9": "5YuW86qbimo9KyKv47QAkGcqNokDM6ZpeWZHdHBv9qwnFqWStKdXXPTKQwHAX1bg3z3mRKcrJuHPEaR75RtL71UK",
  "key10": "41SMBwV39tFPzf1QGnkQk2HzZKBzFiK55DMTtuV5vr3dzNSiAGLak7i3xKMooW1zTcDAHm4yCpH9cMoWoH4uVwNx",
  "key11": "3DK7Aqv1agasRxkqximvog9kU6dQzpMpxEK4TpiE6RGavrp8C2fp264wezeH58qSG2uhZjWXGJ8heCBU6koFxBtL",
  "key12": "26D8SFc6gWLSJBzg66PUJZdnVokDJB6xqqgYZusiAi3rkrUn3eqpXr1BP9kGjL53ZUcTnAqoTMt8Nx5fgkpfDhpX",
  "key13": "5k9nxLfWAdvMFeUaaRs8WFbKbSrc7EQEEAcBENF8xG5iJNoR3E21mEFeYGxQv1L6yy6rDo65ydkxnBTiejPCBZzU",
  "key14": "4jXHDC5ZexUmNfhugjT9BEhRUiUg6USJZwneX1iYi97jCoH8eoG2wZnGm5iTWL9AzLFupSXPB4KwebafvWPtfeqM",
  "key15": "5y9AJUFwXhKuNG4WXRw1MQ4xakCurVdv6FBKAnuxZWxRjADkojZRNfPB2jAR4ShMKMdMu15zjAtoDeWbgUYd6knB",
  "key16": "389TBf2gV6k1PvoSBoYZGhuRuDvygjmy4uesVP6JjdycdTw9UjgGebKuHaNQLvc1deC4NRjJGPnjqnyVCfTSbPgg",
  "key17": "4kWcDMt38xFKUe63aSTmFKF1DXPtrYpMKWUqPe3TU2f1yFa678W9SCMWiEq3ovAd7UDDzMUS2FTJPAP5wNPgsPeY",
  "key18": "4sSLoZhBN7hZx3HwTEC2SmvXMiyFcHaAxkKLuB8u1TZt4uKCuSKKUueumhhfPFznejCv4bNSYQduQtGHHCbjp2RB",
  "key19": "4UZePQNyqyxuxZX9Wt6L7EjHmWizygnPrynFXjwi73ukQbhkXLnwow1yjA48nqi9QLGPmrKUk9gr6JSGtaoDyHpX",
  "key20": "5tZMPd656Lh8GsyjaX1goD1x5bFUzCy6jbFsdK9L3Jy1feXR6MTFGtmyeutdXnFvwG4MX17pDmb65j5ykKDW2Wss",
  "key21": "3BdxcVpoRx1dftGvVZbqk2xzs3nnWUdRUciuwSbbWE3WoMVFTRHL5Yzws52QtwQ3vLLA7TqYpCQdQVdfpw1uC9P5",
  "key22": "23V1fADCYY8pkUQDjNNK6fLc2RL5Td2yu45rDx13V9qtm9mEAPXwfzi7DLSMjSyP92hAimJchazfpmko8W8sCUPC",
  "key23": "247SuEPBzKDrXffBtBEDxoTZeqnhnJPnujtU5Akreuo88gizMgMRaHugfiYCH5TbP5KSNUF1pxg7oRgeRKyMtt1B",
  "key24": "2JLhM11ZvTnX5DrACZ9CwRXvpDrfqCSjbQppjRpJH8GbaEhpqvtXSNKeHRwigXwgWnwpihFiXvWs6pVPmmJMj7Rz",
  "key25": "5dFfC6g87CkMa2TLvJYwoeku5veLaFdfNCPgbzvvf1ajsV1UVtfuqnj6quoHcE6HpdTxq3CTrPSuT38Zdg2v8EqQ",
  "key26": "4G2WNJdbqiGoxjmnRU4P6WbiuZnUHX8T9ehuyWE9VL4KRTnm6oY6NUbY2nqR7xovV6C2Hf4FmhrNyjGmrNdCPm1r",
  "key27": "65yEMpVa8cU9LT4Bqo14JL15jnXbJvXevYFcfs5HezR96GNiwhSg1WJvkJFGbeZhzb7KfrbEjHUW2vG6wVgyYvV9",
  "key28": "5ijLyCyjjF6juM77iXjVjpBAAyBaC8ZXnHZ3mZtat6hHjD4YSD7PrjPMGhgbkcdReXHew5MKnCPaSkhd2nR78Z6D",
  "key29": "xpDLj5QoAg9byPazn5zy3N4tWm66Vwavpw1SV7MVM4vbztDTTV2C7XMycZhFaAFPrspyjaGhk7RkCCH5XYwD8b2",
  "key30": "5QFbPZMAW6ww1qnoE3JrxxcwfVXeD5JtcpGBAjzLUv3pR4nBtLf68QHsNUQMgmZGmCBxSrS92AsZiynsPTxgDMzS",
  "key31": "R2GVYEYZMZUFmqjbsNCpPNBrWvESiZLVnC3mbfo4mVCqNNBq8QnfErrmozPHZQfSuMsrg5ED9wT36VbivQxyMJr",
  "key32": "4Ge96ySeJ53k3z4iJg987SaSGdPHPpDKHGDqs4rCLNGqF4NJFb4Lkyou3cciH2YjiaJkCR5W3cxwUapmPzakQDyT",
  "key33": "4aybBojWiPVAroABauAewb7ZHyvzhzJhYECZyNnfL2T3CnKCeehAEKN1KTwodBbtomXYjGG2xd492DRSN41aCH2g",
  "key34": "3AZKW2p2LLHbudSYWSLr1JP3ggyDQiZT5t27uJiW6rFjUBRWSzhcFr7AJ6hnPRY45zwx6oTzVJvCFboSaKYKGVTd",
  "key35": "2VGRwYm9GBzPaW6quF4ZAdAJmtrU9qryfQHATU3jVWXvm28fdm1zVP6jB5QunLoyye53HC659CzrsEcYZVWguXoe",
  "key36": "4Yxs2N2fBttnooWg8aBEhUwRR9JLEbbyomaQAEMYTgzez8e6qiyqwCd9aWmbU2TWt7nRP2cCyRNqnb8Rdm2N4tPw",
  "key37": "5pZqDRgbH92VQmn3xhLMSEeQcx91ezEqJVpJFPjwycRbi2x1x6whSQMKeatunFVhmpB5XV9cWDZaQbpUDFhEPyXq"
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
