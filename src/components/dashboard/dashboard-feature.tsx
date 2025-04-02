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
    "391zEKHMd48EyRfZRcU8iRx21S95JFP4AuqaFDmhffebiXbR1NhFE8VcyiEaNvtbb2yXW54i5aVW9KqG1Kzsjcw8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3wCT8imw92UA5ELtS2Nh9kr1YkhkfRB3LuTXeR119QrZmXokLJ6VWmw5FTebJJaWdCX2rvNttLUXJaweWL7JMjPi",
  "key1": "4aeSRVZBYG31qPvbDsaojuy315dzmBinGttXVg8kzdch4drQsoaFJC7q227vqfsEg2YUviKnhYNtmuZ9hwZoC6kF",
  "key2": "3mQDxDUGRX6pBTi9Kt2EVZyDRAW86Y8H4pWhaww2RLctS4YDVoYiz2UEhknieQvjkpaAFSkiBQUZzTJPjjBQZ7nF",
  "key3": "3QC4XomGMiisDZtrRfHRjzSVoDnmzGPSTH6i1iNjrPr6jQwLVHW257qoX11BafUDYQ1Jd1xXiHELAdGMXJP37M9G",
  "key4": "3vFvWSqjhuoXktTvin43VGfSRgDn2vN57Q7XVwoLG38vf7y2LLykkhas9kJ3YqTGwQ2zHJtmYSEnffdFvu3yNm9v",
  "key5": "5HqXL1PaKbtKKPWpJsFNRyugu1spknva2LgRhSQz5dR55cgMCqUSWwuv2WejDAVGHg4WLmvA8vDzqcXwH24gTNnV",
  "key6": "4RJgQEeNuwwHAL7yF5hVkGfzHzMsqFkPBiV3fKZtyYV1ygLDZDwz589hoWm7fiAXrJNqpspTCTp6D1myhzyctcJ",
  "key7": "2RiBYrvhPrBWWDc16c8A23vir2bSPFE1S26rqD98FRq4rUMDzmAQgYDp7VA5gyTwaKHnSFfSxyG7nLaoRSPBCXNk",
  "key8": "2og8g7SKjdHVcPwN1q4kvCCaaW8rfiGMf45pJr1o6o3QhCrsQ4gAoVYXRXsR5BbfzFf43LnMMmmrbGjNwfpu6CV",
  "key9": "4WMGkXPaPBVfGU6KeN5XNbvnLJhkhSGJdPcc63g5mXcv2GNajTqrp7mbz3UtZ9eYhwcxvjJZRr9dU7Jw4q8SLvFn",
  "key10": "3jziyR9yCjtWXj7XFCqm92bzBCHMG45CJDRJqtFvE4kRXKJMZ3msYQnD1NbwhTF7Mw6qAX6EBPM6Dg2DQWQVbRsV",
  "key11": "5EHQDEXaBuHJjBhwCPvpepLYhRTK2jTU77Uskwc7vZrx3eECH9Zw8xpBB1wFePqnK5t77MPv8gFFQUwPB2sw4MVG",
  "key12": "5qB366GERSBpY27LDP9ofr53uSUaAGbLssV7WNAywyzu7mHHkiogB4mNB6FkNqSt7ZuAirxmJVopCnFh4vrTqSj8",
  "key13": "31Hh7FfKQVewHbjKfMfivmunqiHN7o535JR1W2DbWrBjoTbUYt6vuQRuHmKDv1L4niqMzqfZBMgJYSqZHb9MyWeT",
  "key14": "RvG7qMUjU5YEJ1rTTP7Y7WfTqBboVBGKRafdbN8EXiyuVs1jxYweEj4PeLa79kjBDmShj8vYD18oavaU4R3fcjw",
  "key15": "5VPaPPw3EKg5124zzJbxdy1V1MSTKxyr7YqMiHGUdPGi4UANFi6tcy9TXgZggqHRa3pKE1KAMh5chTDS4zSPAoCN",
  "key16": "4pTJheVdnLKJ448xKNiBD9nZqyC9PujdiWNgStjgea9wiqXv3gmnEgEVMZ89hLXZ6ud1FcVmjA2p9duyUPdFhqMs",
  "key17": "4bJ6J7F8zPDdrmGT95Ser5oGHCJkbNR1qPgDMq2giY4dRZt98hhLLw9uqqjyxx1dzhauoRh2gM4chVSSDM8tAiM2",
  "key18": "3VXyCF8paZfEVaSfTdywDXjyqbkQX2fgGg9tDeSWpzoxM9YeHoDqQiWP9u2jGbR8wn7jK24vVvt32EGYFdc7s3Yo",
  "key19": "5rpaeQ2fvBNmUBf8fw8kFgKCiXHAXxvQuAFAKCHeY4tx44aiGetKwisxYPShMa5cZ5GMDBEevBeGr4qt3xAEHsa3",
  "key20": "3h97RMJ6Gmt8WX3eCqsKnsPZjRHqjehTeEHZqUyebu8JCaBGyNJiuPFQ4BNicFTo5243QMK64yCCgQFJBhVznXz4",
  "key21": "Uqec8UTNSN7zbD2oJk2adt5V3mNqNtHaMJbDwJu7x99AbkM8n7TckivLidBMPTREdW7gnhrTHR7zPvRiyeLhRqi",
  "key22": "Qd6iCKnGKvSNaRmftk1RKGtyauKTxkqQMS7VPh2SwQZBTTwvN2c3cQnme6pcKiirUE4S1LfwQS5ZnYYaBdKvM6K",
  "key23": "gxAS4c9vrhHwYyh4DvNx7uAxQGxADJMiYceoY33NAZf32yXirpXqVmcba95fhEE23qwNgex5qtQaTzEhk3wMRkF",
  "key24": "3U84toLEmkgTvf78zd1bQ9B77vp6fqF2qFek85HXumL6qg8mSDE1iJ8LnTSLk6BUY6QrnMsUUbg9VsDJ3PE38meo",
  "key25": "3x6e4tX9SHuMXmkEsCUoSLo1eNYwtJxGzV1QKMi8uSHVfRz4u64wXAcvUZ4jdZQWpwum8fVcHsxyteNmeLaLfYq9",
  "key26": "5iEJWPU6ucvKVTZHXTabDnzkhsJ5Lzu88fNB66ob59XQ8zpA7f6kFMVKDz73We77vqhSdGakUiiMAR2z2bdZgmM5",
  "key27": "44uYzx593rXwy2mH8roqPBPuSTXRvHHxWW5Xj94rTsJnR9Psz4rdinopRiLDXDQ8cYBdd5WkUbz9oidM6cVQ9M1i",
  "key28": "4tVDQmoi2gkuxw29cXtN9xKDiduUnrzEvnNETD9rYAd2g8mvSMGa6W3yvEQ6KtW2kTooPCpi9vu6ixVdrbQfYM6i",
  "key29": "4L2dq5iPQog9nSrmU9JHS7Dx9hBs6UXMu2ETuPx7HBYp9nEmc6SezPKaz4L3FH6V8uGXTdMSP29VUUSysijP2Yzr",
  "key30": "QqDaeqVky7L1CdjawUc1st1Mfw5GuhiLuLaPUDo16FxHYmebR7Q3Rn3QgYuV9GKiEWUdYXF9U21XsE5N3T5We9b",
  "key31": "5Y8dsAA3BG6AZzj4jNwYoqPYMxfa1qnviUAY4EyLAPjBentCFDDtTRzVyq8kQEnod2RgEmwdYA3BmgMtaT4rNdUQ",
  "key32": "34Xz9MphVR4hYAB2Pa5cNwCMV3vjpVAj2giyp1GUjAdpTR14CAQzeppShgKbgB7ZK9WuxuTzFrKLxiHjNNq4fU7U",
  "key33": "5Tkcs7XWHJhQqYANTCDWFGm1WfkcNzD213t8V54R3R5dt7ptWA3QwYJMDrXZRjf3PFKVf3e2T5dt2ZxAqTTN3JQb",
  "key34": "FaRMYHPt2rG12LcbcCcwaDKquQECQBc8Qj97M3weiHkkWDYZ8NXdVzGwix9xuK4b6xuKD5WEDn633xCn8NV1crz",
  "key35": "2nyjfkJmSFBykmCYcqAaSoude6RZvZ5x5hySEYG1nEgVYGFjL7Ww6uc3LeBvsj8cGQEUg6v48rN3hrY24tvTGVFB",
  "key36": "5ybm4d8NNwsikVR79jQCPmdK32mWJFFYMKT6XbHxrygpVuA9gE1HQ8d2h4hQr3ddpHVLD4fDE2f1bzVWojL8rTup",
  "key37": "5KoankwwAnedVPgMJhBLQwBQ4BY3wVX1hyqBzfBoG4ThSMVA2ELGbnTKjssAqb7o9VfzBnqCdwVzryfPNj69MoZe",
  "key38": "5bBNLXzyGPNh4MVDw845kKfnpbmH4eD9f4ybHgZXYbuWDzTSB62u9dsVzoPVmybUKeAcfVZ1y5sGDJXyZpxknjCP",
  "key39": "26scPFjeozJ9taZzPYBq3EChhdcbJNeYgihvSy8vwkJyZhkxxcbcE6NHsUigurGSzkZy7jfmUX5z7XB4a6XWYVUQ",
  "key40": "Hm9Wf3aEoJV4gPpiS4o5eAXggTBWMhDdHUDHHjWfF6DB2qCpCMoq3pgkascnbq8Ke1Cftu1iMib1jSxDhHV2wEE",
  "key41": "5vitYetLx2Xw7wRJFzsU1sJYq1mBXUCvnx53HrPc3amgxaFn9Gtjcek23TGXnBWhcryrxJkhxnXE65wRvBBQHzLC",
  "key42": "3Z4wVCrAcLqcDKybisk8sYFyoMzCAU73z9TXgfxSQ2XTkYUWhC7Gfhh2JyKDmvSzX8ivCPqe9MDhBGDM2NTF8dni",
  "key43": "MdqmT6VbG4kVon4gvfBQzG2sZw1H8XgrfXRUMerJQw42PV9mJYQwHyZTvhn77gmtyFp1TbFQwPXjFC4PgyXipAN",
  "key44": "3VGLkaCm9u2K82roaHFJZgvUVhZNCUw32eTsNjYsF6Wf4K494G9JQcrZ74dimEaGZGwpsP3R9FmyJXxFA9Kde29Y"
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
