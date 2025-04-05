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
    "3iFT7opi6SNTuLXdcSBTvuwQXVxgwgdXZgBq6KFCUpbqzQaLMFFMWbLCRUnsPbxPVn2iTNZ66RD38mKUxbNdPDPz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3B7DhwCJ6ziYedtKXQPdT3q6ri1F5WXNALiD45q8vum4K5NQeqDfKyaddUyJLhhvUN9mT2sNYtj6ZTuXm26JfGmv",
  "key1": "37vxiewXBjCiKDBA5kUm573xuZjywHoSvA8dUY1LLyHGGdBJf9Bc8NRogix2evbAEMkAdDzoLWfEYYQdSMgyjK47",
  "key2": "2UGJw2xyiKGGbg96zV7EoN3RFE7UbAqaWJZGsKZGE9bjasm1QoSN37LRvM22mHqtzPu89iyTXQfxE47rWAqci7fF",
  "key3": "yAo1yc3yrU9DPLkkBZRXy6s39Kisc4ahVqsXhQTxmzvaEkjcuedCChMQcS4xain8xeiV5pRMM77BxXzGSfhxq6x",
  "key4": "2sgeNRzbLCbHKCwzKnDA35cYQoxuu9yi3rBwZNNNL4FUs8zZNy7KXY89qZGmGZocijyXem3XtXpYnqZvSHdrqyg3",
  "key5": "2UdD2cVick32iHhbovrGzmwSSdfics7oce4K7A8FnrnXVXJgwruyqqSafhNBLBmptB98qvHxjbemr1m3TENKn6bR",
  "key6": "45ucdvaWNBfgvq7yk5KPp6NdA1Gfh2LD2hU1G7XaBxTzYieJUip2reQEoyQWZEZ5j4v5hFFBzhBnzVYbGsG1bUM9",
  "key7": "3GrKNLPvzmeAC4DFjnXwccr5Ezoo37VSBCYEnAfmVAiSbrWSvHq8Zy7S8meZrCBgR1kM3jfxQLKZr6DVXmvuW2n1",
  "key8": "363GqdLpEu83tMhxJ7BLDcSXvLAeWTcbR7BWesSFixm5PFsJxGq6ystqBwAR16upqjfa25cpzMNdgxR8rDJqWbzt",
  "key9": "2Xds6dey2cJQ28FFENVDwfH1H3pdQiquGtBX9oaoyr7mihWiHcTbaeqaqo33ZMyzuQEU8bxK44K1zkhhTkQ76Jzm",
  "key10": "4ubghPYx6rvnFZMUPErC6qehi2G5WxvjqsgLcX2mrKHo4imHcjJPHfxT3QP3FFVGSLbqbA86Gnn9VL53VAPXwPUt",
  "key11": "2AJUB3DkFnUnPoyrEftueFZEewtUPfiijo3S21xm6bNjMTKzT16eW9rSmWhZiQReRvj1sxpme3PVcvMJvUBBZdqT",
  "key12": "5Kkb1fmK946pXG16Pv3iDuM8WerdjZkoPd2ERZ4DWZjTSvAZYEGBL2UVWYVo1hSBsXALZVcfbJgQxGGUVmof4Mw5",
  "key13": "62AjDfyYqG4aR1qJWNQp9cnHn3Lcu3GcKNSSKoBbmQh3B4j83cwqij2U87gwaDzjM6ipGceWNeNREKjrWvtEnmFM",
  "key14": "2aZp9jMzFfGznsbTKkTVYZK8gRL2GVcaf8saGh6VPUr1NhfHWrSXvSEVTSeKpdz19ZwgNuzNLdyDsp97Y279PXTB",
  "key15": "3TFiiE3Vxruqi7E61g2BPCR7pQyC1VZYuaB7KXAnD7GoyGLJXsSbvnGouEhmDd8SXcgMR74jd5mUUsGcWTPC9xV8",
  "key16": "hM3otjWN1McyAGWMRBURXc1mwcb6PTriytPJ25urprmJ94nyFJp3x6TB2eFvSTnWfFrBhPpBjT5437uotSdaWKj",
  "key17": "U6LoKo3HqawFAGMwRAmDuZifVCPH3HGodBNpPqcLkxuzfH6fMgFdWNNpzkVjPTdoXqDuNyY2kDGB38NArCJCK6R",
  "key18": "3gbFEnGmBr7pgWRAspFLEM7AH2bbWX8owgR6BKCcNZm442zPiqAgR3YuiTS5QpTSeAbDpocvLQXQ3zFqbkN5NGCH",
  "key19": "3UAru3cYm6UkBBB2f5u78f2puKhMayLUzmV6X3oxogoGqJj4YMpRi9gotXAjwMz5AuusT1RSedq1k66Cn5KZvYut",
  "key20": "3QCHvsv8YDxNsXbo8LZVth1e6swMNqtMJsKS9fg9MiQXWC1cRdg8UnNGzFzi7WovNUFvrkqLBGjmxuZcpGgMEW83",
  "key21": "3mYgbVP5V9p2uSxHqwjniPRfmiM6gf9nBZ5gv1D2zJ3HEQkMqLp1s2BbRJT89tbSUy24GGbXTThEf9pbEYgUa4ew",
  "key22": "bRD1rbpYwPZHo6hwP4njYerNMh6f7w1tdZ2EwFfrbyCiGtpxAzvZwyF8sKVWeEKYy1xVtnssqWWYziuTvQJg6gx",
  "key23": "3aDH6nTF3SM1N9QQjPi7P4Aqas5Mzjmzk8NhRgNkf27KXzrDmf5qkLbE9Fqz7s9duhggzJK12i7ZpLurya2DDjXS",
  "key24": "4frfsoWYgqAebqVgACtvNBxiNrpruTmA7ib7xRzhSmAVKnAtpNnBpfUMZdAmo6F1bLRndmM6yNP5pwe1XdSupjSQ",
  "key25": "26Fe7iCeixEjvb7MhTrN81t9WGVS8vjMAsuujxBg5nuGf5hh7WyHyeddMytnAgrdeY2bdPxXiLjg77pEMq5baESr",
  "key26": "48pNg5t79j3F1DvSwrxbF3jgcQUXwFKj2RBeUezJMkVjXqXJEZyVRvW67VZL6SADJKwL3CPz8jo1iecHkPzuGuZB",
  "key27": "4ZsnoV97Mk4wWoAmRgVkzjQSWVqm8uEETjLUcBfq6LpUKUQwgHHCQ5jaX9j93kYVnHh3jHMQogk8DXzPSiUbjn1f",
  "key28": "44zT51WyJB6TyzTAeW6kYRGL7pKj6CbJJywzGWNj2NwB8mVN2ARfkZyJUmuQ8jKxmcYAn1Zixqo4GioKc1Wqat43",
  "key29": "4ir1cQZVFWWo3G8xRTNF75TgcxUi79HzF1bHUbfYqetWgsExhX67ETewt47HCpyXv6w467bGf4SskXzf4gvuSB5g",
  "key30": "48D7uhVWBuK5vS8NtD4W1egRJ9RhtyhtSr7j7ULzDU2usYZAQs1XJ41n9NXLfBkwsHeAvzWLMyETVYYYsEofP5YN"
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
