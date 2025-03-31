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
    "2uHws15888wePUTesmMrM7YKphh96pLT7w9bkYN5ADYQMMQ5N2wMbo3Fm99FVbNbpYR2SvBssH3LRzQqjk2kDoWT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4yQnWd2pUWGKKB4yDZPL7SRW7tVV7GK1tougaEte5v3yr6oXJcFYMnWooR4uRGrdKJZAubhcNgd2so14sH3cFNdf",
  "key1": "25E996EL6r5LovzH8JFQA69GSeQvN6Kj37QTzbQWnPyb4zJsFB7J6EehUJL6EGebKe1FHEr5UNVWE8Sdmh2LymK3",
  "key2": "XtD3Fn7Z2Xm1ihwNNJe6p6RFFWGtTT7gyzBYn5FLQsngYvikcZF1Xy9fH8wM9evQWD2LakRb1dGWGquzTCb1gzj",
  "key3": "358StcJQqAoGrTBGkW7V9DzThib4TLw5x9MMMPaxLrX67kUg8uHe95LNRKvmTxZ59TwVn727Th8FbzgzU9wc1vsF",
  "key4": "4fdjJVhmsFSguBCySs46ZmHEQHThcJkpKL9DgFvSfTPpMNDbzz7X9HJG4V2uPzJ2gcEWG2A2obqyStN18V4Yd2US",
  "key5": "4qy1wF3jhnNu7zA36mBJ7pDmgvUDL5QmBsakC7UPTUraFQwYFz8SwrR4wr5tcHokfv5EU6bpEsSU12xBYoSrpNYN",
  "key6": "66vbdpmhveQFg1cTVrukWe7gwzgsM5n3q4q7Axrc9un9o95JQgPFeKjVwQ7q5VJbAmTXDHpdGAxwdf9gHe1TWxDi",
  "key7": "3TJJTmv99JU8vR92oq2wY97nU8e3AnVi2FKqn592HBYdnqaWPvD8o3pRwPzzLewSkRkkfYhnBDtYputKEvZ4ALqM",
  "key8": "55mUbLssjdkDoWAqtZBewPUz9RcT6R1UZcdoAryr4FRMR6U1B7v7uvxAVMJu8aXT7zdWzdRPdyjtcbp8yiFLWsR3",
  "key9": "4vg61eKgdTpLb3MWU3vQA8iYhRk2s7NFnQB9KDFbEZLHUW14XNAPvoFvtCtV1C3aRW3PkiYrYLJ2c2dns4Un1UPu",
  "key10": "2DLKd4q1CVj23JprU4mmE4TZYYuKyDfZ71oaLTjstEw6QPha73RPStMLtoWeeqJemh1krnLVVT1CDqrbSe2CerCw",
  "key11": "2njiXTURM3yxL4C91PrRMsHTnVKry8DYvJq38n8FTY2THZGA5Wa1nF2LPkfsLNK6v1zS88WWcLxUDuCzAbCsm5Pw",
  "key12": "3VVCN2WdUgkRF4nHR4vYzMKTsxZLpfGazdpwuJTeBh1h32cpZNbzsxbnjk9DL4PYAq7fKBTJ6M2ur3dMPEb5gQoi",
  "key13": "4neGo7duNCx7hv1KfQYqKqEfnrQmDxssyYaKNhKkxxS9BoVWWFQUHXqdbLffMJxhxWMHpcKL75NC22RzGoJaytyJ",
  "key14": "2pkhA6cLxWNNTrgAr9bhmjFjcACjbnnFWvo1kHSkXHaDqQT4cGmyz4y6thd2houcZgRPAx5ibJ8TQjGsCL9bfu9X",
  "key15": "4Q68A11ind1LrQqrR2yjQf7NqFVKfbVo2pXGpQYdcdrnNdhDfAGve4viei4k8q5h1VRjMJvCtheDRKWV8QbcUy3H",
  "key16": "5GjtZ6V9qCooN6GcbdCymA6RVBpCzjxbdCm1jZVJRSVuVutxfNzkp1SRG7YhFjqhkr8SSDYwidUqiDzSMUKQjGWA",
  "key17": "bZKXdyYSFpSYSHCe2LEC39DVu6WJc7qFvbz1YnKH4m2qFUou1S3ZNvpvdyXbxJXDE68pR18d4G3ABdzwg8zybSD",
  "key18": "wfZNhy7DdK2kBTSxGZyf7xrd1trtKnus3RN5ZeXtpwGHyvCKBhZiYreporHHc8VtzXPpvUto15tWxEZ9hQLeg1z",
  "key19": "5Q28jAmzTFxg1731zXWQoXtfEP56NiThSurE1GxdwhDVLLPtgBkv33QxZqB4tVFcAcQRZmQqoXoFag8Npw6Z1t3m",
  "key20": "4AqNekSX2U3W4wke5icykW666KjZDmFen6hysxJyehkgm5B2jMU16Vm6LS2BdWJtFyAHC4PjVgGqJtDiQPdnad3B",
  "key21": "5vN8X41bymoRdo8Fo8cT8LvWcHZNRnyGxELHwR7tn9wAaHBkgngHNmSxMNFqmkXPVafnDNgJVxyqFn1xhWkAcbLF",
  "key22": "4PoQuGPgjsSVJfo48tp5fJbmqmXtTUpSY9esAviUmpMDa5Fx6tqHckzhDaWtmMrYiusNuptGFy7fwW5p25ey1vJ7",
  "key23": "5ubUiJxBDs2GbUB4ip5PTK4C4r93s6Z9VfSEPHWtQcnRRPYTPb5HykFGnNbeuDmREevDb9DHTTq1dJmFHuykUyFv",
  "key24": "5xXseVV7hrLfqLRrwcvQeDuh9Sxaz87xYY788qS3eQD73TiTB6WT1V1piT4edFT23y6sRDRZFqeUCMdCDF5kPgdf",
  "key25": "5ZhoJBuD6c924i1ezs4KsBevUoQDcPqBrwKPdCGabWo5ek6XFFYqevUQQucnJSaUhx9pipNeDYNH3RB8UduP7MDR"
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
