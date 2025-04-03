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
    "9pRbfJmLFb52aLLunBod9UEDuwv38D2UfWjoSEi5gSWf3VUUUad6jEiqRYazNoGbJ7KeAHmbkMBGcPjxQg5xLM1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49drgn8NXWqW7SWbTaWxeg2Zt7kXGRkAEyD2ZX9chsVEd9DWY5t3VWz63rQELZmNGKy7hemYXPxRdSokmGqkmRpb",
  "key1": "4qowPzdyhZzUB84LcxfNQJXBS6ABvG1RFNGdKBvSjukdQ8qazVTNbMFTPieWTvNLQpXEbp5PVqHwvXPf5C9diYvH",
  "key2": "3ESG9dEWfzKRES8krQFyJY8hGwyagrZcwvp6o2FrSeAQzi4L64ZLGxN42MZpbwy2CCtPUgzUp8DuEjygGTzqWo4o",
  "key3": "4bjXSPiUf6jUWgRX3GiMgojiTQuaSrRbXQTHdCRzeXM3Lq52F1JsLckK43mEVBRkGjWYcstmx7DFDC7y1RerWs5B",
  "key4": "5jafZYRRKsHJF6ae5ZPhjvdzHScAeCcaqMbxUBLB9xWyANqntCynk6FPrH4BdEEmcMue3xqoqwJTJeQ44fSPUqNT",
  "key5": "5AcxL8WCFhNNjqdp6jqLynMMJQuyv6qtjKSKDyZyAERSb9ZJ5QGgeuLTYBaxWbQ67CQWVDR7Yg3GvFG649cT2At1",
  "key6": "38EpGSUBLE5c6SU3przPBsytSnQch5TJxv6GYGfc8EuF6ho6KdBe1CPQTVrXj1xfeZiuGBfRjPz1eoWAyP2fKe9T",
  "key7": "5EoUR9uMgKCvLcLztQAzpXs73w8LMpgVhAz4MCC9t9bb9odgQLVKodGMLgyJzVDxAix7fFcBWhiFYdETzUPqJPWk",
  "key8": "3KFeo6fFjkfqNDX9i2NaZHn7nNMH4nMpVYLpgUa6P4jfnFAiAxmJktp4fLWbKLQGMcD8PgGByZDmv6YhKGUaLdB7",
  "key9": "58qaHS9cY29cESjC1eoTWp5Zj56HRiy6sh5jpDF3fwr3HnVEirY6QD9EUais5s5RKGzUH9aF9aB19M7MfNgfi2rX",
  "key10": "2x43yWC6PutqRMYptWTvxc8ytibQfznXJzoUUz16EHbWgNDhUvPP6rQzy8L9Hhb9zzJmdpbHapiqTevMkSeXgQXv",
  "key11": "643Q6JJxoHsUciCfUtvVdEkwc3WAmrj8U35G4He1GWb7fi8V23yvZD63QizPsCkDMSouXVWVZUUHqd9hwytfQDCx",
  "key12": "4zeQadD9NFfinT9wHYBRMXaAhXSPFQ2CenJHFvJywaNVAHAu5WvwBTrW3gg86erxpuyAt6MEBRkNQuNHYTBqvmSD",
  "key13": "5Yk4b3xALobhYnepB9QpEg3DVNk1YgYkrccKResXwM4KcjjJKodxexS25MDcGeNP2TzW7pDEeuvRT1SJn1NEd78K",
  "key14": "uanUnEVg9E9NMeuXQQLxvsscW5Yf6mVpowxjbr9uugSFCv93g85tRky9zi55ep9YV64E2EVMYXXoY4drpzLa5ax",
  "key15": "4YAtXsYUyQNEbAykW5rDpp2R2toti11C9sRpgy3xmPFFwMEWELJfa4DtfpmiNaUMbk7r6mgqsnXXsjEEtrczCBY3",
  "key16": "2KjbJLdN2DHRxioypgeNk4sDAH824rDjQAKeeUea2RMjj3DTtuiem9J6HKEqSmogRCCXWPoLQPGUYvJPJnzK65q1",
  "key17": "JJALNXXNsGkqaonXa8C1z4tV1a4QnZTxNqqiHDFTCZWx2B4LWSSjVieZyY4jCC4otvAHicEgqjHCPWJTVP4NMYm",
  "key18": "5v941ZmhdW6tdAxZcZemmsgKtV4LALkWAJm6LGk5LfMLdya8jEsQi9TCCBehJw6pF6QJM5M4ki5csGLbXQCnRE1w",
  "key19": "3ehvfoqGpMpcjEfKqokTf9BRHMk64chH6vvxCik76bH96PbbF4VhitncUsHGpgfh64i8KZaNdSRYm5QFqr4fDbQo",
  "key20": "3i35a5kxFkoEvDgBpwuxV696ZbvAsHpq7bqwAg5jgCzuVXgKogvsKxi2XBJ6PGjgAeiB6YPpiJ5zFtS48cFBFpj8",
  "key21": "2AQwfMkyScoUgk5bvumYNute7axuGuzs1tU2P9TGFS7hvtzpcWWTaVV1qHGD28TSTuG7krKPzsBMbpuyGwyPFLi5",
  "key22": "5DHRaqkrirUjLcdBoZrAyda3jCBB4Zp1CexKPcz9MJbqB4zpQFAMjfsvs3jDY4kwD6evFZ9mwt9diU1coc7dYWyB",
  "key23": "2aZywisrtQbHePLqjj85rfjhDpXew68FbHz8MkxLZHWpLwjU2oDUV1Rzu4Lrzr9BAPrcibk36YcyoydWimFei3uM",
  "key24": "5dF7Ee1NgbFKz8xMHjwHgJU83gufFjynabp6Ff4CVrwMV3cnWNxj7gnsvjc8EtJfxVC2muEjhV796Sv5q3L6nC8X",
  "key25": "2jPejnqKRiqgyErLfecmC1oA312nBuHd95sWy3zN2wRzLqgbtyUi12t2brVKhmR6E4BvfHyou6jdadhpnqK38wCi",
  "key26": "2hEc8J7dsUbWzcMFjbVytPmi6g6Qkh33csYDbwVJ5q6RPM5c2KSsQtCinnozRPzziHRBLYLuQ48N9bZEorMNMfLq",
  "key27": "23zGDxC4sVWS5xS5LgvW43s4AMhTrzmTgvcTQJDRaYkhFUdD7cDmBbhr2XS1LxVyZAA3uFR77BdvkUdX1WTro1sE",
  "key28": "3JPXDj7Ji5GDzKdceqpeDeBXvtFtTr9neLWg64swno8RqZR3GrK2VH1DHS9VZ1UDCWnN6kfZE7o2cMM7ZuQRWgQN",
  "key29": "4PkpLAb4uACxLcsyVReK6brjyW3ThFn92QK5PsD8PBUD9Sibhu7TmCLpQu2VmErYb1JfZTiBbhk85tMFc6U9VXCj",
  "key30": "48noeLnJfGM8PQMAxpsSrJrv7c4QBysgCuX5xaGPM22b5x5yuYmHGJLUcsnjUH7c9jaickgE2VgtAGNNZZDvLeoQ",
  "key31": "3hcgN8aCZjbP9DdxWBE5nmzki97AS4cyo8sgxfpXyNCaZZomQB4LGKcLnpsH6JGTpKq3PBcoum3M6F6PkNM6saDy",
  "key32": "26AzcPWCJBVuau2Z2T74iZW8xyasiZdAT8mXexcoUYqBSzFPSWNKM1fYr3skUsptBPPozqYACyzbKeRtb9Kjsc3W",
  "key33": "5iuEPRWuNdyoAannY39x1DDANbEFG7PgbwJPHR8ya1PVPAP4Ehj4doJu7e7Df3ypsanXp7aU6L4eqzdaFJdWYUHm",
  "key34": "2Et19Jg62xYUEEggNjEkGKsCoz9knnv6QKHyvg2qdxHxb6TRH6wFHmFF2pXCANaMvLkamvikbRPQZyxHx4puuqyW",
  "key35": "3chQMzHCpepLBXZFQFFqvYig3fAJZo2fMQ5hXGzpc5EkTH6CfzB3oc8FN1AAhQYtNwoxgX6jP3g7tbC8F75hDpTp",
  "key36": "2JHWME3Ki7CfwhY8ba68g4cuyn4JCyuac45wWnJMcVwXMMt3UeeYo9oUCKq5zvXpDLiBpxVLKfE5Q4XApTaTPC4y",
  "key37": "4xk6pXWoJLFUvPUdk7NHx3XJ3akF8VzP7zqdzNfA5jwmiZSTfkkmN48YCMUku86LxxHtQVADd7xpaGbm2HSzAPWz",
  "key38": "4U4mohFLWjzpeXcJiBhcwJrkggNiEateY51yCZu2nhfSrDybrBzDDqvZyFPvweasX5eVgBVvEWAoMFp9K8Gh5XTn",
  "key39": "5tfAtD8Sc3Q6thokNAt8dnHqMUgLMmhPH1smdbuemGY6P4Jpj79SpHV4qL3FXsmq6LyC8DtwhPVzJQetVULJfweB",
  "key40": "4r6tm8j1wiYiLp6fRSTeAUZhmwbXURFv7hRsrMrwviTYn8P81TPMEewCXP3yQXaJ3bAszoyzBSw63L5AmuMZKeP4",
  "key41": "3KSPdgWqtFCiu18DhVGm5ahQin7zdT8tzCZLjEDNKtPASeUg7PyMRX8oGUd3HXY9MwzdZiFvno2o7PJunr3Z2FFf",
  "key42": "5U7avT4VoBUQAggoWMAVPfp2sve7yWXnjRnuQoY1BoAgfmi364x8ahJYnPMWKa4HGnCkMAouJ4N2SEpjhm8Ffbzc",
  "key43": "2hn7vDJmynSYqjKpNLjUpVLaF57aWARAdMSRU21FkZyMRUibZeGuu3BgaFddznFv4AnRuYVGQRjTCfEp5Lr9c3WW"
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
