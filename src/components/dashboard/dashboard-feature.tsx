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
    "3todwSx2xtoCtGMuVi3YAvvJ6Cn28PdqWdyqs3mLPAwkB1BnSXkXqqYsAeupzKmdLuMCTtmKFYgSUfi93Dbktd2y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4aNQZCyXkoagsNJUSm1MLu4V19vxvHPjN887YFuUdP6oPwHriHWTeXBXTkvLXsxc9HUPMRa5AgbRvEjNqoEFe9Ws",
  "key1": "34kmoXDrmn3hwhjvvCTpoLLeUafDmn6QUYyzrpxznMAaJw668H2MnE42eJvzdG3voDiMUzxaoPvwTDhG27zThFnL",
  "key2": "45ZCUxF2jwUUy8WLMv87ZYhm5eRRDeHgnSVGok5eq3Pvkp4FYH5ZzooEWmKgxsfmzDAWSDfrXsduwJajNoNF8PjH",
  "key3": "5bRrk6s1i7ZLxf2dQ8vfwvFEeLQKj8oNkXXZvEre6Ut7PDR83qG13dR7norazwkx75WqCz1vD38wnzqBFvCUpxHZ",
  "key4": "2Grfed1Y5dzLiBYKQpFh6urKw7H15j5t5j2k8diEFuk89W3PWccUQky8XPVxRM6Tx83X9Zcx3yD2eRi5QRcFFyBN",
  "key5": "5j71MCa5CWcNGnarSSbBhPDi684VcrQmVYmEwaEowW7JvWSayKPbyLcuDvSPPsVQZh8wxbnhnn7AvcMbGjmYFwcD",
  "key6": "43YY47TbZJBhQn2ah4NNoFid8DLiHKvWYWQRL5wxJyyE1suCtBcfC7m3d1u5TZDVvUoV5JztBzyu4FdC7dkPhWBf",
  "key7": "5pG6kJawCkhFY96NEczgTB2RMEJFEdbnYgeCu4K9BUDr6CEnojkAidFAVifkbtFApKGqk5kSMvAqWNWEz376CbUM",
  "key8": "pE9S6jdNKVLiZ9VdXxYUyZxUb2QFnJeqz8ugiPCiUtMQCqGgX5feFhgqVaWkiES52wx6N4NKKyaf3ZUXAFzp4FA",
  "key9": "4jYtWFK5zTQVfHszABRgG1bUyhXRbs5VG7Ga1Xu3aupSw1Ju4HaEk8hhmXuDpgRNhitGpdbfDYbLVsgCJjiwWfcu",
  "key10": "3fgeV14tZpD7ybjVmvAJLEeuNgUHmqw5otcNrekhmVsDw4JtV6rchC5JAjAEJNqnUjhkDbXiSBvbntVU3fkE7hBk",
  "key11": "2X3jzp5KEjShB3WJVBTXuCyFexa9pb5ktd4HACaKhAmpzVMgGLYiHik439njyjNdrLsHtCoywX4G3Z2LacyEMmjJ",
  "key12": "53SHr1cJo5w99ajWgZcnHBxiGDSn5cHgPnonyLZjHx3CwP2iEgzxYa7b6Nw2fxTdoeAK8ikRrDZqHsHfmMrUcwzv",
  "key13": "5kwqJY3hSMwuaYWRQSmWKE3h6Yd3zdMpanNVnDRpYbQmHk8tkxnezZ8LbcxEy3zmTK9tJaGn4yuumyo9wix2Cwhd",
  "key14": "a79azkp7GaFdAJHRrQxFxKP27HDKBHYZCXatyPS5Qxte4EEGJzVtY1EPczppznKWvtdUhFi3TrnsEz3bHdVW2pF",
  "key15": "3TzRoSo5DFaAd19VrEmBmFj1SnrY4pxiR6LEJFGTEYZJ7SK5C3Yjrpe6Czog16ZBxrxXNrUR3gRyZpe2qXodBjWp",
  "key16": "3ND44oqpFNBhKmTM4G5kdyNpCsDU1YrpVdPhKHqRVRUQ7ocQECMZNL1cWvT2TrMj9EvogDrGwgZASaTq7XhqWmwm",
  "key17": "3pXayep1f2AUT1WdwEHZPGkyMKmh4BPkwu5no61fPnvjnvZ9WdcBK5BAEUVHXTm1kTxHEih9cQKcBSyZR9x24aJc",
  "key18": "3rTNuJickV4yEgkfD7GTKDoy1kMGdSFipCcR8XVdrZZsNxJXmUNpM9rbcBhsbP3WRtrcE8WFvqyn1B69pJxwEetz",
  "key19": "3ghVJEX198JqWYW4mBJgpmfsL4234hWSPKLXensUSwN7Rr26QEyvkoEpA6W5AdwN8UbKk2pfYAPxcZJ4fy7aeT2L",
  "key20": "2GR1kGsVpAgbnaGLvrFdmFZLBey2UMSnAuMNPtSSurJytwMtfdNQ5Xyj6Ef7X7m3yTKsMHB4nRYm878ea9AMUZTz",
  "key21": "4s24RBiN3pYbbSuPjfQcEhSLFkSc4NGuyTcX1xQMDJCVw3YMhGg9H2LyFgdJkhR1k5x4iXwt63NLHBg1TCJgJGK4",
  "key22": "4xSW7DY6Y6KHgcEhq7T5sZ6nrEWCtUDyNCUGcmxc1rmBk3kcj8JcNZ7N7ZiJVAXiEbbLcdLovdrfT521Po5mt6Ai",
  "key23": "yHuUrrduPgyDQJqh9er5oCV4uNz8sL6wGo3uyWRxaKbD7ExpLsYSpXXHfqvDG9QSoCa7y28bwpaH1LpcEFVFHLi",
  "key24": "48XqtmqpA5B9n95etfsWB9dNKFNzMePqUUamequr6WMx4emvXUDaMxP1k6gnAcjZEcUKUnfHFonFutDa38DRayF",
  "key25": "5M1oqLo31DqppJ4JdfRJKYVnSmeZXmKqeVWUsnANaYFP7AAMr2oUbNQ8juEd75WapvuNvzxS82WTd6LjhFt95Neb",
  "key26": "23kqZS1Ee2PmZuqXQzDuMk1W4a39J5cBTkoknHSAenxgbtDcAFM2c3X1XQP7uDefG3yxdR6pLK2245waZYRKNMmT",
  "key27": "UokUVqcixRGiJRntozjTbiM9XR8EZq2ub38Ui5KMWKdLH4z4ZLr2fZu9Ue1ettqsYpmJZtmnxv1Zbfw6kUdMrrC",
  "key28": "tLmwuFqQ7msd96MRccx6XU6RyoSKBnyfTSNdtGo8c6tACn4U2PGUk4BMuZskNoNsnHMBSxFRbnXeS94VJJF6o62"
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
