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
    "5htKtyfrfJiNgFnLonmLLjpfTDKt1VsSPf2p6g2z4r4Q12ChdGB69U8esHe4FKPPaG7mZcUrsx8TzffwSeKf6Hka"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4JingwnBNZxEGWzcu7UUT7Yco1B22s1hRRaQ6oAFe3qpY7v4Ac1KDvCrhfadS3zGp6bwXSrFiDmg73oX7GW2HHRV",
  "key1": "37w9GFaSbi2KFwcdZEc5EAQJCXMc7EKBia9jGVT9cRfHiYrpPUqbgYh1EAqEfoHivk9kBcMgx2HfHwRDC3c1pvxU",
  "key2": "3ae8KiQUkkQLFXz6QPm2KT5BPY2c7SxgmmZXSRjTBX3u1K6V6N6Zu6zvzpFvcVprhbNBqoZTd48DoUg5VTqHzZa7",
  "key3": "4rt2cVMyRfKy4hGoNM2NwDGjWorjE5qRiyRyUPAzZQrXAPTL4nNQDYFeVSQi5aRc7yZddgeyFcW75VLDPYr5Nbeu",
  "key4": "bpwv33Y51NvXJaS7sM1wBrAjStkzjYnqTjDEbAR1KkBGYkJ8A5aNmiijesTWbGwxLu41oNWQjYUVt9yFmWEbYKZ",
  "key5": "2wVo5yXkpvgb6jyCgbKtqYNkackTuhWbktcqBrgK9bmRMCyuQE3nL6bqyT1Rj5QeyUf7tJN7LwjPCzP7gYiGKMm",
  "key6": "65fKei55SJ6tzuVHRt55DKWrwCXA7zgjo36f4FyJ93WvNaQSDH92jD1QaCzz1sfne3Yqn8X5Fz7AYHxrsNEV6hjT",
  "key7": "2q9o8ZyHU2bEzBYRAMNAuoQWwevroWFSo8fDKEQznj7piFLSHgRs3fhxdHKYXjcaGXeSXYNSaA8XAwE5yM7PiP6E",
  "key8": "4ywpHWU4aj8XYxJbhJFaBnQCQjWHgH2CUqgZ5GZwioW1uNgpV9dfYi3nsXeRSfwCHMYErCKQZ4m2H5CDoMiUC7Mp",
  "key9": "3FHtAJCW8FvWRSzUqU7Uf1Vtwe23jzBwAVJTYXrQHHKSkJQoPqPgPCjEWVK7pEX6DMNrnSZBRNhnZYpZ1D24twsD",
  "key10": "PBJuDDgGvZKDxVPktAutyvSAYkkoYxvswSKUUbAEb6FkPVBZdZoNX2ui4X9oNzTVJe7WBKvFtSgK4sJeCKq4dUz",
  "key11": "3ykje3yPm9Vctez7PS9eHP5kTkYZ2sTj8FUZ8f3DSGJiRhdZnE7bLfzFwuieMP2WjaZ8vF6bwF7VbdqVb55fhm3L",
  "key12": "21htraoqrE9SJBbH2HCQHvMnMnS12zWvFewyqX63QueykQhxor9FXit2bDptzu7h9w57opnNF3PDhBAtAJzbkdv3",
  "key13": "66ohWx3qZyJPhw5TvD8UT6SXVPrPCrk9s9RsDEGLASePbZKBzYqbr1SiwxPRnT15GfhBVwM9oG4NqmXdV665HDj4",
  "key14": "5y2Qi6C3crvcH64ffVGCTvuHZkoPerSoVdVpD5sMGu86msi5zEEENQ6mVFqo3uivFcJzAo3JoZtjfteme4LwY46c",
  "key15": "3Vpw71imobpXfT3YoY8vDYwjrERqZcmh3MixBbuSoUJyzjJ6Rqoi7WJNwQ8EhnAGf13cKufU8tz3FG2EBdMqKZEE",
  "key16": "4zWBBaHZihetvY8HJT1GJdZzTenHfPbBBHvkftw547BWXLY94oFoi3KD1a3CVbKRbjCfdmxbjTbMTRZa18pMCt3K",
  "key17": "4brda49jmPuG7X3pkxaQQc2nu9c221aqo1C4zK5Hju2e4vcnZEgcv2tBVUBZc6gQKuvHT7fzfzYe6W7LPE7ozbnt",
  "key18": "5bGvHYQHAA9Z3aDujVsuoGiZEH3jKUGqSbRSKwD1gUjhsj6xQz9zpZ44RTmPSBrHtrtM9hgXpztdeWvwjjAxTYuW",
  "key19": "23ysxDuWwVGypeBjcZiSQFu9ervS8Y5H8pGPpQPcxahsKw9j6ip7zVLsWfBZmda1Uo1T8RUS9rFwczFtY8PEgbGH",
  "key20": "3H1FvJNKRNtJj7vJj2yjdGBdbj3S4T392nKXqbgTxU6vbQLavc63177K6JFSq3k8Pg3AkjsFFPodX6xUTEWE42bd",
  "key21": "5ogZvw2n2nPw95gbUYjTSX235jaPoTVXzkpLmrK8KHLPyQ5eH8N3gaKQFJJapPNrTXzgujD72JsQyQE7xxEtT3R3",
  "key22": "3kxwpduwLKN7KEoGAFmieBLQxUaKNYTH9QWKknPgJW9AESVE3RjSCKMBsxKLHaagNLfijXVkiNgawidcqVWSeGYR",
  "key23": "5hQpBd5xh4avfBgG6MWy5WudFPzcVWB7gfCaR57JGRBmWb9AKtjVGgWHsqoNt81GKBme2ABZhUBQSP7MmmHegsWr",
  "key24": "3s1KnrYZ7YWDhXLUzCMAipuJjGwQzQc21BLe6HTTMJxVKygZvmWtG65BhJcbQ6jsk95XcHGZPDdcHhYS82kTbBv",
  "key25": "TN91NcjY49Vs5aZmXFsp7smNinnNi3Wn9YQ4WTpXtPBSvZuwEQ7FE6mf96F2SBoYLtfJ7fURwcVo2k79RphaNqa",
  "key26": "28eB2T8kpB9R3ncmUfVv4r5XiqdZJU4WHWiBLNwGhVUECGxudvcAJsxvBbezVRso56ZzWcRp6Y2u5dV8zgHq5guf",
  "key27": "4RBRuN2TS54oMXF6m2FCxViTqpcYxFqNA4tLoNiEmB68PWNETEkcwoE47249MDXxhEcofv8pEK7ceXb4YzR2ZQCL",
  "key28": "esEVqCqA5CDvgyEUuyDpLMaLUaJQkxr3LgNq93GsobsPmgKLv6zb5PdibzLsYqiW6bwtNTxPJRbpZJE93df3pJb",
  "key29": "KJXNGGByCekHrkCeasqeWmbxV7U2iEvcqaGTLB4nscuzvsbJ9EfQCd57ij8mnshaU7f7AYCCaprW8553FWkb6Mr",
  "key30": "QQmFkT97rubue228QhapDicV3p4knq9ME9VJViLNnzWTcZEXSAY2wTSXB6XNVBppqaUz9g5X8S27BVD3gd3JCbi",
  "key31": "5vKAGkhncZjZwZ5tEDhiSX4YJSd3aAMKJGU8abvQ63MpiuY42didjCvg7xCL5JYmGYL9C3o8ghHK7bnZr8Hd4MdU",
  "key32": "24yZ2KZNnRLK2zc69uoswAmQcoFsf9j1Q6xMJm5Utxdvd8CrovfRzr59Qddxkesd1eeopsTkQav459jiPWpHdCko",
  "key33": "2TqbakEEX3L7ctf3bVMrG34C6hkgoYryXefcppwQMQACSLNxwFQ8Jcs97xi1VoSUbPc7yytNAWnonubNPFuMxesr",
  "key34": "5ZRP2ngRLr4hNSbYfNoCPwnzJ8vF1Yod4X1HJ4nnukWLSzihVprwvrxvBAbtscMquG4d7TLz9ma9FjGLwLQwauqt",
  "key35": "4DfBaF25Pxu4mRBAkj2BN6Yf6fjQ7VKnLvv5HGdtNgYvUfwf69ufZrnWDgJMKQ8HoyVDpQRnUDBma7E4yE35ZfQc"
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
