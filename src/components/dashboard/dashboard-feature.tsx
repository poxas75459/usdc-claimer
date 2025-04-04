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
    "3pybPDv1VLZfkM1hXJvhd5s2drDzTgJUujuLibMpyYjn2rYEAhApCnQqfec7KnQx296Ghndypnu3rrwhguvrGXfS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2F7echkApeLRzuy3y7WnYHcDKTunqx8APJun5zqwT4ARxKcHYEQDso5a7QnpXamVkkW7bvh6RnyAU7RnqVqiQcZb",
  "key1": "65pMzoE6U1My8QTjrM4mRxuityDb41vYmXXFzMHmpXYUSF5oiPrNx8c2hMmtha8LHxvJjVUzDawhHNTEeNNCuKkp",
  "key2": "rRbmu2AjAJrkdZF83vEi1itTH1n9f4gfLVkVL79ihgM2CMRgsPyKextSJpEYmtrnCHr3j4RuJuZmx8VuCw4bkb8",
  "key3": "EQ1Yrr7K6HVK9B111keyc3WumS5z9mcStBdLuMkgr9NQuF9bnmxAiVRS8RNfvCSbJAvEMG9MX9ydDU1ku22toDo",
  "key4": "5fBQL2XSiVmPh1oCungUiHkPYLqiHp8nSL1Aw9c1C9v54LUkHNR5wjSixtA76qoZEF8t8uewXBZTMiXhKbedxRRT",
  "key5": "5H4iBPZcbiVrBdmAgn1dEdo5Ri6qEDbU76XeKS3CyE6EiZhG6oJmh8VvL9iVWcq7FJqmkKF4K2ReXNCmJtcSKnGE",
  "key6": "4Reg6iNNs1NTnTx2KupnotAqm9cD62xqyDfXMXiRD7dpwdf8QH4LscR3dx8PY5N9UXSLnT4CoAVAZyRjbjK6W8Xe",
  "key7": "2e2R3M52J3L4LrYJBP5bUEVkUMRxaEVEhpcyHwBWTaXBwtFFcR4pP61agrN722eauvGFrAsV5ncuDoKL7ar5u6Yt",
  "key8": "kAaf63Cs7ZPhwwY5c2bxSrT4ZonUbKq4C1LxdzZvQ7wzrGJDS8oUNRzQSG2cdSqhuWMU83YYikwr2UGEjKaDCZU",
  "key9": "278pZdYJfiNEtGiW7tCGBPLb5CkYnjxgPJVtRAJVzJQvPVExDN6pXNbu5ks1JK8mBLwpKnK4hcmLcoTFks9ehvSj",
  "key10": "3iy7FbKrGAfbQrWpi2nSetJB2TjVorZPwJJKjyrugpssAy8YXP9uk3koYgrsZEN4dmhstMpZh2Ronn2hrvMjEQAY",
  "key11": "23aEpSSLW9JrryHkZTmZXoQbwNgF4fhzXaWWoCsmkT1TBeBT9RzdwZik7UV87ZmfsRSUQvNwKwb4E4KqpkGjMmd8",
  "key12": "7VxWQRPdxKGgdCubrNW58VejSySmMUE941Tnd2vWEBvNUCSi5AW27nQ7X8HET4g71v7eCjndnL6BYE1bDxnRu6v",
  "key13": "2QY42rAhJyN1oo8BiqxMYkxGXs5pBCyFfJ8ynLL7jBQyjPLHcg8RpCWd75v4g9XUYCWLVAxnCGZ7Gizckb7mgLb5",
  "key14": "uFRypE1ZFS67MqrnDLmeCAPkxLDeeCm3EUpk7UcbsJFJWK6FZ3Dp5Kai8Heq6BUaLxfFDdK4Nd2uVw5iZS4QyTi",
  "key15": "E9CgNUcXzan4TdXmA28p9xCQWh8PNy7UbHtJKipiMwMX539og48TqqmhFJuKzu4vCJ8PEsoTNetrmgpjyB1XhsU",
  "key16": "3sAgkxhRsjKobH1wtzwJSiKNv1QDHMav9JcLxLDAmUNoZ4hNxgh4fsACPK5eWNzYsg4UhS3MUCqrR2X8S7RMLkCE",
  "key17": "4SprRyo8G4rpF8VZuULvCaqsooQ8kddVgbVQjc47KazBvCRh3j1manN4NC2GMpT1F9Mk4wpW9xkZKppS4x8UTjBm",
  "key18": "5BvfeMudeVA3HjvMT7jrYM2S2K8U5weEpXkCe4PJ5iSG31Sq4iQgD1AQMP1qfAk9wxbaGfXoZRG5sU7EZNmo8PYC",
  "key19": "36J8nBNWQUSzEaMaFJG82UzBpvYdcokKExVipHfdWqY16HNmWaQoPcS448eWH6hiisrfcCu4KHwNoxyTmafMLVMH",
  "key20": "3f1gfxsg45rMbFbbfy9xmhMyypqDh33nUWCardtxgWfc9959XZUYHRcKMAdKf63eE9QEkcNTUuGJzpYaoNKWSMnx",
  "key21": "TXD8e6WnSRY7EAq6NFNn3JKgodb9zAVxueX3q1ycK9E9hLGDf6MovMWQbzbaVxvKBs637N3HY7Ma2er8zxXGWw5",
  "key22": "t2wXegp4fVA8wtEiiKa88sDDrm7AhaJMr5N2EWVdWbHTH8auCwq2tsNHhAwyyPu92HXFzfqwzW4xsG3FeorypuE",
  "key23": "2XXbSym2ZuKj1v4DEC8itdoo2NQ9rw5cVvsCiCBKNvykPQq8pT1q96URMfEaoZL9A3goM3RV1oGdQBBDYrTmP2RN",
  "key24": "2tF7MpCmQi5NwwTbu1hrwQb2d6z5LEozFRub1Mty9dfY4tSkjqHdUWwnZntSwHgArjJEaogd38R6uvFWJaHxg8tM",
  "key25": "5UUHqeJXWpx3thofsa5QPwdZdzxUKmTtz4oxekgTCnmkqd23xSSSutP22bYKKZo9hPrzAeffrHQzDmhejVifCWPg",
  "key26": "4vLPV5sV3FkKsRmFh2LhJv18Px5khon3ApmmenFpqBgAFH21578rjsiQ13XH15RD1WPaWpsMLWW1wKK4LHRU1kBX",
  "key27": "5ydouzEqPAnaVGRNnFUrH3Ru2q91reoWxv3hyjVGqbrGoc9S1Gq9vbLLKxaSh8bZBpoWmnkbJiuxnytf41iZ2Roz",
  "key28": "46WbjRSKkcaeUFRjjW7jUPW1Y3PXJnjaDa6asF7Cigc9RNrK1WdXcUJnvDcR2xPo5YUTCdQvFsxxrGzpstg4X6dh",
  "key29": "3FCfBDjZryn6euTBTfL4tK4bDk9vuupV6WZTHq7icTQKoQxJkeaL59oLKyZ8g9DQzjaFj7VTwpM88kaCf9WTVQZx",
  "key30": "5nvTCpD4a8G9fyRD36yBGVsFcXyrtZ21Wom5sdmZdg27AVVLkZZYEdHpmmK7f5r28HimtvbvqEr9yJizBBDugS8Y",
  "key31": "3sZENHocYswxUSw3KW8oaA1UavPAK4Lsnko8fgya4Xr2wVf58KC94uX24BTcP9Rp1BbckRGe8TztgUSaeiuHzyfC",
  "key32": "3x9Vddv9zFFiKPz8Lq3Zq3AnknLTepAfRE2jcFXezTZHPa9LKLLSvrjjbBNcjML6o9zcnZA63N9Tt6aJcrZ3ewiU",
  "key33": "2fnxKtKBnxX2uM9XciMa4YL8eXTskJpKNLDP6Q7yniRJXFBNbqmyFW8q76xS1qaebHqLYDBXtvs3En8dqTsmJgAf",
  "key34": "qx7P2ocoTL36mkVzKM9SbWxf4zMQvUS52njxPthqWAJPShmNDWmBb3wKyf9ET4GVDNGqtP1DQGNQ8fP3pAoa6sn",
  "key35": "UVxSAVPB9jsmaVDtLocSGBWVDY1tqNxA3pRdgWxEvhwHSWbsWHz4uKbgUxKKcSDNjpvs2bpb8Uc5mmsYytnRKFe",
  "key36": "5sWBvnSCPHi6xuvTsPTHkeeMEakfexbQpsYL4LKLrXKhdCwZAP7rHL8awetCQrbEkFaPsbRDDRizd9bC6gNGUga3",
  "key37": "3DiZwqknC4WHLHaYjbuCacjiTQ9bPtjk8QmDZsnUDLbEzFPqSP8rLG5GPq7RybPkC2aKdCkobyAFKi2uZ9fPBfAi",
  "key38": "2CGg1Lyg2p7AgX1iw45We1kzsirZjW9NhjKuUbK3tGQajnCtnzoaQwmvN9PEw3EYC4GmcMLeiNeZygbF8BibHqoG",
  "key39": "45NRe7YaCBnwsd9ybnDXfbCm1UiGaHC6A76mvijp5XTYkgQMQ6Kv4RiBhNwZ4H3XTjLgq3CNTYMJDvDfiuC9kUWs",
  "key40": "5doch2mKrfwtbwLgyA45vYpjrK5hDv4fSC2dvNgMG2Ph6BQdbNGKYTgrEyR4qyZ4DDPTJYWM7Qbt5WaHNVsPHyPs",
  "key41": "63CUUG4ry7Rg4y25E7Chrzsx6d1qwCL3MVkzdRSEW5Ju1NKZvbMMqrnYUebtt28jnBE33BoSpKSzAJHo5gHtWDhg",
  "key42": "3wzkY53ZYLB8ReftEgtpyXAp4DATqXuUYu68Se2oJitUE8NfAPWGkuRF6dL7CVVXU3TzUMm6jddY1pTfjp9qKzpo",
  "key43": "5BLFE1kTnyKyjQHnMGtD7DCufD166zk2GjWPp2mzKCXbwW6vFbWQ6fEf16Ss96T86ah5dCCGLjvHwsHwXizE51Lk",
  "key44": "4vvrPSvUysN5JXmouF2QEFcRz9vzvqUcsoniit4YEwg68TnjWLRoDd9voR2DCDrGAJYVBLAbLWhkjU9mq3rzuCk",
  "key45": "2wTy1U8vRoN5ZRuTMJjhdg42SRhtWE3m93XvvZn5HCt5kyL1d6TfudR82TLEZRXopiNm8iA8BXsJUomxJ8Q3RG7q",
  "key46": "4g1XKMt7fUQUNc1tExKUBV719ySmgZS62zFVZwz7XLV9Wtn6V52n4wxfNKihS6Bc5WRKMG76Z2iVo7E9SnyAATkd"
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
