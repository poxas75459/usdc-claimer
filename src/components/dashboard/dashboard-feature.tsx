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
    "4aGuYU9jpqicwc2AyoH62DimMrj6iw2MFXNJednFUiuX1jHyEyN1L4ebTHEMNrrowucMRLmeVw1JoLrpLSZdFnVV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "374EzrodpnW6yi5ftPJFqvszYg5ZwMN1tbCtJ3L5TvNgXtjqhTiqtK3acUwNYHTbLX3a23DK9XgmsmX3cfi1rJNg",
  "key1": "5ifTHWawrGcoJZDiiz8hGYjDBu2tvCxdpgi9DdET24jSseQ2UCgCsaKkXh6uoUfrB2tgEfN5eXf91jcvNUvEj4sS",
  "key2": "38cLkXWi6dc1UdW9AY2pFsPodHQDU7hjqrqsL3CGU7KUHVdCmP1tttqFNcyLttVvkVPVq7vsdCzzXyzZeYWtkdpx",
  "key3": "2YynLJLQmeQgWP8WcBEUKSF5pxUEkuRQj7QAEHtjNqWQb9dutJDuUa7G3QpyKYh75N6nJq1RtrvYxBEipu4QcdsF",
  "key4": "4a3T6cfZfxPQbyq8wYchpVrCkDmq9Mg82LXbYnRhdEcZZFqvxrtJYNZ87Q8NyZkKmdHZGsthBGxY3UKNqfLCAUJ3",
  "key5": "LVSNLb4FSrbvF4YmovncNFLw9cFBN5RZHFMCV7QbuMvjMit493aYuCqctga7dPu1umpbjVAgzRn6ZjzE8GhT6s3",
  "key6": "C86KnYVjVVLJCnvWV6xCXkRQacN4PCycqmSYS4UCpAbHUjavsNzVgMD9zkv888KQPyHCwFXVd9A7kfKEoNeY9Xt",
  "key7": "2ZbtqJP4Uhw6XyXaXMUXhH8uCjCwtueyd4fSoT3TPqokLMJCZGdf6pScXvj6hiWS2THsUQ1vxT4CDWJfa4RzoiFx",
  "key8": "7qd6tvD5YQMXcf5deJcjn5ycWLCoNXRcXmxotT3DZDuH5ADmLhmmR1iZtaQrwQbxVyZ2LkfKszo8t2LWRfoxua5",
  "key9": "2y1ENovrNWACz8RVyPBuM9KxAWEEFwNeHkUZUDhSC7ZxcYR8cJZZFYqEr62XN4NgFZd2Hk6WpwrUveLoYw2ZPs34",
  "key10": "YVvk3jUZSokB358Lx74WBB8GEkQbhYhEYPgLhZquHmJJ2RvUBUMYjoodRFApgrArfTjuWwCcSXkvUyCnTjvGA8F",
  "key11": "2hszfPhAK5BSJSYy7Gn7AGGAkmAAxCyYpUzi65onZuM73gmDsMcpmqZpb6Ate2F3o1TcY3CeDS7tHte4smA2uEbX",
  "key12": "4aCD2sXwQ2q6gxHXYMZXAUJPwy7zzGdftvQ6pdsuTtnQ9fuVgsXSA98pfquucJZvWpvNVwAmh2zY87uWBTe5e3Dk",
  "key13": "2qrTttC9uJyhQieXaxLG83wNV11JZFpU4zwYyVzvHDwJsGu9D5rndqBmcMJ8Mc2PjL6N2B8ePXrb7kfcFZo4hr7r",
  "key14": "5or7ibbWTFixWZuaCqBvQ785UTXQ2p4Fbr4eXwQNGn3XFabhdkGVysroVru7yoSoMx5gWaLiWJNsuAxWaWoPpzPR",
  "key15": "47TaEfsRBNz7DevMdbjxqZPLCFTFYKRSepMjzdDr8Zzh2xABd65ATupw7pKZbVgetqFYc917tToFLCV5cuwycWBL",
  "key16": "33pH4bfVjwMPpb5CVd5HEZ5XKxHb6FVKgynzyXuoUZcciic5scFh9QzF2txRy146PXy9DA22HfANA2gQTCJisJrw",
  "key17": "2bKZo3kXP3tcYhJjRETmQHNfmmF5bES5286nJH4UKEQHJf3T8QD8aSzEu6WLpiMV1AVXKBPRdf76P8NN8d6d3N9a",
  "key18": "2f5V7fumU34Jw9fMuJ9tM2f5H8ugc4uJEwdanWeWDs87SQyJU2LN1fLzTQhjmsQbBtE8jGQREYYd5TV8C7n4bWWS",
  "key19": "3XE4ie7jZB9gDSi84ZFv4anDcoQiJtuwGGbwx1oYSYYjECnuLE3NqoDrQPz9dvcgrESXAbPMPsUnEoatUUWpgzAd",
  "key20": "2jhYUU8uUhJmhnvcHWygJxgHmHXuT1TJX7UrY54PNzkw77Bg8RHD2TkvvZJEiiHAGLr7hhmo7MhKBJVrTxcjr68v",
  "key21": "4hwwN7KxzWFCpsVXUNi4n4R2xK2kUZn2Ry8FaHaEyWXUrxWGPZpqbD42UuDgTCYdAZ5P3WR2tv4jQGoswVbnhfnq",
  "key22": "2GqEwgm2qM9N86HAFMd12se5y4xu6d1JkgHsmEyWHURdCEgHiAwKGfNcycvcXdrr3pAmV8NzXEoywjQ8eqX5H2Jm",
  "key23": "4XbRYzByMVmoJahtCH7X544PENddNcoRNJYhcFLzKLQ2MJAXDDiphbtPt57jer1UXDcQnVu92vdYm93KdjnsoSXq",
  "key24": "43w3BpwLWwbFCzshK4AizxXHiUiRowwiJhvuaQsZExmLpAerrWo8V1aLzvk4vHs12op9Hf8rzc3n5fFX8Rj2foja",
  "key25": "41y3SAgd7BJYevE5auKsNdwAqzS68ueMB9TaH36hEjyymz894Re8A1iWFySUzaVtd7eoFfFfbDtyJL6jg1wDaRKT",
  "key26": "573HoicLHiXv7ojJz7cdpg7Brhnx8sXFkAe46UeWwzcrnKjk6qqLBjehi8o3945vAzxwiYLmqnDk9ceL96Vpwgi8",
  "key27": "qXNZJiVieM6QWGGL7Nhw1eg6sb9j6yWDEZMDjMeEYGVwa98zZSqHMCLMP4oJeq7WQjoMR8eVruirdVpo7EttxH7",
  "key28": "2CnMYKU54sWuRfQWKDEYeKwUwmsBGC4bJwh4ySR7759Jbv32y2dPpfpohRTJsfUEEtbRq1J6nyygbT4rzRmTCEC",
  "key29": "61W6jP4V1a3trv3Mp6LwrZkrCsJafZnPN4VTnft61BxBrtqr1rvVUYZ5rE1XmddF4yURx5udD3p7Q1mZFLyvv2Q7",
  "key30": "2uepypkxvo4P4QL6qvcakYzbrvkEbwfnYi2t7S5y9AqwVLrm4zs1EKXBShxubJGrFDqkDDtwenCSNAWDmYXxdh9a",
  "key31": "2Fp8hEdgnBfqAXyuHYoqc3Vb4Q6tanAteKkeLStpuzLbL6mVpVuHmGwtxC51cxi5j9YvmQvFte4EG4nCeMeMugJX",
  "key32": "4sNmfswZZzuUKzEcy3T7ZQPDowGGYEgS6upK1ruj7sEg5U9fY6rp2dupSXCDdrYWdbEVBfFqD1xuqXUtaTf8DRKx",
  "key33": "3RMbYA7PkYih23DwdjfBfAJp6WENxDEMyDuqNA4oiZJPi44Yprs432vcSZkLiiVCMgZCiapvwYHYup6qA6Br2WA2",
  "key34": "3Uk9d2ngJVxrDxaPSy47SL8oUYuedJUzSRUzBA22adwLvPwZ4r6EYSg2xNWjEm1TscKSdiWsKf3VgpmRkpH7YzHp",
  "key35": "37ALodB6voqfgcos8P2utGC88LN8t8ekticBTLAqeP9xjhMaBMVrWuV2riXpFD3EFKRh3mqL1po4Gg9RFTkKvsqP",
  "key36": "x77EDX1weQGVykrXtTKoqAnPjZcwmDCBba2ZDGAyCd6inb2QTPYDTWMsnCj4h1vBaaAFYPF4iU1syAZU64rfrcq",
  "key37": "3quYzakCXbEDqGqPFqho6Q23FdAHF3gPAhRYDXnGDt7z3EYY61W59aVUv8fxH7rmhqc6hwr688LthL4U5QCqvWTV",
  "key38": "rHL5mawCjAURm1GPuyQQrJQpVyDkiEkwHDfTW1k7QbjN8X5yiAmtV42UTLbPy5omHErqHZZJmzQPjFG7cR7NSzy",
  "key39": "2CrtEaQRAQ29Tgh6iyrSuMUyVmifs6jWemzDNWXS2rK6VFY77w88TEBvzAAMYvzgQULhCRhquBy5L1EdNzeQaFof"
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
