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
    "48p7wBM35vUyxHmxZT12EuHh51RPjhRL3S6NhVGgrmwk87VjvAWw2gDx9bYdM1NSGqmiQ4W1DuX6GndoooSutnYp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4oB7ESa2mc2a6ETeNu2os3j2S44959P2TzruBgTTfMMrHUg2RrjvHES5MyWX8w3cmiPc35Ycj69x93BsNyjEDHcT",
  "key1": "M1fzGFNErdZzNPPdrMCTVUFgffNSfzgaJtctzpFqTZVCfUMtxbMeQSn4iUzo4aUPKsgCajioupZi8YnkbmHoctN",
  "key2": "4EjCqUdcmaLzRUYV6F1r629fpkiY4EUnwozJ9EQN8HrkVeptm9L6MCjE518icGy8quHcmB7pknS1xpymG5YeLZom",
  "key3": "4ja96svrdFPa4kFHtfZiZZPYf7MCoUN5cDRZuQQz6Mh5R445UaYwMLU1Hzm4cv24tnQnNBFz6qsA92mZA7zNupab",
  "key4": "H8zC6pvRpsDJhFzCajVofiuiPSY2b5h58t9sQ15hXK3NX5oWi2JNFQgBGr3JdMf7SrdE5v5bga5fRngCBAzkzPg",
  "key5": "5ifbNjisVJyqJ3G6nsjgmsLxbEtTHyBekLAvXnGvAoUSmqcHM9UXybgEPg2qU43sdyFJapbgN4ux2V3ynGKPJXo2",
  "key6": "CTBYEHRPnPV6Z9TgVZtcF3MdnDz3fQp5YKRbnmgaQMpFU9g4BRRnP2rGggqeNjfP9AmjKgHoL6ME6MbG4goN7Cb",
  "key7": "2Z3NxwZGsAYKxDufTYvUKEKZtEerA1SLnuzW3qi1prLT5nQGJ4itXsJfPAKKuBfRfgcNiqZVzpAMiYFNb2PrhCfV",
  "key8": "MSf41GCg6GpXWDzKyEDibUAMVKfmfvkz2UcwV7LKuc2uwGV9syrKabwPcF9mwGc9EcY7LdaU899QmdGYV4RG3uS",
  "key9": "gMv8ztTutW2REmaNVJ4fFXHkoLQfF9nFVeTA9gse3tS53Vk6Nuv7LYshtDNjhHBvKWvMfPE2a7czcLW2ASZGsyS",
  "key10": "2fXdtCdZQMLKNye6c1S6bvtS624YJmCv6Dp68116UpPPNyzubbAfETwBhkj9rH5GHxSmiANwcigrSJGuttMjzpXe",
  "key11": "3Leddt36XLuVhw9nuC9iZCtfKipakpfpjYBWT75BQaA3BmLE4cEX96N8KHTHLdhWHezEWd8oSfufQonTVz1ehU1b",
  "key12": "33kT6Uioqr3k58AkxhtMQ2JzCESRMWAUqfvD4UVnKaBDNkimxtkjHBhNpiXZTk6fjGqUknDDkLTnAAvuEGAggg8p",
  "key13": "5KZySfPN9LxEjqNUVKqv9s9aLmLRUcCVVkA62dsYUhwuUsevTmzEHfUcLjt73Bf8ccgNsrpFLBrwHcwvA7MWvuLB",
  "key14": "kKjUvHnHwVoj6if6yxmk6oFgiQbqkDE6b5B6ZCuh7QM5ppJ1E638ovd7vu7ZcyiDAGi6tz35zVYwE4XxYvkT58D",
  "key15": "4JMbQxxZsNUGPVQtfAEqWixhZ2EfkH4KdUjUx8nN6mxz2wix1gSQqnTqcJpzHLCjaPHgmgsMdZVUJf5fbPnp8zSo",
  "key16": "3AQ9Syh1bfjMzTvUuE7y47HyXnXP5qVihNGggLvqzUGRcpZ44JZZBoWEAQJgtjNpqqvFn2MydKJ31uBPxxE1fApc",
  "key17": "5fioGZmeBVQqGDtEWv9QaKYNPNGPcodyWSfrrXVNmC6LeF9m7v85Mi12DLoVjZvqVXPENvE3WFvPgxUYRXdjyk32",
  "key18": "DrN6QPEwbW5MyNhozft2iGMqYXxot4sGYyKE5bFEwoCupXsnRJGCT1EjuevJE3AFSnoDU5q1mgSv4tsZQp1B3rG",
  "key19": "5f8xyBZpsT7GAg8h7P1ATg4Hd9rbpBLETTHFt5Z7AinXzK4LDVnC5XE2FuMDN3n3xXcaKqPb26J8Jnj1iaqf6pX4",
  "key20": "M6p87t5f8dhGAbZDv7KCe8VjG1vxd4Ffea287qM6QrFArK3KXjTnmhtTjaDSxiG8VtoZXeNNHFoA3sLAiU4evat",
  "key21": "2f7VqaHKevRsgmKWBVgKw9YJYWYYsopXJzjFetiZdPvamzhofQaPKnLFJ4KLuxEbDxW2LgCE4neLntD4etPermJy",
  "key22": "4N8CDQ8zPg3S4G7s3wrFzwv35TTeGaDX8SHLEPS6gPmbLUre9FNGWEXGXuJu8MwoK8oLoJwXbQTcxZ3wyKjZdbiJ",
  "key23": "3EWbi1Pos1FXvod1utmiX7b9LL5ubT7CqdZd9REaRrSeiL6LHvzJYiGV2gxUjQTEUTphX1Hip7CQdwR3Kmm4DT84",
  "key24": "4YwiMvBJw7dsDm4hyAiSJvZEMtpGtkC5jJEwgJzgU9n3BsBasdtcpK2hbeaRvsAj3UFE3B1GqFdY9pBLWGewuBnE",
  "key25": "3C9quCT2wke5uGNeCCiMKC6o6Pah72MM8QGqJmuw96FSfxFXXcc35PYATzbU72MwGNFPP4bbD3GHqGfyu8krPKpe",
  "key26": "aFBYmy7WMPqHDBkttMQuDBADnbDpjGPdBHXqjfNaa7qQiySxkmihfkak98jdNStTrnMhhswZB4KWVrsiGqCcpoe",
  "key27": "3DMPyherUTssZpmSDNyfoBRkeypjgh83t8BF1S5tBW1AzdPsnqnraa94MLe5bFJmhkN6hGdrEYjZ3RGU9zTeiBYK",
  "key28": "4FSasB9tYsTCbXmux6AVAbkZDUFYjiai9237Px8Q2rAc8d6X8Kjr4PdhU8Ysd6h3TxpwdSRVRUsLa2jBdPKm7oFX",
  "key29": "UhTJbtBincEaMD91o4w5Hx76uygAms6QDPD1xyS6npooCksp7kzjk7pZhsepLR4afr5nfnKChZsBqB3evHv1zZP",
  "key30": "5qjqeRjCfHqkr8ypFpffUTfqUUYmJ6iVvxrvLs32Sta5gDykvRuCt6Lh6oJYUtVr3Ly7Y1Bzch2imbzwsUBdp6sb",
  "key31": "5FH612t6gTUoEegCoxKTX6cg4yMt6HvXJSYcgKdNDWadEJScB52VpFb4FSDN3dQrSZ6ZiCdoJhuMyozTn8RnYG3V",
  "key32": "2Y4KdUeeStMKnLuvDXsz87sXCU2JoDyN4Esb8pBKGN3w1xycPAVaBtQeScNj1CnimQ6NfKNzxuzEcLQSg9LLDRe8",
  "key33": "ns4TXbbigppDuJG53EDJNSTaj2MrGidBeF2Livzc8rjaQv8DEE95NMfMxBJzGjXAdJJThuGDEPnjP6pePEoAjq7",
  "key34": "5NGCSb49RA63iEiWJYFCMqyDfeHrFRHxd4rKDeqAh1pscKgB394TRWsFNHkv3whV3fBnSFvQf3vyFxea4ksaVECY",
  "key35": "5hCvBCQvTPwR3EttUhWuEJFCdRJYMeoVKu5GttmTdAeMkgkwYFS1PbNgVrm4iTfYKW1C4Xqa1E7XvbKk1grrPMhZ",
  "key36": "5q2grGUoA1DcAbb7cJACUVcmJTM6CLxHSGLLMVSc8JmCdhmnGqWmoaqaPLhcmG4RWMN44XAqYrbQsRWxHKhgNWNT",
  "key37": "25smtY4KFbeGYfCRr3RfeHV9QVMxN4qR41PWAXs6WRXVZD3UYw9bcbse8t8u5zpkHVyYoKybdEQe9usoxWwXemhp",
  "key38": "4gu6PRxiWHFD6LwpwdSHzeEQr2YtpHCjdreBhvXbqJu5RQ1uZNZeeT9R3c9pF9GGXqoQxx66t3iL2TCmnFaCZSKr"
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
