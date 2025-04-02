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
    "5SCbzimcNN8AGm7RFUxA91EwPdQqwLu4hnJ62W1kF9Rj7g4YybN3cHPoLRHBivjxYMViy7txxZxjGgzxEDrNUKEQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5puboAEXX4W5bsfgVJMPuHY8Rcu5p4pif917yL4kkLP752XBwL1EQsXD4usfXKppR5VBbbn4mQHjsZMvQeQwg88i",
  "key1": "2LKMt25ueSeMghB87G99hJKCsxTLacZntPM5vZNcWMV2LhUwYQySczuTKDWGyUomeZVUWRRR2tTPBgbGkTe3Sagf",
  "key2": "3grRMRSUMRHwshhpbKFKCeaPNPHyegAkbXBL2AdvtqTUWxPPbcXpoUCsVkXeAZAWzkjTXh3WCJpg6t6RsFE3XTE",
  "key3": "2xtLkDFZpjZwcMLPEV4QJ2PH74FMvmm33Ec2xCjvckE3tEsKHUgdXb7TWj5TcsQjcZ2m9ofzNSvhC8LAFUvWszUX",
  "key4": "5mpxuKrXhgMsXu4XBZxtqkRiQLaBu8V2y6ZKGuvLBDPDJcbfbRhnuvPfvy95AGxKCzz9MMRUSFGbvj186qdMRTWn",
  "key5": "KBqcLCsQuptWcrYvqk2iDb3qTBmhURqcZXqxCaxG5pjRZTkmyqWHw7BxCUtsfqk3eqxxG81trBYMzGDwHMnwfkv",
  "key6": "3h2LZwQCdNb5gRrH7ywVxqZRsBo6SzWvrcGARXfXowtMwBwTdG2H4XSzJA9X1mY1wVqSFVFsLiqAGj2Q3pxtH6PY",
  "key7": "CDud6rC8s8iwreStWBGA3ybh3CkM92bGQqkRHm7EpRiCub2kw2Bkm9aDGUu8oWY7sq1cxWdJx45uWSrRVLzJrLr",
  "key8": "3V2cWxUFqdiNH69nTD3ccDxY5oXAJmG47bjuEKFUEDBZyUXPHoDMXm6zKUpAiTmtDxnysuJqpPdz8mKJATYnFQXM",
  "key9": "2HaXUjeokgiSuk2wDrTgBbuWhADSg2ykhumVid7XE2W3XJfzkBUCcgphf4VZM5AiJhvVh4nNJMGMAyawy5vGkofW",
  "key10": "5P6Ctrsp3E3M2xSXXsowaNBodaPdNbyWdrmE4u55gxjckbzBV4jb3qMHVMceP7i8mEoQM8GxFdbHtwt4qh3YpiM7",
  "key11": "3wGMejoYeYmFVfLssjtUbEGUrV5kz2w7A6MYKi2XvEtLr3QCiz3JPYLg2BqSDRoLr5AM5kFMdzAACMnF4FkJE2gu",
  "key12": "2J4g2DeeiMeNBknbvxigB56EGhC6EZnTNE7SHeg1yD2PbPzM6nNowguXPyTVcjFz5xXWuGbZ7vuKhiKorJWNtpB9",
  "key13": "5ZdK7ieksEwNRrWmDSSjurHJMzj99dzRe2PEQyLMfhrkLTKjLVCtGovnSdwQvxYd7AAXPCsMMuCRRzXg1xbGbyP6",
  "key14": "54YMEs8TtXzHUXJ7t8hHzhrpjGc3xGjrcYNDo3WkjkQcDExXm6DakG32UW5JUWFL1B6HtPo8juPnpJP3mvq4Sk4K",
  "key15": "4XD4taT9NaRWefca9LzCxrZG2uHHALcLdS4uuZeN5sk6DzZbiF8zFRLVG1cJskTiadeWeQGSAEzrKrucPEhJG2gE",
  "key16": "424ZjaK8xXrDvNvu6YkhQB3A3de2MvuZ4UneEwTPX5r2RAdQxrUnhQ6yTL2vjCCV34pwgCQXpE3KF8ckyPcUNqB5",
  "key17": "63ocKFEYhCSuFGnAoer3Qz13x7DxoRfVMJWjd3iSiUWXmunPTUZpUTPhFRE8zcr6PSuGSuGEiBbpbYCm7hKdKF7g",
  "key18": "2crbDEescaaXotr5TT5z8VTT8sUiwQpmQiX2oZN5gRPv8atnyRibhyKNrkw8LYq8n6eNi3gow4XKnUupeB8uvN2v",
  "key19": "3MV5cf8vFeCxSW8L4pt4oWhsRpRAED2imLdkhvd9S9YSShynE23YvDPUJVXkXaNR49dExiFrXmBVf4e86r6gBdZH",
  "key20": "3CLD8RVt1Ltd26xCE568Z73Wx5yECwy1jX3uarKquafSXgvxAXfXuY3xJQsHCHFHzkaXMEas42STcrjKwEjHqYU8",
  "key21": "FPwjqQdtSFzz2kemrGHCKbeVaU4JpEU6dGDcEcXJQJ5DbcXaQRUh8bV6cvmCHhTqnxkd93MqvekKmD8CLj5aMt2",
  "key22": "5WTish1zvrAzPVETfit8te6KFwTwaHKyoGxZbSyXu1bXPzUMfwZ61zwrUiVFU1ysPEmeCShQta91iWV8c5fjxiWs",
  "key23": "UrcxMEFkDPDKLQzmMqgd86GLerZJLSr5JKTrcgMBmkvsctiqFainu3Aoyn7JyvmBb4aRecpSrRpdc7mCBVLWYGU",
  "key24": "4VmeF9enmkbm88hANWbtwgjQxrLBV5W1hkwvcGfGwrtGar2mmXYVJZ9J1J77ukn5RWiKnEyc94tjHEaWGbYbtSGS",
  "key25": "vA8LxkG7v1nRu5Ks2eifVCt3pXaehW8gES1wtKZaGGmXgnHjS45ayqRtvvBBUGgjT6bMv7nWoPyQKGDtqv3J318"
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
