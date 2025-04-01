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
    "3LA1CC3jBjdfYc3owG2QpXJ5cC75yZHRsEedbejBuDQ8Z1WuJ7dhDXEAhjxhvmuCmT4v4PA5kLvCccQKinHsrMPm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jyMbWgiT8zK54TgB7UBRmeiN6GepKx5vUX2B2YqAM8vsCQCdKNUyAgMLzVnpZntrGNriD7M11oqLk3JshpJ54g8",
  "key1": "2o5iLvc9cPF6RpBi6uBsEqbfFqCoZ44fejhX19Re9zsoAYMmwUn693fceS7yF2z2CmfCMqARvaEUVeKiSpnDEXG8",
  "key2": "kgUz2nUwLSpLhQ34Qh3XNgEjXT3FRZB1S2MveBp6xSjbZwCxE2yQN47c3Xur1H3PGsCK7JdfpUEoVNMBGcMbyPP",
  "key3": "56NdqAXNgMQz1wN1NLmtyGWdfmCpkXnL2LQBXpjh78GdeGzx4X1MVtdW4GkzcXETzzFYmkGqWms1oykFiLcyGVtM",
  "key4": "4CEMTEfa1weibpUCqFsfMJ1Yj1hKTLq3t5x1p866z6GX4Bn4d2oe8cStkhTGPZ2MTRQxG8znUkde865szZpo7mw4",
  "key5": "2WAJY1tXFq3TrX9RRJjAKZnnU34K33QPUusTrf5oJZ5kuWWSbnpA7wC5wbqycTyXfFPxyrDz1oDkJLMaaPtgjfgA",
  "key6": "3vrC411sKKxLvonFBrYMXSnGy41mDcNWPKk5Qy62LuC5o7gxavQ5cz67pJWbSPpbJ1oHdSXs8JsDgrpEhxiSZ39h",
  "key7": "31SN89drAwWyfSeQKGSy5kRdeNWyYUT3GPBCWLwBxzXhCAVT88WKQa1M65VwE9B3894713JxzFiMEWqhvRLk99cs",
  "key8": "5fAznDraeKh6Ffp95sJzSukWn9kHZXv85Pvwg83xwvUtJrF9BeACrNCJbDiUjJynXY11PbTe752Ggm88SvyULZ5r",
  "key9": "SBohJE9ADEviMHjwd8tfobVQyuLi5dz9whV4eUhLyhC4uZcuAjeyPiSXDto3xxXTefzJQur3wrBKZTkEBrNiqsq",
  "key10": "5H5xL9jueZX5xGiL9iATC4bWD6zaNmpSnsVbBHeoU3ek4eUTSi8rEdLEU4GJGSR9NJRwNDP3bmGmvqyWuTntAhKK",
  "key11": "2i1jZxmgt2mLi4DnKVjuBZfqRoPozpafdBBB8u75Ez7ASYa4HRnuTTNeiowbCXmckaFbY3dBZAC3HvPNw76iwC4r",
  "key12": "64Ao2BbmdtgHyMoL1xisrpMdFCHzrpWEcRjrDSujWPZTSPUP7c9mCiSTu2FzBLpGuYqokvxbaiP9gNJHQNw8uPfm",
  "key13": "51duUefMFjaCM35hpjXsKtjLr3n2RqkvGMkdkw3N9AJvoCZUA6v5rBHDzkSLy1bsuEbBF81pMrTAfbQWdXnYy5E",
  "key14": "atxrpc2EzfRfqPtVvfMe44dzq8G8txbRgz5oaThEdv238TkDy651Fv8GubySK1jCLML5XYkVg8JrqNUyCfZxv9j",
  "key15": "irHAcA3taU85DwNhjRBeDYrkr6Tr61socgz6EPmKAxKSC3ucDQtmTjrzgQAp82XPEQxySG7amGN9JWte7L2pqk4",
  "key16": "5g5PcMfRNSLD2L1wfCw6bc8nVoeromwx3BjEWZz3v8zHM8uQ3bmUyrhp7885JvXWMNWZkBLTRYJuhTEVz5a6EfBb",
  "key17": "37hd1DdE7HPQeTKF5q7UwBELYGq6TUberf1C5fdn6VnTMjJnfwvSUKU7A4hgfgjD8K7fgnHEGfVD2jiBWgARWsmT",
  "key18": "5f48YWHxXq9nZRqJHEChAf3csyLDCKJP13hLoLzB3RSgxG4yDmD4enfEyid4zadPMGuQo1armt3mFD3nwEeo5GzU",
  "key19": "4F48LtJ7wnj1BNEzSRWZDtCL5xEsFnEizPcBZyq9KDcTMuedqZgvBrfN7FLKvLEvG1FHD13EsKKaudnnaJ3RB7Fy",
  "key20": "2QgzPNKNaaKqRMZqrHTmcDrUCcJj8LqDwazjnYJqNmFPNBvKePDJDFCyeKY4aM8drntn3DLQoeZDwyVFgmyZVx31",
  "key21": "3vR3X6EFbiiWAp3QfgdmYroH41F4Tbc1ncqNcBqsjJEiJHUwihncmz6jz4uM6ipRsmmDD2Sznw1F4ohW6EL26xw3",
  "key22": "MQmmAbno5ez1QVu7ZZMVscurnxaF3VoLp3WBRNz59zUYARXjJ4kBYkRjZdtXBwHpW2tidCzSQRzUKu6BQMTFjQe",
  "key23": "59fP8kid2S6cZjBXrV6zTq63KLtTHxT8GUWWPzUHg5Sa8Az4Q7TcJ9mHUijv6gjrzoMMh1Qck9bp73NAi6Ks41uX",
  "key24": "5QuqHWAuMrjxvBwqVUZ8qe7A5dCy1ZzxVYvtmtujsFi7vFdsGfUPMNbkChcGPNfQR6BNDYb7KJhBBHGB5rjpA7ax",
  "key25": "pSnDht7NhkyAj43yQT4K7yQZD13SoXpheZsdeXpNN7AviYWrt52UH9wibuoGvPg3zSR4F87BprdcTyupAmQKMdd",
  "key26": "jE2wyLhBE7cRiSY7mACsUyaBTqxnVAok9GCpcuUwtDFR9b3NBv9WyF1A5nW8PqKw3jBxxbT7xmMy3UaC7U986Co",
  "key27": "49hspDoEXZ3mnd6KweQWRexocb6vPaTQbvtUCnxdX7jC7FzR5a5MoeCdP2NyMX1ahBDFWQV8F8oAjmRa3PJ7kPfV",
  "key28": "3WzvtBdx4Uak1oNqFbKHrBDXvubd3HNRxkppBJjKyVawBwBjT42uDSMZNrMvieAFo2L97WLTsGmBjqLKDaAYBK3X",
  "key29": "4eLMnkfmw3fPxvFQxKFCDf2LBMWU3UfNCuHBXYGETw9YkiDDaZAsPKzC3Doy4wCJAeJcDmJqpUSuVroH5qZTACCq",
  "key30": "stitZS28FtcQxifPThApxijH3saVY4sgvbjQtriMh2KQ3HnaXr3KN9bQRtteCEawCZ6PZfx7SYbwAZiKxpw8Xcj",
  "key31": "tvxuDRrHotG6qG3CvPSuawPupTPfVgbPKV5sYJr7Q31n42TGjRoF4mPzXp6ts4nR9atE5cTP7dUCed6VAEwh1f4",
  "key32": "4gShFCwbUNWkHbemNnhtXNAfvoForoQSi2sbLY7UbfdYPEcLzcGsDxJarMSJQLJzqKEo29ftYNhyU1rsF2mRzip5",
  "key33": "DJYPzyorUSbwVmaJ9FAErMPGLWYgKgPduSuTKsop9uVeP2FCDPBfAh1Jrx1iRWR2jb7DGxYWg7cru8Ava5hG29o",
  "key34": "Wu3ZQhyop9QjjGRhJQaNLDvZdLnLpzDN9C9EgPo2RyXfeNjxyPCibUc2zsRGAzTTHHhYkeW19eNykriXL1UwAKC",
  "key35": "3KZPDjNkUMbu2rzzKJ7h5Ko2AE1k5y8L2hcohVHMTRCD3SuWppnRWmXJLdddSN97XshisH3mru7JSWUDJjhxw6iB",
  "key36": "2Lu541KeSfHtieDkKVMemR6foBrFqdxzZfEAXbQeQUe4aedgJWqz9em4H63Pp3ckgbfTGnVf9Cnk9BSRPmZxVWgv"
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
