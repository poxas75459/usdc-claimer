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
    "61mS3Ho9KU6NabsWcw52DwUeh11R4rzt6rt9LdcXYWwDEHCQ4PFXhcmR3Vp7zeGtkEErnq6xXRgu99tdWwuJPtPM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "VSCEofjTPacZqhT4np6Wmn81EJpADAdyweC7Ujqmztcsa15dUxHusfShPh5H7pHWr1xckDU5bsS38AteB9evG4u",
  "key1": "2QHgC2hWsPNM3SCrAgKh7hkXYLvHpZu7xepF2BsqfMJxHPSJE2a5P9RW67FsHaZwmD2uUi2cD86ocRumYT53y8KZ",
  "key2": "5r57nJLC2F1ZVKPAq55YjQZyijZmN8R8Gtogj2hnKSmNJJAnkXU3av226B5t8a36LMvQ5Se6jhnXtkbSMKCKdYiU",
  "key3": "2Jg9BP9zhQK2ehe4fqjkp9s2ecphY7Wd48RB3dmujqvEbc1wdC8KuDMC1bwfoCnL3csm5pJX9wFVBn4ZiKM3whyj",
  "key4": "5iV27kfHKKowxCqd26jGRbXDDTtHdB4qfkba15WTKiqFYg5gWroMBVg5i6qwrUgM1VQ3XmbPsDRT2Z2g9iH6YWmG",
  "key5": "83W3TUUZfyYZh8fAPP6HMbGZCiXqegq8TDN3z3d3JN4Xqgv6cXowgv8zr5zXw21R25VhjaH9MyGrVoNWzy6tv7k",
  "key6": "3SpSWqi8F1FCxXWpo3yHa84vgwEeE2haffv19HFJKE4eFPASZGh55ZQ2zHx4S6AYmbQDZpcJJSi7YVpJMshnvdd6",
  "key7": "K972LsLaRgDTvXStL2ah8aKk27kn4dyHCXJw1uz3qcTMzTqWvNsrp1yKjRf9dJfUPW42j7PvqbfW7LRbeZnKRoq",
  "key8": "4DHwj9W7zqQyCpdcKwunvXK2ZWvgG2jBbHXq6XoZvvMjJR5kwHmQUoCcv2XQnEwmsJEUJ1LL7THcXmvF6tyHtar2",
  "key9": "5cnmHbf1kYg9kCjz2SpAojnQoHWe8aktahabYZPAnkz1Fp4GSYGdm6kHZH9xTftPapxhaU3vMcpDBvSPcCMYUkY1",
  "key10": "5bNpw4cvdJQZ77Cj7pSxprEWe1dsNs35RYTza96GesvQ8LKnpt5QMZosYSp8vcU17zZmbKM2ng7rNzZtHpxRkZs4",
  "key11": "2vdu9N47iQnSvB8TLLL6HBCzF7GdHcWXmkx7D4PksQBHRCdtEMG6KnFX9Mh3GoxYAPFXCzEnptySvJYACoQAYUof",
  "key12": "AmPkWraynheWpYFQj6PssUzrNCYwsgrRwPNudjTS397JCwfoogK56PwfEPMoYuh3ne7ZnpmNv8KJ9qGBpnuCHZJ",
  "key13": "B1LW1oEsHGaP6oy4eyyFW8he352NLwTqEcEH8va9KLzwTajFnyup3DHLipcgYfjLAgD6XdEePhZgSScjUQ2LHmg",
  "key14": "63dcqKLtByq74Q5ZAQwu41DFCp93xVNjiKxcNYpjzBjgTuihB9an6cx3WXLpMW7iT6XtAiaGDRq6JAWfmn2QQpug",
  "key15": "4n75xKBQJ45GehZqnWFBaP7aS6HAhH2qHs16yHrc5vyh7JSFqB1gaq29aq1p5UXUqQMhsP2wKoGyiQdjhTdiTfsb",
  "key16": "48wqfcneQRoL7x6CGcb6FjTZ3sC9Lcd6dBHpec7Jit24ZJu2hXtBt6VM791uYU4rWcqB1qLVSLzRPchxzCMZZFeP",
  "key17": "2Y54E7MGAJVrmfe2g7Eu3EnxjfCJNpKnSHbDcTR5UydUcTHnWU8kS1UEJVkoSpPFkLLgKByQKTwtsCYsFwu8cnD1",
  "key18": "5hYiGVYw8cWERkrFpsvFud9hN6raeC8rSbEiq9sq37RyM4DamFhG6m7opnXnFx4xFUJfXvHwmyqXkzsj6Ef6jaJ2",
  "key19": "5X13ja7UA32j7yV3A5SdatjroWaHGusyTeprzGfFXm3sDB8yfWiojVtfuhvPLvz2h2oZwyfVctuVDFGWinp4zyAs",
  "key20": "3HxXTeWYS42Ae9xDePwAYWH1e6oaWEcV99DRPyQE7n2yttN7tMSAWMfVg13YC7phnimbE9kyvVu2Ld1R7NX9mP2A",
  "key21": "fiFA1aRY2dZBKoBwwAen4jqAv4hnMxzyMtMjxj5G58ixDZ78xCt56hc1AxNTBhr4y7zgsSJidYU6JQ6mVSV5oHe",
  "key22": "2cGK6cev2cn7WobWLvgsMJgSwYyUUKG4RtAS2bvV5roKiyS5ioXHoKEfKYcqWHNk9CXEdfdLNok37qEHP78EfT1p",
  "key23": "4mkwsGpEZ3xAbRGYm9tcmRp42fEsisbgkRffmnTiM6nTsoEPWNQvSRYwtBVjeGvkKkp5rrAGbU4VM1xM5TMSch7w",
  "key24": "5rrttJvfCnxW6799vJnMQ9BhhoGYhgcWFk7h4akuAh2FEhpp9eG6gyyecRixDsx7qqfhuvM1ku1jythHXTgoupNP",
  "key25": "59jDYTtAisDiQGkYhvi5ih71pfPcS2YyaNVZRuoreAjRSXHHubjUeDpNjCpWM2GjVLRYSkbqc3eEv82cjzw4JiPJ",
  "key26": "uSRQLoGmWZLHmztb2Zbpa1xU1ioTXvVH128NNgCW2CnN4Dz3y1DpEJmcxS8pPNyCAe6kzaf3UiXejJ3UsAmvqS5",
  "key27": "3to3DqvFJKbCFHosMEQ9vuqsZXjeZSGCT9BrJHBh9eAzQ3LVvnfR5bMvnmNdJTDMGzzpddLyoaXcrFQ4cL955hKc",
  "key28": "4FidbzxELSrK35CwQQ1P3FytJAbz1SyNz8jZ7fCJ3U8MSLaHGMHDEJNCx9L5zbtyotmxFcDXfKYb7AnnRoZx1fsY",
  "key29": "5PYRxjLhYcPLRs1W5aPdx6PkZxzpdLo7RWLrsTHgShRzch1btvuE3TbgKnHv1M28abMtt1wGn1E7uojfC2svXdC3",
  "key30": "z9htGPSHZyAEUxSDdyyM1KTMpQLyPPtn9ER9eFRhLXQ3yvzb4Pc4gSUEtnAbGLS8MxEJ2KF6xVBbTcPjLsgzZSF",
  "key31": "2i7qEFPauACAGuFGFKbQvoMCgkNnBy5xxVnUuEMRauoX4EZLLSiJSjfk3pge9hnyzaxU7TQ8xjWJiMRSJsG4iYCS",
  "key32": "5XLtQvdT4P9CmX6YV8kG42oRqVUTVgGZr2vEZZxEdLfDkhvmsyiZBkiEvrtKrWQaENVgMFzo2RMMDbGbksoWaBkp",
  "key33": "53pMwv8JqKNgkge4F2Zq6fRQZGvb6ZsnbUzXQJu3fFEp1UfSQaLgv7BeuBTDMZyEADMaERvGYkMU95eW8jfdwa36",
  "key34": "5nNoK28c75Ekd6pYJPwnz1KFBgsYxi9pqor8CaTfSB9DgfAESLDb69DVNRoxZDXHb7v2n6DzfjvbDxhwAJz9HRBq",
  "key35": "2SK7UtvKLKz6jWQr4ZBTUAkXHk2JwrHTpiubFvfhC2Td82zvoq9Sn5ZkNUPA8Bq8tvCa1PQ7EUpmHSXJbc2kZ3vD",
  "key36": "2oGo96fQ2ue4pdNUfjxbn3MsKrm3pBZQuDo3i7Q1hFYF5Wubsi9UyiYuvUGKu37Pdq1h3PsBzN3hsXPFSRwsm9Nm",
  "key37": "VvK8upZpi7yRJFCeCqsMHg2UKVCwAaQe3ZmxqQWUvbbxDLtzkk1zUcGP4mqY8g6pU9tdoiBbSmJRndFnYHW46zG",
  "key38": "5sourkkgRnLrApSgbRHDyB2epi6tcy9PMKrzUGUvGwLAtTztzHCMKB9bb9zvL2Va1LLcvhnCMVi6gPxrfJDPfCv",
  "key39": "5BqNTmLCs5moGvQ8yi2VGzRCRuFYvtc1Q2NPdC7GgZ3UdaLGGtUc2bzcNtw4wLj2cSBpMxWKPHn1S8CHdgXodDmq",
  "key40": "oUrZXaV9Anymua7AwHZfXSSJBh6chRRCWckL9nwaKdsb3Kekd41k44v1BwUXpVvmraAe2cxmpnKgdeRTJFtivqL",
  "key41": "4nFZUzGgsFE6iXx5XpWt6wnHqoy4R7NrsLJA4ejmaDSMfr3Bm4kKMaxbKRutxsYG5csxL8Ew4s8zSHC8ArAbNDUy",
  "key42": "5mKZAy3DB2ADVahJj3R7JZrRDVEACDQEziCvLzysgSLaJd9RhTh9zF9KtanrevPAXcAtUV4rLtAyrmXYRQYh2be3",
  "key43": "4x292gD46qFj9nA5p8PvNLvydVhYfWsWZk4VUwr1rdoUcMpwoixUfLWRCwQfdS26y6FiY3AUd5ogG2Sg7yMwcfBT",
  "key44": "5CJukk67Bt8V3mjV1tm33cChqtapbrVMHrizdZq5BfHvkgdACJiYLc6yKffnxEr3qXKymyzFvwRxHfLsoTCHHx9K",
  "key45": "7XmB9n11PHHHLEp3goQ4ySQXu6JU6kiPMcGH66A5CWomDMz2rugF5yvnzUKjwmYMWhPJyCs7LR3FtwiJBJZk23g",
  "key46": "5i4tLcGphP9SrtBW61p4JcL8vAGSHPfF8hoXUuxBBJkCJzUskzaCePsx7Lm2o6wQw6BxgHyWVmxLvksCyVzqFKkw"
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
