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
    "4iQ4yhCB2QE9yYRs27QbBn8svHn23yJS2S78dkixv9qbchYp9QxPG9pYHPqZj31QTg9mDXn5Yu5NmLdqfyg4dyDr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "GaHhGPwVoYNy6Ymu3LwrdwCrEeqTaR14MsD2mJTsNsS9iMA1nktGpko5heMJ5SoFDVQuyRuxnQbMaf1BtJ1FTGa",
  "key1": "3MwRZ7hugFbiWJKpj7hcsaNyJ2WqpX6JWiRGuENnQC7Da2HXpKh4oiDpdGAtJkyu1BMcJhahB6Eq59s47QAnxwXB",
  "key2": "TebGNBnUzP1zV9zASsVHZJMkzeYmbSB4qDTMjvEep29viaaDqpbM42vQ2JaGXbw9X51gpxT11tCMTWWGNFgCe9i",
  "key3": "2FZVEYCb4xhs4pmQ7fBL3ts34nGJjLbrt6YTiu5ehQfdsyGoAgNryM4e9Cby2dW7UiE8eNKRQbdNx7GuNGYxJw1k",
  "key4": "5G96pbJPmwByEHYTMjtYZn2uKFsPBk5oocq11zrBMR1ixGoHu1hW7YHRyapCPHayUxBKGVspFtZmBvQnD63hobPC",
  "key5": "3vAzCqMybs8zSbR2Gwra6XoE4BFKL8FPryDrkThioP7mn4gNqhjHf2zwcLGjgWbJpEUvv7if1jJXmedSS9RmBVqU",
  "key6": "5teEFeSD1MFyh3Do6MLi1h2ASTjyDMiGuR3fgypFeaZrGDf9wgaA82TZe4CsUr2viyaTgqwAGCHf5YcuJmgi3Fdz",
  "key7": "2ffkS7h7QEHqmBwcxJNZw28ART7umTfUFKj3GZh1bJZHdq59eGMpXCT1UJfH1LsVofmTVMPJi3nS3Jv9ESnQafXG",
  "key8": "2BQUThBDRZVpTjqMN9EXRAwJYbE87VAiLfPwCgsBASTfQ28WRG3k7q1bRmcbnFtqH53PPhsgkqz7tYbuiBUCA4XC",
  "key9": "oFePaHoxFZqAnF4rJkQuKBFgdjYrn3LVrXUZSMb6Gt5u5Z4bdQf58HTfjsiM45ZQJifxFwjwNQJUina2VUKMhBT",
  "key10": "2FySf3cbZr99NfDUvuQUgNjARb2eKiV3rsQEdTKHsYUGameF3Dbuotrz8oSEFMbhw3SAtgWcMzTNNH7oD94CXChm",
  "key11": "3BAw2hBipo5odziL7dscRZRVJ99pe1XUMYQxTfkYNsTd59C8EYv6sSiDrfJgL5L7NUE6zpMRHVWM2iSo8dQ4L8Ey",
  "key12": "56GCrnpn3sVmjZpXvfSxv3vCSSqw8911ygmwbSeYx2qSGb81soZdgF9QFwNJSyXf8L48tAQLKuiSyZH5PNCDTfKx",
  "key13": "5rPJTGLqKLUZmyc1teps5cvCvC4JN8oLiqJAv5x32Ti1JsqG5LL9z26gcaeoeT9VFFocdm8TGshQcQqaLUJRyG3h",
  "key14": "3BFwy1QFixz614kdrnCKeV3nLMeasypVZ3GnyDsN9PjfRSPtb4EmjwSwLrnP3ENWLtRYYMRUXTsYJ4GNMeDc3rdq",
  "key15": "47ja7LZydeuRmaepUX5iRe2EAUAEiifjNhKyTVm5obSij2bHYE8ztipwHRsoJs9VXYNSNajmFjbtEmdFF9XEJgD1",
  "key16": "37qEDF55AwZWFCQMFMuF4C5rNzpq5w5HNxvGDJdLDbGj3iXD1ATYrRSXEJL7fjxeA5q1gs2WM81JP9q82vJfh9fz",
  "key17": "2KbprqqstnpeSpLNiRKx5bDD3BCdMNyEKbCmydfWL58Jc3qvwsZEKhk6XiQB2r5f3qgPwXXY9Khh13k6EXKz9U8J",
  "key18": "4PeqnQFA2sgVyfcMVo52V4WcXb72LQPBGhCk9iJPc5rxMVnabkvi2cTkVfGmUTxWZ4CQQ36FQCBL5sjCjeoSatf8",
  "key19": "UowrDqP8sSJaETpD3Fw2dUBGEmf58GcraML86XiGo26PArHg2qoR8wrqocWxiE4rbdwUuwX3FmU18PWS6LnXHQP",
  "key20": "4uX4UYCD2vAr6pyTTicKsjh5XmjksXkUo6fkZFBYxYB7nwaVzKXQGWBHd33fHJjajFYbiwMZNxCkzWn9EKYm2jZ3",
  "key21": "5Er2w4vKx9bpTM6v9uKLysXAjCadS9YpK9aJYEF2iRGCaRyDLSzaUmE6XbaLfN31mxWhnCSYhPYr8EMyQvx1gyGT",
  "key22": "5GLVQixDWgVEpgBcpYJ2ApnTBrh4EVoK6CpijmExBW7rL9gfYMYEShnSpiCVnsqA8ud25gMGiYiByPHSRPfz36Nw",
  "key23": "5cC5yuM2CJR5NgxJxyvHTeRordnmP2KA17oFaK1fRxmFrFBAURcNR1BEpn3srimcgy4ohivLXnpVBTAtQxjoJncH",
  "key24": "57YNfC8Ko6dPEGbLNysVdy8Tuzfar2YsiGGFSZ4tkvgU3qLQ8YxwzPUaVYHEhXFbYYqA3DcQRMNqGm7ZxeJMzWVv",
  "key25": "67Sn5mgGuLfUSsgSfGqJCo33c4fB6C6zdbUVWPQiWaUcJ5aoKdskjBaGBz76du54xZvkiEYEy9qLJ3pvcD8e4J7Z",
  "key26": "3CfSn3g7agHqzxC4KgxFoJsV3TVsZQLiemANKMPDF3Qeuygguo9vPktznhqj2iXaAt5LdiwhQ7h6WNr5F1LLEbQS",
  "key27": "YtaTWnKgQqgdpoRvC6TErYjWBB2xyXJAjmCWMQQookvhZFkoiLisqTGxDjC13DYx7xN76kmVACay2SGNokCBK7o",
  "key28": "67KBC8nCVXYiZUFQQFQ15bMcTJWM5iZTGoJM386zj3fnJp1Gh3JLqxiTg1Uu2FtinbXrqdnuXas4cLzmaBoEEw6J",
  "key29": "4Y93v4iKBaDU8xUYRUWrvaqR1XXi7viAVzFaM7MRu9jzwm3izw8Q4uu837znJTsCKj25UMo3GWzWp8RvFqWwfcp"
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
