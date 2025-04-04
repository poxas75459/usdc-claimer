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
    "2y5Pr5wfcBvq2YnJTBGe981T6pPQZrawdgBybXtSPuRXeMWkq97x7fug9AscSB5Wn1w51oSczavQ3rdof7EBFfka"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5yN5mRrjNkwPwJjZcRMyxS16peN1a4DppsAS8NjXx1pH3bBjRRjrVRJ98UdkLRqiBRe5v8FVFcGTEZA24FvpHKLd",
  "key1": "2vX3hUs6fYf2PVR6Vcea6SACPcQ82i4B8ncwBd8DLqiEtDyBoS92s6DPdHBphfa53AEYqydDQeEiMZd6TtaDBC5P",
  "key2": "5smMZkNVJKBm31W1k9AfCumdRFE1sDtP7BCpb7RtunN3qpVoEcTf6UvkWbB5MdMARaSRyt1bXCBkSQpER3MqBops",
  "key3": "B4agJMRtWQg5uykMH95qAPsc5JzhMBYJ8uv8dckbDdQg9LfJzbN595DWaBiKLWJrqsnX3aW22L1WZY6qtApouZd",
  "key4": "5hTZdQxPbZoqwE9qAFpVyftVCXnmBZhJZps8HdAGHoNBX4QDUcsXbg2BqbaT8gqzBM7McEsinyhG3byoCaEQeDBw",
  "key5": "2WH4htrzV1cqWap9aNeUcSCeBKJbN5Sk8MNzwr7vnewAju3nikyDCe7dCtgm7o9pkHDBt9zzEM4kvT2GNQhb1NTD",
  "key6": "2vcFRy1gHWPgMVj7nsC2tYkpCLhsaow5RowepK6gW3duGFDZFdw88ArsBXkAvup11X21kmiTvEc51SVZqcLhXZEC",
  "key7": "5r3kShnDkMdBjB5WBi9R6vEteMjQMuAZ1EUPGZ9pt31xiFBDKr71kFmR1KHxyAKgLVNmv6diBP8FWWQJ9B9FZLNu",
  "key8": "3DYnwFVMrHdqQRNwWqiJeXXMy6Fx3eMj8gLN7xfcBVQjudDKQrRsPjdSsmbSPHw6Z9671T5WtDtNXQVkrUpJijg9",
  "key9": "x311oWKnQxSMZP5W7Xxbrprt3j6WLZcjErWm4esvCzwJYkQ74CoUruYJUcuRu1kpiQBkwvKKwnfdNsRsBsM9Est",
  "key10": "2cnCNm59FuxP9kjrbu24BurxLkvyNX7jKLPNNRazvAKbjKtuMUe9Mr88f5b7uaaqrA3tCYgmp7PMSGvUGBDzLTEp",
  "key11": "2EJhdrzB3LC3M8SExEeCdauNvVSuzwgJd1Eu5GijMFYn7rJicjWhHsrooq3onepveXamV7mYuKNZLqKHqMqYHiyT",
  "key12": "3pAEqNX3kuS9f1jNTF4yasTtovvS4txjZr19UpRegL33RYxo1KS7wunoyKVMPH2oevKtQ6Pbez4oeQZVzYQKA9Sk",
  "key13": "3ib37iCWfK3HzoJuwdjf9DcRLph5nnVQyTbvxroMFzr79rnLyhhgyK6Tt5iLqwH2RxrL5Uz5NdcLZHY9HC6yHQs2",
  "key14": "4yG9JcEykmW8TBSzPvVbDyWJu5edxEH6XG5MLS9cCadzFY3PMNa2LjHDbhjDi8gbGqrYKC9e9CrFfaiQXHR4kzfE",
  "key15": "3u6xSzSCwGtkvYR3YmVDGVHj3fpYc9KsGQHWRn7hEDFdVXzUXeHNoUvUyksjeEW1mxeusZnL7SyJLNQy1GKPGGHD",
  "key16": "2XjUkLN44LLah5rUZz2yGw2Vxfz9fZg7aJNT5X4yiJfurq2aNpB2tee7xGGabHe83bZZnPdbysB4Q8w3YfSZsrf2",
  "key17": "4EQrNeQguqanpucNc79j6f5HgCAHtibVGYW3wHKVM9Y6hTAuzmeLc3bwaQ8tSpuWDzy2bhmcgHeE6u6JvE7YayHF",
  "key18": "2Cmud8hJM17N6VjnR8XRLuhZKpo17AWubqWKvGexET5JeTKdVXLAUXi4GkUXQdevAnHKnkUzpFT23Q1HghjkfadL",
  "key19": "43skmnXsUZNokPJRysZcSuiA27S78w43P1aomzwVczpZFQAxnpumTfhUWXvpwmgiwzBZdnx4kCLJK1ZuUCysW15t",
  "key20": "4ehyp5aaAD7i2b8Jaj14dyeEvRPRXi6vT45WMniyX18acLBgEGmevoriThgM6312Nkh3Yxspz1aZHH1ZJSJH2uCV",
  "key21": "2yKJQXD99mnE1JjPNfTEVTxtTb2jkd1FkoKgejvaAK78edmLLM4K6bxK6YKeEG3QX6Lw5YNTiuDAM5QB5tb2Y18y",
  "key22": "2uUAtnMLsRSHqFNA4wEHtzF9U9J6u3y7he33sY1jaCPJqpyVkEZybNeFUJvAG1QscpCzXnUEnMqeHsxvaNuUJ31z",
  "key23": "2r3BCVL9zwP9pgh5Yy8VCLBJt1ukxopAeksnQNjXDt4KV94UukqCspkBYq9PUYsQzCsbA5mDWbekYgNcC5kxvFkL",
  "key24": "65zofpFLVPUv9LNU2CoTHyuc7YRaSytHxq5LZ23APAK2HGBUjbAZ8Aa1UmjAxR48ThZjZ842tyYDFE2Wgskeo8Lj",
  "key25": "56KYhBkFyiMwHVkTGFu3Ea62FWwEzcUdYmaxnu3C1z77hZPAz5bYeCUSoBvCzbq2L6outnTPBUC6vkJUfmvodu2P",
  "key26": "2xh582JXBoDUq6zamk2fp2CkvJfqaB8yDuqLJYogbtEvCWe97teRMev45Jv5k7Va8wvm2K4saMBsasKy2L3uxeiE",
  "key27": "3dffC4pyH5gjgjoQDRZ1kdEh5rz6m6TDmTLK5yFpnrEQUfyUeD3YKJ34CXiLvgccspQoCzW7gmqMXBA83fUixS54",
  "key28": "5QWBghbRNqtnmP7qjfyVXcBxE5rvwWyVbn3LQHkP71zmpugArhKMs8kQz7iuSP86FS6ohamMQLvC3dQaGuvA91tN",
  "key29": "3u7eqqLx46oE5RvWy6x3Nz8e49bXDcaJDCMrvukCP87SDGiNcfbhtaRGpPUiSbD9HrCaW96wc838tAkmhQXYB4vm",
  "key30": "4cAqY92455qL7nX5c7y2Yk7tgtWV8Pj3x5DMwEg6kbc4AME1hLXTB3AusDm9p7cCapdbDMpDUZL23n2L66yzHscx",
  "key31": "qYhfrfhxFEvT5kMWRg5EXAbHebQ62vCu8hD219FeERGio1imzpyzSFAsDV8o8bZxXe3P72QpE1eWzTWb8kBmfpx",
  "key32": "3K7z8tz8nyFvKk8AyVGZLda4HboS33ifRpt8Kqu9HB5c8dbJsdJhNZSHdfaNmYCBjkTh2fHn4a5XZ3pES3SF5kkA",
  "key33": "2VmVubPa3et2n5WznFp57jqKCt7uuvdij3RtHGZPxL6UdkhZmHqVcLEtmUCMEMrh68NFXFa7Knxm8DHwff66GosL",
  "key34": "2HKZNokTanzJoTzSJGeAxLtLhB6zLcaQg3a4mGPUGGrd6h9QxqUafLfeRwNeSAzKSM1xXTvcjs2DTQbKqFt37DDE",
  "key35": "4gW863y4pyUt1d1XDHJFthnX9gPZPTVdSP2hVggKHK2HWEEue3Rikutys2sVEkNqNftSawRKW3hV5Tzd9xsm3f3A",
  "key36": "2H2qRzCHzJEmh5iRgBKeJb8tMS79dT9VfDNZGbNQfECM1q6fu4DQAMpU8gUiHPqmDjXnmVJV4BUzUKpy7u1Vjca9",
  "key37": "55vtywsMjGjsfoW7UUBTM6fTyx22pWmm2xUPXNSHwq9bd3vPBbYLJZ9oouNTZbp8bUPjYCyr1T17qsosh9cd83KF",
  "key38": "5pgLzu1QRq14m5zLT92szfFF5PpShtFgx6eL5Zd3pC7GJcd6uiKKvUQQTQG6ML8jQUgMiLSC7aYsQtzHF9B18mrE",
  "key39": "3KC6X1v49gvJBQ8AyYyk3YC1b61jKBXDgSsNAH7g1UieSJeRaLaURwwNnWpkN5q42CCSxB89QqbEbg18AFMEgd97",
  "key40": "BxqUvVbiGN7FwSPvqdCgNrR2bxXtDBVpTB8LYjpa98wMLpE42w75ntFGGCym3Zo8f5KQTKm933PjrwFHLdcKQTQ",
  "key41": "3JSwFfESuSHGbkmQmbvSzSgvWJ5m8TUp9tfZ5obPBzXNWnjtC1FXxFDuBFRXXcJLdCDJ89BFXGMEwwrkamjk7NMU",
  "key42": "5MemySrdU7mMgGiUtRvvhPKSVR5UkxYUzZvQu9hx8Sj2XLfk4KuHxbyYCHWxEwXehVxM1tm637MK2KhxFcdA777b",
  "key43": "3zZayymRqF5WX14SMc2bC9CE7PofMBEES5kfzGxMrgvusjHrD9ATDmhZSRVp2shoSo2vijyY83tsyjzzKmjUKc3E"
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
