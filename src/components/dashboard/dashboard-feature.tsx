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
    "qCUSUXoyyooCxjZE699XkwWgphaKAsyj4amgV8HqrXzrEXaB4FLvk229HnjjRK3FRg419GD43JurWqGSxfRbEKx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5djkv2RZJVcGDhvff5osWsVwZcWwgD9JLRw4jHM6Mh2udrTMv6XkmNzvnPq1nP2dBVkz61iaaBuAfoc2oDVBdFTR",
  "key1": "gMA8yJ6N8kKHmoWQm9HWbe3VMNzyonjPKpr8psNup98ESnqQ49S28xq52E3U1WZjJyHBYJJLdB9btRGk4FCBSqv",
  "key2": "53jcLGrWimhBpJch5MMSaeRQB2s6rxCWsw1EHpwMh7PAGDq4Dvw9WraU7PG1EZvN1Bb7DVvtULFHgXvLywE4Sv1o",
  "key3": "WDvtrA5och5wu8g4jT93gzkDv6ovapzX1QUfevk9g62Y13ggXg9PTgzfRcYMwSqjQDey4YSbevsgPRCgWXMtcGx",
  "key4": "4bH7fK4bTUnw5yHUZNXTQiQK8L6qfaX6tSXphVkfJykBQLUScT7mWsEDrVSYwc858huxsjjHGFFGUAfxpSbrzaYN",
  "key5": "2PvNcNbrs2ceGzWVyyadJ4m9UAUN2MZzZwuGYoibJfGjeHnohWe2LqkPmaEGSwN3HcftQQmd9D27TRAqQjdfZgZ2",
  "key6": "3NbPBuZjsUKdPYv5rUjxXVvRrGk3g1cRpev8eubPXjrfe7AvuJ2L4wrGP5587XaGc6knmBRsS62ZG9i8TNZiojkh",
  "key7": "5JFcN8vCRKouHuByUQwBYdsbKLaFGfdKL4nPXTpCrS7jqSCvekHWz1S8wZnnqx3mBTK2BHga4W6R6nB52PV8EHpn",
  "key8": "2y3ZKV45UVUnpCULvLF7eMVM8B7L62f6ir6R5gRHjCF4Ad1PYjBfX9crSGVac9M5rPMGRe49qcm7rjHx5sMHY1by",
  "key9": "4QUKQr8swQZhtNmpQRvXu4fCqLG9CSAuG4EBLV2ykf9qWUvAoa2MWGc4pxFmLkqaHFqXmCPXABkRLwY19dGkAVYF",
  "key10": "jMoo6d5XKdxZDiPJ42a3pK2GbXUXgk7bEcZopG7Z5WwKDeKc7gqrGcvBjcrsB3BFc6uLFVemiNS2EWCV1TPDsLc",
  "key11": "KbXbUS2HyNduTaqLsmUKFQj3DKmBFLJnc7tpcKEwG9Dj3LJWjywpZmo6reoXsCqVuxwrm4RyPstCYgtJzBwHhmX",
  "key12": "1ZTncCSFbk9BDxCESFKwUB3DC5736XWkjYSZjhxR5gmu7HZiJcMb6A3bFR2z3f84jA1TByX9idECHtni5cetjDa",
  "key13": "3UfHZ7sFDWYb57YCMdwTHjf3JhWPV3NrdJMmtoz6nMcRhZfMa3Caqidw47ykmm3jqdzHrW4qAW62RmBzw3pAPWfb",
  "key14": "3Nad7hoKQ4HJCjAHhtKXGvk4rnevTpicq5BfjXDwC6TeotLWro7yCQFNB7SD4rEFvka2z18JtkxqwMaY3wae8PLY",
  "key15": "cuF9GA2Yy88RDnzDLgJr3hAF6H7xenW5r9fxQCKY99iZyYGFngzrPsR9ZauGVz3G6sGGDwUycY5BkGJadiHXb9C",
  "key16": "33aJPJHvWCdxq1QsoipcDPvMwajNgDK3QqxpUuRXMcB7Xin6BwDRqLcobyWfweDA9XqyKLXzPMi143WJAMcnA1Ak",
  "key17": "4Xnj6yzvpujxEqTRaxArKHXQ1HWKgsjp6VKJ5uKMKhtozrTC4Es2Lu4gA8hxaYGACGSTtbQiNuT92Que2Rj5ZMuP",
  "key18": "34xYVLT91NgRYv5DyXrmyN2tQXFjES7vaxDcNDirwXKx7PVYJXnz693h8EkkqaE6FoZfdtWYCdMhurSba3jZGMJp",
  "key19": "3eSrypZAZZoe5FzTTbvxJTsJHt76BgecB5E9KjMxnT7PSoEkhWLt3FZWJcLXskdeWqvm8zGH4DgZf3ZKxKURwUBg",
  "key20": "4UeXR4p1emurLkXPdi3EdCxvhHoEn2TvdzvUovZGyE7TKnXtcFkjqkwFVQtGhmPvu3HrowpAyELsZPazp8qso459",
  "key21": "257RmpfVKcsTe2ZEJhcxb5GjhuTQtRdDHByFn8oy5AB3UcFRVKsRvGKCDF9oeLXDDzi31L1hUN34avdiZAYYnory",
  "key22": "3pRNmXexTiYpoUgtXbhrgyTe9x83qa8d8A2U6n7LrhkUxynBm8tUWXUQkJ9kVbUEvk8wzDRSwqpUhwZm1yHQSyhf",
  "key23": "3xo12wafm6jYnjeVk6vDVRcoAgyoF6cnAkab4aL4N7SeZYzEKWdLTTpjXz9DBoYopcLcxAi9FznSTG4ZeFPxnx6G",
  "key24": "2Mp4Gr98WLBC3aC62HHh6HQ9puhzB1f9ap1xU1QGEqJxEkF86oX2pQCnjZYkuVHHAne9t1nJWSAGGZDz85KPdJJ6",
  "key25": "vkmBsRDT8Jk1nwcMQXJ6JhiAdEkutmuYtdJiytTcrA8VFsDmFero5D7wwAAgZZKL62VQtvxFTyKNUUVt2QVe3Bo",
  "key26": "3pjDbvXZRLWSNeWYcQpATTJ1tRfeVPuixR5NpaxFAKbCY5JwUkPbH69pNbCjQGCJbtkHvkQpTn9T2Lw36W2CENG7",
  "key27": "3d6zmE3mtfsMmKFYutWpb23NGFTtUKpYUUDQQKTfvaZ2agxY1XMFFnzsKWC7skc5uKTmXM7o2arDhgiumdHgT3Te",
  "key28": "QR8kDqtcEj3xTvZ996ZCY2fsxE17dW1KeSLqVbh4kSDWC9SnnpeeNqbTmDMstocJczpZR57Y52bWn6qfEEevo3w",
  "key29": "4NGVTXSCUXcqs6w8vzkpR4ocDweqmQQAu2b99aU2uk4M75BidAKmd3sR6LLXKiLfrBSuH7QVYC6Fb9qyCuRck78i",
  "key30": "2wr5hz6ZzvoSsBsG9ax7iMNK8yemmAgfJST1RZmnzvj5BgZByrVTmeTmzHX47YR61p3jgioxWxYmpkwM89ZAD4oT",
  "key31": "2RdNxgtBQgomhLoT2tNvcWveT4g1kGzYJVgwii5bqTbcjH4WP5xk4So1ZwK4jLG94KvwJXzzpnoxURG14k8QyXJt",
  "key32": "4qyMoaiFKSpsVHFqzCtonqQr7CG7C3fQnX8k3pyZMPoRxi8yUYKZR9WqRwfDCB4BrWy1vBrKsKG44YJa5otXLHnY",
  "key33": "5Ds1Rnz6YnZyzTaBMdhdVqVQ29kssdeui7Nhsq6Y4WUGpQya5y2491rqKHxJpznifok3UauXyLGHGUSJZDbsFaUg",
  "key34": "2QWuHHSeap76zDPNuHAke1MzSs9Ai85zcgABxkHuvuhQVgRrKJWiP7q5RAJm7baQs3UHHbD39H72WnAj19BAWiKC",
  "key35": "3D2sF3YRJyQCcBUCfkCXoi6RYhv5ygmRBaBFkxyu84QJX6fWDfmfJAT4Mo5w4P5VFwcQaT7dAbRb8ySzDNT5Rr25",
  "key36": "2Etwf7k6DXZRQkZTSvbAwGXL63gSrHyBAa8gDoHQ8G3cnWbdkuYWPfcrqdLJVyxLtg8npwnQUEBahYGL2uLn4pPw",
  "key37": "uH2ZqeJZ7xjviZgQzFqrrwaJKELCCqXB3PXaPE9Wcta7aHBvwumYqD6SneR5ho9RCqVvVxLRrEA7SLLgW9SWhHi",
  "key38": "9d2osencF8pDDNHg7dNS17226vtgWAh17oGJ7gpUyqn4ePFFpzXXFJokSk5GhmBnHavxbCUsUYkSS33u5TZcums",
  "key39": "37meshZgohyeAaAZ2wswdLhnuFz9CpDjZbZbq5w8u7s8MXxPo646zJz3T221x7K2SxBTJRtpC6eaJDCh69ZHaBT4"
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
