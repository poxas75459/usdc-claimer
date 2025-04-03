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
    "XsiqzPN8pzjkvK7DGctDuFPFJDAFA9rbSVp45sa3cbtBDCA8WfVAbAZPhfGGAzZVRambf6aw8tAc7bTr5YxPtX8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3XfY5yn3X9UxyNWWGoVrmtisbV8wrMicuaQCb6xrMZUthTPab7CuvexJm9MzDXu8ynuHpVsgDJGdnNQxJJWtcuCv",
  "key1": "wMCX9z4Q171Xc9M2hYYbru33shuQx9BifZ2q8M29kCrZvweNH6vj7RWbEuaiJV9dXru3bnfzMWms8Wyp3borJ6u",
  "key2": "4FuuhWDDiV67Njfaqe7NLkeN62i1YJMqdpNgGJHnHsY3ohhoYNHoJ4ospHChPbQPAu6E2Fs8J6A3FRXQLEuhhdqb",
  "key3": "1zSyQqwnxy2u848rjTKcwxhjANZmjgNwJNDbpSEEYVpDusxDDXHwKZeJ4tPDnn7YjuZm1opoyo6XpVT9qCCK1DM",
  "key4": "2bDJAoAgbM8YhP1zZcDCRjdQhQBgbgnmK6LFZN2XMSm7abP25aQ4rQo3FydaesGhLfJLe2CXpFbL4Wndz6yxJj2J",
  "key5": "5FzV88YyqyxBYHQNJhJdjvVLi1WcAxnhReLXrd7jGnBLe9VpnfMC5JxEsx3goWX5gMYETBamN4aCaPZRCFR1zodX",
  "key6": "2jNpF1CHu8AWPst1YJXGwhEHPFgGB4CenVwbo3F96xxr3hQi4CSpfX3CFsiDUsD2rc3u2TwnYcHsgoCBoQ8WmWiz",
  "key7": "5GRM2RMTnvoYzmgngemv1iV4iG1FwJdu4ybBZqTC5F4hiqoaRuQ3Gab5kWxtkewstrNi9iyyXHPUgh8JJADY7dK1",
  "key8": "57a6oAkMFN7n8jPUam6CktEwDL2wYzvrS3dikU6mHuHXUuoNzAPU3dzngokaEeLXq32SCNmt2D7tXosFKLMRwtJx",
  "key9": "5MBaJrq1AzwXVEi6HRF965X7jPSefViCvRnwJ3b8kboQ5w4vxpPYJbiauYC9LzhVTnVks15A589XMDgmNM3xwb4P",
  "key10": "vNHasQ1KFyNxi5VnDKdVjBuUQB654VgpbJspz5o1CRPm7zVPsQkTx6Dv6RpVRtcF8bsT1KWdcE15tzhkWi2rQka",
  "key11": "4ergQg3jT9hzwNM7qRTE77kAp54gRbQUfrHfpsWXqcsHsrNFHiLGkuHsBcCVkUhpnzQHq6Wu6gXEpp53q51KbJBD",
  "key12": "4YjsBn5vTS8V4Ai2BkpspXWJawww4RFXPqfJ3k4nUsV61m3sF1UNc9UB9gAq1uzmqysp8v61h3h2uAZktoJAaSso",
  "key13": "2i8mKrfCLyvGXtQxyqEL9DWCD9ygsRVQTUo5xtetUyK8tetFHZbXF4dG7c2w4XickzhLBygTAPF3gd5cgtRt6KJJ",
  "key14": "pJSFDkw7avuEhNnpYpqtHDdz7WWuMDAq2BVSYxrjVtCGZ1avC6x7MySPK56rZDi223wc131B9FCY757fhfGTMZk",
  "key15": "3TevL3c7wKFPL91eu9exGpBps21cBxKTTST6ESJhkqp6fnsBLpk54v48Qs9LAXWPU92zvvFGbykP7HJnk3iTyvtX",
  "key16": "3QfbMmb34yV4RwXRkG9vB5vzUavVwFFLgSgu5h7HDpPvW9yUG8hhMJ5RRc1Azd5VB424tgjVX2je2QD8nprxLFku",
  "key17": "55aKjvKTAx6F5to9XGKG4ULX5DDtQTMb3VCpD3xSgCPJCVrw1Y2QG87bQFoYEzbYXGrM44xnFg4ttqBqZKbfSUCe",
  "key18": "5rBTWtxZfaK7LyGzakh3EaZjEE1w3Vhm1iMk3hYPFcmDzaCbuUggHLjgH3kryYYkj3yFecJwMQu9HC8oEBLkZJRB",
  "key19": "2uVJ6pWeoGFxvhyYb1XpfWeFpSwzE6Bi8jFack9AucLykBqtXVsdjLBbqVsMdZXGnN7WszgYSo2Di31udo922Nfr",
  "key20": "m8WKY62JkJxrJaP6KRwDxCodVMUpjudJzjZxATzTmUh72a9VNB8e6CjyJ4iET3ZLFhiNhmVyNLVTjY67Dzxp9Kh",
  "key21": "4AUXdnkF2jyiC2gHrWhrSKheKVcN3r9NuHW75B7Fb4HeueS8Vhm8UVcYveD4eGhPUyFG6BWPhXm5JYTsz7NwbqyR",
  "key22": "2PbUGwBEp6G63nDkN2s35JQNryLyHLavh8VdciEYmjGM9Xke38DpEqLhiZXPtLQwG7iwiqwuRmCXpiTCbWYF6XrP",
  "key23": "61fQEe7VdqKiNNfhA6XcNx4g2UwXgWQafFmSnPMKti6eTvtdfvyv9UY2gUSpVpU6qgXjNJG5rn25FQkme5YrkjTT",
  "key24": "4PB7JqVAqzVKmWpbLX31m4eyEoCpnjxcdGjR7b4oZ1CssuxHFyBsA61nuJL5fmEXPWrHmxBR2HhAy7ZnfGfpSvMZ",
  "key25": "2dZWDYE8vcQPUojcnEhjFVPdJyVgVZp8zh6kqL6N6Sa7X6njDNhdQuxGssg1sEebgDtVxx5reKsYWCuUKUKffaVX",
  "key26": "376w8ofd8JtGr7zutc2X8xCqfjxiyYhUKR41MxyqLKUB4hGts7aB75B7aJfLDh9emkkV48UWKBFv7BWYGL1fdib9",
  "key27": "DapEyNazw9U87hfoWYqdiYGSKQeP54jLgJ4d269cm7brgF26eR9pGmvQocXR6Cr8S9BS3RMfGNsm9hBJsWFyuPr",
  "key28": "wPDr5AQebyKZ7RpCNnfsRq7f759F3y98YM85r7TA9zf8wRVTcaSMyDK9ormFfFXEfBtLQciawXSFeqM7fWQ2Ub7",
  "key29": "38hpDGeBn5YJ54TD71LmQYg13vWr3Y3kQkKk2RhQGVq5w1k9ezysYr569wPxidVJYJjWc57P5dJf88DwskSjVyfy",
  "key30": "4Cswxz5HS14RA9vPvNcNCDMC9qBZBVbWQWPKTD1xXJg7b89M6TBXU2oXK93iTcEx7qYqFALArcE4G1KLDFZSMse6",
  "key31": "5Y82ySHJswZKRCM9ZMVFKJMW9j5mcVxZWN3dsoZvPhAh7MbmXbNhYv8GHZibiAnxHBHkjfNn9N2pLcas9YrUxgLR",
  "key32": "5wSjRnAaS2eTvWT9SBxNHJkwD1rtRtPyUVcKoMNapV9MmfyhqWuuyXJP3uRsMbJBMMii6XBaqphym8FpFbifMVat",
  "key33": "5w9FszTZRW5c2X3q9aqHyKjMNbWzsgQY7NjQ53XMnERgNQNqLmHvEkDGdbAPFFt9mJCDExGFZ7PkfL7PG56h4XrM",
  "key34": "5xceRDNSuM7ETnEfwpuhFW8CkLi8EZyJww6ZFy6PJeREtmKLCyWKx1TA4sSWKZzZAKbdBGZM1fn9hnNDzRxhPdPZ",
  "key35": "9tBQvGeDUVYnWDV5XzbNZnuGwggRn9rSjpynQPPbHupyMQK79vBFjJQ8LBkXhgpydq4YJEu4jws9iNQZiUCrNTA",
  "key36": "2KwRneRha9ETKk2ijb7tDGeEmTvdcbBkqzb6kWYpRg8WWY97vDnWVV2iP8rxZhQTX4B2VGZYs57SEDG75i8H4SV5",
  "key37": "3qnGQcPF5VZYwA47Zxym3J2eeAc31RVVynHwxrduuuzmjcQz6cH5rvG2Gh1rvQgy8wRLsPp9PLXwi9Jc7qbgxe4W",
  "key38": "aon5xX9g3MTKb3guitJcydFuyRrjPfD58dszG4itg38xc1h9GTHf1qA1JvL6jCZChMjhY2b53fQtdUVYGHotynE",
  "key39": "KAcFYpEYqCjpkqXqP1as6Ha5H47N4vk2wP9ouaxAdow424vA2msu6VHKYBTN8dbZ2Bykyi3nNsYjqYgBTKCjEMv"
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
