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
    "4VUvbMepyU1RPg6tSRkvCr4MgjdSRMUoARV3AVC4mf6pxJMyskmtoxA17egn4e1iBy57Do39L7BSdp3apvTaU13P"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5DzY1eH2MNhBY7amAvsd8BErP1Fb2t2x85ZEfGzj5yXr3w7FWVjrjsxwzmeS6AVdujjtvLKqEKeowVPCKseijHhN",
  "key1": "3K4zVb5pQSrPeTmcp6xQFuB7tsGBrQPze4tZ4X5ibhjHJQcvJHWyzPyJeHTMGC4sYUP2iTsreHxACYiCc2y4u5Gq",
  "key2": "28GqznBCckh2WW9v13CDxTXrQkyT92uBJbLaZB1GTTv98SWM1j9ymUzPzX7cMdqyYpb1c36Tr7jqpSgkuSPw2Ya6",
  "key3": "58N5KaVz242joMv71G8Aw3ci7CgofrbYjnVPomJ1AJ5qsBAvuaXqGo7Lug3mQFJYsNwKCc56yXLVAMVPLbgzCCvQ",
  "key4": "2CpZqYC1JDgTfLFhPont31nDaKCayAeY7nPy2X5tuTqSKrAsfFnjLna8Z1oXR7mYERJBjLgnbScYr2yosoCWZu9k",
  "key5": "xzfy1s4iHXuexhSWH9CyqXLith2dieKpehukkc5hkbw3acrimJJxLenLyPjN1SCtGNwKGrKgBbWAG9YMTn8Pj3k",
  "key6": "5Zd742T9hLRHrpY3MBGNq6WvDtoVSspuNCEZYayWUwaH2kdzogrNBFfQg9WKHUAH5EUE6UHB85BLaTxULDi4ydcb",
  "key7": "2R95SaVv1gs3SP8E27sHoJSxWzqqHv1DpLxxMNFRfK5jUT3k28has7AU5CAZ9yzadjmeAWZVojcGkMqmUvtXawNc",
  "key8": "3sxC1vuGVaV6uUwjPhKb3nBBRKjLhh6YKaHoX2MnsUgR3SfAPCGJzkYsrNW3HWZJ1Mdpw22dR8NwBNKLPXMeK93J",
  "key9": "5idejuUnbCDUHx5X9PEuV6cUj9jt5a17XPtaenU94VJB7bAeyMxfzJEFjENFDLSjqE9QMr7Nfmim98MdP4Rt7DZr",
  "key10": "3ckchTRuEZ8ZEjwnPPCiiGWbpe5HCWDS17uca1y7dbCrKaqKjr4F7gJEFEznxxmcWxk7KunK7REGNuTTDPqyc7ji",
  "key11": "3xS8wmwnJ17HrrJ1SbzeiwZZV3VqfQsuSeikTVySaNq6LX5qA1RPw1CV3XPJvFwPhKe6xsNUMyhzwXcMY2Tss6Zz",
  "key12": "2J74k5rRQuc4iQLrxXgmeYQP88F5rLxK7H5dcQWgFH5W5t8g1JH4oGBB1bawqSSvEwgxE5gLk2o7xvUwPX67Lyzb",
  "key13": "4h8T5Z2jqdwe6mnxSaDyNQpz5EDX8QKc8P8nTmSUvkGfZdwuq2yzoR1mX15XkKv2fuwnxseftKjxMJHg29AVH9Er",
  "key14": "4dhxsAA9nsSyWFC7sNRTJ6n4f2WdbEjRNc4xvnktGfB2FAyPcZYzVh5yuPe8kPxkAecrCz6ChS9uy2V6CFksaUep",
  "key15": "2PDHzZTvopzUsvE3QoKf3qwEG1izDnTrtfKADk3jpGbh8tLBGLtoM2qQKEJNLspPtUt2TYXsNsin3KMPDWqp9mjJ",
  "key16": "2SV3DWDShm96q4Dk3sGQrdrm68W6VChdb6dHWtASqBUUV3YgUhBucgURLDjHvXj2BXxbvxBc1T7ujuDhZUcCNsuc",
  "key17": "5t8762o3LeF2eYXYLbERLiw7UC7DxB7wj3iUifg5cWVtJi13fBFY2cDwP4WKCUibTa8iNgucVNWcuNiVXRzF3StH",
  "key18": "mBQnYqRcNyAQduyVaSAtdbfqgZp36ay3uvDjwBB9k9TMrMfXMyP6TpnZmw1aZsF3vc5zjnYsiQ6E7vALojvhcvT",
  "key19": "fihLKTxwz7fZ3ZN3Y4eEq7VZALWkGzfgj84xM39eebqiGB42VEC2n2EFdwtQc4kBzqAPxdD7rB3rpfyhLyw9L7e",
  "key20": "2bhH24GAc8yVCvbn4CrrZJ3ao1UJRtsBgFdzvAPum8kUuCoJpRjrTvW2Txo742RAD8mm7164za7xGaSP83qk2FPj",
  "key21": "42qaQ4WP7YRQJJYauSzXZYt5rfzoapPMBaDrgqcxAdTDNRpGgWjA5hkgLeXMZhK76qQsWXbchk5sY6t6NrY6NCaK",
  "key22": "3TsR7xQpD6bdfswhk1zXryy47i4caV1ko4K4yEMKatuNorqisAyTpCswh7xyYE4Nm6GibVSyyck6h3K2NDiHCwMN",
  "key23": "2wNF9h3gpa76Bru7BX8Z5WgfWquk6wG5D9DNK9VJjx1LADq3oHpEa6fPVVt5JVd8zSfwLpA1JWNtNPh6syQzgfYF",
  "key24": "2RRrfwc8q1m9sr6Xtkiiv2Zyg9DPv5i1tCJbkko9fiD9AaTLGo9xKU7bULAJkyaLSrRbwSxy39ZDiTEu6ZvEq1zR",
  "key25": "2PrjypjaTtYc8h6RsfEoQjNNfvvf6zZVv7XKdRvw2LZpGjDhEDi2fqVQJPQDeRXxPzBHtGVLEsvHZ2XECvAGNm8j",
  "key26": "4H582ATPnAKwQ6DbHxe1i1zJt6yfAW394d6Wvdyf2KhGK8UZVSEQZyazoyJkgQt7i4gSWShyDAhDpBUj5QDwx1mT",
  "key27": "3DJvPfBsrxA2V4nr5hEo3MaZX9HytL72KbbLBCjPmxkxnLrAXkVj21rqTJy9LomVsk5BYVXj9cZbA4vG79P9UMae"
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
