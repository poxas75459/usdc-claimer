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
    "5tcxhRs6mg6Yf3Ay6NZKjayrXJLehb3HgotNRNG1iXfHuYe5a7EynvKZ3vHRfLGVy7nBcQixRqo9Zwv5PyDaQ4aa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32N4qp4W8qypx9S6RKT3RMEXW8xdbzoVfBZYYe1FW3dWuV9KJkiX9MJ35K9DHbxEj9YPrwnZK7iCaM61d9Fz4DDW",
  "key1": "5FtrJhV91VNib6smM75ie4dH2cw9hXHE2GeYoktkYPxMV5GACFjhnJcvxb7wXLZnyAmNqHVJN2BnAf28kn1WgtUT",
  "key2": "3s5JvQ4cBeYW7G5YeF5AUB1S74d2mmoP9nFLtGBRmhHQ7JoobZGcFKnf1UG9QtjBdQkwAokqH8QLvpY9Bgz4ueFZ",
  "key3": "4XpCbzHdMwWKpv6Dqr319uMadRNrNxvBCYTz3ZUWHY7GkosGhypBYakME12A3G3aRFuvs3mB8n39NeRz85XU7DcW",
  "key4": "2Mn35QBt5v89RwjRFXzCmEdS4tk4L4z5DTqCiqzPeGS9ybcSNYQQ39VnCB2j9TaCw3szWHvAEkeyUip4R1kmgdLc",
  "key5": "4VjyhUHjAZ51YuWLhVDedWHyjLeQZHSfhpAXxpZD4khmB8LSHGwy5pDJk6smeuvYUHZx8QehTsNhBQifwNnxaqcy",
  "key6": "31veBH7pJbpxU5EPfH2sVKM2iktj7RAh2QaQHXpH3zxcsg1EKGLyEEWGE6QNfZQJS1Wtk21qjquTLfy2xed6NdBG",
  "key7": "2ejA3fKywFVk5QBZ2s1xYo2dsFC1MTT48juJvNdjSDPFVjuRxnBWzQ8RSg9n3RaoKD3R7sVhswEDTyJ7tNJhWmHz",
  "key8": "2w6rpwQ1CqK2DG3ezSzfYtBRvBew7jab99ML4f8gipdGX9Nas4UNae6wCTmDhdtDqUsuMVjpbfxZvQui4DFAWqqb",
  "key9": "4vReancgCaeG2sQqbAt7SjKpZtPmWdPF7mpY5GWPEsNGfTf1E2wVXbmkFv4119KDpauUzS3pJTZd8g37MXmdnEeT",
  "key10": "Uqftyd5x2dFkUqaXnYV2FGX2QXpgBF8HvTEFGFnJVJh4afpzbVi7w4qnnrrXAXbivsTKwcXQCWctQii78tqezdZ",
  "key11": "2gDyV8kg2MvXk9xQwjFMPJMVF53dAvsC3GYsLEYv19GFVmCuU4buA2R59rLguPFJrsdJcSMP7DVoNQNVs8KC7f9J",
  "key12": "2hcv21Xe8xWWVoNgDunMpoBcsd2YpSftXF2ppvZNnxZqUmsuw4SUNAuMTzJ6pr43V6UYaNZf45ajyFiHMfSuM7im",
  "key13": "4djAqoqkmREY3mwwR2CwpfmJtxU63Ts5HzTZ1MQZNXy88pMpyT44sYh4r5282NdykqsqAxanhfS1sUpPzyUMn28u",
  "key14": "3N7h5yQkfSYDgUjepZ3PThBz46vJwXi3BULAw7AjVnjBpYEdkKUZJdJKoJ7vKzdMUGgkraPHFfg8PM5PGkq8AHVq",
  "key15": "4bfrFtCywCbaNnAxYo4FXBGivLkD5wRiGBSfHwdKEBpYZxiGMU4Veq8i5QWNyhh2xUE8uFKeR63QMj7P8bzrN1u6",
  "key16": "4RTBTSqcwTRFCbFKXqdGNbp6ZzzP4Cmak9sNPjHoq6c4LABFzZjpcK3ixdzevpUvkdTAxGMTTgh4AdKk3LHHcAra",
  "key17": "4cE8Xe6eEeX9BXHt5spTqkHmqCwNUzLz8tSS3RvkchgCMkRcVjz4op9ALgzqNtwYBDBeM8zKYjziay4DTDkYnL7b",
  "key18": "5FM6XDhQ1NsjJfhZGhtJRTNibuS6QVbhdGSa22i1bhM89itWSLj8SSnoRhXSfg1aujWFqSbGSZUfzc68euR3rmNE",
  "key19": "25nWv3qaaptwv1GdwSgvYQKEXFyBaNEJBrhiSmmzSWCCuhzrUMjxZgnN5yeVjzPVZTLnYASMSov48dSwW7wwthik",
  "key20": "5PySQqc7RJQ4jqwqyaiPzpXLUqUnsQkUhSnrH4nMR6tpo5kEyYTmduhkCBx3vggXNHFMcZ7K675rjnuaysMnGXA5",
  "key21": "625ZckHQ16rhFm5a3vKTe4yYwoB3qbNxU9HGJPKPzyKEApaRrmuau9L7UGkCnnVX25tvEagXNafqZxECPCLLwBQV",
  "key22": "2UE3RYhMns6vhkzNVaiDLXM5bjKfgSMYrHJ96BKtWhNNzRVkKPhZoTDb3Fa1nX6e6aJKkTFRdAwMCnLpZszFjrqR",
  "key23": "5mbBwKAynrSWSjCieuYJhAUcUJgNpNEeqX7kLVTKXhaqoQrNoMtSfN9SeGrPFpbfymvSMbLWDe6ePKsB9FQ29e2R",
  "key24": "5nf9eHUgTvh2HqdFzsArboN8zhErhfJa9UCQRHFQgqHoRqw5B7TBuHHZHUgMiAG8ZYSVCoD48q2mtka1BDnfrLkk",
  "key25": "6pNos7HpWvjfZGcmrLJLo5iFa92Ybx79zX1bgd2j6vFY9ir7YsE5bmhA3Wafe8576nsDnzozcPkprKV9qpPGVnw",
  "key26": "41ybgoPvb8rdJfxbQ775V3MKLVnEPXqruMNAUJGTWdH8QGc37zJTyK2FwH18N94nW7s12m8ko3e1fdt5RoSsNXGs",
  "key27": "56bwhVmAEcrmkvYJzq98y36TE79i9toLe12BFoMZt3R3uB9mqrq7KXutPKrSJTvF2pxwrA6qfsFMYa2VB7cwjjgb",
  "key28": "4EW9EfxuniryUGeP6bcu9zunay9PSLkNUdYAuedGS8EnPCD9VA4DtiLjx1m3JFKq7Zs7zihYy6vyYkpfgpoxtPAe",
  "key29": "4i31oRc2nnmyRXXJFPxQgrtxBFQiDfZXMZXUD3N6ajN6FV4X2xyUvDbXPy6un8oZiwLCw1gJKVniTQWVKCMxU8Wu",
  "key30": "3ybdTqBCxj6nK6pjraBZfZ3quxV5eEgkmhpgdjULipYDsZuK3HzZ1gcH4tWpZwX5JFBLgMBjxfjG6wAoQUGQugUQ",
  "key31": "JAeLv8FPyKmbM3rmUc3SFRG7WbFCD7QAvU9BM8EMZSg8QRe4XsvoWxSNCm7PT4cKjd857JgyVUQ5KnL8xVHegKi",
  "key32": "4WYR6YiwB19EGMkN3mfnkwwBDHNpMrsryHGHWuzThUqTypAGRnAYQKK7YAisPx8DA2CsBdDNRaXTDDEXEQki16pe",
  "key33": "C3kDXF8oHEum1hQ5QjQGNPzpjqb6Gt4xXtd1xq86PM413hX7onQAdRHFrL8zNsT7cf3DKFLKhSFVTFHu9GpgMt2",
  "key34": "3AUc23VHWrfSrVBasx8i5JxkkUESh6RM8mNKLJBi1z3o8wVYoxsnuZhPAKvWXmBPJhbQPTnQeTmMrf3zdrVpRsp2",
  "key35": "5s56Pw7S13sSdjwqu428g2jYCaotfKMTyZxdTQdzFGFRvMMirRuxDWAZkJraEZcfEzNgQyubCpn8QCPENH1LNFtJ",
  "key36": "2f1g4r1b8RFL8nuPz6wzHvEK36RAxRNwstVSDPt7dkk648BzR8MH4zZaCUoMAi3aA8eq97abxtEH1Dr32vBaUNba",
  "key37": "548TRnEEVNDkrRn5eaHDNaeaMeFi6mYuGXMSzZb6VQhVsouwppBRJFTfcLMJ5j7iNT22pJKf6Lf9sv5crj6YB9tH",
  "key38": "BzDbsYoV51Nkrm3Ycnfq8Lt47xnQ4gEUqEtddskgPgsEw3FZCFScUw6rY4wCiRErdij9GXVvCe1PGKHTBkv9ZLN",
  "key39": "3gnEj2yrknoQz4ERzzf83ZCQZzdtgQfuRWBfMNeo1cNbLSh5Xf72KXkvrxjzz37iq2G3QJRMnTRkibVxEKSxYBAv",
  "key40": "2ui2MkebdTKasyUiE8aronKLeFtczQ8BHmfS3oKEpkjuVWAh1Soeb51vNjMrhywrEec51PBQC1gWRVHNMsUjdNc8",
  "key41": "ZoZhZtWa6BHugKdSJ8fzThit9R7isApsaQbSLtbw1yVc7hjpCdLsMgJmErQpEqWWjTcjKy8DvtcYQDibUC9SuPt",
  "key42": "48EFEafhAUDEEd2rNxtTM3Z3i7xqtck3yeLWzCbhfzmyCWjBcxPcnYM6aJTUrHC962bvQCqEjic9kEy4YGoAeSck",
  "key43": "63uUyUcjwBwovS5hgqGYkB2MRo2S3UR6fGVafdL5aFotaMFr23cm5KNVHwRqpPDyEe4KpLg3TqZoQv8zFztFMwZE",
  "key44": "JhCcBL72twVpMkGg6f5hMtSEUPcY4v1FPc3DGNRS5fGe4yuSgK5mWta9a2N8DoCKnPtVdjHkY52dUsbrxaDXuB7",
  "key45": "4r1F67tA1HrW4LAgGMfpXCBsJdZR2HJmuvRDvWHQDYdFZJNNk9zkVjY71xi9mVr6SnhfVSVxtSVqjWLfpb7Lh9Em",
  "key46": "3zrjs1vsycLJNEuRPkVnDJfkFKzVAtcTjK2afjXNpEMECQZARa8d3fGL23M3VPsVnftd9vf2BAHUfZv6uN6uXCFV",
  "key47": "3GGF2MRFxZQxfRQh2izRiUYvy8Umwk8qEFq8aVU4oTLSEj4MjZuXFBFG5RfD5qxP59v1ra5WVM7iFiTQpxf7MdPD",
  "key48": "3Gn8Y9pgNMB5eEDdQ8PHAnp3un2wPXohLNLtvgTHF8tdnVYzWEGATCmR3qPCgURKAC2GwprqLQSEtGpSNHPg3upp",
  "key49": "2qQyHb4psifreDAVEZE7EjgfbsjmgeaKB5HaxjDFfei2EXUVrmfGaXgdRN1xqN6h8DVJ7p3nnp4CYQTt9195DxAG"
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
