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
    "4TNwxvfT5z4zUfXDVtfi94FVSRkT3AHrkBN3yAbhECdUdcK3qGqsNkK5fpxnyJDBBCDfDPW3vvcoyYcpCfMvZdPm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3bxhjgKWZMjK8ixZjJwiFoToKYX3rtSBcAVpecyYNshP1CcViwAEe241XDBt6pAJgqayMyLMYCShF58tM96iwy3y",
  "key1": "54STHQaS4gn4Z3scF4wucQCbfuQtiYFgZc31rNQfPzDUhWnPyuk7SZWQ68PpZD6QUmkHrQoercSoochMdNXPFrqe",
  "key2": "SXreBNPrN5EMCdqw2djM9VMT6H4Tp5kCpmiH58JX9puNe8jYXRUwdSN4PEfBe5qhJWq1VeGS9RxyiCzWfLhNZ7q",
  "key3": "3MooxWhEUKuLWmB5W5GtEhBqjFVVg4wG8WqQQZCdxjhZ7i5oDEW4oTWHyB2MZZyNJEAWY31cgkArd4jzhwGn4UbA",
  "key4": "4JicLjThH97wLSLKUPn5eifFWGaxpbdLC48C6Fzf9L5C6h6rGhEzm5RjnqKAxZT4NWDrjH5owF64Sduf5rU2qmcP",
  "key5": "4ge1K3GLNYc1wLKZev4nu3yLchDR45174VLcP7KJ8JanoQaWYKTo1qsQDmKLpi9MnNphDaNu97EJLbwd2JAuTWmF",
  "key6": "NjE6v3VcYtLePmJTzT9poCiYsWBc1djZaB1d7Qu9856W74w83B17vzwNZaUUS1mH1bUWy7KRoHUjo5Zc1qfbhCq",
  "key7": "2XePJ3Qo4rwS9qm7XQ9XSXTnMQLTU62NnLiduM4RKZi9Mx2SN2aWA54DBBgKiSGmGsE5g2LhTrZcsEHastYaLyoV",
  "key8": "217cr6B1jPgcxUvbpbVXkYFMG5UJ1oCnKpNonKC8CXHMn4qHPfyZpxpSBnCHNp9L7piiLmSaqMH3TiBR8djWkkfz",
  "key9": "Ec8Qb5HNDvPQZmpBGVFyu7LyrzQFHGsuhXsctvANjqz24WB2GFA386KhZgGaxSjMsTW29hmD1oXrS1xpJos9G56",
  "key10": "3FvwmFzxRYnHBrUGr2QbssdZCDSoMmtngk6bhNzTB6ZE9bDgSGfG6u8ji4q4intSij3xadKRZo6wFH7gW2CyqjHv",
  "key11": "39DkdvkxmNnsb61z85yzgEnvCMmSSRJGwnHVmSXptS8sx7knvfS3g6SH678uyQeKgitWsqQmGQtPxowSdexCVCZr",
  "key12": "2fgZEXb5rurKWdrTTp1QKFoNPnwtM3NjBVj4geoMHhRL56GBRvHwZ6kxeehJS14yosyksj5dcifQR3oMfxqtRz8m",
  "key13": "3dQxi8R6Hi5pCMSEikAkzXBXD9YcVQ72jHWzRoZ7YodEQGSkZwS4kkf4LFNTd3LFTTGVZG5wmnMshYj95NWYFfxX",
  "key14": "2QCsrNiEpZAXbNKDueepCfS6WQQVCsVd7Bw77ZQtVH7Ax7ngqAbdvb6wxpaNR9w3wviPhvFLYRkA6AgvFd3Y2VgT",
  "key15": "32REVHdrNXYjttTHABA1F5AsiVyzCbtMpBeKbc82JMrVmvyXLcnWCSfrw4AHQ7frsr4kaPjHHJ326QRj1SutsrLH",
  "key16": "5t6vNf3eXH8NMHcM9Qe8tfBi1n94WWR8hX7aW7Mxzd6nALuKjXdWstt5mdusKzjhTGHP98xM8utmMnTghytkSEaD",
  "key17": "2fMeAeAeW5Nj7doTHYYRsQgU7FeamWgwkNsXZg4xsjpJq5nMS6G38nJ6XPXUHU89tdVsSySWw18hQ29Z7EdZQBzS",
  "key18": "2RaGeCHpbqRHVD7JYTDMvsKMyG6tx7ZYfQWv1Js6iG3y1CriQEKWBi6cbhQgdyK7Rtx4Ja5Y6b1o6hnQekqqPKZp",
  "key19": "2twzooVowtA9GTwD7eqogP3x5v7qP4DFPSrTiHuxNHW5mr8pXZGoYUiwpgWjtRcRTBQAcLzZDKqr5r9aqs6Qgvxj",
  "key20": "x6wqr2MW8APfdqMdxRms3prjWVbXromzhtuWC75GTaYxUeeiN5hQgZy3kMRdsyQCmpHFJGegxF5q5dvMkqvUvM2",
  "key21": "2KdppHYfJDYBevKJGWB5T6DUE4DqEwEZidXUHZEpq925qDZsZQZtshoo74fcVFoC92qpJrBjYmAbvEqCn4oshas7",
  "key22": "2QDHYf4yimAMYEdxxZpPHVaWR899YaPZWMtzSLMFnacfc4kcN1mAYSjbeKQ6CNx4jDxJas4bLM1ReXaQy1VLSf3n",
  "key23": "5vFrpUGwGbctFacFV4L39nsCPkwC5NoFfaBj8FMQcHr7J9T4hkUKtjzMNASq1sbDQp1bPrLLXA9dY89tzQwD8XME",
  "key24": "CFTP4Y2yZkeXduTnHXmramiQ2Dfrn61QKapQQNGRovLMDs8FJbCg7S54GzuKuTsRejcKsAMN98txsxkcicrgSay",
  "key25": "DrHixJA7vVPYAmnhGzqCdE86X7Uij5dvkrir4NNFw2CGuxRiTdF3R1q74TsVErcqxdJCwHyGPCDQEAkg9Gervj9",
  "key26": "2AcUp8rtP1xVJ62iYxq6zyxmve9DYGWyqPbLz6sPaxVdFPbLngSyZVigbVSHW3TMka3SyfFXKePBXVLFJ2yCFoD1",
  "key27": "bXpbJgZj52i74o4bYBXPXBBpUDHX5oh5sUVe569oRTTQaubLkHdcG4AfNepjZtdMe7Grjg5G3wK1b5wZcGP4yo2",
  "key28": "2UT9F8TivUYqDQcfkEqdyJ3vgCuMjvjfL8X6sAvBX6oRkyvpTuJzaPekWWapiXgtuAeaGQ9cqKxTAbYds8fDWYvo",
  "key29": "2wQEZgnoPECRFY4ZoYEZKSdrYV1aJ3KsvwFCbhCDaNNjqEyn6j27nKC3FFazLRjHMzTa91DpiqboRKfccArcdE8y",
  "key30": "5ZFYZZxpupDTCkFZZZJN92hrg4nTZEKA9vGYxUumoknuMQakJYssPNXTDWui3uNE9HNSHQbUwPUhj6pLjwwC9HAP",
  "key31": "42Z6TXikNZY7TV2tmzN4onC4zQMU1LLKCfVdemvGpM8nibYru7ra9vDDLsymw7dL4V9jSS4nFngWq8xSCf8BxAHx",
  "key32": "HZrTxS2bF9bxUu9yNcCWBfbzKdj6JKJE2ku7pNfRgeZzyEQVLinuMuaSpJf3iNBsyBgRbujG9ak3T5f6qpb9QEq",
  "key33": "3Y8KLMnjS2DTq8jyWHcjULVSerRGrgDS3yoBWvycgXQ3BtsijXKKbxNbW1WZ9HkeQzuJsj6LDGQb1RXGriNHhvac"
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
