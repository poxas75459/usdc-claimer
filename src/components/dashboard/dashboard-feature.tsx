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
    "44RfsyruwNCok4DUNV5bQ2npbWqbB2HWsvvcxQa5PywGufe1QpBmnbPQ5YkQTzDGoDk9RcCo3RK3LM2PhiqsuyW8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4f6Ek4WjhC3EjfrvFJjU4a5GmMEVWpwb1CEN5KjyA7jGcQkr4NMv2op4Wx1Y7gADVGZyubXpaQkcKcqBRGygaXXC",
  "key1": "3KBzv4fdYki5mgFhEmnz3biXkpSsZpscVKE6jm9beNTE9BnAbpA8Zf8zHT5umczQxQXje9B9pvRfZb5afV7C2CMy",
  "key2": "2BBgoZMbfqDQaPHq2a4iNzHLPPX7oZULf68sgYCH6BgV3QEoSP1gSy88WsK6cMHnoSfZQgxeATwibni6wrxYh1rA",
  "key3": "5BrCpcxKhb9GW55WWr9V1YAABjzfP6R6pcpEdTXE4yK8W6QEKGLJ5mBP5mRdA9Sowjyjc7UaYiQH4tbTeAW54Hap",
  "key4": "2aNd4XyjDSppeHkzpMn8Mu2ewDsocA7yfGtGPzKeLYUYpKJL9cnyKPY6qiBdGCCGV9uLoTZX5XqwuPwr3E7bmXzY",
  "key5": "4E56JWxqFHpMrceQRQE8wFYTYTfr4BWYyeF3Nj5GMpJhPEtYurMj7mryoAV8A8k4Wy9WU6qeEkxYkPWrCDGfugLJ",
  "key6": "fAuxEemhkY18GNdBphrrjd9jxCfbghrFrmKcsHDsqKTJx1f4QcoUgQ7b6SaU7Y6mfCJjc56fBLD9aUTN3GPnpmY",
  "key7": "2x9NaLnju1tXKLi7bWqqPEmiezfnZpVcFKKTTdTxbiTgfEYhy8SPhFFz8zdtb9ojBS4kYT1WrFXqbik7AjrkpEye",
  "key8": "4Py1Vydy4aotqmj1kPkE6nvgPTnR2fh56iPjmUY6fACF6ZeBw5BjTGvfWbqS5KY9ZwA8xGmEicWte7WcGonrUf6Q",
  "key9": "3vSqTTevi1WYWa4ojD566YT25V5QMFgKK8tPtcVDT3TKWh35pbaNVjZHYNiEWaiusHfQaCn5r4nT9gLEsUmcpY7U",
  "key10": "3yLpJRXft2tNoejEgz3efhSz16K1FGPNKK4apSFedY2dKQ9dcU8cutrmFHjJjUqsr2fvu6jCmXt6Dc5jvWvJD8tS",
  "key11": "5Au3GKfG7giGr27sb4qXwnVBG9VxrTTtauYeCawGEHykZzDEeYxadTabetn5Z6VpzBSZSK2JsbLRWjZnGk1ZzBhM",
  "key12": "5bhFxcnoXJUK9ERH7q67sUq6oHAzceyjA9LPSKU9rwxjnnas1oi5FWom99BM9x2ti9ZizVz7WNerxY8x3ZSBZAYd",
  "key13": "3RsdpctTMfyJnTqaRJX3veZjuCk79gv8wTTTwzyYNiYo4J5FuStj2jj83forHr1zM9vWfLXgDPkWGq17TkPfxJAo",
  "key14": "3NELCpT5J4uWTqQvAKKP4cLgbEnKwFVRY7LLSSBKkczRcUsSwD2xMkE6L4o8q5Xe4djRmAWdMMaZq731RATrgqBE",
  "key15": "36n8TQUuBDYFotXDvvv9JJnmfcReAawDVGsCzohsabaxz4MKUQoS6vtwwUFVTdZbQiB2vZFUtXTN1jXscEy8RLgm",
  "key16": "uDTAnqY4Ci6mQSFH1qKL6D3diphL3pqs6LL5nSpLaDnpk5gtYHoRnmdcpp91siBQJ2iAWxtuvUAYp6Vizrp7o3h",
  "key17": "3L73zusj25uUwtp2qomg2fXqZfnTWPajRuFumekMVJE3PZGTi8H4uoqDjwBjYgaiMQAsJv1CSPi7uu3hg72a6yPi",
  "key18": "2yFTc6WXSxByx9cMQZjxZK6C9BN2UydSoiNotuuxds9A4JvxTSiiANeJoNmkGoCaUH7WJGwPEeSDhP3MkUHeMHUS",
  "key19": "3GBDYZZ5mK3jCybiocydGP74cQ8vshBWbJc7aHCjomxXCskRjhLirm2JR8SQpVZhgiHBx9R7hzhqHWq95n8ka6Np",
  "key20": "4E9y5UqGVezP1nPLcCeThHg1XqVUDuB9a5YNDy5fhRd6dQXEwaFsshUJRZW9xTmTHdGz1E82etwJzBNix55ktfTB",
  "key21": "41fTnSfiaHvp1HSHXJFuZLVK2wShj15ea6cTW2LasYhsft2tZtUJe3PW1FsSNpmQwHV2Rwp2spNjL6QUFMuozZAg",
  "key22": "3rHFmrZfNj4Mxch1yjXLQmUqpZBQgmxGpU5TBhj3WzE5CyVQ4Y42bhBbs7RZ2mgQA7QQ9bmY3im8a2YKdzpYGGzk",
  "key23": "39rSGPkLCtenjbUsgBxYvyKQi5hNaysRy3EoUkteAkwgMEmCmMDp2oS9vtS3nYbB943j3iCHyPDc4igeZjapM92b",
  "key24": "5eRTNJmH6oZQ4S5HP6qU4ZR97wvwjSBGxZpxWjwg5SQQhJPcJ14dPzwKS5yvP9iE2ZhcWQTEpAKDq1SXQREaBywi",
  "key25": "3ycRxgdQxJRgwW2qVSFzedrim1GsUy9WbUxB7dMPvmaiAePRVNe24sixmsGWCPh4xDUJabZxDKqe6GAXt5xxwkA2",
  "key26": "4yhxyv4xVMCCtG4r2UMzLHc89KTTMeDER1TcGBKZRxCq1Z2sgdd9md5CyKQh1graT65WraJ3UXsUQour5ZP1EjV1"
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
