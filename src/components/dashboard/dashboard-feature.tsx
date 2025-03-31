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
    "4DwHp9zVbJNLJCGD9GKiAuMHNvSPC3aL4UsH4zpJBoTq256sRA7BUzn15SRzSNmadHaQFfkTki6AJc1YooBLYPk1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5T1qrzbrHcqpKiLgJQJxFzMroAEKvHWpr7Hi4kzLyyvZwgS6xC5wjBcFV83hPQv5swYM3TjXV4EXDQWZKx2sovvo",
  "key1": "3Afg68453JAriWHFNQEJhgyKutBTYmBuVZJ6Uw8ULbyBSU4Qw9BtEe9YzmnFwvCsb8RyyU34igy1o9amjAbWHePN",
  "key2": "4xkfPLV5xeskKpCZ9niR5LtrUVhapJZQJEGQ8b3yaGoTAWJUXa26tWLwGRq1nmgEFzRoV9ardwCp64Diu333tTRu",
  "key3": "Nv4n9TZoAKGECDmMxupZkpLvfr7AVr55yiNao9hmG48449ka7YuES5tTFbxVftRVvtUnp2gGnpBotd5oEQQzRcg",
  "key4": "4NUEmrAow66hh3MQM1SfhtWLUh2kUwo69b9MGBTyzQxa9ZSkDiKc8XGMDCQFXMm82u2Ke6xxZX78jFkcoZkagNqE",
  "key5": "vtGN5v3kmehnC4SCyQVbrbzzCofzVxXMpBVbeVZpxZjaU6FFRb4PRfGiVBKdGcoHPovUxX3AJpANYiZTkA396H6",
  "key6": "3EUMgU8RBtn8QY8fMreg5y2XvsWjC5rMoPGWNrA2u3HDCiTTfKN1uC2SuveAhquZv4UeS1AaP91M9mcaCQavqtHr",
  "key7": "2yDxqo4y42Md73d9i9aqgj5AzQ1ySY1WnErUBqxyNME5hUEZJZUXLqzRGaZpdySGjfTwHCXSrdjRxJfRn9V7kq3T",
  "key8": "22Y11JTLadjZR6h6TQraJ55XTbkxT6zdAxUGBKGXZZ15pAztgzZCGQm8444dNCHXLBzVsm3BCW4mSKMtMFSzCxFr",
  "key9": "58YrhKkcr7TcvpNHZgy7ETyqJyzuZbN79xa8FngM21zQohqF3ai2SFPNRCYVg8nrEErGkGjvwhy345VCDh34Cnid",
  "key10": "5bvuThiV98PpPSBuxqHe5ZCDi7Axo9gFn2485eACxvRcoyiQZDKuPJ6Qhbw5s6rkaSwYGdUgXjjGjSCZZpuEgeWq",
  "key11": "2GaMuvS9qb8Kvy6vxAhmjUrRPkPpKfAbpyuhZJHSpTuSwmCd77uYaXDCqPD57Kz5rPEHtiAzFbun6qzXCnMojiJ4",
  "key12": "2QpbEWJBtwGJzgaV1wSWtHGCyW8fiSNEWihb8Z4s4CxjtMxGMMsTo8p6C3FjXvev84fmF7Z2T1ZN5g3J4dJmu3K3",
  "key13": "5DuYX8nCE397wVK7kSN1kt1Ghass4KcBpZSNogsCfnhKZoBrPH6cLvvoKraTQiJM86UvvKimHCX4aAtucj1Qgar2",
  "key14": "qRVReAQGZAWnPjx6jHqNFedno3LZ8cK5nQSJf9ViMQv5GvDJz29EBv76enDqiNx6iFkj7NPkFReYKRveqCM7bKF",
  "key15": "4AAjrrX3EeECuMZyKMoPWveUzZmq96b6wtwBNgZVotzjCMjdZKJbLeKTtQTuGuaRZLSRLtMVUML8F21fYrH2VRn5",
  "key16": "4NZgCfuEgH1pXeZQgrR4tFD8Nr9AmeUvFD1ukWxr5MVY81FmggsdesL1uoBFZK2Jdh2Qyf7SRzf3H5o6HpusLz4g",
  "key17": "253BUDHfzRcYpQvPMUYZTrs7rC46AbCUXPodEc5jC9KW9XAZcDu6FrdoqdseYFwCvFZXppWbcEgF9Zqb6YFdrv2P",
  "key18": "4WShVTyyqsjx5mnnQpf34XPqkxTLjHzVDEMYofATp2AykxhAkwZtwEGai7R7T2RJ6Aq8X7GFhW8sarYeQ7tEeocL",
  "key19": "3xZWkBzTvYPzVDYmggUkRMNtowCWLyNYcRQSr2VRbwjAtTtrpo1PxCrpjwdAu9WSHQsKrYNY8zoreADbMPV2udbs",
  "key20": "3D3jcwyeRMtj66tCn3UYXp8sWRa9yMDK9kRDwxVMhthBddVn6TBDYocFnV1MN3WsqgipRne4apaetyU3TE7tb3zt",
  "key21": "5HdrzSYgut4Na2BRvomqucCatokydWpUhPofxM5mdWoXsL2HhSTE1nBE154CPyhV3xPB75mFHdoyr6EwnPyUYf8",
  "key22": "2CZPpNZgCvCCF7B81gTu8BWYum3LSCfCQytMWXQuht7V9PhYf5ae6vsagBuJMZirgmqcfzwRRRWXY3wmJdT2cvVU",
  "key23": "5CgTX7FKbLG3vg6Dv9JDFRWiSWUAWhLEkj9JFFveY4UA6VfrXBhAx5ftgWDdhP9YV5ZjtQBYqwxfWd7DMy1A1JB1",
  "key24": "2Ke1hfBEctS84a7oEhqAc2VtYHhQzixv1ujsJRHntdwg3khi3UoDWWAzRqPKjudZ274AsmJsjaEGM7Jzr1eZZCb8",
  "key25": "4Pe1UZTpyeHs6vnwjpHcPL2WXkAvYCaXyr6Y1pArTnLQG2JCzt6SXmPodg77BXx5WH5eJjQteVG949BhmefmD1wv",
  "key26": "4dZ82dfjBhK7gMhayJuf2jC93fZfmUbWSdncBJbgfNJLNFAkt9r71HGRLFDYJ6WJT8PcGhtYQLPYL7Mf7B6CuWb1",
  "key27": "2KowYr564jrwEnZoaRbT4iuGPWtHFSqiJnzjjxK4q6Rwweudi2cqgAnLoExfBvZG6DaLguJy9RF1Apx9JZWT4cis",
  "key28": "45o8PwVG11wr8p66eCr9B2qtToHg5bXLZpArR3dqnMJbgRWXkRFaqNtixRMhQ6GS9LEP8tQQUDpssSETatSYvGdG",
  "key29": "2uMJiHHiWxumcMk2K8AaDWYfuFEcQhTFeMQZyq2ggGJ8sSd4oQPXy1QB6nYRhQRNWvDGBnKqFFYe7tCY1DKpD8G7",
  "key30": "54QxfQSjUfqSQVboFCUcjLcw8U5ULSgDq9vFbtDGuDtUssNVDx5sCuXu4AwoEsv96EEFmMcGxQ3MotZgZmVzKty8",
  "key31": "4FYwfciLwTsvvPGa7bvmEoR9c9FZnLkYkcgzX4TN2pqDeYXJdkg3RyVPKYUKdT979DGxfHTGAeoUXUmjBAoCPh8T",
  "key32": "3YHFPhG7tiWeDeAB1c8CaLjQPrtWzd8Dzr6it47GFqxRgE16sw5qDxuyjPK7ojpgXWqoTAuz5gKqyx5nBRGS7HbM",
  "key33": "4uRBqNmf9LPNPWuK1gVXhRQpcFn1ZpFMNVmCkfrcw42vBUaLsYVHiz6ejNXBs2AabRKvTSMKW2xtQY4rWJhWndCn",
  "key34": "61WcgvnF1cqYms2zfHA62roLcuWjkpPeC5sZE8aXToXbv5rWnHuYrne5k5En9xhKvay3D6DKXq82EbdyBYQQkA3X"
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
