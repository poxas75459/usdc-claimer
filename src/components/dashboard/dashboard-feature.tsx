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
    "PrAxUDAwhN8cxMSkf2Rs8kXKWFPpdNfjdmdf6bbsZDLGSZiqpnJqLPFbMYoVisbCHF3ySo6pcY4wxquaBtPSnLg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5dc2YL752LAzYMcEQruBxJcDGP1sPgNRE6ncQJk6msF4mqUUijkV9jdJz1JMHiquR15uVgaAzenr1VUTC3whBXx7",
  "key1": "3zkXqDNXaDVrk63xZjoatfcfz3aZkSumYgJ22J8MDusVX7iRBaFtPERWuyc2hmnNoMFah1ryvZ1GR6twEYHrPWQq",
  "key2": "3QQnK6UTZMY1jfdN9dmbLRDPEcifmhULwsdehVs8zJ2ZiSRxTj9qNUs7v8eMz8azWcoR8Z3gRWkRn9EXCrbJofb7",
  "key3": "2hisoqVog39ipj9CqTv1XNtvX5A7MqtSn73XJCxYdrb6DoCcd5yghqSs7sxaL4jTNvS3UX1CxAx9NYzTdp4TT4pj",
  "key4": "5UCBXwt5rG5oVmtnSFEy3mjD3ZD5E8BJ2PFd5mYCCyj1uRqQoE341VYYXsqEFSGm8uH46gBqNCgbcFp2tb23YunU",
  "key5": "5iREtm7YUvHUXEEtxn6wnvbcdfozUfitcHnqNsQg36PXsUZMrEp1T39bp9U3foZidbMUFeGkW9gUy7DFWbbxb52g",
  "key6": "36WF4ptPnvXSotfFeK8H9ov98kJMuH6Ec12iFLMnxr8e8tAdYurnCbjzJQRNx8DBzaSdSEegPzdZi1mUSfCueFmc",
  "key7": "2boDYFVEnMjYn9snGdxffwQsRf1CGestoXkrhcaM6cZ7riZMD42nKh8PSpfDxHTVLn5gqu5AWjgFgsMSkAihwmFR",
  "key8": "MFpXouqFZYqdzMRM2kdevY2T8q2tBeSbUGEiMRorgkrMtT8YKtcNEs1rxnvd3NvYcF3NGjcAYV3DwepZX2b4hFP",
  "key9": "ba2vLtg21VHsUndkAxVgCMSFKCd25siZLGKPt8SwF16pqnA6xk6bYEAtpXwHyzcDig4GmPZEizj8aaPTCx4rCSs",
  "key10": "5r6t18E6ebMhMWMYQ9B1ig5aQMUYkHU8eDUJgj57iVd5SzfahkH7VHvtZGKbqhUrsyNzsgv8WXh3RsFjeEpbyoYV",
  "key11": "3vMofbNJpBCt5qnWnAGn8zwHw9MEFhL9rBrcvdoeVa423kffWcEmLyPNE3WdWfN8cyEvdtnfzQhGEm4qbkHakUFd",
  "key12": "3SR4XrfZW72ZwLrFWZES4LQcU6EpWJxvGUBevNcxjLzU9fWPUrwJikbskWi6wphiurYQVpYRczoxwPZNN66dxinv",
  "key13": "VF5trm8vGxpQWo78mpouMd3weRdqZmyCe5Kw1YuyhQMHLNwwWjaUrtXCLdQNBcBiTjecGh9NCp9tRhzH67swswe",
  "key14": "AZeHhgs8dy3BC2ykvCWafjHDJZyhNzetJTeSTqH8vJ4p8iHQFuzuj37qAV3gzEkhK4wXyfndkPFndtUHsMSqkdD",
  "key15": "46i6QEpWUcKyY2Bb9o3DhrcW4R3s9EAfZJ4nXGAbuoEiXkehfAG1rUwcQqf7yW8RP5KGt4rmKXRDydYYDoBpLW88",
  "key16": "2JZoAiwrR9ZwjMnYM6UyvqRikKqBENmxt64dyJ7pmoXRQ4ytAWXkEtGqukuPZjraF5ui77uxCifk2v9rTBcoNrk9",
  "key17": "2wBgJFKXaANtXgeQgLVEeNBnU2Z5GJq6yLeENVeVnxaJjfSwcj2XT3MrdY8PNVskgMBLyjMSKCDzdsaYdi8R3Vg3",
  "key18": "45FcvwgZjXBvUzMphCnMKRKwrRLK5i1qoEWTCdRSoqGUu4ENxC8aDVxQYQ6cfaVHJf91PC3m8jjWpRUxxi8LE3od",
  "key19": "fRCasiRRzdDFyfhpfXEhPniALE6HuHtvD79WtHm4Ss5fpHZu744JvajQ6BJF1x7M4GVSNHxAmsWaGkzhHp4rXSJ",
  "key20": "bim82VKeY1MoX3PJwyKDvCJUfFBqaWSeixXvCJBwgpZ8WuPZ13LNg7eowZHagq2FG3uMaxPuzmBya98Fc8EkQMm",
  "key21": "3FrDuDDvWpWKZUMwXPFwbuT15kjurkrmxEyT7h4B55UNN1yUCcz3F2uAUwSy9brZBHZqEi78weNkignsCtRWhAK7",
  "key22": "4ARszj1TwQ6cXnCM7pQYkQj5HZnBRMN1D8sB8da4Ycq8W1EX4tCtGDyajsWuFpe2vMPBVein5DrmiPAu22oN3Amz",
  "key23": "44GJvTd6a7RJb3maUC9xWAD3uq92WRoaNU3esdxFXJqvt6z2Nz4ej42MxWbBHPv2WNFXQ8QRdP6cEbxjrtPMemss",
  "key24": "47pMpAhXbUciyNjKstg38Qgi49JmMSCqZsCCXtKcceWszxBCQgGr9eurtGuGM2tXbMqMnbHozr8yGc2muaiKWpuo",
  "key25": "7LHuvYewvq3MTvbXa2xXWtgWvnA5jaXkjHgX8zVd14QijALE2iG7249zSMHCdbaKMmHZmKi8QHMTHbSEAzAvWPq",
  "key26": "5CHLPAhBJrQBTBCa3p72NeW97ZfmPx3STexpPvAqeRAhfPb6WxSL9Z3RjVPK65euhDz7ktLxuYCb8nw8UabYsvwd",
  "key27": "2oFVBdXStmYSJfkKNNMJWMJ2NKwSrWNhanpjGDBpTJaEXFjNNbXQ7uEHtDHc5NWGHyvkDJBHKRhQrv92ByDQk7up",
  "key28": "43v1y9ETdAUgkx8ksQxuMo1eZugbnXXjodRqDg57NubBqwrnDtfHur2Tksmpbub5dQFBNULsZkwrnp74RhensZbq",
  "key29": "67nuyPkGTW57kdeGAZphSvBLafGTjfbMiGnFFsgxbrj71rEQEMGLDP4BKH1Vusam9rwW4RaGMewRYmGUardwCTpM",
  "key30": "64AG7TNfZvYLzBF1Uxozgf2DHY6jVsQJ3exb8vj2tqXypawHyhGygxsYvUjR7vhXcZcfT8oTtEPGSVCDrue66JYb",
  "key31": "4KzA73Ms7mRRRxXCS3WmNKCy7q6HsArwgsarB7WtWHr4vQERHqS6eN5Uq7v785vtjmjzAMu62CfnWyunTmD8oVMR",
  "key32": "dV1yKueuEvfhuQUefbzjG2cmeFirSSRHHyPJgeXBQ7LKhF9zrf9hoewcsaikkxrUxEpww97rg4rRkpfiSQJDeh9",
  "key33": "4X4sfW8gHHogh5YfPQirVb9Qjmv7p2BhxuzGWSA65EL1dPf1KFyRoJERvG3hsESNBkmorXLHSWWPaZ78JFuYD7ge"
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
