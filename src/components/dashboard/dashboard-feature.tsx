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
    "2fRnkzQcCGTHcKzFcTdqBjTPNoC9XvfWSm84U2en9z4UA9xQB5ebtVVPK1mQqUBuy9gk2w3bxwFAYBoHyHq44prz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2BM4zGafLsPQ1dDrcA1DHsrXoGogwEE5rkuesPLYQ5PcNTHVk77HHFfNmTwcAGKeFNDfnCzEaLpRf5SKD9jdMasa",
  "key1": "4AuZYnXG8KHa3nET5JJCXuGCqLTDyZgm6oxDa7bXLCNs7UpR5dkSQ7AcCZoMoUUy4e8EzbkbGXhvPcg8RcGzf3J",
  "key2": "38E7xVjFHnk8si2n8Hq8f6VbMNyW5YF63aX4TRC6BNaixgvZqLbVdc5FHDKA8hXfmwq2c2xbJKmmdBsahoMcvxwo",
  "key3": "5qW7wAd1Qw74VYCpBCFSMsji3PnJKs44D1ofKR37HMdpsN7cPUToFqsAKQfQeA9Bu1U63aV2e94fyEB78L6wrosK",
  "key4": "3oiJ9NypXVbfADbbCjeTnxwmhkqvM86tuoUWEgPdJTVSJNUQ5Ecxapa5EPpz7aF15ShQ5ctnoyWzkdioWBL8dhWY",
  "key5": "1qsqPAYjNrZfu5AhGrK2UrHRyDLynJBFFPhX62xLhofyWK8GWkg2RNndG39EG5sBrzcrybJJNVG8VLokt6uYFXy",
  "key6": "4YXxAXANWiQni2sxRFnUvHnL5EpRvibCuVa2Maqhan9jj6QTvrCRmYLpy27twPzY9BC9S2aJnjMhLpFYeUjPnrVU",
  "key7": "5fdJM3JpADnfRFGCqsVNfCWWm7HRD94Z8FdXDDfWvxAtgkeLzaXu7uSU9n8QCNaT37p7KV5ivKvVaeeSeTKPMzkY",
  "key8": "kUXSRPFn5mGbzTzoWoTcHBr2yphsrcXb4wgHzskQW9RN9sDLBDeTmkAQ4xkFNq5wS9X7g8e47CpQa1fN4Kws5Ju",
  "key9": "4XUtGiVxZs4511DiPh8bgwJQBa7SY1aMvxjmaQq4XhH6t3YKMrn26cTQ61wkNkBXXTkAGozVwUQHogUiDNGzRfCi",
  "key10": "47tk6mrz2B9cxT6pr2YXPfKmaYuk1xQBZ5f4ueg4FSKUJcPRGssojtvvCy32BmACbos8gFpevwiKtjfFq9ZdRJq9",
  "key11": "214dbVdsC5wU89UHDW16VYhRW99Y4RW3rW55GdfV8w8YiqAYqWpZReikWYWFxZ1uL9FqGaG3WW7Cg2ZGAQqZb5mj",
  "key12": "3PZPntnTJg4Bj2tbp4h5TGVfM3wBuemL2LQhxEUY29VwDVVg258daR2tjg72rLpRnLVA8KiHk5MGasYArWhnXEC5",
  "key13": "5iL7GVg8JjWqXD6rhQxKhWop3GKQX4ozeqQs6qzK1nx9gsNEKh7SFgnsBKo5uNrNQhvZuGF6ojSpiz3LnovYESPM",
  "key14": "4XmVYk7ojGADeZ2uR42T7v7Kog8BLHfKfu9ykKrZ4KZ5krakDj3ggwUprz7gdxsA8okkMsbmcTSudPzAwsjH5m48",
  "key15": "5TcC6267UwXC52ixDKMsj3xyXRYNJwmeDFv3ranFEkuUx2y9usir7YzwF7pwzPingEK1PgY2ic2fzqcRP9ymrXkd",
  "key16": "5m9uyKgobTFWvSGB58tqnrhdzQtLRJPKdiFzAQ5zvwLHyzB3gqhMx3CxXJPWjTdmQHUyrX4QSc9WREify3VjvBTV",
  "key17": "25vQVvuzDL9zFWDy5JDUntgA7f5HmdFYKj54oFhFRpobRsWMzus8t11LZrg4S1GNj5AD8ALhtx2RHLvNxZdKaFCh",
  "key18": "2iRo5G4kE2FhsqvUTe6dnggkoUj2Gf4PvSSjoV6j4vBktLPTH3oFHWRW68SXLyyVNBFe8ArAy7N4odCNPSVwvzpX",
  "key19": "5cpbgWbcFULwMZRUud3GjuF6EEnPNRpSnYsKksLNKhGr3r1M1juSryLTF3iPzECgeLVtfyRN4M5hDV8dhJezySVn",
  "key20": "5DdXx6M1XzFrw5qbGmcCKAWzZh7T1Fs9EKcAY9NEma98EF3Pj7uSy89xAPUXtmLKgTxwQsewRF85WxeckSBiE6zV",
  "key21": "4UP6zwuCwk3FppFQKCxQCZP7E8M3gPgJuoUcPRYwURSbiwbZqHqf9phVVVqQLXcRhiE99HnVus2pLbWMvyWLi6Uu",
  "key22": "2GxFH1yCu5GCsTvZqmou7pr9ETUR9Vi42mtsvopDCkU5YBvgpXZaLzPT6wUV6qCBSnZPqazLNo4ahrVXevm1JC6H",
  "key23": "2VQX3qMP54BCk1uBH5hN4NLvxDUSn26T1SawjHbmv9mZ6uae3kBysZnAV1EazV2FbuNHyWd9gmcbBRLMxC1RyYhM",
  "key24": "5dJgY5WeMAjWkLPcUuZ2CwxEAEDH2qHv9atNDqHEq6RMd4ZjuU3fH7DEZokMHBCBVZME871viP2FPj1627QF27JS",
  "key25": "tbAHSY1UEc5JYj13FgQjGEv2NZPmL3DjnwxLnRudfDvNuxGvUDPvYjssvKto4ompaQSWnzzYrrqZ4UT9c5qUoUT",
  "key26": "5muThZvzWk1885EFKoBj7mgiVYnZnBGZW7rQ77iPssFhXGhbqChESd8nwhzpVjdzdgRcHeMKCuPJasMMw4BZSfJy",
  "key27": "2yEBfbwa5ePb1BBCtgrr4uFYVt5Jwsxp2npEuaM8MiijNXW6M7UQoWcYNLjryPMATHB6pDhWTzBgJaYaKjggrtvg",
  "key28": "5zMFt9vaEuHu5b5Rw6iVKZ7M3umMPDtMDD2rJMyHngxEducGNdG3j8E2ubAqeATbRsed8djJxPSWter9REF7c8LF",
  "key29": "3uRRzVzK8XpDN2GULHe3mA4d4Q8btDH3mCBVdJFn9rJ2vzwbKgGNkDT1iW8VvE24C6EzGzkJHPHvuFPLXrrSVPoG",
  "key30": "HsTtvdxhF6tzDv9kvXw57rVpvVSBsUCfZZqH9pZwEJSEHWPDGBSQAaNrc7rN8Wv96vXeLx82h1dgFmeRYA8C8fP",
  "key31": "3rUagNqjuUbPjFaJCH3YFen9o2RyJvpMFWcBTtEbE6c4dgJqSB9DTHFiagWcabk2ntXcgsNZmedgEUtgrW94Z4dZ",
  "key32": "2jQenNZ7R3gMFB8sBVqcLFnosLo1h2idaQnChBpLGDurmTX868ziCfhu2WAvECuaoMeJKGftJY7XiJ4YjEEBuYHC",
  "key33": "56rwwiSpbC7xyJqTcZF8fToMyeMMfp25BcqZnkxqJKbBPz6bhxp267WaHRue5PRC7kh8oqAufbnbAbKb616zZ72u",
  "key34": "2Le1J4VbBusECuHCqGv1HtAUxeaiPXjqKs33TLRyMDCfav2qGQnKmdoh1586b6Vcze8icyHRjreqdP7eBcvGm3VQ",
  "key35": "yfPRJCU4MvWTgFTnLcfzshyvW8bYVduL4MYPnHAy1sipwuof36DScmmBASD9SsjQkFZJqpnBqQ6gt7wzfHqe5Ui"
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
