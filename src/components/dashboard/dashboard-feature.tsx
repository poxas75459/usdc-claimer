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
    "48KewEqoLk4YoWnZzAKFMQebP7jJQW8ejasVuGd3YrBATCdaWGNqo8qB6ejocxA2EN5QpF7WmFK4H6xREUvLqLDi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5A1dv8mru6BoWHbLotooYPY9MkaugdRUFqtiU5PL5zsrdXefLCgY9yVcRmUMtTP1Mq2Cp4Xs2HTBSBvWvEgVyuMN",
  "key1": "5kr1B9FzwVKF4e37Pt3EAkS23gtBiFU94cUjNF4Me7e7GPnJL4ikaCvFZg25ZsczpsYBax7WRP5jgu17N3rQBDbj",
  "key2": "4TTM8aqWMkAoc6GTzr8bmHzwXhF9KXkaD57fW5o8SpxKDi8mfzFEhKSXp6HGRK292Njijx7SYagHtbGTnkX2fK9C",
  "key3": "VYPzkUXc1mnkzQbPthxMiFLQgFLpcFUHQJGjKwNK4Koc6ysGfn73viDx4XLcYePxNGUd8orufBo9Nw26PEgo6Bm",
  "key4": "51CDi5aRnDsqz5mCzi2dmW5v1aeKZDCqjVP28unCGBrDPmwuJns2TDWBfJpMEE9gSjFuMkFZo9VbEfWqp8v7cup7",
  "key5": "5jKGn3t1uWcojPCiAH9Xf22tEyGWZznoJs4G3qaJcGQnBA85quEcpAPvSj6zT5UACh6ZgUXG8f55XmwkbZw9ZkUG",
  "key6": "5NX67nC36eEhAJgPhwrv7eSSgiwEwwCx8FJndzbgAQXsC6DCeq4xQjZnaNuH14Hdvbvk9D2TTqis2BxYkgaVicTF",
  "key7": "4pDJUPEzH3kVh9vQMHBwqHnUjhzM4Q9yo3pfoqR8Z3sZmroA96Dpwuo6w5h7yqNaQg72voBhoGC7SseGnCwQHCfN",
  "key8": "HPNxYBYj6a7MxFDAAwfaJJkvfFh1C8uMzbs1XZQT5Vvf3upw6krtDTcM4MAvBh1G1qtx5nGV95oZMfdqAG7Faoi",
  "key9": "67aBKQcyaVAGaD3oXMskiEBBaAmGidu6zpYh4v9YMMPQWxVQjLZHife4AgBaSDgTHnRnRZTP11H2ZRjZssobYX1q",
  "key10": "4Yc64XU4Eid2fG363aGpvY6BRzMC3mywZhJveDgnLoQFuiYPNnP4QsaiiefYHbk2aK1gueyR9avBU5RQzfKbS6eH",
  "key11": "BapraM878A3B5R92unTFuhngssRzr3BdDPTKwMwUrqaZpNfedeor7WAetDgYbkV2RqLuuy38ndeTujQa41959pD",
  "key12": "kVVBMRLgfQcscUkpKnwjijzb1YDupubDDVwuHbRypwcJvsUYtngRGYjBSKMHyydrD4tBE4kb6b9y7eS8f1c3eF5",
  "key13": "5heu9P74w8St5sAgoVL3BwmZDKPLBNSeoTiFwn6xGYdYkxvcDqex2nL762yHC4Bs2i7RqgJtgSryFzc2trb4BSNW",
  "key14": "2KT6r9dw6zeneBsJbQyxP3CrgRDe9sk4iHnQBACL9nKbKCZUB9Z6jhkcZExRDV5FCD4TmZEgpfZfGYptvt2yNiW3",
  "key15": "2Y6zZCWUGRZPSHDDxDzaRs8FQDtGy5q9E9gTKA9eND4UD1WRNm4hdZ1rpg6Xd9XAJoMK5banxUbAcFYUpZy9veMd",
  "key16": "25ZSYTcrHzyWJvoNqC1cNTcpFafkckGdTQ6nU6TDXHmDEhuNt6EymcV5TiuPPMgA9epYsPLfwMdFCevY1gL9PE5H",
  "key17": "xzNCvuYgP5YsrsnNWaYMrVrs9X8MWHgZbptr27JBe2DP8an7AUGoV34C49MZUJGVspiHx4VTUKBRYZjxagU1MQ4",
  "key18": "5WyeQSAbpCacqtpcpqHk3Vg5GdfRc7SzUiTEibAswpGEZBCA3ZH8SK1ojR7Uadd29NmxbNYWW8eyKcgSUFMghb8M",
  "key19": "BNfijT9xJvEPYLzSEEwGE8vjRw6sGLs2VkL2N4dACGKqNzj57gFmBUBJBKi72UhqbU8XEG7niqn2AQXLpqNX4pg",
  "key20": "4FZ37sggFvjycHKrBq9hAwXQJqFtTx7kiogeaZdgzyCCg4veNvPEPd3XVgPbJ5A73TmDPQ3Gb1TEmyq3qk1zrXYe",
  "key21": "33xEeHaW2Q5kiqy6UfJQRJ23JjbGxHiHLMXQJNsc4Ann5CBmyh6B4DmBoz5UpanYB3kDK786bgCFwjEhciasEx8Z",
  "key22": "F562tq9kts9XumU2BHVUNEVQp9dsyYLprirSC3dDGN7zkdVwfqf46iNm81snoYVzpJvrryNTPHdCPbwLkKJZbV9",
  "key23": "2C1xaa8zHHwFNuSSCiJF3wZeGGrDaKiZL2AxLuqAmqcmomseQ8srATA9D5hj8j2xYmN1xvshqTNJ4gCRUsFajBiQ",
  "key24": "38Wpy3L13RLX8h9fDzuCx2xMav72qvtQXaYeuPhkzvKMk4B9CPiNMkzYUgvxp6tE9RULewt8AcCVsYChmDXdtGt6",
  "key25": "4CjzNorYWhkccpDCUeU8R4jTUctaFwiK9iHMiJFLxM2RLuQrCzm9HoVpLLty9ACj968Hv5LpDuo125zTC3io6sL2",
  "key26": "3tzmqAePgxupX9GfwtbBdFThcescg2VfQQditCsbSyYyVWHC29Q1EoWv8ggVNpjpsX2QeF5iV8PPgtEqSqcoSnPu",
  "key27": "L3a21Sf8jEsMuHPVZYGHtXKNRK1LmZC4ap5s7VvM64gcvjLiY7kktYvXxXrCVv821gZ6ZqfKcwxt5pSYXCpAQDb",
  "key28": "2wVNsuFuPcrk2R6ob4iuwrV8b66Xthfq689PEm7VajFR5V6bPUP3cXpd6vTQWsMHR6f8kWtFu19tBdvFoZBKjB1d",
  "key29": "5cgT8MFuSCHyD4YVGxMkVTLjofagL3tpjYLU5uHBvQDRYQDqn4fYZVKG19K1WWfKsfrM2seCSvZaVwodUdgYLbnr",
  "key30": "caghzUSsYi8nVSTHy9UAxWaFZt3nT4qqCQcUW5WxGGLLAWWet5af7c7zUzciWUBsvGNgNzp6NfGoBWqrh77Uubc",
  "key31": "5CDynHX9VdKub6G7kDDob7sJowLKCCbqKZKJF7WPUWa8iPEVZMo253Q6c3tXASH2GfxstDP3X6V9nC9kt3fMuS8V",
  "key32": "31qRmCi6FMhnNpjcyRxbjDVsTQ5piDsMiNbJAnC3yF6T9owkTUSjaDU4rx86iBVCXGmpxNorx7mQ6KU6M1iaF9is",
  "key33": "2eAiVfqDawG3WpUKUQE3Sijp9xui3LEi7CaUzwchrEvBQLAo3qWbC85Jp5acsWofsdmHpAJa9ow6TukRizUeyEZC",
  "key34": "47FXic8mmMEq1MZLpM3SVT8CMa32JaVQQgo7KSrXxYJFynaf8XVG7Ko36u8snwWtZee7PgWYDt8uKim6VqNE2rFs",
  "key35": "2GBxCCEqfZheAaBdBM1LP9jpSPSwV5cyxfwaWQSpWvYx28DjWdCdzAiaj9rEFWgP9rKizR1QcPfBdv8KWbaFpPju",
  "key36": "47qZiPhWZWfqWDGMMRwRXz5SZ56ucvJpcyNzxjF2bjCGPtGvhrxBAfqHjNY7wSrgFMArKnsKveeabzAvLJ7twHh8",
  "key37": "4mXixn55nZd7XhsgmpRobaf8GKyEMRKKuTyiYEy3qE3vhar2DbHEAf5RExGCacdSiMdr6E2QRhG5ZNSEaDHaxmRA",
  "key38": "3FTWt6j7fsxQK5e8UavV6ZeeQde5wUCk5DjTTspiqbqR9kQ4ZPFCfzhHMbCKzxDLzQ11gzJxhzX9WUYad6aAn9R8",
  "key39": "3Bcwi4ci3yjH9FfXV6dmhkLbEqGs4bpeAKDugB3fLNRCRraGrxS5XoU6YLRNKukCbkXfMXQCtxs8mYkN2PVbR9XS",
  "key40": "2uKqgVbB4WMK6tU3NUB4VkwNMWzZMSeBkLLr34DJGopj7FXF44Mxkd5GEc7QeoTrdmyLBvXm5aKDR4QrkvGFSV23",
  "key41": "4r8Xo8p37v6T3BRVeKnACTpeCMDmHUmocobDK48TU1UFsnsSqFhWeFofWAefvmG48dEBj2jHRZTc4SnLFKQz2Z55",
  "key42": "45NQgUR4c6AL5ZhzQkE938MiA5nHRaWu6mGteEYTdbvgdgTPqRU9HPSgbyazNqV7u1kjPtX9qvopGYwapWX3qTyA",
  "key43": "2nWU7YpjBF1aoJCAZNcHQQWGDFuJ9M5sRGPXCCaiErhaT2QEfuj9iZrBPGnfPDB6o7zGCqKeFdZU9NwGyGsCDbyH",
  "key44": "3ZWAHoa9nhbUbBv9VN7z1UW1rqDKEWDeqjHFDwMjEV1Go78CWrJQib15nJssjS6jJtkpLJXXsWjF5TN12yMYvCLh",
  "key45": "GFiTC8UPY3NGzqQGr3MaXYG1vN2HxpZVPJT1bouSkFJzbRmNrGdsjDTKVWGoEXrLvPc882THJhaAxrpQa5isw8E",
  "key46": "5BvRoAqwfo3qeiTSGmG7GC1NeZwKZ5XCPcuqcGY9gLmj56X59AC3cTTTRNVocU7j14mY3KsCdxQdGfGy3ysKBZAX",
  "key47": "3qtT3uZgACkiY1KNHmYM3jzUvpLEpjzBVMF4ERi8DtpoV6PUtv9MyVL7NihhNXkTqpwjeiT8PAAd1oNfgb6voffP"
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
