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
    "ip2fXH5gQcuQBmqXgDWyv7KYrjrbSmjzN2ys5uQtXXSVvStQZkFHAhcDHKgrV83AAjeJ432dQ1zbxb3PTSSNTK6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2btUCwXqyp7jsR4mXxa5VQxF6Te8Luy6yQmCh3HQPpyMb6V4FXs4NgoRK6VTDeXtLXW5ahLPhdKDfecR71vsQXLe",
  "key1": "5GYzfAfLqXYPYuGF76NPZhrVvYMFW2ozdqjemDQigSQpz6iA3eQwL2qwdp3rMzhCBi9CLSHH3LpgYJP362RwL3wp",
  "key2": "MeBT1UBR1wQsKctKp6F1fLzkCscKGLyiTqzvK9KsZQaPrWZKcbu8LLCWEsCDh5vjGBp4zTexxDjSouvrHYsmSfK",
  "key3": "4nrUNUWSUFVBPovihqMzyJsK9oDs3AfPsPXakbycLGYWqopmufj8LWUWJYtTMaZEqirS1mVTGoXTrc2qS4ocH3L8",
  "key4": "2FXV27RVk5d1eSrnMB8x2fEm71KDrpC3p7H62etPXQkvcG4roEd45Nf3VLkhtx99EKeDoM97jkRjR4BVtNgPCTK5",
  "key5": "4djnNAUpTzpAu9zJ5WXWFHiA2LgTJ56SFymLBhPtr4zrjKZh36Evd6WGk7YxhjYZc7rgZUbHhVsMAVAwMbK7Gycw",
  "key6": "K8n4hruj3HyTCKnEYSCGgA2uYdBGdpbJffhEF1fGSqFYcNrkTC4fpoEd4NRxFtDpKYZEjS1XLxnpCAhCSUBL8Vp",
  "key7": "59eqtawewizUgKFwCfbwwGxGTSVmW3EbiBM2SVFiSbFZfV7cXLtRP3PJ4T7oRsS3i4dx5BzCCqc9pH9JUErVtVWy",
  "key8": "2QvTYYq9UtwQxcSaAXQwG2quBdEKUSxPeFCQmMtMiRCsJHPSzb71pY2MojxnMT3dYiTRnsaocJkkPS7wCVvD398R",
  "key9": "54hZhPjqNHEvhQYtRpHeAyrucW2SxcVXmEkQz1wF8TT9MsJY2PiHMbNS4XfBFFCGLKXEo6X6GvXaY2Fg2BFzUiLA",
  "key10": "33xGqngRn7ZfCbTdb2dag1yqsWfabsgHivfEa5wqu2UTxbGWtM18XWF346U4SzGCk5hJnXTwtgiqKhySFQPKLKUK",
  "key11": "5NJuGj8JsJgwD918R3qgE92Vj2MsoH5zUQpy3bvDwzKecWEHSt3bBUPQ5oHJoLeqc6UP6mshjRMT6EcySEHfphjA",
  "key12": "twX6PnNXfc7eu6eCgLacQ3WEEobXPKditWFXFhoQpFmzt9mxzq9znT1gnWM6WVWyWYee54Mxd5qNnSZJV6Sq5eF",
  "key13": "X3AnkxEWTx3y2yEKXtkEJNMzuPg7cFpSY6L7R1eQY4TLGkRSTq1VtPrJVg36akCV5MDJRHDdMDuB3aJQCjkAipu",
  "key14": "4hZzJJW9kLBmx9HCKnb5H6aNMHzVGLdZ2W98xarEiSDia8htU1jyhxQHXmTk4YEFB8pTtJ5nrXa5LxSLC1v7dDGF",
  "key15": "iZJRmEaNXA4q2SkbcMVVxvFoiTVmkCVg7GHHJWkwHaCMCZTLwye3TcSVtuTHEJ7FHfPSjRLC9KPfXx7YSEw4teg",
  "key16": "3LGt2Qwwco88eRqwNRyWkKyjMwqwAdV949soLdSFPdPhuMAR8ggAWt9r1LNz8ud8BrYfgfG3QxPwgBjvqU1HM7jz",
  "key17": "3ptShmxNrezjtsE1e7BkeBWWKTLgGacWb7qg2z7sWgGeouknuPz4Z2f6gM4s9uHZXXZVyZB1EvTMvZpgvwqpcyZC",
  "key18": "2uqmv2YHnHZUmF4P5NycyRdorgWgNDmfu1NKrget7bDgTBqdoQesNz22xvrZvALinRiw71VgMQPiUtFEb6hXxJ2p",
  "key19": "65RyubhFf4RweEvrrixJRE1vSBF6BzK9tZU6Uc7FDUHzFPrMv1LdxxdPG4AiUmgroydmKbRJw6FEeo9XgfFxfCgA",
  "key20": "2ecCUyjCsKgXN8LACyCMDTjgGYKyNRnNe7HAgryjULn1FrBJoS7MqkTkxS3Bof1rkjCp58b8U67Ti3HZBHXf4DQF",
  "key21": "2jNRX4Wm7ET3Wv9RLYV9zfAu69c6SsWXhj2qd7hLm2ugDVZf2NrvPcvjGZr351KuAoXWahVedPjuYN2ixxfGVpxQ",
  "key22": "VTG8Uh12fjjyrpDT5ivXD3RZ4juk3RH94RULuMvBL2UgNbHiFLsNqWcUaji8EYFixx1bwcGFyij5xGg6mQh2GaN",
  "key23": "3Y3Ektyu3ZcrdicDnzbi4ztavNbRUDPoSkTg7QvmiqjurFvCAHjDzfBxUkfcy9bFcx2LjD6s8CStJQF95EKUo1gG",
  "key24": "3vdH47tma23gXskjevhkts6GfwjY6wqq6wfB3SiZayqcxT85Y7bbQYZRzXvAwXMznso8U3mxAozfwH3BdC6pay4p",
  "key25": "3J7N67b39vUApRc5JTaoRZGzRYjUFCdWa8o9c3nYVCVgAhtccGhSKbQPVx4XqpJhNQq9TGeDeaXEWbHDnwVgLUuv",
  "key26": "2Fdd95Udx2QVqi2o6bVZmQ8ZYvEiacExHpP5ykQVvNfTzeNSJxykTCL2kgGD8s7R8FTYTpbW4Bkiey74pcCgrJ46",
  "key27": "3pYPLLReL7MDmtbsNUV4xS4xts3mqibRMnzmKnD1jxMtdXMWwJBQKhZHzkJRhGWUW8WSmPpvmegDV76tQSHrLayR",
  "key28": "FCYt25VTKFEZeqQsMYDWbvztr7jwwkF7N8XEf4kmW6HvirXpyEZyNvjMH1dR2ePXMJrsNxSK6u6UnRKxL3MjwUo",
  "key29": "4shSUNhJ6fSeUiL2CqB2jSnTcUEhkLmRm6XE36dPTQgBCt8SR5o7ouDP2BfvCfHdt7eNULdv6TWAS63zbGx882RG",
  "key30": "3xykc1yPJzFCXDuB6o2RB7aJ4A1PoW8eAw9Z7CNeLitLsZbC86AxYwJJXn3KjzMgS4C8voAE9As7M7akk5u1anb2",
  "key31": "1F4woN3dqeVz2duA27iPijan8vcCk6EHzmUEVeQmjM1WpmqymzzYPSoHnyc7NF7bifyuL3C6DVDURJjqcMpgWqk"
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
