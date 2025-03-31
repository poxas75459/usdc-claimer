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
    "txiQy7Zc36GLNeH3ffgaPmZRMXfqgwDMJg3MzywLn168HR7vFXV2DgM7eEaxxKCBvgiVhjmwZwDEnLx6ijYf3sG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4xsduV11wPTXwoME5mHvihJDuNV6dSSnb1zr6cbX2LtiXCZuP3WCs51SVm3oDjgebGGrwCRaxGyUKtPecH3nzAwT",
  "key1": "3PfwGyb7BidWKjVH5iZYC7oa75B1fXaTU8Uz12aDQnWbsnAHb2i676gPxSJf7Aay3zJbwypu5Qxu2S47aEwm28oc",
  "key2": "2TgQAJ7vGsxRBcPxwLQU3uEAmsRQJgbV1CuiHQpXVNfggBg8gTasqSbcz5WBYrdZRa6QCT2CRMe8fzRpL6nYP9sX",
  "key3": "4b4fnsRpLmeFZ6KNHGLq2mz6FFTKQUtqZPCpxPePugJDQTnP28393c17BpBkrBw9WLM9FFjMt8pRTnLnf2nTbBKZ",
  "key4": "r77wT1MfxGmoHiYz4y24k8CjiARDagbT77bRsNySgX29hXZUUjqZ6ZnhxfS6D8Y7nFkGQrvZJWoSQNKZ45QXLzH",
  "key5": "gtkuiKW2D35DoiWg1Wk6oe4emRJyGSuLzKMSyJJijJTf1zKGEedQ1gpLpwhhxtknatv8KkaRthKYdUkAykitMSh",
  "key6": "5a45i5ScFcY7KBuhjpXTVVPHLmnDFPLEe7cXQqnchQ6Tw7gTwYqvrXe1J3stUfoe4nCnvJHK1AdCBtTWtbaT8qEC",
  "key7": "2wkqyrWpYJUWCToqHHVmy4MGVzkjwMXqSXeAXaP9wLbMRsxpUq4pMK2hwejgg9xVYh5udQYxxi9CNMkgQtLm9kaA",
  "key8": "549KshvCYQcQmBMXrG3EF4Abh8sn9PaBL4Ko29yXLnVH4uPbaWy5L7HpxeVHTZ6c8PimFqdSYkMdpRMQWo2TVFAr",
  "key9": "3ijXNU1WXrEe3S2bpsh5tsfNURfswtUXzAASMuUDkNqGmXgGnTbmSVtc5PHJZDV4jqanPomcetHMi4CUkEFERDU7",
  "key10": "bD4U18xm5MtLA4GxiGmPTWR6CEZbqQdKZJZMtpvbyzWh5rXosr2Tn9fgRyDRgx7gpWp7VBCMkyHUDfafhPFHfT8",
  "key11": "4tLq9gFxDEJKoCzh8w6VRGdk2ZNgc86CUDvjbRuTAJFPmTk8RNAmKHUMpsMhwPHv7GwUkdANyATLehVY8yy4FXdh",
  "key12": "4po4TstcfUwt18hhBunhjo9SW58HDwhfb3sVey1HMVycNJmqLafV1wzFqHdjToY2Adiaykj84Wmmrofpe8NkVwpF",
  "key13": "3GCNPfM8aZN6wFT5YNMP7Pm4CXa8QTW1FsSgW97hHiV1cV1WbW83EXSEAADNHFqDZqtcik5Vc9v2oUPxUJt4VYWD",
  "key14": "2UYBSJ4nYUtyL4bQBuBYgfD7NRUiNx44y7DdjFNsqRCCi6C8FWaKjzU5QKgiVYJDP39eNW5XFjaMHdEiw4yUL2Gc",
  "key15": "gS6RBAUbwfGALd5h246kov5o3PNpR6gPb3fYkyxxdSXftMwQp3wv7Hg5jMPDzDLEPhTF4W1dm8aGyKTGeapuwNy",
  "key16": "5X39UFjRXvuFy7N5s4D9UsS6h8Hs3czxLggKuArvkTMgAJASQvpCmoGAs1juGbd9ZVbuSw7d3Ln7wpK4tFFfnFoj",
  "key17": "py6gcb5SaZsNVpYMCw4VouW5jWVhcabn1355NzCX7dgPcJwhHS2tExrM363fhYvRybXGKJNqnSRFY5Ttj4wUfQk",
  "key18": "4r8MSqV1YgHZACe92PWyixQDKGf5fZdBEnYFPBZsEgXidqA4Z9aWiCdXSJ4hfiYnpd5LksLAbVFRzqVofUbMP86N",
  "key19": "5VrDZMHTfergjbNidGNQVNfrjDZqLhtqkBFQeEYk35JCPf8qrwMzUs6y31eBU6wg1mbTdjYRTJbqBo6nSgjytJ1w",
  "key20": "2TSNoHqEig9JbLXQnC4XRoYacE4Zyso9tqZSULoH59vy46ewwgVUwRxv3X3H5c1KeFSbu346t5EuFMh42ijSDKgh",
  "key21": "27RG965uGC7yQDhD9NDdfz732tSdn2c1orisuKQpVKpY14BzV3LBncA49zK6kniejrQiaq7V6cueNAJLNh9GajQK",
  "key22": "5TivJwRp9kXnA3emhtZkXtFYnzHV83i2josA3taASMwaMZHWQ9WdKhsFRfEnnhH5GuGRg7ew9maTxPoA6T1Ss94o",
  "key23": "3xJDeDbDChwkUjKxj1KJiV8VjttyFQZcipoiLkhMvSpLN8LMcA989XS2zfFf49WD93SbiYA3GziEu4prMWLQNQEd",
  "key24": "5erL7BEn4Se4Sshfx4bpuX85iU4KrVJnevamy2wwvanF2R78Z7GB23Jgc9HSJxwpxGHoLspTVmpfY2rzHLZZZftQ",
  "key25": "24k4dmaUFm9gYQ7BpE7t47KnU43v6SsWXFA3rA75t77PJayajUh4ZJPLnBc6QiLhdkXd8PrWduMJ5bN1Wmap8CYg",
  "key26": "437PVMuVJDLinARejihyM7bZwgaLYEU2hnxCRUAJ9PdUZrs5V5yYcnWmarhXE259BrmHcB11yVxq3Tw1ecTcN7SJ"
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
