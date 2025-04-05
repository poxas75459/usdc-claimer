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
    "3w6d2SbJm3yTTE912FYPTR77SoZmuxDW16DA566dvHGriFme6iy8F74e9bnzTCHq3LQpMcHsVFmakNv2dSV9CbhG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3vkxViPvWrtpAmudPmudNM5HYA2iBw9QdnhxEzWoDTQPySonVSzd1DVWuigFgaLLYFQa9UNgJGPFd71d1wAd1kKX",
  "key1": "5iKCvNmbGHfrYm5hXeKmTYd89EtfNPUCP2v6cZfbgcD8i4wk4yHsGH1nKRgoRDmaoMaQoQUaGpXPAFQxqoiLASzk",
  "key2": "4EfoFx5v7N2fpeUjFB9tEqYv23opfep91jz5vjuWsp6dHTp4hjHyAX35gqYRBkcjyfxzwvow4uTzSNz1fzzifawy",
  "key3": "29RuDKagEBFz8NvJKF4eTVz2rjWPLFWBqDwEGsd86LiRhA6jgHJEykphjnbppuk8X8afbtZU2cWGxos5BxjNJyJd",
  "key4": "4LvNF6APkcYR3FKYjTf2R3Z8JVZaoTW7hqFkGui3o4L81WQw15LYzUNKyWhZ1QKG47m3g1bH2xsWn1yBkjVCDTEt",
  "key5": "27sewSFvx1Ukoyf6omm6sdAU2iaEcvde9uhJn8Ku8t3i7JuqeJR8xs3UYkqTTcY2xfB1sFA3w2CPCB9B9GxCqGTt",
  "key6": "DDzgELt87gW5fNNDemfJkarpSmb9sGt2pwnaiU9GfRgUGxNCfvGfPDsyteRgA2LAnuyLtbdyf775vMtfHid5oEh",
  "key7": "4NZaP4uJLN3Q3cYFosstbMwBc4UTiqe4DQ4wLSyBb8pipX6xf4aU8cTcguh8Bj2oFNfF2E5AJZsxbYAvDDuVbRVX",
  "key8": "2hyspM6BtvJqvNzABQBpXps7aCTB9uPE1Z8ZLDkuhuJRm38aBz22gqwW7yH7seWVJcney69b8nB1P4G15hUkA6WS",
  "key9": "5apLWUXJGE5591vxbNqxGGE9WLFsub6Eu8GJa8qQmnDM1p4QGVLgvStihteMyAm2NDRCFxTZg8cZVE5C8ncjZNEh",
  "key10": "5Nz152PdqpJGYje7sY3jCZxoyBQzbTaxQejmC6qPpKRTHDn4kL3tjM5pNmjZLunYzpps9fTpqmpgefP86dg5GGpd",
  "key11": "3r8FP69qf83rArH8kMbyuvjAZ8vKcytwPWhhs1KmjJBoJ8yZbYNDNfnR8Q8qnBAqCY5Rq2p6UeKTv5PSLHNQv3uL",
  "key12": "4kLR6gLfjxxAidLyXwijtY1fFN8usfkNNwhKRkfmKbNx4w26mQs7rs3bvBg69zudnuB6ucx1zf9SFjELiHV3Dizm",
  "key13": "42QuRAyrQij1PY6ntYnmkeirn1KnqMBCKfRUzA69ZDJp4sR9z3tB2xpN6DRevgTyw4zLX2YUFNvnhzA3xmRzYDWr",
  "key14": "5VpKHsxuSU9nFgdzmnjGDP1seFkMp368yrdFgWDpY1pUb3Be5pTWdkaMB9jQfVm5qgjtT37kn1keUkXhEGp2LLTx",
  "key15": "ExTicZU25JFQEoZqoUo5XfUSZQPf4P3hEsSyaAoe3DiiqepZ9jBwDydkd7jNohzPKA4fAB4Fy6E2ZTFAQ6wj182",
  "key16": "448SvXvGQaKndBGqCoCXGJ4Lpm8YqFinWB1qg2ZRkGKyTdGXJJF1L5cbKbVvfirQ5SgUk4BpE9Mfr1oz2Dj8YhUZ",
  "key17": "5f6hAiAWNXFAEPoR9XAjGc3o1icatmcJkWbyWZwbgypDSL3eXYZRdm7Qge1gdJCteugF3pPNBCyEVbtETXgpERfs",
  "key18": "2Po4WLG9PWG7wcLRtBsFjYhCiNuKXm6wnkg44PJx18vsNsnbLhVr34iW3d9MXwcxBKdfA5hUhRGB3cCEJehFyMAd",
  "key19": "4iSQz45KbJ9rQwLzXXRuLYQKwuf5q4oEzhi57uWsWjbJCLKffgrz4Ck8uqc2qar53ySS3VPg3xDuow8cgNpxW2HX",
  "key20": "2FkySEwucDPsEjr3DrQsLDDWJoUWosmZxyPUH6y1AqyUQS4a4niGzPVieoF3axbac63VBwan5PToLeQSE1xttb9G",
  "key21": "59Ft9KCbt54zEtyKJRMNYbCNBii5o7TSt8in6fBJRvrzU2rQuFW3hYgZR1rSCrqSEX7yLVyuRpTDvtcffWivDY4M",
  "key22": "3bcsrPDqjhbq988hUcTt8zVgU8gsgXq4WjHeYJmC62RozCzoU39b4E2J6jP9CxayKZxtn6sBVmxSkVjqJTxnE3hg",
  "key23": "567H3i1SUjxygkjUGX4kooZLLTSXy9WnxTqNSj2E13YN6bSBizDKT4y5WYTiQTK3RUiZgzkxUueSrfXPefmUitgQ",
  "key24": "28isnKW7qL4S1mqfrWqEEkXG9xbZi2GjZHeXPGwZ2kNqN6nwpYmEoEmfFAoYeGp8MTeFvpkADCv9Zc7pKFvPrTcN",
  "key25": "4birVi49dytTNWygUcF8agVBb6z6bcphrKAnPfw6LTtNNmiD9HoRyJNEfJeRJZYTp63zEaV9QS1e2HKq9bF2cCci",
  "key26": "3YdrgJghQwNBGyLv9wxfB4auDHQ99jHaMzNKbPxQxGssQwhfJVowCrkxWW7Ls7mtybg3vPsM8oLRLSt1dhd1QKe",
  "key27": "3MnLGEnyTm5L1CwDRX48XAEYnH5f4nqViYqg9Mm1QgEuacQB8BhbK81mdnns5JmyouacdhF2qMGiPuNdW9vVrZVu",
  "key28": "3w2wGass1KLFUkk8TFj44RM2iAcDWKH8gMTitvm1N3iGHxA3NhR4DMUHHvjhhorPfktKW2Tf2RytVMpKrvhgLB7f"
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
