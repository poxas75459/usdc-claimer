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
    "5wZ6FEeGbjPmKB2drPQ4vXf7EJXCwCiuDAfGVfExtjPYAyibcgJgDUkVf9qhHF9eqfiBkhGcphFTGkCAQ44mKdpY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ac5q1mvDfAJiv4rv7zoxJygAcfnpPUzCt2CkZnJcNp825YWmDS9fBjQXVckVoqsyKAqLywUjfwMfchw8GsnygQg",
  "key1": "4jcZ47SsDYJLfsUyvjehF86i436gxuygEUDrGeXHr1kD9iE9tRaUuf5WQ79A36bhv335RgDZjAdWqgGU26NVnZWy",
  "key2": "3W3h9uMozuuPoWxrptbQXkZS5jTqG5tE1ESoQ6umWTp37sJvHxnh3HfdzMXtp8jL37Wt6b2iQuZEchNXY38ka39p",
  "key3": "4EfPU36WH18Tp4inn3p7qgHoc6kR2dnbBtw2neRsHk6FTojSLPFYDwVaX6Cq17tEyJ4Fbkexc9h5CTfibphWvpHg",
  "key4": "57Pn7kjz7g2JyXVNy6ZbbiA6LtMXBPWAXCLKegTSvZJd1vaX6T4GBXPxXh5XnygK3ReCEuxchBrUcmLMxsZN1Fgr",
  "key5": "41kPe49jonzKAsxdDah5Byn8ud7fVay3MWVftJ61hc4BRYvLwhBhUWRAumJguFhitSVxFPAncJFeP9zVeYEDEgR7",
  "key6": "h8VpMpDLzHUyZW61qLfLt8jZpstSg8JgbzjkwU7WKJ3X4x48dgSa5aoNXpG2k918Vw39BZuNa67H2Uf7Xf8hcMK",
  "key7": "5Ek3vR6AiUnjfeWrXFZGkZtimdBD1RpBkjzTnCPcjztTDk3A366oj9XKi8a6p9LjURj6ZJfhexTR6wNQ8Yqzz4Nx",
  "key8": "jFQswn24Dke9ePpx7GDDCCZRvwDyv1AXq5QUvNsvPADsgJvEd16WnWjWNKjkRqaUqQE3pPvFWaHe3UVDybmzCTq",
  "key9": "3kXtCNEoFwUzzi3n14wQQTZZXY5mezAuX3Y7QvTPcihcVj6oaMXfq9wy95yKGVD2EboMeWn8viLUBcWvQxsbsbH3",
  "key10": "2D384yNSr2P1n5zGu65k9XKbQq4oEJSRXQw2TVWcfxAXjhxAW1u3T12WgYMCQ5a4hhZR7Q1tX5m8Js8xVLUZhmVj",
  "key11": "qSzXi9tttJnwSdFuPZENtv14sSyexeDzgvt5WmhhCVFfK9NuziUDktAyhPDbJJ6Gt2g9RLgjZST5vDQYU2ot2eK",
  "key12": "2Nw6b377CpwtgdsQmPSyRY1bSxEFRPKB9166T9t7mqkrDQ7sLYmwiw4CszmDmADcac9cKKcpqVScUodLHWzhSnyg",
  "key13": "3y4sXzGfV4J21FbUm8zmjFGdcEbcBSnjMbmjggnotB24TXmN2A5ryvZS8Qso8LKu6Atc5sdU1KQWJR8ayRSRbdFQ",
  "key14": "5B6FssxES7433eawfPKXr94DpCzwDYa7dvwbejp78k581MuYXEjwzmEVutNnrCUn7sKDuS7DS6FVmCmuqoKTkp5r",
  "key15": "syZk2rWPyDa1o74PpUwkiQWSaPojpK5U6tdxTwVBwLwv2MC8Xz8ya5f3mWQpbCMXBoKK6H7bHGCWMTCrwweXWth",
  "key16": "fN13skWcSrucxtenexxpwzEjbUueQAK7yXEXoaWftEn9LpS8AAsp6wAoaUsd2QCDdUc4NVhQdCGy1izG9N71jmg",
  "key17": "4neqhfVAKXmTdxVs3JPYA9QdeFNDuTL8c5s3KBZ5Apu83F8JCAz4qWEHtFZZEJRSzsAsqjB85vKhuhni9eu4e89p",
  "key18": "4fRpzsJJCMNKAwo419UbSrF4uDNAfy4PCo7KF2fQYHKXmJNDwCuwQoPhm6GGwWk5kezzALh6Sv7FBB4PFQRA3aHY",
  "key19": "2VFnmycQaaNmDTVTE4y7kqrvkLwq44ymxpqdgLX1mvj5EEwjhJicADsHVaU5ekVu8YPCnjFRk3Sf77QL12wHSKy6",
  "key20": "3Hd8Nb8PAktuVtY3uy5P2kyzeLKS11H6eaHXmESgbjzmM8TNHVZusWWy5r2ozv6pXHM27DX6wRBkCXYSKhk16hRf",
  "key21": "aLwut3R1a1J5i8AELbsGYckmdEGUsrefeX4tKwEDYDzs4ZdcQmuhJPqfz3UbNZ3PrLQ7RXymVHAVutWJjs2mJpo",
  "key22": "4auMYrUCh47fhggNynPmyuxw8X7jgk4G6kRY9v8gmZHo8Cvab2kzy8qonBYJyGeeozpSvCdezWBXca3iSp8usLAY",
  "key23": "5u7Zw3JBWu8ZuxgL5f3sirqMvX2t7QXAyFDJwbBLxQ2CbRhu2aM3P9scsntiwuPXVg4Qu989e93rTm5T242wRBSh",
  "key24": "2yzaVqKXhVXA3wngfRZYk5bXwzVyFd2vnGwonKKti7R9FkzS3U8WTz3Hf2tARUi3r7Nux9DUsLjhL57U2xKYHFR7",
  "key25": "29eTWrph1PBADrsjUxADR1kYsPP7kVn7uazcteNQyx8d1hWLCCB57CWgjKVMpnmhQee1kvwDukPBgErYM3wtrtK9",
  "key26": "5TmHwYi1dc4kikbZF7yLTtwza6Ms9XGjFeRxffz4Z1cKhtDkmZWU3TyuvQzxP6jaNzD6Gd3jup5opphg7zocELN9",
  "key27": "2AFNgxhFcNUaJ7Qv3yTQcpLjN7g92dJJWQ3jcnxeQmw6vrsEwVPmGxgUgV5hQdxKpFQjbozSJFcHLWMtDYVZ4MBf",
  "key28": "3YKReGYDtD2pVhqGRkzG2VHgkP78JHUhKP2zq698P99GTjVUfnBbMsewARiuF1RtMFC6mv8KCzDpqb1AzpFfgd8n",
  "key29": "5PR1hctu9gVRJ9ZvHfX9VVRiFPDeyL3vYe1aFvyCgp878YXMprRSRbxqdutcB1byiKMQZ37yXJDCaQkwpQYwXcPN",
  "key30": "4rtExBfXsJMbwhPkhDbsQgoPMPxz2NYsUXRH5w1wE4usZVXv5D9eCf46yeeVgWoE3yS6y7bNLRFhjNbNPZGMHPfL",
  "key31": "4BvamQctepifGNVuqpLGdZW2HmQvSeUovgNiJ3Up4KpoPhKkJ45UDxyWbGimbr1w6ZTradQ4GWu1cQAV1Nim9aQY",
  "key32": "5kKAbcuxesJRuvqen5YcibQhujaXnizLXJi3eHUSPhVaZaf3cAMoyWWCNraxtgu7vYCw8CGnjtkVfm4ryrHQ5yAn",
  "key33": "3jZq3GkazsikNpSbhyWdaLAavchLkfjWJyy2cVWEbSefu9gHc9NA38BSEQPoo6h4TQv67d7R1a2BEGJvnRn8SLPo",
  "key34": "2CczD6ff2j34KjRs2tFdPGEMquMat1uoctFRsEHVnbYZpY2Yy7M8DgDzLEV5iHGLu47Zaw2hCwUuanxvENnNVbyY",
  "key35": "ouovKyx3rmnVJMH5tj5N6tGyrm3BUDBesWtArrbqanS1uqJnY9HgjgR85riaM5BSpKmYKVeaAbvyNimCRdsrj9a",
  "key36": "EKS5ZVBPYePTvpJ65Pie58NErEH91tSsm5apyhQ9iwC9g8AxMrpt2REjV8q7Kg9xbz5UCd8ww1bKh9YJHCZBqAv",
  "key37": "aMWc142aVquZvgZ5YDFVuVW2UVqmAXGae55BVep1sHkYLzBmGKSnev18tUct1sdacf3TspHednxmcjfJ3KTQhcr",
  "key38": "5ayjBPU4z7iMPFBXtArUXM5VvZUXUxh1MJizWE7JmmUQMGBA4VU7MAt1gWkwJGkvdCivZu32aB9coSAb5h2BEGck",
  "key39": "3x5tFHw29P7UUPk82QCbuD4xqc6WmMCaXMhLGE7Aaw7pxqrGGGJxGzLNfsP1Bf9hQAB6cuzCpGD774K2xJC7bH7x",
  "key40": "2ZYZqXnKn7PPGcdXU6DavjrkU8ZmWyrStaEqZ2d6rBCKr8QvyVYgPPXgsaDUqThaEd2c3aJVH2PBD1Q4nN1XRoeH",
  "key41": "4gdrJpooubLsVnbip9EJHrRnxKcLnCQkF9XkURZvXXkFGDufAtXSRQL41kdc6ERE8kW11maod5A7Mm31CH5siBb5",
  "key42": "2NVsaUHKp2CqeGFpaEG7qUDQysBJASbZPgH5h5G7spdLwxA3KYcLEc5gMaEhjFcx4gj2qJ3ovsAn4wScnR1LoWun"
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
