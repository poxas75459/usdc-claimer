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
    "5QDF1BfEa3UrMLAas8B4H5t4LU3k7Rnom49BtRzwdrnNxpPY6r99UTG8GmYsxzNZma2V5b6Zpw2cn5TS6AuFebxr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "FBbAuSqo8abwM4pSRxdVb1YyR8aHTQybcmtCvHQZiEGsh2J6KNrfiDhmH39jy4n2LQuCQVVA64eo6YJS7n86tn5",
  "key1": "pFkgJR4nfLvBfEzTocVmbxLFdXSLyaMV358LjuYvAHGMHdZQHwFmSr5v9iWs7EwHq79UiFCfTprD6AFTVXz8kiM",
  "key2": "4jNMgXDrp38FUiVQU76XmnuKTxfMMjrbdeEkg6b1Pk8hfVSoGDs4nb4WcLH7Lja2x8tGxuk4gByzQSceR3ei8bM6",
  "key3": "28wM7uggGcT6DWunoPdrpX1EX3QP4jgtHZz3B78JQY7dW7XofCDdLfVLwCnjRk2E3faBpWiMXKP5PETX2tNMetZ5",
  "key4": "9nvPYnkBMhD7LmnKcFHbqitA7d4PbDQThrRB5iXa3QuV2aJ6yCxbKqSYFdQUEWJgKAarT3yNWxvZZxTTozvDkhA",
  "key5": "4RRQKtC8pwtUFdv8RxBG3jCaaHTmzT2F1qty3VQLjb43pa2K3kqLDthemv9tre2wZjouN1zuucLgrPM3wuZXLiRG",
  "key6": "4DyM7LBempAAx3vmiQebeJ5ZSSJCknqWjZrPWifj1StkehHbJ9RfRZBC2tJzoG1Sdein1CZBB5yfgHB56tyQ5Bus",
  "key7": "3bATgnrYoXRcaqfKvn9GzGkA98ctEeT6CedzCrv6cyfa5qYB5uijfCHA27VEaGg3Us3S2zNcQEmag9RbytocW2oh",
  "key8": "42NRdkGz9Vwzihqmrw3qDuJ5hPpaaT3LqY6LKzHe3DhdY3F33S5ouAiNN8jHewLccpHxgpPB3ukH5jWftyMBTUtk",
  "key9": "2on985wHy1Ns2xfyHpfD46JnMDioq3bamwF6NCQAgMnMRhV7h2tBADzoBgpQFFbjQdYjfeuLv1Wwopodn6nYhVMh",
  "key10": "5yeBNZcpdtfX55fbubdoB4GnLnxFx2Jfp1w36PT4yG63W1h1afBtWrEHSMHSkXpS6dUZxPATifZyvsoaM6W1oL2D",
  "key11": "ZhLgcdy82tiwATrh4ZQxpCJH3Gf6GhUHVgM8DPNM9HJ4bSrBYcxN7T6pDJWycevXZNXj5rPLHCWBz2372NExYm2",
  "key12": "3M8TeQZDwETpnuZNBonuWNdpGsPytkHKCEZjxkrZs9u9hn21fEntAY7cXvSN6YTfYYnNKBYoNfUmX7ryxPc5g2vn",
  "key13": "RgVUDyBaPe7Aw83CqqtHMDU8EEz2Ub54WssBCUEYRBFeyLUhk5hP78brWdwbFdx92v2EECkknKUdFZFQRDGuWq6",
  "key14": "4rmLykagQWhaRwNA6nskfYq8HsXuY1AW1kTrc4PZnE8MRn5WtisewqS9G1z37XKizvrSHBNJgXHutt4UTq1nDknx",
  "key15": "2Wg4rZSc89LQNbA43QTY6co5sUS3tEsPMVe9iyjZANHeeJoxXxa16Q5mdTFxaoM6HJQBzgntq4Xmu5EEaDNt5g3K",
  "key16": "4AhYKgeHRyB4MF2dPekR4M7ctuDj7pRc1zxsPCNQTCX5ojLM8RSmFLWWhARpN8JaYQy88uMmF7TgDKkpnbyoDtRd",
  "key17": "nSS6AvPvvNgWRmi7rvs8Wd6Avq7dcCGjwP81UQmmpXpGeFu86iwCz8J6qhNL9BSqC7NLrGQDeQEh9krRvqXmqJj",
  "key18": "3tsQ8Y5y37ygpvsGx2Y4g9CgNkiRxMZaZx9KEw1e7ZRhDd18J7RpuNevDL3QUQkeSEfvCskKrFpETF14uDm5PY1v",
  "key19": "2QzPdL416ZnQmX736mT4JpdPo96c5auSTB8muT82e1pNbymz9oN2tsJrdE8ygatwfSwDPNk9t3gBXnV7KGAAP6be",
  "key20": "2k7Uuha5xTS7jFyAGMKk8VF2ojrfp5FF8vVnLtv3gUdmhEhDcE6FkqXJQGnj4BkGpSCkHFyMX8X7oEy9qjXDBjvZ",
  "key21": "5khiZQShbLQnmVX3z4EwCpUKzmFLRwyjk4cE7dobHx1MhhgJ7HwWAjpZunHqmmZ7NES2hzfKhEYT3jhCjrpCxb19",
  "key22": "476x3Xs3oUATLhKorWAcrNFu5QgFodWoBSdXduLoZLXJ3pAqWexEriac1WUrxSSoy2n9TZr4e9fC4M1duHkzw3R7",
  "key23": "5Q75aE6vmq8hxdrQvv5J3nFTzbGAUAkYjr3ErrHTT1k3yPVPJtCfnDMKeibqbgL7bvEeHf3XD2XiLoYhmVTV9ezT",
  "key24": "5yivwG27zL3qxvU2vukfVHG6LfQEvrShJz8R1L8Defc9Up2jxT17ZTqo1EDSDj4QE35CvFAhxkdcbkXSarGRysvf",
  "key25": "5uSRwfFxQuaKzjBXLAktTPgvepRR4um83KJFT4VPGQBSCZ9tViEBqSeZm8DS16YywLSzRHaSLi56i6bwbqeQWbah",
  "key26": "2HG4BufGmztKyYwAvTeGgwpDe1ogYMk3namVP1XS2NBzweXgPjGtaBp2W7wg1sMAoBfiinU7Gh8mLjxJfvK8QTx4",
  "key27": "4s3tMzD9NLpxqJV2mvikS9v7eEpyFjTqrE5TXHJdpy6M5ejiLwxaVTiGyUnrgXis5pZdfte24jxqRMHQJCrkyoG1",
  "key28": "2iQbiiQqizemog8quTG7FpS2TPUYTC4K4RzpnqxNA5gt5ChmzRnLXy7LnQF5FCvZvLyDktx3muSbTN5X1bvn2rLV",
  "key29": "kqWzBcURcKGw8MUVkQj3axvzciwiEKGn2zD2fop7Zp5X15jW9oVeXz63ERkgyCGdHRDt6Qpz6BfryoMaWMmYrSA",
  "key30": "uULM3hAhZPP1FwBoP5UVrs86VSsPpPakvnJvQTCbrgxyshrftnotj4aHHw4unrVcCLcztGPg1eZ8HBsQP7oXzBD",
  "key31": "2H3CUYyMKaa4A879GF6pFZgn16L2zmmww2QU3oRwjkMP7vB6LBxMj2oe74KvJGNGE3e9SPTqbtQpm46L9AKyR5SM",
  "key32": "2JhjxjsPe1ieHvMfGPqAz3PW8318ZcNtaHWbYWpj2jchx7VFmg7AqWhrfvXc8R6JqyLQTdhtezV6rYq6FDerTx7D",
  "key33": "2fqheKVoPmLxHEEXFACo2PCKcV3nhaxoW5eQLujHbHk46U5GzrNvW13qLKEtk7eXdbW1d2vd1C95EGtSHDFkbid9",
  "key34": "5R4iyuTEs8UG6Fxev4FnVWFFNMQn8uQNMbfHY9ywY5cD9NrkharubogSz9th6dazYSA6v1Nhemf9jsAGwsQ6gEP4",
  "key35": "4irysyun39UFq4uQgkjdUYdZ5PAYETzoTctRpuynDqUS7Vo8D5DyTev2qzW8wnBBXgCLipGZAobtT3dYPMh84MVL",
  "key36": "Wbb6JPVhm2moyRQDYhootWfjLRVeW4zJ6kKU6ArhPdAJxBKuSYt8razMGf91mSn4KM7S3pTLFgbePwoPRp2BxTa",
  "key37": "56t686xHcVLscKPzWnEU6Z8eJpCc6ZXrBQSwv8v53j99svCg4CBTJWMVGNmTcAn7RgjYZ4yQqytY6ygvxoexX9Vb",
  "key38": "4v3sCPeD2oTZ4hNAU6TQCJBnFQph4NnwWexU512jHyokNZmQXRFfnC34ft9ry8uWQz2pgMqbNuxgrEyQNebhdWFP",
  "key39": "4BaToLRrXGFyo7JLcVK8JVF9zHVPFmmJQaFGyBx9ToheC8oYncXxVd6LmoxFXkaovoy16cY6tUZWPaVky8d6XG2J",
  "key40": "NWhfCjtKXWRr7cvKM6oFwzQVxu4EZRSdxioN48646gZBBKQJGnD6cxpng4R2e7jdiDA63Ck2PFJDu66bYfizWiP",
  "key41": "5oTSihpUjNhzQzKdXZxtDhQvctJMMqVGghFBAJQNqpChb7Qh1XfpXtnYrz3jowcA3Yjv9AC8FppgmndTtsGfMrLp",
  "key42": "2Uz2gV5shtgdVzJ16oAmtwMKwcMzePdVmAFfzYXY7GMjK8ZLmVHEhFKW593W4iMfPM3fcorYiHQUgMc5Yeq7t79U",
  "key43": "4HUqLznPnx6ixH8ZsPCs8YXa21sftkKNDscz8BesyTLsjDGzqZy4RrWMQ8VTinRuLQ9ezoYe5wN8aNMPj8GXWU7X",
  "key44": "3bMYy5tt1FFcK7LvUsxGZyBurPoSteBt9ACq4YTy4okq3LRCsYpTrDsDQj1DBm3YTxmkdtg97BFo17Zo4mTCu22V",
  "key45": "wbR8tzZyCkWsjyv4qZqyXJpMySee8HwRGBw2JgA6nSaNpTBufNitxuAWp3UNY1kojeJxeHCx15o8tdJwnY3B4ya"
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
