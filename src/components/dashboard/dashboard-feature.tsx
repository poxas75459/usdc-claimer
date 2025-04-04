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
    "ECUcbYrUsgo94FNUrr77ByqvsyBET6kPMEHQVnfbt8iafif9dqsxf1KWrTjkev7iYsWr9yRxeJY75UaLvppKiWz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "xVb99wpqCRiTPbXUXS1fvSdZ5QW1hnc16KfsXy67QBPCMYihQn7MuBWw5QLuWv2MTSyAwi1tFxLwdGZBKq1akPC",
  "key1": "5eNuYT48oyqhkhCJ7QuHG26DSJN4eHEMGpqQH2QYS5JJ3MPE4BwPz3py5fDdcLZaCU6bbJEEiZQoPhzKTrBK1GpM",
  "key2": "2JdeQGD9wzX13KrL4wbxAGZEUCLeG3Ferm3HwK6izNPvS9duGQv3JesrtctG7VzptVwKyKAqggV2zcLXZyC6nzMc",
  "key3": "2cP3UxVWP8k4TZKvg19FFiX6zts2oGuvDGSNny2NCqeLEqsCF2yVmGFBC9Vrt3xLiDfQfLGLMeHycmkdNr27pHjf",
  "key4": "9aH9vsZbZfQYNsrBEcumd35ArULT8gyTH7v4v7He1HbnqywdPquva5bnQSPa2tkZfwcM4tg589g7QT558EMy2Hf",
  "key5": "4SeRL5FB115wUfPJEht5T7WLPap56iDP7mT77v4tTTZiUWFDmDZFcxyezoDNhSh7ow5fHmSvVXxsERACiPw8cmy6",
  "key6": "3tnqxMkaBMTUKjM48kJkreUiNzffBZ7GfPfeEGGLbrnZr4UA7Y7yQ6FyjehDJkjG6Aw3LiJzGtidEvKBu6osuHj6",
  "key7": "sDghSgGgxQDqMk3cH4CX5CzaRf3YVgprLDWWsiSetdXcmcTGpQwNphoiWLV2y4iF9Bv24Zne2kyFuSz31Va8QkT",
  "key8": "4FJtGaxFK1g8AAM866xoxRdBihoPVh13PsgRG3MFHyJ3bVDmhYEbgQ42QW2drrNHRRVkfEASk8XVxm6GZpjaGygp",
  "key9": "5kC8cXAUseBXXJzjShrhdhp2gVwhCoWVhgcMoL8zdtT9qrjLDnWdC118381NG5p72q33NiBXJqAmhwX2KqAUf8bW",
  "key10": "963xRCpsA3ecTTf4u5RZNyUHfSay3LDCtqhN5mtzDFAopxK4ZuaCjZw7QFLKB3LcCLQKTFo5DQB5v7hPYMtLimx",
  "key11": "ufcyf3FVstwTJejYuQrShEoFfu4X5G73T1bEvhA6jcxQhjyuAdmnYTNL1q5cdjzAPkSimrDoXChEDSVfhMmdQGy",
  "key12": "5eaL63mpopjpdFCBNwpN2mu26zwCN4hFCJGYKHsRTBn47enJjrPVZnL6wbJRQCbSRJs5jUwu2rRwegkxh1Fe9HAv",
  "key13": "2Uu1DKjkhBt6MBGN2z8Qrwx8HJax7KJpiXgE4CwKRWQmJr2PkcV4k177RSMa8PAMDbYEj7KnmRnFuM66wL23LSL6",
  "key14": "3sKPAQkPnihuS73TnAdYp7UCg5sDiayCZxfrCKN6ijj4RBpuyoxCfvoYAWxTWEhk9N1NrL7iYMzWoWzwuEGdq3KW",
  "key15": "2CYyT813wSfo3WmdxoSzrftk6oRMnm79VJFSq92wRtRcuP8aURtF27K52t6NxKN1FhSsXyP9Eoi7p3BR6SLVPvy4",
  "key16": "2zX16sLDRLC2sTr3SXNmUw4HX5oHZZSxXkxmvd1D54sMNZJTcyDv4iyrLGVry8pqRvZ2hXdCviCNiaRyCRfE4Kjd",
  "key17": "2Y6uAN5adA8PYD6v7AyeUAn4VH8FXKRM9L2R1LCQNaQYjRL6JySpxyTLzTVSc8SRPhMWZzRXq884DbBD2YZUcrM1",
  "key18": "4noeQBvM6AyvSJcE7kj8aH3PYkPXjo7YBKw4YMzZ9rqiAsDp79vvFNpS7o4Ah4648Neu1NrXkkj9UvVjoVdkcwsp",
  "key19": "3uBUuZVvD2jqswBTHg7tTn2qA4moaBroJChWE9eAynbiDhF7zkcJSUsu5LZjZqafVr29jF9PqMwts98AbnS3ZjbX",
  "key20": "2b3fZG2SUAUtJ9pAuMbe8wMfsXc5H5ucuFxGM6sRzJzZmYdJSb2NfgSXFS4TWgfKovSuqvXjbwgyWF7qdjz3yoW2",
  "key21": "2R6LwpTyEcTJtyN52FDf8VBwZwwBLNP99Wqz4qJNGAeyBPifDpqMdR99LME18Q9iyPErRhsmKMQ3vct3kbZ6tYXk",
  "key22": "3y4gZdJeiHoNBxYvKk5S1zewLuBCju2eHzqrc8q9SzShez4vWT76579Ed1bpSSP5vmRudo9aNtdjFeK3qwdSdcHp",
  "key23": "5JUitGuMoatqQzCe9Q29xK3UBEwMyR3aLCZNHVRZkTea5HgPJSixWHL9Lfdt6ADfk1kJywjtDFwFmYKeUAytERgi",
  "key24": "4rz9Cjfiudk9osjT3fPsrXasVS4GPs2nmkbsDCFP2yBkC86MLiLfXzpwtH8xDotc5eXRzJfWBZaeMhx5zkGGo9zU",
  "key25": "aZRTZeg82v1S2MNaKf14WHxp9HHjQ7A1UV68DRk7whtJKiiF4oCa6KzcAncWTWkXKQLdga3B5jd9zXMdCEitYyJ",
  "key26": "5oT1B87x1ibfNiSSgR8gDevTn58Q5utc1y34JGxcsh2z2HN584y8mhCn1BfQG7BbwKx8TpJ8S31f6QrwiszUoXZu",
  "key27": "v4CxH1yaiCV6LzN9c7ejp7MCptMV8gS595rfVFLkvKnD8nZQRjRv7Yqu5X7EE3o24CK8kv2iFDbc7EhnSU1AN9f",
  "key28": "2mvivxiLKpHpT6BH6aMzjdqJxy1UQSWuSzmPb81YaqmAFQbd2HijvVFfF7rqS4eA6GqYR6HVxjjasqPaMMJaAVRs",
  "key29": "52Qjaw6MnvPhQSDSytzX4ySX4SB6xJfB4Nbvjyju28hjbz4t7ZBWVtf687TdFuEeWnA2yAzNWT1LfmM7Z25RjvyJ",
  "key30": "5rjywaxKMwjKYF9fpuJLkCWHwuZPgSrpmWG8RVBYdE289kNiLkY3DZMpd5oG2ThvvaYgnJeLEc3R5r1GQV6KAbX",
  "key31": "4PN85CgZpPt75VMmctsN52iYXygeJH9MGGm9HF1oRyKFyvEGYt2CB29Gi1BB8mPsAvFuvyBKvqQMiz5QaEn8v4bh",
  "key32": "2X6vWd1NyTZfZapMzYAisBbqEB68zYJHdgeRHaNKCJowV5kPrbzG54Vm2TunepHB13ubVr1S6pdMDkJHztMJ5GBR",
  "key33": "3Zfr7fiZZ97Td2iMMfgXfSJGemdu4gPrskGEszo6Fqim2KYvuR4MSdm87tPsXiNedRAgfPnTDxc9sWPKjMKCxL5o",
  "key34": "4nUfX8gswg5sdP3vMMLnTuYKM9jQZWfLF5SRiGHoPTfVb19yTxX4Xd2TcFRep7D65hxJxp6qvk8hx7Ct5equLnvz",
  "key35": "3URy9UxGgY1CV7FKhNUTLUoCWRWVJGbPF3PLa8zxDnbRzDG29vSmX82quJoYiyCNoDc34J728qkq5vm2JXrTe6NH",
  "key36": "5Qa5QWm5HSVWEFykcBYfydLzjjrBqd4Ui1s7GGd4Pr8s4oJMsDa5fsbTYhwVjem5ieUnTW61puYLUwjHjSwZUbvh",
  "key37": "3rWwTsi44hJwt76KRvKGLL1cSHm1kfeEZfN45TunBKHfYU7JJS4nW6xKo1Z23YfvVSJyjQWr4oTD8hp499erxpCC",
  "key38": "3PbF9BwjgyASk1hCgzWpzNo4dKzyr8quCDNNfaRBcorCc8mNrdHwWXDsAm4yFzwpXnp2kW4dtKK3XweQZph9y9wD",
  "key39": "2sZ1yS4gjnnPzTwhyzZGUBTCBeCwVYvKRCgdrVZhhxvNdBLSnpeGFx6qYeZ41ttoDoeZA9JmhRcu72P4L9eRwhyk",
  "key40": "43Cra9ewzQuznJtrTNHBMhaMvQKJJ1ZSEQr7UxJpP1Q1BoSzgzamQTmb1AwmjGFopJYHwDLMRXmma9JQC4z2iwzQ",
  "key41": "52dVrG6VDyTEF7uYg8gmDfv7YMjVnPHxJdQZVvEndx2YEi7eVbxmJFzSdcy9TQwEEE6Fwccaod8A8QrX1RdqrT5x",
  "key42": "3W2ycNHG4atuwdJCRgvc5eBgUUxvi6Ctzt5Gqgbuvnyxsyti3Jxr1NvRBr6LFy7gpB5J1BtsYGkPzjdmRrhVfUcZ"
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
