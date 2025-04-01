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
    "5SY1WhRSEdNgBXY8m7rKihzFWCbWp2gnCqjdmXnNnVZAU5TqmTpHTdrkHhzRecjscX8X3Bx3z61Drg9ne3pQVaRn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "23no4iZbuP2asPdVirkNPe5AVn8ps8DLWzaMMngKXAo4ihkq9dN6KJBH4dNzrfsCFzzUt4ynGVmn3U3T77aJU3sX",
  "key1": "5nGMeKqkRPjdykZjWGT6moASJ3hkUK9oUBfBN8rWMsw8ymvDEYuU1AuJxYcPcwVTpfmifsSonvPDAs5vRhRnNwfy",
  "key2": "5b7eqRYiMvjHS3BG9SX19YqAo6BHphs2FdGqyywtDponbtddJeu5jwoZP86pzyNhc1DEfhDdNRW1QHo1nmorEnKo",
  "key3": "EG2z9uyYt3cJhLuNK9yqiuFMXMztFFLSVKQB5un43jxFdyWgkXRpPPFtbvtQpqLmheajVhWBBDkGNsS3L17EQP8",
  "key4": "61NW8gdouhhGaTdkFxTsH6a9ZJTKKnfR85bKkqys9i7wJETSkGLZYkR4uiFpHiKznzvSeGbHB2AtyyQQm8UtmUbN",
  "key5": "2ig7zTMtyoi1Nk6YZYC7aMpANSfeSbNxrgiAmHfigf5eivU6bonYwbTA1E7sGdNr1rcxZpK3FdCf1JN4gZ5bHqoV",
  "key6": "2pojnurzSaXguRNBBvUzaE16gjGFBV99PXTK6LVLXm8FZdPMmvPLrbTRo9kGXwdFoPunT63TBgsGA9Vi3Yv161uW",
  "key7": "4LRRpWhoynpKSo1AXUb8iM8KgdRE2Ztrm3uVgKD5AX2Dc62V8AkcU5dresXSCNPHdBTcDjhG8t5kV3D1qhcG3KY2",
  "key8": "wkjojG8iEm5jNxPZHdk5Ch9X4VvD2r4PU5UmnEidaysuzQKENwjFuKWzKYQMhvo11rAEbY2tTxMfEfVjYAQY4KP",
  "key9": "4w882pcsKG8q1vn9brVvYj8tRxAE3qUqHmebN94szo5PE9oNXQoTmFtJi59zhXvRrkFq22EwqtLPqmFKbY43Pm43",
  "key10": "4y3YkXNy3QRJkb3duMyTKDJvqY2dyWNEwT94V6frQStMM69qPSK5F91ryZwukbYhBE9gkPR3U89ZU8cMbPqK9Da5",
  "key11": "3KM8xkGjQCxBGTyJ3ZDYWQpSZgA5gYhZquZx2XmwHJfFrtek1GHQx7SbCRXd8NBju21QUjjgUPERvGXM1rvWyHTi",
  "key12": "NswzPwNEQhzHNbAES2xAzcEZwJwuDZ6fHjSxuKEhfubKTWvDyWuueRJespifeciS8dqHJdQBCW35CtjNd3KsLHa",
  "key13": "3uE71Wx59sDZKfsM8Vee1zqyVTKDv2pKp4zejQSfCbudRt2CqgiR86JUJBwrzVWUMwqe7N4WnDmsEJbq1TVHbTsa",
  "key14": "5QXPDVrMv3ethoEp6DjsQUxrWifzkGSA17uFSXfwy32DCymPrJbmuQ4iSPYAVMr3iRwRjtAjfvKpXqXkRiLhc3SR",
  "key15": "2xEAzw6GGk1Bcc3aE13neYLfWqrFR3evwd4CtBzDsZrUunAe3ZTuB28dBFYcPm7FHDVpQi9nCHNdkimS4ygQQJKz",
  "key16": "2JK6zySGJY7TvRbNxvDdMBAbvRmCPTCLMRHb31JnLoK6H8LsFqGptn5ho2Gjo5riJMW7oXZnsRrjEA2adeYzeDA8",
  "key17": "4BypFDmsPdhbMyJP5CkKZeCkZwjE4vaY8DmFWHv1uD6xvpRopxRpiLfyqKVBHYWZmzU6uCN5HcwpASpLScUkDX17",
  "key18": "2SVR6vz7dxeWRnnyvbHniGgUKhgT3ksviXTnTZArGCyT7aT7jU51UEtBn8P9aH1gofxJFhD8u5tNaRZWR7yBToET",
  "key19": "55oQ7Ej2wERXg4RiCAtszHsQAWuamqeKt3kNx8JXf6WmZKG7wvHmU2smmqgAGNr8y4PGTiMTPBnC4BTtHKS8jx2w",
  "key20": "2SRbgWkTzawbMAEv2gjH1VbWZsUpLjwREfrBAByy7NUknyq97kCwnQz5ABZcLeeCyXBK4SdDBeg7mkWEXR1uWL1S",
  "key21": "4zrd9WC1GzvRSJbKvZPmpE61pFfVe5Le4gDj1x9T7qp5pqAVUtwffTWR3g5L7aZ5kdG6MM5eGU7aY5DRgti3v9f8",
  "key22": "54pXg8isVy1DyhGPtXvbNu5Bmfe3MthVEL7m9RoAk4tjcXPRRmKLdTYb65SRocb58QEHjGepnYs3nHrnxV3fB5Dt",
  "key23": "5KFe6z8wNTAQDU7uPqHgB2XWeLAKRZSscNa4vn2eV5V7nvuRjKDmDi3G89PosrJ5MUyaVheKmQj98fFDzRkgtT7A",
  "key24": "2gH6ERhM4vTBmJbb9iaxGHEYQRuyrwn5wC2ErRrn6HUokGz43bgHKPr6YFVvkHL73Ts6e1uHTewMt3Hrfkd2Mco2",
  "key25": "3QZdqa7tbWt29bgbUEJhT1iZwEnBrJwjGNyCxqfZXrr1pk1madzwDt5swjEmYaR6hH8Let9PR2x9kU8XH4SMEvTa",
  "key26": "4w98SgK6qkYKrhEY6t1ZvcbhcL4hKA91H98AaXVTo6HorxBqs1ajaKmgZq2xkPQ6o1g7LKJinXcPBG9jNExPUWaV",
  "key27": "4CABWYnLWDvhHm4ruNHHbPZaNuhYCR17d5y6KMQFn4aWg5L9ZrpXA8ymZkYFnHcyLTdqq3xHW3bDpg3SqCVW3Yz2",
  "key28": "2TzM9zspvY7A66wDWDTweL2to62tqt2qtm35Wwy8zp4nbCQe7zNW1GVWEY3rrkhbPGiXSidAkvKKcpvBG6iyHV7C",
  "key29": "2jytE5GKChkuq9ABQRxnLJVr5SZcvwJWUPcC9BnX6oMNXAFFJiec1hojWsdTtZS9BsnYo8s2hgKADvA6pxH23FSD",
  "key30": "61Q1hXtC9psdmLAHYFu9gnMMrdhR5f1LHRVLGfsSioxc4b3GRdMHHSsH982raxbhBy2koxVtrCsxcb9FUcce8XBg",
  "key31": "42yfezyaWijMNc5ZsL9JzPcqyLUG2QhdGFwrpU4Ke9LU52Ju7eNPreHk3apaZofVp6VtmUr8FBrK7uHdcgypF7sM",
  "key32": "53ZfPbQwag8gnjbm98LeaVD719jeyTJxhVfRHGZywL2BUXdHD7MEK6aPazgFPv1W1d32zjf1LtzQaNm4WCKqyLuo",
  "key33": "pz9HqABgd45J8jE84YFa2YHzYCCsmX7MWEXBEVqixmcTBYqoWde9wQ45g3seuj1poRXVcUMknAvxdr3R6jokgnA",
  "key34": "4JxQLJ285LtabKvRhrkXa9gJuKUAv1m3zehje5TXQXR1sdjsgXbhWSJTr5X7N6ssvqbdqkYH2gALcS45PD7sR7gS",
  "key35": "23zuih6ZVcczzVMDwnTNshXmEotWCpjBDY8AgVe7nE9nQAGSstfNqX3X9i2bLYm935bZrVeSQPidWwgMTNwpRP8i",
  "key36": "2LrsXV8pE5d11WFeVQAy5BVRoSGx4WHKGZtPv44PGuYWGnhmjBJe3eNoCAE9JFA9Qc6pSSNVMBLdFBQLK6qAWkw1",
  "key37": "49LUKNMYjzdjTobEMD27fNyViw6M945qtDjvFz1BuKTzf3iVpjTinV8kG84TkitxPkYZzzykNoVEVhSfkYR79GAp"
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
