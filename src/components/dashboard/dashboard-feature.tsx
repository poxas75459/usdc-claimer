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
    "jpqmBD5xZZoRiZ5bNPPrb9y5rJ3aVoGRSN94RN4c3hNMPbpo7JnVw1gKtNmqFXbEVmjMSUddLFhUwjmDioTckKD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5o27AcRGzdw4rHH2hAUcFmPS7Ss84hTkrXSDuWB5paY8Vq5RPJVbQm1dpZqMQgH2DADVVTaAwCV6iBkAJgDoAENq",
  "key1": "ScmS2o2rryM5axPFMczTomj6ADe38MeFLk4aLzdHKX3vdiySRztVd9rm1SHh1hMArPo7ovwP3uShRfitKUJJ5C9",
  "key2": "2XC69ZPZoQddwBW2rppXGgJ6G3FXEXttPBoNPnb9zMidiXTQoAVWcb1HqFXNFJsmrWwszYkrMvR8e4TGcnkkBzoF",
  "key3": "3FBjjrixRfuBZ1jouPC4ZyXoc3zbhLWiP6NB2BBC7CkHawp5grriHKZufXXdbfGC8y6HGSNwCq5cKQZAmjMGzctv",
  "key4": "4SsWzHRpfL6LU3hiDDuPQdLGKxWebv4DQ9c29F5ZSmw98ZW8i6MFcTUSfWBvsNd1THup1uGuu5YidWcjtf5NdNNj",
  "key5": "3XhHU5hHmu9Yz1No83KkaSrocLVqb75h9kGrXiHQh6Wsa8HZursQtYwGLvW5vX5phvyphK2oWz4prcsE3izsscPC",
  "key6": "2aCJGZqHwSKyLZu1LuYEYKF6B6C5ueCTP51edmeoBbK51N7x8uJQwNZTmwxcqAv4BvRhdGuyaRqEEJFrc6gUoNa8",
  "key7": "2pt28AG7f63h2x2UTwra243Xqct4sdNBKJCjndaQbgbAV3QPQUWDCRE77kJ5GqmALRCNFVkevvGtNvXbGDS1GNhp",
  "key8": "4YpJxPSBZZ48FoxfPgb33ABXZG99wqKiKnWMFSTFEXWkbZ8Ng3758YEc7TwmHUVJkAYWRC35C2R6FusxgsYXuCmB",
  "key9": "HcKmGAXVYPZXtSwANea4qEvk2aZoGSstdcfJnLdPiXeptuysvqDEmegaRdVtNi41mFK35ktuR3U6zbGW9SFUHVk",
  "key10": "5E7dnQnTCRDMKb2XT6BEeFpu57tMDeqTBYzUt72riTs1uUJSNZ46Ts4tj7BkiBsdHVQNwhuCryx1PYhxXAGfvm4a",
  "key11": "4pw2UfdTTouyFYwa3Nm7B7yE5Lc37PCQPJTEeHjJe7CVN15zap3LEap2nhL4yjrzm8XoDoNiiPdTYFRq2pbF3zVk",
  "key12": "4VUQoxJgFRvBwLEy4f4uLN3fuK6Xe6f1enfxV65nxujcZKDayHiwvjgkuVpGY9mJEv1a8t4UFbRyBa4swY3hYRHx",
  "key13": "4k4ho9GLDiBmGFbhYxdoDM6cqbGagpoJR1f6fuaFNBRUiekgBXzSu9pGtQCa9Tk1MmjEM5rUoCaWohRsb6qsZJvh",
  "key14": "4dPtjXFwvsDXe8miu7ftPZB4TdMQoheXXSZ3sCTEKtfPqJzLJvCCHL5UiaUJDotH7uV4Pnf7afpVWWwoSv7yGbxi",
  "key15": "55t7HaRayeJNWfkzJ5D4Usf4bwxrXYZSasj95iKntEechvbDfwJdbVBZhRd3DQjwqJ9BYRBjqthpmqy9LgkB6jyf",
  "key16": "3ZEZMJb6kLoMhx9fj8pKKgc4STS9HcSokYLKpU81JU2R28cihFXGfDEEEFsSGRsVtjViFkEoqFLRbnY1FS2SJ1vb",
  "key17": "3kSJven3Rvdi7fc7Hymt9prEoVBEGQYhvQGmjwUPiNEqH1bHX1TFzbJbUxgRE5DojJRf1t6ztRfPfn1NPTa3NBpu",
  "key18": "ciyg4vsahA8N1VaX7u4yuDfCDAEZqyTgwzd8MFtjscWRCWRijyqiP7MkBjTxLSjTX7MzuVqFKFGiUgZLTuuf8yg",
  "key19": "5S4dQ5yozMsKbVdCj4Udgt6PFdgJYqyXqFfZLBPesB9wBTi59YbPY36t9NzMnwc7VChSr3ABwuEFxEB8A8vh96tc",
  "key20": "49M7P2ZSqfYnqFskPjj9LVnXVwjU66pJxABNsufWjKCfJTE5RktWsPdpkHZF662gGTpSysfGSr71oXdbCLzUmec9",
  "key21": "3YicU13BYABLL6NbBhFXVym711fgYpuEXM4eYFkvS1q3jq5xS4knu9zec2B3PsvucuHmGFZH7iwqW2DHrmyZNSR5",
  "key22": "5iGTUDzUT5zKDEFJSAuDASMB2Lv62mxXZmZvJPj3XmMPgrs3P3vGbSAp9p5CXunVaHoDLRhL6F3FyamwG8Dp45xu",
  "key23": "4rhwH88SrKeDEu1Dro1UaQKwDVdSG3GEFxN5sZrEMjcmDGqe9BG1vUvxp7QcbiZFe1XQ9fPELJT9cSPxmCuEueN1",
  "key24": "54oqGJVsJ2u2V3GWKH4oghiqUSZhp37hDHXhSbiRRSFCnPf57HWRVGkHeov397J4KtpYBDTwxYSTAR6KwopLWiiQ"
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
