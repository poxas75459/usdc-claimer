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
    "4UqtfUyHrgQApRGcKn8ntsR5M5CDb4kMi6nCLwoeFQYrWowUCBtX77toZVXJw36HESBqnKiLdbR7bFbjNrpVbUTS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4whUfZg8QKMrhN8gUiJrwcPeQ1ix8TEtMu5vCWBJcjZdrByahBNKaXt5oZtcXgN1MPDBdWgWiW732oTYPTuG7T3J",
  "key1": "4FaRjUTZDiK8tKQ6DkTzifEt5JwKWKhSwniGx7zUj9Fo1EDjs5oW71ksnUCyqz9t2ok8JjZoBPCg9VyScK9BGbNG",
  "key2": "32Kc7QCPj3Fm9S2WVuFRU5VeuTrH7mEP3v3rH7w9ozATdVxWCLLfdkXi9qYacDTPtGNQnFBmoLwfpE4JMTdoW2Ds",
  "key3": "2fAx5ri5gcwcNoGJg4h9ShreJtmZqX8VmhE2CfuFdNj2TAJKLya4WsAuRg7qXHf3dajX5C5mq69xXCT4MiP3ghVt",
  "key4": "4j3VYZLfguhue6Rmj7RYUHzhypAAp4Rf73uhZWKCmSbRc4YP1QgLNSetTNCDoG1NrUnJHjidke3KxAfc79FbbwC1",
  "key5": "46hPHTDePMmufneBkWcuCu8begZDjL8t7QeWBE4UHX38Rh3V2qb7xgtKtwKTe3mANo4i9vj4qFuPoQEzpFBehKLG",
  "key6": "5n3Ztu4qDM4VLPG99Uus183axQ7xqn7FRyqcAZq4MhXEWm6q9dpypu2aqRcFpbrNt6NgDf31yjS1Ggp6J2t9uZXz",
  "key7": "3ofmkXv2LQhJHhKwavMBWTPngXdFFJ6ibwF2Nok2u7pnDkjB3XBTnU5zHHFgQpVuQwej2ksW39acJ9U5Urbp2AXL",
  "key8": "49rPw4VEFyhQjYU6D2UwFoC4oeg2oEXZ8gGAnquRcsjmPKbkgHtioWh5FUY36VwVWK6EsBYcdj7EBm16AJXPwWKE",
  "key9": "B8BcrrGpHGVXfSTR8zB84g7msf3arLvgg8HgGe9Pz2wdVnDkbBV8h2tkYcPhhutnFmZFFSPaJqYZPzQkv6PRPyA",
  "key10": "3KAZKnJWPAqrGPWxAPf5xD1Sf6FCAMHo3CvCuTTPiQtg1dHcgLACckdXzE5JV13GuRqpcYMtaKPziMMjhTi4Vunw",
  "key11": "H9uc6WJQhs7rbAv7h1yNQdBUjnm4jbfhWNbppfgfEYJhWNgqbdy1bJHq4x5A3Ay15vcJfdEBUezVgNkDRa8EbZC",
  "key12": "5BGn64pT9fbm1yt4BgZ5abazq5v8i3aqWiQ2jYXLthsiEiaAk2FnaRQcvptD6UCLqrLhzDdUHN79qMB5Sm6ctQzt",
  "key13": "3gujZxd5eM3Yts93EvzjXMT4Sj4QGLktApvo8NuWm3DmwAyY23NdPH3DKSgzTzDfmjhRM1qr6LQ3kDrThKVC9Mzf",
  "key14": "46enAxyKvYKLF4sDw1FkNkAsaeaEuuKzdU5DSSihZ1KGZufcZnxCneTb42CesRhvF7chUfRZXKEpB6m9ZzudyAzz",
  "key15": "2qPuXsKGDRfNAPaupMzcEGMikvpjv1PkHYWbqPmg3DLspmFYeJNJ3TNjQqrGa29ocqZRsqfSuiGYMfTzJkKARKFa",
  "key16": "3YWogQLNUhJLzyVuMhqnryWD8didkZS4wykvpN3Raf6kAPi6tWaWSaDJBWNvfeZ8kWkFKgQ5KmjMW3fkciBKMf6z",
  "key17": "4FZmawAz8Q4eYuCyDWCD8xdcytRWdzEtWYpArTtkNzhLcakc2St7S6XTsoVPS4JAsyHrDrB8RabpRyVf3jc634Be",
  "key18": "2SfisbNfKmUg3SCRpMZoCRuc1mYRThn3X2qgqH1ireLZLfv222u2bWEc8HBGMLzHGwPw7UsFuNeCNmiG6WBAX6HA",
  "key19": "4ivCG9twqEvi64oHzmHxEXRLLnfoZmcjXxjoiM3u91Jk5Bse29PhUNmwrivFWujJTLqktsjwyB5GPmeC65knwTk2",
  "key20": "618utFNK3UA9hkyb8pnwvSYZg6ooW6WEwiPzfEf6Hg4WujXWTX4Y29GsEfivuJRhFa5xLnBjqVWZ5g5LTwCtR5Y",
  "key21": "3xRKcvZv5ubcy9uZZUkDyEz7kXiFkdzLvrApuWt9aGHpGLHKfwb1CheZ3tZZkZLxD7i89bYnWruFEdGXD1WvbVwa",
  "key22": "2CePVzFk1obiMACuwkvgME4fARWUmBW6Pp7P5aFhhvVwz3ZqWC8B2joFAMXv83YVrJUhaMvYHEmFdqXUrbj18vCU",
  "key23": "ezPBZzNGJxJciBqYeeCw8haP7GuUAFp3Ymk77uEJygZ6DCgp5qfq6sABsuViPHdKPonvm6MwgjqtUYki1aveBVT",
  "key24": "3FL9FxPPiLXkAeKaeGrTnWWKGfPbJS3k3KYrFapf65HtdaEF159ZCvEFFXER7rzVEXFbymewZuJdm57DtLnXr89f",
  "key25": "qC76JMiN4qJw2XMMm48ZRXx2Ky41B2m2uYBTxNYRY6ckrqFC6BZcPQuoa43mAiq7iTcLVXmikChBPULM5mEFTHZ",
  "key26": "bXe4kL8mZAfaNkhJYqu1Wu6ARfjoXfiiPuRfEeTj79rzSZqdHAHzrTRRnpsaYjH1q7kT1GGs2HhcVkseiBMjogt",
  "key27": "2UfAPyUHCHac6ADW6wGhZWepRwuYArCf88c6QUiS97LfmZcS7fDTDamQ4kkCcc73Bgm2VhWxTCroFwXzfs2meX1L",
  "key28": "4RUvc32LRLzVrUKmQH9D9dAcbCudErGz9GHAK1uqBAKuVPqS2yVgpHWE6TSDronwPK2YQz5cYD21ZkUcyNjSuCuk",
  "key29": "MZwCsABCer8TndwyMdZ8kXFCJtiyQ9xBa6bYxYuPfqBm5QNSe5Ev8P2qQZurDcRqLwZsKA9K1YNjGCNbmm1P5vH",
  "key30": "5xvmJu36sypd5hcFnMq9LLhk81zdLf1yTJa6izcyAmkfgkmzR8LQBEsy2iY19ZffpR9rZKjyF7eZkGEPhViW2C33",
  "key31": "5S7uQTWN1rhutuSAzojURAgtSrfRbiVMJCjcNa66um4Jxp2msJAMnqCSszpCcUfuqHCiwrkrpm63M9hCi9oNkzrA",
  "key32": "NoAdj73GwLCQpJvJ3poeLW5nmsy9SmunaRYDNSmEfjLgbJA7NcASeBhZjVwduvDMrj7RjdYijuUoSdh9z9BF9VB",
  "key33": "4vX5te4WFvzwDaaq6YdYrc7MBiZwBtPzuWkCoSMNVHmwnUpuQ7BEeDiKKDwuL5SH6FLfGmJgcK1w5QyqiyYXuggW"
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
