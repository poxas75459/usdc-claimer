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
    "49hocERZ8ijMFtYhTvcjDQdjQu3D6HzkUPqUbrLtH9jjbNX93Ju5j7rPGsDnnVNMcTjpicxC3xRjgkVYeb89YHFX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2pUkuGKCHvJK4iYo9VgmXi9BBgZb8EJzwCu16GvRSSuWiCjpisGPTwTrDEhL3jhGprYHpz9sxr4jim2wZgoPYgva",
  "key1": "2FCnKM5AsZmRBQbqCktVn5mJ7uXJWycVqrWBZUVTfjYFr6eE5rFoLGDVPSXjVwyC5Ea6QSfKb6UsKHbkUSX2sfKh",
  "key2": "5vS5q4ph64Gy5haSZjNVAXFGvsnQjVzikZeQrkHN2wjwz9Bc2crvY2f2kjTuTqJKJHiFw85YTuv4XamdRMgHx1Rj",
  "key3": "s5hrzVmG9JGgYycNVs4qSBzDZw8p8x6hPaVpPZb4N6sQvUmdPhBuLnpKCYewiYzZGFP8NazL9sAqhyM9LnpPyth",
  "key4": "2KPC52jtaHBKvv1MeADLGyYiijZG71Yh6ziTDLY8shn8hStcUJcPRrx4yGKAzPbur5EFuJpvin3rUW39tsxcZF5q",
  "key5": "3jtZKycPuUqKrU9WvwXZSs6xB6WBQESBmzffnRaPcYTBmqMZn8sU4xH2deWafEudBb7G1Sqn5S9efoAc3RH35KjY",
  "key6": "677x612CBMirYQmnJgaP5DMGD5AQYZWCiibK6REJGAweJ1eC5L9gNNw258aRrsHEpbT1byo4LPMieJVAA554BTuS",
  "key7": "2BtardxwzhTHCGcmiewFMpM42ZjnG4SZqyngCKLPoeVLJtyUrrZrLtzjVZU5zzXsKfhgMhEFcCanm2tvPwveM21N",
  "key8": "3HaaQh4x1ctLM2dXEHGMoBLc9ppVFf7EJ8ZLHg8CB44YxfTUFZJERt1B8oj2DVjsTkiLxyTrMAFeoM6anEozcjKY",
  "key9": "66hssPrZYiYHMSchnBkBoTDewetwHoBhdsfNyUWfj94EmSWQrpNoyVpPsyA4i7rYPamCkXYjWRaC1ucfkjuwR8aS",
  "key10": "2MRdwt8xedW3zdE64tRM2aQUV3aUUrDxGhycYqGQGWrQApx4dnrsVEAZiWdvdb15HiJHkjsUGHeEPWeGbvkwkYuj",
  "key11": "5HmXuTNd41QSAciEChj4QkvfZDv2Jih3GXsqm5R6NcDwb4Nz6W5vzktrW3WbFSeVEwzDpdg23aBawavTDvHxxuM5",
  "key12": "3PjsjrWxcFwq511PkU4w48yG3FEQm2JBJZDs1CegbnivfqeTJdCLBBfYUXFhbNjwaTcV2YMeWzTJnZdvHbh1whhZ",
  "key13": "5CdL2bFwMzjbTuhGsu9gWXn3La2iapiKr21vJ7Briw8bJaJSGz9aE9P53AcEDTpvpxb2qzZxMghWxf7bJLBkgqSE",
  "key14": "2KfmmHVdqnawQyeakqjbUTD8R8JPxaFH87ch1TwSs89W13VYrDdaWXn8f7sXoBsCcEFFNGBTubPzZHDBb2vThhsd",
  "key15": "cR6UVVvcbyLG91nrc8jEYx3jCW2ejaXv1LvmdaFHsbzE1aoWQiL3WxHS4MTfJBhESbvNeaMPMbd4Vmx3dVHpMyV",
  "key16": "5dbbRZxbnK3RVfEygKGGLopUKct6RMDRMMqoueomTq91fd61bVWEoUC4bvGo2z8CjgurE9kUhVJxBXLpc32EQr1o",
  "key17": "2VCviK3mwibSyzaCDMMoAgPAYTi5hup3obfjFWT8YRXRytVhi1hr2XGVbfhqWdXpLpkziAx9hVL7cqbLEhXMyySf",
  "key18": "5nNz3KotovwHqHUMxMtbeRN6pKyJWN2X2NMQ59XUncMRcBKHScHLYsW2wUAhVXgKwi63eT7KUGoSphJYQCA6cSr6",
  "key19": "4NmevvSsqmKELreADxdLvEQhaQkRqU21AWUTMFsjoKKnGQ61wzdRRd36ko9WgHzd3x6c3nVYcnPxrP7S7Pp6hR2J",
  "key20": "3avpTjF1hdiU7BircvKJXi7rkp7EsSXfTBMpNEyAaYj18FEXEeg2hVdgg4H7kkA8xpdRbfQntwcrvPpRjw3Rfff",
  "key21": "3GFkoHoKzWhmh2fMRdNzTZVg7gJwSiJx61VZW1v5L67fJTM4ZuMpwXfSfdmUGgE7p4JyP63M2xUxvPsXXWtSZ2e4",
  "key22": "bQSFtvvqKsXYhBq5BDoBSWxCZXF36seGLSpiD8N2ccvXWoDAmZEMkGyinnnCvG3mq5aghX1tSo8ioDPkZKsXB3F",
  "key23": "27dHyZingkHZXEMsMqBMxXkepabKRP9NGs6rY9f3gyDpM9rCouoUPrBYa7aRRx1zyfdU8GjtvDAaBvp6TSwkJBDJ",
  "key24": "5StNswFNuRhFY5qd3JaRMcTLA42dMC78sTHBvxUhyxGGydc6DeqNDTo8h44yWgKc9CUEJmfBoJfAvf6GHzkTyFfx",
  "key25": "4MWTfDZ1xkcH4p9sJSMBCjXEQeBubA7P58rQALrehsRQTiXBeAYWTesgWQVSK7uJmh5t88URd8hgBAFXLhJo1mP",
  "key26": "3qaBMAUQz6C8ZgsYVB1N9CvrGmZiuzzxNVeJ7i6hzQL3qaT4Lz4s5henPxaEaC6Y5ADgJx3QLNqHmBK6fKTUh5gj",
  "key27": "4dLTKSHfqzha6fUPy31aNDNHq7w2Fy5mo5p92NmA6LZYUSQZtW9Y87UiB4cMFE7ELKZ8vBpGe1iKEDM26rHktaUT",
  "key28": "5uhzmSs4xJw1Xeezp3nzQ4gh1hwiecSThQY5W2hVQrvN39QaGVg9Hx6fm2fpamu3bjrjwke8uVZboqDhEzKp2DFW",
  "key29": "5y3iqzxscCvpEJ47mFFFkRuTx4KZqrUoS1UwRYRLy7FGCNvvRNJmKd4o6Y7gg38R4tN7pDFgN31wytpkvm4Cnxd9",
  "key30": "3xRvVKL4iLp64ASniau2Yngaf45iktphqRfdVu7GSeJPWKxdQtL3SdKc8ZPeRdhiftiB1jFpHAkXqgvmWyfAhh6i",
  "key31": "qSmTQytu6Z1Lv3efA1kNxefkV5Qq9kMoG7qhFSqdsdfCXtgp5nLxYZNsyckZ6tWQFaHiA2Vsj34igizbXXRmcUQ",
  "key32": "5wqxzUFZWgQXFQp2Nf72sW1uaLMMs6tDsT9A9PCXs9DHqh9N1xTTKxRAdgJAQgQzsyDxoQW1Sk4BJrJxAVQH824N",
  "key33": "3sJkYw3JL2PNUjUe37n7gqwzveV2yq53RB5w52cC1f9krUCE6AwDZRi1mkyr1SNGPA4S6RZTxa5i6wG59bKSzcUn",
  "key34": "4MaR9278iGEaTTag1pS5aGDRvThQ3n1yQEUY8z1oa55isUyWH1CqypfgkuM1wZnBZm13mwqyeRbueuu7PS2R8ddf",
  "key35": "4vuxkM31cSydVAEbXNRiURuCuNCrGGgww4pi43fN3foDN5Sy8pYJ3PDe3b4rKao3d4YhMK5SMgWUt4AyeoJaBXLn",
  "key36": "4KfoguJtmtfMt8D2XzrAvKKvHPcUWwoDpxuuBKgpEG3DgMbp29Ps6viRhorxng1ugR8xBgmx9r3SCAYCJMcDW4yk",
  "key37": "2a36hUFN3sBe4ThC7dLw5wdnJnV1Rr5GDuNCkyBwaMBck7E8XNxGCUb5qiBTVcKEdQUeTSUEYUxmT4C228ZLcWfE",
  "key38": "3488GbEkMt3u9i58zJe6wvcmue3ts7HKTqHzZZpPRmYkU1TTfgEZ5F75VXYbUVBVrXTUED7up5BWXQ7hJqoBNBQ8",
  "key39": "48trjLbHVFwLSnEhjnJ3rAAsosRVxBYEgJCijzkL8CvNUjHibhL6owPzq9jYXXgfLEtDxbQQ9FR9wYn2CdH5JhNo",
  "key40": "5DucsbT3gFx5vTcNwrmKgou2DVwd9PK39MMNi6tuF8Tf6uymeUAvscMmXE9JELHa2nPEvLXAQQazjTNsoURDEBJv",
  "key41": "3xy367kzXYLhHSPgeX5azCQbukDHkqAMHXxUS2dcoW5duucndfWUBnt27hPgtKj9zwHBLqBhUm4ET8WuPYJhUCns",
  "key42": "4BmXBDpjLVFNvTgsyto9N35GXAKVJc8ofuJQUvjJpFN3QSi2nebac7eph8nZPS3wkwhP6FxtiYiZEoBNt8suvxbi",
  "key43": "3CyfLCuUx9WDk2XvqFDqeNvXjxkeg65D57rn8qKx9LdPjym6ate5WrykeuRcRnTeWp4mkuxsDYPPCkjkwzY1U8vf",
  "key44": "TpaXbsx9Gg2wJ6rFit49s7SnYJ3KfVpzPNgsDbK91VyKWnEGXL2SXQA6T8QQh58HYM2qXfeX8JG2XRyPoyw2hhj",
  "key45": "okmpPDNurTA2tKcyiXGAxdbUXMT5YNEWekmuaK7Kr11pLa3EXnsaS3SqRbnjtMnLX1h8QeZhwbF92fjCw8LyZeW",
  "key46": "46X4cvd58e3KJYnSQGNYs9xPDWRhvVAfZzmbgj5ZotPPC5fAYpnYsnAUoYQnWQN4KURUifVgReQSNxrGg2GRPTyY",
  "key47": "361qn9JGr1vuUfFeSvbBbbFvxnJsySJX8n4CURvfMmLP7khaMDV4wWNDKrSSFet32AGdBPLQzvgmQhkpiTo17Z6o"
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
