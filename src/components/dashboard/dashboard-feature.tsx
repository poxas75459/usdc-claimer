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
    "4VkTUE3u8NQjQgMmE4WtGgfPvpJioaTQV2tQM6kooDv91Zq4qQXdS1fb25V1A5rL3VTnhnfivfhhJpH9pH4UxPwK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4z98BbQtrbCvktWoVisG6aUPXgMBKLkePPa1uMyAdpFSyAKoVjQzueM8BzSFRmHf78kgpXQgLFEDVJtUsT19Xbjq",
  "key1": "3dgHwnfaMaGMXbBJfzZcCJBrYFH6CYUqqyScfmNS5UQ4kSbJpphHWEbAC6nAHvgTQWbTJ1be9zcArBt517jSxayV",
  "key2": "RgVvKTXF9eWvvAkDfeGdXVyiCcspZXvqSED7A3uvLS6URhNdXnBr4ChJt5obUpbWWtgJzWiR8ES4S286PUff46p",
  "key3": "3TFt6hJeps937cZm1tN6MEt8zR7x2s3tBeiMGkUCCXiBRALm2WUpNM8avbqaj2vu1iZ2WRXtHQTBwshVZkjaCefB",
  "key4": "ZmDyxNfPq5vPQqe9fDW6nFhdTtHmPtEVyfCuDpPKkmXGgYy2joSLErphXDJ1kpWKwt1BzmuRSs5Mza7i9H5Krib",
  "key5": "4FeUMKqkLXndUHoucfzmq4JHFeW1q3A5Coa2qkKoQw1NUufjGiQNPnXbi2dm1C9LcdqauMwjuC5vzRPLs5QsQA74",
  "key6": "5cYpLrA5nsjvcwYdckfp8YPC6VWPJMC1Z5KwfkwqdMZ81NEitNZ7pH43iLChPECqPsExN6mY3f8HNCiKantkKF3t",
  "key7": "2MEajJ1RWzhkJaVL6gwm4WL1Fq6p5GUX5UjfmayKg32EUxRrAA8U7q3Rpaxy4r5389FqMabZMN4vFPLyvxeCuMXi",
  "key8": "2TwJqsmtjuHpdtcpstfgioeyx3AVakxp7Cia5WhHk7fWF1f5s7nYqQ2vDPP89quAmPg8g6fhFZV3J45i9KxJaWyh",
  "key9": "EknzhzUJz6snobDLiZZL319Pfyp5UAqAVArU6t8QNimruUrS48BswttoJKtssmDZLmVwJcg32sKbgNPrRvEUpZU",
  "key10": "5cK1dkHH6E3Un4p6vnQ2hauC9PxJvg9v67FKDvjUgjCH9z6GFiwCyFzcTxksRRDkAN5tRf8LJMkCzEAw3NZnzTJD",
  "key11": "3p1P2FuS9pJYjSY8t1gqN8t8onzM3Yof3PBhfdFAhqVD1ZEo1jWXXvH55jgapk6AGvbyBBJkni4Hx5uYyYfSvvNX",
  "key12": "7ig2pwPbPKEJwxQd1Fr4Ws3ce5Bmecqh1PC6h6XT6pzBtR5R11HTTgcS6WSeLkaNYUT7oR28SwaQEGvrmf4Cx5F",
  "key13": "4UuJJaZ9Sww2MWgSe5p78SZ18oaXzuecrDdasGrAFMLDqoxxaDbPXTQHja8xEzvKunVEnBiwQB1M7tSZgJv5r446",
  "key14": "2nEegHcSGLHQVTSztdv36N6mH4jRvAeKC8rC557yxyk7m3TCfeGEuoniAb3s65BUAUFVYfB1aeV8qyLwJKsGw1u6",
  "key15": "5LzrWMjSMtSiLpHZW8F7vgtxiWKwJgDtgdJaYDHXmbjL6kbjTvuy3u32jALMxHsApWwbjtq7Vv5MZSpZQjkFSSou",
  "key16": "2Jreq8CoruQXzMiDx8qey6aUc3HnaA6eEkd9Efh8L2voVQH5dTvpNw1pcUpvFYkvbePzieoPqEF5c9yPZ9SUEvyd",
  "key17": "2QK6ZtLssMgv2s2XBYntpQ9qXra4eFM6vZg8yEhFnSok6HFoLiYiYfJcy8Uu3rDywPuR6nmQ6CTjvM1YBcGeutP7",
  "key18": "cVPwwkwqX19SBXY5ETy6n2zH8jBBkMM4aH965K3cWcroXG74NePTsgHFAtzwaJQdJTK6XVawg4pBMQTx2aRZS16",
  "key19": "63W1QpWm2rSHXjeEjjj2BKCg5Q6Jq74X884zRUZSfNCzREAGYhaPwTqeK6sjRjAfxX3ux8TTSn7qbyTTjW8fv694",
  "key20": "4oSyKrFquNLCbpsJCYFCcYVLnhm6MrgYrE6c61b98d4eRV3bPvygwj1jWLJ5bazzWLEtWZaNYN4JFoutDHWxGPv3",
  "key21": "3oKTKVwmwDsnt4eKJ35vPVqhWUrgMsvUBcBPCJ6tPNvoRCZkkD5EtxmTB72YeFSZUYn7jQJYUosrwvCy5tybirgq",
  "key22": "5wcWUxRJvi7gG79woqnkPpfzspeSrcQ4coLmbH4qpkmGksFNuxyf3z5uddKCJ3GmkayfDsXmMevLnyT5bvF7NAiH",
  "key23": "2PCvC6phxSovpyHRUZebcoDH7GkRBjejumRPxcSXjm3k2FeSnqEqRqY97wJ7YoLcgWTFC42wVg6RSKb4DaSrffQN",
  "key24": "5si71NQD6TZYW6kg21W16cabo1BaYdVFdR896U8jTitQFmefJMucmnHc8DC3SKQjMJ3hkBj8kjJsNMJxEXeepy8Q",
  "key25": "4XhR7zXGgv4yQcsCk1fSun7e8dW778vxujFCmt8xreBharQH76af9ntFqfMvtZyf3yA6omBqVD8iiecUynquznNr",
  "key26": "wQFYjzshk2imkxerb9VZTFQ96C3y6GKsUXwsEKJsRrZUareLDJ6PzWKNUkCFRGfH4N5fWYrezJ1X2dbGdNeXwgi",
  "key27": "4YsZnJ2Me2DannLTRcxj2zWuu9opjxEe9CHQjAzWmMMW8M1DyTCWBvVhuuS2smiGJDqKnQ9BnJR9to9A1o3ZiQk4",
  "key28": "24wuPaBp86oUEaLg8sV179AmBLF1o6pPkGFBp3dcwK5G4kBfCpwj75KHoHxehvzajAREzxgwfBw5Sp1XeXA1k8u3",
  "key29": "4v8AAZ862LcMqJ4zcxwydHXmTAbAnQbwQfHALWsRGPMYDhUtBECjZGgdwTTQMtwwr1vk8sG7cjPi8sQ3v13jPwx6",
  "key30": "3U4H9FzD8Sh89Mb8CQSqZkeijXfAidt3QWBepSkgqtnRc9aN59sjiAnsLDknfJqdHPiW9YUELdka19m1J6uHXT9r",
  "key31": "3rzU8AaHMm994m4Xf3xsscDs6B99SKFP3iAwtVtE1T7AYKMdg4Ax1YHmZKKJKygd6Q52C3nEJCLxnawbc7sT7o8h",
  "key32": "jYiWuCmr2dxkS4wUX8FeTmVVWRBnmuuM9V1PoHRVT5XNEoETSczWPoL62U2U9ArcAQ1eAyRjHZEeJvjTby7ewML",
  "key33": "5K3WnnscMXuTZqRGWEy7ZCahuarKEn72gmgqBZZXk1wbrAzBryqFEeWwCXqd8KGBgUnTP27TBjdFUPBwRHkFrXu1",
  "key34": "2w4uXWcZMd1d9PyMRuD5rHPWuwYbcEKneYa52MHgsqoBh21y8DpChib3Yq5CEzsjHca7bXGN2A699FPFA8Xih8Bh",
  "key35": "647jnfuWYx1UrYxc59otHgKEyTPxfw4CpUjzpCAh1cTCwdmciaGigvchQ8KpuPgL4Hmj1wnuTYJ49Y6zgN4Gr4AF",
  "key36": "51SfjzQCeTUMUj2f7EfGJGnPCY2HhpodB8fdi45JP81JWyMQfCfRCta3g4ZbnEMqrf7XVZDVDd1DQvqTEXVjJNCs",
  "key37": "5Fsgw72kgR4E31HLnUDNXc6brSJU792ruX9tE4fNbFm9rmdvuurm7JLXjGDZgn4x65GSKsKY4CcP2dBXKWT2M6H1",
  "key38": "97wb1GhaC8RkcB5JekbH7ACSkBRA7mf2xnf51ZfpoekHaUAEj76QdBdT3iH1UCBxqSifNo8YFNii5zWucAiwdQM",
  "key39": "22x9pEv8aBuAbQpuP5qhXXmDjC8UUKWRU1JyW5cTsUFrvsS324UtweeKqzHdG31QLDfN6hk51zZbfSqmNopbYNw8",
  "key40": "6HtuLnFPpfmvfM9sk3nGkanWnqSJtxwn87mVaxSR7zXZyFoWjYrapvdDXVp3Yd3b1HmzasNWWpMYdQiZUc4D6kQ",
  "key41": "4ba1fvGFzZCxM1TGeqvyDoQL2iSeLEzHoH37WoPceMtLHN8zHMAu9A9x8kEtjMq5GACUsA4mE7fss8KZwDb9RJhW",
  "key42": "2PD7uzJYK778WgDEQ3s2uDtp2fkSLB5pFrKoYhUN5YNM2ezUtgqU8wkpxpe6SCJ22yKPVkXJedpy6bh4XUievVap",
  "key43": "4KdFx4Uu3ckNaoE6wt66To4eCNhSarf8oiv5cpmfoCgBm8jjAJttQ9L9iCtxUNgfns1fpLGnHTYTVBo1MRXF1X1R",
  "key44": "uxuMh2yRr66M7KiJv5VTKa48JAZukN9q3eFPingQcMC6QEkZdxyVtFemoSKfBZGc3J3P7GWYPHaBgKmCR5Cuw9g"
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
