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
    "51uLNmtyJWkodJ9MXQtA5UpVP3yv37M4BCBmaaZfiWBC8orBPmaf657vSQ9kxGNmNiU7Qm5jqCJjiGU3NmPeyyfv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3QGGurUe5nQTYVEQn8rdjy17KeS74xTbVTWa6G96Mm6KY9y2fgZzT2na2qqVQfFhaTj5zGViCZp3pHSPdKhEJNWg",
  "key1": "5XXJCz9GpvsiKz6LRbKuY3cgs9i4eK7qv6MJBswcddgFPgGnxtTTobaJce51SfB1fWUcbERcUhrUWPYV7wd3qCES",
  "key2": "37yqixVoeWGpXsooqH2BdRkGNESRGWuBn9iMJr4y3wneGCpPUnGCbL4Yeu6tPpqB5ZCbToJeVMmATVUXVUeCmxtg",
  "key3": "2ZGnaAi6ifG5MTWxi9r2Jr6nYQ7z56eAMihDiphLMnrVEuQjVJmvB5oDmACtrQQ8KiKk9pEwcgj4a5CH1zqP9JMC",
  "key4": "uuFuAx2rQq4o6uTssYq8soV1wE6RH5EEAKP5XNH6rL4e1QnoELY8489HV5wgzUUoVJUVjA2x2iZLwWMnWq2UDTF",
  "key5": "5K6smyKwA91mgsA2oBdTpZLrXXXP5GH35twFzPeET8euosCq3usDqWrJDkH9EVHvE73aoRN5E1Mktj9yQuCZSttz",
  "key6": "SxxXo5uMbTTrtrqGKcfaiztUgb3Pvf87uZQBEDByqQmqUEuQNt7eYugzBY7at63FdjZd7GmZWdhVFoFuhfs4Qmk",
  "key7": "4tV5zERppDuuE2TeyNGniYC6SqHmKsfA2QLncqyzuhnfykSE1jBq2bYQgrei3p3b89gjoF4HjZw34V699u3ATVVE",
  "key8": "3TbR1wtSAdSwzPRKnK3SHKuDonsxfmezKcRvfqYieAP51NenUvgD64HVumQ5PdzFqNJv2H2QuUVCKWHbRWr5nUW9",
  "key9": "5zk2wk8jr5swR3dcZsYjoJCe7zMxiyU7Lf72dMiH8uLxaAdL3zMuDtmRMNQssaZumCHfqe5eXshu5L6No9erg3eY",
  "key10": "3kDH6EhQsoWmFEvYYsDSLfrBk8yYpVtJRv3VdRiST1PA2E31DK5boRVUUNbZzzrrDZmDqeA68jZ19SJ9Dmi51oo2",
  "key11": "4Mob2ogk88Ept2G9RtCi5DUafvgbd8ALxjHaTsLmctwFc171Z8bNsmhSzYqFffDBtt4o7AvBYESjzr9WvNSRYZ9g",
  "key12": "PfVmvqP7QDSX56zuovfUfTsJgmos1b94hT3GwER1HMoc99x7uv2cUfTWswDZ1sDB3JNXVoQSR5vNeypdf9mZp86",
  "key13": "52tiamcasuhDQkyBagQ46kb1Va1PvDho2E1N7816mqWFHNrofG1bV58EnRtHM7jWT2kiRfQehdHYMM2PbdPPf5YA",
  "key14": "xgugEi4ugE2LUizYjVEaE3CymyUoR5J3t7Rxy1qLM95JM4miZS3o77H2EuMxfycsNmbAGn79NkfoccFDZZwKyM3",
  "key15": "2iGgYS4kw8GWu3hL9qMTo4nCsiNNRuvZeqowUdhZ4qb4rr6UQRAQiYLgha91op1aMeHBY1CzQjwnLTEcN5VwRfBu",
  "key16": "2DfNdnAwEpznum3dU4UyRducUUP1dKbLoqhtqF56rhUEZCLoGD8rcN8MpMSpZPCdoNAv5R74BqvN8TATfr2L6Vim",
  "key17": "2rzMunai6yBihHQZsVi6L9maS5kFdurGQLgvoKn1mpj8xZZqjdXKhTFFaHLu4JgcGDtcrBnDjPS3hfScWiADzv5Z",
  "key18": "3J84DuVcUWfpKWnphAbWgjxcVKZjfZXAg7P7GSkaohNobvaTGd7mHRCpuqU6hFUxumK2hfDrvKM41V2THdWDSDxM",
  "key19": "5ypXZm1vQoebbH7techEkzsSXxMddXPucZSio5RVJj3b4gPxTFqq66yHDZBpN3iGoem9cQokvn8mPBt7ZMXQVB3y",
  "key20": "4Z4etB62ZpnZ67SNx7ksgFFrZEXjTttVEdtLVb7fg2nkMDUW4mr83wez92zsK3QsCuejGtbVpMimHe6Y41DMRyMF",
  "key21": "3fPL8gP7Q9cCZyEqmyj3b14YdrF7C794N8AuhSGrjV44iMq9iirYvuU7ViRm2vUi5NSfdgTLbNDdLeB3NYPHFUGN",
  "key22": "2HUHirawro6Dhsge9aQcQfFTkd1egp1vkbumdcvQr6sviBMtrstTrT49RS4LhnNeGCHongnwN5J5WsEMyjTeogGP",
  "key23": "5xKo1dvjw5faD4K7DFkEUhvbxXQwf1qP2ACuXMG92kCsCj4E7i3GXeZzrnss4m62CB37t7JkBusZcJ3gYv5cCfec",
  "key24": "wSaJudxES4G3PzhkgvoDNP1hgS3tcgCWjTp1KJb3ZK4gCBEMVaiYjV9BvPzBKNdVBf4sv4B2kMGSSZibmMW4ZzQ",
  "key25": "4tUT7yFfvKwCWZfWuMqBpsDtgbUHRQVnMRmJsTy1RbR69FVhHdnAtt7cT1xuQjY1p9P1Mx1Rfm8avDf6HLj6jsXN",
  "key26": "4mnhghwfi5ybM3BYnJzV27NFKeBj7FWsksrkg9X8TTTVMbQgj32vRfUFUXF1LZ7LpapZbD2d54vW8khEPrECbaif",
  "key27": "PmBTA1YFdPcyw8M4pVQiNVwhevCUgFvgDR1ZEzj2Yq7JMeb8gr6jeSFTxV32u6HvfVHB4uUpvN6MRY7Eo7jpBN3",
  "key28": "2aBsCnQgwoygxAaM3LRd6XTMSWeqXb3EyND61VqmBFitEPJu4niTYmQZbRcZ1jCun7L8KvT3D5AKv8w3W9kyJGbT",
  "key29": "31UUnBExZePKqt412WZxdftohQHbtr2FtLUD1ZUeNE7Qf2zk5rqvLvE2FU3q6rcaWSnJ5quoNE1yUEAhNocSV8tB",
  "key30": "4swwDUYHiD8XTtAr2tmBhowKDQHYgpn5XX6NC1GPT5iDXiAApYHWJs7Jk21dj97ZjjerJ1oQeWuH8x4cUzpj1cnL"
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
