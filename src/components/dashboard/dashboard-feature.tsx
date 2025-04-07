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
    "666kpeoorC3Kiq59QfQXCENw5CFEbxTET11DBhNsGWgtnJFpc8LzWGXYE6VaMhSBy9VHipaW72oHDBZmUUQ1qBuZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4EXM6XtVNtQ3je58rJNRK2cJ6EETtojWQmvzUc84ZdmUZeFnvU47RcpZnt4MejZ8eAaruZg2j7m8fWLYnSrGNVHN",
  "key1": "46XuradD9c1kr9Rg2eghf2dRcBVpYZ5cxjGV2Aj7U5AnMM72Y3yDnrxkRLMYdW82QUBhWn8Vz2dzXvKEs9Etmkfa",
  "key2": "5QeCf5zCAUMpiM1C5f55PdvRNyB6W9ne6ZLCPJY33X48sNhC3gqEy6ayFkVWfDpHMn1vxQK84EfAhcyDrig71EkW",
  "key3": "2THEqfKtf5nuWwDhvGgxyUbh8146RqP3bwFGWfjVBPRPQscEBkC7PeZuMU4ZYmxtS3nfPn7VF2VFhKyyrFwA8tLK",
  "key4": "5tv4AUMrMm9bkficZhJvQhn6Jre4RhfZPKGxe6KYRzmN88kKcJSmv1jTPnxvjZswQiLDYLWLvyywUyMZz1m3Ypkn",
  "key5": "Wmiu9ivALstMr3MezhduYEPAFD1i5p8BmCwz7noyzhPkDQfWJqeiNr3kBJbhruf7fEVZHKQg9ew63YSc8D4oy2f",
  "key6": "2jttURnCemShw6vWzHAfQwoa3NfHy7MM1Gp6Hzq4R77AYUHNezT49f2S2GWz3C4oetcceksUf8HcjxjSYy432nCM",
  "key7": "61Ec5ScSZsKBHRfuaCxvQw3tSuKioUn3eqZ95A8UzXqRi6fW5vp35srtmEfhZZmqf3ZTwXbEUhUUXRBpnu5hkqzD",
  "key8": "3nvpWvwYBGRqfvZwiXQ8zZ64ShbQKmAXtBogvQLBmvcuqmrd3WSxe9GiNaUqtKywogcwUrGCcAWn7pGivh2gpP4R",
  "key9": "4Xcqyh9ye5Bb7FSREZxRYu1i3wumZQJyf9hpZ26MzZ8hwGfTdp1CL5cgsAALiMweTTD7PQRiNr3hC7Y5zMv2RUio",
  "key10": "51RmnS5wDEdCwtzkcRjWi9yVLxCAPH8289zPa5kgFiShbLyza3JbRgW4MFBZZY8z6qsKTTFPCinmqSw2cUNK6aj3",
  "key11": "5Hx7DjRnEaJFzuCLhB7rUvVtmkJ65U5xyKfd1dFbbUL7My7U4BL1sKNPAHNjmJWtyUwXDA8NuhzMk4eQoBkZEy9Y",
  "key12": "5sRNuQw9Dr2NgbNCs2183swHoSn3bsrvFbqJD4qHYR5uTWoRuVUQ1jL7L58wSpKteQMrHXNmcVwGBeXG29iv7xc2",
  "key13": "iiXjdYczFTTyMYqzzoDWcmKxvTAjoKH4w4o5tGXmVYdFza69n1neioDx9t6yaUe9FegqDFBZ81ukQX1eW8SrBXa",
  "key14": "4NWXsjCu628TnYUdkrjvhYQUh9yBCL1yRZ95getfHwdpLbP8fGe48wz6rzpvrWfWzCf35xMgUvGH8hvfxzsM42kt",
  "key15": "5hRbtNVBHPdVoZDXzZXiJiBCd8xrmTPKu2RrVabEuETM4JTEzejwjqS4r53KE4hNirie1UkMKqzLDWqNYsGKxp7B",
  "key16": "3A2nU21F19Sn55UxPYtBJjnGXMJJJxh2vnv83NZVpDETdXAPtXCifJ6kqAe94zG7k3SzHa8zoi2V1HHFxHY9Fjb3",
  "key17": "3NvnBgXmNQR4umXQ8zSKXhuteGhHakBLNAKbZue1izncX7WdLzcyTGRYgyApQdscBMzqGQwuzaR6hVASKrxcNxWU",
  "key18": "5KbBuyLYpQ4mjYH1bEQhBtyMgQvo32yfDfD9G2cFzWqnb9nBigzKcyTnz4ruumXmdiKdBJLDcAFxBaeQvWYP8Ya1",
  "key19": "2YpSpnzmL6iQ2MkM7i4cd9R7iqwKjczAER6ejzULKJJ4j5onpT8xX3hGXizLjT8aBAZv2ApeVWGBAL4F8a9NdRce",
  "key20": "54X9ZAPnapG2iYkfnr7fyv1Xa2cRuWqneSpqUb9iKXScGpbALEYRTqyDHQuCb4C2wFiE6Nn3SaXmkNQPTvDMWuvs",
  "key21": "3BUucTaLNSDUMbekR93h8G98xE3tTqTVsgwZmK7P8xucwzRyDkjUra6JT2Zdi2TRRYWDgDBy6rLe3q1oNRRihCeF",
  "key22": "3HvpYw9UNTS2YMbRxL2DVZpbAoTBG554UwhrJmWUQhocrcmMF9wbVdtEJgCgiD48ZJ7oSrwDiYQRUeSJriwoWQV2",
  "key23": "53PoMiTCGi5S4ggDKFgGpQJTVPra5fi3BFcpHrEauHEEqtqfQVtKrHuH1B8vJsmTxwt6b5MLWBxXNPgaaaPXPWdf",
  "key24": "4iDuG1pFuz5CV93DEnei93au4jDydtGRmphsXq9SHnQ7eN6r8gJ5wGwCBFpLjkUhtwtP8nwfxXEFWZBgVMSwkA6X",
  "key25": "3JCJQc5dkHC9maAZhguS3Fnzmst6rmJCypjMAyTSL8HUchDnPe3UfwFb8mdTKbuFkWigzMcUmpBzCJMhWxXuAwWC",
  "key26": "4aGHXEKqdrT8gqSaZe9weZ2rgvEXF1LnpqYxN1cGe4b1yp1eq343ESLVXV3LU7Ed261eue7UrnTGdeZVRbkawqDo",
  "key27": "cmekbwrrVYDvwEtq8k62uUEz79n9fpK4GpRHDo6zTcrTHRdpjCS9S4xDLnuTLgF8wdYXDKgbLthUzBEw2H6VrZG",
  "key28": "3Z1KtDV7ksJKJsN6TWftzTPSGz1soYqb7LoeezbvgL9pr1deHVAmGwdu5CnC53SkK92wkQhXQ6H4fqfpmfAqfGuN",
  "key29": "59VQwdWJwyZiUdE9k6AgqwnFiwGDUj8sEkWd4unCzFnbUFa8FVixENDs3rKoPsNr2cpZwf8u68TYNM1HkQWPLjcT",
  "key30": "4UZBd5dcZv5UTohc1EeU6BV6WRtcWhXampnEuj3kL5RswXujz1X8uJXbG4zpqGETMJRxm563qd6UjieoWVA81Wrz",
  "key31": "5tko5dH52FrzchiXGBSdyr2E7wqxvm2zruufMPg6roCeL5LPNYkLHwmu2vVqhPWZZsu4nGu6qfmF5Gj7KNJaV6ZR",
  "key32": "3LFuZn3CQixwcH4yCqaDdVdLF8CPwKqQJBzGjjNT5oRj5QvNkpiyZWkpRwk9i98FQwjKaJWPhRubMT1UbTFWjaue",
  "key33": "35D8DfCJfzVznC57fp3at8d5qFkdLJbkexjz92yt5sgy3dZsactTWZ5JEYqt86GP6Ec37PUj4cHBqKzMi4MAvV9Z",
  "key34": "5nrJRoFg8WZcyuzCzbSpZo7Ub4VN5DjpKjCWwWwkSnnUppi27q9bRkLUqdEcb8hgkSAnPxrH4cgEr7RYwX95y7VR",
  "key35": "2ZtWWofUkfSLhSWEn9X8iHoignqvrD6Z2HCx2e5pngdyizADwcyC51MmGADov8WutBGA3pth3xKmgEy4TnPUketU",
  "key36": "31cugVKkckYcovL6RGkBo9mLWDQFXqvCSsJWb7AjbGvWWod22WsaTa7iq8FHyaThpPmqQDvBAZAjuvm8mm6b681p",
  "key37": "5jCA8bMhUKJDk7ttfL5XMx1T8MX2x9fRfMx9S8m1rA6961V63rk8BSCPd1eSUKfGJmiagU2w5K1EPzm69fGcQW7w"
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
