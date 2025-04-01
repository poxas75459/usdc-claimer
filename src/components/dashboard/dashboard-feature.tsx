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
    "3EFShv45UMj3pE7L3JhpZ23h2X8CEZF3CZYhKr2irua1NdsSXAasLj3CKxg2Txtm8GceKQ5wgS6Qf9HjJoa5N5ov"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3LQrcT8Pr6DUhbMWUNF4RmFpYDWMc2yzfNFLCXWxrg4DPTAtZ1Sy36nQAWdbdkrCvdZDf7gAvY54RrqCyEU3Fq5A",
  "key1": "4QM59KDWtEDPHEGWwZtrTBgXnydJ9rGAyWGNq3y3QtaKYXXrqPjQ8QCvWXVkPxG1JG76VpREqwAgidovtugxn7Lb",
  "key2": "2WmgUamXvSw8ptVkA95oFfVNUUrZuURVpMoWUBmgXkrjUEzqiqZ2QiexE7mr5NWVk8EbFCDWfagwKQYdLcDHy6Vr",
  "key3": "4y2JN5BEMxRoRvEqFo1gKQhDsefHMtvCM2JEDSP9ZS1TbxaGtfvuLcZ8d39fV8ZChdPwbhtCMCbWQtxxqTegnz3W",
  "key4": "5j24Es8X41Re8ve1Wqz1Axv49X4oGxMrqspwCAN1FfVkBVWfD1xT6hBwJzCuRzqKLY7te9JBtURNRrQq93CtJL59",
  "key5": "4GGgKqKMcHN83LjYFkMDkkRvXBqZBDYGroDqPynxJLP2Fo8XwWafQNSo2dnoK71SXhyS6vtA1i3cKzGKwypxX3UU",
  "key6": "4JQeCPrteMhgpTk2N8NsH6uDs4eh2ss5Cn2EeToedJWtZRAonS3cRGRiCiYkhjq8k84sdv3N72AZYiQYdEUrRFmR",
  "key7": "4iaTFqM5xqJ8DJKjzrcchq3w3KgiNWMKwNtm2HnqwS2jrQZQ5w6VKrAwnx1WhbHTkQrWkhxkdSM4R5CGESYfuVtq",
  "key8": "5WrBciw9HefBdDJhKcdvugvoE458mPJVAQTnwKPuxgvuiSyiq9NJHvEzFffqY5vbPniZcmm5gwDDAhqnTJEKodhf",
  "key9": "3SVvLico1gXNQLcAtou7JiVzWVWDQkkPgav6Dm482ZHMTgp333eeok7ctM3acFyuhPcfKn6VadubYEeuoHj2sLJZ",
  "key10": "5rTSLvV5A1fSagkCyn83NUxyfzPWjFPdF6ncjHpagFyiefAX2xQeXXCbRWZvZMXTwFf7xSr5GRZ3saJkKVqoKH3B",
  "key11": "63EcXUy9RD4KLq8CHmff1FyFoUrjSHdHzPzrSDKg9joEpoDb6Evdw9QUFro8aBLZhMtunJcMrnAd1yKZHaDXnucp",
  "key12": "2JSBt2GsZYsuR8DQ2EPwSEKXvVEznXwKX6fMmtXc7j2cZPtXickMqpPQxN8ZUVeXCHNhBSCbxDNjbYH6QMH9XbvS",
  "key13": "ysh5d8MYPSNG11c6Q95D8TgAG6MxLJd5cdFaRKCKhXyuq4YQskUM2spWXzoSJB8FwVMsVEiPxrTpNw7Cn71Ptg2",
  "key14": "4jGwGot3XaY1Q2rxuKPGpfL9qaMK2KzWVoDB8VWY15hBDJhmtyErgaTFsmvGNZNVAZdjKjMZnzyhHiLwpKyxmcUR",
  "key15": "BdTbef4i5TCHS3PSFCxSd2oHt6zqEpJxkCT7wXEDrsemaVfUwkmYGETzR8q2XuYnfxvtzi5EB44w6bGP2BpbMtq",
  "key16": "34mjYCx2vcAihcR9wGHNFUMXsUXCPNmNuLjfDShYdgkKNXg7cduQEjhKSKkxg4eRoJQDyHfAfEfKkz89wKYUzkga",
  "key17": "2LKW4niJ2NCcjipLzxCkvbXtac5fdCuHnN8AgBkJSDa9x8ZS9Veo5s5QsKimbAokGs3W8fLettvffjVVy3eu8BP",
  "key18": "58YzKdRXuxkCGVcDsqAHSQDqe9uCdQrmSnmCgEfdEBwJTSRDbawuAPXc7VYqb9icz5UDcGxeooBN3W6Ued4iHvrS",
  "key19": "FbRHDPuNsCdHrn85m9MsQ94yvSNuPvbzgqVmGE4ZGxEt9TFpbqqbUKxANvQpv6n5hVkWn7reBzaQyU3NenzQsax",
  "key20": "3uiwQXLRnWjnbFC7iEh2NXezJhX9iS1328CDvHRoFshkpjdCmfUTfbfmJNU5C6GGiH6S39PfwGuH6PAFARwVDNmL",
  "key21": "F3DYkKssJKWqKBS8QT9UWbsjjgEySetUAJCRxV58wo6sUGP7ftkGyE729zeB4CCADRxhHyhWRrPUFqmd3evuHJR",
  "key22": "3Tz8uhUvi2AQ7K43TSgC92YbgHzFXF5mVHv7vJS3nw758bxgiiT4KMTU9ciL4jPmqE1uEoht47HtYvQk75zkvwwr",
  "key23": "5EFzrP6qw5d3v5BkMZdQ7wGBckUQxCSBZEEWJUxoXa4WuUdRmCSgFri6sNFY6Ms6eJLzpU48CUyVy2HmzrsGma1B",
  "key24": "24LUo1RpU1XRRT8Zek1w41LPLGQ2UZPjGwVY7jCsunoUyo5Q9ksTDb2fRcwy1kTC3nvcvEdMNf63RViWHo8aYo5L",
  "key25": "3AYaLLyujscrmD92yMyoicYneQwFBsnh6yrpJtJyZwZiEQAyaHZBDJVxPu5MvQhPtBjCLUZBbKJGAmwHVKmj64wj",
  "key26": "FvtGBUSoe7uzQivySK4oV6VYu5cffG55qCJv6ssc7BxQzxicZB4rnaH8HVwdmxB675cBTWLe73Pq3Md35adxjdD",
  "key27": "4S7HKb91NhvayKoVC29BzMSeemofzSHb33JoAp6Qc4iPbFoNvSFoqLLasWF3TMjQUqpEzCMKks9atsurSkH9mD3Q",
  "key28": "5x9y7ue579YY1C7Y3SH2o61qHLzQxfwnwWHm8ZrQPTtgNMr2v2EyA68auoEcJe5EzJ944KYd3BbRdnhMaJUxCCDs",
  "key29": "3AQkrZCA411UCgvanRZ3V1o5Vo87fKYao6kXUTFNCE8DgeN9jCbrGMFGEbqcyrWKsJBYYky9p3bkkkaEh3Uux3b7",
  "key30": "5naYV8AN798psgKZ5jQkRa8XggFAwKxBNtFgNU7nmbQ7FiTPLDphWLELU6q8xgZ8BprUSAapKLv7RdYnRbhxgAkv",
  "key31": "5gg6n9jTTKKcNaeqB71SzSa1Qypr4B2RUXHQ9dEkQdcu8PnE2JVzMeZyjCcm6gqBeNCwBLywKPGBQXQr785gMaHQ",
  "key32": "4BnzSzEDT8WeTrvt1SoMifsHH9uhY2vuix4KFuNhVRhobX1ei8Vpkwp6eYuXAN1QUhzKJ98YKyUpyUxhrrtF3uSJ",
  "key33": "4WbE14KL2PKFvXKQqZ6Z7bHJiTGQ7ZN1dnMFB3S1YZQ2zjvir95frSnDHyYyUHHfWL1bJgaXVpkcKbZmrDx2r7U5",
  "key34": "4kYKoKmWySAbB1KZvEtvTav1ye5e8t2gpG5cC7MFJdESCLPzEkL4ryayaYfmVVsF8TKcWvis9rg8vmqHCKwUA1LW",
  "key35": "HMWBTgBLj1bJsFmz8ffNvTixww58TqtpgskWkb1pdrWUb8nKbBcQ7pzEnxvQtrSPmDMpmDqzDnYnv5wEQ1HvrPH",
  "key36": "5QRzsVMFZLcMH2wTsoFYPmu4LCweoeSJMkyM5FEgFxcaBUVH66iD5x2h9Y4Dngc5x13fwmJtsHvWTWJz4XYDP8rw",
  "key37": "63FzkUB3eL96qKsR14dL5ZoMvRRY6rfNZ9ABePfoZJkjgKRusJ84bjgv6DQkYpLC57XwgAwUQVE11QnE3JGM1JEC",
  "key38": "4Zu2ehisfqcKgEt91NmL7oYEH7ic6PHcDPbYJBKhCWahejBp4MdKeLzr2MHQJKdQoq9m1Hkg3U7zts59AfmwWRex",
  "key39": "S4ZZP1eiuUUQcZGaNURShRYeDkG5yg3z8s19nF3vECPByLve9wKhMJnQFSn1KS1Ytdu7wxHuhXBHXMM1AmD94W4",
  "key40": "5Er6gtbnPoNFd8C8Atug45sGRpu5RmGsihLFXbc2GTip7Nvy29j7VmVeDbqDH3r15idX9bheAyrMqF65628MUpt9",
  "key41": "3hhvX7kW9vgjwrQ2cPfQynhEtdJzGXfpH9Hu8Qa7Q2hW22k8pzWYDTs8XAN2HNbthgG33Jp9xzs8EhcApUNosyCd",
  "key42": "523iTjBtrYQWyULrjDGL5GRr3Qm7EFsxt5DcAJW7PcsxzRLdhqR1hnjP3eXBKPDbwdgjMmCaaWKMoHTEbKcf326T",
  "key43": "59iLXD1mb2vGwtPpUuaBMxHiPRi9Q7NqSywKNg9eby48eFD97QDXCMXX9vPNSxhPiGRiiVPwYVK2nehqAaUj6Fic",
  "key44": "5xBp4X6AAg1fAoxjhQy2sZMr5AZhZk18o1fuX8C5mSzTtr6GMqQf63RBCFUfXm2svVmnGPeiRUQtLTwnV5XP3tJU",
  "key45": "577h3rK4va2UxiuXM3DxhpDtVGjZwujFx7xyoif5dQ4G2kPctps6KP2LnUPQmfGL1oD1xiPo2XaoPLcL5EKHQGmY"
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
