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
    "iW7wSXbNQdCJnri8AXa3ToGnYNFBjWYDkbbq1c6nmgs5bw3uBrHCo4XhzEZx947yBy8a7MnEenfs26H1hFqYY2y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5N8d3Qc5rxAjCQq36hPfG7xAWU8naPsfTKX4w8BSYaFcu7UkoSdgLY4esRhEapwXWEdugDzP18HpLhTQKQhA5CUY",
  "key1": "4gmZLkmJ4T6HBX4oA9b39uorMqZzhjirb3ULhSjuhzutnJiBHmQJAPGtpCkBdFRt9LeL4V4GifgBpCC1p9AJz3SE",
  "key2": "duZx9iJiW4zQmuArfg9buE9YuNQCsE18DYEmwXyQUL2AdJ7HhzZ5LfcrPy3sNS6YUYZR2RHH2GtyNjhshfwczKL",
  "key3": "PMG92j7KaGkToqpT2MgWy2qCjDVodpjkNTZfpr9uSZk19Pdkd9WKFgECShCEENBEyfsnZfyDEjNAFMSgH2wVPRh",
  "key4": "33EcRctPD6YeCdgZGvpP28RH2E9ASmVoGWLeeYgL95KhTbmTzVgyqgndbgMZoTi4eLtP8Y7fJjkycA6wqzuzEpNH",
  "key5": "4mhYLKFkCC46jbgKVjkFNUqhNZoES6yMasA7Fyh8GzdpieqrztsvFveSURvbXYRik8d5oRujMSU2mWYyJfzkYMRf",
  "key6": "44zufVJLWu1VLfT85dkT3NRMMLbVrMGGi8sLtaL8abVkCU38CXFctUuoqK7PefmeMNK8auf15PvU66odT4FCJQQD",
  "key7": "2UiC68ooUxvoByNkai1Wag913o8vtFmzidryLAxYsahgT6qD6Tm5WiNvFZX5ncS41kdyFpJyZTVDfYpVGg2EuLfn",
  "key8": "2TPyY3AgtEB9qGJDG2qXkE3YbGRqQm9WpHb31Loscspah16WyD7TEptEHSAwMeRVK91Sb3cnv6GF9aoJ7eMSoNk3",
  "key9": "3vskXNmBcRrmECqUTi1qRVv1ehEr4cgq6vQqxuQJjRYbSYA84NBQpYur45BTfsr7d9YSPd9Tf6EfMoedCgQZvnq2",
  "key10": "vFZNX4cRYyyeN49QHVabsvQmggsyntF6s7K1KgZp8aVx2z3duV52xZtrNYis4CVLnMqTbaFs71aPcPeqqEViSvw",
  "key11": "4gLXXnhfYBYtkosJYUVYig24ThBpvTygh4Bj4fQy9DhWiW1NTfGdHBH3vUwbG5Bn2i2qQqnUCsct6wp9dointNFU",
  "key12": "49T67ZxeNA113nTbQ9ArNCu1rdTQnp1pn1qsFJGxc5oip4zcuvBrwtuyH5LPcrMDETZwUKefsojAaZ4AGZRWLdQu",
  "key13": "3med3LCEsbLJJ61XkVajmBzM3yPsm4m7gj7RPbcH5uGrdtWehT5andxKk3s8oAwBEXLfn8xWqsJ3LzLrWuM3KH7E",
  "key14": "5LSoqZ1j6vuxQ3XeW2kQ5wWUULb8i5fcBoU592DtTrdTxR96m5TDaaMD6ZEivKuoVZ8sCRsmXpUWvEBmkD5VTUFh",
  "key15": "4MP4LFScXriB3MvwMwC5LsYtg5TMJNMgeEH3cuYHXg1PrtW7CziUziSxSoejcpewNCAM1FkprhBujLsV6SCmaLeV",
  "key16": "65iuf2kGNHotUmXBPRgEEoxfnTM92hc9o5s6Fpp5DkRV3ivsQ67eCL7Jb6pkBZFsaRfF2oYZhuCDA6XcC5do3bKk",
  "key17": "5iDgSoRQzT1LnW3A2TBbbtJAGvC8z3nKM24Wz3BQLVSSForvFEowKv7uVCAh35nsyvArWbEWzaTFgWJHjE9gbX8f",
  "key18": "5Rma9HYVpjmWrz1DbJdT49QUSQgW3bWVD4y6g4rLUpPhKKecAafMQY6fPyvCoux6t34mUXWBtjVAVboSR3hBxyGk",
  "key19": "Udf8oKxxQEJjRrKdhavZjs5wioQfdZ745uFFAdFYhgVFCdAyBVS2bQs1BUtKLH6e6JozWJCLYDvi9sRUMtZAMmt",
  "key20": "4nD9SBVc8o746Lx89nyMux1QVpn13qbzxaTGWKGJCTCs4v17sHoG3PL9EDrjPVT4fzCUFrFJTYT7pFCXyB9tmpad",
  "key21": "5DdSbTrP57hqb5YnE7B3CZxwmuPVxhBcBKQA6gJ1CJSqLqqCPvXDxGjGyh1meq3JRm3cYZZp3ijpBTbxRrAotvev",
  "key22": "5bMAr7VtqiHKwoJtpbB4s1FaVs75ig9dHzh8xrweKjeNpC3vkNW9jSTtwVHn8Tyc5Z2wqyNS9A5xCgccpKzdgcsL",
  "key23": "67LqEi1E5YSYRoMCsAf23EBz7HhoQtgaUfJdkjkABfu9WrWz5nZ8GYrZ8E8TLka8ThNnkbCyD3zBSuaPYNQTRTfC",
  "key24": "5BgHqQNkQDoNCrMNvAia2VjLTEtEnHJV2CndcyiyHS1f2FdERbqcUeoDjeuAetPY6BsuKfZSd3Z15JMLEmgWTC3T",
  "key25": "6429Zu2Eu8oDkXNZL6x1CDdi9QbXposDfFTJHZHbGjCmh6FTm7BhWASSvDzDoDTZd3v39RfsSzcfPdVfpFMKej1o",
  "key26": "2kGaVAnGiMEjRX7hERyR9fV3wSBC2UfTTS9Ny6kepvXprLCM1MTzksJNdiJ7JCbM8Fkp2gGCV8VykqUmkV5fgoK5",
  "key27": "QKVoY1phUjBytmEYr4Q4575PwLSYMJqB2nJuq78QSPhZHRnGJwyeuHCURZ3HMbcRPonL4AR1gokbxK8fchMD7xZ",
  "key28": "5dFX2vjah5foexts7DDL6NyS4yppE3Sr8fq2g8EmzQ1wCuH9qkGceQUJpyTwB2YTihJSvsTW7ejggp8jJoqygx9d",
  "key29": "45UCUVMyU3afkiZtvyLupweSnGuRMwj9tyeM1o5HroWopCKHMWro3EWSjmWufAzsd1iJE7vWPbpkdV2yZnCSCyuH",
  "key30": "3RgHRPSbS8aGzQyAaqB9k5v9orhxxcRCiqYzdUcB8ZDDspHFkj43W3NTRSKJmjBNYbK8vcNupSbbssPpKt4rq1vZ",
  "key31": "Wxj51JC6m1UCj4EfP7nmV6ZMgQSZsTMLSZg9b9paksafkr2mneqrpcLQfRsmuDWZP5xf91as443tz5Nm5gBTBFD"
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
