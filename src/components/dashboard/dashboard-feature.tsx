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
    "4FCXbNSDVDfmm55xCbN6Ty1a2J1ytVJbWsHFc8wyUFq7yyELGR5HtbnnjAct342mQbkxG8RneuWcCPJ6gyxxy7RX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5E2htTN11VK2v7fTrSqX2QJxaEBrWth5zGZHAcKKTE3wB2czGE1EwGmHm5hzHjenWg5Cp6x3QQxFMpMXrT9GMwDd",
  "key1": "39LNcB4QTAAVSaUDxieUyp39MGWDq4aPzKaZbRPaBM9yQg2foRsrry8KpERBtczaLBh22ZopygzmFs5EkAtbajdb",
  "key2": "4XYmxEUyyQw9uTmLnY9C6j3xWGQu6m68T847RHFZNvcFCaxd35soemXgoBJ4mc1heRL635rsCoDU9gPnHxjVG2cW",
  "key3": "Zc1m2zgsjBHLHwEgRasyzXmZJzx9ani2eiKFvhNwyms9vFMHSvVJb1tZtKt3XhP3T1zQu7PbgYQmhPCxqnDwRmc",
  "key4": "ERdUq2Q6LaLKZ7tJ4ddsaspqhXNpnTtmUAkR2Gi3YRvngHe1j8gQd5hhRxX1oAw1XK2PoUYLx85hWvxmwdHxwDN",
  "key5": "5m59c1ZesR357aQ1Vb1gceTkMJqcm5jX9dmYJjbn9WkKc8LFiVFH9xe2ccGB8YASvstAgotxPAPZ4PxxvHZzW2Ty",
  "key6": "58PeTjjpVdt4Tie7HesPSX3cUa8QBB9G6PDVvRo9ntwtiLUSy9PfPewhWhSJnsQx8aShQ19sJUUJBmLk66s7c9sq",
  "key7": "bmoWXXLYeRhSRuzcAWuAKNJHWodR4yDM3KLWXorxShGPXgFGZYy5C8hYZboUppDzXbb4JYvvb4Wf576XJHJadq6",
  "key8": "2uZFZ4D5sDcy2d4kzmSU2izU9vGKhYsngWYg1PD5YqTJvZnQTjk7cgPHPtRSKfnsAdnNPg7nN3UNN8sXhTxYFkmW",
  "key9": "2nNsLAqBwb4aQqG6dRAz95G4wrjpLz4PbWsa217fnmkKVg3wdSwsoFBLeRawFWyttdbwvYAhhsUqdo52t9iySeMf",
  "key10": "3whuq3HQ7Mq9rHfwQxJHGStF7S8eNjFLfN7Aqueqb21KwcYom3ZurBbe6KyEnTzXahjuq5XF3rgDhS2vE1jBdPDa",
  "key11": "41xbj6D5jHnRM1Kgpfp1vQNTny4Nk7C17tUxRobv5WCnzxRBCNBXycR5KQdaCkftxwDzphiQHEvuPqwDQYV7uZmG",
  "key12": "53jqy79T2C5GsrGET5Eagu3Kt2vQfNizgrcr2WmoSbqzJxNWwturTYWJjttxQuYWdJgR6aov7JtNcqrG1gpsQ5gA",
  "key13": "3euEU7VDaddRK5wnoByHx5X6W6aWreDJeE9zQ3dYmPjGnYfxownygiB3UyeDtdWPuUuaVF2N33RSDaoSkbKGxcfW",
  "key14": "3XtUfb9dDwRCfSrNvK4xoqMxBLc7DXUhnygD2H1UDWujAXTfgGuWPoSquWeK7WEJpm11iMSy996z8HoTnhaUU3hK",
  "key15": "2sBM5gQksxNk8q31TShZQex8MLDwrA4RbSo5XLJMYUE3NbgZibut7y6WqBiUerhsAAie3CcCMUkQYzE2y9R8BakS",
  "key16": "62yxaEDN1nUNSKYykjRG9Hn5gZEcX8ZUzb9cVKo7Q6anXUbwZz4HfmWJcch9hvAE153aWW5L38ZHiEYw6cJt38oi",
  "key17": "uXrn7vCHm5wxYvhkd6KCsEdMoQx1fEa2N2Nts51jLv94iZk78nCmfRe8knE1bghqRx6kf21EpUH7cGQ9c8eH5Gz",
  "key18": "56n3P3BLd8CRxi6PKFdY7GXzcY1DGbvuiwG5Wr2kLrtuP3t4kznB5tWrjEvQQLqq1qvvmkxjhbUEWRfLU4iQtTxN",
  "key19": "5A2P2BNjSeENskP8vtPESMWnziYk92DzU8zTLc3Nyy9DSqwveNvXjYKKeJ9y3UNA6isGorqKzCbug86W85dsHhmR",
  "key20": "4msmmX7pS8Wf6duR4mvL6GRdm2T7MEHsGUGQ8b3oUPPjAmyy1uyMA7kFneTkwL7K6GJzQaiixjgD23ED6NKAFHFu",
  "key21": "48KcYukzzTGuYqGCLmQEnmRMhC4ZWZtq7F6MHLng5wckWbfjUsbFq1PNZsbjCXiqkC8vn8W39a3kjzrWYVDkTcUk",
  "key22": "3i1uQqD1R1RRp8Vo6W6dMWnAfkqQzqbEsaMZDMfTut5CULRpxzkAAJcsRmFwuJVdjbqppy2xVQ6Rw4yNNdYETyhP",
  "key23": "3qax7d6JMLADSttjicSAMFweBri9vYeEJPJoHTEQZQE1cDaeVAMRAEpHmtWRcLeKTMMQqSxvQCVM7ZmmdQov2GNs",
  "key24": "2iFU6K6SsnKn6XL77WddgogbBZfgmh84t6Mb3VPr7uNNJsV4FZdeRzDmB7m6sv2nHh31j94Bd8ijFrrH1Hu5dyNY",
  "key25": "4WJkuCHope4zJsREmwDAG5bv8ctjZhsp4axyyPSuHtfWHTsN7B4tDyq5pULYqzHLeYinp1dNaQTcYZjGDG29mVbB",
  "key26": "5KaX5HKQ4gWx5eocQ7H9jrP1W9wuFo3fAM1xoQCuEssK2KkcAsNZxeySFNtnDpaLeypmmApWtPWHvnwZqfERGbC",
  "key27": "4Z5fUcKhmTVqEC5vnXQhTLeCgbTuVphzsMqTrXTSW7ME4Ydtmq1Q1WLbKNSzTUSgsrsfdee67Zg5U4eg6cEx35fe",
  "key28": "SPWK3WYxXYsctMGCUNKtR5ys1eVYK7iKNSGppRMVchdFurkM96T4rV6U9D3DMsa3SMn42VMkPPFUUTzzDRzj2Pe",
  "key29": "3buNp8aMcqYcVBuBVmJVKiHSuxkxnAQri6ucRMY1cPR4gBs35uZzymp5Wb8qAz5zawFSkJabB6eeS6wUr4AaSAmF",
  "key30": "2CAqEMzPF3DiD2h4BM8AaCHbzoCVMLmphoi9iVnQMryBv8ibwGwmjMyZ6tqiyzwyomLNp27KDRqfL9Prw8L4bkZM",
  "key31": "BH5U23QZkBw6ZmELEU3FfgVqbuxDyqHyt7diiikNPZ17e5Bf9UuqMizmwK8ypoQj6SH3SETpegEUVhxbh9B2Yf6",
  "key32": "5X7QkD3zQV4ggQcwcuGJotqFJLWsorF2nFzXknr2UjngPPe3KLZH7x64im97izvBVoUAddMrpACfF7HU4TY2E6VF",
  "key33": "2448HhpmEb4iyGdnAzj1DLwxLeztFVL3vYa3oZ9qsz2RemfiyE9oUviB9zJUS4xLu2frwSZX5zA7g6YfFvCm4mgg",
  "key34": "2wczezqJDSCXGMACD4Kz1hh4nBCHZT9VgzJArkLf14TU43cM7H318nbudMDFbGfDrFzJfPzquKUcAw84ytsknGYY",
  "key35": "4QRnJBHiHdYTkng3YiuV81yvYgG7C1foFL7MHUqj5FtdLiCbhbThBsguWjGKpJpze3puMGnvQWASppAxBLi6vGrj",
  "key36": "qJxkbwC4rkyGLJsn3gpVZU3BWYLsAP1wutBpUZwDT2wNNRUT4oD8T97AsiyDM4usRVRYsaYrHQSFUHvndCRCiKM",
  "key37": "2je6tgv1KkaRUfsE7cNcPuQX7VaYc9bL5ZzYZTx5LYxibshuUmfRFo92SmxcX4AwuiKsGotXBcU4brkgSpjFmfui",
  "key38": "58wW765AksajkGRgbFbN6zTMdaxGYDy1GQdMQyxnzjfu1x2S2J8VtV8UYi33yHTRbK1dU2yRnfxoLEwsFA4rb8iQ",
  "key39": "2mwPfu6t3Z6xgaPqVBxPdCCALiruwQCuuMLfSVin6quQFrLuJKwbsX1TKqEmkiTuujCvmVSjZUSCPFw7jpjMdvEE",
  "key40": "2gSbHKciS4HDWH64P9GnkkaY6tZAnxDAeDz3gKYtAexJ9SwcL88oGjT2FhcNtF3qdad6HSQm1bhEH4mo7Hoc9sQV",
  "key41": "5d9JSHFDUDsy1iAGQV3jaoNpuRpEBxY69ZWWagS5SaWp7SYhavzVyzKjg874tX1GVqxixBDTaYzirBuyXcgBs7Bq",
  "key42": "5fx3UjMHraaAu84DsJNiQWGTJRZJmsWjTcZgXoRoaFPT5bM9PjsDundRqJJftq1QPpx18eox6AFj6kJVxHxBP4v4",
  "key43": "2t2n1ceBserwo9zcBY4VFa2GQg9ztYMkj2ifkbzUZgQZwXosg5w1Yq6nqWZ2MBh7HBma7YzAjuYcD8Jxq2Rmu13V",
  "key44": "5HD6AbyvcsJufpPdKKX9JRveyXQnYDxRj9DhBDCuVgSNSg1xp6Qi21qWeVdxuDoFKfVFLRH9B9PZmhiccHxEd99g"
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
