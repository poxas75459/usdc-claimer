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
    "4NUU1MknMBPrkapXFwUbfvNCkZSN5CZiueUFXrh2m3H6wZg3o9SUtPptyiWRZDrem38rmnnrJBsbkSUwag7n5EHi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ctioDhUaf42CxEjcvaT99EbAqehwtMQJhNBKQYknRBc79HCo8H5TSssJna3z7S6YSLXfCNb4dH4eJeXz66aCDij",
  "key1": "2DwCKSupLeFn1ZAbptSyJZa4tAcw3NzwdywrX3MrxkFRzYkroXtqiLJQvufBPe7qgbJ46wyDdTQn6GRk7GYc2S2g",
  "key2": "3CpmV3FJAqsxkJRQPHbtegDHfYMp5xYFRYZp4fCwjrgP2tzNrKkesXyzSFZWdRghdhMprug6D8grVx7nGEeCPEJy",
  "key3": "58LmgPLwutGZkF8BST4j9grgrbqS3pxdXn9KHAAmQrGqcciYydc3yT3Fk8934z6TSx95nk2Mhq3hiQiS83kq7bbV",
  "key4": "UwfUJJJgPJ9TwZ2nGCvFcUMb1w19aMnwywicUmRTVExYrkixhpAcnh1HGrdY9N6ZGiofr8iSCsdHJM5pzYs1rbk",
  "key5": "2RUd3rMcx4iqbqcRyr5t2TthGkN2g6zqqg725KMR9aMYQLgjqJg2yw5LWmPhnDSwp1sYoecNq2sufxqzwNbxKTdf",
  "key6": "4ojne75UUtDVb46yX1CTBzwmPMLA2KmtLgPNse7sSLxZk38M4UWD7XX9SNemvfyF6WSbt2Q1eFD7n2kueaJWjbrM",
  "key7": "4y84B3p3AyFCLNY4xqWBg6uVL8Wzk42jpAuuwofFGswfasLsyRRF4FFmo9CSNkjctk8b621UcpHbr9hbVbSXyZym",
  "key8": "4SC5Ut8t87DwPvvjRFM2a5ena7PutrBz4t5mGpc8iYdCiydaPGtPF2Jc3tJGMGEt1tZy2JvYrPTn8uZPUvDyYDut",
  "key9": "5wnkTYiBkhTPUo7RxebXDBLMLCi6iDEK5v2ErUqZYCnW7fbMBr2FAc4rLAS5VL9f1g4qY4DB5CxD3gbkre8RrZg1",
  "key10": "2yjAmuajBus6cgzGQCqSGoo8MoZomDtvRphzqDj2gcYBYRvk2JP2Kd25dmQFhQ7iZMJYHLodAb2VdYqaThY1ALuW",
  "key11": "dFaus4Y1shbsQbJPW3WbTT58PsC6KSi24sbNTa8RPc3vWJ35ZX8nJtyodf8JMPWQvkVHgvi9y2nsHRPg2u14iTg",
  "key12": "3ZLx55E3nRaRdarksLsPdXQ27owyw6qd6ssoNnshcQbSHb2PRGgR1oVcyX5ZBghuRygtTNLPty811YghJBP5zTJa",
  "key13": "34apXG1FojLNNWG2G7MnWKmbPrMNp9Q9nD7UCriP5LjSDYKFfbYmz8J1ZnsQEttB2fHkJKiLgZ41zyW6vMnaDNFr",
  "key14": "3KuNSmKcAvdjsJsoHV81jEAr2RMirmH5R2YakvAZXvpczX5Qa9nM3PJSWUZDZ2ET99UBG73GqXcb4DnrhAM5BAbT",
  "key15": "2tB2uudGbxfG9hLnFqPLgbMPcyrYtBrAVTaXjvjLxEsPS3R1149oi6m5NGoQBVvmse2uHdwZy5i4AsEctWCzsy9v",
  "key16": "2g3hXu7wfexVgcJt5vC5X5MybpFY43dF2m75HrAbVPSR2EcCAzrshiuFJ2tiGSUCNwFb32d2J4FQ4mFdxkN5D4Wz",
  "key17": "4YogpmhSxjuAkgJSgb8XMmFMXzUgqmMxUUVzACMRM1M3ZLKGu81inhe7Zf8qTd5ivUmTs4R4qkhsyhTRMx29vsPj",
  "key18": "2BPxuKG7Jzrb697dGxN8XCC53oHNdAoWhVVEMc5j3EdNbc9o7nDkG3Vu1nGRAHVnSjJ15biuXXqa5Rgv4gHD7tP6",
  "key19": "2JauozjE1RPKJnReUXmXZ3rmrZLaRZcqQ5qpB8urAc2vU9G9v1BsJBkbBnmgHjqMEaqE5jR64xKiptHQJ5adGcK2",
  "key20": "3wdiuJovDjKRYZrD9QsCgZXCCjE5D2US8Ytcp1e2zPFQAQp3F4UtLCL9mN1Kr4jrsn3S3vQChKgnPa9V3hqHRtPF",
  "key21": "5ZXL3yvurTszbDzKNCqKwSLbq6HeQifZTH2hwnHkCushxvPGqGRHWZmKY2v6PMhZqp2HTPUfweMaCxmfALbDd5xq",
  "key22": "2E85RzA4phpjBJaCUATyPRRey6taCUPirFktravv3TRCsPKmPHD1rsta7VL7w4bNPk6LxDBNJcfgHcfgCbmtWeGx",
  "key23": "3xuDL9zjYqZhKev4yBFyQi35unM5JSt39egsEGkawEGYDe4MSK6AUWtPkYk49upVehwKvczo5L9d4UM8ZFMqV7rN",
  "key24": "5nXpueVMbz39rqFCYS2g6KrbvG4hW8A9Bj1kKY8sQMVzbcY5bVcrpzRHPK7CTLq9qJqXUB1FwDRj4XT6vour3t5d",
  "key25": "tYv4AGc51JRihSN54B9U8fF8BtwXyb35hrHcthamYXQ6oXun7dZov3Re17ZRi2Lz2yY8H7sptkcncXqMv1iTSLi",
  "key26": "4EZ9cmXCscb4uo6ZrExPJNqm32futYjaL215byBAwC6rofw7PcGeaDGsR8MQ72dwsEfxiBAf2pWGYYpbc2xbgRyE",
  "key27": "5i1KRijd1HY5R6QrVtFPPVgKDusFszX8X8zSB3vmC32ukWEJAfhUm5aRDYfWvPndrF7743stymbmJwQx7cQtnL9u",
  "key28": "Fv4GLanweJTrS6toSNpSX3UFvXheUR9dgEZdTF8duHE46w6xoeBRRMgHVMVCr73Q44kjVLdVbogcwYmSpqPP8o6",
  "key29": "4GMrbdrkf6JU3dSjTbbnqDrHHCsek2aETaDwoDrfgdt3sUo32qbvy7HJeTsSm3AntNSMQY2AiKHG5nJAoPfnc19V"
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
