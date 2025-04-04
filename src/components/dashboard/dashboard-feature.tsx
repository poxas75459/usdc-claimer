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
    "55NUUULgfu7koroysxGq4CjHKhnBdNGbhi29m5NJTHkF8ekw1BcUFyRGGav7h2MW81zgkhqMLNVHcDDfMV9VtyLu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4gDnetvGWvZ4UhD3UTHJhtDkJhWzeETdFETrjLHB3NaH66zy55G4bF6m3cHzQ1zYvFXu6SdaZz92ukfcPGn46ycb",
  "key1": "vykeyH1p5g7AZ4QBm6ygkaR4ggVvWoYLnmZbQWJ9cbPsccznNDgTUK8348yT3tapobbRFph93SjebY1XMUWv3JT",
  "key2": "w3c6XE7QmCJfwrNL7umqnLDtiLmwmtjfU9ANfur1raC96KGmEWLLXD2JRuK7WvPd4QzeCw4tK5J17UCDVGrsUkM",
  "key3": "4XkLCpbuH5t6E6UFQ5yutTxf5n4CZ1xSXzH9TGz5KUexCJHDyf7vfQz8e5irh9HGWwEUpcGNWSjywhA5BwCW2N2F",
  "key4": "5J2xnFnX3WzFw9i2iAaTH19cd3gou21H6iQPFiTf9J7nKatVR4x7hDda6S9nB5V5qk6QADgLPf2wH7nU69fPymGW",
  "key5": "PYi9X7mevYAkVaTBguY7Bnmzt71LCzkPFKFTURRPzeA895hU4298DjYoZX8uBys24i45FogHd8QPayJkyw7WbtQ",
  "key6": "3NkKRXXi3MLBF3c3bnMb8FAX7JDanNvq7gMWgcHJzLAawdga5mMRE1aEAqTEBNiRVXurbGYUbYQHdSn48UdNZDf3",
  "key7": "3a328gAUJPEN19Ng69u8rVeWiRR2GZk641huTsyQsNpwZ8LdGBGKgw7NpFQc3rMy5VhMz3otKw2fmN9bpxk7n7oY",
  "key8": "Y6wjBoX8nC4LfiBWz4prHfZJw1A7J32A1EUpbBV3SiGBrHitEZ5Jk2w597sSrEMeJjRfsXBE7dBKN2RyeGXZyg9",
  "key9": "2hg1xkxHjVKSihLQsahadP3QTkY5Eirt8KtTX1nzGT2CBpyggY4nYJ3LUreNxzoZ7XMsRqZQx8iy1oKVrfaTPyH4",
  "key10": "2LMwFJu5y1ptNRzm1U6V8Yhc8HmECBSJxaMPZtJAaFbC9Cy6BCAopU9wmgw1rqLAn1rzkBY1QwwqDhv5zjV4CRF5",
  "key11": "UnzsnumherwUnCxiwCGuCi66poq3nTfj8ykCN9to5EecE48ZoJbyUPdRCiMRntpkhQtmckbEnUPEKtCrxESqKkV",
  "key12": "2och7sQn7hdiRCSSFtXQPCLgKC57TFjR6XSSbgdN53xjJFzCivcUEPi3Gm8KPj55pwBDKuEZmrysjKmZQ5jZijd2",
  "key13": "4GPxwSS3HYQGSfkXTm4gFPsCm6LS6NdoxQra8nSdhGE8wZzxyRXbJW6FPiXmuhYmz4b9gAxuGAF38vfVd1nNiyZq",
  "key14": "2aeRzHGSH5JAUHwUHdRjnzmFEC3HF6Hnbx7rUUsBYrZh6dteGoWMDewhEx7Xi6soXjFgHMHJu3eYRUivLWPQqnjh",
  "key15": "26BR4NatNUt2A6Ae5yrGYjYiNKZjnpuFHUcM6zQWbGFAs3oZ1vHYkwLCecrziwrxCSNEmXYK6EFnnA3VxcyowG7V",
  "key16": "3gkqoBQTSHQ6A5KywDSGvc7L2554EiRqSpxPrLumhPXrFsqKT9ZeBYSYRe8PMhD54LsJjTKhdSMLvTD4urU2v7c3",
  "key17": "4Xhbfsc1VjCnzZAVJ3AGsMaFFqhjbKTSb9UXeApLQrv4oEmoCLQcwdt86JwvxgMCpwdZGn6Zo8wZwpnstkjwsEWb",
  "key18": "2uGbjmC2PMA8ZvrjhhTAmDyxMTdjKopf7tmPVwH1txZxLACVM6GDUP4iUUt7yhkwMajMxDtViL58as95m2YTPaa2",
  "key19": "xrGtQrnfk4ibUaQ4dZ5BYyR3Ay4EQKhWkV3r8BPhbd6bAqmpp5iPcbddRjo5HF4qxgmotLyZCjtYhjMdKQzjF87",
  "key20": "chFQLH6gRodzsVGw99yAudSU5GfRipZLUQvzFzqbkJwbTUeQL5Q6BFH2ZaUSriNgwTarYwnphScRWnfwAGqKJr1",
  "key21": "3BWoJ899V35UyES9YYfFXsw6WcjJdoFyBNHbBB6GaKz7wnAEefSGrJAonzSH3DiPMHHXdK7P4iqtuk8eLWhK8awT",
  "key22": "eeoNTHyxoeYfTWtb8hv9JdY6vpBYTqBWA9pdoiYma7tDsrSQFBzDaEhS3pKZp2nxYzTNdsHsKiQXMLAshmfW1Wm",
  "key23": "59nVhuBqQ5bHhUboQpCCqqgRidgaXG6CCA6Lzyt7M2iM3ZM1ZEo6GztaMXMcvhmQyZv6xjopLXKpb94LxrP6U2FH",
  "key24": "31qzH4uvLhfV7u5vFKKt99JC3piVqihcsjRJiY6X2fLyZwwAMJpYzoHBMJiMBRYgcbWCgvV7hBrZq39PGS1RzgyM",
  "key25": "3CdEJLYCAmQnfHXv83FbKrK2zhe9rqNQcDsiybQM8AyuEcaxkZ3a8nzzQ5hdo13fhQfTmKgedzvCphaaVBc5K4Qt",
  "key26": "4P7vXW4mVLMt8UXKtwJP2DArUMmHMZwn4xqWbhHw7qwLtbTiekwtV3LXkfLoqfs54zAfGap4AGU1AMzXNHTJ6j2R",
  "key27": "4PGUnS6WLbRjsnWojzNQUzUVbWCHUNfq4GYPj6YBqirBZRtAp8RDAFTaZcTdP6DzRE7iSGnEKVEJmu1Ve5Jq1aRy",
  "key28": "4SHat7Xw8N46KvjPBmmR14Z6HuWbqRRr11qbp3DtRQWffjocd4aVqTLQdKrRwab1hzwH3q2mswA9DttWgpgEDFzt",
  "key29": "2Kyyep4F9UfgzeLGAuV2eAjeiNxeHhx4vdCQGUdnk48cCzbvWrucEDE1GCgx5kdLCWY3YPBYxm2r2gh1LLqNPGrE",
  "key30": "4KaVuTBSx7HZNAYscCCn7xN6QQo6yPhpPM887kqwFy2ziyuWvcLdAVFvkJ9VqFqxpM7yxdZWbSDqpB4P4QSyNstX",
  "key31": "4ZGYJDa3vJnw8Q1ZzuSbDocoFziCLaPrhoVuudauxazgf4GkfPV55Sm3KmCREjgQHouzcu4wJB6Sfcidgh7QCeap",
  "key32": "22s3X9mZRu3cEcdYmknuBwd2H4oXYvMm44jpk9nR1cVaJ9kqfYuqhWAfdzCxhWRZWwXsMm3tDbnWREzZAPWFv7s9",
  "key33": "Natx1KioMVMk8g8SyQ9eFQ6iXsVMc6mP9q389AuH8xkd2AAFp125NiLTDscjbQ3uwxoGtWgW5nkHtFJYVUxTRrH",
  "key34": "3k1HqhJtrbesAEHBMFK3PfrfUhrSqBKwfCRUmU88g9g28CRA6RKp7gN6yKTwHu3GqLHaTWaMJLBELbBQLf8qwKh5",
  "key35": "3nabJEFWvqTz1X9QfqARiHbxU1YQ785jzNFcgcjZVyL7KCBCK9d1XbP9TJQJE3SfsWxRPAaVtRaVBNPt3N6og74f",
  "key36": "4yqVJpX2qVNes1uKGhjpMxD9Ew6Q28BNGsMh8BJ4VNLDXTQFZcniuukNQV86WXBC8W5rXkHyU5KDV6NSdyVG1S4M",
  "key37": "oFZgxC3tscyjgZzYs9SMG2g3HVxKbQJguW4jLo8p4sterfo7pipucWw9MnvvaqeX4P59RuqAzaFb2h3Zo3in4ab",
  "key38": "65KoqtajWCqYLJoUg7LYqG3ZDpafRhNBxkKYFd7GWijf1AgQQ3By6ohpWRcWdJdk6hyaEQXqT6R6FE2jueBLmoAT",
  "key39": "3QLKEpLxzqT81wLzSKtQHVvtZ2Kd3CqwguLocM8v9QXSE3eyxy7KzkQjNiXbsVirfMehPDqWDeuaukee1mpZnzAM",
  "key40": "3uVJsEorPDQBF98CRnM7SwNyepiHTymEvYBDGivYemJz1NZ7qp5qnhqpPzBLgU6d6sQcuVj7MQAU5vEmEnKtiMH3",
  "key41": "4RzY8sugqJXGcb3L5QsmmdVbBfoGtRqdwHeoWCRT4KvsXT3m57QJCY8BQJYtkPz26rf4qSavNTA4F2c4HBR5LpCD",
  "key42": "34tsVMUGV9ReqDDcoQYKKCqrHUAHAEcRxKtwToGjM7qoJcxmrn1Xbdca77pshjB2DVjnao5jddEsVDVguwgA2Lac",
  "key43": "53nF9n9t4ubShKekTwcGB3fiR5sbuHn9YPwmg6XGhbazcbHUfW43kWsjwqyYzWkKdMbbe9pjht2NBH5H34XKUBKz",
  "key44": "3AgiWQ6nKBcok9ig3a3aUVNELd58GRnDe3W1kq8DSfwmMHr3qsxcF2igEhcUhD8XqwY7dwVJt9pDTB5MZK7DHzFi",
  "key45": "5KYkEcHRYyX6zT5WkMHANkpH5wQhdrM8NpJZFXF5f7DQQk1Jc8TwmzSpUeQg86rxtNfpnkskTedX8yHwaRxazQxZ"
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
