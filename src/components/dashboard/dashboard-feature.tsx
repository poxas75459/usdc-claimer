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
    "yStYJ4LdjPSfCARpRDSNq7UL667p6sCkKwbKkww957dYXUBetxnd7uP5yviw7y1bLxLRNaEkCDG4AoahjrHEUwj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5gtzueCMCpuozhs4nnLkupWJrnVL3F7wRxrFhBp4CidEarfsHdGx5R3GqeWKupFfZKefR96pUv2VbzwTTisuafR6",
  "key1": "33s2a7vn7igidM3GU5fZsXeoFReadDxAiP6g2EoXQX133ab63nEwvMtXetafFQwJdUSb4eBnVFUQ7NcC7587j8Ka",
  "key2": "2VfuFQFDFZhhAXHXPXYUtndmSFYKN8MNePqQbYVaGi1MzKZqkSrDC4fhFwD3SPKyozhoHtLHTTP8xRJY2gBbhpLz",
  "key3": "5DXDqG3KHBQMJdVqo24vcH5xWHv1fBgERje9Y2cCUfJGFabgUArgoFgLZG4rL62noN1vqJSC1vxDLWtQZoWU4RVW",
  "key4": "3r61C2w18Rt9oeYASLdRLVF28vhBvpR4EizNJShhpkG3h4yVbe3MdQzQ7aTM38sLQu4HqmNaTR3cvqnqk1UNdj1a",
  "key5": "qxSYCHbmDSpGh6WA7DzmLQsgckzZBhejiMuyYcYWext9ohaVdTQ9CX5XkEDPF2w358LdHVDzsSEkAaK8H27Kzoh",
  "key6": "3MMtY4uRivE7PTwqStXRSo7hBMsL7AzoZfBYvGewAdUeYEK7MaBtNhXymFjFC3RUrkie7nPGs7Zy4MEoA2TTMBC2",
  "key7": "5ctTmSAznwWMBtkNFiYJVB8TFD3M5tkmL5AYX1T1P3Rssgw9mfwBY3y6M1Ljd9dMqsgYmwfvr9K9Yuby1y5x2TGb",
  "key8": "52xwXjAmDz1PubDrAxAoHcKhPzxpZhgsmY9qvRAf6U2FdsgCDuRoR7yycxMmrG681AfAkT7WsPG4taHg1Qu2TF3B",
  "key9": "3FLeVwXv7tghEsk3CaFTHGmaW6UzT68hK9JqMJKYNAEm7QfHcn8yY4qhfZ29fMezVsGrEsiS5f3r8SuQh9JX73WF",
  "key10": "5FUM4gfifHkXAnZefJb92HRjWm1Q935Xvk7ZtD23x2Djm3x8e4zzf8T9WzQgNUH4erMt3HBMKokKo8812RGqXnQa",
  "key11": "xF4bCVrPtLpr5rifnLU1zXcFKooXJTnt29ZKm4qxiN7qrDzaPpCdDuVEkzVAszLvazeb11Y8FKUtFCkAWwuYXPB",
  "key12": "4eBksoxQdmjSS2FgQ1cBpZ3WwiDg4eWSELVLTPanx6SvHzEC8gZN4yAJkWGrS7ncSB1qjSyQ7wWFJXW9vannkPjW",
  "key13": "5KUn5oTU9T7Djxfq2VFf5iGQfo9c1fmmeWSi8DVeodnDqyKyR8kt8T3GvNQDsnCnXQcz6SvqCvLSNiajMfwPELQ6",
  "key14": "56YfQxjKFde5kvhdvMSg4e7z122ES4Mgnz6UzovgpeKyZcdoafEDNkQGk9wbHd9RXBj6DfoJaTts6s3b5e8D6Qmg",
  "key15": "345gyYCWbfw8kLhSuPH4fTpyF8Gg6Hx2aaJtAFrJ8qn7iit4KRtXDeq6CTWakjC6kXTuJNYFkmkuQdd2xgqvobMe",
  "key16": "Do9fX4bg2oDJdpVnzXfxkiYuiMa9UVc2WSRZwAuETPym4FtFBmg8MuHChd3UabdgDCD7H1QJZLjik3hC6ewnNuM",
  "key17": "2QavdQwvqNCU5tB22REmL3FTZ3FY7Ujc1PzZu7r96dcvXCezRXu8MRBHgu6X1UDvNgGt57WUneSALireh3wk2VpL",
  "key18": "23FGimo8yw3HYok3j1bskmaM2dPYmgQmQr1Yo7UCXT2d4PJZN88ChaSFJvfjHKQGofzWEspwToTCiyxny3i8jdQM",
  "key19": "wkEdcD9eVrztwme7DauGBn9hFWwYSbG8j91p9ECxExqSaQS6K2KnsbGtWQCeC41qo4osHq8uqDtRb3n1BfkRRUL",
  "key20": "2bLs2ohAUc46CmvrbNGX7vLKh1uDTLx46W2ZT7cmye1ywFNy57fc1jdwqtPaQJRRHRVWkfgMvCyFbRQaEL5WXTBC",
  "key21": "2nmsq6qHMuev8MmjicMEpmanWagQhJ9gkzCBpuUnxRizZdxriaHAHDq3o6USK9GGRnUm9vt2g5cCQNXBjz8F7iyW",
  "key22": "3BAqguA78id4SLk3uVQ7UB3s1rpPA7eVZ4Lr8mnHKZgVdk3X9Y5qtZVd3Dpu5BKgHPrUMWbT6ntaosFfzBUUM1Yy",
  "key23": "mgebMaMGqJ9eL6WAsu8Z3AyaR4Vq7LsX5Pb9jnm44EdmSmJwbL8ZKnWguZuSDxkJCVMLbwDDh8SdHNZpFq9E8jz",
  "key24": "4YcqP8Apz5jsocSx8VEQV1AmNaKse1pyti5fyh5vd9fUPfwmJL7jCSim3mHTQ1LqhVSQSStXFyjGemRzWZ4XeitQ",
  "key25": "525B7M1F72DgNxnzJ78piaJhhEuEbmLXQjc1sqBvCrSUSV7BgZ4SAVhdbxyVjCaNMUGCv5TUP7Uas6kxTVpr9X6T",
  "key26": "YmvDii8NzHfxDpCck33jF5vJdFTUYEweanTDe4ABEjqDzF99A7rM5NFyLpikZcFbgof7Aduxtt5EfuXL5XSA1V6",
  "key27": "554iLkrRnK3VVyhtzuRDQnNY8g9673kV19QBQGwiZ5e5YmGi6wz37ze2eT58kYwejQH39P6w1XjXH1AXHc5QTVLj",
  "key28": "5qYCDJTJ1RHZKDhouY7bQsmdfNfpR7DeB9Ph45Cwe7RDjURrjFPmjipLDwFvUxP1tus1rJnYJ6A2xzuRJGDE5Rvo",
  "key29": "2rLzVHHzBAuh4rXEckbyqtsxYoMGogK5QYA8i8MexSCdyTdZ2qhuxFSjv5vd7G1t6DEafAmhB3m4D8uTusaFjn2P",
  "key30": "3YF4BhuSrJ1Zy5LgjCZp37XZJ4tp15i4WKyBXrxvq8Kkizu7ZaHAfqG6bF6zs4gcSaxtcEW6aANzMXbUaVMQtqZ",
  "key31": "247LnN8FUZjbcdN5ExwKY1cNDkMn9kBpLrrhn41owK1zidNftiR3UL64xjDVSCEUHFzhNRdfomGBFEcYJLnhAD75",
  "key32": "5Qm9tEhxekaBfq4dD7bZMti5VJtV41Ht8Pn5pemQh5rfZsGmSm48L4ZbhtBdQz3H2LmmzNMd9YaTW6keQZUGXPWB",
  "key33": "4Tm7juUhvNB9Bpjq7ZVi8o1ceZsNEjDKfYiUBT3Z4CPPfunfPZmLsE3vhcgrAE8H4QpDxQtNjJWV3MApAyesgXnN",
  "key34": "24cmGiz4rSzm26AnFSeLPACSJHLmyugjiJuybbBV1m6vwZaW1Mv19RBr9NautFX9jVBwbczmvpSL9eUDAASxt3TE",
  "key35": "4jTTxsWHK1niiWfb2C3T3bHfSC14Nh8R7CXTNrGZckXWRnr959q2ZM5PszCtDK7FGtQX2zCmf6Z3WGXBEejCo1n9",
  "key36": "4cA1BHY6BtCcE65fiXUK6Y7qYP56VT5PaeKGYarvt5ftKbUx9CKizgtvrXPRuAdeaEkS1EcqrSTz6AP5fo5AnaR3",
  "key37": "3JXAcoD6dH7RMjoGoRFprZ5vwRpBgMcmPz6sY3MNmsyrb14aZYL4HPcmmHE94W32Wae74Y1FvDhHifBgy6MMJBBQ",
  "key38": "39LKRaZiTaSnZAsEnQYEGUfvXCgDzBXSfKG5p4AaKfa1DfoFzKwtmp1A6oRmewLhvBPZdvNJELaR9BDjJEA2NHJ2",
  "key39": "Vk4k34vJP91FHgDpXimveS1ar74CEnrPULXC9xGxkWTX23tHyN12tcNRzTpXZMxKLQ3tbqe4yPhbYMJYtWuNgat",
  "key40": "2fDpFust9LDXh1VAB5H88jhAU92a3etDgMiWWbkqJ9obkmDnq4mXaxDvf6xYVZL6RVK4uKPCKGPH4w9xejx2DJYD",
  "key41": "33BdxoMLyvcMhL4b23oTxy7ouMhRSPEjEs6K47QrewVsc6rMkVCiasZHpTjNNt4f67V4BpXqQ3GPtSkvdcimyGWT",
  "key42": "3rB8SFgmVnB13KjeHEHa32hzk45uXaD4WemcfcSqQeQrP7KpxTQspkDpFUoPCMaXQ7ype8RGHwxYhcsuefUdejB4",
  "key43": "3Cxtbhfopu5QLTJrVoEFA4GnoFACnpQVRsFDKcGx7psxQD85QoEVzVCrsBrccrvvm8AaDgrMp3bTtb8E1yW673QW",
  "key44": "3THEr89q7VP9QXjxrjTrEXFEWXWwuiUVVsEj7j5izBvhdRSiY5pe2BMoH3MYWavxhUfUiEDWRp6U2VLEuzRhxBYm",
  "key45": "27rwDPZPQCQ4S8MBX9WK9kKrFz9UUP92gZaRpNxgd8jAv2xc5C9UcWnPi9WjAfWjKAbreYBoBVVqavKbaqgEMDQe",
  "key46": "2MLxYGKDnL8LUcANFduQAg3wzHXzRPc3EmYQG9NBtYQ9M782UnvycuqZbviRUttQuXi1dE7yhxVQi7Ni1B4c1P1U"
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
