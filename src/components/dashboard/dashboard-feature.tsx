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
    "3UohbFgqXGSG6rxqzRasRPGHtYdgjY4ya88JbhAMWdoZC3AcZpTCr9VB7kJdiqTc7VJVstaWRFm8bHTwhJGuGRyo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5suKbRSgRDRqCnt2FicXUbs1wBYZNk8atrsFje4nFRUcBPsxn7UyyTBoEtTFcW5Y72zWUJEggqxZXMwo2K8HJ8jd",
  "key1": "5kNiwWDuMxK2AVzLeFvxMBE1rUPnqLGfQKqigQZKFThaSrQj9PowExn2p4e1g1J1eD6BptA3zjRJXxHiGg9p5RxX",
  "key2": "47Q8jc6whkbg6EHyVhma6YhvaktfHMdiMrEX6zvytXLKN2LNQQS5C4tGTW1aiNFv8RDpcGrnru4qocFZYcZrditH",
  "key3": "64qjzr2xCBEBgZvYZryPbVB9HPYprDXUmU3Y2XSkhQ9dPofMenM9iJDknAVnk2m7ZqKuKsEwpwmDoFnmZxvzGa5E",
  "key4": "5hzRsLjhKicTEWFcs8Ep4ZtyRY2DLCpxjtgMJJ3ZQep5S4ouzEFHca6knUJYDKCmCVnp1kXxPt96dX69LECH18kU",
  "key5": "fCFxg3ZCGYViDvKgnoYMU4QBuxSWS8qk7bSz5fb8CunpKdsx3eBDb3BEuFc64W4WSNMEbyRAmWzt69u35NUp9Bm",
  "key6": "3yLh4d5f3WfgLZUzE11NY5cN3eA63LtTVaC4Rz8jpm5P2jZVX9iiRXfmqK3aUpMYbJVaEo6iCRjNiayWZecb8CQR",
  "key7": "48WgdxBgqZbbcRqJrj6Nncaioiw1SAxNuFGNZyaKCssqgoBrv1hhHFNX4oNzN5QwKatkxxssFwX2vMCQPZcSLGSp",
  "key8": "SD54ULTLKkiy1ZtDJcvzdStwx17Xj8jX12EHjs5uNaoPnum82ZQixiVCWtCPhDS6Mq6tu87PG6sQbqGbpzvBfsW",
  "key9": "kiamaszcJ8kZs8qFVWVgnazu159VKWZNvayQp8niYkMFRMzqMoKijDaKNHviUrTT58aXyV6w9X99n941Cu4njcF",
  "key10": "5mK74UsQu23hcQSydWZz8dCPUZcyZMU4UMpaHfMa9btKiiYQXzGQPnWzLckbwhUjrt6DRy4hbRoNfCDQhgnGje4p",
  "key11": "2tD74VpU3ttA2dHKVzNxJiDgeq4YkXiEVpJ9g1DbjqonWpWSUakFnUeBBDTzUQbZBCbeoQvqpovoF7iaYBfGmShn",
  "key12": "4nbueJaf43UUHZe8y5RJvmCRogPyuh5uP7gtvGG86o9nTmyzYyYBGPJph1wCwqxbkGj5AvaSeEhTMrNme2aSFc9e",
  "key13": "5rMMnob579S8tBpxiipDaHyAwECHyzNe3KXC7G9iL1RsC8Zw8rkBRSG6Jr33R4yCu8Uitzut48euHGiDCmau7spt",
  "key14": "65bpsq59HcFdv6oNMHTsViSwg73hRjW6gDeApZ8B3a1Brr85M48pECCu7QjatT6u2sKZXNXqvjC9VmQtVaSyCgZe",
  "key15": "3tzqUrQjKDQqKLz6DE7jsWgyCv1JM85rctGHY457qS5kHBGaehcxJ2z2QUCK5PtyFe5GLBo8NY3CUXRpSqEzrpEH",
  "key16": "453LaXmpWzGeTdDMm1X3x2L7i7MskudHpvQFCpgh1f96JMPLqopq9b9qYTVJdXcYhJLtFUjsof3jL2w2D2LNWPob",
  "key17": "4fbSbrwCa4pnqngz8DExRyN5uaHDqvCKWhgyW8Ksdg9nmChLxyvmXERE47tN3tg6MpEKuvPxZufXtFkNb6BnAZNB",
  "key18": "2GDNSMHhDp59QxqdNUC2j1wRp7rZxAMgAxtehyQCGt1afz6awDtygrr9z8qHud4hwpMPf8qz3Xsdc7EWiANiUnsV",
  "key19": "5oxC5YrsNuRRPqupVGLuDQm71QBhDGfGrwHTENUmWzMmi7FSkiDdU1KMMFUC4WZsNVSKwoeZm8bDAyPESvzDzqUp",
  "key20": "4hvUa3SgsvugNZJK5YL7kaFjq1hid242Lc5CvTJNhwXPFFvTv39nooZEZkWVwap6fEEYUF236J9MWmVy3ZMdTQLV",
  "key21": "4S1Tfx4Lr3beQaXyACyT4GuLmN2EXSceLWRrSXwZ84bUq3CsXaWG9k3YCqhhBLSrQ7g2NRBV96T3mGrMyxaAW2ai",
  "key22": "4fYSasES2UeRkZLg8kKBxVMT1Sw8vpVZUKVdm74WnyBoTh82UvqeBUyYGgtEXgVm3TkkhBsxA58BKq8N9f19hJjF",
  "key23": "zLzcrhi7RCQX9PFwSRN387wwsUui2GfaTUMqTieBFZdcuCPmwgA3hSEZ2dPJKZj53U1MktPFshVSp7nb5drKFNz",
  "key24": "2hdtt67ate6wSSMsBcSRSF3YuLpwdb5isQXJDKH77fStQgJC6DUUCHnEgU698NizQQPDSPqrgiryPBfTknGceceX",
  "key25": "4xK5QAWoWYjZDQVstM5ZB7XJNWjzy3gZxjzck5ck8ywyet4Tx7TyvWGvVFGcdVVZ72Q7tLfwsjm32Eshudv9nGF6",
  "key26": "4ET4xy7UESLbe3tZ7Zn8PmV2YDYoXCjEJva4SqNWxsLWrMF8W24nDMQJ3aTkCPkLVBBunyZTX7unkm7BbYiXzu6i"
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
