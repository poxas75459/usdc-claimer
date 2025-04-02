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
    "WmMYSKwCp4bSWZLsS6Hm2b4G58i428sWGcYzaSfvtPzctEi3643quyndFMoV1TCxjd6hKwhMKUAyYFye1r3vFAm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4T8yCat4WDDito6UiGagf3Jda2unn4NZWNrM9ykkGxJRLuQYcbjMD5nv2ZTDtfv5TGeBrmmwBTHBX2PeVaohYkqJ",
  "key1": "2sQu5mMFni7b4awwkSCuF6uwe5cZGtkXC6VsHMRgMvzYVNTDWJS1cakLuB5xbhyEgyPGeTzsmKsiAZqyv455Xqbm",
  "key2": "4w9i33X7kU1Jc16fHNG3RDQBApLG8tV5HcZ6QDzyF9hpDgSZsUefYhAhDDiuYK5CvhB7szGadixWuCgXvgjiyPDN",
  "key3": "ckDWnH2FTYXrxGP8FUYZUAMoAsDq5H5ZmrR6kgNw7XUPefyZaYJ9GF5uraZkApTBSRnpaWnb1zgt7cGwRmEhuYK",
  "key4": "3rXjS3mCDV6WCWMwMxoJqKyZnCysiNzreradXMCSh6rG7S5ZdiH5Q5uh6hoCC1nogvXiKSTK7pAetAsTUjM2JR32",
  "key5": "4N697WsRXMnUUk6k9eVjEpzPQunHC1h63oHR6kyJjhxuyzZAeM2cMFvTKnRt45AYuvp3D2voAsfDFDqxMxsdWPcp",
  "key6": "5GS8xPJ4f397iD91gtfCPC14uEwcyW642JohrHxcrbWawHm4WD4z5tgfWVcSXfUgPuEFUJFUVtjncuMTxPqEqi7o",
  "key7": "GHibjRtWMc85RQ1LPBUfD4UVVC3UjXVquwwbxWzoRZyQutFWTiBBkkCwavjRCAxRczYmCx99wTeeRCGvx653spb",
  "key8": "2iPtEaeNwtiNUP5L8LV2rEsLBnkeHvQGx3vhWuYWu9xJxuqRSCZaq8XRyrWG6SRMYPWu9iKBbC7HC3fRN23ft4i7",
  "key9": "3wkGxsQy8ezpyp6rQ2EWRFHQQusajmxjXUGdtEyuxLaBS3PeDypDCqpavVF2MCEiUQVPA1Sp68G8uZgLsxQWdJKr",
  "key10": "5WsUdJGpNcJ4AqGcoe3AUFGLQUQbxqvPmVHNwpmcL4e3PijJEqSBNrPPZdfXHzLSCNKx6WATrqW3JXJM2fSgMdZ",
  "key11": "45h65FzQh6r4t5F5exzgz5aAG23LyxrE3XZzwCN8KuTmde5ucPNxuvqsxZvwbZqdC5yQsAKebRsAiwaRMWdxEPZa",
  "key12": "4n9KZYi2tTa4xJGm6qjEMSJKWEqx4UmeurDjk18ipbpSco2AF2uPo7hsW55213q9WMbMyL3tnTdStGTCmRYw76yz",
  "key13": "3pMajEAUW48HJoP1FyaJ1E2jbb6Y6dPkJyeHjTUyUZrQnpyWEGm5y4Dmn6xmgi7K6WJXJ69i1k7VgpoLjKx49Fgp",
  "key14": "5icfQifAzyMDpXxs3HXyvu2Rqt2MWTUWMwz7NxByh2UCifLZ6HvZHXR8mLMjnd72nSq69tByJ67r2QnKCQKypUBe",
  "key15": "3jqkYh8uXmRdEE7g6ZYb7EAWeu2rZEJFifvmvtSRhUPaxxdDrApzwTWdJmHzPFYu4NZTRqZfuCWT4kVnNQ9bJ1xi",
  "key16": "5KbUVPRTKAf8UrHTizm42B2sySmuwTtoYTUDtMBs62F1JqrCHP1TKYgVHnPM9aK42taqGvT2jtxcgc7H9XY3oSh8",
  "key17": "4Fm4rpQSjAwS5TdMuj7ZDxqDgtjxp1DuLBZCAMGcmQCyo8RtMYqkUwnuntq76hexH186ycKWK9c2tiTdHfTfFAH8",
  "key18": "4c5jVEjHv4EXpxEcib2DMBHB2uX378cFt3orFL7pua1Rk4nDUwgY9jYRYD9WvCE3D1AQGXQZ6WVHYq1mimkGKZPe",
  "key19": "QwopD8QEfGZFaSki5fTVgv5qdonak3ts7x34yDgbdLZFTgvutYbTTtdPmDaeQyaDcm546aHC4JM2697A5tujfX5",
  "key20": "4FuDcBe8xGE8qbqAD1AwSZ2funxe3QpHBh1Ty7jNeUsZuB5jeUEDortfN4kByUmbmA9wXXGjs59YPmdCEU9fcUEB",
  "key21": "j9hLQppPjWEL4ZKVJEm3yYJc1Tg82vdribL34rgqRe1fs9bz1YWTdMbwotCqe7hHPbp3o7MgUJd8Az7wzg9oP5N",
  "key22": "26d43Fkhb5XHGCBHaKCUPfB9YC6BSMxDpSZdDgrBToxvNsgjwzmcuFiXbmLAQUsA88BCrHEQ9RT3TmxfE1BG3kFx",
  "key23": "5Q1RcBKUYKucunKrdbDGdrxCbhwfJWENU8wgtxQaqxhcxb483aoqJonmEFjCCBir5Nz5QYGoXF5BNAButzJSBZg9",
  "key24": "qK8pXUXHc7uk889o1x49q4HKgostXAZgN2ba18RHW3AnVxuN15yQ3fEq9soiiRdKToHXCrAFSMGLrHEeyomW3Y8",
  "key25": "2oaiRcAa3nTb53E7oqTKLdYWD1KEfYb2hegnvxUcAz1dV1mn5MsmWkFXbMD61gzEBhZ6NgZxYSqNsmaq6qTkLc83",
  "key26": "4RWfQCWFdeFxCrpDYsVuXm7pL9hya7uy83H9Gctr9RkzK3Vg6KWXoaj4kqtBQG4NmJeAns2AfkA6XFPNww7b3Yj6",
  "key27": "52wdjwCWf42xX5gbnixrbePGisSPWPoNsDbauV28iEBsChzUCRebjsE3SNva5HhJtntCDuGBvaSZBdXM12MeVh4c",
  "key28": "8UAkFjmWaWKrmZqqB7VC5aXoKvWKUx5gFLyouxxs4paSGsM3oH25sKeA33764c79wrD5jPnmq7KySQdsZsShnzN",
  "key29": "3eg6r9esVX2TYQDWJEjRGVZJMvBJdBhiFo21jQ1qqVZC1ie8YxZee2tLSLxxrdZA3dQKR9F8wnCZ6vYfhNXTj8mz",
  "key30": "3c4rNY3JzvgTPhqQq6bXn4orTr5UfPVDPjizw71ttQbQmAx9wAeyQTAfNYrjuvVCVUbcuT1o1etndxpQ9HNCtbfJ",
  "key31": "2K3t7ZURfsQVGqkyUqCeUzj5qHJLWkRaKsCL5nhxtQtq8r225TQuzaLPyrpsbYFVJ392ieiXvkh7MRN6fgHw6Dpv",
  "key32": "2b4LwxiLqDxJRWRo225rP8Fy7NnG7PA6fS7u8mBfWZnWczNngW76DQjGp1TR24kM8KcdAyhFq1EVdf2dBxU52HJB",
  "key33": "4JHUZnLWKUG6Sik77PZpr2KttD2rTQznfbtp7h5Mo4wjHNehyd7NqmYD7FgLyPtFHQfpKerzPaNrTPnu2rycJcnU",
  "key34": "NcSHBi6LLGA3DiQBTV7wWaooVhWsg8nPdrXo8tbdXeqma65a74rKvd2hhZxawtdvmwPWrjTfKNhKXMKooeQN67M",
  "key35": "5M5HCNGRBHFyiBckVSuuBP3SYcsrRheDNKHCrRphPX31tiXhGJ1Wfd67HSNRqVmVwDA8Tq2nfD319apQYSrGZ7gM",
  "key36": "5VcpmXRX12YStcetPE5s6JnqLkAnF6QWgFWYPAwACNjT88vsmtzsKH7yzQusDCBGanYSc5yHcsay9c227BBjPrDb",
  "key37": "e1vkgZN8GwdQCuodPwUDKUmaZhAFGUiFYQfUsrYcV4m6CfMxvFTj3wrJY5KQ1rKeSK98RxRYZDTC3UCaohybuk4",
  "key38": "2HdFGVb4oogEhPbduua1Q8NAv4wKjNkqcmEvf8TRQFZWgXtnhqCAmtFDVnuj3zeDAGW8ipQCCcYVEibVD66M9UEr",
  "key39": "5BjMAWuDdhYigCj93C66XqQX7rEGxWJPoTT5aS1sjxVGDsU2TQcRhwTamDoF47Yd1qTBJT1Zpz1ig1vNVw398LLF",
  "key40": "vjYCJvzhJH8s5TwDQCqdziZkZdcP2V9ZbofCABEwUosCeJikwEzzjYmoZqho7eipCSttopbscFce9ewR8W7fsJV",
  "key41": "45pFd5YEJ3bondUg661sUqVq5qRjM68xJJx4DCkBv7sjdXubC7kXtcZnbSH1x6B5RHD18uy8yyfZsriKVQg6Vuiw",
  "key42": "5G8ss27RYLxprfYqafW4Hxs3wDLLzTnv1EqtYmb7LWELh5QboW2GzchMNrptspQ2AGQF4RWR1cbdcRUfXNiv6Ym4",
  "key43": "5KzL5j5YeJUqBH6Es3zbNCsKo2xvxr9vE38EbPyYxKRW2893E16wQm2gjyYzy5V2ttiaviuncSpXhGnKjTkr26kr",
  "key44": "5A5UwHoYPGkZdEPWasEPT7fwZMTrjBfPGfi1ksj8zZhRu7bKeKCv5fZttmh9XUTdkApL7e7JcZAc1ktQ3VATiNk5",
  "key45": "2GSgGnDV4AMZtpVzzfTRxrZWFTXBqDjf4uqXry3zH1Cj8MtZfbo5sHAjPh7wLFfMWrGEnhha1xDHuR5emBxXsqgY",
  "key46": "2b1oECznE3eEZppz1eVh4yQffWZNVQKvwmoxFaHF7A265i8o4VKnQrVWrnqr4ZFbfkFeGWtTkixDd3N7i6kNFjtD",
  "key47": "2L3vzMLphXARrJHWn1TGt5cnte6a3TEah2RMgn8SXQDM9xZn8M83Pktjfq3oXRgGDof6sbfLmEYpnW83nZ8WhroB"
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
