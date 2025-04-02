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
    "2LLAeJHvs79sNpYihrAXaor2U35XGsS2oPQNWvwTTGQR6EMN46itesRFUrjFhCQXpbSPxaP37YU4ZpHRwMwdpTGg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "597oYFPTfcwYfmdphWm3dmZ5UpmwvHTQjQsDzCiXS73h8KcbkBLm8NkxX662rVCbA1Xck3vYSqt8MiwhL8XbVkvx",
  "key1": "on8WxtGw7EH8T1FMvafkogRDC7Schei4DtMjcRdfDzhQ2itcvLhVrtpHNHTFsnWAV36RpAyti9hdqx2x8xFRUhM",
  "key2": "2dKyraoR7iMbA77RvXyMP6UFn6cm1eJXxJb24LWRjRp9DoxNbsf63puMvZCTzg2zbw66JmQLP76CM5rvKoC4di7i",
  "key3": "55UzxTXe1EjiNbr1k1uyxVbe7r8GSy2hX7gEe1NGwxzYkpvKyW8QNhKtqF5Jg8Dbdb55L2m2pKqVqaGsfinH3S8w",
  "key4": "2ykNDVpDF6X8SCCaHpneYY1HEYh9LbNtbPcH7ZmBgziBZnQBYSDrrqtvKjE7wAkkU4StnvF8q4Jo86GqXyQrwwt1",
  "key5": "QEQsZ79syDx7e22Wfovt1ic6vtwLfqWeu2QTu2JghmNc3AkCBY32LhrYMZTgpKYvQEnQf89aFtsKrdtffumxEa9",
  "key6": "2LVwsTa914ajHauWhHuSbr89BSPPUMfjWE2wAryFATMzYMJ49nvY4u2TnNjZ9G8BSsQsrUr9MnxvNKKNdCU7RxzG",
  "key7": "64CYTubnhVFCXtFkLxSoXi7E2kYATwZwGcjvDN8idCsvgYEHL2cV1e5GXEiHZZYsbSMR9EGgjuVXng2NrErdsMcG",
  "key8": "2xWwG84yTt1ksAge82Se1Vc3SgH4UKL2Ec2Bt4v1nqZp3esXcYwzoJqv3HvCKUB1ci23EryDbDxKvfT4Qqo6mdsP",
  "key9": "3KFzqetfdiKV1QoYbAijcLYpN2SaWoh53SnA2MzyNG9DuX2doqCUUVh7Se9qD1mHsnvPmx1t6hwQD2kfcWmt8979",
  "key10": "51ogVPaGbGs4HwRhWn67fFgS67n8GNmFQftD1uJNT1NmrzhrxmSniMWf8f6ztTxjERW77oJdqJbqe8UmU4GP5yGS",
  "key11": "23xcJMUR7qxSgwq4joUELSaUWCxPzcqei1gijznB4Eix3wmLWj2w7Hwof5tNKrUVyFc9sJoY7ay9nTF7YDCKP7in",
  "key12": "7B2dag5iWxquojr3Erv9EeLJSKE86ZmEBt8wX7GKCdWvF1qgTQ6qf1irZMUAye9EiFRHvJ5aD8AEQ81rKYkr82B",
  "key13": "kSqgk4MVgbzGSYJujGdpox23Z8Fx2ePM7DcBjcU9oUvkL1RXxsVFPxBCz4cBrvFZBxKmPQXFhXRQ3L8GusQ1NHT",
  "key14": "3TV3VTDw51EExgav6xB1ibWmS9BqYCCX8oNVtt4fV4CwixxDphNNM3eo1FNx8PpBamfts9YfwNF5Pb11qb3kNdvY",
  "key15": "2LjSvBadSxsktAnKYWLAQVCqYfzaDzoHBkBrnpTPQD6UZVUssxT2xvLg68i3ZxYYrsKwLeAWCspXjdfjtvGjkWBF",
  "key16": "485RofFrF1hHKqfstVAJxuTbMHkArjoKq5vtLequmUBEeTUUuB9jCwVo3AuUzH2tQaiJkmF6xWazAjmUmTVBws6y",
  "key17": "4K9FnEk1tVqpW6f4LtFYCVfNEvCm8Go46QxUQc8wMaeVfdAYPfX3EhD39eFawyjdPaXnwLbDstLLDH8rNq8k7wYg",
  "key18": "4wJULVuK5LT8p8GwYZmMGsdicwko3rpV7VgpPzR7LAAFKh6SkukefSnQHa1dtuVqbLe3ph5zF81f2DJtu9Uj1YLn",
  "key19": "3GiYP5RDNLpLM1dxPcf1VEQLAFPcB2XC8ELxckztcM1BzXozzMeaLPMAFxkZ6PD3KeAaLC4SRGquWgtgjTWhPmd3",
  "key20": "wMeyC9sCZKuzuAVzhGN21251fsSa2d64QTLGpg5mBrwbbSmGJNjRNJcuYCBG9RZ6g9wKhGL5eyAiAD38tj3aj7N",
  "key21": "ar3GY8txgBZYDwSxcHD4YWGPWUxkgpJyJH3AgDgG7wzmnJwxoSjnwecmx74ozy2qXiR8wyaiDbVmaH1Y8UcgW7S",
  "key22": "3h4tgt75xNYAnPxaVGxJQueHU6fma1RfbqZBuWDYLooqTPnTqWuBrwckj1bWkreXmhesbw9uRtrVfkMLoaWCF21c",
  "key23": "4Zrqe8XKEvkpZYswwhw7wcFEQuy2kQ4LMCFYK1vwxJwFBLifiEFtfqGZp3kRjUJsSQYmvmxvQH96roP8tkKCwQsY",
  "key24": "5BPyWUdtpvqrV5SkSjGyRjzcW7wBLu2j9ssiyAC2K5PUBpikBgVnyHVoBupMd3QWDJWE5bihqQhaSnHDFrWUcEBz",
  "key25": "4QbUzcvj57mNTNFWQ3Z5vCeFJuKzoktSondeVpEE1v9qfv5WxktGdFhQVwmBNxDUj3oRcmoBPw1jve1g4kbTkub1",
  "key26": "5J9YCcPfETW2fBVm4MsvAJk9Yqy8ouWQtQQ6S3bddaK6dtd6nXJySF9xY2c5f7M68yUpPv3ZGEeCTX3knGrY7LPk",
  "key27": "5VE4Y8aRG9twJSHgg7kDqiSrJver7S9PD2ifmqCKD1i1GxajsqhSMpZjNvYFwxYyaz4B6bHFDuCA2tNwG3pZCyUr",
  "key28": "qJySEsrLgjrdoMd6kKDX9ae8auSisKRpK8SUMiBJrUW73YW1fCZ6kw1kZiFPrFoiZtDdPGFHjiGid2ZWwbautfA",
  "key29": "5377Zpbczud7Jx4mvLwSAoz7XzibNLPFUEnkhC1F4yexE7VcBctvZuk6YrZmg55CXtUw4sa9Qy5WJXpmrcZj4ymd",
  "key30": "2oD3AL3kH2C1g9yyFwNqDEnnHt7nZD18e2rsDNABRaHPKY1XoHiroHtsthdGSfaTVzVqygthKd1MgWGmMF4p7d8w",
  "key31": "iPFwSJGRqxGixpvZ2DsfKr3Un8AiFENt5qzsAH4BTnJMCzS9AytREFk3ghBM8LZ4beoyyCy5yoErZtxqn11vqWr",
  "key32": "5jwmRGe6T7cmUGRH5ZW5kGLJ32qzUrrgohnPpFdNmVNn8s14hUKKbMRkkJL7hUDw4434WcPZ5G8JKroDd2FxAQbt",
  "key33": "xHwjxdTVHqWS3ZVmv7muCJJNzzggwPMRpvJXTQQ8CFydrxyZgLjUytQo3PUrVmCtiPZ83iPkfnAJ35Te77Sg7DC",
  "key34": "2uvUghVkhhrteS23wXCdS11uCWmNqj6q6NH5gv1BkTSp3A3x2Y3K9fpA4SRpW4e4W27qav8KNZaDYgGqma9no388",
  "key35": "5iJAHUhx3Ft9wbBdUqVCH46ir9A389G6xqKKjyJfNM5ssRDHGxK4Pyi1mxziWbBcXKhTGxxueucfPQiNFSfFicFX",
  "key36": "53J2ibRLeD5g3nL1cpqCRCJuB84oK337y5aAjdGXamNVAShtSVcBzCNu7kjtswEaqmC5WmhvygJBkrcteaLPu7pp",
  "key37": "39ghGq6yY3zJntXZaqkLKAoyCQDJJ3DxZRzR5Njw1LswRct7WRknzy7U4a9jL2bKP1P8pDVKkVAo9skvaeACuysb",
  "key38": "L5amdMy9vUrvihMSVjCnmTXgVmF8j23V2agxsqdoDt3z6DqoNs5JnPNzbYEGdz8pNv6hhnQrbbGv9makqqAVsT6",
  "key39": "28xQMVcRPpsq2WQuhQkpaxrsqVpRsj68JPXPFRjaeUef5z5eNiThhz9j4spX8MB3kTYQNHFRds98v4azFh8Ayz2W",
  "key40": "oKSAT26dPu2j2edmpQYtZJgDE2jsJtB7PXFeW3jpfQfkKbinWZ55KMGEbzeKYP1CiaxyUsUZqGykFTyJpoXcR6x",
  "key41": "2QRm26ZvnNQyKLzif6ML2D3g1U47QvwbWwjsYmXBYd34o9XHAXdwXUXks1QKMnPNFVDJZCUEdjcFCGUCTgRfuuqh",
  "key42": "5v4gGVsrBNau8jpuuSngF5UQkeNv5frvVGLHibAFhf9Y4sRyXdATzjqVoMLXdZK1QU2EXAoBcH8NjAhxGoHcbTcx"
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
