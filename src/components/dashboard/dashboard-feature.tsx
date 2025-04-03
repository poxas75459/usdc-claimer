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
    "3YPrPJpXziQCLdGrCrMxjFt6SwHC3eaiZrVPd8bshMqqDt1XhWncErFNTV5pxrhg69U323r4LmCNA567dBzwrBun"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ueRekkmMy2YFXbwEVWYqXVhuVa4daxaGmZy91kUpVoAndi7ryivVSNy4j7Uy3Rxxe2RCf1MVP7Jsh1wfJbfXLhw",
  "key1": "5VXd1Tpq3y6Q5VdhXus9Y6teExWVCBZio8yku1hP1W9Avt5KUsTtLqwp7QxE8CBR5KYfvWkw2wVD495yZpjEAG88",
  "key2": "3eLdiq6PFhkWdrQiz8mCpKi4NaT2hz9SmVHhWhRXd27CHQ6eVFcxDD7RCt41iZ9C6mMah4kXqT5WLgLi8upaKTpA",
  "key3": "cie4r9J8wdJbvW4m5WNZ8FXSHRNL3xtCftparfgYL2B8E7Bcq4YhoCfhkHmtJijkdHH7cNm89WNv4BvqP9vPLsQ",
  "key4": "3TAP6iPBzZdKzcsfUKPfaxkAjxfvNpmEH54DrdHAhte27pgGaGQzfzA7eCuPtJZZJMNTD41pM24gVvjjbPfUJngF",
  "key5": "2xrWCXCa8uFeACwgNFrfsVCQaPPEA9ikoLiipGQ3SPnNQbLxw9cAcXXkcuefpj8KHHDTJBJuvMJ9CoCVpNyzr8eF",
  "key6": "435zgKEuEYPcqxM7UHqAVAFRSXwYzf6rQBMPPpyNNpetYEzFUHajR49dEaVz6EyMbGxA2d4far79fCCWZAoLaSZ8",
  "key7": "3P2imkucK7JLjQrAQxYnFMrFiZeoCuY1Yd7TVRwBj2pWb87dD9m56TiaopwK48Te4zh556a4bennAgmHcX7g6Wuv",
  "key8": "54aScb4Ub5mMLwkqErVx6zC2w5tJBap4UT6FwsKxv4n5DjDTcn4hVZH5XjEBXxoaXqy72y38Hrs49z1sZy6CDVPN",
  "key9": "3eBiRVC2unZFCt74C429eTXNtExNF5pXoBwi7KXf1LEL1ER9ppp4weK9CbdYebXuebAK5WAy74RiFhog7uawKJWH",
  "key10": "2FAXVMbYS8ZMiRiHL65xdh9Jp5UUaCA8hufsAAo1bjZU3tFWBT4TxNwtCzGQ5TEpFUiK5wfTnEzHFCzPG1j6ZJmK",
  "key11": "2oSzuHPnaVtThMQZddHULwiqwhRVSbsFXuG6Ek5wXZNaQubE3NoFo8BHZizegbbAi5HqPXmBa7Hha9t6o2gqeZ4A",
  "key12": "4175nsasUfmnpmCbHz3PdWQAf9q2a72WQGHDwUMCKKA5gBeEFt6kmnrtn3Tufq2eRwAb4BZ3ZwCM2LmMrtuZrWes",
  "key13": "4kFx8ENpRKS2rZM3HKYAp9M8WNSJ8Q9W38hWSjewzaCjpwDEzEXg1ndEEXrejbJwzPaKFfTcfg3SkhNdvPw2LXNi",
  "key14": "quThqjp6mpYs1geYfhX4ghf4QT3ywh1mjWg6UjbCirRkkuLras4KXEf394DsuWnamNh677DbfBZmiQdG9UyuRzM",
  "key15": "44r6MscTjvkNMCuyPHRdp44iJnkQfVfN5gpTkPFkLSnuzeqbQfBG5xhJ5M2EyhkBsR9zxsUEsgpq8TqEVNiRBWBZ",
  "key16": "5MUE3tFSWiydpQ9dVAZ6eHSZvSrCrL9akLyGdY7cznTDMfcpSpZbqqqAmRr5d2rTBYrqGMPqKsXLFiyqqA7D23ej",
  "key17": "2tsbJQEKChogPd7i9w4uYrWAgF4xwr7ub5zNPFSG6DAxyEyznJVQWYfM4n2ESdiun1uvPhLeZZC9HhM21xm2PuJ6",
  "key18": "4VijiUr4MvLmAHLWZo6VzXTMRcLJJ9nX6wwhewFxxySS7zMeR4sWGA7KWsJJmnALWbja6Ckxp6PKGNPpfX1rk8NM",
  "key19": "3RaZXiaPa9gyQj2ogWa5PyM1mKsgR8SuU8gGruoy83D2FgAhJ1Bvj17T4YTH2ywH7mvwF3cpoRS6zZNYdXDDwzUR",
  "key20": "3fZdLUjSZScjvJioUnLgXmCJs7dQzfLjxqy7wSyz6Ch1JdersRbvL8SFBedPtu42dkWKWFFhinis2vgfYKTQPykC",
  "key21": "4tHiAj31fqCNqLc6ytdAG8HRtDvpRCJX3qzpgaiEwf7yrCzcPxeAbgNGVRB95Ah36qc1sGFmBcwz7fneP41iHPTX",
  "key22": "5AyWMiYyjZyFBpWWhR4Sedi3NJnrw23BxL6NdXa3Duxmzs9TfAATVkLdy4WbaswkyXL3dhQ3j2GjF2kyQU6zPjbc",
  "key23": "ouM1wSfhgGY5ZFkLMSg4FptkRWNxY7aos9mVHZdRg73grJ5K23QPcyVY58GLQNP3KHweBHHdZyZCNc1zq7fURtW",
  "key24": "4w6ZfH96vB4BqGgU4WXFj816iReGRPtbaTyho3KfjZVPXiwwybfzejZD7TUAfUgNGjMd1iLa2RZjkk6xGjbwtzUR",
  "key25": "4Ep5ZA4Km1Za3E8wNhryoubMcCwoB9dK7KW5QxeTeYqCBADXm9GN2eY1RGSc89B4K7wmbsrSrG6dCTJiCLPaauVX",
  "key26": "VEGr1r8dBmSVbDaXgCEWhHEaguijfigPbXQrWLYHUScivdMZ5z7CGVrY2FGsPwgbpYBrBpwjimdQJ6GqrK9o6A6",
  "key27": "5V543oNEfqwsJKUE9SsrgYkCun9sKg3gGYZf12p3sXBzP7YYHWuWsjfsMPX1GM48TBjtodo9WfddsnsdUTNRzTMw",
  "key28": "2Kc5qA58AYoAnzP5H2xWRFRHrS84ESWcKoz1qQVyXGaKgk87W2E6AHq2zrFc8ptB9TWx7a7XDoRhWbFUPPiZNTku",
  "key29": "5sninBMJ1RsCKMEtojx3QcH4doY6paZxe4vskwZjGKDRSPCywAdBMcbMwD7wsMmjcyRqjC2p9Y64wYWssRqEckgB",
  "key30": "GZktWBuTPDp1nk6H4mq5jx8TNt3eAd8eUL5y7CuejR6cp6hgnEBdBYmWMS69yWQuzBsi1tUCcCMvKEKwiaYXhcN",
  "key31": "2nFBCkdFAQRdP4h3L4p1uPLa8VXvu3xjMrg9Wnxdihj7DvPxu1JH21zLHUJrojqqGZAEGhqg7pV3ezci1zBEt1xm",
  "key32": "cELUJhGwXsp6J8MLkP8tFEZqY2W47QDiHEGDfVmnHryCjVAJv1ZRyJ5z4P7CQsENeuaYfGkz4JngYCoQAbnMVjH",
  "key33": "2N19AJwdTGLPpsDgWaEbJ4o1jaNZdvePvKReDvXZ8iSjnCkAG5E6QkDkmCp7Ef4GxH1R2xwWbrE7ycLc1pcBTxJz",
  "key34": "338x3baA7gsW4U9Lr7r7BbhpLfd2Pbf62nwpYUGxe62aKM6wZvXKz4RiYxFEgMZ5kiEgrKJKMyuszVcPXBc9VhAS",
  "key35": "3fvP8Mk32dkczoHDQ9B7Qqhx6jeaNVC1PwTpFo5CUyQ7MLugrAXXtita7RncQcJyVWEzdWxEDZt9FWNKkkjWCcZ3",
  "key36": "4AtWvAQzuYf5HtExUwpZsGsgHVvoY66WSSpLjxw6cjocvEJNthWoPVvpPT1QBa8PscVAayyGExWhjie2iZ9B2Y3Y",
  "key37": "2fKawi4GK3rbsr19LxZnFDmnxRE7uYJEUpe2TMFAni5Kvy4ysbkpLf46ALXMWaSHonogyzFMEy7XrJY79jeHn9z9",
  "key38": "3yTnbgNawaCutNZipERs8Jtm91fWrzcRAJ2ays8EX9dwFWAjxDgWbFLqWLpdumNs2NPW8K2v3NkcTYoq6GxrNvWr",
  "key39": "8qwYFfVeK6myCYuzoQw6fBXkNJs4uRyQLz3j5jkGo2MpALeJ4CdsKF248kxtyRS2GwARR47sv32ev7Jq6a7UHLs"
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
