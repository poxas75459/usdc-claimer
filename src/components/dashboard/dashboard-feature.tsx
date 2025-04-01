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
    "2MPXRH1nXZV83msMRNyxnKxKUVMMbH5S2ayRBpDJtGWur9dhcvt7saWGPpLdtumqnQtBnSKfik3upE1FSmgERQ2U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5pLMqvYchu6fCt2T4Vuv1okMkLyrsVjEyAEn5oZdkmNVw1u8op9XoxJ9uTDo3fLJZuTCnsbmqt7ifEEGa2g7QMEo",
  "key1": "3xcsHcdstRc2CHeU35yxd93rTxvJK4vd1aCLid5NGgUZYgBZGZT8MFucZiB74N32v8akkXKACiZ8sogqUCkgCNHC",
  "key2": "31Y7KU9ViQWdVuM9ykt3AJnuPJvZrtm7PXHemuGtxgxjayt5wQYie8UyJA8WgA7A1oEVGqzrkx49d3MoRdJ7JwiT",
  "key3": "5bQQ482aZF3N1vNCREXSSeVTLgMhwRzdrCSZhWiQYZM3ZE7h3zduRG7yyY9FUVkAMTLjrhhdcoUuBHEyDpmRq4n6",
  "key4": "3kWZ8ETPDpuRkzbb25XzoZpSYGjzE1nKcZjrQPH2xANsksdd9dR9bsdzSykvDZcTqfuf9au3odzXEoU9nC4frMTW",
  "key5": "5zBv1C3aAzswLG3J5cNYCxV4qYUN3p2LaxncwuxFQDDWYMSZnwineMnHPkczEyPYf3Nmo5kVmBhqbZd9ZDagGNKe",
  "key6": "2zNSzxVRKxtNZsmiwtxGuR8t36m47GWEBATXy2y3muwXtGdsdW8qCL3nJkXCVHRkf2yCdd7FU75gUqwvDiWUqJYj",
  "key7": "4ht6kiKbuJ3vPJ3pqME9hyWUzoh62pShgDV3bQ31gAvgaJQGdATc2hQzhEB7grZ99dizabq58M6ffKjC4qvM4nua",
  "key8": "5g7CmNW7HAn8CuLi9Vtj4LdkcyBUfFzQkN7nd5bGjze6W6QLGQEBdsktpUEwm8e5BxS4TzcBqAafdkCePckHu9io",
  "key9": "cjq2B16Rq8n5K5x4zYxvioVVkjNLfVLK39tsz3h2zTGwoJu595g5Wrqn8wYA6JLKmFRzx5gtFXSDNhshP5do6Cj",
  "key10": "2opDuyu8gC1zQ5ZmBywVRpwCzPYC8HksksaBGYMxF4fWRKSh5evFs5pCX9VKi4KzPyjWJrWxafvnmrmhSUeWq4ju",
  "key11": "kEVr84DUMPpyskkb2hY1MES2UvsAq8AQTS14yYy3GDWUjo4g177WsusvVhnoy32XWhApKeV6BR9TfHxejHj5Zxh",
  "key12": "5mwjZLynkyEdEwbEzPi5p3RPdkSxJB3Lutupqs1NmSnvm2d9mxWmPTkjYxbCHkRSP4sRtoD1rgtTKSmdqdB6sFKq",
  "key13": "2ES4ujj3mF1tepdT2dAWHRHWN8u5vi8KTN8cu1SEYWh3BPsCzR5BUbaEdirYmH1rTJYuLuJZJsKQTEcuzjNJkJdM",
  "key14": "23MdVKXQ9koXLHwSTREWr13k7isZ93UdbjQtuAyj2WDwpzyhaVZq6KR13gU7X2W1sQ1TBu2TYKApJU4gMuwkoW7c",
  "key15": "3YX1HtwwU7Bwoe8VDdqBmdeKkYpQztrnt8ViEZWWWcs3VLPZs3SGmGVYNPSbyKQdgmWEeEfqLDt6a2Dd6g47Ro1c",
  "key16": "2g3LjsaCzUpqDpAfHCoFfuqme1YmUdWmS5s96oKNBSGDv9qxbU6d6DwYmHSYBjGVmpHB9DQTJDybDQ5zTemfmqwL",
  "key17": "BCZi9hbeVZisziFq2eqkf7t4B9ViZjP2Rd6NuzxEVfdcnKm1jNYoaAVEEjNPzcKK8ejbo9A69oxbsHsgkkYsPRE",
  "key18": "3fyVhNrEZBbHAaAks2VQccMY2cnbigpGCDNjHJqB2tw5zPPn25SxhAAjdWQA1SZSjeZEwfXkuv53tr1NmL44bZEm",
  "key19": "anRWKTTqKEVZoif6KaFcDZSdhxGrdbqHtYB6t8ri8pc2HZFmgf56KDE4yQcHL4t8w4hZDZ3PorLrtNSdmV61A9X",
  "key20": "26pFRPJFxrZ8LSYgk1JHhMz4pWw6CcEH7afZcYHZgbvy7hFxNGAdYA9swNgRGjSGN2FxrAqUzhBJSBNcPMWs7KGn",
  "key21": "3xE6G4bvaxL6aF3NusMg1dG4VxHhaZVQApYboL8ajMAEDiSyEf1A6FRKEX8bgdpLsbk2UXQAvi7tWsywouyFGiWo",
  "key22": "2n6QmoaXdUr5gSHQiXaVQJ7tWz53sjv4vpNTbn8Kgbr36uP3tk7L6tY35D2T7kNfxnQTNdUmPU7N2UGuzJh9DnRa",
  "key23": "5DU1Gk8knsfxBZT6QqL8LZuJGXtMboSmp3TQQ3Z2ZUpj58PT7so9auSSj3yagJ8EKkKE6tSftVBqvxa7PnpVym8X",
  "key24": "2PXceipD9VP4ZyAY5DWxuespkPrGP3boQod4cctc4muHYoBTTSKz1R2KDzStbhQiFMRMaiLKsyWfL4UjdBRNBjUQ",
  "key25": "2bFx63XYjccEcpkvfupWi2tXVSCeg1nZ8krsommCzyCPpWJZR782M2x372qH5LXdchBfd4q5W282mVYKkFCT2MbK",
  "key26": "2iDkFSfB1CzQnb3opyMVHJjGLa6zMmXsWvR26NoRbAHwxg1zZzgrNqydfCvnfzSwB1AbPuJySaGugyCrSgX9iH4L",
  "key27": "3rBQuDy7ymrmR3VuXw2YH1jqx981Dc6qqCGJvGd7qi2XWXYAnyZ25UF4nneZ2QJqqoHktTCrqbDW3q1kSQbPHLYx",
  "key28": "4jt6DJfrBsS2xayFRgqt92o7fynBvVVriLHNQxvHmyjdGJ6aN2tnr6zL2Jrr2nFezDhnRMSABb7FRdhaugM6sie8",
  "key29": "3o2V2W5ch7hpogzTdpjZPRrQnEPQA3BBnLsR8ZCFfhJs8MSm9ewZwEkNuH6ztvt6jiGu7bKZq8XzbXHjjP2nAdzC",
  "key30": "2aRLDBCeQKctjfHAnvuoCizQHc6gzzWasJwCuSaUw45zTpAgTm74mzQQw12ZNoimc2sarodaq3KY3jXTnYn6K5nS",
  "key31": "2TvEv2jdGDxVvzQiLsMvrHua9xezd6tNTjwyy2VBL64UNvCAoPdghJzeZEPHLWp8Vd6fLK6eYeyPwFkNyYr19xC5",
  "key32": "5SDJneKZXkmZUQ1QDnLtQLiobdtrVktBAbXUWbCz4pLH9rDej12CRkthZWL1KPxHuFTaEcs8pcbFZewnbdbcB8ga",
  "key33": "T65MSxxmMW4BHfjjYVtKTJLm6vrHMjSnWeMtLYSM2zxAqWaLXf97b4r39nSeeKYUMxQQkV2kLCGt7foM9rmo9qH",
  "key34": "31xcqsJ35dJmbgcvCcc5z3ufosqUmDJyePsFVzkcGDPx3PDJznHe6wEyHqUSxP4m2zLjqrZAvRjZcBMQyzCh1oBz",
  "key35": "5xjPoHeBoNnQgLNs9a9U86u6hvDhZbGZr6bgkKGhvGb9Ljk8pdfAfkRcEMY5FrGUnHCWDqHq8hhrfNFAcwoUi2nu",
  "key36": "2tM5mdxJtmvuvkmZmcK55dgCp18sWrcRKwmxnTJAhhTXyMAvFgQ9shMoiBaLJtnUtWSiaCpGSgdGovRnyNA3n6rt",
  "key37": "4yonVSkkW7waVxU7dx3dgPFgN6Y9KWzeRoRkHwtRRTcPDvUENUb9dMQSKHFVW9UhXMp3dxy8R8wpDLcNUTW7c9Fu",
  "key38": "4bU7dMYNarPKnNAjbrK74CMTyjNMUnbqMH6eyCq9NdT7rcQCsJqhe3z4KanvLne2AMdLYVEcyysS59tDCF2ce1BC",
  "key39": "4tFXmELfqETP67zB6ZZyt1j6biwHFCRHEATLfzF8WESsSmsWxnoJECCtmWifMVAhQiX8ZLiR1gCs4Bh9aWrr5a6P",
  "key40": "4xoj1acA4SGNNPVt6L25Ek2UZJCMfC8CYU2RLbTo7jSp7gr1vaxjVuRQZndhjoc4pxz73ch7gafj5Jf7zDCrNHjf",
  "key41": "4bRKr2iWcMfwkCsLynxW38ZXmjKQKkMMGDdWZ523c1MFwkKKugAVG7W5zmtkZULPo42TYmRtbunicHctvLF6kUQ7",
  "key42": "2V6XuobuqL1Ngap3aC4gSTXXvPKUsK1TLrLRoPYamwqXxfdKTYVfVLBRBdDS4DWckJyTypHNidTtAGASqqKgvrJK",
  "key43": "2YXrwZjmxnpd1NqQE9BpBt6XLiDBWkuC7GvKHG9zXN6ufLMfXXerZcyXSS6cwZZR7MNiaPN3PshC9xfFgpnAUMe3",
  "key44": "xkaBhDAyNog64D9LRmMuf9JSMf2WQfzA9ENG8PRwAaVZwkdcr8XtDHgfs9t1PHMph3F7LTyiTPuB9JZBZbg8pnb",
  "key45": "4PP2s5WseP5QCwnurivHbJntmwaHxoXUcvjbToQbq8MSse4NdjKBpx9pFZQWaJZUqZuYF5qRtrVnM3p89ZrCNur7"
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
