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
    "5nNQcC2LvXxHAUREx5wQJstc8CefhqufNrenegzAawEV2qnJ59wo1LG8YVpca1uUi1dCDifpQvP3AXCxkSSEvhhM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4exLMmTMS4Ha6szJpTQ3NkCN2McVytyW22V2NMJuC1iT7b8Pj1QRwJNuC9WxLPSxJH6Tyh8iUsNyRMwNadGAmKvY",
  "key1": "23y5qct7ZgSAc3BBhSvYUPW532HoJh6mQKHNznhBaPyvbQE534vUNEzLu77N5QCuffBx1sEEaFxSRYtpWp2zsLJD",
  "key2": "2wfBySPXCqurfxxuMBki1kG5NnbmouLuD7HFvA4RW1e2GAjVvqg2P9Nb7duHA1qNSTxUY2gFmgbYv3T9MibTauLe",
  "key3": "5VrucdkXJhkenP64fPAHvjHVyD21KP1KyBdCeAbVkRBEBZg6BQTxqCkce9PWwM446RpvvLNegcmVJAzMvaYbreVN",
  "key4": "2XtppTmuiiLgDjSriSTC44qAjkrQCxdXzTc94qz8oUpP7zPbtotos1YoetjkJYr1JeDfJVYsH6RcbbbNsge2DMs4",
  "key5": "oip3yMSnPKqcFmW4WyUBcKP2SGA1LEnvwxRTJ3PcvaHzdpCGAj4yuvDjh17JvkgagHhYSVEZ3XruMSPfp1C1jGo",
  "key6": "4viqCyZvoECZyNgT9Tht51CCW99CSb7acdqJkoejWM5jM4EDCS9C1XPZp7oDYUa3Db1NgMnk9b8RywkHHbDA3Cap",
  "key7": "KaFD87UvuHzaCLHTjmgqyudGqKeCDEV9RxDDU8sPorFHh7DsBgFnDyqm6SofRVXN6o4hqW7Yy8hh4Ccv9WkS78N",
  "key8": "5RpqPu8qwnfqmv6YvFE1q2KUP3vS37DHZfBtmXBeZFMymLPxbefYhzZ1LMADgW5Yi3KrUVp8Tsh1K9f8SHXaKwra",
  "key9": "596eB1yss7DgwYiefMvBijR5miBDpjUfVb14vUrXtzbcw6CpePBvDhcfmJA8ZDjAXJGRKTiQFs3CCfo3DQ9LLZHw",
  "key10": "21ZE11Y9cguxnzDtzjoYoJM4Dw2rFi89xZfdB8NXFheH3c6p9fc2FHuSRHB8DoEzn4VouMcLJUsJTwaLRsyCDuEV",
  "key11": "4YratsuRkYcKpqyy2zzFHocAU3dXnGNzRWgftF35r4mN5JvTcnZ4VNwXcB5HzodMkpZswxyi9gDXfb989G1oxzih",
  "key12": "4ZsYE9rScoU35fbdwWRHQuzn5H6ScuQJ9rUhS8q7DDg8HgUTicgkatzepffszKqBpPtypJ8nj1VbA62mbUzgp7Vb",
  "key13": "5Y9tSdWn8dpPk5TrRVGVJFHVUPmLGAH5AXfNgntbrZJ28UzvN6buXxNJkd71mDAxYijrh7WPvJPudqk4DMRcZe9v",
  "key14": "51yZDHHHXsZToVTaicBCZRUVF78JNHzx9swzEL89n53XuQnC5R3JU361iP9xEdurLV4CidZFTGfzqzxa2YonqCFz",
  "key15": "5mwSh5SwuCSsiYW7WHSiRS6FMBKQLze2ysp5Zpk3dH3Qs6JhnAuiTVeaJwi1G18kzUvjDjNzhvSLsDxZbV3XQsX1",
  "key16": "bNtB3eoPN7FTmJMoELK2ir6f3RGipc4R3Ldc7GC6KiUJVzd1mXJjF5zdjeCgFbQsmKCPuYWrtxCBWEh4jDW3gmA",
  "key17": "B3sTfBiXoLtfctKuemhdg3mAKpehJbpzBuVMBbN1CrjkPbSJNk7rFkE8ohBju8kMwSpdo9msP9Pcy64wfg1JM2h",
  "key18": "2Z8RJbvnLABZVo4MStLtGf2BKgKMpAjQahWymGark7JKDLbp5Tf1bpVcziMttQzTvJ1ttZs4CsxshFtrg3NG3rQD",
  "key19": "5gqfuHi1pTkPUJpKyC15SsrMqahvRNQQGPfCX9iwdtBHoC8Bxif4H6WbiQm9ce5cjdDhacfahLGjMRyuFCQ5b66Q",
  "key20": "4K3puS27EUN6zJ1c8DJ7JWa55pjtgn2KYF9keCrBX3jiMmG1DYShqLtaZNpBiYoFDLVgUCq6q2VQqXr2HmQjEgw1",
  "key21": "5Qi31AxYygkgLkApzrLDzUJET63KizAZqtF5VqSqsSP8EBaE57FbJffRW7hTu9J2K4jndukvJG4xVLX65JrixyDr",
  "key22": "5Tpp7bh11q6AN8T16ogpHYpyhdS3weSmQrXejHKWMNJ3KmKbYtc3QJm5zK4znL3zkWNHaJt9LqmwQKcwcbpTJAh6",
  "key23": "3wCi1isWtsRxL5zNuvVnd6tUTr2zazzWsmHtntK6ZeGwEi8UQsSM57PkBKMVKSiFUUc1RKpeX6kqK5haYPo3qBtC",
  "key24": "5qPmJrdSNtHuBMJoyjoSsU8bXobw7mKJwrkEspXnjDayiuR5vu1RwWCM2pCtz83wCM2RzfpUTL8Uvn5Hje1uSLiF",
  "key25": "2uiQLEnQdAcav2AKJVeoFimUzA6PDoo4Y6kSmVSXsFVrw8nQPKVkZBNr63NXgWZkJ7QX5TE7ZbBGB6gctZDBFDDB",
  "key26": "27XsLYouzs1QziayhC5coqsmNQtiFAWy1a3uLWhg8GPAjCvYFXr14pgx65JyJgEhCa2ftVvyprq3X1aKuvL5uhtj",
  "key27": "2P8GczRfqGk4Tc5Pk49mZ7NUq5AHLwWfT7LDg4F8GN96vrXVRorrCqgeaYvvxYVUzqAG2BEwPkfT2tcYBeAMsd4W",
  "key28": "3KPfmquqszx8me99c7TToemJUvpEgKcMXGk7rD2jRhzoytPSKDgzKZJBejPvLdTX9tmP9gG9DMa5rsPXvC8fyjaR",
  "key29": "h4Vvw1hkMNJjhWf9kF4WnWHhTipVcZuMipGoPbzbnAmcM6kXu7yMk4959bYCpAARX7TMWjtf21LKoYAciwNMBBU",
  "key30": "4jWqXgKsMVrdyVnhsEH2irvczhxYCttyhBauwMVMVF4zXdVTFMrMgssLqT1YdTBHoHCJLDUM92GN7LzuhkSgdP4Q",
  "key31": "48C1hox7PZXKYxJiZ4aqkN35ZkqLdwkvb5zB7ECKw8a5cJfN3MYx19tfFa4zSqHis5mADYJ9uKht9jVYw5gjDUpA",
  "key32": "2XK59r9UgHxVq7XMptjJb28rmnAYZ2fcrtGf3zC5zUwyuDWJKmdXhgf44FUxD8Js1G2WAmu1aDiGtDFxTsUXDtP8",
  "key33": "64jjTuUsazyGjK68ki2PLAmXHuP2JmRZrQV65GxkYiPGp2gw6nmhxfWB2UiS3QqZ53Z8W2JynWFwKGNdMmJSpbYa",
  "key34": "3gqAwYSqnDMmhFWiRzbJhYL5gU23LyUbDNX6ZUwUNU3YwX6u1mMFvduYwEBYUWSDqwzvuFTbSDnhdwLzqRbFskDb",
  "key35": "3i3Jr4wnJRiqqF9yDKLAKeBBHxuRcW465MJgV31amrUaxpkL1dZdAe5kAz1ze7cfMq57bxdQe8XfNXHaVzhstXED",
  "key36": "Hyxdbm8shq4hkRaEcnGHjDVmFJh2D5HE6gjsCefKwn13ZnkkiPAMG4akEvp1zBkxWL2xBTq6XP9hEuvezfBayu8",
  "key37": "5vTZGEHfBKRHUFvzDQmBiwLsq9wRVVXou8x3mJvKMWrjRsmAV1TUPgr7y5kMeS1HneU2eCiCq1q5ZB1SD9vhK4WF",
  "key38": "51fpAFWiCZ7KJ7D2oVP51piMaAx9PpACjkrvbtyJwqFAV93BxjBCFXyofKEyn3xNoahY8ft3ye2pZownRFzKR4MX",
  "key39": "522aeURBdhpiBkeQECdprsgbzgn1xZYZvoUgnHaRkNcbFbENCodQUW5KWtb8LwLrhP6zhcTstNJhDRjsSZM5HD4s",
  "key40": "pLgpgKCmxoxLMH2AqvTDfuvdenjVDZb74N17QFeE1CUC1D7reAhmLfH7kv5ibPmTXuoMXdxrasj6dLEcioQdJYd",
  "key41": "2HzwY6FK6UReecYXbR9uRDw2vRHsRmDNgarr3uhutmrkSUZRrnEnQ6MsY8RJNekRFtFCgQ4vbPZBajFbNWck2SaZ",
  "key42": "wpLaCP9TzYNkmatH4MiVGF1PRKb9L52XFD6dFA545eGbhPAXB1mTDEEASeQBD88HzJ9TeZDHHMMcB5oo4UgxSmU",
  "key43": "4GZgGPQTRtTAzTG5vs8ZxcgB1EL58wTjxpRUwXuTCLZFbfZ8gm9xcxjNW9isyL7gLafrHfstZUY1TY3Wq26U3fox"
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
