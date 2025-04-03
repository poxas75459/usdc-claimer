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
    "4ttedFwaahxfwXyX1jmpm8Kp5mkmqurMYuqFmCX1gqDwHwzcGVSTtpFSFjneqxpypAfDHCdTKdBkcfPqd13YoRmE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "rneNQE9fdVZogj5CaHqugQMma1TMVPcB2e9pyEjufuoMByhAQPjLBvfpgWGvyvXrU5Nxsaoybbn9PpvcoBX8J3C",
  "key1": "3dfF8pfbsL2dvDrgrQ8uCkAh9teDdwdfQTxhRgK5Ap6jbgtBnaKwZJ7YSzPfwxBsTrFo7D9si5A3Ke9jW5kVnE4f",
  "key2": "2d7R7vPdZKAVSeQ71AKH5uBEjHSGPs6dL18EXyJDmsPMYFY3UDzvFtvx21ekCNXijJmBrWFHAjseKsaJQoeQYnEG",
  "key3": "uaqVBUiT3HK1WEE44EFL5WoPPfL943c41nAhkZZqks74wjLN9WDWM4QgR5ocQDoPymSbzaaLhxoVmjENGnzP25a",
  "key4": "2yzwfR8oFekWAA1yNgoPodjqsuNBVp5PHYEmQ6xwRABEwmSBrwT8jmvFBpAEguqvjpEmmxMQVtsmMKLv4cxZM5bp",
  "key5": "JHfVLPuPXKPUV454vnH4FfZWUp3jYxM5GqSpGn1rJip7Dv6w3478dtEsNUdNGbyzSYte658nSbBMEqm8mv8y86Y",
  "key6": "zBi9iMJgXAmLjxh7WsRUrJyR6yTtQPgEyZkNZ71euKEEdaHUbCeH9diGqyptQpPFfev1Yi3TftpsHykgvuu5FGK",
  "key7": "64S4TJTtZGx2NMFChYjeGGRFkE4s5cKisG1aLWUuKWtpdt9HxoTrKZPYEzBjbYoT6W484Kq5iBDxS6DU84UeSHDy",
  "key8": "2TsYNsMNM3gaBwn1MWgaUj8firA4yYQ9JGhxh9V11qULC2ehVPWL3ZmRC6VaHFddZzrtSyjjjE1K6BUarVdkhGwF",
  "key9": "2BXkhmHAHPkBPi3HR7UEsExH7oVbSrHZqefLft2F4MvBx76m38CiXkmbVA8xV8aepXiu5LHpfGfqtHkq5v5jottF",
  "key10": "3oFG3YfSXT2DeTgTCBj6VFMzyaHMnAJ12QCbBLPzPXciHE3VSjGC2ZVqcLvirdUGuHTDNkkHfmntxxEBcjsCRBjU",
  "key11": "55eUzGP1u6jJxRtpXQ12Me1SeicPzhWa25dBzDo2WsU2hwSXa8Fr8fmQqiucTXfvnMDjLLggik5ELqTQogf1FmK4",
  "key12": "4kCRDNqA96wWMtPWymC7Kfuj2PP5Awak3aMMuhg5gf9JgrYnyLNAp1R5c4kqiCSUxHR4XfhZbeBMLAf4rW8SXXax",
  "key13": "2KDh9ZxM6oVnM4sSNA78bw7nnMFWHiB6v2mBwcc88rK3TiysYg8t4Qr4PEdEetUgTS5chgzBiHcFeoAUNb9U2Q96",
  "key14": "2za8GemhQVSikHTbEorknWccuCZ37jMneemHSe7CwtxX7h53ejX6Uk31FnniBy1cq3f5hwjP5ZVLaCTNcMBwW93U",
  "key15": "JoUxkruRYG1u7UfD9BAGF2ogCma7SV89ZzzW5FaehT46MRuqt1SdfiVxHGv6VVBMZq2qihJWfhiQrvMBdEkd6UU",
  "key16": "5hasdXSgKbv5PcLrGtjt2hMw4RNGCo1j9KVcRAU3W76KLYHT7EjUwtodmoVjdAJKchJhDER6uqcDpJwnk69UnwQJ",
  "key17": "2ifvHnBqYXoTFdXcHjwccX96eMnjqxYd8fDxjSPHJgyECcXTwxMEsmpj2FnogUawoUeT7UfsqZLtTTar3Jdpx49W",
  "key18": "5ccrtyaKLLKTkbL5SUgUHRMKd58PYSVNdVsNh7PMYwF4Exv9yoZ32w6NqpA7iuPMY1mUJMyMCNoS74DeNet1faS",
  "key19": "5Wh9dE3UeoqVp6u5E6WwbwABGc4gMvhBymC4hzAdWHNLnewxCZRBMg6VtSxpD4ygAfK9yf4RLj1tF6JEAfS3H7DA",
  "key20": "gUdF1Q3anET9EGsfJ7QhaPmb92XVV15a57EEriDdHBw9QsRc7A91BDLMR5c8qv9Rv6ipyd5MnNkwrbb5im9c7bk",
  "key21": "4sx1E6MqQt8K4CMv4eHBykm7QyRQyLZXfKMYMFGodmRnThoMjHjvfuHSqMRfmYdT7kHh62N934Q3p3pQq8HGnDUx",
  "key22": "5mLxQqzPBNNGzCZjSCFSPMtKyAEEDhC9DZ6XGwp4fHRAvMJj627hhrX13EGbqi1kLDx6AnJDVxyEzsbAkS7Nvbg9",
  "key23": "5z2XEE8pJfJ9DSWKJAoiouBNffRKBYr3FQoVh96hDqGWfZoYtMcMssaGvratDepQ7Djw7s3BEZqghHbvkxdhicCX",
  "key24": "5ZLEz9ftAbzJRfehYq7XTxuHsGEu5fJ2nSP9pmeLpHF1vEjTxV2S8dYDBwesaxDycna7TgpXUKnceQBAyucTvCgo",
  "key25": "2WVL2LsM6FJR64pd5woERw9ifJHDAUs3vDBb1DMqsGG8eT4VuHdwuqrQCTccx13yUoSAFrS8Ft3krRRHpL3gWDVB",
  "key26": "4cfWhbvEfpdAfs6HtTh5yR2vgPWQv1nQUtjSdt3wKnyY2GXAx5RJj7iQYNaPRYh9qaKoauVksKjxw37KjBp2Btx1",
  "key27": "2gB4DoeFCSQs2dkrSGV8djugKGKQehBVjY5MSXtzz6h4UUu74e7YnWNu2zEd6q5ftnF3TT1prBogmdBEK6SUcc4L",
  "key28": "4gBoHqDvfjWQ4WiyhPUo61aY1UVjM21ASmxhnwM7Byj2GmWywv8cvRJ3jwuyZVA5GQp8CLSc275J7Uxw1Hnwm3qc",
  "key29": "Np63L7c5TBjRpRyL6dHSEpV5NdACbuuLyh6KQdZDYUHbCqAMu9oh6Ja5iqFBrjCUfW5soGq4kR3ETQBMWJoTGib",
  "key30": "53oUmNdyJYDFqdCxUHenaaWMaMcz6M7SRHivCtBu668NnByYW8nxRBiGV5Z4uYZ47F2kuBftG266jgwURTDJW2he",
  "key31": "ugzoVvW6cnCz18NE1ad9sXe2hwe63VFETJ2jjnY7HTuAcLBcMNfGStUY9JFQ8WaVmeFQ8av43qvzVuJUwg1zT3K",
  "key32": "43M3M49DkyDYohiG54RCNAmku6QALPcmTLGxhnEyq5Cr61stPXiCLFpmHU4AcV1STppw8mRbU2csuL8b2WdD2DXA",
  "key33": "2vahaC1Uz7i1sAkoXy2y8j6He9ArvBdqEGRDbFrKN4qo7U1ASp7Y1DxDSmHF1c2Tc74TULM9odD3hS6Tr6qV34Rs",
  "key34": "2TyXCxZzFkCejbMc75uo6HTpJUVLMb9ffuJX6H7YsWQZmxcrKuM2LSGW9M7uzrbdCqhx6dm14U8P5ZF4q4WELYFQ",
  "key35": "2ZR5sq9FFLcRXHDSXmYPS52S7vtdcCvWitpnce6Ywx43Qwe2DAn81WCpyGtvWRxmD2WNgpy2CHCNBxpuQanzJJBj",
  "key36": "39H3cB3Jo32QRf8WFdwFdtCBF5oCYvnQuQzz33QGXt55pDhG2KHLht9nCSs4GPQ5eedwHw5v6WPK9oCnNXhxxmUc",
  "key37": "22xgC6E53ZWr7xeUzgRLLevmTPpsVzRZhQf6yheNqhb1NZQBUGyH131toExwJYM5TePgqqNEjPiW52bsik66viPQ",
  "key38": "3z5HnDD4pt4wAPJLvR1AnPjREEVeYCw27GymGpeYWdZn1k7iqxK8BxT3r5vF9GXGn41YfMcvu3JreyX4Mrd1bgqX",
  "key39": "3qHXNDhgMmv4EQG7EzEPjE7CeuLBNukesFry4MfogPN72JkXG2nX75QgjFKxXrPfRS1CUAbkncbsdmZ2MgDfvZQw",
  "key40": "2nC5uqppEA4kdbZ6mSaenyaaaFsAGkzmL9C9BfmrciBjihsohF1LuV47QjgfXds9BXswYN4P11YbRtGGxLHGBJKU",
  "key41": "3RSuTxkJEd6Dqqp1XNSqwWCjH6pGo8v3YCMM6RBodgfZ4n4bCZNYxXVNKXBwr45dAXTR4pGMhFqBk5JaqKooYF9V",
  "key42": "59qVX3QcSF9B8P2Whth3eJufVYKxTLcV5dqDoC5B9AG2BP4kcEJqnoKyNkHJKLEY6BvFCE6fJEP4PYKUMUWScwnL",
  "key43": "4Ypcn5JbNnQBjc8z5di5tVKEKJJjAP58R1Jmzjb1z41kD8vTw26faSHxCmobqQ64CbdnS9ck6iFhEeStuzsasRte",
  "key44": "iU1piCSDnsbPhfE7XV72avLWPHmrYYeGoBJMerR31qnZ8jq8KN6ransSZcz5CPHwXf1jXLppqjVUHhKLPpvWcVJ",
  "key45": "PMbE4Vb1V3NT6792HBRxFauikKW1Goj7VootwTXfT3y4aishtQ5zuYPZfgdUcDuyrpmtk9egKxxjztWjEABwCSh",
  "key46": "35CVYUKVrRZvAbUrBt4NhsLjnEcULezzzcjmTYawWsG4xn1Ri9PbB9gb9HemoNFZ8MBqU1PBmWHt7ZtqtW9HPh6K",
  "key47": "4v93GCVA2Vu7NmPXb42hj98zqSEpBnXMuNMDB3jJXq8qJ7vXZ85TprduTUFXNUTNRVBsPiwtRQrSozaRzh6xRRQE",
  "key48": "2CfP1SsmN1p2hmRjjw9YxyhCJV8uBJwPyVJm8vCqKGZww5nD251zhzgb1zQmwcTZ7hGb1dAmHnfuL2ZUk8Hym9dC",
  "key49": "3HzBpaNRjgT6NLMmWwHTos4K7smDMoDpHVpoNnphDyccgSZd94Nzj4icNE1Ex7zwjewBoP1iGRUMmcGZdRm3WjmZ"
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
