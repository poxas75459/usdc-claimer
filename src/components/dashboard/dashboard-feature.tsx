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
    "4uJ9ncPXUHGc4mhmu6nuHHSnx3gj5zKn557wNZe312tPS5xg7ScciYdUErcABF2y6ajVui33PLU4hSpuXn1gbMCi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3zP4sxj5Nozj7DV5TMpQPYjsjE7EtansFYa6QsYkg2DdGQSSFGLZ3cfH6bwPqtV8JV7E5MSS9uJYm7vpkn6X8nCd",
  "key1": "4LN1Jd2XsZ6YJNWiGn6enRKXeYxUanx2fWcXhbZfQrh7jhNh9CUmHpMbS7W7JYQp5F8sC4NfxDyJd6GypuwcX8m4",
  "key2": "SAnoVymNegMpDce7RVY1eKFk791RcH1BT9gWaeC2aSDtaLHhZR8Ur5Uy2gzENCW8CsmJQ6xWdqnjYkYyqxsQ2iH",
  "key3": "5dNbasxegvgxxnRVMxPafbvd3CN5Hjz8H8NKXHCvFm4MyabqVXo49wiDRXeJZDt8T244MCpfZphHGPWyKnjjBYSp",
  "key4": "2ZCspPJJ4hC13dQiz49c96dHMkotQBcwqr6TsgLaFCu6rVuzVYUPeWDeu386nyuKdtxsNkgLUHqEBMUYnkvwdiTf",
  "key5": "7JACUiCP67cDiqRAFvHnMVBqKDWo3WeDdKsgXsVcFzh9rSDovZ1zQeLdWjRHXz6sXrrgkJjy4i66WpqHKKWyJhb",
  "key6": "3k4DJi1WJNHqW6pPHuyoF8Cj2QpwzoGAmBp3w8hm8D2Va5v7LsA38W3FgzeQtfvg4MYy53LdDGRRHr8K9SFsqdJt",
  "key7": "4i71UrvjriaSRTjViq2GEJivcexWbjTT49twesT6SQPLi8FfFuqycCE6ZvA4MrLtYwZ5aexrgF1a1dizJYoRKvsf",
  "key8": "4buGDFrCc2aoK6oittLam6Zwofnd9r7rsegjzGEqRUGSmV8vfHMJhWasr2vcuRaoqvr3LJZGUQkDK9kxWYGH3FY6",
  "key9": "5W13Axci41gryhP4fSmCDGCUtMLyDnbD2QhLm5P4ALwzKuazMxgZ5HdVoDeCfG6GxkkkJGWmCZ3bVEXpBNbWYi2b",
  "key10": "29VJfU56dCBWiVEkW9P85HJkmCbHsBooPQkUvP14ikJR5jepm8Kyn57cFWKBokmTZZtksRdBtuDLTcPtxtnvjeu8",
  "key11": "3YT878syCYWFZ1fvBHnzdxq2JrNFAZe7r7LN8QE29xre4Bd6ntuRSwEEZUds9E18oL7XWV98qPrZtp8Z6Urz4EyM",
  "key12": "7v49BcfZB6G7EcrzSgDp7iayq3DsZnNg9zs4e2SvwpXdGGgD3bJHwHRjNwkf5aFAJgcvnDaQWQjyPg2w6J98vnK",
  "key13": "2hXioQPwDrBsxKnuAU11NfJUGLybWmztu7UdhBrts9tosyuJo9kfyfica6QYkmdtFAj62n4UghqkxezXemXZsS4R",
  "key14": "5ED655P5q8q55qH9zTMnnnXUuVi1GiqtV5vfaH7gAuuGtcZKiA1CmwAtNcL2NrdFkM9THM4DhoPwESwQ7gHyzm4r",
  "key15": "2DMi1vTJEK82icfvy5HWhairYaVZnKVMEj8xwsxYUpKryYYbtAUYykGXiewGL9orKsazXm3eiqiEJCdpYPzeYm82",
  "key16": "yvGHB7KnhNjc4ad6iQn9sC9sFJ9ULE8eXT8mMSTf2wAgUX4bKfJWkvJ9o1HmYYUHvY7VzkCNH7TzEsQm7zozh5i",
  "key17": "5rZQWMhbcNA3ttVg9WAnEg15BqvYpEpRRbKfpcecJejED56xjcJ4DseEWUDQ4dQ6xxfvwxyJNkiqd6e1H9gJ68pg",
  "key18": "2FSYisjcEgBwRNjTbhANVfQXUrBx51yonb6rs9umg2ydVU8d69AKnGLi1nCXQkSUjqAXjBwbo7gcNwt67nficEBv",
  "key19": "3ovhREhvjPfUurni7EBPuWTjWfgtEwvKvgD6ZsirmbiK3gdHzjs4PECidEcbQtpCrY7cvAS9gi9MLM2trGZtx24p",
  "key20": "2iazTw22eQAWtEDQbGQm3FsdyP1rVg4CDHyAvpagNusz1eLMXWmQkScxNLwtN3yTZbd37A8xKWxFXywP89FegoWU",
  "key21": "47qADUQhHRjt7oCzBxHXjMwWXrkiCjfzoj8Nr8YXo9nxRnkCK5qWAuoKm6ifhdcvfchnTfpar9wMHXrm5zdAcC9B",
  "key22": "3a9FKBXResojn2ekoiSPCFL4HjXVqZ1Pi9AkboRKiVjcayrYn7VkMPUyi4bDF2sMgTWjM66cA2oyd1pQDuVmsoXE",
  "key23": "4mW4Cg9emi8SSr4MYBfHgeusNt7Zuazd79B13gdwATUm6B3S8CHnDg8hYUFj3fz9693Zv4KBkdm8DvMuCCrX49nb",
  "key24": "4fkWRdDfffhfw5AixAmjddncLKr3F5p9PGRHL97tBjXFY9tYhwAmf9JmgcLuG5y69UpdkGz2QBrb5Y28T1wRfQQ3",
  "key25": "5dxsPQ4tSJWNyyxbaNK3JtBuRh1QwTs64C3VitMvbJhHcqK9uPinAn6VLmzjM7GdPHQhqr1KNzCwCBkqxKF1Dr7t",
  "key26": "ihoH6qb3kRMkmRx9qev5aB5ogdZxcg4QGBw9gkUsRRDt4LTXBNfoWxJFJkmiXBRLaYcEvnk7SfJfjKanrZ4nJ3u",
  "key27": "2X2pyNDGY8P6rHPNJ8er6DdbQ1rNe82sQ9LmHqk8j16uJ8srBZ58EyzRBYrMsobU9xiE6W1YMEF5ia7LJVc32Tc2",
  "key28": "38VLEw74vVjrh2gB1q2tLVAqY1GnXDBrgtnBtgTPzizT56wTnJB5hydrHPds5cEGUYtZ5r1VKYJEVsfZgAaiQ9Rr",
  "key29": "3VaGyCKqeev65V5xwC2TiD8pKGL22Gsj3nCKpnF8X2CEX6v84q6Emzb57X73k3k3fixbJhShKVB2dREQRzFRG38f",
  "key30": "2PKto3UwH7zNfTjcbMzoDusHZkC19iWzH6rTiQxLNos6NUMj5dyt5tAGAYRBjJMtmuPWKiQPBz8WH1zJA1D94w9r",
  "key31": "3KQkEbu2epKvAbzphnUPGEjkFtCpaoVWy2WcF8MEUE5X9TnA3gfBmXv3cpeE9eRbUeiAWNohWdAEhYmdHBFV4tUf",
  "key32": "2hqcvmkQ1phq7o1ULgnrjq5dReYcGv5Xh3DNrXieCVp7gGHaiiGL9UsN9cUb5nVy8GmVGwS5aUE6UwJJPBJVi9Xk",
  "key33": "23cBhswAB2CHFxFgHoTYqYXDSqZHPcvermwKPDEKrsGxDsVVytEDVA9rttZBcnWEYEQ2DWCrkRQFrFfjQ5baMWea",
  "key34": "5mkrq9rRDyMEzFZ4tSygon7x2Mfw8Dx9wKLvYZ2K855CqXW6W5EAHSAUVRe1811nrqq7KXaGiWGwG2GdyFYaAW96",
  "key35": "2PxkAFQyj72FpXRWJyY8kmuK7orNFAJJyk56HgbJREZM6nFrMbZmdP9NWpVybLDCysQ2DLLjxRSnpENYJJZhypUF",
  "key36": "5U34eyZRss1pxEk291sEfKSakFZBma4bPKo8nQF49q49RH7Mo3Aj1T7ygMprP8YZpvfLzWoCHDyWBisHDBu3VezL",
  "key37": "2VyhD9ub24MPVnGagh3zhQgPad2XKaLDLsaXKDgJsnQNFntEJeyLb2DUeyAdLHE8Hgy8PqDsGXgdK1Ze97JRhzp5",
  "key38": "4vR2LLzhny1uPxMKj3YbEgpsu9Eh7ZDhre59JLkKrLiCb6XvGAEBrnBgtgSUCHdtCFWVu7vwa8n4A8bpqpGqcq7o",
  "key39": "5A1oN7xDxf469K8sARLvPyTv7dQirkZdH2MVcMEhrPzK1AZKXN9RJuRvJp2p6FPeCo6TZXgPG16bNLR66xwbSdNg",
  "key40": "spQYrj5u4mHa34ZB9WeVJjW4y9UEhnU6DwBG8ztvEEnLWjmZjrrENKMRFpuCwnKnKPDZ3nLryi1TRwU5nkrtZ2q",
  "key41": "4bCwjELyjuNmnUhtwq8d75bUz13UcpGU1ujpeUbcZBdHzwAorGr5RCkrG7KR6Pis7Ec9im5o1grCWZNSQM8qbBPQ",
  "key42": "5nD5tXWiiCSSVxynW77ALYwoTV9FXv4qP47eKsX1q51g1xPFgXHLwsSDkxsw9PpS9KFkFjKTM1WTdku3XzFP2muk"
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
