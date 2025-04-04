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
    "w1N2Ct2z3HbJdQ6LQ4Z8cYiBco7YRsct8Ht4gDkDz8MbWjcaNuXThiJXuTVXXTa2uQjrVi3gqTuPpb4vDUn7i1v"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "taYkNqHbLC9siJDajjgGS5ndrBTh9S8zfQHV2LybKJcHGYo5GUcT1PJc9A6CeVnWMWC6xpHV2octzsg8NaW1SHi",
  "key1": "2Juy6dwR1R36tNouiVBqYvDyf9o1kuMjVpxj1xjLk5DYkhLUgML9gVot5KqugPxwN8ERaX5PefCQnGsEwwiVnXEj",
  "key2": "4MjUSMohzHe7aPqXdBYCF2ypZLbFgF67zgayWksgpyZcfYGp3vp8nNk31ETBV5TkxHjuttmPaPFGeVyjXRkye4C6",
  "key3": "52qMNiuUWSM7Ps68vxdDtVHerA5jr2Rz7YtjJ1iVWRrdcTxHNJisQc96p3quTUzq3ppBhdej6BUY19JNgp44f4Vm",
  "key4": "5sQ1wj8F1LhvyTvg44Yg1z66g9G93LjdZSpN3bD3pFQ8J4y9s6dDXcFA81nw2usnLsTVNcCaEidLBC79VGtap5NR",
  "key5": "5gRHWG74HcbLr2bzHQM6C1WXsWZB7cZXd3tkMPHaHoG8v4Ed1nsPJF2kwMFTpZ4qts9YgbnjweC6TJyFqanBGFT1",
  "key6": "26KJJ91dVU8oVbeWdXcunCkLgDbTup4NUbfBU5sR1MduprmRS9f2isbLSttibb44WNUn1BjeDceW8c67yYq9P2KG",
  "key7": "5zxzT67gkuSadvQeyacQAvpM6SKQpYhxtTSwk5KQXCcZ4NrsvMuQ4wFsjWgMf22umgmCLYxPmEpmkshDp9ePeA8V",
  "key8": "4s988UURDvXK7eCcEqZ4jWaNZSKz94Y4CKfG7vrfpHYYa4KvZD82xqcz1A11ckL9tUFFt9MEDMEa3y19z5kBKWkv",
  "key9": "41x85j31x7C4Ltr2bDptzM9qWzxgGAaADPpaY9nM8fPFqFLSLH3CMYyvRYKtsWaot85Aqrfdo8rchWrh9vuzpvd2",
  "key10": "5RLjfTuVbwoGXobbFCoiJcQgx5WDYce1cs79NGKff7cG5tDWBGwRRVR1ifjswzwhJsBboxCFkyzyFvKfrg2oYhEG",
  "key11": "3HrXzrxEjSMKYjL51szhwYDM7aLrH2eJDcBL9KLQXyAxZakRTBpJAMbUBfQJAFgfq4n17BBW4odpKAYvPDhVPnyt",
  "key12": "4fmzjajszBKXjTYBu7TZ5jPWQK3Pyi3hoT67fR4yXzzD6t5YC5katz4opjk5XmyzBPe1uJMyapn6FfmXhxzrQpQb",
  "key13": "4kNpLrbufxrybr3J1Y3FHfKNwEuB2529VRQ7pskyWujMCSqtzM2wykyNix1hbVaU4wSTFLy2uUvApyuwGgmZaGqh",
  "key14": "29ge8ifzo3khdFey5MrLA8CMzS2GUYXPXipgCHavNgLXSASd63kH8RxFN6CdddofSca5rzqxT1NouCY6DqRqXXiW",
  "key15": "57uVMUnXhHYo9de6KeT12WAZqByCttx8bp7uvB8Tb9rWGxpRTtkVuLd8jbsTHzgMefRkGH8C87TvjkS6a8eGNdrk",
  "key16": "4Jo7kZ86cR7GZzc5U1Ho1o3M3Xzz6ey8wmtNRF6PRtxhysyW2KZKLDZ6EEVQps7hgu6Fvi1o2z1WmDEaKTfvFv1j",
  "key17": "5SQeatXYrexxuKviFEH6UksVDtdMqp5EfcaxDvAgdfKKcsvLvNW76U9uX5WriVDYaagaeua9JTEg58iYvN4izFfE",
  "key18": "2eoZLCPTf5xJnMMhRjk5CGUmR726UsnHBamZdeft4x5HjDuhySE7kkFCYdjtTrbQVddefnNpJN3WibtVhrwWArpH",
  "key19": "2Sd9UUK6iVzpPAJ1rV4dDHoMpLvfmFvJ6MRgQk5R69MEv4GtHCYKT66EBF1UbioyGndQ4DeCdZf8qQW8z6xT8EaL",
  "key20": "2AR5uKqpFvDanf9hYxfGfSDShQzSFRoQfkNCufupJ3mRfBkoYJqL8FXfLz5j7XZPao4fFBzixUC5sJPqa62gLDxd",
  "key21": "4DGgFsRbv9bCjVaKaLqqYxT2K9K3EZwL2XBSoog5zkKn8i8zSKCh7p9kck8RPaRBK85uWVSvXANXhyQH5PekDB6F",
  "key22": "2suqE5vNPm8BcuEz88XwhKLmXDYfuTanEUGSznQMwkFSs6NNhr7UQNmYkXgF6ZNd8XPkJbRvn9W8EnDup8et8dB9",
  "key23": "3FMKwHHSxYr7a86869LLtkf1iqqe8k4jJFFyQpNR9cWfocGwPVsrJ84tUJqLDhKyWxaKZW3sSBRVi5c53HaFBvJk",
  "key24": "41MYF66U9iBXTT4mH5BzaiRaByxYQGsWvQEkDgMcVkUCmkpEUq42RCBeHKVJYcqAdyZJg92deQymcpxUNij5Hjvq",
  "key25": "217PHVEt7kzd3NcDKWZwzCWSx1YezTzZNJgQjF3mEWcaCpVbFQ5ebq61dRRomeY2JzLyuMPnu8AQfF8JFUSpohaZ",
  "key26": "49NxvSi8UK5Fg5wPm9y43fwnFtTM4KEmzPbfPQAPhQafQWNztm1iyUruRSg4KxTheAHZaU26wzzoR122qDCzBXzQ",
  "key27": "4RWzuH3HmfRc534RYxpeCnsLXpjc4kee8hq1XDkpHBuwJpj9t9S8CgyxLdgaFLkPAaBmBjgoC6Vfo3pitH4ashaT",
  "key28": "3MbTb9zwsypwDznyu9LjEFA3kNJRBvLN9vRh81KhxbxkGMfWyF1yBL2YTRdpbr4VfAAJyg53UrCRXqAwNxZUuJ7R",
  "key29": "4S6o859TGatXsEAKGTXz7yoZUCEDrD8cfptJUThWGj1o4GY9F96DDonpopbwCU1PHcjkv8gkqTum1uCR7gBuXq4",
  "key30": "1aAX4QcBifm2xGvfQipRdSv6wUXfzsWVadf7ttAXnLgK1MtFahZ7MaHeHGzpYMcJ39bKhztDqVTvj1r2LYL3cty",
  "key31": "4hrZL7PP2JiHD7qapYvsfMSPiSdUxUUJiygjP3JYeqCcwNwZTqwkgx8VrarPkuSnnBvFfzE5qeDnK4MQWTxfod23",
  "key32": "4poompsNLfRSD7hLogueftd1kNo9fBQ4Yn1g6iAPvunWdSFbH7oERbiQLQQRm8qjxWc8BPU6cdVKW66gCq4Kpw8D"
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
