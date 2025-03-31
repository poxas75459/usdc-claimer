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
    "5B2R1SDS7JqM1LEWspAT3YAEGKMgbovZWLqLDn5eDvTodPsLL53cV46hnXs7NoGW7axkGc2nCRJsdkwM8LCKRy58"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3SkYVBq1NTA3BqUr39nhUbCFUaGzNPPV6YpEH1eRLARcPWDVw4QkryC7Kned5whpYZ2C5WDKGFA45VLjRJwknwwN",
  "key1": "5kfk38WHYoPj5k6BK9CnKyUnfxG16AnjBUpoRQLasfVTyVbL2uLgtDwPFWmBrZQ1z4JxUUQDeGNG1DGjEvaeY2Dy",
  "key2": "2dxdAySrT6eMb3KFjDBYKH2ZTEDS9FQ6Gd1mpDGZ7Q65ctAqeV66ZkULwaSP1EjK9yiKfGfSxCnr9hRxrMX7bVBk",
  "key3": "336EVcUeY5x85Xew1qPLPZcMDoyo3eqBBbMGT8PUa2uASpkjpvmyvdxPWaFtC7eUmxe7qCbVuqFcTxzWJwqc1gYd",
  "key4": "2xbDr11sjfhLrcxkA4CcnA5ZeUw3LssUrD1nK1R4A7R8yinGe4TKan649kbTSUTN4p6CMF83vh4Ag8FqqR1b37fE",
  "key5": "36xw6wmoAoSgS49CKxJjnNJ6cbo3d9atkxNRdEhKRRxczMokAfUJbJGysGj9jAnyaLnxRevLUj16XVae2ukZWSxN",
  "key6": "53ZCcx1FmGP6zXq29Z56SBo9avdyFFNgEnTQVhBDpdMDMyizTRDaQnkhyRmfpc5ZUc2ZVEre6oRuYVLyrCMPLZhJ",
  "key7": "4MZit2NGpBhEK1TgYC21vtFoSzLnypsHof8SxnPYvJPGVPsEVSfmEbuWiTfLjoGobTRs8JermnELrCQdzLedyQKy",
  "key8": "2U14yTtrFNcCAGA9zh2HkR9pvGdpWL38seoXD7FbWYNiowFQtSh2p22n2wZMUyeroq5L9d2wiPYYWyXVg5m48kUQ",
  "key9": "3FHdKFAU6VYwZxjNaWSZHQJybWTpKjrhp3vBLEtBQ8bmgfB6Wv2Jn5ArrZhhZUdBroQmz4Wu6jLkpMKzpT56uaz3",
  "key10": "4HPuXetPR5dMCivvQvZBho82WHfmvzkbUHEWAC5b2xD1gtMqMjWGGMeTVnMunNKbfGn3ez9B6m2APKMup8P5j9mU",
  "key11": "2biW8Nm1NPSVpGYtTFsxyjanW57xmoMjKet4L85TWbEko8GzQK6HKeToxgNNLfCdfurHP7ZhKhoePtXdbrFt5WPg",
  "key12": "4zVehxtf9WWX3k4hcsVyoCHaLX84BdAfvDJ2sDzWG5PESCnhPo4KxB6MpB4zPLmh9yPafYVWjat7ebQXW7bXChkJ",
  "key13": "3zg5U3os3zNNSnKrpn7jCtPYJtTgtK6eRXpbJgkW3SGJeA43dyTVKL7mZtbqGc5koCKWVPfopP7Z9rcjvG3a7GXt",
  "key14": "2FynhQKxxaXYb2rhzgJ8G3DUqg1C1RGZo7M1z5g7msSTqxrr7yYvwcZesDWPyDtUzSaBb9o7kGoFZvcZ6QCxpQQa",
  "key15": "5Yfg82sTSdFM9LFJXvqhoWy5CWdCoPssiDh4wJWh3f9bC55JNmcHWVGy47cgv3bE7MmU4V518E4ynEbJa8MhB1hz",
  "key16": "21DungY2fvw3VMiQQcc5daQwkNKQ17CAtKY5vTpom7464xhv4veBat1ZRG8XGsYztPmwbHsbe5ycPibDKTfoC5QL",
  "key17": "41dXPFFTUqCLTEZ6cmwQSKyzSPqindwwQdymARjq4oxcX5NuMk431AS3L4U5cj1tE4NH6djmyAxQTcmc79gqR4Gd",
  "key18": "4MrePDjxPefjv7VuL4n2UzxQoVwpQ57q9Lu9QxLWYKEX25Mt2kMjmz2Vfe2VaaWafxr94LhPMAY1hDZxCpyFFTfb",
  "key19": "2FQ8TnJfhUxWvbyG9268LPXJPhJB9VZoYZTKqDBo9U1yt5AGC59NMGL9Kf7gsFKamB9X97FYwHjSnveHVfHUcQj9",
  "key20": "4R78vaixLxRoHJbkAjEinPrvJUBsnXywUUxJU7ZXVVpRGRsHFAzCGkZVWc64zKNnPYBE7eeKcYVZLBZ7bCkGjmQN",
  "key21": "3c3AcrTH6NDLdLyFgZoCX8uxYoFoevAX6q3FV7q5VCxP63YvV6DtHXDoRHPNNdB6whjvn1qts1JWkjAT4ESRVFcg",
  "key22": "3RqbUxy6n8hgtgyzbetExyLiiUi8GyonSemXtt5X6Tc8ce2cdFn971BfS1143TTetUtSeqoRrMyKsHDxkvrkU7fg",
  "key23": "7NQUFpzMAWMkQxrQme2JPqhL7k5B2VwkzwANfHwHYyYLKdAxdQF2BdKdLdqMciffxXGjXv3FtmAHtww9x9Em3RT",
  "key24": "53pCH7Sj4iWKTUGZiSFrXBHGaE68ZgTxX8hLVH1st4XU1AnEyrjTvRnXL5XAJUzv1irmjLdcoWUEucZGUANzfeRg",
  "key25": "3g2CfXNhU1BtDL2yjSvzY9nP9XojWvfJhDtyTzt3LqcW1qTzFPhVnMjModpU9kmgptV65Gx73QHspSWsPCEbbhdr",
  "key26": "9GRJZovaxTkDMStXVfwrTD5XVn1ocxskCFbZD3LhPFMzSVthX6ofYkBHavrtQ1wLnXHfKzY5vcYJz8DXB48L7Zs",
  "key27": "2uZBmn2Dr1YK3DPcEWYXgB87L8QN521DR4ajGXHrUZXfMnCmHhRDnbFjNdjRjz58VtY1uVCDw7gT18c3NwWen3Mx",
  "key28": "5NEmVsBbssjub3HPYQv3N7EQGPnKex4bV5MRxGtLasWS7zEYwLg5ybr16t1he4i5Js8eXV8QUEKeRtKBC1uWn8Je",
  "key29": "64SYkiK8uEUhMwdkJ3L748pDvVYUepKe7trypK75CnmhATbdHFC8kJEYU2rUx7LuLZrpUpCsWUTbmYnJR9dGeZdP",
  "key30": "2VYcUCo5LJcN1Phtd9574KWmh2PRMUS8W4EiTUABEEMN6r1kp33FRJ3dt3vMLgCmD5Sjy4ZumPRngsu25DHNk8Ht",
  "key31": "t8x1RMcymGc8S7SA1XuehBDnR3MUUU8mqUkUgXCgMxqZEiUcTkaotPMt9AAW12HYs18VzysDytGWXa3bqmh7RgB",
  "key32": "3QW5cMnwpajd6tX58GzMwqXN29nh42UnrZEw8eperuErBFy9hVh5v9EtCD4682KsV7A9jixPXnvGAx59sMBnrqPg",
  "key33": "3neyvysmPVbMcsYdqiu8akARTFZqBrJ5NCX7DBSUJLJbqMWBkeeHiVb8K67Ji2STxwzxrLMT5XeYXq4Gt7bzLvSg",
  "key34": "KjF7BmiZgU8aesTYnuCjjE62ZkCU52L6MXvLDoPhri17qwYvHwEVUYKDmn4Hxmung3HcMLwqs98icNYqbuksg7G",
  "key35": "5y6pww26nADfQuWNjumf9t9MMyVQYXEd7RNc6AgL4aDbMYpbJYSgRSRJQxnLMn5bcHNe6CB1BkxRenUGf56msApm"
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
