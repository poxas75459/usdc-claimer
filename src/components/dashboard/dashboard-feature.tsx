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
    "2fiM35ay9x92fZWm1LED92JLsinHh4E3QoE1VBAsDShgcSRg5LCUqEQ5cdzUM6WpFN5m162zGivzDuSqXGgB3zpk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "qPHCM5yswKLdYKEJvnn7y5KhPi4afQ7kf519kjLBK98G39gFXSPEMtdArAzAnmobmPauCeoZAFBDpQrZmrP6Snr",
  "key1": "3XMRX9bR4iQ4ovjPoxEHKTDB77r7vbwcxFxuyFLMuuLgA7kez7fF5tygswNEX8aZ9wAgYt9A97cbpTDFnvRHkV8Z",
  "key2": "3ihq1D5hHbfcrwPtAc2kM91u56z1WzDbkddjNzFF6iyDAxNPwYQ25wj1NZPePFm1Y8BKhDBfUoZmnRoXftqTmHKD",
  "key3": "3ikecgGzfFuo9GWRFBGEgdrh3CHG2JwYa2Ytb2k1K9vMYfFpVN7P8XP2g18PNKVDM1g1DXVsAdbXqCmrqDuTTsMq",
  "key4": "31L9XFh5jFMkPjSh8NK5sgzcNyJU5v26EC2yEkZoVfM7pLM4WxH8YWdAKGyo1ZEx1eBxrGMjA8C3iUGRWm6tj7rr",
  "key5": "3emZT2aGvWvS4NXiwWzodSEHPL2rWSkM7DbfV6HT9RXHpTtCs47yomTM5N2XekX4vSvviDj2cS6y2uAvxoMwLnBC",
  "key6": "43aFwyw4u9baHRwKBWbkQjz7hEjbKwXUggS9vpn99uUPay4uRg5uaAR3bSrDTaYLnkuREVxRVyboG71FZDqwRECw",
  "key7": "7aM2Yp9Jt2asmQ51CesJybtdXWiaLVaX19Nq6zuqjHgGQVJ7WYwiaFwfpmYX65hpFmT41Szcm4Vwskg4eqjpYGy",
  "key8": "3nVV4gfGvkwjSgB7rpPxHY2Pms9FoCJ6FFCxQgzhxPNz1d63qE7bhx9Lp64aGLXrnVgZm6XEAdoK1mg2QkUYnW7f",
  "key9": "4bFmHfsMXKg8SygootKf2KP4AmhFWias5rZoRYkGCEHLvetHmPLkGKMYvJMWbjGP45baQ1jebjkfdBYLLqZtgCXP",
  "key10": "6c64sFgXhUAqCjaDZMy5uKfFqfpJYa19vca9kEx7RhyrnPtdEuM2rvTiBvHPp4DJD6WeVxWRaBcmzDsFqg5L3Mb",
  "key11": "HYFvxqQwzjFtknJMwiBh5V5La2vKs3qjKkxZN7BY9UdEudELfkUid5YbSpLZkaQ3sVJidVNLTCHyQhU8AeaBNrw",
  "key12": "HtXxaU11bcvb2xsYah4nM6tXqDd5Uo2rPFzNnPkRKtLTcyATdNd5Vj8dRuvxNx6NFJDqxAYipHgQSjEY1oSJ9JW",
  "key13": "39pfBC6rGaoY25PbUc4tvoTqXPkbSBkeFVpPrTqvUkpbw86K5VEcBnCrmJzWcMPNZfJiZveMzZEBv2Jki4i1D3D6",
  "key14": "3tA5vd32AksN53DyodzRp3NgehAUALgpwLSRZ61AFLQZuYSAu2zZnw86DLbzwzWRLTYKQNgXbmm1uFBWdkJ5vzJw",
  "key15": "3z4UgaeFjgY8ppJZ9AaGXqUVgDf6ngDkmZtGQPKAPjdQVYBvX8pQrStSPSR5twA4p1JbLhVRAii4XaR732rQ6mHv",
  "key16": "534xYqJtgU7NoHYhg5rXxCqbSLFi1uFbw68X7H3QdD2GUpN8bSs1wYkXp9mFy6cL3hKF78Q3oSKHdGKVLZzdBujg",
  "key17": "3G5vXK2MbHaMKSh2fJn2SJ5j9nxh9Ttwaf9Bp76DznS7oZvYt4XQtGxJDeAkotYKpRHFg6khDVmxuhKPcnVBsRzo",
  "key18": "3VUZkdE4kJYbz4dxdhwYfP5KeJCUSaxJLTiFK8N1SxvaNCfmeXvAps3Fy1G5Wio31Bsa5uzKP5dTEQgGHYQuRxMK",
  "key19": "61Fs6sow7bSd2CtHaygjNHBY5q1HBsK6Y3c5fEkqAcpA8cjpjSq19iPcpEw5Ni7MfFs8nsLJvUAWf4tA3dyg9Lxz",
  "key20": "5smY4385yK9Rqg1aKn7YPgMFyzpMp2Ans1gtZP1GDdq9WCNmdNiRcsRFnLtTshLqFaAqe7EzW5C8A9smiAvBND9",
  "key21": "5GHvwL7Myk84ZGQQRzYYsWhmKDBDXUxbv5h62kxfRRaZfFBGygd1MEwBVDBJyGaTB9ejYyXhWp8K9SwtPXh4WZsn",
  "key22": "5rsnsvMmMCCs71FRDLEmTes6L9Qh9PyV53XStMGheJX1nChcT7FFVXjAN43vSekapammLUtmWoMr9bQY4dMLw5Nf",
  "key23": "4wkhmibUbK5zvLzDYZNjvLffjgKwb2Z3zG83Ns6Kkh2gS1ERYaa7AsTxx4rQmdrbDB2h8qhKwGJVpjZJNPFUwS4",
  "key24": "3DQXBEUD3hrLFuP2qX2SjrrqDkXew8fR1RDUwGCFcScwNyhvUTEZP2pengPW3QCNiSybdJhMF6E2CGYuG9o7ooWD",
  "key25": "5V5X8H83S687zvNumEHiYGFPQLD6HQHFR14JFvjhV71CXKvywStuW5t6RAR5vx72cDqi12H8kB9zhqXywdDTgNJB",
  "key26": "Gx12mbFj4MYGYcrQ9mtd8ipfQu7d8QYvcFUK8d3XnCt9C23VbcmDxCMDeChCDDHUnroo1Ve5oLEnsQWu5Emgjnx",
  "key27": "43VMEgJAkhCGXuz1Cd1Ph2NMTV6jRckYN9ZtbxiCieVYDMKVxkksYjnehzbx7VL1KDcG9RoAudV993yisPLSnreP",
  "key28": "4hTUHn25ijyx66ekKn9Yzfho4PrUChHMwrCp66CTMhvHA1Yqvgc2sgpdMqGEd9DWxMojJqWTQ7idYdqmTo6DAc8V",
  "key29": "GYFBSgUDmPHBYcU5fAEHNxCPQyLjmT4i941mYaEspx5H1W7JvisApdSwYmurQQn7mp6bwjfqRMYsc9zM5q9bjcw",
  "key30": "PGxbWxL7yTK8rmkhYKx7GEPezTSH6XaXKB7AzMmRPmCGKumZ2FuSR648u2WpDE5auzcZShDQDkTvf9eiBfbvYrH",
  "key31": "5Ajuc2N8WqmcXpiurxSMScTnpRjHz28qG1dJD8RJ3q5AvC8hdFERH23cA27JjCdVKECcMqisqb5Bkg6pc27pwnAM",
  "key32": "2NBkHWvfEHou5BXi2UU1LiFNQc36rACWapDxHCyBwKhp3ox3Uwmo8XsRqZfTXLXyEp5wivn2SRkYfr9YDiDqpk7M",
  "key33": "aKvND5qnRgnN757YiQia9RVAWhGrJXQBqGeeETvZYy59F1VEJi1Def6zhbyPSH9Ury5zgwCJd5mgedwHAoRpeiZ",
  "key34": "66kVaXe2b5UC5YBjdYXETfTBBZbuN56Qzuar9aGfdgibQjQ7Y12wL3VJxu2CJypFFL9a6yLBffXFtPRTaYwW3nEX",
  "key35": "RN7eaCTaDm9Gn7gkHxDdLG2FsZnnxW2ApTjDbKvroscXviRxRTA8FdTGj4fJM8dQ2t3RVfTqbm4kW7akquP5iKG",
  "key36": "HtY3MN1Mcg2ogPHDAH2va5KpKY6FRsmfinTcLYBQJtZ5DNdWJqvYwBharehGRiaQtNzkgyrAeJhyZBeeMEZBCe8",
  "key37": "3MVvSrSAM2LudpHRtobq36Tfy9NMe6dixZyJvxJrAVJ9PytbEkPVxscdsgAD5cf1R4R4LnDnhM4XRf799sMJpqNG",
  "key38": "3ncRxBUAHKtuj8CC1TR5LidU36NACgLotc53Nikjmk94MwoiWRS8PqdE6WE67gT1N18Mtc8PFiwhosnyAXikYvLM",
  "key39": "3UxxWTYrgEFHCbzxynUfX4dEHxLAL1VUR4V8vc6LYvzRezYp5GKyJN7CJqyywkCBUi3QSA2GsVoA9nBmGG435Kdc",
  "key40": "45moB3fcbVDUw66LvApsqDA2Rm5YEnK6jcES13tPxDiahxEazXLrHm6TPzEFqHyqNGEGS9pm3TZSYVfM4LPvNXQn",
  "key41": "5uBvbGZPHD9KiQuMBXLHpoMQjrPzJzrZ17wpTtEDHo6G7RAVYjDUa1auAaiYKDdDQ3QYkkcETdC16fvaz4DVXLWR",
  "key42": "4Bu2XM224ASs9aYQfAupjJB752RRgctuA89eYjqPVCVCyngHjPpp7BVB4PaKhi6bAj5LbgxWVif1xnFCknGxBDLw",
  "key43": "2kPwtFv5HfLGkFzZKeCq9UqfqsfjyHtz2or7FoKdyVfC3h87iXwF9o9bWKj9p9bPAmGqpfpMjUq5bG2xZ8eMuL2c",
  "key44": "36jw4xCR9yhhaqV9f9anXHzswcjQYPnNEPqcij37XG526nBptAHn4y3DgeJTro6pB4XtNFbaiRpT9iRgZdBK8P4k",
  "key45": "3JCW6SKmQCTR7zUskiQPCFAamnAdSC3uHyjY4UwoJSTARDzRcAhkxmH67cu2Nb6oLRZgBRjYwr1U7EEXmMNezGSb"
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
