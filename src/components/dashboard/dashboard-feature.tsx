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
    "2zJN6s3Vy2qvVmrk9K4oN73hHUajtHLz8kQKssayybSk6HC89Eij3CYqAcbR28PdVwC1ExMy97eBfHHHKk3uFUSK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5k2VUHvBWuyynqc4KhpcHicHZ2aHEdFXCwS9JnqDxwBH9G8RgwVBrcCQAkgamZjC3dcmPaZEgQsF5JjZF6p8FePb",
  "key1": "2gK8iPnr6KcHosbptMT61gfEviSG3sGgZinkTt6jTAgQy65YSSEUf49SFXxBU3woNRnwKUWXebmxCDKqwyfEwZmj",
  "key2": "2ydRjUEkoD2wEGq3XbMxv1adfsJcMiymihxFo8ve55hF6pa7Uddn89y5kCY45gYaY11rfRnmA7hcWjnShpoadfEh",
  "key3": "4Kk2jPSx4Vp4uZYm61ow4iRb3ANuMCiPJ7UvGe8mB8gVzmouD73rvDXQjiZo4jNc1diW6CgSNE23rz16qKVfwKvg",
  "key4": "3yZShhCLFtqhKxyUHWFQcqtmgtMnvxcFf9Rz5ZeHKMpi23Ebf8ikrkX8hj9SkJE5fJeuvJcjjvH7i57k5HoDHBci",
  "key5": "2srvEHAbTfgGyEvdCHNncbggtDJ6ArGHfrDwRYdmiWWSYeeTbReaQDDpX4AVxr7xuHrTKaH7ms8ko8EhUF6wsu65",
  "key6": "5kfhGTH5NyyhrSE6avq2zyNPdGKH54o9DKWxQmW2uBh5p4ZuGBoRRAz8Wfk16L3w7PGLbYz8dhp6EyLUtEggQwUV",
  "key7": "5VzqWU5kNrLKWR2wQYC3Y18ypnGmYzyA6C3DqbYGa4GV1fZnyVnms9uCKr77KwSWZYRJpdWcyE9azbqp2hNoUnyT",
  "key8": "xx9jgXoETfaqfg6qJd9HmbqaAf9wtLBUYzcz6iXw6GoEWcYhARwFRt2ykCaMMiHVZRwyu3UDUdEiNi93AHcSwqM",
  "key9": "3nFE7S9tzKa32h4cZLLDTwnAxoPTXJ6gUcJcLmopfQYyXffWLWJjxMCbntjMjntWqb8AENxqAMMMj9ANSA4YKRwt",
  "key10": "3Zx1sf9aEdtiDaGSTKuqJU9qfc3N9Vht44dGoeQtwbNQjExF5UueYjbkKvV7JDDSPtNc4FyLUKraXFpcoWTpBugg",
  "key11": "2pKSfeAjf2H7h2a2iBH8idQFHnqAzdqZS9jy5CiC9adgweAHd1mLHmnKvRtJB4m7GUTXUcxL644aC3ANceho2ffH",
  "key12": "4vWYpqhaDnytVE6ySFfZ7amP92xPUgnBaWvoQCftyp7W4HGBvR3KXPANKjfQYCiacUaEnbXspmvcv7FP2HDR8v6N",
  "key13": "4ZqXmiP7jpdqGB4tabDuYpipa75PDke3XD85toUumc8MCMdwucFQJ7mXGyrS5mN8Dh98nYqaHrMxUZpXuuJQRCzy",
  "key14": "2sSXrpyyVX91MGt78qnVeYLtrbStPS5qfoBFHByi939TCLMi9f195X2ixcUyApbzYiyJQRdnfH3D1tz5U2sw1Wm8",
  "key15": "wU4GjEiDCrq6jxV3cQX55uTx8cPL19cV2eS8asFZLGhDajLgrNrmajwm7bWadTeiT6WyoaqFziS6ZQbn6ECCrHD",
  "key16": "5MDE3QKwwhUfyRmquYtPivmNrZmH9ADugjpgz1LBS6DkB1HLBRYHCNVwEMmsYyxet3pVLp7XKoHeP5uyCtNs5S5M",
  "key17": "2RMuY62BNQVr5unGtS5HFd4Xx26C7bfQ3atL9t4WGp8dvdjoVngbXU5Fcf6AYSvu3T6hq2psMYyBZdDQhAv2DpdB",
  "key18": "xXAmMTHp7So6TfKXM8qcpXYT1qGXHymYdsRxKFN2miFcBGc8APaQEPx5c7NP4R8n8WtuqYYEUDwLexrEiriMRe1",
  "key19": "5ExUorWsHVnHeWAjkVdbZRPpGUmSVcnvAui14AqsmAsWq2Qt3jEb3YH92SMLweoJ4RxZtB8WphcfajHzLvaVWVfB",
  "key20": "2GhqSEhAbGffRY5gBwshUCERCEaBZHRTfMmxE7HmG4QiMnZ8fDTvc1i6vcgVHM1odTKhXKvRweV2FVPeR8MVcMUz",
  "key21": "2shgzCUsLuj24jQnvrvVE412beapCncNYVDUn5EuJXmjKZinkJSrqToiJeo1ZKhBVqRFoxFhBBcKdkagYRt8mEKC",
  "key22": "39X8SJqa4d5sLarsU1LVDn3UQBMyJyd5HCDf6MDj3aTuHM3opC6Xh4rhNcFvckCH7RtjfA5v9jvB7gqEe3z6Ffe4",
  "key23": "4zYpP4zZMn4Cy1YKxxPCngjViZm1yKpW7NgWPUov8Wt6s3wLQ8q3DrRpX78BUvoiqJ3RZYxLC81QTPQwZp35nkVc",
  "key24": "3dm5J17qSioARzvdrnmegAS2BwD3vwuu1TniwCPktRvh5XRq4EEe4Ww8mQq7SEzvzjN6kpSMja6LfndgEJzJaxis",
  "key25": "3hi1ra94XAQMq9j17DNpTERS2SqUgngzXEyeDXEmE7USgqz6CBxy8P8cqkhzpjZyNB12rEJ1etQK4EjHwsSnnuDo",
  "key26": "3Ljf1gtSvi4qkyGi3PLjPVTd2WXueqbCm53dqJzuB5LAGyf4ZegBfULn1nrKZF3rtk4taB9ue9cHnAza4eayPL6s",
  "key27": "5a8xk2GNm19qdBx7wdNXMvc4fYfjKbxvo12Evdga9nCEqmoud5y6TVQZsu43iHP7zSk7xgCkjffy6gu5AJFUydjE",
  "key28": "Byb2d9WRGDfEDE9nBC7VLtR5pk4ajYcvJ4UegLb4bgmdY5czM1yYSuhyXA2nRn448prcL5kcSr6QtaLyXYBTTf6",
  "key29": "8GyUZV9detAdtd9n7mf44jS4GHRujbZUVBnTLe5vqBrJRaazkERuzH3xEr8zBpgZBrB19DexRb5vLZy1gFej8BM",
  "key30": "5v3sV3irK3D1XWQWVPFvTL2gHnMx9fBM16BwSJtmo6AfA9JJCWbTbqY679yGpE7Qx6vXMtw38Yg6JAe8KevVtSZs",
  "key31": "WhmfScyTBZAohKdJmtuFWTvquUXbGzjUzbbM4h2QDWanxEsW9iY8E9BSRTeVyQoXbuvkT7erk8VnEPKRaQAsWMs",
  "key32": "5a6GdUVnwg7JoF9uxWjb1GEcPEYDz5VnciJSmMCAQBhmtQt6ZoqdM6Cvwdx2CcRRr1wEvUNaDHqMSsG4ZdcG6HVX",
  "key33": "5nfAkDXjErZtbTWDVAroNZWqYqvtohM3g4e7435kPoAJu5W18VZAcnNHTSW6AmidntkDwaeyX58dLu2hoMfHx5Cb",
  "key34": "44vUuL9BhvLkiXdNezSGAtH2ypQMFcYgzB7oSexuqmXvTP5NZMxTF3Kcp6YtBsUhN45RkYyspt4FVhRshSgEx1DK",
  "key35": "4syXNMzsXw6urS9Kz5NaQz1SytefQnKPJCDpyHiy7DjADWhYotHc9UeDwEZRTmM7pMCpr9fEsL59zWztenRqgvn3",
  "key36": "63MGxt9oSEYVEjThsKnm7MsvCs8Kgzm5Y6wAfzuRUoD8Wdo8JnR9WziLWnkCZiTiFBAXtVuwnm3JhLZLmC5Qtcnx",
  "key37": "4XgQ65zX99mpW5B99qXzD9LMPFYrULXk3oEiDjErgyGwJov6Av3boxWZDEKSp9VdqMYgHwhWgMKu3sxmtWLgkiUJ",
  "key38": "3WNmoLkpRigD6FEnAMYLuNkVgW35cByydyysFCEq1EGJbMdYuvkSuR2oDkuDq3itCcDaT5J3TrCvYJD5PqVZQmtM",
  "key39": "48AerHjk6Uwjhigt6JbzVFume8vneVsMdSP3YdTgFycvD7nPEvZvhCQbfTWDZzpUeVJwP94qckprzV1chMHJuxtu"
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
