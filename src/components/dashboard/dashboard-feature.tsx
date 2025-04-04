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
    "636RzYyohWnJgKDbXNriADjye5Y2yfCmzKNtBRWGYLs3LB9NtAd3bJhcn3VDT7Q2fJwztpXnT8TZtxi4uY2zUmpe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "CqqMRpGENeacTqdkgjnLDt8Sq9iFDckeWH9E8DubPBk2TF8JioGyVqpJskhWurQR2DrLiAmDHn8rj6HuZ4R7SCk",
  "key1": "4dQsDDBW8F7YpTJ1CEXMd9vjta8kHF5159ANwTU6ZhNSzD5Mj5MRfhrUrXwsLQc95f7PZAAeJQ78BnMSDF1ECMZk",
  "key2": "XQxVJ7zzX7phemCusCx8y9vNwrVYso84rfinTrwobDJrgXJbCkA83sahkVFE5aGdD1SVV47AaCaLrRp8J2tybo8",
  "key3": "3sTaFo2JiVjhHpbm3RHFddCgNmgEh7setH55qvRNqEu5D5JnYSniikMTkqnY9r2CwHNENZiDQSh1LU3YYqsRevoT",
  "key4": "4YM71GYZVLEha461eZw65B193iPAqESaNiK3iisBL4jGG4rDpCWCyuevZa39JbpLJuCgkZXHjtHwsU21aEaSxuK7",
  "key5": "yhzngHxgc9WEsesWFnjTpNUKo5UrSfkYnDmVQHXpzh9x9twBDL1VbVHktqLrwDmVcLZwxVpH2xv6ehPMoUP9Lgh",
  "key6": "48PNBSnu8jreciUnJ1TTNSsBuAzMA1Hsa5w5gGRtAnBDoZKA6afMsDpWfk6vRPCSQE5tuiSVRbwKH5LhLJLt3NA",
  "key7": "31QTB1zHteNr6Lczx3HoL2hx5WAVsx435EFnfgRzh7yyrnKW17thfk8nkNt4B555UTh9Tkek9XEMTx4ZcSS2ZmXy",
  "key8": "2jstMNFTC6YjqgNrrda78tQ9GrdLteZKTBUDXXDo6vEy24jRJ1yFsmS1er9RCNszvHN3QUeYmNaDaF1bSzLtFwCk",
  "key9": "41WGmnLR4Swap4wCphNFEFMEf1wV32JQ3VKvhzBiwq6MRKocBgKJZKK4iingacvYatp1Tfu3gyRnWpJmjUJ494bE",
  "key10": "5eso9Je4KdDT3rZVeAvjFHA5xzmai5y63CdXS3nVuwvcLBxsFmcWRWxf12PjoW2Q2fi5aqKK5D1zYHR4gFp4NHUB",
  "key11": "3vFtHLxNei2nShhwNk8L2dm1UJa4ZmSeoGPKsCchJMjioRh1DYNWdQZcohrD249wnubikyqHiV3fuDnarXwNS9np",
  "key12": "2omj7z5p8UGPgzF1ZLZUozPdoqmDgrYmQUD21aeuYY7AZS3CsKfqiGxDM3BPfSMjCqd9Va6H4G8E2wS8YTFNHq3k",
  "key13": "3AVwW9DuHg5BvYfSp5ZTg7U4U62MBDyVPpiSEFmLaiyYSEq4xUu2gFxCkAd2n85cLWLrnXrpSKmq44R4HfMHARnN",
  "key14": "N1J5SkYxbuJGBQ5xGV1GfaXTibAX5Vf29eguGxKD4r3zBvCvv8wTnM3haudx41iSb4RGancNaCfUDxyEahpmLYz",
  "key15": "2k8PQvZmys9ifSFFSujoZDV8hBGFyZ4u8nPdr1FesiVNTNnTUfZ1fkYniFQmxZwYDM8Z53Z1hcQNM7BGpChjoNLD",
  "key16": "44DiE62d2UUq7zjh5FCAiXHeCaSdqz9RKnvnsHaxmjfdYv4LujrSnXZd5M5QyAuHQHvFZQ2coPfSMwB64bBvCDox",
  "key17": "RQ4YxraRn6VwGimVR9SNpzLoAnqmqx8vnzU7p7ePrbKKxMpn3ab4tTmzxVoAVobLFARPBLxGsjqhEHzkJDT25xZ",
  "key18": "56SZ2SpqepvFZP9LsBeUuUN3aHAARmPCYzoEmEKoAPnA49YSGUesnVCb9DyYmLX2AKqp5E1FMSDxbdeptgTBwGiz",
  "key19": "5DdHS3aDebofiA3SfbDV5nHCNmJ1hgChAaNxgNdrVmt1Tr63k3KuKxoMNPVKcVy81HonVamBoHa944P9nk3b5bkh",
  "key20": "vTcSGbPPpisNT2BVJQTmYkPEoEA2FqcsiYN9gXtSJmmY1myCqBtCQrDsLtZ73RKpDqYSjJuAsLwDfD8pE3zShux",
  "key21": "4v27zqoKsqkWogyWKWkXiDUE5kaReRannMdou7dpHD6E74nnQbz2KbiJ77atMoQpVwF7KeWUyMdVMoYDuYW7AHyH",
  "key22": "APgcnSjvyUqt4Wk6vidKwAsEKCsGPaB9NmDSgAyQ82tu31eXCyEWHaYskuorkdKAWdmJbLszxkjc4gvfzAcfgPU",
  "key23": "2KFYjHN2vxLtehzfkkGgvWq7TB7iPhGBBZJaUqEJ8zarAWSuopnzr1aKTjACZ6JXpPB1hdjNYyETbMHSvVwe7P6T",
  "key24": "3zM7LT7p8wzyvuQZB5KqxRNBbW1JBxtYWqC6RXgMxMqHPepJT23JHmkoy2Ha4jhHWhvH7LjL82BTL5qxi3q4K9a2",
  "key25": "2yBS4FCoPm4MYSQezUBv8XNPdULPJRU2nqVYNJCr2mPgmXCw3KEsCnwDi8RkHFBsBhNQPa7s8NHvfiGmA1f3g2Ye",
  "key26": "2SKUzZyVWM82iFmn22PcnwGFDGaaNu6FxEdzgzzEuKF49tcG8e7SqX1ge49ZX5aAaGx51sx18VZvDZaMfFJMsUQv",
  "key27": "4pHYWwUAG1eF2Vt6kGHWn74xwwhBWtTVQ81d8xyQAnATVWsXSpDpwJF9aHUdzqAeFeP2d2zHAyr9ZMFE4hiHQgdH",
  "key28": "4tBGoK63wvyjufdieJ7ytmz8X36yiKemiSwphM1tVvjL9LDczBPGmAsEbJEEAjhmVsmMG1gWJhNL892hE95CcmBZ",
  "key29": "4Pc3ozNxf6Rmz2ELdNCeMHgZJWnp57uupGuoRgoNQrcn1AAvqvLS6ARBxsXyp6imLe6utSWztxRZTF96KgQ2TBvc",
  "key30": "2LBe5519dWYzrxXbne4LEPkZFvJu37jLUvxTqUmTYutjhAtKbGTXgeStEQZ2mqwvmGsEKEdNi7SBuiA54xZRsXLP",
  "key31": "66maEZThWjGxUE9P53M27MpyGPJjgKynboGetMvutBgYaMpTHGn4dHcTJM1VWdNPn5PM9jY69sL5BibFwHJhrMTm",
  "key32": "5BmmfEhk74beJP5ivqgN4fr168kWXFdttgkgw893kcg65Qo8iyFanhXPmSjhGuAnQzZdULNbVGSpNo23gYVG9BZh",
  "key33": "3VT3FYm2ayT3M25JTpY45aCJ5cqUuosdYuc7HnRfH3QwEJNokWodf8F5oy2Vky93mVSbyabpg9bKDUZfQJ53c8a7",
  "key34": "366Ro2gSpLSZLkDupzz2sUzzRSQYcJq2sTM83gvQLMiWoixo1GhJPt4xvg46gWoxJUkc96koL6zCsEikA7UsA1YS",
  "key35": "3Sg4SJfttfPRhgKcXLDscm7Y59Bx8TxWKNY4c6KPCxTwCTa44YYUx8yW7Sxgo6VyPjLq4kEWYewHqUjqKXFTsYxB",
  "key36": "2c3sK3SZyyPHxCMH7EvgjzLkB7PP4Atvw6Ls9CKH86ToonmU5MKU6m9XZYksgj9afBUeii9CVjjpc4Yf3GPmkN62",
  "key37": "4xHm7KPxgZWuZWEUXbZTieKCALPwU2BwV4XPNQgUuk9wPjy5gVjTD6qQDjeqazcKUxPLfz5UKJHkQ9EWFwCN8hid",
  "key38": "5DLanLJLRgbm2ufMTq2Z6pW69WBgTPb9WsmcXjUxdub5PYmTCr2sPNMtKoKkx4sqs9Ve7mAdLGNfXbh1ZneRt5AN",
  "key39": "2itR8AtRAsZJxMzQMjstS9ZvWK3cTx9vWWPWsKvn9oqEybrCTTz2A3e2Vi24uBRUJhKrePbAYW9AwqoroPNXSFwk",
  "key40": "4gHnMSLm6Yy2EnYERrZrrQyLAkGfLEWHkgJgZhB6CqXnemdU463GKfoYyetiTz3GqqXn1TBAoMiTpxUq2bhpq7ym",
  "key41": "2Gmzv5Wa4AQCpz9hzmpcVoLGShXNy3U3chNpgSAcMrarRK7o4dHsTCFtDWZCA2DioR6721uFig1R9Qir3aXAwbXk",
  "key42": "4GU41iFNbkDY3zsJS1XbW1cVV7XjoeYvfnnbKy8ssnCMsx4hJztQocn26Ebou64hKMFXcNNUyL5aSPY2ki6kMUJu",
  "key43": "4HdGJ88bf2oF2BBDYyVDy9pYVzDQLN4JMktJSgDb6oaSEYVPqA2wnGVvkFHVBBqUinWKPexdp59b2dT7dJuEgSat",
  "key44": "4nM4NT4ho1uvWEADp4ntZyW7KTXMsATZgvcL925a3CVozVs2E8h7uwDsfh5eXmofCqRkLo4vq8gGN35j9K4piNmf",
  "key45": "5XgsRZLYx6bd3GL9aFMZSs4sKijtm8APBYDVPa7gRzN5v4AENPfQFsUbQQ2ryGTch6DvUBiw6to8a4enzibKvBMg"
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
