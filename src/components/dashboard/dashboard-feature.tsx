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
    "1nGvywc9jgteVs5AjSZRs9QQroUkQ8RbqVvyi6iQ1Jr21PxjRdgTRQtHMVjka7zwxxDU1Brc771UBj3Zwds8HnN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "39JKeXqFmJYKRfCFmoWyC5a4EbzewRux2VEGdjY4qNy41yLQ1ES61XUx3D1NaMQTU1tDixkPvR8AsLvE6NbvG2Xf",
  "key1": "4PB5u4NcwRgDZJkeMPyAjomZ68xCFwgjhivADbLc2rm1WJe9YJdu5NJpGbmNEi18MLJC45SdnwwXKMTXbnoMGtSh",
  "key2": "2q2QjjmAVUf8A1keCMrZ62bLZW8EuCH7KgSnqzupa3ud1iWvMjueXAgamzRgzgubrG6n2nYsCzPJXmemxVpkgQR5",
  "key3": "AiMqUGTRrgPPWGhKGkQM9dgwGNSggsT1jcNfJidfTDt9tEHFPbot9JsrDyA92PZfZDAcTkD6TwcPjA9PmVZWF86",
  "key4": "3WRaBYohRcHxwkrgFRK6aAruMNiwiqWMnyACmVtCFZet5zYKsscX5mdiMr1jvqKhR8t65ahiPQpfJjNEVC5Wg9A",
  "key5": "JwhFuRC6CccyKafDgfNm4UUCad3WqmNxVtXiVKJBx77mqreKc8DT3VVrbrEmijiEYM7ZD3X9GHas7VxtSDbVPJx",
  "key6": "4mSUFmAUk2EjVZ9wQ3xXne6zYd6jeXbJaKrjem3mNqQrmt9gQAM8mo6p7pmweYpd7tCoJTSgoQiRqjwyeExxbhQb",
  "key7": "U3ZPSXe7fdrH42nKeqZShTD4D8W1BdnwVKWEAdcGVDfdoLNixtactWzYf7PV3JQR9Bn2NYRircuwH5XSxBCWhyF",
  "key8": "gYkKtNCyAEbYETeyobaa26xktrzd3uwEEiKtjK3EfDsgE8tMG19ub7g6csUhNWpXV1SxzeqhG2nfWsWAij9YmpJ",
  "key9": "62HQ6Dkya1trEfvsEGdPin9i8N7V2DFhJejn4JzxiN4aiiNmX3k46tYBzoK1QJwLJWL6Zk213ZtR2wqQazZhW57u",
  "key10": "39Fuds4uqaaLoBZFRcukvbhgyzQQq3RpqNtZfKfABiMECYwUAjVfWKZtpMXyMMKgWKpdvue6zuRVhriL5zpqqs4G",
  "key11": "3TuG8JBemXxDiSm1MeAcvFgFcsqYwkVTRTrKSpuxmT7T3T1Q13tE8KExGU9hnpNmpNSiUJ88kJ3JUuVhu7FPHots",
  "key12": "5VBfYF4SMQJdhfpoPbTQSswnQYbcN5Yig9L3TQuK1iRnT4iuRS8AMppPDSKVjFXDEjdz2Yc6f6HFovqWg7vvccZe",
  "key13": "5LNJbjaSgJQ6caPjKfwchSnkCCU4JcPESL2TrZU2Bqi2kxZS1QcAq2jdLcMk1B8mdnmsRow8t5ZKESwi4u3KCT32",
  "key14": "3K7UmXV3w9sx6pQVZAKdgExA7rJNiw9SMTwiBSnVdrGNMfxBapwctdcwXzeQL3qiRGQgt5azPTmzxarJcsg8vhFm",
  "key15": "64cg854kxKG2M9gKnZKZAD8kbQCsaMPBjfWetvXEHnrdr2bXHDBueMRjtHaFHrDJjXF4HXshVprWh4n6AyS6HQ4k",
  "key16": "3b7D53qQZpJddCLEcfPNU7uveKtzRSW6z7yr63ic3o8X4Bf6ZFfGVtLgc9XpoZVjYTewe8A3Te91gZ8LNFcjyEFm",
  "key17": "mdHNuZs5hGtV6XV1g9CFPXSQ1uhSVuftv233BSAB4fnohV9GN2Q52vEDW4Lzjf6n7L21QZWcz6XptvjN6tJqFRS",
  "key18": "4hwF8yLMqiy2kWb8HmoWVLcBTyCDQGxeHpjzrGbmJ6WiFkuy7DuDrzDphnTMD2jtnkRuPq9XzuPxfoZZfYqdLFoi",
  "key19": "2FG5FdDWpfe5wDS3EEEE1fnsxADtJwDc2dboAArKCbjG7RU5rX3K1ZNoMGFHJ11YmDeUeXnkho1vazzsE79Pjnvy",
  "key20": "3jUHtfgC58MQYqZZJ49qZCq8g39poPuoaayRePYUjAajyfCyCWP4Bk4ewERDG7cEhoBFkS4PsvMRTYTth3pPUdoG",
  "key21": "3oGeKG47WWr8ms2n5G8Cat9cFXSHPe83gUTb4seKhNbmQXRxAkRF5DzvXxMfo18RUKTjtvx74GfK4JkwNZBM6eS9",
  "key22": "GNRKwF6CjyXzHV2ijcdAmLuygXNFkBKipVabeB1kow5mD1jJst6485Mfuw92qhjD51iukEzWs6ghTCrpjdAnqiV",
  "key23": "5g2LotS1FXxqn3yBgRoMbkbqQLEJrf22Z4Xcp6aZvL1Xr2MwVFSngnCguqGz2mByNxjw69wk4riHxM8zcX887s6U",
  "key24": "4aRS4pcYVseo6Jp6zcEBkHtHcKMZArerPbp6YdeoEGrpZvw8WQNGhoGnfUstMRXaxZ9XDUfw5ea7ZzMHQmTAJpBQ",
  "key25": "125KTTZiFQmdGiH5QzJk2t5Zyp9FEMjcxKhh2TAGgbGsMr67FvfA7C57uvYkfU4irR2nfTVEAzDxm1jJ1o1hi697",
  "key26": "5KjxDn2MwJ6gqeEe4bjkLVDsPZSnGDxdGEBhcMFaj11b6FzSJbPRHugZvVUeUwsFoVBekjLHUnGfxRC6gdJnctoc",
  "key27": "5bd3NcatTc8TWw2dnVX5REEHDUuC6jNrBN9CY39iZ2Tj4syY9tDZuF9oumbsAu41tXwemdxNrc4xePGbhBH5r3P2",
  "key28": "4rXesMqFAC6VrgTnS4z5HHPBfywWteSEX2bNJ4v4sPYuyMpBfCuNggZ5RmZiX9wW1kick2yZRSQKnW1MGBFGHg6H",
  "key29": "2rGyQRr7bsqBrZnH4TAfSNwd5gF726XMTH8ZnkdUYXnc46FFrbDDdvgSdCXRUaRsaX2zGgybndExEBgjN8Q1njXb",
  "key30": "53CuknQvYQpj9pVzYU6N5M3jd4a8DckkqsE7L4fwqyMVQnt395eR349hRfzTtFLJbTntjoRRXf8hZEdxJE1gdTv4",
  "key31": "533f2i8jxnYWUCf9sMro1iF9sXFsX6j8937ZeCvXB8TtfW3NWmSeJ2jTPhnj3Pd7W7Hza3CmSyFvsWq9ZuQWue96",
  "key32": "2QTZthUWzhUtAwfLkW6i7MC9oU9AwAHktThWRz1M3HDNaff2YvV2vpHvCmm9RbHRNUz7g55DC2HjvtZmjdQ9jAHm",
  "key33": "2yzQUFsDvDJXvReYRe5cwcNKG4AQqSbbf5ibxLUdB7iWH3143xjYNb34hxWA9WZPWp1fZvFCT5Z8XQoKdLpLpvUm",
  "key34": "tohUMuna1zQBRj4wTqB9Fu38KikzWgUrKkrh24Fsodq7Jf1nxKQid7X1Tf9PnP6DMQPKHnNQVSmsvAFKfp3FGM9",
  "key35": "5Kmd8smyizk1HX289uXQtK5VMPSDWdsxa6uunSD1kB84th9a6wGY59XXW9F8JDqeCd1Gm3wLrmEYrt66ZxV7ZvTn",
  "key36": "5wbnkb8NnqamZyvX892mYsMWrWyrwRJMHRtCDzJjZ951fVGbVMuKujCBFbk2UWDc2VWH8XPBNguNmZiiJ87wn3jn",
  "key37": "2RNi5BBSgbYBcTMnYzgUDjhyRBU5u7AeEqwYbCw5x4F5crZEpzxU8RCJvjBBvEfrbu1hWbq3HwDNKaD4c1Uh8rY8",
  "key38": "2cNDdksm9rtmSDrTR7SXFYNzFChi1y2TKw4ZNx4jQBbusC29XXZpgVQsthWfij2GAsBXXL7HErJcX6PkUGor2ACy",
  "key39": "4r1mCjZ5QBPcxF2NYLV8KvocBzFqDv2RmTAB9onZiP5dRZR3CQPgLyhaGbUWgmrh7Lv6e1ZotPgb35BYrJGWBc1h",
  "key40": "5Gv5wKRcQB53KtYGfiasLh8pj8LY1bFWdLa1EoExVthUBQsK6sCfsYksibW76tiWgcG1UAihWWqU5vjnmJ7hBSL7",
  "key41": "3ErcnW7KDutKiE4u2GefRY9voySgYzKjEeBmmxpWMqbcZqeMLTvawoTLtsuyV2zXr7pBX2aedvZ2HMT3TBGwtBd9",
  "key42": "5bxrAavGP4HGi2hyojhS3vx9gskfPKCkAVX3SX2fe3X1GtgVChCRXXYNFaU8zY3fyvwBzwdtwdZLWDNBnfF2LwQE",
  "key43": "2sgpk4A5cknvV6eKbdkdXnKAUCky9mTWigER66U69eD6KnyrGChZwdg5EikwKbzupqYbBYKe8j56bqHe2xv235cR",
  "key44": "6DMGK9PChWarP58BQamUkbdZpvVTE5ok5wMtmdb6oS6YHD3bYwm6jvDccGB4qPnSPdyK4Wb66ZUou33dXkcKdkX"
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
