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
    "2b6jLSZX6hvVcHmoS4rYYVGYnQBdgdBkYgqXDiefoRY7SocPmyzhZ9gTA9YmwaU7o6hFDmkmcmJ1cBxedKgPdkiq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Xsz3oGBqkq3kKsnPZLrfii7c8vJwDFwaGqirE7to8J6BsYtDp2bzfpJCyEa8JKHLwBcgEH79gpj8nJJL6qs6FDD",
  "key1": "5jRDJVCTTdMxzFLpR6MNyQ1zPQ3tkaEhdFZAZrTLrDdESxoe7ue3ZBrCN6MXe5CicvTbXrLAGQ1AKtLAwHcVVcat",
  "key2": "62gvwT99gQPXgrZuj24NLMpkPBU7bLcvRwx9eVeCm5fkc4aSr6MguCNX6dWPuVtPeMT9qszBsM8zRvoE1s466ghK",
  "key3": "4VJP2PUgX4PAk2sfoWYuzFjV2bKW5uBQk753ac3GE21qRDKrCCQ1kLF59zSpDFK5ShrwMj85ootK91t4t77e253Z",
  "key4": "ug9oQehDgpHTwAcudRUTGH4otuYjMqnpGtjC9bhvsMHfYJgTaGKfUZoUDvstngHAARy4Jvi22ZikhN6oZLKAjc9",
  "key5": "277zqXSBz48Xn4vimbHyUtjLrZmLwpiMBapTpeM1mfxSU3TZLxAnrrt1xEtjfBg1NXqS8XbCEA5Thb2TaxSFrpUW",
  "key6": "58W4d14fLJ6hmQQ1mTJMsh1BUhFnu7nXNTdnoRugqu1ZSTimNXe2vNhf5e25onMpAVXvzgpVehUgZgDgeLSmP4cB",
  "key7": "4duicJUpEfExpU8kPXcCFPp8A3b5Wn7V4zykF5pMiiReKtsXoN8cc7uu1kCeV1ozC31FdGS3BrD9CAz5TqV5Aoi7",
  "key8": "4kaDkg8RdgwDfRkyuzFdQwcumGBCKovPuryyiSboeDHZ8puRBb4HmrGzt2KkRmY5FpJFeLdYAiJ8Ao4wtTVQ1RKH",
  "key9": "n3ZXqr5PimbwZzxwFJdrwRJgUuqjUo71DKxZatM49YAp2HQ7gF4xx6mXbTEFccuHU3zcxR3tbkL8aX4smX4YBZx",
  "key10": "4k66FiWaQe1uhAYhffapGiFoqDidxmTM1tLs5R5ZEoJFGb8zvd7BP2kBxZx1XZQa8qw9X4ULCecrzgBCoqFpgkfM",
  "key11": "3cmMHJYxdgPnVa4n8duDyyCMvzkwCTd5g5kuAbmjLwRJdxfaC7gTsfkbDnKo4M4QWuvNukurM7PTw4VXcJRZokYS",
  "key12": "4z98BHMnzFUUjxW4Pdrj99c9EyJnjLneufq9k4xpFCvvJMbaKztgUsPcThVMAc6WS5sWqs6XdBzAyz3s8EkoKt7T",
  "key13": "239WQdw9sLGqifcGWhb3Qy24yn4VqbrkY1ZC6arsK267scuqyzmKtBHFyG5fH4Sww3eefznYc3uSCgxn3Ja5Fqnr",
  "key14": "41wkK2sFKbRsNVYyxhjcm7hJPHwyjNamSzoVqQvM5TJU9KnyVCG7tkJy4zYMAsMgYTPegxUueRSs8mnaPqJKSdQ7",
  "key15": "5ZbzFCFCb15imC8TBWx1qjWTSkgUcaX9d3Kd7gyzWggRBjjQCY6aaJDyoQTYhNuskUA9JmnVtDjY6eSfQYFmVhwr",
  "key16": "hTp4LEjpzUMqnvRwm8s1jq3nT8JEacBBAWVBZrsVjnW4SpNZuwtfNBVD9zLzsAb4Ze6bK3zkTF5UAtwNu2WoTDT",
  "key17": "3Yd71y8K3tsFHpHiTsmypnJ5tv8pSzmEJJXdFeXNmvx1y6Uyxsj6WM8zW7EMtYz4QU4MXLmAmitNVjQwKAAp7MUa",
  "key18": "LiFm6QnksmbX2DbY2Ck9bmhW8MqAAtSKhuAn6jnLGsCEzF5Yg5PTUFGHFL12R5UtVJ6T58w6i8TRFLqyqhVjYGn",
  "key19": "Sq7W6KBiF7NN4wCVrWmSbVkFwq7KfuzEXb3ppk1k22zL8R9enLiHGVA595SRVnUWbuvskNpB2r2PzwaPK8SJtUc",
  "key20": "2rBikevwNhQGPxKuLFCcC7iiamJgiDn12Au2gzr4jyzQueErBaXstjBuBzqy6GapYzL9czCoKLX2rytAum1oti1A",
  "key21": "5PcTZefR4YiVZGuZW3F79QcVz7A53z3KCbSf2D54FyWmWNyusJv3hUiHrmBdoVwJXqZ7QnNYBpBAThen5QvMGU1M",
  "key22": "65VwEhDnkuhT6Rhi4PaKVpfBHhRgUmyhYJJYqKHSaMTVQ3HmDgAhEWvgVRdR3C3yUwmhEu23pUkJQ1J7m2J8q3e7",
  "key23": "5Zdm8hyJYj4cz72hA2PRk5eqRKt7fBt2FEwZkpQRQC7pR9g5FosQJya5Y5Jvj6gzBscRRqjCW5iEaqpn6Wk6JWUv",
  "key24": "22VnCh9SR4nNw3ovrwhKkNMYTrhukBAZ3uBUYh4P2qHsFZzofZAaeRRi2vaMxZD8qDJhKK9pQBRXbakZNo6LFuwk",
  "key25": "2rKKjmQ2aupUfsPDfqutxXtmL6LSnoPGudWLiZkA4aE97onFmCQDq7rHUht8fMmTgyfHEcH3g2Uenq1GHBxLAS94",
  "key26": "3rMazvjyqATcX2xNt1d4tqphgtsE2jWXtMArhwdGriV7Vj4XVZStEwcQzwTQEWnWMrkpJST2VxbfjpiXcWaUi1DN",
  "key27": "3u5CuFkzfTp3oPt8Y3EtKKVFc7rXmnns4YQtPYDapfvLH33Mud5JnA6UtVDj32spki9B6FNiX7aJKjVQH7xeqEvy",
  "key28": "3yhY4NbbMTsJeG6hrpEFiWFDA9pAPW8VZrBgnSryGbV75MYstzMZF3uPuGQHbcsCUkdTr4KCcT4bBqgYMu79YEe8",
  "key29": "2ZTTk9KS2dnV823AHXLKT9DuN9edmab3NGeWd4qiJpJNbYN5nNnNDf47S15pArES1CcZ7AZrg7XEw7Gvsj3VAkPf",
  "key30": "2k5hVW5JWtxqbZbP3D8cRz8KeBeHQwt3foAjfGPf6dfy1eYYUniViJRcVdMXfYg98NJ1mQu9H4XUR5JrYD2yiPR2",
  "key31": "38VqEUdugMVL8uojQSfR2aaFLHHwgRGdfrtw3VHnePsoRNrRt62VGLTX9e4PGCQN5QNgWAcgHgEvGpmW21VtNWvD",
  "key32": "3GEoMaMnisWz4vcjUvhYBfkaDq4ePYaizXMMGxSV1crPYrUucv4W5wpJENmJ85JoWodGu1QpbJF61b2rMRWyYqW1",
  "key33": "31HbnCQxpsTnW9AUGcHvMasT87F8LLTQdEwzoUz5gNkh9fMKNaHF8Ltpri1T5Y2cM76jaAvp8EyEvkh3usJMdkDt",
  "key34": "5YnQ5pncWnDGByaNLjkrbCRpF72D8JywgDmE6RcKdaQuXt7kKBHCKYRaBdWtickz54xz6jyYSWifLYc8GZMxGY1E"
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
