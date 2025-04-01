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
    "34q86sutzhBA9o97yZXziKevLwMb3SP9RRj9hPVPp4xwX7QDGmUzoWNPHTTdMHRr3Gk91LvuZkcr4JbqLqC7sWG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "unN49UmsFVHMj2cvcMABFQKvnDQ4VgCiqdFhmPkGygTPHumPgjHo8ux1PwPR4YTeXPsMgmBFjpLnRcGjULCmCfy",
  "key1": "3TioYmDKq1r1pP5wJBiieDSLKjZ8KkVtwa5DLb5pb45YpFM9mtYfbLYeKHTyH7FfpVjML7vHVpTdgo1r7qphb9nx",
  "key2": "5RmunanweT9SQ6PLUiFJeDjBMmfYMfCNVh3vP7GJN1MSqFwP8g8th6Jb43aW9BAzXnETUPVac1LoQUL5R7iphtNT",
  "key3": "469xWo3w4R3g2nZnFa1d9Pv16geg6wMbMkxqRNmeBFtCc4xWHefQj7qhB3qeAvSx2nX1NqQf6StbDwXk5DDxhnHo",
  "key4": "2FM8BoyUdPx8kJDX8enhVY9RqYgeJvWSAJcHbiePrdshVHhCUm9wAfa7SarcY7dZjspKzRXa8ZPLWPyTHFoizWvu",
  "key5": "2B7y73JvFXrSV39QzJqFtFmmbkgph9CQ7HT2vN5LCGPj1coKreSCaBevaUvL7pLGyhVwQBNxA7Hkzr7zu3AroZTE",
  "key6": "5DxZ7KBCLWBXPrjb59YoJ9ibcoTdAVfKBRajSQcUsYN8TVRCAmxMEGL7W6oLsRKfrmstLpWSa9araQy9f4Wc4cGL",
  "key7": "Lq2dgibEzM4ov39zPAWbcpJ1TboBvFUkyC81sVySw83hn7feQp1yEVEzDDQpkEqLVCs1TMGGXKAG6JpKgouBAz8",
  "key8": "39Tyii1FmgGEZDERJ3LeSJxg3WUE49E5gWo8ihrDQGNM7aWMJh33dKiRqtvoHofD9zCxjy27R8sTiumoeNpbgUz4",
  "key9": "5JAKAUdbC3Y3PhzCHdFtpWNMNpzeitaJwtrXoSsLPicuYeHeJzZDf6bw9rv3sufpYHi8zH4rEDcNisDCfEx7a7o7",
  "key10": "2WJQBRPBNKVRZYWKxvmNCQFjV2oCg1EtFPJ1wNrZJwJq9RG1NUuZD1oASWV2vR2GbaSMDcWUzAh8q3jdayHqUc3e",
  "key11": "278DNZXCDG3rxgyqBQiKtQeQ2bz5jXX8GM3iTY7HBCqhQRVFsdn1Gw4HigBtMWwjt36BAVrh25pa7MG1UhLpTtXG",
  "key12": "5Fq3u4Jc9BjJAQkd9G2uBCoQdRVFX17ShxoW5GS5p2NSkpRBcUYsCEF1HDLgUewPz9ta6hpnJGbWhLnAqcA6ciBi",
  "key13": "4b8fEgcyxuXZMZj6dbMn9xKxZzBBHa9aax4gYJzVvswcn7n8q8MaTqMbLyw3qN1dfxNyeMPH5keoDXf6DSbBJN47",
  "key14": "3Ji2qPZuv5wERnZrwizkcpgWBJBpMknqg6taLxUdtD9yzkijHT7FDwss86v2D3JTqxnxQy1admZZWmwCuRjPaPbi",
  "key15": "2LacLiMzYk2ANN8pj9g3NE4ZDZxSg5o9fsUWuAeDs7LTDJsvfidZVssWQ8oYqNyL8FPfwbRTrxnEJhyYpHw4hLm5",
  "key16": "4fhHCxSuhzxyAyNVD8cXFafME8VpZBvucDxfc2t3pdYXkyfNP4VpXNLLCprKgDWw3n3cSWA6q2X9HjxzSj9Y8srG",
  "key17": "4jR2dKc56jMkfd4vbcaYKCtDUTPwTqnABBCJ3AXLFmcaX252CpeEtktTHvrjfbhbizYTJTmuTCeDjxbngFxpeVPw",
  "key18": "4T9WFFKeTbZBfTdbkxCiY3RyNteuR9Bs7E5stbmP8yZVGVEJw92gr9R5GipvaY1jNL6mBcQrpZccuGKJJymm3u3X",
  "key19": "4BUhtgyTEZDZNRTioexEcY45Hav5XxboGt9eYxAjScs2s1kHzQrvLMo77nd9qiHKnG13bEtHHT3k1cAb5oErbwaT",
  "key20": "4uqJeG99au1FPFXuiPkPKDyDNK1nQDm5mpCn3Zih6AuMsnhbqf64wwWwUjCN9ZvDHK7CMKDvYhbNsQz69RpgpSSS",
  "key21": "5VdzAC5YV638EAQour4xv8uxocJKtpwaezAkszFMjNd4grAfyC1phdw28YE9J3vMqwdA6nmrgQr8mzAsHfHzpRJZ",
  "key22": "FGemVSwUEaaomxftVJf3YtHpbiRM2jifgeiHr2mWqpY1fpLTrD5ERqoMq83RYokiG2P8swm82csk6rwjdWcHx6b",
  "key23": "52qTmywe1SsTox3ktwukjg88abKyrBrSSH24kLhAYygmfXAzsLC4UeCjTxd6rSWYBQ7GfY32UC1tqkmBrxLnjXkN",
  "key24": "4jNQmMoxh5hQnir7Wecrn6CkB5JA4QfYVPPr86LV9rarB84WjETr66ThNdehVAHfSY41dCF8yDsobQ4716hgAAhX",
  "key25": "3yfutojdmcBp5nmegf2uU2z7Kysdkw3M6NJRqbJxxLWwHLqMA6rnVAar4P5uvrSNoezC5DMEUjaHwHcsvahdCpQJ",
  "key26": "21j3HizyYKoJSTFhxpmzHYfxe8xFm3p8SSSNMeQraHt9fxCNFKoFypsbBSvaSNr3ciQvxZwGqaxp3eCah8ws6LWM",
  "key27": "5ezM2J2yUfdX9FQfrvBYgqVCxGHoRa998uYnB5jGkvFN7waTMQVe5Y8abPBWJCvJ98KpKcNVABSLnHgK5cq5TGJN",
  "key28": "5mDK4iSrFbW4NUZpoiPTVVecyMMMpfQ9UkUQVkMgRxGmFbcrQniCHYbjVUdGQKYudejfKq3QmHXF4xoe1pm5mwin",
  "key29": "5CztiGSa3U1H6uwrrYf6Y7XCKwpMkCRA5BLBrMhNPsJM6CUKedXTCe4298FQRNRmvqTVCzioi184FmLYVcgaQwK",
  "key30": "PVuUMoCnbgte6yFm6HpvaEJ8eh55Gov91ZWhzULP443d6tFaghYt25ezvxGug9nkA6vfUxLwqHvu8QnA2BWjjRr",
  "key31": "2a35JQ4Ac7b6AJNMYr4frk84gTXPntXyUJLpvjULc8ArGMXmyV1iirFguCKPF8FcWigKLWBS6jPnjN6N3rgTZ49K",
  "key32": "2rxPM3me13M3VaFnSVrV9YnJ25CWYbN9cmcnXA1UzVWEnWkM93ZB1zotmvMiUUHdBVFZ63KzKRHYsib81VStLsbc",
  "key33": "2Um56NG32QwfmJRL43TiuXZZBs3XuNqBAzgMH7rka84eT1zjKZR2sAcAHuH4cNtnLS27mkfqwPXPrTRbwWHcyYjR",
  "key34": "31GS8hHQ88gJ9UjZ7kgLGBr4KsCwUWd7yEjzrUq4aAEuFijsprckFhX54VQ6a7GQTWTSEbdA1mk66xdukpEXBazP",
  "key35": "2Lqq6PY78FT5VtyfGN5ZcwJNafT3SFqV3pNJUMPoen9FSmqpUiMQWRdkthMwz4YTnLZJ5Y7AxN2WvBEwzGwfzFUx"
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
