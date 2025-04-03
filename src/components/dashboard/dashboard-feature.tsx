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
    "2srB7BzFCB9Mc8fgRvccspBS5HJv9dKFuyKQMhzeCer4MBJYDBiv48SHQ3JbvXRK7bRGhtJYZ3Aw9Mfw4UrqaJ4Y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3crgZBT4smwYcab9LTx7kXqsebs1DABQZ88vgBUMk49xVNkYkK7o9Gbx5ubv5VF4HmnSYxMkTniF3UHC2tKfwkcq",
  "key1": "67HBZjNcXhJm5iCy1fbEb4Ds12SDqFTTJJcCLQBnd81s4GSZ7mwzX6N2N38Q6rsmZXTqN3VaLSULJVo2o21SYxmH",
  "key2": "3Hkiobopnrxa9XpS5n6HJ1iNgSvQnqhrV3QiDBiKCpyjea4pbDzXqw5X2tp7egidic3kmEK1hRxWbxAhAoaQKhfM",
  "key3": "3meATKgkD87GsfHtTAWY5MA8F7TFRtKovsRLr7WyJvLJkLc9rrLhhWahAGFF9PrajTxdWcvALGGqaLm353S1Gm8j",
  "key4": "5qZvFpwsm4ZcCWnuEj7fzA9hpghi7oFnUbFkQUtK8fqZiwMLajJr7hyAsFYyRttyj9VXNpA3KwzxKBCne4gWWryi",
  "key5": "qJrqngpqqi8r3h3cgNzm3cQ1BecnDDBcSDf7dSCcbVEFCvDf9BfhBJG4Byvyprf6MiGcztE7vNKYqCpbcCnrMDF",
  "key6": "41bkyJWhGPcZWGqW6S3S28xhmxokKeAKnNMUkHwXpCRsRqtGigGSYKAZbA4fmPkgLni9QM6aRK5vqkx5hqHFt2rc",
  "key7": "5ww5UFp5SgSWUGJii56qGuXWVKdmitSFaTeJhjar8Qm1CtDdt6NDmRAq64DMAT4beR6JujXzJaXr3fDJkHX6GHKg",
  "key8": "4vQQycRL7yjx6oY6YjfhRupsttT51cWK4M2QS8arC4jMGbnHuQGudg5CTxmSNPsdCF2SZ5ssjeCkZ8UbHpaPU4p8",
  "key9": "3BnbdUwn2zCwCXc8bjBNv6VqQF2xB3zf8CH2eDCgMjxxrHudAVUfYW5D1NzamVCqDJNAyfAJndX25F8XSHc3LCf7",
  "key10": "5Li7kjGto8U8N4CxhwTXbfDWFU3TvhhD4dsNdtL43TfUXU5o5K6qpUCiKYiJNVUAm5qLp5bUA83HXmtkgqG7JhEq",
  "key11": "5gvb1F3NXUezDTQm4xnaECE3jBVcPH89345pk5yXCWR8HD6WtXJAZw5ZKYNAJTREH4zkRKs2YHxXevgqv9rVuQGj",
  "key12": "eahT2LCH8LaDqrLKvJ2qVY9DRWcDW5NvJoAxWs1ZCw34bchQuziTRoU2D4K8xqV8WsoMXh7q27g2yoNZT4pGAtp",
  "key13": "57wn9Q4eV9MipWxs3tsgE5JsDRGZ4zPWfHSzTuSr7sxMvJQmFH1oE8kRc1fu1Bw3UC6vuuAGF2pz3mmRbck6NwqQ",
  "key14": "5azK7mtcsfXEoeSAj6aEfmtejcj5iPgJK529cF4AM3xg42VEUYEJp9dsjJ2jzpcqojaqy3hHS9zVSMtdeJ5sMrTY",
  "key15": "47UgBZ2bi48iucwumCP8pt7NYtArRjLx5HiDJKYY1z8qvA5DgyyFis9JvuWv5b56QkFFmVNp3kz9FBZAHoyHtRSt",
  "key16": "5LRDbbR4uLPYBB5VQNBrkFKaEy8s152TJ7Uq5zfSgPn2sqvHMZasrQMvv8gpuNz4KKmnMXF4SXhyi6j5UVm2zSfc",
  "key17": "5ZoPgyrCa1DfUGnRM88phchCSgtNUijouYbRBUqjgbRngP4E88hm5WwBmo6LGQbrdXMLTzia4ixXs2f5ceajUD44",
  "key18": "4i3vv8VrKJYBQEN8kLcwMPpMwBh2o2CHt6tGM8ioghW84m41zkyvRxE5NY1jQq8m7xsC9V64AKGnAoGcQsmmp3RW",
  "key19": "cTq7kZYxLZacYMMSP96MncQekqUQzdWDd31TfWdWW2YHjsngDFs7xkDrLw8ApWHJXUXCpUxrfyPjexRgMf9USD1",
  "key20": "3A71DvxyzS7tpGGxcXarxqoULx51MqmaKtGn5MeLf7743LhZrVZQgBrNbLPPCaB3ZbcMZ6fQ6qm9bTvP8ZZWDwcR",
  "key21": "4WSBPeG8xJwGM2USAxWdpapCeD2np7dBaaAByr9QkNSxGKqkYHhBa3vipPoDucSUnSyHWbFN6pNz8Anhpimy79PN",
  "key22": "53ipKJA5jM5xpthBMFg5DXdwafocXsJzZWgh9LAhxGad1Q2GTf4VCsXmXEkAjPkZqP1HzMjnKwQQoGbJpngtBFYf",
  "key23": "2xQPVZMcC2xfiK26ik38WjbiBRV3KXiWg1KSMPv8t4He4etqNH3jJXXUToKq26SiHbpwMnTJEzFEvpi4PfJJtCAZ",
  "key24": "3CrXvyWHkPn1zLrvP8dp6XqYxcvm32ztMnQRxsvP1mEDR8R2r9PY8Mnn8vr81GYX3J6JLxzzyHgPsRgrrxyshCqb",
  "key25": "vTsEFnR9UhPXHnxDGXg4DJRoe1N11skSCJnvM8oQMDoouXupQWsBMMPLy7cBPmjby7H7HswQsc37Fnmsm56N75o",
  "key26": "2NcPWEMYAUA3oHWnvufxpm7UYkEZDFN3t17y3ZkToka5oNa1gZV4eB1L4CJZqPYZtmdRCANuvpFne157MrxnDTNj",
  "key27": "2EYmDX313QfUYQeriG5Fc1PRW6NySckGuaZh2pn2PrSR9U1dVap7iMfN1pLL2Q1pGKbPri8EGx2u2wA1JLq6SvmZ",
  "key28": "jhh4Er8aPJ2cfWAXZ8UrmyNKhM5x2CYMuLLi3Qiz8q9DXP9q5JC1DHtz4srb87nPjJcSbouKFbpn1ThNfX8Pxzp",
  "key29": "36awUbjv89c31YKWWhHF5dghBhQX8XgHcZWfffjK2YZJKPGnZ1Xv2E6WBLPoggJ6h7hpfebm3JaKogGyfdC5G7N3",
  "key30": "2vRzM2EB8Hak9CRcxnyjb5AkhK65E3Q2tnX5SJ2dP3Kkf5XG7RS6RqF7pE8vYLf3AFVeTrmwoi1dqd4MqanTzC8W",
  "key31": "5Wg35YXu9UTEMjcWbAwqz8FXaY7hYHVcG9vwfBp3vLB6mtTrYg3nyqJUvXKSBreF4EWvdH4hu8PcTmvak2dfdewz",
  "key32": "38VcUq2wKiFkDuqEvM6LJzkPUuZW5Ur2ihCfACWz8kGMQF21SZNP5JZeZ31ow4uUYoHhtD1aiHtJRuzdFhpYjFCY",
  "key33": "6rzAXDnsXevJY3nnNgX47qsDPoNwomzRHP87TBm42s3LfSHFWH4eJ9pYGQdkW3yoYbFHQcU3nUGKhVnDn1bQZjP",
  "key34": "RafA98LmLheM5ETZ2eiTQYHxRskYArgL9WpiV5mAJE9FuZBbtzcEunEx7Dok8fzcN35k4MNSRExmDQJDxk4rWUk",
  "key35": "5bt7xfmvn1b1q8UzB8GGkxWdvaMD1tikop1aBB8ovuV5gCqGuiM2GuenQneF9Ko5mMpheXLFz8a9AjsuH5qH2eAN",
  "key36": "5kxUxvFy9wGft3yNTy3LLTEhkdikEjTr4Me29KVHT9wjGz1BRhgEf5UL65SJd8otMkTySqJV2ARtwyQ4APDR5vnG",
  "key37": "37uN38JXGEFSkLQ5ATFXUskWHRufoxZYgUccfMpGGf5ueWwuHy4JmiHPtgmcJK91CTDewsBCyzQntvE5t8cn2B9E",
  "key38": "3muV6P3tMctts24Ers1yKo2S5nHSrPcSEzUhfEVzHUvHm8Zg4CB6eZ9nW2bPAQ3Wd2HJNZai17zNN622wCVswFgL",
  "key39": "58sEGcoRULFiCLHwJzBLwq8mcPjKUoJawp6EovZtpjHxHcDoGtFFGVQs4EM6EnHDjxrXvMtpHdV6CoWKBtybBWxF",
  "key40": "2ioL7YLs1JKeLeXCBgFQcZV7UkkVSCQbBTrg5AsvhbqFejbCcQ7Bcicjt66NPHfLERPwApD5NWxow2W1NhhWBu7j",
  "key41": "3gsXb2e5NvFghY5KoxpeM7vMXrYCR1PRLQ25efZkxXoPJu6MZmjwP9XJPZCk7gNiCxEnCyN977yr7SdjPd5gPffm",
  "key42": "2YVkozj7z5xzvSaUD8A15ViNrPsgWMh5WynFK4iKo5deKW75uAa6EgEkNxZpFrxYCBBWS4LoYxkoSvo5XzGidW9W",
  "key43": "2i9LymipJsRMhx69euChtLmX393PSzZy9wuhmUJkhyQ4MFde8ru5dHG7aFaC3Y4AbH8NWZhiSHEwh6DTyVJdc9ij",
  "key44": "3T9T5xcpiZKqeVrUVuhTiUR7f9qwVhnEsaYmppyAuECH5pkBDigtvPP3FwrMxgEp86U8UXTq2NvvBfok5J2FJPhD",
  "key45": "2gh2X4vgG5b44Wox6DJBgq7aYHKEgRbPJbdCxanrV3q9AWWjwHx2SQZbMiUr8FFJNsiPEQKuDr7MmWCc1QZ34mKE",
  "key46": "53GmZN36SMHU2gdLwaVH4GWcXFx3UchRfY7t2RRMUNkTBS7beh1bK3aZP7DeS6n5PEaVkWyHVrP5NVUKYmLsxbTq"
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
