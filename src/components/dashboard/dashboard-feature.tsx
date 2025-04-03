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
    "3L2ZcDNouJaejG5jdU7gKS63S7qAZipxADcSn4te7E2DQ6dv3yCXbo5RCr6eZ8QLypy7hxi6Urrch5eGJBDJADED"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4L4XwKDmbTNtGdW3MCuXq63VeThB24wayej2cs1pyTLdg8DqXiXeRoW1kXHHd9DxbdLBRVXoNxSqp62VRzzuBm7W",
  "key1": "4Zyt47gGyqWkPqVshVeBpeLXK77XTcaYjuwMoFK7bNYVRjChH89fBqoPpqLnbsbQSWhKDPifCjdXt45nQq6cuD6Y",
  "key2": "5a9T5FbrBKQcUoVxcsobG7PxWCVL8SjRZdnicH8aJXR3qbq34BhezVvzcJor1pyqQtfJKfVbxxpbaj5SzkccZdd9",
  "key3": "3RYcLSgrHGqgAu8swVZebgG1TzDXHGtRTW3ShR4vMFcoS5DWftR7gQTbq3CNp1Q2jN4W9EKtFWiTCqnrUYqk4DiY",
  "key4": "3qHNDryUX3cmZkNjtoHgAZsXaY9E9S6XQvQYti2epxKe3NgGgLi7isb4p72C329kByKWsWRcnYGhRMZp3f9KyVsE",
  "key5": "2UZ8pT5XJ1Eg4WB9W3u9kSQGa74ik8AEJtfChmK5YQWCHyw9SVRt8g9gdtiLmB9rS1GD2ErZnhkYNSn8mb8h1cJR",
  "key6": "3funDVdt7YLcwEX2Pc3ep4FpAhWFQ3VjR4LFJDnHVD7AUa1YJAkchWsYtbFiJfMConxk7NRVjvReW5fnQmgtS76c",
  "key7": "2dVvxFaLxKrXcSnxSoyKqB2KQCYDseKx7NKbuqudszhrgBgJYppyLWEs5DSP48zjT4XppWPberruMStzuVu8i2op",
  "key8": "2B4uumXJQmUCg6GsyQf9bUc1eMdiRFgA3GpfpdBwqPkxLUKMh13VzGBt4qDFxWW8BpeyEDnVcU2xCBBjH1Wh5Hox",
  "key9": "4ZM2s5DRzouNdVAKrEz3tyRdtX9jQYYNUxGazMNL9Eiw9Cc17GGwSyAb5J99UpfCrkmgKqvZuRjanbXL76J3Zp5A",
  "key10": "4JqpbafRMC5Cx4UDyqqghhF2xD6YdQ2yzWGVbXNWHGgBzuTSf6fcdbqAwfrrLuDFNUvGxMDPHT9mBLFpW6J6wboi",
  "key11": "45fzdi2yEen35uxnyBv7dhaw5x87f6x3Roh7GkxiceWndTftVepoJvyaMDcSYAqLkiW89YaceoYCrYuD4uXiBF8T",
  "key12": "61Gz2igxmVMmxLoHVrmpgYQmdV99zRujoVqgoqqDkt8tEb1ykLf42TvQsBRB3UrnEH5gyqvZojzApaZ3Q8Qygrhw",
  "key13": "35ZBZxZ4kWDJvZpAdXQUw7wqxNocYAwXqAXcpq7NSW1KTL7UkYyzfkTV2jAgN2n4bWQW7E9w5kSVo8VekKNpAGR7",
  "key14": "5JoTKGSttJHTpDBeAvimrXCYzeDbsnkJ2YSzDfUT8yWMYXxf3TpeGpQB4mRjgJq5AFaStY5PFuunAfaYhtTktema",
  "key15": "4vjutWpPbR1NSc3PuJ3d4KVzA5S2JtFCFWDipv6pnbV7wzskHpjyMEAGXend7A44decZDosh4tHLmvSgb8shjjto",
  "key16": "655A5mMRGFA4EMUy15VAEbK3wQmBeuDY8VwREQhxE7ziEdeZn7T2CmHCiu4rUoFHbfpgmqe6fvHy9eXxjd8c29V1",
  "key17": "4huor6wX6FU5kMX2Bya5eS5JoP7XTDYxsaBLYrS9PeWa6e3AxrQX1beniT6zXVCBQDcB3Uz52YFeNVRqnXmy9w83",
  "key18": "VVXW1tieVKbquCSrSJAKoYGuaFDr17iFfEkUMsfugaj24NJ8ccacgoNQdQ8V2q5e9AQXM7Z6ycBfZo28zVsvafF",
  "key19": "5tHfjegKsbT54Xr6VBRYNgR8Zkj2tWAZmWdj57tTVWhvT4w8oDZmGWm27agS48rDv9TiBU84ZPtGyJHGcbQkvx28",
  "key20": "5gCaVHjDW3XRF5utHY2hqSDohVtgxjBdW72mrQXhwRk7wtizVvRXnZygYnMoXXzBSChEB89jw8MKevRH9eW67PKc",
  "key21": "39wSPzcxy3xRJ1rzE5ASFM28cGqNstRbUod3krZhvCNtkmBeazevZQgsWHneUbTPso9kZF9MvAg1XfPrrdYbTUY4",
  "key22": "4uFd8DZoBn3xR1xeKDb9w4NQrY38xXok36y3moAqBBhJxbsNBnCUDsAa4XiHsKrH1sZ5XpNL4DEUfDsxA8YeSchM",
  "key23": "4emouTvbAWSMZF1UCdGxPcwqDfuPrGBXdPTzHTP81HjzEZVPgv9tdxeFSm7We12FSJiERfSLp7WuP3XuwQRRQjRR",
  "key24": "5pAxkJW4JZ4pEb4YYQkM5Qd1gk116rTCgDs6fbGwtLvNLA8sqEGr163ZyqQPPghMpbXk8sSScAcGuhBu9AMhN6pg",
  "key25": "5z13DSEaYdkF1yosnmc14Snenvbcar86sugGUPpu3ym1T6XE4pm49LhXdfmTofCNVdpDw5gRw43YM4tEJhwN1vtt",
  "key26": "21FijTpoVBHtoqGmHRfJncKimZTZtduW9vqKLMcqRwmTqEH4yUDwtxBi4zLsLSZDZqrZAofXPVDbL6KwF1PEEBMj",
  "key27": "2Aisp1X24B4wAFy34qPWTEQ2nXdqCm7UiYZPh5TKugFLAtsXYLMNo6w3aPGFaWnD6oMLYMoJTnkivH453Mn2rP1w",
  "key28": "3b41wMoWamJFWAPo5GWaiPHneBXGX3wcAsZQwa7NeXKtViefvH44T2ub5iwyrZwTpruX6sUarrpFPkEmrGLG3rPH",
  "key29": "aXuFrz8YgD7f9kcwwAHxippRggnHQbXxet1TeichtXdhWneqUSrw6jQjVYCM8Y5a652cqT3Pj4m1L8fwEyTAZ6F",
  "key30": "2XyC9FKN2yUcCUChENGvRD1KR7tbehiqQPjAiKPzkLP8iv6fh9u385p5RHSBrcPp6P1uikcVnmcXAuVpYg97y7B6",
  "key31": "m5gmqwthmgZeVUhdqDmBkR8LG5a8n9g7x3EKAyAZekHY9iGVMrwHHMNBKBKNK1zYy8X8aE2wzXpnRAt9Si8bAuK",
  "key32": "54DUenh7kcsMhK8hZjQDdKfggmT8LxpxpjfSp3q6CUeMmtSY1D5rFkRVWtjS22bPfBnPx8UizBNbPv835JZYry6S",
  "key33": "4ifx1NJXtPBMRhujpZcc9iA4ofxqRj7Ctb4SQKEMmcyw7wk8L7mujqXC4DbA7v8RuSnFACvtS6m7qVNjVuKBS7r1",
  "key34": "dDUY93FKJMPAUV665FqdfM7BrdvXqWQ66apkt8rAASNN8AratxncHATzvujMQxbawB42dZBbRJDZcDLwqzjXB64",
  "key35": "2RJMjpCDfEwn7Kw6aC1rocLEUNSLMSyWh1iBBgRTAbBi45HKTAZtNXqQK7VsR546BH6pXsspSNnE2Vi79G55WrJL",
  "key36": "2nGTk4HjxST2kjxCQu9EXGqnSRybMVamYv7ZF7RQBfPDvawCXyV2qPHHyzz5bGHxq7noeefPhYC1p11mKJjDNmsH",
  "key37": "3HhY9P7uLJ1R1kWUNG4rp1kaS4MRN46SJQCfoGS92ugATMVLHWwt4pisbbCrfNurGHmL7ouVDYm4ojaRm3uVNkEd",
  "key38": "4CeY1urq1FLgZC1BuQo5NatdH7wAA68a4hemBG7txzpmEvGkyxEMXdT21Qv2L1bDKC61odoEzczHVHo94SoTH4g8",
  "key39": "UCuvY5cu28i8tSumu6VQpttN7TVfswVYF1V9zfFiFPBsJmYahUUqhq6dvvYT1D2tTARuaEMyxf1ryzJCTJLWwSD",
  "key40": "2J77oHvVDPHdMBkMmMUSBgbEQWo91hEwJDibHHLeUo3e9TVSaL5A4Xxho6vg6qUNrVZE9qEPniBnueCVpnSykA4U",
  "key41": "28FSg5Me6R2PrVW6LknMWpig1EzwwrJHfE51CiMSN3yt5yKA3o8YJEAx1ZRt3pxBtQ6MFwaDWS3EufiKFTc1vi3d",
  "key42": "5hnTrjkwQbWuuDg2FNtWXjSnvgR4cJyLbBAcDQxUPuLLMg62mcXpX6D9uwY5KwhxHu2WLtL9ZGn7iYYeyWQvqH3d",
  "key43": "2t5biczpY4p4jNsjHpWxiXKHZdJHRdMaVfoKZHKY4Catmdp4RTKVEwzVfFwVqjRxag9qnegkZE9tmrfLrAyYN9w6",
  "key44": "hzytcvnwpwdwtcRa7DWdXvKfzE1AMTv3RNpsXZWaWy8bAgEPdZ22spdFp3PjZUhv4ba7Yn15CGY4ec9DZiAPdxA"
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
