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
    "2qTD6HiMPsssBRhgemgCFgzrKRCxXKf4uK4W5xriMRrgdTr8v8ra8npYocKWs7QkDpU4rpThaYzSB86NhpCJKLEy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4wX4PWNBtXbmovXMCbXengC3TGqwugkDwN3eSLEHrG4qLEXKhspCrF7iJQEmc9V3jdEycn5kNmnzGi27pB85Mv6b",
  "key1": "62cXyuygdQUYLTZiCSqW3NKwQZDRvteZg5uzeHALqvuzr3VF4ZUoAT1XQwiBwbrSK8DCibatLWeqyZzZ3Z6ipivX",
  "key2": "3hNmCnQf8rPgfyydPqiCAnYRtc5yoDjNKeMXiU2ztRHaDCUXdr1zXR25xy3JXx37YQSLP2njVck9QzBJhaui9HeJ",
  "key3": "35jydmwY5UjYczxLJPdNBdtzCxNVQLdAqC4wDMzuSXizzRNzovYfJaFwPoNR7buYZNHwjgTQsWYq4gTGpcKLn9Wv",
  "key4": "2KvCaGWyBoziut28Ba46EDUqGDYr71F3xuJTyEc4nda43PVeNc8bkY3LW1mUKX1p8zj8fa2qD1nahor3VxHLVgAU",
  "key5": "2dVZnNpz9w92Z28Hryv2v79d9xRRRBe7sqUWE1dNt9B8jRQCHPSr3D9QbsNXbPGhvrLA3YENGqNWTS4YpGmAmqmQ",
  "key6": "5S8Ext86xxRrzp25xPS9GZJPeDcjbnXpsniJMwGpM2WLPQMcnZP2YEtQ8MehsRwfnBcUCGPqPrLiBqg9gWMX3X9Z",
  "key7": "2Fxenw2w2VZBXwE8vxbwWqK5pPjvseigL5CDmzqgtxnPHDMFr9igYVNfzV8WTQBiHw1DAno5aJmWa5cNEcWhPLkA",
  "key8": "2UQCQd6VwFcmFvVM1eyV2LDD9JR7snMxgC5sNJ6DYa5XtQKy8kxDRwWWHKEajwAmfUfVq3qSnM7HpToW58zChs7a",
  "key9": "5Hoa3YYkFtCAaSXAv3cRpWEeDzpuFJkSNwdwoQdiCip7shaRsfUmJJhrGoePNmfCzTkwPiKdNAexgFd9qtT2PCmR",
  "key10": "2s2T6arY6tnNhU2dt8uaPUU2UTfRHV9vyeeimqFrChQcT6Vmw96RNecNX6VbPt7n1ZMbYWzAUkJZr1AeYGKzmiMh",
  "key11": "4YnFaP2AmLhdsgUk2QWSUrz2BHf3CdiCmCbBex91A6XVeuF5NMUUiwoab7M52dZdTu73T5xLHarAQrmwJnanNTCg",
  "key12": "2MDUAqxZpKUeFSB7fsSKBzEPrBHwKFNVSkRn31qRgp2oP4rdEbynKaUCXoQxdqiEjBYUqvBTAiwoog8YrDjf4sdi",
  "key13": "5r3EVJDxycD7tQntWhfTjDC2A8BDWKDvQVsoGj5UQ2xfNKRowtdFjhBUPunCyfSYjWaxgHCrwu65BU3rsWZyzy6a",
  "key14": "4iQQnMB4SKn4kfUzbXm3zqFt4N7jQ2CKYppE1MiF4XLnoX5xY9C8N8chtAE8FbZa48v8nSQ565yDAVTRBj4U4w7S",
  "key15": "3iyrhF78hmVtbsYnTeXKPZt18Law4BTMXvV11D6R5Sj6MKh1JBzMJXeVNKqvRdvUXLAPpfT85qrva2bJ6GDaAdKb",
  "key16": "4tieXYQQy3o2XeMxNegrbhLZQoRqarSQ2sEeggbERVtSfG1mKgaDQkjJfUiMQJYbQBnJCCzKPfYYzmZKe6gJAXBq",
  "key17": "2wyww97tNd7uEbkFSKMR5St55h1J6FJjHkzbJcbstqUeAzb5FQ7iBzyLe1Sye1ToDD1gCTJbFT3Jj7j1XRwsbwXj",
  "key18": "2EFY63fh51uPxfGW8th5KC5LSgQ1W5J1bU9evE9v4hJfVfCzF1pqUo2TsLU9ryLhz1UDRa33G1gZXyCJCtd1g3HR",
  "key19": "28vWfr82SvtJXGJXNZnvckrSugrjRqFdmdkWMWYGChLbWSpVpZn3p42UcuEdaijZy2jEHchQUL9c3W5THHLZ7qtF",
  "key20": "5b2te2KZrfiULFaTRo1xZt9jmxKZfNqgEy1Xi3GF3uN1N7JxoQCKWJ4upU9yjUioNBbdH6ng1BfbEVRwZbCqdaUq",
  "key21": "5vX8LVXQ54UG4iYZYVVfST4ERtRSYojFTGDBM7y7AYHBnXSGkDD19HZYwkbtVwJq2Q4Kw6nEEEJHGnUiBVqpHE7p",
  "key22": "FfoVDHmvAgqhMxMgH12QEYfxnKVxwKESuJQHGgVCgWGcjcV1H7ASPXLsVxgKM1rFjHLAgNxGmrHT43drrzuxfev",
  "key23": "2XtwvmADC6NnXkP6qQpUBQ1ZCre5y3ua1EoatJwmzKqAxqVjjKGamNJyhLV1Lwo9Jkq293cRRD8rbG1WY1LjUs5P",
  "key24": "FBWKBZYhbSrVegjBkrsCWvC12Tf1JsPNn5iKEuxtQJqrx8smCGHMZwdFdyJFTjgqw7F1kwNhV1v4CCTVS3STEmr",
  "key25": "2fNd2XXSDBEntX9E537PXfsSKaiEMmGUnWuJ1WinXgVvBt6uqkQXn6uw1Rvb2hRVVRuNJEgMF8KaNX9Hmhrtr4JJ",
  "key26": "2oBcvEVhczsrbzUTY2db27mwXfzhjWrNasKAZM7DGdYNrGGqREE1CSbCD7JYWLzhHndTtwnHVPeRWUqcxv62QvdW",
  "key27": "5n2MFCPzPMZKxqxJMo2QT4wX8mWMHL1GKgCZWCEHpPDeWY2c5opZyCCmdS7xzw689sRCUEyRL7E4aFnin8brotNC",
  "key28": "4Q2LF83JK16eofm1DmT9TZNsEo1YC74DwGQ6zDsWTeM24iofRwi9SeQZ527pTSdkF6ipJREXzP9ML5cgdJhYofGV",
  "key29": "4EunEGwfq4wqFMEtZMQqrApX15TnDQ4h4kTpwr66hsjyhDZF9VWtcqwXj6gSrHawR2gk6rqRFcgM31HJy694cQG8",
  "key30": "61ikZzLtNxacDwX9esMjsLrgenXQ5TXytMbe6qNw8C8SETsB9orGW1oto8TVsGDsyjowiSZ3wXXJ6D5h4MuUrzzS",
  "key31": "57wsRLHkoBp2hgdYSssaJuPWdmcUszbwFzk6LfW62dbxthc5s2cZ4NKue21Fd9Xc7ydpLyLXe4C9BxJ2XG18mfWz",
  "key32": "3M4TkMPR687nvCBKfWrrHgDmrCpoP8dRKxPptM9GiAcNCED8StqbgBTao1Qz42e3EWYm9hBJapLaPmGmGmdgxiBN",
  "key33": "2WYcCTyYd6SAHqz6AcEHGYYARA1AZx7578DaFePPP8nGyRFUpaAuwGvAwBg7Q3T42KzBs5QvaXsngKQA8V5dTwjr",
  "key34": "2VWBFpbku56KMtbvV4aRnKJAxg6Nm2pGrE3Mpi9reiiQEtPc4nHWrqEdB82vrVRnDirVssZqcJJ2dBkdMqt3ZaRj",
  "key35": "3raNWgZN2bxvapDobcpxP9p9tS2v1Fmyi1JeUaBu669xEAidi47HojGVmYXJkcUz9mPWoSb6BXGzATS4CoA4XMXK",
  "key36": "48LvHdj4ygXVTum3m61T4ankyCacr92hAnAk6GTBnjBNq2kA1ryXQyhXVa5B6gNihfJ3kiR54TYXifNtZvM8zTrn",
  "key37": "RuHWVhohpdhwMi62SXK1X5pw2ikftDMtuGspRkrwJ6TwsBFZCtBHfELXLBzXkKFFyYuwZjpKn4frTvsd8aNiSr7",
  "key38": "2CyWesxF5Md85LkLAb5GpFdH3R6qUSZeJamY4esUrfPGPzxYnJi8ebGVqwDSsZTGXG5kt6pkL15d1g8G9LdZnPdr"
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
