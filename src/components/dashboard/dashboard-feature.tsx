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
    "2tVRWVyPFWJmv89VR7PgSRgD1Vbc2kgTptmJW8GTZA5Xbob1aMb49UKzd7zTdBno9nQkG9d9cqeJEHkAVCSWDocM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ziEKF8YQYfhdpNNSvaDj4UsXUmsmqjtFiVBtJfHCLtYgNvpbar7fRZxJiY32E2odW5qgYawQs8f6h9TghYe5AKc",
  "key1": "9qgyaz9t5zVG7PjPfJX9mcSQshFju8T7S2bFbGHA91rRvwi5odsganH2iJNeEAoK5U1FxXRdBUYEL7QWbzzzmd1",
  "key2": "54GqSsaW3769TJMG5Lo7zFrjheCJuMcBAsCkm1oTeUoS1CzTThpbE8iLcVFVSZqLvGv3WyBpY2HX74CKYtzcRmm7",
  "key3": "5MHnEHX4mr9Sd35n8gZavyWmRKWf1U1F3dtgCh2WWy1PwDdhqHez56iAVKf3YVUJwYTkaD3mCDKfTzLdccQc57o6",
  "key4": "2F8NjhPoLum5CV1zRDPKneVhyf4CThsHXqif3bg8v4fUHTVnRfxDMgfZ4mN8GdDbE6z73BYm1Be67J9fmZWY8GUo",
  "key5": "3SdgmxnvSXCZpwiMcW7MThWbFKPsKdNKF8ke2hWSXFZFmqrbFA3AXcuJR5f7rZartm6u9PheLR6dGE3i7vK1rgGy",
  "key6": "2YMBDj3wgy6VPGKD8y6TAhfbFRWjpMcPeq9K58UUCuw78C2WXmtcr85PRoZuhTVMdNfF9ujihzA7hCzaAkyUUYM5",
  "key7": "3S7ELkmfCuLN1hhkcsceh9dojwF1ZCrPf2VMmxWkLK1yUc15BZaxG5TdTQe6uaQTurvBeEsz2ZC6voY7Je9BXBed",
  "key8": "22kuUCci9TtxmRK1dcZKSWdViWiuGnbDRgV9rusTYzf9fVbJThKKbR8UkHQN8pyYkAtoUu7SV8TvwQAuKrtu4YMu",
  "key9": "3aU3SvknpqaW25XUC8x4nRzPKhkjK1czo8N9L3N9t3YoHEeniH3jSpaiFkAEVaSKJstdeTjs5dXPbDdjTsSRxmV5",
  "key10": "5s1gtzQqccwMB9NcSs5vjSs7pv33Vw2EBgjdnPG7rgW2S8tAbAg1ZT6YGdpTSF5o5EyPgetX7XqPx5yyLpJEp3vR",
  "key11": "4Wx8Zu5cbUUMB225wYm4yPLa6uixp59ppFgDEQ1df1WZCmYqNaTD16aAsHeEf38Z1PPqc1KRDp2LtPixQkmyP2Dh",
  "key12": "3j9DxccPSRe3ZkbYUHaY8NKBe2nNhdzSRtSJ64PVFQb4jcP7EM9CzYsrEAy656E7n59WZV4TF17hpGsUs5whur1i",
  "key13": "3Ggpeyji6k7TFYqRxQnr419iwwPiRyaheukyWXnH6GpXCBZBYSdKuUFctKx31kZ1z7PitidZ7Cd7iqMQmboPTDk7",
  "key14": "5A8jedJV4EXDXYfSYBqzwrYqeYBdT6v3N4tLLQ7n1CCZv1QvYuFZrWxE5UwC8vVa9VKBZx9g9ugSowQhYAaroXVG",
  "key15": "AyEnk1tHHJF58mnMoNgrAiV2JMdgwexzian5VXCFEGiuE2F4dFtvSyLgpffSSxCMsTJrupBpQFggC84ez5pAmxz",
  "key16": "35fy5T6B7VHsek7sRzjR9k6YJvdVqNssFT3vG7GWvcfnZrMyuQvUaxYCd8DUn4J6hs3ZrBV4CgX1xgo3ngijepfH",
  "key17": "5dBPbcy81YUhuZ1vp2AfNJ6bmfzwNjJL19KqLpvaAtnWaeJsBT3WZqQhnV15QDTUZhRHuEUdjp2QKDakGXZRPJmv",
  "key18": "fjwYyVHjFRDRZWbnDSpQUH9HfGa6nwsxadnZz6dBb7Xt29WSm9CPqSwnxYqzEAnJiXjUTWVui7zApnEhRPfVK8G",
  "key19": "2moGWvksQFgpQqmVBT6jaWgCX3Xz7pojgxQTswmvZrmQG5Civ9U6z5Js9HSEoUTQJVc9WqC9i3iKpquLUeUmAgQc",
  "key20": "251rfDT4zhSEwJXgw3qQKdRkawftb4iMAazeNWEceZFYkdAZoDB2Q7iGXowcr9kEHim9B3G5Q5KaUVWmyQ4w8yiG",
  "key21": "4BkZqgurfep8WAAJpHmaGbnJuCjEBZ1fogxJNqj51oaab5X3P2f7Drt2gtEMXrmKM2UZisCmpc7gvh5Lastg77ar",
  "key22": "3xznkU5UJBPdg3miXiEbPkZrWu3pX4zuDLgGQxLdECqwZcUQP6hQ3jkqLqRgFZ6pkpPr6hK3t9b4TM68K4R5Xjxu",
  "key23": "45rsdoPL4LCUGgsxGtN3E1pXXdxBNgtA7xvLJc2CxFYb1U4QcXkMrvQsgXfqL8rmqkeWsWKzoJxiQWCToAZi9F2C",
  "key24": "3YUyrkhaCdapqzr6WiWyp3VpereU5Bwx6Fkr4sqZFbnebBG87vf2W6xRNBdkp3mLHRJbx24ZC1gMC3CTERhX32Kq",
  "key25": "3k4rCBE3abUZWAMkD5SrdxBWWUN9dSCR6HFGpmqeVPUaKUauYmRnc8zu2qN5P6oW4wbGabuC3ceQ9prarGmwu8q4",
  "key26": "nB6d45j9pbPK8fd9VRHNgViPG4MKJ9iuHBvPmP8JJrjLgYGPBZJPPV9HrMNTijYZwPhVTgEFeV9rqT34cuPNSig",
  "key27": "fEBC6cynY5xV4XfWRdf1BpdVNkTmLHrMXryCQtkaHXhLoKycZd4sTpfz7WyEUcf4zVzuYhx2xZncotiinbBi4ja",
  "key28": "61gBiAWSusX2CgQ5V8ZJiGKfeTAuoBtpksjaVqeTutATiq1TdZbBGN8geo5iEgMiZuT1mZBY4NrA5TfKXwh5qi34",
  "key29": "2AwR8CvQCMBJWZbphDk4gdYhvDGNhyxphHg3zoUfBqj2A2R8Lzo2Yd8VgoYkia5synAsy7wZKUnNUA5VnLB7Xum3",
  "key30": "5DtiefFwVj7wWoxyxvuKUGKjqJhpoTkMqtuodRq4FxG8QYr2mu7kufFXRXwicQRCHH7CEvbkYogD4xqLwZAWbXiR",
  "key31": "2DDRfFF4gDowX6P2EQQLVjkZggRWVBcK18seofYdfQWBhD9wzCo9an2BFrJjWZ288TaPvTaG3bfa9QHdBenwHtuK",
  "key32": "3HnJNezvXc6jw3YjzQqXD1XPtC3ccyJM8GHBoTPw8vqwmtrTG1efF38tQFsofvRj1HYabcaEKybP9XzThrkpWqD7",
  "key33": "2d2NrZFufeLTKkmdevBedJ228HgMkCPto5GtL3ejRSwJy4kVsrW87XsZaBDTxTfNsMuGDKpqdpgbxNxhQ8hPT2TZ",
  "key34": "5jLRMZiof1gFSqpXqgSUvyZN9uELXdcYdVU7jJhnxkaiKVCqUi2j7UinViFd1JRLwmr7nyMmZKAfc5B2Trw9JEzB",
  "key35": "4QTg6cbAdbEjdr2CmgTGUFHNSMVRnRkwYH6DUcyR23u6PNTV5i4aKFY9ycZcytaZqA8KeAycaDMxg45UmuHa838s",
  "key36": "47MtyKKzT1HWzFAXKkYYPVzmmdQvP2spxzQsMtZSB8sY15XR5b4i3rAcJ4YyL3FWnrJ4puE32KoRLADtgzuqxF8e",
  "key37": "zFjYcGEDgrUdWoRyxRZPpG1QiuNKWtQpdrAFJmWk9b4sDpYALBpBxp41aeUTSyceyw189wFexSVwfnpdiWseCLb",
  "key38": "UqKmQKz6LJwNvgZVQv8fDWdqpy9SBciCBXNmcFCmUWuKicdnEwLwRJX9Zf2AZcck46CbiD5d8h5mxoLu9pZGCme",
  "key39": "Rhwjna8vrst4WXhuQcsVS2Frz2PPsGqxrPi5pSek2HCrxpmjDq43wZ66M6PaZGktp1sS5Es69sSHznRvj1wvqdF",
  "key40": "5ivhvfW84wxFVFFPWeCqn8APQtKrZiUqwofw4R2YzAGCV8Knj3EAHM96LDKrGf2zUUCzb8ktGhxVvt5y6Q5rhSYp",
  "key41": "LvL7tVpELG4QPA4dGW2PkA3yp1aLq2xyE1Qh9uQZC6BWGUzwY9pTmU8je1MGG4Tgc9AuX7EGDBPPu1PzidQH4Et",
  "key42": "4mxmDwpqzYH4X4P8GzfCtFwR5DWurussS5giGfuUXigfHVTeFMHxrZxFsadw1ZapmVNA6hZWCYLDeQzb8oTjBiyY",
  "key43": "3MNxBwTCxVkUDvMtxuU71iNrRRL55JeAE8LP2mWEYaaWpM8vwL1ninACDY61ki3raYmeD6dk1zxVLEWzJGtfQRZY",
  "key44": "4FanJ3tMs41CjqvaC5153K6P3DpfYZRB2Dht6Lo2vEGrvoTSEPuZrR5GcR3qC9kamcQeNNVH7N8DgeYsrdXNUsT5",
  "key45": "3izwJLRL5gBcigXN3uv1CzjXc842fVgMZRu44vW5P4HYa3xAYZ7C1SoaM2Ksp6YWYkrcJoeKsgW6eanBgnf4jQus",
  "key46": "48MqqzX4SkH9rq81KLUd3EtVjiwq4KJVwuicniYVEt9Ga1MNKrGoNT4iNAuW6buwWMZjD2vaVL7xZJhUbka6Znph",
  "key47": "3SteqTTHY2PZSGDVsWZkUqoPwHGQ34wyeVsSv1iC5Vrfv218MkEnNvMwALxsF2TwXg8zPezwtrtRhqFRqpUjMXik"
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
