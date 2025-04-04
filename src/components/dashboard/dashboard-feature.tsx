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
    "5Rb4focT1aAfojbAidUVvoK49aZL5MHuoWRj9M5pE7tZLGurzJzGcPXzeXGU3z2igUFLKFGFWXeioZQLhUJfRksm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5b6WmmN3JQH22YrZ1WJjiFb1QZnLUvp4fuwVj5G1RfJAECQa7xWepdTADVTk82qQAWF9iGe6poxbWaimt5mVree9",
  "key1": "23biSqH8xC9AEcznvhWALrAvVViTrndfdxK97muw1KQbc3GWyLE1eCYdm76HQD9JxxjNkixFA7rLD8k7hK612uke",
  "key2": "5hED3HSsDVSkGMqCyHjSKDEoqJAC6aebkDeaNr7GMJYrtGyDRCradxNBy4B1LEGWD2oiZESiDionoW4DgF869xtk",
  "key3": "5yG3m3sMeFPg5bYkevp9HUb3EAmS76sFtV5DCLB9R3cH5UssAhQhK7bhqLJUubXMmvSzB17neXihgoCcoj6bxM88",
  "key4": "A9gonuu9cKBwD4DyF45BD9GGZLLjfW5EEnvcd57Sy6Lsno1Qiqf5G6fndSiWbGXZ814B9gkKna6e2W5zbqH3qpY",
  "key5": "3LQA75XhAsiwLvHH3h7WAUQBH4cehT1hjZm9SuHLxUGkNoqDd5DCk3DviaigzeWKHDNBuS3ptFxA6v294T8JWKuL",
  "key6": "4kioLxA5ZAhQgShZMztTCvLAqt3hDi5UNmdGUW8VgowSa529YiBWFjk3brC9GEATZ4MRaj12YBYW8kiyMSFy1nh3",
  "key7": "TyaMdjGiTJRxWaEdAjUbFUDnViGfHFcsHvrZUiyHrmwKVibF2EEaBgtepsmsxcEguTzkVsRd7vvjWgyR62bZa8j",
  "key8": "2Z2oAFfBU5yxEccL1GZMw8MHgZXfk9t4jk6rgtkrbMCyGEGv6YSZPpQ9U2obZytnM92j2ARZ2ok2CGbnBDkdmzSG",
  "key9": "1oEE58PrA6NKvHUn1xwwX2MfKn2gB4icQfRMw7A3cmwPCJXK8aN5q8vw2at9LwTxVRM9ZQejz4MLqEapUVZMmmt",
  "key10": "xm4A7X1AQLDqqXQS9UmQpqKXmXPMkXRSwKzzdTY5d6skTx5eQ1v53EY3pxrBdrFgkz9yBAJUWv6MzU39zgTCwC5",
  "key11": "3c3s6rhLP2zHvwUoUMf1b5fe82SbjeHRtyEe4migV4DjLaC4errAQRLcdv1seaf64CbPydQj8sux32ppvqW9oadW",
  "key12": "5D7GzF2ER9mqDvrYUqBJe7JdSJo1vrtbPZccUs7eDHMxk5KYLS6bBE7wF8jGBC4fYGvRvAypgozAbxKk1SRsfgYi",
  "key13": "2WW9jpsErKmsvULQdEfYyVF3MRRjaYTpGm4RGEoJud4WCYMWCputhj6CqWknyPwGR6J2DDX8FYt1i9Pz7ZNgYf42",
  "key14": "2nYHcJqnMLnVupzLYrTzV6mp5jA1TNy41hYwHkA1Jg41hQ3Hmf4G9W2xkhWYRe6YgfM2hRkgieAT9o94a92LHjyp",
  "key15": "5MK5QUzEiAWbc8nq3aneryzUWbbNcZrp4bNUsjJwLirV6ixT9mAod2S3irWzihwVAWZsB73BN5T7qkWsLbkHEYA6",
  "key16": "39rTv2Rz4ssCj1zuPfe8Kin2YVwNq3PokUFrnwY9PgRCTgX6YqP7V9cK3KtBDPh7P9AH7ofHddH7HeDbdQBU9h2G",
  "key17": "4wtarxH2sThJtk9EzjjsubGvKJu47TH9aTg8TmvEizkMKjLhgRA5hfd2pgnZZhFTmT2wzrcfSzKYk7tvPs3cEwVE",
  "key18": "4RwmpsMSDxfiJuW1XfYJ1f6i4vQBsG5t2Kka3enJrWoj3wkyUQJWRinUzFXCpyfxAHoGZkdawkFRYdX5JhkUr8uY",
  "key19": "u3n3V9Nwq3NxVe8FL3ig6u6cVGiq7zwL8kL7wgceeAaMWRS5Q1d8p3RwBrP9Xghd3FbfY8VWstEgoALf3ygyJ2k",
  "key20": "3UFkNjMMEtGBaMLhGVJQXzhFE7CDtKoxkXz82qkNhpTQvEHfZEvtawaMxPruJYqMyhCfpUGXXCpVENjmxvaPX5Tn",
  "key21": "3BxAdLWKeJRVVf8w7vGv6owu2z1MwDoUpPbYkKaaqyypMuyPaQbVU7SLCbikgo5SRBeNRaJAd5oQPexrtL44Shpk",
  "key22": "4u8rK4bw1mm8yZeaCgo8PixfQd9Nq3uCfJopSdAgFdTv3HjTYDVDJBP8TCAPfySLs9HHK1KKRtfNeyPxbAoF6KWf",
  "key23": "4DZWJuYrNyzdPqPYbs5aULCtoRg9oV1hn2FtJG9vSpQ2WQPFe3HUBxpT34exSw5rfU8RRdj1kTPMpXnhYJxuCjUm",
  "key24": "3jFEJVBuEfPCJk75EwecghKQh9ZU5WKqXzNGv6qU4JcUHoL9ntwXqeWQth5acJivLKzweCUdsGpaWFd1Qcvce48Z",
  "key25": "3417CdqFzmaaK8LMf2uaYS7d6NKitLvkyMNa1pEiP2cYpaHZKs6VSYs7Y8sEF6o1t8yEzroENESrf72yxwoVNE9b",
  "key26": "2ptAhpNxfwyzJtBxUepjPBDhEdVewSFf9EsA3jcbD5KeHMRxY6YBiYAftm3uV2pKZhg29tqBDHj5hLkLwUwqzYGq",
  "key27": "2Phb68hadRATkvPS75jbxncfS7YPhyhupqoMcBhE9d85SxrbmLRZrfzB1htikNYiRjLxRpJSXKDioRrP8ybug2qD",
  "key28": "eUAqEtKFXgh2SWjooEsYfrAMSsfhtF4PWKyC9fAWGiSDABSsB8prDA6ZAJnMjddtGYtFaHs4iB3FLvDf2AfNjzD",
  "key29": "4UWwhj4cNakjfovUB9pvbjGT2mDB4Cko6XE66LbuJhR7ivKXk8vqivNQrnZ4qpwbCxNm8q9ywJA8NCuLoXusdG9W",
  "key30": "4YQDp6KBYDrMaxvU8mXPCtv9ihLVzMHKKQijMwzyxmEhqdRAzdE2dQoPw7j5GiePGusb7dbg6ZksLPLfa7wTMYPh",
  "key31": "3QrEJpnbRmDWrjn6VTa5SAmjzLqEJYEykPxBwR4fJ97Yx7Hxeh5njgxpsezgFpWfHu2MPHo6vWYEG86yeGyEJARq",
  "key32": "hDss7eUAmHQaFF56kFT338xbeqH9kBguZxreYQ1iKMkBTAwVVEiEapbMS9E5T7bHnJZqC3vKEZ4WUdA7Y16pwW1",
  "key33": "63TqiyYxfh2m9vr6WUoWquhheguvYx5uG4iGtvKJrx3AMF85HYXX3sGKgp7pRiqaTe8yK173GVkPso7wyMFD5J1b",
  "key34": "5vTNoQDwe9zp8H8V7S2BXomTG5EiQRZJbYVgxL1Utkm6EbPHZ5tAoNFKEWrJ4CJZRBQF2WkGRZXtS7NFGgHSckHu",
  "key35": "4mG9FCUKfrhkfDDWHdFjjjCcGqj3XEwHRGasWje9avCZUrzZYLcvktMxnnaca5QjD2oSM8N47bcUG1Jzqcisdw8b",
  "key36": "3kYWZsSWVPsZSD2JsPWD5JoX5JvvuyY72VJxddQw4H4rHLXDBYh5U7xnfLLBDcqDBTicEK5gfTuhvDx5LLWAy5fY",
  "key37": "4etuqE71VTePJPVEHRapuSN6EZS1cqhWPxADuDmqKhSB27thPwM492kEubQRu1e4C3mQCKs6nGLQvXBTXRa1imRS",
  "key38": "3hs1XdHfBhQywJJEACWZWeNamgHy7dBURXveGUNvPkPfQPE9QqacNuUde11jq9AEg9qmiKCmBXENot88Ve4R6e4S",
  "key39": "3sW9PSm3NWLcgkNEDrEPShuCVYdAak12E2tdAVTSgrxZwHKGSP9f3JkvZzMFZU2jUqGsi4cV79M8a2prRrSUyjEN",
  "key40": "4eNr5TACAhAgxHpuymXe9eZAQNsNLDcG4yY8jDg9uegSPBv85soLkBQktAtNu2592LEaGnjS1HUdHo8CeHg76RJk",
  "key41": "3zLGKsrr43G3Z92H8Ak8uQUnjNTrS2SrKbDHyBkGZoKy5Wes6N17QtCggfstAw1j7FgxdkdGvK16KciFLW4QsfEo",
  "key42": "3vSaBnLaSobDhH4fWEaWKSoHmpyYCNV6J9EHDBYR6vZA9qjBHXZeXaQR7c7ENpPA79Sh71YqukGH8j6R16UKYB5z"
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
