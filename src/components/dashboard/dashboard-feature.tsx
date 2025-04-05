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
    "51RDJtD2K9T15tnqMesBCCZ3agyj74zTnLugNxgqpnt2NfqHqYFojSG2DPns613Z6TUUnSYS3b6Py5ByTX6yMQrH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54oX5C6oQtStVTB1LNKzGD4BmzSbQZBsFKt4YuiAa8KYWDs1Zo1k1vg2Dtz6AU6mXD6Lz6xLDWiVFwvRa537stTX",
  "key1": "AZB7GHkjYrhnN34o9j5v9Tty5TVkziE4eakPLAa6t1Wt4GdkU2WAd9srNpiPA2hbsnruWDCLLEBHqFpGnVo16fN",
  "key2": "ERM8373XHWVv2xGuLge7wKYkf1WgJyuTxiGJBNvm7xi33zhdPtFGvbLU2e3AyTXHcfoEyijc9oaHvzAwnbJXiBT",
  "key3": "43WajU1LniHx3BiKFhKk87GGzcntWji6REZQyprKogf7zNMLpkGFY14dJ3DZD9N9SxFZiHbKtMaUbjkdQiM5Menn",
  "key4": "4Q9h8wwDKnLPRvosMbys1PTFfMRzH6BbP7tpqqs56g26ctZ7xTk3ZurUJYytCUfk7A4vzysNs4ZrYCMFRfXqYhk2",
  "key5": "2UPetyqZpsh5CEBwLJF77uZCJhfX5R7t7LjPoKrXaHq86uae4gASByUk27TDnpGRHbUAx5F6a9PYLQiqSiapbZca",
  "key6": "5zgTutkx7MRaHxkixdTs8ESkk5Ftg4S8Miyvz9QbZwQrgRrN2F9e2RrL4hWv2LRzarb1r2T2KJ9PnJKfSB29qqEC",
  "key7": "4Fn67aXPomKrM6MqqwtChTug4wQcfrgySgSKr6x6cmH8z4FQm1d8CzGggxx69cKdoTCzsFin3zNgf1aRnXwFPGEw",
  "key8": "pHN181pWppMsjPfvKTkZ3NAu1QjieBZdMSpvhgEgErL23kGTuWUqGTzbzuTPtT4yF14myLN8xJtMWPvyPKiVaJJ",
  "key9": "2pWHf3h8uD98EkaVWEsuWJW7TECMN5QLtU8SMqCAM6EHV84XCq7HBjKewwQtBkfuUCjxGhB9SwD5PDCi4HYzKK6K",
  "key10": "FncjL1pyofgg3hWJC4hns8egJ7rYhuZpUuFWqYNLy5xxD8XjySC2toT4EiGFmkKF5qkj4vooCXTY1ggMBxb34KJ",
  "key11": "46U7kJkx9RG38ZTiYpX76UyvrSV8cRSkNGxLWvWEPuaHXusYyHeSNuazrap9RQwrbVSqDdJCUyLGznfNscZAPTY1",
  "key12": "DHfnZAx9FCFzGvA8MWRUAJmft643h88G56hHSUsYWsy8nTBxdrU946ANiohw4ndpUMLcqPX5R3YxnNAeFMRUyZ5",
  "key13": "3CcB1xjXs65tEzVXpPAHi1tZdZtTL5UhnTs29uMvpugWQp4ZrzPbL6rZXt8AiYJJQRCnpMLdcvJtRZJQsGbaBCBv",
  "key14": "zSWjPai4bhqurnzP1HPj13zhQmCFjfeYYEzTUyYw9iDpwhaWRAEc31vx3Fee5BWMCPmE6WKGXPbjrsntdiWHZWd",
  "key15": "4fugmKqCviY8mzQRPTMTUa3g6WwRQzwkUk6vJp27pnMQ6SmfTnVN8XdaxWjPU8BzhkPBVECbbq8Rg4ZV1AKhJBjH",
  "key16": "4hieEksT27P3KjBXBcJaWtC16DDaUnn2pZ27nsHaJ8bAKJnteYSqNFrqxDmUepGgUpAAYXeZhUC7t5tBhar8RTGH",
  "key17": "4KAimsm8nLnvE2S8mSPFZt5B2VtQsWPMsUeKh7Nj5j2CBHBgZpwVQXdMw1nuXNAtdXEvT5cTGo7aHnV7dtrGCayS",
  "key18": "2C5V6iKzhULqNGTo1EyQnWCrDPYPVtB8B9uunX3GahPVMjxHfgyU3YTsEqQb8gFywC2GeD3z3BLrwvwg25m34mxG",
  "key19": "32odxebq8BjiCV9EY2WbRj6gbpAPb2q7rS7BNK9Npn9etYVd71tG689gzAYVZcaEcWVnchrBWL5ZM8XdGknnZP4q",
  "key20": "2fr3mQ9kvMxGG28GMzTJQaj82PMPZxnPEaK6FvqQeGq9qCAMn3gyYnrTKFKfjgYQ1XqYHKWVg6UNjKpB5z3J2EDS",
  "key21": "yV29j33F6XYpuawjMuGgDGBSApQa1g6Az3c6V86AhpacmDisXsawU3cP3jNJC7Hzj8BAE17PJtou8ZupZF5SfQ8",
  "key22": "4K4oFtDwSUJa75CVS8Bw4MDeXyVQfzu31gXaRfF8ZZvJMnpi2gNH8cWmwRt44R5w7MoSN6tK7GggEzK4LdrvXEhP",
  "key23": "1DJQFSWEy9AWJcePquDz6jBrcvHEbf6E3t9TAM62jN62nbpJsYhj72eiSrYTiBTUS4hFE2EaPouze2wBi1frsmU",
  "key24": "4Roa6tPfc72jH43c5rREuiWom5SGQmVsV8Mc3a8kbJ7oxcYxFQYszUU7JBtjRyWTFXfjWjtxY6wAe2XL3aijLobo",
  "key25": "4ExG2UGuppsXLLhvv56i9kzK9CyKy5hZdTSzecVMsUcghMJzqdtoEAnfoRaNviGUS3QqBoZQeqSkV5iTfq1oKuEY",
  "key26": "4GQaRMyByHohi9Qap4GKCDknitw5fiSv9ihzWL9u1tkSusfeG5Bw6WVWzF3SvNmMNHKjocj6c5NNMkus1jhVu1mY",
  "key27": "3t5K1VbYxL1RnV5pNhv5vYxuKDGth6mHeynRfUu8Z1kaSEQc98Vo9ZDTXP1SPtoUMkQEneJ1ejzpADtmsHkJoCMB",
  "key28": "31EkeaRGdEQsqg78WfFDrHA8A12EENWC5ywFMv1m62KCwG4yb3LAcxLRedVKQYKkQUSvxfX1qFEe4wB3iHkRsyDt",
  "key29": "31ShR4Wgq3UcRnybpaUwTUGiXcfx5L6AWuJ1LT1WuxJwAKUpNzEXBgoHpu6deL2cLoh1vPJ3YxzFenD27AXv9HMh",
  "key30": "321yo9mEBk9fApEtJ2XD4TBEDCEkRB9M2Egxd7XPgDznfrByKUvS31QauCLP6PrRyD5qxVct9KqTMTt4kjAk1VUY",
  "key31": "cRocVFaMkkkJm1tLRFDWXoSgsq7Ynbn1k3rG13mA6qN5GRfDNDQFSJdzXNNFvfYT35cExZB8vDw4sUbyDdtaY4y",
  "key32": "36ng5jYsekDMFn1NCrCvhbGabr7DixA5XyZKXBZX2zg5GbaKWAke5WWeTtEZ7fCdbGqRnhgPwmXDTUr9NVB8oE6E",
  "key33": "45uCYHjKeGb9FCMCPcdATksTFxE1YsGrnKdALYqAvTwLp12PRDrDBCkMSqJvjURgHxfJUMXtRiRsNLDgQxTSNwmh",
  "key34": "2rP7Aqh27RSeWYJCS8vvKbHit8miksPyXAPB7YyyF1rSr6pciHu5VSgxLQEjVLmkrpGrjqHaBmyGJ8u5T8ZgJ6HR",
  "key35": "33dFHQS3ZSmH9zMdaqgoboQDdJ19NWWPNTGPKd4Wew6SfS7JXpEs466oJBkLqDYs85Pkr1KZ2uAVeB8WsNGkL56Q",
  "key36": "6pyqDGkN9mNZ3TfEWAUfHEmPChzdzw4JcXXxG6i9WzHE7ZjRAzQTEWmP454arY7gJmmq9YKfnmHueWtUnfGnhYa"
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
