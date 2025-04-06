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
    "5PuoVX5Ecmt3NAZqwnsWurKkYpQLgeSxmBW5p4dj6Hsuz1wHVTVLyUekA93gLPc1Fo8WWqws2o2w7QpdmaqhPfCG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "EnqzgsXTWeXvDDAKn7jhdofwPjKRsEjijkSMCHncdqGkxkzDNR2jJo9Qo7bCKaqK17Kj1U369HZzPH8aJxJhHn7",
  "key1": "245dWXZwLUuQbZH9f6tWFV8kJHec8eA3KumP73WKNgCQNbCMzHkvt3K46vD7twMb4JvK5EK6jFcaW2DropGzXCzE",
  "key2": "5nye22Tnu6HXvrWMoiKntw98y5YrovbFkBJshmiCjYcLcaXyeqJvrva98z8T6FdRTmgeyo5QB2xdU56hqoiv7MVF",
  "key3": "3ypbK8x93CXnZDXvvMkEd96zeHxhVM4RoSYuHeCfWNoM3fpjyNj5adUHGJAjj6rQnxD6ih7kSkkkrty4CgQFFWwz",
  "key4": "4BeAVhyUf6BiGoTsRxbNbDnLceowbiZEnHsWd1iaQWB6boS2sJTHgwr42SGBe5fjUCJKHrv75QuEgzKZgcRrgFxb",
  "key5": "3m5AE2v5YqDHp3wFzJ9ksdm8acXkGL4GwjgZmuRZtqixUiZtWS4KWiEDADdnvBfjWAteWU9QvmeWgTs2qVso1EPv",
  "key6": "5HoQTsnUuXUyL9vMQeYz2uB6FHVyj38fZ3yj1N7TK5SGQkpguprr2LKSVMttZcDhxz453S7JbW2u7Xzm8yzFxKtr",
  "key7": "2o1gxdkPnuKjY5mnwKtJvuLFHjj8xnEqjqFNURd9WyV5endwmys9wXB9gMEpnh8hrXAFd257ukxLyTYP3da8e5Aw",
  "key8": "62Lmtt5QBsmnrazr1ugnJheFx2wF4w4Ddicn2vd3xvK8LAXqKemyHGvkcWw4MBh72BFyKwUVfvqhqaDJhcVqMLni",
  "key9": "441sNPSdhtmvCcAb43PuMNHYJVNXXQ7gx6G7tvrRNzsMbfczpjYfo6JMFsFyW2shvLVYzD8zoPVKbn4xNriaiNdQ",
  "key10": "o8HAjjQbcRNxKEfCFVkXBc4SgeavknsC9gFnC2dGywNtH9Zawh8cMXds5St3RFmJxsMoY3NyXRUApbrDeYr8987",
  "key11": "5Y6xYuWaWjr46SP22Vdz1wvxp8s2MeouWzsx8sRHLuoDqjTMTdjk5zivMKMoTLdoPZxjaHUAyQ4ScG98RJ6dknG6",
  "key12": "gSzGdT4wpiBx3HCLVgwusXQCU81LCTPbtGJwSwfmL2dA25BiA7tFDgREiVdHyqKFc9yU8YwENXXKKBGmRyfzWq4",
  "key13": "28euo8JXqMzYx1gXBQkTrmP1jJ4oTLcE4gnh5Z7GgkxM4XNN9aMP1TLYvenA1thj5Pv1BsdNaMhHmLGcZD4k2YNQ",
  "key14": "22jUjw6GK29mnL26CrhcyW7Mman4BQj19aPvyEP3h21XS8QfqpCnx1RqaTnvFQUvrJEQd5KnFGNEkP7d3ZBZJ2TH",
  "key15": "2SXXXzesE8dLhxBxP5b3u3imrXX74EyH7YFFdrMUDg9g3j8ebSK4DatjJFtdHp2AZy4zWbHxdgL1o4f2PtLu1Yqj",
  "key16": "2dwaMwZTVpZLCs4C34jcxexP93yXcgxphkjbQnA7RUjWCk5ktR51pqfV1Sds3u1v9U9vQvcVbz5qZbtRLZSREjp2",
  "key17": "4bMtJSEw8LJ3VoozZ4TujTd7D8R6FcrvQFW8PkTbetbgTqZ1K8BrZyvo1w7sWxo83CMyJPPFwniwbqmdDoMhgwY4",
  "key18": "3iFXdrA5FSfsrqaUN2fNhQYpLb2f52VSFF5EbHttDQ46hCnBKpxqRwifTF6fQWpRmmvtPxBQyXvHkPpeoUWo6KZz",
  "key19": "MHF4JtyV9i83kTTqHLRDggUXAfsQuExMwcSDtzHnAFNd5dcJwooLRDPr7yzUEpFrurPadcAQa3aEp71LxpJdhon",
  "key20": "34CkPV5wgxUQKifxnZfdpXbsoxDx5gbmLi2ioYab7A9CPhjK2YeByHFQzmcKrkcyfaTTvghPqPJbmBqd63tuERDR",
  "key21": "deXQomx9GsATit3yPH5ZDDeviNcdCTBq4ZNNCptTaLqiFuXZSymRDsbM98HYJPRuG1ivVFjo9CL6PJmcTwqjQfz",
  "key22": "3bPqNgXqSQy9M3pLLuDb4UBwWWqkPTNHFgYZRrFcH1gXPYVQ6w9qVwRCLYfgGjtBwCefgDFHS5afKzBAgpFTqTLq",
  "key23": "4LAmaQcUzmjPV9sVWjWUKk1YbV6oMrYCHNRvsCMBKtuXcvBvCJSoR5Aj61m4utLZG26csEuPWUcZBAD7ADrJU7DV",
  "key24": "2jM5nGk1sU81GZino1jH13zmc31Gs37uVRR7v1kyaEA29v16sTxnLgLZ8nt5iHrRnEifawU4KpTBmQ2rYCY7aJr2",
  "key25": "3U2v7G8LtiXtF8UyfJ4DedHFx1ki8PZT8cePwGuvarGwwGQH83EDDd38KnnQn456FPVamif7vS83vcdhQ9QVpJBa",
  "key26": "2ZQDxHrtNViNmWZU74LBsTCiy5Rzuea2Hfh4Bba7pVYhH6mrQNTkkKDaD3orCJu2SR4b3o6B4c2PoYp4EYmnqm6i",
  "key27": "3Nm6J8tQkkFNnJQNAtfWNQx1mxngSPrbW46MrTDik6vASV9byZUMBUWCBC8KHdT8RUCcTcvMtNCEa9omjVb1BjTu",
  "key28": "3RBfohFYna2UFDN5KHsDdFSpNZTxRtoDKmg4c5trjuJxsfQ1w5Bxwss5HWfmWMw2KJ9rzs1FVbFPrkgTA7maZiUe",
  "key29": "2MoSnD5LREXVtNKDeiM1xqWF91Xy29L1jruMaa3ddKXxQqDnduL6pmQaA6ocJyQPZ7GkhLyLpNtKkMVuxHNeYv5E",
  "key30": "51h6sdPSAKUNmiHbiZtL49bBbEWVpqZcouVXiURcsoGTkFxWb5ghizQpQEWf6uQFQuPNYdMa3U8oUvGTnBAXVRSh",
  "key31": "4ipbmim4p72ZvFe1fVLK1LPpdQj1PELxSZKsJdwGv6RFuzMejQUjMjKri6q91aXvamncoA2njiVCTofPe6A1YYGg",
  "key32": "4PobmMVEg71ZqW6CdBoBCzAikRjoApWRZENvmmB8LkGmmqvjxWXFE9UbJkGz7YEGcjsQXUMhzsqGuS2N1LHzAtgS",
  "key33": "ZhN95ND2wNPXqbZ4iUqran4ZJAMqqSUscmgRAwepJ9JGnvgJJSQcFhMyGfVJFiMESq6LoGQFmeWyNCQeaxaSpJg",
  "key34": "4rbkesds4XhfHXzaavWHRgbCMFjppvTAsLH9KNyGvM4aZqg9pkybC1sjJPQMHihWmSW5ZpXQy3ZCVyrjwYvp8Ui7",
  "key35": "3Bzrnm1XaXnE1y7R5ux3KJBZPjHggSfUa1GZ8SwG5ZuTL5oyfa7spyZQBc2gENZ7kYYXd5D63hb8XzqR6YT1DouR",
  "key36": "25ZKzrdAqzZsvVeuL9W5jXxSFw6E75xhASbyg1KUsRxpmXMKpMBpidyvp9yvDuqUKojgaywzW4FqpY8NTE6Ea4d8",
  "key37": "2M7nRoKooJk1zJ7VsRvdkQaPJq9pNTN89K5aUPCcRs5C3C6mzQamzUARncfPA5FgNdZwhtjABYXiPMP8o9P6YQU9",
  "key38": "xzjC9bJ2xWVPornbLPZ39FU5ABXEecRoWK9wExXGiaTQGXPPoLouu3nYuXKrU2sgovLNYQg5NiFNzjFV7zRvpVw",
  "key39": "4VwerGjsZRokfNgpJw93SjDHPz6WYR4cHKpP79SonuHCtwDohzpxmcqWg6nncHcmCzX9u2Jtcdhn5nCau3NhnBsy",
  "key40": "2SvbdN3Ju2tDdVnbVbMf5odTsqyNHdoPtYADHJHNavTib1p8RxtQ2EUSTzJoPhXfwSybYGgWrkGAoEthbEyTRkC2",
  "key41": "5FtPbjosyLEZV3PdPiHeUUMGf3b1jQs8NwWp44FXeogCv6yRi6bNpZBA2dYtjC3v8DuGsnFdCNBpF3G9d98YeRcL"
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
