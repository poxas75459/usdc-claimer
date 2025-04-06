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
    "K9sscnfKE2GiHTGCRoGjmPE1rMYuk3LRAxrksgBrxh96JAUuyPmZy3t39HrSTN6NzUShQmES2bk4TJGbMMYz5pD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3UnTeUwiXKc4u5Ujk6PNBT3zs4mKXeBQBzj8feY5Xd26KPKSAfQZDCA9Z9Gvvv2PQwYs6dBsGX81KzxyPY3aaJaE",
  "key1": "74E6iiWGbgiZKLCzMSncHwscwqGWzE26aTp6QPogJaFXRx3siSWbzZ1TKkmZK16A6LcFVL2scRB1jZDVbGyH98c",
  "key2": "44PVZrFLMNBfQQ9X77UQyEWL18yDsVN3KVWpcGk2yS46o1gcFZRo1tTLkutLLh1G7qemALGpywxFZUibwWdcaiJX",
  "key3": "3YWTj5UrYtVfg7RBvGdNT2kcLwr3x5By1GMfNZsS6Z3WwAdaGFSEkppMBpM53Kb2yGjw12vcJctVAuzmYVdDFBcH",
  "key4": "4Sd4jQa2EFPRGdjpDVpSsaFserwCNgUGxg7Hps6GJeVFebNiG6vbVedRPk2HKe7dn1TdZeJNpxCoqVZYjKtE43Ji",
  "key5": "4MLxGXfKBP5EfzskKKH5EB8uQS6uQX4miN2Rv6dxuuVC8gFHeZyZZeCNt7yvcbHdbCHvSQhZTL8NXpoBQdRWGoTJ",
  "key6": "2vPmm6sonZkiv9nVQQGHp5tjnBUqfZzEG9BBb5XW5DyaSX4grdT7ut9PtLBTSjYKQcV72LHUgbfxvnaSM4JSPTa5",
  "key7": "3jC7QyoJiV448aYxUwGhxK5T481wZNv7xtuhdquPd6FY14dunvTpnUuWnFVEiYPMSZwCSSACayMXEXnLk8FueKxA",
  "key8": "4MgBWAanmt51xaXCPjKX6P662Ufn4iF3bVDXcvWMmp5kXcLcXMUGtBr9kM9AJx4yiitcU26Ro7KrekAG9iDtYyux",
  "key9": "4tVh7aRHEdounq9TVGCRxrq36UBQyMwssF9wvVeqb5VNbvNGX1rgtULvHn1gkJqWXktp3MbQgabjVHfEaK99Y3dG",
  "key10": "FRMRcMLJ9LgexoE8tsM9jNhPEV4yVHRdidGbXZGU3tyE3fJLKwg7b3Fy2H9aXBsTbzUgi6CmvvyFyJE8zgDKWPV",
  "key11": "3jLbKUJtqBxBQjgjxq2A3HemimW8TN4HK3vC1NJaLKL7XKTid7JDVDKd54gQsPGeHqEVieZABj7zcrGcrvTh4SUf",
  "key12": "4S5LbNi8WnnGummYyv6UMrwsKyNFQebHQRQLmpGtKs3XFXG6fmmk6z5cBi18MgPcZfCdsWKv4VS7jXMW853Ymugt",
  "key13": "2eWZkDAJf4rTuLCg1H4bBMUyYkWsLUwjH5ioznmbaSTqwJ1Xx1xXGPKxwT52aBg8NvjSBEuhxLj6XkSzbQPU8BU8",
  "key14": "2HRQdVpX3aCTFCFqAWLt3rffGvDkYYG2bjuc41JxBeas7hBXasQPCRd3R65w3TbBfr1bNnMs3G9MWmoQYAP99Rp6",
  "key15": "4dLAvMQQFPVww2g1apkR3CuB3qsqUZv4sCdGzpqbSS3Z2dS9k3YY7xMiY7VHPhgeHNpkrDyVhnLmFBEFYdgP46Vu",
  "key16": "CfBdvNGxA93gdWETdnpLSNemrJMjzBG6jKwRv716ZnbKYEwqMKLnGRNzFp3ZYA6PUZqu1VxsSyYVCsTbVPVdjkL",
  "key17": "2BDPF5Ui8DUHMCmNqMqVWEDMWHhR6wvqxBfeVfgXCHF1AsAZF12YRERpZHxt4dfNhbrVa3DV7SN38xVVdJaseW7d",
  "key18": "VEbAQbwUFJf3GejDMQsK4L9pLBASzdpXgAAwG6NESQAFZ2y5iCT3X2H9LWSMc1StiKzTcUGcGH6jPUSkfoknKMi",
  "key19": "5i4zaT3sMUb59X6chKmuKBTEskBQV3HpxGaBSaDnqvwNFmhe4DiUyuUaVTn9uNpCtNJpGcTP16UCL5SQYZgKjsby",
  "key20": "2NRSqYueyKMVgbBGDEjMWAUfomJrnWTuDSUKAuW4Sm3avuQKUT7V8ckeR2Mqs7KgJKD5h1AW9KRK1vxdhTpaDP81",
  "key21": "2JoWeVg6tK8DLYvELs4x13ogpqvHiubcN67vbaJVLXF6h2CWegC2wpeHu2mCcM4Gy6w8TbmEWLWjwbnxpveeor1h",
  "key22": "tcockRzHp8jvrChQwH5RavbFWpBhtDtBmSEzvTcwUuh19SM11p9pcJQRspaXKymXZkjsUtvCYv7kGA4PhnsK5if",
  "key23": "5nasL3zpY3bpJiVhshLeuhRqJxY7fB7oTtLRe61VFtcp7oEaQDPFt92uKCE3DAabHFJ9ZP8Vn9DX6LxSyZaKP5kE",
  "key24": "2ChSxg4jMQjLRKr6q3WbLw3W6MsjjERfVsYc5pjCU5LvvwKZXttbMQ5dsscxLN98fzGf9s6mSuGoGzKcP2DHKFu4",
  "key25": "24amGrxX7XJCnQ6QhR2urWbTYofja22Pbg4pjNGBU5uBiMj3UJNHeDzzRC93ce9wg5sBfKZudJMJZvPrCn5394a8",
  "key26": "22H94zmdM7cVkPvmWvWXjvja29pSUQSTPEgsMDdaYmHhiqPWZ6tzngAbHT72i7ZygbJcDgZEHXjhG5AfsqeN8C8t",
  "key27": "3wyDZNgr7Jwxt6btyc3K6fqY3KzAr4TbLcCnsfeWRvbMrUTyhTVjHzpn3NCWjtECLv7KMaoRnYcNB5GUWjNfK7d",
  "key28": "2RWoBs3VW2Usbx1nTgeCiPbPnCCphxYQoPsvvfdrAEaCfJ17a7F9YepUDCdoYCJs9nsqh1gj9DLHEYZFRZvbVip9",
  "key29": "5gXkrNjbR53Hzusq5UK22M3sY9vDubWuXRje4qHajtukPZEaJFcn2c1UmqbPSeNCXgApPLvJAM1N2MpuFR83MwPh",
  "key30": "4y5W7W1YiSJL4ULLEkNV6qcPZTN57aqf5XtbqWbhJaS19od3Po439jXTAE2HnhCXNtYnL4Q2ghoxrvXytL4zRAk2",
  "key31": "5e31CjBfRFnsFdTyJUY3Du8BdgYsCowSJzfBKVScmZebEcAsyTjaW9b6yefpnNn2Hwzj1jtCzjgGvur2idjxLFG9",
  "key32": "4JXnriaxTn2wbevSG8whPoiLqvSgQpNhD1x1SVNaGJwAp6yHDkhtJEAcLQWJ6nSrXynkkuTXTmU1QacL5UXkhZWX",
  "key33": "32fgU2rE2sZMZzHtKSnobtyQgDnS9zkJ62EeCdCSuvgZKJqCDG9dmfWd8GJ1CggRGqChaqCr32RTRoEKapcVNPGa",
  "key34": "3GBGnkWFZG7z4E51MjDomFDHkLqFxhzHQ194XQeMUwTRPrUw7864i3pmVS3RGTzpp3FFTYtGE2NtT1JSgXnV4KXe",
  "key35": "3vQcJH9VZFZVc1UtwvDYEQkdBmVjic1Nu1A11ZqfpuNK2BZfPoeDfZLKfSPUsxPo2VG8rfFn8tziYbD88cnwmRjX",
  "key36": "2fLZxJ54RuGwMLD8bH7uUviWraS3BvgbXu1P9gw46nrHJfkDsqSvXnUw4q1kLfwWG7es2W5b33EW7DWidnanmidk",
  "key37": "3MwKDpGGhbAUFoapDB4jTVLmqNwATpXh4vRDucW1r4wd5qe54iwCzDhxTpNWVc1m2TVE4rgvYwosT71cGq2c8qBp"
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
