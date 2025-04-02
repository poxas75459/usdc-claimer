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
    "9PkZu2mSrEWC7AWkLMagCVKeX4q543oF75DsoSniNSPXSy8HfLCh6vsSnBUywoXkntQK5hCRp5rVykL8jU4Lhsn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "czM8ejnnz1wBtbfYGk11NVVo4gvvKY4WRJxwHPXtK7mE3pMbtUSTCEq2uh8neT7mshRmNDuUWzW7nXCAYUAW9GE",
  "key1": "3znqgMsCzPQJt9VBjS4Lany9p94QaLc5dKL4dDg5nPjAqQoammTw7cwxongcDiQoXSb7Ux1FEHG3wi2Dr2Sdvgz5",
  "key2": "2bCUexQSbaAVeono656kmHPudzeE6tx4RL4yUhpnjKhqfdrLWa32X8XDJKUCsmshKktG9cHYKvpNnz9tF8SVv4WS",
  "key3": "2Dpp6SUHhohBxtBC8Sy7C4PKLFEGY3oYm8DQKsrQFni6buq5opwzzMw9S1RtbsBdVDMoY22yPireQ7dhaSjnquh9",
  "key4": "5351Li796DWgMJXxufB4QkZ43oUXSV2XJtphFH3gjunvkQ5pqpAFDnwrboB3JqPS5DFwJKsL74BMyEfuNdZQjTew",
  "key5": "4TaL6uLwuraz5ug8mP1crHGpNcjJyvC5hJMPMGdZLT17Et78V5NZsYJYhR6rJKoHvUv6dtkWJ9horBS4FjDUGnfP",
  "key6": "cV9Zjz2g6HgRzWxCCvXpfqutCFjWiHdfN51oGxNkZXqzBGtUcKrM8hdSqAAz5AAFVF2oZS8kYjG1QY3WQFnVppJ",
  "key7": "wTKhXwkT2HuHLGxiwfuoCnd7JByWZKiLLPcD9x7UEPp8DHXCfeKjvGJXRk1qbfK9HMNBZCKWaVCg5KaaUPHq3pb",
  "key8": "62czjdx6pncQgcNAAwxFGHZyx3tjS6nuqm5S6pfWfXLWAjMzZfDDc3jBdoEmz7tfYiXFLmrSQAS7gPjQYrY83biC",
  "key9": "3qpnsHo9ndqYnp5MnajK8HxKWcix96Ucb7A1jcegvjv9RugkfEDj1qPBeyMM3KVaX9TyXZEQ6coRYgCQ13E3UPQS",
  "key10": "oCM9bYfjBXbAxfJJHFnNLxprRyD7ZcFTg8mmm36AU9DeioQh1ci6bEUoTZH29QwguGKM2P4TktQNrYQnsQvVgBv",
  "key11": "QT1gzpQn15HvH3p8k6sXXUgsQNMPkEMHsw677SPPAiecuJPGKsgE9Gm8FbkBnns9Lk6QV7LP2Xg84CMfG4HWKQD",
  "key12": "2TwKayVYbF5R8J61EcLHPXwswJsAxtmfmCDc2SbS6Dkz8KbAASdhKoVUBXtzA8w9Khvmgkq2Q58AXeyzG1rq3pk8",
  "key13": "4FUHmjFDbhN87JNcu8wKc8jAw3Dj8EZAJuBWViugzgEAxtafYNjwG4jq8mGRyDmD1bdixo9fAoShgEFFKT3WVWQ5",
  "key14": "4DRza4xVS3MGsjLboZYFZeioiR68bvU6JN3wQUhf12ZxSHY9WPR18p31C12rMSfFxguMj8S4pctDdjy8DTmWEwZq",
  "key15": "5Jc5zgwE9d2ANb9hKxkHSNZNPKYbk3YWQQDNruXbsHWApdjBg9NZ1rQ21xVohT6rRmMq9gR2xpynGE9PPDJ4DZPA",
  "key16": "58EhPDYDn9mo8DYdUceZthB99yf3BkpU2DgeA7mbkg3Nc9jRc7y95kg8CzsCLStB5D4mLZ1HDJ17XbniManWc7hG",
  "key17": "3DPn181J26Z6dGCjD3JhkEtpKAAV28SYw4ZVPqSA27zGfw5CSmaaMyMzPhdESrHb8WtaqSuiGH632yN2nsze7G6z",
  "key18": "4HrqUyLx4RoJenZPtFwNwTKk9XSPMk4i7242Ywp7CYEbSFcWAq8G89jv5uYR8ySjU73c3uZ4AbuzgZYaTKerKMPN",
  "key19": "WaD1iJXHzAcU44j28QdUTqWAqhh7kiNqfLTCGLFUdM6tSyqFeYdYshj2H8XXa4tZLVVczFx8JQ13AY5AdRSRpur",
  "key20": "4L9PHvPCaFQKvzCuR5FyGcmDtnkDfmAQUiDborGEHg5NT98dRmTmJ1oLhdHdbbXELjDcJZs3oixAHxbJ1B8xYXw2",
  "key21": "41juah4K1cgJJHeKX57oC7ubbdVVY2LctGxfQLpbuy1fwzKZ9WUeLPh9ne5urF8M1Q82CRcaybPXNjmMuBk1YcbD",
  "key22": "3SwhU6VMapuGVCZcxPVuc4tCN7T7Ng3fzndhK6f8XrMD7VtF6xmWqMhSXhGMzKNeRnymw31riKHFhHojPvtUoBX6",
  "key23": "336SQLinMmrvo5kXwKsLizbrpmJug2ELhNFNGfNAxiUAvsCX8iNHMb38riFaaADj8AibDg5cPQXh26pQnSNSxVgD",
  "key24": "57FAAXjviVwsefDDEFug9qDDVZWPcjDGu3gcCzwCG1Ss6UaBCvCzuoPKnPvbQRiaynjN25o5QX1xdYvPsFg9WYhL",
  "key25": "2yV3Zwbg331j7AgKYfSfSKDfabHuq2rzhFUeA3JSj21FKP1xfa7hLUSFzhsz2qAk1rm1xRfE2S6YW71irTNaJPfM",
  "key26": "swYXaqdH6VTfP2HXHjFqsAbszEsofhce77NHwDdoaVYdYa3EftPL24U3Z4d4Ky7NKeTw98w19dqBWKb5jWKq6vu",
  "key27": "2wrJY2DjxFNsE8fnNkYbsKG8RVgQi4KqonN7kaCjTsgJX33QXcgtHyqEZ9hECGtPDYQCCgnNUfqMrYMmCbYuzxfK",
  "key28": "5jRzZ9wXAjQkzw1WZ5e9s6PBH1YGDP6btaVjwpcLeDmSpqQXZLai78aVG2RP8FicVTEBDh77gtkfL7Zi1pNjVMUP",
  "key29": "2NLjH9UURhh3NmCMErUZfcHKEbD32URa7j1MNepvJUFpPas3F5E8gKgs2i4ggeKEN5WruyA5LW3VdfoCuJSWQvsM",
  "key30": "24qbDpb9JkgWgQ7fGSMznBXeGEVorn2qcNTf6hpSRd52WhkUwMavZbD7vpcVMQqrP8zx1dwRiHRpkAw3Y9uJBEQK",
  "key31": "aYMYbLRLTHGPgbYnBDMxtMpoErVdDPwuuA79TbhZ4tArCW2ivgrVcL7JnrFEz5tdCjWLZ1q6FRUSCKxFYz15xHn",
  "key32": "4BaGZx61QUL2wfwie4BgPDTGxDBbWTunfS3jDeAYXMSJHBHa2WFKeK2mVxAt55U4XqHTN5rJ7oCDQos4dWjD7P8N",
  "key33": "WzJGY6YMr7dG9wLuskMxeJAeeSGhqka4cBL4jKT8w7pvpNdsG7eEP1iJVbZR1Di4NsSAx8tT6sgDHaf88u9bJHW",
  "key34": "5tZ9yLZCUtFJkUJy4rbekpsYqcuW1cyAyYRfttxTdx968QtJhydP7XJt97wCof5pQzFEsxcujWzMb8PkmSZaLyPS",
  "key35": "3r4LWob1Fo86TAQMKUG6b7pFup5FLHEDoQY45szDCMfhZPSoo3hXGRqhSmWgyfAZSFtSkgxLmZFFMxw6FinfRFMf",
  "key36": "47y9wkUk1mhS19kGC6uxPqPRWdCYjU5kTLBDLNVNpFqjk5tEvR7gVTR5Pcx8d6S3xrSu3MsqcM39eHeUsnVmr5ad",
  "key37": "2zwyMLxrv6TYUGGNxPxxzsDumxQ6RSt8gU47Jxktiuh7ZVgQncx5Y6sXdCSc8on3SbwZCeraaykNMZ91yPPLQEgs",
  "key38": "5uCbRRRbKbUw4WEzyJqzhpeJwCUamKQzGtAFxarCFAjmgmk7SBmVmttCcvYwD7GHrigvAMUwJioePfDNwxY6H76U",
  "key39": "3Dn224Yvpwz3s5a1KkZyNc35RtPUsijr5S2K1meRHxQhUzzic2RgpGoWzyvD66Q7ZnNQQCawsc8DecbiSn3Qc7xn",
  "key40": "KMSUH52emnFRnmfH5pqT4KcV9bHed4qinTfPtiiPbcWEV9qxJ2xZpGah2AbSasrzLra53KHn9hHLNqhtpfJoPeu",
  "key41": "3fLyHRkFVdDs1DHomCTPXcC2m4ZA2M3ZTRtg4NFan2uHUyN6HPq5e44UEtQaBiUo7QuFa1cgZ6qyx46Wc4aJX6NE",
  "key42": "41LbQdKLYio6Zcsmiw5KnJE9gTL3vtbwTpDhNVipvhjHtPvf8XoSwWoVh9DwdvyJLRvgpuKSQWCHxwd9hPruBJYk",
  "key43": "3HK4f2ttreQAqpodmK1EoJSmNmnY5gy3f3BdgBnaENDqq6Q1193HYr6U5rRCEGmFWJAutmNdfVDWZBoY1ExJoY9c",
  "key44": "5xQRoaWSnCsBobnjvfwo386Q5qd181FpbXcX4BJGkMf9qDH7vgsK5M8bPDvahFkXVsbn1vDteqy8r7xtgvsRfmCW",
  "key45": "3FxPVqYfdXUNuUcne6KUxfZEibpV5y5jNqQBK9k49HBXMCknddRKYFBbLjg9zY1ziyu1endZJScPX4KMcwRzXsqA"
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
