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
    "23K7yB57wr9KgkVDxcx4B3Fvq6i99ooAFEcBMP8ySTpMzz8kUAn9s24QwRNbJuGLwxzTyyfRMXMz6c8bUoM3NjqS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5T3TSTSW3LYJ8xcFVkZLrTRDrnyQDzLW5YbVkihzeEodaZdySNpZ57J7UFo2pwD9Rs9qjdWy3tnAseoUxx2CSfwK",
  "key1": "4RrcbNgH4fWz9uA8ZQy1tksqKJ3mRrFSxpfrTGh4oXWgXhmwV2Y7hWkpwDVT3peN5VsqLi9QJ9F9GzEiuyqWLyf1",
  "key2": "CfoMXnyatE9yMZxy3Dw6FrJWmhVX1iNF4Te6zmv8JUKuYCRBHHeDRi9NcGxNn7nHJjMG4TTt9zh7gk5sHeAaSZm",
  "key3": "GG8UeN7j1JQe6M2YKb1pqgY65UtwNfzMCWurH6ig1uWZEgCqVyUh1G9txHuotTDg7f5Epq1B4KTmzBJqcKYxq6y",
  "key4": "2H4RJwLft1WQJu8Q1MqhPjvi6tHAtMwM6ZuVzvGdnbud4Eacam6F3bSo7Zs4sQAxmg1cbuLDe9gPPqbtKpLuYyg9",
  "key5": "2mCxywPwPvJS5cRKBDf587wU7TBF9qpjVN5n3cbmKFFEZcdG6PbpPm9LkvPriQvYR2gmxfP31WCjcwZw4N1PJHKy",
  "key6": "3upvqyMTtmUSA6RDc97qFnd2TTxUmHoK6rCRvkCPzWFgENGZuPP5KdEQ2dJP2DjDi9XieWHiZEnhEMtVNPe55U7",
  "key7": "2cwaTGKRUuY5sfvsC5WswaDsthCDzgZp9WtdpV8YJZzwBGocHuoiniKstJ9e2tUXpDdHD5ksW81u3k3M2gqBug9C",
  "key8": "trvFPbJX1mQVDZSzqTMzcDGg7oKqFGTumbXr2mRmPgu9zWzvVU72gTe6MpNpP8dzbwQ5oS7MpsAUiJN5gZp6Nqc",
  "key9": "32ay9LHfpTzeiM6e7NTn1YGJ9xxZozB5tJ52uNFuJqP5S1RNxwi4aEaHH8oaF4Aez6xyjCLUF3NvwVMTc3oHtTXW",
  "key10": "2U2kSANzGbuQJoMh4F95eP7G2UcEdKvZxXXDk5FvSSz6yVXin4EnAaQ8mDoCegK94iijs4JMb9LdoUcUSDR5g1sG",
  "key11": "52kdvUNJ5NTnsE3QHGy2yByn2BsZVFgFWPsLW6AFEVbiHKQLNqubLrg7ZzxEq82U1v36iYGQ4NaBdWFCPfRD54L7",
  "key12": "5ELYTkUwayxdcmDDwSjaVr2e1Swrdu1PbSLYGykBdoJRz2MSWu2Sz8V5AtTrPYiNKesX2HoKhmM8q73JmcxoGTZR",
  "key13": "2xuSg6vJYu7nPx7S2bKNiAgQgpDsSiWWhJMpWH4vX5a2CrUMTod1BV5pCq1LPtyJWk6RUTdz8nW6N5uLmaXKxgwg",
  "key14": "5A5yQRsWJWTj4A89mRwWWsbAMeMaafmJuGrnWXScSZa3NwaLbt4xqAvrk6DtuZre2QXoCPP7AjZLLp1wmmMuWN7a",
  "key15": "23mj5kdNkTkVG55oGnZ9x4GtGv7ZrHYM6DrtLVY5jmawmLpBTfWyYd4UQ9knT2Kky6eorGN19cJpLaEniZpTeDBj",
  "key16": "2ajbk6eqKvDEN52u3YgwrgHr7Pb6viDSSwvs5kFqYEfj6UmN8LpbtLRBqp22ZQkcpCdG2BM6Tmo7iAbufr51ZUFS",
  "key17": "4oCciTgZC1QZo7W5weP1NDGuP7ZQYsK3Xdf1niJED4rgpzDrzr2nmNnQ1nQgcjdVaQvLKAgXfiHcU9xJ4RHYtCiE",
  "key18": "F5MkhzhLmbsS3YYycu7wj9kPCsjqkdg78ZVNVVBtsWcLNutnaumCeix2MAhjwdvqgDXBaoJHiBDe8CXfaSBQgux",
  "key19": "5WnxKkes4CeVu4PYbuRNQFBMDKLkWbvm8GYhUDrSsZirfssSPsnYkrypF7tXgXVBDFmnBL27d7UakAqDtULRSWGj",
  "key20": "4hHTwdEMcwi77cYsY5kTdfjHrna2DZxWbLYXuEiudsyZHXJK5NfY8SnBamNNLaYxwJysg2kA1575rzktT1McGmUm",
  "key21": "3RGwBvTgoL6FXSxVL9oVYAdsChj75QKNYmKNKVGYRcbQYTcaxPPqmW6NiUwkfckVWvXVZNAgPiRJZpNDjNPdbJ8B",
  "key22": "4CLdWQSdBDsNjfRmwSBEgFUErhD7ekZ4mkGWznha7Z7djdn1uYNAmJVyrNokF4WLgCEuQHG45aLBBMp7MHnpfeuG",
  "key23": "41qaAKC5QYEDzeLLpSk4BrGyGM9usxWsikvByZUvKpn4TYFYXnr3fRLBgcMTTjcQQjGPhgvRqtqBpAeueL5sSm3C",
  "key24": "HZ1F24eM5MfQCQp2zdrsUJZEjKhnYVk76EWFguPPW5roLqFa6uHg1HFaDSRc1UCUMfgdaZsW7AdPmR3X81qS91n",
  "key25": "3iEBFKLZc2RL674corDaDoLdmLow5deReD5HZk8RtBrgRX1Zkhb89ZBtiaVyMNWh9TdPXbBvcp4i5RF4gzYuLA8P",
  "key26": "3wX3u9nqENaZARBEyRiv7imJVfkxVMK5gStE9gSmG8m269zN6w3yJLdfUppuxD3zhvXw3o9UtWSNCWegB6YSrceS",
  "key27": "3TUBfwBxqMXbK4aiM47Cy8ZwsPuVgHWt9mdb6VPDBsGxD3qVNkyxTgRxLf2NyNUBPqbiDLLJPRqH5eW24sBeruGf",
  "key28": "28AQDbxT956GS88rUCjLPHnVkvx7tQuJFkLMbrQRr4PtvpF5qQ38vdr1oox39pZ4mBT4qnpz3Uw7tSpcu3Db3z8r",
  "key29": "3Cqyyz7KzBdYHmj58KgSPK9VUogSbC5HXnqrj2MXLEQqPmKCA99C9W2JP6PRAb8MgD9LGUwu8Hpxph4x3RzqopHF",
  "key30": "2vsEcvSjRxjvZWhss271bAXDdPnLsB1XpYt9ixkZoAY7EheDueVckTHe7z5WZ785sbJeRTdCwKDhv7dJ14pzpUph",
  "key31": "3fxRMpZWDEjAJT8RrTFArd7KdAMGVVBnLCK91HSjA4KTL9MrpsfiZgSGmEGfLugM9QENnHBNfDPjv1HtSsqsTp3X",
  "key32": "2iTLCCKaPUx6PjYrbsWDwqyQQC4U28kmU4taKkySrp4DRLKTMPMo6GDhqbJZ2cZemCenkHeQbtCZLJNMyHcNuwQx",
  "key33": "5cqRLoKroe5zhhqHtazEQ5KGHdqQPuRYXh9VE4A7jy77MNP2SQuTtpR5XNSje22zGziyfVAW9g5ie948kUHVNgUe",
  "key34": "52bVRoH7a1ENJjexBkuuZxsoFeZ37uCo1SU1wbkqUs6U7rgJPwDQJuDw2YoWKnt7RtgHoxpKBEjTPx8yah2iavwR",
  "key35": "5WNLztYtP6TxWJxZhRKuat2g1zFtAezA8p36yayFGKFxJcW4psYzvxCHy6UB2JcbayXCU9NGHoYUjSWecP1QiRQ4",
  "key36": "2iMnbzgcxnM3MZeL3gKbBnDXhwBbugQN25NtBdGgWfYF6S8sJ9npkJ3R8pCMGheiAog6XydF6D9QKqJpdnc4mFxG",
  "key37": "DaMWyn4Ma3AnksB7sKVp66a97xmW1xiwV7LaawoVYguFqCpxtbQ79KmjYqn7NDgsUsrMnjveGm4iiFeqWtzh2G9"
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
