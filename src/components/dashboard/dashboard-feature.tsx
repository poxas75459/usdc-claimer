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
    "3xPRhdoodF2Btas4Hg3D5MDg3xCgfukxME6fLZ5umiF7QaAJbCroYb7jjtXzW48GExve7bk9nrZuekmVssASnvwg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "45n11PxtUQEfjNvbPzdXRKyqxDUehZpwzuY9QtAEj68upQbRPt9Qum9iWNu15MVwMCkYGovwSc8ChZwga5iuK33m",
  "key1": "dvxn7MVUC2vEtXz91kKhygEhKSnsatP1gbq2ECJUReaMAkQ7g1rDDCW2p33a6S72gtinRM5U3NxpTf7qihHvVjm",
  "key2": "2YFyZCdkmbURmiSeQXNzDqPyFm535MmYUQah2t2b6GYReyPiV7gFJLbaPVrkcrTeNRDu4PNd8YDmz876mF6sSHJi",
  "key3": "4umcGHSEK9eh1xYPRTdGWyhUxY8pbmzqUuAMcrWH2jAc6g769b4yUYKAZc4yDh1WZgnK2PPm7jPYA3vtEzAmS5Dt",
  "key4": "2nqdRHHYTmJ6tcxSxXS4Wza614nupBUQhXVUKstuT7ipC1wftYVfYcJKThgR4a4hZxio789B7kZmQbmQMZPNZ7xr",
  "key5": "49At7aYdv4eSUnUYhSDrjjjsEUswqyMAiVNmdwXYoRjWxuZaMLty9izsEYT656ozmxiX3NTQ7X6j1ym6UnbSbNpm",
  "key6": "5JpYCCB9ADBESNYBXYupBYfYtoqNjXfWgB6tG352h8DgVsVNNExMfxTaNFjfhbk64WMmRunzesvtbemcKaz982PY",
  "key7": "5EKgA8d2Z6PCgbipxpUyNaaJNxF1TTFiMZHc9nwQiS7Fab4WsAGgu4DEE6yMZDwZ9ZbfHjPHKDrfyqJRyda1t8ay",
  "key8": "qYxkbTGRbtsn7guu673PafohNKgpFDKQvwkfXM6N49PnwdtgCAps4jTtjhwrdvEQi71ksADmzrWKcDqktbAFumV",
  "key9": "5jvqC8C3nBRgGbTGthYWWqc81GJQ5w7mr63dtdQHqswN1cyzfTaEJBg3dRj9WaNXpo6mc5PxmPAcDpuEGMaqyfwp",
  "key10": "5XgtKZ5TFr5pkdBG7Ckn3jcypZc4tgqMiCq9QMfezGhmCGSZUSFho8kh56kr3LPYee95RmKTEmKiyKCSzgteug7Q",
  "key11": "wS1tVmdTPAojpVABaSTDkUqk9yhYMpGhuesUWGaexDKjCqjWrYzG4nggNUqBPLNjVbcBpRoiKP2xaQ7nrK1Uor5",
  "key12": "3myiBHDbyjZEauQy8eLVqTe66jVYRj5w12sugULMyBGXeYovfrr18K3LiJ4srbLJD7nXRSTm1rhri5YJRe7r5rW6",
  "key13": "G6HKaVH3npqwykUngG7H2ZhKAsosstmAtdd9pLYMZz3d6DKxwf25nEmRuTWmxJPqCYKHfztRW9HpB7UCsAJam3f",
  "key14": "2yQcAwWeDj5AdS9DGQDU13gai9JxUUdzrLouzVHYk97wnzmr9EFPPywgdaX9HGA2sBcQvAfq4ejCXJXCpEQkw18W",
  "key15": "2u7NgXWNJmEQJ5NKJQPhG3fuAgPoTcgW344pvJHkucQe4QyhjNkXcPa8Uryj47siAELbfHG62i13sSVMFSzPXkJo",
  "key16": "4wN3u6NxVdnzKrQmQDxXjqHx6Y4ffLHL7tRbjn6k92cqbeihiUyF77VNFp28VfkKcrHJNxzizjxVysLSp78ZzxBb",
  "key17": "53vWxUCwT8Eu51Xww6PTPFZ2RoKs5T44bUWDBsqgrY8UTjTLswk8gemfMu4NrcJvRmZ54BBcu1NMNnSdtWnPX8av",
  "key18": "2EfFJ7HQEUJAnFannogZ1Gbe2XSwmJ3H6tfNUxxBpkBLg5X2zrnhTCqj71FbsfDfVTgr1njbgrFqYgicbaweD8Ar",
  "key19": "3FvShNZXqHYLuuhTywqkcr4E1LQyUF4xtZMKZEXj2YB8UKB65vpHRypD7SPAkipZSaErYPHoPF9omJwnUNa5c7KP",
  "key20": "Y12WbpAd7XTwKUEJVjJnjbbRtrLsBSfZHPKj2Az4UoKudNqv1mZFuZHwP7FyDcjjSMEaoZJjx25JFhMaujomW1n",
  "key21": "4PsHGcXGBksiCfGTxXLaDeX7utBYr7zfzjM5PP8oTWGNd7jAYZto3vsiTbAgBpHaBB7Lq8gp9kZiL66aJEhmL2Hh",
  "key22": "4kCM4UCnaEtqHBGhkgE42XXCTZWuk5JqTCHmdvp3kZT4NJcbk5hHhtPHrETq97sYhZV3iEEtLLjfLeBtRzy5dtaK",
  "key23": "3rhNKPNUXG3ggdLmocpQijUFCwxBwW26umY2A1x4RZjCj4JZWoJhDhjfWxRGCaDGXugnGUcmf6bKafUwVrSLkoP3",
  "key24": "3opU5ngnCDwnkkPVaqvKoVT9psbFAtcxwVieWcS24rTQyXNH2A9w1b1vtbncJbm7iGqNGiqJz61uWL8dEEzP6FAX",
  "key25": "3kWQgQgJ9QXd98RzzP7Wf72zUTvYd5MEbUuvNoYQN3GspVwNSS2iYcuAYyVJuM8zokTZt1kDmSqd6u88uewhETp4",
  "key26": "55tg1k9vkTGmY6vaKdLKHQJGitUcHJdHj5ix87vsGMz84GwJxeQdfDLv18shk5BVDBpdQWbWULuqsnKCLpTFmE3w",
  "key27": "4SxVM9XfqxErKf1kw9EiAa3kXcnKEC1DiuvnopWtna75UxLjiJnZc5jmffj7mQQGvVjbDG6Qhm9YXngfeqFk1tkr",
  "key28": "FRaxZhx5hBGTN9yewQNgqK19Au3GDjaWCGCk1pHde3tXHcxEtno8rcd9ixy5neNkuumEiQEqSVUUXVFKRdZAnxo",
  "key29": "67cD3KACzYYD5Mcme9kJvHuPoEZcuQ5DVYgGgvqEDxxadeGDHE2w8KmJL2x5YZya2Exa3EtzDUKdGmb9zGfw48Fk",
  "key30": "4ji6RnNjPWPmmdwpLRhvoYvNJgpkUmYr33YgkhVnMpV14JanzJ9Wg3VS7ZzY9oiwpYVe7zXGq4s3BhL4CFQKuLe2",
  "key31": "5ucB8cibe5fSa2JadYMZvoBQEXVtMJCmiHmePx8sAffcQfzNqKCp45CQP9nRss1PNgpCAV7HGSce7EyoVMuieoR7",
  "key32": "58P5bEWeQbgzRyz9G7h2T9kRigtouCafdDKykeyPe8PbRfUveSmcY8BMEN9UscRr2oRCvxGve4PNjUiNcxRTCbSD",
  "key33": "43D41q318eyYSX6f8sRci1ZoJ3a1wK4NbDXsGdhqULKDDdzVax9MjUU17gLc3kdzsTnWAwHv3bXpqEG3bBsRv3ug",
  "key34": "5TQsrZpBBrvjZEG639Mb5RuXj3PjtkJJWEiHixYUC4zYfyFxniz8h9KeadTVeZLBXdMDRZzjYnfzqxSA1w9EdGSg",
  "key35": "26zBTj8KQUL6QbVyp1YcJjmGWF6siJLeDYkSX9QUCFrQrXUnoZd5Ff3QpbfSf9R7TPbnKGxU6SZsfVAuGXhTQQb7",
  "key36": "54ZiocaNSCRVp9jkxux2r4HJ5AvksDhPNhk6KRoPSz2GBXDeWaqE35CLtNQsvB5yBDp9nCbnBj7QFtg5dyqMqamQ",
  "key37": "3QMjRMmdzpEsq6ZDq8hMQ9HZAGqyo2DeuGVg1rUf6Qkawkx3sucXtKS3BCxmekxDe73vCvCRUw8cDmKy5JEtyKSd",
  "key38": "3siRc4hfRrNEQyQnhxfFxp4evw1o2zGydPKEcmaQtH5DTHEhwWEzFJPhVAXKvUTc3w25iUnhcKzMAeKKLxtnbgAu",
  "key39": "2PPZH66qqnEHEWVqex8EXJeb26tBC3QFULHxEZEEZNHbacG7aJgmwktAWYWP4wKKQjhXSaTWr7VFgskPTGo9RTe6",
  "key40": "3hMYfQvTF5MgFQybLWpH5rzLaC5NPDGa6N1zHVqte12ChxXoULo3XbxNRaxQjoUJ9k54iqg3y6zyE3SJsJwa4BGf",
  "key41": "5aDbUr4vYGPE2AFjWdibP1b329yjXJuJmmYMvyC8vDwZpiWc9pCwvJkZsQYBLSQwdAQwwvGstfPB9ZeWafj4n92X",
  "key42": "3M1kvei538NogHjKL2fenEJJQX51A49w12kVXHStJPeFkT27bMQeTH1YuccefCY8vpYZsvKjvxx1ggcnXuJAz9ez"
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
