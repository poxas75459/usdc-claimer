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
    "665bgz4AQL9jAyhmxmxBnpRJeLnWyhgJZy4adNXSauGV6mCxW8FVdJEqb6i8ock84zqpxMURxXkso2EB3Wq3TroJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5TMxiwxFKh58aDZA9xhXTaLztpE59zznysrko4d7XnzTxy8wh8VqyTztquC6wfYoTZAsVmtAtQ2NJZEqmcgEZm5v",
  "key1": "2QiNktq14Ww7grH5yX1ZUHYLEU5sq84EupCRi6j6icHi27rSCVBDAdMaTnjsKmNPvQsLmKpzeJc8UM16nakMzZsf",
  "key2": "31bdCNnjeeZW3hjEWmDYNtimfTuxuT8ZXNgfwYEo84ZrTz6rjwHb75dBU5FyzjJnEo3vUto94Cgzo9y4Pg8ruYmq",
  "key3": "3PoWmfQ774Zvwxg4H4dVsuhbdJVqpBKJsksHnWdp3PjpjfUJ4wEcyy9nadZqpcBoVYZGFUNcRDo8Z9Gfgm83Dy1P",
  "key4": "27DeEuf8jfmtPbfFGwYnJtruxKU3hffBNxgeBjWWp1ZjNcoDmTVbaizoBq8Pj5xHhVdwTkV1VcPRakEQ7e1XmoLG",
  "key5": "4rMbgihpsbuCYZvBQL3SDmrsuC767WBiqQYtui7HSwsGqrUJTq8UUwNriJ4zRR9FrozZHmDVoNKvjphKbyVNLK5y",
  "key6": "3gzpaz7oY1ZaW6hMBRRgRWGz81f4Ru1NEUrweiChVVCWHvPKUrBcg6KoY8TmWM2E4TpxZsFDP4RNqLehWwahCW7K",
  "key7": "EzDPuQnBDgiveA7NbeUHKkArhHduo98ToXEqECFC1eXJkuqRLcVtki6uinwKWkvWYgrbKhgyjxWBZuz9UPx6eLS",
  "key8": "kxQ3JCvVr47AKCvJ2Q9w5dQDio5E2jvFMjUE2DK6jkGuj2KZ9beMZf44dF81K5zf1PKJZzgDmQyhDrb53MiepgQ",
  "key9": "4avwhCanXQM8iBjjgNkiUi6LyqwQ6hGLF6dpXzpXKNFBM7DWu85eivqP9GYHYxWLUK4mrWDTku3beMwJYr5G1gjH",
  "key10": "4MrZdG31ZLTTyfBGsBTvhYiuWa2naJJEAUTq2wDrBFLJpWqLf4Kvyknxidp1DydvZdFmNqDGMNLtDptT7oRqLQY1",
  "key11": "3RJqKh3azTfydx4Gh2iztqrxSKfMNqGYjZx7nxR3sJKgzrvcM2WJwxPAZLSkATjykec2ihAPRq8rH1bGXtAF2KXL",
  "key12": "4x59SJB5dKy1sfucMKo6nqZXP5S8fLPajPB7oLoXxBU8UJThxgYhVXThoJcpQPnngtn3B6BGig3g79CbUZ521JBf",
  "key13": "2YdrmcipiyEpX3Bq1FQbZT5HXne7DVJLEPgW84z3A3jK9pZ75MQrm6nqAz8Jbp9EbBxSiDw32A7bYr1i2ixZpPd5",
  "key14": "2Uhm86CuXZhcn8oC2bdXak4ttUXNzkhqSZb7NrqSXMVFBD6FeBTJNpE3bzcN7fX75EjoRoUzbVd8YoNepNNrxPRQ",
  "key15": "xu2m1g8Hd3Nzj5Aaj9g2WM8Jy6p7Hzavbv13xNmBv8cMmnKP4oa9ghjYtWKugDFvnovT9D1xKyKWPXnUF6Vg1QM",
  "key16": "2V7W34YCvdpFKBR3bQxPs2aDFzVNM6TmebUhavEnrqY8dMD3H4CewZZKTpHBq1S8RxypDrQnmJyhwr7uXEa3KK2s",
  "key17": "PdV9hq3RLTkKXLa1JkFLLityJ2hszPCqL9zeER3ne6ifGRJYff26rrfrv1mc2cKh2PrQbZa8FAkiZqDCZLkVCtn",
  "key18": "5KgwbEnVV2pF98zM1kPee6z74QSGYZV2XNNYKSZSZyDDpA1tW4XrCBxdUzXN4J4qpDbDj1nyieHr74nTBH5KfRM5",
  "key19": "TYiipBoZ99L2432XMiU1W2vnGLPmTnSxFYLbq4YTJqZbZH8FjoBpAqdzeRPDfdf2hW2kS7PCZq6Bu4UL1Npw754",
  "key20": "3QdFuJu3kjFCYFEtCKM18U1H2oDJgMbspWBbhvUia9EbbFwpXynaESMZYqvC6wF7dWmP5CNhhcmFhW59QrfhGDsh",
  "key21": "5id7NY8dzp1yY5oFG7XZfxTdgzBVcMS8tQjBcHdCXy1hFFgpcvjhHWwFvQnu2W9saiDJKMa41iwhLt5TLgmZA9Ta",
  "key22": "AVHZo4UAZxtEifkmfVM3NZwoAKWpGZmhiLWovGU9vtEpijLHLcXbJRRdv9vhWc7Nr9cxG3jypVMVc4tm1c2aDde",
  "key23": "48qDpxumY8L31MVeEacanRTkUohT1aC6LN4W9uTc6jT1W45fwFnRrC9kFxPRfBB1kq4rLna76vetFRr6wyHWsqVx",
  "key24": "5GfsUmSP64E8pWAq2xf2UzSByExpGYkvGWoEvvNjsbHbsBpZsQt4P67JwRmqBSuTKWr17ZUzNSuE5eQ4p3dXfxKm",
  "key25": "kGd7sQDCcTqoyZfLbbH9WvNajBSeGeJXisBHNuyrtBRDsHU9iuE73JuNBfHe1SZxc91aicEmz7ZFrEAKyKYcypL",
  "key26": "232Se2eHtXu1J8zscJXkY9Nuz6z6FS72osMFnS1yW67uaw4EyKUcpQMP2sjnXbUkPKGBhiwUUiNrtvVS5v4cvcxi",
  "key27": "eBzN8kpVzr5d3orYLyrEsJb3Fi2ju53gT8MZaCqkRzdfefgfXU4pNZ3XXAXeh44ugm4LqKcrATKuQv9A5U6bYcg",
  "key28": "2HHhBhPwusVVw8C4kTzbs2NRynqcZBBygPnbaU1p9FxqmWmgeuWP7RVJd1bce6SWr1fsPzxwGY44261ba3kCMXkg",
  "key29": "4KxPWDv6Aue1epc7YWLCWP6BE64qYLyDXzvGgotT5iVwmEtDQoJF5kbUS8uGiphR8FBaMzP9Ynqr9Ap1bu2b8NsD",
  "key30": "66H9dsy6g4jcZkSAkWDv1zTPbvxJW3CV5mJNcUB9ESkP7Xk3sRmR1wj6cxtNzGujqGBT71Y1ZCP1g4EX18waeoig",
  "key31": "3az74buraVPbEahqeM2sGJpiV9aMNjPHa4LzxMX8dijmzNKyeQAesdQ56fE6RmJfNThXykpYkvJfwqPEPW4KoXS1",
  "key32": "j55WkyFPz47fZwmLbbgh8WQup7Yay1GvWSk1fM2QqqJ5DzzMU1mcJ6HSBHpCFTUCsx51Ta7j15rYWKwDw9Sotsq",
  "key33": "5grJGwkByQDsXMXsXpA6rw39b7JbVnynYxReVUJ26rjigWaoZTjMfVVjB2ZQW2rRhFZFEra5PuVMEQkudwZi4sQq",
  "key34": "2xPQPRBqT45dYY6euX7TJuC1nB7qtW6crCR48iQRgpCQYPSAdSmiSCoLWaattSzWMojHcjiwFh9VcV7zr9MzovbC",
  "key35": "37tVUHyAQTqxb95jzKRhXTqY9dRR8vFFfhdmpybkK8SgB3NKtu7ac5TEUVJEBkLH8Ajt61eGeq8KfrJhza2gqeet",
  "key36": "4YPPjZB3SDtLLgU7qJSTbwaQcu9FQagYAVDrjMuSXMraW8s3jkCvLYTAbzosp7DiMcfAkMDrsyFe3VigJXSHLYBi",
  "key37": "4dQVZWBxE2cn2kGF3ajR6FanxSMHF22R4cwKcDKD8L458GNdW46hCzBLKsbTUrQiFNVkNPAAAVXZPb8KihFgqyTK",
  "key38": "5e9qwouATPQntpHcXk4dytVbJymP1ZEmMtpduVDYnVk3vYuXzRdRczRf85WFueXf3YJthY71vMxd5QaLgW7gebUG",
  "key39": "4ahqhZzRH4d5twgWrcW2a3xPnf7noXGF9Di68aK1JuKfwYNDEKy9M9tk9yty2hZLNh8kd6fvPjAUq8ZVhGBGDebG",
  "key40": "2xWZNkkFWFxBxpqnh6MvRa35puMWbQSRZdMRYsjXDwdK2jFEh3j5Hn92dWp6FChUQkbefJg8ceLEBYgUg1KAKBqv",
  "key41": "5pinPaXr2r8tfrKizETmtQsbL3Yfb3MqVPhWVbs9RyMSHVnmY8RKyGtQr2qwpZUUGvktissYaKqxEeb7y4grYdA",
  "key42": "fkiSUn4EFZqvphNr1vnRQMrKPhiK5jvZUZcKZvQVTfUNrvZ9J2MJd1N2CH5duaFuARL36E1G5uyfVbd4crNo2VW",
  "key43": "2GkTwGokpXLLtb9QFEGvLT2A9MTsvF3WYtHouTRxbo4qLd377rnCUiyKQSWptWyajm8xLcxtU5T9bbVdGp7Bab8G",
  "key44": "3WxdZGpzSUfqJey8QuFagUyihs5gpcASELrvR4mY9nmaKkyFHPBzaiiJ3w8tTjeh6QDz27tFZvBeUSVSLecfG1w6"
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
