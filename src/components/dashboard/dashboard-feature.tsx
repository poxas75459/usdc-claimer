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
    "2jfFkiuRujEiXoUVXKxGCbpt7TkBN1dL8jbzZQuKJCdsXSaLu4kdnFdE158B8uSbMmkTFeaLBdtLA5TC4L3woKTM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Q2bEiPKNrPFpz6eTrzHmcjqwf5o6qPum4d695xrHJMLHWYjtshKtRPojpB7RvHmYRuQYBwxHUESWuTQXwRZrX6L",
  "key1": "5k3RFYG58aS2ijXfnw4U7GvPWfKVighRiJnar6DANDBpYFHCXgC53koa9kqZSNk2TWov1aNLbY54aEQdBs2c9Lzv",
  "key2": "6hgb9226obUkGjKZTcfMfu2UkPYD9RcaiujkxecE4mY8zwbjQr4wDkNEu5Pfhyjs5ZcrnVEVnqX42HpHRyrax6E",
  "key3": "3KmcYy71472NF2cwxqQCN1BbgeEkvdnobx6EfsMQfJvos9My2uLkKs3cHZnEm9kbVoRJzavbmkaCyb18bvnKqSQv",
  "key4": "322R8gCAA8XhsM87qvGdVJSMxdQFVa1GTC4wXWbCeubM5vAvKpzoKsPEnR9A59z9xiZmWJYBueF96S9qeV3m2LiW",
  "key5": "4V5LHoraLXLhCQzAyvL9H6eVUYB2xQQyt28bUgirL5wwcdi7YMD4Mu8Pt1XUnreSQTiYXdPpingZBk44LbbA6K6m",
  "key6": "ns2opxrfSQUEKUm9HMSWnorwT9TRHbsLk2EbajaQNm4qdDc1oZrXYhiRRq8YZ5rr4pSMnVYaAsrwkgTCxTmZgHD",
  "key7": "4sHP8yNCxm22KZAPAMf38KwzW8iwG4vGXcRYrkutBqAZ7z61Dc7GKTa8bC1dgGGXthooXrBxZPNNjN9MdAsXZSzi",
  "key8": "4YtVJ34zK69gqPcAZdqp8GrjscPm9hETN9RU8kigTLeNQaaFxf693dnUKdZv4uTuSRUq56b2dnsRUr34J9HyZcGs",
  "key9": "5t3KSksXQa2Po2jXSLMSauGMHeQPypoqpAS8LjALisGZG9xvVfJk361wPYyb6HUcY9MVk538USUWYppJL9fyDJTx",
  "key10": "5atdLZTvh7SkDmS3uk7Sy3nBj7BPSUoaGxCxbn6YZLo2mFnopeEc3dc39BLcAuaQAGzBjhzHwRoUzthDNhkMRYhR",
  "key11": "43BqEZibFnXxBGD5yLrDLtRqVUSbUiRmEVAme4TA8aKMYCaVmvp6JnLTdZhMZYiNcMwRCkHzbbDaULVQqpSMjmWB",
  "key12": "349kJmEi7m1ygszeTSpzNHiCVF1ku6DvuB8KTcr6aAmf33CRa3TtWaQqMsvS65sFwNLiN5AeywGpvzoEXB9Bpnu5",
  "key13": "51dPaJQFHZVGpkHuBiJsAdLrmiCtEybRJRZmgT3wsdJ9DFLBjMa74estb7MeoGXCwrsJQnKFjBcQQTSp45w3yQB8",
  "key14": "3RRzKTRoG6XtCDPNwmQDRZKgdtXDKwnqh3nMSCqLfziwAqZkombCFX3Awez3RLH4WM3cC4e2BPT3k6qkBHdY41TD",
  "key15": "4AWhc2e8HGycJAjUwWVHDwjxfyxLDkCViTzB9ruqwpJwC1dn9dfh7wJDc5CYBBXYWSusYj2e4MjUGL3vcFCr8DQN",
  "key16": "2xXPVBjdaji4ne7Ku5GdZTHJXW6TopYS3gZMK5hLUApf8YF86UEd4EonFmTe9iURTqfAEXaha6LcNmkKg49N5KXw",
  "key17": "5EyJjy6yuf54VN1PQK2FmS61rMWQStXbBDkoJXRZ8VnrbMhDB2aDLqdwxiCba1iFbah3euiKpMcJUvAyNMgUMAB4",
  "key18": "3zMsarw69sXBtSvWy62393ZjcRSrALMAhZ2bDojyknt8nVUEAz6trAiFmMkiuPX6sPC877tcNpAAC29eFm9xPYTZ",
  "key19": "4TkNgQhvGDzzHvQWDn9FrMdERN4yXNBomwEUpHciTDTvW7KHjiD3zsa4VNt6rZwNLex6MEtfnyHSZwiGq2ozWMtu",
  "key20": "3QfF8NzwhBkfbQLQAcZVvxGjENHijCbCU1D9kJkZ26kfGsTAfqcS5f7BbJsyXoVSxuGqGeaEnHuao23LwpFMHuYF",
  "key21": "4dhNrEaCSBzWQtsSv5kNzvXVvSUh64cFiUKVrbmoCsAxZmNCBe9Fz9cxC1RAjNChsyUDukVB8RoofDSi3PMj7RWi",
  "key22": "2p3gMfnmrDuSpQ24JPEMaNpXP7cgEF4C9x577FTKQoCriKGERBHi2NSUtH1Ywfx2Ej6mBs4TZ1gAYygexSgcfgSF",
  "key23": "37cmPhWRpEwLsgUP7oZ8iZwcbzThhigbbiTEc12xwU162pAghQWtoeitPrwHzrFUXdfu1RrunFdYCBZJa1fRxsXK",
  "key24": "6GaG9qnawb9MGiPRhp4LTW75AforsPsFRomMfaGhq8MBWPJ4BnFmfAKdEzZSRYR37o2CW9w6tPkEMo3wehgn2c5",
  "key25": "qZhDNFmJ6nFRhBHX7Z87qWrvcb35DXFs4YVRoXFmnSeHYxw59NBe4VLXAi7Rreorb7wYbAncff78YQihVfVQaN8",
  "key26": "59F5XYptUSAcDg3cArdGqHNvFuRcJfjE6sEM5zDwANuvzHhfpnqbNXNXFNNzSC8RCCoAiPdQwKxxMWpEgsh16gD1",
  "key27": "2BkddSfPMi43qC9n3PesXUHbdEC2jbxuFsWPfZNKGh2wDDHrQLGJaDAVeDWQ9epDMTgmTsyWGv9ZZVzbDuRAzdT5",
  "key28": "5YCcLzAegNDS9ZZiYrhMLScgLScVAcFHEZNUV9NiHetuKPDscpiB2qqb7XwqcRLfD3jpdXqk6jwMq5B2a4mqnPsR",
  "key29": "4z6pcKB3N5MpjcqW9eTYUFqAxzLExkXkM6SxBtDdnJ1C9AehSaGGLo82veyJcDdBD6MfZXKfQd6NfwQw7Q53DJWm",
  "key30": "v3aYS9AQ4ctNLBJPvAJtgezg8r9zGSGdBvZDNpCs8hHX37ihMgQHWD4Q5xAq8A9EoM8vQvKXbH2rCz1gKJ9oynR",
  "key31": "44L5Sx5oejDiieTAHvaLKAEEntG6WgHY8xUDAFoMvJmx3XkHdK96srmwRPnNvmXVqGxUYkTvy3kr3Be2JZgG7C28",
  "key32": "9EW6f7u6Ew1amapwrx1jP67M6h1gu33y6gMZkWySnfxAGLQS3Y5kcyct1K8YMXEgxsUgd5CLt4Jw5E5ogWbNVTa",
  "key33": "2o8EssYZZZDpsjvSeycQqPYJcbpmbWtbvmPAxVVkozgEVS5xJBhosW4CXRfnqcrQ7MQJNAAo74SF1XYYgs8KsoLF",
  "key34": "5r4PM8MrnMUDpY5Fd5TBPnAfzwmkQEJzgLNvwjZApJ8m4d37hGW4W8EbJSWs5x7P1W37FhTKWY3BBYfvg6aU2xfN",
  "key35": "4yQTSh7TYQzurCu9n1mB58YxVyqMGMjXazZ4DGXDcKCMQcTtu8XNc5o1AJ7UhLNKxvzwCKFXcNU18QSa74Uno1tA",
  "key36": "5fLoejzt1zXgBaEfWSStTjzRVNS2kiGHT2ReUFCjCLDsDki5Mfbc7y1zvBHsMwrFzAHV8nWq2aADN1hMqYiQY47K",
  "key37": "eERp6cNnacWhezqT9WNzDT3obgJ4M5uUBG4NB9fzA1kKHBrQErP3aiQz5ujdjEgtAAsfwT7QA4xnJD1mXDvc9ce",
  "key38": "2Ft3ycB9nLZCDQs7NqKJRwVvhj9JtXfqtuZY4WCPmXkipd7uRh7oh2vBCfBNpBy4B4YFSnwAqTbUjZwX1VQ42n6p",
  "key39": "3MnxvqLANVEQ8qTNq3fFxMi98YDW7iR14G3SKpMuwVyDbjNZTZCpwVaScxGbKtAYB9FXNSp3bWASZMyr4UxNmUr7",
  "key40": "3wLUwvp5qUXYJZNKDsN2tTp3Kbds69paV5zSZ9mTwGHd56oreqZSwD8xfQX3PEdrQffZjfhmCb1kSPAFqLNkRCt9",
  "key41": "5pxXtZk2ZMGmSEAwtJruV1CEdtMh7jbABBaDhPbffmACgcGYFSLt8CtyEEVBosfPHmhpqg6UqxTvrvM4AtuXyJnb",
  "key42": "3H4VRGHgkMpiiBwb61PXWhSWwHqh92TGVkinC9UeSAVkEKTyu9ocSYzT8kTeYMSjTbbitZab16uosRrQKFd8n4He",
  "key43": "41cPEaz9Smxa15fVZfUY7vs6EKhdiy2sPoqfWwqnXnAhzvXR3ZeQ5ckXwPzez8yBMNuESwHycnkP9azvRuEpLzev",
  "key44": "2CL6cdkRYiREpikKLHCRTFiCKGAWC3tLFUrTcEkcQZmJhZRfxKHtiSPRhDErTCJCdznDps5ukjWgaHbqCKv1dUTN",
  "key45": "5L8eg51cft6hzH4WMMg4opcV4kmvXckjLdo3e7oRz8wgz5kG9Sv5i83uqdZSSxCWXJAcN9CFVbGeG9dUtBGR3Mvj",
  "key46": "31efoUyA5fUKYnYagAKJWMP1ZM49ySvjkzXjZVYK1Qg5FmS3q7RxTPVhrjF8t5fSSZuXxhdZ1tBNDgPVxac2jRNV",
  "key47": "5Ap3od3aBLkaC1QbpaZkEj65kzgKpMm7MRBpYHHJ7ys1MpSJ6CQuDY8Edqh2QSfxXj3EiYUEuE9Ks9faRFATWrBe",
  "key48": "43aseCVXqBcuaD88PsT9fx7otz7CxxvjusWL4KcqszzycUvgd6pgjr6mmMwYsBCtVAgVmpN4qsfJcHmEPv8UuU1f"
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
