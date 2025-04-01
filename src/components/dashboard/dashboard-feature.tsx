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
    "2uy45cQZcoCBS5cTyHdwqxm4jN74VDHBNTZFDKqfenfqbEvwuspLjQc3pLo36HmyNNdEf8z2jbuL2tqSbB65PGEn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "vXdhxwUeQRq6EEQcqPPx7EoeZrjWb7QujWv9VM7yQoXXFH6BsBBtBK3S6d5LU3xxHBnuCTgfxq7pfhZzo9AQmS8",
  "key1": "4znEFbAB9Qh8D81wNLKTcCHNCqrne45aNFB6DfMXw3cjDvZjmH4otVz5CwcZdiA5ouWrq4nEnjT9AM8sG3RPPrZ6",
  "key2": "2NkhFwmq9jwb5XLEtuREjwNFLyKzTnnjNawkfR2DJUPFKCJUwjsbjJWNj7aczvUaFry26tEqkKLtu5TP1PH87fo2",
  "key3": "5hJV5SQjjetGpJPeW7Etuqv4QKg8RY3oyfx27prgw2axNhWDbhsCDXx7AMx4Sustqg8qVxo32kLgNitoF1uHZF1S",
  "key4": "3sescnwoS5VxNBVdKeGkJrhjZ7hKNXuVCPPdv31W3neTXd19YCJbuTHZwf6sAjNh7a9gTYvtPYz5F6dLthtsN6NK",
  "key5": "3L1hNMe1ahZ3qRzEEge3ZeokAVj8mxjyPa8TZe1KhzsYdZXHPNwtf8JCk9Ka3R3XVF4QxAbM6Uj1FdX4it4dCGfc",
  "key6": "4ehqCRipwRbN2FpG7THHKE7M5Trfnz89PWBPzJseF4VzAttiqFoGZMaK1vA2M5C4tjF18SeEvEYzaK8pS5uz2soB",
  "key7": "5DQpZ16Zhgb9t8fHCFvjwaWdZMmRp3ddnVa7utTKQHYQQbLmN5ouZGSiJM4ujqdYZLawtzsfzA5TRsDgSWJheMpS",
  "key8": "52EjCXhXrVE2cVdziijrbkDTAh65Cdju7zf6nmXiKCXhJLtaKnu4epN13maxXWsyDjfj7bknCYp1vRng2QxQyU5m",
  "key9": "4jwN8Ufac3QHfgACvkN6pXm2C1A5MNemxaMzcNh13LfXK9u7tMpS814ECfM8xZhXGSAXTqiaxbgh7h59ePDeebGd",
  "key10": "2uojDAmSUR3QSqgJnKreDmZAs6bwah7CV3m1qi2cAw23VN8stGE95sqMzRKnrvDu5Km3MYxwxnHAudEx6htGYxvV",
  "key11": "66FuVuY1Eh5AV1oY1RAwpSHV4rVw4qa8bykMuchwp4UFBDLcFkDW3CiJWc4MdmPGxJWjNsdN2dzoCwsnp35iAyJk",
  "key12": "2d2qkfVQ76EW2vXVCNNpXspfqLmCibYr1mfPzwam9BVmkMLsarNzEB9XiN4GEcUFZBYwY5peM5tEpjggavFxY712",
  "key13": "x4iWAoUqprRRC5hbTBvxQgVBa5Q47Pg3mcMQk7Dhp5GKRoMh4PHsozPBPbnhWwAr5Y4QQaA2aXN7XKbZLGKbsTW",
  "key14": "55QwFxk1NPNgLXBwxEhV7m7vSnnSJ5XxwrYRiCBGAiVwm7nU5mRCJ4Ano11PnxMrHtLRGJgS7PFg7mWeyJDUyqGs",
  "key15": "128ahDysetLRzDTmetDykpWBZ6Rn73Esb3ChWy5mF97X489zdZxAecRXe3izbqREHuUvnRFZoFF8x6A88zuCF2bn",
  "key16": "3AUPdaMybJpDe1euuhfHR3GZZ9GVRzEGveZsAemqa3xkWvKVytmCEdmTkADwWuEczkkAwDtv1vr12nXDgScuctHT",
  "key17": "6pEiQGhyhpYjVvnX8HudQfqNgeEt2twnSoMCr4K1pFo9w4TXLgNw1q1ifFi9kV6B7syFC5eFFt3mVRyRHx8RwnQ",
  "key18": "2mF1DhbM5rq82nScSUYgDQoMPZs7h7Xr3LvRiK5bUmJGsXGzMRuVskVmgrrmiD3zVjSYLj2tEzm8W5zSDwELbC5H",
  "key19": "47tSivPXUuKT5UV2qtUwnUy1CSVzbZ4VMD5YiNQJ28CQcQLLDTcqnUPUxhGE9e8mrErsyQ5FGDYarA2oVowBioe7",
  "key20": "2eqLLpjdjzteqPiAUjAgo5fexKyNuM5JNAmeQUJczJpwH41Cn7MNNUeULDh9dXaxSekRKxCuBJpQtpfUceTorVV",
  "key21": "62S4CeKDhJuX1FeukMfJhUuWqwMSEfGTHReb6MKypikr5iEp6KV37LpZbaAKyqYW6751eoKKoq5HqP1JWkgY1rTk",
  "key22": "2r6fMXop3C4cUuyGvMJELQdUboWwcEangu9dVD3s9cpT6zbckHLgLZgoWn5c3oiU2nBNTwwGgDb2RgiLn4ADmNFk",
  "key23": "3CwnigWdma8CCN1XEZW3SpVYnijCBuLXkbSop2mBGvdYniZhxRvf6ALCrTdsQZNZvWwkzFaKguJqy7tmyhX9pm3P",
  "key24": "2ZTQoPK7vDhAdp1TRbejLumRL1oQh4hSExAdGDpgtugzTw86iKpjcqKDjtEHdZzJMfcRP5cHFaDYqLSv59uVz3rc",
  "key25": "5JoQLon4iHrgWaAJGbWzgMFki1onqhMvJ5D2S43ptnULvSvMXiv1qFLaHVB2uutWJ3HsK4iZBKWK8A9swjAQq1D",
  "key26": "9q8kdksmPYYfQoMo4djQLHpFWAFdvwGtmg2Ybnc88SQ6Hf1DjGbGVsEa1inbX1pagiqHY1VX4eg5T2TAwFaUDmw",
  "key27": "5Hb6L2jEypFayfAdkWr8uqDTerXNu97hkn4P7jNjcGZqYDU6HtBhmcTdqFDQAxBEBuNdr3nSRV895raA232Ar7rY",
  "key28": "3Qa1c27qz3H8w84BGFhiLKpzPFjKCQ4yhppm2pWrw9Thc2cG1TJQQuUPEgR3r6M9zvUBKvXHkrYHvXggDtYdBHV8",
  "key29": "3WdmqjQitGdscaCSk4AeMqFKgzWkC6doxqsgzvHpFhAT2d3RuYXQMsYvRkTmUEkUM2nK7n8Z7S8qF97r8hftQSB4",
  "key30": "2TJfeiQPSJuF8CP31sgs9ho8DWUJSPzWs6NWRoTkaEVVFPgLcuzZ6uAo6X8tCtyK26PAhf1NqGmr44Bi5jWmFYYb",
  "key31": "5sWqzWzFBn2ksF4bCcHDemBFU2G5ch7Nmc8n5FMSctjYNZ6kGXasg4SxvNzXFGxBsZx9iJNzeJPWNhzkkZjRhCni",
  "key32": "4ndqcgyUQ85B4FdJ7XAm2G2Dv8EnwXzxTugN8C5rMbpnDW3dB9WLeMoGZbS4wwTba8So7bjn4gJNBnRU26KJ9ddP",
  "key33": "XdPH9YAkDYQyr5vAFcLNyLVq3565gxk2eSnUrw3CZnQVAE3fSJ3XY7UX7JgBTiYGK1pgAKTqPxMS9SmHrMWvKQu",
  "key34": "5RPGnyVUYYzR8NXsApNghbeMhrEGWDoRAcQpdNq5jJqFB3zP1kuNHNh2uBFvhjDYBcrYxWuJYwQN6v5XfgZWpVx7",
  "key35": "32rBRvx7oCT29szrJttu43QybVcfyqkkEAiFontKv5nGJRmqFLy3Vawdcfji9f8nijoZBQa12q6C5DHuMb8ciALS",
  "key36": "4aRUubxs6Sxig25rqKweEa6JvtiFf82Cq9ME3NufV1Yza544rYpcLxugtZENYLmikoDmfEwN9SWBqsBwLtFcohLs",
  "key37": "3QMKWioSTdb143ZTbsvxfucg2BYUAL3PNuou6nUfmtHixwoYsUiVBkn2bCjoMvD4WytJEgqgAVH2KuPz1jnd1VoJ",
  "key38": "kpuiKXqNFY6G4hNZZu1kxXStnGVCauPGHUgMBgY2cwKaSxirLtofg8vdEiXtEeQL9CrCBuLQ3sfBikXbYPxoffb",
  "key39": "38EygeeeMw3UrJft2Lyon6xpCdXpHgf7DCv1dZzvf3WpDhAPQ9V7kr2Dht8RfekXcPz4j8hHsXFaTHyvagyPPtrP",
  "key40": "4hAnz8Ek2DmmWtGPoEPgrZoTqA8Y4ZF2ehFZPJ2k5nbsw8FDR7VuUwAckKcYrxiiuGTLY38Vnemk2RLNcVGauq5N"
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
