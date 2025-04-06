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
    "5kN3r1xGdFwNq6ANe5dYRzvbZsaPhVFyh4wSymnyTbZ2eEk9x66YE7qyF8FYoQgLYrxTRuBRYAz7xXexL4hZPvBT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2PS5uft3pSN3qTqu9f2qAQoAGysRiov6REpPJbYRy7gJJvLKxKVpoLGXtGJdrYpBKMg2sk6MQ7Rn1ES9my7YhERw",
  "key1": "2ByrjVy5CbAwoiJDHueG7uNBLFCowg81B7urJcF2MWgLeCDBQ4tk9c4jdLdtDmua7E31r86qY3LHGNBKoZPaAaQ9",
  "key2": "6V3v9vveBP8y9hqfTFKA4JPJtfCutKruVPYTHyNPDRyGvgukcQ4xuEt7DtjYxo3BNhtaJ5rkwc4TYnsj68xHLeK",
  "key3": "5PzwW9xHBKqjrK8T2pzo5w1dE4oX985NZsYkj9qFtkJjLjGAR5BbHZB4juGRZjkYMJqkXN2rVbZvyzXdJRUHDGXQ",
  "key4": "5Dya7mBJzGXectCRDceQXPga9ed2PobuC3Xi4umf5wRh2PHaBXmMMVTAfheVMXFhxh3ARSS3RiSAApGPprtujn4H",
  "key5": "4TREiVcHatcrWnxQ6eYxiYfPRM3u1Yf8L1pweUrwbXxGnu49pAXjouPZfmUuvq5UjyDmGMv8tL6mymcxRtfshKRA",
  "key6": "4U3A3LSwLS2E3EZmM4ztANVz9tWhcvtoc9XgtR36EAb3hQ9Eycq3NsiwVM3RMMtrWV1aAHiFgErBovTMcrNsx6oc",
  "key7": "4zpqYXeL7E6wz6qZPggczau11CJVmB26Rp5nGjsVbNTMoNtuU2S899i6yQBMcVjQ8bfDxY8cxVWk73p3Ztw7DM9v",
  "key8": "3hV3jAwhfHt7PJ7tasxx2urym6bz2ZAuKSDt9zqyuaLLJnyWZc3u2wFfFzq8RhCSHEEK2UfPcKVbcb4GNgtkrjW4",
  "key9": "5Mrhkhw3VzNDLJCrs63UyUAPPovFKpYJ8b18v4jxHYwxKxMYqH6CXVChicuMcEU7KJV3MwwSL8StzqZ2NDS2xYHY",
  "key10": "34LYzcZjBQ35tGpHTXzJiXSWx4XWJVt25BTLEtNwhuZQnrrtg3SQVJiTPNszio63429wenGY2naiHgNynhSBRwLz",
  "key11": "2MUPDFYLessg3KS9pFwFoNELCC9CYdmFBF8MXWcR3XLtXmwbr4DQUPbyxnBw8UCJca4eUUwWMQ9bQ5xf4pKrVCJq",
  "key12": "2DBS4htqCdMU99SRzKYL3cT8mFpb6M3g1F2wmGktiz5q8LAXzqQChkw5NBBSMiq9xm3bvSsAaBociBPTJjy4EaEh",
  "key13": "4jcearoECbyVqWWdRp3hAcu36bTo8u5mPwh6BkneQWDfQBu9PLX3NW4CPdwAMp6b5dSyNVDXjfniCdYFjeAeXtkR",
  "key14": "5fx13WBLraNg2RpTfj1PEfmg7kDTjhyFP2sjQCGZVhoqS5sQ7iJh6xQmLxPN4Yvx4Te5WXS6ye83TtLYVrDAbcw",
  "key15": "4By5RMKm9zEvRYJEvfsL4XBCPPg7iTxAJ7kULELmm9uXGrtgyAWXcs1cxssnndQkFVacNcgZLMJNnv7XTxiqh3id",
  "key16": "27g8CKvcEvHPwt2bzk9tVWuP7A7DJ2YhbgbnYd1cKuqukNjcwiLGrrPGiHjA1XA1T9Xt2PGv15b6fQiV3ys2SB3X",
  "key17": "5ZwEz9jLnCKxmBJf4FQLxpNRLx2umSCuDnfjAeAAWvYLSRznTr6VdA2MycSgETmrWX1sf6qgsFFVoJgbBcN9rCzn",
  "key18": "8jfBje986ne2nKJbqo8UXWFZ7JEuYnGp1JtRGnSuxmkU4PLeRaxTEgQ9Pnwn9X8y9qGvNEDqYgLLsLMuK7qp4Ye",
  "key19": "5NVBwb489btZ7kXBt7W3BjX46hced1qMwfy4yxC6rK3FYqsMCKv3r9TWdNgGC67vQzPEB6UHdjVFr6mfsNFQdeqZ",
  "key20": "2voUvTP6XhprjjN9U9HCFxhozGPSQvtMuKo4f99BB1mXuhTmMuoDjXD78aKEXrNCjniVC39w5ENAFcUW8zkr3c7Q",
  "key21": "42qM76jXgyJJb8ehzAe44g1AsdTQG2Gwoa1Pp6QCVKNfJrCDNzKvHFpHX3MEdih2uQt9wSKGGzyPaCW3kKAmh94m",
  "key22": "2cUwLCshtJLcwPkmSBTVgWtUKBXWsycW1nKWEBnF3Zq5uRWwmPAvQ2H7vPtd8UoUU5TgwHKJn5FUPWwDWcvdWD8Z",
  "key23": "PzExD2Vq851kFqHf6iT2DHjccDQxGKZD2GXESWdkEkR6pvVv9CNVwwUhMLaAgiwXF331S12X1U2Yozz8fTAocGe",
  "key24": "2aqGw4F2KAjKYFx62C2VWXtdyPCwJj6Xmb8oJXUxAxFjSyYTPuHTZ2fjjxD28ncdU2kEpQTpNDQY3fidwUNpUmvA",
  "key25": "4xqHwY52QaYNYcP3bLQo71UF4LY8LPX5fzd1xtZQzvCXVAiWBmXN6GurDQRA16WUWvsWV1LtG8rYzThZCHuRYcsi",
  "key26": "212z1bq5mWQXxTK8h1LHuS2fRhDE3Vz9hdZnH7TwDob2TyDLkf116RtKicKggFKAJ6QBjTaWQKHYNkyTYhBuAB1q",
  "key27": "cwbFpNCNVJL2GBxc6wFpR5s5e3JT8bHwmvCncsC1kt5vDVzx7S6rFjykpdpzqVFZxAqfXU2rb1s6yza6p2DfP7c",
  "key28": "5AR6zmrNZU8sKQp5cyxbPC6izUSdegZsSxebHEMKiMBkP6zVxtVLZDTKC6jignPFR7zizANC6ug7V7pVsJADP7v2",
  "key29": "3Do2fqkfoEvLevVNxbdB6kJCxrckC5fKRYqTF4p1rwZKxsp78AWtj9jpwKMbzZt6cqR544u33uEVU142XbYgFCJr",
  "key30": "44WKJ9Z9t7JexVemcfHUFhFLXyJ2MeQ7Ed3o8KWTwUe2h75b9wD2cyxG2Q7KfojjM9WMfeECJZ2wUBVmtRKxnM21",
  "key31": "45xoRTFapqgvnR5j7DgHMN8g38U45Dtu2qxqw5h2YA51nfrxZaqvCUv9YKWyzewZ1ibuFZVXRjZHHD6avxxPyCGo",
  "key32": "2ahkL1sx8o6zyLXbuTGn34YiQp5DUCsEn1Zo7BSyB3271nRGxwTLa3V6EFdRf5vo6WVSCn4qoVM6MJ4cyA6nc1mi",
  "key33": "3ppfYZy3ujRZdAXzMtCNRU2mWiEuFp1rRQvoYMoAr39wWNVJ6LoMLNcS1fCZyNQ9W8RqM18Mcv5Ya2wgkNXxKie8",
  "key34": "MWeB8WissA4qjsgv423X6uWZfj9FdAXm4bmTxtCGXP7oRyDuqg97fqv4wUpRU88dvMTG2gPwj149hbsQFopfah4",
  "key35": "5mzjz8wVTFRhc1QiestsDRC9KqN3HiCVST8r3doZ5PkVmH8eEzb4Vo1fVEKKs9v5Yk8Xg9E2yv1zE735rLSe1cEM",
  "key36": "ELYCsfxWMEeAQjUj3SwNdurthjTEH5sN7CmBGnjHG37Bnnw1hAnRDg5fw32Ltyn6deAqkgxQQnSoeP3CiQbWqF2",
  "key37": "4CF7kbrXviTsKgqVGLzJtdL4YPSnPywhqmP15CoMyFJaDAgUTBCZACdc2d5CiUEaBkPdUXbiios3YAG6nuEfWi1N",
  "key38": "L6bhdLgFkFwoEK8LWQ7ptbJpHfRgs9tCm56VU3EM6YDm5dTG5i16WKqgXnSxqfG6tRPGauXRuBp9ZjUJrA7pcqp",
  "key39": "fKS7vF3o5NKFGTPCMbKk723PpgjKb2CBiwVXMK4hJonZef3kTCvciW4inr8V3uUgvj9oDBG8FDzwdNTFqHn8WWd",
  "key40": "2PyQRyreCEi92o38tKrPtGq9j3J8rS7gpMhsiCDWLeU7drNRv4GRu2snJqZ9Gij67EvC7zHqgWfpnHDLKVVuL6Jg"
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
