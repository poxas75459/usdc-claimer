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
    "LgLorEdUpQWfapME4X8E3VoVjFSchbRHA4QCoxp7HSaYPTxXng7cuq8jPDFncA9HZxPnCyNxBcsngF7XkjwRkS5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "v2uVS8wHob1rjVZaSC6UuH7Jf5rqb2i88hNm3d2noSqVm2ZqoqBtCturTmKyUNj3NQYEw3gybVgqF1rXMS5RZgc",
  "key1": "4D6ua19cAWU1rgi447NEJFdb4Xd6eReeA5ZheSPowUuTKfpi5Z5FcQWTvsaK8Lwg6CYAKsAf35SEZehygXFWkSQs",
  "key2": "5yriYitV1F1Bh9hHqkXfsDjK6nPr3iybBQAYwNAPb31MykzLeKoaTBD3ePrESzMwBchM9j2WyRCnMZpfvafX59Bh",
  "key3": "NR8toq1uSe2ndqMVHUSQnpqtkTmxopudeZxkoqiPf5c6TiDsL2TmMLWxZSJRUt2AofbwHT93nMA8tr1ZgNZNPJF",
  "key4": "3omipbUoY3cFo1iTsqkQ13R1ZmJ9YkYgTNKnaM5qKp2d4FuQ9EF8nvb41fW4RQ3C1TYBSxP5Rfim6vwJ46enej1M",
  "key5": "ooEz89Jv8aLX3GZ67ANoVfQRsm3py7uayU7wwARXi3nq5AyF4V6dCWb8tzE4n3kLCv9tnTfHbe4NNshvCvhQyV3",
  "key6": "2chiQGNiBuTKHoyKFJoWYQh1gMWHz1Fw3at6MeAr81tu73q91iXDXcCVLws1FzeZFDqRpHqBmdKPiD3idJ6Fy89S",
  "key7": "3mFbn3qimV33S2ripaVkYGXLis6XP69VPCKcnzxvtJsky6rp9xR9fnyeUVoJFErmVc4MvFhj7wFtCm5dDJttPAZB",
  "key8": "25JWJ9MLpVaavqBgwiSNxBoeFDwJqnsqTk6VTiXwaptdGKSG5RSY5XSoAEWXHMohM576D8QgpnTqmMW4bjAr8W9K",
  "key9": "48effZszay4UN3f87fbRxSbM2uCSdmGHBjjMJmk31iJvi8eyXr21X19gHfeA4njDyJzisXHPNAN5bXp4CHWTyyKC",
  "key10": "2AVTULnAiyvbm4oi822oLgQT4Mp1bE19bywLY4XbPWwcsMaqFtaRVY6oNuC7Fewq6AH8W1YcjBJwzRvU1tWoMNfM",
  "key11": "5SXYugRYuPqT8jUy2i1EsZzD1gKagSUeM85bqqJLxx8ZKHagxJRYtwhzu5ezDuU7GreTh6kCeVL2BiBNgXYeE8zs",
  "key12": "3SpRCotJbYRGiijwnCzP9rfnGzV3dXp7xBEUut4Z5vj7Dpvw7LPNPn1PaygU6ZWf9JppPeC7MUXuHsA7cGbjMavk",
  "key13": "57J6nnWjXRLz5ipwS8ALR77kHkEZqFEhwBBPXKp21qT3im4JinHDZWmECAQV5ueMyV1CE4DPiYUpEXCfo5JV4FKy",
  "key14": "2bnsN9EkLpvtunB5Dc1JyvT6QLWQzGTb3oEFzi3j7DEoYUUo7HY8enC1RjW2XsT69hdCTNB4guVhqSo4MfWoiEXw",
  "key15": "3Fi3hNHV2k7Qd14kd1gD3aF4sLYCuDox56xuPMHdotjSqDjmn4RJeB6p3WAaLxNsmoh29CiwCx6h3jK8t5eQiapn",
  "key16": "3WQkpQeRBozBPFT8Vt4EX8SsWxpfvRP5DqWCFZVy69GFdHhAzSN7izTYPQH6LHBTPGXJ4y3fv21Cd8sa3S72f8oQ",
  "key17": "34SWqiwpMdwfxjpQi1jZhKDMbBzneYNjnSYSKZNSesJLiSiXj5XYC6ucw8TRaRCVLVWhTGGLf8ph1NaS4cV5cdWr",
  "key18": "32XJbW9jKunxk8XZxNFEri9zJrxASjSYzHvHvEDMmSSwGwoRRD5EsNGgQpLBy7i6aQWAHKoqFZdihSNkrs9n3Reb",
  "key19": "4p8vPGVGTiksquMHccGB6eqRedoT9JMhFPNvMT4JmnMo4gnVLXjpWBnX1hFaXc4g4D1xgb79Awj3Jangj1R2r1xn",
  "key20": "5DKR2xmfoB7PtAGKicH458EeC34kYTP8RJAt2s4oGn3E2yHFzkwUPP7jT14BS6b3UsVMoS1WywifmuSHVuUVXkWs",
  "key21": "3ZCPgH4QT4GkG6x9URZ5bWn8ggKuUSfSXmhdm8mW87rx7MktKaMpeDKaLkSqeCmvbdF2oyZoFwuqoYivb1QTme8m",
  "key22": "4hkcCwNv5WuSxH3xJL7P5C2aj9CRRW4j1R67v4wScF7dQVTgZhBQhtCxotNQkvcELnfd9hsj4netYVrN1EFQZDXG",
  "key23": "5wLE2ZpepQ9tbJHFb7LTyPr749NLfUURwBNZTCUq6jCi4fY9mgA3Rcv5FdT1VxnKsWQWi2u5oXLgnHC1XRyod6HM",
  "key24": "2vm8itEhxZ7DYfW61KSQ2MafFANZZy3xgsTMHHYbGjESBi13hR1qeTU2eQ5fGpYFxPDaiK4wF3xjU3CYD61z3Dub",
  "key25": "2nE5bG5441kjrb1eYTwwMUB9qJTyXSDha35wkt1hDQZLAH9gPjXakuCwnc6o8Rx99SEgDhzboS5t3sQXphewmAuV",
  "key26": "4JQDZMvtRHxksTL7C9VdwMnSSEs2FTacktGeZKUdBX4VKFkGRDTkYdrMiFcHVXt6hdP6PXocSmQ94cKgC57BVy6W",
  "key27": "2z92kawHeH69hPNcaxytPrq3Lu15Q3VSwruCqrv6f2cqTdCay97wUGoZJSwk6gsVQEN8Zd1L6a1RsmjvuuXGz3pc",
  "key28": "3XcnnJ4tsRrX8tB2CsktrY6TfgXo5kTcNL3vbHLVoFWNdQ1LVwFTsWTBFEFjru9APevAnDmFCp73w1ARFfMXcQ1f",
  "key29": "2hR1DCLynm1YuQ9q2pgPhn3wSo6BL1bsqkSeoLUq94AvC4pbtRzBeMfKgZBo3DcgiSKbh1o23u1nNjYaC8GrsKYP",
  "key30": "5azLzmh5g2SYLS2AefUhYmS7s1TiQqGpUYze4oG9vn67qRJgGE2s9A7eRqdtN2Ge2eNgMzvRFuG5GcngFefdhkne",
  "key31": "2QAhsFb4YeCxLPmyYmXPp6UNHKjQz1wBDJdxP4ukZMa9A1ZXkNdaKiDaXnu8uYD24SDvEzriBMvCmwC81SiVAWtW",
  "key32": "65YSYxbSfjPYvXH6qcLBtFXmXQVVXS6QHFhpiAkv5b9LZapXeE4fgempVQtDG6RZkH1m7H7YYS2ChwUAg4MVwx1A",
  "key33": "5K34WuqtXDZcivwpE1xU995vuEEsmo75TuGHTtkEuV5YbN91cvCns4MPC47GoYAMF5B2opyFKQP2uBMYX6ykama7",
  "key34": "rdpvjwDdhtqt2DoJ4xe9JbMZoRrfWNm1R7sV9RT16sL5kFt5FpkGQ39xtzpFp9Mgt4upQ9aETmTAKkgeUVqdBrs",
  "key35": "3anZpkKwSaKxdWeNE7cpSSCPwLVr1SnPEL4idxLP1cSARkQYHEa7CEE9qSZVqn16hN3Fhp7oZSxoD4d3RfaNrCgu",
  "key36": "5m9TkcxLRZZMmfQYzdCU3UcEgX6Jh4yQGqJJd5C8f6pUFzPM5KcGvw1mF5FqDGqCyb59SyHJravSuLwsQfVP7aMZ",
  "key37": "2DYx7Wry6GPGc4KZZ8zuQgpkoPHXb8PDbCQHFM5Q4X8ioNc6dA7aBFDoL6Br2m8fRvzrckRBHe4E3uT2NcFapjKu",
  "key38": "2ce2i9iTDwgy3rKqm87Q6gkWDggF1ygyg1ySWUEjg41nCWcyvYFrbjiNEneSji4vCSUPg9dDSW1CohnsJevXNgEX",
  "key39": "24UN7WcNhduCaQYWbJSVAWhomynPHHznadVcjUndMVyPq6WNhG88AbhN2ZHni4ThrT7QGrpoufL1HHSAWNR5xyN5",
  "key40": "3dnAqUFXRtsZoaeFV3izv11wCFXCpGStooDW8VkMTZSrhXi8tKrVJbpa1Utg3RhQEvFzPd5StAeu9X5Tf9FtC6mD",
  "key41": "24sPw4JPjFiPSMVvfCr3CUPe5SduRVMjwU1VnDddbD9Y5DBHbKFiiSpxnJe6jMcmxkgtoMbPoqwXM3UwYg4Z6Soj",
  "key42": "5H9ZuaeLqAwfKQEMrBXoV1fUWnP5tctCGnT2UwkaTM3BYCanYhqzUeXxTCy6yY5tHfpsgiA3Fp6z74A8nd6aifjx",
  "key43": "5NJzMzTYQaWPGfkesBLLuL5EnEjh99JfPCYbJX4S541JazmYCdea31hCSBbKfCMYybcRXcpsZg59jqnTf8dBoRrG",
  "key44": "uxrMaJSLPqS1UmQzY27WJgTfFsySJvsJRKgiLBJbCXe16CA4YB1HEjAPDafJ4VHD9nczKkE3VwkSuCcQhbFaNFs",
  "key45": "3uwGMoBeCJ6zxAJciyAaguxCyayKZUCZr9VQVmmGeMJGoSN13DLiGTVaPpJi25uqP5zsFhEWWoM2JNRnFCRN5uhY"
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
