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
    "1odUrkYqwQjc5VtDn9LAk91PTwFpbN5QKPQG9xFncMQ8iE2i7SX8UsiVpJiDVAM5X12AnnFsGHmNLXsHHSdu89r"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4crvDogf1zXkiQKNbaujkLCMshSLGRtG7MpfftLXJang2hV1yXm8MSXWzgwWhYSneiRr494ZFciBheez5qT9k49X",
  "key1": "3L1Zi7Jd3tpYYPEp5KD3zqnua1C913EZ7VQRDd12GuoWnjoKwf3xaA36dGwAJrwtYE1emfZLk87e8HgqJjda5Lwg",
  "key2": "5nW8avnYmr3xPAtMvARBupV1HVbX9NZ1ipBfBysE9XJgWhDL6JjnceUq4gtTk8nssLviS6CneJtyVwtViXW6oceM",
  "key3": "3rsVjKxeQXWNGfEkj4dadRNXrNqnTbJjGKCFFSmmcRPhUC5FneCNoimyFMA3CwTyNYdWqHLS6BMqbgnakPjUzTFF",
  "key4": "54ZeR6EFz6Q1BXCShHeXsYCXXfSX8reU6atDWQ22L6MhbrjAeb9sHZU2KzvVpffCedXjKp7jMxHc51vuK4bgwJyr",
  "key5": "3MXBbFZKbhnpC8b2T29ULUypQhWUf6wrtDuBqKVCjvhbchgZbae8QbJNjX5GzPQqzyR4qPcJX4xXXprL33C9mRg7",
  "key6": "5N2xVQsphV7eo1f5GJGecttH1hd8UpHB3jwX1Dea7fXtXjXBB2nfKCUfP963yU28fSadBhWADtZabzyS7oo1Hfd2",
  "key7": "JWdYpmVxjbfwJg9WSs6e91BLkDaunWXoWbeRf2Cu5AhR5erGab9hiDiPr6F2Xp9aUVUQGE9DD8QCFWKWSY4bXCk",
  "key8": "3iY4SizfijnDLmoSvVSi6gGWmoN1SwD5Sj6x9NnPiDo1DihH2eYQwqicKAHE3Xa8dKDcBpHr5wzBqsLjbzmEC4eA",
  "key9": "2Lzgp92mNs1dKkBxET5Cx2EAkhu4UCmscHrz5Gxfnw5mfALFjgVZ2vUEJcFQHG3mS6b97mLMLF3BPqxX4kxki4AW",
  "key10": "3zyeFArPfMfQQJbWYSQT6jqPyUcCTFH2KYXtU486rNhnWoXEtkMBbPdF6dUkBDWL6C4s5rAEXuaYiQucYtdxYEKW",
  "key11": "3pfM8Sq7YJNym9E7DMMs5WPW9fETikxyfEGDWa7To8pZXP22adesPrxXR7BpeoaVEZXmmz2EFih6Bzv3uMYeWWJL",
  "key12": "63TY4wcxP5Lpg2mCSYbJ1un6vHGCiEA4UbUqWAmZCT4PSobM27hw2uycmE5PK8ogShsMhnu9L1S6Gi4w7cqxiw77",
  "key13": "3eEf3N6F2J5cNSoCjfCBLmY5tZdx6d3PoJVyRnctrAya9VNHFfCEHzpQtYi8FGeRfpDnJie3FdeSz9ah73t4CDf3",
  "key14": "4hGboRBaGqnuD5RaQwmd2EZhPLKbUyT5FZQ2LPJMZkcYKy6CxdvD27oViWg2JzJWmWyyiSjvi5TSnf1BDdGMpdr5",
  "key15": "4VyCN7ABccztp4D9qpVkHW4TFXK4cjX4D7WnscGA39cxwRUsSJjxhLSuzrgMmJbQj9BJ5eSSrRtA9pqpcpGA1kRi",
  "key16": "2dCqANShfurKNCXkUPZk6wU84LFeyf4qFnkvKDPgfrKnMFpUoCBvJN1nyWA1MfTyLrNttu56cJNvTSM5RNykvAni",
  "key17": "4PEh7ankyGjaDJyHJBWgNqujnjpSRCPdYKeGuT316fz2ZjKVHEzrfqVtY2Z2ayragfPeYUNHM6dD7jv2LAU1TebG",
  "key18": "4KSY7286khMxFTRUW1NCY6FUix8u5PHGidutEfrmaQcYofiqpk9FMVdHcnq6dvHEdafsksoKqFphgzFVmueCUFZW",
  "key19": "2mJm3e46TweXoHrZLtBGSnkF5kwTEHWvxT6XSVZcGMtvpBzAnV2JrWvVuUuwGKLBM3Wwqqs1nG6XDrXWnS7rAAMm",
  "key20": "3Z8yJdZeJYPLVRaVv8Km67MqkZuehsq8na5rnSqBhCKUXtCNSrqrV2acJwCpjqw7PtUJRa3mDPmUCedYXmxhqdQM",
  "key21": "5iH2dyVMEVjRHgKimdCbLm2WdLumhf7iCX82bywHwav5ZL1jW8VjE6vpdikWwoqNSoMByT4RUpt1VaKdYM8HkFxt",
  "key22": "5Fh4rjpKTsf6Dw6dmxzGr5D5xzoBSNGUEH7ieMjZSSxdKGByZWvuwJAVYHmPVnLqr8y5MgNMLzg5TwxZA7fGB75G",
  "key23": "4vcsAUHhv2DzkrtQbfPNMsHeKpEVtjo7GTVt9e7PNXQFiXyKDyS5uYxC2TRoLbdjYvx7VyatnNEdC4ka1jszFnwy",
  "key24": "3U7g6sShsH9ZTY16vrPda1xhzbCNNdszbgtYPhfQ8bYDYzrMyfwFWZADdmgLHpNavqw12zHc42KVxr9jJkWRayZF",
  "key25": "2PfCs2eL4sx5Xu1EWf9gnihKuDsKfGfjo6PnjUqH6P6mw8YSFdj8JmMUVKLA1mCbyoJcyd6MY5QG3ZsJhEm1Fv9c",
  "key26": "3RRNYKvdB33WYxJk3rGwbY54HD56umENLaLY1GKQLRznSybCTEzokRdkuRj6RZWx7uUn8g3Ef8KcEuQhKVxTydhF",
  "key27": "2DRuSagktzbUAeWYzUDVPQY5aM5sgm7UQi7mpj4yH1FDuwvLXvSLgZNrH9epnRCvaMEUxSpWTCTk8PzvJ1yqa775",
  "key28": "31rq7cPQo2tfrwWi4qZc8eJohwtXLg9qgNEwEnerKK9TfhX8qHj1DHoNryLQZsEFgDYwE3UiZp3p5nRwAwUi1zzZ",
  "key29": "3KA8foRnZ6JktpXTnyXJMkwaEhvG1syX1v4CgeJ3QqGbbcFsT6W2X7t3k8Ek3XW9sEYzy972sra5BfsST6XbbWNZ",
  "key30": "oXnu6HRVkigrMBCwwsNBKvmFn1RZx1ZeTpsGtjmPKNKRMkT8x9TXwFxXhixpp1iQVSoJwotBHc6aphUGPqxMWMt",
  "key31": "5duNimryWUNPJPGf2zf3DgbKAdpgvCHjMknhMg5KriePgy9WkT3kuWjnbGmRC1Ysb2CNQBPpz9kUKgHBJmG6fBo"
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
