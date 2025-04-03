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
    "5UCAhbqwiH1g2dyJGGso6z5tr6gMREYmALVYpCLHdxQyC1vCV92LfZZpGDLvC8824wH9XDRde8VsL7yXHAThPC7W"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3oEe4v7BNoUbrWBtwkasZ4hP6p29DuZkbjpCVQqNbw8xu8PCpn3xUDn2CGefXEcgvE7ms737mZKy1H4pKZukbQDD",
  "key1": "4xc2E768XHbBHzzGGZmNB7uKYd4C2TWDPUisLGy6F7WoQPQCreN2FnebWwjWdg6qV8BhnPwWsmxjpgsG4Qn7JWsP",
  "key2": "31miABJYxwyWPbfLwFkAj8cqH4SKVvg2on19W2kA6xsktFaprhBG4zGWsbgLBDKBAVt4PhorfUJhvTvRopDoDtoc",
  "key3": "1LGWF8vpGwNB5aKgcyx1mgAF8o7BjNDQovZFpbzfSeXAcBjZXKx262RrjCo42GPBXjp95zuo2EJQUe3uRj1ieYr",
  "key4": "2JGBsND3dSYB4VDaCzJqPcVci9oQvyLwADxVUz3zUZ89nLVCt2XRLBYWUdq66ifyw3XKW7yRZwaNEBPnPavhE9sE",
  "key5": "3z6FVojQ5sTRDTL59ZDjZu3meMcP5BYm3sMxvDTZJNXXS5ZqshwgREYXqJ9i1MkueSJYhMC2rJgDqB4pYn1qkSCX",
  "key6": "JHsoqP5afyYWorfNHRQGJdKFMSNxp12S2RT7WLVTQGtWMZFhdMdSN2kru5oRSWbQmH8xuZb4yPJHFzH5vBQiMvL",
  "key7": "4hhVXxhjbwRYmi6q36tMHSXkhRrqQtopzhrFnBrL1oNTUYmvEMkntVy9xAVy5JTHPC9BLGbuurp11sgBWLuc1kbH",
  "key8": "3Ey6P9gCgp7MEQvCeUAwPQyimWoZrUutwAxwRg55h8j7RD3Qv6KjsXDwGxuBHkjqFKNa7q73F9v6mNf698fjgXdQ",
  "key9": "2f2SMGuaswsm2q9cuaFjCDB8mciad1rS24LccubAATWYQ3c6nd7q9M1NUNwctsn8YZUoLTtDBeLUrWm9CdR1H47n",
  "key10": "617ShyfZWpA5Lhyq7kDGQc8rEPy4iruTPvkSZEnxiGudkbktUnRfC8JAHNH3WyKsWTSMEGEs5fazyjkTCikBmCiC",
  "key11": "2kjsxiAk92h6Scv6UeSGtKp9D7krrJxDHZmAMcGigvL2HqQmzqxihmZUSXvZR14qTeZQdMgNJDcE7dTDWs9muWbx",
  "key12": "3dNCjqMgYp6q1ypXaW34yeaad2NaLU3YBCrCVLbX5YBGBZqwtB27nurE66uGKmPkJLz5qatx2xh5Gjb9WPNUzvaz",
  "key13": "2xg5W58SkQJyn9851N25S2X2avyikqTQH9JqrQdmNvPQtNxoUTvVZvzZnsWNUL5zWU38E37eMYz1EKcUAgjDNp7r",
  "key14": "3vvfKa1r4rTu6AxrhGc9fN8fUYjVLbCwh7fwTHt3nzoXFfbn3tvKkNic7pfH6BnWE1vrjxKy4ojNbJyyvbLGSWnN",
  "key15": "4GN7m4ddMmZyVRcDCUCoiuKVDAZpqCrTfX7NFwopUwuucD2vrBM7bw4SMFk86hZMtuCFRnNhqv7PrehLpGL6LiKP",
  "key16": "29cYELD28ZnWvm5KjTuCMNPh3ZFckYD3ATz9xrfecznbp8qCxP7r51Xt7ak4AK5A1G331khz82wk1w7yi6Jh7Lb5",
  "key17": "4sizwAu2AjL1wJ9FKej13XgsffstRuxrfxNanZipHZetc85R377yR27kd3xQH4oc8yccBi5uj4BwAW2xYD9yWvHX",
  "key18": "2rhaykPxGiSza5BbWMN8JXqdphL5M6eitEWRCiNTfNCN5E397e59HSDkkhfwhLQoXo6cNR3cUUBqiqSVk3Ny5wdS",
  "key19": "3TCgkDn2b71DLgRWYweYjfxrAiVJus2FbsVgihgqUnj5ShWoaMA7H6VuNfTpqwBmkBsbjVY1S4upJpfAZ59bJi8m",
  "key20": "57SyRiPyz3usG7FzXaEFaMUs88wejie2ZSn6cww5RVqNoh3DuJAXArvJzCRABT9W3jvY1ipMfzzZJrun9tJ3ijau",
  "key21": "3nUVsrdztzHVQJaYeaCabj8GMNngQV98osDmJxbesag6bW1JY7g2eMLYDaXN2jL6ngwyLJQnFbQ3YuqAkE5H1SSa",
  "key22": "5jKWVUBtVatwANnDVXK2JjLZrSkJUrXmtVgy7erPkVfSy1tHZ3dH76HyhTBVZqc4sxQMdpPwHyqgbt8HL5Z1Dc1N",
  "key23": "2RDdfSHXnuL9dmQFMWupM7dkdN7MNzMmbZDJhFMXpXWE8eRowsFzYd4NM9eu2eH6tRUEg6N5MyKR8hvvxarnZiLG",
  "key24": "1ztaoFErhf7QoSsF59S1u5DKgmWQF89pHGmX6iDhHsSVQc4xyomSXrRpXWqAoY1C9UfwSRbDQU8muMV5zXu9KmE",
  "key25": "2oaGYJy573QLe5VgkSW1RzU4AcWyjX2jsQZJbbyqTKcPbcvBwcG4zXRtBJcbwPQXvD6UNCbfVkDfYHhxgZQL5WMY",
  "key26": "UGMVVjZgec4HNtPuGDdYanFYBxjYWhtjXb7qmJuhyg2T7koosNbm2G932V72aPYP6XdfdYNAjTSs2gn8VDt44Fh",
  "key27": "3n9RhQmsZpmTcPhmywdZWwGujgWho8sjaH8bf6REdeSda8DNgPSyn1Eguk5U6C2RoBihTHvok75EE48nTV948QWz",
  "key28": "1qEgHm2Y84eS5RTSPu4xQL6524XZf8mkgbnwxeMcsYwwxoiTviw31oc7LE9xPczH4griaBiSvMaP7kdFyJUVXG8",
  "key29": "4HLqGKMnWxjhyoNi4ZtqxsXbwCRoqDo4ZehrSf6y9eL24rfgWeGD3xL8rsr95Hf1f71G9s5owTWJCFNkNDX4ACFa",
  "key30": "4wWhM863wK8hnGUt4sPuZf3ZikpbMHHEw2jGnnzNf38NrA5azWR6y46czxTfN5Hq88XFdQvCbjkNa4nhiaFvuyBY",
  "key31": "5cUirCsUohbzKfUEWhAUewQJ5EzcNiHSo6MSiRJMw53YkWFbjMKhT4uA4hkNVPNJk6RA37WzPBXNKiLUxxdnJszN",
  "key32": "6176wLWzohCv4HQcJpduzvE8ayScaZ9AaLfk1V9pPfXpCq3WjTwFdeeL867jfMisJcv4jkL5ywjsqb95nvCH7G2Z",
  "key33": "5dY2bu6V8BmMiAqFEnR6BMfW396ebWwMScgebQcrEkQzWoKD71BdaBsSX7yUzC8sFwig59jeeV1ji3e8VxCeWukS",
  "key34": "35LGh42ADtUtW9uJNNdNWZ4Msg3GyXmHKjk5MDpA5DFqFuazHSY2CbayfivWosXqfSXH55MxwBsR2obr2i57zHcZ",
  "key35": "5y9LPXRLkZ3DTFCuSXQAyx3Y6jKyoRgtESqXQzqBMagv5abSd21oWQtJj63FnHzv7LaHwtQctDHBa3rJqw5ioyPG",
  "key36": "3TQvHuZSnL1PwSDt9MtTLsTC2zcXwB2meidDoj2pVNMfMXSURBtvGUxco4o3wvN6xyabhDqmh9ydR3Uh9Bk8H7mK"
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
