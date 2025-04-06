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
    "2qd2mdS893k6WykH3RNMt84wjJKZYUW6UWwLySLRxbBJ9sQXX8nc2Vs5p4GdJvQtWwmQrKXGhqXAEhKtDxgtS3Bk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5seZw9zfZZokGbrmQhWoy1bN2kLFtpzvHFjyFanvfJt6tv8xrwdpFFuSVpAfppJVPMa8GvZnKsfoBKtSqvhtuAgg",
  "key1": "3LRqkrqELYTPEdeo35W7B8pUkgPLa8q8pNaasxHhM3HPtGH4R39JM3fqikEjaWuSKCrFPrQ5YfzVRKBPpHNpNYLr",
  "key2": "JBpENxxum7CocgwNBKDTNHRxV3jQSuWdT9V1Awdm472X7xaGNPF1XqYWsYReBg9KfxipPX35SqrdwxyHpeEazbr",
  "key3": "4kyfw8ecACNR1qibt4qgwcpFMu3woctPuAxeJrCBpmPoB3ygEUTvq8cXTyzKYhbdAijVcaCiNVEjhrASQo82omeT",
  "key4": "54dX5RTEXSAX93WP53fdPvJXVrFF5YWXoox2xpajekbnHptnqgFJdYXXKyPtk5uCJGWW8SFPb1MrSVWWcapKjhD2",
  "key5": "KS6PeFZjYuQ8k91wudorPSVvBonAM7zYBxAgqFCUfYpPhKGdw3txJkLnpb7tRYwR5BQKLBDCP7SRESRCpMQD3BH",
  "key6": "rep1UwJjyeq4trxEsHNcMM38Y2v7aKMH784wpbabWH8o4Zo7qvcDfqWXHTkFkL6LfqsxhtSEUrVuwgbV9ZRCygX",
  "key7": "2NJ7P1MiDuPsHJyJeyVZrNs9VUByNYaRkNpPeWFGEuzuDq2quCwGZPV7YZd2AcsQ6MhY8b7ojhUed25p2wRNdkqd",
  "key8": "5ChzMQCP77d5rXMbAnAU2Z2XnjGDACkJm5fMvdWxZ3Kr4zGXXDQxCLFZpVhHjaVpVYjWrcbXukhnAqzsgqCPfynv",
  "key9": "41Lr9YhBhwDz9HMXCyGHvnBrQyoqJBo6Y5rARiKU5LQxnJGGeYnPJwUdSuVr2y94hCVenHZVYL7shsKWssB9iXpn",
  "key10": "3CBpm9jWfjxJEjKXGLgdu62sETRSj81QhCLKHtL5cRWAhKygfRRJGXLhaQwQ5MgVDpyakLyZUqx2ywbhEHC3PvEF",
  "key11": "xDfk9T2KSAZVTbrngSw5C8mtP64omN2CnwA1D1gX6csDECJEgC2QahDV9vBAH4LQFtNBypDh14AtjKTr84TA63n",
  "key12": "NVuAo1xfvFLMqFVfAf1iNDffCgw6by3WRRBSk77jMFdUVKAzKoonx29S8sXSc72GxjmrMp8qtKqvCfvSssJ7Kpz",
  "key13": "3SigJjLWv5TrFkSNTXN2VB5qDJFo746PhEnSXV3co7V9NjdFHRJpoVcxiiGbNNXwmZSnpUqGxKyVpxG4sA8kn8zq",
  "key14": "5UYWAivqvqHYD4nQvRcoyXej5gZF3JbMtJ85vv438PiWwCCoXmQQeTMhvm1DEEPvqs2iWBoRwwHWsUD8uHyrDqXo",
  "key15": "E9Yeuw5tnRPaDnUAEVKTeZ4XtHidgiRRHva64hvT1jHEZnMNUEKdidcrRcgGwHwKErqJVamdAtHBtnXfFfyMhMh",
  "key16": "57uAopc6tM3wg3km6aQmoTsBsGuzr53BeyXF15bST8EviZyNtkSPcMAXSW8M6fXTVoSvHa5c4cgdTRqg8DU9cYiy",
  "key17": "4tMfo7ok3RXQW1sK4MuADfcovKt5Uh14WdZzKDXQ3rwTY9RErfNYYCmYXwCtFv5iXj21NPxyfb9wGzAyrijcassS",
  "key18": "4YX55EtHLm8cR35uoCMk3ybBZYjbQ8Dt54XLXeiTsvpvbRJLF3PxJNQ3ukpjB3z53JL7F84G9nZ1ZYZW9m1E7Sg4",
  "key19": "2ADPDdPHbZmP3j4mvQH3u8Y5zYRHQLDY81fiW3DPTbt55fQfQezzFjGPjqzZFacHFuykknbhYkfxBcooKMDKCWEq",
  "key20": "5nkkqn6GwDt2wUzUSXGHKpUeSdwZyPFnXMCANXPCG3K8VtZ5zuJDnoxtbcDJT2ELP3MqbgYwXFwzeUwF7JT4jM1n",
  "key21": "3wpH7PZhiQa11cBBirtMffxnKEuhdi8PPDneLKzYCPKP96QcE1oJ8LywcKD7YAea1pznpUXYNs2BfsBt9ETbiHs1",
  "key22": "5prJGgnHAyLA2ivGmcSYunVAwJYkaPbr4otw2YAWjnZtXmPs23Yy7PXSXxQoMs4QhmujhBshkD1nVNSoyKoHGZE4",
  "key23": "3BCZ3fHsoWjmbSbsaU3gaTXdq86ViLZekNXkTPUhSJUocUc467LUQ3JzFzTaswy3mzRNxdP4GZofdPH9ZJrLHkDZ",
  "key24": "5JbY8Yb6vv9SCh8o17oq1qtoVGR2YQXekoRyb2YQJfhVzBDfThxPLTwxrAw8sRfN6JCYDQFqg1r8HjdbTb7F1dNg",
  "key25": "4SvvEVcGfFcB3BHtyGToi5qcsvoJaoRZCxaTCuKCoyqv6VXRbATvw22QRxUGX5MZaCfXxZctxxZCHJ1u7zX5xw8W",
  "key26": "3ECAjhVBCsT8Wmogu2pXG2EV4gtri8avmUdZLXT1sLe6cKexMwcWWgrh7sgVDkCWoj9JEhXttVhyJ6zoNPBpjnNr",
  "key27": "4sEEVsBYkDeCCiZtUjs5mJrpfCoxNzJbXhUyxsaWFu7hbWAqthCiX9uWer4whjwkz3DmmAVShJQTsAanNP5jLJGV",
  "key28": "5qD6oAJai4WzQySvPEPonoLCxU6fRuVgvinW7YHPTpjipeHCLJL4e7PcpAzuaxw4mH4s2qcz36MqpwckEQyR9MGj",
  "key29": "2Nrr9Ru7zQ25eNfdy97XSxg95nC8TJ2nMKbGEeryU81YnCpmPsw2dxmbCSHjsRd4WW3FS9P8oFMASoL8AHP45wr9",
  "key30": "et4RTRdjW9ZFvMvXAfvHuxSm9wkF23ofy43sDvLCAMzzajWo42bFuFoeZkuidKBeLjfCGhiKMYSsPN2vVgNDEMz",
  "key31": "3q7NYctY1rZK9BBvS9jG83UkLQAKo5haapDaNtfKBDBi3Tz7gtiH3sh8rSTFbbCywBhiEtrchRbnQUr45WtsNtKQ",
  "key32": "3U6Le5apLAnK5L3HFnWpS3ZDJjMmmLnGefdLkSBdM9hHumcCcccKxGkLQArCeyEW3Kuz9ps6KbBWUDmtQyrtuv4R",
  "key33": "5zxmYorBnYvBi2hr8v9DBF6GL3f3mLRP9hfczen64N18a2EFxfLnUXq2VqY69vGYeT8qSt16orrdHcHpKX93WWTD",
  "key34": "4D5JteBBhkTJZyErbFbC77mfmAtkXLpsxEugG1p5nT8sh44cTHt9FciNk7vzD9vYobB1cbDVYyPqisGGNHKTrj6g",
  "key35": "2BAdFAcRuYUYShi31vEwe5TY4BVewgE4aaemGc3QFXpYNvhymqtieEYyPBaqLUskGcsoko5WFkSNp2QcHJTdKx8H",
  "key36": "Jt25U28Jj12WgaXe3VVJjLZ5QFWpatxeAKmdwBdPks1NFDDntbHmtR7wCBLgm15Kajur4wgL2khoeBtC7yLhWpM",
  "key37": "3uqtvwR68Xc8t8LZXNzV9FvBtZKQ1gVa75ns14kmXsxx69MnXmH7CUvtYNccjrAsDCjnFMQneErDMKLFieSbrQgV"
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
