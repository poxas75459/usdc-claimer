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
    "4uKT5CmrPJBCu8e8ptna9TvLC8KvkphfswAkXUPc3WuBKDLDNshL1oqEYEWENSRq7GnBkuWMJbe6qyaffERVVSNS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2BtN7GpKo3QZqXCYbNw6dwG3Kjnv1x5GkutRKXEBWuNpoaPnSuvo1MhtqYK9GewauXWBMoVwJMZgBt8UPXRqwGv5",
  "key1": "2XcjBxcPwN5eZB6e9qdRHcrAPWhUYtcuqzyx7qs8G6dezMNmnYk1t5HHM64mYJGiW9boxV2YJ35FVYoMEQ8KYNXG",
  "key2": "2W8Gx117NtcfDtKnWrGq9LCGM3sAgLhJMWnGyT4hmgCZwF125oEgQeXtReCZuRUVKL7yYGvrqdyc4dw6D5SnuQ7z",
  "key3": "5oGwtQnC88ZFcBf6cu3SGGsW1teTd2se69dPxwf6F67AAetZLsGRTEXwDuHjuW9shz7HnSt5rYFEXCWUhD6TJai7",
  "key4": "4eSHq93rCAoyoUfhzXYSJAm2VpmsNgerCY22uen2y5Nb5JpgpHbmUFWBGAbA3izDtG4g7TNaY4ASrmSn5sfepjb",
  "key5": "3Ftj8i8prrcavqbyG3hCgAoxz2NiwdS5m5vEEngxK6hjvNE3Q5Ewem4YTwJsjBxpN254obDzbf8wSdPG3GbNWszK",
  "key6": "2GJAwFG1nLV1KRnnhZv44PrJVt7aQWs2QPDnRgkCkNYXUreCreb3x212pwXzrrpJzpeEeBHAonhbz7HwNefDY3HD",
  "key7": "6xTVXSfXdz8Hqor3NE5TsAuaWpkmCyVJLLfLCt27ZZYdQzq3UuJjtmTbyeVfFW78chaqEGtR8ExogMEMGQuKWoA",
  "key8": "bWaefPut64QUALaE4TmfZY9v4MKRCe7ApbwSDbyeYHZ2octGDN2LDs7ijsqjx1vHrjDau9ybvhMLKhgCcaDJobK",
  "key9": "5Q355MqaYQAvJ6e9Mkbab8WSgBeZpnpXW1ujtKkHCQWutEVBAm622J66GqiGfSd35vnwsVNPdPsN5EjXtySC8tzJ",
  "key10": "3qQBA43vkoPsevnLXVo2wGSkkPpoUkVREC25Yqc1BQmAd4UmFPhjuLBKSFHLzcQa6iywmbthG8LQS2eKEf2rWmGU",
  "key11": "WR9wiHzn2mWGsuKpFUQHfYCGiGAqniMqAjizNuNZsTzMEFHiaN2Ws2ciCFScErS5ESVWCXj3u8uarnmHGJEMqop",
  "key12": "2A9LEXYYEPJGdwUMES3QdnLWo4kukUvkCa7hNBzLf3HpgUuLgeYgXe9do5WeHBqLZcEBJssjC65WXhg3BmynzKUD",
  "key13": "2WbTbf91s7ruFzeJjwMr84GLXbYSWJHVjnVof4eERs4hxzf2iXxygXJuPgqv9eQ3NqBJyVV9SXgsRK56FZzmZCQf",
  "key14": "5aFfdg4EJWMQPRVurMNxcGGAhiGoyB9ckSsa3kKKefWJ4F5r1h1MMMMDX3ehfw1dhuDk2UtgnKr3YihEqN3wTySX",
  "key15": "5uR1jCDJyp7gUbX8ZnAf78hrDD1M5QPbmt49EbTGZ7qwTBfWZhWR2HG8pc1irXacaeqEcV322rD9NU6t7rt7RUsC",
  "key16": "2DMJHxMvENxws7X8vTW6b3bMU2yqpgMjii1QtM8QmzCoSh41m6sEzZNjtZ7ofu8tVBASFAuHV5gF4enD3FB4w9PC",
  "key17": "5zDatHeSxQUf9zdDuufPYFdXDsyhyV22pzo9nzqmSxnLayMe9wddN4UeSNw4es2GLuBaxfYRXMC9kozhe4qWCWSH",
  "key18": "27s9kwndnPpgYmeUKVTJyJxEe2Ki4tE87EiWiPRuTy4AccCxByZVULjBW1xsFF1LY7XrV5QnivasmADCHXpXp7uW",
  "key19": "65Vu3PitpCzdscGLkz19cEVRZLYkgMVw2LtsqxrrDoWTDfCumxtJNzsu3Xmu32UZwkxxjhBUjzfh4yf1oVG2qKSV",
  "key20": "5M1Widk7E8TgJx1jfDYbeSi571uhXkZMXYHQXE3snuxK4865HoQEAmjipLj7jHLmrCDrCiK68U2tnR7JKuhR5N4T",
  "key21": "5X8gLKoGeJMzL8uAWdto3GJfghuLci3mf2WMRGHiFeMisuvzmJG6ThmQ29fJhXA152bEv28sixKjR7yXgu1m37ch",
  "key22": "21SJJZcogXsGQTqK8dLorcUM9JdVXkqawX6JaUVN4ywHtn2YFVv2wpxyZtkdJNkBndeubkMkvdPUVnHkz9Y2nZ3G",
  "key23": "UxYLBiv4EJSVY2S6i8Uejw6GYoSGQEPYPRaSMJsztfxTyVxRU6aRkFFWJUQAuZz1snfErGPiv4kSUE22gU2BnSQ",
  "key24": "8HqKR1eyk79d2jZph8vbGiR3XJTk5oWTiim159LgzGhQWwLaxjZXwXY6skmz2yhKE6jMHhNTV6YkVvhzmP8URUd",
  "key25": "4aVqyGwYGoqjsXQH79L9CWvxPG3AfNeDti8j15m38KAJtMaeicY93XMpgmcE7rvcWEJvhBGhbHmkBWWvQLukUn8W",
  "key26": "4HxuL8gH4smkqTGEsjqxNEnmWiP4hHEDMt3hVRVBS4vKtGBzCJN9GneUuVevQ5cK7QXmzoh16iLy9XzgSpzcxqmP",
  "key27": "2UwSKaauh2w67AnXUdV5RktMmNRRnLwvR9RZaKNxHEG1GeueSbfpJ2z8hWiVgSFq1fCggQ34iezr6rwVSLuy62Fu",
  "key28": "63R3Dremc2W5FEfARgK7M4tvxke3z4rYUePbUW9jgZ6YNV64CnY4FrvGH9yoP7jdo6bWeeo8dCRCJa18JjY49j5T",
  "key29": "67gmqCYPCd2ts9NQu6zFYDzZpkZGs6tk2z1b3pEP3k1eVjS8bL6WWyVs2BzEL9kKMpqFBxDSAePYAo4SKPND7rAh",
  "key30": "5iu6jVhYJhT4zjNov2EUcspmu8Y9R3op7U8WJRnY8V874hMK6ap44zPAqppdeSxVXdK934Vkt6NszNwpAEecNxgk",
  "key31": "3wbXuJuEgs4E1xUxKv8KkJsZfqKtFRh9DqTzx899LBSP1WeAirizm5GAQtctd8LvDm4D5UhsP3FJSxa8oBVwvjSB",
  "key32": "3sDoZz3J6CggDqSh3PSsTinmgLiX6hgBn8FNTzMMDZg6m5Sgk84CqjdXJZ5ofoTfWdZCHoSXYSxGe1A5233BtiVs",
  "key33": "3iAhfEmCKq324g5f9nKabTLJqaVX4BEnVrr4pytTVHL96Lucstvfh78Tpy4qFDM7sjZEvFxdKoqW8g23ibw7v67G",
  "key34": "5F5RsX1v644vZ2MH7DnX2vjea77z8p1uiEfJqmTAoqqVuiYMUhbP5h5bBftP8shbnsd12wd39izvJMqBR4GqnVch",
  "key35": "pvhrkuVVXZ6mBkV2vpXW3pfVMhCQSYkYnYvfQWXiPkUzG1tRkZ7oBB1nHpVSd8ThDys3eC4cqs6nmMboZrmpgCM",
  "key36": "2CQVnGDaBviinYUYq6VrfYyUwz3qbmKCnXNCJkThhF5xKBnLvegAfFA5WAH2NCwVuCbr4FWAtq1HNJQsQBLn6oxu",
  "key37": "3HYraKAxqmJeBmLqT4aUJNMQTr5PD19E6d9YCJcSji1dDSrh1uv6T1VGpiQK5fzsu4KEHGtHs4ZyJHtvPsX1msHW",
  "key38": "2YgvGRf3AGt7EZ1RkUNtgsMkrKpin1QQ5qMU9DiSAwTTmdStriWNmUw5xgwAcuzGgu2ysE41XDqsQ136zwrrGCSG",
  "key39": "4htmSmfue3ZgFQ4wmdfd4DdMhwyEWxcmVUCVFU11fqZVAvhWi9agVMambuwaCHjJVj85yC1T1RpHE45hfXEKdK9g",
  "key40": "5Bn1mCb7Jabw5VK6no8b8RSzWAgcm8SxanrzESgg1yY58JvQs8w7d1rzPvtgCY7ypMkjB3UPbQsDvgRuH5MBeyik",
  "key41": "4DFXaMJbjQ3Sh3gHULpLhgspAXm5gAkw12LbrqECgZ55XBmbKBD2vPQ7nAeain8KtkLZhUaQEhSTnbfPENATG4WV",
  "key42": "64VKuqe2YZRD7XTeiqvRwCYzxNfmRfKserKNPG3Ew9VAuvB8eBbp1fsRqJaALT529GojJZMzn5515tikpkpjDc5r",
  "key43": "NT9kcuTvdaBHcP6jv5v5JHsh5A5UwmLsxVN92BD3Hd2gcwnZWBc9gCNTZuHwRrMEkVQZLHAqXdAiqV8SnDztfz4",
  "key44": "56c65UsX93XVPLnsr1gWn4qdqJYV4BtcAnUn67VUZekyEFYSU14EPEtWwGtJmDt5BHcZsfaRx9vxWJMvDx5V39du",
  "key45": "4WgahEP4Nj5W8nigG3xLBpCsYNLGUY7kPfmnyyizNzDbDGSSPr2EatVNmJTMnQfnmwtnb9cUE1gL6hhCNRJygeh6",
  "key46": "3F8VqJrQppD3ZVGCcCcXEtiBGT83sYuh3yEs8uUDZsv3uoDgXSFux5u4EwsBaWKXRYCCi2pvVDHq2cSh57Zi38dQ",
  "key47": "4uEqdbsC6anDMVN5TWiaZh7MVRqCaht88jUhkdz7oztpM4LXZ6EuEjMpQHAjJuepksDZ4hzJdhvn1HX3rwk9xGXc",
  "key48": "5PpcKcyTqi27qStXFirqGBwdktoYfYFy9TqDBzui1pKhRPZSZXoKAfFuUuuHEvvFBPi5NvieeDhbnEmmxDJkQnZ2",
  "key49": "2qBpiFEA4jYRJLUk6v5ue1jhGgKbvsyzmNu2c1hsyMGC6hfymqNGVLwg2woH2gqRnpiXS3h6dBsCnrmQGBDiBGUW"
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
