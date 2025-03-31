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
    "593tqpZL16AAQyYQXf3jJGKdScdUBbdFAVfLSUoKEm2RbggdZvc57K6xM9fTiGWSHa3BMJoiAWcguF5FxhASfH3v"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "LLghLngVHGd39gPiqZiPB5HqyRWiGpJNyP2XeTn9ZzPDoHq1wADBn8qB8CBCVFvp9L2cMjuJ8XF9GtZUfczn3vV",
  "key1": "29EMGT6H93BwuK5q7UZdbDCBt2a4DtT3F2MkoixTi1Nm6YK2dMruhfvFKC7dF6ivitNxtMX7dmcjEE4CEeREwYKd",
  "key2": "4PkLiMBaGK1Q4T14gJDZr8zo5SWJ6GZFhmEvwspiLVmZRB7aKjyq1mVbrAkMsrqFvuJibEwVJdEyirhJ9ReD2sJz",
  "key3": "hGwTtVQxNjV8mF5MK7nVeWgbiKiAXaN4xDgqgWvGAMQm8PRBDbZkakrhF8Vkw2HsmSeMes3eMBjkiej6mwaQCPf",
  "key4": "5enXZuiCNKe9sJeSkeDZbjR1oh2hhdT2x9TfPtCjfPDk5VEY3yZxorqJvLm9diSRuzSesVqcJF8mk9KNVoczBemc",
  "key5": "2s4kNMKPNmeV5uGonZXj1f485knAScsG9QiApDQff4PTUHkuVFCThA541dH9gS51kyRavtb9NQ1SsKWE8VsQ74Ui",
  "key6": "eGhVXg7EfxeE9kUwJk6XkhKs8ec4Rs6zmhEkWJc5P2cyCR3QpQG94J1FcEmsrhA4yBTqPUAv5V4Rt9Pd2BxsieN",
  "key7": "4H76SvdNHctcGYYv3RXPNFDLCtu2koyLY38fRj57ivDnVGLuxk9kKVTJ6TwCQm7Sy2TKsxLjU2ZtQPCoHzzgNSVp",
  "key8": "tKqCbsFBhdXkGaMf6RqMJjdumQsqfxH5V3XQmfYNcHeZqm2TPr2WNNj8fpzSAn89KffQ73zrrWDyvxUtWi4XHBQ",
  "key9": "3vV4RRtWSDma8QiXFQZQygKmJmuAPQ2xCeyk2jAYJoax1BbsHhyHTrXd6kkFXNAjUpU3f1ZEsz5NWtygbcWRZbKc",
  "key10": "3dzgVjagKcJEuVtcP9NcEDyhhnTZG925J8D28iVLa5QTf9iZeFu8LxL1xrHTkLP8xbZJRrxkGkopdp75CcsXUTYf",
  "key11": "5hVtE6ioLVQQrdhnPLKrmqty85F2FEsahoYtiyvBAKxQqUf7mdu9GYRuRhVjoFnisTgWc1Tapm4vWsvjtZ4LP65n",
  "key12": "5L1vGgp4AQGYSzwutvJU9WCLQuTpCphoX1CL5yxD24SDFFV6PTEMyoHkQV1N3qVGpwUijZwNekXJUirnCxhGetUG",
  "key13": "4LBPDnU2KGJTDNpJeECkxHhsuNiXJBjsnGjcvKEKoAXJp3gMq5Srdpz8g6CxKsTjWX6WGSZrpv7V9PVSvHjaJ7rA",
  "key14": "4JeRRvrbywWRWThiYzDDT9LxWzip9EZbr1S8r12PLLZsRQHMcLGChtCrAPbQkdS1hmYULtWQvyA8wxoSswJDKbKN",
  "key15": "4NHKqyVkspB6XRGcVDyiDYGYqWxbpp3oJaQutMsmwenQvWF3rZtwtiyRWVXfRU9uf5sk35MRAZoJMVgc3WdGmVeT",
  "key16": "5pZSa23PvaqWY5vhR8w4atsSCUDUfmJmAMxnhy21ig4fgRGjicXSRb841Vtz2RA6STmUTFtanjbtakmepEemQTui",
  "key17": "2tVBuCfens3Cfq2GwRUeGhEq2p4nhmh1ZiE3cgDGucnsbPyWi5iod6omrGiJv1MLrX8Bxsd4Qjme85uQw7FDS6CH",
  "key18": "PFijE2Ypr1zTkBhwFvtPAjJnob7YE6Y691nuEL6DLQbJRqTrJ3dvEcwdy3e4CbBkHG22TtXpZ4LjNQSa9JXHNhS",
  "key19": "3w28QxyD8nsf4SyhMSTHorZxikmAqCURG7mbpsmPXxqY6eRrqy9tyGaUtH5xNN4iK5YANME95kdffuKpwmPxVX5d",
  "key20": "4KwccfWEzwzqhBhNufo9Dh97AL5FcuNa26913R41t9ge7rqJaYfj8Xm1zT5if3BM3gKzvibPPDBNPXah4Gjxcb3b",
  "key21": "2FPCNpG9hAhKzdPZMtEnDyzxsfYjpmbLjVZCQZZzKpTP5BHZV13vbVxmqudSty273ALXvd1t8zDUBVUKquVd9rf1",
  "key22": "6esqA8wPjbdVxQ2ZZU6Yo3xFTrphNneDVgN96Jn3HMucVR5yjLB1XvdUJtuGmm3Y13g4XiZXBJKbAdStj1svUD9",
  "key23": "5RYovFamyQThJb8CX5bXRELkYQ89L5n1LFxMQiHSo3ESWEGFxGiWT2aemFK8ZXTRQwKRTuTBQwxRYX2Pd15Xbzmc",
  "key24": "3TFvSpz2kUweEJZpQQcsUQpYDXsjT8374YWu36qH3TkxQdBqm7dgxQ63a9s6rs7S9k9pDvSMbxWg7iHHyq9eWc9c",
  "key25": "3Mj8HRYGj2ZC3N2pG2MCdFAP4tnvrimDCXd5U28umeUgp8mSu55ZZdYLZJyMiU1wj17Gv18s7QDaGWxK7wF85YWr",
  "key26": "JoxHZVFMqiKbVrgEUrcmt94ad6N25M9D8xSGfS9eSX42KfbBTi6hEFWz62M5KWQD1uHCuU99jGv9F8nxEmqWC18"
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
