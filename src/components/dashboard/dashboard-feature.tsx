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
    "62x8NdrwN86XjtAUEQcP1RRE5B6WjU34QaC8qFBKZMz9VfXCVNDYjBoXikJgUWtfbeCCgCjTRH63t3yhmWSVMba7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ZbiCKzFJb82VSmJsoqPDtN8HXgGVDf5qaTHhS9Pd1qJdz9ZSaZxiw7rGpCsnv4UXaUWNwstTcijS7GtPELktQ6A",
  "key1": "3nEt7bNjRmKmr9w9yQ4QQ96DFEnuroRCrBhcQAH1DEdr3DpXVUVurPNfRKywLV1RhMfR4gf7SoDFYF16qjWQoJqM",
  "key2": "HNmPKS96DjJuAe1e4u4Kqf3bkU6Bhg11FgHV9qjBgSQg5t6SWAQ2GiSA4VpaFYNYjqTbNGPYskHbMmWyMyU8xJA",
  "key3": "2s3ABQuDSsrN1bg7XvZDMatpo7gWxyJbctvE3oHg8K1LV4d964ztdzA2gZDh2fspa4kPfUXCQ65BwmtCsewjiAWw",
  "key4": "4miEHQGxS3GnzMejKg8SRYp9uuGxfAXayALR554bejobHhy7NV8uWW6Z8UD55jrBBsNE9BSAnWo5MeZSEZp3rZtk",
  "key5": "2fr2EzKCkC3fsrAVoNn3qUJLAVeVpsX7gUTvLY2EEjV3KznvWJKdygG5E8XFHQnyDj7J9yGY6LpoJ8wci3CmY2qn",
  "key6": "5GEpZkTtcBPsgWpN8KYvgNCgaNW8RA3HjSu4SMjhW9tqTK1QTxZU9VAvNkKeVrARzT3gp3p47b9hJ6PPrhCihpya",
  "key7": "Kp7GW6xDP4TY4zQqWXFeBob2LxjLjNhmGi3JkrsLnwKnTDWJfcWJLHrvim92HSavzUSykAB8voSBTtpc2YsRFYS",
  "key8": "ZQDTh79KgqQWrnGaThZhQ1pPxaxfxvxJN4pRktvAQ9z7kfPjX2New4GKb6ReAdvNpkBTaQ5o8xfjjT4qFu8q9FB",
  "key9": "28xgkCCLRpbonqwvzx84L87fs7tSoQF7PZzzTUWxdVQuycC3wzZ8iAJsQpiGYWRVYV3WEKavxHuB8Veap9LBgDQq",
  "key10": "33Q8y1EiVzTurxD3PQ8fvKQ1L8XpyHHZQ2zF3T6Dto1G9hs9Xm5y64rEgNoXBdgq83Zz9gWtjii82yvTHKuadwWH",
  "key11": "5Z3BgZMbDNWC4HbJ5HBR9VtqYDcxR9jACmxinoKTb98ZjEyaDWE9HMpxuHdrmxuwcxCXGZmrVWUbK7vGvHCbi9kd",
  "key12": "5JdtwJkuyNmkFbqG8dpgQ86gJESNR1MZMFmCaHQWmUxKvTVjWSmcq8VF5RBBrcPmAwVwU9VYihQBF5SSnny3SBtR",
  "key13": "5XchCesAQdzY72bJqtrysnLvLxJ1nxhK7adPkA1qt1HrcZsML5yZS9couZtXQCXwDj43vNUSCVqBTvfHmu25u9up",
  "key14": "2XV1JajBTuRVkNmuzZHxcvFduFgSYFzydHr8tgZC1UzqnNUPixzgUjwxeeMP9FZsboZYche8iDx6NrhWGdRhSPGH",
  "key15": "2TPpkyH7cEeqbH32cZiF3V4sxufzFmpEzX1S48ygAS9VSpvdFBBQbYSF3DwePbdcgNL24fwe7JLVhTqPTKoC2sw7",
  "key16": "4y4M5FPDE5UKpgtHjj375d5puLt8u5gMfYAnmB7qBfxdd8UUTxFkQBDKkaGwhkHHiCfg8iReA6jkPsXUWNLghPcP",
  "key17": "629C2PeriL9G95DNoD8Zqtd416cARZB5ET9XkxpgWeMCNJaPKHgnRnJPPyZTBoc1k5FTsUi7sFhFABg8vZna1kiN",
  "key18": "4XPUBM2oKt5e8BkWFWcC5dEMCcR81BPyYVTAHP1Lre52rfhfmiF6kvpQPLvMrNh9Z4WWGuUEYmQcGV9g8yAUQnhH",
  "key19": "4HzerA7MkwKMD5AS2gJLpU5E1mDdtxUnvgHgLoAXZq4NTLvD3zrZv8RDMgzEtq4eWhhrtzwvqaHD53mUCVH7QQij",
  "key20": "EQzMkvcjoiWpR72tgXZHUeEfv9hqxUNVQ7rkKhKFaLn2aEyzve97XyVz5UjrTkiBKSsaEERVStt2AXpexgWmop8",
  "key21": "4VbFg9ZeP7gAkxSJXybbpuConrRaeTnoZrTMWKGp3W8NiDTMg7zXPAfEWb5HRJqVgyV1i2SLfrCSmeFd5aQuhB5m",
  "key22": "2YBox8fz3eoW2BgrKRBvJuq3b5BWDmqxaL6TD5facHgttS3jG54B9WkEb7K4ifQtrBFjFXAUudWWvUtMhxg5s5ed",
  "key23": "3M5Qgz62iUVA7hKzx2T79Xv29Pq65d63qVrELvLzjrZsDUkrhEschMogMaEGZVHeohNaEsdoCymRFm5ne6hgSqns",
  "key24": "2RnyitWuog6WvKKXuHVU1PC5M21mMuEurdjp3Z54mkV2DbdcyZyavonnLAUP55SixBMTQrGXR93VeaGCrKENyMGK",
  "key25": "3GjsN55MHJ83fZkvPUx8tmDoRSZEQCfd1mZbUDXivpBA1sXCrKy2KrnVrysvfz2K1xMSTGaGuk1uqFTiM9HdSiaG",
  "key26": "4LMMi1btZ8nZ9QyEyV1JMvUuasMSP9CUFi28fuDKtXm9Ucd5yA8nem6FfLeZddWffZ5eCpcPFHGHgEFDxrgyLZJG",
  "key27": "2v6yZYJbmFPjqE6dzXmjparcmBrrvWbUnPmWceS7DfD6YKWdTG4iaFGd47bo8LBkieSZ5znLCakArLNLxuAoAoxP",
  "key28": "4QKMyyCVMcRpJLXkKkNpH4iPXJHzoaB2GG7RmATvoUuMmPWaL4CBx8CJL3mD1HWoyYDF6gaLJtAg5Y8bJqRYzmAz",
  "key29": "uyV9yRKc7PNMpqXs2VaYQx5p1FAuX759gfrEbJQq1UsVwzpi4t9euHEMhwdYajBj4KHxCYZW42Lz4tHvzmtbEgT",
  "key30": "4zyWa73D8gYbnQXQz8bFvpah7uGirQweuKBt9LXGKw8kkfRSeeMxQ2r3UepESAtLNRWRDBaJRRTifnFWM8VSjZC6",
  "key31": "3YVLzp5iv5Bj7u21USJn9zKRwhE6mXToxHTjeVYuxLvmF9Qse2zpGhjnXekoGHzcPnH8vLTWPUnaMTmfmK4CXZ9c",
  "key32": "cj6bsqzfL2VWGRGnq75MT5mG7jKLSdarg1wvQMgxo6HskT3bhcQYE6R2gan2oB13L36yHAScS8RQU3NDWfWSf8z",
  "key33": "3FVJFjTkEgT6WVanHJj2pYW59DYnTqdbN2UQrRu1odm5abyviRw7MtQYjMMz8QHAdcHmehwYe1H6bVfDkMQn5BZp",
  "key34": "2YffzGAvQ22oY7STSXutKa9JC6jNVPTemzziKDz6XyTKorwveHiTDyswBT2sFGAwzriEVbcvXTNCCs3oaJSfjdtT",
  "key35": "2ENUUPRAe2rTvb4RxQdhErGnNoj2ASrS71opwKWfZbNeSPvayraCag1AavM8GwZnSEaWXG3CGrzQrUH9i4vXuyh9",
  "key36": "dG6KLCTuqb9YcgQ5174nASQdswxswwYW81jMPgPFDt5RzRPXn9NPkCmG1rZnSA3PDo9dxqJX5pbRszF1AvJpRoH",
  "key37": "2QcGLeUtNzZdXEnXMtQhRMrzcQcpSAcMttXAiPA11pA8Vcy223MWhEJ9Wt8CmkeMyCXb2q4hNLwv39KuZEGJ4KX2"
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
