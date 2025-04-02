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
    "59ZWBG35KD9igmyZA3p9gf5uhVzp4KCAmMC2p1SwtypfLM7KxBNL2PwNktZEeNQ2wYxHJpwyjGx2zDNgHgJNNRPX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5qRCUiq56iAbUceEboufK6frByNEmrvL7Np7GGyE4tA5GfxyWyDqZyHQdzS4TAwso5w14uZ4M2YxiJntCur9Bsn3",
  "key1": "52AZwwinnbKiPHgoiKZeoHzXArcvLR4HHS8g9zyD31pzvDou1yTJXC4hPJDtNpKaYfSDagL4cG1nMRVQMFfE94ox",
  "key2": "2i63Rspx8SCc6kZQ1ZreBHyEPUMfL8V4qxjY12SVzF3Pnp5c8sctCGnzi3CTpnRgZVVPob9ZxSkHL9wZJoLuAT3r",
  "key3": "52TrdpYy7zuesVYS1c4jV42z7GWRcCZL4qarvneqianSo9ywWMPHQLzRaTW8TjQe8nkuoqyEAGC2TjtB7JPwGkss",
  "key4": "4J2BzcbA7wc4JhpJVyCpPNt4VDvzJcnMHcBQ5qshmcwdHTMsUsCE8m1Vz2wtxs6U4FLzLVLzVe9ZS5bpduc3F1Gn",
  "key5": "51hLzooUe9JprUX4KrSa7UvNdR3CQVXQJoKK4qsw5K95qT6rK8vZKCSKECc31xU3tujCm9hADQjg9kDmh4jWoFsi",
  "key6": "3NJKSmZZL8asAeNxu5Q8JSytNCULfxhcxvPY3mqow7smcAPxrd4Ngi1KUHsN3RGKTVkHjAmp7zbDhaoAagR4D7BM",
  "key7": "4Wcf7ioeFCuqkCZ2F3tPd9LTQtMm4jQrdzRnF8x6BABEYpP9WsJFbinbcLdD1UW3BMAWUhqfWetM7YXJTgFafcHZ",
  "key8": "5CCJbRCiTG9CmcitrpsYiFoWHTrRoAeAzBuk5KAdw7CDBmLDEUjH9LQbVxNNbbeJ5h5chm5VLPGpx6iPBvGsh1Qx",
  "key9": "4uBdZbsbcuJz3N89yPbJSV5EyHfw95YZvjvB35rDqiQUfwKDPYt1vfqtrRMymjRywf1Bo6UctchQFhzzgbvgJgbM",
  "key10": "5LvpNThhBhd2TLx3vw9DPULWjF89Rb5VMyrLAtcgqmU7XQgt871y3VCkUuNqLzHnvwCtWXEzKQ9XuKTrsgQWE73M",
  "key11": "3an7RQe4pdbUFKZiVKGGeusq65EjP5byZkKkaMzGWsXetbHhXkhmD7LFfGuH5ewEM1Lfp4n8LFV3fn4p5h4vuaPM",
  "key12": "3TosFarsdhf4X9feer92QR5P12S8uJPEAqJTxcmiR6exzRtr6WsboinnXz7FNQWsHNa3usMHBKwmh1E7mmk9TmAp",
  "key13": "xYkbEtCCRLzUj4HQvckoSiuFp1JXtkNA3HjPWLfJ21QS2iPfm1oTtuC8AoH2ZA4dtLkD8baqxFuBgFSxJCUdi6E",
  "key14": "5cp8HLjW5EmxvPsweUCsbdjqUGrqqJ8o8VHnsmrVYqEfP7tdfceL8ZHWCErgV3DQED7LRByGRD48u8DvzBQgVbqA",
  "key15": "AK9TAN8duj7ahjrHBbgm8sYVxNdCw9oEHFwrdXMjJUH5AT8kHpuPi9vm6aKDKeNq97BtFULaZd13jAHDJkWeF8z",
  "key16": "mShRBGQrcZr2JKhttTGQP2qk1mbB9EDyGDC41UHKiAxtWErcWsaUcX98mwAcjVYAbPmVUuko651Kfyc661qH7Vf",
  "key17": "2VDiXgkAHvsQ3xANxpBTr94tEF5TTXk8gC4VbEM1XrXGNBo3fPYYzV9KtKpci3aXhUeRTMsuDBXTrhCWGmHHLGZw",
  "key18": "E48Y8gE3sRESeLC5L6jW9CgETNTAGbBNhed6WitDffzuYQBSMGMJcW8bEhXRybNfVQoA5stEGW9GLE5AVAGscDs",
  "key19": "5moQChXWhLf24KAiBCkwYwpW8dUqistYyhwNog57q7wXntch6NRUxWv7zYUB8vm1YYTu3pAnh9NpYn9GfajhUQLY",
  "key20": "3j3JDWJ1FXUKjpxQktMDtp79dFpD2oKB5PYZKKoPUijPCs4phZNTypZGkHRmt99Bqo2xkUKERMdB8LkRHJD9JVXh",
  "key21": "2fcYii3grvY6gDFfr4NqryrfqvuTd9mu1EEzzVp1ocVt9UBD8aAgZjuJRCwQa62F5qCCUEMZegEBa9MGZXayGDsm",
  "key22": "3vtaMZmqBwHEvAWtnVNGBP4rCejFGAFzJwCooo3f9nay4uJFtFhkpjRWSWGNQ9Vi6nY4rsvvjuGtNg8Xz2G96HYr",
  "key23": "1EqhU9N2GdxqZoxkjWpnqrxQTeZphseh6ta3ZZfaXRbKWZFKEochNwhGnqtmCFEfh4A69ymkw8VdzZuEyZJeWLg",
  "key24": "3pvr8H1hyohBDVvsVD36eGXBoMTHGCBSqtiQ2R8rUmMpMgmxQWt3CoVuEMLBpG523tS2uQqHTwPGsxYJUygvWU9j"
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
