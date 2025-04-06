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
    "5nPDxgsRWvJBoMEUCrJjjy3YUz3ZcyBPt7V1hiJ34iEB9gU8zkU86jAp5WFHKNg29rFfa7YimwaX3s79vAWMsXxc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2pa1D3npWoP8DfumDqRNDC4eaCx8AqbMdyuQLEuJW5AJFmqihGmdyFVTYrnv65vN3fYqMJUM6bGdzYwKg2RCqHL4",
  "key1": "5GhXJDvruTVBZr9Ru1gE6d14KzWvhhDuPXx7BCUusM2FC4v1NXNBfyGgJSDyFs6VJeYPXy6UzBvk6caPhL2x8em5",
  "key2": "3nm6jHSMgkMFwW8pDttPmAYxWNzcfUKRXUppiVySdf59g9PcRwxuyUxGqMFosroUx4qeSCF5FUk6rC2sAAmy4pVX",
  "key3": "4KbNHBJDkRstefhNppAmU51DQh8mvKNtRFSUUVoiNsCjSaKz87HaN2p1hskTQjgQzQAPFos2CWbg28XN1mgaPzut",
  "key4": "5h6nJpk8rEnKi68jCu3Mb2QRuVNs6ZH3528tBkTEkZLBXZfH9v2Fo55cTVLrQxuVLkpvupDCFvbocXG7zjVN4jy9",
  "key5": "4aQy6b7vuFMZCboPkiCvL25nDh31j86Z2Ev1BWr1rKnAp27Rw6tM1t1M2pGLuAWSxaXFVkKYcsPjwrikudAVzYUX",
  "key6": "4TxpxnyHHvgwdDsmtHbhsWbwnGrEzxBnSdPPXDXm3x5kV4WbTUxezQL5zSgeBz5VdjdfpmjC4faxTG4wB3VhtnRF",
  "key7": "3UEM8osjK89TyuYE5FBbE6nL86pGFKJkcRrPhxn9eDoLBbW7KLpTzsXezogQgenhFYQMbYsn37WwM1LStNLWYgK5",
  "key8": "3ZrQjyNBGY6fNZ3TFdSURtkvydyqPmiBQ8LHU7qN3txPyei5fCRw8rJpfG9o6NuCAeG2bRCmLwcYcexbrw4qXfpM",
  "key9": "4VkTfDRhkGMNUmGSfQKVbBiQqQMffUWTxeJX2U2UqBx4TAVU5wWqQu2uUfSxViuX8wqSSEiYWDTi9VZGW6KD4hhh",
  "key10": "5T2vKZKWFE1MJ48Jj4mhNUUD4pGPybfpdfp9m7s2DbKZAspL7j5suWCSVGruT6p7aLoKQWKAcpSANqwiEDniAX2L",
  "key11": "49s4fJPsjju1aiTGQ2FiadK9yDzhgtzYDUJYassdX1H3j4rEep51VMyFxfgSQaJYicRrzNqmnAGAPeFK3LuzfWRF",
  "key12": "21dnDBVkeAgApDjqfZPo1tGiGjMTT1RvSw6CKT75ruoS34j6D3m8cSFJiTADFtvaXGY8ui79PjnNyGGMUsHbWcCX",
  "key13": "3y2oaHQmV6WqveFmXK7JSQ32Jos1srqGwNazV9uDZ9f7YortXzGXg3R8ZEMqiwcvUqFx78jZZXkkkgjyBk4FMERQ",
  "key14": "5PZPY9B6ULBsdmdAQ5Dmp6S5nju9HEmJEnCfgQVQ1QuxUJEBPnZ5uB7moYeEJxdvReRfYfR8MbSGE4dMnWdv3K5T",
  "key15": "LvRtFQdoYoCt6XJrMr9C2FBA4DfVRaZaEd6989ARV56vWR6bHFQkbxsbCMxdDufVpd6tWPLtr9BmFfvF8GWVzCJ",
  "key16": "255jbmZ6PULnJMQzUfgSxJA1MKg1cGwrX14TiDnmmSK31X6U16j7wsHX3Kk63cRBEFa5AeknUqu81Pr2S6HWavop",
  "key17": "4aAyq8duAsGUxwUVec9zS2ou3M2wLJrUTLcQay6pfngV6urYEU6sSsSMUCQ71jTZvnaGVbfVxmXC53sgapBEU5Hm",
  "key18": "5q4No2CUED1EFYB4Z4dG7uL636UXhKqgbCeyWpxnd2zJ95RBkyH4krmdmcTXHc861vnyzWiZWyeA7SXsA2kLyvfd",
  "key19": "477z7DeWJqHYFwXFa3ufozV1wy7PDvJRuH3k48aaa4B56C3JhLmEHwrM2JRfZPnn8T9bwi2Vt13J3rCU1GAynTca",
  "key20": "27qbsHARbjcEsW6wEZDeASGH5o4hUJhYJ8bKibvdrET7Zqnh8bxVcRv7o7EZ8641S5ofEu2Bt3XYgyxViujAPNXR",
  "key21": "3J9aqeHteLBH7PwXmYag23YDXe7jb4ZvbVSP7Q52KxXBKZoDFJJn5xRuUFihP7qHL8SjDtHyQdG5WbmFEYwH5Bx4",
  "key22": "5o9XL2yXvDoVCcQnxBGVRyWUKUzM7Y6Wd5Hktv2kRwP31x1LZ1LHa9sn6mskh4DTEBZN2abSt3WydnP7GmxLr5WQ",
  "key23": "5SezqfzjtBPS96eJoi4iHmZtJ3xfPsEFT8FW2niJLwfznPN6oZHCz4QMCaW9aoJQ6TLppf1VUuCWyLcwo94ai2QH",
  "key24": "2D2GZ9AxHHbxC5ep8cdxTDKRqJKdQfiyD6FaHdToz8VXxaCdr3XW2VcLyDFvDPfP3braUCX9bzDffGfUvjG2L8gm"
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
