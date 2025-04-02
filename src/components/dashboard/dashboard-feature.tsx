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
    "4T4t7HtvaypsNUPFPGcKyQAqYCYKmwjRq5h9dpdDz4verFT7MhqwFjBrP6nkuRpccPv5pyhZJbSbrvbRorvHY6qe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "VpywNYrXDcEpjiq27UJscXvrZvf5ey5TRUx4ynkpWcWAG9Hxo3TBYuoyeDiJgKqhTt6MkvXoHNn4qABsumdvWYj",
  "key1": "3r6unU2utLT61sUF29YEAYWad1C7MJdrUE2eow3FPjP7TDNFTgMBdhSN5gPgEdahawb2Hd8APc4KfU7gftc2WZg1",
  "key2": "4N2DSRgn2sEpvUyan9ZEDLPUFdd8j5TYmUkXQXEx1CCD86o3vcEsjqyvVmHiknZqyMAYLQ5NnDUjq2nhR4cJQUoj",
  "key3": "3DM2eGXHvhf5BEPUrSR64DxKuSr2KEbkpjUK3XNAoMw7K8fxH7HcPCRb8uaZAhB9cC3VP1tyJ3gLiFTgYXkvzHod",
  "key4": "54QawGkUtUMwyNwv7vkQo9oS8vincSZ9AWQZs58gkP9Kx7eAaNvzhRhpUpySXFhFN2WdjLhaiqKCWNTtYLsdgpkj",
  "key5": "3qj3w9fRq6bkZpzZ1JgmgQtGEfupiFoMKiQuF613p65j5iEkFFAspVeoupYw6cbHhYpar2d57cpgPP7N13NnKDFJ",
  "key6": "3YtFbNWBmZXYTE3kqwFEoz58XoLXgjf3wKm836JzGGXRBEeuoNc52fTTrDbRRJgnKadfUBJYnyjMbf1ATybQkhhn",
  "key7": "8LC8CdyGS5JLt1cjiSyetZLDjJx3iDc21CqKULYcetSy4MLTvjj3psNYmSP5htyEhxtKjJn4xkGjhLYDy1c3CS2",
  "key8": "4PoUmzpFLoxjXm3G6LgeUZsk5UJNrcbFj8bZtZ1Tmukme9JLgsCsVHB942z5nVHvA2BwAdqWQbBRdnS7vqfBWUzZ",
  "key9": "32x6S5XrcwaronMJpXSsskby2PF9q92Ui3V9T5XMZyJeFxVAYVwRNZi1MGRr3RwjNiPrTiQqHN44ydjjkMV3zoNN",
  "key10": "VwpacHJb5wqovquSCcmZ2dBEFRK1eKZCGpgSSXMnsXcuk4GRRbMr3R89sbU6htEiUxGqcureHsahab8MVR7G5Cj",
  "key11": "3mF4L7Mird4MTsUSjaVqBTtnusUJhaopX4fPNkzMw89wG83ygkcEUtAaTNNAtPHBL3QkvSpiY7bJPPvRu4mjckCa",
  "key12": "4DW2HD7uRKWCehjNMaJXWLWJ4ZF2j4CBSLPdPotNEaQwEfTAdW6A9YBXr1ckhLBJLNHLNtCSXwt6vBmgcb4V6oCG",
  "key13": "5kzxy5htMqNYoXhEvtxbmUYb7jfFERHreG9ocwXPnCVK7rpQnpBFuZLLxJAqJHu4f6h5SN1YD6yuswrHZuKeVia4",
  "key14": "2KthsYZXv4CxcqKLtqtp15yyLAKyz5EPxpnaG4Ro1sxVBd4ZEM4RfgQ2wwWUoButzzFkvcSRf5jHy6HByPLEovYv",
  "key15": "3eSug5BvuNR4Pc4y28JWP9q983ppDkgn6hupCVtnb1gg2FCaTRKHzZyaFa9SS86Es26US57FxwZiTKF6LcpCFWMA",
  "key16": "3L3d4iRBpAkSW3XVB6BnozKDWUAHkqBcFKRvDqm87452Xzm7nTkJQHubDWSPm7PJt2LTB7gFJ2toxQpMTjkpWUtA",
  "key17": "2RMhoJLdv1ZVJxizYpUTiik7xGavULbULaFJzqEZdyEJ4vqHMSi65WvM7B9RWjuggZZ58RwTw4PsiwTDeT6o8hHD",
  "key18": "8JQKGDw7e2V6Jd7w2pZ2kZUcYCXoqf4gNU8jnZxXS8i5pEEH59XknMYf27CusGUSuCqLEsnZntyzP6BXp4hg3z5",
  "key19": "29H2XVjSTtYSV8LnMpaymZwySSjp9ocTLKVVoe468noKDwfTTiG8Yg4Sx3VNfaazroaQ8uZrrg3ieEaqaeSkGoMj",
  "key20": "3hHk6qFNbXjS8vuvBBDWGD1Q2wnYhfJ8C1EmxQM5fbvJDz632ypogLkV37hpzw8XW2GvMqrDfvKZNH6xmt5tHG7V",
  "key21": "r8e3NtkhbC3PMMoYVKrsTzoJv5feLpWdQdJCkcoEMziDLVU2up8vpqjqaEv1u9HqwGqbJAWduqg5HhMs8L95D9j",
  "key22": "61Qtw6FFrZxPBmoaHBQxetB58u8JwBmBwNsLnnyPezmMTmyifPAjngTtEg4a46svrzny5mJ4UR7wbQJSNTjKW6Ww",
  "key23": "4tk4aGzRtmP1zHA79Sm62YwvA8XsxuUjEXcuxqMMGQcTNo5Q6pQhAxFcD27AmFkoqrN8u4JTiAWXjbcpFYKjQce6",
  "key24": "2KNw1EyT6dMhRZTHHm3Fh6Tjb5qV2ACrdjfKvw5Far58TdvCao4NXeEZjD7FmvNJcyMuyJYdTDFKprQcV8mH6oHr",
  "key25": "2duKGL5UzobMjSxPBe88Y9Eh2pH5WMGGFMkC8MZoEhy988WDeurkEgT15zH9VTpvCLWczMf5BVcrZvgwCd48Hqkv",
  "key26": "4RF3c5qbAbWcWGQKhyAsm6pPaR8prdYJwNo49caZ2ygzNQdYgCZ3ZPfpyP5DqvsY17YHiqvAip3Qqp8L5gNad6Zu",
  "key27": "64fHESpwZ31xVSWrwf73EtqktWxKF8Lvpwh5c5owfktFWUFQQDyfm3Kh68wXV1yWbWGbN1b33AyhttZn7V9d2rr9",
  "key28": "5KDATjbWMgxGNK2MuRXRLuknzkVZwRX7UppYz73UwMuQgWWcoo6wzvUPBTqarpp4xvm8wgNXBnpzZfFgbjUCMFr1",
  "key29": "3AvfsrUnRce6RtHBEBp7EfgKy6WFyv3efBE28d6VdCc3U2oeHs924C3jphJnn9YSKNcGVKFsRkyJuCwJDsdEUqHR",
  "key30": "4RsHhWheK72StjqDf4B6WzJDmGduntUYNLT9w9gMtL2zbkvCSbFipz8pA1kLmknvNSaLyTgSmdf4RWa6zbhx711D",
  "key31": "2h2kfjKZvhUtDweUyxAow5DL3icxKwJfEYp2ExRJMBhSZ1BdG4Hi4aggy1xvVgvs8AQdMVuy4bRnqHw96YFBrMZz",
  "key32": "2PRgKqkmYqXhdxHsE1GKH4uZCguZEpV2hkSixz1hdAuLDCMup6xwm5zm2otjdpwuvfVtguZnZcrQDVr1gawcGfvP",
  "key33": "5KY7GDjnEpJhCaWQF75SzkqjC2V5tpcGePZ4DTof43gKswZXoc4PeGa1vZh6i9Yprjuq8HvMdhAs8eRqjcCSumnj",
  "key34": "5snsngjA17uKMZbrHZMpaESRnQWTGeJFygmPBjBcWqAjuwk6Z8xzRQVdKCikDuJ35bRi7tKSVeryzUaB6XUDDgFF",
  "key35": "3PNQM3EqLhpUbh5FdeuzdFEtZsM2NhsjcdLxGRHbkhmKEQC5zHpxzsvjugRJZJpYkqBekhAozYqg9zcWBUeEU5WX",
  "key36": "39uQbxq3o735uiQ8ZzWkmAaNfDyvRUu5sRUsW4Ha2nsLpPsiZbisFky4abLyNSfJyDCtmpneK8WATs82hHsHLWqW",
  "key37": "3H7S2BA4iznTzq1fw76Ls3ET4HBcpZbGpPVtgBnvkPUxxjCXCsGgnZtCQQMj6NEAxgcVoCwBZBvXMMZ4aGnck9Md",
  "key38": "3btPnqsc6Lmz6EmTWnCnThP5DrvxsJcdVJQpJ6TCz9jrnCk7xd7ogu6TbFheVBRGtpPuRnUyQVjnbSpZpWgw53t3",
  "key39": "w2EJaQxJFWZHh7Cy27PpxpCWPU8Pn5ry42DoD4KQP5sT9FbnPvBaqzHCm5gi25PMKoK62zRnajqwySDJhEMk58E",
  "key40": "4VKm2FdTX6BM1mH8hVjpWcDL1XPy7GHJsQHRXrL5B4FngjrrL9eZjiPWspadR17BnHXpYsknNYc7EwTRT27FCfYm",
  "key41": "3KjNbzojriDxNCGFmEnsb3H3md32Ut2D6ZWZFN8aVrJHqorknrQ5kgGicJMazQKVrWn1Az2TvyTLKAAjPPvcTWJX",
  "key42": "3e5LnKtUormSqf36YpUhNB989rozB3Zh4KevD8jDnpn7AyVkLqBpkMXpgHjX1qYGjwWmAqUtfrZJEFx7nzht23jG",
  "key43": "8qwS3EhTrarfKB961oQVv6VBY35LGFV14qrP7Cr4Y8zWFnDbLQShY7epJGEeWnKdfJoAcY8ZF5V8tQDU6QMMq58",
  "key44": "2B7g9rLm83FMP8u3G9aHHJUQ53WjqsiFjDeSGm2YbcAqkcdQ8iUd1Q9uDKNcL9Ks16EZfPAPcEkEvfnNCgtuG8XW",
  "key45": "5zNEa8nQM9xcBESTeZZuvVmTrjeuv3HzgJt757jQMpe4nELVmpmFhp6DLHereHHnoSisePgiJPyMfaeSnvWiwLdb",
  "key46": "4VGMFxz7igUnmtU5MyRTuhv1cCPjpzrJ5afhJN6GWTc5YfAQexfAw4uqEuPCf94Txxad4PCoieezMQMCvwJurnQ",
  "key47": "5RAqtVoTKeurdbkBEmzMRL3VUASS9mDNeuD1HxvJctD2cFQryFEzitFsH4cLwPJAhNnesB5zWv5q8vbNq2ZM2D64",
  "key48": "5VCErVysoyq4FdrhYXsbD1tzgmVkgEtgZ5rKy3UhS33Q45NycmyGp29TXuE5b2kFqDKLkemFQVqNjAWti7n3XyAu"
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
