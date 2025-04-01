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
    "2h2x85WzfSeDcGGbCPtfxAjCFZcyXSn8oJqK8qTCp8PLacgHg3vUDAv9PhBN55omn4gEzYo1UhsUnKPzy1xAR1aL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4VUcFgD1YTrnn7Ee8UFKUjNirEAQndqbY23c48Kq3WLBUZ9V3AU9ToD6xhYVMMd8RFMgb29j4J2LaQPqmofcWMM7",
  "key1": "3x7LyxgUityaNrfHatFyNNhnW7UhweKUuR8BaG2jq475tsrngc4vL1fhPijdektiWRkunThPPHXBzWfmFqZkN8Jf",
  "key2": "BAGfL3pM7uwYfPsKM3E9cD5ymiKLHXLK7yfauzzLPPDzsdJrTonQP3V5e5PVC5QsMiKCrtHsjeo91asW9Sq9ett",
  "key3": "2mRyuQUqGwBovS21vcGZaBkmSDapyz5cjwChCmdwZ3XsMYyvih4t7BwqHMwywfLQjV4nZGzezdNLCKtRAgaFLNY2",
  "key4": "5XZoKFH8AQvP5NdeJS3JXh6RMh6MWPSxLFcB9iV9BnNXoUiJGtnPGtaGcNG46dHdyCfjP8vcr816SWpLScKYi49S",
  "key5": "7J1w31eQwyHBJrXEtp19UF8ff5dwSpUHBYxaDE9nHc1KZUtTRMYFZJgqNB7fLDz6A5bKbxokBJwEhnqivPD7vRN",
  "key6": "3S4koTRMu9L4whT9yYGGDkwS57FHbBhXXnzt2M1ysTxeEcNC2dZnDtWbKHF5rkNwhyybNUWEApBjiPfuZh5TNoZp",
  "key7": "4cYKDf88WYFhr3CzpEgfmcGuxqGmpmfCDYrRXVUfC1pZjQwqwdSvTEMA4AERAy6FKyKzTCvVah1hETLicaxwDAJb",
  "key8": "L7HkjuaQujerK1hNxo2CjQBGvtFUT4jCgJcg8xSziJtC6uGum5Ri2UVhkcL6rgJps25tgU42mgrgSPBsHw87S96",
  "key9": "4nfX3MXSfedX7gR5NuLjkM5hvzUrU5pfdXWf89ga41jQRg49j26ZnHWRCPf3aP54TMkxqLfvoUht6YeBPPgjKW1P",
  "key10": "5hmPkQhJLzpoyFV1qBFaDYAkbAeStaSHAVPNxDzzmg3f1maMDoEbGkxAnWKx1Hm3Pk7JKX6LFExhDneCPB3usGz1",
  "key11": "4MDiNBHiHYAF7bSPHQ7Q6Nq5kVRh1t3CtyjykJcx8PUNyF5NTBS6rDydtHyuJoQAN1TnGXipnJmdkcZRue5m9tNv",
  "key12": "zzgAPNt8JX7LSVktjm47iLV8VQKbsW9uMPyiE5LS96gNqodw71EJwwEyfHeNMuVuE8huWtt2fgeegP5YYemWX7Z",
  "key13": "2ttqaQANLgUnb4pSCQ79dQnGUbouZN7dTgqgAESBRAcvtpCYd2YQGirL9Ni119m1Kjddqfh1315e1rKSvTKeX27E",
  "key14": "3ekP3EuBLksP4ejsSPkKGoHwy4isiFywi4LSHXQ8QPheHNygqZqYsp6a4YW8Tnp9zvhK2dVnGzfURenDiKRTkcwj",
  "key15": "2Nr1Ts9aWJqhfJirtDkCNNom2PMY5XRFV14kdae2H7hhqA9msMM2ZaZhyZEJmSLRyxZwxv7vwTGztmRP1Fs2st4b",
  "key16": "4BHkAf7JZ7zXMYjUxLzycNBAE9FbchJ6NdLVCg3GEZ8LghDXHnb7CqQhKr1KY4ZBqzJmwC44kJ93d1fH8NxYqYAf",
  "key17": "4c9KXxiZT17RHXnPbaLunkYfdm4qXVkq6RrjajfWhnLSwQeLBTD8SAn9vqx4hiNgMQPtBxyh6DVHd6cpaqaFZzpc",
  "key18": "zu2fxdDR3frN7XYUMwPpJK93h1JCiXTuGVCEBrQn2kHHZvroNxST8ksCdrR52ZS5XBXNKkbKxMt3dEixkk3FLfF",
  "key19": "3mc1Ur5hBk1LoGF2nSkuhqN1WeuKE7p8kx6dmGU1WppnCJ1yDswkAGYzCnc2nUd3j7M51FvMRijoWdia4jhN9QpA",
  "key20": "3AuNHd9yX1XcpWCSRZg18kPFh3vrQXFaC4eCBdiP2H2o8PpcwirxRvF4khjoAXWvAY7vv62gLojSuneSQMWboeLa",
  "key21": "4TXEpHdGqRXeYQx2i4irgAmWHS9wsN6YtMCrYqnmkMLSJEyUaAZu16c9jQrRP1D6VY5sodzrs18D31cer4NAAfZN",
  "key22": "5iXZ8PYZjP2A2g2fcqQw8RCiqBLTy3sR1dv4sf3DBqg5XdP3Q82C2pBrSmLoDpUnDgsAFZLcr8XfktGkrV9veDD2",
  "key23": "2i5oxfTaKjfhN1CsZnvPE8gySnf28u9hq4Sisty1E1gJhqnXvhTyiej36tmF23nStiaHY415LUBBynGSdN1Kq85j",
  "key24": "4CBCo64fbaxxxFGFrkE1Ri6YCMSMgcsG1spxtsC6PavCuex6X7j43XF5ibNocqRbGUJjtjfLS3UQEjapwMbMDEC2",
  "key25": "2PZC9oZKavp2KFLUtG9eU88Cw9dtQjBYKRt5TqiktmGcS2yhZXKu7946NP4bJV61ME9A8h91G1mg7PYJSKXSLcrG",
  "key26": "4fKftZRPmCPUJzJXNz2Y7yZmKRY6ks6NZ56cUZM8bucLeF9DBJxTfhwiqnjUZcSGSz28e5ZNCq4RDZfGaWpyyNNS",
  "key27": "5UupzMtGT3eQ6ok3hZ5hjFKhbTg55gze96Rid1XazrKsQorZRu1o1CLs5nHc2mstPT65L7jwsy5McWkcU2hUqxJv",
  "key28": "5cKCYnF9bwEhjMkSByVNSgoUMa5Fseqkd3QTxAP6XYHdAqhLEbphXY3wb1JVC51QCW5qqDvL4yL8KSoUZTDT3s1x",
  "key29": "4v6fY8e9H8c9KgG6fzkZdyYEGTp6FDdFJt5cDriQfm27PtmhWeFFa8jVHrKViZc8DwnHgfAnMSxNu55t6tJWBD7T",
  "key30": "4BdhYCwV9z1ixFsG7xgqiSKAvXtbJbDvqxzMpJcRSiizhaM6ugK744QBDYJ3H87SS1xzHRZnYEoqEe7zKcMn5qvY",
  "key31": "cnTDHNfZMhoWnJRovz5yBUWiVJMfVUMR2BG21yER9pScZfRNTt6QECxnS29FvAFjQvHJkfpeC6D4a3Uo8RppBwo",
  "key32": "5HfjuvbLwVx5FzBfdkp6pmaGxGqA7XaXPoCoYoc5ev8LDvDTsUW2mPaCZQgZc5F6fW5nuV7TLdRjkJJar49N6hsQ",
  "key33": "3opa5YQF2XnMUZRSbrDokEdKjG2V6f8JMuCSb1NBEkmuPipdnNPyY2wcd4FWt7n5QaJGoWbezinrtBtpavHyz9xd",
  "key34": "3rxypBdvAS3efvz8GQvgEeSiSa5uASaWm77wtcAPp4nN6csFmtEVtRtzNxAtvwcMQbjDRX2jeoKNTx1bhmeNzqEp",
  "key35": "qUJSxfTF74yUBvZFvNDGsJd6oJs1BNQwijVpEP9KzrD32AUSVZwHxzcDzLLVVxBiv3CLCHiFAshPwXynHmJLD3d",
  "key36": "57psbHkDB8r3VfpUVgE95msBJ7taaRcG5ZqH4oc8WPJ6FeUoNQxrFEcvUr7kEi2YsEHwc9TtMcdQNiTHexSG1rEB",
  "key37": "3EaNVHSkR3uCYyhcTXYrTgqN6FszozGB7r4H4wT2CNgqAULrwYBzyj684HejRJ55rjwfBiMNeV4nfBHFjycp2Ytm",
  "key38": "3oRYzZueD43ndM1sDSpF3GkxYCQbPwTNujFZuv1xJCRTUU1riBuDeznJqPyDQhuVGkrqC4v1hmxuUuRFuDBB1FUb",
  "key39": "xqU7cDqTyYq2pJf5w9v7ghDbpBopq6Be9eR5dUPtSojkiJnABMBcFtKttmeCYXG6cDGjCsdmuL1mwqNVmjn97T2",
  "key40": "62bBmxDLZHyZJrPjFXfR6hYphxz4AWJQMBbcvumXzGQ342jfyM2G4GCBGUv3Auq5NeXVGfxqHQ7jcNCUTDBjeUs5",
  "key41": "32sLN2pLjmprJ8aGpXA7UFNsNs6k79M6brsQauPE7Yy3StSSiQLR6oAhJYKxHNYWCr6Ai6YqxBz16mtpZ5o8NpTf",
  "key42": "4HJTy3jMb29GLHsQYKoa3NvtGUrdaH8ZzftkDCqFyR9pzXdzg5c6XULQfNrTGCRXVS98XL544md4PBWEr1kUa56q",
  "key43": "2c8Bzz5MUdUCDER7o7NMbYWfwxpFCQ2diHGg87ySRcPhkjkZA1mPGGTjLQzXbBj6eERZwCZbEuXKVTHNPvWC3iYd",
  "key44": "yQV44taaBGf1i7Cx4nUAJAc479KwhjckEMjjNNMYJf4bNNBzugeN8PLRZkpQfQcjxMUAYpMYEXUfZaBbB5sL9fC",
  "key45": "2kffnyVzcvz3sw6ESU2v54SCNW3qveh52mpF9hvDp6KHqTKiggebiXZxPhw8yY3n3x38CdmfhsZMCr9oLoUF3LEf",
  "key46": "4ftPGv44Rzu7ZGtgpoBGA2AVeB7eHT47p9MThbLVULkfuv92t9AX17KwMrdEGEuSchmb6b3VykhMwnYA5qNStFF8"
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
