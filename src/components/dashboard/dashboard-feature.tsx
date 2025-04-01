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
    "2C49arH8BsGFdf1WoQRbQFJCXKSXURbZU1ZFWwtypQdvQyFkTcU4VSC769hBTRHkfJcEVykGX6FHTMLNM2scWz9G"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5YR34v7dpee4xiXWTSLQiRjbrnU47baqivZ9ZSBNHe6CfikiULuCvEqmjQ2DJG7eRhxFmrChkt6mnJcqWWjbiSUe",
  "key1": "4iu3JYNh9Rqo4J4oGp5Viuo7TrpcnrFGG3dTbT6J8hhEA6JB7WNA2Wq9XNBQSdnzgj5hHpBfassDLWt7hYPUjXAF",
  "key2": "54STuyTs4Pzicgz4YLL1wKBJXHzKSzcZ2PPnxNxCJb3wVDH2wkywYF6iyobn7eGLaV7BNv7H3UnhtCPrnSJGxEoq",
  "key3": "2FvXJJ2UUroqjiKKxif6TbHg4YbpEJ4jiSNpopPmDjAZtiJE73eRCyCtaxENoaZpt118hxu3ohVsCt8Yw4k3GQqp",
  "key4": "2vB2hASEepb7udHzgYopfqTASfpQf69DB14iVoVekb1uPAcevHSAfjzgqR6FJKGfueUBHKkuBjQ66CR9MdhqP37e",
  "key5": "xNepbGEyrKtEKRVG1jKhqk59qfJZfJTFeNTMvN9zsU38Th7PVTpwV8hHTbqRSUQYGqfYRStaYUk6sfZCdJzyedV",
  "key6": "4UEjZfypdxfCo8YEMfWH38ZfJWaD6kVpeVfQUGtozN9H32Ykr3xq7baKFKyWXt7Qudg3e4H88rARD1tP8FbqAuCb",
  "key7": "33r3AJvQU3jjKTSqpk2hqXxwYCGhEc6DtZk6zySYV1PnMo7uynxmQfL1itfxR5mH3nJqkyrXU5munRHg49ydU9hr",
  "key8": "4iGy2r1EGUUxrYLaqc4iBqvKnZ49yneXnsoBkoZSyWeZmjVCmVFg2ZLw7Fe9dk7pbaBXcfgrVJ6Vo5LPhkPwpET9",
  "key9": "23d9zMLWKi4SnfsaEgYmdYsxiXutDc7EHwZ5kDDaxsPizphoXR9NPKPF4bYE819cs4T6trdWZxLyhUg7u75zVN46",
  "key10": "h6X1Lh9JbmuVTCPQZM84aTCeEb4haU8iBytwXomJgEGcMySv4cACHAmMDtUvuqCUdxx7GbbtSZ8ZjD4Uv9Y9DPE",
  "key11": "2CKkKKrTFryy6oUoMz4PQPMkZYT6gyW5QMRuBA7gkkMEDqXtji2Ws7aJi7q6hAXvCTPNbK5MCSFHyTBHUqANwREW",
  "key12": "mb7G65eqYvpuJn7N4VyQdvGw99B7tSXGxqaAHHT35ZpyFtvK6j45N3riVS6wHv82awUaeeHPJ7DDs4bVjC1kRkb",
  "key13": "5wmQZPLSjcELtp375VGEAWpRkx6EDdk4yhSYdfskTC2hy2pcMoYCHBJcUgNw2vtm15EbcyszyJpRwvPgPa2FTdEM",
  "key14": "32MKak9qiKjaxnPUDTD8syEcgGeoE6RcrvRv7UpqncB6cpU7GsQcT6EBBVfhfKvoFdsE4ZP1MPy781NDjWbHRB3i",
  "key15": "4tdWQD7sKMY8oYAiQDDVwEFwa1iEssm8LpedFTM8pMHdgbLdBi9yTsbq1pr3rwBbKvU8GQiovPVZhDWm2THfVZxR",
  "key16": "4hK2bPRx516XfRKjfMW2N6jUcawGkJh5NihuXUBqE9AsAgVPddoGnNXqsKf7budgCc8wgJt3St2jLUf1rqW5HaAu",
  "key17": "4R5qFRbtS8s2hZwhwUmWPjF4uTqXFTmaaBaoomrRAQDiiRbNxJbN8CnAbbGJVe6GitvpT2jbrJTCJNJyswhrMv6y",
  "key18": "MT4YbUffFDfbSozBSgKi82wwtqhbQh62AsDgJ91BXcCvRfmbWCudWuPSeFNjeh3QkPhtkvxcreN54mYHrEKSozS",
  "key19": "3dV8ccddE4DtN4KiiGUbhDapwJXaodFav9Q7ybCSs4w5Aipg83Nd838RNznVcK1McSKe9ReWV3fNgtNZEWpfiFjQ",
  "key20": "5WKkvkS3HE5YjWQ726NHPc3Er67LRHZeouka98tzmqzXWpNY29chgZ7U7v8pTz5tTmxQnRRnDigViwbvx6wvkypd",
  "key21": "2k6yksJucq6wWzPTMiq4aoVPyRYBcMyLXQPyvjHwA4qGAgM8giY1rTTKcbELVziQUUEYY6Mn6QV1vGBgPGZ6x7vF",
  "key22": "3XvHQUnTme1VkwCi3w9kAYsSgbYQiVrxqaEydnudbUodA1KT5jjnqpAZeBrwrCYrTxZqoSjNocuutAgX5PjtqWNa",
  "key23": "546bWVXvjjdBttLd29kmncKpxWRPGr2nCqT3Gi78TkqKepr3c7d3sKz2dXaPRSXxELAiXiuCtqyjKsc8V5KG1vzN",
  "key24": "4vZr8dLe9iEPrxeonZmmXvGcUjSEKJhyC1XPjhfhwf2mhBup78b2L73qxX3d7DaCBBAPuGRW1GzzXqRM6gRWjU78",
  "key25": "btS4bAxtHLdKniXNtZJCjAxmJMGEmKvV9qYckc4NvZJUzfdeXeGnTwGBgx8dLjGQat9TG1YBMQrtc5Xm6KgWzQe",
  "key26": "3BmxQKDxdLzWbiMgo4JKnr9RjiPyLzbBKQJznYaaRSW92cPRL3sxL7fz3C84fiq2diE8SKUzKTD5Awimah24YuVn",
  "key27": "4xsN8Ja9rg3NJYJE9hZmpPeP4hHPQnsqLV46HfcuT5Ad6hwQByEj8Zt5CRZhQ2vCE1uRpf5CcMyd6ksUowJYX3Ad",
  "key28": "4LG5gKRv9HFAsgZkvdznDCUzZHQEWTeXNQfyDeymQ9ufStkfPKHGEbNh1bsbiWwoqGFeh864uMRpgMQiTZXTuXkp",
  "key29": "3kCBDwTaaXAb7p5a64H1yK1JbbbgUCQHh2k2LSqsYNwYvvstFjsjbbHVWmnvXYAD3sDbetAFaVf9SRJB2DDR43x1",
  "key30": "494UByiKhaqaUdKgwQTDD6D6VKSvdqchhay618nAzLMs9GLtJoe61ydLVhtLc8gSVrxb8Chi5oF97vNpYBqAjsDL",
  "key31": "iraqTWvuvNkNzuPLNQLiUo2amTg6QofsZ3bTho8UQmBqhJJqnLhJ1E3Nos432EGBLapGLWoeTLU4C4mwoC8WySE",
  "key32": "2uE82LdBPDpDMYWgQ6o36cEve8USNc9Y2D2XN9qC7gf4xAUuhnEqpWcKka2d2334TirP6wa2nCU1BfRmFtiwwreT",
  "key33": "4XvJr4AkwrRKkUoZmKGqSXXoeHW6nca7xgomPffX1hhrk2p4A5Qjw68fdXbmMCRaqrXqUmgFNpPAz3DBzksAdPvi",
  "key34": "2Ne9nC2CSzsVFTZrjJWnk6LDhPH6eh5R4tLVSPXFWfUQFey7kVZXHiVqJ6BeQxmpjyRweWYy5B7sQvFWLPVhQa3U",
  "key35": "4xfb6xD5sBBffaggxD1Wdxprb5TgDC9iUAhL9YgBR1ahwR6VHgUqG2SmK3TVAbzUJtWtZ7wFLH48ooWiSVaQwKmQ",
  "key36": "RarJpbuNfR87c9Dt3qeef72ku9FTSHM7SPp4aSwjsLSyFcpBqVTA1A8EVTty5BNkh9ccsfJq5LsjHyet2NwV7eQ",
  "key37": "w2awpBXqEP3eQ9UtDHsADh77APG2n4bkDVmt8zw2xtMm1Z7ohYUscUDS28AjsL9kb668JD6fSWTndLPXQEafEE4",
  "key38": "4hvzYm8GsSBL622AdTdB3oW9euGXBUxrno1EP1Pj1CaN1y3HeBTQJqHHVeC2euzz1BMQnnmux2pRGp4aoAYWSQ9Q",
  "key39": "3Kz9YgwyvsKuAfGtBZXPjEWeopYmgd7mQmfWEdEf3HbGbzPcsjRxoVFDZAXJYJUs38kPpq4JM3jQAsyCQykjwmji",
  "key40": "4Ms2rswX4v1G483oLE2cTLRxVAEzVCz974HgYR656xhJgd2MZH5keuRCu9qKMdcDwqqp32GB6cXa48z8xE2dajRy",
  "key41": "5ndzLRuCkGAdDQRHQditDJADhSCfPW6dPMqwT2nXKQ7QT6uTeJEhssLJVBSpvcA8GoHCeaq2HsQsWbop4bycgqWZ",
  "key42": "3785qaDQJEeZfRActzZoQkrYwewSosmMAhKbb7BwhU7C5T4RqRbVoLKL8EX1FwudrrFsvmVZ3Ngsz34YpdydZsxW",
  "key43": "2ryV9zXiK8RXPu5L5CHHjmKprmY9syMBJ3kvGf5PcHWzJ7KLbxhXAf4MaZjkUuSNH7rE2gG1bdSxUYfWZtjoxfsW",
  "key44": "4wwp17R5y6AGiVe9KF9dhAPG1XWxKwXYn1on62iLfzmQRFcVfsQz2PoK4MaBWjyp9U5fS2rvM9eY7oQAMjQoqfhn",
  "key45": "4kjE7f7QQ8WqLnvJhwm83xUj9LShHuNz8TsNLfQacsmUaD9wySzPhjJaqMxeTC3HmkDNGWkxRre7pbJgLLWnxwyZ",
  "key46": "4Hy9vJ86xeTGvhmH9QZbGFFkV6JTVes9av5cDivJzjh8Lp8Dr7QthNZqCfRLAW1kSSA186CRTJ7zQ481A8nKvKvW",
  "key47": "h22xaohEP4dJK6B4eTFpjxfmBGUTfC5Vro6mZEaWhdD9aqYnv1AALjM1wY845EVu2CtmEf7AXUASTeAga1iK55r",
  "key48": "2YRiqUoT3kbK8LPLWGFJrV2xoByzVeoXoRcSNvtiBa4SyYiMJYmXoHqyazEEyPjKpchwuzomwZ3ZAfxCnDFsksxi",
  "key49": "62ZzMNhqsyj4nj1THrsDZaaGWrbsmTqHrPv7kijyGSCCzMuAMZaV7Y9tKVtfu8av9vPMEFDcDXeYx5JN7BDNhDzU"
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
