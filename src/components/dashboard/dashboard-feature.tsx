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
    "2EXXX1r8owgZSMJBemjt6cMXXiCRBsCYVmWkG7Ah8WkfndEfe6dRU8gMAzsVYxFea7iH7W4Pzeo7jJfuE4WxeVnd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24MXAf19Gi6k1Y1crXEqEEPE8ZkhPdmgCbqkKomMYwKAbZXWioQ4Nucta3XC31KTxqBWE687GzywUfXgdkax4gNW",
  "key1": "61Mhn6mm3tyL53pZ6YqeX7rAVDgcwoN9RaURaqjk4DY3APB7DskawS5GtpyVnZxQf79Ep2GDdsrnrtdQKgiEGXeN",
  "key2": "4GQBZJg71n7UeB7jBxEch7yYtq4FVz8wZEgCFJnPkfww4vVNhkFZnhcvDJhN49wKW1w7hCAZQngQmScHmBM1SXZU",
  "key3": "4xZjscCVN8Gj3AH8XGV6nPdVRbqqoLXnaXVQnpHAAac15r3YG5qL9cbYj2SUipQsbp2esgdtbT8aqVq2AxBaqpRx",
  "key4": "4c17zJ2657SEPSBD8LZJ6D4E2bzNDK3DNWnJcXJAmHA15MnMVVPwrzgHfjT3PF2F6hf2uDjWdgmbx3mRqTtyVjdC",
  "key5": "23FHmnNsPL84EqEqeqhFM9jt3U137PHF9H4E1xcwmBLoc853ctdJVGJydAqNYdsEuTNnku84Kf9FMcNEEFVzpBcv",
  "key6": "4PFxHCLt3VnDEQfTgF96bbnzGGBnwUcS9HPgiuEF4s2cHmG9GU3u8VTGhaRtgvhUDmRHtFgxsmTZgS67kwKpLWPH",
  "key7": "5UNaeLBrZbFo3pefXgy5H9McH9HUytBVdVWax9qMKxcZcxFmGCJKNkFJy4bcfxun2gVZwKAyF9abxkDBdoVvN97a",
  "key8": "5bCZG92aBTn7e3Z5FYArRmWxrpxwiaZgWE5UFD5QZNUHw49BP9UwNQST9u1tGzdZZemfPSrVcpa1PN3kScCLGvVP",
  "key9": "tRzugnpah1i1wG3eeftUEbbAygJ8vBLbvT7FQFGpmJBZPzbbbzXiGkf8BFNon2pozQgLjgVeUqipXSsgf1ydN4Q",
  "key10": "2eCEZZqT696AZnKAvB79E11XJ3a1viFD2KUu1EyodhYfXTnzBbF1dxDspUSkzBGj76eUTwNdEhJ1dw2m21mzm1kY",
  "key11": "MBuBhY4ZMxzsdJnYQdtLcmQ8f2cDVDBQ6hruwiBuLhtHBZM5EtDgjTt1eM37W1HxZ4d7NKrvJuJFXb5FqqXkj71",
  "key12": "5vKSGsxRqnJgXzSKe4xrCMyCQP7YVJ79nTeLsRrbi9WXjt1vWhWVw6KpHw12KD56Uze2vTkztJ8ehpASS6SUiboq",
  "key13": "5sVsbaep37borow2uJ7Paas15Zryv8SDvXZX2MhWhZqdtg3LEXxyWUaKbLQxCrz1tCQB8cA3s18RbQvNmr9hemeT",
  "key14": "5We9DRetoHPazWxXju6t9x4HfonEjvHJBhDCCxZsHXmXhPi9pp7G5H5ztuPF2EaMZUcNcWPuixKNYvSpeBKbp2bW",
  "key15": "5dfNy17UbBHph67jDKcrdp2Uf4ocZ6aeSTMNVGwFvZgUuL7LbXBxp4DcZX4gWuVFQUXKTaAsNogVfdzvjtZqfi5s",
  "key16": "286tZ2zWxm91GxDxat7DS9UMoeU8JQkN7GWbqoC9CetjVS2qZHnRDCdD1pftuWEN39MTKqLyfiDqck2AZmA775gi",
  "key17": "3qRm7jf8qWEqj8SSGiYL3cmcKjxNcpnBZB9yEtuJTZM9JinzAB4E4L9LSzK8k8DXWhM4gidBmqeSyTjd5JLfX37f",
  "key18": "2Dmx5E5UWfrffJpAS1xugY5SqGhRN43W79hnegC7AW9nUppk6ckU8XhCgSHcJdHcphpNpo1ag1qacgD1EpHAVQip",
  "key19": "4b266WKQbh3xm54v2Vkjh4dCbywJ37Tje1EyUyuUZWtCdAZMypYAewHwWQqJamsDMD6Pmvngg6rg68NfbPJRMgbJ",
  "key20": "3TNnLA5k5a8JsDCMBr9i7h7AUFya8YBBg8wiMKv2CreXVEFCmZ3Z2CEvdB8GWpdjf39XPu615rp8vihXPyVjLvbb",
  "key21": "JCpNdkMTxn8i17UdZ3Lq22wvCKrY4rrhDUiykpANmr6uWJSff7trnHsM4h4iyAU7ojVpJsT8mmyrmPArYn7vqzU",
  "key22": "2SrTd4CKLYHkGXwcd1tMReGGLjmqeSZtYf4iqAQZjnSBsaBdpTEJTJYHTEUfdNvYDfNj3rdHdDRnJZAosXC6n8pT",
  "key23": "5wpSsZywTvprH9jxzhhb7M3WTnzrjaj4uYrmLz889Lrbw9ZxiLV691pWjkc2DV43ARtd4HwhTGdJ8Andv1ztYU2D",
  "key24": "2o8LMSmzrZoVL7ENQDU79AaDwuFWaoQRkNKCm1B5xYgVqkPtBsLVXc1ZttBPDAnxE8591U5rGsswz2xGBMC1McKc",
  "key25": "3XBbQVKXEnGkdgrCiuQrXGao9pwau9TnLkSFUvxQPwwojUUDqQCueNzs3yNHooFSwmDE1GZPTX1PEUvKb7CkRh5W",
  "key26": "uYL2xxGSYofCxppGR2TG8DXSXdrMBSgUURyzAZzuNUYTgDsQyMcUHa1sJaaefjckKqLJYTsEtQxPLes4fuNDWKf",
  "key27": "2sDxtSNyLtE8hk5PaTHtaFUakEaWeXmQ7xW6MoHqaDYUcTFvYG9ULHkVyv6cmifFeYkes9DHoXcHY2wYtBvQfo86",
  "key28": "2Ahi9tULrFEubGuUNxE9V8PhyRkm1k6AirUhw4FmcCj98EVBqAScJhQMRu8za9SzcxMGQJxtFCS8cZaYoXv1mFsw",
  "key29": "Lqk5uMi15cZBS7fXxaZh5zSujJYC6zHRguKFYS15WwttGDevCx1kXUWmVxtCpk6ce9ZEVUxu93hdzvkiW9tivoB",
  "key30": "57FscZXgqzyBUZxthrchbRES23geRdBY5TTEdkrPVCfViebxCegpC39rVFdCh25okeFudqYeibnH62xYfvTW3ovP",
  "key31": "2N2VMCtigomwLThtDBB1XvFiTMgu17f5EmWJCPGzvW99Joets2zPPRd5BFfQMeLpqpvpsrDboAz9dW3c6p8eAHSu",
  "key32": "4BRhEDii1cSdhQJTdya1MfPaAFgfgqsTPaquF3ufbH57zbcb4N64Lgc9MjQYLL9RbgqxQjuLcjWdAteqmJyGwSuk",
  "key33": "5W9qNftHD7ZoPyz9HbRopybrQGwr1Cpu4MM52MWko2xY5Z3fnvet1FFjBi1vkAYZrnqS2ASkELWMGtZPu3ev1cGK",
  "key34": "9dwMF6yxnZB9aYwu7JUfgXEiyFQm9nfgyz9h3WT58tmeV3trXgPpQFZdcgP1Cy75L5HPFNpmL32hXn75ZCZ6AZ5",
  "key35": "2k4qU2PjUTMHspfZ4gzcJkDkUHQmB4zvqZLNqxitm3wnuowWALNQbueKyjrzR4ZVtDWwpEfK6wqPe6nCp7yJRAZG",
  "key36": "55DEJ1xFewG2yUmmjX1ivE4HdZr5CjA6CWrSQSBpe8riscpiKz2AyLCebxUh9fqbcY9pVjq8seWVk9GuchwmkDRL",
  "key37": "2st1uGcEMYWdv7YSStgmyFLWvhAjcKUJ3QE7fYQB6j4RAqLvnrcBoZRXFBYcok5fbTf65dAwnz52ePho65wsEVXJ",
  "key38": "4NvPhJPoghioH9PN5X28SQkGqByurywbFXcLFFA6js61UbyG2mPC1kjvBAjv19LwW7y1WcvGzxNDzhizhFkgMJo4",
  "key39": "5mmJvHrutCYRh8HaNMWJ9tXFpJ4zLkQRr3JNWPDAuptgenemt7eQ9i7eLg5PrwG6FbFpMSLPrUzNUkGekkj4sRaW",
  "key40": "5pmyq98EULm1qLh1GhGV3un4yHjWNgca2d3h7AqKfnKqXKruPMzmiNuVkJbzAy8gd33m6N94nC8EurEAboq5ikEA",
  "key41": "2ogfgJgmdng4B9nUX1aAaQJbQqFRo1EdfUf4HncpvrBmHdz67cSNxEo3cuhFLkq96Poh7nndgMfy6sYXAbJUtEM",
  "key42": "5A8SZDUUq51HU6pXW2nBCBsttZyanfC3EkM4rZ3Y28kEgNFyoarorzPQqmTpVU5yjGioKfUT7uyWpPQFeLX4Jegy",
  "key43": "282h7ZbuYcnVGUfbryMt6em9QNnysuNS5y5PvT25tG4QHqvx3pxrUBDE2tBWL4kmTKYEcuBvkEEJ8edCPPgaYfVT"
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
