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
    "3fwRwhqRJLf7BLDrLxCbHAk8eW9fvx1HFYFyeZJRLaQU9YJ57geLECaiukPNzY6cyhy7NUF2vhoiEurgrpQagquJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "628pp6JdkXcCw4rgHNecWgiiRTMMdq6o2PPRqYRfqrwc8kadmZjVixHZy84Lzv9mBZe1mZbQ2BYPLgwLAd1xjLUd",
  "key1": "2RXq441aHsoe99QYVjSLhome8sFJ2wB3iuHdrAs2yBaz6B66VKezE86X3DtvkPrMnPkBTRM5cwcfzkf2Vdw4uzL4",
  "key2": "4w4p8KjvXkaA937gZfTCuH4AphwY9LdXeyGZKFnSNQkhQvNzNwXBhwyCoVQub2KKc2X2UcmwRz8CT53W5iyzcAxi",
  "key3": "qBDSM2C1cn7YPF6uetvn5NnecM9i83FWP21BoP9TMeFAmnxFeqsgYMj19JEoatpg5XX9LBd8yJnAJ3Q2q9q6gPE",
  "key4": "5n8ABUiLVmmNcSrcg6kNz5VRE4Eer7E6WVZ5zudSDYjmW3exbEV8RSFQnH8dr6PiNduUZ3Xy64NPDkpyTTKCkN9z",
  "key5": "51xcu17ML24d6TtZ8gqDAnDQ2XDHLrKe3YjsjZMvYU7ze8cef59J7snfLDpKakZJ2brHP6beXTG4U872YLVN6bCg",
  "key6": "FdP18zK5P2qHQzaiwKJEnJfvGCFjDgRbnVZ1ziLXSDuaehR8YgNaKbMhQS48F9Z7HzouRQ7JiRrSGoT9MF5FzAw",
  "key7": "2ZsvDJzr8vGbXqr1CB8bL1ZE3SijNrenJc4dxtzFWfACEw2E4D2KA9a3wAPrUFx1J1kAs7YpQBYdL25DkZE82Xf1",
  "key8": "3RbV2coyw7Ek7BkBbKTG4cvqtRL1RNygPkYefbQYpZyP26XhSftzezKCFttyFajbyQArPgwga2AwQ92YwSXL2Fw3",
  "key9": "54FCHyAuofbbSDgocbc9hJJMeCMjosTze76D8ctua5AcLstENept8NbLQdPVMSzzPn8xqjQaCjpLvcUBzKB1WfxV",
  "key10": "ih6qbvM4ZqxY6Z7JBQqzNrVQeBLBSHE41t9FgD4pJf1zwDrDDLLQMRCFcBxZrzULZhbhkDX4jJPA1o32bSf5Gu7",
  "key11": "5wFgmwWqkK1JnsaUsZvhmp2ZkK99EqJVWqX3YMzZ7kS7DB8R367KTmk1DFzyUXhNJQ9x7aaH9jMrPcRAhfu63eUJ",
  "key12": "5Y3xCnsgBHiBtUwoZXtgbRWa3Gc72u6AZQhGme3Z8CBN6MRManiW84uV9dvzaxkzfB2GkRb3q9pdK8vwGdpj8HSR",
  "key13": "A8ziTt6VhGPLZMDgb9DewLdG9XgrJ7ybtLbZs5YNmQxu1FGmZ3T7xWnUhbgQdCZEDm7BF1u4uTh3i5q5gchYpcx",
  "key14": "zC3s1Yur56cLVdxDaAFoc4mupfbv7Qfc6qBmtpRQM3ooYgjv2k7xF86kBV556eWSBFqJNzxDiQ6gGJMFUt9Yr1c",
  "key15": "4Z5iHS4yMuAkbhrfhxb1iBqjVbGJpHq1CZMEcKGcXG7HEriuf1aLvEdjmNbXCXptd7jPQvcnRyoHh6pgqHDhZw5L",
  "key16": "4EbUHiM54T3faAPVJeeJhRYVikvpNKwEj2BjTmQckaycokEAM87kr7xqGLTTyr9BFsmoHTajkgsjxHs12TmpMqqh",
  "key17": "5wbSPCZfXG9McBNvXD8eL1HyH1tAEJrfYirkspcNsQVoM6SDTNn37M3RXYD8JV9cXaMu7Ek6V3B4GWKVLmWEBkD3",
  "key18": "653JxbcY3nPsLXnzAUoxb17c7XbHZ4jXk8pszEPAWKEf6oMwgh4ie8c97Zh5QWGTRFKT1xv9fbSnGuiYBBN6Pp5a",
  "key19": "4HwBGdPSHCPeykoz6DnDpztde1HM1vSZoTGAsa8JFF8kR1UEM5ZmSVzb9j4HYF4DJZMPNxpMB1ud5VDZn6p7mGU5",
  "key20": "3Lrh9NJ8ztEWnjQCTLyjT6GkKumsBrS9MZ5uaP8mvw5g1ChHsDaSKHxPfg4XyN3gdHQqUvMmcoEtRaUoKLq5DX7i",
  "key21": "67njifugyHBTnKjzZQdyfwp8gnzxv6mrGrkwjw7cRCF1SUXUjjhff9enAvDNxcyfrs9m5R2g1wygp8Q5p2viiQzD",
  "key22": "1Eucnmexe9KgicxWPSGuwsQ7JG13ubcfzdvJjS1tGbA9jV33vbmfdwqwiXTLyqVebeGfv4h81ZvuUPeEYu3G32x",
  "key23": "4JvHyrBRYV16ZYiCC6kiEWT1xibnoQ2Y5ABo2ZsKRLo7Baur4FChD7nBVv1zf96dCy3xZGaN7ctQBtpFQwVbQnDk",
  "key24": "4yPBGEz6jUgzLFD4CPm4R9Gw17h4eWn2AEQWUhhmM2uxMUKs8NeDQSgbMQHdPwt3r2TkrnZa8RFhZCHNVGKNy4zZ",
  "key25": "54yUDw9Q8zjAanm3LDkfwsq3VfHRA8gx4HP9NKUUAVX1TYrKo8nEoFfdJPuRJuG7Wv4TZU7mPLy1Tx9wyn6eDiU2",
  "key26": "mvYBAsuMTALvD9rTmGNWH5aWzjNWkSxoMYuDtsvLWQ8oA7e7i8tkSmuVU9wQG5KRcbwmBbhPpCyccjPasvfXesZ",
  "key27": "2pjuuJ4JPCAvVQugqP9kcWhepobvDVK5UdAxNvzjNbArkeUuBWKGa6fzkc42otjTVTaMLWqcn1mexcdZEk54KapK",
  "key28": "538SspzNW5dyf7RetZTjLbE6mBj4hTBoWBBhTWBgSJKb5yLPAckFnsMZBEjAMhGqR92aFwojrycwsNBZwsS54cxZ",
  "key29": "2pr7JVmvqioyswxmErW1be9tvwdSNAXmVHxfQUpd7m63pfBRpSX5pAXCxmYfQVdrtLvmwWc2fvezmTtXFYmnD62d",
  "key30": "3BPDJKt6ZXMK8msAx3MQaMQYH9J2QnVR3k3jB2xRXiLUGNdLWGmtFTftEdc2PLJ2BcgpAGENNS6QLJtCTWfmGp5Y",
  "key31": "1JToyo9y6vfLQm12N6mGotPuvm4ZsHXJwsFAHHpwkPTDza6VPDsHq1SjDcb5HB7vZnYqCruG9LLgveuB44PKnK6",
  "key32": "4RvEqXLgYzr5Dk1uvU3A6oH4L8oRi8ofiyFwheYigJYvi9fhHsmjKFm7oWeKW5VYnXVEBXnhaehXuhYZwy7wJewj",
  "key33": "kb8dRReuuhswdKTZF21v89RvgnWvG9i2FXGg5mXMetijkBenFJstXGkxPoVv9YgJBpn6BAXpEzhQkpCGvqQCWDk",
  "key34": "5oMs5EPqTVcGM9n2xHRYNQ2iuNhufRs5TkWp8YRP4KYDYAuL6HgC1bpEW45FBpJseDXrVm9tEW5MQZe9UVmotdGc",
  "key35": "zBFG2VxRYNehF5dBMQmuitJxehcjvc5D8dWDuTS281AEXDwp6BXEMXrrK9spWieoHpKWFEkufRZ864fcQUZgfrq",
  "key36": "RPwgzFXhQBpavb28h3B5v4JWBikagBBVEgdFNRHErVWtsKvjzgE4VdXHyTYDcbBnZhviqmGVvmZMdcqZ5N2KRxx",
  "key37": "4mg8JkDQ1ysT7EZYDjAXSNTsRXAxLrdd7taZs3T2sZp42JwkHs1Z3sKJ5wC3Zuh43DtuDKpt5Bp2C2FEccSUAFZv",
  "key38": "2kZxoEpWyiSCUACboNjen2YwcM4rAiSf9644qZLhCvamYHNBZM81eMFZXBaJeLZy5VHxcn19hGJMDqTjA2YmoBkP",
  "key39": "54Gbafe2N4auvw473VNs5uDc6SziWXbxT9mUMJCCyuLL1bRpg2rMd6GAfT9z1qoj69din5TCH78rN6gExxhfMyXb",
  "key40": "3nhrBHhtLmkme1BrCK8soLjjJcrWm7FHdVpNCwRFAfFPhXWhkyuP8sRhC2MLF7Q4QoLYdTenAsXcmZKPsAGVj9WK",
  "key41": "5cs8KmdcXxDVpQ9qngkKQqtXKic8jXHkZZe3PyUbsZb9LAQhB9SWw2sU77fMmhLjXzvd2wU5kCs5SdZLGuCgFJgR",
  "key42": "3ZDREhSs8X6BW89iK7uCFfAw7amPWJi2aYYBF3vHVRGwYkmMx2F6uSLahqf5ii9EQHvfQYAFX5rSh8MLK2L2yTd7",
  "key43": "42RahPkoYVvFNeRzz8JxCTfMj7KGhEcH4LAeo5UfkZh8r1uPaTU86wzwh4cHuz5Fa6728y8rJYW78cHCjWubcvTW",
  "key44": "mNkwEZZGTLyBPeVvLeNXKMX9LWahd8tYjSXfU4tV6Ymn7LYydNqjxDfmh28WAGzUeJcHnAV95UP9R9BDUTu21yQ",
  "key45": "4CDv4ex2Wa5yWodftWnVSmXifzhjMSWzEub1DECvFTSzkjqEqKdg67t61n29KsVkGJZyxPBB52L1MEnMTAiF5QHz",
  "key46": "3VvcDZwwj7w3spQ68MKHqPHFSpPQmjBbncEuA7uEdLeCWb1j4JpHqqgYNi6vJGWP4jG4zXpEZsJ2VUBejPvaFDzW",
  "key47": "4pU5YrVNNyeF6uLL6T8gAWjyUrhuCmWeXy7sLg7uNoJ2s348nBX4JcYmvw6tTjX9UL4MSn2qwZqhmgnXWpbtQQRJ",
  "key48": "5Cp5c9f876B52QCRjSgLBUnfdMyPeJzETH1NiNGM3vHiAJqMdL3Xa9C3vrx44s5oCmxVLHrBvEbJksfPMemCJH8H",
  "key49": "4yNeremibD2toAb7JMarJtxpfL9ywzx7erQ57rLnLqVFPV9uRwhdRdPEw4EQ67aKryYweuMrN3u7KFiczRcCa32a"
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
