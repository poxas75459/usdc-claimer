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
    "5R3LdtJnf8zaTWmfhEssoMGfAUchk3aa6g4L7p6Q7aJaw3nW7qjsUW6Vj29YjZ47G53nb51ZzJ7b32LQ2fC34yUh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "53jDJEQNvVMgXS9tC36rQVWokU4nvSgt4eszBCJUVp7FSWZ1BJXJYSU4nJbr2RQWpwUwFehMGpP9eq2K3wRFyzfJ",
  "key1": "5H7Apn7bAu2Fh5EXrdrqVwouTKFH7FnzbTYcMRUgwLRtho8LYBcXwr7qWuBAeRGaxkDR1c9hMNvHjqCBfnvdht8Y",
  "key2": "4agoiguZs1pKz3fg9KsJCBSQzdjyq7pucrUgpY8bS53tw18q4G54Rt84vjLbfUCsBLvDh1D9SRd72VAWcpAEh3CC",
  "key3": "5BrbG2kaN3KYgw1HrTiihKJRwNRdacnZCKMYUVgWCnBhPJD1bSsK2VreN93ebdEb7r9VRxTdf8fyMCeyeQnjbxRa",
  "key4": "4TsYTJutenKPFKdcj5Ac8SFgdT5L1ozNyR8zNhd57eZQMsiC3JACLvCnGZN7wCPNb9fQA9ctR8QvCypwRhvYHxV9",
  "key5": "4SjvEyAnZiJ5Q1z5ZKdHfqtuCudG4HqntJn8UewLdb3eT6ZwkEJyFTzXY82zDDwkpAWFe5K459FUep726WJQDh3v",
  "key6": "4F9MkYaAPLLvA3gqQPmNtjZrfRKLoN6vV6VxEHnGVdjqhDgw6wXewpx6akbaCcHNS7qeqoL6nYpdUmhM5x1hFZXn",
  "key7": "4x3RuUhiqn5bM1J8EbdweJ5y7whgxE6JCv1ZteJx8RNqNWzLCeRziKse15iGDi24uuF2qHsT1GDun5SLqjtQjCEB",
  "key8": "5eEWPM3vLF2q56LMgGKc4NDpfbttYZftmzGQi5VdNn7rjXFzonhvaeffFLbtYw2DP7U343uEMjc1e3rtQzzAaDDe",
  "key9": "41UWQnr9PsgVMFYytEQR6XUcomZZF8C2igPUVKakovQCw97eNv6ix5EdUBcHQXXpA3qEbPXXECKfDSpDZd9psogH",
  "key10": "5STCXJ8LxXQeqeyDGQnVvCHLnVaPBeQZKtg78cnCfXQ3j1A25g6VPc2fjQ1cAjHAv36ZtULczuTjjjrBWSb8PRx6",
  "key11": "3WEwSMpTGe9UyDLVb2W2SicoUSZAAg1kxNuAYExKh37SPgTCoP4dmbFdpJwkZYXq8PgATTBo8NrrAnUZWGffBfh7",
  "key12": "ikkoxtchnxZdn6xHpdnpTSczocsCckdyGiCYy1PTJWB6pF3MGLETxceW9BHj7NNWvfuXTeyKMNYCxPfxDqWsFo2",
  "key13": "2BowJpkEWqRTK2g9R5raCMKZsWFWceNL8YUyD1qPnMsVzSHBbqqWBvVSnVSrKVdyxEkNLv5rXiw7nVf9wEmWnbJo",
  "key14": "3Y3tSjLxtnUH88RnDX5UcLWEc5FMk7tnmF7ktNRGQgr1uViui6BDWHcKjPQnGSHZAE11qp8mFj7qjqQP2bbcBDk3",
  "key15": "2zC4PUEAUcruPbTq3f1AfkkBoV6afMs3yBokXnHHbEcYrSnLABmr5v62tDJ96VXYG4XVS8LNketuXtoDvbUuQoeR",
  "key16": "4X6d3urPBvS1ExftmVwC75xJh7ktG87yXLEHwiKixngf72HNdUFZCtVPi13s4mtPXYsw8sB6W6EAUYyJEcb9SCrz",
  "key17": "KGNa6sqA9EfPEPuiXVBFRidEA4t9dbPZhSMvFR8jwzmfSfUY6hASAbAfjZhBzLEirpW7Wca7ANEo3n2EKtu3jLG",
  "key18": "2awyv86jjwFiJbGDbvDpCfdLcCrvTL2h4AFAZBWBCx9jKKqmuYehdKV9mK7GZYvQj5Bic58pSrHaXPZSwuQuJLHx",
  "key19": "4WKC2RFszaLk9FBuxNZVBLTprGc9TDdQtkjbGRrv6TwFkuEYuHiMHgGrugJYUiqi3me7cGADGPFYTq9sXnWDfzmR",
  "key20": "3QSpiVc68YgGSUa8mkhunuytwQU79NSJfJfcZ5cPyCNBEYWpV1WMDL7iAtge8xf8EMXyXaySJXW6ah3oFAvKKAM",
  "key21": "3H2wYVYum4mf7Mb8er9pYAQHTWk6xHGZ4yfBDSFi6ahqHLX1TtgCNUV1s88MpVxm7hzXtDn7Mugj6FhSCyQsgnBh",
  "key22": "3b6QZo2meDVCWjEqePbcKytvbgvfCauhHwJ4R2VV7EX13dtnQWMhu3xkEEaTbKgKqdV4fFyDGHsVSTKkno4zsyrx",
  "key23": "2L4SyNfhfieuV7q5VsvoFEgc9ppCpes6GSeNk6oFkFMbSYUhA8ZvjvdCQTLMd1Gmq2MM7WKRwraUfFG7ZtCciHJ5",
  "key24": "bfmSB8Tp6WRdXtmrHr2TBwLXBjtGZrZmRevaU4u9XiJ2qBcLJvX3TnUp89wyLYhky4xqTph3VfkeSNEXez6rsTb",
  "key25": "4GHckUUneiwdeRhmaRYrtdRzs9q247soTNQ5gCox9Lb5GJ8y87Yc29qmFL6N57TE7zKLBESz7NSdNtkQgjzuJ6YB",
  "key26": "4sdmybvCUKWPH6TjCJFL9J7j3fecmVeozu3sp2HSrP24PbEKTHEwbfFWHJmZqFDP6pJP3VwQYBosw5a3wDMhq7x6",
  "key27": "4JJygarMdNGpp8LirezG5pnV3GURyJRv2xgtUZ3ihcdgD3mFsucXM7dXMgdN9doCMS4iUvYC5Gmj8DHJYrZpaRh",
  "key28": "3a2K1JsfoWasUwoGbwgqDu1ETPfWBpzAmKPa3BaS4uJiYeeNYxpWqe6W1ZFidJcBHTmWvaas7CfySfykwcT8jgkt",
  "key29": "3mrB3SJb58oSUQ3JiQwG6AFNFGtjrMN21Ywc4L9J1AL1qcCBiY2F6jUymC7tjWtk2AkjGN82Hivi2KrkEEdw9WBF",
  "key30": "2qyGdBq2j5Sp42ah4PoNmBNuLRdZrLZQuKyk7YJyokSpJAdHFgQsFxiENKh7PXwsfCuTrXQZQugJX8BHhU8P7nzY",
  "key31": "4eDreRJKLgwD5gxu6quUFd2uNjTF6AB9xE3S87BGWji6TSMQf9o7xrMLvddc75W2GBJvyC9zDYgUJo113yWKiKgH",
  "key32": "YJ9cxkzeK5vK1oQiQwiwZgXxGVAssFFpZKDXsY92yYgwspPB7E6BSR8gH95zk79EEbcMN92aJuwsgeYKTXGeYDP",
  "key33": "4Q6LXMko3VNgxfrEBd81ejLD2jN2SPKe1gjAPViSYuEi8hnk6w6LxAP4HeFkWCo6wgviJdQ7tSCNkJNXPTVjTZFV",
  "key34": "3hFCHhjnuKHcftYYarA6gZmfGF4g88xzTrWB1HfmUxCCxq6p7KxshVCmR9De83b1eMv7EEatZcYe4Q9D1ndHiSaD",
  "key35": "uxnPHE1nbM4Cs3V1erKNg4hJZfwAZhWg274W66HgmL83uezrr2GhCho45aJTaKWrcFvUhGZKzY4kqnRTLAyEWUv",
  "key36": "5V5Wfa6FL4EqobGNp3wnrq4AwXsKpzZw8V4n8P2DL4LFztkmkzNcN2FJiC5LnajbnuYyiJZo1nF5BE63ehTKHy9J",
  "key37": "5WZiwCJ1XWUH4iqB1WvFfDQxNzvkt3wuhnqMDQYpoJ4dycVUbcuQoa5MzKH6MWexgX84KFUfRjtgfCXFS5hVreST",
  "key38": "TFLLfJKAR8Pr2FxFsQCVHod5pX9gwya2jMFKwKA8CD35A4TkTeExrapQmiEBycWrKNzC4eJdcw7zYYvSND6nUWY",
  "key39": "28bZX2vwjubhRfVqdUsDGqra6FYQPPnzAN5VuscU5ehZXfCM6XRfPC8gPqkQSGZyXVa26NRqhNPt9EZrVDz2Xm9W",
  "key40": "2ggmWtEX6CBsvMh7aXouAeJmdSvGuKRof9zKm3aCRJAFNj96BDTBynKAkmaBYTC1LKRfrs8FbJd8rTf4SHr6Bhpr"
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
