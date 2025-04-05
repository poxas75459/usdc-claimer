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
    "2usREpkHEuUgBbfQJPsT3f8cQkFv4MLxzYv2Mmr8WfK6MYBNHeA447xsvJ9YhwYCi86WvypCPuxBXKLC4ejnPMjZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3HcQged7PkG1YHS68EA7r3DPbbv26v2hz7ywnWu3LBskW6yZZK3aRnvC7LN7ubG5e8Xr4rMCZEa8HK4TGTRUWjpQ",
  "key1": "4PnSfBvWJQsB64PFBRfkobx1AVnQttcbtsV7kDRUXP3TzicRkPhq57fnpS2YkciA79DMcfJUgLctUDXSt3ehbHzy",
  "key2": "5X8cA7UqREpYkqJS5HHiDdCiv7cfrgUeSt1sfb2wqqhsj4zoinrvPRSQFfon7VGW59oRLzm3jL4hZssB7935adVQ",
  "key3": "63TGUk4qJsGyeF14EMcCDzmhKdLesbg7e1VU3EmzHZpo9zEjtvANfsbRCeCMsrLwSQa4KFK7bZM3jAocgFWwfSz",
  "key4": "3F4C9kf3QNC76f1W9jpkTqDDaenpnht8YTv6MQWdYYu5bjhTB7dR1EZAhd5xbwMViN6g6tJkjDxF1QPRvUkr46q8",
  "key5": "5dLjcGr8Ecm5nkV5nGbHWR6ufXQTi8X1nbWTgHp3dpU3UGz2Pnj4o2z4WBVusWwgQYtKTjg79iJexyNH9zn8sx3R",
  "key6": "4LpB1WNJn6NsAXmUjS1mQXsNYpze75DQYwGM5xfGcRw8TftPiPTZuyzdzs9gDGjBo4vmic3WWHwsTqriArkVoRW9",
  "key7": "6h73NgeJR8jHcnVDFfHpFkXFWoh5BveyHL1AkuCydFM1JaDZt92touKhdWBwzTG3hqrAVnPbUbGBvosa2YSqNn4",
  "key8": "4LCa2kF1cW63oKKmFYDBw8fZhy8WXGya3xXqZL4SvAH4mBt2mC4zk45vD6CvNsSevZXpUVRT26WiHyvtTeg1ZprZ",
  "key9": "3L26E1uT7P6NyW3wGHJriNTfAouVoPDrCK39fWCH9aQcKMPATDw7S275bUYgPrPBGgg6Dux3WVPuqcKgJtqUTzAr",
  "key10": "bTGr26Jn8XJBReLc2hbt4EyrA9ZMBu8GyAMqtfwtHQuUWWkSMBdMSEhfbGFEwChShQWvB97EUJSCdTJQzFLMcbV",
  "key11": "2hnE5xdoKtyiKJ6yz1mdaAth6V7xxcEjWBj9U4hvCUuqs263NtkQdiVSgUkktVtRGGr1maXn9aBSv9BBVpEksmCJ",
  "key12": "5unm2m2vusH2VsF8xBEWCHxyf7HasyRBGhRcVug3UtMXHGnofWi2Q2pH7UpnBeJDksjmsk3jL2kE7Mmnz984gCnc",
  "key13": "36EUqUc8ZeRXEm6oKqEaabFku1yQxxEZvaQwSu9HC89BNBRzcGU4Vu5vpBFyuA7K1HhBXeoX68KjHX8J4LvzT9aU",
  "key14": "5BoeC6ehUrijMhX19RXqLnk2QmJrceM3PUq7etBxEjZEFS7Geuv362uVzodsNrGKuvzNisSbsq7URPp7CiYSpKAy",
  "key15": "dwkcrr67oDpxoNzJALA4ypM7jnNSs5H3YpM4ox5oQtT5hTpN7ZTzoWkDJYZePvUXvE45nG5HvHhDRYsYYe2RvMf",
  "key16": "64ybWqbMw2TeP4JsKS7S53MqVQX6M9KCWkUkPEm7BqAsRnLVX5VKQLrogiVPhChVPcutPAEXKSxhi63QRFEUbaXm",
  "key17": "21UM3UmZZChX2VBB5BK8TKmE8iSzmwcaChesT5LRrWg6hdmTfxUXcyv7PJsQKpWkAEeeTjuDS3xTqJiqUsaPt1fk",
  "key18": "2n34taeSUPWn1iCkBbB7C6mxpxpVCQ842eptqxtokzquyK5ueqj4SP28FLR3UMtJFsHBoPLFgnSh2ywrrbRHLhLW",
  "key19": "2rWeB94AHEwhdW1vnHCHrucKkCQbs9mM5E2URH71yXc1sti2NSiB43SFugWmZfYBZWfeCNF1XFoxHgnAdxxHQPyu",
  "key20": "AMuj8ufUtFtp2HwdFo2mdpxSgx88vC7qs74c3pTEH2KkXjAtRPuASTgGWZX5eb2Ch4wsTqYwKG63wz9BbmdieTW",
  "key21": "5ckL487zBKZ5WE5mpoLoKKSWDdXgcWdRSXFfF2WMe1VgPLdSXqzgLHymXd4QCZXrpdf7wHYQWxcsyPTwVXWHuhKS",
  "key22": "2JANzJ2R11YH1AWnkCC6gugQMKhjHRhLNynZRhd4E1ceeSo5gSAaicru41ycLT339ERfm9P13z8NyKUezAyWjtbP",
  "key23": "3BrxQz92t7hCBQcaJUfkem5FiL5kgDrMAHwXvPypcByZUC7ih1ghdBbuiWnieoTYD8cqvuKPUoRkM9HZY4RBSdFr",
  "key24": "3hj1atECC76a2JGy8reXbrrpwato97nd4zzyzukgd7XQmE46koEQykhYmCszJNFmGCLqjzfkwbg86SLU6p9bNGCM",
  "key25": "4unLv5fypUgmQknWd4GsTXhGoCgozPMt7tp35h6PhcicNZWP2b4h97jK1gMd95u73QWujk2QnBe8tsxZxRuek3EX",
  "key26": "3tfhXJeZTEQcuCZYXTEhMPe4Gm66147qQTLgd1Ndeyh9JbnJs25CaSYQLfgLyPss6shcgatpYSNhoCMgwyuYw4Bh",
  "key27": "PGXtFUsVKzrsAeYthoUG58Q9ZKY7gQiettufrMpHxNy3FDgmoRUb4gwN1jeNdURuUK3nLinZrg8uSG9WJ9J2DYT",
  "key28": "5kKt1NaaGF2us2WzExbdsSR7PbiZeMhvjUzDzuYVywjzjKjiiVDSVTfVaaEePbyTRoxPAfZJxpc7UDHzkfNbAkMY",
  "key29": "31JXKiK5qC8kWAfCqnavmeoZK9mVJjdGsvNPzUcXNLUzHhsH9HGt11BtQcNGpgeEWJaxs5PQYVKZYSEnRrJNMbyU",
  "key30": "2UnWY35Xg3x9TPzaNsJNX8MPurtBS18P4FznPXJxV7R42V6np4J3TdVeiZbPynaW6zEbtEqh22k5Cf68HiWdCWBE",
  "key31": "3LZtiFSEwu2C3QQaRJM73Vpgb4SDfgwJwNnPorCzj2oN7cKGwt9FAzApXLf2XbY4HXSDVypdDYcWPtWsuTnh1amP",
  "key32": "2w6y3yd8HyB1ThpnoZCa3YKvuVNmC2EyD44wKCp5EsK8iwxmHupnEUHZRPfk3ZMuS1GckcSpMetxFHScy3mzU5gs",
  "key33": "4jwDyWpvDgCMmk23RbEW2YrHpLtUy5JwsagmZggwGsRvg1YywNfMZR6gWCPD7PN5UVu1mZ4yHTEazFe8ge9QZ8s2",
  "key34": "58RSEyWrDbHVffNejfbVWXJV7aym83YEWh8TWkCPNyupnJ4Ni4hYV2q3L7fmH3wmhHGdtjaRBTaNbsre3EACNoYa",
  "key35": "5wHBbjaV7h31fnX9ruQ9K8JVZ9eu59h744uWkEC3D8ptU7a478H84H8u4wi3Zo5NE8TeQ5SsGsXAbumQZGhWAkEb",
  "key36": "wieQ826Yutb9MUehQy4Htk3edRBVcyw5XppVk5J9huuLFJeGYQUymLVMhnvZHzfeC9LSRUqB3coNSEv9AmHoDHd",
  "key37": "47ZGhSF9d4QUHRr7Uk7qdZRxeQBdzmZdJ6DnhpeMsDCvRJZdmk2zToyMowLCRoovu7StvXUxum5a3yYwuGpM59Zw",
  "key38": "GRNXdaWvF3x656LB27UNXbPYBAU21dKJuoJwMtfjkt7kS9xdDSQtRvDk6vskDstw17SLYzt7qfpTQwdx4yZq6fN",
  "key39": "3pAXFJd18RTjKJ1esvRQ99gyuhReNVpXu42m4pJFwxHByUprmKLcQh9NXvvuyPSyB2oocjfS5QLkAQKpmiDi96uY",
  "key40": "2dYsYkiqMmXSPcmTCqQ3WbR2BZbzC7FPEbzgb3KPSS8Dzfjw8xw5k7UjS9iJ7nFWQY9veCZq4m4ui4iPXQLT1Y8V",
  "key41": "2SrirmKY3cpEFMXSrBweD9pvYmubXaH4jRXPQt6wp9mk9gE7LqcXL5zn8aKjbcRMBLc4BqY4a3fWR4AsmodjvH8Z",
  "key42": "5otLVMhDGK85NVabebrxSUdkvW5tjaKDHZhsQCVVUQv6ATEwRuvXsShLmjuP8Ym7JRrfNjKR5NSLALhvPf6UPeuh",
  "key43": "rpguVsEYjJWd8Q13FrtPza4xjV3JV2Py1VekvGkGyPLwQ8yaLW1G3X9gLR7D2fFJB1XZPxP9jMEHWdCsCgRPffo"
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
