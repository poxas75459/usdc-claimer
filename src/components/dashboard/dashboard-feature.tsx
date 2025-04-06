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
    "4ZsPW81q1ADkh1hteS9RtnRJVhRkwy7tUsChwjVUhbJ9AD99bbsrAwmjypisdAoH92pRBSUfXcuKcEtNqtMneRRD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4hrQDZ3ea5SZRm4HR5277R3X2t2xLuSy9U8jxyiXw1rzFPk6TSLbpnjTow7SUYDVC7fdMkFJgwysTLMJ3znkJuJi",
  "key1": "3e1cLftW4xbmN1RfeG6MzKscGCnXSCo4xewBscB1FXw9e57pNSrhtg3yBk5UHz18MDPrfxo279zfJCd3oYyZ8bkp",
  "key2": "4zD2RUK76prGRZRrf937sfmSfsoq4ZVNmriJ3UBCEwRQpmkVCfdqMYZZr8XA5fr2DeyAJdRbHeau7d64Mgu9Hn1N",
  "key3": "2wqEeJLH5N7rnsDvbzMhjsrxDvbiRx1dRy3LFQjskKCw39BFczo5n1cwgYo1McV52FAedW3sBQjh9NUSfdA18mSS",
  "key4": "3c6dUMfHjB2ob76wwmgVwRvhFXiM4gwu46wF2ALQTYdS395vJZLCcKsGqfWR26TA1rxtth563jnBL6J3TXCavH8g",
  "key5": "2DXLeqcPDSmRgBdzh93KRReGPkaTvUS9pPVPXwagTSzsqzs9CoFQst3B94n6DgKz4bdYcC29Mrcj9aF3pe2ngaRa",
  "key6": "4pyztLT5aYRGVLxHRoZ5H4eZPBVA3J925SbRDLWVMDJtnnc5biv333xvFPobakWqEZJXX1H9avyH65WceGdh3oTz",
  "key7": "3guQjAg8Z3m7bihDoVAK8jPYCs8xxVkDGr8vEaziVtSFvw2ZVZt2165vtUDca2o6dby7hN8Xks6HfAqVGHhSY168",
  "key8": "3oppxsv8z6fqysQWJKeYtow4HnQS2fF2PWjnKnbQ8mZfbTKeh6XrW6LfqJGQosFV2Q4WMDMfKdnL7MCw5aYhkEoy",
  "key9": "2DytqRJWGaH5gJj6jJ3cFwCNXidzkHUY6i3nHYLm19X3o7dXqHWbVxDwozVZ3AFQfZ6cLLzXfZKeFTVnKqYptoaD",
  "key10": "5N5hAApkddfuAi9buRswm5nd7h1VxbzJtra9KfkCVWYykWDJmryBurzpnDCUX1Ny9jGwasKgZ5ujnkfWny1N7BYE",
  "key11": "4e4EC7fzeSoowUfdDZYpY6R48QjR8HEAng68w8VWnesMuhSLKGC3taGAAskgSDVDmpGaywHAZnLMR481btFJHjTt",
  "key12": "56mGSep77afq1zsBK5isgBCSvCMB2cgZVHiXd9iM6bdSVETQkPn814JShU7KfQ72TwnurMWx2FFtVRTa34fji63v",
  "key13": "5bkujQZYWL1D5rj9nUiHxKrKFDZSt3wswntJUubdsfaage6cCwi4Cu4mxNb7qCAGwbwa6q8GA25NjcvTY2YPVCXe",
  "key14": "5aSHC4V1sY8n8WSB92fNJY32xDMQtMKUZn4ZWXSfLqWYHuA5zETBYH9pU1fbTNKGchkKPHRW3Q2toBpiKrgiGo8w",
  "key15": "34X9tLEasLaKFSy77ZP5qT4B6MNtxZgzsbjpSvnXY3GGMSUFhFT4KWQTDa9pkx9kpGLQqfaijWZySsCi2DLEwou5",
  "key16": "2M9G6TyBd7SfUbfLzQAi3S4MQsujqXpLFvx8JVCgwh6915x137TAh8dAZdaWFW6aN79w5Pbo8R3jiWwFMAR5sL3a",
  "key17": "xEcmw3SvrZWYQ4CGQTKJBL1wp3bkQYPKA5gkdzzGyxpLmw2JUjjLxFpozMPuBtyrMDRbkzZ1MvUduCNxJ59QBrc",
  "key18": "F9Drr8oWNbigTPcsfDroQ5nadBG35HSSvfF1k8mfpToprGttC9XcdH2fqPCcKyUQw1XwC1ii2iaRzsTr63nFJRn",
  "key19": "4ZnN9VJCGbojcTyLLR4dSrwfbWqxwhpueC3LY1D6DtbZ7jV5x9oJrbPmMzmsJRQg7VWRiqxKPUDvVk2vZNsQgQu2",
  "key20": "3mhoguu5VFBKZLTXyXUSWBjSJxTAx5neAG5QEgGJ1N2j9axrxqeYUULYUwYxhTu4gG4jJkZKbVqW9TLaRomYDxf6",
  "key21": "4zdZaC2zibespYtEbChgGyKPan6NL78SJ7rtVwzZkChYTpwbQqFXY2ZcgJ2bw4Xc3wvkwaiPuqEe9AZmZ9LyaLoi",
  "key22": "5jXNLRQKBkdWgju9bRhSwYReDNPLoc53vGpLjcNBMaXk53bP6jX9v9P8C2gYJEAAVdEjj36saUynmBamBKnDeGXf",
  "key23": "42V36ZkqtwVhjXZsDiptEPb5te4CmwsNioVmc3oW4PEHXDpCT4vww6ya6Z4VqsJd1m2tBYiG8gb3wjwtiHKXBQfk",
  "key24": "48ECCuPkTckU5T3dqU4wZo3u2ib5kvE7jRt9H5FjDdFdVsyL7hxkHudqXpRVNHLeBxD26fE6MuxDidNkudBCX8nv",
  "key25": "2HbRbVWizjKhuCAHuJbsutG3A8nJxaAvXRmirDZHjWSguiLX2jGPDC3eYKHj3UWRRu288ByNqcp1z86GVJFj8hBh",
  "key26": "5QZMXwNXsDq6Y7z8spom2NghfHq7JvoseAAy9kKTtBaiFXk6LRV3xaZivM3VnDt1thbNpPDV69xLfa2dYULDz4dW",
  "key27": "2NsaeGQnC83CAUBHMUUZYi38mCycWAvxXyj2dTg15dVW8umriFm8F5aHYddZH9k4DKvWURohLJSwaLU7grTJRqiC",
  "key28": "2Ta1vVMo1qTJqaBWJjUuVATmU6ixScxmyoAVUPmPKvfLdv4sWM7HxEsmgtNK4v2pRdNvKuzqV4TrUczSANkxeWp7",
  "key29": "3kypG5yymvWeYwsQ9vagXvxxAWJ2ThxXj62tnGM49oKLW66v6KA5RWXHmSUCvzDxobuQJXV9fKzWNDb1fQF1DWVu",
  "key30": "37kgBVo1DWbJafUcEK8f22QjHKeXjSwfbYHkL5N1UbQPtMoa8pxcQQ4eV9ABZikx7FPwzyYBMtnxQ9Go12RqbTnX",
  "key31": "vAWfG8o6371WwjFVWYVsgf7wRBSEXE26KEd4oNSxdeqzURqHXQVVZB93AbgeJdnS3szU5y6Wj12Gi7wsuhxxPKC",
  "key32": "ZkK8VtZ8oMb6oc6suLDf4k2aVSRmUxfzBPeqGnGoUwTa5Ar8JNtvVMkcd3Q1KNADjr5cjfoDGdUEE1seuA3w7jz",
  "key33": "nTQ5EdzyMfTs2YT5B2yyQMKLj682uS1rNTeBHEZDzAWywhTteRgXsoAUEuS9TJYxrGQ2kRLsom3NKwXY52rUB4G",
  "key34": "4k29WzkXiPLMxhpwzBFGi1GHisceHgkrvKBTDTvfHVCUYyAJ1p6rDfmojRxkdbH7pAMpLiHNrDyjxFpUfKAZ7htM",
  "key35": "5EjxBrA7vjKdvon3Wj7PDQzjzjg524DD3uKHNeqw6URnVtCBsTRKdtNfG7MjYbsTd8tFsSr7UHDuehpPxV1QVg7G",
  "key36": "5EzPdzkQSZ6YNVC1jqWXSEFX5piMUZ4FZyv6FWU68xjMdSxdKXoAJtskfiqye2JghcnYaw8GiSDNV367n4nsfmzH",
  "key37": "3xB2HErLaP7v4QZo25EjbLohkoTFxQNHaP7ZLc3Xr23dRCvp2H9xVxdCh63ybMMj8bUnR1L7r2U66yFVnFwKVCoJ",
  "key38": "9MoKkMfMCm3jtiuXLo1LgfTdKszhT9qERzJzBtVd6vx2vpfXE9WFd8tkiThwS6yeuAm3nZF7zTRAUKmaXp2KVGo",
  "key39": "37C7ymYye1d6877F8pmDYLAZbYgT1TyKrtHFWLemADBMe5noAu1bVKxCnQg4FukkjbspxrvxiVb9VZQ9LHC2gzAx",
  "key40": "w4xAGDrEVha3Nnz7vwSV3cVSjLU3tghq2pZmV86GbteMFWMjzopQAZV8MgcPQoEH7fD86qB6aJJWqGgNmLKYAX9",
  "key41": "55e8GD5GRtrJLD2AWcbBzyB6drU6bsEMEBmfuTSLmVFbDUiVMAGFhqbbLv5SeaXiM2JWa74PMczCgeCePc45fwN",
  "key42": "Nt1scSnyWAd49h1bjMziVTsHGPtHvQ9we8bfqgpNyGrwFLoDGB7sDpkKuH539m62BBibyS4gqkvHEaiJQmqvs7f",
  "key43": "4aJBzTpgtng35Fk93Kf5c2r9idW9pR65T2PUb9RYAyNRCEBLTWvLxuYRBRbysD6MZASD4sfcm6XoxJaRa1UaUqLB",
  "key44": "5HrY8Z9k1pExjTXSjfdaqMEdcfUSRcjh6Ry55c6gmGaPpqbgZNYf7U5WhixbwEDhpTttT6sCmRFsA5acry4L5idv",
  "key45": "47c3vdmS5vpyq3KAC1sVcwoMeCgUFfbimTfTSW5rqMMSkipTsvwpWjoM7WDqdP63DFFggXsGWP8yqAM26Cz6AgVV"
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
