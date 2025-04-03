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
    "3XnzkQANQS3bbBUEUh8K2J3SGUqyTVxwuqBnphcjcRoD3LmyWjvGm1NRRFEnvLBnqUMwy8epAc2c6hVWa6ANumts"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2JwdqUYnMT2MVz9QRiWUam3BDJTedNCjSh76LkrAzwuGMmrTgGtm2xT8How5154uEJicTdC7HgHaGHN3UipC5xqR",
  "key1": "2m89UKzrccR7HpzQEGDdZswpN7jMUj3yJaPmJHtPwCnRKhMRGQ8iPPvHv2Pfejr6kv2XQLQqk7MGkuM1MA6wqu5V",
  "key2": "2yUU1prhUC95zH1YByz73pVQwzftuxSvGGZrBN22w8BeRpWAaBHWB9bLMjTvyP82nSudobwWAcxQjyDvhmEWjnn8",
  "key3": "3n8tHSD5fcyS9uu4BeB4MXob6YYhxHEy1KJtr2PXSE3jtQudW11VWVGGKevS8btTWZPK9jk7sPbEtpfBALrDt1wq",
  "key4": "2poUrY9akHKWRc27xRy6RTF7DSqpZkp9EDCVbeSPgNbvzRzvitMSh5oWuX1Yunh1iqVkmjUSj6DGrgJt7JNSBni9",
  "key5": "5vNKGUFrzjnK8pupjd4BpmcHGDDGqp6w9zYBTnG2ovUeQEikgiQpwdYoxr7BJQDVGk7UFvSjkuauSfPzJGeknd6u",
  "key6": "QPadPMfygHei7peifVKrh4PY5e1BhdZFFMXCPZPk1ztEaB6ohFRiV1TkcpWrLvVsdz5r7PRY26QrQiV7zAbaVKs",
  "key7": "2jgDZDwtj59S95E5rtZU7cKaBHt8RSfdeeWbSS2qmxYDiSYF6wZvMUMjnPKY4nA1Pkn3HSh2AP2Q5cHEJKuvsowQ",
  "key8": "oJjoGWHpz4jM3td4vYRVmU7dB9jzpDacemarhH1fJfrFmUSGGnbgmNzHvu61f6ujdyYvgDLcJ8NYitHSTnHJMuy",
  "key9": "tnDwCF3CNPErCqeHP8JBw5y9frG21k8fMkfbz5oEEvBTU3dVxarvuFfg7YCpZu79Wiiz6juF5sEEfVRanwSkDcr",
  "key10": "2wg4ZgncPQUPvJLhDpZGZjWyCXG9P4VtCUSmi37fP7osYBNxvoRvVEe32Lg9HznQpHVSPEWazAbnTymJZ5dLffXJ",
  "key11": "5qzEUQ9rzGqpmgNnU4u54V9m6fLXqH46sbVs6H6XHsNjiD7hwsUunaHYtLjz2vhQ5iH2N6PbqEWB86Hgh7o825jB",
  "key12": "3pnbHVifh5rzBKNWkHeN5UvAETcSe4URexSp7s8zjptpfQvJcsLxSDLZf3ke2RSjo9Ag2ZXut42YbQcopZoqzT5w",
  "key13": "5j4VpTQwPDUbK646VJLEArHHTCE22r1dLisuvTPxA9rnabgTcgnozDKANekt8sYMVo3EYywZjsgZBK8THnkL5Rt4",
  "key14": "5JoL1byS2GrHP9tKyp1LqT6WvAc7TvfcH2CJ59iRff6cwuG2tbHeXFMRz66uMM5dHhYhSGQfYFfWRv7UfeA7gMPE",
  "key15": "rfnLYg85XfMfBdSa8jEneDoYmQN9XwxdrzfYboJRU3cijScri5F2KS7xKxVghtvvA9dReEcPDQu7WHLTsRfLcp3",
  "key16": "NxJJRdP65yVwgz1LUozcF6EuJeD9rNAMLVSJN2MYXzE5xo7VUMa2LEFGq1uyLoWmo3JTnBT7qsdSFTa5j537eca",
  "key17": "54TX4HPvWxi9Vne1YKePSQGetsyegNS7pGW7ikSHqmjuPXyzpZqA2nXz141abzJtpg78GpW2ZSQ9WZBqgiSRE8Ud",
  "key18": "2RLvVuspHDHy9rZuwJ7781wN6tBc69sBLMpCuVsaNH4WfVpqc6LBE8ejWbqaJhz7U3b9nyNhuvMvtnk3uy9YNFrz",
  "key19": "4KavsFTSTGctaHUwFbK7UwvLULvAf151jhFnoMsUrKe3195ibkJdeFZerpL1ZSK29Em5CN4iPizk2woMyxoxygo9",
  "key20": "5DpysF7A2UUQUYUnxRp6Jb2Ee2sFBbNjcXsWAeFVqgEQzFK6ugK88mqbmmcU9Ze4UWRdt1NtUVWnTpy41vvayon4",
  "key21": "569eZa1kLZcstNyRHMPrVGLGru6UgJyndhFESoXYMVbgoebVp7fSC5TsE8rXYS18ECZxhfrg136bavMmPCTzr17j",
  "key22": "2PBwXqpZxYM3JJKtfk4Bs7uB6fTUWXNYk666AnQ9V49WQJFp9GfXWbPppugGZKCDygYYdJi9mdpo9cBxoMCLBfeR",
  "key23": "iDQaLL4FjXadbb3sBDHPRgfmBxJVPKGkhJfiLAQsDaSqgY3XvzbHxVWb2ALbKGURuizj43MzevNyUVBWNrxi3hg",
  "key24": "4TztzE92ougwznz5N66xgM86fmgtUjP6PSPPKYTUZU7Vbb54pwM4V7qAQqbJG21RzgDmps4LLSjL54YrMBBcpZpj",
  "key25": "iAXcqhLog44uDZZVVCr6ALteoLSNKyCLwQgW6iQdyCm7ds9qzvcLeihc5XqPP3ZuBrd4GmubA32SymJNW5J9Ryc",
  "key26": "3BrWerLHjrAVgzMhjwJyghHJLetQCteNj71GHCRhpefqpi1Ph6TyqrtAptjZm2bo3Gjt8S6M6E6AfKdki7n7ZRga",
  "key27": "DWRT69Pg39wab8vfkWWG9hH3XqaSWBmhhfv9VEUmpESs1peN86rdPTR8T3GUkjeUDsSyVg7Z3STdCqWLG6hNNg8",
  "key28": "5Zg1rES2FomRwsN4qtBLmLTvErBxRybH9Tb3aFyGNH49SSiNyTA3hcws3ZR3ACYTXnqsdppBsPdRbWAc6Nipm8oB",
  "key29": "3mgHu9Qw2MteLGyAJvguLk3BqCgoNJV6qCy7LLu3DiEfRuz387pA7KprfaJHpezMv9wTK29DaB8tLRaG8idVW4rM",
  "key30": "5QAVMnVEws2LVAfPyidsnDxv3pb8fnWTiBMUPNQGVsQ1DdWtQjr79YmPMArsyChrnX8R18ZfcZ5nnqhcr992bjrM",
  "key31": "yNsKrFj7zMtNMCDaHgfDvYVKyefNqDU9ZZLo1fayMXbocYUnXZTigu2ah7BN6CVTeDYtqPj9dSbHG9xMCAVTm3h",
  "key32": "2USPTD1Mn2vNH1GXfzekpheJxf5Q42gWk3KSZeRFrFGVi7k1DSEpxbYRhqk5K9a8cFfcS6DxsEc5fHA8qH1ES3rb",
  "key33": "5mTWMYFB8wtLWnPPA5M5KdzbLe3xTZ97XqrpZxuKuncnnUC1YQ3wGA7iSxEDZ6zfDXNDnPVCPjKH8PHferkubX9w",
  "key34": "37rJmtzQBxVFmiPyEZ8KcRhA83XSCgX1aUu8yPu9z9r1TvkLv3bAao8U6H27FnPiWM1vrPAVyu5rDLna7bLJXxFk",
  "key35": "3zrVueWCmgZpSrzMG8fC41BrdmYhBJj3WpYYXmkcTCz2j7vMvDKPR8gKeJ81MQ2aie3bz26PSZoD8CAGKboRmeJL",
  "key36": "4M1qa5cULU138s8tem7KPgkr9u4cyZXNn2VnxgoAEq7PDtWczc9A5yiyVh9ZpSXqV5BzhcohmBDtJf9mCFrFhoCi",
  "key37": "2QQpP7E4Zgy5dUDhDpULN1DAyncpSGjP2q5CEw5tXAeBCs2yWFvD9bLj8pW8WiLBDPYsr44ThKScCk7KBB9SkeVH",
  "key38": "2Y3jdpDxsgAGV5gDqfyBJDN6jnU6RdvutsprZp6C4necRmkr3mnmpiZdGcbt1w5PB5nD4GwmgZpx8DLhV953v6RM",
  "key39": "35rSNVp6fgL6j5KEU7BU4T5J9yygmvybHJf5RSqe2FSohA6Xj7sEZJFoufbNkkew3YFUbW3kG3bAG1Lxty6YWkKd",
  "key40": "9FKPPduhymy2AJxh5kmeXLp4GLiHpaPeCZCFmmT5C888AXyMNjrtwfoe9rA2uxkbhss5cA3mKtLW42NUXUFBeXq",
  "key41": "24wNhkQGGtMjZeyLdnuQ6cHRaqUbiiNBAGujLpaeCcSv7hHPttJnDD2sVvsmJaN3TD3m7ytFuUn6p7o2FRUMdhes",
  "key42": "4NLATLjb5U5iF4XPfnLQ2KxtRrAqeRjB46Kmx9rjie5ikNMGVuCckkjf76KotXDc4GMVUuLyKwgNf7qMa3hiC3zG",
  "key43": "4xXrdwZxVjMjkMyMZWNnFEnAeZavoWuNKzY1ZJYDo3SxiPoA6tf4izx8y9MPsrNigioDcM6v3ceJnQyfxiUBgiTF",
  "key44": "2dhbM9B1h7cV6F96ppMXhVwR16e5FnetCsRxajtfWNB3Bizsgef94BwRbwahTTiTixp5CXgAxE7vyWb2hFQpMcB5",
  "key45": "CqjRMzdqsWG6usdajiZz2nTN717HXw4g2uNFiMY6iDVXQXi1bvg6ddUEoNYZXCdY2pmEsGUajFgBjzpmSx5Rppt",
  "key46": "3kGf57yMVqQQkm7gXSDHh7Ta7FqmvrAcDLPeDUPhkAQyqQcFYDfcimB8EDuwEmAceCz6oJM58NSjppsxxCyAjmYz",
  "key47": "5t8c79vksRybvcE7MruoghTCNsXiuJXvQHsUmkuDjXDC5CdgfSPUYK5D6rXL5M2D9K6tRMtXwJXCGxJtVQcZbazw"
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
