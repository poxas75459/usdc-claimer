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
    "5ZqTwp458kRe356MzpJHesVwNWDyEAsQcaLNmUrEHNoNM6UGHwJZFJMbyaYKkeb3Qrd518nzYvhCHGXnEhqCbH1S"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Cx3FRovqWAKwXasb1H1mKHTA1izKir7qc8xNiGbyKwPNthhQbtvqbwMJtrmoAGeV1jvM3uBubduhwHJnSwzFE6C",
  "key1": "5CSB1XJGbQ5vsPh2FMDbJvw8QYVVTsENATboF9Ze2DmnoJjsCgKw7AqLkN855KrX2gMRxyu4991SUPo5Wx3pWpcC",
  "key2": "2H3RNs5rikwr8jrS83rAxCM9T8gsLCekTi8ZykNhNYUCerJfpTQTeKVkgFvC1SuPYGqZrfSvWJpySaSmZf9x4bhW",
  "key3": "kJe5RKJuFRNd7KiGSmVWWM8nAEinTruzSayoyjJ2WRPyxMNRbS8tdxdN2BbfnkgAe3ZsRsGdjWcgZCzsEAThGD2",
  "key4": "5v6s91kjjN6xQT6BHtHEVy8Xiqk6vCR2qC7LPacX85WTyXhZJfu5cKBxBYabu4xWMYrcihxaSjbATBLW7pBndJa8",
  "key5": "3mQiAo4umn2QDSuEJeEV1gcnpGKrDapd79D8QHg9NzhC6U9wkhVwahKBRA2BdkMuxJA4Y6SPe3KP7oaSSCtcoJJo",
  "key6": "36WFXYsZf7cS9uUbZSUD18wW1m7Mg1XyMnFNQ9QAjkjg2YphBRYwh4pkoKLKDg8SmhfSFFTuaoPvEf596bEpMVmH",
  "key7": "25Bauy8HXoUKdTz1DGTAoX1EnJwTgoqDZKYqwd3j53LS1cqEgJ91N95SX4jV5JZTDLrGaonSCYyQTarUp5BdyJT5",
  "key8": "3r94F21sQN24o5kXKgURMQpFgzxkgLEintyXiVwewP9UvozbMx3m5rENmxxLbCj89QL1E7Y9JGKaNSJGa5wFiqqD",
  "key9": "2Rw5MgjTsz8W9R92xhfAUNKtKgf82vQT2dpK48q9wr6tmw62dCjkqgQNU7BsDBqXLgX8UUF769C3X1ywnDNTv7jZ",
  "key10": "3iKvi33xnp2vzjvkmn1NzTUZaifSyhVPnjUZvdKr9jex9SR61ibPNG6kqDAEBFzkC7JENAnTm48J8wfTGbEEZU4u",
  "key11": "5zyCTGKDQzWK2kfQftECeyW18J2Xop3QuV1yEPWMKwpKzpNKxrmoyDmt8ECzwZiycsycsQjzJr4oWY6EjcNbm8BG",
  "key12": "36QBX4TRTW8WUkgm1foHGQxgZp859FYqnTV4sUvhc6qjpuDWBjzyAyaq4TVeYQAaw9MHx3m8dvudZhr83ydWxXGf",
  "key13": "24PMaqrmcwosXFWW3BAv64SETP56ScoDWXJjKbjGgyuKeeLruDERjUHG9W4RjbLHvtqUTrrJwFSWBsgiGvoQxYwg",
  "key14": "5wau6qGzi7nVaZXAgXRvsXji7NthDk6BdrqdxtX27XNMQXXnKonAws8n8GdVndpjKGf86QebhhHyG5pRp93zWtWq",
  "key15": "VvtRvGjfr37gdp1hoNaZPuRdAbS4kPhhD1NKWrWFY1SZy4VeZJFj467GQrNbxmK1fQ8vm5dFRH3JwGc43t5jadJ",
  "key16": "52tQmsdDnedEU1Uv5ikCr65STkgQBogCQw3ieTXxWRUHQAGYP9Vz5qh5NbDk893jXYhwzn2cRgRtjZR8pVXu7oTp",
  "key17": "3ttguk1eB1Q2N4P8CqvCnTaQtmsYJqFS3aDFdDkij6xQmkMDQ9FeCZFFwHHPhtW1wLd3LW7WGy2eUkQsnbgp2v6X",
  "key18": "54rkk5NRmZ9r13odzvefqTpxX3nEm9e3n1XUMJWBs4d1ZakoVfKb5dmcfv99UoNcWnsAzoddei2WsUqHwFmAYS3H",
  "key19": "RiLCvr5yuFgqMR7FX8X4NkXjhmKq54zSZdwL1pWwwo6U8ts3r6rFdApdsJkAtQ7sJEGLMmbr1oGu8KV1FH5Mtm4",
  "key20": "21LDiQtQFf3bGswW457fY2R1mZwBJ4DFixmJo741JHKXocFmR61my51aUArdCYBTxBUtDFDA2HQVgUc9sVWNJqJs",
  "key21": "3Anr8iQKZHErGAntnZng4LVA5qM9byf65TfQEFTcPau9TWkQa48FUpPrETczKRdL77bz4ocAxF4ZNasbdoFfYr8n",
  "key22": "3ZPBdrwFKtutjc3bAPvJzwnRdTDcGt2u8twyG53HvBDu6SzoP8R96Pb3pFq36dfNvGV53a5Lq46aJV6AbfXSqYjD",
  "key23": "2Bs3cBEgxd4AZ4UxfcSzMaS7VRQLR5CVzukrwWeiBsYZ5ERNUHDd7ucKqs3oYngCKT8DV6aehL3c7vT38cc1pqUS",
  "key24": "4Q1fkxdejn6ehmbLx5GBpGHxxdp8u4SMAob5PH2V7oCU1k7XJALuMNWnzBrFBYDunJ8LdaNhf4sHP2x9utSQCicE",
  "key25": "B4f3jxh2qkKy3SAnxrFJsvdsQLvCnceNw9vCCX2gTEMfsVNvJru4DZQQCjc4Ltu7TyiLPwkP9RM4QooGGCdFULC",
  "key26": "3NEmRjKUDRhxEUgRVm945sPLVctCFngXCEJG6VHun89nMuwJ5jwKYqjnJ3LyYque7vyv7LZQEKJsnkgQ7Gwf6HLC",
  "key27": "4sLTwCTsRckq2SLhiCwXKeNLFA7Zaih3PwSV4iFsTmjMheDxRAdhVZtnJH3U6cFJGv5Py5XiJy7HKoDXfEZPiF5b",
  "key28": "4ZwxjvANUsmpg7wkUrXW5ziX9wV5R7DiHpj5Jdu9NUucYprvuknAu8xUv3aA59T5VS5SSY3GmQgasrMSqT3NhXCC",
  "key29": "3sk8ArdncfBTE9vV6QQN6C6xTaVYFMes5prkoVZotcKZzHgPmWZSxhYRxDL6yNaxpJ45ZMmqpYcpfbsQzv4hPxfL",
  "key30": "gLghEmBdusf4wVBE1iJkyizZxvqsP1mECi4fA4C8wFmzC6bMec5ftYpUt32JhWBdWkQ6n5K4FEZPxp4nhahLjjS",
  "key31": "GT4m49UUythmZ6hpwiGWvWWNZYMYwJrSWWnKAzYcsWS6Y2a6GCtEmjVUPyB6tEoRdsC9dFXwBAgHh7KNejNBr5r",
  "key32": "KH2eioUW8F6Ykk2x4cbPUcxt4iKb9zEywJryY3GAoi27bUSrrLkd73bvotj5TGCbyi8TqPHZEkEgtMcu9qTRrxE",
  "key33": "2fughXrw5qArtynDSwhYidcb3VS5cdCTgBPmAr9HpB1PBTY6LzHt3YS1w1mUW5g3pUn2M7kK4KEFCcdXvgkyjNTN",
  "key34": "5LntYfrhysNR8gSy3RK6N5hFqPTdvT2a3JvZYDVtLrPEtQHKqtPJsK9qzrkYyEZHPXQ5YdmnZr7TK86ETcxF5FG5",
  "key35": "3pyDopi3J9WLqKG7AMduBpxAkK9sixCxLJ2UMS5GUVBt28Z5nsYjLJHSfg5xZkxdb2sYp2XUeqTWJuG1bXg8uMoL",
  "key36": "63zySxsVSiYv7inx8DCo1NKkiXcjA9HFrFFvAZUbcdTh286eb1PX8fjKQNxASzvUKTYi8Ad7DnTtSrfmixH3Him9",
  "key37": "UkJx391PXQgsDHajJdxHvZqxAQfxDQLbLMm6uCgE1WPGLpWgZgTR7J5aFkJbD5A5UiEfNGMNzA4JsfMiJFEBxQt",
  "key38": "66pFr6BiJXrH8tWYEQ6MFgXjRxA3a2my4aAZ1yMu5BTEQ9LSxWgtnBFRBpLb1HaJTR1M2CeR2Usc17ybzDWTVZns",
  "key39": "3NT8td1txj9f6ccZJW1B6RkkdCyBe11LB81UuKea9ZuA7cKuGLvfdYsnVaUoeXBazsZ4qvEquGH1bucqUwe15a4w",
  "key40": "dZuESs53JK8mqravTYQG818WxpcdyNe8nQhJYGCK7aBCVcpirj2XrfwousNtirWfyERNFdpwdTcHhhNkrkPi6uk"
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
