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
    "ujmyWRfo36eK8mGcaiNj46PT2QizPmmDNGNA7CSjc7d5J8KXnaxF2m3R9Po16hTKyDHuY9kgGomY2DKkZUhD2QV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5yGnnCb4yopZz7piKve692RTGuCYJqhJPeAXevjX4muEmKcpqyXNgin9J16tpuEAKeaTGdabWUpGdWbk5aNWyGop",
  "key1": "23pvwaRFbDaundbL24ux2HfoyFfykgYVLCrVVYUyEfuJ4WzcrCggD24bmABhow33ATGfXEm8gVkvXKVBSeqtdXsw",
  "key2": "3uE5vXnAJ5rpqY4inHXvmMzfoJYnvysPBr5xaYwUpSJYxjS2ULgnoWUHgSVPdN8ZUPr4FD2uZzRQ4jhXquycPF3h",
  "key3": "3vxszGRqooiCCWg9wvf2sEKtQbz1U4X3P89woTb65zg97Hqtq8fTYmDpDFhPhP31PkL8EKqkh8rfZ3adomvKR9rb",
  "key4": "5TwdtS8doho9cqpweWwUkwzbjiAadMjKHkrM1hQYGBnzXZK7CPo8ddYETMDzoi9QvQSci75HMCDdCQWRXhBxjySX",
  "key5": "652sVZvzs5R4weeoWuVXWnpSkeYx1RG81JPF9zPrfqVDcGzAmhndT2kRXmYbtR1DE2wvVwvsXXNRdr39kzA83LxT",
  "key6": "4PTwsEFNSuF9JyrP3cu7s6aXjFxndnX6S65tLTFkoQsBb3hFcgJXszitQ3bgTsXec1A7sjpPykUbCvVQ9sZfBV12",
  "key7": "4DSXmk9XNUZuLcbX7dFALyhNvuj5neLjYn7QL9LC8KE9XECp7V1GWcEUyoQ8XLWvFmtjFX1j8Yyd37WvSYFBBKjN",
  "key8": "5Q8vh6RiM8xVTWig5iFUbQTGPMZuf18SejoHxKFrKaRuAKFZcSrTstPmwnk6heLxhgqkGPSCk6tu5vPwpUn8W1WC",
  "key9": "36UMBxqbs16dG7fGBhS5hiYrsow9DLiiRRfM8XLxMx23p4SFZjDyPnZXcUct1VtdE6yVAda7GJpP3QJMGBcQShMP",
  "key10": "55jEwK6Mz4t36RHE8cwMQBkE63dXS8R3fVub7RAi3GVsgiD5zaT14vFxQDWbyCau1XBdXnfmJ8kKdfCpRGAQrutT",
  "key11": "2M8oCVk9PHFFLthJJgt67ZrmtUp9QLK13FvJRCCj9yLqzsVF5BxwDLR8Lbtfh3CDjuqYzVZXRrwdpvzJG5SdxSrw",
  "key12": "35bhQVi83ynY8PRB4un6rJTV42uV1cSg7DaUYG5UtDmedFx9WBvZJJyAHN4Wmt5nWbunPBBnjdtQfHbxng6QmFLD",
  "key13": "21xU6cwQS31APNgLuxyz6EdwbxGLCQGjnFcYc6tgUk8bMtmFSa2TaGt6G4692SDm4pwUxAKtvAYsCxqqNDtxtdXT",
  "key14": "H4CesXhTYvpZRYbf4EBGsaBdL92f482bSwJvQyB1o1y7i7N3dVnvseB8ueUyEUWaWqcCrzWeNtQondatn8dB4NS",
  "key15": "2R9TW34hXeeM5uQsxsQcpoQT1xK2RV7apUuJakMoGUxWkD2zaJ8G7McJw1Uw9wWnvwBJN2swvpaREupMthrgNriw",
  "key16": "4QgL6rbCGHUZYmYhRw1Mc6NNWT1azNuYfQCGd2wmSBdAyqQsH2ypDqUwC2PvZ3EfLfSedbMiUcwpyameXm99mFbY",
  "key17": "39aMxZ2arXwmnomEA7pgUBoQChkDLhQvG1bb1mASA4iQc21foD21DtWK98iiFE2bXPaBbHSUcYCWfdVU8cfoyTFp",
  "key18": "2mktnR2U6MCYjxxYXAJbVgNwj2BLmwyZceimuo6X6qiCsZgudU7Dtq6L4p33XeBUv1HqeQ5w4G8uQib4bKxJSpe8",
  "key19": "3dpSqrFdme8FrzSQTpELoFDiitxt8AiT1VUoss6PseJQoVMwPeGqXqRWMwfLGbFZ98a58An5zn9vNwHxGDu8Ugzt",
  "key20": "3F34oZKvZx48zWjwYtSxiNDkFdZsCDHBcbq7QM7yuq7ZCnix6BaKEaGzNActhACwNUhvNxBHS5HYLEjkiHkbcwLn",
  "key21": "3eaAwfg3Y5S3JK8QAJcbP8cvz74CgkEuKFuWxdpjUQM345Ba6ZPhUY1jVKfGKj2noY57dhdzXAvRPyeU1X2q7saq",
  "key22": "4twky6m6XF7cLzkK2LEuhXanzBpLDeW5akxbt4tZdpYWyDoU1WHcAdQHsKTK7qytcDMPJLwAUfcDxcoYtJEkU1X8",
  "key23": "463LzfmF2gcpwkstat1SwpsZyFD2oM4AxTmsZi7xVvirbBwSPHVoXvRqdavjpjdxxGsp6VyfydMxBnKLeuYShA4p",
  "key24": "4tZHctLbp1ZQJRxeZc65zWPS5eDq8zuqR1rqRSxoQFiVWPMdMHm8s3PzYRdFyQ3m8ASkXiFB5NpjVsNN3E7DiK8a",
  "key25": "3JxJgNWVYysFBwHPo187xw3ErStmqPVSM7mu9yNisj6Zf99UhQzvovLFvmxUQcsBU7TA2sd1MnkqJP9EVR5ceihm",
  "key26": "44J1ktrgNA6wJRN9F6Se9ytJxF1Xfy3ByyqtBVMMpwTg2PmkUPueZARqN2j6qvkGY6SQFPBnwT4RYih5YnRprdZ8",
  "key27": "2uHK3uZ2ye3GnQqDvRoKXhicogxKWgYDRMVDsTaoBvhzEur1PWhXhEAoNwj9eezFFqbDsDJJgwnFFszpV7ubpjie",
  "key28": "41f21C4euMCSgBsXatpGUJMmuU2zJy7nsUekckwEWfhYSGyBmJKFgBUqnmJqsNB2iW4nFVAUMWZfpe4sLT8XtNxH",
  "key29": "wHVsbRzaX2GHod9zHmYkG6HYUD1237iARLwpLCdSNvhLvPKWbBHNDTK45MykfoKBQW29Mu5wAm3WMeK6QZxAa4C",
  "key30": "4GLf8kLzFMHmujiPfvNKMD3Eg37WRNPjtmi3n23ZGYgdQW6pnxrXGrNVPLf3n5syTBjMk6VH8XHnN9SfTPj48nJi",
  "key31": "SSwpgU28xjaZXWTbbFC9xtA54KXMZyb3dpXS9YSbHpxiZpXFvHpcS5QuWsq5ao7ZbV8DeWs1UCXcCWen9UbgGZA",
  "key32": "5r2h8ewMroMgd77Uood5A2xNRPVv7imN3PBPkmj66VAhXVgYph43TxqAMRbx1rih5NuRCFqKDCBFvXMMaxtJDR9u",
  "key33": "2Vp7qad8aftPo95poWbCYaVZf1g1yKK6Nq8qyRjqFMH3Yg1Yx1oEiWNf4M7XzbMN2AKL6DpwqLe67kQ8KgcdeWuW",
  "key34": "32N2qRwxMniZcqD6cdLRXHS6zGAg2ZKf5A6pEBugQGSjfeVDUdopWhByHAhLKBywmiuQjUS8XeVRvCseY9mcRZGA",
  "key35": "5mn5N4ubZmMFCdWbNvnHP6AASVmG8vGPwuRRyTGnKUHQqjnEqrmZ91PPNSviU45zH9NmZLYqd2ELsUeW9jcrLuzj",
  "key36": "5oSUmXdaaa8KgHS5qxrQ9FH92tvhD2VniBB2bubtmt9zPipsNgNfRBVzPJ4Cjc6gwNb8ayhoagqh5ABjUSdYLu6W",
  "key37": "NXK8kcNZuoxagAwuazJeafp8KmJwYFnueMu9bje4GfZQdHJUjv5FGFJ671v85i6536QPRpWszokm2W8DHgM1PFX",
  "key38": "2TB7RVDvGDcg4Exka79encFg8aJW6u1Mbz5qWDSwXn2oPYMxqWL1Duz1ZN2myo7kuY79eij27QSLy5gSoBkCSTut",
  "key39": "4ZAz5g8UaiRoEJchJ34poDeWVsJemLNSAKeJSMaJQ3YAsnwhNkp8UahywFDsNWyVox3NbgLgD2L6TuAhZfELby2h",
  "key40": "2vycCQmhGDjvo37guQaWoh8ejTrQ6pWgVnwWguKCxJz3kVKunWK6qR1HpC5UxKctiCQnAre9Kc1cX94784oTtXvA",
  "key41": "28RZ7XjPLsVLhYkcHwpLctf5hUndQFhfZH1aYQtzGH5RVF5pniMguHRgA1HEaCiDvhPi81KQLbLnb1cm1i3Sh87G",
  "key42": "59rfFPX6ukfZstMZaruQfaBfx72iGhj4wATigHb6pPw2hrMPSSnnHXHnkWx3awSi9ri49BgdXcbQQ92eWhubDMQ9",
  "key43": "8jSGiTwmSmpjcMD1yqan48eaoRxhcF5aQPMi3nTUv8WhKbZtsUQ8KXT8B73sEMThm35KqqJvB9sGj4rjGPMsSAv",
  "key44": "fKVGVoYEutUGm3BbUeJxt1ufX7sNj7NKvJQAnAXPXM34dwe7LrSZybfhBr2G3A4B54bEAkigx4HY9UMX1XERPmU",
  "key45": "5QPzbZv6k2ZwVLFw3tA8f6ruV8Vr2fTkYsHnEVMZZRAQifhuVUimJyMFbdZYECBmrVfsxyJZJNboFiVegwz7x7v1",
  "key46": "72SmaE2bk152HWBnmoBw7LiQHkQNv3tdpaTb8gP3LMJxQQ7ggZ6bLPLj8S31UA1aaMLZXGaEAmZ5n7w6dJ9Wx7C",
  "key47": "2Qq165TaW1XUA1qpGVX5awfkjW2a5j6mot4VQvSENyNN5bSFcskRHDTonRNW6r87vustDRQHYs66atHBJH5uuYPX",
  "key48": "4SH19at5z8qimJmVbumDiM2AQAxNtTyCT3oqUVGA5mLbaEAJ4fCxZqpdP8EnZcDLVk6kwmZvzUe8NwcZU5m3Z6S2"
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
