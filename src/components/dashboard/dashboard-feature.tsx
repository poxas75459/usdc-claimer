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
    "4r9LjULBkRzECaF8GB1oszY8NvMaH4KcVMdEWTyS3ztAPpoF4sZsK44jkCkiwVpDFZ9GcgPZqcVc7fudqNco16Zm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7qANSN8pnZFKN2XmzW4ibzMpMDQiPB1whSAVqwUcPcH1Ldi7mywvEspPa5e2S5dnNqNeiMWRrH5XizM9uPYxysz",
  "key1": "4SBasYN6Ra9FCdw5zpENSfs6L5KK8X1yYvnmu7EkZy7zBKAfqkh4MTnteTfW96yADJKuK6Bw2xKtqVp3jpH5TJjU",
  "key2": "ifeS1CESCP1LiLXZ3Ty3vspFvTAmxnYfDffUHMUXLhNW7QoV3hjkzNFGCBDiuXNU9ZCmnw4NUzDkYFbJJaKmwx5",
  "key3": "3nYAUrkPTFWxHKXHuXEprHRs9QjP5RbZ1M2YFYYWNZctcEVeDckvXSceB4ChNgy8NScBkC6D99ksFN3AqRUgzrT1",
  "key4": "2U3RmRXVKs8E9zsvMmJhSM9ayJWUnsYBZTfFuvzv3StAHDiiwZbkv8eqTQELxWT2gKYxTBBY88GJBCUboUuj1LDd",
  "key5": "5DNTmg2CXjmwE6vv7ibhBuKspbG2NHkjTAqpyG5m4c9WcUpwBmwkx4hqYcxHvZTEsXvvRxLNW6TjKpEviiyz9zKS",
  "key6": "4j1N5kWPnQTGLxah1F9BSCH8fDU21YP2iDUAgqevVvPCSUvrZPLrtHtRCHB2Uzw9ay4LuFwr12cN3oawCy3rqCX1",
  "key7": "2osbqYjkfq6hqubiUN25a8badGjNfEn365uYJimi1c6R57dfuSFzehbJbTT1Rn1H6Af844ptM4oUy7zt1txZBPov",
  "key8": "4BBnWKkE8ttMvUdcnypPQggTGN6XtbSWo8JMERgWMDetRgKrBiGbbzwPAKcaxyEDCMSdHb53XC6qE4DGLPiMPtzh",
  "key9": "3988nDrAnAtvxQAJLEA8ftMEAT6qRWxQ8XVp9u7hvTt9J6Eq4pvax87jHC36U94QuUtARvoDsSfa1D2NmaofyxT3",
  "key10": "3cC97L6q3yXdKVb1DEd7mN2VvA7Lwt1qv4cZEz7FV8CfUmaMDXTBPVsvJNDh7phwKeRfQ8kj7ppNpuiB3nBwQNVb",
  "key11": "4WG9JcF94kWmQeRBhUDZ9zGWF3HLGz5M61thYvk9son9A4yfNP9CcY1FiDNWXZ16dgEy8XNqYuo3UW5Hgq948SCL",
  "key12": "bnJsXdYyacfHDHfUmAVCkm4aqqYwVymVhvsw6yVmHqL9CjV8xNR6fV1ym6aKsiHA1MXhTu8rsoHKaPx63ufRt7F",
  "key13": "5wf8AG8G37wefifKNnAmoLm2BXtU1eo1tp2kRfb1rsoiocmUPoW2KvhJhGMX6FtopZyRC98yr1TMoj6qAo19caie",
  "key14": "55hfkHVCMHFrTnPTBP5CE6614hkvDVDSMkHy9YP94A5RQyMCivAXd2VkhKBVZin8P2Xb9cmEm8Ei2fPxg1KLwBoA",
  "key15": "5cjUjPuRrbPpy1yzPmSKGBV6F1Pjkx7jAshotog8GPF11pEmC5LUhgwNRuR6eoxpzPPGA7Xq5r6YiMKxhhaCpWd2",
  "key16": "VtaByYSUPpybz1R1Ty2mRFuzQNNJJZftUcfjpuf5DSWJ4jxMVJrwYoUhkzWAGyQpYbYtu6nqvQJdk9dEcsSsXwn",
  "key17": "4bxhAJZQa4PmXTk3osxgXe3tqGvG2GBK13ubjjgug5Un6CaTMNPYCsCQN9eM8eNCFAvMgS63RTtcjpHqoDzHtgHx",
  "key18": "2Gw64HBpAirG94R3Gb2ihUmGs4wGWiQuxb6e4ajnpQcst3ujraXb132afAL3hy4vS5CbAqpbDSvxbgEzEpL2okfH",
  "key19": "5e2e4HAmANmEjYbxMN1M4MPD9D1jMxmo9yDSSig2LkXVocnbnhGwptGNDD7rju4PzJFrit6TDTQZqy9spi1FGcka",
  "key20": "2iWvqLFyzoCjqmPRk7z4c9pvNKSto27VVcvpUtGTqRnHYUCUg4hoE3m62GXpWveCCuHTuwdmzcMN2srKYn8K6pD",
  "key21": "3P46sxHGmYHXuHKbcpynBTUUD2woEjFKMSj3E8LYqwbxWNF3MyAXwpsjNCr8xHs8XzKb2y5Day8MFyQZBvZ2kxmH",
  "key22": "4mcP3rTicxQBrt81kUN1q2KAuL84C67D7WRVa9hAtE5n5xrakZLqemMwX7USpYGd8bhnfd1xZi7YBYeX5MxCj6aU",
  "key23": "3R1fZbeYyFXQ7YZbH7KHczc3ebBv7ieb2aYqMYSiuUhVmN7VPot9E5c9H6td77nwKCpg5Tq2nXqnVdvkCPoep6ep",
  "key24": "2Ead2yfc6MLiDQnfN7q7tBYTq4bL14PWMBWD2Z7UGJQjCyfGUzUyPVBJu3yjFMWd8uyU6NshPtoNFa9Lvn9aoeYc",
  "key25": "396gHkykwQAQuWccAwRHrsMMGRcjFNh1sHc24jNnqQsVaXaybksYwUoVDykDqhU45kjdVMgQNeKqMyBUeXgPfH19",
  "key26": "2Ke5oaB97h5S8bi5e6yeGZQhkTE6mwwh98rz13z93itFNFWCqMmRX1jX5iP8otPASoacu2taSQu9SxdRzFqTqhZk",
  "key27": "3fESBM93J9EYPh4sjvy2FCHMgJhB4dWHR4stVndnu6fXtJpD5Dyf4b7LGmwmS6pUKEAUUQvx6H6TBRGRjbxcdpPb",
  "key28": "124x3zNcBZqVbNFKb7xCZe93vVbACHFC9teg3R2ngvBqDP1rHSct6Lwtm3heEQjYoWyn4LXKRpSqGUxuaYcjBcLp",
  "key29": "483zgVGSbm4FBQic5vCC1BSc7u5EKuesgpZfQHFHEGo1pM7frEH7k1YxQ9CxHkQuNY1Z89z9rq3jkjjFwjaEnh8G",
  "key30": "2Y2QuL5NeFzRgZXTEuN9eCJDAweCqnBWanEA4KqYfiQenfdwgj5kBpCyYJCtCCxXJY3hZGMkakFt5NVo1cM5ueD7",
  "key31": "4TULAHb8UViYiuCybZGvcudy81Up3dz43F4m1msab7HWfbG8mdkPupwRaouivHqYtZFufmbe2WWT95a3akcpFepd",
  "key32": "3J2vXEDCDdcZnZX4PrrgPjwZnevNLQnTwFyTdR9rxHbnBtqndPQRNbmQw51X7sRADSoEsoM5CUXoBX3bNAZ9Zcej",
  "key33": "fHGCEPuKFF9zzmRZibK4S8UHQfgzfEnUBjUqJkwNYzL1CtH3LKAoCUry43GoUt7qPPyqR67LgDA4XLcp8JC7Mwb",
  "key34": "3cYBCwj4ZZB88gmLWSKQ2RjW6JjTWaFrimWsBsu7EQ6DCAdZBBbqBXQkBVEzsHyZM52ChbukEnsWSyALAX2H1NAL",
  "key35": "oskpdUD4gKxuG4YWDPM6wuHxV158xm4J1myV8Cm3sTk7rZCnprV4nZNyLQ6z3wctDKDEpDvN5V7scAmt93onG8W",
  "key36": "3YfbXi9CteSvzXpsT4g8bpc18D5e2PB1qvyY2VNMtTU93dABzH5UAqf3RmAVFzLn6GYf8EMk2qtoaXa4pCrsNN7U",
  "key37": "5gQY843XjnBqniuaMabfd2AAFqNvB4kdYBxstMSBWEYi1SQGuXKYx12AyFAhWmxXUfF5M8p7sE5WHtyi2qXYKqAC",
  "key38": "2jUkBoH3LAha9jyECvsbyDCc3wHQYxRLvfgcd8pbjnjW3sABSy8UPWYkuHe7YTy2UKg19v3wueA2JsgXkeYaotZQ",
  "key39": "4ZZJ5ajNQF36AxvascMDkYcGhZCdTtmBMT7JivmMiuaKEmNcmECpgZknqegR9tgfz3UK4rTvDWMGbip4AEEPdTnt",
  "key40": "MjKVwi86y3dXydEWMjftmxn3CQidigkN5zBKLKT67JmrGiyHHiRJAC2tF7icf9YGj6K8j6rX2kNHuV8bjzbgofP",
  "key41": "4SGYtq3st1PEwjUpJVebWz7HHj6apGU46gPyT4uJzxdJ5TGZ3vrByg66NDQYMtqPs6sLf82gv7HD4D86hWsFVa9T",
  "key42": "3f8e6TzDCKrzTAv8oPoBrnU5BzY5yWD4byy5RhK8U54Q46sNZAranNEwTkiQSS81rWcJpza6oqtmC3jkJ3Fk2YV8",
  "key43": "2dVvKPDhzQ62fXugMiwdh9X5GzNkt2FixNST8tt9sZYLCmgbTyoUQHy5Mb7rioqnVcoSuHpLuefFzpfaVcFQALXB",
  "key44": "vZfYZkxkx4fBYez1bHvJe4D6CqHRAYTCwWiXDm1TeSmPM9GWPQdEaXc1tyAkK8judB6rt3PTzCbTLa8RKvGaFNa",
  "key45": "2cY3ZZQcNGyZh58n3xArS63DZ7tyk2CpoD2FHdLEnKKfzMqwv5zgo17pXfuyYVWdbtdWDhRodDZEqTMJjDsuYCFi"
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
