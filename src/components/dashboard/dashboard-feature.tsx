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
    "5iybjSnPCxeWqtQQyQWjsCNJBCJpwuuKbrA3TW7kRiyq5c2xorfEGdAPxBCEm8oGhHepGMNKudqzxfpa6iY3Q1BF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "F27LwiztSgmmkDf2etjjrkbJUiGdC57VF6rRgEo8wqMtvvUEjaC2XqQBdumzyDDcW6kcE8ZvmHLDTLdVcc7jtjx",
  "key1": "5thR5Ui2wcLzNis2Ctw6bp7tPLsvkRi2tvBnjAssCAcXWFtykf7QZgD7crdKsBCgvEaC25e5n4TwrpQbaQx4mamG",
  "key2": "41A7YGtEHs5bmxnVZkNG3TTT4SNtdJVZ7BEXqjh6Awj83qKgTUzPsBT33YV7kvUwp6DGKU8cAnES3zHV1bYeQfiA",
  "key3": "3SgSwNYB3LYRyqNtMc14ZURvTbwx967ZAtQqGK4obZxxGb4azSebRDVKhk4Uu2fVEQP15LkaN8PKs9mvf9xTKz3C",
  "key4": "3nHHhk7CtxHq15CrRRDEPwpq6WSBwZy8d5hRAb1Zg1fdMQigFMYBHx6LGNt64YwSAyxm1tgNTdrApGYhp8rKiJKT",
  "key5": "2sFDdTwqKv4xGMXqWdgdcDeEcwECrLAbj9EP2frfJWH5i4Cq1cpqXbEViFfApCDRLPKtYyVRY1FttfQ4SN6eUD2u",
  "key6": "5112zwGZzxTKjT9KhvtTNbSq7whdzBuyATTH3NVnSx4YrFGohKH5L3qEjPBcrHmdNMgqLpHGUUd4wgwxnetpiR5L",
  "key7": "JhKiHLxWQgfBx4mUYYpMPFDsyDheVJtpysUwM7t331opuiywFthweSmohrqMWswSNF27KZT3q13qr67DsbsxB83",
  "key8": "5zh5Ar4L6pFuF2BuWyKm5AL9ZHKUtuWLAGYzYLPb4vSkCmjufuvDR2a8ttt4fZhjcdhTJqsxLqPxEYF7afNPaWAr",
  "key9": "2vd8AG8hwQFeVs4hJ63wwgawyu2wEfVXsnHLprTy65FNqbXFop1UBdrbnZ3W6nWAZ4xnbhh1gfoKhySkod5C9sCq",
  "key10": "exY9xhzfANaNHaAkCZcjgSj9AYTyJtakt9aGRTaUmvZ2yJfgJ9p5hroiW1nCHNb4a1i3cXncXMF4KnEswHUXDsX",
  "key11": "2UF2uQR9s5AzoxQQDJKY4Q3n9QfbdyHXGzdYDcx9BvAMn8xq3TCk3Hx29UkGE6UTCAzZZSLTYPfM8p9MFT3VHQcW",
  "key12": "4zfBDXhX2638rm7oXfQdSVJDy9diBB4RTqrGnUS27zorvXBwkEYsGV4AHNYhVJmybFmJe11tEbUJRijDUPmi6TNy",
  "key13": "29XhVdJEn26EsELrzc8R5rRr6noRikKB8sz6EweyU7q9TSg9Tetu6we4NEkDbQaXNgAeo2pyNUEV3iWNAbxUbR85",
  "key14": "2DqdnsEbQiUvBk6r2KTxXUMzEke6KfePUJKg48b4RKZcTufFWv7Q3gRCFV6B5Pd6bJYkqwafPcV86vP2fdosv8j9",
  "key15": "3NeNv6fmcVcJkb5ztze44jdQKzeY75MgcZPJPWM2kuQLZUAH1CBkBQPr97oQDSuudZXU92ckV15wzqWj8YKwfrZc",
  "key16": "4qbUC4EPPBrf6uL4GUSNfXMZvFXkhJDrrkgkNGwLmQ4hXN19XApdEn7n7Kkp98qk5Tgbf7ui3YSBRwY6r4HwF7ba",
  "key17": "5oquhjfMCmKdTCNHBp9vPDdamnVQf4d93MmpDJio6UWcfpfcK8tEqPBQJVTms2Mekg8SuLqXfcCq6VK6zEz5Zs5A",
  "key18": "675AV1jtqkvLsWwg7o9bb7kYaUhcncgAnf1ahjXDJTwrd87tomWSkHiVzFBYWoZrMJHyiTn64GQoGkFM2R7DxL7g",
  "key19": "63B5n2otNLeFSGVgJfUYVGPMciKz56K8pwCbK6nH6Q65jpDj7SUSSHn5TEZpHHhPi3qymN4BVC44VQfRxYTxkj6h",
  "key20": "3FX3PFxBZ498e3d2BihVP642Ffbdv3uet2rkwfqAjK3JLm9ZczSY6HtVLsiLHqaYNMy3WNtNUgqvrdokGWF6qfTv",
  "key21": "4F8mVTksisC7AbjaDNJrUEbK9WjqkBND6voMo8Vh74wLAbCSWMh6f9PWKiPfLtbzFPsJkd1BmLJ3ZbSdcxjwsTec",
  "key22": "4HFdGFdxdNGbDLjqYaePyxFJYKa3vMvBQ8DryLdp4KUm2kxQtBUdpZKVwSnQCqVs59G8VCNuKPdpz1fjs8KXiF3d",
  "key23": "4fr42vaAHPjUsE8GvVtPz6xSWiDRuPtBSRX81vpe4WPuiwpkzMYWYAez4KKdctvBzv6N97iCkbXViFVpWhhU53Y2",
  "key24": "5nGcmrREpYYxGLUQSwYPqoy8G6KGYxNaZ5d2WejT6qg9fcVktEzqJmnqPhFQASMfGAscxWjRSfi2oz1ZbRWhDo9G",
  "key25": "jYhTkS1q1gkBws7arkaLwsuukX14NRTH4BtRDhed3zHUukmKPy7YhQtghyy2D2LSFMgPft9SQL3GjNKKsrVVoth",
  "key26": "2Hvg8E7omCNakoehhWQcdU22rmL8Skxe8UJ8VeEEx6TNZAaEdQShmPYSSKEUjD5zjMyAuzMughjzCZZyzFtuudNr",
  "key27": "4Nvbbkypkb9UWndFJ6ufHQcEer3EaJymfpenymas5kipN9HCTvJTGejHDwdVwzoz5kLkLqcj6GU2Fa533867CUP6",
  "key28": "61zJmCtArjXS7Ft9tzMEHNq9fc2d44W4nqRQ11eDZ6VY6ZpRUGFXsiszuaVrteV95WurpHzvb6EggLwfTSAeWqZx",
  "key29": "2z7BrtdckHeNNUGahhjpZnVtRk5Q8dLStHuSt7xtdV4GWPsu7DJfbZU2piGD7Dw3FbEaroPKYFx9Tpox32QJnRER",
  "key30": "5tCYUXdTn6qFGg6F2HVVSC8qLMx3BKnKpCQnuxsq4QBZGoyW9Fknk3W6em8YCGDgEmqLKYXY9jXBFSUhBzGMJYDt",
  "key31": "5fYGFvtVRn2EweHE8AoZEx9azhRvh6h1GH4mfHYs56mKXoADYsnnF7vSNN6WV4bpTk6G3kkJEHyD6E7x8dfsH8TN",
  "key32": "2QDd1BrSJt5sqN3KcXu2tAqSqWynTN5srtfAEtEGepYssqEjJK9wT4orGfRQdWeu5iodPA5Gc1Rc1ExYYkfVEcz5",
  "key33": "cxyH7eSyF59tiRtNTGHFBDE9F3KBiyT9fWC9UouQaC2C4oNSjCgga9d6zopnAG8bpSiDimXh4EggkkWwt8K5ZFn",
  "key34": "5ZpunTtNKTULQha3MvFiCYWmZDzMEUmmcGmBhiCwPqqn8QMgbzUGjfSYuAggdnVwjbfmqPen3cusiDzvcDdFCHkd",
  "key35": "J5MuHb1YwaGGuxKLXjoNmDnp3UrJF1AXZz11fLcNBykDh8cQGSAY45EqxmiWKfX5CmzNWaPBLNUPuCUepzQnfMR",
  "key36": "N3rouStXG38t58qKvUCGDRbfhAU4z7UgDPq36ZDDgzKYGJdEFtAxCvRDpYw2z8Mo9QgqGYSMNHXedF5CcPG2HnH",
  "key37": "JZpYuXCafVdQ4oBsvR44Yygb9Nae9QK5JmhtiXjhyy4CUKRSWgjuwTHcjawsL6bbNWYwP4kNwQWHNjGQ7JLLQeV",
  "key38": "4Z2W7PAph8bAyddaYQd4LB5yV8utpvtvD3s8r7LMSMjBsZJVKS6MQXKMctv1tShag7rDpHKVgNsNRMNqw6ST4o2S",
  "key39": "5PcJQQK9bVEs995hEzRFVx8jccY4iAwtjaozubfdRBCZKKJbBLRUKGAq4fi3RvWMY9t1D9QeX3kaAZ25dgPgFzvE",
  "key40": "5Gz7SyDEEMS4ee6aFhBCuAdZwAqr1takyDJzf3pPBaz2HYP51tYZw8rMKgoGpz4SNsuwsR6FKHBsaKrFuH22QqC1",
  "key41": "2zhQnRWKxJLdQu1gFaXWHT8Bw5BazQNR4xFavPMsZsF1jGpqKP1YLn2Xx8KebqZGWbJQ5exxmrCAP2CvEePQNktb",
  "key42": "2a5B183U8K2AGozeutR6tGynVXhhsKBqHvqK3LjrLV5kxgjpD6PFhKBmciUuqGnxwepJZWvTM6526pVJNKZdYqT8",
  "key43": "p9KYSW5cxGVmL3e2HGT3i3Dbnidf8QN3WihVb1xLKGNQMn7N8Sot5ttGw7DTHHDmcso4yD9SsVefyEjuzGne8Av",
  "key44": "3SEn5q6NbVz5qee1DFd4zWaw8ykyjJsgN2UKqWyWgznjeeRbD67rivSRTv8ySCo8HFuccbT63d73ZMC3kkcDV7T7",
  "key45": "563fpye19pa8wFtzPfts1HBZFQgF1rCk7uscfHoYipx4C3J2brqCD39f6QYe7KTY8BV6pDLxuCXXhhSyMsdf7wji",
  "key46": "3ZQBKw6MYTDCiu68Zef65dDSAk8V1YpKFaLJPJxTMiZEL9qXoLNFZkFocE6recoxx1iax8be4cvNA6fEEzaQcTvX",
  "key47": "4ZN56UtFFsti223LUtbJHc2VFP3ndR9SQLA7Y7w1Vhb9kZzJ6KhkCko7o3xL1gFd5SbFAKRF3ZYWEJQVSYVvUCUQ",
  "key48": "ZHZ999XQHwdPWueggo4DjjmxKVNk71rmXteL5QkpmRN3t65d3kj5EdTc3cfx6GjT3bdafPJ2f4H4NrW8UZBZSZS",
  "key49": "5ofyyiUXP5uFhWYr8UPUyhq7qimvfniGBvDt7U4pa1hzTbWCmbpYXBcgyFxKQC3ZCDRKVrXCsy3dfuAxBxuWWbVk"
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
