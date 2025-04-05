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
    "4KcRnwozXCNnCpoPTi8FLFUxk2BGf3ZtorkWqo92fF9oG9mxuEzh77459JEuH5VXWc4Xw5kqqpLQ9AP9pAR5VH2f"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2didQeVCQKAXg8W9hQLVW9jBTYWRGPx49jzp3D1MEMN39Gkeu6CKkrabyKALrtUVmeuHT18xfZsXfLQQz8BVzfDP",
  "key1": "1Ncwb87oKeqgKKKGK5joyRAN9nJbRqAfxBoUTBU7W7wp8EeU3ka78LRcs1Zz5UhXmxAUcgkBcBqDFxaeg4ccvXD",
  "key2": "56hm2MtUdQA5iCNQoQUGqWxXD92YFDjiNGmtMs7XfF1mMAd84GNuBxDvz4PnWB8nQYjaGmBHR9fqV53U24NubtD5",
  "key3": "42nGdtjiMNuRWq6rxboydNLprVT7G81CnuwdWPEjsq8BDGSmfcTudm1VniGeL9DhLzdwrwoVRewYUfUHYmAp3jYQ",
  "key4": "2Lts1sXst38aVhbsgYijPyajwWrNeAReQtFX7pBhrscxniaUULVDp1dPD3qJsmWZWuQ7nNC1v88r5ZgUowiKRYan",
  "key5": "415MFznX9Geqi9J5S2fzPE26BA3HsBpXLukRkrWDpt242u3E2HzYTwfmPBdk9syGDWbBEW6p5wRJ7QzsxxstVocS",
  "key6": "3wd4Sn9ZfiF6MkVfZ5vg4iEcSccdQUHfSni9iGFdZex71eMbcWgywEUP87ZW2aDMopfm6xXUHMf2fD379LW4QLpw",
  "key7": "2ZfkNgZ9rp3M3jkLyJKbbJ7WJ8k23n2SPqPujHg1LEp8E3LJFpPxAtEg1zQMVp2PAWG1XkhzYnnt6c6nQokWA9HC",
  "key8": "2hZyxjusdrR6efseLM1ZccciE61AS5HrPnLCH59jU78WCN9LVC7aLXbkiVixLbQGH4Ju9Ec4cvbhQniRqnfb3vdk",
  "key9": "4sPhi1r2jXRwxw9rBXK8W4dqJiCpmb5kNUhFu6zZjKSBejXwtgNM5sxMrkf3mad4m9RxRiUQWsYhVoEfRrqhbZB3",
  "key10": "4ZAMyWfAMHDuy7Sijk8WawX1WyfqQtXU6XAcmrEf9zdT6W52URRKD75XmuVkqtQHzMrvkW9tzkJbaKP1prjQPuj5",
  "key11": "2mRfGJ7bYzXcCsRcK6zaCtSomue7bE6sHFjBHuYjSWrEmwC3Tt7onLP1oszDznJFhvVpftZCxSJxmSy6QEWFbK65",
  "key12": "3rYNMyQoMPNPheh4NXU9PGc1FHEyVeBye4TdH73BmMAVNvgQNRnhNPDwNpET4CSqhUrdT6Pa3jFxkn2ePM2Nm4AX",
  "key13": "59UD6fK5JxC9Hk4LNKmkWGe4jqXbCxeekSSLQjhxFk2k2bmbvz3rSKHTkfi67ReaCWiMCYFT7gFZ434xdgE3G4pG",
  "key14": "3QVAdNHqgK34gpAQbgyWE1DNcynyp8ZTmC7Ern7miQmTxRvsWnLeEPxQQH6X2bgJpZzuyuDo9K7fvrAyV2Pae2nu",
  "key15": "5cj6gX9gGbmfwh2fqZzaTsKVQXyVyfMLYh8k2cC6kSqrde3FMjuoEG5qZtso17GzVS8CZUCyJnVckRdccmL1SeiM",
  "key16": "39zehXBtqBFTBwNnND6PPMuWYwG6PACa5eixxrj7T4PKtdq6wZjQD32DnYmCUcomq72UcqRggjkLnZMY8hFBqdVe",
  "key17": "2FpJp3whz4rb3TP2xMYUr5jwHwzmYn26YajRAjUQACnSHyFEGabqU7WuzpaVojUhkBGixV49V6H7w9pEbHf7hnvX",
  "key18": "2YLW9M38KC2b7ieCtVqehgMSypZ48KhnPX111y4PUqrdFatJjVSnrn14BJ4LF15nj16ivLJzvuTsn2ccyqwvufSE",
  "key19": "5hBNakW8qVNK2xZdzUKpzLnB3WGKJLRWvprpQFMAWEKQvLVE86NA5JtVfD7Cki65Rw25VSvH8LLHwEMHwzdn73df",
  "key20": "486z8YiksUxmhDDLUomo4qHiBKje6sYFAe2Duq7caqzpnKcNYBLKQywN6mBTmBNvvAKZq9SwTmqVfNKXD5eWfyVQ",
  "key21": "4n1yVHKNvSGERYCCMTU3Hsjxt9GVFgjCWcGFxLR6j8Mpjd7Ek18BksMpnG16P5fHiPH1Aj67wWtqh7BujeT5U9vz",
  "key22": "2Di8Yt6TD5C63nHnzVjY3MZGjpp7qAayy1v5XFbU1SqMMwxUo6UyBYrA31FiKUU2TNtyg37NGh1GiBRzZq352odc",
  "key23": "89wVwiamKMqrdKMxoXB1r8mo8aX3xhBqpt8H4QdQE8C6AEZkaacLMDjSvhKa7Fn6hPEmFBbvVrh7S9Ai5uXw6WK",
  "key24": "22JiJxVAFqgkSdouY7AnXAmaxvPJx4HkeUKXBPMNsLje6uvkR7vc7vbdHCEL5nocFy5UYiHusTPXTyXJFo7Ui6s1",
  "key25": "2kKW4dSSgP9aXtqE9WwmSr43tw1nPasi3gfFoDyjRXRLfXppiQ6GbCvoE1pAypAPkv9nkkZnVPHLFppEeBFjYX5a",
  "key26": "2B4NzyoAutVsJVrfLvw35c9yV3MfhpBPGPRyvhscXQZkZzAxYBbGKrLemJ68bghRPJgt5JLJbv7mCfxpeUnEM4PL",
  "key27": "2vZtFFTvEQGWXZLKACtyqfmVFzas4m9PbtXQ6Bje3dPxqjXGC7Lmwi3mNGgi4C49s1DH7Wz8AQBVHiZAkciAYALW",
  "key28": "3dEQN72UC2TKgzhaBrH9P5PtH5dTescAG5QRbDtp9ZLDMoKEmAHkhPzGw4phQ5Bi9ESAh83qsvETfKuQ9uNpjdqi",
  "key29": "2SbjrbEzZoZv7tD6kgRWhZghKPiMGQeGPX94spwzkYzrvmrmZRsJtdjLkKKBFbstAnCJHQKmU5ChnhEyaBrzjLsh",
  "key30": "MXKPegBAQtmUCRtAJQaBLqVxwLSxDgaFH6bzPx3FdYWGDcVnkHSTHGLsYvxWfkLKBVmLbghvwGjw2XmxsAXbkfJ",
  "key31": "233ohgHxPLjAunjpJ1XqTzrmwiVBs6wtksbT5AJ5a935rHL4L4M9KkfybUAzx73L9iyyu5mxiv6rf2MqtnK2CWbZ",
  "key32": "58qdLc8ngH49tMwo4bUNvs6Jz11wz9vBxsHk8dc1AX2rBV53wBC2TEnDBXLg59UN35cfyKqvRUZRJTj5Ze2LTP1d",
  "key33": "35QfSSYw8oMLdn9hDPLcNBs6QWAwAmyezTbAyKHXqZnHJi3rSqb2eKy5yQFGBbE3p3FWN4BuxUTM5F2uYqMzbY2q",
  "key34": "4cDeHc98c5p78NbVm8TMJAz9GM7dqa8mtQSSP3vunxi79EDvy1vZ2VKr4oKqkTQYLwondhP2kG4Svs4rVYwuKdSA",
  "key35": "3WWjkTEnkLHncPmA6236xp6Y45hJRM8bKa18pAUV8P9Yd1H7jpncBHVW4CJNDkGaMZsdYkbM9G58N2jFEQcgnjs",
  "key36": "4f2qc8B8FBq2opYEvDSJH4SCcnkDTbY4ejTT1n3Nw8pWgXmJrgexJi7Qw5Jj8sQXZVhP1jbRSgBggVXk4MzUEyzT",
  "key37": "4RT9PXToYDigcoy2WpemYJojC7AR7DdaqTn5xd8FkZCVQRgYghcAQ7usa5AUaxBmRUhij6WYvxF82tW4Ww3D8Uaf",
  "key38": "5oGPPjq3XEUST11KnDB3hJJ63WRNNCTE4DUSoKbegBd3FXX4wkx6LZUuZeyum5qKVKGd29oyAFAniq7SRKLsagky",
  "key39": "4dpD2uVEPjiCzdtbRpF8PY8WFCQUqrRgho8ajYPggQaTH4xpJYUU5QFyAExqwbxxoyNDoDfyUFEQfxUKjuJjggCp",
  "key40": "3X8ERiSA9r5hC7zp9Svgm58oTwo7x381K27gNVp81fbQ2Apwc6NVLjFpSNdgwVWiwUFoDWjZxkpaXphaXftmtFro",
  "key41": "2JidvWaBBdKq5Fk6t2rB2m5fCndyV2d9g8gTSA3zZgAcyphuCPpTpapvxx8X8oLLNyyYH5h3gtMb7iRkEhm4htSh",
  "key42": "4CS5DagHAXu2vyT9twCTM2GasegKFMxZLcwfCGGJBCpwKXifHGv5rkZznHrdYhb6y3YRYXN6fJm9JR2gA8R1hkAT",
  "key43": "4pviQWW6AsS5932tMWRgUVvhkR4LRPhbUUhRNAiLsDJ5dn2XNXvH5oprkCD6j5ZXAiqoT5jggDMKJF6tN1p7cDqr"
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
