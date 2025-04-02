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
    "2Xr27ziFhpJNw9CoeP5dKJk4h2ntAT2tYhjXKBpeUff5cWYHKjeF31P1rjwm5StmPesVPxUNv2HSZPCWB17saMoj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Mu33YG67ZrwPhQyM7yrAMhmkA233QZBrwTh5yRAcZ7NNxKdg5Ldk41XuD9kAiEFVVneyFEybDscq6d9Yg3mtTu3",
  "key1": "3zx2zfQEqoETCp3ji91Q6Ni52xxPgMRi5Hn95axuv3anTJVSkgNrusX8MeRMk2evcrzvCUxPw1ZJST9eAXpTVdct",
  "key2": "56iA2d2A68EBBrQF5C3d9xaxWx9XcKiKSNR7ak8QSPVgAsNsGSWQ5mr8anA3GmapYGs6vSffAjE7gA2xnpbJSHZW",
  "key3": "3Rg6tAqEacn3HA7jnTAuF7prpowDy3ryRtLUAnzuWJxsPsdS9FL9YKUh37BhZg41nDA9nakVPDpjVGz46JUeEgY3",
  "key4": "61xgBnndKDcSEUjRkc1cCtCEWHHKBBmV33ekuKVY69kmA6t7WM3Jh9Xj4QDKpGymAQFcdfSHnmQb8yxWP63XLe6b",
  "key5": "3hof7wAGgnTB5WH4K3FBQCATfXh4y3dBXwNriEzixwdy5kkXGBqiqwN4d475Xse8URsoGtvqjUUYEKkmfYAfcCBY",
  "key6": "3Vh6PEHyfURK5p5uHgZEjWkc58tqhQqnm9cHc92n6Hk2W1kPBtBDa8GwBZXn1DFhyKdcGw75wZFG9Biq4hfjEJzz",
  "key7": "PX1iQc5Qzm4U4QWnzWPUiNBSRZBvWwnTAypffQp6NqdmCczpHqBoiJKS9axFezKmUiziVdTfK9a71rezdBnaQWj",
  "key8": "jdSmMdrbVuvSzcnf8WJ59S8sdkgoUWwBmpGxx4GTHWpdfxnnSThGAeupfeEttbL75nKbJbtYcdCjQNK98PbZTyi",
  "key9": "nK5z1ThgxVVUx22C7tzn6o1RrcAAc11qTGPC9vZyWnkrvxUZsg9ZGCBtv8FFLC43ydDroj91tL65DMboEGBhPKU",
  "key10": "5MgLCxb8T8rx8AeZEcQMN63H9yG9NxnVnbjuo1vZ1MfDKutYV1LZwikoi2tgCtXxsHntWEyHgDmoB9mX6bXgjv14",
  "key11": "5QikEbqXpqJE2thPPhmn69rNaSLorrchia1m6sTQMxAVSjBkEPVQynQDZLeP4ZbiXJTLozCVUfNuhhKkyzc9ASuX",
  "key12": "4LT2wpx58Ngzwhww7AXRrdewKaMuGQhqRQNAjdnDTxCSLps7Sq2UZqzSnaJSjig8ircYt1gWX9QGkoCL3CAeAmQ6",
  "key13": "5jTW4WoyCWYXSZ4soq6sQiwdLYFv7kfkJbe2BUarZCZRhBE2LWvYFGvQRsK59pa4Azj2nJsLFhAz6KWiwYmJe72z",
  "key14": "4mM9vzPqV1BEUKa3YSahyJwD3WgciqxZqWtBnAz1LC3A9fdiopgBCubupG7zUyaMkbv8ZSr88Kx7AsxGTCKeHLt5",
  "key15": "L54szVQaySWWu4Jx4tfTfx9rBwhF6tJXt8Db6PZCWMqs56fWxMdZapdyz8j8RViuqfWznh6gzVbFZnGrchqCBAr",
  "key16": "D4yFPy3eUgiR5zWu7z3UvjpEBQtkPhW8TNecC79uza1X4jRCF5UqShW76WM4AoSFze4DDxYZndhMRgjNkAwGK5j",
  "key17": "5o2qT9fvkNmaZjSbNt9qbEGu4RpYYDV1kRqJhMwC9Kf7NJfKjRp2nEthaNgmnSsCPs4aGtHyVcNDA36SiA7Ms6A7",
  "key18": "4VfNmnW8as3ZierCH4e7XbKgMNYdnhDVe6r2euefraQSUKu6DDRw6xxR6vXqxrnRgR8FxCxB6tTM96PdaZxYVUY3",
  "key19": "4n25DW3qDTJPUTHoWbQjEvP9aDPhz8amEucrQsHTBJs9xsYZEhVci6YeAeBrUe2mb4KJnSTWVUxqAUWqb34jXGpk",
  "key20": "3iEfNkhP2b9v4B6YpNvjaZ7DdnafBWHwUjZVKK6NQrxffBjLBT1VdXLKwzSASVGEgNnem78HQXu7CnHj9xvFCPZz",
  "key21": "4bbnYVktprCphVqHvLiURVbcXsC1qv2tyG223tVyn94NKG8wmXxn6TGy8teQFGi9uuUvUSurkCTWvZjMY6sx9dtY",
  "key22": "37aWzp6PanvtBCt5kzDrPjhzs2yXRYsdf5DxiAgGAUEv2HCkRfsn5YDJ8CQ3trABaPZxWvuwZdm5zTqBVj1nk3Fg",
  "key23": "2sJNGkYaYrhQ2iwLTp9qtPa8JCaJRMjx5naKpMimCp5KBE5vbopWi8AuDS4ftCh8tHh9sLkBf5n54h4cvxtShLwq",
  "key24": "a1CqYmP4bCjXbUS21FPbpTg8oJkreY5GYtiUYzXtPWYuM2Ec7fWQ46eRU4DsdrPKfucPGkDtJh8ecKHGiC81K7o",
  "key25": "2UrCcD9edtSBt6L2G9n6n1NkTPSB7T5csKptGf5UvwkRdzPcQtYKF7NuirkVkbqDrvx4e6r6KKrUAbLjAxTaHYj8",
  "key26": "cwYUGziyvByPz7m9CQr9Gu79vDfh5yR8YQbbYSAKrcq1atApadLtemQCFFnMYjWGwVsVMUtAuhWJesueY1BeFqF",
  "key27": "5vPHPKpfY2zTK3z1bw5HgtWRYB35Mx7AihWKzRWQ5jSXwF49VWaw1GrZQMwxkwBKsUwwLmpnKjsSYb5mN5tEAc7j",
  "key28": "39yNs5M5hZMaDq152xUuGpvLGANRikhm38LtsFAuXkfnJ9UmH4MGg6RE1MLLVh5ii3H4Dzq3xRbGEMjtRTR7LSTZ",
  "key29": "5mK8rFX3j4r1sfWLyBsN9XxtJNbtupfmFbULcBvCrHmVaGHYvHwdfj529WumrF7zA2DYZdJFWoXJJfBiae3vHcEq",
  "key30": "2pqEpuPvK44jgokSfWb8KvPRY1FaFyvia53C4KNRemfYTyPvZPowAuS8AP2tQcEBvSj1zj4CnTYrbKH6tbWY6TuC",
  "key31": "3i4jpNHges8Rj6yB55TPzMXvgxAqDrNDXxcN9RT1QqhBigvobFndsAKhnRdjMk72Xib1Q3BzgDfj6g8eZ93jEccD",
  "key32": "2wj5t1ZNgHUMwmNd1LcsBi3wA7LwgMrDT93nJRcFYGkCYQAmKaPfbR9Tah9VmGMErE8TGn7Nm2JT2HrLyyam8zec",
  "key33": "2HEAfbBZ8uR1GZSrV9n7gu2od1Z2csFEBtztsKTFh9WpVcW6wxRmk4ytJvd9Y6bcjukakH3scMwRad6Wp825ctu",
  "key34": "qgSivSEZ6mzyfEJmrdhjbF3amxPdwVJiNy4tHzKw3KYiVCFBUV3r16YrSyVXFD25hkCSSnRDqpE2Wtvuv1afUCX",
  "key35": "2825MbnxeVSU36KKWaA96ty3Ewv33hEY8g5m9MpBiaczwoMZqdpoaC8P5XoHwiDWrvqcbnipVpH42HVjXYyMz9bz",
  "key36": "4Pm338oVFp6QXAoadSW7MMTzk5BJ4WaHxCyLt2MU5qsUqmncbEfjUXwHvGRu17LvbhM1ezmbcVsfoWgooiUsJ9d1",
  "key37": "38rBnpvj2SRkKfd6JHQ3Xi7E1cQEHbpyTWG1QiEBn1UzUcKp4Hzp4TgWGq9Qd7NfmVbD6CPh74GK2L4BNY8GBGTC",
  "key38": "4EKkD1jph24nJBMKvVcXV8zgWKeRpCZCNzzicdVgxnPaKkBUtVz59q9XRxkQ7QC4gHbLXs3JaYARY4V4yTUyYzEA",
  "key39": "4B34BEQvw92yHdNu75j6hzv4eSzjghaArGs36miEzM9DLCKmwUmFL794vEmLZWgKVNsH1egfJuDmTDk1fSE21Hpm",
  "key40": "2MoXygpcG3XCAUu8rEZ63edpbFz5oSWJGB4RmYX1jibLKBZS1f7eXjYkysqEdnVjsuuy3EXU9NY2eCxGw5FxWsEW",
  "key41": "2Wv44mnsuuz9dHftZQPuXJ9DxbbxamCms9k6EeBxDoUmLo8rVKqo1yWhPbsoi7Cr5bqWgej4LezFueXyVBZnDqUB",
  "key42": "5VNNVyuHAySr3FDxUojeDZWvfTQwigNUTWjXp2RZdvUEpS9NbAJjuMNoj7oKizKGzuKhxbEpp6iRLXNXfEL3jPtA",
  "key43": "62E7cFTYZKrtUEookHsHX4cAmVEi4z12RYLWkSVP1s4WU3zw5jHFsPnLaQj8vkQbxYDvvmXXDw8oQoHXwsgYY2AT"
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
