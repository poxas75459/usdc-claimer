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
    "5Kv8tH33mKKToCN391LTtYEMJQXSgji5Xy7xrX1J3sGrhijJnvXGEB23WNTXhM3qLPXvwpHV1y4GERUoXNLBDd55"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "KQUD3cjeWANkgu8R37sG62wy7BpFwQ6xe9N2aN8AzYRj2F7L9Y4JPj3CyW9g4M8fZX1vQ9aFjjMCLFRi6SpwXNZ",
  "key1": "3biewx9NQ1GXJ1oKrVhYbDsuQ3csd3MeZCZudEjTs5yp32ubfTUDYgsGBYCthkAtPcZAo9KaRAC7uEh6N3vX1UaA",
  "key2": "3PSRibhLM51AxH7CBHrKGeUmwt9o9ic8BXBUxm9rUJQwSZuHBpE3gTxeqmb32pbevQx6UWpN6B3yQEevDANBSLTx",
  "key3": "5LmtCfsyeZqtnLknFf4DU27H62Af913e2ywuX2NostaTEicMsAzJAbz4ZrPSftRnhjcGxfYuARXdQk1VU2Y2euiw",
  "key4": "35zDZa6nTx6kZh33BoYeUKiyFYPVk8TtwrdNd9AohgWeBD8UyuJDWoHpAMGi7UFyZ1iYTSM61oVxC9FG1Jb2ssS2",
  "key5": "4wXSDQB3cg4NUKuiiT1Qe8ve78hTdFDLuWQq1wagH8CgJeVAihVhRxMBSMFD8nbt7ARAtYM5y5qbanVJygvw3pt3",
  "key6": "4BehVKUnxPz74Dds2jPdjRegaBwN6bQYjrU3A4jmfoaUEVa9RPZwihDWd7XEN1TvLhN7VXfk5zrMwhrNoKdz7kKR",
  "key7": "7f2aTdbGbG4yBLJ9h2sDJHMfpprnpEdGMxyh1AuQKeZwo5CCpMgSBGBWag9LpDzMpsTWAf74VAvfEcpGMFfGirE",
  "key8": "29kWjKkdWnhvfkXLm6z9XGTNn2EKLRD4yEfmedWgBB2Z1SHeFYTcCmSX48hrxDHCCs11vssqJ57nYxTDHACNjV3e",
  "key9": "3n8rJ1YWXQ42msWNVRQ982KdWKzzj4Aq2Jxwp2hTZFpYQZdHkd2pVUxJBh2H2Rn8xVS4sDTrHpyEvyLECruivGS2",
  "key10": "3cFuD6CanD3VZnrPg97RK2ZJ9Ho13pJinPC5i7Xk1jJpcNeFoZbPuseDk6TRKW6KxGo8TV74zbt5UShT7K6yPjyr",
  "key11": "9XD8apVQ9FsnR6yNpDfTsMrnJjSvXFbyD9yxBSm4B1VzY3jKYGswBQ6CLQf4tQuNcpD1kgCr62pjfFuCCdJ1rLb",
  "key12": "2bfM2zcJKn3URK5KsqokAvDm3z22ASAfcHnNJ9YTx6nmUK1aUGYw8ZRYDkrMxoFvTmdU8Mx81Ads5kfmip8Crczn",
  "key13": "5PhwCbjcz9DTp7jQmM2turC8dsHyapZDxSBdu6EihzUJDpogkrkVGEuWCkc3fHMv7CnYvysin4FWay2dHXQbj8Xy",
  "key14": "5GJ6vK5wrcVqFFkBARztzdQY9HKm1JKtWi9GCgv6ddRVca8bMh4cvNeVxSDYcpaNmi9sXGp4xvSHLgN4rCraLL1g",
  "key15": "orKtTTJPhQckinpdqPD7vfW5UoCaJxBpQGADzYMe73FmR34PzxD9tjZvFxmVwU5T4PcTyjhR5S3ZFKUKTZWKtqB",
  "key16": "2jzM4P6ht935CHggfApgLr25jWfFt6AgokEHHG4hpEtkC1YyzkQv4JbWVMDf7QxeUbcuSxV6t53V6kqVcR1yXEdA",
  "key17": "2TMkeWU3aK6H3nDD5cZ1DyhV9YC7BA965cEypbE4GYL9ePJwKePyKsLwCT6nQQiG3FBFKyAuzuQ7nMwMkAtN97qp",
  "key18": "5QQkbfyXXgafHs5dAHi46Gj5nBtwW1fvWt47Zyi66KSBHwzzg8H1ooLVUszZVHY5E5Cge4aE2h6s4Qr6jvqdX9Tm",
  "key19": "7yxcoC2wxLUk9nFxrxPVyF3giSdojyECqXBpgBGrxbPWZp9XdrJsrHgrqvT9rRJsvpq5aBEbF2mwxvxBNjg1Zph",
  "key20": "CESxhKnRpKwqrR1aG9QdfPjSTtbH2e6DeW9VaQRhR4TDGQR87GoqVLpcfY8br6Db9MyvSiEUgxurTT2crn4ZzM8",
  "key21": "4NDqwqEziNTk31x1Yttd2iWkhJSBURHnAdgxNX4FYApJPv7bYfkhgzjrAfjoRSBUZnxh1QcChkpcYvar9xiDQT2X",
  "key22": "54e5yVrEsjMHAdggwAM2Wwbb4rmUmeqDxuue2rM1vbpfHjd1To6WFS536t2KeCTqYHc91CyrvRi9VSMDDgir9qp7",
  "key23": "4QNoyyrhU3XLkirGGudoj9XiCy5MGj2MHPyfdabno9Bsci64v14GQ4wii1v47FCE8wC1zvMjaPaKVn3bJxPTsPof",
  "key24": "3r2sczJpDisxMN1nTjqVDbaRxa7XhbjiYkAQLMKWSvGazQrM4Ymt5Le45Ei3iJZwAAitHZQDEYf7jVkhkDY1Pdms",
  "key25": "3yJUYF4CK6hsiFRvwiJFX5YZrWhh2ssevTciUgvUEtyqbiC7PUHkY8WSiQ6L6V18MgX3vkVTgnyVfiVcyLHfTLDJ",
  "key26": "2KPN5wi1qgTzb5F9hswdgRki5KjE1gTGdKbNDaz2GsT9GspVaCXyMKVXaCB8PsXhmqSjaRMNTaFxvkffEmJLbegd",
  "key27": "3mPvTQTu4XqVSqj9hdgHLyp4rakVbR6cjnVj1F8b3xAnTT2TjxGYWVVV4YkxDY9tu7uk4patnhLjEMTMCfPdxyM8",
  "key28": "4tPa7ywiiFmZ63ZWRxERoU43Un11ojFcnPjVGe6xJueZduGQowpGXygJrRyYkUPqVjHTu4bGZrJP852JWXYbvqDj",
  "key29": "3yQdBXVu8BTbncXNvuTmrmmtpgZJcDKxPzRL62mvfuCgsN53qZ1zFAb6hRR66iqSCx1o27jKuVw3UFYrJpFEWVz5",
  "key30": "44wZ9niT9dxhSrSBarRGDTC2KvThALTZ8dCENDA915DmM7vEncBiR22SCR8WJFW5kin1Eag5ixcTgdHGfKVfVT1N",
  "key31": "5VyvyjSjTaQMNxhW32fVjP9QX19qVu9Sd9Aex4dRFgbrE2u4xV5raNHYTnUxEaa9xBm2Awpx4rGKFRw1gAYwksBN",
  "key32": "2cra4RctRncBALDeMptbyJAFwkNRyNXi8FDuv7oxPGHPGU7SJStSqAsb9DjyJ3inLkuCoKvCKm5FT5DggvmmdJcY",
  "key33": "2Ax8N7XM2hCobdVxjUvLtktviz2L9F4SyDWxur2uv4pgdiVSudcDxejtCi6HvMDma9Es9MXw4wUkSqsMPFDHYkjy",
  "key34": "63BwuxsNeVe2JSeqYu1rXgrRAQHqZdxxDQrQtnzfaHkKsgDjPy3yyisT8NACXXGMpCQ8tvscuCHnPEh4i7F299HX",
  "key35": "41dNfpR2894KyJSLPeV6SvivgQ97Yb72LYH5N4sqnGeiWBfhGnGXufqBXyc6vVSX99VdGdZ9CVdSR3MbeYMNA4zp",
  "key36": "3dwrztziHmUWbYJvj4etdvER8EdKVKQHpa7iHvuSKnZdQeBgjJscUSZgp3tcxRn7cvRLyZmk4gzdjbKiLNxePXtp",
  "key37": "5wFoRvNB27y3FntuHQ6rHxJzpusy1AYq486jLnbw5mfooYvd2c627xXazfexGtteJhJtVfpWaMtPLR8MLwBtVhSE",
  "key38": "DAsvkut7gDr6oDRqwDNZis8EChtjiZeapE9aF7gXWiYjCYq8xmoECB3SgBVZtrpzsNojit6crZWK8orGSRJfeGg",
  "key39": "5aRYFNwJaQWWqceCygAa8JB1NX6BGfxJCP7rDp1XFpMuJ2EAuDqq7ZQrERmfcqdF4qx8je1wbxLGqwFA4J6c1z5Q",
  "key40": "49L5oGghqXTeRCG3uQ6ULPMVKajX7YsUqjS4DWS7kQcAdjGCJm5jC1GgrvYKtFWFqJpKFx542NxqCxNBUReHkdzn",
  "key41": "2rwdMHs7gwma4dsKcFQ1f9U7XvNBZjSBxdoxBrLskLWCfuUK72EX1qjtrHsdauwML7uQDezxwaTwmAVfnXgyRQYH",
  "key42": "3SJMr5WRV5PxxF1rEGZbmf2nGQk9GPrGhER6URX4ZASDujr2fbZ5d3KeCeypdD4tMGQj1n4yLXVbCSGMjoGbVAMa",
  "key43": "3QfVzVMTPEkiNCon6mBa85SNwZu14w9eztyHwjtBRW1XabmUEqBg6agAYpRDdvvanfbwTmaXNEqSsoRQfYg56PSj",
  "key44": "2voaXU1ZeqekWxxwPNkKaYdFCNjZcHQxkyvLHQ7hg2y7gKVrNLPKaPtoNkhQhizxcwACQVvRpCo3YskzNmNikk2z"
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
