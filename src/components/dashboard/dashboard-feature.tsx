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
    "5uczh37FCX8kcxGBYFSMvMQ487Ktpc4D3h8NktbmtbMBNEHEob7Jzzkx3d5FxdDBZXQjw78wXMg4GiA7Nxz4XTnK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3nEzqVy3fV4WJj5MRXNz5czbqKEqcvQQmu4pxtLvNJjCrFYHsvD7zw3MjP47MMfZmbP1dWpVmBBtSuFhCwA5d5Vc",
  "key1": "5PFZm1yfUJBmRZw48XpmMMqXfyLAYCVJBLckvsG8DNzPFpS7AdNLXrvZxnc66LSCybUjnDsHS7nAgihd3xLXsDsA",
  "key2": "62cQRSVeQPfMqXZjU47f5e8ErnJuuZE3jwJ7ZjWbXGWvzqjPQgCnex1jqDpUyRKfoaMaYwZkn7NFQsqNq2n1TULb",
  "key3": "2XBW43mJ1GeAgxCG9qBB14VdyZhcaJG3pnzS8evzgdABqR9W5TSLDQjnXv51Gscq2GuS4mNTGHny7qxCJN2cqciW",
  "key4": "4zynygmkhHCNsqHsHfDpVnBYuvAKicDAtouiv4VY2vxGWN1wqv9s8qDLBQWdrZPeHGUytwRg7bHVDDyAvMUTxn5L",
  "key5": "4LSh6UzceqnYqNAqNeMMD3LD3d2g4DmB7vMb1HfhLcPqLZ9SwAnorwZ8Dz19fBMk3wQ2tNfetD5cq7VP4ES5osYh",
  "key6": "5ztFLaibspGgbpM5X6Ra6s6iTvJg7mNAtgmin3fCfPAmqwV5pac6uuCvqGWVgD75ueeknWKXHBFZADcLSuxRZW2i",
  "key7": "4CCdhkBSXsZCcrwCDhX37e7AHZzHcKMEbnDxG5zNLq7MtnAuVHe8yijrMoC3r8bb27HM1GMReGii3a3QT2ZW1Er1",
  "key8": "2qBJRuyvnXaUkuENi1psuUuMraSt7hYZxaCvHdFJMo6gHtDSNGfBBakjUPxgbqwxXg2C9Rac7uEt4DsVymGbUfeR",
  "key9": "5v9quJEfHfsHFT8JLx7TZ6QcYEyXCxEmwTHzFNBejdCr4QJRoVnfuTUMcm4u2mtvgLiajw1V6Hv1RyX82nge4eVK",
  "key10": "5DV2D1nooZLwFo1AxnwpYQf1h4GZSzEnUMXZ8KwXExArQmaE6M2R5WY81Sc47ejGUHSkWtuwMqTM86zqEy1E7Niz",
  "key11": "4F5PTGwVz2XfGSsCmY3baoxVpXLmmVVik5qD4zy7DdoGi4eBDuumiHpeSZ7fPtd59SUADfpxxFpy4Pa43H39jUEm",
  "key12": "3iAVSoXmNmx54iT8wrWwPTYXBwpPGMSkP7JTbh8YMcgBUHwRup2Gwh5hXYbzYnZCEKfWP2vaixYZwUCQrEuCqTjo",
  "key13": "SfwdPN2tGK85cfMmPRGXmCJkPKeU23ktDjb9buMkBCKRUCRWkscBbzn4tXqkPuVaKTSRKS9DnnvUCwL9LChJGVX",
  "key14": "5aRjKvCizd1xo924a4phN4BBhHDxxxaxrXDPNDhjJW4hbN3t1LfwoMqXU8n9KZtSNxVhY2VYToTYJ4vaBkhBZoam",
  "key15": "3o5aKX7XAGvaHHaxSsoYzPTvpdsTRkdEcyG95jPzFwrF21Czfw3AJ3LvXD8XuSvbc5ki2qg7WMWx5YYuPpQjTzKQ",
  "key16": "5sBRopuYAE1h5FkgQNywnEr5tpQBY28fg2p8WChtUGrKRjgkQ6TasAEQXZu9G1HtyXAsLFB7WFKbbWmhTvkCMYLT",
  "key17": "5MVjyoFJzDhfzRL9TRhKVSdpfC7tr7C6UgD4RctsWQ5jLGPWqLuRwL75xSJbZ7q8xpsFGTTawY1SMHfudBcBQcDZ",
  "key18": "27RjXPXTR1j2uiF32iNrM7ZB4TWoKqZEz2gs2a6paHBP2FmqAk2uXKDa9syp8fK772BeAmAhmUmqYxDtmtE9E1E7",
  "key19": "4ebWCpCfeaoKZzytYmbiTb5znm7CvsiZoSRakqK2B55czs1tvWVkohx9nu5KtPjx46h9nWkwLURX4EHqvxa5Pfm9",
  "key20": "3YqhwcYrxT3P1iRREDxHBfjXd5zcuitkPHNakBWCAYXfW4sn6gQ6cweuC3pKPkLHcdD1VPLEyN9X1Z3q6peikk7R",
  "key21": "5JjhjghGy2HopuRKamL67WvEeQpxUYZm7CPr4KcRs9Gh71Zqo5Pc4Rit6FHYyHVU8TTyEguHu37dXnoxqgQPfAAh",
  "key22": "558r5UD7tGg2hk4RND5U72byrjKRvZabgVjyPqpkGPPqXrZLDKctAzVShPugMcMGaauRne7iK1AYFLegNUD8TKwd",
  "key23": "5TgcfcG46BJfYkWxs7X31VkFdKSqY4M42XubyvwqDECqKDSnhcBqjg7gJ2NUJjtSPNotjM4267A1zs7TrxXVLj93",
  "key24": "3VbeDvrMGWNAJdn56M9gs1cFMZxE2tkFXtxjrSZxzF3Phbhh4UAiYhv42Zjope7zwaKGoM3Gsk93fARpNuJgTzii",
  "key25": "5s4QZR8sanuWbG1fRTfEfKg5ayebXnXjhaSsqavSJLQWrdu5JcPX8PVMvK43qWqasVrrdPdQkp2LJYbJoGf6R8v9",
  "key26": "21o72hWn1fZ4fCSyp86G66DWQhUw6hAM6GG8F3GAYzsFjHYUqNuJXXKsTWf3SA7dLK6aUAwa9ML9XBtw2JjPpEhF",
  "key27": "3A45WMhswPTEJcXhFNK5ctTgmzH4MupJW3DvyYo5FhUL7Zj33dUQ3gvfN8bJEQ5KpbEfvNXVH4CeUanAs1WhJ3mB",
  "key28": "qfYBNUCrhDnFE6N4nhVWGESasnvsNHFBpS69oQ17E2BEbeqnXwS2LCuayVmLLYVPd1E8cKzFzDtpa362MAgoBwW",
  "key29": "62aEoiPwRH3rrEXQVhknT8JYiCjYTFxtdhchKcrXSkV1sqB4JbtMNq4hdsHLbndreTbk6J5Spg7onezadt2A5NfL",
  "key30": "5288k8g9gywDbNYBimC6FQVeDH5GCiYKYU11juStg4EtAiaowvZece3NywZhUvW9fL4WuRghtxCeLyJ7iQVEQdRD",
  "key31": "fk7DmyRyrAGxySD7dcqLs1ujfaB3CnT6auD3s19t4wEwbKhkmKpbksAKbZUdWoKr4AwsNkmt5u37rpM98br2Dcu",
  "key32": "33qAYj5vFwYgkd8mjrEUn7ZnHYPVmjxWcjJsZCU8UqphCTnngpik7jUkHbsHzkZGsNvYUL6KqL651T3uZj5nYnnc",
  "key33": "4GXT3jnn9aR6S1ysRU3ksDdwe4BCE8MdJ8T6caemnkfB5CyXbkccTPEtfPPVkZwmZk8dyUioUQyMQRPSgDcPmaVe",
  "key34": "2vzAasP6hDeXeygjANurcMRwd28pZMaqzLNhfiP3r35EeQ1gEsP6XVu8aVdVxWoNajqFkE5rFnQJ3XoZGftCr9ks",
  "key35": "4xhQMP4i5XUsnGKw7MRdqGWQjR8Kco4xatmFTP4bquyXviJ2GgSZ4oso8ejazJctQCKYdUiYbBAKXh7kxkPaJXgr",
  "key36": "2QThdrqdEoJnBiVsY5s6JUFn8FBiSJMrfB4iHaDCu7kBv5iwQWjqgGv8fnzEqCrTZmeXoELwYrfvgTJu9x6fG6x",
  "key37": "FfwCJcMPQoDcC7crypHJ5xGEmChpDrpQNvDMbZC2Tk2wg583wLeT44GxfQRSULm6TQMdbFsgzn2SgKXxKn3wJhD",
  "key38": "2xx478CSExeoF97foeViKzovCWLeei7E1H1VnwuMaqUfTLxuEy51QW18prSutUGN6Ru1Z9SgQAWS23EuTYSdUB7B",
  "key39": "5WxomnryB8VJdUnSaU7rgB27z8tX1mEzBYwMqsrr7QSMdBSj4KZTkZG6GMU2ReNF9JTg6JW7ZRL8UehJi681b2bv",
  "key40": "43b3Wtjbcp74D7nk7ojYyYnEXDRNGkWpS6ih8rCBCq9cmFe8Y2JABdt3xuXF1jdiCeYAqHJAzoQByfQGWkjVsnHs",
  "key41": "33pMM7i2CxVqZXBU3ZKeN2tYWYBwmpki4RpX7PhZX9NNXk32yxdAaRRLpzEsCtCnbMngHXhCdE7ss6e5VUcxF6Ft",
  "key42": "22APe23VnFHDcH9fnVnKxWiotaL9nyseJiLTB1KG9WKY3EMgDnoa3tkmmwSuAPLMhuy1wMW8ypfFKxwoxpKZcJ31",
  "key43": "cQnyWC13nmy2761ng6pzaH5V21reKo1oY1b97APJPbAxhrwAQbgYcmMXJMt4wDCxfDnT4p5hJ6gtfpC1T2B55ea",
  "key44": "3ssezvHf8qHSA5VePSr88bFsDcaQTd98n67J7twmGsJDYSgkGqFRqv3C4KpfRWjr7wcPGEK7pPYEYtYEhk57NZnF",
  "key45": "2VnbzkPoFeQfWNW8JqBsibCrwshkUusiX3iUgTFfAipTF2QDNq9BGvy4CgxSBZHrgx54Csp6UQJSwcG48x2LjsPY"
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
