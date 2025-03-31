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
    "5MDdaJKBDaNdZthXT2tenwhE2qjf5tX8uSdUvZU2qACrcaCdcEwE4Y227rm5LFSfn3biC2xq7YgWvpFK2NK4XrxK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2YCBXrg1nfzpBFZ8T1ewDFy96cQiJbYFJVg4rr8cM7hLWQc4YFiobNBtGgg1nrpShyANqdqLawFjMoAh2yYSEXgp",
  "key1": "3R4bwJ2Mev4wHTNJfCfxuSkcxj3p35ociZYJDY1q6Skoxyv1fYn2bzK8QqgwvouWmnVJeax74EM94J3mE7WMH6PT",
  "key2": "5kTpDEhdoWQJuFqrCKmuDwLMVRzUf8kbT3PMpyKydQC1Q2TzTqfTCWbnAM8PtzZC4n6iU9zTfpd4XJSv7iKpEoe2",
  "key3": "3WBY3vmkppqzvLHDNQofAuedixoXEWnRvrj98M4SaxHLXdqJi49SMh6VZKWwWVkZhMFoxuaiJDUS2vtxBASwdf14",
  "key4": "2PZtcmzEcYETmFY5MDcZHi4aNf5bGAXXh1LJo79A3jGTkH9r47JfxcTguYYrG9m6vFifFPEEd8w4eEVbLP7zbm1z",
  "key5": "4M4ePJ6Jh1GcoKXanFMqhR676zxMGx8SePeqWYcujiRbWN8DiLAoDMpek9Qgi7Zei8LtxKtaS44bjZ58ieiGBRug",
  "key6": "52U9meudPAMTAPbcA3mKT69enj9719jik6ibcFw7pJoUf5xAwBSwuTacNpq4Qo9kPHzYuMiDgom3edJt9P9NyQz8",
  "key7": "xNBEq3XP4im3LkhtRghMgu7upVjjx6c66fNFLqnwMwasndydTbm4BU2prbwHtXdJvXrgLkEeFvM35fYuAsScpyH",
  "key8": "2QPakjwULKwqomqZkRbQYADKdsx9okz6dpBeaBF3PhTaVHF6nBuRPLZCeocMjd2CyLk98ZKykvcTjHGkx8iMQjr6",
  "key9": "4uVSiPXRKZwSYFfNthL3oL9Luno5aPcePG4VJY9aX7KLchQxt2sawehbq8b3BkUpNSLjhQ1LpF5ibeVHatB2S41m",
  "key10": "4jvWsaiViFHt311LWxM6e8hrQWkBXdoRv13DMJ4gCAAqCCT321vwGYvp3NRrxqset91rdXKHHz7Gz3b6PaURFMox",
  "key11": "3ppbrKUjeqnMSrVW4tzNDBSYdgvc4Hs5ese5YXgaA2of7jZmrdvLSExUBieWKyEEqEAZrpLQC2LygZntKjwxZCYv",
  "key12": "579yysGXnbLMJaNgDB3LyCJQUwGjLAqbEFE3DhgLUihxfmakgWcqutw7ARyw77CHWejH5xvvgvh45FCjaDrxN6gp",
  "key13": "4XJtaKmZ5imU8bV19gVWNXds4gg1nHnBYG34G4bb6pCETSJVxbvmKXwaMB5YC2t9FuBJMQBVCFaPqxBeAWeffVFN",
  "key14": "3um9tKafsTVKJRTvDr1EgR4VGviYN18Hf5whJMCa7zL1CBWyY3fDE3QqboapR44CkdSp1cr4uZCNagvnRHuLbf8Q",
  "key15": "3kKMFecsy2Fuw32Szm3E1YRAUAV3PqoX67CV4b2mAymtyeyZuwGPUcNoPHhq9qnZGxTgAXC2qhURghbvmFFxeWD8",
  "key16": "4444dk4DuzakwjunjUU7SgyX5BvthHNkwVUZtBkcuuPMxCGFvRoRitivFpATDBvSmU5Jvwqi5s5Wo41ftzefjqAE",
  "key17": "5nrbaEcCcbgaYPrYhwrzebwXKYWaHt53BfsELQAWSwWXtusEsVX5aqqA4vzKBVyVCcsxYNDJR7phedh5im2n8ciy",
  "key18": "2ZTPv5xDoBDvr9mH63m1Pya5kGCXsXdwpwpUz1cX1Ehz1ziN9qmvGY19ZUuswMExYrXMNZcqsYDnYpGXfGbN1jaH",
  "key19": "4GK74LHYf2Tq3D3i8PSeHt5pQGQviQE69hAbQg4xyucFG9kgswCt7hS8UeY7nBS8AW7tU4d44Eun26NqeLbuCjM3",
  "key20": "5eQ5ze8AV6PZw44rgbYpZAYUCDKKicKEyMYd2ecgUZNgDerv1NhrMAYD6XGRzoZgskdXXW38wjdcZQiDFuo6mrZ2",
  "key21": "4xHhpnyMJYNvDrqMckKKqQb6zzBR4jHJAz5TK3JL5136rurwpQaYxk6Q4FEAHv24rNJpCyetyoz7YZ7d7pShN4CZ",
  "key22": "4KhBYakeWAazLiHL4bRZchDvMSCDUibeYLoAn7gdmTaHvWqNoTk8VVqwiYcJRPDjPQtBKYYsw2kpbPmwMCa2GDQo",
  "key23": "8hJhhucQ9buMBWTjoxtTsi6aoWtrFeRErZRmX37ZnkgfzBb1Wevx7BXHZfsyBEasdNFEbdqKzWmXwdK22nN544G",
  "key24": "5SGZ8HdkDbZjYthGwSAgojCqCW2DuUBpy93mdrzkJQpv57fJYpfiumZFuvrCrNdWpjcdXTmqm7rXhD7c1tYsnCaV",
  "key25": "4oKzrTu2kf16Y2tuXiKmDXFCwBut1JF8y6TmebieHYgzuAqyZcSHWcbgB6ptsco9tU5yuKMKRcUUAS9pPnDQBNhn",
  "key26": "2oE69E63tAwe3E5NeRCNPXDkdMVtYuCqbJBt8fgTDKHj6GEeKmP9YnQD8QYFaEwHYVyGbNrkp829SSBoN9ANnXw1",
  "key27": "4dj1tuqzqjxaWdFQGDNQyC31Y8jnG5aj9iiETR7YWAFyYqXY21kNnGbAZAzh9wq2mcLgK483rNWF3mCKQtXA123C",
  "key28": "5rBDg66QhYF2CGx78kijua6xmMcSWJWyNfFJAdfwqg6PRF6sZeqJuc5eMixJDMtCzM8Usjza6SfFvia63r9bQjdQ",
  "key29": "2N4YiUmK1s8NpaiJZaS2JKjjn4pNMz6V1ArdSQdJeqSzzC7JMxquQ84q2dhrph5bp5anuGZhb7Ng9GV5RUjkLEdY",
  "key30": "2D7purT3fA1KXzp5t8ybRZAxqH5iTev4VMWLxcbiNpP5xW6ZiLGhT8gU2yry8PnNwXZNzt9ntcP3iij7RZfsXYPa",
  "key31": "2eiWV7LCbz5RxeG4tStQgpYbratRdZVbDbYHnVVJrjfrqWigfMpB8ebTwj9N31Sfnz6EykbRv9iaTg9ah5RhjcWq",
  "key32": "2izgqewGhx1BpeozGQPkrAmCvnSRyiEuma3L1P7VVUe9FCpJu1zJajeozTJDK7SyinriVuEsucioFUdgmUEyh3CM",
  "key33": "VsmQAJdDXXQtU73cNHb27nPfFWss6XXVmuTk3r2bYjt7PTEJoxiCYFsgy6CjWbE6FT2bLQYBREftSJFoagYa6gg",
  "key34": "3Ayb4EUpeCitRw6q5AAi7wvGWASCzfvb2NFmaRJ8UVzau7jgyBt5ieZb1gWtsEukZDc82caAVSZLhT2qLLDp1MAw",
  "key35": "5zuNGTyQpELzPoPak1DexN5bMPcYtvFMf51uW9PFP2eMynSJt1faCcGG45vd5zXnMFUMnTCmCuV1ZYyfhPvyg18T",
  "key36": "4r3RWj43KkGfeJrPYgjtGPA5TDBxXE7RUSwTMSGFX1oyU27EPESWcBtigK5ghsg2tvtiecTN78LPrqdpBmdhpuUW",
  "key37": "4wCFtcfy2Zq5kx8wkrmpzQYJVH2K3Rok4fTw9Kf4BguNgW2bEGKTBVSnw2rBiQF7mxh2dWgYhUeAkVen78vkbnGE",
  "key38": "VbLbRT3KYibmh1v1L4VdXMHZtLD2xX6rKaR5bx8Vg5k5jn8dF12X5m8xfqW7R1fku8ep9ZYXDdaPSCPx6HJFtmz",
  "key39": "5owGLWYvZPePwhQSDYVcTmAUzKuBV2xa4v5cHCZEaU4Sdk2wyULUQ4QsuHWQzyrHGkGJ5mjAzRWAKEVDz8om9j11",
  "key40": "57mHPBpZFDZ9ych7jZTe1FmS59KqKifapKGqGqgSTPLRcHXewZmKnwMowmkNqyYxoD7MFW8SixZQXrQ8xuxta7fw",
  "key41": "4v3wKCSGbk79LcwpN7L8KRE4KhvSnn6vSgRuEwUzH3XdHKvmqLsRKVPGfRocdBboRQaANvBbSQbpgoRCkqJZz7zJ",
  "key42": "2LrmaLJsdckSq8Aus6yqEJXzSgtkdeLGqXeuQHtw8jhLNSs733ziyY14cvEVjSvXXQJ4Ayd2mpajkdGzni3dYUJC",
  "key43": "5o1c2ymKXT1ProCFnqMjwH78HE5g8kFEiBr8bKQJhHF64zfMS2ss9WgRi3nPQMoKUxZF7m3K85utGqx1Mt2sMqi1"
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
