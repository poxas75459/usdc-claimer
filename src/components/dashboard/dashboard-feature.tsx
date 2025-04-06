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
    "nVmQ1yfU1xSzRgoo7B16qedi52rEvYqYx4Pt3ReMy3SzZavMnMV8DjRmcV59mH6T9Jwofh6zp2Wk7GyLtUa7nRr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5j6Bc9nAddQjpMdQJFVbdn1znnqhgJYgrGF3xt8XvzGKiW7W8GHtLiRXmPNcteoryR9FDVKGML4h5L15ibqpP6EM",
  "key1": "3XTBzM43rg65zhQZVKMnXE88hkWbkwAaYSqtxt4tsAQZJsVWqNrvd8KSfDrDNMkmCCByNz4ksAgyoVQcdTyDmeHk",
  "key2": "2EGJ5qCbw3jpqLLpXpGpQD3xWg46xhaeYD4Z3FgxW3P8uAFhDd3CFa37hynwo4CfvoB7THBZTTZHqUpVTUheWxk8",
  "key3": "2YJpuoVimkxK7ToBowiBwFjtX16gvj2psXNFnnYBmhnRVYNr4VpQhxDjXKcPLkGw4cJEXkjst8w9QS61b4d3fLQ5",
  "key4": "3LS9W7DdAUHZ4XSTfViQfiUnjUnBQrUkurxGfaJvckJox9chDckWDwtXCE1Yr1SiKr4P7MtzZUV2LdEK7Y4ZqhTZ",
  "key5": "4XUrNWDvyrv6w7zJ5uRWnJyMvZsndp8rXykymwJNZcam1kzxv3JMPVx9tskpikrD35rf9kXNk8jHCGbGY4EhGcaz",
  "key6": "298DjGQWLJcYUwU1TSbTPytRA4aCDnHXHpkBPvC5QSRPN1dK8Fw7xLm8wkaxUEt8LuXMF7fY6BA3hYjqYKidBbrQ",
  "key7": "TVgmAG1vAWCPtJGKX1Gu4Rf6eje9u3YM5yo9TCpmaY5kM8Gii8puMGsCBJsF7CfPXieNAyyyfamf41YjJqqWxD3",
  "key8": "56ixWPwEvMgCBVhXBt2U6cx99ks2JtEZSdshe9SAuE1hBpWYAbw4hhz9t3KL2joehj8HiNfC6aybTxR17FY5zbrK",
  "key9": "ZHZtHYxhdvx1ftCk1zXWVc3aoJYzbjQ8SJ4t67hv4wg336BvuMYjkxTXUFffQc3Qr4DR65dNo3pUg6hVQ2CkhEV",
  "key10": "53teCw5owKkpjJh3xnnQLy3q8h7vcM7hJzsRfZeq74ZM3HXj5covub7u4rcoqEXgJRzxmRPMtS8oQtqxsVWAmuN8",
  "key11": "ZZjFnjS1tBULARkjSXzD5cYbfarrYjDVmHmPxYi7LRTperbUbyc3iMT7iYbMAq6cNC11YyKiBc5ZojXtbvXEVt1",
  "key12": "2vKgJYzXaBz82pYH7qkiuGecdX8tmhm5e1jzkN7jMQNg4Cej6jEA9Ae8RdZufDHXzEtrv1jFfMSY1cu64CzBm2te",
  "key13": "3K5MZRiVRxydruD1Ze85FR1DDSVvCJuuwChuAzaw2K3jtTVfEiPocjd2iQWcVvfbX8PV8WpJ6Uqh3kTGDtjvsDHh",
  "key14": "2ziGrf7stproDBw1wvij5WgGKa2zoT1ef3fnR8oef7dThjfvoPBeptYuTcvYnxJCqnZAaP8z4FYFuSY24sskST5i",
  "key15": "2X241AuGcz1ha5wJ2qcLBR8djxAL9fTGkPWiMVf3UEMzVXoWw7QjUakdDWgaHHa8cRRMZ9ETx2DrNw2ThVANPL8D",
  "key16": "o68sLp4c47m3VUZ5UQHkv9dkD2xF4YMpZXAhtEyG48A2iBNcdQaxBtDs2bW7de6HtvTqeFemAzXd7X4WWHz34Xn",
  "key17": "33nH6zzHfCUsKSE7KEfxEwd24QSjdvFYQrUi1oybL2B9QckMqabbiKpbWJ9EAP5BLrxyutNorBjgFM1CxG3Pswwu",
  "key18": "3qWdW4mokvh8FYwo3rbaicp7K3UGE9hzvYb72iwtkSQWuikBCuCgeyB6ppL6eJLpwo8fxi9EMrCG25ynY2swb13Q",
  "key19": "3YcBX5QywuN8K825GN1sNrGP6Y81gkbw5v18ebXQqrGwGsb1hMAyakaUMPTaZCACZZ4BrHSPvfwfLyspCzVnhWUk",
  "key20": "vZ9YMmhPBqnAYAPpZNBkEuDFxbHHPK24UAHGpzyZQANGvY88FwL1JM5tN4pbxMj9gyZ99eGvmZpbhNZJEdrYAZw",
  "key21": "3VmXkXPBa44J22mBLUqxPqqrAf777JGJSVSWp7owNbEaJAffcJE1JwkZowuPBzwGEAhxVrzZcVRBQM2MY4oQfkzH",
  "key22": "58q4oHM9TLAZkvUoUSbYCswdLN6k1M9FVdQzsBYE5AU11qWFrA8f459ZBwZuAPv9CHg8fCtTTVNHGdc7MiDQzJ4A",
  "key23": "3PCcbW4ry2Haxw5R9np7ncKn1mhq8R9Rm8SbnzRWEgJ9UTymK6oBwQi5HpLmmVLh7rPSEbwAEm8fWbw6nh6CPe6V",
  "key24": "5RiisceSLVNqj2q1hWnAcqgiXNoymwjYzWGbd3h5957gp3GAiuChQoBCUMwqxojJTfcbyJs8LjqP9mAqZaguMQKr",
  "key25": "DygCKyY4rpq59EsDJB7ko4EoTbFYnVuehfp7zzA98ywEVfKFVisDqEFR85fHRMDGETQa4XHUvp1gZDWBsz6fBJe",
  "key26": "Tue2ESUU5Qu2U9QmcREyyiMeZjqpbwYd1BZmx6ucNofrbsum4VjcVLEfCkQZPMLRgL84k3qzP9Bz9u6xgvcViqy",
  "key27": "5o5rn9CG5GvcznSyoCPecgcGS3rozwS4MLtA5yEMLoa7WPm5wurCNEKhDZNgY4QocTqcwagkrNvNbThc4tTNBk6a",
  "key28": "3hKK1xQhKeevSStorpU8rxhnicfjXoSzao5d9rjDeGXnkrntk74YbLcsWvaT7qadrMy4cJZpkSiTC1Pgpdy3i7Ls",
  "key29": "5H8LAYThESGqKUAnUrUVNpfExUPYz2M4qUhpeoE7hYyDUPrxTXaDbiKuPjnokWn5qkRb2X58y1uTj44pVQFWHzKD",
  "key30": "5uR3LypSjWErtjX7te35PcSzKRZA9rFuCPxjYkigWcbHwfQ4JZ1HN9gEj45q1M6hmxukRUTSaSENYStXuodp4NnS",
  "key31": "5dKAa6qEASGfoY44oaNCdQVuLDsstJZbdXNWgRZCiXqZkTmMBAkZRwVBYayyENCBGaSj7D2m1bdLC6XdKzq8uRSJ",
  "key32": "5GwrbLFFR6hxvfsVtUuP1RPpAHX2UbFbvxajqgsV78QZ7tz3YV8vWtJJAgmmYZSNEz5nPUBYs6JjWG1qpom96jop",
  "key33": "fixvzh1LHZ3DhcZcqqxqaJCbu9itQyT9JwqfbbmP6uvuVkoEzCEr6P296cJTcsmCAoSdTpQPnoVjnQy5XDXbSgG",
  "key34": "2gbz3dHU6mjbo5JViJqy8Tth9EycXJPvZHANBY5tygQBL83Ln6H6VDMosYWDrk8zwNj7Vjp1VQQRew7oFZ1TeHoh",
  "key35": "2dAZvAEb9zv6ZTdhBiQNFwQMhZz552arS6Uh1GrKxweLgnN3q68jGyGmXp3jKdqpScgXkAhKeqBCKTjxEgx5r6Kd",
  "key36": "2QCdLhhy66AuFwTXiavogARQJmgGUkxfo8U4h9hXTZY79AAf1ZVExoij9wkWswnFzzAz2EaLtypSbFyeEjGySiMX",
  "key37": "51BffbdVecYnTUHFBAaBF9dSe8Ao5Ny83K2LF2Z5G6jHbqt22dUpQPqwskc3mkFefjyX6x8WST2HB6GFfMB8hPWs",
  "key38": "5uFeHbK17Ht8kqSbWEUC6AZpAZz583HNHfEtjhwX5hEvC4Ytdgzq9BvAwoidpG792AntsAohoW2oTSFEpmy8GaEV",
  "key39": "5KVzM66HrnsrKMgWZ9Jfe6kSvYhQnAJ5NxXvdiJp28YZSR183XDP5PDEfyN4cLqaCpmS6D1BcyjUY2zjhFMtDzJf",
  "key40": "5HfnPqsrfdBkSeUKtVJxpi9KFsbfurW6wNDHHmQibohNmPiSyFqEx2ys9gt1TEz2Suh139vhhkTKef6g2BZLMhc4",
  "key41": "3nn69uaamYgE5qDGyPocMN7jRCrAMWhgGx52vCsXxaYkriMJc58AJWsDJRGwZUMD5BRyhn4c4ahAuAWTZ8AaNyRq",
  "key42": "66wtGjPAchrbC1haJUM7pndbevJRCYvHM9CFyqTCFj7rUoigt4zyEEpwow8hgDxPiQG4wvx8u5yVE9YrYKQGE536",
  "key43": "4Pr23giwRdSZdFBgFcaH12cDQgGreBiVf2tYHugDLtwx2eHXGbAN9XUguCMCuJcf8YP7J3USnUjrUVMP2BhNp2Nc",
  "key44": "LvC47ELXeUs1Jp9VQmYr1dxF8Bi9TryVTvLgNPKsQLDPjEnaB1124fpxErKdrbAcyfyoGW2DEySnSGoA3LahJJL",
  "key45": "4NHLHCBdWuaoAFpJcVMFaph9j2JktEmf1AL3u5tn51FPUeN8RzoH1pCYSyFcokLF176VeNKvnUr4hkYPnYuXjMkU",
  "key46": "qqjgPHyQrZhVoro9WFaamsEjaEKYBh9kUTHLwG4uzntt2y2YmXQ8F4SpTCHiCWxUxBgHFY2zTC4AcnY6SeL2M8M"
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
