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
    "5eehFC9Kpku2jGi4siCrk6wkGcw7DEp82PAh1L3JLyfy4AWdp5NuRJduqHpWdc9GMeD6E3U2BzroxMrZTxVp7RQq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "48QtG2R8jp5na9vrkCWJjKcYgMeiKjUqAYSZwy4jiFs9q9kuVkkMTgKESn2xRsmqaA3sDw7L6LtvJL3S66VVXrPA",
  "key1": "5GmqRSBYS3o7R3sDDGzTSUXXDJLtmy8EtHBK9bjhDEGtGJtLLDZ7u7kibsh5Tjowqsg95kCjh7rAwitxnexhJWyi",
  "key2": "5hhjcM1ueJkkWEX4DkDjQGqj6RxBqGVveCUi6zw3d9Cymi76HWsmzbgXDsC7P6bx2dQq3Zfn7w92uZdZ58u2e2rU",
  "key3": "5cominRP1dJQjfNK2dWH6hoZ1aN56wJr2Nn7gjnyvHP9QqWxed1534xfaJVLXeDbCzbitWDM1G1LViY8JfcAYov5",
  "key4": "4HNgG4ddBKnujNi2TN7UMg8umvo8i54rboHwAFT5JEeRQeR3xpJnMW6nG6uPcyBJmufi8kVssWTVrGEcEQLvWYtF",
  "key5": "2hivGhV27wPgDGQP6jLf5KrB4CesGHgddhWDSUnytobLSdP2zFXGBKqppXHgfrDDmHL5LKTdTUcPwqiQKvXAw9PU",
  "key6": "5DGzstNnfbWeWBs7mHDWK167jn4RUAH3AZJnBBZ92GanKiFDh3u6Jucsbu7Rdhu4ijwiEQFKhTCwqFwE8cDEK6w5",
  "key7": "28ztJWuCyx4ZyXzcbwWvJdKBUgkkathG6gXsxCZxw9P5vMxnWMFxRLFunZnrq3io8DJ7H6QJpbQGbbC1iEMDeiZE",
  "key8": "ccqzoxqhnXaQoAV2twvHLJMKyu8sTRVMki5zwgPmySTLyxAzCfWqBtYdGGhmvGD7x1sfLGNebZXFkgtPtSxeAjj",
  "key9": "5MdV3Msa6g79q3gs4NRxtPt5LQQPTJTVfTumgbeD79ueKR5nL2BwnmJ3WcRDjWRpQmgmPWeWznmHgY7nC1BxM2tm",
  "key10": "5zQZMXepEzQqwEmgmu9r4GfBKyviJThSnxaQGkBbMgU1YVkErsfd2yHtaPioCPWYMxdHJ5QxT8r8shToHN8JhESB",
  "key11": "24oy8xuyFmmUAHiFhAX5sCt3iYntA6tS9x1ZHLLbVxJZEnUrftfoSuat82gxa19cBGQYjVjo479wngirUWY9QVq5",
  "key12": "4hHL2wayQkMd1J8WTZr7jgPKPi3a7xF6K9TEJ6yDQQz6yVMueZ3gqg9UwF84383rpM9SvhDuc3LAhuyqqk1gfMvn",
  "key13": "3vHrJKMZxj7Mvwthn6rP5cv5yS1Gvc3PDgZXaHUXGrF4mEbhSG5UjUicB7xdAbXTrVt4UWG7c156d7UtxqEmVV3t",
  "key14": "5XYx6ms8CBAwvWMsf7pSaiCaHiJZprDHth569g587KuWSg3EQ6AnSYvY6Z2eU1g91MaZmrWJqCQaUB1REJZJY2bz",
  "key15": "4BvA9gTSPoSE1mA28uKFaqus4UzfNEpoH41JA6MKEhquHMgudytbWvJLXvjqjSiuVhxGnVHrrZgG6fXjzDL4GLy7",
  "key16": "9GH9UxxSvnYXAzvbk5Yijhyf2jF8mXyNMf2V6p4uxsA7GD3xGXKmqx3BXCABU6BoHqcwCJqkYcWuuGQC8GSDqZb",
  "key17": "L6vn6BaRuQxEj21n6Qx7oqBvuVQrFQaLXgHSnnQRQB2pXYsC6vcbN4qgZt1GjUgrmu1cuashPR4GbC9D32z7wYg",
  "key18": "2UV3kqLvJsgfZBHfAmgyhpCdTLX7ubmdUsGcdP52VM94sD7vC3zkUwJCwxWPEdrjwKRxGM3fnNasNaicPKXvsshb",
  "key19": "5WsL4Zf37FD4P9yLfLM7LZVDaTdg2zbevKtCcCKVPD1wouaJeaNsAqG71odP6Ds2cX2ZbnaLehy3gqEPNKJYVvGU",
  "key20": "5mmx3ukdQLX7aG1gTp9QAdyLLd7ViJeJzAjKMQNR6d5EY29FrK8pKiMzirMhw9nAKyq4kdkiHdu9suwWcFuPcvGR",
  "key21": "3gUPS5CbL1D5xh5UYtq5XFj2jp4rxAoKTD4SmcdLVKuTEbywhF6dP7MibDGTacE8nZ2Ya11D2cEqNTZC2mYjTREX",
  "key22": "4KzCjL5CsTEXHkD8HrNJuo4Wmu1m7ym4war5fDZg9PEcJym7c3konwY1dGgqVwfUu8MDQNAS7vE3ChUZU4m1DGQG",
  "key23": "3oQcFbzhLGN8BnHmvtVbMU9sFjJTZjK3FDYJ4HTA5MnMAJAwF6aCGSXKCLc1iHcmRRgYYd5aa2Y5G8pTAg3q6nud",
  "key24": "2jwo8aB1DXTZTVv66kbWBSdGRafWqBiSN9Hz89KhWn5MSUSRdouS9AcetdiLuxELU3GyDwzBRByoZ5wVz2T9uVEw",
  "key25": "4E3VJcp27sGmu4MoyJba7RgHfxzNikfgdKv4MEx5PENaLnon6nq9fqf6Sb141EGuYL6scVZv1aE7ZoCp8si4Y7BW",
  "key26": "4KJUrUWtsu3CfgauvA6q9CqaAtuGuNWUDt7mWeScTRJC4SFrgkVQ1CFGA3hxGDpqXFS8s7UAo9i3KRuRE2LfWDLc",
  "key27": "3335m7bEHXY21cxzCLkNDaRXwG4F11r1jJErXWrhgtTDBjWJCaPBL9N5tv91GM2soPzGefSu1teZ6KpK35Dvsfak",
  "key28": "2NhyYRV2atPLK381YHcbAaG7znnfJE4Y2gN5z1j2ucNPaWXFmZhnBtK2YPzEmkf1g5sXgH9mnBQvWWSHEYDykjc7",
  "key29": "4P2UrAYheAP9YRXrhhdqjbkN8EkUSCppKv2NviHUoRbnei7aYyEKuFvayh2kLsGog7QoKj2Vr8uUixGAsNKdcg5X",
  "key30": "xZFV9TAAzY7uz9mqzv7fLcH1NG4QTkDzGQS2cVTj4CRQUy7eZrRbBP8CkJUJ6HrTGTaJpYp2iRc3HdTaCy9PtgW",
  "key31": "SQcJDySxN8WZjg7CJb3XnLaiUWY6hQbdrbsYacmT2Lv6YGRr5krpTxDXCEaYc27eJk8Vy95EM84s2jA8PGUr7d8",
  "key32": "62imqjiVuMUEZDEA5GmCv3ng1gZq4CUdkC2g5YhfTLGMbaBXBrTAvbcMR8M8rTATj8zXz5qHxYNkt5CuxNKujr8e",
  "key33": "45Ko2g5kG35qpF7am7RD3GFqHKhoKDdQaGcc22ioUaGCmTRpgAmzWM7DShnjSVBebJVNpbsyD2jHykLpWDX2yEfF",
  "key34": "2b8sHsgk68Rj5cYH5GWnsBdw4XgsQeDoGdXKyL89HALAYoPko8WMgZS2C1yQ9EWfMHdSU5TAX9KzQgJ52vFzyqgo",
  "key35": "ua3kFwNBi5QAvv4ZXt2dNt8Pix6Jkwu5fDj52QVJkirTtqCuBkt9SRwrr43zoUwiA8FeRsDHiM8vwFWS4enzuVX",
  "key36": "5Uvu2PaFuGrZdYcfK4TKZT5L9BKVC8XUMidv8bQPJvcyY3BfHyYH3TzfEEkkAkvs77pp9GcCEvyvcDfJ3kfR9fLR",
  "key37": "3U39RAZPgYew5s2KcGrkRkUfjMNkAfAVwaYsTTr1frtRLjgyKx9J7uQymbbqVc7iXq18xXaH6GLaGFqGPJLMTUye",
  "key38": "5pZHtPmbaPwJFNELErsuonWEVrHVDg8Y4eDVKGV2ijG748MJsxAzZ6tLPhnKWgvMSYMekpsubSPX5N5MqgF6oq8b"
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
