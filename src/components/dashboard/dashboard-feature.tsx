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
    "5Vc7JfGpeN6XtmVABEd343R6vXrUhBPLW6Qxv2zFUT6gh76QHBK5bmtjtrFBU7QuTRBr7oToQYzyTMyWhujGpB4Q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "H6U2k8JHgTcLbvBGeXXXvc4CArph1DsYNFQ3SsovHXGH7DxbnbRqtTLwHm3j89au9mR33LNWn8uYeKS2wxrjuda",
  "key1": "3R279NuX5T34xR93fCzz5oy8R72paL1xGwqZM1Dycx6xHWX5NSW5bde8KSY8BqYqEFA5uKASkzQokuRNCP93XtGm",
  "key2": "5WU6ksQJfP5zryHByyCoh9McFzFKzmbcdxX8M64QCjDvWvNNA5yAaiEEJP4xKeCNsJTFC8u4And6SgnFYCYfBye4",
  "key3": "4DC3chYzp5TamkZUZhNo7xD3LQYCHXLu2agA2BMuaiNEK5EK2x63b2soZUDva6dhEPH71YzQxN2L6vfuyrFZHFgA",
  "key4": "28x3vCuMDyhC5vDt2BFayQYwZ6Wo1wtXerqdqgfA5yJSLcQBY6CGJx8CXBvmwvEtJMLRR2j2s1PpQCLtLNuuVYZT",
  "key5": "3dYf4Fw4zpKvAHpsZjufBMPPMbupkkKBmaRPQEcQgRJH1p7jNBSPYXU6BYRWfNk8DeibUDhDXSLgm8C4S7fmS82N",
  "key6": "5Pbo2GZhQvxupVCBiaCoiDchKqVKN6FBE6oNEBGRZYdxjAKQbt2EebuB84jAtwsjbLGzRtYgpxVfbNvyDNiDxqKt",
  "key7": "5Ez5DJJcd1jskUXnx1i6qXMMA3Hz6Hz3Ew3Noohx1fNu2GUSZMGRZzrq9pTxFE2H76283cd2KTJVVEbtqTjDc48K",
  "key8": "hw3aR6LgWtDh2ggMd8va1tC5oAcNddJkjQ1AUeGKvJJLutpryrvkLvuuBkxrxBfpTjVrJT4ExosgSY2kZrE9gTL",
  "key9": "3kgEsW8QjiRzPdYqP8TguVUoMqcmXd1rqdmeikU5vd1mtNXupj4N8jmMUJYQu6z3pbkXsBWRfyHHV3TqnSYf3BxV",
  "key10": "42Enc1XhhuFkGYdHHUB9km1dgVF2Qqwy8Dv3YxjrbwKmSykmwn6sXjGxf6f7jsBcWYSazaGZCEauNvR16eQW5QCk",
  "key11": "5Lr5PJsby1FVhNosaf3aYXX5L1tnJ6J28pmu5fq5oscyJPSJgcpxxbNF5tkhJ6HsjwSdnB9eMjGqZpRaknpCmRp2",
  "key12": "4gZCYgrWXsYcQEewdfN9GZpdMk7Y2n9rbSvm6gS8zFN5s5Vhxz6xSfyBzdxFPTnGdEUBEo1RK8sKuFvfn3tuUZEx",
  "key13": "EuMfwgm7Qrg5zgCXT296NmARRcoAChhTJWjdmtwnWpz5CCT66XcK3o1VJph44rWy2TtrhXr6D4itiUxbqPjGTKP",
  "key14": "2piZgpDVnCbo8AZ36TCmTar13RritV92PBhnMZj3CPVMDdWSvKyRPomyGewfh5MZuuyuHvWrAXNDgyhbT8MTmwAE",
  "key15": "27shzEAsYi2dXMmKzSWGhWXKJEXzNBq9sxnjVHgAhJMKtHtZzAtM4CE3EyF7CwMyyYRA97Qzw6r6EM4hr7A9Qi9w",
  "key16": "4dpPAyEDtUY9hiR3QkVK7WDVYXAyjKC6uYec4uQe2JYZ4d5i7S5UDjEs9aTxcMMfazjoetzid1W3rcmMKRDgghsc",
  "key17": "3shiNFEZPdpXEaqZJaRJK44VXFKyJBi4DVaDUUjEETGKkw2sK4u9rna1JYerEHxNZxpm25BKjD5s4Hgbgnb19eT1",
  "key18": "3SaYWzJFREf3yzJNkcbjn3L2crXq19vtnAcAHkSkqq7EwUV6TtarcfB4uqWNZsaeVRhj3WnNiSPikynBfCE1GvxP",
  "key19": "4YjgJssUeRSSRCSZ1uVTky8EFJrAWVmXCr93sEKX5hriGsAsyBnAex9Gs5NX9LQu6r3Nr81EViqVUnP3VMv2ZfFj",
  "key20": "5pJVoVbiqBwKjbgvZMK6SPme1ASVqZhd1bNohB1RmZbA1jiBxLqsFZLsjFVcD6Rng8D11UoAeLX4dMUyBC3gESDv",
  "key21": "4cznGkypTJxcw1cSJmt1pUHQN1FmE9CBFqhKrH1tmBJKKUHJzXscPYopp5nZWaRD1RbTDcTweXa3SV4xmjLKRmGZ",
  "key22": "2hVWnkenYzRVvvbViFn3QCUEXF4jorLvUQQdCcs1wf3CF3rCMTm2aP9iz7wEtUaGzUC9N8bhDbyQENomiuWkdCxP",
  "key23": "4T5r4zyP8XAcgvy5dh2hZVhqTZUAGfbjWN4juYShMeMo3vQo6jgdJ2hHGUrtpB5aLtScYxF35nCTvBiZNX7c2AJC",
  "key24": "29hsci5mpumtxtRz8sYmfKhvQ4Xbi9AsJvriWo93ibqMxykiWTvPbY7PqHNcqxupUuyzN1L6NUeHHN8LR5PEVAWv",
  "key25": "475vsJjAXDUhmzazqHCtQG7o8HdzWErKbhFuHFkxDuxhDbUk281mZwZtqnbzEh82c5By6GE7L6EDNN11BgWv7qMY",
  "key26": "3tFhNZ3MoayCYs2YCLCnHNFzo4H2PadkSfnW4XHGHq7zBDDhBMQ5samps8iubWGx1Ne7S3RKfxcvj1kUHEbmKgL3",
  "key27": "2BnrhJGsxDHSwoHiB79NjSuSrKXB5TqhTUSk4NR5rtW4b93nPoFFDQTH1Kv438i8UAuZbrxCfsN394RWa6Hdv3i9",
  "key28": "3HXAh79BYSWKdtQgj9jNQjNPpH5rqKroJEQaEMGF6aoJRBJjU95dAnXMSQ5CQ9ezBEeetyu22424yD4FNEj9CvQf",
  "key29": "2yMe4Wmq5YvS96VMax8YjDGWAeFFLDG9e9SQiR6Ut98TPU3tS8rHgo8K1yuN3wDhNJkM19CsKX9UYbs1KKYd5g3S",
  "key30": "2oDRXb5swtQVKqR13jXRDiEiTYqmxrmPBaJmQR66eLugFtgBTKWgZVSdxFNVQZgJApeGoGDv4SPCGQQDuFVxdxft",
  "key31": "2nVPmXMNJk2J6aSE93SasTh49rpSNY3a8Zthoni24pyKmpYw56JV9dYxtLLVmjosfKVZdkR4f7G5L73JD1jXGji1",
  "key32": "8VgdDgbCAah5PCS1Xv3ZpUkwDppiYdLogTGBzahef1rcx3jCduGJaRpx1xAg8wbs6hZADEVvTHaUbimFYa12Feh",
  "key33": "5U7iZpqxVNDDSrG4tP6ZfXz6c6t79ikuTxQZgocbriuZCHVjYsjA6uzR3K4yYKEgNuj6MbDJwyqzhyMk2DEL1wZx"
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
