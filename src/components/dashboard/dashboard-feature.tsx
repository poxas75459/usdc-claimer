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
    "2eWDKQccY79aJZAZXGoSv5yd2G88zRpiRchSaw1LgRAXpJWEXW6URSF1XXWnbcctYFRsZHVSBCiy1ubhTCPCVcmu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4VYgqrrXcY8jQNK1xJ3JK8HRPt4UotXywPBgs4DiGH2uxurpLqjG7KezDDCMCxvESVBkHg6z1E6KYkgcafGCYix5",
  "key1": "rdbgaX6dY4ZkZGrnhFiCtPzZqW73u7RUMcXawJwF44Noscfr8kKRYmtPKi2JNYaVqDGi54bcPRMbKNvZrHXJmLp",
  "key2": "3q3qxFo1S8jNSV9kU6Bgx489kmjPtaZkoFJp2MR7gYbY9YVgnYh6nVvNiotASrNTp6ms47Hy2RGJogqXimHDFCd5",
  "key3": "wU2bTWRnHqESSZGeWkfaScVvn5yEA9qTN2EmqHtvLkTstYVLByPQb6DNELk5SbbidatZMvP5F1KcHTZDKR3ZL2D",
  "key4": "4R2y6p8j87LNCAaS77W1MpmbKcmzHtA79D55bCBjtZoPYQS9RVcJzfHwiFpUFsBti4HDfg93sro9HjMckL9bLA6x",
  "key5": "2kUpY1EGkUWv9wLs1PyHgw2EZFbhvNP7Erc3hHfUenAYiRZZznNuvWfeK1XLcetKr76CVtYnyYTUpMcGfMAQtWAb",
  "key6": "2XVDChhSLhT8BwsKvqM6KNKnJN558TEiPap4KvCNiTU86gpcf5wiU3VxPwtRkevQUvpUxgVHXF3ydBFm79XwLjwR",
  "key7": "2V1DD4G4rA7s29MowdJnzNkDSdYtGgLQKDxsp6Jocp261kTQmEjBhhCaqu7KDQiMgE2cULUcuEnyVgoPe5wMGgME",
  "key8": "hvnKfPfustWKuvD6g1s68cErfw9zNqeHzVut9Ms7dmodvwfzGy7YAmP1BFzWfBGXYFaDBW5yPXU41W9r458KNCK",
  "key9": "4eWqPm9AzHg2g88NschuzPm9bcBNSJ3QksP7im7E2SKtzSvDt5VdKwT7g3u3MXpYfAezqiHGXbWeGCD1TT2HLzv3",
  "key10": "hnaCRZ1Xhi5bkNRLprPZMaXNXGEZH9Bt1vDvBS3s5GtuF5QE4XTTt1pUnKEf1ZTz1jg9HKcKSGYW41hd551twdm",
  "key11": "2noVEuAQ2THynKZzSe6ijR9ud8r4VgtddpoBriaou5NBUdiGhtHqTxuUT5LpCeZbToye6o7UNXsEgF69tBGCbN8q",
  "key12": "5oH8BxH7P64nJbBZde4zy36QmoFaQ8bFztTWE8yvo5eDetTEthWCiXpRSd9c7sCo2ZiDwWypNJ5udRA5nF9g14sS",
  "key13": "3rLBLZ6e7jFCJoRNC5YFycyQ9aacLPsXEioC7g58BJr62cVjbCNDa3X2MUoJw9QiDiQj5hc79vrgEN3VFyCq8VTY",
  "key14": "3oMkK8FDWvDMfLtAYuvKEkgDkxLcZQYw7NfNDPPRRaEjkUUcSr3UUuxAg7h6Syq63dxHDCQc9taPxxZfBePFiyQc",
  "key15": "4AfwxAYjxf2eLA5oddwJgfa5kF4YbKZBvJtKfFTeJfE2jQ21X5xyJ6XrUJaBBq6zRcqRSM8myQnD7SGfZqgH99nK",
  "key16": "2LRjEwjsWUFkho5Lbke15Jgan993evYxPMjt5fTFULbnhQ4zygQcAXTPzxGjifgqieFx75NczWYk75oMUCu3MZqm",
  "key17": "G1pnchmPcF6cMDQoi42iAtHdcftppbUTdMQ7aKhYUBv7fySy3VaARJ7EthX4LKPDaBYzQRX5G4mHEnuDxAiSk1t",
  "key18": "4VPFg8V91x4UadyVgVGhdwatZgeRHf5ahEsE4EbDSzDy8ua9RAwHXxb4swQkp3Sqa89eLJh7qrvkCwQf4ZvEMGGG",
  "key19": "22RawC5FNSJzmGaLDWxRB6ZX81GdxCy54BzzkE1jXgqDs79uhZUY4rXfYHqLNehMQuEW7qW9175VK35zrCywPgbT",
  "key20": "4awfstwiXFBEwaT9g6E4UdHn5BAnCur6jZvdFdMB3B6UUEVWaTHCQeSdB4MndHTBw4kbTvXCyuXshS6Bv1VfqWFj",
  "key21": "36C7f1nZyEmFi3GRRRTQqw5LUBcPD6j9QLQreJ4f7yPdx4GdGDAQZHU8E4A6Y6hbWe7pL7mPHBgVTkbkyUiJXWy7",
  "key22": "3pVDktYW3obuDGRBL5ooEhrkTq2PSNbCKs3kvsZYQXEfwqXQxrmX3mesMZgFiN5ckZoTZhTZ83CqeqBm9NFjmNdq",
  "key23": "4GAwmiAGW46n3mQqj2XHadqKkxsr5qHXY98AArQbtZDatDhaJ6qqqMmvuiAhqTKRubdYtpf7JJT2gXQo2EEHG1e9",
  "key24": "jTo4fhE56nLtkjqxkYnVk8uRhtYejfnZooftcWSD35unML61kvrVwszZQXupbG5tkwbVL7MWVyZuiTCDVCgyeid",
  "key25": "62B7XL9drqxv81ZjQ5vbVznFbsEaeRPQUq3vsA5q2LPauHPpd88Bs18adQX7APCBSihGB12Vg1CeKpsYJnvGrw9d",
  "key26": "2WKKSCUkoYZJ7yLA34pTshajknQ4tnDuv2BNBQtk76VQ3cwdafvZV4nT7jb9SXjusy3ZiZqCY6X5NH1HnyoFnQJX",
  "key27": "4tGvej8Jz2u8VcBVsefJbtJJ7nrCSqghJACDmshVU5cVFN5TFMr55ZWpYfQjQuC4Qv7TEEGX8Gem93M7MtMxZwMe",
  "key28": "3ntHBhbcfs1ovp8nW676W8qWCUoUVfuER4keqJZgNwMKhBBwHMiSKUN7A22onrha9oqUenEiJ9pB7sqfjQMcK8MB",
  "key29": "2vdAAAP4aNsHUkT1MyuGQNKUutCRUyjXaZs9CUXWR2U5iorGxbGJbKFPeEDkYkiyN14EZNviLveFGukG7q7UEm2F",
  "key30": "58sFhyV8dDF62d6gtU35s1Ed2ju38zCFuEGuyVTWyjkEeNhpTeGURnjrGoHgiqjXU4ruX4HGyANum1aCx6gwdyVp",
  "key31": "28gZ9R5UWv9ZxeEeanXEnUDaJmwwT8txT3ZWSTDz7u4MJnMCGwSbwKnKmYwD12JUXNS5XpEe4UZeN18cfVx3yMWC",
  "key32": "oB5vFsGBoFaAesA9cFajRgaxsR4Up2g84e4GSjUKkmwkiVj72Hb7xo4P43863oYS7jP2jFQ4PUmvfkdGvVLfyyd",
  "key33": "4imiji9wj4pvdnb2nbbgAi8DLsD3apmwr4N13GyNxPuSoWaaURzQHsrtVjDYWYWHU5Vw59m44ZF6EjGoCBBcJrqS",
  "key34": "2xuc6ZirE9QmX1LpxjcjfTufq7ursM4VYaDH7WJAQUwn3B2aNPuiv4vVvqb6xrRUFE5SUpHpFNUei9J3YVNmBDNS",
  "key35": "ddKBdDp7jSGySBnnCV5J5hVKGfzjT3ePENpdun7nPqDLEjrKEXSq1BUpBJpjpwtWsHwFM6qZDmhe9zXhXPxxBJr",
  "key36": "44gV8dJNfQ3CBdrKUgHQLxCDtvZdfYJcuZvDp1SXLgfzGrvwAbHFqeZeZ8GYbQne6z8P4fjpdbFLZ5hq3acDpCk",
  "key37": "3RSjAvRkkkbPVLwJYRfjA8xr4EHxo2BdLXzFznkKeCfT6ZiCMSbcgBX4nE6FTdBF1pCSmxkwtq9J1WcbtytneeoD",
  "key38": "4xW49aTTpX7yXgoh1hTREEFrmRwRQvZrji7fvRtaGEPj4PUEVaaZVsSSvD9nWkT9kXc4kTPKxipfNy9yGQ1Mug8k",
  "key39": "2BxWD4naVDzzGSXUTgK5nBoRh5gedKLr1pw1LCCgGmR6T55XLw15YJn232LG4znPZ2mR1ninUsBV638HyCioy93W",
  "key40": "32AZGGDR4z9kDv3brYKGHtWQPdQt8SBjcm3UMpioGCHWmcJCcaP68M3eXMKzQBszbydsvSQJNrhGM8rJxbfbh9hL",
  "key41": "5x5fFQVNZU4RKHknRaMZ3mdqCJ1y8mFPCVunUcPzHiA93KpndKeMdVX6ndHrd7QXziPtYmdUY1wnhewMEQEk6j3d",
  "key42": "5sSPCPqAF8FNbYXeTdxdTLLtLKdvkBJ2MDzTRHhSKoH38Yv7QAiULbEFY86DsjESUdkbxBLw5zyxR22J2Cj42kXv",
  "key43": "3Jwj4GJ96bPQhauDeQqw6TrwtX1i1X58MJA5euCocnS64NaAEEcpZt2jMKZ7s8pNpJ92kuD4xQhURiCKN12sFzgo",
  "key44": "5cUcXrufRS9aQsQZQQGnG4JTtNdwRUNLJsK7hoYEBDPuXE9JTVQ4f6SYGh9YsR8sHkyeFN3RY3b45RXKoi5kofCj",
  "key45": "37LjNBpVmcPoqUDi1kjPUhRBUndn9EdNnYm15zrt5oojckPqMnbufdP1CsfXZvNXBKcDsr8jRqx3ieBnBPcqoB71",
  "key46": "5btw5FwoyW2SmphibT8F6eYHy3gT32UeQFgjDVDbjAkDD9PeaQXvXPzdj84Q98pPpcN6GxZd1esC71PGtRAPftrb",
  "key47": "zJAxwHx1oydUTFM63DGEKtujyY7PtP6Me1Pnj9doyDZ8RSxEMLAyD1rWPNKhFisfeXQd4LZdEkqpPKrSkLtk5yU",
  "key48": "2dfBZZXfZ7brLRqCzPbKewWcHTSrsVnjpkdLMxvVpYQSv2b2AWjJsfqnQxRmbtLovyAUrDTUftbYbbPC4oyq8Fv4"
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
