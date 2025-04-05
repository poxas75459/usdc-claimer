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
    "4VncnsWm8HdUpdRLqcjQwEAu6C853brsJuWs73wJpqwfiifAEPqK9p2RrYLU7cQ4fqnKnSZRcPVxpJBxWJctQXjX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3GjRP6euvw6rEEZUbW3hoavDRiVHaGi3RGXxCEgDE4HSNkCasfvhuFkTPLHHKdW14gu7pQw5urkh8orQYEvJM9ua",
  "key1": "LFf62eszsRKrS936zgNMgRCta1T8qXsrmntMdZxtKRTBWanjeKSb1riMecK8a7J4Jn2F1xRcqemEaW5fVSAeNw5",
  "key2": "4h3dHYbr5P2vcsYzg6zGhvY2n2hMiz7NmrjSa1JkaLAxeQTD4ZhX5tGGxtzieZwGrREEyjHac7iUqSowxGeRuDTz",
  "key3": "a2Avv2Xc4XrpibJ4RVCYxJp2r6FUnpWZgfrw6YFHbdBqReY5FfpLLRLYj3en1tzQXhW4NrAupDeE9mzDCxxWmLh",
  "key4": "53Z5PW92Cw8h6VPtDhX54f96qySZzZW6mptZdjKX2FFBVqHxSEkD9rYwMvSJsCBdB6zASQFJXMjh45H7QgGnd1GG",
  "key5": "5espzVi4oX9qFwAjvFpT3cERtnLVj3KmZ8xbHwds9MiG6HjE6DUwZ14QhkxmyyXSzRbDd6h1AVNmvbakNXFL8U4C",
  "key6": "2owDL72vhDBudDWD9RDw7H5LCXkbrG75LXnpCGfmgA9AFFgAgVmSNLafkF68vftrJGsHt7fAiaLf31KQ7snsyU9x",
  "key7": "4cyzvxkAvbvzqbmRMpzu6BERWdeHG3DQaYpQr5bFCH5GrmFwPff1P6MEReuaqZdQnVRGrQTkDMTaZaiMqwd84T8N",
  "key8": "3maM9oeVEzLjsFvAVHoc1cVVWL3tDnb6JfPjp9k1qQmH1GWGwvpkHmu88y8k9fRnMnEio4YuxS3Xo56zyoxwJFhb",
  "key9": "2M4FZWPyErqUGMd9EmwHcX4NJaztkZBV3WdCPWhcoaJWBp9R5SbzheTUVLcp6h5eYKZSRm6DWGwEPJJfyKLFkTNE",
  "key10": "2AdLW94gYpvjPyN8Vx8K3WLquxkLku4mn5DQBa6Ppz8Hg6XANzuJHnXSs8XojpRhikqTwm6Aongarx6KCNM2bZ3j",
  "key11": "32ZxSArjEdiNwhdBp5P88YoaSCUhjq9cVc2qNy67Gf217WTBeinZbCmhkPWGGbUFZrUCU7A3CWxcP7XmkjPJ3tSn",
  "key12": "bi48sQP8mLQ5nBKEvp2VWDHTN8cCENpeam1jdfUdRewuEiJKEzrWYVrDGWewRX2Tm9YUF3uv9dZLU52WDVDAkKu",
  "key13": "3wxKnKSRRjdUNjqDwxPm9EGR5DKJWndGTLCkJfahBHVjBv3KLHsDUw11ETTDCpqoL5NxRy38nZkg1bMcaBLdp9fj",
  "key14": "YR939mfbJWBoncXPQYF9h7vH9dX7YVCgxU6GT1hbeNNPT7t4ehPqxsKjyAVqg3dK4aGC7qUFmLcXwd366JsWH72",
  "key15": "5TAPz32yaGF3xhhEGJno7vmyVU8ZR87MSewdLGWJLXN2VxwZMzHeAXwtiTiA6WNbL6fMvGzMv1Nh1MiUPGgeyKHz",
  "key16": "4uRcd3Dw3XLNfkmR5Bx8Wuh7JqN7kYgo74pGQW8RJdieDFZWp1VF3CEXWRSMddvnnam4n9iC3RbvivVGH7YWWaNK",
  "key17": "3KFNMJn8JPA4CRQyAwMMKBCnrpPFaA3nXB7eFz2Jq9VfMLrQ9duhxQE8LzTmAutC3r7zHFbssT7fVxgp4TCynMgj",
  "key18": "4FQhxFaPUgQFFRdVCHGxx2t9ztTuqJZgHrkDyHx5LxZLdGRktir5WYUpgccs6R5JUrsAcq2wwXihHRTRY11yqaog",
  "key19": "4pWVxvqT2nwaiuT5cBCkJVVciqcHYMksfq1hTtoBJqcY4anrbFyrHbwkrEjvQZ87dsgN1KA4qii2oNYPiJkWSbH",
  "key20": "4MQcYgzFtwxJwGX6KuTo1x67kXVrvvVcZv3AvsHn7FH5vXMHQFb33fisB8kGKxSSgDTqzGVGH5gypxEnL473Me6Z",
  "key21": "2xNEJtCwj4StJEK3SHGp57JaRWzuM68RT8GbpYLL9wPJkeLoAa9Nh8tqfPik5UGsYCKVMxber4Cnbra6L2w5HgqM",
  "key22": "5tizJbUfZqes8JoSvNshkadpwvFWQFKQThkEaNaQycowD77pBn2hGVPTFQSg6snG3Ykr3owd1kB3tTFNMxeTKVZa",
  "key23": "2jxmEXRRP3g4EjYc5Ehit9TR1hvZACoP6E23cntPtKJ1yGVeqwvVCHkt8DSt2gCvzPsYRuTfWTVJKeK3kZAfmdBk",
  "key24": "5yC9MumuSd5e6QUr8qxdW7x8qFEvZNZ86b2mRZj5k7KbFh1oFCFo65XKTAAFQ2edwXoYhsuLCd2FRUsZCiFjhvFM",
  "key25": "2dgRsvLiDeuDngAgRie4QRfEHmiCCkQmXSNaSVoqEf9k7uj2Ww4m5ZqZHAWWSMN4d6x5rhysNe39aoEnLGHjrCVy",
  "key26": "5qN4139UbY8mM7EAWtaKyaSJedjixkgtmFd8vridPyVcqp1h4XfgXeCH3kZP7gJYLqy3RX8rQojgBKunMFNzkFhj",
  "key27": "5u1s34ZWpQALqw3c7CNU2tGKvKhPRshYZxARzkUeea6hr9ney8L43gW3uiUFyVYZEFrqkHC1dc6RSWY1JAKyGKBU",
  "key28": "2AtK2Vh3b8jT7yT9sBSfS8wzBCYimNKsY3Ly2EKeeKZxAAdSaDHz241BreMUADMQQybp6p8JWLRDwvqGU9x7vHUq",
  "key29": "62WrfkweZgdC6hkvhTvGNNdGPZk8uCwGcCuPHj1cdYs3ALpUfmRigPMxXKKmdkJjS9ioqikp5FKjJ8maCAqVMUes",
  "key30": "3DJVkwDS3wnMSMHDVBuS4xGAzWRxTKcNiXgJ8iEVdnbtfH7ZsriaXLJPrmsaCrSfCv4LgdVxL17B6bwSfCdv8d74",
  "key31": "45ZnHJiU8dtmWCYXVjQQAeNixr7f7KfMeTDgeRTxNtfb5mSVWxVspktKiJKyo5SQisb2nXWqo4YbRg4t8hwncUyR",
  "key32": "32GdRyvPDErDbct5JU4y7fXTbq7JaC4QTNZubXe7JzeidtSK5fUvu95NiKr3VEtKXgph2fDApqytXqG9WEKDaNuw",
  "key33": "5x9sFaZ6mvepKDm1n1oTeJ6nfcDd7Ggj4bRxaNn3TFe5CRuu1NcPz8n9w6nEDjWyxyu6EiD3ETX872xqchptfYGC"
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
