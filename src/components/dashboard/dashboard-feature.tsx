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
    "61AGs57m3BfDzFAY5xYtwTdcb6aLdATenfDWW6wnWPeL43rwEqcpD6xjWXwmsd45cDW6YKdJSMPXSuHN4gGKZyrY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2igLtZpuiGfAHPbzKpx6S6kGBiMjscEHcaoQGY36n8Hy4NmZ6Do64ZL2vcLVLGzSWXwVZWGoQQFHrDsUL2svsU7N",
  "key1": "2K3f4gGSJhsmdkntirzHBsSR2QZSG7Lp9jMk2LuUFycZXk1s7dywzDE124fWzpmAy8Jzq6nLvpnZPkMjyvvthym5",
  "key2": "5YW2vYzc2hSKkknwmgzKkgiz7egBMubgi8F5CWFprvAX3awp9X6Vzy9kmJS8DZW4bJQmyFh1t2Q6KaTyTVp23gpL",
  "key3": "5drm5DhovVJzCS5EBwSPrVT4b8P9dhXujLbX9bwWGFQfLsnhbFYZfP4DPpxX4W2Xm46TXbSdq7Y2rv5LoQUYa6Uv",
  "key4": "M4vLFE8u6ZZVf461JbhwXjXiRGzehcbve4pRfUJVp4knhRFvt3vFnb8ch9c3qi27zEihLNj27BkurNjJW4D2HLh",
  "key5": "4UNvVc6sg2webTpQnEV9HpKStPB1QUHNqejREnXzbnGZeFrhWiSPxYoNAZzGtkceTscaQ8x55FZ7aW9isaf25G8X",
  "key6": "2nqbgmKQEcVBe9cASSpRRMdTzTLMv1sSFH5kkJi3ABGd3QxVukUU9X5jvtU7HZbUbaMGhCk8eMo2NH7h85T2rYri",
  "key7": "4FWUsJRtQhNTU38NKcKdbrFB21cb52bdTHfGGt3e2RrtZ4SddXgdE8FGXsSakaJ91zCgst8wvoTEA36NGN5q9NTY",
  "key8": "2JHYbzEtfB6FydvQejDYRc4MXT1knCiQsxbF2TfdXXpH6cCfNQLGESADB78cugBXPYKfGpf8tULJaAPsKQkrxeq2",
  "key9": "3gmCSfXJfLPvKJhFBeWSuMc8VBotbC6oi3eP6pwRLSsYo1i8sCaEk9jfdy3hQJEN3Am4wLDxQdfj3Gr2bQ2Epeo1",
  "key10": "2WphXTsBQh5M6LjJ5GZCaCvGzFoAmPwkHjzaG2F569HkDksUM5JCzaYeM3kRF2oY2Zjdbmw9y1ihG7f3LJ8ACKpa",
  "key11": "4K8RrsZQx4C4xgw1q74PBZyMqqAHoz6Smgg81QKBgKHs2CbewezyG1HVvBLRZxo6Yt74KvUzqoouxfsjLFiWqueT",
  "key12": "2cEhJvkt224XxbnEw14YtzRpJ4goSdKyt1Thy6b5E1VF15bKND1GCy6KayduqtxaCwXmB3KpGGbsKafvpMKsgjnD",
  "key13": "2ExJAfKwW8Z9SRPadS3BGD814xbr1ZzMcj6cwfAqZS8LBN6WgnJjq7YX5k1knVKexH2XVbs3XgJtMQmH6LdN32oS",
  "key14": "4wuFHjJRMaKyuH3bGuXEwqrSpBwy2pGRmGQWeTWLfKdGkKinuKumA4PxdbGKUSAi195sfcnUbJ4ScakkPSLL5CdW",
  "key15": "n9eaAkmzJAkE6sES2Qs7rvW1uxL69CxBZWfwHRWHF9QEnpFA2ZimhtAyPFLJsFFWbVn3AUzMmXJDPH5wLXd6QQq",
  "key16": "4bSFZ5BKWRGGfCkCgUk8wEU12UqascheU5xS6p8coWSxnhxxYpGM63Bauq4PXxLgkSmhhfMt1tFgRY5jNNuibuyJ",
  "key17": "3R5dqZagtDJLuLSKUoBjPPcufRDLgFeEfjbQZsGGS6R4DzJVshcHfuPW4pKj81NUYqFmou5XwXyY9sFofAPPTKxj",
  "key18": "2nFaZwmHqsS16SQz7Bvs7akEmxR377vXMbbREqmo8Nj2F9HzGEDeBGdbQekEt3Bg2YSp5u8MPGZqikn1cXG8NGYo",
  "key19": "382RWKFwKjQEwL55DditE3FCJYoHCDyvKTNTJ9AEEqE5Zt2kLMCM3VKuLoY6gJB5e318vQN8sdVsCCCTzX6ExDqY",
  "key20": "2AmcSuHavMcEeuRKz2gYeMdkTUqKPJNVnrt9cViFna7LqwDS61QyVeCF7pjvV8owWiDPBiWexs8FezThgNbYUc9s",
  "key21": "5VGekWWvzYZG1Zc4SLjLcCReVQpyNj2rktZm2QXqW6ipjEiRrpH64ucqdjVBCJewrvLgJm6cXRH8x1vUipJGegJX",
  "key22": "G4SgWMDhh2qh348UzdFyufPcGd1mgHL27SH16gVvPwiXgo7VvgUosYMsokSF2Hv49gvLDeuwa9MNTdFDgiu8stc",
  "key23": "5RBpFFtcdZutcM7J7XTmmPpjcma9W5CWmrWE6tppbA9kfxWhu9bL8MbZJkeDwFbYL1mxjeUd7gwDuDpAkeUiU3aS",
  "key24": "2k5yL45GNS7SkfmCCQhPLRCYam7hqHRhR9rYeW6o9hvSR1qCSjsa5ezyepvRAwumtMFRDRE1sjscLEerV4AheZfr",
  "key25": "3jG1zk9FK95BPePLWAWtBnSRUWEffUduopsHP2mjJrhiBZ3kpkqnE9iLztwwBXv6C2t8DNDgpeomgrrVsBv1Gztx",
  "key26": "4S4vXw6U7soYjDFCkfUmJX2y6EXc5RvWsddhjzwMCstQrsrJhTP36JURjYQK25WEvpDsC68WphdLw7nvjHVRMvp4",
  "key27": "2h3sVvNa4ad43NbWcfi58wQFgmL7duxA9urCAMaZa7yTfjednLk1ozCujiCGbZgD1QAzMNEtQipMyUQ77eAVrwLi",
  "key28": "22V2wyq2sjuPPUAT3qdV7TfkHH5v5CZ5LNMk1bWJ9LmQvEyoCbWcYm3mX3bacz4o6Lf9KFc3NhwHuUxTkq6Q2w7g",
  "key29": "3M6tvs7JvbvfQ5XHBjGUPA8tXzg9hpufWYKyAbPNFAUoB3PFyRQBTrC1XHBRpvCEez8dbNWdx6HgxPu44GnPVGoN",
  "key30": "u7u1MmHmGrQtdvbh9DxQAcfkegz6V5JMAsgVdToQyVorQXvXAponLdneoGCHzbBZFoJc38cjLmtZQr7w9zp52fw",
  "key31": "5b33ZCXfx1kybSQD9jnU8csMhrFgpFrrk98Z6HvXSvpA1NoDo8XPZWhQpTebiP4aNCZksrBDhMaS6tc9qQMS8kWu",
  "key32": "66t9YUqewUYpbLYcrFqC6K29esjhRBeRpx2ovKGEwnzy7jxe1cqwhaznSafG8r9d8wriGTMZ5JfTqQxLEiWs5dgX",
  "key33": "35ayzcY4y6jV95oVZD3QMLC2kg4qDHCJEGxscLtCoVJcag23eVQza2L9U8qxaEZvZUkduaxMgb9R5U5AQborKLb7",
  "key34": "hqLwS8Z9yct52AMWAsLAwEJjhfg98s33uyGqrYsecek4F51zSuob8EAFwPjih1eBFd2waqUz4JBmEBUb9KGCHYp",
  "key35": "2D6pDUSegvYtVhmH3PHHpB6kLBg8CTA8scaBcTt2L4o3Bcxn8iooKzALRYPzqGuW7UTGskLSPfuCxPu3vQriZ17P"
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
