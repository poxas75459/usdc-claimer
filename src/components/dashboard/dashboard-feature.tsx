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
    "4WTB9Uh1b2JBFbeqE5gPXVzMA4H7fRJnxAPLCreb1DhN77ttYubEQYAv4HfmAgCjnPjQg6NF2sZGWLJic2B4aa4r"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4QBi8utnahBFTy9DodLWe46r2ors234WxW3ag65fkqXZF2UUvFEX8M9dunZ1nMqnad2raM2pN7jnN4F3euVYS7rj",
  "key1": "5GAU7PizLLbwgsUqVPDto9MqANUgQxWE5xCrf7zYKuTWKNncuPbyGCRHcHFNPyVb6KYpok6PWouSsozoX1Hxfx6x",
  "key2": "4Kw2kFkam42RoH23qEGh76rPG3Z1ePPMQqgxiM64EP2zY1Gwo7Aw19fCbjTUiM91E71xRoPgM3v99ZidUjsSBZVx",
  "key3": "5gyxN6BbHjZgyB3i2AVM5yAY4AyezvfXsuFjAQERte3XAhMuv3uaLvVZU3ZfmXAp5xBzmrLEtJojQHfeui982ioE",
  "key4": "RT9qury3j9pTAFcgMyPfNWLrT3St7vf7K96oewxMo2A5gZpyJzJp9Bm6n5pxXYNPRzYP3bPoTQs9XwgabKm5UQa",
  "key5": "46kmXMZEtnRQZk9uQ3J2CMBzGthPPvCin7jaLmAomkkWGAa9gPsu3KBeEhY4SLDoFp57DtFwqf9YSdWTr4Eoixay",
  "key6": "2Bv6Ldm8WJCmhPHsgsxDVbSDs6u1soCn26de554KPXxKPiZ7MifdXACTjxaT2EofX5cMXBv3TmCZKQmJiCynW35o",
  "key7": "qDMREz1CmG23ZAiu3rKpFtsi9Tt4Cq3F9EsKAfVjGSggmbDvKXuSYgHYs4DCVAxxmQjBSLbedJQA9eggNYD7Qes",
  "key8": "3v9gaT9u5SNNgkNngoCq7bQ7zvGZdXxNUf9hZtvxXphV5GrXf9VGgKpwVFdkTXoeqybkm4PmiCn1ZkNUwTNftePR",
  "key9": "25jv8q6h99JchNQ3hCbNv9D3MQus7ay2SbyX4ThQGJLVB7dJeBaMzphxGPRQs3ke9Cryj5extyyQnsj29znZHZzg",
  "key10": "2RK2iDNf4ePZ3imkiXxjioWe1KC8G9QsEAWLhx1WAXYBzQ45471qrp8gwkE8fwFcaB6xAK5F47dyUeANLSVhbpUV",
  "key11": "3JXd77jWwL6TxfsuxsWcfnaZHxdspzQHkJWauRkjS1noZ8BoWtT4zJje9uRnsCyvXxGvAVeQDYzCJdknhonnicgK",
  "key12": "3V9C7ff51au33SkPRGbMHmr7ek3M6LU25UsPT2zev6vDdDpxctebAs55oSunwuFkFPFfiaybd8AzbVwodvQzQqWP",
  "key13": "3DuZF74d1utCupPvUWJdQrPwJ1J2JLgrzstYdhkWDdD98iZbtjS53SYDp2KyrBwmd3i9S4nkMgtHMsADuxqmQe5K",
  "key14": "4D53Lj4zPvugg7bNjzijQXku9o9jtsJ32ndBAjaWLf6MYQ9KPKKb3h6L6kxeJGAg7yCuMcVUZ66RHpboyigeCD9R",
  "key15": "2xrQWhbDZh1gC8X7W5virZ1j4w1PoD1zakLxG69XqgyCpxxm83KWpKtuhiMX7voavhAps93A7hRBtHm6nxonQocE",
  "key16": "7QZFNFn1JFmMLr5skAE7HCZSyrDpdWhD8y95jaqwnzhJRtzpw5Td66y5rkwLsnd5bvXj35AERgRZLBPpNMA4Yxx",
  "key17": "532TZYaNtwimxKFT64UPYzwCEi9w2LejUXX5ucTfhLRhExk16SB1TeEyi69iUUavKM24gBBhjLWXY7bnW5bXxkNH",
  "key18": "4eSkiGfk2jqgNDfedZ8eDw7itYSnG7f7Ei6TnQq8KZeVPVk3tMZoa3JeBqQhM7pA5q7kMUQKzdtyC9NWbrnSVssN",
  "key19": "32y8Ts5VLoGFshxtHLUUXrPVNtMnvEGraWFs2PdYEeZGqa6wPCEpGKxGJAxEpJUAzHJrvqWiGLzPf7c8dCFrErTs",
  "key20": "3Kz63tAfPHn7Gtv35xydS4oR2X5WWpsxk71616x8CSG1HroKKVsMGV5HzTNrUQUEAGoK2iQLPWS4ob3bwDEd398p",
  "key21": "4RaJr4q4BREv1Xr9AjE4AU2FAT9jX8LY6URUm2ypJqbSJtmu2pG434taAh1J9fHFjzuq3mgXbY5k3ucedsYmSVAR",
  "key22": "4GtnpTsorEAjUTTPGLkcqpQ61PoCDALbNS2yn5VVi4xowQfiftpeg9fUjvYpHtTsVPAt4g11nSHbTNzxSKpMPS1W",
  "key23": "3cnV5Fzee9jXLUNgLwVQr2u3ydi3VoNfou9K1ZTxfTwoH3ZYHUmUu7YEPcoxaE3u4BveVHK31TXdNjXn4Nm2syAu",
  "key24": "5cMPr6oZM7cc7Y6wTWiacNes7pnWuuUYj7cmgNgTuv38Gzfp8zjh3FFV3XZETTzh8E8oJHZcMiy67bgYCY86S77U",
  "key25": "4KrYaEkPjyu9L1s7AdohRMFF5tE5Fv2V5V7ftXnF62np2xZnWBbmeSVdABtAY8gGcBJm83USBRYby4d12SJggUKp",
  "key26": "4j57VTShXm8vDUPRjxuaK2reei6sJFFjBsAt6pzgXr2fKYtKfGyhqoJfC1YQDQZjBt3Qp2dp3c3U7ZSJwmKbhsUM",
  "key27": "3cUkHTE64YfP4UL4E3RZEJX47iF3gvwf5icMU3kiLXut1PqFnEjjMztC5KzMY55LH7uBbGxvJyGug5fwQvyHmD23",
  "key28": "5VKgq8eQbssQumk2pPWWtsNiZvYh8S9dvuVhZ8hmMtrEN5qwKNicbwW6QayNPtjh64zYbf6HbBpZfYtUKCs6X4MB",
  "key29": "2mtaYvnSZ51sd3UFhm3upeJur3oTXV7Fea211kFibNV78jP8LAQQsKKntb7mrCikK5TvBniAAi3XNLXAMWVCP8Hh",
  "key30": "4zayh3z656d6bHxrCubij9HgHSXLuHbQxhogjQ4sPXtBihw5cGBCPnk35jHaURDMeD6Gx8Yc8CKKfWxjdrmesCHU",
  "key31": "5k2MJt4FZyj8tUz9gDuKRqHNBSn3eE9Wz6y3S6N9ZncwJJyGoySjoV7TUgTqPWUQMZiuTMc9ZqVprRK6VUB1Xndz",
  "key32": "5K23fGAo6eHug2cQ8yi4hSMHwVHZfPgNubJPZoFZ6XptiQHyPSjxoPhDanFsaPZUQvv3HxRfxtKQrXnbS9M6eccd",
  "key33": "fqkXLSbo1oSsHDmSny7tpj8w3Gdpq8F9P7NafABW5DhWbrELfTai5EgiNy14FzLXq6yjjLaLNoj1EPknMewsSR5",
  "key34": "49v6wDVKhKCTEkXRNTwYJCswwgn8xYj5VxxdCpLnRor4qBw6ZRjepp1KkCc7DNwXrdfZwh2zDVkU4bdokdKKNwHq",
  "key35": "4pFAgmxydUZBTq7PjGmBtbjKFBtpu8Rx2PAgq5kb9Sbg4bFHHrSjKt4fh28t7QNg39PcQD611NU8USiYhtG96frP",
  "key36": "2ngyCZXAdrwL8b6awa9Vyj9CRiAwxZWJ4hqSEbQ6sGB9BKQS168imFHej7ae6ifudvkHwPkVEdc4J77xsdRta26E",
  "key37": "ARLbUeUzWsbFurQYGJVXcHiFE95q855y75i2iTwcJJyovnY1WLHPBgXuwtYpF6aWgc55ASPREcBURsoXfjX4XGw",
  "key38": "5UUYWckx7ZrjYM6WyeoVE9cgm841Va44NsKnCw8ofvH6TxXnJSa5VYTL1gwFzoj1S9avfZpXgvnt9s7irXv8Xohd",
  "key39": "54vMkDy3Z3TcYsHUXpNdRr4zmJbzV4JuMefTUq1K8BwL7rgFJGPULC2Sb9BnYRHt9uy14eT6K7K6NiwwAuFya1XG",
  "key40": "5Zoh8tSj97owpE52CctRV5vEvXFPuAuHaBgGMBRN4PabzHvXL9zR4Fo5BdfNy7sp7M2oDN9HqXrmLKzWwBVbpXCL",
  "key41": "2Aw2145wZ74cWJ5LoSg6CRY6Q7e3oyS4wgXt7L8MbPcxx4K9ohE5BUwZPrZ4KnCU2kw6Cxc4tsZ48M1GqKXoBcYN",
  "key42": "3oeit3J4uXjoBowFCPRPTcbH4nnjQxvtbksCPd1pghPRSoSQ68QLxJmcP6zuMrwixk5zoPGYyjCAV2mhUGG43pro"
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
