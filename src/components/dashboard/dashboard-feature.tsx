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
    "3B5ozhYsBo8gJnttrjZ3niyMLeq9tkwNmSTPxzvRfpBcnihKW4HGrgeqfvVTGxFC2EzMDBGumKi3CNtmSUkdxX2a"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3LnQcJJ2CAMBDchcwUowG7bJhEPGDRK3t3g8LADchqtnRGHc8ufJrN6Pjokx4Em4G5GMZWCid14aUKWZZJjb4GDq",
  "key1": "4rQ3khjfyotqTA4afM2dA3r1bwDekABdfnBDsNc1LtUJzpLKgTvaBFoNnyJC5eJiZm4AtzsccEpHUWbwziWdNtiK",
  "key2": "2eEmoYcVHrAFpbNY8bsvs8GBLCmJsXs8PqcehqZq4cfkBd1ecErnGw3motNVtPS6BM2NCXJASits3GU6HNwzumUz",
  "key3": "5nqoA3CYfGSV9eogWDfA4DEMBceYCsxNytQUAzCuqPi5NBy1dcUjgNfxSBjNGFWu6qGomWgZRmKNDGvVW12S81xj",
  "key4": "fnE9VUUhHvuVGKbbm7ikBmTrCjkKdtu94MiexpM93TokamJ5eA8z5j6kfon2Acydm6K2eDBRpmfuoC5u5sYzUNY",
  "key5": "cWV7DvqBrFntrCtyqdLjhWckfoy1bavBqcPnN8wJVox5VphjijujkdBR48E5Nz9wDPTnTvv6B2kBnc2njQyAAyg",
  "key6": "3iZMSHn9bZkU7fhd3oBJsrK52C5qudgVTxYNs7846LQxyvqFtfG4Hg3rdxp8XypZfCNabL2LmXCETRutB8VcQ74z",
  "key7": "4L7zYn8Bv2fPKhf6BADucNNHCiQQg5Nxg9UqhSP5sjUMznvX4xagrvfYQFn3AykWuwobmjNze3bRNc4VPvG8Fhpk",
  "key8": "55R6zoxKTTpDPxNUXEHCFReeCnaRpSPNR5kwWcZWaaU7yTq6yPBmkdut1zqX1ep2EiEEU7v7TyrURau7XBUWhE4F",
  "key9": "2ba9HVnk9BUbq4ad3ZaGvJSTdfBWZdwZvXLy2pmMdsYwueDB98xywzwtXT41Vhhpu9AxMfYKqUup6SMRfQya13FR",
  "key10": "2MWD8S6PXoZoou7UZq7meHHf4no48n95kJPqnaJV4LKZE93C5okM68X8eNhn5XhHuKdhWADMbYuXCtmmhQAPN11g",
  "key11": "4BZH5WmzzUFrxNGRW6wiQedxGF2xqPwRPzeTKJ1sJ4thS9KDcdnpNeHtMJSbhQy5QWnjKrkaZetS5auzF8F5LTYN",
  "key12": "LxRqnjYsNu75DwkYaoXBPC8iAwpaHpXCxgyQADs5gdUhbs8oNgTMoqSNvyXpczgwRGFRi2JGscU3PYRySAB3ZpD",
  "key13": "3gnTuChQB4vY45mdmragY5bDVkxezStVtLCujEoQhd9b7HBApn9ahdZoVSiirD5FqkMCYRq5j85axpdUd3Y7QxmV",
  "key14": "enac1tJCUctRmSb5Z9mk2dxv3zBtpbWBurXKhXH4VHWiprecWGjVnJuSLXQaKKoRTUxpzu6P6agPtVsStjzfG8X",
  "key15": "5fDrFJ5St8VNkcXowZ9oaUR7uGjsj8cfTcwAyM8nMzvnPzKzBciPCFEmZHmFiuYNgCrzQsJsCv6RsgsNaFehB2a4",
  "key16": "4Hbq1P5gNtRugH9wR9kPUuwa3gtu1WB2sRWq6d28rVEN5VQ3LZvuGMZ5C6KJFKivUyTqrJH4DdZzv3JSyeCJhx1H",
  "key17": "4kPxgypsTu4PH4ZkY5nCSYcs8ZZjKExPT4vupHrM1fWivQw4b5WvUKB4TLEuxari32or9w1h3oKgzQKSDMmi6JgA",
  "key18": "4BEMzoaUKLGKfwnAhJzJudhF5iRe1LfaoUB97GJM6djo2Yas7dK25FVP2YSo1Rt87mt27uMzruvP3ZHt1WDEwZ9C",
  "key19": "5A6zwPaE24cVictj1Fn8dfW8BeBNdxJJaHgbhMWPV8zpvswCE4L18ueUVA5mP6ZYuiE4G6oEHNtbhpDHDGbFw69r",
  "key20": "rEQK49UAkNS5WrTtbEZv2o27bv44cWaVW7t1NCyspCL7jWsCQ7YzjrWaf2YAHSAXaAhRUnYUrfH879Sdk77grPA",
  "key21": "2WnkKdRHkFxUQReeQHMCRHSJxbkiiMouB3S7mL2HPm8duySpwT7kyLpi2PZuy9ZcEdYfXh7fbT77FAZ2vKAFu5Na",
  "key22": "4ArTL4iMHV3BosCBx3j1ghfqWeCZ8morpRindJBH47GrrJ3dbfgy9g94mfgTyBdLwyzYkDtgkLSiuNBypm6e6NZX",
  "key23": "2UqxmtWyAy8GZAb7VfMovLCkSaNe7BxoRs7fwYVib5YqpuFkxoJNXJ8MMP5mCwTXgPcEpX1YdPcGBGi4ehnL7GLf",
  "key24": "3GwnJcQds54e9EThUDohcVKoCEfwsX1Y1MXm8Nwd6x5PB238XQTTNFyfHV9WH7CGdjhbf4kiJGnGnpySWbbM4q7n",
  "key25": "4dcq8bAqCRU7QDzxBWRkdkdgEGYaePAXynnU2VdZBv6VfqhXvGEbU5Cv5WnbPq8tByfUewMwN7mrYFHHNihMquZp",
  "key26": "5AjJmPH3qzfxJtvXj7P92B5vtA2FQuQz7KminUwMjRF5wG2NwL6SxTCRDE6XiyexVzMvDZm4zvVgUJ1J7Azhpesn",
  "key27": "2cFJRtZVGSA8qdpHyS41WwAyyvcPAa31wofVb3zFegqMSTMzt9wn212iXgbDfDc4QxHAKbNYNLPBBav7t9NeP7iR",
  "key28": "2zaLazDRHz8GsmZXYg9WytTtcHfv7keYfwYPDgDfHFbbWtY2afdBkbJA5SR33PUH7s4x6sNZK4Jhcd4WKKEXHrXk",
  "key29": "wLrVV4kv3L8LMYzYzxqvgqbMcVxnfUuUoVXzZH3LF2EionB31r5faZmeqZrUDWGMuSkcVR2Y5dCJX63fSQLKX1j",
  "key30": "MCq1VqskfgRugFzSr2kHC7rzZavsJTvAavfuHuD7aphZZHAiYVJSwqKEicnAwcHRLdrhspTKUfkf9rH5KHSWAtK",
  "key31": "5q1AjAGsgM8E1xhfPcftELmhTD57ZSusKCbrtHChTnuxwqxXYUREszrMHHb8PXutncjtyY2UVPeFFd5PQLQNDrQf",
  "key32": "5i4kq2MuKBwCbyz7pxu8LCExZdRupvaHD8g6W4APjYD28r6sYyKVWnQrJUtzipKp44we3jTPXMVQBvU2PnsqTKvT",
  "key33": "5CNYtEbRyBqL4KkRXFRw3dnGfypmj2HB2N61xt2bRw5xKowcVxrxLg7wqmEE6PV837hFt7TjTcnMkBuupPM9LTG",
  "key34": "u2E9RqExB4WwECAkbwuxgLVKQKLHe8rbKfLbj9SKoXq9Ytaw71wuEbi5yyTyuu29B4gNM2RB3ftQrhVeyf6GRFY",
  "key35": "325q1KAjSRgzKLGFhveH7PBFhN38BdPBibMVecoNAXZv98XwSjTXNTyVw8kc6d9vMKbmHqfpQT64DV6p49oejfbV",
  "key36": "3V1f6bNvAM44x1hKbJa1xbFprcGA2LERy28byfpkGxccGKAtGVgdpqrHTJfkTQUprFME15bYhEVviawAXHNZsU6a",
  "key37": "AFtLsM3Uv44PWtw2E4Fi1cQ7eEuFJH9bjBUX3GaKmcJc9PDegTPdK8SDkFC4et4MwAHboyiFLewz6ZffE1BDJ8H",
  "key38": "42RM1yJRoRFsrmSjJtQ9DcmNuzbEffnpkttxYYh3EUEfpEKXS9kTK8WTN4HyPeb2J96ibUhE1J9X4zC8HNJ1fzpi",
  "key39": "4tQyaRk6DEK3WcyqT9LFqC9ZnyXHdRA235bmPYCrYXBKLy2C91JdWmWdegD9CehJeKJpoXBZUPRh9L3DBYK4bRj2",
  "key40": "4arDeeoSU6fbCCbAtrdCw8nL8KnpFfDNv5NmYjXJL9dbfo45GdD8wi9ZXAYjRHWKToJBNG8W4huBTmqpEcWC7nVF",
  "key41": "3GJhz7KC6nmKYgePvVHR1cQrmTZNg7aLGpK7vQjndiD4esJRq9FeZimEZhe6rXLYQBiqyxQVMEAj2zNCjeruiZLp",
  "key42": "Fgv9c55MHFYpq3MKYzR94AzYPHFg1GK47wcG3VuXX6gJ1T1txLhGhfVAj1eeF9ucVuDN1LgvQLAN6TXbSHZpQH4",
  "key43": "3tVMVQcyDVKPyaqn1CqWgJH6BdcdrrE7MaeDpqJ5gBiFKgBARWzAaJXZof64aNeJQ35PWA1Tr8cJFTzM1keNBTi2",
  "key44": "2BTELGTUouQDSMSMMgJtHSev68CpgtTVmFCcfyUBstanAJ6qFAarEZjrSWiMiB7cpKn9m9zhvQ5ba6M2WKw6vet"
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
