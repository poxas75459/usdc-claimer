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
    "2sYSAx7t2Fjjf2N9GCE25yzw1e4gGCFmSmcVDEVQFkdErHvjxxbvLzGJvZ5Ak8SJ8kMUBwTUecUwCfLShPmtgyh7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ZTU6eTbgGsDjjA8Q8CiRiymQJeTWEeroTSuFGVfN2J5TtsA65xvjgWA3vmoRABWg3yoRwDUAbSy7W6Vvq3izo1n",
  "key1": "3Rqa6K5Ftg7EfpHtHkvSxB56GQ7hXti5H7DHoB1M318Fxu7NjenaHE1TomaRD4PKoYmKT15h5c18eeuMSqjr5Ff4",
  "key2": "4QkPbZ2sGKcrdwmVUQcfaqpk1oqPw7jn2zukEuj5SRLC3zVEzpMTEE4vB9csQBAqGqmPGRxd1difVkU68ndSYtD3",
  "key3": "61c5YPbiz3FXrmhBm1aTcAzmFRVJsuuRqJWqFArwEYrE55c2ZZ8VFpGXzDgRLdJFrQ3z2cfsMdmo3ujyyeL3YS6v",
  "key4": "3bPVNBwCNQhEEBWnLzk47e4BuS5AeqyM7E1U7tEAVfCWeRzsq1cfoCfMp9rwXiiJuq4efMVsuYXvKDLZ1CHqzt7",
  "key5": "s3xpCtLDKWAN3N9iwi9THr5R1eFgjHMkSv4TALaeMkAc9eZdmtwTEmHLsT3zGU1UJzMex4NdqUosKFDPVuvVPfq",
  "key6": "46gK1CquWqwTDbbRnmKVsVVB5BVCoKUNzHKBCtpLGW5eTdydg7syEqZiB2MbKRqJfyesfMgdGwacXY8RyU4Kbf3f",
  "key7": "TBmJWQmHCMTncAvJJ6jdo1EsqEzvWeAceKrFt5gjAxRu7bKiYnkbAYM4MNp3YVnssT2kXtAyPBnxyffCK9zKC7Z",
  "key8": "AamBxsuSdNAXd2V75715o26DXUW2kERPvsg7jLr79M4wBzDMC3Bq1rtYNiTbpAfpTCLY3UoEttYaHA1XdXX1fgf",
  "key9": "65DQ8jffPwghL9kjpN55wv2U4HEnmyBjmWdgeVEuYYwwdTAZU8JrQ5aZSrSWg6aJdguK7QXi3AKETPPjEpQ4bTo9",
  "key10": "SdnCBJJxD9jbQPy7696wBQJWF7ygCcoKsYZmR29RHJFnwjYsDnUiiiya6KWs4pYNoUxBrJ9o1sKUh1oPz7b1Tb9",
  "key11": "2P3nzMrdjU7qwGN6jGPhFqs1HTzMznVt7vCstrr3fJdSjPBczcaQxLzxCVWCir31ck4xZiZmgm9jyTk78bcsLBZt",
  "key12": "2rjHk9Chj57ioCp7eMdrTq7YtK4WwqJULJNBEnQe4zjpYgjKPrqqKGYrMwNqdzLU7Uqr4G93P9mu41Qqxy7Toqgz",
  "key13": "3yknkWPx19aTbYYNZVmXQcDxcXbtYQSowHUqps4MzDzbQanvvMXKh9vDS5QSojNopREYDtSBf1Sgy1j4D7cEzyac",
  "key14": "2efYfRQeSqaAVU1cMRWP8uetq52cFNRLzirRiN6rv5XQ6A2NojU2u8QFyr3gjei6Dx1W1UqtBuDxy5aqTkYczsV9",
  "key15": "2WjPwSiVodN8n4NdSdRJEgAJ3REUjXLiJ1KuiNhwdmG28SoB83xAnbZmjVaRv732PyEfPRC5m7wc9ZCdcBDP7PDZ",
  "key16": "3FBHbX64tt7NZLfgv92GmgTdDuCrpBDkkQBhPapQxznBQsEedDQQmPkp6JwTmpcCgdWuz7HoykBYD2TeD5jizuv9",
  "key17": "2EFCiKdwBeLd9HEsPvgH7LfmBgn2d5ZEU2B1E1PxRd8MoLg6ZcdiWxYqDCsZvRLw2TtshFovLAtCQkvSm3kfo3cm",
  "key18": "3E8mtGFXGLFmLGJcpfK98wrf7rXLWZ7LX8TKbuTHE6tmAisJy4UwFiSFekDEh7Kzz5YYurNsbhkihubG7jnbg7CY",
  "key19": "5QhpMCSL7PyYKMYzpa6NHrqpt2qoA7nQHcwdEvVSLoM1RcaHC17osDnz9ACqViX5HMVgJ1kzDyhaCzqzWmepR7fJ",
  "key20": "5bXTSt1SiGHurCPgqAcpqi5QPnC9RYCMoi6hmN6aK3RUJktHPVxfKLsfbQYpG86uSNhhEq7UEoj4UKBsAuUUPvjw",
  "key21": "4An7bdqPhhQ97YBknsUd8BF4MhYgwJLs4zJkJY7y2ifHbkAao4DuUFSJ6U1nJboRzE3GH6qJ9cdhJsMk5obcZs1f",
  "key22": "iK1PCyHp8ZZvya1dNwqu7zsNqBpT7whiq36r7Rp7V54RXCzqi7SUyWgZKMHPWycHhvwD6aWH1Bri3476aC7T4zk",
  "key23": "4BAmz1YhfftXmuDGVsixwg4hjdxBrLgZGeoU4LiitPVtUvHUK5CiQKcrbreZdFBPeN4nBchXaT1uVxwS5uSKjqd1",
  "key24": "4QmV8XKZKinijFC2WM9w8UUKENjMj1dcEEPLHKxfxyWgnpJZQ1coBRtYusdY3zNKGk2wXkrHWnoV1BWus7VTrFnd",
  "key25": "4ckfqqEMf3511SuTHK3HWhczyJU2MbRh26bSfi3EJxSPXrUexqrD1bt6tg1MzqcDWCtuuMk2gU9CweJYAF3oAJAf",
  "key26": "4Wu55kWwRVN8GynP2Cv8YQm2fDdNnVkc4oLD1Wocr3v5Tp63V2tPZe6vgfwUoSczS1u4AR7reikSV2uS81Eoojga",
  "key27": "29dJEvTuAaCLC42HbxpNp1sG98wpKCRRVFEhBjm7M6K2SQj2yNy4NbhBhitzrsgqf5rGaUCkNJ7sjogLvumXHqgA",
  "key28": "3h6BXtseHYaST7mhSJHPMNAxChurzKrxsQemc6yyE188CBSm5j6j83vV2K8PSpQr2i1tzShBxq8idp6FDrNbKyY1",
  "key29": "3jvDY5tXYjJeDr1E9wYCUUy6KBPgxmKTE4Gq4ba1BPMFA6SVaSgXAhhmfZ7EvonJvme2eWwq3fN29vVTMswgVzA",
  "key30": "XNC2WdMFEAJu9Nx7tQWKfTSbXXU5pLHRDkUw9tTH4a13hFBa9roWZfwqaq161X8BsfSR5a73F2mHUqoXaFQRKdj",
  "key31": "4pAbAw8QjjZiuAbRWjxND5cYfhmQ7KRqnCDgGQV67ZSdfSyKLsBBZbjtrG5idmNtSbcLczrcFy89CywpoGjYuz7T",
  "key32": "5kZSRoNKjQYD7XKAGmeVCT83vXm1ftKHEeyTGX3RTF4tz1EbM8bGmP41DQQ8uUNLxGtXxoyHV5WgWQcwamsJR3ua",
  "key33": "5qyH4s9Zs4L7opbaE4pSf66RCs9C6XLEsckMonXMcGQ6eKqZNFUYVzG9Edthyp8iFF134BLazuFCM3UDrUJ5vc3Z",
  "key34": "2vhp8SyRErmPLiRvgewsUZ7YtdZYJ45b13KM7k4ks7DjzQaK1d5hwNGZMDmgwo3np4fLnQ7AQfayhLPZiKxBz7a4",
  "key35": "uGXQAQDRPDsFxKhEpGuFP4icjbxvhkxKPejrY8w4ZHUXybqrv5ZqMrvNNSdreH6rmGzkmGT3Bt11XCnq1rwYqVk",
  "key36": "5E2TEaj6ghUYYPSFrrCfduMY8hPEaU86iwDWxuex2E7D5j439jKXLQdkrHCY2hVUcmobozhu4E9rD6ahE8agFnec",
  "key37": "51eTG8tb2wHqoKUkbgDSVC4hScXGAAgnSyvgwWnPf6wyJ7MLNdksS4QUrnC5EkjptC9Djok6dePirsCeXJKoPqRf"
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
