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
    "S522HDtMEn6odKq3mPe76MwjYz6vZkWC5zsGry8ourGktXF1yuoXdC68fMN1n867onLKhvTGQfXoYu2NybAieCz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4kfDR4DjhQUZ3QkLA6DzTttTZeBQHpcykBVBrvLGNv181zaiK3RbJUzvRqfUkrXAEYuyiEc7fFEXuzTU3ipRWYvV",
  "key1": "42w3T5aHGnRWMm3GWsaFgcfLQ2F6xDVJF27ft685pH5c8rAbmafrbQ6VxK6nbUvYhQEWrrueXsN766jDKbHMZ6fm",
  "key2": "RFbY5LiGLQz36cc62TDHNmrgBGVFosBpz3yWxTZYkoo6eGJn7VLJSrgQMyEtiMMHgjSa1tKFa8ZNFwN46AaKCi6",
  "key3": "4qehVyUCMQFgEpq6sgv1s54CoAa4EjD6xEpcHgmFDf36sT3fEjpNcpLwNsc2uEBjDFNfobPPKA3eb66z6sUbk7EA",
  "key4": "4fG48v6jWh9vVsTamEjAyn8HnKtsScTYbygnQswHaehU1b7KvGfnoqxjqB2RGko1soJEvUGDdTHkbEZt3aWyNGHW",
  "key5": "2gcK6ezdTq7dSufdTtwsQym4daLzbRnopb8GLaDKbmLV6yTefaqTChQbGbfeG6i9BnQYGZtYyiSq2SKMqBzUh6z9",
  "key6": "61SSk22JZfkSJmdd6Ua2bLnqXBB4GkJU1QUJryztFHqvetcbRoLCjhi9EY3GbotNu1Btzku6M8zs1LUP4Se1MDhg",
  "key7": "np1Vqqvb3MndWsVumtgHbX4hhiKgwhMHpJWHfi6YFt3TLCJ5NwvT3Mnpwy1GwF8SnFJjjWR3sUiRqfUSZYDcSgt",
  "key8": "4eAeBf5bjf4caPmkdRQ9Yy94rMt87NrUQpCtLBozKa6zKYjoRBKobPFX9UkijzKjM7MNfUafGGEiuXMRGAi2T6wP",
  "key9": "sVPmqH8SnB1qE6M4gTBWGbjxgqVW7bnmrDSuj3iRMQ6HtzF6aNoKcvxcE7tynFfBrsJPewQ8MZpUvyhXRgcWcpq",
  "key10": "64atgfYnDwxNGU633Yg5PARmWFsfBWYQZc9axLL8Pmepx9DrAtZYGyLm7JeDip2418KmvnAm7qDceJpTjkRxMS7v",
  "key11": "3ATfFGujC52bdSSX5pPGoTPrEnHDJYWE3D6kHhRzNBAfGD948f9QPgDKzrENGd2ZYzbkNu8ARpCpaHPDAuwBZKXg",
  "key12": "vjGLAyytkYwDmg54DjZsPQWz9txyZBnjTPiytmGcpK6aetso4YLFRUxf6j8RNSoKoFQphi8WsfTg929bft3AbT6",
  "key13": "5EdozZzcyqfK3Wa9ovTnPxtGa9GDuBHEWN3ccwFXC4w68Tgq7khwiuL8ZD9wjtEtgnUg2TGyLnQBKtBqi3j9L6xx",
  "key14": "4NxDSaVwdFuSzaB4VAom9HmAENPjLDvopq2dmAoHBMY1Z3Kuxng13mpYLHVdYqxtjVbWQe6DwU2cwf82BBLeviXG",
  "key15": "5n11ek6gxVAA2cqBykWTmaRKmgRKrvaczhJEayvV4RxKswQTbmTt6MJeEwrmbMmdVRiuPNb2ULSdmxLJPguYSCAH",
  "key16": "3EJoc2oPU9hv8jeX1jiu6iwQAHoEEhFGBJz6YzZjRHoMSbsR3AeChkQTh1VqkcBFHwXcPv7wud4AF4As31CFu3VC",
  "key17": "5NJF8hrxtFquD4PfdwwVENFBj4xCqvyLuKxrbKueD8f72zUCuLj1VGkSeQH4QLSmiX76mwnwBVWmssGvkfZBxVCn",
  "key18": "3QxMSVyrFrW6r2mu4hPafKyMQaRUvRvZRmVeUnPxwRekknR5Ngt4zkqxUeGv1ZBMtuUo1VDeF8czp5u9PiGt73QB",
  "key19": "2cRgRS31dGaUh8piXvvV4hve6JVqwSYPZRsGzMHjXgJ1RYyen2srnYKqbfHqbyQd6GHVXa1KjY9g5o3GL5yvismm",
  "key20": "4uFCUnJoojCT6fqBW3rBr9HUkDoxFwB57duo1woCg7KnQje3xD9B1X94dgNKzCL5qhxVQcU2J4FgWtY8fTsX1dCe",
  "key21": "4YsiyyH8YKQ5sfe53WAnuttHyz156WamzBGeZWXiviEnJGxF5C7bEnkzn6t1wJVcpTiife3p4HiWSAs2Fj6bLDci",
  "key22": "E1CyZnNVdxokQAAY9zR9jHFnhv2BbGNN85zp53pkU3xFKtoeWThqVM7zFZoLwP7nNRhovtU4L1eyedgyFhxgq3d",
  "key23": "3pLn1KK5ZjUyoPBxfSuLPP5xqSpZ7MEt58Mvo1XHUDWBxog3Xe82PyzQx5svdCSArb5bwbZY8ajurzDmfX5uu4dF",
  "key24": "59jpXr4srhVGkukZHq3wy5skussTMi9wwCs7dtPJBNYXxXUGUG5g5t8xUVdFwGhyjNT4D9pz2RMDjgY4cpqS6qE3",
  "key25": "3ieNBuQMpWktimyhLo2uZENqshgeDARcCY8ZLzKD7RBFqkhXacXR861Y68UrUAdHHsRnSUxrkU6L2WzDVstCfwxo",
  "key26": "5BjbwByui4Bf41qQ1zs7f6Tb2F6KP79qEfoL1h6dZSLH8HTmwniX27ByZyGPMBERyJCyJafxC74TwfADmahjybF9",
  "key27": "393BTUq9Lryis8KD6KZyMQtmusBniaMSJnKnLXL65bMHs8v7PqigrEQJDPVmKWrGpeywuLscZH59uBR5H7ydtZzH",
  "key28": "5YB6siqiYfjDk1AryYpwSEgB5x3eKnbFJu9F6Rp48kqnSHZEPh1bFszu2ViGztcdRjdt3yG2f9Mik1FPPD6QPnXT",
  "key29": "Gz3vHjrg9yTj93tevgcyQqNduyYEb6ktiK97HSDdVCcoHkpn1Qb8M5zDZu7bXU4ctg9qMm6yHt8yoc5gEka3JD8",
  "key30": "tSt8RwBe6RtBcYf62r35zQeQGbqRc7W8ZF57sD2epaEPfDVeAcRbzdBjaLcZYj57v2VnYUVSRSyFLq5WRWGLpKK",
  "key31": "S64DkJvaPiXzumJZwyYHDNoLbWiMYE3c9ovd8q3VonVMx2NdAQJ4RPePT5hBD8Sm5uNHLztjJTaBRGpo91z1rbJ",
  "key32": "5qrhipifowaQi4tyFn3KtsiJME6HChiAnyspW5mrWqkLtYLbPd9QoGtnkXwGazRUPuDgDSNz75YP6faGHbZCNYJd",
  "key33": "2qkj3BVjvNfA5J2LEAKESHFgGxugzjjzRS8pB3uVncjE6sHnfoVs624hQAdVjTZD9jke1i2o7KJmbYRjJSbuQWX3",
  "key34": "5QaDLJyZnppXq4iBApsAhMzEcLsAPXmLuLJjedDWeePm4Evp9EHmRe5axBoN2fRfWiv3R6kx6TVcnZG4X1E1tYuB",
  "key35": "2w5rVhgj1PGT8se4VTm422Q1c2voz2WK38TBbhBVgNKUCiugAuXvQfqGVV51yBu2PFRMvAS2dKaC1HX8Rc3D4xKJ",
  "key36": "3WDKFrhC2GYxAfQ5gmckMvwcyPQ2qjCVNURcUpv3xVPR2rs56iLPSFtyGErrDNZk2EvmECeV9SKJWiFFrHCDLSUA",
  "key37": "2sLzFRbJGBqiTt99gxiP4x4d7PBF4kux6rAmABZvqruiuKfoftmDbcs7KPtZrpMiUWPgW3Mrd8vrvfRinsdbmRWr",
  "key38": "4gfEubKkJojNRTABwoHprzFBHbDPbEysuqkqrBihuvfptHCknfxej116vDcJK2zoton2UJcnmDTEQ34Xw3sckzJ8",
  "key39": "3PQRBph8fy2tv1dKjrFf9QDB4u4rmSh5r178EropBL4Nk9bTeE4ggF69UAUwjxrF9r7ctXMYQoMwWnSw9qEpCKn5"
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
