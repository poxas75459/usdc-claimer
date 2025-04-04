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
    "zPZpQbqs1HkCRTiuJpXjF4MPCSwVmn9bh3orzXCdovfDteTe5tpZDyzzSp4Z1K9g6sePfqhBfpgxyhaTnGAtMrx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "MtAGL9oa1d1WK8JjNUmQikfgJCQYKu6SJpzE5Wk9DcogGhf3En4JFPL19NnPameN6dWF25UnBiz2Z3anR5KEUuy",
  "key1": "2ATWumgmEDxwb6AcmeDQefmbEdDAUQXi6aGZ2fTWM561BWZVsmRrxJnogxmgx6wHuahKQHKE7G6qezXwq2XtvSJF",
  "key2": "3AZ2D2cenMCHBSs7uCfvEkkVSz8kCNgzgNCjcaZkxxB75ELZ1UDrY9xmXBvw5PhwiWhMiCDmf8v39eRkEf65BaMx",
  "key3": "4tx4NHYhhAVua69WXMMZ7VxsTHi41UfkYFcn22t2bY1rDBhEdpgfekrB5N8XVpqFAqj5QN7nLBGLAvtsCmZMwf9A",
  "key4": "4wKnqPTJUpJa1HNEpNtfgBCuSbZjNxzVs59CSa21L56che4vJttd5RDekdQwaLAcShvs6bJVPhv3zkoEK5SGPpAm",
  "key5": "3NqFyWwkk9uXQXoktbCHQWV5pqGZJZeQVCWHjkMLardxZogKTdhsKMYAjwKs6ugSJDTnqoLbW7GZaw8uumNY47wK",
  "key6": "262JFnD3WEUdyhNrhFdw9c3e2bkz7HUmXQ721cAEiV5AYfmZwW15qPMKp21nsJozPeJ3AVgKVnMaVxjR4yC3hv99",
  "key7": "2MFkLrYzSGdfa18hpLERgcgoPxj9XyejNcWC2nq8QHkfgp6MjuZYJ4iSTWDG5wU7DZMDXy8KpJXzMmViS3TzCDCq",
  "key8": "e94fMgMvxzyFfrUxP4dJ7oxMNM5XtD76nSdvHdP6uWUPx8WPXh7wX3JWTyohKB3qu6aLWeHipcGNvHdrKmGqgvn",
  "key9": "29G4bFnP57etwRFLQ5P79RmSZHm1Er8Uz6A2mdN1ngQBe9Sy3CJKut6N4FDQt6qR6saNx8pgyDi1pGUti6twZDs2",
  "key10": "2Eci6LMeeYsMtb3M8tqLs6ANXVv5WacRtQ79KGj8Hn8M4CxwwuN7b7SJ8e5DCMaGX7t16FXiuYLWh2YfAF8Gt7s6",
  "key11": "235E8q6DMf8fUDftXDgjZAE2F6P2pYWzWJrWggWcCnAksTaDpranfXXxPiqS69ahckSUL5d8VVY571PY1K3wdR5s",
  "key12": "4cdMCApeAzhLmCLku54zyipqDpZfEWKFyRtkH9zY2RciHqQEidkCKzMceoAov8Xo2aZ1ZFNSvFQUt8fZGW8G3gSb",
  "key13": "3TtST5E16YNC9wX8VbG9ghiYjmar6TAw3XaDoRviGYKf1my4ZnAMbWvLJG9BsuSvkcHhrE1jRvdEi4XwYa1ybAeq",
  "key14": "4V3issoJhBgmoRW9XFi9qzRYwDiRKv1cYcRXu8oaYrvTmHPDdjMreHoZL3J42BePsh2eqxUowriwNAQTjniXKDVg",
  "key15": "2kF8CTiSfRzudzT7EqoiofahGpgACmJNHEmUPN92at4A1y7K2KMopDobE8BftBtGMnDWNCvLmYt84wvfy2WTP5B4",
  "key16": "5oAwTd7LcEEtKWHfyD6aD8od3ZDyo19Yts4dnT4jQNAoaVnJ1NwdwmF9SqNoYxnvo4FjoN2dnYytuzXkhawsvv77",
  "key17": "621WmReN3nFuSJvQvN1npYi6fcpXrNTYdmYZuDRfNhSXbHS1qQPgvRZwH9SptJjwe1t3qqk2rwXZMYLqWBwC2y1x",
  "key18": "5Fxw7iWNyDcAuJqcajifto3w87aeSJASKvdvWnZCdsfKBUwfRiwocyi8GuftYK11P3YcHEbWmFP6pG1PFFQLaFEh",
  "key19": "4HJkkXExJKaM5UGM7NEEgmVicdVKFbXGbpV9bUQfqGEAgdQwfoCyk9CoySdZmv8BMQ8yVTLXp8AaEbbM7es8ehgM",
  "key20": "57ChNHNkdLRUDxntEu2Ujt2YqXqByPytZNHSNvwiK1nVpz49K6kVxJRgP4KqiGkcuykcnSgo6GrMwXY3pwA6DdXC",
  "key21": "22zJNfsbxa868v1pw7HjF9SKj3PQ3PeAqxG2PR6caAWquy5j2Br92ufjoD9m2YageyQeBpbPhR6AaRmxYBxVDz3J",
  "key22": "4NtawthFjbnyS8Bygg2tonEQ1YqDqonz5VrW2Sto54i22R3BQrofY1dncWmiM4DLjnGpqSmto5ZpoNTPDJT4cuSa",
  "key23": "iBwcMQ5Uwzq6zDgUfRdsMyDCCdoHkFpXqC6GB7hnBQ8LYbJGFM8duUR2ywwDuXHT6EtuAUSWKR4suEGzTEB19wP",
  "key24": "4awuhUd8GYmNdkko3mWbgSno9peyyp1Q5QfNctJLNYveE4gXmEYKrhfEn6fGpEtFuP5TcVNbRpyTEzqaK7T1Xwx2",
  "key25": "24DHQ71iW34MPX15i3gYkmuuBTT6g4ZNVu2kr3GwKhuNQxAZhgSrCC2dofQpS1sfZo1FiLDZ5fRQ3R1YA4qT6zem",
  "key26": "4D6z2ruWo8PdHDkP7nKEYRZrkp7fV4YHk7E4bGazmMM8zgZaJd7TWpWRWtbV3p7xxJqVvqpmLFFNovgqtzDA9nHA",
  "key27": "37mLPdxx67exqYCF1rqXhtv6VVks1sKzwn67fAzYgBmpMVUco7UoaoiA3pdBaMhww8qArhBfjmHVe3DBbSNjm3rQ",
  "key28": "3FDdhbGNVydGLH4NGZW9mnrtSk7hoDbtZpVomDr5E7G5XNmRhi6oy7FpPUV9o9NvuAgdikf7yUe6EqdHdtoAyuUX",
  "key29": "4DAVa5X9AtWj2nxXkbj89bzSAB9WdFwTcBJNxNEjE94vncdfdpZBaAYvyq5hXh8odWcbWPbfYtFmA2MCoyjgpYze",
  "key30": "3x9X5QSszT1U882mMxZgmnZQ7FAUb4yCcNb7TYJBndwt6sGysHs4oajV5TetGU3nqLdNq5mcj2WuUTzfNBBF5u7a",
  "key31": "2cbRTYTWEFKfj4iRz8cjsK2w3fzQqVQWi3duUrQqzRcELFxRihxSqo1pt2H34wep2bvAQCuZ6AcLNpnP1DzcLWva",
  "key32": "35cSzNQNwPzYSKaoSpZmAwBpYnyQThWhhXpBtm52u9jKCK2RLEmpxVhBsa9Ytgs4Zoh2y1TojTRLUFRdJQKcvRL8",
  "key33": "2HTMvjcSdCsjYjNfou8v4935amuMUABJE5qohFiADZ1NvfccT2eAuHjDafe9peGCty74TKCNSfqv5dTAJCqoL4DW",
  "key34": "34uAQwL1xjyw2crv1T8YeC1PfqFZnvN4okZyzuSaVH1mkASYvo6SQkGGr8uU9iytiAdCh7Syneq2vn4NpkVRnD19",
  "key35": "jNU3srEFQBkLoH62KsF5WfJ8DLcc15H1SDxiNfufFB6xGbrzDdjE5QKg1vGmWeW5Gb518dnYWNdDSiChVrxBy5T",
  "key36": "23LqUnMNXqM9wSipmRhTXrMfLMe2Whanksuyc45yrK1YotsGbS1SPaDjKhaidwBvQCwGxf2XEJkmYawdVzo1ZHk4"
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
