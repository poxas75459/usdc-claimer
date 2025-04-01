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
    "2U29e1APUsn5Kg45orgtiGHSuVnrTdi9Z4Ju66LD35Zf4xvU2VBw8eU3P1HATnDMW2BzXMqT9V73GKjpWbRL3N5U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3pKEyZrfLFEvYh1Y9TsF9uf9gPo8v9z6SPRJs4L4fYTscHrtpJneXiGcwuQ3sxN38xeK9BoYQgPPnPqdDwsYttjv",
  "key1": "3DpBgbsYS9JXG7TLbv14qwyKzdZ1f9NhsNyp8Y6pAspaaBbsmLR6wHAkoBJYxZMsjvKy31irQPj2h3P42VwGxojg",
  "key2": "59zth8LeHLLLWV15QLbCALmot2PCvtk6ngroWUmhFTebP1V7cntSNZsMHSmc9gsHPFRgU6SDSkcUTGqMDYKQYqVe",
  "key3": "2QhCYevorzyA8dVGPkWGEDry8N65fztuzfSdUwGB8d7G2nxNx4xPoA8eBEZg26uoL7hRB72T4pwAdpSmb21sekGY",
  "key4": "ieDpkQSkp6eTu5ePDJRxouMqXs3gNf2A8jGibvJGwUCR9Hx3sBVgXD7brEqPu8vpdJjU4CpoqpuZygEFf49YNXL",
  "key5": "5rErck2haoL39djJFEcz8JzW1i1unW6TtEK6dvFnD9Xc5mGVYJFehVaSxMd64xTgTz53yEmDCo5mqNyCeGFZ8Gi",
  "key6": "4B327yZ7isqaPc3FPHfPH2sMTp7anakRkND9btaTeAfgo3jAWuPxDAwsvFaTTcvDDgr1tcpopgGnB6oEPwDnB6cA",
  "key7": "4iecYkV51Wt1yyvJsds4nG4pkA6iJrYKHh4jdLmMVRfigCosx5dYkhzHcvcGjsSg9Ji17dpUgcBgXkBn2GDMFHvt",
  "key8": "4F2ihzizcJs8Szn6BriYcZ3KFYjH97zZeZCG4iETNm7TadHEdSxEX8Ak9ykppLd2TV1CmTEvZAmk1mxjQKRTZng9",
  "key9": "4rHqn8iNLQ98LGBZdgGJTQ8GFRQwwNfGRqFpsejpmw7ueHuFmUv2mLCVrQTD6ztSHWdxUmtRboPTowg5TiSg4B2E",
  "key10": "2hYwH3hndzfrKzYQKmsSvFiMiPSectEFjS5LYJfUm5yUfkCq3rxo9pKM5Vc7ebpsRNGyVHTEr4yrjHsu6rP7E4J2",
  "key11": "R8KZBAx51hN5HSMkaqPx4qCBQJ2tG4CZr9KK6tZDtNgUyh21JqtBY1yiecmKHjhf7hLRYaFUA9B94rgZ72vuWvW",
  "key12": "4J1nVJtzCyZE3ws2TSWyswH4X2h199MHJWXBPTn7asoZNtmx7MVskJvCEhvjii4ZtxU9DTnr7uvymV1PgdY3TPgi",
  "key13": "5wiVjwqvZ6wsNtXUDE1arGMtTnmyDjNppoNQhVsJawPCspNektGS6zDgfVmdiVeJ2BT1Q33jKq4727Q62a5qC2AL",
  "key14": "3swwEBPPef69mopcjBuV5HCLKsk1hW6Vx3TsGa5EWFpnr37Wvb8RPBP5emaHGKv8bWPVzj4dAyhAb5w7Jpqa6jgw",
  "key15": "KTzQRyZad9CfUtuRpCsYGHp9i8S7KaipXT9jJNjsAYquWKo8S2HT8aSsw4yzhUHS4y1FrZE1gvBsKwunp4WsaYW",
  "key16": "2dcG8K5ZwyYXeQmTeyB1Y36415SWUJAod2q4iVU328mmiJRNsHWCnqf7aCRR8wbBC3tt4na42WokmMwyTNoJnGVY",
  "key17": "4FbEbkJs3ijkLhEz5kiqvQfDdM9Th5wZRjJk6Wps7vSDyf74A8zHuJxaDqL2tG34TXgktifky5LbikEUuzWoFiVf",
  "key18": "EqxLuDX6FkgdnpbCzYb8jpCa9f1FVCJkW3a4Z4aXQ4WUxd33Z4nNj6p4ncMKgxa6Jq1KtzUj9rq9Po2JgZSmv8V",
  "key19": "4g7mYLfwJZhzwRPcWbq1rHDmgHRV3oJRNtytXXKYiZyFbXaKosCk1kVRtCTLKU6Askd3jPvinoBH96qyc2f1c8Ep",
  "key20": "3PvCoY38hbVAvBmqsUpgcffXkX4k4wX7U6XeP85LufPpHqzN6nfELY5FWUz5nCKmh6epnBzuWrUuT5jJz29SNr1k",
  "key21": "621Yqum7ovLNakF5GK3feQKBKPXWGCyMjs29gPh1RcCEG6i4Rp6EfKv7xsu91mLytKcCeiogvX851zxsgsHjTdPu",
  "key22": "295FwqmuLEsyZFwu9LhR6qwrinmdcLu9qkUtd4uEir7utcTyD3me9y2hEHEHE76YVyL2d8gCMCVcHUSMSqF7JWiY",
  "key23": "3a4X5qthEd9AP3ags69j8RQVmDzkwAk5Ctw5aSPenCohJim17wmhs7GsawpVKiJpJHNTRdvVdGamj56BAYK8ds6s",
  "key24": "5ywMx2Vu8dHExwga4kRHwQ6waPy4yxnzodSRiK6GJL6CzDX26sZKJazimTBGTu3rbooZAEZ2Mub73x1Xwv9pRvVB",
  "key25": "4URLtxDoZpT5sN5XdEntqnr77Kz1EqFvjqh4Vpn2kzFzu8VbwUhg16z7qD6suxpgwVcWxB3MBqj5c6yhvUo94E6f",
  "key26": "3UbYWxn3g1kafGwXhRSZenWBxD4z3EjAbdGF465WLwuUa1tgF29HmewuPg5jLheKADNYLs8TQ8e9AcjAZn5FBGQo",
  "key27": "54aG644rrE8WMXCcpKMySNT619fEWu9wVnHuvEcSu44BxURUjtC8qFbLzogrz4R8PcMrAjwbFRTGoJX8DSRv2gwv",
  "key28": "zNi48qvAX9Sm2ER7AChMBtppxegVyC2TDKs4Yfm4ZYqcaXnN23ELYUykXF6humkqRqdSY1sgiauJ67PpKhemqx8",
  "key29": "5s57woqDievQqxT8oDbTeGMsHbQZ7MkhGTmEBPNzbP5MYDLkh2VyxYqXGL5MQVf1mSatMfxB2MT7yBWgUsX2Bz46",
  "key30": "57vYKE9erGLybEdUCA1BjNTPBA1pJ9h8kxJWLxU3JgJXDkVrJk7weSRQpqm8FiSvzSz8c2ozCcFdgj4nTXMPdN8a",
  "key31": "164wTRADf83f4jLrnNz4StqKbib1QuGFsjZv1uac3oM72XcXskuMPt6NwUJM67agtXRSn1cv91kuLo76PMb4yjb",
  "key32": "aq38JoCcr6RChrjyZgEq7rHbCSHsgZqFhS6eYQQharjqvSPH9J3YbXibk8eW4cJt7XnZjPKBNjHteft47uZwwHq",
  "key33": "5xtH4fYzMYuFVGAVcV5n12C1Q7hscanhRxAmfvwzmAimCUew1ZKZpEYGr7J2oLzj8mttyi8wGVno2fm579KzJ2YR",
  "key34": "49zus1JwGgnUTUZF1hA4Loqh7BZW1Hs68CfjHp2LqQYdexFMMzbNxGqRmbv5Md14sHrw39hRrB4jLjgDonMb8Ayk",
  "key35": "3irQ7VPcNxq6tbWPW9fjp8rg9KqaCXerHoYa2UDjxE6WiHuprZiyKt6SXu2ZXMTFejpBdZi7LXLRDuuA9o9fhayM",
  "key36": "2xqZyYTSbBddva1fShnHrEgxCA6vsgpQDz47XgmjUG6Ypu9YREWGBpTqHoRBCfp49NEb6mvMhQ8Y8ckkwViecjqC",
  "key37": "4TuNhjodh3WxEoFjEKcYs5P55umsM9hNsK19LcYNgWXbWFJSmeS7kNSmhoRrxR3M3VFbbakG38ZZHCfFEZt6kc29",
  "key38": "43tz9WLiN3czw2LH3EiANTtsKdvKCGDyNypjBMTeJ2PzA4WGs6MsFrs3Ynm8nB1SQXtsB3x4vobGqpnba4BrAh6J",
  "key39": "5EFVRPXJUTW2vbaXfLG3E2H2QNnajkj9WstG3Rd79SfPAMNk7R7ko6pATBevdEwAiFWRHoLfo6ZPtgdtcDjgHjkP",
  "key40": "32tkxbyYRussQXE2grz2VC3E8PK9e4hCpnSWSMPc6t9vx5FuPWAy6enx9pkbLuECPEigr7zePzwkGjNDMkmnuon2"
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
