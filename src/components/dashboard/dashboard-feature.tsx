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
    "3Dk8eWf8pq1zcZj6WCVggCusjhHkj2Cadp6fGkimCRsk48cFJrHXMPu7LGP7zZA1tgnSd44TErPKWbGdnA52pjCu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ZDdBsKZLtAVzSfgNKKNmJ4Ub5sAZqsWKwP7moQ3VEuwa35WFDQijskthgM7griXSNyUdjYPnVQM2h5pAS3rjgwc",
  "key1": "4ysZ6f6vRiiwetyCu8B99SyPpgRQD7dCBn6cMXoygqMEQKkUUTFAHGaW82AKuzUkyS5aLWh9CUppoN2VnRSbE3w7",
  "key2": "3jNzf7t1AChxagdYc3MNzh2DMA1DcRFZT9AeEJzyxQh91SWQghZ5kZDD2DR8dCSfwfmU2yFHhADzWcdgk2owzFHq",
  "key3": "2ePqerMAPLnHnA5KEsvKGjGz6aW8i1wpcLmLHPowMrHb526ASPrvfmQap4uaA9bgvHH7aEun9ajFGzt9xd4QndcW",
  "key4": "52gzkK758iwKgpWLQNBkrL5Dmz3GsVMU5sK2QqpxwgaaQ6PhnyLStjLGSCvStPphtYbQeP8VVzxxprU7E94unn6k",
  "key5": "5zwxnZqzudeWaAC495eeTgDY8RUMDhp88HZyVW19c6tM2nDyEGCizsAHt9DFdMj4WdsPKwJ8v679BoE4KMmkSn6B",
  "key6": "nefhJaVgNKtzWJ2cLjJ2qDeHU2edupUo3nHePSNw5MHLjmd6sjLiGRMDmmE47J4q24fNgHAvGAt4bwPoKJtLJk4",
  "key7": "5D5YGd4gtHUZhfTJvdD1MLob6npMDGyHt1ZVoq5ZEYUPDo3qZ6kwK56dXeWYT64NL59A6s5e1m3vx4exaQDga5vH",
  "key8": "4FQJCaFbZA6MpWwouRjDKodHAMKZKJoQRM3HKgJh9M3CQjN99vukePTWERAqnnbF4meG5duSghbw5Py4KZnHQsdT",
  "key9": "2UMmS6MAeEc29GbrQkdAWreme6zNbQJVVedecEPjQLu3GfrZ3kyPu6y8gDV35GSGm4jZnutXRvBb8LtAz9HQvnxd",
  "key10": "5iDfrrjJsipYWzXTFuTNj2ccmox8x7MkHiFbSQBy6d155jWxGWA4EboAF2YDtUr4uj2hss88RLUG6EA5VdLR9mFe",
  "key11": "Ff6S1kueWsAd469jxpQBJ1TRYU6Tg9Ck7HzLcSKN9Qd2Ga5HxeRxrdBu5YjSUg5UjD8ZGnresBZcDbNvN4sE1Hq",
  "key12": "BXRD5ysHtmBngXFtC8t3ebygyEsYhbnAGHbxzxx8t6V3vx7umxHDbXWmnD1pWaeMymXi3EVfgMq39H42HgxxnYB",
  "key13": "4UpwFAqG8dsDbSgFypTSAvTvnVrUECEY23yHorztrPevBas2VYNcygjXFShMiK2tXxvMq9JijSfPNaBCaWT7kAM8",
  "key14": "3HbpxpQ3rye3C5P41XfPi63RsrkqnURgyJjobocSjijoZT4sbo1BxhVuGWnpCjcqR25QzbkefsyX814UmcHBzJvM",
  "key15": "5j5Uzp1igx4i2GdQRDag8uwiGMLpWBq5MCPWCMvAjFGn5KYctfYLYumxKtkCx7xzvHfyzu71KHJ8Ec1n73sj8puG",
  "key16": "292hxL3413jcy6DSvL3jbVnymoQmRGrkUppni7nPqVS5Pqacnj4tnXFjuRJKG69H1zMqpr11yU3pMyDu7bDWGuAL",
  "key17": "45EnJmzvgmZvNR7LVgJhZjGjctzkR1LhECmJbgHGacsyRxq5XKKNzivgTpHNLWud7wyiWF1s41gXSGQMCP4gN1gW",
  "key18": "4hXd4nWZFWvSQHAiRNktgMaQwBWYzsjZBiHVsxK3AFPgHoJbNRJFATcNJ1UGGyV9aYSntFyvrQPr7SeMgjKdzrtg",
  "key19": "V6w4B4cC5TocMpkSMKPWDC7BMs16tUdZKfUP2LRmTskQnJMT3pZNh4TVWMfYu5midLAksTfSge1oydDpUPxPNmb",
  "key20": "3bngbS6ssW2ivMJw52u9y9jwgGLp378u2NG6VsdC7STfmWJriTT9xwFMuNHjNv23DbCA8cVwQVCFFcipi82K7EZr",
  "key21": "ZTfe3jmZrNc4RMBUHAEJAaix17MkeNZAoJUV8Y4sPn6QyJ6YR1Zrbbz8zMvLbUqwkyLqhhKG6NTD7mE4NKeBe1i",
  "key22": "2ExJDmGTtfL8VN2PrTkfVhxg5TH12gYdmVhQkMxyfTxaiYFJjFK7X7bNR2XJhhTaHSoMWkcHKsNB1nuM8tpgKz6i",
  "key23": "2VdYpgbg6umD3eA2qYaqK4g5d7B2YjacFyk969BxjEZigYnrTYj7o1ySKEHb3tpijnhjwKfDgqJNGHiGS3rjDqZ5",
  "key24": "5bDWDujmFmRt4DBzG2ZNWUDdBeWD3XoGCyX6AZSYjf9X72DS4VKvbFfLojLETCWMiMBSAVYGggaE1jxXZ8cjU3qC",
  "key25": "u4iXxrb3AkB1cEG1Rz4GZ8eGQz9CkmrrWw97YGa2F2cXjzkxYNcJ6M6MMAZ5hCCttVVbnV9QxTEwFYRpuKwqE5Q",
  "key26": "4Kwy2Kmz2JPnmSx7Z5LZRvAQ5PRJo88AGx6KaAtEXeEh5NxnswPRXa1AtBbCyEonGE8yQ2RFpx1TG9n4rk4BvPeA",
  "key27": "emVeiK34vEkQ2xwppniwWg9J6bqi3cyzR3GvZzNqxBnfyBbPP5zCyNrTCR8e3sVzBG9yS8dtpAb8QqDpDwTP8pW",
  "key28": "4K77VStSsm9WG36BTceubgvai4G6oXAjF5kEs81tRczw2pkhzJxuiPF8eoHVduVAD8z8s21tV9tGukwumTzFgNgF",
  "key29": "5oBL9QrcB9HeTDVo7SCexoujh7TaYe1YzaXPHxBBXXxbZdCHv18tvPgWHmNeXB154vsTA81nkDNZC5v3cbL1kz7Q"
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
