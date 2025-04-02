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
    "3JqJ4kPuMuPgDYtYCYgDn1pvhTG5xRZfJ3FbQCEp1neAdnaAEAH2YoPUvnYkz5k9wJJjfXUQbGVyYWXMURGGxD79"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "asQtybYiV3ULQsmVupTRMZd474r3NtvDMnFDMyKRDWSKVge5YYWn2R2nWJnmUdw9aCwFHNP56QtHqff4m4Lvmw2",
  "key1": "4iMj9dZLtxYse2qYBomiDs94M21mCM11Xq3AopCTQGRCjUx3xDdiGi32HuTjPYNgbhrs3giXt2bXPWSNySpX1sgf",
  "key2": "2zCdA6SBZmBwUfvsmUGT4AGVeRF8B9Q32VksZeECur8juk7GAUXyDSwWJqvrT1zxCYD2pyaU2mxkAidogwgfLoxL",
  "key3": "5coUryvHojgnD8cvqPP3LkCoScsJ3oZeX7iFnVKUetRqAJ4zqugXEowqR6mjsBJeByYZ1pzDq2U3XYfNy1MWAtV3",
  "key4": "2pebBVxEDcL3DQmJnqpx2JLxNThCfpwXw5tvAtNLhm6jmFCVDgEmLACgYHJwq25UNd9eiTGYLCvmfZF4kL5NCeQa",
  "key5": "453iMcDotJ98zkA2Gp3YCvGS9eKRKWDz8fngquvAyUZcwzPUwK3g77r3jbZ4ZvXyRUwqd278LwLTnnHV7K13PJJH",
  "key6": "2p5XRrLjH7vZayvxtnWaZELebCUJn4g7BnxjHC7q8W1eCUVAvQ9GqA5zBEGwRVhPxFeaGWSzCutPmfm1S49d4T9p",
  "key7": "3rRQQX7yn9vRwMZvTK99j7crEX8u9xzg986EVY3FqtyTfZwFYYyPgJjhatafLWRXP8ywWEqSkKTr9ptsPYF8kYp5",
  "key8": "2GYdqzfXHPF8oCmk1wnGqSoLa7zAbazennNWvYUh6WA1Hf3MQv6BxitLGshSHPFWQXQ2K5Rs4eP4gtJCS9ukEv71",
  "key9": "2PoTZGVYMYpqhtJy1RVrh1jZBteq8vo9aTknpAJqoiVfWdPXnCSg1Qy7MJ7H3R7Gh9iY2XdFdjzJkKcaYCmdt8gd",
  "key10": "UGb1EmtP3GXZrANfZvwwVQRLbveoFZMqZrwRkqnqB3BhSSRQ2T73uWYnayqQKLpf1tV1P2Q3fg6qZiQo3twcTWU",
  "key11": "4pxUQwiyLbMExffUovqFL49LJyScBoogbpHeng56Y56MKwgxca4sZy4UPV3tsQjypvHRKXydwLTGYzHB9kejeZm2",
  "key12": "4NjcetUhaT3dcUUTfk3ownCmpCxw1XSbukSwx69CLGZ6Q51pzMtpm5BCWGcJeFZ1m8bLofzafQCgvUN8QMejmWhv",
  "key13": "2BAeg2UTHxHeRCBVSweaCKvCjBxitLrySppJRjpyNrtBUBjLgrV4DAtCjtTYesUabx4RrhdNywsHD9iF4Dhj3uCz",
  "key14": "2SdCYWG99obbohFxegxyfW8kdpD7w9QB22fTfHGtDx8URDTLCn4frDY7ApS3YAL64HYepjyGszuS6urQFexF3qnB",
  "key15": "VbrnoD83jWTADkZburNXwVp5NwRyZEGPvwTxntX8wjaETwGHEGzVbuaf64BjS6AkRipQXjT8721fyWDouA23meF",
  "key16": "4FGFKHCRV5AxuoemxWKWNeNtZt9EGszLX8xYj2nqyiMXH5PZDPanWnqXbJbbzd89qgTZYecLokTtQ8hBaLAHDWpS",
  "key17": "Bp7Qm6RW7mxCrtfBPr4FuSx3WuACKQuwr3sFEoBDtbJmYqojiUXXRng8tbpti5MWT5KhBNrshSuuMgNQwACXcVQ",
  "key18": "5r4VkEpxNpRzwKZToMgEaXL1HdJXZecTvWt6tELU3YSqdzftQoGG4tsCoSYT9jJ3fytnAS4mEAny8YatJJsoXjyT",
  "key19": "2jHi5rLo8bv9XuodemYdyN6TjML8sP9qt83V4uNL5ARtp2evqtZkppxoUyvgUqytmfXPjqc58PAz5oeRLbTFKkH9",
  "key20": "3EWNRZE5smuRp86Py1ey8WoyvK8FtXmuCRK6CCsv5VUrEpbiHdKZAHipsqq4KBVw9J3sypVaBYLy9gYDxaqo3qA8",
  "key21": "2w23ByHz7d74jKwpYnjBZ5FvzFxTEEkVVqmcCQHTvyQECkW1ZEBpPyRgzMYa2vzRXiFny7WB7moDcphXWNT34JS5",
  "key22": "2DcFYf1wAKzpbv5GzFvk8VPZcz5j7wGHU1DxoiK2unMwfSU9ntNPwqmRxHZLwzq3QWxirJQpnaD9AKNr7XiJcNwp",
  "key23": "2b95gR6G1qhpmuyaXz8NLALZwE3MEKFgSUFRkx7vL8Rmh87PRCZaDS4GMSrALxEp9ao2BZN85qL1jQyA6vPht8mC",
  "key24": "5yYYyN7hZomynEJFyKrPzhUiwBsUw26253mky7EZEwZZjRqBukFbgJzxMEcpnVmkChanhYpuCerRW6Tt3G9bh355",
  "key25": "32DfQwirjeAVjoYWc1iF6S2iXKmwdxcDTFanwbaDsP5i37UC2gdLchWtRaQmzikKCvepRuWzsXBsUMkkTHqueDdD",
  "key26": "H2R8v3m63wdUC67zuJLP17vjBhcxMbRjzekebph4JzB7agqKB7VayzzdZ1q6fvpkrw6sAMuoyyzFLxhBYeFnYtz",
  "key27": "5XLXrjzVGc2Vvbs1BWZuVYZNnF6bQhyAECRa3tWJW1ixcCLAfVvRf6ri2Sfai4NgBXvLWcGixT8oFaTKaxwzkR1Y",
  "key28": "2MG9FoBcrv4jDDxCbbTb23ShqkTsgqLbFanRqt3qNVpwPv6G1py1ZbSBh7jzZfg838mXvWVjwvbWAnMU1W6s2Uhv",
  "key29": "4wdJJPphAoN6stg7vXzov2EhuwLL8FPGLJtusBcTEo1GKhKrMP2EuJBAF8xqc3DnCNasi771UxzwzTF3EDmJEKyP",
  "key30": "4S96jxwRXuE6PrsYEtpiB2dhrNxSAYypS43AcEQSgrF9bGV5Q8VQNYrvR5LgvyvSWAgyKXBxzEhN5KE2mhsDztid",
  "key31": "5NvAYXcYdHGxmkt31jVXkt4eL1s6cfArFEHqw8JtrNJoPgvPmSmSUe2Sp3h1PLSkiPiN92JUXYhfW9eyJc3GEMS4",
  "key32": "Wj3yBjLaPXesTZntU4qSCZgnVARUS1od2e3XA7FAoReMLRhq4qD7i6gX1CqmUKyYqoUj6pbGWCKM4zPcMpVp1U2",
  "key33": "hcg4HCLK36mH2XmeBMFawtezZMRnLtPqK9bcyVArWUe4Da1iyrUjM82wd4gP1sA6B7adQxA5KGj33LUNenCThAF",
  "key34": "KRufGyGE1QQbjme3yG1dkEfT2KQoFs1ModP9dNPfcTA9goe4imX8winFAqr72eyibLyyZ5nJZ2orPVNmFNokUgV",
  "key35": "38Dgf1HbpEUzGr5r2f9xuwGtaWXd5FcVcah8dNyvvf8mWJ9LHmMKhWp1fPt8gsi1gpdSv2x9Q2bQDHmMe2mdQG5T",
  "key36": "4pz9dCKfMc5zsq3YqQ8VCV6Dq6PHuZz5FwKkastcyXMyRK9MjEshDe6jQhWe81CWsgpLTfnyK9BA5mR6uaWD8EV5",
  "key37": "57x5kEQtQPA6YneL8RSAnzk33mSmPiALomL9e9vhdp9w4VfCq7L6YPsr965jr69hmZXeQ1oN3TnWuDyq56FpX7jy"
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
