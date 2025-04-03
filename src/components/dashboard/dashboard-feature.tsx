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
    "3KZgQrrLceJHTMq8H1nMdCwnpRH3QrWG91aCQPGAFLMtPZKUScHhk46ryomgZX9xWRiweCzvtHzdZkN7tDPHgZoJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5rtbi1Vz54UYkqeZYTUdWP5VsEeHjBew743XEcKBgWoHjnPQHCkP5Uo4S5gU8TnHhqdACVb91h36nAd8DHC3M4pk",
  "key1": "rHWXyKKW24VcNgs3LCNpTMcQUqYvoeiZ6S3oLryN2ocTFWrYw6b1qhjgktaTcmaNtU43tPGCNGeyANrbztRricd",
  "key2": "5tqYrpGWkXy1RaS9NaDkXmffULnycGFoug6BikJ7xYjC9HwbbmK4ArPhfpj5V4yDd1aZfVmQsCXLGKBxDUXHS4nq",
  "key3": "2WjKADE24TwcPgHB7QUsxcYezjkNsbZap5gLRCyperPR3ViQkt2UkeuWPhxjRm4oTN3hngDQ2HsiJNER2ocf6n16",
  "key4": "2kUAxQwZGVvieYeGLk4tGxkeLaq4N94Cxy5XPaodEhcUSSFnNarH4JSb1kKcE38FxhTtw7WFcFz1WoMwbgeALuZC",
  "key5": "3h8QEHXAa4gewph7j5mrqPdbVtQzqTCeQzgTr3NuBDrN8FWUvd6kHHCFY2rF1LKDci7xui8mSmTkLYPpLXYrU8Aw",
  "key6": "wRS6JUiSoGdoWRi9S7qvsTZvje9VeiHiED3XNNnTBPvW4UUHLYCSFwmj3gL74tKfM1ub5U99sFVff9zC4UEsdMm",
  "key7": "5bEGS9dqFSWUQo1eEno9FkkjFoLKhwKimgVrjvt413aStrg6maE7hEoyWpnnSyUX9j1sxbAgZtgEcJ5XLrmxuvCe",
  "key8": "KWnD9VnvK4BmpXpLHVET4PbpHh4XABeAiB4BLXT8iGCwHZXen8sy2LPY8t3QdX81Mw12MusE1sQDZsiEDmAt8g2",
  "key9": "3EgidsmobQZbAU74dV4ZR6LggofVqxNJokY1cgB2MKajQ25eXzg7YuezJASsAmCosyvHwy46uRDGvFifmtMrdkHK",
  "key10": "3znGAepxyb4LdvNTmWZXSzHDZPKwWb4Fd3ttHRszEZQYkKfU9x3UNoNgtFtp32cBWp51Kf1XstZ1fc4YebUZEGbr",
  "key11": "PHSfWpiBCTuZcWHGe63oDRiEWcxksMmFcwawGjqF1YbXyuq1PRytXgUNkSSEkidKZhSmqEy6eV6KTP6tgWq33AQ",
  "key12": "268DoXXErmyyUpEXxRpL7EEyuFbZ4S4oAiPuCZdbXwk26XkirKGF9sQu7GQskoLmNcwj68Tm7SY3Aesdu4LYGCtx",
  "key13": "2M7wSjJqgReiXGcuxwo2a6kr2hPUVm7jtMhZC2QdRBPo9k99TYXhnFutFV3FWk5pXPkuUgwB94gAZ2pE3kobVa63",
  "key14": "o5XwseHVCkCbgBbXdWiYCZJUEf3F8yVdDrMRXmyndbqGMWUbUrF2JLiRFHsQCKEEQsi5JDMXYUYH9Ez4K9irSSb",
  "key15": "5HtCfoqnvA9syiAeVaEDWqbZiGGo2PQxagnsH4b5Nscqzj6Ue5TJQJ65whR1XzCSQFZQghDdpt1n1WXDah5sM7f9",
  "key16": "5NUZJJQyboETxAcGBx84Tow3SpxyqnX6Z3oDteSYYECjEa9DpiszFQ345gMxUMx9TW9vvv5JWtvGAu232EPSdYqY",
  "key17": "522B78Y8RgqVZojKP7EMzFutVix6ftngAovWa73oiaSMdicvDJzonKfNXKhBCKqmDDHgnY9yRLVK8KzVCWxkpWgH",
  "key18": "4Z5CTorrXjgFREv3csbEfcL9uVi27Hk4y6Rp16wP84kQaDJxEwdyuXwX5nd1SDe5HHmcGJeYahEfoMp3jmdHJ8Ak",
  "key19": "2fmgtDyD5Tf7GeMkSxfWGmD2JyqmkiV7zYws1gL2Rh2ivNF4sgZUYEYD4qfBRj23FgdBuuKHSBYJGcPZZdjaVhob",
  "key20": "FHUdh5aA2Errupw5ry1gRtr8b8y5KaSstASz3uJizdn4JkPogn69zRoNdLvpiaC4SmSXVEKML1gUbSMjjxksFPP",
  "key21": "8piapvhsJGqzZ8r16jYejoioPLFi3wHAxwqdLyujDybmod5vnouE9YTsKXXMJFJYoWvKbBCJPk12TjAPgt9avnY",
  "key22": "5S5F4QXb7irRkhjAoaZk2rctGKoeXUTVk2j5AGYKbzkEdhDeEPtUaVdoreGj8tazUeSrwdFQEr8qQ58CWq8nFFtG",
  "key23": "4vSsRTVy2xT68yAmQKKRiMtXX1LKnRoStx5iYj7f4WLSaXy32usAHT6LBcxPtVa836sEzqyCxk3QkUuVf6A7awLk",
  "key24": "368LNMWgCi6iAfjTF94XEZK8sgDBMP3zqL1D5Nfdy2dMJWeeZb8ojgxiFX4H7uEywQcKQYmfRTYD7xR9CDzSaaPk",
  "key25": "29xWcF5qvxLfwCugQ1ydKo2vu6hYHb6zfdDPcNncQWoNjvrW6NxBbiSQ4urhCPxXamyqb7JKZzHd9ENPzmQ1pNBQ",
  "key26": "5foecMLajUMbRZNgPvmXshP9aUaF7AXRa1Ay2usNAaCKSWrPFTShbGRbpfZD1BET295wp8Sr9JH3FMK2dRBtk7sT",
  "key27": "xpwVbL7MYzuzdDPht8PBZFVkdV99WA2Ln8iFTuL4eSgC5pAHzmELEEu7P2whgvYukSzhMPHyMRX8wsCfq4uYQbJ",
  "key28": "ymiSnBeELSXtiRPac72D5hY6wvU7YzDZopf1tok1sPWyWZ3NbMHqZkku17zRmgpRZeCsiC6LHYenSrvyqYVFDux",
  "key29": "2KCoKndgCxjqrSZeyk4EmG7SrXpX8kLJkvuEU9T9FStHoK559RWjKBQah5qAqtTFL781N9ba5Mo2DY62Njs5k88m",
  "key30": "2aMGmB4z3We3SeptqxXzevh3QDqnb5oidfTXg9uPWVdkSqcCxQ6TsTYVNz5BPJ8gHfm1VLT5WTGHQL6Wpfj9MyGN",
  "key31": "5XyfHAHxQMqeoV5CT3aDpNkP91TMNSxKP3CTwNXXuPn5HUSK842x4KoX2ziGBADy1QdVear8reSpZTMkTkUBq4q9",
  "key32": "4y1pcCzYJiR53fssa3C97an8LJ7c3AyRjME8JeYuNypNauGuX8P4SqKcu3uzQKwCfwRw32WCCvvQHbt9bH6cRVdZ",
  "key33": "8kcgh7mruxcFqVJdm3hQNQysCASPqVopwxoKu6fELFgjpdWkZC9GiWxQaoNbtsA5zBGNxaXnC9ctN3b1CrxhKik",
  "key34": "4m2jFwBJsxUraBE4jtZgx5RhkBuTJTvgDudGuoBTEzuPsc7mJj1YL2GoSN2TwLmk1zd8YA6QDJXd8uAtr2EayHnt",
  "key35": "a6z7ZLFEM2rmKoV7x1GTA8boWFPqRobTcUpRbBdcudSwhya2BZJLJzJAap7JV6ouX7hK4iwtck1fP5m48z1ud4z",
  "key36": "2hjfSRBW397PEtRwuRYnSY9f3oSbAT9zMafcRZaz3RovYYcUmxEy5SnEAishdz9KegnAT2qZbQVHScXA7R5p8kHP",
  "key37": "5CqHEyrCRMahxbWjsLuwxuoQFptuQDy2ZAhi4pXGCBVkAv9LcEBN4PQ5WfkpxkD7KAoCvwuDsWza1fPC6pUPprUt",
  "key38": "37xWLSTsZu4FzEKpW9phozyw6UNcLKq1qiooV3KYwMmUWSmNx6zPau7g8RYXhDckZswVVuJsyRrGX82HwU9Qneoa",
  "key39": "58FonXEhcAihCiHPCT8traLqXD7b8BFfKnqMVq2Sx2c6ZfG54Q8pXdhKmcqCkGmv8K4gecmx3BTdGKFcqhGd1woh"
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
