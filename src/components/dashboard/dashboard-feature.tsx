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
    "zw7R72Z4dQ96yDcajJmeAEUupM1xGETGAmsrrM3s293CU5sKnKT13bb9CdMAZ7YLrGg9SFCF5ejR6Xaq67mpZ34"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jixtRNe2Zf9THskQfcRWcSbPA91AM58pq2RTRdkJADCjF5bSoe4bv8M4DuAUHnYofa5ZJhpRPhVfyoj9F5VMAPU",
  "key1": "4TxLa4wYnDU1pb3Aa8T2D2fYJU3NWnAQxwmvvvWiart2w5p6QLutG81Lrh553L4p9rmPLqhf7r8HxYvaZDByCPPK",
  "key2": "3988K2W8YBDZgZ4PJbzQw24mmVLGQuGXy9zq9R18FRva3LMiFbwD56T9KUGBQdeAr3ekVNkzAw7JSazV5SPWCZLN",
  "key3": "4bhVb9ZqmQze2ryQ16mv9EQyY7inG21Ge9urLwwQT4VCi2nwrcuKWakwxmQBgZm99nhU9NTz2ckUfbjs4YkA9REd",
  "key4": "51LCAaP52ctQSDdAQaiCTejihLX9hnEupg1vzAJQAkqm1xV3Y6gqwZ4RsC4jh3PTxZGUCtDgZvDfCVT7n8LajDFH",
  "key5": "2Vu3rKSepRMgZ18WxT5GHbFyAor8h5nbt3xFaWLT5UWAqogSnXSnddVfCXoDEvDctnMhRy36VnptZDHKvEdQyfFk",
  "key6": "2bGZwgu6NdFpXPksq6hbhYobyV6zEnMzKcNtoKdm29NShXipgUtTvvn4pjMrLSpnjSniZBVxX4XhqWfh8mn73SPx",
  "key7": "2gT7yQ8CDpzw4KQH8kE1U5oAeygi6csCDNq5GCWmycGZdpT5UB6oaybyWBTy6sbji2hxirDcGm1hnWkFUqXSxgB7",
  "key8": "4X4fGuvEQXPDoHCk7tR43t1Q71B5bBRrMX4SWuXZAFtqVsttaU9GtKavp7xDWEkX5G74wDQYsGyTcGK4YCccYFT9",
  "key9": "3oXe6YxmDG8ET8QSf4T3s5zwHiZnKzH11wX4yErMz4shMKVUPgxCAkg5s8XoJ6mRVm9BgC52qvMhQtbb5fc5DvBc",
  "key10": "5WYBbhHzSVQ7RgoqB7zKbK8Gm9LJRUN6RaCXPRpe3a2xxaU276pugm5CmCo6nD87DCM4sFT8ZQ85upgKJcrVho2u",
  "key11": "4NNbbHLc6xBE8Uqu2R2oSYbLDBeCwrd3m56hEW6EoLDdEXf27cxiwqyhDo6bNs73JmNvD26XoGSiyTLrFRKZjt2t",
  "key12": "4bGSFKpLc3M6sdBT7wutjdi7CxPXXSfYQ4xAwVejnCYog7gmhSrL39zH2m9JhuxvGzkbHVdjQrx5GQES1N39W7Dq",
  "key13": "4CCGWJMA8qo8nkAB2YqkgU5g1nughz7f2QRxJT9ZkZSQsLyzb3s9LmXWkggNSe2ymXVi4ZvCZxZZutXtnHqLPQMG",
  "key14": "5hYjSKJbtWzpjHRxdJS6aRvd2wKDAoLTB6itySh3ovk3YXFxbDBhg59znd3abLaHZVjZW2wWcdLYebSTbT21cb5e",
  "key15": "4Spgsn8fKaxxawmGZRdA6ftHxqtUm5sBtthBM9qdPRHxW7TQiSCdVdVSP12Nx79anqyzDEHafKz8y97ntdB6SLFs",
  "key16": "3jpKKDfiDtamw1Y57riw5v1wWED5KYxB5yVn2qhdL3RZLmszFEvEGMiRWYVPBdiPcSTKkd5S3JasdHDnVkfpRiNq",
  "key17": "65EPAtXtvA2Yn5SkjLFryebpyZCAT77vv8Qny25S8rpFUPr4DfacMVHf6eBnFq2qRsuWv1o4ZUB6YUsxtqjMewqR",
  "key18": "34koU7DFaVp1tFhaj79PM6Xuvfuq66rMDw8zC4D8GS1YhJmFgUMThg2fgXM5ZC8PMd4sPpVfyjEhggW9S8N1Q26a",
  "key19": "5EvrdGaZU2TuVbbfYNCrdykwJZTt573ityLRnYMZahh6JASnRfHWE7nMj4awTUL9Qc9VgC5e5KB9PRg4Uv3cPuMz",
  "key20": "4RGjspb3twz9zzwmeoUk2kaspAWejnH1YiikYDKegj8p7KRJxTVVZMrxfzdQc7Evwduy1ZbpXm3WoDJaKrMoZ1oj",
  "key21": "4859VNz43jUkjq5ywiDRsH6oJ5CG6G2DswbzEfotx5foQ38rk9bbcJa52gUa6SbCsn91Yk8txhKgMjA3GQyZzYSw",
  "key22": "3Zn89ge1B4WjFU9Rf6YH3qMYKdaAQ62eAjw9ai44oJRmxA8JKpPwfpnrPYro6Yesbh1CkenAJbjErkncg7g9GbiM",
  "key23": "5A8AE8VP4TgXBYdDHbJvztQSgHjYgUeEZmHfgsHjpwb3jq7zSV2CsinwmXgctDMdpM1MwcwK1pMJu1T5QAMf9m1z",
  "key24": "3vXRj9Edx9JSuDGBVTJeRDPEMKDbTrRiXmNZsjLdqwzNB74BVzVhET4M46WYtP1WC74djLMpLy8KxEFA5N3x2pjA",
  "key25": "59SETgqwofKsfsv1M69qFWrmELi2fgGjmhbgUv1kvow5Ha9T5Qyjxjd65NCyFxgqSpLwZSQSEuvvXTz8v9m4WayD",
  "key26": "5YkMCPJUeDRD5pTejLSRNUzfR5Aiiid8zTxGtx8fbfMCbKUZbuoqGCSoh5tpqyLSbp67YbrjSDABxhjkR3Y7J9hJ",
  "key27": "3NBSBGofN4xyyr3TVyqwmRCFabdumc96pX9NzukAK699vxsgDZiQeXchYMBS5Cr8NnLy5LGnCeAXjamB69GvDQ1U",
  "key28": "44qwNc3sqdxHeJnVaNihD3WnajDqQmeJXWaqzE85fwMKCgkk6EL1weLj1VrDSMPYDAyrouY1rUjev5Sxd4HrS1jD",
  "key29": "3xBM7ZXKh5tKRnwgDahB9mWjNJRVNbmvph3adQvniKwqPmoC1T46FEgQvsEHRbbCtRV8X64v1Cnc6wqQLZxqquj2",
  "key30": "4HJSaswxBH94ZcWj3NXjNnGoRwn37oZb8K2MfDd4E3aExPTYFqsFy41d6GkoGX9qjFFrzwUSiTcEjAG7825efHXy",
  "key31": "5VYgXrXTZwrD1A3cCugn8TdcPoUdUDXDZJrRVxrsqLstbvLn4EcZ3BxB9APqHpbkFCdC9S2u3cvjZxtPvKEspd2b",
  "key32": "46s37Cqt7Vg9LoHqDyrD5LzfJLNfaYwCUQr75fPdzp4Dp5SLMTPZTccPNQ6wJtfzEsLPoE2FZ4ZSNVFefm9BbwsB",
  "key33": "4YnnZeW8cy6Rbn1mAYU72RBjuumyqmpUscjEyXPSSLmt5YMs39JSLydZPsEjkdJ8vvj8MxS5CahQvNyG7KR9e9Lf",
  "key34": "4W2GvsKcFhNMh36p8ivDSMgmtEM4h2dMDgXH5S7J1DC5KnbFawoHerS52shFaxDewG97iza7PJGjUANwwPT1iFGM",
  "key35": "4wveMRGJXmKjGKBoudhab8vdtXJy1vBfyx7h5QPcmqF5JvGmxvBAZPjNtfUgvnWoY2PfH9DMKLPdEM1GbuvZKbVC",
  "key36": "3kzPdTTYkifLG5jEH25YKZtYE3Ne5HXbdodcTNSxGD9KjgCFn22LMaFueY6tPhd5qUD23k36iRC1fbhymc5z74Uf",
  "key37": "8TxvoffrJWz1SEE4EzkiD7cHY2PVKf1sRjWPrnQZcLvq1QDjmPyQMAABohc4HpUZiXEfiHyGqKw69q9qrjGGaQ3",
  "key38": "3GxMXNR6PqHdY7g14KtK3Jk1cRmJbPrQLR3BGGzxFmeiZq2FRfE7tftXXJweGzePVoUokR41zwJ6cqCBfssGbWrp",
  "key39": "4p6kijrnQXzkKJS8h6aoP5owK3xyRGz1rfP4XjFXDNPEQBJimRGtg85pqUmYMhLCPibC7dxS2qFV4mjh2eYgDuFw",
  "key40": "2M1y696VZJfPnWG7oc8WfZZaY5XQmXk6r5ZRrnAazhiWvh6iP6F8qR9TSbYDmK72vsaG7ftpsd3ioh2cphXsJdLM",
  "key41": "49sngjjLTuaXgatLJTP43kQVDLBJrZrpaXU3LZraXMCjQw1YGJuvgXsZh7jgz8gSm9XjHjXxfCGrdwT6wV3F794S",
  "key42": "43iD2juCQQjfR4eWoHrrefkku4kxwPYxseFJWwxppGZn8bZDVZeMSdZvkuct58p2F52xag7MfRYMjQ5u5uYsfZCe",
  "key43": "DfTDajFCjwjyapMqK2qUq7LS6e6qiMfktyHo9Fwo97fRMEyS9je5mjtwGj5vkjLoEam576s9rqBG4FWL7hXqPGN",
  "key44": "3B3B2PUDCV2y5yYWJzmpSQUiBr5w9bH9Qj4moGmCL7o8e9Ri1sYuHGLXhzRnMqu6JbqcQ9pStsoVxToCDrtSyr6p",
  "key45": "5cDUzQ1TXQ8c4jTeDgE9wddNVR6DaAzFonXJUt9mkBo7nyhd7Z8Xesz54uSLK935BSCsPxGYQdxQwEcefs6pKaf7"
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
