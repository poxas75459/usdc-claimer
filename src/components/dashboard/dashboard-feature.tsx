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
    "33HRXSAHY2D7513nWTseAxmtufk2749kuFBT9LzsKrHKDKe8vLd41J9pQTRmbukVfeSqP9WTc5VgjRc2tgUHC1fA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Q6EQ3pzUwaRUU1AjmfYYwJWp97GrXijjtTMBBjC5URK2Aw1mE4QnvZibowYUGAjwC8BwBNd34digoxDs69n2QgV",
  "key1": "4M8gZfgbMrW37mmFFTmK778rEVrAXSXAZgXxM6cz5RvyAJMBV8YpZKiRS98YSXc3gj7c2mwXPbLTTu3eu1PZ6Kpm",
  "key2": "sjF3T7GnhkwXXbyRxRwHgf5hDWZUUBLBT6E8A1s6cm7bUQrDo5Vm4vgVyDbqnRH9cLwquvZxiZ7srJkHSwpgtJ9",
  "key3": "LzREw3XjkSWjsxFJikcasC91L8NpyLAyycmz5GFHEJnarRUXCXFWwAJXsqs9zcPuUAX9uCXgavc6QiHzTTuR9K5",
  "key4": "JN7xQCNpEZunqaMPr76V6jHNDRGroFTkmjJz1Dj7w9wpTVd6DE1dRWwLuQE4zVNSh7gAs5cERXYEczHDdQAhJUK",
  "key5": "3Q4zUWRKiUzhat14296BtnS4NRziwYVV9Bz9D5sit2bJ5F9kLu8eQ99ZgpDDsN1WDU1KP8WBMzZ89iajdZTS4cQG",
  "key6": "3YeqrrxoaKgpFpxAr1WFEaUL4NN6NyoQT6c6D3SNiDhwEQ3dSW5owbKc1gV5EuNKeuXSCnRVuNckaB8GSQcGioUn",
  "key7": "Bc6KZzKRtZB7PytfwpLmSY8YVj6W4gtX5C7LFRkUNc862wiJaWcPAT8EY62CYaqm16StcQwPLUtfH1RaVchxUAi",
  "key8": "4vX43tUBJ7BeoDWSP6J9ukbA8LxsYqQh1b2AngvtPRdZ71U5q6Wx4rjNCsfpV2NVE7RLCaUy5GUDZFLsCAvcWXYp",
  "key9": "4kkC2W5Kq6QKZYvXvJYwKvzjAUTxRXXjRjoehKjXHy6UvBjCK6YRRm7rSodJ22R74pbeYgr72ENtM2nLRwdwh63j",
  "key10": "ApCZcZTBaCqvW1VVXJzqZRkdYjyHFYhpaawTa1hBLuV65mU1UQHuspTYjvFajT6jdbd8R71nwUpHQY7qPyMxXbr",
  "key11": "49UZHopQzVVREXdfdt2p2CgMjqPgY3VeDmiAZPECnUxLzSkLrCdbBPGcJFh6UsehQNwShNSWpTQaJVT5gyaP6rUv",
  "key12": "4sAZMpG7PkenB28r3jw5uVafff16on4UR9YgzHau3hziyvQtxb8Hm7PoeWrPbzYbwnzbHDexBjrRWwTj38FibzEY",
  "key13": "5XF6kjMkhqkvedusreKQ8xDvTk5DrxgB1S16XfgvWdifbxtDNaXqMpvKvsYdrhzN1BCNXFNffAULV8EJQBoGqgec",
  "key14": "4HJxaMzCDyEfVpdAxhyoynAQBLQKWowWmoJrF6fNooCMQG6hd3mCwYePHjK8LXtKYoSejkxnASYYTgZrcBDkBr58",
  "key15": "4ZekszGjbG6tCqHCs7UCyv28XqaSjUQSw1SergURHSxEcfWpJyKhogLM4aUgTBP5HSjVqRnuyYzcg8i4qohY7fZ6",
  "key16": "2L53uju6VvnPbh1qxLvN4M6VxsN3Jycp4eRqoKv2e3rsgdY6kZHu6nYqZ5D7QZ6BiScpryEXi5WnjtpNwpMFF5Xn",
  "key17": "5WzLerGxtefzY7ie17X5G4tYjY3jSgFS4mXEhvSirwZA2zKVEeNwtyEUgZczoxGqeu7qNcFYTmEKSxbzaXRCT2vz",
  "key18": "4E5XufTZbXU2sfGp6vqeJ1Hvk7dKont34obNKbKZyGUejQektrNgRRerewLi8Ec6Pud3BzHf2KxBqytSoDoLJVhw",
  "key19": "4VPLPkqpgeCGwPjUE8X4G9h9J1e1RS2cSDG683HErYoF3BJLCj9sNvXg4G9R7jBczwxQjvPEpH6KWnTZya7Qda2N",
  "key20": "vunmvkcrLnhfE9yZzrs8UUXjfBLsZG9JeqJjqbaPKW51JkUwLDnztYUkPDiJ4B2A8d2hk4y1RtRQQHUzk7wYeSB",
  "key21": "4sJsxdyjp7X6J1spQnjjZ1DjzvJQYiT1SkwoeLWmXutg78LqxcfBUJphiNPGELLfWX1AVfokhFb1ynwtvT2mqknb",
  "key22": "2SMCq9psuYkaB28kBk8ntJZk9jQ6KYoSYya7UmrA68zKE4hqzRuhgpoq8Q9W18Hqjbg6Aw9bwYw3N77WHAPqweV5",
  "key23": "56VDFnpKFDEqkd4G2e5mQJ4X7NuoviRjwpWbhGAmc6WABtX9ZGjyYxnxsPVTo9Gwkj1J1pswfsBtN153wnzRGdfr",
  "key24": "5Yf8LShRhb2HoJVaqpS3zBcmu5DDBW1nAutEPzwDQrEWwKRrhpmxfHuQYPyJdJjSGbHGK53TbfWiDuKJ6f7sSBZd",
  "key25": "q6tESdiTn7FgFG6CtW7KUC7BxeBGdgoVBfyghmnifzceZqQm2Jkpe1Cw4XQfP3kpraSEjrPbxGYGr1YH72fL3rk",
  "key26": "29ePzq5JLT1gFmGjCUtufcjvMukM6tQyB3TWrm2mCkhWBan39TeuWa2SJyHKQAgQeyyExyDcb1kVzyCPmRMg1AhW",
  "key27": "4H5W3XiJwKjYBqeYcfs3ty833UaqQyRSFxeRkGecWyTo2QAw8kygFTYyHfoNWCbkzbaRtxbNee2c6Woa2JTA5CZH",
  "key28": "eFZB4nL2EVJ5STbVBYa9koLMzSgwRcKqEVAvUo44FGkXYK4nq8FbmdQN9FcAN4BYKyYnVaUkZ7xXE435fhrd5fL",
  "key29": "4ngPbeJDudG8p2FLqNHCb2eudA8no9hD1gS8GEN99YDyE47W9NHNhg7Pzshs318WeexUgAsXdLCADzMnY8FJj8Wi",
  "key30": "1238CqFYW19mvEceAx8DzjwwCJBVjyx1aovf93SxEoTfa5YUeJvsaVyjJyoeHh7tjw9Qx8SR4MXSrrB1T6bsaWqn",
  "key31": "27HT3dnu6EGPwQEeuiHETC1cHGkyCMqCH9nKFKURXgtuPXVAhzXYpdEgSkLRHe61tGutSCddck6rqUpykwu1sT8X",
  "key32": "2csJb7Y4vjgAXDpqD746wT9zfseEe5EPBbZ4vE51FowAy6qqTyYPjTbG145AexGho33J3uCY3GKU4kskWntXtFho",
  "key33": "oNrjtmXQ8ZWeghCCdopP5qFg61jaz7q7jcHKvNR2Q6P83jb6RouHgBkPQ6jq8Aw8P925DCxwgLXkoeFStnwt5f2",
  "key34": "4GPe79RswWhsgEEyCiCMLg7i6U1rauXMqstHe3m9E9EEnZUS2f7t7anUu3PcxTS5SWS3r4ToBFbCxQzqP5paRa4",
  "key35": "2FhG44pnUyEWNUtjoeLWVKDZF5mKP9sLTiyEaNVrEWiqoNK1dQpRZJhAC686CUVeSQF4LCwUc97trHxA4qvD8RoV",
  "key36": "5CUWMiTb2CJ7CNcnp78DitTaSuELbPgZgCE4BF8TcBTYkEB5NfAF34bctZkx8q8G8YPW6rKvu87gKJuYWi8XieXa",
  "key37": "4Kic1XMdtsLy7XJkVVUbmDuKn6418Y4v1wqcYNFBLqYaZBCpJnDetfF481YYhcXS6WBHrjQfiCcebZmZTzHyitYd"
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
