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
    "5JGJB57c7exw3Cm7Xg1rH4NXPE8oMcB3LTgtwcpMD7Nt7FQTx48ezSwj3RXKWYpcJTcVpv1Sa9KUTcDrBhgbbnRu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5gvXuVbPLG2oCCAXdwxhPyjWP3rkjKNGxQDJ54nMJhkAnBgMp48apKSETzWtvabWC7f3CtRKNknN5Ym69BvKCGuD",
  "key1": "2m1wRkzwnFbxHBdZVdUCMkPeCDeCAdotzo3NJE4jUVk1pUL4AHAHCEwYVL2kmfBnsiSm6x7UFgXVsCWPiLyheJQQ",
  "key2": "45MFgwm45um14VBuAQK5MnH9puRcA4QLjwKGC8kbNFW2fkFrKnakag6YaGHXvsy55QC8hZScTzXmpXE735yQPcSR",
  "key3": "5Dznnrs2hrdSoQhpje45xnhdhoH9YyRu2rPzYLs8vN92EE1FQ4iGRhUK9vbiRwmMD7XvEoEpaxzh3USFmN6d6BQn",
  "key4": "2617QjhvTYUhYeYBR2fs1rJaETiLUvY4A7mjcFNVevErDs5VvpdMGEFjUFVbtttUzgYY7Fcd3Viu9iBCz4rnKGu3",
  "key5": "4Mq8eQM3bkujxi17TWgdxpX7rpHEnGVsG32upEZuWnRLX26HSWzs9X6WUeBs2ARpde2i3g1a2hW64URiMCpQGoTh",
  "key6": "v6VmvT9pkLjGczBirR6zVQ3btYscMKsYC5bBpmjMyk5hmT4SCJ2XpePsHwG142MKq3AZTsohwi7E31s1C6btBYQ",
  "key7": "32Jryq6qn8J79635VzR4fKVqhUwEmBHbW6bUu9j7DvdKPfyKMssFWSvwgQaW2pDsQCYjmeMKna92TeCsF4zDdFjq",
  "key8": "4qXKDYwpj4zmiPHRbhucL6NoKCWEt616camJ3yxeuMWS6ZYBy7wwqKDdGSJ9BHcPTexQPrWADiuHUpSBRyMTkatm",
  "key9": "thHgcYWT6s1gNfz3rdEYuo5W8BCf47fwiXCMwFtLfeBD6Vcn3JaJB7XFL3tLJDdjP8hnnq6YKLMzDPXRkRZWLBF",
  "key10": "3oznPEwfy4AMukZe7goF9czsBaAnHjn2KpoPueCUg5WzHu2pUKCQ5t4dzRECMiuGgPwfvhL7zWnbRCcZ8FJHmc2v",
  "key11": "dK7S9EhzZNzKisCc4ujYDUfsYXSFkFhPRviBn33qskrUAdSXy2g8LBKndGvY5pwbw96jbMq13H5k1RAM4GryVBC",
  "key12": "3jUGzwckmMkNx5xhCNZ46dLc8CahSVVAgvjjr5zmkipYeCu3x7eQf37ADh1zwt6QHz21oNoGy2xG1R45VMGVGXHq",
  "key13": "4LFe2Lo5kVUzYhKkUFUWbwXhLFZ8C1Vy2cBxfkmBa3JK2VFtqtFG685zsoDhXvfspLyTRN4Us2Aeeb118fwREFkm",
  "key14": "3WZWTNZWavBgA6iz1nxJcwJtEJQPRurR3vWAK37DB8MfuxrkXmbNvFESz8NwhufJHEHoCqK5c4RAmU4WzMEZVbJx",
  "key15": "3dafoVsxks4rcp1yLDqFWEFYmW54dFSjcGpZMVJuTZoEPDmjqk5qL4Q7bYcCB2o34rE1RwXiuNdwk6L3jrN1k2TR",
  "key16": "5NLZwJ8uan1xj4URhgasD3BkKCWh5UAXY52c5KzuCRMNioy3UYYqiUVQApajvuZKYZEDyTYkV1dcUFSBg8xibhZy",
  "key17": "5sHtCxGs8LVF9PWU92dk28FNY7f4CKN97RAZoE7eVEtxevDVah6NnkT7EZZi6Fj9Ryh3D18wzwBtAuGYZ5FgMwtk",
  "key18": "HwBw9tst7hzsYhfb8ogRRx2Vv4PttsVNBoprxmpeADGzb1Zf4eZSGtP6yju98PzZitAeWV18Un4gTwpSYzTgyAw",
  "key19": "56YS5GWA76eedKVejXTY7RQbBVrpGs8kByPb16PcVbVzbcKvJ9nRvqzX89stYuUMqMTNi7igoaNTQDBsWFyeRv5q",
  "key20": "22qR4Vpk34gTsLQYiNVnqtX4ivgkr7cGpMej4P21NXg8Sw6DhtbhyKiqiLwz42kJDbMrsHESTBr5g3WTE4AQw5By",
  "key21": "5hKM7tyxpBfdGdgykKRRtUKbPzTQ5cZMfSh1YmAevzd3Ex347LbQUkHW9Cvoe9A88qaBtfLXB2f3bv4R2sUZnkfk",
  "key22": "5e61V6yWAyK3Qe3SUYda8RTwGrb4wo2Bc9DoG83mimjuZJccPwoLCgzQC2pFQHftrPR7CsomHxHyjgSo9ENsy3t1",
  "key23": "4qD2rRPokj4D5bhVV3ydNmP3RZnu2U7JPww47osWWhT7rQ4VZephS4Cr4czzknmUBAi3rvcjqCHPaCfvcaQmikc8",
  "key24": "2hVzPTN51KCnnW4Dwsqa76UnU7uPmhotmNndPyEoVaUPg8m5TQiADKLri9D5ChBFMtij4UZvfkd5ZmYjnrSQmFUM",
  "key25": "2t9Jh8qsziqYVtFLDQHxHfpbXPbsukM6o6RfVGVPqYCScLv68e1Pw7yRFsyUbHBN8ytzLuNsZmanJ3fQQvfsn59w",
  "key26": "57tWhQwXFAmhQDiEHyrPFtgJKthoyzWhcUnBYdVA8o3Mj4kUuEi49uGf19HWmGym7Uwi4YzvhiWCrbaqXfkjsmpP",
  "key27": "ZuhFsCoveycGgbhJKQurnWC6fYNKc82u9rKSg5iDhBPcCWtZBx3BMyW2aXwihJHbYnYQUbgnW4nKujEmNhpBvLi",
  "key28": "2gKfiDFdHxQxGobpU41vGV5PCxAG56hnbwYY4vxrMbbJCodEY5mK1bBEdCbSkE59h2icJ5SywLaHgaCzydQ3iPzS",
  "key29": "YErToo28vQ7LnkeZ5W6A9R4AnERKuTW16gES7iT9BzuinQehqhjhNiYTtdNkGyE8bvgQ5nYviLDCPbMZyWTnceE",
  "key30": "4i5mTC3oom5xBSw2XgbPTbr8F4rPz4PH5tEtEGQ5Fvq1CR2V6zmwDgXrjjgcNVP9WWCnc46gKTzvnB9sh1YtMh9B"
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
