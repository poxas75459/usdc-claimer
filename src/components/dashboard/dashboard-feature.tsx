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
    "4W3gs8yKkP7yxZehRkvePp7rcTGA2r85yNaLdYT1bc5Ad3uLPZJz7eqR5GfpvHfKD2rEe6Td4hLpgpeP2x62GTVi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2zyxRHj63DJBGigGx5XrMvwAJgJBd5ryiskUcj1gLkGhQBiXjsGkT3U4Uf5o16sL9XCH4m9gtaZizWosLTDZYYyS",
  "key1": "2QAr1iDBcod4CeZJr13KxqiaPdzA8peQqN6GEFzZwesvUec8avvuAVQ45D391pcx6qHpMyWqijopd5M3Ln5ZnrZi",
  "key2": "4Db3GfGc6D2DguQon1y8b2J7GgemxGmL8rQshKjXZxtJSKkN4EKLHuWPvUT7qR4po22mYKGKqJSNzRvyb6RxjCXZ",
  "key3": "3KycUcyLxeBxHqZWMCVxEyzPCXWdpZSztCi8MaJq9ff6M9ywf1eNGF6FZuBUr2KQrY4t3P8zwanovTFBvnkWv6kN",
  "key4": "uZdfXYvZ82bBn5wxoJRxoLNUiJdT3rDjEYXrbBusPodfMK2hQuUH57Nk1RHLC1TXxhrd23DsSSVyjrEzAz5kd5r",
  "key5": "23gptvh5zwBTG8qL5qPXhaMPYJEcK6pewNt7amy2xA29rsquYKRr4tM91tWx8eRxC67vAd4CM9WzSJhTMn3aDTaR",
  "key6": "3N5sWP8cAfX8c2yWyB9bKJmZb2VjYyMozM8JmciYgKpNqCjwEuq488ReQwhG6iFPVRuHYVWHTbo625t1J9GfnSEE",
  "key7": "5KcPAeKg3fou9BVZi6r4DBrqCCGUyyJ43KPqLyDauCADmiA9Zfkqc3dXnvxfmBvADBYectFGsN87wU2bo5gtxUEb",
  "key8": "2rLEMnLEuSCvJZ1raG21oGqYvFCGvxDFeiCuRG7T6UDMuQZCbfaVST7BtaGCE8dMrs91P98VmBVgNkJBzB1pBuZy",
  "key9": "3uJH7sMXxjr84uVTPSGMTjDdtUCzumPQQ7EfFyj9YnBFP7jWJo5AGbjCq1jdWy7jRYAT44jcWDf8FhZsg19cH6q8",
  "key10": "tUTZpVrQrBmnXjjJqLgPQNLJ9scSvJWpwnjSc5EsJSaVQkKtNGK9FVRtQP7ptYtftohQehby4e3Kw2Y43Zh6seV",
  "key11": "5iTD3QYn6JQBokFa6tJWQyWYsjwMwD8Q1FnND5JfbNQwvBfXZTGHqmdqqLU8izP9AYHwzkV612ZJu6YXGADGdY8V",
  "key12": "5Zp8ZNP8AJECVn6ssdwTYV8KThLuK2gQTMyodC22jDvT94arFU5YQYs1Pa5MT7Jwb4e2C8nee4QcSUNH7tHTHaEa",
  "key13": "5uiTetsHxpAZUpb7SZjeshU3afpHgUQbkqi7j4SA9GsENz6ANfFueDJuKKoBgrbyU9whjn7SsFNhmLsvUmyysjZ2",
  "key14": "4LeLfL6vdrcbCRGXw6cwHHzUXwUV6JwSc8ZMy6SsLb9E59Dy75rPzKaAtF1bJpEoshQy1SDTuseCuoh6aGEG8vqq",
  "key15": "29MN6hYM2f8oKavqCwdaabquQ3Ajxz1LEQMjGYFfzjkkywkZbGu3hNvEqGwxmzrk577csXU9GJYnU6b5gy46Whff",
  "key16": "2MpDYDmveRh2cabW9r29vN62UT7awWFWk1dWr7hAudDov5bjiniKpbovTZzFBLdxVmg8JKaXCxMvvS67CVzJGeNe",
  "key17": "4uqKKUtM9b7XZdx1U6i73bEEGERSqseyHph3VQxvcFc9WMQmXT3xoCAjqCyM2Em1XJxefCLd6VBwC4emwyPGLJ2s",
  "key18": "56ZsPhunTYc2of8szAdgHoY7Nu8d5vgghDu4KUciWV7WCL3xnYGyTGKDMsdRoK4m8P6GgCrMXBj6m9i7yPNHm7sp",
  "key19": "2Jy1XA8HNM2t1GzSgaLoDyZJ4i3NkZncne9QF7rDobbVcdaEjoM3CY4uJrQyWFgChqHP5HxyuCQBnYqaFa5CWb8",
  "key20": "pKkxEZocFdipbTi2yicvM7KxfkmkVyicBaRbABaxqPYWEAF4DNCNZTZMn4seFLTi386mzqDggLZ3SM4Qqqbtz7B",
  "key21": "4vVjRHL7kEcHNkDVVBMMWewa4Vtdk9ZCLomTUdaYfgmqwADtV1xZS6k5eyFgTxG4vffU1ScD3opNwHok5FrZqZdA",
  "key22": "4tc1pWkE7MVaAvm1LLjLoRZawC7GXqRHcwjrevED15zqsiPu5dHboUW7rp9Ddr8CBwZKyH6V1YVPizCQEN17etAS",
  "key23": "4KgHBHcuhuKsM6jjuMGHiwGrci6Lf7zyXHe2G8EbiG9BLsqRjknmdQiu5ABfVRHyfffUrBuKZttvFPg5uHXvTrUm",
  "key24": "2RR8WQFok793VV1YPqaySZuCPapRAsc45t4zcHHwi4ruV8trE4Q9pN9tg2ZxViuNSDoeLE6kgwos1nyqxNafoBFB",
  "key25": "4btZo4UF6CpHLpuJXBe7Fva2775E7VmrJvNA27uCwcb6uNu9TuinNJTAYUHM4aQ6GxKgVoT54LVjSBagy84NcmS5",
  "key26": "4yVZayms1FRHubsFNsnchTP8sFnCu3GFRAT1xz2jtymXgLC5Qz7RsVuY2E9ScVArg6w25T8MVdSXojMqmSwFeE8f",
  "key27": "4CazStCkAL4iRzPxUjyodgnqYhMkpbZUkDmhVcBDoamAbqPDi7uDQQFL2SjMyUUtZ7LjVwjpBXn6dZdDrRx8aBCe",
  "key28": "5quCZGv11pCy8pU9iKuNQei1wTKU7BQcceY6BWBVbaQZAd31mu5H3GkhUGKQrpATmChkF4cnmB3Rxjyt7iXgmQQE",
  "key29": "64GFBd6PkAbK5neFfkrFHruMwUaaN5Hgf8yHimUkSwb6WCWWrLdCUX1py42QFnzBtFd3mqfzpS9Yiazn1s3pn8Bs",
  "key30": "5Lq4faf6T1bDnYFEuCMyPyvEQSz5ssUekvih98BuCx3ak1JNQHbrDCKUTWP7pacJL5QYUKipubh7yRjDbcBhDJnG"
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
