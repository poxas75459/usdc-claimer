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
    "3wePd5VqDQvtunehFyeiCrpx9Dugnhhzdcof6kmcmQzrKBVpr7KPsdMPUJxWDKD2P4JnTs1m8v9T67Pj5Lxudh2p"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47SNr2B9eryoGRVSJM5j7zcd3LYKpyZ4NLZsmELJmBgUwYGRFUxWaAk7gyLKNqUKD6MmLvs6NHqtFJZSnJMVT2EF",
  "key1": "2THkGbRMjjsZapxJpRTGDUmbpnhJHimLZYEc9wSg5V9jq8DeQEgdR3pFP2JZjaVCoPQqULVsTETnAUo2727qGkVk",
  "key2": "5VTMzE5ZTJVcp8BY4QuEAFragoPrB7tdJWMTFzUNRGaXf2wYZ9BdcR8b7TFFR544vvrWNttr8pFUq3Pv9cgJLJz",
  "key3": "397KAwgzxaGTw4bEzNugoenShiF3bQpUrXnBc5ZsSW6w79b9TsX6UaDbxJmhYbGKBHH8zev88p47WNoXRw7hzuaw",
  "key4": "3ZNWTWBCW68NmGEaV5gFm2P3trbX5UE91MA7ubM3mHukJaj4ymMakmkCsyHXu9kgDpKew7UNnFdrUGG5nSXcmeHy",
  "key5": "3sosENPcfRJ9QsZ7Dm9FGM7co3y8BdtVG7oN6ZZvhabpZXV6xgwgZmn727oFAEiRk7gtsYH7DvzTkSt6rVxc33rh",
  "key6": "wTKymKG1zfL5kfKLPwkVizgmqB3YAVkEJKM3dUM8Dcy6uc9MBGCoamrkZ7CVKf5dgC3K7eMupN37Dbf1L7BUX9m",
  "key7": "4uxLghdw7tzzbPXGvn5id9R7RWvaxDGBew4MfPyAjbc9AfQ28mohRTdTFaz5RastToETMf1LcEPJtHb34K2GUdoL",
  "key8": "4YSdNWUeDGutvPUei37EpWpaPWMHRkFLkNmenPtP3RY92icGNC9WjKXoxhd9KbqtnpaMnbrks65ZtTt8F4KWtWqR",
  "key9": "f53SgSH9Ph9gwWacok87Re9Y2EoH5osLQc13WRXJH4wNV4HYSDfqQgseS9oucMM1siifcrRDAhB2csMRNKbK3Ap",
  "key10": "Ej6LbFJQzgQk4UiaKPNh8GMf8myW6VBDmg3UoEASkwwhKsGcCB87AMdZERLv7JknUPktMfMWkuAbkJ5u5GJxWaq",
  "key11": "2NhSPH6M8NZan1CCncGm1UzpcdJchS9W579ZpT9P5DRL3QSoB1eiqUut862YSiz5WivHs9L9zj6MZyKVTwBo9d8S",
  "key12": "4VoQktNDR4t4x9mDFQsdpcgLn4VQACsfqM5K9SCzoDgwY35MtiLccjt59kgYWAtfBD7PJdvkmHNMdQ4LbT7NFV8o",
  "key13": "2sDAxBYG2wqtnwtj6AEfkDQZx3J6v3MJiKrMkGpCy1vPZJFcQza5muc6ZUCY7r7LF1GhmvJh3zcLS5ttTCuWm3yX",
  "key14": "59E4Anm3eLo7yZvVCzCQL9NSN83AsmhiPbKBKnkPPtD8TswDV7bo2J8ezwvN4b5NAh5CBQ1Dk5iMsqGPdbxMuZZg",
  "key15": "5cLqitDdLVurFAtg6zRzrdrQpL8TMwNpYh4qtm3eXAuFMcYHTaGMnoYhDAtAN6Mu7CwL2AtLxgqRzyaj51t3PgrA",
  "key16": "kMAN2WQLt2h58gv5tGUp1naA7fea36DS1SKgGL7CkTTQkd4T6t9FkE6DyFPg5uA2pkiMqNLSkqdjVr3zhZQTBJE",
  "key17": "5ET5szSHQ9HsSmw2NcxT1j6UM51qD8wVEU5Fmf7F3FcxskzxRDBVc4JJbaGfRyW6nwRQEqdDGdZKtskbaSbW3bk5",
  "key18": "2A36DdMxRbYinEtGNAGXaQZofhKiDvRSZu4BJesG2YPTEbnLKwdaGTJpwcsf2NxeqGDXk7C2W8rtHpeH4th3ftcv",
  "key19": "2vZYrBYKGuEWwkgtUapBqHWyLoFXFLH6s9T5BBFE9ZA25GygX7UgNjTFXUrMfQabBrw8XjuKEAB8DrEM3u1itwaV",
  "key20": "2mVjv2YUC4iLbTSFJAGF8UDxLzupsvdXruwrXfsSuiA33UX4odMNVbdHixP483rQ1aTE5HmzxFTr3XqU6nvfAg2r",
  "key21": "eykCHgdANFhZdJptT8L85mdJE5pm7ss6bo9DfY6zVJcChWMD4bog9Cmm6TB8555ja6Js6bTq7YSKdAbQ9euNkfY",
  "key22": "5EfuaBJ5MfrJZcL584c6Ht6WgqCjZeZqkShCAzYnyEm5KRMweokmgbsaE5WVcLGgyoLnZXnzT2HxXpsy7zrujnEu",
  "key23": "5vNUtEdcEa5LLaQqhgzsaoVspmo9oxUkeXHKpobK99wzGzSJFWbKjZWGeSGnHCwPs1GRYhMH1q3uqWUueRHwC9Mz",
  "key24": "4Bv3NdFPzsfZAEDVqcB1bLa94bS9bBPXa4p2BzYNKLH6vNe2st2DzK6hnW6Ng3ydNPdkiX1gccLemhGyKcaKnj1x",
  "key25": "LQPgbMa8n3uHb6s5AsjpbRt6Q8H71spAzy1ov6kQGHX6F5X2UnoAxF3LzE2P2BRHxiFCqsNQaYuHPSyNgix9wyu",
  "key26": "5yh1sKyfZvcx6PbcbaKHH8bArJUjqDJanqbzAdy8jRFrsycjLV3SzCPU3EnJXF4aUiHx3hdSXForPXQ97mcKnEyw",
  "key27": "41bAJwqcD7j8zxWKYX5rdnk9DZH3kyjjPZ1tYHNampgEbnxoQD3cndj2rZxAQQ1AYBVZ3yEPg7TUrAT66AwyPNTF",
  "key28": "3TfDwA3D2qzbeopg3JPeZnBuSK5PkPw7Dgc3vN4oFYE9sqZCxqoxGwXyE9g8Xqsn6dEWyb7miTAaFXA1JSzDBhdK",
  "key29": "9Co8mFKuH22TPguUszMbzj7t2SH6Vy43fguShQrjso5F8Ph1c4gxaWZnummjMkpHvBGqhxbXHq7mwKsEVySYuLN",
  "key30": "Ng6JkpxYmNVjSkVRHHyzgPa97Tmc8ALyPrFpEwaNjpra2DvvNi9Zo57sGJvsVtc6nydC4vC6DRNWhV7BY2pBGxD",
  "key31": "3QNMK8Y88kPzLQdebbtjLXemQDUv6eqohq9kD4EnFh2Tg7rt2xBGEwFCrSBj2UdZecxu8bH7VgZp82hpM7jrSKXC",
  "key32": "54RWTWHpt7oUhTGVziakj4owFFYvko2eSghC8iBkQhKtfVEYBrQ7wJcmwMF8WNgEVTXfMxqEZUBHiTvCqp1kSJHE",
  "key33": "ZtvJRggTfovDGpVHyrK5QBUZnEUNudUXeywJ7q3FiqQgGg3TbPCGGWkWtjquFHpv7W924Swe8Z1hqwwXR6pi5kk",
  "key34": "4Shve6ZSKaNHYn1eBSxPa8S6q6xESqMFSXs2v53yd75eryFDR8zTXGYmqYmwoB2uxSAZPz67gKKeCD2yts4XcXm6",
  "key35": "37aY8hzEw58MywtpQPzMd2B1yDjpKqsULw6VGqgC3PWWGd8zHhqjAusM2TpmF7RBPU2YtiDLZiRMuf2yNRrUZUsL",
  "key36": "42zEZAe4nPSvtedsbUdPvUuVoAs4KqFomKoVs2XTWSudwGqgHbqCKUVQ2K3g38VgTbwPBrMwE5PRgJqTyHZuSGBs",
  "key37": "2kXXRzykP6qh5TePHhc8bJHJxEujbGLkQPXmhx83e1jkFj2YRNy77wrMHTQ5zSZXenSTy4tQb3gWBXFfmnBoCSkD",
  "key38": "3rrH9YaUhED5wi7AwfhWyBUhBnEo2oJjxpC2UoD9PbxB9i19PwYN4fmZKowyZzavgQxXhE6rjVHtVR2Ug74S4g46",
  "key39": "5xy7NEUBqQn6thmb9WxQuTGL6uTdK6YPx8fkSFMZ24bVhkW7R3vNz3h6C6QB8afcEs8FFGoDaqiEZS1FLLskiqkT",
  "key40": "2vzSmus4C69EYmVAGJ5e517ANCKrL72voh5E7DGpNXNVSQScyZNcbxkp6RrKtQ2C6YnhcmWe9ZE1fGp9UW4SBtL8",
  "key41": "27d3UQqDNDigENGJzoVoGSSAB6iNQqG6UsXeLRAFU2wzZSaEiiYu7FiofvNPm2GFvT779dACcsWZ75aTKcWH5XQd",
  "key42": "3wqp13iKzp7FUUZoa2szri4kMZFergzsJRkotDjqVf4cd3J7jBsm9jyWCRbyrLdkY83mWx5XuftmkW2TTAA7L7n",
  "key43": "2n9oL6yX27BZQqramBcMHrgh791uUWp3xHcLLVM8EPVnUDULKndCzbQ2ajTspB4qJstvYaSWhjjWHGPusyqB6Tkx",
  "key44": "JBrvADxGuS8LncRZ5KubY4DP8jqdAYDGXK3KVy2zCWqEJ1AZKS1dPbUUMYsE3Mu79NhKZBW5tBwi5xCQ7rQazVY",
  "key45": "QFKMtfUr5veKSHbPfMrYTfDr8raGSpwDLPNDMRVymB9m4RvQbNqzMjo8kRZ8wDJfdM6jYcJLb1FuuEF1vY2PnJ1"
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
