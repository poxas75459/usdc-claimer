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
    "2hr1iKtFEUpZFTs12iq2n5dXmXP2c51LuNnTtnM2qFLyejaaqXj7dazueuPbMrh5YHLSgFNHmha7Pfdr8uJjP5Cg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Dadx2LCQskrmM6X7ckfP9cjma8uLYbJmLQh7d2odpVkrLTbuuX9Gr7HYNQ6LY6FBkCH9Q1AV7sjHfC38M5XXc95",
  "key1": "5dhdSRhG1MPteFzzxMMshA7cT67t8j6EyVS2fJePy9dAMWAJ8QHShGZp8bYvXnSh1X5hv8U1aYAV3XwyQUTq1xBd",
  "key2": "2rKsbVhakBszuFBnq8YTfZnBqPuWy84qkd8SfmDXQVhHtkYMUZSvQN6Yj2R7SmB8qKAfJHCc58ytBDG7kcvRMpR6",
  "key3": "4aX3nZNiUH97hy7rpofgFGEGyYVQg5Fag6g3hVXZtLW5f59Heqm8wfzAi6Z9LmoAdroZYNjunj9Y5zxgSuC1Ekou",
  "key4": "4KRLZPfdeMdo5FFGNs1NbCiHHcn9T1aFuUfv5WNr5n5LZwZ7sS9SHEV5iJ5QdMqHcDqqH1pXAWmNgJaEwPYFUJGe",
  "key5": "3tMwAboTEhvBLMwmsZpfbgAtHTg445gQunD97fwm2k2oxcA6Ca72JnxwP4RusxDpGi7x1LXE6nKForNYTfGRRi3E",
  "key6": "23KDk96ubB7QFUwKmh2F58SpJjJer2WMPSCDfrLyGSjKeZhAztCX96UL7j86MGJqv2xfQCxTVxGdgTfFpmgCQm5N",
  "key7": "62hH6hbdSAUc6mLTc17PuUXMUbv1FoFhXHnZxFJjwVoTWkds7xX2TLZ6FU5ddSCrmkMLXo2vz1XThBkn9ESdifW2",
  "key8": "29fT8tSREsv7NwAChN9xG5Xj5yQufxCmAQkxHYXHGX88o4hEK5rFgTuC9PgAEcbDCuvLkS93qr8YbJzmEeRguKvN",
  "key9": "5aL5r2JczxnhVHkMstPy6rCFTEhKztVq4cNRxKKyvgtQSkTRMrLooiuSa14jvmYCmwq7V9GpTPM2GgqUh7NiMYyH",
  "key10": "2fUHn54tzAyWfsfK8HFYyQSmTbeyUQj92fuuwbhanYoR5gC3wmnwHdzqPzTcDztm4jyQks2NeCyuptKKk2aTPnw8",
  "key11": "NVw7xKNa9vZmUa2hpyRSokH7iacdFs83rcHWX7frs3ow5rkW4c1ppmXzzsebT36kiExTgD71L64H1SJsBMekTig",
  "key12": "yuUuKMpGZeeQQWkvLHCdjXJBZsSGRxh4EPeQgrTkRm3m34NKxcFVWyDYReV5TUy2c5LPhSPxN3m3XmpkwisqsJF",
  "key13": "3gCNDUPiw8d3QP8NbA3opEXC3QmihD9kUe7tMEvihL9uTtiPhVWojedpQWxkR8aJcPsVohPkCogLDCTQgLMxRgkS",
  "key14": "4z2QQXoPR2LL2BhNVUkrAJyrJL3KM1CRFZuvN6PeT9rwPd4DHXDtV3gBDPZbrJtFydDGx4qa8mp41T9RUF4Yvdu8",
  "key15": "ftZgD819CWAnoRJsc9J71sMvjNusAvzHB1kF2Naqsj8nx4CsLJW4bYMA182Aevamp4aLQ7HotmEPrq9CNe6EzTV",
  "key16": "2M6VwkJE2H7st1UMAwhW7KBh4SD5oX8h3NurCrhioqY8o5aJuYjcHYoLzv4PG9btFhsSKMugyaDzPu7rcbHGXnH2",
  "key17": "4DsCGnG9gVSyrPNKwpapCT8KxMfGWvTybaT8VZv7neUSYBLnzdeFNLFhftWbBxaXGhMWXqu6UyEGJjgT2kyYU994",
  "key18": "5sNe2jmFQq2MJNaFrCwdGDJ4adjrRwgyvAWuLtJs3CT31DV3HtCTDc2ZmdTfk7qj2Y93gg5YJxHEnatRZQT8tAEZ",
  "key19": "RDrnd1S7jRK2fgXkhzi4ZfBupj38o5JN634MFaXiakxffpRygijxgdhQEJBtNZsxAef92awd5ctn2mVZDP4pJDr",
  "key20": "58u9BUnBtYDSsCbHyExFSh1mMJdzWYLf14CPZnRFUpjtyPHSR9MuY6Hoz9LHFp6bnsCieGxKfSUr1AHParxpB51H",
  "key21": "3rc5UaQrrvo83trDwia9dvBiwu12rQ2kPTqeYA56eQUWJFsNzpH39HCM95s6iULcJ72GF3B7mHToxYgZhKmNDYNA",
  "key22": "2WHveuAeVzwadtAqrZJpKUPyZp5jY4Ne9diT4FAw7cCpsvTbrs5eRuQwsn5h9RDUsW115ppaFBJ6egWSS84FpMoQ",
  "key23": "4jFCZGBgKtCWNxnF4Jza5qyPKyfEYciqhKE1fpz3i7A1kyLGuc6t28EhL8KqXvxiEAhDh11Ryv9nHThwpLpwAcme",
  "key24": "3fuu1jnPnQ1gCBvpmGKfwXgA5bEV1kRRQm9GHvNDH6HXkZbGwfVFsQWdNSLjCfGQgMcKhY4bsoPSQHY1x5rds83V",
  "key25": "xjaNtg4xW9Q9Rck2XW25iqkzTxku9CxD17PdA1QQxYNiz6KsMcNKiamKmSjt2ki9nNMdEx86hhqLBsQJQ5Gr6Y9",
  "key26": "464MCWfth5JrbFXgHVLX2gtALtFFKZbZgipxCq3N6uRx1MvY6oiSKCBd16eBzCkmkkQks9zTLpw1r6Q5bn42KYvJ",
  "key27": "29LAaEEKCPkyouU5FFwqWA1s9bCcmzspQ9dvmXpgmSbK3WTd5J1bM3MtqUEg9NFLhXfTKLTXXtg29s88etLukjqo",
  "key28": "348FU6cEFYUEYiYWXExMFF68XMLNCTTweR5ep5nsGoqbrjqvPD8x1gtasoYhoZFxCxWUXRMvnssURV3hzpGusuYF",
  "key29": "5YbsMumXaScwMbKpP5gkuQD8YPSEjjiJMSgQBeUos43hUyBbbeHbZdT23oUvLX8JEgYNFDx8VqNWT21K9CWcZnzR",
  "key30": "2Y1BSkQ1ibJwsrYYBwmvgGvRYzu33xxzH8nGE8jtNj65UAsyKof4Y9KJucYdaDEa7BtQwnXHErej2dJGZY3JYHTu",
  "key31": "Z9xtaCeVf7AxLsEwK98R1HhhqkJ9axKJ7r9biyc3pNFhhXWtbsjjbu9frkX7ZQU58ajXz3eDL672kQqLppTBjnu",
  "key32": "3dCiFLYJPvA7f2RT49v2mivNTtLEnuXySPM6xPr7xG9gJp6vRLz4iPxJiLruArY6ne44mUX93RtaJSEAf6QNEjEg",
  "key33": "4UpBFSRnNjeLY4Njn4z8vrYoxBYhud7LDhKKTLvJCWYs3m6aT62YDtGN3DTsh46msc4cgXQ6f71HNq5NbxawaA6S",
  "key34": "5bQNySJqYNbC9wqbRV9bw18oRp95KRfeN6khQPhogDYnWZd6sYzyLVjF4jtxmxQdPgK8nSPkNAxvAqKcy4rqYM34"
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
