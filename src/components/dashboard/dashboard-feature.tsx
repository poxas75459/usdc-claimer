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
    "3xMivPePJ2zHqDewbcDmwKAcgGDrqLkwzo4LCDyaazAazoTqiZJVnw1sKmNh6KAj1i8mHkFGnCrSUHbrHg5QoWk1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2EievL9C3hYwhPYKeQaHN1yLSQBkUfHcp2hyoEvR8CWyZj2H1VhFc9KLZpspfJ2rvQNrxHH9z4nuTMbkjvk4u6ZZ",
  "key1": "4LoDJRyY3zoUzJ4u2oxcnv6Gzqz9GLpKz3euWALwymxi46RJ7ok6HncYNP1fYWVgXSDA7SpbTm72YJ715n63Wfxr",
  "key2": "5esGcxfr9nF88Lcn1t31ngWHhuZbSgBDzBpod1XfeGRpQXkvz77aSjJTYppzTN7aGrBGZELck6NijgUUuSxrVc1y",
  "key3": "3WgTb99tRPLug6gvD3P77iLzuAgfWaj33RvuUATWZENYFrkKGusuCJg7quA75oyvgzooTJJQNu5aWben8uEW1T5m",
  "key4": "5g9WK6EaesqGUbjRJ2S4Ag7hzF5pr2NmVDiWnoYsMYCyUbQFyMpvr1vekasu5bmvSJv3nE2Sa59jPFar5Dqj6gZA",
  "key5": "1kZPTNcG6cceVJyHwCKRt3mATNP4XFUgcCmNF9UUhW4pqWHfT2ojNQG59jdFsfy7kNmxunwwv6fKby6RLvemBvc",
  "key6": "Yv3tCbxvQsoJrZtYuJbeLtQUKnJSzVSn7C5rZxWJAe26bWNj6gWoj4kZN7SqJnT7jE7EZNk8dVfhfVhWawYVcPi",
  "key7": "5UnCVLZAZHwB2moqbj6mULjL5AryMWqXaH4rufkUWryVparR21QjorDabsTBwgt4d1Xi69zy7VhmrXuDoVof5jKM",
  "key8": "iZgns59pscwCWuTXg6BdfXMNxd6z98BxLzEUVsU9fWXeffFt2M7jBzE3XqVxwSUC6wtn5WsFTNj5GvbGtK6pAHp",
  "key9": "55MqWRMMiCUofycfz37Y3ZnGesWfpB5VQ2SZ6W5MwGcWU3ixLNnZC8BNR18uQxYP5H2tsSYs5woQk2LRb6Jx5hUE",
  "key10": "4T7u3gyXuBSf4WEmCV1sWK6EZKcn5jmNRVWbUQpK7xm3smc3UyZCEWFTYmXXeaWBWtywNp6sJ152vwyxvqahUs6i",
  "key11": "F89BuZ9Xj9GWLZsJjMFKLkMciV1an7GqjznYWZcKiX97nMGJC1DcAp5BhEEFf8mFAukVWEsd1LhTXmr8B869WTS",
  "key12": "26ATxARrAspyM3DYnuZbV8YxaS3ghGpv6BH4YNFHpbrGi7Kb7kVt6KSEhWaeVtasAiwSkDkaVeskwLCkgMq1KXJF",
  "key13": "5DyTXH3XeTvHRzpM4WisNg1aYxCtEG4bxhCrquTMM5ionHdGzb2rcAeeLeLicmbxh4Nx6NKxz4MHhf6pc5NfshX3",
  "key14": "2VADBSUCNFXHmwA2G7C1tQVC9kjHgntUVreof5hcrvQL3MtopyEMR1NQYMFiyeiHe4Zgqa6VmhW1RLdTYaNFbT37",
  "key15": "QLd7u9RQUPYjQ6thnpeGodzs8z9RWeTFQa7qzqsAFzZ7tGfQ5bsfBxP5XH63FAPevgQo9xKjoXRYQerKyyJLHT9",
  "key16": "Ciz1ekiNRyY8rwnnTnHnbbtkaVkkfjGV6kgtnNZ62uhMDnWBTqzbwkocVxKALmCkLaz3riNgaaiekUjr6ZcYPdR",
  "key17": "26rMJDS45vrTza1RW3v6Mofp4TzPYxmjd2aev4jrvbrMckeqnT7JJQz4oFEpA6tkUuENmBGYkcNnZwvP6BF6gMnn",
  "key18": "28HEiyGemxGRsF4ND7vgkDRB4jAGkVGjBC1PDjdxdqCmjMnBbaoY6jSLKQgiTNjiVby6zLvYkPWcdzXzenPeNB7Y",
  "key19": "2bdAXoppRCk8mict7jqeaJTC7cJPXZRFLYkxjeR2wUHwzLfDqmaCK7ZZXtsMeo1ifmQszsFuu2cpdaZ5B5cpMyaA",
  "key20": "41Z5XDPkpVNFt14T82Ed4LfNV77ovJihP3AbHGKRnxXvdsLsXcoEL29fSfsur8JDtv6s6R63VuHuC9yQDucfeqG9",
  "key21": "3fYEvWEKs3sJVZ4woZ16exHm3LhcwVn2fW9gUD2Rgsuio5qYHRdFVpF4j2eM7cytFT3WJxVYTX2jDkvskG9g58Ak",
  "key22": "PstcfKNuAjq6BNAm5qvcxZaE2ePvpgMKm69yfsenUxs3KhNt8yDEkMzNAB7dXHDCUHdZP7w3Zqo2zC1xigmA9fV",
  "key23": "5jK8EufisoVsAqFLq2WETeNNhE51q5BcLe6rmtopC1a6YFfdC3fC4EVEAjZn8dUAA4xtjMa2mcwrfxCqzHZ57SVb",
  "key24": "gBc3GMgd4hzdqdBymkLrWZ6dR2irw3kDdprZ5yopsFvEQaAA6W6aLqu4yWQkWqyotgtHXKb6NuCbNhkU8JkVvKU",
  "key25": "5463UDr1PDFBEHHYU2CR5jQkdddwqEXDm8Di1wE4gBy2RRR4EZHsZtvESermeUbTmTWaPkMYtwbAeP1epWTQJQMS",
  "key26": "3x3qmGuEYgV9HEH29e6agomKPic4P6uSHb82FfwHpyDyxqA9ghvQTaft9sApduyz5kJhutdgKPTTsQ9PVb38RKuy",
  "key27": "9ceCYTzkYZKBmPRf4Cf95CfPbHo6qzkXLpRtXP2g7datv87QH98fuFNYwVGrjC1iLiomxXwZQadMMzxmufLG4QX",
  "key28": "3Q3YvHSXNT9aKd1Lu5LX3QVfb3cAyHwvtAF7qbYKDPSBoLuEtG9G1TNEajJcv9J25RjeETYQBHfVMnxBzzvfvL9x",
  "key29": "39QUCCMnpmnGhxpZd7zRwvGYUczANktRzY5xPgkYGxyrVT9ZqesdNLHXF8HirHzQn8g7DpbYjJuc8vKanSNXejRQ",
  "key30": "4gSzyuA2BzWamq28U7Cah7JJRUYzZVMEhV2BWAzRzM7AujbJxmj9YvtGroyJwStyUV12NdeNRAznV4MAeGn3ZxCD",
  "key31": "3EB2DZodMJrNocFq1oAZ5GzaNvSDdWPpEHxbJw61zCCeeAoZqKDT9GF6sSqG4gZppNnK2MrfGFE8TJ4KkSiQ1aZ4",
  "key32": "47FaCRbijV2UqwCkrgcEMNKF5f2mJh8C6P7GvrBTwcZ3ExG3QHCHZ6aJrmwuqbNRRx3cY4RjEj1e5yFER9Rci6pH",
  "key33": "nYY5fZguLLM5Rp5mAtPy5kyd6v71zuH9XmKnnGyw6ueLr4GDDek3frRqJBev4mwzzNmrbn6azU4x4jXvk2pdKcF"
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
