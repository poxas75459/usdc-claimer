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
    "2aBaCi7rJkQeDbwyNhcbi2cZGQWP5KXKnfbFN5WXLmtPW8exoZMireJJRx6GvR5m7vWxHCsrqAxLasCFwmox15Tw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "gAtueCpMsiCStVerBQA94BDuVCtBLo1dXYXTfv2JStpRiRqXLbCU3zfRUQJZn94rTXVJV2cT4nGkFGkd5XfRX6p",
  "key1": "3nd7Q92GHMXUbFbj1eQP1dqJA3W8YbgAuoeuYQqiQ1d6tEMkFFriFnN5mXty94JgHUFm62urJRBcFf8J5JpQJ7pw",
  "key2": "5TwZUa4WmUfqQCmyCTmgs89iJKRmkStXWgXP78F17rXgr4dFbptwsjpfKp7fCeGkhNZWHFjepMgMzQ6LJcY5LAr3",
  "key3": "3FvbjZMD95R8cnSgqohfCVudkSJcJHLNTYAq3BjJRSYkzyYvatN9AdWuuQuWX3tdZWiKaKEd5MFLdtxipmuVwuzA",
  "key4": "2n98hpE8PTPgmrbaH5fLfspEBqnA29VgNS2p3KNZPPiiNRkV5bo87fwCK7uWHsTXZ2vqYDAX5eRGGjrdpkkjwSex",
  "key5": "4nMdw6pYXBBPzHfSPKXBuihdZNmMFsdpudmj7G5oZwUXb8sgc5hjkS1QUrP2dzN7vSGRFLboGfdtLpuH9ZSjzrkr",
  "key6": "3a3GZkTjKZcsztHVitEXMhPPpRyEtQS4iHNWiWyqGZb6kysLgpZ2WTUw8rSpBMmAaNNRH1rq7bZcgCSnqGxcRbVF",
  "key7": "3k9XU7UA6siEJLxKco58qdFELEzHW6o6M24gMYYhvYCUintd5cVsNvFQ7puEmvKoME2FAAWSGUKLdpKbwt75v9PL",
  "key8": "5fFsTmC8jDDmu16e329C2QJmka34mT2V9D8yVo9BFNKPnBKhTncX1uac7TGcya6PdCX1ZUi6YVs4JijCpFBnQY1q",
  "key9": "tW49Mh1TN1FhcdHk7XcHfYAxNh44EtHUSmBrcC9ijAxkDGMTkRsp3nULHuZohSNueHn94npweo2aJHUidEg9p6b",
  "key10": "22RY6knp3o4QHHGf7CozX1q7cTm59mPsLWNWocbwX4ARtP9u5Ufmro1izJyu7u4XVHanc612hTB6q5zRng8PHvUg",
  "key11": "2AxPTW8oFN4W7KL4iySgQQWyByDFB2G6o36gJqKxDBrNdwrGhoW3k3PoTH1qNhPPBHmXb8UwA3buvqzJHhitSJqt",
  "key12": "Th3J5ajhkmGRR1fRRyBUkgwAh2ev3dk4k9igRJUwuFenLdX1XX27vxVH2cxyT2B7qVDzdMyL7Zuua5H1ZZkQc1T",
  "key13": "2GqMrNsDKSiBu8j5jnNoxqPycCWUrr4FWe9cTFTHfvazVokGnJkuKkxwjJmSxPUxiN9MG93tK3QKuGyMunVHyffn",
  "key14": "SZub4esqNVpWtYXgj3YhxocPscFrAhyCcmiAL4BsTzTGfaksFqJXASaSJwWwyfy8Y2wKpqA2tRWUDGKMht377ME",
  "key15": "j9VC1fpJgaHWt45Tns8upNQVe3vCWNuZSnoDgDh3ySwNLMBhwiYg293p7KxGKQ1pJsxJVQYZQZ8Tfk1zFTtRGMo",
  "key16": "2bGxXB2JnUWD4Cus4xujX2RSZm972UWRR3mWxWQfWpncm9AzkkSCroY4Jkaq2ciE756WkotvFeuwQZQb6QAMevMc",
  "key17": "4PfF6yfV9BzMrRUmLcH87t466DrvbAji3KjQTyDjd64hiKSy31fFJNXKY4LYebKCkuTyXjTa9FpbJa5whD7sG5WW",
  "key18": "49RoBBGmWvzm8c9mrnSqnBZytfHYB3XmjGfWpeR1ifmHDdMxdwMGywnmHJBVa7r2z8YZSZNhVauAzJeUd2JSo7r4",
  "key19": "5nJ6eEqMLVFwevneWvBjcyk8GebeVc518ZjbtxyWS4a3bjpnVhQeEZu3npaTkHm6xuyu313xaJkS1oRvCBmBCW5e",
  "key20": "2b7ppM469XwQPrgaknaRzHHcGfkvXKk8G8hYureoRZdGq9DZRwYooZ2c8DRsn6e41UHj99kLGhegXwKmbenTQaiy",
  "key21": "4MXcaKGuSE1XTMvYGd7doWkahYu2m1Rcu5qrtGf6KM5vEautJrrnJQdsb6S6saGY2CcUFVtCGHzLWxFoPaTHoBqk",
  "key22": "mkUzVokg5XPkXuPsWE2g2MdpKR7EepvA3ES9XBKUzLysiJJDw4iGL7WyjeRZj3CTq8thQoDYR2r247aTcbyHUKR",
  "key23": "2PyDPtfFVQuv4ZG3d8s5qhSmpECfcLjcZjic6iRj2rKJCjvBbLrNMK2frjTREZqEYAotghiizDTjzbVLyydgR7Sa",
  "key24": "2CvkWJmyXMYFdT8XohqC6k26NmiwMEqq62fLVjD5fFq11644LDePeZo2JxcaW2e4eviBjG7Tcq4dxd3cbYk7EjMP",
  "key25": "y9DrLMa7MMJYVzzEdUNd9z5sMKHSBnaPGh3u6qkuG6UjKfjm1e6HpuqjGVvqDUK4k64Dxsh6ApC4guLQeUJDyBi",
  "key26": "369mGAF9Sfcd5PNQaEQiCZiNZYn6vQWzvs33P5bw6iudmo54rBMS7FYw11EZBKvtMUHTQP2ZzdXU4vp1jr9jxKKs",
  "key27": "6Nk3PU61VE6Aa2t7tSUxdTpJnwyp52LMcM1UPXQbuxvt3dQf9HZjnaYeewpR7ougJCTrq3DbuzvFt97kHUu53w8",
  "key28": "2v2EMph4NH5u9cjvnFodcveUhUZ3L5rDmqL4SZtNhTQBWnyyfGpMpFxu8VgfJUXGy8ucBc2btJ1D7YYbnCPm3NLb",
  "key29": "3XZ7DwanRt6tPNYttvuW2frjCCaK3mYvRy5ext3bYVsBg9hY1xza5UqMzGujuevstc6Y4hzGfvSFyenNtJZ8tA1T",
  "key30": "5o438kJK5V5LkuxfgcWHuqKVBPrDex1wuqeoqrpZAafBVL31PHsbUfKc5MGmJP1jPEYy2GaakbKiLq49eGXkuyhv"
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
