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
    "23ejYbDaHPNd7sPNVJuiHNRBdJwJPNCdNJgEANCD3EPekNR6WQypNzggQERiQK1CWT1Qz8mxb8VEkr36UQTd94hs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32RvAsmbMY1Txbkrk1wg4vq8TG8gDSjHXRfbeGx3tE5bKQP4ikA6KHXFSkA4vUQq4rEWtbc7kJngpB26awfdrF6M",
  "key1": "4sQwxpkkkgqAcJnL6P1Xt9Z9vYp56mWmURyvCag4ziXkgb8zZ5xjjFhXw3c8W51xm9GgkUWFQe2AscKiewh2BxXS",
  "key2": "d1fJ4p76AKNM2FNFMSZbq32ddag3c6ekYKC1cdRnRc5gzKSyVWmhibmGzJ2ZLyBmqRoJ8cjaqfXYC7jEAgtMP42",
  "key3": "4ca8Zy4rVATNepD2P5FXEcH2dXcUV4mganJzL1ByheaNSqoFB6PxxACUmgv3YjMgUsemvS1yDCk2EAp7723FTDj6",
  "key4": "4hrvSZgXcGUkrfcRdgdBdKGL9WyJvjpej8h8xxywvYTm7V41q6jt8sHQMrCpcAbRWModhpZpZY9EtvXpc9hX2nKs",
  "key5": "rZAgqWHJ8rte9Zy9fLw9rDb3dX1FQP6zscTDZmxHXhtbfD76mZDKPn8JnRpseaTJdZ3FtahkRVyyoYrzx9msxVi",
  "key6": "21fSBdAwZTLwvDBKpZeo6hVQ717xfanfTF6fu2TGUEbW8FkDBMgZPqrEDYtzqExbc3DBwV2U2UJuzpzctetr2iLZ",
  "key7": "1cTrLCypr8r2Xf57abr3ycRuKKv6DPVEy8pWW5ADLBXHFYFwTAveYsMb2t4VvTtZQ58bmHd4Srkgygt3rHuXwP9",
  "key8": "5qfhxwxKCXPAuKiYBEuAbUwxs2YV7W8Wwv7HKyEeUoLNXfc1KoxCfhWDMkaTdAQ6PHcTgDpNvH6Hgk9WKxwHH1ie",
  "key9": "2BMcyKrVoaoe9pJg5eyCSMNxJr4qrBrsDbJW2mS4xtfiKQVHDuF36GCQryK4EKkLMPqBBwaErLbHEqpkfAsz9Wrj",
  "key10": "4Pz2B7AVuodsshFbR2DeQ7jMwb8zTyTEuX5zsQb51CqYixVMDrDcYhnEUm5wTHRg7u1WpCKvtfdTPLycQQ2wpVBL",
  "key11": "3oyMpbs1o5DQFBvG5PMPUr5gnaqfpctkwwwJNZRpqzXob5KMAHDGGGef62cT791HFJa8Yezpv5SAJJgAUXNmF4Ji",
  "key12": "4ocgzrB4qwNnEUuzLChSR5id5nibGEehZmYDnGqVM8R84LpfGY7A31L9j5NC2466TyFBJT7jwtcmHKtXvPaSD9Ne",
  "key13": "4LB1aawDVtkLWYrzJQF6uJHKBwWN5JLeVZXBoYHcMBqp81MvFad4HeHHqzut58rhytV4W8Jg5b5Qwt7MQkS9WR7R",
  "key14": "2EEuH5gGnaimrZDe1ACBT5hKMLac5T4tYju8yRrNwb729c93AfU6uYP1FS7q261no4cBDAwYQiiCdETdB9fU3Sea",
  "key15": "38MyPLsY1sbkTX3WGDGVqK43fPHD2UGy4saAxS8NtzFzxEAsNwDA1rxe6uZnbgzt2mVCkASpwsf3G6xBvagyr8Yt",
  "key16": "5gUh37zzsPZ1aC5MLr8p8y1tJFkzNofqv17zgcSbMgAa3GQxiDMkCjsS6o2PwPVGNntULJBR7adqVMira1Dq9M9P",
  "key17": "4i4dEShcMqYQPrDWqq5ZvBkoRbVQVvfz2BXXWpRSmkeqrse85w1tJgue3yikmgRYUoTKMgLvbWPG5Ca9ma3VcbKy",
  "key18": "4wyYUSrXRVEg18zspN1iyCsNdMnDyRcMmktVQVfFqLeAkBMbna5UHMrjDyUyrp5UYJK6GY4HihGLNm7n6mrd8Yea",
  "key19": "4mdUiw533V6aEK2aVooUF2f2yzg81UuyrPv1WCjqVNcZZ2Q33zCnVsykf5VXASdXPTqXJQrp81LVvczckeCY5CT1",
  "key20": "MXsGToQpofyis73kNpG1vahWnLLL46PiA7UuG3URx7CfmJcsbGmkaiNVvsu8RBatY7KSPhyT3GWb9uM8eRx7ZFQ",
  "key21": "3GoFLgxbixmD5dkCS5WU4aUwpKuP2F1zNVZDt2nEAmmzjJysEvuNW2RLF5Kw1apsC2zmpeUVgbHX5CeNXVbeyiaj",
  "key22": "2wua9rdxktKmpPmqGyS4ygKWrJZLjrEgQFVzHPoAH12dUjLx6PNUQZjq5MDrtxeVoS52TfcXtU3DtruvzPxuG9PF",
  "key23": "KhmyUnn3zBgCE5GnzuTRuteBXVW5zs9iFvUyg3LurCWRJrp9vW1djBFLwWSedEkYVDiVw62svRDTuM1PycdXTGJ",
  "key24": "2JFcUczRbgmgPqywqYfUBhe3x8vAhvFbo9E5baZkqrqGf8vn2C7qnfmEdQeGUEcnVrEqzNrx2rtknfx6SemeXHYb",
  "key25": "5VhVM9yqvGi3En9ydSkDHrKfWyhFLX8hZNvtvUk6QZMZfvQ4pLzwsYDcUwX6sK9nd3SxGotfWQHtykVZro6j2ooo",
  "key26": "4UXpc9xJ9qqw65RUbvdu9sSzKdJqfWyh47S6Twq4MsZUmGq1Cec8SFS5g51XcgCz8xyWiENYFiBe9rmUnNUYKLju",
  "key27": "5cVGTrWs8BW1eEwaA1hahz4oBygTB6RzRsQXeb1qYYR3CWZQCq2WjLHyp9JapEdTGbSwVoKe44cVtrGprtBmLJnk",
  "key28": "2pdeqmei99wB2j8c7MzTGyY5QGo9McXxWvg1UCnbrP5tRfioB3bFfR2dKQwiXntXt4KVtUTNTZCEfq6VEuivqDAn",
  "key29": "3vWU2iXq2So9Gtw1pfhw2WhgydVN8DXvty8nBrKZxYFCUjfjR8QEE5t6MphVYeUNmMbQMakyZy6jb5s4BjyRy3gT",
  "key30": "2kpJA5FqWy3tG1BW6hgSy1T4LVU6JDRfQj2oAXSbVyR9rPvdSnWsEq47kn2LQTeWEhfQLZoNvREjSU9GQcAXULMS",
  "key31": "59kR1EuaUXZpdakxEQLNbZqwvjSfQdfhBdR7QpJ9r5WkyhTb7boAy6YmvtgZuPQudM2mJ7HdLhCBDGHTaBPUbUZK",
  "key32": "3EzhpRHYPvRxVMYRpjVPF7AwDa2vcbxcwnF54KtWkP7G4wPiM6xjpSYHbVtCKGJvW4KuoyrT8PWBWN3yXdjppQN9",
  "key33": "34nrCgjSULrLPgJ8zzCM2hGmcoBAbKEpLucBVSvLksTW2rUaa52coWrpjuM5H6NygGJdaE84rqpJbafv9eoK1BuK"
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
