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
    "FoQCB9tFZcT2C1Hiygjhac9d6aHb3wogZ3uSUn682LomMMLVmmpKDWL98rouNnGT4MfiWV83mk6m7uefJsY1JMe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4C3SZHLAYaszTmJQmpQES6LGP75hSHut6N6umEJL7BSupu2RN5rauxUv11XJDE724FtZPNPaWfBYPxFMPpnDwmpH",
  "key1": "5M475KZn5xdRFw5M9xzxRTPhCHE6hLEvjs4KkwWqXL9XE1cr73wFoTPzBrKbEbnhv1K9sJ58d1635yZZwyVaWmGQ",
  "key2": "3a3BWpVzd71voj6YDSnHHq9Kfe32cyy4G1qgKMwfjbiTQXYwzodbEXM6rKx27DZjzyrmzyxYeLvff1ZBvAEanW6c",
  "key3": "2PFPknEEoCVdM8ZvwfecvLYDyByDbT8LjNhCbodigs1QDLDa6A7r8VmFfvFd56LMWbtEWUGA65FADkr8pVYdaarm",
  "key4": "4adhHDssEdbc43wbX18bf1ujeYzq3u4Y6JjE6ZanepPCMNqdpKju7gV94eU4Jr6HP75pvu3TxEcKiBRJWzEz8Hbi",
  "key5": "25FXzLkdkrqxg2An1erRg79JQ71GqFDnhqFx33MN2QCwagnDdoutBDEaqfVCMy9e1fisFo5acsE11S3prChLZVEb",
  "key6": "213DSq3jYANADDbAPqVUmtGYVpLjYR8TivhSCmfgKZhpdZNCZBnHiKTFigyoNUUVJTzcbSHsBaYN6owqe5cYUBSn",
  "key7": "43pCETAmXrLUbP3mpFqnLDYtHpRrJWCc1yNJB7nkwH8duX6VLWDv6NXQKmR7Z7s633rwAhMBnBvAMnJ2u6KMFM8Y",
  "key8": "4oY11m9XhSp6yjiK2842xALWYMoTXYFTvXybS2TsrafodHSzykBF8fAGasfvSrW9i1qfneiP3wSJuG8SSL3iQuMW",
  "key9": "5viBV33ocDAKqqYQThMzhCR8yLZZgRD3x2tHSesb3YXqkebybA423P9TAGPgiigaVcLpLvsxyniVg9T8KecvxxKx",
  "key10": "3xTY6ZjxmUDBaihHBkU5NDd27zCbFmqk897QruEYiRVHn4rM1f1TVGQKrvrEQayemgaaruFUcsRriLyRtg16hSye",
  "key11": "xUYcxfZdVVr3dnD7gooftgnCDmAG6Z9ATK1R3gj5XArNHHr9KpWG7oy4WnC6eT5tsfT3XWtgTEheMjHcXc7fDRS",
  "key12": "2HBTvHW2U98eVxcawgkdLGJfSXhY1pUScdaQZKVBJLLMgTHTaFiDc2pXwD59j53Xj9iHgPLdmfj9WwAqHBxPdBdc",
  "key13": "3BYYJwEsT1ZjxWDgMMQb7RMBpXmJtCvvKAcB9uxg3PdDjBNjFPVRSLnGkwEWnfJrMq2EpcjvknQuUprwDJRsKyax",
  "key14": "4Rh7dZuS2g58hm3JRM9bwD6nVf4h3ZRhqHe2zdrQuDZifnvC1gj6UjWySJFLWKSx3WDMU9oFW4RqqNxnnb9Zzsc2",
  "key15": "3mtMUbrBUZiq8Ytd5jtrh8G1SNr35mQHQLK2NdQy6kSqq7DXhcX9ozDJLZgAuwHLEvfUw3PRvmAmM1ugNWJTuCmz",
  "key16": "4VpEFGS5A2qLQPRFh6yCpn9rT2bymG2fnUe8enxhhrUaR7mBGdZw2WPD71wHHur2nX5aCoe9FKZZUNKgJvnUCano",
  "key17": "3KrYNFMiSVHSrcVmJP99zRy7dLAUQvvpY6Jz12W5Ns7ThD7muHqsMD3rwveHtz9zgDQ5ctCeChWo9oiZHCU6EZ4u",
  "key18": "nGsBKCfbJXr8RGuzhSruUT5PGrqCXdqFGgVzY1Dgmg3QJj9yzwg67Kh9bBcD4TeEWDsxTFX1958TnY1ExoD1p2s",
  "key19": "QoRV1tLMuQNeLA88vSXSG93tV2bA4CE2QJkarGhh6b6UMQEXBcBmZYqDJDgPrbGukFnRJiptovP5vU1ruwX8xZp",
  "key20": "5SVW6k6WFsWwyr43hBJwWxVTrnwEPtPtkg6eBVMxJVgbHvtyEm4xfB8PJoA5GSu4SDbk9rsztFSvu8xMUJd4QfSC",
  "key21": "61kWtEGSu4whvDTaXvn6cZTzPEPGbHKabcGoJxv8CAD7GZ7VpWgBqdkqYY7huNVX6ZeGWBFM6H6mVSKzbZxbddbZ",
  "key22": "3yZ3mNrhqMboyABoJypqab22zVJUp2hPW2oZcvZ9ehq2sYnNtK85TBWSiDYvtNpEknKxYStoksujotu9avgCW2wT",
  "key23": "44fgB1wYdCnv4ScJdETdWKCXg96KmbmatxyHEyjFZBRERPktMRmvSXP6eN9xm3CHTyojg1vbqiDyt9PeF89sUbjC",
  "key24": "3e6x9KqrkKAPmUGLKbFWLzC7Rh7UBjTbqHMfKmovgVHkAAtgDHePqU4qNfN45ZhFthcAteURXzEGrnRQFYDQomNL",
  "key25": "3wq1be2KqbcByVVSzdSywMm1L3tEm8MDGvGgdhP3hsyc6G9RNd2ifc2rrgZBAkkD5ufLqzEf5rTvPfnV4xuEmH7A",
  "key26": "4rZpcdCTfT2kH3Xt2FAqV6sToMxPkKGwX2RR8jFSBAyMHkwEssZQktRDwNdnMTSt12GdrdiiHJqSqSJpMw2JeDMa",
  "key27": "46fTssVFWRchBHWXMqH8qy9Db7ua4tigcGgAwAWm664zUziAEfpsFHBQ1vyWJ2gRPJDU11ZbHbkucEGwiY8ktFRW",
  "key28": "3wkHySyLvuPMxaCirfQkJWeMWwAXHyZkWvZBpTcoLy3ZZ6PRo4kQxPWnqzzgwAqipYyRaHxebRSrQECQLCTcBG6u",
  "key29": "hiQC2ECt3ApR6GJevvNRfjPfv9zm4Qvirgpvv8tTSagfSeBDq3Q8kDunxtgpA5Jkw6gou7A3t2kxFcKEVQYXic9",
  "key30": "3iHQtTS9VcHjGQytbCcyh2hPcWgxxKvSkpgNmtE57SHaZM9t8Bgvnzssq1ePLTvLy1kP8bK2AU7uwSgQkcm1TDLW",
  "key31": "5XZeioJfxyRiPvEQQz4FSUZkd5JvGez1korkFkL86iLrTMZCfkcgJd6YQ7wMcCULXHfX5GohMgp8nqo7Ssq6u8S3",
  "key32": "65s8JRsw1ZXMNDcCx6cXaQGcu6TwhNG51HDwSDNBSLzXVWn5ggQrsuMi2dfVgf3BmDAyMwdcdkk2B9MmYDy2LV3t",
  "key33": "V29iVVUgKMCj2ahenWjjiQoiUFJhjAnQazyLnqEEwaDPGdJ83RRjribtBPRyddjdaKT6skp3C5nNocEsZswMgsS",
  "key34": "2HxyQmeV6MM8VcxYfQdab1ZBB3ZkqoKdCGt6BoNBds5MGYua6EV7YJgyre6Hj6Dpjx9hNaQKutHJBwDZaYYBk4db",
  "key35": "2aMERNnGcZYNX8toiddD1Prmu9LBSo2pHSxummkAyijoisRncRnFEQhK3iSUirLKfMMwvMaUqt1QevZyBm7EWG1k",
  "key36": "3rAN2UQ1L6Dj1Mjj3Go1m2pYWSmRCUZFoCL9FsT3iRV7bhaWfrhY7Jey4hLpghspcQVzaHtRt7xT6UT8jai2GaRT",
  "key37": "2RxBv46GcPoEDmwRpH5pdrBr1knt3qEvEa6vGy4ZNDpuqh3yeXF3fDvNfZda4f3SdJzaRpr8Uf8KtmHC9CRkmUye",
  "key38": "57FgHPdC5gzDX3mXCu3JZnPoSD99eFoB2Gi8WMvZdNSui2QUNVuUN2C9stBTRnnWZPixUcppQ69hXqvMNwaM5BcY",
  "key39": "2sexa96DWk8LWU1z8Pj2EzZkX6U7Yyo9JhtQ6JKuFTr4BEfaEQoichdmdofTn7mC7s84RVuubSrRXGT7ZGXeptUX",
  "key40": "4giSfjh8iPfrgBVscKNFxdKkvnXrRFRL7ajzhFeDRztLULQoccHeaQ242dAqUAupcsBKGvEn6gLn1C1HxC8thhNb",
  "key41": "4oFVWBreM9C1ak9p5jMewBQXd4Guw7zHNhHYkdyiuaewfauLt25UHrvXqc4VJPYWSvoe6YBxhBF2zzBbYBxejhL6",
  "key42": "4NsKCavqQ9gmpKhLiRZZtUqFyoeiZGNSt6CHDjrMGsGUQuGqJgZ1w5Rg3i686u9XfBYX6aVP6F6XAxoqAjVpo1As",
  "key43": "2PbRzsEHYfkEZ7gDvwb35kt3E5ecjJqoaH7pvrsU6w9DS3rV3sKDb4rBFfmQkDMQ7F2GEuTfTqoUiHGG2PgTVk2F",
  "key44": "2HeCU2nYniPwqX5h46qCBCgWE6FvpACHC4P3jJpNossFkWQCgDYS3b1iKdC4VQWvcr66rL9xKjo73ZFT7X4jm8y2",
  "key45": "3GenUav9d5DgABUBgitk16bFLHt7Q6331SbryJ6hzZmYcmVJoqeNPCTKMxXwcEPE6fAEkpTS6A8FuaPteAegfdvN",
  "key46": "5znVNSnwj9Snc6JJ6yjcC7sBnRkN3bES268M7CVs5QGckqy9tkYNbyfUVQkxPYWzYAuHbHAE9nLsP5Vf6kqeFgkd",
  "key47": "51CbtvrEx1yMP7tJJD9SRW5wnhEpArr6V3Uh6moaHfWsBosBPcHQsjrUxfZSmKaBD62VF3AzNvnFj17ZwTvFBLi4"
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
