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
    "bT54CFXvHvyvtYV8d6GmXZrWvPN8kXgh7amrEQqs8Kaouc8PscAS8wj2KmSqz6Jv2xAU1h9pmK8snLMz6VmMi8e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3HA3a1VRRu2U9KmMGmFbaTAnoXATcHe6m8Fz2RSp9uRaXCEVTNwdok529vNvfkwgpkXE4Mkwv6u2asYtioGVhGDd",
  "key1": "4888tgui3CJ1nV3uhGjLp2RBqK6niHnMfY2Gg5pv8K3RN9YaguBHQ6HQB3RiwMcLWbh6mm9PMrSHaERSmoYgzWax",
  "key2": "2PKfnJPCz9CvJCvqNKGJbj6Agz7MwmvCTs2UA3YePrvSmCGDRxQ6Vcsq1PZ3Px46HWiamdfQiow6ne12wwPRqjuX",
  "key3": "2Dk8aTJTxM9qNAikCtwhfWfS5izqYrD1faaHZsT2G6qxTwhAWCmVgS5GAZmdAyDSLyLuX1fSE38uf8zJZEHpqtfr",
  "key4": "3Azehj5YbwjqbZeo1N6QBQmGNdyB2yct6K9CFvXoLeHsqY53pBAdvXiZLQP7g4rMZPuMKYtRVsuatA8BrdzweXHz",
  "key5": "GTn4HmEqDijvGdQAqtipqS5QVrw245DCwnebu7FmUAhU3rPxkV95gjBKnaYNT6G354E8x5YwYFwnPWhxYb3nvwk",
  "key6": "h41bQdiXLFEf8yNJgbYQuA6ZrtGPZ3F8Sdcx4Vr6jFJPXfUsmZdohE2VMab1hjJ13d65BgfrD4L1h3x5TvGKtnH",
  "key7": "2E2Tc1UGK4aGJKuzXyUq3mGBvUA3C5oUqDVM9XxZF6xAqxLtGpBdTFy2msoMDgjFbJzADPvQE4yU6fE2oDF5g7L7",
  "key8": "28hFqMELK1wUpjG1AvsSuy6dgq7WTEhjLi8yF9EbPZtX3aSxDo4LjmMTuWaFnsFDVvWPS7SvSFAE3s8MaMHYcy9Q",
  "key9": "52iFEd3cnJb45iCEKj13osgwAKgVxLBXv72FCxSfvZoa1zQLmhaeF5p1CymY2woft8yeGdtvREidQnFqwEjpXfGU",
  "key10": "2ajvPtc8wb4q1iGNt5B3Yh1A2nXJXJaPbSBR9pLVPWPA5wcDZzVaho3PfTnK7MhsKA6wEGV6vPFLDqQQtAtcU8R3",
  "key11": "4DoAf4742XtQBGCmbw5VYjUzRB11nZFdv9BPrqmGMUKeiuUdrcxsCbgLzVptKEBPhJZqfmYojGhCQzTk3urr7QKF",
  "key12": "3AUox2bgysEmydz6pCdVfLsGfGqof7FnNsPMnKikwcg9NmbuHaDXvooCUaWt47RZN3wPEvpNJyD5xcDx4cT5ZfhU",
  "key13": "368wT5q7vu4qZ6G9SBmsdpK6K4oG84RXucpJWjeHgQrXbwEJJUy9R2wUHvJm4JCDujtQUHAdDiJQyda45YZ4ygyM",
  "key14": "5ZAT1Vm2yyWkaSXKdtQ7yBhAxyMiTt4wDLFu7TWQhXGjS241FfXf4K4N2zMfDYCgZJMmagkrX24sFy9hSrW9MhzL",
  "key15": "3Ym29mysikiPetZxqgckmKhwrareS5VZzY8xMEe7tqXB4VhdiuVsWigfPFfr5spWNUCUs9Ug1ChrVCqFzV1FW3ze",
  "key16": "4F5HTugKuGtnyVZfscuWRfsgCgBYwKDfpuHEqDDYYp3cvxNDsfqo2GZqiXjNvQo71N6nhZH7ind9ExepW3WLm9pP",
  "key17": "4aPVxGkaUmJM4JNNdC3yondVjmQePiA8zA7YRrYyX3Zx5d1wakjtW8677oGT8xeAPqy8E4AadbTKdmSGYYnK2J9f",
  "key18": "5WNnSbjWKDGnPJYFWaLaddF7UySL42tvskmgKd1jk5HTEeR3PeAKkXRoLUnDMN3hgFbZXHogtpF2D7ETqJhvcth5",
  "key19": "4Az918ZGjyJWbzK7NGR5AxQJREWNh5vS7RGUR5ge1pgX3nSxEWe1Kv2w2Mjgon5LbFyyEbJrk8W5zQrw7QgSBr54",
  "key20": "3fGiuKRuhgx7TH7WnHENbo6vy9cZcGh8qapTNrANP4zsscMNKtfEfsK1hq8Biq9FqcVwutpS5nesMqWKpxXuPtRU",
  "key21": "5hdj7Q5go58sKqNxUthEpQRfUSoDw3vh79gmtKj14s9kReZeReUGHbynZXYuy2ejwa2PEHZkUQWxdovrNMNtGrpM",
  "key22": "7EGsU4nmrF7LKoWHfEjKptfF5zzMAPgSX9eyp8REmfQcbpETnmpmTZpPi271qNfhG177LbAy8aGZLRCo5SCVtG7",
  "key23": "5pVtp54iHjtA2vvnLCkExGD2qGWHznP1SqebDwJZMfRsQ7nyhS2GoF8GvmY1KAmSK33L2vY3KPVtoRYxkc4Sh3K1",
  "key24": "44FojaTv5r464ztjYjLj6Db239mNwG2tR7d2hZrrD4Kqv1ywZwtbnvoFHDEdUwBQrfG32gMWZnjGVcfKQvS5ZYGs",
  "key25": "3wDMudUd475MD53NaoE2UgjDxozUX7cDvZ2JDx1UY7kYRSw5xCWbQiWN4PQLC1j4Dt3PV7qEmAZTLx5jJXQDApib",
  "key26": "EqrXrGyEKpUjqBCrZ7UnLmdZBs59fZfAchRrLkekQAvkyd11DTXF9EKq349rpVSzTSMEbbQhCc2C9qinptqJiSA",
  "key27": "3KLZtiTuGfUxFpo1ofCZ4Z9ZDCxytQhJMiWASpePH6qp5yCz4Uiq3eYvtL8jTXoCJrydxkFDaxBLiNtSXpmjtvUt",
  "key28": "5AEwwGmT58Mtt962C4iMV1o6HpoJJ8seXxXrZyxUesR1sh7grtVq2NwucDvTKA9zfeKTBA8CPoBcfXd5eUkWmipf",
  "key29": "2j5GaxAnJZc75dUUvLBMB5nRoXjudjUpXAZhbwGTy64QwCUDFo9aP6VBmr5HnMBegiWjavKRHNKJmYNfTEBvk236",
  "key30": "2KHVnT1dYWH5NoLrDMZg6j6aCyKwAuQufdZPVD5J3XBNPFfZTQtYBTtwzHVf3MNadtKmn8FzEXciEmBpSMj4P8ZN",
  "key31": "3gNZTXibKVSrTx7gNZTtAiS7DaVtEbSapXm5jjPTuLxcSsdgqLcpHW9ogAJDvHJvJFC8cpNzmLfPnZgVYLZdkH7i",
  "key32": "5aLYNE25TBw1bwKGqmRG16treHLDFFfmezQqwjaMyV29zvcyfsnkuupQo27ZpErD7MzfXFEtY29kh487CFPQS6Bi",
  "key33": "4H5LecFQiDqeAvnABGmWCjNUUnep7VGHBP1114CJyyB9KJFt8h7qRQokjtKBpZpGNbgMah4gfrQR1hnySy53cQur",
  "key34": "35jrpPWazFrYkciQnh74uAEU2jerRj4mXtZgwW8eRGww2sYg32bifbnHvzaMW475apMg3mQRovTrwXxedtyu3dT5",
  "key35": "5zATPHrkFx2XiPYUtC7qVw3F8e8TJn4FemWCJwDNesGaFJrNYq8qqB1T2sciDzAMrbktxwnU8HcX9FmNsz7ou46Q",
  "key36": "4Q4F3X8pATQS3wu92ESnjoxVUh6WZGeb2c9RLKi6SbwBDT75tufGhNm8TcKShY3s4aNm1a3nU5A7TWSW1brueSt3",
  "key37": "5EMtpKJtcDPH4hrFqqCgih3P2wBoDt9qa83QDBas4Gkcxt3yEp6xtbJuHQWuGGcUoi1b2wpmRaL635t8e7bdBASQ",
  "key38": "2GrzYWymHWJaPEHoaNP3yCi4fahXGwBZsj5eQp5EeT7SA7Ayh94ukhUXLDSBPxLsxAaDMKEkg14Y53HiL4zCGndo",
  "key39": "4QYF5gWNXJSBTuQYqtr1VUqq7LzW9aARFGAPe6epvaxVjzU15mzbokPjxKebHiSibLSXnsQH3qcQAa9rZBYUCW7K",
  "key40": "rafTMQdwgMNeh9FGus1dir5AQd4rQbw8erQSkcAPE8scETqR8StbFmDkZTsMJFX9T3P4SA3buqhUyiezEsRHW7R"
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
