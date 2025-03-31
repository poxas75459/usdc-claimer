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
    "eV3xWrDpBeqi913LPB6tpuV39rQaZcRjW6ZVyarQ6NrRcer5AZq35768T1gh2szVq2MvH5RwbjnDuxjwSitJycV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2LscRmuF2DFivmtyLamH72Db8XnoNwNRtjaqS6KpDcxUpiURetnmiJmciWTLdfLdbmCtcofwYKBqVaD349mTkJpn",
  "key1": "2UsVD4Cs6oitktesKuu6RwNBeyV3wxFb59pH2pfuRV6MToZPfsnbKZCo6PkcPXsb219hWJUcJgQpRmKmQDhbjAPt",
  "key2": "5En7hMvysXFpGKopeDvs9EPcctUTsPq5ZBYHHxP58koujhbHTfvcCzcYrosTvX61TFACa4nbHQVxNzpqK5qd7Us8",
  "key3": "4KXehMCVQ88yJrd71fksEM7SXMEa1xqJGPv9YPx1AC29rcRmoDWNvxcmHPbgnHZqTRixVfDpxLhC1Aq8rXvGYs8Q",
  "key4": "5cswb6Q9EndnuEH15c7TKo6MaQjRHY9t8uGdPdwnkNcKXKohJcKY4x9AzbAcPaQMao2ghrmuw34ib8T9EMCzmUQw",
  "key5": "4eXZsrXR3uHVS9CsJAJPkip1KKS2cXqRcsgbe5B2daZKNcMCgb7WoegFh3vBY2VM6E1BSv8y9QXe4qaTZoeEYA7G",
  "key6": "mheTo448FHqTJdzqREfgGmGdea97vWD3eYeThKB8kUkaSLsPkCQ7ENti9uUSKYd9zJ3hGdGVj7Wx6oJPcz1xXt5",
  "key7": "3jDc6hgmtHB7MJHUKcdecbBnp3274gXSEEzbNKKDxNPSo88j3MS13fUCwqyuaBS3QwrMeTBQP5ggcndT7ehJTojY",
  "key8": "2tRWLbDdkUuDHaNtCtj1YPKuJPcqfmY9MRZvvT8NH7o64knNfgPbkr1meBro4jFnVdZ6ahwB2nK1ycHsvAsQ6M7E",
  "key9": "58tJzUNFdy7QcLhQ79doqcPtLRqTxQcCa1URUY7SHNzsW8Z8h5Bcg26BQRbnN4LbWL1MaUX3Cyddv2y4k53LqY6X",
  "key10": "3aT9CrRXzHQ15C8Cj7oDEpmgBFuq9ZyhdFVzE6XjtSWFJbSN2izGR8eBGYMJfNwNyY6HigeDXyondPCZBVM4hY71",
  "key11": "4fjxK6jqubKzLMcb3qisr7iHWnRXCrE6YNBXv1V44PYEMMVZiqADJCPyH6sB77k3E8ftCyWqwpzgk9h57qG7aanE",
  "key12": "3zwebks5jwJfzGiLt66UdN8mLcjQeX74bR2GCCWZ12v5VJaHeVbKcFyxrdTD5ByD7UTGkB89oAnXs6yh1pArKXeK",
  "key13": "2qaQMzMN4aU3TXcTY9ZoSM9zvweDSbHRbHkL9gjQ8Q3cySYPnrwLczbKRSMfaGZbJM7RuQnj42eiShbgELSqtWRX",
  "key14": "5Vt1NpdyktktYxPqqQNwdD58rz8JJvURjh5oLL8ZZWHNxr1yRU91XR72obAznmZNKjfuHvUyQARRhK4nMW6H3vDt",
  "key15": "o48efX4oWcfPonKWpFJmmReLaEYbvh4psSf3FtskBjnMtqR433qW74vGNdJpQBwZFAAjW1U1geNJJPXZUdoVQ3t",
  "key16": "dXuB52EgMgrfJgcU4WcZ5Pjbw7SvPd4KDjddWCARidNCA7GSHWEo4RbE1QUSe3gY3DsAjRwgWvkoisRZrKzr7Pd",
  "key17": "67B9gYotXhMaghFioVxurNdwHdAaTyPLsEAFQSVbrEjXQCeg6VHRsoK22EwNMP5hFikbwumtKPLCR5RwKiEXVm2z",
  "key18": "3SsbiQGVHRez2BBU1y9i9wpC7gXajcwBno31xTwVXJcf3m5pFbwwimmdyZY4JomuhaeqB6Yd6tgLaWGC28muCMxY",
  "key19": "vvhnoKe8Q11tzA6pKRhGNAYcaSueZyFaB1j5q3fWUK7xxRcVEEcppKZNeNDxGhMawbcQ2ZrGPNsZd8A5KwqAu8f",
  "key20": "3ihHgZggMK6PJeF3vsWbgrWhMw4pxJichf2LnHSsBpSVsGSr8CVnrtwFWNKtd5FPe4yEHnxsbb2ZDJQuScNokoBM",
  "key21": "3pPdsCcwDfezvU3onHqfnGBPcehYTRNnRNUitUad748Nc1S9nzNuTXtPwd2PJWmTzWAvrK8txGqguAemPbq1uofB",
  "key22": "26EBXVM9cd1mjH7nztfCV7x87WdvVr7PsU3uwLjMcRw9VWZEA6235FTCPYXDaZZcEqc9QeymHD8YAcDBw8yk2edS",
  "key23": "XU4gWDq95o7tRy18kCoE5XrBeiwakNwRaHo4Pokftt57KhypyFRZaa4rw7RBoXz55Jo2goSdseZS125NoJWpqBh",
  "key24": "4rXNaiU63cYdFRoo6BKDPDvgGgoyQDy5DgXu5tUq3QtU7TawUWcBjtonSrZQnN4psgu4dTrqHnGz6iUfAX15paEY",
  "key25": "3VqcVt7isUMZK8kZiPconMHCjJyQb2daiPAntpUumAcpjZz9iajxmULwRHCRb4pDDp5szeeCkXuU9fA4R5RuzGzU",
  "key26": "3FA6CLwf68kECQxYQvBWRaLPpj3U9Huz7k1Xs773TX6H3ECE6YsaD4Wynoq7Ak32vgb6NF124AXKqrphSab4bNKn",
  "key27": "45T5tYoX71LpfPcB5LZveFyN2zfScQSPSMn7g1iQecBJNCjYqeteNRW7vJK1fmYQtoX68dgkTi7dnEtqVnvxszac",
  "key28": "2ox3jif9fMapbLNDGqZ9zj94HLiHtJgFdV1hkCKJ6zidngs3WgXWB6A2XtYYrYPPPsfzpAmCDFW9krKYqbcqCofm",
  "key29": "5aVDchd36kCUAcBPDLorRnNpjN9PxzbfDToXsfmyjnXNGrdzfFEzECa6Gdk6MFVZFM1a4K3zdPwWRmNUVMqEzarp",
  "key30": "2HBfu4naLzhd9q5RNv8jKSD56dzo6HjNXhKAuMwv9mSMspcPuaj6zboAh3B1yKGGNobAcRRZ8u4hujXjwf8oJCGs",
  "key31": "zJYA88idd48W9CxYEr1b39ni7PeK5YCdY4CKcV3UnNQE1kiurdGrN1fSG4cLVuzBEbqqiiggsdZ7PMkWL8ZxUXo",
  "key32": "594qMy1zpyYirAKaPUKtsthRHHFouNRZu84RCco4B1uhBFwLC3t3JXnKVDQ52BVvzktrCCeYFRgPi9sgECAkQqBh",
  "key33": "5kDX8njQFnZxrZc3Y8yH5HigVKe3emcsjmGEXB89y5AnY9WrS4hoLWRgVbi5sDwsENBXghYYejyLNYvT1yBQyZMs",
  "key34": "Qob6xJRUXJjDY8feyw1L7twyXEXHwnm88g4NRzpWLzsvj66cbCouT7R11P6kH3T9zhM1PXpw8hgrYkVaJFeR9yp",
  "key35": "5Qsa5GWEJ52xFVtG4LkeMDVYKZU4U9vmtEtAr6mesmCEjvL39LVB3oRfMAxS3Nn4sSjX3uQUmkF4BwVM3Uvg4nhK",
  "key36": "3Ydm64vVxCGnK1orj52cWAMbTQjrQ3PZ74GFKS6366RfVzJ5Mz21jmvVnZGt8uJqHtMPYhYi8haXP9JXJjVFZJYr",
  "key37": "4CGnbpiSAGJUSupa7nT1rgmAUWMYsNTCjSKFTJqKhQqoNq5z5xj3jD9NH1afZ3UdHytrq3dohAXxWmYMT6WTvg75",
  "key38": "5nqTFn3odLpsUDQjVU76uZenMAe6npPJ63eDuTTs7Yr9WbTgn3yiX8qmrTgNX5TzyH2rinVz8kRVGhKS9FSrCz5y",
  "key39": "4AUNyXe1z88StxefKTph6UVvyVR7DMD6f7BavUDmjFGkh8pCvvwukuUkxfHbMYWwjNWTJVRefM9jog6Ue7ADjJzm",
  "key40": "2akF3SMQWRDxPpEAKEZj5NLbcvwSaKDhTeiWTNjmsdm4bsV3LQufjZhqCthZrTkLDMPn7WDPtHEKNBLXP4D2M8Q2",
  "key41": "3ddGmvttwfXLtEGdWqyjcvZbo28DNCMoiH9A8PouYxs7DxoXpoS1DCQFak5kGgbQFwcdE3nobHW798pCzQbhvUdc",
  "key42": "4PYgmaBkVqqy6yK82ex5WDCP7USfYTTycfghZuzzNHDQPVkvxvm8frfa6axjBfZZnYgyvk8hoAcMnpkCzrr9vRgR",
  "key43": "4g4Ta4MLBQqxCXsqZmAzyzrhYkQhpVZh55hMMUG5xbivUo1RpEmGv78ypkKyuUyZHHJzVbNrJ1LooQfoUe9vzb16",
  "key44": "44eVcuLP4XDQwynWqszgdpVrVQ2NQHNfTEqnCaPBCDnHtUMauNJmWNkCAhuo9nvbsd8kKZyK1nFuv1Ev3rEQUgUs"
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
