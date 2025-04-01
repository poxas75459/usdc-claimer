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
    "5Tx4TdzZHz9Xk6rzhqtzJwPm2KFTtL6Yzjs3FBcKairnb3t6neTEE533yfH4e4rcUCTUBeWvpYEi7Ka8HgkNUShb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3yduPQg7jDFxD9ywBjGQPCULiLgk5bWxzshGgHPD3uWJjZsD6WSdyLJGsubGbzixAKF8vNW38Hj1BKC9QnzsQLEy",
  "key1": "4cVMFkX9LHeFGdVDEUhMhRbEy2DmusBEkm2oVahd7bXQiKbbbXEuysvkTYG3WwAuzdRTYLbydY8NJe6pZg8H98Wp",
  "key2": "29HvwE2aJGc4YWyZyidhsmSNhGG56JkjG6mMJYxoKHDrJneveZX1wzYko8oPaV4u4fEXqixwSo62Quxzyx4w1LKq",
  "key3": "35CskTTZ2zyU2TcEkp8gq96XixXZjm39XgP6nSBYV6tFuvmJTMCqq6FB6dohTfC7MmVELTpjjKxzDeq7y7p5vUqH",
  "key4": "54qh7ig8pCjZUtEw4tp4syHNAzzBqmzuhrcD5URJFX3ipJUtCRJNRPH1VNKuh7jNuujv6omtcemnsfH5xNuEw5NW",
  "key5": "5x3hV3e3N1NpPyZEFiLV41e7TEr39C1ZUivaqTuMUbHbjtHKxXg5rS9y54NL2VryLJaoHiSuHutmHbCEuXNEQbVS",
  "key6": "zW7CEqVJJHBrfqYm7hZM6sPtmMgR7SeDTc9ZzoYHXUL3hAGM8vpxsEGN1rKPqHAuFqtaydc9qRGpcMpizGdu8VH",
  "key7": "3f1So1qsDLCsEmQPBLuh8MkpX9RbCKZb9R5Y9bPR7vXi7D9BR3uZk2hYAPRh8jtBnyfjwbq3QgWHrfmGhD19Mj3g",
  "key8": "2CN58duaLLELQTFEbwG9cAdeqfptfdXNxuhMyN3MFHzsrH7FtZCp2XJUKiSV8yUcpne1cgYixqt7f8AEQLCKKsCk",
  "key9": "4YsqCtcJUyfhF28Mb43eVnADyZTp8qLUPd1dCh6VVmEkwamhLwh3JAuKVmpHVNz7eYk3YYys1R69VQ3a4PQpGPnd",
  "key10": "4M5rGNyZaxrMWfap5SinL4d8xpUfYWohRnXics9QWVongAqnvwQPQFeLejBy9WXHX17tyT3hJJb5bEdgrEBtPCvZ",
  "key11": "WJb3WSvJnwuYnDyGhgf1DQM3zj7ZWykDxVjissRDuiuJRvXtpSEaXyXxswVFdSTQDR4y2y5fQFnQmqTnGjkugK7",
  "key12": "5PUyPR9by8KLGcJum6etQRNf2mxqWwwXxNZtX1uZ3b5D3imZTJxJmyURtBzSfQcAS4tLxAwYvknbgqxNm8F6kGav",
  "key13": "xXNBoL1SV7YFvMs8B9zx3mHbCgGzaEdDMpQswWDLs45CZGxXt7kr6AGMUqXFhT6umshvssvy9QbY48PHxCGbHtc",
  "key14": "4uj9BoB262zY9ReE1HLTwW3DaN1pZKT6gKtRbEqaL46MJF5NGX3Bi6av9Hb95DFeuYG72ZM915sP9uYWS2kS6fvv",
  "key15": "4Es5Zvq5qmwpwGaiVAQyHyY6YDA8onJgozsg3u1KrpFh2wc6irt3RQ6Lr5i7sBrUMYo2qbH2Qmaou6eMBhx1pb5C",
  "key16": "5boUY18yKDsXRREm4rdMJc6T3ZwYVjszUEh1jcgzmgrGby4bGr4PnFYEYBvRSt3i6fXbbUQpyFDECWNBwouJ2M9L",
  "key17": "4oN5qz3PuaV6Ywb33eDLAaHp8MbstNFPq3gQSdCdggiPYv9UUrQGhu1XhHnj7ciHH7pbCQcZXWnDizah31crZYmh",
  "key18": "4e1kJ5rmSwHSpybetnjraFDdEzG2e7w6dKHcFi1bemh2Gmo1xGKuMYhXPYa5o7vWcenybNGor3ms9LTJhKY7EVDN",
  "key19": "3gp4447ccKY67qUWPf5WegEazhwRrJkx5fC93fK7dJ9vj7f7sK3U1EQHmuVPMc7RTs3x4ETD67ycAMHF81JzCxw8",
  "key20": "29UquXs3NYA2xkRAft198SuaQAussdKi3egGrV4cQGLAxHCf7i8PnKRKgRxsAxL7Y9TFx5BwLpC4Nipc9YwN3Wb3",
  "key21": "2f3zp4iv69kbf6UzqxxjyfFSvAchXQ3m1STT3uteYo35YGtQmqXa7RaJAFcX9ZJfexb5orKCzyaBLWThD8UVxdDX",
  "key22": "5QYgeeXWdzFc4P8HhMvbMSSMaNREC7LfS5CiithoJD4WWLTmLdnJ5nqHDXsgHMtAnfwpBQp9SEzChDMQLrsWTLKy",
  "key23": "4FW31xK5kSHKKGEackaqHu6e451BQgho6fwGzREoWrmVgwuY6LGS6pS9s9WMqgdB1R8PD7WD7NiAPovaYuznPxtP",
  "key24": "2u3dur3FBT76Wx2ZWFgUTipts7oWk5e6exgw7u8N9vf7y3MyYhzg5EZEzKKKFYfxaxZXLCeifmpNEwZfkeXdK31X",
  "key25": "4xMDiCbB9KNCQN4i9ud1vadDL3A6sMQJNZJVc1HNoiLb3D8r5HPnkJGK8x7PHZPQbSkwiyRTWXH6maD6BHBtMm8h",
  "key26": "5iAvw7vV8qjAGngtkwdYQxbSc1VuMRCrZbqEmbTBBmyxSV3FeFwS7V5iLipkoGHS9z7FXu3eh4e4bjsaCuFVwfXx",
  "key27": "5YJZKY44mF2Ke7XQRoaaYQnHJb3TBJTxt4n488ciPUHaDsSvwfaeiiXj4cEftaz2z1adnMWEGh25F42jkpFEvvXA",
  "key28": "23SjLc4QrYyou9guHeQURsSVi2tTcKCWQJxYLREzLXoCsCBU6sJrCAQzWYxTUhEUEDMBesSt7StrnCvznzQHGkLT",
  "key29": "heYkGxuhebmPN2MR8VaX3rBUa2YRvFUfT5ijHCNzZsjFA9H86wZMjtFjvqZkv7QgoWNGd2EWzD7VR7guZurrvko",
  "key30": "4GUwYXngSFwo21zVwxnj2uoViiVbzPf3LokAmA9HaZRZKcNSYGHoq5Zm7WgPTQvtSGaZRvwCAeqcJ96AHb3ihTBP",
  "key31": "4SMstbcZArgoF89ch6U8C3MpTufWxbYnxFHFpRXToVe6xAw4ch7PRMuw1FN7J5NacfuBnHKLBFico3aPUoern1FZ",
  "key32": "54bUVkhG3duEPLVpSN38CFrTYFNAfvXpJkvFecQLNLujigk6RmWkcvNYU88WnhAXCuDb2HguhTjtjwFt7VHMtJUf",
  "key33": "4jXXF1bkfFHPBHpTkZtcEfytQRKHwPpJMdsD9Er6SWCspqWHZzC3czdqZoWDmWdhzLkCE7oDD2gjdP7dB9dUwkNU",
  "key34": "5ajp6ntGGrTTRA8RKuPUR2D4uD24deCUX7AGTesKovXAEENCYKXTt8MY8fTRp8dKvvp1MC1gjc8TGwwv5cUfutjQ",
  "key35": "4Hh2uns8vPLP82aKo27sLptRX9SM87axeE8BYNgd6nWU8LM7zrTgwMpqzWtEWPHxzDpk7M5ZsRhhJh1utQ1N3Jb1",
  "key36": "22VmtknP2PNdNJzxjEt92dU32FZLhEusSEsrwEafLHWVd4JKZiVeYQQTGSa6C7b7WVCbhwCeuE5sdLNjUQjTvPm8",
  "key37": "2gZsgwtBP6zS7DdLXPrSh8tgasTBxSjYfrb3vKtqLRqvCrFtuFs9cnoruoA9EDFQQEsMMUYRH4QH3tJdMRBfLpg7",
  "key38": "UeVuz48o8G1PtbpaRdonkCVQPXWbDqvqbF9AtHK3BvKq8YySbdQg5ACCgt5PzJYouSbzTRpPeamGpeif5SmJdbE",
  "key39": "252zebqqtYVjekDeEfR5UTST5Cq7GL2HCvDRWMJn4Gq6g79kwFcfcBB6GFfJH657474zC55njsDWwBfPcKMigqmC",
  "key40": "49hM9TfK28FfgopG8nTC4QANawLEG2Lq3urHXrhbKKopGv4TBmQhbw5mT9KKA4VHmqcp9LpbVTWQsx1gbwqLEcWh",
  "key41": "4YfuinbjJotiLRNkc6oTErxP5HBiq6V3MyJHhm7BfawbgdhWJYkzCDfhhvXrNBVhPY94xeUR29RPbA2toDaaphd3",
  "key42": "4RMs6ia1cWKnAsaWZASMdTA4c5ZLa1hKLds689AHWUPm64KeDduTc5pJ1onNqZv4ZVk6vjS4y1KrQg3qTLQGXWrG",
  "key43": "5YyzZgKzsjfioGY7EGBsTdJH6446hgabpeWMnJPNGAftXrQZL6LoVfUamQYUnVWNZthZbfdo2jRwYcK2n3PNvR7d",
  "key44": "dYc9XMB7HzoJQ1jQy2SwaRGXFbg2GVXDxsdPd1bVs1szuECCdzjPtz6LD8e2cC73coJ4qYAeRmrheWhdHU2qQFz",
  "key45": "2Xr1xmMWRjoShfKpUTZfKYVWgj7hkPfv26FEnBymihBGDerrq3EbD7eKw7X4qWENKcz1WvgXrF8AZqrXwk1PaLpT",
  "key46": "38qgeWLpYcMyCAEMpeuWBAwv6bVnp9FDeyji13gaoCoPeL2yp7yTQi2DXcHCQzsSLypkmgrfJ78GUteQ6zpwm478"
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
