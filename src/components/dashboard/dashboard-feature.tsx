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
    "a5AvcA1zbinvuNSj5eYwJXRJmRwhDKSri1QdPXnW7H1Lusrn4zk6xKFiy2LUA7dykb7g6EQQzgdmF1g5sx9Mtgg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3fUWt3uuKnhhwMxahBqw8dzkWDpj4capBj9iS4HHJdn7bc4nTGBXxDtNjvuuasHR4TNB2wiYVPhun94Vi6dQmWab",
  "key1": "52Womt15ygR23aAHtqRMkLjraUNrfZtEsXH9SekW64QYZpyUkX4T8MtJ8iM54SwDVsMNBPCaHc9ijZvAjSGojPmW",
  "key2": "4osPnDxAFda4VyghfAmr8Wyco5NXp13Da4RQaivjP9NceqMCbqfDWy7JDZ9VsYAtSKxqDibXtgiL9tU9AZddKJmV",
  "key3": "5fSnX4EWBGDa6ggLacHmWbivoDwrPAnwSdUeXd3wvDyYCrmzGZrGX8MtbQUE2fYcwiQBYPG4jESe6dqKEGLpbkoS",
  "key4": "3AmCvhHaa8PdbaUGLXBhyQEXiTQTSoJ4gG2snmWeDPx9cT5gJ7bQz9BQSCEMhkWVj5jnPgqse26T3XiQgY58ggyL",
  "key5": "3kM4zVQxZq6VVxQLJLvnq3RPoawSvvM5f2PGL256HtEtEjFGdBxT17u1M4pb1rYHqYTy4BmKmaRzJ874Du8m2me8",
  "key6": "eoQHSL9TjL6w4xiCPvZxGqkDMkMbZJZu1DE9sizs4FNtishcVXdqZsa8H5Ystqf4QX8HsWfMLVDqMFFRMiTUJGY",
  "key7": "3gbRc4vxDSvV8ptrApiyzRkLquppTBH8SRDv2uJYYLPX5m988W8NPmeC6mieu7QgXa1ok24auLRbao1PfrAcdTy1",
  "key8": "51Awb6icGaz54hqDjLLeaa6zfU1oMyEScXEwX23J354h7w4Uejxxb6e7cCEygqvAGZmDaABTmM1pdLybECXWCyX2",
  "key9": "4oXBKvnxJNuif7unJqbPvsRRGb7zBkshTVFVwSEEDukbshYiZui3FkJSpaSjVGhFr1EBgTu7vRPpamcMXTrgKjAx",
  "key10": "bX3uwSzVpfhNADfLcxa1aexw33wyG1sKfPCj8KL9NrgG4TNbUKP2FEtTCGnVBm6xtHULaayrzH6rKCP3zuoBUd5",
  "key11": "3VsJJ6pMQVh6tdUSHxWNzqh75b8ajsb7m7K6dpfMqEE9A3HXP7vBmkoUBL45v3tg6PpcXLiohJ1qt4AQaP8FupSX",
  "key12": "4LKHXdmRBEyfRcdvMoekBdi8k4xe8nQ7FvjnXFj3Um3rrYgAZo8PMCQTPTg9jisuGSSFoZWfrLPxv33M48xe1bEf",
  "key13": "4nmQaX5zK9YaFv84Dxdt57kcRXhfunTuafo8BGfVrdpAemsQV1jGePqSFj9YVu9YMYnSUr7D3xjHmyfCazjJHf1P",
  "key14": "4cQYMkBVhMBTMJTqgmioPwvy4ECYoNX5GZjpxtGp1pFcJiBk1rbYzB4PW3tduw84HdHQUgsX624uoh3aNaUd7NmX",
  "key15": "3iDuyLre3aorZ1W4fevzS1MwkgM43bp28f9JKQ7QmEiv3RtUQK9kL6iT9d7VSzkVYVaGD2KCQhn9qgH6s1BbZuHC",
  "key16": "9ebkQRtQHq68HnqumM7gRRGPzKYgRtTJoBXjcxkLYfMt8TtVE3dWBuNHtiDPpcMcxF8iHqt8ehagvQQTPnEMmpF",
  "key17": "4xjg9BB9n2gJrDouXxK8AcmnDfzbCJgZ5L2bxvaofU8hRjSXXrRmtDhj14qD31zWmH44mpn3uSWD5a6nnh2fSGEo",
  "key18": "52yKYRSdE3nF7LKHhUHaEZ1JdSWqEqvwqy9ahXUnj7NcFUANb33ypGJZCoWLjeVrSBsBoory41XYooJyWNvpcqnK",
  "key19": "2ixZZnfsiFFsKpJUVU57EUCgzq9gPqUpBLAXL2BzVY7Bbr9FvUc7Mw4osdKVd4TTRqVegnDwiLKFShwcAwP1L7AY",
  "key20": "3PoPjXF7e6kQ1VMj3dngcn9WUCppeSDjcrQWJ4NeQ1vAkDpndxt1EX8RqatUzigEUGFfG5Jifr4g7RVfeZTyVGq7",
  "key21": "kztWQk4y24dzjsXw6Aveo51tkaUpLabh53mNU6AiyveG5UaoWgVCNCXtQv9aj4R92ap8Kyubi55HkJawjUEBc1N",
  "key22": "2sN1X1u6Xkp159rdq31jKLiw69ur2UjeqtYFf7tWV21P6pGiJ8K1QPJ2gkCS5eKjBkxCgrxEAsLznWGxLTuysxbE",
  "key23": "3t3yzbpADTAA8o5FyM3vhFx1qTDATFYX5fkzSbUqfeTRnjDZPKyttmTZuDDEuHsoP3V2ZPZm6jEGpVuUVVJJTfCH",
  "key24": "28JApBvBaNK8qBykgFAECNHHnSnH5GwmQMwt1TU88s2Z4izjdKeeWLbXHbtW4mc1zAAAEntBuTZpPgwcPYXUa8Xh",
  "key25": "36ryuoJmQSHeDkY4jKDtCoAcH3Hb1hAYKqgY9VHc2VhSnMc2CGS1Mfjf3gMHVw34VKjwqU7Eptoh8KwuGDtCf2j",
  "key26": "4tZqd2W6L8mFAogALihRWstJErDTG2DZDAKdCmk57N6rrgiJb4HSUux7LMNBS7pDKBCZ1tKCLUVPtYHd4abjwxzK",
  "key27": "2EJHY5jfmJNtd8spGcFz6vFd9jGHy1b2kYwcNnasZZdi3W1CarLbWEheLX5DiSAwEkLqAE5YSrJipy7kXjtS9nxb",
  "key28": "3ZsMP1UigfqooUHtjZqAX6pGQAy8NxXufiu83gmsMSPqamH7oXHwDBtb1Ea7V2hBzxwbW91Fgrwf5PHiowLBm1Z2",
  "key29": "4CSt2Q6LhRX6MP2oARheE1jFy8J6WFcx8o5i56PiSD1GbevhPRUL6R7DF2MWY4MJg5FC2iLkDEuYw96uKdqcKya8",
  "key30": "4ax6njW2VW3LjTZRrLHNjoNvyX7vX69MJ4c1tPaTUwzh9CV45kLoZ7aRYR9Bkxj8X8L5pfcAh84asb8o18zk3JaD",
  "key31": "zJntv2vK37vF7R1buRWZiknG9SsS6V48LK6F7SQEScGL9gE6F51rqUpPyEB7hpoHKqqm5wJpZHAxU8X7XGNhKME"
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
