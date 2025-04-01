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
    "4pb4oSJJfcc6TNFRhc18B1hv5tur2P9NC4rxNHpKtfoMXuAFhSgCeYd2veoE8jKZVvdU1Ddn1JWwMECEiM3hGMak"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5RM2R2ydVkb1cHzCZb5mUXgaUBFG5cySsYJowoGP4KehbLk9dVW1asKY812NjGChCJaCJiC6FD75AhfvnLf4GHZE",
  "key1": "3imUzCd3oTQLNVgC1e7JF9miyMtq6waGA19BFobQMg9ct1X1twSjU2RBxwnzEWQRcfpvHUjN89K6buotd5o7PXKt",
  "key2": "57n4bu9Ee5kTkQKyGer1ysHjDt5g7EuycxD5YX7Am8JcUXghoSznQ6TkSjb3kHMfmhzhVgmmMVM4jq5E6xYyaTf7",
  "key3": "64J3cF845hm7QSQ5hJj5XZkrjJPjgPFRBXwJkUs8xyXdYSopjoNszZnyTufP98tHqiqh66wGdBUGFxqcpNMarKTv",
  "key4": "whYwb2T93JfDP1F3ekZ6y1W7FuKGATvSM87jHnmEt5eKaE3vsJby4btc1ut7FkeRZ7xANtwVY8zspkPWpahXYGf",
  "key5": "4zqpm8smTEgCZmJrbhqfz2eMUPCrWBacmMRC5RJZBvFpAntDypTxpVCK9FqWNk5A4hhpWeN5B7i2cJJUsoSQe2V5",
  "key6": "47a4ND6ZFjyBzbgNLvqqSR9cZZFuen5T1rLbeVwUd4sVD5vJ5qzcZqBDg4y12cnsMN4VKqcLZCehwDiobDQ4Fe5f",
  "key7": "5BZTwr1Hp4A6TVPAeGssTEEDVEiPNJphBC5rQd7tosr314DAeUzBx4CCuWFNJNnJ2g5CWvtH7Vx2rNVRXJVXPnzM",
  "key8": "qnLRC9W8ygFabWhTSZ4yhz5RhNaqXDNYq7UCNbhdZAHVmS8cK6tduppgEE1RM534Sq2uAMDHgTacJYDzjQoa5mw",
  "key9": "5hWjizKYRWuR2cHrueN8BLhSEscP45khDNGUhG4xPaHWZuKsBiVcSBrM7tw15cztAayg7doCepwrkAWVAMgx5rC9",
  "key10": "4pB3cXyU1oNT8MCnHasYsnfjYfDAkmRNZjKe9dFL5sUpMMwNiTmQduXyBptxJyq5woUxkDx62CT7kBkfJu4AigYD",
  "key11": "59UnbuRvFXDeCYWxdGjMK1HMwR5kBVwZt6s6DEP5hhgqXvVb88ntgasFMeN9CUkkiWsTgDN8fD7iiiSNsGQahErf",
  "key12": "64MgbQWa5XzUC7eH2NEeDe6tvTh8PCLQaavZbQRWLq8uVcyMo8YdvLQLBBhuZn8KdQDYMcYPwsG3QoGDZyfE1k2P",
  "key13": "3ZcBP3V39rR13ihKYU71R2RBVptiXj3RWH6XwSuj4sJyBPBpRQqoDKQ4fHnUqsWphHweUSUw4Ht1zR4F2PAM1Shy",
  "key14": "5pqLhYM77g6SK2DgTfXpkEMstoP95KCHsa3Dkxb74EvLDnPnKEgyerMGNZg3Dkd7ZgfkCprmicUdSnZ2jfaLfZjc",
  "key15": "4XR4ZeBtsJjeg8g5yWmuJy11McKMeQxDwrPQr9k4exaFdypEWaeTqTMBix641ZGuf1KcEscPj8yi4JJUwzhnNDmC",
  "key16": "2tNKD3CNnPnkinK2eLoaWobpTF9EPsH7akEvobDg4gDq9rVbxunkLHrLBtSWJ3xArMGtWWnj1eya4WhBRmAKXc53",
  "key17": "poDAwWdk3g9AuKcq9h6PE2HFuSVo17TfjRT1b6YgjLBRfQNuZR7doZvSes4e6JP6tkvpeNuGA5mRRRjCjVnmR6L",
  "key18": "5XYKfU22tNtTZmCi7yYmrKYCcvBnoKHprGA8XBf7MYrPjdJpTVrEVd1CdyxbHQUxUsZKwV8mcBnpgaAH7aq3nGx5",
  "key19": "5vySiRsuuwsrrRJDjcmMxbxQb4iCGmsjQEd66oL7RyF9tbutqJZQEhTQVcfh3wvFkD5jSCGzAkWo3oKwXMCY4D8b",
  "key20": "2D2JUrjtFu8eFKvFfEoshGok3G3QtqKyzs4eFTbhs4kpPP2EUs8HQ2KzKQd1wEX8Au7cHTh2qpiqGvYEkwWmCXZ7",
  "key21": "4fyYrVm7NdZ8crMyJPuifwZxhW64fjuUBuHBW8jCUy9ayxMwJZNVcmiyyLkewbVDJSEsuMMVo4qkE63LFEUJcRn6",
  "key22": "H59J5YZyrXxsB9vCJ8LV9pCwNTQGpFAgmZr8W6Qa4PEnwRVWqqNY3W8JEXFbU2NaWzBrgvqJS1amAjXebiTnVCT",
  "key23": "57TSavDb78QByaY8pDcsLTnsWNfsxMhemKvVXWiAY1GVNAcSLvcuFqnn6gnik4mPreLcQDtgsXanPLERvuR15RFX",
  "key24": "4SE6AokzezpqSoWVUYmydHiHrCVjfupPk1cTSEmmDcPfj7dNMJYxjmvsw29vbVbgSMgqXK4pew7ggFYSaDmLAgf",
  "key25": "28LiZ2MmKd6XACnowRr7BQp8poCHRt4WHxAHeNEfH3CVqnhAruJzB5atGyssp3C1YDMoocL8NKe3hy93j4LpTE6L",
  "key26": "Mg6WM5TUyHdtwYL1YzTs3w3TcnGvWzRyDpujJ4ez435RbTXtr2nDFjxhB4xzNK2jLp1kmGZfyEp6HQxUgziao7e",
  "key27": "5TCdYJ5xaYHbuGkRpFzcSk4a5NwFomHuQhvH1GUHKSFsyvMh1bmopMAQF9d2d5AiQP692c9Wq2CLrtua5NfvMHe6",
  "key28": "52mfC2Ar2pBy7xX1b1xfESzwtcnQWN3bX3349jgBdgo1SXd1gdcqc8xdGdxuus3vUqY3PEqqxh79i3brDaRhWg6u",
  "key29": "32QfDq1dGp56HzNx8LjovGpVL3KBiaD6q4n9LNrpUpCQVpM7XcPWBBaQUB5rVe2WgvVD4KHTqiT3q6Mg6t4WGSyo",
  "key30": "5ZusKkD2MewhcxNQUE3rDD9SBsKUKmkcuoi3xvDvpyAVwPZQmU1DBcMsJUjVydyv6RDnQPyLPQ1jkBYwzBMqa6tV",
  "key31": "2PEcHEmMVM8QcHRRrCQ3PmHsso3dUybspYpvMMS2g8b2ZtgKg1jPRkcRYYhd7yXaxjxgHwV69Z5aW5kB7wYTyzCk",
  "key32": "4n5UzZqBoBNQhxQ2QXtRqSNDXxAFfezaCsPKDXMK6ExDAj1uu76aiVJZjBV14HJPZLSd6e2WjKbbQzwSBHjxfVfp",
  "key33": "Zi3DrzpBymGeikG3xmhm9Y4Ji4rWkDysH5bsHwUgLi5udELzgMDThL3hADowaUHyAUDYSRDLZkh3fCAciD2GW2r",
  "key34": "2eVPFV7foBywsisp7syqPe2oewUaaQ8WPDzC29R2tR6CfEvpznpA7cE8VgJoryWfmV7UZwUCzx3Xw58h4W3atMhd",
  "key35": "2HLZxUiipkCXqLcALLE2Fqh2qxa3RXARVhjy38BAdG1PnsvSvun9sdg9omrSxi4MaWp7oKSX8EfUkaP7vQ3L58MK",
  "key36": "3geq5Rdk2xJUL1amuP4kqoPbsYV9AaHja1JazSgBMGbVCnS2LYnjvdg6uPGPmDZbYKLdTi3iCKNS3CPpYeAhJDAK",
  "key37": "3kTiKCbT7vJqnmvMuqMhzHwMKABEJr9m9bY52XUoEcufsXbLZX49nXibnvFENQTfwdqATtNEQftHy7fGbXsjX6b",
  "key38": "2q3UbaX51gGRR99wwXzM1hGYyVUS3882RBheSbrT9BmLpRWrRq95anMhWuU8Lxnpynjcy99J8KNL5CC6KfPmk82w",
  "key39": "59noBU6vzfDnVUX9ZQXaapEEqQN8i3rHaJnLiKiRGKnddrcuHug8PoC3RgTDRKM6Xgbr3owsDTmeySrRmjzEVuT2",
  "key40": "66NTVNeXLx9E4m24PTnW5x7pq8r2nM8RH6bWDEUUiG6KGyKnyviXzd3RFJ5AVckm5kScqyxNuMFs7xHiz98Yzq9u",
  "key41": "4mTfLjY62Ub6moRaKzqpXPsStXaGLaok4AYzdpUQ49QynBwou5RJELNE3ZMrXq9U4SeT8bSAt2zFXFMUy7YVChrA"
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
