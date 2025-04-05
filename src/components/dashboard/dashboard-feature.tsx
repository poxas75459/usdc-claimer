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
    "5RXCovyTvAgiM4pSFQ9tP5onVKBSviNrmiB6cTAf7x9DfQP9zC3BB81LYj47yGQhxFVzxijsphqLwaPG4mGef1J7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4TpFDJEzwR8NtRKFW2eccLZ7ZFPRRgp3TS9qAHMeCE3JPWR4E9JLF2YzCrZz2cNF1xVDWwc3TxJcyRkvmtuz7Qf2",
  "key1": "3MVvhJrXF6CiT5CsyWrQG2rK8rwo8dA6nWn8TdNkWtVXJfiVnSJHgopNbtJWQG9hkQXvzstHqhssitMV4LoxvfYc",
  "key2": "4TNH1hUQzKXF4rfuqsmX43K9C2Sgjd6xKe9fuVmjt9kFZ5zTa8RBFmP173zLG76ESXYrLWnWnvyXmwnYybduBrTQ",
  "key3": "5TjBm7RHCbH6zfgaFLZ9CTNjTu5WpazSQEvEgUPsKY9u6AbRigT45dRJUv55fdL32c6VhUgXYWQ5qKHVvmFA5kxi",
  "key4": "38suBkiojtZihCejFqqvw1KY7hj4UcAM3je3mQnqRRYEGe2Bn7ErKLgv3F4tsFnoFkLbbm5KMrnv674VSVGPDkUn",
  "key5": "4iPw6DGgqRMW6EdbWXk4sXq3Ja88tuJtpsfY9LUC5L6yGQPfDt31DhwjCqf2ubcBDrdfwUYu7to2F2iRFL3PCcWM",
  "key6": "2ht7ekxvU2nP3ShkNjScPfAgyJZT7PsJ9xUHRb9zoVGtNJEaVy6eWYztV9jGBW49poaFAwjCFVTkSc5C1rqFrXZ2",
  "key7": "hBJdnRGRxuUuCULbMrDTf2mk6T1RHSLwgRuL5fbdNJgA6DGD3ssbAqM15cK4MZZmZ7xHkhVdfeBvXF8ZCcrs3T1",
  "key8": "2KcTtuDLBxeLrAyy5GED8pYFd7qRvGiYZ48xk2ozB5siANKFX3dNJ28Cm8AJtAGiaTScp6FUq5747DPM3p3aHqdB",
  "key9": "dowRkoww2ACZVZJYS9SKagLKpfSFzJStZaUT7gzqaQJBtnWtuvozFkXPZRB2XHG65SwB3QtL17DPESRvKymqGpn",
  "key10": "62ZmPZGCtiLdiZU7SFkgJhn7aD8JKvNKEpn3rheM5xcMaW3bL5NQpMKkb1p5iZNNwRgxrXMzWXKiFM63N1Nhn2Yp",
  "key11": "5P2ijxxuiLH4FpsRKa4jH3Hk8RALL3RnMrN2jcWb1GwDAGNuAZHsmLRT2dGwM5nbZUQQfoLyGTobwdsmWzSzaVkP",
  "key12": "4onbpHbSsQXU7Di5yFFVdimUemzDmsH9UCGhaEXdKs1gfPghNBv1THWAE2tpgqDSEEH61EEmTYkvce8Kn9hiLJVT",
  "key13": "L1isDUHcLQtMWkXHo9Z8mEqShbXucmrjKtpQ2bFBrmdWKkGz2aroGKkCAEZCHYPp6YiBva6YHqRPDagrtCeeTN8",
  "key14": "4Zean8BxCHzp1MCfviNGqXjjvpENsqCpFVi14JCJt3LiXQFs49w45aDNs5PBQWGtRA4726PC5FkczdEVzCrY6VeB",
  "key15": "52rsLssP6DFfVFU7Z65VgaP6kqehycMHP6EZYCcqHQaU61qAZfQTMHnSFa4AumsbRWZXxjadS19pZ71VTwLsc9uA",
  "key16": "7A5syecsrhRm8XLDQNxQ4dWF16wCQj2w3vmrZ7Ndu4dSsHGtpYYHDbjaAjF9oPa4z44uxUW8CoK1qhiHfhDtpA4",
  "key17": "4PFjCq6EKsU2pPGih7VjVbhMyfmb1YYhv82xTrDY8Ay9E3LJdoxACM1pGpPEpqCLchD5hiwWUmjmPHi5HigYDp5k",
  "key18": "25ztrz2B4CB6KfCLDAzra5WoN3wtDQrgEdX1jrZiXFyhbsiQ1wGbzrASvLf6aYv1SQsJy46f78qCG6dZJPj6PsuF",
  "key19": "2j9XsEpHFBCA1EBEyAShzpTMCyXhncTsPfNErQordqhsXvpMREJVJVvm9YhUQoabM6SPBqwTWWfUjrpqV8vWE2Cp",
  "key20": "4cj3EGpWFfUMVJSfdCqPMbFxcSQHRoFxkhEYPhsYhoPBSYeB913NJctAbSkrVn3MfFGnaN8WYYExVCyR5zUx5VSN",
  "key21": "3CWW6YWBdGE8xgeNedt12n3KVRybVeMihCBW26X5ps6x1a9m3QPwaiuLyafNCCwtmJwigFpzSP99rZJa55WNiLCq",
  "key22": "4bYib399X5JY2SXoWK8mhubJ6TWdmzNF3jToFY5xxYVHvv5miuQWLagMvtVxuH4CyqCZ7mHohbYKpgcWy4TNCrkg",
  "key23": "23488fXXmq9m1i4Xk2SAcQhkC5VGb3YYxPCMtEYziJBbwt6HCUiCgPn3Eq8eLeZqKzK2m4PXmxTweHwck5amDpkx",
  "key24": "4RiKQdbjnR9cs6VNKyTxW7WH7KMMsQJgNJMR5xAgHPSwnhqSJ2KxXFVXRudVRW6U2mTUmNFMoJX4msxjhxPrzsXC",
  "key25": "3kE58xRDLj4gzuK6kwqcx4GTVJC6Vq8rfD8AL6ovmdxCv4aoSfz1NQgRErgK77roCHSbYxtyiGEXTF1pNkxFDW6w",
  "key26": "5rQNSaukRD5hZNi53Nd7L49PdrbXRmw5aQBQbTBjwr1FUVB1FdS24P19rgWSQJssVkuJh6tMdMh11fJCNfVXXq67",
  "key27": "3ShS3JgQNJhH4iuBz1AAgabjiJ3n7NRZ4fX2mAgjkKsyubd3Y39KC4MsHmHv7NqzYa6QoQ84pH5e9HhPUrUac2NY",
  "key28": "5ddDt2d5Hpcp91aD4cwiEGPEzMk9WReDpCD7RRvsHD4Shk3sxLu4EmzCBLf6darywRkFrrifb64x8VDkjS81rinr",
  "key29": "5S1EdVgtSou8Q9MapcQVqbDaBSQPPMrnnaRqqDMWwogTNWNXGR5BPZTedvMtFdDZEgcPChUyHTo44BHQS282F4eX",
  "key30": "5933H45yN4meTQwQvGaLLYGrJ9pV3XXDuDWKZtx9mUQgsSbpzA8zxr4SqRU2fW6oV9jD4ZZMJLyczNVTnmJGpGLF",
  "key31": "5JsHBEMFuezPWmM1ZotvTdoUjeMseidU4bETxR83R7qPEGoTzPhuiesu5bv3SS99atGZX8tTEwPNTBXLzv5VwpHe",
  "key32": "fuVDuvyPSUXAtoNXncpcGSsWGocYZ4smTo744qciao6XDmWjAABLjr8zc6X583vpoRFwyJYHceLZyDULSvasVXE",
  "key33": "3pwKHnWkQScU1Uno7o1vD3e61Rxhd2bJZ8Mf659PiZs9NXEkxA3kE6EAnNyAkwsCMgDhXWcJJ722tqfveaW6fDZz",
  "key34": "3cd7Yb2uxRkq1izXaXfdRFbbypWLdzTf4jqQpQM2tVhhwzf2ihKDAa558xMvj8YikcNhHAKAjCqkZoosnufHMsQQ",
  "key35": "3VeDpsTSXdRuVmmybBjxZMxV3LHjaS68t4r35PCEJTLzWMuNTDkuX5reBAkqsdCmNLdL82a216t7tT8ar4wwaayu",
  "key36": "4FtGQCoezq551GspAdWgFuV4JVhFDRrRxhTAZezcdadk4bGTBfaCpZKgQuyGmnooyJERfd17ktn5TDyEDo5zue5Z",
  "key37": "4Aq2DfpXy8NbhzTwkVdwWQ6shYVCmHkAeXqBQFNH4F5jJRfkVr2SYWVwcptKPKAJ8DHsKzZLfAMRxFUFtcu93mNo"
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
