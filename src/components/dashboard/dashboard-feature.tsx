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
    "363kSpSYjFJtGBDQ2LHu9B7ucHnNMzdpx16xyipmqTtCav23b2MdwjJiwzKXUwfyKazksCBT3QkW3Ek57JqidkpN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2fUTgSkPXaQKui386XGyEbrLbxQcJjzBfAoCnysK8abpuAUJaGpJScGJqVYoMiq7spfYaqw1bHH7sLMDPMHoUyCy",
  "key1": "3dpf7sEWJViMJU9ibeewdz9WNB1bjU6nVdAiYn19VzLmXm3ook6WyZSKBRJFnqGaBS8MApSG99CwzkZD4aveYNsS",
  "key2": "4KZnAjaPn79WL9QC2nSYM112BGTHSg7BAapds2uKHaTnnkEAD4RUBEMsZZKihhVv4ZAju3BTu1e8u3jRconCL7AA",
  "key3": "3tDfbiwH8Waq5c2M5oyS4WvLNGDB4PwBcTJPJiuKdDjYw6pyFRrzVUBXZxadaVoshiXvgRss1GqavWJdNTJ5cQbj",
  "key4": "3ZXH63UvwTr3yexyhfiFQzMWpFo8TGy13CaY2w3u2Bqem9gtFQSt6mFNukQh2dPMAPjkNMsupDSdy5cfN53MbTke",
  "key5": "51nZXZ3pSdmac4qFSFweNLfNju8jPSTcn3N1aXUh8rQ5mw62wWuyrNrCAWWoWsM631acK25kobwCZLoN4UQz3Udw",
  "key6": "5RAZYgcswBoRdcM91XjdPMxL1d3CTLo3wF3fUgn6HGJWuWoAZkDv26AdUbtkqDHcxatgse41Kua2YSiWfvrdVsZZ",
  "key7": "ijmLQMGuHWEpKNY8THrqNRqFHWy6Pd3RzZxmDA2qJjbX5Av7KK6mpy6ixmHgMmysWMMNMhvTcZ1PrRMDRpbKW8z",
  "key8": "4cZvoBPNsE72MZcUzV97qE1LsE5VtvyTFidWdDVWALRVuxdsNFQM2SJq9tfkdKSVbxRX369qr9KrKDw46Y8juJPp",
  "key9": "2Qk2uut8qpdy83JtsKe7EV5ZSNGS91vxZ7HyFBdsnJRXPXozjTHhmd7gWGsqnzQhaL6mJGEEuyMpGP7mJZ8sHNpk",
  "key10": "4i7ujarAWJ7XgCuypSkFziAsVZdFyAWSifJfeoM9riN4fJocUnDnTC5SP31cDaCA7j7MnZWL1XUuw1iYnLnhFwyw",
  "key11": "42HNDccdqV3ifD4zMw2Lddte8doWzFyF42T8eNFQ4LE6nfBBazfK2u4RouAB1Hfwu3HZDmwxJy6GBqWhBqfs2nSi",
  "key12": "2zqdm3PJ51F2QJhzZvyoJDNgJkiHtn7j9kuG2qnMHg7QNBahiyH7kDaCQSBpcJTmM8o4e2QCHpnLtXpK96XEcPsu",
  "key13": "31ji829DQRgyJCyryJeU11yvjYUgyKnFwtsPV6vKxxjgyGcePLEK9eDjaPvS4Njn9QNxo8hAMzEjNYVK21CxbGCf",
  "key14": "5upiS6XBGPbkB5V3ESBWY5crpgUXYSbCmejZEBMB2Sw5YhznM4aZ9TrJJSUsW3cFwMAAfibzJnqy7MDnsWxbwVbU",
  "key15": "4VAFdcJjthwXrLqGCoqJtR2D7iPah1rbdBDVf6JMwxikBjFAWcB6GeSjfBULKmEAp7rL9sT8RCpvSXbuCJroM132",
  "key16": "4eGengNZmGUSNYKVtZLfY7AwAZvXbSHvetRB4Fmhum7MKJwTWGKCT1Hxm1VaioYwrQsHDJ9vZJM2WbZuDr3yKGcE",
  "key17": "FVLRT1Aejbd49zhs5iBB2QJs8ku82v228Eo8MBNyZbEoCjNXzCfM2bqG9uhMqhobxbsP13VPaL1MgyMjjtsLZNb",
  "key18": "9HGDPKJBqQj4Ad1jfZ1bWYLYeLuhMSnCqvqLZpPttHoYQjuRoTFgwW7h7wSnSzui8aiU1NB7tE2RFw199NvwABY",
  "key19": "22uju39W6vBBA7HH27f3s8C8BA2UqV1JApbM26h5MGLeQwKWLqgZv5jRZgCRejXL3FLnG9Z8NGEQu3BwQ1VJcKDc",
  "key20": "4TrXuVyQVpA6tbop1xuaQkG6Zahoogn4a38dUP59i3jpAGPni3VzsVnhS6ALAgiTvNCNAtaE7mmeiUZAtsFoTS8z",
  "key21": "63MxmBAr6Cpc2WNwy3u932GozDAqP4XdCH35opAdrNQkK4Ynpo79KFFyYqwcYXic8BTaWpsPVHuYazPay7MFbzCh",
  "key22": "3vM974jRXGJiC2SHnuvmWTZdLwF8Bxwa51f1WmWR9E1ArLPzzME7SeGWghjjedacoK8LTayoDiG35uaa5soKgzdW",
  "key23": "jPS546XBj1X25gEqLiR2htMXLF3Fp8GBPFUeWJhQAGUMr9nsfbMJMwgLfitx2cJfb1bTUYiSTHXHytf1HAmLzwg",
  "key24": "5ZKnLYLw9R9SDCoFJExzMtwVCC7ykvNQGSqJPjtgPGxLVRjTKkMQB15vTLwpfSQNUYNLCeobV4zNkkbxoGVqdTQf",
  "key25": "2bKksvbkLTFFvEPSEWpohMMnXuDgqXrbkzsXaJB81JqS3WFetxs4HBvpLNEcnRH7e1UedLDCbG9QUxwSRmeaayp9",
  "key26": "728LgmFY4k7XdfQbXmrq8dkewjVyCrEbxoFKqAATuQQWWJCAu3ahyiJJ18zN1p21pHt5w3c1nk5NpLpgqCDPxFJ",
  "key27": "5FzBBRowPZEiTRCwzBhRRv4w9zRinffv9cbUWahBm8pSzT1cr9UB7Za3PE1E1GXF9T2RmJQn5UwaLWuqXMmu319J",
  "key28": "2DaWioKwEpvTNGKhPyR1nBV7K9F9ey9c22285nLcVhKQhC2RHsHLjGrcMpWXAWYDhjQ6caECsg17aaLHM9Evsq9g",
  "key29": "5Y6k8ooaHXZ2UxqthxfViL1vQwkTHqKxr9uzFRmWa1mNCZXBFVr6NpVPzwstZjW5B4BH78tN9n5zduHsufkGXJgj",
  "key30": "2erqqxvRi6V5p35xbMJWAfnNwojxhcfhqjaFqfxFWwNe7mSD6vzKjj3mruC45KCwLhnFibG3V2ktLusQmnMktdPd",
  "key31": "2qHbt5ZR8LhdZfJxyCdr8qxQFrZNv5wRYsEWzDNa4XsL825F2i3o3UN9y6eFiGKjQZtiRbUFzHTKqCMu44h1DNy",
  "key32": "3WgC1Y8sb1ERFYSX4p1twDibuiBmPfx1jxXKV6RXT3mKPxpWVsNSQTDyAuZAzo3TdS2arT2MWMJhAgqdwjgnHNX4",
  "key33": "4Z4xY9bAnSW9i4YGdZUc1VohkVkGLyGw91T9h38qgV63gATAH4u5uHRZgEiihmpWxh5kgrR451TgJZi1AVz6ppJo",
  "key34": "3oqCWvtwZzHJDDzG6gKmvW85ejpNfiUXAa121yNkK9a9dfYp9b5WisjTS4c6UpsSdY4oq3eiThUpWhkzXpNpD8Q8",
  "key35": "deTHy2mshotRa97WSGhtijWjkJw25s6TQzVz5csAY7dq53BESfFDBT8gwmySnMLb97UMdtT6gC296d8jVFuEGpw",
  "key36": "6cT6wi2ksHa5RPtZNEiNyiFUhTFx61d4naFjmgq1Qog1xrnY33nGKVDuZg2fCEDVhuRzGCpDjoqKE5NrCyKMHoF",
  "key37": "2HZUkWiV7RtUohaNQkXb1ao9B9Jf7x8mQjvQFmFLA2Kj8rF5SiY1DmHgVTTNtCoHYMQ8tNY6ZkVp76Sm3u93sDkE",
  "key38": "DCReLTAH9HeMBubH9z5uqoBAJMmmH9BVewene1YPFAFz5TPLfkXYmH5Aghg8e8p5brhrrFUackDWoc8vcKbfo9a",
  "key39": "5VxXf2Yv7bzyViCEhcnB3bPjMkpCtBVsVKx312eiQ26qnoy2ByCLXk4eoBbvkejQRWUr6YocX75uBiG4qy2jmDd3"
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
