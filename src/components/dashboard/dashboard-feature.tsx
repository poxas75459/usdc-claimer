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
    "2dSnYbpzkF5wTBtvc4CqAFJCZGXwhadKFEw4AYTYUfPZU1d9t6UQRSg6k5gv7gKQtRDe6ddtDmZD6aPPPGEPtKge"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5WAr8sbQ72MQCWXosUNHvAmeFfE2hC1Y2i3GFq2BjugpaRRgpzpzNsEPANMDYumkh6tkXEaevz5f651FUY4csK8C",
  "key1": "53RsyS9hnCXP1xoymhdRS1q3HdA4QdjcW7mritorSFwJm4gyAegfbMNEFR8Y5VYX2FWAUwdQ3dp5xZFbHi7CayYV",
  "key2": "3vWUFdmrDRNDqetA63jzAd1FSfegapz8nnwBJ9ZxoJrZpkaZmtR9p9iRGqZhUy2x95aoBcbhXz5eTyq8fqLfnwzg",
  "key3": "3dPEW1PVctpTJnn3Dcan94h5urLBSy38zuwGYMGAgSZVrz7sN88mSCgLqMZAePdcJjPn5i7iS2UnmhxZ2sr3kZp",
  "key4": "4Zzmw842fb2gr4rd5oGmoweY3f9wywmqq5VMGModgWfEUTrGHcKhXM6Bj4uSabi2os1cGAod7KsdgXbuzJDcHxw6",
  "key5": "3Nkjx2EcqWzK2SSdQQvDPtfGRe5eZkjK2o7mmkGZv8ZDQmeV4M74QbgpYUfdacpuZ5bzmf6i2vHjonbQxXRu5WtE",
  "key6": "Ny4Air7LiGrZGg8KVjVmgEY6K23GESTYmDoRnW1siS1kntqDDqq4DXJF3pwCkBfHGVvhT1ftM5BU2i8LyNXjgdH",
  "key7": "42vRrrGrvYH3GZn22t4X51o3p9TKU6opwufPK8ZDehNDtXgmwoMF82YboqfMLagp3KqxkcDdSefMPNkyuphvFZE",
  "key8": "41mPka3KGqkVyxTEiL1C173uR4zyhGoLJMmYf8E3FGmS8ADdrEgBSSgkqavHBf1PLY3eAS7LLYggmPnLj883bcgY",
  "key9": "nuJskh7m6Ge9ezr7Z1bpEwWgEzY49Zb2uQJyoDkTXv1zp8v75tkB7CN8zJQUD5AvvPb7uJnMWoH7fxycXdnDfqk",
  "key10": "5AHg8ZMEQ9ccVUArB6VsyEhbLXFoJgifcUoqqxmVcZbgK2NFiFY9XWR7PMjmNdFqXArUyJaJ6kujvrH4fcN6nenw",
  "key11": "4w3N6QjMuwr4nSgrJPXWSpr4oZESGVJxPsq88CUunQFpPNzzRj484wXCKNzCjz6ydatf7wNwUf41kRRPAJbc1wjc",
  "key12": "57vjqGmkhKex5TU43m4bfTz3zfq2QSojv7PFoP3uu2qZwUWWeNkp1VLWr1iLHrN4ufHxsf4PUnVxE2oNyJUpS6rU",
  "key13": "4Qd3MBo3NJn99txE6S45yBXdYtiFE8aR4TUi8w6brKHhz6ASHGcpEi3CQiCpM7QVexiAnXVfphEFVRFA6D6xGhLN",
  "key14": "5dNJWSYvHi3weTRUDjRPcNFiWV7sUJHw6pRfXpNyoL5ZRMVxBgUP51W4AcBhGHPSoroCqoKhCFTxovMZzQVwG5Cs",
  "key15": "5kdo1i7U8jiP1vfrEEA37RhcpofB7qvEJ1SzJ2L5WRYJD4uoR5kSV9R6BUjhvruu7TVfgC2HhrtdM1ymVEAWSX6c",
  "key16": "21XPaw6xqMoLre2Luinkm914bJHLaQJgHTCboRaNVqZpzAwCRKiBNJzM67QZKKG69m4fxs4KsoTWJ9qe52Wj1AAz",
  "key17": "Gv1rnYDwkvq3gFuLfQz88u1W1Qmtjh1i3EVuaCjeKvCdyjnrLrymfDR3fQmqhCiXq83rzFndJcr5QFstxYZ7mqc",
  "key18": "5yoC1tkbvFRvYvHDChp9XMigzLmu3b2vWpsmymsUn6m7hruGVSoQj8rtWh2oWxq6m5vW49SvmQrd5Uq7SKdgCjrK",
  "key19": "2HxJGZTpis4ZWLkw8C4wDe8b2WCGvjgrK6CMsgZ73PzBeRRaGiK79if2AZFr7yFyyr6fnAKS3mVxbdqw6y4JArNv",
  "key20": "2oUAYqcSvvRfhh7556cCm6gG6MHTjEPtS6mQdjeU3QHK9H7WZPF4FqMfB4yNP14C3d9sxK8GQiGZZyy2jzktjcGv",
  "key21": "26RYWDZJduqdwcyAP4HnMJLMcXAsD8UUn89miFGzaStXRfTTQcHwGXMQTzAEsjw7az63yHUvsycPguCzTa2EGtno",
  "key22": "3YKXDYR7kqPNoQkYvYnoACc41saCjYUWRzTvqT8QbEmbjMbf6RYbD6uZwBiy9FUB4bZ8EnvSnDvW5HdkEz7v3z4E",
  "key23": "41V1Yo6HPEA8wYqARZyNU7jErkwPW3EdmtSzH8HqZDwju5dJpQAGFoP1fSSLkvmwSjCbKeYrBHP37VnLnJD2twrt",
  "key24": "3yqcdiPqHvx4uw5PBewfX6GoMNJk2w1G35sLECR5MbdSUgkREdz5DnFb1QB6fdMrW7g2SP67qWnb8vpr8xyRrFnN",
  "key25": "31TQQTBwpSBTaJR91ZJ1ABTvaKEGaeJpv5HKqhNURyqHJBbk7xEKwawArhMMvHDNYA2jgerhPo7FvSYAorQXjPt4",
  "key26": "7SxAZnRpEH9g2miDM1kUfxiqd3YLcuJGbhMoDJNfR4K4b9FVxYC84zpEGKZkbeHixMqi4Bjtyn63YYbEtyzBcPv",
  "key27": "3HAHKMPgCceeLKxub5EyvdXVbpwvNMAyEx8viPJ45rUD2zr6pbmffUBExDLn5rqtxHtxWCkG68aHQLf64aapGoa1",
  "key28": "67HXb6M2349zAWM3S5cR6UCkun4ddgnGP6WNLcTSgqxkQ2e1iPuBFFwHjF4h2WkZ9LTt8SAU3yvfvsUwHAebTMa6",
  "key29": "3XN3QGFoAhxpWt6k65Tx61EF78r7z9mM43nz1scGAcb9op4DFkNyALQQZ6GVUbJRpoUoW6yuFdea2Tr7t9og38d9",
  "key30": "29WBWNphsBcSSsTXtTmTcWCBH2raeNtK9bjNYxvJThQraEptQgz5reL9XTXCTfBoiAG4rFGGmamK4bvdBdkDMDte",
  "key31": "4Wg5783Lm811JXZpA5CUmCX9kwwrgPSe6jWo1ctaMMgjXQAnE8RniB93ZExX67SG1hy9aBQ1pwq7R2wNiNS1Dk3L",
  "key32": "KyRTqzY5dVySyBgZUYVQ4bmDvzMw326AQRC5jWwoybSB9jRv6UFsLr4tdtLj7ziYjo59nwhmZkyLSbtX1XMxtYX",
  "key33": "9S3KgaVmbkKx3R38Ruw3NGSSU1CPrNmXabD8MSvnqPdXHPbbv1neKYCi9SaUPDvRN4XvrJcxzDhtdNvFnLPCgbd",
  "key34": "5VvbUhZm9JkaqNtjKXPYjxPEcrgRPRGQMdEqZJj1Tkq1r7v5XZKwJNDS2cmRedy8NpQzAeQY6yVhP4j76t1Ad795",
  "key35": "348rCFjLWNMGmWPHiaJz5yUa4s5ynLDtDejUMGy5D5XXnqHDy5Xn4qivS1XK7M6b4SxAKtDxaoo8MeRgPYYnwhKe",
  "key36": "2YnpLoH2Nvoo76ZSsEncv1VhJMSZZxQfx9UAo2g7nTsAYArFBFLMEwYL9xhjy19p8gAc3LzzPTNxXri22tgc4k7n",
  "key37": "5Nx2qiR48MYMR76P35wFdaGzPAJs2VPfNyUPrCEb5Qu9i8bU8PFknzYR5aHTvx2sAHfNLk8VqKqEvabK2G3xHuwz",
  "key38": "4uwLcJ2snQPAGmxsWDu8LppRx58HRpeTD4prkaCZW8vV36UgpGu2xsFyaSyuDj59rTGoE6NLMvsWKLDj4Hsb9yvm",
  "key39": "5RT3dQrr1xGSTyj7whorVA5apxaFZuRy1h58tn3GofCwR7QpD792kFmVwt4CwG3yuRNgssGGF2q5MuhSUrUTYny3",
  "key40": "2mzdi4S62TKc4RciWu95edeQe6AhZno89Kd5K2LZHyAS6HocqJvJ5GZspmszQ6xTMparKWH3bzGNopGSYof62Nwm",
  "key41": "K1aKWmZbqxn63a6RVduP4WFfMPtpjrsFXdA68v2NbUqumong5wJTS9T9owkBs3zqATvdNJTd1QPfPwdjEGjQJTF",
  "key42": "2WrFfD4miB7L3dtnkBzTMgB3xBoXzdRNSnBx197uLdB5jHn9U4FbqajzTbsUQnAPHhp7wmrted3NWT9ELXymwxuw",
  "key43": "2EEB6tnjJynQdhzbFMEfVqen8B1nzvqHvUpYgcZpe6PKg2fbAj6nhYCo8qQAVMqjN9gZjgLDeNJyUvsUisYa1Cr9",
  "key44": "5y97QtoRrqmi4so2PjpEBDPaAgyikfibnubKHPAGjqMnMbF7NVdMvCkfKHSezfbmr2UwSHgt6LALM8TMwZhgiKVP",
  "key45": "4hNCZZ4gidamgvrPuXjKztbpApmvj7YCmRbp2rEVas7bzf74Ws824n9PCZ3KswGW3exjAP69UrZnXNpW5Ns1sqCA",
  "key46": "7aJsWd44QUFrNBm4NGZHMBHgRCrveTcUiTfaWEXEnF6CxqCQsRL8TESu7bBWi8R1bE4dvXaR5Ht2bnjerBWRQW4",
  "key47": "2j9fr9wYiVxZgWZtfj4QKHP9Z7oqQgg1jmKyFsobbDAQJh86boccDxnPAtZroshFzcfQmokjBahb9idM9bme2ndn"
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
