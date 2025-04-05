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
    "4ZgZVGmXYs2X5mWBce4Z4vCTthbsbN8bpgH3BAF8QKq3mr8om1LGGC1uV63j5xuCHJZcE7YhiSzgaXoXkk4Tv8eP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5UtaMAng5C4v3BWX1jR9GTh7NXrvxUcqsqJmVB7ERVi2q4xuWrbQWjRC6tjbCrkEtTJbxUjDn4vqaRa8iMKpiB9Q",
  "key1": "vs8ZZzvtoznDzoYBkdkpDRBq43pmrZMQ1cKhHmWjj8AbpoQnAG1eNQsiT8DnfJCHUEptCE7xx7xBN4yoeZNofxn",
  "key2": "ZQ9RcyFLYgkhxywbceNZW9fRnGCjKtpqPyXoQvjcqpsgJfEm9Uj87KR54yRwJZDg6JhJSRjNBsbeFigafu9iC4v",
  "key3": "38u1kp5fhBauN91DzuadFWwXTye2bKPaG5Rejf4FZs7ycvwXu3hffxAwauTKG7sT1VrFuhLFn5TNdDm5HuNGFJcb",
  "key4": "3f2iyKGxa8frA8iQnxN4dyku3TeFMg9aT3u9K39uPozR5vn3A5ttrtHBSzzDppaavxx596ZkRU6g3sWnuEJnxxXU",
  "key5": "4s1hF3cQ6uNokrzG4SLx1RVhSF65VKdGhMLiHT6QfmXZKpXZQDTc1RN87Tp2zKVGWcbp4WJqzh5cBfZw9HJCPLU9",
  "key6": "tinwv3zcqvyfXn3m1RWD11erRquxARznXCGJcwWBmnGCXtEiifSnrJdjJYjNA7QZs8WM8TVDoPtYLHGAxpq6m4f",
  "key7": "gFEKEM7udGJhCQEerr1oUevKwB6AHb9QMcn2P6Y9MopJs6rkCtzBYHJrzxY4h7yrdDMrevQvJUgD28kidtXm9fa",
  "key8": "2Y7Cupgvf3y3y1t1F6qBx1tMrrg1gp3ADri7iQahBpttRK5QjmmQzZ5oDDr5gbjLHCQgFop1F6wRS4LzU55uTtJr",
  "key9": "4mLpDgXKFCgW5D1joZ3dxtJZHsD8qTFNnJiqXcojGUTRR2hykNnwoDt29CjqUdqNACyyynjjETntkbMkdwV3AbHc",
  "key10": "4HkpQg2PUARLgBwu5DDo17NUoniLfYhHtKc7kkjAXStNTcgjnQDVXqq9RHgTQVhWyAAZzhvmmHRxzNSZDD6omMX7",
  "key11": "4Wrft2V3iRZwammhzxECM7WkNBWbDtsMyXMyu5o3QewzUjGQyxL5MDYwzW2VGRDvrcrbA4hHJsvaxEUJqPDY1XWM",
  "key12": "5R9n869njY4nyNgCxV2NLWcwbj3DfJYc27EcQnsyf7jm2YCfrKUQQNx6hmpUHUXoV3EXzXeWg4R5bT9s9xJVkZoc",
  "key13": "3nE9VjKhraQyNEZ3kRf2vDd72TsVs2sKeNRLFCchxWRLnW7CQkEbpN1dXZmboowTKeH6FMkCbafLDwvwNW6wZxBb",
  "key14": "2LiSakcKpJumKHpReDE3SRg4EgraTfAVZfnq5sTeFE7XASg1KTRpJcdhcNaQBXWYetd5qiz12aXe7iGQey92jTki",
  "key15": "2BQKB9ffmgfrnV6AyefkV5VrCVuXAjRyXf212hrZb3As3uXvb81vyNo3qzEsn5pUu5pXreZTE1mkzzqWs975XJD4",
  "key16": "5tLRzZHwNXKbFodnzRbUDsrMH1UbgFj7TckBEqB4QCaRCi4zEmHHQLkjauhQMBRaGVDzCiFT5UCtZYguUYo7fWh6",
  "key17": "2dqYQoF5p6S9mqh3eFcajAXNYz9ifyEijWD4bEuLxzU1dkRbbiSz3wTbQWZegu5MjGEmsGwfLAbDASQFQvSGAacU",
  "key18": "2xRwmFQAQMNPnwSdhkceGFQgK1R1Fy9555BUJ7JWhCUkAgP7SwNegCBRkvWRvrbhCoN1woZA7JELTSEibCJ2SMkV",
  "key19": "Bf8QLv3dwRnRQezQjfCwVAV8JJs7DbV6r6frxEu14shLriQ9Y9X6G6YKknU8P1JezuKVbujdwqE3zPjxNgkGCQX",
  "key20": "45QFwQUYZF3xcBCa61CjPTKg6ufBtvXgv2TmDrWt37yanTpw7dZa1M4hsYQsFZAjm9dQsyvifembz4Rnb4K8oKfE",
  "key21": "3816zbfXPHmdnG7cnhVe8YmiGNNXq4TT14wTZjzYNwyrnTcFnVUGg465GCGe69QDnwtuYiwG8SGaD7DrWXx2dCJb",
  "key22": "5jjneyYYysZtfUm9cm1hXQwZzEpDYgPdG7GvSQKFbwzQnFMzA4xCfTJdY6RqN5cM2CbBvP9QQeWRs1Y5cK8LSxtu",
  "key23": "663sTnQX3gBXviSw1kEprA3Bof7MhKh5BSf433y8iUscUPTxefqABQt93FUEuqXwNdARPrxVDA7A9omxVCn5pJar",
  "key24": "iToVAjduJLufDsVTPw69DFprCMCD1YNYJzyXagRqboDPB1fGTFMAyVfxihnuzJbcLyt6hNXGk4dNCndHQsvjmzs",
  "key25": "5464iSReNt11eJLUWx3aNB68HqGgKHDVYkr3yLoJqnYgdNNd6VjzDiirvLicSseGL1bNVKagumRLJN4Cevdfao9u",
  "key26": "3BvrzNtR5Lru5narkn2h73uUL6Fp1Dmv8tiXqSCh3DEjMJdW8DeYV3cNPm9ebGA4y2911Aj5SYnxa8BEgUYBnDi",
  "key27": "4bnsTbnPEDwpQqZCzScALoe5eepxGGWzvJrWvYgGCBjZ6gJSPhqqcSzWD1FZiuw9JLkGjGZdzib9KpSMgteFQ8ZP",
  "key28": "3Mn327iJETrioMS8oGgrEEcC4jiDoybPdQUncQxqd2PUWDKVhrTqWpSCXELuqKxVEoPRiHZyYh7s8YZBWTxmM8ap",
  "key29": "3jqX8f9BxfPeippDWhQMtN3FreqJRKQuH2bKonzh1MwmyAr2jbqvvnfgo5bwzhNhXqLm2ApAtmT4odxw2Pj8eBRM",
  "key30": "2tfUP88UK2WMYZtuVpwRL4txHwhKpgosk9PBFYzyx2pJ86mW38uuZYJY8FRMRQoBNZYgFTN384tp97AEfA3e9ceM",
  "key31": "4EpQZxJG8omzfVDe1oUMr8pAsToujKtEi7GU9ucTBaMUq7T8g2NJBzPeoZcgMdxdXspupDrdfBYxFu9McGZ3Nys2",
  "key32": "5dVKjf5r451CM3ukPgE8bcgn2VrK2q6hWMCXhwdABYX3r7QG825pbhV24bkVzQv8QvfwS34CueomgbzVTGCXbeUx",
  "key33": "2xZ3NpVuoBY8KovZkjYd3qT3RVUtEjuECKzd8DRTvnjdXM6sCsunaP57xur6zSaHMdWE578mgfm3aLWco18pv7wK",
  "key34": "2WSPCphU2Tq1DCBph2BvsGXae9yuUChwyLw2g4tRKPsDedkEmSpGo1FnM5NNRX1nYCSemKYjkUtWxnnSdxeVZojL",
  "key35": "26LZGKmmA62GBH1c2RNgcKMTz7zevhPPXwB98LrjZ1VStms8oRVs2An9NHHSq2pBLroynasLBwutuTCzsrtYpwb1",
  "key36": "5Tc9aYzoiitAghydueHLgh8YCriKrGrKgYqb6xkkaBHRr9pxtEV3DEWaYpHDgi2kkp1mPDZQPBarrbaMYmj6PA7Q",
  "key37": "3FjXqJzwAVwSxsZAhcjPEumBMrPj5tBNiVXSMB2qxfKEHcT8Pwa1e2wAKRcptACTzjFtrX5uFexDf8uSNRojNpcY",
  "key38": "5LZmaFoSwWinHt6pbTtERgFSKNstGRpWHpchD11t9esqo8g2u9Yzmd2Xu1ykN9bcV5HBghUcg5tmk9n4JcmdixnZ",
  "key39": "3HHxVAyMznnf6cC2SyuZwRJa36SzFTpTGoHN5PEsvKkT2FYwb8NYHiLJe7dAcZA4YNPb4c5ZFCvfdwamn7wEVFQx"
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
