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
    "GbP3uFEEZZhL7138rUy1JQgoJjyDgtNWS1X9CmjSyr7hu8VBixaLJLVLpw6hVHmbt5nnGMyf5Er1s9GdLrECr6v"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5BkkJibaKWpQriACoyCFEkx4Rc7RmTA9Ega9GQSk8koWeFc18jxyJCJ9UNCy3s2SWs1M6cVuQzi1xdBueJ33MJng",
  "key1": "3pBjwySBoy8eXsXthsmjNvY1cdFCsmzLy5opTEKsUSMNAyVjfdHACk3igUrBYCNY63o4yGuEM6mfCXdwf2tbHoDJ",
  "key2": "3BU79qw9j75qYcC56HQromN3oF582cmyHNqLQnakASje7XiwfKP82VeFudhW2qjT2kX6TiFai8mX42HjBzdHvjg6",
  "key3": "5pfaQYdYMpZbQAC9noeGjjB3JGTM4G5Znp1Py82ChmQ68jghNGy29w7q7mi3DgabCYScvCd3LVWLdwV2SLcWa3mW",
  "key4": "KkL4r8QsSouoYHbUNkd1YddWwey2EChWAUs5yX8Fn9tAPxSDDekissUkHJ3k2GYGbp9ZSx8FRnYLZCP3g3Wg8cM",
  "key5": "419bGU92FzStxwbmZBZ4jgYpE6G3GhzNw9KZUiQN3gYCfdUXguG6iBU9XsZXfkLpHKUmRTFetDPCvFi1rmtQhXkm",
  "key6": "3wXws3kW5i3P6HzUQuNjpN7yvo1jXsagHeb2oSG6wZVUbQYBgGGGjXzk7jH2ahNGXFgmVmBgZDAdccai2ypkW5cE",
  "key7": "zXpESu6hsLXRJC8wub36WadDUkXCtZdjJuxqEy7pUADmKZd8pEbsz54f8xQDj8KAK6Ki9XxupQkDSAaR5R4vw8D",
  "key8": "H619E9Z9YDq8TSiTq3vvVqfsk8Y62wPcHoSdFHxgshsE9riBAcchHmS5iiZSYSedKpNDHcd1XfgZPFB2mbE3fS8",
  "key9": "4uR76hmwZM3zMVNhAka9EfJy4YBv2ga9cYQsUETCi7Q6HF4fguhjuNDhbgzfznfypPAou2NRfseGL3mXS5sSJV2u",
  "key10": "44D3Ho4xFtjX8w15hpbAK4jSc5ZUwi8VbsccGiMuaD5w432ECZYzVM2XCYLPsPmor5ipAcwV2qubFW8QYRWVgbw8",
  "key11": "5YKJLrsxqGHQz6GnR8tSy1SMrsYJ7Ht95YzQsTwNcoT83im4cH1qzqcQoTfQNoZTU6vtHq1Jcq2H4pchF92ddW6Y",
  "key12": "5Wsiwra2iehEZiCsKqdh59wocu6AYCNvTiSnseBAEqXYNmWCGXX7wKNbqPPoBTJidhrAXM88LadiwpqbHt6pWRbd",
  "key13": "Ju6HTHMqShMDfeDr9wyeAJ7h5LChoQtHxb5QyHraWt17UZGr8MiLpPZyXVfFXd54pMqZpaihhG2DqqQYf2bSCRA",
  "key14": "2PBnNBNhALjXnZizjjHo3a1LbkPJigYqFcKPbTRTs4nubYpoN7uPeBKUdaGzjMxZRckpxb1JyL2X6i9MEiiD9pxG",
  "key15": "QKZLxNgGtesNJDaqUWjmfEWhYuAx2j5wA7BYNERybmquWJ4LVXrfBrsR64kGwsLWQr1JFqbDktLFsG8N7je1aMT",
  "key16": "5xqW5Eibs72Vnkp9aquTWEMyQRQitPwjRVTdF1GwjioqiFkw4oj4nRB2TUN2WtBgdqnASJ2HsB5q4uSeKB31r5aM",
  "key17": "2kWc3eKZz1ofA5nkbz2PSzjZyVDikme32hkiL4TZHbjR3ZPkBFrBKx5A8Tw6gDzmBuhcusTcAxpPMsf2ErDa2C5j",
  "key18": "5rZLjqH3jHR783o3pWY15PkA53eX3PAdcfJ5z8s5DUxTaFX4TznXthLXKBQxwWgWmskAa9h8AEaHbbnJ1EQuAPdN",
  "key19": "33iqEAR9TJYWvKdwk5P2FmfAQ95y24kevnuqSrc7YokoCsXVkn7ChVKFSYUPNXaTEWbnc8j3K2LTy4wwJhM9WLm",
  "key20": "4ncYDSSz2PsAzHPgbawMDPegreBqyZmGENFt9ywFtGsJBJ1tTiEFvrCFsGAH7LX8JvxqAF9Tv5HA7Nf87QfDon7N",
  "key21": "5fV9MPFBwYLpeJvWjGPXxk7cnXTYABTSq42DFH6Jm2JcKc6mLd3yJe2t9Xd4TwaPfoJS2tR6KHgHe9vWjhqK4q5H",
  "key22": "2NiMW6vWvXh3Y9GunqxAsMFe7MVFtdzcDaY2TK5mmk74c3nnkgEZ8iMUpzVbGdbLMoqZD48mE5QTuYrTMZVQPzHD",
  "key23": "s3od2KCYZVXbBpPoug4qhddwCBcY6F2NwpwWLW3JHP1eWF1kK3wfUme9cGhYVkgFKESFniG2ePnjfFfF4Zz38Ny",
  "key24": "4W9mdYowvY8DDKHL5SFCYGhVKaLVYuVkxrAeyqrEtFwhby3fc3wDEC64zgtTv88aqFRALSpboBr4rfrwv1KSivqV",
  "key25": "5QRQMZ3bKm5AEU7vu8HqauhwdnjPHpbQN7St51xiDzNMjfJEgGj9p7DLK35u1BYfHhRkDGUqQV2ghyeYWqwUEgLs",
  "key26": "4oEXN47CmzbZad9Ay8hxUmvS9F2LTAQ9kJgvHZpy2KWk7Prk62R5Ex6m2SQYTyezjcHNsNodCdSp17W9Tpvhsy3v",
  "key27": "2twcdyXT4mRCFFvgqHzEZmGUaEFE7Eng3HTBqy558wUcaSy5HKxf6H3eY5nTu1KwSyHNygs3mHUkeqcbUVAY4dqs",
  "key28": "Y6Ld2EUVdhPmf1FYvVZugvibGWGaHym7v1cbBcmy2zWyKLCokYdoxReEnXozdG5LwdAh41JcXPiGPrzKP43ud4c",
  "key29": "52Qys51uQeAs9yfhdaMKQBNtPqcaanh6xM2vBb42QNYQWgSBvt3F7whB5BKG76tF6Cb9YNK3bkfPqnpuG6edVK3e",
  "key30": "2YCx1XcLkgW8eynRAKtAHJEXZ9AnXHfheXfu7bpEb4mar3u7gh3ipAvjjuJ4wnpc1wNYEEfNLo2kdqjD1UyNaWWw",
  "key31": "3F3ei8DnU5vPSj4f4MkbYNSHGJDZkUHFsGrcYZYV4tBAr5Tq2FF8pPB591cdmxAmK9Hi1rwLZViCyJnQWAb1VTh4",
  "key32": "5W4JDPgWqbAzENzXqxxHGfeAmV8L3Px1En6M8Dsvvcq11sQGFxwCw2MFSvRdYZHPDoQn47vCybLz7PQqMmRyJj4s",
  "key33": "2NjMkaNweTuEsitLKGVxeERj6fSVW9irHpoCsmtFYyMAqiNGSEo82xkSikpk82vtgZaH8gZdT2s38hzmGqXni1oy",
  "key34": "3JMqrXm63xmAKRMoAowhxGKVHpCvi85eQ9cnagTAfZaL48KSNxMUpnDTqT8njBNNA7yVJjfB8nq2WvfgRU5Z8ZxW",
  "key35": "4tCfgLC2C1Fw87bYpUaZXsw7CDuwo3FX7LbxhUUxZoHB91j15iguYbCygofuWRKoLPBk381EekRjWwDLsAqqWqFr",
  "key36": "2KLrGZ8gHFkthDBPf6jsGsuvutsVet3t3hE9GF9VkpsKrwMPx1cK6B7QFQtdQUpLN5iqzsRV4meB6Bp9ZPTfY9cx",
  "key37": "3aAfYXbuBxMfV8U9HqxkUJ6R8yVAvKnoZiaoExfiFweRQW3yi2Vt6g2aQYkU8F9ME8Pmc2ggBdvGv26UAedpzQKi",
  "key38": "4BAMXpfXaY5uXJdAtHhC6u5KpHwoehwbzEsCahmJGVDvd6yCUCh8wvTTB2DRoTuFkpdmBxZ5iy735DZ2AfZg2yA5",
  "key39": "5naf5CNTLRvbE97M3jdD27qZkKnMRsrrXyZ17XaHYoztoWvAyuVxgmcHV4hKNozJWqjfUzprhQz4mcvus7JG9rYK",
  "key40": "2ZqWe1TfTpua4CR8fU8omVDZtQs9ZdgXrSgM5yLwYxevdAyrt3CE1uxDb12xVgUGy8YEbS82riHwBJiHGCQfkgTQ",
  "key41": "Nqkp2sPiPE2Jp4qfwdGxHJzsRPnB2NjfhdR1bv6yLzsHXWHpKRDrGkBCQjmthPJMv5XVMSBUvoL8RRkYKJoC6MB"
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
