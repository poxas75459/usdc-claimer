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
    "65Cq9ri1ETf3sCEtYX6Rg7MZa3kDJj7ypH6hDJBZzRuyaFDrB36pGquoGrtojfQ4E2UzcxnUxGjsyhD3Lh6hoRra"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "HLB1Wr21YoFaFyK47dyBRTYoWsnq6iV1xEjU8ovzNSzxq8i6B41xxnE5GPg8mnJ1qB3zkrhz6iGidMRJLB3Nwk7",
  "key1": "4qnXVuukDGGbnZN15CkuSEySLMzXWZtyjexzFVjoiHPRGdMdo3ZmisMrw5Ca7x5LTPH8joaZsSpqHDepsaHShvkh",
  "key2": "TohQAFhQFkyrjPQzanhajWBDTGP3chDWkFLSZdzqNwCWefphBWdXEPBQ6LX5mLWVjDSTS5RJCzqpqY9pYY6VGXP",
  "key3": "49mbRy55AiJFmddSsYACpdXjohmEQ51yLUBv3afm82frHgY1oFcuM5yXnS9Zd4aC5dbZokKAKA9GwzLbmwQ5ZbM9",
  "key4": "3nwvSKE13WAKGw4bvF33JAKLjfg1mqii6UpPSYC6qaYb9GTiC1CFhvZ6DZLGwAdRbG3mmcVpJJuUAyFqLxNg1FhH",
  "key5": "5hXKa5hKvtFQGx4anR3481jo7egTCeyGa1c5Zi6d2TXWUD3FwB5ApXjV9bjZ1rx34ZTEb5d6VEquQT3q9Rn6c7XT",
  "key6": "2X5ycrbPzyPkVnG7TTRcfjfVr38JF2kf9GCyZvmBpkQUrgsxhW2ahbH4tjQF5132o4WaAbR9ZyXCVm1zKbADS6jU",
  "key7": "2MQzBMrkxKG9oErzMbd6w4C5ajpLb6hDm96wwMoSMRh9eUnqPE5erp28QmCCLTqAZfLAxP78T21b4WF7YFN3VXR4",
  "key8": "2mpBeE7zk6G1jtq7aPLMJdPvN5yg2xJ59yi6rBF7PEX75fFeHPJLfp8ihUb7Rx9K7FdfZQ55aJ1nueiZ89E978nf",
  "key9": "2DmVUJg5axPZjqVS1BKvyYGBXjgNvTzAgXg4zwyPhopj418mjpr6yXHSmUYsSAPNAkSz1SxHzokbgyFR9f8HDQnD",
  "key10": "4R4aX6Q5ZnsxpkdXDQCwQccZXHS7v9AgybGYomf1VUUgUo3Wj2UQuhCRDMg6s6vno8bDQ8UFAXBeoAjMCoYZFawX",
  "key11": "3PqpvwcjLKTgQ5GD9s1dS3TiRvYUEW1Stfhgb8WaXHxetFfvKrLy7BAX5MtgRbEewobHCKfENsq5VJV56To5xQCs",
  "key12": "2Ys5Y9Y52t6FjPA4WSdRvEESSUrcsE6CbM72bvfCR59TfhUP1xcWESz5BrHkgHuY6i4XC6yAiP4gJq872dscbou1",
  "key13": "Y8q2jPRVfrYSSpyNsnBrp5u7BityUiUaFjyCPANu37naoyfkQ9kLWDCgSkg7XvvVdMJ5TY8Ku26i1hT4FeNG7Za",
  "key14": "4oMkK5DTTiMSTfocLVpdqdptmyn3o62c8vqdwmnk6BZykV9pE5DVzXhi7Krvg3j75g6RdH4NAAx7f6GGdQDUBDPj",
  "key15": "kSkf87dePu91Qr4xzx9BE7VKT1dGW57m2pLF81K2oLcNXpPDpV9WZFHtY1CXcNMJQzcUjYbVV3K4ErDyT3JCjD8",
  "key16": "3XCaD8b41byQdiWfJ7Q2sVhjUv6uBLL5z2QtEQ59d53UKxc66eTPCqMVfHEX61bpEccddQBa8s5FM6dgmeQ2sjDD",
  "key17": "54wEgpUTqE3MkDsxd7hVrFVzhELdkHkoGUkuGw4zbTBxYqpXo8uP6rZFcihjKqxvDfbRdtgWEFt8vmB1Xd4Nqnve",
  "key18": "4kvDWYEweEsMCwMUHJJnuxou9o1Nm8VYaiGvcjFrFjXFBoo5kWMbs3UW5dAU4PvxST9mHwEBEEXPpwEp37B5gV2m",
  "key19": "2pYro7VV4YeeAxs7oxAvaGPT9r9rD2rcBcVG6MpbMhq45y6vL38E7iaZeDY9tZxQzW7DY71hkXW1DMB5X5wBHhJ6",
  "key20": "5wwsAPx2RjzGyJu9Y729SLZiNEPm6vczweekbGXcJjkQzemGpiesSKe4kpCHejbY3xSJsHhYouCsaxrL8SUQGdLd",
  "key21": "4whQfLrkAyaikBX356jJHZCBBjyUyfn17Y5ReNs5G5NwuoPhc5wzZYmKmL1zQtmNMybiK3JhrAEDgnVZ1ebBUeib",
  "key22": "S37QUaw1EZUeNck6riyAJM4Nfr4CGz3YThQ6T8WVzbSFFtZPaiKFyaQhx5VwSCqknmuW3Q1SqwSn3BYPCPNZvmQ",
  "key23": "5bfpAFPvwRLf1WzJSdf7B9sn6E3WHw64rQ5t6Cvj4dMgYbjNCP544vbNoQTmhNhKpt3mBykP1DS7EuvsY7xMUtb9",
  "key24": "5HzoYL9KRiB5EwCeZDBfabrsqVcp4YAzs1xHncMJjo51ioMDKogrntXxFrcap6Hi9QXm9R64MJRskFjwtCAHURm3",
  "key25": "2U8aVsznpXjQCJdpwKfSZaXAaidYmWF1DFuHQ2VqsJP6cAofs5VPiR3CenUVZ9G2C2XBXzZPQdL2JcZMRo1Szz7j",
  "key26": "5fj8uknH87GroDfmFVi5dc3Pd9hyRCnc6rgQEKrLQUKmP6PK6Ww4hjyK3BWrWoS7uMicr2kmSriBT9zzUAxxxm9h",
  "key27": "23swaZemQz9teXyifWXR2RjzAjwuUnwz1dvDRh6G762Rpx9v2eJb4w5pvKw7PEbrCW1eC1df8fEPbJziktBZ29m2",
  "key28": "4UHKeMtkn1LWc3ckfdWh8FTc2s2SHYsZRrggaU5KFbMnAwnYAjuo1jYMNnNj8x274ioMtsCApeR4UcRt8WXMfu6J",
  "key29": "3YSEkCVU4QdSu2cz47LB9t4LpnVa1sg4sue6pmvMKTvDDMF3BZvpCTCSZfTX5Z2K48RQt7BZp2SQFHYPqhCtD54N",
  "key30": "5MkUh7MNTUwLtsNwSyv4xVpdLgLRzqUofw8Tf5CjZbk8pZ8QsLsDCct4ab9oNJdCP5nReqA6BkvZFh6Zn9vPmPfa",
  "key31": "5Maknh6AmmgxZ5JZWo2cFQW4yVQ698xgKB394QwAaqmLMJ67TFnhWBnwhpYbePi7WsEdag5shcEPPvhkN2PzfW9v",
  "key32": "337apBXGUbKjL4ZeTDkbo5dVAeaizXHhLtQtRdVpxppkUbi8NCn9DcNbDx7kVHmiYnhxkbUh5DWSpxBEYT4xVAzA",
  "key33": "4aohSk4Sxt98dUrVNoh1fSs81s75kxbYu9p2N8QvW5BA8v5cCAkzmXYwQdBYbcP5KRoyaBHNY74nf27f1w7G876B",
  "key34": "4627P1e5SmVNnSc7nKYRsebgFbRJ3PbWLYjxjsQUNnwA3H619NcayCpCBAKif2thuRT45cG5KdZYVGsHLw6e5Ljm",
  "key35": "5KAbWbPUzZe1bzWhovAm3VmHMBmvLcth8Eg8JLvKmW8PNnmjBJN5FFSMDizrK5jyxFwwLSpY7XQ3W6grGqXadkC9",
  "key36": "671yGTeTbr5Wc7HeayN95c2SEN8EgoodGc8GwGRcam1LkBs9FrLWZtYhUpEQ2X6mzRJyqhhiPiT1pZ7AJffja3w9",
  "key37": "43S8NhKFTfXHQ7p8Xfy7ewEb6rmqhXgauQ7754gVHTXG45upMob4vgzV9grVRchGsY62LXXUZynsYNg3jSfrwDfR",
  "key38": "29VreZC7zN2MjPzeozss9rCjCpa5XCNWvmCZZirQxNJApQ7JPkT9hAU7WLLieymTgrPMhpcv43qcdNAMdsnLzJFy",
  "key39": "aQN81Th7rYMFVsuiKFtbCeiudRMisaR4YKQNPKLLhJYgDPxcjgyjH1asd9KwLZryYaDChxtfAp42CZ1ZVn9Z6ZP",
  "key40": "5xtFapN71h1AY5e8AU5oVCKJ9A7VmK5STue69SXycHy9pcF8FHTHsHascF6YYXy6BUZ2eQafD9mQw81LMbzGcVEZ",
  "key41": "4VjrVLZ7yuSrTKA76jYToMgnKeyKkkzgToWzJys7yHLGuoEnMTkQjDdjWZqq4pw6umtaAPx1GaXzk7FTZWdA6aim",
  "key42": "5erqjaCbKjvkfzT25xYFY4iJokX8psUfJHwvBJg4UTJDBAcKmBmdd2arRmhDTQt4rraQG7fyxYeiG7HLu2YykTzm",
  "key43": "2CA9PybQq88sqM69XeaHotW9C5kWPRWv3otEhw2rFqxsbLgXe8uwuAML8KUv6QY3MXcjHjziF3g4MsJg1yuDr93q",
  "key44": "4ef7gPx5z6SPp48Zwct8zKmyUqFcfHAWSQJVCPjEzcmV5BoPPCL1rwSMxXXyFQv7LSXHeBaVSKYQSHMmfe8DvoHV"
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
