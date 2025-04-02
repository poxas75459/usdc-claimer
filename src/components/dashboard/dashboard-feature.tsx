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
    "3kBJ4Awhp45RKiYw1V8dqZfCCkbKH9BGNSQat1x5Fzp71vwYVt2mpUmF3WkC44hNXSLE6rrdxfK3JUTQjd2qELsM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4PBi3qz3CntEa92ku8cfNFwNdm5MHmecgTAgWEaLQJ8rAWBZ3RkZxsyAp9cnfcPWdE4voBtHnFJQA57SqEGB6SRm",
  "key1": "FfdhyVZqJBhysraCaMBoyqeVwnLAGZKSbL3LoyVKV5L1MQtvhLvTo5BQe8r1aHHEhXg5BaRox56qvDLWivDagdf",
  "key2": "26EJjygFrDq8CwE7bLwtyuL1DGXdetbUpELcNjDCu3pitnGhaouF5W7UoSCGhitYGM7fhFRELc5BHeJLUKUbwWkd",
  "key3": "Co6TXt4PRo1FhMPGBKRG5XnoFQbBkW7ibTXaWdcDVsTkoh8XbxtGBoCFJhbYkLnAsz2sXmC2ju2SoCJZhLXc5hr",
  "key4": "4d8kyHojj4q4h6MLpvKE3gMvgBzjL6LnCAcvxyS1rT5dqe5UDnYxqiuff65Nuk8PzzLeEojMSBBqbLS4ny2t5CU5",
  "key5": "4gCkyNiTtP56d5pAR919SEHg5KkMCkqJpXNGTFwCyMJnGK7nY8yYP1FF58zT5rEu7LyRCMBZ8Jq6pPP5wcHTiTDz",
  "key6": "3VvDT3gto4rYPdbN7hW4vxiMpngcoWCxHNAsrAwp8C8cVL44qvW7opWUWdofeaTRfpTGN7KMgfuNwmSNDMTp3F1X",
  "key7": "5T66HmQ3BgcGH4dfiDYcxWZRYEKLBYTejvfHes5LSskcPXiZPSa3EbngYSygbuZKRKpYR2Wf3JCc3MbFTZDbd1ea",
  "key8": "2ken7FxK2PdjwPSf9LfE1DrNCDpGmktgSsVP3dqLbkbnw8TsXqMxoJ3Pb4Q3ajGyYAuccc2Rv8sFTWiAauDm8VL3",
  "key9": "4x8TJwHBke6jYN9hKqqV6Bupxg9xtCnPZgnaDcHjoKs5GTehb2c6CCcZ11mVcDLxRCizG9uwiTbmFWcBofhmk49X",
  "key10": "34qY1iWoyw4TrgJMxrB74UUonkwsP3VLQw1Luyw7xncSk1L2gAoPa2uMJ3vCnqVHDWrW2iiR5k1axR9MCy6PrgZ8",
  "key11": "3NrVQ3x9AnKJVBam7uNTMGkP3tj3j6DmvrzyzdFaQq4TBaeTKHxifrbAzRpvij7HNEM41JALwZfbdeg2SvcQpwFw",
  "key12": "3E7cyZfVj4tHVuQkvEdTGhYtvgwrjmpARGc175TzQfHtS7gc93SsMLVorTAks1F5RdcoWtzzDqWN4ZNSLfxMiDRy",
  "key13": "3JfTCFtCod12UUbywpLrQgj2Gb1XfLzDzbxs9f2R1vPiDMpvui9dQgZTXiBPnqQd5Lru5jUyQfSryL4fqxufa57M",
  "key14": "5hcT3dn5jS3kQ3nhFeeRHG4Zky3ZPUeVXPmVBo6Zo91jyYxsLWpNV6Q8ttMYavbpXj1rNeViA3XB7yWhwhPRnZK6",
  "key15": "2oZ4ydDiV7BKEvL79ubCAASyd6a4KXvyph2tra5mpQ1Txg4v2ojF2MMrhfUuo8oNwjMFeGSSg2NJHQ3znrtLyHXn",
  "key16": "2xP1FbLyVL6zaAnuejSzhFFABKoYyFEQrQ8BRbXcbzcAMRf8HE4x1gVkBweFQTuc7As938mSZN7o2Nwg9QUoTzik",
  "key17": "4QMKud8rKK7VPm8dHtaSNdXqnQ7XZFTRACMbHxsJvoAcgijts75F5Jbcwwv3paKFXU4jjeG3AqBsrVRuSc5u3rSb",
  "key18": "4vGkMcfvYFuBFUdZqka3pQgoqcTJyY66dJ3b1YHWFggSbY8kBHm4wyrkx7Tm7aveeJd8Lc6yKJXhzoWu7wUqpScR",
  "key19": "5CaBXzyaSLVWnDHdLdFPsxSaRH3fxrhRjiUZf7EaJguJZjFt5b4p3NMkczUycxo2UaH1WY7FjUDdUUDUAVhFjd3h",
  "key20": "4Yq28TVtpJFPfdeB5StoSSwZ5qrc7FMYrd7TALmW4monScsCNgPkrKpLssDUYU9HBmCmzK4akNwz23SmK6WUTABs",
  "key21": "5LX2T8NE2h17SnSTXYnKDuQNCHeBnZ4YJonPAdYzPAixMgFVbvyCAoH9R4oxDSpMaPeSMHbAtZyZYCUZgJdQbvYa",
  "key22": "3kvsYzz1jP5usVNxafaPJP6Vu83KmMf6fmM6jLz2zpxEJEkNxoRYwHkdNAoefskNeLU8k7xPXaaH1EQvPWmZoRLx",
  "key23": "51CDKHhmRDguWUkze4nsCgr2zGaeeinYww16WG3TZruVRbxyskE6aWFnVwuz5miu4FeU8e51GrivkRiVa26TfErw",
  "key24": "XkcDdcBCFm7LxddZgVchv1UGP7jhoTEJvvHpi6RtjhpVqmRAd5f3Vx7HgujofAdp6hBTnUBxkjFe365KAmWjJv4",
  "key25": "yy3U5u3oa5PZDH5zZGP9bDJBhHhDy18FipwqchZAzrXYySi5S3wpNHGSSyJ5Zd69VvLmGsEbmyg8CbqacQifHBi",
  "key26": "GSykLq1fWzgmT9JEf7JK9D1zKJPghxPhFbSLNeeciP4nz3o5AdWbHJTboUQSbcoa5bceGipZckmdhqvHtEvMEyj",
  "key27": "2r6GVFxUCdDzJd8Bjzir37MHXLDaAZm2P3mFhYokHcjrx7t9Uf7rMsAvRxWqvJJacgGBLz9UoNN9Ane3Uijm7jnu",
  "key28": "myXfc5J2vanzkLD6T2ZSKjiWhW559uuCnMbAs1nnhZvUApX6Qp56sso1jwrYmiSPoSMNAYL2GYEkh6rtNLgTmjP",
  "key29": "5epeJAmN4wB9y7RdEv5ipXLk7vtionhWikuJcVzyShC9vXHnHG6CRRhQefCiPAziMz6woCRAsRrS7tZt5Nen1wtT",
  "key30": "4y2j5FEMGsKffpyBFKKGoaeWB7WdqYKBsjEDNqSr2RpN48Xpuas1e6BtLrqqXgVHieNfmeCYnJ7W7TRBvk6kf3g3",
  "key31": "4fCDLrZitgW9JJdWf4KjhyAUia14z4wVfspqnQ9ZLgvdXqeXAVQX57wHnvCgxC4YwYJZYNeaq63Gwsuoy69jy6Pb",
  "key32": "5h2i8Fvs1fyYKqBzUXF8GsZwqYNwUwsz7XCAq2augqUpEsZiTyrG3znfTFoj1sBEfpcyWXkY5UswJic6qjLJVRKW",
  "key33": "euAmE2Ex9sx5dxGFoYH8znoF8mu7pTGiYGDdn65BL2UtuzvQXsRXoMgcDCHMv9os9qAJTt4VNjyRK1oqoiDgysm",
  "key34": "449m4Ab5fwGGcMrBcHvpFF89eonukbBdQ516Pi26iMWgXRNqWqnFZQMAVhLADdpTXyXbyFCokCQjyoPuExFCsBhT",
  "key35": "2usUHe1Lph26FnLUBVRHR9aGNa3U5ZeFyUie871C6zbsiiro3M16ARVQSiLqWaTrX3RfqkFKX2ik3cqAj7H11YRd",
  "key36": "4X4Nuht9TUFk13Y9Q8hygBjzNF58bHLXKJYGAp3Gvf7mJyEVq8iMhW8zHLYxqNphDFWaBm2s11oz34XKgC4TNu7v",
  "key37": "2CoEaXgwYsimkr16FHTgFYjhvEAbujmNABmPMcH1y1LEWCvucE8CT6ew2mK6qHGMW3FNVr5L4Phj9BkHRTLnfHfX",
  "key38": "5dsRabvVcNbg94x2nvXyaavRjaYs9mHNkjs5t2tSCAsRGdbmzWMoCwo2awBzZMi6XGmtdhNgNZ8Z7ftMvGvUHHKS",
  "key39": "2x3GkvsG8BbJDamNZDknSpV6yJRvp4HCU7KJooMj8yt6hoaAjLjpLvvMTQSKq3DsiGZjHTNrmujN8nuoD7wwiv4p",
  "key40": "4gdQHnXj84mBLGNLyRPkP2V99tmmLsYsfk1RZKuTYmeCXX6mwcVZ2cqQvRdtp5nE3jp9nnRc2nihVELtQ7EsqCCr",
  "key41": "2U6jVxavdgmYrvtZZrRsYeVLJDMYhmu9bJd4pkpZvKvzPbpeUjEfy76kEV5NS9oHNYyuCNL5UR6danQsMrRdBepQ",
  "key42": "2QqdbG9aQ76ajYZTKi415zY7ifX6K1XausUYiPVexuE8K7T5a32g1Z8e68d2EESrCMiG9aVnBsTaMxPqaDcGh5Yi",
  "key43": "3to4KFBpAyf5sXhipvUnBE4gZJzPLSGurVZSyjHeoLbSFmz3dM5ifkhcjBCPdmAvsRWiY9ySNf4SJMJvZcKdk1xs",
  "key44": "3Gm4LXpKNExRuBzQvRPT15SFbCEf4nP5GSk7x8mznr51F2rHy3natRRLyvqcjVNPb4Bdp4ybQ4CRGMZMYHnqV3vY",
  "key45": "36VnSG9bsjVZ7XgDhX1rB1AQnwgKcTyHL2goFHUbmp9FAyG6ArzrDDDTXbGDY1TMa3WAwxQbqs452LpFStH2SyCM"
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
