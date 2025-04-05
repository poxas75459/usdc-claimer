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
    "2Yyo59N7w1PUszmZwDNwG8p4m26GfmA9AqARBgBoK5XVPG7hFWEAj7nKitzkcBigK9ba1QcNJGoyV96uMXSk1zEE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5FWVpdeZPgWQKSGAYaLVzNiyQyUCh1kqgQ1U362sMAKuxs4qmz4mCML3MdFvYTsx2EmgKs1g8X15dcfpbNwq1hpN",
  "key1": "4V3CP8QME2DusLWQRztMZaZu5b3BJR5zktMr6jgYyaAaKoNf2JkhuWGNcNfEUxcRYWRfFvuqbabPV3GAYVwcufwR",
  "key2": "5wbu2qAR46FvdpYF39b3d49fPnD9ZuVGDkWL4BULnN1TpeeRhg9PMicRYxsXpZFvSVJjVS568y8Q1JWVLAAUS4nx",
  "key3": "3mY3Gx3BeZShMLBm8yVgAxPtdHMXt6wxoGDfBrUTYWwvnXCz8zHLcVtNqiAbGkwmFEKjetsuquuUSnuHXLCHvLQq",
  "key4": "4qAKpShvYdvuGhkeN2ow5rVDJTgVYDFdVDNQwFnuXsjutQUwx33D6cnVoJeoB1AvSeiEQw2s9Khie9RprGCi5Mf1",
  "key5": "2npY61D3PZWJNwZQ8vS9m67ZGPWVoeRB2DPXZ1RDt52rhH7ifKEDyLvDT8ceQtshrSMgPmbaeXhhszAYJggPqFUA",
  "key6": "3hnnEozsHyVWYd4wn2MmJ3do336arxqhZTeJn6ioURvbMfW5UTzSch9S7PGQcJy51KHQu8cExeQfsgktUNZkrdp9",
  "key7": "3zkufPBqixiEXSnWaKKP1dEkqaMaAZo6HJsirAcvMJbeF3RiEjNTchgfUWLev9RdmfmzZQVoskxJKv7z6ECgWCvu",
  "key8": "3H6Z7CvQQL1X9vL5Wp57SXDd2vbkdKNkX4y6nXPB9cAz3p3bop86efCMunQ9GoYRbBoq3gwPkPbuG3u4ngMS5rNn",
  "key9": "FnFz1r8F4Kc4pLZ6gEiigsGEDPi7SkFCP1eUaGF5Kbn1Ks9qwJDPVxbc5ntBZco9BKYvhorbf6pwipDnPzko3Ud",
  "key10": "2PbdUQJTq8r8XYNUqv6DoyJxh6tBa7tHRTmaGLdGQLETnyBkfADWiV9gCoqsAvNQJoXgVbnjsJDyYk3VtjhNMTBv",
  "key11": "5uk6jZ9XD9Mn1M77GVJTDbPQtv5KpShog7Xk29cyV2eUMMQhruwWEi13fD3oZWGutv5JSTo911KUwDPPYKrc1oe3",
  "key12": "NE9ehe5fFWPQ7477VdLXqrMTigRiQyv7NtTrVbeCcnewJQLXKaRE8wk3JR8Jk9KDvy8WGugKj26RYhrPdCPvaHE",
  "key13": "58YCuEEnkowr6iVRb3Bg6ZSkNNLVNYkNFnTNYiCceHsrssY2viLHs9h4xdNob2kwtRRhFfrdcuBWhJCbb35syVE9",
  "key14": "6Lq98pM7oNSxCuoYs38jCXNvG4z1A1mRnWi6MLGwtScKUWVsrT8her5sb6cLcGVjnb4Mir17WCeLp8cy5fbLDx7",
  "key15": "iWJoaQ6HY9bBbDaADPNtEohWF8ERUyaB5YG9YKGdMc1a6ce9aq15jMWbdxTw5LbRs5XJcDJFgGvxST7K8igdi4V",
  "key16": "45yseQPjCBq3e49dg6TztAmynXcJkFkuojKVYdmB9G6ZZAHZ8hhWnrCXWFpz1pfnmkz8rPP9UGPtkngqfFE4BUHM",
  "key17": "5ynrfRDKJ6aaLkfwvV4qu5BF891BmCouG6SpEvQ8sRcLaqVwEiN2DgJ1nvBF5okWaxEQKFRWYomb7BGMuJBiVJq2",
  "key18": "5fauWgpmj33YJ2Xe2QA2DsamZ7TKNXxUEZL3xFch6GhhdWHmtYSsMLJDT5N1sYrn4n7bqY71khnd6r9ybuiFgHCc",
  "key19": "3qh4nh2P5FPYda8uLbaNRjEJQZ5ZBK9vT55WZvLunNkZW6qQUAu2sQjgVr57AzERHoFfU824h3W6AugTws3E6HHG",
  "key20": "27u1Fqzc7RQXSC85AUoBYFyiEVohnuLtQgnuJVZq2YJ7bkWkjPP1JjcUUmXUkLnJ5HitZKDjBgf8qgzuLoLQssjA",
  "key21": "2azmPaXVA4hdrbeeySemXn53AHHrUfsfnrWQg1hRHimBopas4khtfX3fFmx5vai25iGVoN7xYAbqUo4boyH6ychC",
  "key22": "5VTaAXmyrc84BreBGoqZKGhntvQAfojAojBxUdMLoE8apA9f3vwJTqGUTzEArUXt1qvtfmpFrBuaF9NL8YzvKvbg",
  "key23": "5hTANVSmSX7FXXUiWF9oMdjsMByZ5qjiQr3iiTyUh2NaS8K5iiR3FEBoD9HvM4VCBhXmWzUKJ7t26ei2tdPih8dp",
  "key24": "2zppddssnG6nY2X7KXaLb4bzxRHcVmB9hNe2VvdfN4wgiGHvoyBU7gFueDw8YQ4qhTPn7Mu9hUDTYH7f1KwjkFXK",
  "key25": "5PfCQbSCH4jtbH6jynJuMZ8aYT3veQCk5Dy7aq9KG6oVk4n8AwggrLftqZTtUzsa5kdLYFRj9aAKSs66EtSFJKws",
  "key26": "rmPuGNTvkDg8m4v2R4APWXMfYyXRooyjYmtfFTuLrex5w78619m6HrSScdwBhUofL12gjE8iRdMThMTudGLyuUc",
  "key27": "k6hScu6Mu6vwFReMzpo7Tv6xNVNrExXV8Cz88KJqYD7CDKE5ezGTMEvsMwKd87ooGp3NSGGFFE9LLZwzsBpmaGw",
  "key28": "57mYGQ3FybCwHPaBLRwqybkeaGuJHMojGh9yKvbyKBiVu3WpXSHHToQGm4sUFeyt5PVybciDy1DLHc4gVQjr5iUd",
  "key29": "4PNCzD7zang3mdg1dXhAmJY3LGGeXidzyw7X95jocZ6SGTi51HWUYmyn9UVSN2bFo6R8PxJi8QnjMRRNaSsTkxx1",
  "key30": "2qg57nKN3oyKz4XaSFXeV7wTYSRqJ7oQVg5zeRK9fzdfighKhTi3MVkiqbancBSgM9QQieMAB5N4RJ25RQAoP5hz",
  "key31": "2Dw9Ww15aMtEjJqwwajFP6FcoNSxHwoeoLANUVDB6pS8eU4KxyXdBr5Ae32dJ1HYT3yDZYAX8fH4hsYvcEPoW571",
  "key32": "z7Hca2t8ptgrYyidAGYoG9LJhQQQPhXL3xthr8m761tXpm2tkMhYmNVWGW9jZyUVsC4UMEp3ydbZaM6nW8s7NZw",
  "key33": "5JomUgUXtX2NcswQuNzfmAdFoSGfV4eFJxaKXqLdrw6nvZdmhzujhLAg8Ru9XWZCnJxyF1y88rMNhLm2zDb5tLcz",
  "key34": "3x895qDzLkk8VvYmjt9QuN4Q7wrt5HsZBbU3R1jSdfciSv7XgVr1nztxXhKMzZemQ7zPmWPLPaGziuFJRLPQ9Qkp",
  "key35": "5A989vcggn1Fi5WuFnthBRK74uEvf8FTWUQYu9VQoFFXc2PDwSusA3FHbACEeA5Semr7f9vgJKdVKjczMUuyZN7R",
  "key36": "5fR7jcf3hGn26niHWFaJz89dYJQKKtArg4AhaW9kZc3fYTUUB2PUAKjwqt5sEQbhrPDVWFryGTrUKFvxQFXvbFUi",
  "key37": "5YzkFMz3x8qK3p3aq1dLtrUhi3DhTCnAnRKRUVnyTGex69DxhNVA8CPnpTxM6CV2yM3NYURh1fiJ5wgArXWfv7Ds"
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
