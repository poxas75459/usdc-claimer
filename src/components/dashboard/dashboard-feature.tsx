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
    "5XEL3SsHx5Zxj5BbU8wVPq1o7GMyqobfyCsWvKeFKZzKq6iCZcdJnjcEtwPgpga7kBQN1xvdSsyki4xM6jomw44a"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xq8xZ6TvwR74oH35nx9eZ42vDtqMem5qoarZUZNt3rNAb2p8srH3duoM4LXRmyB3ZYr81wUxEimVRiUiqzEmriT",
  "key1": "426v62zhbWX92gtDbEp2iaCLRe6isK3MpCzpFRJpa9Wty87SqpfbTTSNnLq9vbVYoaVSngZ4k2XDiPsukNBtqJ27",
  "key2": "5Ff62BqeqjFBzh9nqftJPKm859YZbYgdHLHJMG5MrMbwdWifWAXwZS8Y7a59QHzg684xBxsHoK5omvX8kYdVA9ZV",
  "key3": "4oY3GagHFVhFpp3xUXeGeCJRPfbTUN9EBcKrU525GNYWc1aGzbMLim4X88WttsYnrXPccDVhcfv1GuahhhEm8WMs",
  "key4": "SgiKMkrtxprqKTEyvYaA2EwyUikj1WRgos1BzaK2CmBWhDSVL9edzPVFeRMNqMkKgsQrDe2ZNEkVf6JafebAxGm",
  "key5": "5vb24VT1aWfZsgTMUfTLB2kcgXT7UN4SsDs1LeecCc8V9rzTGMeFmqfzrngY44LHacBkkDaTbZPHuDAFZXWVGtjM",
  "key6": "2H6FPgcpR9qgqyXE5TXzDR8dPLMeoeCToLUSgV54xSCG7AXo7JXUB198d1QrmLajW62hqwhS4WSTfsgZsswKAAor",
  "key7": "31Hsk48PrqSfQnPnFEw3mzzm1bGTkM97oQxQve6nA7QG8p2dExrGFRf3Pb41dV7Nhcc9twuSQ19Vmp3ctCNRNAdu",
  "key8": "66QtZHarXtqryfJ41QjFnheqkQznLWEbgZrPLAxLNGRvBsGunEya3xP8MVM8hb8cabjpQVtj2PFDCxaaQLK9XcKi",
  "key9": "46GqG54E9gmvrteGU9CZwYjvFYnor68ywbdHLKkavYpj6ARzzqLeWo3QMmLdao1je6FDKoxp9GnoXYFPspExpsfN",
  "key10": "31DSmArQjhCDp8XNghqy53Q1uYS56LxgRf2xNnBNj7QfiiLhUdTuXmvKny8obtFjQQKL66aUnNRASzNxjXQpMYGG",
  "key11": "5kCaKibj8R1ASYq6Xi6UvynzgyKbRXxh9TzbYLYwVVuRGe99zpf4ZeqeEehD4WYurPXbaREhHdQ9ZWv1C8dRJHPn",
  "key12": "2esMBWrsjmzynwtt62CVJqMpgSuiKJu2EFVR7QhTtDJ4tHf3Zo8TFyvzW5gTzSVpYisj5jJhcMqmo1ySwV9Frhs2",
  "key13": "68xHqg4qZcFHjYvW9GJ9RHnyTSoFQoYoMwNPTRkKMnECUi6a6bs7L3myGqgx7hYpKTviTdqTmK4jqV26zXLDLVZ",
  "key14": "361B9tD6747Qsa6SD477FZ1MpAhY1UpKDBTGsSoz6rEYsA1eZzAAxxfyo2sq26tHYJG99y2wGaKZejyp7S7yDwMt",
  "key15": "5qz5c5HHKtNKZe3pcweqMZxFFCCpbQQFcxCCkn5Zo4WmHwJg8biwBDhmT1uqnAsxVfunvUFJ5P9eTX5yKHSeb2DP",
  "key16": "2Y4nYWRLAdLi9MWE9NTCN32kobCteKZ6Lk7FVECqFj8nukJuiXtz5ewR7swF1QpExBAfqQgDG4PF2M5K5on1e8EG",
  "key17": "4G3hoU92JkPTPQHbQ9bGgi84bdiXBPxyk99DDoSrU1oE321gsAaFQ2qqa7ohqpZQorREFy6yU8WDpNFeudNse9ib",
  "key18": "57DLZvAULJvq2sYSgn1oMqLY3RCYRGrKgpg1RcpxiBucGCBpSwXTom43azeDYFoMFLnNsfNFLCjuS4F4UBKXCWAk",
  "key19": "3SYNnRgSG8CwsmfYvxVmdTAHNGV3Sjmjmn5fT2ea6QpDq9oiD4NjJn67aoFHKfMr51uaQAkmNpuU18TmQiJLd61Z",
  "key20": "42CY2TgzBJ3zQQ8pdMqC7gotDpnqGWCySkvR3vDCjJLvp6CgQ3YTmgghCnsStZswBRSqszdf9dqsJyL6KWBrYFxz",
  "key21": "29ZBepMUb6FdP26pPMDQoTxuRa35sgc8UJNrFHAJHrsKDePxgCRMsoqDh6s87nZDFV5S7qrexcvqGDDSkJDECtCf",
  "key22": "3TUc4x5xshVus1aQrujF7FbYom87uXkpQVnYKLBqq9efKR8k76o54S53qwXSjLSRwFNP18xMtnWQQVPNdgu3ugMA",
  "key23": "3fYnt3Er2WJyeuWGWk4Lk5HxWTq76n1zEYbQQFLyCgyGpVjZjQAzXywEdQwvF2YSfSUMonXBYUJHJw4Peagcczwc",
  "key24": "2ZEoXXPUo5VSqbrQghTs9vVGKWoCS6XWrxymU5soSef79jxccjwET4qGr5romZj7ZApnzwGNn4RSZVMjvfkVodbr",
  "key25": "7ftVW7h9i3NziZygwDu5xf6t51wjBm6tRRnD4qsREBLhAowbvGg3DNdbdWT2qKL8ohRSgGAGvcag6WAbz64HB18",
  "key26": "2H96nU13vEAhMRqbNs6S14yAE4mXRyKC17figKHYD96HHsx6WZDXXFv2KUSPeq4syjgyy8oTmHtQuPw2SxCRUgbs",
  "key27": "3amke4pK2RnwjLtNeEdPAHM2hz6mmj7MCSJGzrhsdDEPuYzBqXrdU7p3eSBDGTDiynpPSVYAMuzk7FLqxbuKaSr1",
  "key28": "241rsmNkiMQ6pD4MKYT4jb9ipzM2jX9KxaRVmo9ijLu8r6s8Az5NCUuYrbrRJbV3kaQg8BTg69k7v16jradNzVmP",
  "key29": "3mXwt4S6ZvrjhECN34FsVTvAkpUrfPHMoCRXfNk8d54hWtLxNmPXbZk7e2Q54yLqpc6Avd1cFuwzjvij9t6WBouo",
  "key30": "4n1NACHeZhqZzb39yoE1AgL2dAVM2zv1jcgCLQXkG4qoyMjgwKAEZnCsjsZNHUmegTeMY6EyRzApAeXCRhb5tefn",
  "key31": "4CEmxv7RMK52K9uwZ5Rpn8HHpBaXBo37QPeJC7iDned6LRepj9eUF9T5iUZEpBPLz7Hydet4rTN5eraWo5giYnqN",
  "key32": "5MbP6zZqfvrevtXEVZmxwDfhjYT8ntJ1AfLe3HfD7hPCYDKMdo9ssjKcTX113GnPmUYu2yKYSP39DcvKbxKsZ1LK",
  "key33": "iChwXbT1HJdxBUyaWSh4rLA1qvGTakbTQ6BFw1ujg7qj6LcFE9A7nZKhE1p4NEY7N8GaqViWxuKcF2yYmi7ZsZU",
  "key34": "3MmY8tTGkz4KfaQVSY8oM7vj7TkyiADCf7HZUuYrfqjGkmKbgSR4m3SvcotXzSfMdPPqobphnxrQSB5KLHztqZRa"
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
