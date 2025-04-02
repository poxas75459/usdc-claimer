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
    "2mb7aXfzyxEM8dmU3A3YD54qMXuryj2aX3KNjPm2ym5bxQdx19zYgJk85cpnC3ZiQtY6bL9EkVr1CqJvXTNXaaYm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "hURJvodhEczAD7nJG99UeHu5KdDFMiwos7PjcFteTs9ngG2nuv4uPCejwUZsTBaAE4H2zZHdTJq1Zh5kMkruysd",
  "key1": "3pMwzVAQ7Ei9vfKhZgNEfWwqFHa7m4ac3WmsToQjkEkexLRngv3XAE2YowYcLRqaAbg7xsDTa4ZQvdYJrKA19y4c",
  "key2": "3RVDZfNYemLaCoBni3HXF597RCkAzmfMZHXy2uH6LKhyNvHcL4FRt7egprXnCTccbxFeBrEe2E5C7r3sEMvrFjps",
  "key3": "5ZrmrhiWZCLYz6mCBKVML4MaRyK3Q2HnmhxUFnCo5UYabZcvFaUdjkeYfSDgyi41XFiaNF4ZiuGuATkYWuMNYwro",
  "key4": "5UK8u9QdyNoLCJPyXfK2tjqrRQG6E3GPGRELuGUzMfxXbBwht4tFxy9sZZbymweeKxUmhMCEVRnLdAYfxiar74Du",
  "key5": "7ePhMhf8Z6tcqEgEhA5JLeYCWnXkQjd4fxbw1tkPQayonZTidSBuJMrM87ZswPPUPq5YMXizC2rVa6W4k2rpdyH",
  "key6": "2BZVswryPsUYY1xRcDdpVSCf2iGJcz7BGg7cFAtYGvQiwkd9HkjMg9vUwszWPfiwUu6e39PhkSzr7PKR1e2AQQn1",
  "key7": "4kXNA4cYHAnjEJUfpzGSJaCiKqiqJ1eEEtJasE5ma5YcC4ZGYDsGtRPfkApQe6HXnEv3KXuG7p8dJU2YB7nEdBWS",
  "key8": "2dwRTw7D3VitjGraTjmwDW7eK2QP7GTtoRiH8m48WrKVAVuc5bx7D4fMLUjecxMhpLNvc4c9FsNMNUZpe14z8MVg",
  "key9": "4swSEyfuQnPympuHZCcXiziRiDSx81LpNYanmqSV26WvmAzwzzh5wY2PE6biSiVA2dFzCc25kU773aFmahQ4Yt6M",
  "key10": "24MxnsbB9DqojeBF7NPtXTDNEnjH5r22pGVeFcrj6gNocTCCfXMao6FtkpWxQxfFKNpwRK5xWjiRzmfGNMEQV3oV",
  "key11": "2KGRwKNKKAi3Da9MtWZaaLoK6His3ugNm1NGavbEXALgyWmxpcp7oAqE4vYMYfDyTM65vRW3HMLaAvgVsRQR8R8X",
  "key12": "5LpdQENJLADzP3dtD9MfaajcFQbLUreanT1hDdNNcACmLVKS9rwSuhrBotfqaNGfWGaqme1Rf8xKqzrc6aDT6mYA",
  "key13": "5KtEeqcM9ehHk6onHXojdzyycGR2xrQEoaSYDo1N8Phzuxy1L1nNCGpwhjQCHEXiffe78VzqJWjteucJRYpB25Pw",
  "key14": "mPdqfLrxj9FxqHohgDLHEf5rZ3wRSMKiJ7Zo7y5w7NT6mRR6qT11wPFKLZcjwwXjrrRC9SwYMpfbu69MJdbWFzw",
  "key15": "61Z5YDRUx3wnzBgVaESKP6Ruyr6jrsrtJbWPpz1yTKAXuh86jV1z6FKhUer7c734KifnsM3wXd9CRSwjkNDa5CkW",
  "key16": "3t3bzqetmeZjve2Sg5f6XNFpZACNf2VgeYUXz4NZURJieP6AdZ4ToTKP2BCLaejx8VgrRJ7SXSEx8ofrcXiVpcKd",
  "key17": "wuEpeM6QPQfAoKQyeNpURJ55FHexJjTy4eU1uB6z8Ho85Qf4haFvT5opQFmP97hXLsHaAAUf5v6bMdUhnu3ExJz",
  "key18": "3et2CmKRErrZ4YcWWvCAnQiqq3CohRaKPVeazgvAQ8LtBJj8uMQQeAZoU3ipbVkmLqUkKZJF2f6s5Bu5oXKyee2t",
  "key19": "4hHGePBxfjf288tvRZKmTHu36zjee4Gqnm5yn4zgBLM1xxiQyMrVgWbcFbVraeFU8sroCLZvb2M1JMs8PHGFCMHa",
  "key20": "2iixyAqsjy9DgaqMRksj7aYkbBZWpz67sjJwdSZGmUw8jHqy2ink7wWDuLo1BXvZaFN41gXoi9nVgmB2eUu8yA6D",
  "key21": "2CR9FT1p6WhgioPSuXmwvcPATTSGNGMeQPWR98mnmtz7FVNtmiXcavKuRh3RKrGKLF3heA5JHH9W22JvTyPNZ5d8",
  "key22": "52TC7DXgTxiPrVYwbQZnLMR4hQjFbvfFpSvB1Y36kSW6d4UChhkn2z3BhUWvETRg5NDtQC4PtNcJjBjr4tVRM5sc",
  "key23": "4ByoZRwNiGnCpKUGiXw6yLM86t5C9B9C5eNFTrZebq6tzrY5Hi3pJreqKwiFGrYsbeq1P8wYZEkH4arz4SWv8Wwh",
  "key24": "44ZafPkSRRrCqis3DEsvbHfBXAGTvZkpYBpN8sFD9428aHQHFXKkv6uXXGoVWzFKZuH6xkjAdmyTCTrzdaSDrrqk",
  "key25": "4s7RcbAkjZaP1NnRA26U9VzNmBvb3465FrnpmE1BCCYTBtYLuPx9QFG6vZ4tk3m7dH4xED9GWKViArGh6StMSign",
  "key26": "54NRQJzPWtxjZUCSGoPKLGNpgzee42NeQ9npjzymUL91LNjACH15pbFNffqGXspuu8biDtdHq5aGQmSDJM8mk2X6",
  "key27": "2TZQpvCigscn6Qptu2NnKxPXFW6g4kbWFwUAoaYyoJob7rfhgMKAtnvS3EeEseskCcD8LKsmBDKkWFhaoFFvLcrv",
  "key28": "5HnVKZtL9fpdnLh2nKSz6u9fFCe8ZmNqYdYLX14qcNkordnUY3EXZB3sYEvh83nfS3TWr7hvEw714oo4ARJi1Fhp",
  "key29": "5qTXqXzv82EPMGbCer8zgcpJuxtYJdyUrQEJXgfkUmiwUhpwSbcL122xY4YsLzdm1ba6sAasrbXwKj57xpK5poBh",
  "key30": "5T62oXgmZSpso9WHA2pW2knjvuAXXtGVr3gSa3awQhZjmLAXingWaVTHxgvBuzVmi25Fo8dQrqUBx6sCT8Uk2zqE",
  "key31": "4i54PdThV6ohCHwvcnYRk1JWMU1Bh46hDpkQG7MdMC5fiJujvwL5kXWky7uC7AhjXjik9kf67n7FqRMwXJikKfzZ",
  "key32": "65Ze7s1ugcrSkk6DeHYfQViFYeo6sGdh4y3nSGUybGUWXaN9yBPxvzwCveKhmQW4JhQUoWcmgEqsaQQPGsSpLwRU",
  "key33": "48k9L2sttmU6AtJT7x5P58gDbyfqb4yT58nWSSNvD7fcxgPW5gAb2LAv9vmzhTbEQSGvswD54B43SWpVuYJ1LVa7",
  "key34": "3xSHmYjkPbikm5cfLiX6ves5LQhiFfh1u6oxRVhHbKHULvNkrvkmZByC54LqBM8KtHX3TR5zekcehxoKoJXuaeoZ",
  "key35": "5incCR9HVMynmyH1Z3r9LQGBeRSZ18myhVRtWG63HEsqanV31bDfTTadHxE1T5KGW66ZV7gYjHJ9L1FXEc37FQEQ",
  "key36": "rVMjG2vBtDWRNs2ATthpEkw7mtV24y2tx2TCfhSmNbpYNprHU5EsZXauh14Qj1VHvnfFHb1Bramkm95UoxyK2jS",
  "key37": "339FF7qEFAPcQ5a4HGidwHVP6R1kFfWhozu86x8KTqpSgYJyV8wxGjxVHHYoF4NggFQTcroVCU53sVz16j6BujEg",
  "key38": "gQfyWuSpvHqFRcgsqDycmg8mcauGRC4nUt5ySS5cbP3cswaCAHCET2bhE9mi4fuaSGe2hncT7kVBEprUWaMryFg"
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
