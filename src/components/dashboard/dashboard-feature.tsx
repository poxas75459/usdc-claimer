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
    "2q1Jsec9FBrkfhdA1bfpMFey9DgzPrNLjeRSh2d4RtY8T9ZMX7rFVZeuNw7HSX5nMbmRkhF1ABHXYzHaCAdC1fAk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ceBYMWMbr8oPn2qAYAARjFf7aAxvTR6p8DvgjBRCawKLG9Bro3f2FbS8nsKHMhJ1gUxAttF4cgwCME8mgU4J2ri",
  "key1": "2SEjCAwqLijzCRLzf7z8t5TphNddG2V1R7Bw7HQGDSpLTSm5zYz6K8TncBLMahFio8se5hrAHoEZFmNj96qhpS9M",
  "key2": "2J7hkDgyX5tizvMkBzGvD8Z7Mpe4bafPM7egNuTeVSbndWRitT5MtTVz8U8MWrTGaRykxFNeMMek3kSo378jZLHg",
  "key3": "5WoNjPeuxfZDYrdP45ZWZ2bAHAio3XqvfjwBXPbDUUeLLtuWMU6GG4fb66hzBzGqf29SFbfyZXEKPepnbxzpbQU",
  "key4": "7k7xBzVrD6C2ZSE9EGhH3dNzWfxJL6aTgwt9i5exCXNQTDdLzQSPd8Zqm9JkCZ2CEKCgiDkpjWpfbHKixshnboC",
  "key5": "33giwqpVdXo4Bbya3nRdK89Eh38BusMG7yRqMiwiTJCo91rLcSKKsbEcQ8RUoVWEfNDnWghAfppDRZGNCkk9QJEs",
  "key6": "3YtuWKMfGP6y5K2nQ58ixoR1a66NWhUwvSf1bSrui4wZu3uXa2iJG8aghgpimV4C8krKskPaxS3szw9xETNhSuez",
  "key7": "33TzSXLVHcWgTiestS5JkQYHRwrcjnsYer3ehrAFJvRxzMWSCvkxyLHYvW4aHLJRCMp7fkxumdesDZMwoskHEbzw",
  "key8": "42tUfJmPScJbdLEeEPDRK8PczFRGvhbATUtAo6cfZTxSAJxhZmNLwgHCdwM63DDNktSvrXdvtMpP2E7qpCxuwBym",
  "key9": "a9gXxQbuFB9Px5HFbC8MY4GZPXNScEebGg2f2TahDYpArUt4tvNYEYw7dfYKYneDXeAmsMaAhmmVkXcZmc3WtJN",
  "key10": "4ChrtLbha45YFdijK75EFJpskApseJxmUaSz25QvrjCBT57rv2mRqJfbgyU762pShEvSzgBBp22aHCuvWgvUPyx4",
  "key11": "4zizAbA5cGXioa8MVWzYxAq6HMtaF7M79Ff6wyyNKVCTJwANC8ZQnNKNmTaP4thkZ7DZW35qpPCHWRx4b5EZ3aT7",
  "key12": "3dseY8kjsw5rxfoDZM2fnkv7xm9KzWEU8TUKuxExR9snf4CVyjuSmeBZypVh8rv4xQz7q2ChcvJWDh7Gxtzdsd8n",
  "key13": "58NN7GxoPZc2jd1JarkHrYvM1gCM9nKEjiHKkiXJVd8N9n8FmMmWzzPyREa2V1dW1VALvNoAwuLPhPxdkqyn9xfV",
  "key14": "3NHqqBJRmp3e37hXwr1igAQth8Kh73ZgQa2XTm9KgvpB6LzLSQa7dER8v1JJRy4rJ1dyQ4TZXYDiyApGhFLf5xq9",
  "key15": "3prpBFYXHfTxf4TqcfKD142yc5dM4dmikYehNSuFuGXFz8rgjGcmNA3Qt5AzN1BkncYw14ZJ5HbpETF4TpaZLpDP",
  "key16": "3AyxrEHkV9SsFphZRatJipmRtGh86aPbaiBqvbPf7sM4ZUdkj6xUeUhqxXyCbooWQViq98uET34ne8RBks5mWp33",
  "key17": "iuHiDsoaDVHk925jaAQpGkpPsetj5jBhDyp5FbpwQmP5MoJGjgCHztw52gQLxUmH7Ax2k5kCG5d5gVGAkVqTQ7Q",
  "key18": "297nJdeQT88YpLFgDVhWrvfKYQmEEPvu7PDTb1bSbrzAEiPZsMnXvjHWPKnJ5oYHHDxoVWFqSVAxRPGG84XL6W6y",
  "key19": "3CK2o37JKuPjJqa9nuAbsd1Sh4PWQ6t9R8M2gK1REChTaU5X7UmHcAsRabPgocZxCN3EMMWqppULi8f7Qe84nk88",
  "key20": "4WhmE7ZZVFG2FLGXsatqiDcFRME37KNg9EkHHzRjPL3hBQ1wJk6bjoSmy396M5r7FPJnNCuK8YVS37aHKpZZCamb",
  "key21": "21NMiYLeF8msj7FQs8tKcgUuCAJ3qGaADh2dkoNoV4nUMDpBjDhv1Zhwk8x1m3QGqcaw7SNS7nBSd916v9Ezc6VZ",
  "key22": "2t1QBw1eg2n9wPG5dmCCF7zb9qxpdT6cjRvjrRFdKT7MfNM82DA8qPMf7UdSNjBCZjjfdwN6xSLU5gsEgWoePxpc",
  "key23": "T5XuNKhhBCDoCXisDnUbY53a8osvRob6EUzKM3sTNDeHsPHx6QRCWeJZt16CKcqm7PRVBXisba6qskWQV3iaV59",
  "key24": "4s6MhjT64fdve7Uv1xXFbyU61qa7Rv2gSA2asn1sHqie1PUMbCbAFMqxEmtD9zBry1iS9XjwNtbeMzugFAWMEWYL",
  "key25": "2pg6WermCepRuHiAHyqdzXa5gtsA8tTVBND5KXS7guSNRHmgJCUNfzNMZC721GvMqfAxG4qj73YyQbwFtYxJntw5",
  "key26": "2puUupvg8L77yr2xKZbLWbJBDg1vwkZLH8yZuBHCo2uAoQAAmS6iHqqpwAmQGuQaPKKJUcK3tWMXZZU4gusci4WH",
  "key27": "626UxFS7NJCYXZjsyVptkt7v2is4sefxEWQBq1NAB2yqDpfn74FJzGNv2mGFs9rg3ztzXLBDRMZzEaTmiXCxm7Ua",
  "key28": "zAC4omDSwXeTmWB9bHswnXqzymZzC6uU4JtRhx6CmDyEjbwsbpkPTKP9KcsKWzeYi8rj9RKbQznkhbhPxnAer7W",
  "key29": "3frFiVU4QTDFdcfZ48FTTUYeB7vgUUxK2SxD9BngqV97aWcdWpcmkpoRKhszFbsWBRh4fkUXgSRZ18AgsqjgkHYQ",
  "key30": "2iio86uggHE9crsNeULmNxVC4772WULMe3nPiFzPZftjxRnZke4smSt3rv91F6AerBsEr8Vveah6HBp34Ya7v9q8",
  "key31": "woRrtrsjht8M6ev3RGUko7Pp1McSE8Rsz3ASFkb39TRoTar9JBRBkuozJGWoAiwYC3MdN8vMpMVsb2rRAbmyp79",
  "key32": "n9hEo7Hy2JubHih6KmKfuEN31STATvcRPt2kgfUPf6AgSoTy6g5EvnV3AGmPHBwZ9viCNcY9owK4f7fFbSvcigr",
  "key33": "4U6r5eqP599uApgrbWsKTbBRmq3EscZdUEbvYbByJa5ahKsCh9zNYzdnTZeb6pBHCW5GHYm6gdWB1UUv285S8zFA"
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
