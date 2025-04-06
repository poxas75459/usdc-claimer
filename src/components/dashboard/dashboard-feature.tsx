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
    "4qct75UGmWvVcN9YzRspfjQTd6Y29Ze8ygTSS8Sm3Lr6pgeP21jeBg1RNvTFCrrBVP19o56oGQDwj4B3hdd3LyRG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Pv9VT4nYfyoStHkGQewNkkQ6QnJmggeGErFjy8Z9gVrZVeoo1Rev2jzkoeEPsGfTHHHi8HTG585n2pqv5Gky6FM",
  "key1": "2WjTDVCB5sRVeAHSEfGm4Q7UZPXSPvwiskpD19wm9o2jstWEUw7UwwFpPuv9Qm7dpETr5MVQmsGMiM6R3SscQidb",
  "key2": "2JBqUVTDYyVjsiT3hLyAXu2S4joiUzHThaecRyGzmR5p1iNKetTnySM9c6syk1koAmcnLPYS1F5hzbSU4T5CW7n6",
  "key3": "3XGrQvx5BCHuunpZ8xRTdVFd9P9FQonMk2CVsbGW9USeUSUdV45BFY8eyX4BRTsCZAJ9shSPg8CAjXy9nN6QAfsS",
  "key4": "4wJ8Qsi4uZ8Sd4MxorRbSTFQSowJWUyth9Hhe5tq8tRHJBtSVSjfAozQ7xmkxZnuwsMh4Uw7HVekrCNcjGuMPWYZ",
  "key5": "4VqbjdTmouS3oiXo5orxK7iNkikPvBMaFUctnSJoDopDJdLvmvx6sNYGbu4AdDFxiJpzN9NnZPLifUn8eDTPJLVg",
  "key6": "3Cg72rdiJoSyupTsJhm8W4z73qXiX4S7JNtxL2iMrg3R751mUSjDVgiru1zshCY5pyguSm36QDzTrYHxTasoS56i",
  "key7": "4pX2KqCAm9KFSB7rrAxnc7Uzs7qSdVLtY85UUe2ohxystEeKp4Z1Erfi1nQeU2K73zYaZgPKMdpukpyHkxi9qKQY",
  "key8": "2hStr6YzdyYJkj84ZWW6d3bFC41vwTpA2XudTQzwdhu8kjYL2sByDoaDRBZyPpQMtUUCrcxoHJbWTJnP2PjsmDaJ",
  "key9": "5VGoqnBbVTM1Jceqeraee5eQJhKMHqkfZyJyVZo7byCwR78AcFtCj9GvuKp2donL3Dv7q4SmaSy8KRWE2W7APQwJ",
  "key10": "3Qamdyt2FmAWX9NiMjgqbt421VvqM2XEshHD6nNK4ySpTBKEEfAThuXxU7rC6gtXzUYE6XBt3zCBn1EJpFGgrYoB",
  "key11": "5FtTEjhU11zTuB7yhaw5rhDfDEeGeGZFmAVBEfxPhD8P6QmGKqyTwDSwjNf57jb8n15JNr8M75ZBRNoqT6aPgRrb",
  "key12": "3cLL6F2Mwev5WosXnUKsSpkGTymLX11tGVWPAWkCxZNjVfHu2KHM4dCNRThUmGqL6foLbcWyucSnPrH2w624hvVJ",
  "key13": "3ZUjQvbSiWWFgozwDWCAEd1yySqWzriKNAfR88EdoTHghhv3SAVNduXBLSzRX18Cx4uKVqF8Gu5xdyYhPQbZztEp",
  "key14": "tcFByxjaqmr4zBTRKSUnb347QP7qkscvFPwJePhfUgPA6S2HHLkPKCr5qjyjSiieZvnghRqfZr4sTyRww6aMnsv",
  "key15": "TWarLWvWjd5zK5ywu4vvHtbScUVJMbPpHJz2tXP7X8sJQdHSpWodjg9m5DMfGzca7Wj3sW44vkxJQn47AsXm9Zw",
  "key16": "GmvVUYgUhK2NfWwu8W98rZDdEAUXupkVThAZU7z6vANvCFP8YXoG8GZYLjEHcwugPLxF8puB2Tzo4HfacS2vpZM",
  "key17": "3V7J8wxYXKZsYpc9yT14GDEZvdLo9WY2JxNu2e2rDo1WXAthe3m3qPUQcAHNaMjVFvy9iKgw4kAXnLRBLkMF8wSk",
  "key18": "3t2MJ5DnUcW6tiiMB7TCLrfQpd2Xq7io4AnewnooS79T93kxda7H2DxH6E8Npp5d6usf2jakZqqaVNQ4EyyouNdc",
  "key19": "YoNuc7HnKsnzeZ2FmpqTfGsDY3FdHcNnEwgqES9jqdmTbkmZ3k3rdpwUJzSG3r8eC7wkPKmEtf6p5Yxie6oBVRr",
  "key20": "2ADB5D7PxGtWzc6FYYSraRWvmRDhzZKZdrfAcxJ3HnyU27Md32SG3Uu4oUHqJukRamgNipjJnnM6yqL9ZHDsTYVS",
  "key21": "2tKU1kJzmTi6cvbkZVjcovjUJqAiBS9cejLz5G7CnDFhhdVrhfyHrqwZD1CfCJoZZiTAwzag9vYkWVzbrVZyRioV",
  "key22": "2PdxDs2LHYxgbDiyTEnkBdMj5xSdSyr2FFZUapzN2W8GPsTVoqEfWk4DSa9qahDcprDeknr9a72hUuqExJCczjSQ",
  "key23": "2zQ4qbtsVdL4B8jXCt9WjBnYuTMqgLdB3hDpZrWWXoGXCkVEzLLsr8FfYiE1CLXecismhUpQsuxjEuMtnrbvUFcC",
  "key24": "xiVhfWZNftqtN4GHcfH13s3rkoXWxXFwBbfiWBv6pK5uPjzaFL7eoaARt5rPPb6f7tf6Q9c1Xu77we5nLB3jFck",
  "key25": "4GTqUc1oAjqD2EPsyvTKYuYYgjRtdNbBdU3ZScW1LzamwAsHCwFJ1sxNKsGgjiSp5aJFr4fsFVYU4B8zNbescjBY",
  "key26": "4o1MwWj6VMRTxUicCUxMQwMwSNRnWvwftzeHKyUUzc3ZQS4pLhxNuErX3pLLdyt7jByDdaYAcf8mjvsrK27G6xUr",
  "key27": "4dZakGqKWmsvydar1JXBP6v81ti9dcAwJHdCcP7x4Xuat6SWE8FXY2Wp1VdZBuEHeXcWF9wj1wmspKc2JpaQT1gT",
  "key28": "5wkY57c717VZzWaD2Mb3ocKBC8Y3svtW6swe82JgHRyPoKgGB5tH2cWmWh6GSnwnf3ZVd4mfXo92qGefQboXabde",
  "key29": "2VQR8Hv8d7uCKWJjgvpvZrBrkp4hGMiAob8M4R6HWUEHnD46aoiUPFgr7yMJ8QjUCRsEpbPTFxWSjmwoRcbbrq47",
  "key30": "32KETyrgHvHujZBrgK8dUcVuY8xwMGULNaHrbE4cbUmeZNaafHQmo63EfFNFTmJ1SLMPaaBfRsJnHuKBYGs8Uetb",
  "key31": "63Bv8dJxTjJWP4cpESACWFJ3dn8koj9XBGmJJiNsRXZzV3TiqWZdy5r346h4tG5rojx7MvUysBpNeCRcT5RSpHC8",
  "key32": "3TLMnMFjxMJw9ZMcg12QQxG6sZtQ8yw7kEvUDfun6Bx5FP84s8q7WidkZaGiCJTtwGKbRvg6xivfGbUNvk5cQEzt",
  "key33": "4WrXKcTMqFtq5RXt9o6gTRMHVVd8HEYnxtBKpSfo9BeStUwhsJak1sm84tEnrwMJWaN3d5ye6bRvx6GLUhT9aKZQ",
  "key34": "5HsBfvLDZ6yXFT6BN2nPTNCt15M1XqtvmcGGCW6wx9d3ijmiQiGBkgrBp3mHbENkJZ1yYLNb8iyrwTRwzAYLgpCB",
  "key35": "gDhoqZeeUrBGPNN2i1degwkC927BBhJKSApPTLJg37nRDwyqis9Z8RHzcnvYbdyYhS9HoXUvXpei7tThCsRLRcc",
  "key36": "63XNQdHjtW4dLRVnAJ9VadSHEgjTwcDgeFageQjsU65CCjCBB5Y7C4jnSrUjxNZ2P2pySbcvRf9byei9LSWk9XCU",
  "key37": "5diVNs3csmoJXKfXZ2CwjrVF1DhVtv7SjafmBmGk4FyT39NdaGPfxkwJFuF3kc9vj69RgQRFtCDzBXapHty8mACw",
  "key38": "2DnS6bWsw7u5MrL1WbhsTd4ddGg9M42GuK2ZRw8MQk4ux6q8C7cXiSBB8WPHiygPYBgf6FayfToYxProp2WQFyBf",
  "key39": "5XNLNyqVPyi398KDoyPT4WR4acHQic3WrDT6C9q5dy3HZDadxNEWDvHKrFDVx2kcsxm3t2A4wC7yAbpztf7FGXwh",
  "key40": "2iK6mwFRU3Xk7id9zMh7chJmjXeUSTYXL5dX1GzEgowbpneMm7vXnKfsWoGeKDsYWeVL5ExeyK3CUDB67Y9kUAMj",
  "key41": "4kMNLvppAE1ueqGYhJHL2s1GfACrgmnCCak2t8thH5zCohBHUpc8KKaujhp8eErW2BBydmg3Khy2C59QQAcCEDhn",
  "key42": "frrXrGtHQNMg6Y9RARLMaiSL3ssBdzLwi5Ksi1saHpULepZiW3jE21YrsxTB1o7nX43tsNUGsLi4Vz1soAoHy7a",
  "key43": "5dAsp4YXUisRFSBW4ShWGZrntTKV8UBY4TibaZgPkRj98MLHBugqkQq4h14NfBiSnGGMLTh6vHhtf8hFDBbp4rfC",
  "key44": "4aQRvZpp69oCvqRhGT5jUV91KydZ1hvNQpor3E9PZVwAgdGmBD3jYuxR6AEEQpuLU2sq7f47KKSFAg6vnoxSHLh2",
  "key45": "23hj5UnAvov6mcqbcukv9TGN8qkmTehn1dp2mSjQxwqqLyR81LE5cnehw7YuU7PBs1g2nmvN7mJnkptq3ueeoNBQ"
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
