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
    "1MFFBQr2zbwuaLom3fJvyJKRj8GFJ35k2kydRJn3fMLncFjex1ZKKttGqqWTacT5tW58xWs8yB2vvvdrcHPzXHf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "vzrNqCaELjoAzzbWp5LggwLQFcn3h5A1qYVPMkbXavg4b3sa222Vmr84CpgSAGHAA8Z3DAs9fYfV998DTjXu1RX",
  "key1": "3CkAa4GXpPKM7rWe4pKbKze6AbyNdzXDTx6e8TgEJHnstY9uQiuCqpqwb4aui5XZVhdwNRLY58us3gqj1hhQify",
  "key2": "4pgbVjvh2WZzcY3iqx4jnPxUkf5Wj6saZ4HqdxCq8B58utuVku4feTSBtfTZjepj4BtP8hDQ9oQQ1FUhCVHwbEqw",
  "key3": "2T1Ka6842qMz6h6RQrjyyknwPH8F32wHsr5WQ3vKQpar6qwh3p2RdH1U7vEUomBZaPwyiw44HQn1qmNyighiBWtp",
  "key4": "4ue3azCBdkhawtC5zWnrDXNQtkU43Q1RAeADsz4RhyGEY9FRTSUaRCrFC7c9Pb2eSdh8xALTzM3QF9fxvyACxznV",
  "key5": "247yaedd6813wMQnME3h87LQHF7aJcidk7CnBp21kNxLeFkYDA8uqDoRdEpn5co9QmL7Hjbmp8gePC1HfLKjuYSw",
  "key6": "3bPaqViD7N6x4qYskaURx1CZ4VV21Yoamn6VFGVTxZdzE1wMZ2QuTJZ4LZ1pwh7mKzepSSw5Np4SQvswrVgZsUFW",
  "key7": "2Yyc9YzzkaS9KifhXiMwAR1XCrTuUu4fAoSmaExXE5PE2t2wRfQyHzoCJeKN6g9SxxxYuk1AwdTzmUvvW8oBRffd",
  "key8": "7og3E1fJShSV73woXZKFjF8TW86AWwmf7BqMiJZndLdYwUE5SBwZpnVBQyxPimkaCbGc3Xi7ZQK3hXZWyJatDk7",
  "key9": "5mhtBc6iYWq7hh3WKcBn7kUYHrvhvbwnf5Q5uxBanWQA4ZTFopdVkTPcGBtL8JTVzwcoJhUWLdDCTKJBH9Lz2KNy",
  "key10": "3nNWqBQP7ddG1hZ7HdJm96LhPQBvZAMsGEsEbzPJNQ3iET88VeA1B7QQJ7KNshbGbRDvP3Logzyywb3KcdvqPSEM",
  "key11": "3wCHhH3qKZJgxV22NRPpgnd3vGKLsEG2PfRRWkjq7W2TH2F5XvdVoRzZhrz1m1rCvC34u65LohseQ39pX7sn1LSm",
  "key12": "66rFZNQ9dWcNKtWCxYxoViEekwgQq2FJokwiKLJSLvR4rDeve5qWVTsMhcziYa3e1SzC8Zc5UBCkzbp8aUjs84yf",
  "key13": "5yK6y2YSDGafmyW1PYPtftN5qhjc8ZHamQu1Xc1ghZgtEmGEH8DVccgPpcj2wimp4BgeTLBCvdxsoStBBAARv1XE",
  "key14": "4yQniDyZj4etTyC2MH1yveg8ZN15EacFnYL6msSWKiZNzm7U8HXf6YgMYDnr27NFh5PDyKssUyiJjyrqRhWiSsmT",
  "key15": "55G1qGbn54JMHBrN8rF7XsHS1z4Cx4HQM7yvvnhdZrm9iWkhzML31oTqtmwKX5zcPPW3GwLHHhSDbtEdWgBNp9ha",
  "key16": "37if2BeeypgAWkxVmFViwAeCVyZd4er8PqBdNYmCsKzVqQTiqhVMmLxmSV9VbGAyKXJpJ1CNUNTtNmYZ1gCQyfBi",
  "key17": "4XP61n8cG66k6mkPcki8XZnGMeUPf3LzN89cyMwmZpo1v7cHe38tmuX72XxVeDz7i4tV63RjosCEo81Vz65W2LQv",
  "key18": "2QG7X6yZZHzkFJ8CxYuBRP6H93jAatZLNHJwMpCXmqv3B2WsAeLaAf9JcbUCnwQxhtDNyKVEDLfscxjqvd1eHJ65",
  "key19": "31qZx3NpFeXxbyL2gFhZd5gewC1QzEHWY2X7Eqc5pgzKp2VZyREkuW5bcKmnZotG9wtRChquqV1GaN4xsbfDetxr",
  "key20": "3AsuAtnfaka2957r7XdYQpiga43Ki56EjjhLw5xVzWYBTunjCNe2hjEYYgPapo7kahKiwfLLB8GcGuZsAccN4MpF",
  "key21": "58B6JnuVY15fA3oLTxnSbJCRmLr78tchSRMov3Jp35J7BMnmnpeMHU5MQc5BCD15FUHm9UdEGZAW4fSmxjtGD9gF",
  "key22": "5mx8zT6K2wefEWhWCoCwKruigcMqrrykZ94uJiBkACisZrCCf7e842qv5AMvJPoi8E3fHPogk4CTD5dz4WBCg2hF",
  "key23": "rFNPjWcWUQgMEKSP4s21yYwhV2uF4YBPbbisuT6DZSuhyPAv8vGpkM3aXLLRFztfULsuNoeHHRgLzpe5D79vq7e",
  "key24": "5yj9LD4RucVpxV4tQCTXAojhorJdPYWRqrCQJBXRKMpr4TasxfnJvdAw25tBSSu1k4zh6HfXsahDXoF85NcFFZFm",
  "key25": "2bL57yEfiUhKaCZgD3miYyBjbs5ff15jus9XXeoTVxcoeBXfcsp1gTCKkrtYzZj7S9krdeczgH8vFsaGLcZHsftj",
  "key26": "3UnDMrTBumWso5XkfMPokjj5Uq1zGuoez5E6DBemdEbZqFUZ7f5euqckssQvcQeJrTau6V3i5qZQAqizfRwQM7Uo",
  "key27": "3PLp1w2kgnWTS69tvqJvHT1smZw9c8bEZBiZpCUFmtVYu2eAdthtcUTyN86wn9t7egUQdedrPAFPppbDTpHaSSTz",
  "key28": "3q4BA522KfY22bM4oPbsmB1GYyzbNFHaHowpL4VPDJwF3wn8EDXE3gP6yaGjPY1G5Jxvvrc1xCTMUP58geZ2wL2V",
  "key29": "2WY1aWwyWcjPEKSCYBkUouMR2ss1APKAXtNcq7ej21gPpvHqjbLKr7qXiC4TskvuxUfkDdbAg5ttmfMsgbYoUJfr",
  "key30": "2TAcsUYyc9MNPDVSDcW4cC2ftRBckAi1WD8KEgj9VqtP78DL4MQrEJFNqyjYCrZqoGhk6c121KuD5bELaqLAbxkx",
  "key31": "2WXP5YazTXWKgMYkCjzsnQtas4HAAfDofxC4bHQrZVrPA66QTY8Yjaerm5cr5jC9aGPVHLg18C6drqCoj2wDZvm9",
  "key32": "w2hpBEF3bsj6SRYtgUdfapSdSoBJ2gv4qAw3ceA6kwfW4KR2tzVxTt9w7CS4EeBLpwraEjZKhi9VVycKHueYM5R",
  "key33": "23XysopSs85F3FPMokkJQ1wCR52RQCxiy4niukasNz1ue1Q15UaUvxiCTE9jSJt2iQ2s4m68xL3yZv4iRhy6UuJY",
  "key34": "5U45H2c2g2p1rHU8aZX5WgNGeNq5boXntiZRnHQggjty4dYtV2YBfhNSNp3hektk7Qv1Hi88m6nVcAvjx3LRCyt4",
  "key35": "1ukzURZUJEGXeyroFygiHB1z7jSJAavywXcz4j2E6HBrppMYbHnzVfC11h8N2oLYLL4iRfnDTh3G1S8mwZkMLFJ",
  "key36": "3CvrSsCpF7H9RXC7NgrsVowpniRpLCy1Ms4d2sZkJ8dLnkQRPa5zNUex2b677j4FSz2o8Yuji373SVP6R9TDAsgY",
  "key37": "4Z2grbMUuxHkkRzGeGLbfe8uwbonUy7BC3TujkoMiFhdbzShE3o6uHwofbUsf4UNwZtMQpkK12LYsdrMua2URt8h",
  "key38": "59CvDYJfVMGdC9CP64A2dhRDwCS4BJ5y4gEQynQTksoidW2w5HqXYzvcGSVjdNR6Nm5hJeuhrrsrC1YpFspD3ZCk",
  "key39": "3VkKTySMTq5xbiSptWU74wrKUqsatGFcf1CspY7nvFHrCWZ69W4zy2z3DiiiMfb2YYRd2eBYaH1opiEgrMfhXzYa",
  "key40": "328hpzJCQMPzupwDbKU4eGzx1PN4EiZs6ZAiMwE4twY6QBuCkQkqMinUFd3j9toD4cj2NXGdB1F8uLX9sHyfeXkb",
  "key41": "4238jJR1dzbmZHFxDjsavZcq9DskdyoCakDt1Ny6DF21GLpFYCU2UFE3isDSjy7web4guPaout7GhSs1VLiW8SHo",
  "key42": "58cFTsY22UHL7KobrWDTYEgeYhZ7JpYubvStDZsfKU4yGuEprFZcHStkxRyf7aqgU3XW92eN9gdC5vWAdEUY4o2T",
  "key43": "KbWMYxTh9ZBdoJ5XD4cPfL7WQf9u7XY9GYA9ba4i6iiv5SUPYxzVQ8qbcbo3MizMTazrfpmduU8fDznH9X3Sa8F",
  "key44": "3izM1W8i875YD4myuBTWKthtD6qS3WXvWE2JpLEDVohQiF7EabUXE9svsb1yVqZh8eq6p6ntajUnLViLKfgwAGvR",
  "key45": "2iDS3PBg4CcADe57ejunjfC4sxXCNgx59kVF5xteA1fJqZAYZHLwBdAafizFYyzptWDpb6nuexhaZ9QYZb5mcGCx"
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
