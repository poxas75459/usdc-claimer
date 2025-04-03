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
    "2vttF2avxXxH3ysNte3Fw4DhC5siL4v1ci3EuEM2fPaUrWAUxAP7JAjeCgAiJwwhqfSxuNHBASaG4MuH4QLESWKa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "s89qG1fCwEtkLDAnuwT25EyArXNwrnBDAax3yV1QDa4cHrmGMsKxxHwtCYKFXUZMeqdyJZhfTq8NWuZtJFHP6uT",
  "key1": "4d3Kag9CbA5kB9FhieRRoNqco1CDUs2i8RJkw1y8aK661wqxrKbUUW7zijihbKjzdVwaVu5DrohHWG7ouPJeWRDU",
  "key2": "3cbStnYRMdu3XH5t9ZGnTUSniKMv6sHV4nscCW7dHSwkrpUn6ykUfuMGJ3HaLroE84WcpwcQar6oqfk88uV3UX9v",
  "key3": "26wLX5nMyoVxdDq2pzeLfae6SfDj7wn5z1gj49heHFT8wX2fZfCh56ThLX4Bih7eQ9z33DYLf4rZ7rAFVkb7g7cb",
  "key4": "4fCK2fDEuTyzQv1AVaSdLtLXtUPBD9UcGmKaUHSa93Ri1iBpJtSLW3dyWx8fr21TDpHUVahhH1NGbxcsAesh19Us",
  "key5": "26hTa9rh586sXk6SHLdXSMNpU9TxJ4SVAFcmEMZXz96Vmh3C5UXeUETxRnLibWP2U4uEYrBTpmwBjL6LfqBzuLHF",
  "key6": "22wUQQ83g4kn5oJ5Z46bSSv2AutXaCaTJ2uQ1oFhVLL2P7h1C4hCjHg3qDASZrQbTrgy2msuAYYrp64r2AfHsLn2",
  "key7": "hqRYMGjV2kWSZv1dFEExRoiCUwNS5uZxB5oso8tHvPnuFcG7By95HZnBzAbADJmZi3e2NVy75wkHuaGNnmjLUWa",
  "key8": "48CWe5dCDDCeNvt5EJoczZF1K1FBbtMXj9rpXsuCTSN6x7bCzSX1JM6jQo7eFYKKJRDtszcL198TiE7EsMkWbR8z",
  "key9": "5Y8m5d5r2JzgWQZgBWp8qKABMcGHrq57fvik4cCrxjTUp7dxJa8w6EkQ3NHJdnuNxgPTU4CDXBXw4HsACoZ3s1jp",
  "key10": "QwjBPQGvUW137SZMip9JA86yLUFaVip9QKq8ksMNMDzzGxVNZvnw7JSAevv3wprc3XsoXaQ1kui1Fv5j8nSmz7V",
  "key11": "t6XAS4VkEF1hw3h3TGhfWynVrhK7YZFW1WN2M1NDqSqhaCcm9DZzQGe3it3PgVgvizhEhZUa31CdcLyZiABwmNJ",
  "key12": "NKzxFbDiLDVPUwyVk4zRnyjEmYuPBXovTiRSNqeBKh7EMpEYeHtvwE8ptR6GVh1sTL9WiFqjRgkXDE171n7YdsY",
  "key13": "dvisGBqQ1pSWv3ZyoRspjjwu9ZmRuHdAYKwpC96qpKo53fThScujjm2d6Ai8hrdjc1pLXq8wTzdfFXhEjbpDfuD",
  "key14": "43dvXxchwtSRZy9MW8juzjvMUJGGFyh1H8yH7Gs3BwkXv54EhLy6ryhiddarkNCKBj8ZnPzJxj644ZGUjptRWNr",
  "key15": "4EVXntFPQEeVVmR97ot18v7e4hoNTj3MMToURgAkk3Qeb82pzywdYMVaddeu5Ep8DeeNiuxAs7xZ7DwCKZof8Eiy",
  "key16": "2te1D5dogxGZBkGaAQjPyVzseZgDqPekXN5hBf95jhToLpDZ7P27vdKS8NjkV5knBrdq188ki1VUBNU16JhgSQsH",
  "key17": "5caMz9NWg1UgDnpNX6ToUe46VeC1VwDamQLQXci86U2YCH62AinrXXPZdLmqwQ5BoR8gipEMHnP63f5qpXWdJrkf",
  "key18": "3vRa95VB8ms16anNzUnHN51C6YNk9YuNwHSXzEs7mqhfvY5oSQct2pENyCMbCcParonX8YTMvYfPP9KCTAkkNcpb",
  "key19": "53nKh8hf54Gc9xmckw1JwZyS3PEChHyaD73AdWJLHhoXefWBKG7fHMDVsKK8fi1Moj8v26su9d4fo4yofAtwhfGu",
  "key20": "3hR2Ey69aSqdfWob5sNy4oGT7giA2kDzvjKBnhz7refURwf5YLuhE7F11KyP5RP9GfHdQaa8PUmb8qWKiqDhtP1D",
  "key21": "3eRVnskkq1hohdxT2U4pBfVStv6J2kmWrY3qHcc26beKJYrASFBBYyTyH8iEbdY2hQcQBpXsGiPVJFz1aPtx7dHt",
  "key22": "KtwaWCWuLuokQcwmK4TneZfXLwhEvcmwpypVF55TxsQV56kBobCi6uaaQakJyZ1zKcJcXUC8FqCpSG5bXQWVBbm",
  "key23": "2b5YCDKShVJr7RFSBhgHBachfa7s54oPGT9DTDrr85VvAm5f2kbibQ8g96Pu2F4kFZfpB4WD8mPtDeRueoLAXcnr",
  "key24": "kvWK6hp234qb3q57TgXzcCt48hcQAKiQVoEB8AMCpwjCixnmeFgZQNRRmuYoT5Hphj2Rt9czLPf8RGVn2NyiZhR",
  "key25": "5mRaBjpLivT5t63iEiR65SyLJv4U9SaABesDs3ifkjPtztLPzpACB632HxMg7pNGBTGXcfjSPyDiu4XqE4B64Mb1",
  "key26": "3JRryuUhqiPBvkzzz8xTT4267GzJzaL3RV57yUZYrqh2uH241qNk7v3boqYcJTQ9k5oYjnkMda2oEifDzsXYMR9r",
  "key27": "3vpg8HT8c5nGHPyRWABxJz5pda42rm4V5Nrjp8Vd2ePASC18scEyW9zHQNtpRX5sncxBaaui1KHijosujHEbqUW9",
  "key28": "3cfhzUMya9wN6xZo1ynXKEMXhTcVDugjtM8omxfawc8LLpx6Ma8VF9bKsVjCGM17jzSd1FfPG4DY7BEA6Cb1iMmc",
  "key29": "2PGGkDNi4SgngvuoxMN251gzZUHEmUMN1m24uUQsbvzQ3BQb9TTpH5fe3bp5t1vqo9Ph3miVgy61QU73A95HUyK3",
  "key30": "fdXwJjK1xNGz1ZNyJqJ7TZ6ZAJepiQjtWZkrdcY1ZJsP3dVDZzKgwNyqXJX6wZCB92BbiHVmJdZWaPZB2KkTy6Y",
  "key31": "3PQFHNzMUthtbtgAzHxZu7LVJwJYQxxUNMCNiKwGprtFngNqvVHY1FGYU6ra47pscvBFVzB5x2LHdMRQt2u8Ssmy",
  "key32": "4TM5qBvsveow6v3potBXo1gDB4kM3GPuQwc1MeEK2a3xvNNAFSKKmXwernAwu38KGDvhPTAqHorjfgpd5v3hwvde",
  "key33": "45MmERKggK1WoQPMBM6ZdFQbrvzF49cEuSiJQsnWKJdLmG2cTGmoS1qbuEpBbRDhhC5tYbhfuVHKRiiUnBCAyP2X",
  "key34": "26DMednMmHJjFu55m74Ly9p2jPXG7bh8R7hV8JW4tAbX5nc9Z5tqjqMqVX8eJfaCBi9f1V2HCcidEeY1AbLWWxkC",
  "key35": "47ikBWMjApiCuDNXQsrETdrBNJBWwhb976vTq4jXTt6upso3Yf7EAXxY4bLASv6NzWDYHFfmUk5JonC52e8S8Vrk"
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
