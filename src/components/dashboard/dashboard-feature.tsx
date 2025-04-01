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
    "43eLoxPQtgW4AhGk92Do8ssdQxCNejmxQYJVe7ZMF24NUWxSfhtdpwkTKwR6Zb8wGLQeqqfE9u3dvafKZ1mPn31T"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Kw1t4nQBBTSrYaQRZHU29w3JtWjxuXY9r58fwV3AQZG4sYDaKTMiGTe1V57jsWgfyRwHjqAihFVqzdzbUfjUN6A",
  "key1": "4jQKxcXeYhmPAxPe9xvs1M18aeT6K9P5TZeq3M3bBjWX5UDtG6GatBp29iuewf9rLWHx8x7yRwC3Lmv2DpnsCVM9",
  "key2": "5WYqNiZgjC4a6gNVeJCqmKQBbNTXryGET3H9RQKF1JSof6fXYpo1qEzGAhs64UABGWfL47jb6uXUFwx74hS2Wng9",
  "key3": "4tLCgNxHnWrdaxzrJ7KkMDcEsjjit6sn4qRq4Y2EpRRxzExAnHejJ9F3k69W2ge9gBPbvHMnaRGUfw7aLpHvsPhp",
  "key4": "x2yW7hm5efDXMmF31VrfEZ6aqKVk85kZr9CVjJP4xDNCzRjVAArnF4PeUR2D1GykoSsc2zZdiCWMGEpE3rDB4fy",
  "key5": "3PEDtXcHgTg28W6ZNdVbniX6wH1pURdRNTULJZqWkgLsLJN6MuBWbnQuqyTo9oL8LAU5YCz1D44N6UK9dBFxr1Ku",
  "key6": "32yCYvfm9Gy69x53hghMSUkJgt8mz4TTnLTVVyDaCpeR5uZgK3yjf8eNZXYwdHpukuJRX1RtwVQqHmyPqbh6u3Vc",
  "key7": "4L8gnCt6ES6fabhJL8UvkffHmjsbLaNfvYYchemBp5iTLA14eZ671BD5Vyz1Nh9t7o7zg7WjX78ycoYFhyJ2VSDP",
  "key8": "5MqAr5RGznJqrgpQTjiWbAN8HRkwBfSdtYm14NoMKxJZaeCW3yDxX5PLM5vbwm6FeqTJXP81uWJkBQTPA1XRbFQd",
  "key9": "2w5oXTVLtKdYM4DxVWgUE1W6tBZ1QaeegZ3YC7qiXSbQKhXXDUpEg8sS8aeMEw7bsHb6pqbWtXubAzrwEafTwQrm",
  "key10": "4QdrvKtcsdrhWCtjcWpVL9eV7RaGggSpggjpWaXpj853qi9mXKYnW8tZFYD2BbZbfNmmVYBP9WFC175oD3YbLhNt",
  "key11": "2csLRTpxobjvENDQq6mMKmv9Qg9Km1JRT91EJBPMioTcMG1FBieRSYfh18MbKXkR7t1bPDg2y32S9y9cUKMU1K4U",
  "key12": "5q6TnRJe9hDXzFnbwPqyeFw139SyBzn43kRkYqBtLJmLFfbBWwS3ZJK57v2E1YMx6fUMMRqRgCyFiApoqfFqdpXT",
  "key13": "4ZBVuNaTXjtKBc7hQTnVEgtEWyU1dqy1KLfK2ye5iNUTFFsaxAkrBKHRpiqr26K7gdazvncMrQWHumuq7nzZ9ers",
  "key14": "57k7rzAZXseUmTL4RuA1kUSjK2PHvbKJnZyNESnHBM9VezT4hCxwy8bBcogoXDrbwPCpmmaf24dTiUXHNyoLo934",
  "key15": "3g1bsBwh44CLjPVD1nFqcxRcVihyXH4mHyVxJeTpy2NS4L1Z7bUNBC9kQxwU1jrxcKHpGHCsDPcYWoDtC4vjfpZy",
  "key16": "5SHrNuxHzwQdbNdm3qD4SzLk4GTatCaxLHGVGDbwSWGFa8thpjW5X7PV2wHnf8tMbbdTiqfmtfbRSrhzyiWuer3F",
  "key17": "5NoGe6i1UGZPw5PWswj3bRqdxztYort2xS7ni9ejcs4WUdzf6MrpRj9KWjeWUtpZMUH9erfx6dukWfvE17mFkJJg",
  "key18": "pdRpj8u9UDRRDkYvQLqu2cvXhTg7BCVD9rLmUZmQPmsGzpeuBTheFsk3ZKmMXNJDRKatB5GedXwqWDKf9o4jDCg",
  "key19": "3VhUiFCRqg6XmFk5RwUXhNTTqpD7Y9vcJYctCbsmLgeWZok6w9Zw1QgDrZuyKBqL69WcTpdGHqtbvTnsxnMdNpwE",
  "key20": "5j6pTiPQvwozadEKxKQshFvqn5Ujmu3NmwtyM7AhyMDAGvg4mDfYMhkC8GSWja4iqa74YxsK8ZJe5GjEfgPov6uY",
  "key21": "5MJSoKMrkMgW8CL346zoWubGbguuKaGdRoe8nnA2vijV53SfztX3nPK1deSHsK1mNCmpGXWe1ehCpBt8Hpb31eGX",
  "key22": "2hyazyxzuLmioxKQRTcAiYbgtLtCULVRCBt87tw4w53sN8T9wrTeFPaKx5rhor3SjLBR7uyM9WJFHzUVbYficHvH",
  "key23": "2bsm149A9BfUFsnLQ9FQXVCURUqcU4a1hZsjJg7EeygYfS2T3pV1aBNiHjMDUeUgGidVxtYfVujqvNBh299sxroE",
  "key24": "29H4t1j5X3SG4AVyFcoYEGgsXhKDMwwSfCtxzUHiXnjAQfeSdqwjRcAfKV3jhmo7LEyFDWz7RMftPxGdhqhjKA4P",
  "key25": "2kgWW8o1kvkykLBKEc7ocf9Ttj1wrZgBSi47DeXyfmAngVuiCYp67EEWCgDnTjQrYacTe1vyenqorYw2TetYnS2a",
  "key26": "5X719NwvQxqfVvrnr3wCy5T8vmA1oDwhMEY1ZtoqTW8v1uLdHJNp7JyZ6oA6kgSaVYdJ1cgzqrnNUVpf8uZbXTvY",
  "key27": "HViuknnxTFy3Aj4p8NqKDL8myDoncCBvoWxizELnSMZKCSUyZGFa4WceXUntMBmSWCCNdQg3Vf1Nub5Jux4c5Vz",
  "key28": "3zxshorRzJ5GyFycttFx3oj5yhWfc3Wvnrfc8YUv3Mso5nPYVXGAoJFCYKLhDnKSKTx5tMWDKUR1Eted3G5tCZCp",
  "key29": "4wuaFc4icywCDQJz8zF7neT8jKia9DRaprTqJLgACDRszBLgPzc7q2frkb2AB1eCJgMRh4RovsB2He6Qrr49EKjp",
  "key30": "4AhTdJ2LLwyFmY46U6ht8KSx7TeCBNFi6atAEaD6pBw2SUjp9SE2PGjaoqHoDkipFMsSUe9WTsn5mbr6V8bcFkut",
  "key31": "4FvwhKvVZS85rURSP1XsKrdQtL79S22BMBmE5j64wuwHyqLqYkAe2hxALaopEAYYdzxhsmiW1L76n1Jq4kAS6iZL",
  "key32": "3jbfP4oAP4BbDzH3E1FntBcYa4dFQzExgSeE6h8PRdifgX2Sq3t4cLpPTmfixenDNGkp2mtXwkmCvX2AJZRgkpSC",
  "key33": "2TPZKhM4JiDDH3SpqdQBwAZyrnMGo8X34quqqAhgbJUvt1xi8tx3LQ4u8pmfKNegYQLf2eVKqDSMq82FPrqdEMGG",
  "key34": "TQu7j1UefuZW1bfDyCbujqYuVBBZx8TPQ8R7LUEA2vfoBo4tWuASbFmiR8oinDhRQ6cyT2EdMmYKHMdzYXX2NVz",
  "key35": "4cyXN8QcZWq6BDfBDWUePFneBuhXacrgR78S7T7DPDAGQpdTArtwL1eiLJdSYd2bkYTNt1TW8m35a686VoN5DbJS",
  "key36": "ecuPh6J366QyqGx2HFVn81RXL9zkXFp2RZiEUM6MNj6iKw7XMU49gsAeVVSDimFpW4wYqhw79jRc3VHWw3846wr",
  "key37": "2sAhmFnLUnpMGq9vRCSca4JPCYBwpZ3RPVKgVdq4VKEpkBR2gfCzS7h3ugkcvkDx6Sz4WNd11v6UaAmJUuNRm381",
  "key38": "3XG7c4WvhiWjj8hdiodRwxGEYhjCxmntxf4RLBXvXfeshRhJtGu5ioEgyZsfZ9UY1FoT7TAmud34i1d5n6SEBY3c",
  "key39": "5K1k2VWYBAijDmvkN8RAbJ2AfGmsnmQ5Qhu6dKzCxzTeoLDsEsVxF2jwzxt2hroV9q7CtrfRo44MELjraQEewmKE",
  "key40": "2f7CVoWUdRapfkxsyNF7WmTuRg67RXa36sizWkHkuPQxKJEApibKFXLzt9ibCZrzSNiyi1CdanYM1rfj6eHebuVW"
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
