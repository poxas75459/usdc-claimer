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
    "3EUqpiUoo5RP8WgE5B9iQqRyovbJNtCUzA3uvpkTaakGS9Sk1y355ouEazbFUV67M9QwqbUNXvrCj8pbNauvWBGq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5nWpjY4kGpDy5jybZX61TtxPpJcosxgHo5mhrhf3FZ6HsqMz3ytucfXot2ejaAo9CRpwepXYjE4sfqo5in2E4b2P",
  "key1": "2agsUaCuXEdphcdaBnEt2EjURmjvw6MeheQrnC6xzmGRJh4TqDPpUvgPYExjpL9uvcJ7i7G969SL3AtJpw8ASJkP",
  "key2": "37aXH94c3ssxh3ceVxXvLkYjQJc19xkZaF5dtqsv45DhaoGcPGw5Bv5Uc64KQdmtanwVVQ99NZcbRo4Wu6MbDFaj",
  "key3": "4g3FUK3Bj5j22F3jBv5JwBUh5cFRC4pEgSJYn2pQgXqLVfvuAgiwkBcoPx8QJX38vGb4Ck6NLYegVGSCDz3faZbC",
  "key4": "2tA16QFuSrfgpku87qXaJkXHttpnWXVTdMS97NvXBSf1B3YLaSSLwjYJznqyfvBs1LEhvYxzWVPfLHpL446KGfeU",
  "key5": "2Fva3bGzv6rt4bN7g8LCsZnWAcJHbfAHLSLPDQmMKvfcZu2vmyi7xWZcCCqmguP7fjEV7T9aphEezJKszouViqPx",
  "key6": "3yXdJdZw6FMRe16a4KUeEP1YSfeBXEWim1bbzjMr5C4ADcw2hTrQ2SbT7BkJaizAbHCQHRz48EKCKccnxs3m6mB4",
  "key7": "5vW5mKHcp1SxKG4dvBa1VTaMJPzDYpZpSZM7SWn2ifzjFyWsaDwLycD7neN6thcmohweKkqzrfMBLwwFdBfywgzH",
  "key8": "PHVaqQLuxrRKEEYYeLcBLzrJcUQvRhXxucBMbHPBMALeHXmgkgBB3xfG5aiukdUDt5dQb3abWoAPiPsoW9vXHWy",
  "key9": "t4E5DuaT2QpEoxP4KsT6U942bidgYETT91XVoZB14xF9cxJzqEqXRwDSHBToyGgx3GGh8NkNVYFuHKbutjFPRTM",
  "key10": "2iJMKQbA9bsMa6vzAtn84EwCpYkfncXSRJQ4i2W5HgzkyG4hai6ChzgJfUqpa14wP6gpp7arGW6bAmTfqXwY5uWA",
  "key11": "2Bpx1JBE92rWnzsfxMKahjwAzcYWCNtK4GsNYTog3MGaDxFM9ZAQu43CWwHw84R4rww1Tez8Y1E73rz6VFL9Aosf",
  "key12": "4W4ifsgbJo9rU6gdVoC9755eFjWNZ8XcrzgWX6qcs8cam1p456cij6RFCKpMcFDvnwjk2H4MUgupktZmCgCgFati",
  "key13": "3t2ofb2CjUzBrFYahJX946KZgs9B8ScpdsV1ZjVX5JH33pUCSHZa61qCqJuCTeHozsfodh5wqZyL546h6X1EYbyd",
  "key14": "32m1RVtZt7MSoaHcXu8VeRBASGtqScCeor6DekwNTjqBfBZDXjkxjsXAv2qbc7zo7X6TeCWtWtVgdKFyDLgjwe5d",
  "key15": "63bHRsdLndCcdMBUZ6XcSwa5QtEfbCvnczojHuvE1iVk9NJzT6rCrcnTbraST1jTsBX5bUuArsViF3N3VmwSAMuv",
  "key16": "4iDdLnrawCCEKnPREoDoEqjjJoLfUzr4WjkWUAeYp3gLDFGj1pgM3Z9cUDcRdQBp8YbtmdwLdz4SyLY393GnC3pG",
  "key17": "27iMGroubb67N7cRXXwyjpTgqT21Go6hFT1444KUHu8RxH8s2rm9FPNRVWYaojBXCqw3mkYoj27nAjnxPWotBys7",
  "key18": "5YnKkB8Bbm7cVG1N1zWFmpJoDnovTxTc86VmWvsy9vykPhHY6G1kfAjP2jHds8RSKhKrPBdzVA4rJf6XLq9cC3NL",
  "key19": "2dt37RSaawzHrfQHGuBy6ExgJpLVjhoHyoEKaGhHSdFNpYQpVpa7cgTKGrMt1bwjMQDeGKJeY6L9NQJeEpQrzQXU",
  "key20": "3ZtwUPapAC8qj9ZqfcZgW3E8vHEamND5C8HNhE1PrFQzfaqavRcr8sVu113UejLYs8GDT46xkZz4yPGBN1gr5Vfd",
  "key21": "j7sV637p3eQ23fioyWqKk8y3zL4Fe3pZecKVynpmyBoJMTSkXQVA8XMLZkpFe5m78NuWxkAuM3m8fSPHHR5U5yH",
  "key22": "3kGpAXeFAP14YtByPbbuL1cMhbzARXmzMwGR55KrdPr8qo5FZuxNvfyudrJz1vgwNw6LkkdVFv6JsFmwCrnR9ocD",
  "key23": "3pWbACoNiWNNLhoW6zzrQzet7eGXG2pSUvhVDbM9Taid8EjttrpHNtUnKMBootE9v2MmVLafUrKLq5XMgTypA2aH",
  "key24": "5rfHTNiqGmQAuudxrprabSpMDax8WNVMgoHbp6bjqb4TdbA19PBwsZL5AmL2jqhf9hDP4nn9TzgEEh4sLb2CULfD",
  "key25": "u4USXrgg1Pgm4t4iUk9ptP6GsM7s8iYAUm7aD4ZXBG8uS5rrzNCC2p4HRrSFrzVJgBzwb6jL5YwSv12oztwYp7e",
  "key26": "2eBB6jkwAuH19oQXcyaPF98opucZQjey4gE4R3WDVimWJXTdT6x2WQC8Gih6KHPJqJhUF3z3cwJcz41dwRKjcTKq",
  "key27": "fzpLdV2iGrbh34FTpyrWW8iRBjxKwoLM9Hd8nZ5zwtoJz5yxYVkRhfQmWcwmhWpsL4P5iSQpMxLbuxjCKyedQAp",
  "key28": "2XpTfxTkoxsf4jsJS4sJ7ACvA28kv4fWiCtYcQRZkqeof9HuhReEzUpGhdnik4Bp6vdq2h7gv8DEiEpoTv4hh2zs",
  "key29": "3j6s9qrtqkSvca6rNzMtbC2HwegCLKa2A1HnwiuvCBT69JF9QBosQ4s2SKaw3o5t14qbewzY3ea16VE4bWgMEGQo",
  "key30": "379SMoNpTTf2CKdAcKcaCQLzTRRpc8ZuQf2j5kxGBsj8aCLxofnLnXifTHJsdXcMVrKN6X6xLzdywPtcmEpXHzZ"
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
