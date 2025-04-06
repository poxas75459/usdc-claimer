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
    "21zavgtq4yvioR2L8Tn5whFfu7L6pq91dED4fBFtpgqroKDPq1a3VAm7LrHjCGaMgthF4jeomkNssN1oVErU7JKQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32PfWMxfe3E7xFsHquXLJo8PGJtUwp3e75MjfUUsRHHQSNA7teEV5v1kgyU6dhXiAHouHT1BtAUioMVnN5unduRS",
  "key1": "5hMFV9nP7M5ycj4cevkjFiSYmabxx7BL2ymYVoauDu4i3pLMC6ec2x3S3pe2FseJtg5feLtGh5PCrYTTW24iYg11",
  "key2": "PGytx3c2nSyFu3Jts2G5CJ1FU1Xr9kunBTTHCDoTFnKMgP7sArgugPYAm5rkdSu2uMeWrLecZxVb45pfDsQ8BkE",
  "key3": "5ZUqE1sEsxmhtsCajzPAfaWzUHVbdsKa2ygYKqne3acuyMt37ZkTvJxiRkfWueb5fdXb4dFDnfJMeQayr4m28j6j",
  "key4": "2brac28A2P1k1fSSQ7CkkBqBWawedbNSVoWJnjHTPHU6Zg1TLhky5JnK53ndMcKD5UHNDaAJtga5EsQigFQiFum",
  "key5": "3STqCnfmP66kyE2CGezRRuSBbrwqrfvFgXVDFVuCiP2Li92vGw2ABxNXif7N2JShRyMiw4eqHCJPRT1QjjQLFhHL",
  "key6": "22kX226m4dAHCHnTCWxbumvwyBrcnVfJCRpQwfyLgeKrvjz4oJk4NChuukM3WEGUqgnVXV9Z9EYx5RtpjX2EniDV",
  "key7": "5hQL3aQNoku9WXKL3F3V5FLZE7LzfFncfrbwMkbhX111E4LtMk4cD37Twbjptxs6YwezgypU99zrDrvTB5pJXs3x",
  "key8": "4rBDYiwRUSoCQaBn4UbQUQMUtn58gK588MJ2H2ce41VJ6TCz9WfoCz9shrK3SU9a8iKFje2oUTSffkPKYHgyMPKU",
  "key9": "5FQMd32qa7vR9edjPR1TaBbZdbbGacMREsgHA2RM1WZbcdjrG56dCTRH9VXNAyPAEnABLRhi1t1MP8gQQRLfJb3M",
  "key10": "3zRsc9hC5sSrhkjkzLcR5QEzu62WhWt7WRY25iM6YSjr9LaTKvbv81nVEnCKYYckL1xzgUYWwJEWrJqLk18AQSSN",
  "key11": "4m9pBRAwwgtDyMSMd2HwhQST4Lafy4Qfb2pBAPzeUTwjL2DuniVGSxXxF1AUhs2QTVTdrpegT2D9YrXv2wJFSSdi",
  "key12": "nJ888ar7ymdSPPJga4PZ3M42W1Uh18rqr58kzZbmBiMwT9YdPLnzMvt8QFNTN74zwHshVLvEC4CEyL11eQj1FAN",
  "key13": "4JbydRzHS7Yohi94jh7xFudGgkKR9TyTuXcox7wPG4QfcRvKTCbFRgWuRUnowP788jSK2vFyspFMKVeucY7LBttE",
  "key14": "gYztS8jyQZF9eJfT2Xc8mesQ8VbmGDc6ZFtdAePam2mMccLvUw9bYV5LzYi6KLxnLUbwUYxtMSPaW65cDn7GPqn",
  "key15": "4gDjUeyDvNh4yHJQwn8orzPp8kjKyuW8RPku9fYMAPVju3wnASpBxaMBTr2jxegSD7AM7a6P2UYV7TqKMfecDT16",
  "key16": "4RGerKig4xJspBrCzTHrshnNAepLrZeAJz1gwJ4a6ctMFnfVHLim4uKrJBt2cYsWzk1KDTSZUCMk2FovWMox9otc",
  "key17": "3k3hiTHvPTKX1XAtPeQex8aBf6vgbXT4Q2xA3cZ3TVvJVbKD5Htbi3RpPipAttyFUZdRoCyZRHexf7ZsJ3EL9e4m",
  "key18": "bdDsdq1eguFo44ruDBraNgvyG2cg2HRPWcEyqBfgNqbY16rYbLsoLz7EARJqrEkuozpo5puZn9bNMNVUQyZPb6B",
  "key19": "3SvE1YshTUe4c3NpP2nRZrF6ZfAq9SkpSFRmG5KwpPaLPEJj95yaw1D13VjP9WjB2q1tmh68cZRjwLnTXoDHuFgc",
  "key20": "MZCHfH9f6tp8rXaMoPkUgGMwirBbLZNEQ9XHcqWDqvyNLKjBQ3rEQhh6rjEbLHpuSsBi59ZEPstK6ya37JPd9S9",
  "key21": "5Q7qeuYpWekgcM6JF4XXxpmsnCiSG8ToTeaVnbyFFKsJ7Saqo2atMbB6jBc7of5tAywMQ7To2LBaCppJSKyA8h3i",
  "key22": "2abKhdHTPXkCtBn9QKB9fiPFoczaPiC4AFPHSSCg1hQZjdc8ZZ69JUiWAPmGDbTVW4SP6GqqcdcnBTWzhwvd5BfS",
  "key23": "4m3wCgN4Pgiz3AV4yPTpbZSadqZ7PgMooGLkbGfHdkUdVYnWYJXmhaMakCFiD3xpR7YBMN7aBf8wHXCaVri88NFC",
  "key24": "LHkiQ1HXK4jvgdgLvV7LhjnNzrTGFFJk8NyunAHHvCYkR8yGCGh9Vje5c6QvrvsJbKSS34Ux4AQKTWxB5MzaYSY"
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
