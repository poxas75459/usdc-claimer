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
    "2TFbFRiY188rwpm7bW4S28vuwCGDc1mWJWcvGU2h63X8RNzhcjyoS7LqjK1wSPhJhhytpFh58r7UmtW8nUuUWJXd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4HwpgSyFFZRkwMjrsoQXW2MHkDu4VowGQ1cLA4akCwgVe8EPk8DPHniARfBax6kpDyoUt4HSikf82uhNPcpDfJve",
  "key1": "tks7WzudLuJh2qWV4H1KZKTbYfbwkGrjSnEHyivZVcVqcBREkPyjbuq3Ly6NjR3RCxa5TKrRgt1TUC5kTa5PUYh",
  "key2": "62EjWuustrM9RZSVfyTNG1vnbbhQLfBDSJ4weeQRtRmxoSSgVW2axBZk4YVaVpR6KLDzWUnPRvcXitNswHyZWCeX",
  "key3": "2VLKfX7Z6hX1V6JfNNb5nnVFhHAkMb8PwWqqfGPq19jEUCkG1An5bBHjQVT6CQrAEuDhGxtsCoakCvb1BNTzvsny",
  "key4": "3BNXdJxZmE5kBHCGkHg5vsFc1bpRRfaby7poJTiPAikhZicQQVuxgwSdEwMC3VwgjZJexBdwZm53totLR9aZo4z7",
  "key5": "2TtRobmPvQhEoomuyQTAnmXEyHEhHVh5duHgm1Su6FnJZtyr4woXWxeJExUCu5M5brWaVj1vNU7x5Wd53sTmfVuP",
  "key6": "62fPZ9uMUAxMCABt3fW5Jtc6GtS3qqF39vw4UTjU6rEGYPzD1TWmZY6gyaLiGVng6ixJXL52VDevwPFf72HhDNYL",
  "key7": "3ZZEdTT3yceqUF1Nt9Kvcb4eKaXmgX6WFLa9xTH2AmbURY8J6Wx3F22ochvWXY1EXZ3Xk9p69JJm5RPUqDVhnbGR",
  "key8": "SdouEQ7YAQsZvRVUPYrS3YocToDhb1Yiu13BxmB2o6wKiQqeGHcV7Yj8xjCfz9mg6QiEgfahPXtR3xLJSLwUXHX",
  "key9": "Ku1XiPhCfTzAbZUoXQXKhSMj6afGCu49ihg5FGxFABSRaemWDiweHYwao2B6L1Qd8nBcPx3f1GizS5uqgXMzR8r",
  "key10": "3E6jLN5eK8aaB6iVk1XH6XL3BnQ422aFgBvUD6G263J552EGJPBKCsneaZCXFbvZqzuHtqFnHuxodqPQV248Xax3",
  "key11": "4GyQeepygFRG28D6vDcygWXDackkZ3udSC87ECEWfTJCCNALSFG2nivpJLWbccNY5jxV2nqCyDFL6htfbhiTFaf3",
  "key12": "4K85y6ZUYA4tVj7Lq1vzSvhB1J8rPuYXunAPHGQ3mLaPZo2hSbNVgxirRmZzeZuHudyDayrRGF97LVwD9VxU2koK",
  "key13": "4orVWqqrHkBTbQ3vhR2N5teMedgFLQ83nZr4x8B1Xz1hbjoDBZ9iXgZVFgBB5dxQrrevCq9XqVegjBCUhhu5ad4p",
  "key14": "57eL2XHkSkcP3xJYCo5umZfQiqFi4VFfqpi1HP4HYRb1xCaG5sCPvuVebSTPYYCDEvPU88MV3mTYtGrjpjWHy5Nu",
  "key15": "eaKTNWwpuY45XfouovK1253xXb4cP9EfNGWWZBofk2Pi6B84XfHpKVPHKHUq48fPLyq63VmeVzWwXQCCKehddGp",
  "key16": "5BRmJLeSKUjY1ty5wQWcmokud28ddeABAiox855L4j1UN2NCKJFvktgNaLruzut9GmdRfyNr51iQTcPRo3S82zXX",
  "key17": "3YmrcGek1TTr8imWTqSNjyV3V3iFpUzkQr354Pnf4TMEKutYXsgXguhpkk3ahbpLNTN8DyKLSgvhv41oPnquVMcW",
  "key18": "4YdmDBgR68YGDwQuqbGdW3hTEctE9H9aiDzwmoXfoLptht6muDF6i3hAj23nP63axz2LVbE5wJabbai6aEvtHsie",
  "key19": "3vMXd42ZiBToAcfGcfqeGKmgL57xhsXzq3sdmsAquirQ3ZrbvLQvzztx4jx5L1boE9QJ5hz1PwEsBYUEGY8Ff6cN",
  "key20": "3xNXyssq5CK3VLsqkhz51kr2NzjjcjKhQ7BrJhByJ6eSsihWQMAzXTjMPPCEQ6U5uT2fNPaxct6VvbtR3q7uYiRU",
  "key21": "2V4Zb6Gww1qxEqZ9Y7Dq4TE9qSyp3EQED1B9aHP6QQrFUdhqFLWpsUC3K74A69HnwmY4XPo1KjkCWrhwKmwpUseR",
  "key22": "2LDz4B4KFyrjYxnfsujX9JToP8j766R3e3RCQJtdezxMRy4i76vbydtQzXd8wqo5hmro5cAaVX1kFyXrhLmpiJcL",
  "key23": "3oLdGg63MEQkTvjv7pbYCYM2o2QXr31yezrR4yAJE4A2MpK41skosQVfP5pQwJmce8hVgGdYAYgT1uQ471txnPA6",
  "key24": "4QDK17KmXQAyKkG9DRb9pi7Ki2QixoZvDvPbhfSvrArpYNJpfhqbpDnZm4bt1d5fapWqAVG3GpUArnC5RgvkF6aF",
  "key25": "NLfoZfdBCsbbQUWyxuWfLvgrtX9W2XeLjRVpEizg1YaA9c5oSiopKjKvUFz26pd6FWp5gVDAhRz2JV61UmyNPZ3",
  "key26": "n5rC9gMYRV13ojq76XtPDVij5Bj6nZFPbmFJkhbyRJcJ197Z6DQStLSYNwgUSVuvQWi2yFsSRFepsz2XNpzxR5m",
  "key27": "4DpNyjDvm7Tb2UGC77wDb3nMEia8j59a4vycB4wH1aTPzkWB59f66bzBi2uv7FPfCerrPS2oKbfZD9X56JRe3uVD",
  "key28": "4MJcKNaDmhzLdLYcYEg1J4zFdDS5b9wdYs3jtBCb5vdMZi9HmE92CUwHhbZhPup3bGA8EgD7N5NqhRvXhRSUpZpg"
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
