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
    "58V4ETWrVmHAPVYMtV6gTouFtGnjyV2TkwGLJEGWKYU5yUrRg5J85K5vJtRFedB4XPReb78E5XSWvySvpkjChYBi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22RjMttdxikp8gmFcwQ3PTDZoQvuWp2Zb58G7kYWD75YV5UiqPuQAmEgLsVzxLQvHSboLnJNXuvJndLTboeDxezW",
  "key1": "2mnEW8ajbFJRrW9W53Sipv6aPvNuZvdoxfBSnz3p3th8YenxHNYbKbaYs1maPkLMSgq2j4CujcYCvuspqKAykqGz",
  "key2": "43kEKar2J3aXBoSkbjKKWoWXxAKMNcGE3NgU6iSFwkipPfub4hPctfRrMnMu8hk6RPmBiJtDBBxWrnxDEZvcsfaN",
  "key3": "4npT1UGr5HRBd1iYbvQ2VYsYhbRMAN7rrXjaxRdDQaBka3Z2SVmzkG2P3FzUoTZka8tsiy5qPWCaDuGhkSZtUTzf",
  "key4": "5LD3mCNf3Ce9nPHcsDuNaipKDb3GrvLye5xSkwxDRYSRWkpJvFmBdbCTmCvhgZHEoCrGK8u58TW4LLQrYz633wa3",
  "key5": "w2ncMKVVa17ai38YJqGBchk1HLG1QVWhSC7qeihFfQtUCqbZ2nJzff3u25LPZJ7TdLF2EkrdvKesnjWcDscZ4Hu",
  "key6": "3AepDpNevQJUHvdcxwUk5rCfMivmighzXmibn3Gw961ziY3E7MQkVcQyTEbMUW5o7aaankCY7RDPKHi6WgvwwoUo",
  "key7": "5suHKdDirECpt6RRhWZn6pAeyuQo6kynmQaQLkMdN5qhEUU3dzPAZhmZaZum7DGr5BjhxRuhXgLDkTUHQ6rZruqV",
  "key8": "64MkRLD3FFBMyK1ECYKQW8roGYojNoLzVEUGrSFERNeqZh58xkL2Thhf4kmWWh1fK8RZ4MPRX3pg3FY5ZJatGfdV",
  "key9": "4FituzmivzwAUdqDeBU2Senf6DAiMS4M5ao8VXQyJTkoW828ATgDXfvmxeWfzTSALh7w5FYTBv32CavDMciJu13y",
  "key10": "33pokZU2Ypy99MGVudBgNnuQfTcKFde6ULejL1xfGNRtWkTqRNbpPqCq9ns87RHTiPEgkjuvzuVYtvK4LVNnkWg6",
  "key11": "3kxZBXFTS3P6MH9wUtvF4BbQyT6QsjvzaLjpGc5nuAmWyJuVrRGjn6RDskwm3gGrvmJg2fEVxuUmDnQBLga4PjRu",
  "key12": "5GnAFUHwHrUTmDGoaF3teZeCCbTgHvPZpXvg6sQmazYNruY5NXvH51PCZvAUgmDZAAc1o7xEjYprnRQKZfdv1zcy",
  "key13": "2BtktCcmvNPdKy5i1BbzkGskMHJmgwkjizriEX7Hg2xg1SQekxB3L3vipDR2x7qNDaHUEBBM9ksvxQF7mM8YmPnH",
  "key14": "4WTGfa9zHwmmbt7hdgbFnRG7e3K6nrs5mzWWAC4gP7kwt3wD9sdYVZHXTWcFiQL8inVFpPb8PCgHqNjH2rzLBwE9",
  "key15": "5s5am92E3ZjRW2itzc3U4WRV5P9B2MrqnWQjGriV1iydPdo6heB2wnviJddnn7UmYqzc8uidvFCpegWL4SvrdFhc",
  "key16": "3zyc2Na46Qq5LmU4d3cLQY8uEKAs82AoAYATRNmRyGePzU2VPyDzzWdUPbV4z3QCJgekN3dsLViaVFUVRFya7gSN",
  "key17": "51TeAeZzyXQVtpDHpTj9jYjBQx6e3Ez5fsXoQk9qHx9he6VsfJcJCs3xyqNV5o8Z4LiXPaTmMDKJuKJqaUMPCrRu",
  "key18": "5AvVsWdK7cQLpE4p4FTM74LYEJTyboZYBR3A4Vm3HEVLLR993VPdGsXtWXm3K9CVDWHEbRtAYfcLw4516qeKW1gP",
  "key19": "5V1kMEYFk7mn8wedgFUMeax7LB49twnbSg3kMEnWrRBLUcrKH3x358Zu7vTCz7KSM7UiTnGq8AYpMQTfcBGHLs3x",
  "key20": "3j6adHTianou5uADZuCsquCzhTWNSdsMG1HnyrsCFNVHz6b991S2FcxjCnmRw2QgyXwHGePacYWXRDnLBWyPH3VB",
  "key21": "5Z3qirGN7GEy9PQAyen8TNsasahdbdGwKaPtLeRzgGowDuTRjfeDhgVK4y2WsAyiTCQe26ETKQdgsyzW8D7FoBhd",
  "key22": "4nn2mMSMgnLoCayo7eFZRN5Lkt8LjyxV9Zqf7h51ZKYogf8q114hT1xu2FWoWGbHrbsmk5hDDSN9FY7c6fAXwGtE",
  "key23": "64rFkXJGfzC6h6cCNwWfAJeYYp9GhEsfqVTGcDGSekbgT4LDScQaJYnBiHbfeLFgxq24krX9dLvj4TKWDxSSQ7xr",
  "key24": "3RyjDvMcvKTFK9BX8mZEzWo5VV6ppdfC7Eve8MqGunERoghXZgxZAsf4687RM2n3jFnYZ7m6dJxZjTVBbedbbGSZ",
  "key25": "3oddqBeUWXX2EEZnjmwrfhzigdgvNbfs9dCQZZDnvmyNHF12MdRoxKABaPfxSUgCuEPyNM6TM3exVXVZVydHMv96",
  "key26": "5SzoirEhsqXFvbqjHg6jmPZz6S1NmBV2fHPZcAzyLUez93uKHQjamm6oLajAVb88CPxoCjh2CDRDGPQwLbL39Xqh",
  "key27": "4YFqZzAP1mdhTkoqgyw6Vbor4a8RGn7yRMmw1RfzFuYHgRh9Qt4ADp2tMjLMpkNnu8skAhNhqXRCZU7i8wU9ahqG",
  "key28": "3fKDiX1Uh7SqoSERUED3Sy663DXZGJZjxJ7Nscvb6puDXD93HnULBRcJSrtqAGapPzfmobcbe1uNBvjFbf7Lr6ts",
  "key29": "2h7f4CeG76TXjRZgzzRV61hp63Hoo7px31VKL8STfVDQAdEorBL4i4DbZKEoKkFkTdSbFgVU61uhDQgiKkrg7xSQ",
  "key30": "2QqVvFcLN7BXcRP2x24FcdxrnCWULVxuKDrG3ETfj7ASYu58dv46x7ZZ5RG5NWGF8YCVpjyGf9A8ANAUeBqzH7np",
  "key31": "2FYA6FxWBH9RTsFJ3Z4UMS1eoE3eyKT5n9RWgmcmcchsjJjKvtmxmiFw8jvj9rX1EuN3zgZ2xS4zLnrN4Phx8UYD",
  "key32": "ysirbNfvEDCPKcaLAtWGtoY5YuAVdvxVMbQhaPov1vwbi6n9RM5VPD2J23JpxuZvycQxdufqeTejZ4KnfMqiM6B",
  "key33": "4PPyaNUvt9cVNmJyQAoy1xGCYYRmaeEZ3qSTB9wo2PDiAYop3r5w3jeDzhBn89wmicp9Pt7A5Qsk9eXW4ZSFUV6D",
  "key34": "4W9qzrCnJoHWQYVXpkwiMEFFNkjindWbVJNQDm8KfCx9iSTtLwYeQGkghCeoffFrkLFBJQw8SrBu41qZpkkSb86b",
  "key35": "5fXFGSWSe3BrhDJGy9d64TGD9GZKuwFysJSsTEHpCuuPLtLUh94ngEVjFHdJz5yxTpqLsVqWDZ66DWhJjMYnPXQa",
  "key36": "4PCbNi8iSMp5zYMBaR7F9hiFfNaBEaT5EpceRuCV6aTY4u5pi6YcRwrTnfuYeyfp8czFWz18Y9UjHaK9FPFvZ5sx",
  "key37": "3T1hsuuCS4a7js8GUBtXdiuoa9ukMeoSAtfCY66BMCL4iasrQKhR4FRZZrxYYvY5RSSj6mhAWeDJxGcNv5DHxNCq",
  "key38": "GdntogSZzT5GiVDktjCDswPMHQ44gUzbH2NMCBP1w5Rswhi6SCYZccWha9rWyeh582WzZjrKS5t8jJZByqz322c",
  "key39": "TyMCdD27N6d4U1yNj5kjP7fPvTSPp7mEFCpUhE5myYVaHAaiESFRuFm7sVKg2h6K5puYQgkzKvxNSFzfg6jLprk",
  "key40": "5XhbkV2g4k9VKCzABmFGntGFG6rSmnALq9QkR17AU5TL1UdQxiXLPZ7hV4ttmjB1vAHaauEVkUr4PnNdvyXy7pXL",
  "key41": "3apeNQAVqd67goj5RWq1395eWwynn3zd9cLwguPu7RoaWF4aKxVt6yNovCXQ62hZEy4QGzTgeZdU1q8Rfb9RXyhS",
  "key42": "22n7FYB1AfmfxP5vRwbJDnAYbsDRWXw6q7ywjcv4HqiekYoHcDoJsxHqiGjoLYpY84NCCBBibvn3SVajCFgJBSum"
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
