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
    "2CjdsgpjBy7qzZsiuPD9Mn8xnxswkwVD2NZBUbgrbKMfqbAKV7enkQQBBsRQpkX6v2VTq6joPxAPzBQk3MDb3HPP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2gGns7c3ej3JbisGucHjkC6FjB9HvnGhSdRvc7Qft66nW8i4TdKGqcKacSFsiFwQ5q7m1jTY6Z2a32qYadj3U1uY",
  "key1": "3ZPCbHJS3FyawtSJfdi63u1TXEfUBdVM9snvcHs3qLKNoR4NL7MfdWQsGuVW4vUo3RsEqZ8GeYs9Wbk2wQEAUidd",
  "key2": "u2PUtddvFbFXB9RWRSNd1oj8iXFsnCbW8iebqR8Ba3UVshwtT1bEaj4fbVRTYk2xWzySBAjMSevschUcLJuaeL8",
  "key3": "38DKhkhvnAkjvSFZP8i9qjcQyVNdPJHp2vMgGfVSQCfZM7v72fYGepH3CSNyPGjdmZzmVSmv5WHFwjZAuVdfsjFP",
  "key4": "1pW8BYb6GGmATxxMuSqTRayNcG3D7Hee1wYohEfZShSE9XWZnAKKMURvWMu8UqYwmtqNGTWevx2jMUbnvSP7kLU",
  "key5": "4hi4Ry7oTCs31GT9NDiK2acVDyCYduciSQ9tvVJcaFYuR9Gq3w7Lod6RUAdEn8gUF3DvEEV5SVCf8Gg1SdEP3Lep",
  "key6": "2hgkiQZp5mQrSDbr4HsXUMAKt9GVYkt9M9uASDKBqJ2JnAGiv3GTznA6SAPbQLDHzfhZxEgxLvbWAL75Uurw3eAv",
  "key7": "iQwJDnLwu5aTmRHBkC9u2EcujmQ1VTZHDGvpNGQmQHvMfuwDAKVpofL1BV3fJzojiRKyN3PSkc43AYzjWruyDKn",
  "key8": "3XtqKhhG9vXLZvHYWNRXT7u3uXcS7yxkC7ebCFTgpd791HwVyQH8Jn57p61kBLnsn55z9VdzFdPbBGS5QvHiY2Ji",
  "key9": "5kUgTuyy7ynUarqLf7w6QRize5xW43xzAFuRhceYfG42m6M9MXHBPH5YBtz3JCasaRFZbh4f74V9U3J3Ekpxzk7N",
  "key10": "3uukcmUCkMTERCuHie3fwdpqewRA586E2jEm6MCNQymy2cCoYkhjiYxCnC77MeZtRmdSeGjGJMVxzyrp9eDffcCK",
  "key11": "5aBKyyHLZ7Kvs3aopkRtuXUAam4j3R3v983XPLXa3jVhynF1PWDVWKcabf7Y71PWNX4WnaD62NwT6cdnaAuts9re",
  "key12": "4ohPuSnfJT1UU32GTKWHKiq6HHEUWhPw1H1ea2XX6wUZF7brdBuYuY9aSsu5kYUq85KarMCGoaAhQXQcTfFPUrBs",
  "key13": "48dFv7bWARdYNiGAnyhbqQxbGVsmseRy1Rw5ztvUyY96J4fjHHaqmBHuSUsjWsFCF1KoyyaLwEBmmgvUKWE6R883",
  "key14": "3subF2F2juHdLhX9XwiPJVqzLyzc5bGUxhNgwNKTLMpZXqQbZX5EP8E8BuBpeY9soYNDfDgC6wwQF22YTbkuKhTe",
  "key15": "3oYuJNH2FHy17mWWtbPDTQw2P1r2h2iQGDXDnUg2eUjTY5cn1ZjnKw1Ji9nWvN5NbPcu3oR4b1ABtu3M5vA25NFc",
  "key16": "2CJJfxSxzEJZK3iHyEboFBsAhC165xF2W8AMs4Z5w4bS2R5ApcjGi9dGDQMW3cE6EWYVrCCwD9sDCwh4JiruDoxo",
  "key17": "2EnBRfsbA3NnV1fuziqryEBcmmG5gekoYcJt7Nd5yXuhMHYCmsgFm3MahrtmRNrEs2Nqo8n5nSjsD8adANfkHWR7",
  "key18": "WgvnTwBk3dNEmMYk4CEmJ7wdpGNFifdzRMXs1KP3iaVyejfD2BDghCdEEAm1bYd1dy3QQ6Q2nfem2gcHnBbQzWe",
  "key19": "Xwdk6CGDLshQPQcj3iGPFY52WtBQkAdTPaNioSWytL9wxgnbPgwttWsMEFZ3SZJdUGuN1tjbMasJyhj1SvWxBBM",
  "key20": "A8g8KZmPDgT7CXk6Puep4fhYjhkneMoWSevdDGQHnzirKpbrapeVqjA9qKUWHeMGB5pgtXUrMyJ324GDRVLRGuX",
  "key21": "4Mt5RqkbVR3r5wBSHy8skCDKd9Egf8q8At9sQumXvg53gqMT5NEUuHLSapkr1NunkSZTGLcSJUVzn2Lg1rZKtskW",
  "key22": "4DiwF1VsehsXH3yAuF3yRuzycsyjFYrGgSD4QbVKaGQZJ3AGYP7cfr1xeHhv7Xv2pU6cpoaP6szBAtGsmyzvBzSY",
  "key23": "38ndsRAWQjaMkpvJnGdym63vXtdctXV1gz4VAoJvCh5x2TPLGDnMzUf99t5b3gXDMVLHDVSLDbToiDeZN1tiBQGw",
  "key24": "qEuiWxF2XsRU879yKGfHBRY5aajP1wRPAegmxWfyu1nLZYum3tMBRedamQSTk9wyogR9q33GVBFnWJK5KUe6QDo",
  "key25": "5YPFz7MJnmETLoYicjEgasvQrEurYSKkh9qq2jNy8tH6THw5G2a5saxCgsMJXKh8Mvr5qX2fwMa6aev2RgsRhWfa",
  "key26": "3TocSbysqVnaH9gdcMbozj4y34QPxTMdQR6DFZKZPuBuxjktaajHWqomxXENAHpTXwtt19ZDWvyasUWqCg6MAbsJ",
  "key27": "1KJrtQpDHYiuZ4XowPGt4MUG4ngzx1gDprV39EBbKU7NzTt3DXwbQK7HTv5khyLsmWFFaefLzVtvxn297PCNfJG",
  "key28": "cb6na76HsGa5PHxu4vB2864nwYhnpn4DjVttwuDey7SLgZejCyMugkrDw4tAsMdV1kmPQDUzLa93NbGT8fSTdRZ",
  "key29": "3W7N4WyQ4FvbKrkG5a8fpU672bYQWDfDJnUf2AmeEQhiY5gA9LfScagrfGyAUkpVwjKTXMiwzaqaKK4TyEKbofAW",
  "key30": "31SSfvA7vzA4myrQMwTLuPvDdojCbos2UeDGLFZu89JMbgz3BCd4hCA4m9i3XLFq5QnwbgQc1sTWL75Ar9yhmTts",
  "key31": "2CAjNEdGfzUMki4VV2zSuQKrJP3cWL8YnXgh6umWb3t7uSyT92ZkQjnKqkQcf5ES3qRb5bpVu5AN64Ywap6UWX4g",
  "key32": "2pC1M19k2TEutWaeXnjGwcHqaCdgCsQtgwYKiA293xKRnz1dBoC53uT1WgHP9wcn6wapCRdv3hMDXKKnDFjonFBj",
  "key33": "444ZPb5ujj2wpHYs8jBGPyusH4w9QzZ7pveBnWiztc2QJ4Few8hBCvw6g2jtXpGGSczZvfTXXnGLyNBUuCqzNUz6",
  "key34": "3DT4BwvHD1Z2bwhsBXzkHBTcjm2KGqZkkPirbhX863N8SZsqEo8QwjSJcLEL4faQPmPZs4VWPbSotmxWSg1c1e6s",
  "key35": "4qaiqDYLAkrqScYXrjbKPEtZZKLAWJbTSgKBfEsUZC1sP5Rw1bNff4YnyayWXXq7MCiTL3xFoZaK4ep2wQKT4vAo",
  "key36": "4cV2uFmurXkd9zCGreJczyrXs8ZeTTuNp2NVsoayHW3wBiPgzEkzqHruAhuevsrkuMFkvpx3sfPFkiYXiv8tnGj1",
  "key37": "N2S7VTKYmUyHymQEfrsK7gfTPg6RgSsiUKti2H7omxHBKNaqeaLFRFm89bX9p9wVU56LcrTNhByPsm4tHFXJWVU"
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
