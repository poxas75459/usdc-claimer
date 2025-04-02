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
    "29h8o43KSVLqcAp4AxvRDx7eeCgeJvdoi8bNW9F9JHFWy83ChFpsAp3F3Gm2k4Vv2o25jwcQJTxUXfJocwVoE4zG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2M7u72e1SxPAv6pSbTxyBKcpiG6GT3j1R4cVYCjwRzYirJUFt5HJMTKmT26t1B6Gc2qGdk4bmGLZD9Zypbziexzx",
  "key1": "45KXMfD88jMyVShHTeX5Ru8pPj9UCtMjWbUK1kpGVcRuoYPy2hd1H811FB1TMcFEB6ATZAfeYacWLLyHWGYCg2UR",
  "key2": "2vccg1ReDZwWY7inEGuQr3h5N2RqLFXBa9yFk3sFvL3i2vTDnJvCfUDUFtzCuX6o4dEYxJopPLxceGXdTPxiw3SK",
  "key3": "5dM3RipPYJ1FLF2XwHfhgRGZWVz3AquKPJoZ34PkEkPaAa9T27qSDDTqo84wrrP4cq996WKPki66Z3B2yFjB5LAe",
  "key4": "4P9Etk6DzFAG83RUjGx58tzYhCbBcXQMn49PjQfaD7FB95xTiceReL8vLEPoMFNLLj6Rfcr1PpHBjZ71aqkoAk6q",
  "key5": "3KoFRtrT1rh3iiBSEQprQhgfy7HZvPf7cqNGLVCXRsuzw2pismBAzgsN1qFhN7UyXSzQ1ciC2rXgmxKi1EhLF8Dd",
  "key6": "5uAs1Pbj4SdCXEif1YmWeAppzjzNnNjEqscAiNP6H3V57Phegb1gqjebJn9JJmQiY1Gs8GVHhmrxoYgH7gtmhukq",
  "key7": "2WNrr2rDQ8r8iqjC5Fzp4P1CHFk6gbKtqnsFoMSb5ZijVdnUesEfEMaazdvetKjKAYSScmSfg2M8yJUuPN7DK6fU",
  "key8": "RnDKKnCbDLWM2ZtyGYJM59PTuEHic5nyHFjjJ21JRxoqkiaASP7Z6Hd38s3GDpDxoTYcjAJvbcKqdDajuQ9WgQp",
  "key9": "3qvYb1fbJvJ8LZs1wQx76WsqBvBDS6fJqfTMBiMNVVT4rkYGovaQHBreGbiPua2PkBasfH1i18bFKBZsod39PEks",
  "key10": "4AjSyYgsE58tvpq7tHFguWEzmgoCvA7nrS7KBXox3VwX13Q7hKDeiMzMrMu2Ew6ZK7HJtk7ViUJWwV1jdsq8nyJV",
  "key11": "66BBaBJHf4LAt4YthHmVuqFxbUqnND2hoWzE4NHVBCvTryV2UtugnNj6mNDuNvp6UgWdvqxmRnrmRoTfQao95ubT",
  "key12": "3EDqQcqW1S5JNQsiNFxvfEiWQ4A8Zwr5zbT23mz9DFui2HMxZ1sKZmbj3GBjjoup6R8hB2Zj64MwPjcX7V6hoiwB",
  "key13": "36dt4xiwQwJ1HNchWvAJLH5UZ4fCrSmqc8yWUQR4q8BUH3wxZh7RD7xf8GntedmNRcdVHd1TFygmVFu5mQEi2wPh",
  "key14": "313Fs8uS6w1RfqmfiBvomo3m25EWUGoxVewEviBLiCiZjDvpjEpEgGUKKsfZ8o39uh5Wg9BqitD8Qdpas66zi7oH",
  "key15": "2uAEhpnBkiHtgnjbDyaksXcsReXNJpzHaGvFYpP3gSRZmwHYs3vMukMbjHf5LaoAJUAYLJ3JEL775A3pN4FK6Uym",
  "key16": "2GDT8DCHe15H5dv1KEXkcFUWuJeXhYYB9VHmjVB3NzQyMjyXqmfNcdd5x7JCbDfVHFfmRiJKzWju3RJTZmy6agxN",
  "key17": "2vMWmW72Mo8iJphtiHLgiaVJ5UaFNVR9Q4ffE44o2hGRaZWEvRa6oUmVsdh2Z6RmdVNAdBZdh6L1NLjUEVA2TsVT",
  "key18": "4uxqsxNur2QBL2WEGwJUJpV5UzpyBVct2qowfq3UG9Gc6S2mRuKWB9g34NWdTN4B3pWYsJkAcjUoyixo1CtXibph",
  "key19": "4cENGXjP6Hv78JszyLCQFimGw7FhegKuF2kEZWngoe71j8mVHNSQpD2sLGGnCBhuZtUATzYR9q83avfj4WqB9Ygy",
  "key20": "epXCU6cG2s9q5KdM1NNxR3HfC3AfdpoBCVGQSnN9b5WKMUfPgNaZoRBoyq4qHsG3qq4L2X4Q5tFfuaB6oeijmA4",
  "key21": "1Ys4PabG9f23cPEyD6fVv8cFj9Bc63uBvZMaMzd7xy4Lh4PmHrVD9XtYUHCj9j91HdVU95uHQECyHJYH55vAoyF",
  "key22": "G3Rt2HYVjrHamWe7HXN4CBeorPe1Zsd4aah3pD5LtGqL1RAQdDHMmbkMxGvdLDKVk2o5juxdikKCXLr7A7Shrzi",
  "key23": "r4nN8ra5VStMPriGUJzaZifL86HBTLY1VtYv6m2v1oDYURbPxU9LY3xeUBNBZXHULj2VU8ktZTo8mZui44V6skF",
  "key24": "4aCnmjhCQu5NoDCJ4wBdTmUtaG8Hc1GppC76iV3hKxVzbUvELQooqTYZVRuuFEK9fzedDc1Rc84UazTDZvr8NX64",
  "key25": "3aNLeuDqxjdk5YVxB63sfpKoRqspTZSKS8529fFaQoQy9P387kwrpcysYo9vHSCF3ccsTx8vso1uppyekGD3XTjr",
  "key26": "3muKtHvNWdg9skhDTbVp4hqsn4kLeaNFRkD1S1fTAajSG77UZEXCFQU5fSgYFdtW7CRtis8AHuL8uV5Qnd8m1mST",
  "key27": "3g1dbwSVBN9VAXKrFSAXyxtFmyBb9nkG53aDhtACYrjKqkwDQyjFNsZsdGNrPLDhtq6YVBSqzs3XJjzUsrzked9q",
  "key28": "2uv9fXTh8scFqpJ9mP31oZKTHhPXrDmABQb8fpadzbUukwoo3wdpfYzSqMXyUqBHMdAorGQy3AV7oKqVgjsHwmsf",
  "key29": "5T1aUN7WHgGQYH4SQpBjH8Dtij6SqdLExrMBBh4zRDmacVPTho13yTFTyoL2HfRVUrNN7PrR58PrE4bKjjyT9FR7",
  "key30": "hCMV3Zbcx7ZtjiRzY3rqgbuYkBjZTKAw9QBwGU64SMXvm2ZekrugFnC3ZvgunRiY3QQu5WhxHKSbnv82i2pRvJu",
  "key31": "bMTeAEw3d2bCaK2X4tr8FUE3dngsajSd3se2aHDHxxLJweZUEVWGDVR94UQcGwDVGg8JQopFWaUUyrgJBBUK18M",
  "key32": "4qven1EB2LL5GtNqgDH5Kw4U2kpgWxkADfH97mdExs91GKX39H8dK63e37Mci7JuXVMCDqTy8ShQgjUBWwUojKXb",
  "key33": "3LYhTM7qPCsK1VsNDn5ezQEiNiW1XNSBTv2Fw9Hh6tTHRZxrqGdWmdh3c89V2zdKMvyRy74x7QBxDLJq567f7JuZ",
  "key34": "2aZJH6AsTX7SKRwRwiwK9CycaFeqtqGBTrD5SiN3kqnmMrzpqzKS3TrHLUgnu19fV91UsenSUry4UZmSHoEZbZgs",
  "key35": "4AL1W51kYuMfz2WbqkGahxNDfnKjG1aNGdyQKeVFZcsp1JrqtfhC4EDMgWai3m3LUUM4fFxg5U2VZBJiLdkYiVo2",
  "key36": "33ByiKxkTBzywvL6pBmVNpybC3LGBfwhdvLhcX9Qgd1LVT2DA7EdU5LgAv151y713ADVTAfAsLW8JfeHZML2CZJP",
  "key37": "3osL4M7kH1zo2PoMEcEx1A9VM4Re7f8p3S8p7kRNmmxqpHzmKBuEFGPsAhwsE9iJkhZ2FFtrYsb1gpN8KHdvvAf4",
  "key38": "4iY1sh7okvk7ZEyJ99Uo12fhAH8NunZh2VAHXRSruRuahGLrWGWs7PawkL7tH1Y5V5MYpzrqvRY6xHboo1NFHg3x",
  "key39": "3JiLfneMBbqdiefQ7x2i6ZatdC6WJ5uwhzETzAojkLdTsBEwWsxeAKfNK7jvNtkgoP2KDg9za3BrK6QMR7LshQyr",
  "key40": "2PTkviJFBU5kpVib4QznTnb3UV2XmQsomkWy1RXbGeaB2JKtXXyqCnfXrYXAZAXxNftHjJyA8JBhy8iaSjyAyyeH",
  "key41": "4DuoUYqnksYYXh62387UQ22pWLyPRomzLxQt9hdYqLNuF92vH3Pxi8XcFzxi8bEdehPctJU4bkEnasnpreMhb4zu",
  "key42": "3Q1eQNGydKMEYosZD8WcLsuoFxo3geHK7nRYzeE6qnwqwDVEob7gqxiHic7rPUBwmJB6C4aju6PVG1jqY3QRhKr4",
  "key43": "c3uNjQJPkmB5nCChysX1zXggzAXC34vnWPgJhnhCmT3aHxUNCukF3kGT3mcdne7dYbGCmcB6zqYqZ37YF1m7bjb",
  "key44": "57AfKr975m6Sw36zywynLvJ7AZEs9BLFhfj3k3kdTiYqJQiUMTBiRnfpcbx4qWPTQBMdDiwQGPDtMSKhDDEqvn8E",
  "key45": "3ewPXGY9uHYNSbjcd4cVp8QfBBAY5NV1gmUkpEnF8MLogPqtnGAtaj3M5tq4iBXqvj8CrVRPXAH7saPuNV6CxWbA",
  "key46": "44Rx1oAkniB3xokXH59Vv4E9dYPrmQX7YnGkpuF2Xi27DAjjPYpAYhefFo9PxNHvkEhFER9w6YG4q6XwudQcHtQj",
  "key47": "3j1uSi7g8DhaHHG6JaJHwHstYZCuLrxHQCBh6R1xNua2g4kDXboSAmiUgpDCqQHCzdiWaX7eD95opWHCmzwSbEmy"
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
