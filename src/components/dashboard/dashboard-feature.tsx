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
    "SigMZruRnHoifKnxLVZeeTwdBYuJnkUEomPsDhvDt7vgFE4jv2DshY6f2LTCjKSmq7VspLkDd8w5ehEpvf8xmLU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "MYpT7hBtgffvuMhegMvfkfBho4VCUxqUdFX3h5kJmnJoqNqcUCrchnEGUWTKPDnJQ5ZQKSGaKyq5kPSZdn8RjQK",
  "key1": "5C2SAzcYvgZ3Vf7xg6AH4bwJwGokBNcWkaqWXoqyPEFPigj5Fgfqvi6NWqvgnyVyvFHjF786T2hqBeqccbc54Kzy",
  "key2": "22Q2HLmS5Gf5uz9yuXc8NKY69ksLCUa3Z22Qqv4ZpYtBkCYgCjMNfKoqmbEDgZ8MpMNWEwp8TUo3D2Ko52DRqZJW",
  "key3": "5ipaabztZEERkG1ebTcYbkkGT29n4Y3P8mv1VAL1FrwJhv3k3MMfc7mr5X9PpjqMEQvrnwf3oqHCBMfNRdmAc5Q5",
  "key4": "hBTLLDeqYTevXt53RjFZ6RfyArnFF8UAV8AqW9nCpiHzW5iXTWgeUCowTgjCA1CsgPzW6exv6SRZ1U4QbusBZp4",
  "key5": "5hQj5gCxcSCnXezdSr7HPG6Nxe9vS1aWNvMfkNAEgPH1LNdkB3uAMtNBBChH4YAvrEjCqfgV8tFJdKwJkdpbNhUc",
  "key6": "39qqsWqU28Ez1kuUwTijN84ErYnttb2A7x8ogVruPJTasnjFDRByt3gbGpVHLwqWvG8fbZ7PtXX5RYbxtRgHD71U",
  "key7": "2bU8LPdSKgmoH4CmLPZsgHVJ7k3jzKqJRJUCkYwAXzgxuuE4FQaU5CBX6WqVYjxQAEizrnE31pB8HyT8NbAMZJus",
  "key8": "TBmJ5KVqRgXiGKQrC1kEzUks1kTos6wWa9c2GtoVGTSUvS6FV5JfrSgrQqa3tMRbktm1wNAUXMUWsJGJXMfPkoV",
  "key9": "43Qz25rWCU6QGcd42cZs2wK3s1wjLvJEjtXj1hAhbskgcFk1bCEPZ7nN4BGb17UpYgzW76F8RXKeYXqJPNSW3Fv6",
  "key10": "3GN195vE2jsHtsvWMCr8By3eRRek6Bp5WCzV93mm3ZkgCNwUk8CWaqPSDBkgeSDJw4bKe4QqGeonVaPi9Y64JH2y",
  "key11": "5QWD74pgUDRZfYvZX8VK9uGK8YpqBcfivfjQE9RRq1gnr6G5miujrJFr47yfs3J7b635JXXV52GqXMc4kMQc7Taw",
  "key12": "WKjBRNyDTuZRWe7drEzTCgkH8ZHsyC23D4RGf7muT1ApcgR8CdmQ6A878sbK9PE9HDNiDUnTVgLQtTFQR6UyPen",
  "key13": "5JLgk8Z52qTN7vGxTp8vdgpX1rdFiqtq1xwGkJfYYjKDxX1TbRzYqHZ3ysGLeacwXd2TqFSMMDvXAe1QNneL4azD",
  "key14": "62fzAZEnTwCGKqkgh95NX3sdWk466V2RF7nrs588wrsdbFCTc4vtNrhXQFnPMHxbfrYoqRMDrh6MiFcddwmx1Tbm",
  "key15": "2GQAEhSChd84VtbLNJwYyoqMUNh5FETVHsCSaG6qPqEVBFAAjKtmR2FmxpcVdb3aCBXFMe1tgX7YiP2x3YZBnwiG",
  "key16": "3veMRofwj7Gw3CWg6BaJqc9AKQmuNGTQZpRbpz1LENtSuQDhF6nYRsN2crSEktfV2SVKdR1p9zBjAZsRnwKX2Zke",
  "key17": "2i4fKEsxHZVBT1VSv6kzFmeqPRgqdu6LynVbppuXuU4CVtizpdXju94erxrMhvVtTWiKzfuH61n7qMg1i2n4HK9e",
  "key18": "uUqpwx2XnqSkwDQjwnAG8xCdUFHTW6TzSbQfp6SkAxrw5YB2VDM5omYCXkC6ZaCSppsyPKRFnksTCZ9qpubmWTW",
  "key19": "5kE5pjppft6YnqNszpsiR9E3XXg62pKNCCgHSe8YvWB7tjksF9Xt7uPEnpJSb6KSCW9Ede2v7FDVmZbPebwgztUR",
  "key20": "2yWgwGED1gWkRgeat98hhbiAVeD6THkhmkfnCauroVhEdaZ9QGgu5cqsdk54eA6q6YHwptg3sHYzDwdhHabtEi16",
  "key21": "3NYQoxxNVNVAvnGVMUujJeJ9ktBbQ2Jp384RSZpN6LsGXsAm44vCWUCxHKyjkAmrxfjXLKer2JDeVSJrtNmW3rRM",
  "key22": "4aAdk4MEkdA1BA6qY9PDkoMw1nY78uuUrXznZE9Yzvb8qxX8kaTqrSH7324Np6NpG3CsEPfuyv8pHACBSc9xYbr2",
  "key23": "37e1td9qygi2WEVcq95LNATUvDSX3H1Ci8KTZ3Zs64uHJVK61rtvcfy5jnuD7ZVJozSNqrzms7wjr5U77fNs7neJ",
  "key24": "4nxhPQpjQFuXSaZ9QeTZPkskTU285rhppPteD2BHd1a1C5MRUqgQLJdaxWBJBfEbnjGcjV4unyQd8KrcrFcF18Cr",
  "key25": "5f71Cp1zTjdqxuorfaMExU7JTJNwtsNA2vQVLkgmVYkcJvh5x4LK8zHhPXLxavb6yBXL1Jsz4CENT5URmGRNxvSV",
  "key26": "46pzz9K5bPEmoiBbhi7kDQ3poUPV7kNZ2yoMo2MLTMnAeXnRFYJ9bJgcD9uuLEyMdD4WxKUW7DvAjboPJSdcMxyP",
  "key27": "4Kqb2KcgH6owGMZqMsAqf7KZXFdiMvGEpbYWr18PEY1kqPyVDp85mJwuwkTvGA2BsTXj45aNm1wffpQXyaZbCmqF",
  "key28": "4JJA62DZgYPkAA18BCyqzCi2ZTyktjYQMmwfVSfw4CdJACvWnEYu5BZTb79s27ojv3Efe9YEmEYtpq1LpppWcJEu",
  "key29": "632GA2EDCtjPi3X71MtfcJhaQeGsgpa1dbpR4gzeAKiK3gHMYMuRCpxVF16PL3tCfzr4TLgMY9GxRDKasHPi2ErY",
  "key30": "241KWW4uEUPyRmZwaKcmvULfhyKZBVbTYQrDakvsY1QxHkRwLcKpDSjWWeK8sNtYeeves7qheNe5xpmyoYkQRTCb",
  "key31": "3ynbgN9kRAa74CM5TroUmuXvT6QGhHiq3jDenXEuTuRspzusoHdZCcUXiaujGn6ESV1HpAarmYTAbfPvrCsFt8HJ",
  "key32": "5mENCDcabHLH4QJVUoopkBGi2CHWSkLqeAjvX8g8eDCVhG7QmfriL9sL98PRsk9vLCW5BiTwfGk6x9nkyR4QjvtY",
  "key33": "3pg7r6GLfeJXyPVHnUSQHyuSpofVNZDD46JKeTUaJByJrp4HAd9ZkaDTv3teccRZKdcMKokh5sR2h2a9J148MrW3",
  "key34": "62sBFiVRDXf3wrgzFurbVui7aKmUSZkjkoFxA655skvtkt4zCejFQxZ2bqYYKMbqNXj3J8Hk3mBtKDggWxi7eXNu",
  "key35": "4AT1MyPNSttiJXfBXagXCBz1knftsbc9hBk1frpHyS6rWzQHV1yM3BKNmkRwbtBxztGGHZPYaWK15zN5K8r41WtU",
  "key36": "4DhS3geAsLaP2B5muKQaWmVDZdzQQEQ62zXDrGf1YFQ4HjGQhh5FCrefhZsnFVmDUS2QQqGp9SBL4D4VBsH5aLMu",
  "key37": "pX9AJLtC5J8UNtxNmgwFV6pMBNRwQifL7bTSBgDKdNWh2tw6rh2ptmKYQvh8XNMWFrUxkGgoGvvGmQXhrQqbfvj",
  "key38": "47zkJ4GAqCRZ5WDMZjdtDZbD8wJVJb97aD63FtmgMKt6JpShQyyTmaXpfgy7iFJVetdX3MQdx1vLMCVXHkfXyQF7",
  "key39": "27HLVLkDZnKUnLuSCZ3fYAmiiEZ9YV6jRLecT6Amq8j6qH8F5nTNoFS6TzhMuNM352UpaDtpTbGoFkyGB69tL2yv",
  "key40": "4x8MdK2gn47VT9jqQvZ7Lmgig7gMnsaiajAGFCiam4gYfziEoB3nZm9cE7ft55D687sn293YifLJgVtb3eFeAEL1",
  "key41": "3zKcTd3ptQcgnqFWKC36rWqVywTNffGBzrryCY2oDdXVneTGkXDbdzza2a73ZNxp8TTRjzhj8c146Pu2cGoJwnfj",
  "key42": "3RzCvJMDARSYCFybPqnxg28r5TagKpNN6QEgqr1TLN1aSSyb9SCFonPofoYwguP7YCLmFWt25rBn2LdMuYEDL1E2",
  "key43": "Kd7fwY1mqNTAc7q8YCKY8QcoeJ726RLJGnQBTY8NF3sriMi6C8bcmwtRn16GbaXSQDUb2Gsqukk2tBKUVP4KTZY",
  "key44": "488PTNtAYwW34Wr6fshKSejph1Fb9GwTWG7bGTiEn3KeVPPxnYSEGsHQpPhnoDPY2JRaNcnziRfUz27cmryQaL5r",
  "key45": "46nLR6pVjzJ5EYqcmPaSNTsREriENVHrFtPEQxmcpoLogvDSd3hUoBEc8JLHzHJSPhZKCyJtNFG3WjLzjyusGSvS"
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
