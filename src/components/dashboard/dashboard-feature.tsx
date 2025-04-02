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
    "2BhRtNzu8xvbn5k2fydroZiu24HFoc5MUTNScjaTLvD5t2qBPJmCS4cicncyjLTLZ7V8o6TGdxucNPBw9uko167m"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5e9uQgTj7zVu98PNszLASuLgL4JxjYpcLJvfr8MJTg8N16x4tCH2vJZiXmv7scDbdfSgaHbyjG4CrHcZpRrrGWiz",
  "key1": "39NtQXJfFADfV7a8b2QpPNJfgrhBGKTphTUSFtGtAix8W2sH7D4eH466ftwXuwo6YFysjeu38DRQbmTpF1m8ZpBu",
  "key2": "28cCJuwFXv5GtRmEefoL3W72LJRVFcyyBNyHkYKR53SqcEqri8CmHLbPHcyjpZYCL6i9oXMiDLh3vSTpexmmBZ8K",
  "key3": "5GiGkFA7ViMoLWgVsz4sKt54vHq5K4RFHtm12VRW5jXbFRFLUMCXmHhiUVqkt5eQfV41BFJCZAE16ujqRjcWgEkW",
  "key4": "48Stu41Xai6WcZq1ShhBwD4HMdn4CKvciKVxuGHruUwUmBvo3qm4xjqhnkeysnF17ceV4tSdJkDj9CXTnJD8a51F",
  "key5": "3ZwUNhsaf6krMSGSX4kdu95r4b3atSVA4Y5e2zN4spgar2yze1NXe1G7bn6Vneq1x2DhSPo9XzvXJZ5XD4i4wNqz",
  "key6": "5h7iYcqEfBYedDS6pB6vGcJa4chqxXExBn4Mpi1A2kZYLmZxyw1aPRoW65EnwW5BHRvXBYw7u1mGyxe374UE9Kc3",
  "key7": "4NSMKAbzxXLP2RVWofqeuKijmMZQeYJK4CezTNuXtuGyymF3Q2wA4zT2ruL3ncT7RAyMKSkcjj1hPQWu1wYz914D",
  "key8": "5SonUyAC9LREza8hwWQ1YXq8pqAxJk7CwUPRzRF7Kt2f3HprbyQVwezQmSExrbWbWUH5taZoLJnbHg5DHHmzJ2oN",
  "key9": "4wfnDDDyCd1nPqrMuJNXS6MyjqMVp3kTuMAwsMqwEwVTmAAz1kCpgcxWKC1wF27Li4FpGjogJSKYCeZXM22MfR2W",
  "key10": "53MeBD6AzbbPp2uR4AYJGn2UDjqJZw5CwMnwCqw8zXBkoaPXXtZaJeqzwoDejH3PAozttWXsCtAohicmGTeQAiqT",
  "key11": "4As6LJn2Ex6dJ6wyMHHMvojbRppowJn8GPJa7LsK5Jn96JrhbnYKAXsE7evvWjuf2KPhXx7ZoufoJDgh4YPBoC5v",
  "key12": "5veAJTuCxu64eujiHuG557JMVEmGEDVGoskk8yiEWuCudbdnbDN7HBCPSVinmGxxBstRULXS1ARYQEmnaF6qf9mp",
  "key13": "2YDnjRpwTT7ivNutr1n4QqjgcCD3Br6UqaksRVNdSjx6gNVJvf6Tid4qpiqdNN2ZLkVAabmkPGZZ4bViBByKCxYz",
  "key14": "AXjvRFiwNSnnKD6sZBuCG3wPxRibMriv2yiotJJUBY6HEvqutEK7UyXZbVAGkUeCHfVnMArZA7oxpEe7Wc9KQ5d",
  "key15": "5gPonBXrmrQVWwRgX1d97kxcwCAezW8Fnhkyx1zbDtrnvzpeK5RZWhya2FMr9vRvFxJLBZbqAjFXkGi8YfXJ8VHy",
  "key16": "4qGeybd9zKDMaJVbhoNBz41wN6KiDkZKzYoRJja4QN3a5oDZNtXjfEebKyw7d11fn7N26KHJSgchJvz2zzGQhTYn",
  "key17": "32MHLZPM7ZBBxCY3YyuWbvWLHydjNZPKG1gYLQJc2iiZPUJDAc3qkfQd4keHevXwV9Tj44W2PZWyjj4r16khtp3S",
  "key18": "4bqUmNBti7CdyhKuuYVPGuTXwYPHPLgFmBJnjzQBXDCFXqe2PbJ9hWYExuamHaRamm8KYY9seCZ4gKnuzKjetgzk",
  "key19": "5xGmAshqfbunhtebr3BWrd5AvdgjAJQoo3hddhAaEXpz6mcFbYh89PNW6GwQHva8e3XTF8vK2RAfuVZUTDivBM45",
  "key20": "3jz4MpDGbSDrttnQqECVBjWLaizAA14oMYJX4bgqpinx1br4q3KfqJSsZgwWEPvWWHkkfqEGhVKAt4r7D9QUqyix",
  "key21": "4uV9QZzdvHiTLMJ6KBnF9FYN1UMQTdQTL3rHYeLU1KDyXLG2KjPvDDWUbHPZnMFaZYixZSN3jfdaLgCRpMTMjVSG",
  "key22": "34hJjbheV1eNfmQPuDwQC1H96m1VQEoEACAh5bMnLnLAVypWao2RGtDZQ12YXqkybhSvQD1pNqTAXAd5X4zRvLRB",
  "key23": "3qxzEyCawn2RaxU957wnUi6CyXhkzGE34td53q1VrJx4iDJK4CGC4tfsdwz69fQnLKWZQc1hzx8E6okJpy8Jhezk",
  "key24": "23jjiaY1mDiHipTNALK9FutGse8YUf3Xq71aQUfGgReM1GEq3b1j6W87awTHW4zWZuz1G8Kk1nBHVvUKiHa9SDAY",
  "key25": "qG6GzAaW3nV3g97mDnzLBgffDT23aiN2izzWYB1eUjUUpFkytLx9Tvyy8ctdWfwpDkd3PKQkL6r6VBmXexh2AR9",
  "key26": "5eAbGFkuR2Ta3xJj1VR2xoooQz36fatvPdjUL6ekNy2Ytoawx48Lxf1mXePqXf4XDGN8dh8pjs3WPpet1iK4ZDx6",
  "key27": "C2Wd1oH26xpZHrP5jCHcJ3mqwiMYaMbBmGWEaHXYJb4xGMbx6UH1zGpZcST4FLY6Qq642dmzM8DVBwQshM8MRKM",
  "key28": "b14V2Xn2rjvwn6hYpbD86hiWZV2VLdbtp98CiiWX7cK1jbosxKRpGLKoPiABVmzSmSkxNVguDXCxjWAbWu9t9cG",
  "key29": "Jxsrj2WJu6e3JZi3eiHjAGvqGcp2W3SrNsjy2MWNEjoGh2dDH7UcrMeBLkgHKgz3Jcc2mbgeb8Rxc6UHmxShmPx",
  "key30": "jLpDRXVeyjrKsrwmdnY6muxBWMde2rG7pxr3cRaCsAcD1uNKj6zJBDzQDnDyBUwidk9SnMMnzkCxBrGFThTcawn",
  "key31": "2YEfaQW4fpNzA1MXqy4X9w8f96q4aQ4AV7xTbNm2kPDZPS96MkaijewxmWesf289E991mbGYXhyJWakE8ZsLFdpC",
  "key32": "3Q9Hf8wt6isi4mmuWVQYLn4AUbpY5MuLNw6wUDYRHRFqzJDvNCDfY65rY8JTJor8Bb1J63YHsG3ZkeYm4pj9L2VK"
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
