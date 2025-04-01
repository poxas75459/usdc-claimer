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
    "67KgqZWhqkCSqSkKA43rvrzKffPwsWXKVbTeiuWgBC72zKL3DmcveTAGSFhVfSsHmhdkd5ZprXhT8FApvvHW2Xuo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4mm7BKeaMctQZa1QkuuVnGHuonLtpoq7bMQm5pP62ck1L8hEXTzCHqeZGt7WdfZvLD7aj9LM3YaaCzmkDbpQSp5c",
  "key1": "2C5AERg2yFWnFVL86XfvHxmnLsWHcG66fquwGjxnhCT7gJpu3P4i1589C6WN8Z2AoQmDj8NVpnYmmDQ6LaYd175F",
  "key2": "xgRgoF75YGoBHBjrP1KZHxKdZSWKaXB7Ap1B4LFATgjMs13ewji75PTKndGgwa8NPRXkqiHgHMkf1asXbUNpLYV",
  "key3": "36G8EWmon1jGYdV3GemtBaRYjRQfhSkWWzLxjvtRqybXRkfFDFisfZhqGJkWviLcjFvuuBGdyHWkcDezFE4m79ez",
  "key4": "31vVtTRfUs7NfKita9ygdZs6iaQ5bMEYCTTD1wekBfdix1AVDicjbD9ftmU14ntrmrehiUFSjxiYwPGg437emdSk",
  "key5": "v1rznvRczU8AVteY4k32iM3Uk9E4Vm8cHXYqeBmLsx2cP8Jmin87HJ69me8pWDqSkLeUUrdmn1sbMPgPXjoD3Ci",
  "key6": "5UqQRPEmwEDnpXJBHKe1DFRR4BTvx9ThC9DjTsi2w4nTUPwceBH7VtCbpx5cChpDNG9wS2PTshg8KYtnJWbZEaJm",
  "key7": "3RbvRQKSFqN63LVTomD1Y1hEnR7hcVajP1q2kFLn3Nkei5vtaU7Bshtkd2cEbYARBYssjSA1SRiR9TswkAeeGtWF",
  "key8": "2Li7FEvisKnEv3mV3663nNzuHvv82xJNdhPFUcQ7NCEqGZepWn7u4wtq8KH4LtMF4DAGkgYsAPHc1trSKeoYEAvq",
  "key9": "5soDhkbLJPajPyXzfac2CDQjHrGwvkcxVjfHi28pEKGUaL3sDXKBQ4aU2nHqMGxhS6iKvshAufaRvPxu45WGHKLf",
  "key10": "J5MokceNsW4fSZNodYWfq53qDwme4Yugq5mspND27WqLqMRYNjX3aWpfqSprswwYT64kxJmKuzk3Yij3qaoALKu",
  "key11": "3byuui9X4rdKmKUuhN33ZT4AkvxGpviyinNHEU6E5si2wtMKjLsvy5zGgy6idnp9gMZxqBASJK9bTNUPfwEt4NWA",
  "key12": "3trbztfQQ5oGDiCXgu1ddDNMcEpbmtriaVFjpXh39QKbHn9Gs34ZPwsThSSU5QdKkf9UBmPpoNk8c3gBm1kwTGi6",
  "key13": "3X1MooQgERiyQMUEeZUQV19EnjkztzaN9VzzrCKdmiHsyfcuQox4ydiVUuPS4dKxTsr61xampHeMnj8kniKcS55X",
  "key14": "wKDZHfcZ7ik8stm7pFBuGHvyeQ6JM2TKbwUG5t4WsvnVAMxoxXLBhosePzueEBC9nKiCbRtHWFpdya9ghZVF6hR",
  "key15": "2GqdFazZLyiLrbKhETnxc282Xpt7RpEjjhkTMNMegowng39nxFJuPDWZxoGMLHTa4zhE7jtc1NY9ia75wKYkiDNx",
  "key16": "4CAmqaeGoNDFxvJc1nZCFoqvRQn14DcjqiNAbi1AjD3FLWsUAx7bxWtJ6SWoE57PKBQkTF6F8kryMgwJbgDKwh9q",
  "key17": "41QBexs69xAofqYuNNq4qcA5yZTrocYFEtYDGch6r9T7xYsR6XEgGwnUw379HrRQ3kTfjxRFWPrdz2W1BMLQSUnJ",
  "key18": "5qwVcaoBN7VUS4YQ4zR7H7V7MP9d3s4ej3ZKgrjU3YPy33dqT8xeVQHsV356djYHGvyi3mt3v2Jj23yLku1tt9V7",
  "key19": "5k61hRuQNLb5hVBBnstcsBn3vC2xmMy8TPFcsoTTVtwG3HDYdV84o9sPfccjexe5yqz5oicFYBVugBkNFLWhYNjt",
  "key20": "2FiygS7XphQw2s8Q7tbSFPDEe1TF7Es26kewU8bh1dQdtrL7X4NpVtF3ywU4hSsTHRNeoeuyxRt676biiboPfdAP",
  "key21": "5W7ynCh13cwyGh8BoEc5ieCkiuL26z5ZwyHTtrUmZJnpQKHYQqP3My3z4zAWGVFRsVMxyteYsg1fW7cfBTpY7RhJ",
  "key22": "1om9Fa7YPFLesUbGNFi17PKCYnpUViofjThvJwmY734qF2N6iLyp3kBjUDbfArVDADgZ8ZmfPPdLFoy5DLWbm8g",
  "key23": "4zGEPUVwMFYeYztpUs69YCMXA731GC2YkS7ggRjX9x13HCwvjE6R3cnBVdaRtJncwNHSBBvoqRZZSaQXbPgbzHYN",
  "key24": "4V7QkPuE8B3oePZFCyRphKR7k1zxpxJqCPaumRS1dFgMCvqN8oJvCapfGAiJFutaCLxMz1E1WCPCbd5W8rNjJ6nu",
  "key25": "22wPEGpaiuyQTBELcf8zg1NS7Qvw9kk62oDwGYPHkCrr18YdeLzw8XWAw3wDEDb1dbH27h156GWP4v92voXetLKj",
  "key26": "3xqVR8e9dosM8RbNB3yG2xNjoAoAt4cdJdJaJPEXaNUkXQVHarcW5JNUnUYYmcXdYvBSvYtwmTMFeHwPBc1sK8rr",
  "key27": "eWJprN1u8HYPAhpA8x7RueFE8uj6b1XauPE8FrgeMRuHhqFULKmUervCCA3R2ujEMWXryXhRkDNaEsvNXikz75D",
  "key28": "2G6t8J34Yhd9br4Wqbun3xXUk6AGyUDkSs1gj1huKEgD6QLeLPrFNPVtBbkXopXdfiK9R68BhVxDe5NBE9yqaC1w",
  "key29": "zB7eWe2kAkp1SCc6qruHZbVtQg2B38RxLm7ey91MbLZUosD8HWq5VNZ9NTm1SPbEeiPtzupHRTWd6NPxqWQDmT6",
  "key30": "47R6aiHn9RVyAFHo9uK5xxJSXnV2p2wySRwpsCq4J4zVhuk5X62ZqDhdLPoasMwkybUVLnomxnBh7p9FQQbG9Y1Y",
  "key31": "7RVa7A7DeyjTaRQfy1qQXkjoBC1ct8ZTage6SJwUdGtza6SafS8n2CAHaVaj3V4ETfw7sLWDqKckEYXtbU5b2K3",
  "key32": "2hGJS38ocpmi6cZiVx5R1aq147uiZgKeV66k4X494EUYPdDzx1CKD6tQfpe6tmFNNaCZ3DTjvtbnXDDcJLwAs9WH",
  "key33": "2LNUugsZoTgYC496yqRyXmJzk19NW3KDgaaRkAmEn2dXzLcWd6YKcG5VG8VbYZiC8iCa68bZ9A48kgbi4jcVvERw",
  "key34": "4No4mpZXU1nrChmjhYYH9ibRFn25FbpQRvrkDr8At3mykrjEzPsgXNosV61PvYh82mxZB8xadQASrbJeuBmZjfjP",
  "key35": "N5RWn1t8TqVSb4fFZvHwmrL3DpPHmQvE2JY4yWbkknU1aAMQup4rW7SGfFqt3TLbuHBj7ybnGZmq9wVwUXmoXYx",
  "key36": "3B5xjD4Qwivmzf2NRjmH2UaBJAcWnZ2VTiji4crNe6RenvVHQX5MKTYySgZQFpe6ZCAhE7QvJgnKsgPemtTs6Ai8",
  "key37": "bL5BTc7FnUkwYUkar6acTa3LcQrnvNnzNQV2vn1yyaif7FXQbDvhv7BTmLh7hWzVWhLGvZvac7TsN6wTqUb5SXm"
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
