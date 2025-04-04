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
    "3Rrq1vb4k3KyZKHiTJ4X3jeAjxTCMwxjx4nvqQdA35RzmXiwtVP4RyQ8WUoEpFcWxVjTVyUm3E8hoZSaWT1NbcqD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6WLWubYLh9597LBYhi3t3FNVTQCHx6k41xFzpB5uz64ZtF14DCaxc7R49mk2zqLdqDgHEQCRN7jd73GxxRr1rJK",
  "key1": "28ohQDHuF3UpYgCwrGFEUNnPy16LJSx6A4xsfrTX7vXgFS2MKy44mWdE1VpyrSY2NAax8GB5jUBfZXvop1c4MMfR",
  "key2": "3sUAwFnE7cFWzefd3ZcNvgDFiHtbTLMWJcbHphMPcioQBigTgjCdLA3FwJqWpw8MYBwrAbL6U2abN9jsoQTzVp63",
  "key3": "46oQ71FSDdvvbzpQ9T5qzH6GvKemKsBL2N3BpimTiQy4ejG7hLy9DpJyHvoVFjGD64PSvc14WEo7RVvz1oydSUm4",
  "key4": "3WPjRdCkLPBaL6bxQmXeubA5uF3gXkruHnZVDC4CfouvTGXVosoCP7ht3TL5rzC751DWMyHXr9waB4YcLHUxBA37",
  "key5": "4pHjshvSmK3ai6a7LjyYu51MjXscQ8tYMeuJhmybuy6DzFsrfTqugU8Q7AGGPB278NeEEx9PGwqzZmMKedD7CzMj",
  "key6": "3VwrG49hnBCn7FFegV6W3iv6vf3KnxeW6Cxku7rfSftm1XVDHUqHg5oJx1tYpFczTexvs14cNmcBbrgDeCyEhGrq",
  "key7": "2Gbd7T58geGtDv4Xw2WrN8cVJeE13qmaJTg5xEXhzJxyMvPpohSuniobVMyocWiYDR6UgvnR42MyYGs2FsjizpDZ",
  "key8": "38zd55KdCckkisRgkKB117h8JvVSbx7eKMQAcxtGozjfgfufc1iJuTkzXLsZ54YxHR9WBHbiqNVXqjqDt3TLQSu3",
  "key9": "Z3cLPXN1eKhGpMipLt4HuoB3eAF9SGM5JBN8BsjibLfJbMbg5aQAKY7EnFaeQTwDCJWiB38v6mQ38zQzcjZkwiB",
  "key10": "4FW1Gyj9Hs3XgkvkAEpipyMg38yPc3jYwnReZa6sCv5ANT8nw58wG6TX8GGJY9dYUZHs83V6mnCPmNNhUM7bwEnu",
  "key11": "23w9xE8QkACwh4sBfcJynTcsvEzbJ8RCjeLCAoJwwsgvDvijbtQBkHAwCwtDigG37jD3NAVyrR8bh6gVNefM8DKx",
  "key12": "5phQznfatk7Z4zivTTDWmkLDNveGodDJe9tZTDHNZjJZ2HMST3Q6hw1fYLdvNqYZ38V99vVvVUX2Gom6FTEqdLLm",
  "key13": "kJebXad2FCrPAMkMUbDj3EGxPJc88GQ4TpBAicFuaHecs9yeSiEVKTQKBsFu6qUwQTcSk6Hd91btWHYqMWJChrr",
  "key14": "VLyrKMf4Dbs68tAFpN5YYvef5USKiSLWxyajikthmmBU1U3v3FPA9phbUeE4mmpXNAdpAoZULfdnaBzXuwhndPH",
  "key15": "3fXwHb8NYPBjifqLgyWy6E42gyCkKhDJjedfaB2mV6RpvXUesFhXWQAQEbNeekNBeV8gkbnYrRrKXXKKXJKtFzbG",
  "key16": "2bBdpQvmVEeK6YrpooJz6hAQPyFr3C7LuR1JAXvx4DAcV68im9rC3R984kUzobJW6FLS3DsvwmPAkiLyyZ7MPR19",
  "key17": "529KKGxDf79sdGedS7RGWvfV91MfkSDuo19AVbJem1pDm4KTLti1WT9gW2vFJ6V13z5nAEmapwGeFkPY2N8qR8NT",
  "key18": "5idzW9JMSVbKxB8qeiWyiTphzXHHLQDq6MUbYZcPjefTAq45mnK7FCpLrUQBHZwcjm4EE3e3hEa6ExGAFCw18WFy",
  "key19": "5KRnM3KUQSfq8Q5EwRB8HxMy3PjhB1mojmefU1RsSrYEpZW9kkZEaVTk7E4iUYTSvemSVgV215a5ewyeThSQt49P",
  "key20": "5WRswjfeN8Nwpv8uXX3unjhuU95ydqo9SW8e3ED6NwKYecEVZibmjNfm73anW7d6AX1AjrWRB36mzdbbKBkeSUFx",
  "key21": "4hG6ki4fwQE7j8qYcXst1DafiNRq5UVoxJZF5yDqGiYjT4ozj1iFWMQJJij5gGdfsfXTdtaetDdbdCX4b1KnqVNE",
  "key22": "3oxTqtmFinpK8VjWfZBBFTqYrAdCm6U3115q8bdHHotkmsVjSZjFc8WFv98LFpG1HLENbNk5e7y8Fs3WWv4Rh7ew",
  "key23": "577VGnmnP2JdZLq3vcVLTKZJTLqci7iP2QvhXtkHjmzN3b4RT9XHxfAsQrqsy8L9z4ThqRM5vcCsAFrikFspfaSj",
  "key24": "5PjVUkYJbmGc98SGo4B8nRmbmEcXmPMuNdHEL34EJCMjbUPNPBsYN1uARw6Q5UcdgwvnxGv2jETLLMn5SfTCC5q5",
  "key25": "4dfJKZuh5AiUbMfwf6Ji2Jn26zpXLZ2cSNHZ7vVPqmmPvy7wCiYhs3UNdNkQSNJGBj5Ne7ent8vqHZAonMsD7ofW",
  "key26": "5vCXx3SMKUjQH5dL89Zy6wHANdQ363hNPMUvgBHFt7BVuZGzcng2NXmTN6kCfz1og5ogcfxDh2RPvJKz8pLtKhx8",
  "key27": "a2WfozYVcRp7s2pMhB8U9yHo4AkKGWNALcjYRkeTPPjQVEKA9J7Yzo3UC2WYaDDXV9HoHa8Bk9rGppDYwm98UhE",
  "key28": "5BS3pDbxLLykLU4RcwzhxMhoaMv9qnkynzjF9wdzt3zrcV8Exsdgx71iw7QH6E9yomYtArKj4o98faDAz5CUx94i",
  "key29": "4HPp48RFhBzaXjr8XX2KUCRTPAN5aLgXRXGi62edcHeq2mQyhK47y9sqAH8rsUxL1Y2rvpxjuLoWFpMQFcJcryXL",
  "key30": "2A6BDpAetW4C9DaaBeVSW4cWXftMEMZ9VrQbB9K6CQ3bspLKFLKmGpVVuKAsGNvoaZzYGCcoZWUaCZ1p4i6ufZz7",
  "key31": "5RohF9Rdx2sKVnfuvx6FBdNL3U4RALqVExfgdB45wsuz99qGxaYaJcZeTB7xBYJiDd1bmUmbbrmQG4rprzDXzbbx",
  "key32": "43DdCyVKrXCB92ZGkzUVnvgoskjRxTb6rFnMpTSrXzXJuNLZXMDAbFrN7MzR93xHGXcgHE1sGSrEEEbANZkATRUD",
  "key33": "2mdmzYGAoLe7oLwvc1ETW2HmpNkd2mBN1bycxRcJLhZx7GAnMi6Je1dbnQCXAMmqmsSHaJS3tga1V9oYbQ33JCbo",
  "key34": "5uinGXHvnAHVuXr23fgt4oobXtv3BRcKxrkXd9BhC8VGWByaDeUTybUFNDjsRYCdcC1GnSohwMzqACET3D3pYUoG",
  "key35": "37GCtq9Cu3skLato211fQyTjzT9XR1QusyLqEvdKvsPZvGz8dpMmLL26BVqVnHrNqeVmEiCAyunrhtxUHbFroebw",
  "key36": "3Rj7eckUfVeiyydDrPhddYt3VXpkZic3up1Jribjn5s8SDAAhCQKCvXXym2s3DLUrx3CRJ6C5PjpRp5x4Zh4bRf2",
  "key37": "5kkJNVrVCM2vxssP4Ko3zBo6ufaYX7JgKF7WTENBoRGqPUbW7THp7QbNeW5n53WMgdq5h6RqUgBsyGQBVC4RHL4v",
  "key38": "yvEfjBWQozBTTa2n1qWxt6EsWiChf3zbgrnUWMezV4cHxnVhKR1ZLjG9owSwqbBhX3brMqV4w8A4rFoqjwKrtZN",
  "key39": "45EtrWamomDEGhMe31jtj382y1En9LgRVGTXGUkBn9AeXovL5VbeEccvsdLVy932PpEZaPES5huaA6A2wTBFimUm",
  "key40": "4vBh9XFwvsAtWZEdMs2kketZqdBAZhgJKNFj826p19z6bP2rwXfyhBEkcqZrWj7f7f8CbMm5xmUNyj3KddnfSYnQ",
  "key41": "2zzKWEr438t5ucLm1UrAYAjr9wsgFqNJFSeo9fNGTQ5aNXf4gPmuJgjbrsrMJTmhURsdzmuKgNKaQu981NPa8erA",
  "key42": "zh7WHCRieGS92FbZDfzNFne5zVzPwq16HBKGY1EafRjukSeCoSKZe6mNBg1zBcRqWK89ThvLs9ZBBNfWKDVmvsp",
  "key43": "3EdY3AV3AxiR9v159UuGMUHJjU9L7TCzDDtonbAdFSqa2hHN6CDUWKLxiSPy7v7g3HJacGVPh22uHYZBrApWfXSd",
  "key44": "cP3GskCHDHwWJ6WKEfG2a47yEkLC8BWVUoHRsgMYksMTCJzqETutqdXG7RN3ifwVCodyzUdMYvEEUs2oTgxxXqe",
  "key45": "49RXzT9YaDdPBW2vpFTBSo9Yq6dmAVJza5UB2ySgaHdZkwKSuBwiU88dtYHgou75MKVCMXiucLEux1vKdzCW2mRy",
  "key46": "3dRnuEy3naCbD8Mvusk8SBFKBn1dUjGS6hc9fzfrpc5dgD11ZPcUhhvDq9ERewvKfVfLwLWdQKUXJsGexbujn7FH",
  "key47": "9hvZCWxiDMmmWocjZmjGmFF9RxjDHLVHgqt8kTwtCCDw3inVpSr3QViezpVKdVDSjDmqkZD8bRomSZSNLWZud5h",
  "key48": "4LTvxgD7y8zEWKkpqJT7VRXkYM6iz3SFy6CjNquBDkek9ziYKy62gTCRXqYEfN7tWMjXY7C111xS38sxMtGeAVzC"
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
