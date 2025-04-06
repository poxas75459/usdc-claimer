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
    "5KV3uubQCUjaJgWz2KpibvD4KGbV1skbWcNyorKoEKYTmhsCcKu3e6mkGrkrxnHtFoAZmduDZJjR4czEWSmWVjyT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2d4HZtxPhSes6fEiXN1Jz1fi4C4JzTkrvKuoxVdpfhLPMah31gGfny8dboDsudpXUbRykKymsEe4oTWXbM8JfAag",
  "key1": "2SwoT7GDZ2c8ArRKY8514oK8tTtWpxzVz8ohaNgiXwVHwXjmDXqfTPwHndPfqViGiJCvyaQeQF5ajmfyFgrZuYhQ",
  "key2": "T86BvCcTHYfmgCaMoM89jSfaRqkEExi4FkEraYt1peSm9RRXbHsYdo22gkuki44JpWQzsT7r9AX7y8wpCpz3g2w",
  "key3": "M5KK91RTBfjEyCaLdQNwSmzvcpaNprhBsNEpEtrrY9ryT6ohSpFP97RAjKNCRdJymKxXTbEALFuQtbPG9SASNnY",
  "key4": "N3HRwrVRqWuyAiP51Rxmgwsk8zWyiaFgYtV6GvKr5AbYvotZ8wZmSf7EovP8SM74pZDrUoeQHoGzonUm8waHWDq",
  "key5": "5iMVHtB8zNL1tpdy8SpWgKqB4DJJ4LHq5Kb4GbutHf6ZspynhdG3uCvez6TcvYUse1VGHv6xYsunR1X5pNqVceR9",
  "key6": "426AMXhWMttakaEexiqBApoTsymCesvoSZMPqfVTTCs6ztihdYPLgq8mdcrNzASJGPmL24Aj71KPbjcjf4UvDjN2",
  "key7": "673g4ETVCmja1CfLXWoysWco1kztXEpgVcai19Yh9B64BhuiySGVsF9rktRTbAd2UFaRh8WvVi3egNn3ix4DAzut",
  "key8": "64daufjWgHRr9DpyxLjTUugAd12zcxKXk2kZKnhoUB1HcZZCsB79hmh9A15p1bnfKHi8tP8FZXd2DCwikBWmBKEM",
  "key9": "2B5kPye9RmEqo6Sszo3pwo1cDmMVQcMWzUosW5jZwSG2WWih7rVEyxM5xpoZUAJ6Ligkbabe1hnUCC9TkkDKcgG8",
  "key10": "5reWmUkKATbZ59t5sM74ybdwm8ZAmsnrteUzsNaKBQvPpo1853gapocyUDctj9sCoEwYtyShnwqcYzanR2LCjwTS",
  "key11": "5Da8MuuoWBXeHyNWQpPduCCiAi268DNTxZnugva9LqiTXBV6AEZw1pHMzn5n47JWSSTUc8Xo2w8uAYWDu3bAHJWa",
  "key12": "3FdrM9SC7aFNRsmnxgqz3JeanEJUqo8zZ3C5o5FA2d3LMMFx1RxY3CnJWSLhQtyLkKqqWBf4ZXeiV5vfYARhbRsx",
  "key13": "5jJUCkqJgzmH6TuMoKzA7K8UMbxkz1YVGp23X9NTdwnQmLZFWLvF2GWp6sEExaEapd51Jvp9oLBbVNWEmYyaqMsm",
  "key14": "2AFydd2GpapKtgk5B3cReneN5UddqBy5GRtfXpgwNNNd2CCXzocBrMKf42pH1X1XVSXamFs9gUA497LfJMUkczfR",
  "key15": "pjLHAWUPSwnd6aKJ8dGsCEFDZn2636376imLCUACpxaFYfkXLNCEFy1sdX6nM7k3HcG8wrPcjm3AtGMt2LWgHkN",
  "key16": "3ZuDS5QWi1QoKgA1zNtPr2obqvqihTz3VF6VmQ96KBYenu8whEDpWyUDSpmzRjSQg17zhW66MCKKubaq3qr1JWB4",
  "key17": "N2h4Xdfs7gHhSHy6Nd73BhPeAwrqhcNXeRCwnF4SGZpH52jPWApdVi6gE7fXcbZNZ8BAs5m8oVaaDApByce2kYt",
  "key18": "3HbVJJcno8YLATjSDQxk2NXjtyXUFfgAhz357dUh4mEg4HMFxKJhr8rbnP6uBotrUfXzBsVzbFuf2r9x9RvMSx9k",
  "key19": "3BcdWy9VgY1xVVpKQzkWbF9ayg7VaykkSDVsBTUFWuLCc6agdETcVAY3zrTuQLAYFtF4xmkyLy1a8P6KX7mEBWH4",
  "key20": "3EcjVamNGFSAGQqXQZheHJRLDoV5ZxWWE33gqCywdyFqTX9hbozGncd86X21AkxxZQdmYurpuSeHzky1aSLXmDCo",
  "key21": "44LUyzDXzEkx6T3CgJQw7hjL4e73UonFSi14asft3tF3bksdiAVLJANQNa5kpthiBaR7eG1hxmdR2LL1SHj4XmVX",
  "key22": "5dDC3QrbhUd1nGfmN4F9c1nNC51GbUjLm6J28XM9bYh8TBXRcfeQjTePhzn2nbCG8sDrDQoEWZoWL4LGFjAGWTD",
  "key23": "5nUZPR1poJFFDHczA8sesjXWGhrDzXkSq6zuyhfB3S8wwTRR1SVmq4tMngzoSt9ssLtLLVUgP2N4wVtPTtoitLXT",
  "key24": "4ELm47BXjV11F6obY8pKY27pKiK47hwgbr1wNtetftQCDV8CzHWARHDiD7BwbG8KBv3pDNvX7XoL3DfbGpayNvfM",
  "key25": "ARYt7JMoFBmydu4KVnRs18pZKATbJQLCd7NjoWnxyMLKCn7RtrtzQYjp9TBxpKvP5VU3FuydC9ENUSk68dmVGLf",
  "key26": "2XYFBRiiH1DKYVRTJBvYF4eo6in3CxS1ki2xG4XfWdmjGCvPxsVtZHLatsUSzNDqUc6RgRmF437VVygN4cD8DLNp",
  "key27": "hBv41joGhHudHAPcFwi1vZy9MiEw2YMDk4pqJwM8kV4s8pRZTBJ5a4jKvCtPLekr8MAiGj9jtENgogXMKQ88Vrd",
  "key28": "4jNjRcYnsP8SXoMFd9yEAwWEUSwF4iYKyyRB7FewHWpqsTKna5jgHQiWjXVostpxo67HcueNVANDMVG4GajiG6TE",
  "key29": "3VoB4ddKq5biRaAYsCKicDZQAfzWbpGp2fkvFxQHHVjPv64hQCwmjcmCBQoSgQXha3cXe1spyR6aE1DBcW1RjT4X",
  "key30": "28ETo45RK5VxtV9zPdNmoeSiK6rCh5DzGUixG32LntJrLwW3XGbeJGt1FdrN4mAtKty6nLb4htPgNWEgynDygHtP",
  "key31": "36wAye3pQVAsgzBYWuwbEhVMuUh4ot2AuKJFNvJi4qWpKW9XXkFZcuxCN9UPk3onDTbZXrMVkMJYAXBrjaazAfV8",
  "key32": "3sea8cikyYLQw6zfStxhWSUPEHjJzbSYxAKxr5kFQpmJm5V3TNwAUCs1uKxpDPVZwWdfabUMdLoQ3ZEMRR15FbzE",
  "key33": "YcV7Rrbqmd6ZMJRJAdU2EydGMZGNeeMHZN3f9Zj4kujEXak65zqTryEiwnAgNu16JFe1Um1RXGCAuoSCpStvnxW",
  "key34": "5nksbdpe5T12DEk4eNNJXCTTiJfMTMbNianeMto1bhzmKTtib7wXVnEo7BHjobXUNdhEJDhvqax1c1SNUk7MzKsC",
  "key35": "3SyoyGbm1EyHb5Zd26kCYKi4NZUA2VGhF2PundDBzNzMTaSum5nETwsXir6JzwiqvdoFV61spBJQt4EjRgtkb2KE",
  "key36": "4VJ9Wb1mBf5vbqgvHBNShPqbWa9s8RDneVtFFYwti5oxhJN3QAtKDH36A7MsurPYSJtw8FaiGTph6kHXGvVmSk5g",
  "key37": "4jVaagbFPHqSPoJyxqrDG7YTPkB53QhRZmig993kTZLokX7jnfunLEsfjxfhwzdFYNqqFXAr9229di3Gm7xLPDzj",
  "key38": "3nWsY48CT3ftrmXcRwzzX3GAnphBND2Qa81ZLf4ZzvbsL8rXugkJjvbBDnGGxu6yN3hLX79fSMuVD6gzz9qPqg1u",
  "key39": "4PMowH9iyrsv2Zd4hhmAhxYnC1JeBh9VEcQsSFTviEgGFnSF7jQxExozKATpSt4jhHLzTuaiwBYH6G6rA2RKQzEd",
  "key40": "nmgSghXKdvbqw9QTTrRTMceronigw6LvZTyKGtHaeWGZRbfvRYNjrpyQppjXDz8MczMk8u4gWWbVjjquEfxc9zn",
  "key41": "4omzbDeg113wEGgofhjo2eACaLHuQmHz5TFEKe7K4U9ydBo6EUkQaEo8NjtFJ8puGwkfSZKi5CpiE2LwJTaJ81Ao",
  "key42": "Z6nV6mfRTmrGVGAPayqC7G5Ux915dq52he22X9s7eGq3Z59fFogFxVbtTkPz5iaFJC5XJDStH2Q2kiudZLoPvAy",
  "key43": "2U8hoYjZnevP8ppmRp1GFmNFAwNMVhbqDRqTzPumHU72RTz6W9pvVprqShYrDHt9QRd2FUWpAAgaGyr2vg4RD2QV",
  "key44": "3C2WmTMbouv9wp2kNncv25PCkZAHhLLNUnf8T5GKSk2N6YS4k2J5C6qWNkyRVHj797mHLPa9299exDb3JDAthffL",
  "key45": "4j7k175Qb2W6aVALxbeDsYrVMWRmfuYcTypgcrpC66bC2EJdyYyzRiVhtpYfaRnmHcNseFr4jBYJjTrABcKR2r8r",
  "key46": "5FZcWwCPbXz5TQB8LiQ4DAN9zbpgLMu7a9z4LHs4wkrCSN195ynUDZrooXNmYxRXcePVZjf7a6pJZxfiiWKELD5T"
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
