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
    "3Air5qNvJdQMecVraHxULKb61SG6pF69PRsxpmCYxG85WuJu2CtBKifrd2AN98vEpkKCnGXvpb6w7fdxyhugh7cW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2SvC2BmyG5kTKvuwWZ8QPRFVpMqVcwkd8AvukdN77umAE31DqpCsVp9mFa41Ejwr1HUtoAAR9g81gQp8j7LB2mgg",
  "key1": "5AorznVA9ZCGN5evM4UNhddEBDZdz4jxnHjKQiaJ5r7WTm8QLmfADCyCSPrtN1FqSM7rZfAHcvAGD7eoFsogJaG2",
  "key2": "5sDGzkE3gWYvG5fFSktxc5yApkDrbULkQyRYt9MVTCWxnGbzwVJx4qL9gpW2HCQ4czFg6LMf1DzmsJQnFhCxXc4u",
  "key3": "277jBJYSuWYJPbn95tDHfqZRfw4DDQgWezcqWVbXfMfcBksrcmyv6PMwmBSShknF5yWsNV7BZFf5UuXRPdYbbVdc",
  "key4": "3mMVTH5tu8a6piZvLvHmdp9CxbEoB2JNphrLB817PR4P7dNKZkcvDNs55H4jcztjxBW8pAVDDU6kP2DJgGQ4oMxH",
  "key5": "5X29LGXWbZrMRATQjxynm1zwKeuZCgrvuCsvAtCqQwyvMVa7dfxeB9kqFFhcxFkqxjcLorneMHABinaFu3i9BaBc",
  "key6": "ZX6GFQcB1U6s46pqu7oG2J2JDLwMMMrV1upjnRModeAJeTcPj7N1XkyCRtLJ3oGUNQpcyeqJ5vRVDDxWQGXdQbU",
  "key7": "YKJ82h2vomcyhZcSka5QYNcyeqwatPg2QPY81QRZYJ99i5XmzpCGMSFU81dtZgXZyNcHP7PWnLzkK6EmPrHGdQb",
  "key8": "2SVhKBV3suUxyJQ1w7vBNG35CGiCXc5TVNbAHnXA5PvdFiWwmsP9WN4xQKKVTn2CJhfrFHYod2psUTfToJNY2wrh",
  "key9": "4dGLhc8vFiK91zGzWKy7EfL45H2Eo9Bp2fBS4WYvXVeLZ86XoZwN6uccs2ChASTzmMKnjoPjWN4agTw6MP2JYKoR",
  "key10": "2FWi3EkYjwJZPpXmixvzuudcEMq7aDNVt2eK9t79PjxsUvifGQKFKi1yxVB3DScBAoXW1eFjRrCyac5tBctEqk2H",
  "key11": "3eghtG9FGFkmSoh1iCDS8iKPczwYHmpCXRLoABE5LdU7SRw2u3etkjY6sevbXc8rUVC7SaL2ZuhuCG3ttJaexZFu",
  "key12": "YMSQ5MtSu1HCJW9536NnfUFEu3psoFgNUaWAE2RTUigiuHbyXA7UbV8DGn5sSrCTszNMKvNzkdHDkYmQHSShC5d",
  "key13": "5LVpgvNLWkrcHxEzJNzyQacaLvzhHgugAVRDWf4aRK6W6PLUPrKw134BmLTsoL2qxtRKBrzXFAjxUM1aPPNkWNHQ",
  "key14": "wJkivMPyom6EP29svn34dZs4kTtjhL2SPQYEiME39mdDzFGiFSv5vNATRqPwwSJc1S1fUDaeJESFQVvsbh37GiP",
  "key15": "4NpyN8QXjMEd9GTuF3o9hkQJe6wrcZqKu5Ryog7xkn1wcuUpUvSgtb3x5kEk193x6Yg8CtsNeMHaxeSnhSP4tQt5",
  "key16": "2UjGzDpGwbet2bdEdRdetiGYe6vAsZMZANHnftao9WdUKcc5Rb5R5QeLkLWns5mxB21EH9QHG3TE6WJiSvM6TeCP",
  "key17": "3895unSLjUP7Pv2jXWEJeagsnBM2BmQkmLCihGEhJrX8dzgho4v6ZdZLfswXKJRjRXhQPk6QYKgbZtu5Fi91HmmF",
  "key18": "3TNbBrFPU377tkDnaxqxSgKbjDwbpTXUZKfnn22zHJURK9DNo2xSUSCbSJeJDDiPhTSxDYrc5LcDL9746wXNkkXs",
  "key19": "5eEM7KgzfNiFyTHJwvMG5U8gd49sf4tEzhrvRwAZwvL2pAoKaPcj6w454HK9tC6gMSgjKBj3AKzzfrF4odunRTxw",
  "key20": "3Jwyoyvvgm7BLzBEMxa3mukyjcYf9RrMZCqecFZreuwHWwnEFb3yHes6WtDqWfJbY9KehrVs1d22zqZTfTH9h17B",
  "key21": "63trq7rduuayjMvJi6zi5pg4VomTTo6C4HVaFLT16jvvuYqVLrky8g69QVVLoCAERQAoDKYXrdRh1mGeHeeAvL2u",
  "key22": "5borG2RnaHKXfeVwmHxN8yGyeH1MQiH31bzo8Ham6byHVkNb2GdBCuroqmCGTVjt8fLvUpB4F4m723SE2xWrdHj5",
  "key23": "4H8pojCtSdSAAL8STppXB81TyFhAjuVweB1MM6Kzz6iVFUyPJkNhDjESiFQ5SNuwydN6bDsLYvH5Gwad3JwaKUmm",
  "key24": "2kMPdRdTWw2zekWsTHSk9J4RTgDfvjLZDEZmDS68iGtJPB8CDX7jggMvZCzA1bgjjhjqedD1erj3EDaKMhYzHxEp",
  "key25": "5mN2xtXPR1FjfZ573ExJ84J327V59qPdzuFjmmeuuh1exi55FSMktqwviGJ64has15nN6GjiimsDvLTMEJZVNKit",
  "key26": "KXpE8qj2YBkhJnuiiMd8X92Lhtydgw7mbBU4XohWqWip388XWwkLD9K3LR1QVqdYBhB1DJKRKJ5Nm4JGBxWys3n",
  "key27": "5xCJbwafvkd3gHCKewbuNUk5tqR5uZvdfRHB5qU4VAyNnSbbEWbTmKjqVYwyxG8MvVhpRKMW8fha5rAQU5TYhkHP",
  "key28": "3bGSC3uWt3rQejLRENxjopujsXS2xy3KLgbw478fau7nGdGYgM1Pyk7BBH93geTb8DCK43h4LKkkAg1fQ9jprmXT",
  "key29": "3fvj8GRRuSLMT8WbwxLH7MEhnWwEYuNvYtqs7NP4C4dd3sRzPontonL7gtZR5xJVHvQntzkof7QytDJ3PsD6hj4b",
  "key30": "5TEnY7QTbmVwTNHPw9GtjgKmnKZGzoBFa8xJtdjY9yFZKFrMASSV6zLKAaGR7AYLeqinpejNhWfdHdcpPP3ji3zi",
  "key31": "5PrNaNxirtuFQnEKQoYfr5qoCsoDfhH5oSEBKWm53e4wZ7cpttq6hCV86G47UjfPcREUVvDBaHcNgQRe4tS93vWM",
  "key32": "2bE8WGNYrUUaeqLUzPtVNkPVv4kBsagUFisuj2oLhfrRiEdot14tQ6NZE9gsWngzrxmbkYXQJWmuMc1Wyy68r6MJ",
  "key33": "2odj4fkTSsiNTSjnP2aMnvAduAbp8n3FEopKxfY4ufXres8tbo6QvwqLqQjW8fC9xZxz5zLwMydx5LmkN3RNXrVT",
  "key34": "3vCCrxvaHan1wYbftXDzMSFnPM5wwCA18wn1NHHLYiEoDhjrphEe7hY8KrBAgMMN8EDeqYVmgYiucxNAF3T7FZJ9",
  "key35": "Co4uFaQKqgkAH9vPhuusbyrxzJy8953jCahAT8SCBTGJ27utFkWa8Nuxf2Qub2fBg4zzC95Z8CPnbPXHYZ7RcbM",
  "key36": "TjsJ4nZwaat1F8L8PXi9GTBhk6XrSuqUAhN8MshDPggUppA3c3ZhdvuQMXnrUZq8eTEFFfNMJYENa6pY4o56xhP",
  "key37": "3MEMtr58yjbZ62MxJHt2NV9zxLifWWvfuZFKzFCTggSnN5QPTbFuodBFW69dcqLzx5iGsDH2eaBpU9MS6cY5Pkxd",
  "key38": "5pBE5tP1DJtFEUidaHLgQzy9b8GxGwRprTiftgNG2YgLJTDEm4ELgsoJvjd7xGFMq8B8dPAPTSLCWHbTYUgUjPgA"
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
