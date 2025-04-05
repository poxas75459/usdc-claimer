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
    "5dDFcVB95JZmczxXGQkfk2bpbgNTPZ6Nr2ofJXj3ZiR2u2puje3JSrLCE1d5WY9egEP6pLRfaDuR1PuarQbQCQwD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5sYPMJc3Ycg6U2zaKM18J61E8gXFhuYoFNUKmvPvdttMYKKMANPJQHaWz1sbStSgJBL4MyNEVABC52HFrMJkLmZ5",
  "key1": "3QFBQLV2rk9M7MYedA3TdpbBFvnGPgYuL7iqKYijWjVgRxaJGf3Un5AW1Ese1dC1aERKwJNAuDn6BvHShk2sfnSi",
  "key2": "2GkvsJ2ZavhqnswfBJsRwh9gvYfgCC7864XtQbLoxctx2t3sRNCv6kAZeqA79qCw6mMVpT3YmCBXezp1R6cpJ4P8",
  "key3": "3JHXGRmeQaQ77xb51ZPgCX58fgYXr3p7uNQorHtbuCgKfwVbdkaHMzD8sN4bN39XMsdBgm2TKBTWXtEyBbGQgZW6",
  "key4": "65aHc3kWPt648qzzE2A2owGFKcwgacJfhibpf8u6DBwcnTXtW4VGN2oX1myjKmwkqkdvvgi6Ju2DJZ3TLHJUYwS1",
  "key5": "3fn2QPoYMimUkr97gPQo4d7CEL2pKamKk4ph7vngZzpEeTqGdYV3G23tv3cnTuW49cxWf24DCqaC7q3wdXn31tTa",
  "key6": "zZBk3VbpyeGLBViH7MrhiniW11umj8ZDXNETLSHzizQxLzZnDYiTVCEMymZJXiDcB8ZtAHzefDb7zFGWbqPh2VF",
  "key7": "3oEzntySg9birzhe1QkQ2MP5wqSo3byNkYYHe5xNRrW4PZT4k5W23oKBjKEP9wqWpgCTAoEoLX7kmzG5jjWz9GAJ",
  "key8": "iCVVfLqJhFu3qwVKRtAhHhvwhj5Tj2BT8E8jpEThkMmGJBwc2u6wxWp4BAhyXCAZgFDo7EPNeXgidjN5th72H14",
  "key9": "3WyDanWMnaREhsaomwbrTZcUnXZsBxF2XJPEyTGy5T3QKMCbFTe9UTkewtWsjAGs1xot7HFbxhyTu71GeuogqCXU",
  "key10": "3sXFbiq1wagDGa5FenRkHqqq549RjLvnTxiKEkNAf9qzVAntjBsrRYghHSX6y1R16uZwB4YEPyUcBpvDGdDvmAyq",
  "key11": "opmwbEBMc4hG2zXvAyuyQrkxPzdJFNJjQQLWZXYamUJ1X9UMNhnBpEVa187augnw5NvJvNj9dpNgVkpSU5nBhnL",
  "key12": "3Zt9k9Bgtprj76EcjUNPQZjSyShUceuF88bz7EktFB4rAC27XbSfweC2eYWwoLFTZZp9MMcdx7iJA6GcgzRGyUaU",
  "key13": "5mvWSxuKF45Q2ZHhD3VxQvC6Wt53WmFnsXWrJiJPpW771gy17BKXBb56XiLvCt7u89JDY4YNAMvzBdFy8KdKKGGE",
  "key14": "5jsvYq26C2uYNWCeB1Ag95ryLAQoQUNSZrm5Z9LdooPSNwL3L5GfzBAHLMrGQSEQvRDhj5FBwzBYgRTyYx9r48Na",
  "key15": "4XqQt5oZCWfBPEjGkrJJVfEfsYJighJTL62DmBDRcwuspHihjEnVApsCYUDtEXghKzxga9QnV6z2yEdKCnSh3c2B",
  "key16": "511P55z1YHKRwQ6YU6LtesP5nYWRvphf25DXgzuWCKEtkVuZULL5qcxmyNGKotgvuuBa3rtVuhs3tYvH2ugGgJ1W",
  "key17": "2G9dtuTKQ6T8jsrMHiXRjWcZ8tx8ETPNMRzQk4BqKnSz8p8hwcBSNPRfTqCDoaJGq6iHVDhjMbBcFckTxFUdMvzV",
  "key18": "3d37mbkcTVY8ZFCpHgTTFFpgbxwTdx6sMQhNk1Y6CDvTjF9Tv4TU32qtq1ReanHvSKS2m6GD25zpJjvsm1MyMXU",
  "key19": "2F4gBn9JDyAMcCA8eMuigYrNDuiDcjrnA33Fc7fa3d6jLPmT2gMf6nfrTZrY9gKhZEU2wfKGVdBRFwV8JonwUSdt",
  "key20": "3mUmgRqHbaf7mc5Ug9TsqRoT5WPzpk255V1JNKrxStA4LRDwzSjMcSQRcDtMBdRVZHFbvjoSpGVbToNupJ5cUmcM",
  "key21": "3FXf77Knb4KurzB514aKViEjnSPfBy4CHiH82dBFRUVDanzyMnuuUT5xBbXB1A1NFc6h8k94jjAMvNYXTtML9Nk",
  "key22": "5UfE8zQMXdX6ZjuLqUMe7jPEbMW9Q73S4ZZDcvKPoKxCGw2cyqy1p3XzDDxtCegsL5XL9beBfvGdsYJjaVd8swkx",
  "key23": "3bVDewKKPrvZC8qzkhi4pUBnC29NQarmYC7qEhz3X1CKiM7ivBPri4stXhiZxXrY3L7wQsLZnm7ct7WbXQHfmVvy",
  "key24": "3YJGPh9w3ZMhSv6BYcZ2iwr2JsHPEM7EFiyrxpRnpbkuuvWFmKqaJTiez2YN8PrCfHmN14fwVoQyjTC9vgKwECvS",
  "key25": "Dt3XKbT9A93un89urtWyXmCmd7tXTHfqWQx7PSWKMHK6SczQskpn9VEq2XpUBAWFSTNrv8za8sPT2W8gvsi1Bti",
  "key26": "4YbP2X8zJUzsER3RuKMejM3LxKNuqbjGsXz5FYbgKZsB11F6EP7ATKUN836sP4Z1qkwty4zBpb3KJyANvsGNSnN"
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
