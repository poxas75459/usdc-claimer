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
    "2gqw753R19f4fasJwVLQvb9WtextHMwczoGJup2EuTypbYUffC2qEkx5RtAK47yzGLcHwCyCitwxwnQGGQrwDxZ7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Reyq1KmYLCUgHWrQ7eBnatEX7SwdfJKY55HLFvXT2jczAASTyKyAfGD1oGghMMH2hQLHALqwDKdkKiF9No29cpG",
  "key1": "5YBfNjBVmTDC5xSzqijfbFHxPRiiBHYQhEQvrek6A7GyFHXSqLrGP3AFNmg5oPfRbe8XUoswDYX4EMnpkNV6uH5r",
  "key2": "RvXYvRjsqjQB9oWY2sCQzobKy8iZJNDeCdjEMf6rp5UvhQjyYiJzfFDpvLCFHgvhduWDcaSMnLJveKq4Eo2cd1A",
  "key3": "3LHMgf9dS95CFtKQzd4FQevcLEoiHWQ95iXuThrtmhEtP9GwV4A3KDPngsiTr1QdCLBWh42ev8tNRygMBjMNNhmp",
  "key4": "3FSK3abLC2hZkQBA1gZBB4hiUc1NanHCmNxKSQJGxaXdustStJQTp9A9DPnzpGJjRc6aKS9BcznvraCxXypvm6xC",
  "key5": "BKwwv7ZdCyLpdXXjmZYP5ArevnmMxtJXXa2XfKvFKtoff2ZLZsVkqs28FjnJ2aAFSJ2jpqZ1vcGU7UvY4hoywfs",
  "key6": "3ZBwDmkpUupREVorn4tgwqaxu9NpVgJaoTLb2atFDSxeqfmdBNpWAkFcmXaqSEd4Wh4gns6WyEYcymRDPtuYfYed",
  "key7": "2eAJ3gMed8KVXrNepf21CeDBmDSL4AJdbHAVBV5sV2zESCmndWr6gjvpzmDQDiDXKZQQjkoTL8J98MJnHgsyoekV",
  "key8": "3ih2x1UPE9e6w8U5xT72KvSv7LX6p1E3EprjAopnBWRJPbDEguMQgsHqFCv8XCAgjvayfSokrCzc7iJvKpMCZjPg",
  "key9": "53obcTQiUroRUqfULaDm2HCg2Mf2jvCdFZ29Q2Jx6JJrjyvkcB44G2PcsD3gQ752UN4LMXS9Rk4TZLhhZkZcQNNk",
  "key10": "efqVMCnBir2AVutPivf7n3fjEacpiwCJwzUTS861dpLYgGJwE3DJAGeredUErUjPpxTqf4ZbAfd993F3ee4wVDb",
  "key11": "414JuUVBGsqdsCB6PzVbPwPQdad4uT2R5Y9RXmDo8m1mrt7pDBTUfbaZXfQoD3WkCrsBgxUWqnnTqCDU1qXHGyBW",
  "key12": "2qK6smXqgo9R1ozjnGNg9zRAnfRxshnnYFikHEdv3ZmNQQyLCYdSQuL4AWnFFQnXrqviyeqyARzoMTH1t6JWLuxd",
  "key13": "2j9uBUCbWoV9LWznoq5QNK2xgng2b1fmGMnfSAYJaGaWtXsEAtPMcKJCzxd2JVuh11JiaKCi5zaDP3m6JYfkApYP",
  "key14": "CQxaCmg1Sea3cCZvvokujDugXzvT2jzNenWFfKMScshT9wD4kmJtyUNKQ2UgsZSxJda7bmrGnxsw84nXn9141A4",
  "key15": "tKKeTRzzKZTe3jrZWE5Sp4MrRD6yKeJYHjzbej2xurpHKQyZCLVjbWd6LZgfckgDDJPPRvVtsMH86JqMDDciZbh",
  "key16": "3WJEiXCb6cCG7xFJQ4wAtY2DfYUmAgfBYa1829estY1bkA8vSyJVVm6mQxoRg99B979szJeJiioVpqZTVxic9qrL",
  "key17": "4MoWhuXMJnbFUmNzSyCYXvwrBdV6Lx89xgKwP3XrN7gk4FAjnRKZPMP62gBeto2Nwh9UzZsXjLFUs8z6i3rdepq2",
  "key18": "4UUWzi3byH4J5mGPDM3ezXFQGwVYirLJixKQrGnSKBVPHo8pUC7uiPQ57rvNKj8CLn1MKcqWtjDtUCm3RQuVMRKD",
  "key19": "2AUyRfrGTw27R4fs3Qa9bHbxkBotUJbpt1Zj2t3c89ajYDUf3BYeZNbEhsCShnN2SsDQLkpU1KmiawSr6KE4jL7H",
  "key20": "2MN6iQe4AcPL3qg4h1XUJosfcQkDRsXX4oDwYcA8euiiSepXnfVoUG5pB4Pq9ZA4QcYsRUG4DwSDutrnq5sxZC5j",
  "key21": "frLuaXS4KGBe1wh8DfNEGHuRJy2j5tSWJBDgzxH1Lsuan6BipPmMafD2TKRFcir5t8PHLGRk2rVGu6ms6CjnT4S",
  "key22": "HE7hnceYdhTaPcwKEYsTr7Ckf2BRyCx9UDaDKUJBp9u35mqxdWyXaQXUkabvvvsPhwbQhU2e6qDrcfL918qkJdF",
  "key23": "5ZAir9W5WjSKH94J7ajzKipDsGbrZ4f5Mf19G3W2pAn2SkZ65hMHQsyrVnXMiW155MofvecXhif7VVh6sxgCKKao",
  "key24": "4VphGTUvJQR2yAGUSgW2zH7qXdsd8jo6EhUy3xix5PZ5TvzPm9TzvFRP2cEAQ2edxJrqHrFnbQLcxAxXRMAJA2kM",
  "key25": "54irhAsbHJzJ8S1nLX2A74SWo5hyFN6xumqmqNVbLC1KYtQzc3SNb3RKe6rciAicX7VChwd4PHuFMmPog47Fhva2",
  "key26": "3etfjD5K1VKnv8HX9CeP5f9iu4AXj8LLxwwHiM6uDNj1APnqD5QpyvjkNU3xX9xVzfsSZQCypXc3HbdpvX2Scrvd",
  "key27": "3fQPnic5t2EZEwXcZvng3mv4mxVZAyFQfi5w3owrpYxErFMaz8TRVKjaWHTvCedpBARt7AjWFQ6t7nN9yo7AE6HM",
  "key28": "4YntQ7nH9N73iY8FmrVYGjVm2UEQ61hz2fbLNFcHCz9moCApxecC2XkGSaxtd7RbYrhDrDZ9mx8ucXi2V2cuDX6g",
  "key29": "63CFCWtzrWmhxjasn7hUAZNk3CcNJZuV2feYrNjyjajYMtpwnj4jQH8xbftqG94FA5XX7cLoLx6FDyomwWdK6BEt",
  "key30": "2A4G7LmRZ4jzvE6U9bwZDUXgBZQqgmHvhNRByRkkntU5S185Quw1w3Eqkr2kd8x7DgCxzk9h2D1ZYQdka57178k9",
  "key31": "298cj3xB3AC3G28WxipCEceYPYW8mD4K4DXyR5WzUfDNpoeFbMvzMw44i5garwsiBix6GYGSNXvvJAbViYzKoZUV",
  "key32": "5pj9oYRjMvwThdeMazocQvGS6F1iQLTe2xpNitTJcHPdT7f3Nb2dLQYsc9ztPcudwsnMA8ZS13QZPjbRq1yF8e3T",
  "key33": "4fWb5FpdN2g8btYuF4a2HdizaiwnydNuo5CLFmCv8ZusQmDJSEoiG28syA6bMGyZw8HWYcVWYnyskigvDPJmzx92",
  "key34": "PJzqpaD4mRGSzKP5wJH7hF6ZF7D17USvxP4q7NtxURDSHSMvZnydDyVQdn7H3EBrmUc4nuj5FvvNQTXi4cLj9Ru"
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
