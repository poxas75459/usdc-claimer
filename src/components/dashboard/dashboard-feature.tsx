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
    "2WvEf4kYJax8Y78sNKtrURgLL2DGr8RofaQTF7PiwkCF3qz4hhNFp3qKkshiZpUf4nSwLdqZLn6A8NNgUVPLHU9U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "TDcB2DVSeF8SxzZMCdwgifsqyWihJF5DzYBWbGmP13uojeK3HNoVRdNXNxn9FHhjp2v2NggZLJ4FAfnJvbfYGB6",
  "key1": "2mDEhodbZj22kW2e1nL2Fw5g7mxqeDEmLjj7Zr2Xt2zHK4UrHi2RDKhEu6nzh72b3Krmr9DqgA8Za5WK25FaNw8G",
  "key2": "3YTLgQqZKDcjcH2JqcD26ti9ZQUx3HrkPcCnpXiWkx6DSQmfNSFZWF5TP8dnUNVk6r1ExjG9MKPsDB5mSqG8xZpW",
  "key3": "5caU8Wj4oXpAMgoujUErG9i3as5TQQ7L2Q7sfYJfVxbS32fi5HjxYHBzAhwEdQFgP4pCVBUL86Y1sHP7PyKzrzV2",
  "key4": "4Uc3D8P49ou1xk6nDp6d2M8Hsd7A9pMEimD4WMnjNHo5iPRnf9BJEZ4RJScyWHyzxKzqx2zSS4QDUHe4SxyCDW85",
  "key5": "3Js82TKpE6crXF9bpoXw67hnFLwASWeQhRYYEBapoJ4fWwyZvTu3sg1f96NmfrjY1N4UdqGiMDsVbbncfiQ6Lr8Z",
  "key6": "53j6eJ87XFLuAmSPdZuE729UWydfayVDW9q2nAjckPCZXQx9ExHxUPkjSqYwSDqCGafXREDJCFMqeeLeurZuWMgH",
  "key7": "kzoWUNy1MsYf1Tu33zG78AUgwTngRG3st6731MLiW2cixaM7HKUZHW1xnWksVpfdJ1d5T1YcwdtjTbojVsBEesX",
  "key8": "YLtfuekoYd4b3tQptQyDqDfL2TCNVBtpGEvx4Dy3VXNrRS2fC3iVzZEkNDH2WVHx5AYpXLBWSooVc9R7HZizKFp",
  "key9": "62JPGDjeNXHHadgpft7QtRHstLpfnUQ4wueaTTwZFp84dTbYgSDUePXeA6yno2CNqANAmzUDUjUibq2Hx9AdGubN",
  "key10": "66ScLVSvYXXHsAZQzTpPnS5obBuQ3B9uehN1PTnU2RbcLMguQaKhAKMbcGYxwqcR3qmh7s8yZQaghpygyRn2JEq6",
  "key11": "4nnyerUUMEpvKuMpyb7GLN8r27PNxSGyAz6Zd9wsLby3kjNEmiUQqcCoaoMf38u9tRomr2iWWRZBC1kRsEHaEzyE",
  "key12": "5J4d6gDkPYQgeAuAZUauTkX99M4Hao3N9zpykBrZoyM2Fhru91YAbhHff36czoZeoRS9md7erDvB52Xb6JYWYVoE",
  "key13": "5kQ4oMS1ZWzQRRpsV86pQjhvgajHeq8gryJ4YtrNdMePoVqytEaRfrgBTuU3LXEVG5kHTKLxVT6pDpF8MJkv7HrP",
  "key14": "3wX7jQrnaatreHfE66woRHe9MDGR4Dv1xaTbLMDNDxBnYx2JRLp8peSyyyRe6DJuzibRTrtxnrGADJtkoKah3SYn",
  "key15": "2TdeNJn6F3G5VwFKqZdzXnF63tYprpmrmSyiiCDjPmKoj5N5isJq1jxxKopfQDgfymxUHPaNG9VXDzSZBgkKRWsz",
  "key16": "4m3JTs6v6fgBuT3URPqFyHhbjcZurCH7VzNteHzkLjfCPdeFpBweEf5LMda8GqhiV6qzyRy5vsV5gCWvhSjvz1et",
  "key17": "5Uwm5vVLJb1961wcE8QtgvfLibtUXRE6k2gXCsJ9QTHhppacsg8M5LT3uTUF1U5FZhFDCFdQnh8jtMnctHVpPPRU",
  "key18": "4zQR8sVo3T4VhTjN26BRkWpqoP5tkie2v8JNUwa2Sj3R936PZF3jJQy1zb6htwnv8Avdsh6FnodY6A6ZLixV4esq",
  "key19": "2nUrNMtPC9AyvY83CCa3BMZMGEwyxh36Wo1borZpnyirA3cHoAJHdjVtHT2pYLqJn7vLge1YvkieTXB8QWHNWFRJ",
  "key20": "5KvdauWBQ6PJRpT8ixem9rNMxyf6zxoVd9WqVLPzFS5hrd9dxspjsdkA3Af4obA42JB8hQC4PHWYMdJyx4ASTVsE",
  "key21": "4ntadvSWKMdsnC4h1TqZ5zpYYdrct3xLhLCMpfcSxgwTxdWt3XankneWniQUv5PJqfgTQfaswRVY8aQACbuc4C9x",
  "key22": "2uqhUYRmwfn7CcwcEZmdc5JaVPLPDWR4xzFCpTg7fLj85FuMucrAoYkYKVZRd8QzVePT3hbWjP5XDcjNM9otXybS",
  "key23": "5r5BjyoQHgKLtoQUZUXRQuKrVkWRA16Piatm4UbK1LTTGweqSg1NBviobNeHnQM9LTNQmgarrZ81mWCPTdPdHwVN",
  "key24": "2nMV6uMd2u1yG1RrH5DNi6qcg2K37G7NBmtU8fdsW5KcWTgBr8TAsbbeMMfTKvjYkHdj2FUo7urP34ZrEyv2q57w",
  "key25": "es1CLwD8pTVZybJ8GKAdqsPtftZo7x8GgQ5jkdBEm3qC6i2zX4KHUmUZjZPnTvemrgsKcDuzL9PLCRWLvRfR89W",
  "key26": "4xQq8WU153GD7WENuHztghr9AQSaqFJ2mCm2ZTDs4fSdDDBAXr9Zv9Fuqnoc2EAAxcx4BkrKRDkFS7LzDpWyb3fP",
  "key27": "2QJr66BhoEhk9qVwA7Ja4HPndSYyeteGr2H89MRswahwsqudNfyDKbdYbf4GiG4SFDK4TxH2qp8PnU14x9qiRyMD",
  "key28": "31qk7pKNkMwu9DoyKhbdXWSnHxy9TUvf46fiNPPw6UoMM7tQgtEbpZpin6SCeKcG76NjdhD1oGWERj4M34FgfFwW",
  "key29": "28jVLGjvicgMRXg3gSt9TBh3PywbUtafKnyLJhKKwiKjAdmauPBiYXc7yxSuf7ekHzRoyoVE9LnHFxRz6uQFvVvw",
  "key30": "3HHAN4vd1v3RJzNma2mhgPRphqf7sukDJXFeNSEig8siPYgFT9L4qyBAKAM6HobSNUd4XUSMKXJEFV5EVhYxmPLr",
  "key31": "4igyxoCPWNLypWQ263pQKGbCjZzBBSMcUABggn5Uoez86jV3qNhf1eNbBsZSR6pDCGrJ1cQgbZBLBr6CkKzZJsGi",
  "key32": "QzQ1JqG4NGn1qgL5pnLcieip6z4kZig274Mv6yMgUmJPx76sLLzAUEK9cKSYbmw7MNkE6KiJdNPtVymbALdhTku",
  "key33": "x2Y4NUSpGuNdSQ2V9sZWoWumhMwPUDiy5EGrj6PgoK5NjuwLB3Pyrm6TJ7pyYVwcUq3zvP8BGMa8q5xSi9qDftW",
  "key34": "3urhKonE3GPregzW73qmLVdBX5eNdV9QGdm2brjAzk8FpMzzWzpEFbEUZjin9TfjYF1s3cNvww2crekA423P7fz8",
  "key35": "3RGXuX9k4RY173kaRzawpnY8iJZsoPbyv64joE7n5PYzCAv5TrHEWK7R48VmS5W6Lo2Cv2QK6fYho4qPbyHE8T6c",
  "key36": "2qr31yDeafh5zBLGTiXZpGEGaRtvkccSi7uhHQKGYVANY2LnxuaK9o8BhLCaZrFV25Ry7QzscskkSvfZwxvCW3Ba",
  "key37": "5f6bJqLite7s5icHEeUEnSkufu4Xn4GU6wEi2yWjonvqRuEi9J2MvYJ7rchNtMfHnq9JXpWiS9EhWbd6xwvNugeQ"
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
