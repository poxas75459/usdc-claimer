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
    "K8bdhTc2THbhLEfCXyNAXQpV5rfwiAEZuSXCnNmntYTB9XNnu8L8jRehFSuNx8xySHm3aVywoj9rHndsc72HJDj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2LSeV2SQhK4MGnTuM5gbTxkyoeUT4HsxLHPPd4FtuR7d3yPpLRn3SN5CnMVsn9m582GPautMAKvF4zgroPsdAxW3",
  "key1": "4X4L4Rbry9fGf1nsu4qKNETX7maMtTm7pS66S6pM9tbGJz4FsEqTZPxfQubQLjbsBKuXHu6gbCWNp2ZnNkHAQArY",
  "key2": "2AJvLd5A87MVhD6B4EtTLDKLVan7GUxjsUN6MncQqh64xETWyEKws9v8rsr4k76cYiCNKiBzAXwgtwvBvXQuiapK",
  "key3": "4PHgHnrRByRWZcurTKnPy48idu1ANQs4Vy7u87aayinbC2YC2UnzJBkxokcFs4a6YV3NgxuhA12BmgEqAbW1bQ3R",
  "key4": "i9GADJ9ciXn2HJssW1jSo6mpSFUDZhbeBhXuKefXFXma2gDNU6cMYqvSpM3vnTPGXiFX28x7bEvvHxdrDj9RbqJ",
  "key5": "3epjqpwbgYtNa4PWx2aqCbYJoPFjUsQqymvE1zwB8UVVYYmdPBzDyn1y2yVnWkVKZ9Dtb4ecWbD45dX3iTX8pzjX",
  "key6": "35Dp4A4aRxHRhdMhKhoc2U96FyrvpgR97z22XDmxhDdasYPj1E1H1HCmqhLv11KbmMGaYi8h3zrtpnriJKKSSiA9",
  "key7": "x4DEhtB1wreAcyyijWAnXxhjnigjdrERem6UJwyvbNx79BqLgtTwVXQQ2WAUUmFF5tof4sscVsjEtig3QtRDNN3",
  "key8": "63gVnguyjhJRWqB7A2dK9x3H2GPL5caQW8VVMdYvJ2DH77zEAfhsiP4opuyRmB54ZH6LdTE5d2kTvwGRdQP4RHjk",
  "key9": "2hNS4u6aKpZKbBYfUzvjAWVyTRTGuwMoTzPskHmR3sskVRjWGWjx74P35vYSegEP2v2xPhPHQDX3CHti9Ewx7LQK",
  "key10": "283JhVaiU3M3c7WWgEvWf2otGDiHZBGA2hZXb2UTxpALn4x1xbQzKmAR5F9i3by3imoKvLMkxpnDwRntxr58o9BY",
  "key11": "5SLC2cPXTfxGaWsBEPhRECmN9AZq6fXv5e8tzviphiuFhK5niLMFD8KYX3dXauFEipo9k7dsDTvzjuT3VSM4wpnH",
  "key12": "2SipgBbve6yn4AfddKSFkaJA4v1zg7pMWYoCyoTZE88opTgHnA8us6mCrtS8Wz8AzU2B3ahdJjgSJz8Z3HyV9Vx7",
  "key13": "Xb9bX7zMEtL5cbdXx5zV8hymBkTa7rwSXSwBZBKtUktYv6nqdkocKH3yoMn4vjVLn2632qwks4yhqJHBEwNjDCj",
  "key14": "2fFs5csmNMbswLhtr9A6sF1RtVb1qdVPnwsD4SoM8abjHQwbNuAidES94QEfEciKzN4Jfjq4G9bsVJyUPdpW4p2K",
  "key15": "3wdiPSu36EkHD14M6psJFGYefeV1T5RTq8j1roR8LZVF6hVVjsTXURu3f6LxQpg8pUGzm4JJ45DswP5Jk1m72dPt",
  "key16": "31EMmH6W1asSyd8ynXoF48SGwBjb1BewB2RYrXygd2jbHSjY3hVd54uKuJziNN8mSEBAWZsd5osh25sbseQwoxs5",
  "key17": "4QBQS68iU32Fc4xamWhU9odPnk6G88VyH4M9SYMqMUPuRtGoqbSYKu8KT8c5fmBcTptKPN4E1ChDFT7b7pDwm7xN",
  "key18": "38bh94H3xy5sM727bRGMWXV2xo5VDbt1Ms5ivP6cDjT9qQKiabZyM9mZYfZaSPH5wVwDgaVhWPJaH6gBYPaCwDuP",
  "key19": "3Mz7R6VH1eLm4HdMxbGMLWqFGsuQSAJguCcPA6Y9ioLAYiDza1pHfBxC1JT3S3qvyLwxh73QcvTyxse3Nj8picNk",
  "key20": "2jJonKkoYuGMG3nss4DPJjpXQhT7W84d5MrAyFEc4Mc2Bu1BZ7amroJevTTqnLcuK5HiDy4iarA35X2e2uj1MpKu",
  "key21": "3zbjx3qQBF3QhA1QswdqTZZ4stDRhok1sh4XQP8Wx8KhDWar43fBUZMtbhGYsVBj98nNFQmWq3qazq5UWsrWwuBR",
  "key22": "3r82Ds6mcCd5t1Xdy7hdJ6D4dphH3q7F73yFj8THMDSWsEjNKTnmoAT6An79CXQ22HJ7LQzubPt6ucidZmK8s87v",
  "key23": "nfjb87BSvh9HF2dSAT7AXp66fD4iboyu7LNg7zcQMpFzzFxZnCq5cppKPtsR4kRBS4ENCnxQZcNF5h1JtYF8z5H",
  "key24": "5ZA7AxpXnYdEHsxfoKZv1P7an1oc1pg7xT6AN63FAFu741zCNmJYqEsPjMkN6G4qpeHc866PY88z8XHQFXYNMwaC",
  "key25": "3yHyjpYEE7QFXhYDqKkLh5582nCTs9LxGASNSYAHroT8d6R96jvGA7KJG7pejthKQWgtYGDrZ2PgngB6ZxHA9C3H",
  "key26": "2RUzz29wcjmrwAppGkr3ywRepEKthD72Kn5eUmiM5rVYbrVR6TvgFQ96ewwB6Ugq9DZemhk9rpHJRq3ruhm2CQ6Q",
  "key27": "c1UVj4wEv4zbvoZgjNiRX6y5JKP4Gt3gugLuvsvrJvwmcR9zY2G1SFafxEfzJksZ5cCskKUqGHa7DxzB3PnPkjY",
  "key28": "4f67BcShx7xJ5YToEhBu1SSr2qo7Ryt8YTeHVf3PDUVc2c8oyiVMHHvvpj4fdmjGA378xvkPX2di3Rmx1LjWskgT",
  "key29": "5KMD2YRpoovm3hBAB1ffsFqDj25u5vXm38vSLKNkJMsXKk18csyes1R5eW7vPJngdXTfkjR8uDBSQqCCu9UXk973",
  "key30": "3McYdbzjU1n9Yn7QZ5Y9bTDoaaMAWghCBDApphcfSBj7HoGDDvd1N1PmbARNkTkbopNBhxi6eonZLCdnHxnSJQy6",
  "key31": "5sh6iqQP5Cpj8W7QUi64aQ586YatX3DN8jZRrgjSjEVcZAyDKohA6RnehDgecXZok4jMYZV7iM4KBCsY1vSjB1we",
  "key32": "xE3hM7JwY917neUCt2VzBaAeiL1XQx43vUAajzkmguJVcUHcWaWiKnyEdWJhduegTGcrq87QhQxFLk9S23vWTrm",
  "key33": "3uTgHvVyq9wozKM3j6Kt1HUhqtydQxcHVAh5kpwU3T8JP2DhNQhv48MGhtPrm8khzfwyxU3gFiCEd4Wi32ijr6UW",
  "key34": "5BWu9Gfmn6i3Go7y8oSP9gPg9KF3e77ztCJgWALdC1jVtWPmR5JkgTgEAKKfVsPd95APiGMybrZ4SvNZa16hMcka",
  "key35": "y6v3uSH17qh62vtUJY1LH8PeNfBt2Uca5avN2XD1NjoWGGRNrG4nUhpqnsPvfiXRzaFVuvZxpUsq4w6Ub7xTMhq",
  "key36": "5ncBvcNj1S289YJ9hm93GtcryvFeTPCWCe6ssbb79drwMziZtcBGM7w9eBmLo8HEWyQSygFjPpnninSVkQeEvMTy",
  "key37": "2Yj8gU7JiZSTuTbp8PDnRJArGuJA4iMGMa6GXzjzGv9sc324tU6Jf7KqpELFNBgaZBTSczDU2Gm9awZjaZDV4cmk",
  "key38": "4ge7XaVYDrsJxYV5TNKxpGNgFacxoJXhEEaf9vKiYwvSprRiUPS8tPw4oLN61i8Xjizxn2hPRxqEk7Xf237mJcj",
  "key39": "3T5suQuAGeigUUYeCFWL5qAuVGBdiZmf7ZAcUXtg6LkLTHfueabMZUKJ2m2PUHm3WQyRKYefLEtLpsuRdmwKDXc1",
  "key40": "2cCfFM8WQK8fT2TwKXoozf5ZgdaqMqjzUbGfsxPgUqaC9JoWThXARDpnyW7y2MANHdYqbgAcE9HshzySMm9cSZia",
  "key41": "2sWB2nFPFVAMdWP5QpTg7BvVEXLeXPgs37hyABnwb6y5GyQaQZ1o4ngP1nrar86KvM7wVhK6ANBgZecyuBBTtNSr",
  "key42": "4ybBC4oghMKVJ42LA1ZDWqbddFKZjA9hjqqDeZJ8TGLZv89Ht2rMbuxVixkojAcr1bBYMay6vNRZfVwDZhrEa8nR",
  "key43": "4ynaHPwHR7571G1HszM4xUgSpHi9wSZEgdS5Bp164HEGKsE13BjaNoZx3cEHmvv7hrupavgPZ7JisvWQG3zQ7FBr",
  "key44": "4orHgVaFW45a26FmbL3ZNosbRkJ3Ed6PJVBsxYqXDu7mVPeAonX5FTTLznmueb1zPDzDeKH7VAnQuksaoNz4M21L",
  "key45": "2zXWDoNnmDYqt14NB3Nq1qoo73hyXRJg6LsZd1tyZdDwXHcsByFgnfUTWnLix4WpmZDRt7qEkAogGpcpiU4WQmrA",
  "key46": "AdU1s1W4e5zY6jTwzQ5DJHCTWT7wmTst81bdgEyZzPQTuhKx9aJ2KxwtSstD3qDw4eQDkA9cc4qJRksmCo6HBau"
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
