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
    "24NVa3JYRnziJ8LykJ3DZeLzdzhVQUT5R8QE8xpBduDveFik6JgfFdFJ6mhHMfgFySbWgCSJUcT51orGett1uRvH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "oV4VSdAAh4nGhqbqwAYkY83XfGkcXtXs4p5Fgepd3aW1oYV4MsgjWbzL8iFugMghbVxMEWR3GoHp3HBnuks6kn7",
  "key1": "5HW6sadEpgboJybA6D4MysmbeZcirETU75nspXAvEkX7GZ6dEpe2V23DUX9RZPZc8Qn7DqHYAJuXu7tixrXr7Psb",
  "key2": "31KDRK5xyMhS6KwuMTsSEmciqGXX7i7USyywPFeMNMxZQ4TyRykNyqLkYBMHyEeh7MvRwBdgWfBUAiqiXJN9F74s",
  "key3": "5bgyXVWhwgVsDAVU5WVgSJLvSD2SfhVfy5Gn1iWiH6eAP5YfrvuBETLGkRYxm9z2oexkQ76tmP6rHzJ6dBKMUGVb",
  "key4": "3yRA2KQGSC6Xg9xMWin2vjT51nBHfZLYk4usQaCHnxvPVwttKNLhX2zKudWJMGDEc1WRfweJAvmXbcLU7hUMm8pL",
  "key5": "2gp7GK4AeoDzbG136FY6q6pxjNuh38iy54H5FWNp9p5WKKMkYDEXSUieNsgsKvqrz8cVhhfPXvKks2oceLZpwFwC",
  "key6": "2kJMiJfmmKa6guD3tTPcJxjELwMzpFSdh6H5aD8jvt6VGf7RTLf8Y8VQ5g28S89u73irhHEQhfsc5uCMQC3zgUiR",
  "key7": "3wfjhhHkiLBhC6STxSzEDJCEw54setqHwpniYHvtU4f4QfnQNLrHSGr5ZAMUbCmPFJ5mQdTKd7mG1SvKEkCSQjTP",
  "key8": "3cNfR6c2bbWLdLkVrq6MP1cfLpnTcLf2pwHBJnqMAmB63KpNHhABR2VMtvUEfwruSwwEZVk41sztxMisuH3UpmVE",
  "key9": "JBpzjAzRLc4uqEPfUHKYLVj2Yj2fjzd13u7CkdrNfFyxxcPVBTjYYdvXc758hdixMim7sbpYY23okykwNqQ9UdB",
  "key10": "yRivivgMtqM272z4ZDzRdhBTaFykqeDaAAgWTknPZZBi9R2R2Rno7bz9ipWL7WEGp2vM3K7VZmwbcPYtd5wyULB",
  "key11": "5DM9vvtsm1kfEyXcxhq25RZQZ6xHkRLbaYLWh1Av3BgKvRm36QfELguNjCjShdgMZhpmgDgGpq15tmvj2G4bdioc",
  "key12": "4UPtpMF4BbJnq9vL3mZan24XPdEFG13hnzoQuDG8YEgc5CLppRDPN87qnMrSZ9oa9jYBkPTwgFxGerf9rcewfQio",
  "key13": "6hcsFPGY6aJSgLtz1USWK8aUUKDRw72xznYqa8siiLgD32fKoWrMM8uekbKUc43KAt9S9ZexjKhZhkincK7VFoQ",
  "key14": "cVKc1ZwPrN3dLrrq3BPgc6gqbeCc1EptTNwhU3P4naWuMtFWHRN5q7rGh7HN86oNDWYHcfPjor74g8YU12K55Jr",
  "key15": "5oXFfpAktpAqG2ohTAqk7tf8kRqMkbdqfxbqfgMNjqFgJRbYWo4o8PkxJjmSEAVYDoy3hGpo5wtEfvSj4vUiRDHn",
  "key16": "2sGdsnhLwNVCezsSU32nd1R6CUy5KSiwUerMrF27P2969na48qqj63tdFPEgTtMvXpY9iw9HDfuHTYrh6pFqLNBu",
  "key17": "21SumWyqRTtJcuTMrzuo3Mw3DZGx3FmNSwgu9SvmxtBFcHjkmpREyJNvXajJyJnZ5oJBexx6zg41r2w2CoGT5DKi",
  "key18": "5tp2tq1kPiZQZhtsJMPRdcCjg8AajojEAmVzFYgsfumGVsJW38NcvkfYdh4PRQsWWMevY2xjPrT1KyZpUq9XV1NT",
  "key19": "4mST27Q4DxSr5nu7axSMtUTSQ7r8t1KxBAvqBBeb2MuEx6dR7QzSnchxPRLKQXhS3YUKojCPY9pwsiTLEwjm9rPK",
  "key20": "2UbPYmKkieJU6D7a16RdVYSo3j7hGQsmUCNZgH97SsqToahuSXBsoqyHEHbi3J6Sw8H2fFdfgRR9fvzHG8x9WS8B",
  "key21": "38bkksKLiEqeZKyGhU7vZb1PREFsDzTi1S2Vhgq8ceUtEx5QKQoZEK2ZbrvZwzKJodLHjwuSZewsdFgph9vzNg1u",
  "key22": "Sd1tHT7i7w2x6Ecnv6tWtjT7CEkd6LY2guGp6SVRiYveXeQwigfp7WHtL45Z6Ar1G3H1fuKGw2Cq7ZrBHeiV1iW",
  "key23": "2fttyxVaEokXwhoREYX1iozBMuSbYKwoKVfkLfmZFnnAnxwHJGoCYsYSz47ViqzbNE6UPEJ3DGjaTmP73VjiDWgA",
  "key24": "qccCH5kwcjTFY5S6eV7K94uHvo8py2usrp8ebGWEsTBxoS7HwpE6t36fW1Dt9YgMNntjcfLKMRJW1YnqpETmu99",
  "key25": "392YSAJi6JC8euyFLhQbTsLdMHUgvcxRMFVccNppA4YiCnFspHadYgwrnsTV5XdVvb9qZP4LQKKXXTn3891ZPpjf",
  "key26": "3DGDtmsEe8St2GBDiv3YqE7W5TuxfLNaJwg57bv31Jii5EhyXmmJ3B1HAzH7F1ober3DVib5uGuVgafP7edv8gsS",
  "key27": "2UJegxV8GPgd4apb3wa57sckmvHURWHUgq8sQMaYBWb8LzFEhSmA8g21guZV9qvjgPB4RXYk5WEFsoRTGb1bzAFW",
  "key28": "5GxVp3wTennQ2yoAkndRu7tRDDdT3Rq9vuPRh75shE3x34436ihKYQnrxE7yATGRHWNBWyEqd12FQ1NevVg81Ztb",
  "key29": "5ML44MhwFYoVKGR5M7EK7rXWX2jsqEMB8zFMe73nigg78vAE5RD7CZtkBivHVK749YHokTSur5b2huAq3xJQoPBx",
  "key30": "59kFbYJnAJxe678NZJJ7DfnN5cXeeY2GfB3AD9D2v8d2Z74ziazEHxGpUstnTTw4cJafCV7nm5uTZWYCgyNabWhf",
  "key31": "37cWwwZR1NtKRiYkEr9P84vQN3czVX8HRH4mGu67Ci5iDCixCKGF4YSFmXmVtZqYAJXBqhdVGJSu6RD9dkRoWWh4",
  "key32": "4xqHCELVK6QK3zB5UzFThC2F5k5zY7PTsHgWJhHJtDDWFPYsu1piVdhdcRFP3VVFXq7FrrnLqYyen7qr2kP1ecUG",
  "key33": "637rvronqL8H7hPNyGYaNZ7HpfysNasfrhHCvvD7EVXLB6NqSja4Qs1rFRuPuiEEx9b7eexNtBxEvRruaa1fkNok",
  "key34": "55WFzuojBMChAwT1fWDbmtNXyMAqrRx85SfSoYYL758s6gKoM3EZ8eebj5sArc4QePsfi4rxpPL1J6RkyACcB6EG",
  "key35": "3TDzjEnjdxYTnTPVvhv9VWq8hqaDWrksHRTapTkCEddGSKQCiRwTDa5a7uqkbrG4DQSC4ym7Krvn6krdGNWqeyks",
  "key36": "43Zyt3nUCEP1FAWXxduzyS1L2BhF99tXGbzxxNpFh3jF5tGQcWBw7Jsc5uxCN1jAorq1xhBU3XWVyv5LsiB6VAMa",
  "key37": "5BB4eWWkDFDYpGsHMuUbbe1gEfmoNQsReMMMXWsyYVNX17i5wPnjmCACvAKYAizbFgQsqb4gyFYaU4rmcYMNxm1W",
  "key38": "5iArjMTgj3mnYBFTSobC9KJEoYN3133d4R1zSKqJucQsd4rnPoHDtpwvCaDYaC3jUrPjcWwNhH1sm9wyv5tge2uS",
  "key39": "kgLZeMuTyZehBVoMdame4D36hjWfxxJjcihkR9HZk264ZPzQGywveEEEYv2tefTkHPMrbQc2v7p1M356KXiybK2",
  "key40": "obXtmGqGPu3XLW31WKVSrPwjWuFL2QidoMLrLv71MM3qFU8XdBUUt7bHDMay1nZoCvyVcr7C4UjoBr1U2BCX8ke",
  "key41": "3yA9PfYcNoBG8wuiGP91sZxFSzgUi7cHiY3ZcUXta7gHxM17LamFUGV8va55xhfo4MgVSw345AGiCJsQieCgWeer",
  "key42": "3jHBnRGmHDrMsP5WgYyU4GgvjRki6kMJbhFaLVpUZH3M6G9hwoziTV6tyB6wcwim6RCDjaMatSChsWnDZtUBTfDk",
  "key43": "3zzGMvnfEjioBSqcwXD2rYqsP5wESeHQTjapt3Qh5vuV93RnAbEBPPEEJHfBtL7jw1RjWh8X2pWZqpe4mmSHnXBg",
  "key44": "3gPBMWbyuiXb8U5rXU2RUdBvFF6uVbS1cxd5rhMtsoN23xuGRGaqUGGkN2gaARhx21SrvdWbbkWM72QtkpiKL7w1"
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
