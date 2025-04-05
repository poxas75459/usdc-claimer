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
    "4zQGEmku1NQcvRnGN9RYaNnAUdRa3Asbze9Bu4CiD5NvNYEVUyXyTLo6bKigve8gBfTwskiqr7YMeG7eZDfxvsMn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "8yFRvrH2YmZ9snryG4aaG4AXoDAUgKyjzNfgueiMxbivPpgQ97wgC83RfCBpv8aYSNKLxDZZXkNyL3A1W1b7csY",
  "key1": "4Es3XZ6yrpSmJ7QX5wHYqdSPeqv3CRvTVpUsScsKSVgYEyBov1ZyVQnikCWsvDipfHXVUF9Nz9NtLop1AYeJoDJx",
  "key2": "WXo5tHZ3sqgW9ghzRxVydaYZQEPuGWQLXM89h2J5rwA1X35QZcbdShA8e6ZnqBUqNs3bhHXyaofC1tMSFdeuVqS",
  "key3": "64FkPGQQyLC61184TBdTNkDmH3yXKQDSKVKcrxho9PYyjDp5HAdJxXm84AJ2ysCbWkRX4qxtSb3upEJgsRiXmTRh",
  "key4": "SEFsubW8hLrvgxkKp7aRH6UVRvWNscwA5wT5bVSY84zbX7o7jVycRK8yk6yNj1rExhYqUoXgk97UoTaqJr9JZi3",
  "key5": "5H8QAuJZ3FunqsGttvWHPvCj5hqGkkUHT4jiGaqNWguf6pjgw8o7UVBL4R4nLsAkxyLSmnkCWr39QHwkUeyj5kxh",
  "key6": "4keUTecqQ1jEvwxxT1yasCuW48BkUMMqhFKKhaF6PzMhshmRXMh3xPbUcCbcs95brwAyXngQhpcvmGWY5egvUGdo",
  "key7": "52CMuoQ1WzoaSHuK2gksTtznWQMGHbUHGQifeqA54S6XxGNDTrxBX64gs5U2LtQMFxh2M7CfkbB8MDR5i33RLet3",
  "key8": "4LRoHZ6z3UwhSq19tejW35JHBh8b7znmYe7b6nvNBfKKVSnp1sexkCNQrDQHeAt4EhxM49SUR4GBLv8gn1sjELoa",
  "key9": "35oLebvu7swEyEumia857gySv1EsVc83uVeWitWP5UbeRigkhuybo1ME8PN1HYvo1EH4nwHQ6sAETTknuU39qj1m",
  "key10": "6rQh5bQzihBBQmSrVQVxB1xfPJn37tkk2CXNYpYiEVX26QJYjr6s6LwfzMSt14cdJhHbQGkixAUX4Wx7QRgeQHU",
  "key11": "4W9CwMxgwa6CngYtugjGV1xHz6a4jXy2qkvcqZMW3NengsDTEpCkaCBMJ1Buo4JsCRTrZVdtrEQyYcKhVynBLcqA",
  "key12": "hAaUiDtd1LdsNsDAbopVKq8W2kVZTUV5XwngR74m4HA678TMaaPULGL8BX8gZHkXVvsdWEE9CLjapjTrYmo5orC",
  "key13": "2MSZ12z9UKmG5Wcz4RjJuNhGm2y82McbE8ufALZYTi5BwxbnGGihsPuruV9sDPmQ1vqnbDWgfSxz398b3adB8Fae",
  "key14": "33ZG8fbNbrnwPz27D2FbCnb33MfF56abxL3McJ8GSMkKrBNTZ9d3EPM7uj6NsFTfViL3Fmr19TkC8o4M35dDiGb4",
  "key15": "37UbdycxdPw3MgFsuiG1xSgZowp2ZRYhvprZPegnuM5cenvbKifuuegvx3jSd732TFLvhzaGq8N6D3sBnxJJ117W",
  "key16": "34FdeRyr7GR6AbW4TG5HC2wLQrFbBpDW1XE8L9XYAD65oeusshZX9ivmYvvNGzCLv6uBz5c3LhMpnrFooyXoo6E2",
  "key17": "4ryq7YVLHxi5rMLFGjsBkoQQBfzHyazxFdfV3Gp3tvXzihAKMKAnNqHjboNgWbzSpS1UrdAntGVAna8eWEgShR4n",
  "key18": "5hB5UnTm57LuWFMQ4xWVDZYKoWDGgAoJyJimYSdLC1uP1P6HqSQYqKc56mf9opv55ahm4M6DHqMhhytrXt8mVo8J",
  "key19": "2Vt5ap1DCuEkixdSHGbbJXwwghcrToDmukW19g9xMNKCk1joEEZmdpJwFtfEWcQ1pHR3TwCrZC64sy35LfrQPagC",
  "key20": "8jj9nirsEf8BJKkAdGv5CS91Kv4xnyvM9vRfifavjEn9Kd4Bpu61Z6jwPxQ1MqqRURcAioxnjmwKA9VLcZefZhx",
  "key21": "3Pf2PjWZxHRMcHi23KHFzCg6ejMv9bzZRVG7MCjEhc9j375AUSkv9gZjNy797Fb7KkUpfHshHemDaULkC3CDrpMj",
  "key22": "5GKYtY8XEpfgyuzbfTx3zRKC5GC7xpE9vQeAVYhowVHxehEMcXANA4AZQQWRNp3NB2B8BGgHhsRf3dN8qtazHpjR",
  "key23": "2eG5xatUoh7jC3yiwp6xnfgdaQBvXYnvGTFBziCneJFkDbdndCJt3yqxA3NVJrohoUAYgt4WuQXih4MPKAfKu5xy",
  "key24": "2iC7xpb2SLhahdvLhXaHcK6WZKbRTEzsMmtinSvjoDhoqUrZh84oHPx1UzbBDFEQtJCvwRDAQmEZyzXnGnVDRZGo",
  "key25": "4RceLorUorpPomp9TrMbqmVbBVgk11fF9a9ivWbosXrAVKTrEbFDcD4pmTcqHi2BHhzq14LAC8q6p9tFE1hs9YZg",
  "key26": "8yYd8Z9JeVUq6VGH1ugs9oJEAoxCNTXWx4DMH25fUFubLpfGve4WRVN79D31EZEardtbgZFgJqMxDvg4GFcZiMY",
  "key27": "392U8RBx5dFA3E6qYb1hkHfa7dNYCnw7CbLbC1px6EFPRG8Dst3MMVuePXKfDojZrPnf9v9dpoPMMm7fYSJS2SkQ",
  "key28": "5nhmu29bVLB2jgQWCKec6LXeyezJLyeou3VUX2CuoEC3Lv7nREejW4XYLN6rAhtZ5vbHQKqKRD4NNhrD6y1KBUQU",
  "key29": "3EvYDfVyeN5xJetTjTXXW1RaweyXrMF13XhwCYvaN5JBL3WbqyKgM5y2nRsDepuJPhiwvdmAQjVDx4DCqruVeFU7",
  "key30": "2ZEprMhCem9EdwFrxZJ7NAdU6otqMB1EhBsvUTzMgvup5Tu2gqT5pjEXV27SxECU1GTSKrwHyYaHTjvewNhZUVKi",
  "key31": "31WGCYL5c7FLMzh5UcaJiJjp4TP3skZe76viudBg3RcGg1LF8LWU5h7RkbA2tBebjQE2DMCxmNxWRgeqSGGfP4ZU",
  "key32": "22eyL6QUsAWs2YrCz1nEv2M6Bd9HiH8fMivvrhw4mzAoafBoo6Bh9BCRvJCkNPEbD9psUvzDbZxWGcwKitG3YnZp",
  "key33": "3tw9VvUbVJeBU8i2ZgY6pvBGp2wVCmdNzoBTMiRLnHYShfSTAGA9Q5i5hJ3D2pD4a73AtMCnrBAAkkF2ozcjdzYR",
  "key34": "32vqVVyKZshWmWH8oUfizGieBVokV2daqHDqNeqD231bmfWD8cfKQSbmTYjxxtrGa8bAP6mcX5BU7QYDmVATBg1E",
  "key35": "66NvS4QkTG9ogmaCm2kyaJL3wznTMNHidrZJZpZF4WQK2Z2a3rAtpRbUG9DUG7BW239RmV5Fnq9qgEdZYwXiCf6V"
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
