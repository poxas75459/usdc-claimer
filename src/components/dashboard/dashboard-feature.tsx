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
    "66pMVL8iXCX4538NWkUuU5T3oUJyRQQ89GQt5Nj6jJWqKjZhqjDj2zsQ2jrk4cPQ2gXtbiFBxjJvgRewr9918S7x"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5CKGKNtfckuVSTvkDkzpm2uYUmmpKoHsw2T3wuJ1NuNyhtcq5yQbHinNVn7CAh4Mjf48HS3vzU1jPHvrGPWKxkvg",
  "key1": "2cJEgLJ6NgV1F7rfmn4Vw7eNCSCicE7hHjEpRWu9DLVyvqDrjePsmmSxVDGqtdoMsWEqaKvizTxuf6U2XsVpzvHd",
  "key2": "SgHzF4UkLBNb8sxBFYVybcVLf2F8GcSaKEBU7MJw1t2qXiJMtSTZQ74DvHmRyxFhFuvj94SKwuS7JHEkJYySty7",
  "key3": "2nPJY9uwYTAzvxFybnZrcRFf7BLzWaP5P7wTUj1Uv7TS9cE9qs3anHHMgAKXREXLw4ofJtn5eHvXX2kcmDqzDiJ3",
  "key4": "57RrJvbG1UQ6YzesZmHkcAkdHPhaDZUzDsMhS7p7E7fXYmRMRxv65GXvBwxFm6rwjuGgUzVAt9xCPCWbres9VpjT",
  "key5": "5335DPv7HVnjdLefCuzuiWSMKRCYjSDWkb6EGcu63ZanFRLNd37tj8kMrVpB3koJJMJ5apGkK2Bs1GADzQs9wuyV",
  "key6": "33R5iCuxJSWUDqfhQAJZq4YHDvZVv9N2L3ioNcvBRfNzJgFysLCqhskskYsr8vDXgbtuCyRTL3SC5DP7tQPxKhAy",
  "key7": "5AfQwtRjVke16F3ZEATaDeSsxj2HYYSB5fYs8S7Ut2Daikf8Gw4rYvL18CuCyDHvw7N5rZLdVgUBMTgLSGV5GE8a",
  "key8": "4roiScscncFzn2W8CCarCbrr5njMvEEfbh1XwJHqjxEMvFDmw46gtvu9pNErWwL7kDSnbbKQekTvvHVxcSJMtLh5",
  "key9": "5j2658Mu7Y6pALvJktnnw21AAFg7hoqGVpVmdVCr15CuBVMJ4SfAAxpwCrvio49tdTfGAiYX49VZ6kMzzRp5TQix",
  "key10": "2pwmeVPt72vWy6rxpwR66RKCx97QgRr1xRziY74JHnCs73Ykp4r6nFz7bhY8KN9gUffa5Y2cnXxJYVxhzNXwmV3",
  "key11": "22eg6TcySjLyi65KKf3JB4mUZ7ydrK9H1L4bbjC1hfMmZxg8JtnLgswpGW21Z4rrTfBksa5FDNL4CjV1FXyqFMHq",
  "key12": "2bJhoHGX4TTaXaQP8b4ifxgjCkYnQVf1C2gicR2ogyW3f6vCAQEDzdq1Jiu7s3wxSrpXZkpT5Pgwe5uR22Umej22",
  "key13": "2p3U9X4n4medomQVgC8REsskG3zbq3Af2ByAG4TkT1wD8NtyMtu85n39zoirNUEWVRxEnfQyuHcYC7nvahVbcJg",
  "key14": "xAeSRe5qtEMQtH9MRhcjEuggVmr4FghjtRh2gBofJt37qyFz5Twh3FiRWb9ForGJ5cg8PGKrm6AtqhqE2CRyXCr",
  "key15": "4g9mt5C7aMB4bpZQM9deTKjhbYSeG1AAsTRKKA3Yd2i6ewdyA3b8Z2s49VAdH1zhhcvbXjyxg4ViHKL7YysYNUR3",
  "key16": "3qoN7UmnqAptUFphDqpnpuuKJGgimLENGv9RuZSmNCpEekUq5M1ZLhWTXnYTRekLRdUx83f1cQKc45ztbREkG7sa",
  "key17": "41UcFbzARipGHwEfjcSHMJpyqdozAsRJTMyADY4Y1YnZL3Gc8bN6cDPHMpfdSEwAD7VB8kW89iZUKHji7JtiX82p",
  "key18": "5m5bL1AKFxi9YcuDNd83e89Cppn8BDL81cVNssLVZ3hnrvjLdn6hJoeNJYqzfjepJQq4QntyN9daNKtMuznxYaYZ",
  "key19": "4CYXassZhGAAv3gX5J7KKrC8cdVaXdKLonXeaLkR12YNcrEqh7cJC6z61bnTfvq2MnwV2DCtg3n52e84DEL2sGua",
  "key20": "Ugz7wuJrCjgad4SJj4hUJZ4b3rkR99wBozY7PtBoFN7rvsrSxAnNUpxK57E86w8Ro1ZkKchLuscxr4csxA7aq42",
  "key21": "3PphCFGD2E2mQ5HhhchZHRLyPo62YcXY7KTMKeVSCNwo1CdrQXPHRmcB3k1eF6mY38Sb6H5baRhKGVu6qLTaSBjc",
  "key22": "5wqf5ALFJk8NNRvNFaTCk65FJjgFe5o4JXQWFGqiYqpGdNkg3eTyiaZi2KVeXCGDiqYF9Vw92vNgxWnoQ6dC1w7Z",
  "key23": "2H35HkTYRfz1ZCQ6MS8LqCRjNr67wYTZCsNt8UgP3ASmY1Dt9tsC9WBuiTE6hgE9UERXucHeyWXxUvjaY3QVt33C",
  "key24": "2XNwo7sYtCybYtrCSzLgaVs7tx94T34Ltb9GVro7PGsVWaiNLEzwkup6DSqxuz6Z21XUqgHvTZZ5a7viWg9vtaGr",
  "key25": "4doaJzaZdajx6vYyDedwasUym4Q7J2Xzo8rBNUFBCsVwxnY5KUxKSuLiBNS3JndffYnQYABe6fKgzvX1wM75mpag",
  "key26": "5EeP8TJ6Q8Exc5BQqFQzJLDzz3SeZdZvdXg5cawgx56Qh2kzZbPphXqc2Q2cdhGkpt9Xs5W3KNWkz87Fz1wHDanU",
  "key27": "4HGUG8mMXtX8ndX5RAL2sCEuTSGvyWzwFtezwpNW3qqsUoJig8saEAzwLLZteyS89gfQcHJBjUDGZj8HiSeo9DFa",
  "key28": "3uov36hRKcb42ZD1wSAPXTEnVQK9zDizrEEz2aPo9jtLYgZuhMBUBUTqucUCUnchGEmjLjFLQcpkk7Zk4UCPfpB",
  "key29": "4SyCW1BVxX8d82ohtaU1sJjn92UYY1udHKNCHg6E88AZDL1KoXDNbbcy2iWcZovKncP5JGC2y3tsjKrxQb2LqVe8",
  "key30": "5yzQSCYoZGdByfxVq81m9KdGzuojtyEfWLGdXeqBKc9z9fokyiH5gExpoHFCfN2EHowJ7guywuxDz3MuwywScRvb",
  "key31": "4bjhJHDW4ZH33r3K6XAs3TS9wCdq6M9k1PCS6mkn7hYoSo8r8NvXyimjUjeRgNe1dHg159q1exKGrsUJPEoLrmxz",
  "key32": "H7c5JAbp16jbi8KjBs8mFAV1K8bkpJcvNLK2TcQyCrZDqaw3ZMEUmdhYQn87YJHs3h9nZLTikQgiytMYZV1F4Qi",
  "key33": "sEntvR8i7GuRxqzoBcivKXBtd9EK9zRpQAZtbwwSW48Gr92gPmJ9uoqJDCaz9RDQvLdDjdeA94XRepsDk411ctP",
  "key34": "5NAcpTeqdEJ6UD7rHi3DZH8uEGAFrZgM7aeVRU8JkmuyjpCYSLKWrpTVKXbHnb3ud9UCAWKuhU5BvG8hu32AJSyg",
  "key35": "YfoSJW1HZVH21q5PMMtHQtftzXFwUeE9t9FBWgQufyBi3XWdVKWUb7RH78wMv7TNZdd5ApXsotqhgwBUe6aoNbf",
  "key36": "PFrt1DCdUZLUTMMXpa8PTxRkYbbN2DfRzGHudGPRAy5ntAWpdAx1WMLV2NkD4z6KDoonpatxHzyrK9pp4pYLbLK",
  "key37": "3QhXfh28kUvfG7druzAXMKf3XJydDHEd7x5nVYXhQ58KKW5Y1x2SKtLo1swa5FV66kJKpHHRQZtsXAjmNsNSfjwA",
  "key38": "2F7KAVZBN1Xe2MwxNpw6KRNVERgWG2BwmscfnV2SP3qRo65qNvV8RfMiSSJ1we7n8GqzMcNeyMkkqasTdDRZG9D",
  "key39": "4pbjZxXuVD5g8JSWnBfHgHoZQ1vvn1qtimEuGJfjeJuyBShVyFJLdK2vzpVFVBj53hAdoVcs4vArtYUYqvi66WQN"
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
