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
    "4DUWpTdF4DqFZKCj4ot7Ec9sVGvxmpq2BEDhEzaZ2eQkhqnJBJCthKvKJ8VxrACTQdqtFcKcxtso2DWWm2bQR4iR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vQeBfJgby2rKfx2y2bSL5AqdFpsSTWiDU296saPRf5QhexEzisJzgWETVK2K6ZBd4g9wXogrEpFn1nSYDLp3GW2",
  "key1": "2CTR97JonfqpgmD7LEkG7VhKFSLTZK75mYaeZeScJGeHyvNcBngAQhrLRDpxqY5yyvJad62bmcPsbQGodaAce5i5",
  "key2": "4rDiU7jaW4rUXVv9SzaHFybQg7qjH59kMRBc8qFBaz5hDVBuW3dF3rAq2Hx6qgAVtdkgbm2BYseJZzDgNZ3Jvmbq",
  "key3": "4ZecJEQiDbAg7yByHLy1uqDH2V8aK5P5RvMVsbQosiRzoaQvugpFeSxWkGSSJdHxHLs2yzX58eNgRoFo2w6rFo64",
  "key4": "67LshhmRWdLTwFvuJp8BBJh9Si4B4Zqip3JdfyoP7p23AcYBSCLHF5DfMHR44XEstzFZ2gj4AN4G83aa8W9BVXN9",
  "key5": "HaHmBikQn3FizswfAheb1d8uk6thYKdnjfyWcaMtTxiMkDAYNGagu6x6DjK41hwGAyVuEvp87uFATaXdyPLdP5J",
  "key6": "L72edMUxTvHkoLqoL5GjnWvT35ToGTA6xKyArwWmywwcxhrnECEz8MuT5NNHt4EJqTLJxGvySCewrjzTpPAc7ZA",
  "key7": "4ikipByNZ8sRPz7ZpZLtJVNXQszRTriM9dTLqqvibGTTbTJyWs3BGyuNkimgxhu2RLDydj8WLeCUbg5ZM3UX6asS",
  "key8": "4uoRDtj5B57nQPenAPCJPxBhuiJ4Aoc2Gr7fEHK3va9HwUQEecXw6p7ir9qpCPXPvvVdfyjB3vZHUbouFh7pYGzE",
  "key9": "2Fe4Cia2NQC2Gd1aWHhJ6kVnDQCMHdnGYwtW5rNuSJiRDQKr3vSzei3mrTugXBoZbeaELBoEHe9b4Jex55wd2Psy",
  "key10": "5eqXWCubtsqZnGMeY4j3bb32m4EwGSedaci2Ygm6AUzj2hG2dg9YbdcRfqUXiPKu6G2vJHfiYJPLuAuf4Ek7X1pK",
  "key11": "2n8Sart3F6FqQE9MiN8rmR5SkKqJNMUJ2Cv7aJmJXGQC2zbpfaF5T1XDyHux8eefyxdpgMkQKjewDkB4iSVdpRGx",
  "key12": "46ySr5k2ZKdRcmprByKSRGjYH6HPYRJHgsoweXTdynxovahD7nh8isKpYzYFV2SVGaXeX6vUuA6YR6scCTcvoQAH",
  "key13": "2qrtGearzebK7LEstZbxwtG1gS1zAFRQ9fSFMVF3xky9SCgxBUuxrvUMJnBZgPryEZZajDcyVyy7W8ro6mWWzTaX",
  "key14": "2k2T2cQ2neRTS1pnZd5yiyKnAS4XjWcJ59Ghd3zNUKtVL23pnuHkF84Top8cAoojMyYsDYuERR5ywTav9rUMUz1s",
  "key15": "66fLf8fWzwkJUHKCDj8DcSZQG9MLThDrdBnydMfy57bhgKFdyKVP5sJjeTR5jSh8fhWhG7a32SRLoGG93zk2Nxb4",
  "key16": "5QbUi4m2Pz417BwdPvZjEVSYHJLcettxjeN9mnHiv9pKKwHwQ17zokQGyaAPnQ1WjBeU9mRhUdsP3kELPEeSVraM",
  "key17": "4Mre3FRC9cD88ExwbTSQ5GsH2MXEhUv9YYbjrhi2VZQ9s7jxo33aABTjpQWdfJaUsgzkCYjbHGTkL5KRBnzyXjHq",
  "key18": "2cSgtiDqqgQhRr2NwauSgkFryodJ54Bvqg98eCFggVEJY9GDNAzyEcmZtJ7yRiH822W1sL6mGExvD3cSsPQZbL9G",
  "key19": "5tykkmgtAcfTNG1fxLPUnRexHiyJmMc8pyKXW5vDY1wk9PTH2sQctjwVb6m73hnrgcMnQa4bf9uesgLg3oSsqVUr",
  "key20": "2yMtZhcsA7oshJDum9Z3poDXuzLxrYoT3wSguS4pxoQYW1j5wuqg4X9oTDNsahHY4F5yNQDuWM4jZqfC7qcbFxBH",
  "key21": "3vrJ5N9pEktJriQqYMyHrtUmdmukXmhyGa7JTX7zWDxFzHS3DqrdAsvMK743j66aXFyguvKMPERQ5hEdXmjjYwbA",
  "key22": "434Fd5p2KzM1crw31mVM92ZDCmM5PwHHHRzigb7ZDpSVSx7oeonZa5wq2jbdwCjz1w15JSw89DR5YDwPSeLxp6L1",
  "key23": "4XjhUpRLa8pokV2PWNuWg7vwJaUYjYxn7iFG8TWBf9H7PGyh2wYwjPALxziopFHKzLjJJaeCTxJtrqYcVvRWHEQp",
  "key24": "4f933pCQMT4YysDKgMJFHPu3C4TduZ8otVNB2FM7oCvxPN6nWRz49uZauswne85E6PRJn56J4vt5CkrAV5gDP3pX",
  "key25": "2uwFmXpXwKRy7LNJtdaLjJQSfX72qemXyoxZhvMQauw6JHUWc8CMB65JC5g4eof5Rc3xrDX2tWkVv5BWM5M1GoFK"
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
