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
    "22EziSgbxg2iu25H2tc8zFMr3cQ2MgG6Gq6MYh6shU38xqQUueNc2Qxpd1UGTFjyY6wMwTjQLgDCg4WfHBmoMeef"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5aDwWRn9jQkAeDRThvSrF3tLfQ17pD3fp8Rhcgz4sX8qRMvFGD2yeraBtS6zYEXDUR3oQmGiU36DQiLkmrA4Em2M",
  "key1": "2CyukjRp4TRRqWwziLrSEe8DjgX9YYxMhAYU6283pJWiySfbu8RitA2hhk1dMhafBcngvGNFJ661usCXU64NoV8W",
  "key2": "3RzA85X4P7w4S6ppUcuxs8uc7CsjYK2z43vCmBiEWtFHXQmWFinnDzHT4F9gsNuoymBKAYQdA559RQYQAWdCeJkj",
  "key3": "2dvncgFpGy6i6whQ8FzdmNZZ2Cu2WNToSNorR3jzNdg3jXWWWUrhMaMBZ4XMuKmECe95zskah7kn1kEiVe89Etbj",
  "key4": "3RJN3WSLBPFc6rvriNxLaJpWVp9GBHrSzFBrqgZbMd54eh4t2FjKF9q4X8GU9S15j8grTyb6GXhBBLfaQGzJvrum",
  "key5": "5Y8JBMhRQ5RARdbFZzSz7DBFEuNhR79QFqcZG1nKkw64sDq3ZfrYuzPbkRYCzMhdmw5kmuJD7MCDanxDYi8GLQHB",
  "key6": "5YpPa2gmHFtfZBNyhKWFDCWxeWXrsst1siBLMwR3q4MiTUnAq3g79TAJ6KAGTeyzhG92BXpyb1oCgqs1Bo5VYBSb",
  "key7": "36HiYsGSYbyNdgKXSLD2ZpvPEK5Lv6u4NJmj9NhquydBnrH5ujSjVBd7gJYUhLhqYdDfnjepe3wNYfc8QfcL1Cq3",
  "key8": "5H4zt1dmTuNAPeJzwx81vV2BYhWph66XM1Tbu5FKF64gxc9hqbXxrLvkc1yQYJmezjquwndt8v7FRRh4hpGkGFpn",
  "key9": "2JqA5BjPpiPTrgUGrJXY3rS9L75RJ2L5Lby5YCLeAeLhrb5PT4tvASEVKT9cb2qFLpa2UqRvaLED1smhLkeLhWb3",
  "key10": "4AgBBnED9ApTRT1jg3qhKZ1DqdTYz8fKz6TsJJ5X7C8f4PYAziy5Wn3X5UsPY3J8A8KTh1zJK28njs9T6ueLR1mX",
  "key11": "5Q5aexi949S5tDABCgHgv7vCLSosubnGgjMFKn8UrKr66UqDXbx6DSeFW17ZvqnBazWTs3hYTmGJ81pTRVzTAj33",
  "key12": "3zCMH9N7n7rTmHDzktTSfhfVULfkqJoo4v1WbmUuTzKdB6uzHMyXxqfvbRqKNyagVxtmZYfrqgNmXqK26ij8b95Z",
  "key13": "4ATageXjfefVdj8voF4iyJyUB9M9eUzCseiszcAL1n47V9VYmxdVbvPYRf1Rq8zikp5uwz8QpWP1QuG9GfjrBo3P",
  "key14": "5KDDyu5UwhQfrgrqZahrcK2C1kngD2jYNBKx5XKHe7RQDTC7vK4wkxaL4yunHjZPYBmC4C2HV8agGzAcDfkNVwMx",
  "key15": "63tEeFrRdJvi6JhAA3tDhGwcwesL9vpmhBz9kLvujy1myiSbpmSqMauh6yu1YeYM5yHRs5ZsUPc98soWNi95mQkz",
  "key16": "i4JNEC3vpNrsuQi33UTyR4yCCaobZo9L2wvuh6vEkkAmzLZEzyrnX7eyVyN2EGDvb35BqqdKXfciGDGZezn3mo1",
  "key17": "3QUHbWqfNKhYFNRCnc1fbNLEzN9VLzPL8H65zsQp4Bev3s5sAHw7TmaRaTd4z7goJe1TBSd8nL1Y7dxwHAZ2ndkS",
  "key18": "2BVpVfVgkmmct6PwQvfmCVmaD6CKrNW4RHEbj2NSuNqpwNe7BazmcHMP5Vm9F4QfLyiCdTktm5ozB6EQ97RN9tKs",
  "key19": "4K1F1yfiAJMtvFNCHdT7kSZnNFdH6VRdfQzJFF6LigsCFec5kCWrZT1UAL1AAdvrA5stnaLFfoSfu3pismZQ5v8J",
  "key20": "C89FMacM5ZtJjCGKpyXBooB8caM6Cg1Hv7hRPFw9eZpE6LLsJiiqBKpj3eUQsXeugdxeeY4hNa4BkbvAg2mVx7S",
  "key21": "4TgTr6Zb2XcbC9EAxUmp88cji6EGu3Dde5KZo4ieca1giHsMZdbXnTZUpzjzf4eDMmrkUndrDZyaNAyBVEpmWrgp",
  "key22": "4PrYiuBbag481uooFWLsPgiqw3C2jJbXcWEz391uik48BL3N8QpDWHgxqzgRGs4tFU1BPr33EN4NmSxQpd1rWR1o",
  "key23": "2CUPMyfht5wA6Y762XP2cfghKkwLWbHrAMj9kvazj9WDLvs1EsKLyRiDBaUgRuKSBZ6CmHx7Zqb4JS54Hm8GWKZP",
  "key24": "HGKsdYdz91yuUwQHxtCkU78XHu6nyS6nYqnRWHKfSvzMJdbEsN2NH2sypYSAigdXESU7E61DkQQCjrq7GUz9tua",
  "key25": "a2rThhsYd9rnGKFfDRm2K8GGQ7x3geg6YoJ527Bm5KsZG3k8pVwT17BmDix1EHCFGKBw31pHgxPthFuFcr66mB5",
  "key26": "3UDzKiHf3YypHqesntaFmDqYBBfK5BL2yifySRj13rx5nVBKhVV2e4BxhLsqfghgMwDnEYP1CHQyCyTDadGoX8hc",
  "key27": "5tR6yQjtobvoGGWSXGUUBZC9aatHvk7nJXoyc8u6g1t51UcYVEbGKetGmGqkLKEoKhLuiXdv3pyH7aW1MPZZ2P5k",
  "key28": "5e9dyEaR78FA79K5a7nwG364RN5JKxVUZS5hqsVHHeXCkZEfXAy1aWFF3QmZihEi59RCTQpcFEtyoUfz1PRpZ8FF",
  "key29": "ihDqpwSkqVKH1AZiMkHJSH183EgJuCATWmtghHnUKr8yfiwiCcxFbZgUNQibznA1WViRoXezodigf4iYG2QKqzf",
  "key30": "vcSumytejx8m9THEt8T5wEpy8vqNg17Ji2HChgkcLZVkJymLdizhvXYjdCxnAZJv8zrssNRwad4w5sbWAYwjQpU",
  "key31": "34jKQrvi1gzYdJGHrxTLY7nKgJuUFYpYxxhCVJTPiRgcTr9cEfEwY9hSD8pCVoZz85239Sm6QuPAzshDpsfe7RDY",
  "key32": "2ZxPRyssqD6M8AxwtBSgVbNnaKnLNRPqmdiJyan36gwr4GmNxyC3gbdfNfKnyikgLWaMbGWaBPW4tpbkZAH9MoEm",
  "key33": "5d882voTYGvuJXqbgXsedki279NeACKHXpjsXcHeRV72aApZS5fKoUzB6KFvvz2o4t88ZFAiwoHx9mEh4DADYaFL",
  "key34": "2u5VSrDbLaCRg8aCEjwePNBoGCiDHuckrVvz68wwTvVpJELKmrQvYBs2CvTP1fgCJegPQaKcrjM9YZYG6mwWf62C",
  "key35": "2dsZbak9hSSKUNieBMPDTv1ArrCDHqDpoTsHuhMMM9zTGBVebCBqn6iJnbZMxqNARzr1nhrDy9TMA7S7aZGVfrhx",
  "key36": "8xHcGfnKcG52r5Fa5aoeZ9YBu6wDaBCbzNvGrcv8jqPffs7faRwtMLAn78FEhHMy5isRrnWaKW8wxmbqKQic1NE"
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
