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
    "4BZSQKCTnH9gtRdNZgXPxCUNj75cUGdC4B18SV6A2a8BBDrRMKHGJ2uovscnm2spdtxgd34bfcWntByEFMMqXucs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4u3v6DC7FpsNcN6NH6cZcTxfzYwaT921PfNpmwEXxgBjrzpVsQHTwM9RzRvrJRuXBcNpZKd5arQucGafzCwfn51e",
  "key1": "3GBBkZ7Kc4djKnKVNwFxC45JW43yiQJnatPUACeJSBHx8nAJvNjs8MwB8QQzzpErmucM1tsJYGd5VeBogygmcxnN",
  "key2": "4Bt9h54PNfrSqsT5CT9ruJbn6AjSn6mxPT2bet2b6Q28nW3uozRNHgdESPpxLV6BGYDBPyRJTt4UbaNcb4NTZggA",
  "key3": "Ug1Sh9Ju9PFRwE5zEwK2shJW9XgWYpNy4sEXo9P5FGxKnaurA9nuSKv88d6e6A67itPRdJGpZtJkHp4hn7xniZJ",
  "key4": "48hVfw9YpZdjAq7NqSQJhzbnR5uBxMfF44jnW1WT1jafrRmd7kagGTU87UtEQA1R6MiwoAmf3vy2vZZf3DwzKQ7Q",
  "key5": "5hsHMAMrV4ZEfx9fvzBP7LrWbjJgpvuQKS3bMx32ZJNCWUackkjk2FYnQ8USysMs3ZjsNaxNuyJqkFnVf75jKfEH",
  "key6": "2sn87HG7p5SSECxGi8LEe7aNMvTMhgxrt5s7QBtRdLccVGgAFhjLMwGPpnEVq9TWBYsJGaBcBW8jJ6mMKnqAfuFa",
  "key7": "212RpzPrckNAx9J3cEREqWKf7XwViVg5PxG3e83iypPTAf1r6JcBYtirmnpivuhwitzepPz2LPAnTGSftd9VQh6E",
  "key8": "3iBGtghrDnhdYAjPbX9pDQPDx5rUaeTbfjFFQDYKYqCgXW6RQ87c5CnNR9JhdgoeUQZAfcRRZCd7B7mXLS6vFHR8",
  "key9": "prbeXt4swK6mBo1P9kccGzmPouSz5axmStve1hrC5yZKgotRU6AosFzAgGAWGnjy2TLvz34ysU8m8rwW6RHpXJN",
  "key10": "2HSVkHeCSXS92kFRrvEuqKyxpHW6XqonyzRHiNUgGP22MnMmMmzZSq7aitgbAkZeTieizX9Fe8V3ARyzxcUuEMsL",
  "key11": "5mKqL42aqwx3fXKubTxNy48H98vXXMskwhCnhMRsXmyBbnn8JoFAR7u9Nk4RmmDvDtfLnkh9a531zZZ2sVdWKJhT",
  "key12": "2VTrksa4s6zygRXfXLT2zEQWdg1JKKALgGbQRJ6xYy91Yf5WPcbYfrNWJXjfjiyM3V8BJgW577szNvaa2PtD67z1",
  "key13": "4kPRfE9ghdsT6Gqpa2eaxeBXTkb6ivY8pPB456RoqqugZ5i6VCG3ts26wMTWyYECj2Jb1GLuWi5ZLmA2Ft92pTpS",
  "key14": "3DnTrD5J3tNR3skeF9MKpdKGrAo5ohioDeycaZfgoAoSJbvdQSLXuNz1UgB9mfC9cvx2oHXA9UjbVRQ5LaQrFmuG",
  "key15": "65XuPtWNsoPr4eCLywCGnvSSQm7oaMHKJjAcbeyoZtg3abcs8sb9WatmVE3jyCfGFb97Afw7DQW1CTojSUv8qZ4R",
  "key16": "2wsnq5UFdEdn6TrwyaDkN1rqBurtkuQYSmgdiFRbB1AytSAFfBbDTaQfsCyCtJvSVdbsKAT46ZCxEDbYkeQDSUuT",
  "key17": "2f2fPpSh2yV22Rj23GdjiXned9ZENqyvsq52wAnZGmGUzgupeiPJQug7txrSMqDEm3NJLuJWGrwxDxwNn4mtpHWm",
  "key18": "2HaqpXy68dFPA2ShHwptcoBq6Wd6huLrZKUR8k4U1uxyCvgdmL7Yv1ixPA2bhMCyaqYzfDaG2n2Nh3ew6ZmLz5pQ",
  "key19": "b9XxvMNZHV8ATxjcnB8GcpjP4W92t75YDBdXK3HUz2tCx1SfiVAjUmXKMpnqzFv3s2qeuVnpdkPMgAm3rZ9Wthh",
  "key20": "dnwT8rqpd3i8y12QLR8VuiX4nZBzRxEJjEwA8HuNTfzMHEd7hER6s9gthcCWDWcFkvgwvSRJNCmWRdVKKn5J3MA",
  "key21": "3diRqvD23mWeEa7AP1eBJNSWCfrj7yBxwZAh26NCtTVB72XWBCAU2YxHHDBSrtG3uC7oMAtyCNu9a48E3qMTEsgH",
  "key22": "5VaczA24n4J9C59yxbWV5BSJpay9AR949J3E5B2yzWtZeVPcMUtbj9uZ7gPwPZ7CQSoz9W1DCHL8KqQdrrieRp1J",
  "key23": "3xzfsKW7vhx6KEaE6rJ2NdUXysnXAppVSqJx1i3RPsDvovhFiEiW1u9dmD3Xd2GHpLS8ZM6eMaYGroL4PK75fSZS",
  "key24": "5wC4c2QevpdcKuA8u9RrXR4p2iqdfUW1kxYyx5By381ft3WAC5F2WBqGUurLfnDdMkpuQMmXaieANBKQhNWLZhF7",
  "key25": "FicNYoFHSXB4crtiGy9stsdtjr5nGKfJhZzEyp1UJ2AjUqYYyYrUMNZmyBvPKeutkdVSc3RivMLiFJf3MSzXefA",
  "key26": "2cP8G2aY1rSYX6B2Y6GNRMHB7DUnGXYDqKtmcqpehHp8g5kjGf9HJcJuYEeuepoc9qmSn89eSaQQPYwjvH35t678",
  "key27": "4JKRg6SteZSCVhZeoUGpBZNiRM5tuwNVKXo5jctpVJNAAingtMBQThFyEjHAcYW9APjnEy7vkZ7KmQ7LpJKtaa3",
  "key28": "5rBQpUDPy9zRGGeuAQYgGsCMuwjFHG8gEKkXax5BaFHXe3Nx2nLY4h1Fr5s58k7n34ynt4fsvZzzWiX2AQUaW7bz",
  "key29": "2z2jRQc3yzdBkBJ8pma8SysfBJbSRJeszoaSjxRsX4UGNxy7KFbKw7jNwPyKhWYyNpTp64HZRb5rsvG4BqF8gSv4",
  "key30": "3XT1QqADYnLTxS86s2Qo7areCxbxVXkXHE8KdR76qVrFtobmFw9PHYY7whW1yfgwpWbEeyKeQ5Pu7vmR2w2Fmu6g",
  "key31": "pbnyEivaqGKEeKQmokNY9fAq3t6NEaBDC8gt9ctwYdNkrdtJr6zXinuMJrVngCUBAsqiRYRw81J67d2XMXN18fu",
  "key32": "qiNXKQ6uE6zwpA8kxCvh2NYaTw9PWfa2FP2aiBFpma2tNgPkA9PWemgSGSzcvSRnz18ceGsLPKBs2LVpz1sn3M5",
  "key33": "22NsTAMEbFxN1uuqZtDhZRqLUGRcpwgueH8YfpcyoSmZxFXbQHJdadqcvz9LJspywdrnatNnsgwbV3sSTZX4ouyv",
  "key34": "4Ujztyo36n96ddJ962cPovY74aY98YKrdsT9y4oMvn3Xe5psVp224EwPzk2Ko8ZCdvQr2doWQU5nmj4Va8UesUK6",
  "key35": "uETXoP7qUY9HD745bvqu1M3hTzcdjFWXzYnXN5WqgvQvBMJ7MbSbzFFRcnVryoCC8fUCfLF4FP28mbCmmkwNBFa",
  "key36": "4hGf6Xy3mMkddUgBdT9wrhf3d1v8Xr3vXi7MKkqn8SxZfgvbEDn68eeyJK2T3sfR2RVPo3bGy4Vpi5XYY3mfnnuZ",
  "key37": "5d1HeYxJrsvHLSFjMqJK5QmXPLSdJEzyqPGGBewGkryidyt222hCYsaA5kpqsmQnTmThyxNyo5TJKrwyLLoZzinT",
  "key38": "tgL18E9SaLbNH85P44Qo2zUJAogJZ76gbad3CbGWa3ZB7wYJqGdQ5iw4FFfR9bVaY7zKLaHZBuVgXL6nN6ov9kx",
  "key39": "4BuStfWi61SnaEsPrXXQ5W4tX8q5WFeDe1bJr7C8rtApm5vccUTGBKfQRMk1DDePmbP8XWDpzeRJGWFz42Rh2BpE",
  "key40": "5VFth3rBc5oQTb2rQPTBWQQSigkqdL6gxnsPDetvK91YHSTr2tdcgetyL56Hs3kD5bngqkiGwVZniDJvqqMg6eke",
  "key41": "3Zrk7cqU1M2JzaNrgTtkKbY4JKqDqv9SytVLvcjfNKKZuaw5tCk5JsmzepfNtNYr2tabFCTj1wChL1wJohPd4DJY",
  "key42": "3wpdjgcWMLiEYTMYV8npETQTQRksRdGsK1FT6H5sKrqTpXxWhR2eLCfcCaKkTYDch1W8HZTRa4yRmwrsz5PzojhH",
  "key43": "5eLDwmdnF6nKCL1prKhM4vxG57buSfDmKxYv5Z73mVsbt8JMKxo5jxW8ccQGNQkPdRyJAz62VgGABtj5VApZacgR",
  "key44": "5yTvy8csNx8nmbPBDP1NY4bf5NWtreCQDHm8zSEy4xvz7VacXvPfRLRub5sn6Z9jZmifFY2HE364E48YWFsfXC64"
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
