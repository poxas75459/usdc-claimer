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
    "2y4eLsq4PvdmNhAt3qQXSStVqeU6eC3Ao3MmmzQWEicPZsYZJTEoYwE9fxm4V9Et7pxbNp2BuQb1h1rZg7hrpVsE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5iCYoQkaGr9mFXokmQdXQC6ZMMwVu68uLtLv4uG7hCUfEZ247gLFYwbbzNXJBH2jk1wSX2GBpUXfthJAaSfyscRL",
  "key1": "23L5ratDjaQF9Agfg8MXwcmcBmzhkMCEaDMyQZz7k2x8Vv3XG7CXiMgEjoy7KnjyFZr8y9isq2Wju1FcHdGbsT3k",
  "key2": "VUBPwRo8rHLeS4SF5xQmfkE9G2uQymCP1Czfn5dCUAUYYbbPjiSLCGPLMR66NCGo5ek9hcMUVsrrewLvmFa4MGW",
  "key3": "5Yd19kEBuwVjVzafaqJvNCKg8qm7NUXNkkTQzwAu9DSyvKvpgzgTwNfF6dXk7fHgWwy478pqTiv1GDcENrnee3PQ",
  "key4": "CqdKG4mPaWRGtrwLqZRbyp7uGUFWiEcJdXaCRcB4xWcdywyzvnkEvsLXCqFXZgU5cuZauC7HBVSM4SdzgQhcSrx",
  "key5": "3oM3Vvt8ikvaRrcqece36Pss2TgJLtmCqxKNSZ6eD2XvYZyrdtwxD1YfAAYdGKdSMZtbP1gywZXVmje7RuWYnjvs",
  "key6": "3L6ufbS4zgBbmtYuzsgWaWnmaqmJrpcnd62Efn8mdoM4SvBisSNa6coc6WURyKmgruPipfwciesq6ETySp1LFqoP",
  "key7": "2bWurWsg9Gfi1TLpYU4KsTqrFAFQwQMkiecxxRpgESyMShK2UiQxmiAkDPtRwLqrYshW1VCyLrsw9jpaF4HJUTXZ",
  "key8": "2QpU7Y5qYobZiePzVCeNynAXpBqmc5434rduKLEvLWchxsZedm2jhnCU8ZWZ8yej2ixxGxmDq6TAobym93HTMJk8",
  "key9": "jC5oE1KgNEuk91tePuindWDWZD9H5cAkhjmmuNncbWNrvVvSEz3Lxzqi32CiFhcQ5wBvq6TjTGEGADZuoieaBgY",
  "key10": "3kXznJqshXmPMirJejy9DwGrqLPJwqmekCaNKpMC7bEnSkLnGSMaw91RSsuk5FSa6xQNzjWQsijB7VCxNaMfEoeU",
  "key11": "37ZdjoF33jMu9w9xo22fdYXrqpx9HyZ8NhffFLEU3orWn5RCqini6MPSzsZWQymxfnDHGtHxapYsbyBFUpdj54cg",
  "key12": "3EnTfqFhZbEVBuJaVV9QC252HQVQ3zfPQhdFYunXNqDpWLh9YqH3UYUfcDyx6yGDWNmXu6HdPXEcSune3aUVJFev",
  "key13": "X5io5WECCcN16niQnUAU4kwHKhGu3wJJm84UEywVVtkAqLbxN36uAfxTKDhFztvc9m245KtADiM9MKbmKAbTxdk",
  "key14": "4JSsnu2z2mndXGrHHDuA8HdrwQc7WwRYpn15ngnWToqR5VwxRj6wb1U8j73WTpsA1wTmPimqJ86Uo3yASy6bmuuv",
  "key15": "2Wn8CTX9PdBhR8ZTCL2wq9d5DKDMqmETVcNFfvP2zFQ2uPJivoPADfLdf2idGTsd1umomWXKaHMwrVCYfERoUUuF",
  "key16": "2vnMV1g51VMvS4gH8xb2WDmFfbu3cLbjiCKHs3BbsQZk4NdNHAmmz2hQkyroQKrRqe9MRipiR3UV6z3og1hQ4xFE",
  "key17": "5BHZUrtW3EdgRZ3UPyVNmqJyEGH9f5o9LPYd1qYNg8g5YYvuFoXfWWcRxtXdq1gxF9be5uu9syAg1ELQeRQnNWRR",
  "key18": "5cpXCYgPYwAs2d9CYEHa3thK7jaxJ4ESU6p6CtsFheEosf51ct9nSCu8ExfZcu6Y8vPd9TY1wyRZ36PTo7odqrDV",
  "key19": "3EoLC7G7sjhExwGw3Kfn4ZM3Ws33qFESVAFzEi1DyaRx48n2sDUEEkoZiZrcQnxfnn8KztvaAQV9YqcSgsu4EMiL",
  "key20": "5TUjMo7GkCzFBHnziieM8tAbMzLbaXGdDZd8FZXefqEwzikPaYTGLqvu6vbbBNxFVGin4KAvhWxGkKnbGLFdvXxv",
  "key21": "2anfBohd45CUis1fkWEQXpCmERXpwu7HLJTS4CGdJTQnLgG4bmHNiZZYAyKt3ejjctxqQeMmNaHkCeG4fc41wJH6",
  "key22": "46FUpQpsz39JdhLQmQSHFVTHLoamYtLcVGKkBLHUWDqHZoiNSvHi4xxyFb5e226aW65TSYZoXB69uARF8rBsMbtw",
  "key23": "2epRHTM1hk8HkspyfRGEEvgNTQFry7rVCWXuuVVV1XYxz8qCTfMbYrYMCCGgsVUkNcw9XUBQhJzySRiKDWBPXLw6",
  "key24": "ZjE48SoWNsPq94vmyZKLNQ4fUEi8TsKx7V1KaywEx1MHeoVssmSWaogKxbGLxkr1bdWk2iNAhuxG4nsdoYcVXkS",
  "key25": "23b9mfEEYgvQ51EYNH1pC7ni96qeTWFHak4DH7La6xGVYHb37XiDPCEEQyKj2myvQ9ESV59hA6WhZQRmgb4WekhC",
  "key26": "5fxsbGjKVco5hZTVzyfxB3m5Gqb12LSAWd7tcA1TbEZwd2zAE4d2YyFhrXCQiri3acicboSHvTwm3PBmzhwBjGhx",
  "key27": "a22GWaNdcAPr4HQAooY7iooyrP9gg8E3WD1VWnegP4HqBuYvAX7dkC8WCa9CJFbUhGCCkku8EFZHVXcLELp1fJQ",
  "key28": "49L1FssRhDsHeYzZE5X7RsdUNY7zvPDx8HCZQd4evoeGJ4nFQTbNR6smDXizsBXc6dfbY6KAfkFuLCnvLDGv4UvL",
  "key29": "4RbaKuGRUFin1jioyYvxDNDJ54jFuekmUkDfuhnikjjFKYdEaKTTYogj2LSsp7zBdZ52DxxFNzy25Rj53K6vzpEp",
  "key30": "3L2MJNqjykBKCr2RyCuB7vrQ9E4ho4eMRifj3NRVx9JXrdNcU4hQqss4H8oPmpAkXmSEfoC4CxAFEkEEbDrzVa2C",
  "key31": "5vfyfY9Fftjop69S94jDibxhH2KWVQo6AukudLGwEquYW5tjcYj1W3HByZXG3yAQ2b6nzX51tgSDb6ZR5Bs8eA3a",
  "key32": "YKF9sy7NoHkesypxGSJxa7Swu3TxEydp8DUnRR2XN9icrCtEzLDnXWethiWyLLenC656YNY9vdtnPshPnELKnZJ",
  "key33": "3b143hLaFLnh1GAc5yg4cBMXe7YTGokdv3k7ofs7coiQJYDasKphxwdSyn8nfwyBoqcVyyrjnd4g3wrLQKZMRaYm",
  "key34": "S7wjZQz9saR4vj2fX8s6czVkG9U7UB9AJvcztEVG7MfdaYSSat4t3cBuNibP12ddJrV1TfQUDehA7VQCwuUto95",
  "key35": "57w5x5UFETaCmoeh8ddddjda4pzGqLUU5Vc9WYzydojFRXu6nLqs8J9YKyxEQXLyDZVBmqGGb7J6shZYJSkKjxPn",
  "key36": "2vYAuiebxaZ1vSM7RcoqJZinNiJbGMzJg5URS1VrZG887uFF1CT6WDTQdjqMEGHBLCGSSzxeL3mvu8HuNpqdBa2p",
  "key37": "5roFhAwoAa9dcM5Txh2Z6kdWygiuQ373zaVGUdZ29GDLu5tXj6LfrJikHfH1WD8AhNCrxi5wwh3CuiAtbZ46Wp1Z",
  "key38": "45rhRbDrzbAxr33huAysLCEoJWvKqUWJDKXgv5yPP21BW5LZay9zMciMRS4n9ynrTCsNmrqtks1mMpPmuHQZEkYL",
  "key39": "zKWtGxiDSF5X46PopGeEECWZ2tx1JWduk9fD8BsfcHmbTuNUVH6Ba8QCPGXNvu5DqNLJBqYaT1RFqtUvGLRKruH",
  "key40": "eeUnEF1ThcSuEJWDwUjqWUhtXbnNgdoBVT3gHWEmAEwKSUrpX1ufYdK9UgMqt3XHkPNQT5UPi39f1uimHkRXet9",
  "key41": "5CGxJHepDbKSU3r9FPhX5XDC9GsDVQ1Y8vyJhCgyJ19FscR6fRAHNhsP76t3oeC1adcBC5Hib4c9m7UoY3df2E7",
  "key42": "2qVCPhcLdV1VkKmyVUnH1LGw8Z62jZFK98Up8GdVxQ2VY7bqixoA2ae7rFSfHXnVMSwAmVjvArUrhZcgLR9GLFTc",
  "key43": "5hVSqew8MvS84zKWZEsrbm8oLwjf7ioEnRxyHQME6EiybpZnii2wrpGo47dHq9CL7MNGbvkSBUeErhmd2k7seynz",
  "key44": "62rkBeFbLMyZjMWYrVy6WtWmAbAbF5T8mpgFjVS3JpYDbbjgfriNdWCtVwYaEPo3cT4HBofwes5h5BiwB2UJmbnE"
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
