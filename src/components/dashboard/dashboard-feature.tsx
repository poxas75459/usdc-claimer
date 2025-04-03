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
    "asPgH5vt8znXp12G3A2MCxxvoKS4rmtC7xxYi1HtTG8mKYuN1E5wLvLMaSL9j33KLW7R6b5SdDxmRnFoAFpmYbp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3fKDDCRyKDXXEBzGCoE4FqHaHpr34Rj1AX3mVDCvjXiy4qdzr1tQfxwGrSx8cAu4K1HxBNVmGJRdgvT8pmoU1sRh",
  "key1": "4nhgtacxFrrb4bbvmof8PJtqXtWGTF2bHabTXHGuLvNeTGEmp1agKYYQv6AHnGjCSzA3zmYQYCQV7oESLGcj6pLB",
  "key2": "5Q4M87kiZqizj9dYr6iZpSrRrx1tTYw4PPT6yZPEaXYPtNKDP8B5BRv3e8qCPeaGf8KRbJ7yni92atYf5yYas256",
  "key3": "2BcTZASFHNXd7DiKP8vGeBKNnmG8MQvigqcQrQrY1pHyH9shdm51y2RXa2F1iaq8KjdWS8qLomQkwDHDDSk35TXC",
  "key4": "3qWUZGjPnMHf79G3hyu84xwreoNS51wEhebtBrvigmTPgd3eHMem33EgpCTQARg4guZM3YGJGPANKGjCnjSwmoU6",
  "key5": "2swfu1L1gScgn4AobXkRkTQ243a2FBZFwY3GFm8Kzt1k65v1K44iXjR47CK1oPFhHhqH2SpXcez9RvBZH6rGgU3y",
  "key6": "55FMVfMN1kA4gh33fksm6fprntSqSHrbmoTnpdQK4432fjyioh9xmGpvdkBXURXGBX9aEhrMTyou3xHcTshAM664",
  "key7": "25rpyz1bzBpSzFC4BK8g3JTxTEmvtGTwTBjgyqq3VYrBBSUihMED2LrDkrGESimNgqc8cGWS2kTSM1cbFZ7rEEg6",
  "key8": "2e76HfjH8ENdjumd9fvPrPsKin4KofUmuynopJDBJ2xH5LWHd2DPCn1wKPXpAo7Dh7phmrkZZTJoxtgktGbGXjPj",
  "key9": "37PLXe6ZB45QD9DWXViu9goyzkmqnsihnLQXxxyPj1npyx5Mw5Vh1bL9s9SNfMGS8MvhcpkA5eTZyELWxBGauwdP",
  "key10": "2QvFyvbgm7iHW3BwLUGxudW1KXY4bAY9B5kzAQz8Ws7kvitUiKdXVUYtR8TAKV2DvtK5E1HEMS8QVE1EEEUouPDB",
  "key11": "3mbDozY2u4U6qnPJqKfskJ4miR3YupNp5DtvKUwQq4FGXtbbeDq7VKnULKDCek36pgUpF6gtZ8dr5uPw1vC8TjMX",
  "key12": "2o2YqrFPdiRsWA8cYAjQ3HGdNmURb8ZEi1ztN1mEUGcaJN6RUs5RDafnaaoZtAq7UyiNMfvjQ1b4Vxs92iXJcq88",
  "key13": "4sxYxmtmscoUCjiirAn4wyYaSEUPkCwKTd6Ng5FtjtYz4a35kJ8DttC83ahdewKfWqN5UCZxtNMTkshLWY4WnPBy",
  "key14": "3gBaD788nBhZtmjuv6McYGTrpg2Uwh6RHZHSFhi2JZJi2GH8pTk8eDBMUsAoRqQznALmi1VMG2BHKcTTnZvvWDet",
  "key15": "3Rgm9o1f3iV1p2ZRUXnKstER63W8QTjpTqE2rT3YxnrvjzajpWgtZHqVQKUPPpf7ef1Nm4QHRV6UfBoa95VKutvb",
  "key16": "4vdYopHMXo8AUhPsAuUMn3JhX3fn4o7QKewqxFsDixfVwgpew7k6Qm8a1g388PGjL7fyZbYmYFNvwBi1UMZ6u44g",
  "key17": "2QHisXqHBvnUAMTaaFhFUhxUhVtx61iPuGzaungeizLo1Dc4m82kSsMV1TASoe1BE6jroxkEcYeDXkq4kVmwHRwf",
  "key18": "5NENHiSuoUjXE5MuKf9BD4dYTu1Y88smVwauBut3uh3aJgfur5AK9UyQDVhktnKDCC8r8KtoL8VuWEwYFT956GNk",
  "key19": "3DLm5Vh2tRYw5NF2NQcc2iPNU1KtBiwpFJi1cEY59jSEjL5CnJ8vt48jasZX3fW1DTa4ddchDXxTwppPzBnsYyyS",
  "key20": "2PaRf1qdwNFLc57FRZ2YSyXufWHrhPtwpPwHrrkYBvwpdm4ZiYSv3kVZiZsW7J4bHHo5uZrwGzWtrpPypqWWGr14",
  "key21": "3ASUk5fwmmLUKe5frpxrXdE9RnsBTnR4rwmiMspAGZ5EQSvaKs1kyKGxiJsazK5H9bSYSVj11CoDT2BhRCm3VLNy",
  "key22": "3UdzfLqAhJes3uxTZLqaowjDQyBaKJeq1hnr7FDFYmZ4nYy2XKbn4jc9grmQpCUdheAP29RLFmBc9fUCyU6yNof9",
  "key23": "2agW3sAgWZCHxgXyqYRYfAmyMfoEtmd9Ep6xU9pYVSgq475LdXGs8QtcEGaXTPGpGyaiKkFYfSkghreYksogmkDX",
  "key24": "3inSkzpP1TcGrptWRxZTfgujRmQfCRTxe8C2mse2ketDmo8AMEgPuQAJiHWBjbDjAUGpuRPMvPDAo6TwsuUunh8u",
  "key25": "5iBa4Yb7JjSZxbBHdRoAipf2oUSUVc7tt1bFZqWnHzoz4pyXrYAVv9V4s6tab2bZqMWwmVf2WDGoDUNcAC47PVct",
  "key26": "4tC9wHUKdL8FWiTHp2y2X45vXJb9ts8w2LHZ5Gj57PyYJgKpkA4RKsZUKjX6K5qH2MFyjfTprpSBwJCsNyqiBuqU",
  "key27": "4kfLfgYY77GjkES1ByCRkQqJ82sWh8d6vZCU19vzf3AvPZi73xRnVQyH4K7oHNXScsJWQaywcj73qfnbh5RhjUAm",
  "key28": "2SCoHow49dUmo1cBjYQ1AsLA3vev4TjAp2QdK7XKFVVCVkz46fJiWbbLUDYuDap3R6cDJaVvgE3KRUE2uFx5RNzz",
  "key29": "5DcUGrbfY42sMMsgnw4Mx1rseh3HXcGKQH5KDaLUQ3zJhPq9ADwWtoBMvsZvGzjU5g2mHy9XJXuQGRyV5zeDbE8y",
  "key30": "4T2hf5joC2JfgqHiazfcH4u6ozzXgtDWm5LGgCf8UczUqc7jqrzDB5S6tD2AHpKsFzGzELXGKaTvtrg4cuPE3a6Q",
  "key31": "5nADT4qSLEzCro8jh8VpfVFFoVkoEGpBjyiAabg3d29WQCf3Waspzg2tzowp7FhhY1ux7GkqpC81DvgoJpZSAixV",
  "key32": "5UDYPx7omDWYAMgEc9tqS7EqhMwGQRDuPQTygHZY7yvScxgj3izwYUz6K3FRAGjsjLrntqNyVwyNeosdiF69xLyZ",
  "key33": "31RtFC8bSrKxapcXScjxbgGitqMhQfNSG4qj2D7L1r7wNxyW46PADkw3TQuNihyn2q3xf2dHcrLbPYtfK3J1mdWD",
  "key34": "38BXdsaChh7uogMiKRyybN6pbu8pjGGbZf1cAuZTtEYBEaH4LSfwttwvvXHyBEeZVK3eTTU3tb2juqrfU7JUoBgn",
  "key35": "51jPoPNNPcVP5Andnkz1ieLCwwyN1kVvnSEdCMnzvUkyAbEG6dEEJnXDDkPPXb8v4QPZ5WCQpgZBSBCA2xeRu5Bq",
  "key36": "5SggJSn8uRETCdSQrutvBCGApnp6fyfALhqWfDH7zNucdhSHQbRz33yeGH8dQiZ94q3RRV6rLasmzaaCcZCrkbfb",
  "key37": "646LSwE2xq4ZKf56nuGzxcWad9bSirQTdLyQ5MoHwhG2aN7yiRPFrpoikqrqBQhWg9DGHySKapTyTPqNRJMbUdBT",
  "key38": "5fFuXcYRjDrAcuqUR5MxDzK7CMDQGrV9i5272iMsSYAvgzGC1YMZgG3gNBmAsZ3umviGErPF3NUemxg2N919uip",
  "key39": "65Vtnz6kKUA5J3XkShzmDmRbdAH23mTMpBcv6hCnrphGoMxYEqArmrXmNLJgZVfMZ9ToD77BNB1QwPoLZVagnKin",
  "key40": "2KJcm6kbgpJcy2CbwH2tMb7Zy9StZmYXtqWoKZKdNXmztrgdF5qwgUGjiPDxWAJxDBUVnsXiDSXU7EWJ8nEovzfR",
  "key41": "44wG4JV9fpgrJdUM5vH6Mhcz5QM8oyDc3y5yGcnSVefq6jPexKPX78hjZhYwvdSeqnvUC2L7o58cfPgJZdoLTpFe",
  "key42": "3NeHSHa1jLKunLjnbGjQhGdvmk8ijcCibgGqiR8USQZG1wRA8X4fjvXWu37bbB7ZXEE3515nEyKcUvAcAWE397UY",
  "key43": "4qaRSPN8gy1hKUkuMJtRSgniQsBc2SMoBbDs5fnv8f4ZbdmtZcj8RvccYYFJUHs1uSpzXQBq4TBtSe54XPFbJ9jb",
  "key44": "3MvmMjqpPeuR7vZWhz8Db7i3SdnTas73hpSmcdSN6V1jbd19ofJukzdSArWLBG4orAWWVQNFZUBHf5McGyHUN1cC",
  "key45": "5Z524GDM5tBCAvPeoxVwLXy4mEStqHNQ3qKqh6ye15Vt4NMMyTr4i5wq19DUohj4FKcyum8wf71VqzGjPB9zvph5",
  "key46": "3xdnzgifEWWZqfiUJf86hoSqgcYTmD3xcs9t7VK5Tw1hKbduLMy9VcQCgSMyg8ChkGDJYKx1f6SNsJsVM6TdX6QA",
  "key47": "4EiyLyFdtbpsDAubwDGUJwvfZCsFoXj7AnVuJkSH13dKwEyadY2uonzDkPay4kj7P5bXv9hiRM2h8wpsMriBWhcw"
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
