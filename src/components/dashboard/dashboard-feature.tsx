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
    "2pGECKA1FSGoZZUuYgT8hQPKFfHAaYYJL9tYbXKw7TT2qzCSzbyzq2ivdYU53PTWqswyJggM1nF7t9Wj8VF8VVXX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4hvZvaCVpZ3BCt4qqpEr6314Sdhiya9HyNuAmo3USauh8ceEjYXun2yPJ81aRqHDCN1otjiS4aUCvyNNoa5AHNZr",
  "key1": "43P19zxmCkj5hoNqLQjkGRKzTDMiyeohEQugd8iK5kvMgfWCMU1rfR5tpGa81q13gDpDuJJCZTQA8D8gdfQqHcE3",
  "key2": "5CYR9BAkhVNfAbeUrSJGt8M2W6KUtSxb7ePuvEtKeVRAbwGkLPzPi8NpkkPuaPr3Kr6coVUkSvtiXHmxpQd4Ptc",
  "key3": "tMjzDUz2XEY1wwpxfgq5U24Y34U7FYbMZMi84Mh2M75KnbGy2phUw6X29iHzHhGLWCmRjcK82Y7P6RJfYQCg6Y6",
  "key4": "4kgpf7tWn6qfRTeThtf9UAsZ91FztLYGz993A8m5zoGoLqnhEnpM1rs1apGJe4DBSHy7opAgbeanJ9VVQTLhVbut",
  "key5": "2oSfkxebCbyyeDZPjDQaTP56PSP4SqRXvRMAUVnDs8di38zh8GhYUgsqUt4K8tsnn4tyEVooGUaRUTHNegrEjfK6",
  "key6": "5hKmEnyEA1ycUo7D6P71uAbySoFyPxkK5KXpMEeNDjHhsEjBZUiQfZNeLJsJRCmMm2FpxzRoTU5fsNvxhWmxJDa4",
  "key7": "3zWGhs9eC9PRtFTXMeJYiXMi6amxvtcC7U62q4WL7qoZPQgZjdtrroK384BuDPQgqSLkEBPRJADDHgSY7383sz8Y",
  "key8": "2zRGh6bt9QxjpxUpBYgAhauY9XLB53XhMv6rGwzyXojRWqtmPMrYvGTy6xh2EAfFRqTrZUCMRAc97wnvVbWtLuGA",
  "key9": "9RKVbbpu9DMnQWoJBrLby2HVnfd8kdYEg66a4zA8jaA2eQ8gETXnAWzPZqR6wBp2e3iRTRG3LqmmKNPr5ZJjAQJ",
  "key10": "2uz2fNFgPcMmowvuVdftoHtL7wvaapuf2jnxJLAtbwP2xAnSM7GZXXW5jpYonSBRky8Wz14c1oR4LPdbxM7TAneZ",
  "key11": "2EdrRJsGDVCqXV1MGKjTNWpbxkgBKbserpnKDYoyjTThp1ehN7TTMhqUiwjrsT4UXEywGbuhjRyQER5ZvnBAwDzp",
  "key12": "3m9P9Gy1iHCsXuBoTAjAAYBwUe2DrpS4b2zm3EN4mbj9nTvjnpXFQLQ5mcT4VNWDiQMvdAzyGMCk25perbiWeW4",
  "key13": "2HNS5xD2ct4nzRxCUzrkuiJLBnfJ66QcjmnbqMg6w96A5nrvxoTyTqhYXkCzNFXMskH3Jp2jLSKR13k7hphtN1mo",
  "key14": "4WuXWu77QM1issJoro7VUU6xLz9EbLq9HrFg9XJf4Cxupnc39VJTfxJMF46qoPafwPGYojP5dkUfMzfCZTegtYXb",
  "key15": "2hvGkdCmSAPfcuWTgZC4X52FT9t4WmmPhJuHgp8HzsqGv9b26Po3XnyZGfiFWGXftWMGSrZ4eWt91zb1VQnj8tr9",
  "key16": "5Fj1tzVy7AbUrJUSFS8tSNVPZLGAiAWZRQvhqkSB3FmDKB9tbVCjFyxvhK9z7N1Fn3HCHBma6F3cdxyTU1yHvN5c",
  "key17": "G2Hcd9UvwnkgQVFbf6Eq8X7yukdnWBUUJRsePqDqCvwcc4eVnHZqCdJHL7Sc24CuvBi4Yi2PT6y37PzdsV58WXs",
  "key18": "4ig21911zaWvwM3faR5qQLoZj7HkJApXvX7HmpxWPFdHbGL2xVBbJ2zVRqQXBaKktPJLFjF9EDfM4dAoDy8bVJLK",
  "key19": "2kyiQaTirdcrRUmLC1Yg8UKRZfTJb4KarATCJQCak886wwCTqkXJhNe2BMSxW6MAZZCpCMdHUCsC156Vs2LyxxGh",
  "key20": "wUYAvNybqX2Y6VsPi6YH6ujezFzLhMgVmy7iqhxpcwE6g48eo8x4SxWkSPEUjxjVEAXfDJ5PC7QzjR1XPyssaqn",
  "key21": "5ZQCzwfqFv8gR57CyG3v9bufCHd4aipJFuhoRVLftQmeSmqANyBdkxCGhGbB4qxgu9H1E1h43GgnHik2QW1yKw6T",
  "key22": "5MV1vEuxgUodjkzQ3rTGaAr5ULWQxCW9BesAw4RaE2fkfVsZ8gui2gdaM6EwdkGRQNjcLncoh95JjGjWVSFnKdAi",
  "key23": "4U562e38kgngiWfXSy68nr83xbvNh1obVjP6Z9aiUsdXfZVJzBmbphXZH1eqmK2CPCW3kXREL3HiHsAxa5uwHxmZ",
  "key24": "4iW6VKDBRzZJSYCG79Xgp2hcMSSzngSixn9Y68RYXuKAeqRS2pUTMLt2pAnzK4z42hawVR4eKVTPVuPfDUEaAdat",
  "key25": "2LR6STR6cwkgfSVGQp1eMu74NrAxcvwNAC9vSGstGnSxAELv7BsVgRuhJ2iiyc6i6bDGckdpv3g1GuZghGWNmaUY",
  "key26": "isvqYFTULCHT4B1K9tgL4Jg5NZ73mJjVkKJcTNfM97wY8JU4nUx95o9SRwE3vWUwwAoaUCdedYySLaCnAfxr5iz",
  "key27": "29jgCVLENEcAGzKQ64bx1MDyNfU8eCeLi4DyCr8UbU4bHvqa6hxE5S4ndBTqgN3S4ZWNZjGsTfazcZ5WttDWAqQb"
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
