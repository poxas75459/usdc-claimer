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
    "4ZaKY1L8XHGgxzxHij7cp3TgYfnxNMqsdaCvSfk4g9u9diQF9zEoPgPUEPg8fbkPjz77LkFU8Jf3S6Ye7TaaeubT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4tCH9756HbapMmEfZXSH2EnZhdCA7Bqnv3bHzApEFapMdoJSxDUjnnZ2JFzXd7tfDrSzmgJ4EyMoGBY2cbne6it2",
  "key1": "gjtY6pDJAvHnQgwCTQZv4DQk3S1ZXis75nBixYZ8PdkBtbDf6aWaMtTXX4EHeAfFnYo9z8YT6v4wBGxHNd6N7dA",
  "key2": "4nqhLinp4C36LG1uH6rEK7vCkA2VmTS9VgUanBmRi1Wg4BQxELPtDvJpPGgJUBoysvRDHxTzfa53yVcBeNNRqw81",
  "key3": "5FF7Ejo7gW49vhizJ7SDUQsFgi5PnNvegZvYiY32Zqa7ZVp8c5Kf8Sm3q4SrMP6oQNtHHgcFJmPS5uJadgErE4Vh",
  "key4": "5RErJDLFhQAd1CmoLbv4zLoWyY79SmwqRCM4yZyxsFnah8nseB35QdESPjEo7kvwKPhdMyXEN454QCTUxW9WcSZp",
  "key5": "5QtSoEQKwqWrKYLHRwBfJi9iY87BG6DAeWP6dnJNyVsn1TZuBYTQjG5G3ResGYEUXuqDwB8XxnUwKQ3y6n5PWLsH",
  "key6": "24EQRUfT6HKURmTD7z5ATAbCDCQaoH4jdhCBuG6z14M16oBn45HPp3pmza8YHs9xCUgQNFSHMnmjokpeLcuE5HUC",
  "key7": "USD6mHuG6yGtSbyv5ij28ezLGhyDes6jGEAXJYfozb6HQnRADRjdHCuRMzHHrXH6PC7QDCcF8m3AaZgrbDJiFKy",
  "key8": "2mixqF7MUp2QeH1i1syh3tbTEeMXMpaNn26zVhhgYZQfGdWbSiv1buwzuWhwopi8okzrpR4aTfPQim1XBtEcjj7p",
  "key9": "4TfkBswn45NZgF5wyGx6C6ozYj3KNYAgSkM9QFpz6QxH5fSSYom3fiCxvyqkZsep5dKbMP5DNfmTpui1naETbCRT",
  "key10": "5DB8BDHovChmNpcXEqtRAoL16MHcQX68HQ3gEWZaT5hLHSU2TmB2PGXttsLXjLNckaj1LuTFtRcF2pYq83KkqWdC",
  "key11": "5bzpyRLUUguthacsGybmW2iVFMEHBtj6ooJ7Rj1S1QELmAaALRwwdkmS5UWK26dkQfqgbMnZFyD866sr6qvT2Miu",
  "key12": "3B3zqTbAL8W9wVX6au3SHAtYdCcGUzHcE5UKBcRdtiTaTWbu7Dmc5sAmSvjqgensuSRw5D75SXL1A9kMnjdHxEKd",
  "key13": "3dxp1cxait1FxDLb798LNnqNHSPFaR6Cc9K7d7DKSzUvqhqzqKBhd4aJ19T3ZyaHvgDbcmxGhqpE7nzQ4S1i34LR",
  "key14": "43uLFTC9Nf48mCoFjGCaQ1XDkLwjD3fx928HWSrAhg6peUVgwAP8GUC8TwLqLV9GirLQWGnNLHTf5srz8bNqqA1F",
  "key15": "3hmPsSzvmmUgHwcYQod5x29u9kpMsa6he8WxVLafge3BFF2FBL3fa2Rp5eYiVP14WqAZ3EVqGDesiJfLyRQZWk82",
  "key16": "4TPKys7ZGhFvfhoQRmVga1e3Jpyo26wrLGyb5fwSe45UPtb8w9PHjJMTzNqwtBZQ2QRu7YwrryA4fTiuSHB1LPj8",
  "key17": "4oUCu3QQXEkLJ2ekQvuSBpp7Rx3tnp6R7MioZWFL8dFxrfBLcx3MTU2eMf9oL8RXgzDmG5f4evf86NNnoTn71i52",
  "key18": "5DQtZXf5ashev3AKAYn24KbWUt4VQtYKudWmDg9vG1s2yG3ZGxrsocEozkhzSd9gPqAsYzQS5Bqy7viiE3ZEBZvv",
  "key19": "xByUiEwMmLAxdvdaMNnqDhFUxvb2y3ooQJPqGLDRUopWCRrLtSUbwWtHw1k6jGZJzbMDCGEW6Y3DcuF43ssHz9r",
  "key20": "yRaUTq12MwTL9suRY2xFzmWrco1Tx9KzLMwzFbeprYWVuVVUK9JYPGvDgmZ9D5uwLpgZ37KSGbqL9vtcCrr7SW9",
  "key21": "5m8BBZ1ouXQGSi3gpD8gb41s3astymiQs5dx4GczaHq24XvVtnqby1uBqyFbEKeM5REWzCxJFEPK3bRLYcC9cHsS",
  "key22": "3EbVhYoxi97aP1Um2NCEA9ffkACoosF3m8ZpaLE31ENt8f5cMj39uL9uEFpbScoTM7Qh4s78aStseLzJvQ3cd4GS",
  "key23": "676S8mxzv3SpMymVfppgJLzbqmuzdDsiPaXD52MVz5n9CavCoQDKqDXJM3bxszhm4pPrmp858mHqo3XBBDJrkQJk",
  "key24": "26qoL6e8wbUqyoH4C8S45RDDU4rEu2W8TiJn23XCwv7RhZ6Qrpth3jFf7Dwz75MkjT9trotgdoeGxeXiXhYT4qjv",
  "key25": "5LQZmQTqUMTcZaJWkj6PZuNWPLyBtazRytx1qQ9ig4kiyf3VLTcHt6BUrRCRHhW86QNQyXTKdx1F97DmgWTA5UU2",
  "key26": "2Sg2gGRhp21LFgAYYt6HKLJT3Kwqr9ZfV3Zs7Kd3Qcz6DiFBmyxvTx7TB24FqSYWeGWw7s9Q4pYHzsx6xwTEbqpw",
  "key27": "2KVd76mTqjyAxDvjJ6Lss3texwTy9gwAKM7HBkEBUqz4eYq2nh3dKDoWx14ZDVDTApcGopDqhE7SWeszm7oMXwRT",
  "key28": "32KfZwW1cSTXYHMNQpAk1hY4HKkXaSg3MAQv1cDwo6AVMCf6Bqo1eXGMubdFGns8Z2jsjYp62N1z9qUtKCcjj8y1",
  "key29": "5myTLEzGKUi15DxDooR6yPVA63F6mQswTc2Y3HtepTStFMUEYYuF27PzkaszLMCXN6dnjUEtjaxPy3B1Noit2Y12",
  "key30": "62ikCnn4jjtc19WrFtsVtRJhSJmrfYFJRYHrR8KV4dsKSpM6GXL1CGmbrafiPhNji5M4HKeuoYbQtsRe5ZoQa4Ez",
  "key31": "48Y5BeETwCccv7sEWpsVNjjNX4BmyDZxPnaJkM2aARRRrR3ZK7upnQ5EJuhnPKGFaprLsKFf1XVrXJK94K1oTAaf"
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
