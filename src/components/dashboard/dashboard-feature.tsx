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
    "2czh8eKzEmbm6qyZQRz7HnEiEqpdrjKkK6UJexxPAhzmxYyJCSoYqqr1pHthKzVEHu6pUUBBWLrLmEFBymyYxZup"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zA4kJ93VzKNWXUg4rqNZccn8NRtBY5PStd5jFubA2TU7M9w4S3Dsmw9eAQCFDzU8vmMhV78xwKqsfPvCvoZLec5",
  "key1": "3M4oB6BD85QyxceCSH6VHWT9JGAPfVTFomuoMKVKTiJbZVpepjwJvnzXju9YhnHWeRz3bGGJD2LMJgBVd1RNPcwR",
  "key2": "31mrKFCrTBjK5cjwfjpdWCGSGTcFjmoZzgZnF5MMWYmEGzokYGt4NM6KoG4xoAMR52kK7fsgj7hpQkC4bKufmkJw",
  "key3": "27ySyAeEGQ3KXLav6jAQyzw8TLRwswqs4RaKyUWXvnSv8fZptbeaefFz4TXLLT3Yp88swdziBrHLUJFztUP79wzV",
  "key4": "5Rvh8ARoBkE3qSMCu5zNxzW23SHWXw4Vcup2H9MqVRVy829iTdQns9GFS6xyyFjjk63JfA3yPenyrtUXF9B6EC72",
  "key5": "4YrtiXJC34Qb9L9PNNY87ArjtBaY8c7ETAMHw5q9xFESUg4DpYEmmQJc2pK3UPFzutwVejARQPgpsoLmHhdCDq9n",
  "key6": "65vTGqdSmWJM8Y7uAd4gu76CC8sX49oFiiMNnTiTpdPD3gr4sh61LRo9UJmMgJmPSstr2KZCbmLAZweHzxKSfYnE",
  "key7": "jHn6Xsgz4tNRS9dGmb8C3jdbnJrVu7WAzE7dNDhQH2NfLX4YxmYfLWk9D8PkTSBgPZ9odRUNvgwximRYBUbf569",
  "key8": "4mNptowHFfoFPMaEDmHN9mNurEiz8stMeeL2SfN4ATRiQ82GMjci1AMsTUFvXja29AZDzgjHHodFmTDXdq8KSgpL",
  "key9": "3ZDjwTDDtAwvimMLrRq23hiiuxKXQK3N1zD4ztk4FtbDi1UXG18s3xaaubBeMM5LrWssCSzqQFnm5SA6ycgvEMtY",
  "key10": "s1BetBZrmu9ffgyvDUTbh2GNPJCgtJa6yAM5hQyF68YBvoqBLijuNzao2GQneSFyq4XUeBMdXHiVEaE15jVmogu",
  "key11": "3ZwW6xmQG7c9FpAqZZf1NpRYX8MLruDzyTf7QpRN17gQGaDmBWTdFNQ6JbS2HR2PcNyaQgeSexJ6PpapjcEc6zRF",
  "key12": "mXCGnPfpRVyHjdpTHi6p24S37CroJt8LwqPuhzEQqL84BPg32uNYuK3CBJNj9tSRQaCUKbW5WLGbf2cnk4aMdaR",
  "key13": "5LxkF79jx7usCJxpoRuMeDJ6obWg6ks4T4H6CpqBEjwBx5hrdoVhHJJVfvwSpMMmB3PimF3AqAXmqYxK9LXgQLvk",
  "key14": "4kkbZrDg5suhXrAUkWmBMMZTNNiwwdX91YPW7apvSxY3TWNnmnrjc1BALe2xvKuGP2Cn39odQYZqqos63o9PNdRS",
  "key15": "3QaLYUziZGpJqsR1L9c6w9ENbJDivRJHwF7gdY19i7vmD6zeZVVhWyaRETBZ1hgjLdNZbkWBsCNhTu6ZYjEmQ8Tb",
  "key16": "4ubHPA4mEe2jSaa9zJVhUrzqxJjBU3Muse8v9bzMCuLdHeBEYBZdwLmiDNNEpfeYp1ZRsd1KLbkZ6h6pqjLLdjs4",
  "key17": "46MJvRj1Qv4uZ6wSAA7qCBHRfcD2UrufnYrJN5xaCfo3Wz6aQzw7rWCP1vipxx22qFxbUDifMGW8zGfGNmgvXXJw",
  "key18": "Q3YtNvAAWRwmF14MwKLNWjr6D2iaMNUtBYNTs95qg3gN2Qu4NGubxgZLBuzwdp7aEtbsDzRMQaFSpnWJvkKfgyw",
  "key19": "4W2DCE9jRzQ65rAR2CBypn79ALt8LW5pCqFYtxSN5jx8ZKWBYu7Z6T99tRuBLTkxnca92jM8UCqQguRmWDoipGRP",
  "key20": "4tXu6s7pt3aysv7iPG1iRrUtRG7fvxZMw2kGNKUK3EUnSu2SNWVSBd34wFZ576A326iSJpX9468oj1PBWp4ZaxvX",
  "key21": "AZf8zvM8D49czKbuEmNYBpzYJqX6bQkPUVUx4VXmbXtWkAoEQDdLDoNpveGtRdJZ6DkoyZCuRE1S6iBzpqGVXrj",
  "key22": "2QqtWEL2hyHtWkFvDkhJrQdB4RK6K3v71PHFwBU8j4pdez2eJLiF9zME7ztop3Dk11aLQHpjkXTv4Am32mQr9xYX",
  "key23": "2Ma4yutWNZi3t8HV8eC6k6GTmCk7rYCqB73eTFo2TZXxHDfuC3zE9nnQa95cYHZkr6xoznge2BUiop7yZkbDGxJp",
  "key24": "2ZHv1xWtyxiq3aGShTD5MNqE2rXyAyW73RgmXU4W16F6jG46ioLCWsXDZpQVah8sXLtNmqta3EepAuu8ASXt4mjN",
  "key25": "59QQoW5ZecjjDU2HLv3NeEQNbcacQs4tynLLWRMFVYenfKSGyPQXPnD8AyG23khQqaFvADUfGJ8SXMbAnRP2kbsd",
  "key26": "46cqMoJoGfNgzcbHsPN1v9DzqT1bkfnuH3kD7LJ7tBPtBJJogt5NzwDMrniR9tEtGSajif49NFj4tC87U7H5XdUn",
  "key27": "5GcHhEXJduxsWom72KfA37upZvtnptp8oJqG7UG5Woegnj6m5KjaY6TzGw3y7YcJdoRoQjMhTrtpMcfcf8kbbsBu",
  "key28": "3m2Pyn58CmQtGsxRTfzpnbuJniV8aFhPB5UCRxPFdate74EV7N7EJd6ZuysSCKLd9hfNFwSZL5uosUSf5Di4kn5V",
  "key29": "2bBUprNS4NrEKHh5ZUnYo8CETzpynHkLUZkjV3Sbn6NboFzLw9vxvBEWQodEBBSkN4evc2iAidGbjbMnyfd1tjDX",
  "key30": "3C5Ao4B96yGGgvJqacWdjuvEmJCwCb78q8nVhDnaipDPqmN4v4ZFcgcMHkiuhPP8gPWn3vr4tCQDMJQfw39HGZg2",
  "key31": "4Yt7HvCXkSv3JeLP6kMgx77ixwr8NvrVpHmb9evnsFDExmL77icYxH1Agr9o1M2vvY33UxxM1Uoo7SXQk9mTaWW7",
  "key32": "2YLsHQpV99sqBsUBL1VFSUrhjAuX4CeV22WZ7Mf21bMthxPRYg8aBTFNMY5rMQVHDud6mGgQH5p9cxi6vYegdu7o",
  "key33": "58o8yXKUa99PZKu7KfKMzN9JuSEkmaqhvUAowx9PqWaKpZw8Uv6GZaBraRrMZy9wdkiiGaX3nfFpjpKCqQdbdkJE",
  "key34": "3x3uuc1JffxUarugb1SuwmspzNM64Ww3qSpKHpHx75YnefErS8CjJJnvv9btPUhnvrcbs97zeqswyWtqK2FRNm9N",
  "key35": "3C2mwfFwuaWaSEctgsLMiLPawpDMVHXi2ECdUVSMJBLVv4RyRaZ6QvXeyMZWzZnu45DXKVPvwBGBZD3m67pec4s8",
  "key36": "3KZfheXwZnbdLFYmZLdBxy98rfq6NenVLRTiPFZQvaxWCmowsHj39QK9SuXfK4KiqMp5hivwuDifibYvfU5sr6xQ",
  "key37": "A6pMD5zXuUAiQig8UzbfB679ncZANGJXnaW21RW8iU6C9D8ShFQRmAVowMHjLXodwnT5RbxotZcUaAqCJFyBWmn",
  "key38": "5hXyj8BU4jkpZumbQimUhxQjsp1ZKRU6S5bqDzvhL6Ju1qYDF3cEECmFvc77886AAWoVh5YDffvYxYaVHDetaLt3",
  "key39": "2TbD4BZ5c4wW7GStdcmpfN9cgGbLvsiEeHtrxZcW41wZ1nS6z8T1hma5qcxWVJJeQs1VpmYf3d4L4HpKDbPDxjPL",
  "key40": "4waZkZgHfSotADHQKgL2U9zPCFQSxRJz9xSf3TbtpRdUisCa69cbfQPDSChJxyxY5fw4bGXsU16SysKo3nBgdMRz",
  "key41": "S5HqTckrKwDq1gp5ZJ9TgDNkvLvX44evaEbrphv8h918eCuGPidFxE7GPL3wUz5A8sRMAuCjXiseyd9XMjvRrhK",
  "key42": "4vkvopcmVUFSVaiRMCL64n7H1ufgkzJJGaenGga896WSRKbzwXKxMKWgcsREWXVGD87BZm9ZmJB7vh2Kx7q91WCw",
  "key43": "3yN5U2sUyUn6PJPpDuwswmJSMEZq4Fmz5QkUWUecWdbPgqyyZK9NNUpTEBQicMaft8JcELZASrAMZumaN67gmszs"
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
