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
    "oYn7A2ocA8fmwPyrfFNstKyMpa4m6F8mhca9hPk6Z4ioedx8DMKvUfkTyFWQQfis1Q9TD8GJo72Cybo7ptgR9ja"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "LJBAjhw7kC3G6kr6LmRnE3M5MJz4UmyLGoMhRdCWZVe1S4tihJgixuSG5MvYNn8xcqEaiKwm8Ns93iUxQuwL5Xk",
  "key1": "3LV6994Do7hdabkP6fvgPy2GXezBU2rEV9PydxKqPDDAFangBihp8t9edgnFFCN1PHcbkpbezfSmKz1WGekr5Eub",
  "key2": "4zzwWcgGkAtwSLrVtF1PTGAXLQgFMzXeed3dodWV1JCK8vwoEeXp1oUj3SFmCVskrod2JMdzSu6d7r3TnBJRDvJ2",
  "key3": "5ADJ65QDjzvZUvrXj9nTUwLM8C9yRqMLJm3xUTETC3WLSRy3KRPeZeybSDep91momEPHZC7vTz8u92jyXMx9MspZ",
  "key4": "57YL8JMxVYGugNyvJzpDxJzrVnSLrdSPbzd4kTXvxyiowJVgp1vXCaruHkTYWAsvbHGDvqwWXn1o7d6VrHdQcrrW",
  "key5": "55DP9bXLQczChHiJy8ZgWxqKdZ4iSGvsJJYSn4wabtxkS6sQpokGC6LchnLhRkHp76mxKXYRgwkKf9TV2P3nSfyF",
  "key6": "419Q3438MM6i3z8MoteU4gNTY4nnxR5QgtjsS6acYhyeYzLrHaJMcvyCZpYzRrPavHBCHQRaJd2sZjMQjD7adKnn",
  "key7": "4tEU3wz9HtZBukeviJTSzuGRLKhoZUASM3pcgKriHAkEd5BT1KZCKEBpaHGUGkUhFqvfSZ2fKQHrL7wZBdvy46AP",
  "key8": "4dv6gwBp1eX1taW1CjTQg4eFWkSLqE8nVufypXCETm2xmT8zqY4eQLgKP1zTUUdzJrf6ZLUGtnvEHqCM9nVKukzM",
  "key9": "2fCdbFJ84biVj4ZLi4DrfrsGb9EM27JafD2yP4NmTjsTnnX7w3xFqTRcLtQhbiZEZ86KNy2WPwZuG2864iNQCyTC",
  "key10": "2h1Zsg1nuH8X9R1ngocA7FRczLGeCn3LkxERudzuGj42cgR4aQ6Bmvy1fNaGs5kvzg4Z5ohHA5Qnoy2jz3rfyhL2",
  "key11": "4ZUiwBr8rdkn12oWDR4ayNWFkTQPWxpddHnjJGZ7HYqrEYviHLUBAChmSd7rreZRVA7fgXWwvqdqCiPXzBym7m5N",
  "key12": "5sAygvkHy7ZtZofSv64jQyaz1P6EosaVoCWfm1gL34E8buj2oFMfYy2x1hWGR9cVJ3w4k8juNJNwzw7fmssegbAD",
  "key13": "2A84ThF16gLuwEauDBBJT4uRAXvpJLXowxkKoFAinn63pdsNkULhc6wN5Tvepix7Ki5Ka7k8CAjbT6FyfMLTgRsD",
  "key14": "4Y3QoLNB4GvRsLvCusV6boqNsbkUh3mMsDR791c5jBca9DV9WZbMqz9TveRGxntLbTkLiLJotwCCLGBagppk1beo",
  "key15": "wbupU6Zw3svx6QiiX9RRKuSrsyiAr61rgKZAnAPTyjWjxVasg1JX1Mk13GvtE49FWnSoSXKCm7qSCaWG7Jw5EGy",
  "key16": "4d2rCLpzaJssWTpoyaRNMYExYeNwSbuQ2wVQPpxHPxkHj7rtjdnx5nyBuHBi88TiBWHKA6rKstTGjLdzptyxesGx",
  "key17": "5g5k9VFK6K5XVLHT4BhA7CsA6w5KbftWRDes5DWss19pV8gA8ni8p3kJtKxDRJK7jmsdookcG6oNgR9VKogwb9QJ",
  "key18": "4mrbM4iGZKJSoRK7M5R7daiFVD42NBu7sqrcaUvsTgZ7yUjCiS3yJyPYPWuAwTLcVVwkWUuvptjdc3UAS6yTFbKc",
  "key19": "2vAsWwhYHQfDufXKSdzTrzX9hTZMpw2cUWupRq1WXDVWHfZ6RovFDwG2qMiLBU7vmbJpJXcTLDv9qsczqoL11gDw",
  "key20": "5NLGCReWZ1Ky8zwZBzVjtKWy7WXUv2q5gDR7XMf8eFL5MRJwC59qwcQ9uJDJqi2nvgytXzcaMJdgwM5ht23sRGAX",
  "key21": "2GCXrnaEVp6chBgVuhfhhoLM8PGQ8odZ3K58QDenXZcoiMj8f24dXU8zFwRPhELKEZ3yrbpkjieQCdSndo11dKZU",
  "key22": "3sUvFYhBziKSoGtDZESqSZxB4kzxY51cBS2jFjXBzhCwpVSbS7jfRszyr7cjrbFPSgKhLCAMQfXSohzXkjdXvoXA",
  "key23": "32tCRhLaQcZwMgUvcgmBZBifXY6aMnaQzfhsB8CuMKbx9zzAHQfGy9q8Fu7TcWmBFwGquBKa4xHSv7qCrKuacicN",
  "key24": "4PHJaLDNV9DtXVP13CG1H6F6xpZqLUNw5ZtymLxFNggLzLQoMwTsz43e8nvrqBGEPRVP16Ud9ax3JddHSJecyNCm",
  "key25": "57s2LdVNYLFDcBFf67ewX8cpWKtYg9DEAR97TsemwGq8xsfnBKNnsNVbvdRMsXg3Nu2EeFfp83CR7d9phvGNbJmn",
  "key26": "9Rizdxwjg5zdH3MjRn4Zau3wmwL4pJHWafPjGX8dPmb6aACwyVVHQ4q3kszWGNeEKr8Mq6CoX6q55injrXrWx8k",
  "key27": "3UV2sDSb3eoh3iEiSjX5XGnuZ9AHeGerHvPrQ58kTupVy8zjrww5qF75aWEZ3f5f4vcuUmMNYohyUtzJgKmrborU",
  "key28": "L8eyFvXw4QKo2DHbFaDnr1qnkNVYnbGzZqCu3YsgJP5L1qV9qX6qabXypN8psf99setv21sDdZcKqw4Yp54bCGU",
  "key29": "24h1icJSBsxuwRSrBTQa4jVUJG4xrGexLbZo5cuEafu3hLoLw3j4jC8aQzXxMY1jrbF3bKq2QBgg1JBeCEHKYnbZ"
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
