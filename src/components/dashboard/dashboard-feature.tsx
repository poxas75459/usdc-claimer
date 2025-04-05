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
    "eDbmjCtDkfMCc1GRWygUMFvkahpwWRbLiYqn4JgWLXUhw7T9m25FSfzqxFSrxtQDRNuRvQRxsF9o1TbLJ9Hr1vM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3fUuh9LNMS2mCxsAc8mKCNFxfqymB8qnzypeP5ADj1wCLc8AM7uT4Q5kjotqN2mz5yxPr2K3G58YfPynZv4i38Zq",
  "key1": "2zprovqCTfNoqF6Snn8khmxjKs3cD4pMZif9uYTWFPpiyZ343hJapUjtn8Sq8pfmp7e7Ri3JK4mQpryGQTx2rj8U",
  "key2": "59v9tSZdEFZKHVbUtdQak2sHHUaVyPex4oFKnRLyXcfmfxqqYGZuVdu9Bq5jQHk6pBRMkW4s3iGsGCKmnvioU1W9",
  "key3": "48j52QdLJmojmrKjNcQeYaefZaWN12Tc9hB5UCbKtNpy7hAe4ubR4NLq9w8Xn3S7zHxB8x3WERfhbDpc8pKXsLoz",
  "key4": "aDGJABSGhTUjzqtz3g7EByaE1TapPbcceRs7A5jzZumw5rZLNvGEcGm7YCS4SDtYwfstZBNFjvziRCQCYyajJ4L",
  "key5": "5gKakt9yaCuoeXFY86UizYM1DoKSos6QyedetJej1BkYWDuspxixm8m5yYYCpy9sLdoo5dzPh3mWDxRcGcP1rHtt",
  "key6": "5vSe69ggbiiBgVgswbxP3k74rEu9m7UdzUKY2D9cHmY1weoDPLfhkZbV1eNv8bqucBacHSCBqPGA4i6RAh7bFVVj",
  "key7": "2cBacHmRvEyzyoM6fJQKuwFxD77uVNE9oLoeGwu8w83aGwNBQ3ctSf9F5sAMAPtDGi8riozQgJ7fmwb8pvcWixR8",
  "key8": "5n8DuefsHTs8rJWRDwyHRLj6KVHVA9y1VvBtLiiEAY9EfQSL7KHDE1V6r6fGvr7aJaZwmsKWQnvD6VwDbAsGqixz",
  "key9": "3psXknV7hXv1dVputLnfRuk71qUeiPRs2VqGvqPmDQSuFQKPqVZ8RnoTyvYFxnUXMWqx3DpZoWwnLWPvftgnKLqg",
  "key10": "343Ue1T8yzuz85nHe2UhStW9vsqCRyww7iNSZ7D3FDpTyUec1fRkXDWQXpjPM19yK7icE4QLDjmxA2tNG8CXZd4y",
  "key11": "2tG2oD9EVA8BU3AruZZvdceHurRiCwNvcyYFZA9JFCrRd4jzTccQ7pNQMViCZsTnpGSjmrzAUv9ycs2wKkJ2V3PB",
  "key12": "5idKnJPSMFbdW4yb7ncKtPS9D7LjCamuYGNGhgdQsjtgjmy4G18wgbYzLySukEBwchp7KhTE36a3e3PK27DgDC6o",
  "key13": "4ULrGP5vUYi2vz38wsWDGZ2qQwMrJ3RrruN6qSLaFs8wnJEHYNQWpwSZMzgugQTRV2LrfqA4xfeTJnYDZpj5mmWg",
  "key14": "4ew6ZLQ69ah6MBM9MA8o8NVw17q61VFLEJbmhcdWpKJDhS2wjHA1b2SDbb5bd475KpdjXtyZoHvE3YMg2ftVHGJL",
  "key15": "4b485WQd4ik7fB7UvrNKPLbPdMsA92jnGW6YHRksJahF5kbx5SLgZxEJVDx7SV4hA48tjeuxfZyuaqKSPeNsPYXj",
  "key16": "m6XL99Hkky58T7FNe1ojDiSBGjw424zLgVueyE2SQA3nU1aJdCGZdiLGuBY4VC8ToREF8F3ojrD1hMwmhDDcF7J",
  "key17": "3WSZZD17YfKtWENQAgFVhk5fKZqeAHUUEwjVDSTserardE9299BrTwpCVQ7N2cBAPTVF8TkCgVpQt8tcGDKqnZJY",
  "key18": "3bxECVUnJMH8dX34fMyM4PksooaP7Yin7AkzPX5t9BAx7pwhRZZmvNC6wbNmdhwHJfz8sXDoEXvzVHjqSgAHuM4H",
  "key19": "3cSbp63rCriwXHkC3brmV9rPU39xbyZAYKVVjPMz1BHPmmqZ8mUsqznAgsNGCyaXWG6rCJALRoKeJ99aJt4gP9uX",
  "key20": "4Mnb54YtqdG2FJz2eRxT3NgJTgSKfJo6E7DVoWtoWaoMcQ8F333LkLdzEwp7kNzP6ZJpC2qTcvEY5WDvbiEYHiw7",
  "key21": "2oFtyjqQQ2J4PzDf1sNe2uzZXcbCA787kbjaVibks3JaimN6XqJo7j4pKnUYKqYmjVFDK2zQraAsf9TMesDbBPc8",
  "key22": "4zvsq6ksamQYmc1YV2vLKuKK9h2KPxF3o31sdyviVsYjiYQTaAxhw1rsLWG9q8pKgtKk3E2Tkuzisyu2Hby7aMin",
  "key23": "2amZEAbVKNNBo7tZ5e1on5GFfPaXyZS5okaGARiRCEvLoU8PR2RFcstfAguiU5reJy1KtJYMgfJNMUcftwy6N9Sc",
  "key24": "y1GYrbHhHQPVMNtGK2Ewn3dQjgNjvhhZzima79nUPYpAwqszfLDWvP56dMoyrQPCfRBEaeczhpNSSURTAqK8nUj",
  "key25": "95qeiQUbJSotm12ZvjEnhYkdcTamWnLFehis8A8dyAofa7yX4x8JZn3UFqAVXRMFGgSyts3dPabkpFUVYGqBRMW",
  "key26": "4DMb6fUHuDCxSYEt4CBU4Mco8KQSc82PRKZ7GjKPSKHn281mzrPhWsxa5psfAdmY18PsXvYDA2KMgeQsES81rPHE",
  "key27": "5w9jMTFg7CJ7mZ6uTwfX4qWThdjijZ2boUjMRYVQepQYK4LeK7JAmKSLY8uLCvXXhrt1zETsRwJiUfSN183edQLk",
  "key28": "5SrnxhVZoCmir1FJp1sipzLmhZmmHsFGczcvGqfbuZdeJgHGDKpnxeMoods5kfarJxS9ErGe76Q8smMUpR6NiXVE",
  "key29": "4ZuvqAiBpVGZVDVd7BTCbJqsR8UerwGb6RwuK4JpwUQcCVPHXcFb4V4QFf4go3UrMQHMB5WqdnG8NJgkJn33nruT",
  "key30": "UPAhUpj7uSN74PVCCDgEvU3VuEr6p8q6xEaqg7iWz5ZmapMHgHswwWKWZCcPYisdXD1kS9y96HziKKA7oXhe3xE",
  "key31": "23Cc2WGKyWNyK5cGeCto3VKe1Mpdn2fNa2MNLSRN2dmTUp4A7FiFkpPSJ93gzrtHPJ4Lysw9e61v8TPPt8aB2VkE",
  "key32": "24ForwEE8fJgJ3RK48THwY1GH6ZbnjFfD2Gh4HyvDE4dYfhnsiS2qntdCkRRbFwXgGFb8yy2kvAWbnhpjBsPtKDT",
  "key33": "4rVifYV7t7oMA8H5zQBUcwp7J8NG7FMESpKkfAPmNn2nLugcLXygfDmyEKm6MUzf9gz8KVtAywBy1Nj6fDgq2wK8",
  "key34": "4jGjPdvHyRuNMdSFx654XLLVxxGyE76FjHPVNw1y8NVxcL6QcwPHw5MCn9KeWNT1svXuEj4BxeGGtsqffwgjVcVr",
  "key35": "5raSidb2EJnJiDFg6mXqfBiEdEAK5kbLGkn11ZNcmw5ofLF83qJm66qQoNtsfh2rW1PB6yiqJFPzkGy7QBdbg1BX",
  "key36": "2mU3iXkc1QbSP9YCezaz8vwwZjo4G7tSkQ9ZkvGwHeJZZqXuc6v8oMFMjUbzP5y7p8uqDGLToL3j1R97Q8yKMUE1",
  "key37": "42VgCGS3TkEZ3bJyyJ5QKiX515ihDDKppKs8EsFf2A42aUguF57taiNDPi1BRazLLACd3NekYbUCASj5FiVT6JsA",
  "key38": "66Dq9QCe2YRvbMXspSrDfhPZQDwKFu4tY979pKEnBzSt6jyF81JEoj9khg328rvt42U7vKdPBnzmA9RfbxrXWuDP",
  "key39": "5Pi6RVdQKL5rZGHGaJPi3aN3LLqE5Xo23YiEubATzyvLYvnGQ6TT8PdtYHdZpL1Z2WMYDoTqGnDDe5bYvTD3vmxJ",
  "key40": "4aiqgfvEajV5o8MHwsnibywLaBSyDXtKhd9PhE8DHSti2wXjrZgSfTUxMDcNC9uNAzo1q66Di8dRqEGyEDM2uWLM",
  "key41": "21eMv2eVQAYAAQ537VwUwJYPUmdCgVjCRgBsWHSyH6KLZjbeDifqtm3Qo8pMDucANgU21AwyDJJihZt5325Qc2fn",
  "key42": "2jTQShTFNeGFtUVVKbfgP7YrwHfwjpeY67htFeY6SqtCobLnSvMPrs7Lh7JsoJYy1rdoRBBLtCsDELUsDVXkQ5qw",
  "key43": "3g5dK7b9ursR3sAmf69fz9CwtHCa3cJgTYLixE1hNmD4brZ8GKup6aVpDxbijYDMQGnFB5yUbcUhhjenqSfanuCj",
  "key44": "5LRoe4ndwcktptpCTpZR6HMgNRJmcZYRJwVmQx3CDK1hDnxiKKvECQovTDzfe1Whnwn6on6S1PFUAonrT94qevPK",
  "key45": "5dnyK4zQANiUE4dr3sWk4YsRV2zYWCUBPVQJnuQibdfEN3J8mHfkqPfiHdRc3KgTYNXrR5uaJvFt1huo8cZgXEhL",
  "key46": "59KiYFwaBWYxSDjJX1KjXKyPLVmXVfDxmuWwA4rTCPYQjYNdfoe9YJHCgCYeBKebgaJGcW4FaP24qGoJHYDnfPNw",
  "key47": "2fbeg1etkAbvGKS4WAJmdbuRjXfnVtmqFVWwDUQsA4bS26DT41BXu9ihnfXjhUfqqn8PX8fikGDVYeDWjJnHuWin",
  "key48": "3wSD3XNTokmHkomE6NAUjh5kgnBAnqMXTkBQt5z5qsxEyGcLNa5Fi6vrRTVFmxLa7Xk49n7DRYYgL6t3N3CciMXj",
  "key49": "nNQM6Ax7TskbWEk12RJBJthyGzo8AdqWRmtVctz5B74NVv4MkembfwNp3pSr6Qbgkgg9cNsWLk6QkVH9Bn7n5Li"
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
