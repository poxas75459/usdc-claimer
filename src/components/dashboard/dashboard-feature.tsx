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
    "5SpdtjBbZgRxkhi1gxhGfZ8xwWzrHUHfLVCPwjAoqANXVtS1FVWi7uc7adHsJqC4k4Vuyey3NAHEPf2hJKkzGXUz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2iGXr4Ktn9PZqizXsQtSSRMuHXa1HWqDkkMstH8ozLSVo3z7kUhiKjpk1mNz3Vd995Mk7Ck9jQ9VBZwWqkmgvJF",
  "key1": "5bfJsvKV5ceHXzSBjnGGrjghFDRQhWKhYMoWaPY4df1v9bb2PCmoUhbpJiUM1rYsKmHFu5cwocBU6GBBy3TahWg2",
  "key2": "2vm9Vs4yy6mfjUFWFbSTQNWxDLoGBjCtAxH63edTaKKvsxL9dFbLB2uxymbtTpiYMkzDdCGQaztebQP4iunMXoL1",
  "key3": "3k3etoA3dQWi69VKDNXYfkqiSNjf7VnyiR7f1gdGyLx7b7MmiCWeAYKgWkbrwveCVF2WtadCwfpbt1UpSS4W8244",
  "key4": "6Wfaki4Dzn9WnZnrWRePCs8wwTtWiHUpkKZvmaAXFPvhD3b4HDfAVGWTwMAwtukH8mmsn3c5Un3kiw8EgnGtr5n",
  "key5": "1AwXMJZ7Yfw6Z9CWSLMy31bGdxfKk5f1FFdAjDwp4NDd9Hy4kxrjMRR2W8HuMscn91Pf2KETxKYM1ks2w5YAatz",
  "key6": "5VYtrkuW9VjhKgzggMtanjsMf3ikBemz3V3v86qKya5fAck54naFxmMC4Fp1nviasUcbhqa1ihHWWoRz8e344aP2",
  "key7": "d27o4KQd72YmyEjxWeU2jxaT44QSz66F3o477h2paUXV5TJooMQinPqi1QnTvKMJBVqBMg5zqqJxQG41oGgQkkU",
  "key8": "2s5q5uC1n7w4k3voW2HsNh7KVs5oS8CJJL4Sba7HA9g1cWihQ8fhCszwZHBg97Zk136S97MgZiwJUq55Njp3AnXZ",
  "key9": "5Z6voXMhmWybTbCNVRfLNKhBJqQ1QFqN77hZUmV6hVahotGrXrSeogFb7TrVHwna8q7Hara18GD1WkVP9g5ez9ke",
  "key10": "4em6gCxhhfHpodVsM1sFsPzfepkoEP1UZhFRmqCDdogXzWm2xpS6sLz5PDrujbhXMftXYWqmAvnipFjUfczygYty",
  "key11": "4owMw4XarbL62fAy61tKTfVjyQEhGzZfzc4wKebPJmf4FUFVvDsVStZmisqyEMe3gNH4VSxFYViFPmYDhQocrTzU",
  "key12": "ivbYWFqMtW7hNiyZdpCMX7goQTtQKWqk9wepcC2hFBPanvaEAfz3spXkrkem8hU7EjsvVPLf6ZkFd4iBdVRbAse",
  "key13": "2pkF8c75tXjhPP6CzuQmR2T9uYbiGB8jMZZkq7ruSc739QCyV59c2ksNKU3cTQLd9zjBu7HdBYzpsgmxQuuGMjMC",
  "key14": "2SjD9W4ekhw6L7rVBj8kMSrKJutbsbb3tbuNntUNbMqx2LmupgXFkeHETFgJQf3kx4UjYgMukEZZxUAxBPsWr5bK",
  "key15": "3zvjxFuUvCGbiiRTKoeQcK7BnfnbeqTmQSsns42iDEocVn7VK1pXYVUUoXE8GAuwUuctq1diu1iDjpUu39QTGy2b",
  "key16": "5SsugdPqka5usZbABwtHFbYq8CJMQ5FuXCTvtw7BENQMGkcys8uw93tZ91HeryiQ36MqyXT1u9Svh6PPwQ53qJ5y",
  "key17": "35jHA4ToGhwVP1EVo1XtRLjECLyx2JazdouGgc9fw6M62MYv1VTMgvpcATibDRX1cmyxeCF7vZ7vKXEeLfEWXExp",
  "key18": "4WEDErQLGS5aDzSus5GrKoR2W8KJAWYjVR65M1Ht8iGvuERgnnZ9JcnyRdQUvEVvAw59DzxcBn7xcARYa9oVMKh8",
  "key19": "2wTiHGcgD2FgJJnJqAwREhxFCEmkiVRWwmQeChmzTQGYTpCkfA25moupKAFH7uzRkRQgNCJYyAu6ENXUKfzJsZvs",
  "key20": "5yJev7mVJiNw79CBRxkkbV4XEwAVFhYMnyzBgAuoZFyqon5vjQb6yim6SkfSaTYDHUtBH59P1qDqYgZkbnqd3hzs",
  "key21": "3i5xcT5FYaixVnm3HdxMaCXriqzkx2W3CbM784ZtnVq5yt7sFGkvWwE6Bp7nXgPW6nnJ3mzAUbD12X1oKtsxQvSs",
  "key22": "5t5S6oVo8NBxUGD3JqL7F1qocAWDg5Qe2yQUr1U1UeHE3CL8rM7sq4fCYEDpCBpqA8ctAvNxtMArtDr9WsLtikGk",
  "key23": "4TG9WZbtvgA1gtHBEF9dy6ed9ckDXfLUJy1GDW1fjkr2zFSCGFugQA5aNC7d4HpU9e1KfwagmLpLjsqwhcgjX5qQ",
  "key24": "4hKk9TNkpnzs8qXQPPNx5oiGnjjvpsQ6Pbxt2BQtGqrXko17cPnoFXzPRXTDLZTiU1QLYc6hgrwhhvx5zCaeyWh1",
  "key25": "3Qxas78yESahtXx8CokHYXxvY3RXFA4J4DJ9Ee65xPvMRERg5SjL939BbsFVLgqXkr2oF3LKTq3kP19BM28ynBe7",
  "key26": "4Tqs7Yq1SdJ7etBZp45uuM7eD9v3aQLosP8WkVbYXsfFTg2w6usSSs9FJGewAzGFVfgGkY94Vw2Fnt8HJABFDjNZ",
  "key27": "5QD8rC6ofpWZ7BFt4xux3s5kKzdtUYuZHqHLwPs5DL5QpWbp1fKWXvdcNu5JSb6Z8sWxJeeb5aegZhVMbk2JPJar",
  "key28": "5DZqhQ5YdWY1hfNZmAV8EDAp21msgzHPXGdC43JhDfhsckfANumtwPNrrneRj4BpP6am65niLjyS6fDUUjKACPgS",
  "key29": "49BqLZ63XuH4JdJhjvSMjioZMmvR42VTDNg5ZSDKqPug47bRN44LNvJMFB3PQN4dKb5JFygZM5W45ph4kABGioRm",
  "key30": "66qK78bBWjQ7NFDGn2HyVZaz31g65v2d2Q2RVez4rtSVXx6p2yGxU1egtZGhKUNQckYAzM9JwxxuCVLkYbUSRd5c",
  "key31": "3qTtSDvsF9Y5GSjVCUXPhtXdQinY85Ubash1Loq3bLwU7UpSbGxbFc4pWe85PP5PLzaRpDWQZMGfr5PixmkT3YPG",
  "key32": "5VmyksDrdvCYdxgSNHZhNwbcPQYvALL66m5JhozeKGBPbe7r5283hyRZj8LB17jFQSiYZBVqe6GcMnV5bu8ra3Qf",
  "key33": "5zNjnBTpDRS5e4si8uppdMxYR47mFhjpFfP5XNgb3iXGDsKMMYhbtd1KDbDYc8cURgQDbzZDEbSjNNqFjbim6eEy",
  "key34": "5XTbj8sBNaCA5w67XkSTRP3xMyjPMNBMZxhJs7XpCrwzHczuMHR9td76aPeMULDqnLTmkWaBNddXxYq5rdn17py9",
  "key35": "5i5i6HebtpSBL5txkxnLz8Y6ZiUvi3AgzWtZuwoFaEY4ed7wTLfNohBxrkf2DCEaXRdn53u79gkpbeAJXKmZ1X9b"
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
