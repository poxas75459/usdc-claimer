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
    "4ZKzTVnnHNF26GNZrYh6Q19E6ms71EMc2xfUqZR3HFkdCsaHC989X1Q8iPJLHfxuGRvBKJ5ywTmvXn3Ts63Sdoim"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62Bmrwx6pLSjoa9PHSRcxHbrmDnLDcSmRzpbychEztdc3Ltz3BLaRKDrKXbA1TrGokUxCqPfgJAvbjiYowLr1NdX",
  "key1": "4okEXU1VFZhm71JC53GPQXTWdzXRXizbNjXX4B133bRQNEtKycRFAXeAUx9w2LuQiZy8RXZifdYXK5xWdbzDEZpr",
  "key2": "v3khXJ6KN8jFLT2TQ3oAcf2mnZtjCq2K9uJbvAdpyCLnt6syx34BGX34DLnurkej4igHKnqptvva3cgyjzDPEHw",
  "key3": "25yLtJG7YcXepCMpDihafe4Bb1f52Pq7Hs5xjvYTXQ4WRkbZjV7Cuh8iUA5VkTw7xw3AR7z7Emy5YEMt1Rs1T96Q",
  "key4": "2yjc3aVxPj6nMLWPSVTUR1Fi1Xe9P4kiRMcfwZfTCusW9d7SLYTbN1MeQfKWwtLCVSvTeU83L6FzJE5ywUfqy9fk",
  "key5": "EEAMju5hcKvfxJn6fspUEwUSXsKa4F2STpLXzQfEaGigskCRWUgJdrnwsCCQwpZaR7Tqsa5To3xqFHZmLU2uKsV",
  "key6": "4fxrXbW7iEAgTP3tZ8nkSzhZ9i5c6ZE6kuJ6MJXTzThXd7tmgFksfpiSeSmhy5PnBxaJPjXrHe1ujsDg3dR9vXXV",
  "key7": "xgDVj5zKVZWuNcV8L4n6a6QwRCeCtFYNEmJYZuRNJWbLhvRHrx5psjYEyvkKEdQbcTg1NbBQJcQgkACoSLUgyC3",
  "key8": "iYkigzVxLu4a6nEhmyAC3M4bYHVHUfqETW8JuF8PZCfvBVR2JqjUCscYJXra7Af1epbjYWN2jyocb1a5YTFBrkP",
  "key9": "xBgQuQmfs2z43cj8BjZuN7gjEXKG4TLc3RHBBGv3g9fG1v3FC7aGDLk69fiBGp2VABBmiaPFNZp1voXZTGbZX74",
  "key10": "65snXC82occkunhhCPnzarm8ytkpnYWXgTqfRj3Hn4qMhPMCYkp3SCRHHajLs7grhm3icregpk4CPGkHhMbs7Cu8",
  "key11": "5dVymfC8g538jdnMq6GWivGMC7C2m3hWNDFCTreCF6c6hZwaUFKNzMjkQxSPp6bu6JCZc599qYgrQ3ceSpMggQ3A",
  "key12": "xRWmp9LFMeFDBgZeX1xdt7qyGgXCKerSqhF7yec8VsegeHSbX58RD5RhHcZdwqhggVJsXHzMZCbQrcFPjKfAsYk",
  "key13": "3fRiw7Y4LMKkV8RxHZxETcbug9V5E3tWzYeDHt1fWRs8YxCkzch1dC9SbeRyqVuY7LP3du88QvZgrXK9G1WCTCNs",
  "key14": "2iVNYjVzpS2nmWEGn6fUJjgnDgEKBzDLRkDK4bKshdkM1zA1MzW32AR266R51fVWDtRtwBirRDGGWqCKxWHnqMhX",
  "key15": "5YeZNp7ibKnJDuqq9HEUWK2iCyrHdQSd55r3HGQ8f7NSvuENDgoW3CauadwKxh2NSdmuPsxUumoZ1irLBPVdm2Z3",
  "key16": "5vMGgvyepjEFA8GrDN7C97MatPKEBdyjENNfdMubbhiM2g8VcsXDJJi3jvAh6LDZkjF7LA8UkdMYZjzn3qmsvPXA",
  "key17": "3oXZEYVYt8hNZJisw7bKeHa7Yfd4y1GKjfVfKhxWyudLVD7SLVG94uE2xoY1Ky3Gdk7ojXFx7CtEP5rwQVfFBgAZ",
  "key18": "5XwUv4rEw4J2uFNg5rQ8FiiEVcZgjoVHqAP2rnUHag3WuENa9oTjapP6wYvVyxEtXjJrDAFJTSGKqptvdphV6tZk",
  "key19": "3vSr3SsKJHQptfB4Sha7eVNnZXkfynvX5Ay2dsTPMhjwDXqs2gKxeptHgXjjirXwoqoJQsB2TVBhUyp1apFbZZRv",
  "key20": "5sNU7EX9535gTuqySXFzUK3FJGKh4P5HEZZDepH5yHBzsukYEaFLiNfDT7kVKc915Wx5BkCgMqhf5ETUvNHarmjk",
  "key21": "2RSKR3dA4qtL4VWK7V3Lk6bmd1hYKszhQaHHUcv9BFey6k3LTuevo8TgQgdTzzQu1EHBa7MLmXXKYGhuz8Pny3Er",
  "key22": "5FWDAnaXjAPrESXHnByB3FrLsvfPR5vGV23pXoJP14NP9JDBg8uMUpmZjpJiYWSFR18feChsncCiZRWtviM6dthz",
  "key23": "4jdCUR9VzLLNganhAfpPEgdwnMcYsBRMvzyH5xn1cLyctz4WUcmpmxwMHosHbEpEmXE5FLz6dm5hMBLYtUrr66QZ",
  "key24": "4L6PfdhZrdSYvAcb7nR69FWx8SVUtDnqjmd5fbRVYX8sdjYJYb3qiAXEr889FMxhKagaVe5JmSq76kXDF2fRGxAG",
  "key25": "2W4A7B6LkFqsjzeaMWYBGMrcNG7zLH52iZmgHrAPfHVEVq3WRdeHgeKLCC5s9VcCpLTpc1jy7iewEoN6Sf5q6xdc",
  "key26": "5yfWsz2AMwWvANDUqTZMfs1KcQUmW4S4XZr47TSjyufkLhToVWnKWr3BaYEBzkcPMHSrnFCmUGggXKVbHZwJoaPt",
  "key27": "5D4szkS6iZLKSTncHEWdeVLTV15DxgymyrQRptesRNjPd7X2YjsWXxKXWZCUuHeYvqZ4jbayREhYshNahxoDvZTL",
  "key28": "5FCfs8tqANCMUhxdjKcwzphKNkkqoSXci2eAoW871H7TbujQCXap2At98qu1bopFbuGNACrD8oYiDgDfnAeJMRwL",
  "key29": "4wkhzGvS8DKuvBgfQeeDaB9X74inG1Xw2EWbFU9N1S7gMPdXGCCNHCw1q6RbDZxmog2MBMkV8hL7S5iuX4GWh7qT",
  "key30": "2BBZCLgV1YuuFw9sRXcpaQJLYfMkgv26mHX1nzoMqp6SgBmE54c97XxAVTpexWJJ43CbsBiudgF9FpxqyvVspBAW",
  "key31": "5PS2mMtVdiFb6nRyF6pjFnRJH679eqNPwmz65ymR1XN4ofoZecxPnmkoTs1GdaCgX2GFVF83g7HPiENc9aSDCCyU",
  "key32": "65YrCu1KXyd9V2MbYYkYHU5kNGeafKXfmfkXhw9Yxo7WfvDMVx91NLjU6QVzyQWR2HA8HoS6x86C6BrH6JNd55Rs",
  "key33": "51WUk8bUKTdtiRgxWWcTpdcaEsLqgiDcRfpWmmaB3XDE9f37nB1P8KMFXjygYUn5pDx5nuVky3icQ9jWa7AdZncL",
  "key34": "54fitdJnPKUftV6778QcVcDLKvJce8k1qF5HUDQkoar7GLxncr9kNV2KVkCoM6EpyLdiQDwo2fbsgn54D68Tz3Kr",
  "key35": "2SQApnaPUyUggeWqfE4NrGXLvrB17rTGo3GV2hRzSynejT5QhbvLpKpBJUJq7Fe7jh5r9Kary78eS3G7y4sBxmoQ",
  "key36": "4Ln9sPMLLeo4R63bx2ZkkF7Z1b1P619k4gcMbU61WfxT7LvsUXx2c9A86UqJGBCJWb7W3fDSgHquszgNg7mxxAZG",
  "key37": "2pjha7KauihHtnhhs56HUCpRu3mA1w5UpqDV6QPiW7eDwZoMWV6R2AiZWvb3RdoWve2CfbGuB82U1TqKqffuUBgj",
  "key38": "4XgroXCNtQHvn55Hki3DY297xg1As9fL9MKhfuxffy453H9dmkxeQzZ2WEN4k11dDc5SAFL1RXw55D1U7MVMwxak",
  "key39": "4QaYBb4bMh3ZtqwpAWQ6DCnshqjskkTcMuU261D4gSRsimeQJvcopZBSaVCfk5P4FKbzYxwQrv8TPVzeLVxYxNk9"
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
