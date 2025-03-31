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
    "2Tk2BuKqncUNatW3dNuQpuzov8g4X6kMKezxQAp2Uua2j3meJbSYExE1nWk2A9YeaCrZMbFCp1w4gCyWaAx9UKaL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4pqqJvoq47E1NBuraw6kp7WU6Z8LRq3ftWsHXAz3qsMCD9tyw6TrnCXKoEKbC5UwhAcnqfQcfw8ibYdnaZDCgH4h",
  "key1": "3JvYt5ejnh1gtEATX1PuCTbaM7BwPu7g7UacN3HpLNDP12am36yopwqQZBB7Fdrb5UQQnggzhWgoFn2pEcoEU5Ut",
  "key2": "bYtTwtmpTU7ozDtYWCoouGCR6rtbuNKZLs9421aqNDmXb2bFJKQ2TAirJgg4ELWTj6mnLfeE1VJSqwMyiLEbvGH",
  "key3": "2mPTXbE1dGehzwa1mzarNSx8PhTBxSm46Cq2EudKEoycKEJLA58pXYR1XhSsWLQ5eQV43jponrCkzeRzJYbm4xGw",
  "key4": "2tyW3qavbQuQPFQp8VwQEWW5HHcNFAhe6NkkEaeXk3wgars3U7JFTqq1m7pX7Ka2EKwYeYH7Yp9Bac6hoFKTwgba",
  "key5": "3eomnzM2PgPNbwZUZnfza1B4MbqvVF54NR9JoA1cEVoWfiUx2c9YB1YqbAjZWKmkZnLDSvzQiEJR1wxsHVZF1kfU",
  "key6": "zhoUsPevXVBrwWveYLoW3VnNtVGHrDEAw7AzZsPPgJbDu1zk5TL2nLsdkWY8EGgMmfW6gZJdrij1hqMjaPswf1f",
  "key7": "4LdHcUdAZcELKt4dhqUL5uajy764ut2HowHRUCGzcAGtKhxTpbpfAfGVNggWYtmB6qVeGZndGy5zbBbgPmKm9tsM",
  "key8": "2W2n5o77JQ6jCWU4EpdFzvkLAeHoPotwDrVXNK52a9y2Vsgp11K3eF3h3nUnWJD3ykT56eyVFTNNh1PD8gGMFHKw",
  "key9": "2g63hhn9AujAhRS5AniLjj2pFuzK2ReYZnC69DnjUdBYvRJowdNNbtzaceytZBaYB3uPF1uG4bwUh2dPaEsWFBkL",
  "key10": "384S1M83Hyetd8FXeL5LgJ5EHLvB3mB8XgiXjG1Kh5PhNVMc63j7dqpBpdEWwfp8GfQabW39ucpVQZuwixxjHg4s",
  "key11": "3KFCxzJ1rMiV7XVJ3r1QFArdJvgv7R3LPkqjKr5nPFovE7Lniy7GyPPRCk6yf6hEDtWNAVQnXNLqZiWDc5AofvAe",
  "key12": "2wLaZkqTYhZuNRsbgsS5fimXGG2RxpFz57cXaJ9o4LLmZhAP4k8PhYsVChwkfMSGy6znraMQMzBdbnVL4xn9QmYj",
  "key13": "5YQv9kiHMWa5axgUr4T5SPS7cRxjCrhEg63VoBXstmV1ZWM42yJ4ekgAQgKKTqcTextn5XtQnJZwDAdp7yqLmRhU",
  "key14": "4AniqkrXFsXyzXeqjF9fAy6ej96q1cPvhRb3R9mqfBQqpzd66cDZR7YszNtaz6ze6fUazn1h3ihoyvdCzGEgXkQv",
  "key15": "36WUKoxGxfcMfi3H6t7DHoFiAzqUDWTzeWyuRZuuUKcwnuuiEQLXthx74T4aUfUK1GLxY3Xodiw4bXBHiRLiw63X",
  "key16": "5txhSmjhfxZFBDNcSKxVopLZXMFdHpiTveZq7jiuKxic5gN438igoxR15zVPYyBNdGrYLsEYxBtyCmNK4JBMb8Wp",
  "key17": "aYgAGDz5QjtirCc4FWEYMGcEFH9uSq7n65pimL4yya6MvfD34UsS4VMuh3FYSQdsHDs6iGLay88rEx2PaFKDwK9",
  "key18": "fnrbxnL1pDPgNWmmQFgHe9tZxuNUY1gkFuBpyuecYZuCtS5BzWwTRv1FWAzv7CDMXoK4BHBV5qTrhkhxzWqnSSt",
  "key19": "3oKJwDB9XCd47swi3tVUzTcztzFSBAwXjBm4vKd3oSyNUiLpNUtcvjHjBT5hzBb5msTmWQW2rGprMQir2dm7oyCF",
  "key20": "5nMBdPYa2fvC6VFR5LPMcxJLrNLVBRFuKZYwQs7oihiCXL2F8q3RwUJR6oeLh8WXLV5iEGfSYdcLgoAxBqdvfB2y",
  "key21": "3WZj8eteKxDfAFVMnK8zdg11giF8CKw7nGUHM5XUD9Gd5uDt2pQ9224JVwpecwZUcbp5LThkSXbiH98mZJ6HwPD5",
  "key22": "5jCCP3FZTLU6Ep1MmZwj5q6TSDNjzC6xMxwTTBRqkvEjS33xBxginD7b6rxKqKpypkWzuT3orszReibwbCYegpNf",
  "key23": "4LfSFdmmHU5wGhKfmU1ok3Yruudgf36BDNkHS62ncXkAiqLau6r4XpunMEDNugvDCchxTy4UikBqUJnWAF3KsjBs",
  "key24": "5KxpEmK8sK6PH3AUBcdD4czpX41xXMMNwsAAzXVTsM1BS6GUaznLxdyqE6kM63rsvus8L51AByJh6psFMfUr1SgV",
  "key25": "2a3RaUCC91TienuDu6tnJZFpgbTKJTFcYTcJY4zn6sYg5rUYbg5iuapG7Bk8apV8aPRAHKbrosAr4mT9jfrRf9aA",
  "key26": "2esomXfx3c4hMoK2N5iQyEQUGnT9oy1kBA5yGwzVeTYKywH5HMtWRru7MmyAvn849KXgEGRjNMVgRHWUFCK48KkM",
  "key27": "2cYQfQMNWsh9npq3rz9hEFkidSJu6DEPab3YWcAFpEy9UeBFjMK48AokXbnvwxY4kJGhZaLvu38ggEvmbeUhdRRi",
  "key28": "1pqVyU1QahjF6zY2EfXYvne9u6t73Uf1xzM4oxUR6qWnmMdwBr7wVvzyhjaot8DC6WXP1Rh8rPEpS4ZZUMNRugx",
  "key29": "4fsV4gS6bN5C4tr18zLugRp4U5kn6eBkZcsRZBSv34wjEHKrHHcQTRgVrhPuhZKHaR49PkCbF4A8zktvSF4uZGL2",
  "key30": "4yyUkzZMSBD4R8PLejUBJosx6HWm85VULRmrJRF8BycDGrZ9r9jEotHcKN4VPokZ6tTYRj2G5aymmabayHYJRtCC",
  "key31": "viqrR8i3KxXKByDHyD6pUamHTCpjLFssykyLZ9aKp5rRSo5q9yi8kNmeFuLxFUc2uD2C1caUAoxFYRho5qSAVpY",
  "key32": "27XMWnM3VBft1P5yZk8NRegBWDqDZ1N3tyHkXxqAhz13RqqnZirQhjUmqR861ZkZEiX6Er3DTwW35ZewRUckVc8E",
  "key33": "4wkZhmyJ1hfn9sxPBd727i6EVoDGmuLgtT9hNUS9jKVjfrRBrbjZgcx3L5d3ZpmLs4QjsZFz8XJJRtsXxfoCa35m",
  "key34": "2HNfEky7PP2rEwtz1sU4XCemv3v2iW9VCS8kTGLJt3kL18yNzQ26XW8qzuiYiCKdkcyFSP3LTKmK2sbY6WpLtFZM",
  "key35": "2U36wUJh4eE1tPppFJFi1F12zZw8GG1LCKaZjSLukkDFFTADAa6wUsR591V9xH3nWFphkNNjntYW5psbQbUSUM1E",
  "key36": "dgHJyvjBtXUANDj49cqBNACBbXDD2QzGinV13tRZBmYtLvhBkDoPoJDzMz69oUBbtGkXUUMHKDaBwbhEYVV1XaU",
  "key37": "2BYUctSvJWWXkLb6ZYSFzJMq5Re1SjkfwDVYu6aM6sQzqUm5e8vLR2rpFK2Tu8PquaU3nFDQ5EfBtr1b8ro5h2bS",
  "key38": "2j7tfrd7cGWeTV3NN9PeAVmcHCoMr7jBxf2fKam1VoCyKEsycGSz5mMqNghvUGTx2NZiFr6L1zkziCDhzYGCC7mp",
  "key39": "51sWGhVRodsPruvjGgC4piLVot8tyrQtoSpFAdFeyY4bjsmCbYtbQapJpSPWGXHjmiH8epd9BJKASvVyqgoXByX4",
  "key40": "3ksF93mi8vEaHnN5UJL6V51g3bs3nz1n8cH4s9CNTTsKTbpt9ixdfwYC2hvKUgkfXmxpTyrqnnPXKnYisYTCf3CP",
  "key41": "4GAe9FZR3JBV2Pkwq1mXSGxtxctqyVWXaSkELLDKvwUfnEkU9PPDbyhpG3zKmq3XSZmC8WGm6PrXPBuko5X7pTUs",
  "key42": "2uVMbghLeJwoMGk6cqQAcmygaANrcDgievdhVTTU3dNyTVnf3uAJDryoumUj7GEuAhCgN4YnTUReH2fP7wTikjge"
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
