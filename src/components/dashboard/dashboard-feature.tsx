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
    "5YxhMT2KZUecGDgbEtm956XgKNXpWCseXNhGA38VUPqqqpzjbP7P7HpdYWKwgAuDq8JU8B8bPPXAnETf1d2sq1j3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Qgxa43EvzgfBNZsyTpNkAWuwWgTUH8VPetstMBnYvrFXMBgvMgtpRZ3Bc4PQS3kYDfMY8TJhdUqMbDjXEJ5e8bb",
  "key1": "4NMnQQgwE8qJcCoaq6JSbtT68fX2pWaZKSJuMPpHBUPDE73yfSf9FNY1otm76Fh6XtWkfU45ktRKbDhvNK3uRtrw",
  "key2": "3Z4efiYVJPdGEL31bGkHfzBUhToXxViTMzrWyVVKnvDVHLmVMparcCH1xvhGs5Wg9E9x3RyUoypXqgNcGkCjUAa7",
  "key3": "bka7eAvTkkgRJ2DiZsJy4P6kyRAAh6a8GV8WetvJQj9kC6Fy4aMQgTDBQyTQc3E2znPHVSvsaw6cRaH1V9AerQA",
  "key4": "2LrDm5d6jJ2pHvP68Jupfv83RNPqxhmvbcXiJh1GxCcsH2p8fgXSLhPNfWPYQJhHZxY6u5WcCA7KWSdUwQnxZPuH",
  "key5": "3uCKGFrZR1rF2DSYjKWL3t32w2kuZFNc4nXZt2TpKAzD3YgLoYaWqXDt7ZWG6gd8fieN35zWuPi8tH6K51yFJVmR",
  "key6": "5XpoHtAFFBcDLqStc9SVm5rh6zYof889az1CJngKpZ5Z7gjBMES4iRLArPEFyYjehMfDFMZ5q6pYNAxa2x8NgFmJ",
  "key7": "wKrNex8Pk33xLq2goMbEXAUT97bHy5t7pPMAJQxgoPtG3dFSsxhxAeV5stxyNGoaw5n94Fsbmsu2AZ6jG49rV77",
  "key8": "2EAnnzBcZkqVUKd4pFUYkqXP6wvBDZcASmMu2RnERhhyaXrk1HfGz9JKK6PXsifiSx7tT8ePexz4K62CFaRb3stj",
  "key9": "5JgacT549MXmNXKjJ9bQTwxCkqipgnixecUKnUEJoww8spwifeJLjn1LzMLSydksYNQSc3U9WqSyeCqBAd8XDVYb",
  "key10": "4eY7LRo39tVqnzagFBWDxsHkN3gERHqHXDcNdVnby4DGP9ahnJNWzGvsTGvUTdsbwmWfLECx8iSPYfZJ1tVQRthb",
  "key11": "5hP1BFFL3bv8ZGjq4W4BHVkLGRQabFH5XFHRG1nAqrWZG9DgpyPuuHQLyR4uqTQ9YuQC818QGvS44Uj3GG1Li2gt",
  "key12": "fpyH4ZERZ61j8xqxDQhKuxNTZzgkdvW3pcY4y8r621WJo7PVut3NhJ15RfpxwgTMHKNTndoh2XuYMQJDjD5Wgd5",
  "key13": "5GYqTRZQES4pb9y759w1DNcAyXVpNRmMA9fkSohHSzG3HVxpMcJCQCUxHkB7r3ubPRT9ugcGZp9sUjsGDAYpHbjM",
  "key14": "5w9gtSaq2psT3pi1cM5Ug5unqRjQrsD6siJG2FrnVnoxHizCJNDDmEB2SsMeLJuGukVJB98eX9Wh8TRU1i237n8P",
  "key15": "5ftAheK9S8qTj3fLJUCnKCsH6MFqKR26DFAxPktDh3E8TDJtTFE7sX8RvFjT9tEq4pSQ74GpwR2oHK2a5KWKHrCp",
  "key16": "29GNQg9PNv9uevJY41JCMjcfHHxWi7jvbs5jhYXQzYrjqgpHnNzsXhncSPVzBFG4Rnihxik6nC8q2uZrMvy8FRV1",
  "key17": "USP5rBjnjhM5Kmipg96YDtNR5tMAZ8qpM25ExCC8dikh7qmWj8uE6S9edYMGtvRV1Q8HCLiFqwUAjjpEtawQUSf",
  "key18": "3DD5Bemq7GrKS4emjwvtsDVHUu3iSAWfV381CsE3D1yLMKd9LDLQyzM4LQRxGdcWXgujKiA3NeKsYkDTe7Hwfxcq",
  "key19": "59CMwAtSoEzqgpiVoruq9t8ahmfuPuoMeMbxBfuYiVt8RjuNeRWf2ymPgae2pqvaiX8KFaPowQHAVhDyduXCy8x4",
  "key20": "5CsN9RiLjqari4z7HgoJkNYPVhSEVHimqSJiycAEcqWUc9QjSKKr7j4HYCZ4CxmM5iLSV46RfwwWjSB6btw7cZG6",
  "key21": "8wmNs5FUHTiy6fvRgXExD7FKxHyzisDWYdJFimZZqgj2VV3V1AfC1FDsrwLVPE1ziE2UkTF9nNy4G4rYGri75Ug",
  "key22": "5mcRjNt5MMbMWnNJTLo7HEBig2pK8JY9SXHgd4KY9qx6Zutpq6CooBmBSoJcXoJbR8VecUPPxuxocAxen6igPQVT",
  "key23": "g5CQVJau7o358uxSJYqfsrQ7H4hUxvQj2rMUVZwqmgi8SJZhK2xtJS8xZSQ5e5FK6FrQ4CcadiSK4heRvjsVGfW",
  "key24": "39MdMSgeUzabuFmnz7QHaqT8oCse49MhSzW64rL8cEji5bvt87VHeWTeHpeke57NPpbineYFkF8s4tphvBGbVpKj",
  "key25": "31JUtW5sgsCQ37iSe3fggDDfnY6U1LAX9nbQ2HNEgSdUho2fHs7mFTbd71RJdcUYdtB4URKbvSX7t4scWfCmUL88",
  "key26": "59aWWuzrwaKJs9es1Eo7Teexc2Vhavupx9f1EJ2AZVVaBBC3EQ5bDnfcLkEmtu4d6vxXQD4aSP1jbzeqiUWdBMh1",
  "key27": "2NNFRBnZbg215csHXVWP2dBWnY8Ab4acszke1tDRht7QyG8tjHP1wdkzRMMYVpbEXy6CKjJnZ5BANch9B4LgJUb4",
  "key28": "Jas1TYaUApRka3wHThUmSmQ5GhHppcjgbV5xctCDwoh9C2K5bqh1Pmn2asX5ik53UyiCctALBc9Zz46vid414Bx",
  "key29": "2Xt55gjaFrNeLW1xNTufcezdFcie2cVhkBNkaWPSUmhfJSNb8dvzqaxM1KE52Y9TYhtjTHtCCCixDoNCc9Sj6iEx",
  "key30": "4QpWLLPiXsbQy1hShFgRV3rdG4cgpK45wGozQd3oPE3b7JNcTaVsBmgP3nzfkVd6G8QDnVKqf7ButQBZP8ayqRPm",
  "key31": "5pDpFMcnMjEw9rZ3Lf6dCjyoYgp2Th6d4XkMSp3L916P1CbLCpYzZabsuWPdDUyLUvCFpUMcdiCmW72Yz1BRTT7D",
  "key32": "XQgXPd3NSA28dCBYaCwZV6oELoRRCFiyMT1MJWPCN5qeRChWhAwKbhbkbtbAiL5Bmts66rUJ4Ve2HFiaAWDJsRG",
  "key33": "53ukJawr57TQSbnW2BEj93WHC4Jpx8Xp5dLaT4t1AT4YwsN541hKrhj1TDKYxXPkQE3vkEXekX2c6rcrWBeB4Dcc",
  "key34": "27o2cDutBWGSgQmSsj6C8ZYz4Ea3PZcMYghEyBCXkFfqa5Qfi7T7yy1xxp7H2sxRV1MqjiNemwcionjzkL8eYon9",
  "key35": "38WEo25XKoz8qdpD3MSBPzkQSghRDkqRvYqnWdNzUb2hb8YxAQdvgwpsEQgjraGvodcmBqstRiuiCfv9jzY1Gxfs",
  "key36": "4z3dRKZakdspgZWaWKckqD3jVrs8z6JfZSpKHQtnwuM6BApCgaZtjFc4JPXjmRH9wcCqfsstp4FjjXCCdmdbHsMD",
  "key37": "Hsv9evEtogQYprBkq5UcqCQjF3Cpj3Zy1a3vqWEFM3JYHbnqRF7HzdpR9zhP92nEhsLEJNQ2WV8ByBKX8BU9apM",
  "key38": "38pC5HC7wjDUwsSC8XjMGTFynWWzTtwMNCfPU83ZNc6nLb2Bo7MtnB7nkmh3HpwLmS8cEivNJSnGcMz7RQvVu97u"
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
