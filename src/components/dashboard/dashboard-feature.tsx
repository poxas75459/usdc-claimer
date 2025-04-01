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
    "2hztmJLvbGhSzYfVmmzfG4XJqKGnrrghrkLonHG92QzQTNnwsRgkKAVT5zwuuAFYjrxTiFVZJypFG1zT3rFYxphF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2E6BUTKRCyFRB9LbLoj2i81QDLbex5f2aeBiW69Rd1U2MdsHQE2oQrR2YcjXtiR21YWpVRCUTKLNnyeuUg5fJ3aC",
  "key1": "4HvixjJXFhncABxzwXhEF9nXSzntAN7PhRgNwzWnSVUQdGN8B6crMML8N7Ch8bM9DFnPPGM1huCv9paX5U1tkAo4",
  "key2": "51fTHNfkDMGBJtrtc7gf9t579qW5AbuDUjcuiW1fp4kaJ4iB1mndr5Vt64iBysEuUJBJwKqXdUu8Q4D4WAYM4wkf",
  "key3": "Y9YQZczpGgUVNREN5qCqPhrjLEAe3YCGdh853WtAXuMpLptxKPm21ub5sCemdm8EeAwWuRTmSYYpbcsCBXUs2AD",
  "key4": "cvLtvjbhx1e4uXzD248LpWrVH8NGuVy83znCpji7hkvA95dJugHHCAEvBmqgTJTQHGhDGAym1DLuM4zB5NqwpzD",
  "key5": "3df16d1kzccoJijAQ8obfQZqyM2xVrtLW6UPY17U8ejG4FBu3x8zaDMYdtdXTnfcqJdwi7ayiArimzEPiDJpppj7",
  "key6": "3sToKpF8na5bMni222EtZ6kU3DdFZeKp2FME3rfkqpkC3SRVHidKiTVKN5gohw26kmWUpa2dLB4b8QdmZag1nRt8",
  "key7": "3azBooZ3SSDzv7sqFZ72jYzCPf7RGRf4cS2SKVjC5rnpYa9utYoCDAkMwn8zdwTT6HETPWMDUH9TsduSecQjncYp",
  "key8": "41s4ammfukRTxu97FzhLvxZBbem1QWN1Ca9RjCe4JWBKiB9fXLr5moC59K4dJQTSKhMRiQXRbid2ZAXHLnVLVdvj",
  "key9": "4H95fXppLtKqdFpBSchRtGyvaUTGbkjTdJiTVDv1YGqs9tP8pdfZ8rp7yzURLEHhNhU68yqMEEvCxYLF5UZ8vyHV",
  "key10": "4aram5UUnuhZAgdTHbA5wqFndL6bHv7PNhDULPoh4CmguYDN2nWePkWCvDmj4BVmY4mksRCbUdDpkSvJhfLpxDbX",
  "key11": "FaNj3mWP5LTB6Ssttio8VWpjth1GkGxLRjWZrrQAVzBpbzTbwNRubaeX6s3PBJQc7f24HZVZkgBaAhT1QTCmf3i",
  "key12": "4ZcdquMAJPQ5kfEBY2rk3VFvYPkpJTqWt7JR1WBxn1bNAdumEYvmYJwxRun64KHcqSfwiCFJ1NtsfhR8zByYcqAG",
  "key13": "4KjTn7uLQaHPMt2W8Q42pAzehBqpKeqpSuRGcKtc5RUNujrAJgn54dtL8iEt6zscmJHQHSvYjDrDiaP9JebcrHyB",
  "key14": "2Re6hFGE2AiuGJSE8AHhysLXN31BmK122qtj3T7hY2Kg67kUavo8f1YswE2teDfiyiU4kVxNoH5BoBLpfZruyGr",
  "key15": "2QqNHF1PptripiAyfghZ2RyzaUrMnAeYuPhteUK4CLigPTgUcG5EUxFLyRMujA6hq9gy2zhyP18SNouBSPtM8bej",
  "key16": "ymyBMNAXjCtNDVhLvByf1GSTpq4AZgmPPVSh47WDLRk6gw97sjabfGGeurcF3uvyLrxbgARsfbySLA4GM9BDafe",
  "key17": "22i2pmkjTTANZxcwSC8YA5S3bxeBzSENUavZUsZXjXF5m4QFqFsBZCBYjgjriAQLjv4nkxon9LRXtSYheE8Qt3Z4",
  "key18": "373FMe642CmUhyy3YTZwGHX5RJocE4jHQESCB2DaWhS6hmviRqJYZDy9AA1KpvrQr2Mhe8PvdmoYyAMJVBigwFkU",
  "key19": "49mVFeQ3BR5v1tArU3TJXWzzLYcj2TdMkspnQtbi22yZWAP7ya4Y2G9ZTGpHvKeqdRtrxiq3JGbY6ZGcB7jMXvYC",
  "key20": "56fT6fQcuXksBEt3uTNoKGjucBhUmHUwFUk8ey4PVJTj4aPrmKyPdZKuvsBxXUcRCLjgWZyGd2dyUNsjDRrTmxaF",
  "key21": "5NpnvjKy6NYsbvPfoFgC7Z5jWiSdDoShndF5jzMnRZJM52MQC7vn1B4yDxnkqW2DXyW5qNc3y5XCzRKZks7L5HnQ",
  "key22": "3YmVbKYgwL4tJVqsxwSDuyhtNgXGK4hDWbxCNQ6C8DWFLJwiwYJHvgjP8g7Hteubejv3R6RWrbR6HcW7TrCScBUx",
  "key23": "R1wW4hoPxLaoWMS8eGeR8KdXQ7fb5VKYGtLQT4yqECLzoApSeKu93bSzsWDrbpXxiwk9QMUMwwcRov4boezHKgx",
  "key24": "3fAvLUo7CFN72URdTDiCGqH2F2RpWFGWmFgNkYiJ51HVjjpFH9qiQFnyDf3yUzsFAWAAS8QjozphWhtFn7TQDkok",
  "key25": "4vpuv8TamCKDiDSAmcPBxKhg6D3Xj62uMj8Mh33DsXejuoseHTNXiHs9em1Kcz7RDMgkVLvHcy1vm1GQcKPMBkwF",
  "key26": "48rPnR3oUnbApAqKu4kPho7dJAuJhTPiTNoxwQ3ohzKx1wRC4grrnpymRjgRSxmrYcJH4jFbccZDg5w3gt8YJdLg",
  "key27": "2Amt7b66EcueyQuuseY97q1eSA6b6NhsHBomaY8HMFP5b9gUxLdQAADwNRnkQ5LjQXcgyPBPM63hHBo3knGyJkcF",
  "key28": "29qJ9VWhgyr6cxKZEhwsajH7k6nFh37PKxvdoWzWLpZHzLbPoQDkrWWkMzPCN82XYsDYzYEepjjhaPd1UJ52oeSD",
  "key29": "5xP3zF9vq3ZVNiKxu8ut4JxJpvRJ7r5oVV1Jx7U1YJtNzyaS1yoYH9WpJhDLhv6xhiLgGsueZqo4drgX4FT7gGx6",
  "key30": "3HwXGBT9z2xY3xdjkhJdC1KWGwqWi1xjEKFxSAuBkL6EakTwnZK6xtptDmivig27ieTccWYCWhqRyZmAeZFtAQ6",
  "key31": "3gA42V8pzj4q7Y59aB8YrXYprPdvzTngvab2VPRENrrSMYcpDepNat7R9s7WLT6PV6Tj6NqE8YNE8ZBn1jUP34bd",
  "key32": "45qNLrAdJnktPkm8mnoLG6qbFPtJk5dN1CEMSvaDmjnPGq8nwzxMjGLZzd9kZZqfB7N8NyDwksVAXhb1XB5iEoSw",
  "key33": "4ZyTSyHCQLtdRmahZC2XLjN5rPMuJiNkQyKvEKsN9gyhLxpdHGRcBRAPEeJp4vaDPrhbGhbsG6UMrytvoQvG1aQv",
  "key34": "65b2acQ47wLb889UVH8JiSHj3Np9maP7GZz5j5jubaKbFwKgQ8tvahy7nP2c2kccfCUMk59XeHtPpheNb6pr7sL8",
  "key35": "5rmPttbbSUr1hgc72a5iQDH2jrC2RXs6Gywn1BGLf9cY5nf6s62TdyYyNcCwo49hKtgQq53HBkzpyCA8TRLC613r",
  "key36": "5eeEzh3jBYx1W5K1MoZMgCoqdSXTnLdtjzuE9puoUQPuJnNCRjZyPszbZBZEt9T1ebvWaW6N8u6neDq8Mde2RFfr",
  "key37": "5s6xLJmZSHRc3yT8BLv8fdKELyPdE98HMd1iM9uUe6ZugMScVAU6zwBQajo7VkJJLvxMjwuKYMWE1NR9V4hMkxth",
  "key38": "2SfjeznN9FTeoh1Ecye1SnF9PfEsGuwtzLP44anPmKNbzuMxWnjv18RjTiptX6DHXAvSzQgWUzrKraX4JbzpTJqD",
  "key39": "5S6dbPVeKMpj1NYDSKEEhd94Sra72KPcXXv7JBkWFMXoVhFTK5393p9bwWzdB9ttf3VfrAu8ozYH9oFsuUCo3g1R",
  "key40": "3W22rQUBqBFGjW256v2hnUR5Tvjwr7AhUSEg3XH9iTvPnKyLLBp29gQtLCVBu9uG9CTB3AwVxQ7USEeSBAGitSr1",
  "key41": "2CM8YMLMdBk9yoKU11vBt28X88AyFeMzYH46iFVsatHpvwftQtEQxwqQ38dVEs54cYueZm9gHANFLGBsZsavYszJ",
  "key42": "8Nzuw32Vasx7upZ3s55JZ6eKWLFj1JCBfeck7DaAxCrzsPQ223R1JviAabDC3L9csBP6Uib8qVRe1MjUr5ZC9Cc",
  "key43": "25kr53eCL14WKMWGQyHKXw6Q5gi6oJw3qyfbfP99mu8741v496zZb6aeTQ8JS9hnmpmFrLEXJ8tf9xUibH9JZSHZ",
  "key44": "623d3Di4AsGxP14faRn8dAgjr6wu7b2wypos2yvW7xv1mNs1YauHPQSTJrmFYYcZwW1uT74e4bWHWijkKk7ya9ZE",
  "key45": "4nVJbXd68ketdA751bqGKCQUiceSA8hwKPcmVa9syLAH7w1tS42GyBtWppjws9NmFNmvViNFeGei7EMA6r9mLgsa",
  "key46": "2XYk1a75av1JmbGUrdtQDaCEbFB6ruZbVcq6AyvFVWj2YThoGKf2NA6pnuYL7CmVP4ygwHPSdmQMpzyC6YCBBMyN",
  "key47": "SjWmCmnxyMwqdjyJMzRJYaGfkTGh7E5WLbSpYY96V1PXznyx9cgQ8BoV68X5Vm4yaDVk7H8DG79haayv6y2NHJr",
  "key48": "4j791SDTv1tKevLUKaL78BcJXmpBcBeMTKoRCEhxctQtPn1VB6RweYeEVxCPPbcDr3WkBYHGCzt43sxNN8rwWiV6",
  "key49": "2YdbessZj3u8heSvzn1N5JzLnLvyv1mzjEPyvd1PBR7CuKdYAvHMfqZBC8rwB72PaNP9gRkp7gxVjrRMNg2YzAmy"
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
