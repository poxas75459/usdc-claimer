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
    "2qy1GEngmZiVcDtcg7ULooDVyBLHsx5WP49MpfCKZK7pKLJu1BwSVvjnZPFDonBmNYb4RSoC8ZqJ9jbXYozJZWER"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4f1H23R4XpKt4Qi9wVKaz2ba1y1u3ckiHJuPFS6NuwXrVY8RS5BM3yzvDB3jCA4jbWwrgQVGMZVcKBMTjtWevMXP",
  "key1": "Yu9UP2DAnSKL3Lx9jxQ7eEdXhFyqEBr6UCSBWzK8d5QaMro1jBrYKByB1STMsLZSfHhsXHtKzGc1JWJj5UHPzZx",
  "key2": "3s9fsxU8UeZA4HTaiSpHjW1D6R3ApSXaPRD3aqftBbBg26VdZ63KLqB7BFPb9aDWsLPYqN88e5PWNAU9KYyQuQ2q",
  "key3": "231dsLeQ2gCbV5XdJ39zxSpi85Ry4HwVPjecLpNuqMY32xtZ1KsdrTJsMcmZzcafJM73U1QTcdPmWCG78bh2HWCs",
  "key4": "Avz9TXJDxjHJVm2iPyeW8ghd5bQfdu86QGpyzGJAcs8PnkczqkR1ALjk63JjsmgbNkqaBeNmogwrLaLGBC4iAhs",
  "key5": "3v3D4E64HG8sTjcSmwbztCMVNvLrK8mx7gzNE1X26BRxWcLGHs233RhnvPBRkSBmgHhbkuSxgYWr8uYDuduYZrWM",
  "key6": "4NHUYRoBFGtQiKBio4r7DQWQvTjdkMEbVhEq4Hbifer9qi6ewnEdnCZQ3vvrkYmjWNLZgwe8MJbrLcZ71ShGQDVs",
  "key7": "5ZEzzzWU2QZCDFUZR7KCZje5zESLFKC165NroAvXMVrVknRomzyN3SnTRyJmMoBSwm7iqd5aBAkVGpYB9LMctJxR",
  "key8": "2PBPGYzzNoV2L8dLGuYdjeRRx6ytvTDvto8HteXPCwwgdSNXnQ41YbyzzoUpnLutDwUKPjoNpKqwJS3HaybvLFYZ",
  "key9": "5hNvNxjJyNxbpWjYFXxicwT9NiiXFdaRpP3tZZ8vZLLsp2W28xdCUFG6YzGeyBcERZx3EMhgPzw8s1C33fTkxWpE",
  "key10": "5h8ADsCg8k8yTQ2HBvhZwf438QGQGkrw55v8vmvLvqvR2QWHYN2F97MvwncmgbdC9KDRUjHPvXwjufMyRMvsx9DX",
  "key11": "84ATh76LL81d82SbvbzZtjWg6CW6U3bLxeH3LhxsPqCqGTa6ai38VdhfDtHDxZqDczf7r2tQ6XLXZQYyYsfaPSu",
  "key12": "2LFxGRox4xGULPAu7Y1Zes6SvcFuRfATtA5Mfib711sxwfE4e454mN4WdQmeyR2ptT7KQh4TQtbA8U8r2zv4xCKn",
  "key13": "VpqAD2dXZZ25QatiraFcW3vUQ5CWdDqDSRNVyoGJaFozLpNXTGvp6ZJRYNgDVBnWZ92Lru7DfGEnr1p3y4t62E8",
  "key14": "4Pah5Eoh3ACXSebah9HGekwtpx3DRroEUG1eQUSvxFq5LbtMzEfRpCGUUEPFkAk5mbFA9mGx9F7ZRJN3RpnNfUry",
  "key15": "3nKFoH8fnQgiyDYcUCWd6vgpTozYk9qD7QHRNFPjDk9wAmtreRCFGcgwSiFCK9rxA5NSaKUahNkqUayzUf9bTRZx",
  "key16": "2tvFddvuNQ1cw18z93MBCnt7ejXkLFvdfYMgpGKMJupBiG5Mb9U3BV2S5veKS2PGbSjbAaJcUAmmd8fyDAUqyr77",
  "key17": "5hq2JbZwhpLs5r6JE3f7GcDbjC6MuC6nRtsrPg3c81WAigKapuByPZQpBjdTNgnkraWmCaPM17Pmr4T1icmudCa5",
  "key18": "2VEyhZ8wsR9S19obWfQvhsRp5LuuWZcoNceAmUpxnRwHLdRCSKT1TAuDCKhKNgUkpAk9GTymy2fxhZThCPioywTP",
  "key19": "63JrmNMfZ8SDC3C4x5bLLs3vYzhkzpqYR5sULDthkMuUHzhPzWwVzAvWCZwLjiVY3sW15SGkyevJEaYf5jvzT7Uu",
  "key20": "5pGJGW1jVsp3HknN8Jwq712tg6CDKFNQqvWAs2CQburBr6NiX15HutqGKvdo9nEmBFtSKGj8DMonjqi8hBXFxb6j",
  "key21": "4ZBetT6xZFWsbzSrT8KmP1NKy5AkedQfNp7vTXPRZwjSfzkg8YD8ukw1mNHaudQooGqXn8wqX31Jg9jkbStd4BsS",
  "key22": "2KAFiHpypm5tozTF38N4WjMiiDvgajLYZVHJSWr1gXcBZCY3VJaDMW6kQJgPM2xQda17mDc8Zva2ohuVd7mRvipS",
  "key23": "5EgSGq72avS8CUDWnbERgTXkPEtbvCYyCjusCXL3ELyfrazDAszjMyKEtZkBnrbtEp3JtbN8B625RWt6GASwvBW5",
  "key24": "4VbxVJqVMp4YUkxfRzRmdCFpxLpyPnxUp539MDMZjmvQCMfnPLEqLcw2X7efdoCKaDH8XeBvKzH2jdtf9pg8Dznt",
  "key25": "4kXEEiFwL3fxy36YncyVmyn4f6SRbipd899d4BygqQzRyTvA68iakYQaJsaeF7CAvuWXcsuj6TwAKNGj5aE7GE9g",
  "key26": "5zWZHVnNd3SoHc9kzWB3WBAFSuwbWfYmqZxKfWx6aUbL394mSyU2snGy6nGMntn5YzBXeWisWRE7hJtNYPbvYFgS",
  "key27": "3MorRVbXtQjqV3S2V99DsDR8TugRjMFtbXGV2raZFyK62qid4377LbDfqZ1JcFNaLqqPSbJ5gGu44feHyT2BfmYA",
  "key28": "yzq6o9pMYkjXhQnvK9rDqvm8pC8KfAaFq8EezUL3oiKtQCfXYbPfAZP4C7ajyLU3neTLRoL3NdtgAdsc5SCpAYy",
  "key29": "2qur73wueL5vNkaw16YQNJZ5NHnZtBZcChCB1LwZKEqsm61vJv1PPCQLceDH5oPJKPeEfwZPfaUvnvZ3LZygPCEz",
  "key30": "62vcbJKbEv1rABp5ER2XwgaW31o1jHcXkxJxxwEqhWVFHfZUtp6HB2qt7zyaPomm7NQSBXzk5LnNFzp11YpF2KNT",
  "key31": "NMSPH3WfPtJvCLHqf1sN8jV5pnXFdJ5rmQvJnrxx8ht1hmGgBaPsPPz7tMxHARh2pcfcDdeYYNr4v9hGUZAjtfd",
  "key32": "4vK28Wp6hbMoTJu82oJVFeKCzqPVf5Yy5M9cjbMuKbfghJjJF3ixaAEG3Z2UvkxqqdyyZK65RDZVWJiYfA3u88tB",
  "key33": "3CYcQTFvB3R1z8orn5WDTLiNRQDjtuvzYMZ3wpE3mqhD68JC54GpDttsRqRx6qrQtepnn6npXWadFEtb7x4SxCzB",
  "key34": "4unUqymL6UmVV4AfU8bV9jFo4arAw3BDH3RaNHZXF6fBs65GTEdaKxCdFuJFCExj97o2BxkFHeH2PWNGBoBvpPZ6",
  "key35": "4VqMNMxjcooc9WiUiaBSYz8QALLJA6moih2cv4Zs3G4bv9reomVnSLJtz3aa7oHv7EatvDJunLKYuWGtuyCvWze",
  "key36": "5EUSA6H9rQJZ4toLCWncjRhuW5LoYQmKcqUidQ4RHDro2iCZWX6hLKvyMMBufLGigEVpDZyybsn4NWBU6CBND7bh",
  "key37": "4eBBzBSi4i3Pf8j8wHfcNGyjFrGsakeP3ef3LpNZY8zfBcAMRfjHTqu7w8gdiqje3eiL19aGXY3v4adrytkU15XC",
  "key38": "5HtS7kJnZaWTkGWR24hxZZSM9y1i4nZQVUJs6Ezvgu5jJZ4JMXgrdTLvtHNeWG23D6TWTDHN1M1599BZGDCAm3dz",
  "key39": "3CFfbwFtxWztXFnTEgQCK7n5Qi7V6zeL8Et8YBucwb2jFAtQPyWdgxMVvWJ522TgKPxBE7znPVvqfxtVGPHHRTyV",
  "key40": "2CbE4DuXQdkPC4vne9GBLV7Duwg7NgPc8QgGE176CNydXNyTy8M14taghfhR4J3WQCNpbsAEvsszFKM5QYbX9GmM",
  "key41": "3AoMXPzoui7MNctH6VDW83eG5zaYeqPYY3QXiRcVWfZZCx6qs1uZikwZNZ6kdYNzXjfL693tuoc6rPmB4rgQScFS",
  "key42": "5GeJaNwJo53RYcBEh2BnW9EossieF2hEcwDJQXVdAx8FAV6iUXYSibsumbThxmcXoJqEhUPuafiet1NvyGyawdvi",
  "key43": "3TzVH7erQ3yQvVVjV9D1cS9T6SMbEnXtyhLahiZNqV7AQQ7xnqacJduhPYLfqNYqsvjuwzKTF5EoYNksb4rGNjGd",
  "key44": "3uidzyiV33BKwP6K2CaV7Hqhb2ZybuDo954v45NgdbyEiLkjzLVcRFYpv8zHFyAqgyP1FTWYgqndnPrt4jDL2oex"
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
