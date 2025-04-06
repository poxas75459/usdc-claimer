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
    "2gLYgWPpcDAh59TMFtyhnWbnmmhtCXbvvCz2PpKBSAEoPPxNjmMvkDuNAT8Nc4axZyH1TvAyJbYbRezG7J2pTjPm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2DYi9TApZRpdycjHFgM6j1mxotZ51vUVuXbTWNRgU1xWa2uMcy9dkncDcnoGNAgajNaQ7XTeWsFcVuroCy1w4MA9",
  "key1": "56tkUxDwTYDRCrQ9BUUdpVEtZUzCAcMro9vSPiKPeDzjTWoZszTfcB71ZtdRdVKmDXgkUfWXSnNAKrEz2f6rzjTY",
  "key2": "2LzeoqBuGA8BCiiAFdsvJdSVVHD4bvQ75n2GLmWNG2SwyUzvtxXfwXpQoZSAtwGnjccggr1ySpoYRvEDTHFVWScE",
  "key3": "4ME7jePBMLVu3e45EhTVUBjwocKZpqX6P5ZgCTKXwGYr12DkmTfUKNEnGBvkYCPBVkevgrUpwQhffrbL9kbK9Gw1",
  "key4": "4UJbyCSUfj7hWrgtGuDqByFsUG1RjTrQUPWweqxtyvpx5cxT4NPrShaEQXk7VRUek6aA4ifeadV1zMMhSHdtGx6H",
  "key5": "2gWoefQrFm3CAMkRAj1vYNVqHKd272bb55NK1GHFSS3f79kR6vqfNj4qUF3wULXsZp9Nyq4R1BzBiAXRmPpsEseH",
  "key6": "2Bnex98uyMSnWQhqgiwBUufFdjUwux8NtTJGjjaSpYpyJTm5wEnE2hFkbfUdob6yC4j4pJfZxyP8Nm7n47eADsSp",
  "key7": "Tqfi7bXrKUxJVn33cfhWpHkT7ZusKPYrYtqkbjnhdMGhuF8EzzZHShDfyWBgXi1nSaztnidwN3S8S8S8vbzjXTj",
  "key8": "33xenkWvuXvFJnooUWaN747cAiqDKr5ZEbdRHDx4icnaXwx9dpJtyDMwTCfZ7Zuc3HP9DqaG9P8UQxmyzYarXfAX",
  "key9": "3DeAuAPoMBzY8Z8Q6uGDth7sDzCKsf6QRnn1weKF412kHkEfmVvR4hgPruDEMb8hc2FCSTzrnCgi57dyrW9xMJ7Z",
  "key10": "2k3NA3uYbNsBGLWSkccaJ9bSapuxpUR1EHQXPDcDcLCcF9T9yHEZXv3FEFGhSwzUqDQYhb9BPNnptkRVwVhZGPcy",
  "key11": "2RSmdidQPGPxrsRuxoa2JoV6ygRt5YvwcDDuzkSKPLREnpXqRRCp7FcVy7gEq97A2xShETUo1uAdoPybs6TACzD7",
  "key12": "2ekQESYhgMf2mUFXsLZDWj9FCkzDHxXJ52Lk3hMstnfyxQNne9xxdnLsjJBtcJyEhtn5tAQ4XpoBgzKBLU3hfvi8",
  "key13": "ZyK8fd3kcacEYvZkFxjf8U9hqLZBmQq6av2zd46e8iLw9r42HEB4GD8K1AXUhnb88XrdQR7ZsvNgSLfiykUMwmG",
  "key14": "29kGrUsKs818MdzKhemsx49nS6rt1pCZWQkzBm8f588uEYGHrmoarQbVYTC6CsXYzYkSMNi19MktVsM3q53Bt2ya",
  "key15": "VvXiQjcJs3DLfStetnR7GGSev5Q1J7E7E2yb5caPurtHDDCVWVNLTaG3CeTSKH6Rs3ampUZtJJgPZQcQiZrnRvh",
  "key16": "3D6hdkEmn29Ca5MvTH3r1DLM5KDxMaQphXbv58PEzxUUwfaMHgQNRzT2wiYWgkyA4xBSzfCRLautyhxTrDgabS2T",
  "key17": "2YHqzQe1y2TeNXjUh1KKo8DjJSocCoUNLfLno4oEs5joaTMCiJ9LLpvjPSX2NKfkHXpuqoPEAfHBqkPT1kzTybK",
  "key18": "3Sz5e9VW79LtRScsmb39HEQUkFr4Gzwbz475AC8DUa9kvCKcVSNDzBZhQhiRxLxb8GJf9pr8kkL9qV7SVaada983",
  "key19": "56uxKTXKspLSB4tgfgdspzTjwmJM6u5Ut2CmgoULrvzw7LW5fbFXG8Bb9ACugTNJbwqi6GBp2LgC3YXAyfSb7RVY",
  "key20": "33dD1BGWcaqxfMj4KPNAYu5tqa4QRV2S6ygnWwbwZ4rVnNdFJw1AS4j9MytAEMrmkdk6sZ6ExS3BttXPs253BRCG",
  "key21": "5R958338sZtpivbe7oYxhJyNiVsS9MB3i5gxHUNnQqf4BtDgKmubqSp5dLqeVJ2eWMc6SG5NyX4XVbKQg48A6y6c",
  "key22": "49BBS8s2xFnk1WztMe4MedGZDae9zSkHZ1KNx7nZXojMfQ8AmRRtJhd9X2hkmyyBzVMQfnQGBG7uPYdxvCBeTLUJ",
  "key23": "5s8m8wnrGiEU1qc8ofRpNeUZq6T3wpubm3U9xeJdinHT2axRuvEy3UNRXTtABTpPBKSHpnMzDGx1to8mhQXcAuJo",
  "key24": "4LwASLofUqS5C6joUvAmf696RUxQYYEexMRpLWJXsgFf7x6f3jT4ANrAjWzKSZ7PENiPD54R73LKbJrTYM9PbUEy",
  "key25": "55nXxqaBq7vqJGzYTxnZ9ZpYTVDvLk5JXwxoeDoeuA3pCpBQ9NP9RqfgHRY5vbP5gsRq47S2aBxEhFNdnDvihbro",
  "key26": "2Sd7ZeBqy1Sgw7MAfaAMaY8maCGiUKnBftvNVUcQrUsZcPp5YgPP9NJSaNxiDjNMvECRUuPRkperptRenX2ngNB7",
  "key27": "54VgFFC8kQDN17q95gBVhd7mwwYTGMM5Rasuy3gLdQsyUm1MjHr7eVETwRUGT3KWKb9h4kncFJHDY16WDtPXjqa8",
  "key28": "N9fmABukD6Hb8H4aVGabuFCadhgvXrJHw27FNh6ht9Tm5cpvX3XH59gbhfdrf1bCKL7csXNuMuAeQKGgvQuQjH6",
  "key29": "5MWhsEguknTAoYLnMtNn9TjK3xrizPUe54JU1etQSrfQooLTks1R4syaTRRLCvCNvbTN7HX2y8u6WwAon6nC2WnH",
  "key30": "3VNKEh44kVY9mWfCjcESgpm472UPH61WHkbn8AUVbsQcJSFwHLZZnvSWj8N1yGthn4JzhYMosNhEVcYtLme2PYGn",
  "key31": "3WdEzVQoYLzUMmVp945BT8DqvvUY5Z974X29mGAbi75UuVFE54dGHYNAQMZ9pnvi7A3xoRrwxZNZXiXZtMSqhyLw",
  "key32": "5e4cieTKqiZReSxZQgmRGBU1i3F6kVqCtcaEVcf7MA17vTrQcoohaB4peZLxvA6x7NUYKp4tY968Rp3qRfstFDdS",
  "key33": "5anTkkkiH4G6Q5n8Mktnkc5NJVBmTR6YQFFCnCBnL1DHv4Do7j8VvcMXubxXm664fp6f3goTf93jhsmVwhPPYQ5k",
  "key34": "5jC4epw1mu6Q7JP6xQQLjtA6u82Xy1UjNs7Aw4pPYnJe7JBQH2TSWtVXJKyR1ihLkwTXnc8oaCHmhZRaPqYroGhx",
  "key35": "5iUaD7HyeLN69AoVUN6e6EJNGHddZ2ogSFrD56XR9aE3TKEdCLuh5R1SxkyyitJZj7bNzcYDU426qn82LB5TJ73j",
  "key36": "3KCHHtDwbDxaTkBsZkyrbudUVNiAjHMjFRAxT9Bs6PQn3rrTfPSfuQ8mEoJ2JfRKRsFY3nTFiuDZJRBp9x3sNBZn",
  "key37": "2ekb9Au6G7Z8VUBctF7FaonZBD7yFQA4Wn19kXCSkNtavuotdbFDMFyrPsCacCzrbZigg1wfrzA5E7YTqNndsHr3",
  "key38": "5Y6nnbiMAQwpHHx1xaB2LpivPwQ4c1BaiZUsnVefBwvoBR1f1MTnRFJAcCJN5Y8ZuuUrC76qRoM3axxs1nMs4sbb",
  "key39": "5Pbo3Lo5WmTGpZz1Se36JPprXxijjzED1gLFYwTiAQxkXNWeDJiYLe7jCQMM7XhfsvUAJQLJRXwkEU3wRYJhjbvC",
  "key40": "EsXZK2b33SGuJwzC9EzgYDTo7MZAwGQgYJ7y8DrbFKS7UfZnQpLHEXw71T8NbYnJJpRWuh9iAQ4DCwa8fsTYggi",
  "key41": "4oKtrMAef1GiQkj26ZDxid8pFCFFkU79sJghkf2QnnwGb59kC99jbaNJEPC9hTPpyTF2RV6Lhqck31YAtDRPqoRP",
  "key42": "5gYJG9Pd9du8NriSMUEJWe7NWqTpEFAwLqBAyYDp6ZPYSdD64PKcugYvHMv4ijiQwggCBLme29SJp2t2xGERd6V3",
  "key43": "2NoeiGaoPYbositUzQYkhYUJvAGS1ned65ejrdc2Cae7MLfxfJuYFHKQpnC855qmj2gLk2dgow69rSgfHCSaVJ4p",
  "key44": "25Fh3YgZ1uHEtRuCqc165NTTxpQMC14CoK6A4npWjwXszaAWF252oLdKYMhBDmGoK42KiroGUnGqJqZrVN4Wnw2q",
  "key45": "541hiUeU9o1XTZXULqKz6KmhDE8SSsMqqdihHy36vvjsSAWgzfQNpRqxmL9nft8crzChrbeZroRQEnKbMe2vqiSg",
  "key46": "1CTTVDuvPWsR5EokKDjBz2RBBbRp7potqSTvjnMNCMFEao2L46vYmtrTNL7NPHVUzRZrscQRqsV4YMH7LVNFESb",
  "key47": "4YTM9rF2ZhRuYVj36jovauirPZu32oWhMw2bvNwm7cPrNshzkkmN8TBryeccenowPG3BV1B4RpcX21Jq381MXRiJ"
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
