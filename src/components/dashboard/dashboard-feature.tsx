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
    "2TYFVEnCKvtW9U7qBdrngqnQvxGp3pERtQyPwpXUR1nq9JUCpAwhwD4ce62U1KGwSXCuuLD59fZBgoM4iVfRHUzs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29x7w8Axcb3p3PTGBFmNiQSxTDNiapSf1txYyyZ5Bm9DJgrt1tapzQHtby9Gs7Zp9xrY5N95zuTuCeP5iqEZFT7F",
  "key1": "2gnz7jPJ49Z8HhezjgpR6RF2VqXmd6US8F4yWWcWj7phN43eo4EtAqZPjDuVM8jnFBRB7hAyW4A5ZxtaL87KqPna",
  "key2": "VwVW22sj2Z5VzGZHtvATbMKxkdrbt3PneURVF3HjV1pfsfGSEWycMFmb2MKfywwAgMVg6PRzDcuaTy7z5NHSJRs",
  "key3": "49yCJT1ocJ82WtnoeSsK45XXQvGKryjV99kkdm2TfN6DzK3RuhdUFAUkRDDUo5kdtSw3pWGxmw4NGGkpotKRyE6R",
  "key4": "2LEziCNEpzvnBEBFhzngyxgFedvtMDS6TyKfBYCpxau4wQduPYqQQaryD95FYBtT99478ujRjpPZtd4dTXynofBG",
  "key5": "5p8eXpyoYEStNJ8Bgnob5WpRe29HHgZyJTk6jhBRimw2YJDPabhKK7jfiejxRFh2ijNyf6bBEQWvKvuW741XvqEr",
  "key6": "5McvxH2pDzNMLnLyeGbX9fxqVWnvmBfM8oPq8twkqq61JHaYeLYEnsQGAqXVu2ha3LwwsKKDvXB3VLBmXMsfoK9o",
  "key7": "2SZMKkRdqtuvNPcs82XAD9Q3TRVW6ASKSdtW9G78DPncwTWp676rUYBkmMLBfxLXD5qJ3bwUmh2UZyBPBryeZrjB",
  "key8": "5UXXVErHnsZKEEKk8hZ3vaV5BY9cw3uYWKfcwmBtnateaWYH4Yu1LrU5Nv5t7LkPCYdSepoMC882Dy79RDDULc5K",
  "key9": "2zncCEu5RvK1tLJYpXwq7x7CZQyYpvhuHpDrwKNKTR5YifYRJtfShAzoWhadvYjh6iRiW3Qr1bKdbozxiLHitHgn",
  "key10": "5D9eTYAXCifSPB1US2xgyeoZwK2LNj11Jrfz8Uee5wxDzdxYsQH5jRZ4BGW9zfb2t3DJg3utcjPmt1SzkspUumXY",
  "key11": "YHgXyUj6f1bidqxzCGz7Py6BoytjdvhgEWyr4UhuP1U2jnZ2ZCV31DNi56JMZSxEir2jKD86toL2DnJaFsuhzDj",
  "key12": "2jzYa6HCb4Sz7A8mqj5nfdL7WhuVpZYsPX6QuFNofomv9doJ3k6CdAk4rCr5k8BZCpF7VHyYcDGHtnqbmqz9cqfX",
  "key13": "3WA2Si72pPV36KY43ppq5quWLdo8GV2BYoo8sK6e1XQsaam2kNf3qqi2guQVx6q49uXWjkfsXYkmQez255SvFdx8",
  "key14": "sDhcyuNDvB4dm6xXyWXpVkYrcBzWkzWtCzWpRXbzorjCNqkM6mkcKggPAVhCxEx6y6EyXrkzKRe3G4wWk58u7Re",
  "key15": "4njZsDinoi4mNXyQQ3TtVeQKEqEvPcHpmS6SEAxQcAq3aUM4XaMwjERHmra8pVGcBNpAp7UqrQYMZYkwCvSuFYe3",
  "key16": "5JkVxnTP6YzPqH6mAURtibAH2c4Kp5zrKjKvyfiVcSyas6UHt2twtZFB4Ue8nEZjpmo7JeFNsC9knPdqi8S1BrSk",
  "key17": "5wPpi7VykEXRYuEj1ctApxPBviGDC94J59o1qe3PzPioKtjRs2q4fpa3XGfofEqa9bwMMp2qdG4qLFbwyaKuFKj9",
  "key18": "4kXRhUaXGxM7A2Ys7nWXXNPzowePNwt74ExqXtGR2xJpNqUKhouXwKUiSxyY9gUVNBtDkXgeXGrbRkwurDkcRkZk",
  "key19": "2smkrXpm3VSE51PW7nroHZPmyZ8a7aXAV6c9zJZ9LP1W6JVgaLEpimeywdQtgqwV6YKFkPfjDFFdd4tYZVDn3vmD",
  "key20": "44seQY9Km7KMKopynWX3QtcVMk1oBJN4s6abFL9L3dmeW4omo5bA5fAUY9P6m1KdcKBiamwqSy5meBbuaAAT24Sf",
  "key21": "359NcmHquqcqhD47YM1Erjgw8SNjhsDt6ChF42a9yMfoSAEh9jvWHrVeLQYHjNpjd6LKW8vwjuF77yRTwvmKr9WD",
  "key22": "zV4KrsBymGS3JnZDV3rnbPrC7UNdeVbbB7USXbcLq6NZw2WNWeTWtZXwo7H2NVZhSf47RNY8uZGBYJcrhknvNG2",
  "key23": "4KQDpsv3qH6enRP9LDWu4KWsbdq6Jf86CPX8CnVRCNw3Xdenn9nUUaFjUNrPpsyTDtALZEXT8LksaNp8mZ71pMXV",
  "key24": "4ABc7Pbd59xsw6j9fwdhm5tPLi9UDniS1m1ZXxYXcV4QmBgVCpm2sMGxWSzLqgD5yK1fuuD9JW6uNoz6iPk32gnP",
  "key25": "2JGxLgAH12YTepsAEkYg1NkBWaWRFHXx97CVdgDHrXWdAYzygjjBQYwwgy6atQ4CisGdoNRcRM2RyzioSmAGPcDW",
  "key26": "KonbTjuP7fzXb8SV33cCPTbP7W8PhLfhRrDDk3ee8ZG9Tsoe1jnpvr2d14hrG3X2vaS1Bkke6Q12hQ6Bot1zTaU",
  "key27": "2x5GLzRhzCNJMiQUUzrZdPHzxvXwF6cGaEYv3dECWEzu36EPqVz7fhpD7wRt3dEr8KB9cNrh5ZbKRoP2Sk7RUejs",
  "key28": "4Ppeg6mQcWwqkYMuZbj9GpULy1Ua5VJkYeMjLpWrmoDSNW245TRahES4qqUxp7KgtWd5KWDBEQ4VpkJMGVSgRsQS",
  "key29": "5sCnTT9VBicPNyPDvk9FnEFQCJhEEBbEkXkPEzdtRTENsnnaAHuXj6GSb2tNfXUkk8Rk8F5cXhpa26Nyi83nDVQh",
  "key30": "5a13wZQdwdQm8uYJiL1Enodn8hcfuH6FmptgryhZ11HZ9zQyDP1a4PrAKnSrPMFmy4pkUeioyjM7zxVXQAKHcHN5",
  "key31": "4rmkuGPLzEztGM87JyTXS8f6QNpRojpT1bRLcYAsRbrFtNM2h32EeTZXGWH6Tqnq6coK3LhQRMok8hBSz5Pm9ftg"
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
