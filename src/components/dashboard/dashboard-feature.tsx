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
    "AobwGGqa5s29Hmwyo1PeNbyvubP1QHx9VsbHNGFgerUB1xisPYKuzkruiV5K5s8Jw2qvx61rExhKRkxxm4wysYq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5XfL548XpvA35ghxFXiQhPDxttGt21CsmvMiwzA172KegmcVjUxJDTKGm5vBUeaVCaXmjb6aH8VohtqkXEWRXp51",
  "key1": "3tTuE8yaQ3BqxLHPquZAmBK88MpFNJTeFoCUid5BRDvvP9in9aXDwfiJZPLHBQRHNhN3nTVzwB4gNruQjWAWsHXA",
  "key2": "2swspaHhzdMjR7MCwGxGGxaKGU8VzRGH7nA93xgP2De5TY9fmKZYTAB2sUUPmUh89p5wpYFoAVEDJcxjGfmdNw6K",
  "key3": "2qdgpuBcZdwTKBToGibsYtpDrJ4SmxFocjkEbUGXos3CnieUsECpevRdnkS16f2E9Xzkj4pmsVSHBTcP5HYpjaM3",
  "key4": "2RkXRawqFbCm4UDEYBD6gUFKiPc7Hb4inertiJFQuNWLdjNAzRTu7MMTJnAHfQq7Phg7BGsppxgGo3srqWnDrEYn",
  "key5": "tMNnH5KbYgG79vNacPiAEVFAyCCnLTzqFDunHRmLxzHKE9EubGZQjJSZU44aCJAMDxnxuq8PA2czVs2F8R35FnQ",
  "key6": "5qvXxbvEjYsLG3N7STvnFnrrB6ekAZuVEe8LqZ1T9AitpsVWLfH5WDkGfebCvBMqCET8Q3CyQP3dP8k5Bt9y9WxA",
  "key7": "49xmyuDpuT37hfCZ3mb6mjU6B34QP5VqVGgazNmX3Hbh3V6SgTJB1Jh1cwYeD6NPaQBVroDA9kqXQECpCAibwJKo",
  "key8": "23BjfKzs4N6x1S1wL9TvFBZLKAVhWaZg18xEUfNSnwNa1Edy7BCPY8oU8uxTBfYZVKM1X1KEEboujdXwwgJDD59k",
  "key9": "42ECGjiA8yWL5Qr9LrtbqhBUbw5ZPa84RpyUkXMfjg1b6axLejeUzrA5SgpXdszfZ8tdrEoTMuSsjv2osAVgwhcn",
  "key10": "37GN3rGoHn4aCv4XMP6pwLfqT4vZkjLGB2KYMbkVi6UCuUMQS6VWswoWmiWRVcRQrH11LNXjw8CKnGjjWq6zwSe8",
  "key11": "qzEp2V6SERnRCyQUJurzNadizRMF7CWbNJ6avEzfUNGMWbrhNESqyQsndte3zSAEkVQ9jTf29EGWzANL38qDHPc",
  "key12": "bzA7g7mQ3n3ENUaxk6ZoA7LGvBRpMfWrPU6fTaZber3xfuxPke7TNnW2A4FhSZCoVEjL2HqDgsevfdn4Wg96kAQ",
  "key13": "3c7HEie7AVxTHLCaGRnuZa3EC4GvmdsKAR6ax1ft6nmBGhEhf41jUKYHQ6g4jHygkRmxq5emAHLRRnLxYu3GmnUs",
  "key14": "2AkuXPw5uiQaV879xSAnhG9Xmc4kRyHh5iPG7zuwMhxn5rnT4ZrG34qrBApT461LpHpW4ifkTy9F8xnWsboB6zu2",
  "key15": "3Ti6Bpxm63WgTweCCScYNBMkPAuvMfTVgvpnS4GDx3E3wDAv1rDXcxq8KXY1e6eREkWgJQvHMoVpJkoPb7TmnbVG",
  "key16": "57w9vmKoZ3vAAvDzeNykJ7Zou5XxrqaPDohXiy2xTFcXhKRWyD4ZMxGiHbyjBseuYWCfaitr6iXAP7DtZTB8J6iD",
  "key17": "4PHEX4aw129mEpCYSVQhW1GNUJbRpj7DdwLv9hqPSwfXJ2LAsNK7rCAA3qDPCsZvpoCKHq6qAZRU7K7mamrcuP1v",
  "key18": "651irXfHTuwv78rYqjUfvGNUy29qCqNBCtKcwHFKVJoqY8s2WqB6ckwQY5kGncFCtwbbgawzFQhHWoC6wRuBRMif",
  "key19": "4fwZA8YDJpWjF1M7VBXWNreU8EMWAUDHU7GtWjprT3cH14eFDM3Kgo6DR298wBprhvH6rq7gGYr5QZxeJrjuSrNy",
  "key20": "rvaLwMuQXMAegsAA2EM7fGs4pCzpoeZQoKUSxQfT8N6syHSC99K4gMSNER1xaUs8nbXJ49hGUGyE3mDHT53EbPW",
  "key21": "3ARWCMZtCQ1BASMHCP8M6aabZDndQ2v4hWsGHLWvrtB61SUfEUXAekGKFp8LDFmAtN91isTgUeGvZRdSKJKD8ouj",
  "key22": "3d4S1eE2WjBaR9bn1ED8JWDWurQxQY2nJKgDvidY6kS1HmKSgXNexsxjV4y91rNPA9wrp2rEVPyJCMnhbvBVE1TE",
  "key23": "BthZT7jZZ9vioz56KkkwYamRVEWWH8u6AMQuabz1bSKipHRKJGyvCVbNhmqbztrQnWYDyteznKkzw7toFcysSgp",
  "key24": "4QRCexFpkWzjcgu4mnu51YNnoci6gcfYYpxympoD54qtW5bmMyRtbJYFz1JK81SvdkREM9qZFLJzA6MWeNRTqEcg",
  "key25": "HvTx4a3MU8Fx3pnpTVCpqMFUiUehG39RbXCTHfRLPeSaXGKjSjs7dovJn7gv5aaLhL1D9Gz92Fkv57gjBZeiUic",
  "key26": "58YLM3Sq4s16UMECKckVde3aMngQnniD38xtjP7tnehUArbg1Y7QK7US2TLPLURJhUZYwGGx1fn5wPjwKz4pPgXn",
  "key27": "3fp6mwH7rxhj1AnWL11LWe2vQXoEzRATaWAqn25WP3i9zfrzEHP3dRyfF4vGdbcFhfN4cVdQRkvmjoW3gXngz8mv",
  "key28": "4NhdDcB6ppM6AdwY3BqrmvFaxeTigYLuAh5UR6H6H6WfWFE76BwQAiiuvcQoc5KeLWioQSBQ94EzjsbGQwTA2gFs",
  "key29": "AMkEdcbE2TM4xDeMMgGTjouYmhJMEoW5Kmj6TGX4AxFeNdGpf16vtkTRJEgbCtLv8kcpnRXzVyhGdsq116CWYkr",
  "key30": "5SRchS4Khym5uvwe1BVbPE4LFFqyJoMiScQsZKnu47ishSp3g1KWAEmfVs6VpQ3qLkRLSBKbCj2Bt6nE2zbdCcAL",
  "key31": "5pMg1NSwo7PytMHA728wQvUu6amtLhJ4MxgzoJgaNLQm4KCYdkKx92UafNpvGiA5WkWFFE4F1Sb8Ev1PRDUh5HzH",
  "key32": "3aWdiXmc9NA57bLPziNT9GoWUM63e2wzbpWonAxVdCAxqxa649CnwJdEs73w1qghvz9Ey8Mnxi82E6yzfaMTvxZa",
  "key33": "L4QfMDg131K6oDF2DVaZUcSdrV36jgtXVj3HDPSx3RUVQFdf5NMXU64SuUcaUzbmfb8mfyodbVK6kFsrcQiFYn5",
  "key34": "39EboBJjc2LKGUxZ8ZEfm2m94tcGJqLY8yua1XEVLupxf1LFhTBH73NuBZfLk517C7HgsRHrnQtRtzV5USpMqyzp",
  "key35": "4DXrDi92mmMV6pA6z8WNkJoBMyuex25p4BivfCAjw9bbLkNZPJQCwfhkzxoRYTSpPohALWqVC3ZjdnyyQHhJvR7p",
  "key36": "wtYLKqQoEAUoP8fN5Bc2ypRpizgE3GvS3JgtkcUMX6ogfher1QUns6pfrjRVBWs2m9GqMncksR7b3Zudv1g7Trz"
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
