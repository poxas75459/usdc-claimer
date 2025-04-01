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
    "4Gr8aVof2oWrZxTHwj4YpRsiDGzBv7SBkvbqZnCDntXztmDEQo8fBkZqv7A3veHcr7bh1635EqeABrLbsk51AJJt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "nk523zGpR2cUvEHazeLMpHoZUqq44obcoqUTQ25RvUyMhcWXTNSfFC9xeEJPuzEZvBnT9JZ2xx7bFKjNY3V88zo",
  "key1": "3QD97hx2em52ihqQdG7Jzf5rhNAenPfMKTGXMBebWkuGsnqr3d1QprrQQ3S1gtYQk5fQuqsxS5GgaycP3QK5QKZb",
  "key2": "62bqEJ6QWv8ocn8g44aCqrsVbxDLd6uQt6oNhARoay6Pvr1Mr1cn9iMbcvcwJL3nLPkq1RFV6xjZ6wgiNbopiLhE",
  "key3": "cMtzNwNAbGyFmdMbnFzTHpUuHCdTKjdDTBZsw1mnhn1uLisKjzzZdUveFqjvz2fkAs4HMmYPFYRTC1EvVz1ePLM",
  "key4": "VfobWz4sNsU2fjC6ytM22Wp8G9N4BBc4NKRkvrBLpJ8q7he8WkPzVCdg2b8uPHdsXrUhGxbbSCYoEamN6W62wzv",
  "key5": "41HKemTAegmNoB2rkq8HkTPNsdhyvb8dvMYpB48MJk2fuhZLEJ69tF3hpo7iHEqyA4jsyqnQTX8csmMRLFAydkiB",
  "key6": "2kFoR7T5ArvZzKtaE9N7LRGzyk6sC3sZfv5BR3ToRqnoVzzrsJCNkWNf3cxAusrBJMS3LEyUww5GjEjZbYfe8yA9",
  "key7": "te9h4RfzbGfgyrk9PJuhaxnZUwch2TAsNUTpgwCgWffeqqqrUdp5gKTBaGk1ddJAjfvusQyURSjzNdVDNNyQQ2Y",
  "key8": "2KrJD7n7T41k7fRRGtScgxdNBjN8QenwJxn8JzSQrRfu5kqob8EYDQGoDiGUErKtptinX1QraQ5ayhofJ9ZmTA1b",
  "key9": "3vb21U9PzwVBWwKUvgPGWyfPbKrAjeU8zeutERisqS5x4pJpQPC55MKrL8wJPvMt4japuH84j7kqex7fpsXetAwF",
  "key10": "4NHD2AKXQkSAn1s2T9uiMsQMXRcbE18k9eX8v9oThJFjacjepm6PF8xpaXDF3pmDUvCJ82ZCU6PF2cRfBRb9DHbz",
  "key11": "5q3RWutjMCwQp7dddMG5LcGv39LAXrJZ6cu4aX4XNVmiaLN7byw9hAam5GBfkkUWc9gA7QzYnYKzvNsRVmHxDsvb",
  "key12": "4x4Nx1nF4u8rvt1G931b5XC7PGGURDpRKNNDS4ieNaRjf9AbSkRt1mLWWFWNGgcLREdNDiwD6fmi513GXwU7RR3p",
  "key13": "23aExo12AadCsbQcicHCJjXDjJk4BGYLithWEZda3zweBzFpojRGxgfWhzU71TT3cuzAQoEym5jHgack95EXwcQh",
  "key14": "5EJCPXQ1Bhc8j21X4kkw6U4bzijkp9aF2z7o4PRrMsWz8Njj7sunSi9zeDWrmDJi6pRfALoLGDupDuoT5F7FXbj2",
  "key15": "3nEj1pa22HgAqzNfDkdkXsJ4oHS6yJdngKzCqjNRXQhFWzHFdoWDHCx2zpaQo8gNvN7qoZdMafzYSNR2mXRjZ4Mb",
  "key16": "QQrcR4anp112fYhLojqugVvYRdYQR4jR28RHg9v2TGFuCucid67a4yM3dQADcF1wXXxgj21bNghyXkZZnof1F27",
  "key17": "4ycaCkMXcWdL6t2oP6kDmFQBV5mNur3KvJECJXZpaPehhNfVzavLMRYo9jtw3SPrN8FynoSCzWvK1wafVbGEVhjx",
  "key18": "4BKYykZuDrYM82AnPTWi2aBzN9KCvpn5MdGcmxkV1veLL5VGhDbv5j36VtBHWffqzpqgfcB8gVdZSboo822TGuv4",
  "key19": "63EkoTPaktbWUuppEdcL65X1B8xn2bcrArWYPwK68Ak9EstwRaVXFoHL4MZtfXAeiqkewVs2CNWrxGU7WyetUKE4",
  "key20": "uh7N45xQANxcrSCpmAAgtNVfoiHPe6dTChyQ176yxBme5H5WE7dhhkPWBFETFbgrhoxoyHxbNngvop8xtT6Ahtn",
  "key21": "zzF777SJfeP3ct4QNvh4Rc2MiurKppqGT1Wn2NhvWJ1K8oCwBF4kZ9cULzhcHeaeTpJPAe47NkN2TPgSXenJ2kb",
  "key22": "4PrnLNS86cTjw4Nx83EWGvsGZMsuSFN14CHMzqBG63pkHBq8xCsjtkhFwykg38mCW6eKF2aAovdN9unWeCKEDLWN",
  "key23": "4988c4NzBTWstMh5mzsYBEFifASE4kgoi4RFmF7mYgCVtaF2rgxjksQ26Hagkput5K36XxhsbreNqv3RFfgbg5Xf",
  "key24": "5vrwDEknqz6L5hFmR2tYJPQdDRQsR9Fc1budXxuSCARiKR2o3yPipSp3d33EAwepdg6R7xemB414DV9Eeja3YRc7",
  "key25": "3QxaMwnHV7kfzcQUMUHdZcPDQcm1twQAjCpdPrkLAhriQC5cJQQMG8pRrLExgqc6rsyV6z9H7yTLFrjXN3fnrBwF",
  "key26": "4TefmuMBByV4TbA9d4DrBEgU9mAn2ZUiJFd1pTkYCyufjnTFP3eDi5Ws9mEBuWr93KVbaf3dxM3vrz5xEK7c22LH",
  "key27": "2BxhRvU8GziHH1MYLWocSZThQCJ9DUuAJp43eNWWLssYShsE5iN68nbsivHxhezK6d3BC3hfz1BQghJQnFw5pRF6",
  "key28": "Pa5jEBdrRb1zrVdw3HDUf82tRJcQ58epEKWGkwX18mnmaGUi1uXL2wWHe1HmEmm1eDG5UyAzod6zCVYGDwho149",
  "key29": "y1wkz9jW4HDjhnkcgjTfr6NCviyk211YYaQbKPr9PuEQaa4F81yhLrHjSq94bNe5MBHvgDHE3YYQuBLp3LPaF1H"
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
