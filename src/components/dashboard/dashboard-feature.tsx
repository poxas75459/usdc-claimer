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
    "66f45MBCMeWXfyjE5XqeaMouDiU3g3Xy5aHMbfmtuKyr2beUizvme5FnQjYGtm9FPvzpv4KJrxDHMMt7QB8fvFyL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2qNmduFJBdUgcQBAq1VTNbgJ5n8AXN67emq6Xr9YJYLXfgiew2GAUatthnGK5KrwE6prNTqM7tNTRwc55r8zDCPN",
  "key1": "24ymExfWnsbzPSvJZDNkaCTxJwgoaHQQYpmnxodRAws972yNkkGfyZjuG3oA6BzJ5VVPFeqT7wDe2QS68ugxgp78",
  "key2": "3v7mVaRcxD6EpJ3j6KpH4CKJa5mN1PYKLzCuHYuvEKrKAXChvMLFu3MyGHeezV7bkopRNB9qXGm1eGtmGa3xMJSE",
  "key3": "xk6KK31YF9VsBjoENf6xJbBtnHfUu2RXg2rhWB7ar2sBmhTobUYihnkGJKoiPkD5M2EBtD2vqnfbQmEEjdyWAtx",
  "key4": "3oGHyzf8zFQfp5b5ofQqRZYUNEyrFSKREqMg92DtiuBX1oQWceWM8HwpDp3oHqEWSrUoM64Qu79JukbBMktaSxmD",
  "key5": "cxNE9cNeFJqW2qW3NAeU49RhqwMPvf1dPrr8ukb9QYYbPM9hkDNN7cmoP5FuNAkU3TALDHEnqb2iJMApgE6t5S1",
  "key6": "5YvVy4XZyRkDyemwxAG3x1M6Af5znNuW7Can7qmn8wUfwwD6r5kTFmxnJwGkdqVy5PunGd8QQZDPuddvQ1T2ggtv",
  "key7": "39rLAbfY3HCmuNB8RmNr1qh9mKTemwJEM5pTCZFkR2gUEfmGoGDKy6hCASVmyhDJBeySxJXSnNp3VesbTq6nn3Ch",
  "key8": "5Rm3KhA8gvru72okj42jTKSx8oXfPnRjEgccuUG2gwr2n2foZLLGX9maViLjtGYMmTNZyDKz7rVdmPo7tKrn2SrJ",
  "key9": "3z7VTeE3r5JYC5BBR17iCZaMaMchDXzKVWHW2fTxtMp7ZrBUwxeu7GABSbrt4wJ9xGCJgHLfBigiHD3ZxfxE7geN",
  "key10": "5ZFejcPt5hv6XXy9LBLUgvr6CMCZB5S6HwurHc3q6vg41kiHgfVvgqQGSwQzGCqZoArsqmF9FuJzzokkMuX6iYfx",
  "key11": "5PgDLkZ9ZmaBpaT1HK5TYHJRDDCNF9a4hgujxU6K4HGG8Hswue7vy69GHmmtR7uvgmjqkmUjbHEWtjJQyapzi4A8",
  "key12": "3v4APLRjUoTnGAY4QycGEELoXvq68eXZUzUs7kAXWLCVJoC8GGFJVDGFv8PJgZBcQ41794yCivdmkfdUnXqEVBVA",
  "key13": "4MNPYhU6t4Yii5zFB82MtNk3m13FZrRWGjp5anAT1aswij9wMj2fyo6ZjrtvegDBBjYPp7PxALUuff1YLpZj7yTC",
  "key14": "4Ewewm3hSnnugU55qcjp76zStmt9QjbFxccc5heqeJs8hVtD8Qa2Ce2uiJZzuuPmG3fKkcUjxZsB1oE1mdxDBFA1",
  "key15": "2ntgZfapNh6S6tkB6tfu6nExm1eVwqhtK38vWQuSnV3CBDaBLVgk1St7Pb9S4KbLL9DJGTpgTb1hKGsGSddZ2v8P",
  "key16": "2SetYavpRHaQEpb6LE9PJ82ABxU46aEyRc1Lr1NMt1U46eVVHE3HQymCJKTmWtmFVvRRY1Q92dsCirKhcDf1dgQr",
  "key17": "327UXvP6YKtj4HP6JcSRKGgC6pZBYeFYx1ggwQiibAmYpgnqQmkJw9WVvNxGv1t1U7Fzo9Dvd4ZF1FzRp5EHoa5h",
  "key18": "2L6gzEEVpza9GVm3WbedXFWgC7cYGZkZcJyV7AzeCF3t32uoB16KamLwjwBCihuNyuCywJmWZ1WYrTKYWSJP1kK8",
  "key19": "4umowLEusXsZtGUiK7HhBBQ9zcBgiWExMEeYsGJCivdtvgnqXVCK8hUre1LH9fCBTYeh3NvSSgVRQhzb2FMKkddW",
  "key20": "312oAFhvxrx8PFHB338tdfGJNkEA9KY4Ps8uexPNAz7hQVSF4HUQMdDZtKSrJC2pCpYwL7c4ZQ5ioravezaokeFM",
  "key21": "LfCGyyxg3rHei6wuSTsnQjwNpzzHDb69apxMjivA25qT1AUzdtufLDMK91aggMrKDvcomc1Cc8vzHdQrfi9Jf3c",
  "key22": "4opQYZJrH8UJMD5UNdYo4YWSsrhnpHnNNbzsFpEZvGDwVHuHu467jG7qrZo7q9EtdZNH8HjyXCukrb8r57BN6DTS",
  "key23": "5fdNR4AqjjMwgSPiHLS5k8g4KT6GyZrJNgy5MKQBxyiNLY6MMXjmpaL4bNdRuQy4fZTypERRZCc12RXg6wxjryCQ",
  "key24": "fuKhskWzReZNa4LU1gkiAXZemYQsnTFcwc6xZ2UbcvXu3p6mFZFbgaMf5boiAvMCmBqnS8FDkXyshWPffqXX28h",
  "key25": "2wsj1jhWYbkeeoUrkT274oJdavdNH3p6vJkikWqimWuC1XBW7xqgYe3RRCeMmBLnMENZtdih3HvvKS5U5UzWmQyY",
  "key26": "2tu7w7iK8G2JDY9Rk8eM7U8t5qVFmconnMaYpNMmocZ4AZdQp2EQERJtGr2VCws8FUUdteVDaYxPd5t3yJEqxYDn",
  "key27": "4Am9izCjatMfq9TxvqHAFbBSGz3MXLjXXTmf4YZMiZUYSx7YfYS22AjrpC1VxcyqNv8s3tnpLdNE757twFFWdHNC"
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
