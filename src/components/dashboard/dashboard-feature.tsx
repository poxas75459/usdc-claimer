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
    "47H4rfSJ8HEJ6PZzvwZh2P2ojAPfQ5VYfVwuXrKVHDJFaRo3toKqPbt6resPBiqJ2Aa1JfazCypHV4p6zrHHSExC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4KV4LjJfHwZASfdhv4WtPZWD7SsNi885g75Fu5L6L75ACuTKrKC1YpPq5dCzA96y3VTsTAJJgyLWG55f65biCG3S",
  "key1": "3JhU6tFEgSwcWhSBrF8z2HivEMGqaLQbQe9puCov4dbubz9vMdZga6wwQKVzi95dBKNxbbSqstgJQVW2do4u9Fpc",
  "key2": "4QRUBHhDesmSzSExj96Fg99BTvDsRroBfm59pxVpn9ADgZEvSdFoGmnhiDSATGsnPThFdDVrJtD8YTqvB8jtxTBE",
  "key3": "28w6kmWja5EqJVWW6rt6QESqiXRx64yyHgnp4Yz2rQYjMveGHfnFaVsHmg3jzLwkv6f7Bh6BeqsTYgo8dT9ZVVE7",
  "key4": "cesabb81ueSDRBw4eJLeW6ErpzPA1FprtDbSEmn4HMJvKvDfP6r454ZmV8WzWW8vSgKKXszwahpWWviCqyHYWAd",
  "key5": "5JZhsvBvJWAmg5Eyngzf39v73oUPYyKJoNzfCeXFKsPvFfJQjifCQnzTzxAthzACZFz4j8s5rJafkxe527hMXW72",
  "key6": "3xEjYVGdZJxiQSKipw1VQdc6m4TrfwVvNMsdsXEZgaPrzTzFwvTEg6xcEipeCkfyEcpGxzU77bhhiNvYnzdbbSz4",
  "key7": "4DawfMpFuctimuP7QccHgka22QeWdidseKfLFU3uGpzJDGLokAXeJD5Z1KgbyvPTeG4MavsjTSCGbNq5vXFjzcgi",
  "key8": "4pKvJJjSND5n419yafYjNE256RUzz4Fs2pos8awzfwj6bTxAiQ4c5gmCGLBdjtirnPwzi6AAknfAauZCq8s8cuTp",
  "key9": "UqyajxYk4skWH5Qe22JZhR5voJNUFaEgQhveQ2WuosRGEQrcH1eb6CiEAb8PXSCsZnjPGginzKkqtD6SN1ZUdJm",
  "key10": "4fzvBoKPkE29wDZDoZ7HA3JvtC1pAdnT9MkLYz2N1ZgHhHD421gmZCMFstDuLPiWXmi35k4PCRvDYMB96VTME9z6",
  "key11": "4dTmgkM1MRKZTW8yfpnSsAwLGewAY6MiF4AVEZT1XSJkqZ4DDvMSkSue1MVCbfukdTPYkpmwUYB8RXvf39JGAgPq",
  "key12": "5AGp1PYMpsQkjCGfbnbdSJ6a9CC3K8GjcfV8CPy8vA31ibk7XvvujtqgR6P5JvWPoyhrYutwxGWnyckDxeiBhHg5",
  "key13": "2feWhumEvGce8KJqRtrNb8f7JVYAjwyYqun6FjKiWrZ69v3zgXA465VREpi53YRSxHaQyJDPEB1NXDAFJjwtzpkV",
  "key14": "4KhWCWwyFG5JjLjofSBmo8CKWwGF5rCfBXpzPk9QywK26yzHQiGZu4WQaUcqtNNPN3brfkcEvVTspDtPc91GYQuv",
  "key15": "4ShqGsxsaKtPo72pzK4vdRGVwP25AiAK6hwzEUSt3PJsu9vkfPF269FifLDbkzN53M5LQgQr31bdd9Wq7MNFwGRG",
  "key16": "rUEEwzE5Ryp1htkeHuAzXDbaJihPmFdhN9pKE97YE5V9FA5jwHs18b9NzX71CBWuuu5tcMQHWTHkribUrAhzmQS",
  "key17": "P1WkosY3ysBBmp9GhrsgZxmFtWoxbHdQqrYTMgGTHvx4GQPXdn7Vw1SbLo8BYzwxiQKnmUfRfJB5Tg9ecY2tUj5",
  "key18": "5jXJF1pVvm2rqctuE2HqwNYV1gGqcKbtiUYDLXgBhTf8J6scPd5wgKBbBk8memq3uXCnv6njr17rbfXButPGcffr",
  "key19": "4MRF3uTapzcBAJkAsi2MxfQ28PLPXtz2pCEbiHQbuWCR6eawou73vrrw41Pr5qSuEQnq51mtkq9Phbgf1EnfmFGV",
  "key20": "4NAngPzWPXdWko1eKFAQ5M2GYXuaovDYJvEyTNH6nETDj64TpQp1vZCuAkvgAFoCDZkAei5uiCwf4PAueqyffNp8",
  "key21": "35GpSrNnPd7egK24Bby2Xhz4K6HhFe6HYw6pvprBWeF1WkpBauELPuWfGzY8QGwvLn3zWcdS3bwJ5XzzJSh9q51P",
  "key22": "53iBm3auExwFxcEHPcjiX5xNUCpDe5RNziqUkubQccpD6ANJgAPHRDQPbh2Bzu3yBrHngybHKszK9iEpqv4JrJn",
  "key23": "tRe7rnvyKoxeWkPAcwogKth1j3A2zHjwjjbnBv5YqY5LehYCTsL56xB7vdeoy1k2XBK7LX5LaeeH7XiZwo636sX",
  "key24": "4yTf55zpzZFhmX2PaCWipomh1gwQJJYBtbWApgjMcvM5Z9zJD3tz7HrroSr2RxUpvPJZqiNcidxLYiudBXXN18tx",
  "key25": "uvpEKPiunGDg8fGiLfGonytsCyjA2biyPKx9bsw8vwfB4KQU9PpsW6SjX5jYMgNu4eL4fbk6ZiyL15wdoxCehBd",
  "key26": "5RAUXTtHiHqqmHbDYsMRPXqSgfzEE1Cx1G4gT6m2h2sPH9xa9yejEpJQPPrAJ9isQfXgsxKxGzpDbFr5P3NRQykP",
  "key27": "5Vg2uayKEekJcxt3PFjGbsGaWytcL9hSthnhXxqYVNv66ZfDxicc5dUsbpRDUAvcRuwxv4DBkqSaQQzbquQK48qn",
  "key28": "4eLa62K9jXikH8BR71zdEAW14xeUmN5r2CRvGNs7mc2euSkMZ1WFuCa1SeSFC7kBVGJriSUydn6fEXcvrFdHe3LS",
  "key29": "2gxTER3JWBbDuNyMRrc9riqMxZGvtW2fE9amAm44BZyRhAhioGDgKXPEyNJkNv59Eg9d7Gb98BNhpvA5jMgANNo7",
  "key30": "3nYwXzKUMKQq7X3UjHpu3N2u6uq1a5K7tNG1nagxRYLaK1VMDKd33ErjcVqv3SCg4i6KCQDkHjqNTsTHWB2nbGzV",
  "key31": "3APWwV9Ya5QFMDgFkBtbdWvNaZ1JxHnmemFPppd5fYmpmYSc1aUpJq73buEo4KUM3KGnvQCZU9ijfHNgRdAbqdfy",
  "key32": "54xPiLfgJ4hVa6TWL5ETLMagTYKaGeK3kBJwEFmw7GWgz9VqwWUf5oBRp4KwRVwgYu4A6du3KtQtPsse5ejTqDUK",
  "key33": "42utiCZk1u4iKrtkxmWqvUHaNAZDzDSRm5NGzGgF7Ma3pCr64U464ecKkPg7oB3tkGELL596UDPJnjN4mEdjG4xh",
  "key34": "2SZtuRsMJ3HzBZmb1tuNwRtLB6Dq7TQgkUZM62jHbvpSvqLfbSLgsqenJv2sHcKW8CCtrxTp4khnnHZYFw6A37yM",
  "key35": "5GFM9W7EzA9ryDU29CvZckeQ8VG1UMUyDcLgaDTQsLWyDmyX4L1V4SdnsTSMUx9qvYqZeLiQPDAswk5Rew5xVbvR",
  "key36": "Hctd2wu35Ng7mrpEBeDYJRZj8ijAApmQ3PfmkZjYCSWNjKKN2eWgrbxviZAy2iAGw7UEuGy6aTF9qweiGFZ4NJX",
  "key37": "5hES8eSJCGa8PU5xcdqmo1NHwFe8SNzVCRRAbgma6qB1AF8r3Ft78U2RGswKmMvMwZWovwRZSPXJ6ntiDEBbGaht",
  "key38": "3kzwu9XWCMpZ7Aw3BWcTq9aSKwEd9MQfWsnFtczW6rqeaQd9aokBAjWWE5hmggn2v58Kcz9hiWVAHWUjqspMdiTU",
  "key39": "G6F4U8V74jCRm32qWWT1GuUCLUWZ3Sv3Kev4sWWzAHrMV6EJ5KrtqrCewyo4NrZDjo7KN6tBFfawrXb9xP4gVdZ",
  "key40": "3WYnHLW858r8b8vZvAxtoA1knmgbPSRQ1Y25TP658yVt9gxb1B9QQTBRT4yM9xqJHDMkhM4ZJPTso8KbKctVktsy",
  "key41": "5KpHEUQJhui31nKkP4qcS9WbvbxcmWFwi5LLqgxpnZVFv4oRdTdpRiNkxLKrcJNGTQBdrbBWKBGZgKfMrA4YFKuD"
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
