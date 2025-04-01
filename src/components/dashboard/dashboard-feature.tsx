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
    "2VSJ4DxHeUfKE48d2rXHkyWVPCtBRqgKhtUqzqYLHKUTpLbeRAQg4yy99eZTAasKJ876YQnxhdKoakpQAPPishyP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4heKZaas621CoyVQdWrBWhFCn2d1bWv1z8be3yk4uxywfRC9LYiZ27K66aqTJYieCTmN4etqBNBtKNCNVDHzycTK",
  "key1": "5bU1zVLodwHU7KgQo7prnxLtiAZEuJ2vFV1JEzdMu5oG3e5Ek7WrWC4roKUfEj5wnrHYE2QvrmSbfGwDXLjeJi9t",
  "key2": "39Wd5zESNjaaymZU9Njk6tYqMZywftzdHwVDkaz12yfr8oWqT3mXBBspDJnFhg6jX4nkz2112z4X2D6gRtr1uKzm",
  "key3": "2L9bmHef2is2yr51Nw3LCoZ72aVNBQQmjv8kP6g2rDsbowjavGUgw6zyA4KbQjwWuWYoy4vsgazzCR59ujt4gJn",
  "key4": "4aQd5GHsWDoarZsBmTMy92HGaVbZcWA3vhmw1oyqREQ9YHrrx2t3goU9fr678CSLspLJWbwWsX6ExnjqCeKHD7zk",
  "key5": "3DRAX13Y2BTCJv8tfL6o9oiCsVz2DRbd5YW8tN92j5ZrKTPRwJzcwJ3xomZqP4XqFAY94BLtVApBYHnPBHrZT9ZZ",
  "key6": "PQ1ZkP9dK5qqoNmEtdGS79nJMmF1VkLLqQhPbYJhdMypEdES8TnqgfAqocj3YZtqAe73J3h9bQKiUALa8cfDsaL",
  "key7": "3K8TfxCSzCxVAHSNQkdi9LcVpEPk6H4S99QcLGRhrKEqZEMkJ1h4kq4uphVFhZPfkJXaS6gGms7XFkG59XZ5Dm2E",
  "key8": "3DUf6rVdXtE1KWRE25zAA1Lo4rjQYyVm93eVZYTYWsfQL5QBZmuJB9o4B7To9MZoEfsjqpVUuEkZCzrdWB4H1Rro",
  "key9": "56YZj4ncngVizjL9E51Y61QLPXSbDHAc61yGMX8UjkSXTP296jry7BJUGAfyzES8VcfTcGcyBu1q9pCdsrW1n3LK",
  "key10": "5QgcSatfbr3B38WAV6aXeN71VzK9b2Uvpmu7pjov23sJqx6nkhFEPTJ43vkN9jdXdSPYsQbgbsJyAyrW32G1HcF6",
  "key11": "2rAhpWWqAQheyBfc3nWjsxPAckUokrs3JUK42LidHFjhqnVEpGtkFXduRRKspjaRFqwyM3tnt6Zi6HzMU6up5kyy",
  "key12": "25UfcwND7A4MjkT3QYcKQ9eNyVVu25WFn6ZRqYDbsKQNjB6TT1ZzVxLtk4ko9fasaUXVjbj9y9f6mNjkt2pRnkwm",
  "key13": "385tAX4oxzV4pJ1Vjmju2xdN1vzQ8FKqhkoPftZbzqK2kAQ7Cjw3ydH4VoLngzowFYk4RJLJs55xwhxHxxxpyDy9",
  "key14": "3YskFTrNmHAFTFRtDTSrFWgCprvksg8psrK9G4YfBgPG1wipvFpuWbW27s9KBxKvqzr3CMdogiCasKpqCi8j45oX",
  "key15": "2pfUhhtWHU4o6HxCf6YpriGUmTqFkBjmWeeNQHnHVUwqKKNrb92G1mtLqyPbpaHEVqNzPyiNhEhPjiqxNcEwKogk",
  "key16": "2PTbWymwZEZcP6pZ4FWTimXPW35kwwzAfEc7NDfSKLG1UjkAYmY7dMy8nUyDAhXdHEecbofY7u2EqJXq31UkxdMU",
  "key17": "4V4xfxt2rqnghGpnmrkg9f7UgSdokoenYFrB1AQE1tDq22dEtKqioGF16TwXfuQBbfEYxZnyrZBr2zP7s4WcVQft",
  "key18": "3YF95p1f9TZt5YNZvmhP3JkrZuwKzvQ2tVqiD4qZnfNz2KLguwPEx5VPa5y9MwcxtZ15FWXj3j6C3rPFFqb8N8Xo",
  "key19": "3yoKUhwyWteYvB8Ht2PPgetCHC3NZfpAXSKdoTkg5sXEWEXL77e98WCYppWRu7uVM2cymdPnwBnbAmYG18ji1ixB",
  "key20": "3ua8NkWVkp8qZu7soKEUSfaRYuT7W7YkXSU22v12AVuYTvpDQ9nkAGrZZULu1Fm9PNsDwpapYkPCEYZqCiMK17H1",
  "key21": "2TWkUN8nVn8qHRu5WpG2R9BHAQXhfmCiRuhpjGCvigQokZG9PnFUyG13eZTs3N2NWf4SXCMbYw6FWnY293VSdkro",
  "key22": "4M22Bpnb9WgTMfp8CC8Uh94HWTwSQBS9GNXSAMjUFvxoRDWB1ov89KoN61GYC2AtE9GMqKXYHqzKnEuoQHyiwqbc",
  "key23": "48FuiMuHNQb2kDWmNhtKfpiKiBtWDgmCyhHPnqyfGMWKEEa9J7Tt9PhEhRnTPSaPHaowyYMt6zZ9VZLAs3sMKg4q",
  "key24": "5j1UDMc8EbfkyR2uqHkCA7957c5CA9rtYeWbHyTmfupXgm36oubr3aWNmreEkAzUSSLowD6FcABJF9r7u1FQtAjw",
  "key25": "4WGdhU5qrq94ZHydUuu8NQizgLP51qo6KBmbqC3yfidYkg5GF6KqJ8DqJjQXVNLwcjHFiZrM4GKffjuV8RfqA6fS",
  "key26": "2NrtPdF2mFGoPLEtTF1HMLynKCUDYPqLLtxqpsP6AGHoQkenQdgMB4zHk7aoi2tjxoGAAKoW824WDdG9XfudVQSj",
  "key27": "5JcMzTQ494tMzfjiMzaeyaT5d8uXPR8FMebmvCV7oTW446FLcPycJgkigCKYB7nvRjBVpizajjKVWwodNvkSormm",
  "key28": "4B5SPj6gRNh6g82bW2Z2sxUjnZ2vWVq7eHjvWcMVGsYWPhSvLwdrEKTEtnpGeeNRAyWyafDeQKRNbLrdnFRw3SjM",
  "key29": "44URTmNCVwuGq3PiZiWZkdttsxLezndMptWV3eqBhHZRHWBd1To5oisdGtJLDTQ66vjGEhgo4NkQPnoKT28NzbGn",
  "key30": "3E1GZNWxp53Yvz8VeFegzRccstcKUmWDHVmsw8FoK8Nnk5R9ANoKesquXHHwBhkPUwwZEWA2Mwmp9AKShGj4Rjkz",
  "key31": "5mopK6QMJEL3MCEjH2DM1v3LpHywTW55LbdGjAYPSkTM8EnH548H5U4GnyrETqhWULVV2mHXmucMzAvXWrRXmfKk",
  "key32": "22mFj7w8a5D1vuRi3Cg6zbzrAY2jbTzSvH7St3Rq5rAQWV5y7qjwbrtufzv1zigeD78jg2xLymwAQ6u7ywJxH5rm",
  "key33": "3JBQrQQQCvEcvrd4VSqEJgRD5iNFFNzVkuSg6AmjVFMGPA3HwN4UwvwWdCBV7AwZDTdBUgAyR5UBDjD9enodPKDN",
  "key34": "3oMQ6oyk8e1uw9XemLFwwQ7ZSTZF4sfZB8zRW4p1xWUrdfArrMQNLrGCafBwB6N1SpmFw4yNm9Y8yiZzvLrsNp35",
  "key35": "Sx3mY9ijoNPWfWZ8R4crkPz25dTdzMAC6LjZw4FHiT7aLh7bmBPe6eFFnTuhFLgyBU6wnPSp7X5EtG8rzoAQRXb",
  "key36": "4FPsvZw8h2ccFcUsFvcJX945mtefVsDoHPs1MXw29cNw6Np3FAvkGtADqq4EMr1MhZgygGuWGPMu2ueStMPdcTm"
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
