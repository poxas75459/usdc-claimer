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
    "64KT5VgW6zaAY55x2XzmUvZNFmt9wmSssB2oCiQAupGvyQmQi8xSqDDbQXaQWDrxptQ5xhsqphthBKaJjSnMbcAL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2wtAPe97fMK6Pcw4riEWodqDRRPoZT32RQr3a9rZRXqaxU1FQyhGzRbxADFR8jGYGbvT9dPo6uTui8nwHgaMYYre",
  "key1": "2cfUFbHyi8DUUTBteCvxB1434sBYLwusED9Lb6WTAmhZRGEZcyecyhjMNFZ14poJyapMYEhT21boWpsG3UKckLag",
  "key2": "2oVXzVedyiC5WC6FKcjTcH7hYjiG8uEkDdf85p5sa8LYEhyDFQVjnjS9kFT6uWZzopo4HEkZd73RutsdeXPjdAve",
  "key3": "7FPtcd3sFPc7vJg4x6FDwdRBHqVAXsnj4NtYP6T9aoJcfPQ7LVvdoFZi3S8GM6nmErBqKKpB64xaC3AXr6NN5Pf",
  "key4": "2nMtxxj3eWZ7wzYvWVCMBKh5rHTetrXWapXLFYN49rLdbxJbtLuFV5D5rCmXmYuDohuYqY3ACLkgLvbXpwNqVvsF",
  "key5": "dGRkQvW3tYJ4eeFwBovaPgY6aSHVzUyaz58yJN12R26YCDMpBSFSKz5dQKdgsPbA3w6n3mnZJCxKcmQdqYbtrnb",
  "key6": "4ekAWQZN25n2ku9Hgr87yU3XAU4bkjV7eiU6Weu5aPmgrpZV5SzMDi73FVezuPCcyrAc3m5D9tb7xsw9ZZx3Noz3",
  "key7": "5xiPdtsroSKxqqLSLaMdqjM9Jx1kwHALuTh7Xq9ddRt1oReQT74uz6upuj9fiTY5QkXkX2Z3Nq3kP8ebw4ZnTKhb",
  "key8": "29va3JWkqx7JE6zgzZfE9ckTqpEjweSC8ezMiDXHPtPaDgAjR9Y5SqQbRof1i1NaEHRvwcRLX4PrnTkxcDzTbgg2",
  "key9": "4Xyxw89oYqmQgmnJ5xD8H1hoxeaaWQRE3txVYGFCiTFCXzWVZ2Hd8z7Y7F5Rqb8TpgVHgYRv8PphtqNZV525JyCr",
  "key10": "25THizfCZZU8uXSftDA96WwphAysLC8a6VCY14QB44Ff7BFV6x5uHAHK3RnLpqWjrT3Z9wzs2XVUcZ7ooCNbpgVH",
  "key11": "2hZBfyn2N4iGa97STKNXF5LZxfF8TQmPozo6orHxQqAovSBvKz6N6NDUggQGFbfSo2qQLyxKkeDwcRbdoSCcta5h",
  "key12": "5uiTRqUCPgQQnXRmwGbBz4MJ73diDXCs69DJcpkqi4T28BrVonagw8pGF1CSDBn4UsUpbMQx4ftDbosbT52j4Hkr",
  "key13": "3EVqZ2KGmNqnJzryt48ckcaP5sVzDjDzrpxG4myPg8PUBBUshgK2T42k176jVemVXRvPbgaWCXC2zQ43tBc2Uryq",
  "key14": "ehhjMsr8233bNEAJzLps7ykeQT2kUNU9nHoe27xb7ccFtw3u7ddZz8Jm4yEXrhRXFFaxdMw1oprdFN71QiVGEX2",
  "key15": "4kM2s8hJqg6ghTqBMNYLqjxkbQDHg9Cynox8N9EMejErShUzZFgF7pBtwfCLu33qiFyvR7Tq4dibo8rz2KEjy5tV",
  "key16": "58J4Jdrqa9YYZHp84RbDencFPqUAFUvViR9AyfNgutU87ug4FRPgZ6wiDTwXXmkbqZCRYcmKQVc49RVyLu6EHhkc",
  "key17": "23VdVjHrg9SFXBznq1KQTVzrrux87FsfFP4neCV1gC3Wte3nvHB5f3HMgBco2Qnbsy3PmRSKYhJUmRhFTFUkbdzx",
  "key18": "5a1tspY6Dig1bhAqDEinHyvrcFebxeyPiUvGnY9YsA1BLrmGiry1nYV65ZgG74MNnhyovtqNH7miLaBe1cKpfcMK",
  "key19": "41k93cFEnTVmnvHm7AZ4Lv3yyEPddoM58rNBg8JFsAVfZ8oGKyQgo5mnxvFAqNakguvLwP15YsedtGiwtsLWpwGM",
  "key20": "27DExtBMwK48QfVhaRagWrfDUFKYedgYDDbQgXa89nm69V2VBa1U2JJowPGXMvfD3aCdCJyDj631fek3YUvDJyU2",
  "key21": "5kqRDk3XSANtpXsvdAXWyUQdBW2RVrdaa2EA4oKqo72sLdjkNRkzBvHzwN3bsboLaBdE5pb5yQxqaefqBvjvrmkv",
  "key22": "2iHYzdTQK684bz5fTC4CU3LmuAay9Gn5W3QyQfQDLQNa19Rv6k5H2WDubak5A2FUvR265dgMFoWGtqYZzoTrtTQQ",
  "key23": "5HcWSeKiRPe2jLT6trVNQCNK7gRBKSnmoDYV2vk45ge7WjjLRVTvxNrSXyZbUxpXiDwkwNokaVNrhh4AmBYbtuq7",
  "key24": "4hwQ1UaoFuiBHkanNQoT96qsHxHYZSN8fn2rnNX9zDBH9rARYx2CgMQew1PPgB4GZNTANgwQF9QiKwzKA2i1wwZw",
  "key25": "5WTdmR8GhVrxaYSZ9bwY73q4kQTsjoHVaT9x634s3zWB5eP59Gst5qCXBMp1YrnhB3ctfvrFwfrgzYz5ZnjyCiJW",
  "key26": "5vqQwymtHi9zHtczby7CgBQCS5f6QAVAmezMrbZwH4v6pktLxNrwvJqmGsohKq1ipuEcpWLxP68szttxbZ27Ma1B",
  "key27": "4DiL5pWspA1SZmE7WXwBoQ8Q4g2oQv7JyhsNBVNjZmBH2ZhVgT8C4vVoAF3v35fE57FG85eRtnJJbrL8U45JDNo9",
  "key28": "4ZZE7k6Vqg6HtGRoVe1VpRCAXaV9SWuP1SPspwNGUG9BPUQcaG1GzDXhoqg4c7wmodjRA7usaicbqfTh51PMH718",
  "key29": "bShLEAMt177ocABExxfg8ZLx54HaBTghL3u9yYiF7yWkdy5Uq7rj7dbrFRVVfg1jT3xLh4SodTcuLoYpJJpamcp",
  "key30": "4H3c6pDHiDodNJgZvAnQtX3uaNURG4p6r2NNePNhhHZ1zWxAXcigrNZEZe7ptD2DFfQpeLq8SXEe3vU8PHgyuZ6i",
  "key31": "4UmUNGW8wZwkNwn6gQ86jRgge8XLcUP8qMGJrRmCq7KGChFc72cdd8zZcKDTetZceZMbVHnEFDqsgXqYqfjvkotj",
  "key32": "5ifcs8ontVcUb5a8AxNt7tuSk9LVELDdrizpH41zu37vvNRmeCpQEPsX6swTVbDfmdHgYnja5anXrBqEMnn4X6Hg",
  "key33": "2rL7VQKszbNMA9XnJjcNkrh3DorsUC8UwLVw41ADKpJaKZWiSVPHZoDgp3KbzpPzh5DDcUEcf5RNwVyTivFxQaAV",
  "key34": "2XYdDK6sSsDno2rA65jEi1J8QRYboiSwPnVuRLamN1t2NuXBp5XUi4Pk3EZdXtt5nu4ASNpFmWzsYLb8HBJeeXhc",
  "key35": "38tcPHjckEvPUkVLzP9Ggt3hiE48xUCQBx1LeHCsLB3Q7WNet4n2Kk7UTzKWrn6wxukp47KvTCStxYiFJpXB1STU",
  "key36": "YHCbySGiRVmgb58mMTVs7h6oAnLFr3ix74JJHaMd8DXX3zuSkb48RiWoBEykaz5kY1BnVNGi9dG9aP1q8UJeDHV",
  "key37": "4jVT6yiHnCQYmcuvxdTCLrcVaQCGJkmgJ5rWn6enq6C52KFzLAT6QkHRgDnPVMzQRKh2cnorx66ftvr3gfciawM8",
  "key38": "bk631SvdxiL8P938p1xyayG2ps4gyH1nb1yvaXi5CWFjeWp37P3eDUqcquiKwdxrNwvxg5c8BC4m9UXg4fGEpJR",
  "key39": "5pbR5KhqXL4hsYiwLz9aRBX7vyLvdReAmHDuaob7CHsuBMz9ZU5ZUNkojCvGYJsPxXYuDXeCE1HpBAZDbQAKUog7",
  "key40": "3333CjiXN1ReuXUzdfcohS2EAqYekQKRYRTg29qJN8dqwCL3urR3oZoAgEsJPjpTqKvSTPvRtmuD3LDLg6za6ipR",
  "key41": "4ctuf5aGV5y7mQN7a3H8rf1KVaprkH4JExBHZkEEjjuaVVe7NRcviTxc7iBZmUWGYpn9nHeA91xVk3kWsDi44Ei2",
  "key42": "paKu9HZ5Vx6ZxVgpWLbwBrDVozgcL1VocXpptLkSiyRTQt1GJmBBvyQ3SAJL4uDvCg5SBXGjwLU7QkUoySQ5XU8"
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
