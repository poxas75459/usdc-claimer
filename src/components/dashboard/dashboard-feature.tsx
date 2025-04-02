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
    "4UCeRscaanL1JaUXFBwwCmVzy81uiooF4EWkCrL8LfHje69vjXJZ3a6w4DV721SbLCZ9R3ET8Z7aYaY3WfBeTJgj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "414JusnatRaN9QUSQ4C7n4WiPM3mJbrtHtQEkr4j5XbPwJEwD5XdBRaAgLevMUb6qZWJoDF2wBtXknmXUHvfg5Ws",
  "key1": "38cExGUDDcD5aMcw2w9XNmS39WPaFkGdrD9mJryHYsJW97KsyNqgCPwfe89PFHzX65hc5ryF7gZt8Xrthh6VnwKz",
  "key2": "3QVj9y8zcgRUTrLF2mPrSjznsStveE53WrK2erWfHrQXuCUrDdFep9iBs5bSPADhtCxor9hX2QfXtuajkg8X5eQi",
  "key3": "3TP8d4yKaSSoAjvDt6qGioWpFTia4MvmHnLLXvh2sNCW74tpRz9SgfqNMTNzowm4viaJNFxy9bQzKhW74KNKHqFe",
  "key4": "3oTTfZyP2Xx41rwnocUSYZeFkRUbxxwveidD7KApnyU9SgmbKxzwh5fBZ9GjS6zDktrdQxBWAMWHfHQindqzQ2Du",
  "key5": "3QLUrkvQ4fH5AnN8T5trfXFK1mebkJyv9f3WLxJV6b8GkrVJxDsCmnruXVXSsYMmy3rNvqg4BN5bMh1ReDE9DHfa",
  "key6": "3WYuSPPyfqdPAS3WT5VVgdVYDypBwpxZFdGdF2a7RdpArR57srjLTpsJdBXMkrVG33XBbWaaM4SKvtpkmHDQGV9d",
  "key7": "4W78WuEUduvLFjpRFNHCWzTHSS2qM4REyHAbubWK4bSbdDndfbrNRVe75kbWq8DujmxziiBFq8zfYvTPjFxNbE8K",
  "key8": "3uA6PvgDNUsqwuGK7wkno1zdrDV1w5e2d7iTr8MgFfNPLQoQCNziuG5Zn6sYc8GtuNpLa52BRKTev5QL4n4W86mE",
  "key9": "4E6aD4bNAabLbJpP229qfdewwUTpCscQ2RgWMvp3XpHJ4GNmSAkMFufmwtyLLoyVdQfTPA33JCuZBYr3PYimuc85",
  "key10": "QxfRNQXrWpcUnqoyiSGwAHdRcNMJFLxYAb1TF94xD2V9QqH4U8b5FMkfu5TfuKrtieWnSLdezNRJ9SHDMZr7ros",
  "key11": "22zeSyGzRLFgrVax5XUYEjxyBEr1ABR1aN7frxGNUo9KPkjLuefFrPq8PeFQg8VFbFthhtgsQtzK982yYSenfesA",
  "key12": "2qGrZq8YRP55teD27nJA7jBco8MUZL4w3f1DgykQvSi1nKKZ2LkEQ4R5zF1rqBGFH4wdg15gZewCioRwQ9sE82nB",
  "key13": "21gPpPE3ZwTNAVfzNuBnfzXYVwsE6P3rKqkmrk9u17EVKVcrNqs4A1BcfDDZfLBcvHAhrSZ2TBjAuTWDS17GetxR",
  "key14": "4oK5Ndb3WF1Xyot9TDHmS8f4ZK8XMZ38L5DoMcwz6jhXpTxjrhWsVoyHUztE4okkyNoPXoTypXf3avhKoBBzY9GC",
  "key15": "5MSZoRcXLPYVjTyZ67X7YcFgfGs3tosv2arcNpoCgCbmA2X6GFcquFd2Eu4GEgXxueEmVZCAqFWv8ydKhH7X2M1q",
  "key16": "41tC2coCqjCq4z4dqBZrh6zd8vHcKJxUTPkY8BNwZh3bx6VjzYSMwPyA3ck5giyJBXYsbGzTt5Fgzgh93NPNQGqh",
  "key17": "4jXRQqdpRk6BBatHZgLHhyauFgQLEPaLspfKuWhM5S14CtXnaW9b6zxQPdiwx7VBMwx3NVJiUnKgRnNuSziYVFKM",
  "key18": "3s76LA6zyRZYTFaxeyLHqvoEx4ugh4wEes2GTgMD2Nxj5wxB54afqi4r7orrH6hK98WWB1hUifCtktbKZs9cqrtc",
  "key19": "29VKibQtVgsbjsvktrq7KiHskH4akwsWvSsnF6FjVvV99ZHtfGYb21GG5MimpPhMHWjNNXvL4a8UNYSjfSZM2A1E",
  "key20": "424eps7xhPSdhMSe8HEAPVNw22rNbCkjDej3GVVB2xTrQcSgezQBrhER8va779B7f4sAdGiL1SMaQ1h6Bh9PHiYH",
  "key21": "28pCWvGAnxVhMGwj2bY1fz1GKPGazTqYGWzEcjzSgKRjtJAdMFDPHE5ojwfCfWEtW3H7pGsctBfouoE8wtqgFKry",
  "key22": "vdFzKNu3uCb19J71W2efVbjDR8LD3JkY9a7jyKk3u6rXahFGmMaqvcMn8JkF6bKprBbb5yt8ESywR1ggmCJ4rEL",
  "key23": "46iRdXC1F7hhFQzVKQb8JCwWwwQXtBsmWgSKXuMCTZ5oB7TcrTyRCfRJf5e7g112BPC99pgVoY5dHL8RjURdiSBt",
  "key24": "23yvueUQC5XVYGVAuG7RQjQrneUrHGEFQtGdquj52BXZRnT65DaPimyUbvjvWoT2r4sosVSSdkPwuQPo7rggLFgD",
  "key25": "5uEyqBWjFRMZN2ght9euT1REEtEWiRSPvhAyU4rN256XUoP7LEqXLveX1Fs6r4yDe4eArE6SW3yXVvWgA95gqQGs",
  "key26": "3PSDSEbfo4VQd3uBMdDPoFqoeYVUPxDBXU2sdbJB85qwa4vAxRfAsUd952igjVQ6p27hrxAjvFR7yXJ6FNfNnpm9",
  "key27": "56siNjoKJLTMzpZ2Qo9hYuUDSKtNXnV1T7rVdwaq3RHV4PxaLgi3EMkBRw3RBBuwDN6Wz1GVM1m9NUHFV36Q8WzH",
  "key28": "4sQGnnnt2u88sQcEhhyTeW6ppmCFeS9XtWTstgvkAQxrAEjBBRqSEmwmUtVxmqhUu6ZJvErEms5tdSjhzPbkBDWy",
  "key29": "jdiwsCbknq36JCLEum1tZr3oRb4vCrvW9e2cRSMPZCF9PrFG9VDFWhcRJtFkzBLtnDLoqeemkRhEUmrwidk9xHn",
  "key30": "3wSvF2RayZbvqZwWVfPiUNudgj87P1DNbJL3W9nL1pj1j5U5eXnry9ssMVr6wdE1RekgXdzGLt9kermHX6Y1gF1a",
  "key31": "63V77fpBiaKLHrweJY25zDKYCTD9A2jD6BWP8dRwFjTGqeKCi36h9VGwGJDb7xHmms2aiWAioikx6LRb131pMZ9N",
  "key32": "2okhtwYhNyuwakAt2tLu1AXYfuiooKAGV8sJcdFqKWmjYFdJo4hSyUWwYJJs36odREQzuHzW5M7dqNR1yU5pfnHu",
  "key33": "UujksMqP7XdQYajJ5rnUzE2XdpLT1FHGHdvLtHRxQgN6gHak7TLb8NkP2GPFE7XjSydpGjAxd7LLSmKVtG6jDgP",
  "key34": "m5bQABfbL62w7h3naEmqSzCSvMYCCdg9vj6Yh4wRUS6oDZJ5PMxjir7vU7LRQEg1Dqxqr2EztP7HTgwqHQ4ZupY",
  "key35": "5d5CfwqkcN1AEtQZFLdBogaWGxyNwMpyxMAx4wAFzXiqrd1EcEXDomKyqewgZNQfNXnTArBRFKabE3tUy58UR2KL",
  "key36": "4wPLLP8ZjM4JhLdkCjQD8SM2gdf8paBJmpjWkkqZnc4jxCPMZPVMCJEqHoaUYDTeDEQ57b3y4ovpncfPgWz4535W",
  "key37": "2xucRjxkEEYyrD88hLfyXoHmKjdaFFfiUqz33qeqJgCteix7tFpYDxpV9xASBrUURdToHjoL6KSXEQReeyzA2x9W",
  "key38": "4Wq7hTc8eH2v1VTMHiaADrXVr6JiHWwj6h36Vw16tV3Qg38zxJN57JeA3wwZR6fZesoqhWPN5jTDeXiUdJxS77wb",
  "key39": "5KXR62QpzuF8UiD4Ei7HH4uAXF3FkBsjyqBfkDypJULgVZq6B3L4v2u49qw8gWqqFJKEui8aE66GhjreRaxJ4D61",
  "key40": "5r1BYho9D13vj5k368Q5peo6mb3SSLmWuaVikqRCFsrXfrAs7F2eaLR3A4jHv7rSNyMR4sogpXAASDcwSefTUeNL",
  "key41": "2Y8PyZuvJ7LjWTZaN2yBshDNqPoUbgVZ3H2AAUBrE9b6otJ3aMCZiFWgWuHexsZuCFvVZH8UcgzU2SFcgYNFRWM1",
  "key42": "TytZ5grkvATVydqMhuDZETfX9Z32zQWrxvZVe8sugXbytfSzkqZGMuEjpLqUkd1ni8Nkdd94qXKF9DJhtmxJgGm",
  "key43": "65C1Axja9jzYHCaBeS9jxswEgkSg4HTcj6KFvgQnfwqK9DqbJZdeJuR57z3jq2zdkK4aUutsv7hoFeBmQtCG38Gq",
  "key44": "4ams7q8vuc1m47GJuzydpSwurgWHwpQZ1Q5wKvq3VFjz37PE3B8gBT7XsVo62MXoS4yYJkUpGcbph4homCPaNh7W",
  "key45": "3eCdNZc8rzsDZK72V1TiFYTF9V4ssyvcPSw8KtDWGp6Skenndm19UwULKdS92buQ5WpHpJoqacqYwVDQ5TxSLsfr",
  "key46": "4tNoD6B3UT36HDLBbqL86ceifimUV6YVBUR68fYMgdQauBqKbn78YMxcrKEpVYpZNiopU5UVyaRk34voYsyWo5Ce",
  "key47": "5ESNi7Y9ARzr6DAimQ3pMNoC6w35bxviffHt7GMKNUG7914PPUfqW1wwNBQbbqyVkH48WreryUP4kWT7CD1PUC3f",
  "key48": "2YCHHJS7a7vvQXmhxmjJXk6QUBQ6nzmNzhieDtmZgYB3JTeDTH7JTqZALR5NHRqshxGQE9ngwj3CxhKfQAsT5DaZ"
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
