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
    "2sShMaTXUvyr8d83UU3DBL9Yko5BxhH75nmJWmboiRbrq3j4BPeBQYvVEsfDWtN6fzYKxEmJLw863Qqw31gn1Fpy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "pYL97uJEfb9yKZiJMo2VrsB5FE2sxFo4Gs8guSZHnqpEyDCVW9znm1LyKBRj4k3Bb3dYBcCnVZqSFxWSpJ1zQ2s",
  "key1": "5AH377JtNXkDmrDHG6cHERZB64aehEunTnsjH7PdiqvrLWT4pbZZxcPZCE2mpUV2DHjsfLvg6cYah138neayw1eh",
  "key2": "2gKnWJcY5jZg2Zcp3zGrRZkxzKqWTYiPfCEeSoQNRoFjKn8zS63DUfvLjdc9RDjKMD2bSfxNdTbpFuyZGUaJvpy7",
  "key3": "3S6mqh1mEypCDFRgnK5gBbrvySG1c5DXrSCkWqTnczXg5AWpAoA36fpK6inofMpUQAMZEFQLm6n6kFu5VJ7DcUGX",
  "key4": "yqzgGTwid6i6ihx8rFxheBqjquSqkZWxvru6d53KtDNXqgaUSeDb41XNghbzpa6nMTTMm4EEEpGe9dY4tmba7RC",
  "key5": "4yBbBafiqW5PohfXTfL21Jhk28hed59o6N4omp2hDYaBNebQaxz1T3e95mbwq3TEqC9Q1txyi647z7DHMCtuDPmr",
  "key6": "28qGbphZhbPSi2G38G2M1XtQnYAEW31BcRrxwpsD46vxZ9LMM9J1mPYp4ryxLpQiQQ1nU5XQArcudv98Rprk9hVk",
  "key7": "5mZDE5Lajwg9JvB6dkhyg3UVJQvTgWC6SRtbAmHeKbqQs5mo3rcRSgeLHpVhKHTgJQAgUxpEhe1auhhAHoe42EdX",
  "key8": "3VfKCvrQwKi9UM4GHYPGq4jg6GsvNWbHDgyWKxKsFk44oW46kJwE8sxM1WPmLfJArVjGYyozwXQNY5zxA3ZzC1Uh",
  "key9": "4cDUDVFK2af23MFo9ZJZT6S13xP4QGJk5AugBuugDb1AK2GenE83aMhTu92VhLji31D7ihTXv9svAWxsWxLzx3m4",
  "key10": "47YdQX4ZToWvaBc8GRVNQntK8ahm5y4h3Rr4DKDiqqULtsyCfYicGaVMnnvE9GnhY1pNme9XhmKdY6zme5y7RRYK",
  "key11": "pCgeJ41mFe242gccDSrcvGLhq6r4zJbwLM2oACiHCAsyVQbfaX9ArA9habERQzGdzmrhuKpmZWNxq7kUqxtyVVB",
  "key12": "3FVk6TnjrbbMtXJU84C3PfPDAeDN4g12eB46iiXYgtGFKSvCjanKefTfUWFCxHiQk5JXF9xxTbZymqgAAYspuB7y",
  "key13": "h6dHtaZP2zMjujz9acw7cwqK98XLPdkfCsB84iDpE29fP4459SXhJAn1nTMTas9aMmEB4oivd3qXSmA8pCUc4jy",
  "key14": "2jrM8bvzTexRi8CkmpjLBhbeQ58RDNGJKK8u116usQev1BaCSc4xztoZ2NAyeSGx8eNJjBmRhqaCmLyNRiGCnDf1",
  "key15": "3enrKPjP9jFoheVa9Mw7PG7HBq5G6wt6R2i23WxzgYFwuBbGTjKST2imDLMRtta4XzZ8RSnys3bHkwNLkK2fbf7M",
  "key16": "3PZQwEVRdSbzXfX7MwqwLjrAyMiXncThNpgYVyPoWD35GKhd2RYEV9rpKdcMdbrBbtckmZebqo9mGJwqZbfYqrTK",
  "key17": "5QTTVjX2j3ytt9UKjpPNFkaKXH6UcMBbjfTKbw6A8fNudfTWAPJogAhKRQmenMcqPNsCsw7Ltd6Xjhd7hieRWkTU",
  "key18": "4FqUkeSA6DcCmMdcK5RTgoqaG3qzufXgsY6EC6WKvF16nWTwX9uieq3G522rNUChox39SjMgTeftkRLaLygHudoN",
  "key19": "3Ser4qzvUurBPUFrqSC7xyNzmtaUrKqUDucDMGiH8qdoeZTUfGu4QVtMbKWvvSkc7ju39AVm6EqL8Hxh4SKZ9Vci",
  "key20": "3YEyUzbfkHcZPn4aRurnaGCLWqJJKKdKHV4d7JAhRpiyKNCATP52GkydMBghPSMqtUAV88jZQY6rHGtCPkiWEYaC",
  "key21": "3qs6rM8Uncy9tCjC7T3tJ8RXocwMRWAwcfRefyLqx8ezna9fxKqiXE7uEV1e334TDyPbjCJHjvZaeZmq9Ur7uj6c",
  "key22": "3h9suMR6j4QMZeT85YrJ7chXSLnWVD1iG7RDvG94Dno8kzi3WjSuyXjSRV6f9HgeNm2iScGG4h7TiQWahbbCLWuD",
  "key23": "4onBw1QSoptesJiHAujd7dgG7NWKx4CMqUZjAT5T7GGTCnGFbUyT72iHsdFFpFv4xiGzumtRHaDXvxrAvJEXZ3Np",
  "key24": "4NHXsvcm7EsDLucaeR55YddUUHANRkdCHr5JbccdkKBNUU9nB8Awm2FFPmNiX7y42vArVSAnL4TvL6zHiQrwTEpK",
  "key25": "3Hpd2NitV4ieu9DFMb7UihUqSzqKsvuPVZ3HtZU9PHrvzhxFzdmKtXXWimfv4d2FmQTnxhopWcDLmhtJorrTC8s6",
  "key26": "5UW8pMkUTNEuFBDTeVmkv4V7x6A9ugiuy8Qm9oQGiq3RCPiDvsofkZctaZ6LizY41xECTqfHB78kypRm3QuQnWhZ",
  "key27": "wbwkgEfdDWCYTG956tfKN7sKhkBj7Ns31XTxTdksMJ48gbhnGxrZgFvfgNV8byjGipvUGmNo3fhr8mZm2ioGZhJ",
  "key28": "3Yf1rqZQPWR5oxhAmJe1VCVowGJ6rUMMkLJAhxUbcWtDPCikeh2NFN9YjcCPRSWbAEiQFMqiQhfXRqFwVUeRH285",
  "key29": "3VkJkwuk5uvtiCa6UcJSCEEB2QRvsYAckFUXiAJjpxiwTZ7oeRhDFKidHn6siYPru2o6mVBAPgA8fPUefZYU8iM9",
  "key30": "3ypg7ioi7WEzyAyNcTPRURKmtbAV4NxA4wAT8LcF5bkcFfQxoQpZLcE6f447MJUmi1E53HDACVfscbamQnwqyKqg",
  "key31": "2b2k7UBFFj9tdH3eVWf3FGMfVYkqmWMRGQYoPT2qHiULaQNL77zrw6fyotr7AH7KSxoRevmkB7kgeSmWMx46QXYp",
  "key32": "3bDWvP8uHAsGxRae7PCSeNuiU4X5Au3hUSEjfq75jW94DA7dSa8B3LSo8Zr6SLQLYEAjsZUgBEasqBm4VvLHPRUf",
  "key33": "3FFigJbRzcjxkFsDByGJNidJAuyoB1ZoCAvLaRU98MUCsqQq8rCWPkyvm1Dh3LvtyiAxngjycndUJRga9kVTDSt5",
  "key34": "55NYMRXYRNCp1H3C5hYSAVWH6x4rk9aeFKGx65qPpQCYgad3SKFErLjGsxgwSZmYmYYNz1BxozneTLaxFQCStM5c",
  "key35": "2iJReZsmfLcs9CnEgAbJ2qZ7rLbFdpWtJtk3DdXSUJuBFAE7hrpAPoTeLbV6C2X6PDfmPAjSCrsvXis7NE4L2152",
  "key36": "3kdWZhVtTkUGtfJb6Wm8YUjiqYPgaZdi6tk6dcV7m6sd5hNRehySXvwhTd99bzj5iAS72EFD9kDDG12vf5xXRrS",
  "key37": "2xMKr32YNQQNDSCvMr7YdsmYVmBPsFtam9vnJgBHfByBuCJsWG5UKhNPNyAhHRguntkbxYDf9CBD71gKMCJf1H8x"
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
