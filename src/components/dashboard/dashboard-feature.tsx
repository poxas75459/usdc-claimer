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
    "34HCf9f4zzJoPeE3PnUwF36TLmcb32Y8bsciDkzpnq2d6TKCPZLANFnW7bp9a2cfxcrmWHRiNwMv5fmMBtBLciqT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ZK8RB8bdE3fF4zZsBGSATXNo2VasR39f5v1Lj5kohiBzPDduC8EoBd8nniTggehcP6xuxnA8QQqUzp5xfnvcg5b",
  "key1": "5SXJCs4NG19Fk4BaC5X6BuE7tstfFnVm1vox16Lb6ULX6nVRJXjKoEhAnkdKqjVixKHqdM1UfhawKtMypzUzkqF6",
  "key2": "2BmuT5NvShqXrmRN6X7BMH2vZzksTuSiR1zVhMhxiJaDw8h9iGo73y9N6FQmcn8PYGicxm8fDsjeh77wFjcN5GYw",
  "key3": "4p2rR9vCFQnXChXn1NHYnBZT4vte6zLmvjmVJcga5ju1estmwQn6Y1pZGWrYg8sqqJAu1HCiqNjFs829mkqFMSZY",
  "key4": "2j9jySeo2RazagT3oP4F5UkxdhytPrx22jKFawnejtRgLgqfGFg5uqBRkLPu4zhux4Wgsy6FDDinarjHNnxNjXuy",
  "key5": "5U2QtchsanAiHLEuGX3sqzzMyXAqM3WzFaVFsobk6Yr69CGkgAwgexuHmVG1WU44q82VHzzhMto8XrZ2RogAKnbL",
  "key6": "2XjYUBZb5WRtjc88BNZVq5iAaVzec2WQTXNv52j2w2ZUtK2oJJetc8h3hZGgJHeqf7mpGBJ9NQqeRPXLYAL4kfVC",
  "key7": "4wZPEpF8L1JdWvvD6HdXSewUrno6Xg2UT6hf6JGRCQhMnWhGuBUnSmRxU383h7XvwNC4LoMcDQFas99oaHiVccTE",
  "key8": "2zKMmDWaFM1hVV2VVzaTRAGXxu25wFV5xx3pg56nzGUsoVy6BAqj7F8hXaSXZvnqpV2Wq2fytBp8H8SqXXkCbpuB",
  "key9": "5cMgJfc35es7TjNRdDVd3fgr4kHNe2NntSsJCmxbdYB4FbSbqxPez4kgtx3BaV3T32hNckVdTQVnN6cthon8pZpm",
  "key10": "3R3TPTLYbnUX3FBFFVFCBMBa3ZsiCNRj13Qmxr4YrjMRbvh6CkTKTp5VmJNEbb3EiYUTNz8DT15pjYbQvYZYnMjb",
  "key11": "3kHCUNWPC9wi8YpzfWEw26foJgLR4jVVMQj3uHB6ehkpZnQyMQqq2g3ktcipH8D29NzjsH1UNBmMtUQZDe3QsXYu",
  "key12": "5KENaWNKRHybwx5hHXoChEq94hYSsGJLnQnbUQScvucED4Hzy2D6oHbT9hEo5ecWZVeMiZo6RVBaVWC3Qs3UnEpE",
  "key13": "5mgwpbTnfZZaSg7Pr4bnSuzoZeZejLGM16mDGC2WniVuaH3VqhPgzLSKNa12qajVwsWdShrw5nNMfQoSWkGeKdjG",
  "key14": "3f7hqW5VUABFAczYssFNQysAJo26aR2wBXfbKkq6vicLPNqBtsdLsNKrtNVYKuBZSVjXYDnLqhsXikXKghdSRn4Z",
  "key15": "2cm7vguJurnfZCD9CNtLvtcQHuxmwyxjSP8frDfz5Kobx5CFSUicigcDDGhDfqTU2VEBMoZeK6XCRhy23kLmUXey",
  "key16": "X183yvWbp8wWp1DjHpkmWidkspfKHPvc6XLgtqCvSg8iDCFK4DtsmdYYxaQGk6zaQbNeTYkYMGcnjpgJDTX1hFB",
  "key17": "2PQa2KNJXysxWwP9FeDkbrrg2BwjfkG38E56NzL1NexMjXtnnKujKSBWn6G1vNBD4MSn5ybQuBKjRX85t2izRrRh",
  "key18": "4A5EHKngqv4mRLTkmqXEMun5HtuA8ri2tN8CPtWCiX4rQhDBJFHWxuA5jvNtuUyunSkeMWbb2gtfbVgrEwYBeN91",
  "key19": "65RVAgHJyDWB1EjifUjSi97gmTbGth6vgTk6zd8T17ncXddVhDM9dXDqnS2JtxApBrZsDnCTYGfDZF78fSFqhExA",
  "key20": "4ajBzwd5fjBLmhy8wsPQjuX9smCeimvKZsRfpAARVaCe6Sdt7H5v4rWzN1wy6N4tcFLyeKrJ8oNW5qJps9DgJLwC",
  "key21": "3ExetttCE6ehpW9wzgExqgWb61CQ14ArTLMrDbR2N7iY2whUKbqkSbesPGVxsXaPNjUqiEzWatLVGwFPKvsjNptC",
  "key22": "4Xn7nAiWWERAPmjyxHUsykJsTJiTPyMHGsnLSPJwjv1PqgZUJ8Kydopxj6rkJLG7qXkCx12Zv2w3XzwYhFVpXve1",
  "key23": "5Jwv4BjijTwDtk8WhKFWZMWMnYKkG1isTUWZwCunFvs3y2K8fNdDhcWgTPDvX2FzwTFxFo7CPXvAeJ9Mt3bSvnRv",
  "key24": "2TNc7JbQMXC5G96yTdBQci9yFh8hv98DzYsX6fuW2mnSYYSVmG28ezxvX3YreVKoaezCnYyeYBGR2AHdGCcXA45U",
  "key25": "2GpVCX9YoP1L7SFUMcXuz2wtSJg8kkaW7RePCx26dNncZ1QQVd3J8YXZLkVa1fUQLicvzLEmSrHBtwTwEwmu2E2C",
  "key26": "5ptmbqForHTAPN9opAWcAYytBzDkXt5J33iBsvLZmh92nKuCh9VgMADV6mVRJFik5Po18jXtr5SuD9bfS5d2RgBN",
  "key27": "3WEoVsjR86Cc3HtnurdwkCWzD9WRvvq1TdFyFss6AGZU2JZK3sC9MXqbKW9r3xreMinggw8i7bYdQv3y7TLt5E8D",
  "key28": "2UQekZXV7cbdPMbpmVhE2eQmdSbv1ddKR4nNUoM7GThnvyx5UowVmLzGwHWfvmWnr2KC9CyBdZ8bkjWdSTgdMppb",
  "key29": "297GqA28j6SCvZZowtTABAfQUojGocortCAe4HhvcHZ9rbrgDTA2TE1kQ6styXNyrs9uUftfADbEbR271pn62xbS",
  "key30": "3igjCK9nbYXqwNJZ2mbCKW2wazhWLouXNh2KaK8XtYDcGYQzszz9QAwVFEcYBSMfX4m9An1PAdf1pNXpJCBEDbFU",
  "key31": "2WbRDvEJtp7ZEeMFuj3Ly4kJk7wMH1Fpw3Hry9aLpU8YJYbr8CEGk4AafuNMvXhAYZQE9G2SdJ7aqNiVqZ4DdKRu"
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
