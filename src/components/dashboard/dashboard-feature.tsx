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
    "465UvK3JLKeybtv8h1zLjWaxaJGDkB5h5CiFqYSDg6bWiR8f2vqdVFd6YvYh8nm1WANfnGvuiUudn2hfR8NV17WS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2y6h91La8yyNvid2vBcMxoYbckj8LNDetNjxMiURnXMFPXYE48rUB2YmvBRKJjVdPFgewGG74TFWQVhV2Hjd96DF",
  "key1": "Z3UCpgnmoKvJU2Fy99rq8vvzdPEJgP8bZ7yVjYU3a9G9U8dmZmW7W5AwLXV4vJnfSgY84Lpc7bjwAFjKKPJv8sn",
  "key2": "5xLB1VGY277uf41oSyz6Z1aDr3h2J3j1gDdp41dGb89KvHjDvVHegR7jEPKG7DKKufNsDgYEeEd4DqryHGMX1JTo",
  "key3": "2PDq98QrVxA4R1Te9kqVTev1pfCGYtn1M8LcQFmSLnqR4zbqNWiLhD37Ehure3pjSWvWiKRfzvvK1Ny2oAyMUfr2",
  "key4": "5BFr58qR3ArkZ5rcLnAg5fvY8Jv6AT6N5732vsLENL5cUkoRfZH4sbaLNuncK6AAv2jwY6u9tZifU4Cqv2gkEV9w",
  "key5": "5njzzRYPMwJEnKDBBJh2xd7mU9pZvUc2QS3tPB5NgyTUXpc1XYj4GkJwGfqKnf9QWyw5g1pTVRX99SpPSc9rEvCS",
  "key6": "2ymvaSjEbU1BHjeqYBDo4jJUBAPH2M8c3Je4syVq1zyoZEKDjBUWDwMHukDEB689N8QGkBkWa6tNGSZGT9MALo8M",
  "key7": "2Hd5QCVmKTVxn7Lq7p8EToLCNPnUP2qzZcjvsoQ11NTbgPxg9icqvLcwCSxfZVLN6jSFGyTLFGgjkEZcNsg5AEAa",
  "key8": "3F4MfQjy4eHthGvAeUNXZLHAVcLfqdkjBXB6ZEH2oko99shvEGK7HHqm22X11JWsTnNc6fh5qUe3QhHHcmQHNi7W",
  "key9": "57ZZsA6jpC7vbRQoZRabcCRZgReLX9U8k2yxs6yZ82qBd3Tw8CKzCVaxZPonkhSBGgnJoLnSJbVmzQ2CpzXWhLTi",
  "key10": "8sv1Q3hcCWrUMKkRFu5W2LMRScrTgukgVJxDUQV3FPw6GdMNKpZEFFZuKLDKrWDZpxZje7PGWDPo6aba5PkjGfn",
  "key11": "36iRhvXv6fDhT6GgtuqTsKVXxxQ56xKv39Wi5y6YXxU5XfDX4yE2YrSYHKtLAVoBJiTNs7mZ6pcvRAnw3NEyCCjy",
  "key12": "45TVR2QMheGFamLTssaE6bBcdkVEqhV9JsSkZoFkzqVgLpVgo3ccvRL7ZfmMCpCB1vEtgRXofa1KRJ37mGA3S2p",
  "key13": "641HMhHUceoUH9fgxBE8NgTiefUM2B5sfa86pcsgdTsV7PWDqUawwXBLFSWYK8M2dvZEFNmpqzoEuhEtgAQJ2Saj",
  "key14": "4Q3x2r3Qjd4uypTABJ9iatV3Z2ZYDg664xb4nMPKY7S33Qmnsu4wNoL1bWysRKS8cjnXBPY7u3Cy9TSmX2dXqbJU",
  "key15": "2xwAmzSjiskRqRyazF7LT3jTzfRH1Nrbnt9hnmWHYMVQnvNGhjyTppUZVvyfkXW2aZiXK8fd6UmpuF16XPT7NFCu",
  "key16": "4zYcGnzXx2RWNDZQjXBzjL93gyQYsGYNHsxp7aC45n2NCQVsM5QkjYDsvLn8kkG4oQPxpWBuaD2xJffyThRyjg6o",
  "key17": "39k7W9zMddMJ2KaR4KCiwPT8i9ccBBvESG1RfjotCJSD36hvJjB5ajUja3zn3TTtnsfxXwJVdMoWEqJQ96nrKEwK",
  "key18": "5Vbab2vRuw2ypLFFzVjWXfLpoQ5JVe5yiYfwtP1mjvau4hD2dj9sViouYj162h8NX8rXXw6rzqMEQJ1iZ6H8UJN1",
  "key19": "uHa7mh8Uy9Nv8fVpAmBBnqhCWdagJuua2AufvMEBjgdeNghi2JQJ9wyCJMtAUppfbtfcUtvYQsNDFoYfqs8HpeQ",
  "key20": "2e9YwQmBD9JZ4opcRMFyhTuBe74YdeK5Kcr4twFSriB95ET7oGN3Ut1fjn3muBzKw6KGmiZYYMZzJm7mZRdUzJXK",
  "key21": "5NczWYBhQEn3ZEgULXb2SZvCNkErj25yxU8SGS452Sw8VUDd5p4d36zPtckdauSgxgrv8Rg5G9f9phejrfxVWkDV",
  "key22": "24MnqTtUgWvs7zjQ88dMwcigEGAqtizx2JYo71RdbZe855xogipcHLfFDBu4VNBYsafwo9HUa2JGCX8W3d15vDV3",
  "key23": "2Yjc6UFSk9Eaew4Pe1rdxzNAbkgT3PmoEgas6rqwBgeYNdZC9ygPoS66Q7ypaEU6zQ4tmrDd73UKuRkZUFmEKQUU",
  "key24": "5AFyLAdqWtEAmD1MCiTkF2y49z7WaUYRTegamg8g4DomvHnKXPmRPiPxfAo9Q9iRpnu7RWo8FBMkeNJUaAGWVfh4",
  "key25": "4MinGEKKpMcUqsUiG9jdaz3LdgN5ay2xzy5H2wUSumaevDq8sfRrNULuCaTnJxQHH3kfqSCwogktFEgSH9KPzBHn",
  "key26": "4a85xJDjs1j2QPfJtuUK3kSe23121q9cr7FGWfxzJFw8FYKDARgA3hF7HFac3xSLhejEajbDhjy45egnWZMUJurD",
  "key27": "5LrNqA9zpguSAo4WoELzBpVy6TZaWL7yKHnxuzaA9Q9M1cvjB7Wk3mC9JsPMTaWfVA2RHyfqaaKYJMUcYkxTRqSq",
  "key28": "gYEwYB6LArb5c6Fu5ghJFXPJMH3pBo4tcVYHagnbSpvuki9WC7hKnbjfHz7ousZ38GvuXQs3Gcbo1TMZ5Z6gBjY",
  "key29": "3HaVZhp2thoq5zeeQZhLd4hkJXYS25PgAzXwgmsGSGD5n8u8GYkaLMkyKEk9ymxCFG8GNvHVcHAVSHuqZYV2CCme",
  "key30": "3xXDGBjKMaWstM7598BbPwrBqg2oKHzBHgaNWRfsYk9MMKJUH84WYFugi4kzADSxn2X3qrusNKwbj89dCvWHfJyg",
  "key31": "2NneQigMvM5quCGKZNVBEHYMqz17w1ejNHCe5Xx5yboMm1WFRNEwYurTM2XF8f83eEu7Mj1tNzQivmsBcypkzTzD",
  "key32": "4n4NHY6ZetA9zw38RXf2naxsfw3K9kMowJZXozLdWGYQpQ7gkY2WDWqGpPxWsrTsHZVYM4Wi3QKmmyStNx3nwLhX",
  "key33": "2NhfrBpHzPV7FqBcs5sxzj44JA7gdREa84JLutgyZXMprtgcYrRfLEQBvzUCmsdafxSjNDopQevMKzg4caNz1HJ5",
  "key34": "29rkvFhnHnvRJN4Ak1vtayehxxgxxwwHPQobWHo7ZyVJh6mBP8SSvebX3YKcghhwigJDpGDvvAGkizjy1dLtnAAy",
  "key35": "5CQmRp9e6ZUFZLizMkKucGkVxaLUYJx2nj9JZXXEzr2YsSdihvLhcVE31VJBaAr3RVivDxnF5swb5bCKwLkcXtBt",
  "key36": "55SbyuccNDC4ADpDhfXeh3ZfrE7KynsAWTJmaJpUf9R9uoNFUKsp2L9kvyTwi5bo99uiF8mv6BUYuJqFsfPej1zU",
  "key37": "3pcQdzUcJiPZjBWgwKVitoK23Sf8K9LGhnRTh81dauBuLGHThnc593Gyr6ufiLuUtWWgQU7bUoBjaNrZrywPQAdG",
  "key38": "5bzFUAiuATW22HrCnLnoJAHC3Q2QVJ3nFGUgkXz9C7fA3JMMd3tevLP4gCTJTp5AREXKQ8fwAwDCeog1WLPnDaYq",
  "key39": "32dYszonAeRLTDRNVBanq8YEZa4wQFieSKDCWzZXqK1zctKX9V6X5pLGSDEcGhdok2Dp3Bdu3wQE5shdx4PJ9Rqw",
  "key40": "3d8n9s1AT7PfuLdmd4cSZN2TP9pYrdV2Q8KjS1rC4FKQ5eJ4sSJ7wDSZmHLPd67pN2t3H4oZY3ZsEhghyGFmf49J",
  "key41": "4Hw7feBjPWwiAygAHTCUfazARjRv6MfmkxAmvFKA8BLEuy9tyB2z4SKLRpH4AwPAQpEC1o94MMRYrQAqhN6eVzPq",
  "key42": "GJBvyCMB3bYkZrEZ9p67LanABErsnL5HuMzYz3rkFQ6oSfHAApYD2NkJRfvhMzpqQ6obwuccuACnAo4ryk1yAwk",
  "key43": "3xk3vMWUgsdg4EfidwB5VUoRJGaerfT9Gy6g2VLEytt6pnfGDhS5DM5E4yN67MDC2GnvpGcXqMBdkb6FH7yZhjk9"
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
