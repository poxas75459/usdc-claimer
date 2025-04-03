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
    "3BZdQRXRyrE6WMFw3VRoCPqLEZcTRbaMLN66ep3Wzy8sxXk4u9M47qsEufuGrj9z6jAXv7ze8F467PZZUv7w98LZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3zwBybPQhSGdSbwHjws18habiFhpKL55QGr9CaDLGrJai5GmypPz59W5EEZZsLuVTQw4LXnf7oj18bGUAGJCdqFL",
  "key1": "29PQLWqHLKs9uje1zymbLRKz6NV4HpYU3n5yGwp2taLR1uDseLrBoomXuXsZs8MoR6fjUkoonPjkavBHiEUv1Xrz",
  "key2": "4rsNdrfV4VzRvpqyUjVpBbuyBzfzaJGDsXULj4xuUmH9KayNn9ZzdmmpU9ygEF4RKFC5chRZUqnwSx553XTH6bFP",
  "key3": "28w4YS1uQi7NAnwJXTQLzZxmF4fbnAEwd4t13gRh9RcwxC8FeYo8gBXcnM5SPa7A314MqTwrnTm9Nd7bRYeD1pTo",
  "key4": "6dZ6FFUsovHcsJFkLzhTFHCxTydUyajFPo4dafKrpRXBSg6dt272SRZkgTSbzNFhgsMatB3crkWaGDxXV12hAVc",
  "key5": "4Dp4VHAezxdcsWeN3gheFju7yLVBeebpSwQwXmMeUziB4SK3FGG7AkpV2dUFJJYpc67F6Pg4miUh8tG8BVT48Hcx",
  "key6": "5hyoo5B2kp4EFLTzxLFSEuEMuQUPCzkwAs1fCWawkvm6NpFnW4Wf9SCmxLw1TonWHvEV3YhAp7eM5R6BfxAwTYyH",
  "key7": "4tEgjmadPbV6JnEtUJH63ufvTRW4tR9ywS6gYL5g28yyC96QgjLLY2jVELYPdy87yuAgv3nu8Y1RH7VqUDPP3otR",
  "key8": "2PwvCuLnf1Vr737JXLB3ersMSSVbVKs4vFuHvjtmTGH87KPGjqpzBbQTgxzJGmQFnaFuSjkCrbSercyqDKhzTiEu",
  "key9": "24wyGPfE1EtNoTmJWCnXxqe3tWqPAFnpZkYoAe2WrErwPujztUjFhEYzsCNKozRXuKfB9Exg72CuRJFwjoAWYA2J",
  "key10": "2TpPwbayrLuMWzNsBXdNPbHXUrnK2vmZCg51xJTtSRq9L2ATxFhwqkunHh2huuX8GvET3HK1yitoWWXQc4e1J8y1",
  "key11": "2rGzg1Fs4fntfYNFHjTjn3LXgo9ipukvDkuafsmVxCVsZK22c3Eti5zA5mqJ3dsStW2cT7nugT8sWeyvMGYBF2oB",
  "key12": "3yD1aceDEZWz4pu9rceNrcMZRyBfyyCdDzUQpurcPSHpUZvnZus178Zayyf2Y6jbmiTxygcY6eKXMP7L4Pmf2MeV",
  "key13": "J26C8m1vFHXBRbuG2JRKJ549irNWwyx6Siegw5KZfUXr9SqTuVWYtN8s1juuTvSDPxArJ8kr355FzEozE7ShvPu",
  "key14": "3p54r6E6chZY8pXnJfrBhZBQx6MRjj8rZLG1MAjy3gc55QpZaaC2FMvU7Gd5Pro3RM4UZi2wrZfp1t9Ecet29x6C",
  "key15": "1TxqZGtFWYCujCi9yxJGWN7FkRTYmknfiFQu3H4yyyP49YZXzYi1ZLads7sUZviUocHv81R8JkRWGA7rnhUGcy8",
  "key16": "w6yxwEYFHe89mQhvoaAsKB2FhGzLeJ9tJN75L8m45sEkxrHEfmnJYNY2A6gzdt8THqHDgY2FtihjErfWhnxMmQv",
  "key17": "4xSRyT8j5wb21BoVTF2bsH5ScVHggU6DHQrBWrx9kMjH2Rnzqh4etgpaKLP9dGQ84bkfEjt9mGD6fdU7tm5YGmhe",
  "key18": "4swxZZdsJY6jHvFswcWgWyCQUw1xiTi1PZA6Mnmj67FedyYQswmiqJKx5Up7PNkEd5eHQkYv4zHXMhmuNSmukr2W",
  "key19": "2qPC6hF3tEeRjioty5adK7k1FvZjGutvrSxL2f23zAw748JwnSBNYVkdhBxHpJxzzgqajMzNwmGvnuzf4BBqZbeq",
  "key20": "5MxeWyb5cpikuMtH5LftcAufEMXrsFd5ZoUJvFUMSV4UQ3gc7yJQrYDv7nwJsrmMrMbKi8pjR3jqJvagpzuk1QwY",
  "key21": "SrFsXJzNXHfAhYkoHEPzmxMsvPmSfQB8i1gX9QvvcDVEzvohoD8vjvZ5KLpYynp7bwHSSxLcqxCGpk4sxEhpdqo",
  "key22": "3Gn4nfzgduJ6zkohpwenzyeh5W4C13wxG5CZ8mouFg4bskYrdn7KMdMNXXh1ZsrUG4dHUcs63aMdKiyvr8cBhhnX",
  "key23": "q3TJUBQvX2r1qKRnrF29g3fnVf12VdTcw1JiuyckhYQteVitKSzTco4d1jfxQRhPwcxDb2i5MivVdytkhoFrJ1j",
  "key24": "2434SJGEK5CkQdzsiDr81Q1YGh6i5C94wuW6eiFvF6dxNonmH8cmBJ6QfGGX59X9rR11J9nzcgaUQWVFbdn7k63d",
  "key25": "ma3APSW7K7cxZCguBzUSitZJKjvecokvTxV4hNBQeGq1x1pBjTNtsbbVdYURoP54TFU89KaVpHnubvHnXLLHDve",
  "key26": "EchwBx7rrZzoi78KgV86S4HJgBp47mhWm5a1awCETSh3dzPykaXDANHDmhBtGJ8CJmJqqWChPsi6jcUXmjz4z9Y",
  "key27": "3eNPwigP8CoWkdiMGQUuKq4fSk2i7fATLKNARGXRd7puokZqeoADRg9TzjqQL7LhK1zSvc4dqAEw8bDcuJN46xjC",
  "key28": "3P6EJMYSkKmEwsSF7C77tqAhh6QxVUAcSiiWKga8fiYB1edvNXHQ5PrQfWh3pFa7oZfovqmzWto13iEphatH9rCK",
  "key29": "rx3Ni35AJVK9zPAzd2ZYQzYNKXW5A9ozx9mA7Q6PSjiXkw3oxF61e7Xm49TVNak5im7mkTBYkA215yVS1rCiqoe",
  "key30": "sncRSJKpdYMTqsmSq6Do5PfLtrAewtyAJW7nNWumeEGiBdoJDogX4Dtx7AtHTGady8TnGUFBsb8KeUAUFoRoUFv"
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
